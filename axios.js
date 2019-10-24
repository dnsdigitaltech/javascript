//axios.put('https://api.github.com/users/dnsdigitaltech')
//axios.post('https://api.github.com/users/dnsdigitaltech')
//axios.delete('https://api.github.com/users/dnsdigitaltech')
axios.get('https://api.github.com/users/dnsdigitaltech')
    .then(function(response) {
        console.log(response);
    })
    .catch(function(error) {
        console.warn(error);
    });