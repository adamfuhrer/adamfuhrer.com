import {Component, OnInit} from '@angular/core';
import {Breadcrumb, NavigationService} from '../../services/navigation.service';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
    constructor(private navigationService: NavigationService) {
    }

    ngOnInit() {
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
