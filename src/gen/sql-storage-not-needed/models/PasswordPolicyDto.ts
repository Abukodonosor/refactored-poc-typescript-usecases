/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PasswordPolicyDto = {
    length?: number;
    notUsername?: boolean;
    notEMail?: boolean;
    specialChars?: number;
    upperCase?: number;
    lowerCase?: number;
    digits?: number;
};
