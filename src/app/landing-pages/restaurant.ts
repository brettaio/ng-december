import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
    templateUrl: './restaurant.html'
})
export class RestaurantComponent {
    storeData: any;
    @Input() feedbacks: any = [
        {
            id: 1,
            name: 'Allan Branch',
            role: 'CEO of Lifted',
            thumbnail: '/assets/images/modern-saas/client-1.png',
            message:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
        }
    ];

    constructor(public store: Store<any>) {
        this.initStore();
    }
    async initStore() {
        this.store
            .select((d) => d.index)
            .subscribe((d) => {
                this.storeData = d;
            });
    }
}
