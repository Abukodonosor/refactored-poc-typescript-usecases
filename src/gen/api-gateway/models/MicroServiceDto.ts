/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type MicroServiceDto = {
    uri?: string;
    id?: string;
    schema?: string;
    name?: string;
    port?: number;
    host?: string;
    secure?: boolean;
    metadata?: Record<string, string>;
};
