import React from 'react';
import { motion } from 'framer-motion';
import { positionVariants } from '@component/WeatherIcons/variants/positionVariants';

interface RainOfNightProps {}

const dropsArr = [
  `M31.925,52.217c-0.151,0.57-0.737,0.908-1.305,0.756l0,0c-0.57-0.154-0.906-0.738-0.755-1.306l2.208-8.242
  c0.152-0.569,0.737-0.907,1.307-0.756l0,0c0.571,0.151,0.904,0.739,0.755,1.306L31.925,52.217z`,
  `M42.744,43.971 c0.15-0.566-0.186-1.154-0.758-1.304l0,0c-0.569-0.149-1.153,0.187-1.303,0.754l-2.209,8.241c-0.154,0.57,0.184,1.154,0.754,1.309 l0,0c0.57,0.15,1.154-0.186,1.307-0.754L42.744,43.971z`,
  `M25.525,43.971c0.152-0.566-0.186-1.154-0.755-1.304l0,0
  c-0.569-0.149-1.154,0.187-1.306,0.754l-2.208,8.241c-0.153,0.57,0.183,1.154,0.755,1.309l0,0c0.57,0.15,1.154-0.186,1.307-0.754`,
];

const RainOfNight: React.FC<RainOfNightProps> = () => (
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
      <g id="night_bg_3_">
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
    </g>
    <motion.g variants={positionVariants('y', -40)}>
      <motion.path
        fill="#FFFFFF"
        filter="drop-shadow( 3px 3px 2px rgba(0, 0, 0, .4))"
        animate={{ rotate: [-5, 3], y: 2 }}
        transition={{ yoyo: Infinity, duration: 2, ease: 'easeInOut' }}
        d="M44.792,18.833c-0.825,0-1.612,0.136-2.375,0.33c-1.95-3.775-5.884-6.363-10.425-6.363
          c-5.391,0-9.924,3.644-11.298,8.597c-0.812-0.255-1.656-0.43-2.552-0.43c-4.712,0-8.533,3.821-8.533,8.533
          c0,4.713,3.821,8.533,8.533,8.533h1.288h25.118h0.242c5.302,0,9.601-4.301,9.601-9.6C54.391,23.132,50.096,18.833,44.792,18.833z"
      />
    </motion.g>
    <motion.g fill="#CCF1FE" variants={positionVariants('y', 40)}>
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
  </motion.svg>
);

export default React.memo(RainOfNight);
