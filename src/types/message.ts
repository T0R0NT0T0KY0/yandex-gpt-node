import { Role } from "./enums";


export type Message = {
	/**
	 * Identifier of the message sender. Supported roles:
	 */
	role: Role;

	/**
	 * Textual content of the message.
	 */
	text: string;
}
