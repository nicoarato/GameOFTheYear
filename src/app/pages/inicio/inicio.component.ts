import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Game } from '../../interfaces/interfaces';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor( private db: AngularFirestore) { }

  ngOnInit() {

    this.db.collection('goty').valueChanges()
    .pipe(
      map( (resp: Game[]) => {

          return resp.map( ({ name, votos }) => ({name, value: votos}));
          /**
           * esto se puede hacer:
           * return {name: juego.name, value: juego.votos}
           */
        }
      ))
    .subscribe( resp => {
      console.log(resp);
    });
  }

}
