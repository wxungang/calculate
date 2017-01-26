/**
 * Created by Administrator on 2017/1/26.
 */
$(function () {
    clear();
    back();

    taps();
});
var expression = '';
var calculateFlag = false;
function taps() {
    $('#keyBoard').on('click', 'span', function (e) {
        var _value = $(this).text();
        var _flag = $(this).attr('flag');
        if (/\d|\.|%/.test(_value)) {
            validate(_value);
        } else if (_flag && _flag.indexOf('calculate') == 0) {
            calculateFlag = true;
            //add(_flag);
        } else if ('=' == _value) {
            //result();
        }
    });
}
function inputValue() {
    console.log('inputValue');
}
function result() {
    expression = expression + $('#result').text();
    var _result = eval(expression);
    console.log(_result);
}
function add(_value) {
    console.log(_value);
    var _calculateObj = {
        calculate_add: '+',
        calculate_sub: '-',
        calculate_multi: '*',
        calculate_div: '/'
    };
    expression = expression + $('#result').text();
    expression = expression + _calculateObj[_value];
}

/**
 * 输入校验
 * @param value
 */
function validate(value) {
    //获取用户输入的数据
    var _inputValue = calculateFlag ? '' : $('#result').text().replace(/^0+/, '');
    calculateFlag = false;
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