export type Usage = {
	/**
	 * The number of tokens in the text parts of the model input.
	 * int64
	 */
	inputTextTokens: string

	/**
	 * The total number of tokens in the generated completions.
	 * int64
	 */
	completionTokens: string

	/**
	 * The total number of tokens, including all input tokens and all generated tokens.
	 * int64
	 */
	totalTokens: string
}
