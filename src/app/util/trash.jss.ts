// import * as React from 'react';
// import { Link } from 'react-router';
// import { theme } from 'ui/theme';
// import createJss from 'util/createJss';

// // import jss from 'jss';
// // import preset from 'jss-preset-default';
// // jss.setup(preset());

// type Props = {
// };
// type State = {
// };

// class Navigation extends React.PureComponent<Props, State> {
//   classes: any;
//   constructor(props: Props) {
//     super(props);
//     const jss = createJss();
//     const sheet = jss.createStyleSheet(this.getStyle()).attach();
//     const { classes } = sheet;
//     this.classes = classes;
//   }
//   getStyle() {
//     const container = {
//       alignItems: 'center' as 'center',
//       display: 'flex',
//       height: '36px',
//       justifyContent: 'center' as 'center',
//       maxHeight: '36px',

//       ...theme.navigation.container,
//     };
//     const item = {
//       margin: '0 30px',
//       ...theme.navigation.item,
//     };
//     return {
//       container,
//       item,
//     };
//   }
//   componentDidMount() {
//     console.log('Navigation componentDidMount');
//   }
//   render() {
//     // const { classes } = sheet;

//     // const style = this.getStyle();
//     //const {  } = this.props;
//     return (
//       <div className={this.classes.container}>
//         <Link to="about">About</Link>
//         <Link to="production">Production</Link>
//         <Link to="products">Products</Link>
//         <Link to="news">News</Link>
//         <Link to="contacts">Contacts</Link>
//       </div>
//     );
//   }
// }
// export default Navigation;
