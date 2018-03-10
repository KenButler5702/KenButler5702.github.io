let navigation = function(){

let navigationArray = [
  {title: 'Index', url: '"index.html"'},
  {title: 'Work Experience', url: '"Work Experience.html"'},
  {title: 'Contact', url: '"Contact.html"'},
  {title: 'Portfolio', url: '"Portfolio.html"'},
  {title: 'Skills', url: '"Skills.html"'},
  {title: 'Color Game', url: '"colorGame.html"'}
]


for (var i = 0, navList = '', x = navigationArray.length; i < x; i++) {
 document.write('<a href=' + navigationArray[i].url + '>' + navigationArray[i].title + '</a>');
}

}();
