import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {

	defaultTheme = './assets/css/colors/default-dark.css';
	linkTheme = document.querySelector('#theme');

	ngOnInit(): void {
		
		const url = localStorage.getItem('theme');
		this.linkTheme?.setAttribute('href',  url || this.defaultTheme)

	}

	// ./assets/css/colors/default-dark.css

}
