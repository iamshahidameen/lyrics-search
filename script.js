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

//  Show Song Name and Artist Name in DOM

function showData(LyricsResults){
    let output = '';

    // First method with forEach

    LyricsResults.data.forEach( song => {
        output += `
            <li>
                <span>
                    <strong>${song.artist.name}</strong> - ${song.title}
                </span>
                <button class="btn" data-artist="$${song.artist.name}" data-song="${song.title}">Get Lyrics</button>
            </li>
        `;

        result.innerHTML = `
        <ul class="songs">${output}</ul>
        `;
    })
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