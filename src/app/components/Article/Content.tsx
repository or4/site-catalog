import React from 'react';
import { convertImgUrl } from 'core/common';

type Props = {
  categoryDescription: string;
};
type State = {
};

class Content extends React.PureComponent<Props, State> {
  getArticle = () => ({ __html: convertImgUrl(this.props.categoryDescription) });

  render() {
    return (
      <div className={'article-description'} dangerouslySetInnerHTML={this.getArticle()} />
    );
  }
}
export default Content;
