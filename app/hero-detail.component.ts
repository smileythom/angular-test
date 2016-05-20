import { Component, Input, OnInit } from '@angular/core';
import { Router, RouteParams } from '@angular/router-deprecated';

import { Hero } from './hero'
import { HeroService } from './hero.service';


@Component({
  selector: 'my-hero-detail',
  templateUrl: 'app/hero-detail.component.html',
  styleUrls: ['app/hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit{
    
    hero: Hero;
    error: any;
    navigated = false;
    
    constructor(
        private router: Router,
        private heroService: HeroService,
        private routeParams: RouteParams) {
    }

    ngOnInit() {
        if (this.routeParams.get('id') !== null ) {
            let id = +this.routeParams.get('id');
            this.navigated = true;
            this.heroService.getHero(id)
                .then(hero => this.hero = hero);
        } else {
            this.navigated = false;
            this.hero = new Hero();
        }
    }
    
    save() {
        this.heroService
            .save(this.hero)
            .then(hero => {
                this.hero = hero; // saved hero, w/ id if new
                this.goBack();
            })
            .catch(error => this.error = error); // TODO: Display error message
    }

    
    goBack() {
        window.history.back();
    }

}
