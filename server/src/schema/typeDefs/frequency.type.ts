import { gql } from "apollo-server-core";

export default gql`
  type Query {
    getAllFrequency: [Frequency]
  }

  type Frequency {
    id: ID
    name: String
    description: String
  }
`;
