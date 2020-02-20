export class LoginCredentials {
    userName: string;
    password: string;
    constructor(name?: string, pass?: string) {
        this.userName = name || '';
        this.password = pass || '';
    }
}

export class LoginRequest {
    loginCredentials: LoginCredentials;
    remember = false;
}
