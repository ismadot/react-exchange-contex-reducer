import React, { useState } from "react";

import DateFnsUtils from "@date-io/date-fns"; // choose your lib
import {
  DatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
import {Paper,Typography} from '@material-ui/core';
import { Row } from 'react-flexbox-grid';
import {AppContext} from '../AppContext'
import {initDate,endDate} from '../actions/app'
import Button from '@material-ui/core/Button';
import ApiRequest from "../hooks/makeRequest";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
  button: {
    margin: theme.spacing(1),
  },
}));

export const PickerLabas = () => {
  const classes = useStyles();
  const { state, dispatch } = React.useContext(AppContext);
  const [initStateDate, setInitDate] = useState(new Date());
  const [endStateDate, setEndDate] = useState(new Date());
  const nowDate= new Date();
  function handleInitDateChange(date) {
    let formatDate=moment(date).format('YYYY-MM-DD')
    dispatch(initDate(formatDate))
    setInitDate(date);
  }
  function handleEndDateChange(date) {
    let formatDate=moment(date).format('YYYY-MM-DD')
    dispatch(endDate(formatDate))
    setEndDate(date);
  }
  let req= () => {
    let initdate=state.initDate;
    let enddate=state.endDate;
    ApiRequest(dispatch,initdate,enddate)
  }

  return(
    <Row center="xs" around="xs">
      <Paper className={`${classes.root} col-xs-4 col-md-5`}>
        <Typography variant="h5" component="h3">
          select init date
        </Typography>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <DatePicker  format="MM/dd/yyyy" value={initStateDate} onChange={handleInitDateChange} />
        </MuiPickersUtilsProvider>
      </Paper>
      <Button variant="contained" color="primary" onClick={req} className={classes.button}>
        Check
      </Button>
      <Paper className={`${classes.root} col-xs-4 col-md-5`}>
        <Typography variant="h5" component="h3">
          select final date
        </Typography>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <DatePicker minDate={initStateDate} maxDate={nowDate} format="MM/dd/yyyy" value={endStateDate} onChange={handleEndDateChange} />
        </MuiPickersUtilsProvider>
      </Paper>
    </Row>
  )
}


export default PickerLabas;