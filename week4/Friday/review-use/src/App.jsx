import CountReducer from "components/CountReducer";
import Counter from "components/Counter";
import Textcounter from "components/Textcounter";
import ThemeReducer from "components/ThemeReducer";
import Timer from "components/Timer";
import ToggleTheme from "components/ToggleTheme";
import ToggleTimer from "components/ToggleTimer";

const App = () => {
  return (
    <>
      <h1>Component Life cycle의 이해</h1>
      <Counter />
      <Timer />
      <Textcounter />
      <ToggleTimer />
      <CountReducer />
      <ToggleTheme />
      <ThemeReducer />
    </>
  );
};

export default App;
