import { Component, Input } from '@angular/core';

@Component({
    selector: 'counter',
    templateUrl: './counter.html'
})
export class CounterComponent {
    @Input() showTitle: boolean = true;
    constructor() {}
}
