import { Component } from '@angular/core';

@Component({
  selector: 'generic-list',
  template: `<ion-list [virtualScroll]="items">
  <ion-item *virtualItem="let item">
    {{ item }}
  </ion-item>
</ion-list>`
})
export class GenericList {
  items:Array<any> = [1,2,3,4,5];
  constructor() {  
  }
}