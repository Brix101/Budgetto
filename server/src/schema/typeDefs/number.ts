import { gql } from "apollo-server-core";

export default gql`
  type Query {
    numberSix: Int! # Should always return the number 6 when queried
    numberSeven: Int! # Should always return 7
    hello: String!
  }
`;
