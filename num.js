var n1,n2,n3;
	n1 = parseInt(prompt("Número 1"));
	n2 = parseInt(prompt("Número 2"));
	n3 = parseInt(prompt("Número 3"));

if (n1>n2){
    if (n1 > n2 || n1>n3) {
		console.log("El numero mayor es: "+n1);
	}else if(n2 > n1 || n2>n3){
		console.log("El numero mayor es: "+n2);
	}else if(n3 > n1 || n3>n2){
        console.log("El numero mayor es: "+n3);
    }
}
