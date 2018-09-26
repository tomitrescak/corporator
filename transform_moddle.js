const fs = require('fs');
const path = require('path');
<<<<<<< HEAD

function transformFiles(workPath) {
  console.log('Transforming: ' + workPath);

  const files = fs.readdirSync(workPath);
  for (let file of files) {
    const filePath = path.join(workPath, file);

    if (file === 'test' || file === 'assets' || file === 'dist') {
      continue;
    }

    if (fs.lstatSync(filePath).isDirectory()) {
      transformFiles(filePath);
      continue;
    }
    if (path.extname(file) === '.js') {
=======
const dirs = [
  'moddle',
  'moddle/lib',
  'moddle-xml',
  'moddle-xml/lib',
  'bpmn-moddle',
  'bpmn-moddle/lib'
];

for (let dir of dirs) {
  const workPath = __dirname + '/node_modules/' + dir;
  const files = fs.readdirSync(workPath);
  for (let file of files) {
    if (path.extname(file) === '.js') {
      const filePath = path.join(workPath, file);
>>>>>>> Added the moddle transform file
      const content = fs.readFileSync(filePath, { encoding: 'utf-8' });
      const result = require('babel-core').transform(content, {
        plugins: ['transform-es2015-modules-commonjs']
      });
<<<<<<< HEAD
      // console.log(result.code);
=======
      console.log(result.code);
>>>>>>> Added the moddle transform file
      // const transformed = transform(content);
      fs.writeFileSync(filePath, result.code, { encoding: 'utf-8' });
    }
  }
}
<<<<<<< HEAD

const dirs = ['moddle', 'moddle-xml', 'bpmn-moddle', 'bpmn-js', 'diagram-js'];

for (let dir of dirs) {
  const workPath = __dirname + '/node_modules/' + dir;
  transformFiles(workPath);
}
=======
>>>>>>> Added the moddle transform file
