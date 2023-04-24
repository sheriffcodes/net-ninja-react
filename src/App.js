import './App.css';

function App() {
const title = 'welcome to the new blog';
const likes = 50;
const person = { name: "Yunus"}
const googleLink = "https://google.com"

  return (
    <div className="App">
      <div className="content">
        <h1>{ title }</h1>
        <p>Liked {likes} times</p>
        <p>My name is {person.name}</p>

        <a href={googleLink}> Google site </a>
        
        {/* direct input */}
        <p>count {[1,',', 2, 'and', 3]}</p>
      </div>
    </div>
  );
}

export default App;
