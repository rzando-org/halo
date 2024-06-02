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


// May contain unused imports in some cases
// @ts-ignore
import { CommentOwner } from './comment-owner';
// May contain unused imports in some cases
// @ts-ignore
import { Ref } from './ref';

/**
 * 
 * @export
 * @interface CommentSpec
 */
export interface CommentSpec {
    /**
     * 
     * @type {boolean}
     * @memberof CommentSpec
     */
    'allowNotification': boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CommentSpec
     */
    'approved': boolean;
    /**
     * 
     * @type {string}
     * @memberof CommentSpec
     */
    'approvedTime'?: string;
    /**
     * 
     * @type {string}
     * @memberof CommentSpec
     */
    'content': string;
    /**
     * 
     * @type {string}
     * @memberof CommentSpec
     */
    'creationTime'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof CommentSpec
     */
    'hidden': boolean;
    /**
     * 
     * @type {string}
     * @memberof CommentSpec
     */
    'ipAddress'?: string;
    /**
     * 
     * @type {string}
     * @memberof CommentSpec
     */
    'lastReadTime'?: string;
    /**
     * 
     * @type {CommentOwner}
     * @memberof CommentSpec
     */
    'owner': CommentOwner;
    /**
     * 
     * @type {number}
     * @memberof CommentSpec
     */
    'priority': number;
    /**
     * 
     * @type {string}
     * @memberof CommentSpec
     */
    'raw': string;
    /**
     * 
     * @type {Ref}
     * @memberof CommentSpec
     */
    'subjectRef': Ref;
    /**
     * 
     * @type {boolean}
     * @memberof CommentSpec
     */
    'top': boolean;
    /**
     * 
     * @type {string}
     * @memberof CommentSpec
     */
    'userAgent'?: string;
}
