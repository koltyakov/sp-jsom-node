// JScript File


Type.registerNamespace('Microsoft.SharePoint.Client.Search.Query');

Microsoft.SharePoint.Client.Search.Query.QueryPropertyValueType = function() {}
Microsoft.SharePoint.Client.Search.Query.QueryPropertyValueType.prototype = {
    none: 0, 
    stringType: 1, 
    int32TYpe: 2, 
    booleanType: 3, 
    stringArrayType: 4, 
    unSupportedType: 5
}
Microsoft.SharePoint.Client.Search.Query.QueryPropertyValueType.registerEnum('Microsoft.SharePoint.Client.Search.Query.QueryPropertyValueType', false);


Microsoft.SharePoint.Client.Search.Query.ReorderingRuleMatchType = function() {}
Microsoft.SharePoint.Client.Search.Query.ReorderingRuleMatchType.prototype = {
    resultContainsKeyword: 0, 
    titleContainsKeyword: 1, 
    titleMatchesKeyword: 2, 
    urlStartsWith: 3, 
    urlExactlyMatches: 4, 
    contentTypeIs: 5, 
    fileExtensionMatches: 6, 
    resultHasTag: 7, 
    manualCondition: 8
}
Microsoft.SharePoint.Client.Search.Query.ReorderingRuleMatchType.registerEnum('Microsoft.SharePoint.Client.Search.Query.ReorderingRuleMatchType', false);


Microsoft.SharePoint.Client.Search.Query.SortDirection = function() {}
Microsoft.SharePoint.Client.Search.Query.SortDirection.prototype = {
    ascending: 0, 
    descending: 1, 
    fqlFormula: 2
}
Microsoft.SharePoint.Client.Search.Query.SortDirection.registerEnum('Microsoft.SharePoint.Client.Search.Query.SortDirection', false);


Microsoft.SharePoint.Client.Search.Query.KeywordQueryProperties = function Microsoft_SharePoint_Client_Search_Query_KeywordQueryProperties(context, objectPath) {
    Microsoft.SharePoint.Client.Search.Query.KeywordQueryProperties.initializeBase(this, [ context, objectPath ]);
}
Microsoft.SharePoint.Client.Search.Query.KeywordQueryProperties.prototype = {
    
    get_item: function Microsoft_SharePoint_Client_Search_Query_KeywordQueryProperties$get_item$in(key) {
        return null;
    },
    
    set_item: function Microsoft_SharePoint_Client_Search_Query_KeywordQueryProperties$set_item$in(key, value) {
        this.setQueryPropertyValue(key, Microsoft.SharePoint.Client.Search.Query.QueryUtility.create(key, value));
        return value;
    },
    
    setQueryPropertyValue: function Microsoft_SharePoint_Client_Search_Query_KeywordQueryProperties$setQueryPropertyValue$in(name, val) {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'SetQueryPropertyValue', [ name, val ]);
        $v_0.addQuery($v_1);
    },
    
    getQueryPropertyValue: function Microsoft_SharePoint_Client_Search_Query_KeywordQueryProperties$getQueryPropertyValue$in(name) {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'GetQueryPropertyValue', [ name ]);
        $v_0.addQuery($v_2);
        $v_1 = new Microsoft.SharePoint.Client.Search.Query.QueryPropertyValue();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    }
}


Microsoft.SharePoint.Client.Search.Query.QueryUtility = function Microsoft_SharePoint_Client_Search_Query_QueryUtility() {
}
Microsoft.SharePoint.Client.Search.Query.QueryUtility.create = function Microsoft_SharePoint_Client_Search_Query_QueryUtility$create$st(name, val) {
    if (name && name.length > 0) {
        var $v_0 = new Microsoft.SharePoint.Client.Search.Query.QueryPropertyValue();
        if (val) {
            var $v_1 = Object.getType(val);
            switch (Array.indexOf(Microsoft.SharePoint.Client.Search.Query.QueryUtility.$1b, $v_1)) {
                case 1:
                    $v_0.$H_1 = val;
                    $v_0.$0_1 = 1;
                    break;
                case 2:
                    $v_0.$E_1 = val;
                    $v_0.$0_1 = 2;
                    break;
                case 3:
                    $v_0.$D_1 = val;
                    $v_0.$0_1 = 3;
                    break;
                case 4:
                    $v_0.$G_1 = val;
                    $v_0.$0_1 = 4;
                    break;
                default:
                    var $v_2 = 'Type ' + $v_1.toString() + 'is not valid. Only String, Int32, Boolean and String[] are supported.';
                    throw Error.argument($v_2);
            }
        }
        return $v_0;
    }
    else {
        throw Error.argumentNull('The name a of a property cannot be null or empty!');
    }
}
Microsoft.SharePoint.Client.Search.Query.QueryUtility.queryPropertyValueToObject = function Microsoft_SharePoint_Client_Search_Query_QueryUtility$queryPropertyValueToObject$st(val) {
    if (val && val.$0_1) {
        switch (val.$0_1) {
            case 1:
                return val.$H_1;
            case 2:
                return val.$E_1;
            case 3:
                return val.$D_1;
            case 4:
                return val.$G_1;
            default:
                throw Error.argument('The Payload type is not valid. Only String, Int32, Boolean and String[] are supported.');
        }
    }
    else {
        return null;
    }
}
Microsoft.SharePoint.Client.Search.Query.QueryUtility.getQueryPropertyValueType = function Microsoft_SharePoint_Client_Search_Query_QueryUtility$getQueryPropertyValueType$st(val) {
    if (val) {
        return val.$0_1;
    }
    else {
        return 0;
    }
}


Microsoft.SharePoint.Client.Search.Query.KeywordQuery = function Microsoft_SharePoint_Client_Search_Query_KeywordQuery(context) {
    Microsoft.SharePoint.Client.Search.Query.KeywordQuery.initializeBase(this, [ context, SP.ClientUtility.getOrCreateObjectPathForConstructor(context, '{80173281-fffd-47b6-9a49-312e06ff8428}', arguments) ]);
}
Microsoft.SharePoint.Client.Search.Query.KeywordQuery.newObject = function Microsoft_SharePoint_Client_Search_Query_KeywordQuery$newObject$st(context) {
    return new Microsoft.SharePoint.Client.Search.Query.KeywordQuery(context, new SP.ObjectPathConstructor(context, '{80173281-fffd-47b6-9a49-312e06ff8428}', null));
}
Microsoft.SharePoint.Client.Search.Query.KeywordQuery.prototype = {
    
    get_collapseSpecification: function Microsoft_SharePoint_Client_Search_Query_KeywordQuery$get_collapseSpecification$in() {
        this.checkUninitializedProperty('CollapseSpecification');
        return (this.get_objectData().get_properties()['CollapseSpecification']);
    },
    
    set_collapseSpecification: function Microsoft_SharePoint_Client_Search_Query_KeywordQuery$set_collapseSpecification$in(value) {
        this.get_objectData().get_properties()['CollapseSpecification'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'CollapseSpecification', value));
        }
        return value;
    },
    
    get_enableSorting: function Microsoft_SharePoint_Client_Search_Query_KeywordQuery$get_enableSorting$in() {
        this.checkUninitializedProperty('EnableSorting');
        return (this.get_objectData().get_properties()['EnableSorting']);
    },
    
    set_enableSorting: function Microsoft_SharePoint_Client_Search_Query_KeywordQuery$set_enableSorting$in(value) {
        this.get_objectData().get_properties()['EnableSorting'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'EnableSorting', value));
        }
        return value;
    },
    
    get_hiddenConstraints: function Microsoft_SharePoint_Client_Search_Query_KeywordQuery$get_hiddenConstraints$in() {
        this.checkUninitializedProperty('HiddenConstraints');
        return (this.get_objectData().get_properties()['HiddenConstraints']);
    },
    
    set_hiddenConstraints: function Microsoft_SharePoint_Client_Search_Query_KeywordQuery$set_hiddenConstraints$in(value) {
        this.get_objectData().get_properties()['HiddenConstraints'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'HiddenConstraints', value));
        }
        return value;
    },
    
    get_properties: function Microsoft_SharePoint_Client_Search_Query_KeywordQuery$get_properties$in() {
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['Properties']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new Microsoft.SharePoint.Client.Search.Query.KeywordQueryProperties(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Properties'));
            this.get_objectData().get_clientObjectProperties()['Properties'] = $v_0;
        }
        return $v_0;
    },
    
    get_olsQuerySession: function Microsoft_SharePoint_Client_Search_Query_KeywordQuery$get_olsQuerySession$in() {
        this.checkUninitializedProperty('OLSQuerySession');
        return (this.get_objectData().get_properties()['OLSQuerySession']);
    },
    
    set_olsQuerySession: function Microsoft_SharePoint_Client_Search_Query_KeywordQuery$set_olsQuerySession$in(value) {
        this.get_objectData().get_properties()['OLSQuerySession'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'OLSQuerySession', value));
        }
        return value;
    },
    
    get_refinementFilters: function Microsoft_SharePoint_Client_Search_Query_KeywordQuery$get_refinementFilters$in() {
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['RefinementFilters']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new Microsoft.SharePoint.Client.Search.Query.StringCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'RefinementFilters'));
            this.get_objectData().get_clientObjectProperties()['RefinementFilters'] = $v_0;
        }
        return $v_0;
    },
    
    set_refinementFilters: function Microsoft_SharePoint_Client_Search_Query_KeywordQuery$set_refinementFilters$in(value) {
        this.get_objectData().get_clientObjectProperties()['RefinementFilters'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'RefinementFilters', value));
        }
        return value;
    },
    
    get_refiners: function Microsoft_SharePoint_Client_Search_Query_KeywordQuery$get_refiners$in() {
        this.checkUninitializedProperty('Refiners');
        return (this.get_objectData().get_properties()['Refiners']);
    },
    
    set_refiners: function Microsoft_SharePoint_Client_Search_Query_KeywordQuery$set_refiners$in(value) {
        this.get_objectData().get_properties()['Refiners'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Refiners', value));
        }
        return value;
    },
    
    get_reorderingRules: function Microsoft_SharePoint_Client_Search_Query_KeywordQuery$get_reorderingRules$in() {
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['ReorderingRules']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new Microsoft.SharePoint.Client.Search.Query.ReorderingRuleCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'ReorderingRules'));
            this.get_objectData().get_clientObjectProperties()['ReorderingRules'] = $v_0;
        }
        return $v_0;
    },
    
    set_reorderingRules: function Microsoft_SharePoint_Client_Search_Query_KeywordQuery$set_reorderingRules$in(value) {
        this.get_objectData().get_clientObjectProperties()['ReorderingRules'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'ReorderingRules', value));
        }
        return value;
    },
    
    get_selectProperties: function Microsoft_SharePoint_Client_Search_Query_KeywordQuery$get_selectProperties$in() {
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['SelectProperties']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new Microsoft.SharePoint.Client.Search.Query.StringCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'SelectProperties'));
            this.get_objectData().get_clientObjectProperties()['SelectProperties'] = $v_0;
        }
        return $v_0;
    },
    
    get_sortList: function Microsoft_SharePoint_Client_Search_Query_KeywordQuery$get_sortList$in() {
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['SortList']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new Microsoft.SharePoint.Client.Search.Query.SortCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'SortList'));
            this.get_objectData().get_clientObjectProperties()['SortList'] = $v_0;
        }
        return $v_0;
    },
    
    get_timeZoneId: function Microsoft_SharePoint_Client_Search_Query_KeywordQuery$get_timeZoneId$in() {
        this.checkUninitializedProperty('TimeZoneId');
        return (this.get_objectData().get_properties()['TimeZoneId']);
    },
    
    set_timeZoneId: function Microsoft_SharePoint_Client_Search_Query_KeywordQuery$set_timeZoneId$in(value) {
        this.get_objectData().get_properties()['TimeZoneId'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'TimeZoneId', value));
        }
        return value;
    },
    
    get_trimDuplicatesIncludeId: function Microsoft_SharePoint_Client_Search_Query_KeywordQuery$get_trimDuplicatesIncludeId$in() {
        this.checkUninitializedProperty('TrimDuplicatesIncludeId');
        return (this.get_objectData().get_properties()['TrimDuplicatesIncludeId']);
    },
    
    set_trimDuplicatesIncludeId: function Microsoft_SharePoint_Client_Search_Query_KeywordQuery$set_trimDuplicatesIncludeId$in(value) {
        this.get_objectData().get_properties()['TrimDuplicatesIncludeId'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'TrimDuplicatesIncludeId', value));
        }
        return value;
    },
    
    get_useOLSQuery: function Microsoft_SharePoint_Client_Search_Query_KeywordQuery$get_useOLSQuery$in() {
        this.checkUninitializedProperty('UseOLSQuery');
        return (this.get_objectData().get_properties()['UseOLSQuery']);
    },
    
    set_useOLSQuery: function Microsoft_SharePoint_Client_Search_Query_KeywordQuery$set_useOLSQuery$in(value) {
        this.get_objectData().get_properties()['UseOLSQuery'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'UseOLSQuery', value));
        }
        return value;
    },
    
    initPropertiesFromJson: function Microsoft_SharePoint_Client_Search_Query_KeywordQuery$initPropertiesFromJson$in(parentNode) {
        Microsoft.SharePoint.Client.Search.Query.Query.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.CollapseSpecification;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['CollapseSpecification'] = ($v_0);
            delete parentNode.CollapseSpecification;
        }
        $v_0 = parentNode.EnableSorting;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['EnableSorting'] = ($v_0);
            delete parentNode.EnableSorting;
        }
        $v_0 = parentNode.HiddenConstraints;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['HiddenConstraints'] = ($v_0);
            delete parentNode.HiddenConstraints;
        }
        $v_0 = parentNode.Properties;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('Properties', this.get_properties(), $v_0);
            this.get_properties().fromJson($v_0);
            delete parentNode.Properties;
        }
        $v_0 = parentNode.OLSQuerySession;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['OLSQuerySession'] = ($v_0);
            delete parentNode.OLSQuerySession;
        }
        $v_0 = parentNode.RefinementFilters;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('RefinementFilters', this.get_refinementFilters(), $v_0);
            this.get_refinementFilters().fromJson($v_0);
            delete parentNode.RefinementFilters;
        }
        $v_0 = parentNode.Refiners;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Refiners'] = ($v_0);
            delete parentNode.Refiners;
        }
        $v_0 = parentNode.ReorderingRules;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('ReorderingRules', this.get_reorderingRules(), $v_0);
            this.get_reorderingRules().fromJson($v_0);
            delete parentNode.ReorderingRules;
        }
        $v_0 = parentNode.SelectProperties;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('SelectProperties', this.get_selectProperties(), $v_0);
            this.get_selectProperties().fromJson($v_0);
            delete parentNode.SelectProperties;
        }
        $v_0 = parentNode.SortList;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('SortList', this.get_sortList(), $v_0);
            this.get_sortList().fromJson($v_0);
            delete parentNode.SortList;
        }
        $v_0 = parentNode.TimeZoneId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['TimeZoneId'] = ($v_0);
            delete parentNode.TimeZoneId;
        }
        $v_0 = parentNode.TrimDuplicatesIncludeId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['TrimDuplicatesIncludeId'] = ($v_0);
            delete parentNode.TrimDuplicatesIncludeId;
        }
        $v_0 = parentNode.UseOLSQuery;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['UseOLSQuery'] = ($v_0);
            delete parentNode.UseOLSQuery;
        }
    }
}


Microsoft.SharePoint.Client.Search.Query.KeywordQueryPropertyNames = function Microsoft_SharePoint_Client_Search_Query_KeywordQueryPropertyNames() {
}


Microsoft.SharePoint.Client.Search.Query.KeywordQueryObjectPropertyNames = function Microsoft_SharePoint_Client_Search_Query_KeywordQueryObjectPropertyNames() {
}


Microsoft.SharePoint.Client.Search.Query.PersonalResultSuggestion = function Microsoft_SharePoint_Client_Search_Query_PersonalResultSuggestion() {
    Microsoft.SharePoint.Client.Search.Query.PersonalResultSuggestion.initializeBase(this);
}
Microsoft.SharePoint.Client.Search.Query.PersonalResultSuggestion.prototype = {
    $e_1: null,
    $f_1: false,
    $B_1: null,
    $C_1: null,
    
    get_highlightedTitle: function Microsoft_SharePoint_Client_Search_Query_PersonalResultSuggestion$get_highlightedTitle$in() {
        return this.$e_1;
    },
    
    set_highlightedTitle: function Microsoft_SharePoint_Client_Search_Query_PersonalResultSuggestion$set_highlightedTitle$in(value) {
        this.$e_1 = value;
        return value;
    },
    
    get_isBestBet: function Microsoft_SharePoint_Client_Search_Query_PersonalResultSuggestion$get_isBestBet$in() {
        return this.$f_1;
    },
    
    set_isBestBet: function Microsoft_SharePoint_Client_Search_Query_PersonalResultSuggestion$set_isBestBet$in(value) {
        this.$f_1 = value;
        return value;
    },
    
    get_title: function Microsoft_SharePoint_Client_Search_Query_PersonalResultSuggestion$get_title$in() {
        return this.$B_1;
    },
    
    set_title: function Microsoft_SharePoint_Client_Search_Query_PersonalResultSuggestion$set_title$in(value) {
        this.$B_1 = value;
        return value;
    },
    
    get_url: function Microsoft_SharePoint_Client_Search_Query_PersonalResultSuggestion$get_url$in() {
        return this.$C_1;
    },
    
    set_url: function Microsoft_SharePoint_Client_Search_Query_PersonalResultSuggestion$set_url$in(value) {
        this.$C_1 = value;
        return value;
    },
    
    get_typeId: function Microsoft_SharePoint_Client_Search_Query_PersonalResultSuggestion$get_typeId$in() {
        return '{aafd94af-525a-4759-8410-f571a26f04bc}';
    },
    
    writeToXml: function Microsoft_SharePoint_Client_Search_Query_PersonalResultSuggestion$writeToXml$in(writer, serializationContext) {
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = [ 'HighlightedTitle', 'IsBestBet', 'Title', 'Url' ];
        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    
    initPropertiesFromJson: function Microsoft_SharePoint_Client_Search_Query_PersonalResultSuggestion$initPropertiesFromJson$in(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.HighlightedTitle;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$e_1 = ($v_0);
            delete parentNode.HighlightedTitle;
        }
        $v_0 = parentNode.IsBestBet;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$f_1 = ($v_0);
            delete parentNode.IsBestBet;
        }
        $v_0 = parentNode.Title;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$B_1 = ($v_0);
            delete parentNode.Title;
        }
        $v_0 = parentNode.Url;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$C_1 = ($v_0);
            delete parentNode.Url;
        }
    }
}


Microsoft.SharePoint.Client.Search.Query.PopularQuery = function Microsoft_SharePoint_Client_Search_Query_PopularQuery() {
    Microsoft.SharePoint.Client.Search.Query.PopularQuery.initializeBase(this);
}
Microsoft.SharePoint.Client.Search.Query.PopularQuery.prototype = {
    $S_1: 0,
    $4_1: 0,
    $s_1: 0,
    $x_1: null,
    
    get_clickCount: function Microsoft_SharePoint_Client_Search_Query_PopularQuery$get_clickCount$in() {
        return this.$S_1;
    },
    
    set_clickCount: function Microsoft_SharePoint_Client_Search_Query_PopularQuery$set_clickCount$in(value) {
        this.$S_1 = value;
        return value;
    },
    
    get_LCID: function Microsoft_SharePoint_Client_Search_Query_PopularQuery$get_LCID$in() {
        return this.$4_1;
    },
    
    set_LCID: function Microsoft_SharePoint_Client_Search_Query_PopularQuery$set_LCID$in(value) {
        this.$4_1 = value;
        return value;
    },
    
    get_queryCount: function Microsoft_SharePoint_Client_Search_Query_PopularQuery$get_queryCount$in() {
        return this.$s_1;
    },
    
    set_queryCount: function Microsoft_SharePoint_Client_Search_Query_PopularQuery$set_queryCount$in(value) {
        this.$s_1 = value;
        return value;
    },
    
    get_queryText: function Microsoft_SharePoint_Client_Search_Query_PopularQuery$get_queryText$in() {
        return this.$x_1;
    },
    
    set_queryText: function Microsoft_SharePoint_Client_Search_Query_PopularQuery$set_queryText$in(value) {
        this.$x_1 = value;
        return value;
    },
    
    get_typeId: function Microsoft_SharePoint_Client_Search_Query_PopularQuery$get_typeId$in() {
        return '{cea115d6-87ec-4e1c-aa4a-b8d44d6cd10d}';
    },
    
    writeToXml: function Microsoft_SharePoint_Client_Search_Query_PopularQuery$writeToXml$in(writer, serializationContext) {
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = [ 'ClickCount', 'LCID', 'QueryCount', 'QueryText' ];
        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    
    initPropertiesFromJson: function Microsoft_SharePoint_Client_Search_Query_PopularQuery$initPropertiesFromJson$in(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.ClickCount;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$S_1 = ($v_0);
            delete parentNode.ClickCount;
        }
        $v_0 = parentNode.LCID;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$4_1 = ($v_0);
            delete parentNode.LCID;
        }
        $v_0 = parentNode.QueryCount;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$s_1 = ($v_0);
            delete parentNode.QueryCount;
        }
        $v_0 = parentNode.QueryText;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$x_1 = ($v_0);
            delete parentNode.QueryText;
        }
    }
}


