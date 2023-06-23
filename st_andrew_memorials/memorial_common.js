   // The code to detect the browser is from:	 // http://developer.netscape.com/docs/examples/javascript/browser_type.html	 // convert all characters to lowercase to simplify testing var agt=navigator.userAgent.toLowerCase();     // *** BROWSER VERSION ***     // Note: On IE5, these return 4, so use is_ie5up to detect IE5.     // Note: Opera and WebTV spoof Navigator.  We do strict client detection.     // If you want to allow spoofing, take out the tests for opera and webtv. var is_nav  = ((agt.indexOf('mozilla')!=-1) && (agt.indexOf('spoofer')==-1)                 && (agt.indexOf('compatible') == -1) && (agt.indexOf('opera')==-1)                 && (agt.indexOf('webtv')==-1)); var is_ie   = (agt.indexOf("msie") != -1);			 // *** PLATFORM ***var is_win   = ( (agt.indexOf("win")!=-1) || (agt.indexOf("16bit")!=-1) );var is_mac    = (agt.indexOf("mac")!=-1);		// Determine if mobile device    //Safari on iPadOS doesn't report as 'mobile' when requesting desktop site, yet still fails to embed PDFslet isSafariIOSDesktopMode = (  window.navigator.platform !== undefined &&                                     window.navigator.platform === "MacIntel" &&                                     window.navigator.maxTouchPoints !== undefined &&                                     window.navigator.maxTouchPoints > 1 );    //Quick test for mobile devices.var isMobileDevice = (isSafariIOSDesktopMode || /Mobi|Tablet|Android|iPad|iPhone/.test(window.navigator.userAgent));var ListCode = 1;var ListLoadedCode = 0;var NextSlidevar PreviousSlidevar Interval = 999;		// slideVector needs to be at least as large as the number of pdf files to be in the set.var slideVector = new Array(100);var FirstSlide = 0;var LastSlide = -1;var CurrentSlide = FirstSlide;var LastSlideShown = -1;var IDvar Date_timevar ImageNamevar ImageHeightvar ImageWidthvar Captionvar ImageNumber = -1;var ButtonGifs = new Array(4);ButtonGifs[0]=new Image();ButtonGifs[0].src = "first.gif";ButtonGifs[1]=new Image();ButtonGifs[1].src = "prev.gif";ButtonGifs[2]=new Image();ButtonGifs[2].src = "next.gif";ButtonGifs[3]=new Image();ButtonGifs[3].src = "last.gif";var ButtonDownGifs = new Array(4);ButtonDownGifs[0]=new Image();ButtonDownGifs[0].src = "first_down.gif";ButtonDownGifs[1]=new Image();ButtonDownGifs[1].src = "prev_down.gif";ButtonDownGifs[2]=new Image();ButtonDownGifs[2].src = "next_down.gif";ButtonDownGifs[3]=new Image();ButtonDownGifs[3].src = "last_down.gif";function ChangeList(){	StopTimer();		var listOption = document.getElementById("list");	//console.log ("ChangeList: listOption.innerHTML: " + listOption.innerHTML);	if (listOption.innerHTML == "Hide List")		ListCode = 0;			else	// listOption.innerHTML == "List"		ListCode = 1;			SetImageVariables(CurrentSlide);	var listViewElement = document.getElementById("listView");	var hidden = listViewElement.getAttribute("hidden");	//console.log ("ChangeList: ListCode: " + ListCode);	//console.log ("ChangeList: listView.hidden: " + hidden);	var mainSectionElement = document.getElementById("mainSection");			if (ListCode == 0)		{		//listViewElement.style.width = "50px";		//listViewElement.classList.toggle("hide");		listViewElement.setAttribute("hidden", "hidden");		document.getElementById("pdfFileContainer").style.gridColumn = "1 / span 2";		listOption.innerHTML = "Show List";				}	 	else		// ListCode != 0		{		//listViewElement.style.width = "150px";		//listViewElement.classList.toggle("hide");		listViewElement.removeAttribute("hidden");		document.getElementById("pdfFileContainer").style.gridColumn = "2";		listOption.innerHTML = "Hide List";				}		RestartSlideShow ();}		// end "ChangeList"function ClickNext(slide, imageNumber){	//console.log ("ClickNext: slide, imageNumber: " + slide + " " + imageNumber);	top.ImageNumber = imageNumber;	returnFlag = ItemClicked(slide);		//console.log ("ClickNext: number images: " + document.images.length);	document.images[imageNumber].src=top.ButtonGifs[imageNumber].src;		//console.log ("ClickNext: at end");	}		// end "ClickNext"// This function captures the left and right arrow key eventsdocument.onkeydown = function(evt) {	console.log('onkeydown in memorial_common.js');	HandleKeyDownEvent(evt);	};/*// This function captures the arrow key eventsdocument.onkeydown = function(evt) {	//console.log('onkeydown in alist_church_memorials1')   evt = evt || window.event;   switch (evt.keyCode)     	{        case 37:            parent.parent.leftArrowPressed();            break;                    case 38:            parent.parent.upArrowPressed();            break;                    case 39:            parent.parent.rightArrowPressed();            break;                    case 40:            parent.parent.downArrowPressed();            break;    	}};*/// This function handles the down arrow key; go to last slidefunction downArrowPressed() {ItemClicked (LastSlide);   }	// end "downArrowPressed"function FinishPDFLoad(){       	//console.log ("FinishPDFLoad: at start; LastSlideShown: " + LastSlideShown);		if (LastSlideShown >= 0)		{		const dateElement = document.getElementById("Date");		dateElement.innerHTML = slideVector[LastSlideShown].date_time;		const fileNameElement = document.getElementById("FileName");		fileNameElement.innerHTML = "File Name: " + slideVector[LastSlideShown].ID + ".pdf";				}	// end "if (LastSlideShown >= 0)"		if (Interval != 999)		{		StartTimer();				}		// end "if (Interval != 999)"}	// end "FinishPDFLoad"function FinishLoad(){       	//console.log ("FinishLoad: at start; ImageNumber: " + ImageNumber);	LoadList ();		if (isMobileDevice)		{		const pdfViewerElement = document.getElementById("pdfFile");		pdfViewerElement.innerHTML = "<p>This browser does not support inline PDF's.</p>Select desired name in the list to the left or select one of the navigation buttons above</p>";				}	// end "if (isMobileDevice)"		else	// !isMovileDevice		{		if (ImageNumber == -1)			{							ItemClicked (FirstSlide);			ImageNumber = FirstSlide;					}	// end "if (ImageNumber == -1)"				}	// end "else !isMobileDevice"}	// end "FinishLoad"// This function captures the left and right arrow key eventsfunction HandleKeyDownEvent(evt) {   evt = evt || window.event;	console.log('HandleKeyDownEvent: evt.keyCode: ' + evt.keyCode);   switch (evt.keyCode)     	{        case 37:            leftArrowPressed();            break;                    case 38:            upArrowPressed();            break;                    case 39:            rightArrowPressed();            break;                    case 40:            downArrowPressed();            break;    	}}	// end "HandleKeyDownEvent"  /*function HandleRefresh (){	console.log ("HandleRefresh is called");		window.top.frames["LowerFrame"].frames["SlideImage"].location.reload();	window.top.frames["LowerFrame"].frames["Legend"].location.reload();}	// end "HandleRefresh"*//*// This function handles a change in the size of the web browser window.function HandleResizeWindow(){	SetImageVariables(CurrentSlide);	frames["LowerFrame"].frames["SlideImage"].location.reload();	window.TopFrame.Ctrlbtn.RestartSlideShow();}	// end "HandleResizeWindow"*/		//	This function handles changing to the selected image.function ItemClicked(iIndex){  	//console.log ("ItemClicked: iIndex & LastSlideShown: " + iIndex + " " + LastSlideShown);	if (iIndex == LastSlideShown)		return;		SetImageVariables(iIndex);		if (!isMobileDevice)		{		const objElement = document.getElementById("pdfFile");			objElement.src = ImageName;		//console.log ("ItemClicked: element.src: " + objElement.src);				}	// end "!isMobileDevice"			else	// isMovileDevice		{				// Need to display pdf directly on mobile devices						window.open (ImageName);						}	// end "else isMovileDevice"		if (Interval != 999)		{		StartTimer();				}		// end "if (Interval != 999)"			LastSlideShown = iIndex;	}	// end "ItemClicked"// This function handles the left arrow keyfunction leftArrowPressed() {ItemClicked (PreviousSlide);   }// This function loads the legend listfunction LoadList (){	var listElement = document.getElementById("listView");	if (ListLoadedCode == 0)		{		//console.log ("LoadList: listView: " + listElement);		//console.log ("LoadList: listElement.innerHTML: " + listElement.innerHTML);		listElement.innerHTML = '';		for (index=0; index<=LastSlide; index++)			{			//console.log ("index: " + index); 			if (slideVector[index].listBreak != '')				listElement.innerHTML = listElement.innerHTML + '<p>' + window.top.slideVector[index].listBreak + '</p>';				listElement.innerHTML = listElement.innerHTML + '<p><a href="JavaScript:window.top.ItemClicked(' + index + ')">' + slideVector[index].listTitle + '</a></p>';			}	// end "for (index=0; index<window.top.LastSlide; index++)"					}	// end "if (ListLoadedCode == 0)"			ListLoadedCode = 1;			}	// end "LoadList"function MouseDown(gifNumber){	doDownGifFlag = 0;	switch (gifNumber)		{		case 0:			if (top.FirstSlide != top.CurrentSlide)				doDownGifFlag = 1;			break;					case 1:			if (top.PreviousSlide != top.CurrentSlide)				doDownGifFlag = 1;			break;					case 2:			if (top.NextSlide != top.CurrentSlide)				doDownGifFlag = 1;			break;					case 3:			if (top.LastSlide != top.CurrentSlide)				doDownGifFlag = 1;			break;				}		// end "switch (gifNumber)"		if (doDownGifFlag == 1)		document.images[gifNumber].src=top.ButtonDownGifs[gifNumber].src;			return true;	}		// end "MouseDown"function MouseOver(imageNumber){	//console.log ("MouseOver: imageNumber = " + imageNumber);	switch (imageNumber)		{		case 0:			if (top.FirstSlide == top.CurrentSlide)				window.status="This is the first picture; button will not activate."; 						else		// top.FirstSlide != top.CurrentSlide				window.status="Click on this button to go to the first picture."; 			break;					case 1:			if (top.PreviousSlide == top.CurrentSlide)				top.status="This is first picture; button will not activate."; 						else		// top.PreviousSlide != top.CurrentSlide				top.status="Click on this button to go to the previous picture."; 			break;					case 2:			if (top.NextSlide == top.CurrentSlide)				top.status="This is the last picture; button will not activate."; 						else		// top.NextSlide != top.CurrentSlide				top.status="Click on this button to go to the next picture.";			break;					case 3:			if (top.LastSlide == top.CurrentSlide)				top.status="This is the last picture; button will not activate."; 						else		// top.LastSlide != top.CurrentSlide				top.status="Click on this button to go to the last picture."; 			break;				}		// end "switch (imageNumber)"			return true;	}		// end "MouseOver"function PDFLoadError(){       	console.log ("PDFLoadError: at start; LastSlideShown: " + LastSlideShown);}	// end "PDFLoadError"function Picture3 (slideIndex, id, path)	{	imageNumber = slideIndex + 1;	this.ID = id;	this.path = path;	this.date_time = "";	this.caption = "";	this.listBreak = "";	this.listTitle = "Image " + imageNumber;		//var imagePathName = path + id + '.jpg';		//console.log (this);		//GetImageInformation (this, imagePathName);	}	// end "Picture3"/* This function sets up the image sizes for portrait type  */function RestartSlideShow(){    	if (Interval != 999)		{		StartTimer();				}		// end "if (Interval != 999)"}		// end "RestartSlideShow"// This function handles the right arrow keyfunction rightArrowPressed() {	console.log ("rightArrowPressed: start");	ItemClicked (NextSlide);}	// end "rightArrowPressed"	//	This function handles setting the global variables to be used to create the image frame.function SetImageVariables (iIndex){  	lSlideVector = slideVector[iIndex];	//console.log ("SetImageVariables: iIndex " + iIndex);		ID = slideVector[iIndex].ID;	Date_time = slideVector[iIndex].date_time;	pathName = slideVector[iIndex].path + ID;	Caption = slideVector[iIndex].caption;		ListBreak = slideVector[iIndex].listBreak;	ListTitle = slideVector[iIndex].listTitle;		SetSizeVariables (iIndex, pathName);	ImageName = slideVector[iIndex].ImageName;	//console.log ("SetImageVariables: ImageName " + ImageName);		CurrentSlide = iIndex;		if (iIndex < LastSlide)		NextSlide = iIndex + 1;			else	// iIndex >= LastSlide		{		if (Interval == 999)			NextSlide = LastSlide;					else	// Interval != 999			NextSlide = FirstSlide;					}	// end "else iIndex >= LastSlide"			if (iIndex > FirstSlide)		PreviousSlide = iIndex - 1;			else		PreviousSlide = FirstSlide;	}	// end "SetImageVariables"// This function sets the variables depending on the size of the image to be displayed// 	for the specified image.function SetSizeVariables (iIndex, pathName){   			//window.top.ImageName = pathName + '.pdf';			slideVector[iIndex].ImageName = pathName + '.pdf';			//console.log ("SetSizeVariables slideVector: " + slideVector[iIndex].ImageName);								// Allow for scroll bar to right of image (16), window width (4), border around					// image (4) and space around edge (6).								//console.log ("window.innerWidth: " + window.innerWidth);			//console.log ("window.innerHeight: " + window.innerHeight);			if (is_nav)				{				availWidth = window.innerWidth - 25;				//availWidth = window.innerWidth;				if (ListCode != 0)					availWidth -= 135;				availHeight = window.innerHeight - 60;				}	// end "if (is_nav)"			else	// !is_nav				{									availWidth = screen.availWidth - 50;				//availWidth = screen.availWidth;				if (ListCode != 0)					availWidth = availWidth - 135;					availHeight = screen.availHeight - 100;				if (is_win)					{					availHeight -= 90;					}				}	// end "else !is_nav"			window.top.ImageWidth = availWidth;			window.top.ImageHeight = availHeight;			//console.log ("case5 ImageWidth: " + window.top.ImageWidth);			//console.log ("case5ImageHeight: " + window.top.ImageHeight);				}	// End "SetSizeVariables"function SlideShow(flag){	firstTimeFlag = 0;	var showOption = document.getElementById("show");	var showSelection = showOption.selectedIndex;		if (flag == 1)		{				// The slide show drop down menu has changed.				// Set up the slide show with the requested interval.						value = showOption.options[showSelection].value;				if (value > 0)			{			if (Interval != 999)				StopTimer();						Interval = value;			firstTimeFlag = 1;			flag = 0;						}		// end "if (value > 0)"				}		// end "if (flag == 1)"		if (flag == 0)		{				// This is a call from the timer itself. It is already stopped.						ID = 0;				if (firstTimeFlag == 0)			{			ItemClicked (NextSlide);						}					else	// firstTimeFlag == 1			{			StartTimer();						}				}		// end "if (flag == 0)"			else 	// flag == 1		{		StopTimer();				Interval = 999;				}		// end "else flag == 1"}		// end "SlideShow"function StartTimer(){	StopTimer();			delay = Interval * 1000;	ID = window.setTimeout ("SlideShow(0);", delay);}		// end "StartTimer"function StopTimer(){	if (ID != 0)		{		window.clearTimeout(ID);		ID = 0;				}}		// end "StopTimer"/*window.requestIdleCallback =  window.requestIdleCallback ||  function (callBack) {    var start = Date.now();    return setTimeout(function () {      callBack({        didTimeout: false,        timeRemaining: function () {          return Math.max(0, 50 - (Date.now() - start));        }      });    }, 1);  }*/// This function handles the up arrow key; go to first slidefunction upArrowPressed() {	ItemClicked (FirstSlide);   }	// end "upArrowPressed"//ItemClicked (FirstSlide);//<object id="pdfFile" data="Memorial_Files/Adams_Lisa_page_for_book.pdf" onload="FinishPDFLoad()" onerror="PDFLoadError()" onbeforeunload="OnBeforeUnload()">object can't be rendered</object>//<iframe id="pdfFile" src="Memorial_Files/Adams_Lisa_page_for_book.pdf" onload="FinishPDFLoad()" onerror="PDFLoadError()" onbeforeunload="OnBeforeUnload()">object can't be rendered</iframe>//	<!-->//	<meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate">//	<meta http-equiv="Pragma" content="no-cache">//	<meta http-equiv="Expires" content="0">-->     