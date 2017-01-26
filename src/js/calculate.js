/**
 * Created by Administrator on 2017/1/26.
 */
$(function () {
    clear();
    add();
    result();
});
var prevFlag = '';
//清空
function clear() {
    $(".clear").click(function () {
        $(".inputBox").html("")
    });
}
/**
 * add
 */
function add() {
    $('tbody td').click(function (e) {
        var _num = $(this).text();
        if (/\d|\./.test(_num)) {
            var _inputVal = $('#result').text();
            if (prevFlag) {
                prevFlag = '';
                $('#result').text(_num);
            } else {
                $('#result').text(_inputVal + _num);
                $('#calculate').attr('result', parseInt($('#add').attr('prev')) + parseInt($('#result').text()))
            }

        }
    });
    $('#add').click(function (e) {
        $(this).attr('prev', $('#result').text());
        prevFlag = '+';
    });

}

function result() {
    $('#calculate').click(function (e) {
        var _result = $(this).attr('result');
        $('#result').text(_result || 0);
    })
}