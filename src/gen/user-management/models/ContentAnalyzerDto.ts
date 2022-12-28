/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MandatoryFieldDto } from './MandatoryFieldDto';
import type { OptionalFieldDto } from './OptionalFieldDto';
import type { TenantDto } from './TenantDto';

export type ContentAnalyzerDto = {
    created?: string;
    modified?: string;
    id?: string;
    name?: string;
    modelPath?: string;
    tenant?: TenantDto;
    mandatoryFields?: Array<MandatoryFieldDto>;
    optionalFields?: Array<OptionalFieldDto>;
};
