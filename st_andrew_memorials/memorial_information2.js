
function LoadMemorialInformation ()
{
		// Note that index needs to be initialized to 0 for the first entry in the array and then index by one
		// for every pdf file after the first.

index = 0;
AddListBreakToSlideVector (index, "A");

index++
FirstSlide = index;
slideVector[index] = new AddPDFDoc(index, "oAckerson_page_for_book.html");
slideVector[index].date_time = "2020";
slideVector[index].listTitle = "Sharon Ackerson";

index++
slideVector[index] = new AddPDFDoc(index, "0AdamsJ.html");
slideVector[index].date_time = "2010";
slideVector[index].listTitle = "Juanita Adams";

index++
slideVector[index] = new AddPDFDoc(index, "oAdamsK_page_for_book.html");
slideVector[index].date_time = "1997";
slideVector[index].listTitle = "Karly Adams";

index++
slideVector[index] = new AddPDFDoc(index, "Adams_Lisa_page_for_book.html");
slideVector[index].date_time = "2018";
slideVector[index].listTitle = "Lisa Adams";

index++
slideVector[index] = new AddPDFDoc(index, "oAlvey_D_E_page_for_book.html");
slideVector[index].date_time = "Emma: 2017 & David: 2022";
slideVector[index].listTitle = "Emma & David Alvey";

index++
AddListBreakToSlideVector  (index, "B");

index++
slideVector[index] = new AddPDFDoc(index, "Baurmgardner_Marion_page_for_book.html");
slideVector[index].date_time = "2020";
slideVector[index].listTitle = "Marion Baumgardner";

index++
slideVector[index] = new AddPDFDoc(index, "OBesspage.html");
slideVector[index].date_time = "2018";
slideVector[index].listTitle = "Richard Bess";

index++
slideVector[index] = new AddPDFDoc(index, "0Best.html");
slideVector[index].date_time = "1963";
slideVector[index].listTitle = "E. Gay Best";

index++
slideVector[index] = new AddPDFDoc(index, "oBinnie_page_for_book.html");
slideVector[index].date_time = "2020";
slideVector[index].listTitle = "Diane Binney";

index++
slideVector[index] = new AddPDFDoc(index, "0Boggess.html");
slideVector[index].date_time = "1995";
slideVector[index].listTitle = "Jeanetta Boggess";

index++
slideVector[index] = new AddPDFDoc(index, "0BowenD_and_Charlotte_page_for_book.html");
slideVector[index].date_time = "David: 2014 & Charlotte: 2021";
slideVector[index].listTitle = "David & Charlotte Bowen";

index++
slideVector[index] = new AddPDFDoc(index, "0BoydR.html");
slideVector[index].date_time = "2014";
slideVector[index].listTitle = "Robert Boyd";

index++
slideVector[index] = new AddPDFDoc(index, "0BrewerA_page_in_book.html");
slideVector[index].date_time = "2016";
slideVector[index].listTitle = "Albert Brewer";

index++
slideVector[index] = new AddPDFDoc(index, "0Brown.html");
slideVector[index].date_time = "1963";
slideVector[index].listTitle = "Gorman Brown";

index++
slideVector[index] = new AddPDFDoc(index, "0BryanB.html");
slideVector[index].date_time = "2016";
slideVector[index].listTitle = "Beverly Bryan";

index++
slideVector[index] = new AddPDFDoc(index, "0BurchbyG_and_Louise_page_for_book.html");
slideVector[index].date_time = "Glen: 2012 & Louise: 2021";
slideVector[index].listTitle = "Glen & Louise Burchby";

LastSlide = index;

}	// end "LoadMemorialInformation"