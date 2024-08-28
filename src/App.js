// import React, { useState } from 'react';
// import backgroundImage from './51188.jpg';
// import AHMAR from './audios/AHMAR.mp3';
// import AKHDARR from './audios/AKHDARR.mp3';
// import ASFAR from './audios/ASFAR.mp3';
// import Aswad from './audios/Aswad.mp3';
// import BORTO9ALIY from'./audios/BORTO9ALIY.mp3';
// import WARDIY from'./audios/WARDIY.mp3';
// import Azra9 from'./audios/Azra9.mp3';
// import Ramadiy from'./audios/Ramadiy.mp3';
// const Game = () => {
//   const [color, setColor] = useState('');

//   const changeColor = () => {
//     const colors = ['red', 'green', 'blue', 'orange', 'yellow', 'gray', 'pink', 'black'];
//     const randomColor = colors[Math.floor(Math.random() * colors.length)];
//     setColor(randomColor);
//     switch (randomColor) {
//       case 'red':
//         new Audio(AHMAR).play();
//         break;
//       case 'green':
//         new Audio(AKHDARR).play();
//         break;
//       case 'yellow':
//         new Audio(ASFAR).play();
//         break;
//       case 'black':
//         new Audio(Aswad).play();
//         break;
//       case 'orange':
//         new Audio(BORTO9ALIY).play();
//         break;
//         case 'pink':
//           new Audio(WARDIY).play();
//           break;
//           case 'blue':
//             new Audio(Azra9).play();
//             break; 
//             case 'gray':
//               new Audio(Ramadiy).play();
//               break; 
//       default:
//         break;
//     }
//   };

//   return (
//     <div className="game-container" style={{ backgroundImage: `url(${backgroundImage})`, height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//       <button onClick={changeColor} style={{ backgroundColor: color, padding: '20px', fontSize: '20px', fontWeight: 'bold', border: 'none', borderRadius: '10px', cursor: 'pointer', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', transition: 'background-color 0.3s' }}>
//         Change Color
//       </button>
//     </div>
//   );
// };

// export default Game;


// import React, { useState } from 'react';
// import backgroundImage from './51188.jpg';
// import AHMAR from './audios/AHMAR.mp3';
// import AKHDARR from './audios/AKHDARR.mp3';
// import ASFAR from './audios/ASFAR.mp3';
// import Aswad from './audios/Aswad.mp3';
// import BORTO9ALIY from './audios/BORTO9ALIY.mp3';
// import WARDIY from './audios/WARDIY.mp3';
// import Azra9 from './audios/Azra9.mp3';
// import Ramadiy from './audios/Ramadiy.mp3';

// const Game = () => {
//   const [color, setColor] = useState('');
//   const [audio, setAudio] = useState(null);

//   const changeColor = () => {
//     const colors = ['red', 'green', 'blue', 'orange', 'yellow', 'gray', 'pink', 'black'];
//     const randomColor = colors[Math.floor(Math.random() * colors.length)];
//     setColor(randomColor);
//     switch (randomColor) {
//       case 'red':
//         setAudio(AHMAR);
//         break;
//       case 'green':
//         setAudio(AKHDARR);
//         break;
//       case 'yellow':
//         setAudio(ASFAR);
//         break;
//       case 'black':
//         setAudio(Aswad);
//         break;
//       case 'orange':
//         setAudio(BORTO9ALIY);
//         break;
//       case 'pink':
//         setAudio(WARDIY);
//         break;
//       case 'blue':
//         setAudio(Azra9);
//         break;
//       case 'gray':
//         setAudio(Ramadiy);
//         break;
//       default:
//         setAudio(null);
//         break;
//     }
//   };

//   return (
//     <div className="game-container" style={{ backgroundImage: `url(${backgroundImage})`, height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
//       <div style={{ marginBottom: '20px', fontSize: '24px', fontWeight: 'bold', color: 'white' }}>{color}</div>
//       <button onClick={changeColor} style={{ backgroundColor: color, padding: '20px', fontSize: '20px', fontWeight: 'bold', border: 'none', borderRadius: '10px', cursor: 'pointer', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', transition: 'background-color 0.3s' }}>
//         Change Color
//       </button>
//       <div className="rocks" style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
//         {colors.map((col, index) => (
//           <div key={index} className="rock" style={{ backgroundColor: col, width: '30px', height: '30px', borderRadius: '50%', margin: '0 10px' }} />
//         ))}
//       </div>
//       {audio && <audio src={audio} autoPlay />}
//     </div>
//   );
// };

