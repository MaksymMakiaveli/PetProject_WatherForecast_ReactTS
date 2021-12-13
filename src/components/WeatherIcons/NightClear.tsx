import React from 'react';
import { motion } from 'framer-motion';
import { positionVariants } from '@component/WeatherIcons/variants/positionVariants';

interface NightClearProps {}

const starsArray = [
  `M45.759,29.463c-0.263-0.867-0.7-0.867-0.967,0c-0.271,0.869-1.196,1.798-2.063,2.063
    c-0.871,0.267-0.871,0.708,0,0.975c0.867,0.267,1.791,1.194,2.063,2.065c0.267,0.867,0.704,0.867,0.967,0
    c0.271-0.871,1.199-1.799,2.063-2.065c0.869-0.267,0.869-0.708,0-0.975C46.958,31.261,46.029,30.333,45.759,29.463z`,
  `M41.491,18.799
    c-0.263-0.867-0.699-0.867-0.966,0c-0.271,0.869-1.196,1.798-2.063,2.063c-0.871,0.267-0.871,0.708,0,0.975
    c0.866,0.267,1.791,1.195,2.063,2.063c0.267,0.866,0.703,0.866,0.966,0c0.271-0.869,1.2-1.799,2.063-2.063
    c0.869-0.267,0.869-0.708,0-0.975C42.691,20.595,41.764,19.667,41.491,18.799z`,
  `M35.092,27.33c-0.263-0.867-0.699-0.867-0.967,0
    c-0.271,0.869-1.197,1.798-2.063,2.065c-0.87,0.267-0.87,0.706,0,0.975c0.866,0.265,1.793,1.195,2.063,2.064
    c0.268,0.866,0.704,0.866,0.967,0c0.271-0.869,1.2-1.799,2.063-2.064c0.871-0.269,0.871-0.708,0-0.975
    C36.292,29.128,35.361,28.199,35.092,27.33z`,
];

const NightClear: React.FC<NightClearProps> = () => (
  <motion.svg
    initial="hidden"
    animate="visible"
    version="1.1"
    id="CLEAR"
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width="64px"
    height="64px"
    viewBox="0 0 64 64"
    enableBackground="new 0 0 64 64"
  >
    <g>
      <g id="night_bg_5_">
        <g>
          <circle fill="#34495E" cx="32" cy="32" r="32" />
        </g>
        <g>
          <path
            fill="#2C3E50"
            d="M32,64c17.673,0,32-14.327,32-32S49.673,0,32,0V64z"
          />
        </g>
      </g>
      <motion.g fill="#F5D76E" variants={positionVariants('y', 30)}>
        <motion.path
          animate={{ rotate: [-2, 4], y: [-0.5, 0.5] }}
          transition={{ yoyo: Infinity, delay: 3, duration: 2 }}
          d="M21.928,21.962c1.649-0.953,3.424-1.482,5.203-1.649c-2.801,3.955-3.233,9.332-0.654,13.8
              c2.581,4.47,7.453,6.783,12.279,6.334c-1.031,1.461-2.379,2.73-4.031,3.687c-6.121,3.533-13.953,1.437-17.483-4.684
              C13.708,33.329,15.808,25.498,21.928,21.962z"
        />
      </motion.g>
      <motion.g fill="#F5D76E" variants={positionVariants('x', 30)}>
        {starsArray.map((star, i) => (
          <motion.path
            key={star}
            d={star}
            animate={{ y: [-1, 1] }}
            transition={{
              yoyo: Infinity,
              delay: i * Math.random(),
              duration: 2,
            }}
          />
        ))}
      </motion.g>
    </g>
  </motion.svg>
);

export default React.memo(NightClear);
