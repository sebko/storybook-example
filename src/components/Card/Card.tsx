import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MuiCard, { CardProps as MUICardProps } from "@material-ui/core/Card";
import MuiCardHeader from "@material-ui/core/CardHeader";
import MuiAvatar from "@material-ui/core/Avatar";
import MuiIconButton from "@material-ui/core/IconButton";
import MuiShareIcon from "@material-ui/icons/Share";
import { Theme } from "@material-ui/core/styles/createMuiTheme";

export interface CardProps extends MUICardProps {
  /**
   * If `true`, rounded corners are disabled.
   */
  square?: boolean;
}

export const Card: React.FC<CardProps> = (props: CardProps) => {
  const classes = useStyles();

  return (
    <MuiCard className={classes.root} variant="outlined" {...props}>
      <MuiCardHeader
        avatar={<MuiAvatar aria-label="avatar" />}
        action={
          <MuiIconButton aria-label="share">
            <MuiShareIcon />
          </MuiIconButton>
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
    </MuiCard>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(1, 1),
  },
  avatar: {
    alignSelf: "start",
  },
}));

export default Card;