Microsoft.SharePoint.Client.Search.Query.Query = function Microsoft_SharePoint_Client_Search_Query_Query(context, objectPath) {
    Microsoft.SharePoint.Client.Search.Query.Query.initializeBase(this, [ context, objectPath ]);
}
Microsoft.SharePoint.Client.Search.Query.Query.prototype = {
    
    get_blockDedupeMode: function Microsoft_SharePoint_Client_Search_Query_Query$get_blockDedupeMode$in() {
        this.checkUninitializedProperty('BlockDedupeMode');
        return (this.get_objectData().get_properties()['BlockDedupeMode']);
    },
    
    set_blockDedupeMode: function Microsoft_SharePoint_Client_Search_Query_Query$set_blockDedupeMode$in(value) {
        this.get_objectData().get_properties()['BlockDedupeMode'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'BlockDedupeMode', value));
        }
        return value;
    },
    
    get_bypassResultTypes: function Microsoft_SharePoint_Client_Search_Query_Query$get_bypassResultTypes$in() {
        this.checkUninitializedProperty('BypassResultTypes');
        return (this.get_objectData().get_properties()['BypassResultTypes']);
    },
    
    set_bypassResultTypes: function Microsoft_SharePoint_Client_Search_Query_Query$set_bypassResultTypes$in(value) {
        this.get_objectData().get_properties()['BypassResultTypes'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'BypassResultTypes', value));
        }
        return value;
    },
    
    get_clientType: function Microsoft_SharePoint_Client_Search_Query_Query$get_clientType$in() {
        this.checkUninitializedProperty('ClientType');
        return (this.get_objectData().get_properties()['ClientType']);
    },
    
    set_clientType: function Microsoft_SharePoint_Client_Search_Query_Query$set_clientType$in(value) {
        this.get_objectData().get_properties()['ClientType'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'ClientType', value));
        }
        return value;
    },
    
    get_culture: function Microsoft_SharePoint_Client_Search_Query_Query$get_culture$in() {
        this.checkUninitializedProperty('Culture');
        return (this.get_objectData().get_properties()['Culture']);
    },
    
    set_culture: function Microsoft_SharePoint_Client_Search_Query_Query$set_culture$in(value) {
        this.get_objectData().get_properties()['Culture'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Culture', value));
        }
        return value;
    },
    
    get_desiredSnippetLength: function Microsoft_SharePoint_Client_Search_Query_Query$get_desiredSnippetLength$in() {
        this.checkUninitializedProperty('DesiredSnippetLength');
        return (this.get_objectData().get_properties()['DesiredSnippetLength']);
    },
    
    set_desiredSnippetLength: function Microsoft_SharePoint_Client_Search_Query_Query$set_desiredSnippetLength$in(value) {
        this.get_objectData().get_properties()['DesiredSnippetLength'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'DesiredSnippetLength', value));
        }
        return value;
    },
    
    get_enableInterleaving: function Microsoft_SharePoint_Client_Search_Query_Query$get_enableInterleaving$in() {
        this.checkUninitializedProperty('EnableInterleaving');
        return (this.get_objectData().get_properties()['EnableInterleaving']);
    },
    
    set_enableInterleaving: function Microsoft_SharePoint_Client_Search_Query_Query$set_enableInterleaving$in(value) {
        this.get_objectData().get_properties()['EnableInterleaving'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'EnableInterleaving', value));
        }
        return value;
    },
    
    get_enableNicknames: function Microsoft_SharePoint_Client_Search_Query_Query$get_enableNicknames$in() {
        this.checkUninitializedProperty('EnableNicknames');
        return (this.get_objectData().get_properties()['EnableNicknames']);
    },
    
    set_enableNicknames: function Microsoft_SharePoint_Client_Search_Query_Query$set_enableNicknames$in(value) {
        this.get_objectData().get_properties()['EnableNicknames'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'EnableNicknames', value));
        }
        return value;
    },
    
    get_enableOrderingHitHighlightedProperty: function Microsoft_SharePoint_Client_Search_Query_Query$get_enableOrderingHitHighlightedProperty$in() {
        this.checkUninitializedProperty('EnableOrderingHitHighlightedProperty');
        return (this.get_objectData().get_properties()['EnableOrderingHitHighlightedProperty']);
    },
    
    set_enableOrderingHitHighlightedProperty: function Microsoft_SharePoint_Client_Search_Query_Query$set_enableOrderingHitHighlightedProperty$in(value) {
        this.get_objectData().get_properties()['EnableOrderingHitHighlightedProperty'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'EnableOrderingHitHighlightedProperty', value));
        }
        return value;
    },
    
    get_enablePhonetic: function Microsoft_SharePoint_Client_Search_Query_Query$get_enablePhonetic$in() {
        this.checkUninitializedProperty('EnablePhonetic');
        return (this.get_objectData().get_properties()['EnablePhonetic']);
    },
    
    set_enablePhonetic: function Microsoft_SharePoint_Client_Search_Query_Query$set_enablePhonetic$in(value) {
        this.get_objectData().get_properties()['EnablePhonetic'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'EnablePhonetic', value));
        }
        return value;
    },
    
    get_enableQueryRules: function Microsoft_SharePoint_Client_Search_Query_Query$get_enableQueryRules$in() {
        this.checkUninitializedProperty('EnableQueryRules');
        return (this.get_objectData().get_properties()['EnableQueryRules']);
    },
    
    set_enableQueryRules: function Microsoft_SharePoint_Client_Search_Query_Query$set_enableQueryRules$in(value) {
        this.get_objectData().get_properties()['EnableQueryRules'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'EnableQueryRules', value));
        }
        return value;
    },
    
    get_enableStemming: function Microsoft_SharePoint_Client_Search_Query_Query$get_enableStemming$in() {
        this.checkUninitializedProperty('EnableStemming');
        return (this.get_objectData().get_properties()['EnableStemming']);
    },
    
    set_enableStemming: function Microsoft_SharePoint_Client_Search_Query_Query$set_enableStemming$in(value) {
        this.get_objectData().get_properties()['EnableStemming'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'EnableStemming', value));
        }
        return value;
    },
    
    get_generateBlockRankLog: function Microsoft_SharePoint_Client_Search_Query_Query$get_generateBlockRankLog$in() {
        this.checkUninitializedProperty('GenerateBlockRankLog');
        return (this.get_objectData().get_properties()['GenerateBlockRankLog']);
    },
    
    set_generateBlockRankLog: function Microsoft_SharePoint_Client_Search_Query_Query$set_generateBlockRankLog$in(value) {
        this.get_objectData().get_properties()['GenerateBlockRankLog'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'GenerateBlockRankLog', value));
        }
        return value;
    },
    
    get_hitHighlightedMultivaluePropertyLimit: function Microsoft_SharePoint_Client_Search_Query_Query$get_hitHighlightedMultivaluePropertyLimit$in() {
        this.checkUninitializedProperty('HitHighlightedMultivaluePropertyLimit');
        return (this.get_objectData().get_properties()['HitHighlightedMultivaluePropertyLimit']);
    },
    
    set_hitHighlightedMultivaluePropertyLimit: function Microsoft_SharePoint_Client_Search_Query_Query$set_hitHighlightedMultivaluePropertyLimit$in(value) {
        this.get_objectData().get_properties()['HitHighlightedMultivaluePropertyLimit'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'HitHighlightedMultivaluePropertyLimit', value));
        }
        return value;
    },
    
    get_hitHighlightedProperties: function Microsoft_SharePoint_Client_Search_Query_Query$get_hitHighlightedProperties$in() {
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['HitHighlightedProperties']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new Microsoft.SharePoint.Client.Search.Query.StringCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'HitHighlightedProperties'));
            this.get_objectData().get_clientObjectProperties()['HitHighlightedProperties'] = $v_0;
        }
        return $v_0;
    },
    
    get_ignoreSafeQueryPropertiesTemplateUrl: function Microsoft_SharePoint_Client_Search_Query_Query$get_ignoreSafeQueryPropertiesTemplateUrl$in() {
        this.checkUninitializedProperty('IgnoreSafeQueryPropertiesTemplateUrl');
        return (this.get_objectData().get_properties()['IgnoreSafeQueryPropertiesTemplateUrl']);
    },
    
    set_ignoreSafeQueryPropertiesTemplateUrl: function Microsoft_SharePoint_Client_Search_Query_Query$set_ignoreSafeQueryPropertiesTemplateUrl$in(value) {
        this.get_objectData().get_properties()['IgnoreSafeQueryPropertiesTemplateUrl'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'IgnoreSafeQueryPropertiesTemplateUrl', value));
        }
        return value;
    },
    
    get_impressionID: function Microsoft_SharePoint_Client_Search_Query_Query$get_impressionID$in() {
        this.checkUninitializedProperty('ImpressionID');
        return (this.get_objectData().get_properties()['ImpressionID']);
    },
    
    set_impressionID: function Microsoft_SharePoint_Client_Search_Query_Query$set_impressionID$in(value) {
        this.get_objectData().get_properties()['ImpressionID'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'ImpressionID', value));
        }
        return value;
    },
    
    get_maxSnippetLength: function Microsoft_SharePoint_Client_Search_Query_Query$get_maxSnippetLength$in() {
        this.checkUninitializedProperty('MaxSnippetLength');
        return (this.get_objectData().get_properties()['MaxSnippetLength']);
    },
    
    set_maxSnippetLength: function Microsoft_SharePoint_Client_Search_Query_Query$set_maxSnippetLength$in(value) {
        this.get_objectData().get_properties()['MaxSnippetLength'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'MaxSnippetLength', value));
        }
        return value;
    },
    
    get_personalizationData: function Microsoft_SharePoint_Client_Search_Query_Query$get_personalizationData$in() {
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['PersonalizationData']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new Microsoft.SharePoint.Client.Search.Query.QueryPersonalizationData(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'PersonalizationData'));
            this.get_objectData().get_clientObjectProperties()['PersonalizationData'] = $v_0;
        }
        return $v_0;
    },
    
    set_personalizationData: function Microsoft_SharePoint_Client_Search_Query_Query$set_personalizationData$in(value) {
        this.get_objectData().get_clientObjectProperties()['PersonalizationData'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'PersonalizationData', value));
        }
        return value;
    },
    
    get_processBestBets: function Microsoft_SharePoint_Client_Search_Query_Query$get_processBestBets$in() {
        this.checkUninitializedProperty('ProcessBestBets');
        return (this.get_objectData().get_properties()['ProcessBestBets']);
    },
    
    set_processBestBets: function Microsoft_SharePoint_Client_Search_Query_Query$set_processBestBets$in(value) {
        this.get_objectData().get_properties()['ProcessBestBets'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'ProcessBestBets', value));
        }
        return value;
    },
    
    get_processPersonalFavorites: function Microsoft_SharePoint_Client_Search_Query_Query$get_processPersonalFavorites$in() {
        this.checkUninitializedProperty('ProcessPersonalFavorites');
        return (this.get_objectData().get_properties()['ProcessPersonalFavorites']);
    },
    
    set_processPersonalFavorites: function Microsoft_SharePoint_Client_Search_Query_Query$set_processPersonalFavorites$in(value) {
        this.get_objectData().get_properties()['ProcessPersonalFavorites'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'ProcessPersonalFavorites', value));
        }
        return value;
    },
    
    get_queryTag: function Microsoft_SharePoint_Client_Search_Query_Query$get_queryTag$in() {
        this.checkUninitializedProperty('QueryTag');
        return (this.get_objectData().get_properties()['QueryTag']);
    },
    
    set_queryTag: function Microsoft_SharePoint_Client_Search_Query_Query$set_queryTag$in(value) {
        this.get_objectData().get_properties()['QueryTag'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'QueryTag', value));
        }
        return value;
    },
    
    get_queryTemplate: function Microsoft_SharePoint_Client_Search_Query_Query$get_queryTemplate$in() {
        this.checkUninitializedProperty('QueryTemplate');
        return (this.get_objectData().get_properties()['QueryTemplate']);
    },
    
    set_queryTemplate: function Microsoft_SharePoint_Client_Search_Query_Query$set_queryTemplate$in(value) {
        this.get_objectData().get_properties()['QueryTemplate'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'QueryTemplate', value));
        }
        return value;
    },
    
    get_queryTemplateParameters: function Microsoft_SharePoint_Client_Search_Query_Query$get_queryTemplateParameters$in() {
        this.checkUninitializedProperty('QueryTemplateParameters');
        return (this.get_objectData().get_properties()['QueryTemplateParameters']);
    },
    
    get_queryText: function Microsoft_SharePoint_Client_Search_Query_Query$get_queryText$in() {
        this.checkUninitializedProperty('QueryText');
        return (this.get_objectData().get_properties()['QueryText']);
    },
    
    set_queryText: function Microsoft_SharePoint_Client_Search_Query_Query$set_queryText$in(value) {
        this.get_objectData().get_properties()['QueryText'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'QueryText', value));
        }
        return value;
    },
    
    get_rankingModelId: function Microsoft_SharePoint_Client_Search_Query_Query$get_rankingModelId$in() {
        this.checkUninitializedProperty('RankingModelId');
        return (this.get_objectData().get_properties()['RankingModelId']);
    },
    
    set_rankingModelId: function Microsoft_SharePoint_Client_Search_Query_Query$set_rankingModelId$in(value) {
        this.get_objectData().get_properties()['RankingModelId'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'RankingModelId', value));
        }
        return value;
    },
    
    get_resultsUrl: function Microsoft_SharePoint_Client_Search_Query_Query$get_resultsUrl$in() {
        this.checkUninitializedProperty('ResultsUrl');
        return (this.get_objectData().get_properties()['ResultsUrl']);
    },
    
    set_resultsUrl: function Microsoft_SharePoint_Client_Search_Query_Query$set_resultsUrl$in(value) {
        this.get_objectData().get_properties()['ResultsUrl'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'ResultsUrl', value));
        }
        return value;
    },
    
    get_rowLimit: function Microsoft_SharePoint_Client_Search_Query_Query$get_rowLimit$in() {
        this.checkUninitializedProperty('RowLimit');
        return (this.get_objectData().get_properties()['RowLimit']);
    },
    
    set_rowLimit: function Microsoft_SharePoint_Client_Search_Query_Query$set_rowLimit$in(value) {
        this.get_objectData().get_properties()['RowLimit'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'RowLimit', value));
        }
        return value;
    },
    
    get_rowsPerPage: function Microsoft_SharePoint_Client_Search_Query_Query$get_rowsPerPage$in() {
        this.checkUninitializedProperty('RowsPerPage');
        return (this.get_objectData().get_properties()['RowsPerPage']);
    },
    
    set_rowsPerPage: function Microsoft_SharePoint_Client_Search_Query_Query$set_rowsPerPage$in(value) {
        this.get_objectData().get_properties()['RowsPerPage'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'RowsPerPage', value));
        }
        return value;
    },
    
    get_safeQueryPropertiesTemplateUrl: function Microsoft_SharePoint_Client_Search_Query_Query$get_safeQueryPropertiesTemplateUrl$in() {
        this.checkUninitializedProperty('SafeQueryPropertiesTemplateUrl');
        return (this.get_objectData().get_properties()['SafeQueryPropertiesTemplateUrl']);
    },
    
    set_safeQueryPropertiesTemplateUrl: function Microsoft_SharePoint_Client_Search_Query_Query$set_safeQueryPropertiesTemplateUrl$in(value) {
        this.get_objectData().get_properties()['SafeQueryPropertiesTemplateUrl'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'SafeQueryPropertiesTemplateUrl', value));
        }
        return value;
    },
    
    get_showPeopleNameSuggestions: function Microsoft_SharePoint_Client_Search_Query_Query$get_showPeopleNameSuggestions$in() {
        this.checkUninitializedProperty('ShowPeopleNameSuggestions');
        return (this.get_objectData().get_properties()['ShowPeopleNameSuggestions']);
    },
    
    set_showPeopleNameSuggestions: function Microsoft_SharePoint_Client_Search_Query_Query$set_showPeopleNameSuggestions$in(value) {
        this.get_objectData().get_properties()['ShowPeopleNameSuggestions'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'ShowPeopleNameSuggestions', value));
        }
        return value;
    },
    
    get_sourceId: function Microsoft_SharePoint_Client_Search_Query_Query$get_sourceId$in() {
        this.checkUninitializedProperty('SourceId');
        return (this.get_objectData().get_properties()['SourceId']);
    },
    
    set_sourceId: function Microsoft_SharePoint_Client_Search_Query_Query$set_sourceId$in(value) {
        this.get_objectData().get_properties()['SourceId'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'SourceId', value));
        }
        return value;
    },
    
    get_startRow: function Microsoft_SharePoint_Client_Search_Query_Query$get_startRow$in() {
        this.checkUninitializedProperty('StartRow');
        return (this.get_objectData().get_properties()['StartRow']);
    },
    
    set_startRow: function Microsoft_SharePoint_Client_Search_Query_Query$set_startRow$in(value) {
        this.get_objectData().get_properties()['StartRow'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'StartRow', value));
        }
        return value;
    },
    
    get_summaryLength: function Microsoft_SharePoint_Client_Search_Query_Query$get_summaryLength$in() {
        this.checkUninitializedProperty('SummaryLength');
        return (this.get_objectData().get_properties()['SummaryLength']);
    },
    
    set_summaryLength: function Microsoft_SharePoint_Client_Search_Query_Query$set_summaryLength$in(value) {
        this.get_objectData().get_properties()['SummaryLength'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'SummaryLength', value));
        }
        return value;
    },
    
    get_timeout: function Microsoft_SharePoint_Client_Search_Query_Query$get_timeout$in() {
        this.checkUninitializedProperty('Timeout');
        return (this.get_objectData().get_properties()['Timeout']);
    },
    
    set_timeout: function Microsoft_SharePoint_Client_Search_Query_Query$set_timeout$in(value) {
        this.get_objectData().get_properties()['Timeout'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Timeout', value));
        }
        return value;
    },
    
    get_totalRowsExactMinimum: function Microsoft_SharePoint_Client_Search_Query_Query$get_totalRowsExactMinimum$in() {
        this.checkUninitializedProperty('TotalRowsExactMinimum');
        return (this.get_objectData().get_properties()['TotalRowsExactMinimum']);
    },
    
    set_totalRowsExactMinimum: function Microsoft_SharePoint_Client_Search_Query_Query$set_totalRowsExactMinimum$in(value) {
        this.get_objectData().get_properties()['TotalRowsExactMinimum'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'TotalRowsExactMinimum', value));
        }
        return value;
    },
    
    get_trimDuplicates: function Microsoft_SharePoint_Client_Search_Query_Query$get_trimDuplicates$in() {
        this.checkUninitializedProperty('TrimDuplicates');
        return (this.get_objectData().get_properties()['TrimDuplicates']);
    },
    
    set_trimDuplicates: function Microsoft_SharePoint_Client_Search_Query_Query$set_trimDuplicates$in(value) {
        this.get_objectData().get_properties()['TrimDuplicates'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'TrimDuplicates', value));
        }
        return value;
    },
    
    get_uiLanguage: function Microsoft_SharePoint_Client_Search_Query_Query$get_uiLanguage$in() {
        this.checkUninitializedProperty('UILanguage');
        return (this.get_objectData().get_properties()['UILanguage']);
    },
    
    set_uiLanguage: function Microsoft_SharePoint_Client_Search_Query_Query$set_uiLanguage$in(value) {
        this.get_objectData().get_properties()['UILanguage'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'UILanguage', value));
        }
        return value;
    },
    
    initPropertiesFromJson: function Microsoft_SharePoint_Client_Search_Query_Query$initPropertiesFromJson$in(parentNode) {
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.BlockDedupeMode;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['BlockDedupeMode'] = ($v_0);
            delete parentNode.BlockDedupeMode;
        }
        $v_0 = parentNode.BypassResultTypes;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['BypassResultTypes'] = ($v_0);
            delete parentNode.BypassResultTypes;
        }
        $v_0 = parentNode.ClientType;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ClientType'] = ($v_0);
            delete parentNode.ClientType;
        }
        $v_0 = parentNode.Culture;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Culture'] = ($v_0);
            delete parentNode.Culture;
        }
        $v_0 = parentNode.DesiredSnippetLength;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['DesiredSnippetLength'] = ($v_0);
            delete parentNode.DesiredSnippetLength;
        }
        $v_0 = parentNode.EnableInterleaving;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['EnableInterleaving'] = ($v_0);
            delete parentNode.EnableInterleaving;
        }
        $v_0 = parentNode.EnableNicknames;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['EnableNicknames'] = ($v_0);
            delete parentNode.EnableNicknames;
        }
        $v_0 = parentNode.EnableOrderingHitHighlightedProperty;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['EnableOrderingHitHighlightedProperty'] = ($v_0);
            delete parentNode.EnableOrderingHitHighlightedProperty;
        }
        $v_0 = parentNode.EnablePhonetic;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['EnablePhonetic'] = ($v_0);
            delete parentNode.EnablePhonetic;
        }
        $v_0 = parentNode.EnableQueryRules;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['EnableQueryRules'] = ($v_0);
            delete parentNode.EnableQueryRules;
        }
        $v_0 = parentNode.EnableStemming;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['EnableStemming'] = ($v_0);
            delete parentNode.EnableStemming;
        }
        $v_0 = parentNode.GenerateBlockRankLog;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['GenerateBlockRankLog'] = ($v_0);
            delete parentNode.GenerateBlockRankLog;
        }
        $v_0 = parentNode.HitHighlightedMultivaluePropertyLimit;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['HitHighlightedMultivaluePropertyLimit'] = ($v_0);
            delete parentNode.HitHighlightedMultivaluePropertyLimit;
        }
        $v_0 = parentNode.HitHighlightedProperties;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('HitHighlightedProperties', this.get_hitHighlightedProperties(), $v_0);
            this.get_hitHighlightedProperties().fromJson($v_0);
            delete parentNode.HitHighlightedProperties;
        }
        $v_0 = parentNode.IgnoreSafeQueryPropertiesTemplateUrl;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['IgnoreSafeQueryPropertiesTemplateUrl'] = ($v_0);
            delete parentNode.IgnoreSafeQueryPropertiesTemplateUrl;
        }
        $v_0 = parentNode.ImpressionID;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ImpressionID'] = ($v_0);
            delete parentNode.ImpressionID;
        }
        $v_0 = parentNode.MaxSnippetLength;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['MaxSnippetLength'] = ($v_0);
            delete parentNode.MaxSnippetLength;
        }
        $v_0 = parentNode.PersonalizationData;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('PersonalizationData', this.get_personalizationData(), $v_0);
            this.get_personalizationData().fromJson($v_0);
            delete parentNode.PersonalizationData;
        }
        $v_0 = parentNode.ProcessBestBets;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ProcessBestBets'] = ($v_0);
            delete parentNode.ProcessBestBets;
        }
        $v_0 = parentNode.ProcessPersonalFavorites;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ProcessPersonalFavorites'] = ($v_0);
            delete parentNode.ProcessPersonalFavorites;
        }
        $v_0 = parentNode.QueryTag;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['QueryTag'] = ($v_0);
            delete parentNode.QueryTag;
        }
        $v_0 = parentNode.QueryTemplate;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['QueryTemplate'] = ($v_0);
            delete parentNode.QueryTemplate;
        }
        $v_0 = parentNode.QueryTemplateParameters;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['QueryTemplateParameters'] = ((SP.DataConvert.fixupType(this.get_context(), $v_0)));
            delete parentNode.QueryTemplateParameters;
        }
        $v_0 = parentNode.QueryText;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['QueryText'] = ($v_0);
            delete parentNode.QueryText;
        }
        $v_0 = parentNode.RankingModelId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['RankingModelId'] = ($v_0);
            delete parentNode.RankingModelId;
        }
        $v_0 = parentNode.ResultsUrl;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ResultsUrl'] = ($v_0);
            delete parentNode.ResultsUrl;
        }
        $v_0 = parentNode.RowLimit;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['RowLimit'] = ($v_0);
            delete parentNode.RowLimit;
        }
        $v_0 = parentNode.RowsPerPage;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['RowsPerPage'] = ($v_0);
            delete parentNode.RowsPerPage;
        }
        $v_0 = parentNode.SafeQueryPropertiesTemplateUrl;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['SafeQueryPropertiesTemplateUrl'] = ($v_0);
            delete parentNode.SafeQueryPropertiesTemplateUrl;
        }
        $v_0 = parentNode.ShowPeopleNameSuggestions;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ShowPeopleNameSuggestions'] = ($v_0);
            delete parentNode.ShowPeopleNameSuggestions;
        }
        $v_0 = parentNode.SourceId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['SourceId'] = ($v_0);
            delete parentNode.SourceId;
        }
        $v_0 = parentNode.StartRow;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['StartRow'] = ($v_0);
            delete parentNode.StartRow;
        }
        $v_0 = parentNode.SummaryLength;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['SummaryLength'] = ($v_0);
            delete parentNode.SummaryLength;
        }
        $v_0 = parentNode.Timeout;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Timeout'] = ($v_0);
            delete parentNode.Timeout;
        }
        $v_0 = parentNode.TotalRowsExactMinimum;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['TotalRowsExactMinimum'] = ($v_0);
            delete parentNode.TotalRowsExactMinimum;
        }
        $v_0 = parentNode.TrimDuplicates;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['TrimDuplicates'] = ($v_0);
            delete parentNode.TrimDuplicates;
        }
        $v_0 = parentNode.UILanguage;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['UILanguage'] = ($v_0);
            delete parentNode.UILanguage;
        }
    },
    
    getQuerySuggestionsWithResults: function Microsoft_SharePoint_Client_Search_Query_Query$getQuerySuggestionsWithResults$in(iNumberOfQuerySuggestions, iNumberOfResultSuggestions, fPreQuerySuggestions, fHitHighlighting, fCapitalizeFirstLetters, fPrefixMatchAllTerms) {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'GetQuerySuggestionsWithResults', [ iNumberOfQuerySuggestions, iNumberOfResultSuggestions, fPreQuerySuggestions, fHitHighlighting, fCapitalizeFirstLetters, fPrefixMatchAllTerms ]);
        $v_0.addQuery($v_2);
        $v_1 = new Microsoft.SharePoint.Client.Search.Query.QuerySuggestionResults();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    },
    
    getZeroTermsQuerySuggestionsWithResults: function Microsoft_SharePoint_Client_Search_Query_Query$getZeroTermsQuerySuggestionsWithResults$in(iNumberOfQuerySuggestions, iNumberOfResultSuggestions, fCapitalizeFirstLetters) {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'GetZeroTermsQuerySuggestionsWithResults', [ iNumberOfQuerySuggestions, iNumberOfResultSuggestions, fCapitalizeFirstLetters ]);
        $v_0.addQuery($v_2);
        $v_1 = new Microsoft.SharePoint.Client.Search.Query.QuerySuggestionResults();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    },
    
    exportQueryLogs: function Microsoft_SharePoint_Client_Search_Query_Query$exportQueryLogs$in(userName, startTime) {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'ExportQueryLogs', [ userName, startTime ]);
        $v_0.addQuery($v_2);
        $v_1 = new SP.StringResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    },
    
    getQueryCompletions: function Microsoft_SharePoint_Client_Search_Query_Query$getQueryCompletions$in(numberOfCompletions, selectedSources, cursorPosition) {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'GetQueryCompletions', [ numberOfCompletions, selectedSources, cursorPosition ]);
        $v_0.addQuery($v_2);
        $v_1 = new Microsoft.SharePoint.Client.Search.Query.QueryAutoCompletionResults();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    }
}


