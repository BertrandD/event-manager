// npm module - safe deep cloning
import clone from 'safe-clone-deep'
import httpFetch from 'isomorphic-fetch'

function makeAuthenticatedRequest(url, opts = {}) {
    if (localStorage.token) {
        opts.headers = opts.headers || {};
        opts.headers['X-auth-token'] = localStorage.token;
    }
    return httpFetch(url, opts);
}

export function fetch (url, data) {
    return makeAuthenticatedRequest(url, data)
        .then(res => {
            if (res.status < 200 || res.status >= 400) {
                return Promise.reject(res);
            }
            return res;
        })
        .then(res => res.json())
}

export function post(url, data = {}) {
    return fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
}

export function put(url, data = {}) {
    return fetch(url, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
}
