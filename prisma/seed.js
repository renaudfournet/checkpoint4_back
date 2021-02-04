const prisma = require('../src/prismaClient');


(async () => {

  await prisma.albums.create({
    data: {
      name: 'Verbal Kints Gone',
      photo: 'recto',
    },
  });

  await prisma.albums.create({
    data: {
      name: 'A Ghost Of A Chance',
      photo: 'link002'
    },
  });

  await prisma.songs.create({
    data: {
      name: 'My Bloody Week',
      link: "link001",
      duration: "5mn"
    },
  });

  await prisma.songs.create({
    data: {
      name: 'Doomsday Killer',
      link: 'link002',
      duration: "6mn04"
    },
  });

  await prisma.songs.create({
    data: {
      name: 'Jesus, I Love You Since I Met Jason Pierce',
      link: 'link003',
      duration: "3mn09"
    },
  });

  await prisma.songs.create({
    data: {
      name: 'Surfer',
      link: 'link004',
      duration: "4mn31"
    },
  });
  await prisma.songs.create({
    data: {
      name: 'Another Life',
      link: 'link01',
      duration: "4mn58"
    },
  });
  await prisma.songs.create({
    data: {
      name: 'A Ghost Of A Chance',
      link: 'link02',
      duration: "4mn50"
    },
  });

})().finally(async () => {
  console.log('Seed done');
  await prisma.$disconnect();
});