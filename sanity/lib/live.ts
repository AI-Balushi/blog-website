// src/sanity/lib/live.ts
import { client } from './client';  // Import the Sanity client

// Define the function to fetch posts or other data from Sanity
export const fetchPosts = async () => {
  const query = `*[_type == "post"]`;  // Sanity query for fetching posts
  try {
    const posts = await client.fetch(query);  // Fetch data from Sanity
    return posts;
  } catch (error) {
    console.error("Error fetching posts from Sanity:", error);
    return [];  // Return an empty array in case of error
  }
};
