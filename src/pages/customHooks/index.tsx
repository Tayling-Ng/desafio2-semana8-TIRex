import { useMemo } from "react";
import { useFetchPosts } from "./useFetchPosts";

export const CustomHooks = () => {

  const { fetchPosts, isFetchingPosts, posts } = useFetchPosts();

  const postsRenderMemo = useMemo(() => {
    return posts.map((post) => (
      <div
        className="flex flex-col gap-10 py-8 px-6 border border-zinc-700 rounded-lg w-fit"
        key={post.id}
      >
        <h1 className="font-extrabold text-red-800 w-40">{post.title}</h1>
        <p className="font-medium text-md text-zinc-700 w-40">{post.body}</p>
      </div>
    ));
  }, [posts]);

  return (
    <div className="flex flex-col ">
      <div className="flex py-3 gap-10">
        <h1 className="text-2xl font-extrabold text-zinc-700" >customHooks</h1>
        <button
          type="button"
          className="border rounded-lg border-zinc-700 p-1 text-center w-56"
          onClick={() => fetchPosts()}
          disabled={isFetchingPosts}
        >
          {isFetchingPosts ? "..." : "Buscar"}
        </button>
      </div>

      <div className="w-full flex  flex-wrap gap-8">
        {isFetchingPosts ? <p>Carregando...</p> : postsRenderMemo}
      </div>
    </div>
  );
};
