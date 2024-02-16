import axios, { AxiosResponse } from "axios";
import { IGenerateTextRequest, IGenerateTextResponse } from "./types/generate-text.interface";
import { ITextEmbeddingRequest, ITextEmbeddingResponse } from "./types/text-embedding.interface";
import { ITokenizeCompletionRequest, ITokenizeCompletionResponse } from "./types/tokenize-completion.interface";
import { ITokenizeRequest, ITokenizeResponse } from "./types/tokenize.interface";

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

	public async generateText(data: IGenerateTextRequest) {
		const path = "completion";

		const response = await this.post<IGenerateTextResponse>(path, data, data.completionOptions.stream);

		return response.data;
	}

	public async tokenize(data: ITokenizeRequest) {
		const path = "tokenize";

		const response = await this.post<ITokenizeResponse>(path, data);

		return response.data;
	}

	public async tokenizeCompletion(data: ITokenizeCompletionRequest) {
		const path = "tokenizeCompletion";

		const response = await this.post<ITokenizeCompletionResponse>(path, data);

		return response.data;
	}

	public async textEmbedding(data: ITextEmbeddingRequest) {
		const path = "textEmbedding";

		const response = await this.post<ITextEmbeddingResponse>(path, data);

		return response.data;
	}

	getFolderId(): string {
		return this.FOLDER_ID;
	}
}
