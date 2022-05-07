import 'reflect-metadata';
import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'type-graphql';

const main = async () => {
  const app = express();

  // accept data as json.
  app.use(express.json());

  const schema = await buildSchema({
    resolvers: [`${__dirname}/resolvers/**/*.{ts,js}`],
    emitSchemaFile: true,
  });

  app.use('/graphql', graphqlHTTP({ schema, graphiql: true }));

  app.listen(5000, () => {
    console.info('Listening on port 5000');
  });
};

main();
