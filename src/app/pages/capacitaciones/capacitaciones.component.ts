import { 
  Component, 
  ViewChild, 
  ViewChildren,
  ElementRef, 
  AfterViewInit, 
  QueryList 
} from '@angular/core';
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-capacitaciones',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './capacitaciones.component.html',
  styleUrl: './capacitaciones.component.css'
})
export class CapacitacionesComponent implements AfterViewInit {

  // ===== Carrusel =====
  @ViewChild('certTrack') certTrack!: ElementRef<HTMLDivElement>;
  private scrollAmount: number = 420;

  // ===== Intersection Observer =====
  @ViewChildren('courseCard') courseCards!: QueryList<ElementRef<HTMLElement>>;

  ngAfterViewInit(): void {

    const observer = new IntersectionObserver(
      (entries, observerInstance) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observerInstance.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.25
      }
    );

    // Observamos todas las cards
    this.courseCards.forEach(card => {
      observer.observe(card.nativeElement);
    });
  }

  // ===== Funciones Carrusel =====
  scrollNext(): void {
    this.certTrack.nativeElement.scrollBy({
      left: this.scrollAmount,
      behavior: 'smooth'
    });
  }

  scrollPrev(): void {
    this.certTrack.nativeElement.scrollBy({
      left: -this.scrollAmount,
      behavior: 'smooth'
    });
  }
}
