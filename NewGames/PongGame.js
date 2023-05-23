//import React, { useEffect, useRef } from 'react';

//const PongGame = () => {
 // const canvasRef = useRef(null);

  //useEffect(() => {
    const canvas = canvasRef.current;
    const pen = canvas.getContext('2d');

   // const player = {
     // x: 30,
     // y: canvas.height / 2 - 100 / 2,
     // width: 10,
     // height: 100,
     // color: 'rgb(255, 102, 0)',
    // score: 0,
    //};

    // Rest of the game logic...

    // Rendera funktioner
    const render = () => {
      // Code for rendering the game
    };

    // Updatera funktioner
    const update = () => {
      // Code for updating the game state
    };

    // spelet loop
    const gameLoop = () => {
      update();
      render();
    };

    //const framePerSecond = 50;
   // const intervalId = setInterval(gameLoop, 1000 / framePerSecond);

   // return () => {
     // clearInterval(intervalId);
   // };
  //}, []);

 // return <canvas ref={canvasRef} id="pong" />;
//};

//export default PongGame;