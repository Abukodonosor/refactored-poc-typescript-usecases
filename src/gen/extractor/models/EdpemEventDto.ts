/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EdpemAttributeDto } from './EdpemAttributeDto';
import type { MetadataAwareInputStreamProviderDto } from './MetadataAwareInputStreamProviderDto';

export type EdpemEventDto = {
    eventId?: string;
    parentEventId?: string;
    tenantId?: string;
    timestamp?: string;
    edpemTimestamp?: string;
    payload?: MetadataAwareInputStreamProviderDto;
    metadata?: Record<string, Record<string, string>>;
    attributes?: Record<string, Record<string, EdpemAttributeDto>>;
};
