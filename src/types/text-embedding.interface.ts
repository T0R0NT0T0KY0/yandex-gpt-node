export interface ITextEmbeddingRequest {
	/**
	 * The identifier of the model to be used for obtaining text embeddings.
	 */
	modelUri: string;

	/**
	 * The input text for which the embedding is requested.
	 */
	text: string;
}

export interface ITextEmbeddingResponse {
	/**
	 * A repeated list of double values representing the embedding.
	 * double
	 */
	embedding: number[];

	/**
	 * The number of tokens in the input text.
	 * int64
	 */
	numTokens: string;

	/**
	 * Model version (changes with model releases).
	 */
	modelVersion: string;
}
