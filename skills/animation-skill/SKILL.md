# Animation & Motion Design Skill
## Cyber-Luxe / Industrial Minimalist Theme

## ACTIVE BASELINE CONFIGURATION

```
DESIGN_VARIANCE: 8
MOTION_INTENSITY: 7
VISUAL_DENSITY: 6
ANIMATION_DEPTH: 9
```

## CYBER-LUXE THEME CONFIGURATION

### Color Palette

```
DEEP_OBSIDIAN: #0A0A0A      /* Primary background */
BRUSHED_SLATE: #2D2D2D      /* Secondary surfaces, cards */
AMBER_PULSE: #FFBF00        /* Primary accent, CTAs, interactive states */
```

### Typography

```
HEADINGS: "Space Grotesk", "Inter", sans-serif    /* Bold, wide sans-serif */
BODY: "Inter", sans-serif                          /* Clean, readable */
TECHNICAL: "JetBrains Mono", "Fira Code", monospace /* Specs, data */
```

### Visual Identity

- **Aesthetic**: Industrial Minimalist meets premium audio equipment
- **Feel**: Heavy, deliberate motion like luxury machinery
- **Accent Behavior**: Amber glow on hover/active states, pulses on load

## DEFAULT ARCHITECTURE & CONVENTIONS

**Stack Preference:**
- React/Next.js + TypeScript + Vite
- Animation Libraries: Framer Motion (primary), GSAP (complex timelines like exploded view), CSS spring animations (simple)
- 3D/WebGL: Three.js + React Three Fiber (for headphone model), or Cesium for geospatial
- Styling: TailwindCSS with custom animation config
- Smooth Scroll: Lenis or Locomotive Scroll for "heavy" scroll feel

**Cyber-Luxe CSS Variables:**
```css
:root {
  --color-obsidian: #0A0A0A;
  --color-slate: #2D2D2D;
  --color-amber: #FFBF00;
  --color-amber-dim: rgba(255, 191, 0, 0.3);
  --color-amber-glow: rgba(255, 191, 0, 0.5);
  
  --font-heading: 'Space Grotesk', sans-serif;
  --font-body: 'Inter', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  
  --ease-luxury: cubic-bezier(0.65, 0, 0.35, 1);
  --ease-machinery: cubic-bezier(0.7, 0, 0.3, 1);
}
```

**Required File Structure:**
```
src/
├── components/
│   ├── ui/           # Base components with motion built-in
│   └── sections/     # Section components with scroll animations
├── animations/
│   ├── presets.ts    # Reusable animation variants
│   ├── easings.ts    # Custom cubic-bezier functions
│   └── springs.ts    # Spring physics configurations
├── hooks/
│   ├── useScroll.ts
│   ├── useParallax.ts
│   ├── useIntersection.ts
│   └── useAnimation.ts
├── lib/
│   └── motion.ts     # Motion utilities and helpers
└── styles/
    └── animations.css # Global keyframes and CSS variables
```

## DESIGN ENGINEERING DIRECTIVES

### Typography in Motion

- Headlines: Fade-up with blur (0.6-0.8s), use Space Grotesk
- Body text: Stagger children by 50ms
- Technical specs: Monospace font, amber accent glow on hover
- Never animate font-weight or letter-spacing (triggers layout)

### Cyber-Luxe Color & Depth

