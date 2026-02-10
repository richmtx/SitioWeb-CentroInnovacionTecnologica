import { Component, AfterViewInit, ElementRef, QueryList, ViewChildren, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FooterComponent } from "../../components/footer/footer.component";
import { MapaComponent } from "../../components/mapa/mapa.component";

@Component({
  selector: 'app-index',
  imports: [FooterComponent, MapaComponent],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent implements AfterViewInit {

  @ViewChildren('revealEvent') revealEvents!: QueryList<ElementRef<HTMLElement>>;

  private observer!: IntersectionObserver;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngAfterViewInit(): void {

    if (!isPlatformBrowser(this.platformId)) {
      this.revealEvents.forEach(event => {
        event.nativeElement.classList.add('active');
      });
      return;
    }

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

    this.revealEvents.forEach(event => {
      this.observer.observe(event.nativeElement);
    });
  }
}