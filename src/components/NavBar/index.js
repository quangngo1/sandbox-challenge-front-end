import React from "react";
import {Link, NavLink} from "react-router-dom";

const NavBar = () => {
  return (
      <div>
        <nav className="navbar navbar-expand bg-dark navbar-custom">
          <NavLink to='/'
                   className="navbar-brand fw-bolder">GratitudeNU</NavLink>
          <button className="navbar-toggler" type="button"
                  data-toggle="collapse" data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent" aria-expanded="false"
                  aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse"
               id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              {/*<li className="nav-item">
                <Link to='/' className="nav-link">
                  <button
                      className="btn btn-outline-primary d-none d-xxl-block d-xl-block d-lg-block"
                      type="submit">Home
                  </button>
                </Link>

                <Link to='/'
                      className="nav-link d-block d-sm-block d-md-block d-lg-none">
                  <i className="fas fa-home icon-padding fa-2x"/>
                </Link>

              </li>*/}

              <li className="nav-item">
                <Link to='/players' className="nav-link">
                  <button
                      className="btn btn-outline-warning d-none d-xxl-block d-xl-block d-lg-block"
                      type="submit">All Players
                  </button>
                </Link>
                <Link to='/players'
                      className="nav-link d-block d-sm-block d-md-block d-lg-none">
                  <i className="fas fa-users icon-padding yellow fa-2x"/>
                </Link>
              </li>

              <li className="nav-item">
                <Link to='/games' className="nav-link">
                  <button
                      className="btn btn-outline-primary d-none d-xxl-block d-xl-block d-lg-block"
                      type="submit">All Games
                  </button>
                </Link>
                <Link to='/games'
                      className="nav-link d-block d-sm-block d-md-block d-lg-none">
                  <i className="fas fa-search icon-padding yellow fa-2x"/>
                </Link>
              </li>

              <li className="nav-item">
                <Link to='/players/newPlayer' className="nav-link">
                  <button
                      className="btn btn-outline-success d-none d-xxl-block d-xl-block d-lg-block"
                      type="submit">Create Player
                  </button>
                </Link>
                <Link to='/players/newPlayer'
                      className="nav-link d-block d-sm-block d-md-block d-lg-none">
                  <i className="fas fa-user-plus icon-padding yellow fa-2x"/>
                </Link>
              </li>

              <li className="nav-item">
                <Link to='/games/newGame' className="nav-link">
                  <button
                      className="btn btn-outline-danger d-none d-xxl-block d-xl-block d-lg-block"
                      type="submit">Create Game
                  </button>
                </Link>
                <Link to='/players/newPlayer'
                      className="nav-link d-block d-sm-block d-md-block d-lg-none">
                  <i className="fas fa-plus icon-padding yellow fa-2x"/>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
  )
}
/*const userLoggedIn = (state) => state.user

const NavBar = () => {
  const user = useSelector(userLoggedIn);
  return (
      <div>
        <nav className="navbar navbar-expand bg-light navbar-custom">
          <NavLink to='/' className="navbar-brand fw-bolder">Rotten
            Eggs</NavLink>
          <button className="navbar-toggler" type="button"
                  data-toggle="collapse" data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent" aria-expanded="false"
                  aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse"
               id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to='/' className="nav-link">
                  <button className="btn btn-outline-primary d-none d-xxl-block d-xl-block d-lg-block"
                          type="submit">Home
                  </button>
                </Link>

                <Link to='/' className="nav-link d-block d-sm-block d-md-block d-lg-none">
                  <i className="fas fa-home icon-padding fa-2x"/>
                </Link>

              </li>

              <li className="nav-item">
                <Link to='/search' className="nav-link">
                  <button className="btn btn-outline-warning d-none d-xxl-block d-xl-block d-lg-block"
                          type="submit">Search
                  </button>
                </Link>
                <Link to='/search' className="nav-link d-block d-sm-block d-md-block d-lg-none">
                  <i className="fas fa-search icon-padding yellow fa-2x"/>
                </Link>
              </li>

              <li className="nav-item">
                <ToggleLoginOrProfile/>

              </li>
              <li className="nav-item">
                <Link to='/private-policy' className="nav-link ">
                  <button className="btn btn-outline-danger d-none d-xxl-block d-xl-block d-lg-block"
                          type="submit">Privacy
                  </button>
                </Link>
                <Link to='/private-policy' className="nav-link d-block d-sm-block d-md-block d-lg-none">
                  <i className="fas fa-file-alt icon-padding red fa-2x"/>
                </Link>

              </li>
            </ul>
          </div>
        </nav>


      </div>

  )
}*/

export default NavBar