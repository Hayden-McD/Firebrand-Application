import './App.css';

function App() {
  return (
    <div class="container">
      <div class="title">
        My Firebrand summer internship application
      </div>

      {/* Put pages here. One page for each question */}


      {/* buttons for selecting page. when button is pressed current page will become hidde, and new page will become visable */}
      <div class="page-select-buttons"> 
        <button class="previous"> Previous </button>
        <button class="next"> Next </button>

      </div>
    </div>
  );
}

export default App;