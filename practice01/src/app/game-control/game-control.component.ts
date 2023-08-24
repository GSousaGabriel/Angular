import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {
  @Output() gameStarted= new EventEmitter<{canStart: boolean, number: number}>()

  startGame(canStart: boolean){
    this.gameStarted.emit({canStart, number: 0})
  }
}
