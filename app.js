const express = require('express')

const app = express()

app.use(express.json())

app.use('/api/v1/projects', require('./routes/v1/projects'))
app.use('/api/v1/resources', require('./routes/v1/resources'))
app.use('/api/v1/projectResources', require('./routes/v1/ProjectResources'))

app.listen(5000, () => {
  console.log('listening on port 5000')
})
