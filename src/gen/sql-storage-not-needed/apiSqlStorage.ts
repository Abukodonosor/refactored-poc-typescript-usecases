/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { FetchHttpRequest } from './core/FetchHttpRequest';

import { AuditControllerService } from './services/AuditControllerService';
import { ContentAnalyzerOperationsService } from './services/ContentAnalyzerOperationsService';
import { TenantOperationsService } from './services/TenantOperationsService';
import { UserOperationsService } from './services/UserOperationsService';
import { UserProfileOperationsService } from './services/UserProfileOperationsService';

type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;

export class apiSqlStorage {

    public readonly auditController: AuditControllerService;
    public readonly contentAnalyzerOperations: ContentAnalyzerOperationsService;
    public readonly tenantOperations: TenantOperationsService;
    public readonly userOperations: UserOperationsService;
    public readonly userProfileOperations: UserProfileOperationsService;

    public readonly request: BaseHttpRequest;

    constructor(config?: Partial<OpenAPIConfig>, HttpRequest: HttpRequestConstructor = FetchHttpRequest) {
        this.request = new HttpRequest({
            BASE: config?.BASE ?? 'https://localhost:8899',
            VERSION: config?.VERSION ?? '0',
            WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
            CREDENTIALS: config?.CREDENTIALS ?? 'include',
            TOKEN: config?.TOKEN,
            USERNAME: config?.USERNAME,
            PASSWORD: config?.PASSWORD,
            HEADERS: config?.HEADERS,
            ENCODE_PATH: config?.ENCODE_PATH,
        });

        this.auditController = new AuditControllerService(this.request);
        this.contentAnalyzerOperations = new ContentAnalyzerOperationsService(this.request);
        this.tenantOperations = new TenantOperationsService(this.request);
        this.userOperations = new UserOperationsService(this.request);
        this.userProfileOperations = new UserProfileOperationsService(this.request);
    }
}
