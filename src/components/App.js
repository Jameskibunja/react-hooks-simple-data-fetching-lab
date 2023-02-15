import React, { useState, useEffect } from "react";

function App() {
  const [randomDogImage, setRandomDogImage] = useState();
 // const [isLoaded, setIsLoaded] =useState(false);
  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        setRandomDogImage(data.message);
      });
  }, []);

  if (!randomDogImage) return <p>Loading...</p>;

  return (
    <div>
      <img src={randomDogImage} alt="A Random Dog" />
    </div>
  );
}

export default App;