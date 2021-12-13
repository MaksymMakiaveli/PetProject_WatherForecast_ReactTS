import React from 'react';
import { motion } from 'framer-motion';
import { positionVariants } from '@component/WeatherIcons/variants/positionVariants';

interface NightSnowyProps {}

const pathArray = [
  `M32,42.482 c-1.18,0-2.133,0.955-2.133,2.134c0,1.18,0.956,2.134,2.133,2.134s2.134-0.954,2.134-2.134C34.134,43.438,33.18,42.482,32,42.482z`,
  `M44.8,42.482c-1.179,0-2.133,0.955-2.133,2.134c0,1.18,0.954,2.134,2.133,2.134c1.181,0,2.134-0.954,2.134-2.134
  C46.934,43.438,45.979,42.482,44.8,42.482z`,
  `M19.2,42.482c-1.177,0-2.133,0.955-2.133,2.134c0,1.18,0.956,2.134,2.133,2.134
  c1.18,0,2.133-0.954,2.133-2.134C21.333,43.438,20.38,42.482,19.2,42.482z`,
  `M38.4,48.884c-1.18,0-2.135,0.954-2.135,2.134
  s0.955,2.133,2.135,2.133c1.179,0,2.133-0.953,2.133-2.133S39.579,48.884,38.4,48.884z`,
  `M25.6,48.884
  c-1.177,0-2.133,0.954-2.133,2.134s0.956,2.133,2.133,2.133c1.18,0,2.133-0.953,2.133-2.133S26.78,48.884,25.6,48.884z`,
];

const NightSnowy: React.FC<NightSnowyProps> = () => (
  <motion.svg
    version="1.1"
    id="SNOWY"
    x="0px"
    y="0px"
    width="64px"
    height="64px"
    viewBox="0 0 64 64"
    enableBackground="new 0 0 64 64"
    initial="hidden"
    animate="visible"
  >
    <g id="night_bg">
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
    <motion.g fill="#FFFFFF" variants={positionVariants('y', -40)}>
      <motion.path
        animate={{ rotate: [-5, 3], y: 2 }}
        transition={{ yoyo: Infinity, duration: 2, ease: 'easeInOut' }}
        filter="drop-shadow( 3px 3px 2px rgba(0, 0, 0, .4))"
        d="M54.393,28.433c0,5.299-4.297,9.6-9.601,9.6H44.55H19.43h-1.288c-4.712,0-8.533-3.82-8.533-8.533
          c0-4.712,3.821-8.533,8.533-8.533c0.894,0,1.741,0.177,2.552,0.43c1.374-4.953,5.904-8.597,11.298-8.597
          c4.542,0,8.475,2.588,10.425,6.364c0.763-0.194,1.55-0.33,2.375-0.33C50.096,18.833,54.393,23.132,54.393,28.433z"
      />
    </motion.g>
    <motion.g fill="#FFFFFF" variants={positionVariants('y', 40)}>
      {pathArray.map((path, i) => (
        <motion.path
          key={path}
          d={path}
          animate={{ opacity: [0, 1, 0], y: [0, 30] }}
          transition={{
            repeat: Infinity,
            delay: Math.random() * (i + 1),
            duration: 3,
            ease: 'linear',
          }}
        />
      ))}
    </motion.g>
  </motion.svg>
);

export default React.memo(NightSnowy);
