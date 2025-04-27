import { useState } from "react";

const ImageComparison = () => {
  const [position, setPosition] = useState(50); // Start at 50%

  const handleSlider = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPosition(Number(e.target.value));
  };

  return (
    <div className="relative w-full max-w-[px] h-[1000px] overflow-hidden mx-auto">
      {/* BEFORE image (full) */}
      <img
        src="/recoir 1.jpg" // update this!
        alt="Before"
        className="w-full h-full object-cover absolute top-0 left-0"
      />

      {/* AFTER image (clipped by slider position) */}
      <div
        className="absolute top-0 left-0 h-full overflow-hidden"
        style={{ width: `${position}%` }}
      >
        <img
          src="/DSC01402.jpg" // update this!
          alt="After"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Slider */}
      <input
        type="range"
        min={0}
        max={100}
        value={position}
        onChange={handleSlider}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 w-3/4 z-10"
        aria-label="Image comparison slider"
      />
    </div>
  );
};

export default ImageComparison;
