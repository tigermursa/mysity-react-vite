const CardSkeleton = () => (
  <div className="min-w-[100px] md:max-w-[300px] max-h-[300px] m-4 bg-gray-200 animate-pulse rounded-lg overflow-hidden">
    <div className="min-w-[300px] h-40 bg-gray-300"></div>
    <div className="p-4">
      <div className="h-6 bg-gray-300 mb-2"></div>
      <div className="h-8 bg-gray-300 w-3/4"></div>
    </div>
  </div>
);

export default CardSkeleton;
