function roulette() {
    const member = document.getElementById("member").value
    let memberList = member.split('/')
    memberList = memberList.map(element => {
        return element.trim();//空白を消す
    });
    memberList = shuffle(memberList)

    let result = ''

    for (let i = 0; i < memberList.length; i++) {
        result += memberList[i]
        if (i < memberList.length - 1) {
            result += '\n'
        }
    }

    let resultTextArea = document.getElementById("result");

    resultTextArea.value = result
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array
}

function removeAllMember() {
    const memberTextArea = document.getElementById("member")
    memberTextArea.value = ''
}