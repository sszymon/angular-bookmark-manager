import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddBookmarkGQL, BookmarkListDocument, BookmarkListQuery } from '@angular-bookmark-manager/data-access';

@Component({
  selector: 'nx-apollo-new-bookmark-form',
  templateUrl: './new-bookmark-form.component.html',
  styleUrls: ['./new-bookmark-form.component.css']
})
export class NewBookmarkFormComponent {
  newBookmarkForm: FormGroup;

  constructor(private addBookmarkGQL: AddBookmarkGQL, private fb: FormBuilder) {

    this.newBookmarkForm = this.fb.group(
      {
        name: ['', Validators.required],
        url: ['', Validators.required],
        groupId: [0, Validators.required]
      }
    )
  }

  createBookmark() {
    if (this.newBookmarkForm.valid) {
      const newBookmark = { 
        name: this.newBookmarkForm.get('name').value, 
        url: this.newBookmarkForm.get('url').value, 
        groupId: this.newBookmarkForm.get('groupId').value,
      };

      this.addBookmarkGQL.mutate(newBookmark)

      this.addBookmarkGQL.mutate(newBookmark, {
        update: (store, result) => {
          const data: BookmarkListQuery = store.readQuery({ query: BookmarkListDocument });
          data.allBookmarks = [...data.allBookmarks, result.data.addBookmark];
          // Write our data back to the cache.
          store.writeQuery({ query: BookmarkListDocument, data });
        }
      }).subscribe(() => {
        this.newBookmarkForm.reset();
      });
    }

  }
}