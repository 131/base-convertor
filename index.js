"use strict";

var BigInt = require('big-integer');

var  bcadd = function(left, right){ return BigInt(left).plus(BigInt(right)); }
var  bcmul = function(left, right){ return BigInt(left).multiply(BigInt(right)); }
var  bcdiv = function(left, right){ return BigInt(left).over(BigInt(right)); }
var  bcmod = function(left, mod ){ return BigInt(left).mod(mod); }



var convert = function (src, srctable, desttable) {
  var srclen  = srctable.length,
      destlen = desttable.length,
      val     = BigInt(0),
      numlen  = src.length;

  for(var i=0;i<numlen;i++)
    val = bcadd(bcmul(val, srclen), srctable.indexOf(src.charAt(i)) );

  if(val < 0)
    return 0;

  var r   = bcmod(val, destlen),
      res = desttable.charAt(r),
      q   = bcdiv(val, destlen);

  while(q != 0) {
    r   = bcmod(q, destlen);
    q   = bcdiv(q, destlen);
    res = desttable.charAt(r)+ res;
  }

  return res;
}

module.exports = convert;
