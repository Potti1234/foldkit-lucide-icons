# foldkit-lucide-icons

Foldkit-native views for [Lucide](https://lucide.dev/) icons. This package renders Lucide's
framework-agnostic SVG data through `foldkit/html`, without React, HTML string injection, or copied
SVG markup.

## Install

```sh
npm install foldkit-lucide-icons foldkit
```

`foldkit` is a peer dependency. Lucide is installed by this package.

## Use an icon

All Lucide icons and their aliases are available from the tree-shakeable `icons` entry point:

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

## Updating the icon set

The exports in `src/icons.ts` are generated from the installed `lucide` package. After updating
Lucide, regenerate them and run the checks:

```sh
npm update lucide
npm run generate:icons
npm run check
```

Do not edit `src/icons.ts` by hand. The release check fails when the generated file is stale.

## Development

```sh
npm install
npm test
npm run build
npm pack --dry-run
```

## Publishing

See [PUBLISHING.md](./PUBLISHING.md) for the npm publishing walkthrough.

## License

[MIT](./LICENSE)
