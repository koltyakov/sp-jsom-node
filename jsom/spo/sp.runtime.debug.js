{
    if ("undefined" == typeof g_all_modules) {
        g_all_modules = {};
    }
    g_all_modules["sp.runtime.js"] = {
        "version": {
            "rmj": 16,
            "rmm": 0,
            "rup": 6518,
            "rpr": 1209
        }
    };
}
if (typeof spWriteProfilerMark == 'function')
    spWriteProfilerMark("perfMarkBegin_" + "sp.runtime.js");
if (window.SP && typeof SP.ClientRuntimeContext == "function" && window.console && window.console.error)
    window.console.error("Error: SP.Runtime.js is already loaded");
if (window.Type && window.Type.registerNamespace) {
Type.registerNamespace('SP');} else {
if(typeof(window['SP']) == 'undefined') {
window['SP'] = new Object(); window['SP']. __namespace = true;
}

}

if (typeof IEnumerator == "undefined") {
    var IEnumerator = function() {
    };

    IEnumerator.prototype = {
        get_current: null,
        moveNext: null,
        reset: null
    };
    if (IEnumerator.registerInterface) IEnumerator.registerInterface("IEnumerator");
}
if (typeof IEnumerable == "undefined") {
    var IEnumerable = function() {
    };

    IEnumerable.prototype = {
        getEnumerator: null
    };
    if (IEnumerable.registerInterface) IEnumerable.registerInterface("IEnumerable");
}
if (typeof IDisposable == "undefined") {
    var IDisposable = function() {
    };

    IDisposable.prototype = {
        dispose: null
    };
    if (IDisposable.registerInterface) IDisposable.registerInterface("IDisposable");
}
if (typeof SP.Guid == "undefined") {
    SP.Guid = function SP_Guid(guidText) {
        guidText = SP.Guid._normalizeGuidString$p(guidText);
        if (SP.Guid.isValid(guidText)) {
            this._m_guidString$p$0 = guidText;
        }
        else {
            this._m_guidString$p$0 = SP.Guid._emptyGuidString$p;
            throw Error.argument('guidText');
        }
    };
    SP.Guid.get_empty = function SP_Guid$get_empty() {
        if (!SP.Guid._s_empty$p) {
            SP.Guid._s_empty$p = new SP.Guid(SP.Guid._emptyGuidString$p);
        }
        return SP.Guid._s_empty$p;
    };
    SP.Guid.newGuid = function SP_Guid$newGuid() {
        var result = '';

        for (var index = 0; index < 32; index++) {
            var value = Math.floor(Math.random() * 16);

            switch (index) {
            case 8:
                result += '-';
                break;
            case 12:
                value = 4;
                result += '-';
                break;
            case 16:
                value = value & 3 | 8;
                result += '-';
                break;
            case 20:
                result += '-';
                break;
            }
            result += SP.Guid._s_hexcode$p[value];
        }
        var uuidOut = new SP.Guid(result);

        return uuidOut;
    };
    SP.Guid.isValid = function SP_Guid$isValid(uuid) {
        var guidRegex = new RegExp('^[{|\\(]?[0-9a-fA-F]{8}[-]?([0-9a-fA-F]{4}[-]?){3}[0-9a-fA-F]{12}[\\)|}]?$');

        return !!guidRegex.exec(uuid);
    };
    SP.Guid._normalizeGuidString$p = function SP_Guid$_normalizeGuidString$p(guidText) {
        var newUuidText;

        newUuidText = guidText.replace(' ', '');
        newUuidText = newUuidText.replace('{', '');
        newUuidText = newUuidText.replace('}', '');
        newUuidText = newUuidText.toLowerCase();
        return newUuidText;
    };
    SP.Guid.prototype = {
        _m_guidString$p$0: null,
        toString: function SP_Guid$toString() {
            if (!arguments.length) {
                return this._m_guidString$p$0;
            }
            var format = arguments[0];

            if (format === 'B') {
                return '{' + this._m_guidString$p$0 + '}';
            }
            else if (format === 'D') {
                return this._m_guidString$p$0;
            }
            else {
                throw Error.argument('format');
            }
        },
        equals: function SP_Guid$equals(uuid) {
            if (!uuid) {
                return false;
            }
            return this._m_guidString$p$0 === uuid.toString();
        },
        ToSerialized: function SP_Guid$ToSerialized() {
            return this.toString();
        }
    };
    if (SP.Guid.registerClass) SP.Guid.registerClass('SP.Guid');
    SP.Guid._s_hexcode$p = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
    SP.Guid._emptyGuidString$p = '00000000-0000-0000-0000-000000000000';
    SP.Guid._s_empty$p = null;
}
if (typeof SP.ScriptUtility == "undefined") {
    SP.ScriptUtility = function SP_ScriptUtility() {
    };
    SP.ScriptUtility.isNullOrEmptyString = function SP_ScriptUtility$isNullOrEmptyString(str) {
        var strNull = null;

        return str === strNull || typeof str === 'undefined' || !str.length;
    };
    SP.ScriptUtility.isNullOrUndefined = function SP_ScriptUtility$isNullOrUndefined(obj) {
        var objNull = null;

        return obj === objNull || typeof obj === 'undefined';
    };
    SP.ScriptUtility.isUndefined = function SP_ScriptUtility$isUndefined(obj) {
        return typeof obj === 'undefined';
    };
    SP.ScriptUtility.truncateToInt = function SP_ScriptUtility$truncateToInt(n) {
        return n > 0 ? Math.floor(n) : Math.ceil(n);
    };
    if (SP.ScriptUtility.registerClass) SP.ScriptUtility.registerClass('SP.ScriptUtility');
    SP.ScriptUtility.emptyString = '';
}
if (typeof SP.PermissionKind == "undefined") {
    SP.PermissionKind = function() {
    };
    SP.PermissionKind.prototype = {
        emptyMask: 0,
        viewListItems: 1,
        addListItems: 2,
        editListItems: 3,
        deleteListItems: 4,
        approveItems: 5,
        openItems: 6,
        viewVersions: 7,
        deleteVersions: 8,
        cancelCheckout: 9,
        managePersonalViews: 10,
        manageLists: 12,
        viewFormPages: 13,
        anonymousSearchAccessList: 14,
        open: 17,
        viewPages: 18,
        addAndCustomizePages: 19,
        applyThemeAndBorder: 20,
        applyStyleSheets: 21,
        viewUsageData: 22,
        createSSCSite: 23,
        manageSubwebs: 24,
        createGroups: 25,
        managePermissions: 26,
        browseDirectories: 27,
        browseUserInfo: 28,
        addDelPrivateWebParts: 29,
        updatePersonalWebParts: 30,
        manageWeb: 31,
        anonymousSearchAccessWebLists: 32,
        useClientIntegration: 37,
        useRemoteAPIs: 38,
        manageAlerts: 39,
        createAlerts: 40,
        editMyUserInfo: 41,
        enumeratePermissions: 63,
        fullMask: 65
    };
    if (SP.PermissionKind.registerEnum) SP.PermissionKind.registerEnum('SP.PermissionKind', false);
}
if (window.Type && window.Type.registerNamespace) {
Type.registerNamespace('SP');} else {
if(typeof(window['SP']) == 'undefined') {
window['SP'] = new Object(); window['SP']. __namespace = true;
}

}

