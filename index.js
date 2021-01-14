const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const app = express()

app.use(express.json())
app.use(cors())
app.use(morgan('tiny'))

let persons = [
      { 
        "name": "Arto Hellas", 
        "number": "040-123456",
        "id": 1
      },
      { 
        "name": "Ada Lovelace", 
        "number": "39-44-5323523",
        "id": 2
      },
      { 
        "name": "Dan Abramov", 
        "number": "12-43-234345",
        "id": 3
      },
      { 
        "name": "Mary Poppendieck", 
        "number": "39-23-6423122",
        "id": 4
      }
    ]

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
})

app.get('/info', (req, res) => {
    const size = persons.length
    const currentTime = new Date()
    res.send(`<p>Phonebook has info for ${size} people. <br></br> ${currentTime}</p>`)
})

app.get('/api/persons', (req, res) => {
    res.json(persons)
})

app.get('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  const person = persons.find(person => person.id === id)
  if (person) {
    res.json(person)
  } else {
    res.status(404).end()
  }
})

app.post('/api/persons', (req, res) => {
  const body = req.body
  const id = Math.floor(Math.random() * 10000000)
  const names = persons.map(person => person.name)
  console.log(body)

  if (!body.name) {
    res.status(400).json({ error: 'name not found' }).end()
  }

  if (!body.number) {
    res.status(400).json({ error: 'number not found' }).end()
  }

  if (names.includes(body.name)) {
    res.status(400).json({ error: 'name must be unique' }).end()
  }

  const person = {
    name: body.name,
    number: body.number,
    id: id
  }
  persons.concat(person)

  res.json(person)
})

app.delete('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  persons = persons.filter(person => person.id !== id)
  res.status(204).end()
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)    
})
  