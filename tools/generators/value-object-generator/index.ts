import { generateFiles, joinPathFragments, names, Tree } from '@nrwl/devkit';

export default async function (tree: Tree, schema: any) {
  generateFiles(tree, joinPathFragments(__dirname, './files'), './', {
    ...names(schema.name),
    tmpl: '',
  });
}
