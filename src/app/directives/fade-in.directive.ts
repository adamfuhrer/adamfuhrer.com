import {Directive, ElementRef} from '@angular/core';
import {animate, AnimationBuilder, style} from '@angular/animations';

// Directive to fade an element in gracefully
@Directive({
    selector: '[fadeIn]'
})
export class FadeInDirective {
    constructor(private builder: AnimationBuilder,
                private el: ElementRef) {
        const fadeAnimation = this.builder.build([
            style({opacity: 0}),
            animate('600ms cubic-bezier(0.215, 0.61, 0.355, 1)', style({opacity: 1}))
        ]);

        const player = fadeAnimation.create(this.el.nativeElement);
        player.play();
    }
}
