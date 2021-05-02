import { Grid, Link, Typography, Box } from "@material-ui/core";
import React from "react";
import Card from "./Card";

export default {
  title: "Components/Content Related/Card",
  component: Card,
};

export const Default = () => (
  <Box>
    <Typography component="h1" variant="h4" gutterBottom>
      Card
    </Typography>

    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Box width={1 / 2}>
          <Typography gutterBottom component="p">
            Cards are a convenient means of displaying content composed of
            different types of objects. It is a multi usage component which
            creates boxes that are usually teasing some kind of content.
          </Typography>
        </Box>
        <Typography gutterBottom variant="caption">
          (Card description from:{" "}
          <Link
            href="https://uikit.wfp.org/docs/index.html?path=/docs/components-content-related-card--simple-card"
            target="_blank"
          >
            World Food Programme UI Kit
          </Link>
          )
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography component="h2" variant="h6" gutterBottom>
          Example
        </Typography>
        <div style={{ maxWidth: 345 }}>
          <Card />
        </div>
      </Grid>
    </Grid>
  </Box>
);

Default.story = {
  name: "Default",
};
