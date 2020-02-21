/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface DuoButton {
    'disabled': boolean;
    'label': string;
  }
  interface DuoCaption {}
  interface DuoCheckbox {
    'checked': boolean;
    'disabled': boolean;
    'intermediate': boolean;
    'name': string;
    'tabindex': number;
    'value': string | number;
  }
  interface DuoControl {}
  interface DuoIcon {
    'icon': string;
  }
  interface DuoInput {
    'disabled': boolean;
    'focused': boolean;
    'name': string;
    'placeholder': string;
    'type': string;
    'value': string | number;
  }
  interface DuoPassword {
    'disabled': boolean;
    'focused': boolean;
    'name': string;
    'placeholder': string;
    'readable': boolean;
    'value': string | number;
  }
  interface DuoRadio {
    'checked': boolean;
    'disabled': boolean;
    'name': string;
    'tabindex': number;
    'value': string | number;
  }
  interface MyComponent {
    /**
    * The first name
    */
    'first': string;
    /**
    * The last name
    */
    'last': string;
    /**
    * The middle name
    */
    'middle': string;
  }
}

declare global {


  interface HTMLDuoButtonElement extends Components.DuoButton, HTMLStencilElement {}
  var HTMLDuoButtonElement: {
    prototype: HTMLDuoButtonElement;
    new (): HTMLDuoButtonElement;
  };

  interface HTMLDuoCaptionElement extends Components.DuoCaption, HTMLStencilElement {}
  var HTMLDuoCaptionElement: {
    prototype: HTMLDuoCaptionElement;
    new (): HTMLDuoCaptionElement;
  };

  interface HTMLDuoCheckboxElement extends Components.DuoCheckbox, HTMLStencilElement {}
  var HTMLDuoCheckboxElement: {
    prototype: HTMLDuoCheckboxElement;
    new (): HTMLDuoCheckboxElement;
  };

  interface HTMLDuoControlElement extends Components.DuoControl, HTMLStencilElement {}
  var HTMLDuoControlElement: {
    prototype: HTMLDuoControlElement;
    new (): HTMLDuoControlElement;
  };

  interface HTMLDuoIconElement extends Components.DuoIcon, HTMLStencilElement {}
  var HTMLDuoIconElement: {
    prototype: HTMLDuoIconElement;
    new (): HTMLDuoIconElement;
  };

  interface HTMLDuoInputElement extends Components.DuoInput, HTMLStencilElement {}
  var HTMLDuoInputElement: {
    prototype: HTMLDuoInputElement;
    new (): HTMLDuoInputElement;
  };

  interface HTMLDuoPasswordElement extends Components.DuoPassword, HTMLStencilElement {}
  var HTMLDuoPasswordElement: {
    prototype: HTMLDuoPasswordElement;
    new (): HTMLDuoPasswordElement;
  };

  interface HTMLDuoRadioElement extends Components.DuoRadio, HTMLStencilElement {}
  var HTMLDuoRadioElement: {
    prototype: HTMLDuoRadioElement;
    new (): HTMLDuoRadioElement;
  };

  interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {}
  var HTMLMyComponentElement: {
    prototype: HTMLMyComponentElement;
    new (): HTMLMyComponentElement;
  };
  interface HTMLElementTagNameMap {
    'duo-button': HTMLDuoButtonElement;
    'duo-caption': HTMLDuoCaptionElement;
    'duo-checkbox': HTMLDuoCheckboxElement;
    'duo-control': HTMLDuoControlElement;
    'duo-icon': HTMLDuoIconElement;
    'duo-input': HTMLDuoInputElement;
    'duo-password': HTMLDuoPasswordElement;
    'duo-radio': HTMLDuoRadioElement;
    'my-component': HTMLMyComponentElement;
  }
}

declare namespace LocalJSX {
  interface DuoButton {
    'disabled'?: boolean;
    'label'?: string;
  }
  interface DuoCaption {}
  interface DuoCheckbox {
    'checked'?: boolean;
    'disabled'?: boolean;
    'intermediate'?: boolean;
    'name'?: string;
    'onChanged'?: (event: CustomEvent<string | number | boolean>) => void;
    'tabindex'?: number;
    'value'?: string | number;
  }
  interface DuoControl {}
  interface DuoIcon {
    'icon'?: string;
  }
  interface DuoInput {
    'disabled'?: boolean;
    'focused'?: boolean;
    'name'?: string;
    'placeholder'?: string;
    'type'?: string;
    'value'?: string | number;
  }
  interface DuoPassword {
    'disabled'?: boolean;
    'focused'?: boolean;
    'name'?: string;
    'placeholder'?: string;
    'readable'?: boolean;
    'value'?: string | number;
  }
  interface DuoRadio {
    'checked'?: boolean;
    'disabled'?: boolean;
    'name'?: string;
    'onSelected'?: (event: CustomEvent<void | string | number>) => void;
    'tabindex'?: number;
    'value'?: string | number;
  }
  interface MyComponent {
    /**
    * The first name
    */
    'first'?: string;
    /**
    * The last name
    */
    'last'?: string;
    /**
    * The middle name
    */
    'middle'?: string;
  }

  interface IntrinsicElements {
    'duo-button': DuoButton;
    'duo-caption': DuoCaption;
    'duo-checkbox': DuoCheckbox;
    'duo-control': DuoControl;
    'duo-icon': DuoIcon;
    'duo-input': DuoInput;
    'duo-password': DuoPassword;
    'duo-radio': DuoRadio;
    'my-component': MyComponent;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'duo-button': LocalJSX.DuoButton & JSXBase.HTMLAttributes<HTMLDuoButtonElement>;
      'duo-caption': LocalJSX.DuoCaption & JSXBase.HTMLAttributes<HTMLDuoCaptionElement>;
      'duo-checkbox': LocalJSX.DuoCheckbox & JSXBase.HTMLAttributes<HTMLDuoCheckboxElement>;
      'duo-control': LocalJSX.DuoControl & JSXBase.HTMLAttributes<HTMLDuoControlElement>;
      'duo-icon': LocalJSX.DuoIcon & JSXBase.HTMLAttributes<HTMLDuoIconElement>;
      'duo-input': LocalJSX.DuoInput & JSXBase.HTMLAttributes<HTMLDuoInputElement>;
      'duo-password': LocalJSX.DuoPassword & JSXBase.HTMLAttributes<HTMLDuoPasswordElement>;
      'duo-radio': LocalJSX.DuoRadio & JSXBase.HTMLAttributes<HTMLDuoRadioElement>;
      'my-component': LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
    }
  }
}


