// Fetch the JSON file and display the data in the console
fetch('./cats.json')
    .then(response => response.json())
    .then(data => {
        // Iterate through the array using forEach and display fields to the console

        data.forEach(cat => { // Updated variable name to cat
            console.log(`Cat ID: ${cat[" Cat id"]}, Name: ${cat.name}, Age: ${cat.age},color: ${cat.color}`);
            displayCatInfo(cat); // Display cat info in the HTML
        });
    })
    .catch(error => console.error('Error fetching JSON:', error));

//function to display cat info in the HTML
function displayCatInfo(cat) 
{
    const outputDiv = document.getElementById('output');
    const catInfo = document.createElement('p');
    catInfo.innerHTML = `<strong>Cat ID:</strong> ${cat[" Cat id"]}, <strong>Name:</strong> ${cat.name}, <strong>Age:</strong> ${cat.age}, <strong>Color:</strong> ${cat.color}`;
    outputDiv.appendChild(catInfo);
}
