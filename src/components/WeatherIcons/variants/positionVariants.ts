export const positionVariants = (axis: 'x' | 'y', startPosition: number) => {
  return {
    hidden: {
      opacity: 0,
      [axis]: startPosition,
    },
    visible: {
      opacity: 1,
      [axis]: 0,
      transition: {
        duration: 1,
        ease: 'linear',
      },
    },
  };
};
