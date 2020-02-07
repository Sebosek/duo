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
  interface DuoCheckbox {}
  interface DuoControl {}
  interface DuoInput {
    'disabled': boolean;
    'name': string;
    'placeholder': string;
    'type': string;
    'value': string | number;
  }
  interface DuoRadio {}
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

  interface HTMLDuoInputElement extends Components.DuoInput, HTMLStencilElement {}
  var HTMLDuoInputElement: {
    prototype: HTMLDuoInputElement;
    new (): HTMLDuoInputElement;
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
    'duo-input': HTMLDuoInputElement;
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
  interface DuoCheckbox {}
  interface DuoControl {}
  interface DuoInput {
    'disabled'?: boolean;
    'name'?: string;
    'placeholder'?: string;
    'type'?: string;
    'value'?: string | number;
  }
  interface DuoRadio {}
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
    'duo-input': DuoInput;
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
      'duo-input': LocalJSX.DuoInput & JSXBase.HTMLAttributes<HTMLDuoInputElement>;
      'duo-radio': LocalJSX.DuoRadio & JSXBase.HTMLAttributes<HTMLDuoRadioElement>;
      'my-component': LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
    }
  }
}


