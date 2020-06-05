function copyText() {
    var range = document.createRange();
    range.selectNode(document.getElementById("connect-info"));
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand("copy");
    window.getSelection().removeAllRanges();// to deselect
    let x = document.getElementById("connect-info").title
    x = 'Copied'
}

