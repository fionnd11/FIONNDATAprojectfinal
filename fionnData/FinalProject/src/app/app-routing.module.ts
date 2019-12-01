import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ReadComponent} from './read/read.component'
import {CreateComponent} from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { HomePageComponent } from 'src/app/home-page/home-page.component';

import { NewsComponent } from './news/news.component';
import { WeatherComponent } from './weather/weather.component';
import { MapsComponent } from './maps/maps.component';
import { from } from 'rxjs';


const routes: Routes = [

 {
    path:'',
    component: HomePageComponent
  },
  {
    path: 'read',
    component: ReadComponent
  },
  {
    path: 'create',
    component: CreateComponent
  },
  {
    path:'edit/:id',
    component: EditComponent
  },
 
  {
  path:'news',
  component: NewsComponent
},
{
  path:'weather',
  component: WeatherComponent
},
{
  path:'search', loadChildren: './components/user/user.module#UserModule'
},
{
  path:'maps',
  component: MapsComponent
},
];

  


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
