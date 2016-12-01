import { Component, OnInit } from '@angular/core';
import { PreloadSelectedModules } from '../preload-strategy';

@Component({
  template: `
<p>Preloaded Modules:</p>
<ul>
  <li *ngFor="let m of preloadedModules">{{m}}</li>
</ul>
`
})
export class AdminDashboardComponent implements OnInit {
  preloadedModules: string[];

  constructor(private preloadSelectedModules: PreloadSelectedModules) { }

  ngOnInit() {
    this.preloadedModules = this.preloadSelectedModules.preloadedModules;
  }

}
