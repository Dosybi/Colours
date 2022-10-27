import Head from "next/head";
import { useEffect, useState } from "react";
import chroma from "chroma-js";

import Colour from "../components/Colour";
import Controls from "../components/Controls";

export default function Home() {
  const [colour, setColour] = useState([]);
  const [lockedColours, setLockedColours] = useState([]);
  const [indexes, setIndexes] = useState([]);
  const numberOfColours = 5;
  let palette = [];

  const generatePalette = () => {
    setColour(getColours());
  };

  const getColours = () => {
    palette = [];
    for (let i = 0; i < numberOfColours; i++) {
      palette.push(chroma.random().hex().toString());
    }
    lockedColours.map((colour, index) => {
      palette.splice(indexes[index], 1, colour);
    });
    return palette;
  };

  const handleLock = (colour, index, column) => {
    if (!lockedColours.includes(colour)) {
      lockedColours.push(colour);
      indexes.push(index);
    } else {
      lockedColours.splice(lockedColours.indexOf(colour), 1);
      indexes.splice(indexes.indexOf(index), 1);
    }
    column.classList.toggle("fa-lock");
    column.classList.toggle("fa-lock-open");
  };

  useEffect(() => {
    setColour(getColours());
    document.addEventListener("keydown", handleKeyPress);
  }, []);

  const handleKeyPress = (event) => {
    event.keyCode === 32 ? setColour(getColours()) : null;
  };

  return (
    <div>
      <Head>
        <title>Colour palette generator</title>
        <meta name="description" content="Colour palette generator" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
          integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
      </Head>

      <div className="fullscreen flex flex-col md:flex-row">
        {colour.map((col, index) => {
          return (
            <Colour
              colourCode={col}
              handleLock={handleLock}
              position={index}
              key={index}
              icon={lockedColours.includes(col) ? "lock" : "open"}
            />
          );
        })}
        <Controls handlePress={generatePalette} />
      </div>
    </div>
  );
}
