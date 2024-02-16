import { AlternativeStatus } from "./enums";
import { Message } from "./message";


export type Alternative = {
	/**
	 * A message containing the content of the alternative.
	 * A message object representing a wrapper over the inputs and outputs of the completion model.
	 */
	message: Message;

	/**
	 * The generation status of the alternative
	 */
	status: AlternativeStatus;
}
