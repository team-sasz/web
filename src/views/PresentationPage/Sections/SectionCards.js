import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import componentsStyle from "assets/jss/material-kit-pro-react/views/presentationSections/componentsStyle.js";

// import cardsStyle from "assets/jss/material-kit-pro-react/views/presentationSections/cardsStyle.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import cardsTest from "assets/img/assets-for-demo/test1.jpg";
import ImageUpload from 'components/CustomUpload/ImageUpload.js';
import imagesStyles from "assets/jss/material-kit-pro-react/imagesStyles.js";
import { cardTitle } from "assets/jss/material-kit-pro-react.js";


const style = {
  ...imagesStyles,
  cardTitle,
  textMuted: {
    color: "#6c757d"
  }
};

// const useStyles = makeStyles(style);

const useStyles = makeStyles(componentsStyle);



export default function SectionCards() {
  const classes = useStyles();
  return (
    <div className={classes.container}>

      <GridContainer justify="center">
        <GridItem md={5} lg={5} sm={12} xs={12}>
          <div >
            <ImageUpload />
          </div>
        </GridItem>
        <GridItem md={5} lg={5} sm={12} xs={12}>
          <div>
            <Card>
              <img
                style={{ height: "180px", width: "100%", display: "block" }}
                className={classes.imgCardTop}
                src="http://via.placeholder.com/640x360"
                alt="Card-img-cap"
              />
              <CardBody>
                <h4 className={classes.cardTitle}>Card title</h4>
                <p>
                  This is a wider card with supporting text below as a natural lead-in
                  to additional content. This content is a little bit longer.
          </p>
                <p>
                  <small className={classes.textMuted}>Last updated 3 mins ago</small>
                </p>
              </CardBody>
            </Card>
          </div>
        </GridItem>
      </GridContainer>

    </div>
  );
}
