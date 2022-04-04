var arr = ["assignment", "problem", "media", "upload"]
var result = arr.filter(
    function (ele, i, arr) {
        return (ele[0]=='a' || ele[ele.length-1]=='a');
    }
)
console.log(result);