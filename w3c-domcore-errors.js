/**
 * An implementation of the standard DOMException and DOMError interfaces
 *
 * @module w3c-domcore-errors
 * @see http://www.w3.org/TR/dom/#errors
 * @see http://dom.spec.whatwg.org/#errors
 *
 * @author Alexandre Morgaut (http://github.com/AMorgaut)
 * @license MIT
 **/
 
var
    ERROR_NAMES,
    ERROR_CONSTANTS,
    errorConstantPropertiesDescriptor;



/**
 * ForEach callback used to create the property descriptors of the error constants to assign to:
 * DOMException constructor and DOMException.prototype
 *
 * @private
 * @method addErrorConstantToPropertyDescriptor
 * @param {string} constantName
 * @param {number} constantValue
 **/
function addErrorConstantToPropertyDescriptor(constantName, constantValue) {
	var
		descriptor;
	
	descriptor = {
		writable: false,
		enumerable: true,
		configurable: false,
		value: constantValue
	};
	errorConstantPropertiesDescriptor[constantName] = descriptor;
}


/**
 * First wild polyfill
 *
 * @interface Polyfill
 **/
function Polyfill() {
	if (!this.hasOwnProperty('DOMException')) {
		this.DOMException = DOMException;
	}
	if (!this.hasOwnProperty('DOMError')) {
		this.DOMError = DOMError;
	}
}


/**
 * The DOMError interface is defined as usable via a constructor in the WHATWG DOM specification
 * In browser implementations 
 *
 * @class DOMError
 * @constructor
 * @param {string} name
 * @param {string} message
 * @see http://www.w3.org/TR/dom/#domerror
 * @see http://dom.spec.whatwg.org/#domerror
 **/
function DOMError(name, message) {
    var
        errorInfos;

    errorInfos = ERROR_NAMES[name] || {};

    /**
     * @property name
     * @type DOMString
     * @default "DOMError"
     * @see http://www.w3.org/TR/dom/#dom-domerror-name
     * @see http://dom.spec.whatwg.org/#dom-domerror-name
     **/
    this.name = name || this.name || 'DOMError';

    /**
     * The "code" property is only meant to be available on DOMException objects
     * It is added here for convenience to easily compare a DOMError type with a
     * constant from the DOMException prototype.
     * In case of any concern, please create an "issue" on the repository
     *
     * @experimental
     * @property code
     * @type number
     * @default 0
     * @see http://www.w3.org/TR/dom/#dom-domexception-code
     * @see http://dom.spec.whatwg.org/#dom-domexception-code
     **/
    this.code = errorInfos.code || 0;
    
    /**
     * The "message" property is only part of the WHATWG edition of the DOMError specification
     *
     * @property message
     * @type DOMString
     * @default name
     * @see http://dev.w3.org/2006/webapi/WebIDL/#dfn-exception-message
     * @see http://http://dom.spec.whatwg.org/#dom-domerror-message
     **/
    this.message = message || this.message || errorInfos.message || this.name;

}

/**
 * @class DOMException
 * @extends Error
 * @see http://www.w3.org/TR/dom/#domexception
 * @see http://dom.spec.whatwg.org/#domexception
 **/
function DOMException(name) {
    var
        errorInfos;

    errorInfos = ERROR_NAMES[name] || {};

    /**
     * @property code
     * @type number
     * @default 0
     * @see http://www.w3.org/TR/dom/#dom-domexception-code
	 * @see http://dom.spec.whatwg.org/#dom-domexception-code
     **/
    this.code = errorInfos.code || 0;
    
    /**
     * @property message
     * @type DOMString
     * @default name
     * @see http://www.w3.org/TR/WebIDL/#dfn-exception-message
     **/
    this.message = errorInfos.message || name;

    /**
     * @property name
     * @type DOMString
     * @default name
     * @see http://www.w3.org/TR/WebIDL/#dfn-exception-name
     **/
    this.name = name;
}

DOMException.prototype = Object.create(Error.prototype);


/**
 * @private
 * @see http://www.w3.org/TR/dom/#error-names-table
 * @see http://dom.spec.whatwg.org/#error-names-table
 **/
