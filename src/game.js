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
//         <div>نتيجة: {score}</div>
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

// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom'; // Importez useNavigate
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
//   const navigate = useNavigate(); // Utilisez useNavigate pour la navigation

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
//     if (score + 1 >= 20) {
//       navigate('/game-over'); // Naviguez vers la page Game Over lorsque le score atteint 20
//     }
//   };

//   return (
//     <div className="game-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
//       <div className="score-container">
//         <div>نتيجة: {score}</div>
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


// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
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
// import wrongSound from './Correct sound effect and wrong sound effect.mp3';

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
//   const navigate = useNavigate();

//   useEffect(() => {
//     startGame();
//   }, []);

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
//       if (score + 1 >= 10) {
//         navigate('/game-over');
//       }
//     } else {
//       setScore(score);
//       playAudio(wrongSound); // Jouer le son pour la réponse incorrecte
//     }
//     startGame(); // Commence un nouveau tour de jeu à chaque clic
//   };

//   return (
//     <div className="game-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
//       <div className="score-container">
//         <div>نتيجة: {score}</div>
//       </div>
//       <div className="color-container">
//         {selectedColor && (
//           <div className="selected-color">
//             <h1 style={{ color: selectedColor.name }}>{selectedColor.name}</h1>
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

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
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
// import wrongSound from './Correct sound effect and wrong sound effect.mp3';

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
//   const navigate = useNavigate();

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

//   // Appeler startGame() une seule fois au démarrage du composant
//   useState(() => {
//     startGame();
//   }, []);

//   const handleColorSelection = (color) => {
//     if (color === selectedColor.name) {
//       setScore(score + 1);
//       if (score + 1 >= 10) {
//         navigate('/game-over');
//       }
//     } else {
//       setScore(score);
//       playAudio(wrongSound); // Jouer le son pour la réponse incorrecte
//     }
//     startGame(); // Commencer un nouveau tour de jeu à chaque clic
//   };

//   return (
//     <div className="game-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
//       <div className="score-container">
//         <div>نتيجة: {score}</div>
//       </div>
//       <div className="color-container">
//         {selectedColor && (
//           <div className="selected-color">
//             <h1 style={{ color: selectedColor.name }}>{selectedColor.name}</h1>
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

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
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
// import wrongSound from './Correct sound effect and wrong sound effect.mp3';

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
//   const navigate = useNavigate();

//   const startGame = () => {
//     const randomIndex = Math.floor(Math.random() * colors.length);
//     setSelectedColor(colors[randomIndex]);
//   };

//   const playAudio = (audio) => {
//     const audioElement = new Audio(audio);
//     audioElement.play().catch(error => {
//       console.error("Erreur lors de la lecture de l'audio :", error);
//     });
//   };

//   const handleColorSelection = (color) => {
//     if (selectedColor) {
//       if (color === selectedColor.name) {
//         setScore(score + 1);
//         if (score + 1 >= 10) {
//           navigate('/game-over');
//         }
//       } else {
//         setScore(score);
//         playAudio(wrongSound); // Jouer le son pour la réponse incorrecte
//       }
//       startGame(); // Commence un nouveau tour de jeu à chaque clic
//     }
//   };
  

//   const handleStartGame = () => {
//     if (!selectedColor) {
//       startGame();
//       if (selectedColor) {
//         playAudio(selectedColor.audio);
//       }
//     }
//   };
  

//   return (
//     <div className="game-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
//       <div className="score-container">
//         <div>نتيجة: {score}</div>
//       </div>
//       <div className="color-container">
//         {selectedColor && (
//           <div className="selected-color">
//             <h1 style={{ color: selectedColor.name }}>{selectedColor.name}</h1>
//             <audio controls autoPlay={false}>
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
//       <button onClick={handleStartGame}>إلعب</button>
//     </div>
//   );
// };

// export default Game;






// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
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
// import wrongSound from './Correct sound effect and wrong sound effect.mp3';

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
//   const navigate = useNavigate();

//   const startGame = () => {
//     const randomIndex = Math.floor(Math.random() * colors.length);
//     setSelectedColor(colors[randomIndex]);
//   };

