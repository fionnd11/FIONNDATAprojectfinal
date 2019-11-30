import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import {Router, ActivatedRoute} from '@angular/router';
import {PlayersServiceService} from '../Services/players.service'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
players:any=[];
  constructor(private playersService:PlayersServiceService, private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit() {
    this.playersService.GetPlayers(this.route.snapshot.params['id']).subscribe(
      (data) =>{
          this.players = data;
          console.log(this.players);
      }
    );

  }
  onEditPlayers(form:NgForm){
    console.log(form.value.title);
    this.playersService.UpdatePlayers(this.players._id, form.value.fname,
      form.value.lname, form.value.age, form.value.club).subscribe();
  }
}
