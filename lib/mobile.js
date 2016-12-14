module.exports = function validate(mobile) {
  var REG = /^(13[0-9]|15[012356789]|17[0-9]|18[0-9]|14[57])[0-9]{8}$/;
  return REG.test(mobile);
}

