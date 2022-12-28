/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AuditDto } from '../models/AuditDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class AuditControllerService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Create tenant-specific audit entry
     * Create a tenant-specific audit entry
     * @param tenant 
     * @param requestBody 
     * @returns AuditDto Returns created audit entry
     * @throws ApiError
     */
    public createAudit(
tenant: string,
requestBody: AuditDto,
): CancelablePromise<AuditDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/tenants/{tenant}/audits',
            path: {
                'tenant': tenant,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Create global audit entry
     * Create a global audit entry
     * @param requestBody 
     * @returns AuditDto Returns created global audit entry
     * @throws ApiError
     */
    public createGlobalAudit(
requestBody: AuditDto,
): CancelablePromise<AuditDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/global/audits',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Return list of audits
     * Return paged list of audits for specific tenant
     * @param limit specifies the max amount of results per page
     * @param page specifies the page (starts at page 1)
     * @param tenant filters audit entries based on tenant ID
     * @param user filters audit entries based on user ID
     * @param username filters audit entries based on username
     * @param email filters audit entries based on email address
     * @param id filters audit entries based on audit ID
     * @param uuid filters audit entries based on UUID
     * @param microservice filters audit entries based on microservice
     * @param type filters audit entries based on audit type
     * @param action filters audit entries based on action
     * @param after filter audit entries created before given date
     * @param before filter audit entries created after given date
     * @returns AuditDto Returns audit list
     * @throws ApiError
     */
    public getAuditList(
limit: number,
page: number,
tenant?: string,
user?: string,
username?: string,
email?: string,
id?: string,
uuid?: string,
microservice?: string,
type?: string,
action?: string,
after?: number,
before?: number,
): CancelablePromise<Array<AuditDto>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/audits',
            query: {
                'limit': limit,
                'page': page,
                'tenant': tenant,
                'user': user,
                'username': username,
                'email': email,
                'id': id,
                'uuid': uuid,
                'microservice': microservice,
                'type': type,
                'action': action,
                'after': after,
                'before': before,
            },
            errors: {
                400: `Bad request`,
            },
        });
    }

}
