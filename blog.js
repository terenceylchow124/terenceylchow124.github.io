var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1S3x74N4BUhm2pwL6YqX8-g_nYtssBk-VpTzOYL-0HR4/edit?usp=sharing';
var flag= 1;
function init() {
  Tabletop.init( {key: publicSpreadsheetUrl,
                  callback: showInfo,
                  simpleSheet: true } )
}

function showInfo(datasheet, tabletop) {
  datasheet.forEach(function(data) {
    console.log(data);
    title.innerHTML = data.title;
    title2.innerHTML = String(data.title);
    contents.innerHTML = data.contents;
    dates.innerHTML = data.dates;
    dates2.innerHTML = String(data.dates);

    cat1= data.cat1;
    cat2= data.cat2;
    cat3= data.cat3;
    cat4= data.cat4;
    cat5= data.cat5;

    item1= data.item1;
    item2= data.item2;
    item3= data.item3;
    item4= data.item4;
    item5= data.item5;
    var dict = []; // create an empty array
    for (var j = 1; j < 6; j++) {
      dict.push({
      key:   this["cat"+j],
      value: this["item"+j]
      });
    }
    tags = data.hashtags;
    var image = document.getElementById('Img');
    image.src = "https://drive.google.com/uc?export=view&id=" + data.imgs;;
    if (flag){
      var str = tags.split(",");
      showtags(str);
      showtagsinside(str);
      showtCategories(dict)
      flag = 0;
    }
   });
  }

function showtCategories(dict){
  Object.keys(dict).forEach(function(key){
  var element = dict[key].key;
  var index = dict[key].value;
  var li = document.createElement('li');
  var a = document.createElement('a');
  a.setAttribute('herf', "#")
  var temp = element + " (" +index + ") ";
  a.innerHTML = temp;
  li.appendChild(a);
  document.getElementById('catlist').appendChild(li);
  });}

function showtagsinside(str){
  var i = document.createElement('i');
  i.setAttribute('class','icon-tags');
  var span = document.createElement('span');
  document.getElementById('hereinside').appendChild(i);
  document.getElementById('hereinside').appendChild(span);
  str.forEach(showtags);
  function showtags(element, index, arr){
    var a = document.createElement('a');
    a.innerHTML= a.innerHTML + element + "&#160;";
    document.getElementById('hereinside').appendChild(a);
  }
}

function showtags(str){
  var ul = document.createElement('ul');
  ul.setAttribute('class','tags');
  document.getElementById('here').appendChild(ul);
  str.forEach(showtags);
  function showtags(element, index, arr){
    var li = document.createElement('li');
    var a = document.createElement('a');
    a.setAttribute('class','btn');
    li.appendChild(a);
    ul.appendChild(li);
    a.innerHTML= a.innerHTML + element;
    li.innerHTML = li.innerHTML + "&#160;";
  }
}
window.addEventListener('DOMContentLoaded', init)
