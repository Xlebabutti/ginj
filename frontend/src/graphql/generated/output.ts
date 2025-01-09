import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
    [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
    T extends { [key: string]: unknown },
    K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
    | T
    | {
          [P in keyof T]?: P extends ' $fragmentName' | '__typename'
              ? T[P]
              : never;
      };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: { input: string; output: string };
    String: { input: string; output: string };
    Boolean: { input: boolean; output: boolean };
    Int: { input: number; output: number };
    Float: { input: number; output: number };
    DateTime: { input: unknown; output: unknown };
};

export type AuthModel = {
    __typename?: 'AuthModel';
    message?: Maybe<Scalars['String']['output']>;
    user?: Maybe<UserModel>;
};

export type ChangeEmailInput = {
    email: Scalars['String']['input'];
};

export type ChangePasswordInput = {
    newPassword: Scalars['String']['input'];
    oldPassword: Scalars['String']['input'];
};

export type CreateUserInput = {
    email: Scalars['String']['input'];
    password: Scalars['String']['input'];
    username: Scalars['String']['input'];
};

export type DeviceModel = {
    __typename?: 'DeviceModel';
    browser: Scalars['String']['output'];
    os: Scalars['String']['output'];
    type: Scalars['String']['output'];
};

export type LocationModel = {
    __typename?: 'LocationModel';
    city: Scalars['String']['output'];
    country: Scalars['String']['output'];
    latidute: Scalars['Float']['output'];
    longitude: Scalars['Float']['output'];
};

export type LoginInput = {
    login: Scalars['String']['input'];
    password: Scalars['String']['input'];
    pin?: InputMaybe<Scalars['String']['input']>;
};

export type Mutation = {
    __typename?: 'Mutation';
    changeEmail: Scalars['Boolean']['output'];
    changePassword: Scalars['Boolean']['output'];
    clearSessionCookie: Scalars['Boolean']['output'];
    createIngress: Scalars['Boolean']['output'];
    createUser: Scalars['Boolean']['output'];
    loginUser: AuthModel;
    logoutUser: Scalars['Boolean']['output'];
    removeSession: Scalars['Boolean']['output'];
    verifyAccount: AuthModel;
};

export type MutationChangeEmailArgs = {
    data: ChangeEmailInput;
};

export type MutationChangePasswordArgs = {
    data: ChangePasswordInput;
};

export type MutationCreateIngressArgs = {
    ingressType: Scalars['Float']['input'];
};

export type MutationCreateUserArgs = {
    data: CreateUserInput;
};

export type MutationLoginUserArgs = {
    data: LoginInput;
};

export type MutationRemoveSessionArgs = {
    id: Scalars['String']['input'];
};

export type MutationVerifyAccountArgs = {
    data: VerificationInput;
};

export type Query = {
    __typename?: 'Query';
    findAllStreams: Array<StreamModel>;
    findAllUsers: Array<UserModel>;
    findCurrentSession: SessionModel;
    findProfile: UserModel;
    findSessionsByUser: Array<SessionModel>;
};

export type SessionMetadataModel = {
    __typename?: 'SessionMetadataModel';
    device: DeviceModel;
    ip: Scalars['String']['output'];
    location: LocationModel;
};

export type SessionModel = {
    __typename?: 'SessionModel';
    createdAt: Scalars['String']['output'];
    id: Scalars['ID']['output'];
    metadata: SessionMetadataModel;
    userId: Scalars['String']['output'];
};

export type StreamModel = {
    __typename?: 'StreamModel';
    categoryId?: Maybe<Scalars['String']['output']>;
    createdAt: Scalars['DateTime']['output'];
    id: Scalars['ID']['output'];
    ingressId?: Maybe<Scalars['String']['output']>;
    isChatEnabled: Scalars['Boolean']['output'];
    isChatFollowersOnly: Scalars['Boolean']['output'];
    isChatPremiumFollowersOnly: Scalars['Boolean']['output'];
    isLive: Scalars['Boolean']['output'];
    serverUrl?: Maybe<Scalars['String']['output']>;
    streamKey?: Maybe<Scalars['String']['output']>;
    thumbnailUrl?: Maybe<Scalars['String']['output']>;
    title: Scalars['String']['output'];
    updatedAt: Scalars['DateTime']['output'];
    user: UserModel;
    userId: Scalars['String']['output'];
};

export type UserModel = {
    __typename?: 'UserModel';
    avatar?: Maybe<Scalars['String']['output']>;
    bio?: Maybe<Scalars['String']['output']>;
    createdAt: Scalars['DateTime']['output'];
    deactivatedAt?: Maybe<Scalars['DateTime']['output']>;
    displayName: Scalars['String']['output'];
    email: Scalars['String']['output'];
    id: Scalars['ID']['output'];
    isDeactivated: Scalars['Boolean']['output'];
    isEmailVerified: Scalars['Boolean']['output'];
    isTotpEnabled: Scalars['Boolean']['output'];
    isVerified: Scalars['Boolean']['output'];
    password: Scalars['String']['output'];
    stream: StreamModel;
    telegramId?: Maybe<Scalars['String']['output']>;
    totpSecret?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['DateTime']['output'];
    username: Scalars['String']['output'];
};

export type VerificationInput = {
    token: Scalars['String']['input'];
};

export type FindAllUserQueryVariables = Exact<{ [key: string]: never }>;

export type FindAllUserQuery = {
    __typename?: 'Query';
    findAllUsers: Array<{
        __typename?: 'UserModel';
        email: string;
        username: string;
        displayName: string;
    }>;
};

export const FindAllUserDocument = gql`
    query FindAllUser {
        findAllUsers {
            email
            username
            displayName
        }
    }
`;

/**
 * __useFindAllUserQuery__
 *
 * To run a query within a React component, call `useFindAllUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindAllUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindAllUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindAllUserQuery(
    baseOptions?: Apollo.QueryHookOptions<
        FindAllUserQuery,
        FindAllUserQueryVariables
    >,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<FindAllUserQuery, FindAllUserQueryVariables>(
        FindAllUserDocument,
        options,
    );
}
export function useFindAllUserLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<
        FindAllUserQuery,
        FindAllUserQueryVariables
    >,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<FindAllUserQuery, FindAllUserQueryVariables>(
        FindAllUserDocument,
        options,
    );
}
export function useFindAllUserSuspenseQuery(
    baseOptions?:
        | Apollo.SkipToken
        | Apollo.SuspenseQueryHookOptions<
              FindAllUserQuery,
              FindAllUserQueryVariables
          >,
) {
    const options =
        baseOptions === Apollo.skipToken
            ? baseOptions
            : { ...defaultOptions, ...baseOptions };
    return Apollo.useSuspenseQuery<FindAllUserQuery, FindAllUserQueryVariables>(
        FindAllUserDocument,
        options,
    );
}
export type FindAllUserQueryHookResult = ReturnType<typeof useFindAllUserQuery>;
export type FindAllUserLazyQueryHookResult = ReturnType<
    typeof useFindAllUserLazyQuery
>;
export type FindAllUserSuspenseQueryHookResult = ReturnType<
    typeof useFindAllUserSuspenseQuery
>;
export type FindAllUserQueryResult = Apollo.QueryResult<
    FindAllUserQuery,
    FindAllUserQueryVariables
>;
