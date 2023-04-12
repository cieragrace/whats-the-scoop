import './CategoryGrid.css'
import CategoryCard from '../CategoryCard/CategoryCard'

const CategoryGrid = ({categories, categoryAPICall}) => {

const catCard = categories.map((category, index) => {
      return(
        <CategoryCard 
        key={index}
        id={index}
        category={category}
        categoryAPICall={categoryAPICall}
        />
      )
    })

  return(
    <section className='grid-container'>
      {catCard}
    </section>
  )
}

export default CategoryGrid