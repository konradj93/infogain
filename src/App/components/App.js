import { useEffect } from "react";

const  App = () => {
  useEffect(() => {
    async function logJSONData() {
      const response = await fetch("/api/purchase");
      const jsonData = await response.json();
      console.log(jsonData);
    }
    logJSONData()
  }, [])
  return (
    <div> 
      <h1>Hello InfoGain</h1>
    </div>
  );
}

export default App;
