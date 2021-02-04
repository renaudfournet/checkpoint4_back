const express = require('express');
const prisma = require('../prismaClient');

const router = express.Router();

// GET TEST

router.get('/', async (req, res, next) => {
  try {
    const results = await prisma.albums.findMany({
      include: {
        songs: true,
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
    const results = await prisma.albums.findOne({
      where: {
        id: +id,
      },
      include: {
        songs: true,
      },
    });
    res.status(200).json(results);
  } catch (err) {
    next(err);
  }
});

router.post('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const results = await prisma.albums.findOne({
      where: {
        id: +id,
      },
      include: {
        songs: true,
      },
    });
    res.status(200).json(results);
  } catch (err) {
    next(err);
  }
});

router.put('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const results = await prisma.albums.findOne({
      where: {
        id: +id,
      },
      include: {
        songs: true,
      },
    });
    res.status(200).json(results);
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const results = await prisma.albums.findOne({
      where: {
        id: +id,
      },
      include: {
        songs: true,
      },
    });
    res.status(200).json(results);
  } catch (err) {
    next(err);
  }
});

module.exports = router;