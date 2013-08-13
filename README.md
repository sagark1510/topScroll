This plugin gives the facilty to make that top button aumatically by calling just

$('a#backtotop').topScroll()

Defualt opitions are:

      position: 'fixed', //can be changed to absolute, relative, static
			class='',// new feature added
			color: '#123',  // link font color
			padding: '10px', // padding
			bottom:'10px', /*---- some
			right: '20px',     postioting---*/
			scrVal: 0 // by deafualt body will be scrolled to top by putting it to 0 but can be changed to any value
			speed: 500 // speed will be in milli seconds



You can change it by 
## First option
$('a#scrolltop').topScroll({

    position: 'fixed',
			color: '#ccc',
			padding: '0px',
			bottom:'0px',
			right: '0px',
			scrVal: 300

			})
## Second option

$('a#scrolltop').topScroll({
			class= 'topScroll',
			scrVal: 300,
			speed: 500
			})

note that you can not use both class and other positoin properties together.

#Will be back soon... enjoy!!