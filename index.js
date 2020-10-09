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
  Mutation: {
    addStudent: (_, { input }) => {
      console.log(input.name);
      return {
        name: input.name,
        age: input.age,
        email: input.email,
        id: input.id

      }
    }
  }
};
const typeDefs = gql`
  
  type Student {
    name: String
    email: String
    age: Int
    id: Int
  }
  
  input StdInput {
    name: String
    email: String
    age: Int
    id: Int
  }

  
  type Query {
    student: [Student]
  }

  type Mutation {
    addStudent (input: StdInput): Student
  }
`;

const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});