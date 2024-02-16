export class DetailedYandexGPTError {
	error!: DetailedError;
}

export type DetailedError = {
	/**
	 * gRPC error code
	 * @example 3
	 */
	grpcCode: number;

	/**
	 * HTTP error code
	 * @example 400
	 */
	httpCode: number;

	/**
	 * Error message
	 */
	message: string;

	/**
	 * HTTP error status
	 * @example Bad Request
	 */
	httpStatus: string;

	/**
	 * xd
	 */
	details: unknown[];
}
