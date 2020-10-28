import "./Button.css";
const Button = () => {
  const refreshPage = () => {
    window.location.reload(false);
  };

  return (
    <div className="next">
      <button className="button" onClick={refreshPage}>Next</button>
    </div>
  );
};

export default Button;
