import './CategoryGrid.css'
import CategoryCard from '../CategoryCard/CategoryCard'

const CategoryGrid = ({categories, categoryAPICall, stories}) => {

const catCards = categories.map((category, index) => {
      return(
        <CategoryCard 
        className='cat-card'
        key={index}
        id={index}
        category={category}
        categoryAPICall={categoryAPICall}
        categories={categories}
        data-cy={`category-card-${category}`}
        />
      )
    })

  return(
    <section className='grid-container'>
      {catCards}
    </section>
  )
}

export default CategoryGrid