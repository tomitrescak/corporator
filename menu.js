const menu = require('node-menu');
const { execSync } = require('child_process');

function nexec(command, prefix = './node_modules/.bin/') {
  try {
    execSync(prefix + command, { cwd: __dirname, stdio: [0, 1, 2] });
  } catch (ex) {
    console.log('================= Exception =================');
    console.log(ex);
  }
}

function cleanFixtures() {
  nexec('ts-node --transpileOnly ./src/data/fixtures.ts --fixtures true --config .env --user true');
}

function generateClientFiles() {
  nexec('apollo schema:download schema.json --endpoint=http://localhost:3000/graphql');
  nexec(
    'apollo codegen:generate src/data/generated/types.ts --outputFlat --queries="src/**/queries/*.graphql" --schema schema.json --target typescript'
  );
}

function generateServerFiles() {
  nexec('graphql codegen');
  nexec('node save_schema.js', '');
}

menu
  .disableDefaultHeader()
  .addDelimiter('-', 40, 'Main Menu')
  .addItem('Generate client files', function() {
    generateClientFiles();
  })
  .addItem('Generate server files', function() {
    generateServerFiles();
  })
  .addItem('Deploy to Prisma', function() {
    nexec('prisma deploy');
  })
  .addItem('Reset', function() {
    nexec('prisma reset');
  })
  .addItem('Reset With Data', async function() {
    nexec('prisma reset');
    nexec('prisma deploy');
    cleanFixtures();

    await new Promise(r => setTimeout(r(), 1000));
    generateClientFiles();
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
  .start();
