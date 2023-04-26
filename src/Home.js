import { useState } from "react";

const Home = () => {
    const [name, setName] = useState("mario");
    const [age, setAge] = useState(25);
    const Benita = {
        name: "Beni",
        smile: "Biggggggg"
    }

    const handleClick = () => {
        setName(Benita.name);
        setAge(30)
        console.log(name);
    };

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{ name } is { age } years old and smile { Benita.smile }</p>
            <button onClick={handleClick}>Click me</button>
        </div>
     );
}
 
export default Home;