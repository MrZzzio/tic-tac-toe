import { Injectable } from '@angular/core';

import { Turn } from './turn';

@Injectable()
export class GameService {

  private whoseTurn: Turn;

  constructor() {
    this.whoseTurn = Turn.X;
   }

  nextTurn(turn: Turn): boolean {
    let result: boolean = false;
    if (turn === this.whoseTurn) {
      this.whoseTurn === Turn.X ? this.whoseTurn = Turn.O : this.whoseTurn = Turn.X;
      result = true;
    }
    return result;
  }

  getWhoseTurn(): Turn {
    return this.whoseTurn;
  }

}
