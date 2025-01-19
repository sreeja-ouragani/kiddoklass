import React from 'react';
import { motion } from 'framer-motion';
import './Home.css'; // Add styling for Home page

const Home = () => {
  // Tree Sway Animation (Tree Trunk)
  

  // Cloud Animation (Floating Clouds)
  const cloudVariants = {
    animate: {
      x: [0, 300, 0], // Move left and right
      y: [10, -20, 10], // Slight up and down movement
      opacity: [1, 0.8, 1],
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 6,
        ease: "easeInOut",
      },
    },
  };
  const cloudVariants2 = {
    animate: {
      x: [0, 300, 0], // Move left and right
      y: [10, -20, 10], // Slight up and down movement
      opacity: [1, 0.8, 1],
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 6,
        ease: "easeInOut",
      },
    },
  };
 
  // Flower Animation (Dancing Flower)
  const flowerVariants = {
    animate: {
      x: [0, 20, -20, 0], // Move side to side
      y: [0, -10, 0], // Slight upward movement
      scale: [1, 1.2, 1],
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  

  // Butterfly Animation (Flying Butterfly)
  const butterflyVariants = {
    animate: {
      x: [0, 200, 0], // Butterfly flying back and forth
      y: [0, -50, 0],
      opacity: [0, 1, 0], // Fluttering effect
      rotate: [0, 360], // Butterfly spinning as it moves
      transition: {
        repeat: Infinity,
        repeatType: "2",
        duration: 4,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="tree-container">
      {/* Moving welcome text */}
      <motion.h1
  className="welcome-text"
  animate={{
    rotate: [0, 2, -2, 0], // Light rotation to simulate a dance
    y: [0, -8, 0],        // Slight vertical movement (bouncing effect)
    opacity: [1, 0.8, 1],  // Slight fade-in and fade-out effect
  }}
  transition={{
    repeat: Infinity,
    repeatType: "loop",
    duration: 2,
    ease: "easeInOut",
  }}
>
  Welcome to KiddoKlass!
</motion.h1>

    

      {/* Cloud animation */}
      <motion.div
        className="cloud"
        variants={cloudVariants}
        animate="animate"
      >
        ☁️
      </motion.div>
      <motion.div
        className="cloud2"
        variants={cloudVariants2}
        animate="animate"
      >
        ☁️
      </motion.div>
     
      {/* Flower animation */}
      <motion.div
        className="flower"
        variants={flowerVariants}
        animate="animate"
      >
        🌸
      </motion.div>

      

      {/* Butterfly animation */}
      <motion.div
        className="butterfly"
        variants={butterflyVariants}
        animate="animate"
      >
        🦋
      </motion.div>
    </div>
  );
};

export default Home;



