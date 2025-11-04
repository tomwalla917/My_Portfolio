import { Link } from 'react-router-dom'
import characterGallery from '../assets/Images/charactergallery.png'
import dragonForge from '../assets/Images/dragonforge.png'
import finalDrive from '../assets/Images/finaldrive.png'
import searchRing from '../assets/Images/searchring.png'

function Portfolio() {
    return (

        <div className="page">

            <div className="page-content">
                <div className="row mt-3">
                   
                    <div className="box">
                        <div className='projectCard'>
                            <div className='thumbnail'>
                                <img src={searchRing} alt="Web App" style={{ width: '120px', height: '70px' }} />
                            </div>
                            <div className='prjDesc'>
                                <p style={{ fontWeight: 'bold' }}>FAA Circle Search</p>
                                <p>
                                    A geospatial search tool that allows users to input latitude, longitude, and search radius to find all filed 
                                    and completed FAA studies near their project location. Built with JavaScript, HTML, CSS, SQL, C#, and ASP.NET. 
                                    Contact me to request an access key or start a free trial.
                                </p>
                                <Link to="/contact"> Contact me
                                </Link>
                            </div>
                        </div>
                        <div className='projectCard'>
                            <div className='thumbnail'>
                                <img src={finalDrive} alt="Web App" style={{ width: '120px', height: '70px' }} />
                            </div>
                            <div className='prjDesc'>
                                <p style={{ fontWeight: 'bold' }}>Final Drive Challenge</p>
                                <p>
                                    A turn-based football game where you control the final possession of the game. Follow the prompts to make 
                                    strategic plays and score the winning touchdown. Built with JavaScript, HTML, and CSS.
                                </p>
                                <a
                                    href="https://github.com/tomwalla917/final_drive_challenge"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View on GitHub
                                </a>
                            </div>
                        </div>
                        
                        <div className='projectCard'>
                            <div className='thumbnail'>
                                <img src={dragonForge} alt="Web App" style={{ width: '70px', height: '100px' }} />
                            </div>
                            <div className='prjDesc'>
                                <p style={{ fontWeight: 'bold' }}>Dragon Forge</p>
                                <p>
                                    A front-end dragon creator that lets you design custom dragons by selecting their type, age, element, 
                                    and special abilities. Built with TypeScript, JavaScript, HTML, and CSS.
                                </p>
                                <a
                                    href="https://github.com/tomwalla917/week_seven_capstone"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View on GitHub
                                </a>
                            </div>
                        </div>
                        <div className='projectCard'>
                            <div className='thumbnail'>
                                <img src={characterGallery} alt="Web App" style={{ width: '100px', height: '100px' }} />
                            </div>
                            <div className='prjDesc'>
                                <p style={{ fontWeight: 'bold' }}>Character Gallery</p>
                                <p>
                                    An interactive character creation tool where you can build characters and manage their personal inventories. 
                                    Built with JavaScript, HTML, CSS, and DOM manipulation.
                                </p>
                                <a
                                    href="https://github.com/tomwalla917/week_four_capstone"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View on GitHub
                                </a>
                            </div>
                        </div>
                        
                        
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Portfolio
