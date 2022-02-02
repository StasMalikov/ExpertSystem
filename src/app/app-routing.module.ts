import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {MainPageComponent} from "./components/main-page/main-page.component";
import {QuestionsComponent} from "./components/questions/questions.component";
import {ResultPageComponent} from "./components/result-page/result-page.component";

const routes: Routes = [
  {path: '', component: MainPageComponent },
  {path: 'questions', component: QuestionsComponent },
  {path: 'results', component: ResultPageComponent }
];

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
