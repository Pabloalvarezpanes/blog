import { Component } from '@angular/core';
import { INotices } from './interfaces/inotices.type=interface';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  noticeList: INotices[] = [
    {
      title: 'El Barça recupera el liderato gracias a un gran Dani Olmo en un complicado partido ante Las Palmas',
      image: 'https://imagenes.20minutos.es/files/image_990_556/uploads/imagenes/2025/02/22/dani-olmo.jpeg',
      noticeBody: 'Costó, pero finalmente consiguió la victoria y con ello recuperar el liderato tras la victoria del Atlético de Madrid por 0-3 en Mestalla. El FC Barcelona se ha impuesto por 0-2 a Las Palmas en un complicado partido en el que los cambios de Hansi Flick fueron decisivos para que los blaugranas ganaran el encuentro. ',
      date: new Date('22-02-2025')
    },
    {
      title: 'Verdeliss rompe el récord de España en 100 kilómetros en el Campeonato de Australia',
      image: 'https://imagenes.20minutos.es/files/image_990_556/uploads/imagenes/2025/02/06/trofeo-de-campeona.jpeg',
      noticeBody: 'Estefanía Unzu Ripoll, más conocida como Verdeliss ha conseguido este sábado lo que tanto ansiaba: el récord de España en 100 kilómetros. La atleta e influencer ha batido el récord de España de la distancia al conseguir completar el Campeonato de Australia en 7h47:46. ',
      date: new Date('20-02-2025')
    }
  ]
}
