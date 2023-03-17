import type { DirectiveBinding } from 'vue';
import type { PrlxOptions } from './types';
declare const directive: {
    beforeMount: typeof onBind;
    updated: typeof onBind;
    unmounted: typeof onUnbind;
};
export default directive;
declare function onUnbind(el: HTMLElement): void;
declare function onBind(el: HTMLElement, { modifiers, value }: DirectiveBinding<PrlxOptions>): void;
