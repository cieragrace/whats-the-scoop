import './CategoryCard.css'
import { Link } from 'react-router-dom'

const CategoryCard = ({category, categoryAPICall, transformedCategories}) => {

  return (
    <Link to= '/:category' className='cat-card-link'>
        <div className='cat-card-img' onClick={() => categoryAPICall(transformedCategories)}></div>
        <p>{`${category}`}</p>
    </Link>
  )
}

export default CategoryCard