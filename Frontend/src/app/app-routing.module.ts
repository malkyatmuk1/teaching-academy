import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./core/ui/home/home.component";
import {NotFoundComponent} from "./core/ui/not-found/not-found.component";
import {LoginComponent} from "./core/authentication/login/login.component";
import {SignupComponent} from "./core/authentication/signup/signup.component";
import {ServicesComponent} from "./pages/services/services.component";
import {LearningMaterialsComponent} from "./pages/learning-materials/learning-materials.component";
import {OnlineLearningComponent} from "./pages/online-learning/online-learning.component";
import {AboutUsComponent} from "./pages/about-us/about-us.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { title: 'Експонента' },
  },
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Експонента' },
  },
  {
    path: 'services',
    component: ServicesComponent,
    data: { title: 'Услуги' },
  },
  {
    path: 'learning-materials',
    component: LearningMaterialsComponent,
    data: { title: 'Учебни материали' },
  },
  {
    path: 'online-learning',
    component: OnlineLearningComponent,
    data: { title: 'Онлайн обучение' },
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
    data: { title: 'За нас' },
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Вход' },
  },
  {
    path: 'register',
    component: SignupComponent,
    data: { title: 'Регистрация' },
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
    data: { title: 'Страницата не бе намерена' },
  },
  {
    path: '**',
    redirectTo: '/not-found',
    data: { title: 'Страницата не бе намерена' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
