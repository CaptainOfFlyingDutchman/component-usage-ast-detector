import * as glob from 'glob';
import * as fs from 'node:fs';
import { parse } from '@babel/parser';
import traverse from '@babel/traverse';

const files = glob.sync('../ts-react-app/src/**/*.tsx');

const components = ['Component1', 'Component2'];
const componentUsagesBag: Record<string, boolean> = {};

files.forEach((file) => {
  const contents = fs.readFileSync(file, 'utf8');

  console.log(`parsing ${file}`);
  const ast = parse(contents, {
    sourceType: 'module',
    plugins: ['jsx', 'typescript'],
  });

  traverse(ast, {
    JSXIdentifier: (path) => {
      components.forEach((component) => {
        componentUsagesBag[component] = path.node.name === component;
      });
    },
  });
});

console.log('List of components and their usages');
console.log(componentUsagesBag);
