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
//   commentTime.innerText = comments.timestamp;

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
  
  defaultComment.forEach((comments) => {
    const sortedActivities = result.data.slice().sort((a, b) => b.timestamp - a.timestamp);
    console.log(sortedActivities);
    displayArrayObjects(comments);
  });


});

let formEl = document.querySelector("form");
console.log(formEl);

// let newTimeConverter = comments.map((element) => )
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
      comment: userComment,
      // "date": userDate
    })

    .then((result) => {
      console.log(result.data);
        result.data.forEach((comment) => {
          displayArrayObjects(comment);

          // axios
          //   .get(userCommentUrl)
          //   .then((result) => {
          //       console.log(result.data);
          //       result.data.forEach((comment) => {
          //       displayArrayObjects(comment);
          //       // result.data.unshift(-1);
          //       });

          // let comments = result.data;
          // console.log(comments);
        })

        .catch((error) => {
          console.log(error);
        });
    });

  commentSection.innerText = "";

  formEl.reset();
});


// let newArrayDateConverted = comments.map((element) =>{

//     element.timestamp = dateConvert(element.timestamp);

// });
// console.log(newArrayDateConverted);