import React from 'react';

import './App.css';
import './global.css';
import './Main.css'
import './Sidebar.css'

function App() {
  return (
    <div id="app">
      <aside>
        <strong>Register</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Github Username</label>
            <input name="github_username" id="github_username" required />
          </div>
          <div className="input-block">
            <label htmlFor="techs">Technologies</label>
            <input name="techs" id="techs" required />
          </div>
            <div className="input-group">
              <div className="input-block">
                <label htmlFor="latitude">Latitude</label>
                <input name="latitude" id="latitude" required />
              </div>
              <div className="input-block">
                <label htmlFor="longitude">Longitude</label>
                <input name="longitude" id="longitude" required />
              </div>
            </div>          
          <button type="submit">Save</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/18349592?s=400&u=b34281200c17951b2d5da9c30aeb805349ed806e&v=4" alt="" />
              <div className="user-info">
                <strong>Eduardo Dusik</strong>
                <span>Angular, React Js, Node Js</span>
                <p>Lover of RPG, card games and programming. I really like power metal and i'm unable to stay more than 12 hours without coffee.</p>
                <a href="https://github.com/edusik">access github profile</a>
              </div>
            </header>
          </li>


          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/18349592?s=400&u=b34281200c17951b2d5da9c30aeb805349ed806e&v=4" alt="" />
              <div className="user-info">
                <strong>Eduardo Dusik</strong>
                <span>Angular, React Js, Node Js</span>
                <p>Lover of RPG, card games and programming. I really like power metal and i'm unable to stay more than 12 hours without coffee.</p>
                <a href="https://github.com/edusik">Access github profile</a>
              </div>
            </header>
          </li>


          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/18349592?s=400&u=b34281200c17951b2d5da9c30aeb805349ed806e&v=4" alt="" />
              <div className="user-info">
                <strong>Eduardo Dusik</strong>
                <span>Angular, React Js, Node Js</span>
                <p>Lover of RPG, card games and programming. I really like power metal and i'm unable to stay more than 12 hours without coffee.</p>
                <a href="https://github.com/edusik">Access github profile</a>
              </div>
            </header>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/18349592?s=400&u=b34281200c17951b2d5da9c30aeb805349ed806e&v=4" alt="" />
              <div className="user-info">
                <strong>Eduardo Dusik</strong>
                <span>Angular, React Js, Node Js</span>
                <p>Lover of RPG, card games and programming. I really like power metal and i'm unable to stay more than 12 hours without coffee.</p>
                <a href="https://github.com/edusik">Access github profile</a>
              </div>
            </header>
          </li>

        </ul>
      </main>
    </div>
  );
}

export default App;
