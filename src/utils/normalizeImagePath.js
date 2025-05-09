const baseApiURL = import.meta.env.VITE_API_BASE_URL;

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

  return `${baseApiURL}/static${path.replace(/\\/g, "/")}`;
};
