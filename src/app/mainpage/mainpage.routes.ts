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
import { FmenteesComponent} from './fmentees/fmentees.component';
import { ManagerComponent } from './manager/manager.component';
import { HeaderComponent } from '../header/header.component';

export const MAN_ROUTES: Routes = [
    {path: '', component: ManagerComponent},
    {path: 'profile',     component: ProfileComponent},
    {path: 'messages',    component: MessagesComponent},
    {path: 'materials',   component: MaterialsComponent},
    {path: 'surveys',     component: SurveysComponent},
    {path: 'statistics',  component: StatisticsComponent},
    {path: 'matches',     component: MatchesComponent},
    {path: 'faq',         component: FaqComponent},
    {path: 'mentors',     component: MentorsComponent},
    {path: 'mentees',     component: MenteesComponent},
];

export const ALUMNI_ROUTES: Routes = [
    {path: '', component: ManagerComponent},
    {path: 'profile',     component: ProfileComponent},
    {path: 'messages',    component: MessagesComponent},
    {path: 'materials',   component: MaterialsComponent},
    {path: 'surveys',     component: SurveysComponent},
    {path: 'mymentees',   component: MymenteesComponent},
    {path: 'faq',         component: FaqComponent}
];
export const SMENTOR_ROUTES: Routes = [
    {path: '', component: ManagerComponent},
    {path: 'profile',     component: ProfileComponent},
    {path: 'messages',    component: MessagesComponent},
    {path: 'materials',   component: MaterialsComponent},
    {path: 'surveys',     component: SurveysComponent},
    {path: 'fmentees',    component: FmenteesComponent},
    {path: 'faq',         component: FaqComponent}
];
export const SMENTEE_ROUTES: Routes = [
    {path: '', component: ManagerComponent},
    {path: 'profile',     component: ProfileComponent},
    {path: 'messages',    component: MessagesComponent},
    {path: 'materials',   component: MaterialsComponent},
    {path: 'surveys',     component: SurveysComponent},
    {path: 'mymentor',    component: MymentorComponent},
    {path: 'faq',         component: FaqComponent}
];
export const SMENTOREE_ROUTES: Routes = [
    {path: '', component: ManagerComponent},
    {path: 'profile',     component: ProfileComponent},
    {path: 'messages',    component: MessagesComponent},
    {path: 'materials',   component: MaterialsComponent},
    {path: 'surveys',     component: SurveysComponent},
    {path: 'mymentor',    component: MymentorComponent},
    {path: 'fmentees',    component: FmenteesComponent},
    {path: 'faq',         component: FaqComponent}
];



