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


import * as runtime from '../runtime';
import {
    StorageAddLocationNotValidResponseBody,
    StorageAddLocationNotValidResponseBodyFromJSON,
    StorageAddLocationNotValidResponseBodyToJSON,
    StorageAddLocationRequestBody,
    StorageAddLocationRequestBodyFromJSON,
    StorageAddLocationRequestBodyToJSON,
    StorageAddLocationResponseBody,
    StorageAddLocationResponseBodyFromJSON,
    StorageAddLocationResponseBodyToJSON,
    StorageDownloadNotFoundResponseBody,
    StorageDownloadNotFoundResponseBodyFromJSON,
    StorageDownloadNotFoundResponseBodyToJSON,
    StorageMoveNotAvailableResponseBody,
    StorageMoveNotAvailableResponseBodyFromJSON,
    StorageMoveNotAvailableResponseBodyToJSON,
    StorageMoveNotFoundResponseBody,
    StorageMoveNotFoundResponseBodyFromJSON,
    StorageMoveNotFoundResponseBodyToJSON,
    StorageMoveNotValidResponseBody,
    StorageMoveNotValidResponseBodyFromJSON,
    StorageMoveNotValidResponseBodyToJSON,
    StorageMoveRequestBody,
    StorageMoveRequestBodyFromJSON,
    StorageMoveRequestBodyToJSON,
    StorageMoveStatusFailedDependencyResponseBody,
    StorageMoveStatusFailedDependencyResponseBodyFromJSON,
    StorageMoveStatusFailedDependencyResponseBodyToJSON,
    StorageMoveStatusNotFoundResponseBody,
    StorageMoveStatusNotFoundResponseBodyFromJSON,
    StorageMoveStatusNotFoundResponseBodyToJSON,
    StorageMoveStatusResponseBody,
    StorageMoveStatusResponseBodyFromJSON,
    StorageMoveStatusResponseBodyToJSON,
    StorageRejectNotAvailableResponseBody,
    StorageRejectNotAvailableResponseBodyFromJSON,
    StorageRejectNotAvailableResponseBodyToJSON,
    StorageRejectNotFoundResponseBody,
    StorageRejectNotFoundResponseBodyFromJSON,
    StorageRejectNotFoundResponseBodyToJSON,
    StorageRejectNotValidResponseBody,
    StorageRejectNotValidResponseBodyFromJSON,
    StorageRejectNotValidResponseBodyToJSON,
    StorageShowLocationNotFoundResponseBody,
    StorageShowLocationNotFoundResponseBodyFromJSON,
    StorageShowLocationNotFoundResponseBodyToJSON,
    StorageShowLocationResponseBody,
    StorageShowLocationResponseBodyFromJSON,
    StorageShowLocationResponseBodyToJSON,
    StorageShowNotFoundResponseBody,
    StorageShowNotFoundResponseBodyFromJSON,
    StorageShowNotFoundResponseBodyToJSON,
    StorageShowResponseBody,
    StorageShowResponseBodyFromJSON,
    StorageShowResponseBodyToJSON,
    StorageSubmitNotAvailableResponseBody,
    StorageSubmitNotAvailableResponseBodyFromJSON,
    StorageSubmitNotAvailableResponseBodyToJSON,
    StorageSubmitNotValidResponseBody,
    StorageSubmitNotValidResponseBodyFromJSON,
    StorageSubmitNotValidResponseBodyToJSON,
    StorageSubmitRequestBody,
    StorageSubmitRequestBodyFromJSON,
    StorageSubmitRequestBodyToJSON,
    StorageSubmitResponseBody,
    StorageSubmitResponseBodyFromJSON,
    StorageSubmitResponseBodyToJSON,
    StorageUpdateNotAvailableResponseBody,
    StorageUpdateNotAvailableResponseBodyFromJSON,
    StorageUpdateNotAvailableResponseBodyToJSON,
    StorageUpdateNotValidResponseBody,
    StorageUpdateNotValidResponseBodyFromJSON,
    StorageUpdateNotValidResponseBodyToJSON,
    StoredLocationResponse,
    StoredLocationResponseFromJSON,
    StoredLocationResponseToJSON,
} from '../models';

