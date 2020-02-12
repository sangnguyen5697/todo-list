import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  itemList: string[];

  constructor() {
    this.clearItemList();
  }

  getItemList(): string[] {
    return this.itemList;
  }

  addItem(newItem: string) {
    this.itemList.push(newItem);
  }

  removeItem(index: number) {
    this.itemList.splice(index, 1);
  }

  clearItemList() {
    this.itemList = [];
  }
}
