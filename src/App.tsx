import React from "react";
import Roll from "./components/Roll";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { green } from "@material-ui/core/colors";
import {
  makeStyles,
  AppBar,
  Typography,
  Toolbar,
  Link,
} from "@material-ui/core";
import { ReactComponent as Github } from "./github.svg";

const theme = createMuiTheme({
  palette: {
    secondary: green,
  },
});

const useStyles = makeStyles((theme) => ({
  footerInfo: {
    bottom: "0",
    top: "auto",
  },
  footerTitle: {
    flexGrow: 1,
  },
  footerGithub: {
    display: "flex",
    alignItems: "center",
  },
  footerGithubText: {
    marginRight: "15px",
  },
  githubIcon: {
    height: "32px",
    width: "32px",
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Roll />
      <AppBar
        className={classes.footerInfo}
        position="absolute"
        color="secondary"
      >
        <Toolbar>
          <Typography
            variant="body1"
            title="Intended use: to amuse your DM if they argue that rolling as many times as you want is fine."
            className={classes.footerTitle}
          >
            All rolls are executed by finely trained random number generator.
          </Typography>
          <Link
            href="https://github.com/iharthi/humble-character-generator"
            className={classes.footerGithub}
          >
            <Typography variant="body1" className={classes.footerGithubText}>
              HCG is Open Sourcery
            </Typography>
            <Github className={classes.githubIcon} />
          </Link>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default App;
