import { Query, Resolver, Mutation, Arg } from 'type-graphql';

import client from '../client';
import { User } from '../schema/users.schema';
import { UserInput } from '../types/UserInput';

@Resolver(() => User)
export class UserResolver {
  @Query(() => [User])
  async getUsers(): Promise<User[] | Error> {
    const user = await client.user.findMany();

    return user;
  }

  @Query(() => User)
  async getUser(@Arg('id') id: number): Promise<User | Error> {
    const user = await client.user.findUnique({
      where: { id },
    });
    if (!user) return Error('No User found');

    return user;
  }

  @Mutation(() => User)
  async createUser(@Arg('data') data: UserInput): Promise<User | Error> {
    const newUser = await client.user.create({ data });

    return newUser;
  }
}
