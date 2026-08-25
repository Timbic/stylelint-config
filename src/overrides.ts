import type { Config } from "stylelint";

type Override = Exclude<Config["overrides"], undefined>[number];

const vueOverride: Override = {
	files: ["*.vue", "**/*.vue"],
	customSyntax: "postcss-html",
	rules: {
		"selector-pseudo-class-no-unknown": [true, { ignorePseudoClasses: ["deep", "global", "slotted"] }],
		"selector-pseudo-element-no-unknown": [true, { ignorePseudoElements: ["v-deep", "v-global", "v-slotted"] }],
		"declaration-property-value-no-unknown": [true, { ignoreProperties: { "/.*/": "/v-bind\\(.+\\)/" } }],
		"function-no-unknown": [true, { ignoreFunctions: ["v-bind"] }],
		"value-keyword-case": ["lower", { ignoreFunctions: ["v-bind"] }],
	},
};

export { vueOverride };
