function $_global_init() {
    {
        if ("undefined" == typeof g_all_modules) {
            g_all_modules = {};
        }
        g_all_modules["init.js"] = {
            "version": {
                "rmj": 16,
                "rmm": 0,
                "rup": 7820,
                "rpr": 1204
            }
        };
    }
    if (-1 != navigator.userAgent.indexOf('ProfilerMark') && 'function' == typeof msWriteProfilerMark) {
        spWriteProfilerMark = function(m) {
            window.msWriteProfilerMark(m);
        };
    }
    if (typeof spWriteProfilerMark == 'function')
        spWriteProfilerMark("perfMarkBegin_" + "init.js");
    if (typeof OffSwitch == 'undefined') {
        OffSwitch = {
            "__namespace": true
        };
        OffSwitch_module_def();
    }
    if (typeof RuntimeErrors == 'undefined') {
        RuntimeErrors = {
            "__namespace": true
        };
        RuntimeErrors_module_def();
    }
    if (typeof Verify == 'undefined') {
        Verify = {
            "__namespace": true
        };
        Verify_module_def();
    }
    if (typeof Define == 'undefined') {
        Define = {
            "__namespace": true
        };
        Define_module_def();
    }
    if (typeof BrowserDetection == 'undefined') {
        BrowserDetection = {
            "__namespace": true
        };
        BrowserDetection_module_def();
    }
    (function() {
        BrowserisOld.prototype = {
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
            ie9down: undefined,
            ie9standardUp: undefined,
            ipad: undefined,
            windowsphone: undefined,
            chrome: undefined,
            chrome7up: undefined,
            chrome8up: undefined,
            chrome9up: undefined,
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
        Browseris.prototype = BrowserisOld.prototype;
        Browseris.prototype.ie10standardUp = undefined;
        Browseris.prototype.ie11 = undefined;
        Browseris.prototype.ie11up = undefined;
        Browseris.prototype.msEdge = undefined;
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
            this.ie11up = this.ie && (Boolean(document.documentMode) && document.documentMode >= 11);
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
        function BrowserisOld() {
            var agt = navigator.userAgent.toLowerCase();
            var navIdx;

            this.osver = 1.0;
            if (Boolean(agt)) {
                var stOSVer = agt.substring(agt.indexOf("windows ") + 11);

                this.osver = parseFloat(stOSVer);
            }
            this.major = parseInt(navigator.appVersion);
            this.nav = agt.indexOf('mozilla') != -1 && (agt.indexOf('spoofer') == -1 && agt.indexOf('compatible') == -1);
            this.nav6 = this.nav && this.major == 5;
            this.nav6up = this.nav && this.major >= 5;
            this.nav7up = false;
            if (this.nav6up) {
                navIdx = agt.indexOf("netscape/");
                if (navIdx >= 0)
                    this.nav7up = parseInt(agt.substring(navIdx + 9)) >= 7;
            }
            this.ie = agt.indexOf("msie") != -1;
            this.ipad = agt.indexOf("ipad") != -1;
            this.windowsphone = agt.indexOf("windows phone") != -1;
            this.aol = this.ie && agt.indexOf(" aol ") != -1;
            if (this.ie) {
                var stIEVer = agt.substring(agt.indexOf("msie ") + 5);

                this.iever = parseInt(stIEVer);
                this.verIEFull = parseFloat(stIEVer);
            }
            else
                this.iever = 0;
            this.ie4up = this.ie && this.major >= 4;
            this.ie5up = this.ie && this.iever >= 5;
            this.ie55up = this.ie && this.verIEFull >= 5.5;
            this.ie6up = this.ie && this.iever >= 6;
            this.ie7down = this.ie && this.iever <= 7;
            this.ie8down = this.ie && this.iever <= 8;
            this.ie9down = this.ie && this.iever <= 9;
            this.ie7up = this.ie && this.iever >= 7;
            this.ie8standard = this.ie && Boolean(document.documentMode) && document.documentMode == 8;
            this.ie8standardUp = this.ie && Boolean(document.documentMode) && document.documentMode >= 8;
            this.ie9standardUp = this.ie && Boolean(document.documentMode) && document.documentMode >= 9;
            this.ie10standardUp = this.ie && Boolean(document.documentMode) && document.documentMode >= 10;
            this.winnt = agt.indexOf("winnt") != -1 || agt.indexOf("windows nt") != -1;
            this.win32 = this.major >= 4 && navigator.platform == "Win32" || agt.indexOf("win32") != -1 || agt.indexOf("32bit") != -1;
            this.win64bit = agt.indexOf("win64") != -1;
            this.win = this.winnt || this.win32 || this.win64bit;
            this.mac = agt.indexOf("mac") != -1;
            this.w3c = this.nav6up;
            this.webKit = agt.indexOf("webkit") != -1;
            this.safari = agt.indexOf("webkit") != -1;
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
            this.win8AppHost = agt.indexOf("msapphost") != -1;
            this.chrome = this.nav && agt.indexOf("chrome") != -1;
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
            this.msTouch = typeof navigator.msMaxTouchPoints != "undefined" && navigator.msMaxTouchPoints > 0;
            this.isTouch = this.msTouch || "ontouchstart" in document.documentElement;
            this.armProcessor = agt.indexOf("arm") != -1;
        }
        if (typeof _browserisFlight !== "undefined") {
            BrowserDetection.userAgent = new Browseris();
        }
        else {
            BrowserDetection.userAgent = new BrowserisOld();
        }
    })();
    browseris = BrowserDetection.userAgent;
    bis = BrowserDetection.userAgent;
    if (typeof BrowserStorage == 'undefined') {
        BrowserStorage = {
            "__namespace": true
        };
        BrowserStorage_module_def();
    }
    if (typeof CSSUtil == 'undefined') {
        CSSUtil = {
            "__namespace": true
        };
        CSSUtil_module_def();
    }
    ;
    pxToNum = CSSUtil.pxToNum;
    GetWidthFromPxString = CSSUtil.pxToFloat;
    GetCurrentEltStyle = CSSUtil.getCurrentStyle;
    GetCurrentEltStyleByNames = CSSUtil.getCurrentEltStyleByNames;
    GetOpacity = CSSUtil.getOpacity;
    SetOpacity = CSSUtil.setOpacity;
    HasCssClass = CSSUtil.HasClass;
    AddCssClassToElement = CSSUtil.AddClass;
    RemoveCssClassFromElement = CSSUtil.RemoveClass;
    getCurrentEltStyleByNames = CSSUtil.getCurrentEltStyleByNames;
    if (typeof DOM == 'undefined') {
        DOM = {
            "__namespace": true
        };
        DOM_module_def();
    }
    fRightToLeft = DOM.rightToLeft;
    cancelDefault = DOM.cancelDefault;
    AbsLeft = DOM.AbsLeft;
    AbsTop = DOM.AbsTop;
    CancelEvent = DOM.CancelEvent;
    GetElementsByName = DOM.GetElementsByName;
    GetEventCoords = DOM.GetEventCoords;
    GetEventSrcElement = DOM.GetEventSrcElement;
    GetInnerText = DOM.GetInnerText;
    PreventDefaultNavigation = DOM.PreventDefaultNavigation;
    SetEvent = DOM.SetEvent;
    if (typeof Encoding == 'undefined') {
        Encoding = {
            "__namespace": true
        };
        Encoding_module_def();
    }
    encodeScriptQuote = Encoding.EncodeScriptQuote;
    STSHtmlEncode = Encoding.HtmlEncode;
    STSHtmlEncodeEx = Encoding.HtmlEncodeEx;
    STSHtmlDecode = Encoding.HtmlDecode;
    StAttrQuote = Encoding.AttrQuote;
    STSScriptEncode = Encoding.ScriptEncode;
    STSScriptEncodeWithQuote = Encoding.ScriptEncodeWithQuote;
    CanonicalizeUrlEncodingCase = Encoding.CanonicalizeUrlEncodingCase;
    EncodePath = Encoding.EncodePath;
    if (typeof ExpFlighting == 'undefined') {
        ExpFlighting = {
            "__namespace": true
        };
        ExpFlighting_module_def();
    }
    if (typeof IE8Support == 'undefined') {
        IE8Support = {
            "__namespace": true
        };
        IE8Support_module_def();
    }
    if (typeof RequestUtil == 'undefined') {
        RequestUtil = {
            "__namespace": true
        };
        RequestUtil_module_def();
    }
    if (typeof StringUtil == 'undefined') {
        StringUtil = {
            "__namespace": true
        };
        StringUtil_module_def();
    }
    StBuildParam = StringUtil.BuildParam;
    if (typeof TypeUtil == 'undefined') {
        TypeUtil = {
            "__namespace": true
        };
        TypeUtil_module_def();
    }
    IsArray = TypeUtil.IsArray;
    IsNullOrUndefined = TypeUtil.IsNullOrUndefined;
    ObjectUtil = {
        "__namespace": true
    };
    ObjectUtil_module_def();
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
        var isStringEqualInsensitive = function(a, b) {
            if (a != null && b != null) {
                return a.toLowerCase() === b.toLowerCase();
            }
            else {
                return a === b;
            }
        };
        var isStringEqual = function(a, b) {
            return a === b;
        };

        this.equals = function(uri) {
            return m_scheme.toLowerCase() === (uri.getScheme()).toLowerCase() && m_user === uri.getUser() && m_host.toLowerCase() === (uri.getHost()).toLowerCase() && m_port === uri.getPort() && (m_pathCaseInsensitive ? isStringEqualInsensitive : isStringEqual)(that.getPath(true), uri.getPath(true)) && m_parameters === uri.getParameters() && (m_queryCaseInsensitive ? isStringEqualInsensitive : isStringEqual)(that.getQuery(), uri.getQuery()) && m_fragment === uri.getFragment();
        };
        this.equivalent = function(uri) {
            return isStringEqualInsensitive(m_scheme, uri.getScheme()) && isStringEqualInsensitive(m_user, uri.getUser()) && isStringEqualInsensitive(m_host, uri.getHost()) && isStringEqualInsensitive(m_port, uri.getPort()) && isStringEqualInsensitive(that.getPath(true), uri.getPath(true)) && isStringEqualInsensitive(m_parameters, uri.getParameters()) && ObjectUtil.deepCompare(that.getQueryAsObject(), uri.getQueryAsObject(), DecodeCompare) && isStringEqualInsensitive(m_fragment, uri.getFragment());
            function DecodeCompare(l, r) {
                var ll = URI.decodeURIComponent(l);
                var rr = URI.decodeURIComponent(r);

                return ll === rr;
            }
        };
        this.getString = function(outputOptions) {
            return getStringInternal(true, outputOptions);
        };
        this.getDecodedStringForDisplay = function() {
            return getStringInternal(false);
        };
        this.getStringWithoutQueryAndFragment = function() {
            return getStringWithoutQueryAndFragmentInternal(true);
        };
        var getStringInternal = function(encoded, outputOptions) {
            var ret = getStringWithoutQueryAndFragmentInternal(encoded, outputOptions);
            var query = serializeQuery(m_query, encoded);

            if (query !== "") {
                ret += URI_QUESTIONMARK + query;
            }
            if (m_fragment !== "") {
                ret += URI_POUND + (encoded ? encodeURIComponentIfNecessary(m_fragment) : m_fragment);
            }
            return ret;
        };
        var getStringWithoutQueryAndFragmentInternal = function(encoded, outputOptions) {
            var ret = "";

            if (m_scheme !== "") {
                ret += (encoded ? encodeURIComponentIfNecessary(m_scheme) : m_scheme) + URI_COLON;
            }
            var authority = getAuthority(encoded, outputOptions);

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
        var getAuthority = function(encoded, outputOptions) {
            var doNotPercentEncodeHost = false;

            if (typeof outputOptions !== "undefined" && typeof outputOptions.doNotPercentEncodeHost === 'boolean') {
                doNotPercentEncodeHost = outputOptions.doNotPercentEncodeHost;
            }
            var authority = "";
            var user;
            var host;
            var port;

            if (encoded) {
                user = getUserEncodedIfNecessary();
                if (doNotPercentEncodeHost) {
                    host = m_host;
                }
                else {
                    host = encodeURIComponentIfNecessary(m_host);
                }
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
            return m_disableEncodingDecodingForLegacyCode ? component : URI.decodeURIComponent(component);
        };

        parseURI();
    };
    (function() {
        var g_rgdwchMinEncoded = [0x00000000, 0x00000080, 0x00000800, 0x00010000, 0x00200000, 0x04000000, 0x80000000];

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
                        dwch -= 0x10000;
                        strResult += String.fromCharCode(0xD800 | dwch >>> 10);
                        strResult += String.fromCharCode(0xDC00 | dwch & 0x003FF);
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
        function URI_unescapeProperly(str) {
            var strResult = null;

            try {
                strResult = decodeURIComponent(str);
            }
            catch (e) {
                strResult = unescapeProperlyInternal(str);
            }
            return strResult;
        }
        function URI_GetAbsoluteUrl(url) {
            var dummyAnchor = document.createElement('a');

            dummyAnchor.href = url;
            var retVal = dummyAnchor.href;

            dummyAnchor = null;
            return retVal;
        }
        ;
        function URI_RemoveQueryParameterFromUrl(stURL, stParameterName) {
            var startArg = stURL.indexOf("?");
            var startFragment = stURL.indexOf("#");

            if (-1 == startArg)
                return stURL;
            if (-1 == startFragment)
                startFragment = stURL.length;
            if (startFragment <= startArg)
                return stURL;
            var stUrlArgs = stURL.substr(startArg, startFragment - startArg);
            var re = new RegExp("[&?]" + stParameterName + "=[^&]*", "");

            stUrlArgs = stUrlArgs.replace(re, "");
            if (stUrlArgs.length > 0 && "&" == stUrlArgs[0]) {
                stUrlArgs = "?" + stUrlArgs.substr(1);
            }
            return stURL.substr(0, startArg) + stUrlArgs + stURL.substr(startFragment);
        }
        function URI_RemoveUrlKeyValue(keyName, url) {
            var re = new RegExp(keyName + "=[^&]*&");

            url = url.replace(re, "");
            re = new RegExp(keyName + "=[^&]*");
            url = url.replace(re, "");
            return url;
        }
        function URI_RemoveParametersFromUrl(url) {
            var paramsBeginPos = url.indexOf('?');

            if (paramsBeginPos == -1)
                return url;
            else
                return url.substr(0, paramsBeginPos);
        }
        function URI_StURLSetVar2(stURL, stVar, stValue) {
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
        function URI_CompleteDecode(strIn) {
            if (typeof strIn == 'undefined' || strIn == null)
                return strIn;
            var strOut = strIn;
            var dStr = URI_unescapeProperly(strOut);

            while (strOut != dStr) {
                strOut = dStr;
                dStr = URI_unescapeProperly(strOut);
            }
            return strOut;
        }
        function URI_RestructureFilterUrl(strDocUrl, filterNo) {
            var j = filterNo + 1;
            var filterArray = strDocUrl.match(new RegExp("FilterField" + String(j) + "=[^&]*"));
            var isMultipleFilter = false;

            if (!Boolean(filterArray)) {
                filterArray = strDocUrl.match(new RegExp("FilterFields" + String(j) + "=[^&]*"));
                isMultipleFilter = filterArray != null;
            }
            for (var i = filterNo; filterArray != null; i++) {
                var strNew = isMultipleFilter ? "FilterFields" + String(i) : "FilterField" + String(i);
                var strOld = isMultipleFilter ? "FilterFields" + String(j) : "FilterField" + String(j);

                strDocUrl = strDocUrl.replace(strOld, strNew);
                strNew = isMultipleFilter ? "FilterValues" + String(i) : "FilterValue" + String(i);
                strOld = isMultipleFilter ? "FilterValues" + String(j) : "FilterValue" + String(j);
                strDocUrl = strDocUrl.replace(strOld, strNew);
                strNew = "FilterOp" + String(i);
                strOld = "FilterOp" + String(j);
                strDocUrl = strDocUrl.replace(strOld, strNew);
                strNew = "FilterLookupId" + String(i);
                strOld = "FilterLookupId" + String(j);
                strDocUrl = strDocUrl.replace(strOld, strNew);
                strNew = "FilterData" + String(i);
                strOld = "FilterData" + String(j);
                strDocUrl = strDocUrl.replace(strOld, strNew);
                j++;
                filterArray = strDocUrl.match(new RegExp("FilterField" + String(j) + "=[^&]*"));
                if (!Boolean(filterArray))
                    filterArray = strDocUrl.match(new RegExp("FilterFields" + String(j) + "=[^&]*"));
            }
            return strDocUrl;
        }
        function URI_ParseMultiColumnValue(fieldValue, delimiter, bIncludeEmpty) {
            var strSubColumn;
            var subColumnValues = [];

            if (delimiter == null)
                delimiter = ';#';
            var lead = delimiter.charCodeAt(0);
            var trail = delimiter.charCodeAt(1);

            if (fieldValue == null || fieldValue.length == 0)
                return subColumnValues;
            var strLead = delimiter.charAt(0);
            var strLeadLead = strLead + strLead;
            var escaped = new RegExp(strLeadLead, "g");
            var unescaped = delimiter.charAt(0);
            var startLocal = 0;

            if (fieldValue.substr(0, 2) == delimiter) {
                if (Boolean(bIncludeEmpty))
                    subColumnValues.push('');
                startLocal = 2;
            }
            var end = startLocal;
            var bContainEscapedCharacters = false;
            var totalLength = fieldValue.length;

            while (end < totalLength) {
                var index = fieldValue.indexOf(strLead, end);

                if (index >= 0) {
                    end = index;
                    end++;
                    if (fieldValue.charCodeAt(end) == trail) {
                        if (end - 1 > startLocal) {
                            strSubColumn = fieldValue.substr(startLocal, end - startLocal - 1);
                            if (bContainEscapedCharacters)
                                strSubColumn = strSubColumn.replace(escaped, unescaped);
                            subColumnValues.push(strSubColumn);
                            bContainEscapedCharacters = false;
                        }
                        else {
                            subColumnValues.push('');
                        }
                        end++;
                        startLocal = end;
                        continue;
                    }
                    else if (fieldValue.charCodeAt(end) == lead) {
                        end++;
                        bContainEscapedCharacters = true;
                        continue;
                    }
                    else {
                        throw "ArgumentException";
                    }
                }
                else {
                    end = totalLength;
                }
            }
            if (end > startLocal) {
                strSubColumn = fieldValue.substr(startLocal, end - startLocal);
                if (bContainEscapedCharacters)
                    strSubColumn = strSubColumn.replace(escaped, unescaped);
                subColumnValues.push(strSubColumn);
            }
            else if (Boolean(bIncludeEmpty))
                subColumnValues.push('');
            return subColumnValues;
        }
        function URI_ConvertMultiColumnValueToString(subColumnValues, delimiter, bAddLeadingTailingDelimiter) {
            if (delimiter == null)
                delimiter = ";#";
            if (bAddLeadingTailingDelimiter == null)
                bAddLeadingTailingDelimiter = true;
            var strLead = delimiter.charAt(0);
            var strLeadLead = strLead + strLead;
            var escaped = new RegExp(delimiter.charAt(0), "g");
            var bHasValue = false;
            var sb = '';

            for (var i = 0; i < subColumnValues.length; i++) {
                var strSubColumn = subColumnValues[i];

                if (strSubColumn != null && strSubColumn.length > 0)
                    strSubColumn = strSubColumn.replace(escaped, strLeadLead);
                if (strSubColumn != null && strSubColumn.length > 0)
                    bHasValue = true;
                if (bAddLeadingTailingDelimiter || i != 0)
                    sb += delimiter;
                sb += strSubColumn;
            }
            if (bHasValue) {
                if (bAddLeadingTailingDelimiter) {
                    sb += delimiter;
                }
                return sb;
            }
            else
                return '';
        }
        URI.decodeURIComponent = URI_unescapeProperly;
        URI.getAbsolute = URI_GetAbsoluteUrl;
        URI.removeKeyValue = URI_RemoveUrlKeyValue;
        URI.removeParameters = URI_RemoveParametersFromUrl;
        URI.removeQueryParameter = URI_RemoveQueryParameterFromUrl;
        URI.stURLSetVar2 = URI_StURLSetVar2;
        URI.completeDecode = URI_CompleteDecode;
        URI.restructureFilterUrl = URI_RestructureFilterUrl;
        URI.parseMultiColumnValue = URI_ParseMultiColumnValue;
        URI.convertMultiColumnValueToString = URI_ConvertMultiColumnValueToString;
    })();
    unescapeProperly = URI.decodeURIComponent;
    GetAbsoluteUrl = URI.getAbsolute;
    RemoveParametersFromUrl = URI.removeParameters;
    RemoveQueryParameterFromUrl = URI.removeQueryParameter;
    RemoveUrlKeyValue = URI.removeKeyValue;
    StURLSetVar2 = URI.stURLSetVar2;
    ParseMultiColumnValue = URI.parseMultiColumnValue;
    ConvertMultiColumnValueToString = URI.convertMultiColumnValueToString;
    CompleteDecode = URI.completeDecode;
    if (typeof URI_Encoding == 'undefined') {
        URI_Encoding = {
            "__namespace": true
        };
        URI_Encoding_module_def();
    }
    escapeUrlForCallback = URI_Encoding.escapeUrlForCallback;
    escapeProperly = URI_Encoding.encodeURIComponent;
    escapeProperlyCore = URI_Encoding.encodeURIComponent;
    escapeProperlyCoreCore = URI_Encoding.encodeURIComponent;
    PageContextInfo_InitializePrototype();
    if (typeof Nav == 'undefined') {
        Nav = {
            "__namespace": true
        };
        Nav_module_def();
    }
    ajaxNavigate = Nav.ajaxNavigate;
    STSNavigate = Nav.navigate;
    GetUrlKeyValue = Nav.getUrlKeyValue;
    STSPageUrlValidation = function(url) {
        return Nav.pageUrlValidation(url, Strings.STS.L_InvalidPageUrl_Text);
    };
    PageUrlValidation = function(url) {
        return Nav.pageUrlValidation(url, Strings.STS.L_InvalidPageUrl_Text);
    };
    AjaxNavigate$isMDSURL = Nav.isMDSUrl;
    isPortalTemplatePage = Nav.isPortalTemplatePage;
    GoToHistoryLink = Nav.goToHistoryLink;
    GetGotoLinkUrl = Nav.getGoToLinkUrl;
    GoToLink = Nav.goToLink;
    GoToLinkOrDialogNewWindow = Nav.goToLinkOrDialogNewWindow;
    GoToDiscussion = Nav.goToDiscussion;
    GetSource = Nav.getSource;
    RemoveMDSQueryParametersFromUrl = Nav.removeMDSQueryParametersFromUrl;
    AjaxNavigate$_GetWindowLocationNoHash = Nav.getWindowLocationNoHash;
    AjaxNavigate$WantsNewTab = Nav.wantsNewTab;
    AjaxNavigate$parseHash = Nav.parseHash;
    AjaxNavigate$_UrlFromHashBag = Nav.urlFromHashBag;
    AjaxNavigate$_getAjaxLocationWindow = Nav.getAjaxLocationWindow;
    IsSTSPageUrlValid = Nav.isPageUrlValid;
    AjaxNavigate$OnClickHook = Nav.onClickHook;
    AjaxNavigate$convertRegularURLtoMDSURL = Nav.convertRegularURLtoMDSURL;
    AjaxNavigate$convertMDSURLtoRegularURL = Nav.ajaxNavigate.convertMDSURLtoRegularURL;
    if (typeof ProfileCache == 'undefined') {
        ProfileCache = {
            "__namespace": true
        };
        ProfileCache_module_def();
    }
    if (typeof ListModule == 'undefined') {
        ListModule = {
            "__namespace": true
        };
        ListModule_module_def();
    }
    BasePermissions = ListModule.BasePermissions;
    ContextInfo = ListModule.Context;
    CTXTYPE_EDITMENU = ListModule.Context.Type.EditMenu;
    CTXTYPE_VIEWSELECTOR = ListModule.Context.Type.ViewSelector;
    if (typeof List_Util == 'undefined') {
        List_Util = {
            "__namespace": true
        };
        List_Util_module_def();
    }
    ctxInitItemState = ListModule.Util.ctxInitItemState;
    ClearSelectedItemsDict = ListModule.Util.clearSelectedItemsDict;
    CreateItemPropertiesTitleUrl = ListModule.Util.createItemPropertiesTitleUrl;
    GetAttributeFromItemTable = ListModule.Util.getAttributeFromItemTable;
    GetSelectedItemsDict = ListModule.Util.getSelectedItemsDict;
    RemoveOnlyPagingArgs = ListModule.Util.removeOnlyPagingArgs;
    RemovePagingArgs = ListModule.Util.removePagingArgs;
    ShowAttachmentRows = ListModule.Util.showAttachmentRows;
    CanUploadFile = ListModule.Util.canUploadFile;
    addWPQtoId = ListModule.Util.addWPQtoId;
    isDefinedAndNotNullOrEmpty = ListModule.Util.isDefinedAndNotNullOrEmpty;
    HasEditPermission = ListModule.Util.hasEditPermission;
    getHostUrl = ListModule.Util.getHostUrl;
    ReconcileQstringFilters = ListModule.Util.reconcileQstringFilters;
    QstringStruct = ListModule.Util.Qstring;
    if (typeof SuiteNavCommon == 'undefined') {
        SuiteNavCommon = {
            "__namespace": true
        };
        SuiteNavCommon_module_def();
    }
    if (typeof OnePageUtil == 'undefined') {
        OnePageUtil = {
            "__namespace": true
        };
        OnePageUtil_module_def();
    }
    if (Flighting == null) {
        Flighting = {};
        Flighting.ExpFeatures = [];
    }
    Flighting.VariantConfiguration = {};
    Flighting.VariantConfiguration.IsExpFeatureClientEnabled = function(id) {
        var elem = Math.floor(id / 32);
        var mask;

        if (!(window["OffSwitch"] == null || OffSwitch.IsActive("AF5A380E-20E0-4096-BA87-2C4CDFB4DBDF"))) {
            var expFeatures = Flighting.ExpFeatures;
            var pageContextInfo = window['_spPageContextInfo'];

            if (expFeatures.length === 0 && pageContextInfo != null && pageContextInfo.ExpFeatures != null) {
                expFeatures = _spPageContextInfo.ExpFeatures;
            }
            if (elem < 0 || elem >= expFeatures.length) {
                return false;
            }
            mask = 1 << id % 32;
            return (expFeatures[elem] & mask) != 0;
        }
        else {
            if (elem < 0 || elem >= Flighting.ExpFeatures.length) {
                return false;
            }
            mask = 1 << id % 32;
            return (Flighting.ExpFeatures[elem] & mask) != 0;
        }
    };
    String.prototype.trim = function() {
        return (this.replace(/^\s\s*/, '')).replace(/\s\s*$/, '');
    };
    currentCtx = null;
    itemTable = null;
    if ('undefined' == typeof g_supportFiles)
        g_supportFiles = new Array(0);
    if (!(window["OffSwitch"] == null || OffSwitch.IsActive("79D8320F-D4AA-45D1-A83F-9B7AF522EE5C"))) {
        OnePageUtil.overrideEventListenerFunctions(window);
        OnePageUtil.overrideEventListenerFunctions(document);
        var timerManager = OnePageUtil.GetTimerManager();

        timerManager.overrideTimer();
    }
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
    if (typeof Sys != "undefined" && Boolean(Sys) && typeof Sys.Application != "undefined" && Boolean(Sys.Application) && typeof Sys.Application.notifyScriptLoaded == "function") {
        Sys.Application.notifyScriptLoaded();
    }
    if (typeof NotifyScriptLoadedAndExecuteWaitingJobs == "function") {
        NotifyScriptLoadedAndExecuteWaitingJobs("owsbrows.js");
    }
    if (typeof spWriteProfilerMark == 'function')
        spWriteProfilerMark("perfMarkEnd_" + "init.js");
    g_cde = {};
    ;
    ;
    LegalUrlChars = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, true, false, false, true, false, true, true, true, true, false, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, false, true, false, true, false, false, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, false, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, false, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
    poundIndex = 35;
    percentIndex = 37;
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
    browserUpdatedWithServerRedirectedUrl = false;
    g_objProjectTaskLaunch = null;
    g_ssImporterObj = null;
    g_fSSImporter = false;
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
    if ("undefined" == typeof _v_dictSod) {
        _v_dictSod = [];
    }
    if ("undefined" == typeof _v_dictCss) {
        _v_dictCss = [];
    }
    Sods = {
        missing: 1,
        loading: 2,
        pending: 3,
        loaded: 4,
        error: 5
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
    SodCallbackInfo.prototype = {
        success: undefined,
        error: undefined,
        expectedType: undefined
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
    PageMinimized();
    OverrideDefaultMethod("confirm", "LogConfirm", 1);
    OverrideDefaultMethod("alert", "LogAlert", 1);
    SupplementDefaultMethod("onerror", "LogOnError", 5);
    IMNControlObj = null;
    bIMNControlInited = false;
    IMNDictionaryObj = null;
    IMNDictionaryPresenceTextObj = null;
    bIMNSorted = false;
    bIMNOnloadAttached = false;
    IMNOrigScrollFunc = null;
    bIMNInScrollFunc = false;
    IMNSortableObj = null;
    IMNHeaderObj = null;
    IMNNameDictionaryObj = null;
    IMNNameDictionaryPresenceTextObj = null;
    IMNShowOfflineObj = null;
    OwaLang = "1033";
    OwaRoot = "owa/";
    OwaSharedHoverCardJsKey = "sharedhovercard.js";
    OwaSharedHoverCardStringsJsKey = "sharedhovercard.strings.js";
    SharedHoverCardHideTime = 800;
    SharedHoverCardDelayTimer = null;
    SharedHoverCardDelayTime = 250;
    SharedHoverCardDelayed = null;
    SharedHoverCardPending = null;
    currentShowHoverCardInstance = 0;
    nextShowHoverCardInstance = 0;
    currentShowHoverCardInstanceBootstrappedState = false;
    IMNImageInfo_InitializePrototype();
    imnCount = 0;
    imnElemsCount = 0;
    imnMarkerBatchSize = 4;
    imnMarkerBatchDelay = 40;
    sharedHoverCardsCount = 0;
    sharedHoverCardElementsCount = 0;
    sharedHoverCardMarkerBatchSize = 4;
    sharedHoverCardMarkerBatchDelay = 40;
    IsIFrameSharedHoverCard = false;
    SharedHoverCardIFrame = null;
    SharedHoverCardIFrameCode = "<!DOCTYPE html><html><head></head>\
    <body style='background-color:#ffffff; left:-9px; top:-9px'>\
    <script type='text/javascript'>var g_Workspace = 's4-workspace'; var files = new Array();\
    function FindFiles() {\
	    var scripts = window.parent.document.getElementsByTagName('script');\
	    for (var i = 0; i < scripts.length; i++) {\
		    var src = scripts[i].src; if (src.indexOf('/init.js') != -1 || src.indexOf('/init.debug.js') != -1) files[0] = src;\
		    else if (src.indexOf('/core.js') != -1 || src.indexOf('/core.debug.js') != -1) files[1] = src;\
	    }\
    }\
    function LoadFiles(index) {\
	    if (index >= files.length) {\
		    InitIFrameSharedHoverCard();\
		    return;\
	    }\
	    var scriptTag = document.createElement('script'); scriptTag.src = files[index];\
	    if (scriptTag.readyState) {\
		    scriptTag.onreadystatechange = function () {\
			    if (scriptTag.readyState == 'loaded' || scriptTag.readyState == 'complete') { LoadFiles(index + 1); }\
		    };\
	    } else {\
		    scriptTag.onload = function () { LoadFiles(index + 1); };\
	    }\
	    document.getElementsByTagName('head')[0].appendChild(scriptTag);\
    }\
    if (window.parent != null) { FindFiles(); LoadFiles(0); }\
    </script></body></html>\
";
    ;
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
    g_fAreAllSodsLoaded = false;
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
    ColorMap = {
        red: 4,
        yellow: 3,
        green: 2,
        blue: 1
    };
    g_uniqueIndex = 0;
    g_dlgWndTop = null;
    g_spDlgLauncher = true;
    g_ModalDialogCount = 0;
    g_overlayPopup = undefined;
    g_childDialog = undefined;
    CommonGlobalDialogReturnValue_InitializePrototype();
    commonModalDialogReturnValue = new CommonGlobalDialogReturnValue();
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
    SPListView = true;
    ;
    ;
    RenderECBinline = function(renderCtx, listItem, field) {
        var ret = [];

        ret.push("<span class=\"js-callout-ecbMenu\" CTXName=\"ctx");
        ret.push(renderCtx.ctxId);
        ret.push("\" id=\"");
        ret.push(listItem.ID);
        ret.push("\" Field=\"");
        ret.push(field.Name);
        ret.push("\" Perm=\"");
        ret.push(listItem.PermMask);
        ret.push("\" EventType=\"");
        ret.push(listItem.EventType);
        ret.push("\">");
        ret.push("<a class=\"js-callout-action ms-calloutLinkEnabled ms-calloutLink js-ellipsis25-a\" onclick=\"calloutCreateAjaxMenu(event); return false;\" href=\"#\" title=\"" + Strings.STS.L_SPCalloutAction_ellipsis + "\">");
        ret.push("<img class=\"js-ellipsis25-icon\" src=\"" + GetThemedImageUrl("spcommon.png") + "\" alt=\"" + Encoding.HtmlEncode(Strings.STS.L_SPCalloutAction_ellipsis) + "\" />");
        ret.push("</a>");
        ret.push("</span>");
        return ret.join('');
    };
    CALLOUT_STR_ELLIPSIS = '...';
    CALLOUT_ELLIPSIS_LENGTH = CALLOUT_STR_ELLIPSIS.length;
    CALLOUT_CHARS_TO_TRUNCATE_PER_ITERATION = 2 + CALLOUT_ELLIPSIS_LENGTH;
    MountPointSiteIdFieldName = "_mpSPSiteId";
    MountPointWebIdFieldName = "_mpSPWebId";
    MountPointItemUniqueIdFieldName = "_mpItemUniqueId";
    MountPointInfo = (function() {
        function createMountPointInfo(mpProperties) {
            var rootFolder = mpProperties.rootFolder;
            var siteId = mpProperties.siteId;
            var webId = mpProperties.webId;
            var folderId = mpProperties.folderId;
            var mpPrefix = mpProperties.mpPrefix;
            var isInitProperly = Boolean(mpPrefix) && Boolean(siteId) && Boolean(webId) && Boolean(folderId);
            var mpLevel = Boolean(mpProperties.mpLevel) ? mpProperties.mpLevel : "1,0";
            var majorLevel = -1;
            var minorLevel = -1;
            var levels = [];

            if (Boolean(mpLevel) && isInitProperly) {
                levels = mpLevel.split(',');
                if (levels.length == 2) {
                    majorLevel = tryParseLevel(levels[0], 1);
                    minorLevel = tryParseLevel(levels[1], 0);
                }
            }
            function changeMpLevel(majorLevelChange, minorLevelChange) {
                majorLevel += majorLevelChange;
                if (majorLevelChange == 0)
                    minorLevel += minorLevelChange;
                else
                    minorLevel = 0;
                mpLevel = String(majorLevel) + "," + String(minorLevel);
            }
            function tryParseLevel(level, minLevel) {
                var retLevel = minLevel;

                if (level != null && level.length > 0 && !isNaN(retLevel)) {
                    retLevel = parseInt(level);
                    if (retLevel < minLevel)
                        return minLevel;
                }
                return retLevel;
            }
            function getMountPointProperties(bRemoteIdsOnly) {
                if (!isInitProperly)
                    return {};
                var props = {
                    RemoteSiteId: siteId,
                    RemoteWebId: webId,
                    RemoteFolderId: folderId
                };

                if (!Boolean(bRemoteIdsOnly)) {
                    props.MPLevel = mpLevel;
                    props.MPPrefix = mpPrefix;
                }
                return props;
            }
            function getMountPointUrl(joinToken, bRemoteIdsOnly) {
                var ret = [];

                if (isInitProperly) {
                    var props = getMountPointProperties(bRemoteIdsOnly);

                    for (var propKey in props) {
                        ret.push(propKey + "=" + props[propKey]);
                    }
                }
                if (!Boolean(joinToken))
                    joinToken = '&';
                return ret.join(joinToken);
            }
            return {
                "isInitProperly": isInitProperly,
                "mpPrefix": isInitProperly ? mpPrefix : "",
                "rootFolder": isInitProperly ? rootFolder : "",
                "getMajorLevel": function getMajorLevel() {
                    return majorLevel;
                },
                "getMinorLevel": function getMinorLevel() {
                    return minorLevel;
                },
                "incrementMajorLevel": function incrementMajorLevel() {
                    changeMpLevel(1, 0);
                },
                "incrementMinorLevel": function incrementMinorLevel() {
                    changeMpLevel(0, 1);
                },
                "decrementMinorLevel": function decrementMinorLevel() {
                    changeMpLevel(0, -1);
                },
                "getMountPointProperties": getMountPointProperties,
                "getMountPointUrl": getMountPointUrl
            };
        }
        ;
        function createByListItem(listItem, renderCtx) {
            var mpProperties = {};

            if (Boolean(IsMountPoint(listItem)) && Boolean(renderCtx)) {
                var curUri = null;

                if (Flighting.VariantConfiguration.IsExpFeatureClientEnabled(168)) {
                    curUri = new URI('http://foo?' + getHashAsQueryString(renderCtx));
                }
                if (!Boolean(curUri)) {
                    curUri = new URI(Nav.ajaxNavigate.get_href());
                }
                if (Boolean(curUri)) {
                    mpProperties.mpPrefix = curUri.getQueryParameter("MPPrefix");
                    if (!Boolean(mpProperties.mpPrefix))
                        mpProperties.mpPrefix = listItem.FileRef.replace(/.url$/, '');
                    mpProperties.siteId = listItem[MountPointSiteIdFieldName];
                    mpProperties.webId = listItem[MountPointWebIdFieldName];
                    mpProperties.folderId = listItem[MountPointItemUniqueIdFieldName];
                }
            }
            return createMountPointInfo(mpProperties);
        }
        function createByContext(renderCtx) {
            return createByQueryString(getHashAsQueryString(renderCtx));
        }
        function createByQueryString(queryString) {
            var mpProperties = {};

            if (Boolean(queryString)) {
                var uri = new URI("http://foo?" + queryString);

                mpProperties.rootFolder = uri.getQueryParameter("RootFolder");
                if (!Boolean(mpProperties.rootFolder))
                    mpProperties.rootFolder = "";
                mpProperties.siteId = uri.getQueryParameter("RemoteSiteId");
                mpProperties.webId = uri.getQueryParameter("RemoteWebId");
                mpProperties.folderId = uri.getQueryParameter("RemoteFolderId");
                mpProperties.mpPrefix = uri.getQueryParameter("MPPrefix");
                mpProperties.mpLevel = uri.getQueryParameter("MPLevel");
            }
            return createMountPointInfo(mpProperties);
        }
        function getHashAsQueryString(renderCtx) {
            var retStr = "";
            var hash = "";

            if (renderCtx != null && renderCtx.clvp != null && typeof renderCtx.clvp.WebPartId == "function") {
                hash = GetInplviewHash(renderCtx.clvp.WebPartId());
                if (Boolean(hash))
                    retStr = InplViewUtil.DecodeHashAsQueryString(hash);
            }
            return retStr;
        }
        return {
            "createByListItem": createByListItem,
            "createByContext": createByContext,
            "createByQueryString": createByQueryString
        };
    })();
    ShortcutLinkTargetUrlFieldName = "_ShortcutUrl";
    ShortcutLinkSiteIdFieldName = "_ShortcutSiteId";
    ShortcutLinkWebIdFieldName = "_ShortcutWebId";
    ShortcutLinkUniqueIdFieldName = "_ShortcutUniqueId";
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
    AriaLogger = {};
    (function() {
        AriaLogger.TenantToken = {
            stsPPE: "9eeb6da3b66f4f20aec8c84bdaccb30d-429a3df1-6962-4e5e-bfc8-31dfd52c4e12-7768",
            stsProd: "66034bde775d42a19f1a2d3d2e647e42-82d9432e-bacf-4067-bb5d-fe87f33fa915-7384"
        };
        var token = null;
        var logger = null;

        AriaLogger.Logger = function() {
            var context = window["_spPageContextInfo"];
            var flushed = false;

            if (!Boolean(context))
                return;
            switch (context.env) {
            case "edog":
            case "prodbubble":
                token = AriaLogger.TenantToken.stsPPE;
                break;
            case "prod":
            case "dprod":
                token = AriaLogger.TenantToken.stsProd;
                break;
            default:
                token = AriaLogger.TenantToken.stsPPE;
                break;
            }
            if (!Boolean(logger)) {
                logger = AWTLogManager.initialize(token);
                var semanticContext = logger.getSemanticContext();

                semanticContext.setUserId(context.systemUserKey);
                var logContext = {
                    AccountType: getAccountType(context),
                    Environment: context.env,
                    IsAuthenticated: isUserAuthenticated(context),
                    BrowserUserAgent: navigator.userAgent,
                    BrowserIsMobile: isMobile(),
                    SiteSubscriptionId: context.siteSubscriptionId
                };

                if (Boolean(context.farmLabel)) {
                    logContext.FarmLabel = context.farmLabel;
                }
                for (var key4 in logContext) {
                    logger.setContext(key4, logContext[key4]);
                }
            }
            var OnBeforeUnload = function(e) {
                if (Boolean(logger) && !Boolean(logger.flushed)) {
                    AWTLogManager.flush(function() {
                    });
                    logger.flushed = true;
                }
            };

            if (typeof window.addEventListener != "undefined") {
                window.addEventListener("beforeunload", OnBeforeUnload, true);
            }
            this.safeLogEvent = function(ev) {
                try {
                    this.logEvent(ev);
                }
                catch (exception) {
                    if (Boolean(exception)) {
                        ;
                    }
                }
            };
            this.logEvent = function(ev) {
                if (!Boolean(logger) || !ariaEnabledEvent(ev))
                    return;
                var eName = ev.eventName.toString();
                var eType = "Start";
                var eResultType;
                var eResultCode;
                var eComponent;
                var nName;

                if (ev.eventName == "RUMOne") {
                    eName = "RUMOneDataUpload";
                    eType = "single";
                    nName = ev.data.ScenarioId.toString();
                }
                else if (ev.eventName == "UserEngagement") {
                    eName = "qos";
                    if (Boolean(ev.data) && Boolean(ev.data.EngagementName)) {
                        eType = ev.data.EngagementName.endsWith(".Start") ? "Start" : ev.data.EngagementName.endsWith(".Success") ? "End" : ev.data.EngagementName.endsWith(".Failure") ? "Failure" : "NA";
                        eResultType = eType == "End" ? "Success" : eType == "Failure" ? "Failure" : "NA";
                        eComponent = ev.data.EngagementName.substring(0, ev.data.EngagementName.indexOf('.'));
                        nName = ev.data.EngagementName.substring(0, ev.data.EngagementName.lastIndexOf('.'));
                        eResultCode = Boolean(ev.data.Properties) && Boolean(ev.data.Properties.ErrorCode) ? ev.data.Properties.ErrorCode.toString() : "NA";
                    }
                }
                var eventProperties = new AWTEventProperties();
                var values = {
                    "CorrelationVector": ev.correlationVector,
                    "Component": eComponent,
                    "Name": nName,
                    "WebLog_FullName": eName,
                    "WebLog_EventType": eType
                };

                values["WebLog_Type_" + eName.toString()] = 1;
                values["Workload"] = getWorkLoad(ev);
                if (eType == "End") {
                    values["ResultType"] = eResultType;
                    values["ResultCode"] = eResultCode;
                }
                var prefixName;

                if (ev.eventName == "RUMOne") {
                    prefixName = eName + "_dictionary_";
                }
                else if (eName == "qos") {
                    prefixName = "Qos_extraData_";
                }
                var dictProperties = ev.data;

                for (var key2 in dictProperties) {
                    var v = dictProperties[key2];

                    if (!Boolean(v))
                        continue;
                    values[prefixName + key2] = dictProperties[key2];
                }
                eventProperties.setName("ev_" + eName.toString());
                this.setProperties(eventProperties, values);
                logger.logEvent(eventProperties);
            };
            this.setProperties = function(properties, values) {
                try {
                    for (var key3 in values) {
                        properties.setProperty(key3, values[key3]);
                    }
                }
                catch (exception) {
                    var errorCode = void 0;

                    if (exception != null) {
                        errorCode = exception.ErrorCode();
                        if (typeof console != "undefined" && Boolean(console) && typeof console.log == "function") {
                            console.log("Aria error: " + exception.toString() + errorCode.toString());
                        }
                    }
                    throw exception;
                }
            };
            this.isInitialized = function() {
                return Boolean(logger);
            };
            function ariaEnabledEvent(ev) {
                if (ev.eventName == "RUMOne" || ev.eventName == "UserEngagement") {
                    return true;
                }
                return false;
            }
            function Capitalize(str) {
                if (Boolean(str)) {
                    return str[0].toUpperCase() + str.substr(1);
                }
                return str;
            }
            function getWorkLoad(ev) {
                if (ev.eventName == "RUMOne" && Boolean(ev.data) && Boolean(ev.data.ScenarioId)) {
                    return ev.data.ScenarioId.substring(0, ev.data.ScenarioId.indexOf('-'));
                }
                if (ev.EventName == "UserEngagement" && Boolean(ev.data) && Boolean(ev.data.name)) {
                    return ev.data.EngagementName.substring(0, ev.data.EngagementName.indexOf('.'));
                }
                return "STS";
            }
            function isMobile() {
                var isIOS = BrowserDetection.userAgent.ipad || (navigator.userAgent.toLowerCase()).indexOf("iphone") > -1;
                var isAndroid = (navigator.userAgent.toLowerCase()).indexOf("android") > -1 && !isIOS;

                return !!(BrowserDetection.userAgent.windowsphone || isIOS || isAndroid);
            }
            function isUserAuthenticated(ctx1) {
                return Boolean(ctx1.userLoginName);
            }
            function getAccountType(ctx2) {
                return isUserAuthenticated(ctx2) ? "Business" : "BusinessAnonymouse";
            }
        };
        var ariaLogger = null;

        AriaLogger.GetLogger = function() {
            if (!Boolean(ariaLogger)) {
                ariaLogger = new AriaLogger.Logger();
            }
            return ariaLogger;
        };
    })();
    BaseLogger = {};
    (function() {
        BaseLogger.Constants = {
            STREAM_ID: 1234,
            JSON_VERSION: "V1",
            IDX_VERSION: 0,
            IDX_EVENTNAME: 1,
            IDX_PROPERTY_START: 2,
            MAX_DATA_SIZE: 64 * 1024,
            MAX_ROWS_IN_STREAM: 1000,
            SIZE_DWORD: 4,
            SIZE_DATAPOINT_ENTRY: 3 * 4,
            SIZE_STREAM_ENTRY: 3 * 4,
            MS_BTN_EPOCHS: 11644473600000,
            MAX_INT32: 0xFFFFFFFF,
            MAX_SQM_DATAID: 0x7FFFFFFF,
            DATAKEY_SESSION_NORMAL: 0,
            DATAKEY_SESSION_CONTINUATION: 1
        };
        BaseLogger.BSQMFlags = {
            FLAG_BSQM_ENABLED: 0x00000010,
            FLAG_QOS_ENABLED: 0x00000020
        };
        BaseLogger.DATAID = {
            DATAID_BSQM_MAXSTREAMROWSSTREAMID: 8048,
            DATAID_BSQM_MAXSTREAMROWS: 7993,
            DATAID_SESSION_TYPE: 60
        };
        BaseLogger.UploadCallBack = function(request) {
            if (Boolean(request)) {
                if (request.readyState === 4 && request.status !== 200 && Boolean(request.status)) { }
            }
        };
        BaseLogger.Logger = function(customUploadFunc) {
            var WSAStreamRow = function(values) {
                this.Tic = GetTicks32();
                var numValues = values.length;

                this.Vals = new Array(numValues);
                for (var i = 0; i < numValues; i++) {
                    this.Vals[i] = values[i];
                }
            };
            var WSADatapoint = function(id, value) {
                this.Id = id;
                this.Val = value;
                this.Tic = GetTicks32();
            };
            var WSAStream = function(id, width) {
                this.Id = id;
                this.Width = width;
                this.Rows = new Array(0);
            };
            var WSAData = function(fIsOptedIn, fIsQoSEnabled) {
                this.StartTime = GetTicks64();
                this.EndTime = null;
                this.CorrelationId = null;
                var flags = 0;

                if (fIsOptedIn)
                    flags = BaseLogger.BSQMFlags.FLAG_BSQM_ENABLED;
                if (fIsQoSEnabled)
                    flags |= BaseLogger.BSQMFlags.FLAG_QOS_ENABLED;
                this.Flags = flags;
                this.wsaDatapoints = new Array(0);
                this.wsaStreams = new Array(0);
            };
            var _uploadUrl = null;
            var _wsaData = null;
            var _numDatapoints = 0;
            var _numStreams = 0;
            var _numStreamBytes = 0;
            var _dictStreams = null;
            var _dictDatapoints = null;
            var _streamRowCount = 0;
            var _bDataAvailableForUpload = false;
            var _bContinuation = false;
            var _initialized = false;
            var _fEnabled = false;
            var _uploadFunc = null;

            this.SetCorrelationId = function(correlationId) {
                _initialize();
                if (Boolean(_wsaData)) {
                    _wsaData.CorrelationId = correlationId;
                }
            };
            this.WriteLog = function(eventName, dictProperties) {
                _initialize();
                if (!_fEnabled || !Boolean(eventName) || !Boolean(dictProperties)) {
                    return;
                }
                var values = new Array(BaseLogger.Constants.IDX_PROPERTY_START + 1);

                values[BaseLogger.Constants.IDX_VERSION] = BaseLogger.Constants.JSON_VERSION;
                values[BaseLogger.Constants.IDX_EVENTNAME] = eventName;
                var index = BaseLogger.Constants.IDX_PROPERTY_START;

                for (var key in dictProperties) {
                    values[index++] = key;
                    var propVal = dictProperties[key];

                    if (propVal != null && propVal instanceof Date) {
                        propVal = propVal.getTime();
                    }
                    values[index++] = propVal;
                }
                _addToStream(BaseLogger.Constants.STREAM_ID, values);
            };
            this.UploadData = function() {
                _initialize();
                _uploadData();
            };
            var _initialize = function() {
                if (_initialized) {
                    return;
                }
                _fEnabled = _wsaCEIPEnabled();
                if (!_fEnabled) {
                    return;
                }
                _wsaData = new WSAData(_fEnabled, false);
                _uploadUrl = "/_layouts/15/WsaUpload.ashx";
                _dictStreams = new Array(0);
                _dictDatapoints = new Array(0);
                _createStream(BaseLogger.Constants.STREAM_ID, 1);
                _uploadFunc = Boolean(customUploadFunc) ? customUploadFunc : _uploadWsaDataRequest;
                _initialized = true;
            };
            var _createStream = function(streamId, width) {
                if (!Boolean(_dictStreams[streamId])) {
                    var wsaStream = new WSAStream(streamId, width);
                    var idxStream = _numStreams;

                    _wsaData.wsaStreams[idxStream] = wsaStream;
                    _numStreams++;
                    _numStreamBytes += BaseLogger.Constants.SIZE_STREAM_ENTRY;
                    _dictStreams[streamId] = idxStream;
                }
            };
            var _addToStream = function(streamId, dictValues) {
                try {
                    var wsaStreamRow = new WSAStreamRow(dictValues);

                    if (_isMaxSizeReachedCheck()) {
                        return;
                    }
                    _bDataAvailableForUpload = true;
                    _setDatapoint(BaseLogger.DATAID.DATAID_BSQM_MAXSTREAMROWSSTREAMID, streamId);
                    var wsaStream = _wsaData.wsaStreams[_dictStreams[streamId]];

                    if (Boolean(wsaStream)) {
                        if (_streamRowCount < BaseLogger.Constants.MAX_ROWS_IN_STREAM) {
                            wsaStream.Rows[_streamRowCount++] = wsaStreamRow;
                            _numStreamBytes += _getTotalBytesForRow(wsaStreamRow);
                            _setDatapoint(BaseLogger.DATAID.DATAID_BSQM_MAXSTREAMROWS, _streamRowCount);
                        }
                        else {
                            throw "BaseLogger: MAX_ROWS_IN_STREAM exceeded for stream ID " + String(streamId);
                        }
                    }
                }
                catch (e) { }
            };
            var _getTotalBytesForRow = function(row) {
                var numTotalBytes = BaseLogger.Constants.SIZE_DWORD;

                for (var i = 0; i < row.Vals.length; i++) {
                    var value = String(row.Vals[i]);

                    numTotalBytes += value.length * 2;
                }
                numTotalBytes += (row.Vals.length - 1) * 6;
                return numTotalBytes;
            };
            var _setDatapoint = function(datapointId, datapointValue) {
                if (datapointId < 1 || datapointId > BaseLogger.Constants.MAX_SQM_DATAID) {
                    return;
                }
                if (datapointValue < 0 || datapointValue > BaseLogger.Constants.MAX_INT32) {
                    return;
                }
                var savedDatapoint = null;
                var idxDP = _dictDatapoints[datapointId];

                if (Boolean(idxDP)) {
                    savedDatapoint = _wsaData.wsaDatapoints[idxDP];
                }
                if (savedDatapoint == null) {
                    var datapoint = new WSADatapoint(datapointId, datapointValue);
                    var idxDatapoint = _numDatapoints;

                    _wsaData.wsaDatapoints[idxDatapoint] = datapoint;
                    _dictDatapoints[datapointId] = idxDatapoint;
                    _numDatapoints++;
                }
                else {
                    savedDatapoint.Val = datapointValue;
                }
            };
            var _uploadData = function() {
                if (!_fEnabled || _wsaData == null || !Boolean(_uploadUrl)) {
                    return;
                }
                try {
                    if (_bDataAvailableForUpload) {
                        if (Boolean(_bContinuation)) {
                            _setDatapoint(BaseLogger.DATAID.DATAID_SESSION_TYPE, BaseLogger.Constants.DATAKEY_SESSION_CONTINUATION);
                        }
                        else {
                            _setDatapoint(BaseLogger.DATAID.DATAID_SESSION_TYPE, BaseLogger.Constants.DATAKEY_SESSION_NORMAL);
                            _bContinuation = true;
                        }
                        _wsaData.EndTime = GetTicks64();
                        var jsonString = null;

                        try {
                            jsonString = JSON.stringify(_wsaData);
                        }
                        catch (e) { }
                        _initContinuationSession();
                        if (jsonString != null && jsonString.length > 0) {
                            _uploadFunc(jsonString);
                        }
                    }
                }
                catch (e1) { }
            };
            var _initContinuationSession = function() {
                _dictStreams = new Array(0);
                _dictDatapoints = new Array(0);
                _numDatapoints = 0;
                _numStreams = 0;
                _streamRowCount = 0;
                _numStreamBytes = 0;
                _numDatapoints = 0;
                var corrId = _wsaData.CorrelationId;

                _wsaData = new WSAData(_fEnabled, false);
                _wsaData.CorrelationId = corrId;
                _createStream(BaseLogger.Constants.STREAM_ID, 1);
                _bDataAvailableForUpload = false;
            };
            var _uploadWsaDataRequest = function(json) {
                var request = new XMLHttpRequest();

                request.onreadystatechange = function() {
                    BaseLogger.UploadCallBack(request);
                };
                request.open('POST', _uploadUrl, true);
                request.setRequestHeader('Content-Type', 'application/json');
                request.send(json);
            };
            var _isMaxSizeReachedCheck = function() {
                var size = _numDatapoints * BaseLogger.Constants.SIZE_DATAPOINT_ENTRY + _numStreamBytes;

                if (size >= BaseLogger.Constants.MAX_DATA_SIZE) {
                    _uploadData();
                    size = _numDatapoints * BaseLogger.Constants.SIZE_DATAPOINT_ENTRY + _numStreamBytes;
                    return size >= BaseLogger.Constants.MAX_DATA_SIZE;
                }
                return false;
            };
            var _wsaCEIPEnabled = function() {
                return typeof g_wsaEnabled != "undefined" && g_wsaEnabled;
            };
            var startTicks = 0;
            var GetTicks32 = function() {
                var timeNow = new Date();
                var ticks64 = timeNow.getTime();

                if (startTicks == 0) {
                    startTicks = ticks64;
                }
                return 1 + ticks64 - startTicks & 0x7FFFFFFF;
            };
            var GetTicks64 = function() {
                var timeNow = new Date();
                var ticks64 = timeNow.getTime();

                ticks64 = ticks64 + BaseLogger.Constants.MS_BTN_EPOCHS;
                ticks64 = ticks64 * 10000;
                return ticks64;
            };
        };
        var _baseLoggerInstance = null;

        BaseLogger.GetLogger = function() {
            if (_baseLoggerInstance == null) {
                _baseLoggerInstance = new BaseLogger.Logger();
            }
            return _baseLoggerInstance;
        };
    })();
    CacheLogger = {
        "__namespace": true
    };
    CacheLogger_module_def();
    DebugLogger = {
        "__namespace": true
    };
    DebugLogger_module_def();
    QoSLogger = {
        "__namespace": true
    };
    QoSLogger_module_def();
    RUMDelta = {};
    (function() {
        var LOG_ID = "RUMActionDelta";

        RUMDelta.Logger = function(logger) {
            RUMDelta.Application = {
                SharePointTouchAppHost: 0x0001,
                SharePoint: 0x0002,
                SharePointFileXfer: 0x0003
            };
            var RUMDeltaDataItem = function(action, correlationId, lastSeenCorrelationId, beginTime, firstChance, networkDone, serverTime, eupl) {
                this.Version = 1;
                this.Action = action;
                this.CorrelationId = correlationId;
                this.LastSeenCorrelationId = lastSeenCorrelationId;
                this.UserAgent = navigator.userAgent;
                this.BeginTime = beginTime;
                this.FirstChance = firstChance;
                this.NetworkDone = networkDone;
                this.ServerTime = serverTime;
                this.EUPL = eupl;
            };
            var _correlationId = "";
            var _lastSeenServerCorrelationId = "";
            var _logId = LOG_ID;
            var _basicLogger = Boolean(logger) ? logger : BaseLogger.GetLogger();

            this.SetCorrelationId = function(correlationId) {
                _basicLogger.SetCorrelationId(correlationId);
                _correlationId = correlationId;
            };
            this.SetLastSeenCorrelationId = function(correlationId) {
                _lastSeenServerCorrelationId = correlationId;
            };
            this.UploadRUMData = function(action, beginTime, firstChance, networkDone, serverTime, eupl) {
                try {
                    var logItem = new RUMDeltaDataItem(action, _correlationId, _lastSeenServerCorrelationId, beginTime, firstChance, networkDone, serverTime, eupl);

                    _basicLogger.WriteLog(_logId, logItem);
                    _basicLogger.UploadData();
                }
                catch (e) { }
            };
        };
    })();
    PerformanceLogger = {
        "__namespace": true
    };
    PerformanceLogger_module_def();
    SPRUMLogger = {
        "__namespace": true
    };
    SPRUMLogger_module_def();
    SPLoggers = {
        "__namespace": true
    };
    SPLoggers_module_def();
    getLoggingInfo = function(args) {
        var info = [];

        if (Boolean(args)) {
            addToInfoIfExists("ErrorCode", info, args, args.get_errorCode);
            addToInfoIfExists("CorrelationID", info, args, args.get_errorTraceCorrelationId);
            addToInfoIfExists("ErrorType", info, args, args.get_errorTypeName);
            addToInfoIfExists("Message", info, args, args.get_message);
            addToInfoIfExists("StackTrace", info, args, args.get_stackTrace);
        }
        return info.join("\n");
    };
    addToInfoIfExists = function(header, info, args, fn) {
        if (args != null && typeof fn != 'undefined' && fn != null) {
            var result = fn.call(args);

            if (result != null || result != "")
                info.push(header + ": " + result);
        }
    };
    SP.Performance.UploadNonMDSPageLoadTime = function(pageContext, endTime) {
        (SP.Performance.Log.GetLogger()).UploadNonMDSPageLoadTelemetry(pageContext, endTime);
    };
    _WOPIDocLoaded = false;
    SetWOPIDocLoaded = function() {
        _WOPIDocLoaded = true;
    };
    _TelemetryEndTime = -1;
    UploadFileXferTelemetry = function(source, startTime, endTime, byteCount) {
        (SP.Performance.Log.GetLogger()).UploadFileXferTelemetry(source, startTime, endTime, byteCount);
        _TelemetryEndTime = endTime;
    };
    ReadyToUploadLogs = function() {
        if (typeof SP.ReadyToUploadLogs != "undefined")
            SP.ReadyToUploadLogs();
    };
    if (typeof g_mdsReady == "undefined") {
        if (typeof window.addEventListener != 'undefined') {
            window.addEventListener('load', RumNonMDSHandler, false);
        }
        else {
            window.attachEvent('onload', RumNonMDSHandler);
        }
    }
    ;
    if (typeof SPThemeUtils == 'undefined') {
        SPThemeUtils = {
            "__namespace": true
        };
        SPThemeUtils_module_def();
    }
    if (typeof SuiteNavRendering == 'undefined') {
        SuiteNavRendering = {
            "__namespace": true
        };
        SuiteNavRendering_module_def();
    }
    if (typeof ModuleLink == 'undefined') {
        ModuleLink = {
            "__namespace": true
        };
        ModuleLink_module_def();
    }
    _spBodyOnLoadFunctionNames.push("AllowCSSFiltersOnIE8");
    initJsLoaded = true;
    notifyScriptsLoadedAndExecuteWaitingJobs("init.js");
    if (typeof spWriteProfilerMark == 'function')
        spWriteProfilerMark("perfMarkEnd_" + "init.js");
}
var spWriteProfilerMark;
var OffSwitch;

function OffSwitch_module_def() {
    OffSwitch.IsActive = OffSwitch_IsActive;
    function OffSwitch_IsActive(guidOffSwitchKey) {
        var offSwitches = window["g_SPOffSwitches"];
        var contextOffSwitches = null;
        var defaultResultWhenDataMissing = true;

        if (offSwitches == null) {
            var pageContextInfo = window["_spPageContextInfo"];

            contextOffSwitches = pageContextInfo == null ? null : pageContextInfo["killSwitches"];
            if (contextOffSwitches != null && !contextOffSwitches.hasOwnProperty("2625010B-67AA-49D2-B302-A12D0281E865")) {
                offSwitches = contextOffSwitches;
            }
        }
        if (offSwitches != null && !offSwitches.hasOwnProperty("DA1F7C1B-A819-4265-BD85-6D15C304CFDC")) {
            defaultResultWhenDataMissing = false;
        }
        var offSwitchActivated;

        offSwitchActivated = offSwitches == null ? defaultResultWhenDataMissing : offSwitches.hasOwnProperty(guidOffSwitchKey);
        return offSwitchActivated;
    }
}
var RuntimeErrors;

function RuntimeErrors_module_def() {
    RuntimeErrors.MismatchError = function(expected, actual, msg) {
        Error.call(this, msg);
        this.expected = expected;
        this.actual = actual;
    };
    RuntimeErrors.MismatchError.prototype = new Error;
    RuntimeErrors.ArgumentTypeError = function(expected, actual) {
        RuntimeErrors.MismatchError.call(this, expected, actual, "runtime type mismatch");
    };
    RuntimeErrors.ArgumentTypeError.prototype = new RuntimeErrors.MismatchError;
}
var Verify;

function Verify_module_def() {
    function _Verify(errorCtr, expected, actual) {
        if (actual != expected) {
            throw new errorCtr(expected, actual);
        }
    }
    Verify.ArgumentType = function _VerifyArgumentType(arg, expected) {
        var primitiveType = typeof arg;

        if (typeof expected == 'function') {
            _Verify(RuntimeErrors.ArgumentTypeError, 'object', primitiveType);
            if (!(arg instanceof expected)) {
                throw new RuntimeErrors.ArgumentTypeError(expected, arg.constructor);
            }
        }
        else if (typeof expected == 'string') {
            _Verify(RuntimeErrors.ArgumentTypeError, expected, primitiveType);
        }
        else {
            throw new RuntimeErrors.ArgumentTypeError('function or string', typeof expected);
        }
    };
}
var Define;

function Define_module_def() {
    var modules = {};

    Define.loadScript = function(url, successCallback, errCallback) {
        Verify.ArgumentType(url, 'string');
        Verify.ArgumentType(successCallback, 'function');
        Verify.ArgumentType(errCallback, 'function');
        var agt = navigator.userAgent.toLowerCase();
        var ie8down = agt.indexOf("msie") != -1 && parseInt(agt.substring(agt.indexOf("msie ") + 5)) <= 8;
        var s = document.createElement("SCRIPT");

        s.type = "text/javascript";
        s.src = url;
        if (ie8down) {
            s.onreadystatechange = getCallback(successCallback);
        }
        else {
            s.onload = getCallback(successCallback);
            s.onerror = getCallback(errCallback);
        }
        (document.getElementsByTagName("HEAD"))[0].appendChild(s);
        return s;
        function getCallback(cb) {
            return function() {
                var loaded = false;

                if (ie8down && typeof s.readyState != 'undefined')
                    loaded = s.readyState == "complete" || s.readyState == "loaded";
                else
                    loaded = true;
                if (loaded) {
                    s.onreadystatechange = null;
                    s.onload = null;
                    s.onerror = null;
                    cb();
                }
            };
        }
    };
    Define.require = function(req, callback) {
        if (typeof req == 'object' && req instanceof Array) {
            return requireMultiple(callback);
        }
        else {
            Verify.ArgumentType(req, 'string');
            return requireSingle(req, callback);
        }
        function requireSingle(n, cb) {
            if (modules[n] != null) {
                if (typeof cb == 'function') {
                    cb(modules[n]);
                }
                return modules[n];
            }
            Verify.ArgumentType(cb, 'function');
            Define.loadScript("/_layouts/15/" + n + ".js", function() {
                cb(modules[n]);
            }, function() {
                throw "Failed to load module: " + n;
            });
            return undefined;
        }
        function requireMultiple(cb) {
            Verify.ArgumentType(cb, 'function');
            var names = req;

            if (names.length == 0) {
                cb();
                return;
            }
            var allNames = names.slice(0, names.length);
            var n = names.shift();
            var callbackWithDeps = function() {
                var deps = [];

                for (var i = 0; i < allNames.length; i++) {
                    deps.push(Define.require(allNames[i]));
                }
                cb.apply(null, deps);
            };

            Define.require(n, function() {
                Define.require(names, callbackWithDeps);
            });
        }
    };
    Define.define = function(n, deps, def) {
        Verify.ArgumentType(n, 'string');
        Verify.ArgumentType(deps, Array);
        Verify.ArgumentType(def, 'function');
        if (modules[n] != null) {
            return;
        }
        Define.require(deps, function() {
            modules[n] = def.apply(null, Array.prototype.slice.call(arguments));
        });
    };
}
var BrowserDetection;

function BrowserDetection_module_def() {
}
var browseris;
var bis;
var BrowserStorage;

function BrowserStorage_module_def() {
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
    ;
    CachedStorage.prototype = StorageObject.prototype;
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
    var _testKey = "BrowserStorageTest";
    var _testValue = "1";

    function TestStorage(storage) {
        var result = false;

        storage.setItem(_testKey, _testValue);
        if (storage.getItem(_testKey) === _testValue) {
            result = true;
        }
        storage.removeItem(_testKey);
        return result;
    }
    var _local = null;
    var _session = null;

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
}
var CSSUtil;

function CSSUtil_module_def() {
    function BuildRegex(className) {
        return new RegExp('(\\s|^)' + className + '(\\s|$)');
    }
    CSSUtil.HasClass = function(elem, className) {
        if (elem == null || className == null) {
            return false;
        }
        return elem.className.match(BuildRegex(className)) != null;
    };
    CSSUtil.AddClass = function(elem, className) {
        if (elem != null && !CSSUtil.HasClass(elem, className)) {
            elem.className += " " + className;
            return true;
        }
        return false;
    };
    CSSUtil.RemoveClass = function(elem, className) {
        if (CSSUtil.HasClass(elem, className)) {
            elem.className = elem.className.replace(BuildRegex(className), ' ');
            return true;
        }
        return false;
    };
    CSSUtil.pxToFloat = function(pxString) {
        if (typeof pxString != "string")
            return 0;
        var trimmedPxString = pxString.trim();
        var pxWidth = Number((trimmedPxString.substring(0, trimmedPxString.length - 2)).trim());

        return isNaN(pxWidth) ? 0 : pxWidth;
    };
    CSSUtil.pxToNum = function(px) {
        var ret;

        if (px === "" || px === "none") {
            ret = 0;
        }
        else {
            ret = parseInt(px);
        }
        return ret;
    };
    CSSUtil.numToPx = function(n) {
        if (typeof n != "number") {
            throw new Error("n must be a number.");
        }
        return String(Math.round(n)) + "px";
    };
    CSSUtil.getCurrentEltStyleByNames = function(elem, styleNames) {
        var style = null;
        var i = 0;

        while (i < styleNames.length) {
            style = CSSUtil.getCurrentStyle(elem, styleNames[i]);
            if (style != null) {
                break;
            }
            i++;
        }
        return style;
    };
    CSSUtil.getCurrentStyle = function(element, cssStyle) {
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
    };
    CSSUtil.getCurrentStyleCorrect = function(element, camelStyleName, dashStyleName) {
        if (typeof document.defaultView != 'undefined' && typeof document.defaultView.getComputedStyle != 'undefined') {
            return (document.defaultView.getComputedStyle(element, null)).getPropertyValue(dashStyleName);
        }
        else {
            if (camelStyleName == 'width') {
                return String(element.offsetWidth) + "px";
            }
            return element.currentStyle[camelStyleName];
        }
    };
    CSSUtil.getOpacity = function(element) {
        return XUIHtml.GetOpacity(element);
    };
    CSSUtil.setOpacity = function(element, value) {
        XUIHtml.SetOpacity(element, value);
    };
    var XUIHtml = {};

    XUIHtml.SetOpacity = function(domNode, newVal) {
        if (typeof domNode.style == "undefined")
            return;
        if (document.body.style.opacity != null) {
            if (newVal == 1)
                XUIHtml.RemoveCSSProperty(domNode, "opacity");
            else {
                domNode.style.opacity = String(newVal);
            }
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
}
var pxToNum;
var GetWidthFromPxString;
var GetCurrentEltStyle;
var GetCurrentEltStyleByNames;
var GetOpacity;
var SetOpacity;
var HasCssClass;
var AddCssClassToElement;
var RemoveCssClassFromElement;
var getCurrentEltStyleByNames;
var DOM;

function DOM_module_def() {
    DOM.rightToLeft = document.documentElement.dir == "rtl";
    DOM.cancelDefault = DOM_cancelDefault;
    DOM.AbsLeft = DOM_AbsLeft;
    DOM.AbsTop = DOM_AbsTop;
    DOM.CancelEvent = DOM_CancelEvent;
    DOM.GetElementsByName = DOM_GetElementsByName;
    DOM.GetEventCoords = DOM_GetEventCoords;
    DOM.GetEventSrcElement = DOM_GetEventSrcElement;
    DOM.GetInnerText = DOM_GetInnerText;
    DOM.GetParentLinkFromEvent = DOM_GetParentLinkFromEvent;
    DOM.GetSelectedElement = DOM_GetSelectedElement;
    DOM.PreventDefaultNavigation = DOM_PreventDefaultNavigation;
    DOM.SetEvent = DOM_SetEvent;
    DOM.AddEventHandler = DOM_AddEventHandler;
    DOM.RemoveEventHandler = DOM_RemoveEventHandler;
    DOM.EnsureElementIsInViewPort = DOM_EnsureElementIsInViewPort;
    function DOM_cancelDefault(evt) {
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
    function DOM_CancelEvent(e) {
        e.cancelBubble = true;
        if (Boolean(e.preventDefault))
            e.preventDefault();
        e.returnValue = false;
        return false;
    }
    function DOM_GetElementsByName(str) {
        var ret = document.getElementsByName(str);

        if (ret.length == 0 && Boolean(XMLHttpRequest)) {
            ret = FFGetElementsById(document, str);
        }
        return ret;
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
    }
    function DOM_GetEventSrcElement(e) {
        if (e.target != null) {
            return e.target;
        }
        else if (typeof e.srcElement != 'undefined') {
            return e.srcElement;
        }
        else {
            ;
            return null;
        }
    }
    function DOM_GetParentLinkFromEvent(e) {
        if (e == null)
            e = window.event;
        var srcElement = DOM.GetEventSrcElement(e);
        var anchorElement = DOM_GetSelectedElement(srcElement, "A", "a");

        if (anchorElement !== null && anchorElement.tagName != null && anchorElement.tagName.toUpperCase() === "A")
            return anchorElement;
        else
            return null;
    }
    function DOM_GetSelectedElement(elem, tagName, tagAlt) {
        while (elem != null && elem.tagName != tagName && (tagAlt == null || elem.tagName != tagAlt))
            elem = elem.parentNode;
        return elem;
    }
    function DOM_GetInnerText(elem) {
        if (typeof elem.textContent !== "undefined" && elem.textContent !== null) {
            return elem.textContent;
        }
        else if (typeof elem.innerText !== "undefined") {
            return elem.innerText;
        }
        return undefined;
    }
    function DOM_PreventDefaultNavigation(evt) {
        if (typeof evt == "undefined" || evt == null) {
            evt = window.event;
        }
        if (!(typeof evt == "undefined" || evt == null)) {
            if (evt.preventDefault == null)
                evt.returnValue = false;
            else
                evt.preventDefault();
        }
    }
    function DOM_Abs(obj, propName) {
        var x = obj[propName];
        var p = obj.offsetParent;

        while (p != null && p.tagName != "BODY") {
            x += p[propName];
            p = p.offsetParent;
        }
        if (p != null)
            x += p[propName];
        return x;
    }
    function DOM_AbsLeft(obj) {
        return DOM_Abs(obj, "offsetLeft");
    }
    function DOM_AbsTop(obj) {
        return DOM_Abs(obj, "offsetTop");
    }
    function DOM_GetEventCoords(ev) {
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
    function DOM_SetEvent(eventName, eventFunc, el) {
        if (!Boolean(el))
            el = window;
        if (typeof eventFunc == 'string')
            eventFunc = new Function(eventFunc);
        el['on' + eventName] = eventFunc;
    }
    function DOM_AddEventHandler(ele, strEvt, func, useCapture) {
        if (Boolean(ele.addEventListener)) {
            useCapture = typeof useCapture != "undefined" && useCapture != null ? useCapture : false;
            ele.addEventListener(strEvt.substr(2), func, useCapture);
        }
        else if (Boolean(ele.attachEvent)) {
            ele.attachEvent(strEvt, func);
        }
    }
    function DOM_RemoveEventHandler(ele, strEvt, func, useCapture) {
        if (Boolean(ele.removeEventListener)) {
            useCapture = typeof useCapture != "undefined" && useCapture != null ? useCapture : false;
            ele.removeEventListener(strEvt.substr(2), func, useCapture);
        }
        else if (Boolean(ele.detachEvent)) {
            ele.detachEvent(strEvt, func);
        }
    }
    function DOM_EnsureElementIsInViewPort(ele, padding, widths) {
        var elementTop = Number(DOM_AbsTop(ele));
        var elementLeft = Number(DOM_AbsLeft(ele));
        var elementHeight = Number(ele.clientHeight);
        var elementWidth = Number(ele.clientWidth);
        var viewPortHeight = Number(document.documentElement.clientHeight);
        var viewPortWidth = Number(document.documentElement.clientWidth);
        var newTop = elementTop;
        var newLeft = elementLeft;

        if (elementTop + elementHeight > viewPortHeight) {
            newTop = viewPortHeight - elementHeight - padding;
        }
        if (elementLeft < 0) {
            if (elementWidth + padding < viewPortWidth)
                newLeft = padding;
        }
        else if (elementLeft + elementWidth > viewPortWidth) {
            if (Boolean(widths)) {
                for (var i = 0; i < widths.length; i++) {
                    newLeft -= widths[i];
                }
            }
            else
                newLeft = viewPortWidth - elementWidth - padding;
        }
        if (newTop !== elementTop || newLeft !== elementLeft) {
            newTop = Math.max(newTop, 0);
            newLeft = Math.max(newLeft, 0);
            ele.style.position = "absolute";
            ele.style.top = String(newTop) + "px";
            ele.style.left = String(newLeft) + "px";
        }
    }
}
var fRightToLeft;
var cancelDefault;
var AbsLeft;
var AbsTop;
var CancelEvent;
var GetElementsByName;
var GetEventCoords;
var GetEventSrcElement;
var GetInnerText;
var PreventDefaultNavigation;
var SetEvent;
var Encoding;

function Encoding_module_def() {
    Encoding.EncodeScriptQuote = Encoding_encodeScriptQuote;
    Encoding.HtmlEncode = Encoding_STSHtmlEncode;
    Encoding.HtmlEncodeEx = Encoding_STSHtmlEncodeEx;
    Encoding.HtmlDecode = Encoding_STSHtmlDecode;
    Encoding.AttrQuote = Encoding_StAttrQuote;
    Encoding.ScriptEncode = Encoding_STSScriptEncode;
    Encoding.ScriptEncodeWithQuote = Encoding_STSScriptEncodeWithQuote;
    Encoding.CanonicalizeUrlEncodingCase = Encoding_CanonicalizeUrlEncodingCase;
    Encoding.EncodePath = Encoding_encodePath;
    function Encoding_CanonicalizeUrlEncodingCase(str) {
        var strOut = "";
        var ix;

        for (ix = 0; ix < str.length; ix++) {
            var curChar = str.charAt(ix);

            if (curChar == '%' && ix + 2 < str.length) {
                strOut += curChar;
                ix++;
                strOut += ((str.charAt(ix)).toString()).toUpperCase();
                ix++;
                strOut += ((str.charAt(ix)).toString()).toUpperCase();
            }
            else {
                strOut += curChar;
            }
        }
        return strOut;
    }
    function Encoding_encodeScriptQuote(str) {
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
    function Encoding_STSHtmlEncode(str) {
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
    function Encoding_encodePath(url, encodeHash) {
        if (null == url)
            return url;
        var encodedUrl = encodeURI(url);

        if (encodeHash) {
            encodedUrl = encodedUrl.replace(/#/g, "%23");
        }
        return encodedUrl;
    }
    function Encoding_STSHtmlEncodeEx(str) {
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
            case '#':
                strOut.push("%23");
                break;
            case '%':
                strOut.push("%25");
                break;
            default:
                strOut.push(ch);
                break;
            }
        }
        return strOut.join('');
    }
    function Encoding_STSHtmlDecode(str) {
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
    function Encoding_StAttrQuote(st) {
        st = st.toString();
        st = st.replace(/&/g, '&amp;');
        st = st.replace(/\"/g, '&quot;');
        st = st.replace(/\r/g, '&#13;');
        return '"' + st + '"';
    }
    function Encoding_STSScriptEncode(str) {
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
    function Encoding_STSScriptEncodeWithQuote(str) {
        return '"' + Encoding_STSScriptEncode(str) + '"';
    }
}
var encodeScriptQuote;
var STSHtmlEncode;
var STSHtmlEncodeEx;
var STSHtmlDecode;
var StAttrQuote;
var STSScriptEncode;
var STSScriptEncodeWithQuote;
var CanonicalizeUrlEncodingCase;
var EncodePath;
var ExpFlighting;

function ExpFlighting_module_def() {
    var c_strUndefined = "undefined";

    function IsFlightingAvailable() {
        var varConfig;

        return typeof Flighting != c_strUndefined && typeof Flighting.VariantConfiguration != c_strUndefined && typeof Flighting.VariantConfiguration.IsExpFeatureClientEnabled != c_strUndefined;
    }
}
var IE8Support;

function IE8Support_module_def() {
    IE8Support.arrayIndexOf = function(array, item, startIdx) {
        if (typeof Array.prototype.indexOf != "undefined") {
            return array.indexOf(item, startIdx);
        }
        if (typeof item === "undefined")
            return -1;
        var l = array.length;

        if (l !== 0) {
            startIdx = startIdx - 0;
            if (isNaN(startIdx)) {
                startIdx = 0;
            }
            else {
                if (isFinite(startIdx)) {
                    startIdx = startIdx - startIdx % 1;
                }
                if (startIdx < 0) {
                    startIdx = Math.max(0, l + startIdx);
                }
            }
            for (var i = startIdx; i < l; i++) {
                if (typeof array[i] !== "undefined" && array[i] === item) {
                    return i;
                }
            }
        }
        return -1;
    };
    IE8Support.attachDOMContentLoaded = function(handler) {
        if (typeof document.addEventListener == 'undefined') {
            document.onreadystatechange = function() {
                if (document.readyState == "complete") {
                    handler();
                }
            };
        }
        else {
            document.addEventListener("DOMContentLoaded", handler, false);
        }
    };
    IE8Support.getComputedStyle = function(domObj, camelStyleName, dashStyleName) {
        if (typeof document.defaultView != 'undefined' && typeof document.defaultView.getComputedStyle != 'undefined') {
            return (document.defaultView.getComputedStyle(domObj, null)).getPropertyValue(dashStyleName);
        }
        else {
            if (camelStyleName == 'width') {
                return String(domObj.offsetWidth) + "px";
            }
            return domObj.currentStyle[camelStyleName];
        }
    };
    IE8Support.stopPropagation = function(evt) {
        if (typeof evt.stopPropagation == "function")
            evt.stopPropagation();
        else
            evt.cancelBubble = true;
    };
    IE8Support.getCurrentTarget = function(evt) {
        if (typeof evt.currentTarget != "undefined")
            return evt.currentTarget;
        return evt.srcElement;
    };
    if (typeof Array.isArray == 'undefined') {
        Array.isArray = function(obj) {
            return typeof obj == 'object' && obj instanceof Array;
        };
    }
    if (typeof Object.create == 'undefined') {
        Object.create = function(proto, properties) {
            ;
            function ctr() {
            }
            ctr.prototype = proto;
            return new ctr;
        };
    }
    if (typeof String.prototype.trim == "undefined") {
        String.prototype.trim = function() {
            return this.replace(/^\s+|\s+$/g, '');
        };
    }
}
var RequestUtil;

function RequestUtil_module_def() {
    RequestUtil.RequestHeader = RequestHeader;
    function RequestHeader(header, value) {
        this.header = header;
        this.value = value;
    }
    RequestUtil.WithLoadedXMLHttpRequest = WithLoadedXMLHttpRequest;
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
    RequestUtil.WithUrlContents = WithUrlContents;
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
    var _restHeaders = [new RequestHeader("Content-Type", "application/x-www-form-urlencoded"), new RequestHeader("ACCEPT", "application/json; odata = verbose")];

    RequestUtil.WithRestValue = WithRestValue;
    function WithRestValue(resultCallback, url) {
        WithUrlContents(resultCallback, url, _restHeaders);
    }
}
var StringUtil;

function StringUtil_module_def() {
    StringUtil.BuildParam = StringUtil_StBuildParam;
    StringUtil.IsGuid = StringUtil_IsGuid;
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
    function StringUtil_StBuildParam(stPattern) {
        var re;
        var i;

        for (i = 1; i < arguments.length; i++) {
            re = new RegExp("\\^" + String(i));
            stPattern = stPattern.replace(re, arguments[i]);
        }
        return stPattern;
    }
    StringUtil.ApplyStringTemplate = function() {
        var a = arguments;

        if (a.length < 1)
            throw new Error("arguments");
        var str = Array.prototype.shift.call(a);

        return str.replace(/\{(\d+)\}/g, getReplacementString);
        function getReplacementString(match, capture) {
            return a[Number(capture)];
        }
    };
    function StringUtil_IsGuid(str) {
        var regex = /^((\{[0-9a-f]{8}-([0-9a-f]{4}-){3}[0-9a-f]{12}\})|([0-9a-f]{8}-([0-9a-f]{4}-){3}[0-9a-f]{12}))$/i;

        return regex.test(str);
    }
}
var StBuildParam;
var TypeUtil;

function TypeUtil_module_def() {
    TypeUtil.IsArray = TypeUtil_IsArray;
    TypeUtil.IsNullOrUndefined = TypeUtil_IsNullOrUndefined;
    function TypeUtil_IsArray(input) {
        return typeof input == 'object' && input instanceof Array;
    }
    function TypeUtil_IsNullOrUndefined(value) {
        return value == null || value == undefined;
    }
}
var IsArray;
var IsNullOrUndefined;
var ObjectUtil;

function ObjectUtil_module_def() {
    ObjectUtil.deepCopy = ObjectUtil_DeepCopy;
    ObjectUtil.deepCompare = ObjectUtil_DeepCompare;
    function ObjectUtil_DeepCopy(object) {
        var refsCopied = [];

        function copyRecurse(obj) {
            var result = null;

            if (Boolean(obj)) {
                if (obj instanceof Array) {
                    result = [];
                }
                else {
                    result = Object.create(Object.getPrototypeOf(obj));
                }
                for (var i in obj) {
                    if (obj.hasOwnProperty(i)) {
                        if (typeof obj[i] === "object") {
                            if (refsCopied.indexOf(obj[i]) !== -1) {
                                throw new Error("Cannot perform DeepCopy() because a circular reference was encountered, object: " + String(obj) + ", property: " + String(i));
                            }
                            refsCopied.push(obj[i]);
                            result[i] = copyRecurse(obj[i]);
                            refsCopied.pop();
                        }
                        else {
                            result[i] = obj[i];
                        }
                    }
                }
            }
            return result;
        }
        return copyRecurse(object);
    }
    function ObjectUtil_DeepCompare(objA, objB, equivalent) {
        var refsComparedA = [];
        var refsComparedB = [];
        var compare = Boolean(equivalent) ? equivalent : function(a, b) {
            return a === b;
        };

        function equals(a, b) {
            if (a === b) {
                return true;
            }
            if (a === null || b === null) {
                return false;
            }
            for (var prop in b) {
                if (b.hasOwnProperty(prop) && !a.hasOwnProperty(prop)) {
                    return false;
                }
            }
            if (a instanceof Object && b instanceof Object) {
                for (prop in a) {
                    if (typeof a[prop] === "function" || !a.hasOwnProperty(prop)) {
                        continue;
                    }
                    if (!b.hasOwnProperty(prop)) {
                        return false;
                    }
                    if (!Boolean(compare(a[prop], b[prop]))) {
                        if (typeof a[prop] === "object") {
                            if (refsComparedA.indexOf(a[prop]) !== -1) {
                                throw new Error("Cannot perform DeepCompare() because a circular reference was encountered, object: " + String(a) + ", property: " + String(prop));
                            }
                            refsComparedA.push(a[prop]);
                            if (refsComparedB.indexOf(b[prop]) !== -1) {
                                throw new Error("Cannot perform DeepCompare() because a circular reference was encountered, object: " + String(b) + ", property: " + String(prop));
                            }
                            refsComparedB.push(b[prop]);
                            if (!equals(a[prop], b[prop])) {
                                return false;
                            }
                            refsComparedA.pop();
                            refsComparedB.pop();
                        }
                        else {
                            return false;
                        }
                    }
                }
            }
            else {
                return false;
            }
            return true;
        }
        return equals(objA, objB);
    }
}
var URI;
var unescapeProperly;
var GetAbsoluteUrl;
var RemoveParametersFromUrl;
var RemoveQueryParameterFromUrl;
var RemoveUrlKeyValue;
var StURLSetVar2;
var ParseMultiColumnValue;
var ConvertMultiColumnValueToString;
var CompleteDecode;
var URI_Encoding;

function URI_Encoding_module_def() {
    function URI_escapeProperly(str, bAsUrl, bForFilterQuery, bForCallback) {
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
                strByte = 0xc0 | charCode >> 6;
                strOut += "%" + (strByte.toString(16)).toUpperCase();
                strByte = 0x80 | charCode & 0x003f;
                strOut += "%" + (strByte.toString(16)).toUpperCase();
            }
            else if ((charCode & 0xFC00) != 0xD800) {
                strByte = 0xe0 | charCode >> 12;
                strOut += "%" + (strByte.toString(16)).toUpperCase();
                strByte = 0x80 | (charCode & 0x0fc0) >> 6;
                strOut += "%" + (strByte.toString(16)).toUpperCase();
                strByte = 0x80 | charCode & 0x003f;
                strOut += "%" + (strByte.toString(16)).toUpperCase();
            }
            else if (ix < str.length - 1) {
                charCode = (charCode & 0x03FF) << 10;
                ix++;
                var nextCharCode = str.charCodeAt(ix);

                charCode |= nextCharCode & 0x03FF;
                charCode += 0x10000;
                strByte = 0xf0 | charCode >> 18;
                strOut += "%" + (strByte.toString(16)).toUpperCase();
                strByte = 0x80 | (charCode & 0x3f000) >> 12;
                strOut += "%" + (strByte.toString(16)).toUpperCase();
                strByte = 0x80 | (charCode & 0x0fc0) >> 6;
                strOut += "%" + (strByte.toString(16)).toUpperCase();
                strByte = 0x80 | charCode & 0x003f;
                strOut += "%" + (strByte.toString(16)).toUpperCase();
            }
        }
        return strOut;
    }
    function URI_escapeUrlForCallback(str) {
        var iPound = str.indexOf("#");
        var iQues = str.indexOf("?");

        if (iPound > 0 && (iQues == -1 || iPound < iQues)) {
            var strNew = str.substr(0, iPound);

            if (iQues > 0) {
                strNew += str.substr(iQues);
            }
            str = strNew;
        }
        return URI_escapeProperly(str, true, false, true);
    }
    URI_Encoding.encodeURIComponent = URI_escapeProperly;
    URI_Encoding.escapeUrlForCallback = URI_escapeUrlForCallback;
}
var escapeUrlForCallback;
var escapeProperly;
var escapeProperlyCore;
var escapeProperlyCoreCore;

function PageContextInfo(webServerRelativeUrl, webLanguage, currentLanguage, webUIVersion, pageListId, pageItemId, userId, alertsEnabled, siteServerRelativeUrl, allowSilverlightPrompt, webAbsoluteUrl, siteClientTag, layoutsUrl, tenantAppVersion, siteAbsoluteUrl, themedImageRootPath, themedImageFileNames, clientServerTimeDelta, serverRedirectedUrl, expFeatures) {
    this.webServerRelativeUrl = webServerRelativeUrl;
    this.webAbsoluteUrl = webAbsoluteUrl;
    this.siteAbsoluteUrl = siteAbsoluteUrl;
    this.layoutsUrl = layoutsUrl;
    this.webLanguage = webLanguage;
    this.siteClientTag = siteClientTag;
    this.currentLanguage = currentLanguage;
    this.webUIVersion = webUIVersion;
    this.pageListId = pageListId;
    this.pageItemId = pageItemId;
    this.userId = userId;
    this.alertsEnabled = alertsEnabled;
    this.siteServerRelativeUrl = siteServerRelativeUrl;
    this.allowSilverlightPrompt = allowSilverlightPrompt;
    this.tenantAppVersion = tenantAppVersion;
    this.themedImageRootPath = themedImageRootPath;
    this.themedImageFileNames = themedImageFileNames;
    this.clientServerTimeDelta = clientServerTimeDelta;
    this.updateFormDigestPageLoaded = new Date();
    this.serverRedirectedUrl = serverRedirectedUrl;
    this.ExpFeatures = expFeatures;
}
function PageContextInfo_InitializePrototype() {
    var dynamicNull = null;

    PageContextInfo.prototype.webServerRelativeUrl = "";
    PageContextInfo.prototype.webAbsoluteUrl = "";
    PageContextInfo.prototype.siteAbsoluteUrl = "";
    PageContextInfo.prototype.serverRequestPath = "";
    PageContextInfo.prototype.layoutsUrl = "";
    PageContextInfo.prototype.siteClientTag = "";
    PageContextInfo.prototype.webLanguage = 0;
    PageContextInfo.prototype.webTitle = null;
    PageContextInfo.prototype.webLogoUrl = null;
    PageContextInfo.prototype.currentCultureName = null;
    PageContextInfo.prototype.currentUICultureName = null;
    PageContextInfo.prototype.currentLanguage = 0;
    PageContextInfo.prototype.crossDomainPhotosEnabled = false;
    PageContextInfo.prototype.webUIVersion = 0;
    PageContextInfo.prototype.pageListId = "";
    PageContextInfo.prototype.pageItemId = 0;
    PageContextInfo.prototype.userId = "";
    PageContextInfo.prototype.systemUserKey = "";
    PageContextInfo.prototype.alertsEnabled = false;
    PageContextInfo.prototype.siteServerRelativeUrl = "";
    PageContextInfo.prototype.allowSilverlightPrompt = "";
    PageContextInfo.prototype.tenantAppVersion = null;
    PageContextInfo.prototype.themedImageRootPath = null;
    PageContextInfo.prototype.themedImageFileNames = dynamicNull;
    PageContextInfo.prototype.clientServerTimeDelta = 0;
    PageContextInfo.prototype.webTemplate = "";
    PageContextInfo.prototype.isSLV = false;
    PageContextInfo.prototype.userLoginName = "";
    PageContextInfo.prototype.supportPoundStorePath = "";
    PageContextInfo.prototype.supportPercentStorePath = "";
    PageContextInfo.prototype.updateFormDigestPageLoaded = new Date();
    PageContextInfo.prototype.showNGSCDialogForSyncOnODB = false;
    PageContextInfo.prototype.showNGSCDialogForSyncOnTS = false;
    PageContextInfo.prototype.isSPO = false;
    PageContextInfo.prototype.serverRedirectedUrl = null;
    PageContextInfo.prototype.ExpFeatures = [];
}
var _spPageContextInfo;
var Nav;

function Nav_module_def() {
    function AjaxNavigate() {
        this._list = new Array(0);
        this._fixLayoutsUrl = function AjaxNavigate$_fixLayoutsUrl(url) {
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
        };
        this.update = function AjaxNavigate$update(url, updateParts, fullNavigate, anchorName) {
            var oldHash = Nav_AjaxNavigate$_GetWindowLocationHash(window.location.href);
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
                    Nav_AjaxNavigate$_parseParams(hashObject, parts, partsLength, partPosStart);
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
                if (typeof _dlgWndTop == 'function' && typeof commonModalDialogClose == 'function') {
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
                        var startPageUrl = Nav_AjaxNavigate$_GetWindowLocationNoHash(window.location.href);
                        var newAction = Nav_GetUrlFromMDSLocation(startPageUrl, Nav_RemoveMDSQueryParametersFromUrl(newHash), true);

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
        };
        this.add_navigate = function AjaxNavigate$add_navigate(handler) {
            if ('function' != typeof handler)
                throw "unexpected";
            var index = IE8Support.arrayIndexOf(this._list, handler, 0);

            if (-1 == index) {
                this._list.push(handler);
            }
        };
        this.remove_navigate = function AjaxNavigate$remove_navigate(handler) {
            if ('function' != typeof handler)
                throw "unexpected";
            var index = IE8Support.arrayIndexOf(this._list, handler, 0);

            if (-1 != index) {
                this._list.splice(index, 1);
            }
        };
        this._buildHashBag = function AjaxNavigate$_buildHashBag(hash) {
            var hashObject = {};

            try {
                if (hash == "" || hash == "#") {
                    hashObject["url"] = "/";
                }
                else if (hash != null && hash.length != 0) {
                    var parts = (hash.substr(1)).split(/#|%23/);
                    var partsLength = parts.length;
                    var partPosStart = 0;

                    if ("undefined" != typeof g_MinimalDownload && g_MinimalDownload && partsLength > 0 && parts[0].length > 0 && parts[0][0] == '/') {
                        hashObject["url"] = parts[0];
                        partPosStart = 1;
                    }
                    Nav_AjaxNavigate$_parseParams(hashObject, parts, partsLength, partPosStart);
                }
            }
            catch (e) { }
            ;
            return hashObject;
        };
        this._raiseNavigate = function AjaxNavigate$_raiseNavigate(sender) {
            var hashObject = this._buildHashBag(Nav_AjaxNavigate$_GetWindowLocationHash(window.location.href));
            var listLen = this._list.length;

            for (var i = 0, l = listLen; i < l; i++) {
                this._list[i](sender, hashObject);
            }
        };
        this._clear = function AjaxNavigate$_clear() {
            this._list = new Array(0);
        };
        this.submit = function AjaxNavigate$submit(formToSubmit) {
            if ("undefined" != typeof g_MinimalDownload && g_MinimalDownload && (window.location.pathname.toLowerCase()).endsWith("/_layouts/15/start.aspx") && "undefined" != typeof asyncDeltaManager && "undefined" != typeof asyncDeltaManager._onFormSubmitCore) {
                asyncDeltaManager._onFormSubmitCore(formToSubmit);
            }
            else {
                formToSubmit.submit();
            }
        };
        this.getParam = function AjaxNavigate$_getParam(partName) {
            var hashObject = this._buildHashBag(Nav_AjaxNavigate$_GetWindowLocationHash(window.location.href));

            return hashObject[partName];
        };
        this.getSavedFormAction = function AjaxNavigate$_getSavedFormAction() {
            var formAction = null;

            if ("undefined" != typeof asyncDeltaManager && Boolean(asyncDeltaManager) && "undefined" != typeof asyncDeltaManager._savedFormAction) {
                formAction = asyncDeltaManager._savedFormAction;
                if (Boolean(formAction)) {
                    formAction = Nav_AjaxNavigate$_normalizeFormAction(formAction);
                }
            }
            return formAction;
        };
        this.get_href = function AjaxNavigate$get_href() {
            var ajaxLocation = null;

            if ((window.location.pathname.toLowerCase()).endsWith("/_layouts/15/start.aspx")) {
                if ("undefined" != typeof g_MinimalDownload && g_MinimalDownload) {
                    ajaxLocation = this.getSavedFormAction();
                }
                if (!Boolean(ajaxLocation)) {
                    ajaxLocation = Nav_AjaxNavigate$_getAjaxLocationWindow();
                }
            }
            else {
                ajaxLocation = window.location.href;
            }
            return ajaxLocation;
        };
        this.get_hash = function AjaxNavigate$get_hash() {
            var ajaxHash = window.location.hash;

            if ("undefined" != typeof g_MinimalDownload && g_MinimalDownload && (window.location.pathname.toLowerCase()).endsWith("/_layouts/15/start.aspx")) {
                var hashIndex = ajaxHash.indexOf("#", 1);

                ajaxHash = hashIndex > 0 ? ajaxHash.substr(hashIndex) : "";
            }
            return ajaxHash;
        };
        this.get_search = function AjaxNavigate$get_search() {
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
        };
        this.convertMDSURLtoRegularURL = function Nav_AjaxNavigate$convertMDSURLtoRegularURL(mdsPath) {
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

                                    regularUrl = Nav_AjaxNavigate$combineURL(serverPath, serverRelativeUrl);
                                }
                            }
                        }
                        else if (mdsPath.length >= idxMdsHash + 1 && mdsPath[idxMdsHash] == '/') {
                            var webRelativeUrl = mdsPath.substring(idxMdsHash);

                            regularUrl = Nav_AjaxNavigate$combineURL(webUrl, webRelativeUrl);
                        }
                    }
                }
            }
            return regularUrl;
        };
    }
    function Nav_AjaxNavigate$WantsNewTab(evt) {
        if ("undefined" != typeof evt.ctrlKey && Boolean(evt.ctrlKey)) {
            return true;
        }
        if ("undefined" != typeof evt.button && 1 == evt.button) {
            return true;
        }
        var parentLink = DOM.GetParentLinkFromEvent(evt);

        if (parentLink != null) {
            var linkTarget = parentLink.getAttribute("target");

            if (Boolean(linkTarget)) {
                linkTarget = linkTarget.toUpperCase();
                if (linkTarget == "_BLANK" || linkTarget == "_NEW" || linkTarget.charAt(0) != "_") {
                    return true;
                }
            }
        }
        return false;
    }
    function Nav_AjaxNavigate$OnClickHook(evt, topElem) {
        if (!(evt.returnValue === false || evt.defaultPrevented) && !Nav_AjaxNavigate$WantsNewTab(evt)) {
            var srcElement = DOM.GetEventSrcElement(evt);
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
            if (anchorClick && currentElem.href != null && currentElem.href.length > 0 && currentElem.href != "#" && !/^javascript:/i.test(currentElem.href)) {
                if (window["OffSwitch"] == null || OffSwitch.IsActive("911A3FDF-0DB6-45AC-BD03-E2FE43E0925B") || Nav.isPageUrlValid(currentElem.href)) {
                    DOM.cancelDefault(evt);
                    Nav.navigate(currentElem.href);
                    return false;
                }
            }
        }
        return (function(u) {
            return u;
        })();
    }
    function Nav_AjaxNavigate$_parseParams(hashObject, parts, partsLength, partPosStart) {
        var bLocalAnchor = false;

        for (var partPos = partPosStart; partPos < partsLength; partPos++) {
            var part = parts[partPos];

            if (null == part || 0 == part.length)
                continue;
            var eqPos = part.indexOf('=');
            var key;
            var value;

            if (eqPos >= 1) {
                key = part.substr(0, eqPos);
                value = part.substr(eqPos + 1);
                hashObject[key] = URI.decodeURIComponent(value);
            }
            else if (eqPos == -1 && !bLocalAnchor) {
                if (bLocalAnchor)
                    throw "Unexpected";
                key = "anchorTag";
                value = part;
                hashObject[key] = URI.decodeURIComponent(value);
                bLocalAnchor = true;
            }
            else {
                throw "Unexpected";
            }
        }
    }
    function Nav_AjaxNavigate$_GetWindowLocationHash(href) {
        var nHashPos = href.indexOf('#');

        nHashPos = nHashPos > 0 ? nHashPos : href.length;
        return href.substr(nHashPos);
    }
    function Nav_AjaxNavigate$_GetWindowLocationNoHash(href) {
        var nHashPos = href.indexOf('#');

        nHashPos = nHashPos > 0 ? nHashPos : href.length;
        return href.substr(0, nHashPos);
    }
    function Nav_RemoveMDSQueryParametersFromUrl(inUrl) {
        return URI.removeQueryParameter(URI.removeQueryParameter(URI.removeQueryParameter(inUrl, 'AjaxDelta'), 'OrigMaster'), 'isStartPlt1');
    }
    function Nav_GetUrlFromMDSLocation(startPage, relativeMDSLocation, fServerAbsolute) {
        var anUndefined = (function() {
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
    function Nav_AjaxNavigate$_UrlFromHashBag(hashObject) {
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
            var startPageUrl = Nav_AjaxNavigate$_GetWindowLocationNoHash(window.location.href);

            return Nav_GetUrlFromMDSLocation(startPageUrl, url, true);
        }
    }
    function Nav_AjaxNavigate$parseHash(hash) {
        var hashObject = {};

        try {
            if (hash != null && hash.length != 0) {
                var parts = hash.split('#');

                Nav_AjaxNavigate$_parseParams(hashObject, parts, parts.length, 0);
            }
        }
        catch (e) { }
        ;
        return hashObject;
    }
    function Nav_AjaxNavigate$_normalizeFormAction(formAction) {
        var tmpForm = document.createElement('form');

        tmpForm.action = formAction;
        return tmpForm.action;
    }
    function Nav_AjaxNavigate$_getAjaxLocationWindow() {
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
    function Nav_AjaxNavigate$combineURL(baseUrlPath, additionalNodes) {
        if (baseUrlPath.endsWith("/")) {
            if (additionalNodes.startsWith("/"))
                additionalNodes = additionalNodes.substring(1);
            return baseUrlPath + additionalNodes;
        }
        else {
            return additionalNodes.startsWith("/") ? baseUrlPath + additionalNodes : baseUrlPath + "/" + additionalNodes;
        }
    }
    function Nav_AjaxNavigate$isMDSURL(url) {
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
    function Nav_AjaxNavigate$convertRegularURLtoMDSURL(webUrl, fullPath) {
        if (Nav_AjaxNavigate$isMDSURL(fullPath))
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
            mdsUrl = Nav_AjaxNavigate$combineURL(webUrl, "/_layouts/15/start.aspx" + "#" + webRelativeUrl);
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
                    mdsUrl = Nav_AjaxNavigate$combineURL(serverPath, "/_layouts/15/start.aspx" + "#/" + serverRelativeUrl);
                }
            }
        }
        return mdsUrl;
    }
    var Nav_ajaxNavigate = new AjaxNavigate;

    Nav.ajaxNavigate = Nav_ajaxNavigate;
    Nav.combineUrl = Nav_AjaxNavigate$combineURL;
    Nav.convertRegularURLtoMDSURL = Nav_AjaxNavigate$convertRegularURLtoMDSURL;
    Nav.isMDSUrl = Nav_AjaxNavigate$isMDSURL;
    Nav.isPageUrlValid = Nav_IsSTSPageUrlValid;
    Nav.isPortalTemplatePage = Nav_isPortalTemplatePage;
    Nav.getAjaxLocationWindow = Nav_AjaxNavigate$_getAjaxLocationWindow;
    Nav.getSource = Nav_GetSource;
    Nav.getUrlKeyValue = Nav_GetUrlKeyValue;
    Nav.getWindowLocationNoHash = Nav_AjaxNavigate$_GetWindowLocationNoHash;
    Nav.goToHistoryLink = Nav_GoToHistoryLink;
    Nav.getGoToLinkUrl = Nav_GetGotoLinkUrl;
    Nav.goToLink = Nav_GoToLink;
    Nav.goToLinkOrDialogNewWindow = Nav_GoToLinkOrDialogNewWindow;
    Nav.goToDiscussion = Nav_GoToDiscussion;
    Nav.onClickHook = Nav_AjaxNavigate$OnClickHook;
    Nav.pageUrlValidation = Nav_PageUrlValidation;
    Nav.parseHash = Nav_AjaxNavigate$parseHash;
    Nav.navigate = Nav_STSNavigate;
    Nav.removeMDSQueryParametersFromUrl = Nav_RemoveMDSQueryParametersFromUrl;
    Nav.urlFromHashBag = Nav_AjaxNavigate$_UrlFromHashBag;
    Nav.wantsNewTab = Nav_AjaxNavigate$WantsNewTab;
    function Nav_STSNavigate(Url) {
        Url = URI.getAbsolute(Url);
        if ((Nav.ajaxNavigate.get_search()).indexOf("IsDlg=1") != -1) {
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
            if (shouldOpenInTopFrame(Url))
                window.top.location.href = Nav.pageUrlValidation(Url);
            else
                window.location.href = Nav.pageUrlValidation(Url);
        }
    }
    function shouldOpenInTopFrame(Url) {
        return Nav_GetUrlKeyValue("OpenInTopFrame") == "1" || Nav_isPortalTemplatePage(Url);
    }
    function Nav_isPortalTemplatePage(Url) {
        if (Nav.getUrlKeyValue("PortalTemplate") == "1" || Nav.getUrlKeyValue("PortalTemplate", Boolean(Url)) == "1" || typeof currentCtx != "undefined" && currentCtx != null && typeof currentCtx.isPortalTemplate != "undefined" && Boolean(currentCtx.isPortalTemplate))
            return true;
        else
            return false;
    }
    function Nav_GetUrlKeyValue(keyName, bNoDecode, url, bCaseInsensitive) {
        var keyValue = "";

        if (url == null)
            url = Nav.ajaxNavigate.get_href() + "";
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
            return URI.decodeURIComponent(keyValue);
    }
    function Nav_IsSTSPageUrlValid(url) {
        return url.substr(0, 4) == "http" || url.substr(0, 1) == "/" || url.indexOf(":") == -1;
    }
    function Nav_PageUrlValidation(url, alertString) {
        if (Nav_IsSTSPageUrlValid(url)) {
            return url;
        }
        else {
            if (Boolean(alertString)) {
                alert(alertString);
            }
            return "";
        }
    }
    function Nav_GoToHistoryLink(elm, strVersion) {
        if (elm.href == null)
            return;
        var targetUrl = elm.href;
        var ch = elm.href.indexOf("?") >= 0 ? "&" : "?";
        var srcUrl = ch + "VersionNo=" + strVersion;
        var srcSourceUrl = Nav.getSource();

        if (srcSourceUrl != null && srcSourceUrl != "")
            srcSourceUrl = "&" + "Source=" + srcSourceUrl;
        targetUrl = elm.href + srcUrl + srcSourceUrl;
        if (shouldOpenInTopFrame(targetUrl))
            window.top.location.href = Nav.pageUrlValidation(targetUrl);
        else
            window.location.href = Nav.pageUrlValidation(targetUrl);
    }
    function Nav_GetGotoLinkUrl(elm) {
        if (elm.href == null)
            return null;
        var ch = elm.href.indexOf("?") >= 0 ? "&" : "?";
        var srcUrl = Nav.getSource();

        if (srcUrl != null && srcUrl != "")
            srcUrl = ch + "Source=" + srcUrl;
        var targetUrl = elm.href + srcUrl;

        return targetUrl;
    }
    function Nav_GoToLink(elm) {
        var targetUrl = Nav_GetGotoLinkUrl(elm);

        if (targetUrl == null)
            return;
        if (elm.target === "_blank") {
            window.open(targetUrl, "_blank");
            return;
        }
        var fNavigate = true;

        if (typeof window.top.SPUpdatePage !== 'undefined') {
            fNavigate = window.top.SPUpdatePage(targetUrl);
        }
        if (fNavigate) {
            if (shouldOpenInTopFrame(targetUrl))
                window.top.location.href = Nav.pageUrlValidation(targetUrl);
            else
                window.location.href = Nav.pageUrlValidation(targetUrl);
        }
    }
    function Nav_GoToLinkOrDialogNewWindow(elm) {
        if (elm.href == null)
            return;
        if (Boolean((Nav.ajaxNavigate.get_search()).match(RegExp("[?&]IsDlg=1"))))
            window.open(elm.href);
        else
            Nav_GoToLink(elm);
    }
    function Nav_GoToDiscussion(url) {
        var ch = url.indexOf("?") >= 0 ? "&" : "?";
        var srcUrl = Nav.getSource();

        if (srcUrl != null && srcUrl != "")
            url += ch + "TopicsView=" + srcUrl;
        Nav.navigate(url);
    }
    function Nav_GetSource(defaultSource) {
        if (typeof GetSource2 == "function") {
            return URI_Encoding.encodeURIComponent(GetSource2(defaultSource, null));
        }
        var source = Nav.getUrlKeyValue("Source");

        if (source == "") {
            if (defaultSource != null && defaultSource != "")
                source = defaultSource;
            else
                source = Nav.ajaxNavigate.get_href();
        }
        return URI_Encoding.encodeURIComponent(Nav.pageUrlValidation(source));
    }
}
var ajaxNavigate;
var STSNavigate;
var GetUrlKeyValue;
var STSPageUrlValidation;
var PageUrlValidation;
var AjaxNavigate$isMDSURL;
var isPortalTemplatePage;
var GoToHistoryLink;
var GetGotoLinkUrl;
var GoToLink;
var GoToLinkOrDialogNewWindow;
var GoToDiscussion;
var GetSource;
var RemoveMDSQueryParametersFromUrl;
var AjaxNavigate$_GetWindowLocationNoHash;
var AjaxNavigate$WantsNewTab;
var AjaxNavigate$parseHash;
var AjaxNavigate$_UrlFromHashBag;
var AjaxNavigate$_getAjaxLocationWindow;
var IsSTSPageUrlValid;
var AjaxNavigate$OnClickHook;
var AjaxNavigate$convertRegularURLtoMDSURL;
var AjaxNavigate$convertMDSURLtoRegularURL;
var ProfileCache;

function ProfileCache_module_def() {
    ProfileCache.GetCachedProfile = ProfileCache_GetCachedProfile;
    function ProfileCache_GetCachedProfile() {
        var objProfile = null;
        var ls = BrowserStorage.local;

        if (ls != null) {
            var strProfileData = ls.getItem(ProfileCache_UserProfileLocalStoreKey());

            if (Boolean(strProfileData)) {
                objProfile = JSON.parse(strProfileData);
            }
        }
        return objProfile;
    }
    ProfileCache.UserProfileLocalStoreKey = ProfileCache_UserProfileLocalStoreKey;
    function ProfileCache_UserProfileLocalStoreKey() {
        var retVal = "UserProfileStorage";

        if (window["_spPageContextInfo"] != null) {
            retVal += _spPageContextInfo.webServerRelativeUrl;
        }
        return retVal;
    }
}
var ListModule;

function ListModule_module_def() {
    ListModule.BasePermissions = function() {
    };
    ListModule.BasePermissions.prototype = {
        ManageLists: undefined,
        OpenItems: undefined
    };
    ListModule.Context = List_ContextInfo;
    ListModule.Context.prototype = {
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
        RealHttpRoot: undefined,
        NoScriptEnabled: undefined,
        LastSelectableRowIdx: undefined,
        LastSelectedItemIID: undefined,
        LastRowIndexSelected: undefined,
        RowFocusTimerID: undefined,
        ListData: undefined,
        ListSchema: undefined,
        ModerationStatus: undefined,
        mountPointUrl: undefined,
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
        overrideScope: undefined,
        searchTerm: undefined,
        recursiveView: undefined,
        rootFolderForDisplay: undefined,
        serverUrl: undefined,
        verEnabled: undefined,
        view: undefined,
        queryString: undefined,
        IsClientRendering: undefined,
        wpq: undefined,
        rootFolder: undefined,
        hasRootFolder: undefined,
        IsAppWeb: undefined,
        NewWOPIDocumentEnabled: undefined,
        NewWOPIDocumentUrl: undefined,
        NewWOPIDocumentTypes: undefined,
        AllowCreateFolder: undefined,
        CanShareLinkForNewDocument: undefined,
        VisioDrawingCreationEnabled: undefined,
        noGroupCollapse: undefined,
        SiteTemplateId: undefined,
        RealSiteTemplateId: undefined,
        ExcludeFromOfflineClient: false,
        onItemSelectionChangedHandlers: undefined,
        bNoDelete: false,
        qcb: undefined
    };
    ListModule.Context.Type = {
        EditMenu: 0,
        ViewSelector: 1
    };
    function List_ContextInfo() {
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
        this.onItemSelectionChangedHandlers = [];
    }
    ListModule.Settings = {
        SupportsCallouts: false,
        SupportsDragDrop: false,
        SupportsRibbon: false,
        SupportsQCB: false,
        SupportsUpload: false,
        SupportsInplHash: false,
        SupportsAnimation: false,
        SupportsGrouping: false,
        SupportsNonCSR: false,
        SupportsInPlaceEdit: false,
        SupportsItemDelete: false,
        SupportsCheckout: false,
        SupportsPopup: false,
        SupportsErrorDlg: false,
        SupportsFileAttach: false,
        SupportsCopies: false,
        SupportsModeration: false,
        SupportsMQuery: false,
        SupportsRest: false,
        SupportsDatapipes: false,
        SupportsAddToOneDrive: false,
        SupportsAddToOneDriveQCB: false,
        SupportsTaskListEditMode: false,
        SupportsPeopleHoverCard: false,
        SupportsMaintainUserChrome: false,
        SupportsInfiniteScroll: false,
        SupportsDragDropAttract: false,
        SupportsDragDropAttractB: false,
        SupportsDoclibAccessibility: false,
        SupportsDoclibQCB: false,
        SupportsOldDesktopMenus: false,
        SupportsPolicyTips: false,
        SupportsRightClickECB: false,
        SupportsShortcutLink: false,
        SupportsFileExtensionDefinition: false,
        SupportsFileExtensionControls: false,
        SupportsFileHandlerForAllNonOfficeFiles: false,
        SupportsFileExtensionDataPipe: false,
        SupportsFileHandlerAddInPicker: false,
        SupportsFileHandlerFileCreation: false
    };
}
var BasePermissions;
var ContextInfo;
var CTXTYPE_EDITMENU;
var CTXTYPE_VIEWSELECTOR;
var List_Util;

function List_Util_module_def() {
    ListModule.Util = {};
    ListModule.Util.createViewEditUrl = List_createViewEditUrl;
    ListModule.Util.createItemPropertiesTitleUrl = List_CreateItemPropertiesTitleUrl;
    ListModule.Util.clearSelectedItemsDict = List_ClearSelectedItemsDict;
    ListModule.Util.ctxInitItemState = List_ctxInitItemState;
    ListModule.Util.getAttributeFromItemTable = List_GetAttributeFromItemTable;
    ListModule.Util.getSelectedItemsDict = List_GetSelectedItemsDict;
    ListModule.Util.removeOnlyPagingArgs = List_RemoveOnlyPagingArgs;
    ListModule.Util.removePagingArgs = List_RemovePagingArgs;
    ListModule.Util.showAttachmentRows = List_ShowAttachmentRows;
    ListModule.Util.canUploadFile = List_CanUploadFile;
    ListModule.Util.addWPQtoId = List_addWPQtoId;
    ListModule.Util.isDefinedAndNotNullOrEmpty = List_IsDefinedAndNotNullOrEmpty;
    ListModule.Util.hasEditPermission = List_HasEditPermission;
    ListModule.Util.makeMountedFolderQueryStrParams = List_MakeMountedFolderQueryStrParams;
    ListModule.Util.tryAppendMountedFolderQueryStrParams = List_TryAppendMountedFolderQueryStrParams;
    ListModule.Util.getHostUrl = List_GetHostUrl;
    ListModule.Util.reconcileQstringFilters = List_ReconcileQstringFilters;
    ListModule.Util.Qstring = List_QstringStruct;
    function List_RemoveOnlyPagingArgs(strUrl) {
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
    function List_RemovePagingArgs(strUrl) {
        strUrl = List_RemoveOnlyPagingArgs(strUrl);
        var reFilter1 = /\?Filter=1&*/gi;

        strUrl = strUrl.replace(reFilter1, "?");
        var reFilter2 = /&Filter=1/gi;

        strUrl = strUrl.replace(reFilter2, "");
        var reOrphanedQMark = /\?$/;

        strUrl = strUrl.replace(reOrphanedQMark, "");
        return strUrl;
    }
    function List_GetAttributeFromItemTable(itemTableParam, strAttributeName, strAttributeOldName) {
        var attrValue = itemTableParam != null ? itemTableParam.getAttribute(strAttributeName) : null;

        if (attrValue == null && itemTableParam != null && strAttributeOldName != null)
            attrValue = itemTableParam.getAttribute(strAttributeOldName);
        return attrValue;
    }
    function List_ctxInitItemState(ctxCur) {
        ctxCur.TotalListItems = 0;
        ctxCur.CurrentSelectedItems = 0;
        ctxCur.LastSelectableRowIdx = 0;
        ctxCur.StateInitDone = true;
    }
    function List_ClearSelectedItemsDict(context) {
        if (context != null)
            context.dictSel = [];
    }
    function List_ShowAttachmentRows() {
        var elm = document.getElementById('idAttachmentsTable');
        var elmAttachmentRow = document.getElementById('idAttachmentsRow');

        if (elmAttachmentRow != null) {
            var uri = new URI(Nav.ajaxNavigate.get_href());
            var OnlyIncludeOneField = uri.getQueryParameter('OnlyIncludeOneField');

            if (elm == null || elm.rows.length == 0 || Boolean(OnlyIncludeOneField))
                elmAttachmentRow.style.display = 'none';
            else
                elmAttachmentRow.style.display = 'table-row';
        }
    }
    function List_GetSelectedItemsDict(ctxParam) {
        if (ctxParam != null && ctxParam.dictSel != null) {
            return ctxParam.dictSel;
        }
        return null;
    }
    function List_createViewEditUrl(renderCtx, listItem, useEditFormUrl, appendSource) {
        var titleUrl = [];

        if (useEditFormUrl)
            titleUrl.push(renderCtx.editFormUrl);
        else
            titleUrl.push(renderCtx.displayFormUrl);
        titleUrl.push("&ID=");
        titleUrl.push(listItem.ID);
        titleUrl.push("&ContentTypeID=");
        titleUrl.push(listItem.ContentTypeId);
        if (appendSource) {
            titleUrl.push("&Source=");
            titleUrl.push(Nav.getSource());
        }
        return titleUrl.join('');
    }
    function List_CreateItemPropertiesTitleUrl(renderCtx, listItem) {
        if (renderCtx.inGridMode) {
            return List_createViewEditUrl(renderCtx, listItem, true, false);
        }
        return List_createViewEditUrl(renderCtx, listItem, false, false);
    }
    function List_CanUploadFile(renderCtx) {
        if (typeof SupportsFileUpload == "function" && SupportsFileUpload()) {
            var listSchema = renderCtx.ListSchema;

            return Boolean(listSchema) && Boolean(listSchema.IsDocLib) && !BrowserDetection.userAgent.ipad && !BrowserDetection.userAgent.windowsphone;
        }
        else {
            return false;
        }
    }
    function List_addWPQtoId(id, wpq) {
        if (Boolean(id) && Boolean(wpq)) {
            if (id.lastIndexOf('-') == id.length - 1)
                return id + wpq;
            else
                return id + '-' + wpq;
        }
        else
            return id;
    }
    function List_IsDefinedAndNotNullOrEmpty(obj) {
        return typeof obj !== 'undefined' && obj !== null && obj !== '';
    }
    function List_HasEditPermission(listItem) {
        var permMask = String(listItem.PermMask);

        return (parseInt("0x" + permMask.substring(permMask.length - 1)) & 0x4) != 0;
    }
    function List_GetMountedFolderQueryStrKeyValues(includeRemoteFolderId, includeMPPrefix) {
        var uri = new URI(Nav.ajaxNavigate.get_href());
        var remoteSiteId = uri.getQueryParameter('RemoteSiteId');
        var ret = [];

        if (Boolean(remoteSiteId)) {
            var remoteWebId = uri.getQueryParameter('RemoteWebId');

            if (Boolean(remoteWebId)) {
                var remoteFolderId = null;

                if (includeRemoteFolderId) {
                    remoteFolderId = uri.getQueryParameter('RemoteFolderId');
                }
                if (StringUtil.IsGuid(remoteSiteId) && StringUtil.IsGuid(remoteWebId) && (!includeRemoteFolderId || Boolean(remoteFolderId) && StringUtil.IsGuid(remoteFolderId))) {
                    ret.push({
                        k: "RemoteSiteId",
                        v: remoteSiteId
                    });
                    ret.push({
                        k: "RemoteWebId",
                        v: remoteWebId
                    });
                    if (includeRemoteFolderId) {
                        ret.push({
                            k: "RemoteFolderId",
                            v: remoteFolderId
                        });
                    }
                }
            }
        }
        else {
            var groupSiteUrl = uri.getQueryParameter('GroupSiteUrl');

            if (Boolean(groupSiteUrl)) {
                var groupId = uri.getQueryParameter('GroupId');

                if (Boolean(groupId) && StringUtil.IsGuid(groupId)) {
                    ret.push({
                        k: "GroupSiteUrl",
                        v: groupSiteUrl
                    });
                    ret.push({
                        k: "GroupId",
                        v: groupId
                    });
                }
            }
        }
        if (ret.length > 0) {
            if (includeMPPrefix) {
                var mpPrefix = uri.getQueryParameter('MPPrefix');

                if (Boolean(mpPrefix)) {
                    ret.push({
                        k: "MPPrefix",
                        v: mpPrefix
                    });
                    ret.push("&MPPrefix=");
                    ret.push(mpPrefix);
                }
            }
            return ret;
        }
        return null;
    }
    function List_MakeMountedFolderQueryStrParams(includeRemoteFolderId, includeMPPrefix) {
        var keyValues = List_GetMountedFolderQueryStrKeyValues(includeRemoteFolderId, includeMPPrefix);

        if (keyValues == null) {
            return null;
        }
        var ret = [];

        for (var i = 0; i < keyValues.length; i++) {
            ret.push("&");
            ret.push(keyValues[i].k);
            ret.push("=");
            ret.push(keyValues[i].v);
        }
        return ret.join("");
    }
    function List_TryAppendMountedFolderQueryStrParams(url, includeRemoteFolderId, includeMPPrefix) {
        var keyValues = List_GetMountedFolderQueryStrKeyValues(includeRemoteFolderId, includeMPPrefix);

        if (keyValues == null) {
            return null;
        }
        var uri = new URI(url);

        for (var i = 0; i < keyValues.length; i++) {
            uri.setQueryParameter(String(keyValues[i].k), String(keyValues[i].v));
        }
        return uri.getString();
    }
    function List_GetHostUrl(httpRoot) {
        var hostUrl = httpRoot;

        if (hostUrl.lastIndexOf('/') > hostUrl.indexOf('//') + 1) {
            hostUrl = hostUrl.substring(0, hostUrl.indexOf('/', hostUrl.indexOf('//') + 2));
        }
        return hostUrl;
    }
    function List_QstringStruct(strQuery) {
        if (strQuery == null) {
            strQuery = "";
        }
        if (strQuery.indexOf("?") == 0) {
            strQuery = strQuery.substring(1);
        }
        this.nonFilterParams = {};
        this.filterParams = {};
        var params = strQuery.split("&");
        var i;

        for (i = 0; i < params.length; i++) {
            var param = params[i];
            var keyval = param.split("=");

            if (keyval.length == 2) {
                if (keyval[0].search("^Filter") != -1) {
                    var fieldNumber = keyval[0].match(new RegExp("[0-9]*$"));
                    var filter;

                    if (typeof this.filterParams[fieldNumber] != "undefined") {
                        filter = this.filterParams[fieldNumber];
                    }
                    else {
                        filter = new Object();
                        this.filterParams[fieldNumber] = filter;
                    }
                    var fieldName = keyval[0].match(new RegExp("^Filter[^0-9]*"));

                    filter[fieldName] = keyval[1];
                }
                else {
                    this.nonFilterParams[keyval[0]] = keyval[1];
                }
            }
        }
    }
    List_QstringStruct.prototype.filterParams = {};
    List_QstringStruct.prototype.nonFilterParams = {};
    List_QstringStruct.prototype.toArray = List_QstringStructToArray;
    function List_QstringStructToArray() {
        var output = [];
        var key;
        var keyValuePair;
        var filterIdx = 1;
        var filterParams = this.filterParams;
        var filterParams_length = typeof filterParams.length == "number" ? filterParams.length : 0;

        for (key in this.filterParams) {
            var filter = this.filterParams[key];

            for (key in filter) {
                keyValuePair = [];
                keyValuePair.push(key);
                keyValuePair.push(filterIdx);
                keyValuePair.push("=");
                keyValuePair.push(filter[key]);
                output.push(keyValuePair.join(""));
            }
            filterIdx++;
        }
        for (key in this.nonFilterParams) {
            keyValuePair = [];
            keyValuePair.push(key);
            keyValuePair.push("=");
            keyValuePair.push(this.nonFilterParams[key]);
            output.push(keyValuePair.join(""));
        }
        return output;
    }
    List_QstringStruct.prototype.toString = List_QstringStructToString;
    function List_QstringStructToString() {
        var output = this.toArray();

        return "?" + output.join("&");
    }
    function Diff() {
    }
    Diff.prototype = {
        left: [],
        right: []
    };
    List_QstringStruct.Diff = function(strLeft, strRight) {
        var rgLeft = (new List_QstringStruct(strLeft)).toArray();
        var rgRight = (new List_QstringStruct(strRight)).toArray();
        var temp = {};
        var ret = new Diff;
        var i;

        for (i = 0; i < rgLeft.length; i++) {
            temp[rgLeft[i]] |= 1;
        }
        for (i = 0; i < rgRight.length; i++) {
            temp[rgRight[i]] |= 2;
        }
        for (var key in temp) {
            if (temp[key] == 1) {
                ret.left.push(key);
            }
            else if (temp[key] == 2) {
                ret.right.push(key);
            }
        }
        return ret;
    };
    function List_ReconcileQstringFilters(strUrl1, strUrl2) {
        var qUrls = [];

        qUrls.push(new List_QstringStruct(strUrl1));
        qUrls.push(new List_QstringStruct(strUrl2));
        var output = [];
        var i, j;
        var key;
        var keyValuePair;

        for (i = 0; i < qUrls.length; i++) {
            for (key in qUrls[i].nonFilterParams) {
                if (i == 0 || typeof qUrls[0].nonFilterParams[key] == 'undefined' && i == 1) {
                    keyValuePair = [];
                    keyValuePair.push(key);
                    keyValuePair.push("=");
                    keyValuePair.push(qUrls[i].nonFilterParams[key]);
                    output.push(keyValuePair.join(""));
                }
            }
        }
        var filterIdx = 1;
        var trackEachFilterFieldName = new Object();

        for (i = 0; i < qUrls.length; i++) {
            for (j in qUrls[i].filterParams) {
                var filter = qUrls[i].filterParams[j];
                var filter_FilterField = typeof filter.FilterField == "string" ? filter.FilterField : null;

                if (filter_FilterField == null)
                    filter_FilterField = typeof filter.FilterFields == "string" ? filter.FilterFields : null;
                if (filter_FilterField != null && typeof trackEachFilterFieldName[filter_FilterField] == 'undefined') {
                    for (key in filter) {
                        keyValuePair = [];
                        keyValuePair.push(key);
                        keyValuePair.push(filterIdx);
                        keyValuePair.push("=");
                        keyValuePair.push(filter[key]);
                        output.push(keyValuePair.join(""));
                    }
                    filterIdx++;
                    trackEachFilterFieldName[filter.FilterField] = filter;
                }
            }
        }
        return output.join("&");
    }
}
var ctxInitItemState;
var ClearSelectedItemsDict;
var CreateItemPropertiesTitleUrl;
var GetAttributeFromItemTable;
var GetSelectedItemsDict;
var RemoveOnlyPagingArgs;
var RemovePagingArgs;
var ShowAttachmentRows;
var CanUploadFile;
var addWPQtoId;
var isDefinedAndNotNullOrEmpty;
var HasEditPermission;
var getHostUrl;
var ReconcileQstringFilters;
var QstringStruct;
var SuiteNavCommon;

function SuiteNavCommon_module_def() {
    ;
    ;
    ;
    var c_strUndefined = "undefined";
    var key_Date = "SPSuiteLinksDate";
    var key_Language = "SPSuiteLinksLanguage";
    var key_LinksJson = "SPSuiteLinksJson";
    var key_MySiteClientTag = "SPSuiteLinksMySiteClientTag";
    var key_MySiteLinks = "SPMySiteLinks";
    var key_SuiteNavHeight = "SPSuiteNavHeight";
    var key_UserKey = "SPSuiteLinksUserKey";
    var key_WorkloadsProvisioning = "SPSuiteLinksWorkProv";
    var key_LinksCached = "SPSuiteLinksCached";

    function GetPageContextInfoValueOrNull(infoKey) {
        var retVal = null;
        var pci;

        if (typeof _spPageContextInfo !== c_strUndefined && Boolean(pci = _spPageContextInfo) && typeof pci[infoKey] !== c_strUndefined) {
            retVal = String(pci[infoKey]);
        }
        return retVal;
    }
    function GetCurrentSiteClientTag() {
        var numSiteClientTag = parseInt(GetPageContextInfoValueOrNull("siteClientTag"));

        return numSiteClientTag;
    }
    if (typeof GetCurrentUserKey == c_strUndefined) {
        GetCurrentUserKey = function() {
            return GetPageContextInfoValueOrNull("systemUserKey");
        };
    }
    if (typeof GetCurrentUICultureOrNone == c_strUndefined) {
        GetCurrentUICultureOrNone = function() {
            var currentLanguage = GetPageContextInfoValueOrNull("currentUICultureName");

            if (!Boolean(currentLanguage))
                currentLanguage = "none";
            return currentLanguage;
        };
    }
    var c_mySitePersonalWebTemplate = 21;

    function OnOwnMySite() {
        var isOwnMySite = false;
        var isPersonalSiteTemplate = parseInt(GetPageContextInfoValueOrNull("webTemplate")) == c_mySitePersonalWebTemplate;

        if (isPersonalSiteTemplate) {
            var strMySiteLinks;
            var userProfile = ProfileCache.GetCachedProfile();

            if (userProfile != null) {
                isOwnMySite = Boolean(userProfile.isSelf);
            }
            else if (Boolean(strMySiteLinks = BrowserStorage.local.getItem(key_MySiteLinks))) {
                try {
                    var objMySiteLinks = JSON.parse(strMySiteLinks);
                    var currentWebUrl = GetPageContextInfoValueOrNull("webAbsoluteUrl");
                    var docsUrl;

                    isOwnMySite = Boolean(currentWebUrl) && objMySiteLinks != null && Boolean(docsUrl = objMySiteLinks.Docs) && docsUrl.indexOf(currentWebUrl) == 0;
                }
                catch (exParseMySiteLinks) { }
            }
        }
        return isOwnMySite;
    }
    function GetCachedJsonIfValid() {
        var linksJson = null;
        var ls = BrowserStorage.local;

        if (GetCurrentUserKey() == ls.getItem(key_UserKey) && GetCurrentUICultureOrNone() == ls.getItem(key_Language) && (!OnOwnMySite() || GetCurrentSiteClientTag() == parseInt(ls.getItem(key_MySiteClientTag)))) {
            var cachedLinksJson = ls.getItem(key_LinksJson);

            if (typeof cachedLinksJson == 'string') {
                linksJson = cachedLinksJson;
            }
        }
        return linksJson;
    }
    if (typeof ExtractSuiteMetadata == c_strUndefined) {
        ExtractSuiteMetadata = function(navBarDataJson) {
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
        };
    }
    if (typeof ExtractSuiteProperty == c_strUndefined) {
        ExtractSuiteProperty = function(navBarDataJson, jsonPropName) {
            try {
                var suiteData = JSON.parse(navBarDataJson);

                if (suiteData != null) {
                    return suiteData[jsonPropName];
                }
            }
            catch (ex) { }
            return undefined;
        };
    }
    if (typeof ExtractSuiteVersion == c_strUndefined) {
        ExtractSuiteVersion = function(navBarDataJson) {
            var suiteVersion = ExtractSuiteProperty(navBarDataJson, "SPSuiteVersion");

            if (typeof suiteVersion == "number") {
                return suiteVersion;
            }
            return -1;
        };
    }
    if (typeof ExtractIsMobile == c_strUndefined) {
        ExtractIsMobile = function(navBarDataJson) {
            var isMobile = ExtractSuiteProperty(navBarDataJson, "SPIsMobile");

            if (typeof isMobile == "boolean") {
                return isMobile;
            }
            return false;
        };
    }
    if (typeof ExtractSuiteLinks == c_strUndefined) {
        ExtractSuiteLinks = function(navBarDataJson) {
            var suiteVersion = ExtractSuiteVersion(navBarDataJson);

            if (suiteVersion != -1) {
                var navBarData = ExtractSuiteProperty(navBarDataJson, "NavBarData");

                return typeof navBarData == "string" ? String(navBarData) : JSON.stringify(navBarData);
            }
            return navBarDataJson;
        };
    }
    if (typeof ExtractSuiteNavBarData == c_strUndefined) {
        ExtractSuiteNavBarData = function(suiteDataObject) {
            if (suiteDataObject != null) {
                var suiteMetadata = ExtractSuiteMetadata(suiteDataObject);

                return suiteMetadata.NavBarData;
            }
            return null;
        };
    }
    function ExtractNavBarDataFromObject(suiteNavData) {
        var navBarData = null;

        if (suiteNavData != null) {
            navBarData = suiteNavData.NavBarData != null ? suiteNavData.NavBarData : suiteNavData;
        }
        return navBarData;
    }
    if (typeof GetSuiteLinks == c_strUndefined) {
        GetSuiteLinks = function(callBackToRetrieveData, callBackToProcessData, suiteVersion, isMobile, forceRetrieveData) {
            if (typeof suiteVersion != "number")
                suiteVersion = 1;
            var bIncludeMetadata = suiteVersion > 1;
            var linksCacheKey = null;
            var linksJson = !forceRetrieveData ? GetCachedJsonIfValid() : null;
            var linksJsonIsStale = false;

            if (linksJson != null) {
                var linksDate = Date.parse(String(BrowserStorage.local.getItem(key_Date)));
                var msUntilDataStale = 24 * 60 * 60 * 1000;
                var numProvisioning = Number(BrowserStorage.local.getItem(key_WorkloadsProvisioning));

                if (numProvisioning > 0) {
                    msUntilDataStale = 10 * 1000;
                }
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
                        CacheSuiteLinks(data);
                        if (callBackToProcessData != null)
                            callBackToProcessData(bIncludeMetadata ? data : ExtractSuiteLinks(data));
                    });
                }
                else {
                    if (callBackToProcessData != null)
                        callBackToProcessData(null);
                }
                return;
            }
            if (suiteVersion != ExtractSuiteVersion(linksJson) || Boolean(isMobile) != ExtractIsMobile(linksJson)) {
                if (Boolean(callBackToRetrieveData) && (typeof CacheSuiteLinks == c_strUndefined || typeof CacheSuiteLinks._reloadingData != "boolean" || Boolean(CacheSuiteLinks._reloadingData))) {
                    CacheSuiteLinks._reloadingData = true;
                    ClearSuiteLinksCache();
                    GetSuiteLinks(callBackToRetrieveData, callBackToProcessData, suiteVersion, isMobile);
                    return;
                }
            }
            if (linksJsonIsStale) {
                if (callBackToRetrieveData != null) {
                    callBackToRetrieveData(function(data) {
                        if (CacheSuiteLinks(data)) {
                            linksJson = data;
                        }
                        if (callBackToProcessData != null && suiteVersion > 1)
                            callBackToProcessData(bIncludeMetadata ? data : ExtractSuiteLinks(data));
                    });
                }
            }
            if (callBackToProcessData != null)
                callBackToProcessData(bIncludeMetadata ? linksJson : ExtractSuiteLinks(linksJson));
        };
    }
    function CountWorkloadsProvisioning(linksData) {
        var numProvisioning = 0;
        var navBarData = ExtractNavBarDataFromObject(linksData);

        if (navBarData == null) {
            return numProvisioning;
        }
        var workloadLinks = navBarData.WorkloadLinks;
        var numWorkloadLinks = workloadLinks != null ? workloadLinks.length : 0;

        for (var iLink = 0; iLink < numWorkloadLinks; iLink++) {
            var wLink = workloadLinks[iLink];

            if (wLink != null && wLink.Url == null)
                numProvisioning++;
        }
        return numProvisioning;
    }
    if (typeof CacheSuiteLinks == c_strUndefined) {
        CacheSuiteLinks = function(linksJson) {
            var numWorkloadsProvisioning = 0;

            CacheSuiteLinks._reloadingData = false;
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
                numWorkloadsProvisioning = CountWorkloadsProvisioning(linksData);
            }
            catch (ex) {
                return false;
            }
            var currentLanguage = GetCurrentUICultureOrNone();
            var ls = BrowserStorage.local;

            ls.setItem(key_LinksJson, linksJson);
            ls.setItem(key_Language, currentLanguage);
            ls.setItem(key_Date, new Date());
            ls.setItem(key_UserKey, GetCurrentUserKey());
            ls.setItem(key_WorkloadsProvisioning, numWorkloadsProvisioning);
            if (numWorkloadsProvisioning < 1) {
                ls.removeItem(key_WorkloadsProvisioning);
            }
            BrowserStorage.session.setItem(key_LinksCached, true);
            if (OnOwnMySite()) {
                ls.setItem(key_MySiteClientTag, GetCurrentSiteClientTag());
            }
            return true;
        };
    }
    if (typeof ClearSuiteLinksCache == c_strUndefined) {
        ClearSuiteLinksCache = function(bPreserveMySiteLinks) {
            var lsKeys = [key_LinksJson, key_Language, key_Date, key_UserKey, key_MySiteClientTag, key_SuiteNavHeight];

            if (!bPreserveMySiteLinks)
                lsKeys.push(key_MySiteLinks);
            for (var i = 0; i < lsKeys.length; i++) {
                BrowserStorage.local.removeItem(lsKeys[i]);
            }
            BrowserStorage.session.removeItem(key_LinksCached);
        };
    }
    SuiteNavCommon.GetCurrentUserKey = GetCurrentUserKey;
    SuiteNavCommon.GetCurrentUICultureOrNone = GetCurrentUICultureOrNone;
    SuiteNavCommon.ExtractSuiteMetadata = ExtractSuiteMetadata;
    SuiteNavCommon.ExtractSuiteProperty = ExtractSuiteProperty;
    SuiteNavCommon.ExtractSuiteVersion = ExtractSuiteVersion;
    SuiteNavCommon.ExtractIsMobile = ExtractIsMobile;
    SuiteNavCommon.ExtractSuiteLinks = ExtractSuiteLinks;
    SuiteNavCommon.ExtractSuiteNavBarData = ExtractSuiteNavBarData;
    SuiteNavCommon.GetSuiteLinks = GetSuiteLinks;
    SuiteNavCommon.CacheSuiteLinks = CacheSuiteLinks;
    SuiteNavCommon.ClearSuiteLinksCache = ClearSuiteLinksCache;
}
var OnePageUtil;

function OnePageUtil_module_def() {
    OnePageUtil.overrideAddEventListener = function OnePageUtil_overrideAddEventListener(eventTarget) {
        if (typeof eventTarget.addEventListener != 'undefined' && !eventTarget.onePageOverrideAddEventListenerDone) {
            if (!Boolean(eventTarget.eventListenerStore)) {
                eventTarget.eventListenerStore = {};
            }
            var store = eventTarget.eventListenerStore;

            eventTarget.addEventListenerBase = eventTarget.addEventListener;
            eventTarget.addEventListener = function(type, listener, useCapture) {
                eventTarget.addEventListenerBase.apply(this, arguments);
                if (!Boolean(store[type])) {
                    store[type] = [];
                }
                var _eventList = store[type];

                for (var index = 0; index != _eventList.length; index++) {
                    if (_eventList[index] === listener) {
                        return;
                    }
                }
                _eventList.push(listener);
            };
            eventTarget.onePageOverrideAddEventListenerDone = true;
        }
    };
    OnePageUtil.overrideRemoveEventListener = function OnePageUtil_overrideRemoveEventListener(eventTarget) {
        if (typeof eventTarget.removeEventListener != 'undefined' && !eventTarget.onePageOverrideRemoveEventListenerDone) {
            if (!Boolean(eventTarget.eventListenerStore)) {
                eventTarget.eventListenerStore = {};
            }
            var store = eventTarget.eventListenerStore;
            var _eventList = [];

            eventTarget.removeEventListenerBase = eventTarget.removeEventListener;
            eventTarget.removeEventListener = function(type, handler, useCapture) {
                if (handler instanceof Function) {
                    eventTarget.removeEventListenerBase.apply(this, arguments);
                }
                if (Boolean(type) && Boolean(store[type])) {
                    _eventList = store[type];
                    for (var index = 0; index < _eventList.length; index++) {
                        var _handler = _eventList[index];

                        if (!Boolean(handler)) {
                            eventTarget.removeEventListenerBase(type, _handler);
                        }
                        else if (_handler === handler) {
                            _eventList.splice(index, 1);
                            break;
                        }
                    }
                    if (_eventList.length == 0 || !Boolean(handler)) {
                        delete store[type];
                    }
                }
                else if (!Boolean(type)) {
                    for (var etype in store) {
                        _eventList = store[etype];
                        for (var idx = 0; idx < _eventList.length; idx++) {
                            eventTarget.removeEventListenerBase(etype, _eventList[idx]);
                        }
                        delete store[etype];
                    }
                }
            };
            eventTarget.onePageOverrideRemoveEventListenerDone = true;
        }
    };
    OnePageUtil.overrideEventListenerFunctions = function OnePageUtil_overrideEventListenerFunctions(eventTarget) {
        OnePageUtil.overrideAddEventListener(eventTarget);
        OnePageUtil.overrideRemoveEventListener(eventTarget);
    };
    OnePageUtil.undoOverrideEventListenerFunctions = function OnePageUtil_undoOverrideEventListenerFunctions(eventTarget) {
        eventTarget.addEventListener = eventTarget.addEventListenerBase;
        delete eventTarget.addEventListenerBase;
        eventTarget.removeEventListener = eventTarget.removeEventListenerBase;
        delete eventTarget.removeEventListenerBase;
        delete eventTarget.eventListenerStore;
        delete eventTarget.onePageOverrideRemoveEventListenerDone;
    };
    OnePageUtil.timerManagerClass = function timerManagerClass() {
        var intervals = [];
        var timeouts = [];
        var setIntervalBase;
        var clearIntervalBase;
        var setTimeoutBase;
        var clearTimeoutBase;
        var timerOverrideDone = false;
        var arrayIndexOf = function(targetArray, item) {
            if (typeof targetArray.indexOf != 'undefined') {
                return targetArray.indexOf(item);
            }
            if (typeof Array.indexOf != 'undefined') {
                return Array.indexOf(targetArray, item);
            }
            return undefined;
        };

        this.overrideTimer = function() {
            if (!timerOverrideDone) {
                setIntervalBase = window.setInterval;
                clearIntervalBase = window.clearInterval;
                setTimeoutBase = window.setTimeout;
                clearTimeoutBase = window.clearTimeout;
                window.setInterval = function() {
                    var retVal;

                    if ("function" == typeof setIntervalBase) {
                        retVal = setIntervalBase.apply(window, arguments);
                    }
                    else {
                        retVal = setIntervalBase(arguments[0], arguments[1]);
                    }
                    if ('undefined' != typeof retVal) {
                        intervals.push(retVal);
                    }
                    return retVal;
                };
                window.clearInterval = function() {
                    var id = arguments[0];

                    if ("function" == typeof clearIntervalBase) {
                        clearIntervalBase.apply(window, arguments);
                    }
                    else {
                        clearIntervalBase(id);
                    }
                    if (typeof id != 'undefined') {
                        var idx = arrayIndexOf(intervals, id);

                        if (-1 != idx) {
                            intervals.splice(idx, 1);
                        }
                    }
                };
                window.setTimeout = function() {
                    var retVal;

                    if (arguments.length > 1 && 'function' == typeof arguments[0]) {
                        var fn = arguments[0];

                        arguments[0] = function() {
                            var argumentsArray1 = [].slice.call(arguments);

                            fn.apply(null, argumentsArray1);
                            if ('undefined' != typeof retVal) {
                                var idx = arrayIndexOf(timeouts, retVal);

                                if (-1 != idx) {
                                    timeouts.splice(idx, 1);
                                }
                            }
                        };
                    }
                    if ('function' == typeof setTimeoutBase) {
                        var argumentsArray = [].slice.call(arguments);

                        retVal = setTimeoutBase.apply(window, argumentsArray);
                    }
                    else {
                        retVal = setTimeoutBase(arguments[0], arguments[1]);
                    }
                    if ('undefined' != typeof retVal) {
                        timeouts.push(retVal);
                    }
                    return retVal;
                };
                window.clearTimeout = function() {
                    var id = arguments[0];

                    if ('function' == typeof clearTimeoutBase) {
                        clearTimeoutBase.apply(window, arguments);
                    }
                    else {
                        clearTimeoutBase(id);
                    }
                    if (typeof id != 'undefined') {
                        var idx = arrayIndexOf(timeouts, id);

                        if (-1 != idx) {
                            timeouts.splice(idx, 1);
                        }
                    }
                };
                timerOverrideDone = true;
            }
        };
        this.clearAllIntervals = function clearAllIntervals() {
            while (intervals.length > 0) {
                clearIntervalBase(intervals[0]);
                intervals.splice(0, 1);
            }
        };
        this.clearAllTimeouts = function clearAllTimeouts() {
            while (timeouts.length > 0) {
                clearTimeoutBase(timeouts[0]);
                timeouts.splice(0, 1);
            }
        };
        this.undoOverrideTimer = function undoOverrideTimer() {
            window.setInterval = setIntervalBase;
            window.clearInterval = clearIntervalBase;
            window.setTimeout = setTimeoutBase;
            window.clearTimeout = clearTimeoutBase;
        };
        if (!Boolean(arguments.callee['_singletonInstance'])) {
            arguments.callee._singletonInstance = this;
        }
        return arguments.callee._singletonInstance;
    };
    var _timerManager = null;

    OnePageUtil.GetTimerManager = function() {
        if (null == _timerManager)
            _timerManager = new OnePageUtil.timerManagerClass();
        return _timerManager;
    };
}
var Flighting;
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
    if (!BrowserDetection.userAgent.ie && Boolean(document.getElementsByName))
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
function AttachEvent(eventName, eventFunc, el) {
    if (!el)
        el = window;
    if (eventName == 'domLoad') {
        eventName = typeof el.addEventListener != 'undefined' && el.addEventListener && BrowserDetection.userAgent.nav ? 'DOMContentLoaded' : 'load';
    }
    else if (eventName != 'undefined' && eventName != null && eventName.indexOf("touch") == 0 && BrowserDetection.userAgent.msTouch) {
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
        eventName = typeof el.removeEventListener != 'undefined' && el.removeEventListener && BrowserDetection.userAgent.nav ? 'DOMContentLoaded' : 'load';
    }
    if (typeof eventFunc == 'string')
        eventFunc = new Function(eventFunc);
    if (typeof el.removeEventListener != 'undefined' && el.removeEventListener)
        el.removeEventListener(eventName, eventFunc, false);
    else if (typeof el.detachEvent != 'undefined')
        el.detachEvent('on' + eventName, eventFunc);
}
function GetEventKeyCode(e) {
    if (BrowserDetection.userAgent.nav)
        return e.which;
    else
        return e.keyCode;
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
function EEDecodeSpecialChars(str) {
    var decodedStr = str.replace(/&quot;/g, "\"");

    decodedStr = decodedStr.replace(/&gt;/g, ">");
    decodedStr = decodedStr.replace(/&lt;/g, "<");
    decodedStr = decodedStr.replace(/&#39;/g, "'");
    decodedStr = decodedStr.replace(/&amp;/g, "&");
    return decodedStr;
}
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
        needsSecondPass = needsSecondPass || value === void 0 && /^\d+$/.test(key);
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
function CollectRUMNonMDS() {
    var registerFunc = function() {
        var rWsa = GetRUMWSA();

        if (IsNullOrUndefined(rWsa))
            return;
        rWsa.CollectRUMDataForNonMDS();
    };
    var rumSod = _v_dictSod['sp.core.js'];

    if (IsNullOrUndefined(rumSod)) {
        return;
    }
    EnsureScriptFunc('SP.core.js', "SP.RUMLogger", registerFunc);
    EnsureScriptFunc("sp.core.js", "SP.SlapiInternal", function() {
        var perfLogger = IsNullOrUndefined(PerformanceLogger) ? null : PerformanceLogger.GetLogger();

        if (!IsNullOrUndefined(perfLogger)) {
            perfLogger.CollectW3CPerfTimings();
            var pageTransitionType = 0;

            if (SP.ScriptUtility.isNullOrEmptyString(document.referrer)) {
                pageTransitionType = SP.PageTransitionType.nonMdsToNonMds;
            }
            else {
                if (document.referrer.indexOf('/start.aspx') !== -1) {
                    pageTransitionType = SP.PageTransitionType.mdsToNonMds;
                }
                else {
                    pageTransitionType = SP.PageTransitionType.nonMdsToNonMds;
                }
            }
            perfLogger.WritePageTransitionType(pageTransitionType);
            if (typeof g_duration != "undefined" && typeof g_iisLatency != "undefined") {
                perfLogger.WriteServerSideLatency(g_duration, g_iisLatency);
            }
        }
    });
}
var LegalUrlChars;
var poundIndex;
var percentIndex;

function SupportPound() {
    return typeof _spPageContextInfo != 'undefined' && typeof _spPageContextInfo.supportPoundStorePath == 'boolean' && Boolean(_spPageContextInfo.supportPoundStorePath);
}
function SupportPercent() {
    return typeof _spPageContextInfo != 'undefined' && typeof _spPageContextInfo.supportPercentStorePath == 'boolean' && Boolean(_spPageContextInfo.supportPercentStorePath);
}
function AdmBuildParam(stPattern) {
    var re;
    var i;

    for (i = 1; i < arguments.length; i++) {
        re = new RegExp("\\^" + String(i));
        stPattern = stPattern.replace(re, arguments[i]);
    }
    return stPattern;
}
function IndexOfIllegalCharInUrlLeafName(strLeafName, noPoundPercent) {
    var supportPound = SupportPound() && !noPoundPercent;
    var supportPercent = SupportPercent() && !noPoundPercent;

    for (var i = 0; i < strLeafName.length; i++) {
        var ch = strLeafName.charCodeAt(i);

        if (strLeafName.charAt(i) == '.' && i == strLeafName.length - 1)
            return i;
        if (ch < 160 && (strLeafName.charAt(i) == '/' || !LegalUrlChars[ch] && !(ch == poundIndex && supportPound) && !(ch == percentIndex && supportPercent)))
            return i;
    }
    return -1;
}
function IndexOfIllegalCharInUrlPath(strPath) {
    var supportPound = SupportPound();
    var supportPercent = SupportPercent();

    for (var i = 0; i < strPath.length; i++) {
        var ch = strPath.charCodeAt(i);

        if (ch < 160 && (!LegalUrlChars[ch] && !(ch == poundIndex && supportPound) && !(ch == percentIndex && supportPercent)))
            return i;
    }
    return -1;
}
function UrlContainsIllegalStrings(strPath) {
    if (strPath.indexOf("//") >= 0 || strPath.indexOf("./") >= 0 || strPath.lastIndexOf(".") == strPath.length - 1) {
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
    if (href.match(new RegExp("^[^?]{" + (640 + 1).toString() + "}")) != null) {
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
var browserUpdatedWithServerRedirectedUrl;

function UpdateUrlWhenServerRedirects() {
    var pageContextInfo = window['_spPageContextInfo'];

    if (Flighting.VariantConfiguration.IsExpFeatureClientEnabled(708) && !(window["OffSwitch"] == null || OffSwitch.IsActive("90329B12-2C48-4DBE-A1B9-08BC2BBA2C26")) && (window["OffSwitch"] == null || OffSwitch.IsActive("DC0DFB52-4F4C-479D-9D07-43DE94F3123F")) && (window["OffSwitch"] == null || OffSwitch.IsActive("3EDB0B41-115A-410E-9C6B-9390F1D1AD94") || !browserUpdatedWithServerRedirectedUrl) && Boolean(pageContextInfo) && Boolean(pageContextInfo.serverRedirectedUrl)) {
        var serverRedirectedUrl = pageContextInfo.serverRedirectedUrl;

        if (!(window["OffSwitch"] == null || OffSwitch.IsActive("F1754AB4-0FF5-4169-A2E1-7665F6FF4E9F")) && Boolean(pageContextInfo.isSPO) && window.location.protocol.toLowerCase() === 'https:') {
            serverRedirectedUrl = serverRedirectedUrl.replace(/^http:\/\//i, 'https://');
        }
        if (Boolean(window.history) && Boolean(window.history.replaceState)) {
            window.history.replaceState({
                reason: "SPServerRedirect"
            }, "SPServerRedirect", serverRedirectedUrl);
            browserUpdatedWithServerRedirectedUrl = true;
        }
        else {
            window.location.href = serverRedirectedUrl;
        }
    }
}
function OnePageNavigationHandler(evt) {
    var registerFunc = function registerOnePageNavigationFunc() {
        performModernOnePageNavigationForFasterOnePage(evt);
    };

    EnsureScriptFunc('SP.core.js', "performModernOnePageNavigationForFasterOnePage", registerFunc);
}
function isBrowserSupportedModernApp() {
    var browserSupported = true;

    try {
        var a = navigator.userAgent.toLowerCase();
        var i = a.indexOf("msie");

        if (-1 !== i) {
            var v = parseInt(a.substring(i + 5));
            var supportedMode = !(window["OffSwitch"] == null || OffSwitch.IsActive("68B2E51A-1AC2-4ABF-924A-DFB7CD5C18E1")) ? 11 : 10;

            if (v < supportedMode && Boolean(document.documentMode) && document.documentMode < supportedMode) {
                browserSupported = false;
            }
        }
    }
    catch (e) { }
    return browserSupported;
}
function UserHasPermissionHigh(permissionLevel) {
    var pageContextInfo = window['_spPageContextInfo'];
    var webPermMasks = pageContextInfo['webPermMasks'];
    var webPermMasksHigh = webPermMasks != null ? Number(webPermMasks["High"]) : 0;
    var hasPerm = (webPermMasksHigh & permissionLevel) == permissionLevel;

    return hasPerm;
}
function ModernUXOptOutCookieIsOn() {
    return GetCookie('splnu') === '0';
}
function PrepareForModernOnePageNavigation() {
    var SPBasePermissions_UseRemoteAPIs = 0x20;

    if (Flighting.VariantConfiguration.IsExpFeatureClientEnabled(1) && !(window["OffSwitch"] == null || OffSwitch.IsActive("79D8320F-D4AA-45D1-A83F-9B7AF522EE5C")) && isBrowserSupportedModernApp() && (window["OffSwitch"] == null || OffSwitch.IsActive("32012162-C12F-453D-A7EF-E00E74140C44") || UserHasPermissionHigh(SPBasePermissions_UseRemoteAPIs) && !ModernUXOptOutCookieIsOn())) {
        var docLibLinks = document.querySelectorAll('[onepagenavigationaction="1"]');

        for (var index = 0; index < docLibLinks.length; index++) {
            var link = docLibLinks[index];

            if (!!link.addEventListener) {
                link.addEventListener('click', OnePageNavigationHandler, false);
            }
            else if (!!link.attachEvent) {
                link.attachEvent('onclick', OnePageNavigationHandler);
            }
        }
        var registerFunc = function registerOnePageNavigationFunc() {
            setTimeout(preloadModernApp, 1000);
        };

        EnsureScriptFunc('SP.core.js', "preloadModernApp", registerFunc);
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
function UpdateFormDigest(serverRelativeWebUrl, updateInterval) {
    try {
        var pageContextInfo = window['_spPageContextInfo'];

        if (pageContextInfo == null || pageContextInfo.updateFormDigestPageLoaded == null) {
            return;
        }
        var now = new Date();

        if (now.getTime() - pageContextInfo.updateFormDigestPageLoaded.getTime() < updateInterval) {
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
        pageContextInfo.updateFormDigestPageLoaded = new Date();
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

    if (IsSupportedMacBrowser() && !browseris.chrome) {
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
                document.cookie = "stsSyncAppName=0;";
                document.cookie = "stsSyncIconPath=0;";
                return stsSyncData;
            }
        }
        if (browseris.ie5up && browseris.win32 || IsSupportedMacBrowser()) {
            var strAppName;
            var strIconName;

            try {
                if (strType != "")
                    GetStssyncHandler(".3");
                if (!g_objStssync) {
                    if (strType != "" && strType != "calendar" && strType != "contacts") {
                        document.cookie = "stsSyncAppName=0;";
                        document.cookie = "stsSyncIconPath=0;";
                        return stsSyncData;
                    }
                    GetStssyncHandler(".2");
                    if (!g_objStssync || typeof g_objStssync.GetStssyncAppName == 'undefined' || !Boolean(strAppName = g_objStssync.GetStssyncAppName())) {
                        document.cookie = "stsSyncAppName=0;";
                        document.cookie = "stsSyncIconPath=0;";
                        return stsSyncData;
                    }
                }
                else {
                    if (typeof g_objStssync.GetStssyncAppNameForType == 'undefined' || !Boolean(strAppName = g_objStssync.GetStssyncAppNameForType(strType))) {
                        document.cookie = "stsSyncAppName=0;";
                        document.cookie = "stsSyncIconPath=0;";
                        return stsSyncData;
                    }
                }
            }
            catch (e) {
                SP.DebugLogger.Write("FailureGetStssync", SP.DebugLogger.LoggingLevel.Interesting, "Failed to access stssync ActiveX");
                document.cookie = "stsSyncAppName=0;";
                document.cookie = "stsSyncIconPath=0;";
                return stsSyncData;
            }
            document.cookie = "stsSyncAppName=" + escapeProperly(strAppName) + ";";
            try {
                if (typeof g_objStssync.GetStssyncIconName == 'undefined')
                    throw 0;
                strIconName = g_objStssync.GetStssyncIconName();
                strIconName = strPrefix + strIconName;
                document.cookie = "stsSyncIconPath=" + escapeProperly(strIconName) + ";";
            }
            catch (e) {
                document.cookie = "stsSyncIconPath=0;";
                strIconName = strImgPathDefault;
            }
        }
        else {
            strAppName = strTextDefault;
            strIconName = strImgPathDefault;
            document.cookie = "stsSyncAppName=" + escapeProperly(strTextDefault);
            document.cookie = "stsSyncIconPath=" + escapeProperly(strImgPathDefault);
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
    var themedImageUrl;
    var imageUrl = FallbackImagePath + FileName;
    var useClientSideTheming = SPThemeUtils.UseClientSideTheming();
    var pageContextInfo = window['_spPageContextInfo'];

    if (pageContextInfo != null && !useClientSideTheming) {
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
    themedImageUrl = GetImageUrlWithRevision(imageUrl);
    if (useClientSideTheming) {
        (Theming.GetPageManager()).RegisterAllImages();
        themedImageUrl += "#ThemeKey=";
        themedImageUrl = (Theming.GetPageManager()).GetThemedImageSrc(themedImageUrl);
    }
    return themedImageUrl;
}
function GetImageUrlWithRevision(imageUrl) {
    return imageUrl.search(/[?]/) > -1 ? imageUrl : imageUrl + "?" + "rev=44";
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
                img.src = "/_layouts/15/images/blank.gif?rev=44";
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
function LoginAsAnother(url, bUseSource) {
    document.cookie = "loginAsDifferentAttemptCount=0";
    if (bUseSource == "1") {
        GoToPage(url);
    }
    else {
        var ch = url.indexOf("?") >= 0 ? "&" : "?";

        url += ch + "Source=" + escapeProperly(window.location.href);
        Nav.navigate(url);
    }
}
function CLVPFromEvent(evt) {
    return DeferCall('CLVPFromEventReal', evt);
}
function STSNavigateToView(evt, url) {
    Nav.navigate(url);
}
function STSNavigate2(evt, url) {
    Nav.navigate(url);
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
    Nav.navigate(url);
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
        if (typeof SP != "undefined" && SP != null && SP.QoS != null)
            SP.QoS.WriteUserEngagement("CreateFolder_Old");
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
    var bUpdateImgAltText = true;

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
        if (bUpdateImgAltText)
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
        EnsureScriptParams("inplview", "inplview.ExpGroup", obj, groupName);
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
    if (Boolean(elem.className) && typeof elem.className.indexOf != 'undefined') {
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
var _v_dictCss;
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
function SodCallbackInfo(fn, errorFn, expectedTypeName) {
    this.success = fn;
    this.error = errorFn;
    this.expectedType = expectedTypeName;
}
function AreAllSodsLoaded() {
    var sod;

    if (g_PendingLoadSodQueue != null) {
        for (var i = 0; i < g_PendingLoadSodQueue.length; i++) {
            var sodQueueEntry = g_PendingLoadSodQueue[i];

            sod = sodQueueEntry.sod;
            if (Boolean(sod) && sod.state != Sods.loaded) {
                return false;
            }
        }
    }
    if (g_spPreFetchKeys != null) {
        for (var idx = 0; idx < g_spPreFetchKeys.length; idx++) {
            var key = g_spPreFetchKeys[idx];

            sod = _v_dictSod[key];
            if (Boolean(sod) && sod.state != Sods.loaded) {
                return false;
            }
        }
    }
    for (var scriptKey in _v_dictSod) {
        sod = _v_dictSod[scriptKey];
        if (Boolean(sod) && (sod.state == Sods.loading || sod.state == Sods.pending || sod.state == Sods.error))
            return false;
    }
    return true;
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
function RegisterOnDemandCss(key, url) {
    _v_dictCss[key] = new Sod(url, key);
}
function LoadCssOnDemand(key, callback) {
    var sod = _v_dictCss[key];

    if (sod != null)
        _ensureCssLink(sod.url, callback);
    else if (callback != null)
        callback();
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
function NormalizeListViewSodKey(inputJS) {
    var isLoadingListViewJS = typeof _spPageContextInfo !== "undefined" && typeof _spPageContextInfo.isSLV !== "undefined" && Boolean(_spPageContextInfo) && Boolean(_spPageContextInfo.isSLV);

    if (isLoadingListViewJS) {
        var script = inputJS.toLowerCase();
        var isInplview = script == "inplview" || script == "inplview.js";
        var isClienttemplates = script == "clienttemplates" || script == "clienttemplates.js";
        var isClientrenderer = script == "clientrenderer" || script == "clientrenderer.js";

        if (isInplview || isClienttemplates || isClientrenderer) {
            return "listview.js";
        }
    }
    return inputJS;
}
function ResetListViewSods(bReset) {
    ResetSod("inplview", bReset);
    ResetSod("inplview.js", bReset);
    ResetSod("clienttemplates", bReset);
    ResetSod("clienttemplates.js", bReset);
    ResetSod("clientrenderer", bReset);
    ResetSod("clientrenderer.js", bReset);
}
function ResetSod(sodkey, bReset) {
    var sod = _v_dictSod[sodkey];

    if (Boolean(sod)) {
        sod.reset = bReset;
    }
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
function LoadSodByKey(key, fn, bSync, errorFn, expectedTypeName) {
    key = NormalizeSodKey(key);
    key = NormalizeListViewSodKey(key);
    var sod = _v_dictSod[key];

    if (fn != null && sod != null) {
        if (sod.qfn == null)
            sod.qfn = [];
        sod.qfn.push(new SodCallbackInfo(fn, errorFn, expectedTypeName));
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
    if (sod.state == Sods.error) {
        NotifyOnLoad(sod);
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
            var dep = NormalizeListViewSodKey(depkeys[i]);

            sodDep = _v_dictSod[dep];
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
                if (!IsSodLoaded(sodDep) && (bSync || sodDep.state != Sods.loading && sodDep.state != Sods.error)) {
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
        var scriptToRun = "";
        var req;

        if (browseris.ie9down) {
            var xdr = new XDomainRequest();
            var loadedXDR = false;

            xdr.onerror = function() {
                loadedXDR = true;
            };
            xdr.ontimeout = function() {
                loadedXDR = true;
            };
            xdr.onload = function() {
                loadedXDR = true;
            };
            xdr.open('GET', sod.url);
            xdr.send();
            while (!loadedXDR) {
                req = new XMLHttpRequest;
                req.open('GET', "/_layouts/15/blank.htm", false);
                req.setRequestHeader("If-Modified-Since", (new Date()).toUTCString());
                req.send(null);
            }
            scriptToRun = xdr.responseText;
        }
        else {
            req = new XMLHttpRequest;
            req.open('GET', sod.url, false);
            req.send(null);
            scriptToRun = req.responseText;
        }
        var ds = document.createElement('script');

        (document.getElementsByTagName('head'))[0].appendChild(ds);
        var wasLoading = sod.state == Sods.loading;

        ds.text = scriptToRun;
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
                if (sod.state != Sods.error)
                    sod.state = Sods.loaded;
                NotifyOnLoad(sod);
            }
        }
        else {
            sod.state = Sods.loading;
            var fn = GetOnLoad(sod);
            var onErrorFn = GetOnLoad(sod, true);
            var s = Define.loadScript(sod.url, fn, onErrorFn);

            sod.s = s;
        }
        return sod.state;
    }
}
function GetOnLoad(sod, asErrorHandler) {
    var fn = function() {
        if (asErrorHandler)
            sod.state = Sods.error;
        NotifyOnLoad(sod);
    };

    return fn;
}
function NotifyOnLoad(sod) {
    function CallSodCallbacks() {
        if (sod.qfn != null) {
            var sodError = sod.state == Sods.error;

            while (sod.qfn.length > 0) {
                var callbackInfo = sod.qfn.shift();
                var callError = Boolean(callbackInfo.error) && (sodError || Boolean(callbackInfo.expectedType) && !IsFullNameDefined(callbackInfo.expectedType));

                if (callError) {
                    callbackInfo.error();
                }
                else if (!sodError) {
                    callbackInfo.success();
                }
            }
        }
    }
    var fn2 = function() {
        var sodError = sod.state == Sods.error;

        sod.reset = false;
        if (sod.key == "listview.js") {
            ResetListViewSods(false);
        }
        if (!sodError) {
            sod.state = Sods.loaded;
            while (_v_qsod.length > 0) {
                var sodParent = _v_qsod.pop();

                if (sodParent.state == Sods.pending) {
                    LoadSod(sodParent);
                    break;
                }
            }
        }
        CallSodCallbacks();
        if (_v_qsod.length == 0 && AreAllSodsLoaded() && !sodError) {
            var registerFunc = function() {
                var rWsa = GetRUMWSA();

                if (IsNullOrUndefined(rWsa))
                    return;
                var isMDS = typeof g_mdsReady != "undefined" && Boolean(g_mdsReady);

                if (isMDS && typeof g_MDSPageLoaded != "undefined" && Boolean(g_MDSPageLoaded)) {
                    if (!rWsa.get_IsMDSBlockCollected()) {
                        var adm = asyncDeltaManager;

                        if (!IsNullOrUndefined(adm)) {
                            rWsa.AddMDSBlock(adm._admtt);
                        }
                    }
                    rWsa.AddTTLB();
                }
            };

            if (!(typeof g_mdsReady != "undefined" && Boolean(g_mdsReady))) {
                var rumSod = _v_dictSod['sp.core.js'];

                if (IsNullOrUndefined(rumSod)) {
                    return;
                }
            }
            EnsureScriptFunc('SP.core.js', "SP.RUMLogger", registerFunc);
        }
    };

    if (browseris.ie8down) {
        setTimeout(fn2, 0);
    }
    else {
        fn2();
    }
}
function EnsureScript(key, typ, fn, bSync, errorFn, expectedTypeName) {
    if (Boolean(bSync) && Boolean(errorFn)) {
        throw new Error("bSync==true && errorFn");
    }
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
    LoadSodByKey(key, fn, bSync, errorFn, expectedTypeName);
    if (run) {
        return true;
    }
    return false;
}
function EnsureScriptFunc(key, typ, fn, errorFn) {
    EnsureScript(key, TypeofFullName(typ), fn, false, errorFn, typ);
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
    EnsureScriptParams("ribbon", "ribbon.showSaveConflictDialog", lastModifiedUserId, continueStatusHtml, mergeChangesUrl, mergeChangesStatusHtml, discardScript, overwriteScript);
}
function ClkElmt(e) {
    if (browseris.ie)
        e.click();
    else
        FFClick(e);
}
function EnsureSelectionHandlerOnFocus(evt, cbx, ctxNum) {
    EnsureScriptFunc("core.js", "EnsureSelectionHandlerDeferred", function() {
        DeferCall("EnsureSelectionHandlerOnFocusDeferred", evt, cbx, ctxNum);
    });
}
function EnsureSelectionHandler(evt, tab, ctxNum) {
    EnsureScriptFunc("core.js", "EnsureSelectionHandlerDeferred", function() {
        DeferCall("EnsureSelectionHandlerDeferred", evt, tab, ctxNum);
    });
}
function StopEvt(evt) {
    if (!browseris.ie)
        evt.stopPropagation();
}
function AddEvtHandler(ele, strEvt, func, useCapture) {
    if (Boolean(ele.addEventListener)) {
        useCapture = typeof useCapture != "undefined" && useCapture != null ? useCapture : false;
        ele.addEventListener(strEvt.substr(2), func, useCapture);
    }
    else if (Boolean(ele.attachEvent)) {
        ele.attachEvent(strEvt, func);
    }
}
function RemoveEvtHandler(ele, strEvt, func, useCapture) {
    if (Boolean(ele.removeEventListener)) {
        useCapture = typeof useCapture != "undefined" && useCapture != null ? useCapture : false;
        ele.removeEventListener(strEvt.substr(2), func, useCapture);
    }
    else if (Boolean(ele.detachEvent)) {
        ele.detachEvent(strEvt, func);
    }
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
var g_pageIsDeRibboned;

function WpClick(evt) {
    if (Boolean(g_pageIsDeRibboned))
        return;
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
        EnsureScriptParams("ribbon", "SelectWp", p);
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
        EnsureScriptParams("ribbon", "SelectWz", p, zid);
    }
}
function WpCbxSelect(evt) {
    var cbx = GetEventSrcElement(evt);
    var currentlySelected = cbx.checked;

    if (!currentlySelected)
        WpClick(evt);
    else
        EnsureScriptParams("ribbon", "DeselectWpWz");
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
            var scrollValue = Number(scrollElem.value);
            var blogList = GetElementByClassName(elmWorkspace, "ms-blog-postList");

            if (blogList != null && scrollValue > 0) {
                var listTop = (blogList.getBoundingClientRect()).top;

                elmWorkspace.scrollTop = (blogList.getBoundingClientRect()).top - (elmWorkspace.getBoundingClientRect()).top;
            }
            else {
                elmWorkspace.scrollTop = scrollValue;
            }
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
function HasValidUrlPrefix(url) {
    var urlLower = url.toLowerCase();

    if (-1 == urlLower.search(RegExp("^http://")) && -1 == urlLower.search(RegExp("^https://")))
        return false;
    return true;
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
        Nav.navigate(redirectUrl);
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
    if (typeof WebForm_InitCallback == 'function' && "undefined" == typeof WebForm_InitCallback["deferred"] && typeof window['_WebForm_InitCallback'] == 'undefined')
        window['_WebForm_InitCallback'] = window['WebForm_InitCallback'];
    function funcInitCallback() {
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
    }
    ;
    funcInitCallback["deferred"] = true;
    window['WebForm_InitCallback'] = funcInitCallback;
    if (typeof WebForm_DoCallback == 'function' && "undefined" == typeof WebForm_DoCallback["deferred"] && typeof window['_WebForm_DoCallback'] == 'undefined')
        window['_WebForm_DoCallback'] = window['WebForm_DoCallback'];
    function funcDoCallback(eventTarget, eventArgument, eventCallback, context, errorCallback, useAsync) {
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
    }
    ;
    funcDoCallback["deferred"] = true;
    window['WebForm_DoCallback'] = funcDoCallback;
}
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
function registerCssLink(cssLink, callback, bUnthemable) {
    _registerCssLink(cssLink, null, function(e) {
        if ("undefined" != typeof g_MinimalDownload && g_MinimalDownload && 'undefined' != typeof asyncDeltaManager && 'undefined' != typeof AsyncDeltaManager$_registerLinkCallback) {
            AsyncDeltaManager$_registerLinkCallback(e);
        }
        if ('function' == typeof callback) {
            callback(e);
        }
    }, null, bUnthemable);
}
function _ensureCssLink(cssLink, callback) {
    var ret = _registerCssLink(cssLink, null, null, callback);

    if (ret == 0 && callback != null)
        callback();
    return ret;
}
function setAdditionalCssLinkAttributes(link, linkContent) {
    if (null == link || null == linkContent) {
        return;
    }
    var originalHref = linkContent["data-original-href"];

    if (null != originalHref) {
        link.setAttribute("data-original-href", originalHref);
    }
}
function _registerCssLink(cssLink, head, callback, loadCompletedCallback, bUnthemable, linkContent) {
    var found = false;
    var retval = 0;

    if (null == head) {
        head = (document.getElementsByTagName('head'))[0];
    }
    var useClientSideTheming = !bUnthemable && SPThemeUtils.UseClientSideTheming();
    var links = head.getElementsByTagName(useClientSideTheming ? 'style' : 'link');
    var linksCount = links.length;
    var sourceURL = useClientSideTheming ? cssLink : GetAbsoluteUrl(cssLink);

    for (var j = 0; j < linksCount; j++) {
        if (links[j].rel == "stylesheet" && links[j].type == "text/css" || useClientSideTheming && links[j].hasAttribute("data-ThemingSource")) {
            var source = useClientSideTheming ? links[j].getAttribute("data-ThemingSource") : links[j].href;

            if (null != source && source.length > 0) {
                if (sourceURL == source) {
                    var deleteAttrib = links[j].getAttribute("toDelete");

                    if (Boolean(deleteAttrib))
                        links[j].removeAttribute("toDelete");
                    if (null != linkContent) {
                        setAdditionalCssLinkAttributes(links[j], linkContent);
                    }
                    found = true;
                    break;
                }
                if (RemoveCachingParamsFromUrl(sourceURL) == RemoveCachingParamsFromUrl(source)) {
                    return -1;
                }
            }
        }
    }
    if (useClientSideTheming && !found) {
        var newElement;
        var originalUrl;

        if (null != linkContent) {
            originalUrl = linkContent["data-original-href"];
        }
        newElement = (Theming.GetPageManager()).AddCssLink(cssLink, originalUrl, null, loadCompletedCallback, null);
        if (null != callback) {
            callback(newElement);
        }
        retval = 1;
    }
    else if (!found) {
        var aLink = document.createElement("link");

        aLink.rel = "stylesheet";
        aLink.type = "text/css";
        aLink.href = cssLink;
        head.appendChild(aLink);
        if (null != linkContent) {
            setAdditionalCssLinkAttributes(aLink, linkContent);
        }
        if (browseris.chrome || browseris.safari) {
            var pollInterval = 10;
            var startTime = Number(new Date());
            var maxPollTime = 500;

            setTimeout(bindArguments(function CssLinkCallback(timestart, myLink) {
                if (myLink != null) {
                    if (typeof myLink.sheet == "undefined" || myLink.sheet == null || typeof myLink.sheet.cssRules == "undefined" || myLink.sheet.cssRules == null) {
                        if (Number(new Date()) - timestart < maxPollTime)
                            setTimeout(bindArguments(CssLinkCallback, timestart, myLink), pollInterval);
                        else if (typeof loadCompletedCallback == "function")
                            loadCompletedCallback();
                    }
                    else if (myLink.sheet.cssRules && typeof loadCompletedCallback == "function")
                        loadCompletedCallback();
                }
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

    GetSuiteLinks(null, function(suiteLinks) {
        linksJson = suiteLinks;
    });
    return linksJson;
}
function RecordClick(strClickType, strClickData) {
    EnsureScriptFunc("sp.pageinstrumentation.js", "SP.PageInstrumentation.Clicks", function() {
        SP.PageInstrumentation.Clicks.recordClick(strClickType, strClickData);
    });
}
function RecordClickForPaging(strClickType, strClickData, strPageId) {
    EnsureScriptFunc("sp.pageinstrumentation.js", "SP.PageInstrumentation.Clicks", function() {
        SP.PageInstrumentation.Clicks.recordClickForPaging(strClickType, strClickData, strPageId);
    });
}
function RecordClickClientId(strClickType, clientId) {
    EnsureScriptFunc("sp.pageinstrumentation.js", "SP.PageInstrumentation.Clicks", function() {
        SP.PageInstrumentation.Clicks.recordClickClientId(strClickType, clientId);
    });
}
function LogRUMExtendedAction(actionName, actionId, actionGuid, actionDate, actionType) {
    EnsureScriptFunc("sp.core.js", "SP.SlapiInternal", function() {
        var slapiInternal = SP.SlapiInternal;
        var action = new slapiInternal.RUMExtended();

        action.ActionName = actionName;
        if (typeof actionId != 'undefined' && actionId != null) {
            action.ActionId = actionId;
        }
        if (typeof actionGuid != 'undefined' && actionGuid != null) {
            action.ActionGuid = actionGuid;
        }
        if (typeof actionDate != 'undefined' && actionDate != null) {
            action.ActionDate = actionDate;
        }
        else {
            action.ActionDate = (new Date()).getTime();
        }
        if (typeof actionType != 'undefined' && actionType != null) {
            action.ActionType = actionType;
        }
        WriteLog(action);
    });
}
function _AddTrySPListNextBanner(isList) {
    var bannerHtml = '\
<div class="ms-fullWidth" style="background-color:#F8F8F8;position:relative;">\
  <div class="ms-tableCell ms-verticalAlignMiddle" style="width:256px;background-color:#24BBED;">\
    <img src=' + StAttrQuote("/_layouts/15/images/PaintRoller.215x90x32.png?rev=44") + ' style="height:90px;width:215px;margin:auto 20px;">\
  </div>\
  <div class="ms-tableCell ms-verticalAlignTop ms-fullWidth" style="padding:16px">\
	<h2 style="color:#444">' + STSHtmlEncode(Boolean(isList) ? Strings.STS.L_ListNewLookHeading : Strings.STS.L_DocLibNewLookHeading) + '\
      <span class="ms-dlgTitleBtns" style="margin-top:-23px">\
        <a title=' + StAttrQuote(Strings.STS.L_DocLibNewLookDismiss) + ' class="ms-dlgCloseBtn" id="doclibNewLookClose" href="javascript:;">\
          <span style="padding: 8px; width: 16px; height: 16px; display: inline-block;">\
            <span class="s4-clust" style="width: 16px; height: 16px; overflow: hidden; display: inline-block; position: relative;">\
              <img class="ms-dlgCloseBtnImg" style="left: 0px !important; top: -645px !important; position: absolute;" alt=' + StAttrQuote(Strings.STS.L_DocLibNewLookDismiss) + ' src=' + StAttrQuote("/_layouts/15/images/fgimg.png?rev=44") + '>\
            </span>\
          </span>\
        </a>\
      </span>\
    </h2>\
    <p style="margin: 0px; padding: 8px 0px 60px; color:#444">' + STSHtmlEncode(Strings.STS.L_DocLibNewLookBody) + '</p>\
    <input class="ms-button-emphasize" id="doclibNewLookTry" style="position:absolute;bottom:16px;margin:0px;border-color:#005da1;background-color:#005da1;color:#fff" type="button" value=' + StAttrQuote(Strings.STS.L_DocLibNewLookCheckItOutButton) + '/>\
  </div>\
</div>\
<br/>\n';
    var bannerCloseCount = new BrowserCachedNumber("SPNewDoclibBannerClose");
    var bannerClosedSession = new BrowserCachedNumber("SPNewDoclibBannerClosedSession", true);

    if (bannerCloseCount.getValue() > 1 || bannerClosedSession.getValue() > 0)
        return;
    var _splnBannerId = "doclibNewLookBanner";
    var splnBannerDiv = document.createElement("div");

    splnBannerDiv.id = _splnBannerId;
    splnBannerDiv.innerHTML = bannerHtml;
    var pageStatusElement = document.getElementById("pageStatusBar");
    var pageStatusParent = pageStatusElement ? pageStatusElement.parentNode : null;

    if (!pageStatusParent)
        return;
    pageStatusParent.insertBefore(splnBannerDiv, pageStatusElement);
    var spnlClose = document.getElementById("doclibNewLookClose");

    if (spnlClose) {
        AddEvtHandler(spnlClose, "onclick", closeBannerSPLN);
    }
    var spnlTry = document.getElementById("doclibNewLookTry");

    if (spnlTry) {
        AddEvtHandler(spnlTry, "onclick", trySPLN);
    }
    LogUserEngagement("NewDoclibExperience_Banner_Rendered");
    function closeBannerSPLN() {
        var bannerElement = document.getElementById(_splnBannerId);

        if (bannerElement && bannerElement.parentNode) {
            bannerElement.parentNode.removeChild(bannerElement);
            bannerElement = null;
        }
        bannerClosedSession.incrementValue();
        var newCloseCount = bannerCloseCount.incrementValue();

        LogUserEngagement("NewDoclibExperience_Banner_Close" + newCloseCount.toString(10));
    }
    function trySPLN() {
        bannerCloseCount.resetValue();
        LogUserEngagement("NewDoclibExperience_Banner_Try");
        document.cookie = "splnu=1;path=/;";
        document.location.reload();
    }
    function LogUserEngagement(strEventTag) {
        if (typeof SP != "undefined" && SP != null && SP.QoS != null)
            SP.QoS.WriteUserEngagement(strEventTag);
    }
    function BrowserCachedNumber(strCacheKey, bSessionCache) {
        this._cacheKey = strCacheKey;
        this._storage = !bSessionCache ? BrowserStorage.local : BrowserStorage.session;
        this.getValue = function() {
            var cachedValue = Number(this._storage.getItem(this._cacheKey));

            return cachedValue ? cachedValue : 0;
        };
        this.incrementValue = function() {
            var updatedValue = this.getValue() + 1;

            this._storage.setItem(this._cacheKey, updatedValue);
            return updatedValue;
        };
        this.resetValue = function() {
            this._storage.removeItem(this._cacheKey);
        };
    }
}
function HandleDLPStatus() {
    if (document.getElementById("pageStatusBar") != null) {
        EnsureScriptFunc("core.js", "ProcessDLPStatus", function() {
            ProcessDLPStatus();
        });
    }
}
function GetCachedProfile() {
    return ProfileCache.GetCachedProfile();
}
function UserProfileLocalStoreKey() {
    return ProfileCache.UserProfileLocalStoreKey();
}
function getCtx(webPartID) {
    if (fIsNullOrUndefined(g_ctxDict))
        return undefined;
    for (var contextId in g_ctxDict) {
        var contx = g_ctxDict[contextId];

        if (webPartID == "WebPart" + contx.wpq)
            return contx;
    }
    return undefined;
}
function PageMinimized() {
    if (typeof PageMinimized.minimized === 'undefined') {
        var url = new URI(ajaxNavigate.get_href());

        PageMinimized.minimized = Boolean(url.getQueryParameter("Minimized"));
        if (PageMinimized.minimized) {
            AddCssClassToElement(document.body, "ms-fullscreenmode");
        }
    }
    return PageMinimized.minimized;
}
function GoToModern(bReturn) {
    if (typeof SP != "undefined" && SP != null && SP.QoS != null)
        SP.QoS.WriteUserEngagement(bReturn ? "Return_To_Modern_UX" : "Go_To_Modern_UX");
    document.cookie = "splnu=1;path=/";
    if (!(window["OffSwitch"] == null || OffSwitch.IsActive("9AC29D85-49C4-41FC-B1E2-5BB42628DC6C")) && browseris.ie && !browseris.ie11up)
        window.open(window.location.href, '_blank');
    else
        window.location.reload();
}
function IsXhrAborted(xhr) {
    try {
        if (xhr.readyState == 4 && (typeof xhr.status == "undefined" || xhr.status == 0))
            return true;
    }
    catch (e) {
        return true;
    }
    return false;
}
function IsXhrGoodAndReady(xhr) {
    try {
        if (xhr.readyState == 4 && xhr.status == 200)
            return true;
    }
    catch (e) {
        return false;
    }
    return false;
}
function IsXhrReady(xhr) {
    try {
        if (xhr.readyState == 4)
            return true;
    }
    catch (e) {
        return false;
    }
    return false;
}
function OverrideDefaultMethod(methodName, alternateMethodName, argCount) {
    return SupplementDefaultMethod(methodName, alternateMethodName, argCount, true);
}
function SupplementDefaultMethod(methodName, alternateMethodName, argCount, override) {
    var browserMethod = window[methodName];

    try {
        if (window.opener != null && window.opener["LogFromProduct"] != null) {
            var verb = override ? "Overriding" : "Supplementing";

            window.opener["LogFromProduct"]("SupplementDefaultMethod -- " + verb + " " + methodName + " with " + alternateMethodName);
        }
    }
    catch (e) { }
    window[methodName] = function(arg1, arg2, arg3, arg4, arg5) {
        var getReturnValue = function(wnd) {
            if (argCount == 1) {
                return wnd[alternateMethodName](arg1);
            }
            else if (argCount == 3) {
                return wnd[alternateMethodName](arg1, arg2, arg3);
            }
            else if (argCount == 5) {
                return wnd[alternateMethodName](arg1, arg2, arg3, arg4, arg5);
            }
            else {
                throw "Unexpected argument count in SupplementDefaultMethod";
            }
        };
        var ret;

        try {
            if (Boolean(window.opener) && window != window.opener && Boolean(window.opener[alternateMethodName])) {
                ret = getReturnValue(window.opener);
                if (override)
                    return ret;
            }
            else if (Boolean(window.frameElement) && Boolean(window.parent) && window != window.parent && typeof window.parent.opener != "undefined" && Boolean(window.parent.opener) && window != window.parent.opener && window.parent != window.parent.opener && Boolean(window.parent.opener[alternateMethodName])) {
                ret = getReturnValue(window.parent.opener);
                if (override)
                    return ret;
            }
        }
        catch (e) { }
        if (Boolean(browserMethod)) {
            return Function.prototype.apply.call(browserMethod, window, arguments);
        }
        return null;
    };
}
var IMNControlObj;
var bIMNControlInited;
var IMNDictionaryObj;
var IMNDictionaryPresenceTextObj;
var bIMNSorted;
var bIMNOnloadAttached;
var IMNOrigScrollFunc;
var bIMNInScrollFunc;
var IMNSortableObj;
var IMNHeaderObj;
var IMNNameDictionaryObj;
var IMNNameDictionaryPresenceTextObj;
var IMNShowOfflineObj;
var OwaLang;
var OwaRoot;
var OwaSharedHoverCardJsKey;
var OwaSharedHoverCardStringsJsKey;
var ActiveSharedHoverCard;
var ActiveUserField;
var SharedHoverCardHideTimer;
var SharedHoverCardHideTime;
var SharedHoverCardDelayTimer;
var SharedHoverCardDelayTime;
var SharedHoverCardDelayed;
var SharedHoverCardContainer;
var sharedHoverCardShimParameters;
var SharedHoverCardShimParameters;
var sharedHoverCardShim;
var SharedHoverCardShim;
var serverSettings;
var slabManifest;
var jQueryPatch;
var SharedHoverCardDependenciesLoaded;
var SharedHoverCardDependenciesRegistered;
var FallbackToActiveX;
var SharedHoverCardBootStrapped;
var SharedHoverCardPending;
var currentShowHoverCardInstance;
var nextShowHoverCardInstance;
var currentShowHoverCardInstanceBootstrappedState;

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
                if (Boolean(window.ActiveXObject) || "ActiveXObject" in window) {
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
    if (typeof IMNHideOOUI == 'undefined' || typeof IMNControlObj == 'undefined' || typeof bIMNControlInited == 'undefined') {
        return;
    }
    IMNHideOOUI();
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
    if (Boolean(IMNDictionaryObj) && typeof IMNDictionaryObj[id] != 'undefined') {
        var img = IMNGetStatusImage(state, IMNSortableObj[id] || IMNShowOfflineObj[id]);

        if (IMNDictionaryObj[id] != state) {
            if (bIMNSorted)
                IMNSortList(id, IMNDictionaryObj[id], state);
            IMNUpdateImage(id, img);
            IMNDictionaryObj[id] = state;
        }
    }
    if (Boolean(IMNDictionaryPresenceTextObj) && typeof IMNDictionaryPresenceTextObj[id] != 'undefined') {
        var presenceTextElement = document.getElementById(id);

        IMNUpdatePresenceText(presenceTextElement, state);
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
        else if (typeof obj.getAttribute('altbase') != 'undefined' && Boolean(obj.getAttribute('altbase'))) {
            obj.alt = obj.getAttribute('altbase');
        }
        else {
            obj.alt = alt;
        }
        var useFilter = browseris.ie && browseris.ie55up && browseris.verIEFull < 7.0;
        var isPng = (newImg.toLowerCase()).indexOf(".png") > 0;

        if (useFilter) {
            if (isPng) {
                obj.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src=" + newImg + "),sizingMethod=scale,enabled=true);";
                obj.src = "/_layouts/15/images/blank.gif?rev=44";
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
        HideSharedHoverCard();
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
var sharedHoverCardsCount;
var sharedHoverCardElements;
var sharedHoverCardElementsCount;
var sharedHoverCardMarkerBatchSize;
var sharedHoverCardMarkerBatchDelay;
var IsIFrameSharedHoverCard;
var SharedHoverCardIFrame;
var SharedHoverCardIFrameCode;

function GetHoverCardJsUrls(keys) {
    var urls = new Array(0);

    if (IsIFrameSharedHoverCard || _v_dictSod == null) {
        return urls;
    }
    for (var i = 0; i < keys.length; i++) {
        var sod = _v_dictSod[keys[i]];

        urls[i] = sod == null ? "" : sod.url;
    }
    return urls;
}
function InitIFrameSharedHoverCard() {
    IsIFrameSharedHoverCard = true;
    sharedHoverCardsCount = 0;
    if (window.parent != null) {
        var sodKeys = new Array(0);

        sodKeys[0] = OwaSharedHoverCardJsKey;
        sodKeys[1] = OwaSharedHoverCardStringsJsKey;
        var cardJsUrls = parent.window.GetHoverCardJsUrls(sodKeys);

        for (var i = 0; i < cardJsUrls.length; i++) {
            var cardJsSrc = cardJsUrls[i];

            if (cardJsSrc != null && cardJsSrc.length > 0) {
                RegisterSod(sodKeys[i], cardJsSrc);
            }
        }
    }
    RenderSharedHoverCardContainer();
}
function ProcessImn() {
    if (typeof _spPageContextInfo == "undefined" || _spPageContextInfo == null) {
        return;
    }
    if (typeof _spPageContextInfo.userId == "undefined" || _spPageContextInfo.userId == String(-1)) {
        return;
    }
    imnCount = 0;
    imnElems = document.getElementsByName("imnmark");
    imnElemsCount = imnElems.length;
    if (EnsureIMNControl()) {
        ProcessImnMarkers();
    }
    else {
        RemoveImnAnchors();
    }
    if (IsPeopleHoverCardEnabled()) {
        sharedHoverCardsCount = 0;
        sharedHoverCardElements = document.getElementsByName("SharedHoverCardMarker");
        sharedHoverCardElementsCount = sharedHoverCardElements.length;
        if (sharedHoverCardElementsCount > 0) {
            ProcessSharedHoverCardMarkers();
            RenderSharedHoverCardContainer();
        }
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
                if (!IsPeopleHoverCardEnabled()) {
                    objSpan.onmouseover = IMNShowOOUIMouse;
                    objSpan.onfocusin = IMNShowOOUIKyb;
                    objSpan.onmouseout = IMNHideOOUI;
                    objSpan.onfocusout = IMNHideOOUI;
                }
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
function ProcessSharedHoverCardMarkers() {
    for (var i = 0; i < sharedHoverCardMarkerBatchSize; ++i) {
        if (sharedHoverCardsCount == sharedHoverCardElementsCount)
            return;
        var sharedHoverCardElement = sharedHoverCardElements[sharedHoverCardsCount];

        if (sharedHoverCardElement != null && typeof sharedHoverCardElement != 'undefined') {
            AddSharedHoverCardHandlers(sharedHoverCardElement.getAttribute("sip"), sharedHoverCardElement);
        }
        sharedHoverCardsCount++;
    }
    setTimeout("ProcessSharedHoverCardMarkers()", sharedHoverCardMarkerBatchDelay);
}
function AddSharedHoverCardHandlers(nameParam, userField) {
    if (nameParam == null || nameParam == '' || userField == null) {
        return;
    }
    if (!IsIFrameSharedHoverCard) {
        userField.onmouseover = ShowSharedHoverCardHandler;
        userField.onmouseout = HideSharedHoverCardHandler;
    }
}
function ShowSharedHoverCardHandler(objEvent) {
    if (IsPeopleHoverCardEnabled()) {
        var currEvent = GetCurrentEvent(objEvent);
        var obj = GetEventTarget(currEvent);

        if (Boolean(obj)) {
            var userField = GetUserField(obj);

            if (userField != null) {
                var sip = userField.getAttribute("sip");
                var hoverCardContainer = SharedHoverCardContainer;

                if (Boolean(hoverCardContainer)) {
                    CancelSharedHoverCardHideTimer();
                    if (ActiveUserField != userField) {
                        if (SharedHoverCardDelayTimer != null) {
                            clearTimeout(SharedHoverCardDelayTimer);
                        }
                        SharedHoverCardDelayed = hoverCardContainer;
                        SharedHoverCardDelayTimer = setTimeout(function() {
                            if (IsIFrameSharedHoverCard) {
                                SharedHoverCardDelayed = null;
                                ShowSharedHoverCard(hoverCardContainer, userField);
                            }
                            else {
                                var childWindow = SharedHoverCardIFrame != null ? SharedHoverCardIFrame.contentWindow : null;

                                if (Boolean(childWindow) && Boolean(childWindow.IFrameShowSharedHoverCard)) {
                                    SP.QoS.WriteUserEngagement('SharedHoverCard_ShowCard');
                                    SharedHoverCardDelayed = null;
                                    ShowSharedHoverCard(hoverCardContainer, userField);
                                    childWindow.IFrameShowSharedHoverCard(userField);
                                }
                            }
                        }, SharedHoverCardDelayTime);
                    }
                }
            }
        }
    }
}
function SharedHoverCardLogRUMExtendedAction(actionName, actionId, actionGuid, actionDate, actionType) {
    LogRUMExtendedAction(actionName, actionId, actionGuid, actionDate, actionType);
}
function IFrameShowSharedHoverCard(userField) {
    ShowSharedHoverCard(SharedHoverCardContainer, userField);
}
function ShowSharedHoverCard(hoverCardContainer, userField) {
    if (Boolean(hoverCardContainer) && (hoverCardContainer.style.visibility != "" || ActiveUserField != userField)) {
        currentShowHoverCardInstanceBootstrappedState = Boolean(SharedHoverCardBootStrapped);
        currentShowHoverCardInstance = nextShowHoverCardInstance++;
        var startTime = (new Date()).getTime();
        var actionName = currentShowHoverCardInstanceBootstrappedState ? "ShowHoverCardWithBootStrappedBegin" : "ShowHoverCardWithoutBootStrappedBegin";

        if (IsIFrameSharedHoverCard) {
            parent.SharedHoverCardLogRUMExtendedAction(actionName, currentShowHoverCardInstance, null, startTime, null);
        }
        else {
            LogRUMExtendedAction(actionName, currentShowHoverCardInstance, null, startTime, null);
        }
        if (Boolean(ActiveSharedHoverCard) && ActiveUserField != userField) {
            HideSharedHoverCard();
        }
        ActiveSharedHoverCard = hoverCardContainer;
        ActiveUserField = userField;
        hoverCardContainer.style.display = "block";
        PositionSharedHoverCard(hoverCardContainer, userField);
        SPAnimationUtility.BasicAnimator.FadeIn(hoverCardContainer);
        var placeHolder = hoverCardContainer.firstChild;
        var cardContainer = hoverCardContainer.lastChild;

        placeHolder.style.visibility = "";
        placeHolder.style.display = "block";
        if (IsIFrameSharedHoverCard) {
            if (!SharedHoverCardDependenciesRegistered) {
                RegisterSharedHoverCardDependencies();
            }
            hoverCardContainer.style.left = "0px";
            hoverCardContainer.style.top = "0px";
            var email = userField.getAttribute("sip");
            var title = userField.getAttribute("userTitle");

            RenderSharedHoverCard(cardContainer, email, title);
        }
    }
}
function PositionSharedHoverCard(hoverCardContainer, userField) {
    if (userField == null || hoverCardContainer == null) {
        return;
    }
    var position = IMNGetPosition(userField);
    var windowWidth = IMNGetDocumentClientWidth();
    var scrollX = IMNGetScrollX();
    var x = position.X + hoverCardContainer.offsetWidth - scrollX;

    if (x > windowWidth) {
        position.X = position.X - (x - windowWidth) - 2;
    }
    hoverCardContainer.style.left = position.X + "px";
    hoverCardContainer.style.top = String(position.Y + userField.offsetHeight) + "px";
}
function IMNGetScrollX() {
    var scrollX = 0;
    var workspace = IMNGetSharepointWorkspace();

    if (Boolean(workspace)) {
        scrollX = workspace.scrollLeft;
    }
    return scrollX;
}
function HideSharedHoverCard() {
    if (!IsIFrameSharedHoverCard && Boolean(ActiveSharedHoverCard)) {
        SPAnimationUtility.BasicAnimator.FadeOut(ActiveSharedHoverCard);
        ActiveSharedHoverCard.style.visibility = "hidden";
        ActiveSharedHoverCard.style.display = "none";
        ActiveSharedHoverCard = null;
        ActiveUserField = null;
        SharedHoverCardPending = null;
    }
}
function GetUserField(element) {
    while (Boolean(element)) {
        if (element.getAttribute != null) {
            if (element.getAttribute("name") == "SharedHoverCardMarker") {
                break;
            }
        }
        element = element.parentNode;
    }
    return element;
}
function SetSharedHoverCardHideTimer() {
    SharedHoverCardHideTimer = setTimeout(function() {
        if (Boolean(ActiveSharedHoverCard)) {
            HideSharedHoverCard();
        }
    }, SharedHoverCardHideTime);
}
function HideSharedHoverCardHandler(objEvent) {
    if (Boolean(objEvent) && objEvent.type == "mouseout") {
        var target = Boolean(objEvent.relatedTarget) ? objEvent.relatedTarget : objEvent.toElement;
        var container = objEvent.currentTarget;

        if (!Boolean(target) || !Boolean(container)) {
            return;
        }
        if (!IMNIsDescendant(target, container)) {
            CancelSharedHoverCardDelayTimer();
            SetSharedHoverCardHideTimer();
        }
    }
    else {
        CancelSharedHoverCardDelayTimer();
        SetSharedHoverCardHideTimer();
    }
}
function CancelSharedHoverCardHideTimer() {
    if (Boolean(SharedHoverCardHideTimer)) {
        clearTimeout(SharedHoverCardHideTimer);
    }
}
function CancelSharedHoverCardDelayTimer() {
    if (Boolean(SharedHoverCardDelayTimer)) {
        SharedHoverCardDelayed = null;
        clearTimeout(SharedHoverCardDelayTimer);
    }
}
function IMNIsDescendant(element, container) {
    if (!Boolean(element) || !Boolean(container)) {
        return false;
    }
    while (Boolean(element) && element != container) {
        element = element.parentNode;
    }
    return element == container;
}
function IsPeopleHoverCardEnabled() {
    return Flighting.VariantConfiguration.IsExpFeatureClientEnabled(0) && !FallbackToActiveX;
}
function IMNGetPosition(targetElement) {
    var position = new Object;
    var tempY = 0, tempX = 0;
    var workspace = IMNGetSharepointWorkspace();

    while (targetElement != null && targetElement != workspace) {
        tempY += targetElement.offsetTop;
        tempX += targetElement.offsetLeft;
        targetElement = targetElement.offsetParent;
    }
    position.X = tempX;
    position.Y = tempY;
    return position;
}
function IMNGetDocumentClientWidth() {
    var width = 0;
    var workspace = IMNGetSharepointWorkspace();

    if (Boolean(workspace) && Boolean(workspace.clientWidth)) {
        width = workspace.clientWidth;
    }
    else if (Boolean(document.documentElement) && Boolean(document.documentElement.clientWidth)) {
        width = document.documentElement.clientWidth;
    }
    return width;
}
function IMNGetSharepointWorkspace() {
    var workspace = null;

    if (typeof g_Workspace != "undefined") {
        workspace = document.getElementById(g_Workspace);
    }
    if (workspace == null) {
        workspace = document.body;
    }
    return workspace;
}
function RenderSharedHoverCardContainer() {
    if (SharedHoverCardContainer == null) {
        SharedHoverCardContainer = CreateSharedHoverCardContainer();
        if (!IsIFrameSharedHoverCard) {
            SharedHoverCardIFrame = document.createElement("IFRAME");
            if (browseris.firefox3up) {
                SharedHoverCardIFrame.setAttribute("src", GetPassThroughProxyRoot() + "/SHCIFrameContainer.html");
            }
            else {
                SharedHoverCardIFrame.onload = function() {
                    SharedHoverCardIFrame.onload = function() {
                    };
                    var doc = SharedHoverCardIFrame.contentWindow.document;

                    doc.open();
                    doc.write(SharedHoverCardIFrameCode);
                    doc.close();
                };
                SharedHoverCardIFrame.setAttribute("src", "about:blank");
            }
            SharedHoverCardIFrame.style.cssText = "min-height: 400px;min-width: 500px;";
            SharedHoverCardContainer.appendChild(SharedHoverCardIFrame);
            SharedHoverCardContainer.onmouseover = SharedHoverCardOnMouseOverHandler;
            SharedHoverCardContainer.onfocusin = SharedHoverCardOnMouseOverHandler;
            SharedHoverCardContainer.onmouseout = HideSharedHoverCardHandler;
            SharedHoverCardContainer.onfocusout = HideSharedHoverCardHandler;
        }
        var workspace = IMNGetSharepointWorkspace();

        workspace.appendChild(SharedHoverCardContainer);
    }
}
function SharedHoverCardOnMouseOverHandler(objEvent) {
    var currEvent = GetCurrentEvent(objEvent);
    var obj = GetEventTarget(currEvent);

    if (Boolean(obj)) {
        CancelSharedHoverCardHideTimer();
    }
}
function CreateSharedHoverCardContainer() {
    var hoverCardContainer = document.createElement("div");

    if (IsIFrameSharedHoverCard) {
        hoverCardContainer.style.cssText = "z-index: 1001;background-color: #FFFFFF;min-height: 98px;min-width: 481px;";
        hoverCardContainer.style.position = "absolute";
        hoverCardContainer.style.border = "0px";
        hoverCardContainer.style.display = "none";
        hoverCardContainer.style.visibility = "hidden";
        hoverCardContainer.appendChild(CreateSpinningWheelContainer());
        hoverCardContainer.appendChild(CreateSharedCardContainer());
    }
    else {
        hoverCardContainer.style.cssText = "box-sizing: border-box;box-shadow: 0px 0px 7px rgba(0,0,0,0.4);z-index: 1001;background-color: #FFFFFF;min-height: 401px;min-width: 501px;";
        hoverCardContainer.style.position = "absolute";
        hoverCardContainer.style.border = "1px solid #DEDEDE";
        hoverCardContainer.style.display = "none";
        hoverCardContainer.style.visibility = "hidden";
    }
    return hoverCardContainer;
}
function CreateSpinningWheelContainer() {
    var spinningWheel = document.createElement("div");

    spinningWheel.style.display = "none";
    spinningWheel.style.visibility = "hidden";
    var waitingImg = document.createElement("img");

    waitingImg.src = "/_layouts/15/images/gears_anv4.gif?rev=44";
    spinningWheel.appendChild(waitingImg);
    return spinningWheel;
}
function CreateSharedCardContainer() {
    var container = document.createElement("div");

    container.style.display = "none";
    container.style.visibility = "hidden";
    return container;
}
function RenderSharedHoverCard(targetElement, userEmail, userTitle) {
    if (SharedHoverCardBootStrapped) {
        if (typeof sharedHoverCardShim.createSharedHoverCard != "undefined") {
            sharedHoverCardShim.createSharedHoverCard(targetElement, userEmail, userTitle, IMNGetPresence(userEmail));
        }
    }
    else {
        SharedHoverCardPending = new Object;
        SharedHoverCardPending.TargetElement = targetElement;
        SharedHoverCardPending.UserEmail = userEmail;
        SharedHoverCardPending.UserTitle = userTitle;
    }
}
function IMNGetRelativeUrl() {
    if (IsIFrameSharedHoverCard && parent != window) {
        var parentWin = parent;

        return parentWin.IMNGetRelativeUrl();
    }
    var relativeUrl = "";

    if (typeof _spPageContextInfo != "undefined" && typeof _spPageContextInfo.webServerRelativeUrl != "undefined") {
        relativeUrl = _spPageContextInfo.webServerRelativeUrl;
    }
    else {
        relativeUrl = "/";
    }
    if (relativeUrl.lastIndexOf('/') != relativeUrl.length - 1) {
        relativeUrl += "/";
    }
    return relativeUrl;
}
function IMNGetExchangeServerVersion() {
    var version = "";

    if (typeof serverSettings != "undefined" && typeof serverSettings.version != "undefined") {
        version = serverSettings.version;
    }
    return version;
}
function IMNGetScriptKey(scriptUrl) {
    var key = scriptUrl;

    if (key != null && key != '') {
        var lastSlashPosition = key.lastIndexOf('/');

        if (lastSlashPosition != -1) {
            key = scriptUrl.substring(lastSlashPosition + 1);
        }
    }
    return key;
}
function SharedHoverCardRenderComplete() {
    function FixOwaButtonWidth(className) {
        var elements = SharedHoverCardContainer.getElementsByClassName(className);

        if (elements == null) {
            return;
        }
        for (var i = 0; i < elements.length; i++) {
            var element = elements[i];

            if (element != null) {
                element.style.minWidth = '0px';
                element.style.marginLeft = '0px';
            }
        }
    }
    function OnHoverCardUpdate() {
        FixOwaButtonWidth('o365button');
        var elements = SharedHoverCardContainer.getElementsByClassName('image-personcard_event_mo-png');

        if (elements != null) {
            for (var i = 0; i < elements.length; i++) {
                var element = elements[i];

                if (element != null && element.parentNode != null) {
                    element.parentNode.style.display = 'none';
                }
            }
        }
    }
    if (SharedHoverCardContainer != null) {
        var endTime = (new Date()).getTime();
        var actionName = currentShowHoverCardInstanceBootstrappedState ? "ShowHoverCardWithBootStrappedEnd" : "ShowHoverCardWithoutBootStrappedEnd";

        if (IsIFrameSharedHoverCard) {
            parent.SharedHoverCardLogRUMExtendedAction(actionName, currentShowHoverCardInstance, null, endTime, null);
        }
        else {
            LogRUMExtendedAction(actionName, currentShowHoverCardInstance, null, endTime, null);
        }
        var placeHolder = SharedHoverCardContainer.firstChild;
        var cardContainer = SharedHoverCardContainer.lastChild;

        if (placeHolder != null && cardContainer != null) {
            if (typeof window.chrome != "undefined") {
                cardContainer.addEventListener("DOMNodeInserted", OnHoverCardUpdate, false);
            }
            else {
                cardContainer.addEventListener("DOMAttrModified", OnHoverCardUpdate, false);
            }
            placeHolder.style.display = "none";
            placeHolder.style.visibility = "hidden";
            cardContainer.style.display = "table";
            cardContainer.style.visibility = "";
        }
    }
}
function GetPassThroughProxyRoot() {
    return IMNGetRelativeUrl() + "_api/OWAWebService";
}
function GetLayoutsRoot() {
    if (IsIFrameSharedHoverCard && parent != window) {
        var parentWin = parent;

        return parentWin.GetLayoutsRoot();
    }
    var layoutsRoot = "_layouts/15/";

    if (typeof _spPageContextInfo != "undefined" && typeof _spPageContextInfo.layoutsUrl != "undefined") {
        layoutsRoot = _spPageContextInfo.layoutsUrl;
    }
    layoutsRoot = IMNGetRelativeUrl() + layoutsRoot;
    if (layoutsRoot.lastIndexOf('/') != layoutsRoot.length - 1) {
        layoutsRoot += "/";
    }
    return layoutsRoot;
}
function bootStrapComplete(complete) {
    SharedHoverCardBootStrapped = true;
    if (ActiveSharedHoverCard != null && ActiveUserField != null && SharedHoverCardPending != null) {
        RenderSharedHoverCard(SharedHoverCardPending.TargetElement, SharedHoverCardPending.UserEmail, SharedHoverCardPending.UserTitle);
    }
}
function GetOwaServiceURL() {
    return GetPassThroughProxyRoot() + '/service.svc?action={0}';
}
function GetGetPersonaPhotoURL() {
    return GetPassThroughProxyRoot() + '/service.svc/s/GetPersonaPhoto';
}
function RegisterSharedHoverCardDependencies() {
    var layoutsRoot = GetLayoutsRoot();
    var style = document.createElement('link');

    style.href = layoutsRoot + OwaRoot + 'resources/themes/base/0/sharedhovercard.css';
    style.rel = 'stylesheet';
    style.type = 'text/css';
    (document.getElementsByTagName('head'))[0].appendChild(style);
    var element = document.createElement('script');

    element.text = 'var slabManifest = {"boot":{"Types":["IBasePersonaViewModelFactory"],"Configurations":[{"type":"ReadPersonCardComponent"},{"type":"SharedHoverCardComponent"}]}};var st = new Date();var sver = 0';
    (document.getElementsByTagName('head'))[0].appendChild(element);
    element = document.createElement('script');
    element.text = 'var serverSettings = {"version": "version","startTime": st,"cdnEndpoint": "","mapControlUrl": "","appDomainAppVirtualPath": "/owa","layout": "mouse","uiCulture": "en-US","uiTheme": "base","uiLang": "en","scriptsFolder": "' + layoutsRoot + '","resourcesFolder": "' + layoutsRoot + OwaRoot + 'resources","themedImagesFolderFormat": "' + layoutsRoot + OwaRoot + 'resources/themes/base/images/0","bootType": "SharedHoverCard","stylesLocale": "0","stylesFolderFormat": "' + layoutsRoot + OwaRoot + 'resources/themes/base/0"};';
    (document.getElementsByTagName('head'))[0].appendChild(element);
    EnsureScriptFunc(OwaSharedHoverCardJsKey, "SharedHoverCardShim", function() {
        EnsureScriptFunc(OwaSharedHoverCardStringsJsKey, "", function() {
            BootstrapHoverCard();
        });
    });
    SharedHoverCardDependenciesRegistered = true;
}
function FallBackToActiveX() {
    FallbackToActiveX = true;
    HideSharedHoverCard();
    sharedHoverCardsCount = 0;
    RemoveSharedHoverCardHandlers();
    ProcessImn();
}
function OwaServiceRequestHeadersDelegate() {
    if (IsIFrameSharedHoverCard && parent != window) {
        return parent.OwaServiceRequestHeadersDelegate();
    }
    if (!fIsNullOrUndefined(window["_spPageContextInfo"]) && !fIsNullOrUndefined(window["_spFormDigestRefreshInterval"]) && !fIsNullOrUndefined(UpdateFormDigest)) {
        var ctxObj = window["_spPageContextInfo"];

        UpdateFormDigest(ctxObj.webServerRelativeUrl, window["_spFormDigestRefreshInterval"]);
    }
    var dynamicOwaServiceRequestHeaders = {};
    var digestElem = document.getElementById("__REQUESTDIGEST");

    if (Boolean(digestElem)) {
        dynamicOwaServiceRequestHeaders['X-RequestDigest'] = digestElem.value;
    }
    return dynamicOwaServiceRequestHeaders;
}
function BootstrapHoverCard() {
    function OpenImConversation(email) {
        if (fIsNullOrUndefined(email) || email == '' || fIsNullOrUndefined(IMNControlObj)) {
            return;
        }
        if (IsIFrameSharedHoverCard) {
            parent.location.assign("IM:<sip:" + email + ">");
        }
        else {
            window.location.assign("IM:<sip:" + email + ">");
        }
    }
    function OpenEmailCompose(email) {
        if (fIsNullOrUndefined(email) || email == '') {
            return;
        }
        if (IsIFrameSharedHoverCard) {
            parent.location.assign("MailTo:<" + email + ">");
        }
        else {
            window.location.assign("MailTo:<" + email + ">");
        }
    }
    SharedHoverCardDependenciesLoaded = true;
    if (sharedHoverCardShim == null) {
        if (typeof SharedHoverCardShimParameters != "undefined" && typeof SharedHoverCardShimParameters.prototype.set_serverSettings != "undefined" && typeof SharedHoverCardShimParameters.prototype.set_slabManifest != "undefined" && typeof SharedHoverCardShimParameters.prototype.set_cardCreatedCallBack != "undefined" && typeof SharedHoverCardShimParameters.prototype.set_bootStrapCallBack != "undefined" && typeof SharedHoverCardShimParameters.prototype.set_openImConversationCallBack != "undefined" && typeof SharedHoverCardShimParameters.prototype.set_openEmailComposeCallBack != "undefined" && typeof SharedHoverCardShimParameters.prototype.set_owaServiceUrl != "undefined" && typeof SharedHoverCardShimParameters.prototype.set_getOwaServiceRequestHeaders != "undefined" && typeof SharedHoverCardShimParameters.prototype.set_getCustomGetPhotoUrl != "undefined" && typeof SharedHoverCardShim != "undefined" && typeof SharedHoverCardShim.createInstance != "undefined") {
            sharedHoverCardShimParameters = new SharedHoverCardShimParameters();
            sharedHoverCardShimParameters.set_serverSettings(serverSettings);
            sharedHoverCardShimParameters.set_slabManifest(slabManifest);
            sharedHoverCardShimParameters.set_cardCreatedCallBack(SharedHoverCardRenderComplete);
            sharedHoverCardShimParameters.set_bootStrapCallBack(bootStrapComplete);
            sharedHoverCardShimParameters.set_openImConversationCallBack(OpenImConversation);
            sharedHoverCardShimParameters.set_openEmailComposeCallBack(OpenEmailCompose);
            sharedHoverCardShimParameters.set_owaServiceUrl(GetOwaServiceURL());
            sharedHoverCardShimParameters.set_getOwaServiceRequestHeaders(OwaServiceRequestHeadersDelegate);
            sharedHoverCardShimParameters.set_getCustomGetPhotoUrl(GetGetPersonaPhotoURL());
            sharedHoverCardShim = SharedHoverCardShim.createInstance(sharedHoverCardShimParameters);
        }
        if (sharedHoverCardShim == null && typeof SharedHoverCardShim != "undefined") {
            var owaServiceRequestHeaders = {};

            owaServiceRequestHeaders['X-RequestDigest'] = (document.getElementById('__REQUESTDIGEST')).value;
            sharedHoverCardShim = new SharedHoverCardShim(serverSettings, slabManifest, SharedHoverCardRenderComplete, bootStrapComplete, GetOwaServiceURL(), owaServiceRequestHeaders, GetGetPersonaPhotoURL());
        }
        if (sharedHoverCardShim != null && typeof sharedHoverCardShim.bootStrapCard != "undefined") {
            sharedHoverCardShim.bootStrapCard();
        }
        else {
            FallBackToActiveX();
        }
    }
}
function RemoveSharedHoverCardHandlers() {
    for (var i = 0; i < sharedHoverCardMarkerBatchSize; ++i) {
        if (sharedHoverCardsCount == sharedHoverCardElementsCount)
            return;
        var sharedHoverCardElement = sharedHoverCardElements[sharedHoverCardsCount];

        if (sharedHoverCardElement != null && typeof sharedHoverCardElement != 'undefined') {
            sharedHoverCardElement.onmouseover = null;
            sharedHoverCardElement.onfocusin = null;
            sharedHoverCardElement.onmouseout = null;
            sharedHoverCardElement.onfocusout = null;
        }
        sharedHoverCardsCount++;
    }
    setTimeout("RemoveSharedHoverCardHandlers()", sharedHoverCardMarkerBatchDelay);
}
function IMNGetPresence(userEmail) {
    var presence = 0;

    if (userEmail != '' && EnsureIMNControl()) {
        try {
            presence = IMNControlObj.GetStatus(userEmail, "");
            presence = IMNControlObj.GetStatus(userEmail, "");
            presence = MapIMNPresenceToOWAPresence(presence);
        }
        catch (e) { }
    }
    return presence;
}
function MapIMNPresenceToOWAPresence(presence) {
    var owaPresence = 0;

    switch (presence) {
    case 0:
    case 11:
        owaPresence = 2;
        break;
    case 1:
    case 12:
        owaPresence = 1;
        break;
    case 2:
    case 4:
    case 6:
    case 8:
    case 13:
    case 16:
    case 17:
        owaPresence = 3;
        break;
    case 3:
    case 5:
    case 7:
    case 10:
    case 14:
    case 19:
    case 20:
    case 21:
        owaPresence = 4;
        break;
    case 9:
    case 15:
        owaPresence = 6;
    case 18:
        owaPresence = 5;
        break;
    default:
        owaPresence = 0;
        break;
    }
    return owaPresence;
}
function IMN_RenderPresenceStatusText(userEmail, containerId) {
    if (userEmail != '' && containerId != '' && EnsureIMNControl()) {
        if (!Boolean(IMNDictionaryPresenceTextObj)) {
            IMNDictionaryPresenceTextObj = new Object();
            IMNNameDictionaryPresenceTextObj = new Object();
        }
        if (!IMNNameDictionaryPresenceTextObj[containerId]) {
            IMNNameDictionaryPresenceTextObj[containerId] = userEmail;
        }
        if (typeof IMNDictionaryPresenceTextObj[containerId] == "undefined") {
            IMNDictionaryPresenceTextObj[containerId] = 1;
        }
        if (typeof g_presenceEnabled != "undefined" && g_presenceEnabled && IMNControlObj.PresenceEnabled) {
            var state = 1;

            if (typeof IMNControlObj.GetStatus != 'undefined') {
                state = IMNControlObj.GetStatus(userEmail, containerId);
            }
            if (IMNIsOnlineState(state)) {
                var presenceTextElement = document.getElementById(containerId);

                IMNUpdatePresenceText(presenceTextElement, state);
                IMNDictionaryPresenceTextObj[containerId] = state;
            }
        }
    }
}
function IMNUpdatePresenceText(element, state) {
    if (typeof element != 'undefined') {
        var imnInfo = IMNGetStatusImage(state, true);

        element.innerHTML = imnInfo.alt;
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
    else {
        EnsureScript("strings.js", TypeofFullName("Strings"), null);
        EnsureScript("core.js", TypeofFullName("UpdateAnimationUserControl"), null);
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
    if (!(window["OffSwitch"] == null || OffSwitch.IsActive("3EDB0B41-115A-410E-9C6B-9390F1D1AD94"))) {
        UpdateUrlWhenServerRedirects();
    }
    if (document.forms.length > 0 && !Boolean(_spOriginalFormAction)) {
        _spOriginalFormAction = document.forms[0].action;
        var url = _spOriginalFormAction;
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
        if (url.length > 0) {
            _spEscapedFormAction = escapeUrlForCallback(url);
            document.forms[0].action = _spEscapedFormAction;
            document.forms[0]._initialAction = document.forms[0].action;
        }
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
    PrepareForModernOnePageNavigation();
    UpdateUrlWhenServerRedirects();
    ProcessPNGImages();
    UpdateAccessibilityUI();
    UpdateAnimationUserControl(false);
    window.setTimeout('ProcessImn()', 10);
    HandleDLPStatus();
    ProcessOnLoadFunctionNames(_spBodyOnLoadFunctionNames);
    ProcessOnLoadFunctions(_spBodyOnLoadFunctions);
    if (typeof _spUseDefaultFocus != "undefined")
        DefaultFocus();
    if ((ajaxNavigate.get_hash()).indexOf("InplviewHash") != -1) {
        EnsureScriptParams("inplview", "inplview.RestoreAllClvpsNavigation");
    }
    ProcessReliabilityLogs();
}
function ProcessOnLoadFunctionNames(onLoadFunctionNames) {
    if (onLoadFunctionNames != null) {
        for (var i = 0; i < onLoadFunctionNames.length; i++) {
            var expr = "if(typeof(" + onLoadFunctionNames[i] + ")=='function'){" + onLoadFunctionNames[i] + "();}";

            eval(expr);
        }
        onLoadFunctionNames = [];
    }
}
function ProcessOnLoadFunctions(onLoadFunctions) {
    for (var i = 0; i < onLoadFunctions.length; i++) {
        onLoadFunctions[i]();
    }
    onLoadFunctions = [];
}
var g_fAreAllSodsLoaded;

function ProcessReliabilityLogs() {
    if (!g_fAreAllSodsLoaded) {
        g_fAreAllSodsLoaded = AreAllSodsLoaded();
        window.setTimeout(ProcessReliabilityLogs, 10);
        return;
    }
    SP.ReadyToUploadLogs();
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
            var initFuncName = null;

            try {
                initFuncName = window[funcName];
            }
            catch (ex) { }
            ;
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
            _elmBlankTab.innerHTML = "<span class=\"ms-ribbontabswitchloading\"><img src=\"" + "/_layouts/15/images/loadingcirclests16.gif?rev=44" + "\" alt=\"\"/><span>" + Strings.STS.L_Loading_Text + "</span></span>";
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
var ColorMap;

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
function addHybridTooltipDiv(strTitle, strHtml, strColor, isVanilla, bIsDismissible, dismissAltText) {
    var hybridTooltipDiv = document.createElement("div");

    if (Boolean(hybridTooltipDiv)) {
        hybridTooltipDiv.id = "hybridTooltipStatusBar";
        hybridTooltipDiv.setAttribute("aria-live", "polite");
        hybridTooltipDiv.setAttribute("aria-relevant", "all");
        hybridTooltipDiv.style.display = "block";
        if (typeof strColor == 'string' && strColor in ColorMap) {
            hybridTooltipDiv.className = StatusBarClassNames[ColorMap[strColor]];
        }
        var deltaPageStatusBar = document.getElementById("DeltaPageStatusBar");

        deltaPageStatusBar.appendChild(hybridTooltipDiv);
        var st = _createStatusMarkup(strTitle, strHtml, true, isVanilla, bIsDismissible, dismissAltText);

        hybridTooltipDiv.appendChild(st);
    }
    return hybridTooltipDiv;
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
        if (((String(strHtml)).toLowerCase()).indexOf("configssc.aspx") != -1) {
            rg.push("');__doPostBack('DismissSiteCreationOnlineNotification');\"/></a>");
        }
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
    var dlg = null;
    var wndTop = _dlgWndTop();

    if (typeof wndTop.g_childDialog != 'undefined')
        dlg = wndTop.g_childDialog;
    if (Boolean(dlg)) {
        dlg.set_returnValue(returnValue);
        dlg.close(dialogResult);
    }
}
function commonModalDialogHide() {
    var dlg;
    var wndTop = _dlgWndTop();

    if (typeof wndTop.g_childDialog != 'undefined')
        dlg = wndTop.g_childDialog;
    if (Boolean(dlg)) {
        dlg.hide();
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
        Nav.navigate(dlgUrl);
}
function PopupDialogCallback(dialogResult, returnValue) {
    if (dialogResult == 1) {
        Nav.navigate((_dlgWndTop()).location.href);
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
function SuiteOnClick(clickHandler) {
    CoreInvoke('_SuiteOnClick', clickHandler);
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
function DispDocItemExWithServerRedirectOrNavigate(ele, objEvent, fTransformServiceOn, fShouldTransformExtension, fTransformHandleUrl, strProgId, iDefaultItemOpen, strServerFileRedirect) {
    if (IsSupportedMacBrowser() && !(window["OffSwitch"] == null || OffSwitch.IsActive("BDD1B8EC-6631-4FD1-B8DE-BB70531B030E"))) {
        NavigateElementHref(ele);
    }
    else {
        DispDocItemExWithServerRedirect(ele, objEvent, fTransformServiceOn, fShouldTransformExtension, fTransformHandleUrl, strProgId, iDefaultItemOpen, strServerFileRedirect);
    }
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
function GoToCreateNewPage() {
    CoreInvoke('_GoToCreateNewPage');
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
function _spBodyOnHashChange() {
    ajaxNavigate._raiseNavigate(ajaxNavigate);
}
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
var SPListView;
var getSharingHintHtml;
var onSharingHintClicked;

function RegisterSharedWithFieldRenderer() {
    if (typeof ComputedFieldWorker !== 'undefined' && ComputedFieldWorker !== null) {
        ComputedFieldWorker['SharedWith'] = RenderSharedWithField;
    }
    function RenderSharedWithField(renderCtx, field, listSchema) {
        if (renderCtx.CurrentItem.PrincipalCount == null) {
            return '';
        }
        var strHTML = [];

        strHTML.push('<span class="js-sharingHint-listViewWrapper" data-updatestatus="done">');
        strHTML.push(getSharingHintHtml(renderCtx.CurrentItem, null));
        strHTML.push("</span>");
        return strHTML.join("");
    }
    getSharingHintHtml = function(ctxListItem, csomSharedWithUsers) {
        var tooltip = ctxListItem.PrincipalCount < 1 ? Strings.STS.L_SharedWithNone : Strings.STS.L_SharingHintShared;
        var strHTML = [];

        strHTML.push('<a class="ms-subtleLink" href="#" onclick="onSharingHintClicked(this); return false;" aria-label=' + StAttrQuote(tooltip) + '>');
        strHTML.push(getSharingHintIconHtml(ctxListItem));
        if (Flighting.VariantConfiguration.IsExpFeatureClientEnabled(144) && _spPageContextInfo.webUIVersion >= 15)
            strHTML.push(getSharingHintString(ctxListItem, csomSharedWithUsers));
        strHTML.push('</a>');
        return strHTML.join("");
    };
    var getSharingHintString = function(ctxListItem, csomSharedWithUsers) {
        var sharingStr = Strings.STS.L_SharedWithNone_Short;
        var principalCount = Number(ctxListItem.PrincipalCount);
        var sharedUsers = Boolean(csomSharedWithUsers) ? csomSharedWithUsers : ctxListItem.SharedWithUsers;

        if (principalCount > 0) {
            sharingStr = Strings.STS.L_SharingHintShared_Short;
        }
        var sharingHintHtml = "<span class='js-sharingHintString ms-noWrap ms-imnSpan ms-displayInlineBlock' >" + Encoding.HtmlEncode(sharingStr) + "</span>";

        return sharingHintHtml;
    };
    var getSharingHintIconHtml = function(ctxListItem) {
        var tooltip = '';
        var imageClass = '';
        var principalCount = Number(ctxListItem.PrincipalCount);

        if (principalCount < 1) {
            tooltip = Strings.STS.L_SharedWithNone;
            imageClass = 'js-sharingHint-unshared';
        }
        else {
            imageClass = 'js-sharingHint-sharedDefault';
            tooltip = Strings.STS.L_SharingHintShared;
        }
        var iconHtml = '<span class="js-sharingHint-iconContainer ms-imnImg">' + '<img class=' + StAttrQuote(imageClass) + ' title=' + StAttrQuote(tooltip) + ' alt=' + StAttrQuote(tooltip) + ' src=' + StAttrQuote(GetThemedImageUrl("spcommon.png")) + '></img></span>';

        return iconHtml;
    };

    onSharingHintClicked = function(elt) {
        var iid = findIIDInAncestorNode(elt);
        var ctxListItem = GetListItemByIID(iid);
        var ctxRgiid = GetCtxRgiidFromIid(iid);
        var viewCtx = ctxRgiid.ctx;

        _WriteDocEngagement("Documents_SharingIconClick", "OneDrive_SharingIconClick");
        SP.SOD.executeFunc("sharing.js", "DisplaySharedWithDialog", function() {
            var forceReadOnly = !permMaskContains(ctxListItem.PermMask, 0x0, 0x2000000);

            DisplaySharedWithDialogCore(viewCtx.HttpRoot, viewCtx.listName, ctxListItem.ID, forceReadOnly, null, ctxListItem["FSObjType"], ctxListItem["HTML_x0020_File_x0020_Type"], false, viewCtx.RealHttpRoot);
        });
    };
}
function CalloutRenderViewTemplate(renderCtx) {
    var iStr = '';

    iStr += renderCtx.RenderHeader(renderCtx);
    iStr += renderCtx.RenderBody(renderCtx);
    iStr += renderCtx.RenderFooter(renderCtx);
    return iStr;
}
function CalloutRenderHeaderTemplate(renderCtx) {
    var calloutID = GetCalloutElementIDFromRenderCtx(renderCtx);
    var title = '';

    if (renderCtx.ListSchema.IsDocLib == '1') {
        title = renderCtx.CurrentItem.FileLeafRef;
    }
    else {
        title = renderCtx.CurrentItem.Title;
    }
    return Callout.GenerateDefaultHeader(calloutID, Encoding.HtmlEncode(title), null, true);
}
function CalloutRenderFooterTemplate(renderCtx, calloutActionMenuPopulator, renderECB) {
    if (typeof calloutActionMenuPopulator === 'undefined' || calloutActionMenuPopulator === null) {
        calloutActionMenuPopulator = CalloutOnPostRenderTemplate;
    }
    if (typeof renderECB === 'undefined' || renderECB === null) {
        renderECB = true;
    }
    var calloutID = GetCalloutElementIDFromRenderCtx(renderCtx);

    SPClientRenderer.AddPostRenderCallback(renderCtx, function() {
        var calloutActionMenu = new CalloutActionMenu(calloutID + '-actions');

        calloutActionMenuPopulator(renderCtx, calloutActionMenu);
        calloutActionMenu.render();
    });
    var ecbMarkup = [];

    if (renderECB) {
        ecbMarkup.push('<span id=' + Encoding.AttrQuote(calloutID + '-ecbMenu') + ' class="js-callout-actions js-callout-ecbActionDownArrow">');
        ecbMarkup.push(RenderECBinline(renderCtx, renderCtx.CurrentItem, renderCtx.CurrentFieldSchema));
        ecbMarkup.push('</span>');
    }
    return Callout.GenerateDefaultFooter(calloutID, ecbMarkup.join(''));
}
function CalloutRenderBodyTemplate(renderCtx) {
    var itemTpls = renderCtx.Templates['Item'];

    if (itemTpls == null || itemTpls == {})
        return '';
    var listData = renderCtx.ListData;
    var listSchema = renderCtx.ListSchema;
    var bHasHeader = renderCtx.Templates.Header != '';
    var groupTpls = renderCtx.Templates['Group'];

    if (groupTpls == null || typeof RenderItemTemplateDefault != "undefined" && groupTpls == RenderItemTemplateDefault || typeof groupTpls != "function" && typeof groupTpls != "string")
        groupTpls = RenderGroupTemplate;
    else if (typeof groupTpls == "string")
        groupTpls = SPClientRenderer.ParseTemplateString(groupTpls, renderCtx);
    var ItemTpl = renderCtx.Templates['Item'];

    if (ItemTpl == null || typeof RenderFieldTemplateDefault != "undefined" && ItemTpl == RenderFieldTemplateDefault || typeof ItemTpl != "function" && typeof ItemTpl != "string")
        ItemTpl = RenderItemTemplate;
    else if (typeof ItemTpl == "string")
        ItemTpl = SPClientRenderer.ParseTemplateString(ItemTpl, renderCtx);
    var listItem = renderCtx.CurrentItem;
    var itemType = listItem['ItemType'];
    var tpl = itemTpls[itemType];

    if (tpl == null || tpl == '') {
        tpl = ItemTpl;
    }
    else if (typeof tpl == 'string') {
        tpl = SPClientRenderer.ParseTemplateString(tpl, renderCtx);
        itemTpls[itemType] = tpl;
    }
    return Callout.GenerateDefaultBody(GetCalloutElementIDFromRenderCtx(renderCtx), SPClientRenderer.CoreRender(tpl, renderCtx));
}
function CalloutRenderItemTemplate(renderCtx) {
    var ret = [];

    if (renderCtx.ListSchema.IsDocLib) {
        ret.push(CalloutRenderFilePreview(renderCtx));
    }
    ret.push(CalloutRenderDlpNotificationPlaceholder(renderCtx));
    ret.push(CalloutRenderLastModifiedInfo(renderCtx));
    ret.push(CalloutRenderSharingStatus(renderCtx));
    ret.push(CalloutRenderSourceUrl(renderCtx));
    return ret.join('');
}
var RenderECBinline;

function _createNewDocumentCallout(rCtx, hideUploadLink, launchPointOverride, qcbPollCallback) {
    function createNewDocumentCore() {
        var wpq = rCtx.wpq;
        var launchPoint = Boolean(launchPointOverride) ? launchPointOverride : document.getElementById(ListModule.Util.addWPQtoId(c_newdocWOPIID + 'Hero', wpq));

        if (Boolean(launchPoint)) {
            var callout = CalloutManager.getFromLaunchPointIfExists(launchPoint);

            if (!Boolean(callout) && Boolean(rCtx.NewWOPIDocumentUrl)) {
                var createDocUrl = rCtx.NewWOPIDocumentUrl + '&Source=' + Nav.getSource();
                var contDivHtml = RenderNewDocumentCallout(rCtx, createDocUrl);

                callout = CalloutManager.createNewIfNecessary({
                    launchPoint: launchPoint,
                    ID: ListModule.Util.addWPQtoId(c_newdocWOPIID, wpq),
                    title: Strings.STS.L_NewDocumentCalloutTitle,
                    content: contDivHtml,
                    onOpeningCallback: function(cl) {
                        NewDocumentCallout_OnOpeningCallback(rCtx, createDocUrl, cl);
                    },
                    onOpenedCallback: function(cl) {
                        NewDocumentCallout_OnOpenedCallback(rCtx);
                    },
                    beakOrientation: 'leftRight',
                    contentWidth: c_newDocCalloutWidth,
                    allowScroll: true,
                    boundingBox: document.getElementById('s4-workspace')
                });
                if (Boolean(callout) && ListModule.Util.canUploadFile(rCtx) && !hideUploadLink) {
                    var uploadUrl = rCtx.HttpRoot + "/_layouts/15/Upload.aspx" + '?List=' + rCtx.listName + '&RootFolder=' + rCtx.rootFolder;

                    callout.addAction(new CalloutAction({
                        text: Strings.STS.L_NewDocumentUploadFile,
                        onClickCallback: function(calloutActionClickEvent, calloutAction) {
                            CalloutManager.closeAll();
                            NewItem2(calloutActionClickEvent, uploadUrl);
                            return false;
                        }
                    }));
                }
            }
        }
        rCtx.qcbNewButtonConfigured = true;
        if (typeof qcbPollCallback == "function") {
            qcbPollCallback();
        }
    }
    EnsureScript('callout.js', typeof CalloutManager, function() {
        var eventInfo = g_ExecuteOrWaitJobs["sp.ribbon.js"];

        if (Boolean(window["toolbarData" + rCtx.wpq]) || eventInfo === null || Boolean(_v_dictSod) && !Boolean(_v_dictSod['ribbon']))
            createNewDocumentCore();
        else
            ExecuteOrDelayUntilScriptLoaded(createNewDocumentCore, "sp.ribbon.js");
    });
}
var DisplaySharingDialogCore;

function DisplaySharingDialogForListItem(renderCtx, listItemID, tabId) {
    var noItemGiven = typeof listItemID === "undefined";
    var tooManyItemsSelected = renderCtx.currentSelectedItems > 1;
    var notInsideAFolder = renderCtx.currentSelectedItems === 0 && !Boolean(renderCtx.ListData.FolderId);

    if (noItemGiven && (tooManyItemsSelected || notInsideAFolder)) {
        WriteDebugLog("DocLib_DispShareDlgInvalidSelection", true, "Attempted to open sharing dialog for " + renderCtx.CurrentSelectedItems + " items. We only support sharing 1 at a time.");
        return;
    }
    EnsureScriptFunc("sharing.js", "DisplaySharingDialogCore", function() {
        var fsObjType;
        var fileType;

        if (typeof listItemID === "undefined") {
            if (renderCtx.CurrentSelectedItems == 1) {
                var selectedItemIID;

                for (selectedItemIID in renderCtx.dictSel) {
                    listItemID = renderCtx.dictSel[selectedItemIID].id;
                    break;
                }
            }
            else if (Boolean(renderCtx.ListData.FolderId)) {
                listItemID = String(renderCtx.ListData.FolderId);
                fsObjType = 1;
                fileType = "";
            }
        }
        if (Boolean(listItemID)) {
            var currentItem = null;

            if (Boolean(renderCtx.CurrentItem)) {
                currentItem = renderCtx.CurrentItem;
            }
            else {
                for (var itemId in renderCtx.ListData.Row) {
                    var item = renderCtx.ListData.Row[itemId];

                    if (Boolean(item) && item.ID == listItemID) {
                        currentItem = item;
                        break;
                    }
                }
            }
            if (Boolean(currentItem) && !Boolean(fsObjType) && !Boolean(fileType)) {
                fsObjType = currentItem["FSObjType"];
                fileType = currentItem["HTML_x0020_File_x0020_Type"];
            }
        }
        if (!Boolean(renderCtx.RealHttpRoot)) {
            DisplaySharingDialogCore(renderCtx.HttpRoot, renderCtx.listName, listItemID, !isNaN(tabId) ? tabId : 0, fsObjType, fileType, void 0, document.activeElement);
        }
        else {
            DisplaySharingDialogCore(renderCtx.HttpRoot, renderCtx.listName, listItemID, 0, fsObjType, fileType, false, document.activeElement, renderCtx.RealHttpRoot);
        }
    });
}
var CALLOUT_STR_ELLIPSIS;
var CALLOUT_ELLIPSIS_LENGTH;
var CALLOUT_CHARS_TO_TRUNCATE_PER_ITERATION;

function displayTruncatedString(element, string, maxWidth) {
    var lastWidth = element.offsetWidth;

    while (element.offsetWidth > maxWidth) {
        var newLengthToTry = element.innerHTML.length - CALLOUT_CHARS_TO_TRUNCATE_PER_ITERATION;

        element.innerHTML = safeTruncateString(element.innerHTML, newLengthToTry) + CALLOUT_STR_ELLIPSIS;
        if (element.offsetWidth === lastWidth) {
            Sys.Debug.assert(false, "String truncation is not affecting element width. Element must not be setup correctly.");
            return element.innerHTML;
        }
        lastWidth = element.offsetWidth;
    }
    if (element.innerHTML.length < string.length) {
        element.title = string;
    }
    return element.innerHTML;
}
function displayTruncatedLocation(element, maxHeight) {
    var charsToTruncate = 1 + CALLOUT_ELLIPSIS_LENGTH;

    while (element.offsetHeight > maxHeight) {
        var newLengthToTry = element.innerHTML.length - charsToTruncate;

        element.innerHTML = CALLOUT_STR_ELLIPSIS + safeTruncateStringFromStart(element.innerHTML, newLengthToTry);
    }
    return element.innerHTML;
}
function displayTruncatedUrl(element, fullUrl, maxWidth, allowTruncateQuery) {
    var MIN_AUTHORITY_LENGTH_IN_CHARS = 4;
    var urlToDisplay = new URI(fullUrl.getString());

    element.innerHTML = Encoding.HtmlEncode(urlToDisplay.getDecodedStringForDisplay());
    var lastWidth = element.offsetWidth;

    while (element.offsetWidth > maxWidth) {
        var path = urlToDisplay.getPath();
        var authority = urlToDisplay.getAuthority();
        var query = urlToDisplay.getQuery();
        var indexOfNextSlash = path.indexOf('/', CALLOUT_ELLIPSIS_LENGTH + 2);

        if (indexOfNextSlash >= 0) {
            path = '/' + CALLOUT_STR_ELLIPSIS + path.substr(indexOfNextSlash);
            urlToDisplay.setPath(path);
        }
        else if (allowTruncateQuery && query.length > CALLOUT_CHARS_TO_TRUNCATE_PER_ITERATION) {
            query = safeTruncateString(query, query.length - CALLOUT_CHARS_TO_TRUNCATE_PER_ITERATION) + CALLOUT_STR_ELLIPSIS;
            urlToDisplay.setQuery(query);
        }
        else if (authority.length > MIN_AUTHORITY_LENGTH_IN_CHARS + CALLOUT_ELLIPSIS_LENGTH) {
            authority = safeTruncateString(authority, MIN_AUTHORITY_LENGTH_IN_CHARS) + CALLOUT_STR_ELLIPSIS;
            urlToDisplay.setAuthority(authority);
        }
        else if (path.length > CALLOUT_CHARS_TO_TRUNCATE_PER_ITERATION) {
            path = safeTruncateString(path, path.length - CALLOUT_CHARS_TO_TRUNCATE_PER_ITERATION) + CALLOUT_STR_ELLIPSIS;
            urlToDisplay.setPath(path);
        }
        else if (query.length > CALLOUT_CHARS_TO_TRUNCATE_PER_ITERATION) {
            query = safeTruncateString(query, query.length - CALLOUT_CHARS_TO_TRUNCATE_PER_ITERATION) + CALLOUT_STR_ELLIPSIS;
            urlToDisplay.setQuery(query);
        }
        element.innerHTML = Encoding.HtmlEncode(urlToDisplay.getDecodedStringForDisplay());
        if (element.offsetWidth === lastWidth) {
            Sys.Debug.assert(false, "Url truncation is not affecting element width. Element must not be setup correctly.");
            return element.innerHTML;
        }
        lastWidth = element.offsetWidth;
    }
    return element.innerHTML;
}
function GetCalloutPolicyTipNotificationElementId(renderCtx) {
    return GetCalloutElementIDFromRenderCtx(renderCtx) + '-dlpNotificationArea';
}
function CalloutRenderDlpNotificationPlaceholder(renderCtx) {
    SPClientRenderer.AddPostRenderCallback(renderCtx, CalloutPostRenderPolicyTip);
    return '<div id="' + GetCalloutPolicyTipNotificationElementId(renderCtx) + '"></div>';
}
function EnsureECBAdapterOnCtx(renderCtx, theCtx) {
    if (!Boolean(theCtx.ecbAdapter)) {
        if (typeof SP == "undefined" || typeof SP.Utilities == "undefined" || typeof SP.Utilities.Internal == "undefined" || typeof SP.Utilities.Internal.ECBAdapter == "undefined")
            return false;
        theCtx.ecbAdapter = new SP.Utilities.Internal.ECBAdapter(theCtx, function qcbPoll() {
            renderCtx.qcb.Poll();
        }, "qcbPoll");
    }
    return true;
}
function EnsureEcbAdapterCommandsStateInitialized(renderCtx) {
    IsECBCommandEnabled("ViewProperties", renderCtx);
}
function IsECBCommandEnabled(commandId, renderCtx) {
    if (typeof GetListContextFromContextNumber == "undefined") {
        return false;
    }
    var ecbCommandEnabledCurrentCtx = GetListContextFromContextNumber(renderCtx.ctxId);

    if (!Boolean(ecbCommandEnabledCurrentCtx)) {
        return false;
    }
    if (!EnsureECBAdapterOnCtx(renderCtx, ecbCommandEnabledCurrentCtx)) {
        return false;
    }
    return ecbCommandEnabledCurrentCtx.ecbAdapter.canHandleECBCommand(commandId);
}
function ExecuteECBCommand(commandId, renderCtx) {
    SP.SOD.executeFunc("core.js", "GetListContextFromContextNumber", function() {
        var ecbCommandEnabledCurrentCtx = GetListContextFromContextNumber(renderCtx.ctxId);

        if (!Boolean(ecbCommandEnabledCurrentCtx)) {
            WriteDebugLog("DocLibQCB_ExecECBCmdNoCtx", true, "Could not load a list context for the list when attempting to execute a command");
            return;
        }
        SP.SOD.executeFunc("sp.core.js", "SP.Utilities.Internal.ECBAdapter", function() {
            EnsureECBAdapterOnCtx(renderCtx, ecbCommandEnabledCurrentCtx);
            if (!ecbCommandEnabledCurrentCtx.ecbAdapter.executeECBCommand(commandId)) {
                WriteDebugLog("DocLibQCB_ExecECBCmdFailed", true, "Execution of ECB command " + commandId + " failed.");
                return;
            }
        });
    });
}
function _registerOnItemSelectionChangedHandlerForQCB(renderCtx) {
    ExecuteOrDelayUntilScriptLoaded(function() {
        var qcbCtx = GetListContextFromContextNumber(renderCtx.ctxId);

        if (!Boolean(qcbCtx))
            return;
        RegisterOnItemSelectionChangedHandler(qcbCtx, "qcbOnRefreshCommandUI" + renderCtx.wpq, function() {
            renderCtx.qcb.Poll();
        });
    }, "core.js");
}
function _unregisterOnItemSelectionChangedHandlerForQCB(renderCtx) {
    ExecuteOrDelayUntilScriptLoaded(function() {
        var qcbCtx = GetListContextFromContextNumber(renderCtx.ctxId);

        if (!Boolean(qcbCtx))
            return;
        UnregisterOnItemSelectionChangedHandler(qcbCtx, "qcbOnRefreshCommandUI" + renderCtx.wpq);
    }, "core.js");
}
var MountPointSiteIdFieldName;
var MountPointWebIdFieldName;
var MountPointItemUniqueIdFieldName;

function IsMountPoint(listItem) {
    return Flighting.VariantConfiguration.IsExpFeatureClientEnabled(134) && (Boolean(listItem) && Boolean(listItem[MountPointSiteIdFieldName]) && Boolean(listItem[MountPointWebIdFieldName]) && Boolean(listItem[MountPointItemUniqueIdFieldName]));
}
function InMountPoint(renderCtx) {
    return Boolean(renderCtx.RealHttpRoot);
}
function IsCurrentItemMountPoint(renderCtx) {
    return Boolean(renderCtx) && Boolean(renderCtx.CurrentItem) && IsMountPoint(renderCtx.CurrentItem);
}
function IsSelectedItemMountPoint(renderCtx) {
    if (Flighting.VariantConfiguration.IsExpFeatureClientEnabled(134)) {
        var ctxT = Boolean(renderCtx) ? renderCtx : GetCurrentCtx();

        if (ctxT == null || typeof ctxT.dictSel == "undefined" || ctxT.CurrentSelectedItems != 1)
            return false;
        for (var key in ctxT.dictSel) {
            var listItemId = (key.split(","))[1];

            if (Boolean(listItemId)) {
                var listData = ctxT.ListData.Row;

                if (Boolean(listData)) {
                    for (var i = 0; i < listData.length; i++) {
                        var listItem = listData[i];

                        if (listItem["ID"] == listItemId) {
                            return IsMountPoint(listItem);
                        }
                    }
                }
            }
        }
    }
    return false;
}
var MountPointInfo;

function RenderMountPointLink(renderCtx, ret, content, listItem, listSchema) {
    var mpInfo = MountPointInfo.createByListItem(listItem, renderCtx);

    ret.push("<a onfocus=\"OnLink(this)\" class=\"ms-listlink\" href=\"");
    if (renderCtx.NoScriptEnabled && SupportAjaxFolderNav(renderCtx)) {
        ret.push("\"#\" onclick=\"");
        ret.push("EnterFolderAjax(event, '");
        ret.push(URI_Encoding.encodeURIComponent(listItem.FileRef));
        ret.push("', '");
        ret.push(mpInfo.getMountPointUrl());
        ret.push("', true);return false;\"");
        if (Flighting.VariantConfiguration.IsExpFeatureClientEnabled(169))
            ret.push(" aria-label=\"" + Encoding.HtmlEncode(Strings.STS.L_FieldType_SharedFolder) + "\"");
        ret.push(">");
    }
    else {
        ret.push(listSchema.PagePath);
        ret.push("?");
        ret.push(mpInfo.getMountPointUrl());
        if (Flighting.VariantConfiguration.IsExpFeatureClientEnabled(169))
            ret.push("\" aria-label=\"" + Encoding.HtmlEncode(Strings.STS.L_FieldType_SharedFolder) + "\">");
        else
            ret.push("\">");
    }
    ret.push(Encoding.HtmlEncode(content));
    ret.push("</a>");
}
function EnableCreateMountPointIfNeeded(renderCtx) {
    var uri = new URI(ajaxNavigate.get_href());
    var mountSiteId = uri.getQueryParameter("MountSiteId");
    var mountWebId = uri.getQueryParameter("MountWebId");
    var mountItemUniqueId = uri.getQueryParameter("MountItemUniqueId");
    var mountItemTitle = uri.getQueryParameter("MountItemTitle");

    if (Boolean(mountSiteId) && Boolean(mountWebId) && Boolean(mountItemUniqueId) && Boolean(mountItemTitle)) {
        var createMountPointFunc = createOneTimeCallback(function(renderContext) {
            EnsureScriptParams('MountPoint.js', 'ConfirmCreateMountPoint', mountItemTitle, mountSiteId, mountWebId, mountItemUniqueId, renderCtx.listName, renderCtx.ListSchema.PagePath);
        });

        AddPostRenderCallback(renderCtx, createMountPointFunc);
    }
}
function IsListItemFolder(listItem) {
    return Boolean(listItem) && listItem.FSObjType == "1" && (!Boolean(listItem["HTML_x0020_File_x0020_Type"]) || listItem["HTML_x0020_File_x0020_Type"].indexOf("OneNote.Notebook") == -1);
}
var ShortcutLinkTargetUrlFieldName;
var ShortcutLinkSiteIdFieldName;
var ShortcutLinkWebIdFieldName;
var ShortcutLinkUniqueIdFieldName;

function IsShortcutLink(listItem) {
    return Boolean(listItem) && (listItem["File_x0020_Type"] == "url" || listItem["File_x0020_Type"] == "website");
}
function RetrieveShortcutLink(fileUrl) {
    if (window.XMLHttpRequest != null) {
        var strUrl = _spPageContextInfo["webAbsoluteUrl"] + "/_api/SP.Utilities.ShortcutLink.GetShortcutLink('" + URI_Encoding.encodeURIComponent(fileUrl) + "')";
        var req = new XMLHttpRequest();

        req.open("GET", strUrl, true);
        req.setRequestHeader("Content-Type", "application/json");
        req.setRequestHeader("Accept", "application/json");
        req.onreadystatechange = function() {
            if (req.readyState != 4 || req.status != 200)
                return;
            var data = JSON.parse(req.responseText);
            var element = document.getElementById("shortcut_" + fileUrl);

            if (element != null) {
                element.href = data.url;
                element.title = data.url;
            }
        };
        req.send(null);
    }
}
function GenerateHref(targetUrl, siteId, webId, uniqueId) {
    var targetHref = "";
    var query = "?";

    if (Boolean(targetUrl)) {
        var queryIndex = targetUrl.indexOf("?");

        if (queryIndex != -1) {
            query = targetUrl.substring(queryIndex);
        }
    }
    if (Boolean(uniqueId) && Boolean(webId) && Boolean(siteId)) {
        targetHref = _spPageContextInfo["webAbsoluteUrl"] + "/_layouts/15/" + "ShortcutLink.aspx";
        targetHref += query;
        targetHref += "&siteid=" + URI_Encoding.encodeURIComponent(siteId);
        targetHref += "&webid=" + URI_Encoding.encodeURIComponent(webId);
        targetHref += "&uniqueid=" + URI_Encoding.encodeURIComponent(uniqueId);
    }
    else if (Boolean(targetUrl)) {
        targetHref = targetUrl;
    }
    return targetHref;
}
function RenderShortcutHrefStart(renderCtx, ret, content, listItem, listSchema, triggerRetrieve) {
    var uniqueId = listItem[ShortcutLinkUniqueIdFieldName];
    var webId = listItem[ShortcutLinkWebIdFieldName];
    var siteId = listItem[ShortcutLinkSiteIdFieldName];
    var targetUrl = listItem[ShortcutLinkTargetUrlFieldName];
    var targetHref = GenerateHref(targetUrl, siteId, webId, uniqueId);

    ret.push("<a onfocus=\"OnLink(this)\" class=\"ms-listlink\" href=\"");
    if (targetHref != "") {
        ret.push(Encoding.HtmlEncode(targetHref));
        ret.push("\" title=\"");
        ret.push(Encoding.HtmlEncode(targetUrl));
    }
    else {
        targetHref = _spPageContextInfo["webAbsoluteUrl"] + "/_layouts/15/" + "ShortcutLink.aspx?shortcut=" + URI_Encoding.encodeURIComponent(listItem.FileRef);
        ret.push(targetHref);
        ret.push("\" title=\"");
        ret.push(Encoding.HtmlEncode(Strings.STS.L_Shortcut_Processing));
        if (triggerRetrieve) {
            ret.push("\" id=\"shortcut_");
            ret.push(Encoding.HtmlEncode(listItem.FileRef));
            RetrieveShortcutLink(listItem.FileRef);
        }
    }
    ret.push("\" aria-label=\"");
    ret.push(Encoding.HtmlEncode(Strings.STS.L_FieldType_File_Shortcut));
    ret.push("\">");
}
function RenderShortcutLink(renderCtx, ret, content, listItem, listSchema) {
    RenderShortcutHrefStart(renderCtx, ret, content, listItem, listSchema, true);
    ret.push(Encoding.HtmlEncode(content));
    ret.push("</a>");
}
function RenderShortcutLinkIcon(renderCtx, ret, content, listItem, listSchema) {
    RenderShortcutHrefStart(renderCtx, ret, content, listItem, listSchema, false);
    ret.push("<img border=\"0\" alt=\"");
    ret.push(Encoding.HtmlEncode(Strings.STS.L_FieldType_File_Shortcut));
    ret.push("\" title=\"");
    ret.push(Encoding.HtmlEncode(Strings.STS.L_FieldType_File_Shortcut));
    ret.push("\" src=\"");
    ret.push(ListView.ImageBasePath + "/_layouts/15/images/icspgen.gif?rev=44");
    ret.push("\" />");
    ret.push("</a>");
}
function SaveCurrentContextInfo(renderCtx) {
    var ctxId = "ctx" + renderCtx.ctxId;

    window[ctxId] = renderCtx;
    if (Boolean(g_ctxDict)) {
        g_ctxDict[ctxId] = renderCtx;
    }
    if (Boolean(g_ViewIdToViewCounterMap) && Boolean(renderCtx.view)) {
        g_ViewIdToViewCounterMap[renderCtx.view] = renderCtx.ctxId;
    }
}
function EnableHeroButton(renderCtx) {
    if (!Boolean(renderCtx.DisableHeroButton)) {
        window['heroButtonWebPart' + renderCtx.wpq] = true;
    }
}
function SetupDragDrop(renderCtx) {
    var registerDragDrop = function() {
        SetDocItemDragDrop(renderCtx);
    };

    EnsureScriptFunc('DragDrop.js', 'registerDragUpload', registerDragDrop);
}
function _canDragUploadFile(renderCtx) {
    var listTemplate = renderCtx.ListTemplateType;
    var canDragUpload = true;

    if (typeof g_uploadType != 'undefined' && (g_uploadType == UploadType.ACTIVEXNA || g_uploadType == UploadType.NOT_SUPPORTED)) {
        canDragUpload = false;
    }
    return canDragUpload && !(listTemplate == 119 || listTemplate == 123);
}
function AjaxNavAddNavigate(callback) {
    Nav.ajaxNavigate.add_navigate(callback);
}
function GetInplviewHash(webPartId) {
    return Nav.ajaxNavigate.getParam("InplviewHash" + webPartId);
}
function SupportsFileUpload() {
    return true;
}
function RenderEasyUploadInputFileElement(renderCtx) {
    var ret = [];

    ret.push('<input type="file" class="ms-hide"');
    if (Flighting.VariantConfiguration.IsExpFeatureClientEnabled(61)) {
        ret.push(' multiple="true"');
    }
    ret.push(' id="easyUploadFile');
    ret.push(renderCtx.wpq);
    ret.push("\" onchange=\"HandleEasyUploadInputOnChange(event, this, &quot;");
    ret.push(renderCtx.wpq);
    ret.push("&quot;); return false;\" />");
    return ret.join('');
}
function IsEasyUploadEnabled(renderCtx) {
    return Boolean(renderCtx) && !renderCtx.inGridMode && renderCtx.ListTemplateType == 700 && typeof FormData != 'undefined' && Flighting.VariantConfiguration.IsExpFeatureClientEnabled(172);
}
function IsInIframe() {
    try {
        return window.self !== window.top;
    }
    catch (e) {
        return true;
    }
}
function RenderProjectTaskListEditMode(renderCtx, postRenderFunc) {
    if (renderCtx.ListTemplateType == 171 && _spPageContextInfo.webTemplate == '6115') {
        if (Boolean(renderCtx.bInitialRender) && (renderCtx.ListData.LastRow == null || renderCtx.ListData.LastRow == 0)) {
            renderCtx.inGridMode = true;
            postRenderFunc = function() {
                EnsureScriptParams('inplview', 'InitGridFromView', renderCtx.view);
            };
            AddPostRenderCallbackUnique(renderCtx, postRenderFunc);
        }
    }
}
function RenderGroupListEditMode(renderCtx, postRenderFunc) {
    if (renderCtx.SiteTemplateId == 64 && _spPageContextInfo.webTemplate == '64') {
        var curUrl = new URI(ajaxNavigate.get_href());
        var initQuery = curUrl.getQueryParameter("ShowInGrid");

        if (!ctx.inGridMode && Boolean(initQuery) && initQuery != "false" && Boolean(renderCtx.bInitialRender) && (renderCtx.ListData.LastRow == null || renderCtx.ListData.LastRow == 0)) {
            renderCtx.inGridMode = true;
            postRenderFunc = function() {
                EnsureScriptParams('inplview', 'InitGridFromView', renderCtx.view);
            };
            AddPostRenderCallbackUnique(renderCtx, postRenderFunc);
        }
    }
}
function WriteDebugLog(tag, isInteresting, message) {
    SP.DebugLogger.Write(tag, isInteresting ? SP.DebugLogger.LoggingLevel.Interesting : SP.DebugLogger.LoggingLevel.Boring, message);
}
function WriteEngagementLog(tag, dictProperties) {
    SP.QoS.WriteUserEngagement(tag, dictProperties);
}
function WriteDocEngagementLog(teamSiteTag, oneDriveTag, dictProperties) {
    _WriteDocEngagement(teamSiteTag, oneDriveTag, dictProperties);
}
function WriteStart(tag, dictProperties) {
    SP.QoS.WriteStart(tag, dictProperties);
}
function WriteSuccess(tag, dictProperties, logType, duration) {
    SP.QoS.WriteSuccess(tag, dictProperties, logType, duration);
}
function WriteFailure(tag, dictProperties, logType, duration) {
    SP.QoS.WriteFailure(tag, dictProperties, logType, duration);
}
function WriteStartDiagnostic(tag, dictProperties) {
    SP.QoS.WriteStart(tag, dictProperties, SP.QoS.LogType.Diagnostic, null);
}
function WriteSuccessDiagnostic(tag, dictProperties) {
    SP.QoS.WriteSuccess(tag, dictProperties, SP.QoS.LogType.Diagnostic, null);
}
function WriteFailureDiagnostic(tag, dictProperties) {
    SP.QoS.WriteFailure(tag, dictProperties, SP.QoS.LogType.Diagnostic, null);
}
function WriteListViewSuccessLog(renderCtx) {
    if (typeof performance != "undefined" && typeof performance.timing != "undefined") {
        var listId = renderCtx.ListTemplateType > 0 ? renderCtx.ListTemplateType * 10000 : 0;

        if (typeof renderCtx.BaseViewID == "number")
            listId += renderCtx.BaseViewID;
        if (window["groupContextData"] != null)
            listId = listId * 10 + 1;
        var endTime = (new Date()).getTime();
        var controlId = 'ListView';
        var startTime = 0;
        var usingAppCache = false;
        var folderNav = false;

        if (Boolean(renderCtx.startTime)) {
            LogRUMExtendedAction('InplviewTime', listId, null, endTime - renderCtx.startTime, 2);
            startTime = Number(renderCtx.startTime);
            folderNav = true;
            renderCtx.startTime = null;
        }
        else if (Flighting.VariantConfiguration.IsExpFeatureClientEnabled(192) || Flighting.VariantConfiguration.IsExpFeatureClientEnabled(511)) {
            var actionName = 'ListRendered';
            var appCache = window.applicationCache;

            if (Boolean(appCache) && appCache.UNCACHED != appCache.status) {
                actionName += "_FromAppCache";
                usingAppCache = true;
                WriteSuccessDiagnostic(actionName);
            }
            LogRUMExtendedAction(actionName, listId, null, endTime, 2);
        }
        else {
            LogRUMExtendedAction('ListRendered', listId, null, endTime, 2);
        }
        EnsureScriptFunc("sp.core.js", "SP.SlapiInternal", function() {
            var perfLogger = IsNullOrUndefined(PerformanceLogger) ? null : PerformanceLogger.GetLogger();

            if (!IsNullOrUndefined(perfLogger)) {
                perfLogger.WriteScenarioId(String(listId));
                perfLogger.WriteAppCache(usingAppCache);
                perfLogger.WriteFolderNav(folderNav);
                if (typeof PerformanceLogger.ControlPerformanceData == "function") {
                    perfLogger.AddExpectedControl(controlId);
                    var controlPerformanceData = new PerformanceLogger.ControlPerformanceData(controlId, startTime, Number(endTime), perfLogger.ComputeControlRenderTime, perfLogger.CheckControlTimeRequiredDataAvailable);

                    perfLogger.WriteControlPerformanceData(controlPerformanceData);
                }
            }
        });
        if (typeof g_MinimalDownload == "undefined" || !g_MinimalDownload) {
            if (typeof SP.Performance.UploadNonMDSPageLoadTime != "undefined")
                SP.Performance.UploadNonMDSPageLoadTime(renderCtx.ListTemplateType, endTime);
        }
    }
    if (typeof SP.ReadyToUploadLogs != "undefined")
        SP.ReadyToUploadLogs();
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
var AriaLogger;
var BaseLogger;
var CacheLogger;

function CacheLogger_module_def() {
    CacheLogger.DefaultUploader = function(uploadFunc) {
        var uploadTimer = null;
        var pageLoaded = false;
        var clearTimer = function() {
            if (null != uploadTimer) {
                clearTimeout(Number(uploadTimer));
                uploadTimer = null;
            }
        };
        var upload = function() {
            clearTimer();
            uploadFunc();
        };

        this.CanUpload = function() {
            return pageLoaded;
        };
        this.OnLog = function() {
            if (null == uploadTimer) {
                uploadTimer = setTimeout(upload, 5000);
            }
        };
        this.OnUpload = function() {
            clearTimer();
        };
        DOM.AddEventHandler(window, "onload", function() {
            pageLoaded = true;
            upload();
        });
    };
    var ariaLogger = null;

    CacheLogger.Logger = function(storagePrefix, logger, uploaderConstructor) {
        if (!Boolean(storagePrefix) || storagePrefix.length == 0)
            storagePrefix = "CacheLogger";
        if (!Boolean(logger))
            logger = BaseLogger.GetLogger();
        if (!Boolean(uploaderConstructor))
            uploaderConstructor = CacheLogger.DefaultUploader;
        var storageSize = -1;
        var SessionID = "sessionID";
        var getStorageSize = function(size) {
            if (-1 == size) {
                var retSize = BrowserStorage.session.getItem(storagePrefix + "size");

                if (!Boolean(retSize)) {
                    retSize = BrowserStorage.session.getItem(storagePrefix + "Size");
                }
                if (!Boolean(retSize))
                    retSize = "0";
                return parseInt(retSize, 10);
            }
            return size;
        };
        var generateGuid = function() {
            try {
                var rStr = function(len) {
                    var ret = "";

                    do {
                        ret += ((Math.random()).toString(16)).substr(2, len - ret.length);
                    } while (ret.length < len);
                    return ret;
                };

                return rStr(8) + "-" + rStr(4) + "-4" + rStr(3) + "-" + rStr(4) + "-" + rStr(12);
            }
            catch (e) {
                return "";
            }
        };
        var ensureSessionID = function() {
            if (typeof window[SessionID] == "undefined") {
                if (typeof g_correlationId == "string" && g_correlationId != null) {
                    window[SessionID] = g_correlationId;
                }
                else {
                    window[SessionID] = generateGuid();
                }
            }
        };
        var ensureAriaLogger = function(ev) {
            if (!Boolean(ariaLogger) || typeof ariaLogger.isInitialized != "function") {
                EnsureScriptFunc("ariaSDK.js", "AWTLogManager", function() {
                    ariaLogger = new AriaLogger.Logger();
                    if (Boolean(ev) && Boolean(ariaLogger) && ariaLogger.isInitialized()) {
                        ariaLogger.safeLogEvent(ev);
                    }
                });
            }
        };
        var uploadData = function() {
            if (!uploader.CanUpload())
                return;
            storageSize = getStorageSize(storageSize);
            var haveData = false;

            if (!Boolean(ariaLogger) || typeof ariaLogger.isInitialized != "function") {
                ensureAriaLogger();
            }
            for (var i = 0; i < storageSize; i++) {
                var dataItemStr = BrowserStorage.session.getItem(storagePrefix + i.toString());

                try {
                    var dataItem = JSON.parse(dataItemStr);

                    logger.WriteLog(String(dataItem.name), dataItem.props);
                    haveData = true;
                    var ev = setAriaEvent(String(dataItem.name), dataItem.props);

                    if (Boolean(ariaLogger) && typeof ariaLogger.isInitialized == "function") {
                        ariaLogger.safeLogEvent(ev);
                    }
                    else {
                        ensureAriaLogger(ev);
                    }
                }
                catch (e) {
                    continue;
                }
            }
            if (!haveData)
                return;
            ensureSessionID();
            logger.SetCorrelationId(window[SessionID]);
            logger.UploadData();
            storageSize = 0;
            BrowserStorage.session.removeItem(storagePrefix + "Size");
            BrowserStorage.session.setItem(storagePrefix + "size", 0);
            uploader.OnUpload();
        };
        var uploader = new uploaderConstructor(uploadData);

        CacheLogger.GenerateGuid = function() {
            return generateGuid();
        };
        this.WriteLog = function(eventName, dictProperties, immediate) {
            if (!Boolean(eventName) || !Boolean(dictProperties)) {
                return;
            }
            if (!Boolean(dictProperties['ClientTime'])) {
                dictProperties['ClientTime'] = (new Date()).valueOf();
            }
            var logEntry = {
                name: eventName,
                props: dictProperties
            };

            storageSize = getStorageSize(storageSize);
            if (storageSize >= 100) {
                return;
            }
            var serializedObject = "";

            try {
                serializedObject = JSON.stringify(logEntry);
            }
            catch (e) {
                return;
            }
            BrowserStorage.session.setItem(storagePrefix + storageSize.toString(), serializedObject);
            storageSize++;
            BrowserStorage.session.setItem(storagePrefix + "size", storageSize);
            uploader.OnLog();
            if (Boolean(immediate)) {
                setTimeout(uploadData, 0);
            }
        };
        function setAriaEvent(evName, props) {
            ensureSessionID();
            var ev = {
                "eventName": evName,
                "sessionId": window[SessionID],
                "correlationVector": window[SessionID],
                "data": props
            };

            return ev;
        }
    };
    var defaultLogger = null;

    CacheLogger.GetLogger = function() {
        if (null == defaultLogger)
            defaultLogger = new CacheLogger.Logger();
        return defaultLogger;
    };
}
var DebugLogger;

function DebugLogger_module_def() {
    var debugStreamId = 'ReliabilityLog';
    var maxColumnSize = 5000;
    var defaultNumberOfBoringLogsToSend = 25;

    DebugLogger.Logger = function(numberOfBoringLogsToSend, cacheLogger) {
        if (!Boolean(cacheLogger))
            cacheLogger = CacheLogger.GetLogger();
        var logCache = new MRUCache(numberOfBoringLogsToSend);

        this.Write = function(tag, level, message, miscData) {
            if (!Boolean(tag) || tag.length == 0)
                return;
            if (!Boolean(message))
                message = "";
            if (!Boolean(miscData))
                miscData = "";
            if (typeof message.stack == "string") {
                message = message.stack;
            }
            else if (typeof message.message == "string") {
                message = message.message;
            }
            else {
                message = getCsomDebugInfo(message);
            }
            if (tag.length > maxColumnSize || Number(message.length) > maxColumnSize || miscData.length > maxColumnSize) {
                tag = tag.substring(0, maxColumnSize);
                message = message.substring(0, maxColumnSize);
                miscData = message.substring(0, maxColumnSize);
            }
            var log = {
                Tag: tag,
                Level: level,
                Message: message,
                Misc: miscData,
                UserAgent: navigator.userAgent
            };

            if (this.LoggingLevel.Boring == level) {
                logCache.Push(log);
                return;
            }
            var item;

            while (Boolean(item = logCache.GetOldest())) {
                cacheLogger.WriteLog(debugStreamId, item);
            }
            cacheLogger.WriteLog(debugStreamId, log, true);
        };
        this.LoggingLevel = {
            Boring: 0,
            Interesting: 1
        };
        var csomErrorFunctions = [{
            func: "get_errorCode",
            name: "ErrorCode"
        }, {
            func: "get_errorTraceCorrelationId",
            name: "CorrelationId"
        }, {
            func: "get_errorTypeName",
            name: "ErrorType"
        }, {
            func: "get_message",
            name: "Message"
        }, {
            func: "get_stackTrace",
            name: "StackTrace"
        }];
        var getCsomDebugInfo = function(args) {
            var info = {};
            var hasCsomData = false;

            for (var i = 0; i < csomErrorFunctions.length; i++) {
                if (typeof args[csomErrorFunctions[i].func] == "function") {
                    var result = args[csomErrorFunctions[i].func].call(args);

                    if (result != null && result != "") {
                        info[csomErrorFunctions[i].name] = result;
                        hasCsomData = true;
                    }
                }
            }
            if (hasCsomData)
                return JSON.stringify(info);
            else
                return String(args);
        };
    };
    var defaultLogger = null;

    DebugLogger.GetLogger = function() {
        if (null == defaultLogger)
            defaultLogger = new DebugLogger.Logger(defaultNumberOfBoringLogsToSend);
        return defaultLogger;
    };
    var MRUCache = function(size) {
        var _size = size;
        var _length = 0;
        var _head = -1;
        var _tail = -1;
        var _arr = new Array(size);

        this.Push = function(item) {
            _head++;
            if (_head == _size)
                _head = 0;
            if (_tail == -1 || _head == _tail) {
                _tail++;
                if (_tail == _size)
                    _tail = 0;
            }
            _arr[_head] = item;
            _length++;
            if (_length > size)
                _length = size;
        };
        this.GetOldest = function() {
            if (_length == 0)
                return null;
            var retVal = _arr[_tail];

            _length--;
            if (_length < 0)
                _length = 0;
            if (_length > 0) {
                _tail++;
                if (_tail == _size)
                    _tail = 0;
            }
            if (_length == 0) {
                _tail = -1;
                _head = -1;
            }
            return retVal;
        };
    };
}
var QoSLogger;

function QoSLogger_module_def() {
    var userEngagementStreamId = 'UserEngagement';

    QoSLogger.Logger = function(cacheLogger, debugLogger) {
        if (!Boolean(cacheLogger))
            cacheLogger = CacheLogger.GetLogger();
        var that = this;

        this.LogType = {
            Engagement: 0,
            Diagnostic: 1
        };
        var writeTag = function(tag, dictProperties, logType, duration) {
            var serializedObject = "";

            if (Boolean(dictProperties)) {
                try {
                    serializedObject = JSON.stringify(dictProperties);
                }
                catch (e) { }
            }
            if (!Boolean(logType))
                logType = that.LogType.Engagement;
            var log = {
                EngagementName: tag,
                Properties: serializedObject,
                Duration: duration,
                LogType: logType
            };

            cacheLogger.WriteLog(userEngagementStreamId, log);
        };

        this.WriteStart = function(tag, dictProperties, logType, duration) {
            writeTag(tag, dictProperties, logType, duration);
        };
        this.WriteSuccess = function(tag, dictProperties, logType, duration) {
            writeTag(tag, dictProperties, logType, duration);
        };
        this.WriteFailure = function(tag, dictProperties, logType, duration, error) {
            writeTag(tag, dictProperties, logType, duration);
            if (Boolean(debugLogger) && Boolean(error)) {
                debugLogger.Write(tag, debugLogger.LoggingLevel.Interesting, error);
            }
        };
        this.WriteUserEngagement = function(tag, dictProperties) {
            writeTag(tag, dictProperties, this.LogType.Engagement, null);
        };
        this.ScenarioMonitor = function(scenarioName, startTag, successTag, unexpectedFailureTag, noResultTag, startProperties, logType) {
            var hadSuccess = false;
            var successProperties = null;
            var expectedFailureProperties = null;
            var unexpectedFailureProperties = null;
            var expectedFailureError = null;
            var unexpectedFailureError = null;
            var hadExpectedFailure = false;
            var hadUnexpectedFailure = false;
            var expectedFailureTag;
            var startTime;
            var disposed = false;
            var logStart = function() {
                that.WriteStart(startTag, startProperties, logType, null);
            };
            var logSuccess = function(duration) {
                that.WriteSuccess(successTag, successProperties, logType, duration);
            };
            var logExpectedFailure = function(duration) {
                that.WriteFailure(expectedFailureTag, expectedFailureProperties, logType, duration, expectedFailureError);
            };
            var logUnexpectedFailure = function(duration) {
                that.WriteFailure(unexpectedFailureTag, unexpectedFailureProperties, logType, duration, unexpectedFailureError);
            };
            var logNoResult = function(duration) {
                that.WriteFailure(noResultTag, null, logType, duration);
            };

            this.Success = function(properties) {
                if (hadSuccess)
                    return;
                hadSuccess = true;
                successProperties = properties;
            };
            this.ExpectedFailure = function(tag, properties, error) {
                if (hadExpectedFailure)
                    return;
                hadExpectedFailure = true;
                expectedFailureProperties = properties;
                expectedFailureError = error;
                expectedFailureTag = tag;
            };
            this.UnexpectedFailure = function(tag, properties, error) {
                if (hadUnexpectedFailure)
                    return;
                hadUnexpectedFailure = true;
                unexpectedFailureProperties = properties;
                unexpectedFailureError = error;
                if (null != tag)
                    unexpectedFailureTag = tag;
            };
            var disposeEventFunc = function(evt) {
                disposeHelper();
            };

            this.Dispose = function() {
                disposeHelper();
            };
            function disposeHelper() {
                if (disposed)
                    return;
                disposed = true;
                var duration = Number(new Date()) - startTime;

                if (hadExpectedFailure) {
                    logExpectedFailure(duration);
                }
                else if (hadUnexpectedFailure) {
                    logUnexpectedFailure(duration);
                }
                else if (hadSuccess) {
                    logSuccess(duration);
                }
                else {
                    logNoResult(duration);
                }
                DOM.RemoveEventHandler(window, "onbeforeunload", disposeEventFunc);
            }
            logStart();
            DOM.AddEventHandler(window, "onbeforeunload", disposeEventFunc);
            startTime = Number(new Date());
        };
        this.ExecuteMonitoredCode = function(scenarioName, startTag, successTag, unexpectedFailureTag, noResultTag, functionToExecute, properties, logType) {
            var monitor = new that.ScenarioMonitor(scenarioName, startTag, successTag, unexpectedFailureTag, noResultTag, properties, logType);

            try {
                functionToExecute(monitor);
                monitor.Success(properties);
            }
            catch (e) {
                monitor.UnexpectedFailure(unexpectedFailureTag, properties, e);
                throw e;
            }
            finally {
                monitor.Dispose();
            }
        };
        this.ExecuteMonitoredAsync = function(scenarioName, startTag, successTag, unexpectedFailureTag, noResultTag, functionToExecute, onSuccess, onFailure, properties, logType) {
            var monitor = new that.ScenarioMonitor(scenarioName, startTag, successTag, unexpectedFailureTag, noResultTag, properties, logType);
            var onSuccessMonitored = function(sender, args) {
                try {
                    onSuccess(sender, args, monitor);
                    monitor.Success(properties);
                }
                catch (e) {
                    monitor.UnexpectedFailure(unexpectedFailureTag, properties, e);
                    throw e;
                }
                finally {
                    monitor.Dispose();
                }
            };
            var onFailureMonitored = function(sender, args) {
                try {
                    onFailure(sender, args, monitor);
                }
                catch (e) {
                    throw e;
                }
                finally {
                    monitor.UnexpectedFailure(unexpectedFailureTag, properties, args);
                    monitor.Dispose();
                }
            };

            try {
                functionToExecute(onSuccessMonitored, onFailureMonitored);
            }
            catch (e) {
                monitor.UnexpectedFailure(unexpectedFailureTag, properties, e);
                monitor.Dispose();
                throw e;
            }
        };
    };
    var defaultLogger = null;

    QoSLogger.GetLogger = function() {
        if (null == defaultLogger)
            defaultLogger = new QoSLogger.Logger();
        return defaultLogger;
    };
}
var RUMDelta;
var PerformanceLogger;

function PerformanceLogger_module_def() {
    PerformanceLogger.ControlPerformanceData = function(_controlId, _startTime, _endTime, _RenderTimeCalculator, _RenderTimeRequiredDataChecker) {
        this.ControlId = _controlId;
        this.StartTime = _startTime;
        this.EndTime = _endTime;
        this.RenderTimeCalculator = _RenderTimeCalculator;
        this.RenderTimeRequiredDataChecker = _RenderTimeRequiredDataChecker;
    };
    PerformanceLogger.ControlPerformanceData.prototype.RenderTime = 0;
    PerformanceLogger.PerformanceDataState = {
        Incomplete: 1,
        ReadyToUpload: 2,
        Uploaded: 3,
        TimeOut: 4
    };
    var PerformanceDataState = PerformanceLogger.PerformanceDataState;

    PerformanceLogger.Logger = function(cacheLogger) {
        this.PerformanceData = null;
        var controls = new Array(0);
        var expectedControls = new Array(0);
        var dataState = PerformanceDataState.Incomplete;
        var perfDataTimer = null;
        var checkInterval = 100;
        var errorTimeOut = 30000;
        var keyMetrics = ['ServerCorrelationId', 'ServerRequestDuration', 'EUPL', 'ServerUrl', 'ScenarioId', 'PageTransitionType', 'AppCache', 'FolderNav', 'W3cNavigationStart'];
        var dataStartTime = Number((new Date()).getTime());
        var isServerCorrelationIdCollected = false;
        var isPageTransitionCollected = false;
        var isServerLatencyCollected = false;
        var isAppCacheCollected = false;
        var isFolderNavCollected = false;
        var isEUPLCollected = false;
        var isMDSTimingCollected = false;
        var isW3cTimingCollected = false;
        var isW3cResourceTimingCollected = false;
        var isScenarioIdCollected = false;
        var isServerUrlCollected = false;
        var euplBreakDown = {};
        var that = this;

        if (IsNullOrUndefined(cacheLogger)) {
            cacheLogger = CacheLogger.GetLogger();
        }
        this.GetPerformanceData = function() {
            if (!IsNullOrUndefined(that.PerformanceData)) {
                return that.PerformanceData;
            }
            EnsureScriptFunc("sp.core.js", "SP.SlapiInternal", function() {
                if (IsNullOrUndefined(that.PerformanceData)) {
                    if (typeof SP === "object" && typeof SP.SlapiInternal === "object") {
                        var slapiInternal = SP.SlapiInternal;

                        that.PerformanceData = new slapiInternal.RUMOne();
                    }
                }
            });
            return that.PerformanceData;
        };
        this.GetPerformanceData();
        function SetPerfDataTimer() {
            perfDataTimer = setTimeout(LoopForDataCompleteness, checkInterval);
        }
        function ClearPerfDataTimer() {
            if (!IsNullOrUndefined(perfDataTimer)) {
                clearTimeout(perfDataTimer);
                perfDataTimer = null;
            }
        }
        function LoopForDataCompleteness() {
            ClearPerfDataTimer();
            if (dataState === PerformanceDataState.Uploaded || dataState === PerformanceDataState.TimeOut) {
                return;
            }
            var collected = true;
            var missedKeyMetrics = new Array(0);

            for (var i = 0; i < keyMetrics.length; i++) {
                var keyMetricValue = that.GetPerformanceDataPropertyValue(keyMetrics[i]);

                if (IsNullOrUndefined(keyMetricValue)) {
                    collected = false;
                    missedKeyMetrics.push(keyMetrics[i]);
                }
            }
            dataState = collected ? PerformanceDataState.ReadyToUpload : PerformanceDataState.Incomplete;
            if (dataState === PerformanceDataState.Incomplete) {
                if (!(window["OffSwitch"] == null || OffSwitch.IsActive("5DB2EE36-96C7-495F-877E-79DCAFC6ED72"))) {
                    that.WriteServerCorrelationId();
                    WriteServerUrl();
                    that.LogPerformanceData('EUPLBreakdown', JSON.stringify(euplBreakDown));
                    if (ReadyToComputeEUPL()) {
                        SetEUPLAndControlData();
                    }
                }
                if (Number((new Date()).getTime()) - Number(dataStartTime) > errorTimeOut) {
                    dataState = PerformanceDataState.TimeOut;
                    UploadPerfData();
                    EnsureScriptFunc("sp.core.js", "SP.SlapiInternal", function() {
                        ReportErrors('TimeOut', 'Did not get key perf metrics in ' + String(errorTimeOut) + ' milliseconds. Missed metrics: ' + missedKeyMetrics.join() + '.');
                    });
                }
                else {
                    if (window["OffSwitch"] == null || OffSwitch.IsActive("5DB2EE36-96C7-495F-877E-79DCAFC6ED72")) {
                        that.WriteServerCorrelationId();
                        WriteServerUrl();
                        that.LogPerformanceData('EUPLBreakdown', JSON.stringify(euplBreakDown));
                        if (ReadyToComputeEUPL()) {
                            SetEUPLAndControlData();
                        }
                    }
                }
            }
            else {
                try {
                    UploadPerfData();
                }
                catch (e) {
                    (function(errorText) {
                        if (typeof console != "undefined" && Boolean(console) && typeof console.error == "function") {
                            console.error(String(errorText));
                        }
                    })("PerformanceLogger: error writing RUMOne data.");
                }
                dataState = PerformanceDataState.Uploaded;
            }
            SetPerfDataTimer();
        }
        ;
        SetPerfDataTimer();
        function GetReadableDataState(_dataState) {
            if (IsNullOrUndefined(PerformanceDataState)) {
                return 'NaN';
            }
            for (var key in PerformanceDataState) {
                if (_dataState === PerformanceDataState[key]) {
                    return key;
                }
            }
            return 'NaN';
        }
        ;
        this.ResetPerformanceLogger = function() {
            dataStartTime = (new Date()).getTime();
            dataState = PerformanceDataState.Incomplete;
            isServerCorrelationIdCollected = false;
            isPageTransitionCollected = false;
            isServerLatencyCollected = false;
            isAppCacheCollected = false;
            isFolderNavCollected = false;
            isEUPLCollected = false;
            isMDSTimingCollected = false;
            isW3cTimingCollected = false;
            isW3cResourceTimingCollected = false;
            isScenarioIdCollected = false;
            isServerUrlCollected = false;
            controls = new Array(0);
            expectedControls = new Array(0);
            that.PerformanceData = null;
            that.GetPerformanceData();
            ClearPerfDataTimer();
            SetPerfDataTimer();
            euplBreakDown = {};
        };
        this.LogPerformanceData = function(key, value) {
            if (IsNullOrUndefined(key)) {
                return;
            }
            EnsureScriptFunc("sp.core.js", "SP.SlapiInternal", function() {
                that.GetPerformanceData();
                if (!VerifyPropertyMatchingSchema(key)) {
                    return;
                }
                that.PerformanceData[key] = value;
                CheckLateReporting({
                    Name: key,
                    Value: value
                });
            });
        };
        this.GetPerformanceDataPropertyValue = function(key) {
            if (IsNullOrUndefined(that.PerformanceData) || IsNullOrUndefined(key) || !VerifyPropertyMatchingSchema(key)) {
                return null;
            }
            return that.PerformanceData[key];
        };
        function VerifyPropertyMatchingSchema(propertyName) {
            var properties = GetRUMOnePropertyNames(that.PerformanceData);

            return (properties.join()).indexOf(propertyName) != -1;
        }
        ;
        function GetRUMOnePropertyNames(obj) {
            var names = new Array(0);
            var index = 0;

            if (!IsNullOrUndefined(obj)) {
                for (var property in obj) {
                    if (obj.hasOwnProperty(property)) {
                        names[index++] = property;
                    }
                }
            }
            return names;
        }
        ;
        this.WriteServerCorrelationId = function(correlationId) {
            if (isServerCorrelationIdCollected) {
                return;
            }
            if (!IsNullOrUndefined(correlationId)) {
                that.LogPerformanceData('ServerCorrelationId', correlationId);
            }
            else if (typeof g_correlationId === "string" && !IsNullOrUndefined(g_correlationId)) {
                that.LogPerformanceData('ServerCorrelationId', g_correlationId);
                isServerCorrelationIdCollected = true;
            }
        };
        function WriteServerUrl() {
            if (isServerUrlCollected) {
                return;
            }
            if (!IsNullOrUndefined(that.PerformanceData)) {
                that.LogPerformanceData('ServerUrl', window.location.href);
                isServerUrlCollected = true;
            }
        }
        ;
        this.WriteServerSideLatency = function WriteServerSideLatency(duration, iisLatency) {
            if (!IsNullOrUndefined(that.PerformanceData) && !isServerLatencyCollected) {
                if (!IsNullOrUndefined(duration)) {
                    that.LogPerformanceData('ServerRequestDuration', duration);
                    isServerLatencyCollected = true;
                }
                if (!IsNullOrUndefined(iisLatency)) {
                    that.LogPerformanceData('IISLatency', iisLatency);
                }
            }
        };
        this.WriteControlPerformanceData = function(controlData) {
            if (IsNullOrUndefined(controlData) || IsNullOrUndefined(controls)) {
                return;
            }
            controls.push(controlData);
        };
        function WriteControlDataToRUMOne(controlData) {
            if (IsNullOrUndefined(controls) || IsNullOrUndefined(that.PerformanceData) || IsNullOrUndefined(controlData)) {
                return;
            }
            var controlId = controlData.ControlId;
            var renderTime = controlData.RenderTime;

            if (IsNullOrUndefined(that.GetPerformanceDataPropertyValue('Control1Id'))) {
                that.LogPerformanceData('Control1Id', controlId);
                that.LogPerformanceData('Control1RenderTime', renderTime);
                return;
            }
            if (IsNullOrUndefined(that.GetPerformanceDataPropertyValue('Control2Id'))) {
                that.LogPerformanceData('Control2Id', controlId);
                that.LogPerformanceData('Control2RenderTime', renderTime);
                return;
            }
            if (IsNullOrUndefined(that.GetPerformanceDataPropertyValue('Control3Id'))) {
                that.LogPerformanceData('Control3Id', controlId);
                that.LogPerformanceData('Control3RenderTime', renderTime);
                return;
            }
            if (IsNullOrUndefined(that.GetPerformanceDataPropertyValue('Control4Id'))) {
                that.LogPerformanceData('Control4Id', controlId);
                that.LogPerformanceData('Control4RenderTime', renderTime);
                return;
            }
        }
        ;
        function ReadyToComputeEUPL() {
            var ready = true;

            if (IsNullOrUndefined(expectedControls) || IsNullOrUndefined(controls) || expectedControls.length === 0 || controls.length === 0) {
                return false;
            }
            for (var index = 0; index < expectedControls.length; index++) {
                var keyControl = LookUpControls(expectedControls[index], controls);

                if (IsNullOrUndefined(keyControl) || !keyControl.RenderTimeRequiredDataChecker(that, keyControl)) {
                    ready = false;
                    break;
                }
            }
            return ready;
        }
        ;
        function LookUpControls(_controlId, _controls) {
            if (IsNullOrUndefined(_controlId) || IsNullOrUndefined(_controls)) {
                return null;
            }
            for (var index = 0; index < _controls.length; index++) {
                if (_controlId === _controls[index].ControlId) {
                    return _controls[index];
                }
            }
            return null;
        }
        ;
        function SetEUPLAndControlData() {
            if (isEUPLCollected) {
                return;
            }
            var eupl = 0;

            if (IsNullOrUndefined(controls) || controls.length === 0) {
                return;
            }
            for (var index = 0; index < controls.length; index++) {
                var controlData = controls[index];

                controlData.RenderTime = controlData.RenderTimeCalculator(that, controlData);
                WriteControlDataToRUMOne(controlData);
                if (eupl < controlData.RenderTime) {
                    eupl = controlData.RenderTime;
                }
            }
            that.LogPerformanceData('EUPL', eupl);
            isEUPLCollected = true;
        }
        ;
        this.WriteAppCache = function(appCache) {
            if (isAppCacheCollected) {
                return;
            }
            that.LogPerformanceData('AppCache', appCache);
            isAppCacheCollected = true;
        };
        this.WriteFolderNav = function(folderNav) {
            if (isFolderNavCollected) {
                return;
            }
            that.LogPerformanceData('FolderNav', folderNav);
            isFolderNavCollected = true;
        };
        this.WritePageTransitionType = function(pageTransitionType) {
            if (isPageTransitionCollected) {
                return;
            }
            if (IsNullOrUndefined(pageTransitionType) || pageTransitionType < 0 || pageTransitionType > 4) {
                return;
            }
            that.LogPerformanceData('PageTransitionType', pageTransitionType);
            isPageTransitionCollected = true;
        };
        this.WriteScenarioId = function(scenarioId, overwrite) {
            if (isScenarioIdCollected && !overwrite) {
                return;
            }
            if (IsNullOrUndefined(scenarioId)) {
                return;
            }
            that.LogPerformanceData('ScenarioId', scenarioId);
            isScenarioIdCollected = true;
        };
        this.WriteMDSTiming = function(mdsIndex, timing) {
            if (isMDSTimingCollected) {
                return;
            }
            var MDSTimingName = ResolveMDSTimingName(mdsIndex);

            if (!IsNullOrUndefined(MDSTimingName)) {
                that.LogPerformanceData(MDSTimingName, timing);
                if (MDSTimingName === 'MDSAnimationEnd') {
                    isMDSTimingCollected = true;
                }
            }
        };
        this.CollectW3CPerfTimings = function() {
            if (isW3cTimingCollected) {
                return;
            }
            var w3cTimeStampNames = ['navigationStart', 'unloadEventStart', 'unloadEventEnd', 'fetchStart', 'redirectStart', 'redirectEnd', 'domainLookupStart', 'domainLookupEnd', 'connectStart', 'secureConnectStart', 'connectEnd', 'requestStart', 'responseStart', 'responseEnd', 'domLoading', 'domComplete', 'loadEventStart', 'loadEventEnd'];
            var perfTimingObject = GetWindowPerfTimingObject();

            if (IsNullOrUndefined(perfTimingObject)) {
                return;
            }
            var values = new Array(w3cTimeStampNames.length);

            for (var index = 0; index < w3cTimeStampNames.length; index++) {
                var w3cObject = perfTimingObject[w3cTimeStampNames[index]];

                if (IsNullOrUndefined(w3cObject)) {
                    continue;
                }
                that.LogPerformanceData(GetW3cTimingName(w3cTimeStampNames[index]), Number(w3cObject));
            }
            isW3cTimingCollected = true;
        };
        this.CollectW3cResourceTimings = function() {
            var index = 0;

            if (!isW3cResourceTimingCollected) {
                var allRequests = GetPerfResourcesTimingObject(false, 0);
                var iFrames = document.getElementsByTagName("iframe");

                for (index = 0; index < iFrames.length; index++) {
                    var iFramePerformance = null;

                    try {
                        iFramePerformance = GetPerfResourcesTimingObject(true, index);
                    }
                    catch (e) { }
                    if (Boolean(iFramePerformance)) {
                        allRequests.concat(iFramePerformance.getEntriesByType("resource"));
                    }
                }
                var fromSources = {};

                fromSources["SharePoint"] = function(element) {
                    return /\.sharepoint\.com|\.spoppe\.com/i.test(element.name);
                };
                fromSources["CDN"] = function(element) {
                    return /(cdn(ppe)?|static(ppe)?)\.sharepointonline\.com|contentstorage\.osi\.office\.net|\.akamaihd\.net/i.test(element.name);
                };
                fromSources["ThirdParty"] = function(element) {
                    return !fromSources["SharePoint"](element) && !fromSources["CDN"](element);
                };
                var types = {};

                types["ASPX"] = function(element) {
                    return /\.aspx/i.test(element.name);
                };
                types["JS"] = function(element) {
                    return /script/i.test(element.initiatorType);
                };
                types["CSS"] = function(element) {
                    return /link|css/i.test(element.initiatorType);
                };
                types["IMG"] = function(element) {
                    return /img/i.test(element.initiatorType);
                };
                var sources = Object.keys(fromSources);

                for (index = 0; index < sources.length; index++) {
                    var source = sources[index];
                    var requests = CategorizeResourceRequests(allRequests, {
                        from: fromSources[source],
                        requestType: null
                    });

                    that.LogPerformanceData(source + "RequestCountTotal", requests.length);
                    var typeKeys = Object.keys(types);

                    for (var typeIndex = 0; typeIndex < typeKeys.length; typeIndex++) {
                        var type = typeKeys[typeIndex];

                        that.LogPerformanceData(source + "RequestCount" + type, (CategorizeResourceRequests(requests, {
                            from: null,
                            requestType: types[type]
                        })).length);
                    }
                    if (requests.length > 0) {
                        that.LogPerformanceData(source + "RequestDownloadTime", Math.round(requests.reduce(function(sum, currentVal) {
                            return sum + currentVal.duration;
                        }, 0) / requests.length));
                        var files = JSON.stringify(requests.map(function(timing) {
                            return {
                                name: ((((timing.name.split("/")).map(function(urlToken) {
                                    return (urlToken.split("?"))[0];
                                })).filter(function(urlToken) {
                                    return urlToken && urlToken.length > 0;
                                })).slice(-1))[0].replace(/\(.*?\)/g, '()'),
                                startTime: Math.round(timing.startTime),
                                duration: Math.round(timing.duration)
                            };
                        }));

                        that.LogPerformanceData(source + "RequestNames", files);
                    }
                }
                isW3cResourceTimingCollected = true;
            }
        };
        function CategorizeResourceRequests(requests, categorizer) {
            var ret = [];

            for (var index = 0; index < requests.length; index++) {
                var request = requests[index];

                if ((!categorizer.from || categorizer.from(request)) && (!categorizer.requestType || categorizer.requestType(request))) {
                    ret.push(request);
                }
            }
            return ret;
        }
        ;
        function GetW3cTimingName(timingName) {
            return 'W3c' + (timingName.charAt(0)).toUpperCase() + timingName.slice(1);
        }
        ;
        function GetWindowPerfTimingObject() {
            var perfObject = window.self["performance"];

            if (IsNullOrUndefined(perfObject)) {
                return null;
            }
            var timingObject = perfObject.timing;

            if (IsNullOrUndefined(timingObject)) {
                return null;
            }
            return timingObject;
        }
        ;
        function GetPerfResourcesTimingObject(biframe, index) {
            var perfObject = null;

            try {
                if (biframe) {
                    var iFrames = document.getElementsByTagName("iframe");

                    perfObject = iFrames & iFrames.length > index ? iFrames[index].contentWindow["performance"] : null;
                }
                else {
                    perfObject = window.self["performance"];
                }
            }
            catch (e) { }
            if (IsNullOrUndefined(perfObject)) {
                return null;
            }
            var timingObject = perfObject.getEntriesByType("resource");

            if (IsNullOrUndefined(timingObject)) {
                return null;
            }
            return timingObject;
        }
        ;
        function ResolveMDSTimingName(mdsIndex) {
            switch (mdsIndex) {
            case 0:
                return 'MDSDownloadStart';
            case 1:
            case 2:
                return 'MDSParseDeltaStart';
            case 3:
                return 'MDSParseDeltaEnd';
            case 4:
                return 'MDSGCStart';
            case 5:
                return 'MDSGCEnd';
            case 6:
            case 7:
            case 8:
                return 'MDSCSSStart';
            case 9:
                return 'MDSCSSEnd';
            case 10:
                return 'MDSInnerHTMLStart';
            case 11:
            case 12:
                return 'MDSScriptLoaderStart';
            case 13:
                return 'MDSScriptLoaderEnd';
            case 14:
                return 'MDSAnimationStart';
            case 15:
                return 'MDSAnimationEnd';
            case 16:
                return 'MDSParallelDownloadStart';
            case 17:
                return 'MDSParallelDownloadEnd';
            default:
                return null;
            }
        }
        ;
        function CheckLateReporting(metric) {
            if (dataState === PerformanceDataState.Uploaded || dataState === PerformanceDataState.TimeOut) {
                var reason = "Late Reported Data";
                var message = JSON.stringify(metric);

                EnsureScriptFunc("sp.core.js", "SP.SlapiInternal", function() {
                    ReportErrors(reason, message);
                });
            }
        }
        ;
        function UploadPerfData() {
            if (IsNullOrUndefined(that.PerformanceData) || dataState != PerformanceDataState.ReadyToUpload && dataState != PerformanceDataState.TimeOut) {
                return;
            }
            if (IsNullOrUndefined(cacheLogger)) {
                return;
            }
            cacheLogger.WriteLog('RUMOne', that.GetPerformanceData(), true);
        }
        ;
        function ReportErrors(reason, message) {
            var slapiInternal = SP.SlapiInternal;
            var errorObj = new slapiInternal.RUMOneErrors();

            errorObj.Reason = reason;
            errorObj.Message = message;
            if (IsNullOrUndefined(cacheLogger)) {
                return;
            }
            cacheLogger.WriteLog('RUMOneErrors', errorObj);
        }
        ;
        this.AddExpectedControl = function(control) {
            if (expectedControls.indexOf && expectedControls.indexOf(control) === -1) {
                expectedControls.push(control);
            }
        };
        this.WriteEUPLBreakdown = function(euplBreakdown, overwrite) {
            if (euplBreakdown) {
                try {
                    var breakdown = JSON.parse(euplBreakdown);

                    for (var key in breakdown) {
                        if (!breakdown.hasOwnProperty(key)) {
                            continue;
                        }
                        that.AddEUPLBreakdown(key, breakdown[key], overwrite);
                    }
                }
                catch (e) { }
            }
        };
        this.AddEUPLBreakdown = function(euplName, value, overwrite) {
            if (Boolean(euplName) && !IsNullOrUndefined(value)) {
                if (IsNullOrUndefined(euplBreakDown[euplName]) || overwrite) {
                    euplBreakDown[euplName] = value;
                }
            }
        };
        this.CheckControlTimeRequiredDataAvailable = function(perfLogger, controlData) {
            if (IsNullOrUndefined(perfLogger) || IsNullOrUndefined(controlData)) {
                return false;
            }
            var folderNav = perfLogger.GetPerformanceDataPropertyValue('FolderNav');

            if (!IsNullOrUndefined(folderNav) && folderNav) {
                return true;
            }
            var pageTransitionType = perfLogger.GetPerformanceDataPropertyValue('PageTransitionType');

            if (IsNullOrUndefined(pageTransitionType)) {
                return false;
            }
            if (pageTransitionType === 1) {
                var downloadStart = perfLogger.GetPerformanceDataPropertyValue('MDSDownloadStart');

                if (IsNullOrUndefined(downloadStart)) {
                    return false;
                }
            }
            else {
                var navigationStart = perfLogger.GetPerformanceDataPropertyValue('W3cNavigationStart');

                if (IsNullOrUndefined(navigationStart)) {
                    return false;
                }
            }
            return true;
        };
        this.ComputeControlRenderTime = function(perfLogger, controlData) {
            if (IsNullOrUndefined(perfLogger) || IsNullOrUndefined(controlData)) {
                return 0;
            }
            var folderNav = perfLogger.GetPerformanceDataPropertyValue('FolderNav');

            if (!IsNullOrUndefined(folderNav) && folderNav) {
                return Number(controlData.EndTime) - Number(controlData.StartTime);
            }
            var pageTransitionType = perfLogger.GetPerformanceDataPropertyValue('PageTransitionType');
            var w3cNavigationStart = perfLogger.GetPerformanceDataPropertyValue('W3cNavigationStart');
            var downloadStart = perfLogger.GetPerformanceDataPropertyValue('MDSDownloadStart');

            if (IsNullOrUndefined(controlData.ControlId) || IsNullOrUndefined(controlData.EndTime) || IsNullOrUndefined(pageTransitionType)) {
                return 0;
            }
            if (pageTransitionType === 1) {
                if (IsNullOrUndefined(downloadStart)) {
                    return 0;
                }
                return Number(controlData.EndTime) - Number(downloadStart);
            }
            if (pageTransitionType > 1 && pageTransitionType <= 4) {
                if (Boolean(controlData.StartTime)) {
                    return Number(controlData.EndTime) - Number(controlData.StartTime);
                }
                else {
                    if (IsNullOrUndefined(w3cNavigationStart)) {
                        return 0;
                    }
                    return Number(controlData.EndTime) - Number(w3cNavigationStart);
                }
            }
            return 0;
        };
    };
    PerformanceLogger.GetLogger = function() {
        if (!Flighting.VariantConfiguration.IsExpFeatureClientEnabled(517)) {
            return null;
        }
        if (typeof g_RUMOneLogger == "undefined" || IsNullOrUndefined(g_RUMOneLogger)) {
            if (typeof SP == "object" && typeof SP.CacheLogger == "object" && !IsNullOrUndefined(SP.CacheLogger)) {
                g_RUMOneLogger = new PerformanceLogger.Logger(SP.CacheLogger);
            }
            else {
                g_RUMOneLogger = new PerformanceLogger.Logger();
            }
        }
        return g_RUMOneLogger;
    };
}
var SPRUMLogger;

function SPRUMLogger_module_def() {
    if (typeof SP.Performance == "undefined")
        SP.Performance = {};
    if (typeof SP.Performance.Log == "undefined") {
        SP.Performance.Log = function(logger) {
            var _rumlogger = new RUMDelta.Logger(logger);
            var _diTimerId = null;

            this.UploadNonMDSPageLoadTelemetry = function(pageContext, endTime) {
                var startTime = GetW3CPageLoadStartTime();

                if (Boolean(startTime)) {
                    var eupl = endTime - startTime;
                    var actionContext = GetActionContext(pageContext);

                    _rumlogger.UploadRUMData(actionContext, startTime, 0, 0, 0, eupl);
                }
            };
            var GetPageContextInfo = function(propName) {
                if (typeof _spPageContextInfo != "undefined" && Boolean(_spPageContextInfo) && Boolean(_spPageContextInfo[propName])) {
                    var propVal = _spPageContextInfo[propName];

                    if (Boolean(propVal)) {
                        return propVal;
                    }
                }
                return null;
            };
            var GetActionContext = function(pageContext) {
                var actionContext = (RUMDelta.Application.SharePoint << 16) + pageContext;

                return actionContext;
            };
            var GetW3CPageLoadStartTime = function() {
                var SP_PLTStart = 0;

                if (typeof performance != "undefined" && typeof performance.timing != "undefined") {
                    var _pt = performance.timing;

                    SP_PLTStart = Number(_pt.navigationStart);
                    if (SP_PLTStart == 0)
                        SP_PLTStart = Number(_pt.redirectStart);
                    if (SP_PLTStart == 0)
                        SP_PLTStart = Number(_pt.fetchStart);
                }
                return SP_PLTStart;
            };

            this.UploadFileXferTelemetry = function(source, startTime, endTime, byteCount) {
                var downloadType = -1;

                if (source.toLowerCase() == "wacdownload")
                    downloadType = 1;
                else if (source.toLowerCase() == "download")
                    downloadType = 2;
                if (downloadType != -1) {
                    var action = typeof RUMDelta.Application.SharePointFileXfer != "undefined" ? RUMDelta.Application.SharePointFileXfer : 3;
                    var actionContext = (action << 16) + downloadType;

                    _rumlogger.UploadRUMData(actionContext, startTime, 0, 0, byteCount, endTime - startTime);
                }
            };
        };
    }
}
var SPLoggers;

function SPLoggers_module_def() {
    if (typeof SP.ReadyToUploadLogs != "undefined")
        return;
    SP.ReadyToUploadLogs = function() {
    };
    var spUploader = function(uploadFunc) {
        var defaultUploader = null;

        this.CanUpload = function() {
            return null != defaultUploader;
        };
        this.OnLog = function() {
            if (null != defaultUploader)
                defaultUploader.OnLog();
        };
        this.OnUpload = function() {
            if (null != defaultUploader)
                defaultUploader.OnUpload();
        };
        SP.ReadyToUploadLogs = function() {
            if (null != defaultUploader)
                return;
            defaultUploader = new CacheLogger.DefaultUploader(uploadFunc);
            setTimeout(uploadFunc, 0);
        };
    };
    var useParent = false;

    try {
        useParent = window.parent != null && typeof window.parent.SP == "object" && typeof window.parent.SP.CacheLogger == "object" && window.parent.location.protocol == window.location.protocol && window.parent.location.host == window.location.host;
    }
    catch (exParentWindow) { }
    if (useParent) {
        var parentObj = window.parent;

        SP.DebugLogger = new DebugLogger.Logger(25, parentObj.SP.CacheLogger);
        SP.QoS = new QoSLogger.Logger(parentObj.SP.CacheLogger, SP.DebugLogger);
    }
    else {
        SP.CacheLogger = new CacheLogger.Logger("SPCacheLogger", BaseLogger.GetLogger(), spUploader);
        SP.DebugLogger = new DebugLogger.Logger(25, SP.CacheLogger);
        SP.QoS = new QoSLogger.Logger(SP.CacheLogger, SP.DebugLogger);
    }
    var baseLogger = {
        WriteLog: function(eventName, dictProperties) {
            SP.CacheLogger.WriteLog(eventName, dictProperties, true);
        },
        UploadData: function() {
        }
    };
    var spRUMLogger;

    SP.Performance.Log.GetLogger = function() {
        if (spRUMLogger == null) {
            spRUMLogger = new SP.Performance.Log(baseLogger);
        }
        return spRUMLogger;
    };
}
function _WriteDocEngagement(teamSiteTag, oneDriveTag, dictProperties) {
    var context = window["ctx"];

    if (context != null && (Boolean(context.RealSiteTemplateId) ? context.RealSiteTemplateId === 21 : context.SiteTemplateId === 21)) {
        SP.QoS.WriteUserEngagement(oneDriveTag, dictProperties);
    }
    else {
        SP.QoS.WriteUserEngagement(teamSiteTag, dictProperties);
    }
}
function _WriteDocDebugLog(teamSiteTag, oneDriveTag, level, e) {
    var context = window["ctx"];

    if (context != null && (Boolean(context.RealSiteTemplateId) ? context.RealSiteTemplateId === 21 : context.SiteTemplateId === 21)) {
        SP.DebugLogger.Write(oneDriveTag, level, e);
    }
    else {
        SP.DebugLogger.Write(teamSiteTag, level, e);
    }
}
function _WriteDocStartTag(teamSiteTag, oneDriveTag) {
    _WriteDocEngagement(teamSiteTag, oneDriveTag);
}
function _WriteDocSuccessTag(teamSiteTag, oneDriveTag) {
    _WriteDocEngagement(teamSiteTag, oneDriveTag);
}
function _WriteDocFailureTag(teamSiteTag, oneDriveTag) {
    _WriteDocEngagement(teamSiteTag, oneDriveTag);
}
function WriteDebugLogWithEventArgs(tag, args) {
    SP.DebugLogger.Write(tag, SP.DebugLogger.LoggingLevel.Interesting, getLoggingInfo(args));
}
var getLoggingInfo;
var addToInfoIfExists;
var _WOPIDocLoaded;
var SetWOPIDocLoaded;
var _TelemetryEndTime;
var UploadFileXferTelemetry;
var ReadyToUploadLogs;

function RumNonMDSHandler() {
    setTimeout(CollectRUMNonMDS, 0);
}
var SPThemeUtils;

function SPThemeUtils_module_def() {
    SPThemeUtils.ApplyCurrentTheme = ApplyCurrentTheme;
    SPThemeUtils.ClearThemeCache = ClearThemeCache;
    SPThemeUtils.GetCurrentStyleSheetText = GetCurrentStyleSheetText;
    SPThemeUtils.GetCurrentThemeCacheToken = GetCurrentThemeCacheToken;
    SPThemeUtils.GetSiteThemedCssFolderUrl = GetSiteThemedCssFolderUrl;
    SPThemeUtils.GetThemedStyleSheets = GetThemedStyleSheets;
    SPThemeUtils.GetThemeColor = GetThemeColor;
    SPThemeUtils.IsSiteThemed = IsSiteThemed;
    SPThemeUtils.LoadThemableResources = LoadThemableResources;
    SPThemeUtils.RegisterAllImages = RegisterAllImages;
    SPThemeUtils.RegisterCssReferences = RegisterCssReferences;
    SPThemeUtils.ReplaceCssTextForElement = ReplaceCssTextForElement;
    SPThemeUtils.SetThemeRetriever = SetThemeRetriever;
    SPThemeUtils.Suspend = SuspendTheming;
    SPThemeUtils.UseClientSideTheming = UseClientSideTheming;
    SPThemeUtils.UseShellThemes = UseShellThemes;
    SPThemeUtils.WhenThemeReady = WhenThemeReady;
    SPThemeUtils.WithCurrentTheme = WithCurrentTheme;
    SPThemeUtils.WithSiteTheme = WithSiteTheme;
    var strUndefined = "undefined";
    var _attrCssOriginalHref = "data-original-href";
    var _withTheme = WithSiteTheme;

    function Complain(complaint) {
        if (typeof console !== strUndefined && typeof console.warn !== strUndefined)
            console.warn(complaint);
    }
    function SuspendTheming() {
        (GetPageManager()).SuspendTheming();
    }
    function FlightingAvailable() {
        return typeof Flighting !== strUndefined && typeof Flighting.VariantConfiguration !== strUndefined && typeof Flighting.VariantConfiguration.IsExpFeatureClientEnabled !== strUndefined;
    }
    function UseClientSideTheming() {
        var wtGroup = 64;
        var wtCommSite = 68;
        var wtSTS3 = "STS#3";
        var wt;
        var wtConfiguration;
        var featureEnabled = FlightingAvailable() && (Flighting.VariantConfiguration.IsExpFeatureClientEnabled(104) || Flighting.VariantConfiguration.IsExpFeatureClientEnabled(157) || Flighting.VariantConfiguration.IsExpFeatureClientEnabled(120) && ((wt = GetWebTemplate()) == wtGroup || wt == wtCommSite || (wtConfiguration = GetWebTemplateConfiguration()) == wtSTS3));
        var useCST = featureEnabled && typeof Theming !== strUndefined;

        return useCST;
    }
    function UseShellThemes() {
        return UseClientSideTheming() && Flighting.VariantConfiguration.IsExpFeatureClientEnabled(107);
    }
    function GetPageManager() {
        return Theming.GetPageManager();
    }
    function GetCurrentStyleSheetText(styleSheetUrl) {
        return (GetPageManager()).GetCurrentStyleSheetText(styleSheetUrl);
    }
    function GetThemedStyleSheets() {
        return (GetPageManager()).GetThemedStyleSheets();
    }
    function GetThemeColor(colorSlot, opacity) {
        return (GetPageManager()).GetColorFromPalette(colorSlot, opacity);
    }
    function WhenImagesThemed(callback) {
        if (UseClientSideTheming())
            (GetPageManager()).WhenImagesThemed(callback);
        else
            callback();
    }
    function WhenThemeReady(callback) {
        if (UseClientSideTheming())
            (GetPageManager()).WhenReady(callback);
        else
            callback();
    }
    function GetResponseText(xhr) {
        var strResponseText;

        try {
            strResponseText = xhr.responseText;
        }
        catch (exResponseText) { }
        return strResponseText;
    }
    function GetErrorPropertiesFromXHR(xhrError) {
        var errorProps = {
            PageCorrelation: window["g_correlationId"],
            PageURL: Nav.ajaxNavigate.get_href(),
            IsAppWeb: GetPageContextInfoProperty("isAppWeb"),
            XHR_Correlation: xhrError.getResponseHeader("SPRequestGuid"),
            XHR_Status: xhrError.status,
            WebTemplate: GetPageContextInfoProperty("webTemplate")
        };

        return errorProps;
    }
    function RequestHeader(header, value) {
        this.header = header;
        this.value = value;
    }
    function WithLoadedXMLHttpRequest(url, xhrResultCallback, requestHeaders) {
        var req = new XMLHttpRequest();

        req.onreadystatechange = function() {
            if (req != null && req.readyState != 4)
                return;
            xhrResultCallback(req);
            req = null;
        };
        try {
            req.open("GET", url, true);
            if (requestHeaders != null) {
                for (var i = 0; i < requestHeaders.length; i++) {
                    var rh = requestHeaders[i];

                    req.setRequestHeader(rh.header, rh.value);
                }
            }
            req.send("");
        }
        catch (exSendRequest) {
            xhrResultCallback(req);
            req = null;
        }
    }
    function WithUrlContents(url, resultCallback, xhrErrorCallback, requestHeaders) {
        WithLoadedXMLHttpRequest(url, CallbackWithUrlContents, requestHeaders);
        function CallbackWithUrlContents(req) {
            var responseText = null;

            if (req.status != 200 && Boolean(xhrErrorCallback)) {
                xhrErrorCallback(req);
            }
            else {
                if (req.status == 200) {
                    responseText = req.responseText;
                }
                resultCallback(responseText);
            }
        }
    }
    function WithUrlContentsMonitored(url, monitoredResultCallback, xhrMonitoredErrorCallback, requestHeaders, scenarioName, startTag, successTag, failureTag, noResultTag) {
        if (!scenarioName)
            scenarioName = "WithUrlContents";
        if (!startTag)
            startTag = scenarioName + "_Start";
        if (!successTag)
            successTag = scenarioName + "_Success";
        if (!failureTag)
            failureTag = scenarioName + "_Failure";
        if (!noResultTag)
            noResultTag = scenarioName + "_NoResult";
        var urlRequestMonitor = new SP.QoS.ScenarioMonitor(scenarioName, startTag, successTag, failureTag, noResultTag);

        WithUrlContents(url, ResultCallbackForMonitoring, ErrorCallbackForMonitoring, _restHeaders);
        function ResultCallbackForMonitoring(strResult) {
            monitoredResultCallback(strResult, urlRequestMonitor);
            if (urlRequestMonitor != null) {
                urlRequestMonitor.Success();
                urlRequestMonitor.Dispose();
            }
        }
        function ErrorCallbackForMonitoring(xhrError) {
            if (Boolean(xhrMonitoredErrorCallback)) {
                xhrMonitoredErrorCallback(xhrError, urlRequestMonitor);
            }
            else if (urlRequestMonitor != null) {
                urlRequestMonitor.UnexpectedFailure();
                monitoredResultCallback(null, urlRequestMonitor);
                urlRequestMonitor.Dispose();
            }
        }
    }
    var _restHeaders = [new RequestHeader("Content-Type", "application/x-www-form-urlencoded"), new RequestHeader("ACCEPT", "application/json; odata = verbose")];

    function WithRestValue(url, resultCallback, xhrErrorCallback) {
        WithUrlContents(url, resultCallback, xhrErrorCallback, _restHeaders);
    }
    function WithRestValueMonitored(url, monitoredResultCallback, xhrMonitoredErrorCallback, scenarioName, startTag, successTag, failureTag, noResultTag) {
        WithUrlContentsMonitored(url, monitoredResultCallback, xhrMonitoredErrorCallback, _restHeaders, scenarioName, startTag, successTag, failureTag, noResultTag);
    }
    function GetPageContextInfoProperty(propName) {
        var prop = null;

        if (typeof _spPageContextInfo != 'undefined') {
            prop = _spPageContextInfo[propName];
        }
        return prop;
    }
    function GetCurrentLcid() {
        var lcid = Number(GetPageContextInfoProperty("currentLanguage"));

        if (isNaN(lcid))
            lcid = 1033;
        return lcid;
    }
    function GetSiteThemeCacheToken() {
        return GetPageContextInfoProperty("themeCacheToken");
    }
    function GetSiteThemedCssFolderUrl() {
        return GetPageContextInfoProperty("themedCssFolderUrl");
    }
    function GetWebServerRelativeUrl() {
        var webUrl = GetPageContextInfoProperty("webServerRelativeUrl");

        if (!Boolean(webUrl))
            webUrl = "/";
        return webUrl;
    }
    function GetWebTemplate() {
        var webTemplate = -1;
        var strWebTemplate = GetPageContextInfoProperty("webTemplate");

        if (strWebTemplate != null) {
            webTemplate = parseInt(strWebTemplate);
        }
        return webTemplate;
    }
    function GetWebTemplateConfiguration() {
        var webTemplateConfiguration = null;
        var strWebTemplateConfiguration = GetPageContextInfoProperty("webTemplateConfiguration");

        if (strWebTemplateConfiguration != null) {
            webTemplateConfiguration = strWebTemplateConfiguration;
        }
        return webTemplateConfiguration;
    }
    function UserCannotFetchTheme() {
        var SPBasePermissions_Open = 0x10000;
        var nonMDSPage = false;

        try {
            nonMDSPage = !Nav.isMDSUrl(window.location.href);
        }
        catch (exIgnore) { }
        return nonMDSPage && GetPageContextInfoProperty("webPermMasks") != null && !UserHasPermissionLow(SPBasePermissions_Open);
    }
    function UserHasPermissionLow(permissionLevel) {
        var webPermMasks = GetPageContextInfoProperty("webPermMasks");
        var webPermMasksLow = webPermMasks != null ? Number(webPermMasks["Low"]) : 0;
        var hasPerm = (webPermMasksLow & permissionLevel) == permissionLevel;

        return hasPerm;
    }
    function IsSiteThemed() {
        return GetSiteThemedCssFolderUrl() != null;
    }
    function ParseJsonOrUndefined(strJson) {
        var result;

        if (strJson != null) {
            try {
                result = JSON.parse(strJson);
            }
            catch (exParsingJson) { }
        }
        return result;
    }
    var _key_ThemeCache = "SPThemeCache";
    var _key_ThemeCacheToken = "SPThemeCacheToken";

    function ClearThemeCache() {
        BrowserStorage.local.removeItem(_key_ThemeCache);
        BrowserStorage.local.removeItem(_key_ThemeCacheToken);
    }
    function CacheTheme(strThemeData, cacheToken) {
        try {
            if (cacheToken != null && JSON.parse(strThemeData) != null) {
                BrowserStorage.local.setItem(_key_ThemeCache, strThemeData);
                BrowserStorage.local.setItem(_key_ThemeCacheToken, cacheToken);
            }
        }
        catch (exThemeDataParsing) { }
    }
    function GetCachedTheme() {
        var result = null;
        var currentCacheToken = GetSiteThemeCacheToken();
        var storedCacheToken = BrowserStorage.local.getItem(_key_ThemeCacheToken);

        if (Boolean(storedCacheToken) && storedCacheToken == currentCacheToken) {
            result = BrowserStorage.local.getItem(_key_ThemeCache);
        }
        return result;
    }
    function GetCurrentThemeCacheToken() {
        return (GetPageManager()).GetCacheToken();
    }
    function ExtractThemeDataFromREST(strData) {
        var themeJson = null;
        var objRestData = ParseJsonOrUndefined(strData);

        if (objRestData != null && objRestData.d != null)
            themeJson = objRestData.d.GetContextWebThemeData;
        return themeJson;
    }
    function ParseThemeData(strThemeData) {
        var themeInfo = null;
        var themeData = ParseJsonOrUndefined(strThemeData);

        themeInfo = new Theming.ThemeInfo(themeData);
        return themeInfo;
    }
    function SetThemeRetriever(withTheme) {
        _withTheme = withTheme == null ? WithSiteTheme : withTheme;
    }
    function WithCurrentTheme(themeCallback, bForceLoad) {
        _withTheme(themeCallback, bForceLoad);
    }
    var _strThemeOverride = "ThemeOverride";

    function WithSiteTheme(themeCallback, bForceLoad) {
        if (window["Theming"] == null || !bForceLoad && !Theming.Utilities.CanRecolorImages()) {
            themeCallback(null);
            return;
        }
        var overrideTheme = Nav.getUrlKeyValue(_strThemeOverride);
        var hasOverride = Boolean(overrideTheme);
        var cachedTheme = !hasOverride ? GetCachedTheme() : null;

        if (cachedTheme == null && !UserCannotFetchTheme()) {
            var CombinePathFragments = Theming.Utilities.CombinePathFragments;
            var requestedTheme = hasOverride ? "&" + _strThemeOverride + "=" + encodeURIComponent(overrideTheme) : '';
            var themeDataUrl = CombinePathFragments(GetWebServerRelativeUrl(), '_api/SP.Web.GetContextWebThemeData?lcid=' + String(GetCurrentLcid()) + requestedTheme);

            WithRestValueMonitored(themeDataUrl, CallbackWithCurrentTheme, ErrorLoadingCurrentTheme, "ClientSideTheming_FetchTheme", "ClientSideTheming_StartFetchTheme", "ClientSideTheming_SuccessFetchTheme", "ClientSideTheming_FailureFetchTheme");
        }
        else {
            themeCallback(ParseThemeData(cachedTheme));
        }
        function CallbackWithCurrentTheme(strTheme, monitor) {
            if (strTheme !== null) {
                var strData = ExtractThemeDataFromREST(strTheme);

                if (!Boolean(strData)) {
                    monitor.UnexpectedFailure("ClientSideTheming_FetchTheme_InvalidResponse");
                    Complain("SPThemeUtils: Could not load theme data.");
                    strData = null;
                }
                else {
                    if (!Boolean(Nav.getUrlKeyValue(_strThemeOverride))) {
                        CacheTheme(strData, GetSiteThemeCacheToken());
                    }
                }
            }
            themeCallback(ParseThemeData(strData));
        }
        function ErrorLoadingCurrentTheme(xhrError, monitor) {
            var xhrStatusCode = xhrError.status;

            if (xhrStatusCode == 401 || xhrStatusCode == 403) {
                monitor.ExpectedFailure("ClientSideTheming_FailureFetchTheme_Unauthorized", GetErrorPropertiesFromXHR(xhrError), GetResponseText(xhrError));
            }
            else {
                monitor.UnexpectedFailure(null, GetErrorPropertiesFromXHR(xhrError), GetResponseText(xhrError));
            }
            monitor.Dispose();
            themeCallback(ParseThemeData(null));
        }
    }
    function RegisterDefaultSharePointCss() {
        var linkElements = document.getElementsByTagName("link");
        var lElements = linkElements.length;

        for (var i = 0; i < lElements; i++) {
            var linkElement = linkElements[i];
            var linkHref = linkElement.href;

            if (linkHref != null && (linkHref.toUpperCase()).indexOf("/DEFAULTCSS.ASHX") >= 0) {
                var originalHref = linkElement.getAttribute(_attrCssOriginalHref);

                (GetPageManager()).AddCssLink(linkHref, originalHref, linkElement);
                break;
            }
        }
    }
    function RegisterAllImages(bSync) {
        if (UseClientSideTheming()) {
            (GetPageManager()).RegisterAllImages(bSync);
        }
    }
    function MakeCSSRelativeUrl(originalUrl) {
        return Theming.Utilities.MakeFixupCallbackForCssFile(originalUrl);
    }
    function RegisterCssReferences(cssRefs) {
        if (!(window["OffSwitch"] == null || OffSwitch.IsActive("B11B9DA7-DAFA-4237-B593-ECBA1E3B888D")) && cssRefs != null) {
            var tmpLink = document.createElement("a");

            for (var i = 0; i < cssRefs.length; i++) {
                var cssRef = cssRefs[i];

                if (cssRef == null)
                    continue;
                var url = cssRef.Url;
                var originalUrl = cssRef.OriginalUrl;
                var id = cssRef.Id;

                if (Boolean(url) && Boolean(id)) {
                    tmpLink.href = url;
                    var normalizedUrl = tmpLink.href;
                    var element = document.getElementById(id);

                    if (element != null && element.href != normalizedUrl) {
                        cssRef.Url = element.href;
                        if (originalUrl == url) {
                            cssRef.OriginalUrl = element.href;
                        }
                    }
                }
            }
        }
        (GetPageManager()).RegisterCssReferences(cssRefs, null);
    }
    function RestoreCssLinksToOriginalUrls() {
        var linkElements = document.getElementsByTagName("link");
        var numLinks = linkElements.length;

        for (var iLinkElement = 0; iLinkElement < numLinks; iLinkElement++) {
            var linkElement = linkElements[iLinkElement];
            var originalHrefValue = linkElement.getAttribute(_attrCssOriginalHref);

            if (Boolean(originalHrefValue) && linkElement.rel != null && linkElement.rel.toLowerCase() == "stylesheet") {
                linkElement.href = originalHrefValue;
            }
        }
    }
    function RemoveElementFromDom(element) {
        if (element != null && element.parentNode != null)
            element = element.parentNode.removeChild(element);
        return element;
    }
    function OnWindowUnload(fn) {
        DOM.AddEventHandler(window, "onunload", fn, false);
    }
    function RemoveAllElementsWithId(elementId) {
        var removalAttempts = 100;

        while (RemoveElementFromDom(document.getElementById(elementId)) && --removalAttempts >= 0) { }
    }
    function TemporaryStyle(elementId, cssText) {
        var _element = null;

        RemoveAllElementsWithId(elementId);
        if (Boolean(cssText)) {
            _element = document.createElement("style");
            _element.type = "text/css";
            _element.id = elementId;
            Theming.ReplaceCssTextForElement(_element, cssText);
            var head = (document.getElementsByTagName("head"))[0];

            _element = head.appendChild(_element);
            OnWindowUnload(Remove);
            setTimeout(Remove, 7000);
        }
        this.Remove = Remove;
        function Remove() {
            RemoveElementFromDom(_element);
            _element = null;
        }
    }
    function CancelableLogger(strSuccess, strCanceled) {
        var _startTime = GetCurrentTime();
        var _logged = false;

        this.cancel = function() {
            LogResult(true);
        };
        this.success = function() {
            LogResult(false);
        };
        function LogResult(bCanceled) {
            if (!_logged) {
                _logged = true;
                var timeSinceStart = GetCurrentTime() - _startTime;

                if (!bCanceled) {
                    LogSuccess(strSuccess, timeSinceStart);
                }
                else {
                    LogFailure(strCanceled, timeSinceStart);
                }
            }
        }
        ;
    }
    var _cssThemeLogger;
    var _imagesThemeLogger;
    var _themingTimeout;

    function CancelPendingLoggers() {
        if (_themingTimeout != null) {
            clearTimeout(_themingTimeout);
            _themingTimeout = null;
        }
        if (_cssThemeLogger != null) {
            _cssThemeLogger.cancel();
            _cssThemeLogger = null;
        }
        if (_imagesThemeLogger != null) {
            _imagesThemeLogger.cancel();
            _imagesThemeLogger = null;
        }
    }
    function ApplyCurrentTheme(hideContentWhileTheming) {
        var idThemingCurtain = "SPThemeHideForms";

        if (UseClientSideTheming()) {
            var styleHideForms = new TemporaryStyle(idThemingCurtain, hideContentWhileTheming ? "form {opacity:0 !important}" : "");
            var styleHideImages = new TemporaryStyle("SPThemeHideImages", "img {opacity:0 !important}");

            RegisterDefaultSharePointCss();
            _withTheme(function ApplyThemeInfo(themeInfo) {
                if (themeInfo == null) {
                    themeInfo = new Theming.ThemeInfo(null);
                }
                if (!Theming.Utilities.CanRecolorImages()) {
                    themeInfo.NoImageRecoloring = true;
                }
                CancelPendingLoggers();
                SuspendTheming();
                WhenThemeReady(styleHideForms.Remove);
                WhenImagesThemed(styleHideImages.Remove);
                if (!themeInfo.IsDefault) {
                    LogStart("ClientSideTheming_StartTheme");
                    _cssThemeLogger = new CancelableLogger("ClientSideTheming_SuccessTheme", "ClientSideTheming_FailureTheme_Cancel");
                    (GetPageManager()).WhenReady(_cssThemeLogger.success);
                    if (!themeInfo.NoImageRecoloring) {
                        LogStart("ClientSideTheming_StartThemeImages");
                        _imagesThemeLogger = new CancelableLogger("ClientSideTheming_SuccessThemeImages", "ClientSideTheming_FailureThemeImages_Cancel");
                        WhenImagesThemed(_imagesThemeLogger.success);
                    }
                }
                else {
                    var startTime = GetCurrentTime();
                    var capturedThemingTimeout = _themingTimeout = setTimeout(function() {
                        LogFailure("ClientSideTheming_FailureApplyDefault", GetCurrentTime() - startTime);
                    }, 1000);

                    WhenThemeReady(function() {
                        clearTimeout(capturedThemingTimeout);
                    });
                }
                (GetPageManager()).SetTheme(themeInfo);
            });
            if (IsSiteThemed())
                LoadThemableResources();
        }
        else if (!(window["OffSwitch"] == null || OffSwitch.IsActive("DCF7FB71-8493-4615-8A9A-53F9E7ED0210"))) {
            RemoveAllElementsWithId(idThemingCurtain);
        }
    }
    function LoadThemableResources() {
        (GetPageManager()).LoadThemableResources();
    }
    function LogStart(tag) {
        SP.QoS.WriteStart(tag, null, SP.QoS.LogType.Diagnostic);
    }
    function LogSuccess(tag, duration) {
        SP.QoS.WriteSuccess(tag, null, SP.QoS.LogType.Diagnostic, duration);
    }
    function LogFailure(tag, duration) {
        SP.QoS.WriteFailure(tag, null, SP.QoS.LogType.Diagnostic, duration);
    }
    function GetCurrentTime() {
        return (new Date).getTime();
    }
    function RemoveChildNodes(element) {
        while (element.lastChild != null)
            element.removeChild(element.lastChild);
    }
    function TryReplaceStyleSheetCssText(element, newCss) {
        var success = false;

        if (element != null) {
            try {
                if (typeof element.styleSheet != "undefined" && element.styleSheet != null && typeof element.styleSheet.cssText != "undefined") {
                    element.styleSheet.cssText = newCss;
                    success = true;
                }
            }
            catch (exCannotSetCssText) { }
        }
        return success;
    }
    function ReplaceCssTextForElement(element, newCss) {
        var success = TryReplaceStyleSheetCssText(element, newCss);

        if (!success) {
            RemoveChildNodes(element);
            element.appendChild(document.createTextNode(newCss));
        }
    }
}
var SuiteNavRendering;

function SuiteNavRendering_module_def() {
    var _jsProtocol = "javascript:";
    var c_defaultSuiteDataVersion = 2;
    var hasSiteSettingsMenuItem = false;

    SuiteNavRenderingOptions.prototype = {
        brandingLogo: "",
        brandingLogoLink: "",
        brandingLogoTitle: "",
        brandingText: "",
        culture: "",
        dataEndpoint: "",
        signInLink: "",
        top: "",
        version: c_defaultSuiteDataVersion
    };
    function SuiteNavRenderingOptions() {
    }
    SuiteNavRendering.SuiteNavRenderingOptions = SuiteNavRenderingOptions;
    SuiteNavRendering.RenderSuiteNav = function RenderSuiteNav(renderingOptions) {
        var suiteLinksDiv = renderingOptions.top;
        var shellDataRestMethod = renderingOptions.dataEndpoint;
        var cultureName = renderingOptions.culture;
        var signInLink = renderingOptions.signInLink;
        var suiteDataVersion = renderingOptions.version;

        if (!(suiteDataVersion > 0))
            suiteDataVersion = c_defaultSuiteDataVersion;
        if (!!shellDataRestMethod && !!cultureName) {
            shellDataRestMethod += (shellDataRestMethod.indexOf("?") < 0 ? "?" : "&") + "v=" + String(suiteDataVersion) + "&Locale=" + cultureName;
        }
        var additionalCssText = "";
        var suiteDataObject = null;
        var suiteNavThemingModuleDefined = window["SuiteNavTheming"] != null;
        var suiteIsThemed = SPThemeUtils.IsSiteThemed() || suiteNavThemingModuleDefined && SuiteNavTheming.GetSuiteNavThemeColorsOverride() != null;

        if (suiteNavThemingModuleDefined) {
            SuiteNavTheming.WithSuiteThemingCss(function(suiteThemingCss) {
                additionalCssText = suiteThemingCss;
                if (suiteDataObject != null)
                    RenderSuiteNavWithData(suiteDataObject);
            });
        }
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
            var linksData = SuiteNavCommon.ExtractSuiteNavBarData(suiteData);

            AddMenuItemsFromDOM(linksData);
            UpdateActiveLink(linksData);
            UpdateHelpLink(linksData);
            UpdateStringsAndBranding(linksData, renderingOptions);
            var helpLink = linksData.HelpLink;

            if (helpLink != null && !Boolean(linksData.HelpLink.Text))
                linksData.HelpLink.Text = GetStsString("L_SuiteNav_Help_Link_Text");
            if (Boolean(linksData.UserDisplayName))
                linksData.IsAuthenticated = true;
            var objSignInLink = null;

            if (!linksData.IsAuthenticated && Boolean(signInLink)) {
                objSignInLink = {
                    "Text": GetStsString("L_SuiteNav_SignIn"),
                    "Url": signInLink
                };
            }
            linksData.ClientData = JSON.stringify({
                "IsRTL": document.documentElement.getAttribute('dir') == "rtl",
                "IsFallbackShell": true,
                "ShowAppLauncherV3": true,
                "SignInLink": objSignInLink
            });
            RemoveEmtpyArraysFromSuiteNavData(linksData);
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
            try {
                ThemeSuiteNav();
            }
            catch (exThemeSuiteNav) { }
        }
        function UpdateStringsAndBranding(linksData, opts) {
            var brandingLogo = opts.brandingLogo;
            var brandingLogoLink = opts.brandingLogoLink;
            var brandingLogoTitle = opts.brandingLogoTitle;

            linksData.StringsOverride = MakeStringsOverride(opts.brandingText);
            if (brandingLogo) {
                if (!brandingLogoTitle) {
                    brandingLogoTitle = "";
                }
                linksData.HasTenantBranding = true;
                linksData.TenantLogoUrl = {
                    Title: brandingLogoTitle,
                    Url: brandingLogo
                };
                if (brandingLogoLink)
                    linksData.LogoNavigationUrl = brandingLogoLink;
            }
        }
        function ThemeSuiteNav() {
            var suiteNavRenderingDiv = document.getElementById(suiteLinksDiv);

            CSSUtil.RemoveClass(suiteNavRenderingDiv, "ms-TopBarBackground-bgColor");
            if (Boolean(additionalCssText) && suiteNavRenderingDiv != null) {
                var firstChildOfSuiteLinksDiv = suiteNavRenderingDiv.firstChild;
                var styleElement = document.createElement("style");

                styleElement.id = "SuiteNavThemeStyle";
                styleElement.type = "text/css";
                SPThemeUtils.ReplaceCssTextForElement(styleElement, additionalCssText);
                if (firstChildOfSuiteLinksDiv != null) {
                    suiteNavRenderingDiv.insertBefore(styleElement, firstChildOfSuiteLinksDiv);
                }
                else {
                    suiteNavRenderingDiv.appendChild(styleElement);
                }
            }
        }
    };
    LinkData.prototype.TargetWindow = "";
    LinkData.prototype.Text = "";
    LinkData.prototype.Url = "";
    function LinkData() {
    }
    function GetStsString(locKey) {
        var stsStrings = typeof Strings != "undefined" && Strings.STS != null ? Strings.STS : {};

        return stsStrings[locKey];
    }
    var c_stringsOverride = MakeStringsOverride();

    function MakeStringsOverride(productName) {
        if (!productName)
            productName = GetStsString("L_SuiteNav_ProductName");
        return {
            "l_ShellCore_App_Provision_Alt_Text": GetStsString("L_SuiteNav_App_Provision_Alt_Text"),
            "l_ShellCore_App_Provision_Text": GetStsString("L_SuiteNav_App_Provision_Text"),
            "l_ShellCore_ContextualTitleFormat_Text": GetStsString("L_SuiteNav_ContextualTitleFormat_Text"),
            "l_ShellCore_Help_Title_Text": GetStsString("L_SuiteNav_Help_Title_Text"),
            "l_ShellCore_MeTile_Title_Text": GetStsString("L_OpenMenu_Text"),
            "l_ShellCore_NavMenu_MyApps_Text": GetStsString("L_SuiteNav_NavMenu_MyApps_Text"),
            "l_ShellCore_NavMenu_Title_Text": GetStsString("L_SuiteNav_NavMenu_Title_Text"),
            "l_ShellCore_O365_Text": productName,
            "l_ShellCore_O365_Title_Text": "",
            "l_ShellCore_Settings_Title_Text": GetStsString("L_SuiteNav_Settings_Title_Text")
        };
    }
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
    SuiteNavData.prototype.StringsOverride = c_stringsOverride;
    SuiteNavData.prototype.UserDisplayName = null;
    SuiteNavData.prototype.WorkloadLinks = null;
    function SuiteNavData() {
        var _this = this;

        _this.CurrentWorkloadHelpSubLinks = [];
        _this.CurrentWorkloadSettingsSubLinks = [];
        _this.CurrentWorkloadUserSubLinks = [];
        _this.HelpLink = new LinkData;
        _this.SignOutLink = new LinkData;
    }
    SuiteData.prototype.DoNotCache = false;
    SuiteData.prototype.NavBarData = null;
    SuiteData.prototype.SPSuiteVersion = c_defaultSuiteDataVersion;
    function SuiteData() {
        this.NavBarData = new SuiteNavData;
    }
    SuiteNavRendering.SuiteNavData = SuiteNavData;
    function IsNullOrEmptyArray(arrValue) {
        return arrValue == null || !(arrValue.length > 0);
    }
    function RemoveEmtpyArraysFromSuiteNavData(linksData) {
        var propsToCheck = ["CurrentWorkloadHelpSubLinks", "CurrentWorkloadSettingsSubLinks", "CurrentWorkloadUserSubLinks", "PinnedApps", "WorkloadLinks"];
        var lPropsToCheck = propsToCheck.length;

        for (var iProp = 0; iProp < lPropsToCheck; iProp++) {
            var propNameToCheck = propsToCheck[iProp];

            if (IsNullOrEmptyArray(linksData[propNameToCheck]))
                linksData[propNameToCheck] = null;
        }
    }
    function GenerateDefaultSuiteNavData() {
        var defaultSuiteData = new SuiteData;

        defaultSuiteData.DoNotCache = true;
        return defaultSuiteData;
    }
    function MakeSuiteNavDataLoader(shellDataRestMethod, onDataLoadError) {
        function SuiteNavDataLoader(resultCallback) {
            if (Boolean(shellDataRestMethod)) {
                var shellDataRestUrl = "/_api/" + shellDataRestMethod;

                if (typeof _spPageContextInfo != "undefined") {
                    var webServerRelativeUrl = _spPageContextInfo.webServerRelativeUrl;

                    if (Boolean(webServerRelativeUrl))
                        shellDataRestUrl = Nav.combineUrl(webServerRelativeUrl, shellDataRestUrl);
                }
                RequestUtil.WithRestValue(function(strShellData) {
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
                    if (!strSuiteData) {
                        var defaultSuiteData = GenerateDefaultSuiteNavData();

                        strSuiteData = JSON.stringify(defaultSuiteData);
                    }
                    resultCallback(strSuiteData);
                }, shellDataRestUrl);
            }
            else {
                resultCallback(JSON.stringify(GenerateDefaultSuiteNavData()));
            }
        }
        return SuiteNavDataLoader;
    }
    function WithSuiteNavData(shellDataCallback, shellDataRestMethod, suiteVersion) {
        var monitorName = "SuiteNavRendering_LoadData";
        var suiteNavDataMonitor = new SP.QoS.ScenarioMonitor(monitorName, monitorName + "_Start", monitorName + "_Success", monitorName + "_Failure", monitorName + "_NoResult");
        var loadSuiteNavData = MakeSuiteNavDataLoader(shellDataRestMethod, function(errorType) {
            suiteNavDataMonitor.UnexpectedFailure(monitorName + "_Fail" + errorType);
        });

        SuiteNavCommon.GetSuiteLinks(loadSuiteNavData, function(strSuiteNavData) {
            var suiteNavData = null;

            try {
                suiteNavData = JSON.parse(strSuiteNavData);
                if (suiteNavData == null) {
                    suiteNavData = GenerateDefaultSuiteNavData();
                }
                suiteNavDataMonitor.Success();
            }
            catch (exParseNavData) {
                suiteNavDataMonitor.UnexpectedFailure(monitorName + "_FailParseData");
            }
            suiteNavDataMonitor.Dispose();
            shellDataCallback(suiteNavData);
        }, suiteVersion);
    }
    function ExtractItemsFromMenu(menuElement, itemsContainer, linksData) {
        function UrlFromOnclick(clickHandler) {
            if (clickHandler == null) {
                return clickHandler;
            }
            else {
                clickHandler = (clickHandler.replace(/^javascript:/i, "")).replace(/return (true|false);?$/i, "");
                return _jsProtocol + "SuiteOnClick(" + Encoding.ScriptEncodeWithQuote(clickHandler) + ")";
            }
        }
        function MenuItemToLinkData(domMenuItem) {
            return {
                "Id": "SuiteMenu_" + domMenuItem.id,
                "MenuName": null,
                "Sublinks": null,
                "TargetWindow": null,
                "Text": domMenuItem.getAttribute("text"),
                "Url": UrlFromOnclick(domMenuItem.getAttribute("onmenuclick"))
            };
        }
        if (menuElement != null) {
            var menuItems = menuElement.getElementsByTagName("ie:menuitem");

            if (menuItems == null || menuItems.length == 0)
                menuItems = menuElement.getElementsByTagName("menuitem");
            var lMenuItems = menuItems.length;
            var previousGroupId;

            for (var iMenuItem = 0; iMenuItem < lMenuItems; iMenuItem++) {
                var menuItem = menuItems[iMenuItem];
                var hiddenScript = menuItem.getAttribute("hidden");
                var itemHidden = hiddenScript != null && Boolean(eval(hiddenScript));
                var itemType = menuItem.getAttribute("type");

                if (menuItem.id.indexOf("ID_PersonalInformation") > 0) {
                    hasSiteSettingsMenuItem = true;
                    itemHidden = itemHidden || linksData.AboutMeLink != null;
                }
                else if (menuItem.id.indexOf("ID_AboutMe") >= 0) {
                    if (linksData.AboutMeLink == null) {
                        linksData.AboutMeLink = MenuItemToLinkData(menuItem);
                    }
                    continue;
                }
                if (!itemHidden && itemType == "option") {
                    var groupId = menuItem.getAttribute("menugroupid");

                    if (previousGroupId !== groupId) {
                        if (previousGroupId != null) {
                            itemsContainer.push(null);
                        }
                        previousGroupId = groupId;
                    }
                    itemsContainer.push(MenuItemToLinkData(menuItem));
                }
            }
        }
    }
    SuiteNavRendering.AddMenuItemsFromDOM = AddMenuItemsFromDOM;
    function AddMenuItemsFromDOM(linksData) {
        if (linksData.UserDisplayName == null) {
            var userNameDiv = document.getElementById("SuiteNavUserName");

            if (userNameDiv != null && Boolean(userNameDiv.textContent)) {
                linksData.UserDisplayName = userNameDiv.textContent;
            }
        }
        var scriptEncodedSlashUppercase = "\\U002F";
        var menuItems = {
            welcomeItems: [],
            settingsItems: []
        };
        var menuData = document.getElementById("suiteMenuData");

        if (menuData == null) {
            return;
        }
        var menus = menuData.getElementsByTagName("menu");
        var itemsContainer = menuItems.welcomeItems;
        var lMenus = menus.length;

        hasSiteSettingsMenuItem = false;
        for (var iMenu = 0; iMenu < lMenus; iMenu++) {
            var menu = menus[iMenu];

            if (menu.id.indexOf("PersonalActionMenu") >= 0) {
                if (linksData.CurrentWorkloadUserSubLinks == null) {
                    linksData.CurrentWorkloadUserSubLinks = [];
                }
                var currentWorkloadUserSubLinks = linksData.CurrentWorkloadUserSubLinks;
                var userMenuLinks = [];

                ExtractItemsFromMenu(menu, userMenuLinks, linksData);
                var lUserLinks = userMenuLinks.length;

                for (var iUserLink = 0; iUserLink < lUserLinks; iUserLink++) {
                    var linkData = userMenuLinks[iUserLink];
                    var uppercaseUrl = "";

                    if (linkData != null && Boolean(linkData)) {
                        uppercaseUrl = linkData.Url.toUpperCase();
                    }
                    if (uppercaseUrl.indexOf(scriptEncodedSlashUppercase + "SIGNOUT.ASPX") >= 0) {
                        if (linksData.SignOutLink != null) {
                            linksData.SignOutLink.Url = linkData.Url;
                            if (!Boolean(linksData.SignOutLink.Text))
                                linksData.SignOutLink.Text = linkData.Text;
                        }
                    }
                    else if (uppercaseUrl.indexOf(scriptEncodedSlashUppercase + "PERSON.ASPX") >= 0) {
                        if (linksData.AboutMeLink == null)
                            linksData.AboutMeLink = linkData;
                    }
                    else {
                        currentWorkloadUserSubLinks.push(linkData);
                    }
                }
            }
            else if (menu.id.indexOf("SiteActionsMenu") >= 0) {
                if (linksData.CurrentWorkloadSettingsSubLinks == null) {
                    linksData.CurrentWorkloadSettingsSubLinks = [];
                }
                ExtractItemsFromMenu(menu, linksData.CurrentWorkloadSettingsSubLinks, linksData);
            }
        }
        if (Boolean(linksData.AboutMeLink) && Boolean(window["_spPageContextInfo"]) && !Boolean(_spPageContextInfo["ProfileUrl"])) {
            _spPageContextInfo["ProfileUrl"] = linksData.AboutMeLink.Url;
        }
        if (!hasSiteSettingsMenuItem)
            linksData.AboutMeLink = null;
    }
    SuiteNavRendering.UpdateHelpLink = UpdateHelpLink;
    function UpdateHelpLink(linksData) {
        var helpKey = typeof g_navBarHelpDefaultKey == "undefined" ? "HelpHome" : g_navBarHelpDefaultKey;

        if (linksData.HelpLink != null) {
            linksData.HelpLink.Url = _jsProtocol + "TopHelpButtonClick(" + Encoding.ScriptEncodeWithQuote(helpKey) + ")";
            linksData.HelpLink.TargetWindow = "";
        }
    }
    SuiteNavRendering.GetWebTemplate = GetWebTemplate;
    function GetWebTemplate() {
        var webTemplate = -1;

        if (typeof _spPageContextInfo != "undefined") {
            webTemplate = parseInt(_spPageContextInfo.webTemplate);
        }
        return webTemplate;
    }
    SuiteNavRendering.UpdateActiveLink = UpdateActiveLink;
    function UpdateActiveLink(navData) {
        var _allDocumentsLinkId = "ShellDocuments";
        var _allSitesLinkId = "ShellSites";
        var _defaultLinkId = "ShellSharepoint";
        var _mySiteHostWebTemplate = 54;
        var _mySitePersonalWebTemplate = 21;
        var _groupsWebTemplate = 64;
        var _adminLinkId = "ShellAdmin";
        var _newsfeedLinkId = "ShellNewsfeed";
        var _newsfeedLinkIdRegex = /^(?:Shell)?Newsfeed$/i;
        var _projectLinkId = "ShellProject";
        var _videoLinkId = "ShellVideo";
        var _adminSiteWebTemplate = 16;
        var _projectWebAppTemplate = 6221;
        var _mySiteDocumentLibraryListTemplateID = 700;
        var _hubWebTemplate = 65;

        if (navData == null) {
            return;
        }
        var _newsfeedOrSitesLinkId = (function() {
            var iLinks, wLinks = navData.WorkloadLinks || [];

            for (iLinks = 0; iLinks < wLinks.length; iLinks++)
                if (wLinks[iLinks].Id === _newsfeedLinkId)
                    return _newsfeedLinkId;
            var aLinks = navData.PinnedApps || [];

            for (iLinks = 0; iLinks < aLinks.length; iLinks++)
                if (_newsfeedLinkIdRegex.test(aLinks[iLinks].Id))
                    return _newsfeedLinkId;
            return _allSitesLinkId;
        })();
        var webTemplate = GetWebTemplate();
        var uri;
        var urlPath;

        switch (webTemplate) {
        case _adminSiteWebTemplate:
            navData.CurrentMainLinkElementID = _adminLinkId;
            break;
        case _mySiteHostWebTemplate:
            navData.CurrentMainLinkElementID = _newsfeedOrSitesLinkId;
            uri = new URI(Nav.ajaxNavigate.get_href());
            urlPath = uri.getPath(true);
            if (Boolean(urlPath)) {
                if ((urlPath.toLowerCase()).endsWith("/mybraryfirstrun.aspx")) {
                    navData.CurrentMainLinkElementID = _allDocumentsLinkId;
                }
            }
            break;
        case _projectWebAppTemplate:
            navData.CurrentMainLinkElementID = _projectLinkId;
            break;
        case _hubWebTemplate:
            if (document.getElementById('O365VideoPage') != null) {
                navData.CurrentMainLinkElementID = _videoLinkId;
            }
            else {
                navData.CurrentMainLinkElementID = _allSitesLinkId;
            }
            break;
        case _mySitePersonalWebTemplate:
            if (typeof g_wsaListTemplateId != "undefined" && g_wsaListTemplateId == _mySiteDocumentLibraryListTemplateID) {
                navData.CurrentMainLinkElementID = _allDocumentsLinkId;
            }
            else {
                navData.CurrentMainLinkElementID = _newsfeedOrSitesLinkId;
                uri = new URI(Nav.ajaxNavigate.get_href());
                urlPath = uri.getPath(true);
                if (Boolean(urlPath)) {
                    urlPath = urlPath.toLowerCase();
                    if (urlPath.endsWith("/social/followedcontent.aspx")) {
                        navData.CurrentMainLinkElementID = _allDocumentsLinkId;
                    }
                    else if (urlPath.endsWith("/social/sites.aspx")) {
                        navData.CurrentMainLinkElementID = _allSitesLinkId;
                    }
                    else if (urlPath.endsWith("/social/sitesdocuments.aspx")) {
                        navData.CurrentMainLinkElementID = _allDocumentsLinkId;
                    }
                    else if (urlPath.endsWith("/mybraryfirstrun.aspx")) {
                        navData.CurrentMainLinkElementID = _allDocumentsLinkId;
                    }
                    else if (urlPath.endsWith("/groupdocuments.aspx")) {
                        navData.CurrentMainLinkElementID = _allDocumentsLinkId;
                    }
                }
            }
            break;
        case _groupsWebTemplate:
            uri = new URI(Nav.ajaxNavigate.get_href());
            urlPath = uri.getPath(true);
            if (Boolean(urlPath) && (urlPath.toLowerCase()).endsWith("/groupsdocuments.aspx")) {
                navData.CurrentMainLinkElementID = _allDocumentsLinkId;
            }
            else {
                navData.CurrentMainLinkElementID = _defaultLinkId;
            }
            break;
        default:
            navData.CurrentMainLinkElementID = _allSitesLinkId;
            break;
        }
    }
}
var ModuleLink;

function ModuleLink_module_def() {
    var manifestRequestMap = {};
    var configuredRequireJS = false;

    ModuleLink.loadManifest = function(manifestName, scenarioName, callback) {
        if (typeof scenarioName === "function") {
            callback = scenarioName;
            scenarioName = void 0;
        }
        else if (typeof callback !== "function") {
            callback = function() {
            };
        }
        ensureRequireJS(function() {
        });
        if (!Boolean(manifestRequestMap[manifestName])) {
            manifestRequestMap[manifestName] = new ManifestInfoRequest(manifestName);
        }
        var request = manifestRequestMap[manifestName];

        request.getManifestInfo(function(manifestInfo) {
            ensureRequireJS(function() {
                if (!configuredRequireJS) {
                    var configFunc = new Function(manifestInfo.d.RequireJsScriptBlock);

                    configFunc.call(this);
                    configuredRequireJS = true;
                }
                if (Boolean(scenarioName)) {
                    var scenarios = manifestInfo.d.ScenarioMapping.results;

                    for (var i = 0; i < scenarios.length; i++) {
                        if (scenarios[i].Key === scenarioName) {
                            var moduleList = scenarios[i].Value.split(',');

                            require(moduleList);
                        }
                    }
                }
                callback.call(this, manifestInfo);
            });
        });
    };
    function ensureRequireJS(callback) {
        if (Boolean(window["requirejs"])) {
            callback();
        }
        else {
            if (typeof EnsureScriptFunc !== "undefined") {
                EnsureScriptFunc("require.js", "requirejs", function() {
                    callback();
                });
            }
        }
    }
    var ManifestInfoRequest = function(manifestName) {
        var manifestInfo;
        var xhr;
        var pendingCallbacks = [];

        this.getManifestInfo = function(callback) {
            if (isReady()) {
                callback(manifestInfo);
            }
            else {
                pendingCallbacks.push(callback);
                if (!isLoading()) {
                    startRequest();
                }
            }
        };
        function startRequest() {
            var url = "/_api/web/GetResourceManifestInformation(manifestName='";

            url += encodeURIComponent(manifestName);
            url += "')";
            xhr = new XMLHttpRequest();
            xhr.open("GET", url, true);
            xhr.setRequestHeader("Content-Type", "application/json;odata=verbose");
            xhr.setRequestHeader("Accept", "application/json;odata=verbose");
            xhr.onload = function requestListener() {
                manifestInfo = JSON.parse(xhr.responseText);
                pendingCallbacks.forEach(function(callback) {
                    callback(manifestInfo);
                });
                pendingCallbacks = [];
                xhr = void 0;
            };
            xhr.send();
        }
        function isReady() {
            return Boolean(manifestInfo);
        }
        function isLoading() {
            return Boolean(xhr);
        }
    };
}
function AllowCSSFiltersOnIE8() {
    var elem = document.getElementById("ms-hcTest");
    var isHC = false;

    if (Boolean(elem) && Boolean(elem.currentStyle) && elem.currentStyle["borderColor"] != "#f00") {
        isHC = true;
        CSSUtil.AddClass(document.body, "ms-core-isHC");
    }
    if (browseris.ie8down) {
        CSSUtil.AddClass(document.body, "ms-core-needIEFilter");
        if (isHC) {
            var s4ws = document.getElementById("s4-workspace");

            if (Boolean(s4ws))
                s4ws.style.filter = "";
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
