import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { Game } from '../../interfaces/interfaces';
import { switchAll } from 'rxjs/operators';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-goty',
  templateUrl: './goty.component.html',
  styleUrls: ['./goty.component.css']
})
export class GotyComponent implements OnInit {

  constructor(private gameService: GameService) { }

  juegos: Game[] = [];
  ngOnInit() {

    this.gameService.getNominados()
        .subscribe( juegos => {
          console.log(juegos);
          this.juegos = juegos;
        });

      }

    votarJuego( juego: Game ) {
      //console.log(juego);
      this.gameService.votarJuego(juego.id)
      .subscribe( (resp: {ok: boolean, mensaje: string}) => {
        
        if ( resp.ok ) {
          Swal.fire('Gracias', resp.mensaje, 'success');
        }
        
      });
    }


}
