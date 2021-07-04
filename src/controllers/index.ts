const fs = require('fs');
const path = require('path');

export default function app(): any{
  fs
  .readdirSync(__dirname)
  .filter((file : any)  => ((file.indexOf('.')) !== 0 && (file !== "start.ts")))
  .forEach((file : any) => require(path.resolve(__dirname, file))(app));
}