Microsoft.SharePoint.Client.Search.Query.QueryPropertyNames = function Microsoft_SharePoint_Client_Search_Query_QueryPropertyNames() {
}


Microsoft.SharePoint.Client.Search.Query.QueryObjectPropertyNames = function Microsoft_SharePoint_Client_Search_Query_QueryObjectPropertyNames() {
}


Microsoft.SharePoint.Client.Search.Query.QueryAutoCompletion = function Microsoft_SharePoint_Client_Search_Query_QueryAutoCompletion() {
    Microsoft.SharePoint.Client.Search.Query.QueryAutoCompletion.initializeBase(this);
}
Microsoft.SharePoint.Client.Search.Query.QueryAutoCompletion.prototype = {
    $J_1: null,
    $7_1: null,
    $9_1: 0,
    $12_1: null,
    
    get_matches: function Microsoft_SharePoint_Client_Search_Query_QueryAutoCompletion$get_matches$in() {
        return this.$J_1;
    },
    
    set_matches: function Microsoft_SharePoint_Client_Search_Query_QueryAutoCompletion$set_matches$in(value) {
        this.$J_1 = value;
        return value;
    },
    
    get_query: function Microsoft_SharePoint_Client_Search_Query_QueryAutoCompletion$get_query$in() {
        return this.$7_1;
    },
    
    set_query: function Microsoft_SharePoint_Client_Search_Query_QueryAutoCompletion$set_query$in(value) {
        this.$7_1 = value;
        return value;
    },
    
    get_score: function Microsoft_SharePoint_Client_Search_Query_QueryAutoCompletion$get_score$in() {
        return this.$9_1;
    },
    
    set_score: function Microsoft_SharePoint_Client_Search_Query_QueryAutoCompletion$set_score$in(value) {
        this.$9_1 = value;
        return value;
    },
    
    get_source: function Microsoft_SharePoint_Client_Search_Query_QueryAutoCompletion$get_source$in() {
        return this.$12_1;
    },
    
    set_source: function Microsoft_SharePoint_Client_Search_Query_QueryAutoCompletion$set_source$in(value) {
        this.$12_1 = value;
        return value;
    },
    
    get_typeId: function Microsoft_SharePoint_Client_Search_Query_QueryAutoCompletion$get_typeId$in() {
        return '{a2967d9c-4de2-4b3e-b803-dde07acede25}';
    },
    
    writeToXml: function Microsoft_SharePoint_Client_Search_Query_QueryAutoCompletion$writeToXml$in(writer, serializationContext) {
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = [ 'Matches', 'Query', 'Score', 'Source' ];
        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    
    initPropertiesFromJson: function Microsoft_SharePoint_Client_Search_Query_QueryAutoCompletion$initPropertiesFromJson$in(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.Matches;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$J_1 = (([]));
            SP.DataConvert.populateArray(null, ((this.$J_1)), ($v_0));
            delete parentNode.Matches;
        }
        $v_0 = parentNode.Query;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$7_1 = ($v_0);
            delete parentNode.Query;
        }
        $v_0 = parentNode.Score;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$9_1 = ($v_0);
            delete parentNode.Score;
        }
        $v_0 = parentNode.Source;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$12_1 = ($v_0);
            delete parentNode.Source;
        }
    }
}


Microsoft.SharePoint.Client.Search.Query.QueryAutoCompletionMatch = function Microsoft_SharePoint_Client_Search_Query_QueryAutoCompletionMatch() {
    Microsoft.SharePoint.Client.Search.Query.QueryAutoCompletionMatch.initializeBase(this);
}
Microsoft.SharePoint.Client.Search.Query.QueryAutoCompletionMatch.prototype = {
    $Q_1: false,
    $j_1: null,
    $5_1: 0,
    $6_1: null,
    $9_1: 0,
    $14_1: null,
    $A_1: 0,
    $1B_1: null,
    
    get_alternation: function Microsoft_SharePoint_Client_Search_Query_QueryAutoCompletionMatch$get_alternation$in() {
        return this.$Q_1;
    },
    
    set_alternation: function Microsoft_SharePoint_Client_Search_Query_QueryAutoCompletionMatch$set_alternation$in(value) {
        this.$Q_1 = value;
        return value;
    },
    
    get_key: function Microsoft_SharePoint_Client_Search_Query_QueryAutoCompletionMatch$get_key$in() {
        return this.$j_1;
    },
    
    set_key: function Microsoft_SharePoint_Client_Search_Query_QueryAutoCompletionMatch$set_key$in(value) {
        this.$j_1 = value;
        return value;
    },
    
    get_length: function Microsoft_SharePoint_Client_Search_Query_QueryAutoCompletionMatch$get_length$in() {
        return this.$5_1;
    },
    
    set_length: function Microsoft_SharePoint_Client_Search_Query_QueryAutoCompletionMatch$set_length$in(value) {
        this.$5_1 = value;
        return value;
    },
    
    get_matchType: function Microsoft_SharePoint_Client_Search_Query_QueryAutoCompletionMatch$get_matchType$in() {
        return this.$6_1;
    },
    
    set_matchType: function Microsoft_SharePoint_Client_Search_Query_QueryAutoCompletionMatch$set_matchType$in(value) {
        this.$6_1 = value;
        return value;
    },
    
    get_score: function Microsoft_SharePoint_Client_Search_Query_QueryAutoCompletionMatch$get_score$in() {
        return this.$9_1;
    },
    
    set_score: function Microsoft_SharePoint_Client_Search_Query_QueryAutoCompletionMatch$set_score$in(value) {
        this.$9_1 = value;
        return value;
    },
    
    get_sourceName: function Microsoft_SharePoint_Client_Search_Query_QueryAutoCompletionMatch$get_sourceName$in() {
        return this.$14_1;
    },
    
    set_sourceName: function Microsoft_SharePoint_Client_Search_Query_QueryAutoCompletionMatch$set_sourceName$in(value) {
        this.$14_1 = value;
        return value;
    },
    
    get_start: function Microsoft_SharePoint_Client_Search_Query_QueryAutoCompletionMatch$get_start$in() {
        return this.$A_1;
    },
    
    set_start: function Microsoft_SharePoint_Client_Search_Query_QueryAutoCompletionMatch$set_start$in(value) {
        this.$A_1 = value;
        return value;
    },
    
    get_value: function Microsoft_SharePoint_Client_Search_Query_QueryAutoCompletionMatch$get_value$in() {
        return this.$1B_1;
    },
    
    set_value: function Microsoft_SharePoint_Client_Search_Query_QueryAutoCompletionMatch$set_value$in(value) {
        this.$1B_1 = value;
        return value;
    },
    
    get_typeId: function Microsoft_SharePoint_Client_Search_Query_QueryAutoCompletionMatch$get_typeId$in() {
        return '{a2d57556-71dd-447a-8b8f-00ef0ae9afd5}';
    },
    
    writeToXml: function Microsoft_SharePoint_Client_Search_Query_QueryAutoCompletionMatch$writeToXml$in(writer, serializationContext) {
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = [ 'Alternation', 'Key', 'Length', 'MatchType', 'Score', 'SourceName', 'Start', 'Value' ];
        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    
    initPropertiesFromJson: function Microsoft_SharePoint_Client_Search_Query_QueryAutoCompletionMatch$initPropertiesFromJson$in(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.Alternation;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$Q_1 = ($v_0);
            delete parentNode.Alternation;
        }
        $v_0 = parentNode.Key;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$j_1 = ($v_0);
            delete parentNode.Key;
        }
        $v_0 = parentNode.Length;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$5_1 = ($v_0);
            delete parentNode.Length;
        }
        $v_0 = parentNode.MatchType;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$6_1 = ($v_0);
            delete parentNode.MatchType;
        }
        $v_0 = parentNode.Score;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$9_1 = ($v_0);
            delete parentNode.Score;
        }
        $v_0 = parentNode.SourceName;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$14_1 = ($v_0);
            delete parentNode.SourceName;
        }
        $v_0 = parentNode.Start;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$A_1 = ($v_0);
            delete parentNode.Start;
        }
        $v_0 = parentNode.Value;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1B_1 = ($v_0);
            delete parentNode.Value;
        }
    }
}


Microsoft.SharePoint.Client.Search.Query.QueryAutoCompletionResults = function Microsoft_SharePoint_Client_Search_Query_QueryAutoCompletionResults() {
    Microsoft.SharePoint.Client.Search.Query.QueryAutoCompletionResults.initializeBase(this);
}
Microsoft.SharePoint.Client.Search.Query.QueryAutoCompletionResults.prototype = {
    $V_1: 0,
    $W_1: null,
    $2_1: null,
    
    get_coreExecutionTimeMs: function Microsoft_SharePoint_Client_Search_Query_QueryAutoCompletionResults$get_coreExecutionTimeMs$in() {
        return this.$V_1;
    },
    
    set_coreExecutionTimeMs: function Microsoft_SharePoint_Client_Search_Query_QueryAutoCompletionResults$set_coreExecutionTimeMs$in(value) {
        this.$V_1 = value;
        return value;
    },
    
    get_correlationId: function Microsoft_SharePoint_Client_Search_Query_QueryAutoCompletionResults$get_correlationId$in() {
        return this.$W_1;
    },
    
    set_correlationId: function Microsoft_SharePoint_Client_Search_Query_QueryAutoCompletionResults$set_correlationId$in(value) {
        this.$W_1 = value;
        return value;
    },
    
    get_queries: function Microsoft_SharePoint_Client_Search_Query_QueryAutoCompletionResults$get_queries$in() {
        return this.$2_1;
    },
    
    set_queries: function Microsoft_SharePoint_Client_Search_Query_QueryAutoCompletionResults$set_queries$in(value) {
        this.$2_1 = value;
        return value;
    },
    
    get_typeId: function Microsoft_SharePoint_Client_Search_Query_QueryAutoCompletionResults$get_typeId$in() {
        return '{a18d0722-e006-476b-b783-8f64c2859507}';
    },
    
    writeToXml: function Microsoft_SharePoint_Client_Search_Query_QueryAutoCompletionResults$writeToXml$in(writer, serializationContext) {
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = [ 'CoreExecutionTimeMs', 'CorrelationId', 'Queries' ];
        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    
    initPropertiesFromJson: function Microsoft_SharePoint_Client_Search_Query_QueryAutoCompletionResults$initPropertiesFromJson$in(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.CoreExecutionTimeMs;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$V_1 = ($v_0);
            delete parentNode.CoreExecutionTimeMs;
        }
        $v_0 = parentNode.CorrelationId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$W_1 = ($v_0);
            delete parentNode.CorrelationId;
        }
        $v_0 = parentNode.Queries;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$2_1 = (([]));
            SP.DataConvert.populateArray(null, ((this.$2_1)), ($v_0));
            delete parentNode.Queries;
        }
    }
}


Microsoft.SharePoint.Client.Search.Query.QueryPersonalizationData = function Microsoft_SharePoint_Client_Search_Query_QueryPersonalizationData(context, guidUserIdString) {
    Microsoft.SharePoint.Client.Search.Query.QueryPersonalizationData.initializeBase(this, [ context, SP.ClientUtility.getOrCreateObjectPathForConstructor(context, '{28d79f49-820a-4d51-bb2a-3309b3f4c54d}', arguments) ]);
}
Microsoft.SharePoint.Client.Search.Query.QueryPersonalizationData.newObject = function Microsoft_SharePoint_Client_Search_Query_QueryPersonalizationData$newObject$st(context, guidUserIdString) {
    return new Microsoft.SharePoint.Client.Search.Query.QueryPersonalizationData(context, new SP.ObjectPathConstructor(context, '{28d79f49-820a-4d51-bb2a-3309b3f4c54d}', [ guidUserIdString ]));
}


