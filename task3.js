var t1 = process.argv[2];
var t2 = process.argv[3];
var t3 = t1 + t2 ;
var hours = Math.floor( t3 / 3600 );
var minutes = Math.floor( (t3 - hours*3600) / 60 );
var seconds = t3 - hours*3600 - minutes*60;

function end( num, word ){
	if(num == 0) return '';
	else{
		var a = num % 100;
		if (10 <= a && a <= 20){
			if (word == "час") return num + " " + word + "ов ";
			else return num + " " + word + " ";
		}
		else{
			if (word == "час") {
				var c = num % 10;
				if( c == 1 ) return num + " " + word + " ";
				else if ( 2 <= c && c <= 4 ) return num + " " + word + "а ";
				else if ( 5 <= c && c <= 9 ) return num + " " + word + "ов ";
				}
			else {
				var c = num % 10;
				if( c == 1 ) return num + " " + word + "а ";
				else if ( 2 <= c && c <= 4 ) return num + " " + word + "ы ";
				else if ( 5 <= c && c <= 9 ) return num + " " + word + " ";
			}
		}
	}	
}

process.stdout.write(end(hours,"час")+end(minutes,"минут")+end(seconds,"секунд"))