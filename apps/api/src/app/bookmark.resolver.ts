import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

export interface BookmarkEntity {
  id: number;
  name: string;
  url: string;
  groupId: number;
}

@Resolver('Bookmark')
export class BookmarkResolver {
  private bookmarks: BookmarkEntity[] = [
    {
      id: 1,
      name: 'Wirtualna Polska',
      url: 'https://www.wp.pl/',
      groupId: 1
    },
    {
      id: 2,
      name: 'Guardian',
      url: 'https://www.theguardian.com',
      groupId: 2
    },
    {
      id: 3,
      name: 'Onet',
      url: 'https://www.onet.pl/',
      groupId: 2
    },
    {
      id: 4,
      name: 'Kwejk',
      url: 'https://kwejk.pl/',
      groupId: 1
    }
  ];

  @Query('allBookmarks')
  getAllBookmarks(): BookmarkEntity[] {
    return this.bookmarks;
  }

  @Mutation()
  addBookmark(
    @Args('name') name: string,
    @Args('url') url: string,
    @Args('groupId') groupId: number
  ) {
    const newBookmark = {
      id: this.bookmarks.length + 1,
      name,
      url,
      groupId: groupId,
    };

    this.bookmarks.push(newBookmark);

    return newBookmark;
  }
}