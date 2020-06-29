import React, { useState, useCallback, useEffect } from 'react';
import { Button, Snackbar, LinearProgress } from '@material-ui/core';
import { makeStyles, Grid, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  progress: {
    padding: "10px",
    marginTop: "-10px",
    borderRadius: "5px",
    backgroundColor: "#face8d",
    width: "80%",
    textAlign: "center",
  },
  progressSnackbar: {
    minWidth: "640px",
  },
  mainGrid: {
    padding: "20px",
  },
  buttonGroup: {
    margin: "40px",
  }
}));


type score = [number, number, number, number];

type character = [score, score, score, score, score, score];

type characterRoll = {
  rolledCharacter: character,
  rollOrdinalNumber: number,
}

type rollState = {
  list: Array<characterRoll>,
  rollOrdinalNumber: number,
}

const d6 = (): number => (
  Math.floor(Math.random() * 6)+1
)

const rollScore = (): score => (
  [0, 0, 0, 0].map(d6).sort() as score
)

const totalScore = (s: score) => (
  s.slice(1).reduce((accumulator, v) => (accumulator + v))
)

const scoreModifier = (s: score) => (
  Math.floor((s.slice(1).reduce((accumulator, v) => (accumulator + v)) - 10) / 2)
)

const formatScore = (s: score) => (
  `(${s[0]}) ${s.slice(1).join("+")} = ${totalScore(s)}`
)

const makeSortFunction = <T extends unknown>(convertFunction: (a: T) => number) => {
  return (a: T, b: T) => {
    if (convertFunction(a) < convertFunction(b)) {
      return -1;
    }
    if (convertFunction(a) > convertFunction(b)) {
      return 1;
    }
    return 0;
  }
}

const rollCharacter = (): character => (
  [null, null, null, null, null, null].map(rollScore).sort(makeSortFunction(totalScore)) as character
)

const totalCharacterScoreAbsolute = (c: character) => (
  c.map(s => totalScore(s)).reduce((accumulator, v) => (accumulator + v))
)

const totalCharacterScoreModifier = (c: character) => (
  c.map(s => scoreModifier(s)).reduce((accumulator, v) => (accumulator + v))
)

const formatCharacter = (c: character) => (
  c.map(s => formatScore(s)).join(", ")
)

const Roll = () => {
  const classes = useStyles();

  const [rollsState, setRollsState] = useState<rollState>({
    list: [{
      rolledCharacter: rollCharacter(),
      rollOrdinalNumber: 1,
    }],
    rollOrdinalNumber: 1,
  });

  const [rolling, setRolling] = useState<boolean>(false)
  const [comparisonMethod, setComparisonMethod] = useState<(c: character) => number>(() => totalCharacterScoreAbsolute);

  const rollBetterCharacterOrDoNothing = useCallback(() => {
      const newCharacter = rollCharacter();
      const newOrdinalNumber = rollsState.rollOrdinalNumber + 1;
      if (comparisonMethod(newCharacter) > comparisonMethod(rollsState.list[rollsState.list.length-1].rolledCharacter)) {
        setRollsState({
          list: [
            ...rollsState.list,
            {
              rolledCharacter: newCharacter,
              rollOrdinalNumber: newOrdinalNumber,
            }
          ],
          rollOrdinalNumber: newOrdinalNumber,
        })
        return true;
      } else {
          setRollsState({
            ...rollsState,
            rollOrdinalNumber: newOrdinalNumber,
        })
        return false;
      }
    }, [rollsState, comparisonMethod])

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
      <h1>Humble character generator</h1>
      <h2>Create yourself a better d20 character without too much manual rolling</h2>
      <Grid container spacing={1} className={classes.mainGrid}>{rollsState.list.map(c => (
        <Grid item xs={12} key={c.rollOrdinalNumber}>Roll # {c.rollOrdinalNumber} - {formatCharacter(c.rolledCharacter)} - Total score {comparisonMethod(c.rolledCharacter)}</Grid>
      ))}</Grid>
      <Snackbar
        open={rolling}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        className={classes.progressSnackbar}
      >
          <div className={classes.progress}>
            <LinearProgress />
            Working - roll number {rollsState.rollOrdinalNumber}.
          </div>
      </Snackbar>
      <Button variant="contained" onClick={() => setRolling(true)}>Roll better character</Button>
      <FormControl component="fieldset" className={classes.buttonGroup} >
        <FormLabel component="legend">Comparison method</FormLabel>
        <RadioGroup value={comparisonMethod === totalCharacterScoreAbsolute ? "absolute" : "modifier"} onChange={(e) => {
          if (e.target.value === "modifier") {
            setComparisonMethod(() =>totalCharacterScoreModifier)
          } else {
            setComparisonMethod(() => totalCharacterScoreAbsolute)
          }
        }}>
          <FormControlLabel value="absolute" control={<Radio />} label="Absolute total" />
          <FormControlLabel value="modifier" control={<Radio />} label="Sum of modifiers" />
        </RadioGroup>
      </FormControl>
    </>
  )
}

export default Roll;