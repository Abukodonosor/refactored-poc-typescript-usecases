/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EventDto } from './EventDto';
import type { JsonNode } from './JsonNode';

export type DataObjectDto = {
    id?: string;
    type?: string;
    source?: string;
    sourceTimeStamp?: number;
    messageValueList?: JsonNode;
    eventList?: Array<EventDto>;
};
