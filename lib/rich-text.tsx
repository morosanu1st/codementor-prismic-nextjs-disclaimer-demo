import type { ReactNode } from "react";
import type { PrismicRichTextBlock, PrismicRichTextSpan } from "./prismic-types";

function applySpans(text: string, spans: PrismicRichTextSpan[]): ReactNode[] {
  if (!spans.length) return [text];

  const sorted = [...spans].sort((a, b) => a.start - b.start);
  const nodes: ReactNode[] = [];
  let cursor = 0;

  sorted.forEach((span, i) => {
    if (span.start > cursor) {
      nodes.push(text.slice(cursor, span.start));
    }
    const slice = text.slice(span.start, span.end);
    if (span.type === "strong") {
      nodes.push(<strong key={i}>{slice}</strong>);
    } else if (span.type === "em") {
      nodes.push(<em key={i}>{slice}</em>);
    } else if (span.type === "hyperlink" && span.data?.url) {
      nodes.push(
        <a key={i} href={span.data.url} target={span.data.target ?? "_self"} rel="noopener noreferrer">
          {slice}
        </a>
      );
    } else {
      nodes.push(slice);
    }
    cursor = span.end;
  });

  if (cursor < text.length) nodes.push(text.slice(cursor));
  return nodes;
}

export function RichText({ field }: { field: PrismicRichTextBlock[] }) {
  if (!field?.length) return null;

  const listBuffer: { ordered: boolean; items: ReactNode[] } | null = null;
  const output: ReactNode[] = [];
  let buffer: { ordered: boolean; items: ReactNode[] } | null = listBuffer;

  const flushList = () => {
    if (!buffer) return;
    const Tag = buffer.ordered ? "ol" : "ul";
    output.push(
      <Tag key={`list-${output.length}`} className="disclaimer-list">
        {buffer.items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </Tag>
    );
    buffer = null;
  };

  field.forEach((block, index) => {
    const content = applySpans(block.text, block.spans ?? []);

    if (block.type === "list-item" || block.type === "o-list-item") {
      const ordered = block.type === "o-list-item";
      if (!buffer || buffer.ordered !== ordered) {
        flushList();
        buffer = { ordered, items: [] };
      }
      buffer.items.push(content);
      return;
    }

    flushList();

    if (block.type === "heading2") {
      output.push(<h2 key={index}>{content}</h2>);
    } else if (block.type === "heading3") {
      output.push(<h3 key={index}>{content}</h3>);
    } else {
      output.push(<p key={index}>{content}</p>);
    }
  });

  flushList();
  return <>{output}</>;
}
