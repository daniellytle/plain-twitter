// PlainTwitter
// Author: daniellytle

console.log('inserting')
var homeHTML = `
<div class='navbox'>
  <div class='center'>
    <a href='https://github.com/daniellytle/plain-twitter'>PlainTwitter</a>
    <a style='float:right;' href='/'>Home</a>
  </div>
</div>`;
$('#page-outer')[0].prepend($(homeHTML)[0]);
