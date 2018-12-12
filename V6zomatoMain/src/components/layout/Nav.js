import React, { Component } from 'react'

class Nav extends Component {
  render() {
    return (
      <div id="navbar">
        <nav class="navbar navbar-expand-lg  ">
          <div class="collapse navbar-collapse">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item ">
                <a class="nav-link" href="http://localhost:3001/">Join</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="http://localhost:3001/login">Login</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="http://localhost:3001/home">Map</a>
              </li>
            </ul>
          </div>
      </nav>
        
      </div>
    )
  }
}
export default Nav