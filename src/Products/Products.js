import { AiFillStar } from "react-icons/ai";
import { BsFillBagHeartFill } from "react-icons/bs";
import "./Products.css"
import Card from "../components/Card"
const Products = ({result}) => {
  return <>
    <section className="card-container">
    {result}
    </section>

  </>
}

export default Products
