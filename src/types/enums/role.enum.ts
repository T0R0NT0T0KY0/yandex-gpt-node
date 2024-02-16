export enum Role {
	/**
	 * special role used to define the behaviour of the completion model
	 */
	SYSTEM = "system",

	/**
	 * a role used by the model to generate responses
	 */
	ASSISTANT = "assistant",

	/**
	 * a role used by the user to describe requests to the model
	 */
	USER = "user"
}
