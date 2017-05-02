import { ContactComponent } from './contact/contact.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NosotrosComponent } from 'app/nosotros/nosotros.component';
import { InicioComponent } from 'app/inicio/inicio.component';
import { MenuComponent } from './menu/menu.component';



const routes: Routes = [
  {
    path: '',
    component: InicioComponent
  },
  {
    path: 'nosotros',
    component: NosotrosComponent
  },
  {
    path: 'menu',
    component: MenuComponent
  },
  {
    path: 'contacto',
    component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
