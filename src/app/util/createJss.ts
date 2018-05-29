import { create } from 'jss';
import preset from 'jss-preset-default';

// import jss, { create } from 'jss';
// jss.setup(preset());

export default function createJss(): any {
  // forcibly reset jss moduleId to prevent SSR errors due to hot reloading
  require('jss/lib/utils/moduleId').default = 0;
  const result = create(preset()) as any;
  result.id = 0;
  return result;
}