const express = require('express')
const tc = require('./controllers/trackController')

const app = express()
const PORT = 3333

app.use(express.json())

const tracksBaseUrl = '/api/tracks'
app.post(tracksBaseUrl, tc.addTrack)                   // C  \\
app.get(tracksBaseUrl, tc.getTracks)                  //  R   \\
app.get(`${tracksBaseUrl}/search`, tc.filterTracks)
app.put(`${tracksBaseUrl}/:id`, tc.editTrack)        //   U    \\
app.delete(`${tracksBaseUrl}/:id`, tc.delTrack)     //    D     \\


app.listen(PORT, () => console.log(`thank you for listening to ${PORT}`))