import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import data from "../../data/data.json";
import { getLogo } from "../Fixtures/Fixtures";

export default function Standings() {
  return (
    <>
      <h1>Standings</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Position</TableCell>
              <TableCell>Club</TableCell>
              <TableCell>Played</TableCell>
              <TableCell>GD</TableCell>
              <TableCell>Points</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.standings.map((row, index) => (
              <TableRow
                key={row.position}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.position}
                </TableCell>
                <TableCell>
                  {getLogo(row.id)?.images?.crest && (
                    <img src={getLogo(row.id)?.images?.crest} alt="" />
                  )}
                  {row.name.long}
                </TableCell>
                <TableCell>{row.stats.played}</TableCell>
                <TableCell>{row.stats.goalDifference}</TableCell>
                <TableCell>{row.stats.points}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
