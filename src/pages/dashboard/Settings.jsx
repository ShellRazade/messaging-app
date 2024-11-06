import React from 'react'

const Settings = () => {
    return (
        <div>Settings

            <div>
                <p>Profile</p>
                <span>avatar</span>
                <p>John Doe</p>
                <p>info@gmail.com</p>

                <div>
                    <label htmlFor="">User Name</label>
                    <input type="text" placeholder='user name' />
                </div>

            </div>

        </div>
    )
}

export default Settings;