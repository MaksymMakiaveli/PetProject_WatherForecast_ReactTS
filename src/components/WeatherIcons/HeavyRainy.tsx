import React from 'react';
import { motion } from 'framer-motion';
import { positionVariants } from '@component/WeatherIcons/variants/positionVariants';

interface HeavyRainyProps {}
const dropsArr = [
  `M27.623,52.217c-0.152,0.57-0.739,0.908-1.306,0.756l0,0c-0.57-0.154-0.906-0.738-0.755-1.306l2.208-8.242
          c0.151-0.569,0.737-0.907,1.305-0.756l0,0c0.572,0.151,0.907,0.739,0.755,1.306L27.623,52.217z`,
  `M38.441,43.971
          c0.149-0.566-0.188-1.154-0.756-1.304l0,0c-0.574-0.149-1.154,0.187-1.308,0.754l-2.204,8.241c-0.154,0.57,0.18,1.154,0.752,1.309
          l0,0c0.569,0.15,1.152-0.186,1.307-0.754L38.441,43.971z`,
  `M47.05,43.971c0.15-0.566-0.188-1.154-0.756-1.304l0,0
          c-0.573-0.149-1.153,0.187-1.308,0.754l-2.207,8.241c-0.154,0.57,0.184,1.154,0.756,1.309l0,0c0.568,0.15,1.152-0.186,1.307-0.754
          L47.05,43.971z`,
  ` M21.223,43.971c0.151-0.566-0.187-1.154-0.755-1.304l0,0c-0.57-0.149-1.154,0.187-1.306,0.754l-2.208,8.241
          c-0.153,0.57,0.185,1.154,0.753,1.309l0,0c0.57,0.15,1.154-0.186,1.307-0.754L21.223,43.971z`,
];

const HeavyRainy: React.FC<HeavyRainyProps> = () => (
  <motion.svg
    version="1.1"
    id="RAINY"
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
      <g id="day_bg_3_">
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

      <g>
        <motion.path
          fill="#DFE0E1"
          variants={positionVariants('x', -50)}
          animate={{ rotate: [2, -2] }}
          transition={{ yoyo: Infinity, duration: 3 }}
          filter="drop-shadow( 3px 3px 2px rgba(0, 0, 0, .3))"
          d="M34.8,19.522c-0.625,0-1.225,0.105-1.806,0.252c-1.483-2.872-4.476-4.841-7.932-4.841
			      c-4.102,0-7.552,2.771-8.598,6.541c-0.615-0.194-1.258-0.328-1.942-0.328c-3.584,0-6.492,2.907-6.492,6.494
			      c0,3.584,2.907,6.491,6.492,6.491h0.983h19.111H34.8c4.038,0,7.31-3.271,7.31-7.304C42.107,22.795,38.838,19.522,34.8,19.522z"
        />
        <motion.path
          fill="#FFFFFF"
          variants={positionVariants('x', 50)}
          animate={{ rotate: [-2, 2] }}
          transition={{ yoyo: Infinity, duration: 3 }}
          filter="drop-shadow( 3px 3px 2px rgba(0, 0, 0, .4))"
          d="M48.667,23.422c-0.63,0-1.229,0.104-1.812,0.252c-1.48-2.874-4.476-4.843-7.932-4.843
			      c-4.102,0-7.552,2.771-8.598,6.541c-0.617-0.194-1.26-0.33-1.943-0.33c-3.584,0-6.492,2.909-6.492,6.495
			      c0,3.583,2.907,6.492,6.492,6.492h0.981h19.115h0.183c4.036,0,7.305-3.271,7.305-7.305C55.967,26.69,52.698,23.422,48.667,23.422z"
        />
      </g>
      <motion.g fill="#CCF1FE" variants={positionVariants('y', 30)}>
        {dropsArr.map((drop, i) => (
          <motion.path
            key={drop}
            d={drop}
            animate={{ opacity: [0, 1, 0], y: [0, 35] }}
            transition={{
              repeat: Infinity,
              duration: 3,
              delay: (i + 4) * Math.random(),
              ease: 'linear',
            }}
          />
        ))}
      </motion.g>
    </g>
  </motion.svg>
);

export default React.memo(HeavyRainy);
