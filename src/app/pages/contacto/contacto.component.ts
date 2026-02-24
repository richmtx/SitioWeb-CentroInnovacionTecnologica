import { Component, AfterViewInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FooterComponent } from "../../components/footer/footer.component";
import { MapaComponent } from "../../components/mapa/mapa.component";
import { NavbarComponent } from "../../components/navbar/navbar.component";

@Component({
  selector: 'app-contacto',
  imports: [FooterComponent, MapaComponent, NavbarComponent],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent implements AfterViewInit, OnDestroy {

  private observer?: IntersectionObserver;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {

    if (!isPlatformBrowser(this.platformId)) return;
    setTimeout(() => {
      this.initScrollAnimation();
    }, 0);
  }

  private initScrollAnimation(): void {

    const elements = document.querySelectorAll('.scroll-animate');

    elements.forEach(el => {
      el.classList.remove('show');
    });

    if (this.observer) {
      this.observer.disconnect();
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {

          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }

        });
      },
      { threshold: 0.2 }
    );
    elements.forEach(el => this.observer!.observe(el));
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}