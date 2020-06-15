import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import Button from "components/CustomButtons/Button.js";
// import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import team1 from "assets/img/student.svg";
import team2 from "assets/img/team.svg";
import team3 from "assets/img/university.svg";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  const imageClasses = classNames(classes.imgRoundedCircle, classes.imgFluid);

  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Let{"'"}s talk "What We Do"</h2>
          <h5 className={classes.description}>write details</h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team1} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                For Students
                <br />
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Stay updated about the constant innovations happening in and
                  around you. Connect to a pool of experts in your subject of
                  interests and even become an expert yourself! Ranging from
                  mainstream programming to improving your photography skills
                  all at the same place!
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  color="primary"
                  size="md"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-play" />
                  Learn More
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team1} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                For Students
                <br />
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Stay updated about the constant innovations happening in and
                  around you. Connect to a pool of experts in your subject of
                  interests and even become an expert yourself! Ranging from
                  mainstream programming to improving your photography skills
                  all at the same place!
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  color="primary"
                  size="md"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-play" />
                  Learn More
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team1} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                For Students
                <br />
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Stay updated about the constant innovations happening in and
                  around you. Connect to a pool of experts in your subject of
                  interests and even become an expert yourself! Ranging from
                  mainstream programming to improving your photography skills
                  all at the same place!
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  color="primary"
                  size="md"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-play" />
                  Learn More
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
