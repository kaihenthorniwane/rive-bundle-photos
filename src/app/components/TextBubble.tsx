import React, { useState, useEffect, useRef } from "react";
import { TextMessageProps } from "../page";
import TextBubbleBackLarge from "./TextBubbleBackLarge";
import TextBubbleBackMedium from "./TextBubbleBackMedium";
import TextBubbleBackSmall from "./TextBubbleBackSmall";

export default function TextBubble({
  msg,
  showTail = false,
}: {
  msg: TextMessageProps;
  showTail: boolean;
}) {
  const [lineCount, setLineCount] = useState<
    "oneline" | "twoline" | "threeline"
  >("oneline");
  const textRef = useRef<HTMLSpanElement>(null);

  const measureText = () => {
    if (textRef.current) {
      const computedStyle = window.getComputedStyle(textRef.current);
      const lineHeight = parseInt(computedStyle.lineHeight);
      const height = textRef.current.offsetHeight;
      const lines = Math.round(height / lineHeight);

      if (lines === 1) setLineCount("oneline");
      else if (lines === 2) setLineCount("twoline");
      else if (lines >= 3) setLineCount("threeline");
    }
  };

  useEffect(() => {
    // Measure text on mount and updates to msg
    measureText();

    // Add resize listener
    window.addEventListener("resize", measureText);

    // Cleanup listener
    return () => {
      window.removeEventListener("resize", measureText);
    };
  }, [msg]);

  if (lineCount === "threeline") {
    return (
      <div
        className={
          "ml-20 flex justify-end relative " + (showTail ? "mb-6.5" : "")
        }
        key={msg.id}
      >
        <div className="break-words relative px-6 pt-4 pb-6">
          <span ref={textRef} className="relative z-10 text-my-white">
            {msg.text}
          </span>
          <TextBubbleBackLarge showTail={showTail} />
        </div>
      </div>
    );
  }
  if (lineCount === "twoline") {
    return (
      <div
        className={
          "ml-20 flex justify-end relative " + (showTail ? "mb-6.5" : "")
        }
        key={msg.id}
      >
        <div className="break-words relative px-6 pt-4 pb-6">
          <span ref={textRef} className="relative z-10 text-my-white">
            {msg.text}
          </span>
          <TextBubbleBackMedium showTail={showTail} />
        </div>
      </div>
    );
  }
  return (
    <div
      className={
        "ml-20 flex justify-end relative " + (showTail ? "mb-6.5" : "")
      }
      key={msg.id}
    >
      <div className="break-words text-center relative px-6 flex pt-4 pb-6 justify-center items-center h-[4.75rem] min-w-28">
        <span ref={textRef} className="relative z-10 text-my-white">
          {msg.text}
        </span>
        <TextBubbleBackSmall showTail={showTail} />
      </div>
    </div>
  );
}
