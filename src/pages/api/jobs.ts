import type { APIRoute } from 'astro';
import type { Job } from '../../types/Job';

// In-memory storage (replace with database later)
let jobs: Job[] = [];

export const GET: APIRoute = async () => {
  try {
    return new Response(JSON.stringify(jobs), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to fetch jobs' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}; 