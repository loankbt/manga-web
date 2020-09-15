const router = require('express').Router();
const path = require('path');
let Manga = require('../models/manga.model');

// get all mangas
router.route('/').get((req, res) => {
    Manga.find()
        .then(manga => res.json(manga))
        .catch(err => res.status(400).json('Error: ' + err))
});

// get new mangas
router.route('/new').get((req, res) => {
    Manga.find().sort({ createdAt: -1 }).limit(4)
        .then(manga => res.json(manga))
        .catch(err => res.status(400).json('Error: ' + err))
})

// get manga by type
router.route('/type/:type').get((req, res) => {
    Manga.find({ "type": req.params.type }).sort({ createdAt: -1 })
        .then(manga => res.json(manga))
        .catch(err => res.status(400).json('Error: ' + err))
});

// get on-going mangas
router.route('/on-going').get((req, res) => {
    Manga.find({ "state": "On going" }).sort({ createdAt: -1 })
        .then(manga => res.json(manga))
        .catch(err => res.status(400).json('Error: ' + err))
});

// get completed mangas
router.route('/completed').get((req, res) => {
    Manga.find({ "state": "Completed" })
        .then(manga => res.json(manga))
        .catch(err => res.status(400).json('Error: ' + err))
});

// get cover of manga
router.route('/:imageName').get((req, res) => {
    const address = path.join(__dirname, "..", "assets/covers", req.params.imageName)

    res.sendFile(address);
});

// get single manga by mangaCode
router.route('/detail/:mangaCode').get((req, res) => {
    Manga.find({ "code": req.params.mangaCode })
        .then(manga => res.json(manga))
        .catch(err => res.status(400).json('Error: ' + err))
})

// get banner
router.route('/banner/:bannerName').get((req, res) => {
    const address = path.join(__dirname, "..", "assets/banners", req.params.bannerName)

    res.sendFile(address);
})

// create new manga
router.route('/add').post((req, res) => {
    const name = req.body.name;
    const author = req.body.author;
    const type = req.body.type;
    const about = req.body.about;

    const newManga = new Manga({
        name,
        author,
        type,
        about,
    });

    newManga.save()
        .then(() => res.json('Manga added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;