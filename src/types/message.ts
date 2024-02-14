import { Role } from "./role.enum";


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