export interface StorageAddLocationRequest {
    addLocationRequestBody: StorageAddLocationRequestBody;
}

export interface StorageDownloadRequest {
    aipId: string;
}

export interface StorageMoveRequest {
    aipId: string;
    moveRequestBody: StorageMoveRequestBody;
}

export interface StorageMoveStatusRequest {
    aipId: string;
}

export interface StorageRejectRequest {
    aipId: string;
}

export interface StorageShowRequest {
    aipId: string;
}

export interface StorageShowLocationRequest {
    uuid: string;
}

export interface StorageSubmitRequest {
    aipId: string;
    submitRequestBody: StorageSubmitRequestBody;
}

export interface StorageUpdateRequest {
    aipId: string;
}

/**
 * StorageApi - interface
 * 
 * @export
 * @interface StorageApiInterface
 */
export interface StorageApiInterface {
    /**
     * Add a storage location
     * @summary add_location storage
     * @param {StorageAddLocationRequestBody} addLocationRequestBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StorageApiInterface
     */
    storageAddLocationRaw(requestParameters: StorageAddLocationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<StorageAddLocationResponseBody>>;

    /**
     * Add a storage location
     * add_location storage
     */
    storageAddLocation(requestParameters: StorageAddLocationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<StorageAddLocationResponseBody>;

    /**
     * Download package by AIPID
     * @summary download storage
     * @param {string} aipId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StorageApiInterface
     */
    storageDownloadRaw(requestParameters: StorageDownloadRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<string>>;

    /**
     * Download package by AIPID
     * download storage
     */
    storageDownload(requestParameters: StorageDownloadRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<string>;

    /**
     * List locations
     * @summary locations storage
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StorageApiInterface
     */
    storageLocationsRaw(initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<Array<StoredLocationResponse>>>;

    /**
     * List locations
     * locations storage
     */
    storageLocations(initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<Array<StoredLocationResponse>>;

    /**
     * Move a package to a permanent storage location
     * @summary move storage
     * @param {string} aipId 
     * @param {StorageMoveRequestBody} moveRequestBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StorageApiInterface
     */
    storageMoveRaw(requestParameters: StorageMoveRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     * Move a package to a permanent storage location
     * move storage
     */
    storageMove(requestParameters: StorageMoveRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<void>;

    /**
     * Retrieve the status of a permanent storage location move of the package
     * @summary move_status storage
     * @param {string} aipId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StorageApiInterface
     */
    storageMoveStatusRaw(requestParameters: StorageMoveStatusRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<StorageMoveStatusResponseBody>>;

    /**
     * Retrieve the status of a permanent storage location move of the package
     * move_status storage
     */
    storageMoveStatus(requestParameters: StorageMoveStatusRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<StorageMoveStatusResponseBody>;

    /**
     * Reject a package
     * @summary reject storage
     * @param {string} aipId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StorageApiInterface
     */
    storageRejectRaw(requestParameters: StorageRejectRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     * Reject a package
     * reject storage
     */
    storageReject(requestParameters: StorageRejectRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<void>;

    /**
     * Show package by AIPID
     * @summary show storage
     * @param {string} aipId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StorageApiInterface
     */
    storageShowRaw(requestParameters: StorageShowRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<StorageShowResponseBody>>;

    /**
     * Show package by AIPID
     * show storage
     */
    storageShow(requestParameters: StorageShowRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<StorageShowResponseBody>;

    /**
     * Show location by UUID
     * @summary show-location storage
     * @param {string} uuid 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StorageApiInterface
     */
    storageShowLocationRaw(requestParameters: StorageShowLocationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<StorageShowLocationResponseBody>>;

    /**
     * Show location by UUID
     * show-location storage
     */
    storageShowLocation(requestParameters: StorageShowLocationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<StorageShowLocationResponseBody>;

    /**
     * Start the submission of a package
     * @summary submit storage
     * @param {string} aipId 
     * @param {StorageSubmitRequestBody} submitRequestBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StorageApiInterface
     */
    storageSubmitRaw(requestParameters: StorageSubmitRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<StorageSubmitResponseBody>>;

    /**
     * Start the submission of a package
     * submit storage
     */
    storageSubmit(requestParameters: StorageSubmitRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<StorageSubmitResponseBody>;

    /**
     * Signal the storage service that an upload is complete
     * @summary update storage
     * @param {string} aipId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StorageApiInterface
     */
    storageUpdateRaw(requestParameters: StorageUpdateRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     * Signal the storage service that an upload is complete
     * update storage
     */
    storageUpdate(requestParameters: StorageUpdateRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<void>;

}

/**
 * 
 */
export class StorageApi extends runtime.BaseAPI implements StorageApiInterface {

    /**
     * Add a storage location
     * add_location storage
     */
    async storageAddLocationRaw(requestParameters: StorageAddLocationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<StorageAddLocationResponseBody>> {
        if (requestParameters.addLocationRequestBody === null || requestParameters.addLocationRequestBody === undefined) {
            throw new runtime.RequiredError('addLocationRequestBody','Required parameter requestParameters.addLocationRequestBody was null or undefined when calling storageAddLocation.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/storage/location`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: StorageAddLocationRequestBodyToJSON(requestParameters.addLocationRequestBody),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => StorageAddLocationResponseBodyFromJSON(jsonValue));
    }

    /**
     * Add a storage location
     * add_location storage
     */
    async storageAddLocation(requestParameters: StorageAddLocationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<StorageAddLocationResponseBody> {
        const response = await this.storageAddLocationRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Download package by AIPID
     * download storage
     */
    async storageDownloadRaw(requestParameters: StorageDownloadRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<string>> {
        if (requestParameters.aipId === null || requestParameters.aipId === undefined) {
            throw new runtime.RequiredError('aipId','Required parameter requestParameters.aipId was null or undefined when calling storageDownload.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/storage/package/{aip_id}/download`.replace(`{${"aip_id"}}`, encodeURIComponent(String(requestParameters.aipId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Download package by AIPID
     * download storage
     */
    async storageDownload(requestParameters: StorageDownloadRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<string> {
        const response = await this.storageDownloadRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List locations
     * locations storage
     */
    async storageLocationsRaw(initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<Array<StoredLocationResponse>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/storage/location`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(StoredLocationResponseFromJSON));
    }

    /**
     * List locations
     * locations storage
     */
    async storageLocations(initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<Array<StoredLocationResponse>> {
        const response = await this.storageLocationsRaw(initOverrides);
        return await response.value();
    }

    /**
     * Move a package to a permanent storage location
     * move storage
     */
    async storageMoveRaw(requestParameters: StorageMoveRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.aipId === null || requestParameters.aipId === undefined) {
            throw new runtime.RequiredError('aipId','Required parameter requestParameters.aipId was null or undefined when calling storageMove.');
        }

        if (requestParameters.moveRequestBody === null || requestParameters.moveRequestBody === undefined) {
            throw new runtime.RequiredError('moveRequestBody','Required parameter requestParameters.moveRequestBody was null or undefined when calling storageMove.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/storage/package/{aip_id}/store`.replace(`{${"aip_id"}}`, encodeURIComponent(String(requestParameters.aipId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: StorageMoveRequestBodyToJSON(requestParameters.moveRequestBody),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Move a package to a permanent storage location
     * move storage
     */
    async storageMove(requestParameters: StorageMoveRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<void> {
        await this.storageMoveRaw(requestParameters, initOverrides);
    }

    /**
     * Retrieve the status of a permanent storage location move of the package
     * move_status storage
     */
    async storageMoveStatusRaw(requestParameters: StorageMoveStatusRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<StorageMoveStatusResponseBody>> {
        if (requestParameters.aipId === null || requestParameters.aipId === undefined) {
            throw new runtime.RequiredError('aipId','Required parameter requestParameters.aipId was null or undefined when calling storageMoveStatus.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/storage/package/{aip_id}/store`.replace(`{${"aip_id"}}`, encodeURIComponent(String(requestParameters.aipId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => StorageMoveStatusResponseBodyFromJSON(jsonValue));
    }

    /**
     * Retrieve the status of a permanent storage location move of the package
     * move_status storage
     */
    async storageMoveStatus(requestParameters: StorageMoveStatusRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<StorageMoveStatusResponseBody> {
        const response = await this.storageMoveStatusRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Reject a package
     * reject storage
     */
    async storageRejectRaw(requestParameters: StorageRejectRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.aipId === null || requestParameters.aipId === undefined) {
            throw new runtime.RequiredError('aipId','Required parameter requestParameters.aipId was null or undefined when calling storageReject.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/storage/package/{aip_id}/reject`.replace(`{${"aip_id"}}`, encodeURIComponent(String(requestParameters.aipId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Reject a package
     * reject storage
     */
    async storageReject(requestParameters: StorageRejectRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<void> {
        await this.storageRejectRaw(requestParameters, initOverrides);
    }

    /**
     * Show package by AIPID
     * show storage
     */
    async storageShowRaw(requestParameters: StorageShowRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<StorageShowResponseBody>> {
        if (requestParameters.aipId === null || requestParameters.aipId === undefined) {
            throw new runtime.RequiredError('aipId','Required parameter requestParameters.aipId was null or undefined when calling storageShow.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/storage/package/{aip_id}`.replace(`{${"aip_id"}}`, encodeURIComponent(String(requestParameters.aipId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => StorageShowResponseBodyFromJSON(jsonValue));
    }

    /**
     * Show package by AIPID
     * show storage
     */
    async storageShow(requestParameters: StorageShowRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<StorageShowResponseBody> {
        const response = await this.storageShowRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Show location by UUID
     * show-location storage
     */
    async storageShowLocationRaw(requestParameters: StorageShowLocationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<StorageShowLocationResponseBody>> {
        if (requestParameters.uuid === null || requestParameters.uuid === undefined) {
            throw new runtime.RequiredError('uuid','Required parameter requestParameters.uuid was null or undefined when calling storageShowLocation.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/storage/location/{uuid}`.replace(`{${"uuid"}}`, encodeURIComponent(String(requestParameters.uuid))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => StorageShowLocationResponseBodyFromJSON(jsonValue));
    }

    /**
     * Show location by UUID
     * show-location storage
     */
    async storageShowLocation(requestParameters: StorageShowLocationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<StorageShowLocationResponseBody> {
        const response = await this.storageShowLocationRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Start the submission of a package
     * submit storage
     */
    async storageSubmitRaw(requestParameters: StorageSubmitRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<StorageSubmitResponseBody>> {
        if (requestParameters.aipId === null || requestParameters.aipId === undefined) {
            throw new runtime.RequiredError('aipId','Required parameter requestParameters.aipId was null or undefined when calling storageSubmit.');
        }

        if (requestParameters.submitRequestBody === null || requestParameters.submitRequestBody === undefined) {
            throw new runtime.RequiredError('submitRequestBody','Required parameter requestParameters.submitRequestBody was null or undefined when calling storageSubmit.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/storage/package/{aip_id}/submit`.replace(`{${"aip_id"}}`, encodeURIComponent(String(requestParameters.aipId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: StorageSubmitRequestBodyToJSON(requestParameters.submitRequestBody),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => StorageSubmitResponseBodyFromJSON(jsonValue));
    }

    /**
     * Start the submission of a package
     * submit storage
     */
    async storageSubmit(requestParameters: StorageSubmitRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<StorageSubmitResponseBody> {
        const response = await this.storageSubmitRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Signal the storage service that an upload is complete
     * update storage
     */
    async storageUpdateRaw(requestParameters: StorageUpdateRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.aipId === null || requestParameters.aipId === undefined) {
            throw new runtime.RequiredError('aipId','Required parameter requestParameters.aipId was null or undefined when calling storageUpdate.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/storage/package/{aip_id}/update`.replace(`{${"aip_id"}}`, encodeURIComponent(String(requestParameters.aipId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Signal the storage service that an upload is complete
     * update storage
     */
    async storageUpdate(requestParameters: StorageUpdateRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<void> {
        await this.storageUpdateRaw(requestParameters, initOverrides);
    }

}