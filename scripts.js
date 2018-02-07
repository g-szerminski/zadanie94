function drawTree(i) {		
	for (var i = 1; i <= 5 ; i++) {
		var star = ('');
		for (var j = 1; j <= i; j++) {
			star += '*';
		}
		console.log(star);
	}
}
drawTree(3);