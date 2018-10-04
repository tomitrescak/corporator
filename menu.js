const menu = require('node-menu');
const { execSync } = require('child_process');

menu
  .disableDefaultHeader()
  .addDelimiter('-', 40, 'Main Menu')
  .addItem('Generate client files', function() {
    execSync(
      './node_modules/.bin/apollo schema:download schema.json --endpoint=http://localhost:3000/graphql',
      { stdio: [0, 1, 2] }
    );
  })
  // .customHeader(function() {
  //     process.stdout.write("Hello\n");
  // })
  // .disableDefaultHeader()
  // .customPrompt(function() {
  //     process.stdout.write("\nEnter your selection:\n");
  // })
  // .disableDefaultPrompt()
  .customPrompt('Please enter number: ')
  .start();
