import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Players} from '../players.model';

@Injectable({
  providedIn: 'root'
})
export class PlayersServiceService {

  constructor(private http:HttpClient) { }

  GetPlayersInformation():Observable<any>{
    return this.http.get('http://localhost:4000/players');
  }

  AddPlayersInformation(fname:string,lname:string,age:string,club:string):Observable<any>{
    const players:Players = {fname:fname, lname:lname, age:age, club:club};
    console.log(players);
    return this.http.post('http://localhost:4000/players', players);
  }

  DeletePlayers(id:String):Observable<any>{
    return this.http.delete('http://localhost:4000/players/'+id);
  }

  GetPlayers(id:String):Observable<any>{
    return this.http.get('http://localhost:4000/players/'+id);
  }

  UpdatePlayers(id:String,fname:string, lname:string, age:string, club:string):Observable<any>{
    const players:Players = {fname:fname, lname:lname, age:age, club:club};
    console.log("Edit"+id);
    return this.http.put('http://localhost:4000/players/'+id, players);
  }



}

