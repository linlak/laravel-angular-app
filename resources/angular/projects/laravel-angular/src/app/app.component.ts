import { Component } from '@angular/core';
import {trigger, transition, group, query, style, animate} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routeAnimation', [
      transition('1 => 2', [
        style({height: '!'}),
        query(':enter', style({ transform: 'translateX(100%)' })),
        query(':enter, :leave', style({ position: 'absolute', top: 0, left: 0, right: 0 })),
        group([
          query(':leave', [animate('.5s ease-in-out', style({ transform: 'translateX(100%)' }))]),
          query(':enter', [animate('.5s ease-in-out', style({ transform: 'translateX(-100%)' }))])
        ])
      ]),
      transition('2 => 1', [
        style({ height: '!' }),
        query(':enter', style({ transform: 'translateX(100%)' })),
        query(':enter, :leave', style({ position: 'absolute', top: 0, left: 0, right: 0 })),
        // query(':leave', { optional: true })
        group([
          query(':leave', [animate('.5s ease-in-out', style({ transform: 'translateX(100%)' }))]),
          query(':enter', [animate('.5s ease-in-out', style({ transform: 'translateX(-100%)' }))])
        ])
      ]),
      transition('* => 1', [
        style({ height: '!' }),
        query(':enter', style({ transform: 'translateX(100%)' })),
        query(':enter, :leave', style({ position: 'absolute', top: 0, left: 0, right: 0 })),
        group([
          query(':leave', [animate('.5s ease-in-out', style({ transform: 'translateX(-100%)' }))]),
          query(':enter', [animate('.5s ease-in-out', style({ transform: 'translateX(0)' }))])
        ])
      ])
    ])
  ]
})
export class AppComponent {
  title = 'laravel-angular';
  getDepth(outlet) {
    // console.log(outlet.activatedRouteData.depth);
    return outlet.activatedRouteData.depth;
  }
}
