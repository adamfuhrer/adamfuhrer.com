import {Directive, ElementRef, Input, OnChanges, SimpleChanges} from '@angular/core';
import {animate, AnimationBuilder, style} from '@angular/animations';

// Directive to fade an element in gracefully
@Directive({
    selector: '[fadeIn]'
})
export class FadeInDirective  implements OnChanges {
    @Input('fadeIn') fadeIn: boolean;
    @Input() fadeDuration = '600ms';
    fadeAnimation: any;
    player: any;

    constructor(private builder: AnimationBuilder,
                private el: ElementRef) {
        this.fadeAnimation = this.builder.build([
            style({opacity: 0}),
            animate(this.fadeDuration + ' cubic-bezier(0.215, 0.61, 0.355, 1)', style({opacity: 1}))
        ]);

        this.player = this.fadeAnimation.create(this.el.nativeElement);
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes['fadeIn']) {
            this.player.play();
        }
    }
}
