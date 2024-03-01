"use client";

import { useRive, useStateMachineInput } from "@rive-app/react-canvas";
import { useEffect, useState } from "react";

export default function RiveSendButton({
  handleClick = () => {},
  isInputtedTextValid,
  isImageSelectorOpen,
  areEnoughImagesSelected,
}: {
  handleClick?: () => void;
  isInputtedTextValid: boolean;
  isImageSelectorOpen: boolean;
  areEnoughImagesSelected: boolean;
}) {
  const [isButtonClickable, setIsButtonClickable] = useState<boolean>(true);

  const { rive, RiveComponent } = useRive({
    src: "/riv/send_button.riv",
    stateMachines: "Send Button",
    autoplay: true,
  });

  const isPictureInput = useStateMachineInput(rive, "Send Button", "Picture");

  useEffect(() => {
    if (isImageSelectorOpen && isPictureInput && areEnoughImagesSelected) {
      setIsButtonClickable(true);
      isPictureInput.value = false;
    } else if (
      isImageSelectorOpen &&
      isPictureInput &&
      !areEnoughImagesSelected
    ) {
      setIsButtonClickable(false);
      isPictureInput.value = true;
    } else if (!isImageSelectorOpen && isInputtedTextValid && isPictureInput) {
      setIsButtonClickable(true);
      isPictureInput.value = false;
    } else if (!isImageSelectorOpen && !isInputtedTextValid && isPictureInput) {
      setIsButtonClickable(true);
      isPictureInput.value = true;
    }
  }, [
    isImageSelectorOpen,
    areEnoughImagesSelected,
    isInputtedTextValid,
    isPictureInput,
  ]);

  return (
    <div
      className={
        "h-12 flex aspect-[54/47] transition-transform " +
        (isButtonClickable
          ? "cursor-pointer active:scale-90"
          : "pointer-events-none opacity-25")
      }
      onClick={handleClick}
    >
      <RiveComponent />
    </div>
  );
}
