//@flow

import {
  listCurrencies,
  hasCurrencyByCoinType,
  getCurrencyByCoinType,
  getDefaultUnitByCoinType,
  getFiatUnit,
  hasFiatUnit,
  countervalueForRate,
  formatCurrencyUnit,
  parseCurrencyUnit,
  chopCurrencyUnitDecimals,
  formatShort,
  decodeURIScheme,
  encodeURIScheme
} from "..";

test("can get currency by coin type", () => {
  expect(getCurrencyByCoinType(0)).toMatchObject({
    coinType: 0,
    name: "Bitcoin"
  });
  expect(getCurrencyByCoinType(2)).toMatchObject({
    coinType: 2,
    name: "Litecoin"
  });
  expect(hasCurrencyByCoinType(0)).toBe(true);
  expect(hasCurrencyByCoinType(-1)).toBe(false);
  expect(() => getCurrencyByCoinType(-1)).toThrow();
});

test("all cryptocurrencies have at least one unit", () => {
  for (let c of listCurrencies()) {
    expect(c.units.length).toBeGreaterThan(0);
  }
});

test("can get fiat by coin type", () => {
  expect(getFiatUnit("USD")).toMatchObject({
    symbol: "$",
    magnitude: 2
  });
  expect(getFiatUnit("EUR")).toMatchObject({
    symbol: "€",
    magnitude: 2
  });
  // this is not a fiat \o/
  expect(() => getFiatUnit("USDT")).toThrow();
  expect(hasFiatUnit("USD")).toBe(true);
  expect(hasFiatUnit("USDT")).toBe(false);
});

test("can compute counterValue for a rate", () => {
  expect(countervalueForRate({ value: 100, fiat: "USD" }, 200)).toMatchObject({
    unit: { symbol: "$" },
    value: 20000
  });
  expect(countervalueForRate({ value: 0.211, fiat: "EUR" }, 100)).toMatchObject(
    {
      unit: { symbol: "€" },
      value: 21 // this should gets rounded
    }
  );
});

test("can format a currency unit", () => {
  expect(formatCurrencyUnit(getCurrencyByCoinType(0).units[0], 100000000)).toBe(
    "1"
  );
  expect(
    formatCurrencyUnit(getCurrencyByCoinType(0).units[0], 1000000, {
      showCode: true
    })
  ).toBe("BTC 0.01");
  expect(
    formatCurrencyUnit(getCurrencyByCoinType(0).units[0], 100000000, {
      showCode: true
    })
  ).toBe("BTC 1");
  expect(
    formatCurrencyUnit(getCurrencyByCoinType(0).units[0], 100000000, {
      showCode: true,
      showAllDigits: true
    })
  ).toBe("BTC 1.00000000");
  expect(
    formatCurrencyUnit(getCurrencyByCoinType(0).units[0], 100000000, {
      showCode: true,
      showAllDigits: true,
      alwaysShowSign: true
    })
  ).toBe("+ BTC 1.00000000");
});

test("formatter will round values by default", () => {
  expect(
    formatCurrencyUnit(getCurrencyByCoinType(0).units[0], 1000001, {})
  ).toBe("0.01");
  expect(formatCurrencyUnit(getCurrencyByCoinType(0).units[0], 1000010)).toBe(
    "0.01"
  );
  expect(formatCurrencyUnit(getCurrencyByCoinType(0).units[0], 1000100)).toBe(
    "0.010001"
  );
  expect(
    formatCurrencyUnit(getCurrencyByCoinType(0).units[0], 999999999999)
  ).toBe("10,000");
});

test("formatter rounding can be disabled", () => {
  expect(
    formatCurrencyUnit(getCurrencyByCoinType(0).units[0], 999999999999, {
      disableRounding: true
    })
  ).toBe("9,999.99999999");
});

test("sub magnitude", () => {
  expect(
    formatCurrencyUnit(getFiatUnit("USD"), 0.04, {
      subMagnitude: 2
    })
  ).toBe("0.0004");

  // digits will be round after subMagnitude
  expect(
    formatCurrencyUnit(getFiatUnit("USD"), 0.03987654, {
      subMagnitude: 2,
      showCode: true
    })
  ).toBe("USD 0.0004");

  expect(
    formatCurrencyUnit(getFiatUnit("USD"), 0.03987654, {
      subMagnitude: 2,
      disableRounding: true
    })
  ).toBe("0.0004");

  expect(
    formatCurrencyUnit(getFiatUnit("USD"), 0.03987654, {
      subMagnitude: 5,
      disableRounding: true
    })
  ).toBe("0.0003988");

  // even tho the USD unit showAllDigits, it does not force the sub magnitude digits to show
  expect(
    formatCurrencyUnit(getFiatUnit("USD"), 0.03, {
      subMagnitude: 5,
      disableRounding: true
    })
  ).toBe("0.0003");

  expect(
    formatCurrencyUnit(getCurrencyByCoinType(0).units[0], 9.123456, {
      subMagnitude: 2
    })
  ).toBe("0.0000000912");
  expect(
    formatCurrencyUnit(getCurrencyByCoinType(0).units[0], 999999999999.123456, {
      disableRounding: true,
      subMagnitude: 2
    })
  ).toBe("9,999.9999999912");
  expect(
    formatCurrencyUnit(getCurrencyByCoinType(0).units[0], 999999999999.123456, {
      subMagnitude: 2
    })
  ).toBe("10,000");
});

