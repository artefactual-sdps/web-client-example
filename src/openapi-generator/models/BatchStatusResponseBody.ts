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
 * 
 * @export
 * @interface BatchStatusResponseBody
 */
export interface BatchStatusResponseBody {
    /**
     * 
     * @type {string}
     * @memberof BatchStatusResponseBody
     */
    runId?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BatchStatusResponseBody
     */
    running: boolean;
    /**
     * 
     * @type {string}
     * @memberof BatchStatusResponseBody
     */
    status?: string;
    /**
     * 
     * @type {string}
     * @memberof BatchStatusResponseBody
     */
    workflowId?: string;
}

/**
 * Check if a given object implements the BatchStatusResponseBody interface.
 */
export function instanceOfBatchStatusResponseBody(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "running" in value;

    return isInstance;
}

export function BatchStatusResponseBodyFromJSON(json: any): BatchStatusResponseBody {
    return BatchStatusResponseBodyFromJSONTyped(json, false);
}

export function BatchStatusResponseBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): BatchStatusResponseBody {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'runId': !exists(json, 'run_id') ? undefined : json['run_id'],
        'running': json['running'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'workflowId': !exists(json, 'workflow_id') ? undefined : json['workflow_id'],
    };
}

export function BatchStatusResponseBodyToJSON(value?: BatchStatusResponseBody | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'run_id': value.runId,
        'running': value.running,
        'status': value.status,
        'workflow_id': value.workflowId,
    };
}