// export default Game;












// import React, { useState } from 'react';
// import backgroundImage from './51188.jpg';
// import AHMAR from './audios/AHMAR.mp3';
// import AKHDARR from './audios/AKHDARR.mp3';
// import ASFAR from './audios/ASFAR.mp3';
// import Aswad from './audios/Aswad.mp3';
// import BORTO9ALIY from './audios/BORTO9ALIY.mp3';
// import WARDIY from './audios/WARDIY.mp3';
// import Azra9 from './audios/Azra9.mp3';
// import Ramadiy from './audios/Ramadiy.mp3';

// // Définition de la variable colors en dehors de la fonction Game
// const colors = ['red', 'green', 'blue', 'orange', 'yellow', 'gray', 'pink', 'black'];

// const Game = () => {
//   const [color, setColor] = useState('');
//   const [audio, setAudio] = useState(null);

//   const changeColor = () => {
//     const randomColor = colors[Math.floor(Math.random() * colors.length)];
//     setColor(randomColor);
//     switch (randomColor) {
//       case 'red':
//         setAudio(AHMAR);
//         break;
//       case 'green':
//         setAudio(AKHDARR);
//         break;
//       case 'yellow':
//         setAudio(ASFAR);
//         break;
//       case 'black':
//         setAudio(Aswad);
//         break;
//       case 'orange':
//         setAudio(BORTO9ALIY);
//         break;
//       case 'pink':
//         setAudio(WARDIY);
//         break;
//       case 'blue':
//         setAudio(Azra9);
//         break;
//       case 'gray':
//         setAudio(Ramadiy);
//         break;
//       default:
//         setAudio(null);
//         break;
//     }
//   };

 
//   return (
//     <div className="game-container" style={{ backgroundImage: `url(${backgroundImage})`, height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
//       <div style={{ marginBottom: '20px', fontSize: '24px', fontWeight: 'bold', color: 'white' }}></div>
//       <button   onClick={changeColor} style={{ backgroundColor: color, padding: '20px', fontSize: '20px', fontWeight: 'bold', border: 'none', borderRadius: '10px', cursor: 'pointer', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', transition: 'background-color 0.3s' }}>
//       {color}
//       </button>
//       <div className="rocks" style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
//         {colors.map((col, index) => (
//           <div key={index} className="rock" style={{ backgroundColor: col, width: '30px', height: '30px', borderRadius: '50%', margin: '0 10px' }} />
//         ))}
//       </div>
//       {audio && <audio src={audio} autoPlay />}
//     </div>
//   );
// };


// export default Game;


// import React, { useState } from 'react';
// import backgroundImage from './51188.jpg';
// import './App.css';

// import AHMAR from './audios/AHMAR.mp3';
// import AKHDARR from './audios/AKHDARR.mp3';
// import ASFAR from './audios/ASFAR.mp3';
// import Aswad from './audios/Aswad.mp3';
// import BORTO9ALIY from './audios/BORTO9ALIY.mp3';
// import WARDIY from './audios/WARDIY.mp3';
// import Azra9 from './audios/Azra9.mp3';
// import Ramadiy from './audios/Ramadiy.mp3';
// const colors = ['red', 'green', 'blue', 'orange', 'yellow', 'gray', 'pink', 'black'];

// const Game = () => {
//   const [color, setColor] = useState('');
//   const [audio, setAudio] = useState(null);
//   const [score, setScore] = useState(0);

//   const changeColor = () => {
//     const randomColor = colors[Math.floor(Math.random() * colors.length)];
//     setColor(randomColor);
//     switch (randomColor) {
//       case 'red':
//                 setAudio(AHMAR);
//                 break;
//               case 'green':
//                 setAudio(AKHDARR);
//                 break;
//               case 'yellow':
//                 setAudio(ASFAR);
//                 break;
//               case 'black':
//                 setAudio(Aswad);
//                 break;
//               case 'orange':
//                 setAudio(BORTO9ALIY);
//                 break;
//               case 'pink':
//                 setAudio(WARDIY);
//                 break;
//               case 'blue':
//                 setAudio(Azra9);
//                 break;
//               case 'gray':
//                 setAudio(Ramadiy);
//               break;
//             default:
//                setAudio(null);
//             break;
        
