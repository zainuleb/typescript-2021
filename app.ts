function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

function generateError(msg: string, code: number): never {
  throw { msg: msg, statusCode: code };
}

const result = generateError('An error occurred!', 500);
console.log(result);
