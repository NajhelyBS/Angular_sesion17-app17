import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { MissionComponent } from './mission/mission.component';
import { VissionComponent } from './vission/vission.component';
import { ErrorComponent } from './error/error.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    HomeComponent,
    ContactComponent,
    AboutComponent,
    MissionComponent,
    VissionComponent,
    ErrorComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
   RouterModule,
  ],
  exports: [
    HomeComponent,
    ContactComponent,
    AboutComponent,
    MissionComponent,
    VissionComponent,
    ErrorComponent,
    FooterComponent,
  ]
})
export class PagesModule { }
