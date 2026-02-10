import { Component, AfterViewInit, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { FooterComponent } from "../../components/footer/footer.component";
import { MapaComponent } from "../../components/mapa/mapa.component";

@Component({
  selector: 'app-index',
  imports: [FooterComponent, MapaComponent],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent implements AfterViewInit {

  // Selecciona todos los elementos con la clase .reveal-event
  @ViewChildren('revealEvent') revealEvents!: QueryList<ElementRef<HTMLElement>>;

  private observer!: IntersectionObserver;

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            this.observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2
      }
    );

    // Observamos cada elemento
    this.revealEvents.forEach(event => {
      this.observer.observe(event.nativeElement);
    });
  }
}
