import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

@Injectable()
export class AppService {
    constructor(public store: Store<any>) {
        this.initStoreData();
    }

    initStoreData() {
        // theme
        const theme = localStorage.getItem('theme') || 'light';
        this.store.dispatch({ type: 'toggleTheme', payload: theme });
    }
}
