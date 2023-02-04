import React, { useCallback } from "react";
import CommentItem from "./CommentItem";

const Comments = ({ commentList }) => {
  //   const handleClick = () => {
  //     console.log("clicked!");
  //   };
  // 함수를 메모이제이션할 때, useCallback 사용
  const handleClick = useCallback(() => {
    console.log("clicked!");
  }, []);

  return (
    <div>
      {commentList.map((comment) => (
        <CommentItem key={comment.title} title={comment.title} content={comment.content} likes={comment.likes} onClick={handleClick} />
      ))}
    </div>
  );
};

export default Comments;
