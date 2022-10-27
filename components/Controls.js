const Controls = ({ handlePress }) => {
  return (
    <div className="flex justify-center md:hidden">
      <button
        className="w-22 my-4 rounded-lg border border-gray-700 py-2 px-4"
        onClick={handlePress}
      >
        Generate
      </button>
    </div>
  );
};

export default Controls;
