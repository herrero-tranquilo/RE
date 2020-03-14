const { ValidationError } = require("./Error");
const jwt = require("jsonwebtoken");
const { promisify } = require("util");
const { randomBytes, scrypt } = require("crypto");

//Todo:수정필요

module.exports.checkProps = (data, ...checkList) => {
  return checkList.reduce((obj, key) => {
    if (
      !data.hasOwnProperty(key) ||
      data[key] === null ||
      data[key] === undefined ||
      data[key] === ""
    ) {
      throw new ValidationError(`요청 된 값을 확인해주세요`);
    } else {
      obj[key] = data[key];
      return obj;
    }
  }, {});
};
// Object.entries(obj).map(([key, value]) => {
//   return key, value;
// }, {});

module.exports.generateRandomString = (buffSize = 64, encodeType = "base64") =>
  promisify(randomBytes)(buffSize)
    .then(buff => {
      return new Promise((resolve, reject) => {
        const salt = buff.toString(encodeType);
        resolve(salt);
      });
    })
    .catch(error => {
      throw new Err(error, 500, "fail generateString");
    });

module.exports.encryptString = (
  password,
  salt,
  keyLen = 64,
  encodeType = "base64"
) =>
  promisify(scrypt)(password, salt, keyLen)
    .then(buff => {
      return new Promise((resolve, reject) => {
        const key = buff.toString(encodeType);
        resolve(key);
      });
    })
    .catch(error => {
      throw new Err(error, 500, "fail encryptString");
    });

module.exports.generateToken = email =>
  jwt.sign(
    {
      email
    },
    process.env.JWT_SECRET
  );

module.exports.isAuthenticated = (req, res, next) => {
  if (!req.user) {
    throw new Err(401, "로그인이 필요한 요청입니다.");
  } else {
    next();
  }
  return;
};