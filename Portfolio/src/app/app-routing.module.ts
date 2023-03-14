import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactoComponent } from './contacto/contacto.component';
import { HomeComponent } from './home/home.component';
import { ProyectsComponent } from './proyects/proyects.component';
import { ResumenComponent } from './resumen/resumen.component';
import { SkillsComponent } from './skills/skills.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const routes:Routes = [
  {path:'', component:HomeComponent, pathMatch: 'full'},
  {path:'about', component:AboutMeComponent, ...canActivate(()=> redirectUnauthorizedTo(['/']))},
  {path:'skills', component:SkillsComponent, ...canActivate(()=> redirectUnauthorizedTo(['/']))},
  {path:'resumen', component:ResumenComponent, ...canActivate(()=> redirectUnauthorizedTo(['/']))},
  {path:'proyects', component:ProyectsComponent, ...canActivate(()=> redirectUnauthorizedTo(['/']))},
  {path:'contacto', component:ContactoComponent, ...canActivate(()=> redirectUnauthorizedTo(['/']))},
  {path:'**', component:HomeComponent, ...canActivate(()=> redirectUnauthorizedTo(['/']))}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

