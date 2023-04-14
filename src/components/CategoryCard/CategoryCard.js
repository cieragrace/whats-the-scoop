import './CategoryCard.css'
import { Link } from 'react-router-dom'

const CategoryCard = ({category, categoryAPICall}) => {

const handleClick = () => {
  const transformedCategory = category.toLowerCase().split(' ').join('')
  categoryAPICall(transformedCategory)
}

  return (
    <Link to={`/category/${category}`} data-cy={`${category}`} className='cat-card-link' onClick={() => handleClick()}>
        <p className='category-text'>{`${category}`}</p>
    </Link>
  )
}

export default CategoryCard