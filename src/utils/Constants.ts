import { log } from "@graphprotocol/graph-ts";

import { PairHandler, PairHandlerTypes } from "./PairHandler";

// Tokens definition
export const DAIBOND_TOKEN = "DAI";
export const OHMDAILPBOND_TOKEN = "OHM-DAI";
export const OHMFRAXLPBOND_TOKEN = "OHM-FRAX";
export const FRAXBOND_TOKEN = "FRAX";
export const ETHBOND_TOKEN = "WETH";
export const LUSDBOND_TOKEN = "LUSD";
export const OHMLUSDLPBOND_TOKEN = "OHM-LUSD";
export const OHMETHLPBOND_TOKEN = "OHM-WETH";

export const MIGRATION_CONTRACT = "0x184f3fad8618a6f458c16bae63f70c426fe784b3";

export const CROSS_CHAIN_ARBITRUM = "0x012bbf0481b97170577745d2167ee14f63e2ad4c";
export const CROSS_CHAIN_FANTOM = "0x2bc001ffeb862d843e0a02a7163c7d4828e5fb10";
export const CROSS_CHAIN_POLYGON = "0xe06efa3d9ee6923240ee1195a16ddd96b5cce8f7";
export const TREASURY_ADDRESS = "0x886CE997aa9ee4F8c2282E182aB72A705762399D";
export const TREASURY_ADDRESS_V2 = "0x31f8cc382c9898b273eff4e0b7626a6987c846e8";
export const TREASURY_ADDRESS_V2_BLOCK = "12525281";
export const TREASURY_ADDRESS_V3 = "0x9A315BdF513367C0377FB36545857d12e85813Ef";
export const TREASURY_ADDRESS_V3_BLOCK = "13805100";

export const AAVE_ALLOCATOR = "0x0e1177e47151Be72e5992E0975000E73Ab5fd9D4";
export const AAVE_ALLOCATOR_V2 = "0x0d33c811d0fcc711bcb388dfb3a152de445be66f";
export const AAVE_ALLOCATOR_V2_BLOCK = "14375500";
export const BALANCER_ALLOCATOR = "0xa9b52a2d0ffdbabdb2cb23ebb7cd879cac6618a6";
export const CONVEX_ALLOCATOR1 = "0x3dF5A355457dB3A4B5C744B8623A7721BF56dF78";
export const CONVEX_ALLOCATOR1_BLOCK = "13027359";
export const CONVEX_ALLOCATOR2 = "0x408a9A09d97103022F53300A3A14Ca6c3FF867E8";
export const CONVEX_ALLOCATOR2_BLOCK = "13308077";
export const CONVEX_ALLOCATOR3 = "0xDbf0683fC4FC8Ac11e64a6817d3285ec4f2Fc42d";
export const CONVEX_ALLOCATOR3_BLOCK = "13920000";
export const CONVEX_CVX_ALLOCATOR = "0xdfc95aaf0a107daae2b350458ded4b7906e7f728";
export const CONVEX_CVX_VL_ALLOCATOR = "0x2d643df5de4e9ba063760d475beaa62821c71681";
export const OHMDAI_ONSEN_ID = 185;
export const OHMLUSD_ONSEN_ID = 323;
export const ONSEN_ALLOCATOR = "0x0316508a1b5abf1CAe42912Dc2C8B9774b682fFC";
export const SUSHI_MASTERCHEF = "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd";
export const VEFXS_ALLOCATOR = "0xde7b85f52577b113181921a7aa8fc0c22e309475";

export const OHMDAISLPBOND_CONTRACT1 = "0xd27001d1aaed5f002c722ad729de88a91239ff29";
export const OHMDAISLPBOND_CONTRACT1_BLOCK = "12154429";
export const OHMDAISLPBOND_CONTRACT2 = "0x13e8484a86327f5882d1340ed0d7643a29548536";
export const OHMDAISLPBOND_CONTRACT2_BLOCK = "12368362";
export const OHMDAISLPBOND_CONTRACT3 = "0x996668c46fc0b764afda88d83eb58afc933a1626";
export const OHMDAISLPBOND_CONTRACT3_BLOCK = "12525388";
export const OHMDAISLPBOND_CONTRACT4 = "0x956c43998316b6a2F21f89a1539f73fB5B78c151";
export const OHMDAISLPBOND_CONTRACT4_BLOCK = "12659907";
export const DAIBOND_CONTRACTS1 = "0xa64ed1b66cb2838ef2a198d8345c0ce6967a2a3c";
export const DAIBOND_CONTRACTS1_BLOCK = "12280908";
export const DAIBOND_CONTRACTS2 = "0xd03056323b7a63e2095ae97fa1ad92e4820ff045";
export const DAIBOND_CONTRACTS2_BLOCK = "12525351";
export const DAIBOND_CONTRACTS3 = "0x575409F8d77c12B05feD8B455815f0e54797381c";
export const DAIBOND_CONTRACTS3_BLOCK = "12659928";
export const OHMFRAXLPBOND_CONTRACT1 = "0x539b6c906244ac34e348bbe77885cdfa994a3776";
export const OHMFRAXLPBOND_CONTRACT1_BLOCK = "12621882";
export const OHMFRAXLPBOND_CONTRACT2 = "0xc20cfff07076858a7e642e396180ec390e5a02f7";
export const OHMFRAXLPBOND_CONTRACT2_BLOCK = "12659925";
export const FRAXBOND_CONTRACT1 = "0x8510c8c2B6891E04864fa196693D44E6B6ec2514";
export const FRAXBOND_CONTRACT1_BLOCK = "12666825";
export const ETHBOND_CONTRACT1 = "0xe6295201cd1ff13ced5f063a5421c39a1d236f1c";
export const ETHBOND_CONTRACT1_BLOCK = "12959821";
export const LUSDBOND_CONTRACT1 = "0x10c0f93f64e3c8d0a1b0f4b87d6155fd9e89d08d";
export const LUSDBOND_CONTRACT1_BLOCK = "13264217";
export const OHMLUSDBOND_CONTRACT1 = "0xfb1776299e7804dd8016303df9c07a65c80f67b6";
export const OHMLUSDBOND_CONTRACT1_BLOCK = "13348034";

