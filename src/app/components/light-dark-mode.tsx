"use client";

import styles from './light-dark.module.css';
import React, { useEffect } from 'react';

export enum Mode {
  LIGHT = "light",
  DARK = "dark",
}

export const defaultMode = Mode.LIGHT;

export function LightDarkModeSwitcher() {
  const [mode, setMode] = React.useState(defaultMode);
  const title = `Mode: ${mode}`

  async function toggleMode(mode: Mode) {
    const newMode = mode === Mode.LIGHT ? Mode.DARK : Mode.LIGHT;
    await saveToPersistentStorage(newMode);
    setMode(newMode);
  }

  useEffect(() => {
    getFromPersistentStorage().then(setMode);
  }, []);

  useEffect(() => {
    document.documentElement.classList.remove(Mode.DARK, Mode.LIGHT)
    document.documentElement.classList.add(mode);
  }, [mode]);

  return (
    <a onClick={() => toggleMode(mode)}>
      <img
        className={styles.iconDarkLight}
        src="/light-dark-mode.svg"
        title={title}
        alt={title}
      />
    </a>
  )
}

export async function saveToPersistentStorage(mode: Mode) {
  try {
    localStorage.setItem("theme", mode);
    return mode;
  } catch (err) {
    console.error(`Failed to save new mode="${mode}" to persistent storage`);
    return getFromPersistentStorage();
  }
}

export async function getFromPersistentStorage(): Promise<Mode> {
  return localStorage.getItem("theme") as Mode ?? defaultMode;
}

