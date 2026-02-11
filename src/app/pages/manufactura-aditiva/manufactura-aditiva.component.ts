import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-manufactura-aditiva',
  imports: [FooterComponent],
  templateUrl: './manufactura-aditiva.component.html',
  styleUrl: './manufactura-aditiva.component.css'
})
export class ManufacturaAditivaComponent implements AfterViewInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngAfterViewInit(): void {

    if (isPlatformBrowser(this.platformId)) {

      const revealElements = document.querySelectorAll('.reveal');

      const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.15
      });

      revealElements.forEach(el => revealObserver.observe(el));

      const printerRows = document.querySelectorAll('.printer-row');

      const printerObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.2
      });

      printerRows.forEach(row => printerObserver.observe(row));
    }
  }
}
