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
 * reject_not_valid_response_body result type (default view)
 * @export
 * @interface PackageRejectNotValidResponseBody
 */
export interface PackageRejectNotValidResponseBody {
    /**
     * Is the error a server-side fault?
     * @type {boolean}
     * @memberof PackageRejectNotValidResponseBody
     */
    fault: boolean;
    /**
     * ID is a unique identifier for this particular occurrence of the problem.
     * @type {string}
     * @memberof PackageRejectNotValidResponseBody
     */
    id: string;
    /**
     * Message is a human-readable explanation specific to this occurrence of the problem.
     * @type {string}
     * @memberof PackageRejectNotValidResponseBody
     */
    message: string;
    /**
     * Name is the name of this class of errors.
     * @type {string}
     * @memberof PackageRejectNotValidResponseBody
     */
    name: string;
    /**
     * Is the error temporary?
     * @type {boolean}
     * @memberof PackageRejectNotValidResponseBody
     */
    temporary: boolean;
    /**
     * Is the error a timeout?
     * @type {boolean}
     * @memberof PackageRejectNotValidResponseBody
     */
    timeout: boolean;
}

/**
 * Check if a given object implements the PackageRejectNotValidResponseBody interface.
 */
export function instanceOfPackageRejectNotValidResponseBody(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "fault" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "message" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "temporary" in value;
    isInstance = isInstance && "timeout" in value;

    return isInstance;
}

export function PackageRejectNotValidResponseBodyFromJSON(json: any): PackageRejectNotValidResponseBody {
    return PackageRejectNotValidResponseBodyFromJSONTyped(json, false);
}

export function PackageRejectNotValidResponseBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): PackageRejectNotValidResponseBody {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'fault': json['fault'],
        'id': json['id'],
        'message': json['message'],
        'name': json['name'],
        'temporary': json['temporary'],
        'timeout': json['timeout'],
    };
}

export function PackageRejectNotValidResponseBodyToJSON(value?: PackageRejectNotValidResponseBody | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'fault': value.fault,
        'id': value.id,
        'message': value.message,
        'name': value.name,
        'temporary': value.temporary,
        'timeout': value.timeout,
    };
}

