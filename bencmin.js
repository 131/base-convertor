"use strict";

var convert = function (src, srctable, desttable) {
  var srclen=srctable.length,
      destlen=desttable.length,
      val=0,
      numlen=src.length;

  for(var i=0;i<numlen;i++) //bigint explosion here
    val = val * srclen + srctable.indexOf(src.charAt(i));

  if(val<0)
    return 0;

  var r = val%destlen,
      res=desttable.charAt(r),
      q=Math.floor(val/destlen);

  while(q) {
    r=q%destlen;
    q=Math.floor(q/destlen);
    res=desttable.charAt(r)+ res;
  }
  return res;
}

module.exports = convert;
