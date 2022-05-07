import { Field, InputType } from 'type-graphql';

import { User } from '../schema/users.schema';

@InputType()
export class UserInput implements Pick<User, 'name' | 'email' | 'phone'> {
  @Field()
  name!: string;

  @Field()
  email!: string;

  @Field()
  phone!: string;
}
