import { comments } from '../../mockData';
import { IUser } from '../users/interfaces';
import usersServices from '../users/services';
import { IComment, ICommentSQL } from './interfaces';

const commentsService = {
  getAllComments: () => {
    const commentsWithUsers = comments.map((comment) => {
      let user = usersServices.findUserById(comment.id!);
      const commentWithUser = {
        id: comment.id,
        content: comment.content,
        user,
      };
      return commentWithUser;
    });
    return commentsWithUsers;
  },
  getCommentById: (id: number): IComment | undefined => {
    const comment = comments.find((element) => element.id === id);
    return comment;
  },
  findCommentsByPostId: (id: number): IComment[] => {
    const postComments = comments.filter((comment) => comment.postId === id);
    return postComments;
  },
  createComment: (newComment: IComment) => {
    const id = comments.length + 1;
    const comment: IComment = {
      id,
      ...newComment,
    };
    comments.push(comment);
    return id;
  },
  deleteComment: (id: number): Boolean => {
    const index = comments.findIndex((element) => element.id === id);
    if (index === -1) return false;
    comments.splice(index, 1);
    return true;
  },
};

export default commentsService;
