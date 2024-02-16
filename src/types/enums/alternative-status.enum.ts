export enum AlternativeStatus {
	/**
	 * Unspecified generation status
	 */
	ALTERNATIVE_STATUS_UNSPECIFIED = "ALTERNATIVE_STATUS_UNSPECIFIED",

	/**
	 * Partially generated alternative
	 */
	ALTERNATIVE_STATUS_PARTIAL = "ALTERNATIVE_STATUS_PARTIAL",

	/**
	 * Incomplete final alternative resulting from reaching the maximum allowed number of tokens
	 */
	ALTERNATIVE_STATUS_TRUNCATED_FINAL = "ALTERNATIVE_STATUS_TRUNCATED_FINAL",

	/**
	 * Final alternative generated without running into any limits
	 */
	ALTERNATIVE_STATUS_FINAL = "ALTERNATIVE_STATUS_FINAL"
}
