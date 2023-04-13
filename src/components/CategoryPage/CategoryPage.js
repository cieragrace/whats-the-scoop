import './CategoryPage.css'
import ArticleCard from '../ArticleCard/ArticleCard'

const CategoryPage = ({stories}) => {

const storyCard = stories.map((story, index) => {
  console.log(story)
  return(
    <ArticleCard
      key={index}
      id={index}
      story={story}
    />
  )
})
  return (
      <section className='category-page-container'>
        {storyCard}
      </section>
  )
}

export default CategoryPage