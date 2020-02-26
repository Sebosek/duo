/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  State,
} from './components/validators/state';
import {
  AsyncValidatorEvent,
} from './components/validators/asyncValidatorEvent';

export namespace Components {
  interface DuoAsync {
    'state': State;
    'validate': (value: string | number | string[]) => Promise<void>;
  }
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
  interface DuoRegexp {
    'flags': string;
    'pattern': string;
    'state': State;
    'validate': (value: string | number | string[]) => Promise<void>;
  }
  interface DuoRequired {
    'state': State;
    'validate': (value: string | number | string[]) => Promise<void>;
  }
  interface DuoTimer {
    'desired': State;
    'state': State;
    'validate': () => Promise<void>;
  }
  interface DuoValidationMessage {
    'type': 'error' | 'success' | 'info';
  }
  interface DuoValidator {}
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


  interface HTMLDuoAsyncElement extends Components.DuoAsync, HTMLStencilElement {}
  var HTMLDuoAsyncElement: {
    prototype: HTMLDuoAsyncElement;
    new (): HTMLDuoAsyncElement;
  };

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

  interface HTMLDuoRegexpElement extends Components.DuoRegexp, HTMLStencilElement {}
  var HTMLDuoRegexpElement: {
    prototype: HTMLDuoRegexpElement;
    new (): HTMLDuoRegexpElement;
  };

  interface HTMLDuoRequiredElement extends Components.DuoRequired, HTMLStencilElement {}
  var HTMLDuoRequiredElement: {
    prototype: HTMLDuoRequiredElement;
    new (): HTMLDuoRequiredElement;
  };

  interface HTMLDuoTimerElement extends Components.DuoTimer, HTMLStencilElement {}
  var HTMLDuoTimerElement: {
    prototype: HTMLDuoTimerElement;
    new (): HTMLDuoTimerElement;
  };

  interface HTMLDuoValidationMessageElement extends Components.DuoValidationMessage, HTMLStencilElement {}
  var HTMLDuoValidationMessageElement: {
    prototype: HTMLDuoValidationMessageElement;
    new (): HTMLDuoValidationMessageElement;
  };

  interface HTMLDuoValidatorElement extends Components.DuoValidator, HTMLStencilElement {}
  var HTMLDuoValidatorElement: {
    prototype: HTMLDuoValidatorElement;
    new (): HTMLDuoValidatorElement;
  };

  interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {}
  var HTMLMyComponentElement: {
    prototype: HTMLMyComponentElement;
    new (): HTMLMyComponentElement;
  };
  interface HTMLElementTagNameMap {
    'duo-async': HTMLDuoAsyncElement;
    'duo-button': HTMLDuoButtonElement;
    'duo-caption': HTMLDuoCaptionElement;
    'duo-checkbox': HTMLDuoCheckboxElement;
    'duo-control': HTMLDuoControlElement;
    'duo-icon': HTMLDuoIconElement;
    'duo-input': HTMLDuoInputElement;
    'duo-password': HTMLDuoPasswordElement;
    'duo-radio': HTMLDuoRadioElement;
    'duo-regexp': HTMLDuoRegexpElement;
    'duo-required': HTMLDuoRequiredElement;
    'duo-timer': HTMLDuoTimerElement;
    'duo-validation-message': HTMLDuoValidationMessageElement;
    'duo-validator': HTMLDuoValidatorElement;
    'my-component': HTMLMyComponentElement;
  }
}

declare namespace LocalJSX {
  interface DuoAsync {
    'onRun-validation'?: (event: CustomEvent<AsyncValidatorEvent>) => void;
    'state'?: State;
  }
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
  interface DuoRegexp {
    'flags'?: string;
    'pattern'?: string;
    'state'?: State;
  }
  interface DuoRequired {
    'state'?: State;
  }
  interface DuoTimer {
    'desired'?: State;
    'state'?: State;
  }
  interface DuoValidationMessage {
    'type'?: 'error' | 'success' | 'info';
  }
  interface DuoValidator {}
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
    'duo-async': DuoAsync;
    'duo-button': DuoButton;
    'duo-caption': DuoCaption;
    'duo-checkbox': DuoCheckbox;
    'duo-control': DuoControl;
    'duo-icon': DuoIcon;
    'duo-input': DuoInput;
    'duo-password': DuoPassword;
    'duo-radio': DuoRadio;
    'duo-regexp': DuoRegexp;
    'duo-required': DuoRequired;
    'duo-timer': DuoTimer;
    'duo-validation-message': DuoValidationMessage;
    'duo-validator': DuoValidator;
    'my-component': MyComponent;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'duo-async': LocalJSX.DuoAsync & JSXBase.HTMLAttributes<HTMLDuoAsyncElement>;
      'duo-button': LocalJSX.DuoButton & JSXBase.HTMLAttributes<HTMLDuoButtonElement>;
      'duo-caption': LocalJSX.DuoCaption & JSXBase.HTMLAttributes<HTMLDuoCaptionElement>;
      'duo-checkbox': LocalJSX.DuoCheckbox & JSXBase.HTMLAttributes<HTMLDuoCheckboxElement>;
      'duo-control': LocalJSX.DuoControl & JSXBase.HTMLAttributes<HTMLDuoControlElement>;
      'duo-icon': LocalJSX.DuoIcon & JSXBase.HTMLAttributes<HTMLDuoIconElement>;
      'duo-input': LocalJSX.DuoInput & JSXBase.HTMLAttributes<HTMLDuoInputElement>;
      'duo-password': LocalJSX.DuoPassword & JSXBase.HTMLAttributes<HTMLDuoPasswordElement>;
      'duo-radio': LocalJSX.DuoRadio & JSXBase.HTMLAttributes<HTMLDuoRadioElement>;
      'duo-regexp': LocalJSX.DuoRegexp & JSXBase.HTMLAttributes<HTMLDuoRegexpElement>;
      'duo-required': LocalJSX.DuoRequired & JSXBase.HTMLAttributes<HTMLDuoRequiredElement>;
      'duo-timer': LocalJSX.DuoTimer & JSXBase.HTMLAttributes<HTMLDuoTimerElement>;
      'duo-validation-message': LocalJSX.DuoValidationMessage & JSXBase.HTMLAttributes<HTMLDuoValidationMessageElement>;
      'duo-validator': LocalJSX.DuoValidator & JSXBase.HTMLAttributes<HTMLDuoValidatorElement>;
      'my-component': LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
    }
  }
}


