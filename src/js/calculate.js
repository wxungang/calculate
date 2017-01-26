/**
 * Created by Administrator on 2017/1/26.
 */
$(function () {
    clear();
    back();

    taps();
});

function taps() {
    $('#keyBoard').on('click', 'span', function (e) {
        var _value = $(this).text();
        if (/\d|\.|%/.test(_value)) {
            validate(_value);
        } else if (/[+-]/.test(_value)) {

        }
    });
}
function inputValue() {
    console.log('inputValue');
}

/**
 * 输入校验
 * @param value
 */
function validate(value) {
    //获取用户输入的数据
    var _inputValue = $('#result').text().replace(/^0+/, '');
    if (value == '%') {
        //百分比运算
        _inputValue = _inputValue / 100;
    } else if (value == '.') {
        //不存在小数点时有效
        if (_inputValue.indexOf('.') < 0) {
            _inputValue = _inputValue + '.';
        }
    } else {
        //正常输入
        _inputValue = _inputValue + value;
    }
    $('#result').text(_inputValue.replace(/^\./, '0.'));
}

function clear() {

}

function back() {

}