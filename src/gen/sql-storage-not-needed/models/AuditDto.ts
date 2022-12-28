/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TenantDto } from './TenantDto';

export type AuditDto = {
    created?: string;
    modified?: string;
    id?: string;
    tenant?: TenantDto;
    userId?: string;
    userName?: string;
    userMailAddress?: string;
    message?: string;
    microservice?: string;
    auditType?: string;
    uuid?: string;
    action?: string;
};
