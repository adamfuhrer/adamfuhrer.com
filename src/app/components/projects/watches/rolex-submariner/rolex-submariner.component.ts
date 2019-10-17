import {Component, OnInit} from '@angular/core';
import {Breadcrumb, NavigationService} from '../../../../services/navigation.service';

@Component({
    selector: 'app-rolex-submariner',
    templateUrl: './rolex-submariner.component.html',
    styleUrls: [
        './rolex-submariner.component.scss',
        '../watch.scss'
    ]
})
export class RolexSubmarinerComponent implements OnInit {
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
                isActive: false
            } as Breadcrumb,
            {
                text: 'WATCH ACCURACY',
                routerLink: '/projects/accuracy-of-mechanical-watches',
                isActive: false
            } as Breadcrumb,
            {
                text: 'ROLEX SUBMARINER',
                routerLink: 'projects/accuracy-of-mechanical-watches/rolex-submariner',
                isActive: true
            } as Breadcrumb
        ]);
    }
}
