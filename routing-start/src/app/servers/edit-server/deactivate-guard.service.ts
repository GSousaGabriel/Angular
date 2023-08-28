import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';


type CanDeactivateType = Observable<boolean> | Promise<boolean> | boolean;

export interface CanComponentDeactivate {
  canDeactivate: () => CanDeactivateType;
}

@Injectable({
  providedIn: 'root'
})

export class DeactivateGuardService implements CanDeactivate<CanComponentDeactivate>{

  constructor() { }

  canDeactivate(component: CanComponentDeactivate,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
    nextState: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    return component.canDeactivate()
  }
}
