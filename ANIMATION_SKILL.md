# High-Fidelity Animation & Motion Design Skill

## ACTIVE BASELINE CONFIGURATION

```
DESIGN_VARIANCE: 8
MOTION_INTENSITY: 7
VISUAL_DENSITY: 6
ANIMATION_DEPTH: 9
```

## DEFAULT ARCHITECTURE & CONVENTIONS

**Stack Preference:**
- React/Next.js + TypeScript + Vite
- Animation: Framer Motion, GSAP, or CSS spring animations
- 3D: Three.js, React Three Fiber, or Cesium for map-based visuals
- Styling: TailwindCSS with custom animation extensions

**File Structure:**
```
src/
├── components/     # Reusable UI components with motion
├── animations/     # Animation presets and hooks
├── hooks/          # useScroll, useParallax, useIntersection
├── lib/            # Animation utilities and easing functions
└── styles/         # Global animation CSS variables
```

## MOTION ENGINE DIRECTIVES

### Easing Functions (NEVER use linear/ease-in-out)

```js
// Premium spring easings
export const easings = {
  smooth: "cubic-bezier(0.32, 0.72, 0, 1)",      // Default entrance
  bounce: "cubic-bezier(0.34, 1.56, 0.64, 1)",   // Playful bounce
  settle: "cubic-bezier(0.25, 0.46, 0.45, 0.94)", // Gentle settle
  snap: "cubic-bezier(0.6, 0.05, 0.01, 0.99)",   // Quick snap
  liquid: "cubic-bezier(0.4, 0, 0.2, 1)",        // Fluid motion
};
```

### Animation Choreography Rules

1. **Stagger Principle:** Child elements animate with 50-100ms delays
2. **Directional Flow:** Elements enter from their natural direction
3. **Layered Motion:** Background moves slower (parallax 0.3-0.5)
4. **Settle Time:** 600-900ms for premium feel

### Entry Animation Patterns

```jsx
// Fade-up entrance (default)
initial={{ opacity: 0, y: 24, scale: 0.98 }}
animate={{ opacity: 1, y: 0, scale: 1 }}
transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}

// Blur entrance (hero sections)
initial={{ opacity: 0, filter: "blur(10px)" }}
animate={{ opacity: 1, filter: "blur(0px)" }}

// Scale entrance (cards, modals)
initial={{ opacity: 0, scale: 0.9 }}
animate={{ opacity: 1, scale: 1 }}
```

## SCROLL-BASED ANIMATIONS

### Parallax Sections

```jsx
// Hook pattern
const { scrollYProgress } = useScroll();
const y = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
```

### Reveal on Scroll

```jsx
// Intersection Observer pattern
const [ref, inView] = useInView({
  triggerOnce: true,
  threshold: 0.1,
});

// Stagger children
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};
```

## 3D VISUALIZATION PATTERNS

### Camera Animation

```js
// Smooth camera transitions
viewer.camera.flyTo({
  destination: Cesium.Cartesian3.fromDegrees(lon, lat, height),
  orientation: { heading, pitch, roll },
  duration: 2.5,
  easing: Cesium.EasingFunction.CUBIC_IN_OUT
});
```

### Entity Animation

```js
// Animated markers/particles
const animatedEntity = {
  position: new Cesium.SampledPositionProperty(),
  point: {
    pixelSize: 8,
    color: Cesium.Color.fromCssColorString("#6366f1"),
    outlineColor: Cesium.Color.WHITE,
    outlineWidth: 2
  }
};
```

## VISUAL EFFECTS LIBRARY

### Glass Morphism

```css
.backdrop-glass {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
}
```

### Glow Effects

```css
/* Soft ambient glow */
.glow-ambient {
  box-shadow: 
    0 0 40px rgba(99, 102, 241, 0.15),
    0 0 80px rgba(99, 102, 241, 0.1);
}

/* Animated pulse glow */
@keyframes pulse-glow {
  0%, 100% { box-shadow: 0 0 20px rgba(99, 102, 241, 0.3); }
  50% { box-shadow: 0 0 40px rgba(99, 102, 241, 0.6); }
}
```

