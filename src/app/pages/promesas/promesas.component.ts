import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  ngOnInit(): void {
    const promesa = new Promise(( resolve, reject ) => {
      if(false) {
        resolve('Hola Mundo')
      } else {
        reject('Algo no funcionó')
      }
    })

    promesa.then(( mensaje ) => {
      console.log(mensaje)
    }).catch( err => console.log('err ->', err))
  }

}
