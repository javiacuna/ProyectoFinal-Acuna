import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const CartWidget = () => {
  const { totalQuantity } = useCart()

  return (
    <Link to="/cart" className="btn btn-outline-light position-relative">
      🛒
      {totalQuantity > 0 && (
        <span className="badge bg-secondary position-absolute top-0 start-100 translate-middle">
          {totalQuantity}
        </span>
      )}
    </Link>
  )
}

export default CartWidget
