global.storyOf = function(name, props, impl) {
  describe(name, () => impl && impl(props));
};

require('jest-spy-serialiser').registerSpy();

const css = require('css');
const stringify = css.stringify;

css.stringify = ast => {
  let result = stringify(ast);
  result = `<style>\n${result}</style>`;
  return result;
};
