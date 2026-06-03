import { LINKEDIN_RECOMMENDATIONS_URL } from './site';

export type Testimonial = {
  body: string;
  name: string;
  role: string;
  image: string;
};

export const testimonials: Testimonial[] = [
  {
    body: '"Trevor is exceptionally talented and uncommonly motivated. He has a great eye for design, cares about doing things right, and is great at communicating complex ideas with all levels of stakeholders. He understands the full stack and is able to define the needs of the UI developers to the backend developers in a way that moves projects along quickly and gets things done right the first time."',
    name: 'Rex Petersen',
    role: 'DIR. APPLICATION ENGINEERING · WESTERRA CREDIT UNION',
    image: '/rex.jpg',
  },
  {
    body: '"Trevor approaches complex issues with a clear, analytical mindset, and consistently comes up with effective solutions. His attention to detail is unmatched — an exceptional ability to identify edge cases and address issues that others might overlook. He is an excellent communicator who can easily explain technical concepts to non-technical stakeholders, and was able to take more junior engineers and mentor them to grow their own skillset."',
    name: "Keith O'Connel",
    role: 'PRACTICE LEAD, DEVOPS & CLOUD · XTIVIA',
    image: '/keith.jpg',
  },
];

export const RECOMMENDATIONS_TOTAL = 25;
export const RECOMMENDATIONS_MORE = 23;
export const recommendationsUrl = LINKEDIN_RECOMMENDATIONS_URL;

