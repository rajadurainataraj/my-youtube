import { USER_ICON } from "./const"

const CommentsData = [
    {
      name: "Akshay Saini",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
    },
    {
      name: "Akshay Saini",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [
        {
          name: "Akshay Saini",
          text: "Lorem ipsum dolor sit amet, consectetur adip",
          replies: [],
        },
        {
          name: "Akshay Saini",
          text: "Lorem ipsum dolor sit amet, consectetur adip",
          replies: [
            {
              name: "Akshay Saini",
              text: "Lorem ipsum dolor sit amet, consectetur adip",
              replies: [
                {
                  name: "Akshay Saini",
                  text: "Lorem ipsum dolor sit amet, consectetur adip",
                  replies: [
                    {
                      name: "Akshay Saini",
                      text: "Lorem ipsum dolor sit amet, consectetur adip",
                      replies: [
                        {
                          name: "Akshay Saini",
                          text: "Lorem ipsum dolor sit amet, consectetur adip",
                          replies: [],
                        },
                      ],
                    },
                    {
                      name: "Akshay Saini",
                      text: "Lorem ipsum dolor sit amet, consectetur adip",
                      replies: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Akshay Saini",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
    },
    {
      name: "Akshay Saini",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
    },
    {
      name: "Akshay Saini",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
    },
    {
      name: "Akshay Saini",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
    },
  ];
const Comment = ({ data }) => {
    const { name, text } = data
    return (
        <div className="flex mt-2 border">

            <div className="">
                <img alt="logo" className="w-12 h-12" src={USER_ICON} />
            </div>

            <div className="flex flex-col pl-2 ">
                <div>{name}</div>
                <div>{text}</div>
            </div>
        </div>


    )
}
const CommentsList = ( {comments} ) => {
  
    return comments.map((comment, i) => (
        <div  key={i}>
            <Comment data={comment} />
            <div className="ml-5 border border-l-black">
                <CommentsList comments={comment.replies} />
            </div>
        </div>
    ))
}

const CommentContainer = () => {
    return (
        <div className="pl-8 mt-2   border-gray-600">
            <CommentsList comments={CommentsData} />
        </div>
    )
}
export default CommentContainer
