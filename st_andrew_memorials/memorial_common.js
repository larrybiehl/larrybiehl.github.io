   // The code to detect the browser is from:
	 // http://developer.netscape.com/docs/examples/javascript/browser_type.html

	 // convert all characters to lowercase to simplify testing 
var agt=navigator.userAgent.toLowerCase(); 

    // *** BROWSER VERSION *** 
    // Note: On IE5, these return 4, so use is_ie5up to detect IE5. 

    // Note: Opera and WebTV spoof Navigator.  We do strict client detection. 
    // If you want to allow spoofing, take out the tests for opera and webtv. 
var is_nav  = ((agt.indexOf('mozilla')!=-1) && (agt.indexOf('spoofer')==-1) 
                && (agt.indexOf('compatible') == -1) && (agt.indexOf('opera')==-1) 
                && (agt.indexOf('webtv')==-1)); 

var is_ie   = (agt.indexOf("msie") != -1);

			 // *** PLATFORM ***
var is_win   = ( (agt.indexOf("win")!=-1) || (agt.indexOf("16bit")!=-1) );
var is_mac    = (agt.indexOf("mac")!=-1);

var ListCode = 1;

var NextSlide
var PreviousSlide

var Interval = 999;

var FirstSlide = 0;
var LastSlide = -1;
var CurrentSlide = FirstSlide;

var LastSlideShown = -1;
var LastSizeCode = -1;

var ID
var Date_time
var ImageName
var ImageHeight
var ImageWidth
var Caption

var ImageNumber = -1;

var ButtonGifs = new Array(4);

ButtonGifs[0]=new Image();
ButtonGifs[0].src = "first.gif";

ButtonGifs[1]=new Image();
ButtonGifs[1].src = "prev.gif";

ButtonGifs[2]=new Image();
ButtonGifs[2].src = "next.gif";

ButtonGifs[3]=new Image();
ButtonGifs[3].src = "last.gif";

var ButtonDownGifs = new Array(4);

ButtonDownGifs[0]=new Image();
ButtonDownGifs[0].src = "first_down.gif";

ButtonDownGifs[1]=new Image();
ButtonDownGifs[1].src = "prev_down.gif";

ButtonDownGifs[2]=new Image();
ButtonDownGifs[2].src = "next_down.gif";

ButtonDownGifs[3]=new Image();
ButtonDownGifs[3].src = "last_down.gif";

function Picture3 (slideIndex, id, path)
	{
	imageNumber = slideIndex + 1;
	this.ID = id;
	this.path = path;
	this.date_time = "";

	this.caption = "";
	this.listBreak = "";
	this.listTitle = "Image " + imageNumber;
	
	//var imagePathName = path + id + '.jpg';
	
	//console.log (this);
	
	//GetImageInformation (this, imagePathName);
	
}	// end "Picture3"
	
	

//	This function handles changing to the selected image.

function ItemClicked(iIndex)
{  
	if (iIndex == LastSlideShown)
		return;
	
	SetImageVariables(iIndex);
	
	frames["LowerFrame"].frames["SlideImage"].location.reload();
	
}	// end "ItemClicked"

	

//	This function handles setting the global variables to be used to create the image frame.

function SetImageVariables (iIndex)
{  
	slideVector = window.top.slideVector;
	
	ID = slideVector[iIndex].ID;
	Date_time = slideVector[iIndex].date_time;
	pathName = slideVector[iIndex].path + ID;
	Caption = slideVector[iIndex].caption;
	
	ListBreak = slideVector[iIndex].listBreak;
	ListTitle = slideVector[iIndex].listTitle;
	
	SetSizeVariables (iIndex, pathName);
	
	CurrentSlide = iIndex;
	LastSlideShown = iIndex;
	
	if (iIndex < LastSlide)
		window.top.NextSlide = iIndex + 1;
		
	else	// iIndex >= LastSlide
		{
		if (Interval == 999)
			NextSlide = LastSlide;
			
		else	// Interval != 999
			NextSlide = FirstSlide;
			
		}	// end "else iIndex >= LastSlide"
		
	if (iIndex > FirstSlide)
		PreviousSlide = iIndex - 1;
		
	else
		PreviousSlide = FirstSlide;
	
}	// end "SetImageVariables"



