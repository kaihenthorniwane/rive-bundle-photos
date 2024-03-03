export default function TextBubbleBackSmall({
  showTail = false,
}: {
  showTail: boolean;
}) {
  return (
    <div className="text-my-blue grid grid-cols-[2.375rem,auto,2.375rem] grid-rows-[2.375rem,2.375rem] absolute left-0 top-0 right-0 bottom-0 w-full h-full bg-my-blue rounded-[3rem]">
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
        width="38"
        height="38"
        viewBox="0 0 38 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.9874 2.31832C18.9141 0 25.2761 0 38 0V38H0C0 25.2761 0 18.9141 2.31832 13.9874C4.73181 8.85848 8.85848 4.73181 13.9874 2.31832Z"
          fill="#4357C4"
        />
      </svg>

      <div className="bg-my-blue" />
      <svg
        width="38"
        height="38"
        viewBox="0 0 38 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24.0126 2.31832C19.0859 0 12.7239 0 0 0V38H38C38 25.2761 38 18.9141 35.6817 13.9874C33.2682 8.85848 29.1415 4.73181 24.0126 2.31832Z"
          fill="#4357C4"
        />
      </svg>

      <svg
        width="38"
        height="38"
        viewBox="0 0 38 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.9874 35.6817C18.9141 38 25.2761 38 38 38V0H0C0 12.7239 0 19.0859 2.31832 24.0126C4.73181 29.1415 8.85848 33.2682 13.9874 35.6817Z"
          fill="#4357C4"
        />
      </svg>

      <div className="bg-my-blue" />
      <svg
        width="38"
        height="38"
        viewBox="0 0 38 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24.0126 35.6817C19.0859 38 12.7239 38 0 38V0H38C38 12.7239 38 19.0859 35.6817 24.0126C33.2682 29.1415 29.1415 33.2682 24.0126 35.6817Z"
          fill="#4357C4"
        />
      </svg>
    </div>
  );
}
