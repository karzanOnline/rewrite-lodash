/**
 * Created by apple on 2016/11/14.
 */
;(function(window, undefinded){

    function Lodash(){

    }

    // 深度copy
    Lodash.prototype.deepCopy = (function () {

        var aOption = {
            type : 'Array',
            num : 0,
            init : []
        };
        return function _deepCopy(target, type, num, init, parent){

            type = type || aOption.type;
            num = num || aOption.num;
            init = init || aOption.init;

            if(type == 'Array'){

                //target[num] instanceof Array || (type = 'value');

                arguments.callee(target[num], 'value', 0, init, target)
            }
            // 非引用value
            if(parent && num < parent.length){

                init.push(target);
                arguments.callee(parent[num+1], 'value', num+1, init, parent);
            }
            return init

        };

    })();

    // 数组分块
    Lodash.prototype.chunk = function () {

        var arr = arguments[0],
            num = arguments[1],
            len = arr.length || 0;
        if(arr && num){
            //深度copy
            arr = this.deepCopy(arr);
            var left = arr.slice(0,num),
                result = [],
                right = arr.slice(num,len);
            result.push(left);
            result.push(right);
            return result
        }else{
            return arr
        }

    };

    window._ = window.lodash = new Lodash ();

})(window, undefined);

