import React from 'react';
import { Box, Paper, Typography, Divider } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';

export default function Article1_AR({
  articleTitle,
  //   articleSecondaryTitle,
  articleParagraphs,
}) {
  return (
    <Box classname="article1-main-box">
      <Paper
        elevation={3}
        style={{ width: '100%', height: 'fit-content' }}
        className="article1-main-paper"
      >
        <div className="article1-main-div">
          <div className="article1-article-title-div">
            {articleTitle && (
              <Typography className="article1-article-title-text-inner" component='h1' variant='h1'>
                {articleTitle}
              </Typography>
            )}
          </div>
          <div className="article1-article-body-div">
            {articleParagraphs &&
              articleParagraphs.map((paragraph, index) => (
                <div key={uuidv4()} className="article1-article-paragraph">
                  {paragraph.heading && (
                    <Typography className="article1-article-paragraph-heading-ar">
                      {paragraph.heading}
                    </Typography>
                  )}
                  {paragraph.heading && <br />}
                  <Typography className="article1-article-body-text-ar">
                    {paragraph.text}
                  </Typography>
                  {index !== articleParagraphs.length - 1 && (
                    <Divider className="article1-article-body-divider" />
                  )}
                </div>
              ))}
          </div>
        </div>
      </Paper>
    </Box>
  );
}
