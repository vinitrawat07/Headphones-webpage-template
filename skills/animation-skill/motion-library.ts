/**
 * Motion Library - Premium Animation Presets
 *
 * Usage: Import these presets into any React project with Framer Motion
 * Example: import { fadeInUp, staggerContainer } from './motion-library';
 */

// ============================================
// EASING FUNCTIONS (Custom Cubic Beziers)
// ============================================

export const easings = {
  // Standard premium entrance (default for most animations)
  smooth: [0.32, 0.72, 0, 1],

  // Gentle settle - good for modals, dropdowns
  settle: [0.25, 0.46, 0.45, 0.94],

  // Bouncy/playful - good for cards, fun interactions
  bounce: [0.34, 1.56, 0.64, 1],

  // Quick snap - good for toggles, switches
  snap: [0.6, 0.05, 0.01, 0.99],

  // Fluid/liquid - good for continuous motion
  liquid: [0.4, 0, 0.2, 1],

  // Strong start, gentle end
  decelerate: [0.16, 1, 0.3, 1],

  // Gentle start, strong end
  accelerate: [0.7, 0, 0.84, 0],

  // Balanced S-curve
  standard: [0.65, 0, 0.35, 1],
};

// ============================================
// SPRING CONFIGURATIONS
// ============================================

export const springs = {
  // Default spring - balanced
  default: {
    type: "spring" as const,
    stiffness: 300,
    damping: 20,
    mass: 1,
  },

  // Gentle, less bouncy
  gentle: {
    type: "spring" as const,
    stiffness: 200,
    damping: 25,
    mass: 1,
  },

  // Very bouncy, playful
  bouncy: {
    type: "spring" as const,
    stiffness: 400,
    damping: 15,
    mass: 0.8,
  },

  // Stiff, quick response
  stiff: {
    type: "spring" as const,
    stiffness: 500,
    damping: 25,
    mass: 1,
  },

  // Wobbly, fun
  wobbly: {
    type: "spring" as const,
    stiffness: 300,
    damping: 10,
    mass: 1,
  },

  // Slow, deliberate
  slow: {
    type: "spring" as const,
    stiffness: 150,
    damping: 20,
    mass: 1.5,
  },
};

// ============================================
// DURATION PRESETS (in seconds)
// ============================================

export const durations = {
  instant: 0.1,
  fast: 0.2,
  normal: 0.3,
  slow: 0.5,
  slower: 0.7,
  deliberate: 0.9,
  cinematic: 1.2,
};

// ============================================
// STAGGER PRESETS (in seconds)
// ============================================

export const staggers = {
  tight: 0.03,
  snappy: 0.05,
  standard: 0.08,
  relaxed: 0.12,
  dramatic: 0.2,
};

// ============================================
// CORE ANIMATION VARIANTS
// ============================================

// Fade In Up (Default entrance for most elements)
export const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -24 },
  transition: {
    duration: durations.slow,
    ease: easings.smooth,
  },
};

// Fade In Down (Dropdowns, notifications from top)
export const fadeInDown = {
  initial: { opacity: 0, y: -24 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 24 },
  transition: {
    duration: durations.slow,
    ease: easings.smooth,
  },
};

// Fade In Left (Content from left)
export const fadeInLeft = {
  initial: { opacity: 0, x: -32 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 32 },
  transition: {
    duration: durations.slow,
    ease: easings.smooth,
  },
};

// Fade In Right (Content from right)
export const fadeInRight = {
  initial: { opacity: 0, x: 32 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -32 },
  transition: {
    duration: durations.slow,
    ease: easings.smooth,
  },
};

// Scale In (Modals, dialogs, popovers)
export const scaleIn = {
  initial: { opacity: 0, scale: 0.92 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.92 },
  transition: {
    duration: durations.slow,
    ease: easings.settle,
  },
};

// Scale In with Blur (Premium modal effect)
export const scaleInBlur = {
  initial: { opacity: 0, scale: 0.95, filter: "blur(10px)" },
  animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
  exit: { opacity: 0, scale: 0.95, filter: "blur(10px)" },
  transition: {
    duration: durations.slower,
    ease: easings.smooth,
  },
};

// Zoom In (Hero elements, featured content)
export const zoomIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 1.1 },
  transition: {
    duration: durations.deliberate,
    ease: easings.decelerate,
  },
};

// Slide Up (Drawers, bottom sheets)
export const slideUp = {
  initial: { y: "100%" },
  animate: { y: 0 },
  exit: { y: "100%" },
  transition: {
    duration: durations.slower,
    ease: easings.smooth,
  },
};

// Slide Down (Drawers, top sheets)
export const slideDown = {
  initial: { y: "-100%" },
  animate: { y: 0 },
  exit: { y: "-100%" },
  transition: {
    duration: durations.slower,
    ease: easings.smooth,
  },
};

// ============================================
// CONTAINER VARIANTS (For staggering children)
// ============================================

