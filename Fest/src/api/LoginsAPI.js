import store from "@/store/index";

export default {
    // First parameter has data, second returns status
    postLogin (auth, status) {
        let xhttp = new XMLHttpRequest();

        //Run on response
        xhttp.onreadystatechange = function() {
            if(this.readyState == 4 && this.status == 200) {
                return status(JSON.parse(this.response));
            }
            else if (this.readyState == 4)  {
                return status(this.status);
            }
        }

        //Open connection
        xhttp.open('POST', `${store.state.backEndUrl}/login`, true);
        xhttp.withCredentials = true;
        xhttp.setRequestHeader('Content-type', 'application/json');

        console.log('API', auth)
        //Send request
        xhttp.send(JSON.stringify(auth));
    },

    // First parameter has data, second returns status
    googlePostLogin (id_token, profile, status) {
        let xhttp = new XMLHttpRequest();

        //Run on response
        xhttp.onreadystatechange = function() {
            if(this.readyState == 4 && this.status == 200) {
                return status(JSON.parse(this.response));
            }
            else if (this.readyState == 4)  {
                return status(this.status);
            }
        }

        //Open connection
        xhttp.open('POST', `${store.state.backEndUrl}/login`, true);
        xhttp.withCredentials = true;
        xhttp.setRequestHeader('Content-type', 'application/json');

        let body = { 
            "token": id_token,
            "profile": profile
        };
        //Send request
        xhttp.send(JSON.stringify(body));
    },

    postLogOut() {
        let xhttp = new XMLHttpRequest();

        //Run on response
        xhttp.onreadystatechange = function() {
            if(this.readyState == 4 && this.status == 200) {
                return this.status;
            }
            else if (this.readyState == 4)  {
                return (this.status);
            }
        }

        //Open connection
        xhttp.open('POST', `${store.state.backEndUrl}/logout`, true);
        xhttp.withCredentials = true;
        xhttp.setRequestHeader('Content-type', 'application/json');

        //Send request
        xhttp.send();
    }


}