export const CIRCULATING_SUPPLY_CONTRACT = "0x0EFFf9199Aa1Ac3C3E34E957567C1BE8bF295034";
export const CIRCULATING_SUPPLY_CONTRACT_BLOCK = "12236262";

export const STAKING_CONTRACT_V1 = "0x0822f3c03dcc24d200aff33493dc08d0e1f274a2";
export const STAKING_CONTRACT_V2 = "0xfd31c7d00ca47653c6ce64af53c1571f9c36566a";
export const STAKING_CONTRACT_V2_BLOCK = "12622679";
export const STAKING_CONTRACT_V3 = "0xB63cac384247597756545b500253ff8E607a8020";
export const STAKING_CONTRACT_V3_BLOCK = "13804019";

export const BONDING_CALCULATOR = "0xcaaa6a2d4b26067a391e7b7d65c16bb2d5fa571a";
export const BONDING_CALCULATOR_BLOCK = "12525357";

export const DISTRIBUTOR_CONTRACT = "0xC58E923bf8A00E4361FE3f4275226a543D7D3ce6";
export const DISTRIBUTOR_CONTRACT_BLOCK = 12800000;
export const DISTRIBUTOR_CONTRACT_V2 = "0xeeeb97A127a342656191E0313DF33D58D06B2E05";
export const DISTRIBUTOR_CONTRACT_BLOCK_V2 = 13805000;

export const DAO_WALLET = "0x245cc372c84b3645bf0ffe6538620b04a217988b";
export const BONDS_DEPOSIT = "0x9025046c6fb25Fb39e720d97a8FD881ED69a1Ef6";
export const BONDS_INVERSE_DEPOSIT = "0xBA42BE149e5260EbA4B82418A6306f55D532eA47";

export const LUSD_ALLOCATOR = "0x97b3ef4c558ec456d59cb95c65bfb79046e31fca";
export const LUSD_ALLOCATOR_BLOCK = "14397867";
export const STABILITY_POOL = "0x66017d22b0f8556afdd19fc67041899eb65a21bb";

export const RARI_ALLOCATOR = "0x061C8610A784b8A1599De5B1157631e35180d818";
export const RARI_ALLOCATOR_BLOCK = "14550000";
// Olympus tokens
export const ERC20_OHM_V1 = "0x383518188c0c6d7730d91b2c03a03c837814a899";
export const ERC20_OHM_V2 = "0x64aa3364f17a4d01c6f1751fd97c2bd3d7e7f1d5";
export const ERC20_OHM_V2_BLOCK = "13782589";
export const ERC20_SOHM_V1 = "0x31932e6e45012476ba3a3a4953cba62aee77fbbe";
export const ERC20_SOHM_V2 = "0x04f2694c8fcee23e8fd0dfea1d4f5bb8c352111f";
export const ERC20_SOHM_V2_BLOCK = "12622596";
export const ERC20_SOHM_V3 = "0x04906695D6D12CF5459975d7C3C03356E4Ccd460";
export const ERC20_SOHM_V3_BLOCK = "13806000";

// Stablecoin tokens
export const ERC20_ADAI = "0x028171bca77440897b824ca71d1c56cac55b68a3";
export const ERC20_DAI = "0x6b175474e89094c44da98b954eedeac495271d0f";
export const ERC20_FEI = "0x956F47F50A910163D8BF957Cf5846D573E7f87CA";
export const ERC20_FRAX = "0x853d955acef822db058eb8505911ed77f175b99e";
export const ERC20_LUSD = "0x5f98805a4e8be255a32880fdec7f6728c6568ba0";
export const ERC20_LUSD_BLOCK = "12178594";
export const ERC20_USDC = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";
export const ERC20_UST = "0xa693b19d2931d498c5b318df961919bb4aee87a5";
export const ERC20_UST_BLOCK = "13408366";
export const ERC20_STABLE_TOKENS = [
  ERC20_ADAI,
  ERC20_DAI,
  ERC20_FEI,
  ERC20_FRAX,
  ERC20_LUSD,
  // ERC20_UST,
  ERC20_USDC,
];

