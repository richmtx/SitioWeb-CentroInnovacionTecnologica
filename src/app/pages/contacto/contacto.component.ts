import { Component } from '@angular/core';
import { FooterComponent } from "../../components/footer/footer.component";
import { MapaComponent } from "../../components/mapa/mapa.component";
import { NavbarComponent } from "../../components/navbar/navbar.component";

@Component({
  selector: 'app-contacto',
  imports: [FooterComponent, MapaComponent, NavbarComponent],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {

}
