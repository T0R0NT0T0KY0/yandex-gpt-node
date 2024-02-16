export type ShortYandexGPTError = {
	/**
	 * Error message
	 */
	error: number;

	/**
	 * error code
	 * @example 3
	 */
	code: number;

	/**
	 * Error message
	 * eq error
	 */
	message: string;

	/**
	 * xd
	 */
	details: unknown[];
}
