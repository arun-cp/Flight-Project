fetch('https://restcountries.com/v3.1/all')
.then(response => response.json())
.then(data => {
  const countries = data.map(country => country.name.common);

  countries.sort();

  populateDropdown('departure-country', countries);
  populateDropdown('destination-country', countries);
})
.catch(error => {
  console.error('Error fetching countries:', error);
});

function populateDropdown(elementId, countries) {
const selectElement = document.getElementById(elementId);

countries.forEach(country => {
  const option = document.createElement('option');
  option.text = country;
  selectElement.appendChild(option);
});
}

var modal = document.getElementById("myModal");
// Get the button that opens the modal
var btn = document.getElementById("booking-form");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks the button, open the modal 

            // Get the selected date from the input field


            // Check if the selected date is in the past or more than 3 months in the future
btn.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form submission
    const selecteddDate = new Date(document.getElementById('departure-date').value);
    const selectedaDate = new Date(document.getElementById('arrival-date').value);
            // Get the current date
            const currentDate = new Date();

            // Calculate the date that is 3 months from now
            const threeMonthsFromNow = new Date();
            threeMonthsFromNow.setMonth(currentDate.getMonth() + 3);
    if (selectedaDate < currentDate || selecteddDate < currentDate) {
                alert("Selected date is in the past. Please select a future date.");
            } else if (selectedaDate > threeMonthsFromNow || selecteddDate > threeMonthsFromNow) {
                alert("Selected date is more than 3 months in the future. Please select a date within the next 3 months.");
            } else {
              const departureCountry = document.getElementById('departure-country').value;
    const destinationCountry = document.getElementById('destination-country').value;
    const departuredate = document.getElementById('departure-date').value;
    const arrivalDate = document.getElementById('arrival-date').value;
    const Passengers = document.getElementById('passenger-count').value;
    const classType = document.getElementById('class-type').value;
    document.getElementById('from-show').innerText = "From : "+departureCountry;
      document.getElementById('to-show').innerText = "To : "+destinationCountry;
      document.getElementById('ddate-show').innerText = "Departure Date : "+departuredate;
      document.getElementById('adate-show').innerText = "Arrival Date : "+arrivalDate;
      document.getElementById('class-show').innerText = "Class : "+classType;
      document.getElementById('passengers-show').innerText = "No of Passengers : "+Passengers;

    modal.style.display = "block";
            }
                
            
    
  });
 

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}