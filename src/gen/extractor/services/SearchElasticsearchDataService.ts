/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DataObjectDto } from '../models/DataObjectDto';
import type { EdpemEventDto } from '../models/EdpemEventDto';
import type { EventDto } from '../models/EventDto';
import type { RuleDto } from '../models/RuleDto';
import type { SearchCriteria } from '../models/SearchCriteria';
import type { TargetDataObjectDto } from '../models/TargetDataObjectDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class SearchElasticsearchDataService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * @param requestBody 
     * @returns DataObjectDto OK
     * @throws ApiError
     */
    public getDocumentDataObject(
requestBody: TargetDataObjectDto,
): CancelablePromise<Array<DataObjectDto>> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/documents/data-object',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param id 
     * @returns EdpemEventDto OK
     * @throws ApiError
     */
    public getDocumentById(
id: string,
): CancelablePromise<EdpemEventDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/documents/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param id 
     * @returns string OK
     * @throws ApiError
     */
    public getDocumentStateById(
id: string,
): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/documents/state/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param tenantId 
     * @returns RuleDto OK
     * @throws ApiError
     */
    public getRulesByTenant(
tenantId: string,
): CancelablePromise<Array<RuleDto>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/documents/rules/tenants/{tenantId}',
            path: {
                'tenantId': tenantId,
            },
        });
    }

    /**
     * @param id 
     * @returns EventDto OK
     * @throws ApiError
     */
    public getDocumentEventById(
id: string,
): CancelablePromise<EventDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/documents/event/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Search for data objects within a time frame
     * Searches for data objects that fit within the given time frame in epoch (milliseconds)
     * @param criterias 
     * @returns DataObjectDto Data objects found within time frame
     * @throws ApiError
     */
    public searchDataObjectByTime(
criterias: SearchCriteria,
): CancelablePromise<Array<DataObjectDto>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/documents/data-objects',
            query: {
                'criterias': criterias,
            },
            errors: {
                400: `Invalid parameters`,
            },
        });
    }

    /**
     * @param id 
     * @returns DataObjectDto OK
     * @throws ApiError
     */
    public getDocumentDataObjectById(
id: string,
): CancelablePromise<DataObjectDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/documents/data-object/{id}',
            path: {
                'id': id,
            },
        });
    }

}
