import React from "react";

import { Chip, Typography, makeStyles, Hidden } from "@material-ui/core";

import { statDescription } from "../types/roll";

type StatProps = {
  stat: statDescription;
};

const useStyles = makeStyles((theme) => ({
  mainStat: {
    fontSize: "24px",
    marginBottom: "10px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px",
    },
  },
}));

type colorMapping = [number, string];

const scoreColorThresholds: Array<colorMapping> = [
  [18, "#00F800"],
  [16, "#00E54B"],
  [14, "#00D4B0"],
  [12, "#00B7D8"],
  [10, "#188AF0"],
  [0, "#146CF6"],
];

const rollColorThresholds: Array<colorMapping> = [
  [6, "#00F800"],
  [5, "#00E54B"],
  [4, "#00D4B0"],
  [3, "#00B7D8"],
  [2, "#188AF0"],
  [1, "#146CF6"],
];

const getColorForScore = (score: number): string => {
  for (let i = 0; i < scoreColorThresholds.length; i++) {
    const [threshold, color] = scoreColorThresholds[i];
    if (score >= threshold) {
      return color;
    }
  }
  return "#000000";
};

const getColorForRoll = (roll: number): string => {
  for (let i = 0; i < rollColorThresholds.length; i++) {
    const [threshold, color] = rollColorThresholds[i];
    if (roll >= threshold) {
      return color;
    }
  }
  return "#000000";
};

const Stat = ({ stat }: StatProps) => {
  const classes = useStyles();
  return (
    <>
      <Typography
        className={classes.mainStat}
        style={{ color: getColorForScore(stat.total) }}
      >
        {stat.total}
        <Hidden mdUp>
          <br />
        </Hidden>{" "}
        ({stat.modifierString})
      </Typography>
      {stat.unusedNumbers.map((n) => (
        <Chip
          key={n.sortOrder}
          label={n.result}
          size="small"
          style={{ borderColor: getColorForRoll(n.result) }}
          variant="outlined"
        />
      ))}
      <Hidden mdUp>
        <br />
      </Hidden>
      {stat.usedNumbers.map((n) => (
        <React.Fragment key={n.sortOrder}>
          <Chip
            label={n.result}
            style={{ backgroundColor: getColorForRoll(n.result) }}
            size="small"
          />
          <Hidden mdUp>
            <br />
          </Hidden>
        </React.Fragment>
      ))}
    </>
  );
};

export default Stat;
