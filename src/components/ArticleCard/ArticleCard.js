import { Link } from 'react-router-dom'
import './ArticleCard.css'

const ArticleCard = ({story}) => {

return (
  <Link to='/' className='article-card-link'>
    <h2>{`${story.title}`}</h2>
  </Link>
  )
}

export default ArticleCard