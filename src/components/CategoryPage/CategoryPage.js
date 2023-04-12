import './CategoryPage.css'
import Header from '../Header/Header'
import ArticleCard from '../ArticleCard/ArticleCard'

const CategoryPage = ({stories}) => {

const storyCard = stories.map((story, index) => {
  return(
    <ArticleCard
      key={index}
      id={index}
      story={story}
    />
  )
})
  return (
    <main>
      <Header />
      <section>
        {storyCard}
      </section>
    </main>
  )
}

export default CategoryPage