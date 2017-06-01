function $_global_init() {
    String.prototype.trim = function() {
        return (this.replace(/^\s\s*/, '')).replace(/\s\s*$/, '');
    };
    currentCtx = null;
    itemTable = null;
    if ('undefined' == typeof g_supportFiles)
        g_supportFiles = new Array(0);
    if (!Boolean(ULS))
        ULS = new ULSObject;
    ULSObject.prototype = {
        bucket: undefined,
        request: undefined,
        Correlation: undefined,
        OnReceiveBucketParameters: undefined,
        WebServiceNS: undefined,
        file: undefined,
        line: undefined,
        callStack: undefined,
        clientInfo: undefined,
        enable: undefined
    };
    if (typeof window.onerror != 'undefined' && window.onerror != ULSOnError) {
        ULS.OriginalOnError = window.onerror;
        window.onerror = ULSOnError;
    }
    if (!Boolean(ULSCat))
        ULSCat = {};
    ULSCat.msoulscat_WSS_General = 'WSS';
    ULSCat.msoulscat_WSS_DeltaManager = 'DeltaManager';
    ULSCat.msoulscat_WSS_Inplview = 'Inplview';
    ULSCat.msoulscat_WSS_JsGrid = 'JsGrid';
    ULSCat.msoulscat_WSS_MediaPlayer = 'MediaPlayer';
    ULSCat.msoulscat_WSS_SPGantt = 'SPGantt';
    ULS.AssertJS = function(category, condition, message) {
        if (condition == false) {
            var formattedMessage = "[Category: " + category + "] [Assert: " + message + "]";

            ULSSendExceptionImpl(formattedMessage, window.location.href, 0, ULS.AssertJS.caller);
        }
    };
    ULS.SendErrorMessageJS = function(category, message) {
        var formattedMessage = "[Category: " + category + "] [Error: " + message + "]";

        ULSSendExceptionImpl(formattedMessage, window.location.href, 0, ULS.SendErrorMessageJS.caller);
    };
    ULS.SendExceptionJS = function(category, exception) {
        var formattedMessage;

        if (exception != null) {
            var exmessage = exception.message;
            var exname = exception.name;

            if (typeof exmessage != "undefined" && typeof exname != "undefined") {
                formattedMessage = "[Category: " + category + "] [Exception Name: " + exname + ", Exception Message: " + exmessage + "]";
            }
            else {
                formattedMessage = "[Category: " + category + "] [Exception: " + exception.toString() + "]";
            }
        }
        else {
            formattedMessage = "[Category: " + category + "] [Exception: Null Exception]";
        }
        ULSSendExceptionImpl(formattedMessage, window.location.href, 0, ULS.SendExceptionJS.caller);
    };
    Browseris.prototype = {
        firefox: undefined,
        firefox36up: undefined,
        firefox3up: undefined,
        firefox4up: undefined,
        ie: undefined,
        ie55up: undefined,
        ie5up: undefined,
        ie7down: undefined,
        ie8down: undefined,
        ie8standard: undefined,
        ie8standardUp: undefined,
        ie9standardUp: undefined,
        ie10standardUp: undefined,
        ie11: undefined,
        ipad: undefined,
        windowsphone7: undefined,
        chrome: undefined,
        chrome7up: undefined,
        chrome8up: undefined,
        chrome9up: undefined,
        msEdge: undefined,
        iever: undefined,
        mac: undefined,
        major: undefined,
        msTouch: undefined,
        isTouch: undefined,
        nav: undefined,
        nav6: undefined,
        nav6up: undefined,
        nav7up: undefined,
        osver: undefined,
        safari: undefined,
        safari125up: undefined,
        safari3up: undefined,
        safariMobile: undefined,
        verIEFull: undefined,
        w3c: undefined,
        webKit: undefined,
        win: undefined,
        win8AppHost: undefined,
        win32: undefined,
        win64bit: undefined,
        winnt: undefined,
        armProcessor: undefined
    };
    browseris = new Browseris();
    bis = browseris;
    if (typeof Sys != "undefined" && Boolean(Sys) && typeof Sys.Application != "undefined" && Boolean(Sys.Application) && typeof Sys.Application.notifyScriptLoaded == "function") {
        Sys.Application.notifyScriptLoaded();
    }
    if (typeof NotifyScriptLoadedAndExecuteWaitingJobs == "function") {
        NotifyScriptLoadedAndExecuteWaitingJobs("owsbrows.js");
    }
    g_cde = {};
    ;
    UTF8_1ST_OF_2 = 0xc0;
    UTF8_1ST_OF_3 = 0xe0;
    UTF8_1ST_OF_4 = 0xf0;
    UTF8_TRAIL = 0x80;
    HIGH_SURROGATE_BITS = 0xD800;
    LOW_SURROGATE_BITS = 0xDC00;
    SURROGATE_6_BIT = 0xFC00;
    SURROGATE_ID_BITS = 0xF800;
    SURROGATE_OFFSET = 0x10000;
    if (typeof String.prototype.endsWith == "undefined") {
        String.prototype.endsWith = function(suffix) {
            return this.substr(this.length - suffix.length) === suffix;
        };
    }
    if (typeof String.prototype.startsWith == "undefined") {
        String.prototype.startsWith = function(prefix) {
            return this.substr(0, prefix.length) === prefix;
        };
    }
    ;
    XUIHtml = {};
    XUIHtml.SetOpacity = function(domNode, newVal) {
        if (typeof domNode.style == "undefined")
            return;
        if (document.body.style.opacity != null) {
            if (newVal == 1)
                XUIHtml.RemoveCSSProperty(domNode, "opacity");
            else
                domNode.style.opacity = newVal;
        }
        else {
            if (newVal == 1)
                XUIHtml.RemoveCSSProperty(domNode, "filter");
            else
                domNode.style.filter = 'alpha(opacity=' + String(newVal * 100) + ')';
        }
    };
    XUIHtml.RemoveCSSProperty = function(domNode, propName) {
        if (typeof domNode.style.removeProperty != "undefined")
            domNode.style.removeProperty(propName);
        else
            domNode.style.removeAttribute(propName);
    };
    XUIHtml.GetOpacity = function(domNode) {
        if (typeof domNode.style == "undefined")
            return -1;
        if (document.body.style.opacity != null) {
            var o = domNode.style.opacity;

            return o != null && o != '' ? parseFloat(o) : 1;
        }
        else {
            var f = domNode.style.filter;

            return f != null && f != '' ? parseInt((f.replace('alpha(opacity=', '')).replace(')', '')) / 100 : 1;
        }
    };
    ;
    LegalUrlChars = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, true, false, false, true, false, false, true, true, true, false, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, false, true, false, true, false, false, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, false, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
    if (typeof Sys != "undefined" && Boolean(Sys) && Boolean(Sys.Application)) {
        Sys.Application.notifyScriptLoaded();
    }
    if (typeof NotifyScriptLoadedAndExecuteWaitingJobs == "function") {
        NotifyScriptLoadedAndExecuteWaitingJobs("commonvalidation.js");
    }
    recycleBinEnabled = 0;
    cascadeDeleteWarningMessage = "";
    bIsFileDialogView = false;
    g_ViewIdToViewCounterMap = [];
    g_ctxDict = [];
    bIsFileDialogView = false;
    g_ViewIdToViewCounterMap = [];
    g_ctxDict = [];
    g_rgdwchMinEncoded = [0x00000000, 0x00000080, 0x00000800, 0x00010000, 0x00200000, 0x04000000, 0x80000000];
    g_updateFormDigestPageLoaded = new Date();
    g_objProjectTaskLaunch = null;
    g_ssImporterObj = null;
    g_fSSImporter = false;
    BasePermissions.prototype = {
        ManageLists: undefined,
        OpenItems: undefined
    };
    ContextInfo.prototype = {
        AllowGridMode: undefined,
        BasePermissions: undefined,
        BaseViewID: undefined,
        CascadeDeleteWarningMessage: undefined,
        ContentTypesEnabled: undefined,
        CurrentSelectedItems: undefined,
        CurrentUserId: undefined,
        EnableMinorVersions: undefined,
        ExternalDataList: undefined,
        HasRelatedCascadeLists: undefined,
        HttpPath: undefined,
        HttpRoot: undefined,
        LastSelectableRowIdx: undefined,
        LastSelectedItemIID: undefined,
        LastRowIndexSelected: undefined,
        RowFocusTimerID: undefined,
        ListData: undefined,
        ListSchema: undefined,
        ModerationStatus: undefined,
        PortalUrl: undefined,
        RecycleBinEnabled: undefined,
        SelectAllCbx: undefined,
        SendToLocationName: undefined,
        SendToLocationUrl: undefined,
        StateInitDone: undefined,
        TableCbxFocusHandler: undefined,
        TableMouseoverHandler: undefined,
        TotalListItems: undefined,
        WorkflowsAssociated: undefined,
        clvp: undefined,
        ctxId: undefined,
        ctxType: undefined,
        dictSel: undefined,
        displayFormUrl: undefined,
        editFormUrl: undefined,
        imagesPath: undefined,
        inGridMode: undefined,
        inGridFullRender: undefined,
        isForceCheckout: undefined,
        isModerated: undefined,
        isPortalTemplate: undefined,
        isVersions: undefined,
        isWebEditorPreview: undefined,
        leavingGridMode: false,
        loadingAsyncData: false,
        listBaseType: undefined,
        listName: undefined,
        listTemplate: undefined,
        listUrlDir: undefined,
        newFormUrl: undefined,
        onRefreshFailed: undefined,
        overrideDeleteConfirmation: undefined,
        overrideFilterQstring: undefined,
        recursiveView: undefined,
        rootFolderForDisplay: undefined,
        serverUrl: undefined,
        verEnabled: undefined,
        view: undefined,
        queryString: undefined,
        IsClientRendering: undefined,
        wpq: undefined,
        rootFolder: undefined,
        IsAppWeb: undefined,
        NewWOPIDocumentEnabled: undefined,
        NewWOPIDocumentUrl: undefined,
        AllowCreateFolder: undefined,
        CanShareLinkForNewDocument: undefined,
        noGroupCollapse: undefined
    };
    CTXTYPE_EDITMENU = 0;
    CTXTYPE_VIEWSELECTOR = 1;
    if (typeof Date.now === 'undefined' || Date.now === null) {
        Date.now = function() {
            return Number(new Date());
        };
    }
    JSRequest = {
        QueryString: null,
        FileName: null,
        PathName: null,
        EnsureSetup: function() {
            if (JSRequest.QueryString != null)
                return;
            JSRequest.QueryString = [];
            var queryString = (ajaxNavigate.get_search()).substring(1);
            var pairs = queryString.split("&");
            var p;

            for (var i = 0; i < pairs.length; i++) {
                var pair = pairs[i];

                p = pair.indexOf("=");
                if (p > -1) {
                    var key = pair.substring(0, p);
                    var value = pair.substring(p + 1);

                    JSRequest.QueryString[key] = value;
                }
            }
            var path = JSRequest.PathName = window.location.pathname;

            p = path.lastIndexOf("/");
            if (p > -1) {
                JSRequest.FileName = path.substring(p + 1);
            }
            else {
                JSRequest.PageName = path;
            }
        }
    };
    ExpGroupWPListName = "WSS_ExpGroupWPList";
    ExpGroupCookiePrefix = "WSS_ExpGroup_";
    ExpGroupCookieDelimiter = "&";
    ExpGroupMaxWP = 11;
    ExpGroupMaxCookieLength = 3960;
    g_ExpGroupCAMLQueue = new Array(0);
    g_ExpGroupXSLTQueue = new Array(0);
    g_ExpGroupInProgress = false;
    g_ExpInitializing = false;
    g_ExpGroupTable = [];
    g_ExpGroupNeedsState = false;
    g_ExpGroupParseStage = false;
    locked = false;
    CSSUtil = {
        AddClass: function(el, className) {
            el.className += ' ' + className;
        },
        RemoveClass: function(el, className) {
            var oldClassName = el.className;
            var leadingSpaceClassName = ' ' + className;

            el.className = oldClassName.indexOf(leadingSpaceClassName) == -1 ? oldClassName.replace(className, '') : oldClassName.replace(leadingSpaceClassName, '');
        }
    };
    if ("undefined" == typeof _v_dictSod) {
        _v_dictSod = [];
    }
    Sods = {
        missing: 1,
        loading: 2,
        pending: 3,
        loaded: 4
    };
    _v_qsod = [];
    _v_sodctx = {
        "document": document,
        "window": window
    };
    Sod.prototype = {
        url: undefined,
        key: undefined,
        loaded: undefined,
        depkeys: undefined,
        state: undefined,
        qfn: undefined,
        reset: undefined
    };
    g_PendingLoadSodQueue = null;
    g_viewportHeight = null;
    g_viewportWidth = null;
    g_wpadderHeight = 0;
    g_setWidthInited = false;
    g_workspaceResizedHandlers = [];
    g_setScrollPos = false;
    g_frl = false;
    g_spribbon = new Object();
    g_spribbon.isMinimized = true;
    g_spribbon.isInited = false;
    g_spribbon.minimizedHeight = "35px";
    g_spribbon.maximizedHeight = "126px";
    v_stsOpenDoc2 = null;
    v_strStsOpenDoc2 = null;
    deleteInstance = 0;
    firstCalled = true;
    _callbackinitdelayed = false;
    fRightToLeft = document.documentElement.dir == "rtl";
    g_spDragDropUpload = {};
    SPDragUploadInfo.prototype = {
        webPartId: undefined,
        serverUrl: undefined,
        siteRelativeUrl: undefined,
        listName: undefined,
        rootFolder: undefined,
        overwriteAll: undefined,
        hideProgressBar: undefined,
        refreshFunc: undefined,
        preUploadFunc: undefined,
        postUploadFunc: undefined,
        checkPermissionFunc: undefined
    };
    g_QuickLaunchControlIds = [];
    ;
    IMNControlObj = null;
    bIMNControlInited = false;
    IMNDictionaryObj = null;
    bIMNSorted = false;
    bIMNOnloadAttached = false;
    IMNOrigScrollFunc = null;
    bIMNInScrollFunc = false;
    IMNSortableObj = null;
    IMNHeaderObj = null;
    IMNNameDictionaryObj = null;
    IMNShowOfflineObj = null;
    IMNImageInfo_InitializePrototype();
    imnCount = 0;
    imnElemsCount = 0;
    imnMarkerBatchSize = 4;
    imnMarkerBatchDelay = 40;
    _spBodyOnLoadCalled = false;
    if (typeof _spBodyOnLoadFunctions === "undefined" || _spBodyOnLoadFunctions === null) {
        _spBodyOnLoadFunctions = [];
    }
    _spFormOnSubmitCalled = false;
    _spBodyOnPageShowRegistered = false;
    _spBodyOnLoadCalled = false;
    if ("undefined" != typeof _spBodyOnLoad) {
        _spBodyOnLoad = undefined;
    }
    if ("undefined" != typeof _spRestoreScrollForDiv_rscr) {
        _spRestoreScrollForDiv_rscr = undefined;
    }
    if (_spBodyOnLoadFunctionNames == null) {
        _spBodyOnLoadFunctionNames = [];
        _spBodyOnLoadFunctionNames.push("_spBodyOnLoad");
        _spBodyOnLoadFunctionNames.push("_spRestoreScrollForDiv_rscr");
    }
    _spFormOnSubmitCalled = false;
    _spBodyOnPageShowRegistered = false;
    _spPageLoadedRegistered = false;
    _inlineEditString = null;
    _spOriginalFormAction = null;
    g_numberOfYields = 10;
    g_spPreFetchKeys = [];
    _spSuppressFormOnSubmitWrapper = false;
    _inlineEditString = null;
    _spPageLoadedRegistered = false;
    g_fAnimateListCSR = true;
    if (document.body == null || document.body.firstChild == null) {
        if (typeof document.addEventListener != 'undefined' && typeof window.msWriteProfilerMark != 'undefined') {
            document.addEventListener("DOMContentLoaded", function() {
                window.msWriteProfilerMark("DOMContentLoaded");
            }, false);
        }
        AttachEvent("DOMContentLoaded", _spBodyOnLoadWrapper, document);
        window.onload = _spBodyOnLoadWrapper;
        AttachEvent("hashchange", _bodyOnHashChangeHandler, window);
    }
    DeveloperDashboard = {
        wnd: null,
        msgQueue: [],
        cookie: 'WSS_DeveloperDashboard',
        PostMsg: function(to, subject, msg) {
            DeveloperDashboard.msgQueue.push({
                to: to,
                subject: subject,
                msg: msg
            });
        }
    };
    (function() {
        window.setTimeout(function() {
            ddInit();
            ddToggleCScope();
        }, 0);
    })();
    flyoutsAllowed = false;
    g_ExecuteOrWaitJobs = new Object();
    cuiKeyHash = {};
    cuiKeyHash[219] = 91;
    cuiKeyHash[221] = 93;
    cuiKeyHash[51] = 35;
    cuiKeyHash[186] = 59;
    cuiKeyHash[187] = 61;
    cuiKeyHash[188] = 44;
    cuiKeyHash[189] = 45;
    cuiKeyHash[190] = 46;
    cuiKeyHash[191] = 47;
    cuiKeyHash[222] = 39;
    g_ribbonHeaderScaleClass = ['ms-cui-tts', 'ms-cui-tts-scale-1', 'ms-cui-tts-scale-2'];
    SPRibbonInfo.prototype.buildMinimized = undefined;
    SPRibbonInfo.prototype.initialTabId = undefined;
    StatusIdWithTopPriority = null;
    StatusColorWithTopPriority = null;
    StatusPriority = {
        red: 4,
        yellow: 3,
        green: 2,
        blue: 1
    };
    StatusBarClassNames = {
        "4": "ms-status-red",
        "3": "ms-status-yellow",
        "2": "ms-status-green",
        "1": "ms-status-blue"
    };
    g_uniqueIndex = 0;
    c_defaultSuiteDataVersion = 2;
    SuiteNavRenderingOptions.prototype = {
        culture: "",
        dataEndpoint: "",
        top: "",
        version: c_defaultSuiteDataVersion
    };
    LinkData.prototype.TargetWindow = "";
    LinkData.prototype.Text = "";
    LinkData.prototype.Url = "";
    SuiteNavData.prototype.AboutMeLink = null;
    SuiteNavData.prototype.ClientData = "";
    SuiteNavData.prototype.CurrentMainLinkElementID = "";
    SuiteNavData.prototype.CurrentWorkloadHelpSubLinks = [];
    SuiteNavData.prototype.CurrentWorkloadSettingsSubLinks = [];
    SuiteNavData.prototype.CurrentWorkloadUserSubLinks = [];
    SuiteNavData.prototype.HelpLink = null;
    SuiteNavData.prototype.IsAuthenticated = false;
    SuiteNavData.prototype.PinnedApps = null;
    SuiteNavData.prototype.SignOutLink = null;
    SuiteNavData.prototype.StringsOverride = null;
    SuiteNavData.prototype.UserDisplayName = null;
    SuiteNavData.prototype.WorkloadLinks = null;
    SuiteData.prototype.DoNotCache = false;
    SuiteData.prototype.NavBarData = null;
    SuiteData.prototype.SPSuiteVersion = c_defaultSuiteDataVersion;
    BrowserStorage = {};
    StorageObject.prototype = {
        getItem: function(key) {
            return "";
        },
        setItem: function(key, value) {
        },
        removeItem: function(key) {
        },
        clear: function() {
        },
        length: 0
    };
    ;
    CachedStorage.prototype = StorageObject.prototype;
    _testKey = "BrowserStorageTest";
    _testValue = "1";
    _local = null;
    _session = null;
    try {
        if (typeof window.localStorage != 'undefined') {
            var localStorageObject = window.localStorage;

            if (TestStorage(localStorageObject))
                _local = localStorageObject;
        }
    }
    catch (exUsingLocalStorage) { }
    try {
        if (typeof window.sessionStorage != 'undefined') {
            var sessionStorageObject = window.sessionStorage;

            if (TestStorage(sessionStorageObject))
                _session = sessionStorageObject;
        }
    }
    catch (exUsingSessionStorage) { }
    if (_session == null)
        _session = new StorageObject();
    if (_local == null)
        _local = _session;
    BrowserStorage.local = new CachedStorage(_local);
    BrowserStorage.session = new CachedStorage(_session);
    c_strUndefined = "undefined";
    key_Date = "SPSuiteLinksDate";
    key_Language = "SPSuiteLinksLanguage";
    key_LinksJson = "SPSuiteLinksJson";
    key_MySiteLinks = "SPMySiteLinks";
    key_SuiteNavHeight = "SPSuiteNavHeight";
    key_UserKey = "SPSuiteLinksUserKey";
    key_LinksCached = "SPSuiteLinksCached";
    _restHeaders = [new RequestHeader("Content-Type", "application/x-www-form-urlencoded"), new RequestHeader("ACCEPT", "application/json; odata=verbose")];
    g_dlgWndTop = null;
    g_spDlgLauncher = true;
    g_ModalDialogCount = 0;
    g_overlayPopup = undefined;
    g_childDialog = undefined;
    CommonGlobalDialogReturnValue_InitializePrototype();
    commonModalDialogReturnValue = new CommonGlobalDialogReturnValue();
    ;
    ;
    ;
    AjaxNavigate.prototype = {
        update: AjaxNavigate$update,
        add_navigate: AjaxNavigate$add_navigate,
        remove_navigate: AjaxNavigate$remove_navigate,
        _raiseNavigate: AjaxNavigate$_raiseNavigate,
        _buildHashBag: AjaxNavigate$_buildHashBag,
        _fixLayoutsUrl: AjaxNavigate$_fixLayoutsUrl,
        _clear: AjaxNavigate$_clear,
        submit: AjaxNavigate$submit,
        getParam: AjaxNavigate$_getParam,
        get_href: AjaxNavigate$get_href,
        get_hash: AjaxNavigate$get_hash,
        get_search: AjaxNavigate$get_search,
        getSavedFormAction: AjaxNavigate$_getSavedFormAction,
        convertMDSURLtoRegularURL: AjaxNavigate$convertMDSURLtoRegularURL,
        _list: undefined
    };
    if ('undefined' == typeof ajaxNavigate) {
        ajaxNavigate = new AjaxNavigate();
    }
    if (!(window.location.pathname.toLowerCase()).endsWith("/_layouts/15/start.aspx")) {
        var raiseNav = function() {
            if ("unknown" != typeof Sys && "undefined" != typeof Sys && null != Sys && null != Sys.Application) {
                Sys.Application.add_load(function() {
                    window.setTimeout(function() {
                        ajaxNavigate._raiseNavigate(ajaxNavigate);
                    }, 0);
                });
            }
        };
        var aListener = function() {
            document.removeEventListener("DOMContentLoaded", aListener, false);
            raiseNav();
        };

        if (Boolean(document.addEventListener)) {
            document.addEventListener("DOMContentLoaded", aListener, false);
        }
        else {
            _spBodyOnLoadFunctions.push(raiseNav);
        }
    }
    URI = function(uriString, options) {
        var that = this;
        var URI_POUND = "#";
        var URI_COLON = ":";
        var URI_FORWARDSLASH = "/";
        var URI_DOUBLE_FORWARDSLASHES = "//";
        var URI_QUESTIONMARK = "?";
        var URI_SEMICOLON = ";";
        var URI_AMPERSAND = "&";
        var URI_AT = "@";
        var URI_EQUAL = "=";
        var URI_DELIMITERS = ";/?:@&=$,";
        var URI_AUTHORITY_TERMINATORS = "/?";
        var m_queryCaseInsensitive = false;

        if (typeof options !== "undefined" && typeof options.queryCaseInsensitive === 'boolean') {
            m_queryCaseInsensitive = options.queryCaseInsensitive;
        }
        var m_disableEncodingDecodingForLegacyCode = false;

        if (typeof options !== "undefined" && typeof options.disableEncodingDecodingForLegacyCode === 'boolean') {
            m_disableEncodingDecodingForLegacyCode = options.disableEncodingDecodingForLegacyCode;
        }
        var m_pathCaseInsensitive = false;

        if (typeof options !== "undefined" && typeof options.pathCaseInsensitive === 'boolean') {
            m_pathCaseInsensitive = options.pathCaseInsensitive;
        }
        var m_scheme = "";
        var m_user = "";
        var m_host = "";
        var m_port = "";
        var m_path = "";
        var m_pathEncoded = "";
        var m_parameters = "";
        var m_query = {};
        var m_fragment = "";

        this.getScheme = function() {
            return m_scheme;
        };
        this.setScheme = function(scheme) {
            m_scheme = decodeURIComponentIfNecessary(scheme);
        };
        this.getAuthority = function() {
            return getAuthority(false);
        };
        this.setAuthority = function(authority) {
            parseAuthority(authority);
        };
        this.getUser = function() {
            return m_user;
        };
        this.getHost = function() {
            return m_host;
        };
        this.getPort = function() {
            return m_port;
        };
        this.getPath = function(trimTrailingSlash) {
            var retPath = m_path;

            if (typeof trimTrailingSlash === 'boolean' && trimTrailingSlash) {
                if (retPath !== null && retPath.lastIndexOf(URI_FORWARDSLASH) === retPath.length - 1) {
                    retPath = retPath.slice(0, -1);
                }
            }
            return retPath;
        };
        this.setPath = function(path) {
            if (path.indexOf(URI_FORWARDSLASH) !== 0) {
                path = URI_FORWARDSLASH + path;
            }
            parsePath(path);
        };
        this.getPathSegments = function() {
            if (m_path === null) {
                return [];
            }
            var ret = m_path.split(URI_FORWARDSLASH);

            if (ret.length > 0) {
                if (ret[0] === "") {
                    ret.shift();
                }
                else if (ret[ret.length - 1] === "") {
                    ret.pop();
                }
            }
            return ret;
        };
        this.getLastPathSegment = function(includeParameters) {
            var pathSegments = that.getPathSegments();

            if (pathSegments.length === 0) {
                return "";
            }
            else {
                var retPath = pathSegments[pathSegments.length - 1];

                if (typeof includeParameters !== 'boolean' || !includeParameters) {
                    var paramBeginPos = retPath.indexOf(URI_SEMICOLON);

                    if (paramBeginPos >= 0) {
                        retPath = retPath.substring(0, paramBeginPos);
                    }
                }
                return retPath;
            }
        };
        this.getParameters = function() {
            return m_parameters;
        };
        this.getQuery = function() {
            return serializeQuery(m_query);
        };
        this.setQuery = function(query) {
            var queryObject = deserializeQuery(query);

            that.setQueryFromObject(queryObject);
        };
        this.getQueryAsObject = function() {
            return m_query;
        };
        this.setQueryFromObject = function(queryObj) {
            m_query = {};
            for (var queryKey in queryObj) {
                if (queryObj.hasOwnProperty(queryKey)) {
                    that.setQueryParameter(queryKey, queryObj[queryKey]);
                }
            }
        };
        this.getQueryParameter = function(queryKey) {
            var ret = null;
            var query = that.getQueryAsObject();

            if (m_queryCaseInsensitive) {
                for (var key in query) {
                    if (m_query.hasOwnProperty(key) && key.toLowerCase() === queryKey.toLowerCase()) {
                        ret = query[key];
                    }
                }
            }
            else {
                ret = query[queryKey];
            }
            if (typeof ret !== 'undefined') {
                return ret;
            }
            else {
                return null;
            }
        };
        this.setQueryParameter = function(queryKey, queryValue) {
            var queryKeyDecoded = decodeURIComponentIfNecessary(queryKey);
            var queryValueDecoded = decodeURIComponentIfNecessary(queryValue);

            m_query[queryKeyDecoded] = queryValueDecoded;
        };
        this.removeQueryParameter = function(queryKey) {
            var queryKeyDecoded = decodeURIComponentIfNecessary(queryKey);

            delete m_query[queryKeyDecoded];
        };
        this.getFragment = function() {
            return m_fragment;
        };
        this.setFragment = function(fragment) {
            if (fragment.indexOf(URI_POUND) === 0) {
                fragment = fragment.substring(1);
            }
            m_fragment = decodeURIComponentIfNecessary(fragment);
        };
        var isStringEqualInensitive = function(a, b) {
            if (a != null && b != null) {
                return a.toLowerCase() === b.toLowerCase();
            }
            else {
                return a === b;
            }
            ;
        };
        var isStringEqual = function(a, b) {
            return a === b;
        };

        this.equals = function(uri) {
            return m_scheme.toLowerCase() === (uri.getScheme()).toLowerCase() && m_user === uri.getUser() && m_host.toLowerCase() === (uri.getHost()).toLowerCase() && m_port === uri.getPort() && (m_pathCaseInsensitive ? isStringEqualInensitive : isStringEqual)(that.getPath(true), uri.getPath(true)) && m_parameters === uri.getParameters() && (m_queryCaseInsensitive ? isStringEqualInensitive : isStringEqual)(that.getQuery(), uri.getQuery()) && m_fragment === uri.getFragment();
        };
        this.getString = function() {
            return getStringInternal(true);
        };
        this.getDecodedStringForDisplay = function() {
            return getStringInternal(false);
        };
        this.getStringWithoutQueryAndFragment = function() {
            return getStringWithoutQueryAndFragmentInternal(true);
        };
        var getStringInternal = function(encoded) {
            var ret = getStringWithoutQueryAndFragmentInternal(encoded);
            var query = serializeQuery(m_query, encoded);

            if (query !== "") {
                ret += URI_QUESTIONMARK + query;
            }
            if (m_fragment !== "") {
                ret += URI_POUND + (encoded ? encodeURIComponentIfNecessary(m_fragment) : m_fragment);
            }
            return ret;
        };
        var getStringWithoutQueryAndFragmentInternal = function(encoded) {
            var ret = "";

            if (m_scheme !== "") {
                ret += (encoded ? encodeURIComponentIfNecessary(m_scheme) : m_scheme) + URI_COLON;
            }
            var authority = getAuthority(encoded);

            if (authority !== "") {
                ret += URI_DOUBLE_FORWARDSLASHES + authority;
            }
            if (m_pathEncoded !== "") {
                ret += encoded ? m_pathEncoded : m_path;
            }
            return ret;
        };
        var normalizeQueryKey = function(queryKey) {
            var key = queryKey;

            if (m_queryCaseInsensitive) {
                key = key.toLowerCase();
            }
            return key;
        };
        var deserializeQuery = function(queryStr) {
            var queryObj = {};

            if (queryStr.indexOf(URI_QUESTIONMARK) === 0) {
                queryStr = queryStr.substring(1);
            }
            var queryParts = queryStr.split(/[;&]+/);

            for (var queryIdx = 0; queryIdx < queryParts.length; queryIdx++) {
                var queryPart = queryParts[queryIdx];
                var queryPartSegments = queryPart.split(URI_EQUAL);

                if (queryPartSegments.length > 0) {
                    var queryKey = queryPartSegments[0];

                    if (queryKey.length > 0) {
                        var queryValue = "";

                        if (queryPartSegments.length == 2) {
                            queryValue = queryPartSegments[1];
                        }
                        queryObj[queryKey] = queryValue;
                    }
                }
            }
            return queryObj;
        };
        var serializeQuery = function(queryObj, encoded) {
            encoded = typeof encoded === "undefined" ? false : encoded;
            var queryStr = "";

            for (var queryKey in queryObj) {
                if (queryObj.hasOwnProperty(queryKey)) {
                    var key = queryKey;
                    var value = queryObj[queryKey];

                    if (encoded) {
                        key = encodeURIComponentIfNecessary(key);
                        value = encodeURIComponentIfNecessary(value);
                    }
                    if (value === null || value === "") {
                        queryStr += key + URI_EQUAL + URI_AMPERSAND;
                    }
                    else {
                        queryStr += key + URI_EQUAL + value + URI_AMPERSAND;
                    }
                }
            }
            if (queryStr !== "") {
                queryStr = queryStr.slice(0, -1);
            }
            return queryStr;
        };
        var parseURI = function() {
            var remainingString = uriString;
            var fragmentBeginPos = remainingString.indexOf(URI_POUND);

            if (fragmentBeginPos >= 0) {
                var fragment = remainingString.substring(fragmentBeginPos + 1);

                that.setFragment(fragment);
                remainingString = remainingString.substring(0, fragmentBeginPos);
            }
            var schemeEndPos = findOneOf(remainingString, URI_DELIMITERS);

            if (schemeEndPos >= 0) {
                var firstColonPos = remainingString.indexOf(URI_COLON);

                if (firstColonPos >= 0 && firstColonPos === schemeEndPos) {
                    m_scheme = remainingString.substring(0, schemeEndPos);
                    remainingString = remainingString.substring(schemeEndPos + 1);
                }
            }
            else {
                parsePath(remainingString);
                return;
            }
            var authority = "";
            var doubleSlashPos = remainingString.indexOf(URI_DOUBLE_FORWARDSLASHES);

            if (doubleSlashPos >= 0 && doubleSlashPos === 0) {
                remainingString = remainingString.substring(2);
                var nothingElseLeft;
                var authorityEndPos = findOneOf(remainingString, URI_AUTHORITY_TERMINATORS);

                if (authorityEndPos >= 0) {
                    authority = remainingString.substring(0, authorityEndPos);
                    remainingString = remainingString.substring(authorityEndPos);
                    nothingElseLeft = false;
                }
                else {
                    authority = remainingString;
                    nothingElseLeft = true;
                }
                parseAuthority(authority);
                if (nothingElseLeft) {
                    return;
                }
            }
            var queryBeginPos = remainingString.indexOf(URI_QUESTIONMARK);

            if (queryBeginPos >= 0) {
                that.setQuery(remainingString.substring(queryBeginPos + 1));
                remainingString = remainingString.substring(0, queryBeginPos);
            }
            parsePath(remainingString);
        };
        var parseAuthority = function(authority) {
            m_host = authority;
            var userNameEndPos = authority.lastIndexOf(URI_AT);

            if (userNameEndPos >= 0) {
                m_host = m_host.substring(userNameEndPos + 1);
            }
            var hostPortSeparatorPos = m_host.indexOf(URI_COLON);

            if (userNameEndPos < 0 && hostPortSeparatorPos < 0) {
                return;
            }
            var authorityComponents = authority;

            if (userNameEndPos < 0) {
                m_host = authorityComponents;
            }
            else {
                m_user = authorityComponents.substring(0, userNameEndPos);
                m_host = authorityComponents.substring(userNameEndPos + 1);
            }
            if (hostPortSeparatorPos >= 0) {
                m_port = m_host.substring(hostPortSeparatorPos + 1);
                m_host = m_host.substring(0, hostPortSeparatorPos);
            }
            m_user = decodeURIComponentIfNecessary(m_user);
            m_host = decodeURIComponentIfNecessary(m_host);
        };
        var parsePath = function(remainingString) {
            var paramBeginPos = remainingString.indexOf(URI_SEMICOLON);

            if (paramBeginPos >= 0) {
                m_parameters = decodeURIComponentIfNecessary(remainingString.substring(paramBeginPos + 1));
            }
            m_path = decodeURIComponentIfNecessary(remainingString);
            var encodedPathSegments = remainingString.split(URI_FORWARDSLASH);

            for (var i = 0; i < encodedPathSegments.length; ++i) {
                var segment = encodedPathSegments[i];
                var segmentAndParameters = segment.split(URI_SEMICOLON);
                var decodedSegment = decodeURIComponentIfNecessary(segmentAndParameters[0]);

                encodedPathSegments[i] = encodeURIComponentIfNecessary(decodedSegment);
                for (var j = 1; j < segmentAndParameters.length; ++j) {
                    var decodedParameter = decodeURIComponentIfNecessary(segmentAndParameters[j]);

                    encodedPathSegments[i] += URI_SEMICOLON + encodeURIComponentIfNecessary(decodedParameter);
                }
            }
            m_pathEncoded = encodedPathSegments.join(URI_FORWARDSLASH);
        };
        var findOneOf = function(str, searchValues) {
            for (var strIdx = 0; strIdx < str.length; strIdx++) {
                var c = str[strIdx];

                for (var delimIdx = 0; delimIdx < searchValues.length; delimIdx++) {
                    if (c === searchValues[delimIdx]) {
                        return strIdx;
                    }
                }
            }
            return -1;
        };
        var getUserEncodedIfNecessary = function() {
            var user;

            if (m_disableEncodingDecodingForLegacyCode) {
                user = m_user;
            }
            else {
                user = encodeURIComponentIfNecessary(m_user);
                user = user.replace("%3A", ":");
            }
            return user;
        };
        var getAuthority = function(encoded) {
            var authority = "";
            var user;
            var host;
            var port;

            if (encoded) {
                user = getUserEncodedIfNecessary();
                host = encodeURIComponentIfNecessary(m_host);
                port = encodeURIComponentIfNecessary(m_port);
            }
            else {
                user = m_user;
                host = m_host;
                port = m_port;
            }
            if (user !== "") {
                authority = user + URI_AT;
            }
            if (m_host !== "") {
                authority += host;
            }
            if (m_port !== "") {
                authority += URI_COLON + port;
            }
            return authority;
        };
        var encodeURIComponentIfNecessary = function(component) {
            return m_disableEncodingDecodingForLegacyCode ? component : encodeURIComponent(component);
        };
        var decodeURIComponentIfNecessary = function(component) {
            return m_disableEncodingDecodingForLegacyCode ? component : unescapeProperly(component);
        };

        parseURI();
    };
    _EnsureJSNamespace("SP");
    if (typeof SP.SOD == "undefined")
        SP.SOD = {};
    SP.SOD.execute = EnsureScriptParams;
    SP.SOD.executeFunc = EnsureScriptFunc;
    SP.SOD.registerSod = RegisterSod;
    SP.SOD.registerSodDep = RegisterSodDep;
    SP.SOD.executeOrDelayUntilScriptLoaded = ExecuteOrDelayUntilScriptLoaded;
    SP.SOD.executeOrDelayUntilEventNotified = ExecuteOrDelayUntilEventNotified;
    SP.SOD.notifyScriptLoadedAndExecuteWaitingJobs = NotifyScriptLoadedAndExecuteWaitingJobs;
    SP.SOD.notifyEventAndExecuteWaitingJobs = NotifyEventAndExecuteWaitingJobs;
    SP.SOD.loadMultiple = LoadMultipleSods;
    SP.SOD.delayUntilEventNotified = DelayUntilEventNotified;
    g_prefetch = 1;
    SP.SOD.get_prefetch = function() {
        return g_prefetch;
    };
    SP.SOD.set_prefetch = function(prefetch) {
        g_prefetch = prefetch;
    };
    SP.SOD.prefetch = _spPreFetch;
    g_ribbonImagePrefetch = true;
    SP.SOD.get_ribbonImagePrefetchEnabled = function() {
        return g_ribbonImagePrefetch;
    };
    SP.SOD.set_ribbonImagePrefetchEnabled = function(ribbonImagePrefetchEnabled) {
        g_ribbonImagePrefetch = ribbonImagePrefetchEnabled;
    };
    _EnsureJSNamespace("SP.UI");
    if (typeof SP.UI.Workspace == "undefined")
        SP.UI.Workspace = {};
    SP.UI.Workspace.add_resized = function(handler) {
        g_workspaceResizedHandlers.push(handler);
    };
    SP.UI.Workspace.remove_resized = function(handler) {
        var match = -1;

        for (var i = 0, wLen = g_workspaceResizedHandlers.length; i < wLen; i++) {
            if (handler == g_workspaceResizedHandlers[i]) {
                match = i;
                break;
            }
        }
        if (match != -1) {
            g_workspaceResizedHandlers.splice(match, 1);
        }
    };
    _spBodyOnLoadFunctionNames.push("AllowCSSFiltersOnIE8");
    initJsLoaded = true;
    notifyScriptsLoadedAndExecuteWaitingJobs("init.js");
}
var currentCtx;
var ctx;
var itemTable;
var g_supportFiles;
var g_MDNav;
var ULS;

