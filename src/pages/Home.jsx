import { Link } from 'react-router-dom'
import headShot from '../assets/Images/headshot.jpg'

function Home() {
    return (

        <div className="page">

            <div className="page-content">
                <div className="container-fluid">
                    <div class="row mt-5">
                        <div class="col-md-12">
                            <div className="boxHome">

                                <p>Hello</p>
                                <p>My Name is Tom</p>
                                <p>I am a full stack developer based in Melbourne, Florida.</p>
                                <p>I am passionate about making professional UI designs with an emphasis on clear UX.</p>
                                <p>
                                    Navigate to my <Link to="/portfolio">Portfolio Page</Link> to see what I have worked on, and click on my <Link to="/contact">Contact Page</Link> to connect!
                                </p>
                             <div className="headshot">
                                <img src={headShot} alt="Head shot" style={{ width: '200px', height: 'auto' }} />
                                </div>
                                
                            </div>
                        </div>
                        

                    </div>
                </div>
            </div>
        </div>

    )
}

export default Home
