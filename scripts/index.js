let commentSection= document.querySelector(".comments-section");

let commentsArray = [{

    name: "Connor Walton",
    comment:"This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserve reverence. Let us appreciate this for what it is and what it contains.",
    date: "02/17/2021"
    
},
{   
    name: "Emilie Beach", 
    comment: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
    date: "01/09/2021"
    
},
{
    name: "Miles Acosta",
    comment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What beautiful expression of creativity. Can't get enough.",
    date: "12/20/2021"
    
}];

let parent = document.querySelector('.comments-section');



let displayArrayObjects = (comments) => {
    
let commentsDivider = document.createElement("div");
commentsDivider.classList.add("comments__divider");


let avatar = document.createElement("Image");
avatar.classList.add("comments-avatar");

// avatar.innerText =


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
commentTime.innerText = comments.date;

commentsSubDivider.appendChild(personName);
commentsSubDivider.appendChild(commentTime);

// commentsDivider.appendChild(commentsSubDivider);
// commentsDivider.appendChild(personComment);

let commentsContainer = document.createElement("div");
commentsContainer.classList.add("comments-container");

commentsContainer.appendChild(commentsSubDivider);
commentsContainer.appendChild(personComment);

commentsDivider.appendChild(avatar);
commentsDivider.appendChild(commentsContainer);


parent.appendChild(commentsDivider);

};

    commentsArray.forEach(object => {
        displayArrayObjects(object);
    })



let formEl = document.querySelector("form");
console.log(formEl);


function getFormattedDate() {
    const currentDate = new Date();
    return `${currentDate.getMonth() + 1}/${currentDate.getDate()}/${currentDate.getFullYear()}`;
}

formEl.addEventListener("submit", (e) => {
    e.preventDefault();

    let userName = e.target.name.value;
    let userComment = e.target.response.value; 
    let userDate = getFormattedDate();

    console.log(userName, userComment, userDate);

        let newComment = {

         name: userName, 
         comment: userComment, 
         date: userDate,

        }

    commentSection.innerText= "";

    commentsArray.unshift(newComment);
    console.log(commentsArray)

    commentsArray.forEach(comment => {
    displayArrayObjects(comment);
    })
    
    formEl.reset();
    
})




