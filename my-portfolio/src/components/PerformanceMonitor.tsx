"use client";

import { useEffect } from "react";
import { measurePerformance, trackEvent } from "@/lib/analytics";

const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    // Measure performance after page load
    const timer = setTimeout(() => {
      measurePerformance();
    }, 2000);

    // Measure Web Vitals
    if (typeof window !== "undefined") {
      import("web-vitals").then(({ onCLS, onFCP, onLCP, onTTFB, onINP }) => {
        onCLS((metric: any) => {
          trackEvent("web_vital", {
            name: "CLS",
            value: metric.value,
            rating: metric.rating,
          });
        });
        onFCP((metric: any) => {
          trackEvent("web_vital", {
            name: "FCP",
            value: metric.value,
            rating: metric.rating,
          });
        });
        onLCP((metric: any) => {
          trackEvent("web_vital", {
            name: "LCP",
            value: metric.value,
            rating: metric.rating,
          });
        });
        onTTFB((metric: any) => {
          trackEvent("web_vital", {
            name: "TTFB",
            value: metric.value,
            rating: metric.rating,
          });
        });
        onINP((metric: any) => {
          trackEvent("web_vital", {
            name: "INP",
            value: metric.value,
            rating: metric.rating,
          });
        });
      }).catch(() => {
        // web-vitals not available, skip
      });
    }

    return () => clearTimeout(timer);
  }, []);

  return null;
};

export default PerformanceMonitor;
