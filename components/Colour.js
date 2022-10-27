import chroma from "chroma-js";

const Colour = ({ colourCode, handleLock, position, icon }) => {
  return (
    <div
      className={`relative flex h-full w-full flex-row justify-around md:flex-col ${
        chroma(colourCode).luminance() <= 0.5 ? "text-white" : "text-black"
      }`}
      style={{ background: colourCode }}
      onClick={() => {
        navigator.clipboard.writeText(colourCode);
      }}
    >
      <h2
        className={`cursor-pointer self-center rounded-lg p-4 font-bold hover:border sm:text-base md:text-lg ${
          chroma(colourCode).luminance() <= 0.5
            ? "border-white"
            : "border-black"
        }`}
      >
        {colourCode}
      </h2>
      <div
        className="cursor-pointer self-center"
        onClick={(event) => handleLock(colourCode, position, event.target)}
      >
        {icon === "open" ? (
          <i className="fa-solid fa-lock-open fa-xl" id="lock"></i>
        ) : (
          <i className="fa-solid fa-lock fa-xl" id="lock"></i>
        )}
      </div>
    </div>
  );
};

export default Colour;
