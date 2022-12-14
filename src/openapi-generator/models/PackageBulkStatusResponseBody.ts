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
 * @interface PackageBulkStatusResponseBody
 */
export interface PackageBulkStatusResponseBody {
    /**
     * 
     * @type {Date}
     * @memberof PackageBulkStatusResponseBody
     */
    closedAt?: Date;
    /**
     * 
     * @type {string}
     * @memberof PackageBulkStatusResponseBody
     */
    runId?: string;
    /**
     * 
     * @type {boolean}
     * @memberof PackageBulkStatusResponseBody
     */
    running: boolean;
    /**
     * 
     * @type {Date}
     * @memberof PackageBulkStatusResponseBody
     */
    startedAt?: Date;
    /**
     * 
     * @type {string}
     * @memberof PackageBulkStatusResponseBody
     */
    status?: string;
    /**
     * 
     * @type {string}
     * @memberof PackageBulkStatusResponseBody
     */
    workflowId?: string;
}

/**
 * Check if a given object implements the PackageBulkStatusResponseBody interface.
 */
export function instanceOfPackageBulkStatusResponseBody(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "running" in value;

    return isInstance;
}

export function PackageBulkStatusResponseBodyFromJSON(json: any): PackageBulkStatusResponseBody {
    return PackageBulkStatusResponseBodyFromJSONTyped(json, false);
}

export function PackageBulkStatusResponseBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): PackageBulkStatusResponseBody {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'closedAt': !exists(json, 'closed_at') ? undefined : (new Date(json['closed_at'])),
        'runId': !exists(json, 'run_id') ? undefined : json['run_id'],
        'running': json['running'],
        'startedAt': !exists(json, 'started_at') ? undefined : (new Date(json['started_at'])),
        'status': !exists(json, 'status') ? undefined : json['status'],
        'workflowId': !exists(json, 'workflow_id') ? undefined : json['workflow_id'],
    };
}

export function PackageBulkStatusResponseBodyToJSON(value?: PackageBulkStatusResponseBody | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'closed_at': value.closedAt === undefined ? undefined : (value.closedAt.toISOString()),
        'run_id': value.runId,
        'running': value.running,
        'started_at': value.startedAt === undefined ? undefined : (value.startedAt.toISOString()),
        'status': value.status,
        'workflow_id': value.workflowId,
    };
}

