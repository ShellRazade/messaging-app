

const Addroom = () => {
    return (
        <div>Addroom
            <div className='pl-80 pt-20'>
                <div className='border shadow rounded h-4/6 w-3/5 p-6'>
                    <p>Add</p>

                    <div>
                        <form action="">
                            <label htmlFor="">Name</label>
                            <input type="text" />
                            <label htmlFor="">Description</label>
                            <input type="text" />
                            <div>
                                <button>Cancel</button>
                                <button>Create</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Addroom;