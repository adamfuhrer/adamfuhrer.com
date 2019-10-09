import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';
import {ProjectsComponent} from './projects/projects.component';
import {SeikoFiveComponent} from './projects/watches/seiko-five/seiko-five.component';
import {RolexSubmarinerComponent} from './projects/watches/rolex-submariner/rolex-submariner.component';

const routes: Routes = [
    {path: '', component: HomepageComponent},
    {path: 'projects', component: ProjectsComponent},
    {path: 'projects/seiko-5-sports-accuracy', component: SeikoFiveComponent},
    {path: 'projects/rolex-submariner-accuracy', component: RolexSubmarinerComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
