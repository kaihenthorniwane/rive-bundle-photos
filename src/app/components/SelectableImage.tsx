import { useRive, useStateMachineInput } from "@rive-app/react-canvas";
import { useEffect, useState } from "react";
import { type ImageObj } from "../page";

type SelectableImageProps = ImageObj & {
  selectedImages: ImageObj[];
  handleToggleSelected: (id: string) => void;
};

export default function SelectableImage({
  id,
  imageURL,
  selectedImages,
  handleToggleSelected,
}: SelectableImageProps) {
  const [isSelected, setIsSelected] = useState<boolean>(false);

  const { rive, RiveComponent } = useRive({
    src: "/riv/image_checkbox.riv",
    stateMachines: "Image Checkbox",
    autoplay: true,
  });

  const riveCheckedInput = useStateMachineInput(
    rive,
    "Image Checkbox",
    "Check"
  );

  useEffect(() => {
    if (riveCheckedInput) {
      riveCheckedInput.value = isSelected;
    }
  }, [isSelected, riveCheckedInput]);

  useEffect(() => {
    const isInSelectedArray = selectedImages.some((item) => item.id === id);
    if (isInSelectedArray) setIsSelected(true);
    if (!isInSelectedArray) setIsSelected(false);
  }, [selectedImages]);

  const handleClick = () => {
    handleToggleSelected(id);
  };

  return (
    <div
      className="relative aspect-square z-10 cursor-pointer active:scale-95 transition "
      onClick={handleClick}
    >
      <div className="absolute z-[-1] left-[-0.0625rem] top-[-0.0625rem] w-[4.5rem] h-[4.5rem] max-h-[4.5rem] max-w-[4.5rem] min-h-[4.5rem] min-w-[4.5rem]">
        <RiveComponent />
      </div>
      <svg
        width="113"
        height="113"
        viewBox="0 0 113 113"
        className={
          "aspect-square z-[-2] w-full h-full absolute top-0 left-0 right-0 bottom-0 transition-opacity " +
          (isSelected ? "opacity-50" : "")
        }
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <clipPath id="clipShape">
            <path d="M0 28C0 16.7643 0 11.1465 2.69649 7.11088C3.86382 5.36383 5.36383 3.86382 7.11088 2.69649C11.1465 0 16.7643 0 28 0H85C96.2357 0 101.854 0 105.889 2.69649C107.636 3.86382 109.136 5.36383 110.304 7.11088C113 11.1465 113 16.7643 113 28V85C113 96.2357 113 101.854 110.304 105.889C109.136 107.636 107.636 109.136 105.889 110.304C101.854 113 96.2357 113 85 113H28C16.7643 113 11.1465 113 7.11088 110.304C5.36383 109.136 3.86382 107.636 2.69649 105.889C0 101.854 0 96.2357 0 85V28Z" />
          </clipPath>
        </defs>

        <image
          href={imageURL}
          height="113"
          width="113"
          preserveAspectRatio="none"
          clipPath="url(#clipShape)"
        />
      </svg>
    </div>
  );
}
