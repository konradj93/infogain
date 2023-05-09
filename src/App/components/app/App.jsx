import { Routes, Route } from "react-router-dom";
import PointsListView from "../../../PurchasePoints/views/PointsListView/PointsListView";
import ErrorBoundary from "../../../Common/components/Errorboundary/Errorboundary";

const App = () => {
  return (
    <ErrorBoundary>
      <Routes>
        <Route path='/' element={<PointsListView />} />
      </Routes>
    </ErrorBoundary>
  );
};

export default App;
