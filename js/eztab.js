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
		$('#chordbass').hide();
		$('#guitar').change(function() { 
			$('#fretboardguitar').show();
			$('#guitartab').show();
			$('#chordgtr').show();
			$('#fretboardbass').hide();
			$('#basstab').hide();
			$('#chordbass').hide();
		});
		$('#bass').change(function() { 
			$('#fretboardguitar').hide();
			$('#guitartab').hide();
			$('#chordgtr').hide()
			$('#fretboardbass').show();
			$('#basstab').show();
			$('#chordbass').show();
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

	return newtab;
}

function writeGtrChord(notes) {
	for (var i = 0; i < 6; i++) {
		gtab[i] = gtab[i].slice(0, -1);
		if (notes[i] == '-') {
			gtab[i] += '----';
		}
		else if (notes[i].length == 2) {
			gtab[i] += notes[i];
			gtab[i] += "--";
		}
		else {
			gtab[i] += notes[i];
			gtab[i] += "---";
		}

		gtab[i] += "\n";
	}
	var newtab = "";
	
	for (var i = 0; i < 6; i++) {
		newtab += gtab[i];
	}

	return newtab;
}
	
function writeBassChord(notes) {
	for (var i = 0; i < 4; i++) {
		btab[i] = btab[i].slice(0, -1);
		if (notes[i] == '-') {
			btab[i] += '----';
		}
		else if (notes[i].length == 2) {
			btab[i] += notes[i];
			btab[i] += "--";
		}
		else {
			btab[i] += notes[i];
			btab[i] += "---";
		}

		btab[i] += "\n";
	}
	var newtab = "";
	
	for (var i = 0; i < 4; i++) {
		newtab += btab[i];
	}

	return newtab;
}

