import { Token } from "./token";

export interface ITokenizeRequest {
	/**
	 * The identifier of the model to be used for tokenization.
	 */
	modelUri: string;

	/**
	 * Text to be tokenized.
	 */
	text: string;
}

export interface ITokenizeResponse {
	/**
	 * A list of tokens obtained from tokenization.
	 */
	tokens: Token[];

	/**
	 * Model version (changes with model releases).
	 */
	modelVersion: string;
}