//   const playAudio = (audio) => {
//     const audioElement = new Audio(audio);
//     audioElement.play().catch(error => {
//       console.error("Erreur lors de la lecture de l'audio :", error);
//     });
//   };

//   const handleColorSelection = (color) => {
//     if (selectedColor) {
//       if (color === selectedColor.name) {
//         setScore(score + 1);
//         if (score + 1 >= 10) {
//           navigate('/game-over');
//         }
//       } else {
//         setScore(score);
//         playAudio(wrongSound); // Jouer le son pour la réponse incorrecte
//       }
//       startGame(); // Commence un nouveau tour de jeu à chaque clic
//     }
//   };

//   const handleStartGame = () => {
//     if (!selectedColor) {
//       startGame();
//       if (selectedColor) {
//         playAudio(selectedColor.audio);
//       }
//     }
//   };

//   return (
//     <div className="game-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
//       <div className="score-container">
//         <div>نتيجة: {score}</div>
//       </div>
//       <div className="color-container">
//         {selectedColor && (
//           <div className="selected-color">
//             <h1 style={{ color: selectedColor.name }}>{selectedColor.name}</h1>
//             <audio controls autoPlay>
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
//       <button onClick={handleStartGame}>إلعب</button>
//     </div>
//   );
// };

// export default Game;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from './51188.jpg';
import './App.css';
import ahmar from './audios/ahmar.mp3';
import akhdarr from './audios/akhdarr.mp3';
import asfar from './audios/asfar.mp3';
import aswad from './audios/aswad.mp3';
import borto9aliy from './audios/borto9aliy.mp3';
import wardiy from './audios/wardiy.mp3';
import azra9 from './audios/azra9.mp3';
import ramadiy from './audios/ramadiy.mp3';
import wrongSound from './Correct sound effect and wrong sound effect.mp3';

const colors = [
  { name: 'أحمر', audio: ahmar },
  { name: 'أخضر', audio: akhdarr },
  { name: 'أزرق', audio: azra9 },
  { name: 'برتقالي', audio: borto9aliy  },
  { name: 'أصفر', audio: asfar },
  { name: 'رمادي', audio: ramadiy },
  { name: 'وردي', audio: wardiy },
  { name: 'أسود', audio: aswad }
];

const Game = () => {
  const [selectedColor, setSelectedColor] = useState(null);
  const [score, setScore] = useState(0);
  const navigate = useNavigate();

  const startGame = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    const newColor = colors[randomIndex];
    setSelectedColor(newColor);
    playAudio(newColor.audio); 
  };

  const playAudio = (audio) => {
    const audioElement = new Audio(audio);
    audioElement.play().catch(error => {
      console.error("Erreur lors de la lecture de l'audio :", error);
    });
  };

  const handleColorSelection = (color) => {
    if (selectedColor) {
      if (color === selectedColor.name) {
        setScore(score + 1);
        if (score + 1 >= 10) {
          navigate('/game-over');
        }
      } else {
        setScore(score);
        playAudio(wrongSound); 
      }
      startGame(); 
    }
  };

  const handleStartGame = () => {
    if (!selectedColor) {
      startGame();
    }
  };

  return (
    <div className="game-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="score-container">
        <div>نتيجة: {score}</div>
      </div>
      <div className="color-container">
        {selectedColor && (
          <div className="selected-color">
            <h1 style={{ color: selectedColor.name }}>{selectedColor.name}</h1>
            <audio controls autoPlay>
              <source src={selectedColor.audio} type="audio/mp3" />
              Your browser does not support the audio element.
            </audio>
          </div>
        )}
      </div>
      <div className="circle-container">
        {colors.map((color, index) => (
          <div
            key={index}
            className={`circle ${color.name} ${selectedColor && selectedColor.name === color.name ? 'selected' : ''}`}
            onClick={() => handleColorSelection(color.name)}
          />
        ))}
      </div>
      <button className='BUTTON' onClick={handleStartGame}>إلعب</button>
    </div>
  );
};

export default Game;
