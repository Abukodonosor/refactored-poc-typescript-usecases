/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Jwt = {
    tokenValue?: string;
    issuedAt?: string;
    expiresAt?: string;
    headers?: Record<string, any>;
    claims?: Record<string, any>;
    notBefore?: string;
    issuer?: string;
    audience?: Array<string>;
    id?: string;
    subject?: string;
};