Microsoft.SharePoint.Client.Search.Query.QueryPropertyValue = function Microsoft_SharePoint_Client_Search_Query_QueryPropertyValue() {
    Microsoft.SharePoint.Client.Search.Query.QueryPropertyValue.initializeBase(this);
}
Microsoft.SharePoint.Client.Search.Query.QueryPropertyValue.prototype = {
    $D_1: false,
    $E_1: 0,
    $0_1: 0,
    $G_1: null,
    $H_1: null,
    
    get_boolVal: function Microsoft_SharePoint_Client_Search_Query_QueryPropertyValue$get_boolVal$in() {
        return this.$D_1;
    },
    
    set_boolVal: function Microsoft_SharePoint_Client_Search_Query_QueryPropertyValue$set_boolVal$in(value) {
        this.$D_1 = value;
        return value;
    },
    
    get_intVal: function Microsoft_SharePoint_Client_Search_Query_QueryPropertyValue$get_intVal$in() {
        return this.$E_1;
    },
    
    set_intVal: function Microsoft_SharePoint_Client_Search_Query_QueryPropertyValue$set_intVal$in(value) {
        this.$E_1 = value;
        return value;
    },
    
    get_queryPropertyValueTypeIndex: function Microsoft_SharePoint_Client_Search_Query_QueryPropertyValue$get_queryPropertyValueTypeIndex$in() {
        return this.$0_1;
    },
    
    set_queryPropertyValueTypeIndex: function Microsoft_SharePoint_Client_Search_Query_QueryPropertyValue$set_queryPropertyValueTypeIndex$in(value) {
        this.$0_1 = value;
        return value;
    },
    
    get_strArray: function Microsoft_SharePoint_Client_Search_Query_QueryPropertyValue$get_strArray$in() {
        return this.$G_1;
    },
    
    set_strArray: function Microsoft_SharePoint_Client_Search_Query_QueryPropertyValue$set_strArray$in(value) {
        this.$G_1 = value;
        return value;
    },
    
    get_strVal: function Microsoft_SharePoint_Client_Search_Query_QueryPropertyValue$get_strVal$in() {
        return this.$H_1;
    },
    
    set_strVal: function Microsoft_SharePoint_Client_Search_Query_QueryPropertyValue$set_strVal$in(value) {
        this.$H_1 = value;
        return value;
    },
    
    get_typeId: function Microsoft_SharePoint_Client_Search_Query_QueryPropertyValue$get_typeId$in() {
        return '{b25ba502-71d7-4ae4-a701-4ca2fb1223be}';
    },
    
    writeToXml: function Microsoft_SharePoint_Client_Search_Query_QueryPropertyValue$writeToXml$in(writer, serializationContext) {
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = [ 'BoolVal', 'IntVal', 'QueryPropertyValueTypeIndex', 'StrArray', 'StrVal' ];
        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    
    initPropertiesFromJson: function Microsoft_SharePoint_Client_Search_Query_QueryPropertyValue$initPropertiesFromJson$in(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.BoolVal;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$D_1 = ($v_0);
            delete parentNode.BoolVal;
        }
        $v_0 = parentNode.IntVal;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$E_1 = ($v_0);
            delete parentNode.IntVal;
        }
        $v_0 = parentNode.QueryPropertyValueTypeIndex;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$0_1 = ($v_0);
            delete parentNode.QueryPropertyValueTypeIndex;
        }
        $v_0 = parentNode.StrArray;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$G_1 = ((SP.DataConvert.fixupType(null, $v_0)));
            delete parentNode.StrArray;
        }
        $v_0 = parentNode.StrVal;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$H_1 = ($v_0);
            delete parentNode.StrVal;
        }
    }
}


Microsoft.SharePoint.Client.Search.Query.QuerySuggestionQuery = function Microsoft_SharePoint_Client_Search_Query_QuerySuggestionQuery() {
    Microsoft.SharePoint.Client.Search.Query.QuerySuggestionQuery.initializeBase(this);
}
Microsoft.SharePoint.Client.Search.Query.QuerySuggestionQuery.prototype = {
    $g_1: false,
    $7_1: null,
    
    get_isPersonal: function Microsoft_SharePoint_Client_Search_Query_QuerySuggestionQuery$get_isPersonal$in() {
        return this.$g_1;
    },
    
    set_isPersonal: function Microsoft_SharePoint_Client_Search_Query_QuerySuggestionQuery$set_isPersonal$in(value) {
        this.$g_1 = value;
        return value;
    },
    
    get_query: function Microsoft_SharePoint_Client_Search_Query_QuerySuggestionQuery$get_query$in() {
        return this.$7_1;
    },
    
    set_query: function Microsoft_SharePoint_Client_Search_Query_QuerySuggestionQuery$set_query$in(value) {
        this.$7_1 = value;
        return value;
    },
    
    get_typeId: function Microsoft_SharePoint_Client_Search_Query_QuerySuggestionQuery$get_typeId$in() {
        return '{44908c33-c578-4342-905a-ee284b67b415}';
    },
    
    writeToXml: function Microsoft_SharePoint_Client_Search_Query_QuerySuggestionQuery$writeToXml$in(writer, serializationContext) {
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = [ 'IsPersonal', 'Query' ];
        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    
    initPropertiesFromJson: function Microsoft_SharePoint_Client_Search_Query_QuerySuggestionQuery$initPropertiesFromJson$in(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.IsPersonal;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$g_1 = ($v_0);
            delete parentNode.IsPersonal;
        }
        $v_0 = parentNode.Query;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$7_1 = ($v_0);
            delete parentNode.Query;
        }
    }
}


Microsoft.SharePoint.Client.Search.Query.QuerySuggestionRange = function Microsoft_SharePoint_Client_Search_Query_QuerySuggestionRange() {
    Microsoft.SharePoint.Client.Search.Query.QuerySuggestionRange.initializeBase(this);
}
Microsoft.SharePoint.Client.Search.Query.QuerySuggestionRange.prototype = {
    $5_1: 0,
    $A_1: 0,
    
    get_length: function Microsoft_SharePoint_Client_Search_Query_QuerySuggestionRange$get_length$in() {
        return this.$5_1;
    },
    
    set_length: function Microsoft_SharePoint_Client_Search_Query_QuerySuggestionRange$set_length$in(value) {
        this.$5_1 = value;
        return value;
    },
    
    get_start: function Microsoft_SharePoint_Client_Search_Query_QuerySuggestionRange$get_start$in() {
        return this.$A_1;
    },
    
    set_start: function Microsoft_SharePoint_Client_Search_Query_QuerySuggestionRange$set_start$in(value) {
        this.$A_1 = value;
        return value;
    },
    
    get_typeId: function Microsoft_SharePoint_Client_Search_Query_QuerySuggestionRange$get_typeId$in() {
        return '{6b42d4ee-3341-42eb-84b8-9dae18493482}';
    },
    
    writeToXml: function Microsoft_SharePoint_Client_Search_Query_QuerySuggestionRange$writeToXml$in(writer, serializationContext) {
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = [ 'Length', 'Start' ];
        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    
    initPropertiesFromJson: function Microsoft_SharePoint_Client_Search_Query_QuerySuggestionRange$initPropertiesFromJson$in(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.Length;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$5_1 = ($v_0);
            delete parentNode.Length;
        }
        $v_0 = parentNode.Start;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$A_1 = ($v_0);
            delete parentNode.Start;
        }
    }
}


Microsoft.SharePoint.Client.Search.Query.QuerySuggestionResults = function Microsoft_SharePoint_Client_Search_Query_QuerySuggestionResults() {
    Microsoft.SharePoint.Client.Search.Query.QuerySuggestionResults.initializeBase(this);
}
Microsoft.SharePoint.Client.Search.Query.QuerySuggestionResults.prototype = {
    $o_1: null,
    $K_1: null,
    $2_1: null,
    
    get_peopleNames: function Microsoft_SharePoint_Client_Search_Query_QuerySuggestionResults$get_peopleNames$in() {
        return this.$o_1;
    },
    
    set_peopleNames: function Microsoft_SharePoint_Client_Search_Query_QuerySuggestionResults$set_peopleNames$in(value) {
        this.$o_1 = value;
        return value;
    },
    
    get_personalResults: function Microsoft_SharePoint_Client_Search_Query_QuerySuggestionResults$get_personalResults$in() {
        return this.$K_1;
    },
    
    set_personalResults: function Microsoft_SharePoint_Client_Search_Query_QuerySuggestionResults$set_personalResults$in(value) {
        this.$K_1 = value;
        return value;
    },
    
    get_queries: function Microsoft_SharePoint_Client_Search_Query_QuerySuggestionResults$get_queries$in() {
        return this.$2_1;
    },
    
    set_queries: function Microsoft_SharePoint_Client_Search_Query_QuerySuggestionResults$set_queries$in(value) {
        this.$2_1 = value;
        return value;
    },
    
    get_typeId: function Microsoft_SharePoint_Client_Search_Query_QuerySuggestionResults$get_typeId$in() {
        return '{ef071cb4-7fab-4e8d-9480-f15d30dc696d}';
    },
    
    writeToXml: function Microsoft_SharePoint_Client_Search_Query_QuerySuggestionResults$writeToXml$in(writer, serializationContext) {
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = [ 'PeopleNames', 'PersonalResults', 'Queries' ];
        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    
    initPropertiesFromJson: function Microsoft_SharePoint_Client_Search_Query_QuerySuggestionResults$initPropertiesFromJson$in(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.PeopleNames;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$o_1 = ((SP.DataConvert.fixupType(null, $v_0)));
            delete parentNode.PeopleNames;
        }
        $v_0 = parentNode.PersonalResults;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$K_1 = (([]));
            SP.DataConvert.populateArray(null, ((this.$K_1)), ($v_0));
            delete parentNode.PersonalResults;
        }
        $v_0 = parentNode.Queries;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$2_1 = (([]));
            SP.DataConvert.populateArray(null, ((this.$2_1)), ($v_0));
            delete parentNode.Queries;
        }
    }
}


Microsoft.SharePoint.Client.Search.Query.RankingLabeling = function Microsoft_SharePoint_Client_Search_Query_RankingLabeling(context) {
    Microsoft.SharePoint.Client.Search.Query.RankingLabeling.initializeBase(this, [ context, SP.ClientUtility.getOrCreateObjectPathForConstructor(context, '{e2533389-4387-4ebe-8df7-11af5568aed5}', arguments) ]);
}
Microsoft.SharePoint.Client.Search.Query.RankingLabeling.newObject = function Microsoft_SharePoint_Client_Search_Query_RankingLabeling$newObject$st(context) {
    return new Microsoft.SharePoint.Client.Search.Query.RankingLabeling(context, new SP.ObjectPathConstructor(context, '{e2533389-4387-4ebe-8df7-11af5568aed5}', null));
}
Microsoft.SharePoint.Client.Search.Query.RankingLabeling.prototype = {
    
    getJudgementsForQuery: function Microsoft_SharePoint_Client_Search_Query_RankingLabeling$getJudgementsForQuery$in(query) {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'GetJudgementsForQuery', [ query ]);
        $v_0.addQuery($v_2);
        $v_1 = new SP.JsonObjectResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    },
    
    addJudgment: function Microsoft_SharePoint_Client_Search_Query_RankingLabeling$addJudgment$in(userQuery, url, labelId) {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'AddJudgment', [ userQuery, url, labelId ]);
        $v_0.addQuery($v_1);
    },
    
    normalizeResultUrl: function Microsoft_SharePoint_Client_Search_Query_RankingLabeling$normalizeResultUrl$in(url) {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'NormalizeResultUrl', [ url ]);
        $v_0.addQuery($v_2);
        $v_1 = new SP.JsonObjectResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    }
}


Microsoft.SharePoint.Client.Search.Query.ReorderingRule = function Microsoft_SharePoint_Client_Search_Query_ReorderingRule() {
    Microsoft.SharePoint.Client.Search.Query.ReorderingRule.initializeBase(this);
}
Microsoft.SharePoint.Client.Search.Query.ReorderingRule.prototype = {
    $R_1: 0,
    $6_1: 0,
    $n_1: null,
    
    get_boost: function Microsoft_SharePoint_Client_Search_Query_ReorderingRule$get_boost$in() {
        return this.$R_1;
    },
    
    set_boost: function Microsoft_SharePoint_Client_Search_Query_ReorderingRule$set_boost$in(value) {
        this.$R_1 = value;
        return value;
    },
    
    get_matchType: function Microsoft_SharePoint_Client_Search_Query_ReorderingRule$get_matchType$in() {
        return this.$6_1;
    },
    
    set_matchType: function Microsoft_SharePoint_Client_Search_Query_ReorderingRule$set_matchType$in(value) {
        this.$6_1 = value;
        return value;
    },
    
    get_matchValue: function Microsoft_SharePoint_Client_Search_Query_ReorderingRule$get_matchValue$in() {
        return this.$n_1;
    },
    
    set_matchValue: function Microsoft_SharePoint_Client_Search_Query_ReorderingRule$set_matchValue$in(value) {
        this.$n_1 = value;
        return value;
    },
    
    get_typeId: function Microsoft_SharePoint_Client_Search_Query_ReorderingRule$get_typeId$in() {
        return '{d8566f46-74b1-4d92-ba88-0efd23b36f71}';
    },
    
    writeToXml: function Microsoft_SharePoint_Client_Search_Query_ReorderingRule$writeToXml$in(writer, serializationContext) {
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = [ 'Boost', 'MatchType', 'MatchValue' ];
        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    
    initPropertiesFromJson: function Microsoft_SharePoint_Client_Search_Query_ReorderingRule$initPropertiesFromJson$in(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.Boost;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$R_1 = ($v_0);
            delete parentNode.Boost;
        }
        $v_0 = parentNode.MatchType;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$6_1 = ((SP.DataConvert.fixupType(null, $v_0)));
            delete parentNode.MatchType;
        }
        $v_0 = parentNode.MatchValue;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$n_1 = ($v_0);
            delete parentNode.MatchValue;
        }
    }
}


Microsoft.SharePoint.Client.Search.Query.ReorderingRuleCollection = function Microsoft_SharePoint_Client_Search_Query_ReorderingRuleCollection(context, objectPath) {
    Microsoft.SharePoint.Client.Search.Query.ReorderingRuleCollection.initializeBase(this, [ context, objectPath ]);
}
Microsoft.SharePoint.Client.Search.Query.ReorderingRuleCollection.prototype = {
    
    itemAt: function Microsoft_SharePoint_Client_Search_Query_ReorderingRuleCollection$itemAt$in(index) {
        return this.getItemAtIndex(index);
    },
    
    get_item: function Microsoft_SharePoint_Client_Search_Query_ReorderingRuleCollection$get_item$in(index) {
        return this.getItemAtIndex(index);
    },
    
    get_childItemType: function Microsoft_SharePoint_Client_Search_Query_ReorderingRuleCollection$get_childItemType$in() {
        return Microsoft.SharePoint.Client.Search.Query.ReorderingRule;
    },
    
    add: function Microsoft_SharePoint_Client_Search_Query_ReorderingRuleCollection$add$in(matchType, matchValue, boost) {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'Add', [ matchType, matchValue, boost ]);
        $v_0.addQuery($v_1);
    },
    
    clear: function Microsoft_SharePoint_Client_Search_Query_ReorderingRuleCollection$clear$in() {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'Clear', null);
        $v_0.addQuery($v_1);
    }
}


Microsoft.SharePoint.Client.Search.Query.ResultTable = function Microsoft_SharePoint_Client_Search_Query_ResultTable() {
    Microsoft.SharePoint.Client.Search.Query.ResultTable.initializeBase(this);
}
Microsoft.SharePoint.Client.Search.Query.ResultTable.prototype = {
    $1F_1: null,
    $1H_1: null,
    $1_1: null,
    $F_1: null,
    $1M_1: null,
    $1N_1: null,
    $1O_1: null,
    $1P_1: null,
    $1Q_1: 0,
    $1W_1: null,
    $1X_1: 0,
    $1Y_1: 0,
    
    get_groupTemplateId: function Microsoft_SharePoint_Client_Search_Query_ResultTable$get_groupTemplateId$in() {
        return this.$1F_1;
    },
    
    get_itemTemplateId: function Microsoft_SharePoint_Client_Search_Query_ResultTable$get_itemTemplateId$in() {
        return this.$1H_1;
    },
    
    get_properties: function Microsoft_SharePoint_Client_Search_Query_ResultTable$get_properties$in() {
        return this.$1_1;
    },
    
    get_queryId: function Microsoft_SharePoint_Client_Search_Query_ResultTable$get_queryId$in() {
        return this.$F_1;
    },
    
    get_queryRuleId: function Microsoft_SharePoint_Client_Search_Query_ResultTable$get_queryRuleId$in() {
        return this.$1M_1;
    },
    
    get_resultRows: function Microsoft_SharePoint_Client_Search_Query_ResultTable$get_resultRows$in() {
        return this.$1N_1;
    },
    
    get_resultTitle: function Microsoft_SharePoint_Client_Search_Query_ResultTable$get_resultTitle$in() {
        return this.$1O_1;
    },
    
    get_resultTitleUrl: function Microsoft_SharePoint_Client_Search_Query_ResultTable$get_resultTitleUrl$in() {
        return this.$1P_1;
    },
    
    get_rowCount: function Microsoft_SharePoint_Client_Search_Query_ResultTable$get_rowCount$in() {
        return this.$1Q_1;
    },
    
    get_tableType: function Microsoft_SharePoint_Client_Search_Query_ResultTable$get_tableType$in() {
        return this.$1W_1;
    },
    
    get_totalRows: function Microsoft_SharePoint_Client_Search_Query_ResultTable$get_totalRows$in() {
        return this.$1X_1;
    },
    
    get_totalRowsIncludingDuplicates: function Microsoft_SharePoint_Client_Search_Query_ResultTable$get_totalRowsIncludingDuplicates$in() {
        return this.$1Y_1;
    },
    
    get_typeId: function Microsoft_SharePoint_Client_Search_Query_ResultTable$get_typeId$in() {
        return '{6780df59-1036-4912-829b-432354f22656}';
    },
    
    writeToXml: function Microsoft_SharePoint_Client_Search_Query_ResultTable$writeToXml$in(writer, serializationContext) {
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = [ 'GroupTemplateId', 'ItemTemplateId', 'Properties', 'QueryId', 'QueryRuleId', 'ResultRows', 'ResultTitle', 'ResultTitleUrl', 'RowCount', 'TableType', 'TotalRows', 'TotalRowsIncludingDuplicates' ];
        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    
    initPropertiesFromJson: function Microsoft_SharePoint_Client_Search_Query_ResultTable$initPropertiesFromJson$in(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.GroupTemplateId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1F_1 = ($v_0);
            delete parentNode.GroupTemplateId;
        }
        $v_0 = parentNode.ItemTemplateId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1H_1 = ($v_0);
            delete parentNode.ItemTemplateId;
        }
        $v_0 = parentNode.Properties;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1_1 = ((SP.DataConvert.fixupType(null, $v_0)));
            delete parentNode.Properties;
        }
        $v_0 = parentNode.QueryId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$F_1 = ($v_0);
            delete parentNode.QueryId;
        }
        $v_0 = parentNode.QueryRuleId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1M_1 = ($v_0);
            delete parentNode.QueryRuleId;
        }
        $v_0 = parentNode.ResultRows;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1N_1 = ((SP.DataConvert.fixupType(null, $v_0)));
            delete parentNode.ResultRows;
        }
        $v_0 = parentNode.ResultTitle;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1O_1 = ($v_0);
            delete parentNode.ResultTitle;
        }
        $v_0 = parentNode.ResultTitleUrl;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1P_1 = ($v_0);
            delete parentNode.ResultTitleUrl;
        }
        $v_0 = parentNode.RowCount;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1Q_1 = ($v_0);
            delete parentNode.RowCount;
        }
        $v_0 = parentNode.TableType;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1W_1 = ($v_0);
            delete parentNode.TableType;
        }
        $v_0 = parentNode.TotalRows;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1X_1 = ($v_0);
            delete parentNode.TotalRows;
        }
        $v_0 = parentNode.TotalRowsIncludingDuplicates;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1Y_1 = ($v_0);
            delete parentNode.TotalRowsIncludingDuplicates;
        }
    }
}


