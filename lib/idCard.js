module.exports = function validate(id) {
  var pattern = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|[X|x])$/;

  if (!pattern.test(id)) {
    return false;
  }

  var ids = id.split('');
  var a = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
  var b = ['1', '0', 'x', '9', '8', '7', '6', '5', '4', '3', '2'];

  var sum_mod = a.reduce(function (prev, current, i) {
    return prev + current * parseInt(ids[i], 10);
  }, 0) % 11;

  return b[sum_mod] === ids[17].toString().toLowerCase();
}
