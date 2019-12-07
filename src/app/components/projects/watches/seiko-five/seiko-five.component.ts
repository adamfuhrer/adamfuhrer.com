import {Component, OnInit} from '@angular/core';
import {Breadcrumb, NavigationService} from '../../../../services/navigation.service';
import {Title} from '@angular/platform-browser';

@Component({
    selector: 'app-seiko-five',
    templateUrl: './seiko-five.component.html',
    styleUrls: [
        './seiko-five.component.scss',
        '../watch.scss'
    ]
})
export class SeikoFiveComponent implements OnInit {
    constructor(private navigationService: NavigationService,
                private titleService: Title) {
    }

    ngOnInit() {
        this.titleService.setTitle('Seiko 5 Sports Accuracy · Adam Fuhrer');

        this.navigationService.emitBreadcrumbItems([
            {
                text: 'HOME',
                routerLink: '/',
                isActive: false
            } as Breadcrumb,
            {
                text: 'WATCH ACCURACY',
                routerLink: '/projects/accuracy-of-mechanical-watches',
                isActive: false
            } as Breadcrumb,
            {
                text: 'SEIKO 5 SPORTS',
                routerLink: 'projects/accuracy-of-mechanical-watches/seiko-5-sports',
                isActive: true
            } as Breadcrumb
        ]);
    }
}
