import { newE2EPage } from '@stencil/core/testing';

describe('duo-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<duo-input></duo-input>');

    const element = await page.find('duo-input');
    expect(element).toHaveClass('hydrated');
  });
});
