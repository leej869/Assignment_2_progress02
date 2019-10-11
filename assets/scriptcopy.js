


	var myWrapper = document.getElementById("wrapper"); 
	
	for (var i = 0; i < 200; i++) {
		
		var changingColor = (217 - (i/2))
		var changingColorTwo = (144 - (i/5))
		var myRotate = (30 + (i*1))
		var myMargin = (40 - (i*1))

		var myModule = `
		<div class="patternUnit" style="border-color: rgb(255,${changingColor},${changingColorTwo}); transform: rotate(${myRotate}deg); margin-bottom: ${myMargin}px;
		>
		</div>

		`;


		myWrapper.innerHTML += '<div class="patternUnit" style=" border-color: rgb('+ (255) +',' + (217 - (i/2)) + ','+(144 - (i/5))+');  transform: Rotate('+ (30 + (i*1)) +'deg); margin-bottom: '+ (40 - (i*0.5)) +'px; "></div>';

		document.getElementById("wrapper").insertAdjacentHTML('beforeend', myModule);

	}


