import {
  decodeImage,
  type ImageAsset,
  useRive,
  useStateMachineInput,
} from "@rive-app/react-canvas";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { type ImageMessageProps } from "../page";

export default function RiveBundlePhotos({ msg }: { msg: ImageMessageProps }) {
  const [isOverflowHidden, setIsOverflowHidden] = useState<boolean>(true);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const setImageAsset = (asset: ImageAsset, src: string) => {
    fetch(src).then(async (res) => {
      console.log("doing this");
      const image = await decodeImage(new Uint8Array(await res.arrayBuffer()));
      asset.setRenderImage(image);
      image.unref();
    });
  };

  const handleOnClick = (): void => {
    setIsExpanded((prevValue) => !prevValue);
  };

  const { rive, RiveComponent } = useRive({
    src: "/riv/bundled_images/bundled_images.riv",
    stateMachines: "Bundled Images",
    autoplay: true,
    assetLoader: (asset) => {
      if (asset.isImage) {
        const imageAsset = asset as ImageAsset;
        if (imageAsset.name === "Image 1") {
          setImageAsset(imageAsset, msg.images[0].imageURL);
        }
        if (imageAsset.name === "Image 2") {
          setImageAsset(imageAsset, msg.images[1].imageURL);
        }
        if (imageAsset.name === "Image 3") {
          setImageAsset(imageAsset, msg.images[2].imageURL);
        }

        return true;
      } else {
        return false;
      }
    },
  });
  const tiedInput = useStateMachineInput(rive, "Bundled Images", "Tied");

  useEffect(() => {
    if (tiedInput) {
      tiedInput.value = !isExpanded;
    }
  }, [isExpanded, tiedInput]);

  return (
    <>
      {isExpanded && (
        <div className="w-[16.5rem] h-[18.75rem] min-w-[16.5rem] min-h-[18.75rem]" />
      )}
      <motion.div
        className={
          isExpanded
            ? "absolute left-0 top-0 right-0 bottom-0 z-[100] h-full w-full bg-white/75"
            : "flex justify-end relative "
        }
        initial={{ x: "1rem" }}
        animate={{ x: "0rem" }}
        transition={{ duration: 1, ease: [0.08, 0.99, 0.09, 1] }}
      >
        <div
          className={
            (isExpanded ? "w-full h-full" : "w-[16.5rem] h-[18.75rem]") +
            " flex justify-center items-center " +
            (isOverflowHidden ? "overflow-hidden" : "")
          }
          onClick={!isExpanded ? handleOnClick : () => {}}
        >
          {isExpanded && (
            <div
              className="text-text-black absolute right-5 top-5 active:scale-90 p-3"
              onClick={handleOnClick}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                stroke="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 2L20 20" strokeWidth="4" strokeLinecap="round" />
                <path d="M20 2L2 20" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </div>
          )}

          <motion.div
            layout={"position"}
            onLayoutAnimationStart={() => {
              if (isExpanded) {
                setIsOverflowHidden(false);
              }
            }}
            onLayoutAnimationComplete={() => {
              if (!isExpanded) {
                setIsOverflowHidden(true);
              }
            }}
            transition={{ duration: 0.5, ease: [0.08, 0.99, 0.09, 1] }}
            className="aspect-square min-w-[67.5rem] max-w-[67.5rem]"
          >
            <RiveComponent />
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
