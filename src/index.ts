import { moduleInterop } from "@textlint/module-interop";

const japanesePreset = moduleInterop(require("textlint-rule-preset-japanese"));
const jtfPreset = moduleInterop(require("textlint-rule-preset-jtf-style"));

module.exports = {
  rules: Object.assign(
    {
      "@textlint-rule/no-unmatched-pair": moduleInterop(
        require("@textlint-rule/textlint-rule-no-unmatched-pair")
      ),
      "ja-hiragana-fukushi": moduleInterop(
        require("textlint-rule-ja-hiragana-fukushi")
      ),
      "ja-hiragana-hojodoushi": moduleInterop(
        require("textlint-rule-ja-hiragana-hojodoushi")
      ),
      "ja-hiragana-keishikimeishi": moduleInterop(
        require("textlint-rule-ja-hiragana-keishikimeishi")
      ),
      "ja-no-redundant-expression": moduleInterop(
        require("textlint-rule-ja-no-redundant-expression")
      ),
      "no-mix-dearu-desumasu": moduleInterop(
        require("textlint-rule-no-mix-dearu-desumasu")
      ),
      prh: moduleInterop(require("./prh-rules")),
    },
    japanesePreset.rules,
    jtfPreset.rules
  ),

  rulesConfig: Object.assign(
    {
      "@textlint-rule/no-unmatched-pair": true,
      "ja-hiragana-fukushi": true,
      "ja-hiragana-hojodoushi": true,
      "ja-hiragana-keishikimeishi": true,
      "ja-no-redundant-expression": true,
      "no-mix-dearu-desumasu": true,
      prh: true,
    },
    japanesePreset.rulesConfig,
    jtfPreset.rulesConfig
  ),
};
