/**
 * Minimal Prismic-shaped types for a disclaimer custom type.
 * Mirrors what @prismicio/client would give you for Rich Text + Key Text fields.
 */

export type PrismicKeyText = string | null;

export type PrismicRichTextSpan = {
  start: number;
  end: number;
  type: "strong" | "em" | "hyperlink";
  data?: { link_type: "Web"; url: string; target?: string };
};

export type PrismicRichTextBlock = {
  type: "paragraph" | "heading2" | "heading3" | "list-item" | "o-list-item";
  text: string;
  spans: PrismicRichTextSpan[];
};

export type DisclaimerDocument = {
  id: string;
  uid: string | null;
  type: "disclaimer";
  lang: string;
  data: {
    title: PrismicKeyText;
    /** Rich Text field — the disclaimer body students will wire up */
    body: PrismicRichTextBlock[];
    last_updated: string | null;
    severity: "info" | "warning" | "critical" | null;
  };
};