Microsoft.SharePoint.Client.Search.Query.ResultTableCollection = function Microsoft_SharePoint_Client_Search_Query_ResultTableCollection() {
    Microsoft.SharePoint.Client.Search.Query.ResultTableCollection.initializeBase(this);
}
Microsoft.SharePoint.Client.Search.Query.ResultTableCollection.prototype = {
    $b_2: 0,
    $1_2: null,
    $1L_2: null,
    $F_2: null,
    $1U_2: null,
    $1Z_2: null,
    
    add: function Microsoft_SharePoint_Client_Search_Query_ResultTableCollection$add$in(item) {
        this.addChild(item);
    },
    
    get_item: function Microsoft_SharePoint_Client_Search_Query_ResultTableCollection$get_item$in(index) {
        return this.getItemAtIndex(index);
    },
    
    get_elapsedTime: function Microsoft_SharePoint_Client_Search_Query_ResultTableCollection$get_elapsedTime$in() {
        return this.$b_2;
    },
    
    set_elapsedTime: function Microsoft_SharePoint_Client_Search_Query_ResultTableCollection$set_elapsedTime$in(value) {
        this.$b_2 = value;
        return value;
    },
    
    get_properties: function Microsoft_SharePoint_Client_Search_Query_ResultTableCollection$get_properties$in() {
        return this.$1_2;
    },
    
    get_queryErrors: function Microsoft_SharePoint_Client_Search_Query_ResultTableCollection$get_queryErrors$in() {
        return this.$1L_2;
    },
    
    get_queryId: function Microsoft_SharePoint_Client_Search_Query_ResultTableCollection$get_queryId$in() {
        return this.$F_2;
    },
    
    get_spellingSuggestion: function Microsoft_SharePoint_Client_Search_Query_ResultTableCollection$get_spellingSuggestion$in() {
        return this.$1U_2;
    },
    
    get_triggeredRules: function Microsoft_SharePoint_Client_Search_Query_ResultTableCollection$get_triggeredRules$in() {
        return this.$1Z_2;
    },
    
    get_typeId: function Microsoft_SharePoint_Client_Search_Query_ResultTableCollection$get_typeId$in() {
        return '{11f20d08-7f42-49c1-8c0c-8ee4c32b203e}';
    },
    
    get_childItemsName: function Microsoft_SharePoint_Client_Search_Query_ResultTableCollection$get_childItemsName$in() {
        return 'ResultTables';
    },
    
    writeToXml: function Microsoft_SharePoint_Client_Search_Query_ResultTableCollection$writeToXml$in(writer, serializationContext) {
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = [ 'ElapsedTime', 'Properties', 'QueryErrors', 'QueryId', 'SpellingSuggestion', 'TriggeredRules' ];
        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObjectCollection.prototype.writeToXml.call(this, writer, serializationContext);
    },
    
    initPropertiesFromJson: function Microsoft_SharePoint_Client_Search_Query_ResultTableCollection$initPropertiesFromJson$in(parentNode) {
        SP.ClientValueObjectCollection.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.ElapsedTime;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$b_2 = ($v_0);
            delete parentNode.ElapsedTime;
        }
        $v_0 = parentNode.Properties;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1_2 = ((SP.DataConvert.fixupType(null, $v_0)));
            delete parentNode.Properties;
        }
        $v_0 = parentNode.QueryErrors;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1L_2 = ((SP.DataConvert.fixupType(null, $v_0)));
            delete parentNode.QueryErrors;
        }
        $v_0 = parentNode.QueryId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$F_2 = ($v_0);
            delete parentNode.QueryId;
        }
        $v_0 = parentNode.SpellingSuggestion;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1U_2 = ($v_0);
            delete parentNode.SpellingSuggestion;
        }
        $v_0 = parentNode.TriggeredRules;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1Z_2 = ((SP.DataConvert.fixupType(null, $v_0)));
            delete parentNode.TriggeredRules;
        }
    }
}


Microsoft.SharePoint.Client.Search.Query.SearchExecutor = function Microsoft_SharePoint_Client_Search_Query_SearchExecutor(context) {
    Microsoft.SharePoint.Client.Search.Query.SearchExecutor.initializeBase(this, [ context, SP.ClientUtility.getOrCreateObjectPathForConstructor(context, '{8d2ac302-db2f-46fe-9015-872b35f15098}', arguments) ]);
}
Microsoft.SharePoint.Client.Search.Query.SearchExecutor.newObject = function Microsoft_SharePoint_Client_Search_Query_SearchExecutor$newObject$st(context) {
    return new Microsoft.SharePoint.Client.Search.Query.SearchExecutor(context, new SP.ObjectPathConstructor(context, '{8d2ac302-db2f-46fe-9015-872b35f15098}', null));
}
Microsoft.SharePoint.Client.Search.Query.SearchExecutor.prototype = {
    
    executeQuery: function Microsoft_SharePoint_Client_Search_Query_SearchExecutor$executeQuery$in(query) {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'ExecuteQuery', [ query ]);
        $v_0.addQuery($v_2);
        $v_1 = new SP.JsonObjectResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    },
    
    executeQueries: function Microsoft_SharePoint_Client_Search_Query_SearchExecutor$executeQueries$in(queryIds, queries, handleExceptions) {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'ExecuteQueries', [ queryIds, queries, handleExceptions ]);
        $v_0.addQuery($v_2);
        $v_1 = new SP.JsonObjectResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    },
    
    recordPageClick: function Microsoft_SharePoint_Client_Search_Query_SearchExecutor$recordPageClick$in(pageInfo, clickType, blockType, clickedResultId, subResultIndex, immediacySourceId, immediacyQueryString, immediacyTitle, immediacyUrl) {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'RecordPageClick', [ pageInfo, clickType, blockType, clickedResultId, subResultIndex, immediacySourceId, immediacyQueryString, immediacyTitle, immediacyUrl ]);
        $v_0.addQuery($v_1);
    },
    
    exportPopularQueries: function Microsoft_SharePoint_Client_Search_Query_SearchExecutor$exportPopularQueries$in(web, sourceId) {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'ExportPopularQueries', [ web, sourceId ]);
        $v_0.addQuery($v_2);
        $v_1 = new SP.JsonObjectResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    },
    
    getPromotedResults: function Microsoft_SharePoint_Client_Search_Query_SearchExecutor$getPromotedResults$in(siteCollectionLevel, offset, numberOfRules) {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'GetPromotedResults', [ siteCollectionLevel, offset, numberOfRules ]);
        $v_0.addQuery($v_2);
        $v_1 = new SP.JsonObjectResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    },
    
    getQueryConfiguration: function Microsoft_SharePoint_Client_Search_Query_SearchExecutor$getQueryConfiguration$in(callLocalSearchFarmsOnly) {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'GetQueryConfiguration', [ callLocalSearchFarmsOnly ]);
        $v_0.addQuery($v_2);
        $v_1 = new SP.JsonObjectResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    }
}


Microsoft.SharePoint.Client.Search.Query.Sort = function Microsoft_SharePoint_Client_Search_Query_Sort() {
    Microsoft.SharePoint.Client.Search.Query.Sort.initializeBase(this);
}
Microsoft.SharePoint.Client.Search.Query.Sort.prototype = {
    $Z_1: 0,
    $q_1: null,
    
    get_direction: function Microsoft_SharePoint_Client_Search_Query_Sort$get_direction$in() {
        return this.$Z_1;
    },
    
    set_direction: function Microsoft_SharePoint_Client_Search_Query_Sort$set_direction$in(value) {
        this.$Z_1 = value;
        return value;
    },
    
    get_property: function Microsoft_SharePoint_Client_Search_Query_Sort$get_property$in() {
        return this.$q_1;
    },
    
    set_property: function Microsoft_SharePoint_Client_Search_Query_Sort$set_property$in(value) {
        this.$q_1 = value;
        return value;
    },
    
    get_typeId: function Microsoft_SharePoint_Client_Search_Query_Sort$get_typeId$in() {
        return '{2cd54ef7-c2b3-4405-bce3-ec521d35a7eb}';
    },
    
    writeToXml: function Microsoft_SharePoint_Client_Search_Query_Sort$writeToXml$in(writer, serializationContext) {
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = [ 'Direction', 'Property' ];
        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    
    initPropertiesFromJson: function Microsoft_SharePoint_Client_Search_Query_Sort$initPropertiesFromJson$in(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.Direction;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$Z_1 = ((SP.DataConvert.fixupType(null, $v_0)));
            delete parentNode.Direction;
        }
        $v_0 = parentNode.Property;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$q_1 = ($v_0);
            delete parentNode.Property;
        }
    }
}


Microsoft.SharePoint.Client.Search.Query.SortCollection = function Microsoft_SharePoint_Client_Search_Query_SortCollection(context, objectPath) {
    Microsoft.SharePoint.Client.Search.Query.SortCollection.initializeBase(this, [ context, objectPath ]);
}
Microsoft.SharePoint.Client.Search.Query.SortCollection.prototype = {
    
    itemAt: function Microsoft_SharePoint_Client_Search_Query_SortCollection$itemAt$in(index) {
        return this.getItemAtIndex(index);
    },
    
    get_item: function Microsoft_SharePoint_Client_Search_Query_SortCollection$get_item$in(index) {
        return this.getItemAtIndex(index);
    },
    
    get_childItemType: function Microsoft_SharePoint_Client_Search_Query_SortCollection$get_childItemType$in() {
        return Microsoft.SharePoint.Client.Search.Query.Sort;
    },
    
    add: function Microsoft_SharePoint_Client_Search_Query_SortCollection$add$in(strProperty, direction) {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'Add', [ strProperty, direction ]);
        $v_0.addQuery($v_1);
    },
    
    clear: function Microsoft_SharePoint_Client_Search_Query_SortCollection$clear$in() {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'Clear', null);
        $v_0.addQuery($v_1);
    }
}


Microsoft.SharePoint.Client.Search.Query.StringCollection = function Microsoft_SharePoint_Client_Search_Query_StringCollection(context) {
    Microsoft.SharePoint.Client.Search.Query.StringCollection.initializeBase(this, [ context, SP.ClientUtility.getOrCreateObjectPathForConstructor(context, '{17c6c8ba-c570-4db1-993a-fbacf4e4ef07}', arguments) ]);
}
Microsoft.SharePoint.Client.Search.Query.StringCollection.newObject = function Microsoft_SharePoint_Client_Search_Query_StringCollection$newObject$st(context) {
    return new Microsoft.SharePoint.Client.Search.Query.StringCollection(context, new SP.ObjectPathConstructor(context, '{17c6c8ba-c570-4db1-993a-fbacf4e4ef07}', null));
}
Microsoft.SharePoint.Client.Search.Query.StringCollection.prototype = {
    
    itemAt: function Microsoft_SharePoint_Client_Search_Query_StringCollection$itemAt$in(index) {
        return this.getItemAtIndex(index);
    },
    
    get_item: function Microsoft_SharePoint_Client_Search_Query_StringCollection$get_item$in(index) {
        return this.getItemAtIndex(index);
    },
    
    get_childItemType: function Microsoft_SharePoint_Client_Search_Query_StringCollection$get_childItemType$in() {
        return String;
    },
    
    add: function Microsoft_SharePoint_Client_Search_Query_StringCollection$add$in(property) {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'Add', [ property ]);
        $v_0.addQuery($v_1);
    },
    
    clear: function Microsoft_SharePoint_Client_Search_Query_StringCollection$clear$in() {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'Clear', null);
        $v_0.addQuery($v_1);
    }
}


Type.registerNamespace('Microsoft.Office.Server.Search.lib.OM.SearchSubscriptionSettings');

Microsoft.Office.Server.Search.lib.OM.SearchSubscriptionSettings.SearchTenantSettings = function Microsoft_Office_Server_Search_lib_OM_SearchSubscriptionSettings_SearchTenantSettings(context, objectPath) {
    Microsoft.Office.Server.Search.lib.OM.SearchSubscriptionSettings.SearchTenantSettings.initializeBase(this, [ context, objectPath ]);
}


Microsoft.Office.Server.Search.lib.OM.SearchSubscriptionSettings.TenantClassification = function Microsoft_Office_Server_Search_lib_OM_SearchSubscriptionSettings_TenantClassification(context, objectPath) {
    Microsoft.Office.Server.Search.lib.OM.SearchSubscriptionSettings.TenantClassification.initializeBase(this, [ context, objectPath ]);
}


Microsoft.Office.Server.Search.lib.OM.SearchSubscriptionSettings.TenantRoutingSettings = function Microsoft_Office_Server_Search_lib_OM_SearchSubscriptionSettings_TenantRoutingSettings(context, objectPath) {
    Microsoft.Office.Server.Search.lib.OM.SearchSubscriptionSettings.TenantRoutingSettings.initializeBase(this, [ context, objectPath ]);
}


Type.registerNamespace('Microsoft.Office.Server.Search.REST');

Microsoft.Office.Server.Search.REST.DrainingState = function() {}
Microsoft.Office.Server.Search.REST.DrainingState.prototype = {
    none: 0, 
    privateOneDrive: 1, 
    publicOneDrive: 2
}
Microsoft.Office.Server.Search.REST.DrainingState.registerEnum('Microsoft.Office.Server.Search.REST.DrainingState', false);


Microsoft.Office.Server.Search.REST.QueryState = function() {}
Microsoft.Office.Server.Search.REST.QueryState.prototype = {
    sharePointOnly: 0, 
    oneDriveWeb: 1
}
Microsoft.Office.Server.Search.REST.QueryState.registerEnum('Microsoft.Office.Server.Search.REST.QueryState', false);


Microsoft.Office.Server.Search.REST.ContextCondition = function Microsoft_Office_Server_Search_REST_ContextCondition() {
    Microsoft.Office.Server.Search.REST.ContextCondition.initializeBase(this);
}
Microsoft.Office.Server.Search.REST.ContextCondition.prototype = {
    $U_1: null,
    $13_1: null,
    
    get_contextConditionType: function Microsoft_Office_Server_Search_REST_ContextCondition$get_contextConditionType$in() {
        return this.$U_1;
    },
    
    set_contextConditionType: function Microsoft_Office_Server_Search_REST_ContextCondition$set_contextConditionType$in(value) {
        this.$U_1 = value;
        return value;
    },
    
    get_sourceId: function Microsoft_Office_Server_Search_REST_ContextCondition$get_sourceId$in() {
        return this.$13_1;
    },
    
    set_sourceId: function Microsoft_Office_Server_Search_REST_ContextCondition$set_sourceId$in(value) {
        this.$13_1 = value;
        return value;
    },
    
    get_typeId: function Microsoft_Office_Server_Search_REST_ContextCondition$get_typeId$in() {
        return '{d1d5434c-02e4-4e69-81cd-3f4e1a07937d}';
    },
    
    writeToXml: function Microsoft_Office_Server_Search_REST_ContextCondition$writeToXml$in(writer, serializationContext) {
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = [ 'ContextConditionType', 'SourceId' ];
        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    
    initPropertiesFromJson: function Microsoft_Office_Server_Search_REST_ContextCondition$initPropertiesFromJson$in(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.ContextConditionType;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$U_1 = ($v_0);
            delete parentNode.ContextConditionType;
        }
        $v_0 = parentNode.SourceId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$13_1 = ($v_0);
            delete parentNode.SourceId;
        }
    }
}


Microsoft.Office.Server.Search.REST.ExpandedQueryParameters = function Microsoft_Office_Server_Search_REST_ExpandedQueryParameters() {
    Microsoft.Office.Server.Search.REST.ExpandedQueryParameters.initializeBase(this);
}
Microsoft.Office.Server.Search.REST.ExpandedQueryParameters.prototype = {
    $1_1: null,
    
    get_properties: function Microsoft_Office_Server_Search_REST_ExpandedQueryParameters$get_properties$in() {
        return this.$1_1;
    },
    
    set_properties: function Microsoft_Office_Server_Search_REST_ExpandedQueryParameters$set_properties$in(value) {
        this.$1_1 = value;
        return value;
    },
    
    get_typeId: function Microsoft_Office_Server_Search_REST_ExpandedQueryParameters$get_typeId$in() {
        return '{22ccde11-b3ce-403a-8c87-28ef2f5fd3e9}';
    },
    
    writeToXml: function Microsoft_Office_Server_Search_REST_ExpandedQueryParameters$writeToXml$in(writer, serializationContext) {
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = [ 'Properties' ];
        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    
    initPropertiesFromJson: function Microsoft_Office_Server_Search_REST_ExpandedQueryParameters$initPropertiesFromJson$in(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.Properties;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1_1 = ((SP.DataConvert.fixupType(null, $v_0)));
            delete parentNode.Properties;
        }
    }
}


Microsoft.Office.Server.Search.REST.PromotedResultQueryRule = function Microsoft_Office_Server_Search_REST_PromotedResultQueryRule() {
    Microsoft.Office.Server.Search.REST.PromotedResultQueryRule.initializeBase(this);
}
Microsoft.Office.Server.Search.REST.PromotedResultQueryRule.prototype = {
    $T_1: null,
    $I_1: null,
    $X_1: null,
    $a_1: null,
    $c_1: null,
    $h_1: false,
    $k_1: null,
    $L_1: null,
    $M_1: null,
    $y_1: null,
    $17_1: null,
    
    get_contact: function Microsoft_Office_Server_Search_REST_PromotedResultQueryRule$get_contact$in() {
        return this.$T_1;
    },
    
    set_contact: function Microsoft_Office_Server_Search_REST_PromotedResultQueryRule$set_contact$in(value) {
        this.$T_1 = value;
        return value;
    },
    
    get_contextConditions: function Microsoft_Office_Server_Search_REST_PromotedResultQueryRule$get_contextConditions$in() {
        return this.$I_1;
    },
    
    set_contextConditions: function Microsoft_Office_Server_Search_REST_PromotedResultQueryRule$set_contextConditions$in(value) {
        this.$I_1 = value;
        return value;
    },
    
    get_creationDate: function Microsoft_Office_Server_Search_REST_PromotedResultQueryRule$get_creationDate$in() {
        return this.$X_1;
    },
    
    set_creationDate: function Microsoft_Office_Server_Search_REST_PromotedResultQueryRule$set_creationDate$in(value) {
        this.$X_1 = value;
        return value;
    },
    
    get_displayName: function Microsoft_Office_Server_Search_REST_PromotedResultQueryRule$get_displayName$in() {
        return this.$a_1;
    },
    
    set_displayName: function Microsoft_Office_Server_Search_REST_PromotedResultQueryRule$set_displayName$in(value) {
        this.$a_1 = value;
        return value;
    },
    
    get_endDate: function Microsoft_Office_Server_Search_REST_PromotedResultQueryRule$get_endDate$in() {
        return this.$c_1;
    },
    
    set_endDate: function Microsoft_Office_Server_Search_REST_PromotedResultQueryRule$set_endDate$in(value) {
        this.$c_1 = value;
        return value;
    },
    
    get_isPromotedResultsOnly: function Microsoft_Office_Server_Search_REST_PromotedResultQueryRule$get_isPromotedResultsOnly$in() {
        return this.$h_1;
    },
    
    set_isPromotedResultsOnly: function Microsoft_Office_Server_Search_REST_PromotedResultQueryRule$set_isPromotedResultsOnly$in(value) {
        this.$h_1 = value;
        return value;
    },
    
    get_lastModifiedDate: function Microsoft_Office_Server_Search_REST_PromotedResultQueryRule$get_lastModifiedDate$in() {
        return this.$k_1;
    },
    
    set_lastModifiedDate: function Microsoft_Office_Server_Search_REST_PromotedResultQueryRule$set_lastModifiedDate$in(value) {
        this.$k_1 = value;
        return value;
    },
    
    get_promotedResults: function Microsoft_Office_Server_Search_REST_PromotedResultQueryRule$get_promotedResults$in() {
        return this.$L_1;
    },
    
    set_promotedResults: function Microsoft_Office_Server_Search_REST_PromotedResultQueryRule$set_promotedResults$in(value) {
        this.$L_1 = value;
        return value;
    },
    
    get_queryConditions: function Microsoft_Office_Server_Search_REST_PromotedResultQueryRule$get_queryConditions$in() {
        return this.$M_1;
    },
    
    set_queryConditions: function Microsoft_Office_Server_Search_REST_PromotedResultQueryRule$set_queryConditions$in(value) {
        this.$M_1 = value;
        return value;
    },
    
    get_reviewDate: function Microsoft_Office_Server_Search_REST_PromotedResultQueryRule$get_reviewDate$in() {
        return this.$y_1;
    },
    
    set_reviewDate: function Microsoft_Office_Server_Search_REST_PromotedResultQueryRule$set_reviewDate$in(value) {
        this.$y_1 = value;
        return value;
    },
    
    get_startDate: function Microsoft_Office_Server_Search_REST_PromotedResultQueryRule$get_startDate$in() {
        return this.$17_1;
    },
    
    set_startDate: function Microsoft_Office_Server_Search_REST_PromotedResultQueryRule$set_startDate$in(value) {
        this.$17_1 = value;
        return value;
    },
    
    get_typeId: function Microsoft_Office_Server_Search_REST_PromotedResultQueryRule$get_typeId$in() {
        return '{3d66dac4-a5ad-4b67-812b-937c59223204}';
    },
    
    writeToXml: function Microsoft_Office_Server_Search_REST_PromotedResultQueryRule$writeToXml$in(writer, serializationContext) {
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = [ 'Contact', 'ContextConditions', 'CreationDate', 'DisplayName', 'EndDate', 'IsPromotedResultsOnly', 'LastModifiedDate', 'PromotedResults', 'QueryConditions', 'ReviewDate', 'StartDate' ];
        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    
    initPropertiesFromJson: function Microsoft_Office_Server_Search_REST_PromotedResultQueryRule$initPropertiesFromJson$in(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.Contact;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$T_1 = ($v_0);
            delete parentNode.Contact;
        }
        $v_0 = parentNode.ContextConditions;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$I_1 = (([]));
            SP.DataConvert.populateArray(null, ((this.$I_1)), ($v_0));
            delete parentNode.ContextConditions;
        }
        $v_0 = parentNode.CreationDate;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$X_1 = ($v_0);
            delete parentNode.CreationDate;
        }
        $v_0 = parentNode.DisplayName;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$a_1 = ($v_0);
            delete parentNode.DisplayName;
        }
        $v_0 = parentNode.EndDate;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$c_1 = ($v_0);
            delete parentNode.EndDate;
        }
        $v_0 = parentNode.IsPromotedResultsOnly;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$h_1 = ($v_0);
            delete parentNode.IsPromotedResultsOnly;
        }
        $v_0 = parentNode.LastModifiedDate;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$k_1 = ($v_0);
            delete parentNode.LastModifiedDate;
        }
        $v_0 = parentNode.PromotedResults;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$L_1 = (([]));
            SP.DataConvert.populateArray(null, ((this.$L_1)), ($v_0));
            delete parentNode.PromotedResults;
        }
        $v_0 = parentNode.QueryConditions;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$M_1 = (([]));
            SP.DataConvert.populateArray(null, ((this.$M_1)), ($v_0));
            delete parentNode.QueryConditions;
        }
        $v_0 = parentNode.ReviewDate;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$y_1 = ($v_0);
            delete parentNode.ReviewDate;
        }
        $v_0 = parentNode.StartDate;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$17_1 = ($v_0);
            delete parentNode.StartDate;
        }
    }
}


