const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');

let searchData = [
  { id: 1, name: 'What is Web Developer' },
  { id: 2, name: 'Introduction' },
  // add more data here
];

searchInput.addEventListener('input', (e) => {
  const searchTerm = e.target.value.toLowerCase();
  const filteredData = searchData.filter((item) => {
    return item.name.toLowerCase().includes(searchTerm);
  });

  searchResults.innerHTML = '';
  filteredData.forEach((item) => {
    const listItem = document.createElement('li');
    listItem.textContent = item.name;
    searchResults.appendChild(listItem);
  });
});