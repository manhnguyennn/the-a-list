const bodyClassPlugin = new SwupBodyClassPlugin({
    prefix: 'pageswup'
});
const swup = new Swup({
    plugins: [bodyClassPlugin]
});


init();
swup.on('contentReplaced', init);
swup.on('willReplaceContent', unload);

// document.addEventListener('swup:pageView', (event) => {
//     // do something when content is replaced
//     console.log('bind vote', pageNameSpace);
// });

function init() {
    let bodyClass = document.getElementsByTagName("body")[0].className;
    let arrClass = bodyClass.split(' ');

    for (let i = 0; i < arrClass.length; i++) {
        if (arrClass[i].indexOf("pageswup") >= 0) {
            let arrVal = arrClass[i].split('-');
            if (arrVal[1] != undefined) {
                initPage(arrVal[1]);
            }
        }
    }
}

function unload() {
    let bodyClass = document.getElementsByTagName("body")[0].className;
    let arrClass = bodyClass.split(' ');
    for (let i = 0; i < arrClass.length; i++) {
        if (arrClass[i].indexOf("pageswup") >= 0) {
            let arrVal = arrClass[i].split('-');
            if (arrVal[1] != undefined) {
                detroyPage(arrVal[1]);
            }
        }
    }
}


function initPage(pName) {
    console.log('--------------------------');
    console.log('initHelper for pName = ', pName);
    App.initHelpers(pName);
    let triggers = ScrollTrigger.getAll();
    triggers.forEach(trigger => {
        trigger.update();
    });
}

function detroyPage(pName) {
    console.log('detroyPage for ', pName);
    AppDestroy.initHelpers(pName);
    let triggers = ScrollTrigger.getAll();
    triggers.forEach(trigger => {
        trigger.kill();
    });
    //AppDestroy.home();
}