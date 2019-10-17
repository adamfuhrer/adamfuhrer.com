import {Component, OnInit} from '@angular/core';
import {Breadcrumb, NavigationService} from '../../../../services/navigation.service';

@Component({
    selector: 'app-mechanical-watches-accuracy',
    templateUrl: './mechanical-watches-accuracy.component.html',
    styleUrls: ['./mechanical-watches-accuracy.component.scss']
})
export class MechanicalWatchesAccuracyComponent implements OnInit {
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
                isActive: true
            } as Breadcrumb
        ]);
    }
}
