var a = process.argv[2];
var b = process.argv[3];

function sdvigVpered(arr1, arr2){
	var end = 0;
	
	var c=0;
	while( c != 1 ){
		if (end < arr1.length){
			for(var k=0; k < arr1.length ; k++)
				if(arr1==arr2) c=1;
				else{
					var t = arr1[0]
					arr1 = arr1.slice(1,);
					arr1 +=t;
					end++;
				}
				
		}
		else { 
			end = -1;
			break;
		}
	}
return end;
//alert(end);
}
function sdvigNazad(arr1, arr2){
	var d=0;
	var start = 0;
	while( d != 1 ){
		if (start < arr1.length){
			for(var k=0; k < arr1.length ; k++)
				if(arr1==arr2) d=1 ;
				else{
					var t = arr1[arr1.length-1]
					arr1 = arr1.slice(0,-1);
					arr1 = t + arr1;
					start++;
				}
				
		}
		else { 
			start = -1;
			break;
		}
	}
return start;	
//alert(start);
}
if (sdvigNazad(a, b) > sdvigVpered(a, b)) process.stdout.write(sdvigVpered(a, b));
else process.stdout.write(sdvigNazad(a, b));