// Stagger container - children animate with delay
export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: staggers.standard,
      delayChildren: 0.1,
    },
  },
  exit: {
    transition: {
      staggerChildren: staggers.snappy,
      staggerDirection: -1,
    },
  },
};

// Stagger container - fast/snappy
export const staggerContainerFast = {
  animate: {
    transition: {
      staggerChildren: staggers.snappy,
      delayChildren: 0.05,
    },
  },
};

// Stagger container - relaxed/dramatic
export const staggerContainerDramatic = {
  animate: {
    transition: {
      staggerChildren: staggers.dramatic,
      delayChildren: 0.2,
    },
  },
};

// ============================================
// CHILD VARIANTS (Use with staggerContainer)
// ============================================

export const staggerChild = {
  initial: { opacity: 0, y: 16 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: durations.normal,
      ease: easings.smooth,
    },
  },
  exit: {
    opacity: 0,
    y: -16,
    transition: {
      duration: durations.fast,
      ease: easings.snap,
    },
  },
};

export const staggerChildScale = {
  initial: { opacity: 0, scale: 0.9 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: durations.normal,
      ease: easings.settle,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    transition: {
      duration: durations.fast,
    },
  },
};

// ============================================
// HOVER VARIANTS (Interactive elements)
// ============================================

// Card hover - lift and subtle scale
export const hoverLift = {
  hover: {
    y: -8,
    scale: 1.02,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
  tap: {
    y: -4,
    scale: 0.98,
    transition: {
      duration: durations.fast,
    },
  },
};

// Button hover - subtle scale
export const hoverScale = {
  hover: {
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 17,
    },
  },
  tap: {
    scale: 0.95,
    transition: {
      duration: durations.fast,
    },
  },
};

// Icon hover - rotate/scale combo
export const hoverIcon = {
  hover: {
    scale: 1.1,
    rotate: 5,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 15,
    },
  },
  tap: {
    scale: 0.9,
    rotate: 0,
    transition: {
      duration: durations.fast,
    },
  },
};

// ============================================
// PAGE TRANSITION VARIANTS
// ============================================

export const pageTransition = {
  initial: { opacity: 0, y: 16, filter: "blur(4px)" },
  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: durations.slower,
      ease: easings.smooth,
    },
  },
  exit: {
    opacity: 0,
    y: -16,
    filter: "blur(4px)",
    transition: {
      duration: durations.normal,
    },
  },
};

// ============================================
// LIST ITEM VARIANTS
// ============================================

export const listItem = {
  initial: { opacity: 0, x: -16 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: durations.normal,
      ease: easings.smooth,
    },
  },
  exit: {
    opacity: 0,
    x: 16,
    transition: {
      duration: durations.fast,
    },
  },
  hover: {
    x: 4,
    transition: {
      duration: durations.fast,
      ease: easings.liquid,
    },
  },
};

// ============================================
// SKELETON LOADER VARIANTS
// ============================================

export const shimmer = {
  animate: {
    backgroundPosition: ["200% 0", "-200% 0"],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Create a transition object with consistent easing
 */
export function createTransition(
  duration: number = durations.normal,
  easing: number[] = easings.smooth,
  delay: number = 0
) {
  return {
    duration,
    delay,
    ease: easing,
  };
}

/**
 * Create staggered children variants
 */
export function createStaggerChildren(
  childVariant: string = "staggerChild",
  staggerDelay: number = staggers.standard,
  initialDelay: number = 0.1
) {
  return {
    animate: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: initialDelay,
      },
    },
  };
}

/**
 * Get spring transition with custom parameters
 */
export function createSpring(
  stiffness: number = 300,
  damping: number = 20,
  mass: number = 1
) {
  return {
    type: "spring" as const,
    stiffness,
    damping,
    mass,
  };
}

// ============================================
// MEDIA QUERY HELPERS
// ============================================

/**
 * Reduced motion media query helper
 * Use this to disable animations for users who prefer reduced motion
 */
export const prefersReducedMotion = `@media (prefers-reduced-motion: reduce)`;

/**
 * Create a motion config that respects reduced motion
 */
export function createReducedMotionConfig(baseConfig: any) {
  return {
    ...baseConfig,
    transition: {
      ...baseConfig.transition,
      duration: baseConfig.transition?.duration
        ? Math.min(baseConfig.transition.duration, 0.01)
        : 0.01,
    },
  };
}

// ============================================
// EXPORT ALL AS SINGLE OBJECT
// ============================================

export const motion = {
  easings,
  springs,
  durations,
  staggers,
  variants: {
    fadeInUp,
    fadeInDown,
    fadeInLeft,
    fadeInRight,
    scaleIn,
    scaleInBlur,
    zoomIn,
    slideUp,
    slideDown,
    staggerContainer,
    staggerContainerFast,
    staggerContainerDramatic,
    staggerChild,
    staggerChildScale,
    hoverLift,
    hoverScale,
    hoverIcon,
    pageTransition,
    listItem,
    shimmer,
  },
  utils: {
    createTransition,
    createStaggerChildren,
    createSpring,
    createReducedMotionConfig,
  },
};
