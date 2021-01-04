function pressSpace() {
    document.dispatchEvent(new KeyboardEvent("keydown", {
        key: " ",
        keyCode: 32, // example values.
        code: "Space", // put everything you need in this object.
        which: 32,
    }));
}

document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('play');
    checkPageButton.addEventListener('click', function() {
        chrome.tabs.executeScript({
            code: '(' + pressSpace + ')();' //argument here is a string but function.toString() returns function's code
        }, (results) => {
            //Here we have just the innerHTML and not DOM structure
            console.log('Popup script:')
            console.log(results[0]);
        });
    //     // pressSpace();
    //   chrome.tabs.getSelected(null, function(tab) {
    //     tab.dispatchEvent(new KeyboardEvent("keydown", {
    //         key: " ",
    //         keyCode: 32, // example values.
    //         code: "Space", // put everything you need in this object.
    //         which: 32,
    //         isTrusted: true
    //     }));
    //     //   pressSpace();
    //     // d = document;
  
    //     // var f = d.createElement('form');
    //     // f.action = 'http://gtmetrix.com/analyze.html?bm';
    //     // f.method = 'post';
    //     // var i = d.createElement('input');
    //     // i.type = 'hidden';
    //     // i.name = 'url';
    //     // i.value = tab.url;
    //     // f.appendChild(i);
    //     // d.body.appendChild(f);
    //     // f.submit();
    //   });
    }, false);
  }, false);