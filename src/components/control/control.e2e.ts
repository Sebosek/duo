import { newE2EPage } from '@stencil/core/testing';

describe('duo-control', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<duo-control></duo-control>');

    const element = await page.find('duo-control');
    expect(element).toHaveClass('hydrated');
  });
});
