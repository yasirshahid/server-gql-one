const { ApolloServer, gql } = require('apollo-server');

const student = [
    {
        name: "Dua",
        email: "dua@gmail.com",
        age: 6,
        id: 0
    },
    {
        name: "Aarib",
        email: "aarib@gmail.com",
        age: 2,
        id: 1
    },
    {
        name: "yasir",
        email: "yasir@gmail.com",
        age: 35,
        id: 3
    }
];

const resolvers = {
    Query: {
      student: () => student,
    },
  };
const typeDefs = gql`
  
  type Students {
    name: String
    email: String
    age: Int
    id: Int
  }

  
  type Query {
    student: [Students]
  }
`;
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});