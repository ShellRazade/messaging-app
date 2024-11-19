import { Link } from "react-router-dom";


const Landingbar = () => {
    return (
        <div>
            <div>
                <div className="flex fixed left-0 right-0 p-3 justify-evenly gap-4 backdrop-filter backdrop-blur-lg">
                    <button className="border rounded p-2 hover:bg-[#e19a12]">About Us</button>
                <Link to='/register' className="border rounded p-2 hover:bg-[#e19a12]"> Access Dashboard</Link>
                </div>
            </div>
        </div>
    )
}

export default Landingbar;