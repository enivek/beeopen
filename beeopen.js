console.log("BeeOpen extension Startup");

function addJSToAllowSelecting(documentObject) {
    var script = documentObject.createElement('script');
    script.type='text/javascript';
    script.innerHTML = "document.onselectstart = function(){return true;}; ";
    script.innerHTML += "document.body.onselectstart = function(){return true;}; ";

    var body = documentObject.getElementsByTagName('body')[0];
    body.appendChild(script);    
}

function allowTextSelection() {

    var itworked = false;
    
    if( document ) {
        addJSToAllowSelecting(document);
    }
       
    var iParent = document.getElementById('if_parent');
    if( iParent ) {
        
        var iParentDocument = iParent.contentWindow.document;
        addJSToAllowSelecting(iParentDocument);
        
        var iChild = iParentDocument.getElementById('if_child');
        if( iChild ) {
            var iChildDocument = iChild.contentWindow.document;
            addJSToAllowSelecting(iChildDocument);  
            itworked = true;
        }
        
    }
    
    // Show that everything is unlocked.
    if( itworked ) {
        alert('BeeOpen: Document is unlocked!');
    }
}

setTimeout( allowTextSelection, 5000 );

console.log("BeeOpen extension Complete");