const jwt = require("jsonwebtoken");
const config = require("../config");
const secret = config.jwt.secret;

function sign(data) {
  return jwt.sign(data, secret);
}

function verify(token) {
  return jwt.sign(token, secret);
}

const check = {
  own: function (req, owner) {
    const decoded = decodeHeader(req);
    console.log(decoded);

    if (decoded.id !== owner) {
      throw new Error("No tienes permiso para esto");
    }
  },
};

function getToken(auth) {
  if (!auth) {
    throw new Error("No viene Token");
  }

  if (auth.indexOf("Bearer ") === -1) {
    throw new Error("Formato invalido");
  }

  let token = auth.replace("Bearer ", "");
  return token;
}

function decodeHeader(req) {
  const authorization = req.headers.authorization || "";
  const token = getToken(authorization);
  const decoded = verify(token);

  req.user = decoded;

  return decoded;
}

module.exports = {
  sign,
  check,
};
