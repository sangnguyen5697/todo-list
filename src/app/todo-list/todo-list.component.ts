import {Component, OnInit} from '@angular/core';

import {ListService} from '../services/list.service';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  nameToAdd: string;
  nameToSearch: string;

  constructor(private listService: ListService) {
    this.nameToSearch = '';
  }

  ngOnInit(): void {
  }

  getItemList(): string[] {
    if (this.nameToSearch.length > 0) { return this.searchItem(this.nameToSearch); } else { return this.listService.getItemList(); }
  }

  addItem(): void {
    if (this.nameToAdd.length === 0) {
      return;
    }
    this.listService.addItem(this.nameToAdd);
    this.nameToAdd = '';
  }

  removeItem(index: number) {
    this.listService.removeItem(index);
  }

  searchItem(str: string): string[] {
    return this.listService.getItemList().filter(name => name.toLowerCase().startsWith(str.toLowerCase()));
  }

  clearItem() {
    this.nameToAdd = '';
    this.nameToSearch = '';
    this.listService.clearItemList();
  }
}
