import { motion } from "framer-motion";

export default function CloseButton({
  handleClick = () => {},
}: {
  handleClick?: () => void;
}) {
  return (
    <motion.svg
      width="54"
      height="47"
      initial={{ marginRight: "-1rem" }}
      animate={{ marginRight: "0rem" }}
      transition={{ ease: "circOut", delay: 0 }}
      viewBox="0 0 54 47"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={handleClick}
      className="text-my-red active:scale-95 active:opacity-50 transition-transform cursor-pointer"
    >
      <path
        d="M0 21C0 12.5732 0 8.35984 2.02236 5.33316C2.89787 4.02288 4.02288 2.89787 5.33316 2.02236C8.35984 0 12.5732 0 21 0H33C41.4268 0 45.6402 0 48.6668 2.02236C49.9771 2.89787 51.1021 4.02288 51.9776 5.33316C54 8.35984 54 12.5732 54 21V26C54 34.4268 54 38.6402 51.9776 41.6668C51.1021 42.9771 49.9771 44.1021 48.6668 44.9776C45.6402 47 41.4268 47 33 47H21C12.5732 47 8.35984 47 5.33316 44.9776C4.02288 44.1021 2.89787 42.9771 2.02236 41.6668C0 38.6402 0 34.4268 0 26V21Z"
        fill="currentColor"
      />
      <motion.path
        initial={{ rotateZ: 90 }}
        animate={{ rotateZ: 0 }}
        transition={{ ease: [0.08, 0.99, 0.09, 1] }}
        d="M18 15L36 33M36 15L18 33"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </motion.svg>
  );
}
