import { Component, OnInit } from '@angular/core';

import { QuadService } from '../quad.service';
import { Quad } from '../quad';
import { GameService } from '../game.service';
import { BotService } from '../bot.service';
import { Turn } from '../turn';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit {

  private whoseTurn: Turn;

  constructor(private quadService: QuadService,
              private gameService: GameService,
              private botService: BotService) { }

  ngOnInit() {
    this.createQuads();
    this.botService.start();
    this.whoseTurn = Turn.X;
  }
  
  select(x: number, y: number): void {
    if (this.gameService.getWhoseTurn() === this.whoseTurn
          && !this.getQuad(x, y).isSelected) {
      this.quadService.checkWin();
      this.quadService.select(x, y, Turn.X);
      this.gameService.nextTurn(Turn.X);
    }
  }

  getQuad(x: number, y: number): Quad {
    return this.quadService.getQuad(x, y);
  }

  getStyle(x: number, y: number): string {
    let style: string;
    let quad: Quad = this.quadService.getQuad(x, y);
    if (quad.whoSelected === Turn.X) {
      style = 'url(\'../../assets/k.png\')';
    }
    if (quad.whoSelected === Turn.X && quad.win) {
      style = 'url(\'../../assets/k_win.png\')';
    }
    if (quad.whoSelected === Turn.O) {
      style = 'url(\'../../assets/n.png\')';
    }
    if (quad.whoSelected === Turn.O && quad.win) {
      style = 'url(\'../../assets/n_win.png\')';
    }
    return style;
  }

  private createQuads(): void {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j <3; j++) {
        this.quadService.create(i, j);
      }
    }
  }

}
