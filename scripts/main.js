/*************************************************************************
 * File: main.js
 * Definitions of variables to maintain app state and provide
 * convenient access to frequently used DOM elements.
 *************************************************************************/
/************************************/
/* USER DATA                        */
/************************************/
//Global variable containing data object of user currently logged in
let GlobalUserData = {}; //set upon login

/************************************/
/* MENU VARIABLES                   */
/************************************/
const GlobalMenuBtn =  document.getElementById("menuBtn"); 
const GlobalMenuItems = document.querySelectorAll("li[role='menuitem']");

//Note: Per Josh Wulf's blog post, we implement all immutable global variables using
//immediately invoked function expressions
const GlobalFocusedMenuItem = (() => {
    let _focusedMenuItem = 0
    const Store = {
        get: () => _focusedMenuItem,
        set: val => (_focusedMenuItem = val)
    }
    return Object.freeze(Store)
})()

/************************************/
/* MODE TAB VARIABLES               */
/************************************/
//Array of mode names
const GlobalModeNumbersToModes = new Map([
  [0, "ACTIVITY_FEED"],
  [1, "ROUNDS"],
  [2, "COURSES"],
  [3, "BUDDIES"]
]);
const GlobalModeNumbersToRoutes = new Map([
  [0, "/activityfeed"],
  [1, "/rounds"],
  [2, "/courses"],
  [3, "/buddies"]
]);
const GlobalModeDialogNumbersToRoutes = new Map([
  [0, "/activityfeed/newpost"],
  [1, "/rounds/newround"],
  [2, "/courses/addcourse"],
  [3, "/buddies/findbuddy"]
]);
//The current mode (0, 1, 2, or 3)
const GlobalCurrentMode = (() => {
    let _currentMode= 0
    const Store = {
        get: () => _currentMode,
        set: val => (_currentMode = val)
    }
    return Object.freeze(Store)
})()

const GlobalFocusedMode = (() => {
    let _focusedMode= 0
    const Store = {
        get: () => _focusedMode,
        set: val => (_focusedMode = val)
    }
    return Object.freeze(Store)
})()

//Array of mode tab button elements:
const GlobalModeTabButtons = 
  document.querySelectorAll("button[role='tab']");
//Array of mode tab panel elements:
const GlobalModeTabPanels = 
  document.querySelectorAll("div[role='tabpanel']");

/*****************************************************/
/* FLOATING ACTION BUTTON AND MODAL DIALOG VARIABLES */
/*****************************************************/
//Array of mode action buttons
const GlobalModeActionButtons = 
  document.querySelectorAll("button.float-btn");
//array of mode action dialog boxes
const GlobalModeActionDialogs =
  document.querySelectorAll("div.action-dialog");
//array of "OK" buttons within the dialog boxes
const GlobalDialogActionButtons =
  document.querySelectorAll("button.action-button");
//array of "Cancel" buttons within the dialog boxes
const GlobalDialogCancelButtons =
  document.querySelectorAll("button.cancel-button");

/*****************************************************/
/* OTHER UI COMPONENT VARIABLES */
/*****************************************************/
const GlobalSearchBtn = document.getElementById("searchBtn");
const GlobalProfileBtn = document.getElementById("profileBtn");
const GlobalSkipLink = document.getElementById("sLink");
const GlobalModeTabsContainer = document.getElementById("modeTabs");

/*****************************************************/
/* LOGIN PAGE AND FORM                               */
/*****************************************************/
const GlobalLoginPage = document.getElementById("loginPage");
const GlobalLoginForm = document.getElementById("loginForm");
const GlobalErrorBox = document.getElementById("errorBox");
const GlobalEmailField = document.getElementById("email");
const GlobalPasswordField = document.getElementById("password");
const GlobalEmailError = document.getElementById("emailError");
const GlobalPasswordError = document.getElementById("passwordError");
const GlobalAuthError = document.getElementById("authError");
const GlobalCreateAccountBtn = document.getElementById("createAccountBtn");
const GlobalLoginBtnIcon = document.getElementById("loginBtnIcon");
const GlobalLoginBtn = document.getElementById("loginBtn");
const GlobalResetPasswordBtn = document.getElementById("resetPasswordBtn");
const GlobalAccountCreated = document.getElementById("accountCreated");
const GlobalAccountCreatedClose = document.getElementById("accountCreatedClose");
const GlobalAccountCreatedEmail = document.getElementById("accountCreatedEmail");

