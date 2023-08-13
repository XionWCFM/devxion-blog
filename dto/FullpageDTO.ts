import { PageList } from '@/types/fullpage';

export class FullpageDTO {
  constructor(public readonly pageList: PageList[]) {
    this.pageList = pageList;
  }
}
