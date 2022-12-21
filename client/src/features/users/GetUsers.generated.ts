import { api } from "../../app/api/baseApi";
import * as Types from "../../types/generated";


export type GetUsersQueryVariables = Types.Exact<{
    skip?: Types.Maybe<Types.Scalars['Int']>;
    take?: Types.Maybe<Types.Scalars['Int']>;
}>

export type GetUsersQuery = ({ users?: Types.Maybe<Array<Types.Maybe<(
      { __typename?: 'User' }
      & Pick<Types.User, '_id' | 'email' | 'name'>
    )>>> }
  );
  
export const GetUsersDocument = `
query{
    users{
      _id
      email
      name
    }
  }
`;

const injectedRtkApi = api.injectEndpoints({
// overrideExisting: module.hot?.status() === "apply",
endpoints: (build) => ({
    GetUsers: build.query<GetUsersQuery, GetUsersQueryVariables | void>({
    query: (variables) => ({ document: GetUsersDocument, variables })
    }),
}),
});

export { injectedRtkApi as api };
export const { useGetUsersQuery, useLazyGetUsersQuery } = injectedRtkApi;