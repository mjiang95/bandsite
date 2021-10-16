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

let displayTicketInfo = (ticketInfo) => {


    let createShowDiv = document.createElement('div');
    createShowDiv.classList.add("shows-tickets");

    parent.appendChild(createShowDiv);
    console.log(parent);

    let parentShowDiv = document.querySelector('.shows-tickets');
    let createShowsTitle = document.createElement('h2'); 
    createShowsTitle.classList.add("shows__title");
    createShowsTitle.innerText = 'Show'; 

    let createShowsInfo = document.createElement('div');
    createShowsInfo.classList.add("shows-info");


    parentShowDiv.appendChild(createShowsTitle);
    parentShowDiv.appendChild(createShowsInfo);

    let createShowsInfoSubtitle = document.createElement('h3');
    createShowsInfoSubtitle.classList.add("shows-info__subtitle");
    createShowsInfoSubtitle.innerText = 'Date';

    let createShowsInfoDate = document.createElement('p');
    createShowsInfoDate.classList.add("shows-info__date");
    createShowsInfo.innerText = ticketInfo.date;

    let createShowsInfoSubtitle1 = document.createElement('h3');
    createShowsInfoSubtitle1.classList.add("shows-info__subtitle");
    createShowsInfoSubtitle1.innerText = 'Venue';

    let createShowsInfoVenue = document.createElement('p');
    createShowsInfoVenue.classList.add("shows-info__venue");
    createShowsInfoVenue.innerText = ticketInfo.venue;

    let createShowsInfoSubtitle2 = document.createElement('h3');
    createShowsInfoSubtitle2.classList.add("shows-info__subtitle");
    createShowsInfoSubtitle2.innerText = 'Location';

    let createShowsInfoLocation = document.createElement('p');
    createShowsInfoLocation.classList.add("shows-info__location");
    createShowsInfoLocation.innerText = ticketInfo.location;


    let parentShowInfo = document.querySelector('.shows-info');

    parentShowInfo.appendChild(createShowsInfoSubtitle);
    parentShowInfo.appendChild(createShowsInfoDate);
    parentShowInfo.appendChild(createShowsInfoSubtitle1);
    parentShowInfo.appendChild(createShowsInfoVenue);
    parentShowInfo.appendChild(createShowsInfoSubtitle2);
    parentShowInfo.appendChild(createShowsInfoLocation);

    console.log(parentShowInfo);

    arrayObject.forEach(object => {
        displayTicketInfo(object);
    })
    
};



