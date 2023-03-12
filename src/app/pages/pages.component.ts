import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../shared/services/settings.service';

declare function customInitFunctions(): any;

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {
	
	constructor(
		private settingsServices: SettingsService
	) {}

	ngOnInit(): void {
    customInitFunctions();
  }

}
