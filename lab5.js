
// Function called whenever user tap on any box
function myfunc() {

	var b1, b2, b3, b4, b5, b6, b7, b8, b9;
	b1 = document.getElementById("b1").value;
	b2 = document.getElementById("b2").value;
	b3 = document.getElementById("b3").value;
	b4 = document.getElementById("b4").value;
	b5 = document.getElementById("b5").value;
	b6 = document.getElementById("b6").value;
	b7 = document.getElementById("b7").value;
	b8 = document.getElementById("b8").value;
	b9 = document.getElementById("b9").value;

	// Checking if Player X won or not and after
	// that disable all the other fields
	if ((b1 == 'X' && b2 == 'X' &&  b3 == 'X') || (b1 == 'X' && b4 == 'X' && b7 == 'X')
	|| (b7 == 'X' && b8 == 'X' &&  b9 == 'X') || (b3 == 'X' && b6 == 'X' && b9 == 'X') 
	|| ( b1 == 'X' && b5 == 'X' && b9 == 'X') || (b3 == 'X' && b5 == 'X' && b7 == 'X')
    || (b2 == 'X' && b5 == 'X' && b8 == 'X') || (b4 == 'X' && b5 == 'X' && b6 == 'X')) 
	  {
		document.getElementById('print')
			.innerHTML = "You won";
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
		window.alert('You won');
	}	
	
	// check if  player 0 won after that disable all the other fields
	else if ((b1 == '0' && b2 == '0' &&  b3 == '0') || (b1 == '0' && b4 == '0' && b7 == '0')
	|| (b7 == '0' && b8 == '0' &&  b9 == '0') || (b3 == '0' && b6 == '0' && b9 == '0') 
	|| ( b1 == '0' && b5 == '0' && b9 == '0') || (b3 == '0' && b5 == '0' && b7 == '0')
    || (b2 == '0' && b5 == '0' && b8 == '0') || (b4 == '0' && b5 == '0' && b6 == '0')) 
	  {
		document.getElementById('print')
			.innerHTML = "Computer won";
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
		window.alert('Computer won');
	}
	// tie
	else if ((b1 != '') && (b2 != '') && (b3 != '') &&
		(b4 != '') && (b5 != '') && (b6 != '') &&
		(b7 != '') && (b8 != '') && (b9 != '')) {
			document.getElementById('print')
				.innerHTML = "Match Tie";
			window.alert('Match Tie');
	}
	else {

		// Here, Printing turn
		if (flag == 1) {
			document.getElementById('print')
				.innerHTML = "Your Turn";
		}
		//for computer's turn, it makes a new move
		else {
			document.getElementById('print')
				.innerHTML = "Computer's Turn";


            var x = ["b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9"];
            var i = 0;
            while(document.getElementById(x[i]).value != '')
                i++;
            if(i!=9)
            {
				var j = try_to_win_0();
				if (j != -1)
					i = j - 1;
                document.getElementById(x[i]).value = "0";
                document.getElementById(x[i]).disabled = true;
                flag = 1;
				myfunc();
                document.getElementById('print')
				.innerHTML = "Your Turn";
            }
            else
            document.getElementById('print').innerHTML = "Game ended";


		}
	}
}

function try_to_win_0()
	{
		var b1, b2, b3, b4, b5, b6, b7, b8, b9;
		b1 = document.getElementById("b1").value;
		b2 = document.getElementById("b2").value;
		b3 = document.getElementById("b3").value;
		b4 = document.getElementById("b4").value;
		b5 = document.getElementById("b5").value;
		b6 = document.getElementById("b6").value;
		b7 = document.getElementById("b7").value;
		b8 = document.getElementById("b8").value;
		b9 = document.getElementById("b9").value;
		var j = -1;
		if(b1 == b2 && b1!='' && b3=='') return 3;
		if(b2 == b3 && b2!='' && b1=='') return 1;
		if(b1 == b3 && b1!='' && b2=='') return 2;
		//line 1 done
		if(b4 == b5 && b4!='' && b6=='') return 6;
		if(b4 == b6 && b4!='' && b5=='') return 5;
		if(b5 == b6 && b5!='' && b4=='') return 4;
		//line 2 done
		if(b7 == b8 && b7!='' && b9=='') return 9;
		if(b8 == b9 && b8!='' && b7=='') return 7;
		if(b9 == b7 && b9!='' && b8=='') return 8;
		//line 3 done
		if(b1 == b4 && b1!='' && b7=='') return 7;
		if(b4 == b7 && b4!='' && b1=='') return 1;
		if(b7 == b1 && b1!='' && b4=='') return 4;
		//col 1 done
		if(b2 == b5 && b2!='' && b8=='') return 8;
		if(b2 == b8 && b2!='' && b5=='') return 5;
		if(b5 == b8 && b5!='' && b2=='') return 2;
		//col 2 done
		if(b3 == b6 && b3!='' && b9=='') return 9;
		if(b9 == b6 && b9!='' && b3=='') return 3;
		if(b9 == b3 && b3!='' && b6=='') return 6;
		//col 3 done
		if(b1 == b5 && b1!='' && b9=='') return 9;
		if(b1 == b9 && b1!='' && b5=='') return 5;
		if(b5 == b9 && b5!='' && b1=='') return 1;
		//diag 1 done
		if(b3 == b5 && b3!='' && b7=='') return 7;
		if(b3 == b7 && b3!='' && b5=='') return 5;
		if(b5 == b7 && b5!='' && b3=='') return 3;
		//diag 2 done

		return -1;

	}

// Function to reset game
function myfunc_2() {
	location.reload();
	document.getElementById('b1').value = '';
	document.getElementById("b2").value = '';
	document.getElementById("b3").value = '';
	document.getElementById("b4").value = '';
	document.getElementById("b5").value = '';
	document.getElementById("b6").value = '';
	document.getElementById("b7").value = '';
	document.getElementById("b8").value = '';
	document.getElementById("b9").value = '';

}

// Here onwards, functions check turn of the player
// and put accordingly value X or 0
flag = 1;
function myfunc_3() {

		document.getElementById("b1").value = "X";
		document.getElementById("b1").disabled = true;
		flag = 0;

}

function myfunc_4() {

		document.getElementById("b2").value = "X";
		document.getElementById("b2").disabled = true;
		flag = 0;

}

function myfunc_5() {

		document.getElementById("b3").value = "X";
		document.getElementById("b3").disabled = true;
		flag = 0;

}

function myfunc_6() {

		document.getElementById("b4").value = "X";
		document.getElementById("b4").disabled = true;
		flag = 0;
	
}

function myfunc_7() {

		document.getElementById("b5").value = "X";
		document.getElementById("b5").disabled = true;
		flag = 0;

}

function myfunc_8() {

		document.getElementById("b6").value = "X";
		document.getElementById("b6").disabled = true;
		flag = 0;

}

function myfunc_9() {

		document.getElementById("b7").value = "X";
		document.getElementById("b7").disabled = true;
		flag = 0;
	
}

function myfunc_10() {

		document.getElementById("b8").value = "X";
		document.getElementById("b8").disabled = true;
		flag = 0;

}

function myfunc_11() {

		document.getElementById("b9").value = "X";
		document.getElementById("b9").disabled = true;
		flag = 0;
	
}
