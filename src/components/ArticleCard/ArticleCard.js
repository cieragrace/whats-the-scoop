import { Link } from 'react-router-dom'
import './ArticleCard.css'

const ArticleCard = ({story}) => {

return (
  <a href={`${story.url}`} target="_blank" rel="noopener noreferrer" className='article-card-link'>
    <h2 className='story-title'>{`${story.title}`}</h2>
    <p className='byline'>{`${story.byline}`}</p>
    <p className='abstract-container'>{`${story.abstract}`}</p>
  </a>
  )
}

export default ArticleCard