SP.IWebRequestExecutorFactory = function() {
};
if (SP.IWebRequestExecutorFactory.registerInterface) SP.IWebRequestExecutorFactory.registerInterface('SP.IWebRequestExecutorFactory');
SP.ClientRequestStatus = function() {
};
SP.ClientRequestStatus.prototype = {
    active: 0,
    inProgress: 1,
    completedSuccess: 2,
    completedException: 3
};
if (SP.ClientRequestStatus.registerEnum) SP.ClientRequestStatus.registerEnum('SP.ClientRequestStatus', false);
SP.IFromJson = function() {
};
if (SP.IFromJson.registerInterface) SP.IFromJson.registerInterface('SP.IFromJson');
SP.DateTimeKind = function() {
};
SP.DateTimeKind.prototype = {
    unspecified: 0,
    utc: 1,
    local: 2
};
if (SP.DateTimeKind.registerEnum) SP.DateTimeKind.registerEnum('SP.DateTimeKind', false);
SP.ArrayListEnumerator = function SP_ArrayListEnumerator($p0) {
    this.$8_0 = $p0;
    this.$M_0 = -1;
    this.$2I_0 = $p0.length;
    this.current = null;
};
SP.ArrayListEnumerator.prototype = {
    $8_0: null,
    $M_0: 0,
    $2I_0: 0,
    get_current: function SP_ArrayListEnumerator$get_current() {
        return this.$8_0[this.$M_0];
    },
    moveNext: function SP_ArrayListEnumerator$moveNext() {
        if (this.$2I_0 !== this.$8_0.length) {
            throw Error.invalidOperation(SP.ResResources.getString('CollectionModified'));
        }
        this.$M_0++;
        this.current = this.$8_0[this.$M_0];
        return this.$M_0 < this.$8_0.length;
    },
    reset: function SP_ArrayListEnumerator$reset() {
        this.$M_0 = -1;
        this.current = null;
    }
};
SP.BaseCollection = function SP_BaseCollection() {
};
SP.BaseCollection.prototype = {
    getEnumerator: function SP_BaseCollection$getEnumerator() {
        return new SP.BaseCollectionEnumerator(this);
    },
    get_count: function SP_BaseCollection$get_count() {
        return 0;
    },
    itemAtIndex: function SP_BaseCollection$itemAtIndex(index) {
        return null;
    }
};
SP.BaseCollectionEnumerator = function SP_BaseCollectionEnumerator($p0) {
    this.$1a_0 = $p0;
    this.$M_0 = -1;
};
SP.BaseCollectionEnumerator.prototype = {
    $1a_0: null,
    $M_0: 0,
    get_current: function SP_BaseCollectionEnumerator$get_current() {
        return this.$1a_0.itemAtIndex(this.$M_0);
    },
    moveNext: function SP_BaseCollectionEnumerator$moveNext() {
        this.$M_0++;
        return this.$M_0 < this.$1a_0.get_count();
    },
    reset: function SP_BaseCollectionEnumerator$reset() {
        this.$M_0 = -1;
    }
};
SP.Base64EncodedByteArray = function SP_Base64EncodedByteArray() {
    this.fromJson = this.$3g_0;
    this.customFromJson = this.$3h_0;
    if (arguments.length > 0 && !SP.ScriptUtility.isNullOrEmptyString(arguments[0])) {
        var $v_0 = arguments[0];

        this.$3K_0($v_0);
    }
    else {
        this.$8_0 = [];
        this.$F_0 = 0;
    }
};
SP.Base64EncodedByteArray.prototype = {
    $8_0: null,
    $F_0: 0,
    get_length: function SP_Base64EncodedByteArray$get_length() {
        return this.$F_0;
    },
    $3K_0: function SP_Base64EncodedByteArray$$3K_0($p0) {
        $p0 = $p0.replace('\\u002f', '/');
        $p0 = $p0.replace('\\u002F', '/');
        var $v_0 = new RegExp('[^A-Za-z0-9+/=]', 'g');

        $p0 = $p0.replace($v_0, '');
        var $v_1 = Math.ceil(($p0.length + 1) / 4);
        var $v_2 = Math.ceil(($v_1 * 3 + 1) / 2);

        this.$8_0 = new Array($v_2);
        for (var $v_3 = 0; $v_3 < this.$8_0.length; $v_3++) {
            this.$8_0[$v_3] = 0;
        }
        this.$F_0 = 0;
        for (var $v_4 = 0; $v_4 < $p0.length; $v_4 += 4) {
            var $v_5 = $p0.charAt($v_4);
            var $v_6 = $p0.charAt($v_4 + 1);
            var $v_7 = $p0.charAt($v_4 + 2);
            var $v_8 = $p0.charAt($v_4 + 3);
            var $v_9 = SP.Base64EncodedByteArray.$1R.indexOf($v_5);
            var $v_A = SP.Base64EncodedByteArray.$1R.indexOf($v_6);
            var $v_B = SP.Base64EncodedByteArray.$1R.indexOf($v_7);
            var $v_C = SP.Base64EncodedByteArray.$1R.indexOf($v_8);
            var $v_D = $v_9 << 2 | $v_A >> 4;
            var $v_E = ($v_A & 15) << 4 | $v_B >> 2;
            var $v_F = ($v_B & 3) << 6 | $v_C;

            this.$1S_0(this.$F_0, $v_D);
            this.$F_0++;
            if ($v_B !== 64) {
                this.$1S_0(this.$F_0, $v_E);
                this.$F_0++;
            }
            if ($v_C !== 64) {
                this.$1S_0(this.$F_0, $v_F);
                this.$F_0++;
            }
        }
    },
    toBase64String: function SP_Base64EncodedByteArray$toBase64String() {
        var $v_0 = new Sys.StringBuilder();
        var $v_1 = 0;
        var $v_2 = this.$F_0 % 3;
        var $v_3 = this.$F_0 - $v_2;
        var $v_4, $v_5, $v_6;
        var $v_7, $v_8, $v_9, $v_A;

        for ($v_1 = 0; $v_1 < $v_3; $v_1 += 3) {
            $v_4 = this.getByteAt($v_1);
            $v_5 = this.getByteAt($v_1 + 1);
            $v_6 = this.getByteAt($v_1 + 2);
            $v_7 = SP.Base64EncodedByteArray.$N[($v_4 & 252) >> 2];
            $v_8 = SP.Base64EncodedByteArray.$N[($v_4 & 3) << 4 | ($v_5 & 240) >> 4];
            $v_9 = SP.Base64EncodedByteArray.$N[($v_5 & 15) << 2 | ($v_6 & 192) >> 6];
            $v_A = SP.Base64EncodedByteArray.$N[$v_6 & 63];
            $v_0.append($v_7);
            $v_0.append($v_8);
            $v_0.append($v_9);
            $v_0.append($v_A);
        }
        switch ($v_2) {
        case 2:
            $v_4 = this.getByteAt($v_1);
            $v_5 = this.getByteAt($v_1 + 1);
            $v_7 = SP.Base64EncodedByteArray.$N[($v_4 & 252) >> 2];
            $v_8 = SP.Base64EncodedByteArray.$N[($v_4 & 3) << 4 | ($v_5 & 240) >> 4];
            $v_9 = SP.Base64EncodedByteArray.$N[($v_5 & 15) << 2];
            $v_A = SP.Base64EncodedByteArray.$N[64];
            $v_0.append($v_7);
            $v_0.append($v_8);
            $v_0.append($v_9);
            $v_0.append($v_A);
            break;
        case 1:
            $v_4 = this.getByteAt($v_1);
            $v_7 = SP.Base64EncodedByteArray.$N[($v_4 & 252) >> 2];
            $v_8 = SP.Base64EncodedByteArray.$N[($v_4 & 3) << 4];
            $v_9 = SP.Base64EncodedByteArray.$N[64];
            $v_A = SP.Base64EncodedByteArray.$N[64];
            $v_0.append($v_7);
            $v_0.append($v_8);
            $v_0.append($v_9);
            $v_0.append($v_A);
            break;
        }
        return $v_0.toString();
    },
    append: function SP_Base64EncodedByteArray$append(b) {
        if (!(this.$F_0 % 2)) {
            this.$8_0[this.$F_0 / 2 + 1] = 0;
        }
        this.$1S_0(this.$F_0, b);
        this.$F_0++;
    },
    getByteAt: function SP_Base64EncodedByteArray$getByteAt(index) {
        if (index >= this.$F_0) {
            throw Error.argumentOutOfRange('index');
        }
        var $v_0 = Math.floor(index / 2);
        var $v_1 = this.$8_0[$v_0];
        var $v_2 = index % 2;

        if (!$v_2) {
            return $v_1 & 255;
        }
        else {
            return ($v_1 & 65280) >> 8;
        }
    },
    setByteAt: function SP_Base64EncodedByteArray$setByteAt(index, b) {
        if (index >= this.$F_0) {
            throw Error.argumentOutOfRange('index');
        }
        this.$1S_0(index, b);
    },
    $1S_0: function SP_Base64EncodedByteArray$$1S_0($p0, $p1) {
        var $v_0 = Math.floor($p0 / 2);
        var $v_1 = this.$8_0[$v_0];
        var $v_2 = $p0 % 2;

        if (!$v_2) {
            $v_1 = ($v_1 & 65280) + ($p1 & 255);
        }
        else {
            $v_1 = ($p1 & 255) * 256 + ($v_1 & 255);
        }
        this.$8_0[$v_0] = $v_1;
    },
    $3g_0: function SP_Base64EncodedByteArray$$3g_0($p0) {
        if (SP.ScriptUtility.isNullOrUndefined($p0)) {
            return;
        }
        if (SP.Base64EncodedByteArray.isInstanceOfType($p0)) {
            var $v_0 = $p0;

            this.$F_0 = $v_0.$F_0;
            this.$8_0 = $v_0.$8_0;
        }
    },
    $3h_0: function SP_Base64EncodedByteArray$$3h_0($p0) {
        return false;
    }
};
SP.ClientObjectPropertyConditionalScope = function SP_ClientObjectPropertyConditionalScope(clientObject, propertyName, comparisonOperator, valueToCompare, allowAllActions) {
    SP.ClientObjectPropertyConditionalScope.initializeBase(this, [!clientObject ? null : clientObject.$0_0, allowAllActions]);
    if (!clientObject) {
        throw Error.argumentNull('clientObject');
    }
    if (comparisonOperator !== 'GT' && comparisonOperator !== 'LT' && comparisonOperator !== 'EQ' && comparisonOperator !== 'NE' && comparisonOperator !== 'GE' && comparisonOperator !== 'LE') {
        throw Error.argumentOutOfRange('comparisonOperator');
    }
    if (SP.ScriptUtility.isNullOrEmptyString(propertyName)) {
        throw Error.argumentNull('propertyName');
    }
    this.$1D_1 = clientObject;
    this.$S_1 = propertyName;
    this.$2A_1 = comparisonOperator;
    this.$2T_1 = valueToCompare;
};
SP.ClientObjectPropertyConditionalScope.prototype = {
    $1D_1: null,
    $S_1: null,
    $2A_1: null,
    $2T_1: null,
    $3B_0: function SP_ClientObjectPropertyConditionalScope$$3B_0($p0) {
        if (!this.$1D_1) {
            throw SP.ConditionalScopeBase.$9();
        }
        var $v_0 = new Sys.StringBuilder();
        var $v_1 = SP.XmlWriter.create($v_0);

        $v_1.writeStartElement('Test');
        $v_1.writeStartElement('Body');
        $v_1.writeStartElement(this.$2A_1);
        $v_1.writeStartElement('ExpressionProperty');
        $v_1.writeAttributeString('Name', this.$S_1);
        $v_1.writeStartElement('ExpressionConstant');
        SP.DataConvert.writeValueToXmlElement($v_1, this.$1D_1, $p0);
        $v_1.writeEndElement();
        $v_1.writeEndElement();
        $v_1.writeStartElement('ExpressionConstant');
        SP.DataConvert.writeValueToXmlElement($v_1, this.$2T_1, $p0);
        $v_1.writeEndElement();
        $v_1.writeEndElement();
        $v_1.writeEndElement();
        $v_1.writeEndElement();
        $v_1.close();
        this.$1D_1 = null;
        return $v_0;
    }
};
SP.ClientDictionaryResultHandler = function SP_ClientDictionaryResultHandler(dict) {
    this.fromJson = this.$3g_0;
    this.customFromJson = this.$3h_0;
    this.$2B_0 = dict;
};
SP.ClientDictionaryResultHandler.prototype = {
    $2B_0: null,
    $3g_0: function SP_ClientDictionaryResultHandler$$3g_0($p0) {
        if (SP.ScriptUtility.isNullOrUndefined($p0)) {
            return;
        }
        var $v_0 = $p0;
        var $v_1 = {};
        var $$dict_3 = $v_0;

        for (var $$key_4 in $$dict_3) {
            var $v_2 = {
                key: $$key_4,
                value: $$dict_3[$$key_4]
            };

            if (typeof $v_2.value !== 'function' && $v_2.key !== '_ObjectType_') {
                $v_1[$v_2.key] = $v_2.value;
            }
        }
        SP.DataConvert.fixupTypes(null, $v_1);
        this.$2B_0.setValue($v_1);
    },
    $3h_0: function SP_ClientDictionaryResultHandler$$3h_0($p0) {
        return false;
    }
};
SP.ClientActionInstantiateObjectPathResult = function SP_ClientActionInstantiateObjectPathResult($p0) {
    this.fromJson = this.$3g_0;
    this.customFromJson = this.$3h_0;
    this.$Z_0 = $p0;
};
SP.ClientActionInstantiateObjectPathResult.prototype = {
    $Z_0: null,
    $3g_0: function SP_ClientActionInstantiateObjectPathResult$$3g_0($p0) {
        if (!SP.ScriptUtility.isNullOrUndefined($p0) && typeof $p0 === 'object') {
            var $v_0 = false;

            if (typeof $p0.IsNull === 'boolean') {
                $v_0 = $p0.IsNull;
            }
            this.$Z_0.$1N_0 = $v_0;
        }
    },
    $3h_0: function SP_ClientActionInstantiateObjectPathResult$$3h_0($p0) {
        return false;
    }
};
SP.ClientObjectCollectionResult = function SP_ClientObjectCollectionResult($p0, $p1) {
    this.fromJson = this.$3g_0;
    this.customFromJson = this.$3h_0;
    this.$0_0 = $p0;
    this.$1k_0 = $p1;
};
SP.ClientObjectCollectionResult.prototype = {
    $1k_0: null,
    $0_0: null,
    $3g_0: function SP_ClientObjectCollectionResult$$3g_0($p0) {
        if (!SP.ScriptUtility.isNullOrUndefined($p0) && typeof $p0 === 'object') {
            if (Array.isInstanceOfType($p0)) {
                SP.DataConvert.populateArray(this.$0_0, this.$1k_0, $p0);
            }
            else {
                var $v_0 = $p0._Child_Items_;

                if ($v_0) {
                    SP.DataConvert.populateArray(this.$0_0, this.$1k_0, $v_0);
                }
            }
        }
    },
    $3h_0: function SP_ClientObjectCollectionResult$$3h_0($p0) {
        return false;
    }
};
SP.ClientUtility = function SP_ClientUtility() {
};
SP.ClientUtility.urlPathEncodeForXmlHttpRequest = function SP_ClientUtility$urlPathEncodeForXmlHttpRequest(url) {
    return SP.ClientHttpUtility.$34(url, true, true);
};
SP.ClientUtility.getOrCreateObjectPathForConstructor = function SP_ClientUtility$getOrCreateObjectPathForConstructor(context, typeId, args) {
    if (!args || args.length < 1) {
        throw Error.argumentNull('args');
    }
    var $v_0 = 0;

    if (args[$v_0] === context) {
        $v_0++;
    }
    if (SP.ObjectPath.isInstanceOfType(args[$v_0])) {
        return args[$v_0];
    }
    var $v_1 = [];

    for (var $v_2 = $v_0; $v_2 < args.length; $v_2++) {
        $v_1.push(args[$v_2]);
    }
    return new SP.ObjectPathConstructor(context, typeId, $v_1);
};
SP.ClientUtility.$3Q = function SP_ClientUtility$$3Q($p0) {
    var $v_0 = $p0.toLowerCase();
    var $v_1 = 0;

    if ($v_0.startsWith('http://')) {
        $v_1 = $p0.indexOf('/', 8);
    }
    else if ($v_0.startsWith('https://')) {
        $v_1 = $p0.indexOf('/', 9);
    }
    if ($v_1 < 0) {
        return '/';
    }
    return $p0.substr($v_1);
};
SP.ClientXElement = function SP_ClientXElement() {
    this.fromJson = this.$3g_0;
    this.customFromJson = this.$3h_0;
};
SP.ClientXElement.prototype = {
    $g_0: null,
    $3g_0: function SP_ClientXElement$$3g_0($p0) {
        this.$g_0 = $p0;
    },
    $3h_0: function SP_ClientXElement$$3h_0($p0) {
        return false;
    },
    get_element: function SP_ClientXElement$get_element() {
        return this.$g_0;
    },
    set_element: function SP_ClientXElement$set_element(value) {
        this.$g_0 = value;
        return value;
    }
};
SP.ClientXDocument = function SP_ClientXDocument() {
    this.fromJson = this.$3g_0;
    this.customFromJson = this.$3h_0;
};
SP.ClientXDocument.prototype = {
    $g_0: null,
    $3g_0: function SP_ClientXDocument$$3g_0($p0) {
        this.$g_0 = $p0;
    },
    $3h_0: function SP_ClientXDocument$$3h_0($p0) {
        return false;
    },
    get_root: function SP_ClientXDocument$get_root() {
        return this.$g_0;
    },
    set_root: function SP_ClientXDocument$set_root(value) {
        this.$g_0 = value;
        return value;
    }
};
SP.DataConvert = function SP_DataConvert() {
};
SP.DataConvert.writePropertiesToXml = function SP_DataConvert$writePropertiesToXml(writer, obj, propNames, serializationContext) {
    for (var $v_0 = 0; $v_0 < propNames.length; $v_0++) {
        var $v_1 = propNames[$v_0];

        writer.writeStartElement('Property');
        writer.writeAttributeString('Name', $v_1);
        var $v_2 = SP.DataConvert.invokeGetProperty(obj, $v_1);

        SP.DataConvert.writeValueToXmlElement(writer, $v_2, serializationContext);
        writer.writeEndElement();
    }
};
SP.DataConvert.populateDictionaryFromObject = function SP_DataConvert$populateDictionaryFromObject(dict, parentNode) {
    if (SP.ScriptUtility.isNullOrUndefined(parentNode)) {
        return;
    }
    var $v_0 = parentNode;
    var $$dict_3 = $v_0;

    for (var $$key_4 in $$dict_3) {
        var $v_1 = {
            key: $$key_4,
            value: $$dict_3[$$key_4]
        };

        dict[$v_1.key] = $v_1.value;
    }
};
SP.DataConvert.fixupTypes = function SP_DataConvert$fixupTypes(context, dict) {
    var $$dict_2 = dict;

    for (var $$key_3 in $$dict_2) {
        var $v_0 = {
            key: $$key_3,
            value: $$dict_2[$$key_3]
        };

        if (!SP.ScriptUtility.isNullOrUndefined($v_0.value) && typeof $v_0.value === 'object') {
            var $v_1 = SP.DataConvert.fixupType(context, $v_0.value);

            dict[$v_0.key] = $v_1;
        }
    }
};
SP.DataConvert.populateArray = function SP_DataConvert$populateArray(context, dest, jsonArrayFromServer) {
    SP.DataConvert.$2U(context, dest, jsonArrayFromServer, null);
};
SP.DataConvert.$2U = function SP_DataConvert$$2U($p0, $p1, $p2, $p3) {
    if (SP.ScriptUtility.isNullOrUndefined($p2)) {
        return;
    }
    for (var $v_0 = 0; $v_0 < $p2.length; $v_0++) {
        var $v_1 = $p2[$v_0];

        if (SP.ScriptUtility.isNullOrUndefined($v_1)) {
            Array.add($p1, $v_1);
            continue;
        }
        var $v_2 = SP.DataConvert.$2d($p0, $v_1, $p3);

        Array.add($p1, $v_2);
    }
};
SP.DataConvert.fixupType = function SP_DataConvert$fixupType(context, obj) {
    return SP.DataConvert.$2d(context, obj, null);
};
SP.DataConvert.$3T = function SP_DataConvert$$3T($p0) {
    var $v_0 = SP.DataConvert.$1z[$p0];

    if ($v_0 === 2) {
        return true;
    }
    if ($v_0 === 1) {
        return false;
    }
    var $v_1 = $p0.split('.');
    var $v_2 = window;

    for (var $v_3 = 0; $v_3 < $v_1.length; $v_3++) {
        $v_2 = $v_2[$v_1[$v_3]];
        if (!$v_2) {
            SP.DataConvert.$1z[$p0] = 1;
            return false;
        }
    }
    SP.DataConvert.$1z[$p0] = 2;
    return true;
};
SP.DataConvert.$2d = function SP_DataConvert$$2d($p0, $p1, $p2) {
    var $v_0 = $p1;

    if (!SP.ScriptUtility.isNullOrUndefined($p1) && typeof $p1 === 'object') {
        var $v_1 = $p1._ObjectType_;

        if (!SP.ScriptUtility.isNullOrUndefined($v_1)) {
            var $v_2;

            if (SP.DataConvert.$3T($v_1)) {
                $v_2 = Type.parse($v_1);
            }
            else {
                $v_2 = $p2;
            }
            if ($v_2) {
                $v_0 = new $v_2($p0);
                if (SP.IFromJson.isInstanceOfType($v_0)) {
                    var $v_3 = $v_0;

                    if (!$v_3.customFromJson($p1)) {
                        $v_3.fromJson($p1);
                    }
                }
            }
        }
        else if (Array.isInstanceOfType($p1)) {
            var $v_4 = $p1;

            for (var $v_5 = 0; $v_5 < $v_4.length; $v_5++) {
                $v_4[$v_5] = SP.DataConvert.fixupType($p0, $v_4[$v_5]);
            }
        }
    }
    return $v_0;
};
SP.DataConvert.writeDictionaryToXml = function SP_DataConvert$writeDictionaryToXml(writer, dict, topLevelElementTagName, keys, serializationContext) {
    if (!SP.ScriptUtility.isNullOrEmptyString(topLevelElementTagName)) {
        writer.writeStartElement(topLevelElementTagName);
    }
    var $$dict_5 = dict;

    for (var $$key_6 in $$dict_5) {
        var $v_0 = {
            key: $$key_6,
            value: $$dict_5[$$key_6]
        };

        if (!keys || Array.contains(keys, $v_0.key)) {
            writer.writeStartElement('Property');
            writer.writeAttributeString('Name', $v_0.key);
            var $v_1 = $v_0.value;

            SP.DataConvert.writeValueToXmlElement(writer, $v_1, serializationContext);
            writer.writeEndElement();
        }
    }
    if (!SP.ScriptUtility.isNullOrEmptyString(topLevelElementTagName)) {
        writer.writeEndElement();
    }
};
SP.DataConvert.writeValueToXmlElement = function SP_DataConvert$writeValueToXmlElement(writer, objValue, serializationContext) {
    if (SP.ScriptUtility.isNullOrUndefined(objValue)) {
        writer.writeAttributeString('Type', 'Null');
    }
    else if (SP.ClientObject.isInstanceOfType(objValue)) {
        var $v_0 = objValue;

        if (!$v_0.get_path()) {
            throw Error.create(SP.ResResources.getString('NoObjectPathAssociatedWithObject'));
        }
        writer.writeAttributeString('ObjectPathId', ($v_0.get_path()).$4_0.toString());
        serializationContext.addClientObject($v_0);
    }
    else if (SP.ClientValueObject.isInstanceOfType(objValue)) {
        var $v_1 = objValue;

        writer.writeAttributeString('TypeId', $v_1.get_typeId());
        if (!$v_1.customWriteToXml(writer, serializationContext)) {
            $v_1.writeToXml(writer, serializationContext);
        }
    }
    else {
        if (Object.getType(objValue) === Array) {
            writer.writeAttributeString('Type', 'Array');
            var $v_2 = objValue;

            for (var $v_3 = 0; $v_3 < $v_2.length; $v_3++) {
                var $v_4 = $v_2[$v_3];

                writer.writeStartElement('Object');
                SP.DataConvert.writeValueToXmlElement(writer, $v_4, serializationContext);
                writer.writeEndElement();
            }
        }
        else if (Object.getType(objValue) === Date) {
            writer.writeAttributeString('Type', 'DateTime');
            var $v_5 = objValue;
            var $v_6 = SP.DataConvert.getDateTimeKind($v_5);
            var $v_7;

            if (!$v_6) {
                var $v_8 = $v_5.getMonth() + 1;

                $v_7 = SP.DataConvert.$C(($v_5.getFullYear()).toString(), 4) + '-' + SP.DataConvert.$C($v_8.toString(), 2) + '-' + SP.DataConvert.$C(($v_5.getDate()).toString(), 2) + 'T' + SP.DataConvert.$C(($v_5.getHours()).toString(), 2) + ':' + SP.DataConvert.$C(($v_5.getMinutes()).toString(), 2) + ':' + SP.DataConvert.$C(($v_5.getSeconds()).toString(), 2) + '.' + SP.DataConvert.$C(($v_5.getMilliseconds()).toString(), 3);
            }
            else if ($v_6 === 2) {
                var $v_9 = $v_5.getMonth() + 1;

                $v_7 = SP.DataConvert.$C(($v_5.getFullYear()).toString(), 4) + '-' + SP.DataConvert.$C($v_9.toString(), 2) + '-' + SP.DataConvert.$C(($v_5.getDate()).toString(), 2) + 'T' + SP.DataConvert.$C(($v_5.getHours()).toString(), 2) + ':' + SP.DataConvert.$C(($v_5.getMinutes()).toString(), 2) + ':' + SP.DataConvert.$C(($v_5.getSeconds()).toString(), 2) + '.' + SP.DataConvert.$C(($v_5.getMilliseconds()).toString(), 3);
                var $v_A = $v_5.getTimezoneOffset() / 60;
                var $v_B = $v_A <= 0 ? '+' : '-';

                $v_7 = $v_7 + $v_B + SP.DataConvert.$C((Math.floor(Math.abs($v_A))).toString(), 2) + ':' + SP.DataConvert.$C((Math.abs($v_5.getTimezoneOffset() % 60)).toString(), 2);
            }
            else {
                var $v_C = $v_5.getUTCMonth() + 1;

                $v_7 = SP.DataConvert.$C(($v_5.getUTCFullYear()).toString(), 4) + '-' + SP.DataConvert.$C($v_C.toString(), 2) + '-' + SP.DataConvert.$C(($v_5.getUTCDate()).toString(), 2) + 'T' + SP.DataConvert.$C(($v_5.getUTCHours()).toString(), 2) + ':' + SP.DataConvert.$C(($v_5.getUTCMinutes()).toString(), 2) + ':' + SP.DataConvert.$C(($v_5.getUTCSeconds()).toString(), 2) + '.' + SP.DataConvert.$C(($v_5.getUTCMilliseconds()).toString(), 3) + 'Z';
            }
            writer.writeString($v_7);
        }
        else if (Object.getType(objValue) === String) {
            writer.writeAttributeString('Type', 'String');
            writer.writeString(objValue.toString());
        }
        else if (Object.getType(objValue) === SP.Guid) {
            writer.writeAttributeString('Type', 'Guid');
            writer.writeString(objValue.toString('B'));
        }
        else if (Object.getType(objValue) === SP.Base64EncodedByteArray) {
            writer.writeAttributeString('Type', 'Base64Binary');
            writer.writeString(objValue.toBase64String());
        }
        else if (typeof objValue === 'number' || typeof objValue === 'object' && Number.isInstanceOfType(objValue)) {
            writer.writeAttributeString('Type', 'Number');
            writer.writeString(objValue.toString());
        }
        else if (typeof objValue === 'object') {
            writer.writeAttributeString('Type', 'Dictionary');
            var $v_D = objValue;
            var $$dict_H = $v_D;

            for (var $$key_I in $$dict_H) {
                var $v_E = {
                    key: $$key_I,
                    value: $$dict_H[$$key_I]
                };
                var $v_F = $v_E.value;

                if (SP.DataConvert.$3E($v_F)) {
                    writer.writeStartElement('Property');
                    writer.writeAttributeString('Name', $v_E.key);
                    SP.DataConvert.writeValueToXmlElement(writer, $v_E.value, serializationContext);
                    writer.writeEndElement();
                }
            }
        }
        else if (typeof objValue === 'boolean') {
            writer.writeAttributeString('Type', 'Boolean');
            writer.writeString(objValue ? 'true' : 'false');
        }
        else {
            writer.writeAttributeString('Type', 'Unspecified');
            writer.writeString(objValue.toString());
        }
    }
};
SP.DataConvert.$3E = function SP_DataConvert$$3E($p0) {
    if (SP.ScriptUtility.isNullOrUndefined($p0)) {
        return true;
    }
    if (SP.ClientObject.isInstanceOfType($p0) || SP.ClientValueObject.isInstanceOfType($p0)) {
        return true;
    }
    var $v_0 = Object.getType($p0);

    if ($v_0 === Array || $v_0 === Date || $v_0 === SP.Guid || $v_0 === SP.Base64EncodedByteArray) {
        return true;
    }
    var $v_1 = typeof $p0;

    if ($v_1 === 'number' || $v_1 === 'string' || $v_1 === 'boolean' || $v_1 === 'object' && Number.isInstanceOfType($p0)) {
        return true;
    }
    return false;
};
SP.DataConvert.$C = function SP_DataConvert$$C($p0, $p1) {
    if ($p0.length >= $p1) {
        return $p0;
    }
    if ($p1 - $p0.length >= SP.DataConvert.$2X.length) {
        throw Error.argumentOutOfRange('len');
    }
    return SP.DataConvert.$2X[$p1 - $p0.length] + $p0;
};
SP.DataConvert.$1x = function SP_DataConvert$$1x($p0) {
    var $v_0;
    var $v_1 = 0;

    for (var $v_2 = 0; $v_2 < $p0.length && $p0.charCodeAt($v_2) >= 65 && $p0.charCodeAt($v_2) <= 90; $v_2++) {
        $v_1++;
    }
    if (!$v_1) {
        $v_0 = $p0;
    }
    else if ($v_1 === $p0.length) {
        $v_0 = $p0.toLowerCase();
    }
    else {
        $v_0 = ($p0.substr(0, $v_1)).toLowerCase() + $p0.substr($v_1);
    }
    return $v_0;
};
SP.DataConvert.$2k = function SP_DataConvert$$2k($p0) {
    var $v_0 = ($p0.substr(0, 1)).toLowerCase() + $p0.substr(1);

    return $v_0;
};
SP.DataConvert.invokeSetProperty = function SP_DataConvert$invokeSetProperty(obj, propName, propValue) {
    var $v_0 = SP.DataConvert.$1x(propName);

    if (obj['set_' + $v_0]) {
        obj['set_' + $v_0](propValue);
    }
    else {
        $v_0 = SP.DataConvert.$2k(propName);
        obj['set_' + $v_0](propValue);
    }
};
SP.DataConvert.invokeGetProperty = function SP_DataConvert$invokeGetProperty(obj, propName) {
    var $v_0 = SP.DataConvert.$1x(propName);
    var $v_1;

    if (obj['get_' + $v_0]) {
        $v_1 = obj['get_' + $v_0]();
    }
    else {
        $v_0 = SP.DataConvert.$2k(propName);
        $v_1 = obj['get_' + $v_0]();
    }
    return $v_1;
};
SP.DataConvert.specifyDateTimeKind = function SP_DataConvert$specifyDateTimeKind(datetime, kind) {
    SP.DataConvertUtil.specifyDateTimeKind(datetime, kind);
};
SP.DataConvert.getDateTimeKind = function SP_DataConvert$getDateTimeKind(datetime) {
    return SP.DataConvertUtil.getDateTimeKind(datetime);
};
SP.DataConvert.createUnspecifiedDateTime = function SP_DataConvert$createUnspecifiedDateTime(year, month, day, hour, minute, second, milliseconds) {
    return SP.DataConvertUtil.createUnspecifiedDateTime(year, month, day, hour, minute, second, milliseconds);
};
SP.DataConvert.createUtcDateTime = function SP_DataConvert$createUtcDateTime(milliseconds) {
    return SP.DataConvertUtil.createUtcDateTime(milliseconds);
};
SP.DataConvert.createLocalDateTime = function SP_DataConvert$createLocalDateTime(milliseconds) {
    return SP.DataConvertUtil.createLocalDateTime(milliseconds);
};
SP.PageRequestFailedEventArgs = function SP_PageRequestFailedEventArgs($p0, $p1) {
    SP.PageRequestFailedEventArgs.initializeBase(this);
    this.$i_1 = $p0;
    this.$h_1 = $p1;
};
SP.PageRequestFailedEventArgs.prototype = {
    $h_1: null,
    $i_1: null,
    get_executor: function SP_PageRequestFailedEventArgs$get_executor() {
        return this.$i_1;
    },
    get_errorMessage: function SP_PageRequestFailedEventArgs$get_errorMessage() {
        if (SP.ScriptUtility.isNullOrEmptyString(this.$h_1)) {
            return 'Cannot complete the request.';
        }
        return this.$h_1;
    },
    get_isErrorPage: function SP_PageRequestFailedEventArgs$get_isErrorPage() {
        if (this.$i_1.get_statusCode() !== 200) {
            return true;
        }
        var $v_0 = this.$i_1.getResponseHeader('SharePointError');

        if (!SP.ScriptUtility.isNullOrEmptyString($v_0)) {
            return true;
        }
        return false;
    }
};
SP.PageRequestSucceededEventArgs = function SP_PageRequestSucceededEventArgs($p0) {
    SP.PageRequestSucceededEventArgs.initializeBase(this);
    this.$i_1 = $p0;
};
SP.PageRequestSucceededEventArgs.prototype = {
    $i_1: null,
    get_executor: function SP_PageRequestSucceededEventArgs$get_executor() {
        return this.$i_1;
    }
};
SP.PageRequest = function SP_PageRequest() {
    this.$$d_$3X_0 = Function.createDelegate(this, this.$3X_0);
};
SP.PageRequest.doPost = function SP_PageRequest$doPost(url, body, expectedContentType, succeededHandler, failedHandler) {
    var $v_0 = new SP.PageRequest();

    if (succeededHandler) {
        $v_0.add_succeeded(succeededHandler);
    }
    if (failedHandler) {
        $v_0.add_failed(failedHandler);
    }
    $v_0.set_url(url);
    $v_0.set_expectedContentType(expectedContentType);
    $v_0.post(body);
};
SP.PageRequest.doGet = function SP_PageRequest$doGet(url, expectedContentType, succeededHandler, failedHandler) {
    var $v_0 = new SP.PageRequest();

    if (succeededHandler) {
        $v_0.add_succeeded(succeededHandler);
    }
    if (failedHandler) {
        $v_0.add_failed(failedHandler);
    }
    $v_0.set_url(url);
    $v_0.set_expectedContentType(expectedContentType);
    $v_0.get();
};
SP.PageRequest.prototype = {
    $7_0: null,
    get_request: function SP_PageRequest$get_request() {
        if (!this.$7_0) {
            this.$7_0 = new Sys.Net.WebRequest();
        }
        return this.$7_0;
    },
    get_url: function SP_PageRequest$get_url() {
        return (this.get_request()).get_url();
    },
    set_url: function SP_PageRequest$set_url(value) {
        (this.get_request()).set_url(value);
        return value;
    },
    $1d_0: null,
    get_expectedContentType: function SP_PageRequest$get_expectedContentType() {
        if (SP.ScriptUtility.isNullOrEmptyString(this.$1d_0)) {
            return 'html';
        }
        return this.$1d_0;
    },
    set_expectedContentType: function SP_PageRequest$set_expectedContentType(value) {
        this.$1d_0 = value;
        return value;
    },
    post: function SP_PageRequest$post(body) {
        (this.get_request()).set_httpVerb('POST');
        (this.get_request()).set_body(body);
        SP.ClientRequest.$2z(this.get_request());
        (this.get_request()).add_completed(this.$$d_$3X_0);
        (this.get_request()).invoke();
    },
    get: function SP_PageRequest$get() {
        (this.get_request()).set_httpVerb('GET');
        SP.ClientRequest.$2z(this.get_request());
        (this.get_request()).add_completed(this.$$d_$3X_0);
        (this.get_request()).invoke();
    },
    $E_0: null,
    get_$G_0: function SP_PageRequest$get_$G_0() {
        if (!this.$E_0) {
            this.$E_0 = new Sys.EventHandlerList();
        }
        return this.$E_0;
    },
    add_succeeded: function SP_PageRequest$add_succeeded(value) {
        (this.get_$G_0()).addHandler('succeeded', value);
    },
    remove_succeeded: function SP_PageRequest$remove_succeeded(value) {
        (this.get_$G_0()).removeHandler('succeeded', value);
    },
    add_failed: function SP_PageRequest$add_failed(value) {
        (this.get_$G_0()).addHandler('failed', value);
    },
    remove_failed: function SP_PageRequest$remove_failed(value) {
        (this.get_$G_0()).removeHandler('failed', value);
    },
    $3X_0: function SP_PageRequest$$3X_0($p0) {
        var $v_0 = null;
        var $v_1 = null;

        if (this.$E_0) {
            $v_1 = this.$E_0.getHandler('succeeded');
            $v_0 = this.$E_0.getHandler('failed');
        }
        var $v_2 = SP.ClientRequest.$2j($p0, this.get_expectedContentType());

        if ($v_2) {
            if ($v_0) {
                $v_0(this, new SP.PageRequestFailedEventArgs($p0, $v_2));
            }
        }
        else {
            if ($v_1) {
                $v_1(this, new SP.PageRequestSucceededEventArgs($p0));
            }
        }
        this.$E_0 = null;
    }
};
SP.ResResources = function SP_ResResources() {
};
SP.ResResources.getString = function SP_ResResources$getString(resourceId) {
    var args = [];

    for (var $$pai_3 = 1; $$pai_3 < arguments.length; ++$$pai_3) {
        args[$$pai_3 - 1] = arguments[$$pai_3];
    }
    var $v_0 = '';

    if (window.SP && window.SP.Res) {
        resourceId = SP.DataConvert.$1x(resourceId);
        $v_0 = window.SP.Res[resourceId];
    }
    if (SP.ScriptUtility.isNullOrEmptyString($v_0) && window.SP && window.SP.RuntimeRes) {
        resourceId = SP.DataConvert.$1x(resourceId);
        $v_0 = window.SP.RuntimeRes[resourceId];
    }
    if (SP.ScriptUtility.isNullOrEmptyString($v_0)) {
        $v_0 = resourceId;
    }
    return String.format.apply(null, [$v_0].concat(args));
};
SP.XmlWriter = function SP_XmlWriter($p0) {
    this.$s_0 = [];
    this.$1_0 = $p0;
    this.$X_0 = true;
};
SP.XmlWriter.create = function SP_XmlWriter$create(sb) {
    return new SP.XmlWriter(sb);
};
SP.XmlWriter.prototype = {
    $1_0: null,
    $13_0: null,
    $X_0: false,
    $n_0: false,
    writeStartElement: function SP_XmlWriter$writeStartElement(tagName) {
        this.$21_0();
        this.$1T_0();
        Array.add(this.$s_0, tagName);
        this.$13_0 = tagName;
        this.$1_0.append('<');
        this.$1_0.append(tagName);
        this.$X_0 = false;
        this.$n_0 = false;
    },
    writeElementString: function SP_XmlWriter$writeElementString(tagName, value) {
        this.$21_0();
        this.$1T_0();
        this.writeStartElement(tagName);
        this.writeString(value);
        this.writeEndElement();
    },
    writeEndElement: function SP_XmlWriter$writeEndElement() {
        this.$21_0();
        if (SP.ScriptUtility.isNullOrEmptyString(this.$13_0)) {
            throw Error.invalidOperation();
        }
        if (!this.$X_0) {
            this.$1_0.append(' />');
            this.$X_0 = true;
        }
        else {
            this.$1_0.append('</');
            this.$1_0.append(this.$13_0);
            this.$1_0.append('>');
        }
        Array.removeAt(this.$s_0, this.$s_0.length - 1);
        if (this.$s_0.length > 0) {
            this.$13_0 = this.$s_0[this.$s_0.length - 1];
        }
        else {
            this.$13_0 = null;
        }
    },
    $1T_0: function SP_XmlWriter$$1T_0() {
        if (!this.$X_0) {
            this.$1_0.append('>');
            this.$X_0 = true;
        }
    },
    writeAttributeString: function SP_XmlWriter$writeAttributeString(localName, value) {
        if (this.$X_0) {
            throw Error.invalidOperation();
        }
        this.$1_0.append(' ');
        this.$1_0.append(localName);
        this.$1_0.append('=\"');
        this.$23_0(value, true);
        this.$1_0.append('\"');
    },
    writeStartAttribute: function SP_XmlWriter$writeStartAttribute(localName) {
        if (!this.$X_0) {
            throw Error.invalidOperation();
        }
        this.$n_0 = true;
        this.$1_0.append(' ');
        this.$1_0.append(localName);
        this.$1_0.append('=\"');
    },
    writeEndAttribute: function SP_XmlWriter$writeEndAttribute() {
        if (!this.$n_0) {
            throw Error.invalidOperation();
        }
        this.$1_0.append('\"');
        this.$n_0 = false;
    },
    writeString: function SP_XmlWriter$writeString(value) {
        if (this.$n_0) {
            this.$23_0(value, true);
            this.$1_0.append(value);
        }
        else {
            this.$1T_0();
            this.$23_0(value, false);
        }
    },
    writeRaw: function SP_XmlWriter$writeRaw(xml) {
        this.$21_0();
        this.$1T_0();
        this.$1_0.append(xml);
    },
    $21_0: function SP_XmlWriter$$21_0() {
        if (this.$n_0) {
            throw Error.invalidOperation();
        }
    },
    $23_0: function SP_XmlWriter$$23_0($p0, $p1) {
        if (SP.ScriptUtility.isNullOrEmptyString($p0)) {
            return;
        }
        for (var $v_0 = 0; $v_0 < $p0.length; $v_0++) {
            var $v_1 = $p0.charCodeAt($v_0);

            if ($v_1 === 62) {
                this.$1_0.append('&gt;');
            }
            else if ($v_1 === 60) {
                this.$1_0.append('&lt;');
            }
            else if ($v_1 === 38) {
                this.$1_0.append('&amp;');
            }
            else if ($v_1 === 34 && $p1) {
                this.$1_0.append('&quot;');
            }
            else if ($v_1 === 39 && $p1) {
                this.$1_0.append('&apos;');
            }
            else if ($v_1 === 9 && $p1) {
                this.$1_0.append('&#09;');
            }
            else if ($v_1 === 10) {
                this.$1_0.append('&#10;');
            }
            else if ($v_1 === 13) {
                this.$1_0.append('&#13;');
            }
            else {
                this.$1_0.append(($p0.charAt($v_0)).toString());
            }
        }
    },
    close: function SP_XmlWriter$close() {
    }
};
SP.ClientHttpUtility = function SP_ClientHttpUtility() {
};
SP.ClientHttpUtility.$34 = function SP_ClientHttpUtility$$34($p0, $p1, $p2) {
    var $v_0 = '';
    var $v_1;
    var $v_2 = 0;
    var $v_3 = ' \"%<>\'&';
    var $v_4 = null;

    if ($p0 === $v_4 || typeof $p0 === 'undefined' || !$p0.length) {
        return '';
    }
    for ($v_2 = 0; $v_2 < $p0.length; $v_2++) {
        var $v_5 = $p0.charCodeAt($v_2);
        var $v_6 = $p0.charAt($v_2);

        if ($p1 && ($v_6 === '#' || $v_6 === '?')) {
            $v_0 += $p0.substr($v_2);
            break;
        }
        if ($v_5 <= 127) {
            if ($p2) {
                $v_0 += $v_6;
            }
            else {
                if ($v_5 >= 97 && $v_5 <= 122 || $v_5 >= 65 && $v_5 <= 90 || $v_5 >= 48 && $v_5 <= 57 || $v_5 >= 32 && $v_5 <= 95 && $v_3.indexOf($v_6) < 0) {
                    $v_0 += $v_6;
                }
                else if ($v_5 <= 15) {
                    $v_0 += '%0' + ($v_5.toString(16)).toUpperCase();
                }
                else if ($v_5 <= 127) {
                    $v_0 += '%' + ($v_5.toString(16)).toUpperCase();
                }
            }
        }
        else if ($v_5 <= 2047) {
            $v_1 = 192 | $v_5 >> 6;
            $v_0 += '%' + ($v_1.toString(16)).toUpperCase();
            $v_1 = 128 | $v_5 & 63;
            $v_0 += '%' + ($v_1.toString(16)).toUpperCase();
        }
        else if (($v_5 & 64512) !== 55296) {
            $v_1 = 224 | $v_5 >> 12;
            $v_0 += '%' + ($v_1.toString(16)).toUpperCase();
            $v_1 = 128 | ($v_5 & 4032) >> 6;
            $v_0 += '%' + ($v_1.toString(16)).toUpperCase();
            $v_1 = 128 | $v_5 & 63;
            $v_0 += '%' + ($v_1.toString(16)).toUpperCase();
        }
        else if ($v_2 < $p0.length - 1) {
            $v_5 = ($v_5 & 1023) << 10;
            $v_2++;
            var $v_7 = $p0.charCodeAt($v_2);

            $v_5 |= $v_7 & 1023;
            $v_5 += 65536;
            $v_1 = 240 | $v_5 >> 18;
            $v_0 += '%' + ($v_1.toString(16)).toUpperCase();
            $v_1 = 128 | ($v_5 & 258048) >> 12;
            $v_0 += '%' + ($v_1.toString(16)).toUpperCase();
            $v_1 = 128 | ($v_5 & 4032) >> 6;
            $v_0 += '%' + ($v_1.toString(16)).toUpperCase();
            $v_1 = 128 | $v_5 & 63;
            $v_0 += '%' + ($v_1.toString(16)).toUpperCase();
        }
    }
    return $v_0;
};
SP.ClientConstants = function SP_ClientConstants() {
};
SP.ClientSchemaVersions = function SP_ClientSchemaVersions() {
};
SP.ClientErrorCodes = function SP_ClientErrorCodes() {
};
SP.ClientAction = function SP_ClientAction($p0, $p1, $p2) {
    if (!$p0) {
        throw Error.argumentNull('context');
    }
    this.$I_0 = $p1;
    this.$B_0 = $p2;
    this.$4_0 = $p0.get_$1w_0();
};
SP.ClientAction.$z = function SP_ClientAction$$z($p0, $p1) {
    if ($p0 && $p1) {
        if (SP.ClientObject.isInstanceOfType($p1)) {
            var $v_0 = $p1;

            if ($v_0 && $v_0.$0_0 && $v_0.$0_0 !== $p0) {
                throw Error.invalidOperation(SP.ResResources.getString('NotSameClientContext'));
            }
        }
    }
};
SP.ClientAction.$1A = function SP_ClientAction$$1A($p0, $p1) {
    if ($p0 && $p1 && $p1.length > 0) {
        for (var $v_0 = 0; $v_0 < $p1.length; $v_0++) {
            SP.ClientAction.$z($p0, $p1[$v_0]);
        }
    }
};
SP.ClientAction.prototype = {
    $4_0: 0,
    $I_0: null,
    $B_0: null,
    get_id: function SP_ClientAction$get_id() {
        return this.$4_0;
    },
    get_path: function SP_ClientAction$get_path() {
        return this.$I_0;
    },
    get_name: function SP_ClientAction$get_name() {
        return this.$B_0;
    }
};
SP.ClientActionSetProperty = function SP_ClientActionSetProperty(obj, propName, propValue) {
    SP.ClientActionSetProperty.initializeBase(this, [SP.ClientRuntimeContext.$2h(obj), !obj ? null : obj.get_path(), propName]);
    if (!obj) {
        throw Error.argumentNull('obj');
    }
    if (!obj.get_path() || !(obj.get_path()).$j_0) {
        throw Error.create(SP.ResResources.getString('NoObjectPathAssociatedWithObject'));
    }
    SP.ClientAction.$z(obj.$0_0, propValue);
    this.$2K_1 = propName;
    this.$l_1 = propValue;
    this.$6_1 = new SP.SerializationContext(obj.$0_0);
    var $v_0;

    this.$1_1 = new Sys.StringBuilder();
    $v_0 = SP.XmlWriter.create(this.$1_1);
    this.$y_1($v_0, this.$6_1);
    $v_0.close();
    this.$l_1 = null;
};
SP.ClientActionSetProperty.prototype = {
    $2K_1: null,
    $l_1: null,
    $6_1: null,
    $1_1: null,
    $39_0: function SP_ClientActionSetProperty$$39_0($p0, $p1) {
        $p0.writeRaw(this.$1_1.toString());
        $p1.$m_0(this.$6_1);
    },
    $y_1: function SP_ClientActionSetProperty$$y_1($p0, $p1) {
        $p0.writeStartElement('SetProperty');
        $p0.writeAttributeString('Id', this.$4_0.toString());
        $p0.writeAttributeString('ObjectPathId', this.$I_0.$4_0.toString());
        $p0.writeAttributeString('Name', this.$2K_1);
        $p1.addObjectPath(this.$I_0);
        $p0.writeStartElement('Parameter');
        SP.DataConvert.writeValueToXmlElement($p0, this.$l_1, $p1);
        $p0.writeEndElement();
        $p0.writeEndElement();
    }
};
SP.ClientActionSetStaticProperty = function SP_ClientActionSetStaticProperty(context, typeId, propName, propValue) {
    SP.ClientActionSetStaticProperty.initializeBase(this, [context, null, propName]);
    if (!context) {
        throw Error.argumentNull('context');
    }
    SP.ClientAction.$z(context, propValue);
    this.$J_1 = typeId;
    this.$l_1 = propValue;
    this.$6_1 = new SP.SerializationContext(context);
    var $v_0;

    this.$1_1 = new Sys.StringBuilder();
    $v_0 = SP.XmlWriter.create(this.$1_1);
    this.$y_1($v_0, this.$6_1);
    $v_0.close();
    this.$l_1 = null;
};
SP.ClientActionSetStaticProperty.prototype = {
    $J_1: null,
    $l_1: null,
    $6_1: null,
    $1_1: null,
    $39_0: function SP_ClientActionSetStaticProperty$$39_0($p0, $p1) {
        $p0.writeRaw(this.$1_1.toString());
        $p1.$m_0(this.$6_1);
    },
    $y_1: function SP_ClientActionSetStaticProperty$$y_1($p0, $p1) {
        $p0.writeStartElement('SetStaticProperty');
        $p0.writeAttributeString('Id', this.$4_0.toString());
        $p0.writeAttributeString('TypeId', this.$J_1);
        $p0.writeAttributeString('Name', this.$B_0);
        $p0.writeStartElement('Parameter');
        SP.DataConvert.writeValueToXmlElement($p0, this.$l_1, $p1);
        $p0.writeEndElement();
        $p0.writeEndElement();
    }
};
SP.ClientActionInvokeMethod = function SP_ClientActionInvokeMethod(obj, methodName, parameters) {
    SP.ClientActionInvokeMethod.initializeBase(this, [SP.ClientRuntimeContext.$2h(obj), !obj ? null : obj.get_path(), methodName]);
    if (!obj) {
        throw Error.argumentNull('obj');
    }
    SP.ClientAction.$1A(obj.$0_0, parameters);
    this.$5_1 = parameters;
    if (!obj.get_path() || !(obj.get_path()).$j_0) {
        throw Error.create(SP.ResResources.getString('NoObjectPathAssociatedWithObject'));
    }
    this.$c_1 = obj.$2_0.$c_0;
    this.$6_1 = new SP.SerializationContext(obj.$0_0);
    var $v_0;

    this.$1_1 = new Sys.StringBuilder();
    $v_0 = SP.XmlWriter.create(this.$1_1);
    this.$y_1($v_0, this.$6_1);
    $v_0.close();
    this.$5_1 = null;
};
SP.ClientActionInvokeMethod.prototype = {
    $5_1: null,
    $c_1: null,
    $6_1: null,
    $1_1: null,
    $39_0: function SP_ClientActionInvokeMethod$$39_0($p0, $p1) {
        $p0.writeRaw(this.$1_1.toString());
        $p1.$m_0(this.$6_1);
    },
    $y_1: function SP_ClientActionInvokeMethod$$y_1($p0, $p1) {
        $p0.writeStartElement('Method');
        $p0.writeAttributeString('Name', this.$B_0);
        $p0.writeAttributeString('Id', this.$4_0.toString());
        $p0.writeAttributeString('ObjectPathId', this.$I_0.$4_0.toString());
        if (!SP.ScriptUtility.isNullOrUndefined(this.$c_1)) {
            $p0.writeAttributeString('Version', this.$c_1);
        }
        $p1.addObjectPath(this.$I_0);
        if (this.$5_1 && this.$5_1.length > 0) {
            $p0.writeStartElement('Parameters');
            for (var $v_0 = 0; $v_0 < this.$5_1.length; $v_0++) {
                var $v_1 = this.$5_1[$v_0];

                $p0.writeStartElement('Parameter');
                SP.DataConvert.writeValueToXmlElement($p0, $v_1, $p1);
                $p0.writeEndElement();
            }
            $p0.writeEndElement();
        }
        $p0.writeEndElement();
    }
};
SP.ClientActionInvokeStaticMethod = function SP_ClientActionInvokeStaticMethod(context, typeId, methodName, parameters) {
    SP.ClientActionInvokeStaticMethod.initializeBase(this, [context, null, methodName]);
    if (!context) {
        throw Error.argumentNull('context');
    }
    SP.ClientAction.$1A(context, parameters);
    this.$J_1 = typeId;
    this.$5_1 = parameters;
    this.$6_1 = new SP.SerializationContext(context);
    var $v_0;

    this.$1_1 = new Sys.StringBuilder();
    $v_0 = SP.XmlWriter.create(this.$1_1);
    this.$y_1($v_0, this.$6_1);
    $v_0.close();
    this.$5_1 = null;
};
SP.ClientActionInvokeStaticMethod.prototype = {
    $5_1: null,
    $J_1: null,
    $6_1: null,
    $1_1: null,
    $39_0: function SP_ClientActionInvokeStaticMethod$$39_0($p0, $p1) {
        $p0.writeRaw(this.$1_1.toString());
        $p1.$m_0(this.$6_1);
    },
    $y_1: function SP_ClientActionInvokeStaticMethod$$y_1($p0, $p1) {
        $p0.writeStartElement('StaticMethod');
        $p0.writeAttributeString('TypeId', this.$J_1);
        $p0.writeAttributeString('Name', this.$B_0);
        $p0.writeAttributeString('Id', this.$4_0.toString());
        if (this.$5_1 && this.$5_1.length > 0) {
            $p0.writeStartElement('Parameters');
            for (var $v_0 = 0; $v_0 < this.$5_1.length; $v_0++) {
                var $v_1 = this.$5_1[$v_0];

                $p0.writeStartElement('Parameter');
                SP.DataConvert.writeValueToXmlElement($p0, $v_1, $p1);
                $p0.writeEndElement();
            }
            $p0.writeEndElement();
        }
        $p0.writeEndElement();
    }
};
SP.ClientActionInstantiateObjectPath = function SP_ClientActionInstantiateObjectPath($p0) {
    SP.ClientActionInstantiateObjectPath.initializeBase(this, [SP.ClientRuntimeContext.$2i($p0), $p0, null]);
};
SP.ClientActionInstantiateObjectPath.prototype = {
    $39_0: function SP_ClientActionInstantiateObjectPath$$39_0($p0, $p1) {
        $p0.writeStartElement('ObjectPath');
        $p0.writeAttributeString('Id', this.$4_0.toString());
        $p0.writeAttributeString('ObjectPathId', this.$I_0.$4_0.toString());
        $p1.addObjectPath(this.$I_0);
        $p0.writeEndElement();
    }
};
SP.ClientObject = function SP_ClientObject(context, objectPath) {
    if (!context) {
        throw Error.argumentNull('context');
    }
    this.$0_0 = context;
    this.$2_0 = new SP.ClientObjectData();
    this.$2_0.$Z_0 = objectPath;
};
SP.ClientObject.prototype = {
    $0_0: null,
    $2_0: null,
    get_context: function SP_ClientObject$get_context() {
        return this.$0_0;
    },
    get_path: function SP_ClientObject$get_path() {
        return this.$2_0.$Z_0;
    },
    get_objectVersion: function SP_ClientObject$get_objectVersion() {
        return this.$2_0.$c_0;
    },
    set_objectVersion: function SP_ClientObject$set_objectVersion(value) {
        this.$2_0.$c_0 = value;
        return value;
    },
    get_objectData: function SP_ClientObject$get_objectData() {
        return this.$2_0;
    },
    checkUninitializedProperty: function SP_ClientObject$checkUninitializedProperty(propName) {
        if (this.get_serverObjectIsNull()) {
            if (this.get_path() && !SP.ScriptUtility.isNullOrEmptyString((this.get_path()).get_$2l_0())) {
                throw Error.create(SP.ResResources.getString('NamedServerObjectIsNull', (this.get_path()).get_$2l_0()));
            }
            else {
                throw Error.create(SP.ResResources.getString('ServerObjectIsNull'));
            }
        }
        var $v_0 = (this.$2_0.get_properties())[propName];

        if (SP.ScriptUtility.isUndefined($v_0)) {
            throw Error.create(SP.ResResources.getString('NamedPropertyHasNotBeenInitialized', propName));
        }
    },
    $20_0: function SP_ClientObject$$20_0($p0) {
        this.$2_0 = $p0.$2_0;
    },
    fromJson: function SP_ClientObject$fromJson(initValue) {
        if (SP.ScriptUtility.isNullOrUndefined(initValue)) {
            this.$2y_0();
            return;
        }
        this.initPropertiesFromJson(initValue);
        this.initNonPropertiesFromJson(initValue);
    },
    initPropertiesFromJson: function SP_ClientObject$initPropertiesFromJson(initValue) {
        var $v_0 = initValue._ObjectIdentity_;

        if (!SP.ScriptUtility.isNullOrUndefined($v_0)) {
            var $v_1 = $v_0;

            if (!SP.ScriptUtility.isNullOrEmptyString($v_1)) {
                var $v_2 = new SP.ObjectPathIdentity(this.$0_0, $v_1);

                if (this.$2_0.$Z_0) {
                    $v_2.$4_0 = this.$2_0.$Z_0.$4_0;
                }
                this.$2_0.$Z_0 = $v_2;
                $v_2.$1N_0 = false;
                this.$0_0.$2Z_0($v_2);
            }
            delete initValue._ObjectIdentity_;
        }
        $v_0 = initValue._ObjectVersion_;
        if (!SP.ScriptUtility.isNullOrUndefined($v_0)) {
            var $v_3 = $v_0;

            if (!SP.ScriptUtility.isNullOrEmptyString($v_3)) {
                this.$2_0.$c_0 = $v_3;
            }
            delete initValue._ObjectVersion_;
        }
        delete initValue._ObjectType_;
    },
    initNonPropertiesFromJson: function SP_ClientObject$initNonPropertiesFromJson(initValue) {
    },
    customFromJson: function SP_ClientObject$customFromJson(initValue) {
        return false;
    },
    retrieve: function SP_ClientObject$retrieve() {
        var $v_0 = this.get_$19_0();

        if (!arguments.length) {
            $v_0.selectAllProperties();
        }
        else {
            if (arguments.length === 1 && Array.isInstanceOfType(arguments[0])) {
                var $v_1 = arguments[0];

                for (var $v_2 = 0; $v_2 < $v_1.length; $v_2++) {
                    var $v_3 = $v_1[$v_2];

                    $v_0.select($v_3);
                }
            }
            else {
                for (var $v_4 = 0; $v_4 < arguments.length; $v_4++) {
                    var $v_5 = arguments[$v_4];

                    $v_0.select($v_5);
                }
            }
        }
    },
    refreshLoad: function SP_ClientObject$refreshLoad() {
        var $v_0 = this.get_$19_0();

        this.$2x_0($v_0);
    },
    isPropertyAvailable: function SP_ClientObject$isPropertyAvailable(propertyName) {
        var $v_0 = (this.$2_0.get_properties())[propertyName];

        return !SP.ScriptUtility.isUndefined($v_0);
    },
    isObjectPropertyInstantiated: function SP_ClientObject$isObjectPropertyInstantiated(propertyName) {
        var $v_0 = (this.$2_0.get_clientObjectProperties())[propertyName];

        return !SP.ScriptUtility.isUndefined($v_0);
    },
    get_$19_0: function SP_ClientObject$get_$19_0() {
        var $v_0 = this.$2_0.$D_0;

        if (!$v_0 || $v_0 !== (this.$0_0.get_pendingRequest()).$P_0) {
            $v_0 = new SP.ClientQueryInternal(this, null, false, null);
            this.$2_0.$D_0 = $v_0;
            this.$0_0.addQueryIdAndResultObject($v_0.$4_0, this);
            this.$0_0.addQuery($v_0);
            this.$0_0.$2a_0(this);
            this.$2x_0($v_0);
            this.loadExpandoFields();
        }
        return $v_0;
    },
    $2x_0: function SP_ClientObject$$2x_0($p0) {
        var $$dict_1 = this.$2_0.get_properties();

        for (var $$key_2 in $$dict_1) {
            var $v_0 = {
                key: $$key_2,
                value: $$dict_1[$$key_2]
            };

            $p0.select($v_0.key);
        }
    },
    loadExpandoFields: function SP_ClientObject$loadExpandoFields() {
    },
    $24_0: function SP_ClientObject$$24_0() {
        this.$2_0.$D_0 = null;
    },
    $U_0: null,
    removeFromParentCollection: function SP_ClientObject$removeFromParentCollection() {
        if (this.$U_0) {
            this.$U_0.removeChild(this);
        }
    },
    $2O_0: false,
    $2y_0: function SP_ClientObject$$2y_0() {
        this.$2O_0 = true;
    },
    get_serverObjectIsNull: function SP_ClientObject$get_serverObjectIsNull() {
        if (this.$2O_0) {
            return true;
        }
        var $v_0 = this.get_path();

        if (!$v_0) {
            return false;
        }
        return $v_0.$1N_0;
    },
    updateClientObjectPropertyType: function SP_ClientObject$updateClientObjectPropertyType(propertyName, propertyValue, json) {
        if (SP.ScriptUtility.isNullOrEmptyString(propertyName)) {
            throw Error.argumentNull('propertyName');
        }
        if (!propertyValue) {
            throw Error.argumentNull('propertyValue');
        }
        if (!json) {
            return;
        }
        if (!SP.ClientObject.isInstanceOfType(propertyValue)) {
            throw Error.argument('propertyValue');
        }
        var $v_0 = propertyValue;

        if (SP.ScriptUtility.isUndefined((this.$2_0.get_clientObjectProperties())[propertyName])) {
            throw Error.argument('propertyName');
        }
        var $v_1 = json._ObjectType_;

        if (!SP.ScriptUtility.isNullOrEmptyString($v_1)) {
            var $v_2 = Type.parse($v_1);

            if ($v_2 && $v_2 !== Object.getType(propertyValue)) {
                var $v_3 = new $v_2(this.$0_0);

                $v_0.$30_0($v_3);
                (this.$2_0.get_clientObjectProperties())[propertyName] = $v_3;
            }
        }
    },
    $30_0: function SP_ClientObject$$30_0($p0) {
        this.$2_0.$1u_0 = $p0;
        if (this.$2_0.$O_0) {
            this.$2_0.$O_0 = $p0;
        }
        $p0.$20_0(this);
    },
    get_typedObject: function SP_ClientObject$get_typedObject() {
        if (!this.$2_0.$1u_0) {
            return this;
        }
        return this.$2_0.$1u_0;
    }
};
SP.ClientObjectData = function SP_ClientObjectData() {
};
SP.ClientObjectData.prototype = {
    $c_0: null,
    $K_0: null,
    get_properties: function SP_ClientObjectData$get_properties() {
        if (!this.$K_0) {
            this.$K_0 = {};
        }
        return this.$K_0;
    },
    $1Z_0: null,
    get_clientObjectProperties: function SP_ClientObjectData$get_clientObjectProperties() {
        if (!this.$1Z_0) {
            this.$1Z_0 = {};
        }
        return this.$1Z_0;
    },
    $1g_0: null,
    get_methodReturnObjects: function SP_ClientObjectData$get_methodReturnObjects() {
        if (!this.$1g_0) {
            this.$1g_0 = {};
        }
        return this.$1g_0;
    },
    $D_0: null,
    $1u_0: null,
    $O_0: null,
    $Z_0: null,
    $12_0: false,
    $1E_0: null,
    get_$10_0: function SP_ClientObjectData$get_$10_0() {
        if (!this.$1E_0) {
            this.$1E_0 = [];
        }
        return this.$1E_0;
    },
    set_$10_0: function SP_ClientObjectData$set_$10_0($p0) {
        this.$1E_0 = $p0;
        return $p0;
    }
};
SP.ClientObjectCollection = function SP_ClientObjectCollection(context, objectPath) {
    this.getEnumerator = this.$3i_1;
    SP.ClientObjectCollection.initializeBase(this, [context, objectPath]);
};
SP.ClientObjectCollection.prototype = {
    get_areItemsAvailable: function SP_ClientObjectCollection$get_areItemsAvailable() {
        return this.$2_0.$12_0;
    },
    $1J_1: null,
    retrieveItems: function SP_ClientObjectCollection$retrieveItems() {
        if (!this.$1J_1) {
            this.$1J_1 = new SP.ClientObjectPrototype(this.get_$19_0(), true);
        }
        return this.$1J_1;
    },
    $24_0: function SP_ClientObjectCollection$$24_0() {
        SP.ClientObject.prototype.$24_0.call(this);
        this.$1J_1 = null;
    },
    $3i_1: function SP_ClientObjectCollection$$3i_1() {
        this.$33_1();
        return new SP.ArrayListEnumerator(this.get_data());
    },
    getItemAtIndex: function SP_ClientObjectCollection$getItemAtIndex(i) {
        var $v_0 = (this.get_data())[i];

        return $v_0;
    },
    get_count: function SP_ClientObjectCollection$get_count() {
        this.$33_1();
        return (this.get_data()).length;
    },
    get_$3F_1: function SP_ClientObjectCollection$get_$3F_1() {
        return this.$2_0.$12_0;
    },
    $3a_1: function SP_ClientObjectCollection$$3a_1() {
        this.$2_0.$12_0 = true;
    },
    $33_1: function SP_ClientObjectCollection$$33_1() {
        if (!this.get_$3F_1()) {
            throw Error.create(SP.ResResources.getString('CollectionHasNotBeenInitialized'));
        }
    },
    get_data: function SP_ClientObjectCollection$get_data() {
        return this.$2_0.get_$10_0();
    },
    fromJson: function SP_ClientObjectCollection$fromJson(obj) {
        SP.ClientObject.prototype.fromJson.call(this, obj);
        var $v_0;

        $v_0 = obj._Child_Items_;
        if ($v_0) {
            this.$2_0.set_$10_0([]);
            this.$2_0.$12_0 = true;
            SP.DataConvert.$2U(this.$0_0, this.$2_0.get_$10_0(), $v_0, this.get_childItemType());
            var $v_1 = this.$2_0.get_$10_0();

            for (var $v_2 = 0; $v_2 < $v_1.length; $v_2++) {
                if (SP.ClientObject.isInstanceOfType($v_1[$v_2])) {
                    var $v_3 = $v_1[$v_2];

                    $v_3.$U_0 = this;
                }
            }
        }
    },
    addChild: function SP_ClientObjectCollection$addChild(obj) {
        Array.add(this.get_data(), obj);
        if (!obj.$U_0) {
            obj.$U_0 = this;
        }
        this.$2_0.$12_0 = true;
    },
    removeChild: function SP_ClientObjectCollection$removeChild(obj) {
        if (!this.$2_0.get_$10_0()) {
            return;
        }
        var $v_0 = null;

        if (SP.ObjectPathIdentity.isInstanceOfType(obj.get_path())) {
            $v_0 = obj.get_path();
        }
        var $v_1 = this.$2_0.get_$10_0();

        for (var $v_2 = $v_1.length - 1; $v_2 >= 0; $v_2--) {
            if ($v_1[$v_2] === obj) {
                if ($v_1[$v_2].$U_0 === this) {
                    $v_1[$v_2].$U_0 = null;
                }
                Array.removeAt($v_1, $v_2);
            }
            else if ($v_0 && SP.ClientObject.isInstanceOfType($v_1[$v_2]) && SP.ObjectPathIdentity.isInstanceOfType($v_1[$v_2].get_path()) && $v_0.$r_1 === ($v_1[$v_2].get_path()).$r_1) {
                if ($v_1[$v_2].$U_0 === this) {
                    $v_1[$v_2].$U_0 = null;
                }
                Array.removeAt($v_1, $v_2);
            }
        }
    }
};
SP.ClientObjectList = function SP_ClientObjectList(context, objectPath, childItemType) {
    SP.ClientObjectList.initializeBase(this, [context, objectPath]);
    this.$1X_2 = childItemType;
};
SP.ClientObjectList.prototype = {
    $1X_2: null,
    fromJson: function SP_ClientObjectList$fromJson(initValue) {
        if (SP.ScriptUtility.isNullOrUndefined(initValue)) {
            this.$2y_0();
            return;
        }
        Array.clear(this.get_data());
        if (typeof initValue === 'object') {
            var $v_0;

            if (Array.isInstanceOfType(initValue)) {
                $v_0 = initValue;
            }
            else {
                $v_0 = initValue._Child_Items_;
            }
            var $v_1 = [];

            SP.DataConvert.$2U(this.$0_0, $v_1, $v_0, this.$1X_2);
            for (var $v_2 = 0; $v_2 < $v_1.length; $v_2++) {
                var $v_3 = $v_1[$v_2];

                if (SP.ClientObject.isInstanceOfType($v_3)) {
                    this.addChild($v_3);
                }
            }
        }
        this.$3a_1();
    },
    get_childItemType: function SP_ClientObjectList$get_childItemType() {
        return this.$1X_2;
    },
    customFromJson: function SP_ClientObjectList$customFromJson(initValue) {
        return false;
    }
};
SP.ClientObjectPrototype = function SP_ClientObjectPrototype($p0, $p1) {
    this.$D_0 = $p0;
    this.$p_0 = $p1;
};
SP.ClientObjectPrototype.prototype = {
    $D_0: null,
    $p_0: false,
    retrieve: function SP_ClientObjectPrototype$retrieve() {
        if (this.$p_0) {
            if (!arguments.length) {
                (this.$D_0.get_childItemQuery()).selectAllProperties();
            }
            else {
                if (arguments.length === 1 && Array.isInstanceOfType(arguments[0])) {
                    var $v_0 = arguments[0];

                    for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
                        var $v_2 = $v_0[$v_1];

                        (this.$D_0.get_childItemQuery()).select($v_2);
                    }
                }
                else {
                    for (var $v_3 = 0; $v_3 < arguments.length; $v_3++) {
                        var $v_4 = arguments[$v_3];

                        (this.$D_0.get_childItemQuery()).select($v_4);
                    }
                }
            }
        }
        else {
            if (!arguments.length) {
                this.$D_0.selectAllProperties();
            }
            else {
                if (arguments.length === 1 && Array.isInstanceOfType(arguments[0])) {
                    var $v_5 = arguments[0];

                    for (var $v_6 = 0; $v_6 < $v_5.length; $v_6++) {
                        var $v_7 = $v_5[$v_6];

                        this.$D_0.select($v_7);
                    }
                }
                else {
                    for (var $v_8 = 0; $v_8 < arguments.length; $v_8++) {
                        var $v_9 = arguments[$v_8];

                        this.$D_0.select($v_9);
                    }
                }
            }
        }
    },
    $1P_0: null,
    retrieveObject: function SP_ClientObjectPrototype$retrieveObject(propertyName) {
        if (!this.$1P_0) {
            this.$1P_0 = {};
        }
        var $v_0 = this.$1P_0[propertyName];

        if (!SP.ScriptUtility.isNullOrUndefined($v_0)) {
            return $v_0;
        }
        var $v_1 = false;
        var $v_2;

        if (this.$p_0) {
            $v_2 = (this.$D_0.get_childItemQuery()).$1C_1(propertyName);
        }
        else {
            $v_2 = this.$D_0.$1C_1(propertyName);
        }
        if (!$v_2) {
            $v_2 = new SP.ClientQueryInternal(null, propertyName, true, this.$D_0);
            $v_1 = true;
        }
        $v_0 = new SP.ClientObjectPrototype($v_2, false);
        if ($v_1) {
            if (this.$p_0) {
                (this.$D_0.get_childItemQuery()).selectSubQuery($v_2);
            }
            else {
                this.$D_0.selectSubQuery($v_2);
            }
        }
        this.$1P_0[propertyName] = $v_0;
        return $v_0;
    },
    $1O_0: null,
    retrieveCollectionObject: function SP_ClientObjectPrototype$retrieveCollectionObject(propertyName) {
        if (!this.$1O_0) {
            this.$1O_0 = {};
        }
        var $v_0 = this.$1O_0[propertyName];

        if (!SP.ScriptUtility.isNullOrUndefined($v_0)) {
            return $v_0;
        }
        var $v_1 = false;
        var $v_2;

        if (this.$p_0) {
            $v_2 = (this.$D_0.get_childItemQuery()).$1C_1(propertyName);
        }
        else {
            $v_2 = this.$D_0.$1C_1(propertyName);
        }
        if (!$v_2) {
            $v_2 = new SP.ClientQueryInternal(null, propertyName, true, this.$D_0);
            $v_1 = true;
        }
        $v_0 = new SP.ClientObjectCollectionPrototype($v_2, false);
        if ($v_1) {
            if (this.$p_0) {
                (this.$D_0.get_childItemQuery()).selectSubQuery($v_2);
            }
            else {
                this.$D_0.selectSubQuery($v_2);
            }
        }
        this.$1O_0[propertyName] = $v_0;
        return $v_0;
    }
};
SP.ClientObjectCollectionPrototype = function SP_ClientObjectCollectionPrototype($p0, $p1) {
    SP.ClientObjectCollectionPrototype.initializeBase(this, [$p0, $p1]);
};
SP.ClientObjectCollectionPrototype.prototype = {
    $1f_1: null,
    retrieveItems: function SP_ClientObjectCollectionPrototype$retrieveItems() {
        if (!this.$1f_1) {
            this.$1f_1 = new SP.ClientObjectPrototype(this.$D_0, true);
        }
        return this.$1f_1;
    }
};
SP.ClientQueryProperty = function SP_ClientQueryProperty() {
};
SP.ClientQueryProperty.prototype = {
    scalarProperty: false,
    scalarPropertySet: false,
    selectAll: false,
    selectAllSet: false,
    query: null
};
SP.ClientQueryInternal = function SP_ClientQueryInternal($p0, $p1, $p2, $p3) {
    this.$K_1 = {};
    this.$3U_1 = [];
    SP.ClientQueryInternal.initializeBase(this, [SP.ClientQueryInternal.$3O($p0, $p3), $p2 ? null : $p0.get_path(), $p1]);
    if (!$p2 && (!$p0.get_path() || !($p0.get_path()).$j_0)) {
        throw Error.create(SP.ResResources.getString('NoObjectPathAssociatedWithObject'));
    }
    if ($p2) {
        if (!$p3) {
            throw Error.argumentNull('parentQuery');
        }
        this.$1l_1 = $p3.$1l_1;
        this.$0_1 = $p3.$0_1;
    }
    else {
        if (!$p0) {
            throw Error.argumentNull('obj');
        }
        this.$1l_1 = this;
        this.$0_1 = $p0.$0_0;
    }
};
SP.ClientQueryInternal.$3O = function SP_ClientQueryInternal$$3O($p0, $p1) {
    if ($p0) {
        return $p0.$0_0;
    }
    if ($p1) {
        return $p1.$0_1;
    }
    throw Error.argumentNull('parentQuery');
};
SP.ClientQueryInternal.prototype = {
    $1l_1: null,
    $0_1: null,
    $q_1: null,
    $1I_1: false,
    get_isChildItemQuery: function SP_ClientQueryInternal$get_isChildItemQuery() {
        return this.$1I_1;
    },
    $3b_1: function SP_ClientQueryInternal$$3b_1() {
        this.$1I_1 = true;
    },
    select: function SP_ClientQueryInternal$select($p0) {
        if (SP.ScriptUtility.isNullOrEmptyString($p0)) {
            throw Error.argument('propertyName', SP.ResResources.getString('RequestEmptyQueryName'));
        }
        var $v_0 = this.$K_1[$p0];

        if (SP.ScriptUtility.isNullOrUndefined($v_0)) {
            $v_0 = new SP.ClientQueryProperty();
            this.$K_1[$p0] = $v_0;
        }
        else {
            if ($v_0.query) {
                throw Error.argument('propertyName');
            }
        }
        $v_0.scalarProperty = true;
        $v_0.scalarPropertySet = true;
        return this;
    },
    selectWithAll: function SP_ClientQueryInternal$selectWithAll($p0) {
        if (SP.ScriptUtility.isNullOrEmptyString($p0)) {
            throw Error.argument('propertyName', SP.ResResources.getString('RequestEmptyQueryName'));
        }
        var $v_0 = this.$K_1[$p0];

        if (SP.ScriptUtility.isNullOrUndefined($v_0)) {
            $v_0 = new SP.ClientQueryProperty();
            this.$K_1[$p0] = $v_0;
        }
        $v_0.selectAllSet = true;
        $v_0.selectAll = true;
        return this;
    },
    $2M_1: false,
    selectAllProperties: function SP_ClientQueryInternal$selectAllProperties() {
        this.$2M_1 = true;
        return this;
    },
    selectSubQuery: function SP_ClientQueryInternal$selectSubQuery($p0) {
        if (SP.ScriptUtility.isNullOrEmptyString($p0.$B_0)) {
            throw Error.argument('subQuery', SP.ResResources.getString('RequestEmptyQueryName'));
        }
        var $v_0 = this.$K_1[$p0.$B_0];

        if (SP.ScriptUtility.isNullOrUndefined($v_0)) {
            $v_0 = new SP.ClientQueryProperty();
            $v_0.query = $p0;
            this.$K_1[$p0.$B_0] = $v_0;
        }
        else {
            if ($v_0.scalarPropertySet && $v_0.scalarProperty) {
                throw Error.argument('subQuery');
            }
            if ($v_0.query && $v_0.query !== $p0) {
                throw Error.argument('subQuery');
            }
            $v_0.query = $p0;
        }
        return this;
    },
    $1C_1: function SP_ClientQueryInternal$$1C_1($p0) {
        if (SP.ScriptUtility.isNullOrEmptyString($p0)) {
            throw Error.argumentNull('name');
        }
        var $v_0 = this.$K_1[$p0];

        if ($v_0) {
            return $v_0.query;
        }
        return null;
    },
    get_childItemQuery: function SP_ClientQueryInternal$get_childItemQuery() {
        if (!this.$q_1) {
            this.$q_1 = new SP.ClientQueryInternal(null, '_Child_Items_', true, this);
            this.$q_1.$3b_1();
        }
        return this.$q_1;
    },
    $38_1: function SP_ClientQueryInternal$$38_1($p0, $p1) {
        $p0.writeStartElement('Query');
        this.$37_1($p0, $p1);
        $p0.writeEndElement();
        if (this.$q_1) {
            $p0.writeStartElement('ChildItemQuery');
            this.$q_1.$37_1($p0, $p1);
            $p0.writeEndElement();
        }
    },
    $37_1: function SP_ClientQueryInternal$$37_1($p0, $p1) {
        $p0.writeAttributeString('SelectAllProperties', this.$2M_1 ? 'true' : 'false');
        $p0.writeStartElement('Properties');
        var $$dict_2 = this.$K_1;

        for (var $$key_3 in $$dict_2) {
            var $v_0 = {
                key: $$key_3,
                value: $$dict_2[$$key_3]
            };
            var $v_1 = $v_0.key;
            var $v_2 = this.$K_1[$v_1];

            $p0.writeStartElement('Property');
            $p0.writeAttributeString('Name', $v_1);
            if ($v_2.scalarPropertySet) {
                $p0.writeAttributeString('ScalarProperty', $v_2.scalarProperty ? 'true' : 'false');
            }
            if ($v_2.selectAllSet) {
                $p0.writeAttributeString('SelectAll', $v_2.selectAll ? 'true' : 'false');
            }
            if ($v_2.query) {
                $v_2.query.$38_1($p0, $p1);
            }
            $p0.writeEndElement();
        }
        $p0.writeEndElement();
        if (this.$1I_1) { }
    },
    $39_0: function SP_ClientQueryInternal$$39_0($p0, $p1) {
        $p0.writeStartElement('Query');
        $p0.writeAttributeString('Id', this.$4_0.toString());
        $p0.writeAttributeString('ObjectPathId', this.$I_0.$4_0.toString());
        $p1.addObjectPath(this.$I_0);
        this.$38_1($p0, $p1);
        $p0.writeEndElement();
    }
};
SP.WebRequestEventArgs = function SP_WebRequestEventArgs(webRequest) {
    SP.WebRequestEventArgs.initializeBase(this);
    if (!webRequest) {
        throw Error.argumentNull('webRequest');
    }
    this.$18_1 = webRequest;
};
SP.WebRequestEventArgs.prototype = {
    $18_1: null,
    get_webRequest: function SP_WebRequestEventArgs$get_webRequest() {
        return this.$18_1;
    }
};
SP.ClientRequest = function SP_ClientRequest($p0) {
    this.$$d_$3I_0 = Function.createDelegate(this, this.$3I_0);
    this.$16_0 = [];
    this.$1L_0 = {};
    if (!$p0) {
        throw Error.argumentNull('context');
    }
    this.$0_0 = $p0;
};
SP.ClientRequest.get_nextSequenceId = function SP_ClientRequest$get_nextSequenceId() {
    var $v_0 = SP.ClientRequest.$2W;

    SP.ClientRequest.$2W++;
    return $v_0 + 1073741824;
};
SP.ClientRequest.$2z = function SP_ClientRequest$$2z($p0) {
    if (!SP.ScriptUtility.isUndefined(window._spPageContextInfo) && !SP.ScriptUtility.isUndefined(window._spFormDigestRefreshInterval) && !SP.ScriptUtility.isUndefined(window.UpdateFormDigest)) {
        var $v_2 = window._spPageContextInfo;
        var $v_3 = $v_2.webServerRelativeUrl;
        var $v_4 = window._spFormDigestRefreshInterval;

        UpdateFormDigest($v_3, $v_4);
    }
    var $v_0 = null;
    var $v_1 = document.getElementsByName('__REQUESTDIGEST');

    if ($v_1 && $v_1.length > 0 && $v_1[0].tagName === 'INPUT') {
        var $v_5 = $v_1[0];

        $v_0 = $v_5.value;
    }
    if (!SP.ScriptUtility.isNullOrUndefined($v_0)) {
        ($p0.get_headers())['X-RequestDigest'] = $v_0;
    }
};
SP.ClientRequest.$3P = function SP_ClientRequest$$3P($p0, $p1) {
    if (!$p0) {
        return $p1;
    }
    if (typeof $p0._SPErrorCode_ === 'number') {
        return $p0._SPErrorCode_;
    }
    return $p1;
};
SP.ClientRequest.$2j = function SP_ClientRequest$$2j($p0, $p1) {
    var $v_0;

    if (!$p0.get_statusCode()) {
        return null;
    }
    if ($p0.get_aborted() || $p0.get_timedOut()) {
        if (typeof $p0._SPError_ === 'string') {
            $v_0 = $p0._SPError_;
        }
        else {
            $v_0 = SP.ResResources.getString('RequestAbortedOrTimedOut');
        }
        return $v_0;
    }
    if (!$p0.get_responseAvailable()) {
        if (typeof $p0._SPError_ === 'string') {
            $v_0 = $p0._SPError_;
        }
        else {
            $v_0 = SP.ResResources.getString('RequestUnexpectedResponse');
        }
        return $v_0;
    }
    if ($p0.get_statusCode() !== 200) {
        $v_0 = SP.ResResources.getString('RequestUnexpectedResponseWithStatus', $p0.get_statusCode(), $p0.get_statusText());
        return $v_0;
    }
    if (!SP.ScriptUtility.isNullOrEmptyString($p1)) {
        var $v_2 = $p0.getResponseHeader('content-type');

        if (!$v_2 || ($v_2.toLowerCase()).indexOf($p1.toLowerCase()) < 0) {
            $v_0 = SP.ResResources.getString('RequestUnexpectedResponse');
            return $v_0;
        }
    }
    var $v_1 = $p0.getResponseHeader('SharePointError');

    if (!SP.ScriptUtility.isNullOrEmptyString($v_1)) {
        $v_0 = SP.ResResources.getString('RequestUnexpectedResponse');
        return $v_0;
    }
    return null;
};
SP.ClientRequest.prototype = {
    $0_0: null,
    $7_0: null,
    get_webRequest: function SP_ClientRequest$get_webRequest() {
        if (!this.$7_0) {
            this.$7_0 = new Sys.Net.WebRequest();
            this.$7_0.set_httpVerb('POST');
            (this.$7_0.get_headers())['Content-Type'] = 'text/xml';
            var $v_0 = this.get_$32_0();

            this.$7_0.set_url($v_0);
            this.$7_0.set_timeout(this.$0_0.get_requestTimeout());
            if (this.$0_0.$w_0) {
                var $v_1 = this.$0_0.$w_0.createWebRequestExecutor();

                this.$7_0.set_executor($v_1);
            }
        }
        return this.$7_0;
    },
    $V_0: null,
    get_$32_0: function SP_ClientRequest$get_$32_0() {
        if (SP.ScriptUtility.isNullOrEmptyString(this.$V_0)) {
            this.$V_0 = this.$0_0.$u_0;
            if (!this.$V_0.endsWith('/')) {
                this.$V_0 += '/';
            }
            this.$V_0 += this.$0_0.get_serviceRelativeUrl();
            this.$V_0 = this.$0_0.getRequestUrl(this.$V_0);
        }
        return this.$V_0;
    },
    $2n_0: function SP_ClientRequest$$2n_0() {
        this.$V_0 = null;
        var $v_0 = this.get_$32_0();

        if (this.$7_0) {
            this.$7_0.set_url($v_0);
        }
    },
    $a_0: 0,
    $E_0: null,
    get_$G_0: function SP_ClientRequest$get_$G_0() {
        if (!this.$E_0) {
            this.$E_0 = new Sys.EventHandlerList();
        }
        return this.$E_0;
    },
    add_requestSucceeded: function SP_ClientRequest$add_requestSucceeded(value) {
        (this.get_$G_0()).addHandler('succeeded', value);
    },
    remove_requestSucceeded: function SP_ClientRequest$remove_requestSucceeded(value) {
        (this.get_$G_0()).removeHandler('succeeded', value);
    },
    add_requestFailed: function SP_ClientRequest$add_requestFailed(value) {
        (this.get_$G_0()).addHandler('failed', value);
    },
    remove_requestFailed: function SP_ClientRequest$remove_requestFailed(value) {
        (this.get_$G_0()).removeHandler('failed', value);
    },
    $P_0: null,
    $22_0: function SP_ClientRequest$$22_0($p0) {
        if (this.$a_0) {
            throw Error.create(SP.ResResources.getString('RequestHasBeenExecuted'));
        }
        Array.add(this.$16_0, $p0);
        this.$P_0 = $p0;
    },
    $d_0: null,
    $2a_0: function SP_ClientRequest$$2a_0($p0) {
        if (!this.$d_0) {
            this.$d_0 = [];
        }
        Array.add(this.$d_0, $p0);
    },
    $e_0: null,
    $3A_0: function SP_ClientRequest$$3A_0($p0) {
        if (!this.$e_0) {
            this.$e_0 = [];
        }
        Array.add(this.$e_0, $p0);
    },
    $1c_0: null,
    get_$25_0: function SP_ClientRequest$get_$25_0() {
        if (!this.$1c_0) {
            this.$1c_0 = [];
        }
        return this.$1c_0;
    },
    $24_0: function SP_ClientRequest$$24_0() {
        if (this.$d_0) {
            for (var $v_0 = 0; $v_0 < this.$d_0.length; $v_0++) {
                var $v_1 = this.$d_0[$v_0];

                $v_1.$24_0();
            }
            this.$d_0 = null;
        }
        if (this.$e_0) {
            for (var $v_2 = 0; $v_2 < this.$e_0.length; $v_2++) {
                var $v_3 = this.$e_0[$v_2];

                $v_3.$3R_0();
            }
            this.$e_0 = null;
        }
    },
    $3H_0: function SP_ClientRequest$$3H_0() {
        if (this.$a_0) {
            throw Error.create(SP.ResResources.getString('RequestHasBeenExecuted'));
        }
        this.$a_0 = 1;
        var $v_0 = this.$3C_0();

        this.$24_0();
        this.$0_0.$2c_0(new SP.WebRequestEventArgs(this.get_webRequest()));
        (this.get_webRequest()).add_completed(this.$$d_$3I_0);
        (this.get_webRequest()).set_body($v_0.toString());
        (this.get_webRequest()).invoke();
    },
    $6_0: null,
    get_$3Y_0: function SP_ClientRequest$get_$3Y_0() {
        if (!this.$6_0) {
            this.$6_0 = new SP.SerializationContext(this.$0_0);
        }
        return this.$6_0;
    },
    $3C_0: function SP_ClientRequest$$3C_0() {
        var $v_0 = this.get_$3Y_0();
        var $v_1 = new Sys.StringBuilder();
        var $v_2 = SP.XmlWriter.create($v_1);

        $v_2.writeStartElement('Request');
        $v_2.writeAttributeString('xmlns', 'http://schemas.microsoft.com/sharepoint/clientquery/2009');
        $v_2.writeAttributeString('SchemaVersion', SP.ClientSchemaVersions.currentVersion);
        $v_2.writeAttributeString('LibraryVersion', '16.0.0.0');
        if (!SP.ScriptUtility.isNullOrEmptyString(this.$0_0.get_applicationName())) {
            $v_2.writeAttributeString('ApplicationName', this.$0_0.get_applicationName());
        }
        $v_2.writeStartElement('Actions');
        var $v_3 = [];

        for (var $v_5 = 0; $v_5 < this.$16_0.length; $v_5++) {
            var $v_6 = this.$16_0[$v_5];

            if (SP.ClientActionExecutionScopeStart.isInstanceOfType($v_6)) {
                var $v_7 = $v_6;

                $v_7.$3_1.$2Y_0($v_2, $v_0);
                $v_3.push($v_7.$3_1);
            }
            else if (SP.ClientActionExecutionScopeEnd.isInstanceOfType($v_6)) {
                var $v_8 = $v_6;

                if (!$v_3.length || $v_3.pop() !== $v_8.$3_1) {
                    throw SP.ExceptionHandlingScope.$9();
                }
                $v_8.$3_1.$36_0($v_2, $v_0);
            }
            else {
                $v_6.$39_0($v_2, $v_0);
            }
        }
        if ($v_3.length > 0) {
            throw SP.ExceptionHandlingScope.$9();
        }
        $v_2.writeEndElement();
        $v_2.writeStartElement('ObjectPaths');
        var $v_4 = {};

        do {
            var $v_9 = [];
            var $$dict_A = $v_0.$1j_0;

            for (var $$key_B in $$dict_A) {
                var $v_A = {
                    key: $$key_B,
                    value: $$dict_A[$$key_B]
                };

                if (SP.ScriptUtility.isUndefined($v_4[$v_A.key])) {
                    Array.add($v_9, $v_A.value.$4_0);
                }
            }
            if (!$v_9.length) {
                break;
            }
            for (var $v_B = 0; $v_B < $v_9.length; $v_B++) {
                var $v_C = this.$0_0.$1i_0[$v_9[$v_B].toString()];

                $v_C.$39_0($v_2, $v_0);
                $v_4[$v_9[$v_B].toString()] = $v_C;
            }
        } while (true);
        $v_2.writeEndElement();
        $v_2.writeEndElement();
        return $v_1;
    },
    $1h_0: false,
    get_navigateWhenServerRedirect: function SP_ClientRequest$get_navigateWhenServerRedirect() {
        return this.$1h_0;
    },
    set_navigateWhenServerRedirect: function SP_ClientRequest$set_navigateWhenServerRedirect(value) {
        this.$1h_0 = value;
        return value;
    },
    $3D_0: function SP_ClientRequest$$3D_0($p0) {
        var $v_0 = SP.ClientRequest.$2j($p0, 'application/json');

        if ($v_0) {
            this.$x_0($v_0, null, 0, null, null, null, null);
            return true;
        }
        return false;
    },
    $x_0: function SP_ClientRequest$$x_0($p0, $p1, $p2, $p3, $p4, $p5, $p6) {
        var $v_0 = (this.get_$G_0()).getHandler('failed');

        if ($v_0) {
            var $v_1 = new SP.ClientRequestFailedEventArgs(this, $p0, $p1, $p2, $p3, $p4, $p5, $p6);

            if (this.$7_0) {
                $v_1.$31_2(this.$7_0.get_executor());
            }
            $v_0(this, $v_1);
        }
    },
    $3I_0: function SP_ClientRequest$$3I_0($p0) {
        if (this.$3D_0($p0)) {
            this.$7_0 = null;
            return;
        }
        var $v_0 = $p0.get_responseData();
        var $v_1 = SP.ClientRequest._validateJson($v_0);

        if (!$v_1) {
            var $v_7 = SP.ResResources.getString('RequestUnexpectedResponse');

            this.$a_0 = 3;
            this.$x_0($v_7, null, 0, null, null, null, null);
            this.$7_0 = null;
            return;
        }
        $v_0 = SP.ParseJSONUtil.$2m($v_0);
        var $v_2 = eval($v_0);
        var $v_3 = false;

        if (!$v_2 || SP.ScriptUtility.isNullOrUndefined($v_2.length) || !($v_2.length >= 1)) {
            $v_3 = true;
        }
        else {
            var $v_8 = $v_2[0];

            if (SP.ScriptUtility.isNullOrUndefined($v_8) || typeof $v_8 !== 'object' || SP.ScriptUtility.isNullOrEmptyString($v_8.SchemaVersion) || SP.ScriptUtility.isNullOrEmptyString($v_8.LibraryVersion)) {
                $v_3 = true;
            }
        }
        if ($v_3) {
            var $v_9 = SP.ResResources.getString('RequestUnexpectedResponse');

            this.$a_0 = 3;
            this.$x_0($v_9, null, 0, null, null, null, null);
            this.$7_0 = null;
            return;
        }
        var $v_4 = $v_2[0];

        this.$0_0.$3d_0($v_4.SchemaVersion);
        this.$0_0.$3c_0($v_4.LibraryVersion);
        if (!SP.ScriptUtility.isNullOrEmptyString($v_4.TraceCorrelationId)) {
            this.$0_0.$3e_0($v_4.TraceCorrelationId);
        }
        var $v_5 = $v_4.ErrorInfo;

        if (!SP.ScriptUtility.isNullOrUndefined($v_5)) {
            var $v_A = $v_5.ErrorMessage;
            var $v_B = $v_5.ErrorStackTrace;
            var $v_C = $v_5.ErrorCode;
            var $v_D = $v_5.ErrorTypeName;
            var $v_E = $v_5.ErrorValue;
            var $v_F = $v_5.ErrorDetails;
            var $v_G = $v_5.TraceCorrelationId;

            $v_F = SP.DataConvert.fixupType(this.$0_0, $v_F);
            this.$a_0 = 3;
            if ($v_C === -2130575152 && !SP.ScriptUtility.isNullOrEmptyString($v_E) && this.$1h_0) {
                window.navigate($v_E);
            }
            else {
                this.$x_0($v_A, $v_B, $v_C, $v_E, $v_D, $v_F, $v_G);
            }
            this.$7_0 = null;
            return;
        }
        this.$0_0.$1W_0 = true;
        try {
            for (var $v_H = 1; $v_H < $v_2.length; $v_H += 2) {
                var $v_I = $v_2[$v_H];
                var $v_J = this.$1L_0[$v_I.toString()];
                var $v_K = $v_2;
                var $v_L = $v_K[$v_H + 1];

                if (!SP.ScriptUtility.isNullOrUndefined($v_J) && !SP.ScriptUtility.isNullOrUndefined($v_L)) {
                    if (SP.ClientObject.isInstanceOfType($v_J) && typeof $v_L === 'object') {
                        var $v_M = $v_L._ObjectType_;

                        if (!SP.ScriptUtility.isNullOrEmptyString($v_M)) {
                            var $v_N = Type.parse($v_M);

                            if ($v_N && $v_N !== Object.getType($v_J)) {
                                var $v_O = new $v_N(this.$0_0);

                                $v_J.$30_0($v_O);
                                $v_J = $v_O;
                            }
                        }
                    }
                    if (SP.IFromJson.isInstanceOfType($v_J)) {
                        var $v_P = $v_J;

                        if (!$v_P.customFromJson($v_L)) {
                            $v_P.fromJson($v_L);
                        }
                    }
                    if (Array.isInstanceOfType($v_J)) {
                        SP.DataConvert.populateArray(this.$0_0, $v_J, $v_L);
                    }
                }
            }
        }
        finally {
            this.$0_0.$1W_0 = false;
        }
        this.$a_0 = 2;
        var $v_6 = (this.get_$G_0()).getHandler('succeeded');

        if ($v_6) {
            $v_6(this, new SP.ClientRequestSucceededEventArgs(this));
        }
        this.$7_0 = null;
    },
    $2b_0: function SP_ClientRequest$$2b_0($p0, $p1) {
        if (this.$a_0) {
            throw Error.create(SP.ResResources.getString('RequestHasBeenExecuted'));
        }
        this.$1L_0[$p0.toString()] = $p1;
        if (SP.ClientObject.isInstanceOfType($p1)) {
            if ($p1.$2_0.$O_0) {
                this.$1L_0[$p0.toString()] = $p1.$2_0.$O_0;
            }
        }
    }
};
SP.ClientRequestEventArgs = function SP_ClientRequestEventArgs($p0) {
    SP.ClientRequestEventArgs.initializeBase(this);
    this.$7_1 = $p0;
};
SP.ClientRequestEventArgs.prototype = {
    $7_1: null,
    get_request: function SP_ClientRequestEventArgs$get_request() {
        return this.$7_1;
    }
};
SP.ClientRequestFailedEventArgs = function SP_ClientRequestFailedEventArgs(request, message, stackTrace, errorCode, errorValue, errorTypeName, errorDetails, errorTraceCorrelationId) {
    SP.ClientRequestFailedEventArgs.initializeBase(this, [request]);
    this.$2H_2 = message;
    this.$2P_2 = stackTrace;
    this.$1F_2 = errorCode;
    this.$2F_2 = errorValue;
    this.$2E_2 = errorTypeName;
    this.$2D_2 = errorDetails;
    this.$1G_2 = errorTraceCorrelationId;
};
SP.ClientRequestFailedEventArgs.prototype = {
    $2H_2: null,
    $2P_2: null,
    $1F_2: 0,
    $2F_2: null,
    $2E_2: null,
    $2D_2: null,
    $1G_2: null,
    $v_2: null,
    get_message: function SP_ClientRequestFailedEventArgs$get_message() {
        return this.$2H_2;
    },
    get_stackTrace: function SP_ClientRequestFailedEventArgs$get_stackTrace() {
        return this.$2P_2;
    },
    get_errorCode: function SP_ClientRequestFailedEventArgs$get_errorCode() {
        return this.$1F_2;
    },
    get_errorValue: function SP_ClientRequestFailedEventArgs$get_errorValue() {
        return this.$2F_2;
    },
    get_errorTypeName: function SP_ClientRequestFailedEventArgs$get_errorTypeName() {
        return this.$2E_2;
    },
    get_errorDetails: function SP_ClientRequestFailedEventArgs$get_errorDetails() {
        return this.$2D_2;
    },
    get_errorTraceCorrelationId: function SP_ClientRequestFailedEventArgs$get_errorTraceCorrelationId() {
        return this.$1G_2;
    },
    get_webRequestExecutor: function SP_ClientRequestFailedEventArgs$get_webRequestExecutor() {
        return this.$v_2;
    },
    $31_2: function SP_ClientRequestFailedEventArgs$$31_2($p0) {
        this.$v_2 = $p0;
        if (this.$v_2) {
            if (SP.ScriptUtility.isNullOrEmptyString(this.$1G_2) && this.$v_2.get_responseAvailable()) {
                this.$1G_2 = this.$v_2.getResponseHeader('SPRequestGuid');
            }
            this.$1F_2 = SP.ClientRequest.$3P(this.$v_2, this.$1F_2);
        }
    }
};
SP.ClientRequestSucceededEventArgs = function SP_ClientRequestSucceededEventArgs($p0) {
    SP.ClientRequestSucceededEventArgs.initializeBase(this, [$p0]);
};
SP.FormDigestInfo = function SP_FormDigestInfo() {
};
SP.FormDigestInfo.prototype = {
    $f_0: null,
    get_digestValue: function SP_FormDigestInfo$get_digestValue() {
        return this.$f_0;
    },
    set_digestValue: function SP_FormDigestInfo$set_digestValue($p0) {
        this.$f_0 = $p0;
        return $p0;
    },
    $14_0: 0,
    get_expiration: function SP_FormDigestInfo$get_expiration() {
        return this.$14_0;
    },
    set_expiration: function SP_FormDigestInfo$set_expiration($p0) {
        this.$14_0 = $p0;
        return $p0;
    },
    $1Q_0: null,
    get_webServerRelativeUrl: function SP_FormDigestInfo$get_webServerRelativeUrl() {
        return this.$1Q_0;
    },
    set_webServerRelativeUrl: function SP_FormDigestInfo$set_webServerRelativeUrl($p0) {
        this.$1Q_0 = $p0;
        return $p0;
    }
};
SP.ClientRuntimeContext = function SP_ClientRuntimeContext(serverRelativeUrlOrFullUrl) {
    this.$1i_0 = {};
    if (!serverRelativeUrlOrFullUrl) {
        throw Error.argumentNull('serverRelativeUrlOrFullUrl');
    }
    if (!serverRelativeUrlOrFullUrl.startsWith('/') && !(serverRelativeUrlOrFullUrl.toLowerCase()).startsWith('http://') && !(serverRelativeUrlOrFullUrl.toLowerCase()).startsWith('https://')) {
        throw Error.argument('serverRelativeUrlOrFullUrl');
    }
    this.$u_0 = serverRelativeUrlOrFullUrl;
};
SP.ClientRuntimeContext.$2h = function SP_ClientRuntimeContext$$2h($p0) {
    if (!$p0) {
        throw Error.argumentNull('obj');
    }
    return $p0.$0_0;
};
SP.ClientRuntimeContext.$2i = function SP_ClientRuntimeContext$$2i($p0) {
    if (!$p0) {
        throw Error.argumentNull('objectPath');
    }
    return $p0.$0_0;
};
SP.ClientRuntimeContext.prototype = {
    $u_0: null,
    $2N_0: 0,
    $2G_0: false,
    get_isPageUrl: function SP_ClientRuntimeContext$get_isPageUrl() {
        return this.$2G_0;
    },
    set_isPageUrl: function SP_ClientRuntimeContext$set_isPageUrl(value) {
        if (value && !this.$1H_0) {
            throw Error.invalidOperation();
        }
        this.$2G_0 = value;
        return value;
    },
    get_$1w_0: function SP_ClientRuntimeContext$get_$1w_0() {
        var $v_0 = this.$2N_0;

        this.$2N_0++;
        return $v_0;
    },
    get_serviceRelativeUrl: function SP_ClientRuntimeContext$get_serviceRelativeUrl() {
        return '_vti_bin/client.svc/ProcessQuery';
    },
    get_url: function SP_ClientRuntimeContext$get_url() {
        return this.$u_0;
    },
    $1v_0: null,
    get_viaUrl: function SP_ClientRuntimeContext$get_viaUrl() {
        return this.$1v_0;
    },
    set_viaUrl: function SP_ClientRuntimeContext$set_viaUrl(value) {
        this.$1v_0 = value;
        return value;
    },
    getRequestUrl: function SP_ClientRuntimeContext$getRequestUrl(url) {
        var $v_0 = this.$1v_0;

        if (!SP.ScriptUtility.isNullOrEmptyString($v_0)) {
            if ($v_0.indexOf('?') < 0) {
                $v_0 += '?';
            }
            if (!$v_0.endsWith('?') && !$v_0.endsWith('&')) {
                $v_0 += '&';
            }
            $v_0 += 'MS.SP.url=' + SP.ClientHttpUtility.$34(url, false, false);
            url = $v_0;
        }
        return url;
    },
    $1H_0: false,
    get_formDigestHandlingEnabled: function SP_ClientRuntimeContext$get_formDigestHandlingEnabled() {
        return this.$1H_0;
    },
    set_formDigestHandlingEnabled: function SP_ClientRuntimeContext$set_formDigestHandlingEnabled(value) {
        this.$1H_0 = value;
        return value;
    },
    $2g_0: function SP_ClientRuntimeContext$$2g_0() {
        var $v_0 = this.$u_0;

        if (!$v_0.endsWith('/')) {
            $v_0 += '/';
        }
        $v_0 += '_api/contextinfo';
        $v_0 = this.getRequestUrl($v_0);
        return $v_0;
    },
    $3W_0: function SP_ClientRuntimeContext$$3W_0($p0) {
        if (SP.ScriptUtility.isNullOrEmptyString($p0) || $p0.indexOf('GetContextWebInformation') < 0 || $p0.indexOf('FormDigestTimeoutSeconds') < 0) {
            return null;
        }
        var $v_0 = this.parseObjectFromJsonString($p0, true);
        var $v_1 = $v_0.d.GetContextWebInformation.FormDigestValue;
        var $v_2 = $v_0.d.GetContextWebInformation.FormDigestTimeoutSeconds;
        var $v_3 = $v_0.d.GetContextWebInformation.WebFullUrl;
        var $v_4 = new SP.FormDigestInfo();

        $v_4.$f_0 = $v_1;
        $v_4.$14_0 = (new Date()).getTime() + $v_2 * 750;
        $v_4.$1Q_0 = SP.ClientUtility.$3Q($v_3);
        return $v_4;
    },
    $28_0: 'Javascript Library',
    get_applicationName: function SP_ClientRuntimeContext$get_applicationName() {
        return this.$28_0;
    },
    set_applicationName: function SP_ClientRuntimeContext$set_applicationName(value) {
        if (SP.ScriptUtility.isNullOrEmptyString(value) || value.length > 128) {
            throw Error.argumentOutOfRange('value');
        }
        this.$28_0 = value;
        return value;
    },
    $29_0: null,
    get_clientTag: function SP_ClientRuntimeContext$get_clientTag() {
        return this.$29_0;
    },
    set_clientTag: function SP_ClientRuntimeContext$set_clientTag(value) {
        if (!SP.ScriptUtility.isNullOrEmptyString(value) && value.length > 32) {
            throw Error.argumentOutOfRange('value');
        }
        this.$29_0 = value;
        return value;
    },
    $2C_0: false,
    get_disableReturnValueCache: function SP_ClientRuntimeContext$get_disableReturnValueCache() {
        return this.$2C_0;
    },
    set_disableReturnValueCache: function SP_ClientRuntimeContext$set_disableReturnValueCache(value) {
        this.$2C_0 = value;
        return value;
    },
    $w_0: null,
    get_webRequestExecutorFactory: function SP_ClientRuntimeContext$get_webRequestExecutorFactory() {
        return this.$w_0;
    },
    set_webRequestExecutorFactory: function SP_ClientRuntimeContext$set_webRequestExecutorFactory(value) {
        this.$w_0 = value;
        return value;
    },
    $7_0: null,
    get_pendingRequest: function SP_ClientRuntimeContext$get_pendingRequest() {
        if (!this.$7_0) {
            this.$7_0 = new SP.ClientRequest(this);
        }
        return this.$7_0;
    },
    get_hasPendingRequest: function SP_ClientRuntimeContext$get_hasPendingRequest() {
        return !!this.$7_0 && !!this.$7_0.$P_0;
    },
    $1W_0: false,
    add_executingWebRequest: function SP_ClientRuntimeContext$add_executingWebRequest(value) {
        (this.get_$G_0()).addHandler('executingwebrequest', value);
    },
    remove_executingWebRequest: function SP_ClientRuntimeContext$remove_executingWebRequest(value) {
        (this.get_$G_0()).removeHandler('executingwebrequest', value);
    },
    onExecutingWebRequest: function SP_ClientRuntimeContext$onExecutingWebRequest(args) {
        if (args && args.$18_1) {
            if (!SP.ScriptUtility.isNullOrEmptyString(this.$t_0)) {
                (args.$18_1.get_headers())['SPResponseGuid'] = this.$t_0;
            }
            if (!SP.ScriptUtility.isNullOrEmptyString(this.get_clientTag())) {
                (args.$18_1.get_headers())['X-ClientService-ClientTag'] = this.get_clientTag();
            }
        }
        var $v_0 = (this.get_$G_0()).getHandler('executingwebrequest');

        if ($v_0) {
            $v_0(this, args);
        }
    },
    $2c_0: function SP_ClientRuntimeContext$$2c_0($p0) {
        this.onExecutingWebRequest($p0);
    },
    $E_0: null,
    get_$G_0: function SP_ClientRuntimeContext$get_$G_0() {
        if (!this.$E_0) {
            this.$E_0 = new Sys.EventHandlerList();
        }
        return this.$E_0;
    },
    add_requestSucceeded: function SP_ClientRuntimeContext$add_requestSucceeded(value) {
        (this.get_$G_0()).addHandler('succeeded', value);
    },
    remove_requestSucceeded: function SP_ClientRuntimeContext$remove_requestSucceeded(value) {
        (this.get_$G_0()).removeHandler('succeeded', value);
    },
    add_requestFailed: function SP_ClientRuntimeContext$add_requestFailed(value) {
        (this.get_$G_0()).addHandler('failed', value);
    },
    remove_requestFailed: function SP_ClientRuntimeContext$remove_requestFailed(value) {
        (this.get_$G_0()).removeHandler('failed', value);
    },
    add_beginningRequest: function SP_ClientRuntimeContext$add_beginningRequest(value) {
        (this.get_$G_0()).addHandler('beginningrequest', value);
    },
    remove_beginningRequest: function SP_ClientRuntimeContext$remove_beginningRequest(value) {
        (this.get_$G_0()).removeHandler('beginningrequest', value);
    },
    $2L_0: 180000,
    get_requestTimeout: function SP_ClientRuntimeContext$get_requestTimeout() {
        return this.$2L_0;
    },
    set_requestTimeout: function SP_ClientRuntimeContext$set_requestTimeout(value) {
        if (value >= 0) {
            this.$2L_0 = value;
        }
        else {
            throw Error.argumentOutOfRange('value');
        }
        return value;
    },
    $35_0: function SP_ClientRuntimeContext$$35_0() {
        var $v_0 = null;
        var $v_1 = window._spPageContextInfo;

        if ($v_1 && $v_1.webServerRelativeUrl === this.$u_0 && !SP.ScriptUtility.isUndefined(window._spFormDigestRefreshInterval) && !SP.ScriptUtility.isUndefined($v_1.updateFormDigestPageLoaded)) {
            var $v_2 = document.getElementsByName('__REQUESTDIGEST');

            if ($v_2 && $v_2.length > 0 && $v_2[0].tagName === 'INPUT') {
                $v_0 = $v_2[0];
            }
        }
        return $v_0;
    },
    executeQueryAsync: function SP_ClientRuntimeContext$executeQueryAsync(succeededCallback, failedCallback) {
        var $v_0 = this.setPendingRequestToBeExecuted();

        if (!this.$1H_0) {
            this.executeClientRequestAsync($v_0, succeededCallback, failedCallback);
            return;
        }
        if (!SP.ClientRuntimeContext.$Q) {
            SP.ClientRuntimeContext.$Q = {};
        }
        var $v_1 = this.$2g_0();

        if (SP.ScriptUtility.isNullOrUndefined(SP.ClientRuntimeContext.$Q[$v_1])) {
            var $v_3 = this.$35_0();

            if ($v_3) {
                var $v_4 = window._spPageContextInfo;

                if (!SP.ScriptUtility.isNullOrUndefined($v_4)) {
                    SP.ClientRuntimeContext.$Q[$v_1] = new SP.FormDigestInfo();
                    SP.ClientRuntimeContext.$Q[$v_1].$f_0 = $v_3.value;
                    SP.ClientRuntimeContext.$Q[$v_1].$14_0 = $v_4.updateFormDigestPageLoaded.getTime() + _spFormDigestRefreshInterval * 0.75;
                }
            }
        }
        var $v_2 = new Date();

        if (SP.ClientRuntimeContext.$Q[$v_1] && SP.ClientRuntimeContext.$Q[$v_1].$14_0 > $v_2.getTime()) {
            (($v_0.get_webRequest()).get_headers())['X-RequestDigest'] = SP.ClientRuntimeContext.$Q[$v_1].$f_0;
            this.executeClientRequestAsync($v_0, succeededCallback, failedCallback);
        }
        else {
            var $v_5 = new Sys.Net.WebRequest();

            $v_5.set_url($v_1);
            $v_5.set_httpVerb('POST');
            ($v_5.get_headers())['ACCEPT'] = 'application/json;odata=verbose';
            $v_5.set_timeout(this.get_requestTimeout());
            this.$2c_0(new SP.WebRequestEventArgs($v_5));
            if (this.$w_0) {
                var $v_6 = this.$w_0.createWebRequestExecutor();

                $v_5.set_executor($v_6);
            }
            var $$t_F = this;

            $v_5.add_completed(function($p1_0) {
                if ($p1_0.get_aborted() || $p1_0.get_timedOut()) {
                    var $v_7;

                    if (typeof $p1_0._SPError_ === 'string') {
                        $v_7 = $p1_0._SPError_;
                    }
                    else {
                        $v_7 = SP.ResResources.getString('RequestAbortedOrTimedOut');
                    }
                    $$t_F.$x_0($v_0, $p1_0, $v_7, failedCallback);
                }
                else if (!$p1_0.get_responseAvailable() || $p1_0.get_statusCode() !== 200 || SP.ScriptUtility.isNullOrEmptyString($p1_0.getResponseHeader('content-type')) || (($p1_0.getResponseHeader('content-type')).toLowerCase()).indexOf('json') < 0) {
                    var $v_8;

                    if (typeof $p1_0._SPError_ === 'string') {
                        $v_8 = $p1_0._SPError_;
                    }
                    else {
                        $v_8 = SP.ResResources.getString('UnknownResponseData');
                    }
                    $$t_F.$x_0($v_0, $p1_0, $v_8, failedCallback);
                }
                else {
                    var $v_9 = $$t_F.$3W_0($p1_0.get_responseData());

                    if (!$v_9) {
                        $$t_F.$x_0($v_0, $p1_0, SP.ResResources.getString('UnknownResponseData'), failedCallback);
                    }
                    else {
                        var $v_A = $$t_F.$35_0();

                        if ($v_A) {
                            $v_A.value = $v_9.$f_0;
                            var $v_B = window._spPageContextInfo;

                            if (!SP.ScriptUtility.isNullOrUndefined($v_B)) {
                                $v_B.updateFormDigestPageLoaded = new Date();
                            }
                        }
                        SP.ClientRuntimeContext.$Q[$v_1] = $v_9;
                        (($v_0.get_webRequest()).get_headers())['X-RequestDigest'] = $v_9.$f_0;
                        if ($$t_F.get_isPageUrl()) {
                            $$t_F.$u_0 = $v_9.$1Q_0;
                            $v_1 = $$t_F.$2g_0();
                            SP.ClientRuntimeContext.$Q[$v_1] = $v_9;
                            $v_0.$2n_0();
                            if ($$t_F.$7_0) {
                                $$t_F.$7_0.$2n_0();
                            }
                        }
                        $$t_F.executeClientRequestAsync($v_0, succeededCallback, failedCallback);
                    }
                }
            });
            $v_5.invoke();
        }
    },
    $x_0: function SP_ClientRuntimeContext$$x_0($p0, $p1, $p2, $p3) {
        if ($p3) {
            if (SP.ScriptUtility.isNullOrEmptyString($p2)) {
                $p2 = SP.ResResources.getString('UnknownResponseData');
            }
            var $v_0 = new SP.ClientRequestFailedEventArgs($p0, $p2, null, 0, null, null, null, null);

            $v_0.$31_2($p1);
            $p3(this, $v_0);
        }
    },
    setPendingRequestToBeExecuted: function SP_ClientRuntimeContext$setPendingRequestToBeExecuted() {
        var $v_0 = this.get_pendingRequest();

        this.$7_0 = null;
        return $v_0;
    },
    executeClientRequestAsync: function SP_ClientRuntimeContext$executeClientRequestAsync(req, succeededCallback, failedCallback) {
        if (this.$E_0) {
            var $v_0 = this.$E_0.getHandler('beginningrequest');

            if ($v_0) {
                $v_0(this, new SP.ClientRequestEventArgs(req));
            }
        }
        if (!SP.ScriptUtility.isNullOrUndefined(succeededCallback)) {
            req.add_requestSucceeded(succeededCallback);
        }
        if (!SP.ScriptUtility.isNullOrUndefined(failedCallback)) {
            req.add_requestFailed(failedCallback);
        }
        if (this.$E_0) {
            var $v_1 = this.$E_0.getHandler('succeeded');

            if ($v_1) {
                req.add_requestSucceeded($v_1);
            }
            var $v_2 = this.$E_0.getHandler('failed');

            if ($v_2) {
                req.add_requestFailed($v_2);
            }
        }
        req.$3H_0();
    },
    $1s_0: null,
    get_staticObjects: function SP_ClientRuntimeContext$get_staticObjects() {
        if (!this.$1s_0) {
            this.$1s_0 = {};
        }
        return this.$1s_0;
    },
    castTo: function SP_ClientRuntimeContext$castTo(obj, type) {
        if (!obj) {
            throw Error.argumentNull('obj');
        }
        SP.ClientAction.$z(this, obj);
        var $v_0;

        if (!type.inheritsFrom(SP.ClientObject)) {
            throw Error.argument('type');
        }
        if (obj.$0_0 !== this) {
            throw Error.invalidOperation();
        }
        if (type.isInstanceOfType(obj)) {
            $v_0 = new type(this, obj.get_path());
            $v_0.$20_0(obj);
            return $v_0;
        }
        if (obj.$2_0.$O_0 && type.isInstanceOfType(obj.$2_0.$O_0)) {
            $v_0 = new type(this, obj.get_path());
            $v_0.$20_0(obj);
            return $v_0;
        }
        if (!type.inheritsFrom(Object.getType(obj))) {
            throw Error.argument('type');
        }
        if (obj.$2_0.$O_0 && !type.inheritsFrom(Object.getType(obj.$2_0.$O_0))) {
            throw Error.argument('type');
        }
        $v_0 = new type(this, obj.get_path());
        $v_0.$20_0(obj);
        var $v_1 = null;

        if (!obj.$2_0.$O_0) {
            $v_1 = obj;
        }
        else {
            $v_1 = obj.$2_0.$O_0;
        }
        if ($v_1) {
            var $v_2 = [];
            var $v_3 = (this.get_pendingRequest()).$1L_0;
            var $$dict_6 = $v_3;

            for (var $$key_7 in $$dict_6) {
                var $v_4 = {
                    key: $$key_7,
                    value: $$dict_6[$$key_7]
                };

                if ($v_4.value === obj) {
                    Array.add($v_2, $v_4.key);
                }
            }
            for (var $v_5 = 0; $v_5 < $v_2.length; $v_5++) {
                var $v_6 = $v_2[$v_5];

                $v_3[$v_6] = $v_0;
            }
            obj.$2_0.$O_0 = $v_0;
        }
        return $v_0;
    },
    addQuery: function SP_ClientRuntimeContext$addQuery(query) {
        if (!query) {
            throw Error.argumentNull('query');
        }
        (this.get_pendingRequest()).$22_0(query);
    },
    $2a_0: function SP_ClientRuntimeContext$$2a_0($p0) {
        (this.get_pendingRequest()).$2a_0($p0);
    },
    $2Z_0: function SP_ClientRuntimeContext$$2Z_0($p0) {
        this.$1i_0[$p0.$4_0.toString()] = $p0;
    },
    addQueryIdAndResultObject: function SP_ClientRuntimeContext$addQueryIdAndResultObject(id, obj) {
        if (!obj) {
            throw Error.argumentNull('obj');
        }
        (this.get_pendingRequest()).$2b_0(id, obj);
    },
    parseObjectFromJsonString: function SP_ClientRuntimeContext$parseObjectFromJsonString(json, skipTypeFixup) {
        if (SP.ScriptUtility.isNullOrEmptyString(json)) {
            return null;
        }
        var $v_0 = SP.ParseJSONUtil.parseObjectFromJsonString(json);
        var $v_1;

        if (skipTypeFixup) {
            $v_1 = $v_0;
        }
        else {
            if (Array.isInstanceOfType($v_0)) {
                var $v_2 = [];

                SP.DataConvert.populateArray(this, $v_2, $v_0);
                $v_1 = $v_2;
            }
            else {
                $v_1 = SP.DataConvert.fixupType(this, $v_0);
            }
        }
        return $v_1;
    },
    load: function SP_ClientRuntimeContext$load(clientObject) {
        if (!clientObject) {
            throw Error.argumentNull('clientObject');
        }
        SP.ClientAction.$z(this, clientObject);
        var $v_0 = null;

        if (arguments.length === 2 && Array.isInstanceOfType(arguments[1])) {
            $v_0 = arguments[1];
        }
        else {
            var $v_1 = [];

            for (var $v_2 = 1; $v_2 < arguments.length; $v_2++) {
                Array.add($v_1, arguments[$v_2]);
            }
            $v_0 = $v_1;
        }
        SP.DataRetrievalWithExpressionString.load(clientObject, $v_0);
    },
    loadQuery: function SP_ClientRuntimeContext$loadQuery(clientObjectCollection, exp) {
        if (!clientObjectCollection) {
            throw Error.argumentNull('clientObjectCollection');
        }
        SP.ClientAction.$z(this, clientObjectCollection);
        return SP.DataRetrievalWithExpressionString.loadQuery(clientObjectCollection, exp);
    },
    $1q_0: null,
    get_serverSchemaVersion: function SP_ClientRuntimeContext$get_serverSchemaVersion() {
        if (SP.ScriptUtility.isNullOrUndefined(this.$1q_0)) {
            throw Error.create(SP.ResResources.getString('NamedPropertyHasNotBeenInitialized', 'ServerLibraryVersion'));
        }
        return this.$1q_0;
    },
    $3d_0: function SP_ClientRuntimeContext$$3d_0($p0) {
        this.$1q_0 = $p0;
    },
    $1p_0: null,
    get_serverLibraryVersion: function SP_ClientRuntimeContext$get_serverLibraryVersion() {
        if (SP.ScriptUtility.isNullOrUndefined(this.$1p_0)) {
            throw Error.create(SP.ResResources.getString('NamedPropertyHasNotBeenInitialized', 'ServerLibraryVersion'));
        }
        return this.$1p_0;
    },
    $3c_0: function SP_ClientRuntimeContext$$3c_0($p0) {
        this.$1p_0 = $p0;
    },
    $2S_0: null,
    $t_0: null,
    get_traceCorrelationId: function SP_ClientRuntimeContext$get_traceCorrelationId() {
        if (!SP.ScriptUtility.isNullOrEmptyString(this.$t_0)) {
            return this.$t_0;
        }
        return this.$2S_0;
    },
    set_traceCorrelationId: function SP_ClientRuntimeContext$set_traceCorrelationId(value) {
        if (!SP.ScriptUtility.isNullOrEmptyString(value)) {
            if (!SP.Guid.isValid(value)) {
                throw Error.argument('value');
            }
            var $v_0 = new SP.Guid(value);

            this.$t_0 = $v_0.toString('D');
        }
        else {
            this.$t_0 = value;
        }
        return value;
    },
    dispose: function SP_ClientRuntimeContext$dispose() {
    },
    $3e_0: function SP_ClientRuntimeContext$$3e_0($p0) {
        this.$2S_0 = $p0;
    }
};
SP.SimpleDataTable = function SP_SimpleDataTable() {
    this.fromJson = this.$3g_0;
    this.customFromJson = this.$3h_0;
};
SP.SimpleDataTable.prototype = {
    $17_0: null,
    get_rows: function SP_SimpleDataTable$get_rows() {
        if (!this.$17_0) {
            this.$17_0 = [];
        }
        return this.$17_0;
    },
    $3g_0: function SP_SimpleDataTable$$3g_0($p0) {
        this.$17_0 = [];
        SP.DataConvert.populateArray(null, this.$17_0, $p0.Rows);
    },
    $3h_0: function SP_SimpleDataTable$$3h_0($p0) {
        return false;
    }
};
SP.ClientValueObject = function SP_ClientValueObject() {
};
SP.ClientValueObject.prototype = {
    fromJson: function SP_ClientValueObject$fromJson(obj) {
        this.initPropertiesFromJson(obj);
    },
    initPropertiesFromJson: function SP_ClientValueObject$initPropertiesFromJson(obj) {
    },
    customFromJson: function SP_ClientValueObject$customFromJson(obj) {
        return false;
    },
    writeToXml: function SP_ClientValueObject$writeToXml(writer, serializationContext) {
    },
    customWriteToXml: function SP_ClientValueObject$customWriteToXml(writer, serializationContext) {
        return false;
    }
};
SP.ClientValueObjectCollection = function SP_ClientValueObjectCollection() {
    this.getEnumerator = this.$3i_1;
    SP.ClientValueObjectCollection.initializeBase(this);
};
SP.ClientValueObjectCollection.prototype = {
    $8_1: null,
    initPropertiesFromJson: function SP_ClientValueObjectCollection$initPropertiesFromJson(obj) {
        var $v_0;

        $v_0 = obj._Child_Items_;
        if (!$v_0 && this.get_childItemsName()) {
            $v_0 = obj[this.get_childItemsName()];
        }
        if ($v_0) {
            this.$8_1 = [];
            SP.DataConvert.populateArray(null, this.$8_1, $v_0);
        }
    },
    get_childItemsName: function SP_ClientValueObjectCollection$get_childItemsName() {
        return null;
    },
    get_count: function SP_ClientValueObjectCollection$get_count() {
        if (!this.$8_1) {
            return 0;
        }
        else {
            return this.$8_1.length;
        }
    },
    addChild: function SP_ClientValueObjectCollection$addChild(item) {
        if (!this.$8_1) {
            this.$8_1 = [];
        }
        Array.add(this.$8_1, item);
    },
    getItemAtIndex: function SP_ClientValueObjectCollection$getItemAtIndex(index) {
        if (!this.$8_1 || index < 0 || index >= this.$8_1.length) {
            throw Error.argumentOutOfRange('index');
        }
        return this.$8_1[index];
    },
    $3i_1: function SP_ClientValueObjectCollection$$3i_1() {
        var $v_0 = this.$8_1;

        if (!$v_0) {
            $v_0 = [];
        }
        return new SP.ArrayListEnumerator($v_0);
    },
    writeToXml: function SP_ClientValueObjectCollection$writeToXml(writer, serializationContext) {
        if (this.$8_1) {
            writer.writeStartElement('Property');
            writer.writeAttributeString('Name', '_Child_Items_');
            writer.writeAttributeString('Type', 'Array');
            for (var $v_0 = 0; $v_0 < this.$8_1.length; $v_0++) {
                writer.writeStartElement('Object');
                SP.DataConvert.writeValueToXmlElement(writer, this.$8_1[$v_0], serializationContext);
                writer.writeEndElement();
            }
            writer.writeEndElement();
        }
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    }
};
SP.ConditionalScopeBase = function SP_ConditionalScopeBase(context, allowAllActions) {
    this.$$d_$3V_0 = Function.createDelegate(this, this.$3V_0);
    if (!context) {
        throw Error.argumentNull('context');
    }
    this.$0_0 = context;
    this.$27_0 = allowAllActions;
};
SP.ConditionalScopeBase.$9 = function SP_ConditionalScopeBase$$9() {
    return Error.create(SP.ResResources.getString('InvalidUsageOfConditionalScope'));
};
SP.ConditionalScopeBase.prototype = {
    $0_0: null,
    $2Q_0: false,
    $2R_0: null,
    $1t_0: null,
    $27_0: false,
    $b_0: null,
    $Y_0: null,
    $3_0: null,
    startScope: function SP_ConditionalScopeBase$startScope() {
        if (this.$3_0) {
            throw SP.ConditionalScopeBase.$9();
        }
        this.$1t_0 = new SP.SerializationContext(this.$0_0);
        this.$2R_0 = this.$3B_0(this.$1t_0);
        this.$3_0 = new SP.ConditionalExecutionScope(this.$0_0, this, this.$$d_$3V_0);
        this.$0_0.addQueryIdAndResultObject(this.$3_0.$4_0, this);
        return this.$3_0;
    },
    $3V_0: function SP_ConditionalScopeBase$$3V_0() {
        if (this.$b_0 && !this.$b_0.$L_0) {
            throw SP.ConditionalScopeBase.$9();
        }
        if (this.$Y_0 && !this.$Y_0.$L_0) {
            throw SP.ConditionalScopeBase.$9();
        }
        if (this.$b_0 || this.$Y_0) {
            var $v_0 = null;

            if (SP.ClientActionExecutionScopeEnd.isInstanceOfType((this.$0_0.get_pendingRequest()).$P_0)) {
                $v_0 = (this.$0_0.get_pendingRequest()).$P_0;
            }
            if (!$v_0) {
                throw SP.ConditionalScopeBase.$9();
            }
            if ($v_0.$3_1.$B_0 !== 'IfTrueScope' && $v_0.$3_1.$B_0 !== 'IfFalseScope') {
                throw SP.ConditionalScopeBase.$9();
            }
        }
        if (!this.$27_0) {
            var $v_1 = (this.$0_0.get_pendingRequest()).$16_0.length;

            for (var $v_2 = $v_1 - 1; $v_2 >= 0; $v_2--) {
                var $v_3 = (this.$0_0.get_pendingRequest()).$16_0[$v_2];

                if ($v_3 === this.$3_0.$1Y_0) {
                    break;
                }
                var $v_4 = false;

                if (SP.ClientQueryInternal.isInstanceOfType($v_3) || SP.ClientActionExecutionScopeStart.isInstanceOfType($v_3) || SP.ClientActionExecutionScopeEnd.isInstanceOfType($v_3) || SP.ObjectIdentityQuery.isInstanceOfType($v_3)) {
                    $v_4 = true;
                }
                if (!$v_4) {
                    var $v_5;

                    if (SP.ClientActionInstantiateObjectPath.isInstanceOfType($v_3)) {
                        $v_5 = $v_3;
                    }
                    else {
                        $v_5 = null;
                    }
                    if ($v_5) {
                        if (SP.ObjectPathConstructor.isInstanceOfType($v_5.$I_0) || SP.ObjectPathIdentity.isInstanceOfType($v_5.$I_0) || SP.ObjectPathProperty.isInstanceOfType($v_5.$I_0) || SP.ObjectPathStaticProperty.isInstanceOfType($v_5.$I_0)) {
                            $v_4 = true;
                        }
                    }
                }
                if (!$v_4) {
                    throw Error.create(SP.ResResources.getString('InvalidUsageOfConditionalScopeNowAllowedAction'));
                }
            }
        }
    },
    startIfTrue: function SP_ConditionalScopeBase$startIfTrue() {
        if (!this.$3_0 || this.$3_0.$L_0 || this.$b_0) {
            throw SP.ConditionalScopeBase.$9();
        }
        var $v_0 = (this.$0_0.get_pendingRequest()).$P_0;

        if (!$v_0) {
            throw SP.ConditionalScopeBase.$9();
        }
        if (SP.ClientActionExecutionScopeStart.isInstanceOfType($v_0) && $v_0.$3_1.$B_0 === 'ConditionalScope' || SP.ClientActionExecutionScopeEnd.isInstanceOfType($v_0) && $v_0.$3_1.$B_0 === 'IfFalseScope') {
            this.$b_0 = new SP.ExecutionScope(this.$0_0, 'IfTrueScope', null);
            return this.$b_0;
        }
        throw SP.ConditionalScopeBase.$9();
    },
    startIfFalse: function SP_ConditionalScopeBase$startIfFalse() {
        if (!this.$3_0 || this.$3_0.$L_0 || this.$Y_0) {
            throw SP.ConditionalScopeBase.$9();
        }
        var $v_0 = (this.$0_0.get_pendingRequest()).$P_0;

        if (!$v_0) {
            throw SP.ConditionalScopeBase.$9();
        }
        if (SP.ClientActionExecutionScopeStart.isInstanceOfType($v_0) && $v_0.$3_1.$B_0 === 'ConditionalScope' || SP.ClientActionExecutionScopeEnd.isInstanceOfType($v_0) && $v_0.$3_1.$B_0 === 'IfTrueScope') {
            this.$Y_0 = new SP.ExecutionScope(this.$0_0, 'IfFalseScope', null);
            return this.$Y_0;
        }
        throw SP.ConditionalScopeBase.$9();
    },
    get_testResult: function SP_ConditionalScopeBase$get_testResult() {
        return this.$2Q_0;
    },
    fromJson: function SP_ConditionalScopeBase$fromJson(initValue) {
        var $v_0 = initValue;

        if (SP.ScriptUtility.isNullOrUndefined($v_0)) {
            throw Error.create(SP.ResResources.getString('UnknownResponseData'));
        }
        var $v_1;

        $v_1 = $v_0.Test;
        if (SP.ScriptUtility.isUndefined($v_1)) {
            throw Error.create(SP.ResResources.getString('UnknownResponseData'));
        }
        this.$2Q_0 = $v_1;
    },
    customFromJson: function SP_ConditionalScopeBase$customFromJson(initValue) {
        return false;
    }
};
SP.ConditionalExecutionScope = function SP_ConditionalExecutionScope($p0, $p1, $p2) {
    SP.ConditionalExecutionScope.initializeBase(this, [$p0, 'ConditionalScope', $p2]);
    if (!$p1) {
        throw Error.argumentNull('scope');
    }
    this.$3_1 = $p1;
};
SP.ConditionalExecutionScope.prototype = {
    $3_1: null,
    $2Y_0: function SP_ConditionalExecutionScope$$2Y_0($p0, $p1) {
        SP.ExecutionScope.prototype.$2Y_0.call(this, $p0, $p1);
        $p0.writeRaw(this.$3_1.$2R_0.toString());
        $p1.$m_0(this.$3_1.$1t_0);
        if (!this.$3_1.$b_0 && !this.$3_1.$Y_0) {
            $p0.writeStartElement('IfTrueScope');
            $p0.writeAttributeString('Id', ($p1.$0_0.get_$1w_0()).toString());
        }
    },
    $36_0: function SP_ConditionalExecutionScope$$36_0($p0, $p1) {
        if (!this.$3_1.$b_0 && !this.$3_1.$Y_0) {
            $p0.writeEndElement();
        }
        SP.ExecutionScope.prototype.$36_0.call(this, $p0, $p1);
    }
};
SP.DataRetrievalWithExpressionString = function SP_DataRetrievalWithExpressionString() {
};
SP.DataRetrievalWithExpressionString.load = function SP_DataRetrievalWithExpressionString$load($p0, $p1) {
    if (!$p1 || !$p1.length) {
        ($p0.get_$19_0()).selectAllProperties();
        if (SP.ClientObjectCollection.isInstanceOfType($p0)) {
            (($p0.get_$19_0()).get_childItemQuery()).selectAllProperties();
        }
    }
    else {
        for (var $v_0 = 0; $v_0 < $p1.length; $v_0++) {
            var $v_1 = $p1[$v_0];

            SP.DataRetrievalWithExpressionString.$2V($p0.get_$19_0(), $v_1);
        }
    }
};
SP.DataRetrievalWithExpressionString.loadQuery = function SP_DataRetrievalWithExpressionString$loadQuery($p0, $p1) {
    var $v_0 = [];
    var $v_1 = new SP.ClientObjectCollectionResult($p0.$0_0, $v_0);
    var $v_2 = new SP.ClientQueryInternal($p0, null, false, null);

    $p0.$0_0.addQueryIdAndResultObject($v_2.$4_0, $v_1);
    $p0.$0_0.addQuery($v_2);
    if (SP.ScriptUtility.isNullOrEmptyString($p1)) {
        ($v_2.get_childItemQuery()).selectAllProperties();
    }
    else {
        SP.DataRetrievalWithExpressionString.$2V($v_2, $p1);
    }
    return $v_0;
};
SP.DataRetrievalWithExpressionString.$2V = function SP_DataRetrievalWithExpressionString$$2V($p0, $p1) {
    if (SP.ScriptUtility.isNullOrEmptyString($p1)) {
        throw Error.argumentOutOfRange('exp');
    }
    var $v_0 = $p1.length;

    $p1 = $p1.trim();
    if (!$p1.length || $v_0 !== $p1.length) {
        throw Error.argumentOutOfRange('exp');
    }
    var $v_1 = $p0;
    var $v_2 = 0;
    var $v_3;
    var $v_4 = null;
    var $v_5 = $p1.length;
    var $v_6 = false;

    for (var $v_7 = 0; $v_7 < $v_5; $v_7++) {
        var $v_8 = $p1.charAt($v_7);

        if ($v_8 === ',' || $v_8 === ')' || $v_6) {
            throw SP.DataRetrievalWithExpressionString.$T($p1);
        }
        if ($v_8 === '.' || $v_8 === '(') {
            $v_3 = $p1.substr($v_2, $v_7 - $v_2);
            $v_3 = $v_3.trim();
            if ($v_8 === '(') {
                if ($v_3 !== 'Include' && $v_3 !== 'IncludeWithDefaultProperties') {
                    throw SP.DataRetrievalWithExpressionString.$T($p1);
                }
                if ($v_1.$1I_1) {
                    throw SP.DataRetrievalWithExpressionString.$T($p1);
                }
                var $v_9 = SP.DataRetrievalWithExpressionString.$3J($p1, $v_7);

                if ($v_9 < 0) {
                    throw SP.DataRetrievalWithExpressionString.$T($p1);
                }
                var $v_A = $p1.substr($v_7 + 1, $v_9 - $v_7 - 1);
                var $v_B = $v_1.get_childItemQuery();

                if ($v_3 === 'IncludeWithDefaultProperties') {
                    $v_B.selectAllProperties();
                }
                var $v_C = SP.DataRetrievalWithExpressionString.$3f($v_A);

                for (var $v_D = 0; $v_D < $v_C.length; $v_D++) {
                    var $v_E = $v_C[$v_D];

                    SP.DataRetrievalWithExpressionString.$2V($v_B, $v_E);
                }
                $v_7 = $v_9;
                $v_6 = true;
            }
            else if ($v_8 === '.') {
                if ($v_6 || !$v_3.length) {
                    throw SP.DataRetrievalWithExpressionString.$T($p1);
                }
                var $v_F = $v_1.$1C_1($v_3);

                if (!$v_F) {
                    $v_F = new SP.ClientQueryInternal(null, $v_3, true, $v_1);
                    $v_1.selectSubQuery($v_F);
                }
                $v_1 = $v_F;
            }
            $v_2 = $v_7 + 1;
            $v_4 = $v_3;
        }
    }
    if ($v_2 < $p1.length) {
        $v_3 = $p1.substr($v_2);
        $v_3 = $v_3.trim();
        if ($v_3.length > 0) {
            if ($v_6) {
                throw SP.DataRetrievalWithExpressionString.$T($p1);
            }
            $v_1.selectWithAll($v_3);
        }
    }
};
SP.DataRetrievalWithExpressionString.$3J = function SP_DataRetrievalWithExpressionString$$3J($p0, $p1) {
    var $v_0 = $p0.length;
    var $v_1 = 1;
    var $v_2 = -1;

    for (var $v_3 = $p1 + 1; $v_3 < $v_0; $v_3++) {
        var $v_4 = $p0.charAt($v_3);

        if ($v_4 === '(') {
            $v_1++;
        }
        else if ($v_4 === ')') {
            $v_1--;
            if (!$v_1) {
                $v_2 = $v_3;
                break;
            }
        }
    }
    return $v_2;
};
SP.DataRetrievalWithExpressionString.$3f = function SP_DataRetrievalWithExpressionString$$3f($p0) {
    $p0 = $p0.trim();
    var $v_0 = [];
    var $v_1 = 0;
    var $v_2 = 0;
    var $v_3;
    var $v_4 = $p0.length;

    if (!$v_4) {
        return $v_0;
    }
    if ($p0.charAt(0) === ',' || $p0.charAt(0) === '(' || $p0.charAt($v_4 - 1) === ',') {
        throw SP.DataRetrievalWithExpressionString.$T($p0);
    }
    for (var $v_5 = 0; $v_5 < $v_4; $v_5++) {
        var $v_6 = $p0.charAt($v_5);

        if ($v_6 === '(') {
            $v_1++;
        }
        else if ($v_6 === ')') {
            $v_1--;
            if ($v_1 < 0) {
                throw SP.DataRetrievalWithExpressionString.$T($p0);
            }
        }
        else if ($v_6 === ',' && !$v_1) {
            $v_3 = $p0.substr($v_2, $v_5 - $v_2);
            $v_3 = $v_3.trim();
            if (!$v_3.length) {
                throw SP.DataRetrievalWithExpressionString.$T($p0);
            }
            Array.add($v_0, $v_3);
            $v_2 = $v_5 + 1;
        }
    }
    if ($v_1) {
        throw SP.DataRetrievalWithExpressionString.$T($p0);
    }
    if ($v_2 < $p0.length) {
        $v_3 = $p0.substr($v_2);
        $v_3 = $v_3.trim();
        if ($v_3.length > 0) {
            Array.add($v_0, $v_3);
        }
    }
    return $v_0;
};
SP.DataRetrievalWithExpressionString.$T = function SP_DataRetrievalWithExpressionString$$T($p0) {
    return Error.argument(null, SP.ResResources.getString('NotSupportedQueryExpressionWithExpressionDetail', $p0));
};
SP.ClientActionExecutionScopeStart = function SP_ClientActionExecutionScopeStart($p0, $p1) {
    SP.ClientActionExecutionScopeStart.initializeBase(this, [$p0.$0_0, null, $p1]);
    this.$3_1 = $p0;
};
SP.ClientActionExecutionScopeStart.prototype = {
    $3_1: null,
    get_scope: function SP_ClientActionExecutionScopeStart$get_scope() {
        return this.$3_1;
    },
    $39_0: function SP_ClientActionExecutionScopeStart$$39_0($p0, $p1) {
    }
};
SP.ClientActionExecutionScopeEnd = function SP_ClientActionExecutionScopeEnd($p0, $p1) {
    SP.ClientActionExecutionScopeEnd.initializeBase(this, [$p0.$0_0, null, $p1]);
    this.$3_1 = $p0;
};
SP.ClientActionExecutionScopeEnd.prototype = {
    $3_1: null,
    get_scope: function SP_ClientActionExecutionScopeEnd$get_scope() {
        return this.$3_1;
    },
    $39_0: function SP_ClientActionExecutionScopeEnd$$39_0($p0, $p1) {
    }
};
SP.ExecutionScope = function SP_ExecutionScope($p0, $p1, $p2) {
    if (!$p0) {
        throw Error.argumentNull('context');
    }
    this.$0_0 = $p0;
    this.$B_0 = $p1;
    this.$4_0 = this.$0_0.get_$1w_0();
    ((this.$0_0.get_pendingRequest()).get_$25_0()).push(this);
    this.$1Y_0 = new SP.ClientActionExecutionScopeStart(this, this.$B_0);
    (this.$0_0.get_pendingRequest()).$22_0(this.$1Y_0);
    this.$1b_0 = $p2;
};
SP.ExecutionScope.prototype = {
    $0_0: null,
    $L_0: false,
    $B_0: null,
    $4_0: 0,
    $1b_0: null,
    $1Y_0: null,
    get_id: function SP_ExecutionScope$get_id() {
        return this.$4_0;
    },
    get_name: function SP_ExecutionScope$get_name() {
        return this.$B_0;
    },
    dispose: function SP_ExecutionScope$dispose() {
        if (this.$L_0) {
            throw SP.ExceptionHandlingScope.$9();
        }
        if (this.$1b_0) {
            this.$1b_0();
        }
        if (((this.$0_0.get_pendingRequest()).get_$25_0()).length > 0 && ((this.$0_0.get_pendingRequest()).get_$25_0()).pop() === this) {
            (this.$0_0.get_pendingRequest()).$22_0(new SP.ClientActionExecutionScopeEnd(this, this.$B_0));
        }
        else {
            throw SP.ExceptionHandlingScope.$9();
        }
        this.$L_0 = true;
    },
    $2Y_0: function SP_ExecutionScope$$2Y_0($p0, $p1) {
        $p0.writeStartElement(this.$B_0);
        $p0.writeAttributeString('Id', this.$4_0.toString());
    },
    $36_0: function SP_ExecutionScope$$36_0($p0, $p1) {
        $p0.writeEndElement();
    }
};
SP.ExceptionHandlingScope = function SP_ExceptionHandlingScope(context) {
    this.$$d_$3G_0 = Function.createDelegate(this, this.$3G_0);
    this.fromJson = this.$3g_0;
    this.customFromJson = this.$3h_0;
    if (!context) {
        throw Error.argumentNull('context');
    }
    this.$0_0 = context;
    this.$1m_0 = -1;
};
SP.ExceptionHandlingScope.$9 = function SP_ExceptionHandlingScope$$9() {
    return Error.create(SP.ResResources.getString('InvalidUsageOfExceptionHandlingScope'));
};
SP.ExceptionHandlingScope.prototype = {
    $0_0: null,
    $2J_0: false,
    $1e_0: false,
    $h_0: null,
    $1r_0: null,
    $1m_0: 0,
    $1o_0: null,
    $1n_0: null,
    $1M_0: null,
    $R_0: null,
    get_$3S_0: function SP_ExceptionHandlingScope$get_$3S_0() {
        if (!this.$W_0) {
            return true;
        }
        return false;
    },
    startScope: function SP_ExceptionHandlingScope$startScope() {
        if (this.$R_0) {
            throw SP.ExceptionHandlingScope.$9();
        }
        this.$R_0 = new SP.ExceptionHandlingExecutionScope(this.$0_0, this, this.$$d_$3G_0);
        (this.$0_0.get_pendingRequest()).$2b_0(this.$R_0.$4_0, this);
        return this.$R_0;
    },
    $3G_0: function SP_ExceptionHandlingScope$$3G_0() {
        if (this.$W_0) {
            if (!this.$o_0 && !this.$15_0) {
                throw SP.ExceptionHandlingScope.$9();
            }
            var $v_0 = (this.$0_0.get_pendingRequest()).$P_0;

            if (!$v_0 || !SP.ClientActionExecutionScopeEnd.isInstanceOfType($v_0)) {
                throw SP.ExceptionHandlingScope.$9();
            }
            var $v_1 = $v_0;

            if ($v_1.$3_1.$B_0 !== 'CatchScope' && $v_1.$3_1.$B_0 !== 'FinallyScope') {
                throw SP.ExceptionHandlingScope.$9();
            }
        }
    },
    $W_0: null,
    startTry: function SP_ExceptionHandlingScope$startTry() {
        if (!this.$R_0 || this.$R_0.$L_0 || this.$W_0) {
            throw SP.ExceptionHandlingScope.$9();
        }
        var $v_0 = (this.$0_0.get_pendingRequest()).$P_0;

        if (!$v_0 || !SP.ClientActionExecutionScopeStart.isInstanceOfType($v_0)) {
            throw SP.ExceptionHandlingScope.$9();
        }
        if ($v_0.$3_1.$B_0 !== 'ExceptionHandlingScope') {
            throw SP.ExceptionHandlingScope.$9();
        }
        this.$W_0 = new SP.ExecutionScope(this.$0_0, 'TryScope', null);
        return this.$W_0;
    },
    $o_0: null,
    startCatch: function SP_ExceptionHandlingScope$startCatch() {
        if (!this.$R_0 || this.$R_0.$L_0 || !this.$W_0 || !this.$W_0.$L_0 || this.$o_0 || this.$15_0) {
            throw SP.ExceptionHandlingScope.$9();
        }
        var $v_0 = (this.$0_0.get_pendingRequest()).$P_0;

        if (!$v_0 || !SP.ClientActionExecutionScopeEnd.isInstanceOfType($v_0)) {
            throw SP.ExceptionHandlingScope.$9();
        }
        if ($v_0.$3_1.$B_0 !== 'TryScope') {
            throw SP.ExceptionHandlingScope.$9();
        }
        this.$o_0 = new SP.ExecutionScope(this.$0_0, 'CatchScope', null);
        return this.$o_0;
    },
    $15_0: null,
    startFinally: function SP_ExceptionHandlingScope$startFinally() {
        if (!this.$R_0 || this.$R_0.$L_0 || !this.$W_0 || !this.$W_0.$L_0 || this.$o_0 && !this.$o_0.$L_0 || this.$15_0) {
            throw SP.ExceptionHandlingScope.$9();
        }
        var $v_0 = (this.$0_0.get_pendingRequest()).$P_0;

        if (!$v_0 || !SP.ClientActionExecutionScopeEnd.isInstanceOfType($v_0)) {
            throw SP.ExceptionHandlingScope.$9();
        }
        if ($v_0.$3_1.$B_0 !== 'TryScope' && $v_0.$3_1.$B_0 !== 'CatchScope') {
            throw SP.ExceptionHandlingScope.$9();
        }
        this.$15_0 = new SP.ExecutionScope(this.$0_0, 'FinallyScope', null);
        return this.$15_0;
    },
    get_processed: function SP_ExceptionHandlingScope$get_processed() {
        return this.$2J_0;
    },
    get_hasException: function SP_ExceptionHandlingScope$get_hasException() {
        return this.$1e_0;
    },
    get_errorMessage: function SP_ExceptionHandlingScope$get_errorMessage() {
        return this.$h_0;
    },
    get_serverStackTrace: function SP_ExceptionHandlingScope$get_serverStackTrace() {
        return this.$1r_0;
    },
    get_serverErrorCode: function SP_ExceptionHandlingScope$get_serverErrorCode() {
        return this.$1m_0;
    },
    get_serverErrorValue: function SP_ExceptionHandlingScope$get_serverErrorValue() {
        return this.$1o_0;
    },
    get_serverErrorTypeName: function SP_ExceptionHandlingScope$get_serverErrorTypeName() {
        return this.$1n_0;
    },
    get_serverErrorDetails: function SP_ExceptionHandlingScope$get_serverErrorDetails() {
        return this.$1M_0;
    },
    $3g_0: function SP_ExceptionHandlingScope$$3g_0($p0) {
        var $v_0 = $p0;

        if (SP.ScriptUtility.isNullOrUndefined($v_0)) {
            throw Error.create(SP.ResResources.getString('UnknownResponseData'));
        }
        var $v_1;

        $v_1 = $v_0.HasException;
        if (SP.ScriptUtility.isUndefined($v_1)) {
            throw Error.create(SP.ResResources.getString('UnknownResponseData'));
        }
        this.$1e_0 = $v_1;
        if (this.$1e_0) {
            var $v_2 = $v_0.ErrorInfo;

            if (SP.ScriptUtility.isNullOrUndefined($v_2)) {
                throw Error.create(SP.ResResources.getString('UnknownResponseData'));
            }
            $v_1 = $v_2.ErrorMessage;
            if (!SP.ScriptUtility.isUndefined($v_1)) {
                this.$h_0 = $v_1;
            }
            else {
                this.$h_0 = '';
            }
            $v_1 = $v_2.ErrorStackTrace;
            if (!SP.ScriptUtility.isUndefined($v_1)) {
                this.$1r_0 = $v_1;
            }
            else {
                this.$1r_0 = '';
            }
            $v_1 = $v_2.ErrorCode;
            if (!SP.ScriptUtility.isUndefined($v_1)) {
                this.$1m_0 = $v_1;
            }
            $v_1 = $v_2.ErrorValue;
            if (!SP.ScriptUtility.isUndefined($v_1)) {
                this.$1o_0 = $v_1;
            }
            else {
                this.$1o_0 = '';
            }
            $v_1 = $v_2.ErrorTypeName;
            if (!SP.ScriptUtility.isUndefined($v_1)) {
                this.$1n_0 = $v_1;
            }
            else {
                this.$1n_0 = '';
            }
            $v_1 = $v_2.ErrorDetails;
            if (!SP.ScriptUtility.isUndefined($v_1)) {
                this.$1M_0 = $v_1;
                this.$1M_0 = SP.DataConvert.fixupType(this.$0_0, this.$1M_0);
            }
        }
        this.$2J_0 = true;
    },
    $3h_0: function SP_ExceptionHandlingScope$$3h_0($p0) {
        return false;
    }
};
SP.ExceptionHandlingExecutionScope = function SP_ExceptionHandlingExecutionScope($p0, $p1, $p2) {
    SP.ExceptionHandlingExecutionScope.initializeBase(this, [$p0, 'ExceptionHandlingScope', $p2]);
    this.$3_1 = $p1;
};
SP.ExceptionHandlingExecutionScope.prototype = {
    $3_1: null,
    $2Y_0: function SP_ExceptionHandlingExecutionScope$$2Y_0($p0, $p1) {
        if (this.$3_1.get_$3S_0()) {
            $p0.writeStartElement('ExceptionHandlingScopeSimple');
            $p0.writeAttributeString('Id', this.$4_0.toString());
        }
        else {
            SP.ExecutionScope.prototype.$2Y_0.call(this, $p0, $p1);
        }
    }
};
SP.ObjectIdentityQuery = function SP_ObjectIdentityQuery(objectPath) {
    SP.ObjectIdentityQuery.initializeBase(this, [SP.ClientRuntimeContext.$2i(objectPath), objectPath, null]);
};
SP.ObjectIdentityQuery.prototype = {
    $39_0: function SP_ObjectIdentityQuery$$39_0($p0, $p1) {
        $p0.writeStartElement('ObjectIdentityQuery');
        $p0.writeAttributeString('Id', this.$4_0.toString());
        $p0.writeAttributeString('ObjectPathId', this.$I_0.$4_0.toString());
        $p1.addObjectPath(this.$I_0);
        $p0.writeEndElement();
    }
};
SP.ObjectPath = function SP_ObjectPath($p0, $p1, $p2) {
    if (!$p0) {
        throw Error.argumentNull('context');
    }
    this.$0_0 = $p0;
    if (!$p1) {
        this.$1K_0 = -1;
    }
    else {
        this.$1K_0 = $p1.$4_0;
    }
    this.$4_0 = $p0.get_$1w_0();
    if ($p2) {
        $p0.$2Z_0(this);
        if (!$p0.$1W_0) {
            var $v_0 = new SP.ClientActionInstantiateObjectPath(this);

            $p0.addQuery($v_0);
            var $v_1 = new SP.ClientActionInstantiateObjectPathResult(this);

            $p0.addQueryIdAndResultObject($v_0.$4_0, $v_1);
        }
    }
    this.$1N_0 = false;
    this.$j_0 = true;
};
SP.ObjectPath.prototype = {
    $1K_0: 0,
    $4_0: 0,
    $0_0: null,
    $1N_0: false,
    get_$1y_0: function SP_ObjectPath$get_$1y_0() {
        if (this.$1K_0 === -1) {
            return null;
        }
        return this.$0_0.$1i_0[this.$1K_0.toString()];
    },
    $j_0: false,
    $3R_0: function SP_ObjectPath$$3R_0() {
    },
    get_$2l_0: function SP_ObjectPath$get_$2l_0() {
        return null;
    },
    setPendingReplace: function SP_ObjectPath$setPendingReplace() {
        (this.$0_0.get_pendingRequest()).$3A_0(this);
    }
};
SP.ObjectPathProperty = function SP_ObjectPathProperty(context, parent, propertyName) {
    SP.ObjectPathProperty.initializeBase(this, [context, parent, true]);
    this.$S_1 = propertyName;
};
SP.ObjectPathProperty.prototype = {
    $S_1: null,
    $39_0: function SP_ObjectPathProperty$$39_0($p0, $p1) {
        $p0.writeStartElement('Property');
        $p0.writeAttributeString('Id', this.$4_0.toString());
        $p0.writeAttributeString('ParentId', (this.get_$1y_0()).$4_0.toString());
        $p1.addObjectPath(this.get_$1y_0());
        $p0.writeAttributeString('Name', this.$S_1);
        $p0.writeEndElement();
    },
    get_$2l_0: function SP_ObjectPathProperty$get_$2l_0() {
        return SP.ResResources.getString('ObjectNameProperty', this.$S_1);
    }
};
SP.ObjectPathStaticProperty = function SP_ObjectPathStaticProperty(context, typeId, propertyName) {
    SP.ObjectPathStaticProperty.initializeBase(this, [context, null, true]);
    this.$J_1 = typeId;
    this.$S_1 = propertyName;
};
SP.ObjectPathStaticProperty.prototype = {
    $S_1: null,
    $J_1: null,
    $39_0: function SP_ObjectPathStaticProperty$$39_0($p0, $p1) {
        $p0.writeStartElement('StaticProperty');
        $p0.writeAttributeString('Id', this.$4_0.toString());
        $p0.writeAttributeString('TypeId', this.$J_1);
        $p0.writeAttributeString('Name', this.$S_1);
        $p0.writeEndElement();
    },
    get_$2l_0: function SP_ObjectPathStaticProperty$get_$2l_0() {
        return SP.ResResources.getString('ObjectNameProperty', this.$S_1);
    }
};
SP.ObjectPathMethod = function SP_ObjectPathMethod(context, parent, methodName, parameters) {
    SP.ObjectPathMethod.initializeBase(this, [context, parent, true]);
    SP.ClientAction.$1A(context, parameters);
    this.$k_1 = methodName;
    this.$5_1 = parameters;
    this.$6_1 = new SP.SerializationContext(context);
    var $v_0;

    this.$1_1 = new Sys.StringBuilder();
    $v_0 = SP.XmlWriter.create(this.$1_1);
    this.$y_1($v_0, this.$6_1);
    $v_0.close();
    this.$5_1 = null;
};
SP.ObjectPathMethod.prototype = {
    $k_1: null,
    $6_1: null,
    $1_1: null,
    $5_1: null,
    $39_0: function SP_ObjectPathMethod$$39_0($p0, $p1) {
        $p0.writeRaw(this.$1_1.toString());
        $p1.$m_0(this.$6_1);
    },
    $y_1: function SP_ObjectPathMethod$$y_1($p0, $p1) {
        $p0.writeStartElement('Method');
        $p0.writeAttributeString('Id', this.$4_0.toString());
        $p0.writeAttributeString('ParentId', (this.get_$1y_0()).$4_0.toString());
        $p1.addObjectPath(this.get_$1y_0());
        $p0.writeAttributeString('Name', this.$k_1);
        if (this.$5_1 && this.$5_1.length > 0) {
            $p0.writeStartElement('Parameters');
            for (var $v_0 = 0; $v_0 < this.$5_1.length; $v_0++) {
                var $v_1 = this.$5_1[$v_0];

                $p0.writeStartElement('Parameter');
                SP.DataConvert.writeValueToXmlElement($p0, $v_1, $p1);
                $p0.writeEndElement();
            }
            $p0.writeEndElement();
        }
        $p0.writeEndElement();
    },
    $3R_0: function SP_ObjectPathMethod$$3R_0() {
        this.$5_1 = null;
        this.$1_1 = null;
        this.$6_1 = null;
        this.$j_0 = false;
    },
    get_$2l_0: function SP_ObjectPathMethod$get_$2l_0() {
        return SP.ResResources.getString('ObjectNameMethod', this.$k_1);
    }
};
SP.ObjectPathStaticMethod = function SP_ObjectPathStaticMethod(context, typeId, methodName, parameters) {
    SP.ObjectPathStaticMethod.initializeBase(this, [context, null, true]);
    SP.ClientAction.$1A(context, parameters);
    this.$J_1 = typeId;
    this.$k_1 = methodName;
    this.$5_1 = parameters;
    this.$6_1 = new SP.SerializationContext(context);
    var $v_0;

    this.$1_1 = new Sys.StringBuilder();
    $v_0 = SP.XmlWriter.create(this.$1_1);
    this.$y_1($v_0, this.$6_1);
    $v_0.close();
    this.$5_1 = null;
};
SP.ObjectPathStaticMethod.prototype = {
    $J_1: null,
    $k_1: null,
    $5_1: null,
    $6_1: null,
    $1_1: null,
    $39_0: function SP_ObjectPathStaticMethod$$39_0($p0, $p1) {
        $p0.writeRaw(this.$1_1.toString());
        $p1.$m_0(this.$6_1);
    },
    $y_1: function SP_ObjectPathStaticMethod$$y_1($p0, $p1) {
        $p0.writeStartElement('StaticMethod');
        $p0.writeAttributeString('Id', this.$4_0.toString());
        $p0.writeAttributeString('Name', this.$k_1);
        $p0.writeAttributeString('TypeId', this.$J_1);
        if (this.$5_1 && this.$5_1.length > 0) {
            $p0.writeStartElement('Parameters');
            for (var $v_0 = 0; $v_0 < this.$5_1.length; $v_0++) {
                var $v_1 = this.$5_1[$v_0];

                $p0.writeStartElement('Parameter');
                SP.DataConvert.writeValueToXmlElement($p0, $v_1, $p1);
                $p0.writeEndElement();
            }
            $p0.writeEndElement();
        }
        $p0.writeEndElement();
    },
    $3R_0: function SP_ObjectPathStaticMethod$$3R_0() {
        this.$5_1 = null;
        this.$1_1 = null;
        this.$6_1 = null;
        this.$j_0 = false;
    },
    get_$2l_0: function SP_ObjectPathStaticMethod$get_$2l_0() {
        return SP.ResResources.getString('ObjectNameMethod', this.$k_1);
    }
};
SP.ObjectPathConstructor = function SP_ObjectPathConstructor(context, typeId, parameters) {
    SP.ObjectPathConstructor.initializeBase(this, [context, null, true]);
    SP.ClientAction.$1A(context, parameters);
    this.$J_1 = typeId;
    this.$5_1 = parameters;
    this.$6_1 = new SP.SerializationContext(context);
    var $v_0;

    this.$1_1 = new Sys.StringBuilder();
    $v_0 = SP.XmlWriter.create(this.$1_1);
    this.$y_1($v_0, this.$6_1);
    $v_0.close();
    this.$5_1 = null;
};
SP.ObjectPathConstructor.prototype = {
    $J_1: null,
    $5_1: null,
    $6_1: null,
    $1_1: null,
    $39_0: function SP_ObjectPathConstructor$$39_0($p0, $p1) {
        $p0.writeRaw(this.$1_1.toString());
        $p1.$m_0(this.$6_1);
    },
    $y_1: function SP_ObjectPathConstructor$$y_1($p0, $p1) {
        $p0.writeStartElement('Constructor');
        $p0.writeAttributeString('Id', this.$4_0.toString());
        $p0.writeAttributeString('TypeId', this.$J_1);
        if (this.$5_1 && this.$5_1.length > 0) {
            $p0.writeStartElement('Parameters');
            for (var $v_0 = 0; $v_0 < this.$5_1.length; $v_0++) {
                var $v_1 = this.$5_1[$v_0];

                $p0.writeStartElement('Parameter');
                SP.DataConvert.writeValueToXmlElement($p0, $v_1, $p1);
                $p0.writeEndElement();
            }
            $p0.writeEndElement();
        }
        $p0.writeEndElement();
    },
    $3R_0: function SP_ObjectPathConstructor$$3R_0() {
        this.$5_1 = null;
        this.$1_1 = null;
        this.$6_1 = null;
        this.$j_0 = false;
    },
    get_$2l_0: function SP_ObjectPathConstructor$get_$2l_0() {
        return SP.ResResources.getString('ObjectNameType', this.$J_1);
    }
};
SP.ObjectPathIdentity = function SP_ObjectPathIdentity($p0, $p1) {
    SP.ObjectPathIdentity.initializeBase(this, [$p0, null, false]);
    this.$r_1 = $p1;
};
SP.ObjectPathIdentity.prototype = {
    $r_1: null,
    get_identity: function SP_ObjectPathIdentity$get_identity() {
        return this.$r_1;
    },
    $39_0: function SP_ObjectPathIdentity$$39_0($p0, $p1) {
        $p0.writeStartElement('Identity');
        $p0.writeAttributeString('Id', this.$4_0.toString());
        $p0.writeAttributeString('Name', this.$r_1);
        $p0.writeEndElement();
    },
    get_$2l_0: function SP_ObjectPathIdentity$get_$2l_0() {
        return SP.ResResources.getString('ObjectNameIdentity', this.$r_1);
    }
};
SP.SerializationContext = function SP_SerializationContext($p0) {
    this.$1j_0 = {};
    if (!$p0) {
        throw Error.argumentNull('context');
    }
    this.$0_0 = $p0;
};
SP.SerializationContext.prototype = {
    $0_0: null,
    addClientObject: function SP_SerializationContext$addClientObject(obj) {
        if (obj.get_path()) {
            this.addObjectPath(obj.get_path());
        }
    },
    addObjectPath: function SP_SerializationContext$addObjectPath(path) {
        this.$1j_0[path.$4_0.toString()] = path;
    },
    $m_0: function SP_SerializationContext$$m_0($p0) {
        var $$dict_1 = $p0.$1j_0;

        for (var $$key_2 in $$dict_1) {
            var $v_0 = {
                key: $$key_2,
                value: $$dict_1[$$key_2]
            };

            this.addObjectPath($v_0.value);
        }
    }
};
SP.ResourceStrings = function SP_ResourceStrings() {
};
SP.RuntimeRes = function SP_RuntimeRes() {
};
SP.ParseJSONUtil = function SP_ParseJSONUtil() {
};
SP.ParseJSONUtil.$2m = function SP_ParseJSONUtil$$2m($p0) {
    $p0 = $p0.replace(SP.ParseJSONUtil.$2s, '$1new SP.Guid(\"$2\")');
    $p0 = $p0.replace(SP.ParseJSONUtil.$2r, '$1SP.DataConvert.createUtcDateTime($2)');
    $p0 = $p0.replace(SP.ParseJSONUtil.$2p, '$1SP.DataConvert.createLocalDateTime($2)');
    $p0 = $p0.replace(SP.ParseJSONUtil.$2q, '$1SP.DataConvert.createUnspecifiedDateTime($2)');
    $p0 = $p0.replace(SP.ParseJSONUtil.$2o, '$1new SP.Base64EncodedByteArray(\"$2\")');
    return $p0;
};
SP.ParseJSONUtil.parseObjectFromJsonString = function SP_ParseJSONUtil$parseObjectFromJsonString(json) {
    if (SP.ScriptUtility.isNullOrEmptyString(json)) {
        return null;
    }
    var $v_0 = SP.ParseJSONUtil.validateJson(json);

    if (!$v_0) {
        throw Error.argument('json');
    }
    json = SP.ParseJSONUtil.$2m(json);
    var $v_1 = eval('(' + json + ')');

    return $v_1;
};
SP.ParseJSONUtil.validateJson = function SP_ParseJSONUtil$validateJson(text) {
    return SP.ParseJSONUtil.$2u.test(((text.replace(SP.ParseJSONUtil.$2v, '@')).replace(SP.ParseJSONUtil.$2w, ']')).replace(SP.ParseJSONUtil.$2t, ''));
};
SP.DataConvertUtil = function SP_DataConvertUtil() {
};
SP.DataConvertUtil.specifyDateTimeKind = function SP_DataConvertUtil$specifyDateTimeKind($p0, $p1) {
    $p0.kind = $p1;
};
SP.DataConvertUtil.getDateTimeKind = function SP_DataConvertUtil$getDateTimeKind($p0) {
    var $v_0 = $p0.kind;

    if (SP.ScriptUtility.isNullOrUndefined($v_0)) {
        return 2;
    }
    return $v_0;
};
SP.DataConvertUtil.createUnspecifiedDateTime = function SP_DataConvertUtil$createUnspecifiedDateTime($p0, $p1, $p2, $p3, $p4, $p5, $p6) {
    var $v_0 = new Date($p0, $p1, $p2, $p3, $p4, $p5, $p6);

    SP.DataConvertUtil.specifyDateTimeKind($v_0, 0);
    return $v_0;
};
SP.DataConvertUtil.createUtcDateTime = function SP_DataConvertUtil$createUtcDateTime($p0) {
    var $v_0 = new Date($p0);

    SP.DataConvertUtil.specifyDateTimeKind($v_0, 1);
    return $v_0;
};
SP.DataConvertUtil.createLocalDateTime = function SP_DataConvertUtil$createLocalDateTime($p0) {
    var $v_0 = new Date($p0);

    SP.DataConvertUtil.specifyDateTimeKind($v_0, 2);
    return $v_0;
};
SP.OfficeVersion = function SP_OfficeVersion() {
};
if (SP.ArrayListEnumerator.registerClass) SP.ArrayListEnumerator.registerClass('SP.ArrayListEnumerator', null, IEnumerator);
if (SP.BaseCollection.registerClass) SP.BaseCollection.registerClass('SP.BaseCollection', null, IEnumerable);
if (SP.BaseCollectionEnumerator.registerClass) SP.BaseCollectionEnumerator.registerClass('SP.BaseCollectionEnumerator', null, IEnumerator);
if (SP.Base64EncodedByteArray.registerClass) SP.Base64EncodedByteArray.registerClass('SP.Base64EncodedByteArray', null, SP.IFromJson);
if (SP.ConditionalScopeBase.registerClass) SP.ConditionalScopeBase.registerClass('SP.ConditionalScopeBase', null, SP.IFromJson);
if (SP.ClientObjectPropertyConditionalScope.registerClass) SP.ClientObjectPropertyConditionalScope.registerClass('SP.ClientObjectPropertyConditionalScope', SP.ConditionalScopeBase);
if (SP.ClientDictionaryResultHandler.registerClass) SP.ClientDictionaryResultHandler.registerClass('SP.ClientDictionaryResultHandler', null, SP.IFromJson);
if (SP.ClientActionInstantiateObjectPathResult.registerClass) SP.ClientActionInstantiateObjectPathResult.registerClass('SP.ClientActionInstantiateObjectPathResult', null, SP.IFromJson);
if (SP.ClientObjectCollectionResult.registerClass) SP.ClientObjectCollectionResult.registerClass('SP.ClientObjectCollectionResult', null, SP.IFromJson);
if (SP.ClientUtility.registerClass) SP.ClientUtility.registerClass('SP.ClientUtility');
if (SP.ClientXElement.registerClass) SP.ClientXElement.registerClass('SP.ClientXElement', null, SP.IFromJson);
if (SP.ClientXDocument.registerClass) SP.ClientXDocument.registerClass('SP.ClientXDocument', null, SP.IFromJson);
if (SP.DataConvert.registerClass) SP.DataConvert.registerClass('SP.DataConvert');
if (SP.PageRequestFailedEventArgs.registerClass) SP.PageRequestFailedEventArgs.registerClass('SP.PageRequestFailedEventArgs', Sys.EventArgs);
if (SP.PageRequestSucceededEventArgs.registerClass) SP.PageRequestSucceededEventArgs.registerClass('SP.PageRequestSucceededEventArgs', Sys.EventArgs);
if (SP.PageRequest.registerClass) SP.PageRequest.registerClass('SP.PageRequest');
if (SP.ResResources.registerClass) SP.ResResources.registerClass('SP.ResResources');
if (SP.XmlWriter.registerClass) SP.XmlWriter.registerClass('SP.XmlWriter');
if (SP.ClientHttpUtility.registerClass) SP.ClientHttpUtility.registerClass('SP.ClientHttpUtility');
if (SP.ClientConstants.registerClass) SP.ClientConstants.registerClass('SP.ClientConstants');
if (SP.ClientSchemaVersions.registerClass) SP.ClientSchemaVersions.registerClass('SP.ClientSchemaVersions');
if (SP.ClientErrorCodes.registerClass) SP.ClientErrorCodes.registerClass('SP.ClientErrorCodes');
if (SP.ClientAction.registerClass) SP.ClientAction.registerClass('SP.ClientAction');
if (SP.ClientActionSetProperty.registerClass) SP.ClientActionSetProperty.registerClass('SP.ClientActionSetProperty', SP.ClientAction);
if (SP.ClientActionSetStaticProperty.registerClass) SP.ClientActionSetStaticProperty.registerClass('SP.ClientActionSetStaticProperty', SP.ClientAction);
if (SP.ClientActionInvokeMethod.registerClass) SP.ClientActionInvokeMethod.registerClass('SP.ClientActionInvokeMethod', SP.ClientAction);
if (SP.ClientActionInvokeStaticMethod.registerClass) SP.ClientActionInvokeStaticMethod.registerClass('SP.ClientActionInvokeStaticMethod', SP.ClientAction);
if (SP.ClientActionInstantiateObjectPath.registerClass) SP.ClientActionInstantiateObjectPath.registerClass('SP.ClientActionInstantiateObjectPath', SP.ClientAction);
if (SP.ClientObject.registerClass) SP.ClientObject.registerClass('SP.ClientObject', null, SP.IFromJson);
if (SP.ClientObjectData.registerClass) SP.ClientObjectData.registerClass('SP.ClientObjectData');
if (SP.ClientObjectCollection.registerClass) SP.ClientObjectCollection.registerClass('SP.ClientObjectCollection', SP.ClientObject, IEnumerable);
if (SP.ClientObjectList.registerClass) SP.ClientObjectList.registerClass('SP.ClientObjectList', SP.ClientObjectCollection);
if (SP.ClientObjectPrototype.registerClass) SP.ClientObjectPrototype.registerClass('SP.ClientObjectPrototype');
if (SP.ClientObjectCollectionPrototype.registerClass) SP.ClientObjectCollectionPrototype.registerClass('SP.ClientObjectCollectionPrototype', SP.ClientObjectPrototype);
if (SP.ClientQueryProperty.registerClass) SP.ClientQueryProperty.registerClass('SP.ClientQueryProperty');
if (SP.ClientQueryInternal.registerClass) SP.ClientQueryInternal.registerClass('SP.ClientQueryInternal', SP.ClientAction);
if (SP.WebRequestEventArgs.registerClass) SP.WebRequestEventArgs.registerClass('SP.WebRequestEventArgs', Sys.EventArgs);
if (SP.ClientRequest.registerClass) SP.ClientRequest.registerClass('SP.ClientRequest');
if (SP.ClientRequestEventArgs.registerClass) SP.ClientRequestEventArgs.registerClass('SP.ClientRequestEventArgs', Sys.EventArgs);
if (SP.ClientRequestFailedEventArgs.registerClass) SP.ClientRequestFailedEventArgs.registerClass('SP.ClientRequestFailedEventArgs', SP.ClientRequestEventArgs);
if (SP.ClientRequestSucceededEventArgs.registerClass) SP.ClientRequestSucceededEventArgs.registerClass('SP.ClientRequestSucceededEventArgs', SP.ClientRequestEventArgs);
if (SP.FormDigestInfo.registerClass) SP.FormDigestInfo.registerClass('SP.FormDigestInfo');
if (SP.ClientRuntimeContext.registerClass) SP.ClientRuntimeContext.registerClass('SP.ClientRuntimeContext', null, Sys.IDisposable);
if (SP.SimpleDataTable.registerClass) SP.SimpleDataTable.registerClass('SP.SimpleDataTable', null, SP.IFromJson);
if (SP.ClientValueObject.registerClass) SP.ClientValueObject.registerClass('SP.ClientValueObject', null, SP.IFromJson);
if (SP.ClientValueObjectCollection.registerClass) SP.ClientValueObjectCollection.registerClass('SP.ClientValueObjectCollection', SP.ClientValueObject, IEnumerable);
if (SP.ExecutionScope.registerClass) SP.ExecutionScope.registerClass('SP.ExecutionScope', null, IDisposable);
if (SP.ConditionalExecutionScope.registerClass) SP.ConditionalExecutionScope.registerClass('SP.ConditionalExecutionScope', SP.ExecutionScope);
if (SP.DataRetrievalWithExpressionString.registerClass) SP.DataRetrievalWithExpressionString.registerClass('SP.DataRetrievalWithExpressionString');
if (SP.ClientActionExecutionScopeStart.registerClass) SP.ClientActionExecutionScopeStart.registerClass('SP.ClientActionExecutionScopeStart', SP.ClientAction);
if (SP.ClientActionExecutionScopeEnd.registerClass) SP.ClientActionExecutionScopeEnd.registerClass('SP.ClientActionExecutionScopeEnd', SP.ClientAction);
if (SP.ExceptionHandlingScope.registerClass) SP.ExceptionHandlingScope.registerClass('SP.ExceptionHandlingScope', null, SP.IFromJson);
if (SP.ExceptionHandlingExecutionScope.registerClass) SP.ExceptionHandlingExecutionScope.registerClass('SP.ExceptionHandlingExecutionScope', SP.ExecutionScope);
if (SP.ObjectIdentityQuery.registerClass) SP.ObjectIdentityQuery.registerClass('SP.ObjectIdentityQuery', SP.ClientAction);
if (SP.ObjectPath.registerClass) SP.ObjectPath.registerClass('SP.ObjectPath');
if (SP.ObjectPathProperty.registerClass) SP.ObjectPathProperty.registerClass('SP.ObjectPathProperty', SP.ObjectPath);
if (SP.ObjectPathStaticProperty.registerClass) SP.ObjectPathStaticProperty.registerClass('SP.ObjectPathStaticProperty', SP.ObjectPath);
if (SP.ObjectPathMethod.registerClass) SP.ObjectPathMethod.registerClass('SP.ObjectPathMethod', SP.ObjectPath);
if (SP.ObjectPathStaticMethod.registerClass) SP.ObjectPathStaticMethod.registerClass('SP.ObjectPathStaticMethod', SP.ObjectPath);
if (SP.ObjectPathConstructor.registerClass) SP.ObjectPathConstructor.registerClass('SP.ObjectPathConstructor', SP.ObjectPath);
if (SP.ObjectPathIdentity.registerClass) SP.ObjectPathIdentity.registerClass('SP.ObjectPathIdentity', SP.ObjectPath);
if (SP.SerializationContext.registerClass) SP.SerializationContext.registerClass('SP.SerializationContext');
if (SP.ResourceStrings.registerClass) SP.ResourceStrings.registerClass('SP.ResourceStrings');
if (SP.RuntimeRes.registerClass) SP.RuntimeRes.registerClass('SP.RuntimeRes');
if (SP.ParseJSONUtil.registerClass) SP.ParseJSONUtil.registerClass('SP.ParseJSONUtil');
if (SP.DataConvertUtil.registerClass) SP.DataConvertUtil.registerClass('SP.DataConvertUtil');
if (SP.OfficeVersion.registerClass) SP.OfficeVersion.registerClass('SP.OfficeVersion');
function sp_runtime_initialize() {
    SP.Base64EncodedByteArray.$1R = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    SP.Base64EncodedByteArray.$N = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '/', '='];
    SP.DataConvert.$1z = {};
    SP.DataConvert.$2X = ['', '0', '00', '000', '0000', '00000', '000000', '0000000', '00000000', '000000000'];
    SP.ClientConstants.AddExpandoFieldTypeSuffix = 'AddExpandoFieldTypeSuffix';
    SP.ClientConstants.Actions = 'Actions';
    SP.ClientConstants.ApplicationName = 'ApplicationName';
    SP.ClientConstants.Body = 'Body';
    SP.ClientConstants.CatchScope = 'CatchScope';
    SP.ClientConstants.ChildItemQuery = 'ChildItemQuery';
    SP.ClientConstants.ChildItems = '_Child_Items_';
    SP.ClientConstants.ConditionalScope = 'ConditionalScope';
    SP.ClientConstants.Constructor = 'Constructor';
    SP.ClientConstants.Context = 'Context';
    SP.ClientConstants.ErrorInfo = 'ErrorInfo';
    SP.ClientConstants.ErrorMessage = 'ErrorMessage';
    SP.ClientConstants.ErrorStackTrace = 'ErrorStackTrace';
    SP.ClientConstants.ErrorCode = 'ErrorCode';
    SP.ClientConstants.ErrorTypeName = 'ErrorTypeName';
    SP.ClientConstants.ErrorValue = 'ErrorValue';
    SP.ClientConstants.ErrorDetails = 'ErrorDetails';
    SP.ClientConstants.ErrorTraceCorrelationId = 'TraceCorrelationId';
    SP.ClientConstants.ExceptionHandlingScope = 'ExceptionHandlingScope';
    SP.ClientConstants.ExceptionHandlingScopeSimple = 'ExceptionHandlingScopeSimple';
    SP.ClientConstants.QueryableExpression = 'QueryableExpression';
    SP.ClientConstants.FinallyScope = 'FinallyScope';
    SP.ClientConstants.HasException = 'HasException';
    SP.ClientConstants.Id = 'Id';
    SP.ClientConstants.Identity = 'Identity';
    SP.ClientConstants.IfFalseScope = 'IfFalseScope';
    SP.ClientConstants.IfTrueScope = 'IfTrueScope';
    SP.ClientConstants.IsNull = 'IsNull';
    SP.ClientConstants.LibraryVersion = 'LibraryVersion';
    SP.ClientConstants.TraceCorrelationId = 'TraceCorrelationId';
    SP.ClientConstants.Count = 'Count';
    SP.ClientConstants.Method = 'Method';
    SP.ClientConstants.Methods = 'Methods';
    SP.ClientConstants.Name = 'Name';
    SP.ClientConstants.Object = 'Object';
    SP.ClientConstants.ObjectPathId = 'ObjectPathId';
    SP.ClientConstants.ObjectPath = 'ObjectPath';
    SP.ClientConstants.ObjectPaths = 'ObjectPaths';
    SP.ClientConstants.ObjectType = '_ObjectType_';
    SP.ClientConstants.ObjectIdentity = '_ObjectIdentity_';
    SP.ClientConstants.ObjectIdentityQuery = 'ObjectIdentityQuery';
    SP.ClientConstants.ObjectVersion = '_ObjectVersion_';
    SP.ClientConstants.Parameter = 'Parameter';
    SP.ClientConstants.Parameters = 'Parameters';
    SP.ClientConstants.ParentId = 'ParentId';
    SP.ClientConstants.Processed = 'Processed';
    SP.ClientConstants.Property = 'Property';
    SP.ClientConstants.Properties = 'Properties';
    SP.ClientConstants.Query = 'Query';
    SP.ClientConstants.QueryResult = 'QueryResult';
    SP.ClientConstants.Request = 'Request';
    SP.ClientConstants.Results = 'Results';
    SP.ClientConstants.ScalarProperty = 'ScalarProperty';
    SP.ClientConstants.SchemaVersion = 'SchemaVersion';
    SP.ClientConstants.ScopeId = 'ScopeId';
    SP.ClientConstants.SelectAll = 'SelectAll';
    SP.ClientConstants.SelectAllProperties = 'SelectAllProperties';
    SP.ClientConstants.SetProperty = 'SetProperty';
    SP.ClientConstants.SetStaticProperty = 'SetStaticProperty';
    SP.ClientConstants.StaticMethod = 'StaticMethod';
    SP.ClientConstants.StaticProperty = 'StaticProperty';
    SP.ClientConstants.SuffixChar = '$   Char';
    SP.ClientConstants.SuffixByte = '$   Byte';
    SP.ClientConstants.SuffixInt16 = '$  Int16';
    SP.ClientConstants.SuffixUInt16 = '$ UInt16';
    SP.ClientConstants.SuffixInt32 = '$  Int32';
    SP.ClientConstants.SuffixUInt32 = '$ UInt32';
    SP.ClientConstants.SuffixInt64 = '$  Int64';
    SP.ClientConstants.SuffixUInt64 = '$ UInt64';
    SP.ClientConstants.SuffixSingle = '$ Single';
    SP.ClientConstants.SuffixDouble = '$ Double';
    SP.ClientConstants.SuffixDecimal = '$Decimal';
    SP.ClientConstants.SuffixTimeSpan = '$     TS';
    SP.ClientConstants.SuffixArray = '$  Array';
    SP.ClientConstants.Test = 'Test';
    SP.ClientConstants.TryScope = 'TryScope';
    SP.ClientConstants.Type = 'Type';
    SP.ClientConstants.TypeId = 'TypeId';
    SP.ClientConstants.Update = '$Update';
    SP.ClientConstants.Version = 'Version';
    SP.ClientConstants.XmlElementName = 'Name';
    SP.ClientConstants.XmlElementAttributes = 'Attributes';
    SP.ClientConstants.XmlElementChildren = 'Children';
    SP.ClientConstants.XmlNamespace = 'http://schemas.microsoft.com/sharepoint/clientquery/2009';
    SP.ClientConstants.FieldValuesMethodName = '$m_dict';
    SP.ClientConstants.RequestTokenHeader = 'X-RequestToken';
    SP.ClientConstants.FormDigestHeader = 'X-RequestDigest';
    SP.ClientConstants.useWebLanguageHeader = 'X-UseWebLanguage';
    SP.ClientConstants.useWebLanguageHeaderValue = 'true';
    SP.ClientConstants.ClientTagHeader = 'X-ClientService-ClientTag';
    SP.ClientConstants.TraceCorrelationIdRequestHeader = 'SPResponseGuid';
    SP.ClientConstants.TraceCorrelationIdResponseHeader = 'SPRequestGuid';
    SP.ClientConstants.greaterThan = 'GT';
    SP.ClientConstants.lessThan = 'LT';
    SP.ClientConstants.equal = 'EQ';
    SP.ClientConstants.notEqual = 'NE';
    SP.ClientConstants.greaterThanOrEqual = 'GE';
    SP.ClientConstants.lessThanOrEqual = 'LE';
    SP.ClientConstants.andAlso = 'AND';
    SP.ClientConstants.orElse = 'OR';
    SP.ClientConstants.not = 'NOT';
    SP.ClientConstants.expressionParameter = 'ExpressionParameter';
    SP.ClientConstants.expressionProperty = 'ExpressionProperty';
    SP.ClientConstants.expressionStaticProperty = 'ExpressionStaticProperty';
    SP.ClientConstants.expressionMethod = 'ExpressionMethod';
    SP.ClientConstants.expressionStaticMethod = 'ExpressionStaticMethod';
    SP.ClientConstants.expressionConstant = 'ExpressionConstant';
    SP.ClientConstants.expressionConvert = 'ExpressionConvert';
    SP.ClientConstants.expressionTypeIs = 'ExpressionTypeIs';
    SP.ClientConstants.ofType = 'OfType';
    SP.ClientConstants.take = 'Take';
    SP.ClientConstants.where = 'Where';
    SP.ClientConstants.orderBy = 'OrderBy';
    SP.ClientConstants.orderByDescending = 'OrderByDescending';
    SP.ClientConstants.thenBy = 'ThenBy';
    SP.ClientConstants.thenByDescending = 'ThenByDescending';
    SP.ClientConstants.queryableObject = 'QueryableObject';
    SP.ClientConstants.ServiceFileName = 'client.svc';
    SP.ClientConstants.ServiceMethodName = 'ProcessQuery';
    SP.ClientConstants.fluidApplicationInitParamUrl = 'MS.SP.url';
    SP.ClientConstants.fluidApplicationInitParamViaUrl = 'MS.SP.viaUrl';
    SP.ClientConstants.fluidApplicationInitParamRequestToken = 'MS.SP.requestToken';
    SP.ClientConstants.fluidApplicationInitParamFormDigestTimeoutSeconds = 'MS.SP.formDigestTimeoutSeconds';
    SP.ClientConstants.fluidApplicationInitParamFormDigest = 'MS.SP.formDigest';
    SP.ClientSchemaVersions.version14 = '14.0.0.0';
    SP.ClientSchemaVersions.version15 = '15.0.0.0';
    SP.ClientSchemaVersions.currentVersion = '15.0.0.0';
    SP.ClientErrorCodes.genericError = -1;
    SP.ClientErrorCodes.accessDenied = -2147024891;
    SP.ClientErrorCodes.docAlreadyExists = -2130575257;
    SP.ClientErrorCodes.versionConflict = -2130575339;
    SP.ClientErrorCodes.listItemDeleted = -2130575338;
    SP.ClientErrorCodes.invalidFieldValue = -2130575155;
    SP.ClientErrorCodes.notSupported = -2147024846;
    SP.ClientErrorCodes.redirect = -2130575152;
    SP.ClientErrorCodes.notSupportedRequestVersion = -2130575151;
    SP.ClientErrorCodes.fieldValueFailedValidation = -2130575163;
    SP.ClientErrorCodes.itemValueFailedValidation = -2130575162;
    SP.ClientRequest.$2W = 0;
    SP.ClientRuntimeContext.$Q = null;
    SP.ResourceStrings.argumentExceptionMessage = 'ArgumentExceptionMessage';
    SP.ResourceStrings.argumentNullExceptionMessage = 'ArgumentNullExceptionMessage';
    SP.ResourceStrings.cC_AppIconAlt = 'CC_AppIconAlt';
    SP.ResourceStrings.cC_AppWebUrlNotSet = 'CC_AppWebUrlNotSet';
    SP.ResourceStrings.cC_ArrowImageAlt = 'CC_ArrowImageAlt';
    SP.ResourceStrings.cC_BackToSite = 'CC_BackToSite';
    SP.ResourceStrings.cC_ErrorGettingThemeInfo = 'CC_ErrorGettingThemeInfo';
    SP.ResourceStrings.cC_HelpLinkToolTip = 'CC_HelpLinkToolTip';
    SP.ResourceStrings.cC_HostSiteUrlNotSet = 'CC_HostSiteUrlNotSet';
    SP.ResourceStrings.cC_InvalidArgument = 'CC_InvalidArgument';
    SP.ResourceStrings.cC_InvalidJSON = 'CC_InvalidJSON';
    SP.ResourceStrings.cC_InvalidOperation = 'CC_InvalidOperation';
    SP.ResourceStrings.cC_PlaceHolderElementNotFound = 'CC_PlaceHolderElementNotFound';
    SP.ResourceStrings.cC_RequiredScriptNotLoaded = 'CC_RequiredScriptNotLoaded';
    SP.ResourceStrings.cC_SendFeedback = 'CC_SendFeedback';
    SP.ResourceStrings.cC_SettingsLinkToolTip = 'CC_SettingsLinkToolTip';
    SP.ResourceStrings.cC_TimeoutGettingThemeInfo = 'CC_TimeoutGettingThemeInfo';
    SP.ResourceStrings.cC_Welcome = 'CC_Welcome';
    SP.ResourceStrings.cannotFindContextWebServerRelativeUrl = 'CannotFindContextWebServerRelativeUrl';
    SP.ResourceStrings.cannotFindPlatformLibrary = 'CannotFindPlatformLibrary';
    SP.ResourceStrings.collectionHasNotBeenInitialized = 'CollectionHasNotBeenInitialized';
    SP.ResourceStrings.collectionModified = 'CollectionModified';
    SP.ResourceStrings.invalidUsageOfConditionalScope = 'InvalidUsageOfConditionalScope';
    SP.ResourceStrings.invalidUsageOfConditionalScopeNowAllowedAction = 'InvalidUsageOfConditionalScopeNowAllowedAction';
    SP.ResourceStrings.invalidUsageOfExceptionHandlingScope = 'InvalidUsageOfExceptionHandlingScope';
    SP.ResourceStrings.namedPropertyHasNotBeenInitialized = 'NamedPropertyHasNotBeenInitialized';
    SP.ResourceStrings.namedServerObjectIsNull = 'NamedServerObjectIsNull';
    SP.ResourceStrings.noObjectPathAssociatedWithObject = 'NoObjectPathAssociatedWithObject';
    SP.ResourceStrings.notSameClientContext = 'NotSameClientContext';
    SP.ResourceStrings.notSupportedQueryExpressionWithExpressionDetail = 'NotSupportedQueryExpressionWithExpressionDetail';
    SP.ResourceStrings.objectNameIdentity = 'ObjectNameIdentity';
    SP.ResourceStrings.objectNameMethod = 'ObjectNameMethod';
    SP.ResourceStrings.objectNameProperty = 'ObjectNameProperty';
    SP.ResourceStrings.objectNameType = 'ObjectNameType';
    SP.ResourceStrings.pP_DefaultMessage = 'PP_DefaultMessage';
    SP.ResourceStrings.pP_DefaultMessagePlural = 'PP_DefaultMessagePlural';
    SP.ResourceStrings.pP_MultipleEntry = 'PP_MultipleEntry';
    SP.ResourceStrings.pP_MultipleMatch = 'PP_MultipleMatch';
    SP.ResourceStrings.pP_NoMatch = 'PP_NoMatch';
    SP.ResourceStrings.pP_NoSuggestionsAvailable = 'PP_NoSuggestionsAvailable';
    SP.ResourceStrings.pP_RemovePerson = 'PP_RemovePerson';
    SP.ResourceStrings.pP_Results = 'PP_Results';
    SP.ResourceStrings.pP_ResultsIntervals = 'PP_ResultsIntervals';
    SP.ResourceStrings.pP_Searching = 'PP_Searching';
    SP.ResourceStrings.pP_ServerProblem = 'PP_ServerProblem';
    SP.ResourceStrings.pP_ShowingTopNumberOfResults = 'PP_ShowingTopNumberOfResults';
    SP.ResourceStrings.pP_SuggestionsAvailable = 'PP_SuggestionsAvailable';
    SP.ResourceStrings.propertyHasNotBeenInitialized = 'PropertyHasNotBeenInitialized';
    SP.ResourceStrings.rE_BrowserBinaryDataNotSupported = 'RE_BrowserBinaryDataNotSupported';
    SP.ResourceStrings.rE_BrowserNotSupported = 'RE_BrowserNotSupported';
    SP.ResourceStrings.rE_CannotAccessSite = 'RE_CannotAccessSite';
    SP.ResourceStrings.rE_CannotAccessSiteCancelled = 'RE_CannotAccessSiteCancelled';
    SP.ResourceStrings.rE_CannotAccessSiteOpenWindowFailed = 'RE_CannotAccessSiteOpenWindowFailed';
    SP.ResourceStrings.rE_DismissOpenWindowMessageLinkText = 'RE_DismissOpenWindowMessageLinkText';
    SP.ResourceStrings.rE_DomainDoesNotMatch = 'RE_DomainDoesNotMatch';
    SP.ResourceStrings.rE_FixitHelpMessage = 'RE_FixitHelpMessage';
    SP.ResourceStrings.rE_InvalidArgumentOrField = 'RE_InvalidArgumentOrField';
    SP.ResourceStrings.rE_InvalidOperation = 'RE_InvalidOperation';
    SP.ResourceStrings.rE_NoTrustedOrigins = 'RE_NoTrustedOrigins';
    SP.ResourceStrings.rE_OpenWindowButtonText = 'RE_OpenWindowButtonText';
    SP.ResourceStrings.rE_OpenWindowMessage = 'RE_OpenWindowMessage';
    SP.ResourceStrings.rE_RequestAbortedOrTimedout = 'RE_RequestAbortedOrTimedout';
    SP.ResourceStrings.rE_RequestUnexpectedResponse = 'RE_RequestUnexpectedResponse';
    SP.ResourceStrings.rE_RequestUnexpectedResponseWithContentTypeAndStatus = 'RE_RequestUnexpectedResponseWithContentTypeAndStatus';
    SP.ResourceStrings.requestAbortedOrTimedOut = 'RequestAbortedOrTimedOut';
    SP.ResourceStrings.requestEmptyQueryName = 'RequestEmptyQueryName';
    SP.ResourceStrings.requestHasBeenExecuted = 'RequestHasBeenExecuted';
    SP.ResourceStrings.requestUnexpectedResponse = 'RequestUnexpectedResponse';
    SP.ResourceStrings.requestUnexpectedResponseWithContentTypeAndStatus = 'RequestUnexpectedResponseWithContentTypeAndStatus';
    SP.ResourceStrings.requestUnexpectedResponseWithStatus = 'RequestUnexpectedResponseWithStatus';
    SP.ResourceStrings.requestUnknownResponse = 'RequestUnknownResponse';
    SP.ResourceStrings.serverObjectIsNull = 'ServerObjectIsNull';
    SP.ResourceStrings.sharePointClientCredentialsNotSupported = 'SharePointClientCredentialsNotSupported';
    SP.ResourceStrings.unknownError = 'UnknownError';
    SP.ResourceStrings.unknownResponseData = 'UnknownResponseData';
    SP.RuntimeRes.pP_SuggestionsAvailable = 'Suggestions Available';
    SP.RuntimeRes.rE_CannotAccessSiteOpenWindowFailed = 'This page cannot open a window to access the web site \"{0}\" or it cannot reference the opened window. Please browse to that web site, and then browse to this page again.';
    SP.RuntimeRes.noObjectPathAssociatedWithObject = 'The object is not associated with an object identity or the object identity is invalid.';
    SP.RuntimeRes.pP_ServerProblem = 'Sorry, we\'re having trouble reaching the server.';
    SP.RuntimeRes.cannotFindPlatformLibrary = 'Cannot find platform service library. For Windows Store application, please include Microsoft.SharePoint.Client.Runtime.WindowsStore.dll in the application package. For Windows Phone application, please include Microsoft.SharePoint.Client.Runtime.WindowsPhone.dll in the application package. For Windows application, please install Microsoft.SharePoint.Client.Runtime.Windows.dll in the GAC (Global Assembly Cache) or make it available for the Windows application.';
    SP.RuntimeRes.rE_BrowserNotSupported = 'The required functionalities are not supported by your browser. Please make sure you are using IE 8 or above, or other modern browser. Please make sure the \'X-UA-Compatible\' meta tag is set to be \'IE=8\' or above.';
    SP.RuntimeRes.cC_InvalidJSON = 'Invalid JSON data.';
    SP.RuntimeRes.invalidUsageOfExceptionHandlingScope = 'Incorrect usage of exception handling scope.';
    SP.RuntimeRes.serverObjectIsNull = 'Object reference not set to an instance of an object on server.';
    SP.RuntimeRes.pP_NoMatch = 'We couldn\'t find an exact match.';
    SP.RuntimeRes.rE_OpenWindowMessage = 'Sorry, we had some trouble accessing your site.';
    SP.RuntimeRes.argumentNullExceptionMessage = 'The \'{0}\' argument cannot be null.';
    SP.RuntimeRes.cC_HelpLinkToolTip = 'Help';
    SP.RuntimeRes.propertyHasNotBeenInitialized = 'The property or field has not been initialized. It has not been requested or the request has not been executed. It may need to be explicitly requested.';
    SP.RuntimeRes.pP_Results = 'No results found||Showing {0} result||Showing {0} results';
    SP.RuntimeRes.rE_RequestAbortedOrTimedout = 'The request was aborted or timed out.';
    SP.RuntimeRes.rE_DismissOpenWindowMessageLinkText = 'Dismiss';
    SP.RuntimeRes.objectNameIdentity = 'identity {0}';
    SP.RuntimeRes.cC_HostSiteUrlNotSet = 'The app\'s host site url is not set.';
    SP.RuntimeRes.rE_FixitHelpMessage = 'If the \"Fix it\" button doesn\'t solve the issue, {0}click here for more information{1}.';
    SP.RuntimeRes.notSupportedQueryExpressionWithExpressionDetail = 'The query expression \'{0}\' is not supported.';
    SP.RuntimeRes.rE_RequestUnexpectedResponse = 'Unexpected response from server.';
    SP.RuntimeRes.pP_MultipleEntry = 'You can only enter one name.';
    SP.RuntimeRes.rE_DomainDoesNotMatch = 'Your domain doesn\'t match the expected domain for this app deployment.';
    SP.RuntimeRes.cC_BackToSite = 'Back to Site';
    SP.RuntimeRes.rE_InvalidOperation = 'Invalid operation.';
    SP.RuntimeRes.collectionModified = 'The collection was modified. Enumeration operation may not execute.';
    SP.RuntimeRes.cC_Welcome = 'Welcome {0}';
    SP.RuntimeRes.pP_DefaultMessagePlural = 'Enter names or email addresses...';
    SP.RuntimeRes.cC_AppIconAlt = 'App Icon';
    SP.RuntimeRes.cC_SendFeedback = 'Send Feedback';
    SP.RuntimeRes.cC_ArrowImageAlt = 'Cravat Icon';
    SP.RuntimeRes.cC_InvalidOperation = 'Invalid operation.';
    SP.RuntimeRes.pP_ResultsIntervals = '0||1||2-';
    SP.RuntimeRes.invalidUsageOfConditionalScopeNowAllowedAction = 'Incorrect usage of conditional scope. Some actions, such as setting a property or invoking a method, are not allowed inside a conditional scope.';
    SP.RuntimeRes.pP_NoSuggestionsAvailable = 'No Suggestions Available';
    SP.RuntimeRes.rE_OpenWindowButtonText = 'Fix It';
    SP.RuntimeRes.unknownError = 'Unknown Error';
    SP.RuntimeRes.rE_InvalidArgumentOrField = 'Invalid field or parameter {0}.';
    SP.RuntimeRes.rE_CannotAccessSite = 'This page cannot access the web site \"{0}\". Please browse to that web site, and then browse to this page again.';
    SP.RuntimeRes.requestUnexpectedResponse = 'Unexpected response from server.';
    SP.RuntimeRes.namedPropertyHasNotBeenInitialized = 'The property or field \'{0}\' has not been initialized. It has not been requested or the request has not been executed. It may need to be explicitly requested.';
    SP.RuntimeRes.objectNameMethod = 'method {0}';
    SP.RuntimeRes.cC_PlaceHolderElementNotFound = 'The chrome control\'s container element can\'t be found.';
    SP.RuntimeRes.cC_TimeoutGettingThemeInfo = 'Cannot get theme information for chrome control due to time out.';
    SP.RuntimeRes.requestUnexpectedResponseWithStatus = 'Unexpected response from server. The status code of response is \'{0}\'. The status text of response is \'{1}\'.';
    SP.RuntimeRes.unknownResponseData = 'Unexpected response data from server.';
    SP.RuntimeRes.objectNameProperty = 'property {0}';
    SP.RuntimeRes.requestUnknownResponse = 'Unknown response from the server.';
    SP.RuntimeRes.objectNameType = 'type {0}';
    SP.RuntimeRes.namedServerObjectIsNull = 'Object reference not set to an instance of an object on server. The object is associated with {0}.';
    SP.RuntimeRes.argumentExceptionMessage = 'The \'{0}\' argument is invalid.';
    SP.RuntimeRes.rE_RequestUnexpectedResponseWithContentTypeAndStatus = 'Unexpected response from the server. The content type of the response is \"{0}\". The status code is \"{1}\".';
    SP.RuntimeRes.requestUnexpectedResponseWithContentTypeAndStatus = 'Unexpected response from the server. The content type of the response is \"{0}\". The status code is \"{1}\".';
    SP.RuntimeRes.pP_DefaultMessage = 'Enter a name or email address...';
    SP.RuntimeRes.cC_AppWebUrlNotSet = 'Cannot get the app theme information because the app web url is not set.';
    SP.RuntimeRes.sharePointClientCredentialsNotSupported = 'Cannot contact web site \'{0}\' or the web site does not support SharePoint Online credentials. The response status code is \'{1}\'. The response headers are \'{2}\'.';
    SP.RuntimeRes.invalidUsageOfConditionalScope = 'Incorrect usage of conditional scope.';
    SP.RuntimeRes.cC_ErrorGettingThemeInfo = 'Cannot get the app theme information for chrome control.';
    SP.RuntimeRes.rE_CannotAccessSiteCancelled = 'This page cannot access the web site \"{0}\". The login is cancelled or timed out. Please browse to that web site, and then browse to this page again.';
    SP.RuntimeRes.rE_NoTrustedOrigins = 'There is no trusted URLs configured for the app deployment.';
    SP.RuntimeRes.pP_MultipleMatch = 'Multiple entries matched, please click to resolve.';
    SP.RuntimeRes.requestAbortedOrTimedOut = 'The request was aborted or timed out.';
    SP.RuntimeRes.cannotFindContextWebServerRelativeUrl = 'Cannot find current web URL information on the page.';
    SP.RuntimeRes.cC_InvalidArgument = 'Invalid parameter {0}.';
    SP.RuntimeRes.cC_SettingsLinkToolTip = 'Settings';
    SP.RuntimeRes.requestEmptyQueryName = 'The property or query name is empty.';
    SP.RuntimeRes.pP_ShowingTopNumberOfResults = 'Showing the top {0} results';
    SP.RuntimeRes.cC_RequiredScriptNotLoaded = 'Cannot get the app theme information because the required script sp.requestexecutor.js is not loaded.';
    SP.RuntimeRes.notSameClientContext = 'The object is used in the context different from the one associated with the object.';
    SP.RuntimeRes.pP_Searching = 'Searching';
    SP.RuntimeRes.pP_RemovePerson = 'Remove person or group {0}';
    SP.RuntimeRes.rE_BrowserBinaryDataNotSupported = 'Your browser doesn\'t support some HTML5 features like the File API operations. Please use a browser that does support these features.';
    SP.RuntimeRes.collectionHasNotBeenInitialized = 'The collection has not been initialized. It has not been requested or the request has not been executed. It may need to be explicitly requested.';
    SP.RuntimeRes.requestHasBeenExecuted = 'The request has been executed.';
    SP.ParseJSONUtil.$2q = new RegExp('(^|[^\\\\])\\\"\\\\/Date\\(([0-9]+(?:,[0-9]+){2,6})\\)\\\\/\\\"', 'g');
    SP.ParseJSONUtil.$2p = new RegExp('(^|[^\\\\])\\\"\\\\/Date\\((-?[0-9]+)(?:[a-zA-Z]|(?:\\+|-)[0-9]{4})\\)\\\\/\\\"', 'g');
    SP.ParseJSONUtil.$2r = new RegExp('(^|[^\\\\])\\\"\\\\/Date\\((-?[0-9]+)\\)\\\\/\\\"', 'g');
    SP.ParseJSONUtil.$2s = new RegExp('(^|[^\\\\])\\\"\\\\/Guid\\(([0-9a-fA-F\\-]+)\\)\\\\/\\\"', 'g');
    SP.ParseJSONUtil.$2u = new RegExp('^[\\],:{}\\s]*$');
    SP.ParseJSONUtil.$2v = new RegExp('\\\\(?:[\"\\\\\\/bfnrt]|u[0-9a-fA-F]{4})', 'g');
    SP.ParseJSONUtil.$2w = new RegExp('\"[^\"\\\\\\n\\r]*\"|true|false|null|-?\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d+)?', 'g');
    SP.ParseJSONUtil.$2t = new RegExp('(?:^|:|,)(?:\\s*\\[)+', 'g');
    SP.ParseJSONUtil.$2o = new RegExp('(^|[^\\\\])\\\"\\\\/Base64Binary\\(([^\\)]*)\\)\\\\/\\\"', 'g');
    SP.OfficeVersion.majorBuildVersion = 16;
    SP.OfficeVersion.previousMajorBuildVersion = 14;
    SP.OfficeVersion.maxCompatibilityLevel = 15;
    SP.OfficeVersion.majorVersion = '16';
    SP.OfficeVersion.previousVersion = '14';
    SP.OfficeVersion.maxCompatibility = '15';
    SP.OfficeVersion.majorVersionDotZero = '16.0';
    SP.OfficeVersion.previousVersionDotZero = '14.0';
    SP.OfficeVersion.assemblyVersion = '16.0.0.0';
    SP.OfficeVersion.wssMajorVersion = '4';
}
;
sp_runtime_initialize();
if (typeof RegisterModuleInit == "function") {
    RegisterModuleInit("sp.runtime.js", sp_runtime_initialize);
}
SP.ClientRequest._validateJson = function SP_ClientRequest$validateJson(text) {
    return /^[\],:{}\s]*$/.test(((text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@')).replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']')).replace(/(?:^|:|,)(?:\s*\[)+/g, ''));
};
SP.ClientResult = function SP_ClientResult() {
};
SP.ClientResult.prototype = {
    m_value: null,
    get_value: function SP_ClientResult$get_value() {
        return this.m_value;
    },
    setValue: function SP_ClientResult$setValue(value) {
        this.m_value = value;
    },
    fromJson: function SP_ClientResult$fromJson(obj) {
        if (SP.ScriptUtility.isNullOrUndefined(obj))
            return;
        this.m_value = SP.DataConvert.fixupType(null, obj);
    },
    customFromJson: function SP_ClientResult$customFromJson(obj) {
        return false;
    }
};
if (SP.ClientResult.registerClass) SP.ClientResult.registerClass('SP.ClientResult', null, SP.IFromJson);
SP.Result = function SP_Result() {
};
SP.Result.prototype = {
    m_value: 0,
    get_value: function SP_Result$get_value() {
        return this.m_value;
    },
    fromJson: function SP_Result$fromJson(obj) {
        this.m_value = obj;
    },
    customFromJson: function SP_Result$customFromJson(obj) {
        return false;
    }
};
if (SP.Result.registerClass) SP.Result.registerClass('SP.Result', null, SP.IFromJson);
SP.BooleanResult = SP.Result;
SP.ByteResult = SP.Result;
SP.IntResult = SP.Result;
SP.DoubleResult = SP.Result;
SP.DateTimeResult = SP.Result;
SP.GuidResult = SP.Result;
SP.StringResult = SP.Result;
SP.JsonObjectResult = SP.Result;
if (typeof Sys != "undefined" && Sys && Sys.Application) {
    Sys.Application.notifyScriptLoaded();
}
if (typeof NotifyScriptLoadedAndExecuteWaitingJobs == "function") {
    NotifyScriptLoadedAndExecuteWaitingJobs("sp.runtime.js");
}
if (typeof spWriteProfilerMark == 'function')
    spWriteProfilerMark("perfMarkEnd_" + "sp.runtime.js");
