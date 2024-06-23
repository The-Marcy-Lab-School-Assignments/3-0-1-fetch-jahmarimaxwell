const userUrl = 'https://jsonplaceholder.typicode.com/users'

export const checkResponseStatus = () => {
    return fetch(userUrl)
        .then((response) => {
            return {
                status: response.status,
                ok: response.ok,
                url: response.url
            };
            // grabbing the reponse from fetch and returning each 
            // property
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
    return fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
        .then(response => {
            return response.json();
            // storing response to a variable called posts
        })
        .then(response => {
             return response.slice(0, maxNumPosts);
        
        })
}

export const createNewUser = (newUserData) => {
        return fetch(userUrl, {
            method: 'POST',
            body: JSON.stringify(newUserData),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((response) => {
            return response.json();
        })
    };