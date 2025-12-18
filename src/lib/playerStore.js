import { atom, map } from 'nanostores';

export const isPlaying = atom(false);
export const currentTrack = atom(null);
export const playlist = atom([]);
export const currentIndex = atom(-1);
export const volume = atom(0.8);
export const showPlayer = atom(false);

/**
 * @param {Array<{url: string, title: string, artist: string, image?: string}>} tracks
 * @param {number} index
 */
export function playCollection(tracks, index = 0) {
    playlist.set(tracks);
    currentIndex.set(index);
    currentTrack.set(tracks[index]);
    isPlaying.set(true);
    showPlayer.set(true);
}

/**
 * @param {{url: string, title: string, artist: string, image?: string}} track
 */
export function playTrack(track) {
    playlist.set([track]);
    currentIndex.set(0);
    currentTrack.set(track);
    isPlaying.set(true);
    showPlayer.set(true);
}

export function togglePlay() {
    isPlaying.set(!isPlaying.get());
}

export function nextTrack() {
    const list = playlist.get();
    const index = currentIndex.get();
    if (index < list.length - 1) {
        currentIndex.set(index + 1);
        currentTrack.set(list[index + 1]);
        isPlaying.set(true);
    }
}

export function prevTrack() {
    const list = playlist.get();
    const index = currentIndex.get();
    if (index > 0) {
        currentIndex.set(index - 1);
        currentTrack.set(list[index - 1]);
        isPlaying.set(true);
    }
}