Microsoft.Office.Server.Search.REST.PromotedResults = function Microsoft_Office_Server_Search_REST_PromotedResults() {
    Microsoft.Office.Server.Search.REST.PromotedResults.initializeBase(this);
}
Microsoft.Office.Server.Search.REST.PromotedResults.prototype = {
    $Y_1: null,
    $i_1: false,
    $l_1: null,
    $B_1: null,
    $C_1: null,
    
    get_description: function Microsoft_Office_Server_Search_REST_PromotedResults$get_description$in() {
        return this.$Y_1;
    },
    
    set_description: function Microsoft_Office_Server_Search_REST_PromotedResults$set_description$in(value) {
        this.$Y_1 = value;
        return value;
    },
    
    get_isVisual: function Microsoft_Office_Server_Search_REST_PromotedResults$get_isVisual$in() {
        return this.$i_1;
    },
    
    set_isVisual: function Microsoft_Office_Server_Search_REST_PromotedResults$set_isVisual$in(value) {
        this.$i_1 = value;
        return value;
    },
    
    get_lastModifiedTime: function Microsoft_Office_Server_Search_REST_PromotedResults$get_lastModifiedTime$in() {
        return this.$l_1;
    },
    
    set_lastModifiedTime: function Microsoft_Office_Server_Search_REST_PromotedResults$set_lastModifiedTime$in(value) {
        this.$l_1 = value;
        return value;
    },
    
    get_title: function Microsoft_Office_Server_Search_REST_PromotedResults$get_title$in() {
        return this.$B_1;
    },
    
    set_title: function Microsoft_Office_Server_Search_REST_PromotedResults$set_title$in(value) {
        this.$B_1 = value;
        return value;
    },
    
    get_url: function Microsoft_Office_Server_Search_REST_PromotedResults$get_url$in() {
        return this.$C_1;
    },
    
    set_url: function Microsoft_Office_Server_Search_REST_PromotedResults$set_url$in(value) {
        this.$C_1 = value;
        return value;
    },
    
    get_typeId: function Microsoft_Office_Server_Search_REST_PromotedResults$get_typeId$in() {
        return '{eb8e9d33-5adf-40dc-883a-e4e862070e71}';
    },
    
    writeToXml: function Microsoft_Office_Server_Search_REST_PromotedResults$writeToXml$in(writer, serializationContext) {
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = [ 'Description', 'IsVisual', 'LastModifiedTime', 'Title', 'Url' ];
        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    
    initPropertiesFromJson: function Microsoft_Office_Server_Search_REST_PromotedResults$initPropertiesFromJson$in(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.Description;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$Y_1 = ($v_0);
            delete parentNode.Description;
        }
        $v_0 = parentNode.IsVisual;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$i_1 = ($v_0);
            delete parentNode.IsVisual;
        }
        $v_0 = parentNode.LastModifiedTime;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$l_1 = ($v_0);
            delete parentNode.LastModifiedTime;
        }
        $v_0 = parentNode.Title;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$B_1 = ($v_0);
            delete parentNode.Title;
        }
        $v_0 = parentNode.Url;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$C_1 = ($v_0);
            delete parentNode.Url;
        }
    }
}


Microsoft.Office.Server.Search.REST.PromotedResultsOperationsResult = function Microsoft_Office_Server_Search_REST_PromotedResultsOperationsResult() {
    Microsoft.Office.Server.Search.REST.PromotedResultsOperationsResult.initializeBase(this);
}
Microsoft.Office.Server.Search.REST.PromotedResultsOperationsResult.prototype = {
    $N_1: null,
    $z_1: null,
    
    get_result: function Microsoft_Office_Server_Search_REST_PromotedResultsOperationsResult$get_result$in() {
        return this.$N_1;
    },
    
    set_result: function Microsoft_Office_Server_Search_REST_PromotedResultsOperationsResult$set_result$in(value) {
        this.$N_1 = value;
        return value;
    },
    
    get_searchObjectOwner: function Microsoft_Office_Server_Search_REST_PromotedResultsOperationsResult$get_searchObjectOwner$in() {
        return this.$z_1;
    },
    
    set_searchObjectOwner: function Microsoft_Office_Server_Search_REST_PromotedResultsOperationsResult$set_searchObjectOwner$in(value) {
        this.$z_1 = value;
        return value;
    },
    
    get_typeId: function Microsoft_Office_Server_Search_REST_PromotedResultsOperationsResult$get_typeId$in() {
        return '{79c14aea-3c92-4181-932b-a4db9d0ff597}';
    },
    
    writeToXml: function Microsoft_Office_Server_Search_REST_PromotedResultsOperationsResult$writeToXml$in(writer, serializationContext) {
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = [ 'Result', 'SearchObjectOwner' ];
        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    
    initPropertiesFromJson: function Microsoft_Office_Server_Search_REST_PromotedResultsOperationsResult$initPropertiesFromJson$in(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.Result;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$N_1 = (([]));
            SP.DataConvert.populateArray(null, ((this.$N_1)), ($v_0));
            delete parentNode.Result;
        }
        $v_0 = parentNode.SearchObjectOwner;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$z_1 = ((SP.DataConvert.fixupType(null, $v_0)));
            delete parentNode.SearchObjectOwner;
        }
    }
}


Microsoft.Office.Server.Search.REST.QueryCondition = function Microsoft_Office_Server_Search_REST_QueryCondition() {
    Microsoft.Office.Server.Search.REST.QueryCondition.initializeBase(this);
}
Microsoft.Office.Server.Search.REST.QueryCondition.prototype = {
    $4_1: 0,
    $m_1: null,
    $r_1: null,
    $18_1: null,
    $1A_1: null,
    
    get_LCID: function Microsoft_Office_Server_Search_REST_QueryCondition$get_LCID$in() {
        return this.$4_1;
    },
    
    set_LCID: function Microsoft_Office_Server_Search_REST_QueryCondition$set_LCID$in(value) {
        this.$4_1 = value;
        return value;
    },
    
    get_matchingOptions: function Microsoft_Office_Server_Search_REST_QueryCondition$get_matchingOptions$in() {
        return this.$m_1;
    },
    
    set_matchingOptions: function Microsoft_Office_Server_Search_REST_QueryCondition$set_matchingOptions$in(value) {
        this.$m_1 = value;
        return value;
    },
    
    get_queryConditionType: function Microsoft_Office_Server_Search_REST_QueryCondition$get_queryConditionType$in() {
        return this.$r_1;
    },
    
    set_queryConditionType: function Microsoft_Office_Server_Search_REST_QueryCondition$set_queryConditionType$in(value) {
        this.$r_1 = value;
        return value;
    },
    
    get_subjectTermsOrigin: function Microsoft_Office_Server_Search_REST_QueryCondition$get_subjectTermsOrigin$in() {
        return this.$18_1;
    },
    
    set_subjectTermsOrigin: function Microsoft_Office_Server_Search_REST_QueryCondition$set_subjectTermsOrigin$in(value) {
        this.$18_1 = value;
        return value;
    },
    
    get_terms: function Microsoft_Office_Server_Search_REST_QueryCondition$get_terms$in() {
        return this.$1A_1;
    },
    
    set_terms: function Microsoft_Office_Server_Search_REST_QueryCondition$set_terms$in(value) {
        this.$1A_1 = value;
        return value;
    },
    
    get_typeId: function Microsoft_Office_Server_Search_REST_QueryCondition$get_typeId$in() {
        return '{ff443aec-c8ee-49ea-8e57-4678d78000a5}';
    },
    
    writeToXml: function Microsoft_Office_Server_Search_REST_QueryCondition$writeToXml$in(writer, serializationContext) {
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = [ 'LCID', 'MatchingOptions', 'QueryConditionType', 'SubjectTermsOrigin', 'Terms' ];
        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    
    initPropertiesFromJson: function Microsoft_Office_Server_Search_REST_QueryCondition$initPropertiesFromJson$in(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.LCID;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$4_1 = ($v_0);
            delete parentNode.LCID;
        }
        $v_0 = parentNode.MatchingOptions;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$m_1 = ($v_0);
            delete parentNode.MatchingOptions;
        }
        $v_0 = parentNode.QueryConditionType;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$r_1 = ($v_0);
            delete parentNode.QueryConditionType;
        }
        $v_0 = parentNode.SubjectTermsOrigin;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$18_1 = ($v_0);
            delete parentNode.SubjectTermsOrigin;
        }
        $v_0 = parentNode.Terms;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1A_1 = ((SP.DataConvert.fixupType(null, $v_0)));
            delete parentNode.Terms;
        }
    }
}


Microsoft.Office.Server.Search.REST.QueryConfiguration = function Microsoft_Office_Server_Search_REST_QueryConfiguration() {
    Microsoft.Office.Server.Search.REST.QueryConfiguration.initializeBase(this);
}
Microsoft.Office.Server.Search.REST.QueryConfiguration.prototype = {
    $8_1: null,
    $u_1: null,
    $v_1: null,
    $3_1: null,
    
    get_queryContext: function Microsoft_Office_Server_Search_REST_QueryConfiguration$get_queryContext$in() {
        return this.$8_1;
    },
    
    set_queryContext: function Microsoft_Office_Server_Search_REST_QueryConfiguration$set_queryContext$in(value) {
        this.$8_1 = value;
        return value;
    },
    
    get_queryParameters: function Microsoft_Office_Server_Search_REST_QueryConfiguration$get_queryParameters$in() {
        return this.$u_1;
    },
    
    set_queryParameters: function Microsoft_Office_Server_Search_REST_QueryConfiguration$set_queryParameters$in(value) {
        this.$u_1 = value;
        return value;
    },
    
    get_queryRoutingInfo: function Microsoft_Office_Server_Search_REST_QueryConfiguration$get_queryRoutingInfo$in() {
        return this.$v_1;
    },
    
    set_queryRoutingInfo: function Microsoft_Office_Server_Search_REST_QueryConfiguration$set_queryRoutingInfo$in(value) {
        this.$v_1 = value;
        return value;
    },
    
    get_searchEndpoints: function Microsoft_Office_Server_Search_REST_QueryConfiguration$get_searchEndpoints$in() {
        return this.$3_1;
    },
    
    set_searchEndpoints: function Microsoft_Office_Server_Search_REST_QueryConfiguration$set_searchEndpoints$in(value) {
        this.$3_1 = value;
        return value;
    },
    
    get_typeId: function Microsoft_Office_Server_Search_REST_QueryConfiguration$get_typeId$in() {
        return '{146af15d-376d-4e37-b8e5-0522f2b3fff8}';
    },
    
    writeToXml: function Microsoft_Office_Server_Search_REST_QueryConfiguration$writeToXml$in(writer, serializationContext) {
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = [ 'QueryContext', 'QueryParameters', 'QueryRoutingInfo', 'SearchEndpoints' ];
        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    
    initPropertiesFromJson: function Microsoft_Office_Server_Search_REST_QueryConfiguration$initPropertiesFromJson$in(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.QueryContext;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$8_1 = ((SP.DataConvert.fixupType(null, $v_0)));
            delete parentNode.QueryContext;
        }
        $v_0 = parentNode.QueryParameters;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$u_1 = ((SP.DataConvert.fixupType(null, $v_0)));
            delete parentNode.QueryParameters;
        }
        $v_0 = parentNode.QueryRoutingInfo;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$v_1 = ((SP.DataConvert.fixupType(null, $v_0)));
            delete parentNode.QueryRoutingInfo;
        }
        $v_0 = parentNode.SearchEndpoints;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$3_1 = ((SP.DataConvert.fixupType(null, $v_0)));
            delete parentNode.SearchEndpoints;
        }
    }
}


Microsoft.Office.Server.Search.REST.QueryContext = function Microsoft_Office_Server_Search_REST_QueryContext() {
    Microsoft.Office.Server.Search.REST.QueryContext.initializeBase(this);
}
Microsoft.Office.Server.Search.REST.QueryContext.prototype = {
    $p_1: null,
    $15_1: null,
    $16_1: null,
    
    get_portalUrl: function Microsoft_Office_Server_Search_REST_QueryContext$get_portalUrl$in() {
        return this.$p_1;
    },
    
    set_portalUrl: function Microsoft_Office_Server_Search_REST_QueryContext$set_portalUrl$in(value) {
        this.$p_1 = value;
        return value;
    },
    
    get_spSiteId: function Microsoft_Office_Server_Search_REST_QueryContext$get_spSiteId$in() {
        return this.$15_1;
    },
    
    set_spSiteId: function Microsoft_Office_Server_Search_REST_QueryContext$set_spSiteId$in(value) {
        this.$15_1 = value;
        return value;
    },
    
    get_spWebId: function Microsoft_Office_Server_Search_REST_QueryContext$get_spWebId$in() {
        return this.$16_1;
    },
    
    set_spWebId: function Microsoft_Office_Server_Search_REST_QueryContext$set_spWebId$in(value) {
        this.$16_1 = value;
        return value;
    },
    
    get_typeId: function Microsoft_Office_Server_Search_REST_QueryContext$get_typeId$in() {
        return '{98ab242f-d338-4d4d-9578-a4d6851873b4}';
    },
    
    writeToXml: function Microsoft_Office_Server_Search_REST_QueryContext$writeToXml$in(writer, serializationContext) {
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = [ 'PortalUrl', 'SpSiteId', 'SpWebId' ];
        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    
    initPropertiesFromJson: function Microsoft_Office_Server_Search_REST_QueryContext$initPropertiesFromJson$in(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.PortalUrl;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$p_1 = ((SP.DataConvert.fixupType(null, $v_0)));
            delete parentNode.PortalUrl;
        }
        $v_0 = parentNode.SpSiteId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$15_1 = ($v_0);
            delete parentNode.SpSiteId;
        }
        $v_0 = parentNode.SpWebId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$16_1 = ($v_0);
            delete parentNode.SpWebId;
        }
    }
}


Microsoft.Office.Server.Search.REST.QueryRoutingInfo = function Microsoft_Office_Server_Search_REST_QueryRoutingInfo() {
    Microsoft.Office.Server.Search.REST.QueryRoutingInfo.initializeBase(this);
}
Microsoft.Office.Server.Search.REST.QueryRoutingInfo.prototype = {
    $w_1: 0,
    $3_1: null,
    
    get_queryState: function Microsoft_Office_Server_Search_REST_QueryRoutingInfo$get_queryState$in() {
        return this.$w_1;
    },
    
    set_queryState: function Microsoft_Office_Server_Search_REST_QueryRoutingInfo$set_queryState$in(value) {
        this.$w_1 = value;
        return value;
    },
    
    get_searchEndpoints: function Microsoft_Office_Server_Search_REST_QueryRoutingInfo$get_searchEndpoints$in() {
        return this.$3_1;
    },
    
    set_searchEndpoints: function Microsoft_Office_Server_Search_REST_QueryRoutingInfo$set_searchEndpoints$in(value) {
        this.$3_1 = value;
        return value;
    },
    
    get_typeId: function Microsoft_Office_Server_Search_REST_QueryRoutingInfo$get_typeId$in() {
        return '{113e5e32-0e6f-4298-ab9e-df268086c2fd}';
    },
    
    writeToXml: function Microsoft_Office_Server_Search_REST_QueryRoutingInfo$writeToXml$in(writer, serializationContext) {
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = [ 'QueryState', 'SearchEndpoints' ];
        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    
    initPropertiesFromJson: function Microsoft_Office_Server_Search_REST_QueryRoutingInfo$initPropertiesFromJson$in(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.QueryState;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$w_1 = ((SP.DataConvert.fixupType(null, $v_0)));
            delete parentNode.QueryState;
        }
        $v_0 = parentNode.SearchEndpoints;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$3_1 = (([]));
            SP.DataConvert.populateArray(null, ((this.$3_1)), ($v_0));
            delete parentNode.SearchEndpoints;
        }
    }
}


