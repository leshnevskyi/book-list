import apollo from 'apollo-server';

import typeDefs from './schema.js';

const {ApolloServer} = apollo;

const server = new ApolloServer({
	typeDefs,
	mocks: true,
});

const obj = await server.listen();

console.log(obj.url);
