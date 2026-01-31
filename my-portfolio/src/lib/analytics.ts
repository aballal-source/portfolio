// Analytics utility - ready for integration with your preferred analytics service
// Examples: Google Analytics, Plausible, Vercel Analytics, etc.

export const trackEvent = (
  eventName: string,
  properties?: Record<string, any>
) => {
  if (typeof window !== "undefined") {
    // Example: Google Analytics 4
    // if (window.gtag) {
    //   window.gtag("event", eventName, properties);
    // }

    // Example: Plausible
    // if (window.plausible) {
    //   window.plausible(eventName, { props: properties });
    // }

    // Example: Custom analytics
    console.log("Event tracked:", eventName, properties);
  }
};

export const trackPageView = (url: string) => {
  if (typeof window !== "undefined") {
    // Example: Google Analytics 4
    // if (window.gtag) {
    //   window.gtag("config", "GA_MEASUREMENT_ID", {
    //     page_path: url,
    //   });
    // }

    console.log("Page view tracked:", url);
  }
};

// Performance monitoring
export const measurePerformance = () => {
  if (typeof window !== "undefined" && "performance" in window) {
    const navigation = performance.getEntriesByType(
      "navigation"
    )[0] as PerformanceNavigationTiming;

    if (navigation) {
      const metrics = {
        dns: navigation.domainLookupEnd - navigation.domainLookupStart,
        tcp: navigation.connectEnd - navigation.connectStart,
        request: navigation.responseStart - navigation.requestStart,
        response: navigation.responseEnd - navigation.responseStart,
        dom: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
        load: navigation.loadEventEnd - navigation.loadEventStart,
        total: navigation.loadEventEnd - navigation.fetchStart,
      };

      console.log("Performance metrics:", metrics);
      return metrics;
    }
  }
  return null;
};
