import { RouterModule, Routes } from '@angular/router';

import { MainpageComponent } from './mainpage.component';
import { ProfileComponent } from './profile/profile.component';
import { MessagesComponent } from './messages/messages.component';
import { MaterialsComponent } from './materials/materials.component';
import { SurveysComponent } from './surveys/surveys.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { MymentorComponent } from './mymentor/mymentor.component';
import { MymenteesComponent } from './mymentees/mymentees.component';
import { MatchesComponent } from './matches/matches.component';
import { FaqComponent } from './faq/faq.component';
import { MentorsComponent } from './mentors/mentors.component';
import { MenteesComponent } from './mentees/mentees.component';
import { SettingsComponent } from './settings/settings.component';




export const MP_ROUTES: Routes = [
    {path: '', component: MainpageComponent},
    {path: 'profile',     component: ProfileComponent},
    {path: 'messages',    component: MessagesComponent},
    {path: 'materials',   component: MaterialsComponent},
    {path: 'surveys',     component: SurveysComponent},
    {path: 'statistics',  component: StatisticsComponent},
    {path: 'mymentor',    component: MymentorComponent},
    {path: 'mymentees',   component: MymenteesComponent},
    {path: 'matches',     component: MatchesComponent},
    {path: 'faq',         component: FaqComponent},
    {path: 'mentors',     component: MentorsComponent},
    {path: 'mentees',     component: MenteesComponent},
    {path: 'settings',    component: SettingsComponent}
];
