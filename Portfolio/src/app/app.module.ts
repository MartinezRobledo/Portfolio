//Modulos
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InViewportModule } from 'ng-in-viewport';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { HttpClientModule } from '@angular/common/http';
import {ClipboardModule} from '@angular/cdk/clipboard';

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
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { LoaderBarrasComponent } from './shared/loaders/loader-barras/loader-barras.component';


export function parameterProviderFactory(provider: DataService) {
  return () => provider.getDatos();
}

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
    LoaderBarrasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    InViewportModule,
    FormsModule,
    ReactiveFormsModule,
    NgxTypedJsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    ClipboardModule
  ],
  providers: [{
        provide: APP_INITIALIZER,
        useFactory: parameterProviderFactory,
        deps: [DataService],
        multi: true
      }],
  bootstrap: [AppComponent]
})
export class AppModule {}
