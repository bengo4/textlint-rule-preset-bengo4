const fs = require("fs");
const prh = require("textlint-rule-prh");

const prhPaths = [
  "/../dict/prh_mistakes.yml",
  "/../dict/prh_redundancy.yml",
  "/../dict/prh_bengo4.yml",
  "/../dict/prh_writing.yml",
];

const reporter = (context: any) => {
  return prh.fixer(context, {
    ruleContents: prhPaths.map((path) =>
      fs.readFileSync(__dirname + path, "utf-8")
    ),
  });
};

module.exports = {
  linter: reporter,
  fixer: reporter,
};
