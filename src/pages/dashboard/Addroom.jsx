import { apiAddRoom } from '../../services/chat';
import discussion from '../././././../assets/images/discussion.jpg'
import Swal from 'sweetalert2';


const Addroom = () => {
    const handleSubmit = async (event) => {
        event.preventDefault();
        //logic to add a room goes here
        const formData = new FormData(event.target);
        const name = formData.get('name');
        const description = formData.get('description');
        console.log(name, 'name', description, 'description');
        const response = await apiAddRoom({ name, description });

        if (response.status === 200) {
            localStorage.setItem('token', response.data.accessToken)

            Swal.fire({
                title: "Success!",
                text: `Registration Successsful`,
                icon: "success"
            });
        }
    }

    return (
        <div >
            {/* Addroom */}
            <div>
                <div className="pt-16 pl-14 ">
                    <p className="text-3xl text-center font-semibold pb-5">Create A Room</p>
                    <div className='border shadow rounded h-3/12 w-10/12 p-6 flex gap-10 bg-white '>

                        <form action="" onSubmit={handleSubmit} className="justify-center flex flex-col p-6">
                            <label htmlFor="" className="text-xl">Name</label>
                            <input type="text" name="name" className="border shadow p-2 my-2 rounded-md w-full" />
                            <label htmlFor="" className="text-xl">Description</label>
                            <input type="text" name="description" className="border shadow p-2 my-2 rounded-md w-80 h-40" />
                            <div className="flex ">
                                <button type='submit' className="border shadow w-fit h-fit p-2 m-2 rounded-md">Cancel</button>
                                <button type='submit' className="border shadow w-fit h-fit p-2 m-2 rounded-md">Create</button>
                            </div>
                        </form>
                        <div >
                            <img style={{ width: '520px', height: 'auto' }} src={discussion} alt="avatar" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Addroom;