// Volatile tokens
export const NATIVE_ETH = "-999999";
export const ERC20_CRV = "0xd533a949740bb3306d119cc777fa900ba034cd52";
export const ERC20_CRV_3POOL = "0x6c3f90f043a72fa612cbac8115ee7e52bde6e490";
export const ERC20_CVX = "0x4e3fbd56cd56c3e72c1403e103b45db9da5b9d2b";
export const ERC20_CVX_BLOCK = "12460000";
export const ERC20_CVX_CRV = "0x62b9c7356a2dc64a1969e19c23e4f579f9810aa7";
export const ERC20_CVX_FXS = "0xfeef77d3f69374f66429c91d732a244f074bdf74";
export const ERC20_CVX_VL_V1 = "0xd18140b4b819b895a3dba5442f959fa44994af50";
export const ERC20_CVX_VL_V1_BLOCK = "13153663";
export const ERC20_CVX_VL_V2 = "0x72a19342e8F1838460eBFCCEf09F6585e32db86E";
export const ERC20_FXS = "0x3432b6a60d23ca0dfca7761b7ab56459d9c964d0";
export const ERC20_FXS_BLOCK = "11465584";
export const ERC20_FXS_VE = "0xc8418af6358ffdda74e09ca9cc3fe03ca6adc5b0";
export const ERC20_FXS_VE_BLOCK = "13833298";
export const ERC20_TRIBE = "0xc7283b66Eb1EB5FB86327f08e1B5816b0720212B";
export const ERC20_WBTC = "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599";
export const ERC20_WETH = "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2";
export const ERC20_XSUSHI = "0x8798249c2e607446efb7ad49ec89dd1865ff4272";
export const ERC20_VOLATILE_TOKENS = [
  // ERC20_CRV_3POOL,
  ERC20_CRV,
  // ERC20_CVX_CRV,
  // ERC20_CVX_FXS,
  ERC20_CVX_VL_V1,
  ERC20_CVX_VL_V2,
  ERC20_CVX,
  ERC20_FXS_VE,
  ERC20_FXS,
  ERC20_TRIBE,
  ERC20_WBTC,
  ERC20_WETH,
  ERC20_XSUSHI,
];
export const ERC20_VOLATILE_ILLIQUID_TOKENS = [ERC20_FXS_VE];
export const ERC20_VOLATILE_BLUE_CHIP_TOKENS = [ERC20_WBTC, ERC20_WETH];

// Liquidity Pools
export const PAIR_CURVE_OHM_ETH = "0x6ec38b3228251a0C5D491Faf66858e2E23d7728B";
export const PAIR_UNISWAP_V2_CRV_ETH = "0x58dc5a51fe44589beb22e8ce67720b5bc5378009";
export const PAIR_UNISWAP_V2_CVX_ETH = "0x05767d9ef41dc40689678ffca0608878fb3de906";
export const PAIR_UNISWAP_V2_ETH_WBTC = "0xceff51756c56ceffca006cd410b03ffc46dd3a58";
export const PAIR_UNISWAP_V2_OHM_DAI = "0x34d7d7Aaf50AD4944B70B320aCB24C95fa2def7c";
export const PAIR_UNISWAP_V2_OHM_DAI_V2 = "0x055475920a8c93cffb64d039a8205f7acc7722d3";
export const PAIR_UNISWAP_V2_OHM_DAI_V2_BLOCK = "13827000";
export const PAIR_UNISWAP_V2_OHM_ETH = "0xfffae4a0f4ac251f4705717cd24cadccc9f33e06";
export const PAIR_UNISWAP_V2_OHM_ETH_BLOCK = "12310798";
export const PAIR_UNISWAP_V2_OHM_ETH_V2 = "0x69b81152c5a8d35a67b32a4d3772795d96cae4da";
export const PAIR_UNISWAP_V2_OHM_ETH_V2_BLOCK = "13805112";
export const PAIR_UNISWAP_V2_OHM_FRAX = "0x2dce0dda1c2f98e0f171de8333c3c6fe1bbf4877";
export const PAIR_UNISWAP_V2_OHM_FRAX_BLOCK = "12563434";
export const PAIR_UNISWAP_V2_OHM_FRAX_V2 = "0xb612c37688861f1f90761dc7f382c2af3a50cc39";
export const PAIR_UNISWAP_V2_OHM_FRAX_V2_BLOCK = "13824000";
export const PAIR_UNISWAP_V2_OHM_LUSD = "0xfdf12d1f85b5082877a6e070524f50f6c84faa6b";
export const PAIR_UNISWAP_V2_OHM_LUSD_BLOCK = "13327921";
export const PAIR_UNISWAP_V2_OHM_LUSD_V2 = "0x46E4D8A1322B9448905225E52F914094dBd6dDdF";
export const PAIR_UNISWAP_V2_OHM_LUSD_V2_BLOCK = "14381693";
export const PAIR_UNISWAP_V2_TRIBE_ETH = "0x7ce01885a13c652241ae02ea7369ee8d466802eb";
export const PAIR_UNISWAP_V2_USDC_ETH = "0x397ff1542f962076d0bfe58ea045ffa2d347aca0";
export const PAIR_UNISWAP_V2_UST_ETH = "0x8B00eE8606CC70c2dce68dea0CEfe632CCA0fB7b";
export const PAIR_UNISWAP_V2_XSUSHI_ETH = "0x36e2fcccc59e5747ff63a03ea2e5c0c2c14911e7";
export const PAIR_UNISWAP_V3_FXS_ETH = "0xcd8286b48936cdac20518247dbd310ab681a9fbf";
export const PAIR_UNISWAP_V3_FXS_ETH_BLOCK = "13509100";

