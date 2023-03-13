import { Component } from '@angular/core';
import { Observable, retry } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent {

  constructor() {

    let i = 0;
    const observable$ = new Observable( observer => {

      const intervalo = setInterval( () => {
        i++;
        observer.next(i);
        if(i == 4) {
          clearInterval(intervalo)
          observer.complete()
        }

        if(i === 2) {
          observer.error('i llego al valor de 2')
        }
      }, 1000)

    });

    observable$.pipe(
      retry()
    ).subscribe( 
      obs => console.log('obs ->', obs),
      error => console.log('error ->', error),
      () => console.log('Completed')
      );
    
  }

}
