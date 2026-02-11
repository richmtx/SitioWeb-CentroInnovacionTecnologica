import { Component, AfterViewInit, ElementRef, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-proyectos',
  imports: [FooterComponent],
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css'
})
export class ProyectosComponent implements AfterViewInit {

  currentIndex: number = 0;
  totalSlides: number = 3;

  constructor(
    private el: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngAfterViewInit(): void {

    if (isPlatformBrowser(this.platformId)) {

      const elements = this.el.nativeElement.querySelectorAll('.animate-item');

      const observer = new IntersectionObserver((entries) => {

        entries.forEach((entry, index) => {

          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('visible');
            }, index * 150);
          }

        });

      }, { threshold: 0.2 });

      elements.forEach((el: Element) => {
        observer.observe(el);
      });
    }
  }

  nextSlide(): void {
    if (this.currentIndex < this.totalSlides - 1) {
      this.currentIndex++;
    }
  }

  prevSlide(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }
}
