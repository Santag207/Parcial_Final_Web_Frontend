import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyEntityListComponent } from './components/my-entity-list/my-entity-list.component';
import { MyEntityCreateComponent } from './components/my-entity-create/my-entity-create.component';

const routes: Routes = [
  { path: 'entities', component: MyEntityListComponent },
  { path: 'entities/create', component: MyEntityCreateComponent },
  { path: '', redirectTo: '/entities', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
