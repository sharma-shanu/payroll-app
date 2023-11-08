import { SSTConfig } from "sst";
import { MarketingSite } from "./stacks/MarketingStack";

export default {
  config(_input) {
    return {
      name: "deploy",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(MarketingSite);
  },
} satisfies SSTConfig;
