import { Box } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { SingleBlog } from "../containers";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { singleBlog } from "../redux/reducers/blogSlice";
import { Loading, Error } from "../constants";

const BlogDetail = () => {
  const { blog, isLoading, error } = useSelector((state) => state.blog);
  const dispatch = useDispatch();
  const link = useParams();

  useEffect(() => {
    dispatch(singleBlog(link.slug));
  }, []);

  if (isLoading) {
    return <Loading />;
  } else if (error) {
    return <Error route="Blog" path="/blog" message={error} />;
  }

  return (
    <Box my={12}>
      <SingleBlog blog={blog} similarBlogs={[]} />
    </Box>
  );
};

export default BlogDetail;
