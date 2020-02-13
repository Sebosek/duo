import { Component, h } from '@stencil/core';

@Component({
  tag: 'duo-control',
  styleUrl: 'control.css',
  scoped: true
})
export class Control {
  render() {
    return (
      <div class="control">
        <slot></slot>
      </div>
    );
  }
}
