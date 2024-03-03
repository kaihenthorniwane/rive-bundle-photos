export default function TextBubbleBackLarge({
  showTail = false,
}: {
  showTail: boolean;
}) {
  return (
    <div className="text-my-blue grid grid-cols-[4rem,auto,4rem] grid-rows-[4rem,auto,4rem] absolute left-0 top-0 right-0 bottom-0 w-full h-full bg-my-blue rounded-[3rem]">
      {showTail && (
        <svg
          width="56"
          height="50"
          viewBox="0 0 56 50"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute right-5 top-full -mt-5.5"
        >
          <path
            d="M49.0217 48.8368C27.1789 46.8045 10.3876 36.2449 1.23906 23.0471C0.826096 22.4514 0.619615 22.1535 0.486597 21.7851C0.0846128 20.6716 0.462034 19.2498 1.36334 18.4823C1.66158 18.2283 2.03682 18.0491 2.78731 17.6905L36.6832 1.49577C38.2633 0.740844 39.0534 0.36338 39.5311 0.302224C41.1754 0.091763 42.4956 1.02562 42.8447 2.64612C42.9462 3.117 42.8441 4.07445 42.64 5.98935C41.2117 19.3863 44.293 31.7124 52.0139 40.6253C54.3238 43.2917 55.4789 44.6251 55.668 45.1316C56.3459 46.9478 55.5112 48.5714 53.6398 49.0769C53.1178 49.2179 51.7524 49.0909 49.0217 48.8368Z"
            fill="currentColor"
          />
        </svg>
      )}

      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.2534 6.1634C25.4776 0 38.3184 0 64 0V64H0C0 38.3184 0 25.4776 6.1634 16.2534C8.83159 12.2602 12.2602 8.83159 16.2534 6.1634Z"
          fill="currentColor"
        />
      </svg>

      <div className="bg-my-blue" />
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M47.7466 6.1634C38.5224 0 25.6816 0 0 0V64L64 64C64 38.3184 64 25.4776 57.8366 16.2534C55.1684 12.2602 51.7398 8.83159 47.7466 6.1634Z"
          fill="currentColor"
        />
      </svg>

      <div className="bg-my-blue" />
      <div className="bg-my-blue" />

      <div className="bg-my-blue" />
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.1634 47.7466C0 38.5224 0 25.6816 0 -7.62939e-06H64L64 64H63.9999C38.3184 64 25.4776 64 16.2534 57.8366C12.2602 55.1684 8.83159 51.7398 6.1634 47.7466Z"
          fill="currentColor"
        />
      </svg>

      <div className="bg-my-blue" />
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M57.8366 47.7466C64 38.5224 64 25.6816 64 -7.62939e-06H0V64C25.6816 64 38.5224 64 47.7466 57.8366C51.7398 55.1684 55.1684 51.7398 57.8366 47.7466Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}
