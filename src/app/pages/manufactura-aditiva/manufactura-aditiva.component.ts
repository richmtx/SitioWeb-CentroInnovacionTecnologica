import { Component, AfterViewInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-manufactura-aditiva',
  imports: [FooterComponent],
  templateUrl: './manufactura-aditiva.component.html',
  styleUrl: './manufactura-aditiva.component.css'
})
export class ManufacturaAditivaComponent 
implements AfterViewInit, OnDestroy {

  private revealObserver?: IntersectionObserver;
  private printerObserver?: IntersectionObserver;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {

    if (!isPlatformBrowser(this.platformId)) return;

    const revealElements = document.querySelectorAll('.reveal');

    this.revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    revealElements.forEach(el => 
      this.revealObserver?.observe(el)
    );

    const printerRows = document.querySelectorAll('.printer-row');

    this.printerObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    printerRows.forEach(row => 
      this.printerObserver?.observe(row)
    );
  }

  ngOnDestroy(): void {
    this.revealObserver?.disconnect();
    this.printerObserver?.disconnect();
  }
}