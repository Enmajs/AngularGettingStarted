import { Component, OnInit } from '@angular/core';
import { Hero } from '../../core/Interfaces/Hero'
import { HEROES } from '../../core/Constants/Heroes'
import { HeroService } from '../hero.service'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  title = 'Heroes component';
  selectedHero?: Hero;
  hero: Hero = {
    id: 0,
    name: 'name Hero Component',
    phone: 0,
    status: false
  }
  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }
  
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
    console.log('data', this.heroes)
  }
}
