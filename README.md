# foldkit-lucide-icons

Foldkit-native views for [Lucide](https://lucide.dev/) icons. This package renders Lucide's
framework-agnostic SVG data through `foldkit/html`, without React, HTML string injection, or copied
SVG markup.

## Install

```sh
npm install foldkit-lucide-icons foldkit
```

`foldkit` is a peer dependency. Lucide is installed by this package.

## Use a bundled icon

Bundled icons are available from the tree-shakeable `icons` entry point:

```ts
import { html } from "foldkit/html";
import { LogOut } from "foldkit-lucide-icons/icons";

const h = html<Message>();

h.button([h.Type("button")], [LogOut({ size: 16 }), "Sign out"]);
```

Icons are decorative by default and receive `aria-hidden="true"`. Give an icon a label when it is
the only content of an interactive or informative element:

```ts
import { Search } from "foldkit-lucide-icons/icons";

Search({ size: 18, label: "Search" });
```

Options include `size`, `color`, `strokeWidth`, `absoluteStrokeWidth`, `class`, and `label`.

## Wrap any Lucide icon

You can use an icon that is not part of the bundled entry point:

```ts
import { Rocket as RocketNode } from "lucide";
import { defineIcon } from "foldkit-lucide-icons";

export const Rocket = defineIcon(RocketNode);
```

## Development

```sh
npm install
npm test
npm run build
npm pack --dry-run
```

## Publishing

The first release is prepared as version `0.1.0`. See [PUBLISHING.md](./PUBLISHING.md) for the
complete first-time npm publishing walkthrough.

## License

[MIT](./LICENSE)
