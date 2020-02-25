{
    if ("undefined" == typeof g_all_modules) {
        g_all_modules = {};
    }
    g_all_modules["sp.core.js"] = {
        "version": {
            "rmj": 16,
            "rmm": 0,
            "rup": 10337,
            "rpr": 12109
        }
    };
}
if (typeof spWriteProfilerMark == 'function')
    spWriteProfilerMark("perfMarkBegin_" + "sp.core.js");
Type.registerNamespace('SP');
if (typeof IEnumerator == "undefined") {
    var IEnumerator = function() {
    };

    IEnumerator.prototype = {
        get_current: null,
        moveNext: null,
        reset: null
    };
    IEnumerator.registerInterface("IEnumerator");
}
if (typeof IEnumerable == "undefined") {
    var IEnumerable = function() {
    };

    IEnumerable.prototype = {
        getEnumerator: null
    };
    IEnumerable.registerInterface("IEnumerable");
}
if (typeof IDisposable == "undefined") {
    var IDisposable = function() {
    };

    IDisposable.prototype = {
        dispose: null
    };
    IDisposable.registerInterface("IDisposable");
}
SP.EnumerableArray = function SP_EnumerableArray(array) {
    if (array == null)
        array = [];
    this._m_array = array;
};
SP.EnumerableArray.prototype = {
    _m_array: null,
    getEnumerator: function SP_EnumerableArray$getEnumerator() {
        return new SP._arrayEnumerator(this._m_array);
    },
    get_length: function SP_EnumerableArray$get_length() {
        return this._m_array.length;
    },
    get_count: function SP_EnumerableArray$get_count() {
        return this._m_array.length;
    },
    add: function SP_EnumerableArray$add(obj) {
        this._m_array.push(obj);
    },
    addRange: function SP_EnumerableArray$addRange(items) {
        Array.addRange(this._m_array, items);
    },
    clear: function SP_EnumerableArray$clear() {
        this._m_array.length = 0;
    },
    contains: function SP_EnumerableArray$contains(item) {
        return Array.contains(this._m_array, item);
    },
    indexOf: function SP_EnumerableArray$indexOf(item, start) {
        return Array.indexOf(this._m_array, item, start);
    },
    insert: function SP_EnumerableArray$insert(index, item) {
        Array.insert(this._m_array, index, item);
    },
    remove: function SP_EnumerableArray$remove(item) {
        Array.remove(this._m_array, item);
    },
    removeAt: function SP_EnumerableArray$removeAt(index) {
        Array.removeAt(this._m_array, index);
    },
    toArray: function SP_EnumerableArray$toArray() {
        return this._m_array;
    },
    toArrayList: function SP_EnumerableArray$toArrayList() {
        return this._m_array;
    }
};
SP._arrayEnumerator = function SP__arrayEnumerator(array) {
    this._m_array = array;
    this._m_index = -1;
    this.current = null;
};
SP._arrayEnumerator.prototype = {
    _m_index: 0,
    _m_array: null,
    get_current: function SP__arrayEnumerator$get_current() {
        return this._m_array[this._m_index];
    },
    moveNext: function SP__arrayEnumerator$moveNext() {
        this._m_index++;
        this.current = this._m_array[this._m_index];
        return this._m_index < this._m_array.length;
    },
    reset: function SP__arrayEnumerator$reset() {
        this.current = null;
        this._m_index = -1;
    }
};
SP.EnumerableArray.registerClass('SP.EnumerableArray', null, IEnumerable);
SP._arrayEnumerator.registerClass('SP._arrayEnumerator', null, IEnumerator);
Type.registerNamespace('SP');
SP.BWsaStreamTypes = function() {
};
SP.BWsaStreamTypes.prototype = {
    static: 1,
    cyclic: 2
};
SP.BWsaStreamTypes.registerEnum('SP.BWsaStreamTypes', false);
SP.SQMDP = function() {
};
SP.SQMDP.prototype = {
    none: 0,
    dataiD_SESSION_TYPE: 60,
    dataiD_BSQM_BROWSERINFO: 7982,
    dataiD_BSQM_MAXSTREAMROWS: 7993,
    dataiD_BSQM_MAXLSTREAMROWSOVERWRITTEN: 7994,
    dataiD_BSQM_MAXSTREAMROWSOVERWRITTENSTREAMID: 8047,
    dataiD_BSQM_MAXSTREAMROWSSTREAMID: 8048,
    dataiD_BSQM_OSDATA: 8049,
    dataiD_BSQM_COMMANDUIACTION: 8327,
    dataiD_BSQM_INVALIDVALUEDP: 8763,
    dataiD_OFFICESQMSESSIONTYPE: 8814,
    dataiD_BSQM_SCREENRESOLUTION: 9411,
    dataiD_BSQM_MOBILEDEVICE: 9412,
    dataiD_DOCUMENTID: 9797,
    dataiD_BSQMDOCUMENTID: 10273
};
SP.SQMDP.registerEnum('SP.SQMDP', false);
SP.IBWsaClient = function() {
};
SP.IBWsaClient.registerInterface('SP.IBWsaClient');
SP.PageTransitionType = function() {
};
SP.PageTransitionType.prototype = {
    None: 0,
    MdsToMds: 1,
    MdsToNonMds: 2,
    NonMdsToMds: 3,
    NonMdsToNonMds: 4
};
SP.PageTransitionType.registerEnum('SP.PageTransitionType', false);
SP.IBSQM = function() {
};
SP.IBSQM.registerInterface('SP.IBSQM');
SP.BWsaConfig = function SP_BWsaConfig() {
    this.$1O_0 = [60, 7982, 7993, 7994, 8047, 8048, 8049, 9411, 9412];
    this.$f_0 = '';
    this.$8_0 = false;
    this.$D_0 = false;
    this.$15_0 = null;
    this.$n_0 = 1800000;
    this.$m_0 = 65536;
    this.$o_0 = 2147483647;
    this.$1T_0 = 9;
    this.$1U_0 = 1000;
    this.$14_0 = 1000;
};
SP.BWsaConfig.prototype = {
    $f_0: null,
    $8_0: false,
    $D_0: false,
    $15_0: null,
    $n_0: 0,
    $m_0: 0,
    $o_0: 0,
    $1U_0: 0,
    $14_0: 0,
    $1T_0: 0,
    get_maxSessionMs: function SP_BWsaConfig$get_maxSessionMs$in() {
        return this.$n_0;
    },
    set_maxSessionMs: function SP_BWsaConfig$set_maxSessionMs$in(value) {
        this.$n_0 = value;
        return value;
    },
    get_uploadUrl: function SP_BWsaConfig$get_uploadUrl$in() {
        return this.$f_0;
    }
};
SP.Ticks = function SP_Ticks() {
};
SP.Ticks.getTicks32 = function SP_Ticks$getTicks32$st() {
    var $v_0 = new Date();
    var $v_1 = $v_0.getTime();

    if (!SP.Ticks.$19) {
        SP.Ticks.$19 = $v_1;
    }
    return 1 + $v_1 - SP.Ticks.$19 & 2147483647;
};
SP.Ticks.getTicks64 = function SP_Ticks$getTicks64$st() {
    var $v_0 = new Date();
    var $v_1 = $v_0.getTime();

    $v_1 = $v_1 + 11644473600000;
    $v_1 = $v_1 * 10000;
    return $v_1;
};
SP.TimerResetCheck = function SP_TimerResetCheck() {
};
SP.TimerResetCheck.isTimerResetNeeded = function SP_TimerResetCheck$isTimerResetNeeded$st() {
    var $v_0 = false;
    var $v_1 = new Date();
    var $v_2 = $v_1.getTime();

    if (!SP.TimerResetCheck.$12 || $v_2 - SP.TimerResetCheck.$12 > 60000) {
        $v_0 = true;
        SP.TimerResetCheck.$12 = $v_2;
    }
    return $v_0;
};
SP.StreamRowCounters = function SP_StreamRowCounters() {
};
SP.BWsaDatapoint = function SP_BWsaDatapoint(id) {
    this.m_WsaId = id;
    this.m_Value = 0;
    this.m_Ticks = SP.Ticks.getTicks32();
    this.m_Count = 0;
    this.m_Sum = 0;
};
SP.BWsaDatapoint.prototype = {
    m_WsaId: 0,
    m_Value: 0,
    m_Ticks: 0,
    m_Count: 0,
    m_Sum: 0
};
SP.WsaStreamRow = function SP_WsaStreamRow(dwNumElements) {
    this.m_Ticks = SP.Ticks.getTicks32();
    this.m_Values = new Array(dwNumElements);
};
SP.WsaStreamRow.prototype = {
    m_Ticks: 0,
    m_Values: null
};
SP.BWsaStream = function SP_BWsaStream(id, type, width, max) {
    if (max < 1 || max > 1000) {
        max = 1000;
    }
    this.m_WsaId = id;
    this.m_StreamType = type;
    this.m_Width = width;
    this.m_MaxRows = max;
    this.m_RowCount = 0;
    this.m_RowsOverwritten = 0;
    this.m_Rows = {};
};
SP.BWsaStream.prototype = {
    m_WsaId: 0,
    m_StreamType: 0,
    m_Width: 0,
    m_MaxRows: 0,
    m_RowCount: 0,
    m_RowsOverwritten: 0,
    m_Rows: null
};
SP.BWsaHeader = function SP_BWsaHeader() {
    this.m_StartTime = SP.Ticks.getTicks64();
    this.m_EndTime = 0;
};
SP.BWsaHeader.prototype = {
    m_StartTime: 0,
    m_EndTime: 0,
    m_CorrelationId: null,
    m_FlightId: null
};
SP.BWsaData = function SP_BWsaData() {
    this.m_cDataPoints = 0;
    this.m_cStreams = 0;
    this.m_cbStreams = 0;
    this.m_wsaHeader = new SP.BWsaHeader();
    this.m_wsaDatapoints = {};
    this.m_wsaStreams = {};
};
SP.BWsaData.prototype = {
    m_cDataPoints: 0,
    m_cStreams: 0,
    m_cbStreams: 0,
    m_wsaHeader: null,
    m_wsaDatapoints: null,
    m_wsaStreams: null
};
SP.BWsaClient = function SP_BWsaClient(uploadUrl, fIsOptedIn, sqmQosEnabled, qosDataPoints) {
    this.$$d_$22_0 = Function.createDelegate(this, this.$22_0);
    this.bWsaClientInit(uploadUrl, fIsOptedIn, sqmQosEnabled, qosDataPoints);
};
SP.BWsaClient.$27 = function SP_BWsaClient$$27$st() {
    var $v_0 = 0;
    var $v_1 = window.navigator.userAgent;
    var $v_2 = -1;

    if (($v_2 = $v_1.indexOf(' MSIE ')) > -1) {
        $v_2 += 6;
        $v_0 = 2 << 24;
    }
    else if (($v_2 = $v_1.indexOf(' Edge/')) > -1) {
        $v_2 += 6;
        $v_0 = 2 << 24;
    }
    else if (($v_2 = $v_1.indexOf(' Firefox/')) > -1) {
        $v_2 += 9;
        $v_0 = 3 << 24;
    }
    else if (($v_2 = $v_1.indexOf(' Chrome/')) > -1) {
        $v_2 += 8;
        $v_0 = 6 << 24;
    }
    else if (($v_2 = $v_1.indexOf(' Safari/')) > -1 && ($v_2 = $v_1.indexOf(' Version/')) > -1) {
        $v_2 += 9;
        $v_0 = 4 << 24;
    }
    else if (($v_2 = $v_1.indexOf('Opera/')) > -1) {
        $v_2 += 6;
        $v_0 = 5 << 24;
    }
    else {
        $v_0 = 1 << 24;
        $v_2 = -1;
    }
    if ($v_2 >= 0) {
        var $v_3 = SP.BWsaClient.$1j($v_1.substr($v_2));

        if (Sys.Browser.agent === Sys.Browser.InternetExplorer && $v_3[0] === 7 && $v_1.indexOf('Trident/4.0') >= 0) {
            $v_3[0] = 8;
        }
        $v_0 = $v_0 | ($v_3[0] << 16) + $v_3[1];
    }
    try {
        if (window.navigator.cookieEnabled) {
            $v_0 = $v_0 | 1073741824;
        }
        else {
            $v_0 = $v_0 | 1610612736;
        }
    }
    catch ($$e_4) { }
    $v_0 = $v_0;
    return $v_0;
};
SP.BWsaClient.$1j = function SP_BWsaClient$$1j$st($p0) {
    var $v_0 = [0, 0];

    if (SP.BWsaClient.$1S($p0.charAt(0))) {
        $v_0[0] = parseInt($p0);
    }
    for (var $v_1 = 0; $v_1 < $p0.length; $v_1++) {
        if (!SP.BWsaClient.$1S($p0.charAt($v_1))) {
            $p0 = $p0.substr($v_1 + 1);
            break;
        }
    }
    if (SP.BWsaClient.$1S($p0.charAt(0))) {
        $v_0[1] = parseInt($p0);
    }
    if ($v_0[0] < 0 || $v_0[0] > 255 || $v_0[1] < 0 || $v_0[1] > 65535) {
        $v_0[0] = 0;
        $v_0[1] = 0;
    }
    return $v_0;
};
SP.BWsaClient.$2B = function SP_BWsaClient$$2B$st() {
    var $v_0 = 0;
    var $v_1 = 1;
    var $v_2 = window.navigator.userAgent;

    if ($v_2.indexOf('Windows CE') >= 0) {
        $v_1 = 3;
    }
    else if ($v_2.indexOf('Windows') >= 0) {
        $v_1 = 2;
    }
    else if ($v_2.indexOf('PPC') >= 0 || $v_2.indexOf('Macintosh') >= 0) {
        $v_1 = 4;
    }
    else if ($v_2.indexOf('iPhone;') >= 0 || $v_2.indexOf('iPad;') >= 0 || $v_2.indexOf('iPod;') >= 0) {
        $v_1 = 7;
    }
    else if ($v_2.indexOf('SunOS') >= 0) {
        $v_1 = 5;
    }
    else if ($v_2.indexOf('Linux') >= 0) {
        $v_1 = 6;
    }
    $v_0 = $v_1 << 24;
    var $v_3 = 'Windows NT ';

    if ($v_1 === 7) {
        $v_3 = ' OS ';
    }
    var $v_4 = $v_2.indexOf($v_3);

    if ($v_4 < 0) {
        $v_3 = 'Mac OS X ';
        $v_4 = $v_2.indexOf($v_3);
    }
    if ($v_4 >= 0) {
        var $v_6 = SP.BWsaClient.$1j($v_2.substr($v_4 + $v_3.length));

        $v_0 = $v_0 + (($v_6[0] << 16) + $v_6[1]);
    }
    var $v_5 = 0;

    try {
        var $v_7 = window.navigator.platform;

        if ($v_2.indexOf('WOW64') !== -1) {
            $v_5 = 2;
        }
        else if ($v_7 === 'Win64') {
            $v_5 = 3;
        }
        else if ($v_7 === 'Win32' || $v_7 === 'Linux i686') {
            $v_5 = 1;
        }
    }
    catch ($$e_8) { }
    $v_0 = $v_0 | $v_5 << 29;
    return $v_0;
};
SP.BWsaClient.$2C = function SP_BWsaClient$$2C$st() {
    var $v_0 = window.screen.width & 65535;
    var $v_1 = window.screen.height & 65535;

    return ($v_1 << 16) + $v_0;
};
SP.BWsaClient.$28 = function SP_BWsaClient$$28$st() {
    var $v_0 = window.navigator.userAgent;
    var $v_1 = 0;

    if ($v_0.indexOf('iPhone;') >= 0) {
        $v_1 = 1;
    }
    else if ($v_0.indexOf('iPad;') >= 0) {
        $v_1 = 2;
    }
    else if ($v_0.indexOf('iPod;') >= 0) {
        $v_1 = 3;
    }
    return $v_1;
};
SP.BWsaClient.isNullOrUndefined = function SP_BWsaClient$isNullOrUndefined$st(obj) {
    var $v_0 = null;

    return obj === $v_0 || typeof obj === 'undefined';
};
SP.BWsaClient.$1S = function SP_BWsaClient$$1S$st($p0) {
    return $p0 >= '0' && $p0 <= '9';
};
SP.BWsaClient.getSQMLocationFromCUICommandInfo = function SP_BWsaClient$getSQMLocationFromCUICommandInfo$st(commandInfo) {
    var $v_0 = 0;

    if (commandInfo) {
        var $v_1 = commandInfo['RootType'];

        if ($v_1 === 'Ribbon') {
            var $v_2 = commandInfo['RootLocation'];

            if ($v_2 === 'LowerRibbon') {
                $v_0 = 2;
            }
            else if ($v_2 === 'UpperRibbon') {
                $v_0 = 1;
            }
        }
        else if ($v_1 === 'QAT') {
            $v_0 = 3;
        }
        else if ($v_1 === 'Jewel') {
            $v_0 = 4;
        }
        else if ($v_1 === 'ContextMenu') {
            $v_0 = 19;
        }
    }
    return $v_0;
};
SP.BWsaClient.calcActionId = function SP_BWsaClient$calcActionId$st(actionName) {
    var $v_0 = 5381;
    var $v_1 = $v_0;
    var $v_2 = actionName.length;

    for (var $v_6 = 0; $v_6 < $v_2; $v_6 += 2) {
        $v_0 = (($v_0 << 5) + $v_0 ^ actionName.charCodeAt($v_6)) & 4294967295;
        if ($v_6 === $v_2 - 1) {
            break;
        }
        $v_1 = (($v_1 << 5) + $v_1 ^ actionName.charCodeAt($v_6 + 1)) & 4294967295;
    }
    var $v_3 = $v_1 * 35685;
    var $v_4 = $v_1 * 23896 << 16;
    var $v_5 = $v_0 + $v_3 + $v_4 & 4294967295;

    if ($v_5 < 0) {
        $v_5 += 4294967296;
    }
    return $v_5;
};
SP.BWsaClient.prototype = {
    bWsaClientInit: function SP_BWsaClient$bWsaClientInit$in(uploadUrl, fIsOptedIn, sqmQosEnabled, qosDataPoints) {
        this.$1_0 = new SP.BWsaData();
        this.$0_0 = new SP.BWsaConfig();
        this.$k_0 = false;
        this.$l_0 = 0;
        this.$Y_0 = 0;
        this.$e_0 = false;
        this.$d_0 = {};
        for (var $v_0 = 0; $v_0 < this.$0_0.$1O_0.length; $v_0++) {
            this.$d_0['' + this.$0_0.$1O_0[$v_0]] = true;
        }
        this.$0_0.$f_0 = uploadUrl;
        this.$0_0.$8_0 = uploadUrl === '' ? false : fIsOptedIn;
        this.$0_0.$D_0 = sqmQosEnabled && !!qosDataPoints;
        this.$0_0.$15_0 = qosDataPoints;
    },
    $1_0: null,
    $0_0: null,
    $k_0: false,
    $l_0: 0,
    $Y_0: 0,
    $e_0: false,
    $d_0: null,
    $S_0: null,
    get_isContinuation: function SP_BWsaClient$get_isContinuation$in() {
        return this.$k_0;
    },
    disableSqmQos: function SP_BWsaClient$disableSqmQos$in() {
        this.$0_0.$D_0 = false;
    },
    $2E_0: function SP_BWsaClient$$2E_0$in() {
        var $v_0 = new SP.BWsaData();
        var $$dict_5 = this.$d_0;

        for (var $$key_6 in $$dict_5) {
            var $v_1 = {
                key: $$key_6,
                value: $$dict_5[$$key_6]
            };
            var $v_2 = $v_1.key;
            var $v_3 = this.$1_0.m_wsaDatapoints[$v_2];

            if ($v_3) {
                var $v_4 = new SP.BWsaDatapoint(parseInt($v_2));

                $v_4.m_Value = $v_3.m_Value;
                $v_4.m_Count = $v_3.m_Count;
                $v_4.m_Sum = $v_3.m_Sum;
                $v_0.m_wsaDatapoints[$v_2] = $v_4;
                $v_0.m_cDataPoints++;
            }
        }
        var $$dict_A = this.$1_0.m_wsaStreams;

        for (var $$key_B in $$dict_A) {
            var $v_5 = {
                key: $$key_B,
                value: $$dict_A[$$key_B]
            };
            var $v_6 = $v_5.value;
            var $v_7 = new SP.BWsaStream($v_6.m_WsaId, $v_6.m_StreamType, $v_6.m_Width, $v_6.m_MaxRows);

            $v_0.m_wsaStreams['' + $v_6.m_WsaId] = $v_7;
            $v_0.m_cStreams++;
            $v_0.m_cbStreams += 12;
        }
        $v_0.m_wsaHeader.m_CorrelationId = this.$1_0.m_wsaHeader.m_CorrelationId;
        $v_0.m_wsaHeader.m_FlightId = this.$1_0.m_wsaHeader.m_FlightId;
        this.$1_0 = $v_0;
        this.$e_0 = false;
    },
    $1V_0: function SP_BWsaClient$$1V_0$in() {
        var $v_0 = this.$1_0.m_cDataPoints * 12 + this.$1_0.m_cbStreams;

        if ($v_0 >= this.$0_0.$m_0) {
            this.uploadWsaData();
            $v_0 = this.$1_0.m_cDataPoints * 12 + this.$1_0.m_cbStreams;
            return $v_0 >= this.$0_0.$m_0;
        }
        return false;
    },
    $1s_0: function SP_BWsaClient$$1s_0$in($p0) {
        try {
            if (this.$e_0 || this.$d_0['' + $p0]) {
                return;
            }
            this.$e_0 = true;
            this.$h_0(7982, SP.BWsaClient.$27());
            this.$h_0(8049, SP.BWsaClient.$2B());
            this.$h_0(8814, 3);
            this.$h_0(9411, SP.BWsaClient.$2C());
            this.$h_0(9412, SP.BWsaClient.$28());
        }
        catch ($$e_1) { }
    },
    $1o_0: function SP_BWsaClient$$1o_0$in($p0) {
        if (this.$0_0.$8_0) {
            return true;
        }
        if (!this.$0_0.$D_0) {
            return false;
        }
        var $$dict_2 = this.$0_0.$15_0;

        for (var $$key_3 in $$dict_2) {
            var $v_0 = {
                key: $$key_3,
                value: $$dict_2[$$key_3]
            };

            if ($v_0.value === $p0) {
                return true;
            }
        }
        return false;
    },
    setDw: function SP_BWsaClient$setDw$in(dwDatapointId, dwDatapointValue) {
        try {
            if (!this.$0_0.$8_0 && !this.$0_0.$D_0) {
                return;
            }
            if (Object.getType(dwDatapointId) !== Number || Object.getType(dwDatapointValue) !== Number) {
                return;
            }
            if (dwDatapointId < 1 || dwDatapointId > this.$0_0.$o_0) {
                return;
            }
            if (dwDatapointValue < 0 || dwDatapointValue > 4294967295) {
                this.setDw(8763, dwDatapointId);
                return;
            }
            if (this.$1V_0()) {
                return;
            }
            this.$1s_0(dwDatapointId);
            this.$b_0();
            var $v_0 = this.$1_0.m_wsaDatapoints['' + dwDatapointId];

            if (!$v_0) {
                $v_0 = new SP.BWsaDatapoint(dwDatapointId);
                this.$1_0.m_wsaDatapoints['' + dwDatapointId] = $v_0;
                this.$1_0.m_cDataPoints++;
            }
            $v_0.m_Value = dwDatapointValue;
            $v_0.m_Count++;
            $v_0.m_Sum = dwDatapointValue + $v_0.m_Sum;
        }
        catch ($$e_3) { }
    },
    setBool: function SP_BWsaClient$setBool$in(dwDatapointId, dwDatapointValue) {
        if (dwDatapointValue) {
            dwDatapointValue = 1;
        }
        this.setDw(dwDatapointId, dwDatapointValue);
    },
    setBitsOrAnd: function SP_BWsaClient$setBitsOrAnd$in(dwDatapointId, dwOrBits, dwAndBitsFirst) {
        try {
            if (!this.$0_0.$8_0 && !this.$0_0.$D_0) {
                return;
            }
            if (Object.getType(dwDatapointId) !== Number || Object.getType(dwOrBits) !== Number || Object.getType(dwAndBitsFirst) !== Number) {
                return;
            }
            if (dwOrBits < 0 || dwOrBits > 4294967295 || dwAndBitsFirst < 0 || dwAndBitsFirst > 4294967295) {
                this.setDw(8763, dwDatapointId);
                return;
            }
            var $v_0 = this.$1_0.m_wsaDatapoints['' + dwDatapointId];

            if ($v_0) {
                this.$b_0();
                $v_0.m_Value &= dwAndBitsFirst;
                $v_0.m_Value |= dwOrBits;
                $v_0.m_Count++;
            }
            else {
                this.setDw(dwDatapointId, dwOrBits);
            }
        }
        catch ($$e_4) { }
    },
    setBitsOr: function SP_BWsaClient$setBitsOr$in(dwDatapointId, dwOrBits) {
        this.setBitsOrAnd(dwDatapointId, dwOrBits, 4294967295);
    },
    setBitsAnd: function SP_BWsaClient$setBitsAnd$in(dwDatapointId, dwAndBits) {
        this.setBitsOrAnd(dwDatapointId, 0, dwAndBits);
    },
    setIfMax: function SP_BWsaClient$setIfMax$in(dwDatapointId, dwDatapointValue) {
        try {
            if (!this.$0_0.$8_0 && !this.$0_0.$D_0) {
                return;
            }
            if (Object.getType(dwDatapointId) !== Number || Object.getType(dwDatapointValue) !== Number) {
                return;
            }
            var $v_0 = this.$1_0.m_wsaDatapoints['' + dwDatapointId];

            if (!$v_0 || $v_0.m_Value < dwDatapointValue) {
                this.setDw(dwDatapointId, dwDatapointValue);
            }
            else {
                this.$b_0();
            }
        }
        catch ($$e_3) { }
    },
    setIfMin: function SP_BWsaClient$setIfMin$in(dwDatapointId, dwDatapointValue) {
        try {
            if (!this.$0_0.$8_0 && !this.$0_0.$D_0) {
                return;
            }
            if (Object.getType(dwDatapointId) !== Number || Object.getType(dwDatapointValue) !== Number) {
                return;
            }
            var $v_0 = this.$1_0.m_wsaDatapoints['' + dwDatapointId];

            if (!$v_0 || $v_0.m_Value > dwDatapointValue) {
                this.setDw(dwDatapointId, dwDatapointValue);
            }
            else {
                this.$b_0();
            }
        }
        catch ($$e_3) { }
    },
    incrementDw: function SP_BWsaClient$incrementDw$in(dwDatapointId, dwInc) {
        try {
            if (!this.$0_0.$8_0 && !this.$0_0.$D_0) {
                return;
            }
            if (Object.getType(dwDatapointId) !== Number || Object.getType(dwInc) !== Number) {
                return;
            }
            if (!dwInc) {
                this.$b_0();
                return;
            }
            var $v_0 = 0;
            var $v_1 = this.$1_0.m_wsaDatapoints['' + dwDatapointId];

            if ($v_1) {
                $v_0 = $v_1.m_Value;
            }
            this.setDw(dwDatapointId, $v_0 + dwInc);
        }
        catch ($$e_4) { }
    },
    addToAverage: function SP_BWsaClient$addToAverage$in(dwDatapointId, dwDatapointValue, count) {
        try {
            if (!this.$0_0.$8_0 && !this.$0_0.$D_0) {
                return;
            }
            if (Object.getType(dwDatapointId) !== Number || Object.getType(dwDatapointValue) !== Number) {
                return;
            }
            this.setDw(dwDatapointId, dwDatapointValue);
            var $v_0 = this.$1_0.m_wsaDatapoints['' + dwDatapointId];

            if ($v_0) {
                if (count > 1) {
                    $v_0.m_Count += count - 1;
                }
                $v_0.m_Value = Math.floor($v_0.m_Sum / $v_0.m_Count);
            }
        }
        catch ($$e_4) { }
    },
    createStream: function SP_BWsaClient$createStream$in(WsaStreamEntryId, dwStreamType, dwWidth, dwMaxRows) {
        try {
            if (!this.$0_0.$8_0 && !this.$0_0.$D_0) {
                return;
            }
            if (WsaStreamEntryId < 1 || WsaStreamEntryId > this.$0_0.$o_0) {
                return;
            }
            if (dwStreamType !== 1 && dwStreamType !== 2) {
                return;
            }
            if (dwWidth < 1 || dwWidth > this.$0_0.$1T_0) {
                return;
            }
            if (this.$1V_0()) {
                return;
            }
            if (dwMaxRows < 1 || dwMaxRows > this.$0_0.$14_0) {
                dwMaxRows = this.$0_0.$14_0;
            }
            if (!this.$1_0.m_wsaStreams['' + WsaStreamEntryId]) {
                var $v_0 = new SP.BWsaStream(WsaStreamEntryId, dwStreamType, dwWidth, dwMaxRows);

                this.$1_0.m_wsaStreams['' + WsaStreamEntryId] = $v_0;
                this.$1_0.m_cStreams++;
                this.$1_0.m_cbStreams += 12;
            }
        }
        catch ($$e_5) { }
    },
    createStreamUnobfuscated: function SP_BWsaClient$createStreamUnobfuscated$in(WsaStreamEntryId, dwStreamType, dwWidth, dwMaxRows) {
        this.createStream(WsaStreamEntryId, dwStreamType, dwWidth, dwMaxRows);
    },
    $2L_0: function SP_BWsaClient$$2L_0$in($p0) {
        delete $p0.m_Rows['' + $p0.m_RowsOverwritten];
        this.$1_0.m_cbStreams -= ($p0.m_Width + 1) * 4;
        $p0.m_RowCount--;
        $p0.m_RowsOverwritten++;
        if ($p0.m_RowsOverwritten > SP.StreamRowCounters.maxOverwritten) {
            SP.StreamRowCounters.maxOverwritten = $p0.m_RowsOverwritten;
            this.setDw(7994, $p0.m_RowsOverwritten);
            this.setDw(8047, $p0.m_WsaId);
        }
    },
    addToStreamDw: function SP_BWsaClient$addToStreamDw$in(dwStreamId) {
        var values = [];

        for (var $$pai_5 = 1; $$pai_5 < arguments.length; ++$$pai_5) {
            values[$$pai_5 - 1] = arguments[$$pai_5];
        }
        if (!values.length) {
            return;
        }
        try {
            var $v_0 = new SP.WsaStreamRow(values.length);

            for (var $v_1 = 0; $v_1 < values.length; $v_1++) {
                $v_0.m_Values[$v_1] = values[$v_1];
            }
            this.$1w_0(dwStreamId, $v_0);
        }
        catch ($$e_4) { }
    },
    addToStreamDwUnobfuscated: function SP_BWsaClient$addToStreamDwUnobfuscated$in(dwStreamId) {
        var values = [];

        for (var $$pai_2 = 1; $$pai_2 < arguments.length; ++$$pai_2) {
            values[$$pai_2 - 1] = arguments[$$pai_2];
        }
        this.addToStreamDw.apply(this, [dwStreamId].concat(values));
    },
    $1w_0: function SP_BWsaClient$$1w_0$in($p0, $p1) {
        if (!this.$0_0.$8_0 && !this.$0_0.$D_0) {
            return;
        }
        if ($p0 < 1 || $p0 > this.$0_0.$o_0) {
            return;
        }
        if (this.$1V_0()) {
            return;
        }
        this.$1s_0($p0);
        var $v_0 = this.$1_0.m_wsaStreams['' + $p0];

        if ($v_0) {
            this.$b_0();
            if ($v_0.m_RowCount >= $v_0.m_MaxRows && $v_0.m_StreamType === 2) {
                this.$2L_0($v_0);
            }
            if ($v_0.m_RowCount < $v_0.m_MaxRows) {
                var $v_1 = $v_0.m_RowCount + $v_0.m_RowsOverwritten;

                $v_0.m_Rows['' + $v_1] = $p1;
                $v_0.m_RowCount++;
                this.$1_0.m_cbStreams += 4;
                for (var $v_2 = 0; $v_2 < $p1.m_Values.length; $v_2++) {
                    var $v_3 = $p1.m_Values[$v_2].toString();

                    this.$1_0.m_cbStreams += $v_3.length * 2;
                }
                this.$1_0.m_cbStreams += ($p1.m_Values.length - 1) * 6;
                if ($v_0.m_RowCount > SP.StreamRowCounters.maxRowCount) {
                    SP.StreamRowCounters.maxRowCount = $v_0.m_RowCount;
                    this.setDw(7993, $v_0.m_RowCount);
                    this.setDw(8048, $v_0.m_WsaId);
                }
            }
            else {
                $v_0.m_RowsOverwritten++;
                if ($v_0.m_RowsOverwritten > SP.StreamRowCounters.maxOverwritten) {
                    SP.StreamRowCounters.maxOverwritten = $v_0.m_RowsOverwritten;
                    this.setDw(7994, $v_0.m_RowsOverwritten);
                    this.setDw(8047, $v_0.m_WsaId);
                }
            }
        }
    },
    terminate: function SP_BWsaClient$terminate$in() {
        this.uploadWsaData();
    },
    uploadWsaData: function SP_BWsaClient$uploadWsaData$in() {
        try {
            this.$x_0();
            if (!this.$1_0 || !this.$0_0) {
                return;
            }
            if (!this.$0_0.$8_0 && !this.$0_0.$D_0) {
                return;
            }
            if (this.$0_0.$f_0 === '') {
                this.$0_0.$8_0 = false;
                return;
            }
            var $v_0 = SP.Ticks.getTicks64();

            if (this.$l_0 > 0 && $v_0 <= this.$l_0 + this.$0_0.$1U_0) {
                return;
            }
            this.$l_0 = $v_0;
            if (this.$e_0) {
                if (this.$k_0) {
                    this.setDw(60, 1);
                }
                else {
                    this.setDw(60, 0);
                    this.$k_0 = true;
                }
                this.writeDocIdStream();
                this.$1_0.m_wsaHeader.m_EndTime = SP.Ticks.getTicks64();
                var $v_1 = this.$2M_0(this.$1_0, this.$0_0);

                this.$2E_0();
                if ($v_1 && $v_1.length > 0) {
                    this.uploadWsaDataRequest($v_1);
                }
            }
        }
        catch ($$e_2) { }
    },
    uploadWsaDataRequest: function SP_BWsaClient$uploadWsaDataRequest$in(json) {
        if (!this.$S_0) {
            this.$S_0 = new XMLHttpRequest();
        }
        if (!this.$S_0.readyState || this.$S_0.readyState === 4) {
            var $v_0 = true;

            this.$S_0.open('POST', this.$0_0.$f_0, $v_0);
            this.$S_0.setRequestHeader('Content-Type', 'application/json');
            this.$S_0.send(json);
        }
    },
    $26_0: function SP_BWsaClient$$26_0$in($p0) {
        return ((((((($p0.replace(new RegExp('[\\\\]', 'g'), '\\\\')).replace(new RegExp('[\\\"]', 'g'), '\\\\\\\"')).replace(new RegExp('[\\/]', 'g'), '\\\\/')).replace(new RegExp('[\\b]', 'g'), '\\\\b')).replace(new RegExp('[\\f]', 'g'), '\\\\f')).replace(new RegExp('[\\n]', 'g'), '\\\\n')).replace(new RegExp('[\\r]', 'g'), '\\\\r')).replace(new RegExp('[\\t]', 'g'), '\\\\t');
    },
    $2M_0: function SP_BWsaClient$$2M_0$in($p0, $p1) {
        var $v_0 = new Sys.StringBuilder();
        var $v_1 = true;
        var $v_2 = false;
        var $v_3 = 0;

        if ($p1.$8_0) {
            $v_3 = 16;
        }
        if ($p1.$D_0) {
            $v_3 |= 32;
        }
        $v_0.append('{');
        $v_0.append('\"StartTime\":' + $p0.m_wsaHeader.m_StartTime + ',');
        $v_0.append('\"EndTime\":' + $p0.m_wsaHeader.m_EndTime + ',');
        $v_0.append('\"Flags\":' + $v_3 + ',');
        if ($p0.m_wsaHeader.m_CorrelationId) {
            $v_0.append('\"CorrelationId\":\"' + $p0.m_wsaHeader.m_CorrelationId + '\",');
        }
        if ($p0.m_wsaHeader.m_FlightId) {
            $v_0.append('\"FlightId\":\"' + $p0.m_wsaHeader.m_FlightId + '\",');
        }
        $v_0.append('\"wsaDatapoints\":[');
        var $$dict_8 = $p0.m_wsaDatapoints;

        for (var $$key_9 in $$dict_8) {
            var $v_4 = {
                key: $$key_9,
                value: $$dict_8[$$key_9]
            };
            var $v_5 = $v_4.value;

            if (!this.$1o_0($v_5.m_WsaId)) {
                continue;
            }
            $v_2 = true;
            if (!$v_1) {
                $v_0.append(',');
            }
            $v_0.append('{\"Id\":' + $v_5.m_WsaId + ',');
            $v_0.append('\"Val\":' + $v_5.m_Value + ',');
            $v_0.append('\"Tic\":' + $v_5.m_Ticks + '}');
            $v_1 = false;
        }
        $v_0.append('],\"wsaStreams\":[');
        $v_1 = true;
        var $$dict_I = $p0.m_wsaStreams;

        for (var $$key_J in $$dict_I) {
            var $v_6 = {
                key: $$key_J,
                value: $$dict_I[$$key_J]
            };
            var $v_7 = $v_6.value;

            if (!this.$1o_0($v_7.m_WsaId)) {
                continue;
            }
            $v_2 = true;
            if (!$v_7.m_RowCount) {
                continue;
            }
            var $v_8 = true;

            if (!$v_1) {
                $v_0.append(',');
            }
            $v_0.append('{\"Id\":' + $v_7.m_WsaId + ',');
            $v_0.append('\"Width\":' + $v_7.m_Width + ',');
            $v_0.append('\"Rows\":[');
            var $$dict_G = $v_7.m_Rows;

            for (var $$key_H in $$dict_G) {
                var $v_9 = {
                    key: $$key_H,
                    value: $$dict_G[$$key_H]
                };
                var $v_A = $v_9.value;

                if (!$v_8) {
                    $v_0.append(',');
                }
                $v_0.append('{\"Tic\":' + $v_A.m_Ticks + ',');
                $v_0.append('\"Vals\":[');
                for (var $v_B = 0; $v_B < $v_A.m_Values.length; $v_B++) {
                    if ($v_B > 0) {
                        $v_0.append(',');
                    }
                    if (SP.BWsaClient.isNullOrUndefined($v_A.m_Values[$v_B])) {
                        $v_0.append('\"\"');
                    }
                    else if (Object.getType($v_A.m_Values[$v_B]) === String) {
                        $v_0.append('\"' + this.$26_0($v_A.m_Values[$v_B]) + '\"');
                    }
                    else {
                        $v_0.append($v_A.m_Values[$v_B]);
                    }
                }
                $v_0.append(']}');
                $v_8 = false;
            }
            $v_0.append(']}');
            $v_1 = false;
        }
        $v_0.append(']}');
        if ($v_2) {
            return $v_0.toString();
        }
        else {
            return null;
        }
    },
    isUserOptedIn: function SP_BWsaClient$isUserOptedIn$in() {
        return this.$0_0.$8_0;
    },
    disable: function SP_BWsaClient$disable$in() {
        try {
            this.$x_0();
            this.$0_0.$8_0 = false;
        }
        catch ($$e_0) { }
    },
    $h_0: function SP_BWsaClient$$h_0$in($p0, $p1) {
        if (!this.$1_0.m_wsaDatapoints['' + $p0]) {
            var $v_0 = new SP.BWsaDatapoint($p0);

            $v_0.m_Value = $p1;
            this.$1_0.m_wsaDatapoints['' + $p0] = $v_0;
            this.$1_0.m_cDataPoints++;
        }
    },
    $x_0: function SP_BWsaClient$$x_0$in() {
        if (this.$Y_0) {
            window.clearTimeout(this.$Y_0);
            this.$Y_0 = 0;
        }
    },
    $b_0: function SP_BWsaClient$$b_0$in() {
        if (SP.TimerResetCheck.isTimerResetNeeded()) {
            this.$x_0();
            this.$Y_0 = window.setTimeout(this.$$d_$22_0, this.$0_0.$n_0);
        }
    },
    $22_0: function SP_BWsaClient$$22_0$in() {
        this.$Y_0 = 0;
        this.$x_0();
        this.uploadWsaData();
        this.$b_0();
    },
    addCommonDatapoint: function SP_BWsaClient$addCommonDatapoint$in(datapointId) {
        this.$d_0['' + datapointId] = true;
    },
    $i_0: 0,
    $V_0: null,
    registerPersistentDocId: function SP_BWsaClient$registerPersistentDocId$in(DocHash) {
        if (DocHash && DocHash.length === 4 && (DocHash[0] || DocHash[1] || DocHash[2] || DocHash[3])) {
            this.$i_0 = 1;
            this.$V_0 = DocHash;
            return true;
        }
        else {
            return false;
        }
    },
    getActiveDocKey: function SP_BWsaClient$getActiveDocKey$in() {
        return this.$i_0;
    },
    writeDocIdStream: function SP_BWsaClient$writeDocIdStream$in() {
        if (this.$i_0 && this.$V_0) {
            this.createStream(9797, 1, 5, 1);
            this.addToStreamDw(9797, this.$i_0, this.$V_0[0], this.$V_0[1], this.$V_0[2], this.$V_0[3]);
            this.setDw(10273, this.$V_0[0]);
            return true;
        }
        else {
            return false;
        }
    },
    getStreamById: function SP_BWsaClient$getStreamById$in(streamId) {
        return this.$1_0.m_wsaStreams[streamId.toString()];
    },
    $z_0: function SP_BWsaClient$$z_0$in($p0, $p1) {
        if (!$p0) {
            return null;
        }
        var $v_0 = new Array(0);
        var $v_1 = 0;
        var $$dict_6 = $p0.m_Rows;

        for (var $$key_7 in $$dict_6) {
            var $v_2 = {
                key: $$key_7,
                value: $$dict_6[$$key_7]
            };
            var $v_3 = $v_2.value;

            if ($v_3.m_Values.length > 0 && $v_3.m_Values[0] === $p1) {
                $v_0[$v_1++] = $v_3;
            }
        }
        return $v_0;
    },
    setCorrelationId: function SP_BWsaClient$setCorrelationId$in(correlationId) {
        this.$1_0.m_wsaHeader.m_CorrelationId = correlationId;
    },
    setFlightId: function SP_BWsaClient$setFlightId$in(flightId) {
        this.$1_0.m_wsaHeader.m_FlightId = flightId;
    }
};
SP.RUMLogger = function SP_RUMLogger(wsa) {
    this.$s_0 = -1;
    this.$4_0 = wsa;
    this.$4_0.createStream(11016, 1, 9, 1000);
    this.$K_0 = this.$4_0.getStreamById(11016);
};
SP.RUMLogger.GetRUMLogger = function SP_RUMLogger$GetRUMLogger$st(wsa) {
    if (SP.RUMLogger.$2(wsa)) {
        return null;
    }
    if (!SP.RUMLogger.$P) {
        SP.RUMLogger.$P = new SP.RUMLogger(wsa);
    }
    return SP.RUMLogger.$P;
};
SP.RUMLogger.$29 = function SP_RUMLogger$$29$st($p0) {
    var $v_0 = 0;

    if ($p0) {
        var $$dict_3 = $p0;

        for (var $$key_4 in $$dict_3) {
            var $v_1 = {
                key: $$key_4,
                value: $$dict_3[$$key_4]
            };

            $v_0++;
        }
    }
    return $v_0;
};
SP.RUMLogger.$10 = function SP_RUMLogger$$10$st() {
    var $v_0 = window.self.performance;

    if (SP.RUMLogger.$2($v_0)) {
        return null;
    }
    return $v_0;
};
SP.RUMLogger.$1R = function SP_RUMLogger$$1R$st() {
    var $v_0 = SP.RUMLogger.$10();

    if (null === $v_0) {
        return null;
    }
    var $v_1 = $v_0.timing;

    if (SP.RUMLogger.$2($v_1)) {
        return null;
    }
    return $v_1;
};
SP.RUMLogger.$2H = function SP_RUMLogger$$2H$st($p0) {
    return typeof $p0 === 'undefined';
};
SP.RUMLogger.$2 = function SP_RUMLogger$$2$st($p0) {
    var $v_0 = null;

    return $p0 === $v_0 || SP.RUMLogger.$2H($p0);
};
SP.RUMLogger.prototype = {
    $4_0: null,
    $K_0: null,
    $1E_0: false,
    $1I_0: false,
    $w_0: false,
    $1J_0: false,
    $1F_0: false,
    $1D_0: false,
    $v_0: false,
    $1G_0: false,
    $M_0: 0,
    _navigationStart: 0,
    _unloadEventStart: 0,
    _unloadEventEnd: 0,
    _fetchStart: 0,
    _redirectStart: 0,
    _redirectEnd: 0,
    _domainLookupStart: 0,
    _domainLookupEnd: 0,
    _connectStart: 0,
    _secureConnectStart: 0,
    _connectEnd: 0,
    _requestStart: 0,
    _responseStart: 0,
    _responseEnd: 0,
    _domLoading: 0,
    _domComplete: 0,
    _loadEventStart: 0,
    _loadEventEnd: 0,
    get_IsMDSBlockCollected: function SP_RUMLogger$get_IsMDSBlockCollected$in() {
        return this.$1E_0;
    },
    SetPageTransitionType: function SP_RUMLogger$SetPageTransitionType$in(pageTransitionType) {
        if (this.$1F_0) {
            return;
        }
        if (pageTransitionType && pageTransitionType !== 1 && pageTransitionType !== 2 && pageTransitionType !== 3 && pageTransitionType !== 4) {
            return;
        }
        this.$M_0 = pageTransitionType;
        this.$U_0(0, 32, this.$M_0);
        this.$1F_0 = true;
    },
    ComputePageLoadTime: function SP_RUMLogger$ComputePageLoadTime$in() {
        if (this.$1D_0) {
            return;
        }
        var $v_0 = this.$1i_0(0);

        if ($v_0.length < 18) {
            return;
        }
        var $v_1 = $v_0[18];

        if (this.$M_0 === 1) {
            var $v_2 = this.$2D_0(0, 20);

            if (SP.RUMLogger.$2($v_2)) {
                return;
            }
            this.$s_0 = $v_1 - $v_2;
        }
        else if (this.$M_0 === 3) {
            var $v_3 = SP.RUMLogger.$1R();

            if (SP.RUMLogger.$2($v_3)) {
                return;
            }
            var $v_4 = $v_3.navigationStart;

            if (SP.RUMLogger.$2($v_4)) {
                return;
            }
            this.$s_0 = $v_1 - $v_4;
        }
        this.$U_0(0, 33, this.$s_0);
        this.$1D_0 = true;
    },
    Add: function SP_RUMLogger$Add$in(groupId, tsId) {
        if (SP.RUMLogger.$2(this.$4_0) || SP.RUMLogger.$2(this.$K_0)) {
            return;
        }
        if (groupId > 0) {
            return;
        }
        this.CollectW3CPerformanceTimings();
        this.$U_0(groupId, tsId, (new Date()).getTime());
    },
    $1q_0: function SP_RUMLogger$$1q_0$in($p0) {
        switch ($p0) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
        case 20:
        case 21:
        case 22:
        case 23:
        case 24:
        case 25:
        case 26:
        case 27:
        case 28:
        case 29:
        case 30:
        case 31:
        case 34:
        case 35:
            return true;
        default:
            return false;
        }
    },
    AddMDS: function SP_RUMLogger$AddMDS$in(tsId, tsVal) {
        var mdsTimeStamps = [];

        for (var $$pai_3 = 2; $$pai_3 < arguments.length; ++$$pai_3) {
            mdsTimeStamps[$$pai_3 - 2] = arguments[$$pai_3];
        }
        if (SP.RUMLogger.$2(this.$4_0) || SP.RUMLogger.$2(this.$K_0)) {
            return;
        }
        tsId = this.$1g_0(tsId);
        if (!this.$1q_0(tsId)) {
            return;
        }
        if (this.$M_0 === 1 && tsId === 20) {
            this.ResetW3CTimings();
        }
        this.CollectW3CPerformanceTimings();
        this.$U_0(0, tsId, tsVal);
        this.$1m_0(0, mdsTimeStamps);
    },
    AddTTLB: function SP_RUMLogger$AddTTLB$in() {
        if (SP.RUMLogger.$2(this.$4_0) || SP.RUMLogger.$2(this.$K_0)) {
            return;
        }
        this.CollectW3CPerformanceTimings();
        this.CollectW3CResourceTimings();
        var $v_0 = (new Date()).getTime();

        if (this.$1I_0) {
            this.$U_0(0, 19, $v_0);
        }
        else {
            this.$U_0(0, 18, $v_0);
            this.$U_0(0, 19, $v_0);
            this.$1I_0 = true;
        }
        this.ComputePageLoadTime();
    },
    AddMDSBlock: function SP_RUMLogger$AddMDSBlock$in(mdsTimeStamps) {
        if (SP.RUMLogger.$2(this.$4_0) || SP.RUMLogger.$2(this.$K_0)) {
            return;
        }
        if (SP.RUMLogger.$2(mdsTimeStamps) || !mdsTimeStamps.length) {
            return;
        }
        this.CollectW3CPerformanceTimings();
        this.$1m_0(0, mdsTimeStamps);
        this.$1E_0 = true;
    },
    DisplayDevDash: function SP_RUMLogger$DisplayDevDash$in() {
        if (SP.RUMLogger.$2(this.$4_0) || SP.RUMLogger.$2(this.$K_0)) {
            return;
        }
        var $v_0 = this.$1i_0(0);
        var $v_1 = window.self.DeveloperDashboard;

        if ($v_1 && $v_1.PostMsg) {
            var $v_2 = new Array(3);

            $v_2[0] = 'MS.RUMTelemetry';
            $v_2[1] = 'AddRUMData';
            $v_2[2] = '';
            if (this.$w_0) {
                var $v_3 = !$v_0[1] ? 0 : $v_0[1] - $v_0[0];
                var $v_4 = !$v_0[2] ? 0 : $v_0[2] - $v_0[0];
                var $v_5 = !$v_0[4] ? 0 : $v_0[4] - $v_0[0];
                var $v_6 = !$v_0[5] ? 0 : $v_0[5] - $v_0[0];
                var $v_7 = !$v_0[6] ? 0 : $v_0[6] - $v_0[0];
                var $v_8 = !$v_0[7] ? 0 : $v_0[7] - $v_0[0];
                var $v_9 = !$v_0[3] ? 0 : $v_0[3] - $v_0[0];
                var $v_A = !$v_0[11] ? 0 : $v_0[11] - $v_0[0];
                var $v_B = !$v_0[12] ? 0 : $v_0[12] - $v_0[0];
                var $v_C = !$v_0[13] ? 0 : $v_0[13] - $v_0[0];
                var $v_D = !$v_0[8] ? 0 : $v_0[8] - $v_0[0];
                var $v_E = !$v_0[10] ? 0 : $v_0[10] - $v_0[0];
                var $v_F = !$v_0[14] ? 0 : $v_0[14] - $v_0[0];
                var $v_G = !$v_0[15] ? 0 : $v_0[15] - $v_0[0];
                var $v_H = !$v_0[16] ? 0 : $v_0[16] - $v_0[0];
                var $v_I = !$v_0[17] ? 0 : $v_0[17] - $v_0[0];
                var $v_J = !$v_0[18] ? 0 : $v_0[18] - $v_0[0];
                var $v_K = !$v_0[19] ? 0 : $v_0[19] - $v_0[0];

                $v_2[2] += '<div>.....UnloadEvent: ' + $v_3 + ' - ' + $v_4 + '</div>' + '<div>.....Fetch: ' + $v_9 + ' - ' + $v_C + '</div>' + '<div>.....Redirect: ' + $v_5 + ' - ' + $v_6 + '</div>' + '<div>.....DomainLookup: ' + $v_7 + ' - ' + $v_8 + '</div>' + '<div>.....Connect: ' + $v_D + ' - ' + $v_E + '</div>' + '<div>.....Request: ' + $v_A + ' - ' + $v_C + '</div>' + '<div>.....Response: ' + $v_B + ' - ' + $v_C + '</div>' + '<div>.....Dom Loading: ' + $v_F + ' - ' + $v_G + '</div>' + '<div>.....Load Event: ' + $v_H + ' - ' + $v_I + '</div>' + '<div>.....TTLB: ' + $v_J + ' - ' + $v_K + '</div>' + '<div>&nbsp;</div>';
            }
            $v_1.PostMsg($v_2[0], $v_2[1], $v_2[2]);
        }
    },
    SetCorrelationId: function SP_RUMLogger$SetCorrelationId$in(correlationId) {
        if (this.$4_0 && !SP.RUMLogger.$2(correlationId)) {
            this.$4_0.setCorrelationId(correlationId);
        }
    },
    CollectW3CResourceTimings: function SP_RUMLogger$CollectW3CResourceTimings$in() {
        this.CollectAggW3CResourceTimings();
        if (Flighting.VariantConfiguration.IsExpFeatureClientEnabled(42)) {
            this.CollectRawW3CResourceTimings();
        }
    },
    CollectAggW3CResourceTimings: function SP_RUMLogger$CollectAggW3CResourceTimings$in() {
        if (this.$v_0) {
            return;
        }
        var $v_0 = 11;
        var $v_1 = [];

        Array.add($v_1, 'css');
        Array.add($v_1, 'img');
        Array.add($v_1, 'link');
        Array.add($v_1, 'script');
        Array.add($v_1, 'xmlhttprequest');
        var $v_2 = SP.RUMLogger.$10();

        if (!$v_2 || !$v_2.getEntriesByType) {
            return;
        }
        this.$v_0 = true;
        var $v_3 = $v_2.getEntriesByType('resource');

        if (!$v_3 || $v_3.length <= 0) {
            return;
        }
        var $v_4 = {};
        var $v_5 = [];
        var $v_6 = false;
        var $v_7 = false;
        var $v_8 = false;
        var $v_9 = false;

        for (var $v_C = 0; $v_C < $v_3.length; $v_C++) {
            var $v_D = $v_3[$v_C];
            var $v_E = $v_D['initiatorType'];

            if (!Array.contains($v_1, $v_E)) {
                continue;
            }
            var $v_F = $v_D['name'];

            if (Array.contains($v_5, $v_F)) {
                continue;
            }
            Array.add($v_5, $v_F);
            var $v_G = this.GetHostName($v_F);

            if (!($v_G in $v_4)) {
                $v_4[$v_G] = {};
                for (var $v_W = 0; $v_W < $v_1.length; $v_W++) {
                    $v_4[$v_G][$v_1[$v_W]] = [0, 0, 0, 0, 0, 0, 0, 0, 0, Number.MAX_VALUE, Number.MIN_VALUE];
                }
            }
            var $v_H = $v_D.duration;
            var $v_I = $v_D.startTime;
            var $v_J = $v_D.redirectStart;
            var $v_K = $v_D.redirectEnd;
            var $v_L = $v_D.fetchStart;
            var $v_M = $v_D.domainLookupStart;
            var $v_N = $v_D.domainLookupEnd;
            var $v_O = $v_D.connectStart;
            var $v_P = $v_D.connectEnd;
            var $v_Q = $v_D.secureConnectionStart;
            var $v_R = $v_D.requestStart;
            var $v_S = $v_D.responseStart;
            var $v_T = $v_D.responseEnd;
            var $v_U = $v_4[$v_G];
            var $v_V = $v_U[$v_E];

            $v_V[0]++;
            if (this.IsCachedEntry($v_H, $v_P, $v_R, $v_S)) {
                $v_V[1]++;
            }
            $v_V[2] += $v_H;
            $v_V[3] = $v_H > $v_V[3] ? $v_H : $v_V[3];
            var $$t_e, $$t_f, $$t_g;

            this.CollectSumMetric($$t_e = {
                'val': $v_6
            }, $v_M, $v_N, $v_I, $$t_g = {
                'val': $v_V[$$t_f = 4]
            }), $v_6 = $$t_e.val, $v_V[$$t_f] = $$t_g.val;
            var $$t_h, $$t_i, $$t_j;

            this.CollectSumMetric($$t_h = {
                'val': $v_7
            }, $v_O, $v_P, $v_I, $$t_j = {
                'val': $v_V[$$t_i = 5]
            }), $v_7 = $$t_h.val, $v_V[$$t_i] = $$t_j.val;
            if ($v_P - $v_O > 0) {
                $v_V[6]++;
            }
            var $$t_k, $$t_l, $$t_m;

            this.CollectSumMetric($$t_k = {
                'val': $v_8
            }, $v_R, $v_S, $v_I, $$t_m = {
                'val': $v_V[$$t_l = 7]
            }), $v_8 = $$t_k.val, $v_V[$$t_l] = $$t_m.val;
            var $$t_n, $$t_o, $$t_p;

            this.CollectSumMetric($$t_n = {
                'val': $v_9
            }, $v_S, $v_T, $v_I, $$t_p = {
                'val': $v_V[$$t_o = 8]
            }), $v_9 = $$t_n.val, $v_V[$$t_o] = $$t_p.val;
            if ($v_I) {
                $v_V[9] = $v_V[9] < $v_I ? $v_V[9] : $v_I;
            }
            if ($v_T) {
                $v_V[10] = $v_V[10] > $v_T ? $v_V[10] : $v_T;
            }
        }
        var $v_A = SP.SimpleLogger.GetSimpleLogger(this.$4_0);

        if (SP.RUMLogger.$2($v_A)) {
            return;
        }
        var $v_B = [];
        var $$dict_c = $v_4;

        for (var $$key_d in $$dict_c) {
            var $v_X = {
                key: $$key_d,
                value: $$dict_c[$$key_d]
            };

            for (var $v_Y = 0; $v_Y < $v_1.length; $v_Y++) {
                var $v_Z = $v_X.value;
                var $v_a = $v_Z[$v_1[$v_Y]];

                if (!$v_a[0]) {
                    continue;
                }
                var $v_b = new SP.SlapiInternal.RUMAgg($v_X.key, $v_1[$v_Y], $v_a[0], $v_a[1], Math.floor($v_a[2]), Math.floor($v_a[3]), Math.floor($v_a[4]), Math.floor($v_a[5]), Math.floor($v_a[6]), Math.floor($v_a[7]), Math.floor($v_a[8]), Math.floor($v_a[10] - $v_a[9]));

                Array.add($v_B, $v_b);
            }
        }
        if ($v_B.length > 0) {
            $v_A.WriteLogForEvents('RUMAgg', $v_B);
        }
        this.$v_0 = true;
        return;
    },
    CollectRawW3CResourceTimings: function SP_RUMLogger$CollectRawW3CResourceTimings$in() {
        if (this.$1G_0) {
            return;
        }
        var $v_0 = SP.RUMLogger.$10();

        if (!$v_0 || !$v_0.getEntriesByType) {
            return;
        }
        var $v_1 = $v_0.getEntriesByType('resource');

        if (!$v_1 || $v_1.length <= 0) {
            return;
        }
        var $v_2 = SP.SimpleLogger.GetSimpleLogger(this.$4_0);

        if (SP.RUMLogger.$2($v_2)) {
            return;
        }
        var $v_3 = [];

        for (var $v_4 = 0; $v_4 < $v_1.length; $v_4++) {
            var $v_5 = $v_1[$v_4];
            var $v_6 = $v_5['name'];
            var $v_7 = this.GetHostName($v_6);
            var $v_8 = this.GetFileName($v_6);
            var $v_9 = this.GetTimingValue($v_5.startTime);
            var $v_A = this.GetTimingValue($v_5.redirectStart);
            var $v_B = this.GetTimingValue($v_5.redirectEnd);
            var $v_C = this.GetTimingValue($v_5.fetchStart);
            var $v_D = this.GetTimingValue($v_5.domainLookupStart);
            var $v_E = this.GetTimingValue($v_5.domainLookupEnd);
            var $v_F = this.GetTimingValue($v_5.connectStart);
            var $v_G = this.GetTimingValue($v_5.secureConnectionStart);
            var $v_H = this.GetTimingValue($v_5.connectEnd);
            var $v_I = this.GetTimingValue($v_5.requestStart);
            var $v_J = this.GetTimingValue($v_5.responseStart);
            var $v_K = this.GetTimingValue($v_5.responseEnd);
            var $v_L = new SP.SlapiInternal.RUMRaw($v_7, $v_8, $v_9, $v_A, $v_B, $v_C, $v_D, $v_E, $v_F, $v_H, $v_G, $v_I, $v_J, $v_K);

            Array.add($v_3, $v_L);
        }
        if ($v_3.length > 0) {
            $v_2.WriteLogForEvents('RUMRaw', $v_3);
        }
        this.$1G_0 = true;
    },
    ResetW3CTimings: function SP_RUMLogger$ResetW3CTimings$in() {
        var $v_0 = SP.RUMLogger.$10();

        if (SP.RUMLogger.$2($v_0)) {
            return;
        }
        var $v_1 = window.self.chrome;

        if (!SP.RUMLogger.$2($v_1) && $v_0.webkitClearResourceTimings) {
            $v_0.webkitClearResourceTimings();
        }
        else if (Sys.Browser.agent === Sys.Browser.InternetExplorer && Sys.Browser.version > 9 && $v_0.clearResourceTimings) {
            $v_0.clearResourceTimings();
        }
    },
    GetHostName: function SP_RUMLogger$GetHostName$in(url) {
        if (SP.ScriptUtility.isNullOrEmptyString(url)) {
            return null;
        }
        var $v_0 = new URI(url);

        return $v_0.getHost();
    },
    GetFileName: function SP_RUMLogger$GetFileName$in(url) {
        if (SP.ScriptUtility.isNullOrEmptyString(url)) {
            return null;
        }
        var $v_0 = new URI(url);

        return $v_0.getLastPathSegment(false);
    },
    GetTimingValue: function SP_RUMLogger$GetTimingValue$in(timingValue) {
        if (SP.RUMLogger.$2(timingValue)) {
            return 0;
        }
        return Math.floor(timingValue);
    },
    IsCachedEntry: function SP_RUMLogger$IsCachedEntry$in(duration, connectEnd, requestStart, responseStart) {
        var $v_0 = window.self.chrome;

        if (!SP.RUMLogger.$2($v_0)) {
            if (responseStart - requestStart < 30 && requestStart - connectEnd < 10 && duration < 30) {
                return true;
            }
        }
        else if (Sys.Browser.agent === Sys.Browser.InternetExplorer) {
            if (!(responseStart - requestStart) && !(requestStart - connectEnd) && duration < 3) {
                return true;
            }
        }
        return false;
    },
    CollectSumMetric: function SP_RUMLogger$CollectSumMetric$in(skipCollection, timeStampStart, timeStampEnd, startTime, entry) {
        if (!skipCollection.val) {
            if (timeStampStart < startTime || timeStampEnd < startTime) {
                skipCollection.val = true;
                entry.val = -1;
            }
            else {
                entry.val += timeStampEnd - timeStampStart;
            }
        }
    },
    CollectRUMDataForNonMDS: function SP_RUMLogger$CollectRUMDataForNonMDS$in() {
        try {
            this.CollectW3CPerformanceTimingsUsingSLAPI();
            this.CollectW3CResourceTimings();
        }
        catch ($v_0) {
            ULS.SendExceptionJS('RUMNonMDS', $v_0);
        }
    },
    CollectW3CPerformanceTimingsUsingSLAPI: function SP_RUMLogger$CollectW3CPerformanceTimingsUsingSLAPI$in() {
        var $v_0;
        var $v_1;
        var $v_2;
        var $v_3;
        var $v_4;
        var $v_5;
        var $v_6;
        var $v_7;
        var $v_8;
        var $v_9;
        var $v_A;
        var $v_B;
        var $v_C;
        var $v_D;
        var $v_E;
        var $v_F;
        var $v_G;
        var $v_H;

        if (SP.RUMLogger.$2(this.$4_0)) {
            return;
        }
        var $v_I = SP.RUMLogger.$1R();

        if (SP.RUMLogger.$2($v_I)) {
            return;
        }
        if (this.$1J_0) {
            return;
        }
        var $v_J = SP.SimpleLogger.GetSimpleLogger(this.$4_0);

        if (SP.RUMLogger.$2($v_J)) {
            return;
        }
        var $v_K = [];

        $v_0 = $v_I.navigationStart;
        $v_1 = $v_I.unloadEventStart;
        $v_2 = $v_I.unloadEventEnd;
        $v_3 = $v_I.fetchStart;
        $v_4 = $v_I.redirectStart;
        $v_5 = $v_I.redirectEnd;
        $v_6 = $v_I.domainLookupStart;
        $v_7 = $v_I.domainLookupEnd;
        $v_8 = $v_I.connectStart;
        $v_9 = $v_I.secureConnectionStart;
        $v_A = $v_I.connectEnd;
        $v_B = $v_I.requestStart;
        $v_C = $v_I.responseStart;
        $v_D = $v_I.responseEnd;
        $v_E = $v_I.domLoading;
        $v_F = $v_I.domComplete;
        $v_G = $v_I.loadEventStart;
        $v_H = $v_I.loadEventEnd;
        this._navigationStart = $v_0;
        this._unloadEventStart = $v_1;
        this._unloadEventEnd = $v_2;
        this._fetchStart = $v_3;
        this._redirectStart = $v_4;
        this._redirectEnd = $v_5;
        this._domainLookupStart = $v_6;
        this._domainLookupEnd = $v_7;
        this._connectStart = $v_8;
        this._secureConnectStart = $v_9;
        this._connectEnd = $v_A;
        this._requestStart = $v_B;
        this._responseStart = $v_C;
        this._responseEnd = $v_D;
        this._domLoading = $v_E;
        this._domComplete = $v_F;
        this._loadEventStart = $v_G;
        this._loadEventEnd = $v_H;
        var $v_L = document.referrer;

        if (SP.ScriptUtility.isNullOrEmptyString($v_L)) {
            this.$M_0 = 4;
        }
        else {
            if ($v_L.indexOf('start.aspx') !== -1) {
                this.$M_0 = 2;
            }
            else {
                this.$M_0 = 4;
            }
        }
        var $v_M = this._navigationStart;

        if (Sys.Browser.agent === Sys.Browser.InternetExplorer && Sys.Browser.version === 9) {
            if (!$v_M) {
                if (this._redirectStart) {
                    $v_M = this._redirectStart;
                }
                else {
                    $v_M = this._fetchStart;
                }
            }
        }
        var $v_N = this._loadEventEnd - $v_M;

        if ($v_N < 0) {
            $v_N = 0;
        }
        var $v_O = [];
        var $v_P = new SP.SlapiInternal.RUMUsage($v_0, $v_1, $v_2, $v_3, $v_4, $v_5, $v_6, $v_7, $v_8, $v_9, $v_A, $v_B, $v_C, $v_D, $v_E, $v_F, $v_G, $v_H, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, this.$M_0, $v_N, 0, 0);

        Array.add($v_O, $v_P);
        if ($v_O.length > 0) {
            $v_J.WriteLogForEvents('RUMUsage', $v_O);
        }
        this.$1J_0 = true;
    },
    CollectW3CPerformanceTimings: function SP_RUMLogger$CollectW3CPerformanceTimings$in() {
        if (this.$w_0) {
            return;
        }
        if (SP.RUMLogger.$2(this.$4_0)) {
            return;
        }
        var $v_0 = ['navigationStart', 'unloadEventStart', 'unloadEventEnd', 'fetchStart', 'redirectStart', 'redirectEnd', 'domainLookupStart', 'domainLookupEnd', 'connectStart', 'secureConnectStart', 'connectEnd', 'requestStart', 'responseStart', 'responseEnd', 'domLoading', 'domComplete', 'loadEventStart', 'loadEventEnd'];
        var $v_1 = SP.RUMLogger.$1R();

        if (SP.RUMLogger.$2($v_1)) {
            return;
        }
        var $v_2 = new Array($v_0.length);
        var $v_3 = 0;

        for (var $v_4 = 0; $v_4 < $v_0.length; $v_4++) {
            var $v_5 = $v_1[$v_0[$v_4]];

            if (SP.RUMLogger.$2($v_5)) {
                continue;
            }
            $v_2[$v_3++] = $v_4 + 0;
            $v_2[$v_3++] = $v_5;
        }
        this.$1l_0(0, $v_2);
        this.$w_0 = true;
    },
    $U_0: function SP_RUMLogger$$U_0$in($p0, $p1, $p2) {
        var $v_0 = this.$4_0.$z_0(this.$K_0, $p0);

        if (!$v_0.length) {
            var $v_1 = this.$1c_0($p0);

            $v_1[1] = $p1;
            $v_1[2] = $p2;
            var $$t_5;

            ($$t_5 = this.$4_0).addToStreamDw.apply($$t_5, [11016].concat($v_1));
        }
        else {
            this.$1u_0($v_0, $p0, $p1, $p2);
        }
    },
    $1u_0: function SP_RUMLogger$$1u_0$in($p0, $p1, $p2, $p3) {
        var $v_0 = 1;
        var $v_1 = false;

        for (var $v_2 = 0; $v_2 < $p0.length && !$v_1; $v_2++) {
            var $v_3 = $p0[$v_2];

            $v_0 = 1;
            for (; $v_0 < $v_3.m_Values.length && $v_3.m_Values[$v_0 + 1] !== ''; $v_0 += 2) {
                if ($v_3.m_Values[$v_0] === $p2) {
                    $v_3.m_Values[$v_0 + 1] = $p3;
                    $v_1 = true;
                    break;
                }
            }
        }
        if (!$v_1) {
            var $v_4 = $p0[$p0.length - 1];

            if ($v_0 === 9) {
                var $v_5 = this.$1c_0($p1);
                var $$t_A;

                ($$t_A = this.$4_0).addToStreamDw.apply($$t_A, [11016].concat($v_5));
                $v_0 = 1;
                $p0 = this.$4_0.$z_0(this.$K_0, $p1);
                $v_4 = $p0[$p0.length - 1];
            }
            $v_4.m_Values[$v_0] = $p2;
            $v_4.m_Values[$v_0 + 1] = $p3;
        }
    },
    $1m_0: function SP_RUMLogger$$1m_0$in($p0, $p1) {
        if ($p0 < 0 || $p0 > 0) {
            return;
        }
        if (SP.RUMLogger.$2($p1) || !$p1.length) {
            return;
        }
        var $v_0 = {};

        for (var $v_4 = 0; $v_4 < $p1.length; $v_4++) {
            var $v_5 = this.$1g_0($v_4);

            if (SP.RUMLogger.$2($p1[$v_4]) || !this.$1q_0($v_5)) {
                continue;
            }
            $v_0[$v_5.toString()] = $p1[$v_4];
        }
        var $v_1 = SP.RUMLogger.$29($v_0);

        if (!$v_1) {
            return;
        }
        var $v_2 = 0;
        var $v_3 = new Array($v_1);
        var $$dict_9 = $v_0;

        for (var $$key_A in $$dict_9) {
            var $v_6 = {
                key: $$key_A,
                value: $$dict_9[$$key_A]
            };

            $v_3[$v_2++] = parseInt($v_6.key);
            $v_3[$v_2++] = $v_6.value;
        }
        this.$1l_0($p0, $v_3);
    },
    $1l_0: function SP_RUMLogger$$1l_0$in($p0, $p1) {
        if ($p0 < 0 || $p0 > 0) {
            return;
        }
        if (SP.RUMLogger.$2($p1) || !$p1.length) {
            return;
        }
        for (var $v_0 = 0; $v_0 < $p1.length; $v_0 += 2) {
            this.$U_0($p0, $p1[$v_0], $p1[$v_0 + 1]);
        }
    },
    $2D_0: function SP_RUMLogger$$2D_0$in($p0, $p1) {
        var $v_0 = this.$4_0.$z_0(this.$K_0, 0);

        if (!$v_0.length) {
            return null;
        }
        for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
            var $v_2 = $v_0[$v_1];

            for (var $v_3 = 1; $v_3 < $v_2.m_Values.length && $v_2.m_Values[$v_3 + 1] !== ''; $v_3 += 2) {
                if ($v_2.m_Values[$v_3] === $p1) {
                    return $v_2.m_Values[$v_3 + 1];
                }
            }
        }
        return null;
    },
    $1i_0: function SP_RUMLogger$$1i_0$in($p0) {
        var $v_0 = this.$4_0.$z_0(this.$K_0, 0);

        if (!$v_0.length) {
            return null;
        }
        var $v_1 = new Array($v_0.length * 9);

        for (var $v_2 = 0; $v_2 < $v_0.length; $v_2++) {
            var $v_3 = $v_0[$v_2];

            for (var $v_4 = 1; $v_4 < $v_3.m_Values.length && $v_3.m_Values[$v_4 + 1] !== ''; $v_4 += 2) {
                var $v_5 = $v_3.m_Values[$v_4 + 1];

                $v_1[$v_3.m_Values[$v_4]] = $v_5;
            }
        }
        return $v_1;
    },
    $1c_0: function SP_RUMLogger$$1c_0$in($p0) {
        if ($p0 < 0 || $p0 > 0) {
            return null;
        }
        var $v_0 = new Array(9);

        $v_0[0] = $p0;
        for (var $v_1 = 1; $v_1 < 9; $v_1 += 2) {
            $v_0[$v_1] = 0;
            $v_0[$v_1 + 1] = '';
        }
        return $v_0;
    },
    $1g_0: function SP_RUMLogger$$1g_0$in($p0) {
        switch ($p0) {
        case 0:
            return 20;
        case 1:
        case 2:
            return 21;
        case 3:
            return 22;
        case 4:
            return 23;
        case 5:
            return 24;
        case 6:
        case 7:
        case 8:
            return 25;
        case 9:
            return 26;
        case 10:
            return 27;
        case 11:
        case 12:
            return 28;
        case 13:
            return 29;
        case 14:
            return 30;
        case 15:
            return 31;
        case 16:
            return 34;
        case 17:
            return 35;
        default:
            return 4294967295;
        }
    }
};
SP.SimpleLogger = function SP_SimpleLogger($p0) {
    this.$X_0 = $p0;
    this.$X_0.createStream(1234, 1, 1, 10000);
};
SP.SimpleLogger.$2A = function SP_SimpleLogger$$2A$st($p0) {
    var $v_0 = 0;

    if ($p0) {
        var $$dict_3 = $p0;

        for (var $$key_4 in $$dict_3) {
            var $v_1 = {
                key: $$key_4,
                value: $$dict_3[$$key_4]
            };

            $v_0++;
        }
    }
    return $v_0;
};
SP.SimpleLogger.GetSimpleLogger = function SP_SimpleLogger$GetSimpleLogger$st(sqmClient) {
    if (!sqmClient) {
        return null;
    }
    var $v_0 = new SP.SimpleLogger.BSQMProxy(sqmClient);

    return SP.SimpleLogger.GetSimpleLoggerWithIBSQM($v_0);
};
SP.SimpleLogger.GetSimpleLoggerWithIBSQM = function SP_SimpleLogger$GetSimpleLoggerWithIBSQM$st(bsqm) {
    if (!bsqm) {
        return null;
    }
    return new SP.SimpleLogger(bsqm);
};
SP.SimpleLogger.prototype = {
    $X_0: null,
    SetCorrelationId: function SP_SimpleLogger$SetCorrelationId$in(correlationId) {
        this.$X_0.setCorrelationId(correlationId);
    },
    UploadData: function SP_SimpleLogger$UploadData$in() {
        this.$X_0.uploadData();
    },
    WriteLogForEvents: function SP_SimpleLogger$WriteLogForEvents$in(eventName, eventObjects) {
        if (!this.$1p_0(eventName)) {
            return;
        }
        var $v_0 = new Array(2);

        $v_0[0] = 'V2';
        $v_0[1] = eventName;
        if (eventObjects) {
            if (eventObjects.length > 0) {
                $v_0 = new Array(eventObjects.length + 2);
                $v_0[0] = 'V2';
                $v_0[1] = eventName;
                var $v_1 = 2;

                for (var $v_2 = 0; $v_2 < eventObjects.length; $v_2++) {
                    var $v_3 = Sys.Serialization.JavaScriptSerializer.serialize(eventObjects[$v_2]);

                    if (this.$1n_0($v_3)) {
                        continue;
                    }
                    $v_0[$v_1] = $v_3;
                    $v_1++;
                }
            }
            else {
                var $v_4 = Sys.Serialization.JavaScriptSerializer.serialize(eventObjects);

                if (this.$1n_0($v_4)) {
                    return;
                }
                $v_0[2] = $v_4;
            }
        }
        var $$t_7;

        ($$t_7 = this.$X_0).addToStreamDw.apply($$t_7, [1234].concat($v_0));
    },
    WriteLog: function SP_SimpleLogger$WriteLog$in(eventName, customProperties) {
        if (!this.$1p_0(eventName)) {
            return;
        }
        if (!customProperties) {
            customProperties = {};
        }
        var $v_0 = SP.SimpleLogger.$2A(customProperties);

        if ($v_0 > 40) {
            return;
        }
        var $v_1 = new Array(82);

        for (var $v_3 = 0; $v_3 < 82; $v_3++) {
            $v_1[$v_3] = '';
        }
        $v_1[0] = 'V1';
        $v_1[1] = eventName;
        var $v_2 = 2;
        var $$dict_7 = customProperties;

        for (var $$key_8 in $$dict_7) {
            var $v_4 = {
                key: $$key_8,
                value: $$dict_7[$$key_8]
            };

            $v_1[$v_2++] = $v_4.key;
            if ($v_4.value && Object.getType($v_4.value) === Date) {
                $v_1[$v_2++] = $v_4.value.getTime();
            }
            else {
                $v_1[$v_2++] = $v_4.value;
            }
        }
        var $$t_9;

        ($$t_9 = this.$X_0).addToStreamDw.apply($$t_9, [1234].concat($v_1));
    },
    $1p_0: function SP_SimpleLogger$$1p_0$in($p0) {
        if (!$p0 || $p0 === '' || $p0 === 'undefined') {
            return false;
        }
        return true;
    },
    $1n_0: function SP_SimpleLogger$$1n_0$in($p0) {
        if ($p0.length > 15360) {
            return true;
        }
        return false;
    }
};
SP.SimpleLogger.BSQMProxy = function SP_SimpleLogger_BSQMProxy(sqmClient) {
    this.$R_0 = sqmClient;
};
SP.SimpleLogger.BSQMProxy.prototype = {
    $R_0: null,
    setCorrelationId: function SP_SimpleLogger_BSQMProxy$setCorrelationId$in(correlationId) {
        this.$R_0.setCorrelationId(correlationId);
    },
    setLogSessionMs: function SP_SimpleLogger_BSQMProxy$setLogSessionMs$in(ms) {
        this.$R_0.$0_0.set_maxSessionMs(ms);
    },
    setMaxDataSize: function SP_SimpleLogger_BSQMProxy$setMaxDataSize$in(byteCount) {
        this.$R_0.$0_0.$m_0 = byteCount;
    },
    createStream: function SP_SimpleLogger_BSQMProxy$createStream$in(WsaStreamEntryId, dwStreamType, dwMinWidth, dwMaxRows) {
        this.$R_0.createStream(WsaStreamEntryId, dwStreamType, dwMinWidth, dwMaxRows);
    },
    addToStreamDw: function SP_SimpleLogger_BSQMProxy$addToStreamDw$in(dwStreamId) {
        var values = [];

        for (var $$pai_3 = 1; $$pai_3 < arguments.length; ++$$pai_3) {
            values[$$pai_3 - 1] = arguments[$$pai_3];
        }
        var $$t_2;

        ($$t_2 = this.$R_0).addToStreamDw.apply($$t_2, [dwStreamId].concat(values));
    },
    uploadData: function SP_SimpleLogger_BSQMProxy$uploadData$in() {
        UpdateCorrelationIdForAppCacheIfNeeded(this.$R_0);
        this.$R_0.uploadWsaData();
    }
};
SP.SimpleLoggerConstants = function SP_SimpleLoggerConstants() {
};
Type.registerNamespace('SP.UI');
SP.UI.Orientation = function() {
};
SP.UI.Orientation.prototype = {
    horizontal: 0,
    vertical: 1
};
SP.UI.Orientation.registerEnum('SP.UI.Orientation', false);
SP.UI.AspMenu = function SP_UI_AspMenu(e) {
    this.$j_2 = [];
    SP.UI.AspMenu.initializeBase(this, [e]);
};
SP.UI.AspMenu.$1h = function SP_UI_AspMenu$$1h$st($p0) {
    var $v_0 = null;

    for (var $v_1 = 0, $v_2 = $p0.childNodes.length; $v_1 < $v_2; ++$v_1) {
        var $v_3 = $p0.childNodes[$v_1];

        if ($v_3 && $v_3.nodeType === 1 && $v_3.tagName.toLowerCase() === 'ul') {
            $v_0 = $v_3;
            break;
        }
    }
    return $v_0;
};
SP.UI.AspMenu.prototype = {
    $L_2: null,
    $9_2: null,
    $y_2: 500,
    $17_2: 125,
    $16_2: 250,
    get_menuOrientation: function SP_UI_AspMenu$get_menuOrientation$in() {
        if (Sys.UI.DomElement.containsCssClass(this.$L_2.parentNode, 'ms-core-listMenu-horizontalBox')) {
            return 0;
        }
        else {
            return 1;
        }
    },
    set_menuOrientation: function SP_UI_AspMenu$set_menuOrientation$in(value) {
        if (!value) {
            Sys.UI.DomElement.removeCssClass(this.$L_2.parentNode, 'ms-core-listMenu-verticalBox');
            Sys.UI.DomElement.addCssClass(this.$L_2.parentNode, 'ms-core-listMenu-horizontalBox');
        }
        else if (value === 1) {
            Sys.UI.DomElement.removeCssClass(this.$L_2.parentNode, 'ms-core-listMenu-horizontalBox');
            Sys.UI.DomElement.addCssClass(this.$L_2.parentNode, 'ms-core-listMenu-verticalBox');
        }
        return value;
    },
    get_disappearAfter: function SP_UI_AspMenu$get_disappearAfter$in() {
        return this.$y_2;
    },
    set_disappearAfter: function SP_UI_AspMenu$set_disappearAfter$in(value) {
        this.$y_2 = value;
        return value;
    },
    initialize: function SP_UI_AspMenu$initialize$in() {
        Sys.Component.prototype.initialize.call(this);
        this.$L_2 = ((this.get_element()).getElementsByTagName('ul'))[0];
        this.$2F_2();
        this.$2G_2();
    },
    $2F_2: function SP_UI_AspMenu$$2F_2$in() {
        var $v_0 = this.$L_2.getElementsByTagName('li');

        for (var $v_1 = 0, $v_2 = $v_0.length; $v_1 < $v_2; ++$v_1) {
            var $v_3 = $v_0[$v_1];

            $v_3.hoverDebouncer = 0;
            this.$1z_2($v_3);
        }
    },
    $11_2: function SP_UI_AspMenu$$11_2$in($p0, $p1) {
        for (var $v_0 = $p1; $v_0; $v_0 = $v_0.parentNode) {
            if ($v_0 === $p0) {
                return true;
            }
        }
        return false;
    },
    $1z_2: function SP_UI_AspMenu$$1z_2$in($p0) {
        var $$t_C = this;

        $addHandler($p0, 'mouseover', function($p1_0) {
            $$t_C.showSubMenu($p0);
        });
        var $$t_D = this;

        $addHandler($p0, 'mouseout', function($p1_0) {
            $$t_D.hideSubMenu($p0);
        });
        var $v_0 = $p0.querySelector('.menu-item');

        if ($v_0) {
            var $$t_E = this;

            $addHandler($v_0, 'focus', function($p1_0) {
                if ($p0.parentNode) {
                    var $v_2 = $p0.parentNode.parentNode;

                    if ($v_2 && $v_2.tagName && $v_2.tagName.toUpperCase() === 'LI') {
                        $$t_E.showSubMenu($v_2);
                    }
                }
            });
        }
        var $$t_F = this;

        $addHandler($p0, 'focusout', function($p1_0) {
            $$t_F.$1k_2($p0);
        });
        var $$t_G = this;

        $addHandler($p0, 'blur', function($p1_0) {
            $$t_G.$1k_2($p0);
        });
        var $v_1 = $p0.querySelector('.additional-background');

        if ($v_1) {
            var $$t_H = this;

            $addHandler($v_1, 'click', function($p1_0) {
                if (!$p1_0.target || !Sys.UI.DomElement.containsCssClass($p1_0.target, 'menu-item-text')) {
                    var $v_3 = $p0.hoverDebouncer;
                    var $v_4 = 0;

                    if ($v_3 <= 1) {
                        $v_4 = 999;
                    }
                    else {
                        $v_4 = 1;
                    }
                    $p0.hoverDebouncer = $v_4;
                    if ($v_4 > 1) {
                        $$t_H.showSubMenu($p0);
                    }
                    else {
                        $$t_H.hideSubMenu($p0);
                    }
                    SP.UI.UIUtility.cancelEvent($p1_0);
                    return false;
                }
            });
        }
    },
    $1k_2: function SP_UI_AspMenu$$1k_2$in($p0) {
        if (!this.$11_2($p0, document.activeElement)) {
            var $v_0 = $p0.hoverDebouncer;

            if ($v_0 > 1) {
                $p0.hoverDebouncer = 1;
            }
            this.hideSubMenu($p0);
        }
    },
    $1Q_2: function SP_UI_AspMenu$$1Q_2$in($p0, $p1, $p2, $p3) {
        var $v_0 = 0;
        var $v_1 = document.documentElement.dir === 'rtl';
        var $v_2 = $p0.querySelector('.menu-item-text');

        if (!$v_2) {
            $v_2 = $p0.querySelector('.menu-item');
        }
        if (!$p1) {
            $v_0 = (Sys.UI.DomElement.getLocation($v_2)).x - (Sys.UI.DomElement.getLocation($p2)).x;
        }
        else {
            $v_0 = (Sys.UI.DomElement.getLocation($v_2)).y - (Sys.UI.DomElement.getLocation($p2)).y;
            if ($p3) {
                $v_0 += $v_2.offsetHeight;
            }
        }
        if ($v_1 && !$p1) {
            $v_0 = $p2.offsetWidth - $v_0 - $v_2.offsetWidth;
        }
        return $v_0;
    },
    showSubMenu: function SP_UI_AspMenu$showSubMenu$in(flyoutItem) {
        var $v_0 = Sys.UI.DomElement.containsCssClass(flyoutItem, 'hover');
        var $v_1 = Sys.UI.DomElement.containsCssClass(flyoutItem, 'hover-off');

        if (flyoutItem.hoverDebouncer > 0) {
            return;
        }
        flyoutItem.hoverDebouncer = flyoutItem.hoverDebouncer + 1;
        if (!$v_0 && !$v_1) {
            if (Sys.UI.DomElement.containsCssClass(flyoutItem, 'dynamic-children')) {
                if (Sys.UI.DomElement.containsCssClass(flyoutItem, 'static')) {
                    var $v_2 = document.documentMode;
                    var $v_3 = Sys.Browser.agent === Sys.Browser.InternetExplorer && Sys.Browser.version < 8 && (SP.ScriptUtility.isNullOrUndefined($v_2) || $v_2 < 8);
                    var $v_4 = document.documentElement.dir === 'rtl';

                    if ($v_4 && !this.get_menuOrientation() && $v_3) {
                        this.showSubMenuCore(flyoutItem, -flyoutItem.offsetWidth, 0);
                        return;
                    }
                }
                this.showSubMenuCore(flyoutItem, 0, 0);
            }
        }
        else if (!$v_0) {
            Sys.UI.DomElement.addCssClass(flyoutItem, 'hover');
            Sys.UI.DomElement.removeCssClass(flyoutItem, 'hover-off');
        }
    },
    showSubMenuCore: function SP_UI_AspMenu$showSubMenuCore$in(li, xOffset, yOffset) {
        if (li.childNodes.length < 1) {
            return;
        }
        if (this.$9_2 && this.$9_2 !== li && !this.$11_2(this.$9_2, li)) {
            this.hideSubMenuCore(this.$9_2, li);
        }
        var $v_0 = document.documentElement.dir === 'rtl';
        var $v_1 = this.$1Q_2(li, 1, li, true) + 6;

        Sys.UI.DomElement.addCssClass(li, 'hover');
        var $v_2 = SP.UI.AspMenu.$1h(li);

        if ($v_2) {
            var $v_3 = window.innerWidth;

            if (typeof $v_3 === 'undefined' || $v_3 <= 0) {
                $v_3 = window.document.body.clientWidth;
            }
            var $v_4 = -1;
            var $v_5 = !this.get_menuOrientation() && Sys.UI.DomElement.containsCssClass(li.parentNode, 'static');
            var $v_6 = $v_2.querySelector('li');

            if ($v_5 && li.offsetWidth >= this.$17_2 && li.offsetWidth <= this.$16_2) {
                $v_2.style.width = li.offsetWidth + 'px';
            }
            if ($v_2.offsetWidth < this.$17_2) {
                $v_2.style.width = this.$17_2 + 'px';
            }
            else if ($v_2.offsetWidth > this.$16_2) {
                $v_2.style.width = this.$16_2 + 'px';
            }
            if ($v_6) {
                var $v_7 = $v_5 ? 0 : 1;

                $v_4 = this.$1Q_2(li, $v_7, li, false) - this.$1Q_2($v_6, $v_7, $v_2, false);
            }
            if ($v_5) {
                var $v_8 = AbsLeft(li);
                var $v_9 = $v_4 + xOffset + $v_2.offsetWidth;

                if (!$v_0 && $v_8 + $v_9 > $v_3 || $v_0 && $v_8 + li.offsetWidth - $v_9 < 0) {
                    $v_4 = li.offsetWidth - $v_2.offsetWidth;
                }
                if (!$v_0) {
                    $v_2.style.left = $v_4 + xOffset + 'px';
                }
                else {
                    $v_2.style.right = $v_4 + xOffset + 'px';
                }
                $v_2.style.top = $v_1 + yOffset + 'px';
                var $v_A = li.querySelector('.menu-item');
            }
            else {
                if (!$v_0) {
                    $v_2.style.left = li.offsetWidth + xOffset + 'px';
                }
                else {
                    $v_2.style.right = li.offsetWidth + xOffset + 'px';
                }
                $v_2.style.top = $v_4 + yOffset + 'px';
            }
            $v_2.style.zIndex = SP.UI.AspMenu.$1X;
            if (li && !li.getAttribute('isVisible')) {
                li.setAttribute('isVisible', 'true');
                if (this.$9_2) {
                    this.$j_2.push(this.$9_2);
                }
                this.$9_2 = li;
                if (Sys.Browser.agent === Sys.Browser.InternetExplorer) {
                    var $v_B = String.format(SP.UI.AspMenu.$1Y, (this.get_element()).id, this.$j_2.length);
                    var $v_C = document.createElement('iframe');

                    $v_C.id = $v_B;
                    $v_C.setAttribute('frameBorder', '0');
                    $v_C.setAttribute('scrolling', 'no');
                    $v_C.style.border = 'none';
                    $v_C.style.position = 'absolute';
                    $v_C.style.top = $v_2.style.top;
                    $v_C.style.left = $v_2.style.left;
                    $v_C.style.right = $v_2.style.right;
                    $v_C.style.height = $v_2.offsetHeight + 'px';
                    $v_C.style.width = $v_2.offsetWidth + 'px';
                    $v_C.style.zIndex = SP.UI.AspMenu.$1X - 2;
                    li.appendChild($v_C);
                }
            }
        }
    },
    hideSubMenu: function SP_UI_AspMenu$hideSubMenu$in(flyoutItem) {
        var $v_0 = flyoutItem.hoverDebouncer;

        if ($v_0 <= 0) {
            return;
        }
        flyoutItem.hoverDebouncer = flyoutItem.hoverDebouncer - 1;
        if (flyoutItem.hoverDebouncer <= 0 && Sys.UI.DomElement.containsCssClass(flyoutItem, 'hover')) {
            Sys.UI.DomElement.addCssClass(flyoutItem, 'hover-off');
            Sys.UI.DomElement.removeCssClass(flyoutItem, 'hover');
            var $$t_2 = this;

            window.setTimeout(function() {
                if (Sys.UI.DomElement.containsCssClass(flyoutItem, 'hover-off')) {
                    $$t_2.hideSubMenuCore(flyoutItem, null);
                }
            }, this.$y_2);
        }
    },
    hideSubMenuCore: function SP_UI_AspMenu$hideSubMenuCore$in(li, newLi) {
        do {
            var $v_0 = document.documentElement.dir === 'rtl';
            var $v_1 = SP.UI.AspMenu.$1h(li);

            if ($v_1) {
                $v_1.style.top = '';
                $v_1.style.left = '';
                $v_1.style.right = '';
                $v_1.style.width = '';
            }
            Sys.UI.DomElement.removeCssClass(li, 'hover-off');
            Sys.UI.DomElement.removeCssClass(li, 'hover');
            if (this.$9_2 && li && li !== this.$9_2 && this.$11_2(li, this.$9_2)) {
                this.hideSubMenuCore(this.$9_2, li);
            }
            if (li === this.$9_2) {
                var $v_2 = String.format(SP.UI.AspMenu.$1Y, (this.get_element()).id, this.$j_2.length);
                var $v_3 = $get($v_2);

                if ($v_3) {
                    SP.UI.UIUtility.removeNode($v_3);
                }
                this.$9_2 = this.$j_2.pop();
                if (li.getAttribute('isVisible')) {
                    li.removeAttribute('isVisible');
                }
                if (newLi && this.$11_2(this.$9_2, newLi)) {
                    break;
                }
                li = this.$9_2;
            }
            if (!newLi) {
                break;
            }
        } while (li);
    },
    $2G_2: function SP_UI_AspMenu$$2G_2$in() {
        if (!SP.ScriptUtility.isNullOrUndefined(this.$L_2.querySelectorAll)) {
            var $v_0 = this.$L_2.querySelectorAll('a.new-window');

            for (var $v_1 = 0; $v_1 < $v_0.length; ++$v_1) {
                $v_0[$v_1].target = '_blank';
            }
        }
        else {
            var $v_2 = this.$L_2.getElementsByTagName('a');

            for (var $v_3 = 0; $v_3 < $v_2.length; ++$v_3) {
                if (Sys.UI.DomElement.containsCssClass($v_2[$v_3], 'new-window')) {
                    $v_2[$v_3].target = '_blank';
                }
            }
        }
    }
};
Type.registerNamespace('SP.Utilities');
SP.Utilities.CommandBlock = function SP_Utilities_CommandBlock(state, commandFunction, finishFunction) {
    this.state = state;
    this.commandFunction = commandFunction;
    this.finishFunction = finishFunction;
};
SP.Utilities.TaskTelemetry = function SP_Utilities_TaskTelemetry($p0, $p1) {
    this.startTime = $p0;
    this.finishTime = -1;
    this.cancelTime = -1;
    this.currentSlice = 0;
    this.sliceStart = new Array(1);
    this.sliceDuration = new Array(1);
    this.times = new Array(1);
};
SP.Utilities.TaskTelemetry.prototype = {
    startTime: null,
    sliceStart: null,
    sliceDuration: null,
    finishTime: 0,
    cancelTime: 0,
    currentSlice: 0,
    times: null,
    $1a_0: function SP_Utilities_TaskTelemetry$$1a_0$in($p0, $p1, $p2) {
        var $v_0 = this.currentSlice++;

        this.sliceStart[$v_0] = $p0 - this.startTime;
        this.sliceDuration[$v_0] = $p1 - $p0;
    }
};
SP.Utilities.Task = function SP_Utilities_Task(elementIn, taskType, timeOut, cb, longFunction, cancelFunction, progressFunction) {
    this.$$d_onBeforeUnload = Function.createDelegate(this, this.onBeforeUnload);
    this.$1t_0 = taskType;
    this.$3_0 = cb;
    this.$13_0 = longFunction;
    this.$c_0 = cancelFunction;
    this.$I_0 = progressFunction;
    this.$B_0 = elementIn;
    this.$1B_0 = timeOut;
    this.$6_0 = null;
    this.$H_0 = 0;
    this.$r_0 = false;
    this.$Z_0 = false;
};
SP.Utilities.Task.prototype = {
    $B_0: null,
    $1B_0: 0,
    $6_0: null,
    $H_0: 0,
    $r_0: false,
    $Z_0: false,
    $13_0: null,
    $c_0: null,
    $I_0: null,
    $g_0: null,
    $18_0: null,
    $3_0: null,
    $1t_0: 0,
    $A_0: null,
    $1W_0: '',
    start: function SP_Utilities_Task$start$in() {
        if (SP.Utilities.TaskCarousel.$2P(2)) {
            SP.Utilities.TaskCarousel.$q = SP.Utilities.TaskCarousel.$Q;
            SP.Utilities.TaskCarousel.$G = (SP.Utilities.TaskCarousel.$6 = (this.$6_0 = new Date()));
            this.$A_0 = new SP.Utilities.TaskTelemetry(this.$6_0, this.$3_0.state);
            this.$H_0 = this.$3_0.commandFunction(this.$3_0.state, SP.Utilities.TaskCarousel.$1r);
            this.$A_0.$1a_0(this.$6_0, SP.Utilities.TaskCarousel.$5, this.$3_0.state);
            if (this.$H_0 < 1) {
                SP.Utilities.TaskCarousel.$q = SP.Utilities.TaskCarousel.$T;
                if (!SP.Utilities.TaskCarousel.$J) {
                    SP.Utilities.TaskCarousel.$2N();
                }
                SP.Utilities.TaskCarousel.$1v(this);
            }
            else if (this.$3_0.finishFunction) {
                this.$A_0.finishTime = new Date() - this.$A_0.startTime;
                this.$3_0.finishFunction(this.$B_0, this.$3_0.state);
            }
        }
    },
    cancel: function SP_Utilities_Task$cancel$in(type) {
        return SP.Utilities.TaskCarousel.$1A(this, type);
    },
    telemetry: function SP_Utilities_Task$telemetry$in() {
        return this.$A_0;
    },
    addTelemetryTime: function SP_Utilities_Task$addTelemetryTime$in(index) {
        this.$A_0.times[index] = new Date() - this.$A_0.startTime;
    },
    getTelemetryTime: function SP_Utilities_Task$getTelemetryTime$in(index) {
        return this.$A_0.times[index];
    },
    setPageExitText: function SP_Utilities_Task$setPageExitText$in(pet) {
        this.$1W_0 = pet;
    },
    onBeforeUnload: function SP_Utilities_Task$onBeforeUnload$in() {
        var $v_0;

        if (this.$g_0) {
            $v_0 = this.$g_0();
            if (typeof $v_0 !== 'undefined') {
                return $v_0;
            }
        }
        var $v_1 = SP.Utilities.TaskCarousel.$1A(this, 3);

        if (!$v_1) {
            $v_0 = this.$1W_0;
            return $v_0;
        }
        else if (this === SP.Utilities.TaskCarousel.currentCancellableTask) {
            SP.Utilities.TaskCarousel.currentCancellableTask = null;
        }
    }
};
SP.Utilities.Task.CancelType = function() {
};
SP.Utilities.Task.CancelType.prototype = {
    explicit: 1,
    implicitByCommand: 2,
    implicitByNavigation: 3,
    implicitByTimeOut: 4
};
SP.Utilities.Task.CancelType.registerEnum('SP.Utilities.Task.CancelType', false);
SP.Utilities.Task.TaskType = function() {
};
SP.Utilities.Task.TaskType.prototype = {
    autoCancel: 1,
    background: 2,
    deferred: 3
};
SP.Utilities.Task.TaskType.registerEnum('SP.Utilities.Task.TaskType', false);
SP.Utilities.tcsaver = function SP_Utilities_tcsaver() {
};
SP.Utilities.tcsaver.save = function SP_Utilities_tcsaver$save$st() {
    var $v_0 = new SP.Utilities.tcsaver();

    $v_0.$7_0 = SP.Utilities.TaskCarousel.$7;
    $v_0.$5_0 = SP.Utilities.TaskCarousel.$5;
    $v_0.$G_0 = SP.Utilities.TaskCarousel.$G;
    $v_0.$J_0 = SP.Utilities.TaskCarousel.$J;
    $v_0.$E_0 = SP.Utilities.TaskCarousel.$E;
    $v_0.$F_0 = SP.Utilities.TaskCarousel.$F;
    $v_0.$T_0 = SP.Utilities.TaskCarousel.$T;
    $v_0.$Q_0 = SP.Utilities.TaskCarousel.$Q;
    $v_0.$a_0 = SP.Utilities.TaskCarousel.$a;
    $v_0.$1N_0 = SP.Utilities.TaskCarousel.currentCancellableTask;
    $v_0.$C_0 = SP.Utilities.TaskCarousel.$C;
    $v_0.$N_0 = SP.Utilities.TaskCarousel.$N;
    return $v_0;
};
SP.Utilities.tcsaver.restore = function SP_Utilities_tcsaver$restore$st(tcs) {
    SP.Utilities.TaskCarousel.$7 = tcs.$7_0;
    SP.Utilities.TaskCarousel.$5 = tcs.$5_0;
    SP.Utilities.TaskCarousel.$G = tcs.$G_0;
    SP.Utilities.TaskCarousel.$J = tcs.$J_0;
    SP.Utilities.TaskCarousel.$E = tcs.$E_0;
    SP.Utilities.TaskCarousel.$F = tcs.$F_0;
    SP.Utilities.TaskCarousel.$T = tcs.$T_0;
    SP.Utilities.TaskCarousel.$Q = tcs.$Q_0;
    SP.Utilities.TaskCarousel.$a = tcs.$a_0;
    SP.Utilities.TaskCarousel.currentCancellableTask = tcs.$1N_0;
    SP.Utilities.TaskCarousel.$C = tcs.$C_0;
    SP.Utilities.TaskCarousel.$N = tcs.$N_0;
};
SP.Utilities.tcsaver.prototype = {
    $7_0: null,
    $5_0: null,
    $G_0: null,
    $J_0: 0,
    $E_0: 0,
    $F_0: 0,
    $T_0: 50,
    $Q_0: 500,
    $a_0: 1000,
    $1N_0: null,
    $C_0: null,
    $N_0: null,
    get_sharedTimer: function SP_Utilities_tcsaver$get_sharedTimer$in() {
        return this.$J_0;
    },
    get_sharedCancelTimer: function SP_Utilities_tcsaver$get_sharedCancelTimer$in() {
        return this.$E_0;
    }
};
SP.Utilities.TaskCarousel = function SP_Utilities_TaskCarousel() {
};
SP.Utilities.TaskCarousel.resetSharedStopTimer = function SP_Utilities_TaskCarousel$resetSharedStopTimer$st(newTimeout) {
    if (SP.Utilities.TaskCarousel.$E) {
        window.clearTimeout(SP.Utilities.TaskCarousel.$E);
        if (newTimeout) {
            SP.Utilities.TaskCarousel.$E = window.setTimeout(SP.Utilities.TaskCarousel.$1Z, newTimeout);
        }
    }
};
SP.Utilities.TaskCarousel.$2N = function SP_Utilities_TaskCarousel$$2N$st() {
    SP.Utilities.TaskCarousel.$J = window.setInterval(SP.Utilities.TaskCarousel.$2O, SP.Utilities.TaskCarousel.$T * 2);
    SP.Utilities.TaskCarousel.$E = window.setTimeout(SP.Utilities.TaskCarousel.$1Z, 3600000);
    SP.Utilities.TaskCarousel.$F = 0;
};
SP.Utilities.TaskCarousel.$1A = function SP_Utilities_TaskCarousel$$1A$st($p0, $p1) {
    var $v_0 = SP.Utilities.TaskCarousel.$7.length;

    for (var $v_1 = 0; $v_1 < $v_0; $v_1++) {
        if (SP.Utilities.TaskCarousel.$7[$v_1] === $p0) {
            if ($p0.$c_0) {
                var $v_2 = $p0.$c_0($p0.$B_0, $p0.$3_0.state, $p1);

                $p0.$A_0.cancelTime = new Date() - $p0.$A_0.startTime;
                if (!$v_2) {
                    return false;
                }
            }
            if ($p0.$B_0) {
                $p0.$B_0.style.cursor = 'default';
            }
            if ($p0.$Z_0) {
                if ($p0.$I_0) {
                    $p0.$I_0(1, SP.Utilities.TaskCarousel.$5 - $p0.$6_0, $p0.$3_0.state);
                }
                else {
                    SP.Utilities.TaskCarousel.$p(1, SP.Utilities.TaskCarousel.$5 - $p0.$6_0, $p0.$3_0.state);
                }
            }
            SP.Utilities.TaskCarousel.$1P($p0);
            SP.Utilities.TaskCarousel.$7[$v_1] = null;
            --SP.Utilities.TaskCarousel.$F;
        }
    }
    return true;
};
SP.Utilities.TaskCarousel.$2P = function SP_Utilities_TaskCarousel$$2P$st($p0) {
    var $v_0 = true;
    var $v_1 = SP.Utilities.TaskCarousel.$7.length;

    for (var $v_2 = 0; $v_2 < $v_1; $v_2++) {
        var $v_3 = SP.Utilities.TaskCarousel.$7[$v_2];

        if ($v_3) {
            if ($v_3.$c_0) {
                $v_0 = $v_3.$c_0($v_3.$B_0, $v_3.$3_0.state, $p0);
                $v_3.$A_0.cancelTime = new Date() - $v_3.$A_0.startTime;
                if (!$v_0) {
                    break;
                }
            }
            if ($v_3.$B_0) {
                $v_3.$B_0.style.cursor = 'default';
            }
            if ($v_3.$Z_0) {
                if ($v_3.$I_0) {
                    $v_3.$I_0(1, SP.Utilities.TaskCarousel.$5 - $v_3.$6_0, $v_3.$3_0.state);
                }
                else {
                    SP.Utilities.TaskCarousel.$p(1, SP.Utilities.TaskCarousel.$5 - $v_3.$6_0, $v_3.$3_0.state);
                }
            }
            SP.Utilities.TaskCarousel.$1P($v_3);
            SP.Utilities.TaskCarousel.$7[$v_2] = null;
            --SP.Utilities.TaskCarousel.$F;
        }
    }
    return $v_0;
};
SP.Utilities.TaskCarousel.$p = function SP_Utilities_TaskCarousel$$p$st($p0, $p1, $p2) {
    if (!SP.Utilities.TaskCarousel.$C) {
        if (window.document.title && typeof window.document.title !== 'undefined') {
            SP.Utilities.TaskCarousel.$C = window.document.title;
        }
        else {
            SP.Utilities.TaskCarousel.$C = '';
        }
        window.document.title = (SP.Utilities.TaskCarousel.$N = SP.Utilities.TaskCarousel.$C);
    }
    else if (window.document.title !== SP.Utilities.TaskCarousel.$N) {
        SP.Utilities.TaskCarousel.$C = window.document.title;
    }
    if ($p0 >= 1) {
        window.document.title = SP.Utilities.TaskCarousel.$C;
        SP.Utilities.TaskCarousel.$C = null;
        SP.Utilities.TaskCarousel.$N = null;
    }
    else {
        if ($p0 >= 0) {
            window.document.title = Math.round($p0 * 100) + '% ' + SP.Utilities.TaskCarousel.$C;
        }
        else {
            window.document.title = Math.round($p1 / 1000) + 's ' + SP.Utilities.TaskCarousel.$C;
        }
        SP.Utilities.TaskCarousel.$N = window.document.title;
    }
};
SP.Utilities.TaskCarousel.$1r = function SP_Utilities_TaskCarousel$$1r$st() {
    SP.Utilities.TaskCarousel.$5 = new Date();
    var $v_0 = SP.Utilities.TaskCarousel.$5 - SP.Utilities.TaskCarousel.$G;

    if (SP.Utilities.TaskCarousel.$F > 0) {
        SP.Utilities.TaskCarousel.$q /= SP.Utilities.TaskCarousel.$F;
    }
    if ($v_0 > SP.Utilities.TaskCarousel.$q) {
        return true;
    }
    return false;
};
SP.Utilities.TaskCarousel.$1v = function SP_Utilities_TaskCarousel$$1v$st($p0) {
    var $v_0 = SP.Utilities.TaskCarousel.$7.length;
    var $v_1;

    for ($v_1 = 0; $v_1 < $v_0; $v_1++) {
        if (!SP.Utilities.TaskCarousel.$7[$v_1]) {
            break;
        }
    }
    SP.Utilities.TaskCarousel.$7[$v_1] = $p0;
    SP.Utilities.TaskCarousel.$F++;
};
SP.Utilities.TaskCarousel.$2O = function SP_Utilities_TaskCarousel$$2O$st() {
    var $v_0 = false;
    var $v_1 = SP.Utilities.TaskCarousel.$7.length;

    for (var $v_2 = 0; $v_2 < $v_1; $v_2++) {
        var $v_3 = SP.Utilities.TaskCarousel.$7[$v_2];

        if ($v_3) {
            SP.Utilities.TaskCarousel.$G = new Date();
            if ($v_3.$1B_0 > 0 && SP.Utilities.TaskCarousel.$G - $v_3.$6_0 > $v_3.$1B_0) {
                SP.Utilities.TaskCarousel.$1A($v_3, 4);
                continue;
            }
            if (!$v_3.$r_0 && SP.Utilities.TaskCarousel.$G - $v_3.$6_0 >= SP.Utilities.TaskCarousel.$Q) {
                $v_3.$r_0 = true;
                if ($v_3.$B_0) {
                    $v_3.$B_0.style.cursor = 'wait';
                }
                if ($v_3.$13_0) {
                    $v_3.$13_0($v_3.$B_0, $v_3.$3_0.state);
                }
            }
            else if (!$v_3.$Z_0 && SP.Utilities.TaskCarousel.$G - $v_3.$6_0 >= SP.Utilities.TaskCarousel.$a) {
                $v_3.$Z_0 = true;
                SP.Utilities.TaskCarousel.currentCancellableTask = $v_3;
                SP.Utilities.TaskCarousel.$1y($v_3, SP.Utilities.TaskCarousel.$24);
                SP.Utilities.TaskCarousel.$20($v_3, $v_3.$$d_onBeforeUnload);
                if ($v_3.$I_0) {
                    $v_3.$I_0($v_3.$H_0, SP.Utilities.TaskCarousel.$5 - $v_3.$6_0, $v_3.$3_0.state);
                }
                else {
                    SP.Utilities.TaskCarousel.$p($v_3.$H_0, SP.Utilities.TaskCarousel.$5 - $v_3.$6_0, $v_3.$3_0.state);
                }
            }
            $v_3.$H_0 = $v_3.$3_0.commandFunction($v_3.$3_0.state, SP.Utilities.TaskCarousel.$1r);
            $v_3.$A_0.$1a_0(SP.Utilities.TaskCarousel.$G, SP.Utilities.TaskCarousel.$5, $v_3.$3_0.state);
            if ($v_3.$H_0 >= 1) {
                if ($v_3.$r_0 && $v_3.$B_0) {
                    $v_3.$B_0.style.cursor = 'default';
                }
                if ($v_3.$3_0.finishFunction) {
                    $v_3.$A_0.finishTime = new Date() - $v_3.$A_0.startTime;
                    $v_3.$3_0.finishFunction($v_3.$B_0, $v_3.$3_0.state);
                }
                SP.Utilities.TaskCarousel.$25($v_3);
                SP.Utilities.TaskCarousel.$1P($v_3);
                SP.Utilities.TaskCarousel.$7[$v_2] = null;
                --SP.Utilities.TaskCarousel.$F;
                if ($v_3.$I_0) {
                    $v_3.$I_0($v_3.$H_0, SP.Utilities.TaskCarousel.$5 - $v_3.$6_0, $v_3.$3_0.state);
                }
                else {
                    SP.Utilities.TaskCarousel.$p($v_3.$H_0, SP.Utilities.TaskCarousel.$5 - $v_3.$6_0, $v_3.$3_0.state);
                }
                break;
            }
            else {
                $v_0 = true;
            }
            if ($v_3.$Z_0) {
                if ($v_3.$I_0) {
                    $v_3.$I_0($v_3.$H_0, SP.Utilities.TaskCarousel.$5 - $v_3.$6_0, $v_3.$3_0.state);
                }
                else {
                    SP.Utilities.TaskCarousel.$p($v_3.$H_0, SP.Utilities.TaskCarousel.$5 - $v_3.$6_0, $v_3.$3_0.state);
                }
            }
        }
    }
    if (!$v_0) {
        SP.Utilities.TaskCarousel.$1Z();
    }
};
SP.Utilities.TaskCarousel.$1Z = function SP_Utilities_TaskCarousel$$1Z$st() {
    if (SP.Utilities.TaskCarousel.$E) {
        window.clearTimeout(SP.Utilities.TaskCarousel.$E);
        SP.Utilities.TaskCarousel.$E = 0;
    }
    if (SP.Utilities.TaskCarousel.$J) {
        window.clearInterval(SP.Utilities.TaskCarousel.$J);
        SP.Utilities.TaskCarousel.$J = 0;
    }
    SP.Utilities.TaskCarousel.$F = 0;
};
SP.Utilities.TaskCarousel.$24 = function SP_Utilities_TaskCarousel$$24$st() {
    if (SP.Utilities.TaskCarousel.currentCancellableTask) {
        SP.Utilities.TaskCarousel.$1A(SP.Utilities.TaskCarousel.currentCancellableTask, 1);
        SP.Utilities.TaskCarousel.currentCancellableTask = null;
    }
};
SP.Utilities.TaskCarousel.$1y = function SP_Utilities_TaskCarousel$$1y$st($p0, $p1) {
    $p0.$18_0 = window.document.onstop;
    window.document.onstop = $p1;
};
SP.Utilities.TaskCarousel.$25 = function SP_Utilities_TaskCarousel$$25$st($p0) {
    window.document.onstop = $p0.$18_0;
    $p0.$18_0 = null;
};
SP.Utilities.TaskCarousel.$20 = function SP_Utilities_TaskCarousel$$20$st($p0, $p1) {
    $p0.$g_0 = window.onbeforeunload;
    window.onbeforeunload = $p1;
};
SP.Utilities.TaskCarousel.$1P = function SP_Utilities_TaskCarousel$$1P$st($p0) {
    window.onbeforeunload = $p0.$g_0;
    $p0.$g_0 = null;
};
Type.registerNamespace('SP.Disposal');
SP.Disposal.DisposalManager = function SP_Disposal_DisposalManager() {
    this.$$d_$2J_0 = Function.createDelegate(this, this.$2J_0);
    this.$t_0 = [];
    $addHandler(window, 'unload', this.$$d_$2J_0);
};
SP.Disposal.DisposalManager.get_instance = function SP_Disposal_DisposalManager$get_instance$st() {
    if (!SP.Disposal.DisposalManager.$P) {
        SP.Disposal.DisposalManager.$P = new SP.Disposal.DisposalManager();
    }
    return SP.Disposal.DisposalManager.$P;
};
SP.Disposal.DisposalManager.prototype = {
    registerForDisposal: function SP_Disposal_DisposalManager$registerForDisposal$in(objectToDispose) {
        Array.add(this.$t_0, objectToDispose);
    },
    $2J_0: function SP_Disposal_DisposalManager$$2J_0$in($p0) {
        $removeHandler(window, 'unload', this.$$d_$2J_0);
        for (var $v_0 = 0; $v_0 < this.$t_0.length; $v_0++) {
            try {
                var $v_1 = this.$t_0[$v_0];

                $v_1.dispose();
            }
            catch ($$e_3) { }
        }
        SP.Disposal.DisposalManager.$P = null;
    }
};
Type.registerNamespace('SP.Utilities.Internal');
SP.Utilities.Internal.ECBMenuItem = function SP_Utilities_Internal_ECBMenuItem() {
    SP.Utilities.Internal.ECBMenuItem.initializeBase(this);
};
SP.Utilities.Internal.ECBMenuItem.prototype = {
    CUICommand: null,
    CUIEnabledCommands: null,
    onMenuClick: null,
    IsSubMenu: false
};
SP.Utilities.Internal.CLVP = function SP_Utilities_Internal_CLVP() {
};
SP.Utilities.Internal.CLVP.prototype = {
    CUIItemInfo: null,
    ctx: null
};
SP.Utilities.Internal.ECBAdapter = function SP_Utilities_Internal_ECBAdapter(ctx, onECBDataRetrieved, onECBDataRetrievedKey) {
    if (onECBDataRetrieved && !onECBDataRetrievedKey) {
        throw Error.argumentNull('onECBDataRetrievedKey');
    }
    this.$O_0 = ctx;
    this.$1K_0 = onECBDataRetrieved;
    this.$1L_0 = onECBDataRetrievedKey;
};
SP.Utilities.Internal.ECBAdapter.prototype = {
    $u_0: false,
    $O_0: null,
    $1K_0: null,
    $1L_0: null,
    $1H_0: false,
    setEcbStateDirty: function SP_Utilities_Internal_ECBAdapter$setEcbStateDirty$in() {
        this.$u_0 = true;
    },
    executeECBCommand: function SP_Utilities_Internal_ECBAdapter$executeECBCommand$in(commandId) {
        var $v_0 = this.getECBMenuItemForCommand(commandId);

        if (IsNullOrUndefined($v_0)) {
            return false;
        }
        var $v_1 = this.$O_0;
        var $v_2 = $v_0.onMenuClick;

        if (IsNullOrUndefined($v_2)) {
            if (IsNullOrUndefined($v_0.attributes.getNamedItem('onmenuclick'))) {
                return false;
            }
            $v_2 = ($v_0.attributes.getNamedItem('onmenuclick')).value;
        }
        if (!IsNullOrUndefined($v_2)) {
            _executeECBCommand($v_2, $v_1);
            return true;
        }
        else {
            return false;
        }
    },
    getECBMenuItemForCommand: function SP_Utilities_Internal_ECBAdapter$getECBMenuItemForCommand$in(commandId) {
        var $v_0 = this.getSelectedItems();

        if (!this.$1d_0($v_0)) {
            return null;
        }
        var $v_1 = this.$1f_0($v_0);

        return this.$1e_0($v_1, commandId);
    },
    $1e_0: function SP_Utilities_Internal_ECBAdapter$$1e_0$in($p0, $p1) {
        for (var $v_0 = 0; $v_0 < $p0.childNodes.length; $v_0++) {
            var $v_1 = $p0.childNodes[$v_0];

            if (($v_1.getAttributeNode('type')).value !== 'separator') {
                var $v_2 = $v_1;

                if ($v_2.CUICommand === $p1) {
                    return $v_2;
                }
                else if ($v_2.IsSubMenu) {
                    var $v_3 = this.$1e_0($v_2, $p1);

                    if (!IsNullOrUndefined($v_3)) {
                        return $v_3;
                    }
                }
            }
        }
        return null;
    },
    getSelectedItems: function SP_Utilities_Internal_ECBAdapter$getSelectedItems$in() {
        var $v_0 = null;
        var $v_1 = this.$O_0;

        $v_0 = GetSelectedItemsDict($v_1);
        return $v_0;
    },
    getCountOfSelectedItems: function SP_Utilities_Internal_ECBAdapter$getCountOfSelectedItems$in() {
        var $v_0 = this.getSelectedItems();

        if (IsNullOrUndefined($v_0)) {
            return 0;
        }
        var $v_1 = this.$O_0;
        var $v_2 = CountSelectedItems($v_1);

        if (!OffSwitch.IsActive('E9F542D2-1B90-43E4-B8DB-84F2D12151A4')) {
            var $v_3 = $v_2 === 1;

            if ($v_3 !== this.$1H_0) {
                this.setEcbStateDirty();
                this.$1H_0 = $v_3;
            }
        }
        return $v_2;
    },
    canHandleECBCommand: function SP_Utilities_Internal_ECBAdapter$canHandleECBCommand$in(commandId) {
        if (!this.supportsECBCommands()) {
            return false;
        }
        var $v_0 = this.getCountOfSelectedItems();

        if (this.$u_0) {
            (this.get_clvp()).CUIItemInfo = null;
            this.$u_0 = false;
        }
        var $v_1 = this.getSelectedItems();

        if (IsNullOrUndefined($v_1)) {
            return false;
        }
        if ($v_0 === 1) {
            if (!this.$1d_0($v_1)) {
                return false;
            }
            var $v_2 = this.$1f_0($v_1);

            if (this.$1M_0($v_2, commandId)) {
                return true;
            }
        }
        else if ($v_0 > 1 && this.bulkOperationAvailableForCommand(commandId)) {
            return this.$1x_0($v_1, commandId);
        }
        return false;
    },
    supportsECBCommands: function SP_Utilities_Internal_ECBAdapter$supportsECBCommands$in() {
        if (IsNullOrUndefined(this.$O_0)) {
            return false;
        }
        var $v_0 = this.$O_0;

        if ($v_0) {
            if ($v_0['inGridMode']) {
                return false;
            }
            return $v_0['listTemplate'] !== '106' || $v_0['isXslView'];
        }
        else {
            return false;
        }
    },
    $1x_0: function SP_Utilities_Internal_ECBAdapter$$1x_0$in($p0, $p1) {
        var $v_0 = this.get_clvp();

        if (IsNullOrUndefined($v_0)) {
            return false;
        }
        var $$dict_6 = $p0;

        for (var $$key_7 in $$dict_6) {
            var $v_1 = {
                key: $$key_7,
                value: $$dict_6[$$key_7]
            };
            var $v_2 = $v_1.key.split(',');

            if (!this.$1b_0($v_0, $v_2[1])) {
                return false;
            }
            var $v_3 = (this.get_clvp()).CUIItemInfo[$v_2[1]];

            if (!this.$1M_0($v_3, $p1)) {
                return false;
            }
        }
        return true;
    },
    bulkOperationAvailableForCommand: function SP_Utilities_Internal_ECBAdapter$bulkOperationAvailableForCommand$in(commandId) {
        return commandId === 'CheckOut' || commandId === 'CheckIn' || commandId === 'Delete' || commandId === 'DiscardCheckOut' || commandId === 'AddToTimeline' || commandId === 'Moderate' || commandId === 'MoveCopy';
    },
    $1f_0: function SP_Utilities_Internal_ECBAdapter$$1f_0$in($p0) {
        var $$dict_4 = $p0;

        for (var $$key_5 in $$dict_4) {
            var $v_0 = {
                key: $$key_5,
                value: $$dict_4[$$key_5]
            };
            var $v_1 = $v_0.key.split(',');
            var $v_2 = (this.get_clvp()).CUIItemInfo[$v_1[1]];

            return $v_2;
        }
        return null;
    },
    $1M_0: function SP_Utilities_Internal_ECBAdapter$$1M_0$in($p0, $p1) {
        var $v_0 = 'cacheVal_' + $p1;
        var $v_1 = $p0.getAttribute($v_0);

        if (!IsNullOrUndefined($v_1)) {
            return $v_1 === 'TRUE';
        }
        for (var $v_2 = 0; $v_2 < $p0.childNodes.length; $v_2++) {
            var $v_3 = $p0.childNodes[$v_2];

            if (($v_3.getAttributeNode('type')).value !== 'separator') {
                var $v_4 = $v_3;

                if (this.$2I_0($v_4, $p1)) {
                    $p0.setAttribute($v_0, 'TRUE');
                    return true;
                }
                else if ($v_4.IsSubMenu) {
                    var $v_5 = this.$1M_0($v_4, $p1);

                    if ($v_5) {
                        $p0.setAttribute($v_0, 'TRUE');
                        return true;
                    }
                }
            }
        }
        $p0.setAttribute($v_0, 'FALSE');
        return false;
    },
    $2I_0: function SP_Utilities_Internal_ECBAdapter$$2I_0$in($p0, $p1) {
        if (IsNullOrUndefined($p0.CUIEnabledCommands)) {
            return false;
        }
        for (var $v_0 = 0; $v_0 < $p0.CUIEnabledCommands.length; $v_0++) {
            if ($p0.CUIEnabledCommands[$v_0] === $p1) {
                return true;
            }
        }
        return false;
    },
    $1d_0: function SP_Utilities_Internal_ECBAdapter$$1d_0$in($p0) {
        var $v_0 = this.get_clvp();

        if (IsNullOrUndefined($v_0)) {
            return false;
        }
        var $$dict_4 = $p0;

        for (var $$key_5 in $$dict_4) {
            var $v_1 = {
                key: $$key_5,
                value: $$dict_4[$$key_5]
            };
            var $v_2 = $v_1.key.split(',');

            if (!this.$1b_0($v_0, $v_2[1])) {
                return false;
            }
        }
        return true;
    },
    $1b_0: function SP_Utilities_Internal_ECBAdapter$$1b_0$in($p0, $p1) {
        var $v_0 = $p0.CUIItemInfo;

        if (IsNullOrUndefined($v_0)) {
            $v_0 = {};
            $p0.CUIItemInfo = $v_0;
        }
        var $v_1 = $v_0[$p1];

        if (IsNullOrUndefined($v_1)) {
            $v_1 = this.$23_0($p0, $p1);
            if (IsNullOrUndefined($v_1)) {
                return false;
            }
            $v_0[$p1] = $v_1;
        }
        return true;
    },
    $23_0: function SP_Utilities_Internal_ECBAdapter$$23_0$in($p0, $p1) {
        var $v_0 = window.itemTable;

        window.itemTable = $p0.GetEcbInfo($p1, this.$1K_0, this.$1L_0);
        if (IsNullOrUndefined(window.itemTable)) {
            return null;
        }
        var $v_1 = this.$O_0;

        window.dict = GetSelectedItemsDict($v_1);
        var $v_2 = BuildMenuWithInit($v_1);

        window.itemTable = $v_0;
        if (!$v_0) {
            $v_0 = null;
        }
        return $v_2;
    },
    get_clvp: function SP_Utilities_Internal_ECBAdapter$get_clvp$in() {
        var $v_0 = this.$O_0;

        if (!$v_0) {
            return null;
        }
        else {
            return $v_0.clvp;
        }
    }
};
Type.registerNamespace('SP.ListOperation');
SP.ListOperation.ViewOperation = function SP_ListOperation_ViewOperation() {
};
SP.ListOperation.ViewOperation.getSelectedView = function SP_ListOperation_ViewOperation$getSelectedView$st() {
    return GetSelectedViewNative();
};
SP.ListOperation.ViewOperation.navigateUp = function SP_ListOperation_ViewOperation$navigateUp$st(viewId) {
    NavigateUpNative(viewId);
};
SP.ListOperation.ViewOperation.refreshView = function SP_ListOperation_ViewOperation$refreshView$st(viewId) {
    RefreshViewNative(viewId);
};
SP.ListOperation.Selection = function SP_ListOperation_Selection() {
};
SP.ListOperation.Selection.selectListItem = function SP_ListOperation_Selection$selectListItem$st(iid, bSelect) {
    return SelectListItemNative(iid, bSelect);
};
SP.ListOperation.Selection.getSelectedItems = function SP_ListOperation_Selection$getSelectedItems$st() {
    return GetSelectedItemsNative();
};
SP.ListOperation.Selection.getSelectedList = function SP_ListOperation_Selection$getSelectedList$st() {
    return GetSelectedListNative();
};
SP.ListOperation.Selection.getSelectedView = function SP_ListOperation_Selection$getSelectedView$st() {
    return GetSelectedViewNative();
};
SP.ListOperation.Selection.navigateUp = function SP_ListOperation_Selection$navigateUp$st(viewId) {
    NavigateUpNative(viewId);
};
SP.ListOperation.Selection.deselectAllListItems = function SP_ListOperation_Selection$deselectAllListItems$st(iid) {
    return DeselectAllListItemsNative(iid);
};
SP.ListOperation.Overrides = function SP_ListOperation_Overrides() {
};
SP.ListOperation.Overrides.overrideDeleteConfirmation = function SP_ListOperation_Overrides$overrideDeleteConfirmation$st(listId, overrideText) {
    return OverrideDeleteConfirmationNative(listId, overrideText);
};
Type.registerNamespace('SP.SlapiInternal');
SP.SlapiInternal.ActionType = function() {
};
SP.SlapiInternal.ActionType.prototype = {
    DefaultType: 0,
    UserAction: 1,
    ContentReady: 2,
    ServerRequest: 3,
    ServerResponse: 4
};
SP.SlapiInternal.ActionType.registerEnum('SP.SlapiInternal.ActionType', false);
SP.SlapiInternal.SPSocialActionLog = function SP_SlapiInternal_SPSocialActionLog(pName, pMBEntityType, pYammerSwitchOn) {
    this.Name = pName;
    this.MBEntityType = pMBEntityType;
    this.YammerSwitchOn = pYammerSwitchOn;
};
SP.SlapiInternal.SPSocialActionLog.prototype = {
    Name: null,
    MBEntityType: null,
    YammerSwitchOn: null
};
SP.SlapiInternal.UserEngagement = function SP_SlapiInternal_UserEngagement(pEngagementName, pUserAgent, pProperties, pUserKey, pEngagementId, pLogType, pDuration, pSource, pClientLanguage, pServerLanguage, pSiteId, pWebId, pListId, pGroupId) {
    this.EngagementName = pEngagementName;
    this.UserAgent = pUserAgent;
    this.Properties = pProperties;
    this.UserKey = pUserKey;
    this.EngagementId = pEngagementId;
    this.LogType = pLogType;
    this.Duration = pDuration;
    this.Source = pSource;
    this.ClientLanguage = pClientLanguage;
    this.ServerLanguage = pServerLanguage;
    this.SiteId = pSiteId;
    this.WebId = pWebId;
    this.ListId = pListId;
    this.GroupId = pGroupId;
};
SP.SlapiInternal.UserEngagement.prototype = {
    EngagementName: null,
    UserAgent: null,
    Properties: null,
    UserKey: null,
    EngagementId: null,
    LogType: null,
    Duration: 0,
    Source: null,
    ClientLanguage: null,
    ServerLanguage: null,
    SiteId: null,
    WebId: null,
    ListId: null,
    GroupId: null
};
SP.SlapiInternal.SPSocialGetFeed = function SP_SlapiInternal_SPSocialGetFeed(pMBEntityType, pSiteId, pWebId, pFeedSource, pNewest, pYammerSwitchOn) {
    this.MBEntityType = pMBEntityType;
    this.SiteId = pSiteId;
    this.WebId = pWebId;
    this.FeedSource = pFeedSource;
    this.Newest = pNewest;
    this.YammerSwitchOn = pYammerSwitchOn;
};
SP.SlapiInternal.SPSocialGetFeed.prototype = {
    MBEntityType: null,
    SiteId: null,
    WebId: null,
    FeedSource: null,
    Newest: null,
    YammerSwitchOn: null
};
SP.SlapiInternal.SPSocialNewPost = function SP_SlapiInternal_SPSocialNewPost(pMBEntityType, pSiteId, pWebId, pPostType, pLength, pMentions, pTags, pLinks, pAttachments, pRootPostId, pYammerSwitchOn) {
    this.MBEntityType = pMBEntityType;
    this.SiteId = pSiteId;
    this.WebId = pWebId;
    this.PostType = pPostType;
    this.Length = pLength;
    this.Mentions = pMentions;
    this.Tags = pTags;
    this.Links = pLinks;
    this.Attachments = pAttachments;
    this.RootPostId = pRootPostId;
    this.YammerSwitchOn = pYammerSwitchOn;
};
SP.SlapiInternal.SPSocialNewPost.prototype = {
    MBEntityType: null,
    SiteId: null,
    WebId: null,
    PostType: null,
    Length: 0,
    Mentions: 0,
    Tags: 0,
    Links: 0,
    Attachments: 0,
    RootPostId: null,
    YammerSwitchOn: null
};
SP.SlapiInternal.SPSocialLikePost = function SP_SlapiInternal_SPSocialLikePost(pMBEntityType, pSiteId, pWebId, pLikeOp, pTargetedPost, pLikers, pYammerSwitchOn) {
    this.MBEntityType = pMBEntityType;
    this.SiteId = pSiteId;
    this.WebId = pWebId;
    this.LikeOp = pLikeOp;
    this.TargetedPost = pTargetedPost;
    this.Likers = pLikers;
    this.YammerSwitchOn = pYammerSwitchOn;
};
SP.SlapiInternal.SPSocialLikePost.prototype = {
    MBEntityType: null,
    SiteId: null,
    WebId: null,
    LikeOp: null,
    TargetedPost: null,
    Likers: 0,
    YammerSwitchOn: null
};
SP.SlapiInternal.SPSocialDeletePost = function SP_SlapiInternal_SPSocialDeletePost(pMBEntityType, pSiteId, pWebId, pTargetedPost, pYammerSwitchOn) {
    this.MBEntityType = pMBEntityType;
    this.SiteId = pSiteId;
    this.WebId = pWebId;
    this.TargetedPost = pTargetedPost;
    this.YammerSwitchOn = pYammerSwitchOn;
};
SP.SlapiInternal.SPSocialDeletePost.prototype = {
    MBEntityType: null,
    SiteId: null,
    WebId: null,
    TargetedPost: null,
    YammerSwitchOn: null
};
SP.SlapiInternal.SPSocialFollowing = function SP_SlapiInternal_SPSocialFollowing(pFollowingType, pTargetObjectType, pTargetObjectId, pResultType, pYammerSwitchOn) {
    this.FollowingType = pFollowingType;
    this.TargetObjectType = pTargetObjectType;
    this.TargetObjectId = pTargetObjectId;
    this.ResultType = pResultType;
    this.YammerSwitchOn = pYammerSwitchOn;
};
SP.SlapiInternal.SPSocialFollowing.prototype = {
    FollowingType: null,
    TargetObjectType: null,
    TargetObjectId: null,
    ResultType: null,
    YammerSwitchOn: null
};
SP.SlapiInternal.SPUserProfilePage = function SP_SlapiInternal_SPUserProfilePage(pAction, pProfileOwner, pYammerSwitchOn) {
    this.Action = pAction;
    this.ProfileOwner = pProfileOwner;
    this.YammerSwitchOn = pYammerSwitchOn;
};
SP.SlapiInternal.SPUserProfilePage.prototype = {
    Action: null,
    ProfileOwner: null,
    YammerSwitchOn: null
};
SP.SlapiInternal.PeopleSearchInstrumentation = function SP_SlapiInternal_PeopleSearchInstrumentation(pSubFeature, pAnalysisResult) {
    this.SubFeature = pSubFeature;
    this.AnalysisResult = pAnalysisResult;
};
SP.SlapiInternal.PeopleSearchInstrumentation.prototype = {
    SubFeature: null,
    AnalysisResult: null
};
SP.SlapiInternal.ProjectDataAnalytics = function SP_SlapiInternal_ProjectDataAnalytics(pDbName, pDbServerName, pSiteId, pSiteUrl, pSiteSubscriptionId2, pEntityType, pCategory, pCategoryName, pName, pValue) {
    this.DbName = pDbName;
    this.DbServerName = pDbServerName;
    this.SiteId = pSiteId;
    this.SiteUrl = pSiteUrl;
    this.SiteSubscriptionId2 = pSiteSubscriptionId2;
    this.EntityType = pEntityType;
    this.Category = pCategory;
    this.CategoryName = pCategoryName;
    this.Name = pName;
    this.Value = pValue;
};
SP.SlapiInternal.ProjectDataAnalytics.prototype = {
    DbName: null,
    DbServerName: null,
    SiteId: null,
    SiteUrl: null,
    SiteSubscriptionId2: null,
    EntityType: null,
    Category: null,
    CategoryName: null,
    Name: null,
    Value: 0
};
SP.SlapiInternal.ProjectDiagnosticAssert = function SP_SlapiInternal_ProjectDiagnosticAssert(pSiteId, pSiteUrl, pSiteSubscriptionId2, pProjectUid, pAssignmentUid, pErrorTag, pErrorText) {
    this.SiteId = pSiteId;
    this.SiteUrl = pSiteUrl;
    this.SiteSubscriptionId2 = pSiteSubscriptionId2;
    this.ProjectUid = pProjectUid;
    this.AssignmentUid = pAssignmentUid;
    this.ErrorTag = pErrorTag;
    this.ErrorText = pErrorText;
};
SP.SlapiInternal.ProjectDiagnosticAssert.prototype = {
    SiteId: null,
    SiteUrl: null,
    SiteSubscriptionId2: null,
    ProjectUid: null,
    AssignmentUid: null,
    ErrorTag: 0,
    ErrorText: null
};
SP.SlapiInternal.ProjectDiagnosticTimephasedError = function SP_SlapiInternal_ProjectDiagnosticTimephasedError(pSiteId, pSiteUrl, pSiteSubscriptionId2, pStore, pProjectUid, pObjectType, pObjectUid, pSubObjectType, pSubObjectUid, pSegmentStart, pErrorTagAsString, pErrorTag, pErrorText) {
    this.SiteId = pSiteId;
    this.SiteUrl = pSiteUrl;
    this.SiteSubscriptionId2 = pSiteSubscriptionId2;
    this.Store = pStore;
    this.ProjectUid = pProjectUid;
    this.ObjectType = pObjectType;
    this.ObjectUid = pObjectUid;
    this.SubObjectType = pSubObjectType;
    this.SubObjectUid = pSubObjectUid;
    this.SegmentStart = pSegmentStart;
    this.ErrorTagAsString = pErrorTagAsString;
    this.ErrorTag = pErrorTag;
    this.ErrorText = pErrorText;
};
SP.SlapiInternal.ProjectDiagnosticTimephasedError.prototype = {
    SiteId: null,
    SiteUrl: null,
    SiteSubscriptionId2: null,
    Store: null,
    ProjectUid: null,
    ObjectType: null,
    ObjectUid: null,
    SubObjectType: null,
    SubObjectUid: null,
    SegmentStart: null,
    ErrorTagAsString: null,
    ErrorTag: 0,
    ErrorText: null
};
SP.SlapiInternal.ProjectDiagnosticTimephased = function SP_SlapiInternal_ProjectDiagnosticTimephased(pSiteId, pSiteUrl, pSiteSubscriptionId2, pProjectUid, pAssignmentUid, pSourceComparison, pWorkField, pDate, pResult, pValue1, pValue2) {
    this.SiteId = pSiteId;
    this.SiteUrl = pSiteUrl;
    this.SiteSubscriptionId2 = pSiteSubscriptionId2;
    this.ProjectUid = pProjectUid;
    this.AssignmentUid = pAssignmentUid;
    this.SourceComparison = pSourceComparison;
    this.WorkField = pWorkField;
    this.Date = pDate;
    this.Result = pResult;
    this.Value1 = pValue1;
    this.Value2 = pValue2;
};
SP.SlapiInternal.ProjectDiagnosticTimephased.prototype = {
    SiteId: null,
    SiteUrl: null,
    SiteSubscriptionId2: null,
    ProjectUid: null,
    AssignmentUid: null,
    SourceComparison: null,
    WorkField: null,
    Date: null,
    Result: null,
    Value1: 0,
    Value2: 0
};
SP.SlapiInternal.ProjectDataDiagnostics = function SP_SlapiInternal_ProjectDataDiagnostics(pDbName, pDbServerName, pSiteId, pSiteUrl, pSiteSubscriptionId2, pEntityType, pTestName, pTestResult, pTestValue) {
    this.DbName = pDbName;
    this.DbServerName = pDbServerName;
    this.SiteId = pSiteId;
    this.SiteUrl = pSiteUrl;
    this.SiteSubscriptionId2 = pSiteSubscriptionId2;
    this.EntityType = pEntityType;
    this.TestName = pTestName;
    this.TestResult = pTestResult;
    this.TestValue = pTestValue;
};
SP.SlapiInternal.ProjectDataDiagnostics.prototype = {
    DbName: null,
    DbServerName: null,
    SiteId: null,
    SiteUrl: null,
    SiteSubscriptionId2: null,
    EntityType: null,
    TestName: null,
    TestResult: null,
    TestValue: 0
};
SP.SlapiInternal.RUMExtended = function SP_SlapiInternal_RUMExtended(pActionName, pActionId, pActionGuid, pActionDate, pActionType) {
    this.ActionName = pActionName;
    this.ActionId = pActionId;
    this.ActionGuid = pActionGuid;
    this.ActionDate = pActionDate;
    this.ActionType = pActionType;
};
SP.SlapiInternal.RUMExtended.prototype = {
    ActionName: null,
    ActionId: 0,
    ActionGuid: null,
    ActionDate: 0,
    ActionType: 0
};
SP.SlapiInternal.RUMAgg = function SP_SlapiInternal_RUMAgg(pHN, pIT, pTN, pCN, pSD, pMD, pSDNS, pSC, pNC, pSRQ, pSR, pFTE) {
    this.HN = pHN;
    this.IT = pIT;
    this.TN = pTN;
    this.CN = pCN;
    this.SD = pSD;
    this.MD = pMD;
    this.SDNS = pSDNS;
    this.SC = pSC;
    this.NC = pNC;
    this.SRQ = pSRQ;
    this.SR = pSR;
    this.FTE = pFTE;
};
SP.SlapiInternal.RUMAgg.prototype = {
    HN: null,
    IT: null,
    TN: 0,
    CN: 0,
    SD: 0,
    MD: 0,
    SDNS: 0,
    SC: 0,
    NC: 0,
    SRQ: 0,
    SR: 0,
    FTE: 0
};
SP.SlapiInternal.RUMRaw = function SP_SlapiInternal_RUMRaw(pHN, pFN, pST, pRES, pREE, pFS, pDLS, pDLE, pCS, pCE, pSCS, pRQS, pRS, pRE) {
    this.HN = pHN;
    this.FN = pFN;
    this.ST = pST;
    this.RES = pRES;
    this.REE = pREE;
    this.FS = pFS;
    this.DLS = pDLS;
    this.DLE = pDLE;
    this.CS = pCS;
    this.CE = pCE;
    this.SCS = pSCS;
    this.RQS = pRQS;
    this.RS = pRS;
    this.RE = pRE;
};
SP.SlapiInternal.RUMRaw.prototype = {
    HN: null,
    FN: null,
    ST: 0,
    RES: 0,
    REE: 0,
    FS: 0,
    DLS: 0,
    DLE: 0,
    CS: 0,
    CE: 0,
    SCS: 0,
    RQS: 0,
    RS: 0,
    RE: 0
};
SP.SlapiInternal.SignalStoreDatabaseStatistics = function SP_SlapiInternal_SignalStoreDatabaseStatistics(pDatabaseName, pServerTotalDiskMegabytes, pServerFreeDiskMegabytes, pDatabaseLogTotalMegabytes, pDatabaseLogUsedMegabytes, pDatabaseLogFreeMegabytes, pDatabaseTotalMegabytes, pDatabaseFreeMegabytes, pSignalCount, pTotalMegabytes, pDataMegabytes, pIndexSizeMegabytes, pFreeMegabytes, pAvgSignalSizeInBytes) {
    this.DatabaseName = pDatabaseName;
    this.ServerTotalDiskMegabytes = pServerTotalDiskMegabytes;
    this.ServerFreeDiskMegabytes = pServerFreeDiskMegabytes;
    this.DatabaseLogTotalMegabytes = pDatabaseLogTotalMegabytes;
    this.DatabaseLogUsedMegabytes = pDatabaseLogUsedMegabytes;
    this.DatabaseLogFreeMegabytes = pDatabaseLogFreeMegabytes;
    this.DatabaseTotalMegabytes = pDatabaseTotalMegabytes;
    this.DatabaseFreeMegabytes = pDatabaseFreeMegabytes;
    this.SignalCount = pSignalCount;
    this.TotalMegabytes = pTotalMegabytes;
    this.DataMegabytes = pDataMegabytes;
    this.IndexSizeMegabytes = pIndexSizeMegabytes;
    this.FreeMegabytes = pFreeMegabytes;
    this.AvgSignalSizeInBytes = pAvgSignalSizeInBytes;
};
SP.SlapiInternal.SignalStoreDatabaseStatistics.prototype = {
    DatabaseName: null,
    ServerTotalDiskMegabytes: 0,
    ServerFreeDiskMegabytes: 0,
    DatabaseLogTotalMegabytes: 0,
    DatabaseLogUsedMegabytes: 0,
    DatabaseLogFreeMegabytes: 0,
    DatabaseTotalMegabytes: 0,
    DatabaseFreeMegabytes: 0,
    SignalCount: 0,
    TotalMegabytes: 0,
    DataMegabytes: 0,
    IndexSizeMegabytes: 0,
    FreeMegabytes: 0,
    AvgSignalSizeInBytes: 0
};
SP.SlapiInternal.StackTraceHash = function SP_SlapiInternal_StackTraceHash(pStackTrace, pHashValue) {
    this.StackTrace = pStackTrace;
    this.HashValue = pHashValue;
};
SP.SlapiInternal.StackTraceHash.prototype = {
    StackTrace: null,
    HashValue: null
};
SP.SlapiInternal.StackTraceLog = function SP_SlapiInternal_StackTraceLog(pStackTraceHash, pLocation, pOperation, pInfo1, pInfo2) {
    this.StackTraceHash = pStackTraceHash;
    this.Location = pLocation;
    this.Operation = pOperation;
    this.Info1 = pInfo1;
    this.Info2 = pInfo2;
};
SP.SlapiInternal.StackTraceLog.prototype = {
    StackTraceHash: null,
    Location: null,
    Operation: null,
    Info1: null,
    Info2: null
};
SP.SlapiInternal.ProjectLicenseCheckLog = function SP_SlapiInternal_ProjectLicenseCheckLog(pMethod, pLicenseName, pSiteId) {
    this.Method = pMethod;
    this.LicenseName = pLicenseName;
    this.SiteId = pSiteId;
};
SP.SlapiInternal.ProjectLicenseCheckLog.prototype = {
    Method: null,
    LicenseName: null,
    SiteId: null
};
SP.SlapiInternal.ProjectUsageData = function SP_SlapiInternal_ProjectUsageData(pSiteId, pSiteUrl, pAction, pEntity, pSource, pEntityUid, pPropertyBag) {
    this.SiteId = pSiteId;
    this.SiteUrl = pSiteUrl;
    this.Action = pAction;
    this.Entity = pEntity;
    this.Source = pSource;
    this.EntityUid = pEntityUid;
    this.PropertyBag = pPropertyBag;
};
SP.SlapiInternal.ProjectUsageData.prototype = {
    SiteId: null,
    SiteUrl: null,
    Action: null,
    Entity: null,
    Source: null,
    EntityUid: null,
    PropertyBag: null
};
SP.SlapiInternal.LargeFileUploadBrowserEvent = function SP_SlapiInternal_LargeFileUploadBrowserEvent(pMimeType, pFileSize, pUploadId, pMethod, pChunkNumber, pChunkSize, pHttpStatus, pUploadTime) {
    this.MimeType = pMimeType;
    this.FileSize = pFileSize;
    this.UploadId = pUploadId;
    this.Method = pMethod;
    this.ChunkNumber = pChunkNumber;
    this.ChunkSize = pChunkSize;
    this.HttpStatus = pHttpStatus;
    this.UploadTime = pUploadTime;
};
SP.SlapiInternal.LargeFileUploadBrowserEvent.prototype = {
    MimeType: null,
    FileSize: 0,
    UploadId: null,
    Method: null,
    ChunkNumber: 0,
    ChunkSize: 0,
    HttpStatus: 0,
    UploadTime: 0
};
SP.SlapiInternal.InsertedSignals = function SP_SlapiInternal_InsertedSignals(pInsertionPoint, pNumberOfSignals, pNumberOfCharactersInBatch, pException, pNumberOfWrittenSignals, pInsertionTime, pDurationInMilliseconds, pIsClientError, pSignalsSource, pNumberOfDifferentUsers) {
    this.InsertionPoint = pInsertionPoint;
    this.NumberOfSignals = pNumberOfSignals;
    this.NumberOfCharactersInBatch = pNumberOfCharactersInBatch;
    this.Exception = pException;
    this.NumberOfWrittenSignals = pNumberOfWrittenSignals;
    this.InsertionTime = pInsertionTime;
    this.DurationInMilliseconds = pDurationInMilliseconds;
    this.IsClientError = pIsClientError;
    this.SignalsSource = pSignalsSource;
    this.NumberOfDifferentUsers = pNumberOfDifferentUsers;
};
SP.SlapiInternal.InsertedSignals.prototype = {
    InsertionPoint: null,
    NumberOfSignals: 0,
    NumberOfCharactersInBatch: 0,
    Exception: null,
    NumberOfWrittenSignals: 0,
    InsertionTime: null,
    DurationInMilliseconds: 0,
    IsClientError: false,
    SignalsSource: null,
    NumberOfDifferentUsers: 0
};
SP.SlapiInternal.SpoSignalToOls = function SP_SlapiInternal_SpoSignalToOls(pOlsCorrelationId, pSignalActionType, pSignalSuccessfullySent, pAppTokenDispatchTime, pSignalConversionTime, pAppTokenWaitTime, pMintTokenCreationTime, pPostTime, pTotalTime, pNumberOfAttempts, pErrorCode, pLogicalIdConstructedInSpo, pTokenReadFromCache, pHttpStatusCode, pOlsServerName, pTenantId, pActionToBatchTime, pBatchToSignalTime, pTotalTimeUserView, pSiteId, pEntitySet, pCorrelationId, pActorId, pUserAgent, pListId, pWebId, pUniqueId) {
    this.OlsCorrelationId = pOlsCorrelationId;
    this.SignalActionType = pSignalActionType;
    this.SignalSuccessfullySent = pSignalSuccessfullySent;
    this.AppTokenDispatchTime = pAppTokenDispatchTime;
    this.SignalConversionTime = pSignalConversionTime;
    this.AppTokenWaitTime = pAppTokenWaitTime;
    this.MintTokenCreationTime = pMintTokenCreationTime;
    this.PostTime = pPostTime;
    this.TotalTime = pTotalTime;
    this.NumberOfAttempts = pNumberOfAttempts;
    this.ErrorCode = pErrorCode;
    this.LogicalIdConstructedInSpo = pLogicalIdConstructedInSpo;
    this.TokenReadFromCache = pTokenReadFromCache;
    this.HttpStatusCode = pHttpStatusCode;
    this.OlsServerName = pOlsServerName;
    this.TenantId = pTenantId;
    this.ActionToBatchTime = pActionToBatchTime;
    this.BatchToSignalTime = pBatchToSignalTime;
    this.TotalTimeUserView = pTotalTimeUserView;
    this.SiteId = pSiteId;
    this.EntitySet = pEntitySet;
    this.CorrelationId = pCorrelationId;
    this.ActorId = pActorId;
    this.UserAgent = pUserAgent;
    this.ListId = pListId;
    this.WebId = pWebId;
    this.UniqueId = pUniqueId;
};
SP.SlapiInternal.SpoSignalToOls.prototype = {
    OlsCorrelationId: null,
    SignalActionType: null,
    SignalSuccessfullySent: false,
    AppTokenDispatchTime: 0,
    SignalConversionTime: 0,
    AppTokenWaitTime: 0,
    MintTokenCreationTime: 0,
    PostTime: 0,
    TotalTime: 0,
    NumberOfAttempts: 0,
    ErrorCode: null,
    LogicalIdConstructedInSpo: false,
    TokenReadFromCache: false,
    HttpStatusCode: null,
    OlsServerName: null,
    TenantId: null,
    ActionToBatchTime: 0,
    BatchToSignalTime: 0,
    TotalTimeUserView: 0,
    SiteId: null,
    EntitySet: null,
    CorrelationId: null,
    ActorId: null,
    UserAgent: null,
    ListId: null,
    WebId: null,
    UniqueId: null
};
SP.SlapiInternal.PSCacheLog = function SP_SlapiInternal_PSCacheLog(pLoggingKey, pCacheContainer, pIsCacheHit, pDurationMilliseconds) {
    this.LoggingKey = pLoggingKey;
    this.CacheContainer = pCacheContainer;
    this.IsCacheHit = pIsCacheHit;
    this.DurationMilliseconds = pDurationMilliseconds;
};
SP.SlapiInternal.PSCacheLog.prototype = {
    LoggingKey: null,
    CacheContainer: null,
    IsCacheHit: false,
    DurationMilliseconds: 0
};
SP.SlapiInternal.RUMUsage = function SP_SlapiInternal_RUMUsage(pNavigationStart, pUnloadEventStart, pUnloadEventEnd, pFetchStart, pRedirectStart, pRedirectEnd, pDomainLookupStart, pDomainLookupEnd, pConnectStart, pSecureConnectStart, pConnectEnd, pRequestStart, pResponseStart, pResponseEnd, pDomLoading, pDomLoadEnd, pLoadEventStart, pLoadEventEnd, pTTLBFirst, pTTLBLast, pDownloadStart, pParseDeltaStart, pParseDeltaEnd, pGCStart, pGCEnd, pCSSStart, pCSSEnd, pInnerHTMLStart, pScriptLoaderStart, pScriptLoaderEnd, pAnimationStart, pAnimationEnd, pPageTransitionType, pClientPLT, pParallelDownloadStart, pParallelDownloadEnd) {
    this.NavigationStart = pNavigationStart;
    this.UnloadEventStart = pUnloadEventStart;
    this.UnloadEventEnd = pUnloadEventEnd;
    this.FetchStart = pFetchStart;
    this.RedirectStart = pRedirectStart;
    this.RedirectEnd = pRedirectEnd;
    this.DomainLookupStart = pDomainLookupStart;
    this.DomainLookupEnd = pDomainLookupEnd;
    this.ConnectStart = pConnectStart;
    this.SecureConnectStart = pSecureConnectStart;
    this.ConnectEnd = pConnectEnd;
    this.RequestStart = pRequestStart;
    this.ResponseStart = pResponseStart;
    this.ResponseEnd = pResponseEnd;
    this.DomLoading = pDomLoading;
    this.DomLoadEnd = pDomLoadEnd;
    this.LoadEventStart = pLoadEventStart;
    this.LoadEventEnd = pLoadEventEnd;
    this.TTLBFirst = pTTLBFirst;
    this.TTLBLast = pTTLBLast;
    this.DownloadStart = pDownloadStart;
    this.ParseDeltaStart = pParseDeltaStart;
    this.ParseDeltaEnd = pParseDeltaEnd;
    this.GCStart = pGCStart;
    this.GCEnd = pGCEnd;
    this.CSSStart = pCSSStart;
    this.CSSEnd = pCSSEnd;
    this.InnerHTMLStart = pInnerHTMLStart;
    this.ScriptLoaderStart = pScriptLoaderStart;
    this.ScriptLoaderEnd = pScriptLoaderEnd;
    this.AnimationStart = pAnimationStart;
    this.AnimationEnd = pAnimationEnd;
    this.PageTransitionType = pPageTransitionType;
    this.ClientPLT = pClientPLT;
    this.ParallelDownloadStart = pParallelDownloadStart;
    this.ParallelDownloadEnd = pParallelDownloadEnd;
};
SP.SlapiInternal.RUMUsage.prototype = {
    NavigationStart: 0,
    UnloadEventStart: 0,
    UnloadEventEnd: 0,
    FetchStart: 0,
    RedirectStart: 0,
    RedirectEnd: 0,
    DomainLookupStart: 0,
    DomainLookupEnd: 0,
    ConnectStart: 0,
    SecureConnectStart: 0,
    ConnectEnd: 0,
    RequestStart: 0,
    ResponseStart: 0,
    ResponseEnd: 0,
    DomLoading: 0,
    DomLoadEnd: 0,
    LoadEventStart: 0,
    LoadEventEnd: 0,
    TTLBFirst: 0,
    TTLBLast: 0,
    DownloadStart: 0,
    ParseDeltaStart: 0,
    ParseDeltaEnd: 0,
    GCStart: 0,
    GCEnd: 0,
    CSSStart: 0,
    CSSEnd: 0,
    InnerHTMLStart: 0,
    ScriptLoaderStart: 0,
    ScriptLoaderEnd: 0,
    AnimationStart: 0,
    AnimationEnd: 0,
    PageTransitionType: 0,
    ClientPLT: 0,
    ParallelDownloadStart: 0,
    ParallelDownloadEnd: 0
};
SP.SlapiInternal.RUMOne = function SP_SlapiInternal_RUMOne(pServerCorrelationId, pScenarioId, pEUPL, pServerUrl, pBrowser, pClientIP, pUserAgent, pFlights, pPageTransitionType, pAppCache, pFolderNav, pInitiationTimeOffset, pServerRequestDuration, pIISLatency, pTTFB, pTTLB, pParseTime, pRenderTime, pControl1Id, pControl1RenderTime, pControl2Id, pControl2RenderTime, pControl3Id, pControl3RenderTime, pControl4Id, pControl4RenderTime, pSharePointRequestCountTotal, pSharePointRequestCountASPX, pSharePointRequestCountJS, pSharePointRequestCountCSS, pSharePointRequestCountIMG, pSharePointRequestCountNoneCached, pSharePointRequestBytes, pSharePointRequestDownloadTime, pCDNRequestCountTotal, pCDNRequestCountASPX, pCDNRequestCountJS, pCDNRequestCountCSS, pCDNRequestCountIMG, pCDNRequestCountNoneCached, pCDNRequestBytes, pCDNRequestDownloadTime, pThirdPartyRequestCountTotal, pThirdPartyRequestCountASPX, pThirdPartyRequestCountJS, pThirdPartyRequestCountCSS, pThirdPartyRequestCountIMG, pThirdPartyRequestCountNoneCached, pThirdPartyRequestBytes, pThirdPartyRequestDownloadTime, pFromEdge, pAPICallCount, pAPICallDurationSum, pPreRender, pDataFetch, pPostRender, pW3cNavigationStart, pW3cUnloadEventStart, pW3cUnloadEventEnd, pW3cFetchStart, pW3cRedirectStart, pW3cRedirectEnd, pW3cDomainLookupStart, pW3cDomainLookupEnd, pW3cConnectStart, pW3cSecureConnectStart, pW3cConnectEnd, pW3cRequestStart, pW3cResponseStart, pW3cResponseEnd, pW3cDomLoading, pW3cDomLoadEnd, pW3cLoadEventStart, pW3cLoadEventEnd, pMDSDownloadStart, pMDSParseDeltaStart, pMDSParseDeltaEnd, pMDSGCStart, pMDSGCEnd, pMDSCSSStart, pMDSCSSEnd, pMDSInnerHTMLStart, pMDSScriptLoaderStart, pMDSScriptLoaderEnd, pMDSAnimationStart, pMDSAnimationEnd, pMDSParallelDownloadStart, pMDSParallelDownloadEnd, pAPICalls, pSharePointRequestNames, pCDNRequestNames, pThirdPartyRequestNames, pEUPLBreakdown, pControl5Id, pControl5RenderTime, pControl6Id, pControl6RenderTime, pControl7Id, pControl7RenderTime, pControl8Id, pControl8RenderTime, pControl9Id, pControl9RenderTime, pControl10Id, pControl10RenderTime, pServerMetrics, pReferrer, pBrowserIsMobile, pSharePointServerVersion, pRUMOneError, pPUID, pUserLoginName) {
    this.ServerCorrelationId = pServerCorrelationId;
    this.ScenarioId = pScenarioId;
    this.EUPL = pEUPL;
    this.ServerUrl = pServerUrl;
    this.Browser = pBrowser;
    this.ClientIP = pClientIP;
    this.UserAgent = pUserAgent;
    this.Flights = pFlights;
    this.PageTransitionType = pPageTransitionType;
    this.AppCache = pAppCache;
    this.FolderNav = pFolderNav;
    this.InitiationTimeOffset = pInitiationTimeOffset;
    this.ServerRequestDuration = pServerRequestDuration;
    this.IISLatency = pIISLatency;
    this.TTFB = pTTFB;
    this.TTLB = pTTLB;
    this.ParseTime = pParseTime;
    this.RenderTime = pRenderTime;
    this.Control1Id = pControl1Id;
    this.Control1RenderTime = pControl1RenderTime;
    this.Control2Id = pControl2Id;
    this.Control2RenderTime = pControl2RenderTime;
    this.Control3Id = pControl3Id;
    this.Control3RenderTime = pControl3RenderTime;
    this.Control4Id = pControl4Id;
    this.Control4RenderTime = pControl4RenderTime;
    this.SharePointRequestCountTotal = pSharePointRequestCountTotal;
    this.SharePointRequestCountASPX = pSharePointRequestCountASPX;
    this.SharePointRequestCountJS = pSharePointRequestCountJS;
    this.SharePointRequestCountCSS = pSharePointRequestCountCSS;
    this.SharePointRequestCountIMG = pSharePointRequestCountIMG;
    this.SharePointRequestCountNoneCached = pSharePointRequestCountNoneCached;
    this.SharePointRequestBytes = pSharePointRequestBytes;
    this.SharePointRequestDownloadTime = pSharePointRequestDownloadTime;
    this.CDNRequestCountTotal = pCDNRequestCountTotal;
    this.CDNRequestCountASPX = pCDNRequestCountASPX;
    this.CDNRequestCountJS = pCDNRequestCountJS;
    this.CDNRequestCountCSS = pCDNRequestCountCSS;
    this.CDNRequestCountIMG = pCDNRequestCountIMG;
    this.CDNRequestCountNoneCached = pCDNRequestCountNoneCached;
    this.CDNRequestBytes = pCDNRequestBytes;
    this.CDNRequestDownloadTime = pCDNRequestDownloadTime;
    this.ThirdPartyRequestCountTotal = pThirdPartyRequestCountTotal;
    this.ThirdPartyRequestCountASPX = pThirdPartyRequestCountASPX;
    this.ThirdPartyRequestCountJS = pThirdPartyRequestCountJS;
    this.ThirdPartyRequestCountCSS = pThirdPartyRequestCountCSS;
    this.ThirdPartyRequestCountIMG = pThirdPartyRequestCountIMG;
    this.ThirdPartyRequestCountNoneCached = pThirdPartyRequestCountNoneCached;
    this.ThirdPartyRequestBytes = pThirdPartyRequestBytes;
    this.ThirdPartyRequestDownloadTime = pThirdPartyRequestDownloadTime;
    this.FromEdge = pFromEdge;
    this.APICallCount = pAPICallCount;
    this.APICallDurationSum = pAPICallDurationSum;
    this.PreRender = pPreRender;
    this.DataFetch = pDataFetch;
    this.PostRender = pPostRender;
    this.W3cNavigationStart = pW3cNavigationStart;
    this.W3cUnloadEventStart = pW3cUnloadEventStart;
    this.W3cUnloadEventEnd = pW3cUnloadEventEnd;
    this.W3cFetchStart = pW3cFetchStart;
    this.W3cRedirectStart = pW3cRedirectStart;
    this.W3cRedirectEnd = pW3cRedirectEnd;
    this.W3cDomainLookupStart = pW3cDomainLookupStart;
    this.W3cDomainLookupEnd = pW3cDomainLookupEnd;
    this.W3cConnectStart = pW3cConnectStart;
    this.W3cSecureConnectStart = pW3cSecureConnectStart;
    this.W3cConnectEnd = pW3cConnectEnd;
    this.W3cRequestStart = pW3cRequestStart;
    this.W3cResponseStart = pW3cResponseStart;
    this.W3cResponseEnd = pW3cResponseEnd;
    this.W3cDomLoading = pW3cDomLoading;
    this.W3cDomLoadEnd = pW3cDomLoadEnd;
    this.W3cLoadEventStart = pW3cLoadEventStart;
    this.W3cLoadEventEnd = pW3cLoadEventEnd;
    this.MDSDownloadStart = pMDSDownloadStart;
    this.MDSParseDeltaStart = pMDSParseDeltaStart;
    this.MDSParseDeltaEnd = pMDSParseDeltaEnd;
    this.MDSGCStart = pMDSGCStart;
    this.MDSGCEnd = pMDSGCEnd;
    this.MDSCSSStart = pMDSCSSStart;
    this.MDSCSSEnd = pMDSCSSEnd;
    this.MDSInnerHTMLStart = pMDSInnerHTMLStart;
    this.MDSScriptLoaderStart = pMDSScriptLoaderStart;
    this.MDSScriptLoaderEnd = pMDSScriptLoaderEnd;
    this.MDSAnimationStart = pMDSAnimationStart;
    this.MDSAnimationEnd = pMDSAnimationEnd;
    this.MDSParallelDownloadStart = pMDSParallelDownloadStart;
    this.MDSParallelDownloadEnd = pMDSParallelDownloadEnd;
    this.APICalls = pAPICalls;
    this.SharePointRequestNames = pSharePointRequestNames;
    this.CDNRequestNames = pCDNRequestNames;
    this.ThirdPartyRequestNames = pThirdPartyRequestNames;
    this.EUPLBreakdown = pEUPLBreakdown;
    this.Control5Id = pControl5Id;
    this.Control5RenderTime = pControl5RenderTime;
    this.Control6Id = pControl6Id;
    this.Control6RenderTime = pControl6RenderTime;
    this.Control7Id = pControl7Id;
    this.Control7RenderTime = pControl7RenderTime;
    this.Control8Id = pControl8Id;
    this.Control8RenderTime = pControl8RenderTime;
    this.Control9Id = pControl9Id;
    this.Control9RenderTime = pControl9RenderTime;
    this.Control10Id = pControl10Id;
    this.Control10RenderTime = pControl10RenderTime;
    this.ServerMetrics = pServerMetrics;
    this.Referrer = pReferrer;
    this.BrowserIsMobile = pBrowserIsMobile;
    this.SharePointServerVersion = pSharePointServerVersion;
    this.RUMOneError = pRUMOneError;
    this.PUID = pPUID;
    this.UserLoginName = pUserLoginName;
};
SP.SlapiInternal.RUMOne.prototype = {
    ServerCorrelationId: null,
    ScenarioId: null,
    EUPL: 0,
    ServerUrl: null,
    Browser: null,
    ClientIP: null,
    UserAgent: null,
    Flights: null,
    PageTransitionType: 0,
    AppCache: false,
    FolderNav: false,
    InitiationTimeOffset: 0,
    ServerRequestDuration: 0,
    IISLatency: 0,
    TTFB: 0,
    TTLB: 0,
    ParseTime: 0,
    RenderTime: 0,
    Control1Id: null,
    Control1RenderTime: 0,
    Control2Id: null,
    Control2RenderTime: 0,
    Control3Id: null,
    Control3RenderTime: 0,
    Control4Id: null,
    Control4RenderTime: 0,
    SharePointRequestCountTotal: 0,
    SharePointRequestCountASPX: 0,
    SharePointRequestCountJS: 0,
    SharePointRequestCountCSS: 0,
    SharePointRequestCountIMG: 0,
    SharePointRequestCountNoneCached: 0,
    SharePointRequestBytes: 0,
    SharePointRequestDownloadTime: 0,
    CDNRequestCountTotal: 0,
    CDNRequestCountASPX: 0,
    CDNRequestCountJS: 0,
    CDNRequestCountCSS: 0,
    CDNRequestCountIMG: 0,
    CDNRequestCountNoneCached: 0,
    CDNRequestBytes: 0,
    CDNRequestDownloadTime: 0,
    ThirdPartyRequestCountTotal: 0,
    ThirdPartyRequestCountASPX: 0,
    ThirdPartyRequestCountJS: 0,
    ThirdPartyRequestCountCSS: 0,
    ThirdPartyRequestCountIMG: 0,
    ThirdPartyRequestCountNoneCached: 0,
    ThirdPartyRequestBytes: 0,
    ThirdPartyRequestDownloadTime: 0,
    FromEdge: false,
    APICallCount: 0,
    APICallDurationSum: 0,
    PreRender: 0,
    DataFetch: 0,
    PostRender: 0,
    W3cNavigationStart: 0,
    W3cUnloadEventStart: 0,
    W3cUnloadEventEnd: 0,
    W3cFetchStart: 0,
    W3cRedirectStart: 0,
    W3cRedirectEnd: 0,
    W3cDomainLookupStart: 0,
    W3cDomainLookupEnd: 0,
    W3cConnectStart: 0,
    W3cSecureConnectStart: 0,
    W3cConnectEnd: 0,
    W3cRequestStart: 0,
    W3cResponseStart: 0,
    W3cResponseEnd: 0,
    W3cDomLoading: 0,
    W3cDomLoadEnd: 0,
    W3cLoadEventStart: 0,
    W3cLoadEventEnd: 0,
    MDSDownloadStart: 0,
    MDSParseDeltaStart: 0,
    MDSParseDeltaEnd: 0,
    MDSGCStart: 0,
    MDSGCEnd: 0,
    MDSCSSStart: 0,
    MDSCSSEnd: 0,
    MDSInnerHTMLStart: 0,
    MDSScriptLoaderStart: 0,
    MDSScriptLoaderEnd: 0,
    MDSAnimationStart: 0,
    MDSAnimationEnd: 0,
    MDSParallelDownloadStart: 0,
    MDSParallelDownloadEnd: 0,
    APICalls: null,
    SharePointRequestNames: null,
    CDNRequestNames: null,
    ThirdPartyRequestNames: null,
    EUPLBreakdown: null,
    Control5Id: null,
    Control5RenderTime: 0,
    Control6Id: null,
    Control6RenderTime: 0,
    Control7Id: null,
    Control7RenderTime: 0,
    Control8Id: null,
    Control8RenderTime: 0,
    Control9Id: null,
    Control9RenderTime: 0,
    Control10Id: null,
    Control10RenderTime: 0,
    ServerMetrics: null,
    Referrer: null,
    BrowserIsMobile: false,
    SharePointServerVersion: null,
    RUMOneError: null,
    PUID: null,
    UserLoginName: null
};
SP.SlapiInternal.RUMOneErrors = function SP_SlapiInternal_RUMOneErrors(pReason, pMessage) {
    this.Reason = pReason;
    this.Message = pMessage;
};
SP.SlapiInternal.RUMOneErrors.prototype = {
    Reason: null,
    Message: null
};
SP.SlapiInternal.SearchTopologyInvocationStatistics = function SP_SlapiInternal_SearchTopologyInvocationStatistics(pCounterResetTime, pNodeName, pEndpointId, pInvocationCount, pMinExecutionMilliseconds, pMaxExecutionMilliseconds, pAvgExecutionMilliseconds, pAvgNetworkMilliseconds, pMinTxDataSize, pMaxTxDataSize, pAvgTxDataSize, pAggregateTxDataSize, pMinRxDataSize, pMaxRxDataSize, pAvgRxDataSize) {
    this.CounterResetTime = pCounterResetTime;
    this.NodeName = pNodeName;
    this.EndpointId = pEndpointId;
    this.InvocationCount = pInvocationCount;
    this.MinExecutionMilliseconds = pMinExecutionMilliseconds;
    this.MaxExecutionMilliseconds = pMaxExecutionMilliseconds;
    this.AvgExecutionMilliseconds = pAvgExecutionMilliseconds;
    this.AvgNetworkMilliseconds = pAvgNetworkMilliseconds;
    this.MinTxDataSize = pMinTxDataSize;
    this.MaxTxDataSize = pMaxTxDataSize;
    this.AvgTxDataSize = pAvgTxDataSize;
    this.AggregateTxDataSize = pAggregateTxDataSize;
    this.MinRxDataSize = pMinRxDataSize;
    this.MaxRxDataSize = pMaxRxDataSize;
    this.AvgRxDataSize = pAvgRxDataSize;
};
SP.SlapiInternal.SearchTopologyInvocationStatistics.prototype = {
    CounterResetTime: null,
    NodeName: null,
    EndpointId: null,
    InvocationCount: 0,
    MinExecutionMilliseconds: 0,
    MaxExecutionMilliseconds: 0,
    AvgExecutionMilliseconds: 0,
    AvgNetworkMilliseconds: 0,
    MinTxDataSize: 0,
    MaxTxDataSize: 0,
    AvgTxDataSize: 0,
    AggregateTxDataSize: 0,
    MinRxDataSize: 0,
    MaxRxDataSize: 0,
    AvgRxDataSize: 0
};
SP.SlapiInternal.SearchTopologyRemotingStatistics = function SP_SlapiInternal_SearchTopologyRemotingStatistics(pCounterResetTime, pNodeName, pConnectionRetries, pConnectionTimeouts, pEndpointRetries, pStaleServiceReferenceExceptions) {
    this.CounterResetTime = pCounterResetTime;
    this.NodeName = pNodeName;
    this.ConnectionRetries = pConnectionRetries;
    this.ConnectionTimeouts = pConnectionTimeouts;
    this.EndpointRetries = pEndpointRetries;
    this.StaleServiceReferenceExceptions = pStaleServiceReferenceExceptions;
};
SP.SlapiInternal.SearchTopologyRemotingStatistics.prototype = {
    CounterResetTime: null,
    NodeName: null,
    ConnectionRetries: 0,
    ConnectionTimeouts: 0,
    EndpointRetries: 0,
    StaleServiceReferenceExceptions: 0
};
SP.SlapiInternal.TaxonomyCacheStatisticsLog = function SP_SlapiInternal_TaxonomyCacheStatisticsLog(pItemType, pTotalLookups, pCacheHits, pCacheMisses, pTotalLookupMilliseconds) {
    this.ItemType = pItemType;
    this.TotalLookups = pTotalLookups;
    this.CacheHits = pCacheHits;
    this.CacheMisses = pCacheMisses;
    this.TotalLookupMilliseconds = pTotalLookupMilliseconds;
};
SP.SlapiInternal.TaxonomyCacheStatisticsLog.prototype = {
    ItemType: null,
    TotalLookups: 0,
    CacheHits: 0,
    CacheMisses: 0,
    TotalLookupMilliseconds: 0
};
SP.SlapiInternal.PJContentDatabaseVersionLog = function SP_SlapiInternal_PJContentDatabaseVersionLog(pContentDatabaseId, pContentDatabaseName, pNormalizedDataSource, pBuildVersion, pDatabaseVersion) {
    this.ContentDatabaseId = pContentDatabaseId;
    this.ContentDatabaseName = pContentDatabaseName;
    this.NormalizedDataSource = pNormalizedDataSource;
    this.BuildVersion = pBuildVersion;
    this.DatabaseVersion = pDatabaseVersion;
};
SP.SlapiInternal.PJContentDatabaseVersionLog.prototype = {
    ContentDatabaseId: null,
    ContentDatabaseName: null,
    NormalizedDataSource: null,
    BuildVersion: null,
    DatabaseVersion: null
};
SP.SlapiInternal.DelveEmbedClickLog = function SP_SlapiInternal_DelveEmbedClickLog(pDelveEmbedId, pTargetUrl, pLinkType, pRedirected) {
    this.DelveEmbedId = pDelveEmbedId;
    this.TargetUrl = pTargetUrl;
    this.LinkType = pLinkType;
    this.Redirected = pRedirected;
};
SP.SlapiInternal.DelveEmbedClickLog.prototype = {
    DelveEmbedId: null,
    TargetUrl: null,
    LinkType: null,
    Redirected: false
};
SP.SlapiInternal.ActivitySiphonResponseLog = function SP_SlapiInternal_ActivitySiphonResponseLog(pEventId, pEventTimestampUtc, pSucceeded) {
    this.EventId = pEventId;
    this.EventTimestampUtc = pEventTimestampUtc;
    this.Succeeded = pSucceeded;
};
SP.SlapiInternal.ActivitySiphonResponseLog.prototype = {
    EventId: null,
    EventTimestampUtc: null,
    Succeeded: false
};
SP.SlapiInternal.ActivitySiphonResponseLogNonAudit = function SP_SlapiInternal_ActivitySiphonResponseLogNonAudit(pEventId, pEventTimestampUtc, pSucceeded) {
    this.EventId = pEventId;
    this.EventTimestampUtc = pEventTimestampUtc;
    this.Succeeded = pSucceeded;
};
SP.SlapiInternal.ActivitySiphonResponseLogNonAudit.prototype = {
    EventId: null,
    EventTimestampUtc: null,
    Succeeded: false
};
SP.BWsaConfig.registerClass('SP.BWsaConfig');
SP.Ticks.registerClass('SP.Ticks');
SP.TimerResetCheck.registerClass('SP.TimerResetCheck');
SP.StreamRowCounters.registerClass('SP.StreamRowCounters');
SP.BWsaDatapoint.registerClass('SP.BWsaDatapoint');
SP.WsaStreamRow.registerClass('SP.WsaStreamRow');
SP.BWsaStream.registerClass('SP.BWsaStream');
SP.BWsaHeader.registerClass('SP.BWsaHeader');
SP.BWsaData.registerClass('SP.BWsaData');
SP.BWsaClient.registerClass('SP.BWsaClient', null, SP.IBWsaClient);
SP.RUMLogger.registerClass('SP.RUMLogger');
SP.SimpleLogger.registerClass('SP.SimpleLogger');
SP.SimpleLogger.BSQMProxy.registerClass('SP.SimpleLogger.BSQMProxy', null, SP.IBSQM);
SP.SimpleLoggerConstants.registerClass('SP.SimpleLoggerConstants');
SP.UI.AspMenu.registerClass('SP.UI.AspMenu', Sys.UI.Control);
SP.Utilities.CommandBlock.registerClass('SP.Utilities.CommandBlock');
SP.Utilities.TaskTelemetry.registerClass('SP.Utilities.TaskTelemetry');
SP.Utilities.Task.registerClass('SP.Utilities.Task');
SP.Utilities.tcsaver.registerClass('SP.Utilities.tcsaver');
SP.Utilities.TaskCarousel.registerClass('SP.Utilities.TaskCarousel');
SP.Disposal.DisposalManager.registerClass('SP.Disposal.DisposalManager');
SP.Utilities.Internal.ECBMenuItem.registerClass('SP.Utilities.Internal.ECBMenuItem', Object);
SP.Utilities.Internal.CLVP.registerClass('SP.Utilities.Internal.CLVP');
SP.Utilities.Internal.ECBAdapter.registerClass('SP.Utilities.Internal.ECBAdapter');
SP.ListOperation.ViewOperation.registerClass('SP.ListOperation.ViewOperation');
SP.ListOperation.Selection.registerClass('SP.ListOperation.Selection');
SP.ListOperation.Overrides.registerClass('SP.ListOperation.Overrides');
SP.SlapiInternal.SPSocialActionLog.registerClass('SP.SlapiInternal.SPSocialActionLog');
SP.SlapiInternal.UserEngagement.registerClass('SP.SlapiInternal.UserEngagement');
SP.SlapiInternal.SPSocialGetFeed.registerClass('SP.SlapiInternal.SPSocialGetFeed');
SP.SlapiInternal.SPSocialNewPost.registerClass('SP.SlapiInternal.SPSocialNewPost');
SP.SlapiInternal.SPSocialLikePost.registerClass('SP.SlapiInternal.SPSocialLikePost');
SP.SlapiInternal.SPSocialDeletePost.registerClass('SP.SlapiInternal.SPSocialDeletePost');
SP.SlapiInternal.SPSocialFollowing.registerClass('SP.SlapiInternal.SPSocialFollowing');
SP.SlapiInternal.SPUserProfilePage.registerClass('SP.SlapiInternal.SPUserProfilePage');
SP.SlapiInternal.PeopleSearchInstrumentation.registerClass('SP.SlapiInternal.PeopleSearchInstrumentation');
SP.SlapiInternal.ProjectDataAnalytics.registerClass('SP.SlapiInternal.ProjectDataAnalytics');
SP.SlapiInternal.ProjectDiagnosticAssert.registerClass('SP.SlapiInternal.ProjectDiagnosticAssert');
SP.SlapiInternal.ProjectDiagnosticTimephasedError.registerClass('SP.SlapiInternal.ProjectDiagnosticTimephasedError');
SP.SlapiInternal.ProjectDiagnosticTimephased.registerClass('SP.SlapiInternal.ProjectDiagnosticTimephased');
SP.SlapiInternal.ProjectDataDiagnostics.registerClass('SP.SlapiInternal.ProjectDataDiagnostics');
SP.SlapiInternal.RUMExtended.registerClass('SP.SlapiInternal.RUMExtended');
SP.SlapiInternal.RUMAgg.registerClass('SP.SlapiInternal.RUMAgg');
SP.SlapiInternal.RUMRaw.registerClass('SP.SlapiInternal.RUMRaw');
SP.SlapiInternal.SignalStoreDatabaseStatistics.registerClass('SP.SlapiInternal.SignalStoreDatabaseStatistics');
SP.SlapiInternal.StackTraceHash.registerClass('SP.SlapiInternal.StackTraceHash');
SP.SlapiInternal.StackTraceLog.registerClass('SP.SlapiInternal.StackTraceLog');
SP.SlapiInternal.ProjectLicenseCheckLog.registerClass('SP.SlapiInternal.ProjectLicenseCheckLog');
SP.SlapiInternal.ProjectUsageData.registerClass('SP.SlapiInternal.ProjectUsageData');
SP.SlapiInternal.LargeFileUploadBrowserEvent.registerClass('SP.SlapiInternal.LargeFileUploadBrowserEvent');
SP.SlapiInternal.InsertedSignals.registerClass('SP.SlapiInternal.InsertedSignals');
SP.SlapiInternal.SpoSignalToOls.registerClass('SP.SlapiInternal.SpoSignalToOls');
SP.SlapiInternal.PSCacheLog.registerClass('SP.SlapiInternal.PSCacheLog');
SP.SlapiInternal.RUMUsage.registerClass('SP.SlapiInternal.RUMUsage');
SP.SlapiInternal.RUMOne.registerClass('SP.SlapiInternal.RUMOne');
SP.SlapiInternal.RUMOneErrors.registerClass('SP.SlapiInternal.RUMOneErrors');
SP.SlapiInternal.SearchTopologyInvocationStatistics.registerClass('SP.SlapiInternal.SearchTopologyInvocationStatistics');
SP.SlapiInternal.SearchTopologyRemotingStatistics.registerClass('SP.SlapiInternal.SearchTopologyRemotingStatistics');
SP.SlapiInternal.TaxonomyCacheStatisticsLog.registerClass('SP.SlapiInternal.TaxonomyCacheStatisticsLog');
SP.SlapiInternal.PJContentDatabaseVersionLog.registerClass('SP.SlapiInternal.PJContentDatabaseVersionLog');
SP.SlapiInternal.DelveEmbedClickLog.registerClass('SP.SlapiInternal.DelveEmbedClickLog');
SP.SlapiInternal.ActivitySiphonResponseLog.registerClass('SP.SlapiInternal.ActivitySiphonResponseLog');
SP.SlapiInternal.ActivitySiphonResponseLogNonAudit.registerClass('SP.SlapiInternal.ActivitySiphonResponseLogNonAudit');
function sp_core_initialize() {
    SP.BWsaConfig.defaultMaxStreamRows = 1000;
    SP.BWsaConfig.defaultMaxInt32 = 4294967295;
    SP.BWsaConfig.defaultRibbonStreamWidth = 8;
    SP.Ticks.$19 = 0;
    SP.TimerResetCheck.$12 = 0;
    SP.StreamRowCounters.maxRowCount = 0;
    SP.StreamRowCounters.maxOverwritten = 0;
    SP.RUMLogger.$P = null;
    SP.SimpleLoggerConstants.streaM_ID = 1234;
    SP.SimpleLoggerConstants.evenT_NAME_INDEX = 1;
    SP.SimpleLoggerConstants.custoM_PROPERTIES_START_INDEX = 2;
    SP.SimpleLoggerConstants.rowLengthForObject = 2;
    SP.SimpleLoggerConstants.defaulT_LOG_SESSION_MS = 30000;
    SP.SimpleLoggerConstants.defaulT_MAX_DATA_SIZE = 16384;
    SP.UI.AspMenu.$1Y = '{0}_FrameID_{1}';
    SP.UI.AspMenu.$1X = 1100;
    SP.Utilities.TaskCarousel.$7 = [null, null, null, null, null];
    SP.Utilities.TaskCarousel.$5 = null;
    SP.Utilities.TaskCarousel.$G = null;
    SP.Utilities.TaskCarousel.$J = 0;
    SP.Utilities.TaskCarousel.$E = 0;
    SP.Utilities.TaskCarousel.$F = 0;
    SP.Utilities.TaskCarousel.$T = 50;
    SP.Utilities.TaskCarousel.$Q = 500;
    SP.Utilities.TaskCarousel.$a = 1000;
    SP.Utilities.TaskCarousel.currentCancellableTask = null;
    SP.Utilities.TaskCarousel.$C = null;
    SP.Utilities.TaskCarousel.$N = null;
    SP.Utilities.TaskCarousel.$6 = null;
    SP.Utilities.TaskCarousel.$q = SP.Utilities.TaskCarousel.$Q;
    SP.Disposal.DisposalManager.$P = null;
}
;
sp_core_initialize();
if (typeof RegisterModuleInit == "function") {
    RegisterModuleInit("sp.core.js", sp_core_initialize);
}
function Sys$UI$Control$dispose$fixup() {
    Sys.UI.Control.callBaseMethod(this, 'dispose');
    if (this._element) {
        this._element.control = undefined;
        delete this._element;
    }
    if (this._parent)
        delete this._parent;
}
if (typeof Sys != "undefined" && typeof Sys.UI != "undefined" && typeof Sys.UI.Control == "function") {
    Sys.UI.Control.prototype.dispose = Sys$UI$Control$dispose$fixup;
}
function SelectListItemNative(iid, bSelect) {
    var o = GetCtxRgiidFromIid(iid);

    if (o == null)
        return false;
    var ctxT = o.ctx;
    var rgiid = o.rgiid;

    if (bSelect) {
        if (ctxT.CurrentSelectedItems == g_MaximumSelectedItemsAllowed)
            return false;
        if (ctxT.dictSel[iid] == null) {
            ctxT.CurrentSelectedItems++;
            ctxT.dictSel[iid] = {
                id: rgiid[1],
                fsObjType: rgiid[2]
            };
        }
    }
    else {
        if (ctxT.dictSel[iid] != null) {
            delete ctxT.dictSel[iid];
            ctxT.CurrentSelectedItems--;
        }
    }
    OnItemSelectionChanged(ctxT, null, true);
    return true;
}
function DeselectAllListItemsNative(iid) {
    var o = GetCtxRgiidFromIid(iid);

    if (o == null)
        return false;
    var ctxT = o.ctx;

    ctxT.dictSel = [];
    ctxT.CurrentSelectedItems = 0;
    OnItemSelectionChanged(ctxT, null, true);
    return true;
}
function GetSelectedItemsNative() {
    var ctxT = GetCurrentCtx();

    if (ctxT == null || typeof ctxT.dictSel == "undefined")
        return [];
    var i = 0;
    var dictSelRet = [];

    for (var key in ctxT.dictSel) {
        dictSelRet[i] = {
            id: ctxT.dictSel[key].id,
            fsObjType: ctxT.dictSel[key].fsObjType
        };
        i++;
    }
    return dictSelRet;
}
function GetSelectedListNative() {
    var ctxT = GetCurrentCtx();

    if (ctxT == null)
        return null;
    return ctxT.listName;
}
function GetSelectedViewNative() {
    var ctxT = GetCurrentCtx();

    if (ctxT == null)
        return null;
    return ctxT.view;
}
function NavigateUpNative(viewId) {
    var ctxId = g_ViewIdToViewCounterMap[viewId];

    if (ctxId == null) {
        return;
    }
    var ctxLocal = window['ctx' + ctxId];

    EnsureScriptParams("inplview", "NavigateUp", ctxLocal);
}
function RefreshViewNative(viewId) {
    var ctxId = g_ViewIdToViewCounterMap[viewId];

    if (ctxId == null) {
        return;
    }
    var ctxLocal = window['ctx' + ctxId];

    if (ctxLocal != null && ctxLocal.IsClientRendering) {
        var evtAjax = {
            'currentCtx': ctxLocal,
            'csrAjaxRefresh': true
        };

        AJAXRefreshView(evtAjax, SP.UI.DialogResult.OK);
    }
}
function OverrideDeleteConfirmationNative(listId, overrideText) {
    for (var ctxId in g_ctxDict) {
        var ctxLocal = g_ctxDict[ctxId];

        if (ctxLocal.listName == listId) {
            ctxLocal.overrideDeleteConfirmation = overrideText;
        }
    }
}
function UpdateCorrelationIdForAppCacheIfNeeded(wsaObj) {
    function IsAppCacheHit() {
        var appCache = window.applicationCache;

        return Boolean(appCache) && appCache.UNCACHED != appCache.status && typeof g_appCache_cached != "undefined" && !g_appCache_cached;
    }
    ;
    if (typeof wsaObj != "undefined" && Boolean(wsaObj) && !wsaObj.get_isContinuation() && IsAppCacheHit()) {
        wsaObj.setCorrelationId(CacheLogger.GenerateGuid());
    }
}
function WSAEnabled() {
    return WSACEIPEnabled() || WSAQoSEnabled() || WSARUMEnabled();
}
function WSACEIPEnabled() {
    return typeof g_wsaEnabled != "undefined" && g_wsaEnabled;
}
function WSAQoSEnabled() {
    return typeof g_wsaQoSEnabled != "undefined" && g_wsaQoSEnabled;
}
function WSAQoSDatapoints() {
    if (typeof g_wsaQoSDataPoints != "undefined")
        return g_wsaQoSDataPoints;
    else
        return null;
}
function WSARUMEnabled() {
    return typeof g_wsaRUMEnabled != "undefined" && g_wsaRUMEnabled;
}
function SendWSA() {
    try {
        if (WSAEnabled()) {
            UpdateCorrelationIdForAppCacheIfNeeded(g_thewsa);
            g_thewsa.uploadWsaData();
        }
    }
    catch (e) { }
}
function GetWSA() {
    if (typeof g_thewsa == "undefined" || !g_thewsa) {
        if (SP) {
            if (SP.BWsaClient) {
                g_thewsa = new SP.BWsaClient(SP.Utilities.VersionUtility.get_layoutsLatestVersionUrl() + "WsaUpload.ashx", WSACEIPEnabled(), WSAQoSEnabled(), WSAQoSDatapoints());
                var wsa = g_thewsa;

                if (typeof ULS.Correlation != "undefined" && ULS.Correlation) {
                    wsa.setCorrelationId(ULS.Correlation);
                }
                else if (typeof g_correlationId != "undefined") {
                    wsa.setCorrelationId(g_correlationId);
                }
                wsa.createStream(8327, 1, 8, 200);
                wsa.addCommonDatapoint(59);
                wsa.setDw(59, 89);
                if (typeof g_wsaSiteTemplateId != "undefined" && g_wsaSiteTemplateId) {
                    wsa.addCommonDatapoint(8492);
                    wsa.setDw(8492, SP.BWsaClient.calcActionId(g_wsaSiteTemplateId));
                }
                if (typeof g_wsaLCID != "undefined" && g_wsaLCID) {
                    wsa.addCommonDatapoint(8491);
                    wsa.setDw(8491, g_wsaLCID);
                }
                if (typeof addEventListener != "undefined")
                    addEventListener("beforeunload", SendWSA, false);
                else
                    attachEvent("onbeforeunload", SendWSA);
            }
        }
    }
    return g_thewsa;
}
function GetSimpleLogger() {
    if (typeof g_simpleLogger == "undefined" || !g_simpleLogger) {
        if (SP && SP.SimpleLogger) {
            var wsa = GetWSA();

            if (!IsNullOrUndefined(wsa)) {
                g_simpleLogger = SP.SimpleLogger.GetSimpleLogger(wsa);
            }
        }
    }
    return g_simpleLogger;
}
function GetObjectName(object) {
    var results = object.constructor.getName();

    results = results.replace("SP.SlapiInternal.", "");
    return results;
}
function WriteLog(eventObjects) {
    if (eventObjects == null) {
        return;
    }
    var logger = GetSimpleLogger();
    var objectName;

    if (eventObjects.length > 0) {
        if (eventObjects[0] == null) {
            return;
        }
        objectName = GetObjectName(eventObjects[0]);
        if (objectName == null) {
            return;
        }
    }
    else {
        objectName = GetObjectName(eventObjects);
        if (objectName == null) {
            return;
        }
    }
    logger.WriteLogForEvents(objectName, eventObjects);
}
function GetRUMWSA() {
    if (typeof g_RUMWSA == "undefined" || !Boolean(g_RUMWSA)) {
        if (!Boolean(WSARUMEnabled()))
            return;
        var wsa = GetWSA();

        if (!IsNullOrUndefined(wsa)) {
            g_RUMWSA = new SP.RUMLogger(wsa);
        }
    }
    return g_RUMWSA;
}
;
function _executeECBCommand(code, myCtx) {
    eval("var event = new Object(); event.fromRibbon = true; event.currentCtx = myCtx;" + code + ";");
}
if (typeof Sys != "undefined" && Sys && Sys.Application) {
    Sys.Application.notifyScriptLoaded();
}
if (typeof NotifyScriptLoadedAndExecuteWaitingJobs == "function") {
    NotifyScriptLoadedAndExecuteWaitingJobs("sp.core.js");
}
if (typeof spWriteProfilerMark == 'function')
    spWriteProfilerMark("perfMarkEnd_" + "sp.core.js");
