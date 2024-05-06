import React, { Component } from 'react';

class AllAPIs extends Component {

    webapiUrl = 'https://localhost:7156/api/';

    AddCallBackUser = (userData)=> {
        const response = fetch( this.webapiUrl + 'CallBackUser', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        return response;
    };

    render() {
        return null;
    }
}

export default AllAPIs;
