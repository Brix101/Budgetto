export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type Budget = {
  __typename?: 'Budget';
  _id: Scalars['String'];
  amount: Scalars['Float'];
  createdAt: Scalars['DateTime'];
  name: Scalars['String'];
  note?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export enum Category {
  Essential = 'ESSENTIAL',
  NonEssential = 'NON_ESSENTIAL'
}

export type CreateBudgetInput = {
  exampleField: Scalars['Int'];
};

export type CreateLedgerInput = {
  amount?: Scalars['Float'];
  category: Category;
  ledgerType?: InputMaybe<LedgerType>;
  name: Scalars['String'];
  note?: InputMaybe<Scalars['String']>;
  periodical?: InputMaybe<Periodical>;
};

export type CreateUserInput = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
};

export type Ledger = {
  __typename?: 'Ledger';
  _id: Scalars['String'];
  amount: Scalars['Float'];
  category: Category;
  createdAt: Scalars['DateTime'];
  ledgerType?: Maybe<LedgerType>;
  name: Scalars['String'];
  periodical?: Maybe<Periodical>;
  updatedAt: Scalars['DateTime'];
};

export enum LedgerType {
  Expense = 'EXPENSE',
  Income = 'INCOME'
}

export type LoginResponse = {
  __typename?: 'LoginResponse';
  accessToken?: Maybe<Scalars['String']>;
};

export type LoginUserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createBudget: Budget;
  createLedger: Ledger;
  createUser: User;
  login: LoginResponse;
  removeBudget: Budget;
  removeLedger: Ledger;
  removeUser: User;
  updateBudget: Budget;
  updateLedger: Ledger;
  updateUser: User;
};


export type MutationCreateBudgetArgs = {
  createBudgetInput: CreateBudgetInput;
};


export type MutationCreateLedgerArgs = {
  createLedgerInput: CreateLedgerInput;
};


export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};


export type MutationLoginArgs = {
  loginUserInput: LoginUserInput;
};


export type MutationRemoveBudgetArgs = {
  id: Scalars['String'];
};


export type MutationRemoveLedgerArgs = {
  id: Scalars['String'];
};


export type MutationRemoveUserArgs = {
  id: Scalars['String'];
};


export type MutationUpdateBudgetArgs = {
  updateBudgetInput: UpdateBudgetInput;
};


export type MutationUpdateLedgerArgs = {
  updateLedgerInput: UpdateLedgerInput;
};


export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput;
};

export enum Periodical {
  Annual = 'ANNUAL',
  Daily = 'DAILY',
  Monthly = 'MONTHLY',
  Quarterly = 'QUARTERLY',
  Weekly = 'WEEKLY'
}

export type Query = {
  __typename?: 'Query';
  budget: Budget;
  budgets: Array<Budget>;
  ledger: Ledger;
  ledgers: Array<Ledger>;
  user: User;
};


export type QueryBudgetArgs = {
  id: Scalars['String'];
};


export type QueryLedgerArgs = {
  id: Scalars['String'];
};

export type UpdateBudgetInput = {
  exampleField?: InputMaybe<Scalars['Int']>;
  id: Scalars['String'];
};

export type UpdateLedgerInput = {
  amount?: InputMaybe<Scalars['Float']>;
  category?: InputMaybe<Category>;
  id: Scalars['String'];
  ledgerType?: InputMaybe<LedgerType>;
  name?: InputMaybe<Scalars['String']>;
  note?: InputMaybe<Scalars['String']>;
  periodical?: InputMaybe<Periodical>;
};

export type UpdateUserInput = {
  email?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  _id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  ledgers: Array<Ledger>;
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};


