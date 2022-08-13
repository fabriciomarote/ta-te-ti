import { useNavigate } from "react-router-dom";
import Game from "../media/game.webp"
import '../styles/MainPage.css';

const MainPage = () => {

  const navigate = useNavigate();
  const goPlayGame = () => navigate('/game');

    return (
        <>
            <div className='mainPage-container'>
                <div className='box-container'>
                    <div className='title'>
                        <p className="title-game">TA TE TI</p>
                    </div>
                    <div className='images-game'>
                        <div className='box-images'>
                            <img className='img' src={Game} alt="imagen"/>
                        </div>
                    </div>
                    <div className='buttons-content'>
                        <a onClick={goPlayGame} className="btn-mp">JUGAR</a> 
                    </div>
                </div>
            </div>
        </>
      );
};
    
export default MainPage;