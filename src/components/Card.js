import React from 'react'
import classes from './style/card.module.css'
const Card = ({id}) => {
  return (
    <>
    <div className={classes.col}>
      <div className={classes.card}>
      <div className={`${classes.cardFront} ${classes.cardSide} `}>
           <div className={ classes.cardPicture1} >
         
           </div>

           <h4 className={classes.cardHeading}>
               software development
           </h4>
        </div>

        <div className={`${classes.cardBack} ${classes.cardSide} ${classes.Card1Back}`}>

        </div>

      </div>  
    </div>
    <div className={classes.col}>
      <div className={classes.card}>
      <div className={`${classes.cardFront} ${classes.cardSide} `}>
           <div className={ `${classes.cardPicture2}`} >
           </div>

           <h4 className={classes.cardHeading}>
               Web design
           </h4>
        </div>

        <div className={`${classes.cardBack} ${classes.cardSide} ${classes.Card2Back}`}>

        </div>

      </div>
         
    </div>
    <div className={classes.col}>
      <div className={classes.card}>
      <div className={`${classes.cardFront} ${classes.cardSide} `}>
           <div className={ `${ classes.cardPicture3} `} >
           </div>
           <h4 className={classes.cardHeading}>
               UI ux design
           </h4>
        </div>
        <div className={`${classes.cardBack} ${classes.cardSide} ${classes.Card3Back}`}>
        </div>
      </div>
      
    </div>
    </>
  )
}

export default Card