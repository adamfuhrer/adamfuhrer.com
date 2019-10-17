import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomepageComponent} from './components/homepage/homepage.component';
import {ProjectsComponent} from './components/projects/projects.component';
import {SeikoFiveComponent} from './components/projects/watches/seiko-five/seiko-five.component';
import {RolexSubmarinerComponent} from './components/projects/watches/rolex-submariner/rolex-submariner.component';
import {MechanicalWatchesAccuracyComponent} from './components/projects/watches/mechanical-watches-accuracy/mechanical-watches-accuracy.component';

const routes: Routes = [
    {path: '', component: HomepageComponent},
    {path: 'projects', component: ProjectsComponent},
    {path: 'projects/accuracy-of-mechanical-watches', component: MechanicalWatchesAccuracyComponent},
    {path: 'projects/accuracy-of-mechanical-watches/seiko-5-sports', component: SeikoFiveComponent},
    {path: 'projects/accuracy-of-mechanical-watches/rolex-submariner', component: RolexSubmarinerComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
