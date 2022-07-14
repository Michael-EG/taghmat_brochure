import React, { useEffect, useState } from 'react';
import { Box, Paper, Typography, Divider } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import Image from 'next/image';

// Article has ==> title, paragraphs, image
// paragraph has ==> heading, boolean indicating if the paragraph is abullet list or not, paragraph text
export default function Article3_EN({
  articleTitle,
  articleImage,
  articleImageAltText,
  articleParagraphs,

  // paper background color
  paperColor,
  // article title text color
  titleColor,
  // paragraph heading color
  paragraphHeadingColor,
  // bullet list heading color
  bulletListHeadingColor,
  // bullet items color
  bulletItemsColor,
  // body text color
  bodyTextColor,
}) {
  const [largeView, setLargeView] = useState(false);
  const handleResize = () => {
    // console.log('home page size');
    // console.log(window.innerWidth);
    if (typeof window !== 'undefined') {
      // Handler to call on window resize
      // function handleResize() {
      // Set window width/height to state
      if (window.innerWidth < 960) {
        setLargeView(false);
      } else {
        setLargeView(true);
      }
      // setWindowSize({
      //   width: window.innerWidth,
      //   height: window.innerHeight,
      // });
    }
    // console.log(windowSize);
  };

  // create an event listener
  // useEffect(() => {
  //   window.addEventListener('resize', handleResize);
  // });
  // useEffect(() => {
  //   handleResize();
  //   // window.addEventListener('resize', handleResize);
  // }, [window]);
  // useEffect(() => {
  //   handleResize();
  // }, []);
  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
  }, []);
  return (
    <Box className="article2-main-box" flex={1}>
      <Paper
        elevation={3}
        style={{ backgroundColor: paperColor || '#f4f4f4' }}
        // style={{ width: '100%', height: 'fit-content' }}
        className="article2-main-paper"
      >
        <div className={largeView ? "article2-main-div" : "article2-main-div-mobile"}>
          <div className={largeView ? "article2-article-title-div" : "article2-article-title-div-mobile"}>
            {articleTitle && (
              <Typography className={largeView ? "article2-article-title-text" : "article2-article-title-text-mobile"} style={{ color: titleColor || '#404040' }} component='h1' variant='h1'>
                {articleTitle}
              </Typography>
            )}
          </div>
          <div
            className={
              articleImage
                ? largeView ? 'article3-article-body-div-with-image' : 'article3-article-body-div-with-image-mobile'
                : largeView ? 'article3-article-body-div-without-image' : 'article3-article-body-div-without-image-mobile'
            }
          >
            {articleImage && articleImageAltText && (
              <div className={largeView ? "article2-article-image-div" : "article2-article-image-div-mobile"}>
                <Image src={articleImage} alt={articleImageAltText} className={largeView ? 'article2-article-image' : 'article2-article-image-mobile'} layout={largeView ? "responsive" : "responsive"} height={largeView ? '25vw' : 200} width={largeView ? '25vw' : 200} />
              </div>
            )}
            <div
              className={
                articleImage
                  ? largeView ? 'article2-article-paragraphs-div-with-image' : 'article2-article-paragraphs-div-with-image-mobile'
                  : 'article2-article-paragraphs-div-without-image'
              }
            >
              {articleParagraphs.map((paragraph, index) => {
                if (paragraph.isBullet) {
                  // return a bullet list
                  return (
                    <div key={uuidv4()} className={largeView ? "article3-article-paragraph-div" : "article3-article-paragraph-div-mobile"}>
                      <Typography className="article2-article-bullet-list-heading" style={{ color: bulletListHeadingColor || '#476282' }} >
                        {paragraph.listTitle}
                      </Typography>
                      <ul style={{ color: bulletItemsColor || bodyTextColor || '#000000' }}>
                        {paragraph.listItems.map((listItem) => (
                          <li key={uuidv4()}><Typography className="article2-article-body-text" style={{ color: bulletItemsColor || bodyTextColor || '#000000' }}>{listItem}</Typography></li>
                        ))}
                      </ul>
                      {index !== articleParagraphs.length - 1 && (
                        <Divider className="article1-article-body-divider" />
                      )}
                    </div>
                  );
                } else {
                  return (
                    <div
                      key={uuidv4()}
                      className={largeView ? "article3-article-paragraph-div" : "article3-article-paragraph-div-mobile"}
                    >
                      {paragraph.heading && (
                        <Typography className="article2-article-paragraph-heading-text" style={{ color: paragraphHeadingColor || '#476282' }}>
                          {paragraph.heading}
                        </Typography>
                      )}
                      {paragraph.heading && <br />}
                      <Typography className="article2-article-body-text" style={{ color: bodyTextColor || '#000000' }}>
                        {paragraph.text}
                      </Typography>
                      {
                        index !== articleParagraphs.length - 1 && (
                          <Divider className="article1-article-body-divider" />
                        )
                      }
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </Paper>
    </Box >
  );
}
