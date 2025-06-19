import express from 'express'
import ViteExpress from 'vite-express'


const app = express()
const port = 3000


// API endpoints can be defined here
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the server!' })
})


// Start the server
const server = app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})


// Initialize Vite Express
ViteExpress.bind(app, server)
