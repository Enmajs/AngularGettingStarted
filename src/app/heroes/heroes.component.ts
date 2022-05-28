import { Component, OnInit } from '@angular/core';
import { Hero} from '../../core/Interfaces/Hero'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  title = 'Heroes component';
  hero: Hero = {
    id: 0,
    name: 'name Hero Component',
    phone: 0,
    status: false
  }
  constructor() { }

  ngOnInit(): void {
  }

}
