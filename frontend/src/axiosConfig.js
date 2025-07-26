import axios from "axios"

// Define URLs for frontend & backend of the application
export const BASE_URL = "https://resumeaibuilder-g0bx.onrender.com";
export const FRONTEND_URL = "https://resume-ai-builder-woad.vercel.app";

// Create an Axios instance pre-configured with base settings
const clientServer = axios.create({
  baseURL: BASE_URL,  // Use the backend API base URL
  headers: {
    "Content-Type": "application/json",  // Default content type for requests
  },
});

// Export the Axios instance for use across the application
export default clientServer;