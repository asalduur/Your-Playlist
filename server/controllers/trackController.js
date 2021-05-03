let tracks = [
    {
        id: 0,
        song: 'watch your step ft. kelis',
        artist: 'disclosure',
        album: 'energy'
    },
    {
        id: 1,
        song: 'i know theres gonna be (good times)',
        artist: 'jamie xx',
        album: 'in colour'
    }
]

let id = 2

module.exports = {
    getTracks: (req, res) => {
        res.status(200).send(tracks)
    },
    filterTracks: (req, res) => {
        const { song } = req.query
        console.log(song)
        const search = tracks.filter(track => track.song.toLowerCase().includes(song.toLowerCase()))
        res.status(200).send(search)
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