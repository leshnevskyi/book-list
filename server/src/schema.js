import apollo from 'apollo-server';

const {gql} = apollo;

// const typeDefs = gql`
// 	type Query {
// 		books: [Book!]
// 	}

// 	type Book {
// 		id: ID!
// 		title: String!
// 		author: Author!
// 		year: Int
// 		pageCount: Int
// 		price: Float
// 	}

// 	type Author {
// 		id: ID!
// 		name: String!
// 	}
// `;

const typeDefs = gql`
  type Query {
    spaceCats: [SpaceCat]
  }

  type SpaceCat {
    id: ID!
    name: String!
    age: Int
    missions: [Mission]
  }

  type Mission {
    id: ID!
    name: String!
    description: String!
  }
`;

export default typeDefs;