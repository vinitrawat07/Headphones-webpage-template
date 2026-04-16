import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import Lenis from '@studio-freight/lenis'
import './App.css'

// Animation variants from skill
const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.32, 0.72, 0, 1] }
}

const fadeInUpBlur = {
  initial: { opacity: 0, y: 40, filter: "blur(10px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { duration: 0.8, ease: [0.32, 0.72, 0, 1] }
}

const staggerContainer = {
  animate: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
}

const staggerChild = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.32, 0.72, 0, 1] } }
}

// Specs data
const specs = [
  { label: "Driver", value: "50mm", sub: "Bio-Cellulose" },
  { label: "Material", value: "Aerospace", sub: "Aluminum & Carbon Fiber" },
  { label: "Battery", value: "60hr", sub: "Studio Endurance" },
  { label: "Connectivity", value: "Ultra-Low", sub: "Latency Wireless" },
]

// Gallery images (placeholders - replace with actual images)
const galleryImages = [
  "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=800&fit=crop",
  "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&h=800&fit=crop",
  "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600&h=800&fit=crop",
]

function App() {
  const [preorderEmail, setPreorderEmail] = useState('')
  const [preorderSubmitted, setPreorderSubmitted] = useState(false)
  const [accentGlow, setAccentGlow] = useState('rgba(255, 191, 0, 0)')

  const containerRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const specsRef = useRef<HTMLDivElement>(null)
  const galleryRef = useRef<HTMLDivElement>(null)

  // Scroll hooks
  const { scrollYProgress } = useScroll()
  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, 100])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])

  const specsInView = useInView(specsRef, { once: true, margin: "-100px" })
  const galleryInView = useInView(galleryRef, { once: true, margin: "-100px" })


  // Initialize smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      smooth: true,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => lenis.destroy()
  }, [])

  // Handle spec hover to change accent glow
  const handleSpecHover = (color: string) => {
    setAccentGlow(color)
  }

  const handleSpecLeave = () => {
    setAccentGlow('rgba(255, 191, 0, 0)')
  }

  const handlePreorderSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Call backend API
    try {
      const response = await fetch('http://localhost:3001/api/preorder', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: preorderEmail })
      })
      if (response.ok) {
        setPreorderSubmitted(true)
      }
    } catch (error) {
      console.error('Preorder error:', error)
      // Fallback for demo
      setPreorderSubmitted(true)
    }
  }

  return (
    <div ref={containerRef} className="app">
      {/* Hero Section with Video */}
      <section ref={heroRef} className="hero-section" style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
        <motion.div
          className="video-container"
          style={{ y: heroY }}
        >
          <video
            src="/videos/hero.mp4"
            autoPlay
            muted
            playsInline
            preload="auto"
            // No loop - video plays once and freezes at last frame
            ref={(video) => {
              if (video) {
                video.onended = () => {
                  // Freeze at last frame
                  video.currentTime = video.duration;
                };
              }
            }}
          />
          <div className="gradient-overlay" />
        </motion.div>

        {/* Hero Content */}
        <motion.div
          className="hero-content"
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '2rem',
            opacity: heroOpacity,
          }}
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.5, ease: [0.32, 0.72, 0, 1] }}
          viewport={{ once: true }}
          fill="forwards"
        >
          <motion.h1
            viewport={{ once: true }}
            style={{
              fontSize: 'clamp(2.5rem, 8vw, 6rem)',
              fontWeight: 700,
              marginBottom: '1rem',
              textShadow: '0 0 40px rgba(255, 191, 0, 0.3)',
            }}
          >
            HEAR THE DEPTH
          </motion.h1>

          <motion.p
            viewport={{ once: true }}
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              color: '#9ca3af',
              maxWidth: '600px',
              marginBottom: '2rem',
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            fill="forwards"
          >
            SonicCore: Engineering the Silence
          </motion.p>

          <motion.a
            viewport={{ once: true }}
            href="#specs"
            className="cta-button"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            fill="forwards"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Explore the Sound
          </motion.a>
        </motion.div>

        {/* Scroll Indicator - animates once then freezes */}
        <motion.div
          className="scroll-indicator"
          style={{
            position: 'absolute',
            bottom: '40px',
            left: '50%',
            transform: 'translateX(-50%)',
            color: '#FFBF00',
          }}
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 12 }}
          transition={{ duration: 1, delay: 1.5, ease: [0.32, 0.72, 0, 1] }}
          viewport={{ once: true }}
          fill="forwards"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
          <span style={{ display: 'block', fontSize: '0.75rem', marginTop: '0.5rem' }}>Scroll to Explore</span>
        </motion.div>
      </section>

      {/* Exploded View / Specs Section */}
      <section
        ref={specsRef}
        id="specs"
        className="specs-section"
        style={{
          padding: 'clamp(4rem, 10vw, 8rem) 2rem',
          background: '#0A0A0A',
          position: 'relative',
        }}
      >
        <motion.div
          initial="initial"
          animate={specsInView ? "animate" : "initial"}
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeInUpBlur}
            viewport={{ once: true }}
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              textAlign: 'center',
              marginBottom: '4rem',
            }}
          >
            ENGINEERED TO PERFECTION
          </motion.h2>

          {/* Specs Grid */}
          <motion.div
            variants={staggerContainer}
            className="specs-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '2rem',
              maxWidth: '1200px',
              margin: '0 auto',
            }}
          >
            {specs.map((spec, index) => (
              <motion.div
                key={spec.label}
                variants={staggerChild}
                viewport={{ once: true }}
                className="spec-card brushed-slate"
                style={{
                  padding: '2.5rem 2rem',
                  borderRadius: '16px',
                  border: '1px solid rgba(255,255,255,0.1)',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                onMouseEnter={() => handleSpecHover('rgba(255, 191, 0, 0.15)')}
                onMouseLeave={handleSpecLeave}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <motion.div
                  className="spec-glow"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: `radial-gradient(circle at 50% 0%, ${accentGlow}, transparent 70%)`,
                    opacity: 0,
                    transition: 'opacity 0.3s',
                  }}
                />
                <span className="font-mono" style={{ color: '#FFBF00', fontSize: '0.875rem' }}>
                  {spec.label}
                </span>
                <h3 style={{ fontSize: '2.5rem', margin: '0.5rem 0' }}>{spec.value}</h3>
                <p style={{ color: '#9ca3af', fontSize: '0.875rem' }}>{spec.sub}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Parallax Gallery Section */}
      <section
        ref={galleryRef}
        className="gallery-section"
        style={{
          padding: 'clamp(4rem, 10vw, 8rem) 2rem',
          background: '#0d0d0d',
        }}
      >
        <motion.div
          initial="initial"
          animate={galleryInView ? "animate" : "initial"}
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeInUpBlur}
            viewport={{ once: true }}
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              textAlign: 'center',
              marginBottom: '4rem',
            }}
          >
            CRAFTED FOR EXCELLENCE
          </motion.h2>

          <div className="gallery-grid" style={{ maxWidth: '1200px', margin: '0 auto' }}>
            {galleryImages.map((src, index) => (
              <motion.div
                key={index}
                variants={staggerChild}
                viewport={{ once: true }}
                className="gallery-item"
                style={{
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <motion.img
                  src={src}
                  alt={`Gallery ${index + 1}`}
                  style={{
                    width: '100%',
                    height: '500px',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  fill="forwards"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Pre-order Section */}
      <section
        className="preorder-section"
        style={{
          padding: 'clamp(4rem, 10vw, 8rem) 2rem',
          background: '#0A0A0A',
          textAlign: 'center',
        }}
      >
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeInUpBlur}
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              marginBottom: '1rem',
            }}
          >
            RESERVE YOURS TODAY
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            style={{
              color: '#9ca3af',
              marginBottom: '3rem',
              maxWidth: '500px',
              margin: '0 auto 3rem',
            }}
          >
            Be among the first to experience sonic perfection. Pre-order now and receive exclusive early-bird pricing.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="preorder-form"
          >
            {preorderSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="success-message"
                style={{
                  padding: '2rem',
                  background: 'rgba(255, 191, 0, 0.1)',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 191, 0, 0.3)',
                }}
              >
                <h3 style={{ color: '#FFBF00', marginBottom: '0.5rem' }}>Welcome to the Sound</h3>
                <p style={{ color: '#9ca3af' }}>You're on the list. We'll be in touch soon.</p>
              </motion.div>
            ) : (
              <form onSubmit={handlePreorderSubmit} style={{ display: 'flex', gap: '1rem', flexDirection: 'column', maxWidth: '400px', margin: '0 auto' }}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={preorderEmail}
                  onChange={(e) => setPreorderEmail(e.target.value)}
                  className="form-input"
                  required
                />
                <button type="submit" className="cta-button" style={{ width: '100%' }}>
                  Pre-Order Now
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer
        style={{
          padding: '3rem 2rem',
          background: '#050505',
          borderTop: '1px solid rgba(255,255,255,0.1)',
          textAlign: 'center',
        }}
      >
        <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>
          2026 SonicCore. Engineering the Silence.
        </p>
      </footer>
    </div>
  )
}

export default App
