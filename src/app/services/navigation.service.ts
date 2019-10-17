import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

export interface Breadcrumb {
    text: string;
    routerLink: string;
    isActive: boolean;
}

@Injectable()
export class NavigationService {
    private BreadcrumbItems: BehaviorSubject<Breadcrumb[]> = new BehaviorSubject<Breadcrumb[]>(null);

    emitBreadcrumbItems(items: Breadcrumb[]) {
        this.BreadcrumbItems.next(items);
    }

    get breadcrumbItems(): Observable<Breadcrumb[]> {
        return this.BreadcrumbItems;
    }
}
