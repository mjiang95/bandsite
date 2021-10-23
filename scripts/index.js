let commentSection = document.querySelector(".comments-section");
const API_KEY_STRING = "?api_key=5982046c-40a3-48ae-8614-23aea4d1a7e9";
const userCommentUrl = `https://project-1-api.herokuapp.com/comments${API_KEY_STRING}`;
console.log(userCommentUrl);

let parent = document.querySelector(".comments-section");

let displayArrayObjects = (comments) => {
  let commentsDivider = document.createElement("div");
  commentsDivider.classList.add("comments__divider");

  let avatar = document.createElement("Image");
  avatar.classList.add("comments-avatar");

  let commentsSubDivider = document.createElement("div");
  commentsSubDivider.classList.add("comments__sub-divider");

  let personName = document.createElement("h2");
  personName.classList.add("comments__name");
  personName.innerText = comments.name;

  let personComment = document.createElement("h3");
  personComment.classList.add("person__comments");
  personComment.innerText = comments.comment;

  let commentTime = document.createElement("p");
  commentTime.classList.add("comment-Time");

    let timestamp = comments.timestamp; 
    let dateObj = new Date(timestamp);
    let month = dateObj.getMonth() + 1;
    let Year = dateObj.getFullYear();
    let date = dateObj.getDate();

    commentTime.innerText = `${month}/${date}/${Year}`;

  commentsSubDivider.appendChild(personName);
  commentsSubDivider.appendChild(commentTime);

  let commentsContainer = document.createElement("div");
  commentsContainer.classList.add("comments-container");

  commentsContainer.appendChild(commentsSubDivider);
  commentsContainer.appendChild(personComment);

  commentsDivider.appendChild(avatar);
  commentsDivider.appendChild(commentsContainer);

  parent.appendChild(commentsDivider);
};

axios.get(userCommentUrl).then((result) => {
    console.log(result.data);

    let defaultComment = result.data;
    console.log(defaultComment);
    const sortedComments = result.data.slice().sort((a, b) => b.timestamp - a.timestamp);
    console.log(sortedComments);

    sortedComments.forEach((comment) => {
    displayArrayObjects(comment);
  });


});

let formEl = document.querySelector("form");
console.log(formEl);

function getFormattedDate() {
    const currentDate = new Date();
    return `${
      currentDate.getMonth() + 1
    }/${currentDate.getDate()}/${currentDate.getFullYear()}`;
  }

formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  let userName = e.target.name.value;
  let userComment = e.target.response.value;
  let userDate = getFormattedDate();

  axios
    .post(userCommentUrl, {
      name: userName,
      comment: userComment
    })

    .then((result) => {

    axios
        .get(userCommentUrl)
        .then((result) => {
          const sortedComments = result.data.slice().sort((a, b) => b.timestamp - a.timestamp);
          console.log(sortedComments);

          sortedComments.forEach((comment) => {
          displayArrayObjects(comment);
        })

        .catch((error) => {
          console.log(error);
        });
    });

  commentSection.innerText = "";

  formEl.reset();
    })
});
