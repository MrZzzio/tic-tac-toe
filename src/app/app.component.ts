import { Component } from '@angular/core';
import { GameService } from './game.service';
import { QuadService } from './quad.service';
import { Turn } from './turn';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'TicTacToe game';
  winner: string;

  constructor(private gameService: GameService,
              private quadService: QuadService) { }

  checkWin(): boolean {
    let result: boolean = false;
    if (this.quadService.checkWin()) {
      let turn = this.gameService.getWhoseTurn();
      turn === Turn.X ? this.winner = Turn.O : this.winner = Turn.X;
      result = true;
    }
    return result;
  }   
}
