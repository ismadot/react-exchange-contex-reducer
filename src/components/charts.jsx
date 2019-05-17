import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import {Paper,Typography} from '@material-ui/core';
import { Row } from 'react-flexbox-grid';
import {AppContext} from '../AppContext'

import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    marginTop:10,
  },
}));


export const Charts = () => {
  const { state } = React.useContext(AppContext);
  const classes = useStyles();

  let formatUnit = (str)=>{
    let newstr = str.Valor.replace(",", ".");
    let newNum = Number(newstr);
    return newNum
  }
  
  return( 
    <Row center="xs" around="xs">
      <Paper className={`${classes.root} col-xs-12`}>
        {state.response === null && state.loading === false && 
          <Typography>
            hi select a date and click Check
          </Typography>
        }
        {state.error === true && 
        <Typography>
          you has been selected an invalid date format or have an error with your request try again
        </Typography>
        }
        { state.loading === true && 
          <Typography>
            Loading...
          </Typography>
        }
        {state.response !== null &&
        <div style={{ width: '100%', height: 300 }}>
          <ResponsiveContainer>
            <LineChart
              data={state.response}
              margin={{
                top: 10, right: 30, left: 0, bottom: 0,
              }}
              >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="Fecha" />
              <YAxis dataKey={formatUnit}  />
              <Tooltip />
              <Line connectNulls type="monotone" dataKey={formatUnit} stroke="#8884d8" fill="#8884d8"  />
            </LineChart>
          </ResponsiveContainer>
        </div>        
        }
      
      </Paper>
    </Row>
  )
}


export default Charts;