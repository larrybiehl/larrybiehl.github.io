
function LoadMemorialInformation ()
{
		// Note that index needs to be initialized to 0 for the first entry in the array and then index by one
		// for every pdf file after the first.

index = 0;
AddListBreakToSlideVector (index, "A");

index++
slideVector[index] = new AddPDFDoc(index, "Adams_Lisa_page_for_book");
slideVector[index].date_time = "2018";
slideVector[index].listTitle = "Lisa Adams";
FirstSlide = index;

index++
slideVector[index] = new AddPDFDoc(index, "0Averys");
slideVector[index].date_time = "Nanette: 1998 & Arthur: 1998";
slideVector[index].listTitle = "Arthur & Nanette Avery";

index++
AddListBreakToSlideVector  (index, "B");

index++
slideVector[index] = new AddPDFDoc(index, "Baurmgardner_Marion_page_for_book");
slideVector[index].date_time = "2020";
slideVector[index].listTitle = "Marion Baumgardner";

index++
slideVector[index] = new AddPDFDoc(index, "0Best");
slideVector[index].date_time = "1963";
slideVector[index].listTitle = "E. Gay Best";

index++
slideVector[index] = new AddPDFDoc(index, "0BowenD_and_Charlotte_page_for_book");
slideVector[index].date_time = "David: 2014 & Charlotte: 2021";
slideVector[index].listTitle = "David & Charlotte Bowen";

index++
slideVector[index] = new AddPDFDoc(index, "0BoydR");
slideVector[index].date_time = "2014";
slideVector[index].listTitle = "Robert Boyd";

index++
slideVector[index] = new AddPDFDoc(index, "0BrewerA_page_in_book");
slideVector[index].date_time = "2016";
slideVector[index].listTitle = "Albert Brewer";

index++
slideVector[index] = new AddPDFDoc(index, "0BryanB");
slideVector[index].date_time = "2016";
slideVector[index].listTitle = "Beverly Bryan";

index++
slideVector[index] = new AddPDFDoc(index, "0Brown");
slideVector[index].date_time = "1963";
slideVector[index].listTitle = "Gorman Brown";

index++
slideVector[index] = new AddPDFDoc(index, "0BurchbyG_and_Louise_page_for_book");
slideVector[index].date_time = "Glen: 2012 & Louise: 2021";
slideVector[index].listTitle = "Glen & Louise Burchby";

index++
AddListBreakToSlideVector (index, "K");

index++
slideVector[index] = new  AddPDFDoc(index, "Kepner_Jean");
slideVector[index].date_time = "2009";
slideVector[index].listTitle = "Jean Kepner";

index++;
slideVector[index] = new AddPDFDoc(index, "Kirkpatrick_Ed_Peg");
slideVector[index].date_time = "Peg: 2006 & Ed: 2019";
slideVector[index].listTitle = "Ed & Peg Kirkpatrick";

index++;
slideVector[index] = new AddPDFDoc (index, "Klenosky_Irwin");
slideVector[index].date_time = "2005";
slideVector[index].listTitle = "Irwin Klenosky";

index++;
slideVector[index] = new AddPDFDoc (index, "Klenosky_Matt");
slideVector[index].date_time = "2018";
slideVector[index].listTitle = "Matt Klenosky";

index++;
slideVector[index] = new AddPDFDoc (index, "Kraft_Ken_Virginia");
slideVector[index].date_time = "Ken: 2011 & Virginia 2013";
slideVector[index].listTitle = "Ken & Virginia Kraft";

index++;
slideVector[index] = new AddPDFDoc (index, "Kraft_Randy");
slideVector[index].date_time = "2017";
slideVector[index].listTitle = "Randy Kraft";

index++
AddListBreakToSlideVector (index, "L");

index++;
slideVector[index] = new AddPDFDoc (index, "Liechty_Sheryl");
slideVector[index].date_time = "1977";
slideVector[index].listTitle = "Sheryl Liechty";

index++
AddListBreakToSlideVector (index, "M");

index++;
slideVector[index] = new AddPDFDoc (index, "0Morris_K_for_book");
slideVector[index].date_time = "2018";
slideVector[index].listTitle = "Kim Morris";

index++
AddListBreakToSlideVector (index, "N");

index++;
slideVector[index] = new AddPDFDoc (index, "ONeieM_page_for_book");
slideVector[index].date_time = "2022";
slideVector[index].listTitle = "Marilyn Neie";

index++;
slideVector[index] = new AddPDFDoc (index, "ONewman_John_R_page_for_book");
slideVector[index].date_time = "2021";
slideVector[index].listTitle = "John Newman";

index++
AddListBreakToSlideVector (index, "S");

index++;
slideVector[index] = new AddPDFDoc (index, "0SegristD_and_A_page_for_book");
slideVector[index].date_time = "Donna: 2013 & Al: 2018";
slideVector[index].listTitle = "Al & Donna Segrist";

index++;
slideVector[index] = new AddPDFDoc (index, "OSorensen_page_for-book");
slideVector[index].date_time = "2021";
slideVector[index].listTitle = "Bob Sorensen";

index++
AddListBreakToSlideVector (index, "T");

index++;
slideVector[index] = new AddPDFDoc (index, "OThrasher_page_for_book");
slideVector[index].date_time = "2020";
slideVector[index].listTitle = "George Thrasher";

index++
AddListBreakToSlideVector (index, "W");

index++;
slideVector[index] = new AddPDFDoc (index, "OWeis_Chuck_and_Doris_for_book");
slideVector[index].date_time = "Chuck: 2009 & Doris: 2020";
slideVector[index].listTitle = "Chuck & Doris Weis";

LastSlide = index;

}	// end "LoadMemorialInformation"