const PAIR_HANDLER = new Map<string, PairHandler[]>();
PAIR_HANDLER.set(ERC20_CRV, [new PairHandler(PairHandlerTypes.UniswapV2, PAIR_UNISWAP_V2_CRV_ETH)]);
PAIR_HANDLER.set(ERC20_CVX, [new PairHandler(PairHandlerTypes.UniswapV2, PAIR_UNISWAP_V2_CVX_ETH)]);
PAIR_HANDLER.set(ERC20_CVX_VL_V1, [
  new PairHandler(PairHandlerTypes.UniswapV2, PAIR_UNISWAP_V2_CVX_ETH),
]);
PAIR_HANDLER.set(ERC20_CVX_VL_V2, [
  new PairHandler(PairHandlerTypes.UniswapV2, PAIR_UNISWAP_V2_CVX_ETH),
]); // TODO is this correct?
PAIR_HANDLER.set(ERC20_DAI, [
  new PairHandler(PairHandlerTypes.UniswapV2, PAIR_UNISWAP_V2_OHM_DAI),
  new PairHandler(PairHandlerTypes.UniswapV2, PAIR_UNISWAP_V2_OHM_DAI_V2),
]);
PAIR_HANDLER.set(ERC20_FXS, [new PairHandler(PairHandlerTypes.UniswapV3, PAIR_UNISWAP_V3_FXS_ETH)]);
PAIR_HANDLER.set(ERC20_FXS_VE, [
  new PairHandler(PairHandlerTypes.UniswapV3, PAIR_UNISWAP_V3_FXS_ETH),
]);
PAIR_HANDLER.set(ERC20_LUSD, [
  new PairHandler(PairHandlerTypes.UniswapV2, PAIR_UNISWAP_V2_OHM_LUSD),
  new PairHandler(PairHandlerTypes.UniswapV2, PAIR_UNISWAP_V2_OHM_LUSD_V2),
]);
PAIR_HANDLER.set(ERC20_TRIBE, [
  new PairHandler(PairHandlerTypes.UniswapV2, PAIR_UNISWAP_V2_TRIBE_ETH),
]);
PAIR_HANDLER.set(ERC20_WBTC, [
  new PairHandler(PairHandlerTypes.UniswapV2, PAIR_UNISWAP_V2_ETH_WBTC),
]);
PAIR_HANDLER.set(ERC20_WETH, [
  new PairHandler(PairHandlerTypes.UniswapV2, PAIR_UNISWAP_V2_USDC_ETH),
  new PairHandler(PairHandlerTypes.UniswapV2, PAIR_UNISWAP_V2_OHM_ETH),
  new PairHandler(PairHandlerTypes.UniswapV2, PAIR_UNISWAP_V2_OHM_ETH_V2),
]);
PAIR_HANDLER.set(ERC20_XSUSHI, [
  new PairHandler(PairHandlerTypes.UniswapV2, PAIR_UNISWAP_V2_XSUSHI_ETH),
]);

/**
 * Returns the first handler for a liquidity pair.
 *
 * @param contractAddress the contract address to look up
 * @returns a {PairHandler} or null
 */
export const getPairHandler = (contractAddress: string): PairHandler | null => {
  if (!PAIR_HANDLER.has(contractAddress)) {
    log.debug("No pair handler for contract {}", [contractAddress]);
    return null;
  }

  const handlers = PAIR_HANDLER.get(contractAddress);
  if (!handlers.length) {
    log.debug("Empty pair handlers for contract {}", [contractAddress]);
    return null;
  }

  const handler = handlers[0];
  log.debug("Found handler pair: {}", [handler.getPair()]);
  return handler;
};

/**
 * Returns the handlers for a liquidity pair.
 *
 * @param contractAddress the contract address to look up
 * @returns Array of PairHandlers
 */
export const getPairHandlers = (contractAddress: string): PairHandler[] => {
  if (!PAIR_HANDLER.has(contractAddress)) return [];

  return PAIR_HANDLER.get(contractAddress);
};

