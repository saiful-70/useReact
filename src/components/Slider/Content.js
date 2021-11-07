import { useState } from "react";

import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs";

const Slider = () => {
  const images = [
    "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/aurora.jpg",
    "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/canyon.jpg",
    "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/city.jpg",
    "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg",
    "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/mountains.jpg",
    "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/redsky.jpg",
    "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/sandy-shores.jpg",
    "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/tree-of-life.jpg",
  ];

  const [index, setIndex] = useState(0);

  // useEffect(() => {
  //   setTimeout(() => {
  //     if (index !== images.length - 1) {
  //       setIndex((prev) => prev + 1);
  //     } else if (index === images.length - 1) {
  //       setIndex(0);
  //     }
  //   }, 5000);
  // });

  const handleBackward = () => {
    if (index !== 0) {
      setIndex((prev) => prev - 1);
    } else if (index === 0) {
      setIndex(images.length - 1);
    }
  };

  const handleForward = () => {
    if (index !== images.length - 1) {
      setIndex((prev) => prev + 1);
    } else if (index === images.length - 1) {
      setIndex(0);
    }
  };

  return (
    <main className="container h-3/4 flex-center container mx-auto relative">
      <img
        src={images[index]}
        alt={`img ${index}`}
        className=" h-2/3 w-2/3 rounded-md"
      />
      <BsArrowLeftSquareFill
        onClick={handleBackward}
        className="slider-btn left-1/4"
      />
      <BsArrowRightSquareFill
        onClick={handleForward}
        className="slider-btn right-1/4"
      />
    </main>
  );
};

export default Slider;
