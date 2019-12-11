import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-color-swatch-large',
    templateUrl: './color-swatch-large.component.html',
    styleUrls: ['./color-swatch-large.component.scss']
})
export class ColorSwatchLargeComponent implements OnInit {
    @Input() name: string;
    @Input() pantone: string;
    @Input() hex: string;
    @Input() year: string;
    @Input() link: string;
    @Input() imageSources: Array<string>;

    ngOnInit() {
    }
}
