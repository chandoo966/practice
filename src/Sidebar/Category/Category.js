import "./Category.css"
import Input from "../../components/Input"
function Category({ handleChange }) {
  return <>
    <h2 className="sidebar-title">
      Category
    </h2>
    <div >
      <label className="sidebar-label-container">
        <input onChange={handleChange} type="radio" value="" name="test" />
        <span className="checkmark all" ></span>All
      </label>
      <Input handleChange={handleChange} value="sneakers" name="test" title="Sneakers" />
      <Input handleChange={handleChange} value="flats" name="test" title="Flats" />
      <Input handleChange={handleChange} value="sandals" name="test" title="Sandals" />
      <Input handleChange={handleChange} value="heels" name="test" title="Heels" />
    </div>
  </>
}

export default Category
