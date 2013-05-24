#W3C DOMCORE Errors#

Provides the **DOMException** and **DOMError** W3C interfaces from the section 3 (Errors) of the **DOM4** akka **DOMCore** W3C Working Draft

This is useful if you want to provide standard Errors in your own APIs or in Polyfill libraries

##How to use##


```
var DOMException = require('w3c-domcore-errors').DOMException;
var InvalidCharacterError = new DOMException('InvalidCharacterError');

function myStringHandler(data) {
    if (!REGEX_VALID_STRING.test(data)) {
        throw InvalidCharacterError;
    }
    // do the job
}
```

##Error Names##
Name                         | Description                                                                     | Legacy code exception field value (if any)
---------------------------- | ------------------------------------------------------------------------------- | -----------------------------------------
"IndexSizeError"             | The index is not in the allowed range.                                          |  INDEX_SIZE_ERR (1)                       
"HierarchyRequestError"      | The operation would yield an incorrect node tree.                               | HIERARCHY_REQUEST_ERR (3)
"WrongDocumentError"         | The object is in the wrong document.                                            | WRONG_DOCUMENT_ERR (4)
"InvalidCharacterError"      | The string contains invalid characters.                                         | INVALID_CHARACTER_ERR (5)
"NoModificationAllowedError" | The object can not be modified.                                                 | NO_MODIFICATION_ALLOWED_ERR (7)
"NotFoundError"              | The object can not be found here.                                               | NOT_FOUND_ERR (8)
"NotSupportedError"          | The operation is not supported.                                                 | NOT_SUPPORTED_ERR (9)
"InvalidStateError"          | The object is in an invalid state.                                              | INVALID_STATE_ERR (11)
"SyntaxError"                | The string did not match the expected pattern.                                  | SYNTAX_ERR (12)
"InvalidModificationError"   | The object can not be modified in this way.                                     | INVALID_MODIFICATION_ERR (13)
"NamespaceError"             | The operation is not allowed by Namespaces in XML.                              | NAMESPACE_ERR (14)
"InvalidAccessError"         | The object does not support the operation or argument.                          | INVALID_ACCESS_ERR (15)
"SecurityError"              | The operation is insecure.                                                      | SECURITY_ERR (18)
"NetworkError"               | A network error occurred.                                                       | NETWORK_ERR (19)
"AbortError"                 | The operation was aborted.                                                      | ABORT_ERR (20)
"URLMismatchError"           | The given URL does not match another URL.                                       | URL_MISMATCH_ERR (21)
"QuotaExceededError"         | The quota has been exceeded.                                                    | QUOTA_EXCEEDED_ERR (22)
"TimeoutError"               | The operation timed out.                                                        | TIMEOUT_ERR (23)
"InvalidNodeTypeError"       | The supplied node is incorrect or has an incorrect ancestor for this operation. | INVALID_NODE_TYPE_ERR (24)
"DataCloneError"             | The object can not be cloned.                                                   | DATA_CLONE_ERR (25)
"EncodingError"              | The encoding operation (either encoded or decoding) failed.                     | —

##Reference##
https://dvcs.w3.org/hg/domcore/raw-file/tip/Overview.html#domexception## License (MIT License) ##Copyright (c) 2013 Alexandre MorgautPermission is hereby granted, free of charge, to any person obtaining a copyof this software and associated documentation files (the "Software"), to dealin the Software without restriction, including without limitation the rightsto use, copy, modify, merge, publish, distribute, sublicense, and/or sellcopies of the Software, and to permit persons to whom the Software isfurnished to do so, subject to the following conditions:The above copyright notice and this permission notice shall be included inall copies or substantial portions of the Software.THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS ORIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THEAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHERLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS INTHE SOFTWARE.