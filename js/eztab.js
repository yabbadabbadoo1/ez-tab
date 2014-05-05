function createFrets(stringNumber, instrument) { // help to write the html for the fretboard
	var h = "";
	if (instrument === "guitar")
	{
		h = '<button type="button" class="btn btn-default fret" ';
	}
	else if(instrument === "bass")
	{
		h = '<button type="button" class="btn btn-default fretbass" ';
	}
	var p = "";
	for (var i = 0; i < 22; i++)
	{
		p = h;
		p += 'id="s';
		p += stringNumber.toString();
		p += 'f';
		p += i.toString();
		p += '">';	
		p += i.toString();
		p += '</button>';
		document.writeln(p);
	}
}

function changeInstrument() {
	$(document).ready(function() { // change fretboard based on guitar or bass
		$('#fretboardbass').hide();
		$('#basstab').hide();
		$('#guitar').change(function() { 
			$('#fretboardguitar').show();
			$('#guitartab').show();
			$('#fretboardbass').hide();
			$('#basstab').hide();
		});
		$('#bass').change(function() { 
			$('#fretboardguitar').hide();
			$('#guitartab').hide();
			$('#fretboardbass').show();
			$('#basstab').show();
		});
	});
}

const guitarstart = ["E-\n", "B-\n", "G-\n", "D-\n", "A-\n", "E-\n"];
const bassstart = ["G-\n", "D-\n", "A-\n", "E-\n"];

var gtab = [];
var btab = [];

var thetab;

for (var i = 0; i < 6; i++)
{
	gtab[i] = guitarstart[i];
}

for (var i = 0; i < 4; i++)
{
	btab[i] = bassstart[i];
}

function clearTab()
{
	for (var i = 0; i < 6; i++)
	{
		gtab[i] = guitarstart[i];
	}

	for (var i = 0; i < 4; i++)
	{
		btab[i] = bassstart[i];
	}
	
}

function outOfSpace()
{
	alert("You're out of space! Please save any work and make a new tab.");
}

function writeNewNote(note) {

	var strnum = parseInt(note.charAt(1));
	var fretnum = 0;	
	var doubledigit = false;
	if (note.length == 4) // single digit fret
	{
		fretnum = note.charAt(3);
	}
	else // double digit fret
	{
		fretnum = note.charAt(3);
		fretnum += note.charAt(4);
		doubledigit = true;
	}
	for (var i = 0; i < 6; i++)
	{
		
		gtab[i] = gtab[i].slice(0, -1);
	}
	gtab[strnum] += fretnum;
	gtab[strnum] += '--';
	if (doubledigit) // if the fret has 2 digits, add 3 dashes for the other strings.
	{
		for (var i = 0; i < strnum; i++)
		{
			gtab[i] += '----';
		}
		for (var i = strnum+1; i < 6; i++)
		{
			gtab[i] += '----';
		}
	}
	else
	{
		for (var i = 0; i < strnum; i++)
		{
			gtab[i] += '---';
		}
		for (var i = strnum+1; i < 6; i++)
		{
			gtab[i] += '---';
		}
	}	
	for (var i = 0; i < 6; i++)
	{
		gtab[i] += "\n";
	}
	var newtab = "";

	for (var i = 0; i < 6; i++)
	{
		newtab += gtab[i];
	}
	if (124-gtab[0].length <= 2)
	{
		alert("Out of space, make a new one!");
	}

	return newtab;
}

function writeNewNoteBass(note) {
	var strnum = parseInt(note.charAt(1));
	var fretnum = 0;	
	var doubledigit = false;
	if (note.length == 4) // single digit fret
	{
		fretnum = note.charAt(3);
	}
	else // double digit fret
	{
		fretnum = note.charAt(3);
		fretnum += note.charAt(4);
		doubledigit = true;
	}
	for (var i = 0; i < 4; i++)
	{
		
		btab[i] = btab[i].slice(0, -1);
	}
	btab[strnum] += fretnum;
	btab[strnum] += '--';
	if (doubledigit) // if the fret has 2 digits, add 3 dashes for the other strings.
	{
		for (var i = 0; i < strnum; i++)
		{
			btab[i] += '----';
		}
		for (var i = strnum+1; i < 4; i++)
		{
			btab[i] += '----';
		}
	}
	else
	{
		for (var i = 0; i < strnum; i++)
		{
			btab[i] += '---';
		}
		for (var i = strnum+1; i < 4; i++)
		{
			btab[i] += '---';
		}
	}
	for (var i = 0; i < 4; i++)
	{
		btab[i] += "\n";
	}

	var newtab = "";

	for (var i = 0; i < 4; i++)
	{
		newtab += btab[i];
	}
	if (124-btab[0].length <= 2)
	{
		alert("Out of space, make a new one!");
	}

	return newtab;
}
