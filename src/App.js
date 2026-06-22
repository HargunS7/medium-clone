import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
    <header>
        <nav className="navbar">
            <div className="logo">Medium</div>
            <ul className="nav-links">
                <li><a href="#">Our story</a></li>
                <li><a href="#">Membership</a></li>
                <li><a href="#">Write</a></li>
                <li><a href="#">Sign in</a></li>
                <li><a href="login.html"><button className="get-started" >Get started</button></a></li>
            </ul>
        </nav>
    </header>

    <main className="main-content">
        <div className="text-section">
            <h1>Human
                <br/>
                stories & ideas
            </h1>
            <p>A place to read, write, and deepen your understanding</p>
            <button className="start-reading">Start reading</button>
        </div>
        <div className="image-section">
            
            <img src="https://miro.medium.com/v2/format:webp/4*SdjkdS98aKH76I8eD0_qjw.png" alt=""/>
        </div>
    </main>

    <footer className="footer">
        <ul>
            <li><a href="#">Help</a></li>
            <li><a href="#">Status</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Terms</a></li>
            <li><a href="#">Text to speech</a></li>
            <li><a href="#">Teams</a></li>
        </ul>
    </footer>
</div>
  );
}

export default App;
