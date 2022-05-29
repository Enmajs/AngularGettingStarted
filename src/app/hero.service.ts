import { Injectable } from '@angular/core';
import { Hero } from '../core/Interfaces/Hero';
import { HEROES } from '../core/Constants/Heroes';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor() {}
  
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    return heroes;
  }
  
}