test("parseCurrencyUnit", () => {
  expect(
    parseCurrencyUnit(getCurrencyByCoinType(0).units[0], "9999.99999999")
  ).toBe(999999999999);
  expect(parseCurrencyUnit(getCurrencyByCoinType(0).units[0], ".987654")).toBe(
    98765400
  );
  expect(parseCurrencyUnit(getCurrencyByCoinType(0).units[0], "9999")).toBe(
    999900000000
  );
  expect(parseCurrencyUnit(getCurrencyByCoinType(0).units[0], "1")).toBe(
    100000000
  );
  expect(parseCurrencyUnit(getCurrencyByCoinType(0).units[0], "0x1")).toBe(0);
  expect(parseCurrencyUnit(getCurrencyByCoinType(0).units[0], "NOPE")).toBe(0);
});

test("formatter works with fiats", () => {
  expect(
    formatCurrencyUnit(getFiatUnit("EUR"), 12345, { showCode: true })
  ).toBe("EUR 123.45");
  // by default, fiats always show the digits
  expect(formatCurrencyUnit(getFiatUnit("EUR"), 12300)).toBe("123.00");
});

test("formatter useGrouping", () => {
  expect(
    formatCurrencyUnit(getFiatUnit("EUR"), 1234500, { useGrouping: true })
  ).toBe("12,345.00");
  expect(
    formatCurrencyUnit(getFiatUnit("EUR"), 1234500, { useGrouping: false })
  ).toBe("12345.00");
});

test("formatter can change locale", () => {
  expect(
    formatCurrencyUnit(getFiatUnit("USD"), -1234567, { showCode: true })
  ).toBe("- USD 12,345.67");
  // FIXME we can't test this unless we configure node.js properly to have the locales. we'll come back to this later...
  /*
  expect(
    formatCurrencyUnit(getFiatUnit("EUR"), -1234567, {
      showCode: true,
      locale: "fr-FR"
    })
  ).toBe("-12 345.67 EUR");
  */
});

test("formatShort", () => {
  expect(formatShort(getFiatUnit("EUR"), 123456789)).toBe("1.2m");
  expect(formatShort(getFiatUnit("EUR"), 123456)).toBe("1.2k");
});

test("chopCurrencyUnitDecimals", () => {
  expect(chopCurrencyUnitDecimals(getFiatUnit("EUR"), "1")).toBe("1");
  expect(chopCurrencyUnitDecimals(getFiatUnit("EUR"), "1234")).toBe("1234");
  expect(chopCurrencyUnitDecimals(getFiatUnit("EUR"), "1234.56")).toBe(
    "1234.56"
  );
  expect(chopCurrencyUnitDecimals(getFiatUnit("EUR"), "1234.5678")).toBe(
    "1234.56"
  );
  expect(chopCurrencyUnitDecimals(getFiatUnit("EUR"), "1234.5678 EUR")).toBe(
    "1234.56 EUR"
  );
});

test("encodeURIScheme", () => {
  expect(
    encodeURIScheme({
      currency: getCurrencyByCoinType(0),
      address: "1gre1noAY9HiK2qxoW8FzSdjdFBcoZ5fV"
    })
  ).toBe("bitcoin:1gre1noAY9HiK2qxoW8FzSdjdFBcoZ5fV");

  expect(
    encodeURIScheme({
      currency: getCurrencyByCoinType(0),
      address: "1gre1noAY9HiK2qxoW8FzSdjdFBcoZ5fV",
      amount: 1234567000000
    })
  ).toBe("bitcoin:1gre1noAY9HiK2qxoW8FzSdjdFBcoZ5fV?amount=12345.67");
});

test("decodeURIScheme", () => {
  expect(
    decodeURIScheme("bitcoin:1gre1noAY9HiK2qxoW8FzSdjdFBcoZ5fV")
  ).toMatchObject({
    currency: getCurrencyByCoinType(0),
    address: "1gre1noAY9HiK2qxoW8FzSdjdFBcoZ5fV"
  });

  expect(
    decodeURIScheme("bitcoin:1gre1noAY9HiK2qxoW8FzSdjdFBcoZ5fV?amount=12345.67")
  ).toMatchObject({
    currency: getCurrencyByCoinType(0),
    address: "1gre1noAY9HiK2qxoW8FzSdjdFBcoZ5fV",
    amount: 1234567000000
  });
});

test("getDefaultUnitByCoinType", () => {
  expect(getDefaultUnitByCoinType(0)).toMatchObject({
    code: "BTC",
    magnitude: 8,
    name: "bitcoin",
    symbol: "Ƀ"
  });
});
