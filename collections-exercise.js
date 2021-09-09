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
  
  let foo = (arrayOfItems, aNetwork) => {
    let filteredArray = arrayOfItems.filter(item => item.network === aNetwork);
    
    let newArray = filteredArray.map(item => {
      let newDisplayName;
      switch(item.network) {
        case "facebook":
          newDisplayName = "Facebook";
          break;
        case "twitter":
          newDisplayName = "Twitter";
          break;
        case "gplus":
          newDisplayName = "Google +";
          break;
        default:
          newDisplayName = "";
      }
      
      let newNetworkObj = {
        displayName: newDisplayName,
        text: item.text
      };
      return newNetworkObj;
    });
    
    return newArray;
  }
  
  console.log(foo(newItems, 'facebook'));
  console.log(foo(newItems, 'gplus'));