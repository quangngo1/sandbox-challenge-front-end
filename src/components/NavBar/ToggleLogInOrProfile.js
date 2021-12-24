import {Link} from "react-router-dom";
import React from "react";
import {useDispatch, useSelector} from "react-redux";

const userLoggedIn = (state) => state.user

const ToggleLoginOrProfile = () => {
    const user = useSelector(userLoggedIn)
    const dispatch = useDispatch()

    const logout = () => {
        const action = {
            type: 'logout'
        }
        dispatch(action)
    }

    if (user.loggedIn) {
        return (
            <div>
                <Link to='/profile' className='nav-link'>
                    <button className='btn btn-outline-success float-left d-none d-xxl-block d-xl-block d-lg-block' type='submit'>
                        {user.name}'s Profile
                    </button>
                </Link>

                <Link to='/profile' className="nav-link d-block d-sm-block d-md-block d-lg-none">
                <i className="fas fa-user icon-padding green fa-2x"/>
                </Link>
                <Link to='/'>
                    <button className='btn btn-outline-success logout-posn d-none d-xxl-block d-xl-block d-lg-block' onClick={logout}>
                        Log Out
                    </button>
                </Link>
                <button className="nav-link d-block d-sm-block d-md-block d-lg-none logout-posn logout-size btn-style" onClick={logout}>
                    <i className="fas fa-sign-out-alt icon-padding green fa-2x"/>
                </button>

            </div>

        )
    } else {
        return (
            <div>
                <Link to='/login' className="nav-link">
                    <button className="btn btn-outline-success d-none d-xxl-block d-xl-block d-lg-block"
                            type="submit">Log In
                    </button>

                </Link>
                <Link to='/login' className="nav-link d-block d-sm-block d-md-block d-lg-none">
                    <i className="fas fa-sign-in-alt icon-padding green fa-2x"/>
                </Link>
            </div>


        )

    }
}

export default ToggleLoginOrProfile