// Wallets
/**
 * This set of wallet addresses is common across many tokens,
 * and can be used for balance lookups.
 */
export const WALLET_ADDRESSES = [
  AAVE_ALLOCATOR_V2,
  AAVE_ALLOCATOR,
  BALANCER_ALLOCATOR,
  BONDS_DEPOSIT,
  BONDS_INVERSE_DEPOSIT,
  CONVEX_ALLOCATOR1,
  CONVEX_ALLOCATOR2,
  CONVEX_ALLOCATOR3,
  CONVEX_CVX_ALLOCATOR,
  CONVEX_CVX_VL_ALLOCATOR,
  CROSS_CHAIN_ARBITRUM,
  CROSS_CHAIN_FANTOM,
  CROSS_CHAIN_POLYGON,
  LUSD_ALLOCATOR,
  RARI_ALLOCATOR,
  TREASURY_ADDRESS_V2,
  TREASURY_ADDRESS_V3,
  TREASURY_ADDRESS,
  VEFXS_ALLOCATOR,
];

export const ALLOCATOR_CONVEX_FRAX_CONTRACTS = [
  CONVEX_ALLOCATOR1,
  CONVEX_ALLOCATOR2,
  CONVEX_ALLOCATOR3,
];

const ALLOCATOR_ONSEN_ID = new Map<string, i32>();
ALLOCATOR_ONSEN_ID.set(ERC20_DAI, OHMDAI_ONSEN_ID);
ALLOCATOR_ONSEN_ID.set(ERC20_LUSD, OHMLUSD_ONSEN_ID);

export const ALLOCATOR_ONSEN_ID_NOT_FOUND = -1;

/**
 * Returns the ID of a given contract in the Onsen Allocator.
 *
 * @param contractAddress the contract address to look up
 * @returns a number or {ALLOCATOR_ONSEN_ID_NOT_FOUND} if not found
 */
export const getOnsenAllocatorId = (contractAddress: string): i32 => {
  if (!ALLOCATOR_ONSEN_ID.has(contractAddress)) return ALLOCATOR_ONSEN_ID_NOT_FOUND;

  return ALLOCATOR_ONSEN_ID.get(contractAddress);
};

/**
 * The Rari Allocator contract ({RARI_ALLOCATOR}) has a function
 * amountAllocated() that returns the balance of an ERC20 token.
 *
 * This map records the ID for a given token.
 */
const ALLOCATOR_RARI_ID = new Map<string, i32>();
ALLOCATOR_RARI_ID.set(ERC20_DAI, 3);
ALLOCATOR_RARI_ID.set(ERC20_TRIBE, 4);

export const ALLOCATOR_RARI_ID_NOT_FOUND = -1;
/**
 * Returns the ID of a given contract in the Rari Allocator.
 *
 * @param contractAddress the contract address to look up
 * @returns a number or {ALLOCATOR_RARI_ID_NOT_FOUND} if not found
 */
export const getRariAllocatorId = (contractAddress: string): i32 => {
  if (!ALLOCATOR_RARI_ID.has(contractAddress)) return ALLOCATOR_RARI_ID_NOT_FOUND;

  return ALLOCATOR_RARI_ID.get(contractAddress);
};

export const ALLOCATOR_LIQUITY_STABILITY_POOLS = [STABILITY_POOL];

const ALLOCATOR_LIQUITY_TOKEN_ALLOCATOR_MAP = new Map<string, string>();
ALLOCATOR_LIQUITY_TOKEN_ALLOCATOR_MAP.set(ERC20_LUSD, LUSD_ALLOCATOR);

/**
 * Returns the Liquity allocator address for the given ERC20 contract.
 *
 * @param contractAddress the contract address to look up
 * @returns Address for the corresponding allocator, or null
 */
export const getLiquityAllocator = (contractAddress: string): string | null => {
  if (!ALLOCATOR_LIQUITY_TOKEN_ALLOCATOR_MAP.has(contractAddress)) return null;

  return ALLOCATOR_LIQUITY_TOKEN_ALLOCATOR_MAP.get(contractAddress);
};

