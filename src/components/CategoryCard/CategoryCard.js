import './CategoryCard.css'
import { Link } from 'react-router-dom'

const CategoryCard = ({category}) => {

  return (
    <Link to= '/' className='cat-card-link'>
        <div className='cat-card-img'></div>
        <p>{`${category}`}</p>
    </Link>
  )
}

export default CategoryCard