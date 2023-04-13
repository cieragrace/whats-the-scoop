import './CategoryCard.css'
import { Link } from 'react-router-dom'

const CategoryCard = ({category, categoryAPICall}) => {

const handleClick = () => {
  const transformedCategory = category.toLowerCase().split(' ').join('')
  console.log(transformedCategory)
  categoryAPICall(transformedCategory)
}

  return (
    <Link to={`/category/${category}`} className='cat-card-link' onClick={() => handleClick()}>
        {/* <div className='cat-card-img' ></div> */}
        <p className='category-text'>{`${category}`}</p>
    </Link>
  )
}

export default CategoryCard