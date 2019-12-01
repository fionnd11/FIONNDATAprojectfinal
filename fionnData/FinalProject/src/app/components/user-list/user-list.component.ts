import { Component, Input, OnChanges, ChangeDetectorRef } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html'
})
export class UserListComponent implements OnChanges {
  //group filters is used to group search results together
@Input() groupFilters: Object;
//all my search object are string e.g firstname lastname 
@Input() searchByKeyword: string;
users: any[] = [];
//filtering search results
filteredUsers: any[] = [];
constructor(private userService: UserService,
  //used for filter searched results, and checks for changes
private ref: ChangeDetectorRef) { }
ngOnInit(): void {
this.loadUsers();
}
//for filtering multiple search results search results
ngOnChanges(): void {
if (this.groupFilters) this.filterUserList(this.groupFilters, this.users);
}
//filters the user list
filterUserList(filters: any, users: any): void {
  //this resets the user list!
this.filteredUsers = this.users; 
const keys = Object.keys(filters);
const filterUser = user => {
let result = keys.map(key => {
if (!~key.indexOf('age')) {
if(user[key]) {
return String(user[key]).toLowerCase().startsWith(String(filters[key]).toLowerCase())
} else {
return false;
}
}
});
// To Clean Array from undefined if the age is passed so the map will fill the gap with (undefined)
result = result.filter(it => it !== undefined);
// Filter the Age out from the other filters
if (filters['ageto'] && filters['agefrom']) {
if (user['age']) {
if (+user['age'] >= +filters['agefrom'] && +user['age'] <= +filters['ageto']) {
result.push(true);
} else {
result.push(false);
}
} else {
result.push(false);
}
}
return result.reduce((acc, cur: any) => { return acc & cur }, 1)
}
this.filteredUsers = this.users.filter(filterUser);
}
loadUsers(): void {
this.userService.fetchUsers()
.subscribe(users => this.users = users);
this.filteredUsers = this.filteredUsers.length > 0 ? this.filteredUsers : this.users;
}
}