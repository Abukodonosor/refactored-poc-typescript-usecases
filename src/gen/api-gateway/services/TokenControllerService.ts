/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Jwt } from '../models/Jwt';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class TokenControllerService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * @param jwt 
     * @returns Jwt OK
     * @throws ApiError
     */
    public getToken(
jwt: Jwt,
): CancelablePromise<Jwt> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/token',
            query: {
                'jwt': jwt,
            },
        });
    }

}
