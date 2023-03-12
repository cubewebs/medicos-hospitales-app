import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  defaultTheme = './assets/css/colors/default-dark.css';
	linkTheme = document.querySelector('#theme');
  

  constructor() {
    
    this.getFromThemeFromLocalStorage();
  }

  getFromThemeFromLocalStorage() {
    const url = localStorage.getItem('theme');
		this.linkTheme?.setAttribute('href',  url || this.defaultTheme);
    
  }

	changeTheme( theme: string ) {
		
		const url = `./assets/css/colors/${ theme }.css`;
		this.linkTheme?.setAttribute('href', url);
		localStorage.setItem('theme', url);
		this.checkCurrentTheme();
		
	}

	checkCurrentTheme() {

    const links: NodeListOf<Element>  = document.querySelectorAll('.selector');
	
		links.forEach( elem => {
			
			elem.classList.remove('working');
			const btnTheme = elem.getAttribute('data-theme');
			const btnThemeUrl = `./assets/css/colors/${ btnTheme }.css`;
			const currentTheme = this.linkTheme?.getAttribute('href');
			
			if( btnThemeUrl === currentTheme) {
				elem.classList.add('working')
			}

		})

	}
}
