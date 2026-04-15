import express from 'express'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 3001

// Middleware
app.use(cors())
app.use(express.json())

// In-memory storage (replace with database in production)
const preorders = []

// Pre-order endpoint
app.post('/api/preorder', async (req, res) => {
  const { email } = req.body

  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Valid email required' })
  }

  // Check for duplicate
  const exists = preorders.find(p => p.email === email)
  if (exists) {
    return res.status(409).json({ error: 'Email already registered' })
  }

  // Store pre-order
  const preorder = {
    id: Date.now(),
    email,
    createdAt: new Date().toISOString(),
    status: 'pending'
  }
  preorders.push(preorder)

  console.log(`New pre-order: ${email}`)

  // In production: Send welcome email via SendGrid/EmailJS
  // In production: Track in database
  // In production: Send analytics event

  res.json({
    success: true,
    message: 'Welcome to the Sound',
    preorder: { id: preorder.id }
  })
})

// Get pre-order count (for admin)
app.get('/api/preorders/count', (req, res) => {
  res.json({ count: preorders.length })
})

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

app.listen(PORT, () => {
  console.log(`SonicCore server running on http://localhost:${PORT}`)
})
