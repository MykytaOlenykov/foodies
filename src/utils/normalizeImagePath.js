import { BACKEND_URL } from "../constants/common";

/**
 * Normalize image path for use in <img> or background styles.
 * @param {string} path - The image path (can be full URL or relative).
 * @returns {string} - Fully qualified image URL.
 */
export const normalizeImagePath = (path) => {
  if (!path) return "";

  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  const separator = (BACKEND_URL || "").endsWith("/") ? "" : "/";

  return `${BACKEND_URL}${separator}static${path.replace(/\\/g, "/")}`;
};
