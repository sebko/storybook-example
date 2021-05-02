import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MUICard, { CardProps as MUICardProps } from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import ShareIcon from "@material-ui/icons/Share";
import { Theme } from "@material-ui/core/styles/createMuiTheme";

interface CardProps extends MUICardProps {
  // Additional props here
}

export const Card: React.FC = (props: CardProps) => {
  const classes = useStyles();

  return (
    <MUICard className={classes.root} variant="outlined">
      <CardHeader
        avatar={<Avatar aria-label="avatar" />}
        action={
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        }
        title="Headline 6"
        titleTypographyProps={{
          component: "h6",
          variant: "h6",
        }}
        subheader="Body 2"
        classes={{
          avatar: classes.avatar,
        }}
      />
    </MUICard>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(1, 1),
  },
  // avatar: {
  //   alignSelf: "start",
  // },
}));

export default Card;
