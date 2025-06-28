// EXAMPLE

export const siteConfigs = {
  'axon.com': {
    jobContainer: '.job-search-card',
    title: '.job-search-card__title',
    company: '.job-search-card__subtitle',
    location: '.job-search-card__location',
    url: 'a'
  },
  'fusus': {
    jobContainer: '[data-testid="jobsearch-ResultsList"] > div',
    title: 'h2 a',
    company: '[data-testid="company-name"]',
    location: '[data-testid="job-location"]',
    url: 'h2 a'
  },
  'dedrone': {
    jobContainer: '.react-job-listing',
    title: '.jobLink',
    company: '.employerName',
    location: '.location',
    url: '.jobLink'
  }
};
