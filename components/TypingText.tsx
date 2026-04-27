"use client";

import { useEffect, useState } from "react";

type Phase = "typing" | "holding" | "deleting" | "idle";

type Props = {
  phrases: string[];
  typeSpeedMs?: number;
  deleteSpeedMs?: number;
  holdMs?: number;
  betweenMs?: number;
  className?: string;
};

export function TypingText({
  phrases,
  typeSpeedMs = 75,
  deleteSpeedMs = 35,
  holdMs = 1600,
  betweenMs = 350,
  className,
}: Props) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<Phase>("typing");

  useEffect(() => {
    if (phrases.length === 0) return;
    const target = phrases[index % phrases.length];
    let timer: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      if (text.length < target.length) {
        timer = setTimeout(
          () => setText(target.slice(0, text.length + 1)),
          typeSpeedMs,
        );
      } else {
        timer = setTimeout(() => setPhase("holding"), holdMs);
      }
    } else if (phase === "holding") {
      timer = setTimeout(() => setPhase("deleting"), 0);
    } else if (phase === "deleting") {
      if (text.length > 0) {
        timer = setTimeout(
          () => setText(target.slice(0, text.length - 1)),
          deleteSpeedMs,
        );
      } else {
        timer = setTimeout(() => {
          setIndex((i) => (i + 1) % phrases.length);
          setPhase("typing");
        }, betweenMs);
      }
    }

    return () => clearTimeout(timer);
  }, [
    text,
    phase,
    index,
    phrases,
    typeSpeedMs,
    deleteSpeedMs,
    holdMs,
    betweenMs,
  ]);

  return (
    <span className={className}>
      <span>{text}</span>
      <span aria-hidden className="caret" />
    </span>
  );
}
