declare global {
    interface HTMLElement {
        __prlxRequestAnimationFrameId?: number;
    }
}
export type PrlxOptions = {
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
export type PrlxSettings = {
    isParallaxOnMobile: boolean;
    background: boolean;
    startParallaxFromBottom: boolean;
    justAddParallaxValue: boolean;
    reverse: boolean;
    speed: number;
    preserveInitialPosition: boolean;
    direction: 'x' | 'y';
    limit: {
        min: number;
        max: number;
    } | null;
    mobileMaxWidth: number;
    isDisabled: boolean;
};
