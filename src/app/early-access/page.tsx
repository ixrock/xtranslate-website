"use client";

import "./early-access.css"
import { useState } from "react";
import { EarlyAccessSource, joinEarlyAccess } from "@/actions/early-access";
import { useSession } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/app/components/Button";

export default function EarlyAccessPage() {
  const { data: session } = useSession();
  const [joining, setJoining] = useState(false);
  const [joined, setJoined] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const source = searchParams.get("source") as EarlyAccessSource;

  const handleJoin = async () => {
    setJoining(true);
    setError(null);
    try {
      await joinEarlyAccess(source);
      setJoined(true);
    } catch {
      setError("Произошла ошибка. Попробуйте позже.");
    } finally {
      setJoining(false);
    }
  };

  return (
    <div className="EarlyAccess flex column gaps align-center">
      <h1>Ранний доступ к AI-переводам страниц</h1>
      <h2>
        Получите уведомление о запуске и скидку 20% на первый месяц.
      </h2>

      <div className="flex column gaps">
        {joined ? (
          <p className="success">Вы в списке! Уведомим по почте. 🎉</p>
        ) : (
          <Button themed onClick={handleJoin} disabled={!session || joining}>
            {joining ? "Добавляем..." : "Получить доступ"}
          </Button>
        )}
        {error && <p className="error">{error}</p>}
      </div>

      <p className="footerNote">
        Мы не рассылаем спам. Только 1 письмо при запуске.
      </p>
    </div>
  );
}
