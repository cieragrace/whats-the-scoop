import { Link } from 'react-router-dom'
import './ArticleCard.css'

const ArticleCard = ({story}) => {

return (
  <Link to='/' className='srticle-card-link'>
    <p>{`${story}`}</p>
  </Link>
  )
}

export default ArticleCard