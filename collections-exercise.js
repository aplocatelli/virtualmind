//initial array of objects
let newItems = [
    {
        network: 'facebook',
        text: 'post number 1',
    },
    {
        network: 'twitter',
        text: 'some twitter text',
    },
    {
        network: 'gplus',
        text: 'some gplus stuff',
    },
    {
        network: 'facebook',
        text: 'post number 2',
    },
]
 
//Returns the display name of a social network accordingly to some parameter  
let getDisplayName = network => {
    switch(network) {
        case "facebook":
            return "Facebook";
        case "twitter":
            return "Twitter";
        case "gplus":
            return "Google +";
        default:
            return "";
    }
}
  
let foo = (arrayOfItems, aNetwork) => {
    let filteredArray = arrayOfItems.filter(item => item.network === aNetwork); //Filter only items whose network property equals to aNetwork and returns a new array
    
    //Creates a new array from the previously filtered, because the new array has to use a different property: displayName
    let newArray = filteredArray.map(item => {      
        let newNetworkObj = {
            displayName: getDisplayName(item.network),
            text: item.text
        }

        return newNetworkObj;
    });
    
    return newArray;
}

console.log(foo(newItems, 'facebook'));
console.log(foo(newItems, 'gplus'));
console.log(foo(newItems, 'twitter'));