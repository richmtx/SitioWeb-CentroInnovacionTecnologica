import { Component } from '@angular/core';
import { FooterComponent } from "../../components/footer/footer.component";
import { MapaComponent } from "../../components/mapa/mapa.component";

@Component({
  selector: 'app-index',
  imports: [FooterComponent, MapaComponent],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {

}
