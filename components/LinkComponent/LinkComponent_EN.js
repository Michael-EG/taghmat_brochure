import React, { useEffect, useState } from 'react'
import { Typography, Divider, Card, CardContent, CardMedia, CardActions, Button } from '@mui/material';
import Image from 'next/image';

export default function LinkComponent_EN(
  {
    imageURL,
    imageAltText,
    title,
    description,
    buttonText,
    buttonFilled,
    buttonColor,
    buttonTextColor,
    sectionBackgroundColor,
    titleColor,
    descriptionColor,
    cardColor,
  }) {
  const defaultURL = 'https://firebasestorage.googleapis.com/v0/b/alnourtracker.appspot.com/o/images%2Fpp-ta-p-4030d-a-img-data.jpeg?alt=media&token=05ec7010-266b-4b05-b8e9-a14be15e188b';
  // const imageAltText = 'discriptive image';
  const [largeView, setLargeView] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  const handleResize = () => {
    // console.log(window.innerWidth);
    if (window.innerWidth < 960) {
      setLargeView(false);
    } else {
      setLargeView(true);
    }
    if (typeof window !== 'undefined') {
      // Handler to call on window resize
      // function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // console.log(windowSize);
  };
  // useEffect(() => {
  //   window.addEventListener('resize', handleResize);
  // });
  // useEffect(() => {
  //   handleResize();
  //   // window.addEventListener('resize', handleResize);
  // }, [window]);
  // useEffect(() => {
  //   handleResize();
  //   // return () => window.removeEventListener("resize", handleResize);
  // }, []);
  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
  }, []);

  const getImageWidget = () => {
    if (imageURL === null || imageURL === undefined || imageAltText === null || imageAltText === undefined) {
      // console.log('no image');
      return (<div></div>);
    }
    // console.log('image is here');
    return (
      // <div></div>
      <div className='link-component-card-content-image-area_2'>
        <Image src={imageURL} alt={imageAltText} layout="responsive" height={0.2 * windowSize.width || 100} width={0.2 * windowSize.width || 100} />
      </div>
    );
  };
  const getImageWidgetSmall = () => {
    if (imageURL === null || imageURL === undefined || imageAltText === null || imageAltText === undefined) {
      return (<div></div>);
    }
    return (
      <div className='link-component-card-content-image-area'>
        <Image src={imageURL} alt={imageAltText} layout="responsive" height={0.2 * windowSize.width || 100} width={0.2 * windowSize.width || 100} />
      </div>
    );
  };

  if (largeView) {
    return (
      <div className='link-component-main-div' style={{ background: sectionBackgroundColor }}>
        <div className='link-component-card-content-main-div_2' >
          {/* {imageURL && (
            
          )} */}
          {getImageWidget()}

          <div className='link-component-card-content-text-area_2'>
            <div className='link-component-title-div'>
              <Typography style={{ color: titleColor }} gutterBottom variant="h5" component="div">
                {title}
              </Typography>
            </div>
            <div className='link-component-description-div'>
              <Typography style={{ color: descriptionColor }} variant="body2" color="text.secondary">
                {description}
              </Typography>
            </div>
          </div>
          <div className='link-component-card-content-action-button-area_2'>
            <Button size="small" variant='contained' style={{ background: buttonColor }}><Typography style={{ color: buttonTextColor }}>{buttonText}</Typography></Button>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className='link-component-main-div' style={{ background: sectionBackgroundColor }}>
        <Card sx={{ maxWidth: 400, width: '70%' }} style={{ background: cardColor }}>
          <CardContent>
            <div className='link-component-card-content-main-div' >
              {getImageWidgetSmall()}
              <div className='link-component-card-content-text-area'>
                <div className='link-component-title-div'>
                  <Typography style={{ color: titleColor, }} gutterBottom variant="h5" component="div">
                    {title}
                  </Typography>
                </div>
                <div className='link-component-description-div'>
                  <Typography style={{ color: descriptionColor }} variant="body2" color="text.secondary">
                    {description}
                  </Typography>
                </div>
              </div>
            </div>
          </CardContent>
          <CardActions>
            <Button size="small" variant='contained' style={{ background: buttonColor, width: '100%' }}><Typography style={{ color: buttonTextColor }}>{buttonText}</Typography></Button>
          </CardActions>
        </Card>

      </div>
    )
  }


}
