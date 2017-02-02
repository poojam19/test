"# test" 
AJV npm

Ajv compiles schemas to functions and caches them in all cases (using schema stringified with json-stable-stringify as a key), so that the next time the same schema is used (not necessarily the same object instance) it won't be compiled again.

The best performance is achieved when using compiled functions returned by compile or getSchema methods (there is no additional function call).

Please note: every time validation function or ajv.validate are called errors property is overwritten. You need to copy errors array reference to another variable if you want to use it later (e.g., in the callback). See Validation errors




