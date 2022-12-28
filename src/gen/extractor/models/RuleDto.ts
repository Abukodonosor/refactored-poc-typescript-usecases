/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DataObjectDto } from './DataObjectDto';
import type { EventDto } from './EventDto';

export type RuleDto = {
    id?: string;
    type?: string;
    tenantId?: string;
    siblingPreId?: string;
    siblingPostId?: string;
    created?: number;
    modified?: number;
    children?: Array<DataObjectDto>;
    parentList?: Array<DataObjectDto>;
    eventWhiteList?: Array<string>;
    eventBlackList?: Array<string>;
    eventUnspecifiedList?: Array<string>;
    initalizeEvent?: EventDto;
};
