import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { BookmarkListComponent } from './bookmark-list/bookmark-list.component';
import { NewBookmarkFormComponent } from './new-bookmark-form/new-bookmark-form.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [BookmarkListComponent, NewBookmarkFormComponent],
  exports: [BookmarkListComponent, NewBookmarkFormComponent],
})
export class FeatureBookmarksModule {}
