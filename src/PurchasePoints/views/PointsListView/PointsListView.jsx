import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import Progress from "../../../Common/components/ProgressBar/Progress";
import useCollectPoints, { STATUSES } from "../../hooks/useColletPoints/useCollectPoints";
import TotalPoints from "../../components/TotalPoints/TotalPoints";
import calculateRewardForGivenCollection from "../../logic/calculateRewardForGivenCollection/calculateRewardForGivenCollection";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const PointsListView = () => {
  const { data } = useCollectPoints();
  if (!data || data.status === STATUSES.isLoading) {
    return <Progress />;
  }
  if (data.status === STATUSES.error) {
    return <Progress />;
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={6} md={8}>
          <TotalPoints totalPoints={calculateRewardForGivenCollection(data.data)} />
        </Grid>
        <Grid xs={6} md={4}>
          <Item>xs=6 md=4</Item>
        </Grid>
        <Grid xs={6} md={4}>
          <Item>xs=6 md=4</Item>
        </Grid>
        <Grid xs={6} md={8}>
          <Item>xs=6 md=8</Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PointsListView;
