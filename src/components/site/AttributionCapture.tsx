"use client";

import { useEffect } from "react";
import { ATTRIBUTION_KEYS, ATTRIBUTION_STORAGE_KEY } from "@/lib/attribution";

/**
 * Records the UTMs a visitor first landed with, once per session. Renders
 * nothing. First touch wins: the ad that brought them in keeps the credit even
 * if they later bounce through an untagged page.
 */
export function AttributionCapture() {
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);

      const captured: Record<string, string> = {};
      for (const key of ATTRIBUTION_KEYS) {
        const value = params.get(key)?.trim();
        if (value) captured[key] = value;
      }
      if (Object.keys(captured).length === 0) return;

      if (window.sessionStorage.getItem(ATTRIBUTION_STORAGE_KEY)) return;
      window.sessionStorage.setItem(ATTRIBUTION_STORAGE_KEY, JSON.stringify(captured));
    } catch {
      // Storage unavailable — attribution is best-effort, never a blocker.
    }
  }, []);

  return null;
}
