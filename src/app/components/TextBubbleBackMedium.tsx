export default function TextBubbleBackMedium({
  showTail = false,
}: {
  showTail: boolean;
}) {
  return (
    <div className="text-my-blue grid grid-cols-[3.125rem,auto,3.125rem] grid-rows-[3.125rem,auto,3.125rem] absolute left-0 top-0 right-0 bottom-0 w-full h-full bg-my-blue rounded-[3.125rem]">
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
        width="50"
        height="50"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.1752 3.10898C24.6933 0 33.1289 0 50 0V50H0C0 33.1289 0 24.6933 3.10898 18.1752C6.25687 11.5755 11.5755 6.25687 18.1752 3.10898Z"
          fill="currentColor"
        />
      </svg>

      <div className="bg-my-blue" />
      <svg
        width="50"
        height="50"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M31.8248 3.10898C25.3067 0 16.8711 0 0 0V50H50C50 33.1289 50 24.6933 46.891 18.1752C43.7431 11.5755 38.4245 6.25687 31.8248 3.10898Z"
          fill="currentColor"
        />
      </svg>

      <div className="bg-my-blue" />
      <div className="bg-my-blue" />

      <div className="bg-my-blue" />
      <svg
        width="50"
        height="50"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.1752 46.891C24.6933 50 33.1289 50 50 50V0H0C0 16.8711 0 25.3067 3.10898 31.8248C6.25687 38.4245 11.5755 43.7431 18.1752 46.891Z"
          fill="currentColor"
        />
      </svg>

      <div className="bg-my-blue" />
      <svg
        width="50"
        height="50"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M31.8248 46.891C25.3067 50 16.8711 50 0 50V0H50C50 16.8711 50 25.3067 46.891 31.8248C43.7431 38.4245 38.4245 43.7431 31.8248 46.891Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}
