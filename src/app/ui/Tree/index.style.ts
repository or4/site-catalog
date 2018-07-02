
import jss from 'jss';
import preset from 'jss-preset-default';
import { treeLineBase64 } from 'ui/icons/base64';
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
    fontSize: '12px',
  };
  const subItemFlexContainer = {
    display: 'flex',
    position: 'relative' as 'relative',
  };
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
  const vert = {
    background: `url(${treeLineBase64}) 0 0 repeat-y`,
    position: 'absolute' as 'absolute',
    top: '0px',
    left: '0px',
    zIndex: '999' as any,
    height: 'calc(100%)',
    width: '16px',
  };
  return {
    container,
    subContainer,
    subItemFlexContainer,
    icon,
    subItem,
    vert,
    subItemShow,
  };
};

const { classes } = jss.createStyleSheet(getRawClassess()).attach();

export const treeClasses = classes;