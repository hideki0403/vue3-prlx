import { DirectiveBinding, App } from 'vue';

declare global {
    interface HTMLElement {
        __prlxRequestAnimationFrameId?: number;
    }
}
type PrlxOptions = {
    fromBottom?: boolean;
    custom?: boolean;
    reverse?: boolean;
    speed?: number;
    preserveInitialPosition?: boolean;
    direction?: 'x' | 'y';
    limit?: {
        min: number;
        max: number;
    };
    mobileMaxWidth?: number;
    disabled?: boolean;
};

declare const directive: {
    beforeMount: typeof onBind;
    updated: typeof onBind;
    unmounted: typeof onUnbind;
};

declare function onUnbind(el: HTMLElement): void;
declare function onBind(el: HTMLElement, { modifiers, value }: DirectiveBinding<PrlxOptions>): void;

declare const plugin: {
    install: (app: App<Element>) => void;
};

export { plugin as VuePrlx, directive as VuePrlxDirective, PrlxOptions as VuePrlxOptions, plugin as default };