function ULSObject() {
}
function ULSTrim(str) {
    str = str.replace(/^\s*/, "");
    str = str.replace(/\s*$/, "");
    return str;
}
function ULSEncodeXML(str) {
    str = String(str);
    str = str.replace(/&/g, "&amp;");
    str = str.replace(/</g, "&lt;");
    str = str.replace(/>/g, "&gt;");
    str = str.replace(/'/g, "&apos;");
    str = str.replace(/"/g, "&quot;");
    return str;
}
function ULSStripPII(url) {
    if (url.indexOf('?') != -1)
        url = url.substring(0, url.indexOf('?'));
    if (Boolean(window.location))
        url = url.replace(window.location.hostname, "[server]");
    return url;
}
function ULSGetFunction(fn, depth, topfn) {
    var sF = fn.toString();
    var sFnNm = ULSTrim(sF.substring(0, sF.indexOf("{")));

    if (sFnNm.indexOf("function") == 0)
        sFnNm = ULSTrim(sFnNm.substring(8));
    var s = '<function ';

    if (depth >= 0)
        s += 'depth="' + depth.toString() + '" ';
    s += 'signature="' + sFnNm + '">';
    if (depth == 0 || sFnNm.indexOf("anonymous") == 0 || sFnNm.indexOf("(") == 0)
        s += '\n<![CDATA[' + sF + ']]>\n';
    s += '</function>';
    return s;
}
function ULSGetMetadataFromFrame(oCS) {
    var sFunctionText = oCS.toString();
    var iOpeningBrace = sFunctionText.indexOf("{");

    if (iOpeningBrace == -1)
        return false;
    sFunctionText = sFunctionText.substr(iOpeningBrace + 1);
    var iFirstStatement = sFunctionText.search(/[^\s]/);

    if (iFirstStatement == -1)
        return false;
    var reMatch = sFunctionText.match(/ULS[^\s;]*:/);

    if (reMatch == null || typeof reMatch.index != "undefined" && reMatch.index != iFirstStatement)
        return false;
    var sLabelName = reMatch[0];

    sLabelName = sLabelName.substr(0, sLabelName.length - 1);
    try {
        var o = eval(sLabelName + "()");

        if (typeof o == "undefined" || typeof o.ULSTeamName == "undefined" || typeof o.ULSFileName == "undefined")
            return false;
        ULS.teamName = o.ULSTeamName;
        ULS.originalFile = o.ULSFileName;
        return true;
    }
    catch (e) {
        return false;
    }
}
function ULSGetCallstack(callerArg) {
    var stack = "";

    try {
        if (Boolean(callerArg)) {
            var fFoundMetadata = false;
            var oCS = callerArg;
            var depth = 0;

            while (Boolean(oCS) && depth < 20) {
                if (!fFoundMetadata)
                    fFoundMetadata = ULSGetMetadataFromFrame(oCS);
                stack += ULSGetFunction(oCS, depth, callerArg) + '\n';
                oCS = oCS.caller;
                depth++;
            }
        }
    }
    catch (e) { }
    return stack;
}
function ULSGetClientInfo() {
    var client = "";

    try {
        var lang = navigator.browserLanguage;

        if (!Boolean(lang))
            lang = navigator.language;
        if (!Boolean(lang))
            lang = navigator.systemLanguage;
        var agt = navigator.userAgent.toLowerCase();
        var app = navigator.appName;
        var ver = parseFloat(navigator.appVersion);

        if (agt.indexOf("msie ") != -1)
            ver = parseFloat(agt.substring(agt.indexOf("msie ") + 5));
        if (agt.indexOf("firefox/") != -1) {
            app = "Firefox";
            ver = parseFloat(agt.substring(agt.indexOf("firefox/") + 8));
        }
        client += '<browser name="' + ULSEncodeXML(app) + '" version="' + ULSEncodeXML(ver.toString()) + '" />\n';
        client += '<useragent>' + ULSEncodeXML(navigator.userAgent) + '</useragent>\n';
        if (Boolean(lang))
            client += '<language>' + ULSEncodeXML(lang) + '</language>\n';
        if (Boolean(document.referrer)) {
            var ref = ULSStripPII(document.referrer);

            client += '<referrer>' + ULSEncodeXML(ref) + '</referrer>\n';
        }
        if (Boolean(window.location)) {
            var loc = ULSStripPII(window.location.toString());

            client += '<location>' + ULSEncodeXML(loc) + '</location>\n';
        }
        if (Boolean(ULS.Correlation))
            client += '<correlation>' + ULSEncodeXML(ULS.Correlation) + '</correlation>\n';
    }
    catch (e) { }
    return client;
}
function ULSHandleWebServiceResponse() {
    var req = ULS.request;

    if (req.readyState == 4 && req.status == 200) {
        ULSFinishErrorHandling();
    }
    if ((req.readyState == 0 || req.readyState == 4) && req.status > 200) {
        ULSFinishErrorHandling();
    }
}
function ULSFinishErrorHandling() {
    ULS.message = null;
}
function ULSGetWebServiceUrl() {
    var url = "";
    var idx1 = document.URL.indexOf('://');

    if (idx1 > 0) {
        var idx2 = document.URL.indexOf('/', idx1 + 3);

        if (idx2 > 0)
            url = document.URL.substring(0, idx2);
        else
            url = document.URL;
    }
    if (url.charAt(url.length - 1) != '/')
        url += '/';
    url += '_vti_bin/diagnostics.asmx';
    return url;
}
function ULSUploadReport(msg, correlation, url) {
    if (Boolean(ULS) && ULS.enable) {
        ULS.message = msg;
        if (url.indexOf('?') != -1)
            url = url.substr(0, url.indexOf('?'));
        ULS.file = url.substr(url.lastIndexOf('/') + 1);
        ULS.line = 0;
        ULS.WebServiceNS = "http://schemas.microsoft.com/sharepoint/diagnostics/";
        ULS.Correlation = correlation;
        ULS.teamName = '';
        ULS.originalFile = '';
        ULS.callStack = '';
        ULS.clientInfo = '<client>\n' + ULSGetClientInfo() + '</client>';
        ULSSendReport(false);
    }
}
function ULSSendReport(async) {
    ULS.request = new XMLHttpRequest();
    ULS.request.onreadystatechange = ULSHandleWebServiceResponse;
    ULS.request.open("POST", ULSGetWebServiceUrl(), async);
    ULS.request.setRequestHeader("Content-Type", "text/xml; charset=utf-8");
    ULS.request.setRequestHeader("SOAPAction", ULS.WebServiceNS + "SendClientScriptErrorReport");
    ULS.request.send('<?xml version="1.0" encoding="utf-8"?>' + '<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">' + '<soap:Body>' + '<SendClientScriptErrorReport xmlns="' + ULS.WebServiceNS + '">' + '<message>' + ULSEncodeXML(ULS.message) + '</message>' + '<file>' + ULSEncodeXML(ULS.file) + '</file>' + '<line>' + String(ULS.line) + '</line>' + '<stack>' + ULSEncodeXML(ULS.callStack) + '</stack>' + '<client>' + ULSEncodeXML(ULS.clientInfo) + '</client>' + '<team>' + ULSEncodeXML(ULS.teamName) + '</team>' + '<originalFile>' + ULSEncodeXML(ULS.originalFile) + '</originalFile>' + '</SendClientScriptErrorReport>' + '</soap:Body>' + '</soap:Envelope>');
}
function ULSSendExceptionImpl(msg, url, line, oCaller) {
    if (Boolean(ULS) && ULS.enable) {
        ULS.enable = false;
        window.onerror = ULS.OriginalOnError;
        ULS.WebServiceNS = "http://schemas.microsoft.com/sharepoint/diagnostics/";
        try {
            ULS.message = msg;
            if (url.indexOf('?') != -1)
                url = url.substr(0, url.indexOf('?'));
            ULS.file = url.substr(url.lastIndexOf('/') + 1);
            ULS.line = line;
            ULS.teamName = "";
            ULS.originalFile = "";
            ULS.callStack = '<stack>\n' + ULSGetCallstack(oCaller) + '</stack>';
            ULS.clientInfo = '<client>\n' + ULSGetClientInfo() + '</client>';
            ULSSendReport(true);
        }
        catch (e) { }
    }
    if (Boolean(ULS) && Boolean(ULS.OriginalOnError))
        return ULS.OriginalOnError(msg, url, String(line));
    else
        return false;
}
function ULSOnError(msg, url, line) {
    return ULSSendExceptionImpl(msg, url, line, ULSOnError.caller);
}
function ULSSendException(ex) {
    var message = ex.message;

    if (typeof message == "undefined")
        message = ex.toString();
    ULSSendExceptionImpl(message, location.href, 0, ULSSendException.caller);
}
var ULSCat;

function GetXMLHttpRequestObject() {
    return new XMLHttpRequest();
}
function insertAdjacentElement(obj, where, parsedNode) {
    if (typeof obj.insertAdjacentElement != "undefined" && Boolean(obj.insertAdjacentElement))
        return obj.insertAdjacentElement(where, parsedNode);
    switch (where) {
    case 'beforeBegin':
        return obj.parentNode.insertBefore(parsedNode, obj);
    case 'afterBegin':
        return obj.insertBefore(parsedNode, obj.firstChild);
    case 'beforeEnd':
        return obj.appendChild(parsedNode);
    case 'afterEnd':
        if (Boolean(obj.nextSibling))
            return obj.parentNode.insertBefore(parsedNode, obj.nextSibling);
        else
            return obj.parentNode.appendChild(parsedNode);
    }
    return null;
}
function insertAdjacentHTML(obj, where, htmlStr) {
    if (typeof obj.insertAdjacentHTML != "undefined" && Boolean(obj.insertAdjacentHTML))
        return obj.insertAdjacentHTML(where, htmlStr);
    if (typeof obj.ownerDocument.createRange != "undefined") {
        var r = obj.ownerDocument.createRange();

        if (typeof r.setStartBefore != "undefined" && typeof r.createContextualFragment != "undefined") {
            r.setStartBefore(obj);
            var parsedHTML = r.createContextualFragment(htmlStr);

            return insertAdjacentElement(obj, where, parsedHTML);
        }
    }
    return null;
}
function insertAdjacentText(obj, where, txtStr) {
    if (typeof obj.insertAdjacentText != "undefined" && Boolean(obj.insertAdjacentText))
        return obj.insertAdjacentText(where, txtStr);
    var parsedText = document.createTextNode(txtStr);

    return insertAdjacentElement(obj, where, parsedText);
}
function contains(obj, elem) {
    var isParent = false;

    do {
        isParent = obj == elem;
        if (isParent)
            break;
        elem = elem.parentNode;
    } while (elem != null);
    return isParent;
}
function getFirstElementByName(obj, name2) {
    return getFirstElementByProperty(obj, 'name', name2);
}
function getFirstElementByProperty(obj, propName, propValue) {
    if (propName == null || propValue == null || propName == '' || propValue == '')
        return null;
    if (obj[propName] == propValue)
        return obj;
    var Child = obj.firstChild;

    while (Boolean(Child) && typeof Child != 'undefined') {
        var ret = getFirstElementByProperty(Child, propName, propValue);

        if (Boolean(ret))
            return ret;
        Child = Child.nextSibling;
    }
    return null;
}
function documentGetElementsByName(name2) {
    if (!browseris.ie && Boolean(document.getElementsByName))
        return document.getElementsByName(name2);
    var matched = [];
    var allEls = document.getElementsByTagName("*"), l = allEls.length;

    for (var i = 0; i < l; i++) {
        var elem = allEls[i];

        if (elem.name == name2 || typeof elem.getAttribute != "unknown" && Boolean(elem.getAttribute) && elem.getAttribute("name") == name2)
            matched.push(elem);
    }
    return matched;
}
function getFirstChild(el) {
    var node = el.firstChild;

    while (Boolean(node) && node.nodeType == 3)
        node = node.nextSibling;
    return node;
}
function Browseris() {
    var agt = navigator.userAgent.toLowerCase();
    var navIdx;

    this.osver = 1.0;
    if (Boolean(agt)) {
        var stOSVer = agt.substring(agt.indexOf("windows ") + 11);

        this.osver = parseFloat(stOSVer);
    }
    this.major = parseInt(navigator.appVersion);
    this.msEdge = agt.indexOf("edge/") != -1;
    var msieIdx = agt.indexOf("msie");
    var tridentIdx = agt.indexOf("trident");

    this.ie = msieIdx != -1 || tridentIdx != -1;
    var stIEVer = "0";

    if (this.ie) {
        if (msieIdx != -1) {
            stIEVer = agt.substring(msieIdx + 5);
        }
        else {
            var rvIdx = agt.indexOf("rv:");

            if (rvIdx != -1) {
                stIEVer = agt.substring(rvIdx + 3);
            }
        }
    }
    this.iever = parseInt(stIEVer);
    this.verIEFull = parseFloat(stIEVer);
    this.ie4up = this.ie && this.major >= 4;
    this.ie5up = this.ie && this.iever >= 5;
    this.ie55up = this.ie && this.verIEFull >= 5.5;
    this.ie6up = this.ie && this.iever >= 6;
    this.ie7down = this.ie && this.iever <= 7;
    this.ie8down = this.ie && this.iever <= 8;
    this.ie9down = this.ie && this.iever <= 9;
    this.ie7up = this.ie && this.iever >= 7;
    this.ie8standard = this.ie && Boolean(document.documentMode) && document.documentMode == 8;
    this.ie8standardUp = this.ie && (Boolean(document.documentMode) && document.documentMode >= 8);
    this.ie9standardUp = this.ie && (Boolean(document.documentMode) && document.documentMode >= 9);
    this.ie10standardUp = this.ie && (Boolean(document.documentMode) && document.documentMode >= 10);
    this.ie11 = this.ie && Boolean(document.documentMode) && document.documentMode == 11;
    this.nav = agt.indexOf('mozilla') != -1 && agt.indexOf('spoofer') == -1 && agt.indexOf('compatible') == -1 && !this.ie;
    this.nav6 = this.nav && this.major == 5;
    this.nav6up = this.nav && this.major >= 5;
    this.nav7up = false;
    if (this.nav6up) {
        navIdx = agt.indexOf("netscape/");
        if (navIdx >= 0)
            this.nav7up = parseInt(agt.substring(navIdx + 9)) >= 7;
    }
    this.winnt = agt.indexOf("winnt") != -1 || agt.indexOf("windows nt") != -1;
    this.win32 = this.major >= 4 && navigator.platform == "Win32" || agt.indexOf("win32") != -1 || agt.indexOf("32bit") != -1;
    this.win64bit = agt.indexOf("win64") != -1;
    this.win = this.winnt || this.win32 || this.win64bit;
    this.safari = agt.indexOf("webkit") != -1 && !this.ie && !this.msEdge;
    this.safari125up = false;
    this.safari3up = false;
    if (this.safari && this.major >= 5) {
        navIdx = agt.indexOf("webkit/");
        if (navIdx >= 0)
            this.safari125up = parseInt(agt.substring(navIdx + 7)) >= 125;
        var verIdx = agt.indexOf("version/");

        if (verIdx >= 0)
            this.safari3up = parseInt(agt.substring(verIdx + 8)) >= 3;
    }
    this.firefox = this.nav && agt.indexOf("firefox") != -1;
    this.firefox3up = false;
    this.firefox36up = false;
    this.firefox4up = false;
    if (this.firefox && this.major >= 5) {
        var ffVerIdx = agt.indexOf("firefox/");

        if (ffVerIdx >= 0) {
            var firefoxVStr = agt.substring(ffVerIdx + 8);

            this.firefox3up = parseInt(firefoxVStr) >= 3;
            this.firefox36up = parseFloat(firefoxVStr) >= 3.6;
            this.firefox4up = parseInt(firefoxVStr) >= 4;
        }
    }
    this.chrome = this.nav && agt.indexOf("chrome") != -1 && !this.ie && !this.msEdge;
    this.chrome7up = false;
    this.chrome8up = false;
    this.chrome9up = false;
    if (this.chrome && this.major >= 5) {
        var chmVerIdx = agt.indexOf("chrome/");

        if (chmVerIdx >= 0) {
            var chmVerStr = agt.substring(chmVerIdx + 7);
            var chmVerInt = parseInt(chmVerStr);

            this.chrome7up = chmVerInt >= 7;
            this.chrome8up = chmVerInt >= 8;
            this.chrome9up = chmVerInt >= 9;
        }
    }
    this.ipad = agt.indexOf("ipad") != -1;
    this.windowsphone = agt.indexOf("windows phone") != -1;
    this.aol = this.ie && agt.indexOf(" aol ") != -1;
    this.mac = agt.indexOf("mac") != -1;
    this.w3c = this.nav6up;
    this.webKit = agt.indexOf("webkit") != -1 && !this.ie && !this.msEdge;
    this.win8AppHost = agt.indexOf("msapphost") != -1;
    this.msTouch = typeof navigator.msMaxTouchPoints != "undefined" && navigator.msMaxTouchPoints > 0;
    this.isTouch = this.msTouch || "ontouchstart" in document.documentElement;
    this.armProcessor = agt.indexOf("arm") != -1;
}
var browseris;
var bis;

function byid(id) {
    return document.getElementById(id);
}
function newE(tag) {
    return document.createElement(tag);
}
function wpf() {
    if (typeof window.MSOWebPartPageFormName != "undefined")
        return document.forms[window.MSOWebPartPageFormName];
    return null;
}
function startReplacement() {
}
function SetEvent(eventName, eventFunc, el) {
    if (!el)
        el = window;
    if (typeof eventFunc == 'string')
        eventFunc = new Function(eventFunc);
    el['on' + eventName] = eventFunc;
}
function AttachEvent(eventName, eventFunc, el) {
    if (!el)
        el = window;
    if (eventName == 'domLoad') {
        eventName = typeof el.addEventListener != 'undefined' && el.addEventListener && browseris.nav ? 'DOMContentLoaded' : 'load';
    }
    else if (eventName != 'undefined' && eventName != null && eventName.indexOf("touch") == 0 && bis.msTouch) {
        switch (eventName) {
        case "touchstart":
            eventName = "MSPointerDown";
            break;
        case "touchmove":
            eventName = "MSPointerMove";
            break;
        case "touchend":
            eventName = "MSPointerUp";
            break;
        }
    }
    if (typeof eventFunc == 'string')
        eventFunc = new Function(eventFunc);
    if (typeof el.addEventListener != 'undefined' && el.addEventListener)
        el.addEventListener(eventName, eventFunc, false);
    else if (typeof el.attachEvent != 'undefined')
        el.attachEvent('on' + eventName, eventFunc);
}
function DetachEvent(eventName, eventFunc, el) {
    if (!el)
        el = window;
    if (eventName == 'domLoad') {
        eventName = typeof el.removeEventListener != 'undefined' && el.removeEventListener && browseris.nav ? 'DOMContentLoaded' : 'load';
    }
    if (typeof eventFunc == 'string')
        eventFunc = new Function(eventFunc);
    if (typeof el.removeEventListener != 'undefined' && el.removeEventListener)
        el.removeEventListener(eventName, eventFunc, false);
    else if (typeof el.detachEvent != 'undefined')
        el.detachEvent('on' + eventName, eventFunc);
}
function CancelEvent(e) {
    e.cancelBubble = true;
    if (Boolean(e.preventDefault))
        e.preventDefault();
    e.returnValue = false;
    return false;
}
function GetEventSrcElement(e) {
    if (e.target != null)
        return e.target;
    else
        return e.srcElement;
}
function GetEventKeyCode(e) {
    if (browseris.nav)
        return e.which;
    else
        return e.keyCode;
}
function GetInnerText(e) {
    if (browseris.safari && browseris.major < 5)
        return e.innerHTML;
    else if (browseris.nav || browseris.safari)
        return e.textContent;
    else
        return e.innerText;
}
var g_cde;

function GetCachedElement(id) {
    var ret = null;

    if (!Boolean(ret = g_cde[id])) {
        ret = document.getElementById(id);
        g_cde[id] = ret;
    }
    return ret;
}
function $dg(x) {
    if (!(x in window))
        window[x] = undefined;
}
var UTF8_1ST_OF_2;
var UTF8_1ST_OF_3;
var UTF8_1ST_OF_4;
var UTF8_TRAIL;
var HIGH_SURROGATE_BITS;
var LOW_SURROGATE_BITS;
var SURROGATE_6_BIT;
var SURROGATE_ID_BITS;
var SURROGATE_OFFSET;

function escapeProperlyCoreCore(str, bAsUrl, bForFilterQuery, bForCallback) {
    var strOut = "";
    var strByte;
    var ix = 0;
    var strEscaped = " \"%<>\'&";

    if (typeof str == "undefined")
        return "";
    for (ix = 0; ix < str.length; ix++) {
        var charCode = str.charCodeAt(ix);
        var curChar = str.charAt(ix);

        if (bAsUrl && (curChar == '#' || curChar == '?')) {
            strOut += str.substr(ix);
            break;
        }
        if (bForFilterQuery && curChar == '&') {
            strOut += curChar;
            continue;
        }
        if (charCode <= 0x7f) {
            if (bForCallback) {
                strOut += curChar;
            }
            else {
                if (charCode >= 97 && charCode <= 122 || charCode >= 65 && charCode <= 90 || charCode >= 48 && charCode <= 57 || bAsUrl && (charCode >= 32 && charCode <= 95) && strEscaped.indexOf(curChar) < 0) {
                    strOut += curChar;
                }
                else if (charCode <= 0x0f) {
                    strOut += "%0" + (charCode.toString(16)).toUpperCase();
                }
                else if (charCode <= 0x7f) {
                    strOut += "%" + (charCode.toString(16)).toUpperCase();
                }
            }
        }
        else if (charCode <= 0x07ff) {
            strByte = UTF8_1ST_OF_2 | charCode >> 6;
            strOut += "%" + (strByte.toString(16)).toUpperCase();
            strByte = UTF8_TRAIL | charCode & 0x003f;
            strOut += "%" + (strByte.toString(16)).toUpperCase();
        }
        else if ((charCode & SURROGATE_6_BIT) != HIGH_SURROGATE_BITS) {
            strByte = UTF8_1ST_OF_3 | charCode >> 12;
            strOut += "%" + (strByte.toString(16)).toUpperCase();
            strByte = UTF8_TRAIL | (charCode & 0x0fc0) >> 6;
            strOut += "%" + (strByte.toString(16)).toUpperCase();
            strByte = UTF8_TRAIL | charCode & 0x003f;
            strOut += "%" + (strByte.toString(16)).toUpperCase();
        }
        else if (ix < str.length - 1) {
            charCode = (charCode & 0x03FF) << 10;
            ix++;
            var nextCharCode = str.charCodeAt(ix);

            charCode |= nextCharCode & 0x03FF;
            charCode += SURROGATE_OFFSET;
            strByte = UTF8_1ST_OF_4 | charCode >> 18;
            strOut += "%" + (strByte.toString(16)).toUpperCase();
            strByte = UTF8_TRAIL | (charCode & 0x3f000) >> 12;
            strOut += "%" + (strByte.toString(16)).toUpperCase();
            strByte = UTF8_TRAIL | (charCode & 0x0fc0) >> 6;
            strOut += "%" + (strByte.toString(16)).toUpperCase();
            strByte = UTF8_TRAIL | charCode & 0x003f;
            strOut += "%" + (strByte.toString(16)).toUpperCase();
        }
    }
    return strOut;
}
function escapeProperly(str) {
    return escapeProperlyCoreCore(str, false, false, false);
}
function escapeProperlyCore(str, bAsUrl) {
    return escapeProperlyCoreCore(str, bAsUrl, false, false);
}
function escapeUrlForCallback(str) {
    var iPound = str.indexOf("#");
    var iQues = str.indexOf("?");

    if (iPound > 0 && (iQues == -1 || iPound < iQues)) {
        var strNew = str.substr(0, iPound);

        if (iQues > 0) {
            strNew += str.substr(iQues);
        }
        str = strNew;
    }
    return escapeProperlyCoreCore(str, true, false, true);
}
function IsSTSPageUrlValid(url) {
    return url.substr(0, 4) == "http" || url.substr(0, 1) == "/" || url.indexOf(":") == -1;
}
function PageUrlValidation(url) {
    if (IsSTSPageUrlValid(url)) {
        return url;
    }
    else {
        alert(Strings.STS.L_InvalidPageUrl_Text);
        return "";
    }
}
function SelectRibbonTab(tabId, force) {
    var rib;

    try {
        rib = (SP.Ribbon.PageManager.get_instance()).get_ribbon();
    }
    catch (e) { }
    if (!Boolean(rib)) {
        if (typeof _ribbonStartInit != "undefined")
            _ribbonStartInit(tabId, false, null);
    }
    else if (force || rib.get_selectedTabId() == "Ribbon.Read") {
        rib.selectTabById(tabId);
    }
}
function FV4UI() {
    return typeof _fV4UI != "undefined" && _fV4UI;
}
function GoToHistoryLink(elm, strVersion) {
    if (elm.href == null)
        return;
    var targetUrl = elm.href;
    var ch = elm.href.indexOf("?") >= 0 ? "&" : "?";
    var srcUrl = ch + "VersionNo=" + strVersion;
    var srcSourceUrl = GetSource();

    if (srcSourceUrl != null && srcSourceUrl != "")
        srcSourceUrl = "&" + "Source=" + srcSourceUrl;
    targetUrl = elm.href + srcUrl + srcSourceUrl;
    if (isPortalTemplatePage(targetUrl))
        window.top.location.href = STSPageUrlValidation(targetUrl);
    else
        window.location.href = STSPageUrlValidation(targetUrl);
}
function GetGotoLinkUrl(elm) {
    if (elm.href == null)
        return null;
    var ch = elm.href.indexOf("?") >= 0 ? "&" : "?";
    var srcUrl = GetSource();

    if (srcUrl != null && srcUrl != "")
        srcUrl = ch + "Source=" + srcUrl;
    var targetUrl = elm.href + srcUrl;

    return targetUrl;
}
function GoToLink(elm) {
    var targetUrl = GetGotoLinkUrl(elm);

    if (targetUrl == null)
        return;
    var fNavigate = true;

    if (typeof window.top.SPUpdatePage !== 'undefined') {
        fNavigate = window.top.SPUpdatePage(targetUrl);
    }
    if (fNavigate) {
        if (elm.target === "_blank")
            window.open(targetUrl, "_blank");
        else if (isPortalTemplatePage(targetUrl))
            window.top.location.href = STSPageUrlValidation(targetUrl);
        else
            window.location.href = STSPageUrlValidation(targetUrl);
    }
}
function GoToLinkOrDialogNewWindow(elm) {
    if (elm.href == null)
        return;
    if (Boolean((ajaxNavigate.get_search()).match(RegExp("[?&]IsDlg=1"))))
        window.open(elm.href);
    else
        GoToLink(elm);
}
function GoToDiscussion(url) {
    var ch = url.indexOf("?") >= 0 ? "&" : "?";
    var srcUrl = GetSource();

    if (srcUrl != null && srcUrl != "")
        url += ch + "TopicsView=" + srcUrl;
    STSNavigate(url);
}
function GetCurrentEltStyle(element, cssStyle) {
    if (Boolean(element.currentStyle))
        return element.currentStyle[cssStyle];
    else {
        if (Boolean(window) && Boolean(window.getComputedStyle)) {
            var compStyle = window.getComputedStyle(element, null);

            if (Boolean(compStyle) && Boolean(compStyle.getPropertyValue)) {
                return compStyle.getPropertyValue(cssStyle);
            }
        }
    }
    return null;
}
function InsertNodeAfter(refNode, nodeToInsert) {
    if (refNode == null || refNode.parentNode == null || nodeToInsert == null)
        return;
    var pNode = refNode.parentNode;
    var nextSib = refNode.nextSibling;

    if (nextSib == null)
        pNode.appendChild(nodeToInsert);
    else
        pNode.insertBefore(nodeToInsert, nextSib);
}
function EEDecodeSpecialChars(str) {
    var decodedStr = str.replace(/&quot;/g, "\"");

    decodedStr = decodedStr.replace(/&gt;/g, ">");
    decodedStr = decodedStr.replace(/&lt;/g, "<");
    decodedStr = decodedStr.replace(/&#39;/g, "'");
    decodedStr = decodedStr.replace(/&amp;/g, "&");
    return decodedStr;
}
function ShowAttachmentRows() {
    var elm = document.getElementById('idAttachmentsTable');
    var elmAttachmentRow = document.getElementById('idAttachmentsRow');

    if (elmAttachmentRow != null) {
        if (elm == null || elm.rows.length == 0)
            elmAttachmentRow.style.display = 'none';
        else
            elmAttachmentRow.style.display = 'table-row';
    }
}
function PreventDefaultNavigation() {
    var evt = window.event;

    if (evt != null) {
        if (evt.preventDefault == null)
            evt.returnValue = false;
        else
            evt.preventDefault();
    }
}
function cancelDefault(evt) {
    if (typeof evt == "undefined" || evt == null) {
        evt = window.event;
    }
    if (!(typeof evt == "undefined" || evt == null)) {
        if (typeof evt.stopPropagation == "function")
            evt.stopPropagation();
        else
            evt.cancelBubble = true;
        if (typeof evt.preventDefault == "function")
            evt.preventDefault();
        else
            evt.returnValue = false;
    }
    return false;
}
function IsArray(input) {
    return typeof input == 'object' && input instanceof Array;
}
function IsNullOrUndefined(value) {
    return value == null || value == undefined;
}
function SetOpacity(element, value) {
    XUIHtml.SetOpacity(element, value);
}
function GetOpacity(element) {
    return XUIHtml.GetOpacity(element);
}
var XUIHtml;

function SP_JSONParse(jsonText) {
    var needsSecondPass = false;
    var retval = JSON.parse(jsonText, ReviveSerializedDate);

    if (needsSecondPass) {
        traverse(retval, ReviveSerializedDate);
    }
    return retval;
    function traverse(obj, func) {
        if (obj !== null && typeof obj === 'object') {
            for (var key in obj) {
                if (obj.hasOwnProperty(key)) {
                    traverse(obj[key], func);
                    obj[key] = func(key, obj[key]);
                }
            }
        }
    }
    function ReviveSerializedDate(key, value) {
        DetectJSONParseReviverBug(key, value);
        if (typeof value === 'string') {
            var regExResult = /^\/Date\((-?\d+\))\/$/g.exec(value);

            if (regExResult !== null) {
                var ticks = parseInt(regExResult[1]);

                return new Date(ticks);
            }
        }
        return value;
    }
    function DetectJSONParseReviverBug(key, value) {
        needsSecondPass = needsSecondPass || typeof value === "undefined" && /^\d+$/.test(key);
    }
}
function DeferCall() {
    if (arguments.length == 0)
        return null;
    var args = arguments;
    var fn = null;

    if (browseris.ie5up || browseris.nav6up) {
        eval("if (typeof(" + args[0] + ") == 'function') { fn = " + args[0] + "; }");
    }
    if (fn == null)
        return null;
    if (args.length == 1)
        return fn();
    else if (args.length == 2)
        return fn(args[1]);
    else if (args.length == 3)
        return fn(args[1], args[2]);
    else if (args.length == 4)
        return fn(args[1], args[2], args[3]);
    else if (args.length == 5)
        return fn(args[1], args[2], args[3], args[4]);
    else if (args.length == 6)
        return fn(args[1], args[2], args[3], args[4], args[5]);
    else if (args.length == 7)
        return fn(args[1], args[2], args[3], args[4], args[5], args[6]);
    else if (args.length == 8)
        return fn(args[1], args[2], args[3], args[4], args[5], args[6], args[7]);
    else if (args.length == 9)
        return fn(args[1], args[2], args[3], args[4], args[5], args[6], args[7], args[8]);
    else if (args.length == 10)
        return fn(args[1], args[2], args[3], args[4], args[5], args[6], args[7], args[8], args[9]);
    else {
        alert(Strings.STS.L_TooManyDefers_Text);
    }
    return null;
}
var LegalUrlChars;

function AdmBuildParam(stPattern) {
    var re;
    var i;

    for (i = 1; i < arguments.length; i++) {
        re = new RegExp("\\^" + String(i));
        stPattern = stPattern.replace(re, arguments[i]);
    }
    return stPattern;
}
function IndexOfIllegalCharInUrlLeafName(strLeafName) {
    for (var i = 0; i < strLeafName.length; i++) {
        var ch = strLeafName.charCodeAt(i);

        if (strLeafName.charAt(i) == '.' && (i == 0 || i == strLeafName.length - 1))
            return i;
        if (ch < 160 && (strLeafName.charAt(i) == '/' || !LegalUrlChars[ch]))
            return i;
    }
    return -1;
}
function IndexOfIllegalCharInUrlPath(strPath) {
    for (var i = 0; i < strPath.length; i++) {
        var ch = strPath.charCodeAt(i);

        if (ch < 160 && !LegalUrlChars[ch])
            return i;
    }
    return -1;
}
function UrlContainsIllegalStrings(strPath) {
    if (strPath.indexOf("..") >= 0 || strPath.indexOf("//") >= 0 || strPath.indexOf("./") >= 0 || strPath.indexOf("/.") >= 0 || strPath.indexOf(".") == 0 || strPath.lastIndexOf(".") == strPath.length - 1) {
        return true;
    }
    return false;
}
function UrlLeafNameValidate(source, args) {
    var strMessagePrefix = "";

    if (typeof source.MessagePrefix == "string") {
        strMessagePrefix = source.MessagePrefix;
    }
    else {
        strMessagePrefix = source.id;
    }
    var i = IndexOfIllegalCharInUrlLeafName(args.Value);

    if (i >= 0) {
        if (typeof source.errormessage == "string") {
            source.errormessage = AdmBuildParam(Strings.STS.L_ContainIllegalChar_Text, strMessagePrefix, args.Value.charAt(i));
        }
        args.IsValid = false;
    }
    else if (UrlContainsIllegalStrings(args.Value)) {
        if (typeof source.errormessage == "string") {
            source.errormessage = AdmBuildParam(Strings.STS.L_ContainIllegalString_Text, strMessagePrefix);
        }
        args.IsValid = false;
    }
    else {
        args.IsValid = true;
    }
}
function UrlPathValidate(source, args) {
    var strMessagePrefix = "";

    if (typeof source.MessagePrefix == "string") {
        strMessagePrefix = source.MessagePrefix;
    }
    else {
        strMessagePrefix = source.id;
    }
    var i = IndexOfIllegalCharInUrlPath(args.Value);

    if (i >= 0) {
        if (typeof source.errormessage == "string") {
            source.errormessage = AdmBuildParam(Strings.STS.L_ContainIllegalChar_Text, strMessagePrefix, args.Value.charAt(i));
        }
        args.IsValid = false;
    }
    else if (UrlContainsIllegalStrings(args.Value)) {
        if (typeof source.errormessage == "string") {
            source.errormessage = AdmBuildParam(Strings.STS.L_ContainIllegalString_Text, strMessagePrefix);
        }
        args.IsValid = false;
    }
    else {
        args.IsValid = true;
    }
}
function IsCheckBoxListSelected(checkboxlist) {
    if (checkboxlist == null)
        return false;
    var len = checkboxlist.length;

    if (len == null) {
        return checkboxlist.checked;
    }
    else {
        for (var i = 0; i < len; i++) {
            var cb = checkboxlist[i];

            if (cb.checked) {
                return true;
            }
        }
    }
    return false;
}
function STSValidatorEnable(val, bEnable, bSilent) {
    var objVal = document.getElementById(val);

    if (objVal == null)
        return;
    if (bSilent || Boolean(objVal.getAttribute("AlwaysEnableSilent"))) {
        objVal.enabled = bEnable == true;
    }
    else {
        if (typeof ValidatorEnable == "function")
            ValidatorEnable(objVal, bEnable);
    }
}
function encodeScriptQuote(str) {
    var strIn = new String(str);
    var strOut = [];
    var ix = 0;
    var max = strIn.length;

    for (ix = 0; ix < max; ix++) {
        var ch = strIn.charAt(ix);

        strOut.push(ch == '\'' ? "%27" : ch);
    }
    return strOut.join('');
}
function STSHtmlEncode(str) {
    if (null == str)
        return "";
    var strIn = new String(str);
    var strOut = [];
    var ix = 0;
    var max = strIn.length;

    for (ix = 0; ix < max; ix++) {
        var ch = strIn.charAt(ix);

        switch (ch) {
        case '<':
            strOut.push("&lt;");
            break;
        case '>':
            strOut.push("&gt;");
            break;
        case '&':
            strOut.push("&amp;");
            break;
        case '\"':
            strOut.push("&quot;");
            break;
        case '\'':
            strOut.push("&#39;");
            break;
        default:
            strOut.push(ch);
            break;
        }
    }
    return strOut.join('');
}
function STSHtmlDecode(str) {
    if (null == str)
        return "";
    var rRegexs = [/\&lt;/g, /\&gt;/g, /\&quot;/g, /\&#39;/g, /\&#58;/g, /\&#123;/g, /\&#125;/g, /\&amp;/g];
    var rSubtitutes = ["<", ">", "\"", "'", ":", "{", "}", "&"];
    var strOut = [];
    var ix = 0;
    var len = rRegexs.length;

    for (ix = 0; ix < len; ix++) {
        var firstAmpPos = str.indexOf("&");

        if (-1 != firstAmpPos) {
            if (0 < firstAmpPos) {
                strOut.push(str.substr(0, firstAmpPos));
                str = str.substr(firstAmpPos);
            }
            str = str.replace(rRegexs[ix], rSubtitutes[ix]);
        }
        else {
            break;
        }
    }
    strOut.push(str);
    return strOut.join('');
}
function StAttrQuote(st) {
    st = st.toString();
    st = st.replace(/&/g, '&amp;');
    st = st.replace(/\"/g, '&quot;');
    st = st.replace(/\r/g, '&#13;');
    return '"' + st + '"';
}
function STSScriptEncode(str) {
    if (null == str || typeof str == 'undefined')
        return "";
    var strIn = new String(str);
    var strOut = [];
    var ix = 0;
    var max = strIn.length;

    for (ix = 0; ix < max; ix++) {
        var charCode = strIn.charCodeAt(ix);

        if (charCode > 0x0fff) {
            strOut.push("\\u" + (charCode.toString(16)).toUpperCase());
        }
        else if (charCode > 0x00ff) {
            strOut.push("\\u0" + (charCode.toString(16)).toUpperCase());
        }
        else if (charCode > 0x007f) {
            strOut.push("\\u00" + (charCode.toString(16)).toUpperCase());
        }
        else {
            var c = strIn.charAt(ix);

            switch (c) {
            case '\n':
                strOut.push("\\n");
                break;
            case '\r':
                strOut.push("\\r");
                break;
            case '\"':
                strOut.push("\\u0022");
                break;
            case '%':
                strOut.push("\\u0025");
                break;
            case '&':
                strOut.push("\\u0026");
                break;
            case '\'':
                strOut.push("\\u0027");
                break;
            case '(':
                strOut.push("\\u0028");
                break;
            case ')':
                strOut.push("\\u0029");
                break;
            case '+':
                strOut.push("\\u002b");
                break;
            case '/':
                strOut.push("\\u002f");
                break;
            case '<':
                strOut.push("\\u003c");
                break;
            case '>':
                strOut.push("\\u003e");
                break;
            case '\\':
                strOut.push("\\\\");
                break;
            default:
                strOut.push(c);
            }
            ;
        }
    }
    return strOut.join('');
}
function STSScriptEncodeWithQuote(str) {
    return '"' + STSScriptEncode(str) + '"';
}
var recycleBinEnabled;
var cascadeDeleteWarningMessage;
var bIsFileDialogView;
var g_ViewIdToViewCounterMap;
var g_ctxDict;

function NotifyBrowserOfAsyncUpdate(container) {
    var iframeName = '__spAjaxIframe';
    var iframe = document.getElementById(iframeName);

    if (iframe == null) {
        iframe = document.createElement('IFRAME');
        iframe.name = (iframe.id = iframeName);
        iframe.width = (iframe.height = "0");
        iframe.src = 'about:blank';
        iframe.style.display = 'none';
        document.body.appendChild(iframe);
    }
    iframe.contentWindow.location.replace('/_layouts/15/images/blank.gif');
}
function IsSafeHrefAlert(href, fAllowRelativeLinks) {
    if (href.match(new RegExp("^[^?]{257}")) != null) {
        alert(Strings.STS.L_UrlTooLongError_Text);
        return false;
    }
    else if (IsSafeHref(href)) {
        return true;
    }
    else {
        if (href.match(new RegExp("^[a-zA-Z]*:")) != null) {
            alert(Strings.STS.L_UnknownProtocolUrlError_Text);
            return false;
        }
        else if (true == fAllowRelativeLinks) {
            return true;
        }
        else {
            alert(Strings.STS.L_UnknownProtocolUrlError_Text);
            return false;
        }
    }
}
function UpdateAccessibilityUI() {
    var t1 = document.getElementById("TurnOnAccessibility");
    var t2 = document.getElementById("TurnOffAccessibility");

    if (IsAccessibilityFeatureEnabled()) {
        if (t1 != null)
            t1.style.display = "none";
        if (t2 != null)
            t2.style.display = "";
    }
    else {
        if (t1 != null)
            t1.style.display = "";
        if (t2 != null)
            t2.style.display = "none";
    }
}
function SetIsAccessibilityFeatureEnabled(f) {
    if (f)
        document.cookie = "WSS_AccessibilityFeature=true;path=/;";
    else
        document.cookie = "WSS_AccessibilityFeature=false;path=/;";
    var hiddenAnchor = document.getElementById("HiddenAnchor");
    var evt;

    if (browseris.ie)
        evt = {
            "srcElement": hiddenAnchor,
            "fakeEvent": 1,
            "enableStatus": f
        };
    else
        evt = {
            "target": hiddenAnchor,
            "fakeEvent": 1,
            "enableStatus": f
        };
    if (hiddenAnchor == null || typeof hiddenAnchor.onclick == 'undefined' || hiddenAnchor.onclick == null)
        return;
    hiddenAnchor.onclick(evt);
}
function DeleteCookie(sName) {
    document.cookie = sName + "=; expires=Thu, 01-Jan-70 00:00:01 GMT";
}
function GetCookie(sName) {
    return GetCookieEx(sName, window);
}
function GetCookieEx(sName, wnd) {
    var aCookie = wnd.document.cookie.split("; ");

    for (var i = 0; i < aCookie.length; i++) {
        var aCrumbStr = aCookie[i];
        var aCrumb = aCrumbStr.split("=");

        if (sName == aCrumb[0]) {
            if (aCrumb.length > 1)
                return unescapeProperly(aCrumb[1]);
            else
                return null;
        }
    }
    return null;
}
function SetCookie(sName, value) {
    SetCookieEx(sName, value, false, window);
}
function SetCookieEx(sName, value, isGlobal, wnd) {
    var c = sName + (value ? "=true" : "=false");
    var p = isGlobal ? ";path=/" : "";

    wnd.document.cookie = c + p;
}
function IsAccessibilityFeatureEnabled() {
    return GetCookie("WSS_AccessibilityFeature") == "true";
}
function escapeForSync(str) {
    var strOut = "";
    var ix = 0;
    var bDoingUnicode = false;
    var strSyncEscaped = "\\&|[]";

    for (ix = 0; ix < str.length; ix++) {
        var charCode = str.charCodeAt(ix);
        var curChar = str.charAt(ix);

        if (bDoingUnicode && charCode <= 0x7f) {
            strOut += "]";
            bDoingUnicode = false;
        }
        if (!bDoingUnicode && charCode > 0x7f) {
            strOut += "[";
            bDoingUnicode = true;
        }
        if (strSyncEscaped.indexOf(curChar) >= 0)
            strOut += "|";
        if (charCode >= 97 && charCode <= 122 || charCode >= 65 && charCode <= 90 || charCode >= 48 && charCode <= 57) {
            strOut += curChar;
        }
        else if (charCode <= 0x0f) {
            strOut += "%0" + (charCode.toString(16)).toUpperCase();
        }
        else if (charCode <= 0x7f) {
            strOut += "%" + (charCode.toString(16)).toUpperCase();
        }
        else if (charCode <= 0x00ff) {
            strOut += "00" + (charCode.toString(16)).toUpperCase();
        }
        else if (charCode <= 0x0fff) {
            strOut += "0" + (charCode.toString(16)).toUpperCase();
        }
        else {
            strOut += (charCode.toString(16)).toUpperCase();
        }
    }
    if (bDoingUnicode)
        strOut += "]";
    return strOut;
}
var g_rgdwchMinEncoded;

function Vutf8ToUnicode(rgBytes) {
    var ix = 0;
    var strResult = "";
    var dwch, wch, uch;
    var nTrailBytes, nTrailBytesOrig;

    while (ix < rgBytes.length) {
        if (rgBytes[ix] <= 0x007f) {
            strResult += String.fromCharCode(rgBytes[ix++]);
        }
        else {
            uch = rgBytes[ix++];
            nTrailBytes = Boolean(uch & 0x20) ? Boolean(uch & 0x10) ? 3 : 2 : 1;
            nTrailBytesOrig = nTrailBytes;
            dwch = uch & 0xff >>> 2 + nTrailBytes;
            while (Boolean(nTrailBytes) && ix < rgBytes.length) {
                --nTrailBytes;
                uch = rgBytes[ix++];
                if (uch == 0) {
                    return strResult;
                }
                if ((uch & 0xC0) != 0x80) {
                    strResult += '?';
                    break;
                }
                dwch = dwch << 6 | uch & 0x003f;
            }
            if (Boolean(nTrailBytes)) {
                strResult += '?';
                break;
            }
            if (dwch < g_rgdwchMinEncoded[nTrailBytesOrig]) {
                strResult += '?';
                break;
            }
            else if (dwch <= 0xffff) {
                strResult += String.fromCharCode(dwch);
            }
            else if (dwch <= 0x10ffff) {
                dwch -= SURROGATE_OFFSET;
                strResult += String.fromCharCode(HIGH_SURROGATE_BITS | dwch >>> 10);
                strResult += String.fromCharCode(LOW_SURROGATE_BITS | dwch & 0x003FF);
            }
            else {
                strResult += '?';
            }
        }
    }
    return strResult;
}
function unescapeProperlyInternal(str) {
    if (str == null)
        return "null";
    var ix = 0, ixEntity = 0;
    var strResult = "";
    var rgUTF8Bytes = [];
    var ixUTF8Bytes = 0;
    var hexString, hexCode;

    while (ix < str.length) {
        if (str.charAt(ix) == '%') {
            if (str.charAt(++ix) == 'u') {
                hexString = "";
                for (ixEntity = 0; ixEntity < 4 && ix < str.length; ++ixEntity) {
                    hexString += str.charAt(++ix);
                }
                while (hexString.length < 4) {
                    hexString += '0';
                }
                hexCode = parseInt(hexString, 16);
                if (isNaN(hexCode)) {
                    strResult += '?';
                }
                else {
                    strResult += String.fromCharCode(hexCode);
                }
            }
            else {
                hexString = "";
                for (ixEntity = 0; ixEntity < 2 && ix < str.length; ++ixEntity) {
                    hexString += str.charAt(ix++);
                }
                while (hexString.length < 2) {
                    hexString += '0';
                }
                hexCode = parseInt(hexString, 16);
                if (isNaN(hexCode)) {
                    if (Boolean(ixUTF8Bytes)) {
                        strResult += Vutf8ToUnicode(rgUTF8Bytes);
                        ixUTF8Bytes = 0;
                        rgUTF8Bytes.length = ixUTF8Bytes;
                    }
                    strResult += '?';
                }
                else {
                    rgUTF8Bytes[ixUTF8Bytes++] = hexCode;
                }
            }
        }
        else {
            if (Boolean(ixUTF8Bytes)) {
                strResult += Vutf8ToUnicode(rgUTF8Bytes);
                ixUTF8Bytes = 0;
                rgUTF8Bytes.length = ixUTF8Bytes;
            }
            strResult += str.charAt(ix++);
        }
    }
    if (Boolean(ixUTF8Bytes)) {
        strResult += Vutf8ToUnicode(rgUTF8Bytes);
        ixUTF8Bytes = 0;
        rgUTF8Bytes.length = ixUTF8Bytes;
    }
    return strResult;
}
function unescapeProperly(str) {
    var strResult = null;

    try {
        strResult = decodeURIComponent(str);
    }
    catch (e) {
        strResult = unescapeProperlyInternal(str);
    }
    return strResult;
}
function navigateMailToLink(strBody) {
    window.location.href = 'mailto:?body=' + escapeProperly(strBody);
}
function navigateMailToLinkWithMessage(strTo, strBody) {
    window.location.href = 'mailto:' + escapeProperly(strTo) + '?body=' + escapeProperly(escapeProperlyCoreCore(strBody, false, false, true));
}
function newBlogPostOnClient(strProviderId, strBlogUrl, strBlogName) {
    var stsOpen;
    var fRet;

    stsOpen = StsOpenEnsureEx2("SharePoint.OpenDocuments.3");
    if (stsOpen == null) {
        alert(Strings.STS.L_NewBlogPost_Text);
        return;
    }
    try {
        if (typeof stsOpen.NewBlogPost != "undefined")
            fRet = stsOpen.NewBlogPost(strProviderId, strBlogUrl, strBlogName);
    }
    catch (e) {
        alert(Strings.STS.L_NewBlogPostFailed_Text);
    }
}
function GetUrlFromWebUrlAndWebRelativeUrl(webUrl, webRelativeUrl) {
    var retUrl = webUrl == null || webUrl.length <= 0 ? "/" : webUrl;

    if (retUrl.charAt(retUrl.length - 1) != "/") {
        retUrl += "/";
    }
    retUrl += webRelativeUrl;
    return retUrl;
}
var g_updateFormDigestPageLoaded;

function UpdateFormDigest(serverRelativeWebUrl, updateInterval) {
    try {
        if (g_updateFormDigestPageLoaded == null || typeof g_updateFormDigestPageLoaded != "object") {
            return;
        }
        var now = new Date();

        if (now.getTime() - g_updateFormDigestPageLoaded.getTime() < updateInterval) {
            return;
        }
        if (serverRelativeWebUrl == null || serverRelativeWebUrl.length <= 0) {
            return;
        }
        var formDigestElement = (document.getElementsByName("__REQUESTDIGEST"))[0];

        if (formDigestElement == null || formDigestElement.tagName.toLowerCase() != "input" || formDigestElement.type.toLowerCase() != "hidden" || formDigestElement.value == null || formDigestElement.value.length <= 0) {
            return;
        }
        var request = new XMLHttpRequest();

        if (request == null) {
            return;
        }
        request.open("POST", GetUrlFromWebUrlAndWebRelativeUrl(serverRelativeWebUrl, "_vti_bin/sites.asmx"), false);
        request.setRequestHeader("Content-Type", "text/xml");
        request.setRequestHeader("SOAPAction", "http://schemas.microsoft.com/sharepoint/soap/GetUpdatedFormDigest");
        request.send("<?xml version=\"1.0\" encoding=\"utf-8\"?>" + "<soap:Envelope xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\">" + "  <soap:Body>" + "    <GetUpdatedFormDigest xmlns=\"http://schemas.microsoft.com/sharepoint/soap/\" />" + "  </soap:Body>" + "</soap:Envelope>");
        var responseText = request.responseText;

        if (responseText == null || responseText.length <= 0) {
            return;
        }
        var startTag = '<GetUpdatedFormDigestResult>';
        var endTag = '</GetUpdatedFormDigestResult>';
        var startTagIndex = responseText.indexOf(startTag);
        var endTagIndex = responseText.indexOf(endTag, startTagIndex + startTag.length);
        var newFormDigest = null;

        if (startTagIndex >= 0 && endTagIndex > startTagIndex) {
            newFormDigest = responseText.substring(startTagIndex + startTag.length, endTagIndex);
        }
        if (newFormDigest == null || newFormDigest.length <= 0) {
            return;
        }
        var oldValue = formDigestElement.value;

        formDigestElement.value = newFormDigest;
        g_updateFormDigestPageLoaded = new Date();
    }
    catch (ex) { }
}
function IsSupportedFirefoxOnWin() {
    return browseris.win && browseris.firefox3up;
}
function IsSupportedChromeOnWin() {
    return browseris.win && browseris.chrome;
}
function IsSupportedNPApiBrowserOnWin() {
    return IsSupportedChromeOnWin() || IsSupportedFirefoxOnWin();
}
function IsNPAPIOnWinPluginInstalled(strMimeType) {
    return Boolean(navigator.mimeTypes) && navigator.mimeTypes[strMimeType] && navigator.mimeTypes[strMimeType].enabledPlugin;
}
function CreateNPApiOnWindowsPlugin(strMimeType) {
    var plugin = null;

    if (IsSupportedNPApiBrowserOnWin()) {
        try {
            plugin = document.getElementById(strMimeType);
            if (!Boolean(plugin) && IsNPAPIOnWinPluginInstalled(strMimeType)) {
                var pluginNode = document.createElement("object");

                pluginNode.id = strMimeType;
                pluginNode.type = strMimeType;
                pluginNode.width = "0";
                pluginNode.height = "0";
                pluginNode.style.setProperty("visibility", "hidden", "");
                document.body.appendChild(pluginNode);
                plugin = document.getElementById(strMimeType);
            }
        }
        catch (e) {
            plugin = null;
        }
    }
    return plugin;
}
function IsSupportedMacBrowser() {
    return browseris.mac && (browseris.firefox3up || browseris.safari3up || browseris.chrome);
}
function IsBrowserPluginInstalled(mimeType) {
    var hasMimeType = Boolean(navigator.mimeTypes) && navigator.mimeTypes[mimeType];

    if (hasMimeType) {
        var type = navigator.mimeTypes[mimeType];

        return !!type.enabledPlugin;
    }
    return false;
}
function IsMacPluginInstalled() {
    var webkitPluginInstalled = IsBrowserPluginInstalled("application/x-sharepoint-webkit");
    var npapiPluginInstalled = IsBrowserPluginInstalled("application/x-sharepoint");

    if (browseris.safari3up && webkitPluginInstalled)
        return true;
    return npapiPluginInstalled;
}
function CreateMacPlugin() {
    var plugin = null;

    if (IsSupportedMacBrowser()) {
        plugin = document.getElementById("macSharePointPlugin");
        if (plugin == null && IsMacPluginInstalled()) {
            var pluginMimeType = null;

            if (browseris.safari3up && IsBrowserPluginInstalled("application/x-sharepoint-webkit"))
                pluginMimeType = "application/x-sharepoint-webkit";
            else
                pluginMimeType = "application/x-sharepoint";
            var pluginNode = document.createElement("object");

            pluginNode.id = "macSharePointPlugin";
            pluginNode.type = pluginMimeType;
            pluginNode.width = "0";
            pluginNode.height = "0";
            pluginNode.style.visibility = "hidden";
            document.body.appendChild(pluginNode);
            plugin = document.getElementById("macSharePointPlugin");
        }
    }
    return plugin;
}
var g_objStssync;

function GetStssyncHandler(szVersion) {
    if (!IsSupportedMacBrowser()) {
        try {
            g_objStssync = new ActiveXObject("SharePoint.StssyncHandler" + szVersion);
        }
        catch (e) {
            g_objStssync = null;
        }
    }
    else {
        g_objStssync = CreateMacPlugin();
    }
}
function GetStssyncData(strType, strTextDefault, strImgPathDefault, strPrefix) {
    var stsSyncData = null;

    if (document.cookie.indexOf("stsSyncAppName") == -1 && document.cookie.indexOf("stsSyncIconPath") == -1) {
        if (IsSupportedMacBrowser()) {
            var plugin = GetStssyncHandler("");

            if (plugin == null || typeof plugin.StssyncEnabled == 'undefined' || !plugin.StssyncEnabled) {
                document.cookie = "stsSyncAppName=0;path=/";
                document.cookie = "stsSyncIconPath=0;path=/";
                return stsSyncData;
            }
        }
        if (browseris.ie5up && browseris.win32 || IsSupportedMacBrowser()) {
            var strAppName;
            var strIconName;

            if (strType != "")
                GetStssyncHandler(".3");
            if (!g_objStssync) {
                if (strType != "" && strType != "calendar" && strType != "contacts") {
                    document.cookie = "stsSyncAppName=0;path=/";
                    document.cookie = "stsSyncIconPath=0;path=/";
                    return stsSyncData;
                }
                GetStssyncHandler(".2");
                if (!g_objStssync || typeof g_objStssync.GetStssyncAppName == 'undefined' || !Boolean(strAppName = g_objStssync.GetStssyncAppName())) {
                    document.cookie = "stsSyncAppName=0;path=/";
                    document.cookie = "stsSyncIconPath=0;path=/";
                    return stsSyncData;
                }
            }
            else {
                if (typeof g_objStssync.GetStssyncAppNameForType == 'undefined' || !Boolean(strAppName = g_objStssync.GetStssyncAppNameForType(strType))) {
                    document.cookie = "stsSyncAppName=0;path=/";
                    document.cookie = "stsSyncIconPath=0;path=/";
                    return stsSyncData;
                }
            }
            document.cookie = "stsSyncAppName=" + escapeProperly(strAppName) + ";path=/";
            try {
                if (typeof g_objStssync.GetStssyncIconName == 'undefined')
                    throw 0;
                strIconName = g_objStssync.GetStssyncIconName();
                strIconName = strPrefix + strIconName;
                document.cookie = "stsSyncIconPath=" + escapeProperly(strIconName) + ";path=/";
            }
            catch (e) {
                document.cookie = "stsSyncIconPath=0;path=/";
                strIconName = strImgPathDefault;
            }
        }
        else {
            strAppName = strTextDefault;
            strIconName = strImgPathDefault;
            document.cookie = "stsSyncAppName=" + escapeProperly(strTextDefault) + ";path=/";
            document.cookie = "stsSyncIconPath=" + escapeProperly(strImgPathDefault) + ";path=/";
        }
    }
    else {
        strAppName = GetCookie("stsSyncAppName");
        strIconName = GetCookie("stsSyncIconPath");
        if (strAppName == '0') {
            return stsSyncData;
        }
    }
    strAppName = Strings.STS.L_LinkToBefore_Text + strAppName;
    stsSyncData = new Object();
    stsSyncData.BtnText = strAppName;
    stsSyncData.BtnImagePath = strIconName;
    return stsSyncData;
}
function GetStssyncAppName(strDefault) {
    var stsSyncData = GetStssyncData("", strDefault, "", "");

    return stsSyncData.BtnText;
}
function makeAbsUrl(strUrl) {
    if (strUrl.length > 0 && "/" == strUrl.substr(0, 1)) {
        strUrl = window.location.protocol + "//" + window.location.host + strUrl;
    }
    return strUrl;
}
function ExportHailStorm(type, weburl, guid, webname, listname, viewurl, passport, listrooturl, folderurl, folderid) {
    var strAppName = GetCookie("stsSyncAppName");
    var strIconName = GetCookie("stsSyncIconPath");

    if (strAppName != null && strAppName != '0') {
        var maxLinkLength = 500;
        var maxNameLength = 20;
        var link = "stssync://sts/?ver=1.1" + "&type=" + escapeProperly(type) + "&cmd=add-folder" + "&base-url=" + escapeForSync(weburl) + "&list-url=" + escapeForSync("/" + (makeAbsUrl(viewurl)).substr(weburl.length + 1) + "/") + "&guid=" + escapeProperly(guid);

        if (typeof offlineBtnUser != "undefined")
            link += "&user-id=" + offlineBtnUser;
        var names = "&site-name=" + escapeForSync(webname) + "&list-name=" + escapeForSync(listname);
        var context = "";

        if (Boolean(folderurl))
            context += "&folder-url=" + escapeForSync("/" + folderurl.substr(listrooturl.length + 1));
        if (Boolean(folderid))
            context += "&folder-id=" + folderid;
        if (link.length + names.length + context.length > maxLinkLength && (webname.length > maxNameLength || listname.length > maxNameLength)) {
            if (webname.length > maxNameLength)
                webname = webname.substring(0, maxNameLength - 1) + "...";
            if (listname.length > maxNameLength)
                listname = listname.substring(0, maxNameLength - 1) + "...";
            names = "&site-name=" + escapeForSync(webname) + "&list-name=" + escapeForSync(listname);
        }
        link = link + names + context;
        if (link.length > maxLinkLength)
            alert(Strings.STS.L_StssyncTooLong_Text);
        else {
            try {
                window.location.href = link;
            }
            catch (e) { }
        }
    }
}
var g_objDiagramLaunch;

function GetDiagramLaunchInstalled() {
    var strAppName = '';

    if (document.cookie.indexOf("digInstalled") == -1) {
        try {
            g_objDiagramLaunch = new ActiveXObject("DiagramLaunch.DiagramLauncher");
            if (typeof g_objDiagramLaunch.EnsureDiagramApplication != "undefined")
                strAppName = g_objDiagramLaunch.EnsureDiagramApplication();
            document.cookie = "digInstalled=" + escapeProperly(strAppName) + ";";
        }
        catch (e) {
            g_objDiagramLaunch = null;
            document.cookie = "digInstalled=0;";
        }
    }
    else {
        strAppName = GetCookie("digInstalled");
        if (strAppName == '0')
            strAppName = '';
    }
    return strAppName;
}
var g_objProjectTaskLaunch;

function GetProjectTaskLaunchInstalled() {
    if (document.cookie.indexOf("projInstalled") == -1) {
        var strAppName = '';

        try {
            g_objProjectTaskLaunch = new ActiveXObject("WinProj.Activator");
            if (typeof g_objProjectTaskLaunch.EnsureTaskApplication != 'undefined')
                strAppName = g_objProjectTaskLaunch.EnsureTaskApplication();
            document.cookie = "projInstalled=" + escapeProperly(strAppName) + ";";
        }
        catch (e) {
            document.cookie = "projInstalled=0;";
            g_objProjectTaskLaunch = null;
        }
    }
    else {
        strAppName = GetCookie("projInstalled");
        if (strAppName == '0')
            strAppName = '';
    }
    return strAppName;
}
var g_expDatabase;

function GetDataBaseInstalled() {
    var databaseBtnText = '';
    var databaseBtnDesc = '';

    if (document.cookie.indexOf("databaseBtnText") == -1 || document.cookie.indexOf("databaseBtnDesc") == -1) {
        try {
            g_expDatabase = new ActiveXObject('SharePoint.ExportDatabase');
            if (Boolean(g_expDatabase) && typeof g_expDatabase.IsDBProgramInstalled != "undefined" && g_expDatabase.IsDBProgramInstalled()) {
                if (typeof g_expDatabase.MenuTitle != 'undefined')
                    document.cookie = "databaseBtnText=" + escapeProperly(g_expDatabase.MenuTitle) + ";";
                if (typeof g_expDatabase.MenuDescription != 'undefined')
                    document.cookie = "databaseBtnDesc=" + escapeProperly(g_expDatabase.MenuDescription) + ";";
            }
            else {
                document.cookie = "databaseBtnText=" + '0' + ";";
                document.cookie = "databaseBtnDesc=" + '0' + ";";
                g_expDatabase = null;
            }
        }
        catch (e) {
            document.cookie = "databaseBtnText=" + '0' + ";";
            document.cookie = "databaseBtnDesc=" + '0' + ";";
            g_expDatabase = null;
        }
    }
    else {
        databaseBtnText = GetCookie("databaseBtnText");
        databaseBtnDesc = GetCookie("databaseBtnDesc");
        if (databaseBtnText != '0' && databaseBtnText != '0') {
            var dummyExpDatabase = new Object();

            dummyExpDatabase.MenuTitle = databaseBtnText;
            dummyExpDatabase.MenuDescription = databaseBtnDesc;
            return dummyExpDatabase;
        }
        else {
            g_expDatabase = null;
        }
    }
    return g_expDatabase;
}
var g_ssImporterObj;
var g_fSSImporter;

function EnsureSSImportInner() {
    if (browseris.ie5up && browseris.win32) {
        try {
            g_ssImporterObj = new ActiveXObject("SharePoint.SpreadsheetLauncher.2");
            if (g_ssImporterObj)
                g_fSSImporter = true;
        }
        catch (e) {
            try {
                g_ssImporterObj = new ActiveXObject("SharePoint.SpreadsheetLauncher.1");
                if (g_ssImporterObj)
                    g_fSSImporter = true;
            }
            catch (e) {
                g_fSSImporter = false;
            }
        }
    }
    else if (IsSupportedMacBrowser()) {
        g_ssImporterObj = CreateMacPlugin();
        if (g_ssImporterObj)
            g_fSSImporter = true;
        else
            g_fSSImporter = false;
    }
}
function EnsureSSImporter(byPassCookies) {
    byPassCookies = typeof byPassCookies == undefined ? false : byPassCookies;
    if (document.cookie.indexOf("EnsureSSImporter") == -1 || byPassCookies) {
        EnsureSSImportInner();
        document.cookie = "EnsureSSImporter=" + String(g_fSSImporter) + ";";
    }
    else {
        g_fSSImporter = GetCookie("EnsureSSImporter") == "true" ? true : false;
    }
    return g_fSSImporter;
}
function GetThemedImageUrl(FileName) {
    return GetThemedImageUrl_Core(FileName, '/_layouts/15/images/');
}
function GetThemedLocalizedImageUrl(FileName) {
    var localizedImagePath = "/_layouts/15/" + Strings.STS.L_Language_Text + "/images/";

    return GetThemedImageUrl_Core(FileName, localizedImagePath);
}
function GetThemedImageUrl_Core(FileName, FallbackImagePath) {
    var imageUrl = FallbackImagePath + FileName;
    var pageContextInfo = window['_spPageContextInfo'];

    if (pageContextInfo != null) {
        var themedCssFolderUrl = pageContextInfo['themedCssFolderUrl'];
        var themedImageFileNames = pageContextInfo['themedImageFileNames'];
        var themedImageFileName = null;

        if (themedImageFileNames != null) {
            themedImageFileName = themedImageFileNames[FileName];
        }
        if (themedCssFolderUrl != null && themedCssFolderUrl.length > 0 && themedImageFileName != null) {
            imageUrl = themedCssFolderUrl + '/' + themedImageFileName;
        }
    }
    return GetImageUrlWithRevision(imageUrl);
}
function GetImageUrlWithRevision(imageUrl) {
    return imageUrl.search(/[?]/) > -1 ? imageUrl : imageUrl + "?" + "rev=23";
}
function ShowHideSection(sectionid, imgid) {
    var group = document.getElementById(sectionid);
    var img = document.getElementById(imgid);

    if (group == null)
        return;
    if (group.style.display != "none") {
        group.style.display = "none";
        img.src = GetThemedImageUrl("commentexpand12.png");
    }
    else {
        group.style.display = "";
        img.src = GetThemedImageUrl("commentcollapse12.png");
    }
}
function ShowSection(sectionid, imgid) {
    var group = document.getElementById(sectionid);
    var img = document.getElementById(imgid);

    if (group == null)
        return;
    if (group.style.display == "none") {
        group.style.display = "";
        img.src = GetThemedImageUrl("commentcollapse12.png");
    }
}
function ShowHideInputFormSection(sectionid, bShow) {
    var e = document.getElementById(sectionid);

    if (e != null)
        e.style.display = bShow ? "" : "none";
    for (var i = 1; i < 3; i++) {
        e = document.getElementById(sectionid + "_tablerow" + String(i));
        if (e != null)
            e.style.display = bShow ? "" : "none";
    }
}
function ShowHideInputFormControl(id, bHide, bDisableValidators, bSilent) {
    var displaySetting = "";

    if (bHide == true) {
        displaySetting = "none";
    }
    var validators = eval(id + '_validators');
    var i = 0;

    if (validators != null) {
        for (i = 0; i < validators.length; i++) {
            STSValidatorEnable(validators[i], !bDisableValidators, bSilent);
        }
    }
    for (i = 1; i <= 5; i++) {
        var rowId = id + "_tablerow" + String(i);
        var row = document.getElementById(rowId);

        if (row != null && !browseris.mac) {
            row.style.display = displaySetting;
        }
    }
}
function HideMenuControl(menuControlId) {
    if (typeof menuControlId == "undefined" || menuControlId == null)
        return;
    var menu = document.getElementById(menuControlId);

    if (typeof menu == "undefined" || menu == null)
        return;
    var menuItems = menu.getElementsByTagName("ie:menuitem");

    if (typeof menuItems == "undefined" || menuItems == null)
        return;
    for (var i = 0; i < menuItems.length; i++) {
        var menuItem = menuItems[i];
        var hiddenScript = menuItem.getAttribute("hidden");

        if (typeof hiddenScript == "undefined" || hiddenScript == null || !eval(hiddenScript))
            return;
    }
    menu.style.display = 'none';
}
function SetControlDisabledStatus(obj, disabledStatus) {
    try {
        if (Boolean(obj.setAttribute))
            obj.setAttribute('disabled', String(disabledStatus));
        if (!disabledStatus && Boolean(obj.removeAttribute))
            obj.removeAttribute('disabled');
    }
    catch (e) { }
}
function SetControlDisabledStatusRecursively(obj, disabledStatus) {
    if (obj == null)
        return;
    SetControlDisabledStatus(obj, disabledStatus);
    var objChildren = obj.childNodes;

    for (var i = 0; objChildren.length > i; i++) {
        SetControlDisabledStatusRecursively(objChildren[i], disabledStatus);
    }
}
function SetChildControlsDisabledStatus(obj, disabledStatus) {
    var objChildren = obj.childNodes;

    for (var i = 0; i < objChildren.length; i++) {
        SetControlDisabledStatusRecursively(objChildren[i], disabledStatus);
    }
}
var g_PNGImageIds;
var g_PNGImageSources;

function displayPNGImage(id, src, width, height, alt) {
    if (g_PNGImageIds == null)
        g_PNGImageIds = [];
    if (g_PNGImageSources == null)
        g_PNGImageSources = [];
    var style = null;

    document.write("<IMG id='" + id + "' ");
    if (Boolean(width) && width > 0)
        document.write("width='" + String(width) + "' ");
    if (Boolean(height) && height > 0)
        document.write("height='" + String(height) + "' ");
    document.write("alt='" + alt + "' ");
    if (Boolean(style))
        document.write("style='" + style + "' ");
    document.write(" src='" + src + "' />");
    g_PNGImageIds.push(id);
    g_PNGImageSources.push(src);
}
function ProcessPNGImages() {
    var useFilter = browseris.ie && browseris.ie55up && browseris.verIEFull < 7.0;

    if (g_PNGImageIds != null && useFilter) {
        for (var i = 0; i < g_PNGImageIds.length; i++) {
            var img = document.getElementById(g_PNGImageIds[i]);

            if (img != null && g_PNGImageSources[i] != null) {
                img.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src=" + g_PNGImageSources[i] + "),sizingMethod=scale);";
                img.src = "/_layouts/15/images/blank.gif?rev=23";
            }
        }
    }
}
function CtxSetIsWebEditorPreview(num) {
    ctx.isWebEditorPreview = num;
}
function CtxSetCurrentUserId(strUserId) {
    ctx.CurrentUserId = strUserId;
}
function CtxSetIsForceCheckout(fForce) {
    ctx.isForceCheckout = fForce;
}
function BasePermissions() {
}
var CTXTYPE_EDITMENU;
var CTXTYPE_VIEWSELECTOR;

function ContextInfo() {
    this.listBaseType = null;
    this.listTemplate = null;
    this.listName = null;
    this.view = null;
    this.listUrlDir = null;
    this.HttpPath = null;
    this.HttpRoot = null;
    this.serverUrl = null;
    this.imagesPath = null;
    this.PortalUrl = null;
    this.RecycleBinEnabled = null;
    this.enteringGridMode = false;
    this.inGridMode = false;
    this.isWebEditorPreview = null;
    this.rootFolderForDisplay = null;
    this.isPortalTemplate = null;
    this.isModerated = false;
    this.recursiveView = false;
    this.displayFormUrl = null;
    this.editFormUrl = null;
    this.newFormUrl = null;
    this.ctxId = null;
    this.CurrentUserId = null;
    this.isForceCheckout = false;
    this.EnableMinorVersions = false;
    this.ModerationStatus = 0;
    this.verEnabled = 0;
    this.isVersions = 0;
    this.WorkflowsAssociated = false;
    this.ExternalDataList = false;
    this.HasRelatedCascadeLists = 0;
    this.CascadeDeleteWarningMessage = null;
    this.ContentTypesEnabled = false;
    this.SendToLocationName = "";
    this.SendToLocationUrl = "";
    this.StateInitDone = false;
    this.TotalListItems = null;
    this.CurrentSelectedItems = null;
    this.LastSelectableRowIdx = null;
    this.SelectAllCbx = null;
    this.TableCbxFocusHandler = null;
    this.TableMouseoverHandler = null;
}
function ctxInitItemState(ctxCur) {
    ctxCur.TotalListItems = 0;
    ctxCur.CurrentSelectedItems = 0;
    ctxCur.LastSelectableRowIdx = 0;
    ctxCur.StateInitDone = true;
}
function STSPageUrlValidation(url) {
    return PageUrlValidation(url);
}
function GetSource(defaultSource) {
    var str = DeferCall('GetSource2', defaultSource, null);

    if (str == null) {
        var source = GetUrlKeyValue("Source");

        if (source == "") {
            if (defaultSource != null && defaultSource != "")
                source = defaultSource;
            else
                source = ajaxNavigate.get_href();
        }
        str = source;
    }
    return escapeProperly(STSPageUrlValidation(str));
}
function GetUrlKeyValue(keyName, bNoDecode, url, bCaseInsensitive) {
    var keyValue = "";

    if (url == null)
        url = ajaxNavigate.get_href() + "";
    var ndx;

    ndx = url.indexOf("#");
    if (ndx >= 0) {
        url = url.substr(0, ndx);
    }
    var urlToSearchKeyIn;

    if (bCaseInsensitive) {
        keyName = keyName.toLowerCase();
        urlToSearchKeyIn = url.toLowerCase();
    }
    else {
        urlToSearchKeyIn = url;
    }
    ndx = urlToSearchKeyIn.indexOf("&" + keyName + "=");
    if (ndx == -1)
        ndx = urlToSearchKeyIn.indexOf("?" + keyName + "=");
    if (ndx != -1) {
        var ndx2 = url.indexOf("&", ndx + 1);

        if (ndx2 == -1)
            ndx2 = url.length;
        keyValue = url.substring(ndx + keyName.length + 2, ndx2);
    }
    if (bNoDecode)
        return keyValue;
    else
        return unescapeProperlyInternal(keyValue);
}
function LoginAsAnother(url, bUseSource) {
    document.cookie = "loginAsDifferentAttemptCount=0";
    if (bUseSource == "1") {
        GoToPage(url);
    }
    else {
        var ch = url.indexOf("?") >= 0 ? "&" : "?";

        url += ch + "Source=" + escapeProperly(window.location.href);
        STSNavigate(url);
    }
}
function isPortalTemplatePage(Url) {
    if (GetUrlKeyValue("PortalTemplate") == "1" || GetUrlKeyValue("PortalTemplate", Boolean(Url)) == "1" || currentCtx != null && currentCtx.isPortalTemplate)
        return true;
    else
        return false;
}
function CLVPFromEvent(evt) {
    return DeferCall('CLVPFromEventReal', evt);
}
function STSNavigateToView(evt, url) {
    STSNavigate(url);
}
function STSNavigate2(evt, url) {
    STSNavigate(url);
}
function STSNavigateTop(navigateToUri) {
    var fNavigate = true;

    if (typeof window.top.SPUpdatePage !== 'undefined') {
        fNavigate = window.top.SPUpdatePage(navigateToUri);
    }
    if (fNavigate) {
        window.top.location.href = STSPageUrlValidation(navigateToUri);
    }
}
function STSNavigate(Url) {
    Url = GetAbsoluteUrl(Url);
    if ((ajaxNavigate.get_search()).indexOf("IsDlg=1") != -1) {
        if (Url.indexOf("?") != -1) {
            if (String(Url.match(RegExp("&$"))) != "&") {
                Url = Url + "&IsDlg=1";
            }
            else {
                Url = Url + "IsDlg=1";
            }
        }
        else {
            Url = Url + "?IsDlg=1";
        }
    }
    if (window.frameElement != null || typeof SPUpdatePage === 'undefined' || typeof SPUpdatePage !== 'undefined' && SPUpdatePage(Url)) {
        if (isPortalTemplatePage(Url))
            window.top.location.href = STSPageUrlValidation(Url);
        else
            window.location.href = STSPageUrlValidation(Url);
    }
}
function GoToPage(url, fOnlyUseExistingSource) {
    var ch = url.indexOf("?") >= 0 ? "&" : "?";

    if ((GetUrlKeyValue("Source", true, url)).length == 0) {
        var srcUrl = fOnlyUseExistingSource ? GetUrlKeyValue("Source") : GetSource();

        if (srcUrl != null && srcUrl != "") {
            if (fOnlyUseExistingSource)
                srcUrl = escapeProperly(STSPageUrlValidation(srcUrl));
            if (url.length + srcUrl.length <= 1950) {
                url += ch + "Source=" + srcUrl;
            }
        }
    }
    STSNavigate(url);
}
function TrimSpaces(str) {
    var st;
    var end;

    str = str.toString();
    var len = str.length;

    for (st = 0; st < len; st++) {
        if (str.charAt(st) != ' ')
            break;
    }
    if (st == len)
        return "";
    for (end = len - 1; end > st; end--) {
        if (str.charAt(end) != ' ')
            break;
    }
    end++;
    return str.substring(st, end);
}
function TrimWhiteSpaces(str) {
    var st;
    var end;

    str = str.toString();
    var len = str.length;
    var ch;

    for (st = 0; st < len; st++) {
        ch = str.charAt(st);
        if (ch != ' ' && ch != '\t' && ch != '\n' && ch != '\r' && ch != '\f')
            break;
    }
    if (st == len)
        return "";
    for (end = len - 1; end > st; end--) {
        ch = str.charAt(end);
        if (ch != ' ' && ch != '\t' && ch != '\n' && ch != '\r' && ch != '\f')
            break;
    }
    end++;
    return str.substring(st, end);
}
function GetAttributeFromItemTable(itemTableParam, strAttributeName, strAttributeOldName) {
    var attrValue = itemTableParam != null ? itemTableParam.getAttribute(strAttributeName) : null;

    if (attrValue == null && itemTableParam != null && strAttributeOldName != null)
        attrValue = itemTableParam.getAttribute(strAttributeOldName);
    return attrValue;
}
function ShowMtgNavigatorPane() {
    (document.getElementById("MeetingNavigatorPane")).style.display = "block";
}
function HideMtgNavigatorPane() {
    (document.getElementById("MeetingNavigatorPane")).style.display = "none";
}
function HideMtgDesc() {
    (document.getElementById("MeetingDescription")).style.display = "none";
}
function GetMultipleUploadEnabled() {
    try {
        if (browseris.ie5up && !browseris.mac && new ActiveXObject('STSUpld.UploadCtl'))
            return true;
    }
    catch (e) { }
    return false;
}
function SetUploadPageTitle() {
    if (Number(GetUrlKeyValue("Type")) == 1) {
        document.title = Strings.STS.L_NewFormClickOnce1_Text;
        if (browseris.ie || browseris.nav6up) {
            var titleElt = document.getElementById("onetidTextTitle");

            if (titleElt != null)
                titleElt.innerHTML = Strings.STS.L_NewFormClickOnce1_Text;
        }
    }
}
function GetSelectedValue(frmElem) {
    if (Boolean(frmElem) && frmElem.selectedIndex > -1) {
        var option = frmElem.options[frmElem.selectedIndex];

        return option.value;
    }
    else
        return "";
}
function GetSelectedText(frmElem) {
    if (Boolean(frmElem) && frmElem.selectedIndex > -1) {
        var option = frmElem.options[frmElem.selectedIndex];

        return option.text;
    }
    else
        return "";
}
function MtgShowTimeZone() {
    if (GetCookie("MtgTimeZone") == "1") {
        EnsureScriptParams("core.js", "MtgToggleTimeZone");
    }
}
function FormatDate(sDate, sTime, eDate, eTime) {
    var DateSeparator = Strings.STS.L_DateSeparator_Text;

    if (browseris.win32 && sDate == eDate)
        DateSeparator = Strings.STS.L_DateSeparatorEx_Text;
    if (sDate == eDate) {
        document.write(Strings.STS.L_Date_Text + " " + sDate);
        if (sTime != eTime)
            document.write(" " + Strings.STS.L_TimeLong_Text + " " + sTime + DateSeparator + eTime);
        else
            document.write(" " + Strings.STS.L_TimeLong_Text + " " + sTime);
    }
    else {
        document.write(Strings.STS.L_TimeLong_Text + " " + sDate + " (" + sTime + ")" + DateSeparator + eDate + " (" + eTime + ")");
    }
}
function GetAlertText(isDetached) {
    var howOrphaned = isDetached & 0x10 - 1;
    var howDetached = isDetached - howOrphaned;

    if (Boolean(howOrphaned)) {
        switch (howOrphaned) {
        case 1:
            return typeof g_meetingCount != "undefined" && g_meetingCount == 1 ? Strings.STS.L_DETACHEDSINGLEEXCEPT_Text : Strings.STS.L_DETACHEDCANCELLEDEXCEPT_Text;
        case 2:
            return Strings.STS.L_DETACHEDCANCELLEDSERIES_Text;
        case 3:
            return Strings.STS.L_DETACHEDCANCELLEDEXCEPT_Text;
        case 4:
            return typeof g_meetingCount != "undefined" && g_meetingCount == 1 ? Strings.STS.L_DETACHEDSINGLEEXCEPT_Text : Strings.STS.L_DETACHEDUNLINKEDSINGLE_Text;
        case 5:
            return Strings.STS.L_DETACHEDUNLINKEDSERIES_Text;
        case 6:
            return Strings.STS.L_DETACHEDSERIESNOWSINGLE_Text;
        case 7:
            return Strings.STS.L_DETACHEDSINGLENOWSERIES_Text;
        case 8:
            return Strings.STS.L_DETACHEDPASTEXCPMODIFIED_Text;
        }
    }
    else if (Boolean(howDetached)) {
        switch (howDetached) {
        case 16:
            return Strings.STS.L_DETACHEDNONGREGORIANCAL_Text;
        }
    }
    return null;
}
function retrieveCurrentThemeLink() {
    var cssLink;
    var links = document.getElementsByTagName("link");

    for (var i = 0; i < links.length; i++) {
        var link = links[i];

        if (link.type == "text/css" && link.id == "onetidThemeCSS")
            cssLink = link;
    }
    if (Boolean(cssLink)) {
        var re = /(\.\.\/)+/;
        var relativeURL = cssLink.href;
        var newURL = relativeURL.replace(re, "/");

        return newURL;
    }
    return null;
}
function StBuildParam(stPattern) {
    var re;
    var i;

    for (i = 1; i < StBuildParam.arguments.length; i++) {
        re = new RegExp("\\^" + String(i));
        stPattern = stPattern.replace(re, StBuildParam.arguments[i]);
    }
    return stPattern;
}
var JSRequest;
var ExpGroupWPListName;
var ExpGroupCookiePrefix;
var ExpGroupCookieDelimiter;
var ExpGroupMaxWP;
var ExpGroupMaxCookieLength;
var g_ExpGroupCAMLQueue;
var g_ExpGroupXSLTQueue;
var g_ExpGroupInProgress;
var g_ExpInitializing;
var g_ExpGroupTable;
var g_ExpGroupNeedsState;
var g_ExpGroupParseStage;

function ExpCollGroup(groupName, imgName, evt, noAjax) {
    if (evt != null)
        g_ExpGroupNeedsState = true;
    if (document.getElementById("titl" + groupName) == null)
        return;
    var viewTable = (document.getElementById("titl" + groupName)).parentNode;

    if (viewTable == null)
        return;
    var ctxNum = groupName.substr(0, groupName.indexOf("-"));
    var ctxCur = window["ctx" + ctxNum];

    if (!Boolean(ctxCur))
        return;
    if (!ctxCur.StateInitDone)
        ctxInitItemState(ctxCur);
    if (ctxCur.SelectAllCbx == null)
        ctxCur.SelectAllCbx = getSelectAllCbxFromTable(viewTable);
    var tbodyTags = viewTable.getElementsByTagName("TBODY");
    var numElts = tbodyTags.length;
    var len = groupName.length;
    var img = document.getElementById(imgName);

    if (img == null)
        return;
    var srcPath = img.src;
    var imgSrc = img.getAttribute('src');
    var index = srcPath.lastIndexOf("/");
    var commonClusterSrcPath = GetThemedImageUrl("spcommon.png");
    var collapseImgClass = fRightToLeft ? "ms-commentcollapsertl-icon" : "ms-commentcollapse-icon";
    var collapseSpanClass = fRightToLeft ? "ms-commentcollapsertl-iconouter" : "ms-commentcollapse-iconouter";
    var expandImgClass = fRightToLeft ? "ms-commentexpandrtl-icon" : "ms-commentexpand-icon";
    var expandSpanClass = fRightToLeft ? "ms-commentexpandrtl-iconouter" : "ms-commentexpand-iconouter";
    var oldExpandSrcPath = '/_layouts/15/images/plus.gif';
    var oldCollapseSrcPath = '/_layouts/15/images/minus.gif';
    var fOpen = false;
    var displayStr;

    if (imgSrc == oldExpandSrcPath || imgSrc == commonClusterSrcPath && img.className == expandImgClass || g_ExpInitializing) {
        fOpen = true;
        displayStr = "";
        img.alt = Strings.STS.L_SPCollapse;
        if (imgSrc == commonClusterSrcPath) {
            img.className = collapseImgClass;
            img.parentNode.className = collapseSpanClass;
        }
        else
            img.src = oldCollapseSrcPath;
    }
    else {
        fOpen = false;
        displayStr = "none";
        img.alt = Strings.STS.L_SPExpand;
        if (imgSrc == commonClusterSrcPath) {
            img.className = expandImgClass;
            img.parentNode.className = expandSpanClass;
        }
        else
            img.src = oldExpandSrcPath;
    }
    var j = 0;

    for (var i = 0; i < numElts; i++) {
        var childObj = tbodyTags[i];

        if (childObj.id != null && childObj.id.length > len + 4 && groupName == (childObj.id.slice(4)).substr(0, len)) {
            if (fOpen) {
                index = childObj.id.indexOf("_", len + 4);
                if (index != -1) {
                    index = childObj.id.indexOf("_", index + 1);
                    if (index != -1)
                        continue;
                }
            }
            var previousDisplay = childObj.style.display;

            childObj.style.display = displayStr;
            var itemCount = 0;

            if (Boolean(childObj.getAttribute("selectableRows")))
                itemCount = Number(childObj.getAttribute("selectableRows"));
            if (typeof FV4UI != "undefined" && FV4UI() && Boolean(itemCount)) {
                if (!fOpen) {
                    if (previousDisplay != "none")
                        ctxCur.TotalListItems -= itemCount;
                    EnsureScriptParams("core.js", "DeselectCollapsedGroup", ctxCur, childObj);
                    EnsureScriptParams("core.js", "UpdateSelectAllCbx", ctxCur, true);
                }
                else {
                    ctxCur.TotalListItems += itemCount;
                    EnsureScriptParams("core.js", "UpdateSelectAllCbx", ctxCur, false);
                }
            }
            if (fOpen && childObj.id.substr(0, 4) == "titl") {
                var imgObj = document.getElementById("img_" + childObj.id.slice(4));
                var imgObjSrc = imgObj.getAttribute('src');

                imgObj.alt = Strings.STS.L_SPExpand;
                if (imgObjSrc == commonClusterSrcPath) {
                    imgObj.className = expandImgClass;
                    imgObj.parentNode.className = expandSpanClass;
                }
                else {
                    imgObj.src = oldExpandSrcPath;
                }
            }
            var groupID = "tbod" + groupName;
            var child;

            if (childObj.id.substr(0, groupID.length) == groupID) {
                if (noAjax) {
                    for (j = 0; j < childObj.childNodes.length; j++) {
                        child = childObj.childNodes[j];
                        child.style.display = displayStr;
                    }
                }
                if (childObj.childNodes.length == 0) {
                    var nextTBody = childObj.nextSibling;

                    while (nextTBody != null) {
                        if (nextTBody.tagName == "TBODY" && nextTBody.id == "") {
                            for (j = 0; j < nextTBody.childNodes.length; j++) {
                                child = nextTBody.childNodes[j];
                                child.style.display = displayStr;
                                if (typeof FV4UI != "undefined" && FV4UI()) {
                                    HandleSingleGroupByRow(ctxCur, child, fOpen);
                                    UpdateSelectAllCbx(ctxCur, true);
                                }
                            }
                            break;
                        }
                        else
                            nextTBody = nextTBody.nextSibling;
                    }
                }
            }
        }
    }
    if (FV4UI())
        EnsureScriptParams("core.js", "UpdateCtxLastSelectableRow", ctxCur, viewTable);
    if (!noAjax && !g_ExpGroupParseStage) {
        if (g_ExpGroupNeedsState && ExpGroupFetchWebPartID(groupName) != null && !Boolean(ctxCur.noGroupCollapse)) {
            if (fOpen) {
                AddGroupToCookie(groupName);
            }
            else {
                RemoveGroupFromCookie(groupName);
            }
        }
        if (fOpen) {
            var tbody = document.getElementById("tbod" + groupName + "_");

            if (tbody != null) {
                var isLoaded = tbody.getAttribute("isLoaded");

                if (isLoaded == "false") {
                    ExpGroupFetchData(groupName, evt);
                }
            }
        }
    }
}
function ExpGroupFetchData(groupName, evt) {
    var loadString = "<tr><td colspan=\"100\" class=\"ms-gbload\">" + Strings.STS.L_Loading_Text + "</td></tr>";

    ExpGroupRenderData(loadString, groupName, "false");
    if (!g_ExpGroupInProgress) {
        var groupString = ExpGroupFetchGroupString(groupName);

        if (groupString == null) {
            loadString = "<tr><td></td><td class=\"ms-gbload\">" + Strings.STS.L_Loading_Error_Text + "</td></tr>";
            ExpGroupRenderData(loadString, groupName, "false");
            if (Boolean(evt) && g_ExpGroupXSLTQueue.length > 0) {
                ExpGroupFetchData(g_ExpGroupXSLTQueue.shift(), evt);
            }
            else if (!Boolean(evt) && g_ExpGroupCAMLQueue.length > 0) {
                ExpGroupFetchData(g_ExpGroupCAMLQueue.shift(), evt);
            }
            return;
        }
        if (typeof InitAllClvps == "undefined" && evt != null)
            g_ExpInitializing = true;
        else {
            g_ExpInitializing = false;
            g_ExpGroupInProgress = true;
        }
        ExpGroupCallServer(groupString, groupName, evt);
        if (g_ExpGroupCAMLQueue.length > 0 && evt == null) {
            ExpGroupFetchData(g_ExpGroupCAMLQueue.shift());
        }
    }
    else {
        if (Boolean(evt))
            g_ExpGroupXSLTQueue.push(groupName);
        else
            g_ExpGroupCAMLQueue.push(groupName);
    }
}
function ExpGroupCallServer(groupString, groupName, evt) {
    if (evt != null) {
        var obj = evt;

        if (evt == "PageLoad") {
            obj = new Object();
            obj.fakeEvent = true;
        }
        {
            var defd;

            try {
                defd = typeof inplview.ExpGroup;
            }
            catch (e) {
                defd = 'undefined';
            }
            {
                var str = "inplview.ExpGroup";
                var rg = str.split('.');

                if (rg.length > 1) {
                    var fnd = function() {
                        inplview.ExpGroup(obj, groupName);
                    };

                    EnsureScript(rg[0], defd, fnd);
                }
            }
        }
        ;
    }
    else {
        var viewCounter = groupName.substring(0, groupName.indexOf("-"));
        var myCtx = window["ctx" + viewCounter];
        var webPartID = ExpGroupFetchWebPartID(groupName);

        if (webPartID != null) {
            var functionName = "ExpGroupCallServer" + webPartID;

            if (myCtx != null && myCtx.clvp != null) {
                var myClvp = myCtx.clvp;
                var strFilter = myClvp.FilterString();

                if (strFilter != null) {
                    groupString += "|" + strFilter;
                }
            }
            var functionCall = functionName + "('" + groupString + "','" + groupName + "')";

            eval(functionCall);
        }
    }
}
function DoPagingCallback(webPartID, pagingParam) {
    if (webPartID != null) {
        var functionName = "DoPagingCallback" + webPartID;
        var functionCall = functionName + "('" + pagingParam + "')";

        eval(functionCall);
    }
}
function ExpGroupReceiveData(htmlToRender, groupName) {
    var ctxId = "ctx" + groupName.substring(0, groupName.indexOf("-"));
    var indexBeginCTXName = htmlToRender.indexOf("CTXName=\"");

    if (indexBeginCTXName != -1) {
        if (ctxId != "ctx1") {
            htmlToRender = htmlToRender.replace(/ CTXName=\"ctx1\" /g, " CTXName=\"" + ctxId + "\" ");
        }
    }
    var needOuterWrap = false;

    if (htmlToRender.length < 4) {
        needOuterWrap = true;
    }
    else if (htmlToRender.substring(0, 3) != "<tr") {
        needOuterWrap = true;
    }
    if (needOuterWrap) {
        htmlToRender = "<TR><TD>" + htmlToRender + "</TD></TR>";
    }
    ExpGroupRenderData(htmlToRender, groupName, "true");
    ProcessImn();
    g_ExpGroupInProgress = false;
    if (g_ExpGroupCAMLQueue.length > 0) {
        ExpGroupFetchData(g_ExpGroupCAMLQueue.shift());
    }
}
function ExpGroupRenderData(htmlToRender, groupName, isLoaded) {
    var tbody = document.getElementById("tbod" + groupName + "_");
    var wrapDiv = document.createElement("DIV");
    var rg = groupName.split("-");

    wrapDiv.innerHTML = "<TABLE><TBODY id=\"tbod" + groupName + "_\" isLoaded=\"" + isLoaded + "\">" + htmlToRender + "</TBODY></TABLE>";
    tbody.parentNode.replaceChild(wrapDiv.firstChild.firstChild, tbody);
}
var titlTbody;

function ExpGroupFetchGroupString(groupName) {
    titlTbody = document.getElementById("titl" + groupName);
    if (titlTbody == null) {
        return null;
    }
    else {
        var groupString = titlTbody.getAttribute("groupString");

        return groupString;
    }
}
function ExpGroupFetchWebPartID(groupName) {
    var viewCounter = groupName.substring(0, groupName.indexOf("-"));
    var lookupEntry = document.getElementById("GroupByWebPartID" + viewCounter);

    if (lookupEntry == null)
        return null;
    return lookupEntry.getAttribute("webPartID");
}
function RenderActiveX(str) {
    document.write(str);
}
function RenderActiveX2(s, id) {
    if (id == null)
        return;
    var oldObject = document.getElementById(id);

    if (oldObject != null) {
        var objParent = oldObject.parentNode;
        var divHost = document.createElement('div');

        divHost.innerHTML = s;
        var newObject = divHost.childNodes[0];

        if (newObject != null)
            objParent.replaceChild(newObject, oldObject);
    }
}
function OnItem(elm) {
    DeferCall('OnItemDeferCall', elm);
}
function OnChildItem(elm) {
    var i;

    for (i = 0; i < elm.childNodes.length; i++) {
        var child = elm.childNodes[i];

        if (child.nodeType == 1 && child.tagName == "TABLE" && Boolean(child.getAttribute("NameOrTitle")))
            break;
        if (child.nodeType == 1 && child.tagName == "DIV" && child.style.display != "none" && child.style.visibility != "hidden") {
            OnItem(child);
            break;
        }
    }
}
function OnLink(elm) {
    DeferCall('OnLinkDeferCall', elm);
}
function MMU_PopMenuIfShowing(menuElement) {
    DeferCall('MMU_PopMenuIfShowingDeferCall', menuElement);
}
function OnMouseOverFilter(elm) {
    DeferCall('OnMouseOverFilterDeferCall', elm);
}
function OnChildColumn(elm) {
    var i;

    for (i = 0; i < elm.childNodes.length; i++) {
        var child = elm.childNodes[i];

        if (child.nodeType == 1 && child.tagName == "DIV" && child.getAttribute("CtxNum") != null) {
            OnMouseOverFilter(child);
            break;
        }
    }
}
function MMU_EcbTableMouseOverOut(ecbTable, fMouseOver) {
    DeferCall('MMU_EcbTableMouseOverOutDeferCall', ecbTable, fMouseOver);
}
function OnMouseOverAdHocFilter(elm, fieldStr) {
    DeferCall('OnMouseOverAdHocFilterDeferCall', elm, fieldStr);
}
function MMU_EcbLinkOnFocusBlur(menu, ecbLink, fOnFocus) {
    DeferCall('MMU_EcbLinkOnFocusBlurDeferCall', menu, ecbLink, fOnFocus);
}
function GetElementByClassName(elem, classname) {
    if (Boolean(elem.className)) {
        if (elem.className.indexOf(classname) > -1)
            return elem;
    }
    var temp;

    for (var i = 0; i < elem.childNodes.length; i++) {
        temp = GetElementByClassName(elem.childNodes[i], classname);
        if (temp != null)
            return temp;
    }
    return null;
}
function AddWhiteBG() {
    if (searcharea.className.indexOf(" " + whitebgclass) == -1) {
        var cn = searcharea.className.trim() + " " + whitebgclass;

        cn = cn.trim();
        searcharea.className = cn;
    }
}
function RemoveWhiteBG() {
    if (locked)
        return;
    searcharea.className = searcharea.className.replace(RegExp(" " + whitebgclass), "");
}
var locked;

function LockBG() {
    locked = !locked;
    if (locked)
        AddWhiteBG();
    else
        RemoveWhiteBG();
}
var CSSUtil;
var searcharea;
var searchbox;
var searchimage;
var whitebgclass;

function InitSearchBoxStyleEvents(sarea, sbox, simage_class, wbgclass) {
    searcharea = document.getElementById(sarea);
    searchbox = document.getElementById(sbox);
    searchimage = GetElementByClassName(searcharea, simage_class);
    whitebgclass = wbgclass;
    if (searchbox == null || searchimage == null)
        return;
    searchbox.onfocus = LockBG;
    searchbox.onmouseover = AddWhiteBG;
    searchbox.onblur = LockBG;
    searchbox.onmouseout = RemoveWhiteBG;
    searchimage.onmouseover = AddWhiteBG;
    searchimage.onmouseout = RemoveWhiteBG;
}
function IsFullNameDefined(fullName) {
    if (!Boolean(fullName)) {
        return false;
    }
    var names = fullName.split(".");
    var len = names.length;
    var obj = window;

    for (var i = 0; i < len; i++) {
        obj = obj[names[i]];
        if (typeof obj == "undefined") {
            return false;
        }
    }
    return true;
}
function TypeofFullName(fullName) {
    if (!Boolean(fullName)) {
        return "undefined";
    }
    var names = fullName.split(".");
    var len = names.length;
    var obj = window;

    for (var i = 0; i < len; i++) {
        obj = obj[names[i]];
        if (typeof obj == "undefined") {
            return "undefined";
        }
    }
    return typeof obj;
}
var _v_dictSod;
var Sods;
var _v_qsod;
var _v_sodctx;

function Sod(url, key) {
    this.url = url;
    this.key = key;
    this.loaded = false;
    this.depkeys = null;
    this.state = 1;
    this.qfn = null;
}
function UrlToSod(url) {
    for (var i in _v_dictSod) {
        var sod = _v_dictSod[i];

        if (sod.url == url) {
            return sod;
        }
    }
    return null;
}
function ResetSodState() {
    for (var i in _v_dictSod) {
        var sod = _v_dictSod[i];

        if (sod.state == Sods.loaded && sod.url != null) {
            sod.reset = true;
        }
        sod.qfn = null;
    }
}
function RegisterSod(key, url) {
    key = NormalizeSodKey(key);
    var sod = _v_dictSod[key];

    if (sod != null) {
        if ("undefined" != typeof sod.url && sod.url == null && url != null) {
            sod.url = url;
            if (AjaxNavigate$isMDSURL(window.location.href)) {
                sod.reset = true;
            }
        }
        return;
    }
    sod = new Sod(url, key);
    _v_dictSod[key] = sod;
}
function RegisterSodDep(key, dep) {
    key = NormalizeSodKey(key);
    dep = NormalizeSodKey(dep);
    var sod = _v_dictSod[key];

    if (sod == null)
        return;
    if (sod.depkeys == null)
        sod.depkeys = [];
    if (-1 == ArrayIndexOf(sod.depkeys, dep)) {
        sod.depkeys.push(dep);
    }
}
function LoadSodByKey(key, fn, bSync) {
    key = NormalizeSodKey(key);
    var sod = _v_dictSod[key];

    if (fn != null && sod != null) {
        if (sod.qfn == null)
            sod.qfn = [];
        sod.qfn.push(fn);
    }
    return LoadSod(sod, bSync);
}
function LoadSodByKeySync(key) {
    return LoadSodByKey(key, null, true);
}
function LoadMultipleSods(keys, fn, bSync) {
    var total = keys.length;
    var keysDict = new Object;

    for (var j = 0; j < total; j++) {
        keysDict[keys[j]] = false;
    }
    var count = 0;
    var callback = function() {
        count++;
        if (count == total) {
            fn();
        }
    };

    for (var i = 0; i < total; i++) {
        var sodCallback = (function(key) {
            return function() {
                if (!Boolean(keysDict[key])) {
                    keysDict[key] = true;
                    callback();
                }
            };
        })(keys[i]);
        var result = LoadSodByKey(keys[i], sodCallback, bSync);

        if (result == Sods.loaded && !Boolean(keysDict[keys[i]])) {
            keysDict[keys[i]] = true;
            callback();
        }
    }
}
var g_PendingLoadSodQueue;

function IsSodLoaded(sod) {
    return sod.state == Sods.loaded && !Boolean(sod.reset);
}
function LoadSod(sod, bSync) {
    if (!bSync && typeof g_mdsReady != "undefined" && Boolean(g_mdsReady) && typeof g_MDSPageLoaded != "undefined" && !Boolean(g_MDSPageLoaded)) {
        if (g_PendingLoadSodQueue == null)
            g_PendingLoadSodQueue = [];
        var sodQueueEntry = {
            "sod": sod
        };

        g_PendingLoadSodQueue.push(sodQueueEntry);
        return Sods.pending;
    }
    else {
        return LoadSodInternal(sod, bSync);
    }
}
function LoadPendingSods() {
    if (g_PendingLoadSodQueue != null) {
        var len = g_PendingLoadSodQueue.length;

        for (var i = 0; i < len; i++) {
            var sodQueueEntry = g_PendingLoadSodQueue[i];

            LoadSodInternal(sodQueueEntry.sod, false);
        }
        g_PendingLoadSodQueue = null;
    }
}
function LoadSodInternal(sod, bSync) {
    if (sod == null)
        return Sods.missing;
    if (IsSodLoaded(sod) || !bSync && sod.state == Sods.loading) {
        return sod.state;
    }
    sod.state = Sods.pending;
    var mll = [];
    var depkeys = sod.depkeys;

    if (depkeys != null) {
        var i;
        var fDepLoaded = true;
        var am = depkeys.length;
        var sodDep;

        for (i = 0; i < am; i++) {
            sodDep = _v_dictSod[depkeys[i]];
            if (sodDep == null)
                continue;
            if (!IsSodLoaded(sodDep)) {
                fDepLoaded = false;
                mll.push(sodDep);
            }
        }
        if (!fDepLoaded) {
            _v_qsod.push(sod);
            am = mll.length;
            for (i = 0; i < am; i++) {
                sodDep = mll[i];
                if (!IsSodLoaded(sodDep) && (bSync || sodDep.state != Sods.loading)) {
                    LoadSodInternal(sodDep, bSync);
                }
            }
            if (!bSync) {
                return sod.state;
            }
        }
    }
    if (sod.reset) {
        if (Boolean(sod.url) && (window.location.pathname.toLowerCase()).endsWith("/_layouts/15/start.aspx") && "undefined" != typeof DeltaManager$_ScriptLoader$_loadTargetInternal) {
            DeltaManager$_ScriptLoader$_loadTargetInternal(sod.url, sod, sod.url != null);
        }
    }
    if (IsSodLoaded(sod) || !bSync && sod.state == Sods.loading) {
        return sod.state;
    }
    if (bSync) {
        var req = new XMLHttpRequest;

        req.open('GET', sod.url, false);
        req.send(null);
        var ds = document.createElement('script');

        (document.getElementsByTagName('head'))[0].appendChild(ds);
        var wasLoading = sod.state == Sods.loading;

        ds.text = req.responseText;
        if (!browseris.ie || browseris.ie9standardUp) {
            ds.src = sod.url;
        }
        if (wasLoading && typeof sod.s != 'undefined') {
            var oldScriptElement = sod.s;

            sod.s = undefined;
            oldScriptElement.parentNode.removeChild(oldScriptElement);
            oldScriptElement.onreadystatechange = null;
            oldScriptElement.onload = null;
        }
        sod.state = Sods.loaded;
        if (wasLoading) {
            NotifyOnLoad(sod);
        }
        return sod.state;
    }
    else {
        var fStaticLoad = false;
        var head = (document.getElementsByTagName('head'))[0];
        var scriptElements = head.getElementsByTagName('script');
        var nScriptElements = scriptElements.length;
        var dummyScript = document.createElement('script');

        dummyScript.src = sod.url;
        var sourceUrl = dummyScript.src;

        dummyScript = null;
        for (var iElement = 0; iElement < nScriptElements; iElement++) {
            var source = scriptElements[iElement].src;

            if (null != source && source.length > 0) {
                if (sourceUrl == source) {
                    fStaticLoad = true;
                    break;
                }
            }
        }
        if (fStaticLoad) {
            if (sod.reset) {
                if (Boolean(sod.url) && (window.location.pathname.toLowerCase()).endsWith("/_layouts/15/start.aspx") && "undefined" != typeof DeltaManager$_ScriptLoader$_loadTargetInternal) {
                    DeltaManager$_ScriptLoader$_loadTargetInternal(sod.url, sod, sod.url != null);
                }
            }
            else {
                sod.state = Sods.loaded;
                NotifyOnLoad(sod);
            }
        }
        else {
            sod.state = Sods.loading;
            var s = document.createElement("SCRIPT");

            s.type = "text/javascript";
            s.src = sod.url;
            var fn = GetOnLoad(sod, s);

            if (browseris.ie8down)
                s.onreadystatechange = fn;
            else
                s.onload = fn;
            (document.getElementsByTagName("HEAD"))[0].appendChild(s);
            sod.s = s;
        }
        return sod.state;
    }
}
function GetOnLoad(sod, s) {
    var fn = function() {
        var floaded = false;

        if (browseris.ie8down && typeof s.readyState != 'undefined')
            floaded = s.readyState == "complete" || s.readyState == "loaded";
        else
            floaded = true;
        if (floaded) {
            s.onreadystatechange = null;
            s.onload = null;
            NotifyOnLoad(sod);
        }
    };

    return fn;
}
function NotifyOnLoad(sod) {
    var fn2 = function() {
        sod.state = Sods.loaded;
        sod.reset = false;
        while (_v_qsod.length > 0) {
            var sodParent = _v_qsod.pop();

            if (sodParent.state == Sods.pending) {
                LoadSod(sodParent);
                break;
            }
        }
        if (sod.qfn != null) {
            while (sod.qfn.length > 0) {
                var fn3 = sod.qfn.shift();

                fn3();
            }
        }
    };

    if (browseris.ie8down) {
        setTimeout(fn2, 0);
    }
    else {
        fn2();
    }
}
function EnsureScript(key, typ, fn, bSync) {
    var run = true;
    var nkey = NormalizeSodKey(key);
    var sod = _v_dictSod[nkey];

    if (sod != null && sod.reset) {
        run = false;
    }
    if (typ != 'undefined' && run) {
        if (fn != null)
            fn();
        return true;
    }
    LoadSodByKey(key, fn, bSync);
    if (run) {
        return true;
    }
    return false;
}
function EnsureScriptFunc(key, typ, fn) {
    EnsureScript(key, TypeofFullName(typ), fn);
}
function EnsureScriptParams() {
    if (arguments.length < 2) {
        return;
    }
    var args = arguments;
    var key = Array.prototype.shift.call(args);
    var func = Array.prototype.shift.call(args);
    var fn = function() {
        var fParts = func.split(".");
        var dynFuncRef = window;

        for (var i = 0, len = fParts.length; i < len; i++) {
            dynFuncRef = dynFuncRef[fParts[i]];
        }
        ;
        var funcRef = dynFuncRef;

        funcRef.apply(null, args);
    };

    EnsureScriptFunc(key, func, fn);
}
function NormalizeSodKey(key) {
    var lowerCaseKey = key.toLowerCase();
    var lckl = lowerCaseKey.length;

    if (lckl >= 3 && ".js" == lowerCaseKey.substr(lckl - 3)) {
        key = lowerCaseKey;
    }
    else if (lowerCaseKey.indexOf(".resx") > 0) {
        var index = lowerCaseKey.indexOf(".resx");

        key = (key.substr(0, index + 5)).toLowerCase() + key.substr(index + 5);
    }
    return key;
}
function ArrayIndexOf(array, item, startIdx) {
    if (typeof item === "undefined")
        return -1;
    var len = array.length;

    if (len !== 0) {
        startIdx = startIdx - 0;
        if (isNaN(startIdx)) {
            startIdx = 0;
        }
        else {
            if (isFinite(startIdx)) {
                startIdx = startIdx - startIdx % 1;
            }
            if (startIdx < 0) {
                startIdx = Math.max(0, len + startIdx);
            }
        }
        for (var i = startIdx; i < len; i++) {
            if (typeof array[i] !== "undefined" && array[i] === item) {
                return i;
            }
        }
    }
    return -1;
}
function SodCloneEvent(evt) {
    var e;

    if (browseris.ie) {
        e = document.createEventObject(evt);
    }
    else {
        e = document.createEvent("MouseEvents");
        e.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    }
    return e;
}
function SodDispatchEvent(key, typ, evt) {
    var e = SodCloneEvent(evt);
    var fn;

    if (browseris.ie) {
        fn = function() {
            e.srcElement.fireEvent("onclick", e);
        };
    }
    else {
        var t = evt.target;

        fn = function() {
            t.dispatchEvent(e);
        };
    }
    if (!EnsureScript(key, typ, fn)) {
        if (browseris.ie)
            evt.cancelBubble = true;
        else
            evt.stopPropagation();
    }
}
function AddTabHeadHandler(tid, fn) {
    var li = document.getElementById(tid);

    if (li != null) {
        var a = (li.getElementsByTagName('A'))[0];

        AddEvtHandler(a, 'onclick', fn);
    }
}
function LoadWPAdderOnDemand() {
    if (typeof loadWPAdderCallback == 'function') {
        EnsureScriptParams("WPAdderClass", "WPAdderClassLoad", loadWPAdderCallback);
    }
}
function showSaveConflictDialog(lastModifiedUserId, continueStatusHtml, mergeChangesUrl, mergeChangesStatusHtml, discardScript, overwriteScript) {
    {
        var defd;

        try {
            defd = typeof ribbon.showSaveConflictDialog;
        }
        catch (e) {
            defd = 'undefined';
        }
        {
            var str = "ribbon.showSaveConflictDialog";
            var rg = str.split('.');

            if (rg.length > 1) {
                var fnd = function() {
                    ribbon.showSaveConflictDialog(lastModifiedUserId, continueStatusHtml, mergeChangesUrl, mergeChangesStatusHtml, discardScript, overwriteScript);
                };

                EnsureScript(rg[0], defd, fnd);
            }
        }
    }
    ;
}
function ClkElmt(e) {
    if (browseris.ie)
        e.click();
    else
        FFClick(e);
}
function EnsureSelectionHandlerOnFocus(evt, cbx, ctxNum) {
    DeferCall("EnsureSelectionHandlerOnFocusDeferred", evt, cbx, ctxNum);
}
function EnsureSelectionHandler(evt, tab, ctxNum) {
    DeferCall("EnsureSelectionHandlerDeferred", evt, tab, ctxNum);
}
function StopEvt(evt) {
    if (!browseris.ie)
        evt.stopPropagation();
}
function FFGetElementsById(doc, tabId) {
    var rg = [];
    var ele = doc.getElementById(tabId);

    while (ele != null) {
        rg.push(ele);
        ele.id = "";
        ele = doc.getElementById(tabId);
    }
    var i;

    for (i = 0; i < rg.length; i++) {
        rg[i].id = tabId;
    }
    return rg;
}
function GetElementsByName(str) {
    var rg = document.getElementsByName(str);

    if (rg.length == 0 && Boolean(window.XMLHttpRequest)) {
        rg = FFGetElementsById(document, str);
    }
    return rg;
}
function AddEvtHandler(ele, strEvt, func) {
    if (browseris.ie)
        ele.attachEvent(strEvt, func);
    else
        ele.addEventListener(strEvt.substr(2), func, false);
}
function RemoveEvtHandler(ele, strEvt, func) {
    if (browseris.ie)
        ele.detachEvent(strEvt, func);
    else
        ele.removeEventListener(strEvt.substr(2), func, false);
}
function HideListViewRows(sid) {
    var t = document.getElementById(sid);

    if (t == null)
        return;
    resetSelectAllCbx(t);
    var inplviewHash = ajaxNavigate.getParam("InplviewHash");

    if (null == inplviewHash)
        return;
    var strHash = inplviewHash.substr(0, 42);

    strHash = strHash.replace(/--/g, "-");
    if (sid.length == 77)
        sid = sid.substr(39);
    else {
        var ctxId;
        var myCtx;

        if (sid.indexOf("onetidDoclibViewTbl") != 0)
            return;
        sid = sid.substr(19);
        if (sid == '0') {
            if (t.className.indexOf("ms-emptyView") >= 0)
                return;
            for (ctxId in g_ctxDict) {
                myCtx = g_ctxDict[ctxId];
                sid = myCtx.view;
                break;
            }
        }
        else {
            myCtx = g_ctxDict['ctx' + sid];
            sid = myCtx.view;
        }
    }
    if (strHash != sid)
        return;
    EnsureScriptParams("core.js", "AddCssClassToElement", t, "s4-hide-tr");
}
function resetSelectAllCbx(tab) {
    var selectAllCbx = getSelectAllCbxFromTable(tab);

    if (selectAllCbx != null)
        selectAllCbx.checked = false;
}
function getSelectAllCbxFromTable(tab) {
    if (tab == null)
        return null;
    var rows = tab.rows;

    if (Boolean(rows) && rows.length > 0) {
        var headerRow = rows[0];

        if (!Boolean(headerRow.className.indexOf("ms-viewheadertr"))) {
            var cells = headerRow.cells;

            if (cells.length > 0) {
                var cbx = (cells[0].getElementsByTagName("INPUT"))[0];

                if (cbx != null)
                    return cbx;
                cbx = cells[0].querySelector(".ms-selectall-span");
                if (cbx != null)
                    return cbx;
            }
        }
    }
    return null;
}
function WpClick(evt) {
    var s = GetEventSrcElement(evt);
    var p = s;

    while (p != null && p.tagName != "BODY" && (p.className == null || p.className.indexOf == null || p.className.indexOf('s4-wpcell') < 0)) {
        if (p.tagName == 'A' && p.getAttribute('data-sp-continueWPSelect') == null)
            return;
        if (p.getAttribute('data-sp-cancelWPSelect') != null)
            return;
        if (p.tagName == 'DIV' && p.className != null && p.className.indexOf('s4-ctx') != -1)
            return;
        if (p.tagName == 'TH' && p.className != null && p.className.indexOf('ms-vh2') != -1)
            return;
        p = p.parentNode;
    }
    if (p != null && p.tagName != "BODY") {
        EnsureScriptParams("sp.ribbon.js", "SelectWp", p);
    }
}
function WpKeyUp(evt) {
    var focusElt = GetEventSrcElement(evt);

    if (evt.keyCode == 32 && Boolean(focusElt) && focusElt.tagName == "INPUT" && (HasCssClass(focusElt, "s4-selectAllCbx") || HasCssClass(focusElt, "s4-itm-cbx")))
        WpClick(evt);
}
function WzClick(evt, zid) {
    var s = GetEventSrcElement(evt);
    var p = s;

    while (p != null) {
        var z = p.getAttribute("ZoneID");

        if (z == zid)
            break;
        if (p.tagName == 'A')
            return;
        p = p.parentNode;
    }
    if (p != null) {
        EnsureScriptParams("sp.ribbon.js", "SelectWz", p, zid);
    }
}
function WpCbxSelect(evt) {
    var cbx = GetEventSrcElement(evt);
    var currentlySelected = cbx.checked;

    if (!currentlySelected)
        WpClick(evt);
    else
        EnsureScriptParams("sp.ribbon.js", "DeselectWpWz");
    TrapMenuClick(evt);
    if (evt.type != "keyup")
        cbx.className = "ms-webpart-checkboxHide";
}
function WpCbxKeyHandler(evt) {
    var kCode;

    if (browseris.ie)
        kCode = evt.keyCode;
    else
        kCode = evt.which;
    if (kCode == 13)
        WpCbxSelect(evt);
}
function PopoutMenuMaybeSwapImage(anchorId, iconId, src) {
    var anchor = document.getElementById(anchorId);

    if (Boolean(anchor) && typeof anchor != 'undefined') {
        if (anchor.rel == '_spPopoutMenuIsOpen')
            return;
        SwapImage(iconId, src);
    }
}
function PopoutMenuMaybeSwapImageClustered(anchorId, iconId, src, x, y, height, width) {
    var anchor = document.getElementById(anchorId);

    if (Boolean(anchor) && typeof anchor != 'undefined') {
        if (anchor.rel == '_spPopoutMenuIsOpen')
            return;
        var span = document.getElementById(iconId);
        var img = span.firstChild;

        SwapImageInternal(img, src);
        span.style.height = height + "px";
        span.style.width = width + "px";
        img.style.top = "-" + y + "px";
        img.style.left = "-" + x + "px";
    }
}
function SwapImage(id, src) {
    var img = document.getElementById(id);

    SwapImageInternal(img, src);
}
function SwapImageInternal(img, src) {
    if (Boolean(img) && typeof img != 'undefined')
        img.src = src;
}
function GetViewportHeight() {
    return document.documentElement.clientHeight;
}
function GetViewportWidth() {
    return document.documentElement.clientWidth;
}
var g_viewportHeight, g_viewportWidth, g_wpadderHeight, g_setWidth, g_setWidthInited, g_workspaceResizedHandlers, g_setScrollPos;
var g_frl;

function FixRibbonAndWorkspaceDimensionsForResize() {
    if (g_frl)
        return;
    var vph = GetViewportHeight();
    var vpw = GetViewportWidth();

    if (g_viewportHeight == vph && g_viewportWidth == vpw) {
        return;
    }
    g_viewportHeight = vph;
    g_viewportWidth = vpw;
    window.setTimeout(FixRibbonAndWorkspaceDimensions, 0);
}
function FixRibbonAndWorkspaceDimensions() {
    g_frl = true;
    var elmRibbon = GetCachedElement("s4-ribbonrow");
    var elmWorkspace = GetCachedElement("s4-workspace");
    var elmTitleArea = GetCachedElement("s4-titlerow");
    var elmBodyTable = GetCachedElement("s4-bodyContainer");
    var elmFooter = GetCachedElement("footer");
    var elmOverlay = GetCachedElement("ms-core-overlay");
    var elmGlobalNavBox = GetCachedElement("globalNavBox");
    var setWidth;

    if (!Boolean(elmRibbon) || !Boolean(elmWorkspace) || !Boolean(elmBodyTable)) {
        CallWorkspaceResizedEventHandlers();
        return;
    }
    if (!g_setWidthInited) {
        setWidth = true;
        if (elmWorkspace.className.indexOf("s4-nosetwidth") > -1)
            setWidth = false;
        g_setWidth = setWidth;
        g_setWidthInited = true;
    }
    else {
        setWidth = g_setWidth;
    }
    var baseRibbonHeight = 0;
    var isDialog = Boolean((ajaxNavigate.get_search()).match(RegExp("[?&]IsDlg=1")));

    if (Boolean(elmGlobalNavBox) && !isDialog) {
        baseRibbonHeight = RibbonIsMinimized() ? elmGlobalNavBox.offsetHeight : 126;
    }
    else {
        baseRibbonHeight = RibbonIsMinimized() ? 35 : 126;
    }
    var ribbonHeight = baseRibbonHeight + g_wpadderHeight;

    if (GetCurrentEltStyle(elmRibbon, "visibility") == "hidden") {
        ribbonHeight = 0;
    }
    if (Boolean(elmTitleArea)) {
        if (RibbonIsMinimized()) {
            elmTitleArea.className = elmTitleArea.className.replace(RegExp("s4-titlerowhidetitle"), "");
            elmTitleArea.style.display = "block";
        }
        else {
            var cn = elmTitleArea.className;

            if (cn.indexOf("s4-titlerowhidetitle") < 0)
                elmTitleArea.className = cn.concat("s4-titlerowhidetitle");
            elmTitleArea.style.display = "none";
        }
    }
    elmRibbon.style.height = String(ribbonHeight) + "px";
    var ribbonElement = GetCachedElement("s4-ribbonrow");
    var webPartAdderElement = ribbonElement.querySelector(".ms-core-webpartadder");

    if (Boolean(webPartAdderElement) && GetCurrentEltStyle(webPartAdderElement, "position") == "absolute") {
        var wpaTop = ribbonHeight;
        var ribbonHeaderElement = document.getElementById("Ribbon");

        if (Boolean(ribbonHeaderElement)) {
            var ribbonTabBodyElement = ribbonHeaderElement.querySelector(".ms-cui-tabContainer");

            if (RibbonIsMinimized() || !Boolean(ribbonTabBodyElement))
                wpaTop = AbsTop(ribbonHeaderElement) + ribbonHeaderElement.offsetHeight;
            else
                wpaTop = AbsTop(ribbonTabBodyElement) + ribbonTabBodyElement.offsetHeight;
            wpaTop -= AbsTop(ribbonElement);
            webPartAdderElement.style.top = wpaTop.toString() + "px";
        }
        else {
            webPartAdderElement.style.top = baseRibbonHeight.toString() + "px";
        }
    }
    var vph = g_viewportHeight;

    if (null === vph) {
        vph = GetViewportHeight();
        g_viewportHeight = vph;
    }
    var newWorkspaceHeight = vph - AbsTop(elmWorkspace);

    if (newWorkspaceHeight < 0)
        newWorkspaceHeight = 0;
    if (!browseris.ipad || !isDialog)
        elmWorkspace.style.height = String(newWorkspaceHeight) + "px";
    if (Boolean(elmOverlay) && !isDialog) {
        var overlayHeight = newWorkspaceHeight;

        if (overlayHeight < 0)
            overlayHeight = 0;
        elmOverlay.style.height = String(overlayHeight) + "px";
    }
    if (setWidth) {
        elmWorkspace.style.width = String(document.documentElement.clientWidth) + "px";
        if (elmBodyTable.offsetWidth < elmWorkspace.clientWidth)
            elmBodyTable.style.width = String(elmWorkspace.clientWidth) + "px";
    }
    var isIE7 = browseris.ie && browseris.iever == 7 && !browseris.ie8standard;

    if (!g_setScrollPos) {
        if (browseris.firefox && browseris.firefox36up)
            window.scrollTo(0, 0);
        if (Boolean((ajaxNavigate.get_search()).match(RegExp("[?&]IsDlg=1")))) {
            if (!isIE7 || elmWorkspace.scrollHeight < elmWorkspace.clientHeight)
                elmWorkspace.style.overflowY = "auto";
        }
        var scrollElem = document.getElementById("_maintainWorkspaceScrollPosition");

        if (scrollElem != null && scrollElem.value != null) {
            elmWorkspace.scrollTop = Number(scrollElem.value);
        }
        g_setScrollPos = true;
    }
    CallWorkspaceResizedEventHandlers();
    g_frl = false;
}
function CallWorkspaceResizedEventHandlers() {
    var handlers = [].concat(g_workspaceResizedHandlers);

    for (var i = 0, wLen = handlers.length; i < wLen; i++) {
        handlers[i]();
    }
}
function RibbonIsMinimized() {
    if (g_spribbon.isInited) {
        return g_spribbon.isMinimized;
    }
    else {
        if (typeof _ribbon == "undefined" || null === _ribbon)
            return true;
        else
            return typeof _ribbon.buildMinimized == "undefined" ? undefined : _ribbon.buildMinimized;
    }
}
var g_spribbon;

function OnRibbonMinimizedChanged(ribbonMinimized) {
    if ((ajaxNavigate.get_search()).indexOf("IsDlg=1") != -1)
        return;
    ExecuteOrDelayUntilScriptLoaded(function() {
        AnimateRibbonMinimizedChanged(ribbonMinimized);
    }, "core.js");
}
function PreRibbonTabSwitched(ribbonMinimized) {
    ExecuteOrDelayUntilScriptLoaded(function() {
        g_fSkipAnimation = false;
        PrepareRibbonForAnimation(ribbonMinimized, true);
    }, "core.js");
}
function CatchCreateError(strIgnore1, strIgnore2, strIgnore3) {
    return true;
}
function ExpandBody(guid, anchor) {
    if (typeof MSOWebPartPageFormName == "undefined")
        return false;
    var frm = document.forms[MSOWebPartPageFormName];
    var CAML_Expand = frm.elements['CAML_Expand'];

    CAML_Expand.value = CAML_Expand.value.concat(guid);
    frm.action = frm.action.concat("#" + anchor);
    frm.submit();
    return false;
}
function CollapseBody(guid, anchor) {
    if (typeof MSOWebPartPageFormName == "undefined")
        return false;
    var frm = document.forms[MSOWebPartPageFormName];
    var reg = new RegExp("\{", "g");

    guid = guid.replace(reg, "\\\{");
    reg = new RegExp("\}", "g");
    guid = guid.replace(reg, "\\\}");
    reg = new RegExp(guid, "g");
    var CAML_Expand = frm.elements['CAML_Expand'];

    CAML_Expand.value = CAML_Expand.value.replace(reg, "");
    var CAML_ShowOriginalEmailBody = frm.elements['CAML_ShowOriginalEmailBody'];

    CAML_ShowOriginalEmailBody.value = CAML_ShowOriginalEmailBody.value.replace(reg, "");
    frm.action = frm.action.concat("#" + anchor);
    frm.submit();
    return false;
}
function ShowQuotedText(guid, anchor) {
    if (typeof MSOWebPartPageFormName == "undefined")
        return false;
    var frm = document.forms[MSOWebPartPageFormName];
    var CAML_ShowOriginalEmailBody = frm.elements['CAML_ShowOriginalEmailBody'];

    CAML_ShowOriginalEmailBody.value = CAML_ShowOriginalEmailBody.value.concat(guid);
    if (frm.action.indexOf("#") > 0) {
        frm.action = frm.action.substr(0, frm.action.indexOf("#"));
    }
    frm.action = frm.action.concat("#" + anchor);
    frm.submit();
    return false;
}
function HideQuotedText(guid, anchor) {
    if (typeof MSOWebPartPageFormName == "undefined")
        return false;
    var frm = document.forms[MSOWebPartPageFormName];
    var reg = new RegExp("\{", "g");

    guid = guid.replace(reg, "\\\{");
    reg = new RegExp("\}", "g");
    guid = guid.replace(reg, "\\\}");
    reg = new RegExp(guid, "g");
    var CAML_ShowOriginalEmailBody = frm.elements['CAML_ShowOriginalEmailBody'];

    CAML_ShowOriginalEmailBody.value = CAML_ShowOriginalEmailBody.value.replace(reg, "");
    if (frm.action.indexOf("#") > 0) {
        frm.action = frm.action.substr(0, frm.action.indexOf("#"));
    }
    frm.action = frm.action.concat("#" + anchor);
    frm.submit();
    return false;
}
function GetSelectedItemsDict(ctxParam) {
    if (ctxParam != null && ctxParam.dictSel != null) {
        return ctxParam.dictSel;
    }
    return null;
}
function ClearSelectedItemsDict(context) {
    if (context != null)
        context.dictSel = [];
}
function RemoveOnlyPagingArgs(strUrl) {
    var rePagedFlag = /&*Paged=TRUE/gi;

    strUrl = strUrl.replace(rePagedFlag, "");
    var rePagedPrevFlag = /&*PagedPrev=TRUE/gi;

    strUrl = strUrl.replace(rePagedPrevFlag, "");
    var rePagedArgs = /&p_[^&]*/gi;

    strUrl = strUrl.replace(rePagedArgs, "");
    var rePagedRow = /&PageFirstRow=[^&]*/gi;

    strUrl = strUrl.replace(rePagedRow, "");
    var rePagedLastRow = /&PageLastRow=[^&]*/gi;

    strUrl = strUrl.replace(rePagedLastRow, "");
    return strUrl;
}
function RemovePagingArgs(strUrl) {
    strUrl = RemoveOnlyPagingArgs(strUrl);
    var reFilter1 = /\?Filter=1&*/gi;

    strUrl = strUrl.replace(reFilter1, "?");
    var reFilter2 = /&Filter=1/gi;

    strUrl = strUrl.replace(reFilter2, "");
    var reOrphanedQMark = /\?$/;

    strUrl = strUrl.replace(reOrphanedQMark, "");
    return strUrl;
}
var v_stsOpenDoc2;
var v_strStsOpenDoc2;

function StsOpenEnsureEx2(szProgId) {
    if (v_stsOpenDoc2 == null || v_strStsOpenDoc2 != szProgId) {
        v_stsOpenDoc2 = null;
        v_strStsOpenDoc2 = null;
        var plugin;

        if (Boolean(window.ActiveXObject)) {
            try {
                v_stsOpenDoc2 = new ActiveXObject(szProgId);
                v_strStsOpenDoc2 = szProgId;
            }
            catch (e) {
                v_stsOpenDoc2 = null;
                v_strStsOpenDoc2 = null;
            }
            ;
        }
        else if (IsSupportedMacBrowser() && szProgId.indexOf("SharePoint.OpenDocuments") >= 0) {
            plugin = CreateMacPlugin();
            if (plugin != null) {
                v_stsOpenDoc2 = plugin;
                v_strStsOpenDoc2 = "SharePoint.MacPlugin";
            }
        }
        else if (IsSupportedNPApiBrowserOnWin() && szProgId.indexOf("SharePoint.OpenDocuments") >= 0) {
            plugin = CreateNPApiOnWindowsPlugin("application/x-sharepoint");
            if (plugin != null) {
                v_stsOpenDoc2 = plugin;
                v_strStsOpenDoc2 = "SharePoint.FFWinPlugin";
            }
        }
    }
    return v_stsOpenDoc2;
}
function StURLSetVar2(stURL, stVar, stValue) {
    var stNewSet = stVar + "=" + stValue;
    var ichQ = stURL.indexOf("?");
    var ichH = stURL.indexOf("#");

    if (ichQ != -1) {
        var ich = stURL.indexOf("?" + stVar + "=", ichQ);

        if (ich == -1) {
            ich = stURL.indexOf("&" + stVar + "=", ichQ);
            if (ich != -1)
                stNewSet = "&" + stNewSet;
        }
        else {
            stNewSet = "?" + stNewSet;
        }
        if (ich != -1) {
            var re = new RegExp("[&?]" + stVar + "=[^&#]*", "");

            stURL = stURL.replace(re, stNewSet);
        }
        else {
            if (ichH == -1)
                stURL = stURL + "&" + stNewSet;
            else
                stURL = stURL.substr(0, ichH) + "&" + stNewSet + stURL.substr(ichH);
        }
    }
    else {
        if (ichH == -1)
            stURL = stURL + "?" + stNewSet;
        else
            stURL = stURL.substr(0, ichH) + "?" + stNewSet + stURL.substr(ichH);
    }
    return stURL;
}
function RemoveQueryParameterFromUrl(stURL, stParameterName) {
    var re = new RegExp("[&?]" + stParameterName + "=[^&]*", "");

    stURL = stURL.replace(re, "");
    if (stURL.indexOf("?") == -1) {
        var ich = stURL.indexOf("&");

        if (ich != -1)
            stURL = stURL.substring(0, ich) + "?" + stURL.substring(ich + 1);
    }
    return stURL;
}
function HasValidUrlPrefix(url) {
    var urlLower = url.toLowerCase();

    if (-1 == urlLower.search(RegExp("^http://")) && -1 == urlLower.search(RegExp("^https://")))
        return false;
    return true;
}
function AbsLeft(obj) {
    var x = obj.offsetLeft;
    var p = obj.offsetParent;

    while (p != null && p.tagName != "BODY") {
        x += p.offsetLeft;
        p = p.offsetParent;
    }
    if (p != null)
        x += p.offsetLeft;
    return x;
}
function AbsTop(obj) {
    var y = obj.offsetTop;
    var p = obj.offsetParent;

    while (p != null && p.tagName != "BODY") {
        y += p.offsetTop;
        p = p.offsetParent;
    }
    if (p != null)
        y += p.offsetTop;
    return y;
}
function GetEventCoords(ev) {
    var x, y;

    if ("undefined" !== typeof ev.pageX && "undefined" !== typeof ev.pageY) {
        x = ev.pageX;
        y = ev.pageY;
    }
    else {
        x = ev.clientX;
        y = ev.clientY;
        if ("undefined" !== typeof document.body && null !== document.body) {
            x += document.body.scrollLeft;
            y += document.body.scrollTop;
        }
        if ("undefined" !== typeof document.documentElement && null !== document.documentElement) {
            x += document.documentElement.scrollLeft;
            y += document.documentElement.scrollTop;
        }
    }
    return {
        x: x,
        y: y
    };
}
function IsLeavingObject(ev, obj) {
    var to;

    if (!Boolean(ev))
        ev = window.event;
    to = Boolean(ev.toElement) ? ev.toElement : ev.relatedTarget;
    if (null == to)
        return false;
    while (to != obj && to != null)
        to = to.parentNode;
    return to != obj;
}
var deleteInstance;

function DeleteItemConfirmation() {
    var message = "";

    if (typeof ItemIsCopy != "undefined")
        if (ItemIsCopy)
            message = Strings.STS.L_NotifyThisIsCopy_Text;
    if (cascadeDeleteWarningMessage != "") {
        message += cascadeDeleteWarningMessage;
    }
    if (recycleBinEnabled == 1 && deleteInstance != 1)
        message += Strings.STS.L_STSRecycleConfirm_Text;
    else
        message += Strings.STS.L_STSDelConfirm_Text;
    return confirm(message);
}
function DeleteInstanceConfirmation() {
    deleteInstance = 1;
    return DeleteItemConfirmation();
}
function CancelMultiPageConfirmation(redirectUrl) {
    var message = "";

    if (recycleBinEnabled == 1)
        message = Strings.STS.L_DeletePartialResponse1_text;
    else
        message = Strings.STS.L_DeletePartialResponse2_text;
    if (confirm(message) == true)
        return true;
    else
        STSNavigate(redirectUrl);
    return false;
}
function RestoreItemVersionConfirmation() {
    var message = Strings.STS.L_Version_Restore_Confirm_Text;

    return confirm(message);
}
function DeleteItemVersionConfirmation(bRecycleBinEnabled) {
    if (bRecycleBinEnabled)
        return confirm(Strings.STS.L_Version_Recycle_Confirm_Text);
    else
        return confirm(Strings.STS.L_Version_Delete_Confirm_Text);
}
function DeleteUserInfoItemConfirmation() {
    var message = Strings.STS.L_User_Delete_Confirm_Text;

    return confirm(message);
}
function UnlinkCopyConfirmation(strItemUrl) {
    return confirm(Strings.STS.L_ConfirmUnlinkCopy_Text);
}
function SupportsNavigateHttpFolder() {
    return browseris.ie5up;
}
function MtgDeletePageConfirm() {
    var text;

    if ((document.getElementById("MtgTlPart_PageType")).value == 'MtgTlPart_LocalPage')
        text = Strings.STS.L_DeleteConfirm_Text;
    else
        text = Strings.STS.L_DeleteGlobalConfirm_Text + Strings.STS.L_DeleteConfirm_Text;
    return confirm(text);
}
function IsImgLibJssLoaded() {
    if (typeof fImglibJssLoaded != "undefined")
        return fImglibJssLoaded;
    return false;
}
function GetFirstChildElement(e) {
    for (var i = 0; i < e.childNodes.length; i++) {
        if (e.childNodes[i].nodeType == 1)
            return e.childNodes[i];
    }
    return null;
}
function TestGCObject(GCObject) {
    if (browseris.ie55up && typeof GCObject == "undefined" || GCObject == null || typeof GCObject.object == 'undefined' || GCObject.object == null)
        return false;
    return true;
}
function MMU_GetMenuFromClientId(clientId) {
    return document.getElementById(clientId);
}
function MMU_EcbLinkOnKeyDown(menu, ecbLink, e) {
    if (e == null) {
        e = window.event;
        if (e == null)
            return false;
    }
    var nKeyCode = GetEventKeyCode(e);
    var hasHref = ecbLink.href != null && ecbLink.href.length > 0;

    if ((e.shiftKey || !hasHref) && nKeyCode == 13 || nKeyCode == 32 || e.altKey && nKeyCode == 40) {
        var image = byid(ecbLink.id + "_ti");

        if (image == null) {
            var serverClientId = ecbLink.getAttribute("serverclientid");

            if (serverClientId != null && serverClientId.length > 0) {
                image = byid(serverClientId + "_ti");
            }
        }
        if (image != null) {
            ClkElmt(image);
        }
        else {
            ClkElmt(ecbLink);
        }
        return false;
    }
    else {
        return true;
    }
}
var firstCalled;
var _callbackinitdelayed;

function DeferWebFormInitCallback() {
    if (typeof WebForm_InitCallback == 'function' && typeof window['_WebForm_InitCallback'] == 'undefined')
        window['_WebForm_InitCallback'] = window['WebForm_InitCallback'];
    window['WebForm_InitCallback'] = function() {
        if (firstCalled) {
            firstCalled = false;
            _callbackinitdelayed = true;
            _spBodyOnLoadFunctionNames.push('WebForm_InitCallback');
        }
        else {
            _callbackinitdelayed = false;
            if (typeof window._WebForm_InitCallback == 'function')
                window._WebForm_InitCallback();
        }
    };
    if (typeof WebForm_DoCallback == 'function' && typeof window['_WebForm_DoCallback'] == 'undefined')
        window['_WebForm_DoCallback'] = window['WebForm_DoCallback'];
    window['WebForm_DoCallback'] = function(eventTarget, eventArgument, eventCallback, context, errorCallback, useAsync) {
        if (_callbackinitdelayed) {
            _callbackinitdelayed = false;
            if (_spBodyOnLoadFunctionNames != null) {
                var count = _spBodyOnLoadFunctionNames.length;

                for (var i = 0; i < count; i++) {
                    if (_spBodyOnLoadFunctionNames[i] == "WebForm_InitCallback") {
                        _spBodyOnLoadFunctionNames.splice(i, 1);
                        break;
                    }
                }
            }
            if (typeof window._WebForm_InitCallback == 'function')
                window._WebForm_InitCallback();
        }
        window['_WebForm_DoCallback'](eventTarget, eventArgument, eventCallback, context, errorCallback, useAsync);
    };
}
var fRightToLeft;

function _ribbonShouldFixRtlHeaders(isRtl) {
    return browseris.ie && browseris.iever == 7 && !browseris.ie8standard && isRtl;
}
var g_spDragDropUpload;

function WPQRegisterDragDropUpload() {
    var registerFunc = function() {
        for (var wpqKey in g_spDragDropUpload) {
            var uploadInfo = g_spDragDropUpload[wpqKey];
            var WPQDiv = document.getElementById(wpqKey);

            if (WPQDiv != null && typeof WPQDiv != 'undefined') {
                registerDragUpload(WPQDiv, uploadInfo.serverUrl, uploadInfo.siteRelativeUrl, uploadInfo.listName, uploadInfo.rootFolder, uploadInfo.overwriteAll, uploadInfo.hideProgressBar, uploadInfo.refreshFunc, uploadInfo.preUploadFunc, uploadInfo.postUploadFunc, uploadInfo.checkPermissionFunc);
            }
        }
    };

    EnsureScriptFunc('DragDrop.js', "registerDragUpload", registerFunc);
}
function SPDragUploadInfo(webPartId, serverUrl, siteRelativeUrl, listName, rootFolder, overwriteAll, hideProgressBar, refreshFunc, preUploadFunc, postUploadFunc, checkPermissionFunc) {
    this.webPartId = webPartId;
    this.serverUrl = serverUrl;
    this.siteRelativeUrl = siteRelativeUrl;
    this.listName = listName;
    this.rootFolder = rootFolder;
    this.overwriteAll = overwriteAll;
    this.hideProgressBar = hideProgressBar;
    this.refreshFunc = refreshFunc;
    this.preUploadFunc = preUploadFunc;
    this.postUploadFunc = postUploadFunc;
    this.checkPermissionFunc = checkPermissionFunc;
}
var g_QuickLaunchControlIds;

function _registerCommonComponents() {
    SP.Ribbon.HelpPageComponent.registerWithPageManager();
    SP.Ribbon.UserInterfacePageComponent.registerWithPageManager();
}
function ExecuteAndRegisterBeginEndFunctions(script, beginFunc, endFunc, loadFunc) {
    RegisterBeginEndFunctions(script, script, beginFunc, endFunc, loadFunc);
    if (null != beginFunc) {
        beginFunc();
    }
    if (null != endFunc) {
        endFunc();
    }
    if (null != loadFunc) {
        loadFunc();
    }
}
function RegisterBeginEndFunctions(script, tag, beginFunc, endFunc, loadFunc) {
    if ("string" != typeof tag)
        throw "Unexpected";
    if (!(null == beginFunc || "function" == typeof beginFunc))
        throw "Unexpected";
    if (!(null == endFunc || "function" == typeof endFunc))
        throw "Unexpected";
    if (!(null == loadFunc || "function" == typeof loadFunc))
        throw "Unexpected";
    if (!g_supportFiles[tag]) {
        g_supportFiles[tag] = {
            tag: tag,
            scriptURI: new URI(script),
            beginFunc: beginFunc,
            endFunc: endFunc,
            loadFunc: loadFunc,
            executed: false
        };
    }
}
function RegisterModuleInit(scriptFileName, initFunc) {
    RegisterBeginEndFunctions(scriptFileName, scriptFileName, initFunc, null, null);
}
function SetElementStyle(ctlId, styleName) {
    var elmScope = document.getElementById(ctlId);

    if (typeof elmScope != 'undefined' && elmScope != null && elmScope.className != styleName) {
        elmScope.className = styleName;
    }
}
function RemoveCachingParamsFromUrl(sourceUrl) {
    return RemoveQueryParameterFromUrl(RemoveQueryParameterFromUrl(sourceUrl, 'rev'), 'ctag');
}
function registerCssLink(cssLink, callback) {
    _registerCssLink(cssLink, null, function(e) {
        if ("undefined" != typeof g_MinimalDownload && g_MinimalDownload && 'undefined' != typeof asyncDeltaManager && 'undefined' != typeof AsyncDeltaManager$_registerLinkCallback) {
            AsyncDeltaManager$_registerLinkCallback(e);
        }
        if ('function' == typeof callback) {
            callback(e);
        }
    });
}
function GetAbsoluteUrl(url) {
    var dummyAnchor = document.createElement('a');

    dummyAnchor.href = url;
    var retVal = dummyAnchor.href;

    dummyAnchor = null;
    return retVal;
}
function _registerCssLink(cssLink, head, callback, loadCompletedCallback) {
    var found = false;
    var retval = 0;

    if (null == head) {
        head = (document.getElementsByTagName('head'))[0];
    }
    var links = head.getElementsByTagName('link');
    var linksCount = links.length;
    var sourceURL = GetAbsoluteUrl(cssLink);

    for (var j = 0; j < linksCount; j++) {
        if (links[j].rel == "stylesheet" && links[j].type == "text/css") {
            var source = links[j].href;

            if (null != source && source.length > 0) {
                if (sourceURL == source) {
                    var deleteAttrib = links[j].getAttribute("toDelete");

                    if (Boolean(deleteAttrib))
                        links[j].removeAttribute("toDelete");
                    found = true;
                    break;
                }
                if (RemoveCachingParamsFromUrl(sourceURL) == RemoveCachingParamsFromUrl(source)) {
                    return -1;
                }
            }
        }
    }
    if (!found) {
        var aLink = document.createElement("link");

        aLink.rel = "stylesheet";
        aLink.type = "text/css";
        aLink.href = cssLink;
        head.appendChild(aLink);
        if (browseris.chrome || browseris.safari) {
            var pollInterval = 10;
            var startTime = Number(new Date());
            var maxPollTime = 500;

            setTimeout(bindArguments(function CssLinkCallback(timestart, myLink) {
                if (typeof myLink.sheet == "undefined" || myLink.sheet == null || typeof myLink.sheet.cssRules == "undefined" || myLink.sheet.cssRules == null) {
                    if (Number(new Date()) - timestart < maxPollTime)
                        setTimeout(bindArguments(CssLinkCallback, timestart, myLink), pollInterval);
                    else if (typeof loadCompletedCallback == "function")
                        loadCompletedCallback();
                }
                else if (myLink.sheet.cssRules && typeof loadCompletedCallback == "function")
                    loadCompletedCallback();
            }, startTime, aLink), pollInterval);
        }
        else {
            if (typeof loadCompletedCallback == "function") {
                $addHandler(aLink, 'load', loadCompletedCallback);
                if (Boolean(aLink.addEventListener))
                    aLink.addEventListener('error', loadCompletedCallback, false);
            }
        }
        if (null != callback) {
            callback(aLink);
        }
        retval = 1;
    }
    return retval;
}
function replacePlaceholderElement(elementId, markupText) {
    var el = document.getElementById(elementId);
    var el2 = document.createElement("span");
    var p = el.parentNode;

    el2.innerHTML = markupText;
    var len = el2.childNodes.length;

    switch (len) {
    case 0:
        break;
    case 1:
        p.replaceChild(el2.childNodes[0], el);
        break;
    default:
        for (var i = 0; i < len; i++) {
            p.insertBefore(el2.childNodes[0], el);
        }
        p.removeChild(el);
        break;
    }
}
function pxToNum(px) {
    if (px === "" || px === "none")
        return 0;
    return parseInt(px);
}
function fIsNullOrUndefined(obj) {
    return typeof obj == "undefined" || obj == null;
}
function IsStrNullOrEmpty(str) {
    return str == null || str.length == 0;
}
function bindArguments() {
    var args = arguments;
    var fn = Array.prototype.shift.call(args);

    return function() {
        return fn.apply(this, args);
    };
}
function OpenSuiteLinksJson() {
    var linksJson = null;

    if (!IsNullOrUndefined(window.localStorage) && typeof window.localStorage.SPSuiteLinksJson == 'string') {
        linksJson = window.localStorage.SPSuiteLinksJson;
    }
    else if (typeof SPSuiteNavBar != 'undefined' && typeof SPSuiteNavBar.cachedJson == 'string') {
        linksJson = SPSuiteNavBar.cachedJson;
    }
    return linksJson;
}
var IMNControlObj;
var bIMNControlInited;
var IMNDictionaryObj;
var bIMNSorted;
var bIMNOnloadAttached;
var IMNOrigScrollFunc;
var bIMNInScrollFunc;
var IMNSortableObj;
var IMNHeaderObj;
var IMNNameDictionaryObj;
var IMNShowOfflineObj;

function GetCurrentEvent(objEvent) {
    if (browseris.ie5up)
        return window.event;
    if (Boolean(objEvent))
        return objEvent;
    return window.event;
}
function GetEventTarget(objEvent) {
    if (Boolean(objEvent.srcElement))
        return objEvent.srcElement;
    return objEvent.target;
}
function EnsureIMNControl() {
    if (!bIMNControlInited || IMNControlObj == null) {
        var serverPresenceEnabled = typeof g_presenceEnabled != "undefined" && g_presenceEnabled;

        try {
            if (IsSupportedMacBrowser()) {
                IMNControlObj = CreateMacPlugin();
            }
            else if (IsSupportedNPApiBrowserOnWin()) {
                IMNControlObj = CreateNPApiOnWindowsPlugin("application/x-sharepoint-uc");
                if (IMNControlObj != null && serverPresenceEnabled)
                    IMNControlObj.OnStatusChange = IMNOnStatusChange;
            }
            else if (browseris.ie5up) {
                if (Boolean(window.ActiveXObject)) {
                    IMNControlObj = new ActiveXObject("Name.NameCtrl.1");
                    if (IMNControlObj && serverPresenceEnabled) {
                        var onStatusChange;

                        if (IsSupportedMacBrowser())
                            onStatusChange = "IMNOnStatusChange";
                        else
                            onStatusChange = IMNOnStatusChange;
                        IMNControlObj.OnStatusChange = onStatusChange;
                    }
                }
            }
            bIMNControlInited = true;
        }
        catch (e) {
            IMNControlObj = null;
        }
        AddEvtHandler(window, "onbeforeunload", DiscardIMNControl);
    }
    return IMNControlObj;
}
function DiscardIMNControl() {
    IMNControlObj = null;
    bIMNControlInited = false;
}
function IMNImageInfo_InitializePrototype() {
    IMNImageInfo.prototype.img = null;
    IMNImageInfo.prototype.classPrefix = null;
    IMNImageInfo.prototype.alt = '';
}
function IMNImageInfo() {
}
function IMNGetStatusImage(state, showoffline) {
    var img = "spimn.png";
    var classPrefix = "ms-spimn-presence-disconnected";
    var alt = "";

    switch (state) {
    case 0:
        classPrefix = "ms-spimn-presence-online";
        alt = Strings.STS.L_IMNOnline_Text;
        break;
    case 11:
        classPrefix = "ms-spimn-presence-online-oof";
        alt = Strings.STS.L_IMNOnline_OOF_Text;
        break;
    case 1:
        if (showoffline) {
            classPrefix = "ms-spimn-presence-offline";
            alt = Strings.STS.L_IMNOffline_Text;
        }
        else {
            classPrefix = "";
            alt = "";
        }
        break;
    case 12:
        if (showoffline) {
            classPrefix = "ms-spimn-presence-offline-oof";
            alt = Strings.STS.L_IMNOffline_OOF_Text;
        }
        else {
            classPrefix = "";
            alt = "";
        }
        break;
    case 2:
        classPrefix = "ms-spimn-presence-away";
        alt = Strings.STS.L_IMNAway_Text;
        break;
    case 13:
        classPrefix = "ms-spimn-presence-away-oof";
        alt = Strings.STS.L_IMNAway_OOF_Text;
        break;
    case 3:
        classPrefix = "ms-spimn-presence-busy";
        alt = Strings.STS.L_IMNBusy_Text;
        break;
    case 14:
        classPrefix = "ms-spimn-presence-busy-oof";
        alt = Strings.STS.L_IMNBusy_OOF_Text;
        break;
    case 4:
        classPrefix = "ms-spimn-presence-away";
        alt = Strings.STS.L_IMNAway_Text;
        break;
    case 5:
        classPrefix = "ms-spimn-presence-busy";
        alt = Strings.STS.L_IMNBusy_Text;
        break;
    case 6:
        classPrefix = "ms-spimn-presence-away";
        alt = Strings.STS.L_IMNAway_Text;
        break;
    case 7:
        classPrefix = "ms-spimn-presence-busy";
        alt = Strings.STS.L_IMNBusy_Text;
        break;
    case 8:
        classPrefix = "ms-spimn-presence-away";
        alt = Strings.STS.L_IMNAway_Text;
        break;
    case 9:
        classPrefix = "ms-spimn-presence-donotdisturb";
        alt = Strings.STS.L_IMNDoNotDisturb_Text;
        break;
    case 15:
        classPrefix = "ms-spimn-presence-donotdisturb-oof";
        alt = Strings.STS.L_IMNDoNotDisturb_OOF_Text;
        break;
    case 21:
        classPrefix = "ms-spimn-presence-donotdisturb";
        alt = Strings.STS.L_IMNInPresentation_Text;
        break;
    case 10:
        classPrefix = "ms-spimn-presence-busy";
        alt = Strings.STS.L_IMNBusy_Text;
        break;
    case 16:
        classPrefix = "ms-spimn-presence-away";
        alt = Strings.STS.L_IMNIdle_Text;
        break;
    case 17:
        classPrefix = "ms-spimn-presence-away-oof";
        alt = Strings.STS.L_IMNIdle_OOF_Text;
        break;
    case 18:
        classPrefix = "ms-spimn-presence-blocked";
        alt = Strings.STS.L_IMNBlocked_Text;
        break;
    case 19:
        classPrefix = "ms-spimn-presence-busy";
        alt = Strings.STS.L_IMNBusy_Text;
        break;
    case 20:
        classPrefix = "ms-spimn-presence-busy-oof";
        alt = Strings.STS.L_IMNBusy_OOF_Text;
        break;
    }
    var imnInfo = new IMNImageInfo();

    imnInfo.img = img;
    imnInfo.classPrefix = classPrefix;
    imnInfo.alt = alt;
    return imnInfo;
}
function IMNGetHeaderImage() {
    var imnInfo = new IMNImageInfo();

    imnInfo.img = "imnhdr.gif";
    imnInfo.alt = "";
    return imnInfo;
}
function IMNIsOnlineState(state) {
    if (state == 1) {
        return false;
    }
    return true;
}
function IMNSortList(j, oldState, state) {
    var objTable = null;
    var objRow = null;

    if (Boolean(IMNSortableObj) && IMNSortableObj[j]) {
        objRow = document.getElementById(j);
        while (Boolean(objRow) && !(objRow.tagName == "TR" && typeof objRow.Sortable != "undefined")) {
            objRow = objRow.parentNode;
        }
        objTable = objRow;
        while (Boolean(objTable) && objTable.tagName != "TABLE") {
            objTable = objTable.parentNode;
        }
        var objTableRows = objTable.rows;

        if (objTable != null && objRow != null) {
            if (objTableRows[1].style.display == "none") {
                for (var i = 1; i < 4; i++) {
                    objTableRows[i].style.display = "block";
                }
            }
            if (!IMNIsOnlineState(oldState) && IMNIsOnlineState(state)) {
                objTableRows[2].style.display = "none";
                i = 3;
                while (objTableRows[i].id != "Offline" && Number(objTableRows[i].innerText) < Number(objRow.innerText))
                    i++;
                if (typeof objTable.moveRow == 'function')
                    objTable.moveRow(objRow.rowIndex, i);
                if (objTableRows[objTableRows.length - 3].id == "Offline") {
                    objTableRows[objTableRows.length - 2].style.display = "block";
                }
            }
            else if (IMNIsOnlineState(oldState) && !IMNIsOnlineState(state)) {
                if (objRow.rowIndex == 3 && objTableRows[objRow.rowIndex + 1].id == "Offline") {
                    objTableRows[2].style.display = "block";
                }
                if (objTableRows[objTableRows.length - 3].id == "Offline") {
                    objTableRows[objTableRows.length - 2].style.display = "none";
                }
                i = objTableRows.length - 2;
                while (objTableRows[i - 1].id != "Offline" && Number(objTableRows[i].innerText) > Number(objRow.innerText))
                    i--;
                objTable.moveRow(objRow.rowIndex, i);
            }
        }
    }
}
function IMNOnStatusChange(nameParam, state, id) {
    if (Boolean(IMNDictionaryObj)) {
        var img = IMNGetStatusImage(state, IMNSortableObj[id] || IMNShowOfflineObj[id]);

        if (IMNDictionaryObj[id] != state) {
            if (bIMNSorted)
                IMNSortList(id, IMNDictionaryObj[id], state);
            IMNUpdateImage(id, img);
            IMNDictionaryObj[id] = state;
        }
    }
}
function IMNUpdateImageClassPrefix(obj, classPrefix) {
    var exp = /ms-spimn-presence-[a-zA-Z]*-([0-9])/i;
    var oldClass = obj.getAttribute("class");

    if (oldClass != null) {
        obj.setAttribute("class", oldClass.replace(exp, classPrefix + "-" + "$1"));
    }
}
function IMNUpdateImage(id, imgInfo) {
    var obj = document.images[id];

    if (Boolean(obj)) {
        var parentNode = obj.parentNode;

        if (parentNode.firstChild != obj)
            parentNode.insertBefore(obj, parentNode.firstChild);
        var img = imgInfo.img;
        var classPrefix = imgInfo.classPrefix;
        var alt = imgInfo.alt;
        var oldImg = obj.src;

        if (typeof obj.src == "undefined")
            oldImg = (obj.item(0)).src;
        var index = oldImg.lastIndexOf("/");
        var newImg = oldImg.slice(0, index + 1);

        newImg += img;
        IMNUpdateImageClassPrefix(obj, classPrefix);
        if (oldImg == newImg && img != 'blank.gif')
            return;
        if (typeof obj.altbase != 'undefined' && Boolean(obj.altbase)) {
            obj.alt = obj.altbase;
        }
        else {
            obj.alt = alt;
        }
        var useFilter = browseris.ie && browseris.ie55up && browseris.verIEFull < 7.0;
        var isPng = (newImg.toLowerCase()).indexOf(".png") > 0;

        if (useFilter) {
            if (isPng) {
                obj.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src=" + newImg + "),sizingMethod=scale,enabled=true);";
                obj.src = "/_layouts/15/images/blank.gif?rev=23";
            }
            else {
                obj.style.filter = "";
                obj.src = newImg;
            }
        }
        else {
            obj.src = newImg;
        }
    }
}
function IMNHandleAccelerator(objEvent) {
    if (IMNControlObj) {
        var currEvent = GetCurrentEvent(objEvent);

        if (currEvent.altKey && currEvent.shiftKey && currEvent.keyCode == 121) {
            if (typeof IMNControlObj.DoAccelerator != 'undefined')
                IMNControlObj.DoAccelerator();
        }
    }
}
function IMNImageOnClick(objEvent) {
    if (IMNControlObj) {
        IMNShowOOUIKyb(objEvent);
        if (typeof IMNControlObj.DoAccelerator != 'undefined')
            IMNControlObj.DoAccelerator();
    }
}
function IMNGetOOUILocation(obj) {
    var objRet = new Object;
    var objSpan = obj;
    var objOOUI = obj;
    var objImg = obj;
    var oouiX = 0, oouiY = 0, objDX = 0;
    var fRtl = document.dir == "rtl";
    var objSpanClass = objSpan.className;

    while (Boolean(objSpan) && (objSpanClass == null || objSpanClass.indexOf("ms-imnSpan") == -1) && objSpan.tagName != "TABLE") {
        if (objSpan.tagName == "TD" && objSpanClass.indexOf("ms-vb") >= 0)
            break;
        objSpan = objSpan.parentNode;
        if (!Boolean(objSpan))
            return null;
        objSpanClass = objSpan.className;
    }
    if (Boolean(objSpan)) {
        var childNode;

        if (objSpan.tagName == "TABLE") {
            var row = objSpan.rows(0);
            var cell = row.cells(0);

            childNode = cell.firstChild;
        }
        else
            childNode = objSpan.firstChild;
        while (childNode != null) {
            if (childNode.tagName == "A") {
                var linkDescendant = childNode.firstChild;

                while (linkDescendant != null) {
                    if (linkDescendant.tagName == "IMG" && Boolean(linkDescendant.id)) {
                        childNode = linkDescendant;
                        break;
                    }
                    linkDescendant = linkDescendant.firstChild;
                }
            }
            if (childNode.tagName == "IMG" && Boolean(childNode.id)) {
                objOOUI = childNode;
                break;
            }
            childNode = childNode.nextSibling;
        }
        objImg = objOOUI;
        objOOUI = objSpan;
    }
    obj = objOOUI;
    var zoom = 1;

    if (Boolean(browseris.ie9standardUp))
        zoom = window.screen.deviceXDPI / window.screen.logicalXDPI;
    oouiY = (objOOUI.getBoundingClientRect()).top * zoom - 5;
    oouiX = (objOOUI.getBoundingClientRect()).left * zoom - 5;
    var parentObj = objOOUI.parentNode;

    while ((oouiX < 0 || oouiY < 0) && parentObj != null && Boolean(parentObj.getBoundingClientRect)) {
        oouiY = (parentObj.getBoundingClientRect()).top * zoom - 5;
        oouiX = (parentObj.getBoundingClientRect()).left * zoom - 5;
        parentObj = parentObj.parentNode;
    }
    try {
        var currentWindow = window;

        while (Boolean(currentWindow) && currentWindow != currentWindow.parent) {
            var iframe = currentWindow.frameElement;
            var iframebcr = Boolean(iframe) ? iframe.getBoundingClientRect() : null;
            var iframetop = Boolean(iframebcr) ? iframebcr.top : 0;
            var iframeleft = Boolean(iframebcr) ? iframebcr.left : 0;

            oouiY += iframetop;
            oouiX += iframeleft;
            currentWindow = currentWindow.parent;
        }
    }
    catch (e) { }
    ;
    objRet.objSpan = objSpan;
    objRet.objOOUI = objOOUI != objSpan ? objOOUI : objImg;
    objRet.oouiX = oouiX;
    objRet.oouiY = oouiY;
    return objRet;
}
function IMNShowOOUIMouse(objEvent) {
    IMNShowOOUI(objEvent, 0);
}
function IMNShowOOUIKyb(objEvent) {
    IMNShowOOUI(objEvent, 1);
}
function IMNShowOOUI(objEvent, inputType) {
    if (browseris.ie5up || IsSupportedMacBrowser() || IsSupportedNPApiBrowserOnWin()) {
        var currEvent = GetCurrentEvent(objEvent);
        var obj = GetEventTarget(currEvent);
        var objSpan = obj;
        var objOOUI = obj;
        var oouiX = 0, oouiY = 0;

        if (EnsureIMNControl() && Boolean(IMNNameDictionaryObj)) {
            var objRet = IMNGetOOUILocation(obj);

            if (Boolean(objRet)) {
                objSpan = objRet.objSpan;
                objOOUI = objRet.objOOUI;
                oouiX = objRet.oouiX;
                oouiY = objRet.oouiY;
                if (Boolean(currEvent.clientX))
                    oouiX = currEvent.clientX;
                var nameParam = IMNNameDictionaryObj[objOOUI.id];

                if (nameParam == null || nameParam.length < 1)
                    return;
                if (Boolean(objSpan))
                    objSpan.onkeydown = IMNHandleAccelerator;
                if (typeof IMNControlObj.ShowOOUI != 'undefined')
                    IMNControlObj.ShowOOUI(nameParam, inputType, Math.round(oouiX), Math.round(oouiY));
            }
        }
    }
}
function IMNHideOOUI() {
    if (Boolean(IMNControlObj)) {
        if (typeof IMNControlObj.HideOOUI != 'undefined')
            IMNControlObj.HideOOUI();
        return false;
    }
    return true;
}
function IMNScroll() {
    if (!bIMNInScrollFunc) {
        bIMNInScrollFunc = true;
        IMNHideOOUI();
    }
    bIMNInScrollFunc = false;
    if (IMNOrigScrollFunc == IMNScroll)
        return true;
    return Boolean(IMNOrigScrollFunc) ? IMNOrigScrollFunc() : true;
}
var imnCount;
var imnElems;
var imnElemsCount;
var imnMarkerBatchSize;
var imnMarkerBatchDelay;

function ProcessImn() {
    imnCount = 0;
    imnElems = document.getElementsByName("imnmark");
    imnElemsCount = imnElems.length;
    if (EnsureIMNControl()) {
        ProcessImnMarkers();
    }
    else {
        RemoveImnAnchors();
    }
}
function ClientCanHandleImn() {
    return EnsureIMNControl() && typeof IMNControlObj.PresenceEnabled != 'undefined' && IMNControlObj.PresenceEnabled;
}
function RemoveImnAnchors() {
    for (var i = 0; i < imnElemsCount; i++) {
        var imnElem = imnElems[i];
        var imnAnchor = imnElem.parentNode;

        while (imnAnchor != null && !IsImnAnchor(imnAnchor)) {
            imnElem = imnAnchor;
            imnAnchor = imnAnchor.parentNode;
        }
        if (IsImnAnchor(imnAnchor) && imnAnchor.childNodes.length == 1) {
            imnAnchor.setAttribute("tabIndex", "-1");
            imnAnchor.onclick = null;
        }
    }
    var imnEmptyElems = document.getElementsByName("imnempty");

    for (i = 0; i < imnEmptyElems.length; i++) {
        imnElem = imnEmptyElems[i];
        imnAnchor = imnElem.parentNode;
        if (imnAnchor != null && imnAnchor.tagName == "SPAN" && !Boolean(imnAnchor.getAttribute("title")))
            imnAnchor.appendChild(imnElem);
    }
}
function ProcessImnMarkers() {
    for (var i = 0; i < imnMarkerBatchSize; ++i) {
        if (imnCount == imnElemsCount)
            return;
        var imnElem = imnElems[imnCount];

        if (imnElem != null && typeof imnElem != 'undefined') {
            IMNRC(imnElem.getAttribute("sip"), imnElem);
        }
        imnCount++;
    }
    setTimeout("ProcessImnMarkers()", imnMarkerBatchDelay);
}
function IMNRC(nameParam, elem) {
    if (nameParam == null || nameParam == '')
        return;
    var presenceEnabled = typeof g_presenceEnabled != "undefined" && g_presenceEnabled && EnsureIMNControl() && IMNControlObj.PresenceEnabled;

    if (browseris.ie5up || IsSupportedMacBrowser() || IsSupportedNPApiBrowserOnWin()) {
        var obj = Boolean(elem) ? elem : window.event.srcElement;
        var objSpan = obj;
        var id = obj.id;

        if (!Boolean(IMNDictionaryObj)) {
            IMNDictionaryObj = new Object();
            IMNNameDictionaryObj = new Object();
            IMNSortableObj = new Object();
            IMNShowOfflineObj = new Object();
            if (!Boolean(IMNOrigScrollFunc)) {
                if (typeof window.onscroll != 'undefined')
                    IMNOrigScrollFunc = window.onscroll;
                window.onscroll = IMNScroll;
            }
        }
        if (Boolean(IMNDictionaryObj)) {
            if (!IMNNameDictionaryObj[id]) {
                IMNNameDictionaryObj[id] = nameParam;
            }
            if (typeof IMNDictionaryObj[id] == "undefined") {
                IMNDictionaryObj[id] = 1;
            }
            if (!IMNSortableObj[id] && typeof obj.Sortable != "undefined") {
                IMNSortableObj[id] = obj.Sortable;
                if (!bIMNOnloadAttached && presenceEnabled) {
                    AttachEvent("load", IMNSortTable, window);
                    bIMNOnloadAttached = true;
                }
            }
            if (!IMNShowOfflineObj[id] && obj.getAttribute("ShowOfflinePawn") != null) {
                IMNShowOfflineObj[id] = obj.getAttribute("ShowOfflinePawn");
            }
            if (presenceEnabled) {
                var state = 1, img;

                if (typeof IMNControlObj.GetStatus != 'undefined')
                    state = IMNControlObj.GetStatus(nameParam, id);
                if (IMNIsOnlineState(state) || IMNSortableObj[id] || IMNShowOfflineObj[id]) {
                    img = IMNGetStatusImage(state, IMNSortableObj[id] || IMNShowOfflineObj[id]);
                    IMNUpdateImage(id, img);
                    IMNDictionaryObj[id] = state;
                }
            }
        }
        var objRet = IMNGetOOUILocation(obj);

        if (Boolean(objRet)) {
            SetImnOnClickHandler(objRet.objOOUI);
            objSpan = objRet.objSpan;
            if (Boolean(objSpan)) {
                objSpan.onmouseover = IMNShowOOUIMouse;
                objSpan.onfocusin = IMNShowOOUIKyb;
                objSpan.onmouseout = IMNHideOOUI;
                objSpan.onfocusout = IMNHideOOUI;
            }
        }
    }
}
function IsImnAnchor(node) {
    if (!Boolean(node))
        return false;
    var nodeClass = node.className;

    return nodeClass != null && nodeClass.indexOf("ms-imnlink") != -1;
}
function SetImnOnClickHandler(imgNode) {
    var parentNode = imgNode.parentNode;
    var currNode = parentNode;
    var nodeClass = currNode.className;

    while (Boolean(currNode) && !IsImnAnchor(currNode)) {
        currNode = currNode.parentNode;
    }
    if (Boolean(currNode))
        parentNode = currNode;
    if (IsImnAnchor(parentNode)) {
        if (typeof parentNode.onclick == "undefined") {
            parentNode.onclick = IMNImageOnClickHandler;
        }
    }
    else {
        var anchor = document.createElement("a");

        anchor.onclick = IMNImageOnClickHandler;
        anchor.className = "ms-imnlink";
        anchor.href = "javascript:;";
        parentNode.insertBefore(anchor, imgNode);
        anchor.appendChild(imgNode);
    }
}
function IMNImageOnClickHandler(objEvent) {
    IMNImageOnClick(objEvent);
    return false;
}
function IMNSortTable() {
    var id;

    for (id in IMNDictionaryObj) {
        IMNSortList(id, 1, IMNDictionaryObj[id]);
    }
    bIMNSorted = true;
}
function IMNRegisterHeader(objEvent) {
    if (browseris.ie5up || IsSupportedMacBrowser() || IsSupportedNPApiBrowserOnWin()) {
        var currEvent = GetCurrentEvent(objEvent);

        if (currEvent == null)
            return;
        var obj = GetEventTarget(currEvent);

        if (!Boolean(IMNHeaderObj)) {
            IMNHeaderObj = new Object();
        }
        if (Boolean(IMNHeaderObj)) {
            var id = obj.id;

            IMNHeaderObj[id] = id;
            var img;

            img = IMNGetHeaderImage();
            IMNUpdateImage(id, img);
        }
    }
}
var _spBodyOnLoadFunctionNames;
var _spBodyOnLoadFunctions;
var _spBodyOnLoadCalled;
var _spOriginalFormAction;
var _spEscapedFormAction;
var _spFormOnSubmitCalled;
var _spBodyOnPageShowRegistered;

function _spBodyOnPageShow(evt) {
    _spFormOnSubmitCalled = false;
}
function _spResetFormOnSubmitCalledFlag(sender, e) {
    _spFormOnSubmitCalled = false;
}
function _ribbonReadyForInit() {
    return _spBodyOnLoadCalled;
}
function _spBodyOnLoadWrapperInit() {
    if ((ajaxNavigate.get_search()).match(new RegExp("[?&]IsDlg=1")) == null) {
        FixRibbonAndWorkspaceDimensions();
    }
}
function _spBodyOnLoadWrapper() {
    if (_spBodyOnLoadCalled) {
        return;
    }
    _spBodyOnLoadCalled = true;
    _spBodyOnLoadWrapperInit();
    if (!_spBodyOnPageShowRegistered && typeof browseris != "undefined" && !browseris.ie && typeof window.addEventListener == 'function') {
        window.addEventListener('pageshow', _spBodyOnPageShow, false);
        _spBodyOnPageShowRegistered = true;
    }
    if (typeof Sys != "undefined" && typeof Sys.WebForms != "undefined" && typeof Sys.WebForms.PageRequestManager != "undefined") {
        var pageRequestMgr = Sys.WebForms.PageRequestManager.getInstance();

        if (!_spPageLoadedRegistered && pageRequestMgr != null) {
            pageRequestMgr.add_pageLoaded(_spPageLoaded);
            _spPageLoadedRegistered = true;
        }
    }
    if (!_spPageLoadedRegistered) {
        _spPageLoaded();
    }
    _spFormOnSubmitCalled = false;
    if (typeof Sys != "undefined" && typeof Sys.Net != "undefined" && typeof Sys.Net.WebRequestManager != "undefined") {
        Sys.Net.WebRequestManager.add_invokingRequest(_spResetFormOnSubmitCalledFlag);
    }
    if (typeof NotifyBodyLoadedAndExecuteWaitingJobs != "undefined") {
        NotifyBodyLoadedAndExecuteWaitingJobs();
    }
    ExecuteOrDelayUntilScriptLoaded(ProcessDefaultOnLoad, "core.js");
    if (typeof g_prefetch == "undefined" || g_prefetch == 1) {
        var uri = new URI(window.location.href, {
            queryCaseInsensitive: true
        });
        var prefetch = uri.getQueryParameter("prefetch");

        if (prefetch != String(0))
            _spPreFetch();
    }
}
var g_numberOfYields;

function _spDelayAfterAllScripts(fn) {
    _spYield(fn, g_numberOfYields);
}
function _spYield(fn, count) {
    if (count > 0) {
        window.setTimeout(function() {
            _spYield(fn, count - 1);
        }, 0);
    }
    else {
        fn();
    }
}
function _spTrace(message) {
}
var g_spPreFetchKeys;

function _spPreFetch() {
    _spDelayAfterAllScripts(function() {
        var sod;

        if (Boolean(_v_dictSod)) {
            _spTrace("-----Starting prefetch-----");
            g_spPreFetchKeys.push("strings.js");
            g_spPreFetchKeys.push("core.js");
            if (typeof ribbon == "undefined" && typeof _ribbon != "undefined") {
                g_spPreFetchKeys.push("ribbon");
            }
            for (var idx = 0; idx < g_spPreFetchKeys.length; idx++) {
                var key = g_spPreFetchKeys[idx];

                sod = _v_dictSod[key];
                if (Boolean(sod)) {
                    LoadSod(sod);
                }
            }
        }
    });
    if (typeof _ribbon != "undefined" && Boolean(_ribbon) && SP.SOD.get_ribbonImagePrefetchEnabled()) {
        window.setTimeout(function() {
            if (Boolean(document.images) && typeof _spPageContextInfo != "undefined" && typeof _spPageContextInfo.currentLanguage != "undefined") {
                window.imgRibbon32x32 = new Image();
                var imgUrl = "/_layouts/15/" + String(_spPageContextInfo.currentLanguage) + "/images/formatmap32x32.png";

                window.imgRibbon32x32.src = GetImageUrlWithRevision(imgUrl);
                window.imgRibbon16x16 = new Image();
                imgUrl = "/_layouts/15/" + String(_spPageContextInfo.currentLanguage) + "/images/formatmap16x16.png";
                window.imgRibbon16x16.src = GetImageUrlWithRevision(imgUrl);
            }
        }, 0);
    }
}
var _spSuppressFormOnSubmitWrapper;

function _spFormOnSubmitWrapper() {
    if (_spSuppressFormOnSubmitWrapper) {
        return true;
    }
    if (_spFormOnSubmitCalled) {
        return false;
    }
    if (typeof _spFormOnSubmit == "function") {
        var retval = _spFormOnSubmit();
        var testval = false;

        if (typeof retval == typeof testval && retval == testval) {
            return false;
        }
    }
    if (typeof _startOnSubmitStatement == "function") {
        return _startOnSubmitStatement();
    }
    _spFormOnSubmitCalled = true;
    return true;
}
var _inlineEditString;
var _spPageLoadedRegistered;

function _spPageLoaded() {
    _spOriginalFormAction = null;
    EscapeFormAction();
    RefreshInplViewState();
    RefreshHeroButtonState();
    InlineEditSetDefaultFocus();
}
function InlineEditSetDefaultFocus() {
    if (_inlineEditString != null) {
        var index = _inlineEditString.indexOf("#");

        if (index <= 0)
            return;
        var iidVal = _inlineEditString.substring(0, index);
        var trs = document.getElementsByTagName("TR");

        for (var i = 0; i < trs.length; i++) {
            if (trs[i].getAttribute("automode") == iidVal) {
                var nodeWalkStr = _inlineEditString.substring(index + 1);
                var nodeWalks = nodeWalkStr.split(",");
                var node = trs[i];

                for (var j = 0; j < nodeWalks.length; j++) {
                    if (node == null)
                        break;
                    node = node.firstChild;
                    for (var k = 0; k < nodeWalks[j]; k++) {
                        if (node == null)
                            break;
                        node = node.nextSibling;
                    }
                }
                if (node != null)
                    focusControl(node);
                break;
            }
        }
        _inlineEditString = null;
    }
}
function focusControl(targetControl) {
    if (Sys.Browser.agent === Sys.Browser.InternetExplorer) {
        var oldContentEditableSetting;
        var focusTarget = targetControl;

        if (Boolean(focusTarget) && typeof focusTarget.contentEditable !== "undefined") {
            oldContentEditableSetting = focusTarget.contentEditable;
            focusTarget.contentEditable = false;
        }
        else {
            focusTarget = null;
        }
        try {
            targetControl.focus();
        }
        catch (e) { }
        if (Boolean(focusTarget)) {
            focusTarget.contentEditable = oldContentEditableSetting;
        }
    }
    else {
        targetControl.focus();
    }
}
function EscapeFormAction() {
    if (document.forms.length > 0 && !Boolean(_spOriginalFormAction)) {
        _spOriginalFormAction = document.forms[0].action;
        var url = ajaxNavigate.get_href();
        var index = url.indexOf("://");

        if (index >= 0) {
            var temp = url.substring(index + 3);

            index = temp.indexOf("/");
            if (index >= 0)
                url = temp.substring(index);
            if (url.length > 2 && url.charAt(0) == '/' && url.charAt(1) == '/') {
                url = url.substring(1);
            }
        }
        _spEscapedFormAction = escapeUrlForCallback(url);
        document.forms[0].action = _spEscapedFormAction;
        document.forms[0]._initialAction = document.forms[0].action;
    }
}
function RefreshHeroButtonState() {
    if (typeof _spWebPartComponents != "undefined") {
        for (var wp in _spWebPartComponents) {
            if (wp.length > 7) {
                var strId = wp.substr(7);
                var heroButton = window["heroButtonWebPart" + strId];

                if (typeof heroButton != "undefined" && heroButton != null && heroButton == true) {
                    var ele = document.getElementById("Hero-" + strId);

                    if (ele != null)
                        ele.style.display = "";
                }
            }
        }
    }
}
function RefreshInplViewState() {
    if (typeof window.ctx == "undefined")
        return;
    var ctxLocal = window.ctx;

    if (ctxLocal.clvp == null) {
        EnsureScript("inplview", typeof InitAllClvps, function() {
            if (ctxLocal.clvp == null)
                InitAllClvps();
        });
        return;
    }
    var clvp = ctxLocal.clvp;
    var tab = clvp.tab;

    if (tab == null || tab != null && (tab.parentNode == null || tab.parentNode.innerHTML == null)) {
        FixDroppedOrPastedClvps();
        if (ctxLocal.dictSel != null) {
            ctxLocal.dictSel = [];
            ctxLocal.CurrentSelectedItems = 0;
        }
    }
}
function RestoreToOriginalFormAction() {
    if (_spOriginalFormAction != null) {
        if (_spEscapedFormAction == document.forms[0].action) {
            document.forms[0].action = _spOriginalFormAction;
            document.forms[0]._initialAction = document.forms[0].action;
        }
        _spOriginalFormAction = null;
        _spEscapedFormAction = null;
    }
}
function DefaultFocus() {
    if (typeof _spUseDefaultFocus != "undefined") {
        var elements = document.getElementsByName("_spFocusHere");
        var elem = null;

        if (elements == null || elements.length <= 0) {
            elem = document.getElementById("_spFocusHere");
        }
        else if (elements != null && elements.length > 0) {
            elem = elements[0];
        }
        if (elem != null) {
            var aLinks = elem.getElementsByTagName("a");

            if (aLinks != null && aLinks.length > 0) {
                for (var i = 0; i < aLinks.length; i++) {
                    if (aLinks[i].style.visibility != "hidden") {
                        try {
                            aLinks[i].focus();
                        }
                        catch (e) { }
                        break;
                    }
                }
            }
        }
    }
}
var g_fAnimateListCSR;

function ProcessDefaultOnLoad() {
    ProcessPNGImages();
    UpdateAccessibilityUI();
    UpdateAnimationUserControl(false);
    window.setTimeout('ProcessImn()', 10);
    ProcessOnLoadFunctionNames(_spBodyOnLoadFunctionNames);
    ProcessOnLoadFunctions(_spBodyOnLoadFunctions);
    if (typeof _spUseDefaultFocus != "undefined")
        DefaultFocus();
    if ((ajaxNavigate.get_hash()).indexOf("InplviewHash") != -1) {
        {
            var defd;

            try {
                defd = typeof inplview.RestoreAllClvpsNavigation;
            }
            catch (e) {
                defd = 'undefined';
            }
            {
                var str = "inplview.RestoreAllClvpsNavigation";
                var rg = str.split('.');

                if (rg.length > 1) {
                    var fnd = function() {
                        inplview.RestoreAllClvpsNavigation();
                    };

                    EnsureScript(rg[0], defd, fnd);
                }
            }
        }
        ;
    }
}
function ProcessOnLoadFunctionNames(onLoadFunctionNames) {
    for (var i = 0; i < onLoadFunctionNames.length; i++) {
        var expr = "if(typeof(" + onLoadFunctionNames[i] + ")=='function'){" + onLoadFunctionNames[i] + "();}";

        eval(expr);
    }
    onLoadFunctionNames = [];
}
function ProcessOnLoadFunctions(onLoadFunctions) {
    for (var i = 0; i < onLoadFunctions.length; i++) {
        onLoadFunctions[i]();
    }
    onLoadFunctions = [];
}
function CoreInvoke(fn) {
    var args = Array.prototype.slice.call(arguments, 1);
    var _corefn = function() {
        var ref = window[fn];

        ref.apply(null, args);
    };

    EnsureScript("core.js", TypeofFullName(fn), _corefn);
    return false;
}
function _bodyOnHashChangeHandler() {
    if (typeof _spBodyOnHashChange != 'undefined')
        _spBodyOnHashChange();
}
var DeveloperDashboard;

function ToggleDeveloperDashboard(siteRelativeUrl) {
    var wnd;

    if (!Boolean(siteRelativeUrl)) {
        siteRelativeUrl = '';
    }
    if (GetCookie('WSS_DeveloperDashboard') == "true") {
        ddCloseWindow(DeveloperDashboard.wnd);
    }
    else {
        try {
            wnd = ddGetWindow();
            if (ddIsWndValid(wnd)) {
                ddAttachToWindow(wnd);
            }
            else {
                ddOpenWindow(wnd, siteRelativeUrl);
            }
        }
        catch (e) {
            ddFail(wnd);
        }
    }
}
function ddFail(wnd) {
    if (Boolean(wnd))
        wnd.close();
}
function ddIsWndValid(wnd) {
    if ('unknown' == typeof wnd.location.href)
        throw null;
    return 'about:blank' !== wnd.location.href;
}
function ddResetState() {
    DeveloperDashboard.wnd = null;
    SetCookieEx(DeveloperDashboard.cookie, false, true, window);
}
function ddCloseWindow(wnd) {
    if (null != wnd)
        wnd.close();
    ddResetState();
}
function ddOpenWindow(wnd, siteRelativeUrl) {
    SetCookieEx(DeveloperDashboard.cookie, true, true, window);
    DeveloperDashboard.wnd = wnd;
    ddAdoptWindow(wnd, siteRelativeUrl);
}
function ddAdoptWindow(wnd, siteRelativeUrl) {
    wnd.location.href = siteRelativeUrl + '/_layouts/15/devdash.aspx';
    if (browseris.chrome)
        window.setTimeout(function() {
            wnd.moveTo(screen.width / 2, 0);
        }, 100);
    else
        wnd.moveTo(screen.width / 2, 0);
}
function ddGetWindow() {
    var wnd, w, h;

    wnd = DeveloperDashboard.wnd;
    if (Boolean(wnd))
        return wnd;
    w = screen.width;
    h = screen.height;
    wnd = window.open('', 'devdash', 'height=600,width=800,resizable=1,scrollbars=1,top=' + String(h) + ',left=' + String(w));
    return wnd;
}
function ddAttachToWindow(wnd) {
    if (null != wnd) {
        ddHandshake(wnd);
        ddCScopeSet();
    }
    else {
        ddResetHandshake();
        ddCScopeReset();
    }
}
function ddHandshake(wnd) {
    var tid;
    var count = 0;

    tid = setInterval(Wait, 20);
    function Wait() {
        var loaded;
        var currMsg;

        loaded = 'DeveloperDashboard' in wnd && 'Messaging' in wnd.DeveloperDashboard && 'PostMsg' in wnd.DeveloperDashboard.Messaging;
        if (loaded) {
            DeveloperDashboard.PostMsg = function(to, subject, msg) {
                try {
                    wnd.DeveloperDashboard.Messaging.PostMsg(to, subject, msg);
                }
                catch (e) { }
            };
            clearInterval(tid);
            if (null !== DeveloperDashboard.msgQueue) {
                for (var i = 0, len = DeveloperDashboard.msgQueue.length; i < len; i++) {
                    currMsg = DeveloperDashboard.msgQueue[i];
                    DeveloperDashboard.PostMsg(currMsg.to, currMsg.subject, currMsg.msg);
                }
            }
        }
        else {
            if (100 == ++count) {
                clearInterval(tid);
                ddAttachToWindow(null);
            }
        }
    }
}
function ddResetHandshake() {
    DeveloperDashboard.msgQueue = null;
    DeveloperDashboard.PostMsg = function(to, subject, msg) {
    };
}
function ddInit() {
    var wnd;
    var attached = false;

    if (GetCookie('WSS_DeveloperDashboard') == "true") {
        try {
            wnd = ddGetWindow();
            if (ddIsWndValid(wnd)) {
                DeveloperDashboard.wnd = wnd;
                ddHandshake(wnd);
                attached = true;
            }
            else {
                wnd.close();
            }
        }
        catch (e) {
            ddFail(wnd);
        }
    }
    if (!attached) {
        ddResetHandshake();
    }
}
var CScope;

function ddCScopeSet() {
    var hasETW;
    var nullScope;

    hasETW = typeof window.msWriteProfilerMark != 'undefined';
    nullScope = null;
    function LogTime(timerName) {
        var time = (new Date).getTime();

        if (hasETW)
            window.msWriteProfilerMark(timerName);
        return time;
    }
    function _CScope(scopeName, prefix) {
        this.Name = scopeName;
        this.Prefix = Boolean(prefix) ? prefix : 'Script';
        this.Children = [];
    }
    _CScope.prototype = {
        Start: function() {
            _CScope.Start(this);
            this.StartTimeUtc = LogTime(this.Name);
        },
        Stop: function() {
            this.EndTimeUtc = LogTime(this.Name);
            _CScope.Stop(this);
        },
        Parent: null
    };
    _CScope.Current = nullScope;
    _CScope.Start = function(scope) {
        scope.Parent = _CScope.Current;
        if (Boolean(_CScope.Current)) {
            _CScope.Current.Children.push(scope);
        }
        _CScope.Current = scope;
    };
    _CScope.Stop = function(scope) {
        _CScope.Current = scope.Parent;
        if (null == _CScope.Current) {
            scope.Name = scope.Prefix + ' (' + scope.Name + ')';
            if ("undefined" != typeof DeveloperDashboard.PostMsg) {
                DeveloperDashboard.PostMsg('MS.Scenarios', 'AddScenario', scope);
            }
        }
    };
    CScope = _CScope;
}
function ddCScopeReset() {
    var noop = function() {
    };

    function _CScopeMock(scopeName, prefix) {
    }
    _CScopeMock.prototype = {
        Start: noop,
        Stop: noop
    };
    CScope = _CScopeMock;
}
function ddToggleCScope() {
    if (null != DeveloperDashboard.wnd)
        ddCScopeSet();
    else
        ddCScopeReset();
}
var flyoutsAllowed;

function enableFlyoutsAfterDelay() {
    setTimeout("flyoutsAllowed = true;", 25);
}
function overrideMenu_HoverStatic(item) {
    if (!flyoutsAllowed) {
        setTimeout(delayMenu_HoverStatic(item), 50);
    }
    else {
        var node = Menu_HoverRoot(item);
        var data = Menu_GetData(item);

        if (!Boolean(data))
            return;
        window.__disappearAfter = data.disappearAfter;
        Menu_Expand(node, data.horizontalOffset, data.verticalOffset);
    }
}
function delayMenu_HoverStatic(item) {
    return function() {
        overrideMenu_HoverStatic(item);
    };
}
var g_ExecuteOrWaitJobs;

function ExecuteOrDelayUntilEventNotified(func, eventName) {
    var executed = false;
    var eventInfo = g_ExecuteOrWaitJobs[eventName];

    if (eventInfo != null && eventInfo.notified) {
        if (eventInfo.args != null) {
            func.apply(null, eventInfo.args);
        }
        else {
            func();
        }
        return true;
    }
    else {
        DelayUntilEventNotified(func, eventName);
        return false;
    }
}
function DelayUntilEventNotified(func, eventName) {
    var eventInfo = g_ExecuteOrWaitJobs[eventName];

    if (eventInfo == null) {
        eventInfo = new Object();
        eventInfo.notified = false;
        eventInfo.jobs = [];
        eventInfo.args = null;
        g_ExecuteOrWaitJobs[eventName] = eventInfo;
    }
    eventInfo.jobs.push(func);
}
function NotifyEventAndExecuteWaitingJobs(eventName, args) {
    if (!Boolean(g_ExecuteOrWaitJobs))
        return;
    var eventInfo = g_ExecuteOrWaitJobs[eventName];

    if (eventInfo == null || typeof eventInfo == "undefined") {
        eventInfo = new Object();
        eventInfo.notified = true;
        eventInfo.jobs = [];
        eventInfo.args = args;
        g_ExecuteOrWaitJobs[eventName] = eventInfo;
    }
    else {
        if (eventInfo.jobs != null) {
            for (var i = 0; i < eventInfo.jobs.length; i++) {
                var func = eventInfo.jobs[i];

                if (args != null) {
                    func.apply(null, args);
                }
                else {
                    func();
                }
            }
        }
        eventInfo.notified = true;
        eventInfo.jobs = [];
        eventInfo.args = args;
    }
}
function ExecuteOrDelayUntilScriptLoaded(func, depScriptFileName) {
    depScriptFileName = depScriptFileName.toLowerCase();
    var eventName = "sp.scriptloaded-" + depScriptFileName;

    return ExecuteOrDelayUntilEventNotified(func, eventName);
}
function NotifyScriptLoadedAndExecuteWaitingJobs(scriptFileName) {
    scriptFileName = scriptFileName.toLowerCase();
    if (typeof _v_dictSod != 'undefined') {
        if (typeof _v_dictSod[scriptFileName] == 'undefined') {
            switch (scriptFileName) {
            case "ie55up.js":
                if (typeof _v_dictSod["browserScript"] == 'undefined')
                    RegisterSod("browserScript", null);
                _v_dictSod["ie55up.js"] = _v_dictSod["browserScript"];
                break;
            case "sp.ribbon.js":
                if (typeof _v_dictSod["ribbon"] == 'undefined')
                    RegisterSod("ribbon", null);
                _v_dictSod["sp.ribbon.js"] = _v_dictSod["ribbon"];
                break;
            case "inplview.js":
                if (typeof _v_dictSod["inplview"] == 'undefined')
                    RegisterSod("inplview", null);
                _v_dictSod["inplview.js"] = _v_dictSod["inplview"];
                break;
            default:
                RegisterSod(scriptFileName, null);
                break;
            }
        }
        _v_dictSod[scriptFileName].state = 4;
    }
    var eventName = "sp.scriptloaded-" + scriptFileName;

    NotifyEventAndExecuteWaitingJobs(eventName);
    if (typeof g_MinimalDownload != 'undefined' && Boolean(g_MinimalDownload) && typeof RegisterModuleInit != 'undefined') {
        var lastSlashPos = scriptFileName.lastIndexOf('/');

        if (-1 != lastSlashPos) {
            scriptFileName = scriptFileName.substring(lastSlashPos + 1);
        }
        var lastdotPos = scriptFileName.lastIndexOf('.');
        var funcName = null;

        if (-1 == lastdotPos)
            funcName = scriptFileName;
        else
            funcName = scriptFileName.substring(0, lastdotPos);
        funcName = funcName.replace(/\./g, '_');
        var funcPattern = new RegExp("^[A-Za-z0-9_\\-\$]+$");

        if (Boolean(funcPattern.exec(funcName))) {
            funcName = "$_global_" + funcName;
            var initFuncName = eval("'undefined' != typeof (" + funcName + ") ? " + funcName + " : null");

            if (null != initFuncName) {
                RegisterModuleInit(scriptFileName, initFuncName);
            }
        }
    }
}
function ExecuteOrDelayUntilBodyLoaded(func) {
    var eventName = "sp.bodyloaded";

    return ExecuteOrDelayUntilEventNotified(func, eventName);
}
function NotifyBodyLoadedAndExecuteWaitingJobs() {
    var eventName = "sp.bodyloaded";

    NotifyEventAndExecuteWaitingJobs(eventName);
}
function FFClick(elm) {
    var evt = document.createEvent("MouseEvents");

    evt.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    elm.dispatchEvent(evt);
}
function _spOnSilverlightError(webPartId, sender, args) {
    if (args.errorType == "InitializeError") {
        _spSetSLErrorMessage(webPartId, Strings.STS.L_ErrorMessage_InitializeError);
    }
}
function _spSetSLPluginNotLoadedErrorMessage(webPartId) {
    _spSetSLErrorMessage(webPartId, Strings.STS.L_ErrorMessage_PluginNotLoadedError);
}
function _spSetSLErrorMessage(webPartId, strErrorMessage) {
    var strSilverlightErrorDivId = "SilverlightRuntimeErrorMessage_" + webPartId;
    var strDefaultConfigurationMessageDivId = "WebPartDefaultConfigurationMessage_" + webPartId;
    var strSilverlightObjectDivId = "SilverlightObjectDiv_" + webPartId;

    (document.getElementById(strSilverlightObjectDivId)).style.display = "none";
    (document.getElementById(strSilverlightErrorDivId)).style.display = "block";
    (document.getElementById(strSilverlightErrorDivId)).innerHTML = strErrorMessage;
    (document.getElementById(strDefaultConfigurationMessageDivId)).style.display = "block";
}
var cuiKeyHash;

function _processKeyCodes(val) {
    if (cuiKeyHash[val])
        return cuiKeyHash[val];
    return val;
}
var g_fhs;

function _ribbonScaleHeader(elmTopBars, isRtl) {
    var elmTopBar2 = elmTopBars.childNodes[1];
    var len = 0;

    if (Boolean(elmTopBar2))
        len = elmTopBar2.childNodes.length;
    var elmTabHeaders = null;
    var elmTabRowRight = null;

    if (typeof isRtl == 'undefined')
        isRtl = false;
    if (typeof g_fhs == 'undefined') {
        if (typeof _ribbonShouldFixRtlHeaders == 'function')
            g_fhs = _ribbonShouldFixRtlHeaders(isRtl);
        else
            g_fhs = false;
    }
    for (var i = 0; i < len; i++) {
        var child = elmTopBar2.childNodes[i];

        if (child.className.indexOf('ms-cui-tts') != -1)
            elmTabHeaders = child;
        else if (child.className.indexOf('ms-cui-TabRowRight') != -1)
            elmTabRowRight = child;
    }
    if (Boolean(elmTabHeaders) && 'undefined' == typeof elmTabHeaders._widthAdded && g_fhs)
        _ribbonFixHeaderWidth(elmTabHeaders);
    if (!Boolean(elmTabHeaders) || !Boolean(elmTabRowRight))
        return;
    elmTabRowRight.style.display = 'block';
    var needsScaling = _ribbonNeedsHeaderScaling(elmTopBar2, elmTabHeaders, elmTabRowRight, isRtl);

    if (needsScaling) {
        _ribbonHeaderScaleDown(elmTabHeaders);
        if (_ribbonNeedsHeaderScaling(elmTopBar2, elmTabHeaders, elmTabRowRight, isRtl)) {
            _ribbonHeaderScaleDown(elmTabHeaders);
        }
    }
    else {
        if (_ribbonGetScaleStep(elmTabHeaders) == 0)
            return;
        _ribbonHeaderScaleUp(elmTabHeaders);
        if (_ribbonNeedsHeaderScaling(elmTopBar2, elmTabHeaders, elmTabRowRight, isRtl)) {
            _ribbonHeaderScaleDown(elmTabHeaders);
            return;
        }
        if (_ribbonGetScaleStep(elmTabHeaders) == 0)
            return;
        _ribbonHeaderScaleUp(elmTabHeaders);
        if (_ribbonNeedsHeaderScaling(elmTopBar2, elmTabHeaders, elmTabRowRight, isRtl))
            _ribbonHeaderScaleDown(elmTabHeaders);
    }
    if (_ribbonNeedsHeaderScaling(elmTopBar2, elmTabHeaders, elmTabRowRight, isRtl)) {
        elmTabRowRight.style.display = 'none';
    }
}
function _ribbonNeedsHeaderScaling(elmTopBar2, elmTabHeaders, elmTabRowRight, isRtl) {
    if (elmTabHeaders.offsetWidth > 0 && elmTabRowRight.offsetWidth > 0 && _ribbonElementsWrap(elmTabHeaders, elmTabRowRight, isRtl)) {
        return true;
    }
    if (!g_fhs && _ribbonChildNodesWrapped(elmTabRowRight, isRtl))
        return true;
    if (_ribbonChildNodesWrapped(elmTopBar2, isRtl))
        return true;
    return _ribbonChildNodesWrapped(elmTabHeaders, isRtl);
}
function _ribbonChildNodesWrapped(elmParent, isRtl) {
    if (elmParent.offsetWidth == 0)
        return false;
    var elms = [];
    var count = elmParent.childNodes.length;
    var i;
    var elmChild;

    for (i = 0; i < count; i++) {
        elmChild = elmParent.childNodes[i];
        if (Boolean(elmChild) && elmChild.nodeName != '#text' && elmChild.offsetWidth > 0 && elmChild.offsetHeight > 0) {
            elms.push(elmChild);
        }
    }
    count = elms.length;
    for (i = 0; i < count; i++) {
        elmChild = elms[i];
        var elmSibling = elms[i + 1];

        if (typeof elmSibling != 'undefined' && Boolean(elmSibling) && _ribbonElementsWrap(elmChild, elmSibling, isRtl)) {
            return true;
        }
    }
    return false;
}
function _ribbonElementsWrap(elmLeft, elmRight, isRtl) {
    if (!isRtl && elmLeft.offsetLeft + elmLeft.offsetWidth > elmRight.offsetLeft + 1)
        return true;
    else if (isRtl && elmRight.offsetLeft + elmRight.offsetWidth > elmLeft.offsetLeft + 1)
        return true;
    return false;
}
function _ribbonGetScaleStep(elm) {
    if ('undefined' == typeof elm._scaleStep) {
        elm._scaleStep = 0;
        if (elm.className.indexOf('ms-cui-tts-scale1') != -1)
            elm._scaleStep = 1;
        else if (elm.className.indexOf('ms-cui-tts-scale2') != -1)
            elm._scaleStep = 2;
    }
    return elm._scaleStep;
}
function _ribbonSetScaleStep(elm, value) {
    elm._scaleStep = value;
}
function _ribbonHeaderScaleDown(elmTabHeaders) {
    var scaleStep = _ribbonGetScaleStep(elmTabHeaders);

    if (scaleStep == 0) {
        _ribbonHeaderScaleIndex(elmTabHeaders, 1);
    }
    else if (scaleStep == 1 || scaleStep == 2) {
        _ribbonHeaderScaleIndex(elmTabHeaders, 2);
    }
}
function _ribbonHeaderScaleUp(elmTabHeaders) {
    var scaleStep = _ribbonGetScaleStep(elmTabHeaders);

    if (scaleStep == 1)
        _ribbonHeaderScaleIndex(elmTabHeaders, 0);
    else if (scaleStep == 2) {
        _ribbonHeaderScaleIndex(elmTabHeaders, 1);
    }
}
var g_ribbonHeaderScaleClass;

function _ribbonHeaderScaleIndex(elmTabHeaders, index) {
    elmTabHeaders.className = g_ribbonHeaderScaleClass[index];
    _ribbonSetScaleStep(elmTabHeaders, index);
    _ribbonFixHeaderWidth(elmTabHeaders);
}
function _ribbonFixHeaderWidth(elmTabHeaders) {
    if (!g_fhs)
        return;
    var width = _ribbonCalculateWidth(elmTabHeaders);

    elmTabHeaders.style.width = String(width) + 'px';
    elmTabHeaders._widthAdded = true;
}
function _ribbonCalculateWidth(elmTabHeaders) {
    var width = 0;
    var tabs = elmTabHeaders.childNodes;
    var count = tabs.length;

    for (var i = 0; i < count; i++) {
        var elm = tabs[i];

        if (Boolean(elm) && elm.nodeName == 'LI' && elm.offsetWidth > 0) {
            var ctxlGroup = elm.childNodes[1];

            if (Boolean(ctxlGroup) && ctxlGroup.nodeName == 'UL') {
                var groupWidth = _ribbonCalculateWidth(ctxlGroup);

                ctxlGroup.style.width = String(groupWidth) + 'px';
                width = width + groupWidth + 4;
            }
            else {
                width = width + elm.offsetWidth + 2;
            }
        }
    }
    return width;
}
function SPRibbonInfo() {
}
function _ribbonOnStartInit(ribbonInfo) {
    OnRibbonMinimizedChanged(ribbonInfo.initialTabId == "Ribbon.Read");
    var _elmRibbon = document.getElementById("Ribbon");

    if (!Boolean(_elmRibbon) || Boolean(ribbonInfo) && ribbonInfo.buildMinimized)
        return;
    var _elmTabCont = _elmRibbon.childNodes[2];
    var bTabContainerExists = Boolean(_elmTabCont) && _elmTabCont.className.indexOf("ms-cui-tabContainer") != -1;

    if (!bTabContainerExists && ribbonInfo.initialTabId != "Ribbon.Read") {
        ExecuteOrDelayUntilScriptLoaded(function() {
            PrepareRibbonForAnimation(false, false);
            _elmTabCont = document.createElement("div");
            _elmTabCont.className = "ms-cui-tabContainer";
            var _elmBlankTab = document.createElement("ul");

            _elmBlankTab.id = "Ribbon.BlankTab";
            _elmBlankTab.className = "ms-cui-tabBody";
            _elmBlankTab.innerHTML = "<span class=\"ms-ribbontabswitchloading\"><img src=\"" + "/_layouts/15/images/loadingcirclests16.gif?rev=23" + "\" alt=\"\"/><span>" + Strings.STS.L_Loading_Text + "</span></span>";
            _elmTabCont.appendChild(_elmBlankTab);
            _elmRibbon.appendChild(_elmTabCont);
            AnimateRibbonMinimizedChanged(false);
        }, "core.js");
    }
}
var StatusIdWithTopPriority;
var StatusColorWithTopPriority;
var StatusPriority;
var StatusBarClassNames;

function getStatusTitle(statusId) {
    switch (statusId) {
    case 4:
        return Strings.STS.L_StatusBarRed_Text;
    case 3:
        return Strings.STS.L_StatusBarYellow_Text;
    case 2:
        return Strings.STS.L_StatusBarGreen_Text;
    case 1:
        return Strings.STS.L_StatusBarBlue_Text;
    default:
        return "";
    }
}
var g_uniqueIndex;

function getUniqueIndex() {
    g_uniqueIndex++;
    return g_uniqueIndex;
}
function addStatus(strTitle, strHtml, atBegining, isVanilla, bIsDismissible, dismissAltText) {
    var sb = document.getElementById("pageStatusBar");

    if (sb != null) {
        sb.setAttribute("aria-live", "polite");
        sb.setAttribute("aria-relevant", "all");
        var st = _createStatusMarkup(strTitle, strHtml, true, isVanilla, bIsDismissible, dismissAltText);

        if (!atBegining)
            sb.appendChild(st);
        else {
            var refs = sb.getElementsByTagName("SPAN");
            var ref = refs.length > 0 ? refs[0] : null;

            if (ref != null)
                sb.insertBefore(st, ref);
            else
                sb.appendChild(st);
        }
        if (sb.childNodes.length == 1) {
            StatusIdWithTopPriority = st.id;
            StatusColorWithTopPriority = 1;
        }
        sb.style.display = "block";
        return st.id;
    }
    return null;
}
function appendStatus(sid, strTitle, strHtml) {
    var sb = document.getElementById("pageStatusBar");
    var stRef = document.getElementById(sid);

    if (sb != null && stRef != null) {
        var st = null;

        if (Boolean(stRef.lastChild) && stRef.lastChild.tagName == "BR") {
            stRef.removeChild(stRef.lastChild);
            st = _createStatusMarkup(strTitle, strHtml, true);
        }
        else {
            st = _createStatusMarkup(strTitle, strHtml, false);
        }
        if (stRef.nextSibling != null)
            sb.insertBefore(st, stRef.nextSibling);
        else
            sb.appendChild(st);
        return st.id;
    }
    return null;
}
function _createStatusMarkup(strTitle, strHtml, bWithBR, bIsVanilla, bIsDismissible, dismissAltText) {
    var st = document.createElement("SPAN");

    st.id = "status_" + String(getUniqueIndex());
    st.className = "ms-status-status";
    var rg = [];

    rg.push("<span id='");
    rg.push(st.id);
    rg.push("_hiddenPriMsg' class='ms-accessible'>");
    rg.push(getStatusTitle(1) + Strings.STS.L_Status_Text);
    rg.push("</span>");
    if (!bIsVanilla) {
        rg.push("<span class=\"ms-status-iconSpan\"><img class=\"ms-status-iconImg\" src=\"/_layouts/15/images/spcommon.png\" /></span>");
    }
    if (strTitle.length != 0) {
        rg.push("<span class=\"ms-bold ms-status-title\">");
        rg.push(strTitle);
        rg.push("</span>");
    }
    rg.push("<span class=\"ms-status-body\" id='");
    rg.push(st.id);
    rg.push("_body");
    rg.push("'>");
    rg.push(strHtml);
    rg.push("</span>");
    if (bIsDismissible) {
        rg.push("<a href=\"#\" class=\"ms-status-iconSpan\"><img class=\"ms-status-dismissIconImg\" alt=\"");
        rg.push(dismissAltText);
        rg.push("\" src=\"/_layouts/15/images/spcommon.png\" onclick=\"javascript:removeStatus('");
        rg.push(st.id);
        rg.push("');__doPostBack('DismissOffice365Notification');\"/></a>");
    }
    if (bWithBR && !bIsVanilla)
        rg.push("<br/>");
    st.innerHTML = rg.join("");
    st.setAttribute("role", "alert");
    st.priorityColor = 1;
    st.tabIndex = 0;
    return st;
}
function removeAllStatus(hide) {
    var sb = document.getElementById("pageStatusBar");

    if (sb != null) {
        sb.innerHTML = "";
        sb.className = StatusBarClassNames[1];
        StatusColorWithTopPriority = null;
        StatusIdWithTopPriority = null;
        if (hide)
            sb.style.display = "none";
    }
}
function setStatusPriColor(sid, strColor) {
    var st = document.getElementById(sid);

    if (st != null && typeof strColor == 'string') {
        if (strColor in StatusPriority) {
            st.priorityColor = StatusPriority[strColor];
        }
        else {
            st.priorityColor = 1;
        }
        var hiddenSpan = st.firstChild;

        if (hiddenSpan != null && hiddenSpan.id == sid + "_hiddenPriMsg") {
            hiddenSpan.innerHTML = getStatusTitle(st.priorityColor) + Strings.STS.L_Status_Text;
        }
        if (sid == StatusIdWithTopPriority) {
            if (st.priorityColor >= StatusColorWithTopPriority)
                StatusColorWithTopPriority = st.priorityColor;
            else
                _selectStatusWithTopPriority();
        }
        else {
            if (st.priorityColor > StatusColorWithTopPriority) {
                StatusIdWithTopPriority = sid;
                StatusColorWithTopPriority = st.priorityColor;
            }
        }
        var sb = document.getElementById("pageStatusBar");

        if (Boolean(sb))
            sb.className = StatusBarClassNames[StatusColorWithTopPriority];
    }
}
function _selectStatusWithTopPriority() {
    var sb = document.getElementById("pageStatusBar");

    if (sb != null) {
        var statusId = null;
        var statusColor = 1;
        var statuses = sb.childNodes;
        var statusesLen = statuses.length;
        var stat = null;

        for (var i = 0; i < statusesLen; i++) {
            stat = statuses[i];
            if (typeof stat.priorityColor != 'undefined' && stat.priorityColor > statusColor) {
                statusColor = stat.priorityColor;
                statusId = stat.id;
            }
        }
        StatusIdWithTopPriority = statusId;
        StatusColorWithTopPriority = statusColor;
    }
}
function updateStatus(sid, strHtml) {
    var bid = sid + "_body";
    var b = document.getElementById(bid);

    if (Boolean(b))
        b.innerHTML = strHtml;
}
function removeStatus(sid) {
    var st = document.getElementById(sid);

    if (st != null) {
        if (Boolean(st.lastChild) && st.lastChild.tagName == "BR") {
            var prevSt = st.previousSibling;

            if (Boolean(prevSt) && Boolean(prevSt.lastChild) && prevSt.lastChild.tagName != "BR") {
                var br = document.createElement("BR");

                prevSt.appendChild(br);
            }
        }
        st.parentNode.removeChild(st);
        var sb = document.getElementById("pageStatusBar");

        if (Boolean(sb)) {
            if ((sb.getElementsByTagName("SPAN")).length == 0) {
                sb.className = StatusBarClassNames[1];
                StatusColorWithTopPriority = null;
                StatusIdWithTopPriority = null;
                sb.style.display = "none";
            }
            else {
                if (sid == StatusIdWithTopPriority) {
                    _selectStatusWithTopPriority();
                    sb.className = StatusBarClassNames[StatusColorWithTopPriority];
                }
            }
        }
    }
}
var c_defaultSuiteDataVersion;

function SuiteNavRenderingOptions() {
}
function RenderSuiteNav(renderingOptions) {
    var suiteLinksDiv = renderingOptions.top;
    var shellDataRestMethod = renderingOptions.dataEndpoint;
    var cultureName = renderingOptions.culture;
    var suiteDataVersion = renderingOptions.version;

    if (!(suiteDataVersion > 0))
        suiteDataVersion = c_defaultSuiteDataVersion;
    if (!!shellDataRestMethod && !!cultureName) {
        shellDataRestMethod += (shellDataRestMethod.indexOf("?") < 0 ? "?" : "&") + "v=" + String(suiteDataVersion) + "&Locale=" + cultureName;
    }
    var additionalCssText = "";
    var suiteDataObject = null;
    var suiteIsThemed = false;

    WithSuiteNavData(function HandleSuiteNavData(suiteData) {
        suiteDataObject = suiteData;
        if (!suiteIsThemed || Boolean(additionalCssText)) {
            RenderSuiteNavWithData(suiteData);
        }
    }, shellDataRestMethod, suiteDataVersion);
    function RenderSuiteNavWithData(suiteData) {
        var o365Shell = window["O365Shell"];

        if (o365Shell == null) {
            return;
        }
        var linksData = ExtractSuiteNavBarData(suiteData);

        RemoveEmptyArraysFromSuiteNavData(linksData);
        o365Shell.SetData(linksData);
        var renderSettings = {
            "top": suiteLinksDiv,
            "layout": "Mouse"
        };

        o365Shell.RenderSync(renderSettings, OnSuiteRendered, OnSuiteLoaded);
    }
    function OnSuiteLoaded() {
    }
    function OnSuiteRendered() {
    }
}
function LinkData() {
}
function SuiteNavData() {
    var _this = this;

    _this.CurrentWorkloadHelpSubLinks = [];
    _this.CurrentWorkloadSettingsSubLinks = [];
    _this.CurrentWorkloadUserSubLinks = [];
    _this.HelpLink = new LinkData;
    _this.SignOutLink = new LinkData;
}
function SuiteData() {
    this.NavBarData = new SuiteNavData;
}
function IsEmptyArray(arrValue) {
    return arrValue != null && !(arrValue.length > 0);
}
function RemoveEmptyArraysFromSuiteNavData(linksData) {
    var propsToCheck = ["CurrentWorkloadHelpSubLinks", "CurrentWorkloadSettingsSubLinks", "CurrentWorkloadUserSubLinks", "PinnedApps", "WorkloadLinks"];
    var lPropsToCheck = propsToCheck.length;

    for (var iProp = 0; iProp < lPropsToCheck; iProp++) {
        var propNameToCheck = propsToCheck[iProp];

        if (IsEmptyArray(linksData[propNameToCheck]))
            linksData[propNameToCheck] = null;
    }
}
function MakeSuiteNavDataLoader(shellDataRestMethod, onDataLoadError) {
    function SuiteNavDataLoader(resultCallback) {
        if (Boolean(shellDataRestMethod)) {
            var shellDataRestUrl = "/_api/" + shellDataRestMethod;

            WithRestValue(function(strShellData) {
                var strSuiteData;

                try {
                    var parsedResponse = JSON.parse(strShellData);

                    strSuiteData = parsedResponse.d.GetSuiteNavData;
                }
                catch (exParseShellData) {
                    if (onDataLoadError != null) {
                        onDataLoadError("ParseResponse");
                    }
                }
                resultCallback(strSuiteData);
            }, shellDataRestUrl);
        }
    }
    return SuiteNavDataLoader;
}
function WithSuiteNavData(shellDataCallback, shellDataRestMethod, suiteVersion) {
    var loadSuiteNavData = MakeSuiteNavDataLoader(shellDataRestMethod, null);

    SuiteNavCommonGetSuiteLinks(loadSuiteNavData, function(strSuiteNavData) {
        var suiteNavData = null;

        try {
            suiteNavData = JSON.parse(strSuiteNavData);
            if (suiteNavData == null) { }
        }
        catch (exParseNavData) { }
        shellDataCallback(suiteNavData);
    }, suiteVersion);
}
var BrowserStorage;

function StorageObject() {
    var _this = this;
    var _data = {};

    function StorageObject_ContainsKey(key) {
        return _data.hasOwnProperty(key);
    }
    function StorageObject_GetItem(key) {
        var v = _data[key];

        if (typeof v == "undefined")
            v = null;
        return v;
    }
    ;
    function StorageObject_SetItem(key, value) {
        if (!StorageObject_ContainsKey(key)) {
            _this.length++;
        }
        _data[key] = String(value);
    }
    ;
    function StorageObject_RemoveItem(key) {
        var hasProp = StorageObject_ContainsKey(key);

        if (hasProp) {
            delete _data[key];
            _this.length--;
        }
    }
    ;
    function StorageObject_Clear() {
        _data = {};
        _this.length = 0;
    }
    ;
    this.length = 0;
    this.getItem = StorageObject_GetItem;
    this.setItem = StorageObject_SetItem;
    this.removeItem = StorageObject_RemoveItem;
    this.clear = StorageObject_Clear;
}
function CachedStorage(storage) {
    var _this = this;

    function UpdateLength() {
        _this.length = storage.length;
    }
    UpdateLength();
    this.getItem = function(key) {
        return storage.getItem(key);
    };
    this.setItem = function(key, value) {
        try {
            storage.setItem(key, value);
        }
        catch (exStorage) { }
        UpdateLength();
    };
    this.removeItem = function(key) {
        try {
            storage.removeItem(key);
        }
        catch (exRemoveItemFromStorage) { }
        UpdateLength();
    };
    this.clear = function() {
        storage.clear();
        UpdateLength();
    };
}
var _testKey;
var _testValue;

function TestStorage(storage) {
    var result = false;

    storage.setItem(_testKey, _testValue);
    if (storage.getItem(_testKey) === _testValue) {
        result = true;
    }
    storage.removeItem(_testKey);
    return result;
}
var _local;
var _session;
var c_strUndefined;
var key_Date;
var key_Language;
var key_LinksJson;
var key_MySiteLinks;
var key_SuiteNavHeight;
var key_UserKey;
var key_LinksCached;

function GetPageContextInfoValueOrNull(infoKey) {
    var retVal = null;
    var pci;

    if (typeof _spPageContextInfo !== c_strUndefined && Boolean(pci = _spPageContextInfo) && typeof pci[infoKey] !== c_strUndefined) {
        retVal = String(pci[infoKey]);
    }
    return retVal;
}
function SuiteNavCommonGetCurrentUserKey() {
    return GetPageContextInfoValueOrNull("systemUserKey");
}
function SuiteNavCommonGetCurrentUICultureOrNone() {
    var currentLanguage = GetPageContextInfoValueOrNull("currentUICultureName");

    if (!Boolean(currentLanguage))
        currentLanguage = "none";
    return currentLanguage;
}
function GetCachedJsonIfValid() {
    var linksJson = null;
    var ls = BrowserStorage.local;

    if (SuiteNavCommonGetCurrentUserKey() == ls.getItem(key_UserKey) && SuiteNavCommonGetCurrentUICultureOrNone() == ls.getItem(key_Language)) {
        var cachedLinksJson = ls.getItem(key_LinksJson);

        if (typeof cachedLinksJson == 'string') {
            linksJson = cachedLinksJson;
        }
    }
    return linksJson;
}
function ExtractSuiteMetadata(navBarDataJson) {
    var suiteData = navBarDataJson;

    try {
        if (typeof suiteData == "string") {
            suiteData = JSON.parse(navBarDataJson);
        }
    }
    catch (ex) {
        suiteData = null;
    }
    return suiteData;
}
function ExtractSuiteProperty(navBarDataJson, jsonPropName) {
    try {
        var suiteData = JSON.parse(navBarDataJson);

        if (suiteData != null) {
            return suiteData[jsonPropName];
        }
    }
    catch (ex) { }
    return undefined;
}
function ExtractSuiteVersion(navBarDataJson) {
    var suiteVersion = ExtractSuiteProperty(navBarDataJson, "SPSuiteVersion");

    if (typeof suiteVersion == "number") {
        return suiteVersion;
    }
    return -1;
}
function ExtractIsMobile(navBarDataJson) {
    var isMobile = ExtractSuiteProperty(navBarDataJson, "SPIsMobile");

    if (typeof isMobile == "boolean") {
        return isMobile;
    }
    return false;
}
function ExtractSuiteLinks(navBarDataJson) {
    var suiteVersion = ExtractSuiteVersion(navBarDataJson);

    if (suiteVersion != -1) {
        var navBarData = ExtractSuiteProperty(navBarDataJson, "NavBarData");

        return typeof navBarData == "string" ? String(navBarData) : JSON.stringify(navBarData);
    }
    return navBarDataJson;
}
function ExtractSuiteNavBarData(suiteDataObject) {
    if (suiteDataObject != null) {
        var suiteMetadata = ExtractSuiteMetadata(suiteDataObject);

        return suiteMetadata.NavBarData;
    }
    return null;
}
function SuiteNavCommonGetSuiteLinks(callBackToRetrieveData, callBackToProcessData, suiteVersion, isMobile, forceRetrieveData) {
    if (typeof suiteVersion != "number")
        suiteVersion = 1;
    var bIncludeMetadata = suiteVersion > 1;
    var linksCacheKey = null;
    var linksJson = !forceRetrieveData ? GetCachedJsonIfValid() : null;
    var linksJsonIsStale = false;

    if (linksJson != null) {
        var linksDate = Date.parse(String(BrowserStorage.local.getItem(key_Date)));
        var msUntilDataStale = 24 * 60 * 60 * 1000;

        linksJsonIsStale = !(linksDate > 0) || (new Date()).getTime() - linksDate > msUntilDataStale;
        if (suiteVersion > 1 && typeof BrowserStorage.session.getItem(key_LinksCached) != 'string') {
            linksJsonIsStale = true;
        }
    }
    if (typeof SP !== c_strUndefined && typeof SP._yam !== c_strUndefined) {
        if (!linksJsonIsStale && Boolean(linksJson) && linksJson.indexOf(Boolean(SP._yam) ? "ShellNewsfeed" : "ShellYammer") !== -1) {
            linksJsonIsStale = true;
        }
    }
    if (linksJson == null) {
        if (callBackToRetrieveData != null) {
            callBackToRetrieveData(function(data) {
                SuiteNavCommonCacheSuiteLinks(data);
                if (callBackToProcessData != null)
                    callBackToProcessData(data);
            });
        }
        else {
            if (callBackToProcessData != null)
                callBackToProcessData(null);
        }
        return;
    }
    if (suiteVersion != ExtractSuiteVersion(linksJson) || Boolean(isMobile) != ExtractIsMobile(linksJson)) {
        if (Boolean(callBackToRetrieveData) && (typeof SuiteNavCommonCacheSuiteLinks == c_strUndefined || typeof SuiteNavCommonCacheSuiteLinks._reloadingData != "boolean" || Boolean(SuiteNavCommonCacheSuiteLinks._reloadingData))) {
            SuiteNavCommonCacheSuiteLinks._reloadingData = true;
            SuiteNavCommonClearSuiteLinksCache();
            SuiteNavCommonGetSuiteLinks(callBackToRetrieveData, callBackToProcessData, suiteVersion, isMobile);
            return;
        }
    }
    if (linksJsonIsStale) {
        if (callBackToRetrieveData != null) {
            callBackToRetrieveData(function(data) {
                if (SuiteNavCommonCacheSuiteLinks(data)) {
                    linksJson = data;
                }
                if (callBackToProcessData != null && suiteVersion > 1)
                    callBackToProcessData(bIncludeMetadata ? data : ExtractSuiteLinks(data));
            });
        }
    }
    if (callBackToProcessData != null)
        callBackToProcessData(linksJson);
}
function SuiteNavCommonCacheSuiteLinks(linksJson) {
    var numWorkloadsProvisioning = 0;

    SuiteNavCommonCacheSuiteLinks._reloadingData = false;
    try {
        var linksData = JSON.parse(linksJson);

        if (linksData != null && linksData.NavBarData != null && linksData.NavBarData.Dimensions != null) {
            var topHeight = Number(linksData.NavBarData.Dimensions.Top);

            if (topHeight > 0)
                BrowserStorage.local.setItem(key_SuiteNavHeight, String(topHeight) + "px");
        }
        if (linksData != null && linksData.DoNotCache === true) {
            return false;
        }
    }
    catch (ex) {
        return false;
    }
    var currentLanguage = SuiteNavCommonGetCurrentUICultureOrNone();
    var ls = BrowserStorage.local;

    ls.setItem(key_LinksJson, linksJson);
    ls.setItem(key_Language, currentLanguage);
    ls.setItem(key_Date, new Date());
    ls.setItem(key_UserKey, SuiteNavCommonGetCurrentUserKey());
    BrowserStorage.session.setItem(key_LinksCached, true);
    return true;
}
function SuiteNavCommonClearSuiteLinksCache(bPreserveMySiteLinks) {
    var lsKeys = [key_LinksJson, key_Language, key_Date, key_UserKey, key_SuiteNavHeight];

    if (!bPreserveMySiteLinks)
        lsKeys.push(key_MySiteLinks);
    for (var i = 0; i < lsKeys.length; i++) {
        BrowserStorage.local.removeItem(lsKeys[i]);
    }
    BrowserStorage.session.removeItem(key_LinksCached);
}
function RequestHeader(header, value) {
    this.header = header;
    this.value = value;
}
var _restHeaders;

function WithRestValue(resultCallback, url) {
    WithUrlContents(resultCallback, url, _restHeaders);
}
function WithUrlContents(resultCallback, url, requestHeaders) {
    WithLoadedXMLHttpRequest(CallbackWithUrlContents, url, requestHeaders);
    function CallbackWithUrlContents(req) {
        var responseText = null;

        if (req.status == 200) {
            responseText = req.responseText;
        }
        resultCallback(responseText);
    }
}
function WithLoadedXMLHttpRequest(xhrResultCallback, url, requestHeaders) {
    var req = new XMLHttpRequest();

    req.onreadystatechange = function() {
        if (req.readyState != 4)
            return;
        xhrResultCallback(req);
    };
    req.open("GET", url, true);
    if (requestHeaders != null) {
        for (var i = 0; i < requestHeaders.length; i++) {
            var rh = requestHeaders[i];

            req.setRequestHeader(rh.header, rh.value);
        }
    }
    req.send("");
}
var g_dlgWndTop;
var g_spDlgLauncher;
var g_ModalDialogCount;
var g_overlayPopup;
var g_childDialog;

function _dlgWndTop() {
    if (Boolean(g_dlgWndTop)) {
        return g_dlgWndTop;
    }
    try {
        var wnd = window;

        while (wnd != null && wnd != wnd.parent) {
            wnd = wnd.parent;
            if (wnd != null && wnd.g_spDlgLauncher) {
                g_dlgWndTop = wnd;
            }
        }
    }
    catch (e) { }
    finally {
        if (!Boolean(g_dlgWndTop)) {
            g_dlgWndTop = window;
        }
    }
    return g_dlgWndTop;
}
function commonShowModalDialog(url, features, callback, args) {
    function assocArray() {
        return [];
    }
    function assocArray_add(array, key, value) {
        array.push(key);
        array[key] = value;
    }
    function assocArray_keys(array) {
        var k = [];

        for (var j = 0; j < array.length; j++)
            k.push(array[j]);
        return k;
    }
    if (document.getElementById("__spPickerHasReturnValue") != null)
        (document.getElementById("__spPickerHasReturnValue")).value = "";
    if (document.getElementById("__spPickerReturnValueHolder") != null)
        (document.getElementById("__spPickerReturnValueHolder")).value = "";
    commonModalDialogReturnValue.clear();
    var rv;

    if (Boolean(window.showModalDialog)) {
        rv = window.showModalDialog(url, args, features);
        if (Boolean(callback)) {
            invokeModalDialogCallback(callback, rv);
        }
    }
    else {
        var defaultWidth = 500, defaultHeight = 550, defaultScrollbars = "yes";

        if (!Boolean(features))
            features = "width=" + String(defaultWidth) + ",height=" + String(defaultHeight);
        else {
            var feats = assocArray(), fre, split;

            if (features.search(/^(\s*\w+\s*:\s*.+?\s*)(;\s*\s*\w+\s*:\s*.+?\s*)*(;\s*)?$/) != -1) {
                fre = /^\s*(\w+)\s*:\s*(.+?)\s*$/;
                split = features.split(/\s*;\s*/);
            }
            else {
                fre = /^\s*(\w+)\s*=\s*(.+?)\s*$/;
                split = features.split(/\s*,\s*/);
            }
            for (var feat in split) {
                var kv = fre.exec(split[feat]);

                if (Boolean(kv) && kv.length == 3)
                    assocArray_add(feats, kv[1].toLowerCase(), kv[2]);
            }
            if (!Boolean(feats["width"]))
                assocArray_add(feats, "width", feats["dialogwidth"] || Boolean(defaultWidth));
            if (!Boolean(feats["height"]))
                assocArray_add(feats, "height", feats["dialogheight"] || Boolean(defaultHeight));
            if (!Boolean(feats["scrollbars"]))
                assocArray_add(feats, "scrollbars", feats["scroll"] || Boolean(defaultScrollbars));
            features = '';
            var keys = assocArray_keys(feats);

            for (var i in keys) {
                if (Boolean(features))
                    features += ",";
                features += keys[i] + "=" + feats[keys[i]];
            }
        }
        var modalDialog = window.open(url, '_blank', features + ',modal=yes,dialog=yes');

        modalDialog.dialogArguments = args;
        window.onfocus = function() {
            var bHasReturnValue = document.getElementById("__spPickerHasReturnValue") != null && (document.getElementById("__spPickerHasReturnValue")).value == "1" || commonModalDialogReturnValue.isSet();

            if (Boolean(modalDialog) && !modalDialog.closed && !bHasReturnValue) {
                modalDialog.focus();
            }
            else {
                window.onfocus = null;
                if (Boolean(callback)) {
                    invokeModalDialogCallback(callback, rv);
                }
            }
        };
        if (!browseris.ie) {
            if (window.frameElement != null) {
                window.fndlgClose = callback;
            }
        }
    }
    return rv;
}
function invokeModalDialogCallback(callback, rv) {
    if (typeof rv != "undefined" && rv != null) {
        callback(rv);
    }
    else if (commonModalDialogReturnValue.isSet()) {
        rv = commonModalDialogReturnValue.get();
        callback(rv);
        commonModalDialogReturnValue.clear();
    }
    else if (document.getElementById("__spPickerHasReturnValue") != null && (document.getElementById("__spPickerHasReturnValue")).value == "1" && document.getElementById("__spPickerReturnValueHolder") != null) {
        rv = (document.getElementById("__spPickerReturnValueHolder")).value;
        callback(rv);
    }
    return rv;
}
function setModalDialogReturnValue(wnd, returnValue) {
    if (wnd.opener != null && typeof returnValue == 'string' && wnd.opener.document.getElementById('__spPickerHasReturnValue') != null && wnd.opener.document.getElementById('__spPickerReturnValueHolder') != null) {
        (wnd.opener.document.getElementById('__spPickerHasReturnValue')).value = '1';
        (wnd.opener.document.getElementById('__spPickerReturnValueHolder')).value = returnValue;
    }
    else {
        setModalDialogObjectReturnValue(wnd, returnValue);
    }
    if (browseris.safari125up) {
        if (wnd.opener != null && wnd.opener.fndlgClose != null)
            wnd.opener.fndlgClose(returnValue);
    }
}
function setModalDialogObjectReturnValue(wnd, returnValue) {
    if (Boolean(wnd.showModalDialog)) {
        wnd.returnValue = returnValue;
    }
    if (wnd.opener != null) {
        if (typeof wnd.opener.commonModalDialogReturnValue != 'undefined') {
            var retVal = wnd.opener.commonModalDialogReturnValue;

            retVal.set(returnValue);
        }
    }
}
function CommonGlobalDialogReturnValue_InitializePrototype() {
    CommonGlobalDialogReturnValue.prototype.hasRetVal = undefined;
    CommonGlobalDialogReturnValue.prototype.retVal = undefined;
    CommonGlobalDialogReturnValue.prototype.set = function(obj) {
        if (typeof obj != "undefined") {
            this.retVal = obj;
            this.hasRetval = true;
        }
    };
    CommonGlobalDialogReturnValue.prototype.isSet = function() {
        return this.hasRetval;
    };
    CommonGlobalDialogReturnValue.prototype.get = function() {
        if (this.hasRetval)
            return this.retVal;
        else
            return undefined;
    };
    CommonGlobalDialogReturnValue.prototype.clear = function() {
        this.hasRetval = false;
        this.retVal = null;
    };
}
function CommonGlobalDialogReturnValue() {
}
var commonModalDialogReturnValue;

function commonModalDialogOpen(url, options, callback, args) {
    options.url = url;
    options.dialogReturnValueCallback = callback;
    options.args = args;
    EnsureScriptParams("SP.UI.Dialog.js", "SP.UI.ModalDialog.showModalDialog", options);
}
function commonModalDialogClose(dialogResult, returnValue) {
    var dlg;
    var wndTop = _dlgWndTop();

    if (typeof wndTop.g_childDialog != 'undefined')
        dlg = wndTop.g_childDialog;
    if (Boolean(dlg)) {
        dlg.set_returnValue(returnValue);
        dlg.close(dialogResult);
    }
}
function commonModalDialogGetArguments() {
    var dlg;
    var wndTop = _dlgWndTop();

    if (typeof wndTop.g_childDialog != 'undefined')
        dlg = wndTop.g_childDialog;
    if (Boolean(dlg) && typeof dlg.get_args != "undefined")
        return dlg.get_args();
    return null;
}
function ShowPopupDialog(dlgUrl) {
    ShowPopupDialogWithCallback(dlgUrl, PopupDialogCallback);
}
function ShowPopupDialogWithCallback(dlgUrl, dialogCallback) {
    if (FV4UI()) {
        var dlgOptions = {
            url: dlgUrl,
            dialogReturnValueCallback: dialogCallback
        };

        EnsureScriptParams("SP.UI.Dialog.js", "SP.UI.ModalDialog.showModalDialog", dlgOptions);
    }
    else
        STSNavigate(dlgUrl);
}
function PopupDialogCallback(dialogResult, returnValue) {
    if (dialogResult == 1) {
        STSNavigate((_dlgWndTop()).location.href);
    }
}
function SelectField(view, selectID) {
    CoreInvoke('_SelectField', view, selectID);
}
function FilterField(view, fieldName, fieldValue, selOption) {
    CoreInvoke('_FilterField', view, fieldName, fieldValue, selOption);
}
function SetControlValue(controlId, value) {
    CoreInvoke('_SetControlValue', controlId, value);
}
function SubmitFormPost(url, bForceSubmit, bDemoteIntoFormBody) {
    CoreInvoke('_SubmitFormPost', url, bForceSubmit, bDemoteIntoFormBody);
}
function GoToPageRelative(url) {
    CoreInvoke('_GoToPageRelative', url);
}
function EnterFolder(url) {
    CoreInvoke('_EnterFolder', url);
}
function HandleFolder(ele, objEvent, url, fTransformServiceOn, fShouldTransformExtension, fTransformHandleUrl, strHtmlTrProgId, iDefaultItemOpen, strProgId, strHtmlType, strServerFileRedirect, strCheckoutUser, strCurrentUser, strRequireCheckout, strCheckedoutTolocal, strPermmask) {
    PreventDefaultNavigation();
    CoreInvoke('_HandleFolder', ele, objEvent, url, fTransformServiceOn, fShouldTransformExtension, fTransformHandleUrl, strHtmlTrProgId, iDefaultItemOpen, strProgId, strHtmlType, strServerFileRedirect, strCheckoutUser, strCurrentUser, strRequireCheckout, strCheckedoutTolocal, strPermmask);
}
function VerifyFolderHref(ele, objEvent, url, strHtmlTrProgId, iDefaultItemOpen, strProgId, strHtmlType, strServerFileRedirect) {
    CoreInvoke('_VerifyFolderHref', ele, objEvent, url, strHtmlTrProgId, iDefaultItemOpen, strProgId, strHtmlType, strServerFileRedirect);
}
function VerifyHref(ele, objEvent, iDefaultItemOpen, strProgId, strServerFileRedirect) {
    CoreInvoke('_VerifyHref', ele, objEvent, iDefaultItemOpen, strProgId, strServerFileRedirect);
}
function DispEx(ele, objEvent, fTransformServiceOn, fShouldTransformExtension, fTransformHandleUrl, strHtmlTrProgId, iDefaultItemOpen, strProgId, strHtmlType, strServerFileRedirect, strCheckoutUser, strCurrentUser, strRequireCheckout, strCheckedoutTolocal, strPermmask) {
    g_MDNav = (function(u) {
        return u;
    })();
    CoreInvoke('_DispEx', ele, objEvent, fTransformServiceOn, fShouldTransformExtension, fTransformHandleUrl, strHtmlTrProgId, iDefaultItemOpen, strProgId, strHtmlType, strServerFileRedirect, strCheckoutUser, strCurrentUser, strRequireCheckout, strCheckedoutTolocal, strPermmask);
    return g_MDNav;
}
function EditItemWithCheckoutAlert(evt, Url, bCheckout, bIsCheckedOutToLocal, strDocument, strhttpRoot, strCurrentUser, strCheckoutUser) {
    CoreInvoke('_EditItemWithCheckoutAlert', evt, Url, bCheckout, bIsCheckedOutToLocal, strDocument, strhttpRoot, strCurrentUser, strCheckoutUser);
}
function STSNavigateWithCheckoutAlert(Url, bCheckout, bIsCheckedOutToLocal, strDocument, strhttpRoot, strCurrentUser, strCheckoutUser) {
    CoreInvoke('_STSNavigateWithCheckoutAlert', Url, bCheckout, bIsCheckedOutToLocal, strDocument, strhttpRoot, strCurrentUser, strCheckoutUser);
}
function NewItem2(evt, url) {
    CoreInvoke('_NewItem2', evt, url);
}
function NewItem(url) {
    CoreInvoke('_NewItem', url);
}
function EditItem2(evt, url) {
    CoreInvoke('_EditItem2', evt, url);
}
function EditItem(url) {
    CoreInvoke('_EditItem', url);
}
function RefreshPageTo(evt, url, bForceSubmit) {
    CoreInvoke('_RefreshPageTo', evt, url, bForceSubmit);
}
function AddGroupToCookie(groupName) {
    CoreInvoke('_AddGroupToCookie', groupName);
}
function RemoveGroupFromCookie(groupName) {
    CoreInvoke('_RemoveGroupFromCookie', groupName);
}
function ExpGroupBy(formObj) {
    CoreInvoke('_ExpGroupBy', formObj);
}
function DispDocItem(ele, strProgId) {
    CoreInvoke('_DispDocItem', ele, strProgId);
}
function DispDocItemExWithServerRedirect(ele, objEvent, fTransformServiceOn, fShouldTransformExtension, fTransformHandleUrl, strProgId, iDefaultItemOpen, strServerFileRedirect) {
    CoreInvoke('_DispDocItemExWithServerRedirect', ele, objEvent, fTransformServiceOn, fShouldTransformExtension, fTransformHandleUrl, strProgId, iDefaultItemOpen, strServerFileRedirect);
}
function DispDocItemEx(ele, fTransformServiceOn, fShouldTransformExtension, fTransformHandleUrl, strProgId) {
    CoreInvoke('_DispDocItemEx', ele, fTransformServiceOn, fShouldTransformExtension, fTransformHandleUrl, strProgId);
}
function PortalPinToMyPage(eForm, portalUrl, instanceId, listTitle, listDescription, listViewUrl, baseType, serverTemplate) {
    CoreInvoke('_PortalPinToMyPage', eForm, portalUrl, instanceId, listTitle, listDescription, listViewUrl, baseType, serverTemplate);
}
function MoveToViewDate(strdate, view_type, ctxid) {
    CoreInvoke('_MoveToViewDate', strdate, view_type, ctxid);
}
function MoveToDate(strdate, ctxid) {
    CoreInvoke('_MoveToDate', strdate, ctxid);
}
function ClickDay(date) {
    CoreInvoke('_ClickDay', date);
}
function GetMonthView(str) {
    CoreInvoke('_GetMonthView', str);
}
function OptLoseFocus(opt) {
    CoreInvoke('_OptLoseFocus', opt);
}
function SetCtrlFromOpt(ctrl, opt) {
    CoreInvoke('_SetCtrlFromOpt', ctrl, opt);
}
function ChangeLayoutMode(p1, p2) {
    CoreInvoke('_ChangeLayoutMode', p1, p2);
}
function MSOLayout_ChangeLayoutMode(p1, p2) {
    ChangeLayoutMode(p1, p2);
}
function WebPartMenuKeyboardClick(elem, expectedKeyCode1, expectedKeyCode2, evt) {
    CoreInvoke('_WebPartMenuKeyboardClick', elem, expectedKeyCode1, expectedKeyCode2, evt);
}
function ShowToolPane2Wrapper(p1, p2, p3) {
    CoreInvoke('_ShowToolPane2Wrapper', p1, p2, p3);
}
function EditInSPD(strDocument, bRefresh) {
    CoreInvoke('_EditInSPD', strDocument, bRefresh);
}
function SetupFixedWidthWebParts() {
    CoreInvoke('_SetupFixedWidthWebParts');
}
function ToggleAllItems(evt, cbx, ctxNum) {
    CoreInvoke('_ToggleAllItems', evt, cbx, ctxNum);
}
function CommandUIExecuteCommand(commandId) {
    CoreInvoke('_CommandUIExecuteCommand', commandId);
}
function PopMenuFromChevron(e) {
    CoreInvoke('_PopMenuFromChevron', e);
}
function ListHeaderMenu_OnMouseDown(e) {
    CoreInvoke('_ListHeaderMenu_OnMouseDown', e);
}
function NavigateToSubNewAspx(strHttpRoot, strArgs) {
    CoreInvoke('_NavigateToSubNewAspx', strHttpRoot, strArgs);
}
function NavigateToManagePermsPage(strHttpRoot, strListId, strFileRef) {
    CoreInvoke('_NavigateToManagePermsPage', strHttpRoot, strListId, strFileRef);
}
function DoNavigateToTemplateGallery(strSaveLocUrl, strTGUrl) {
    CoreInvoke('_DoNavigateToTemplateGallery', strSaveLocUrl, strTGUrl);
}
function RefreshPage(dialogResult) {
    CoreInvoke('_RefreshPage', dialogResult);
}
function OpenPopUpPage(url, callback, width, height) {
    CoreInvoke('_OpenPopUpPage', url, callback, width, height);
}
function OpenCreateWebPageDialog(url) {
    CoreInvoke('_OpenCreateWebPageDialog', url);
}
function EditLink2(elm, ctxNum) {
    CoreInvoke('_EditLink2', elm, ctxNum);
}
function GoBack(defViewUrl) {
    CoreInvoke('_GoBack', defViewUrl);
}
function ReplyItem(url, threading, guid, subject) {
    CoreInvoke('_ReplyItem', url, threading, guid, subject);
}
function ExportToDatabase(strSiteUrl, strListID, strViewID, fUseExistingDB) {
    CoreInvoke('_ExportToDatabase', strSiteUrl, strListID, strViewID, fUseExistingDB);
}
function ExportList(using) {
    CoreInvoke('_ExportList', using);
}
function ClearSearchTerm(guidView) {
    CoreInvoke('_ClearSearchTerm', guidView);
}
function SubmitSearchForView(ViewGuid) {
    CoreInvoke('_SubmitSearchForView', ViewGuid);
}
function SubmitSearchRedirect(strUrl) {
    CoreInvoke('_SubmitSearchRedirect', strUrl);
}
function AlertAndSetFocus(msg, fieldName) {
    CoreInvoke('_AlertAndSetFocus', msg, fieldName);
}
function AlertAndSetFocusForDropdown(msg, fieldName) {
    CoreInvoke('_AlertAndSetFocusForDropdown', msg, fieldName);
}
function AddSilverlightWebPart(item, zoneNum, zoneIndex) {
    CoreInvoke('_AddSilverlightWebPart', item, zoneNum, zoneIndex);
}
function UserSelectionOnClick(chk, viewCounter) {
    CoreInvoke('_UserSelectionOnClick', chk, viewCounter);
}
function OnIframeLoad() {
    CoreInvoke('_OnIframeLoad');
}
function OnFocusFilter(elm) {
    CoreInvoke('_OnFocusFilter', elm);
}
function TopHelpButtonClick(strParam, evt) {
    cancelDefault(evt);
    CoreInvoke('_TopHelpButtonClick', strParam);
}
function HelpWindowKey(strKey) {
    CoreInvoke('_HelpWindowKey', strKey);
}
function HelpWindowUrl(strUrl) {
    CoreInvoke('_HelpWindowUrl', strUrl);
}
function HelpWindow() {
    CoreInvoke('_HelpWindow');
}
function ToggleFullScreenMode() {
    CoreInvoke('_ToggleFullScreenMode');
}
function OnClickFilter(obj, e) {
    return CoreInvoke('_OnClickFilter', obj, e);
}
function GCActivateAndFocus(GCObject) {
    CoreInvoke('_GCActivateAndFocus', GCObject);
}
function GCNavigateToNonGridPage() {
    CoreInvoke('_GCNavigateToNonGridPage');
}
function AjaxNavigate$WantsNewTab(evt) {
    if ("undefined" != typeof evt.ctrlKey && Boolean(evt.ctrlKey)) {
        return true;
    }
    if ("undefined" != typeof evt.button && 1 == evt.button) {
        return true;
    }
    return false;
}
function AjaxNavigate$OnClickHook(evt, topElem) {
    if (!(evt.returnValue === false || evt.defaultPrevented) && !AjaxNavigate$WantsNewTab(evt)) {
        var srcElement = GetEventSrcElement(evt);
        var currentElem = srcElement;
        var anchorClick = false;

        while (null != currentElem) {
            if (null != currentElem.tagName && "A" == currentElem.tagName.toUpperCase()) {
                anchorClick = true;
                break;
            }
            if (currentElem == topElem)
                break;
            currentElem = currentElem.parentNode;
        }
        if (anchorClick && currentElem.href != null && currentElem.href.length > 0 && currentElem.href != "#" && IsSTSPageUrlValid(currentElem.href)) {
            cancelDefault(evt);
            STSNavigate(currentElem.href);
            return false;
        }
    }
    return (function(u) {
        return u;
    })();
}
function AjaxNavigate$add_navigate(handler) {
    if ('function' != typeof handler)
        throw "unexpected";
    var index = Array.indexOf(this._list, handler, 0);

    if (-1 == index) {
        this._list.push(handler);
    }
}
function AjaxNavigate$remove_navigate(handler) {
    if ('function' != typeof handler)
        throw "unexpected";
    var index = Array.indexOf(this._list, handler, 0);

    if (-1 != index) {
        this._list.splice(index, 1);
    }
}
function AjaxNavigate$_parseParams(hashObject, parts, partsLength, partPosStart) {
    var bLocalAnchor = false;

    for (var partPos = partPosStart; partPos < partsLength; partPos++) {
        var part = parts[partPos];

        if (null == part || 0 == part.length)
            continue;
        var eqPos = part.indexOf('=');
        var key, value;

        if (eqPos >= 1) {
            key = part.substr(0, eqPos);
            value = part.substr(eqPos + 1);
            hashObject[key] = unescapeProperly(value);
        }
        else if (eqPos == -1 && !bLocalAnchor) {
            if (bLocalAnchor)
                throw "Unexpected";
            key = "anchorTag";
            value = part;
            hashObject[key] = unescapeProperly(value);
            bLocalAnchor = true;
        }
        else {
            throw "Unexpected";
        }
    }
}
function AjaxNavigate$_GetWindowLocationHash(href) {
    var nHashPos = href.indexOf('#');

    nHashPos = nHashPos > 0 ? nHashPos : href.length;
    return href.substr(nHashPos);
}
function AjaxNavigate$_GetWindowLocationNoHash(href) {
    var nHashPos = href.indexOf('#');

    nHashPos = nHashPos > 0 ? nHashPos : href.length;
    return href.substr(0, nHashPos);
}
function RemoveMDSQueryParametersFromUrl(inUrl) {
    return RemoveQueryParameterFromUrl(RemoveQueryParameterFromUrl(RemoveQueryParameterFromUrl(inUrl, 'AjaxDelta'), 'OrigMaster'), 'isStartPlt1');
}
function GetUrlFromMDSLocation(startPage, relativeMDSLocation, fServerAbsolute) {
    var anUndefined = (function(u) {
        return u;
    })();

    if (startPage == null)
        return anUndefined;
    if (relativeMDSLocation == null || relativeMDSLocation.length < 1 || relativeMDSLocation[0] != "/")
        return anUndefined;
    var locationWeb = startPage.indexOf("/_layouts/15/start.aspx");

    if (-1 == locationWeb) {
        return anUndefined;
    }
    var prefix;

    if (fServerAbsolute && '/' != startPage[0]) {
        var startHostName = startPage.indexOf("://");

        if (-1 == startHostName)
            return anUndefined;
        var firstSlash = startPage.indexOf("/", startHostName + 3);

        prefix = startPage.substr(firstSlash, locationWeb - firstSlash);
    }
    else {
        prefix = startPage.substr(0, locationWeb);
    }
    return prefix + relativeMDSLocation;
}
function AjaxNavigate$_UrlFromHashBag(hashObject) {
    var url = hashObject["url"];
    var anchorName = hashObject["anchorTag"];

    for (var part in hashObject) {
        if (part != "anchorTag" && part != "url")
            url += "#" + part + "=" + encodeURIComponent(hashObject[part]);
    }
    if (Boolean(anchorName)) {
        url += "#" + anchorName;
    }
    if (null != url && url.length > 1 && "/" == url[0] && "/" == url[1]) {
        return url.substr(1);
    }
    else {
        var startPageUrl = AjaxNavigate$_GetWindowLocationNoHash(window.location.href);

        return GetUrlFromMDSLocation(startPageUrl, url, true);
    }
}
function AjaxNavigate$_buildHashBag(hash) {
    var hashObject = {};

    try {
        if (hash == "" || hash == "#") {
            hashObject["url"] = "/";
        }
        else if (hash != null && hash.length != 0) {
            var parts = (hash.substr(1)).split('#');
            var partsLength = parts.length;
            var partPosStart = 0;

            if ("undefined" != typeof g_MinimalDownload && g_MinimalDownload && partsLength > 0 && parts[0].length > 0 && parts[0][0] == '/') {
                hashObject["url"] = parts[0];
                partPosStart = 1;
            }
            AjaxNavigate$_parseParams(hashObject, parts, partsLength, partPosStart);
        }
    }
    catch (e) { }
    ;
    return hashObject;
}
function AjaxNavigate$parseHash(hash) {
    var hashObject = {};

    try {
        if (hash != null && hash.length != 0) {
            var parts = hash.split('#');

            AjaxNavigate$_parseParams(hashObject, parts, parts.length, 0);
        }
    }
    catch (e) { }
    ;
    return hashObject;
}
function AjaxNavigate$_raiseNavigate(sender) {
    var hashObject = this._buildHashBag(AjaxNavigate$_GetWindowLocationHash(window.location.href));
    var listLen = this._list.length;

    for (var i = 0, l = listLen; i < l; i++) {
        this._list[i](sender, hashObject);
    }
}
function AjaxNavigate$_getParam(partName) {
    var hashObject = this._buildHashBag(AjaxNavigate$_GetWindowLocationHash(window.location.href));

    return hashObject[partName];
}
function AjaxNavigate$_normalizeFormAction(formAction) {
    var tmpForm = document.createElement('form');

    tmpForm.action = formAction;
    return tmpForm.action;
}
function AjaxNavigate$_getSavedFormAction() {
    var formAction = null;

    if ("undefined" != typeof asyncDeltaManager && Boolean(asyncDeltaManager) && "undefined" != typeof asyncDeltaManager._savedFormAction) {
        formAction = asyncDeltaManager._savedFormAction;
        if (Boolean(formAction)) {
            formAction = AjaxNavigate$_normalizeFormAction(formAction);
        }
    }
    return formAction;
}
function AjaxNavigate$submit(formToSubmit) {
    if ("undefined" != typeof g_MinimalDownload && g_MinimalDownload && (window.location.pathname.toLowerCase()).endsWith("/_layouts/15/start.aspx") && "undefined" != typeof asyncDeltaManager && "undefined" != typeof asyncDeltaManager._onFormSubmitCore) {
        asyncDeltaManager._onFormSubmitCore(formToSubmit);
    }
    else {
        formToSubmit.submit();
    }
}
function AjaxNavigate$_getAjaxLocationWindow() {
    var ajaxLocation = null;
    var href = window.location.href;
    var startPos = (href.toLowerCase()).indexOf("/_layouts/15/start.aspx");
    var index1 = href.indexOf("://");
    var index2 = href.indexOf("/", index1 + 3);

    if (-1 == index2) {
        index2 = href.length;
    }
    var hashPos = href.indexOf("#");

    if (-1 != hashPos && hashPos + 1 <= href.length && "/" == href[hashPos + 1]) {
        if (hashPos + 2 <= href.length && "/" == href[hashPos + 2]) {
            ajaxLocation = href.substr(0, index2) + href.substr(hashPos + 2);
        }
        else {
            ajaxLocation = href.substr(0, startPos) + href.substr(hashPos + 1);
        }
    }
    else {
        ajaxLocation = href.substr(0, startPos);
    }
    return ajaxLocation;
}
function AjaxNavigate$combineURL(baseUrlPath, additionalNodes) {
    if (baseUrlPath.endsWith("/")) {
        if (additionalNodes.startsWith("/"))
            additionalNodes = additionalNodes.substring(1);
        return baseUrlPath + additionalNodes;
    }
    else {
        return additionalNodes.startsWith("/") ? baseUrlPath + additionalNodes : baseUrlPath + "/" + additionalNodes;
    }
}
function AjaxNavigate$isMDSURL(url) {
    var idxQuery = url.indexOf("?");

    if (-1 == idxQuery) {
        idxQuery = url.length;
    }
    var idxHash = url.indexOf("#");

    if (-1 == idxHash) {
        idxHash = url.length;
    }
    var idxMin = Math.min(idxQuery, idxHash);

    url = url.substr(0, idxMin);
    return (url.toLowerCase()).endsWith("/_layouts/15/start.aspx");
}
function AjaxNavigate$convertRegularURLtoMDSURL(webUrl, fullPath) {
    if (AjaxNavigate$isMDSURL(fullPath))
        return fullPath;
    var mdsUrl = null;

    if (webUrl != null && (fullPath.toLowerCase()).startsWith(webUrl.toLowerCase() + "/")) {
        var webRelativeUrl = fullPath.substring(webUrl.length + 1);

        if (webRelativeUrl == null || webRelativeUrl == "") {
            webRelativeUrl = "/";
        }
        else if ('/' != webRelativeUrl[0]) {
            webRelativeUrl = "/" + webRelativeUrl;
        }
        mdsUrl = AjaxNavigate$combineURL(webUrl, "/_layouts/15/start.aspx" + "#" + webRelativeUrl);
    }
    else {
        var idxHttp = fullPath.indexOf("://");

        if (idxHttp != -1) {
            var idxServerPath = fullPath.indexOf("/", idxHttp + 3);

            if (idxServerPath != -1) {
                var serverPath = fullPath.substring(0, idxServerPath);
                var serverRelativeUrl = fullPath.substring(idxServerPath);

                if (serverRelativeUrl == null || serverRelativeUrl == "") {
                    serverRelativeUrl = "/";
                }
                else if ('/' != serverRelativeUrl[0]) {
                    serverRelativeUrl = "/" + serverRelativeUrl;
                }
                mdsUrl = AjaxNavigate$combineURL(serverPath, "/_layouts/15/start.aspx" + "#/" + serverRelativeUrl);
            }
        }
    }
    return mdsUrl;
}
function AjaxNavigate$convertMDSURLtoRegularURL(mdsPath) {
    var regularUrl = mdsPath;

    if (mdsPath != null || mdsPath != "") {
        var startPage = "/_layouts/15/start.aspx";
        var idxMdsHash = (mdsPath.toLowerCase()).indexOf(startPage);

        if (idxMdsHash != -1) {
            var webUrl = mdsPath.substring(0, idxMdsHash);

            idxMdsHash += startPage.length;
            if (mdsPath.length == idxMdsHash) {
                regularUrl = webUrl;
            }
            else if (mdsPath[idxMdsHash] == '#') {
                idxMdsHash += 1;
                if (mdsPath.length == idxMdsHash) {
                    regularUrl = webUrl;
                }
                else if (mdsPath.length >= idxMdsHash + 2 && mdsPath[idxMdsHash] == '/' && mdsPath[idxMdsHash + 1] == '/') {
                    var idxHttp = mdsPath.indexOf("://");

                    if (idxHttp != -1) {
                        var idxServerPath = mdsPath.indexOf("/", idxHttp + 3);

                        if (idxServerPath != -1) {
                            var serverPath = mdsPath.substring(0, idxServerPath);
                            var serverRelativeUrl = mdsPath.substring(idxMdsHash + 1);

                            regularUrl = AjaxNavigate$combineURL(serverPath, serverRelativeUrl);
                        }
                    }
                }
                else if (mdsPath.length >= idxMdsHash + 1 && mdsPath[idxMdsHash] == '/') {
                    var webRelativeUrl = mdsPath.substring(idxMdsHash);

                    regularUrl = AjaxNavigate$combineURL(webUrl, webRelativeUrl);
                }
            }
        }
    }
    return regularUrl;
}
function AjaxNavigate$get_href() {
    var ajaxLocation = null;

    if ((window.location.pathname.toLowerCase()).endsWith("/_layouts/15/start.aspx")) {
        if ("undefined" != typeof g_MinimalDownload && g_MinimalDownload) {
            ajaxLocation = this.getSavedFormAction();
        }
        if (!Boolean(ajaxLocation)) {
            ajaxLocation = AjaxNavigate$_getAjaxLocationWindow();
        }
    }
    else {
        ajaxLocation = window.location.href;
    }
    return ajaxLocation;
}
function AjaxNavigate$get_hash() {
    var ajaxHash = window.location.hash;

    if ("undefined" != typeof g_MinimalDownload && g_MinimalDownload && (window.location.pathname.toLowerCase()).endsWith("/_layouts/15/start.aspx")) {
        var hashIndex = ajaxHash.indexOf("#", 1);

        ajaxHash = hashIndex > 0 ? ajaxHash.substr(hashIndex) : "";
    }
    return ajaxHash;
}
function AjaxNavigate$get_search() {
    var ajaxsearch = "";

    if ("undefined" != typeof g_MinimalDownload && g_MinimalDownload && (window.location.pathname.toLowerCase()).endsWith("/_layouts/15/start.aspx")) {
        var href = this.getSavedFormAction();

        if (Boolean(href)) {
            var startSearch = href.indexOf("?");

            if (-1 != startSearch) {
                ajaxsearch = href.substr(startSearch);
            }
        }
    }
    else {
        ajaxsearch = window.location.search;
    }
    return ajaxsearch;
}
function AjaxNavigate$update(url, updateParts, fullNavigate, anchorName) {
    var oldHash = AjaxNavigate$_GetWindowLocationHash(window.location.href);
    var hashObject = {};
    var newHash = "";

    if (null == url) {
        if (oldHash != null && oldHash.length != 0) {
            var parts = (oldHash.substr(1)).split('#');
            var partsLength = parts.length;
            var partPosStart = 0;

            if ("undefined" != typeof g_MinimalDownload && g_MinimalDownload && partsLength > 0 && parts[0].length > 0 && parts[0][0] == '/') {
                newHash = parts[0];
                partPosStart = 1;
            }
            AjaxNavigate$_parseParams(hashObject, parts, partsLength, partPosStart);
        }
    }
    else {
        newHash = this._fixLayoutsUrl(url);
    }
    if ("undefined" != typeof updateParts) {
        for (var part in updateParts) {
            var partValue = updateParts[part];

            if (null != partValue && "string" != typeof partValue && "number" != typeof partValue) {
                throw "Unexpected";
            }
            if (null == partValue) {
                if (hashObject[part] != null) {
                    delete hashObject[part];
                }
            }
            else {
                hashObject[part] = updateParts[part];
            }
        }
    }
    if ("undefined" != typeof anchorName && anchorName != null && anchorName != "")
        newHash += "#" + encodeURIComponent(anchorName);
    for (part in hashObject) {
        if (part != "anchorTag")
            newHash += "#" + part + "=" + encodeURIComponent(hashObject[part]);
    }
    if (null != url) {
        var dlgWnd = _dlgWndTop();

        while (dlgWnd.g_childDialog != null) {
            commonModalDialogClose(0, null);
        }
    }
    var fDeltaManager = "undefined" != typeof asyncDeltaManager && Boolean(asyncDeltaManager) && "undefined" != typeof asyncDeltaManager._handleLocalAnchor && "undefined" != typeof asyncDeltaManager.SetCurrentUrl && "undefined" != typeof asyncDeltaManager._navigate;

    if ("undefined" != typeof fullNavigate && fullNavigate || !fDeltaManager) {
        if (newHash.startsWith('#')) {
            try {
                window.location.hash = newHash;
            }
            catch (ex) { }
        }
        else {
            try {
                window.location.href = newHash;
            }
            catch (ex) { }
        }
    }
    else {
        if (null == url) {
            if (fDeltaManager) {
                if ("undefined" != typeof anchorName && anchorName != null && anchorName != "")
                    asyncDeltaManager._handleLocalAnchor(anchorName);
                var startPageUrl = AjaxNavigate$_GetWindowLocationNoHash(window.location.href);
                var newAction = GetUrlFromMDSLocation(startPageUrl, RemoveMDSQueryParametersFromUrl(newHash), true);

                if (Boolean(newAction)) {
                    asyncDeltaManager._savedFormAction = newAction;
                }
            }
            try {
                window.location.hash = newHash;
            }
            catch (ex) { }
        }
        else {
            if (fDeltaManager) {
                asyncDeltaManager.SetCurrentUrl(null);
                asyncDeltaManager._navigate(newHash, anchorName, true);
            }
        }
    }
}
function AjaxNavigate$_fixLayoutsUrl(url) {
    var idxLayouts = url.indexOf("_layouts/");

    if (idxLayouts != -1) {
        var strPostLayouts = url.substr(idxLayouts);
        var expectedVersionNum = (strPostLayouts.split("/"))[1];

        if (expectedVersionNum != null) {
            if (isNaN(Number(expectedVersionNum)))
                url = url.replace("_layouts/", "_layouts/15/");
        }
    }
    return url;
}
function AjaxNavigate$_clear() {
    this._list = new Array(0);
}
function AjaxNavigate() {
    this._list = new Array(0);
}
var ajaxNavigate;

function _spBodyOnHashChange() {
    ajaxNavigate._raiseNavigate(ajaxNavigate);
}
var URI;

function setInnerText(elem, text) {
    var doc = elem.ownerDocument;

    if (Boolean(doc.createTextNode)) {
        var textNode = doc.createTextNode(text);

        elem.innerHTML = '';
        elem.appendChild(textNode);
    }
    else {
        elem.innerText = text;
    }
}
function _EnsureJSClassOrNamespace(nsStr, isNamespace) {
    var parts = nsStr.split(".");
    var prevNS;

    for (var i = 0, pLen = parts.length; i < pLen; i++) {
        var ns = parts[i];

        if (typeof prevNS == "undefined") {
            prevNS = window;
        }
        if (typeof prevNS[ns] == "undefined") {
            prevNS[ns] = new Object();
        }
        prevNS = prevNS[ns];
        if (isNamespace) {
            prevNS.__namespace = true;
        }
    }
}
function _EnsureJSNamespace(nsStr) {
    _EnsureJSClassOrNamespace(nsStr, true);
}
function _EnsureJSClass(nsStr) {
    _EnsureJSClassOrNamespace(nsStr, false);
}
var g_prefetch;
var g_ribbonImagePrefetch;

function AllowCSSFiltersOnIE8() {
    if (browseris.ie8down) {
        CSSUtil.AddClass(document.body, "ms-core-needIEFilter");
        var elem = document.getElementById("ms-hcTest");

        if (Boolean(elem) && Boolean(elem.currentStyle)) {
            if (elem.currentStyle["borderColor"] != "#f00") {
                var s4ws = document.getElementById("s4-workspace");

                if (Boolean(s4ws))
                    s4ws.style.filter = "";
            }
        }
    }
    else {
        CSSUtil.AddClass(document.body, "ms-backgroundImage");
    }
}
function notifyScriptsLoadedAndExecuteWaitingJobs(scriptName) {
    if (typeof Sys != "undefined" && Boolean(Sys) && Boolean(Sys.Application)) {
        Sys.Application.notifyScriptLoaded();
    }
    NotifyScriptLoadedAndExecuteWaitingJobs(scriptName);
}
var initJsLoaded;

$_global_init();

