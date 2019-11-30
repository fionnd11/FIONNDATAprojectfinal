import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { PlayersServiceService  } from '../Services/players.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private playersService: PlayersServiceService) { }

  ngOnInit() {
  }
  
  onAddPlayers(form: NgForm) {
    
    if(!form.valid)
    {
      return;
    }

    console.log(form.value);
    // console.log(form.value.date);
    // this.myDate = new Date(form.value.date);
    // console.log(this.myDate);

    this.playersService.AddPlayersInformation(form.value.fname,
      form.value.lname, form.value.age, form.value.club).subscribe(
        ()=>{
          //do something after out operation has finished
        }
      );
    console.log(form.value);
    form.resetForm();
  }

}
