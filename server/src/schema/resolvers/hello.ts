export const resolvers = {
  Query: {
    books: () => books,
    numberSix() {
      return 6;
    },
    numberSeven() {
      return 7;
    },
    hello: () => {
      return "Hello";
    },
  },
};

const books = [
  {
    title: "The Awakening",
    author: "Kate Chopin",
  },
  {
    title: "City of Glass",
    author: "Paul Auster",
  },
];
