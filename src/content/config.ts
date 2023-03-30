import { defineCollection } from 'astro:content';
const entriesCollection = defineCollection({});
export const collections = {
  'entries': entriesCollection,
};
