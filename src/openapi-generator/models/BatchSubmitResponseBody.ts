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
 * @interface BatchSubmitResponseBody
 */
export interface BatchSubmitResponseBody {
    /**
     * 
     * @type {string}
     * @memberof BatchSubmitResponseBody
     */
    runId: string;
    /**
     * 
     * @type {string}
     * @memberof BatchSubmitResponseBody
     */
    workflowId: string;
}

export function BatchSubmitResponseBodyFromJSON(json: any): BatchSubmitResponseBody {
    return BatchSubmitResponseBodyFromJSONTyped(json, false);
}

export function BatchSubmitResponseBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): BatchSubmitResponseBody {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'runId': json['run_id'],
        'workflowId': json['workflow_id'],
    };
}

export function BatchSubmitResponseBodyToJSON(value?: BatchSubmitResponseBody | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'run_id': value.runId,
        'workflow_id': value.workflowId,
    };
}

