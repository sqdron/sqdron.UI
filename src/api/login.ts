import usersMock from './mock/users';


const LOGIN_ERR_MSG = `
  The username or password you have entered is invalid.
`;

export function login(username, password) {
    return new Promise((resolve, reject) => {
        const foundUsers = usersMock.filter((user) => user.Username === username);

        const isValid = (
            foundUsers.length === 1 &&
            foundUsers[0].Password === password
        );

        if (isValid) {
            setTimeout(() => resolve({
                token: '1234-5678-9101-1213',
                profile: {
                    firstName: 'Jane',
                    lastName: 'Smith',
                },
            }), 750);
        } else {
            setTimeout(() => reject(new Error(LOGIN_ERR_MSG)), 750);
        }
    });
}
