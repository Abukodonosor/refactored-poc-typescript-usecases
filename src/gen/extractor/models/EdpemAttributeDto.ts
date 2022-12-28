/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type EdpemAttributeDto = {
    value?: any;
    type?: EdpemAttributeDto.type;
};

export namespace EdpemAttributeDto {

    export enum type {
        KEYWORD = 'KEYWORD',
        TEXT = 'TEXT',
        LONG = 'LONG',
        INTEGER = 'INTEGER',
        SHORT = 'SHORT',
        BYTE = 'BYTE',
        DOUBLE = 'DOUBLE',
        FLOAT = 'FLOAT',
        DATE = 'DATE',
        DATE_NANOS = 'DATE_NANOS',
        BOOLEAN = 'BOOLEAN',
        BINARY = 'BINARY',
        INTEGER_RANGE = 'INTEGER_RANGE',
        FLOAT_RANGE = 'FLOAT_RANGE',
        LONG_RANGE = 'LONG_RANGE',
        DOUBLE_RANGE = 'DOUBLE_RANGE',
        DATE_RANGE = 'DATE_RANGE',
    }


}
