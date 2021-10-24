let parent = document.querySelector('.ticket-purchase');
const API_KEY_STRING = "?api_key=1996a410-381a-4a15-948d-b8d336a28691";
const showDateURL = `https://project-1-api.herokuapp.com/showdates${API_KEY_STRING}`; 

let createShowsTitle = document.createElement('h2'); 
createShowsTitle.innerText = 'Show'; 
parent.appendChild(createShowsTitle);

let createTicketPurchaseDiv = document.createElement("div");
createTicketPurchaseDiv.classList.add("ticket-purchase__div");
parent.appendChild(createTicketPurchaseDiv);

let createDate = document.createElement("h3");
createDate.classList.add("ticket-purchase__subheader");
createDate.innerText = "Date";

let createVenue = document.createElement("h3");
createVenue.classList.add("ticket-purchase__subhearder");
createVenue.innerText = "Venue";

let createLocation = document.createElement("h3");
createLocation.classList.add("ticket-purchase__subheader");
createLocation.innerText = "Location";

createTicketPurchaseDiv.appendChild(createDate);
createTicketPurchaseDiv.appendChild(createVenue);
createTicketPurchaseDiv.appendChild(createLocation);

let createContainer = document.createElement("div");
createContainer.classList.add("ticket-purchase__container");
createContainer.appendChild(createTicketPurchaseDiv);

let displayTicketInfo = (ticketInfo) => {

let createShowsInfo = document.createElement('div');
createShowsInfo.classList.add("shows-info");

let createShowsInfoSubtitle = document.createElement('h3');
createShowsInfoSubtitle.classList.add("shows-info__subtitle");
createShowsInfoSubtitle.innerText = 'Date';

createShowsInfo.appendChild(createShowsInfoSubtitle);

let createShowsInfoDate = document.createElement('p');
createShowsInfoDate.classList.add("shows-info__date");

let timestamp = Number(ticketInfo.date); 
let dateObj = new Date(timestamp);
var  months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
let month = months[dateObj.getMonth()];
var days = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"]
let day = days[dateObj.getDay()]
let Year = dateObj.getFullYear();
let date = dateObj.getDate();

createShowsInfoDate.innerText = [day+" "+ month +" "+ date +" "+ Year];

createShowsInfo.appendChild(createShowsInfoDate);

let createShowsInfoSubtitle1 = document.createElement('h3');
createShowsInfoSubtitle1.classList.add("shows-info__subtitle");
createShowsInfoSubtitle1.innerText = 'Venue';

createShowsInfo.appendChild(createShowsInfoSubtitle1);

let createShowsInfoVenue = document.createElement('p');
createShowsInfoVenue.classList.add("shows-info__venue");
createShowsInfoVenue.innerText = ticketInfo.place;

createShowsInfo.appendChild(createShowsInfoVenue);

let createShowsInfoSubtitle2 = document.createElement('h3');
createShowsInfoSubtitle2.classList.add("shows-info__subtitle");
createShowsInfoSubtitle2.innerText = 'Location';

createShowsInfo.appendChild(createShowsInfoSubtitle2);

let createShowsInfoLocation = document.createElement('p');
createShowsInfoLocation.classList.add("shows-info__location");
createShowsInfoLocation.innerText = ticketInfo.location;

createShowsInfo.appendChild(createShowsInfoLocation);

let createButton = document.createElement("button");
createButton.classList.add("shows-info__button");
createButton.innerText = 'BUY TICKETS';

createShowsInfo.appendChild(createButton);
createContainer.appendChild(createShowsInfo);


parent.appendChild(createContainer);

createShowsInfo.addEventListener("mouseenter", (e) => {
    createShowsInfo.classList.add("shows-info--hover");
})

createShowsInfo.addEventListener("mouseleave", (e) => {
    createShowsInfo.classList.remove("shows-info--hover");
})

createShowsInfo.addEventListener("click", (e) => {
    createShowsInfo.classList.toggle("shows-info--active");
    })
};


axios
    .get(showDateURL)
    .then((result) => {
        let defaultComment = result.data;
        defaultComment.forEach(object => {
        displayTicketInfo(object);
    })
});
