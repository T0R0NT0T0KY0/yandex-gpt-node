import { CompletionOptions } from "../completion-options";
import { Message } from "../message";

export interface ITokenizeCompletionRequest {
	/**
	 * The identifier of the model to be used for completion generation.
	 */
	modelUri: string;

	/**
	 * Configuration options for completion generation.
	 * Defines the options for completion generation.
	 */
	completionOptions: CompletionOptions;

	/**
	 * A list of messages representing the context for the completion model.
	 */
	messages: Message[];
}

export interface ITokenizeCompletionResponse {
	/**
	 * A list of tokens obtained from tokenization.
	 */
	tokens: Token[];

	/**
	 * Model version (changes with model releases).
	 */
	modelVersion: string;
}

type Token = {
	/**
	 * An internal token identifier.
	 * int64
	 */
	id: string;

	/**
	 * The textual representation of the token.
	 */
	text: string

	/**
	 * Indicates whether the token is special or not.
	 * Special tokens may define the model's behavior and are not visible to users.
	 */
	special: boolean
}
