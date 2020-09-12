import React, { useState } from "react";
import "./style.css";

import { makeStyles } from "@material-ui/core/styles";

import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

import Button from "@material-ui/core/Button";

import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

import { fruitBasketsNames, calculateAverage } from "./data";

const names = fruitBasketsNames();

const useStyles = makeStyles(theme => ({
  textField: {
    width: "25ch",
    margin: theme.spacing(1)
  }
}));

export default function App() {
  const classes = useStyles();

  const [fruitBaskets, setFruitBaskets] = useState([
    { name: "" },
    { name: "" }
  ]);

  const handleTextFieldFruitBasketChange = (event, index) => {

    const value = event.target.value;
    const list = [...fruitBaskets];
    list[index]["name"] = value;
    setFruitBaskets(list);
  };

  const handleAddClick = () => {
    setFruitBaskets([...fruitBaskets, { name: "" }]);
  };

  const handleRemoveClick = index => {
    const list = [...fruitBaskets];
    list.splice(index, 1);
    setFruitBaskets(list);
  };

  const handleCalculateAverage = async () => {
    const string = calculateAverage(fruitBaskets);
    console.log(string);
  };

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      {fruitBaskets.map((x, i) => {
        return (
          <div key={i} className="box">
            {" "}
            <TextField
              id="fruitBaskteTextField"
              className={classes.textField}
              label="fruit basket"
              select
              value={x.name}
              onChange={e => handleTextFieldFruitBasketChange(e, i)}
            >
              {" "}
              {names.map(option => (
                <MenuItem key={option.name} value={option.name}>
                  {option.name}
                </MenuItem>
              ))}
            </TextField>
            {fruitBaskets.length !== 1 && (
              <IconButton aria-label="remove" onClick={handleRemoveClick}>
                <RemoveIcon fontSize="large" />
              </IconButton>
            )}
            {fruitBaskets.length - 1 === i && (
              <IconButton aria-label="add" onClick={handleAddClick}>
                <AddIcon fontSize="large" />
              </IconButton>
            )}
          </div>
        );
      })}
      <Button
        variant="contained"
        color="primary"
        onClick={handleCalculateAverage}
      >
        Calculate average
      </Button>
    </div>
  );
}
