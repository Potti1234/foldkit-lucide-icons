import type { IconNode } from "lucide";
import { html, type Attribute, type Html } from "foldkit/html";

export type LucideIcon = IconNode;

export type IconOptions = Readonly<{
  size?: number | string;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
  class?: string;
  label?: string;
}>;

export type FoldkitIcon = <Message = never>(options?: IconOptions) => Html;

export const defineIcon =
  (node: LucideIcon): FoldkitIcon =>
  <Message = never>(options: IconOptions = {}): Html =>
    lucideIcon<Message>(node, options);

export const lucideIcon = <Message = never>(node: LucideIcon, options: IconOptions = {}): Html => {
  const h = html<Message>();
  const size = options.size ?? 24;
  const numericSize = typeof size === "number" ? size : Number(size);
  const strokeWidth =
    options.absoluteStrokeWidth === true && Number.isFinite(numericSize) && numericSize > 0
      ? ((options.strokeWidth ?? 2) * 24) / numericSize
      : (options.strokeWidth ?? 2);

  return h.svg(
    [
      h.Xmlns("http://www.w3.org/2000/svg"),
      h.Width(String(size)),
      h.Height(String(size)),
      h.ViewBox("0 0 24 24"),
      h.Fill("none"),
      h.Stroke(options.color ?? "currentColor"),
      h.StrokeWidth(String(strokeWidth)),
      h.StrokeLinecap("round"),
      h.StrokeLinejoin("round"),
      ...(options.class ? [h.Class(options.class)] : []),
      ...(options.label ? [h.Role("img"), h.AriaLabel(options.label)] : [h.AriaHidden(true)]),
    ],
    node.map(([tag, attributes]) => renderNode(h, tag, attributes)),
  );
};

const renderNode = <Message>(
  h: ReturnType<typeof html<Message>>,
  tag: string,
  values: Readonly<Record<string, string | number | undefined>>,
): Html => {
  const attributes: ReadonlyArray<Attribute<Message>> = Object.entries(values).flatMap(
    ([key, value]) => (value === undefined ? [] : [h.Attribute(key, String(value))]),
  );

  switch (tag) {
    case "circle":
      return h.circle(attributes, []);
    case "ellipse":
      return h.ellipse(attributes, []);
    case "line":
      return h.line(attributes, []);
    case "path":
      return h.path(attributes, []);
    case "polygon":
      return h.polygon(attributes, []);
    case "polyline":
      return h.polyline(attributes, []);
    case "rect":
      return h.rect(attributes, []);
    default:
      throw new Error(`Unsupported Lucide SVG element: ${tag}`);
  }
};
