import React from 'react';
import { motion } from 'framer-motion';
import { positionVariants } from '@component/WeatherIcons/variants/positionVariants';

interface SunnyProps {}

const Sunny: React.FC<SunnyProps> = () => (
  <svg
    version="1.1"
    id="SUNNY"
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width="64px"
    height="64px"
    viewBox="0 0 64 64"
    enableBackground="new 0 0 64 64"
  >
    <g>
      <g id="day_bg_6_">
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
      <motion.g
        variants={positionVariants('y', -40)}
        custom={30}
        animate="visible"
        initial="hidden"
      >
        <motion.path
          fill="#F5D76E"
          animate={{ rotate: 360, y: [3, -3] }}
          transition={{ yoyo: Infinity, duration: 10 }}
          d="M34.134,48.533L32,51.732l-2.133-3.199H34.134z M34.131,15.469l-2.133-3.2
            l-2.133,3.2H34.131z M15.467,29.869l-3.2,2.133l3.2,2.135V29.869z M48.531,34.134L51.73,32l-3.199-2.133V34.134z M18.801,42.184
            l-0.753,3.772l3.77-0.756L18.801,42.184z M45.195,21.82l0.757-3.772l-3.772,0.755L45.195,21.82z M42.18,45.2l3.774,0.754
            L45.2,42.184L42.18,45.2z M21.818,18.803l-3.774-0.753l0.755,3.772L21.818,18.803z M32,19.2c-7.068,0-12.8,5.732-12.8,12.8
            c0,7.066,5.732,12.8,12.8,12.8c7.066,0,12.8-5.733,12.8-12.8C44.8,24.932,39.066,19.2,32,19.2z"
        />
      </motion.g>
    </g>
  </svg>
);
export default React.memo(Sunny);
