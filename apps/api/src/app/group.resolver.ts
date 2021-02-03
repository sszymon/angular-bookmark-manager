import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

export interface GroupEntity {
  id: number;
  name: string;
}

@Resolver('Group')
export class GroupResolver {
  private groups: GroupEntity[] = [
    {
      id: 1,
      name: 'work'
    },
    {
      id: 2,
      name: 'leisure'
    },
    {
      id: 3,
      name: 'personal'
    }
  ];

  @Query('allGroups')
  getAllGroups(): GroupEntity[] {
    return this.groups;
  }

  @Mutation()
  addGroup(
    @Args('name') name: string
  ) {
    const newGroup = {
      id: this.groups.length + 1,
      name,
    };

    this.groups.push(newGroup);

    return newGroup;
  }
}