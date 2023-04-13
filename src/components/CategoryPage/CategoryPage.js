import './CategoryPage.css'
import Header from '../Header/Header'
import ArticleCard from '../ArticleCard/ArticleCard'

const CategoryPage = ({stories}) => {
// const [singleStory, setSingleStory] = useState({})

// showStoryDetails = (id) => {
//   const findStory = stories.find(story => story.id === id)
//   getStoryAPICall(`stories/${story.id}`)
//   .then((data) => {
//     console.log('data', data)
//     setSingleStory(data)
//     console.log(singleStory)
//     })
//     .catch((error) => console.log(error))
//   }

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