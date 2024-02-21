import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();

  const goToPageA = () => {
    navigate("/page-a");
  };

  const goToPageB = () => {
    navigate("/page-b");
  };

  return (
    <nav>
      <button onClick={goToPageA} data-cy="page-a-button">
        Page A
      </button>
      <button onClick={goToPageB} data-cy="page-b-button">
        Page B
      </button>
    </nav>
  );
}
