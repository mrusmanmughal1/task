import Footer from "./Components/Footer";
import Forms from "./Components/Forms";
import Header from "./Components/Header";
import Main from "./Components/Main";
import "./Styles/App.css";
import "./Styles/styles.css";
import "./Styles/Responsive.css"

const App = () => {
  return (
    <div>
      <Header />
      <Main />
      <Forms />
      <Footer />
    </div>
  );
};

export default App;