//     }
//   };

//   const handleScore = (success) => {
//     if (success) {
//       setScore(score + 1);
//     } else {
//       setScore(0); // Réinitialisez le score en cas d'échec
//     }
//   };

//   return (
//     <div className="game-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
//       <div className="score-container">
//         <div>Score: {score}</div>
//       </div>
//       <div className="button-container">
//         <button onClick={changeColor} style={{ backgroundColor: color }}>{color}</button>
//       </div>
//       <div className="circle-container">
     
//         <div className={`circle ${score >= 1 ? 'score-filled' : ''}`} onClick={() => handleScore(score >= 1)}></div>
//         <div className={`circle ${score >= 2 ? 'score-filled' : ''}`} onClick={() => handleScore(score >= 2)}></div>
//         <div className={`circle ${score >= 3 ? 'score-filled' : ''}`} onClick={() => handleScore(score >= 3)}></div>
//         <div className={`circle ${score >= 4 ? 'score-filled' : ''}`} onClick={() => handleScore(score >= 4)}></div>
//         <div className={`circle ${score >= 5 ? 'score-filled' : ''}`} onClick={() => handleScore(score >= 5)}></div>
//       </div>
//       {audio && <audio src={audio} autoPlay />}
//     </div>
//   );
// };

// export default Game;
// import React, { useState, useEffect } from 'react';
// import backgroundImage from './51188.jpg';
// import './App.css'; // Assurez-vous d'avoir le bon chemin vers le fichier CSS
// import AHMAR from './audios/AHMAR.mp3';
// import AKHDARR from './audios/AKHDARR.mp3';
// import ASFAR from './audios/ASFAR.mp3';
// import Aswad from './audios/Aswad.mp3';
// import BORTO9ALIY from './audios/BORTO9ALIY.mp3';
// import WARDIY from './audios/WARDIY.mp3';
// import Azra9 from './audios/Azra9.mp3';
// import Ramadiy from './audios/Ramadiy.mp3';

// const colors = [
//   { name: 'أحمر', audio: AHMAR },
//   { name: 'أخضر', audio: AKHDARR },
//   { name: 'أزرق', audio: Azra9 },
//   { name: 'برتقالي', audio: BORTO9ALIY },
//   { name: 'أصفر', audio: ASFAR },
//   { name: 'رمادي', audio: Ramadiy },
//   { name: 'وردي', audio: WARDIY },
//   { name: 'أسود', audio: Aswad }
// ];

// const Game = () => {
//   const [selectedColor, setSelectedColor] = useState(null);
//   const [score, setScore] = useState(0);

//   useEffect(() => {
//     startGame();
//   },[]);

//   const startGame = () => {
//     const randomIndex = Math.floor(Math.random() * colors.length);
//     setSelectedColor(colors[randomIndex]);
//     playAudio(colors[randomIndex].audio);
//   };

//   const playAudio = (audio) => {
//     const audioElement = new Audio(audio);
//     audioElement.play().catch(error => {
//       console.error("Erreur lors de la lecture de l'audio :", error);
//     });
//   };

//   const handleColorSelection = (color) => {
//     if (color === selectedColor.name) {
//       setScore(score + 1);
//     } else {
//       setScore(0); // Réinitialisez le score en cas d'échec
//     }
//     startGame();
//   };

//   return (
//     <div className="game-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
//       <div className="score-container">
//         <div>Score: {score}</div>
//       </div>
//       <div className="color-container">
//         {selectedColor && (
//           <div className="selected-color">
//             <h1 style={{ color: selectedColor.name }}>{selectedColor.name}</h1>
//             {/* Ajoutez ici l'élément audio pour la prononciation */}
//             <audio controls>
//               <source src={selectedColor.audio} type="audio/mp3" />
//               Your browser does not support the audio element.
//             </audio>
//           </div>
//         )}
//       </div>
//       <div className="circle-container">
//         {colors.map((color, index) => (
//           <div
//             key={index}
//             className={`circle ${color.name} ${selectedColor && selectedColor.name === color.name ? 'selected' : ''}`}
//             onClick={() => handleColorSelection(color.name)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Game;

























































import React from 'react'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './homePage';
import Game from './game';
import GameOver from './gameOver'; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/game" element={<Game />} />
        <Route path="/game-over" element={<GameOver />} />  
      </Routes>
    </BrowserRouter>
  );
}

export default App;
