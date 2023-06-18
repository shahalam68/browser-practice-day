const setConfirm = () => {
    const response  =  confirm('Do You Want To Know Your Location')
    console.log(response);
    if( response === true){
        alert(" your location is:  "  + location.href)
    }
    else{
        alert(" Dure Giea mor")
    }

}