Microsoft.Office.Server.Search.REST.SearchEndpoints = function Microsoft_Office_Server_Search_REST_SearchEndpoints() {
    Microsoft.Office.Server.Search.REST.SearchEndpoints.initializeBase(this);
}
Microsoft.Office.Server.Search.REST.SearchEndpoints.prototype = {
    $O_1: null,
    $P_1: null,
    $d_1: null,
    $8_1: null,
    $t_1: null,
    
    get_adminEndpoint: function Microsoft_Office_Server_Search_REST_SearchEndpoints$get_adminEndpoint$in() {
        return this.$O_1;
    },
    
    set_adminEndpoint: function Microsoft_Office_Server_Search_REST_SearchEndpoints$set_adminEndpoint$in(value) {
        this.$O_1 = value;
        return value;
    },
    
    get_afdEndpoint: function Microsoft_Office_Server_Search_REST_SearchEndpoints$get_afdEndpoint$in() {
        return this.$P_1;
    },
    
    set_afdEndpoint: function Microsoft_Office_Server_Search_REST_SearchEndpoints$set_afdEndpoint$in(value) {
        this.$P_1 = value;
        return value;
    },
    
    get_geolocation: function Microsoft_Office_Server_Search_REST_SearchEndpoints$get_geolocation$in() {
        return this.$d_1;
    },
    
    set_geolocation: function Microsoft_Office_Server_Search_REST_SearchEndpoints$set_geolocation$in(value) {
        this.$d_1 = value;
        return value;
    },
    
    get_queryContext: function Microsoft_Office_Server_Search_REST_SearchEndpoints$get_queryContext$in() {
        return this.$8_1;
    },
    
    set_queryContext: function Microsoft_Office_Server_Search_REST_SearchEndpoints$set_queryContext$in(value) {
        this.$8_1 = value;
        return value;
    },
    
    get_queryEndpoint: function Microsoft_Office_Server_Search_REST_SearchEndpoints$get_queryEndpoint$in() {
        return this.$t_1;
    },
    
    set_queryEndpoint: function Microsoft_Office_Server_Search_REST_SearchEndpoints$set_queryEndpoint$in(value) {
        this.$t_1 = value;
        return value;
    },
    
    get_typeId: function Microsoft_Office_Server_Search_REST_SearchEndpoints$get_typeId$in() {
        return '{06f786ef-6725-4225-9107-137c215291f0}';
    },
    
    writeToXml: function Microsoft_Office_Server_Search_REST_SearchEndpoints$writeToXml$in(writer, serializationContext) {
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = [ 'AdminEndpoint', 'AfdEndpoint', 'Geolocation', 'QueryContext', 'QueryEndpoint' ];
        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    
    initPropertiesFromJson: function Microsoft_Office_Server_Search_REST_SearchEndpoints$initPropertiesFromJson$in(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.AdminEndpoint;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$O_1 = ($v_0);
            delete parentNode.AdminEndpoint;
        }
        $v_0 = parentNode.AfdEndpoint;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$P_1 = ($v_0);
            delete parentNode.AfdEndpoint;
        }
        $v_0 = parentNode.Geolocation;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$d_1 = ($v_0);
            delete parentNode.Geolocation;
        }
        $v_0 = parentNode.QueryContext;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$8_1 = ((SP.DataConvert.fixupType(null, $v_0)));
            delete parentNode.QueryContext;
        }
        $v_0 = parentNode.QueryEndpoint;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$t_1 = ($v_0);
            delete parentNode.QueryEndpoint;
        }
    }
}


Microsoft.Office.Server.Search.REST.SearchObjectOwnerResult = function Microsoft_Office_Server_Search_REST_SearchObjectOwnerResult() {
    Microsoft.Office.Server.Search.REST.SearchObjectOwnerResult.initializeBase(this);
}
Microsoft.Office.Server.Search.REST.SearchObjectOwnerResult.prototype = {
    $10_1: null,
    $11_1: null,
    $19_1: null,
    
    get_siteCollectionId: function Microsoft_Office_Server_Search_REST_SearchObjectOwnerResult$get_siteCollectionId$in() {
        return this.$10_1;
    },
    
    set_siteCollectionId: function Microsoft_Office_Server_Search_REST_SearchObjectOwnerResult$set_siteCollectionId$in(value) {
        this.$10_1 = value;
        return value;
    },
    
    get_siteId: function Microsoft_Office_Server_Search_REST_SearchObjectOwnerResult$get_siteId$in() {
        return this.$11_1;
    },
    
    set_siteId: function Microsoft_Office_Server_Search_REST_SearchObjectOwnerResult$set_siteId$in(value) {
        this.$11_1 = value;
        return value;
    },
    
    get_tenantId: function Microsoft_Office_Server_Search_REST_SearchObjectOwnerResult$get_tenantId$in() {
        return this.$19_1;
    },
    
    set_tenantId: function Microsoft_Office_Server_Search_REST_SearchObjectOwnerResult$set_tenantId$in(value) {
        this.$19_1 = value;
        return value;
    },
    
    get_typeId: function Microsoft_Office_Server_Search_REST_SearchObjectOwnerResult$get_typeId$in() {
        return '{7f6dc0fc-c9bf-4835-9db2-07803bfd6cb6}';
    },
    
    writeToXml: function Microsoft_Office_Server_Search_REST_SearchObjectOwnerResult$writeToXml$in(writer, serializationContext) {
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = [ 'SiteCollectionId', 'SiteId', 'TenantId' ];
        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    
    initPropertiesFromJson: function Microsoft_Office_Server_Search_REST_SearchObjectOwnerResult$initPropertiesFromJson$in(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.SiteCollectionId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$10_1 = ($v_0);
            delete parentNode.SiteCollectionId;
        }
        $v_0 = parentNode.SiteId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$11_1 = ($v_0);
            delete parentNode.SiteId;
        }
        $v_0 = parentNode.TenantId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$19_1 = ($v_0);
            delete parentNode.TenantId;
        }
    }
}


Type.registerNamespace('Microsoft.Office.Server.Search.WebControls');

Microsoft.Office.Server.Search.WebControls.MessageLevel = function() {}
Microsoft.Office.Server.Search.WebControls.MessageLevel.prototype = {
    information: 0, 
    warning: 1, 
    error: 2
}
Microsoft.Office.Server.Search.WebControls.MessageLevel.registerEnum('Microsoft.Office.Server.Search.WebControls.MessageLevel', false);


Microsoft.Office.Server.Search.WebControls.ControlMessage = function Microsoft_Office_Server_Search_WebControls_ControlMessage() {
    Microsoft.Office.Server.Search.WebControls.ControlMessage.initializeBase(this);
}
Microsoft.Office.Server.Search.WebControls.ControlMessage.prototype = {
    $1C_1: 0,
    $1D_1: null,
    $1E_1: false,
    $1G_1: null,
    $1I_1: 0,
    $1J_1: null,
    $1K_1: null,
    $1R_1: null,
    $1S_1: false,
    $1T_1: false,
    $1V_1: null,
    $1a_1: null,
    
    get_code: function Microsoft_Office_Server_Search_WebControls_ControlMessage$get_code$in() {
        return this.$1C_1;
    },
    
    get_correlationID: function Microsoft_Office_Server_Search_WebControls_ControlMessage$get_correlationID$in() {
        return this.$1D_1;
    },
    
    get_encodeDetails: function Microsoft_Office_Server_Search_WebControls_ControlMessage$get_encodeDetails$in() {
        return this.$1E_1;
    },
    
    get_header: function Microsoft_Office_Server_Search_WebControls_ControlMessage$get_header$in() {
        return this.$1G_1;
    },
    
    get_level: function Microsoft_Office_Server_Search_WebControls_ControlMessage$get_level$in() {
        return this.$1I_1;
    },
    
    get_messageDetails: function Microsoft_Office_Server_Search_WebControls_ControlMessage$get_messageDetails$in() {
        return this.$1J_1;
    },
    
    get_messageDetailsForViewers: function Microsoft_Office_Server_Search_WebControls_ControlMessage$get_messageDetailsForViewers$in() {
        return this.$1K_1;
    },
    
    get_serverTypeId: function Microsoft_Office_Server_Search_WebControls_ControlMessage$get_serverTypeId$in() {
        return this.$1R_1;
    },
    
    get_showForViewerUsers: function Microsoft_Office_Server_Search_WebControls_ControlMessage$get_showForViewerUsers$in() {
        return this.$1S_1;
    },
    
    get_showInEditModeOnly: function Microsoft_Office_Server_Search_WebControls_ControlMessage$get_showInEditModeOnly$in() {
        return this.$1T_1;
    },
    
    get_stackTrace: function Microsoft_Office_Server_Search_WebControls_ControlMessage$get_stackTrace$in() {
        return this.$1V_1;
    },
    
    get_type: function Microsoft_Office_Server_Search_WebControls_ControlMessage$get_type$in() {
        return this.$1a_1;
    },
    
    get_typeId: function Microsoft_Office_Server_Search_WebControls_ControlMessage$get_typeId$in() {
        return '{d3dfef63-4d44-497d-b936-047135645ad7}';
    },
    
    writeToXml: function Microsoft_Office_Server_Search_WebControls_ControlMessage$writeToXml$in(writer, serializationContext) {
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = [ 'code', 'correlationID', 'encodeDetails', 'header', 'level', 'messageDetails', 'messageDetailsForViewers', 'serverTypeId', 'showForViewerUsers', 'showInEditModeOnly', 'stackTrace', 'type' ];
        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    
    initPropertiesFromJson: function Microsoft_Office_Server_Search_WebControls_ControlMessage$initPropertiesFromJson$in(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.code;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1C_1 = ($v_0);
            delete parentNode.code;
        }
        $v_0 = parentNode.correlationID;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1D_1 = ($v_0);
            delete parentNode.correlationID;
        }
        $v_0 = parentNode.encodeDetails;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1E_1 = ($v_0);
            delete parentNode.encodeDetails;
        }
        $v_0 = parentNode.header;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1G_1 = ($v_0);
            delete parentNode.header;
        }
        $v_0 = parentNode.level;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1I_1 = ((SP.DataConvert.fixupType(null, $v_0)));
            delete parentNode.level;
        }
        $v_0 = parentNode.messageDetails;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1J_1 = ($v_0);
            delete parentNode.messageDetails;
        }
        $v_0 = parentNode.messageDetailsForViewers;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1K_1 = ($v_0);
            delete parentNode.messageDetailsForViewers;
        }
        $v_0 = parentNode.serverTypeId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1R_1 = ($v_0);
            delete parentNode.serverTypeId;
        }
        $v_0 = parentNode.showForViewerUsers;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1S_1 = ($v_0);
            delete parentNode.showForViewerUsers;
        }
        $v_0 = parentNode.showInEditModeOnly;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1T_1 = ($v_0);
            delete parentNode.showInEditModeOnly;
        }
        $v_0 = parentNode.stackTrace;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1V_1 = ($v_0);
            delete parentNode.stackTrace;
        }
        $v_0 = parentNode.type;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1a_1 = ($v_0);
            delete parentNode.type;
        }
    }
}


Type.registerNamespace('Microsoft.SharePoint.Client.Search.Administration');

Microsoft.SharePoint.Client.Search.Administration.SearchObjectLevel = function() {}
Microsoft.SharePoint.Client.Search.Administration.SearchObjectLevel.prototype = {
    spWeb: 0, 
    spSite: 1, 
    spSiteSubscription: 2, 
    ssa: 3
}
Microsoft.SharePoint.Client.Search.Administration.SearchObjectLevel.registerEnum('Microsoft.SharePoint.Client.Search.Administration.SearchObjectLevel', false);


Microsoft.SharePoint.Client.Search.Administration.DocumentCrawlLog = function Microsoft_SharePoint_Client_Search_Administration_DocumentCrawlLog(context, site) {
    Microsoft.SharePoint.Client.Search.Administration.DocumentCrawlLog.initializeBase(this, [ context, SP.ClientUtility.getOrCreateObjectPathForConstructor(context, '{5c5cfd42-0712-4c00-ae49-23b33ba34ecc}', arguments) ]);
}
Microsoft.SharePoint.Client.Search.Administration.DocumentCrawlLog.newObject = function Microsoft_SharePoint_Client_Search_Administration_DocumentCrawlLog$newObject$st(context, site) {
    return new Microsoft.SharePoint.Client.Search.Administration.DocumentCrawlLog(context, new SP.ObjectPathConstructor(context, '{5c5cfd42-0712-4c00-ae49-23b33ba34ecc}', [ site ]));
}
Microsoft.SharePoint.Client.Search.Administration.DocumentCrawlLog.prototype = {
    
    getCrawledUrls: function Microsoft_SharePoint_Client_Search_Administration_DocumentCrawlLog$getCrawledUrls$in(getCountOnly, maxRows, queryString, isLike, contentSourceID, errorLevel, errorID, startDateTime, endDateTime) {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'GetCrawledUrls', [ getCountOnly, maxRows, queryString, isLike, contentSourceID, errorLevel, errorID, startDateTime, endDateTime ]);
        $v_0.addQuery($v_2);
        $v_1 = new SP.ClientResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    }
}


Microsoft.SharePoint.Client.Search.Administration.SearchObjectOwner = function Microsoft_SharePoint_Client_Search_Administration_SearchObjectOwner(context, lowestCurrentLevelToUse) {
    Microsoft.SharePoint.Client.Search.Administration.SearchObjectOwner.initializeBase(this, [ context, SP.ClientUtility.getOrCreateObjectPathForConstructor(context, '{e6834c69-54c1-4bfc-9805-4b88406c28bb}', arguments) ]);
}
Microsoft.SharePoint.Client.Search.Administration.SearchObjectOwner.newObject = function Microsoft_SharePoint_Client_Search_Administration_SearchObjectOwner$newObject$st(context, lowestCurrentLevelToUse) {
    return new Microsoft.SharePoint.Client.Search.Administration.SearchObjectOwner(context, new SP.ObjectPathConstructor(context, '{e6834c69-54c1-4bfc-9805-4b88406c28bb}', [ lowestCurrentLevelToUse ]));
}


Type.registerNamespace('Microsoft.SharePoint.Client.Search.ContentPush');

Microsoft.SharePoint.Client.Search.ContentPush.CertificateService = function Microsoft_SharePoint_Client_Search_ContentPush_CertificateService(context) {
    Microsoft.SharePoint.Client.Search.ContentPush.CertificateService.initializeBase(this, [ context, SP.ClientUtility.getOrCreateObjectPathForConstructor(context, '{b9e0db1d-0b4c-4010-9ea5-43e1bc7041d0}', arguments) ]);
}
Microsoft.SharePoint.Client.Search.ContentPush.CertificateService.newObject = function Microsoft_SharePoint_Client_Search_ContentPush_CertificateService$newObject$st(context) {
    return new Microsoft.SharePoint.Client.Search.ContentPush.CertificateService(context, new SP.ObjectPathConstructor(context, '{b9e0db1d-0b4c-4010-9ea5-43e1bc7041d0}', null));
}
Microsoft.SharePoint.Client.Search.ContentPush.CertificateService.prototype = {
    
    validContentEncryptionCertificates: function Microsoft_SharePoint_Client_Search_ContentPush_CertificateService$validContentEncryptionCertificates$in() {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'ValidContentEncryptionCertificates', null);
        $v_0.addQuery($v_2);
        $v_1 = (([]));
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    },
    
    certificateSettings: function Microsoft_SharePoint_Client_Search_ContentPush_CertificateService$certificateSettings$in() {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'CertificateSettings', null);
        $v_0.addQuery($v_2);
        $v_1 = new SP.ClientResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), new SP.ClientDictionaryResultHandler($v_1));
        return $v_1;
    }
}


Microsoft.SharePoint.Client.Search.ContentPush.PushTenantManager = function Microsoft_SharePoint_Client_Search_ContentPush_PushTenantManager(context) {
    Microsoft.SharePoint.Client.Search.ContentPush.PushTenantManager.initializeBase(this, [ context, SP.ClientUtility.getOrCreateObjectPathForConstructor(context, '{098ad99c-6f30-478b-9ea7-f8c3ab3f0083}', arguments) ]);
}
Microsoft.SharePoint.Client.Search.ContentPush.PushTenantManager.newObject = function Microsoft_SharePoint_Client_Search_ContentPush_PushTenantManager$newObject$st(context) {
    return new Microsoft.SharePoint.Client.Search.ContentPush.PushTenantManager(context, new SP.ObjectPathConstructor(context, '{098ad99c-6f30-478b-9ea7-f8c3ab3f0083}', null));
}
Microsoft.SharePoint.Client.Search.ContentPush.PushTenantManager.prototype = {
    
    preparePushTenant: function Microsoft_SharePoint_Client_Search_ContentPush_PushTenantManager$preparePushTenant$in() {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'PreparePushTenant', null);
        $v_0.addQuery($v_2);
        $v_1 = new SP.JsonObjectResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    },
    
    getPushServiceInfo: function Microsoft_SharePoint_Client_Search_ContentPush_PushTenantManager$getPushServiceInfo$in() {
        var $v_0 = this.get_context();
        var $v_1;
        $v_1 = new Microsoft.SharePoint.Client.Search.ContentPush.PushTenantServiceInfo($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetPushServiceInfo', null));
        return $v_1;
    },
    
    getTenantInfo: function Microsoft_SharePoint_Client_Search_ContentPush_PushTenantManager$getTenantInfo$in() {
        var $v_0 = this.get_context();
        var $v_1;
        $v_1 = new Microsoft.SharePoint.Client.Search.ContentPush.PushTenantServiceInfo($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetTenantInfo', null));
        return $v_1;
    },
    
    deleteAllCloudHybridSearchContent: function Microsoft_SharePoint_Client_Search_ContentPush_PushTenantManager$deleteAllCloudHybridSearchContent$in() {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'DeleteAllCloudHybridSearchContent', null);
        $v_0.addQuery($v_2);
        $v_1 = new SP.JsonObjectResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    }
}


Microsoft.SharePoint.Client.Search.ContentPush.PushTenantServiceInfo = function Microsoft_SharePoint_Client_Search_ContentPush_PushTenantServiceInfo(context, objectPath) {
    Microsoft.SharePoint.Client.Search.ContentPush.PushTenantServiceInfo.initializeBase(this, [ context, objectPath ]);
}
Microsoft.SharePoint.Client.Search.ContentPush.PushTenantServiceInfo.prototype = {
    
    get_authenticationRealm: function Microsoft_SharePoint_Client_Search_ContentPush_PushTenantServiceInfo$get_authenticationRealm$in() {
        this.checkUninitializedProperty('AuthenticationRealm');
        return (this.get_objectData().get_properties()['AuthenticationRealm']);
    },
    
    get_endpointAddress: function Microsoft_SharePoint_Client_Search_ContentPush_PushTenantServiceInfo$get_endpointAddress$in() {
        this.checkUninitializedProperty('EndpointAddress');
        return (this.get_objectData().get_properties()['EndpointAddress']);
    },
    
    get_serviceProperties: function Microsoft_SharePoint_Client_Search_ContentPush_PushTenantServiceInfo$get_serviceProperties$in() {
        this.checkUninitializedProperty('ServiceProperties');
        return (this.get_objectData().get_properties()['ServiceProperties']);
    },
    
    get_tenantId: function Microsoft_SharePoint_Client_Search_ContentPush_PushTenantServiceInfo$get_tenantId$in() {
        this.checkUninitializedProperty('TenantId');
        return (this.get_objectData().get_properties()['TenantId']);
    },
    
    get_validContentEncryptionCertificates: function Microsoft_SharePoint_Client_Search_ContentPush_PushTenantServiceInfo$get_validContentEncryptionCertificates$in() {
        this.checkUninitializedProperty('ValidContentEncryptionCertificates');
        return (this.get_objectData().get_properties()['ValidContentEncryptionCertificates']);
    },
    
    get_validUntil: function Microsoft_SharePoint_Client_Search_ContentPush_PushTenantServiceInfo$get_validUntil$in() {
        this.checkUninitializedProperty('ValidUntil');
        return (this.get_objectData().get_properties()['ValidUntil']);
    },
    
    initPropertiesFromJson: function Microsoft_SharePoint_Client_Search_ContentPush_PushTenantServiceInfo$initPropertiesFromJson$in(parentNode) {
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.AuthenticationRealm;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['AuthenticationRealm'] = ($v_0);
            delete parentNode.AuthenticationRealm;
        }
        $v_0 = parentNode.EndpointAddress;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['EndpointAddress'] = ($v_0);
            delete parentNode.EndpointAddress;
        }
        $v_0 = parentNode.ServiceProperties;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ServiceProperties'] = ((SP.DataConvert.fixupType(this.get_context(), $v_0)));
            delete parentNode.ServiceProperties;
        }
        $v_0 = parentNode.TenantId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['TenantId'] = ($v_0);
            delete parentNode.TenantId;
        }
        $v_0 = parentNode.ValidContentEncryptionCertificates;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ValidContentEncryptionCertificates'] = ((SP.DataConvert.fixupType(this.get_context(), $v_0)));
            delete parentNode.ValidContentEncryptionCertificates;
        }
        $v_0 = parentNode.ValidUntil;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ValidUntil'] = ($v_0);
            delete parentNode.ValidUntil;
        }
    }
}


Microsoft.SharePoint.Client.Search.ContentPush.PushTenantServiceInfoPropertyNames = function Microsoft_SharePoint_Client_Search_ContentPush_PushTenantServiceInfoPropertyNames() {
}


