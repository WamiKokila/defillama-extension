import { EtherscanAlikeExplorerConfig, injectPrice } from "../../../libs/etherscanInjector";

const config: EtherscanAlikeExplorerConfig = {
  name: "CronosScan",
  indexTotalAmountTextSplit: 2,
  selectorTokenList: "li.list-custom.list-custom-ERC-20 > a",
  chainPrefix: "cronos:",
};

injectPrice(config);