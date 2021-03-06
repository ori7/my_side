import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ListRecipeComponent } from './list-recipe/list-recipe.component';
import { UpdateFormComponent } from './update-form/update-form.component';

const routes: Routes = [
  { path:'', component: HomeComponent },
  { path:'home', component: HomeComponent },
  { path:'about', component: AboutComponent },
  { path:'contact', component: ContactComponent },
  { path:'recipes', component: ListRecipeComponent },
  { path:'updateRecipe/:id', component: UpdateFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
