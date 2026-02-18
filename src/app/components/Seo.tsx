import { useEffect } from "react";

export type SeoProps = {
  title: string;
  description?: string;
  canonicalPath?: string;
  /** Absolute URL to an image for social previews (e.g. https://example.com/og.png) */
  ogImage?: string;
  /** e.g. "website" | "article" */
  ogType?: string;
};

const DEFAULT_DESCRIPTION =
  "Complete school management solution for Nigerian schools. Student management, fee payments, results, and portals for teachers, students & parents.";

function ensureMeta(nameOrProperty: "name" | "property", key: string) {
  const selector = `meta[${nameOrProperty}="${key}"]`;
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(nameOrProperty, key);
    document.head.appendChild(el);
  }
  return el;
}

function ensureLink(rel: string) {
  const selector = `link[rel="${rel}"]`;
  let el = document.head.querySelector<HTMLLinkElement>(selector);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  return el;
}

export default function Seo({
  title,
  description,
  canonicalPath,
  ogImage,
  ogType = "website",
}: SeoProps) {
  useEffect(() => {
    const finalDescription = description?.trim() || DEFAULT_DESCRIPTION;

    document.title = title;

    ensureMeta("name", "description").setAttribute("content", finalDescription);
    ensureMeta("property", "og:title").setAttribute("content", title);
    ensureMeta("property", "og:description").setAttribute("content", finalDescription);
    ensureMeta("property", "og:type").setAttribute("content", ogType);

    const url = new URL(window.location.href);
    if (canonicalPath) {
      url.pathname = canonicalPath.startsWith("/") ? canonicalPath : `/${canonicalPath}`;
      url.search = "";
      url.hash = "";
    }

    ensureMeta("property", "og:url").setAttribute("content", url.toString());

    if (ogImage) {
      ensureMeta("property", "og:image").setAttribute("content", ogImage);
      ensureMeta("name", "twitter:card").setAttribute("content", "summary_large_image");
      ensureMeta("name", "twitter:image").setAttribute("content", ogImage);
    } else {
      ensureMeta("name", "twitter:card").setAttribute("content", "summary");
    }

    ensureMeta("name", "twitter:title").setAttribute("content", title);
    ensureMeta("name", "twitter:description").setAttribute("content", finalDescription);

    const canonical = ensureLink("canonical");
    canonical.setAttribute("href", url.toString());
  }, [title, description, canonicalPath, ogImage, ogType]);

  return null;
}
