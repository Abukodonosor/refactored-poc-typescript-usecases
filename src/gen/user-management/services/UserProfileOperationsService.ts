/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class UserProfileOperationsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get user profile
     * Gets the user profile for the user with the specified Keycloak ID
     * @param keycloakId 
     * @returns any Returns user profile
     * @throws ApiError
     */
    public getUserProfile(
keycloakId: string,
): CancelablePromise<Record<string, any>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/profiles/users/keycloak/{keycloakId}',
            path: {
                'keycloakId': keycloakId,
            },
            errors: {
                400: `Bad request`,
                404: `Not found`,
                409: `Conflict`,
            },
        });
    }

    /**
     * Update user profile
     * Updates the user profile of the user with specified Keycloak ID with specified definition
     * @param keycloakId 
     * @param requestBody 
     * @returns any Returns updated user profile
     * @throws ApiError
     */
    public updateUserProfile(
keycloakId: string,
requestBody: string,
): CancelablePromise<Record<string, any>> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/v1/profiles/users/keycloak/{keycloakId}',
            path: {
                'keycloakId': keycloakId,
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
     * Create user profile
     * Creates a user profile for user with specified Keycloak ID of specified definition
     * @param keycloakId 
     * @param requestBody 
     * @returns any Returns created user profile
     * @throws ApiError
     */
    public createUserProfile(
keycloakId: string,
requestBody: string,
): CancelablePromise<Record<string, any>> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/profiles/users/keycloak/{keycloakId}',
            path: {
                'keycloakId': keycloakId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                409: `Conflict`,
            },
        });
    }

    /**
     * Delete user profile
     * Deletes the user profile of the user with the specified Keycloak ID
     * @param keycloakId 
     * @returns any Returns deleted user profile
     * @throws ApiError
     */
    public deleteUserProfile(
keycloakId: string,
): CancelablePromise<Record<string, any>> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/v1/profiles/users/keycloak/{keycloakId}',
            path: {
                'keycloakId': keycloakId,
            },
            errors: {
                400: `Bad request`,
                404: `Not found`,
                409: `Conflict`,
            },
        });
    }

    /**
     * Get tenant profile
     * Gets the profile for the specified tenant
     * @param tenantId 
     * @returns any Returns tenant profile
     * @throws ApiError
     */
    public getTenantProfile(
tenantId: string,
): CancelablePromise<Record<string, any>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/profiles/tenants/{tenantId}',
            path: {
                'tenantId': tenantId,
            },
            errors: {
                400: `Bad request`,
                404: `Not found`,
                409: `Conflict`,
            },
        });
    }

    /**
     * Update tenant profile
     * Updates the tenant profile of the tenant with specified ID with the specified defintion
     * @param tenantId 
     * @param requestBody 
     * @returns any Returns updated tenant profile
     * @throws ApiError
     */
    public updateTenantProfile(
tenantId: string,
requestBody: string,
): CancelablePromise<Record<string, any>> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/v1/profiles/tenants/{tenantId}',
            path: {
                'tenantId': tenantId,
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
     * Create tenant profile
     * Create tenant profile for the specified tenant of specified definition
     * @param tenantId 
     * @param requestBody 
     * @returns any Returns created tenant profile
     * @throws ApiError
     */
    public createTenantProfile(
tenantId: string,
requestBody: string,
): CancelablePromise<Record<string, any>> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/profiles/tenants/{tenantId}',
            path: {
                'tenantId': tenantId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                409: `Conflict`,
            },
        });
    }

    /**
     * Delete tenant profile
     * Deletes the tenant profile of the tenant with specified ID
     * @param tenantId 
     * @returns any Returns deleted tenant profile
     * @throws ApiError
     */
    public deleteTenantProfile(
tenantId: string,
): CancelablePromise<Record<string, any>> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/v1/profiles/tenants/{tenantId}',
            path: {
                'tenantId': tenantId,
            },
            errors: {
                400: `Bad request`,
                404: `Not found`,
                409: `Conflict`,
            },
        });
    }

    /**
     * Get global profile
     * Gets the global profile
     * @returns any Returns global profile
     * @throws ApiError
     */
    public getGlobalProfile(): CancelablePromise<Record<string, any>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/profiles/global',
            errors: {
                400: `Bad request`,
                404: `Not found`,
                409: `Conflict`,
            },
        });
    }

    /**
     * Update global profile
     * Updates the global profile with the specified definition
     * @param requestBody 
     * @returns any Returns updated global profile
     * @throws ApiError
     */
    public updateGlobalProfile(
requestBody: string,
): CancelablePromise<Record<string, any>> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/v1/profiles/global',
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
     * Create global profile
     * Create global profile
     * @param requestBody 
     * @returns any Returns created global profile
     * @throws ApiError
     */
    public createGlobalProfile(
requestBody: string,
): CancelablePromise<Record<string, any>> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/profiles/global',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                409: `Conflict`,
            },
        });
    }

    /**
     * Delete global profile
     * Deletes the global profile
     * @returns any Returns deleted global profile
     * @throws ApiError
     */
    public deleteGlobalProfile(): CancelablePromise<Record<string, any>> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/v1/profiles/global',
            errors: {
                400: `Bad request`,
                404: `Not found`,
                409: `Conflict`,
            },
        });
    }

}
