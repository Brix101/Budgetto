import { gql } from "apollo-server-core";

export default gql`
  type Query {
    getAllExpenses: [Expenses]
  }

  type Expenses {
    id: ID
    name: String
    amount: Float
    category: String
    note: String
  }
`;
