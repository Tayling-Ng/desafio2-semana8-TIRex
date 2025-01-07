import { useCallback, useState } from "react";

export interface Post {
  id: number;
  title: string;
  body: string;
}

export const useFetchPosts = () => {

  const [posts, setPosts] = useState<Post[]>([]);
  
  const [isFetchingPosts, setIsFetchingPosts] = useState(false);

  const fetchPosts = useCallback(async () => {
    setIsFetchingPosts(true);
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    setPosts(data);

    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsFetchingPosts(false);
  }, []);

  return {
    isFetchingPosts,
    posts,
    fetchPosts,
  };
};
