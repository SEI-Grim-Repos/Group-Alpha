import { getComment, getComments, createComment } from "./services/comment.js";


getComments()
.then(res => console.log(res))