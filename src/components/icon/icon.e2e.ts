import { newE2EPage } from '@stencil/core/testing';

describe('duo-icon', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<duo-icon></duo-icon>');

    const element = await page.find('duo-icon');
    expect(element).toHaveClass('hydrated');
  });
});
