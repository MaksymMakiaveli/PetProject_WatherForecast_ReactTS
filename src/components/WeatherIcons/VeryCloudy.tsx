import React from 'react';
import { motion } from 'framer-motion';
import { positionVariants } from '@component/WeatherIcons/variants/positionVariants';

interface VeryCloudyProps {}

const VeryCloudy: React.FC<VeryCloudyProps> = () => (
  <motion.svg
    initial="hidden"
    animate="visible"
    version="1.1"
    id="CLOUDS"
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width="64px"
    height="64px"
    viewBox="0 0 64 64"
    enableBackground="new 0 0 64 64"
  >
    <g>
      <g id="day_bg_7_">
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
      <motion.g>
        <motion.path
          animate={{ rotate: [2, -2] }}
          transition={{ yoyo: Infinity, duration: 3 }}
          variants={positionVariants('x', -40)}
          fill="#DFE0E1"
          d="M34.8,25.039c-0.625,0-1.225,0.105-1.806,0.252c-1.485-2.874-4.478-4.843-7.934-4.843
            c-4.102,0-7.552,2.771-8.598,6.541c-0.616-0.194-1.258-0.328-1.942-0.328c-3.584,0-6.492,2.907-6.492,6.493
            c0,3.584,2.907,6.492,6.492,6.492h0.983h19.113H34.8c4.035,0,7.31-3.271,7.31-7.305C42.107,28.307,38.838,25.039,34.8,25.039z"
          filter="drop-shadow( 3px 5px 2px rgba(0, 0, 0, .2))"
        />
        <motion.path
          variants={positionVariants('x', 40)}
          animate={{ rotate: [-2, 2] }}
          transition={{ yoyo: Infinity, duration: 3 }}
          fill="#FFFFFF"
          d="M48.667,28.938c-0.63,0-1.229,0.104-1.812,0.252c-1.48-2.874-4.476-4.842-7.932-4.842
            c-4.102,0-7.552,2.771-8.598,6.541c-0.617-0.194-1.26-0.328-1.943-0.328c-3.584,0-6.492,2.906-6.492,6.494
            c0,3.584,2.907,6.491,6.492,6.491h0.981h19.115h0.183c4.036,0,7.305-3.271,7.305-7.305C55.967,32.211,52.698,28.938,48.667,28.938
            z"
          filter="drop-shadow( 3px 8px 2px rgba(0, 0, 0, .4))"
        />
      </motion.g>
    </g>
  </motion.svg>
);

export default React.memo(VeryCloudy);