ERROR_NAMES = {
    IndexSizeError: {
        message: "The index is not in the allowed range",
        constantName: 'INDEX_SIZE_ERR',
        code: 1
    },
    HierarchyRequestError: {
        message: "The operation would yield an incorrect node tree.",
        constantName: 'HIERARCHY_REQUEST_ERR',
        code: 3
    },
    WrongDocumentError: {
        message: "The object is in the wrong document.",
        constantName: 'WRONG_DOCUMENT_ERR',
        code: 4
    },
    InvalidCharacterError: {
        message: "The string contains invalid characters.",
        constantName: 'INVALID_CHARACTER_ERR',
        code: 5
    },
    NoModificationAllowedError: {
        message: "The object can not be modified.",
        constantName: 'NO_MODIFICATION_ALLOWED_ERR',
        code: 7
    },
    NotFoundError: {
        message: "The object can not be found here.",
        constantName: 'NOT_FOUND_ERR',
        code: 8
    },
    NotSupportedError: {
        message: "The operation is not supported.",
        constantName: 'NOT_SUPPORTED_ERR',
        code: 9
    },
    InvalidStateError: {
        message: "The object is in an invalid state.",
        constantName: 'INVALID_STATE_ERR',
        code: 11
    },
    "SyntaxError": {
        message: "The string did not match the expected pattern",
        constantName: 'SYNTAX_ERR',
        code: 12
    },
    InvalidModificationError: {
        message: "The object can not be modified in this way",
        constantName: 'INVALID_MODIFICATION_ERR',
        code: 13
    },
    NamespaceError: {
        message: "The operation is not allowed by Namespaces in XML.",
        constantName: 'NAMESPACE_ERR',
        code: 14
    },
    InvalidAccessError: {
        message: "The object does not support the operation or argument.",
        constantName: 'INVALID_ACCESS_ERR',
        code: 15
    },
    SecurityError: {
        message: "The operation is insecure.",
        constantName: 'SECURITY_ERR',
        code: 18
    },
    NetworkError: {
        message: "A network error occurred.",
        constantName: 'NETWORK_ERR',
        code: 19
    },
    AbortError: {
        message: "The operation was aborted.",
        constantName: 'ABORT_ERR',
        code: 20
    },
    URLMismatchError: {
        message: "The given URL does not match another URL.",
        constantName: 'URL_MISMATCH_ERR',
        code: 21
    },
    QuotaExceededError: {
        message: "The quota has been exceeded.",
        constantName: 'QUOTA_EXCEEDED_ERR',
        code: 22
    },
    TimeoutError: {
        message: "The operation timed out.",
        constantName: 'TIMEOUT_ERR',
        code: 23
    },
    InvalidNodeTypeError: {
        message: "The supplied node is incorrect or has an incorrect ancestor for this operation.",
        constantName: 'INVALID_NODE_TYPE_ERR',
        code: 24
    },
    DataCloneError: {
        message: "The object can not be cloned.",
        constantName: 'DATA_CLONE_ERR',
        code: 25
    },
    EncodingError: {
        message: "The encoding operation (either encoded or decoding) failed."
    }
};

