const menu = require('node-menu');
const { execSync } = require('child_process');

function nexec(command, prefix = './node_modules/.bin/') {
  execSync(prefix + command, { cwd: __dirname, stdio: [0, 1, 2] });
}

menu
  .disableDefaultHeader()
  .addDelimiter('-', 40, 'Main Menu')
  .addItem('Generate client files', function() {
    nexec('apollo schema:download schema.json --endpoint=http://localhost:3000/graphql');
    nexec(
      'apollo codegen:generate src/data/generated/types.ts --outputFlat --queries="src/**/queries/*.graphql" --schema schema.json --target typescript'
    );
  })
  .addItem('Generate server files', function() {
    nexec('graphql codegen');
    nexec('node save_schema.js', '');
  })
  .addItem('Deploy to Prisma', function() {
    nexec('prisma deploy');
  })
  .addItem('Reset', function() {
    nexec('prisma reset');
  })
  .addItem('Fixtures (clean)', function() {
    nexec(
      'ts-node --transpileOnly ./src/data/fixtures.ts --fixtures true --config .env --user true'
    );
  })
  .addItem('Fixtures', function() {
    nexec('ts-node --transpileOnly ./src/data/fixtures.ts --fixtures true --config .env');
  })
  .addItem('Update Snapshots', function() {
    nexec('jest --runInBand --updateSnapshot');
  })

  .disableDefaultHeader()
  .customPrompt(function() {
    process.stdout.write('\nEnter your selection:\n');
  })
  .disableDefaultPrompt()
  .start();
