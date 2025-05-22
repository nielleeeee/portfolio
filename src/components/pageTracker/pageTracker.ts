"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { PageData } from "../../../type";
import { sendPageData } from "@/app/action/sendPageData";

const LOCAL_STORAGE_KEY = "pageViewTrackTimestamps";
const TRACKING_COOLDOWN_MS = 24 * 60 * 60 * 1000;

export function PageViewTracker() {
  const pathname = usePathname();
  const lastTrackedUrlRef = useRef<string | null>(null);

  useEffect(() => {
    const currentUrl = pathname;

    if (lastTrackedUrlRef.current === currentUrl) {
      return;
    }

    lastTrackedUrlRef.current = currentUrl;

    const now = new Date().getTime();
    let trackedUrls: Record<string, number> = {};

    try {
      const cachedTrackedUrls = localStorage.getItem(LOCAL_STORAGE_KEY);

      if (cachedTrackedUrls) {
        trackedUrls = JSON.parse(cachedTrackedUrls);
      }
    } catch (error) {
      console.error("Error reading local storage:", error);
    }

    const lastTrackedTime = trackedUrls[currentUrl];

    if (lastTrackedTime && now - lastTrackedTime < TRACKING_COOLDOWN_MS) {
      console.log(
        `PageViewTracker: URL "${currentUrl}" already tracked within the last 24 hours. Skipping.`
      );
      return;
    }

    const trackPageView = async (urlToTrack: string) => {
      const pageData: PageData = {
        url: window.location.origin + urlToTrack,
        referrer: document.referrer,
        userAgent: navigator.userAgent,
        timestamp: new Date().toISOString(),
      };

      try {
        const result = await sendPageData(pageData);

        console.log(result);
      } catch (error) {
        console.error("Error tracking page view:", error);
      }
    };

    trackPageView(currentUrl);
  }, [pathname]);

  return null;
}
