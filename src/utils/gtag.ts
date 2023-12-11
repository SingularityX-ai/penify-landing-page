/* eslint-disable @typescript-eslint/no-explicit-any */
declare global {
  interface Window {
    gtag: any;
  }
}

export const pageView = (url: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", process.env.GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};

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
 * @param value - An array of strings representing user input.
 * @throws Will throw an error if window is not available or if gtag function is not defined.
 * @example
 * trackFormSubmission(['input1', 'input2']);
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
 * @throws {Error} - Throws an error if the window object is not available or if the 'gtag' function is not defined.
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
