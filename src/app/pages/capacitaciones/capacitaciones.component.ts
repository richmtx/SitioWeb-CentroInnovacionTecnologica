import {
  Component, ViewChild, ViewChildren, ElementRef, AfterViewInit,
  QueryList, Inject, PLATFORM_ID, OnDestroy
} from '@angular/core';

import { isPlatformBrowser } from '@angular/common';
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-capacitaciones',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './capacitaciones.component.html',
  styleUrl: './capacitaciones.component.css'
})
export class CapacitacionesComponent implements AfterViewInit, OnDestroy {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  @ViewChild('certTrack') certTrack!: ElementRef<HTMLDivElement>;
  @ViewChildren('courseCard') courseCards!: QueryList<ElementRef<HTMLElement>>;

  private scrollAmount = 420;
  private observer?: IntersectionObserver;

  private showAllCards(): void {
    this.courseCards.forEach(card => {
      card.nativeElement.classList.add('show');
    });
  }

  ngAfterViewInit(): void {

    if (!isPlatformBrowser(this.platformId)) return;

    if (typeof IntersectionObserver === 'undefined') {
      this.showAllCards();
      return;
    }

    setTimeout(() => { 
      this.initObserver();
    }, 0);
  }

  private initObserver(): void {

    if (!this.courseCards || this.courseCards.length === 0) {
      return;
    }

    if (this.observer) {
      this.observer.disconnect();
    }

    this.observer = new IntersectionObserver(
      (entries, observerInstance) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observerInstance.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25 }
    );

    this.courseCards.forEach(card => {
      this.observer?.observe(card.nativeElement);
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  scrollNext(): void {
    if (!isPlatformBrowser(this.platformId) || !this.certTrack) return;

    this.certTrack.nativeElement.scrollBy({
      left: this.scrollAmount,
      behavior: 'smooth'
    });
  }

  scrollPrev(): void {
    if (!isPlatformBrowser(this.platformId) || !this.certTrack) return;

    this.certTrack.nativeElement.scrollBy({
      left: -this.scrollAmount,
      behavior: 'smooth'
    });
  }
}
