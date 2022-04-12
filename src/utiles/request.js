export default function request (method, url, body) {
method = method.toUpperCase();
    if (method === 'GET') {
        body = undefined;
    } else {
        body = body && JSON.stringify(body);
    }

    return fetch(url, {
        method,
        headers: {
        'Content-Type': 'application/json',
        'Accept':'application/json,text/plain,*/*',
        },
        body
    }).then((res) => {
            return res.json();
        });
}
  
  export const get = url => request('GET', url);
  export const post = (url, body) => request('POST', url, body);
  export const put = (url, body) => request('PUT', url, body);
  export const del = (url, body) => request('DELETE', url, body);
  export const patch = (url, body) => request('PATCH', url, body);