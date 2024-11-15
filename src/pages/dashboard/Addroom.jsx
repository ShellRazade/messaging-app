

const Addroom = () => {
    return (
        <div >
            {/* Addroom */}
            <div className='img pl-80 pt-20'>
                <div className='border shadow rounded h-4/6 w-3/5 p-6 bg-white'>
                    <p className="text-2xl font-semibold pb-5">Add</p>

                    <div>
                        <form action="" className="justify-center flex flex-col">
                            <label htmlFor="" className="text-xl">Name</label>
                            <input type="text" name="name" className="border shadow p-2 my-2 rounded-md" />
                            <label htmlFor="" className="text-xl">Description</label>
                            <input type="text" name="description" className="border shadow p-2 my-2 rounded-md" />
                            <div className="flex ">
                                <button className="border shadow w-fit h-fit p-2 m-2 rounded-md">Cancel</button>
                                <button className="border shadow w-fit h-fit p-2 m-2 rounded-md">Create</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Addroom;