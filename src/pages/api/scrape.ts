import type { APIRoute } from 'astro';
import { scrapeSite } from '../../lib/generic-scraper';
import { siteConfigs } from '../../lib/scraper-configs';

export const POST: APIRoute = async ({ request }) => {
  const { searchTerm, location, sites = ['linkedin.com', 'indeed.com'] } = await request.json();
  
  const allJobs = [];
  
  for (const site of sites) {
    const config = siteConfigs[site];
    if (config) {
      const jobs = await scrapeSite(site, config, searchTerm, location);
      allJobs.push(...jobs);
    }
  }
  
  return new Response(JSON.stringify({ jobs: allJobs }));
}; 