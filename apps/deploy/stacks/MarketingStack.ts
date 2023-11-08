import { StackContext, NextjsSite } from "sst/constructs";
// import {} from "@payroll/marketing";

export function MarketingSite({ stack }: StackContext) {
  const site = new NextjsSite(stack, "marketing-site", {
    path: "../marketing/",
  });

  stack.addOutputs({
    URL: site.url,
  });
}
