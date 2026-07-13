// GA4 event helper, mirroring the portfolio's assets/js/analytics.js
// pattern: an explicit parameter allowlist and a safe no-op when gtag
// isn't loaded (localhost dev, blocked scripts, embeds without consent).
const ALLOWED_PARAMETERS = new Set([
  "day_name",
  "exercise_name",
  "exercise_slug",
  "section_name",
  "video_id",
  "video_source",
]);

function sanitizeParameters(parameters) {
  return Object.fromEntries(
    Object.entries(parameters || {}).filter(([name, value]) => {
      return ALLOWED_PARAMETERS.has(name) &&
        ["string", "number", "boolean"].includes(typeof value);
    })
  );
}

export function track(eventName, parameters) {
  if (typeof eventName !== "string" || !eventName || typeof window.gtag !== "function") {
    return false;
  }

  try {
    window.gtag("event", eventName, sanitizeParameters(parameters));
    return true;
  } catch {
    return false;
  }
}