export const CONTRACT_STARTING_BLOCK_MAP = new Map<string, string>();
// CONTRACT_STARTING_BLOCK_MAP.set(DISTRIBUTOR_CONTRACT_V2, DISTRIBUTOR_CONTRACT_BLOCK_V2);
// CONTRACT_STARTING_BLOCK_MAP.set(DISTRIBUTOR_CONTRACT, DISTRIBUTOR_CONTRACT_BLOCK);
CONTRACT_STARTING_BLOCK_MAP.set(AAVE_ALLOCATOR_V2, AAVE_ALLOCATOR_V2_BLOCK);
CONTRACT_STARTING_BLOCK_MAP.set(BONDING_CALCULATOR, BONDING_CALCULATOR_BLOCK);
CONTRACT_STARTING_BLOCK_MAP.set(CIRCULATING_SUPPLY_CONTRACT, CIRCULATING_SUPPLY_CONTRACT_BLOCK);
CONTRACT_STARTING_BLOCK_MAP.set(CONVEX_ALLOCATOR1, CONVEX_ALLOCATOR1_BLOCK);
CONTRACT_STARTING_BLOCK_MAP.set(CONVEX_ALLOCATOR2, CONVEX_ALLOCATOR2_BLOCK);
CONTRACT_STARTING_BLOCK_MAP.set(CONVEX_ALLOCATOR3, CONVEX_ALLOCATOR3_BLOCK);
CONTRACT_STARTING_BLOCK_MAP.set(DAIBOND_CONTRACTS1, DAIBOND_CONTRACTS1_BLOCK);
CONTRACT_STARTING_BLOCK_MAP.set(DAIBOND_CONTRACTS2, DAIBOND_CONTRACTS2_BLOCK);
CONTRACT_STARTING_BLOCK_MAP.set(DAIBOND_CONTRACTS3, DAIBOND_CONTRACTS3_BLOCK);
CONTRACT_STARTING_BLOCK_MAP.set(ERC20_CVX_VL_V1, ERC20_CVX_VL_V1_BLOCK);
CONTRACT_STARTING_BLOCK_MAP.set(ERC20_CVX, ERC20_CVX_BLOCK);
CONTRACT_STARTING_BLOCK_MAP.set(ERC20_FXS_VE, ERC20_FXS_VE_BLOCK);
CONTRACT_STARTING_BLOCK_MAP.set(ERC20_FXS, ERC20_FXS_BLOCK);
CONTRACT_STARTING_BLOCK_MAP.set(ERC20_LUSD, ERC20_LUSD_BLOCK);
CONTRACT_STARTING_BLOCK_MAP.set(ERC20_OHM_V2, ERC20_OHM_V2_BLOCK);
CONTRACT_STARTING_BLOCK_MAP.set(ERC20_SOHM_V2, ERC20_SOHM_V2_BLOCK);
CONTRACT_STARTING_BLOCK_MAP.set(ERC20_SOHM_V3, ERC20_SOHM_V3_BLOCK);
CONTRACT_STARTING_BLOCK_MAP.set(ERC20_UST, ERC20_UST_BLOCK);
CONTRACT_STARTING_BLOCK_MAP.set(ETHBOND_CONTRACT1, ETHBOND_CONTRACT1_BLOCK);
CONTRACT_STARTING_BLOCK_MAP.set(FRAXBOND_CONTRACT1, FRAXBOND_CONTRACT1_BLOCK);
CONTRACT_STARTING_BLOCK_MAP.set(LUSD_ALLOCATOR, LUSD_ALLOCATOR_BLOCK);
CONTRACT_STARTING_BLOCK_MAP.set(LUSDBOND_CONTRACT1, LUSDBOND_CONTRACT1_BLOCK);
CONTRACT_STARTING_BLOCK_MAP.set(OHMDAISLPBOND_CONTRACT1, OHMDAISLPBOND_CONTRACT1_BLOCK);
CONTRACT_STARTING_BLOCK_MAP.set(OHMDAISLPBOND_CONTRACT2, OHMDAISLPBOND_CONTRACT2_BLOCK);
CONTRACT_STARTING_BLOCK_MAP.set(OHMDAISLPBOND_CONTRACT3, OHMDAISLPBOND_CONTRACT3_BLOCK);
CONTRACT_STARTING_BLOCK_MAP.set(OHMDAISLPBOND_CONTRACT4, OHMDAISLPBOND_CONTRACT4_BLOCK);
CONTRACT_STARTING_BLOCK_MAP.set(OHMFRAXLPBOND_CONTRACT1, OHMFRAXLPBOND_CONTRACT1_BLOCK);
CONTRACT_STARTING_BLOCK_MAP.set(OHMFRAXLPBOND_CONTRACT2, OHMFRAXLPBOND_CONTRACT2_BLOCK);
CONTRACT_STARTING_BLOCK_MAP.set(OHMLUSDBOND_CONTRACT1, OHMLUSDBOND_CONTRACT1_BLOCK);
CONTRACT_STARTING_BLOCK_MAP.set(PAIR_UNISWAP_V2_OHM_DAI_V2, PAIR_UNISWAP_V2_OHM_DAI_V2_BLOCK);
CONTRACT_STARTING_BLOCK_MAP.set(PAIR_UNISWAP_V2_OHM_ETH_V2, PAIR_UNISWAP_V2_OHM_ETH_V2_BLOCK);
CONTRACT_STARTING_BLOCK_MAP.set(PAIR_UNISWAP_V2_OHM_ETH, PAIR_UNISWAP_V2_OHM_ETH_BLOCK);
CONTRACT_STARTING_BLOCK_MAP.set(PAIR_UNISWAP_V2_OHM_FRAX_V2, PAIR_UNISWAP_V2_OHM_FRAX_V2_BLOCK);
CONTRACT_STARTING_BLOCK_MAP.set(PAIR_UNISWAP_V2_OHM_FRAX, PAIR_UNISWAP_V2_OHM_FRAX_BLOCK);
CONTRACT_STARTING_BLOCK_MAP.set(PAIR_UNISWAP_V2_OHM_LUSD_V2, PAIR_UNISWAP_V2_OHM_LUSD_V2_BLOCK);
CONTRACT_STARTING_BLOCK_MAP.set(PAIR_UNISWAP_V3_FXS_ETH, PAIR_UNISWAP_V3_FXS_ETH_BLOCK);
CONTRACT_STARTING_BLOCK_MAP.set(RARI_ALLOCATOR, RARI_ALLOCATOR_BLOCK);
CONTRACT_STARTING_BLOCK_MAP.set(STAKING_CONTRACT_V2, STAKING_CONTRACT_V2_BLOCK);
CONTRACT_STARTING_BLOCK_MAP.set(STAKING_CONTRACT_V3, STAKING_CONTRACT_V3_BLOCK);
CONTRACT_STARTING_BLOCK_MAP.set(TREASURY_ADDRESS_V2, TREASURY_ADDRESS_V2_BLOCK);
CONTRACT_STARTING_BLOCK_MAP.set(TREASURY_ADDRESS_V3, TREASURY_ADDRESS_V3_BLOCK);

