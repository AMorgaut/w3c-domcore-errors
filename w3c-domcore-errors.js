﻿/** * An implementation of the standard DOMException and DOMError interfaces * * @module w3c-domcore-errors * @see http://www.w3.org/TR/dom/#errors * @see http://dom.spec.whatwg.org/#errors * * @author Alexandre Morgaut (http://github.com/AMorgaut) * @license MIT **/ var    ERROR_NAMES;/** * @class DOMException * @see http://www.w3.org/TR/dom/#domexception * @see http://dom.spec.whatwg.org/#domexception **/function DOMException(name) {    var        errorInfos;    errorInfos = ERROR_NAMES[name] || {};    /**     * @property code     * @type number     * @default 0     * @see http://www.w3.org/TR/dom/#dom-domexception-code	 * @see http://dom.spec.whatwg.org/#dom-domexception-code     **/    this.code = errorInfos.code || 0;        /**     * @property message     * @type DOMString     * @default name     * @see http://www.w3.org/TR/WebIDL/#dfn-exception-message     **/    this.message = errorInfos.message || name;    /**     * @property name     * @type DOMString     * @default name     * @see http://www.w3.org/TR/WebIDL/#dfn-exception-name     **/    this.name = name;}/** * @class DOMError * @see http://www.w3.org/TR/dom/#domerror * @see http://dom.spec.whatwg.org/#domerror **/function DOMError(name, message) {    var        errorInfos;    errorInfos = ERROR_NAMES[name] || {};    /**     * @property name     * @type DOMString     * @default name     * @see http://www.w3.org/TR/dom/#dom-domerror-name     * @see http://dom.spec.whatwg.org/#dom-domerror-name     **/    this.name = name;    /**     * @property code     * @type number     * @default 0     * @see http://www.w3.org/TR/dom/#dom-domexception-code     * @see http://dom.spec.whatwg.org/#dom-domexception-code     **/    this.code = errorInfos.code || 0;        /**     * @property message     * @type DOMString     * @default name     * @see http://dev.w3.org/2006/webapi/WebIDL/#dfn-exception-message     * @see http://http://dom.spec.whatwg.org/#dom-domerror-message     **/    this.message = message || errorInfos.message || name;}/** * @private * @see http://www.w3.org/TR/dom/#error-names-table * @see http://dom.spec.whatwg.org/#error-names-table **/ERROR_NAMES = {    IndexSizeError: {        message: "The index is not in the allowed range",        constantName: 'INDEX_SIZE_ERR',        code: 1    },    HierarchyRequestError: {        message: "The operation would yield an incorrect node tree.",        constantName: 'HIERARCHY_REQUEST_ERR',        code: 3    },    WrongDocumentError: {        message: "The object is in the wrong document.",        constantName: 'WRONG_DOCUMENT_ERR',        code: 4    },    InvalidCharacterError: {        message: "The string contains invalid characters.",        constantName: 'INVALID_CHARACTER_ERR',        code: 5    },    NoModificationAllowedError: {        message: "The object can not be modified.",        constantName: 'NO_MODIFICATION_ALLOWED_ERR',        code: 7    },    NotFoundError: {        message: "The object can not be found here.",        constantName: 'NOT_FOUND_ERR',        code: 8    },    NotSupportedError: {        message: "The operation is not supported.",        constantName: 'NOT_SUPPORTED_ERR',        code: 9    },    InvalidStateError: {        message: "The object is in an invalid state.",        constantName: 'INVALID_STATE_ERR',        code: 11    },    SyntaxError: {        message: "The string did not match the expected pattern",        constantName: 'SYNTAX_ERR',        code: 12    },    InvalidModificationError: {        message: "The object can not be modified in this way",        constantName: 'INVALID_MODIFICATION_ERR',        code: 13    },    NamespaceError: {        message: "The operation is not allowed by Namespaces in XML.",        constantName: 'NAMESPACE_ERR',        code: 14    },    InvalidAccessError: {        message: "The object does not support the operation or argument.",        constantName: 'INVALID_ACCESS_ERR',        code: 15    },    SecurityError: {        message: "The operation is insecure.",        constantName: 'SECURITY_ERR',        code: 18    },    NetworkError: {        message: "A network error occurred.",        constantName: 'NETWORK_ERR',        code: 19    },    AbortError: {        message: "The operation was aborted.",        constantName: 'ABORT_ERR',        code: 20    },    URLMismatchError: {        message: "The given URL does not match another URL.",        constantName: 'URL_MISMATCH_ERR',        code: 21    },    QuotaExceededError: {        message: "The quota has been exceeded.",        constantName: 'QUOTA_EXCEEDED_ERR',        code: 22    },    TimeoutError: {        message: "The operation timed out.",        constantName: 'TIMEOUT_ERR',        code: 23    },    InvalidNodeTypeError: {        message: "The supplied node is incorrect or has an incorrect ancestor for this operation.",        constantName: 'INVALID_NODE_TYPE_ERR',        code: 24    },    DataCloneError: {        message: "The object can not be cloned.",        constantName: 'DATA_CLONE_ERR',        code: 25    },    EncodingError: {        message: "The encoding operation (either encoded or decoding) failed."    }};DOMException.prototype = {    INDEX_SIZE_ERR:                 1,    DOMSTRING_SIZE_ERR:             2, // historical    HIERARCHY_REQUEST_ERR:          3,    WRONG_DOCUMENT_ERR:             4,    INVALID_CHARACTER_ERR:          5,    NO_DATA_ALLOWED_ERR:            6, // historical    NO_MODIFICATION_ALLOWED_ERR:    7,    NOT_FOUND_ERR:                  8,    NOT_SUPPORTED_ERR:              9,    INUSE_ATTRIBUTE_ERR:            10, // historical    INVALID_STATE_ERR:              11,    SYNTAX_ERR:                     12,    INVALID_MODIFICATION_ERR:       13,    NAMESPACE_ERR:                  14,    INVALID_ACCESS_ERR:             15,    VALIDATION_ERR:                 16, // historical    TYPE_MISMATCH_ERR:              17, // historical, use TypeError instead    SECURITY_ERR:                   18,    NETWORK_ERR:                    19,    ABORT_ERR:                      20,    URL_MISMATCH_ERR:               21,    QUOTA_EXCEEDED_ERR:             22,    TIMEOUT_ERR:                    23,    INVALID_NODE_TYPE_ERR:          24,    DATA_CLONE_ERR:                 25};exports.DOMException = DOMException;exports.DOMError = DOMError;