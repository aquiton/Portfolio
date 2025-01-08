import { Link } from 'react-router-dom';
export const BubbleHeader = () => {

    return(
        <div className="flex justify-center p-4 text-white items-center text-center ">
            <div className="bg-transparent rounded-full w-auto shadow-lg shadow-black">
            <ul className="flex justify-center gap-4 p-2 font-light text-xs md:text-sm lg:text-base items-center">
                <li className="bg-gray-700 rounded-full w-1/4 p-2 hover:bg-blue-500 hover:ease-in-out hover:scale-105 transition-all duration-300">
                    <Link to='/'>Home</Link>
                </li>
                <li className="bg-gray-700 rounded-full w-1/4 p-2 hover:bg-blue-500 hover:ease-in-out hover:scale-105 transition-all duration-300">
                    <Link to='/projects'>Projects</Link>
                </li>
                <li className="bg-gray-700 rounded-full w-1/4 p-2 hover:bg-blue-500 hover:ease-in-out hover:scale-105 transition-all duration-300">
                    <Link to='/aboutme'>About</Link>
                </li>
                <li className="bg-gray-700 rounded-full w-1/4 p-2 hover:bg-blue-500 hover:ease-in-out hover:scale-105 transition-all duration-300">
                    <Link to='/contact'>Contact</Link>
                </li>
            </ul>
            </div>
        </div>
    )
}
