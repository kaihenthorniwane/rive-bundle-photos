"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import CloseButton from "./components/CloseButton";
import RiveSendButton from "./components/RiveSendButton";
import SelectableImage from "./components/SelectableImage";
import TextAreaInput from "./components/TextAreaInput";
import TextBubble from "./components/TextBubble";
import TextBubbleBackLarge from "./components/TextBubbleBackLarge";

export type ImageObj = {
  id: string;
  imageURL: string;
};

export type TextMessageProps = {
  messageType: "text";
  id: string;
  text: string;
};

export type ImageMessageProps = {
  messageType: "image";
  id: string;
  images: ImageObj[];
};

type MessageProps = TextMessageProps | ImageMessageProps;

type MessageArray = {
  currentIteration: number;
  messages: MessageProps[];
};

const sourceImages: ImageObj[] = [
  { id: "1", imageURL: "/webp/Sample-Image-1.webp" },
  { id: "2", imageURL: "/webp/Sample-Image-2.webp" },
  { id: "3", imageURL: "/webp/Sample-Image-3.webp" },
  { id: "4", imageURL: "/webp/Sample-Image-4.webp" },
  { id: "5", imageURL: "/webp/Sample-Image-5.webp" },
  { id: "6", imageURL: "/webp/Sample-Image-6.webp" },
];

export default function Home() {
  const [messages, setMessages] = useState<MessageArray>({
    currentIteration: 1,
    messages: [],
  });
  const [inputtedText, setInputtedText] = useState<string>("");
  const [selectedImages, setSelectedImages] = useState<ImageObj[]>([]);
  const [isInputtedTextValid, setIsInputtedTextValid] =
    useState<boolean>(false);
  const [isImageSelectorOpen, setIsImageSelectorOpen] =
    useState<boolean>(false);
  const [areEnoughImagesSelected, setAreEnoughImagesSelected] =
    useState<boolean>(false);

  const handleRiveSendButtonPress = (): void => {
    if (isImageSelectorOpen && areEnoughImagesSelected) {
      setIsImageSelectorOpen(false);
      setSelectedImages([]);
    }

    if (!isImageSelectorOpen && (!inputtedText || !isInputtedTextValid)) {
      setIsImageSelectorOpen(true);
    }

    if (!isImageSelectorOpen && isInputtedTextValid && inputtedText) {
      setMessages((prevValue) => {
        return {
          currentIteration: prevValue.currentIteration + 1,
          messages: [
            ...prevValue.messages,
            {
              messageType: "text",
              id: `${prevValue.currentIteration + 1}`,
              text: inputtedText,
            },
          ],
        };
      });
      setInputtedText("");
    }
  };

  const handleCloseButtonPress = (): void => {
    setIsImageSelectorOpen(false);
    setSelectedImages([]);
  };

  const handleToggleSelected = (id: string): void => {
    const isAlreadySelected = selectedImages.some((image) => image.id === id);

    if (!isAlreadySelected) {
      const imageToAdd = sourceImages.find((image) => image.id === id);
      if (imageToAdd) {
        setSelectedImages((prevSelectedImages) => [
          ...prevSelectedImages,
          imageToAdd,
        ]);
      }
    } else {
      setSelectedImages((prevSelectedImages) =>
        prevSelectedImages.filter((image) => image.id !== id)
      );
    }
  };

  const handleInputUpdate = (textVal: string) => {
    setInputtedText(textVal);
  };

  useEffect(() => {
    if (selectedImages.length > 0) {
      setAreEnoughImagesSelected(true);
    } else {
      setAreEnoughImagesSelected(false);
    }
  }, [selectedImages]);

  useEffect(() => {
    if (inputtedText && inputtedText.length > 0) {
      setIsInputtedTextValid(true);
    } else {
      setIsInputtedTextValid(false);
    }
  }, [inputtedText]);

  return (
    <main className="fixed left-0 bottom-0 right-0 top-0 flex items-center justify-center bg-my-light-blue p-5">
      <div className="h-full max-h-[40rem] aspect-[380/628] flex-shrink bg-my-white rounded-3xl flex justify-end flex-col overflow-hidden">
        <div className="flex flex-col justify-end gap-2 p-2.5 h-full">
          {messages.messages.map((msg, index) => {
            if (msg.messageType === "text") {
              return (
                <motion.div
                  key={msg.id}
                  initial={{ y: "1rem" }}
                  animate={{ y: "0rem" }}
                  transition={{ duration: 0.5, ease: [0.08, 0.99, 0.09, 1] }}
                >
                  <TextBubble
                    msg={msg}
                    showTail={index === messages.messages.length - 1}
                  />
                </motion.div>
              );
            }
          })}
        </div>
        <div
          className={
            "relative z-50 flex gap-2  p-2.5 " +
            (isImageSelectorOpen ? "items-center" : "items-start")
          }
        >
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

          {!isImageSelectorOpen && (
            <TextAreaInput
              handleInputUpdate={handleInputUpdate}
              inputtedText={inputtedText}
            />
          )}
          <RiveSendButton
            handleClick={handleRiveSendButtonPress}
            isImageSelectorOpen={isImageSelectorOpen}
            areEnoughImagesSelected={areEnoughImagesSelected}
            isInputtedTextValid={isInputtedTextValid}
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
                {sourceImages.map((img) => (
                  <SelectableImage
                    key={img.id}
                    id={img.id}
                    selectedImages={selectedImages}
                    imageURL={img.imageURL}
                    handleToggleSelected={handleToggleSelected}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
