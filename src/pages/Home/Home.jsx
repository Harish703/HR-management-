import { useNavigate} from 'react-router-dom';
import homeImg from '../../assets/home-gif.gif';
import { Button } from 'antd';




function Home() {
    
const navigate = useNavigate();

const goToAboutUs = () => navigate('/about');
    return (
        <>
            <div className="d-flex flex-column justify-content-center align-items-center">
                <div className="d-flex justify-content-between whole-page">
                    <div className=" d-flex flex-column justify-content-center align-items-center">
                       
                            <h1 className="text-center display-4">X-Industries Human Resource Management and Consultancy</h1>
                            <h2 className="display-6">Excellence through people</h2>
                            <Button onClick={goToAboutUs} type="primary" className="learn-more-btn">Learn More</Button>
                    

                    </div>
                    <div className="d-flex flex-column align-items-stretch">
                        <img className="home-img" src={homeImg} alt="home-img" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
