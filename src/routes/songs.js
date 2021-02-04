const express = require('express');
const prisma = require('../prismaClient');

const router = express.Router();

// SONGS

router.get('/', async (req, res, next) => {
  try {
    const results = await prisma.songs.findMany({
      include: {
        albums: true,
      },
    });
    res.status(200).json(results);
  } catch (err) {
    next(err);
  }
});


router.get('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const results = await prisma.songs.findOne({
      where: {
        id: +id,
      },
      include: {
        albums: true,
      },
    });
    res.status(200).json(results);
  } catch (err) {
    next(err);
  }
});

module.exports = router;