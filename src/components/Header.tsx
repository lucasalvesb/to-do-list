import './Header.css';
import rocketLogo from '../assets/rocket.svg'

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <img
          src={rocketLogo}
          alt="logo do míssil"
        />
        <p className="todo">
          <span className="to">to</span>
          <span className="do">do</span>
        </p>
      </div>
    </header>
  )
}