import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WinCheckService {
  constructor() { }

  lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  check(gameMatrix): 'X' | 'O' | null {
    for(let i = 0; i < this.lines.length; i++){
      const [a, b, c] = this.lines[i]

      if(gameMatrix[a] === gameMatrix[b] && gameMatrix[c] === gameMatrix[b]){
        return gameMatrix[a]
      }
    }
    
    return null
  }
}
