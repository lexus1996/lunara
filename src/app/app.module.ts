import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { HeaderComponent } from './wrapper/header/header.component';
import { FooterComponent } from './wrapper/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ServicesPageComponent } from './services-page/services-page.component';
import { MenuComponent } from './wrapper/header/menu/menu.component';
import { OpenCloseComponent } from './open-close/open-close.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { BrandingComponent } from './services-page/branding/branding.component';
import { DevelopmentComponent } from './services-page/development/development.component';


@NgModule({
  declarations: [
    AppComponent,
    WrapperComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    ServicesPageComponent,
    MenuComponent,
    OpenCloseComponent,
    ComingSoonComponent,
    PortfolioComponent,
    BrandingComponent,
    DevelopmentComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
