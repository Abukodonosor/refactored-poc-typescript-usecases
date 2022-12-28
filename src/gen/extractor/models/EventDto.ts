/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TargetDataObjectDto } from './TargetDataObjectDto';

export type EventDto = {
    title?: string;
    description?: string;
    source?: string;
    sourceTimeStamp?: number;
    targetDataObject?: TargetDataObjectDto;
};
