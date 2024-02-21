import { useNavigate } from "react-router-dom";

export default function PageA() {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  return (
    <main>
      <h1>PageA</h1>
      <button onClick={goToHome}>Return Home</button>
    </main>
  );
}
