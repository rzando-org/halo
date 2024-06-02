/* tslint:disable */
/* eslint-disable */
/**
 * Halo Next API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError, operationServerMap } from '../base';
// @ts-ignore
import { Attachment } from '../models';
// @ts-ignore
import { AttachmentList } from '../models';
/**
 * ApiConsoleHaloRunV1alpha1AttachmentApi - axios parameter creator
 * @export
 */
export const ApiConsoleHaloRunV1alpha1AttachmentApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {number} [page] Page number. Default is 0.
         * @param {number} [size] Size number. Default is 0.
         * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
         * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
         * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
         * @param {boolean} [ungrouped] Filter attachments without group. This parameter will ignore group parameter.
         * @param {string} [keyword] Keyword for searching.
         * @param {Array<string>} [accepts] Acceptable media types.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        searchAttachments: async (page?: number, size?: number, labelSelector?: Array<string>, fieldSelector?: Array<string>, sort?: Array<string>, ungrouped?: boolean, keyword?: string, accepts?: Array<string>, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/apis/api.console.halo.run/v1alpha1/attachments`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication BasicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication BearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (size !== undefined) {
                localVarQueryParameter['size'] = size;
            }

            if (labelSelector) {
                localVarQueryParameter['labelSelector'] = labelSelector;
            }

            if (fieldSelector) {
                localVarQueryParameter['fieldSelector'] = fieldSelector;
            }

            if (sort) {
                localVarQueryParameter['sort'] = sort;
            }

            if (ungrouped !== undefined) {
                localVarQueryParameter['ungrouped'] = ungrouped;
            }

            if (keyword !== undefined) {
                localVarQueryParameter['keyword'] = keyword;
            }

            if (accepts) {
                localVarQueryParameter['accepts'] = accepts;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {File} file 
         * @param {string} policyName Storage policy name
         * @param {string} [groupName] The name of the group to which the attachment belongs
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        uploadAttachment: async (file: File, policyName: string, groupName?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'file' is not null or undefined
            assertParamExists('uploadAttachment', 'file', file)
            // verify required parameter 'policyName' is not null or undefined
            assertParamExists('uploadAttachment', 'policyName', policyName)
            const localVarPath = `/apis/api.console.halo.run/v1alpha1/attachments/upload`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            const localVarFormParams = new ((configuration && configuration.formDataCtor) || FormData)();

            // authentication BasicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication BearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


            if (file !== undefined) { 
                localVarFormParams.append('file', file as any);
            }
    
            if (groupName !== undefined) { 
                localVarFormParams.append('groupName', groupName as any);
            }
    
            if (policyName !== undefined) { 
                localVarFormParams.append('policyName', policyName as any);
            }
    
    
            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';
    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = localVarFormParams;

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ApiConsoleHaloRunV1alpha1AttachmentApi - functional programming interface
 * @export
 */
export const ApiConsoleHaloRunV1alpha1AttachmentApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ApiConsoleHaloRunV1alpha1AttachmentApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {number} [page] Page number. Default is 0.
         * @param {number} [size] Size number. Default is 0.
         * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
         * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
         * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
         * @param {boolean} [ungrouped] Filter attachments without group. This parameter will ignore group parameter.
         * @param {string} [keyword] Keyword for searching.
         * @param {Array<string>} [accepts] Acceptable media types.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async searchAttachments(page?: number, size?: number, labelSelector?: Array<string>, fieldSelector?: Array<string>, sort?: Array<string>, ungrouped?: boolean, keyword?: string, accepts?: Array<string>, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AttachmentList>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.searchAttachments(page, size, labelSelector, fieldSelector, sort, ungrouped, keyword, accepts, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ApiConsoleHaloRunV1alpha1AttachmentApi.searchAttachments']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {File} file 
         * @param {string} policyName Storage policy name
         * @param {string} [groupName] The name of the group to which the attachment belongs
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async uploadAttachment(file: File, policyName: string, groupName?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Attachment>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.uploadAttachment(file, policyName, groupName, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ApiConsoleHaloRunV1alpha1AttachmentApi.uploadAttachment']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * ApiConsoleHaloRunV1alpha1AttachmentApi - factory interface
 * @export
 */
export const ApiConsoleHaloRunV1alpha1AttachmentApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ApiConsoleHaloRunV1alpha1AttachmentApiFp(configuration)
    return {
        /**
         * 
         * @param {ApiConsoleHaloRunV1alpha1AttachmentApiSearchAttachmentsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        searchAttachments(requestParameters: ApiConsoleHaloRunV1alpha1AttachmentApiSearchAttachmentsRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<AttachmentList> {
            return localVarFp.searchAttachments(requestParameters.page, requestParameters.size, requestParameters.labelSelector, requestParameters.fieldSelector, requestParameters.sort, requestParameters.ungrouped, requestParameters.keyword, requestParameters.accepts, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {ApiConsoleHaloRunV1alpha1AttachmentApiUploadAttachmentRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        uploadAttachment(requestParameters: ApiConsoleHaloRunV1alpha1AttachmentApiUploadAttachmentRequest, options?: RawAxiosRequestConfig): AxiosPromise<Attachment> {
            return localVarFp.uploadAttachment(requestParameters.file, requestParameters.policyName, requestParameters.groupName, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for searchAttachments operation in ApiConsoleHaloRunV1alpha1AttachmentApi.
 * @export
 * @interface ApiConsoleHaloRunV1alpha1AttachmentApiSearchAttachmentsRequest
 */
export interface ApiConsoleHaloRunV1alpha1AttachmentApiSearchAttachmentsRequest {
    /**
     * Page number. Default is 0.
     * @type {number}
     * @memberof ApiConsoleHaloRunV1alpha1AttachmentApiSearchAttachments
     */
    readonly page?: number

    /**
     * Size number. Default is 0.
     * @type {number}
     * @memberof ApiConsoleHaloRunV1alpha1AttachmentApiSearchAttachments
     */
    readonly size?: number

    /**
     * Label selector. e.g.: hidden!&#x3D;true
     * @type {Array<string>}
     * @memberof ApiConsoleHaloRunV1alpha1AttachmentApiSearchAttachments
     */
    readonly labelSelector?: Array<string>

    /**
     * Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @type {Array<string>}
     * @memberof ApiConsoleHaloRunV1alpha1AttachmentApiSearchAttachments
     */
    readonly fieldSelector?: Array<string>

    /**
     * Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @type {Array<string>}
     * @memberof ApiConsoleHaloRunV1alpha1AttachmentApiSearchAttachments
     */
    readonly sort?: Array<string>

    /**
     * Filter attachments without group. This parameter will ignore group parameter.
     * @type {boolean}
     * @memberof ApiConsoleHaloRunV1alpha1AttachmentApiSearchAttachments
     */
    readonly ungrouped?: boolean

    /**
     * Keyword for searching.
     * @type {string}
     * @memberof ApiConsoleHaloRunV1alpha1AttachmentApiSearchAttachments
     */
    readonly keyword?: string

    /**
     * Acceptable media types.
     * @type {Array<string>}
     * @memberof ApiConsoleHaloRunV1alpha1AttachmentApiSearchAttachments
     */
    readonly accepts?: Array<string>
}

/**
 * Request parameters for uploadAttachment operation in ApiConsoleHaloRunV1alpha1AttachmentApi.
 * @export
 * @interface ApiConsoleHaloRunV1alpha1AttachmentApiUploadAttachmentRequest
 */
export interface ApiConsoleHaloRunV1alpha1AttachmentApiUploadAttachmentRequest {
    /**
     * 
     * @type {File}
     * @memberof ApiConsoleHaloRunV1alpha1AttachmentApiUploadAttachment
     */
    readonly file: File

    /**
     * Storage policy name
     * @type {string}
     * @memberof ApiConsoleHaloRunV1alpha1AttachmentApiUploadAttachment
     */
    readonly policyName: string

    /**
     * The name of the group to which the attachment belongs
     * @type {string}
     * @memberof ApiConsoleHaloRunV1alpha1AttachmentApiUploadAttachment
     */
    readonly groupName?: string
}

/**
 * ApiConsoleHaloRunV1alpha1AttachmentApi - object-oriented interface
 * @export
 * @class ApiConsoleHaloRunV1alpha1AttachmentApi
 * @extends {BaseAPI}
 */
export class ApiConsoleHaloRunV1alpha1AttachmentApi extends BaseAPI {
    /**
     * 
     * @param {ApiConsoleHaloRunV1alpha1AttachmentApiSearchAttachmentsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ApiConsoleHaloRunV1alpha1AttachmentApi
     */
    public searchAttachments(requestParameters: ApiConsoleHaloRunV1alpha1AttachmentApiSearchAttachmentsRequest = {}, options?: RawAxiosRequestConfig) {
        return ApiConsoleHaloRunV1alpha1AttachmentApiFp(this.configuration).searchAttachments(requestParameters.page, requestParameters.size, requestParameters.labelSelector, requestParameters.fieldSelector, requestParameters.sort, requestParameters.ungrouped, requestParameters.keyword, requestParameters.accepts, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {ApiConsoleHaloRunV1alpha1AttachmentApiUploadAttachmentRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ApiConsoleHaloRunV1alpha1AttachmentApi
     */
    public uploadAttachment(requestParameters: ApiConsoleHaloRunV1alpha1AttachmentApiUploadAttachmentRequest, options?: RawAxiosRequestConfig) {
        return ApiConsoleHaloRunV1alpha1AttachmentApiFp(this.configuration).uploadAttachment(requestParameters.file, requestParameters.policyName, requestParameters.groupName, options).then((request) => request(this.axios, this.basePath));
    }
}
