import './CategoryGrid.css'
import CategoryCard from '../CategoryCard/CategoryCard'

const CategoryGrid = ({categories, categoryAPICall, stories}) => {

// const transformedCategories = categories.map(category => {
//   console.log(category.toLowerCase().split(' ').join(''))
// })

const catCards = categories.map((category, index) => {
      return(
        <CategoryCard 
        key={index}
        id={index}
        category={category}
        categoryAPICall={categoryAPICall}
        categories={categories}
        // transformedCategories={transformedCategories}
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