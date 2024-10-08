import { gql } from "apollo-server-express";

export const typeDefsUser = gql`
  type User {
    code: Int,
    message: String,
    id: String,
    fullName: String,
    email: String,
    token: String
  }

  type Query {
    getUser: User
  }

  input UserInput {
    fullName: String,
    email: String,
    password: String
  }

  input LoginUserInput {
    fullName: String,
    email: String,
    password: String
  }

  type Mutation {
    registerUser(user: UserInput): User,
    loginUser(user: LoginUserInput): User,
  }
`