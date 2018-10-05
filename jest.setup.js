global.storyOf = function(name, props, impl) {
  describe(name, () => impl && impl(props));
};

// mock
jest.mock('apollo-link-http');

// NOTE: DISABLE THIS IF GETTING: ECONNREFUSED 127.0.0.1:9838
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
};

const React = require('react');
const Mui = ({ children, ...rest }) => React.createElement('div', { ...rest }, children);

jest.mock('react-transition-group', () => ({
  CSSTransitionGroup: ({ children }) => React.createElement(React.Fragment, {}, children),
  TransitionGroup: ({ children }) => React.createElement(React.Fragment, {}, children)
}));

// jest.mock('semantic-ui-react', () => ({
//   Checkbox: Mui,
//   Radio: Mui,
//   Input: Mui,
//   TextArea: Mui,
//   Menu: Mui,
//   MenuItem: Mui,
//   Icon: Mui,
//   Image: Mui,
//   Segment: Mui,
//   Input: Mui,
//   Header: Mui,
//   HeaderItem: Mui,
//   List: Mui,
//   ListItem: Mui,
//   Message: Mui,
//   Grid: Mui

// }));

const { Checkbox } = require('semantic-ui-react');
