import { Component, OnInit } from '@angular/core';
import { BetsService } from '../service/bets.service';

@Component({
  selector: 'app-bets-page',
  templateUrl: './bets-page.component.html'
})
export class BetsPageComponent  {

  get currentLegue() {
    return this.betService.ligaActual;
  }

  get currentCount() {
    return this.betService.conteoActual;
  }

  constructor(private betService : BetsService) {

  }  


}
