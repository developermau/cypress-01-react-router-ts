import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  const goToPageA = () => {
    navigate("/page-a");
  };

  const goToPageB = () => {
    navigate("/page-b");
  };

  return (
    <main>
      <div>
        <button onClick={goToPageA}>Page A</button>
        <button onClick={goToPageB}>Page B</button>
      </div>
    </main>
  );
}

export default App;
