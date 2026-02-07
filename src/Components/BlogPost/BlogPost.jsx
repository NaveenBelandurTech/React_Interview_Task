import BlogData from "./BlogData";
import { FakeBlogData } from "../../../utils/BlogData";

const BlogPost = () => {
  return (
    <div className="app_container">
        {FakeBlogData?.map((data,i)=>{
            return <BlogData key={i} title={data.title} body={data.body} tags={data.tags} reactions={data.reactions} views={data.views}/>
        })}
    </div>
  );
};

export default BlogPost;
