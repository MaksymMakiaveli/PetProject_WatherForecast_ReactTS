import React from 'react';
import { motion } from 'framer-motion';
import { positionVariants } from '@component/WeatherIcons/variants/positionVariants';

interface StormyProps {}

const Stormy: React.FC<StormyProps> = () => (
  <motion.svg
    version="1.1"
    id="STORMY"
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
      <g id="day_bg_2_">
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
      <motion.g variants={positionVariants('y', -40)}>
        <motion.path
          fill="#6C7A89"
          animate={{
            y: [0.5, -0.5, 0.5, -0.5, 0.5, 0, 0, 0, 0],
            rotate: [2, -2],
          }}
          transition={{ yoyo: Infinity, duration: 3, delay: 3 }}
          filter="drop-shadow( 3px 3px 2px rgba(0, 0, 0, .4))"
          d="M44.783,18.833c-0.825,0-1.612,0.136-2.375,0.33c-1.95-3.775-5.883-6.363-10.425-6.363
            c-5.392,0-9.925,3.644-11.297,8.597c-0.811-0.255-1.657-0.43-2.551-0.43c-4.712,0-8.533,3.821-8.533,8.533
            c0,4.713,3.821,8.533,8.533,8.533h1.289h25.12h0.241c5.303,0,9.602-4.301,9.602-9.6C54.387,23.132,50.088,18.833,44.783,18.833z"
        />
      </motion.g>
      <motion.g variants={positionVariants('y', 40)}>
        <motion.polygon
          animate={{ rotate: [-3, 3, -3, 3, -3, 3, 0, 0, 0, 0] }}
          transition={{ yoyo: Infinity, duration: 1, delay: 3 }}
          fill="#F5AB35"
          points="37.167,46.908 33.404,46.908 35.033,40.514 26.833,48.889 30.596,48.889 28.969,55.283"
        />
      </motion.g>
    </g>
  </motion.svg>
);

export default React.memo(Stormy);
