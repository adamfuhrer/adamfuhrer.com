import {Component, OnInit} from '@angular/core';
import {Breadcrumb, NavigationService} from '../../../services/navigation.service';
import {Title} from '@angular/platform-browser';

@Component({
    selector: 'app-the-curated-feed',
    templateUrl: './the-curated-feed.component.html',
    styleUrls: ['./the-curated-feed.component.scss']
})
export class TheCuratedFeedComponent implements OnInit {
    constructor(private navigationService: NavigationService,
                private titleService: Title) {
    }

    ngOnInit() {
        this.titleService.setTitle('The Curated Feed · Adam Fuhrer');

        this.navigationService.emitBreadcrumbItems([
            {
                text: 'HOME',
                routerLink: '/',
                isActive: false
            } as Breadcrumb,
            {
                text: 'THE CURATED FEED',
                routerLink: '/projects/the-curated-feed',
                isActive: true
            } as Breadcrumb
        ]);
    }

}
