module.exports = function validate(card) {
  var REG_LENGTH = /^\d{15,19}$/;

  if (!REG_LENGTH.test(card)) {
    return false;
  }

  return card.split('').reverse().reduce(function (prev, current, i) {
    var n = parseInt(current, 10);

    if (i % 2 === 1) {
      n *= 2;
      if (n > 9) {
        n -= 9;
      }
    }

    return prev + n;
  }, 0) % 10 === 0;
};
