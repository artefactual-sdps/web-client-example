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
 * submit_not_available_response_body result type (default view)
 * @export
 * @interface BatchSubmitNotAvailableResponseBody
 */
export interface BatchSubmitNotAvailableResponseBody {
    /**
     * Is the error a server-side fault?
     * @type {boolean}
     * @memberof BatchSubmitNotAvailableResponseBody
     */
    fault: boolean;
    /**
     * ID is a unique identifier for this particular occurrence of the problem.
     * @type {string}
     * @memberof BatchSubmitNotAvailableResponseBody
     */
    id: string;
    /**
     * Message is a human-readable explanation specific to this occurrence of the problem.
     * @type {string}
     * @memberof BatchSubmitNotAvailableResponseBody
     */
    message: string;
    /**
     * Name is the name of this class of errors.
     * @type {string}
     * @memberof BatchSubmitNotAvailableResponseBody
     */
    name: string;
    /**
     * Is the error temporary?
     * @type {boolean}
     * @memberof BatchSubmitNotAvailableResponseBody
     */
    temporary: boolean;
    /**
     * Is the error a timeout?
     * @type {boolean}
     * @memberof BatchSubmitNotAvailableResponseBody
     */
    timeout: boolean;
}

/**
 * Check if a given object implements the BatchSubmitNotAvailableResponseBody interface.
 */
export function instanceOfBatchSubmitNotAvailableResponseBody(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "fault" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "message" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "temporary" in value;
    isInstance = isInstance && "timeout" in value;

    return isInstance;
}

export function BatchSubmitNotAvailableResponseBodyFromJSON(json: any): BatchSubmitNotAvailableResponseBody {
    return BatchSubmitNotAvailableResponseBodyFromJSONTyped(json, false);
}

export function BatchSubmitNotAvailableResponseBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): BatchSubmitNotAvailableResponseBody {
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

export function BatchSubmitNotAvailableResponseBodyToJSON(value?: BatchSubmitNotAvailableResponseBody | null): any {
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

