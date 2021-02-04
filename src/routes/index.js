const router = require('express').Router();

const albums = require('./albums');
const songs = require('./songs');

router.use('/albums', albums);
router.use('/songs', songs);


module.exports = router;