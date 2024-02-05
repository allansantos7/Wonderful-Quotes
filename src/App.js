import "./App.css";
import QuoteInput from "./components/QuoteInput/QuoteInput";
import QuoteList from "./components/QuoteList/QuoteList";

const App = () => {
  return (
    <div className="App">
      <header className="app-header">
        <div>
          <QuoteInput />
        </div>
      </header>
      <body className="app-body">
        <div>
          <QuoteList />
        </div>
      </body>
    </div>
  );
};

export default App;
