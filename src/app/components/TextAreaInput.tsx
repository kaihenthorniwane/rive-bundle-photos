import { useEffect, useRef, useState } from "react";
import InputBack from "./InputBack";

export default function TextAreaInput({
  handleInputUpdate,
}: {
  handleInputUpdate: (textVal: string) => void;
}) {
  const [isInputFocused, setIsInputFocused] = useState<boolean>(false);
  const [text, setText] = useState<string>("");
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const handleFocus = (): void => setIsInputFocused(true);

  const handleBlur = (): void => setIsInputFocused(false);
  const handleTextAreaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setText(event.target.value);
    handleInputUpdate(event.target.value);
    adjustTextareaHeight();
  };

  const adjustTextareaHeight = (): void => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    textarea.style.height = "auto";
    const singleLineHeight = "1px";
    textarea.style.height = singleLineHeight;
    textarea.style.height = `${Math.max(
      textarea.scrollHeight,
      parseInt(singleLineHeight)
    )}px`;
  };

  useEffect(() => {
    const handleResize = () => {
      adjustTextareaHeight();
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [text]);

  useEffect(() => {
    adjustTextareaHeight();
  }, [text]);
  return (
    <div
      className={
        "flex w-full relative transition-colors " +
        (isInputFocused ? "text-my-blue" : "text-my-light-blue")
      }
    >
      <textarea
        ref={textareaRef}
        className="text-text-black w-full px-4 resize-none overflow-hidden min-h-0 bg-transparent z-10 rounded-xl outline-none pt-1.5 pb-2.5 font-brahma-semi-bold "
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleTextAreaChange}
        style={{ height: "1px" }}
        value={text}
      />
      <InputBack />
    </div>
  );
}
