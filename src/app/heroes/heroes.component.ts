import { Component, OnInit } from '@angular/core';
import { Hero} from '../../core/Interfaces/Hero'
import {HEROES} from '../../core/Constants/Heroes'
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes = HEROES;
  title = 'Heroes component';
  selectedHero?: Hero;
  hero: Hero = {
    id: 0,
    name: 'name Hero Component',
    phone: 0,
    status: false
  }
  constructor() { }

  ngOnInit(): void {
  }
  
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
