import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { BannerComponent } from './banner/banner.component';
import { ContactoComponent } from './contacto/contacto.component';
import { HomeComponent } from './home/home.component';
import { ProyectsComponent } from './proyects/proyects.component';
import { ResumenComponent } from './resumen/resumen.component';
import { SkillsComponent } from './skills/skills.component';

const routes:Routes = [
  {path:'', component:HomeComponent, pathMatch: 'full'},
  {path:'banner', component:BannerComponent},
  {path:'about', component:AboutMeComponent},
  {path:'skills', component:SkillsComponent},
  {path:'resumen', component:ResumenComponent},
  {path:'proyects', component:ProyectsComponent},
  {path:'contacto', component:ContactoComponent},
  {path:'**', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
