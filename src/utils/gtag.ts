/* eslint-disable @typescript-eslint/no-explicit-any */
declare global {
  interface Window {
    gtag: any;
  }
}

/**
 * Sends a page view event to Google Analytics using the gtag function.
 * @param url The URL of the page being viewed.
 * @throws Will throw an error if the window object is not available or if the gtag function is not defined.
 */
export const pageView = (url: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", process.env.GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};

/**
 * Track scroll event and send data to Google Analytics.
 * @param value - The value of the scroll event.
 * @throws - Throws an error if window is not defined or if gtag function is not available.
 */
export const trackScroll = (value: number) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "scroll", {
      event_category: "scroll depth",
      event_label: "scrolled 50% on homepage",
      value: value,
    });
  }
};

/**
 * Tracks form submission using Google Analytics.
 * 
 * @param value - An array of strings representing the user input.
 * @throws Will throw an error if the 'window' object is not available or if 'window.gtag' is not defined.
 * @example
 * 
 * // Example usage:
 * trackFormSubmission(['user input 1', 'user input 2']);
 */
export const trackFormSubmission = (value: [string]) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "submit", {
      event_category: "Contact Form",
      event_label: "contact us form submission",
      user: value,
    });
  }
};

/**
 * Tracks the start of a video.
 * @param value - A boolean value indicating whether to track the video start.
 * @throws Will throw an error if the 'window' object is not available or if the 'gtag' function is not defined on the 'window' object.
 * @example
 * trackVideoStart(true);
 */
export const trackVideoStart = (value: boolean) => {
  if (typeof window !== "undefined" && window.gtag && value) {
    window.gtag("event", "video-view", {
      event_category: "Video",
      event_label: "Snorkell.ai video tuts",
    });
  }
};
