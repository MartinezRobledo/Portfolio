//Modulos
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InViewportModule } from 'ng-in-viewport';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//Componentes
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { SkillsComponent } from './skills/skills.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { FooterComponent } from './footer/footer.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ResumenComponent } from './resumen/resumen.component';
import { ProyectsComponent } from './proyects/proyects.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { DataService } from './services/data.service';
import { ModalComponent } from './shared/modal/modal.component';
import { SafePipe } from './safe.pipe';
import { NgxTypedJsModule } from 'ngx-typed-js';


@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    SkillsComponent,
    AboutMeComponent,
    FooterComponent,
    ContactoComponent,
    ResumenComponent,
    ProyectsComponent,
    HomeComponent,
    HeaderComponent,
    ModalComponent,
    SafePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    InViewportModule,
    FormsModule,
    ReactiveFormsModule,
    NgxTypedJsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
