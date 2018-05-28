import * as React from 'react';

type IProps = {};
interface IState {}

class About extends React.Component<IProps, IState> {
  componentDidMount() {
    console.log('About componentDidMount');
  }
  getStyle = () => {
    const container = {
      background: 'green',
    };

    return {
      container,
    };
  }
  public render() {
    const style = this.getStyle();
    return (
      <div style={style.container}>
        About
      </div>
    );
  }
}
export default About;
