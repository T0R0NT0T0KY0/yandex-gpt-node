# yandex-gpt [![Build Status](https://secure.travis-ci.org//yandex-gpt-node.png?branch=prod)](http://travis-ci.org//yandex-gpt-node)

This library provides convenient access to YandexGPT from Node.js

## Getting Started
Install the module with: `npm install yandex-gpt-node`

### Import

from:
```javascript
import { YandexGPT } from 'yandex-gpt-node';
```

require:
```javascript
const YandexGPT = require('yandex-gpt-node').YandexGPT;
```

### Start

Creating an Instance of a Class.
[quickstart](https://cloud.yandex.ru/ru/docs/yandexgpt/quickstart)
/ 
[apiKey](https://cloud.yandex.ru/ru/docs/iam/operations/api-key/create)

```javascript
const client = new YandexGPT(apiKey, folderId);
await client.createToken();
```

### Use


```javascript
const res = await client.generateText({
	modelUri: `gpt://${client.getFolderId()}/yandexgpt-lite`,
	completionOptions: {
		stream: false,
		temperature: 0.6,
		maxTokens: 100,
	},
	messages: [
		{
			role: Role.SYSTEM,
			text: "You are a smart assistant",
		},
		{
			role: Role.USER,
			text,
		},
	],
});
```

## License
Copyright (c) 2024 T0R0NT0T0KY0  
Licensed under the MIT license.
