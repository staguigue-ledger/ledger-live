import CosmosBase from "./cosmosBase";
import { BigNumber } from "bignumber.js";

class Persistence extends CosmosBase {
  stakingDocUrl: string;
  unbondingPeriod: number;
  validatorPrefix: string;
  lcd!: string;
  ledgerValidator!: string;
  prefix: string;

  constructor() {
    super();
    this.stakingDocUrl = "https://support.ledger.com/hc/en-us/articles/9604540043421?support=true";
    this.unbondingPeriod = 21;
    this.prefix = "persistence";
    this.validatorPrefix = `${this.prefix}valoper`;
    this.minimalTransactionAmount = new BigNumber(5000);
  }
}

export default Persistence;
