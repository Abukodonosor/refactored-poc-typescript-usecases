/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { FetchHttpRequest } from './core/FetchHttpRequest';

import { ApiGatewayService } from './services/ApiGatewayService';
import { TokenControllerService } from './services/TokenControllerService';

type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;

export class apiGateway {

    public readonly apiGateway: ApiGatewayService;
    public readonly tokenController: TokenControllerService;

    public readonly request: BaseHttpRequest;

    constructor(config?: Partial<OpenAPIConfig>, HttpRequest: HttpRequestConstructor = FetchHttpRequest) {
        this.request = new HttpRequest({
            BASE: config?.BASE ?? 'https://localhost:8822',
            VERSION: config?.VERSION ?? '0',
            WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
            CREDENTIALS: config?.CREDENTIALS ?? 'include',
            TOKEN: config?.TOKEN,
            USERNAME: config?.USERNAME,
            PASSWORD: config?.PASSWORD,
            HEADERS: config?.HEADERS,
            ENCODE_PATH: config?.ENCODE_PATH,
        });

        this.apiGateway = new ApiGatewayService(this.request);
        this.tokenController = new TokenControllerService(this.request);
    }
}
