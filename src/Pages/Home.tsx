import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Header } from '../components/Header';


export const Home = () => {

    return(
        <div className="relative min-h-screen bg-gray-900">
        {/* backdrop circles */}
          <div className="fixed top-1/2 left-1/2 w-1/2 h-2/3 bg-gradient-to-r from-fuchsia-500 to-blue-500 rounded-full blur-3xl opacity-50 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

            {/* Overlay Content */}
            <div className="relative z-10 flex flex-col min-h-screen justify-between">
              <Header/>
              {/* Main content */}
              <div className="flex-grow flex-col flex items-center justify-center text-white text-xl mb-8 border-t">
                <h1 className="text-3xl font-light mb-4">Hi! I'm Alex Quiton</h1>
                <p className="text-lg w-1/2 font-extralight">
                  I'm a passionate web developer with a love for creating dynamic and responsive web applications. With experience in frontend technologies like React and Vue, as well as backend tools such as Node.js, I enjoy building solutions that bring ideas to life. I'm always eager to learn new skills and take on exciting challenges. Welcome to my portfolio!
                </p>
              </div>
  
              {/* Footer */}
              <div className="flex p-4 text-white justify-center mb-4">
                <div className="border-[0.5px] border-gray-500 rounded-full w-auto px-4 ">
                  <ul className="flex gap-4 p-1">
                    <li>
                      <button className='hover:ease-in-out hover:scale-150 hover:px-4 hover:-translate-y-2 transition-all duration-300'>
                        <FontAwesomeIcon icon={faLinkedin} size='2x'/>
                      </button>
                    </li>
                    <li>
                      <button className='hover:ease-in-out hover:scale-150 hover:px-4 hover:-translate-y-2 transition-all duration-300'>
                        <FontAwesomeIcon icon={faGithub} size='2x'/>
                      </button>
                    </li>
                    <li>
                      <button className='hover:ease-in-out hover:scale-150 hover:px-4 hover:-translate-y-2 transition-all duration-300'>
                      <FontAwesomeIcon icon={faDiscord} size='2x'/>
                      </button>
                    </li>
                    <li>
                      <button className='hover:ease-in-out hover:scale-150 hover:px-4 hover:-translate-y-2 transition-all duration-300'>
                      <FontAwesomeIcon icon={faInstagram} size='2x'/>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
  
          {/* Additional content below */}
          <div className="p-8 text-white">
            <h2 className="text-2xl mb-4">Projects</h2>
            <div>
                
            </div>
          </div>
          <div className="p-8 text-white items-center">
            <h2 className="text-2xl mb-4">Work</h2>
            <div className='flex justify-between font-semibold'>
                <p>Software Engineer Intern</p>
                <div className='w-3/4 h-4 border-b'></div>
                <p>December 2024 - Present</p>
            </div>
            <div className='flex justify-between font-semibold'>
                <p>Mobile Developer Intern</p>
                <div className='w-3/4 h-4 border-b'></div>
                <p>December 2023 - April 2024</p>
            </div>
          </div>
          <div className="p-8 text-white">
            <h2 className="text-2xl mb-4">Tech Stack / Skills</h2>
            <p>This is where more content goes. You can add more sections to fill out your portfolio website.</p>
          </div>
          <div className="p-8 text-white">
            <h2 className="text-2xl mb-4">Contact / Links / Follow Me </h2>
            <p>This is where more content goes. You can add more sections to fill out your portfolio website.</p>
          </div>
        </div>
    )
}