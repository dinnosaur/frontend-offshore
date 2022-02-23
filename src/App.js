import "./App.css";
import AppStyling from "./AppStyling";
import Home from "./Home";

import { makeStyles } from "@material-ui/core/styles";

let useStyles = makeStyles(AppStyling);

function App() {
  const classes = useStyles();
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        background: "#de350a !important",
      }}
    >
      <div
        className={classes.AppContainer}
        style={{
          height: "100%",
          width: "100%",
          background: "rgb(9 30 66 / 87%) !important",
        }}
      >
        <div className={classes.appContainer2}>
          <main className={classes.mainWrapper}>
            <Home />
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
