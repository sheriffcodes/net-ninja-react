import { useState } from "react";
import Bloglist from "./Bloglist";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
        { title: "Welcome party", body: "lorem ipsum...", author: "Yoshi", id: 2 },
        { title: "Web dev top tips", body: "lorem ipsum...", author: "mario", id: 3 },
    ]) 
    return ( 
    <Bloglist blogs={blogs} title="All blogs!"  />
     );
}
 
export default Home;