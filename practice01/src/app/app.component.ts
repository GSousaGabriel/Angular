import { Component } from '@angular/core';
import { TimerHandle } from 'rxjs/internal/scheduler/timerHandle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practice01';
  number = 0
  interval!: TimerHandle

  constructor() { }

  gameOn(gameData: {canStart: boolean, number: number}) {
    if (gameData.canStart) {
      this.interval = setInterval(() => {
        this.number= gameData.number++
      }, 1000)
      return
    }
    clearInterval(this.interval)
  }
}
