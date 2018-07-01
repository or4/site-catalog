
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
  const subItem = {
    cursor: 'pointer',
  };
  const subContainer = {
    display: 'block',
    margin: '0',
    paddingLeft: '10px',
    // transition: 'opacity 0.4s ease-in-out',
    opacity: '0' as any,
    height: '0',
    overflow: 'hidden',
  };
  const icon = {
  };
  const subItemShow = {
    opacity: '1' as any,
    height: '100%',
  };
  return {
    container,
    subContainer,
    icon,
    subItem,
    subItemShow,
  };
};

const { classes } = jss.createStyleSheet(getRawClassess()).attach();

export const treeClasses = classes;