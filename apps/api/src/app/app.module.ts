import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookmarkResolver } from './bookmark.resolver';
import { GroupResolver } from './group.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql']
    })
  ],
  controllers: [AppController],
  providers: [
    AppService, 
    BookmarkResolver, 
    GroupResolver
  ],
})
export class AppModule {}
