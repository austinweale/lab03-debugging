var stringBuilder = (function () {
    function stringBuilder(input) {
        this.data = input;
    }
    stringBuilder.prototype.getString = function () {
        return this.data;
    };
    stringBuilder.prototype.setString = function (data) {
        this.data = data;
    };
    stringBuilder.prototype.reverse = function () {
        var chars = this.data.split('');
        for (var i = 1; i < chars.length; i++) {
            var cTmp = chars[i];
            chars[i] = chars[chars.length - 1];
            chars[chars.length - 1] = cTmp;
        }
        this.data = chars.join('');
    };
    return stringBuilder;
}());
var sb = new stringBuilder("hello");
console.log(sb.getString());
