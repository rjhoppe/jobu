import { Browser, Page, chromium } from '@playwright/test';

export async function scrapeSite(
  url: string, 
  config: any, 
  searchTerm: string, 
  location: string
) {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  try {
    await page.goto(url);
    await page.waitForSelector(config.jobContainer);
    
    const jobs = await page.$$eval(config.jobContainer, (elements, selectors) => {
      return elements.map(el => ({
        title: el.querySelector(selectors.title)?.textContent?.trim() || '',
        company: el.querySelector(selectors.company)?.textContent?.trim() || '',
        location: el.querySelector(selectors.location)?.textContent?.trim() || '',
        url: el.querySelector(selectors.url)?.getAttribute('href') || ''
      }));
    }, config);
    
    return jobs;
  } finally {
    await browser.close();
  }
}
