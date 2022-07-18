import yaml from "js-yaml"
import fs from "fs"

try {
    let fileContents = fs.readFileSync('./YAML/example.yaml', 'utf8');
    let data = yaml.load(fileContents);

    console.log(data);
} catch (e) {
    console.log(e);
}
