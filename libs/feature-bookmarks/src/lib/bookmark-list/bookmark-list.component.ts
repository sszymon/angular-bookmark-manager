import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Bookmark, BookmarkListGQL } from '@angular-bookmark-manager/data-access';
import { map } from 'rxjs/operators';

@Component({
  selector: 'nx-apollo-new-bookmark-list',
  templateUrl: './bookmark-list.component.html',
  styleUrls: ['./bookmark-list.component.css']
})
export class BookmarkListComponent {

  bookmarks$: Observable<Bookmark[]>;

  constructor(private BookmarkListGQL: BookmarkListGQL) {
    this.bookmarks$ = this.BookmarkListGQL
      .watch().valueChanges
      .pipe(map((result) => result.data.allBookmarks));
  }

}