- Backgrounds: Deep Obsidian (#0A0A0A) primary, Brushed Slate (#2D2D2D) for cards
- Accent: Amber Pulse (#FFBF00) for CTAs, interactive states, hover glows
- Shadows: Soft, diffused amber-tinted shadows
  ```css
  box-shadow: 0 8px 32px rgba(255, 191, 0, 0.15);
  ```
- Glow effects: Amber radial gradients, not neon
  ```css
  .amber-glow {
    box-shadow: 
      0 0 20px rgba(255, 191, 0, 0.3),
      0 0 40px rgba(255, 191, 0, 0.15);
  }
  ```

### Industrial Material Effects

```css
/* Brushed metal texture */
.brushed-slate {
  background: 
    linear-gradient(135deg, #2D2D2D 0%, #1a1a1a 100%),
    repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px);
}

/* Carbon fiber pattern */
.carbon-fiber {
  background: 
    repeating-linear-gradient(45deg, #1a1a1a 0px, #1a1a1a 2px, #0d0d0d 2px, #0d0d0d 4px),
    linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%);
}

/* Anodized aluminum accent */
.aluminum-accent {
  background: linear-gradient(180deg, #3a3a3a 0%, #1f1f1f 100%);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
```

### Color & Depth

- Use opacity transitions for color changes
- Layer shadows with opacity: 0.1 → 0.2 → 0.3 (not 0.3 → 0.5 → 0.8)
- Glow effects use multiple radial-gradient layers

### Spacing & Scale

- Macro-whitespace: Double standard padding (py-24 to py-40 for sections)
- Scale animations: 0.95 → 1.0 or 1.0 → 1.05 (subtle, not dramatic)
- Always scale from center unless directional intent is clear

## CREATIVE PROACTIVITY

### Default Animation States

Every interactive element MUST have:
1. **Idle state** - resting position
2. **Hover state** - elevated, anticipatory
3. **Active/Press state** - compressed, confirmed
4. **Focus state** - accessible outline/glow
5. **Loading state** - skeleton or spinner with smooth loop
6. **Disabled state** - reduced opacity, no interaction

### Liquid Glass Effect (Premium Touch)

```css
.liquid-glass {
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.05) 100%
  );
  backdrop-filter: blur(40px) saturate(180%);
  -webkit-backdrop-filter: blur(40px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 24px;
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.2),
    inset 0 1px 1px rgba(255, 255, 255, 0.1);
}
```

## PERFORMANCE GUARDRAILS

**Animate ONLY:**
- ✅ `transform` (translate, scale, rotate)
- ✅ `opacity`
- ✅ `filter` (blur, brightness - use sparingly)

**NEVER Animate:**
- ❌ `height`, `width` (use scale instead)
- ❌ `top`, `left`, `right`, `bottom` (use translate instead)
- ❌ `margin`, `padding`
- ❌ `background-color` (use opacity on overlay instead)
- ❌ `border-color` (triggers paint)

**Optimization Rules:**
1. Use `will-change: transform` only on animating elements
2. Remove `will-change` after animation completes
3. Use `contain: layout paint` for static siblings
4. Virtualize long lists before adding animations

## TECHNICAL REFERENCE

### Easing Scale (1-10)

| Intensity | Easing | Use Case |
|-----------|--------|----------|
| 1-3 | `cubic-bezier(0.25, 0.46, 0.45, 0.94)` | Subtle UI updates |
| 4-6 | `cubic-bezier(0.32, 0.72, 0, 1)` | Standard entrances |
| 7-8 | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Playful, bouncy |
| 9-10 | `cubic-bezier(0.6, 0.05, 0.01, 0.99)` | Quick, snappy |

### Duration Scale (1-10)

| Intensity | Duration | Use Case |
|-----------|----------|----------|
| 1-2 | 150-250ms | Micro-interactions |
| 3-5 | 300-500ms | Standard UI transitions |
| 6-8 | 600-900ms | Hero/section animations |
| 9-10 | 1000-2000ms | 3D camera, complex sequences |

### Stagger Guidelines

- **Tight** (25-50ms): Icon grids, tag lists, navigation items
- **Standard** (75-100ms): Card grids, feature lists, form fields
- **Relaxed** (125-200ms): Gallery items, testimonial cards

## AI TELLS (ANTI-PATTERNS)

**NEVER Generate:**
- `transition: all 0.3s ease` ← Lazy, generic
- `animation: pulse 2s infinite` ← Without custom keyframes
- `@keyframes slideIn { from { left: -100%; } }` ← Triggers layout
- Neon/outer glows: `box-shadow: 0 0 20px #fff` ← Amateur
- Rainbow gradients on interactive elements ← Distracting
- `animation-fill-mode: forwards` without proper initial state

**ALWAYS Replace:**
- `ease` → Custom cubic-bezier
- `linear` → Natural easing curve
- `infinite` animations → Consider user preference
- Fixed pixel values → Relative units (rem, %, vh/vw)

## THE CREATIVE ARSENAL

### Cyber-Luxe Specific Animations

**Hero Section - "HEAR THE DEPTH"**
```jsx
// Full-screen 3D model or video loop
// Text fades in with amber glow
<motion.h1
  initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
  transition={{ duration: 0.8, ease: easings.smooth }}
  className="text-6xl font-bold"
  style={{ textShadow: "0 0 40px rgba(255, 191, 0, 0.3)" }}
>
  HEAR THE DEPTH
</motion.h1>

// "Scroll to Explore" bouncing icon
<motion.div
  animate={{ y: [0, 12, 0] }}
  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
>
  <ScrollIcon className="text-amber-500" />
</motion.div>
```

**Exploded View Section**
```jsx
// On scroll, headphone parts fly apart
// Use GSAP for complex timeline
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".exploded-section",
    start: "top center",
    end: "bottom top",
    scrub: 1,
  }
});

tl.to(".driver", { x: -100, rotationY: 15 })
  .to(".frame", { x: 100, rotationY: -10 }, "<")
  .to(".cable", { y: 50, opacity: 0.5 }, "<");
```

**Interactive Specs Grid**
```jsx
// Hover over spec changes page accent glow
<motion.div
  whileHover={{ 
    boxShadow: "0 0 30px rgba(255, 191, 0, 0.4)",
    y: -4
  }}
  className="spec-card bg-slate-900 border border-slate-700"
>
  <span className="text-amber-500 font-mono">50mm Driver</span>
</motion.div>
```

**Parallax Gallery**
```jsx
// High-contrast lifestyle shots at different scroll speeds
const y = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
```

### Layout Patterns with Motion

**Bento Grid**
- Stagger cell entrances by row
- Hover: Scale cell to 1.02, amber shadow lift
- Click: Ripple effect from click position

**Hero Split**
- Left content: Fade-right
- Right visual: Fade-left + scale
- Background: Subtle parallax (0.3 speed)

**Card Stack**
- Cards enter from bottom with stagger
- Hover: Lift top card, reveal shadow of card below
- Swipe: Translate + rotate + fade

**Modal/Dialog**
- Backdrop: Fade 200ms
- Modal: Scale 0.95 → 1.0 + fade-up
- Content: Stagger children 50ms

**Page Transitions**
- Exit: Fade-up + blur
- Enter: Fade-down from blur
- Overlap: 100ms crossfade

## THE MOTION-ENGINE PARADIGM

### Spring Physics (Framer Motion)

```js
const springs = {
  gentle: { type: "spring", stiffness: 200, damping: 20 },
  bouncy: { type: "spring", stiffness: 400, damping: 15 },
  stiff: { type: "spring", stiffness: 600, damping: 25 },
  wobbly: { type: "spring", stiffness: 300, damping: 10 },
};
```

### Scroll-Driven Animation Pattern

```jsx
function ScrollReveal({ children, delay = 0 }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ 
        duration: 0.6, 
        delay,
        ease: [0.32, 0.72, 0, 1] 
      }}
    >
      {children}
    </motion.div>
  );
}
```

### 3D Camera Animation (Cesium)

```js
// Smooth fly-to with easing
viewer.camera.flyTo({
  destination: Cesium.Cartesian3.fromDegrees(longitude, latitude, height),
  orientation: {
    heading: Cesium.Math.toRadians(0),
    pitch: Cesium.Math.toRadians(-45),
    roll: 0.0
  },
  duration: 2.5,
  easing: Cesium.EasingFunction.CUBIC_IN_OUT,
  complete: () => {
    // Optional: Start orbit or auto-rotate
  }
});
```

### Particle/Trail Animation

```js
// Animated trail following cursor/movement
const trailPositions = useRef([]);

function addTrailPoint(position) {
  trailPositions.current.push({
    position,
    age: 0,
    maxAge: 1000 // ms
  });
}

// In animation loop
trailPositions.current = trailPositions.current
  .map(point => ({
    ...point,
    age: point.age + deltaTime
  }))
  .filter(point => point.age < point.maxAge);
```

## FINAL PRE-FLIGHT CHECK

Before marking animated components complete:

- [ ] All easings are custom cubic-bezier (not `ease`/`linear`)
- [ ] Stagger delays applied to child elements (25-100ms)
- [ ] `prefers-reduced-motion` media query implemented
- [ ] Only `transform` and `opacity` are animated (GPU-friendly)
- [ ] Mobile has reduced motion variants (shorter duration, less distance)
- [ ] Hover states have corresponding active/press states
- [ ] Loading states use skeleton with shimmer (not spinner for content)
- [ ] Scroll animations trigger at appropriate thresholds (10-20%)
- [ ] 3D camera movements have 2-3s duration with smooth easing
- [ ] No animation exceeds 16ms frame time (60fps target)
- [ ] Focus states are visible and animated
- [ ] Disabled states have reduced opacity and no interaction

---

## ANTI-EMOJI POLICY

Do NOT use emojis in:
- UI text content
- Class names
- Animation names
- Comments (use descriptive text instead)

Exception: Emoji reactions in code reviews are fine.

## VIEWPORT STABILITY

- Never use `h-screen` on mobile (use `min-h-[100dvh]`)
- Account for browser chrome changes on scroll
- Test animations at 320px viewport width
- Ensure scroll animations don't trigger horizontal scroll

---

**SKILL ACTIVATION:** When generating any webpage, component, or UI with motion, automatically apply these animation principles, easing functions, and motion patterns. Create premium, intentional animations that feel polished and purposeful—not generic or lazy.
