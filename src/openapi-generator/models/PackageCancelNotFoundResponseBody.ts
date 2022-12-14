/* tslint:disable */
/* eslint-disable */
/**
 * Enduro API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Package not found
 * @export
 * @interface PackageCancelNotFoundResponseBody
 */
export interface PackageCancelNotFoundResponseBody {
    /**
     * Identifier of missing package
     * @type {number}
     * @memberof PackageCancelNotFoundResponseBody
     */
    id: number;
    /**
     * Message of error
     * @type {string}
     * @memberof PackageCancelNotFoundResponseBody
     */
    message: string;
}

/**
 * Check if a given object implements the PackageCancelNotFoundResponseBody interface.
 */
export function instanceOfPackageCancelNotFoundResponseBody(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "message" in value;

    return isInstance;
}

export function PackageCancelNotFoundResponseBodyFromJSON(json: any): PackageCancelNotFoundResponseBody {
    return PackageCancelNotFoundResponseBodyFromJSONTyped(json, false);
}

export function PackageCancelNotFoundResponseBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): PackageCancelNotFoundResponseBody {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'message': json['message'],
    };
}

export function PackageCancelNotFoundResponseBodyToJSON(value?: PackageCancelNotFoundResponseBody | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'message': value.message,
    };
}

