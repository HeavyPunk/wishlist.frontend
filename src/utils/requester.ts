export class Requester{
    static async sendRequestJson(method: string, url: string, body: object){
        const requestOptions = {
            method: method,
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(body)
        };
        await fetch(url, requestOptions)
            .catch(reason => console.log(reason))
    }
}//axios