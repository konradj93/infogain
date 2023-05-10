import Table from "@mui/material/Table";
import { styled } from "@mui/material/styles";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import calculateRewardPoints from "../../logic/calculateRewardPoints/calculateRewardPoints";
import { calculateRewardForGivenTransactions } from "../../logic/calculateRewardForGivenCollection/calculateRewardForGivenCollection";

const TablePointsContainer = styled(TableContainer)(({ theme }) => ({
  height: "400px",
  overflowY: "scroll",
  marginTop: theme.spacing(1),
}));

const PointsTable = ({ points }) => {
  return (
    <>
      <h2>
        Total points for {points.fullMonthName}:{" "}
        {calculateRewardForGivenTransactions(points)}
      </h2>
      <TablePointsContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Id</TableCell>
              <TableCell align="left">Day</TableCell>
              <TableCell align="left">Money amount</TableCell>
              <TableCell align="left">Points</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {points.transactions
              .sort((a, b) => a.day - b.day)
              .map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left">{row.id}</TableCell>
                  <TableCell align="left">{row.day + 1}</TableCell>
                  <TableCell align="left">{row.amount}</TableCell>
                  <TableCell align="left">
                    {calculateRewardPoints(row.amount)}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TablePointsContainer>
    </>
  );
};

export default PointsTable;
