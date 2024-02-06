function copy() {
    let copyTarget = document.getElementById("result");
    copyTarget.select();
    document.execCommand("Copy");

    alert("コピーできました！");
}