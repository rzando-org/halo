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



/**
 * 
 * @export
 * @interface NotificationSpec
 */
export interface NotificationSpec {
    /**
     * 
     * @type {string}
     * @memberof NotificationSpec
     */
    'htmlContent': string;
    /**
     * 
     * @type {string}
     * @memberof NotificationSpec
     */
    'lastReadAt'?: string;
    /**
     * 
     * @type {string}
     * @memberof NotificationSpec
     */
    'rawContent': string;
    /**
     * The name of reason
     * @type {string}
     * @memberof NotificationSpec
     */
    'reason': string;
    /**
     * The name of user
     * @type {string}
     * @memberof NotificationSpec
     */
    'recipient': string;
    /**
     * 
     * @type {string}
     * @memberof NotificationSpec
     */
    'title': string;
    /**
     * 
     * @type {boolean}
     * @memberof NotificationSpec
     */
    'unread'?: boolean;
}

