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

const TABLE_CELL_ALIGNMENT = "left";

const TablePointsContainer = styled(TableContainer)(({ theme }) => ({
  height: "400px",
  overflowY: "scroll",
  marginTop: theme.spacing(1),
}));

const PointsTable = ({ points }) => {
  if (typeof points !== "object" || Object.keys(points).length === 0) {
    return <p>There is no transactions in provided month</p>;
  }
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
              <TableCell align={TABLE_CELL_ALIGNMENT}>Id</TableCell>
              <TableCell align={TABLE_CELL_ALIGNMENT}>Day</TableCell>
              <TableCell align={TABLE_CELL_ALIGNMENT}>Money amount</TableCell>
              <TableCell align={TABLE_CELL_ALIGNMENT}>Points</TableCell>
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
                  <TableCell align={TABLE_CELL_ALIGNMENT}>{row.id}</TableCell>
                  <TableCell align={TABLE_CELL_ALIGNMENT}>
                    {row.day + 1}
                  </TableCell>
                  <TableCell align={TABLE_CELL_ALIGNMENT}>
                    {row.amount}
                  </TableCell>
                  <TableCell align={TABLE_CELL_ALIGNMENT}>
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
