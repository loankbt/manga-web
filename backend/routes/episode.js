const router = require('express').Router();
const path = require('path');
let Episode = require('../models/episode.model');

// // get all mangas
// router.route('/').get((req, res) => {
//     Manga.find()
//         .then(manga => res.json(manga))
//         .catch(err => res.status(400).json('Error: ' + err))
// });

// // get on-going mangas
// router.route('/on-going').get((req, res) => {
//     Manga.find({ "type": "On going" })
//         .then(manga => res.json(manga))
//         .catch(err => res.status(400).json('Error: ' + err))
// });

// // get completed mangas
// router.route('/completed').get((req, res) => {
//     Manga.find({ "type": "Completed" })
//         .then(manga => res.json(manga))
//         .catch(err => res.status(400).json('Error: ' + err))
// });

// get cover of episode
router.route('/cover/:imageName').get((req, res) => {
    const address = path.join(__dirname, "..", "assets/ep-covers", req.params.imageName)

    res.sendFile(address);
});

// get episodes by manga
router.route('/list/:mangaCode').get((req, res) => {
    Episode.find({ "belongsTo": req.params.mangaCode })
        .then(manga => res.json(manga))
        .catch(err => res.status(400).json('Error: ' + err))
})

// create new episode
router.route('/add').post((req, res) => {
    const belongsTo = req.body.belongsTo
    const name = req.body.name
    const cover = req.body.cover

    const newEpisode = new Episode({
        belongsTo,
        name,
        cover,
    });

    newEpisode.save()
        .then(() => res.json('Episode added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;