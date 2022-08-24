import { registerEnumType } from "type-graphql";

export enum Category {
  DAILY,
  WEEKLY,
  MONTHLY,
}

registerEnumType(Category, {
  name: "Category", // this one is mandatory
});
