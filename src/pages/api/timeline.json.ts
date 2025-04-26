import type { APIRoute } from 'astro';
import { getTimelineData } from '../../utils/resume-parser';

export const GET: APIRoute = ({ request }) => {
  const url = new URL(request.url);
  const lang = url.searchParams.get('lang') || 'en';
  
  const timelineData = getTimelineData(lang);
  
  return new Response(
    JSON.stringify(timelineData),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    }
  );
};
