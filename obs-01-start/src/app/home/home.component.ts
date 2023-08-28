import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  private obsSubscription: Subscription

  constructor() { }

  ngOnInit() {
    // this.obsSubscription= interval(1000).subscribe((count) => {
    //   console.log(count)
    // })
    const customObs = new Observable((observer) => {
      let count = 0

      setInterval(() => {
        observer.next(count)
        if (count > 3) {
          observer.error('Count is too big!')
        }
        count++
      }, 1000)
    })

    this.obsSubscription = customObs.pipe(map((data) => {
      return 'test ' + data
    })).subscribe((count) => {
      console.log(count)
    })
  }

  ngOnDestroy(): void {
    this.obsSubscription.unsubscribe()
  }

}
