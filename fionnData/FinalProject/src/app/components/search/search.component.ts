import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
    `
      .form-control {
        margin-bottom: 15px;
      }
    `
  ]
})
//picking the option level for the player e.g Premier-league/EFL-championship
export class SearchComponent implements OnInit {
form: FormGroup;
  levels = [
    "Premier-League",
    "EFL-Championship",
  ];
 //shows search results as outputs 
@Output() groupFilters: EventEmitter<any> = new EventEmitter<any>();
searchText: string = '';
constructor(private fb: FormBuilder,
private userService: UserService) {}
ngOnInit(): void {
this.buildForm();
}
buildForm(): void {
this.form = this.fb.group({
firstName: new FormControl(''),
lastName: new FormControl(''),
club: new FormControl(''),
level: new FormControl(''),
agefrom: new FormControl(''),
ageto: new FormControl('')
});
}

 search(filters: any): void {
Object.keys(filters).forEach(key => filters[key] === '' ? delete filters[key] : key);
this.groupFilters.emit(filters);
}
  
}