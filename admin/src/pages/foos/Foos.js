import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import MUIDataTable from "mui-datatables";

// components
import PageTitle from "../../components/PageTitle/PageTitle";
import Widget from "../../components/Widget/Widget";
import Table from "../dashboard/components/Table/Table";

// data
import mock from "../dashboard/mock";


const datatableData = [
  ["Joe James", "Example Inc.", "Yonkers", "NY"],
  ["John Walsh", "Example Inc.", "Hartford", "CT"],
  ["Bob Herm", "Example Inc.", "Tampa", "FL"],
  ["James Houston", "Example Inc.", "Dallas", "TX"],
  ["Prabhakar Linwood", "Example Inc.", "Hartford", "CT"],
  ["Kaui Ignace", "Example Inc.", "Yonkers", "NY"],
  ["Esperanza Susanne", "Example Inc.", "Hartford", "CT"],
  ["Christian Birgitte", "Example Inc.", "Tampa", "FL"],
  ["Meral Elias", "Example Inc.", "Hartford", "CT"],
  ["Deep Pau", "Example Inc.", "Yonkers", "NY"],
  ["Sebastiana Hani", "Example Inc.", "Dallas", "TX"],
  ["Marciano Oihana", "Example Inc.", "Yonkers", "NY"],
  ["Brigid Ankur", "Example Inc.", "Dallas", "TX"],
  ["Anna Siranush", "Example Inc.", "Yonkers", "NY"],
  ["Avram Sylva", "Example Inc.", "Hartford", "CT"],
  ["Serafima Babatunde", "Example Inc.", "Tampa", "FL"],
  ["Gaston Festus", "Example Inc.", "Tampa", "FL"],
];

const useStyles = makeStyles((theme) => ({
  tableOverflow: {
    overflow: "auto",
  },
}));

export default function Foos() {
  console.log("Foos");
  const classes = useStyles();
  const [foos, setFoos] = useState(null);

  useEffect(() => {
    async function getFoos() {
      const resp = await fetch("http://localhost:5000/api/foos");
      const json = await resp.json();
      const newFoos = json.data.foos
      console.log(newFoos);
      setFoos(newFoos);
    }
    getFoos();
  }, []);

  return (
    <>
      <PageTitle title="Foos" />
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <MUIDataTable
            title="Foos List"
            data={foos || datatableData}
            columns={["Id", "Foo", "Company", "City", "Title", "Salary"]}
            options={{
              filterType: "checkbox",
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Widget
            title="Material-UI Table"
            upperTitle
            noBodyPadding
            bodyClass={classes.tableOverflow}
          >
            <Table data={mock.table} />
          </Widget>
        </Grid>
      </Grid>
    </>
  );
}
