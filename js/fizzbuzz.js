<html>
<head>Fizz Buzz
<script>

// Javascript Program to print Fizz Buzz

	let i;
	for (i=1; i <=100; i++)
	{
		// number divisible by 3 and 5 will
		// always divisible by 15, print
		// 'FizzBuzz' in place of the number
		if (i%15 == 0)
			document.write("FizzBuzz" + " ");

		// number divisible by 3? print 'Fizz'
		// in place of the number
		else if ((i%3) == 0)
			document.write("Fizz" + " ");

		// number divisible by 5, print 'Buzz'
		// in place of number
		else if ((i%5) ==0)
			document.write("Buzz" + " ");

		else // print number
			document.write(i + " ");
	}

</script>

</head>

<body>
This is designed to make a FizzBuzz tool work in Javascript. 

</body>

</html>