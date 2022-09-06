import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum ChainId {
  AVALANCHE_MAINNET = 43114,
  AVALANCHE_TESTNET = 43113,
  // POLYGON_MAINNET = 137,
  // POLYGON_TESTNET = 80001
}

// avalanche mainnet: 43114
// avalanche testnet: 43113
// harmony mainnet: 1666600000
// harmont testnet: 1666700000

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

export const FACTORY_ADDRESS = {
  [ChainId.AVALANCHE_MAINNET]: '0xa8C65884a07EaC4cA1C5099D4d9A67D1AD6f5020',
  [ChainId.AVALANCHE_TESTNET]: '0x492210b0f7AC2532083b006f02ECB625FA170E74'
}
export const INIT_CODE_HASH = {
  [ChainId.AVALANCHE_MAINNET]: '0x736bdb34a46ac90836536c97ab02040e4d7e780ef4dbd0df821af9970a6e5b36',
  [ChainId.AVALANCHE_TESTNET]: '0x6a12ab4125eed84546894a598967dbe79365b37826ae55e64454875b6905a3e1'
}

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const AVAX = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const FEES_NUMERATOR = JSBI.BigInt(9975)
export const FEES_DENOMINATOR = JSBI.BigInt(10000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}
