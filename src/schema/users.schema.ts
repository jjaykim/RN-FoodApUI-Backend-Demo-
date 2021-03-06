import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class User {
  @Field()
  id!: number;

  @Field()
  name!: string;

  @Field()
  email!: string;

  @Field()
  phone!: string;
}
