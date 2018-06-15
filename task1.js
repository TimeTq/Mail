function block( word ){
	var arr = [];

	for (var i = 0; i <= word.length - 1; i+=1) {
		switch(word[i]) {
  			case 'р': break
 			case 'к': break
  			case 'н': break
  			case 'Р': break
  			case 'К': break
  			case 'Н': break
 			default:
    			arr[i]=word[i];
   				break
}
	}
	var newWord= arr.join('');
	return  newWord;
}

process.stdout.write( block( process.argv[2] ) );
