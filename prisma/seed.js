const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const userData = [
  {
    name: "Nirav",
    email: "vavadiya.nirav@gmail.com",
    posts: {
      create: [
        {
          title: "Blockchain",
          content: `Blockchain is a system of recording information in a way that makes it difficult or impossible to change, hack, or cheat the system. A blockchain is essentially a digital ledger of transactions that is duplicated and distributed across the entire network of computer systems on the blockchain.`,
          published: true,
        },
      ],
    },
  },
  {
    name: "Panda",
    email: "mepanda@gmail.com",
    posts: {
      create: [
        {
          title: "My Experience with NodeJS",
          content: `Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.`,
          published: true,
          viewCount: 42,
        },
      ],
    },
  },
  {
    name: "Shero",
    email: "shero77@yahoo.com",
    posts: {
      create: [
        {
          title: "GitHub is the best",
          content: `GitHub, Inc. is a provider of Internet hosting for software development and version control using Git. It offers the distributed version control and source code management functionality of Git, plus its own features.`,
          published: true,
          viewCount: 128,
        },
      ],
    },
  },
];

async function main() {
  console.log(`Start seeding ...`);
  for (const u of userData) {
    const user = await prisma.user.create({
      data: u,
    });
    console.log(`Created user with id: ${user.id}`);
  }
  console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
