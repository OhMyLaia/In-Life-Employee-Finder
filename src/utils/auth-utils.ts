import { AuthError, SignStatus } from "../types";
import type { Router } from 'vue-router';


export const mapFirebaseError = (firebaseCode: string): AuthError => {
    switch (firebaseCode) {
        case 'auth/invalid-email':
            return AuthError.invalidEmail;

        case 'auth/wrong-password':
            return AuthError.invalidPassword;

        case 'auth/user-not-found':
            return AuthError.userNotFound;

        default:
            return AuthError.unknown;

    }
}

export const showStatusMessage = (statusParam: SignStatus, router: Router) => {
    let message: string = '';

    if (statusParam === 'success' && router.currentRoute.value.path === '/register') {
        message = 'User registered successfully.';

    } else if (statusParam === 'success' && router.currentRoute.value.path === '/login') {
        message = "Welcome again!";

    } else if (statusParam === 'failure') {
        message = 'Something went wrong, please try again';

    } else {
        message;
    }

    return message
}

export const showAuthMessage = (authParam: AuthError) => {
    switch (authParam) {
        case AuthError.invalidEmail:
            return 'Please enter a valid email.';

        case AuthError.invalidPassword:
            return 'Incorrect password.';

        case AuthError.userNotFound:
            return 'No user found with this email.';

        default:
            return 'Something went wrong, please try again.';
    }
}