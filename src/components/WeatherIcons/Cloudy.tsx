import React from 'react';
import { motion } from 'framer-motion';
import { positionVariants } from '@component/WeatherIcons/variants/positionVariants';

interface CloudyProps {}

const Cloudy: React.FC<CloudyProps> = () => (
  <motion.svg
    version="1.1"
    id="CLOUD"
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
      <g id="day_bg">
        <g>
          <circle fill="#89C4F4" cx="32" cy="32" r="32" />
        </g>
        <g>
          <path
            fill="#6BB9F0"
            d="M32,64c17.673,0,32-14.327,32-32S49.673,0,32,0V64z"
          />
        </g>
      </g>
      <motion.g variants={positionVariants('y', -30)}>
        <motion.path
          animate={{ rotate: [-5, 3], y: 2 }}
          transition={{ yoyo: Infinity, duration: 2, ease: 'easeInOut' }}
          fill="#FFFFFF"
          d="M44.783,25.417c-0.825,0-1.612,0.137-2.375,0.331c-1.95-3.778-5.883-6.364-10.425-6.364
            c-5.392,0-9.925,3.644-11.297,8.598c-0.811-0.256-1.657-0.432-2.551-0.432c-4.712,0-8.533,3.821-8.533,8.533
            c0,4.713,3.821,8.533,8.533,8.533h1.289h25.12h0.241c5.303,0,9.602-4.3,9.602-9.601C54.387,29.716,50.088,25.417,44.783,25.417z"
          filter="drop-shadow( 3px 3px 2px rgba(0, 0, 0, .4))"
        />
      </motion.g>
    </g>
  </motion.svg>
);

export default React.memo(Cloudy);
