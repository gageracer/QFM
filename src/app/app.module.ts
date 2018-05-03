import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { HeaderComponent } from './header/header.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { MP_ROUTES } from './mainpage/mainpage.routes';
import { ProfileComponent } from './mainpage/profile/profile.component';
import { MessagesComponent } from './mainpage/messages/messages.component';
import { MaterialsComponent } from './mainpage/materials/materials.component';
import { SurveysComponent } from './mainpage/surveys/surveys.component';
import { StatisticsComponent } from './mainpage/statistics/statistics.component';
import { MymentorComponent } from './mainpage/mymentor/mymentor.component';
import { MymenteesComponent } from './mainpage/mymentees/mymentees.component';
import { MatchesComponent } from './mainpage/matches/matches.component';
import { FaqComponent } from './mainpage/faq/faq.component';
import { MentorsComponent } from './mainpage/mentors/mentors.component';
import { MenteesComponent } from './mainpage/mentees/mentees.component';
import { SettingsComponent } from './mainpage/settings/settings.component';

const appRoutes: Routes = [
  {path: 'welcome',     component: WelcomeComponent},
  {path: 'main-page',   component: HeaderComponent, children: MP_ROUTES},
  {path: '**', component: WelcomeComponent}
];

export const routing = RouterModule.forRoot(appRoutes);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WelcomeComponent,
    MainpageComponent,
    ProfileComponent,
    MessagesComponent,
    MaterialsComponent,
    SurveysComponent,
    StatisticsComponent,
    MymentorComponent,
    MymenteesComponent,
    MatchesComponent,
    FaqComponent,
    MentorsComponent,
    MenteesComponent,
    SettingsComponent
  ],

  imports: [
    BrowserModule,
    routing,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
