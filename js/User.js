class User {

    constructor() {
        
    }

    saveUser(userData) {
        const newUser = {
            id: Date.now(),
            ...userData
        };
        console.log(newUser);
    }
}