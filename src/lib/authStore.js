import { atom } from 'nanostores';
import { onAuthStateChanged, signOut as firebaseSignOut } from 'firebase/auth';
import { auth } from './firebase';

export const userStart = atom(null); // null = loading, false = not logged in, object = user

// Subscribe to Firebase Auth state
if (typeof window !== 'undefined') {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            userStart.set({
                uid: user.uid,
                email: user.email,
                displayName: user.displayName,
                photoURL: user.photoURL
            });
        } else {
            userStart.set(false);
        }
    });
}

export const signOut = async () => {
    await firebaseSignOut(auth);
}
