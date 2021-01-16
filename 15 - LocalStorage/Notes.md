# What I learned
1. i learned that LocalStorage can be used to save data by using the ` localStorage.setItem(itemName,item) ` and passing a JSON.Stringfy(ied) object into it
2. i learned that Local Store can also be used to get data by using ` localStoarge.getItem($itemName) `
3. i learned the concept of event delegation which can be used to still use events on dynamicly generated html elments after page load.This is done by placing an eventListener on a static parent html elment and using ` e.target ` to only specify certin objects

``` 
localStorage.setItem('items', JSON.stringify(items))
```
*itemName is a string which will be the key value of the LocalStorage map*
*item is the object being passed after being stringfied with JSON.stringfiy*