import { Injectable } from '@angular/core';

import { QuadService } from './quad.service';
import { GameService } from './game.service';
import { Turn } from './turn';
import * as _ from 'lodash';

@Injectable()
export class BotService {

  constructor(private quadService: QuadService,
              private gameService: GameService) { }

  start(): void {
    let interval = setInterval(() => {
      if (this.gameService.getWhoseTurn() === Turn.O 
        && this.quadService.hasEmptyQuad()) {
        let x, y;
        do {
          x = _.random(0, 2);
          y = _.random(0, 2);
        } while (this.quadService.getQuad(x, y).isSelected !== false);
        if (this.quadService.checkWin()) {
          this.stop(interval);
          return;
        }
        this.quadService.select(x, y, Turn.O);
        this.gameService.nextTurn(Turn.O)
      }}, 2500);
  }

  stop(interval): void {
    clearInterval(interval);
  }
}
