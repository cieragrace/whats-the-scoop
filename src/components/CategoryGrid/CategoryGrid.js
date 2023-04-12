import './CategoryGrid.css'
import CategoryCard from '../CategoryCard/CategoryCard'

const CategoryGrid = ({categories, categoryAPICall}) => {
// const transformedCategories = [];

const transformedCategories = categories.forEach(category => {
  return category.toLowerCase().replace(/\s/g, '');
});

console.log(transformedCategories);

const catCard = categories.map((category, index) => {
      return(
        <CategoryCard 
        key={index}
        id={index}
        category={category}
        categoryAPICall={categoryAPICall}
        transformedCategories={transformedCategories}
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