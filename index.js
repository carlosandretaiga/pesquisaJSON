import express from 'express';
import chalk from 'chalk';
import cors from 'cors';
import xml from 'xml';
import YAML from 'yaml';
import o2x from 'object-to-xml';

const app = express();
app.use(express.json());
app.use(cors());

//Question 4 - JS object to XML
let obj = { 
  '?xml version=\"1.0\" encoding=\"iso-8859-1\"?' : null,
  request : {
    '@' : {
      type : 'product',
      id : 12344556
    },
    '#' : {
      query : {
        vendor : 'redhat',
        name : 'linux'
      }
    }
  }
};

console.log(o2x(obj));

//Question 5 - JS object to YAML
const jsonObject = {
  version: "1.0.0",
  dependencies: {
      yaml: "^1.10.0"
  },
  package: {
      exclude: [ ".idea/**", ".gitignore" ]
  }
}

const doc = new YAML.Document();
doc.contents = jsonObject;

console.log(doc.toString());


app.listen(5000, () => {
  console.log(chalk.bold.green('Servidor funcionando na porta 5000!'));
});