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

// setup semantic ui
if (!window.localStorage) {
  window.localStorage = { debug: false };
}


const mockedWarn = jest.spyOn(global.console, 'warn'); 
const mockedError = jest.spyOn(global.console, 'error'); 

// override it
const itOrig = it;
it = function(name, impl) {
  mockedWarn.mockReset();
  mockedError.mockReset();
  itOrig.call(this, name, () => {
    const result = impl();
    expect(mockedWarn).not.toBeCalled();
    expect(mockedError).not.toBeCalled();
    return result;
  });
  
}

const { Checkbox  } = require('semantic-ui-react');

