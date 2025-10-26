import { Link } from 'react-router-dom'
import characterGallery from '../assets/Images/charactergallery.png'
import dragonForge from '../assets/Images/dragonforge.png'
import finalDrive from '../assets/Images/finaldrive.png'
import searchRing from '../assets/Images/searchRing.png'

function Portfolio() {
    return (

        <div className="page">

            <div className="page-content">
                <div className="row mt-3">
                    <h2 className="page-title">Some of my projects</h2>
                    <div className="box">
                        <div className='projectCard'>
                            <div className='thumbnailWide'>
                                <img src={searchRing} alt="Web App" style={{ width: '120px', height: '70px' }} />
                            </div>
                            <div className='prjDesc'>
                                <p style={{ fontWeight: 'bold' }}>FAA Circle Search</p>
                                <p>
                                    FAA Circle Search tool. Input your target latitude, longitude and search radius to find all filed and completed studies near
                                    your project. This application uses JavaScript, HTML, CSS, SQL, C# and ASP.NET. Contact me to set up an access key or free trial. 
                                </p>
                                <Link to="/contact"> Contact me
                                </Link>
                            </div>
                        </div>
                        <div className='projectCard'>
                            <div className='thumbnailWide'>
                                <img src={finalDrive} alt="Web App" style={{ width: '120px', height: '70px' }} />
                            </div>
                            <div className='prjDesc'>
                                <p style={{ fontWeight: 'bold' }}>Final Drive Challenge</p>
                                <p>
                                    A turn-based football game. You have the ball left with one possession, go through the prompts to try and score. This application
                                    uses JavaScript, CSS and HTML.
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
                                    A front end dragon creation gallery. You are able to create a dragon by setting their type, age, element
                                    and special ability. This application uses JavaScript, HTML, CSS and TypeScript.
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
                                    A front end character creation gallery. You are able to create a character, then navigate to your character and
                                    manipulate their personal inventory. This application uses JavaScript, HTML, CSS and DOM manipulation.
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