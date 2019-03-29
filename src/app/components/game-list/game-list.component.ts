import { Component, OnInit, HostBinding } from '@angular/core';

import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  games: any = [];
  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.getGames();
  }

  getGames(){
    this.gameService.getGames().subscribe(
      res => {
        this.games = res;
      },
      err => console.error(err)
    );
  }

  deleteGame(id:string){
    this.gameService.deleteGame(id)
     .subscribe(
       res => {
        console.log(res);
        this.getGames();
       },
       err => console.log(err)
     );
  }
}
