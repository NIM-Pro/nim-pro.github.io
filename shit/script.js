var _Language=function() {
    this.currentLang=false;
    this.languages={};
};
 _Language.prototype.set=function(name,words) {
    if (!this.currentLang)
        this.currentLang=name;
    this.languages[name]=words;
};
 _Language.prototype.getNames=function() {
    return Object.keys(this.languages);
};
 _Language.prototype.changeLang=function() {
    var names=this.getNames();
    return this.languages[this.currentLang=names[(names.indexOf(this.currentLang)+1)%names.length]];
};
 _Language.prototype.getLang=function(name) {
    if (!name)
        return this.languages[this.currentLang];
    else
        return this.languages[name];
};
_Language.prototype.addToLang=function(name,words) {
    if (!this.languages[name]) return;
    var keys=Object.keys(words);
    for (var i=0; i<keys.length; i++)
        this.languages[name][keys[i]]=words[keys[i]];
};
Language=new  _Language;