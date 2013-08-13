Hello guyz...

This plugin gives the facilty to make that top button generate and body scroll on click automatically by calling just
<code>
$('a#backtotop').topScroll();
</code>
<br>
Defualt opitions are:
<code>
      position: 'fixed', //can be changed to absolute, relative, static<br>
	  class='',// new feature added<br>
	  color: '#123',  // link font color<br>
	  padding: '10px', // padding<br>
	  bottom:'10px', /*---- some<br>
	  right: '20px',     postioting---*/<br>
	  scrVal: 0 // by deafualt body will be scrolled to top by putting it to 0 but can be changed to any value<br>
	  speed: 500 // speed will be in milli seconds<br>
</code>

You can change it by 
## First option
<code><br>
$('a#scrolltop').topScroll({<br>
    position: 'fixed',<br>
	color: '#ccc',<br>
	padding: '0px',<br>
	bottom:'0px',<br>
	right: '0px',<br>
	scrVal: 300<br>
})
</code>
## Second option
<code><br>
$('a#scrolltop').topScroll({
	class= 'topScroll',<br>
	scrVal: 300,<br>
	speed: 500<br>
})

<code>
<br>
note that you can not use both class and other position properties together.

##Will be back soon... enjoy!!