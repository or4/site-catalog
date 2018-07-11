import React from 'react';
import Slider from 'react-slick';
import { combineUrl } from 'utils';
import { flexRow, theming, scheme } from 'ui/theme';
// import { borderRadiusScheme } from 'ui/theme/schemes/radius';
import { OverlayImage } from './OverlayImage';

const rawStyle = {
  container: {
    borderRadius: scheme.borderRadius.default,
    maxWidth: '263px',
    width: '263px',

    ...theming('sidebar-slider'),
  },
  title: {
    cursor: 'default',
    fontWeight: '600' as 'bold',
    height: '50px',
    letterSpacing: '2px',

    ...theming('sidebar-sliderTitle'),
    ...flexRow('center', 'center'),
  },
  item: {
    cursor: 'pointer',
    minHeight: '118px',
    padding: '11px 0px 8px',
    margin: '6px 0 4px 0',
    textAlign: 'center' as 'center',

    ...theming('sidebar-sliderItem'),
  },
  img: {
    margin: '0 auto',
    width: '240px',
  },
  itemTitle: {
    height: '18px',
    maxHeight: '18px',
    marginTop: '8px',
    lineHeight: '18px',
    textAlign: 'center' as 'center',
  },
};

type Props = {
};
type State = {
  overlay: boolean;
  overlayImage: any;
  onClicks: any;
};
type Image = {
  url: string;
  title: string;
};
//

const images = [
  { url: 'img3277_1312967998.jpg', title: 'Территория' },
  { url: 'img6652_1312968065.jpg', title: 'Территория' },
  { url: 'img2398_1312967656.jpg', title: 'Склад' },
  { url: 'img1281_1312967692.jpg', title: 'Склад' },
  { url: 'img3438_1312967727.jpg', title: 'Склад' },
  { url: 'img7956_1312967620.jpg', title: 'Склад' },
  { url: 'img8980_1311765306.jpg', title: 'Магазин' },
  { url: 'img6522_1312967548.jpg', title: 'Магазин' },
  { url: 'img6160_1312967754.jpg', title: 'Склад' },
  { url: 'img2316_1312967795.jpg', title: 'Склад' },
  { url: 'img2022_1312967927.jpg', title: 'Территория' },
] as Image[];

export class PhotoSlider extends React.PureComponent<Props, State> {
  state = { overlay: false, overlayImage: '', onClicks: null as any }

  componentDidMount() {
    this.setState({
      onClicks: images.map(item => this.onClick.bind(null, item))
    });
  }
  onClick = (image: Image) => {
    this.setState({
      overlayImage: combineUrl(`/content/images/gallery1/source/${image.url}`),
      overlay: !this.state.overlay
    });
  }
  onClose = () => {
    this.setState({
      overlay: false
    });
  }

  render() {
    const { onClicks } = this.state;
    if (!onClicks) { return null }

    let settings = {
      dots: false,
      infinite: true,
      speed: 3500,
      slidesToShow: 5,
      arrows: false,
      slidesToScroll: 1,
      vertical: true,
      autoplay: true,
      autoplaySpeed: 3500,
      cssEase: 'linear',
      pauseOnHover: false,
      nextArrow: null as any,
      prevArrow: null as any,
    };
    const style = rawStyle;
    return (
      <div style={style.container}>
        <div style={style.title}>ФОТОГАЛЕРЕЯ</div>
        <Slider {...settings}>
          {images.map((image: Image, index: number) => (
            <div key={image.url}>
              <div style={style.item} onClick={onClicks[index]}>
                <img style={style.img} src={combineUrl(`/content/images/gallery1/tn/${image.url}`)} title="Территория" />
                <div style={style.itemTitle}>Территория</div>
              </div>
            </div>
          ))}
        </Slider>

        <OverlayImage overlay={this.state.overlay} imageSrc={this.state.overlayImage} onClose={this.onClose} />
      </div>
    );
  }
}
