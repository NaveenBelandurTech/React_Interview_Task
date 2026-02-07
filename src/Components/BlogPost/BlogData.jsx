import './BlogPost.css'
import {Link} from 'react-router'

const BlogData = ({title,body,tags,reactions,views}) => {


  return (
    <div className='container_'>
     <h3>{title}</h3>
     <p>{body}</p>
     <div className='tags_'>{tags.map((tag,i)=><Link to='/' key={i}>{`# ${tag}`}</Link>)}</div>
     <div className='tags_'>
       <p>Likes - {reactions.likes}</p>
       <p>DisLikes - {reactions.dislikes}</p>
      <p>WatchList - {views}</p>
     
     </div>

    </div>
  )
}

export default BlogData