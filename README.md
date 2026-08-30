# @timbic/stylelint-config

Extensible stylelint configuration for smart developers.

> **Important Note:** Some rules might change in future. If you want to use this package right now - pin its version so new updates doesn't
> affect you

## Usage

```bash
pnpm add -D stylelint @timbic/stylelint-config
```

```ts
// stylelint.config.{js,mjs,ts,mts}
import withTimbic from "@timbic/stylelint-config";

export default withTimbic();

// or

export default withTimbic({
	// your options
});
```

Your config will override the defaults and extend the configuration.

## But what about the extends field?

You cannot use this config inside the extends array. This package refuses to follow stylelint's "extends" architecture. But you CAN safely
use extends in your options:

```ts
import withTimbic from "@timbic/stylelint-config";

export default withTimbic({
	extends: ["stylelint-config-standard-scss"],
});
```

## What's Included

This config provides a comprehensive Stylelint setup with the following:

- A thorough set of validation rules enforcing common coding conventions
- Property ordering via `stylelint-order` with recess order
- Browser compatibility checks via `stylelint-no-unsupported-browser-features` targeting `> 1%`, `last 2 versions`, `not dead`
- Vue support out of the box which will not affect you if you don't use Vue in your project

## Inspect the config

You can use this command to inspect all the rules and overrides inside your resolved configuration.

```bash
pnpm dlx stylelint-config-inspector
```

## Shout out to

- [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard) by stylelint
- [stylelint-config-standard-vue](https://github.com/ota-meshi/stylelint-config-standard-vue) by ota-meshi
- [stylelint-config-recess-order](https://github.com/stormwarning/stylelint-config-recess-order) by stormwarning
