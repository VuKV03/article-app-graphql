"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefsUser = void 0;
const apollo_server_express_1 = require("apollo-server-express");
exports.typeDefsUser = (0, apollo_server_express_1.gql) `
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
`;
