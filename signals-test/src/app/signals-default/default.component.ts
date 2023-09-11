import { NgFor } from '@angular/common';
import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  standalone: true,
  imports: [NgFor],
})
export class DefaultComponent {
  actions = signal<string[]>([])
  counter = signal(0)
  doubleCounter = computed(() => this.counter() * 2)

  constructor() {
    effect(() => alert("value CHANGED " + this.counter()))
  }

  increment() {
    // this.counter.update((lastNumber) => lastNumber + 1);
    this.counter.set(this.counter() + 1)
    this.actions.mutate((oldActions) => oldActions.push('INCREMENT'));
  }

  decrement() {
    this.counter.update((lastNumber) => lastNumber - 1);
    this.actions.update((oldActions) => [...oldActions, 'DECREMENT']);
  }
}
