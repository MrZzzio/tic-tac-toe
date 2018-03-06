import { Injectable } from '@angular/core';

import { Quad } from './quad';
import { Turn } from './turn';

@Injectable()
export class QuadService {

  private quads;

  constructor() {
    this.quads = [];
    for (let i = 0; i < 3; i++) {
      this.quads[i] = [];
      for (let j = 0; j < 3; j++) {
        this.quads[i][j] = null;
      }
    }
   }
  
  create(x: number, y: number): void {
    this.quads[y][x] = new Quad(x + 1, y + 1);
  }

  getQuads(): object {
    return this.quads;
  }

  getQuad(x: number, y: number): Quad {
    return this.quads[y][x];
  }

  select(x: number, y:number, turn: Turn): boolean {
    let result: boolean = false;
    if (!this.quads[y][x].isSelected) {
      this.quads[y][x].isSelected = true;
      this.quads[y][x].whoSelected = turn;
      console.log('selected ' + (y + 1) + '-' + (x + 1) + '!');
      result = true;
    }
    return result;
  }
}
