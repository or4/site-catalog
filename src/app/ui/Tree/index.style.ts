
import jss from 'jss';
import preset from 'jss-preset-default';
jss.setup(preset());

const getRawClassess = () => {
  const container = {
    listStyle: 'none',
    margin: '0',
    padding: '0',

    '& ul': {
      listStyle: 'none' as 'none',
    }
  };
  const subContainer = {
    'display': 'block',
  };
  const icon = {
  };
  return {
    container,
    subContainer,
    icon,
  };
};

const { classes } = jss.createStyleSheet(getRawClassess()).attach();

export const treeClasses = classes;