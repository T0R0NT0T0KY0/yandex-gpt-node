import axios, { AxiosResponse, AxiosError } from "axios";
import {
	IGenerateTextRequest,
	IGenerateTextResponse,
	IResultResponse,
	ITextEmbeddingRequest,
	ITextEmbeddingResponse,
	ITokenizeCompletionRequest,
	ITokenizeCompletionResponse,
	ITokenizeRequest,
	ITokenizeResponse,
	DetailedYandexGPTError,
	ShortYandexGPTError,
} from "./types";

export class YandexGPT {
	private readonly API_KEY: string;
	private readonly FOLDER_ID: string;
	private readonly BASE_URL = "https://llm.api.cloud.yandex.net/foundationModels/v1/";


	constructor(API_KEY: string, FOLDER_ID: string) {
		this.API_KEY = API_KEY;
		this.FOLDER_ID = FOLDER_ID;
	}

	private post<T>(path: string, data: object, stream: boolean = false): Promise<AxiosResponse<T>> {
		return axios.post<T>(`${this.BASE_URL}${path}`, data, {
			headers: {
				Authorization: `Api-Key ${this.API_KEY}`,
				"x-folder-id": this.FOLDER_ID,
			},
			responseType: stream ? "stream" : "json",
		});
	}

	public async generateText(data: IGenerateTextRequest): Promise<IResultResponse<IGenerateTextResponse>> {
		const path = "completion";

		try {
			const response = await this.post<IResultResponse<IGenerateTextResponse>>(path, data, data.completionOptions.stream);

			return response.data;
		} catch (error) {
			this.handleError(error);
		}
	}

	public async tokenize(data: ITokenizeRequest): Promise<ITokenizeResponse> {
		const path = "tokenize";

		try {
			const response = await this.post<ITokenizeResponse>(path, data);

			return response.data;
		} catch (error) {
			this.handleError(error);
		}
	}

	public async tokenizeCompletion(data: ITokenizeCompletionRequest): Promise<ITokenizeCompletionResponse> {
		const path = "tokenizeCompletion";

		try {
			const response = await this.post<ITokenizeCompletionResponse>(path, data);

			return response.data;
		} catch (error) {
			this.handleError(error);
		}
	}

	public async textEmbedding(data: ITextEmbeddingRequest): Promise<ITextEmbeddingResponse> {
		const path = "textEmbedding";

		try {
			const response = await this.post<ITextEmbeddingResponse>(path, data);

			return response.data;
		} catch (error) {
			this.handleError(error);
		}
	}

	private handleError(error: unknown): never {
		const axiosError = error as AxiosError<ShortYandexGPTError | DetailedYandexGPTError>;

		if (typeof axiosError?.response?.data?.error === "object") {
			throw axiosError.response.data.error;
		}

		if (typeof axiosError?.response?.data === "object") {
			throw axiosError.response.data;
		}

		throw error;
	}

	getFolderId(): string {
		return this.FOLDER_ID;
	}
}