// This function sets the variables depending on the size of the image to be displayed
// 	for the specified image.

function SetSizeVariables (iIndex, pathName)
{   
			window.top.ImageName = pathName + '.pdf';
			
					// Allow for scroll bar to right of image (16), window width (4), border around
					// image (4) and space around edge (6).
					
			//console.log ("window.innerWidth: " + window.innerWidth);
			//console.log ("window.innerHeight: " + window.innerHeight);

			if (is_nav)
				{
				availWidth = window.innerWidth - 25;
				//availWidth = window.innerWidth;
				if (ListCode != 0)
					availWidth -= 135;

				availHeight = window.innerHeight - 60;

				}	// end "if (is_nav)"

			else	// !is_nav
				{					
				availWidth = screen.availWidth - 50;
				//availWidth = screen.availWidth;
				if (ListCode != 0)
					availWidth = availWidth - 135;
	
				availHeight = screen.availHeight - 100;

				if (is_win)
					{
					availHeight -= 90;

					}

				}	// end "else !is_nav"

			window.top.ImageWidth = availWidth;
			window.top.ImageHeight = availHeight;
			//console.log ("case5 ImageWidth: " + window.top.ImageWidth);
			//console.log ("case5ImageHeight: " + window.top.ImageHeight);
				
}	// End "SetSizeVariables"



// This function handles a change in the size of the web browser window.
function HandleResizeWindow()
{
	SetImageVariables(CurrentSlide);
	frames["LowerFrame"].frames["SlideImage"].location.reload();

	window.TopFrame.Ctrlbtn.RestartSlideShow();

}	// end "HandleResizeWindow"


/*
// This function sets the size of the image to be displayed. 
function SetSize(iSize)
{     
	Sizecode = iSize;
			
	ItemClicked(CurrentSlide);
}
*/


// This function sets up the image sizes for portrait type
function FinishLoad()
{       
	window.TopFrame.ListButton.FinishLoad();
	window.TopFrame.Ctrlbtn.FinishLoad();

}


// This function handles the left arrow key
function leftArrowPressed() 
{
parent.parent.ItemClicked(parent.parent.PreviousSlide);
   
}


// This function handles the up arrow key; go to first slide
function upArrowPressed() 
{
parent.parent.ItemClicked(parent.parent.FirstSlide);
   
}


// This function handles the right arrow key
function rightArrowPressed() 
{
parent.parent.ItemClicked(parent.parent.NextSlide);
}


// This function handles the down arrow key; go to last slide
function downArrowPressed() 
{
parent.parent.ItemClicked(parent.parent.LastSlide);
   
}


// This function captures the left and right arrow key events
function HandleKeyDownEvent(evt) 
{
   evt = evt || window.event;
   switch (evt.keyCode) 
    	{
        case 37:
            leftArrowPressed();
            break;
            
        case 38:
            upArrowPressed();
            break;
            
        case 39:
            rightArrowPressed();
            break;
            
        case 40:
            downArrowPressed();
            break;
    	}
};


// This function captures the left and right arrow key events
document.onkeydown = function(evt) 
{
/*console.log('onkeydown1');*/
HandleKeyDownEvent(evt);
};



window.requestIdleCallback =
  window.requestIdleCallback ||
  function (callBack) {
    var start = Date.now();
    return setTimeout(function () {
      callBack({
        didTimeout: false,
        timeRemaining: function () {
          return Math.max(0, 50 - (Date.now() - start));
        }
      });
    }, 1);
  }
  
  
function HandleRefresh ()
{
	//console.log ("HandleRefresh is called");
	
	window.top.frames["LowerFrame"].frames["SlideImage"].location.reload();
	window.top.frames["LowerFrame"].frames["Legend"].location.reload();

}	// end "HandleRefresh"
  
   
