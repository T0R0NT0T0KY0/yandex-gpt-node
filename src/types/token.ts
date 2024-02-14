export type Token = {
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
