let tracks = [
    {
        id: 0,
        song: 'watch your step ft. kelis',
        artist: 'disclosure',
        album: 'engery'
    },
    {
        id: 1,
        song: 'i know theres gonna be (good times)',
        artist: 'jamie xx',
        album: 'in colour'
    }
]

let id = 1

module.exports = {
    getTracks: (req, res) => {
        res.status(200).send(tracks)
    },
    addTrack: (req, res) => {
        console.log(req.body)
        const {song, artist, album} = req.body 
        tracks.push({id, song, artist, album})
        id++
        res.status(200).send(tracks)
    },
    editTrack: (req, res) => {
        const {id} = req.params
        const {song} = req.body
        const index = tracks.findIndex(track => {
            return track.id === +id
        })
        tracks[index] = {
            ...tracks[index],
            song
        }
        res.status(200).send(tracks)
    },
    delTrack: (req, res) => {
        const {id} = req.params
        const index = tracks.findIndex(track => {
            return track.id === +id
        })
        tracks.splice(index, 1)
        res.status(200).send(tracks)
    }
}