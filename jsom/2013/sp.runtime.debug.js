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
    SP.Guid.registerClass('SP.Guid');
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
    SP.ScriptUtility.registerClass('SP.ScriptUtility');
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
    SP.PermissionKind.registerEnum('SP.PermissionKind', false);
}
Type.registerNamespace('SP');
SP.IWebRequestExecutorFactory = function() {
};
SP.IWebRequestExecutorFactory.registerInterface('SP.IWebRequestExecutorFactory');
SP.ClientRequestStatus = function() {
};
SP.ClientRequestStatus.prototype = {
    active: 0,
    inProgress: 1,
    completedSuccess: 2,
    completedException: 3
};
SP.ClientRequestStatus.registerEnum('SP.ClientRequestStatus', false);
SP.IFromJson = function() {
};
SP.IFromJson.registerInterface('SP.IFromJson');
SP.DateTimeKind = function() {
};
SP.DateTimeKind.prototype = {
    unspecified: 0,
    utc: 1,
    local: 2
};
SP.DateTimeKind.registerEnum('SP.DateTimeKind', false);
SP.ArrayListEnumerator = function SP_ArrayListEnumerator($p0) {
    this.$2_0 = $p0;
    this.$M_0 = -1;
    this.$2K_0 = $p0.length;
    this.current = null;
};
SP.ArrayListEnumerator.prototype = {
    $2_0: null,
    $M_0: 0,
    $2K_0: 0,
    get_current: function SP_ArrayListEnumerator$get_current() {
        return this.$2_0[this.$M_0];
    },
    moveNext: function SP_ArrayListEnumerator$moveNext() {
        if (this.$2K_0 !== this.$2_0.length) {
            throw Error.invalidOperation(SP.ResResources.getString('CollectionModified'));
        }
        this.$M_0++;
        this.current = this.$2_0[this.$M_0];
        return this.$M_0 < this.$2_0.length;
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
    this.$1b_0 = $p0;
    this.$M_0 = -1;
};
SP.BaseCollectionEnumerator.prototype = {
    $1b_0: null,
    $M_0: 0,
    get_current: function SP_BaseCollectionEnumerator$get_current() {
        return this.$1b_0.itemAtIndex(this.$M_0);
    },
    moveNext: function SP_BaseCollectionEnumerator$moveNext() {
        this.$M_0++;
        return this.$M_0 < this.$1b_0.get_count();
    },
    reset: function SP_BaseCollectionEnumerator$reset() {
        this.$M_0 = -1;
    }
};
SP.Base64EncodedByteArray = function SP_Base64EncodedByteArray() {
    this.fromJson = this.$3K_0;
    this.customFromJson = this.$3L_0;
    if (arguments.length > 0 && !SP.ScriptUtility.isNullOrEmptyString(arguments[0])) {
        var $v_0 = arguments[0];

        this.$34_0($v_0);
    }
    else {
        this.$2_0 = [];
        this.$E_0 = 0;
    }
};
SP.Base64EncodedByteArray.prototype = {
    $2_0: null,
    $E_0: 0,
    get_length: function SP_Base64EncodedByteArray$get_length() {
        return this.$E_0;
    },
    $34_0: function SP_Base64EncodedByteArray$$34_0($p0) {
        $p0 = $p0.replace('\\u002f', '/');
        $p0 = $p0.replace('\\u002F', '/');
        var $v_0 = new RegExp('[^A-Za-z0-9+/=]', 'g');

        $p0 = $p0.replace($v_0, '');
        var $v_1 = Math.ceil(($p0.length + 1) / 4);
        var $v_2 = Math.ceil(($v_1 * 3 + 1) / 2);

        this.$2_0 = new Array($v_2);
        for (var $v_3 = 0; $v_3 < this.$2_0.length; $v_3++) {
            this.$2_0[$v_3] = 0;
        }
        this.$E_0 = 0;
        for (var $v_4 = 0; $v_4 < $p0.length; $v_4 += 4) {
            var $v_5 = $p0.charAt($v_4);
            var $v_6 = $p0.charAt($v_4 + 1);
            var $v_7 = $p0.charAt($v_4 + 2);
            var $v_8 = $p0.charAt($v_4 + 3);
            var $v_9 = SP.Base64EncodedByteArray.$18.indexOf($v_5);
            var $v_A = SP.Base64EncodedByteArray.$18.indexOf($v_6);
            var $v_B = SP.Base64EncodedByteArray.$18.indexOf($v_7);
            var $v_C = SP.Base64EncodedByteArray.$18.indexOf($v_8);
            var $v_D = $v_9 << 2 | $v_A >> 4;
            var $v_E = ($v_A & 15) << 4 | $v_B >> 2;
            var $v_F = ($v_B & 3) << 6 | $v_C;

            this.$19_0(this.$E_0, $v_D);
            this.$E_0++;
            if ($v_B !== 64) {
                this.$19_0(this.$E_0, $v_E);
                this.$E_0++;
            }
            if ($v_C !== 64) {
                this.$19_0(this.$E_0, $v_F);
                this.$E_0++;
            }
        }
    },
    toBase64String: function SP_Base64EncodedByteArray$toBase64String() {
        var $v_0 = new Sys.StringBuilder();
        var $v_1 = 0;
        var $v_2 = this.$E_0 % 3;
        var $v_3 = this.$E_0 - $v_2;
        var $v_4, $v_5, $v_6;
        var $v_7, $v_8, $v_9, $v_A;

        for ($v_1 = 0; $v_1 < $v_3; $v_1 += 3) {
            $v_4 = this.getByteAt($v_1);
            $v_5 = this.getByteAt($v_1 + 1);
            $v_6 = this.getByteAt($v_1 + 2);
            $v_7 = SP.Base64EncodedByteArray.$I[($v_4 & 252) >> 2];
            $v_8 = SP.Base64EncodedByteArray.$I[($v_4 & 3) << 4 | ($v_5 & 240) >> 4];
            $v_9 = SP.Base64EncodedByteArray.$I[($v_5 & 15) << 2 | ($v_6 & 192) >> 6];
            $v_A = SP.Base64EncodedByteArray.$I[$v_6 & 63];
            $v_0.append($v_7);
            $v_0.append($v_8);
            $v_0.append($v_9);
            $v_0.append($v_A);
        }
        switch ($v_2) {
        case 2:
            $v_4 = this.getByteAt($v_1);
            $v_5 = this.getByteAt($v_1 + 1);
            $v_7 = SP.Base64EncodedByteArray.$I[($v_4 & 252) >> 2];
            $v_8 = SP.Base64EncodedByteArray.$I[($v_4 & 3) << 4 | ($v_5 & 240) >> 4];
            $v_9 = SP.Base64EncodedByteArray.$I[($v_5 & 15) << 2];
            $v_A = SP.Base64EncodedByteArray.$I[64];
            $v_0.append($v_7);
            $v_0.append($v_8);
            $v_0.append($v_9);
            $v_0.append($v_A);
            break;
        case 1:
            $v_4 = this.getByteAt($v_1);
            $v_7 = SP.Base64EncodedByteArray.$I[($v_4 & 252) >> 2];
            $v_8 = SP.Base64EncodedByteArray.$I[($v_4 & 3) << 4];
            $v_9 = SP.Base64EncodedByteArray.$I[64];
            $v_A = SP.Base64EncodedByteArray.$I[64];
            $v_0.append($v_7);
            $v_0.append($v_8);
            $v_0.append($v_9);
            $v_0.append($v_A);
            break;
        }
        return $v_0.toString();
    },
    append: function SP_Base64EncodedByteArray$append(b) {
        if (!(this.$E_0 % 2)) {
            this.$2_0[this.$E_0 / 2 + 1] = 0;
        }
        this.$19_0(this.$E_0, b);
        this.$E_0++;
    },
    getByteAt: function SP_Base64EncodedByteArray$getByteAt(index) {
        if (index >= this.$E_0) {
            throw Error.argumentOutOfRange('index');
        }
        var $v_0 = Math.floor(index / 2);
        var $v_1 = this.$2_0[$v_0];
        var $v_2 = index % 2;

        if (!$v_2) {
            return $v_1 & 255;
        }
        else {
            return ($v_1 & 65280) >> 8;
        }
    },
    setByteAt: function SP_Base64EncodedByteArray$setByteAt(index, b) {
        if (index >= this.$E_0) {
            throw Error.argumentOutOfRange('index');
        }
        this.$19_0(index, b);
    },
    $19_0: function SP_Base64EncodedByteArray$$19_0($p0, $p1) {
        var $v_0 = Math.floor($p0 / 2);
        var $v_1 = this.$2_0[$v_0];
        var $v_2 = $p0 % 2;

        if (!$v_2) {
            $v_1 = ($v_1 & 65280) + ($p1 & 255);
        }
        else {
            $v_1 = ($p1 & 255) * 256 + ($v_1 & 255);
        }
        this.$2_0[$v_0] = $v_1;
    },
    $3K_0: function SP_Base64EncodedByteArray$$3K_0($p0) {
        if (SP.ScriptUtility.isNullOrUndefined($p0)) {
            return;
        }
        if (SP.Base64EncodedByteArray.isInstanceOfType($p0)) {
            var $v_0 = $p0;

            this.$E_0 = $v_0.$E_0;
            this.$2_0 = $v_0.$2_0;
        }
    },
    $3L_0: function SP_Base64EncodedByteArray$$3L_0($p0) {
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
    this.$1B_1 = clientObject;
    this.$X_1 = propertyName;
    this.$2B_1 = comparisonOperator;
    this.$2U_1 = valueToCompare;
};
SP.ClientObjectPropertyConditionalScope.prototype = {
    $1B_1: null,
    $X_1: null,
    $2B_1: null,
    $2U_1: null,
    $2w_0: function SP_ClientObjectPropertyConditionalScope$$2w_0($p0) {
        if (!this.$1B_1) {
            throw SP.ConditionalScopeBase.$7();
        }
        var $v_0 = new Sys.StringBuilder();
        var $v_1 = SP.XmlWriter.create($v_0);

        $v_1.writeStartElement('Test');
        $v_1.writeStartElement('Body');
        $v_1.writeStartElement(this.$2B_1);
        $v_1.writeStartElement('ExpressionProperty');
        $v_1.writeAttributeString('Name', this.$X_1);
        $v_1.writeStartElement('ExpressionConstant');
        SP.DataConvert.writeValueToXmlElement($v_1, this.$1B_1, $p0);
        $v_1.writeEndElement();
        $v_1.writeEndElement();
        $v_1.writeStartElement('ExpressionConstant');
        SP.DataConvert.writeValueToXmlElement($v_1, this.$2U_1, $p0);
        $v_1.writeEndElement();
        $v_1.writeEndElement();
        $v_1.writeEndElement();
        $v_1.writeEndElement();
        $v_1.close();
        this.$1B_1 = null;
        return $v_0;
    }
};
SP.ClientDictionaryResultHandler = function SP_ClientDictionaryResultHandler(dict) {
    this.fromJson = this.$3K_0;
    this.customFromJson = this.$3L_0;
    this.$2C_0 = dict;
};
SP.ClientDictionaryResultHandler.prototype = {
    $2C_0: null,
    $3K_0: function SP_ClientDictionaryResultHandler$$3K_0($p0) {
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
        this.$2C_0.setValue($v_1);
    },
    $3L_0: function SP_ClientDictionaryResultHandler$$3L_0($p0) {
        return false;
    }
};
SP.ClientActionInstantiateObjectPathResult = function SP_ClientActionInstantiateObjectPathResult($p0) {
    this.fromJson = this.$3K_0;
    this.customFromJson = this.$3L_0;
    this.$e_0 = $p0;
};
SP.ClientActionInstantiateObjectPathResult.prototype = {
    $e_0: null,
    $3K_0: function SP_ClientActionInstantiateObjectPathResult$$3K_0($p0) {
        if (!SP.ScriptUtility.isNullOrUndefined($p0) && typeof $p0 === 'object') {
            var $v_0 = false;

            if (typeof $p0.IsNull === 'boolean') {
                $v_0 = $p0.IsNull;
            }
            this.$e_0.$1J_0 = $v_0;
        }
    },
    $3L_0: function SP_ClientActionInstantiateObjectPathResult$$3L_0($p0) {
        return false;
    }
};
SP.ClientObjectCollectionResult = function SP_ClientObjectCollectionResult($p0, $p1) {
    this.fromJson = this.$3K_0;
    this.customFromJson = this.$3L_0;
    this.$0_0 = $p0;
    this.$1j_0 = $p1;
};
SP.ClientObjectCollectionResult.prototype = {
    $1j_0: null,
    $0_0: null,
    $3K_0: function SP_ClientObjectCollectionResult$$3K_0($p0) {
        if (!SP.ScriptUtility.isNullOrUndefined($p0) && typeof $p0 === 'object') {
            if (Array.isInstanceOfType($p0)) {
                SP.DataConvert.populateArray(this.$0_0, this.$1j_0, $p0);
            }
            else {
                var $v_0 = $p0._Child_Items_;

                if ($v_0) {
                    SP.DataConvert.populateArray(this.$0_0, this.$1j_0, $v_0);
                }
            }
        }
    },
    $3L_0: function SP_ClientObjectCollectionResult$$3L_0($p0) {
        return false;
    }
};
SP.ClientUtility = function SP_ClientUtility() {
};
SP.ClientUtility.urlPathEncodeForXmlHttpRequest = function SP_ClientUtility$urlPathEncodeForXmlHttpRequest(url) {
    return SP.ClientHttpUtility.$2o(url, true, true);
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
SP.ClientUtility.$35 = function SP_ClientUtility$$35($p0) {
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
    this.fromJson = this.$3K_0;
    this.customFromJson = this.$3L_0;
};
SP.ClientXElement.prototype = {
    $o_0: null,
    $3K_0: function SP_ClientXElement$$3K_0($p0) {
        this.$o_0 = $p0;
    },
    $3L_0: function SP_ClientXElement$$3L_0($p0) {
        return false;
    },
    get_element: function SP_ClientXElement$get_element() {
        return this.$o_0;
    },
    set_element: function SP_ClientXElement$set_element(value) {
        this.$o_0 = value;
        return value;
    }
};
SP.ClientXDocument = function SP_ClientXDocument() {
    this.fromJson = this.$3K_0;
    this.customFromJson = this.$3L_0;
};
SP.ClientXDocument.prototype = {
    $o_0: null,
    $3K_0: function SP_ClientXDocument$$3K_0($p0) {
        this.$o_0 = $p0;
    },
    $3L_0: function SP_ClientXDocument$$3L_0($p0) {
        return false;
    },
    get_root: function SP_ClientXDocument$get_root() {
        return this.$o_0;
    },
    set_root: function SP_ClientXDocument$set_root(value) {
        this.$o_0 = value;
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
    SP.DataConvert.$1v(context, dest, jsonArrayFromServer, null);
};
SP.DataConvert.$1v = function SP_DataConvert$$1v($p0, $p1, $p2, $p3) {
    if (SP.ScriptUtility.isNullOrUndefined($p2)) {
        return;
    }
    for (var $v_0 = 0; $v_0 < $p2.length; $v_0++) {
        var $v_1 = $p2[$v_0];

        if (SP.ScriptUtility.isNullOrUndefined($v_1)) {
            Array.add($p1, $v_1);
            continue;
        }
        var $v_2 = SP.DataConvert.$24($p0, $v_1, $p3);

        Array.add($p1, $v_2);
    }
};
SP.DataConvert.fixupType = function SP_DataConvert$fixupType(context, obj) {
    return SP.DataConvert.$24(context, obj, null);
};
SP.DataConvert.$38 = function SP_DataConvert$$38($p0) {
    var $v_0 = SP.DataConvert.$1P[$p0];

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
            SP.DataConvert.$1P[$p0] = 1;
            return false;
        }
    }
    SP.DataConvert.$1P[$p0] = 2;
    return true;
};
SP.DataConvert.$24 = function SP_DataConvert$$24($p0, $p1, $p2) {
    var $v_0 = $p1;

    if (!SP.ScriptUtility.isNullOrUndefined($p1) && typeof $p1 === 'object') {
        var $v_1 = $p1._ObjectType_;

        if (!SP.ScriptUtility.isNullOrUndefined($v_1)) {
            var $v_2;

            if (SP.DataConvert.$38($v_1)) {
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
        writer.writeAttributeString('ObjectPathId', ($v_0.get_path()).$3_0.toString());
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

                $v_7 = SP.DataConvert.$B(($v_5.getFullYear()).toString(), 4) + '-' + SP.DataConvert.$B($v_8.toString(), 2) + '-' + SP.DataConvert.$B(($v_5.getDate()).toString(), 2) + 'T' + SP.DataConvert.$B(($v_5.getHours()).toString(), 2) + ':' + SP.DataConvert.$B(($v_5.getMinutes()).toString(), 2) + ':' + SP.DataConvert.$B(($v_5.getSeconds()).toString(), 2) + '.' + SP.DataConvert.$B(($v_5.getMilliseconds()).toString(), 3);
            }
            else if ($v_6 === 2) {
                var $v_9 = $v_5.getMonth() + 1;

                $v_7 = SP.DataConvert.$B(($v_5.getFullYear()).toString(), 4) + '-' + SP.DataConvert.$B($v_9.toString(), 2) + '-' + SP.DataConvert.$B(($v_5.getDate()).toString(), 2) + 'T' + SP.DataConvert.$B(($v_5.getHours()).toString(), 2) + ':' + SP.DataConvert.$B(($v_5.getMinutes()).toString(), 2) + ':' + SP.DataConvert.$B(($v_5.getSeconds()).toString(), 2) + '.' + SP.DataConvert.$B(($v_5.getMilliseconds()).toString(), 3);
                var $v_A = $v_5.getTimezoneOffset() / 60;
                var $v_B = $v_A <= 0 ? '+' : '-';

                $v_7 = $v_7 + $v_B + SP.DataConvert.$B((Math.floor(Math.abs($v_A))).toString(), 2) + ':' + SP.DataConvert.$B((Math.abs($v_5.getTimezoneOffset() % 60)).toString(), 2);
            }
            else {
                var $v_C = $v_5.getUTCMonth() + 1;

                $v_7 = SP.DataConvert.$B(($v_5.getUTCFullYear()).toString(), 4) + '-' + SP.DataConvert.$B($v_C.toString(), 2) + '-' + SP.DataConvert.$B(($v_5.getUTCDate()).toString(), 2) + 'T' + SP.DataConvert.$B(($v_5.getUTCHours()).toString(), 2) + ':' + SP.DataConvert.$B(($v_5.getUTCMinutes()).toString(), 2) + ':' + SP.DataConvert.$B(($v_5.getUTCSeconds()).toString(), 2) + '.' + SP.DataConvert.$B(($v_5.getUTCMilliseconds()).toString(), 3) + 'Z';
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

                if (SP.DataConvert.$2z($v_F)) {
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
SP.DataConvert.$2z = function SP_DataConvert$$2z($p0) {
    if (SP.ScriptUtility.isNullOrUndefined($p0)) {
        return true;
    }
    if (SP.ClientObject.isInstanceOfType($p0) || SP.ClientValueObject.isInstanceOfType($p0)) {
        return true;
    }
    var $v_0 = Object.getType($p0);

    if ($v_0 === Array || $v_0 === Date || $v_0 === SP.Guid) {
        return true;
    }
    var $v_1 = typeof $p0;

    if ($v_1 === 'number' || $v_1 === 'string' || $v_1 === 'boolean' || $v_1 === 'object' && Number.isInstanceOfType($p0)) {
        return true;
    }
    return false;
};
SP.DataConvert.$B = function SP_DataConvert$$B($p0, $p1) {
    if ($p0.length >= $p1) {
        return $p0;
    }
    if ($p1 - $p0.length >= SP.DataConvert.$1y.length) {
        throw Error.argumentOutOfRange('len');
    }
    return SP.DataConvert.$1y[$p1 - $p0.length] + $p0;
};
SP.DataConvert.$1N = function SP_DataConvert$$1N($p0) {
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
SP.DataConvert.$2V = function SP_DataConvert$$2V($p0) {
    var $v_0 = ($p0.substr(0, 1)).toLowerCase() + $p0.substr(1);

    return $v_0;
};
SP.DataConvert.invokeSetProperty = function SP_DataConvert$invokeSetProperty(obj, propName, propValue) {
    var $v_0 = SP.DataConvert.$1N(propName);

    if (obj['set_' + $v_0]) {
        obj['set_' + $v_0](propValue);
    }
    else {
        $v_0 = SP.DataConvert.$2V(propName);
        obj['set_' + $v_0](propValue);
    }
};
SP.DataConvert.invokeGetProperty = function SP_DataConvert$invokeGetProperty(obj, propName) {
    var $v_0 = SP.DataConvert.$1N(propName);
    var $v_1;

    if (obj['get_' + $v_0]) {
        $v_1 = obj['get_' + $v_0]();
    }
    else {
        $v_0 = SP.DataConvert.$2V(propName);
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
    this.$q_1 = $p0;
    this.$p_1 = $p1;
};
SP.PageRequestFailedEventArgs.prototype = {
    $p_1: null,
    $q_1: null,
    get_executor: function SP_PageRequestFailedEventArgs$get_executor() {
        return this.$q_1;
    },
    get_errorMessage: function SP_PageRequestFailedEventArgs$get_errorMessage() {
        if (SP.ScriptUtility.isNullOrEmptyString(this.$p_1)) {
            return 'Cannot complete the request.';
        }
        return this.$p_1;
    },
    get_isErrorPage: function SP_PageRequestFailedEventArgs$get_isErrorPage() {
        if (this.$q_1.get_statusCode() !== 200) {
            return true;
        }
        var $v_0 = this.$q_1.getResponseHeader('SharePointError');

        if (!SP.ScriptUtility.isNullOrEmptyString($v_0)) {
            return true;
        }
        return false;
    }
};
SP.PageRequestSucceededEventArgs = function SP_PageRequestSucceededEventArgs($p0) {
    SP.PageRequestSucceededEventArgs.initializeBase(this);
    this.$q_1 = $p0;
};
SP.PageRequestSucceededEventArgs.prototype = {
    $q_1: null,
    get_executor: function SP_PageRequestSucceededEventArgs$get_executor() {
        return this.$q_1;
    }
};
SP.PageRequest = function SP_PageRequest() {
    this.$$d_$3C_0 = Function.createDelegate(this, this.$3C_0);
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
    $8_0: null,
    get_request: function SP_PageRequest$get_request() {
        if (!this.$8_0) {
            this.$8_0 = new Sys.Net.WebRequest();
        }
        return this.$8_0;
    },
    get_url: function SP_PageRequest$get_url() {
        return (this.get_request()).get_url();
    },
    set_url: function SP_PageRequest$set_url(value) {
        value = SP.ClientUtility.urlPathEncodeForXmlHttpRequest(value);
        (this.get_request()).set_url(value);
        return value;
    },
    $1e_0: null,
    get_expectedContentType: function SP_PageRequest$get_expectedContentType() {
        if (SP.ScriptUtility.isNullOrEmptyString(this.$1e_0)) {
            return 'html';
        }
        return this.$1e_0;
    },
    set_expectedContentType: function SP_PageRequest$set_expectedContentType(value) {
        this.$1e_0 = value;
        return value;
    },
    post: function SP_PageRequest$post(body) {
        (this.get_request()).set_httpVerb('POST');
        (this.get_request()).set_body(body);
        SP.ClientRequest.$2k(this.get_request());
        (this.get_request()).add_completed(this.$$d_$3C_0);
        (this.get_request()).invoke();
    },
    get: function SP_PageRequest$get() {
        (this.get_request()).set_httpVerb('GET');
        SP.ClientRequest.$2k(this.get_request());
        (this.get_request()).add_completed(this.$$d_$3C_0);
        (this.get_request()).invoke();
    },
    $F_0: null,
    get_$D_0: function SP_PageRequest$get_$D_0() {
        if (!this.$F_0) {
            this.$F_0 = new Sys.EventHandlerList();
        }
        return this.$F_0;
    },
    add_succeeded: function SP_PageRequest$add_succeeded(value) {
        (this.get_$D_0()).addHandler('succeeded', value);
    },
    remove_succeeded: function SP_PageRequest$remove_succeeded(value) {
        (this.get_$D_0()).removeHandler('succeeded', value);
    },
    add_failed: function SP_PageRequest$add_failed(value) {
        (this.get_$D_0()).addHandler('failed', value);
    },
    remove_failed: function SP_PageRequest$remove_failed(value) {
        (this.get_$D_0()).removeHandler('failed', value);
    },
    $3C_0: function SP_PageRequest$$3C_0($p0) {
        var $v_0 = null;
        var $v_1 = null;

        if (this.$F_0) {
            $v_1 = this.$F_0.getHandler('succeeded');
            $v_0 = this.$F_0.getHandler('failed');
        }
        var $v_2 = SP.ClientRequest.$27($p0, this.get_expectedContentType());

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
        this.$F_0 = null;
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
        resourceId = SP.DataConvert.$1N(resourceId);
        $v_0 = window.SP.Res[resourceId];
    }
    if (SP.ScriptUtility.isNullOrEmptyString($v_0) && window.SP && window.SP.RuntimeRes) {
        resourceId = SP.DataConvert.$1N(resourceId);
        $v_0 = window.SP.RuntimeRes[resourceId];
    }
    if (SP.ScriptUtility.isNullOrEmptyString($v_0)) {
        $v_0 = resourceId;
    }
    return String.format.apply(null, [$v_0].concat(args));
};
SP.XmlWriter = function SP_XmlWriter($p0) {
    this.$f_0 = [];
    this.$1_0 = $p0;
    this.$V_0 = true;
};
SP.XmlWriter.create = function SP_XmlWriter$create(sb) {
    return new SP.XmlWriter(sb);
};
SP.XmlWriter.prototype = {
    $1_0: null,
    $11_0: null,
    $V_0: false,
    $k_0: false,
    writeStartElement: function SP_XmlWriter$writeStartElement(tagName) {
        this.$1R_0();
        this.$1A_0();
        Array.add(this.$f_0, tagName);
        this.$11_0 = tagName;
        this.$1_0.append('<');
        this.$1_0.append(tagName);
        this.$V_0 = false;
        this.$k_0 = false;
    },
    writeElementString: function SP_XmlWriter$writeElementString(tagName, value) {
        this.$1R_0();
        this.$1A_0();
        this.writeStartElement(tagName);
        this.writeString(value);
        this.writeEndElement();
    },
    writeEndElement: function SP_XmlWriter$writeEndElement() {
        this.$1R_0();
        if (SP.ScriptUtility.isNullOrEmptyString(this.$11_0)) {
            throw Error.invalidOperation();
        }
        if (!this.$V_0) {
            this.$1_0.append(' />');
            this.$V_0 = true;
        }
        else {
            this.$1_0.append('</');
            this.$1_0.append(this.$11_0);
            this.$1_0.append('>');
        }
        Array.removeAt(this.$f_0, this.$f_0.length - 1);
        if (this.$f_0.length > 0) {
            this.$11_0 = this.$f_0[this.$f_0.length - 1];
        }
        else {
            this.$11_0 = null;
        }
    },
    $1A_0: function SP_XmlWriter$$1A_0() {
        if (!this.$V_0) {
            this.$1_0.append('>');
            this.$V_0 = true;
        }
    },
    writeAttributeString: function SP_XmlWriter$writeAttributeString(localName, value) {
        if (this.$V_0) {
            throw Error.invalidOperation();
        }
        this.$1_0.append(' ');
        this.$1_0.append(localName);
        this.$1_0.append('=\"');
        this.$1T_0(value, true);
        this.$1_0.append('\"');
    },
    writeStartAttribute: function SP_XmlWriter$writeStartAttribute(localName) {
        if (!this.$V_0) {
            throw Error.invalidOperation();
        }
        this.$k_0 = true;
        this.$1_0.append(' ');
        this.$1_0.append(localName);
        this.$1_0.append('=\"');
    },
    writeEndAttribute: function SP_XmlWriter$writeEndAttribute() {
        if (!this.$k_0) {
            throw Error.invalidOperation();
        }
        this.$1_0.append('\"');
        this.$k_0 = false;
    },
    writeString: function SP_XmlWriter$writeString(value) {
        if (this.$k_0) {
            this.$1T_0(value, true);
            this.$1_0.append(value);
        }
        else {
            this.$1A_0();
            this.$1T_0(value, false);
        }
    },
    writeRaw: function SP_XmlWriter$writeRaw(xml) {
        this.$1R_0();
        this.$1A_0();
        this.$1_0.append(xml);
    },
    $1R_0: function SP_XmlWriter$$1R_0() {
        if (this.$k_0) {
            throw Error.invalidOperation();
        }
    },
    $1T_0: function SP_XmlWriter$$1T_0($p0, $p1) {
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
SP.ClientHttpUtility.$2o = function SP_ClientHttpUtility$$2o($p0, $p1, $p2) {
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
SP.ClientAction = function SP_ClientAction(objectPath, name) {
    this.$G_0 = objectPath;
    this.$A_0 = name;
    this.$3_0 = SP.ClientRequest.get_nextSequenceId();
};
SP.ClientAction.$j = function SP_ClientAction$$j($p0, $p1) {
    if ($p0 && $p1) {
        if (SP.ClientObject.isInstanceOfType($p1)) {
            var $v_0 = $p1;

            if ($v_0 && $v_0.$0_0 && $v_0.$0_0 !== $p0) {
                throw Error.invalidOperation(SP.ResResources.getString('NotSameClientContext'));
            }
        }
    }
};
SP.ClientAction.$z = function SP_ClientAction$$z($p0, $p1) {
    if ($p0 && $p1 && $p1.length > 0) {
        for (var $v_0 = 0; $v_0 < $p1.length; $v_0++) {
            SP.ClientAction.$j($p0, $p1[$v_0]);
        }
    }
};
SP.ClientAction.prototype = {
    $3_0: 0,
    $G_0: null,
    $A_0: null,
    get_id: function SP_ClientAction$get_id() {
        return this.$3_0;
    },
    get_path: function SP_ClientAction$get_path() {
        return this.$G_0;
    },
    get_name: function SP_ClientAction$get_name() {
        return this.$A_0;
    }
};
SP.ClientActionSetProperty = function SP_ClientActionSetProperty(obj, propName, propValue) {
    SP.ClientActionSetProperty.initializeBase(this, [!obj ? null : obj.get_path(), propName]);
    if (!obj) {
        throw Error.argumentNull('obj');
    }
    if (!obj.get_path() || !(obj.get_path()).$d_0) {
        throw Error.create(SP.ResResources.getString('NoObjectPathAssociatedWithObject'));
    }
    SP.ClientAction.$j(obj.$0_0, propValue);
    this.$2M_1 = propName;
    this.$t_1 = propValue;
    this.$9_1 = new SP.SerializationContext(obj.$0_0);
    var $v_0;

    this.$1_1 = new Sys.StringBuilder();
    $v_0 = SP.XmlWriter.create(this.$1_1);
    this.$i_1($v_0, this.$9_1);
    $v_0.close();
    this.$t_1 = null;
};
SP.ClientActionSetProperty.prototype = {
    $2M_1: null,
    $t_1: null,
    $9_1: null,
    $1_1: null,
    $2t_0: function SP_ClientActionSetProperty$$2t_0($p0, $p1) {
        $p0.writeRaw(this.$1_1.toString());
        $p1.$Z_0(this.$9_1);
    },
    $i_1: function SP_ClientActionSetProperty$$i_1($p0, $p1) {
        $p0.writeStartElement('SetProperty');
        $p0.writeAttributeString('Id', this.$3_0.toString());
        $p0.writeAttributeString('ObjectPathId', this.$G_0.$3_0.toString());
        $p0.writeAttributeString('Name', this.$2M_1);
        $p1.addObjectPath(this.$G_0);
        $p0.writeStartElement('Parameter');
        SP.DataConvert.writeValueToXmlElement($p0, this.$t_1, $p1);
        $p0.writeEndElement();
        $p0.writeEndElement();
    }
};
SP.ClientActionSetStaticProperty = function SP_ClientActionSetStaticProperty(context, typeId, propName, propValue) {
    SP.ClientActionSetStaticProperty.initializeBase(this, [null, propName]);
    if (!context) {
        throw Error.argumentNull('context');
    }
    SP.ClientAction.$j(context, propValue);
    this.$O_1 = typeId;
    this.$t_1 = propValue;
    this.$9_1 = new SP.SerializationContext(context);
    var $v_0;

    this.$1_1 = new Sys.StringBuilder();
    $v_0 = SP.XmlWriter.create(this.$1_1);
    this.$i_1($v_0, this.$9_1);
    $v_0.close();
    this.$t_1 = null;
};
SP.ClientActionSetStaticProperty.prototype = {
    $O_1: null,
    $t_1: null,
    $9_1: null,
    $1_1: null,
    $2t_0: function SP_ClientActionSetStaticProperty$$2t_0($p0, $p1) {
        $p0.writeRaw(this.$1_1.toString());
        $p1.$Z_0(this.$9_1);
    },
    $i_1: function SP_ClientActionSetStaticProperty$$i_1($p0, $p1) {
        $p0.writeStartElement('SetStaticProperty');
        $p0.writeAttributeString('Id', this.$3_0.toString());
        $p0.writeAttributeString('TypeId', this.$O_1);
        $p0.writeAttributeString('Name', this.$A_0);
        $p0.writeStartElement('Parameter');
        SP.DataConvert.writeValueToXmlElement($p0, this.$t_1, $p1);
        $p0.writeEndElement();
        $p0.writeEndElement();
    }
};
SP.ClientActionInvokeMethod = function SP_ClientActionInvokeMethod(obj, methodName, parameters) {
    SP.ClientActionInvokeMethod.initializeBase(this, [!obj ? null : obj.get_path(), methodName]);
    if (!obj) {
        throw Error.argumentNull('obj');
    }
    SP.ClientAction.$z(obj.$0_0, parameters);
    this.$6_1 = parameters;
    if (!obj.get_path() || !(obj.get_path()).$d_0) {
        throw Error.create(SP.ResResources.getString('NoObjectPathAssociatedWithObject'));
    }
    this.$g_1 = obj.$5_0.$g_0;
    this.$9_1 = new SP.SerializationContext(obj.$0_0);
    var $v_0;

    this.$1_1 = new Sys.StringBuilder();
    $v_0 = SP.XmlWriter.create(this.$1_1);
    this.$i_1($v_0, this.$9_1);
    $v_0.close();
    this.$6_1 = null;
};
SP.ClientActionInvokeMethod.prototype = {
    $6_1: null,
    $g_1: null,
    $9_1: null,
    $1_1: null,
    $2t_0: function SP_ClientActionInvokeMethod$$2t_0($p0, $p1) {
        $p0.writeRaw(this.$1_1.toString());
        $p1.$Z_0(this.$9_1);
    },
    $i_1: function SP_ClientActionInvokeMethod$$i_1($p0, $p1) {
        $p0.writeStartElement('Method');
        $p0.writeAttributeString('Name', this.$A_0);
        $p0.writeAttributeString('Id', this.$3_0.toString());
        $p0.writeAttributeString('ObjectPathId', this.$G_0.$3_0.toString());
        if (!SP.ScriptUtility.isNullOrUndefined(this.$g_1)) {
            $p0.writeAttributeString('Version', this.$g_1);
        }
        $p1.addObjectPath(this.$G_0);
        if (this.$6_1 && this.$6_1.length > 0) {
            $p0.writeStartElement('Parameters');
            for (var $v_0 = 0; $v_0 < this.$6_1.length; $v_0++) {
                var $v_1 = this.$6_1[$v_0];

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
    SP.ClientActionInvokeStaticMethod.initializeBase(this, [null, methodName]);
    if (!context) {
        throw Error.argumentNull('context');
    }
    SP.ClientAction.$z(context, parameters);
    this.$O_1 = typeId;
    this.$6_1 = parameters;
    this.$9_1 = new SP.SerializationContext(context);
    var $v_0;

    this.$1_1 = new Sys.StringBuilder();
    $v_0 = SP.XmlWriter.create(this.$1_1);
    this.$i_1($v_0, this.$9_1);
    $v_0.close();
    this.$6_1 = null;
};
SP.ClientActionInvokeStaticMethod.prototype = {
    $6_1: null,
    $O_1: null,
    $9_1: null,
    $1_1: null,
    $2t_0: function SP_ClientActionInvokeStaticMethod$$2t_0($p0, $p1) {
        $p0.writeRaw(this.$1_1.toString());
        $p1.$Z_0(this.$9_1);
    },
    $i_1: function SP_ClientActionInvokeStaticMethod$$i_1($p0, $p1) {
        $p0.writeStartElement('StaticMethod');
        $p0.writeAttributeString('TypeId', this.$O_1);
        $p0.writeAttributeString('Name', this.$A_0);
        $p0.writeAttributeString('Id', this.$3_0.toString());
        if (this.$6_1 && this.$6_1.length > 0) {
            $p0.writeStartElement('Parameters');
            for (var $v_0 = 0; $v_0 < this.$6_1.length; $v_0++) {
                var $v_1 = this.$6_1[$v_0];

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
    SP.ClientActionInstantiateObjectPath.initializeBase(this, [$p0, null]);
};
SP.ClientActionInstantiateObjectPath.prototype = {
    $2t_0: function SP_ClientActionInstantiateObjectPath$$2t_0($p0, $p1) {
        $p0.writeStartElement('ObjectPath');
        $p0.writeAttributeString('Id', this.$3_0.toString());
        $p0.writeAttributeString('ObjectPathId', this.$G_0.$3_0.toString());
        $p1.addObjectPath(this.$G_0);
        $p0.writeEndElement();
    }
};
SP.ClientObject = function SP_ClientObject(context, objectPath) {
    if (!context) {
        throw Error.argumentNull('context');
    }
    this.$0_0 = context;
    this.$5_0 = new SP.ClientObjectData();
    this.$5_0.$e_0 = objectPath;
};
SP.ClientObject.prototype = {
    $0_0: null,
    $5_0: null,
    get_context: function SP_ClientObject$get_context() {
        return this.$0_0;
    },
    get_path: function SP_ClientObject$get_path() {
        return this.$5_0.$e_0;
    },
    get_objectVersion: function SP_ClientObject$get_objectVersion() {
        return this.$5_0.$g_0;
    },
    set_objectVersion: function SP_ClientObject$set_objectVersion(value) {
        this.$5_0.$g_0 = value;
        return value;
    },
    get_objectData: function SP_ClientObject$get_objectData() {
        return this.$5_0;
    },
    checkUninitializedProperty: function SP_ClientObject$checkUninitializedProperty(propName) {
        if (this.get_serverObjectIsNull()) {
            if (this.get_path() && !SP.ScriptUtility.isNullOrEmptyString((this.get_path()).get_$2W_0())) {
                throw Error.create(SP.ResResources.getString('NamedServerObjectIsNull', (this.get_path()).get_$2W_0()));
            }
            else {
                throw Error.create(SP.ResResources.getString('ServerObjectIsNull'));
            }
        }
        var $v_0 = (this.$5_0.get_properties())[propName];

        if (SP.ScriptUtility.isUndefined($v_0)) {
            throw Error.create(SP.ResResources.getString('NamedPropertyHasNotBeenInitialized', propName));
        }
    },
    $1Q_0: function SP_ClientObject$$1Q_0($p0) {
        this.$5_0 = $p0.$5_0;
    },
    fromJson: function SP_ClientObject$fromJson(initValue) {
        if (SP.ScriptUtility.isNullOrUndefined(initValue)) {
            this.$2j_0();
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

                if (this.$5_0.$e_0) {
                    $v_2.$3_0 = this.$5_0.$e_0.$3_0;
                }
                this.$5_0.$e_0 = $v_2;
                $v_2.$1J_0 = false;
                this.$0_0.$20_0($v_2);
            }
            delete initValue._ObjectIdentity_;
        }
        $v_0 = initValue._ObjectVersion_;
        if (!SP.ScriptUtility.isNullOrUndefined($v_0)) {
            var $v_3 = $v_0;

            if (!SP.ScriptUtility.isNullOrEmptyString($v_3)) {
                this.$5_0.$g_0 = $v_3;
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
        var $v_0 = this.get_$y_0();

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
        var $v_0 = this.get_$y_0();

        this.$2i_0($v_0);
    },
    isPropertyAvailable: function SP_ClientObject$isPropertyAvailable(propertyName) {
        var $v_0 = (this.$5_0.get_properties())[propertyName];

        return !SP.ScriptUtility.isUndefined($v_0);
    },
    isObjectPropertyInstantiated: function SP_ClientObject$isObjectPropertyInstantiated(propertyName) {
        var $v_0 = (this.$5_0.get_clientObjectProperties())[propertyName];

        return !SP.ScriptUtility.isUndefined($v_0);
    },
    get_$y_0: function SP_ClientObject$get_$y_0() {
        var $v_0 = this.$5_0.$C_0;

        if (!$v_0 || $v_0 !== (this.$0_0.get_pendingRequest()).$N_0) {
            $v_0 = new SP.ClientQueryInternal(this, null, false, null);
            this.$5_0.$C_0 = $v_0;
            this.$0_0.addQueryIdAndResultObject($v_0.$3_0, this);
            this.$0_0.addQuery($v_0);
            this.$0_0.$21_0(this);
            this.$2i_0($v_0);
            this.loadExpandoFields();
        }
        return $v_0;
    },
    $2i_0: function SP_ClientObject$$2i_0($p0) {
        var $$dict_1 = this.$5_0.get_properties();

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
    $1U_0: function SP_ClientObject$$1U_0() {
        this.$5_0.$C_0 = null;
    },
    $R_0: null,
    removeFromParentCollection: function SP_ClientObject$removeFromParentCollection() {
        if (this.$R_0) {
            this.$R_0.removeChild(this);
        }
    },
    $2P_0: false,
    $2j_0: function SP_ClientObject$$2j_0() {
        this.$2P_0 = true;
    },
    get_serverObjectIsNull: function SP_ClientObject$get_serverObjectIsNull() {
        if (this.$2P_0) {
            return true;
        }
        var $v_0 = this.get_path();

        if (!$v_0) {
            return false;
        }
        return $v_0.$1J_0;
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

        if (SP.ScriptUtility.isUndefined((this.$5_0.get_clientObjectProperties())[propertyName])) {
            throw Error.argument('propertyName');
        }
        var $v_1 = json._ObjectType_;

        if (!SP.ScriptUtility.isNullOrEmptyString($v_1)) {
            var $v_2 = Type.parse($v_1);

            if ($v_2 && $v_2 !== Object.getType(propertyValue)) {
                var $v_3 = new $v_2(this.$0_0);

                $v_0.$2l_0($v_3);
                (this.$5_0.get_clientObjectProperties())[propertyName] = $v_3;
            }
        }
    },
    $2l_0: function SP_ClientObject$$2l_0($p0) {
        this.$5_0.$1t_0 = $p0;
        if (this.$5_0.$L_0) {
            this.$5_0.$L_0 = $p0;
        }
        $p0.$1Q_0(this);
    },
    get_typedObject: function SP_ClientObject$get_typedObject() {
        if (!this.$5_0.$1t_0) {
            return this;
        }
        return this.$5_0.$1t_0;
    }
};
SP.ClientObjectData = function SP_ClientObjectData() {
};
SP.ClientObjectData.prototype = {
    $g_0: null,
    $H_0: null,
    get_properties: function SP_ClientObjectData$get_properties() {
        if (!this.$H_0) {
            this.$H_0 = {};
        }
        return this.$H_0;
    },
    $1a_0: null,
    get_clientObjectProperties: function SP_ClientObjectData$get_clientObjectProperties() {
        if (!this.$1a_0) {
            this.$1a_0 = {};
        }
        return this.$1a_0;
    },
    $1h_0: null,
    get_methodReturnObjects: function SP_ClientObjectData$get_methodReturnObjects() {
        if (!this.$1h_0) {
            this.$1h_0 = {};
        }
        return this.$1h_0;
    },
    $C_0: null,
    $1t_0: null,
    $L_0: null,
    $e_0: null
};
SP.ClientObjectCollection = function SP_ClientObjectCollection(context, objectPath) {
    this.getEnumerator = this.$3M_1;
    SP.ClientObjectCollection.initializeBase(this, [context, objectPath]);
};
SP.ClientObjectCollection.prototype = {
    get_areItemsAvailable: function SP_ClientObjectCollection$get_areItemsAvailable() {
        return this.$12_1;
    },
    $1E_1: null,
    retrieveItems: function SP_ClientObjectCollection$retrieveItems() {
        if (!this.$1E_1) {
            this.$1E_1 = new SP.ClientObjectPrototype(this.get_$y_0(), true);
        }
        return this.$1E_1;
    },
    $1U_0: function SP_ClientObjectCollection$$1U_0() {
        SP.ClientObject.prototype.$1U_0.call(this);
        this.$1E_1 = null;
    },
    $3M_1: function SP_ClientObjectCollection$$3M_1() {
        this.$2n_1();
        return new SP.ArrayListEnumerator(this.get_data());
    },
    getItemAtIndex: function SP_ClientObjectCollection$getItemAtIndex(i) {
        var $v_0 = (this.get_data())[i];

        return $v_0;
    },
    get_count: function SP_ClientObjectCollection$get_count() {
        this.$2n_1();
        return (this.get_data()).length;
    },
    $12_1: false,
    $3E_1: function SP_ClientObjectCollection$$3E_1() {
        this.$12_1 = true;
    },
    $2n_1: function SP_ClientObjectCollection$$2n_1() {
        if (!this.$12_1) {
            throw Error.create(SP.ResResources.getString('CollectionHasNotBeenInitialized'));
        }
    },
    $2_1: null,
    get_data: function SP_ClientObjectCollection$get_data() {
        if (!this.$2_1) {
            this.$2_1 = [];
        }
        return this.$2_1;
    },
    fromJson: function SP_ClientObjectCollection$fromJson(obj) {
        SP.ClientObject.prototype.fromJson.call(this, obj);
        var $v_0;

        $v_0 = obj._Child_Items_;
        if ($v_0) {
            this.$2_1 = [];
            this.$12_1 = true;
            SP.DataConvert.$1v(this.$0_0, this.$2_1, $v_0, this.get_childItemType());
            for (var $v_1 = 0; $v_1 < this.$2_1.length; $v_1++) {
                if (SP.ClientObject.isInstanceOfType(this.$2_1[$v_1])) {
                    var $v_2 = this.$2_1[$v_1];

                    $v_2.$R_0 = this;
                }
            }
        }
    },
    addChild: function SP_ClientObjectCollection$addChild(obj) {
        Array.add(this.get_data(), obj);
        if (!obj.$R_0) {
            obj.$R_0 = this;
        }
        this.$12_1 = true;
    },
    removeChild: function SP_ClientObjectCollection$removeChild(obj) {
        if (!this.$2_1) {
            return;
        }
        var $v_0 = null;

        if (SP.ObjectPathIdentity.isInstanceOfType(obj.get_path())) {
            $v_0 = obj.get_path();
        }
        for (var $v_1 = this.$2_1.length - 1; $v_1 >= 0; $v_1--) {
            if (this.$2_1[$v_1] === obj) {
                if (this.$2_1[$v_1].$R_0 === this) {
                    this.$2_1[$v_1].$R_0 = null;
                }
                Array.removeAt(this.$2_1, $v_1);
            }
            else if ($v_0 && SP.ClientObject.isInstanceOfType(this.$2_1[$v_1]) && SP.ObjectPathIdentity.isInstanceOfType(this.$2_1[$v_1].get_path()) && $v_0.$r_1 === (this.$2_1[$v_1].get_path()).$r_1) {
                if (this.$2_1[$v_1].$R_0 === this) {
                    this.$2_1[$v_1].$R_0 = null;
                }
                Array.removeAt(this.$2_1, $v_1);
            }
        }
    }
};
SP.ClientObjectList = function SP_ClientObjectList(context, objectPath, childItemType) {
    SP.ClientObjectList.initializeBase(this, [context, objectPath]);
    this.$1Y_2 = childItemType;
};
SP.ClientObjectList.prototype = {
    $1Y_2: null,
    fromJson: function SP_ClientObjectList$fromJson(initValue) {
        if (SP.ScriptUtility.isNullOrUndefined(initValue)) {
            this.$2j_0();
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

            SP.DataConvert.$1v(this.$0_0, $v_1, $v_0, this.$1Y_2);
            for (var $v_2 = 0; $v_2 < $v_1.length; $v_2++) {
                var $v_3 = $v_1[$v_2];

                if (SP.ClientObject.isInstanceOfType($v_3)) {
                    this.addChild($v_3);
                }
            }
        }
        this.$3E_1();
    },
    get_childItemType: function SP_ClientObjectList$get_childItemType() {
        return this.$1Y_2;
    },
    customFromJson: function SP_ClientObjectList$customFromJson(initValue) {
        return false;
    }
};
SP.ClientObjectPrototype = function SP_ClientObjectPrototype($p0, $p1) {
    this.$C_0 = $p0;
    this.$m_0 = $p1;
};
SP.ClientObjectPrototype.prototype = {
    $C_0: null,
    $m_0: false,
    retrieve: function SP_ClientObjectPrototype$retrieve() {
        if (this.$m_0) {
            if (!arguments.length) {
                (this.$C_0.get_childItemQuery()).selectAllProperties();
            }
            else {
                if (arguments.length === 1 && Array.isInstanceOfType(arguments[0])) {
                    var $v_0 = arguments[0];

                    for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
                        var $v_2 = $v_0[$v_1];

                        (this.$C_0.get_childItemQuery()).select($v_2);
                    }
                }
                else {
                    for (var $v_3 = 0; $v_3 < arguments.length; $v_3++) {
                        var $v_4 = arguments[$v_3];

                        (this.$C_0.get_childItemQuery()).select($v_4);
                    }
                }
            }
        }
        else {
            if (!arguments.length) {
                this.$C_0.selectAllProperties();
            }
            else {
                if (arguments.length === 1 && Array.isInstanceOfType(arguments[0])) {
                    var $v_5 = arguments[0];

                    for (var $v_6 = 0; $v_6 < $v_5.length; $v_6++) {
                        var $v_7 = $v_5[$v_6];

                        this.$C_0.select($v_7);
                    }
                }
                else {
                    for (var $v_8 = 0; $v_8 < arguments.length; $v_8++) {
                        var $v_9 = arguments[$v_8];

                        this.$C_0.select($v_9);
                    }
                }
            }
        }
    },
    $1L_0: null,
    retrieveObject: function SP_ClientObjectPrototype$retrieveObject(propertyName) {
        if (!this.$1L_0) {
            this.$1L_0 = {};
        }
        var $v_0 = this.$1L_0[propertyName];

        if (!SP.ScriptUtility.isNullOrUndefined($v_0)) {
            return $v_0;
        }
        var $v_1 = false;
        var $v_2;

        if (this.$m_0) {
            $v_2 = (this.$C_0.get_childItemQuery()).$10_1(propertyName);
        }
        else {
            $v_2 = this.$C_0.$10_1(propertyName);
        }
        if (!$v_2) {
            $v_2 = new SP.ClientQueryInternal(null, propertyName, true, this.$C_0);
            $v_1 = true;
        }
        $v_0 = new SP.ClientObjectPrototype($v_2, false);
        if ($v_1) {
            if (this.$m_0) {
                (this.$C_0.get_childItemQuery()).selectSubQuery($v_2);
            }
            else {
                this.$C_0.selectSubQuery($v_2);
            }
        }
        this.$1L_0[propertyName] = $v_0;
        return $v_0;
    },
    $1K_0: null,
    retrieveCollectionObject: function SP_ClientObjectPrototype$retrieveCollectionObject(propertyName) {
        if (!this.$1K_0) {
            this.$1K_0 = {};
        }
        var $v_0 = this.$1K_0[propertyName];

        if (!SP.ScriptUtility.isNullOrUndefined($v_0)) {
            return $v_0;
        }
        var $v_1 = false;
        var $v_2;

        if (this.$m_0) {
            $v_2 = (this.$C_0.get_childItemQuery()).$10_1(propertyName);
        }
        else {
            $v_2 = this.$C_0.$10_1(propertyName);
        }
        if (!$v_2) {
            $v_2 = new SP.ClientQueryInternal(null, propertyName, true, this.$C_0);
            $v_1 = true;
        }
        $v_0 = new SP.ClientObjectCollectionPrototype($v_2, false);
        if ($v_1) {
            if (this.$m_0) {
                (this.$C_0.get_childItemQuery()).selectSubQuery($v_2);
            }
            else {
                this.$C_0.selectSubQuery($v_2);
            }
        }
        this.$1K_0[propertyName] = $v_0;
        return $v_0;
    }
};
SP.ClientObjectCollectionPrototype = function SP_ClientObjectCollectionPrototype($p0, $p1) {
    SP.ClientObjectCollectionPrototype.initializeBase(this, [$p0, $p1]);
};
SP.ClientObjectCollectionPrototype.prototype = {
    $1g_1: null,
    retrieveItems: function SP_ClientObjectCollectionPrototype$retrieveItems() {
        if (!this.$1g_1) {
            this.$1g_1 = new SP.ClientObjectPrototype(this.$C_0, true);
        }
        return this.$1g_1;
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
    this.$H_1 = {};
    this.$39_1 = [];
    SP.ClientQueryInternal.initializeBase(this, [$p2 ? null : $p0.get_path(), $p1]);
    if (!$p2 && (!$p0.get_path() || !($p0.get_path()).$d_0)) {
        throw Error.create(SP.ResResources.getString('NoObjectPathAssociatedWithObject'));
    }
    if ($p2) {
        if (!$p3) {
            throw Error.argumentNull('parentQuery');
        }
        this.$1k_1 = $p3.$1k_1;
        this.$0_1 = $p3.$0_1;
    }
    else {
        if (!$p0) {
            throw Error.argumentNull('obj');
        }
        this.$1k_1 = this;
        this.$0_1 = $p0.$0_0;
    }
};
SP.ClientQueryInternal.prototype = {
    $1k_1: null,
    $0_1: null,
    $n_1: null,
    $1D_1: false,
    get_isChildItemQuery: function SP_ClientQueryInternal$get_isChildItemQuery() {
        return this.$1D_1;
    },
    $3F_1: function SP_ClientQueryInternal$$3F_1() {
        this.$1D_1 = true;
    },
    select: function SP_ClientQueryInternal$select($p0) {
        if (SP.ScriptUtility.isNullOrEmptyString($p0)) {
            throw Error.argument('propertyName', SP.ResResources.getString('RequestEmptyQueryName'));
        }
        var $v_0 = this.$H_1[$p0];

        if (SP.ScriptUtility.isNullOrUndefined($v_0)) {
            $v_0 = new SP.ClientQueryProperty();
            this.$H_1[$p0] = $v_0;
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
        var $v_0 = this.$H_1[$p0];

        if (SP.ScriptUtility.isNullOrUndefined($v_0)) {
            $v_0 = new SP.ClientQueryProperty();
            this.$H_1[$p0] = $v_0;
        }
        $v_0.selectAllSet = true;
        $v_0.selectAll = true;
        return this;
    },
    $2O_1: false,
    selectAllProperties: function SP_ClientQueryInternal$selectAllProperties() {
        this.$2O_1 = true;
        return this;
    },
    selectSubQuery: function SP_ClientQueryInternal$selectSubQuery($p0) {
        if (SP.ScriptUtility.isNullOrEmptyString($p0.$A_0)) {
            throw Error.argument('subQuery', SP.ResResources.getString('RequestEmptyQueryName'));
        }
        var $v_0 = this.$H_1[$p0.$A_0];

        if (SP.ScriptUtility.isNullOrUndefined($v_0)) {
            $v_0 = new SP.ClientQueryProperty();
            $v_0.query = $p0;
            this.$H_1[$p0.$A_0] = $v_0;
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
    $10_1: function SP_ClientQueryInternal$$10_1($p0) {
        if (SP.ScriptUtility.isNullOrEmptyString($p0)) {
            throw Error.argumentNull('name');
        }
        var $v_0 = this.$H_1[$p0];

        if ($v_0) {
            return $v_0.query;
        }
        return null;
    },
    get_childItemQuery: function SP_ClientQueryInternal$get_childItemQuery() {
        if (!this.$n_1) {
            this.$n_1 = new SP.ClientQueryInternal(null, '_Child_Items_', true, this);
            this.$n_1.$3F_1();
        }
        return this.$n_1;
    },
    $2s_1: function SP_ClientQueryInternal$$2s_1($p0, $p1) {
        $p0.writeStartElement('Query');
        this.$2r_1($p0, $p1);
        $p0.writeEndElement();
        if (this.$n_1) {
            $p0.writeStartElement('ChildItemQuery');
            this.$n_1.$2r_1($p0, $p1);
            $p0.writeEndElement();
        }
    },
    $2r_1: function SP_ClientQueryInternal$$2r_1($p0, $p1) {
        $p0.writeAttributeString('SelectAllProperties', this.$2O_1 ? 'true' : 'false');
        $p0.writeStartElement('Properties');
        var $$dict_2 = this.$H_1;

        for (var $$key_3 in $$dict_2) {
            var $v_0 = {
                key: $$key_3,
                value: $$dict_2[$$key_3]
            };
            var $v_1 = $v_0.key;
            var $v_2 = this.$H_1[$v_1];

            $p0.writeStartElement('Property');
            $p0.writeAttributeString('Name', $v_1);
            if ($v_2.scalarPropertySet) {
                $p0.writeAttributeString('ScalarProperty', $v_2.scalarProperty ? 'true' : 'false');
            }
            if ($v_2.selectAllSet) {
                $p0.writeAttributeString('SelectAll', $v_2.selectAll ? 'true' : 'false');
            }
            if ($v_2.query) {
                $v_2.query.$2s_1($p0, $p1);
            }
            $p0.writeEndElement();
        }
        $p0.writeEndElement();
        if (this.$1D_1) { }
    },
    $2t_0: function SP_ClientQueryInternal$$2t_0($p0, $p1) {
        $p0.writeStartElement('Query');
        $p0.writeAttributeString('Id', this.$3_0.toString());
        $p0.writeAttributeString('ObjectPathId', this.$G_0.$3_0.toString());
        $p1.addObjectPath(this.$G_0);
        this.$2s_1($p0, $p1);
        $p0.writeEndElement();
    }
};
SP.WebRequestEventArgs = function SP_WebRequestEventArgs(webRequest) {
    SP.WebRequestEventArgs.initializeBase(this);
    if (!webRequest) {
        throw Error.argumentNull('webRequest');
    }
    this.$17_1 = webRequest;
};
SP.WebRequestEventArgs.prototype = {
    $17_1: null,
    get_webRequest: function SP_WebRequestEventArgs$get_webRequest() {
        return this.$17_1;
    }
};
SP.ClientRequest = function SP_ClientRequest($p0) {
    this.$$d_$32_0 = Function.createDelegate(this, this.$32_0);
    this.$S_0 = 0;
    this.$u_0 = [];
    this.$15_0 = {};
    if (!$p0) {
        throw Error.argumentNull('context');
    }
    this.$0_0 = $p0;
};
SP.ClientRequest.get_nextSequenceId = function SP_ClientRequest$get_nextSequenceId() {
    var $v_0 = SP.ClientRequest.$1x;

    SP.ClientRequest.$1x++;
    return $v_0;
};
SP.ClientRequest.$2k = function SP_ClientRequest$$2k($p0) {
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
SP.ClientRequest.$27 = function SP_ClientRequest$$27($p0, $p1) {
    var $v_0;

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
    $8_0: null,
    get_webRequest: function SP_ClientRequest$get_webRequest() {
        if (!this.$8_0) {
            this.$8_0 = new Sys.Net.WebRequest();
            this.$8_0.set_httpVerb('POST');
            (this.$8_0.get_headers())['Content-Type'] = 'text/xml';
            var $v_0 = this.get_$2m_0();

            $v_0 = SP.ClientUtility.urlPathEncodeForXmlHttpRequest($v_0);
            this.$8_0.set_url($v_0);
            this.$8_0.set_timeout(this.$0_0.get_requestTimeout());
            if (this.$0_0.$x_0) {
                var $v_1 = this.$0_0.$x_0.createWebRequestExecutor();

                this.$8_0.set_executor($v_1);
            }
        }
        return this.$8_0;
    },
    $T_0: null,
    get_$2m_0: function SP_ClientRequest$get_$2m_0() {
        if (SP.ScriptUtility.isNullOrEmptyString(this.$T_0)) {
            this.$T_0 = this.$0_0.$w_0;
            if (!this.$T_0.endsWith('/')) {
                this.$T_0 += '/_vti_bin/client.svc/ProcessQuery';
            }
            else {
                this.$T_0 += '_vti_bin/client.svc/ProcessQuery';
            }
            this.$T_0 = this.$0_0.getRequestUrl(this.$T_0);
        }
        return this.$T_0;
    },
    $2Y_0: function SP_ClientRequest$$2Y_0() {
        this.$T_0 = null;
        var $v_0 = this.get_$2m_0();

        if (this.$8_0) {
            $v_0 = SP.ClientUtility.urlPathEncodeForXmlHttpRequest($v_0);
            this.$8_0.set_url($v_0);
        }
    },
    $F_0: null,
    get_$D_0: function SP_ClientRequest$get_$D_0() {
        if (!this.$F_0) {
            this.$F_0 = new Sys.EventHandlerList();
        }
        return this.$F_0;
    },
    add_requestSucceeded: function SP_ClientRequest$add_requestSucceeded(value) {
        (this.get_$D_0()).addHandler('succeeded', value);
    },
    remove_requestSucceeded: function SP_ClientRequest$remove_requestSucceeded(value) {
        (this.get_$D_0()).removeHandler('succeeded', value);
    },
    add_requestFailed: function SP_ClientRequest$add_requestFailed(value) {
        (this.get_$D_0()).addHandler('failed', value);
    },
    remove_requestFailed: function SP_ClientRequest$remove_requestFailed(value) {
        (this.get_$D_0()).removeHandler('failed', value);
    },
    $N_0: null,
    $1S_0: function SP_ClientRequest$$1S_0($p0) {
        if (this.$S_0) {
            throw Error.create(SP.ResResources.getString('RequestHasBeenExecuted'));
        }
        Array.add(this.$u_0, $p0);
        this.$N_0 = $p0;
    },
    $a_0: null,
    $21_0: function SP_ClientRequest$$21_0($p0) {
        if (!this.$a_0) {
            this.$a_0 = [];
        }
        Array.add(this.$a_0, $p0);
    },
    $b_0: null,
    $2v_0: function SP_ClientRequest$$2v_0($p0) {
        if (!this.$b_0) {
            this.$b_0 = [];
        }
        Array.add(this.$b_0, $p0);
    },
    $1d_0: null,
    get_$1V_0: function SP_ClientRequest$get_$1V_0() {
        if (!this.$1d_0) {
            this.$1d_0 = [];
        }
        return this.$1d_0;
    },
    $1U_0: function SP_ClientRequest$$1U_0() {
        if (this.$a_0) {
            for (var $v_0 = 0; $v_0 < this.$a_0.length; $v_0++) {
                var $v_1 = this.$a_0[$v_0];

                $v_1.$1U_0();
            }
            this.$a_0 = null;
        }
        if (this.$b_0) {
            for (var $v_2 = 0; $v_2 < this.$b_0.length; $v_2++) {
                var $v_3 = this.$b_0[$v_2];

                $v_3.$36_0();
            }
            this.$b_0 = null;
        }
    },
    $31_0: function SP_ClientRequest$$31_0() {
        if (this.$S_0) {
            throw Error.create(SP.ResResources.getString('RequestHasBeenExecuted'));
        }
        this.$S_0 = 1;
        var $v_0 = this.$2x_0();

        this.$1U_0();
        this.$0_0.$23_0(new SP.WebRequestEventArgs(this.get_webRequest()));
        (this.get_webRequest()).add_completed(this.$$d_$32_0);
        (this.get_webRequest()).set_body($v_0.toString());
        (this.get_webRequest()).invoke();
    },
    $9_0: null,
    get_$3D_0: function SP_ClientRequest$get_$3D_0() {
        if (!this.$9_0) {
            this.$9_0 = new SP.SerializationContext(this.$0_0);
        }
        return this.$9_0;
    },
    $2x_0: function SP_ClientRequest$$2x_0() {
        var $v_0 = this.get_$3D_0();
        var $v_1 = new Sys.StringBuilder();
        var $v_2 = SP.XmlWriter.create($v_1);

        $v_2.writeStartElement('Request');
        $v_2.writeAttributeString('xmlns', 'http://schemas.microsoft.com/sharepoint/clientquery/2009');
        $v_2.writeAttributeString('SchemaVersion', SP.ClientSchemaVersions.currentVersion);
        $v_2.writeAttributeString('LibraryVersion', '15.0.0.0');
        if (!SP.ScriptUtility.isNullOrEmptyString(this.$0_0.get_applicationName())) {
            $v_2.writeAttributeString('ApplicationName', this.$0_0.get_applicationName());
        }
        $v_2.writeStartElement('Actions');
        var $v_3 = [];

        for (var $v_5 = 0; $v_5 < this.$u_0.length; $v_5++) {
            var $v_6 = this.$u_0[$v_5];

            if (SP.ClientActionExecutionScopeStart.isInstanceOfType($v_6)) {
                var $v_7 = $v_6;

                $v_7.$4_1.$1z_0($v_2, $v_0);
                $v_3.push($v_7.$4_1);
            }
            else if (SP.ClientActionExecutionScopeEnd.isInstanceOfType($v_6)) {
                var $v_8 = $v_6;

                if (!$v_3.length || $v_3.pop() !== $v_8.$4_1) {
                    throw SP.ExceptionHandlingScope.$7();
                }
                $v_8.$4_1.$2q_0($v_2, $v_0);
            }
            else {
                $v_6.$2t_0($v_2, $v_0);
            }
        }
        if ($v_3.length > 0) {
            throw SP.ExceptionHandlingScope.$7();
        }
        $v_2.writeEndElement();
        $v_2.writeStartElement('ObjectPaths');
        var $v_4 = {};

        do {
            var $v_9 = [];
            var $$dict_A = $v_0.$1H_0;

            for (var $$key_B in $$dict_A) {
                var $v_A = {
                    key: $$key_B,
                    value: $$dict_A[$$key_B]
                };

                if (SP.ScriptUtility.isUndefined($v_4[$v_A.key])) {
                    Array.add($v_9, $v_A.value.$3_0);
                }
            }
            if (!$v_9.length) {
                break;
            }
            for (var $v_B = 0; $v_B < $v_9.length; $v_B++) {
                var $v_C = this.$0_0.$1F_0[$v_9[$v_B].toString()];

                $v_C.$2t_0($v_2, $v_0);
                $v_4[$v_9[$v_B].toString()] = $v_C;
            }
        } while (true);
        $v_2.writeEndElement();
        $v_2.writeEndElement();
        return $v_1;
    },
    $1i_0: false,
    get_navigateWhenServerRedirect: function SP_ClientRequest$get_navigateWhenServerRedirect() {
        return this.$1i_0;
    },
    set_navigateWhenServerRedirect: function SP_ClientRequest$set_navigateWhenServerRedirect(value) {
        this.$1i_0 = value;
        return value;
    },
    $2y_0: function SP_ClientRequest$$2y_0($p0) {
        var $v_0 = SP.ClientRequest.$27($p0, 'application/json');

        if ($v_0) {
            this.$h_0($v_0, null, 0, null, null, null, null);
            return true;
        }
        return false;
    },
    $h_0: function SP_ClientRequest$$h_0($p0, $p1, $p2, $p3, $p4, $p5, $p6) {
        var $v_0 = (this.get_$D_0()).getHandler('failed');

        if ($v_0) {
            $v_0(this, new SP.ClientRequestFailedEventArgs(this, $p0, $p1, $p2, $p3, $p4, $p5, $p6));
        }
    },
    $32_0: function SP_ClientRequest$$32_0($p0) {
        if (this.$2y_0($p0)) {
            this.$8_0 = null;
            return;
        }
        var $v_0 = $p0.get_responseData();
        var $v_1 = SP.ClientRequest._validateJson($v_0);

        if (!$v_1) {
            var $v_6 = SP.ResResources.getString('RequestUnexpectedResponse');

            this.$S_0 = 3;
            this.$h_0($v_6, null, 0, null, null, null, null);
            this.$8_0 = null;
            return;
        }
        $v_0 = SP.ParseJSONUtil.$2X($v_0);
        var $v_2 = eval($v_0);

        if (!$v_2 || SP.ScriptUtility.isNullOrUndefined($v_2.length) || !($v_2.length >= 1) || SP.ScriptUtility.isNullOrUndefined($v_2[0]) || typeof $v_2[0] !== 'object' || SP.ScriptUtility.isNullOrEmptyString($v_2[0].SchemaVersion) || SP.ScriptUtility.isNullOrEmptyString($v_2[0].LibraryVersion)) {
            var $v_7 = SP.ResResources.getString('RequestUnexpectedResponse');

            this.$S_0 = 3;
            this.$h_0($v_7, null, 0, null, null, null, null);
            this.$8_0 = null;
            return;
        }
        var $v_3 = $v_2[0];

        this.$0_0.$3H_0($v_3.SchemaVersion);
        this.$0_0.$3G_0($v_3.LibraryVersion);
        if (!SP.ScriptUtility.isNullOrEmptyString($v_3.TraceCorrelationId)) {
            this.$0_0.$3I_0($v_3.TraceCorrelationId);
        }
        var $v_4 = $v_3.ErrorInfo;

        if (!SP.ScriptUtility.isNullOrUndefined($v_4)) {
            var $v_8 = $v_4.ErrorMessage;
            var $v_9 = $v_4.ErrorStackTrace;
            var $v_A = $v_4.ErrorCode;
            var $v_B = $v_4.ErrorTypeName;
            var $v_C = $v_4.ErrorValue;
            var $v_D = $v_4.ErrorDetails;
            var $v_E = $v_4.TraceCorrelationId;

            $v_D = SP.DataConvert.fixupType(this.$0_0, $v_D);
            this.$S_0 = 3;
            this.$8_0 = null;
            if ($v_A === SP.ClientErrorCodes.redirect && !SP.ScriptUtility.isNullOrEmptyString($v_C) && this.$1i_0) {
                window.navigate($v_C);
            }
            else {
                this.$h_0($v_8, $v_9, $v_A, $v_C, $v_B, $v_D, $v_E);
            }
            return;
        }
        this.$0_0.$1X_0 = true;
        try {
            for (var $v_F = 1; $v_F < $v_2.length; $v_F += 2) {
                var $v_G = $v_2[$v_F];
                var $v_H = this.$15_0[$v_G.toString()];
                var $v_I = $v_2[$v_F + 1];

                if (!SP.ScriptUtility.isNullOrUndefined($v_H) && !SP.ScriptUtility.isNullOrUndefined($v_I)) {
                    if (SP.ClientObject.isInstanceOfType($v_H) && typeof $v_I === 'object') {
                        var $v_J = $v_I._ObjectType_;

                        if (!SP.ScriptUtility.isNullOrEmptyString($v_J)) {
                            var $v_K = Type.parse($v_J);

                            if ($v_K && $v_K !== Object.getType($v_H)) {
                                var $v_L = new $v_K(this.$0_0);

                                $v_H.$2l_0($v_L);
                                $v_H = $v_L;
                            }
                        }
                    }
                    if (SP.IFromJson.isInstanceOfType($v_H)) {
                        var $v_M = $v_H;

                        if (!$v_M.customFromJson($v_I)) {
                            $v_M.fromJson($v_I);
                        }
                    }
                    if (Array.isInstanceOfType($v_H)) {
                        SP.DataConvert.populateArray(this.$0_0, $v_H, $v_I);
                    }
                }
            }
        }
        finally {
            this.$0_0.$1X_0 = false;
        }
        this.$S_0 = 2;
        var $v_5 = (this.get_$D_0()).getHandler('succeeded');

        if ($v_5) {
            $v_5(this, new SP.ClientRequestSucceededEventArgs(this));
        }
        this.$8_0 = null;
    },
    $22_0: function SP_ClientRequest$$22_0($p0, $p1) {
        if (this.$S_0) {
            throw Error.create(SP.ResResources.getString('RequestHasBeenExecuted'));
        }
        this.$15_0[$p0.toString()] = $p1;
        if (SP.ClientObject.isInstanceOfType($p1)) {
            if ($p1.$5_0.$L_0) {
                this.$15_0[$p0.toString()] = $p1.$5_0.$L_0;
            }
        }
    }
};
SP.ClientRequestEventArgs = function SP_ClientRequestEventArgs($p0) {
    SP.ClientRequestEventArgs.initializeBase(this);
    this.$8_1 = $p0;
};
SP.ClientRequestEventArgs.prototype = {
    $8_1: null,
    get_request: function SP_ClientRequestEventArgs$get_request() {
        return this.$8_1;
    }
};
SP.ClientRequestFailedEventArgs = function SP_ClientRequestFailedEventArgs(request, message, stackTrace, errorCode, errorValue, errorTypeName, errorDetails, errorTraceCorrelationId) {
    SP.ClientRequestFailedEventArgs.initializeBase(this, [request]);
    this.$2J_2 = message;
    this.$2Q_2 = stackTrace;
    this.$2D_2 = errorCode;
    this.$2H_2 = errorValue;
    this.$2G_2 = errorTypeName;
    this.$2E_2 = errorDetails;
    this.$2F_2 = errorTraceCorrelationId;
};
SP.ClientRequestFailedEventArgs.prototype = {
    $2J_2: null,
    $2Q_2: null,
    $2D_2: 0,
    $2H_2: null,
    $2G_2: null,
    $2E_2: null,
    $2F_2: null,
    get_message: function SP_ClientRequestFailedEventArgs$get_message() {
        return this.$2J_2;
    },
    get_stackTrace: function SP_ClientRequestFailedEventArgs$get_stackTrace() {
        return this.$2Q_2;
    },
    get_errorCode: function SP_ClientRequestFailedEventArgs$get_errorCode() {
        return this.$2D_2;
    },
    get_errorValue: function SP_ClientRequestFailedEventArgs$get_errorValue() {
        return this.$2H_2;
    },
    get_errorTypeName: function SP_ClientRequestFailedEventArgs$get_errorTypeName() {
        return this.$2G_2;
    },
    get_errorDetails: function SP_ClientRequestFailedEventArgs$get_errorDetails() {
        return this.$2E_2;
    },
    get_errorTraceCorrelationId: function SP_ClientRequestFailedEventArgs$get_errorTraceCorrelationId() {
        return this.$2F_2;
    }
};
SP.ClientRequestSucceededEventArgs = function SP_ClientRequestSucceededEventArgs($p0) {
    SP.ClientRequestSucceededEventArgs.initializeBase(this, [$p0]);
};
SP.FormDigestInfo = function SP_FormDigestInfo() {
};
SP.FormDigestInfo.prototype = {
    $c_0: null,
    get_digestValue: function SP_FormDigestInfo$get_digestValue() {
        return this.$c_0;
    },
    set_digestValue: function SP_FormDigestInfo$set_digestValue($p0) {
        this.$c_0 = $p0;
        return $p0;
    },
    $13_0: 0,
    get_expiration: function SP_FormDigestInfo$get_expiration() {
        return this.$13_0;
    },
    set_expiration: function SP_FormDigestInfo$set_expiration($p0) {
        this.$13_0 = $p0;
        return $p0;
    },
    $1M_0: null,
    get_webServerRelativeUrl: function SP_FormDigestInfo$get_webServerRelativeUrl() {
        return this.$1M_0;
    },
    set_webServerRelativeUrl: function SP_FormDigestInfo$set_webServerRelativeUrl($p0) {
        this.$1M_0 = $p0;
        return $p0;
    }
};
SP.ClientRuntimeContext = function SP_ClientRuntimeContext(serverRelativeUrlOrFullUrl) {
    this.$1F_0 = {};
    if (!serverRelativeUrlOrFullUrl) {
        throw Error.argumentNull('serverRelativeUrlOrFullUrl');
    }
    if (!serverRelativeUrlOrFullUrl.startsWith('/') && !(serverRelativeUrlOrFullUrl.toLowerCase()).startsWith('http://') && !(serverRelativeUrlOrFullUrl.toLowerCase()).startsWith('https://')) {
        throw Error.argument('serverRelativeUrlOrFullUrl');
    }
    this.$w_0 = serverRelativeUrlOrFullUrl;
};
SP.ClientRuntimeContext.prototype = {
    $w_0: null,
    $2I_0: false,
    get_isPageUrl: function SP_ClientRuntimeContext$get_isPageUrl() {
        return this.$2I_0;
    },
    set_isPageUrl: function SP_ClientRuntimeContext$set_isPageUrl(value) {
        if (value && !this.$1C_0) {
            throw Error.invalidOperation();
        }
        this.$2I_0 = value;
        return value;
    },
    get_url: function SP_ClientRuntimeContext$get_url() {
        return this.$w_0;
    },
    $1u_0: null,
    get_viaUrl: function SP_ClientRuntimeContext$get_viaUrl() {
        return this.$1u_0;
    },
    set_viaUrl: function SP_ClientRuntimeContext$set_viaUrl(value) {
        this.$1u_0 = value;
        return value;
    },
    getRequestUrl: function SP_ClientRuntimeContext$getRequestUrl(url) {
        var $v_0 = this.$1u_0;

        if (!SP.ScriptUtility.isNullOrEmptyString($v_0)) {
            if ($v_0.indexOf('?') < 0) {
                $v_0 += '?';
            }
            if (!$v_0.endsWith('?') && !$v_0.endsWith('&')) {
                $v_0 += '&';
            }
            $v_0 += 'MS.SP.url=' + SP.ClientHttpUtility.$2o(url, false, false);
            url = $v_0;
        }
        return url;
    },
    $1C_0: false,
    get_formDigestHandlingEnabled: function SP_ClientRuntimeContext$get_formDigestHandlingEnabled() {
        return this.$1C_0;
    },
    set_formDigestHandlingEnabled: function SP_ClientRuntimeContext$set_formDigestHandlingEnabled(value) {
        this.$1C_0 = value;
        return value;
    },
    $26_0: function SP_ClientRuntimeContext$$26_0() {
        var $v_0 = this.$w_0;

        if (!$v_0.endsWith('/')) {
            $v_0 += '/';
        }
        $v_0 += '_api/contextinfo';
        $v_0 = this.getRequestUrl($v_0);
        return $v_0;
    },
    $3B_0: function SP_ClientRuntimeContext$$3B_0($p0) {
        if (SP.ScriptUtility.isNullOrEmptyString($p0) || $p0.indexOf('GetContextWebInformation') < 0 || $p0.indexOf('FormDigestTimeoutSeconds') < 0) {
            return null;
        }
        var $v_0 = this.parseObjectFromJsonString($p0, true);
        var $v_1 = $v_0.d.GetContextWebInformation.FormDigestValue;
        var $v_2 = $v_0.d.GetContextWebInformation.FormDigestTimeoutSeconds;
        var $v_3 = $v_0.d.GetContextWebInformation.WebFullUrl;
        var $v_4 = new SP.FormDigestInfo();

        $v_4.$c_0 = $v_1;
        $v_4.$13_0 = (new Date()).getTime() + $v_2 * 750;
        $v_4.$1M_0 = SP.ClientUtility.$35($v_3);
        return $v_4;
    },
    $29_0: 'Javascript Library',
    get_applicationName: function SP_ClientRuntimeContext$get_applicationName() {
        return this.$29_0;
    },
    set_applicationName: function SP_ClientRuntimeContext$set_applicationName(value) {
        if (SP.ScriptUtility.isNullOrEmptyString(value) || value.length > 128) {
            throw Error.argumentOutOfRange('value');
        }
        this.$29_0 = value;
        return value;
    },
    $2A_0: null,
    get_clientTag: function SP_ClientRuntimeContext$get_clientTag() {
        return this.$2A_0;
    },
    set_clientTag: function SP_ClientRuntimeContext$set_clientTag(value) {
        if (!SP.ScriptUtility.isNullOrEmptyString(value) && value.length > 32) {
            throw Error.argumentOutOfRange('value');
        }
        this.$2A_0 = value;
        return value;
    },
    $x_0: null,
    get_webRequestExecutorFactory: function SP_ClientRuntimeContext$get_webRequestExecutorFactory() {
        return this.$x_0;
    },
    set_webRequestExecutorFactory: function SP_ClientRuntimeContext$set_webRequestExecutorFactory(value) {
        this.$x_0 = value;
        return value;
    },
    $8_0: null,
    get_pendingRequest: function SP_ClientRuntimeContext$get_pendingRequest() {
        if (!this.$8_0) {
            this.$8_0 = new SP.ClientRequest(this);
        }
        return this.$8_0;
    },
    get_hasPendingRequest: function SP_ClientRuntimeContext$get_hasPendingRequest() {
        return !!this.$8_0 && !!this.$8_0.$N_0;
    },
    $1X_0: false,
    add_executingWebRequest: function SP_ClientRuntimeContext$add_executingWebRequest(value) {
        (this.get_$D_0()).addHandler('executingwebrequest', value);
    },
    remove_executingWebRequest: function SP_ClientRuntimeContext$remove_executingWebRequest(value) {
        (this.get_$D_0()).removeHandler('executingwebrequest', value);
    },
    onExecutingWebRequest: function SP_ClientRuntimeContext$onExecutingWebRequest(args) {
        if (args && args.$17_1) {
            if (!SP.ScriptUtility.isNullOrEmptyString(this.$v_0)) {
                (args.$17_1.get_headers())['SPResponseGuid'] = this.$v_0;
            }
            if (!SP.ScriptUtility.isNullOrEmptyString(this.get_clientTag())) {
                (args.$17_1.get_headers())['X-ClientService-ClientTag'] = this.get_clientTag();
            }
        }
        var $v_0 = (this.get_$D_0()).getHandler('executingwebrequest');

        if ($v_0) {
            $v_0(this, args);
        }
    },
    $23_0: function SP_ClientRuntimeContext$$23_0($p0) {
        this.onExecutingWebRequest($p0);
    },
    $F_0: null,
    get_$D_0: function SP_ClientRuntimeContext$get_$D_0() {
        if (!this.$F_0) {
            this.$F_0 = new Sys.EventHandlerList();
        }
        return this.$F_0;
    },
    add_requestSucceeded: function SP_ClientRuntimeContext$add_requestSucceeded(value) {
        (this.get_$D_0()).addHandler('succeeded', value);
    },
    remove_requestSucceeded: function SP_ClientRuntimeContext$remove_requestSucceeded(value) {
        (this.get_$D_0()).removeHandler('succeeded', value);
    },
    add_requestFailed: function SP_ClientRuntimeContext$add_requestFailed(value) {
        (this.get_$D_0()).addHandler('failed', value);
    },
    remove_requestFailed: function SP_ClientRuntimeContext$remove_requestFailed(value) {
        (this.get_$D_0()).removeHandler('failed', value);
    },
    add_beginningRequest: function SP_ClientRuntimeContext$add_beginningRequest(value) {
        (this.get_$D_0()).addHandler('beginningrequest', value);
    },
    remove_beginningRequest: function SP_ClientRuntimeContext$remove_beginningRequest(value) {
        (this.get_$D_0()).removeHandler('beginningrequest', value);
    },
    $2N_0: 180000,
    get_requestTimeout: function SP_ClientRuntimeContext$get_requestTimeout() {
        return this.$2N_0;
    },
    set_requestTimeout: function SP_ClientRuntimeContext$set_requestTimeout(value) {
        if (value >= 0) {
            this.$2N_0 = value;
        }
        else {
            throw Error.argumentOutOfRange('value');
        }
        return value;
    },
    $2p_0: function SP_ClientRuntimeContext$$2p_0() {
        var $v_0 = null;
        var $v_1 = window._spPageContextInfo;

        if ($v_1 && $v_1.webServerRelativeUrl === this.$w_0 && !SP.ScriptUtility.isUndefined(window._spFormDigestRefreshInterval) && !SP.ScriptUtility.isUndefined(window.g_updateFormDigestPageLoaded)) {
            var $v_2 = document.getElementsByName('__REQUESTDIGEST');

            if ($v_2 && $v_2.length > 0 && $v_2[0].tagName === 'INPUT') {
                $v_0 = $v_2[0];
            }
        }
        return $v_0;
    },
    executeQueryAsync: function SP_ClientRuntimeContext$executeQueryAsync(succeededCallback, failedCallback) {
        var $v_0 = this.setPendingRequestToBeExecuted();

        if (!this.$1C_0) {
            this.executeClientRequestAsync($v_0, succeededCallback, failedCallback);
            return;
        }
        if (!SP.ClientRuntimeContext.$K) {
            SP.ClientRuntimeContext.$K = {};
        }
        var $v_1 = this.$26_0();

        $v_1 = SP.ClientUtility.urlPathEncodeForXmlHttpRequest($v_1);
        if (SP.ScriptUtility.isNullOrUndefined(SP.ClientRuntimeContext.$K[$v_1])) {
            var $v_3 = this.$2p_0();

            if ($v_3) {
                SP.ClientRuntimeContext.$K[$v_1] = new SP.FormDigestInfo();
                SP.ClientRuntimeContext.$K[$v_1].$c_0 = $v_3.value;
                SP.ClientRuntimeContext.$K[$v_1].$13_0 = g_updateFormDigestPageLoaded.getTime() + _spFormDigestRefreshInterval * 0.75;
            }
        }
        var $v_2 = new Date();

        if (SP.ClientRuntimeContext.$K[$v_1] && SP.ClientRuntimeContext.$K[$v_1].$13_0 > $v_2.getTime()) {
            (($v_0.get_webRequest()).get_headers())['X-RequestDigest'] = SP.ClientRuntimeContext.$K[$v_1].$c_0;
            this.executeClientRequestAsync($v_0, succeededCallback, failedCallback);
        }
        else {
            var $v_4 = new Sys.Net.WebRequest();

            $v_4.set_url($v_1);
            $v_4.set_httpVerb('POST');
            ($v_4.get_headers())['ACCEPT'] = 'application/json;odata=verbose';
            $v_4.set_timeout(this.get_requestTimeout());
            this.$23_0(new SP.WebRequestEventArgs($v_4));
            if (this.$x_0) {
                var $v_5 = this.$x_0.createWebRequestExecutor();

                $v_4.set_executor($v_5);
            }
            var $$t_D = this;

            $v_4.add_completed(function($p1_0) {
                if ($p1_0.get_aborted() || $p1_0.get_timedOut()) {
                    var $v_6;

                    if (typeof $p1_0._SPError_ === 'string') {
                        $v_6 = $p1_0._SPError_;
                    }
                    else {
                        $v_6 = SP.ResResources.getString('RequestAbortedOrTimedOut');
                    }
                    $$t_D.$h_0($v_0, $v_6, failedCallback);
                }
                else if (!$p1_0.get_responseAvailable() || $p1_0.get_statusCode() !== 200 || SP.ScriptUtility.isNullOrEmptyString($p1_0.getResponseHeader('content-type')) || (($p1_0.getResponseHeader('content-type')).toLowerCase()).indexOf('json') < 0) {
                    var $v_7;

                    if (typeof $p1_0._SPError_ === 'string') {
                        $v_7 = $p1_0._SPError_;
                    }
                    else {
                        $v_7 = SP.ResResources.getString('UnknownResponseData');
                    }
                    $$t_D.$h_0($v_0, $v_7, failedCallback);
                }
                else {
                    var $v_8 = $$t_D.$3B_0($p1_0.get_responseData());

                    if (!$v_8) {
                        $$t_D.$h_0($v_0, SP.ResResources.getString('UnknownResponseData'), failedCallback);
                    }
                    else {
                        var $v_9 = $$t_D.$2p_0();

                        if ($v_9) {
                            $v_9.value = $v_8.$c_0;
                            g_updateFormDigestPageLoaded = new Date();
                        }
                        SP.ClientRuntimeContext.$K[$v_1] = $v_8;
                        (($v_0.get_webRequest()).get_headers())['X-RequestDigest'] = $v_8.$c_0;
                        if ($$t_D.get_isPageUrl()) {
                            $$t_D.$w_0 = $v_8.$1M_0;
                            $v_1 = $$t_D.$26_0();
                            SP.ClientRuntimeContext.$K[$v_1] = $v_8;
                            $v_0.$2Y_0();
                            if ($$t_D.$8_0) {
                                $$t_D.$8_0.$2Y_0();
                            }
                        }
                        $$t_D.executeClientRequestAsync($v_0, succeededCallback, failedCallback);
                    }
                }
            });
            $v_4.invoke();
        }
    },
    $h_0: function SP_ClientRuntimeContext$$h_0($p0, $p1, $p2) {
        if ($p2) {
            if (SP.ScriptUtility.isNullOrEmptyString($p1)) {
                $p1 = SP.ResResources.getString('UnknownResponseData');
            }
            $p2(this, new SP.ClientRequestFailedEventArgs($p0, $p1, null, 0, null, null, null, null));
        }
    },
    setPendingRequestToBeExecuted: function SP_ClientRuntimeContext$setPendingRequestToBeExecuted() {
        var $v_0 = this.get_pendingRequest();

        this.$8_0 = null;
        return $v_0;
    },
    executeClientRequestAsync: function SP_ClientRuntimeContext$executeClientRequestAsync(req, succeededCallback, failedCallback) {
        if (this.$F_0) {
            var $v_0 = this.$F_0.getHandler('beginningrequest');

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
        if (this.$F_0) {
            var $v_1 = this.$F_0.getHandler('succeeded');

            if ($v_1) {
                req.add_requestSucceeded($v_1);
            }
            var $v_2 = this.$F_0.getHandler('failed');

            if ($v_2) {
                req.add_requestFailed($v_2);
            }
        }
        req.$31_0();
    },
    $1r_0: null,
    get_staticObjects: function SP_ClientRuntimeContext$get_staticObjects() {
        if (!this.$1r_0) {
            this.$1r_0 = {};
        }
        return this.$1r_0;
    },
    castTo: function SP_ClientRuntimeContext$castTo(obj, type) {
        if (!obj) {
            throw Error.argumentNull('obj');
        }
        SP.ClientAction.$j(this, obj);
        var $v_0;

        if (!type.inheritsFrom(SP.ClientObject)) {
            throw Error.argument('type');
        }
        if (obj.$0_0 !== this) {
            throw Error.invalidOperation();
        }
        if (type.isInstanceOfType(obj)) {
            $v_0 = new type(this, obj.get_path());
            $v_0.$1Q_0(obj);
            return $v_0;
        }
        if (obj.$5_0.$L_0 && type.isInstanceOfType(obj.$5_0.$L_0)) {
            $v_0 = new type(this, obj.get_path());
            $v_0.$1Q_0(obj);
            return $v_0;
        }
        if (!type.inheritsFrom(Object.getType(obj))) {
            throw Error.argument('type');
        }
        if (obj.$5_0.$L_0 && !type.inheritsFrom(Object.getType(obj.$5_0.$L_0))) {
            throw Error.argument('type');
        }
        $v_0 = new type(this, obj.get_path());
        $v_0.$1Q_0(obj);
        var $v_1 = null;

        if (!obj.$5_0.$L_0) {
            $v_1 = obj;
        }
        else {
            $v_1 = obj.$5_0.$L_0;
        }
        if ($v_1) {
            var $v_2 = [];
            var $v_3 = (this.get_pendingRequest()).$15_0;
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
            obj.$5_0.$L_0 = $v_0;
        }
        return $v_0;
    },
    addQuery: function SP_ClientRuntimeContext$addQuery(query) {
        if (!query) {
            throw Error.argumentNull('query');
        }
        (this.get_pendingRequest()).$1S_0(query);
    },
    $21_0: function SP_ClientRuntimeContext$$21_0($p0) {
        (this.get_pendingRequest()).$21_0($p0);
    },
    $20_0: function SP_ClientRuntimeContext$$20_0($p0) {
        this.$1F_0[$p0.$3_0.toString()] = $p0;
    },
    addQueryIdAndResultObject: function SP_ClientRuntimeContext$addQueryIdAndResultObject(id, obj) {
        if (!obj) {
            throw Error.argumentNull('obj');
        }
        (this.get_pendingRequest()).$22_0(id, obj);
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
        SP.ClientAction.$j(this, clientObject);
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
        SP.ClientAction.$j(this, clientObjectCollection);
        return SP.DataRetrievalWithExpressionString.loadQuery(clientObjectCollection, exp);
    },
    $1p_0: null,
    get_serverSchemaVersion: function SP_ClientRuntimeContext$get_serverSchemaVersion() {
        if (SP.ScriptUtility.isNullOrUndefined(this.$1p_0)) {
            throw Error.create(SP.ResResources.getString('NamedPropertyHasNotBeenInitialized', 'ServerLibraryVersion'));
        }
        return this.$1p_0;
    },
    $3H_0: function SP_ClientRuntimeContext$$3H_0($p0) {
        this.$1p_0 = $p0;
    },
    $1o_0: null,
    get_serverLibraryVersion: function SP_ClientRuntimeContext$get_serverLibraryVersion() {
        if (SP.ScriptUtility.isNullOrUndefined(this.$1o_0)) {
            throw Error.create(SP.ResResources.getString('NamedPropertyHasNotBeenInitialized', 'ServerLibraryVersion'));
        }
        return this.$1o_0;
    },
    $3G_0: function SP_ClientRuntimeContext$$3G_0($p0) {
        this.$1o_0 = $p0;
    },
    $2T_0: null,
    $v_0: null,
    get_traceCorrelationId: function SP_ClientRuntimeContext$get_traceCorrelationId() {
        if (!SP.ScriptUtility.isNullOrEmptyString(this.$v_0)) {
            return this.$v_0;
        }
        return this.$2T_0;
    },
    set_traceCorrelationId: function SP_ClientRuntimeContext$set_traceCorrelationId(value) {
        if (!SP.ScriptUtility.isNullOrEmptyString(value)) {
            if (!SP.Guid.isValid(value)) {
                throw Error.argument('value');
            }
            var $v_0 = new SP.Guid(value);

            this.$v_0 = $v_0.toString('D');
        }
        else {
            this.$v_0 = value;
        }
        return value;
    },
    dispose: function SP_ClientRuntimeContext$dispose() {
    },
    $3I_0: function SP_ClientRuntimeContext$$3I_0($p0) {
        this.$2T_0 = $p0;
    }
};
SP.SimpleDataTable = function SP_SimpleDataTable() {
    this.fromJson = this.$3K_0;
    this.customFromJson = this.$3L_0;
};
SP.SimpleDataTable.prototype = {
    $16_0: null,
    get_rows: function SP_SimpleDataTable$get_rows() {
        if (!this.$16_0) {
            this.$16_0 = [];
        }
        return this.$16_0;
    },
    $3K_0: function SP_SimpleDataTable$$3K_0($p0) {
        this.$16_0 = [];
        SP.DataConvert.populateArray(null, this.$16_0, $p0.Rows);
    },
    $3L_0: function SP_SimpleDataTable$$3L_0($p0) {
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
    this.getEnumerator = this.$3M_1;
    SP.ClientValueObjectCollection.initializeBase(this);
};
SP.ClientValueObjectCollection.prototype = {
    $2_1: null,
    initPropertiesFromJson: function SP_ClientValueObjectCollection$initPropertiesFromJson(obj) {
        var $v_0;

        $v_0 = obj._Child_Items_;
        if (!$v_0 && this.get_childItemsName()) {
            $v_0 = obj[this.get_childItemsName()];
        }
        if ($v_0) {
            this.$2_1 = [];
            SP.DataConvert.populateArray(null, this.$2_1, $v_0);
        }
    },
    get_childItemsName: function SP_ClientValueObjectCollection$get_childItemsName() {
        return null;
    },
    get_count: function SP_ClientValueObjectCollection$get_count() {
        if (!this.$2_1) {
            return 0;
        }
        else {
            return this.$2_1.length;
        }
    },
    addChild: function SP_ClientValueObjectCollection$addChild(item) {
        if (!this.$2_1) {
            this.$2_1 = [];
        }
        Array.add(this.$2_1, item);
    },
    getItemAtIndex: function SP_ClientValueObjectCollection$getItemAtIndex(index) {
        if (!this.$2_1 || index < 0 || index >= this.$2_1.length) {
            throw Error.argumentOutOfRange('index');
        }
        return this.$2_1[index];
    },
    $3M_1: function SP_ClientValueObjectCollection$$3M_1() {
        var $v_0 = this.$2_1;

        if (!$v_0) {
            $v_0 = [];
        }
        return new SP.ArrayListEnumerator($v_0);
    },
    writeToXml: function SP_ClientValueObjectCollection$writeToXml(writer, serializationContext) {
        if (this.$2_1) {
            writer.writeStartElement('Property');
            writer.writeAttributeString('Name', '_Child_Items_');
            writer.writeAttributeString('Type', 'Array');
            for (var $v_0 = 0; $v_0 < this.$2_1.length; $v_0++) {
                writer.writeStartElement('Object');
                SP.DataConvert.writeValueToXmlElement(writer, this.$2_1[$v_0], serializationContext);
                writer.writeEndElement();
            }
            writer.writeEndElement();
        }
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    }
};
SP.ConditionalScopeBase = function SP_ConditionalScopeBase(context, allowAllActions) {
    this.$$d_$3A_0 = Function.createDelegate(this, this.$3A_0);
    if (!context) {
        throw Error.argumentNull('context');
    }
    this.$0_0 = context;
    this.$28_0 = allowAllActions;
};
SP.ConditionalScopeBase.$7 = function SP_ConditionalScopeBase$$7() {
    return Error.create(SP.ResResources.getString('InvalidUsageOfConditionalScope'));
};
SP.ConditionalScopeBase.prototype = {
    $0_0: null,
    $2R_0: false,
    $2S_0: null,
    $1s_0: null,
    $28_0: false,
    $Y_0: null,
    $W_0: null,
    $4_0: null,
    startScope: function SP_ConditionalScopeBase$startScope() {
        if (this.$4_0) {
            throw SP.ConditionalScopeBase.$7();
        }
        this.$1s_0 = new SP.SerializationContext(this.$0_0);
        this.$2S_0 = this.$2w_0(this.$1s_0);
        this.$4_0 = new SP.ConditionalExecutionScope(this.$0_0, this, this.$$d_$3A_0);
        this.$0_0.addQueryIdAndResultObject(this.$4_0.$3_0, this);
        return this.$4_0;
    },
    $3A_0: function SP_ConditionalScopeBase$$3A_0() {
        if (this.$Y_0 && !this.$Y_0.$J_0) {
            throw SP.ConditionalScopeBase.$7();
        }
        if (this.$W_0 && !this.$W_0.$J_0) {
            throw SP.ConditionalScopeBase.$7();
        }
        if (this.$Y_0 || this.$W_0) {
            var $v_0 = null;

            if (SP.ClientActionExecutionScopeEnd.isInstanceOfType((this.$0_0.get_pendingRequest()).$N_0)) {
                $v_0 = (this.$0_0.get_pendingRequest()).$N_0;
            }
            if (!$v_0) {
                throw SP.ConditionalScopeBase.$7();
            }
            if ($v_0.$4_1.$A_0 !== 'IfTrueScope' && $v_0.$4_1.$A_0 !== 'IfFalseScope') {
                throw SP.ConditionalScopeBase.$7();
            }
        }
        if (!this.$28_0) {
            var $v_1 = (this.$0_0.get_pendingRequest()).$u_0.length;

            for (var $v_2 = $v_1 - 1; $v_2 >= 0; $v_2--) {
                var $v_3 = (this.$0_0.get_pendingRequest()).$u_0[$v_2];

                if ($v_3 === this.$4_0.$1Z_0) {
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
                        if (SP.ObjectPathConstructor.isInstanceOfType($v_5.$G_0) || SP.ObjectPathIdentity.isInstanceOfType($v_5.$G_0) || SP.ObjectPathProperty.isInstanceOfType($v_5.$G_0) || SP.ObjectPathStaticProperty.isInstanceOfType($v_5.$G_0)) {
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
        if (!this.$4_0 || this.$4_0.$J_0 || this.$Y_0) {
            throw SP.ConditionalScopeBase.$7();
        }
        var $v_0 = (this.$0_0.get_pendingRequest()).$N_0;

        if (!$v_0) {
            throw SP.ConditionalScopeBase.$7();
        }
        if (SP.ClientActionExecutionScopeStart.isInstanceOfType($v_0) && $v_0.$4_1.$A_0 === 'ConditionalScope' || SP.ClientActionExecutionScopeEnd.isInstanceOfType($v_0) && $v_0.$4_1.$A_0 === 'IfFalseScope') {
            this.$Y_0 = new SP.ExecutionScope(this.$0_0, 'IfTrueScope', null);
            return this.$Y_0;
        }
        throw SP.ConditionalScopeBase.$7();
    },
    startIfFalse: function SP_ConditionalScopeBase$startIfFalse() {
        if (!this.$4_0 || this.$4_0.$J_0 || this.$W_0) {
            throw SP.ConditionalScopeBase.$7();
        }
        var $v_0 = (this.$0_0.get_pendingRequest()).$N_0;

        if (!$v_0) {
            throw SP.ConditionalScopeBase.$7();
        }
        if (SP.ClientActionExecutionScopeStart.isInstanceOfType($v_0) && $v_0.$4_1.$A_0 === 'ConditionalScope' || SP.ClientActionExecutionScopeEnd.isInstanceOfType($v_0) && $v_0.$4_1.$A_0 === 'IfTrueScope') {
            this.$W_0 = new SP.ExecutionScope(this.$0_0, 'IfFalseScope', null);
            return this.$W_0;
        }
        throw SP.ConditionalScopeBase.$7();
    },
    get_testResult: function SP_ConditionalScopeBase$get_testResult() {
        return this.$2R_0;
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
        this.$2R_0 = $v_1;
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
    this.$4_1 = $p1;
};
SP.ConditionalExecutionScope.prototype = {
    $4_1: null,
    $1z_0: function SP_ConditionalExecutionScope$$1z_0($p0, $p1) {
        SP.ExecutionScope.prototype.$1z_0.call(this, $p0, $p1);
        $p0.writeRaw(this.$4_1.$2S_0.toString());
        $p1.$Z_0(this.$4_1.$1s_0);
        if (!this.$4_1.$Y_0 && !this.$4_1.$W_0) {
            $p0.writeStartElement('IfTrueScope');
            $p0.writeAttributeString('Id', (SP.ClientRequest.get_nextSequenceId()).toString());
        }
    },
    $2q_0: function SP_ConditionalExecutionScope$$2q_0($p0, $p1) {
        if (!this.$4_1.$Y_0 && !this.$4_1.$W_0) {
            $p0.writeEndElement();
        }
        SP.ExecutionScope.prototype.$2q_0.call(this, $p0, $p1);
    }
};
SP.DataRetrievalWithExpressionString = function SP_DataRetrievalWithExpressionString() {
};
SP.DataRetrievalWithExpressionString.load = function SP_DataRetrievalWithExpressionString$load($p0, $p1) {
    if (!$p1 || !$p1.length) {
        ($p0.get_$y_0()).selectAllProperties();
        if (SP.ClientObjectCollection.isInstanceOfType($p0)) {
            (($p0.get_$y_0()).get_childItemQuery()).selectAllProperties();
        }
    }
    else {
        for (var $v_0 = 0; $v_0 < $p1.length; $v_0++) {
            var $v_1 = $p1[$v_0];

            SP.DataRetrievalWithExpressionString.$1w($p0.get_$y_0(), $v_1);
        }
    }
};
SP.DataRetrievalWithExpressionString.loadQuery = function SP_DataRetrievalWithExpressionString$loadQuery($p0, $p1) {
    var $v_0 = [];
    var $v_1 = new SP.ClientObjectCollectionResult($p0.$0_0, $v_0);
    var $v_2 = new SP.ClientQueryInternal($p0, null, false, null);

    $p0.$0_0.addQueryIdAndResultObject($v_2.$3_0, $v_1);
    $p0.$0_0.addQuery($v_2);
    if (SP.ScriptUtility.isNullOrEmptyString($p1)) {
        ($v_2.get_childItemQuery()).selectAllProperties();
    }
    else {
        SP.DataRetrievalWithExpressionString.$1w($v_2, $p1);
    }
    return $v_0;
};
SP.DataRetrievalWithExpressionString.$1w = function SP_DataRetrievalWithExpressionString$$1w($p0, $p1) {
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
            throw SP.DataRetrievalWithExpressionString.$P($p1);
        }
        if ($v_8 === '.' || $v_8 === '(') {
            $v_3 = $p1.substr($v_2, $v_7 - $v_2);
            $v_3 = $v_3.trim();
            if ($v_8 === '(') {
                if ($v_3 !== 'Include' && $v_3 !== 'IncludeWithDefaultProperties') {
                    throw SP.DataRetrievalWithExpressionString.$P($p1);
                }
                if ($v_1.$1D_1) {
                    throw SP.DataRetrievalWithExpressionString.$P($p1);
                }
                var $v_9 = SP.DataRetrievalWithExpressionString.$33($p1, $v_7);

                if ($v_9 < 0) {
                    throw SP.DataRetrievalWithExpressionString.$P($p1);
                }
                var $v_A = $p1.substr($v_7 + 1, $v_9 - $v_7 - 1);
                var $v_B = $v_1.get_childItemQuery();

                if ($v_3 === 'IncludeWithDefaultProperties') {
                    $v_B.selectAllProperties();
                }
                var $v_C = SP.DataRetrievalWithExpressionString.$3J($v_A);

                for (var $v_D = 0; $v_D < $v_C.length; $v_D++) {
                    var $v_E = $v_C[$v_D];

                    SP.DataRetrievalWithExpressionString.$1w($v_B, $v_E);
                }
                $v_7 = $v_9;
                $v_6 = true;
            }
            else if ($v_8 === '.') {
                if ($v_6 || !$v_3.length) {
                    throw SP.DataRetrievalWithExpressionString.$P($p1);
                }
                var $v_F = $v_1.$10_1($v_3);

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
                throw SP.DataRetrievalWithExpressionString.$P($p1);
            }
            $v_1.selectWithAll($v_3);
        }
    }
};
SP.DataRetrievalWithExpressionString.$33 = function SP_DataRetrievalWithExpressionString$$33($p0, $p1) {
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
SP.DataRetrievalWithExpressionString.$3J = function SP_DataRetrievalWithExpressionString$$3J($p0) {
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
        throw SP.DataRetrievalWithExpressionString.$P($p0);
    }
    for (var $v_5 = 0; $v_5 < $v_4; $v_5++) {
        var $v_6 = $p0.charAt($v_5);

        if ($v_6 === '(') {
            $v_1++;
        }
        else if ($v_6 === ')') {
            $v_1--;
            if ($v_1 < 0) {
                throw SP.DataRetrievalWithExpressionString.$P($p0);
            }
        }
        else if ($v_6 === ',' && !$v_1) {
            $v_3 = $p0.substr($v_2, $v_5 - $v_2);
            $v_3 = $v_3.trim();
            if (!$v_3.length) {
                throw SP.DataRetrievalWithExpressionString.$P($p0);
            }
            Array.add($v_0, $v_3);
            $v_2 = $v_5 + 1;
        }
    }
    if ($v_1) {
        throw SP.DataRetrievalWithExpressionString.$P($p0);
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
SP.DataRetrievalWithExpressionString.$P = function SP_DataRetrievalWithExpressionString$$P($p0) {
    return Error.argument(null, SP.ResResources.getString('NotSupportedQueryExpressionWithExpressionDetail', $p0));
};
SP.ClientActionExecutionScopeStart = function SP_ClientActionExecutionScopeStart($p0, $p1) {
    SP.ClientActionExecutionScopeStart.initializeBase(this, [null, $p1]);
    this.$4_1 = $p0;
};
SP.ClientActionExecutionScopeStart.prototype = {
    $4_1: null,
    get_scope: function SP_ClientActionExecutionScopeStart$get_scope() {
        return this.$4_1;
    },
    $2t_0: function SP_ClientActionExecutionScopeStart$$2t_0($p0, $p1) {
    }
};
SP.ClientActionExecutionScopeEnd = function SP_ClientActionExecutionScopeEnd($p0, $p1) {
    SP.ClientActionExecutionScopeEnd.initializeBase(this, [null, $p1]);
    this.$4_1 = $p0;
};
SP.ClientActionExecutionScopeEnd.prototype = {
    $4_1: null,
    get_scope: function SP_ClientActionExecutionScopeEnd$get_scope() {
        return this.$4_1;
    },
    $2t_0: function SP_ClientActionExecutionScopeEnd$$2t_0($p0, $p1) {
    }
};
SP.ExecutionScope = function SP_ExecutionScope($p0, $p1, $p2) {
    this.$0_0 = $p0;
    this.$A_0 = $p1;
    this.$3_0 = SP.ClientRequest.get_nextSequenceId();
    ((this.$0_0.get_pendingRequest()).get_$1V_0()).push(this);
    this.$1Z_0 = new SP.ClientActionExecutionScopeStart(this, this.$A_0);
    (this.$0_0.get_pendingRequest()).$1S_0(this.$1Z_0);
    this.$1c_0 = $p2;
};
SP.ExecutionScope.prototype = {
    $0_0: null,
    $J_0: false,
    $A_0: null,
    $3_0: 0,
    $1c_0: null,
    $1Z_0: null,
    get_id: function SP_ExecutionScope$get_id() {
        return this.$3_0;
    },
    get_name: function SP_ExecutionScope$get_name() {
        return this.$A_0;
    },
    dispose: function SP_ExecutionScope$dispose() {
        if (this.$J_0) {
            throw SP.ExceptionHandlingScope.$7();
        }
        if (this.$1c_0) {
            this.$1c_0();
        }
        if (((this.$0_0.get_pendingRequest()).get_$1V_0()).length > 0 && ((this.$0_0.get_pendingRequest()).get_$1V_0()).pop() === this) {
            (this.$0_0.get_pendingRequest()).$1S_0(new SP.ClientActionExecutionScopeEnd(this, this.$A_0));
        }
        else {
            throw SP.ExceptionHandlingScope.$7();
        }
        this.$J_0 = true;
    },
    $1z_0: function SP_ExecutionScope$$1z_0($p0, $p1) {
        $p0.writeStartElement(this.$A_0);
        $p0.writeAttributeString('Id', this.$3_0.toString());
    },
    $2q_0: function SP_ExecutionScope$$2q_0($p0, $p1) {
        $p0.writeEndElement();
    }
};
SP.ExceptionHandlingScope = function SP_ExceptionHandlingScope(context) {
    this.$$d_$30_0 = Function.createDelegate(this, this.$30_0);
    this.fromJson = this.$3K_0;
    this.customFromJson = this.$3L_0;
    if (!context) {
        throw Error.argumentNull('context');
    }
    this.$0_0 = context;
    this.$1l_0 = SP.ClientRequest.$25;
};
SP.ExceptionHandlingScope.$7 = function SP_ExceptionHandlingScope$$7() {
    return Error.create(SP.ResResources.getString('InvalidUsageOfExceptionHandlingScope'));
};
SP.ExceptionHandlingScope.prototype = {
    $0_0: null,
    $2L_0: false,
    $1f_0: false,
    $p_0: null,
    $1q_0: null,
    $1l_0: 0,
    $1n_0: null,
    $1m_0: null,
    $1I_0: null,
    $Q_0: null,
    get_$37_0: function SP_ExceptionHandlingScope$get_$37_0() {
        if (!this.$U_0) {
            return true;
        }
        return false;
    },
    startScope: function SP_ExceptionHandlingScope$startScope() {
        if (this.$Q_0) {
            throw SP.ExceptionHandlingScope.$7();
        }
        this.$Q_0 = new SP.ExceptionHandlingExecutionScope(this.$0_0, this, this.$$d_$30_0);
        (this.$0_0.get_pendingRequest()).$22_0(this.$Q_0.$3_0, this);
        return this.$Q_0;
    },
    $30_0: function SP_ExceptionHandlingScope$$30_0() {
        if (this.$U_0) {
            if (!this.$l_0 && !this.$14_0) {
                throw SP.ExceptionHandlingScope.$7();
            }
            var $v_0 = (this.$0_0.get_pendingRequest()).$N_0;

            if (!$v_0 || !SP.ClientActionExecutionScopeEnd.isInstanceOfType($v_0)) {
                throw SP.ExceptionHandlingScope.$7();
            }
            var $v_1 = $v_0;

            if ($v_1.$4_1.$A_0 !== 'CatchScope' && $v_1.$4_1.$A_0 !== 'FinallyScope') {
                throw SP.ExceptionHandlingScope.$7();
            }
        }
    },
    $U_0: null,
    startTry: function SP_ExceptionHandlingScope$startTry() {
        if (!this.$Q_0 || this.$Q_0.$J_0 || this.$U_0) {
            throw SP.ExceptionHandlingScope.$7();
        }
        var $v_0 = (this.$0_0.get_pendingRequest()).$N_0;

        if (!$v_0 || !SP.ClientActionExecutionScopeStart.isInstanceOfType($v_0)) {
            throw SP.ExceptionHandlingScope.$7();
        }
        if ($v_0.$4_1.$A_0 !== 'ExceptionHandlingScope') {
            throw SP.ExceptionHandlingScope.$7();
        }
        this.$U_0 = new SP.ExecutionScope(this.$0_0, 'TryScope', null);
        return this.$U_0;
    },
    $l_0: null,
    startCatch: function SP_ExceptionHandlingScope$startCatch() {
        if (!this.$Q_0 || this.$Q_0.$J_0 || !this.$U_0 || !this.$U_0.$J_0 || this.$l_0 || this.$14_0) {
            throw SP.ExceptionHandlingScope.$7();
        }
        var $v_0 = (this.$0_0.get_pendingRequest()).$N_0;

        if (!$v_0 || !SP.ClientActionExecutionScopeEnd.isInstanceOfType($v_0)) {
            throw SP.ExceptionHandlingScope.$7();
        }
        if ($v_0.$4_1.$A_0 !== 'TryScope') {
            throw SP.ExceptionHandlingScope.$7();
        }
        this.$l_0 = new SP.ExecutionScope(this.$0_0, 'CatchScope', null);
        return this.$l_0;
    },
    $14_0: null,
    startFinally: function SP_ExceptionHandlingScope$startFinally() {
        if (!this.$Q_0 || this.$Q_0.$J_0 || !this.$U_0 || !this.$U_0.$J_0 || this.$l_0 && !this.$l_0.$J_0 || this.$14_0) {
            throw SP.ExceptionHandlingScope.$7();
        }
        var $v_0 = (this.$0_0.get_pendingRequest()).$N_0;

        if (!$v_0 || !SP.ClientActionExecutionScopeEnd.isInstanceOfType($v_0)) {
            throw SP.ExceptionHandlingScope.$7();
        }
        if ($v_0.$4_1.$A_0 !== 'TryScope' && $v_0.$4_1.$A_0 !== 'CatchScope') {
            throw SP.ExceptionHandlingScope.$7();
        }
        this.$14_0 = new SP.ExecutionScope(this.$0_0, 'FinallyScope', null);
        return this.$14_0;
    },
    get_processed: function SP_ExceptionHandlingScope$get_processed() {
        return this.$2L_0;
    },
    get_hasException: function SP_ExceptionHandlingScope$get_hasException() {
        return this.$1f_0;
    },
    get_errorMessage: function SP_ExceptionHandlingScope$get_errorMessage() {
        return this.$p_0;
    },
    get_serverStackTrace: function SP_ExceptionHandlingScope$get_serverStackTrace() {
        return this.$1q_0;
    },
    get_serverErrorCode: function SP_ExceptionHandlingScope$get_serverErrorCode() {
        return this.$1l_0;
    },
    get_serverErrorValue: function SP_ExceptionHandlingScope$get_serverErrorValue() {
        return this.$1n_0;
    },
    get_serverErrorTypeName: function SP_ExceptionHandlingScope$get_serverErrorTypeName() {
        return this.$1m_0;
    },
    get_serverErrorDetails: function SP_ExceptionHandlingScope$get_serverErrorDetails() {
        return this.$1I_0;
    },
    $3K_0: function SP_ExceptionHandlingScope$$3K_0($p0) {
        var $v_0 = $p0;

        if (SP.ScriptUtility.isNullOrUndefined($v_0)) {
            throw Error.create(SP.ResResources.getString('UnknownResponseData'));
        }
        var $v_1;

        $v_1 = $v_0.HasException;
        if (SP.ScriptUtility.isUndefined($v_1)) {
            throw Error.create(SP.ResResources.getString('UnknownResponseData'));
        }
        this.$1f_0 = $v_1;
        if (this.$1f_0) {
            var $v_2 = $v_0.ErrorInfo;

            if (SP.ScriptUtility.isNullOrUndefined($v_2)) {
                throw Error.create(SP.ResResources.getString('UnknownResponseData'));
            }
            $v_1 = $v_2.ErrorMessage;
            if (!SP.ScriptUtility.isUndefined($v_1)) {
                this.$p_0 = $v_1;
            }
            else {
                this.$p_0 = SP.ScriptUtility.emptyString;
            }
            $v_1 = $v_2.ErrorStackTrace;
            if (!SP.ScriptUtility.isUndefined($v_1)) {
                this.$1q_0 = $v_1;
            }
            else {
                this.$1q_0 = SP.ScriptUtility.emptyString;
            }
            $v_1 = $v_2.ErrorCode;
            if (!SP.ScriptUtility.isUndefined($v_1)) {
                this.$1l_0 = $v_1;
            }
            $v_1 = $v_2.ErrorValue;
            if (!SP.ScriptUtility.isUndefined($v_1)) {
                this.$1n_0 = $v_1;
            }
            else {
                this.$1n_0 = SP.ScriptUtility.emptyString;
            }
            $v_1 = $v_2.ErrorTypeName;
            if (!SP.ScriptUtility.isUndefined($v_1)) {
                this.$1m_0 = $v_1;
            }
            else {
                this.$1m_0 = SP.ScriptUtility.emptyString;
            }
            $v_1 = $v_2.ErrorDetails;
            if (!SP.ScriptUtility.isUndefined($v_1)) {
                this.$1I_0 = $v_1;
                this.$1I_0 = SP.DataConvert.fixupType(this.$0_0, this.$1I_0);
            }
        }
        this.$2L_0 = true;
    },
    $3L_0: function SP_ExceptionHandlingScope$$3L_0($p0) {
        return false;
    }
};
SP.ExceptionHandlingExecutionScope = function SP_ExceptionHandlingExecutionScope($p0, $p1, $p2) {
    SP.ExceptionHandlingExecutionScope.initializeBase(this, [$p0, 'ExceptionHandlingScope', $p2]);
    this.$4_1 = $p1;
};
SP.ExceptionHandlingExecutionScope.prototype = {
    $4_1: null,
    $1z_0: function SP_ExceptionHandlingExecutionScope$$1z_0($p0, $p1) {
        if (this.$4_1.get_$37_0()) {
            $p0.writeStartElement('ExceptionHandlingScopeSimple');
            $p0.writeAttributeString('Id', this.$3_0.toString());
        }
        else {
            SP.ExecutionScope.prototype.$1z_0.call(this, $p0, $p1);
        }
    }
};
SP.ObjectIdentityQuery = function SP_ObjectIdentityQuery(objectPath) {
    SP.ObjectIdentityQuery.initializeBase(this, [objectPath, null]);
};
SP.ObjectIdentityQuery.prototype = {
    $2t_0: function SP_ObjectIdentityQuery$$2t_0($p0, $p1) {
        $p0.writeStartElement('ObjectIdentityQuery');
        $p0.writeAttributeString('Id', this.$3_0.toString());
        $p0.writeAttributeString('ObjectPathId', this.$G_0.$3_0.toString());
        $p1.addObjectPath(this.$G_0);
        $p0.writeEndElement();
    }
};
SP.ObjectPath = function SP_ObjectPath($p0, $p1, $p2) {
    if (!$p0) {
        throw Error.argumentNull('context');
    }
    this.$0_0 = $p0;
    if (!$p1) {
        this.$1G_0 = SP.ClientRequest.$1W;
    }
    else {
        this.$1G_0 = $p1.$3_0;
    }
    this.$3_0 = SP.ClientRequest.get_nextSequenceId();
    if ($p2) {
        $p0.$20_0(this);
        if (!$p0.$1X_0) {
            var $v_0 = new SP.ClientActionInstantiateObjectPath(this);

            $p0.addQuery($v_0);
            var $v_1 = new SP.ClientActionInstantiateObjectPathResult(this);

            $p0.addQueryIdAndResultObject($v_0.$3_0, $v_1);
        }
    }
    this.$1J_0 = false;
    this.$d_0 = true;
};
SP.ObjectPath.prototype = {
    $1G_0: 0,
    $3_0: 0,
    $0_0: null,
    $1J_0: false,
    get_$1O_0: function SP_ObjectPath$get_$1O_0() {
        if (this.$1G_0 === SP.ClientRequest.$1W) {
            return null;
        }
        return this.$0_0.$1F_0[this.$1G_0.toString()];
    },
    $d_0: false,
    $36_0: function SP_ObjectPath$$36_0() {
    },
    get_$2W_0: function SP_ObjectPath$get_$2W_0() {
        return null;
    },
    setPendingReplace: function SP_ObjectPath$setPendingReplace() {
        (this.$0_0.get_pendingRequest()).$2v_0(this);
    }
};
SP.ObjectPathProperty = function SP_ObjectPathProperty(context, parent, propertyName) {
    SP.ObjectPathProperty.initializeBase(this, [context, parent, true]);
    this.$X_1 = propertyName;
};
SP.ObjectPathProperty.prototype = {
    $X_1: null,
    $2t_0: function SP_ObjectPathProperty$$2t_0($p0, $p1) {
        $p0.writeStartElement('Property');
        $p0.writeAttributeString('Id', this.$3_0.toString());
        $p0.writeAttributeString('ParentId', (this.get_$1O_0()).$3_0.toString());
        $p1.addObjectPath(this.get_$1O_0());
        $p0.writeAttributeString('Name', this.$X_1);
        $p0.writeEndElement();
    },
    get_$2W_0: function SP_ObjectPathProperty$get_$2W_0() {
        return SP.ResResources.getString('ObjectNameProperty', this.$X_1);
    }
};
SP.ObjectPathStaticProperty = function SP_ObjectPathStaticProperty(context, typeId, propertyName) {
    SP.ObjectPathStaticProperty.initializeBase(this, [context, null, true]);
    this.$O_1 = typeId;
    this.$X_1 = propertyName;
};
SP.ObjectPathStaticProperty.prototype = {
    $X_1: null,
    $O_1: null,
    $2t_0: function SP_ObjectPathStaticProperty$$2t_0($p0, $p1) {
        $p0.writeStartElement('StaticProperty');
        $p0.writeAttributeString('Id', this.$3_0.toString());
        $p0.writeAttributeString('TypeId', this.$O_1);
        $p0.writeAttributeString('Name', this.$X_1);
        $p0.writeEndElement();
    },
    get_$2W_0: function SP_ObjectPathStaticProperty$get_$2W_0() {
        return SP.ResResources.getString('ObjectNameProperty', this.$X_1);
    }
};
SP.ObjectPathMethod = function SP_ObjectPathMethod(context, parent, methodName, parameters) {
    SP.ObjectPathMethod.initializeBase(this, [context, parent, true]);
    SP.ClientAction.$z(context, parameters);
    this.$s_1 = methodName;
    this.$6_1 = parameters;
    this.$9_1 = new SP.SerializationContext(context);
    var $v_0;

    this.$1_1 = new Sys.StringBuilder();
    $v_0 = SP.XmlWriter.create(this.$1_1);
    this.$i_1($v_0, this.$9_1);
    $v_0.close();
    this.$6_1 = null;
};
SP.ObjectPathMethod.prototype = {
    $s_1: null,
    $9_1: null,
    $1_1: null,
    $6_1: null,
    $2t_0: function SP_ObjectPathMethod$$2t_0($p0, $p1) {
        $p0.writeRaw(this.$1_1.toString());
        $p1.$Z_0(this.$9_1);
    },
    $i_1: function SP_ObjectPathMethod$$i_1($p0, $p1) {
        $p0.writeStartElement('Method');
        $p0.writeAttributeString('Id', this.$3_0.toString());
        $p0.writeAttributeString('ParentId', (this.get_$1O_0()).$3_0.toString());
        $p1.addObjectPath(this.get_$1O_0());
        $p0.writeAttributeString('Name', this.$s_1);
        if (this.$6_1 && this.$6_1.length > 0) {
            $p0.writeStartElement('Parameters');
            for (var $v_0 = 0; $v_0 < this.$6_1.length; $v_0++) {
                var $v_1 = this.$6_1[$v_0];

                $p0.writeStartElement('Parameter');
                SP.DataConvert.writeValueToXmlElement($p0, $v_1, $p1);
                $p0.writeEndElement();
            }
            $p0.writeEndElement();
        }
        $p0.writeEndElement();
    },
    $36_0: function SP_ObjectPathMethod$$36_0() {
        this.$6_1 = null;
        this.$1_1 = null;
        this.$9_1 = null;
        this.$d_0 = false;
    },
    get_$2W_0: function SP_ObjectPathMethod$get_$2W_0() {
        return SP.ResResources.getString('ObjectNameMethod', this.$s_1);
    }
};
SP.ObjectPathStaticMethod = function SP_ObjectPathStaticMethod(context, typeId, methodName, parameters) {
    SP.ObjectPathStaticMethod.initializeBase(this, [context, null, true]);
    SP.ClientAction.$z(context, parameters);
    this.$O_1 = typeId;
    this.$s_1 = methodName;
    this.$6_1 = parameters;
    this.$9_1 = new SP.SerializationContext(context);
    var $v_0;

    this.$1_1 = new Sys.StringBuilder();
    $v_0 = SP.XmlWriter.create(this.$1_1);
    this.$i_1($v_0, this.$9_1);
    $v_0.close();
    this.$6_1 = null;
};
SP.ObjectPathStaticMethod.prototype = {
    $O_1: null,
    $s_1: null,
    $6_1: null,
    $9_1: null,
    $1_1: null,
    $2t_0: function SP_ObjectPathStaticMethod$$2t_0($p0, $p1) {
        $p0.writeRaw(this.$1_1.toString());
        $p1.$Z_0(this.$9_1);
    },
    $i_1: function SP_ObjectPathStaticMethod$$i_1($p0, $p1) {
        $p0.writeStartElement('StaticMethod');
        $p0.writeAttributeString('Id', this.$3_0.toString());
        $p0.writeAttributeString('Name', this.$s_1);
        $p0.writeAttributeString('TypeId', this.$O_1);
        if (this.$6_1 && this.$6_1.length > 0) {
            $p0.writeStartElement('Parameters');
            for (var $v_0 = 0; $v_0 < this.$6_1.length; $v_0++) {
                var $v_1 = this.$6_1[$v_0];

                $p0.writeStartElement('Parameter');
                SP.DataConvert.writeValueToXmlElement($p0, $v_1, $p1);
                $p0.writeEndElement();
            }
            $p0.writeEndElement();
        }
        $p0.writeEndElement();
    },
    $36_0: function SP_ObjectPathStaticMethod$$36_0() {
        this.$6_1 = null;
        this.$1_1 = null;
        this.$9_1 = null;
        this.$d_0 = false;
    },
    get_$2W_0: function SP_ObjectPathStaticMethod$get_$2W_0() {
        return SP.ResResources.getString('ObjectNameMethod', this.$s_1);
    }
};
SP.ObjectPathConstructor = function SP_ObjectPathConstructor(context, typeId, parameters) {
    SP.ObjectPathConstructor.initializeBase(this, [context, null, true]);
    SP.ClientAction.$z(context, parameters);
    this.$O_1 = typeId;
    this.$6_1 = parameters;
    this.$9_1 = new SP.SerializationContext(context);
    var $v_0;

    this.$1_1 = new Sys.StringBuilder();
    $v_0 = SP.XmlWriter.create(this.$1_1);
    this.$i_1($v_0, this.$9_1);
    $v_0.close();
    this.$6_1 = null;
};
SP.ObjectPathConstructor.prototype = {
    $O_1: null,
    $6_1: null,
    $9_1: null,
    $1_1: null,
    $2t_0: function SP_ObjectPathConstructor$$2t_0($p0, $p1) {
        $p0.writeRaw(this.$1_1.toString());
        $p1.$Z_0(this.$9_1);
    },
    $i_1: function SP_ObjectPathConstructor$$i_1($p0, $p1) {
        $p0.writeStartElement('Constructor');
        $p0.writeAttributeString('Id', this.$3_0.toString());
        $p0.writeAttributeString('TypeId', this.$O_1);
        if (this.$6_1 && this.$6_1.length > 0) {
            $p0.writeStartElement('Parameters');
            for (var $v_0 = 0; $v_0 < this.$6_1.length; $v_0++) {
                var $v_1 = this.$6_1[$v_0];

                $p0.writeStartElement('Parameter');
                SP.DataConvert.writeValueToXmlElement($p0, $v_1, $p1);
                $p0.writeEndElement();
            }
            $p0.writeEndElement();
        }
        $p0.writeEndElement();
    },
    $36_0: function SP_ObjectPathConstructor$$36_0() {
        this.$6_1 = null;
        this.$1_1 = null;
        this.$9_1 = null;
        this.$d_0 = false;
    },
    get_$2W_0: function SP_ObjectPathConstructor$get_$2W_0() {
        return SP.ResResources.getString('ObjectNameType', this.$O_1);
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
    $2t_0: function SP_ObjectPathIdentity$$2t_0($p0, $p1) {
        $p0.writeStartElement('Identity');
        $p0.writeAttributeString('Id', this.$3_0.toString());
        $p0.writeAttributeString('Name', this.$r_1);
        $p0.writeEndElement();
    },
    get_$2W_0: function SP_ObjectPathIdentity$get_$2W_0() {
        return SP.ResResources.getString('ObjectNameIdentity', this.$r_1);
    }
};
SP.SerializationContext = function SP_SerializationContext($p0) {
    this.$1H_0 = {};
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
        this.$1H_0[path.$3_0.toString()] = path;
    },
    $Z_0: function SP_SerializationContext$$Z_0($p0) {
        var $$dict_1 = $p0.$1H_0;

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
SP.ParseJSONUtil.$2X = function SP_ParseJSONUtil$$2X($p0) {
    $p0 = $p0.replace(SP.ParseJSONUtil.$2d, '$1new SP.Guid(\"$2\")');
    $p0 = $p0.replace(SP.ParseJSONUtil.$2c, '$1SP.DataConvert.createUtcDateTime($2)');
    $p0 = $p0.replace(SP.ParseJSONUtil.$2a, '$1SP.DataConvert.createLocalDateTime($2)');
    $p0 = $p0.replace(SP.ParseJSONUtil.$2b, '$1SP.DataConvert.createUnspecifiedDateTime($2)');
    $p0 = $p0.replace(SP.ParseJSONUtil.$2Z, '$1new SP.Base64EncodedByteArray(\"$2\")');
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
    json = SP.ParseJSONUtil.$2X(json);
    var $v_1 = eval('(' + json + ')');

    return $v_1;
};
SP.ParseJSONUtil.validateJson = function SP_ParseJSONUtil$validateJson(text) {
    return SP.ParseJSONUtil.$2f.test(((text.replace(SP.ParseJSONUtil.$2g, '@')).replace(SP.ParseJSONUtil.$2h, ']')).replace(SP.ParseJSONUtil.$2e, ''));
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
SP.ArrayListEnumerator.registerClass('SP.ArrayListEnumerator', null, IEnumerator);
SP.BaseCollection.registerClass('SP.BaseCollection', null, IEnumerable);
SP.BaseCollectionEnumerator.registerClass('SP.BaseCollectionEnumerator', null, IEnumerator);
SP.Base64EncodedByteArray.registerClass('SP.Base64EncodedByteArray', null, SP.IFromJson);
SP.ConditionalScopeBase.registerClass('SP.ConditionalScopeBase', null, SP.IFromJson);
SP.ClientObjectPropertyConditionalScope.registerClass('SP.ClientObjectPropertyConditionalScope', SP.ConditionalScopeBase);
SP.ClientDictionaryResultHandler.registerClass('SP.ClientDictionaryResultHandler', null, SP.IFromJson);
SP.ClientActionInstantiateObjectPathResult.registerClass('SP.ClientActionInstantiateObjectPathResult', null, SP.IFromJson);
SP.ClientObjectCollectionResult.registerClass('SP.ClientObjectCollectionResult', null, SP.IFromJson);
SP.ClientUtility.registerClass('SP.ClientUtility');
SP.ClientXElement.registerClass('SP.ClientXElement', null, SP.IFromJson);
SP.ClientXDocument.registerClass('SP.ClientXDocument', null, SP.IFromJson);
SP.DataConvert.registerClass('SP.DataConvert');
SP.PageRequestFailedEventArgs.registerClass('SP.PageRequestFailedEventArgs', Sys.EventArgs);
SP.PageRequestSucceededEventArgs.registerClass('SP.PageRequestSucceededEventArgs', Sys.EventArgs);
SP.PageRequest.registerClass('SP.PageRequest');
SP.ResResources.registerClass('SP.ResResources');
SP.XmlWriter.registerClass('SP.XmlWriter');
SP.ClientHttpUtility.registerClass('SP.ClientHttpUtility');
SP.ClientConstants.registerClass('SP.ClientConstants');
SP.ClientSchemaVersions.registerClass('SP.ClientSchemaVersions');
SP.ClientErrorCodes.registerClass('SP.ClientErrorCodes');
SP.ClientAction.registerClass('SP.ClientAction');
SP.ClientActionSetProperty.registerClass('SP.ClientActionSetProperty', SP.ClientAction);
SP.ClientActionSetStaticProperty.registerClass('SP.ClientActionSetStaticProperty', SP.ClientAction);
SP.ClientActionInvokeMethod.registerClass('SP.ClientActionInvokeMethod', SP.ClientAction);
SP.ClientActionInvokeStaticMethod.registerClass('SP.ClientActionInvokeStaticMethod', SP.ClientAction);
SP.ClientActionInstantiateObjectPath.registerClass('SP.ClientActionInstantiateObjectPath', SP.ClientAction);
SP.ClientObject.registerClass('SP.ClientObject', null, SP.IFromJson);
SP.ClientObjectData.registerClass('SP.ClientObjectData');
SP.ClientObjectCollection.registerClass('SP.ClientObjectCollection', SP.ClientObject, IEnumerable);
SP.ClientObjectList.registerClass('SP.ClientObjectList', SP.ClientObjectCollection);
SP.ClientObjectPrototype.registerClass('SP.ClientObjectPrototype');
SP.ClientObjectCollectionPrototype.registerClass('SP.ClientObjectCollectionPrototype', SP.ClientObjectPrototype);
SP.ClientQueryProperty.registerClass('SP.ClientQueryProperty');
SP.ClientQueryInternal.registerClass('SP.ClientQueryInternal', SP.ClientAction);
SP.WebRequestEventArgs.registerClass('SP.WebRequestEventArgs', Sys.EventArgs);
SP.ClientRequest.registerClass('SP.ClientRequest');
SP.ClientRequestEventArgs.registerClass('SP.ClientRequestEventArgs', Sys.EventArgs);
SP.ClientRequestFailedEventArgs.registerClass('SP.ClientRequestFailedEventArgs', SP.ClientRequestEventArgs);
SP.ClientRequestSucceededEventArgs.registerClass('SP.ClientRequestSucceededEventArgs', SP.ClientRequestEventArgs);
SP.FormDigestInfo.registerClass('SP.FormDigestInfo');
SP.ClientRuntimeContext.registerClass('SP.ClientRuntimeContext', null, Sys.IDisposable);
SP.SimpleDataTable.registerClass('SP.SimpleDataTable', null, SP.IFromJson);
SP.ClientValueObject.registerClass('SP.ClientValueObject', null, SP.IFromJson);
SP.ClientValueObjectCollection.registerClass('SP.ClientValueObjectCollection', SP.ClientValueObject, IEnumerable);
SP.ExecutionScope.registerClass('SP.ExecutionScope', null, IDisposable);
SP.ConditionalExecutionScope.registerClass('SP.ConditionalExecutionScope', SP.ExecutionScope);
SP.DataRetrievalWithExpressionString.registerClass('SP.DataRetrievalWithExpressionString');
SP.ClientActionExecutionScopeStart.registerClass('SP.ClientActionExecutionScopeStart', SP.ClientAction);
SP.ClientActionExecutionScopeEnd.registerClass('SP.ClientActionExecutionScopeEnd', SP.ClientAction);
SP.ExceptionHandlingScope.registerClass('SP.ExceptionHandlingScope', null, SP.IFromJson);
SP.ExceptionHandlingExecutionScope.registerClass('SP.ExceptionHandlingExecutionScope', SP.ExecutionScope);
SP.ObjectIdentityQuery.registerClass('SP.ObjectIdentityQuery', SP.ClientAction);
SP.ObjectPath.registerClass('SP.ObjectPath');
SP.ObjectPathProperty.registerClass('SP.ObjectPathProperty', SP.ObjectPath);
SP.ObjectPathStaticProperty.registerClass('SP.ObjectPathStaticProperty', SP.ObjectPath);
SP.ObjectPathMethod.registerClass('SP.ObjectPathMethod', SP.ObjectPath);
SP.ObjectPathStaticMethod.registerClass('SP.ObjectPathStaticMethod', SP.ObjectPath);
SP.ObjectPathConstructor.registerClass('SP.ObjectPathConstructor', SP.ObjectPath);
SP.ObjectPathIdentity.registerClass('SP.ObjectPathIdentity', SP.ObjectPath);
SP.SerializationContext.registerClass('SP.SerializationContext');
SP.ResourceStrings.registerClass('SP.ResourceStrings');
SP.ParseJSONUtil.registerClass('SP.ParseJSONUtil');
SP.DataConvertUtil.registerClass('SP.DataConvertUtil');
SP.OfficeVersion.registerClass('SP.OfficeVersion');
function sp_runtime_initialize() {
    SP.Base64EncodedByteArray.$18 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    SP.Base64EncodedByteArray.$I = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '/', '='];
    SP.DataConvert.$1P = {};
    SP.DataConvert.$1y = ['', '0', '00', '000', '0000', '00000', '000000', '0000000', '00000000', '000000000'];
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
    SP.ClientRequest.$1x = 0;
    SP.ClientRequest.$1W = -1;
    SP.ClientRequest.$25 = -1;
    SP.ClientRuntimeContext.$K = null;
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
    SP.ResourceStrings.unknownError = 'UnknownError';
    SP.ResourceStrings.unknownResponseData = 'UnknownResponseData';
    SP.RuntimeRes.cC_PlaceHolderElementNotFound = 'The chrome control\'s container element can\'t be found.';
    SP.RuntimeRes.rE_CannotAccessSiteOpenWindowFailed = 'This page cannot open a window to access the web site \"{0}\" or it cannot reference the opened window. Please browse to that web site, and then browse to this page again.';
    SP.RuntimeRes.noObjectPathAssociatedWithObject = 'The object is not associated with an object identity or the object identity is invalid.';
    SP.RuntimeRes.cC_TimeoutGettingThemeInfo = 'Cannot get theme infomration for chrome control due to time out.';
    SP.RuntimeRes.unknownResponseData = 'Unexpected response data from server.';
    SP.RuntimeRes.requestUnexpectedResponseWithStatus = 'Unexpected response from server. The status code of response is \'{0}\'. The status text of response is \'{1}\'.';
    SP.RuntimeRes.objectNameProperty = 'property {0}';
    SP.RuntimeRes.requestUnknownResponse = 'Unknown response from the server.';
    SP.RuntimeRes.rE_RequestUnexpectedResponseWithContentTypeAndStatus = 'Unexpected response from the server. The content type of the response is \"{0}\". The status code is \"{1}\".';
    SP.RuntimeRes.rE_BrowserNotSupported = 'The required functionalities are not supported by your browser. Please make sure you are using IE 8 or above, or other modern browser. Please make sure the \'X-UA-Compatible\' meta tag is set to be \'IE=8\' or above.';
    SP.RuntimeRes.argumentExceptionMessage = 'The \'{0}\' argument is invalid.';
    SP.RuntimeRes.namedServerObjectIsNull = 'Object reference not set to an instance of an object on server. The object is associated with {0}.';
    SP.RuntimeRes.objectNameType = 'type {0}';
    SP.RuntimeRes.requestUnexpectedResponseWithContentTypeAndStatus = 'Unexpected response from the server. The content type of the response is \"{0}\". The status code is \"{1}\".';
    SP.RuntimeRes.cC_InvalidJSON = 'Invalid JSON data.';
    SP.RuntimeRes.invalidUsageOfExceptionHandlingScope = 'Incorrect usage of exception handling scope.';
    SP.RuntimeRes.serverObjectIsNull = 'Object reference not set to an instance of an object on server.';
    SP.RuntimeRes.cC_AppWebUrlNotSet = 'Cannot get the app theme information because the app web url is not set.';
    SP.RuntimeRes.rE_OpenWindowMessage = 'Sorry, we had some trouble accessing your site.';
    SP.RuntimeRes.argumentNullExceptionMessage = 'The \'{0}\' argument cannot be null.';
    SP.RuntimeRes.cC_HelpLinkToolTip = 'Help';
    SP.RuntimeRes.propertyHasNotBeenInitialized = 'The property or field has not been initialized. It has not been requested or the request has not been executed. It may need to be explicitly requested.';
    SP.RuntimeRes.rE_RequestAbortedOrTimedout = 'The request was aborted or timed out.';
    SP.RuntimeRes.invalidUsageOfConditionalScope = 'Incorrect usage of conditional scope.';
    SP.RuntimeRes.cC_ErrorGettingThemeInfo = 'Cannot get the app theme information for chrome control.';
    SP.RuntimeRes.rE_DismissOpenWindowMessageLinkText = 'Dismiss';
    SP.RuntimeRes.rE_CannotAccessSiteCancelled = 'This page cannot access the web site \"{0}\". The login is cancelled or timed out. Please browse to that web site, and then browse to this page again.';
    SP.RuntimeRes.objectNameIdentity = 'identity {0}';
    SP.RuntimeRes.cC_HostSiteUrlNotSet = 'The app\'s host site url is not set.';
    SP.RuntimeRes.rE_FixitHelpMessage = 'If the \"Fix it\" button doesn\'t solve the issue, {0}click here for more information{1}.';
    SP.RuntimeRes.notSupportedQueryExpressionWithExpressionDetail = 'The query expression \'{0}\' is not supported.';
    SP.RuntimeRes.rE_RequestUnexpectedResponse = 'Unexpected response from server.';
    SP.RuntimeRes.rE_DomainDoesNotMatch = 'Your domain doesn\'t match the expected domain for this app deployment.';
    SP.RuntimeRes.cC_BackToSite = 'Back to Site';
    SP.RuntimeRes.rE_NoTrustedOrigins = 'There is no trusted URLs configured for the app deployment.';
    SP.RuntimeRes.rE_InvalidOperation = 'Invalid operation.';
    SP.RuntimeRes.collectionModified = 'The collection was modified. Enumeration operation may not execute.';
    SP.RuntimeRes.cC_Welcome = 'Welcome {0}';
    SP.RuntimeRes.cC_AppIconAlt = 'App Icon';
    SP.RuntimeRes.cC_SendFeedback = 'Send Feedback';
    SP.RuntimeRes.cC_ArrowImageAlt = 'Cravat Icon';
    SP.RuntimeRes.cC_InvalidOperation = 'Invalid operation.';
    SP.RuntimeRes.requestAbortedOrTimedOut = 'The request was aborted or timed out.';
    SP.RuntimeRes.invalidUsageOfConditionalScopeNowAllowedAction = 'Incorrect usage of conditional scope. Some actions, such as setting a property or invoking a method, are not allowed inside a conditional scope.';
    SP.RuntimeRes.cannotFindContextWebServerRelativeUrl = 'Cannot find current web URL information on the page.';
    SP.RuntimeRes.rE_OpenWindowButtonText = 'Fix It';
    SP.RuntimeRes.unknownError = 'Unknown Error';
    SP.RuntimeRes.cC_InvalidArgument = 'Invalid parameter {0}.';
    SP.RuntimeRes.rE_InvalidArgumentOrField = 'Invalid field or parameter {0}.';
    SP.RuntimeRes.cC_SettingsLinkToolTip = 'Settings';
    SP.RuntimeRes.requestEmptyQueryName = 'The property or query name is empty.';
    SP.RuntimeRes.cC_RequiredScriptNotLoaded = 'Cannot get the app theme information because the required script sp.requestexecutor.js is not loaded.';
    SP.RuntimeRes.rE_CannotAccessSite = 'This page cannot access the web site \"{0}\". Please browse to that web site, and then browse to this page again.';
    SP.RuntimeRes.notSameClientContext = 'The object is used in the context different from the one associated with the object.';
    SP.RuntimeRes.requestUnexpectedResponse = 'Unexpected response from server.';
    SP.RuntimeRes.rE_BrowserBinaryDataNotSupported = 'Your browser doesn\'t support some HTML5 features like the File API operations. Please use a browser that does support these features.';
    SP.RuntimeRes.collectionHasNotBeenInitialized = 'The collection has not been initialized. It has not been requested or the request has not been executed. It may need to be explicitly requested.';
    SP.RuntimeRes.namedPropertyHasNotBeenInitialized = 'The property or field \'{0}\' has not been initialized. It has not been requested or the request has not been executed. It may need to be explicitly requested.';
    SP.RuntimeRes.requestHasBeenExecuted = 'The request has been executed.';
    SP.RuntimeRes.objectNameMethod = 'method {0}';
    SP.ParseJSONUtil.$2b = new RegExp('(^|[^\\\\])\\\"\\\\/Date\\(([0-9]+(?:,[0-9]+){2,6})\\)\\\\/\\\"', 'g');
    SP.ParseJSONUtil.$2a = new RegExp('(^|[^\\\\])\\\"\\\\/Date\\((-?[0-9]+)(?:[a-zA-Z]|(?:\\+|-)[0-9]{4})\\)\\\\/\\\"', 'g');
    SP.ParseJSONUtil.$2c = new RegExp('(^|[^\\\\])\\\"\\\\/Date\\((-?[0-9]+)\\)\\\\/\\\"', 'g');
    SP.ParseJSONUtil.$2d = new RegExp('(^|[^\\\\])\\\"\\\\/Guid\\(([0-9a-fA-F\\-]+)\\)\\\\/\\\"', 'g');
    SP.ParseJSONUtil.$2f = new RegExp('^[\\],:{}\\s]*$');
    SP.ParseJSONUtil.$2g = new RegExp('\\\\(?:[\"\\\\\\/bfnrt]|u[0-9a-fA-F]{4})', 'g');
    SP.ParseJSONUtil.$2h = new RegExp('\"[^\"\\\\\\n\\r]*\"|true|false|null|-?\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d+)?', 'g');
    SP.ParseJSONUtil.$2e = new RegExp('(?:^|:|,)(?:\\s*\\[)+', 'g');
    SP.ParseJSONUtil.$2Z = new RegExp('(^|[^\\\\])\\\"\\\\/Base64Binary\\(([^\\)]*)\\)\\\\/\\\"', 'g');
    SP.OfficeVersion.majorBuildVersion = 15;
    SP.OfficeVersion.previousMajorBuildVersion = 14;
    SP.OfficeVersion.majorVersion = '15';
    SP.OfficeVersion.previousVersion = '14';
    SP.OfficeVersion.majorVersionDotZero = '15.0';
    SP.OfficeVersion.previousVersionDotZero = '14.0';
    SP.OfficeVersion.assemblyVersion = '15.0.0.0';
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
SP.ClientResult.registerClass('SP.ClientResult', null, SP.IFromJson);
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
SP.Result.registerClass('SP.Result', null, SP.IFromJson);
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
