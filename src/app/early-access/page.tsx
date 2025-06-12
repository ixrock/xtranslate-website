"use client";

import { useState } from "react";
import { joinEarlyAccess } from "@/actions/early-access";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function EarlyAccessPage() {
  const { data: session, status } = useSession();
  const [joining, setJoining] = useState(false);
  const [joined, setJoined] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleJoin = async () => {
    setJoining(true);
    setError(null);
    try {
      await joinEarlyAccess("early-access-page");
      setJoined(true);
    } catch {
      setError("Произошла ошибка. Попробуйте позже.");
    } finally {
      setJoining(false);
    }
  };

  if (status === "loading") return <p style={{ padding: "1rem" }}>Загрузка...</p>;
  if (!session) {
    return redirect("/api/auth/signin?callbackUrl=/early-access");
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Ранний доступ к AI-переводу</h1>
      <p style={styles.subtitle}>
        Получите уведомление о запуске и скидку 20% на первый месяц.
      </p>

      <div style={styles.box}>
        {joined ? (
          <p style={styles.success}>Вы в списке! Уведомим по почте. 🎉</p>
        ) : (
          <button
            onClick={handleJoin}
            style={joining ? styles.buttonDisabled : styles.button}
            disabled={joining}
          >
            {joining ? "Добавляем..." : "Получить доступ"}
          </button>
        )}
        {error && <p style={styles.error}>{error}</p>}
      </div>

      <p style={styles.footerNote}>
        Мы не рассылаем спам. Только 1 письмо при запуске.
      </p>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "480px",
    margin: "100px auto",
    padding: "24px",
    border: "1px solid #ddd",
    borderRadius: "12px",
    fontFamily: "'Segoe UI', sans-serif",
    backgroundColor: "#fff",
    boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
    textAlign: "center" as const,
  },
  title: {
    fontSize: "28px",
    fontWeight: "600",
    marginBottom: "12px",
    color: "#222",
  },
  subtitle: {
    fontSize: "16px",
    color: "#555",
    marginBottom: "24px",
  },
  box: {
    marginTop: "16px",
  },
  button: {
    backgroundColor: "#4F46E5",
    color: "white",
    fontSize: "16px",
    padding: "12px 24px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
  buttonDisabled: {
    backgroundColor: "#A5B4FC",
    color: "#fff",
    fontSize: "16px",
    padding: "12px 24px",
    border: "none",
    borderRadius: "8px",
    opacity: 0.6,
    cursor: "not-allowed",
  },
  success: {
    color: "#16A34A",
    fontWeight: "500",
  },
  error: {
    color: "#DC2626",
    marginTop: "12px",
    fontSize: "14px",
  },
  footerNote: {
    marginTop: "32px",
    fontSize: "13px",
    color: "#888",
  },
};
