import { post } from "fetch-mock";

const userUrl = 'https://jsonplaceholder.typicode.com/users'

export const checkResponseStatus = () => {
    return fetch(userUrl)
        /*
            .then((response) => {
                console.log(response.url)
                console.log(response.ok)
                console.log(response.status)
            });
        */
        // this is logging to the console, not returning
        .then((response) => {
            return {
                status: response.status,
                ok: response.ok,
                url: response.url
            };
            // grabbing the reponse from fetch and returning each 
            // properties
        })
}

export const getUsers = () => {
    return fetch(userUrl)
        .then(response => {
            return response.json();
            // parses the body of the response
        })
}

export const getUserPosts = (userId, maxNumPosts = 3) => {

    return fetch(userUrl)
        .then(response => {
            const posts = response.json();
            // storing response to a variable called posts
            const postLimit = posts.slice(0, maxNumPosts);
            // limits max post by `.slice` method
            return postLimit;
        });
}

export const createNewUser = (newUserData) => {
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUserData),
    })
    const newUser = response.json();
    const id = 11;
    return {
        id,
        username: newUser.username,
        email: newUser.email,
    };
};