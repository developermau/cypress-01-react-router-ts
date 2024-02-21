import { useNavigate } from "react-router-dom";

export default function PageB() {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  return (
    <main>
      <h1>PageB</h1>
      <button onClick={goToHome}>Return Home</button>
    </main>
  );
}
