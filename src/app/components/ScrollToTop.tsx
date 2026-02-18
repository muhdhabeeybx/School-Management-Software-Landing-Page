import { useEffect } from "react";
import { useLocation } from "react-router";

/**
 * Ensures SPA navigations start at the top of the page.
 * (Without this, React Router preserves scroll position by default.)
 */
export default function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    // Use instant scroll to avoid awkward animation on navigation.
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [location.pathname]);

  return null;
}
