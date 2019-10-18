import {Component, OnInit} from '@angular/core';
import {Breadcrumb, NavigationService} from '../../services/navigation.service';
import {Title} from '@angular/platform-browser';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
    constructor(private navigationService: NavigationService,
                private titleService: Title) {
    }

    ngOnInit() {
        this.titleService.setTitle('Adam Fuhrer · Projects');

        this.navigationService.emitBreadcrumbItems([
            {
                text: 'HOME',
                routerLink: '/',
                isActive: false
            } as Breadcrumb,
            {
                text: 'PROJECTS',
                routerLink: '/projects',
                isActive: true
            } as Breadcrumb
        ]);
    }
}
