"use strict";

var BigInt = require('big-integer');

var  bcadd = function(left, right){ return BigInt(left).plus(BigInt(right)); }
var  bcmul = function(left, right){ return BigInt(left).multiply(BigInt(right)); }
var  bcdiv = function(left, right){ return BigInt(left).over(BigInt(right)); }
var  bcpow = function(left, pow ){ return BigInt(left).pow(pow); }
var  bcmod = function(left, mod ){ return BigInt(left).mod(mod); }

/// from  PHPCoder at niconet2k dot com

var convBase = function(numberInput, fromBaseInput, toBaseInput) {
    if (fromBaseInput == toBaseInput)
      return numberInput;

    var fromBase = fromBaseInput.split(''),
        toBase   = toBaseInput.split(''),
        number   = numberInput.split(''),

        fromLen = fromBaseInput.length,
        toLen  = toBaseInput.length,
        numberLen = numberInput.length;

    var retval = "", base10;

    if (toBaseInput == '0123456789') {
        retval = BigInt(0)
        for (var i = 1;i <= numberLen; i++)
            retval = bcadd(retval, bcmul( fromBase.indexOf(number[i-1]),bcpow(fromLen,numberLen-i)));
        return retval;
    }

    if (fromBaseInput != '0123456789')
        base10 = convBase(numberInput, fromBaseInput, '0123456789');
    else
        base10 = numberInput;

    if (base10 < toLen) {
        console.log("here");
        return toBase[base10];
    }


    while(base10 != '0') {
        retval = toBase[bcmod(base10, toLen)] + retval;
        base10 = bcdiv(base10, toLen, 0);
    }

    return retval;
}

module.exports = convBase;