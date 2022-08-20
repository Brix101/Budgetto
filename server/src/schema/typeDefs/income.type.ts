import { gql } from "apollo-server-core";

export default gql`
  type Query {
    income: [Income]
  }

  type Income {
    id: ID
    name: String
    amount: Float
    note: String
  }
`;
