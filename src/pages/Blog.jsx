import React, { useEffect } from "react";
import { BlogCard, SocialMedia } from "../components";
import { BlogHero } from "../containers";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../redux/reducers/blogSlice";
import Loading from "../constants/Loading";

const Blog = () => {
  const dispatch = useDispatch();
  const { blogs, isLoading, error } = useSelector((state) => state.blog);

  useEffect(() => {
    dispatch(fetchBlogs());
  }, []);

  if (isLoading) {
    return <Loading />;
  } else if (error) {
    return <div>error ...</div>;
  }

  return (
    <section>
      <BlogHero />
      <BlogCard data={blogs} />
      <SocialMedia />
    </section>
  );
};

export default Blog;
