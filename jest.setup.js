global.storyOf = function(name, props, impl) {
  describe(name, () => impl && impl(props));
};
