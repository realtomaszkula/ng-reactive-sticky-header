import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-sticky-header>Header</app-sticky-header>
  <div class="content">
    <div class="page" *ngFor="let page of pages"></div>
  </div>
  `,
  styles: [
    `
      :host {
        background: rgba(0, 0, 0, 0.1);
      }

      app-sticky-header {
        z-index: 1000;
        box-shadow: 2px 0 0 2px rgba(0, 0, 0, 0.3);
        color: white;
        background-color: #ab47bc;
        font-size: 2rem;
        height: 75px;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .content {
        padding-top: 75px;
      }

      .page {
        height: 50vh;
      }

      .page:nth-child(odd) {
        background-color: rgba(0, 0, 0, 0.1);
      }

      .page:nth-child(even) {
        background-color: rgba(0, 0, 0, 0.05);
      }
    `
  ]
})
export class AppComponent {
  pages = new Array(10);
}
