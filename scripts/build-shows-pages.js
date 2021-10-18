let parent = document.querySelector('.ticket-purchase');

let arrayObject = [{
    date: "Mon Sept 6 2021",
    venue: "Ronald Lane",
    location: "San Francisco, Ca"
},
{
    date: "Tues Sept 21 2021",
    venue: "Pier 3 East",
    location: "San Francsico, Ca"
},
{
    date: "Fri Oct 15 2021",
    venue: "View Lounge",
    location: "San Francsico, Ca"
},
{
    date: "Sat Nov 06 2021",
    venue: "Hyatt Agency",
    location: "San Francsico, Ca"
},
{
    date: "Fri Nov 26 2021",
    venue: "Moscow Center",
    location: "San Francsico, Ca"
},
{
    date: "Wed Dec 15 2021",
    venue: "Press Club",
    location: "San Francsico, Ca"
}
];

<<<<<<< HEAD
// let createShowDiv = document.createElement('div');
    // createShowDiv.classList.add("shows-tickets");
    // let parentShowDiv = document.querySelector('.shows-tickets');
=======
>>>>>>> sprint-2
    let createShowsTitle = document.createElement('h2'); 
    createShowsTitle.innerText = 'Show'; 
    parent.appendChild(createShowsTitle);

<<<<<<< HEAD
    let createShowsInfo = document.createElement('div');
    createShowsInfo.classList.add("shows-info");
    parent.appendChild(createShowsInfo);


let displayTicketInfo = (ticketInfo) => {


    // let createShowDiv = document.createElement('div');
    // createShowDiv.classList.add("shows-tickets");

    // parent.appendChild(createShowDiv);
    // console.log(parent);

    // let parentShowDiv = document.querySelector('.shows-tickets');
    // let createShowsTitle = document.createElement('h2'); 
    // createShowsTitle.innerText = 'Show'; 
    let createShowsInfo = document.createElement('div');
    createShowsInfo.classList.add("shows-info");
    let createShowsInfoContainer = document.createElement('article');


    // parent.appendChild(createShowsTitle);
    // parent.appendChild(createShowsInfo);

    

=======
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
   
>>>>>>> sprint-2
    let createShowsInfoSubtitle = document.createElement('h3');
    createShowsInfoSubtitle.classList.add("shows-info__subtitle");
    createShowsInfoSubtitle.innerText = 'Date';

    createShowsInfo.appendChild(createShowsInfoSubtitle);

    let createShowsInfoDate = document.createElement('p');
    createShowsInfoDate.classList.add("shows-info__date");
    createShowsInfoDate.innerText = ticketInfo.date;

    createShowsInfo.appendChild(createShowsInfoDate);


    let createShowsInfoSubtitle1 = document.createElement('h3');
    createShowsInfoSubtitle1.classList.add("shows-info__subtitle");
    createShowsInfoSubtitle1.innerText = 'Venue';

    createShowsInfo.appendChild(createShowsInfoSubtitle1);

    let createShowsInfoVenue = document.createElement('p');
    createShowsInfoVenue.classList.add("shows-info__venue");
    createShowsInfoVenue.innerText = ticketInfo.venue;

    createShowsInfo.appendChild(createShowsInfoVenue);

    let createShowsInfoSubtitle2 = document.createElement('h3');
    createShowsInfoSubtitle2.classList.add("shows-info__subtitle");
    createShowsInfoSubtitle2.innerText = 'Location';

    createShowsInfo.appendChild(createShowsInfoSubtitle2);

    let createShowsInfoLocation = document.createElement('p');
    createShowsInfoLocation.classList.add("shows-info__location");
    createShowsInfoLocation.innerText = ticketInfo.location;

    createShowsInfo.appendChild(createShowsInfoLocation);

<<<<<<< HEAD
    // createShowsInfoContainer.appendChild(createShowsInfo);
    parent.appendChild(createShowsInfo);

    let parentShowInfo = document.querySelector('.shows-info');

    // parentShowInfo.appendChild(createShowsInfoSubtitle);
    // parentShowInfo.appendChild(createShowsInfoDate);
    // parentShowInfo.appendChild(createShowsInfoSubtitle1);
    // parentShowInfo.appendChild(createShowsInfoVenue);
    // parentShowInfo.appendChild(createShowsInfoSubtitle2);
    // parentShowInfo.appendChild(createShowsInfoLocation);

    console.log(parentShowInfo);

    // arrayObject.forEach(object => {
    //     displayTicketInfo(object);
    // })
    
=======
    let createButton = document.createElement("button");
    createButton.classList.add("shows-info__button");
    createButton.innerText = 'BUY TICKETS';

    createShowsInfo.appendChild(createButton);
    createContainer.appendChild(createShowsInfo);


    parent.appendChild(createContainer);
>>>>>>> sprint-2
};


arrayObject.forEach(object => {
    displayTicketInfo(object);
})