export class Requester{
    static sendRequestJson(method: string, url: string, body: object){
        const requestOptions = {
            method: method,
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(body)
        };
        fetch(url, requestOptions)
            .catch(reason => console.log(reason))
    }
}