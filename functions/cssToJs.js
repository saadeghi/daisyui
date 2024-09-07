import { promises as fs } from 'node:fs';
import postcss from 'postcss';
import postcssJs from 'postcss-js';
import { replaceApplyTrueWithEmptyObject } from './replaceApplyTrueWithEmptyObject.js';

export const cssToJs = async (cssFile) => {
  const cssContent = await fs.readFile(cssFile, 'utf-8');
  const root = postcss.parse(cssContent);
  let jsContent = postcssJs.objectify(root);
  replaceApplyTrueWithEmptyObject(jsContent);
  return JSON.stringify(jsContent, null, 2);
}
