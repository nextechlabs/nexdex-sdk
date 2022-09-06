import invariant from 'tiny-invariant'
import { ChainId } from '../constants'
import { validateAndParseAddress } from '../utils'
import { Currency } from './currency'

/**
 * Represents an ERC20 token with a unique address and some metadata.
 */
export class Token extends Currency {
  public readonly chainId: ChainId
  public readonly address: string
  public readonly projectLink?: string

  public constructor(
    chainId: ChainId,
    address: string,
    decimals: number,
    symbol?: string,
    name?: string,
    projectLink?: string
  ) {
    super(decimals, symbol, name)
    this.chainId = chainId
    this.address = validateAndParseAddress(address)
    this.projectLink = projectLink
  }

  /**
   * Returns true if the two tokens are equivalent, i.e. have the same chainId and address.
   * @param other other token to compare
   */
  public equals(other: Token): boolean {
    // short circuit on reference equality
    if (this === other) {
      return true
    }
    return this.chainId === other.chainId && this.address === other.address
  }

  /**
   * Returns true if the address of this token sorts before the address of the other token
   * @param other other token to compare
   * @throws if the tokens have the same address
   * @throws if the tokens are on different chains
   */
  public sortsBefore(other: Token): boolean {
    invariant(this.chainId === other.chainId, 'CHAIN_IDS')
    invariant(this.address !== other.address, 'ADDRESSES')
    return this.address.toLowerCase() < other.address.toLowerCase()
  }
}

/**
 * Compares two currencies for equality
 */
export function currencyEquals(currencyA: Currency, currencyB: Currency): boolean {
  if (currencyA instanceof Token && currencyB instanceof Token) {
    return currencyA.equals(currencyB)
  } else if (currencyA instanceof Token) {
    return false
  } else if (currencyB instanceof Token) {
    return false
  } else {
    return currencyA === currencyB
  }
}

export const WETH = {
  [ChainId.AVALANCHE_MAINNET]: new Token(
    ChainId.AVALANCHE_MAINNET,
    '0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7',
    18,
    'WAVAX',
    'Wrapped AVAX',
    'https://www.avax.network/'
  ),
  [ChainId.AVALANCHE_TESTNET]: new Token(
    ChainId.AVALANCHE_TESTNET,
    '0xc865fD97b266f0aAEAd6A69381D2E9D049Daf2Cd',
    18,
    'WAVAX',
    'Wrapped AVAX',
    'https://www.avax.network/'
  ),
  // [ChainId.POLYGON_MAINNET]: new Token(
  //   ChainId.POLYGON_MAINNET,
  //   '0xa24D403B17A120392dC4B512867B7D4810A7e211',
  //   18,
  //   'WMATIC',
  //   'Wrapped MATIC',
  //   'https://www.avax.network/'
  // ),
  // [ChainId.POLYGON_TESTNET]: new Token(
  //   ChainId.POLYGON_TESTNET,
  //   '0xa24D403B17A120392dC4B512867B7D4810A7e211',
  //   18,
  //   'WMATIC',
  //   'Wrapped MATIC',
  //   'https://www.avax.network/'
  // )
}
