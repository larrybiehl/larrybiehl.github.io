
function LoadMemorialInformation ()
{
		// Note that index needs to be initialized to 0 for the first entry in the array and then index by one
		// for every pdf file after the first.

index = 0;
AddListBreakToSlideVector (index, "A");

index++
FirstSlide = index;
slideVector[index] = new AddPDFDoc(index, "0AdamsJ.html");
slideVector[index].date_time = "2010";
slideVector[index].listTitle = "Juanita Adams";
   
   index++
   slideVector[index] = new AddPDFDoc(index, "0Averys.html");
   slideVector[index].date_time = "Nanette: 1998 & Arthur: 1998";
   slideVector[index].listTitle = "Arthur & Nanette Avery";

LastSlide = index;

}	// end "LoadMemorialInformation"
