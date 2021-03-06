google.load("search", "1", {nocss:true});

search=new Promise(function(a,b){
    google.setOnLoadCallback(function() {
        var searchControl = new google.search.SearchControl();
        searchControl.addSearcher(new google.search.WebSearch());
        searchControl.draw(document.getElementById("searchcontrol"));
        a(searchControl);
    });
});

goSearch=function() {
    var searchForm=document.getElementById('searchForm');
    if (!searchForm.classList.contains('search'))
        searchForm.classList.add('search');
    var text=document.getElementById('request').value;
    document.location.hash='#'+text;
    return search.then(function(c) {
        c.execute(text);
    });
};

checkKey=function(e) {
    if (e.keyCode===13) goSearch();
};

onload=onhashchange=function() {
    var text=document.location.hash.slice(1);
    if (text.length>0) {
        document.getElementById('request').value=decodeURI(text);
        goSearch();
    };
};