const Skelton: React.FC = () => {
  return (
    <div className="bg-gray-100 border rounded-lg shadow-md p-4 md:w-[24.40%] w-full flex-shrink-0 animate-pulse">
      <div className="p-4 flex items-center justify-center h-[300px] bg-gray-300 rounded">
        {/* Image skeleton */}
        <div className="flex items-center justify-center w-full h-[300px] bg-gray-300 rounded dark:bg-gray-700">
          <svg
            className="w-10 h-10 text-gray-200 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 18"
          >
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
          </svg>
        </div>
      </div>
      <div className="relative mt-4">
        <div className="flex gap-2">
          {/* Icon skeleton */}
          <div className="p-2 rounded-full bg-gray-300 shadow-md w-8 h-8 dark:bg-gray-700"></div>
          <div className="mt-1 flex-1">
            {/* Name skeleton */}
            <div className="h-4 bg-gray-300 rounded-full dark:bg-gray-700 w-2/4 mb-2"></div>
            {/* Description skeleton */}
            <div className="h-2 bg-gray-300 rounded-full dark:bg-gray-700 w-1/3"></div>
          </div>
        </div>
        {/* Discount badge skeleton */}
        <div className="text-[8px] px-2 py-[1px] rounded-[5px] bg-gray-300 dark:bg-gray-700 absolute top-0 right-0 w-12 h-4"></div>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2">
        {/* Social items skeleton */}
        {Array(6)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              className="bg-gray-300 shadow-md rounded-full px-2 py-[5px] flex items-center gap-1 dark:bg-gray-700"
            >
              <div className="p-1 rounded-full bg-gray-300 w-4 h-4 dark:bg-gray-700"></div>
              <div className="h-2 bg-gray-300 rounded-full w-1/2 dark:bg-gray-700"></div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Skelton;
