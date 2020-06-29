import React, { useState, useCallback, useEffect } from "react";
import {
  Button,
  Snackbar,
  CircularProgress,
  AppBar,
  Toolbar,
  Typography,
  Container,
  Paper,
  makeStyles,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Table,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@material-ui/core";

import { score, character, characterRoll } from "../types/roll";
import Stat from "./stat";

type rollState = {
  list: Array<characterRoll>;
  rollOrdinalNumber: number;
};

const useStyles = makeStyles((theme) => ({
  progressSnackbar: {
    minWidth: "640px",
  },
  mainGrid: {
    padding: "20px",
  },
  formTitle: {
    marginRight: "15px",
  },
  buttonGroup: {},
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    flexGrow: 1,
  },
  radioGroup: {
    flexDirection: "row",
  },
  characterTotal: {
    fontSize: "28px",
  },
}));

const d6 = (): number => Math.floor(Math.random() * 6) + 1;

const rollScore = (): score => [0, 0, 0, 0].map(d6).sort() as score;

const totalScore = (s: score) =>
  s.slice(1).reduce((accumulator, v) => accumulator + v);

const scoreModifier = (s: score) =>
  Math.floor((s.slice(1).reduce((accumulator, v) => accumulator + v) - 10) / 2);

const describeScore = (s: score, sortOrder: number) => {
  const modifier = scoreModifier(s);
  return {
    total: totalScore(s),
    usedNumbers: s.slice(1).map((n, idx) => ({ result: n, sortOrder: idx })),
    unusedNumbers: s
      .slice(0, 1)
      .map((n, idx) => ({ result: n, sortOrder: idx })),
    modifier,
    modifierString: modifier >= 0 ? `+${modifier}` : `${modifier}`,
    sortOrder: sortOrder,
  };
};

const makeSortFunction = <T extends unknown>(
  convertFunction: (a: T) => number
) => {
  return (a: T, b: T) => {
    if (convertFunction(a) < convertFunction(b)) {
      return -1;
    }
    if (convertFunction(a) > convertFunction(b)) {
      return 1;
    }
    return 0;
  };
};

const rollCharacter = (): character =>
  [null, null, null, null, null, null]
    .map(rollScore)
    .sort(makeSortFunction(totalScore)) as character;

const totalCharacterScoreAbsolute = (c: character) =>
  c.map((s) => totalScore(s)).reduce((accumulator, v) => accumulator + v);

const totalCharacterScoreModifier = (c: character) =>
  c.map((s) => scoreModifier(s)).reduce((accumulator, v) => accumulator + v);

const describeCharacter = (c: characterRoll) => ({
  stats: c.rolledCharacter.map((s, index) => describeScore(s, index)),
  rollOrdinalNumber: c.rollOrdinalNumber,
  rolledCharacter: c.rolledCharacter,
});

const Roll = () => {
  const classes = useStyles();

  const [rollsState, setRollsState] = useState<rollState>({
    list: [
      {
        rolledCharacter: rollCharacter(),
        rollOrdinalNumber: 1,
      },
    ],
    rollOrdinalNumber: 1,
  });

  const [rolling, setRolling] = useState<boolean>(false);
  const [comparisonMethod, setComparisonMethod] = useState<
    (c: character) => number
  >(() => totalCharacterScoreAbsolute);

  const rollBetterCharacterOrDoNothing = useCallback(() => {
    const newCharacter = rollCharacter();
    const newOrdinalNumber = rollsState.rollOrdinalNumber + 1;
    if (
      comparisonMethod(newCharacter) >
      comparisonMethod(
        rollsState.list[rollsState.list.length - 1].rolledCharacter
      )
    ) {
      setRollsState({
        list: [
          ...rollsState.list,
          {
            rolledCharacter: newCharacter,
            rollOrdinalNumber: newOrdinalNumber,
          },
        ],
        rollOrdinalNumber: newOrdinalNumber,
      });
      return true;
    } else {
      setRollsState({
        ...rollsState,
        rollOrdinalNumber: newOrdinalNumber,
      });
      return false;
    }
  }, [rollsState, comparisonMethod]);

  useEffect(() => {
    if (rolling) {
      const timer = setInterval(() => {
        if (rollBetterCharacterOrDoNothing()) {
          setRolling(false);
        }
      }, 0);
      return () => clearInterval(timer);
    }
  }, [rolling, rollBetterCharacterOrDoNothing, setRolling]);

  return (
    <>
      <Snackbar
        open={rolling}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        message={`Working - roll number ${rollsState.rollOrdinalNumber}`}
        action={<CircularProgress />}
      />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Humble character generator
          </Typography>
          <Typography variant="body1" className={classes.formTitle}>
            Total:
          </Typography>
          <FormControl component="fieldset" className={classes.buttonGroup}>
            <RadioGroup
              className={classes.radioGroup}
              value={
                comparisonMethod === totalCharacterScoreAbsolute
                  ? "absolute"
                  : "modifier"
              }
              onChange={(e) => {
                if (e.target.value === "modifier") {
                  setComparisonMethod(() => totalCharacterScoreModifier);
                } else {
                  setComparisonMethod(() => totalCharacterScoreAbsolute);
                }
              }}
            >
              <FormControlLabel
                value="absolute"
                control={<Radio />}
                label="Score"
              />
              <FormControlLabel
                value="modifier"
                control={<Radio />}
                label="Modifier"
              />
            </RadioGroup>
          </FormControl>
          <Button
            variant="contained"
            onClick={() => setRolling(true)}
            color="secondary"
            disabled={rolling}
          >
            Roll better character
          </Button>
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="lg">
        <Paper elevation={3} className={classes.paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell width="64px">#</TableCell>
                <TableCell align="center" colSpan={6}>
                  Result
                </TableCell>
                <TableCell width="64px">Total</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rollsState.list
                .map((c) => describeCharacter(c))
                .map((cd) => (
                  <TableRow key={cd.rollOrdinalNumber}>
                    <TableCell>{cd.rollOrdinalNumber}</TableCell>
                    {cd.stats.map((s) => (
                      <TableCell key={s.sortOrder} align="center">
                        <Stat stat={s} />
                      </TableCell>
                    ))}
                    <TableCell>
                      <Typography className={classes.characterTotal}>
                        {comparisonMethod(cd.rolledCharacter)}
                      </Typography>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </Paper>
      </Container>
    </>
  );
};

export default Roll;
