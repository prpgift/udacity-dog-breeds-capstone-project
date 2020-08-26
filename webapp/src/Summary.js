import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    width: '85%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 200,
  },
}));

function createData(model, prediction) {
  return { model, prediction};
}

export default function NestedGrid(props) {
  const classes = useStyles();
  const rows = [
    ...props.data.map(val => createData(val.model, val.prediction))
  ];
  return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell><b>CLASS</b></TableCell>
              <TableCell align="right"><b>PREDICTION</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => {
              return (
                <TableRow key={row.model}>
                  <TableCell component="th" scope="row">
                    {row.model}
                  </TableCell>
                  <TableCell align="right">{row.prediction}</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </Paper>  
    )
  }