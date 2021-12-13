import React from 'react';
import { motion } from 'framer-motion';
import { positionVariants } from '@component/WeatherIcons/variants/positionVariants';

interface NightCloudyProps {}

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

const NightCloudy: React.FC<NightCloudyProps> = () => (
  <motion.svg
    version="1.1"
    id="CLOUDY"
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width="64px"
    height="64px"
    viewBox="0 0 64 64"
    enableBackground="new 0 0 64 64"
    initial="hidden"
    animate="visible"
  >
    <g>
      <g id="night_bg_4_">
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
      <motion.g fill="#F5D76E" variants={positionVariants('x', -50)}>
        <motion.path
          animate={{ rotate: [-2, 4], y: [-10, -9.5] }}
          transition={{ yoyo: Infinity, delay: 3, duration: 2 }}
          d="M21.928,21.962c1.649-0.953,3.424-1.482,5.203-1.649c-2.801,3.955-3.233,9.332-0.654,13.8
            c2.581,4.47,7.453,6.783,12.279,6.334c-1.031,1.461-2.379,2.73-4.031,3.687c-6.121,3.533-13.953,1.437-17.483-4.684
            C13.708,33.329,15.808,25.498,21.928,21.962z"
        />
      </motion.g>
      <motion.g fill="#F5D76E" variants={positionVariants('x', 50)}>
        {starsArray.map((star, i) => (
          <motion.path
            key={star}
            d={star}
            animate={{ y: [-10, -8] }}
            transition={{
              yoyo: Infinity,
              delay: i * Math.random(),
              duration: 2,
            }}
          />
        ))}
      </motion.g>
      <motion.g variants={positionVariants('y', 40)}>
        <motion.path
          fill="#FFFFFF"
          animate={{
            rotate: [-2, 2],
            y: [-1, 1],
          }}
          transition={{
            yoyo: Infinity,
            duration: 2,
            delay: 4,
          }}
          d="M43.732,27.731c-0.824,0-1.611,0.136-2.375,0.33c-1.949-3.778-5.883-6.364-10.424-6.364
            c-5.391,0-9.924,3.644-11.295,8.598c-0.811-0.256-1.658-0.431-2.552-0.431c-4.712,0-8.533,3.824-8.533,8.537
            c0,4.711,3.821,8.533,8.533,8.533h1.289h25.117h0.242c5.304,0,9.6-4.301,9.6-9.602C53.333,32.03,49.037,27.731,43.732,27.731z"
        />
      </motion.g>
    </g>
  </motion.svg>
);
export default React.memo(NightCloudy);