/*****************************************************/
/* CREATE ACCOUNT DIALOG FORM                        */
/*****************************************************/
const GlobalCreateAccountDialog = document.getElementById("createAccountDialog");
const GlobalSubmitCreateAccountBtn = document.getElementById("submitCreateAccountBtn");
const GlobalCancelCreateAccountBtn = document.getElementById("cancelCreateAccountBtn");
const GlobalAcctErrBox = document.getElementById("acctErrorBox");
const GlobalAcctEmailField = document.getElementById("acctEmail");
const GlobalAcctPasswordField = document.getElementById("acctPassword");
const GlobalAcctPasswordRepeatField = document.getElementById("acctPasswordRepeat");
const GlobalAcctDisplayNameField = document.getElementById("acctDisplayName");
const GlobalAcctProfilePicField = document.getElementById("acctProfilePic");
const GlobalAcctProfilePicImage = document.getElementById("acctProfilePicImage");
const GlobalAcctSecurityQuestionField = document.getElementById("acctSecurityQuestion");
const GlobalAcctSecurityAnswerField = document.getElementById("acctSecurityAnswer");
const GlobalAcctEmailErr = document.getElementById("acctEmailError");
const GlobalAcctPasswordErr = document.getElementById("acctPasswordError");
const GlobalAcctPasswordRepeatErr = document.getElementById("acctPasswordRepeatError");
const GlobalAcctDisplayNameErr = document.getElementById("acctDisplayNameError");
const GlobalAcctSecurityQuestionErr = document.getElementById("acctSecurityQuestionError");
const GlobalAcctSecurityAnswerErr = document.getElementById("acctSecurityAnswerError");
const GlobalFirstFocusableCreateAccountItem = (() => {
  let _firstFocusedCreateAccountItem = GlobalAcctEmailField
  const Store = {
      get: () => _firstFocusedCreateAccountItem,
      set: val => (_firstFocusedCreateAccountItem = val)
  }
  return Object.freeze(Store)
})()
const GlobalDefaultProfilePic = "images/DefaultProfilePic.jpg";

/*****************************************************/
/* LOG ROUND DIALOG FORM                             */
/*****************************************************/
const GlobalRoundsModeDialog = document.getElementById("roundsModeDialog");
const GlobalRoundFormHeader = document.getElementById("roundFormHeader");
const GlobalRoundFormSubmitBtn = document.getElementById("roundFormSubmitBtn");
const GlobalRoundFormSubmitBtnLabel = document.getElementById("roundFormSubmitBtnLabel");
const GlobalRoundFormSubmitBtnIcon = document.getElementById("roundFormSubmitBtnIcon");
const GlobalLogRoundForm = document.getElementById("logRoundForm");
const GlobalRoundErrBox = document.getElementById("roundErrorBox");
const GlobalRoundDateErr = document.getElementById("roundDateError");
const GlobalRoundCourseErr = document.getElementById("roundCourseError");
const GlobalRoundStrokesErr = document.getElementById("roundStrokesError");
const GlobalRoundMinutesErr = document.getElementById("roundMinutesError");
const GlobalRoundSecondsErr = document.getElementById("roundSecondsError");
const GlobalRoundNotesErr = document.getElementById("roundNotesError");
const GlobalRoundDate = document.getElementById("roundDate");
const GlobalRoundCourse = document.getElementById("roundCourse");
const GlobalRoundType = document.getElementById("roundType");
const GlobalRoundHoles = document.getElementById("roundHoles");
const GlobalRoundStrokes = document.getElementById("roundStrokes");
const GlobalRoundMinutes = document.getElementById("roundMinutes");
const GlobalRoundSeconds = document.getElementById("roundSeconds");
const GlobalRoundSGS = document.getElementById("roundSGS");
const GlobalRoundNotes = document.getElementById("roundNotes");
const GlobalFirstFocusableLogRoundItem = (() => {
  let _firstFocusedLogRoundItem = GlobalRoundDate
  const Store = {
      get: () => _firstFocusedLogRoundItem,
      set: val => (_firstFocusedLogRoundItem = val)
  }
  return Object.freeze(Store)
})()

GlobalRoundDate.valueAsNumber = 
Date.now()-(new Date()).getTimezoneOffset()*60000;

/*****************************************************/
/* LOG ROUND DIALOG FORM TOAST                       */
/*****************************************************/
const GlobalRoundUpdatedClose = document.getElementById("roundUpdatedClose");
const GlobalRoundUpdated = document.getElementById("roundUpdated");
const GlobalRoundUpdatedMsg = document.getElementById("roundUpdatedMsg");

/*****************************************************/
/* ROUNDS MODE TABLE                                 */
/*****************************************************/
const GlobalRoundsTable = document.getElementById("roundsTable");
const GlobalRoundsTableCaption = document.getElementById("roundsTableCaption");
const GlobalRoundsTableSortableColHeaders = document.getElementsByClassName('sortable-header');
const GlobalRoundsTableSortBtns = document.getElementsByClassName('table-sort-btn');
const GlobalRoundsTableHeaderColLabels = ['date','course','score'];
const GlobalRoundsTableSortIcons = document.getElementsByClassName('sort-icon');

const GlobalDialogPrepFuncs = [()=>{}, ()=>prepLogRoundForm(), ()=>{}, ()=>{}];
const GlobalDialogTitles = ["SpeedScore: Post to Feed","SpeedScore: Log Round",
  "SpeedScore: Add Course","SpeedScore: Find Buddies"];
