function anagram(str) {

    if(!str) {
        return []
    }

    if(str.length === 1) {
        return [str]
    }

    if(str.length === 2) {
        return [str[0] + str[1], str[1] + str[0]]
    }

    var result = [];

    for(var i=1; i<str.length; i++) {
        for(var j=0; j<str.length; j++) {
            result.push(str[i] + anagram(drop(str, i))[j])
        }
    }

    return result
}

function drop(str, n) {
    var result =""

    for(i=0; )
}

module.exports = anagram