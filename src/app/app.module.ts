import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app.routes';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactComponent } from './components/contact/contact.component';
import { CardComponent } from './components/shared/card/card.component';
import { HeroComponent } from './components/about/hero/hero.component';
import { VisionMissionComponent } from './components/about/vision-mission/vision-mission.component';
import { CoreValuesComponent } from './components/about/core-values/core-values.component';
import { ProjectComponent } from './components/portfolio/project/project.component';
import { CarouselComponent } from './components/portfolio/carousel/carousel.component';
import { ReplacePipe } from './pipes/replace.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    PortfolioComponent,
    ProjectComponent,
    CarouselComponent,
    ContactComponent,
    CardComponent,
    HeroComponent,
    VisionMissionComponent,
    CoreValuesComponent,
    ReplacePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
