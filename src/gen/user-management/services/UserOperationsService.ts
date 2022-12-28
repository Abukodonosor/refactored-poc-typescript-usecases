/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PasswordPolicyDto } from '../models/PasswordPolicyDto';
import type { UserDto } from '../models/UserDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class UserOperationsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Return user definition
     * Returns the user definition of the user with given user ID and tenant ID
     * @param tenant 
     * @param id 
     * @returns UserDto Returns requested user definition
     * @throws ApiError
     */
    public getUserById(
tenant: string,
id: string,
): CancelablePromise<UserDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/user-management/tenants/{tenant}/users/{id}',
            path: {
                'tenant': tenant,
                'id': id,
            },
            errors: {
                400: `Bad request`,
                404: `Not found`,
            },
        });
    }

    /**
     * Update user definition
     * Update the user defintion of the user with given user ID and tenant ID
     * @param tenant 
     * @param id 
     * @param requestBody 
     * @param requestByUserAdministrator 
     * @returns UserDto Returns updated user definition
     * @throws ApiError
     */
    public updateUser(
tenant: string,
id: string,
requestBody: UserDto,
requestByUserAdministrator: boolean = false,
): CancelablePromise<UserDto> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/v1/user-management/tenants/{tenant}/users/{id}',
            path: {
                'tenant': tenant,
                'id': id,
            },
            headers: {
                'requestByUserAdministrator': requestByUserAdministrator,
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
     * Delete user definition
     * Delete the user defintion of the user with given user ID and tenant ID
     * @param tenant 
     * @param id 
     * @param requestByUserAdministrator 
     * @returns UserDto Returns deleted user definition
     * @throws ApiError
     */
    public deleteUser(
tenant: string,
id: string,
requestByUserAdministrator: boolean = false,
): CancelablePromise<UserDto> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/v1/user-management/tenants/{tenant}/users/{id}',
            path: {
                'tenant': tenant,
                'id': id,
            },
            headers: {
                'requestByUserAdministrator': requestByUserAdministrator,
            },
            errors: {
                400: `Bad request`,
                404: `Not found`,
                409: `Conflict`,
            },
        });
    }

    /**
     * Update user password
     * Update password of the user with given user ID and tenant ID. If not otherwise specified, the new password is by default a one-time-password.
     * @param id 
     * @param password 
     * @param tenant 
     * @param oneTimePassword 
     * @returns any Returns nothing
     * @throws ApiError
     */
    public changeUserPassword(
id: string,
password: string,
tenant: string,
oneTimePassword: boolean = true,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/v1/user-management/tenants/{tenant}/users/{id}/password',
            path: {
                'id': id,
                'tenant': tenant,
            },
            headers: {
                'Password': password,
                'One-Time-Password': oneTimePassword,
            },
            errors: {
                400: `Bad request`,
            },
        });
    }

    /**
     * Update user password
     * Update user password of the user with given Keycloak ID. If not otherwise specified, the new password is by default a one-time-password.
     * @param keycloak 
     * @param password 
     * @param oneTimePassword 
     * @returns any Returns nothing
     * @throws ApiError
     */
    public changeUserPasswordByKeycloakId(
keycloak: string,
password: string,
oneTimePassword: boolean = true,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/v1/user-management/tenants/{tenant}/users/keycloak/{keycloak}/password',
            path: {
                'keycloak': keycloak,
            },
            headers: {
                'Password': password,
                'One-Time-Password': oneTimePassword,
            },
            errors: {
                400: `Bad request`,
            },
        });
    }

    /**
     * Get current password policy
     * Get currently set password policy.
     * @returns PasswordPolicyDto Returns current password policy
     * @throws ApiError
     */
    public getCurrentPasswordPolicy(): CancelablePromise<PasswordPolicyDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/password-policy-management/password-policy',
            errors: {
                400: `Bad request`,
            },
        });
    }

    /**
     * Update global password password
     * Update global password password.
     * @param requestBody 
     * @returns PasswordPolicyDto Returns updated password policy
     * @throws ApiError
     */
    public updatePasswordPolicy(
requestBody: PasswordPolicyDto,
): CancelablePromise<PasswordPolicyDto> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/v1/password-policy-management/password-policy',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request`,
            },
        });
    }

    /**
     * Return list of user definitions
     * Returns a paged list of user definitions for tenant with given ID
     * @param tenant 
     * @param limit specifys the max amount of results per page
     * @param page specifys the page, starts at page 1
     * @param role 
     * @returns UserDto Returns user list
     * @throws ApiError
     */
    public getUserListForTenantId(
tenant: string,
limit: number,
page: number,
role?: string,
): CancelablePromise<Array<UserDto>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/user-management/tenants/{tenant}/users',
            path: {
                'tenant': tenant,
            },
            query: {
                'role': role,
                'limit': limit,
                'page': page,
            },
            errors: {
                400: `Bad request`,
            },
        });
    }

    /**
     * Create user definition
     * Create a user with the specified definition and an autogenerated user ID for tenant with given tenant ID
     * @param tenant 
     * @param password 
     * @param requestBody 
     * @param oneTimePassword 
     * @param requestByUserAdministrator 
     * @returns UserDto Returns created user definition
     * @throws ApiError
     */
    public createUser(
tenant: string,
password: string,
requestBody: UserDto,
oneTimePassword: boolean = true,
requestByUserAdministrator: boolean = false,
): CancelablePromise<UserDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/user-management/tenants/{tenant}/users',
            path: {
                'tenant': tenant,
            },
            headers: {
                'Password': password,
                'One-Time-Password': oneTimePassword,
                'requestByUserAdministrator': requestByUserAdministrator,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request`,
                409: `Conflict`,
            },
        });
    }

    /**
     * Return user definition of the user with given username and tenant ID
     * Return the user definition of the user with given username and tenant ID
     * @param tenant 
     * @param name 
     * @returns UserDto Returns requested user definition
     * @throws ApiError
     */
    public getUserByUsernameForTenantId(
tenant: string,
name: string,
): CancelablePromise<UserDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/user-management/tenants/{tenant}/users/username/{name}',
            path: {
                'tenant': tenant,
                'name': name,
            },
            errors: {
                400: `Bad request`,
                404: `Not found`,
            },
        });
    }

    /**
     * Return user definition
     * Returns the user definition of the user with given Keycloak ID
     * @param keycloak 
     * @returns UserDto Returns requested user definition
     * @throws ApiError
     */
    public getUserByKeycloakId(
keycloak: string,
): CancelablePromise<UserDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/user-management/tenants/{tenant}/users/keycloak/{keycloak}',
            path: {
                'keycloak': keycloak,
            },
            errors: {
                400: `Bad request`,
                404: `Not found`,
            },
        });
    }

}