ERROR_CONSTANTS = [

	'', // no constant with value 0

    /**
     * IndexSizeError:
     * The index is not in the allowed range.
     *
     * examples: 
     *   // should throw an IndexSizeError
     *   var tbody = table.tbodies[-1];
     *   var row = tbody.rows[-1];
     *   context . drawImage(image, sx, sy, 0, sh, dx, dy, dw, dh) // invalid width or height
     *   gradient = context.createRadialGradient(x0, y0, -1, x1, y1, r1) // invalid radial value
     *
     * @property INDEX_SIZE_ERR
     * @type number
     * @default 1
     **/
    'INDEX_SIZE_ERR', // 1

    /**
     * Historical 
     *
     * @deprecated
     * @property DOMSTRING_SIZE_ERR
     * @type number
     * @default 2
     **/
    'DOMSTRING_SIZE_ERR', // 2 - historical

    /**
     * HierarchyRequestError:
     * The operation would yield an incorrect node tree.
     *
     * @property HIERARCHY_REQUEST_ERR
     * @type number
     * @default 3
     **/
    'HIERARCHY_REQUEST_ERR', // 3

    /**
     * WrongDocumentError:
     * The object is in the wrong document.
     *
     * @property WRONG_DOCUMENT_ERR
     * @type number
     * @default 4
     **/
    'WRONG_DOCUMENT_ERR', // 4

    /**
     * InvalidCharacterError:
     * The string contains invalid characters.
     *
     * @property INVALID_CHARACTER_ERR
     * @type number
     * @default 5
     **/
    'INVALID_CHARACTER_ERR', // 5

    /**
     * historical
     *
     * @deprecated
     * @property NO_DATA_ALLOWED_ERR
     * @type number
     * @default 6
     **/
    'NO_DATA_ALLOWED_ERR', // 6 - historical

    /**
     * NoModificationAllowedError:
     * The object can not be modified.
     *
     * @property NO_MODIFICATION_ALLOWED_ERR
     * @type number
     * @default 7
     **/
    'NO_MODIFICATION_ALLOWED_ERR', // 7

    /**
     * NotFoundError:
     * The object can not be found here.
     *
     * @property NOT_FOUND_ERR
     * @type number
     * @default 8
     **/
    'NOT_FOUND_ERR', // 8

    /**
     * NotSupportedError:
     * The operation is not supported.
     *
     * @property NOT_SUPPORTED_ERR
     * @type number
     * @default 9
     **/
    'NOT_SUPPORTED_ERR', // 9

    /**
     * Historical
     *
     * @deprecated
     * @property INUSE_ATTRIBUTE_ERR
     * @type number
     * @default 10
     **/
    'INUSE_ATTRIBUTE_ERR', // 10 - historical

    /**
     * InvalidStateError:
     * The object is in an invalid state.
     *
     * @property INVALID_STATE_ERR
     * @type number
     * @default 11
     **/
    'INVALID_STATE_ERR', // 11

    /**
     * SyntaxError
     * The string did not match the expected pattern.
     *
     * @property SYNTAX_ERR
     * @type number
     * @default 12
     **/
    'SYNTAX_ERR', // 12

    /**
     * InvalidModificationError:
     * The object can not be modified in this way.
     *
     * @property INVALID_MODIFICATION_ERR
     * @type number
     * @default 13
     **/
    'INVALID_MODIFICATION_ERR', // 13

    /**
     * NamespaceError:
     * The operation is not allowed by Namespaces in XML.
     *
     * @property NAMESPACE_ERR
     * @type number
     * @default 14
     **/
    'NAMESPACE_ERR', // 14

    /**
     * InvalidAccessError
     * The object does not support the operation or argument.
     *
     * @property INVALID_ACCESS_ERR
     * @type number
     * @default 15
     **/
    'INVALID_ACCESS_ERR', // 15

    /**
     * Historical
     *
     * @deprecated
     * @property VALIDATION_ERR
     * @type number
     * @default 16
     **/
    'VALIDATION_ERR', // 16 - historical

    /**
     * Historical
     *
     * @deprecated use TypeError instead
     * @property TYPE_MISMATCH_ERR
     * @type number
     * @default 17
     **/
    'TYPE_MISMATCH_ERR', // 17 - historical, use TypeError instead

    /**
     * SecurityError:
     * The operation is insecure.
     *
     * @property SECURITY_ERR
     * @type number
     * @default 18
     **/
    'SECURITY_ERR', // 18

    /**
     * NetworkError:
     * A network error occurred.
     *
     * @property NETWORK_ERR
     * @type number
     * @default 19
     **/
    'NETWORK_ERR', // 19

    /**
     * AbortError:
     * The operation was aborted.
     *
     * @property ABORT_ERR
     * @type number
     * @default 20
     **/
    'ABORT_ERR', // 20

    /**
     * The given URL does not match another URL.
     *
     * @property URL_MISMATCH_ERR
     * @type number
     * @default 21
     **/
    'URL_MISMATCH_ERR', // 21

    /**
     * QuotaExceededError:
     * The quota has been exceeded.
     *
     * @property QUOTA_EXCEEDED_ERR
     * @type number
     * @default 22
     **/
    'QUOTA_EXCEEDED_ERR', // 22

    /**
     * TimedoutError:
     * The operation timed out.
     *
     * @property TIMEOUT_ERR
     * @type number
     * @default 23
     **/
    'TIMEOUT_ERR', // 23

    /**
     * InvalidNodeTypeError:
     * The supplied node is incorrect or has an incorrect ancestor for this operation.
     *
     * @property INVALID_NODE_TYPE_ERR
     * @type number
     * @default 24
     **/
    'INVALID_NODE_TYPE_ERR', // 24

    /**
     * DataCloneError
     * The object can not be cloned.
     *
     * @property DATA_CLONE_ERR
     * @type number
     * @default 25
     **/
    'DATA_CLONE_ERR' // 25
];

errorConstantPropertiesDescriptor = {};
ERROR_CONSTANTS.forEach(addErrorConstantToPropertyDescriptor);

// assign constants to the constructor
Object.defineProperties(DOMException, errorConstantPropertiesDescriptor);
// assign constants to the prototype
Object.defineProperties(DOMException.prototype, errorConstantPropertiesDescriptor);

exports.DOMException = DOMException;
exports.DOMError = DOMError;
exports.Polyfill = Polyfill;
