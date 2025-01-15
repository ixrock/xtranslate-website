"use client";

import styles from './light-dark.module.css';
import React, { useEffect } from 'react';
import LightDarkIcon from "./light-dark-mode.svg"

export enum Mode {
  LIGHT = "light",
  DARK = "dark",
}

export const defaultMode = Mode.LIGHT;

export interface LightDarkModeProps {
  storageId?: string;
  mode?: Mode;
}

export function LightDarkModeSwitcher({ mode: initialModel = defaultMode, storageId }: LightDarkModeProps) {
  const [mode, setMode] = React.useState(initialModel);
  const title = `Mode: ${mode}`

  async function toggleMode(mode: Mode) {
    const newMode = mode === Mode.LIGHT ? Mode.DARK : Mode.LIGHT;
    await saveToPersistentStorage(newMode, storageId);
    setMode(newMode);
  }

  useEffect(() => {
    getFromPersistentStorage(storageId).then(setMode);
  }, []);

  useEffect(() => {
    document.documentElement.classList.remove(Mode.DARK, Mode.LIGHT)
    document.documentElement.classList.add(mode);
  }, [mode]);

  return (
    <a
      className={styles.iconDarkLight}
      onClick={() => toggleMode(mode)}
      title={title}
    >
      <LightDarkIcon/>
    </a>
  )
}

export async function saveToPersistentStorage(mode: Mode, id = "theme") {
  try {
    localStorage.setItem(id, mode);
    return mode;
  } catch (err) {
    console.error(`Failed to save new mode="${mode}" to persistent storage with ID=${id}`);
    return getFromPersistentStorage(id);
  }
}

export async function getFromPersistentStorage(id = "theme"): Promise<Mode> {
  return localStorage.getItem(id) as Mode ?? defaultMode;
}

