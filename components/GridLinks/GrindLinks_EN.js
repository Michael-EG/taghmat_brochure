// import { Paper } from '@material-ui/core';
import { Grid, Typography, Paper } from '@mui/material'
import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

export default function GridLinks_EN({ gridTitle, gridComponents, gridItemBackground, gridTitleColor, gridTextColor, gridMainDivColor, gridItemBackgroundHover, gridTextColorHover }) {
  const [hoverIndex, setHoverIndex] = useState(-1);
  return (
    <div className='grid-links-section-main-div' style={{ background: gridMainDivColor ? gridMainDivColor : 'transparent' }}>
      <div className='gird-links-section-title-div'>
        <Typography className='grid-links-section-title-text' style={{ color: gridTitleColor || 'black' }}>{gridTitle}</Typography>
      </div>
      <Grid className='grid-links-main-grid' columns={{ xs: 1, md: 3 }} container spacing={{ xs: 3, md: 4 }}>
        {gridComponents.map((item, index) => {
          return (
            <Grid item xs={12} md={4} key={uuidv4()} className='grid-links-child-grid' >
              <Paper className='grid-links-child-grid-paper' style={{ background: hoverIndex === index ? gridItemBackgroundHover : gridItemBackground }} onMouseLeave={() => { setHoverIndex(-1); }} onMouseEnter={() => { setHoverIndex(index); }} onMouseOver={() => { setHoverIndex(index); }} onPointerLeave={() => { setHoverIndex(-1); }} onPointerEnter={() => { setHoverIndex(index); }}>
                {/* <p>{item.listTitle}</p> */}
                <div className={item.listIems ? 'grid-links-list-title-div' : 'grid-links-list-title-div-no-items'}>
                  <Typography className={item.listIems ? 'grid-links-list-title-text' : 'grid-links-list-title-text-no-items'} style={{ color: hoverIndex === index ? gridTextColorHover : gridTextColor }}>{item.listTitle}</Typography>
                </div>
                {
                  item.listIems && (
                    <div className='grid-links-list-items-div'>
                      <ul>
                        {item.listIems.map((listItem) => {
                          return (
                            <li key={uuidv4()} style={{ color: hoverIndex === index ? gridTextColorHover : gridTextColor }}>{listItem}</li>
                          );
                        })}
                      </ul>
                    </div>
                  )
                }
              </Paper>
            </Grid>
          )
        })}
      </Grid>
    </div>
  )
}
