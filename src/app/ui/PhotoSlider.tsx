import React from 'react';
import Slider from 'react-slick';
import { combineUrl } from 'utils';
import { flexRow, theming } from 'ui';
import { borderRadiusScheme } from 'ui/theme/schemes/radius';

type Props = {
};
type State = {
};

export class PhotoSlider extends React.PureComponent<Props, State> {
  getStyle() {
    const container = {
      borderRadius: borderRadiusScheme.default,
      maxWidth: '263px',
      width: '263px',

      ...theming('sliderContainer'),
    };
    const title = {
      cursor: 'default',
      fontWeight: '600' as 'bold',
      height: '50px',
      letterSpacing: '2px',

      ...theming('sliderTitle'),
      ...flexRow('center', 'center'),
    };

    const item = {
      minHeight: '118px',
      padding: '11px 0px 8px',
      margin: '6px 0 4px 0',
      textAlign: 'center' as 'center',

      ...theming('sliderItem'),
    };
    const img = {
      margin: '0 auto',
      width: '240px',
    };
    const itemTitle = {
      height: '18px',
      maxHeight: '18px',
      marginTop: '8px',
      lineHeight: '18px',
      textAlign: 'center' as 'center',
    };



    return {
      container,
      item,
      img,
      itemTitle,
      title,
    };
  }
  render() {
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
    const style = this.getStyle();
    return (
      <div style={style.container}>
        <div style={style.title}>ФОТОГАЛЕРЕЯ</div>
        <Slider {...settings}>
          <div>
            <div style={style.item}>
              <img style={style.img} src={combineUrl('/content/images/gallery1/tn/img3277_1312967998.jpg')} title="Территория" />
              <div style={style.itemTitle}>Территория</div>
            </div>
          </div>
          <div>
            <div style={style.item}>
              <img style={style.img} src={combineUrl('/content/images/gallery1/tn/img6652_1312968065.jpg')} title="Территория" />
              <div style={style.itemTitle}>Территория</div>
            </div>
          </div>
          <div>
            <div style={style.item}>
              <img style={style.img} src={combineUrl('/content/images/gallery1/tn/img2398_1312967656.jpg')} title="Склад" />
              <div style={style.itemTitle}>Склад</div>
            </div>
          </div>
          <div>
            <div style={style.item}>
              <img style={style.img} src={combineUrl('/content/images/gallery1/tn/img1281_1312967692.jpg')} title="Склад" />
              <div style={style.itemTitle}>Склад</div>
            </div>
          </div>
          <div>
            <div style={style.item}>
              <img style={style.img} src={combineUrl('/content/images/gallery1/tn/img3438_1312967727.jpg')} title="Склад" />
              <div style={style.itemTitle}>Склад</div>
            </div>
          </div>
          <div>
            <div style={style.item}>
              <img style={style.img} src={combineUrl('/content/images/gallery1/tn/img7956_1312967620.jpg')} title="Склад" />
              <div style={style.itemTitle}>Склад</div>
            </div>
          </div>
          <div>
            <div style={style.item}>
              <img style={style.img} src={combineUrl('/content/images/gallery1/tn/img8980_1311765306.jpg')} title="Магазин" />
              <div style={style.itemTitle}>Магазин</div>
            </div>
          </div>
          <div>
            <div style={style.item}>
              <img style={style.img} src={combineUrl('/content/images/gallery1/tn/img6522_1312967548.jpg')} title="Магазин" />
              <div style={style.itemTitle}>Магазин</div>
            </div>
          </div>
          <div>
            <div style={style.item}>
              <img style={style.img} src={combineUrl('/content/images/gallery1/tn/img6160_1312967754.jpg')} title="Склад" />
              <div style={style.itemTitle}>Склад</div>
            </div>
          </div>
          <div>
            <div style={style.item}>
              <img style={style.img} src={combineUrl('/content/images/gallery1/tn/img2316_1312967795.jpg')} title="Склад" />
              <div style={style.itemTitle}>Склад</div>
            </div>
          </div>
          <div>
            <div style={style.item}>
              <img style={style.img} src={combineUrl('/content/images/gallery1/tn/img2022_1312967927.jpg')} title="Территория" />
              <div style={style.itemTitle}>Территория</div>
            </div>
          </div>
        </Slider>

      </div>
    );
  }
}
