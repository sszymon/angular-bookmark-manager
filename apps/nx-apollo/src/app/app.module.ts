import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FeatureBookmarksModule } from '@angular-bookmark-manager/feature-bookmarks';

import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    HttpClientModule, 
    GraphQLModule, 
    FeatureBookmarksModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
