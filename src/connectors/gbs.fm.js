'use strict';

Connector.playerSelector = '.playing';

Connector.getArtistTrack = () => {
    // We cannot use selectors
    const artist = document.querySelector('.playing .artistry').textContent;
    const track = document.querySelector('.playing td:nth-child(2)').textContent;
    // Use `splitArtistTrack` to split ArtistTrack strings
    console.log(`${artist} — ${track}`);
    return Util.splitArtistTrack(`${artist} — ${track}`, '—');
};