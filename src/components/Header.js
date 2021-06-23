const Header = ({ score }) => {
  let bool = false;
  if (score <= "0") {
    bool = true;
  } else {
    bool = false;
  }
  return (
    <header>
      <div className="container">
        <div className="img-container">
          <div></div>
        </div>
        <div className="score-container">
          <p>Score</p>
          <h3>{bool ? "0" : score}</h3>
        </div>
      </div>
    </header>
  );
};

export default Header;
