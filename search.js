// Sample data for demonstration purposes
const candidates = [
    { name: 'John Doe', location: 'New York', job: 'Software Engineer' },
    { name: 'Jane Smith', location: 'San Francisco', job: 'Data Analyst' },
    { name: 'Bob Johnson', location: 'London', job: 'Project Manager' },
    // Add more candidate objects as needed
  ];

  document.getElementById('searchForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission

    const location = document.getElementById('locationInput').value.toLowerCase();
    const job = document.getElementById('jobInput').value.toLowerCase();

    // Filter candidates based on search criteria
    const filteredCandidates = candidates.filter(candidate => {
      const locationMatch = location ? candidate.location.toLowerCase().includes(location) : true;
      const jobMatch = job ? candidate.job.toLowerCase().includes(job) : true;
      return locationMatch && jobMatch;
    });

    displayResults(filteredCandidates);
  });

  function displayResults(candidates) {
    const searchResults = document.getElementById('searchResults');

    // Clear previous results
    searchResults.innerHTML = '';

    if (candidates.length === 0) {
      searchResults.innerHTML = '<p>No candidates found.</p>';
      return;
    }

    const table = document.createElement('table');
    table.classList.add('table', 'table-striped');

    const thead = document.createElement('thead');
    const headRow = document.createElement('tr');
    const headers = ['Name', 'Location', 'Job Role'];
    headers.forEach(headerText => {
      const th = document.createElement('th');
      th.textContent = headerText;
      headRow.appendChild(th);
    });
    thead.appendChild(headRow);
    table.appendChild(thead);

    const tbody = document.createElement('tbody');
    candidates.forEach(candidate => {
      const row = document.createElement('tr');
      const nameCell = document.createElement('td');
      nameCell.textContent = candidate.name;
      const locationCell = document.createElement('td');
      locationCell.textContent = candidate.location;
      const jobCell = document.createElement('td');
      jobCell.textContent = candidate.job;
      row.appendChild(nameCell);
      row.appendChild(locationCell);
      row.appendChild(jobCell);
      tbody.appendChild(row);
    });
    table.appendChild(tbody);

    searchResults.appendChild(table);
  }