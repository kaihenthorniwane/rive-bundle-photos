"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import CloseButton from "./components/CloseButton";
import RiveSendButton from "./components/RiveSendButton";
import TextAreaInput from "./components/TextAreaInput";

export default function Home() {
  const [isImageSelectorOpen, setIsImageSelectorOpen] =
    useState<boolean>(false);
  const [areEnoughImagesSelected, setAreEnoughImagesSelected] =
    useState<boolean>(false);

  const handleRiveSendButtonPress = (): void => {
    if (isImageSelectorOpen && areEnoughImagesSelected) {
      setIsImageSelectorOpen(false);
    }

    if (!isImageSelectorOpen) {
      setIsImageSelectorOpen(true);
    }
  };

  const handleCloseButtonPress = (): void => {
    setIsImageSelectorOpen(false);
  };

  return (
    <main className="fixed left-0 bottom-0 right-0 top-0 flex items-center justify-center bg-my-light-blue p-5">
      <div className="h-full max-h-[40rem] aspect-[380/628] flex-shrink bg-my-white rounded-3xl flex flex-col flex-end overflow-hidden">
        <div className="flex flex-col gap-4.5 p-2.5 h-full">
          <span>tezt</span>
          <span>tezt</span>
          <span>tezt</span>
        </div>
        <div className="flex gap-2 items-center p-2.5 ">
          {isImageSelectorOpen && (
            <>
              <motion.span
                initial={{ marginLeft: "-1rem" }}
                animate={{ marginLeft: "0rem" }}
                className="pb-2 flex-grow select-none"
              >
                Choose images
              </motion.span>
              <CloseButton handleClick={handleCloseButtonPress} />
            </>
          )}

          {!isImageSelectorOpen && <TextAreaInput />}
          <RiveSendButton
            handleClick={handleRiveSendButtonPress}
            isImageSelectorOpen={isImageSelectorOpen}
            areEnoughImagesSelected={areEnoughImagesSelected}
          />
        </div>

        <AnimatePresence>
          {isImageSelectorOpen && (
            <motion.div
              initial={{
                height: "0rem",
              }}
              animate={{
                height: "auto",
              }}
              exit={{
                height: "0rem",
              }}
              transition={{ duration: 0.5, ease: [0.08, 0.99, 0.09, 1] }}
              className=""
            >
              <div className="grid grid-cols-3 gap-2 px-2.5 pb-2.5">
                <div className="aspect-square bg-my-light-blue" />
                <div className="aspect-square bg-my-light-blue" />
                <div className="aspect-square bg-my-light-blue" />
                <div className="aspect-square bg-my-light-blue" />
                <div className="aspect-square bg-my-light-blue" />
                <div className="aspect-square bg-my-light-blue" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
