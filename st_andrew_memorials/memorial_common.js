   // The code to detect the browser is from:	 // http://developer.netscape.com/docs/examples/javascript/browser_type.html	 // convert all characters to lowercase to simplify testing //var agt=navigator.userAgent.toLowerCase();     // *** BROWSER VERSION ***     // Note: On IE5, these return 4, so use is_ie5up to detect IE5.     // Note: Opera and WebTV spoof Navigator.  We do strict client detection.     // If you want to allow spoofing, take out the tests for opera and webtv. //s_nav  = ((agt.indexOf('mozilla')!=-1) && (agt.indexOf('spoofer')==-1) //           && (agt.indexOf('compatible') == -1) && (agt.indexOf('opera')==-1) //                && (agt.indexOf('webtv')==-1)); 			 // *** PLATFORM ***//var is_win   = ( (agt.indexOf("win")!=-1) || (agt.indexOf("16bit")!=-1) );		// Determine if mobile device    //Safari on iPadOS doesn't report as 'mobile' when requesting desktop site, yet still fails to embed PDFslet isSafariIOSDesktopMode = (  window.navigator.platform !== undefined &&                                     window.navigator.platform === "MacIntel" &&                                     window.navigator.maxTouchPoints !== undefined &&                                     window.navigator.maxTouchPoints > 1 );    //Quick test for mobile devices.var isMobileDevice = (isSafariIOSDesktopMode || /Mobi|Tablet|Android|iPad|iPhone/.test(window.navigator.userAgent));//isMobileDevice = true;var ListCode = 1;var ListLoadedCode = 0;var Interval = 999;		// slideVector needs to be at least as large as the number of pdf files to be in the set.var slideVector = new Array(160);var FirstSlide = 0;var LastSlide = -1;var CurrentSlide = FirstSlide;var LastSlideShown = -1;var LastPDFSlide = -1;var IDvar Date_timevar ImageNamevar ImageHeightvar Captionvar NextSlidevar PreviousSlidevar TimerID = 0;var ImageNumber = -1;		// These two variables control when to have the document shown to the right of the list for mobile devices.var gNarrowWidth = 570;var gNarrowWidthMode = 0;var gSwitchedFromNarrowFlag = 0;var gWideScreenThreshhold = 1800;		// This variable controls when to remove the footer from the display because it will take up too much room 		// from the display area when mobile device like phones are in landscape mode.var gShortHeight = 570;var gListWidth = 150;		// Used for case when pdfs cannot be embedded into the web page. Such as mobile devices.var WindowProxyValue = null;		// Used for intoJS tourvar inIntroJSTourFlag = false;var inIntroJSTourJustCompletedFlag = false;var ButtonGifs = new Array(4);ButtonGifs[0]=new Image();ButtonGifs[0].src = "first.gif";ButtonGifs[1]=new Image();ButtonGifs[1].src = "prev.gif";ButtonGifs[2]=new Image();ButtonGifs[2].src = "next.gif";ButtonGifs[3]=new Image();ButtonGifs[3].src = "last.gif";var ButtonDownGifs = new Array(4);ButtonDownGifs[0]=new Image();ButtonDownGifs[0].src = "first_down.gif";ButtonDownGifs[1]=new Image();ButtonDownGifs[1].src = "prev_down.gif";ButtonDownGifs[2]=new Image();ButtonDownGifs[2].src = "next_down.gif";ButtonDownGifs[3]=new Image();ButtonDownGifs[3].src = "last_down.gif";$(document).ready(function(){    	$('#show_me').click(function() {      $('*[data-intro-disabled]').each(function() {         if ($(this).is(':visible')) {         	value = $(this).attr('data-intro-disabled');            $(this).attr(                  'data-intro',                  //$(this).data('intro-disabled')                  value);            }             	         else          	{            $(this).removeAttr('data-intro'); }                    	});        			inIntroJSTourFlag = true;      introJs().oncomplete(onIntroJSExit).onexit(onIntroJSExit).start();      //introJs().onexit(function() {      //		contole.log("jsExitRoutine: ");      //		});      		     	//introJs().start();          	});    	    	// Make sure the 'pdfMessage2' element is hidden to start with    		$('#pdfMessage2ID').addClass('hide');    		// Attaching the event listener function to window's resize event	window.addEventListener("resize", WindowSizeChanged);		// Determine if a portrait mode width of less than 'gNarrowWidth' is possible.	if (isMobileDevice)		{						// Get the current setting. It may be in landscape mode to start with.		if (window.innerWidth < gNarrowWidth)			gNarrowWidthMode = 1;				}	// end "if (isMobileDevice)"});	// end ".ready"function AddListBreak (slideIndex, listBreak)	{	//console.log ("AddListBreak: slideIndex, id: " + slideIndex + ", " + listBreak);		this.fileName = "";	this.path = "";	this.date_time = "";	this.caption = "";	this.listBreak = listBreak;	this.listTitle = "";		this.PreviousSlide = -1;	this.NextSlide = -1;		}	// end "AddPDFDoc"function AddListBreakToSlideVector (slideIndex, listBreak)	{	slideVector[slideIndex] = new AddListBreak (index, listBreak);		if (LastPDFSlide > 0)		slideVector[LastPDFSlide].NextSlide = slideIndex + 1;		}function AddPDFDoc (slideIndex, fileName)	{	//console.log ("AddPDFDoc: slideIndex, id: " + slideIndex + ", " + id);		imageNumber = slideIndex + 1;	this.fileName = fileName;	this.path = "Memorial_Files/";	this.date_time = "";	this.caption = "";	this.listBreak = "";	this.listTitle = "Image " + imageNumber;		this.PreviousSlide = LastPDFSlide;	this.NextSlide = slideIndex + 1;		LastPDFSlide = slideIndex;		}	// end "AddPDFDoc"function AddPDFDoc2 (slideIndex, fileName, path)	{	//console.log ("AddPDFDoc: slideIndex, id, path: " + slideIndex + ", " + id + ", " + path);	imageNumber = slideIndex + 1;	this.fileName = fileName;	this.path = path;	this.date_time = "";	this.caption = "";	this.listBreak = "";	this.listTitle = "Image " + imageNumber;		this.PreviousSlide = LastPDFSlide;	this.NextSlide = slideIndex + 1;		LastPDFSlide = slideIndex;	}	// end "AddPDFDoc2"function ChangeList(){	StopTimer();		var listOption = document.getElementById("list");	//console.log ("ChangeList: listOption.innerHTML: " + listOption.innerHTML);	if (listOption.innerHTML == "Hide List")		ListCode = 0;			else	// listOption.innerHTML == "List"		ListCode = 1;			SetMemorialFileVariables(CurrentSlide);	var listViewElement = document.getElementById("listView");	var hidden = listViewElement.getAttribute("hidden");			if (ListCode == 0)		{		listViewElement.setAttribute("hidden", "hidden");		document.getElementById("pdfFileContainerID").style.gridColumn = "1 / span 2";		document.getElementById("footerID").style.gridColumn = "1 / span 2";		listOption.innerHTML = "Show List";				if (isMobileDevice)			$('#pdfFileContainerID').width ($('#mainSectionID').width ());					}	// end "if (ListCode == 0)"	 	else	// ListCode != 0		{		listViewElement.removeAttribute("hidden");		document.getElementById("pdfFileContainerID").style.gridColumn = "2";		document.getElementById("footerID").style.gridColumn = "2";		listOption.innerHTML = "Hide List";				if (isMobileDevice)			$('#pdfFileContainerID').width ($('#mainSectionID').width () - gListWidth);					}	//end else ListCode != 0		RestartSlideShow ();}		// end "ChangeList"function ClickNext(slide, gifNumber){	//console.log ("ClickNext: slide, gifNumber: " + slide + " " + gifNumber);	//ImageNumber = gifNumber;	returnFlag = ItemClicked(slide);		//console.log ("ClickNext: number images: " + document.images.length);	document.images[gifNumber].src = ButtonGifs[gifNumber-2].src;		//console.log ("ClickNext: at end");	}		// end "ClickNext"// This function captures the left and right arrow key eventsdocument.onkeydown = function(evt) {	//console.log('onkeydown in memorial_common.js');	HandleKeyDownEvent(evt);	};document.onvisibilitychange = function(){	if (document.visibilityState === "visible") 		{					// Check if WindowSizeChanged needs to be called. This can happen when the mobile 				// device is in landscape mode, the pdf is displayed in a separate window then rotated				// to portrait mode and then the back arrow is tapped to go to the list.				// Not sure this code every gets called.					if (isMobileDevice && ( (gNarrowWidthMode == 0 && window.innerWidth < gNarrowWidth) ||										(gNarrowWidthMode == 1 && window.innerWidth >= gNarrowWidth) ))			{			console.log ("in onvisibilitychange1");			WindowSizeChanged ();					}	// end "if (isMobileDevice ..."  			}	// end "if (document.visibilityState === visible)"	};	// end "document.onvisibilitychange"function handleVisibilityChange() {	if(!document.hidden)   		{	    			// the page is visible				// Check if WindowSizeChanged needs to be called. This can happen when the mobile 				// device is in landscape mode, the pdf is displayed in a separate window then rotated				// to portrait mode and then the back arrow is tapped to go to the list.				// Not sure this code every gets called.					if (isMobileDevice && ( (gNarrowWidthMode == 0 && window.innerWidth < gNarrowWidth) ||										(gNarrowWidthMode == 1 && window.innerWidth >= gNarrowWidth) ))			{			console.log ("in onvisibilitychange2");			WindowSizeChanged ();					}	// end "if (isMobileDevice ..."			  		}  		}	// end "handleVisibilityChange"document.addEventListener ("visibilitychange", handleVisibilityChange, false);// This function handles the down arrow key; go to last slidefunction downArrowPressed() {ItemClicked (LastSlide);   }	// end "downArrowPressed"function FinishPDFLoad(){       	//console.log ("FinishPDFLoad: at start; LastSlideShown: " + LastSlideShown);		if (LastSlideShown >= 0)		{				const dateElement = document.getElementById("Date");		dateElement.innerHTML = slideVector[LastSlideShown].date_time;		//if (!isMobileDevice)		//	{			const fileNameElement = document.getElementById("FileName");			fileNameElement.innerHTML = "file: " + slideVector[LastSlideShown].fileName;					//	}	// end "if (!isMobileDevice)"				}	// end "if (LastSlideShown >= 0)"		if (Interval != 999)		{		StartTimer();				}		// end "if (Interval != 999)"}	// end "FinishPDFLoad"function FinishLoad(){       	//console.log ("FinishLoad: at start; ImageNumber: " + ImageNumber);	LoadList ();		pdfMessageElement = document.getElementById("pdfMessage");		if (isMobileDevice)		{		pdfMessageElement.innerHTML = "Tap this line to see entire file. Use browser left arrow to go back to the list."						// Add some space between buttons.		pdfMessageElement = document.getElementById("gif1");		pdfMessageElement.style.paddingLeft = "9px";		pdfMessageElement = document.getElementById("gif2");		pdfMessageElement.style.paddingLeft = "9px";		pdfMessageElement = document.getElementById("gif3");		pdfMessageElement.style.paddingLeft = "9px";				}	// end "if (isMobileDevice)"			else	// !isMobileDevice		{		pdfMessageElement.style.display = "none"; 		$('#pdfMessage').removeAttr("data-intro");		$('#pdfMessage2ID').removeAttr("data-intro");				}	// else !isMobileDevice			WindowSizeChanged();		if (!gNarrowWidthMode)		ItemClicked (FirstSlide);			ImageNumber = FirstSlide;			document.getElementById("listView").focus({preventScroll: true});}	// end "FinishLoad"var GetUsableHeight = function() 	{	"use strict";  	// check if this page is within a app frame	var isInAppMode = ("standalone" in navigator && navigator.standalone) || (window.chrome && window.top.chrome.app && window.top.chrome.app.isInstalled);		var ua = navigator.userAgent;				// Memorized values	var isIphone = ua.indexOf('iPhone') !== -1 || ua.indexOf('iPod') !== -1;	var isIpad = ua.indexOf('iPad') !== -1;	var isAndroid = ua.indexOf('Android') !== -1;	var isMobile = isIphone || isIpad || isAndroid;		// compute the missing area taken up by the header of the web browser to offset the screen height	var usableOffset = 0;	if (isIphone) 		{		usableOffset = 20;		} 	else if (isAndroid && ua.indexOf('Chrome') === -1) 		{		usableOffset = 1;		}	if (!isMobile) 		{		return window.innerHeight;		}			var isLandscape = window.innerWidth > window.innerHeight, height;				// on ios devices, this must use screen	if(isIphone) 		{		height = isLandscape ? screen.width : screen.height;		if(!isInAppMode) 			{			height -= isLandscape ? 32 : 44;			height += 1;			}		} 			else 		{		height = (isLandscape ? window.outerWidth : window.outerHeight) / (window.devicePixelRatio || 1);		}			return height - usableOffset;	}	// end "GetUsableHeight"// This function captures the left and right arrow key eventsfunction HandleKeyDownEvent(evt) {   evt = evt || window.event;	//console.log('HandleKeyDownEvent: evt.keyCode: ' + evt.keyCode);	if (inIntroJSTourFlag || inIntroJSTourJustCompletedFlag)		{		inIntroJSTourJustCompletedFlag = false;		return;				}		   switch (evt.keyCode)     	{        case 37:            leftArrowPressed();            break;                    case 38:            upArrowPressed();            break;                    case 39:            rightArrowPressed();            break;                    case 40:            downArrowPressed();            break;    	}}	// end "HandleKeyDownEvent"function onIntroJSExit() {	inIntroJSTourFlag = false;	inIntroJSTourJustCompletedFlag = true;	//console.log("In intrJS exit routine");}		//	This function handles changing to the selected pdf file.function ItemClicked(iIndex){  	//console.log ("ItemClicked: iIndex & LastSlideShown: " + iIndex + " " + LastSlideShown + " " + gSwitchedFromNarrowFlag);	if (iIndex == LastSlideShown && !gSwitchedFromNarrowFlag && !gNarrowWidthMode)		return;		SetMemorialFileVariables(iIndex);		const pdfElement = document.getElementById("pdfFile");		if (gNarrowWidthMode)		{				// Need to display pdf directly on mobile devices in narrow screen mode				// First close any window already open.						//console.log ("ItemClicked: ImageName: " + ImageName);						if (WindowProxyValue != null)			{			WindowProxyValue.close ();			WindowProxyValue = null;			//console.log ("ItemClicked: in close WindowProxyValue");						}						WindowProxyValue = open (ImageName, "_self", "popup=yes");		//console.log ("ItemClicked: WindowProxyValue: " + WindowProxyValue);			}	// end "if (gNarrowWidthMode)"			else	// !gNarrowWidthMode		{				// Display in pdfContainer to the right of the list.						pdfElement.src = ImageName;				//console.log ("ItemClicked: element.src: " + objElement.src);				}	// end "else !gNarrowWidthMode"			// Handle making the title in the list bolt for the title being shown.	if (LastSlideShown >= 0)		{		elementID = "d" + LastSlideShown;		document.getElementById(elementID).style.fontWeight = "normal";				}	// end "LastSlideShown >= 0"		elementID = "d" + iIndex;	document.getElementById(elementID).style.fontWeight = "bold";		var titleElement = document.getElementById(elementID);	var bounding = titleElement.getBoundingClientRect();   if (!(bounding.top >= 0 &&    		bounding.left >= 0 &&    		bounding.right <= (window.innerWidth || document.titleElement.clientWidth) &&    		bounding.bottom <= (window.innerHeight || document.titleElement.clientHeight)) ) 		titleElement.scrollIntoView(false);				if (Interval != 999)		{		StartTimer();				}		// end "if (Interval != 999)"			LastSlideShown = iIndex;	}	// end "ItemClicked"// This function handles the left arrow keyfunction leftArrowPressed() {ItemClicked (PreviousSlide);   }// This function loads the legend listfunction LoadList (){	var listElement = document.getElementById("listView");	if (ListLoadedCode == 0)		{		//console.log ("LoadList: listView: " + listElement);		//console.log ("LoadList: listElement.innerHTML: " + listElement.innerHTML);		listElement.innerHTML = '';		for (index=0; index<=LastSlide; index++)			{			//console.log ("index: " + index); 			if (slideVector[index].listBreak != '')				listElement.innerHTML = listElement.innerHTML + '<p>' + window.top.slideVector[index].listBreak + '</p>';				else	// slideVector[index].listBreak == ''				{				listElement.innerHTML = listElement.innerHTML + '<p id="d' + index + '"><a href="JavaScript:window.top.ItemClicked(' + index + ')">' + slideVector[index].listTitle + '</a></p>';				}			}	// end "for (index=0; index<window.top.LastSlide; index++)"					}	// end "if (ListLoadedCode == 0)"			ListLoadedCode = 1;			}	// end "LoadList"function MouseDown(gifNumber){	/*	console.log ("MouseDown: gifNumber: " + gifNumber);	console.log ("MouseDown: document.images.length: " + document.images.length);	console.log ("MouseDown: document.images[0].src: " + document.images[0].src);	console.log ("MouseDown: document.images[1].src: " + document.images[1].src);	console.log ("MouseDown: document.images[2].src: " + document.images[2].src);	console.log ("MouseDown: document.images[3].src: " + document.images[3].src);	console.log ("MouseDown: document.images[4].src: " + document.images[4].src);	console.log ("MouseDown: document.images[5].src: " + document.images[5].src);	*/	doDownGifFlag = 0;	switch (gifNumber)		{		case 2:			if (FirstSlide != CurrentSlide)				doDownGifFlag = 1;			break;					case 3:			if (PreviousSlide != CurrentSlide)				doDownGifFlag = 1;			break;					case 4:			if (NextSlide != CurrentSlide)				doDownGifFlag = 1;			break;					case 5:			if (LastSlide != CurrentSlide)				doDownGifFlag = 1;			break;				}		// end "switch (gifNumber)"		if (doDownGifFlag == 1)		document.images[gifNumber].src = ButtonDownGifs[gifNumber-2].src;			return true;	}		// end "MouseDown"function MouseOver(gifNumber){	//console.log ("MouseOver: gifNumber = " + gifNumber);	switch (gifNumber)		{		case 2:			if (FirstSlide == CurrentSlide)				window.status="This is the first picture; button will not activate."; 						else		// top.FirstSlide != top.CurrentSlide				window.status="Click on this button to go to the first picture."; 			break;					case 3:			if (PreviousSlide == CurrentSlide)				status="This is first picture; button will not activate."; 						else		// top.PreviousSlide != top.CurrentSlide				status="Click on this button to go to the previous picture."; 			break;					case 4:			if (NextSlide == CurrentSlide)				status="This is the last picture; button will not activate."; 						else		// top.NextSlide != top.CurrentSlide				status="Click on this button to go to the next picture.";			break;					case 5:			if (LastSlide == CurrentSlide)				status="This is the last picture; button will not activate."; 						else		// top.LastSlide != top.CurrentSlide				status="Click on this button to go to the last picture."; 			break;				}		// end "switch (gifNumber)"			return true;	}		// end "MouseOver"function PDFContainerTouched (){	//console.log ("PDFContainerTouched: WindowProxyValue: " + WindowProxyValue);	if (WindowProxyValue != null)		{		//console.log ("PDFContainerTouched: WindowProxyValue2: " + WindowProxyValue);		WindowProxyValue.close ();		//console.log ("PDFContainerTouched: WindowProxyValue3: " + WindowProxyValue);		WindowProxyValue = null;				}			if (WindowProxyValue == null)		WindowProxyValue = open (ImageName, "_self", "popup=yes");	/*			// Check if WindowSizeChanged needs to be called. This can happen when the mobile 			// device is in landscape mode, the pdf is displayed in a separate window then rotated			// to portrait mode and then the back arrow is tapped to go to the list.			// Not sure this code every gets called.				if (isMobileDevice && gNarrowWidthMode == 0 && window.innerWidth < gNarrowWidth)		{		//console.log ("before window changed");		WindowSizeChanged ();				}			//console.log (WindowProxyValue);	*/}	// end "PDFContainerTouched"function PDFLoadError(){       	console.log ("PDFLoadError: at start; LastSlideShown: " + LastSlideShown);}	// end "PDFLoadError"/* This function sets up the image sizes for portrait type  */function RestartSlideShow(){    	if (Interval != 999)		{		StartTimer();				}		// end "if (Interval != 999)"}		// end "RestartSlideShow"// This function handles the right arrow keyfunction rightArrowPressed() {	//console.log ("rightArrowPressed: start");	ItemClicked (NextSlide);}	// end "rightArrowPressed"	//	This function handles setting the global variables to be used to create the image frame.function SetMemorialFileVariables (iIndex){  	lSlideVector = slideVector[iIndex];	//console.log ("SetMemorialFileVariables: iIndex " + iIndex);	//console.log ("SetMemorialFileVariables: path " + slideVector[iIndex].path);	//console.log ("SetMemorialFileVariables: fileName " + slideVector[iIndex].fileName);		fileName = slideVector[iIndex].fileName;	Date_time = slideVector[iIndex].date_time;	pathName = slideVector[iIndex].path + fileName;	Caption = slideVector[iIndex].caption;		ListBreak = slideVector[iIndex].listBreak;	ListTitle = slideVector[iIndex].listTitle;		slideVector[iIndex].ImageName = pathName;	ImageName = slideVector[iIndex].ImageName;	//console.log ("SetMemorialFileVariables: ImageName " + ImageName);		CurrentSlide = iIndex;		if (iIndex < LastSlide)		//NextSlide = iIndex + 1;		NextSlide = slideVector[CurrentSlide].NextSlide;			else	// iIndex >= LastSlide		{		if (Interval == 999)			NextSlide = LastSlide;					else	// Interval != 999			NextSlide = FirstSlide;					}	// end "else iIndex >= LastSlide"			if (iIndex > FirstSlide)		//PreviousSlide = iIndex - 1;		PreviousSlide = slideVector[CurrentSlide].PreviousSlide;			else		PreviousSlide = FirstSlide;	}	// end "SetMemorialFileVariables"function SlideShow(flag){	firstTimeFlag = 0;	var showOption = document.getElementById("show");	var showSelection = showOption.selectedIndex;		if (flag == 1)		{				// The slide show drop down menu has changed.				// Set up the slide show with the requested interval.						value = showOption.options[showSelection].value;				if (value > 0)			{			if (Interval != 999)				StopTimer();						Interval = value;			firstTimeFlag = 1;			flag = 0;						}		// end "if (value > 0)"				}		// end "if (flag == 1)"		if (flag == 0)		{				// This is a call from the timer itself. It is already stopped.						TimerID = 0;		if (firstTimeFlag == 0)			{			ItemClicked (NextSlide);						}					else	// firstTimeFlag == 1			{			StartTimer();						}				}		// end "if (flag == 0)"			else 	// flag == 1		{		StopTimer();				Interval = 999;				}		// end "else flag == 1"}		// end "SlideShow"function StartTimer(){	StopTimer();			delay = Interval * 1000;	TimerID = window.setTimeout ("SlideShow(0);", delay);}		// end "StartTimer"function StopTimer(){	if (TimerID != 0)		{		window.clearTimeout(TimerID);		TimerID = 0;				}}		// end "StopTimer"/*window.requestIdleCallback =  window.requestIdleCallback ||  function (callBack) {    var start = Date.now();    return setTimeout(function () {      callBack({        didTimeout: false,        timeRemaining: function () {          return Math.max(0, 50 - (Date.now() - start));        }      });    }, 1);  }*/// This function handles the up arrow key; go to first slidefunction upArrowPressed() {	ItemClicked (FirstSlide);   }	// end "upArrowPressed"// Defining event listener function window size changefunction WindowSizeChanged(){		var controlSectionElement = document.getElementById("controlSectionID");	var controlTableElement = document.getElementById("controlTableID");	var mainSectionElement = document.getElementById("mainSectionID");	var listViewElement = document.getElementById("listView");	var pdfContainerElement = document.getElementById("pdfFileContainerID");	var containerElement = document.getElementById("container");	var pdfElement = document.getElementById("pdfFile");	var footerElement = document.getElementById("footerID");				// Need to allow space for gaps	availHeightForDocument = window.innerHeight - controlSectionElement.offsetHeight - footerElement.offsetHeight - 10;	availHeightForList =  availHeightForDocument + footerElement.offsetHeight;		if (isMobileDevice)		{				// Determine if current width is less than value for treating as a narrow device.					var pdfMessageElement = document.getElementById("pdfMessage");		var pdfMessageElement2 = document.getElementById("pdfMessage2ID");				if (window.innerWidth < gNarrowWidth)			{			gNarrowWidthMode = 1;			gSwitchedFromNarrowFlag = 0;						}	// end "if (window.innerWidth < gNarrowWidth)"					else	// window.innerWidth >= gNarrowWidth			{			if (gNarrowWidthMode == 1)						// Setting this flag will allow selected file to be drawn in window				gSwitchedFromNarrowFlag = 1;							gNarrowWidthMode = 0;						}	// end "else window.innerWidth >= gNarrowWidth"					if (gNarrowWidthMode)			{					// If in narrow width mode, be sure time is stopped.								var showOption = document.getElementById("show");			showOption.selectedIndex = 0;			SlideShow(1);						document.getElementById("listView").style.gridColumn = "1 / span 2";			$('#pdfFileContainerID').addClass ("hide");			$('#pdfFile').addClass ("hide");  								// Allow space for scroll bar and padding.			width = window.innerWidth - 10;			$('#listView').width (width + "px");			$('#listView').css({"padding-right": "2px"});					//document.getElementById("listView").style.width = width + "px";				 			$('#pdfFileContainerID').width ("0px");	 			//document.getElementById("pdfFileContainerID").style.width = "0px";			$('#pdfFileContainerID').css({"padding": "0px"});						//containerElement.style.width = "0px";			//containerElement.style.height = (availHeightForDocument) + "px";			//$('#container').width ("0px");			//$('#container').height (availHeightForDocument) + "px");						$('#pdfMessage2ID').removeClass('hide'); 			$('#footerID').addClass('hide');			$('#footerID').height ("0px");						$('#listButtonBoxID').addClass('hide');			$('#navigationButtonsBoxID').addClass('hide');			$('#show').addClass('hide');			$('#pdfMessage').addClass('hide');						$('#listView').attr("data-intro", "Select name in the list to show memorial information in a separate window. Use browser left arrow to go back to this list.");						}	// end "if (gNarrowWidthMode)"					else	// !gNarrowWidthMode			{					// Make sure display elements are set for list to left of pdf file.								//console.log ("in !gNarrowwidthMode: " + window.innerWidth);								document.getElementById("listView").style.gridColumn = "1";			document.getElementById("listView").style.width = gListWidth + "px";							$('#pdfFileContainerID').removeClass ("hide"); 			$('#pdfFile').removeClass ("hide");  						width =  window.innerWidth - gListWidth;			$('#pdfFileContainerID').width (width + "px");	 			$('#pdfFileContainerID').css({"padding": "1px"});							//$('#container').width (width + "px");							$('#pdfMessage2ID').addClass('hide'); 				$('#pdfMessage').removeClass('hide');						if (window.innerHeight > gShortHeight)				{				document.getElementById("mainSectionID").style.gridRow = "2";				$('#footerID').removeClass('hide');				//$('#footerID').height ("28px");								}	// end "if (window.innerHeight > gNarrowWidth)"							else	// window.innerHeight <= gShortHeight				{				document.getElementById("mainSectionID").style.gridRow = "2 / span 2";				$('#footerID').addClass('hide');				//$('#footerID').height ("0px");				availHeightForDocument = window.innerHeight - controlSectionElement.offsetHeight - 12;				availHeightForList =  availHeightForDocument;								}	// end "else window.innerHeight <= gShortHeight"						$('#listButtonBoxID').removeClass('hide');			$('#navigationButtonsBoxID').removeClass('hide');			$('#show').removeClass('hide');					$('#pdfFileContainerID').height (availHeightForDocument + "px");				containerHeight = availHeightForDocument - pdfMessageElement.offsetHeight - containerElement.style.paddingTop - 5;			$('#container').height (containerHeight + "px");							$('#listView').attr("data-intro", "Select name in the list to show memorial information for that person to the right.");						}	// end "else !gNarrowWidthMode"					// Allow space for message line		var pdfMessageElement = document.getElementById("pdfMessage");		//availHeightForDocument = availHeightForDocument - pdfMessageElement.offsetHeight;				mainSectionElement.style.height = availHeightForDocument + "px";				listViewElement.style.height = availHeightForList + "px";				availWidthForPage =  window.innerWidth;		document.getElementById("wrapperID").style.width = availWidthForPage;				}	// end "if (isMobileDevice)"		if (!isMobileDevice)		{		if (window.innerWidth > gWideScreenThreshhold)			{			gListWidth = 230;			//width = gListWidth + 'px';			//document.getElementById("wrapperID").style.gridTemplateColumns = "[col] " + width + " [col] 1fr";			//document.getElementById("mainSectionID").style.gridTemplateColumns = "minmax(0, " + width + ") auto";			//$('#listView').width (gListWidth + "px");						}	// end "if (window.innerWidth > gWideScreenThreshhold)"					else	// window.innerWidth <= gWideScreenThreshhold			{			gListWidth = 150;			//width = gListWidth + 'px';			//document.getElementById("wrapperID").style.gridTemplateColumns = "[col] " + width + " [col] 1fr";			//document.getElementById("mainSectionID").style.gridTemplateColumns = "minmax(0, " + width + ") auto";			//$('#listView').width (gListWidth + "px");						}	// end "else window.innerWidth <= gWideScreenThreshhold"					width = gListWidth + 'px';		document.getElementById("wrapperID").style.gridTemplateColumns = "[col] " + width + " [col] 1fr";		document.getElementById("mainSectionID").style.gridTemplateColumns = "minmax(0, " + width + ") auto";		$('#listView').width (gListWidth + "px");					if (window.innerHeight > gShortHeight)			{			document.getElementById("mainSectionID").style.gridRow = "2";			$('#footerID').removeClass('hide');			//$('#footerID').height ("28px");						}	// end "if (window.innerHeight > gNarrowWidth)"					else	// window.innerHeight <= gShortHeight			{			document.getElementById("mainSectionID").style.gridRow = "2 / span 2";			$('#footerID').addClass('hide');			//$('#footerID').height ("0px");			availHeightForDocument = window.innerHeight - controlSectionElement.offsetHeight - 10;			availHeightForList =  availHeightForDocument;						}	// end "else window.innerHeight <= gShortHeight"					//containerElement.style.width = availWidthForDocument + "px";				$('#mainSectionID').height (availHeightForDocument + "px");			$('#container').height (availHeightForDocument-8 + "px");			 		listViewElement.style.height = availHeightForList + "px";				}	// end "if (!isMobileDevice)"		//console.log ("pdfElement.style.width: " + pdfElement.style.width);	//console.log ("pdfElement.style.height: " + pdfElement.style.height);		//const fileNameElement = document.getElementById("FileName");		//if (isMobileDevice)	//	fileNameElement.innerHTML = "inH: " + window.innerHeight + " scH: " + screen.height + "; Cn: " + controlTableElement.offsetHeight + "; cH: " + containerElement.offsetHeight +  "; pCH: " + pdfContainerElement.offsetHeight + "; fH: " + footerElement.offsetHeight + "; aH: " + availHeightForDocument;	//else	//	fileNameElement.innerHTML = "inH: " + window.innerHeight + "; Cn: " + controlSectionElement.offsetHeight + "; pCH: " + pdfContainerElement.offsetHeight + "; pH: " + pdfElement.offsetHeight + "; aH: " + availHeightForDocument + "; inW: " + window.innerWidth;		if (gSwitchedFromNarrowFlag)		ItemClicked (LastSlideShown);				}	// end "WindowSizeChanged"//ItemClicked (FirstSlide);//<object id="pdfFile" data="Memorial_Files/Adams_Lisa_page_for_book.pdf" onload="FinishPDFLoad()" onerror="PDFLoadError()">object can't be rendered</object>//<iframe id="pdfFile" src="Memorial_Files/Adams_Lisa_page_for_book.pdf" onload="FinishPDFLoad()" onerror="PDFLoadError()">object can't be rendered</iframe>//	<!-->//	<meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate">//	<meta http-equiv="Pragma" content="no-cache">//	<meta http-equiv="Expires" content="0">-->     