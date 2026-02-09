import { Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { QuienesSomosComponent } from './pages/quienes-somos/quienes-somos.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { CapacitacionesComponent } from './pages/capacitaciones/capacitaciones.component';
import { InstalacionesComponent } from './pages/instalaciones/instalaciones.component';
import { ManufacturaAditivaComponent } from './pages/manufactura-aditiva/manufactura-aditiva.component';
import { TecnologiasComponent } from './pages/tecnologias/tecnologias.component';            
import { ProyectosComponent } from './pages/proyectos/proyectos.component';      

export const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'quienes-somos', component: QuienesSomosComponent },
  { path: 'servicios', component: ServiciosComponent }, 
  { path: 'capacitaciones', component: CapacitacionesComponent }, 
  { path: 'instalaciones', component: InstalacionesComponent },
  { path: 'manufactura-aditiva', component: ManufacturaAditivaComponent },
  { path: 'tecnologias', component: TecnologiasComponent },
  { path: 'proyectos', component: ProyectosComponent },
];