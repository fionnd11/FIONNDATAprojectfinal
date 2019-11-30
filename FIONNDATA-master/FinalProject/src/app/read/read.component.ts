import { Component, OnInit } from '@angular/core';
import { PlayersServiceService } from '../Services/players.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
  MyPlayers: any = [];
  constructor(private playersService: PlayersServiceService) { }

  ngOnInit() {
    this.playersService.GetPlayersInformation().subscribe((data) => {
      this.MyPlayers = data.players;
      console.log(this.MyPlayers);
    })
  }

  onDelete(id:String){
    console.log("Deleting player with id: "+id);
    this.playersService.DeletePlayers(id).subscribe(
      ()=>{
        this.ngOnInit();
      }
    );
  }

}
