import { newE2EPage } from '@stencil/core/testing';

describe('duo-caption', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<duo-caption></duo-caption>');

    const element = await page.find('duo-caption');
    expect(element).toHaveClass('hydrated');
  });
});
