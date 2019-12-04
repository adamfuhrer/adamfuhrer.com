import {Component} from '@angular/core';
import {Breadcrumb, NavigationService} from '../../services/navigation.service';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
    breadcrumbs: Breadcrumb[];

    constructor(private navigationService: NavigationService) {
        this.navigationService.breadcrumbItems.subscribe(items => {
            this.breadcrumbs = items;
        });
    }
}
