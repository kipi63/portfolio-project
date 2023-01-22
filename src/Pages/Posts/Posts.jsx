import { Link } from "react-router-dom";
import { Section } from "../../Section";
import { useFetchData } from "../../components/dataFetching";
import "./post.scss";
import { Forms } from "./Forms";
import { Loading } from "../../components/Loading";
export const Posts = () => {
  const {
    data: posts,
    loading,
    error,
  } = useFetchData(`${process.env.REACT_APP_DOMAIN}/posts`);
  if (loading) return <Loading />;
  if (error) console.log(error);
  return (
    <Section>
      <div className="container-post">
        <h2>Our Posts</h2>
        <Forms />
        {posts?.map((post) => (
          <div className="post" key={post.id}>
            <div className="post-title">{post.title}</div>
            <div className="post-body">{post.body}</div>
          </div>
        ))}
      </div>
      <Link to="/" className="btn">
        Home
      </Link>
    </Section>
  );
};