### Gradient Mesh

```css
.gradient-mesh {
  background: 
    radial-gradient(at 40% 20%, hsla(228, 80%, 74%, 0.3) 0px, transparent 50%),
    radial-gradient(at 80% 0%, hsla(189, 100%, 56%, 0.2) 0px, transparent 50%),
    radial-gradient(at 0% 50%, hsla(340, 100%, 76%, 0.2) 0px, transparent 50%);
  animation: mesh-shift 15s ease-in-out infinite;
}
```

## PERFORMANCE GUARDRAILS

1. **Animate Only:** `transform` and `opacity` (GPU accelerated)
2. **Will-Change:** Use sparingly, remove after animation
3. **Reduce Motion:** Respect `prefers-reduced-motion`
4. **Frame Budget:** Keep animations under 10ms frame time
5. **Virtual Scroll:** For long lists with animations

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

## ANIMATION PRESETS

### Hero Section

```jsx
<motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
>
  <motion.h1
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2, duration: 0.6 }}
  >
    {/* Hero text */}
  </motion.h1>
</motion.div>
```

### Card Hover

```jsx
<motion.div
  whileHover={{ 
    y: -8, 
    scale: 1.02,
    boxShadow: "0 20px 40px rgba(0,0,0,0.15)"
  }}
  transition={{ type: "spring", stiffness: 300, damping: 20 }}
>
  {/* Card content */}
</motion.div>
```

### Page Transition

```jsx
<AnimatePresence mode="wait">
  <motion.div
    key={route}
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -16 }}
    transition={{ duration: 0.3 }}
  >
    {/* Page content */}
  </motion.div>
</AnimatePresence>
```

## MICRO-INTERACTIONS

### Button Press

```jsx
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  transition={{ type: "spring", stiffness: 400, damping: 17 }}
>
  Click me
</motion.button>
```

### Loading States

```jsx
// Skeleton loader with shimmer
<motion.div
  animate={{ 
    backgroundPosition: ["0% 50%", "100% 50%"] 
  }}
  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
  style={{ backgroundSize: "200% 200%" }}
>
  {/* Skeleton content */}
</motion.div>
```

## ANTI-PATTERNS (NEVER DO)

- ❌ `transition: all 0.3s ease` (generic, lazy)
- ❌ Animating `height`, `width`, `top`, `left` (triggers layout)
- ❌ Multiple simultaneous complex animations
- ❌ Animation without purpose/meaning
- ❌ Ignoring user motion preferences
- ❌ Stagger delays > 200ms (feels broken)
- ❌ Duration < 200ms (feels jittery)
- ❌ Duration > 1200ms (feels sluggish)

## MOBILE OVERRIDES

```css
/* Below 768px */
@media (max-width: 767px) {
  - Reduce animation complexity
  - Shorter durations (0.3-0.5s)
  - Smaller motion distances (8-16px instead of 24-48px)
  - Disable parallax effects
  - Use `min-h-[100dvh]` instead of `h-screen`
}
```

## PRE-FLIGHT CHECKLIST

Before finalizing animated components:

- [ ] All animations use custom easings (not linear/ease-in-out)
- [ ] Stagger delays applied to child elements (50-100ms)
- [ ] Motion respects `prefers-reduced-motion`
- [ ] Only `transform` and `opacity` animated for performance
- [ ] Mobile has reduced motion variants
- [ ] Hover states have corresponding press states
- [ ] Loading states have smooth transitions
- [ ] Scroll animations have appropriate thresholds
- [ ] 3D camera movements have smooth easing (2-3s duration)

---

**Skill Activation:** When generating animated webpages, automatically apply these motion principles, easing functions, and animation patterns. Create premium, purposeful animations that feel intentional and polished.
