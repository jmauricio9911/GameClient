import { Component, OnInit, HostBinding } from '@angular/core';
import { Game } from '../../models/Game';
import { GameService } from '../../services/game.service';

import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css']
})
export class GameFormComponent implements OnInit {
  @HostBinding('class') classes = 'row';
  
  game: Game = {
    id: 0,
    title: '',
    descripcion: '',
    imagen: '',
    created_at: new Date()
  };

  edit: boolean = false;

  constructor( private gameService: GameService, private route: Router, private activeRouter: ActivatedRoute) { }

  ngOnInit() {
    const params =  this.activeRouter.snapshot.params;
    if(params.id){
      this.gameService.getGame(params.id)
      .subscribe(
        res => {
          this.game = res;
          this.edit = true;
        },
        err => console.error(err)
      );
    }
  }


  saveNewGame(){
    delete this.game.created_at;
    delete this.game.id;
    this.gameService.saveGame(this.game)
      .subscribe(
        res => {
          console.log(res);
          this.route.navigate(['/games']);
        },
        err => console.error(err)
      );
  }

  updateGame(){
    delete this.game.created_at;
    this.gameService.updateGame(this.game.id,this.game,)
      .subscribe(
        res => {
          console.log(res)
          this.route.navigate(['/games']);
        },
        err =>  console.log(err)
      );
  }

}
