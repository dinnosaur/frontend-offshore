import AppStyling from "./AppStyling";

import { makeStyles } from "@material-ui/core/styles";

let useStyles = makeStyles(AppStyling);

function Home() {
  const classes = useStyles();
  return (
    <div className={classes.homeWrapper}>
      <img
        style={{
          height: "auto",
          maxHeight: "10vh",
          maxWidth: "90%",
          margin: "40px",
        }}
      ></img>
    </div>
  );
}

export default Home;
