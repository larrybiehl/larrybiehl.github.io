
function LoadHistoryInformation ()
{
		// Note that index needs to be initialized to 0 for the first entry in the array and then index by one
		// for every pdf file after the first.

index = 0;
AddMainListBreakToSlideVector (index, "Dad's Side of Family");

index++
AddListBreakToSlideVector (index, "  BIEHL");

index++
slideVector[index] = new AddPDFDoc(index, "Biehl/Biehl_History_Scrapbook1.pdf");
slideVector[index].date_time = "";
slideVector[index].listTitle = "Biehl_book1";
FirstSlide = index;

index++
slideVector[index] = new AddPDFDoc(index, "Biehl/Biehl_History_Scrapbook2.pdf");
slideVector[index].date_time = "";
slideVector[index].listTitle = "Biehl_book2";

index++
slideVector[index] = new AddPDFDoc(index, "Biehl/Leroy_Biehl_Family_Scrapbook.pdf");
slideVector[index].date_time = "";
slideVector[index].listTitle = "Leroy Biehl Family";

index++
slideVector[index] = new AddPDFDoc(index, "Biehl/Some_Leroy_Biehl_Finance_Records.pdf");
slideVector[index].date_time = "";
slideVector[index].listTitle = "SomeLeroy Biehl Finance Records";

index++
AddListBreakToSlideVector (index, "  GARBER");

index++
slideVector[index] = new AddPDFDoc(index, "Garber/Garber_History_Scrapbook.pdf");
slideVector[index].date_time = "";
slideVector[index].listTitle = "Garber History/Scrapbook";

index++
slideVector[index] = new AddPDFDoc(index, "Garber/The_Garber_Historical_and_Genealogical_Record_Vol3_by_Clark_Garber.pdf");
slideVector[index].date_time = "";
slideVector[index].listTitle = "Garber History by Clark Garber";

index++
slideVector[index] = new AddPDFDoc(index, "Garber/Vera_DVD.mp4");
slideVector[index].date_time = "";
slideVector[index].listTitle = "Vera Video";

index++
AddListBreakToSlideVector (index, "  GILL");

index++
slideVector[index] = new AddPDFDoc(index, "Gill/Gill_History_Scrapbook.pdf");
slideVector[index].date_time = "";
slideVector[index].listTitle = "Gill History/Scrapbook";

index++
AddListBreakToSlideVector (index, "  ROSE");

index++
slideVector[index] = new AddPDFDoc(index, "Rose/Rose_History.pdf");
slideVector[index].date_time = "";
slideVector[index].listTitle = "Rose History";

index++
AddMainListBreakToSlideVector (index, "Mom's Side of Family");

index++
AddListBreakToSlideVector (index, "  BUTLER");

index++
slideVector[index] = new AddPDFDoc(index, "Butler/History_of_John_Butler_Family.pdf");
slideVector[index].date_time = "";
slideVector[index].listTitle = "History of John Butler Family";

index++
AddListBreakToSlideVector (index, "  DEAL");

index++
slideVector[index] = new AddPDFDoc(index, "Deal/Deal_History_Scrapbook.pdf");
slideVector[index].date_time = "";
slideVector[index].listTitle = "Deal History-Scrapbook";

index++
slideVector[index] = new AddPDFDoc(index, "Deal/Lulu_Denney_Deal_History_Book.pdf");
slideVector[index].date_time = "";
slideVector[index].listTitle = "Lulu Denney Deal History Book";

index++
slideVector[index] = new AddPDFDoc(index, "Deal/Albert_Deal_Autograph_Book.pdf");
slideVector[index].date_time = "";
slideVector[index].listTitle = "Albert Deal Autograph Book";

index++
slideVector[index] = new AddPDFDoc(index, "Deal_Stouffer_Pictures_1910-1920.pdf");
slideVector[index].date_time = "";
slideVector[index].listTitle = "Deal & Stouffer Pictures: 1910-1920";

index++
slideVector[index] = new AddPDFDoc(index, "Deal/1836_Deal_Day_Book.pdf");
slideVector[index].date_time = "";
slideVector[index].listTitle = "1836 Henry Deal Day Book";

index++
slideVector[index] = new AddPDFDoc(index, "Deal/1840s_Henry_Deal_Day_Book.pdf");
slideVector[index].date_time = "";
slideVector[index].listTitle = "1840s Henry Deal Day Book";

index++
slideVector[index] = new AddPDFDoc(index, "Deal/Cora_Deal_Yellowstone_and_Colorado_Trip_1916.pdf");
slideVector[index].date_time = "";
slideVector[index].listTitle = "Cora Deal Yellowstone Trip";

index++
slideVector[index] = new AddPDFDoc(index, "Deal/Deal_Reunion_Record.pdf");
slideVector[index].date_time = "";
slideVector[index].listTitle = "Deal Reunion Record";

index++
slideVector[index] = new AddPDFDoc(index, "Deal/Jessie_Zinn_Deal_Friendship_Book_1882.pdf");
slideVector[index].date_time = "";
slideVector[index].listTitle = "Jessie (Zinn) Deal Friendship Book";

index++
slideVector[index] = new AddPDFDoc(index, "Deal/Cora_Deal_Sewing.pdf");
slideVector[index].date_time = "";
slideVector[index].listTitle = "Cora Deal Sewing";

index++
AddListBreakToSlideVector (index, "  RIDENOUR");

index++
slideVector[index] = new AddPDFDoc(index, "Ridenour/Ridenour_History_by_John_Ridenour.pdf");
slideVector[index].date_time = "";
slideVector[index].listTitle = "Ridenour History by John Ridenour";

index++
slideVector[index] = new AddPDFDoc(index, "Ridenour/Ridenour_History_Scrapbook.pdf");
slideVector[index].date_time = "";
slideVector[index].listTitle = "Ridenour History-Scrapbook";

index++
slideVector[index] = new AddPDFDoc(index, "Ridenour/David_Ridenour_Branch_History_Scrapbook.pdf");
slideVector[index].date_time = "";
slideVector[index].listTitle = "David Ridenour Branch History-Scrapbook";

index++
AddListBreakToSlideVector (index, "  SNOW FAMILY");

index++
slideVector[index] = new AddPDFDoc(index, "Snow_Family/Snow_Family_Info.pdf");
slideVector[index].date_time = "";
slideVector[index].listTitle = "Snow Family";

index++
AddListBreakToSlideVector (index, "  STOUFFER");

index++
slideVector[index] = new AddPDFDoc(index, "Stouffer/Stouffer_History_Scrapbook_1.pdf");
slideVector[index].date_time = "";
slideVector[index].listTitle = "Stouffer History-Scrapbook1";

index++
slideVector[index] = new AddPDFDoc(index, "Stouffer/Stouffer_History_Scrapbook_2.pdf");
slideVector[index].date_time = "";
slideVector[index].listTitle = "Stouffer History-Scrapbook2";

index++
slideVector[index] = new AddPDFDoc(index, "Stouffer/Stouffer_Line_of_Descent_1951.pdf");
slideVector[index].date_time = "";
slideVector[index].listTitle = "A Stouffer Line of Descent";

index++
slideVector[index] = new AddPDFDoc(index, "Stouffer/Descendants_of_William_Parker_Stouffer_by_Mable_Stouffer_Oliver_19770710.pdf");
slideVector[index].date_time = "";
slideVector[index].listTitle = "Descendants of W. P. Stouffer by Mable Oliver (1977)";

index++
slideVector[index] = new AddPDFDoc(index, "Stouffer/Stouffer_Reunions_1949-2006.pdf");
slideVector[index].date_time = "";
slideVector[index].listTitle = "Stouffer Reunions (1949-2006)";

index++
slideVector[index] = new AddPDFDoc(index, "Deal_Stouffer_Pictures_1910-1920.pdf");
slideVector[index].date_time = "";
slideVector[index].listTitle = "Deal & Stouffer Pictures: 1910-1920";

index++
slideVector[index] = new AddPDFDoc(index, "Stouffer/Everett_Stouffer_Purdue_Short_Course.pdf");
slideVector[index].date_time = "";
slideVector[index].listTitle = "Everett Stouffer Purdue Short Course";

index++
slideVector[index] = new AddPDFDoc(index, "Stouffer/Cora_Everett_Stouffer_Info.pdf");
slideVector[index].date_time = "";
slideVector[index].listTitle = "Everett and Cora Everett Stouffer Information";

index++
AddListBreakToSlideVector (index, "  ZINN");

index++
slideVector[index] = new AddPDFDoc(index, "Zinn/George_W_Zinn_Family_History.pdf");
slideVector[index].date_time = "";
slideVector[index].listTitle = "George W. Zinn Family History";

index++
AddListBreakToSlideVector (index, "  DENNEY");

index++
slideVector[index] = new AddPDFDoc(index, "Denney/Lulu_and_Van_Denney_Scrapbook.pdf");
slideVector[index].date_time = "";
slideVector[index].listTitle = "Lulu & Van Denney Scrapbook";

index++
slideVector[index] = new AddPDFDoc(index, "Denney/Lulu_Denney_Scrapbook.pdf");
slideVector[index].date_time = "";
slideVector[index].listTitle = "Lulu Denney Scrapbook";

index++
slideVector[index] = new AddPDFDoc(index, "Denney/1917_12_14_Urbana_HS_Play.pdf");
slideVector[index].date_time = "";
slideVector[index].listTitle = "Urbana Play Lulu Denney Directed";

index++
slideVector[index] = new AddPDFDoc(index, "Denney/Letters_to_Lulu_1914-1953.pdf");
slideVector[index].date_time = "";
slideVector[index].listTitle = "Letters to Lulu (1914-1953)";

index++
AddMainListBreakToSlideVector (index, "Memories of Mom and Dad");

index++
slideVector[index] = new AddPDFDoc(index, "Other_Memories/Grandma_and_Grandpa_Biehl_Interview(2006)_Final.mp4");
slideVector[index].date_time = "";
slideVector[index].listTitle = "Mom & Dad Interview Video";

index++
slideVector[index] = new AddPDFDoc(index, "Other_Memories/Kevin_Biehl_Project_XL_video.mp4");
slideVector[index].date_time = "";
slideVector[index].listTitle = "Kevin's Project XL Video";

index++
AddListBreakToSlideVector (index, "Linlawn School");

index++
slideVector[index] = new AddPDFDoc(index, "Other_Memories/Linlawn/Linlawn_Treasure_Chest.pdf");
slideVector[index].date_time = "";
slideVector[index].listTitle = "Linlawn Treasure Chest";

index++
slideVector[index] = new AddPDFDoc(index, "Other_Memories/Linlawn/Linlawn_1944.pdf");
slideVector[index].date_time = "";
slideVector[index].listTitle = "Linlawn 1944";

index++
AddListBreakToSlideVector (index, "Salem United Methodist Church");

index++
slideVector[index] = new AddPDFDoc(index, "Other_Memories/Salem_UMC/Salem_UMC_1881-Centennial-1981.pdf");
slideVector[index].date_time = "";
slideVector[index].listTitle = "Salem UMC Centennial";

index++
AddMainListBreakToSlideVector (index, "Other Information");

index++
AddListBreakToSlideVector (index, "WABASH COUNTY INFORMATION");

index++
slideVector[index] = new AddPDFDoc(index, "County_Information/Indians_of_Wabash_County.pdf");
slideVector[index].date_time = "";
slideVector[index].listTitle = "Indians of Wabash County";

index++
slideVector[index] = new AddPDFDoc(index, "County_Information/North_Manchester_Historic_District.pdf");
slideVector[index].date_time = "";
slideVector[index].listTitle = "Manchester Historic District";

index++
slideVector[index] = new AddPDFDoc(index, "County_Information/Urbana_Past_and_Present.pdf");
slideVector[index].date_time = "";
slideVector[index].listTitle = "Urbana Past and Present";

index++
slideVector[index] = new AddPDFDoc(index, "County_Information/Wabash_South_Side_History.pdf");
slideVector[index].date_time = "";
slideVector[index].listTitle = "Wabash South Side History (1954)";

index++
slideVector[index] = new AddPDFDoc(index, "County_Information/1875_Wabash_County_Historic_Atlas.pdf");
slideVector[index].date_time = "";
slideVector[index].listTitle = "1875 Wabash County Historic Atlas";

index++
slideVector[index] = new AddPDFDoc(index, "County_Information/Wabash_County_History.pdf");
slideVector[index].date_time = "";
slideVector[index].listTitle = "Some Wabash County History";

index++
slideVector[index] = new AddPDFDoc(index, "County_Information/Ohio_Indiana_Canal_System.pdf");
slideVector[index].date_time = "";
slideVector[index].listTitle = "Ohio Indiana Canal System";

LastSlide = index;

}	// end "LoadMemorialInformation"