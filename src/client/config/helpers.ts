String.prototype.url = function(this: string) {
  let result = this.replace(/\:/g, '');
  result = result.replace(/ - /g, '-');
  result = result.replace(/\W/g, '-');
  do {
    result = result.replace(/--/g, '-');
  } while (result.indexOf('--') >= 0);
  return result.toLowerCase();
};
