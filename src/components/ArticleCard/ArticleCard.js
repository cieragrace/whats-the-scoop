import { Link } from 'react-router-dom'
import './ArticleCard.css'

const ArticleCard = ({story}) => {

return (
  <Link to='/' className='article-card-link'>
    <h2 className='story-title'>{`${story.title}`}</h2>
    <p className='abstract-container'>{`${story.abstract}`}</p>
  </Link>
  )
}

export default ArticleCard