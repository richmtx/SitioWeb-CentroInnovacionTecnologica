import { Component } from '@angular/core';
import { FooterComponent } from "../../components/footer/footer.component";
import { MapaComponent } from "../../components/mapa/mapa.component";

@Component({
  selector: 'app-contacto',
  imports: [FooterComponent, MapaComponent],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {

}
