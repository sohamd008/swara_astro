import { atom } from 'nanostores';

/** @type {import('nanostores').WritableAtom<boolean>} */
export const isPlaying = atom(false);

/** @type {import('nanostores').WritableAtom<{url: string, title: string, artist: string} | null>} */
export const currentTrack = atom(null);

/** @type {import('nanostores').WritableAtom<number>} */
export const volume = atom(0.8);

/** @type {import('nanostores').WritableAtom<boolean>} */
export const showPlayer = atom(false);

/**
 * @param {{url: string, title: string, artist: string}} track
 */
export function playTrack(track) {
    currentTrack.set(track);
    isPlaying.set(true);
    showPlayer.set(true);
}

export function togglePlay() {
    isPlaying.set(!isPlaying.get());
}
