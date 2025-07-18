import "./nav.css"
import { FiHeart } from 'react-icons/fi'
import { AiOutlineShoppingCart, AiOutlineUserAdd } from 'react-icons/ai'
const Nav = ({handleInputChange,query}) => {
  return <nav>
    <div className="nav-container">
      <input type='text' placeholder="serarch for shoes" value={query} onChange={handleInputChange} className="search-input" >
      </input>
    </div>
    <div className="nav-container">
      <a href="#">
        <FiHeart className='nav-icons' />
      </a>
      <a href="#">
        <AiOutlineShoppingCart className='nav-icons' />
      </a>
      <a href="#">
        <AiOutlineUserAdd className='nav-icons' />
      </a>
    </div>
  </nav>
}

export default Nav
