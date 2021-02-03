import gql from 'graphql-tag';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
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
};



export type Bookmark = {
  __typename?: 'Bookmark';
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  groupId?: Maybe<Scalars['Int']>;
};

export type Group = {
  __typename?: 'Group';
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  allBookmarks?: Maybe<Array<Maybe<Bookmark>>>;
  allGroups?: Maybe<Array<Maybe<Group>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addBookmark?: Maybe<Bookmark>;
  addGroup?: Maybe<Group>;
};


export type MutationAddBookmarkArgs = {
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  groupId?: Maybe<Scalars['Int']>;
};


export type MutationAddGroupArgs = {
  name?: Maybe<Scalars['String']>;
};

export type BookmarkListQueryVariables = Exact<{ [key: string]: never; }>;


export type BookmarkListQuery = (
  { __typename?: 'Query' }
  & { allBookmarks?: Maybe<Array<Maybe<(
    { __typename?: 'Bookmark' }
    & Pick<Bookmark, 'id' | 'name' | 'url' | 'groupId'>
  )>>> }
);

export type AddBookmarkMutationVariables = Exact<{
  name: Scalars['String'];
  url: Scalars['String'];
  groupId: Scalars['Int'];
}>;


export type AddBookmarkMutation = (
  { __typename?: 'Mutation' }
  & { addBookmark?: Maybe<(
    { __typename?: 'Bookmark' }
    & Pick<Bookmark, 'id' | 'name' | 'url' | 'groupId'>
  )> }
);

export const BookmarkListDocument = gql`
    query bookmarkList {
  allBookmarks {
    id
    name
    url
    groupId
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class BookmarkListGQL extends Apollo.Query<BookmarkListQuery, BookmarkListQueryVariables> {
    document = BookmarkListDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const AddBookmarkDocument = gql`
    mutation addBookmark($name: String!, $url: String!, $groupId: Int!) {
  addBookmark(name: $name, url: $url, groupId: $groupId) {
    id
    name
    url
    groupId
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AddBookmarkGQL extends Apollo.Mutation<AddBookmarkMutation, AddBookmarkMutationVariables> {
    document = AddBookmarkDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }