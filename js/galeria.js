// cargar el jquery cuando el documento ya este cargado
$(document).ready(function(){
	var imagenesMiniatura = $('aside ul li img');
	// llamando a accion al elemento (se parte del padre para llegar al elemento, como en css)
	imagenesMiniatura.click(function(){
		// ya estamos dentro de la imagen, por lo que usamos 'this' / guardamos el atributo src
		var imgSrc = $(this).attr('src');
		// guardamos atributo title
		var title = $(this).attr('title');
		var desc = $(this).attr('data-description');
		// guardamos el atributo h2
		var tituloHtml = '<h2>'+title+'</h2>';
		var descHtml = '<p>'+desc+'</p>';
		// guardamos una variable qe reconozca la imagen
		var img = '<img src= " '+imgSrc+ ' "/>';
		var contenido = tituloHtml+descHtml+img;
		
		//la etiqueta html nos permite cambiar el contenido del html
		$('#contenedorGaleria').html(contenido);
	});
	// mouseenter estar dentro del elemento
	// donde, cuando, qué
	imagenesMiniatura.mouseenter(function(){
		// selector + metodo / se pone this en vez de 'img' para hacerlo solo con la imagen seleccionada
		imagenesMiniatura.animate({
			opacity: 0.25
		});
		$(this).animate({
			opacity: 1
		},300);
	});

	imagenesMiniatura.mouseleave(function(){
		imagenesMiniatura.animate({
			opacity: 1
		},100)
	});
});