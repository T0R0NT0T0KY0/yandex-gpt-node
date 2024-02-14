export type CompletionOptions = {
	/**
	 * Enables streaming of partially generated text
	 */
	stream: boolean;

	/**
	 * Affects creativity and randomness of responses. Should be a double number between 0 (inclusive) and 1 (inclusive).
	 * Lower values produce more straightforward responses, while higher values lead to increased creativity and randomness.
	 * Default temperature: 0.6
	 * double
	 */
	temperature: number;

	/**
	 *  The limit on the number of tokens used for single completion generation. Must be greater than zero.
	 *  The maximum allowed parameter value may depend on the model used.
	 *  int64
	 */
	maxTokens: number;
}
