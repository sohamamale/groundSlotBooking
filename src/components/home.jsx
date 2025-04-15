import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import Nav from "./nav"

function Home() {

    const navigate = useNavigate();

    return (
    <>        
        
        <Nav></Nav>
        <div className="imgDiv">
            <caption className="flexCol">
            <img id="img1" src="https://cdn.pixabay.com/photo/2019/11/18/18/29/mountain-4635428_1280.jpg" className="flexImgs img-fluid" alt="" />
            Lawn
            </caption>
            <caption className="flexCol">
            <img src="https://cdn.pixabay.com/photo/2020/07/08/08/04/sunset-5383040_1280.jpg" className="flexImgs img-fluid" alt="" />
            Basketball
            </caption>
            <caption className="flexCol">
            <img src="https://cdn.pixabay.com/photo/2016/05/16/21/07/football-1396740_1280.jpg" className="flexImgs img-fluid" alt="" />
            Football
            </caption>
        </div>

    </>
    )
}

export default Home