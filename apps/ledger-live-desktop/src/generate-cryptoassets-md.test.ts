// it is a bit a hack but it's a test that run in jest
// to access the libs / babel ecosystem and generate a markdown file!
// it passes if the file doesn't change (like a snapshot!)
// to run this test: pnpm desktop test:jest src/generate-cryptoassets-md.test.ts
import { test, expect } from "@jest/globals";
import fs from "fs";
import "./live-common-set-supported-currencies";
import {
  listCryptoCurrencies,
  isCurrencySupported,
  listTokens,
} from "@ledgerhq/live-common/currencies/index";
const outputFile = "cryptoassets.md";

function gen() {
  let md = "# Supported crypto assets\n\n";
  const currencies = listCryptoCurrencies();
  md += "## Crypto currencies (" + currencies.length + ")\n";
  md += "| name | ticker | supported on Ledger Live? | ledger id |\n";
  md += "|--|--|--|--|\n";
  currencies
    .slice(0)
    .sort((a, b) => {
      if (isCurrencySupported(a) === isCurrencySupported(b)) {
        return a.name < b.name ? -1 : 1;
      }
      return isCurrencySupported(b) ? 1 : -1;
    })
    .forEach(c => {
      md += `| ${c.name} | ${c.ticker} | ${isCurrencySupported(c) ? "YES" : "NO"} | ${c.id} |\n`;
    });
  md += "\n";
  const tokens = listTokens({
    withDelisted: true,
  });
  md += "## Tokens (" + tokens.length + ")\n";
  md += "| parent currency | ticker | contract | name | status | ledger id |\n";
  md += "|--|--|--|--|--|--|\n";
  tokens
    .slice(0)
    .sort((a, b) => {
      if (a.parentCurrency === b.parentCurrency) {
        return a.name < b.name ? -1 : 1;
      }
      return a.parentCurrency.name > b.parentCurrency.name ? 1 : -1;
    })
    .forEach(t => {
      const status = [];
      if (t.delisted) {
        status.push("delisted");
      }
      md += `| ${t.parentCurrency.name} | ${t.ticker} | ${t.contractAddress || ""} | ${
        t.name
      } | ${status.join(", ")} | ${t.id} |\n`;
    });
  md += "\n";
  return md;
}

test("generate cryptoassets.md", () => {
  const md = gen();
  const existing = fs.readFileSync(outputFile, "utf-8");
  fs.writeFileSync(outputFile, md);
  expect(existing).toBe(md);
});
