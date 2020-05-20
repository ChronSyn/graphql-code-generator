import * as Types from '../types';

import * as gm from 'graphql-modules';

interface DefinedFields {
  Query: 'ping';
  Mutation: 'pong';
}

export type Query = Pick<Types.Query, DefinedFields['Query']>;
export type Mutation = Pick<Types.Mutation, DefinedFields['Mutation']>;

export type QueryResolvers = Pick<Types.QueryResolvers, DefinedFields['Query']>;
export type MutationResolvers = Pick<Types.MutationResolvers, DefinedFields['Mutation']>;

export interface Resolvers {
  Query?: QueryResolvers;
  Mutation?: MutationResolvers;
}

export interface ResolveMiddlewareMap {
  '*'?: {
    '*'?: gm.ResolveMiddleware[];
  };
  Query?: {
    '*'?: gm.ResolveMiddleware[];
    ping?: gm.ResolveMiddleware[];
  };
  Mutation?: {
    '*'?: gm.ResolveMiddleware[];
    pong?: gm.ResolveMiddleware[];
  };
}