"use strict";
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
function generateError(msg, code) {
    throw { msg: msg, statusCode: code };
}
var result = generateError('An error occurred!', 500);
console.log(result);