const CONTRACT_NAME_MAP = new Map<string, string>();
CONTRACT_NAME_MAP.set(AAVE_ALLOCATOR_V2, "Aave Allocator V2");
CONTRACT_NAME_MAP.set(AAVE_ALLOCATOR, "Aave Allocator V1");
CONTRACT_NAME_MAP.set(BALANCER_ALLOCATOR, "Balancer Allocator");
CONTRACT_NAME_MAP.set(BONDING_CALCULATOR, "Bonding Calculator");
CONTRACT_NAME_MAP.set(BONDS_DEPOSIT, "Bond Depository");
CONTRACT_NAME_MAP.set(BONDS_INVERSE_DEPOSIT, "Bond (Inverse) Depository");
CONTRACT_NAME_MAP.set(CIRCULATING_SUPPLY_CONTRACT, "Circulating Supply");
CONTRACT_NAME_MAP.set(CONVEX_ALLOCATOR1, "Convex Allocator 1");
CONTRACT_NAME_MAP.set(CONVEX_ALLOCATOR2, "Convex Allocator 2");
CONTRACT_NAME_MAP.set(CONVEX_ALLOCATOR3, "Convex Allocator 3");
CONTRACT_NAME_MAP.set(CONVEX_CVX_ALLOCATOR, "Convex Allocator");
CONTRACT_NAME_MAP.set(CONVEX_CVX_VL_ALLOCATOR, "Convex vlCVX Allocator");
CONTRACT_NAME_MAP.set(CROSS_CHAIN_ARBITRUM, "Cross-Chain Arbitrum");
CONTRACT_NAME_MAP.set(CROSS_CHAIN_FANTOM, "Cross-Chain Fantom");
CONTRACT_NAME_MAP.set(CROSS_CHAIN_POLYGON, "Cross-Chain Polygon");
CONTRACT_NAME_MAP.set(DAIBOND_CONTRACTS1, "DAI Bond 1");
CONTRACT_NAME_MAP.set(DAIBOND_CONTRACTS2, "DAI Bond 2");
CONTRACT_NAME_MAP.set(DAIBOND_CONTRACTS3, "DAI Bond 3");
CONTRACT_NAME_MAP.set(DISTRIBUTOR_CONTRACT_V2, "Distributor V2");
CONTRACT_NAME_MAP.set(DISTRIBUTOR_CONTRACT, "Distributor");
CONTRACT_NAME_MAP.set(ERC20_ADAI, "aDAI");
CONTRACT_NAME_MAP.set(ERC20_CRV_3POOL, "Curve 3Pool");
CONTRACT_NAME_MAP.set(ERC20_CRV, "CRV");
CONTRACT_NAME_MAP.set(ERC20_CVX_CRV, "cvxCRV");
CONTRACT_NAME_MAP.set(ERC20_CVX_FXS, "cvxFXS");
CONTRACT_NAME_MAP.set(ERC20_CVX_VL_V1, "vlCVX V1");
CONTRACT_NAME_MAP.set(ERC20_CVX_VL_V2, "vlCVX V2");
CONTRACT_NAME_MAP.set(ERC20_CVX, "CVX");
CONTRACT_NAME_MAP.set(ERC20_DAI, "DAI");
CONTRACT_NAME_MAP.set(ERC20_FEI, "FEI");
CONTRACT_NAME_MAP.set(ERC20_FRAX, "FRAX");
CONTRACT_NAME_MAP.set(ERC20_FXS_VE, "veFXS");
CONTRACT_NAME_MAP.set(ERC20_FXS, "FXS");
CONTRACT_NAME_MAP.set(ERC20_LUSD, "LUSD");
CONTRACT_NAME_MAP.set(ERC20_OHM_V1, "OHM V1");
CONTRACT_NAME_MAP.set(ERC20_OHM_V2, "OHM V2");
CONTRACT_NAME_MAP.set(ERC20_SOHM_V1, "sOHM V1");
CONTRACT_NAME_MAP.set(ERC20_SOHM_V2, "sOHM V2");
CONTRACT_NAME_MAP.set(ERC20_SOHM_V3, "sOHM V3");
CONTRACT_NAME_MAP.set(ERC20_TRIBE, "TRIBE");
CONTRACT_NAME_MAP.set(ERC20_USDC, "USDC");
CONTRACT_NAME_MAP.set(ERC20_UST, "UST");
CONTRACT_NAME_MAP.set(ERC20_WBTC, "wBTC");
CONTRACT_NAME_MAP.set(ERC20_WETH, "wETH");
CONTRACT_NAME_MAP.set(ERC20_XSUSHI, "xSUSHI");
CONTRACT_NAME_MAP.set(ETHBOND_CONTRACT1, "ETH Bond 1");
CONTRACT_NAME_MAP.set(FRAXBOND_CONTRACT1, "FRAX Bond 1");
CONTRACT_NAME_MAP.set(LUSD_ALLOCATOR, "LUSD Allocator");
CONTRACT_NAME_MAP.set(LUSDBOND_CONTRACT1, "LUSD Bond 1");
CONTRACT_NAME_MAP.set(OHMDAISLPBOND_CONTRACT1, "OHM-DAI SLP Bond 1");
CONTRACT_NAME_MAP.set(OHMDAISLPBOND_CONTRACT2, "OHM-DAI SLP Bond 2");
CONTRACT_NAME_MAP.set(OHMDAISLPBOND_CONTRACT3, "OHM-DAI SLP Bond 3");
CONTRACT_NAME_MAP.set(OHMDAISLPBOND_CONTRACT4, "OHM-DAI SLP Bond 4");
CONTRACT_NAME_MAP.set(OHMFRAXLPBOND_CONTRACT1, "OHM-FRAX Bond 1");
CONTRACT_NAME_MAP.set(OHMFRAXLPBOND_CONTRACT2, "OHM-FRAX Bond 2");
CONTRACT_NAME_MAP.set(OHMLUSDBOND_CONTRACT1, "OHM-LUSD Bond 1");
CONTRACT_NAME_MAP.set(ONSEN_ALLOCATOR, "Onsen Allocator");
CONTRACT_NAME_MAP.set(PAIR_UNISWAP_V2_OHM_DAI_V2, "OHM-DAI Pair V2");
CONTRACT_NAME_MAP.set(PAIR_UNISWAP_V2_OHM_DAI, "OHM-DAI Pair V1");
CONTRACT_NAME_MAP.set(PAIR_UNISWAP_V2_OHM_ETH_V2, "OHM-ETH Pair V2");
CONTRACT_NAME_MAP.set(PAIR_UNISWAP_V2_OHM_ETH, "OHM-ETH Pair");
CONTRACT_NAME_MAP.set(PAIR_UNISWAP_V2_OHM_FRAX_V2, "OHM-FRAX Pair V2");
CONTRACT_NAME_MAP.set(PAIR_UNISWAP_V2_OHM_FRAX, "OHM-FRAX Pair");
CONTRACT_NAME_MAP.set(PAIR_UNISWAP_V2_OHM_LUSD_V2, "OHM-LUSD Pair V2");
CONTRACT_NAME_MAP.set(PAIR_UNISWAP_V2_OHM_LUSD, "OHM-LUSD Pair V1");
CONTRACT_NAME_MAP.set(PAIR_UNISWAP_V3_FXS_ETH, "FXS-ETH Pair");
CONTRACT_NAME_MAP.set(RARI_ALLOCATOR, "Rari Allocator");
CONTRACT_NAME_MAP.set(STABILITY_POOL, "Liquity Stability Pool");
CONTRACT_NAME_MAP.set(STAKING_CONTRACT_V1, "Staking V1");
CONTRACT_NAME_MAP.set(STAKING_CONTRACT_V2, "Staking V2");
CONTRACT_NAME_MAP.set(STAKING_CONTRACT_V3, "Staking V3");
CONTRACT_NAME_MAP.set(TREASURY_ADDRESS_V2, "Treasury Wallet V2");
CONTRACT_NAME_MAP.set(TREASURY_ADDRESS_V3, "Treasury Wallet V3");
CONTRACT_NAME_MAP.set(TREASURY_ADDRESS, "Treasury Wallet V1");
CONTRACT_NAME_MAP.set(VEFXS_ALLOCATOR, "VeFXS Allocator");

export const getContractName = (contractAddress: string): string => {
  if (!CONTRACT_NAME_MAP.has(contractAddress)) return contractAddress;

  return CONTRACT_NAME_MAP.get(contractAddress);
};
