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
import type { StorageAddLocationRequestBodyConfig } from './StorageAddLocationRequestBodyConfig';
import {
    StorageAddLocationRequestBodyConfigFromJSON,
    StorageAddLocationRequestBodyConfigFromJSONTyped,
    StorageAddLocationRequestBodyConfigToJSON,
} from './StorageAddLocationRequestBodyConfig';

/**
 * 
 * @export
 * @interface StorageAddLocationRequestBody
 */
export interface StorageAddLocationRequestBody {
    /**
     * 
     * @type {StorageAddLocationRequestBodyConfig}
     * @memberof StorageAddLocationRequestBody
     */
    config?: StorageAddLocationRequestBodyConfig;
    /**
     * 
     * @type {string}
     * @memberof StorageAddLocationRequestBody
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof StorageAddLocationRequestBody
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof StorageAddLocationRequestBody
     */
    purpose: StorageAddLocationRequestBodyPurposeEnum;
    /**
     * 
     * @type {string}
     * @memberof StorageAddLocationRequestBody
     */
    source: StorageAddLocationRequestBodySourceEnum;
}


/**
 * @export
 */
export const StorageAddLocationRequestBodyPurposeEnum = {
    Unspecified: 'unspecified',
    AipStore: 'aip_store'
} as const;
export type StorageAddLocationRequestBodyPurposeEnum = typeof StorageAddLocationRequestBodyPurposeEnum[keyof typeof StorageAddLocationRequestBodyPurposeEnum];

/**
 * @export
 */
export const StorageAddLocationRequestBodySourceEnum = {
    Unspecified: 'unspecified',
    Minio: 'minio'
} as const;
export type StorageAddLocationRequestBodySourceEnum = typeof StorageAddLocationRequestBodySourceEnum[keyof typeof StorageAddLocationRequestBodySourceEnum];


/**
 * Check if a given object implements the StorageAddLocationRequestBody interface.
 */
export function instanceOfStorageAddLocationRequestBody(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "purpose" in value;
    isInstance = isInstance && "source" in value;

    return isInstance;
}

export function StorageAddLocationRequestBodyFromJSON(json: any): StorageAddLocationRequestBody {
    return StorageAddLocationRequestBodyFromJSONTyped(json, false);
}

export function StorageAddLocationRequestBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): StorageAddLocationRequestBody {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'config': !exists(json, 'config') ? undefined : StorageAddLocationRequestBodyConfigFromJSON(json['config']),
        'description': !exists(json, 'description') ? undefined : json['description'],
        'name': json['name'],
        'purpose': json['purpose'],
        'source': json['source'],
    };
}

export function StorageAddLocationRequestBodyToJSON(value?: StorageAddLocationRequestBody | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'config': StorageAddLocationRequestBodyConfigToJSON(value.config),
        'description': value.description,
        'name': value.name,
        'purpose': value.purpose,
        'source': value.source,
    };
}

