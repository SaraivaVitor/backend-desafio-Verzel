import fs from 'fs';
import path from 'path';

export default function app(){
  fs
  .readdirSync(__dirname)
  .filter((file : any)  => ((file.indexOf('.')) !== 0 && (file !== "start.ts")))
  .forEach((file : any) => require(path.resolve(__dirname, file))(app));
}
