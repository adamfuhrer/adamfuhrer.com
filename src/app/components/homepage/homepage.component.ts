import {Component, OnInit} from '@angular/core';
import {NavigationService} from '../../services/navigation.service';

@Component({
    selector: 'app-homepage',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
    constructor(private navigationService: NavigationService) {
    }

    ngOnInit() {
        // Don't show breadcrumbs on homepage
        this.navigationService.emitBreadcrumbItems([]);
    }
}
