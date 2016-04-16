String.prototype.startWith = function(searchString,position)
{
    position=position || 0;
    return this.indexOf(searchString,position)===position;
}