import { decodeImage, type ImageAsset, useRive } from "@rive-app/react-canvas";
import { motion } from "framer-motion";
import { useState } from "react";
import { type ImageMessageProps } from "../page";

export default function RiveBundlePhotos({ msg }: { msg: ImageMessageProps }) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const setImageAsset = (asset: ImageAsset, src: string) => {
    fetch(src).then(async (res) => {
      console.log("doing this");
      const image = await decodeImage(new Uint8Array(await res.arrayBuffer()));
      asset.setRenderImage(image);
      image.unref();
    });
  };

  const handleOnClick = (): void => setIsExpanded((prevValue) => !prevValue);

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

  return (
    <>
      {isExpanded && (
        <div className="w-[16.5rem] h-[18.75rem] min-w-[16.5rem] min-h-[18.75rem]" />
      )}
      <motion.div
        className={
          isExpanded
            ? "fixed left-0 top-0 right-0 bottom-0 z-[100] h-full w-full"
            : "ml-20 flex justify-end relative "
        }
        initial={{ x: "1rem" }}
        animate={{ x: "0rem" }}
        transition={{ duration: 1, ease: [0.08, 0.99, 0.09, 1] }}
      >
        <div
          className={
            (isExpanded ? "w-full h-full" : "w-[16.5rem] h-[18.75rem]") +
            " flex justify-center items-center overflow-hidden"
          }
          onClick={handleOnClick}
        >
          <div className="aspect-square min-w-[67.5rem] max-w-[67.5rem]">
            <RiveComponent />
          </div>
        </div>
      </motion.div>
    </>
  );
}