Type.registerNamespace('Microsoft.SharePoint.Client.Search.Portability');

Microsoft.SharePoint.Client.Search.Portability.SearchConfigurationPortability = function Microsoft_SharePoint_Client_Search_Portability_SearchConfigurationPortability(context) {
    Microsoft.SharePoint.Client.Search.Portability.SearchConfigurationPortability.initializeBase(this, [ context, SP.ClientUtility.getOrCreateObjectPathForConstructor(context, '{f44b2c90-ddc4-49c8-8d4d-4fb56dcc3247}', arguments) ]);
}
Microsoft.SharePoint.Client.Search.Portability.SearchConfigurationPortability.newObject = function Microsoft_SharePoint_Client_Search_Portability_SearchConfigurationPortability$newObject$st(context) {
    return new Microsoft.SharePoint.Client.Search.Portability.SearchConfigurationPortability(context, new SP.ObjectPathConstructor(context, '{f44b2c90-ddc4-49c8-8d4d-4fb56dcc3247}', null));
}
Microsoft.SharePoint.Client.Search.Portability.SearchConfigurationPortability.prototype = {
    
    get_importWarnings: function Microsoft_SharePoint_Client_Search_Portability_SearchConfigurationPortability$get_importWarnings$in() {
        this.checkUninitializedProperty('ImportWarnings');
        return (this.get_objectData().get_properties()['ImportWarnings']);
    },
    
    initPropertiesFromJson: function Microsoft_SharePoint_Client_Search_Portability_SearchConfigurationPortability$initPropertiesFromJson$in(parentNode) {
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.ImportWarnings;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ImportWarnings'] = ($v_0);
            delete parentNode.ImportWarnings;
        }
    },
    
    exportSearchConfiguration: function Microsoft_SharePoint_Client_Search_Portability_SearchConfigurationPortability$exportSearchConfiguration$in(owningScope) {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'ExportSearchConfiguration', [ owningScope ]);
        $v_0.addQuery($v_2);
        $v_1 = new SP.StringResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    },
    
    importSearchConfiguration: function Microsoft_SharePoint_Client_Search_Portability_SearchConfigurationPortability$importSearchConfiguration$in(owningScope, searchConfiguration) {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'ImportSearchConfiguration', [ owningScope, searchConfiguration ]);
        $v_0.addQuery($v_1);
    },
    
    deleteSearchConfiguration: function Microsoft_SharePoint_Client_Search_Portability_SearchConfigurationPortability$deleteSearchConfiguration$in(owningScope, searchConfiguration) {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'DeleteSearchConfiguration', [ owningScope, searchConfiguration ]);
        $v_0.addQuery($v_1);
    }
}


Microsoft.SharePoint.Client.Search.Portability.SearchConfigurationPortabilityPropertyNames = function Microsoft_SharePoint_Client_Search_Portability_SearchConfigurationPortabilityPropertyNames() {
}


Microsoft.SharePoint.Client.Search.Query.KeywordQueryProperties.registerClass('Microsoft.SharePoint.Client.Search.Query.KeywordQueryProperties', SP.ClientObject);
Microsoft.SharePoint.Client.Search.Query.QueryUtility.registerClass('Microsoft.SharePoint.Client.Search.Query.QueryUtility');
Microsoft.SharePoint.Client.Search.Query.Query.registerClass('Microsoft.SharePoint.Client.Search.Query.Query', SP.ClientObject);
Microsoft.SharePoint.Client.Search.Query.KeywordQuery.registerClass('Microsoft.SharePoint.Client.Search.Query.KeywordQuery', Microsoft.SharePoint.Client.Search.Query.Query);
Microsoft.SharePoint.Client.Search.Query.KeywordQueryPropertyNames.registerClass('Microsoft.SharePoint.Client.Search.Query.KeywordQueryPropertyNames');
Microsoft.SharePoint.Client.Search.Query.KeywordQueryObjectPropertyNames.registerClass('Microsoft.SharePoint.Client.Search.Query.KeywordQueryObjectPropertyNames');
Microsoft.SharePoint.Client.Search.Query.PersonalResultSuggestion.registerClass('Microsoft.SharePoint.Client.Search.Query.PersonalResultSuggestion', SP.ClientValueObject);
Microsoft.SharePoint.Client.Search.Query.PopularQuery.registerClass('Microsoft.SharePoint.Client.Search.Query.PopularQuery', SP.ClientValueObject);
Microsoft.SharePoint.Client.Search.Query.QueryPropertyNames.registerClass('Microsoft.SharePoint.Client.Search.Query.QueryPropertyNames');
Microsoft.SharePoint.Client.Search.Query.QueryObjectPropertyNames.registerClass('Microsoft.SharePoint.Client.Search.Query.QueryObjectPropertyNames');
Microsoft.SharePoint.Client.Search.Query.QueryAutoCompletion.registerClass('Microsoft.SharePoint.Client.Search.Query.QueryAutoCompletion', SP.ClientValueObject);
Microsoft.SharePoint.Client.Search.Query.QueryAutoCompletionMatch.registerClass('Microsoft.SharePoint.Client.Search.Query.QueryAutoCompletionMatch', SP.ClientValueObject);
Microsoft.SharePoint.Client.Search.Query.QueryAutoCompletionResults.registerClass('Microsoft.SharePoint.Client.Search.Query.QueryAutoCompletionResults', SP.ClientValueObject);
Microsoft.SharePoint.Client.Search.Query.QueryPersonalizationData.registerClass('Microsoft.SharePoint.Client.Search.Query.QueryPersonalizationData', SP.ClientObject);
Microsoft.SharePoint.Client.Search.Query.QueryPropertyValue.registerClass('Microsoft.SharePoint.Client.Search.Query.QueryPropertyValue', SP.ClientValueObject);
Microsoft.SharePoint.Client.Search.Query.QuerySuggestionQuery.registerClass('Microsoft.SharePoint.Client.Search.Query.QuerySuggestionQuery', SP.ClientValueObject);
Microsoft.SharePoint.Client.Search.Query.QuerySuggestionRange.registerClass('Microsoft.SharePoint.Client.Search.Query.QuerySuggestionRange', SP.ClientValueObject);
Microsoft.SharePoint.Client.Search.Query.QuerySuggestionResults.registerClass('Microsoft.SharePoint.Client.Search.Query.QuerySuggestionResults', SP.ClientValueObject);
Microsoft.SharePoint.Client.Search.Query.RankingLabeling.registerClass('Microsoft.SharePoint.Client.Search.Query.RankingLabeling', SP.ClientObject);
Microsoft.SharePoint.Client.Search.Query.ReorderingRule.registerClass('Microsoft.SharePoint.Client.Search.Query.ReorderingRule', SP.ClientValueObject);
Microsoft.SharePoint.Client.Search.Query.ReorderingRuleCollection.registerClass('Microsoft.SharePoint.Client.Search.Query.ReorderingRuleCollection', SP.ClientObjectCollection);
Microsoft.SharePoint.Client.Search.Query.ResultTable.registerClass('Microsoft.SharePoint.Client.Search.Query.ResultTable', SP.ClientValueObject);
Microsoft.SharePoint.Client.Search.Query.ResultTableCollection.registerClass('Microsoft.SharePoint.Client.Search.Query.ResultTableCollection', SP.ClientValueObjectCollection);
Microsoft.SharePoint.Client.Search.Query.SearchExecutor.registerClass('Microsoft.SharePoint.Client.Search.Query.SearchExecutor', SP.ClientObject);
Microsoft.SharePoint.Client.Search.Query.Sort.registerClass('Microsoft.SharePoint.Client.Search.Query.Sort', SP.ClientValueObject);
Microsoft.SharePoint.Client.Search.Query.SortCollection.registerClass('Microsoft.SharePoint.Client.Search.Query.SortCollection', SP.ClientObjectCollection);
Microsoft.SharePoint.Client.Search.Query.StringCollection.registerClass('Microsoft.SharePoint.Client.Search.Query.StringCollection', SP.ClientObjectCollection);
Microsoft.Office.Server.Search.lib.OM.SearchSubscriptionSettings.SearchTenantSettings.registerClass('Microsoft.Office.Server.Search.lib.OM.SearchSubscriptionSettings.SearchTenantSettings', SP.ClientObject);
Microsoft.Office.Server.Search.lib.OM.SearchSubscriptionSettings.TenantClassification.registerClass('Microsoft.Office.Server.Search.lib.OM.SearchSubscriptionSettings.TenantClassification', SP.ClientObject);
Microsoft.Office.Server.Search.lib.OM.SearchSubscriptionSettings.TenantRoutingSettings.registerClass('Microsoft.Office.Server.Search.lib.OM.SearchSubscriptionSettings.TenantRoutingSettings', SP.ClientObject);
Microsoft.Office.Server.Search.REST.ContextCondition.registerClass('Microsoft.Office.Server.Search.REST.ContextCondition', SP.ClientValueObject);
Microsoft.Office.Server.Search.REST.ExpandedQueryParameters.registerClass('Microsoft.Office.Server.Search.REST.ExpandedQueryParameters', SP.ClientValueObject);
Microsoft.Office.Server.Search.REST.PromotedResultQueryRule.registerClass('Microsoft.Office.Server.Search.REST.PromotedResultQueryRule', SP.ClientValueObject);
Microsoft.Office.Server.Search.REST.PromotedResults.registerClass('Microsoft.Office.Server.Search.REST.PromotedResults', SP.ClientValueObject);
Microsoft.Office.Server.Search.REST.PromotedResultsOperationsResult.registerClass('Microsoft.Office.Server.Search.REST.PromotedResultsOperationsResult', SP.ClientValueObject);
Microsoft.Office.Server.Search.REST.QueryCondition.registerClass('Microsoft.Office.Server.Search.REST.QueryCondition', SP.ClientValueObject);
Microsoft.Office.Server.Search.REST.QueryConfiguration.registerClass('Microsoft.Office.Server.Search.REST.QueryConfiguration', SP.ClientValueObject);
Microsoft.Office.Server.Search.REST.QueryContext.registerClass('Microsoft.Office.Server.Search.REST.QueryContext', SP.ClientValueObject);
Microsoft.Office.Server.Search.REST.QueryRoutingInfo.registerClass('Microsoft.Office.Server.Search.REST.QueryRoutingInfo', SP.ClientValueObject);
Microsoft.Office.Server.Search.REST.SearchEndpoints.registerClass('Microsoft.Office.Server.Search.REST.SearchEndpoints', SP.ClientValueObject);
Microsoft.Office.Server.Search.REST.SearchObjectOwnerResult.registerClass('Microsoft.Office.Server.Search.REST.SearchObjectOwnerResult', SP.ClientValueObject);
Microsoft.Office.Server.Search.WebControls.ControlMessage.registerClass('Microsoft.Office.Server.Search.WebControls.ControlMessage', SP.ClientValueObject);
Microsoft.SharePoint.Client.Search.Administration.DocumentCrawlLog.registerClass('Microsoft.SharePoint.Client.Search.Administration.DocumentCrawlLog', SP.ClientObject);
Microsoft.SharePoint.Client.Search.Administration.SearchObjectOwner.registerClass('Microsoft.SharePoint.Client.Search.Administration.SearchObjectOwner', SP.ClientObject);
Microsoft.SharePoint.Client.Search.ContentPush.CertificateService.registerClass('Microsoft.SharePoint.Client.Search.ContentPush.CertificateService', SP.ClientObject);
Microsoft.SharePoint.Client.Search.ContentPush.PushTenantManager.registerClass('Microsoft.SharePoint.Client.Search.ContentPush.PushTenantManager', SP.ClientObject);
Microsoft.SharePoint.Client.Search.ContentPush.PushTenantServiceInfo.registerClass('Microsoft.SharePoint.Client.Search.ContentPush.PushTenantServiceInfo', SP.ClientObject);
Microsoft.SharePoint.Client.Search.ContentPush.PushTenantServiceInfoPropertyNames.registerClass('Microsoft.SharePoint.Client.Search.ContentPush.PushTenantServiceInfoPropertyNames');
Microsoft.SharePoint.Client.Search.Portability.SearchConfigurationPortability.registerClass('Microsoft.SharePoint.Client.Search.Portability.SearchConfigurationPortability', SP.ClientObject);
Microsoft.SharePoint.Client.Search.Portability.SearchConfigurationPortabilityPropertyNames.registerClass('Microsoft.SharePoint.Client.Search.Portability.SearchConfigurationPortabilityPropertyNames');
Microsoft.SharePoint.Client.Search.Query.QueryUtility.$1b = [ null, String, Number, Boolean, Array ];
Microsoft.SharePoint.Client.Search.Query.KeywordQueryPropertyNames.collapseSpecification = 'CollapseSpecification';
Microsoft.SharePoint.Client.Search.Query.KeywordQueryPropertyNames.enableSorting = 'EnableSorting';
Microsoft.SharePoint.Client.Search.Query.KeywordQueryPropertyNames.hiddenConstraints = 'HiddenConstraints';
Microsoft.SharePoint.Client.Search.Query.KeywordQueryPropertyNames.olsQuerySession = 'OLSQuerySession';
Microsoft.SharePoint.Client.Search.Query.KeywordQueryPropertyNames.refiners = 'Refiners';
Microsoft.SharePoint.Client.Search.Query.KeywordQueryPropertyNames.timeZoneId = 'TimeZoneId';
Microsoft.SharePoint.Client.Search.Query.KeywordQueryPropertyNames.trimDuplicatesIncludeId = 'TrimDuplicatesIncludeId';
Microsoft.SharePoint.Client.Search.Query.KeywordQueryPropertyNames.useOLSQuery = 'UseOLSQuery';
Microsoft.SharePoint.Client.Search.Query.KeywordQueryObjectPropertyNames.properties = 'Properties';
Microsoft.SharePoint.Client.Search.Query.KeywordQueryObjectPropertyNames.refinementFilters = 'RefinementFilters';
Microsoft.SharePoint.Client.Search.Query.KeywordQueryObjectPropertyNames.reorderingRules = 'ReorderingRules';
Microsoft.SharePoint.Client.Search.Query.KeywordQueryObjectPropertyNames.selectProperties = 'SelectProperties';
Microsoft.SharePoint.Client.Search.Query.KeywordQueryObjectPropertyNames.sortList = 'SortList';
Microsoft.SharePoint.Client.Search.Query.QueryPropertyNames.blockDedupeMode = 'BlockDedupeMode';
Microsoft.SharePoint.Client.Search.Query.QueryPropertyNames.bypassResultTypes = 'BypassResultTypes';
Microsoft.SharePoint.Client.Search.Query.QueryPropertyNames.clientType = 'ClientType';
Microsoft.SharePoint.Client.Search.Query.QueryPropertyNames.culture = 'Culture';
Microsoft.SharePoint.Client.Search.Query.QueryPropertyNames.desiredSnippetLength = 'DesiredSnippetLength';
Microsoft.SharePoint.Client.Search.Query.QueryPropertyNames.enableInterleaving = 'EnableInterleaving';
Microsoft.SharePoint.Client.Search.Query.QueryPropertyNames.enableNicknames = 'EnableNicknames';
Microsoft.SharePoint.Client.Search.Query.QueryPropertyNames.enableOrderingHitHighlightedProperty = 'EnableOrderingHitHighlightedProperty';
Microsoft.SharePoint.Client.Search.Query.QueryPropertyNames.enablePhonetic = 'EnablePhonetic';
Microsoft.SharePoint.Client.Search.Query.QueryPropertyNames.enableQueryRules = 'EnableQueryRules';
Microsoft.SharePoint.Client.Search.Query.QueryPropertyNames.enableStemming = 'EnableStemming';
Microsoft.SharePoint.Client.Search.Query.QueryPropertyNames.generateBlockRankLog = 'GenerateBlockRankLog';
Microsoft.SharePoint.Client.Search.Query.QueryPropertyNames.hitHighlightedMultivaluePropertyLimit = 'HitHighlightedMultivaluePropertyLimit';
Microsoft.SharePoint.Client.Search.Query.QueryPropertyNames.ignoreSafeQueryPropertiesTemplateUrl = 'IgnoreSafeQueryPropertiesTemplateUrl';
Microsoft.SharePoint.Client.Search.Query.QueryPropertyNames.impressionID = 'ImpressionID';
Microsoft.SharePoint.Client.Search.Query.QueryPropertyNames.maxSnippetLength = 'MaxSnippetLength';
Microsoft.SharePoint.Client.Search.Query.QueryPropertyNames.processBestBets = 'ProcessBestBets';
Microsoft.SharePoint.Client.Search.Query.QueryPropertyNames.processPersonalFavorites = 'ProcessPersonalFavorites';
Microsoft.SharePoint.Client.Search.Query.QueryPropertyNames.queryTag = 'QueryTag';
Microsoft.SharePoint.Client.Search.Query.QueryPropertyNames.queryTemplate = 'QueryTemplate';
Microsoft.SharePoint.Client.Search.Query.QueryPropertyNames.queryTemplateParameters = 'QueryTemplateParameters';
Microsoft.SharePoint.Client.Search.Query.QueryPropertyNames.queryText = 'QueryText';
Microsoft.SharePoint.Client.Search.Query.QueryPropertyNames.rankingModelId = 'RankingModelId';
Microsoft.SharePoint.Client.Search.Query.QueryPropertyNames.resultsUrl = 'ResultsUrl';
Microsoft.SharePoint.Client.Search.Query.QueryPropertyNames.rowLimit = 'RowLimit';
Microsoft.SharePoint.Client.Search.Query.QueryPropertyNames.rowsPerPage = 'RowsPerPage';
Microsoft.SharePoint.Client.Search.Query.QueryPropertyNames.safeQueryPropertiesTemplateUrl = 'SafeQueryPropertiesTemplateUrl';
Microsoft.SharePoint.Client.Search.Query.QueryPropertyNames.showPeopleNameSuggestions = 'ShowPeopleNameSuggestions';
Microsoft.SharePoint.Client.Search.Query.QueryPropertyNames.sourceId = 'SourceId';
Microsoft.SharePoint.Client.Search.Query.QueryPropertyNames.startRow = 'StartRow';
Microsoft.SharePoint.Client.Search.Query.QueryPropertyNames.summaryLength = 'SummaryLength';
Microsoft.SharePoint.Client.Search.Query.QueryPropertyNames.timeout = 'Timeout';
Microsoft.SharePoint.Client.Search.Query.QueryPropertyNames.totalRowsExactMinimum = 'TotalRowsExactMinimum';
Microsoft.SharePoint.Client.Search.Query.QueryPropertyNames.trimDuplicates = 'TrimDuplicates';
Microsoft.SharePoint.Client.Search.Query.QueryPropertyNames.uiLanguage = 'UILanguage';
Microsoft.SharePoint.Client.Search.Query.QueryObjectPropertyNames.hitHighlightedProperties = 'HitHighlightedProperties';
Microsoft.SharePoint.Client.Search.Query.QueryObjectPropertyNames.personalizationData = 'PersonalizationData';
Microsoft.SharePoint.Client.Search.ContentPush.PushTenantServiceInfoPropertyNames.authenticationRealm = 'AuthenticationRealm';
Microsoft.SharePoint.Client.Search.ContentPush.PushTenantServiceInfoPropertyNames.endpointAddress = 'EndpointAddress';
Microsoft.SharePoint.Client.Search.ContentPush.PushTenantServiceInfoPropertyNames.serviceProperties = 'ServiceProperties';
Microsoft.SharePoint.Client.Search.ContentPush.PushTenantServiceInfoPropertyNames.tenantId = 'TenantId';
Microsoft.SharePoint.Client.Search.ContentPush.PushTenantServiceInfoPropertyNames.validContentEncryptionCertificates = 'ValidContentEncryptionCertificates';
Microsoft.SharePoint.Client.Search.ContentPush.PushTenantServiceInfoPropertyNames.validUntil = 'ValidUntil';
Microsoft.SharePoint.Client.Search.Portability.SearchConfigurationPortabilityPropertyNames.importWarnings = 'ImportWarnings';

if( typeof(Sys) != "undefined" && Sys && Sys.Application ){
   Sys.Application.notifyScriptLoaded();
}
NotifyScriptLoadedAndExecuteWaitingJobs("sp.search.js");
