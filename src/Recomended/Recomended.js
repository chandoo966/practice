import Button from '../components/Button'
import './Recomended.css'
const Recomended = ({handleClick}) => {
  return <>
  <div className=''>
    <h2 className='recomended-title'>recomended</h2>
    <div className="recomended-flex">
      <Button onClickHandler={handleClick} value="" title="All products"/>
      <Button onClickHandler={handleClick} value="Nike" title="Nike"/>
      <Button onClickHandler={handleClick} value="Adidas" title="Adidas"/>
      <Button onClickHandler={handleClick} value="Puma" title="Puma"/>
      <Button onClickHandler={handleClick} value="Vans" title="Vans"/>
          </div>
  </div>
  </>
}

export default Recomended
