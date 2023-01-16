import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './header/navbar/navbar.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ErrorComponent } from './pages/error/error.component';
import { HomeComponent } from './pages/home/home.component';
import { MissionComponent } from './pages/mission/mission.component';
import { VissionComponent } from './pages/vission/vission.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"nosotros", component:AboutComponent,
  children:[
    {path:"mision", component:MissionComponent},
    {path:"vision", component:VissionComponent},
  ]},
  {path:"contacto", component:ContactComponent},
  {path:"404", component:ErrorComponent},
  {path:"**", redirectTo:"404", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
