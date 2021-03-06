import 'whatwg-fetch'

export default function request(url, options = {}) {

    const defaultOptions = {

    };
    const newOptions = { ...defaultOptions, ...options };
    if (
        newOptions.method === 'POST' ||
        newOptions.method === 'PUT' ||
        newOptions.method === 'DELETE'
    ) {
        console.log('newOptions::', newOptions);
        if (!(newOptions.body  instanceof FormData)) {
            newOptions.headers = {
                Accept: 'application/json',
                'Content-Type': 'application/json; charset=utf-8',
                ...newOptions.headers,
            };
            newOptions.body = JSON.stringify(newOptions.body);
        } else {
            // newOptions.body is FormData
            newOptions.headers = {
                Accept: 'application/json',
                ...newOptions.headers,
            };
        }
    }

    return fetch(url, newOptions).then(response => {
        //newOptions.method === 'DELETE' 
        if ((response.status === 204) && (newOptions.responseType !== 'json')) {
            return response.text();
        }
        return response.json();
    })

}