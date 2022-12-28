/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Jwt } from '../models/Jwt';
import type { MicroServiceDto } from '../models/MicroServiceDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ApiGatewayService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List microservices
     * List available microservices
     * @param jwt 
     * @returns MicroServiceDto List available microservices
     * @throws ApiError
     */
    public getServices(
jwt: Jwt,
): CancelablePromise<Array<MicroServiceDto>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/services',
            query: {
                'jwt': jwt,
            },
        });
    }

}
