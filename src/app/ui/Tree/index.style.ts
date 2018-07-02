
import jss from 'jss';
import preset from 'jss-preset-default';
jss.setup(preset());

const getRawClassess = () => {


  const subContainer = {
    display: 'block',
    margin: '0',
    paddingLeft: '10px',
    // transition: 'opacity 0.4s ease-in-out',
    opacity: '0' as any,
    height: '0',
    overflow: 'hidden',
    position: 'relative' as 'relative'
  };
  const icon = {
    // marginTop: '4px',
    zIndex: '1000' as any,
  };
  const subItemShow = {
    opacity: '1' as any,
    height: '100%',
  };
  return {

    subContainer,
    icon,
    subItemShow,
  };
};

const { classes } = jss.createStyleSheet(getRawClassess()).attach();

export const treeClasses = classes;