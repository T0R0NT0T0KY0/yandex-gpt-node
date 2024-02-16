import axios, { AxiosResponse } from "axios";
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

	/**
	 * @throws {DetailedYandexGPTError}
	 */
	public async generateText(data: IGenerateTextRequest): Promise<IResultResponse<IGenerateTextResponse>> {
		const path = "completion";

		const response = await this.post<IResultResponse<IGenerateTextResponse>>(path, data, data.completionOptions.stream);

		return response.data;
	}

	/**
	 * @throws {ShortYandexGPTError}
	 */
	public async tokenize(data: ITokenizeRequest): Promise<ITokenizeResponse> {
		const path = "tokenize";

		const response = await this.post<ITokenizeResponse>(path, data);

		return response.data;
	}

	/**
	 * @throws {ShortYandexGPTError}
	 */
	public async tokenizeCompletion(data: ITokenizeCompletionRequest): Promise<ITokenizeCompletionResponse> {
		const path = "tokenizeCompletion";

		const response = await this.post<ITokenizeCompletionResponse>(path, data);

		return response.data;
	}

	/**
	 * @throws {ShortYandexGPTError}
	 */
	public async textEmbedding(data: ITextEmbeddingRequest): Promise<ITextEmbeddingResponse> {
		const path = "textEmbedding";

		const response = await this.post<ITextEmbeddingResponse>(path, data);

		return response.data;
	}

	getFolderId(): string {
		return this.FOLDER_ID;
	}
}
