const form = document.getElementById('form'),
search = document.getElementById('search'),
result = document.getElementById('result'),
more = document.getElementById('more'),
apiURL = 'https://api.lyrics.ovh';

//  Search Songs with API
async function searchSongs(term) {
    const res = await fetch(`${apiURL}/suggest/${term}`);
    const data = await res.json();

    //  Calling ShowData to show data on DOM

    showData(data);
}

//  Show song and artist in DOM

function showData(data){
    console.log(data)
}

//  Form where user puts the serach term
form.addEventListener('submit', e => {
    e.preventDefault();

    const searchTerm = search.value.trim();

    if (!searchTerm) {
        alert('Please type in a search term');
    } else {
        searchSongs(searchTerm);
    }
})