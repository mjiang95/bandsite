// let commentsArray = [{

    // img: src="" alt="",
    // name: Connor Walton,
    // comment:'This is art. This is inexplicable magic expressed in the purest way, everything that makes up 
            //  this majestic work deserve reverence. Let us appreciate this for what it is and what it contains.,'
    // time: 02/17/2021
// },
// {   
    // img: src="" alt="",
    // name: Emilie Beach, 
    // comment:'I feel blessed to have seen them in person. What a show! They were just perfection. 
            // If there was one day of my life I could relive, this would be it. What an incredible day.',
    // time: 01/09/2021

// },
// {
    // img: src="" alt="",
    // name: Miles Acosta,
    // comment: 'I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. 
            // Shivers straight down my spine. What beautiful expression of creativity. Can't get enough.', 
    // time: 12/20/2021
// }];

let arrayObjects = (comments) => {

let parent = document.querySelector('.comments-section');

let commentsDivider = document.createElement("div");
commentsDivider.classList.add("comments__divider");

let avatar = document.createElement("Image");
avatar.classList.add("comments-avatar");

// avatar.innerText =

parent.appendChild(commentsDivider);
parent.appendChild(avatar);

let parentCommentsDivider = document.querySelector(".comments__divider");
parentCommentsDivider.appendChild(avatar);


let commentsSubDivider = document.createElement("div");
commentsSubDivider.classList.add("comments__sub-divider");
parentCommentsDivider.appendChild(commentsSubDivider);
console.log(parentCommentsDivider);

let personName = document.createElement("h2");
personName.classList.add("comments__name");
// personName.innerText = "";

let personComment = document.createElement("h3");
personComment.classList.add("person__comments");
// personComment.innerText = "";

let commentTime = document.createElement("p");
commentTime.classList.add("comment-Time");
// commentTime.innerText = "";

let parentSubDivider = document.querySelector(".comments__sub-divider");
parentSubDivider.appendChild(personName);
parentSubDivider.appendChild(personComment);
parentSubDivider.appendChild(commentTime);

console.log(parentSubDivider);
}





