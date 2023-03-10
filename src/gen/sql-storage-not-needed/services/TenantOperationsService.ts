/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TenantDto } from '../models/TenantDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class TenantOperationsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Return tenant definition
     * returns the tenant definition of the tenant with the specified uuid
     * @param id 
     * @returns TenantDto Returns requested tenant definition
     * @throws ApiError
     */
    public getTenantById(
id: string,
): CancelablePromise<TenantDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/tenant-management/tenants/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Bad request`,
                404: `Not found`,
            },
        });
    }

    /**
     * Update tenant definition
     * updates the tenant defintion of the tenant with the specified uuid
     * @param id 
     * @param requestBody 
     * @returns TenantDto Returns updated tenant definition
     * @throws ApiError
     */
    public updateTenant(
id: string,
requestBody: TenantDto,
): CancelablePromise<TenantDto> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/v1/tenant-management/tenants/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request`,
                404: `Not found`,
                409: `Conflict`,
            },
        });
    }

    /**
     * Delete tenant definition
     * deletes the tenant defintion of the content-analyzer with the specified uuid
     * @param id 
     * @returns TenantDto Returns deleted tenant definition
     * @throws ApiError
     */
    public deleteTenant(
id: string,
): CancelablePromise<TenantDto> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/v1/tenant-management/tenants/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Bad request`,
                404: `Not found`,
                409: `Conflict`,
            },
        });
    }

    /**
     * Return list of tenant definitions
     * returns list of tenant definitions, implements paging
     * @param limit specifys the max amount of results per page
     * @param page specifys the page, starts at page 1
     * @returns TenantDto Returns tenant list
     * @throws ApiError
     */
    public getTenantList(
limit: number,
page: number,
): CancelablePromise<Array<TenantDto>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/tenant-management/tenants',
            query: {
                'limit': limit,
                'page': page,
            },
            errors: {
                400: `Bad request`,
            },
        });
    }

    /**
     * Create tenant definition
     * Create tenant with the specified definition with an autogenerated uuid
     * @param requestBody 
     * @returns TenantDto Returns created tenant definition
     * @throws ApiError
     */
    public createTenant(
requestBody: TenantDto,
): CancelablePromise<TenantDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/tenant-management/tenants',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                409: `Conflict`,
            },
        });
    }

    /**
     * Return tenant definition
     * returns the tenant definition of the tenant with the specified name
     * @param name 
     * @returns TenantDto Returns requested tenant definition
     * @throws ApiError
     */
    public getTenantByName(
name: string,
): CancelablePromise<TenantDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/tenant-management/tenants/name/{name}',
            path: {
                'name': name,
            },
            errors: {
                400: `Bad request`,
                404: `Not found`,
            },
        });
    }

}
