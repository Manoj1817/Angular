import {
  Component,
  AfterViewInit,
  Inject,
  PLATFORM_ID
} from '@angular/core';

import { isPlatformBrowser } from '@angular/common';

import Typed from 'typed.js';

import { PORTFOLIO } from '../../data/portfolio.data';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class Hero implements AfterViewInit {

  portfolio = PORTFOLIO;

  constructor(
    @Inject(PLATFORM_ID)
    private platformId: Object
  ) {}

  ngAfterViewInit(): void {

    if (isPlatformBrowser(this.platformId)) {

      new Typed('#typed', {
        strings: [
          'Full Stack Developer',
          'PHP Backend Developer',
          'Angular Developer',
          'Data Analytics Enthusiast'
        ],
        typeSpeed: 60,
        backSpeed: 40,
        backDelay: 1500,
        loop: true
      });

    }

  }

}