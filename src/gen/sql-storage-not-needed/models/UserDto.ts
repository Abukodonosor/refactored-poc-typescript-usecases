/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TenantDto } from './TenantDto';

export type UserDto = {
    created?: string;
    modified?: string;
    id?: string;
    username?: string;
    userRole?: string;
    tenant?: TenantDto;
    mailAddress?: string;
    lastLogin?: number;
    firstName?: string;
    lastName?: string;
    externalKeycloakId?: string;
};
