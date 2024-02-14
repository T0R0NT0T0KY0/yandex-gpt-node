import { Alternative } from "./alternative";
import { CompletionOptions } from "./completion-options";
import { Message } from "./message";
import { Usage } from "./usage";

export interface IGenerateTextRequest {
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

export interface IGenerateTextResponse {
	/**
	 * A list of generated completion alternatives.
	 */
	alternatives: Alternative[];

	/**
	 * A set of statistics describing the number of content tokens used by the completion model.
	 * An object representing the number of content tokens used by the completion model.
	 */
	usage: Usage;

	/**
	 * Model version (changes with model releases).
	 */
	modelVersion: string;
}
