const router = require('express').Router()
const path = require('path')

let Image = require('../models/image.model')

// get image by episode
router.route('/imageList/:epId').get((req, res) => {
    Image.find({ 'epId': req.params.epId })
        .then(epList => res.json(epList))
        .catch(err => res.status(400).json('Error:' + err))
})

// add images to episode
router.route('/add/:epId').post((req, res) => {
    const imgObjects = req.body

    Image.collection.insertMany(imgObjects)
        .then(() => res.json('Image added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// get single image
router.route('/:epId/:imgName').get((req, res) => {
    const address = path.join(__dirname, "..", "assets/ep-images", req.params.epId, req.params.imgName)

    res.sendFile(address);
});

module.exports = router;