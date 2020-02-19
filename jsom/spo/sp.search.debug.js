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
    
    get_item: function Microsoft_SharePoint_Client_Search_Query_KeywordQueryProperties$get_item(key) {
        return null;
    },
    
    set_item: function Microsoft_SharePoint_Client_Search_Query_KeywordQueryProperties$set_item(key, value) {
        this.setQueryPropertyValue(key, Microsoft.SharePoint.Client.Search.Query.QueryUtility.create(key, value));
        return value;
    },
    
    setQueryPropertyValue: function Microsoft_SharePoint_Client_Search_Query_KeywordQueryProperties$setQueryPropertyValue(name, val) {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'SetQueryPropertyValue', [ name, val ]);
        $v_0.addQuery($v_1);
    },
    
    getQueryPropertyValue: function Microsoft_SharePoint_Client_Search_Query_KeywordQueryProperties$getQueryPropertyValue(name) {
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
Microsoft.SharePoint.Client.Search.Query.QueryUtility.create = function Microsoft_SharePoint_Client_Search_Query_QueryUtility$create(name, val) {
    if (name && name.length > 0) {
        var $v_0 = new Microsoft.SharePoint.Client.Search.Query.QueryPropertyValue();
        if (val) {
            var $v_1 = Object.getType(val);
            switch (Array.indexOf(Microsoft.SharePoint.Client.Search.Query.QueryUtility.$1j, $v_1)) {
                case 1:
                    $v_0.$N_1 = val;
                    $v_0.$2_1 = 1;
                    break;
                case 2:
                    $v_0.$K_1 = val;
                    $v_0.$2_1 = 2;
                    break;
                case 3:
                    $v_0.$J_1 = val;
                    $v_0.$2_1 = 3;
                    break;
                case 4:
                    $v_0.$M_1 = val;
                    $v_0.$2_1 = 4;
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
Microsoft.SharePoint.Client.Search.Query.QueryUtility.queryPropertyValueToObject = function Microsoft_SharePoint_Client_Search_Query_QueryUtility$queryPropertyValueToObject(val) {
    if (val && val.$2_1 !== 0) {
        switch (val.$2_1) {
            case 1:
                return val.$N_1;
            case 2:
                return val.$K_1;
            case 3:
                return val.$J_1;
            case 4:
                return val.$M_1;
            default:
                throw Error.argument('The Payload type is not valid. Only String, Int32, Boolean and String[] are supported.');
        }
    }
    else {
        return null;
    }
}
Microsoft.SharePoint.Client.Search.Query.QueryUtility.getQueryPropertyValueType = function Microsoft_SharePoint_Client_Search_Query_QueryUtility$getQueryPropertyValueType(val) {
    if (val) {
        return val.$2_1;
    }
    else {
        return 0;
    }
}


Microsoft.SharePoint.Client.Search.Query.CustomQuerySuggestions = function Microsoft_SharePoint_Client_Search_Query_CustomQuerySuggestions() {
    Microsoft.SharePoint.Client.Search.Query.CustomQuerySuggestions.initializeBase(this);
}
Microsoft.SharePoint.Client.Search.Query.CustomQuerySuggestions.prototype = {
    $0_1: 0,
    $1_1: null,
    
    get_LCID: function Microsoft_SharePoint_Client_Search_Query_CustomQuerySuggestions$get_LCID() {
        return this.$0_1;
    },
    
    set_LCID: function Microsoft_SharePoint_Client_Search_Query_CustomQuerySuggestions$set_LCID(value) {
        this.$0_1 = value;
        return value;
    },
    
    get_queries: function Microsoft_SharePoint_Client_Search_Query_CustomQuerySuggestions$get_queries() {
        return this.$1_1;
    },
    
    set_queries: function Microsoft_SharePoint_Client_Search_Query_CustomQuerySuggestions$set_queries(value) {
        this.$1_1 = value;
        return value;
    },
    
    get_typeId: function Microsoft_SharePoint_Client_Search_Query_CustomQuerySuggestions$get_typeId() {
        return '{5830381c-6d28-4f44-80a7-1d8093ca7d9d}';
    },
    
    writeToXml: function Microsoft_SharePoint_Client_Search_Query_CustomQuerySuggestions$writeToXml(writer, serializationContext) {
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = [ 'LCID', 'Queries' ];
        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    
    initPropertiesFromJson: function Microsoft_SharePoint_Client_Search_Query_CustomQuerySuggestions$initPropertiesFromJson(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.LCID;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$0_1 = ($v_0);
            delete parentNode.LCID;
        }
        $v_0 = parentNode.Queries;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1_1 = ((SP.DataConvert.fixupType(null, $v_0)));
            delete parentNode.Queries;
        }
    }
}


Microsoft.SharePoint.Client.Search.Query.KeywordQuery = function Microsoft_SharePoint_Client_Search_Query_KeywordQuery(context) {
    Microsoft.SharePoint.Client.Search.Query.KeywordQuery.initializeBase(this, [ context, SP.ClientUtility.getOrCreateObjectPathForConstructor(context, '{80173281-fffd-47b6-9a49-312e06ff8428}', arguments) ]);
}
Microsoft.SharePoint.Client.Search.Query.KeywordQuery.newObject = function Microsoft_SharePoint_Client_Search_Query_KeywordQuery$newObject(context) {
    return new Microsoft.SharePoint.Client.Search.Query.KeywordQuery(context, new SP.ObjectPathConstructor(context, '{80173281-fffd-47b6-9a49-312e06ff8428}', null));
}
Microsoft.SharePoint.Client.Search.Query.KeywordQuery.prototype = {
    
    get_collapseSpecification: function Microsoft_SharePoint_Client_Search_Query_KeywordQuery$get_collapseSpecification() {
        this.checkUninitializedProperty('CollapseSpecification');
        return ((this.get_objectData().get_properties()['CollapseSpecification']));
    },
    
    set_collapseSpecification: function Microsoft_SharePoint_Client_Search_Query_KeywordQuery$set_collapseSpecification(value) {
        this.get_objectData().get_properties()['CollapseSpecification'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'CollapseSpecification', value));
        }
        return value;
    },
    
    get_enableSorting: function Microsoft_SharePoint_Client_Search_Query_KeywordQuery$get_enableSorting() {
        this.checkUninitializedProperty('EnableSorting');
        return ((this.get_objectData().get_properties()['EnableSorting']));
    },
    
    set_enableSorting: function Microsoft_SharePoint_Client_Search_Query_KeywordQuery$set_enableSorting(value) {
        this.get_objectData().get_properties()['EnableSorting'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'EnableSorting', value));
        }
        return value;
    },
    
    get_hiddenConstraints: function Microsoft_SharePoint_Client_Search_Query_KeywordQuery$get_hiddenConstraints() {
        this.checkUninitializedProperty('HiddenConstraints');
        return ((this.get_objectData().get_properties()['HiddenConstraints']));
    },
    
    set_hiddenConstraints: function Microsoft_SharePoint_Client_Search_Query_KeywordQuery$set_hiddenConstraints(value) {
        this.get_objectData().get_properties()['HiddenConstraints'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'HiddenConstraints', value));
        }
        return value;
    },
    
    get_properties: function Microsoft_SharePoint_Client_Search_Query_KeywordQuery$get_properties() {
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['Properties']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new Microsoft.SharePoint.Client.Search.Query.KeywordQueryProperties(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Properties'));
            this.get_objectData().get_clientObjectProperties()['Properties'] = $v_0;
        }
        return $v_0;
    },
    
    get_olsQuerySession: function Microsoft_SharePoint_Client_Search_Query_KeywordQuery$get_olsQuerySession() {
        this.checkUninitializedProperty('OLSQuerySession');
        return ((this.get_objectData().get_properties()['OLSQuerySession']));
    },
    
    set_olsQuerySession: function Microsoft_SharePoint_Client_Search_Query_KeywordQuery$set_olsQuerySession(value) {
        this.get_objectData().get_properties()['OLSQuerySession'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'OLSQuerySession', value));
        }
        return value;
    },
    
    get_refinementFilters: function Microsoft_SharePoint_Client_Search_Query_KeywordQuery$get_refinementFilters() {
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['RefinementFilters']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new Microsoft.SharePoint.Client.Search.Query.StringCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'RefinementFilters'));
            this.get_objectData().get_clientObjectProperties()['RefinementFilters'] = $v_0;
        }
        return $v_0;
    },
    
    set_refinementFilters: function Microsoft_SharePoint_Client_Search_Query_KeywordQuery$set_refinementFilters(value) {
        this.get_objectData().get_clientObjectProperties()['RefinementFilters'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'RefinementFilters', value));
        }
        return value;
    },
    
    get_refiners: function Microsoft_SharePoint_Client_Search_Query_KeywordQuery$get_refiners() {
        this.checkUninitializedProperty('Refiners');
        return ((this.get_objectData().get_properties()['Refiners']));
    },
    
    set_refiners: function Microsoft_SharePoint_Client_Search_Query_KeywordQuery$set_refiners(value) {
        this.get_objectData().get_properties()['Refiners'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Refiners', value));
        }
        return value;
    },
    
    get_reorderingRules: function Microsoft_SharePoint_Client_Search_Query_KeywordQuery$get_reorderingRules() {
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['ReorderingRules']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new Microsoft.SharePoint.Client.Search.Query.ReorderingRuleCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'ReorderingRules'));
            this.get_objectData().get_clientObjectProperties()['ReorderingRules'] = $v_0;
        }
        return $v_0;
    },
    
    set_reorderingRules: function Microsoft_SharePoint_Client_Search_Query_KeywordQuery$set_reorderingRules(value) {
        this.get_objectData().get_clientObjectProperties()['ReorderingRules'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'ReorderingRules', value));
        }
        return value;
    },
    
    get_selectProperties: function Microsoft_SharePoint_Client_Search_Query_KeywordQuery$get_selectProperties() {
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['SelectProperties']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new Microsoft.SharePoint.Client.Search.Query.StringCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'SelectProperties'));
            this.get_objectData().get_clientObjectProperties()['SelectProperties'] = $v_0;
        }
        return $v_0;
    },
    
    get_sortList: function Microsoft_SharePoint_Client_Search_Query_KeywordQuery$get_sortList() {
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['SortList']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new Microsoft.SharePoint.Client.Search.Query.SortCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'SortList'));
            this.get_objectData().get_clientObjectProperties()['SortList'] = $v_0;
        }
        return $v_0;
    },
    
    get_timeZoneId: function Microsoft_SharePoint_Client_Search_Query_KeywordQuery$get_timeZoneId() {
        this.checkUninitializedProperty('TimeZoneId');
        return ((this.get_objectData().get_properties()['TimeZoneId']));
    },
    
    set_timeZoneId: function Microsoft_SharePoint_Client_Search_Query_KeywordQuery$set_timeZoneId(value) {
        this.get_objectData().get_properties()['TimeZoneId'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'TimeZoneId', value));
        }
        return value;
    },
    
    get_trimDuplicatesIncludeId: function Microsoft_SharePoint_Client_Search_Query_KeywordQuery$get_trimDuplicatesIncludeId() {
        this.checkUninitializedProperty('TrimDuplicatesIncludeId');
        return ((this.get_objectData().get_properties()['TrimDuplicatesIncludeId']));
    },
    
    set_trimDuplicatesIncludeId: function Microsoft_SharePoint_Client_Search_Query_KeywordQuery$set_trimDuplicatesIncludeId(value) {
        this.get_objectData().get_properties()['TrimDuplicatesIncludeId'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'TrimDuplicatesIncludeId', value));
        }
        return value;
    },
    
    get_useOLSQuery: function Microsoft_SharePoint_Client_Search_Query_KeywordQuery$get_useOLSQuery() {
        this.checkUninitializedProperty('UseOLSQuery');
        return ((this.get_objectData().get_properties()['UseOLSQuery']));
    },
    
    set_useOLSQuery: function Microsoft_SharePoint_Client_Search_Query_KeywordQuery$set_useOLSQuery(value) {
        this.get_objectData().get_properties()['UseOLSQuery'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'UseOLSQuery', value));
        }
        return value;
    },
    
    initPropertiesFromJson: function Microsoft_SharePoint_Client_Search_Query_KeywordQuery$initPropertiesFromJson(parentNode) {
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
    $n_1: null,
    $o_1: false,
    $H_1: null,
    $I_1: null,
    
    get_highlightedTitle: function Microsoft_SharePoint_Client_Search_Query_PersonalResultSuggestion$get_highlightedTitle() {
        return this.$n_1;
    },
    
    set_highlightedTitle: function Microsoft_SharePoint_Client_Search_Query_PersonalResultSuggestion$set_highlightedTitle(value) {
        this.$n_1 = value;
        return value;
    },
    
    get_isBestBet: function Microsoft_SharePoint_Client_Search_Query_PersonalResultSuggestion$get_isBestBet() {
        return this.$o_1;
    },
    
    set_isBestBet: function Microsoft_SharePoint_Client_Search_Query_PersonalResultSuggestion$set_isBestBet(value) {
        this.$o_1 = value;
        return value;
    },
    
    get_title: function Microsoft_SharePoint_Client_Search_Query_PersonalResultSuggestion$get_title() {
        return this.$H_1;
    },
    
    set_title: function Microsoft_SharePoint_Client_Search_Query_PersonalResultSuggestion$set_title(value) {
        this.$H_1 = value;
        return value;
    },
    
    get_url: function Microsoft_SharePoint_Client_Search_Query_PersonalResultSuggestion$get_url() {
        return this.$I_1;
    },
    
    set_url: function Microsoft_SharePoint_Client_Search_Query_PersonalResultSuggestion$set_url(value) {
        this.$I_1 = value;
        return value;
    },
    
    get_typeId: function Microsoft_SharePoint_Client_Search_Query_PersonalResultSuggestion$get_typeId() {
        return '{aafd94af-525a-4759-8410-f571a26f04bc}';
    },
    
    writeToXml: function Microsoft_SharePoint_Client_Search_Query_PersonalResultSuggestion$writeToXml(writer, serializationContext) {
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
    
    initPropertiesFromJson: function Microsoft_SharePoint_Client_Search_Query_PersonalResultSuggestion$initPropertiesFromJson(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.HighlightedTitle;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$n_1 = ($v_0);
            delete parentNode.HighlightedTitle;
        }
        $v_0 = parentNode.IsBestBet;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$o_1 = ($v_0);
            delete parentNode.IsBestBet;
        }
        $v_0 = parentNode.Title;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$H_1 = ($v_0);
            delete parentNode.Title;
        }
        $v_0 = parentNode.Url;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$I_1 = ($v_0);
            delete parentNode.Url;
        }
    }
}


Microsoft.SharePoint.Client.Search.Query.PopularQuery = function Microsoft_SharePoint_Client_Search_Query_PopularQuery() {
    Microsoft.SharePoint.Client.Search.Query.PopularQuery.initializeBase(this);
}
Microsoft.SharePoint.Client.Search.Query.PopularQuery.prototype = {
    $6_1: 0,
    $0_1: 0,
    $B_1: 0,
    $C_1: null,
    
    get_clickCount: function Microsoft_SharePoint_Client_Search_Query_PopularQuery$get_clickCount() {
        return this.$6_1;
    },
    
    set_clickCount: function Microsoft_SharePoint_Client_Search_Query_PopularQuery$set_clickCount(value) {
        this.$6_1 = value;
        return value;
    },
    
    get_LCID: function Microsoft_SharePoint_Client_Search_Query_PopularQuery$get_LCID() {
        return this.$0_1;
    },
    
    set_LCID: function Microsoft_SharePoint_Client_Search_Query_PopularQuery$set_LCID(value) {
        this.$0_1 = value;
        return value;
    },
    
    get_queryCount: function Microsoft_SharePoint_Client_Search_Query_PopularQuery$get_queryCount() {
        return this.$B_1;
    },
    
    set_queryCount: function Microsoft_SharePoint_Client_Search_Query_PopularQuery$set_queryCount(value) {
        this.$B_1 = value;
        return value;
    },
    
    get_queryText: function Microsoft_SharePoint_Client_Search_Query_PopularQuery$get_queryText() {
        return this.$C_1;
    },
    
    set_queryText: function Microsoft_SharePoint_Client_Search_Query_PopularQuery$set_queryText(value) {
        this.$C_1 = value;
        return value;
    },
    
    get_typeId: function Microsoft_SharePoint_Client_Search_Query_PopularQuery$get_typeId() {
        return '{cea115d6-87ec-4e1c-aa4a-b8d44d6cd10d}';
    },
    
    writeToXml: function Microsoft_SharePoint_Client_Search_Query_PopularQuery$writeToXml(writer, serializationContext) {
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
    
    initPropertiesFromJson: function Microsoft_SharePoint_Client_Search_Query_PopularQuery$initPropertiesFromJson(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.ClickCount;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$6_1 = ($v_0);
            delete parentNode.ClickCount;
        }
        $v_0 = parentNode.LCID;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$0_1 = ($v_0);
            delete parentNode.LCID;
        }
        $v_0 = parentNode.QueryCount;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$B_1 = ($v_0);
            delete parentNode.QueryCount;
        }
        $v_0 = parentNode.QueryText;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$C_1 = ($v_0);
            delete parentNode.QueryText;
        }
    }
}


Microsoft.SharePoint.Client.Search.Query.PopularTenantQuery = function Microsoft_SharePoint_Client_Search_Query_PopularTenantQuery() {
    Microsoft.SharePoint.Client.Search.Query.PopularTenantQuery.initializeBase(this);
}
Microsoft.SharePoint.Client.Search.Query.PopularTenantQuery.prototype = {
    $4_1: false,
    $6_1: 0,
    $0_1: 0,
    $B_1: 0,
    $C_1: null,
    $E_1: null,
    $F_1: null,
    $1J_1: null,
    
    get_alwaysSuggest: function Microsoft_SharePoint_Client_Search_Query_PopularTenantQuery$get_alwaysSuggest() {
        return this.$4_1;
    },
    
    set_alwaysSuggest: function Microsoft_SharePoint_Client_Search_Query_PopularTenantQuery$set_alwaysSuggest(value) {
        this.$4_1 = value;
        return value;
    },
    
    get_clickCount: function Microsoft_SharePoint_Client_Search_Query_PopularTenantQuery$get_clickCount() {
        return this.$6_1;
    },
    
    set_clickCount: function Microsoft_SharePoint_Client_Search_Query_PopularTenantQuery$set_clickCount(value) {
        this.$6_1 = value;
        return value;
    },
    
    get_LCID: function Microsoft_SharePoint_Client_Search_Query_PopularTenantQuery$get_LCID() {
        return this.$0_1;
    },
    
    set_LCID: function Microsoft_SharePoint_Client_Search_Query_PopularTenantQuery$set_LCID(value) {
        this.$0_1 = value;
        return value;
    },
    
    get_queryCount: function Microsoft_SharePoint_Client_Search_Query_PopularTenantQuery$get_queryCount() {
        return this.$B_1;
    },
    
    set_queryCount: function Microsoft_SharePoint_Client_Search_Query_PopularTenantQuery$set_queryCount(value) {
        this.$B_1 = value;
        return value;
    },
    
    get_queryText: function Microsoft_SharePoint_Client_Search_Query_PopularTenantQuery$get_queryText() {
        return this.$C_1;
    },
    
    set_queryText: function Microsoft_SharePoint_Client_Search_Query_PopularTenantQuery$set_queryText(value) {
        this.$C_1 = value;
        return value;
    },
    
    get_siteId: function Microsoft_SharePoint_Client_Search_Query_PopularTenantQuery$get_siteId() {
        return this.$E_1;
    },
    
    set_siteId: function Microsoft_SharePoint_Client_Search_Query_PopularTenantQuery$set_siteId(value) {
        this.$E_1 = value;
        return value;
    },
    
    get_sourceId: function Microsoft_SharePoint_Client_Search_Query_PopularTenantQuery$get_sourceId() {
        return this.$F_1;
    },
    
    set_sourceId: function Microsoft_SharePoint_Client_Search_Query_PopularTenantQuery$set_sourceId(value) {
        this.$F_1 = value;
        return value;
    },
    
    get_webId: function Microsoft_SharePoint_Client_Search_Query_PopularTenantQuery$get_webId() {
        return this.$1J_1;
    },
    
    set_webId: function Microsoft_SharePoint_Client_Search_Query_PopularTenantQuery$set_webId(value) {
        this.$1J_1 = value;
        return value;
    },
    
    get_typeId: function Microsoft_SharePoint_Client_Search_Query_PopularTenantQuery$get_typeId() {
        return '{0b50623e-3537-473b-9aa2-cc73f251534b}';
    },
    
    writeToXml: function Microsoft_SharePoint_Client_Search_Query_PopularTenantQuery$writeToXml(writer, serializationContext) {
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = [ 'AlwaysSuggest', 'ClickCount', 'LCID', 'QueryCount', 'QueryText', 'SiteId', 'SourceId', 'WebId' ];
        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    
    initPropertiesFromJson: function Microsoft_SharePoint_Client_Search_Query_PopularTenantQuery$initPropertiesFromJson(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.AlwaysSuggest;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$4_1 = ($v_0);
            delete parentNode.AlwaysSuggest;
        }
        $v_0 = parentNode.ClickCount;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$6_1 = ($v_0);
            delete parentNode.ClickCount;
        }
        $v_0 = parentNode.LCID;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$0_1 = ($v_0);
            delete parentNode.LCID;
        }
        $v_0 = parentNode.QueryCount;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$B_1 = ($v_0);
            delete parentNode.QueryCount;
        }
        $v_0 = parentNode.QueryText;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$C_1 = ($v_0);
            delete parentNode.QueryText;
        }
        $v_0 = parentNode.SiteId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$E_1 = ($v_0);
            delete parentNode.SiteId;
        }
        $v_0 = parentNode.SourceId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$F_1 = ($v_0);
            delete parentNode.SourceId;
        }
        $v_0 = parentNode.WebId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1J_1 = ($v_0);
            delete parentNode.WebId;
        }
    }
}


Microsoft.SharePoint.Client.Search.Query.Query = function Microsoft_SharePoint_Client_Search_Query_Query(context, objectPath) {
    Microsoft.SharePoint.Client.Search.Query.Query.initializeBase(this, [ context, objectPath ]);
}
Microsoft.SharePoint.Client.Search.Query.Query.prototype = {
    
    get_blockDedupeMode: function Microsoft_SharePoint_Client_Search_Query_Query$get_blockDedupeMode() {
        this.checkUninitializedProperty('BlockDedupeMode');
        return ((this.get_objectData().get_properties()['BlockDedupeMode']));
    },
    
    set_blockDedupeMode: function Microsoft_SharePoint_Client_Search_Query_Query$set_blockDedupeMode(value) {
        this.get_objectData().get_properties()['BlockDedupeMode'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'BlockDedupeMode', value));
        }
        return value;
    },
    
    get_bypassResultTypes: function Microsoft_SharePoint_Client_Search_Query_Query$get_bypassResultTypes() {
        this.checkUninitializedProperty('BypassResultTypes');
        return ((this.get_objectData().get_properties()['BypassResultTypes']));
    },
    
    set_bypassResultTypes: function Microsoft_SharePoint_Client_Search_Query_Query$set_bypassResultTypes(value) {
        this.get_objectData().get_properties()['BypassResultTypes'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'BypassResultTypes', value));
        }
        return value;
    },
    
    get_clientType: function Microsoft_SharePoint_Client_Search_Query_Query$get_clientType() {
        this.checkUninitializedProperty('ClientType');
        return ((this.get_objectData().get_properties()['ClientType']));
    },
    
    set_clientType: function Microsoft_SharePoint_Client_Search_Query_Query$set_clientType(value) {
        this.get_objectData().get_properties()['ClientType'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'ClientType', value));
        }
        return value;
    },
    
    get_culture: function Microsoft_SharePoint_Client_Search_Query_Query$get_culture() {
        this.checkUninitializedProperty('Culture');
        return ((this.get_objectData().get_properties()['Culture']));
    },
    
    set_culture: function Microsoft_SharePoint_Client_Search_Query_Query$set_culture(value) {
        this.get_objectData().get_properties()['Culture'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Culture', value));
        }
        return value;
    },
    
    get_desiredSnippetLength: function Microsoft_SharePoint_Client_Search_Query_Query$get_desiredSnippetLength() {
        this.checkUninitializedProperty('DesiredSnippetLength');
        return ((this.get_objectData().get_properties()['DesiredSnippetLength']));
    },
    
    set_desiredSnippetLength: function Microsoft_SharePoint_Client_Search_Query_Query$set_desiredSnippetLength(value) {
        this.get_objectData().get_properties()['DesiredSnippetLength'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'DesiredSnippetLength', value));
        }
        return value;
    },
    
    get_enableInterleaving: function Microsoft_SharePoint_Client_Search_Query_Query$get_enableInterleaving() {
        this.checkUninitializedProperty('EnableInterleaving');
        return ((this.get_objectData().get_properties()['EnableInterleaving']));
    },
    
    set_enableInterleaving: function Microsoft_SharePoint_Client_Search_Query_Query$set_enableInterleaving(value) {
        this.get_objectData().get_properties()['EnableInterleaving'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'EnableInterleaving', value));
        }
        return value;
    },
    
    get_enableNicknames: function Microsoft_SharePoint_Client_Search_Query_Query$get_enableNicknames() {
        this.checkUninitializedProperty('EnableNicknames');
        return ((this.get_objectData().get_properties()['EnableNicknames']));
    },
    
    set_enableNicknames: function Microsoft_SharePoint_Client_Search_Query_Query$set_enableNicknames(value) {
        this.get_objectData().get_properties()['EnableNicknames'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'EnableNicknames', value));
        }
        return value;
    },
    
    get_enableOrderingHitHighlightedProperty: function Microsoft_SharePoint_Client_Search_Query_Query$get_enableOrderingHitHighlightedProperty() {
        this.checkUninitializedProperty('EnableOrderingHitHighlightedProperty');
        return ((this.get_objectData().get_properties()['EnableOrderingHitHighlightedProperty']));
    },
    
    set_enableOrderingHitHighlightedProperty: function Microsoft_SharePoint_Client_Search_Query_Query$set_enableOrderingHitHighlightedProperty(value) {
        this.get_objectData().get_properties()['EnableOrderingHitHighlightedProperty'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'EnableOrderingHitHighlightedProperty', value));
        }
        return value;
    },
    
    get_enablePhonetic: function Microsoft_SharePoint_Client_Search_Query_Query$get_enablePhonetic() {
        this.checkUninitializedProperty('EnablePhonetic');
        return ((this.get_objectData().get_properties()['EnablePhonetic']));
    },
    
    set_enablePhonetic: function Microsoft_SharePoint_Client_Search_Query_Query$set_enablePhonetic(value) {
        this.get_objectData().get_properties()['EnablePhonetic'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'EnablePhonetic', value));
        }
        return value;
    },
    
    get_enableQueryRules: function Microsoft_SharePoint_Client_Search_Query_Query$get_enableQueryRules() {
        this.checkUninitializedProperty('EnableQueryRules');
        return ((this.get_objectData().get_properties()['EnableQueryRules']));
    },
    
    set_enableQueryRules: function Microsoft_SharePoint_Client_Search_Query_Query$set_enableQueryRules(value) {
        this.get_objectData().get_properties()['EnableQueryRules'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'EnableQueryRules', value));
        }
        return value;
    },
    
    get_enableStemming: function Microsoft_SharePoint_Client_Search_Query_Query$get_enableStemming() {
        this.checkUninitializedProperty('EnableStemming');
        return ((this.get_objectData().get_properties()['EnableStemming']));
    },
    
    set_enableStemming: function Microsoft_SharePoint_Client_Search_Query_Query$set_enableStemming(value) {
        this.get_objectData().get_properties()['EnableStemming'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'EnableStemming', value));
        }
        return value;
    },
    
    get_generateBlockRankLog: function Microsoft_SharePoint_Client_Search_Query_Query$get_generateBlockRankLog() {
        this.checkUninitializedProperty('GenerateBlockRankLog');
        return ((this.get_objectData().get_properties()['GenerateBlockRankLog']));
    },
    
    set_generateBlockRankLog: function Microsoft_SharePoint_Client_Search_Query_Query$set_generateBlockRankLog(value) {
        this.get_objectData().get_properties()['GenerateBlockRankLog'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'GenerateBlockRankLog', value));
        }
        return value;
    },
    
    get_hitHighlightedMultivaluePropertyLimit: function Microsoft_SharePoint_Client_Search_Query_Query$get_hitHighlightedMultivaluePropertyLimit() {
        this.checkUninitializedProperty('HitHighlightedMultivaluePropertyLimit');
        return ((this.get_objectData().get_properties()['HitHighlightedMultivaluePropertyLimit']));
    },
    
    set_hitHighlightedMultivaluePropertyLimit: function Microsoft_SharePoint_Client_Search_Query_Query$set_hitHighlightedMultivaluePropertyLimit(value) {
        this.get_objectData().get_properties()['HitHighlightedMultivaluePropertyLimit'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'HitHighlightedMultivaluePropertyLimit', value));
        }
        return value;
    },
    
    get_hitHighlightedProperties: function Microsoft_SharePoint_Client_Search_Query_Query$get_hitHighlightedProperties() {
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['HitHighlightedProperties']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new Microsoft.SharePoint.Client.Search.Query.StringCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'HitHighlightedProperties'));
            this.get_objectData().get_clientObjectProperties()['HitHighlightedProperties'] = $v_0;
        }
        return $v_0;
    },
    
    get_ignoreSafeQueryPropertiesTemplateUrl: function Microsoft_SharePoint_Client_Search_Query_Query$get_ignoreSafeQueryPropertiesTemplateUrl() {
        this.checkUninitializedProperty('IgnoreSafeQueryPropertiesTemplateUrl');
        return ((this.get_objectData().get_properties()['IgnoreSafeQueryPropertiesTemplateUrl']));
    },
    
    set_ignoreSafeQueryPropertiesTemplateUrl: function Microsoft_SharePoint_Client_Search_Query_Query$set_ignoreSafeQueryPropertiesTemplateUrl(value) {
        this.get_objectData().get_properties()['IgnoreSafeQueryPropertiesTemplateUrl'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'IgnoreSafeQueryPropertiesTemplateUrl', value));
        }
        return value;
    },
    
    get_impressionID: function Microsoft_SharePoint_Client_Search_Query_Query$get_impressionID() {
        this.checkUninitializedProperty('ImpressionID');
        return ((this.get_objectData().get_properties()['ImpressionID']));
    },
    
    set_impressionID: function Microsoft_SharePoint_Client_Search_Query_Query$set_impressionID(value) {
        this.get_objectData().get_properties()['ImpressionID'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'ImpressionID', value));
        }
        return value;
    },
    
    get_maxSnippetLength: function Microsoft_SharePoint_Client_Search_Query_Query$get_maxSnippetLength() {
        this.checkUninitializedProperty('MaxSnippetLength');
        return ((this.get_objectData().get_properties()['MaxSnippetLength']));
    },
    
    set_maxSnippetLength: function Microsoft_SharePoint_Client_Search_Query_Query$set_maxSnippetLength(value) {
        this.get_objectData().get_properties()['MaxSnippetLength'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'MaxSnippetLength', value));
        }
        return value;
    },
    
    get_personalizationData: function Microsoft_SharePoint_Client_Search_Query_Query$get_personalizationData() {
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['PersonalizationData']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new Microsoft.SharePoint.Client.Search.Query.QueryPersonalizationData(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'PersonalizationData'));
            this.get_objectData().get_clientObjectProperties()['PersonalizationData'] = $v_0;
        }
        return $v_0;
    },
    
    set_personalizationData: function Microsoft_SharePoint_Client_Search_Query_Query$set_personalizationData(value) {
        this.get_objectData().get_clientObjectProperties()['PersonalizationData'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'PersonalizationData', value));
        }
        return value;
    },
    
    get_processBestBets: function Microsoft_SharePoint_Client_Search_Query_Query$get_processBestBets() {
        this.checkUninitializedProperty('ProcessBestBets');
        return ((this.get_objectData().get_properties()['ProcessBestBets']));
    },
    
    set_processBestBets: function Microsoft_SharePoint_Client_Search_Query_Query$set_processBestBets(value) {
        this.get_objectData().get_properties()['ProcessBestBets'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'ProcessBestBets', value));
        }
        return value;
    },
    
    get_processPersonalFavorites: function Microsoft_SharePoint_Client_Search_Query_Query$get_processPersonalFavorites() {
        this.checkUninitializedProperty('ProcessPersonalFavorites');
        return ((this.get_objectData().get_properties()['ProcessPersonalFavorites']));
    },
    
    set_processPersonalFavorites: function Microsoft_SharePoint_Client_Search_Query_Query$set_processPersonalFavorites(value) {
        this.get_objectData().get_properties()['ProcessPersonalFavorites'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'ProcessPersonalFavorites', value));
        }
        return value;
    },
    
    get_propertiesToGenerateAcronyms: function Microsoft_SharePoint_Client_Search_Query_Query$get_propertiesToGenerateAcronyms() {
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['PropertiesToGenerateAcronyms']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new Microsoft.SharePoint.Client.Search.Query.StringCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'PropertiesToGenerateAcronyms'));
            this.get_objectData().get_clientObjectProperties()['PropertiesToGenerateAcronyms'] = $v_0;
        }
        return $v_0;
    },
    
    get_queryTag: function Microsoft_SharePoint_Client_Search_Query_Query$get_queryTag() {
        this.checkUninitializedProperty('QueryTag');
        return ((this.get_objectData().get_properties()['QueryTag']));
    },
    
    set_queryTag: function Microsoft_SharePoint_Client_Search_Query_Query$set_queryTag(value) {
        this.get_objectData().get_properties()['QueryTag'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'QueryTag', value));
        }
        return value;
    },
    
    get_queryTemplate: function Microsoft_SharePoint_Client_Search_Query_Query$get_queryTemplate() {
        this.checkUninitializedProperty('QueryTemplate');
        return ((this.get_objectData().get_properties()['QueryTemplate']));
    },
    
    set_queryTemplate: function Microsoft_SharePoint_Client_Search_Query_Query$set_queryTemplate(value) {
        this.get_objectData().get_properties()['QueryTemplate'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'QueryTemplate', value));
        }
        return value;
    },
    
    get_queryTemplateParameters: function Microsoft_SharePoint_Client_Search_Query_Query$get_queryTemplateParameters() {
        this.checkUninitializedProperty('QueryTemplateParameters');
        return ((this.get_objectData().get_properties()['QueryTemplateParameters']));
    },
    
    get_queryText: function Microsoft_SharePoint_Client_Search_Query_Query$get_queryText() {
        this.checkUninitializedProperty('QueryText');
        return ((this.get_objectData().get_properties()['QueryText']));
    },
    
    set_queryText: function Microsoft_SharePoint_Client_Search_Query_Query$set_queryText(value) {
        this.get_objectData().get_properties()['QueryText'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'QueryText', value));
        }
        return value;
    },
    
    get_rankingModelId: function Microsoft_SharePoint_Client_Search_Query_Query$get_rankingModelId() {
        this.checkUninitializedProperty('RankingModelId');
        return ((this.get_objectData().get_properties()['RankingModelId']));
    },
    
    set_rankingModelId: function Microsoft_SharePoint_Client_Search_Query_Query$set_rankingModelId(value) {
        this.get_objectData().get_properties()['RankingModelId'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'RankingModelId', value));
        }
        return value;
    },
    
    get_resultsUrl: function Microsoft_SharePoint_Client_Search_Query_Query$get_resultsUrl() {
        this.checkUninitializedProperty('ResultsUrl');
        return ((this.get_objectData().get_properties()['ResultsUrl']));
    },
    
    set_resultsUrl: function Microsoft_SharePoint_Client_Search_Query_Query$set_resultsUrl(value) {
        this.get_objectData().get_properties()['ResultsUrl'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'ResultsUrl', value));
        }
        return value;
    },
    
    get_rowLimit: function Microsoft_SharePoint_Client_Search_Query_Query$get_rowLimit() {
        this.checkUninitializedProperty('RowLimit');
        return ((this.get_objectData().get_properties()['RowLimit']));
    },
    
    set_rowLimit: function Microsoft_SharePoint_Client_Search_Query_Query$set_rowLimit(value) {
        this.get_objectData().get_properties()['RowLimit'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'RowLimit', value));
        }
        return value;
    },
    
    get_rowsPerPage: function Microsoft_SharePoint_Client_Search_Query_Query$get_rowsPerPage() {
        this.checkUninitializedProperty('RowsPerPage');
        return ((this.get_objectData().get_properties()['RowsPerPage']));
    },
    
    set_rowsPerPage: function Microsoft_SharePoint_Client_Search_Query_Query$set_rowsPerPage(value) {
        this.get_objectData().get_properties()['RowsPerPage'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'RowsPerPage', value));
        }
        return value;
    },
    
    get_safeQueryPropertiesTemplateUrl: function Microsoft_SharePoint_Client_Search_Query_Query$get_safeQueryPropertiesTemplateUrl() {
        this.checkUninitializedProperty('SafeQueryPropertiesTemplateUrl');
        return ((this.get_objectData().get_properties()['SafeQueryPropertiesTemplateUrl']));
    },
    
    set_safeQueryPropertiesTemplateUrl: function Microsoft_SharePoint_Client_Search_Query_Query$set_safeQueryPropertiesTemplateUrl(value) {
        this.get_objectData().get_properties()['SafeQueryPropertiesTemplateUrl'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'SafeQueryPropertiesTemplateUrl', value));
        }
        return value;
    },
    
    get_showPeopleNameSuggestions: function Microsoft_SharePoint_Client_Search_Query_Query$get_showPeopleNameSuggestions() {
        this.checkUninitializedProperty('ShowPeopleNameSuggestions');
        return ((this.get_objectData().get_properties()['ShowPeopleNameSuggestions']));
    },
    
    set_showPeopleNameSuggestions: function Microsoft_SharePoint_Client_Search_Query_Query$set_showPeopleNameSuggestions(value) {
        this.get_objectData().get_properties()['ShowPeopleNameSuggestions'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'ShowPeopleNameSuggestions', value));
        }
        return value;
    },
    
    get_sourceId: function Microsoft_SharePoint_Client_Search_Query_Query$get_sourceId() {
        this.checkUninitializedProperty('SourceId');
        return ((this.get_objectData().get_properties()['SourceId']));
    },
    
    set_sourceId: function Microsoft_SharePoint_Client_Search_Query_Query$set_sourceId(value) {
        this.get_objectData().get_properties()['SourceId'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'SourceId', value));
        }
        return value;
    },
    
    get_startRow: function Microsoft_SharePoint_Client_Search_Query_Query$get_startRow() {
        this.checkUninitializedProperty('StartRow');
        return ((this.get_objectData().get_properties()['StartRow']));
    },
    
    set_startRow: function Microsoft_SharePoint_Client_Search_Query_Query$set_startRow(value) {
        this.get_objectData().get_properties()['StartRow'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'StartRow', value));
        }
        return value;
    },
    
    get_summaryLength: function Microsoft_SharePoint_Client_Search_Query_Query$get_summaryLength() {
        this.checkUninitializedProperty('SummaryLength');
        return ((this.get_objectData().get_properties()['SummaryLength']));
    },
    
    set_summaryLength: function Microsoft_SharePoint_Client_Search_Query_Query$set_summaryLength(value) {
        this.get_objectData().get_properties()['SummaryLength'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'SummaryLength', value));
        }
        return value;
    },
    
    get_timeout: function Microsoft_SharePoint_Client_Search_Query_Query$get_timeout() {
        this.checkUninitializedProperty('Timeout');
        return ((this.get_objectData().get_properties()['Timeout']));
    },
    
    set_timeout: function Microsoft_SharePoint_Client_Search_Query_Query$set_timeout(value) {
        this.get_objectData().get_properties()['Timeout'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Timeout', value));
        }
        return value;
    },
    
    get_totalRowsExactMinimum: function Microsoft_SharePoint_Client_Search_Query_Query$get_totalRowsExactMinimum() {
        this.checkUninitializedProperty('TotalRowsExactMinimum');
        return ((this.get_objectData().get_properties()['TotalRowsExactMinimum']));
    },
    
    set_totalRowsExactMinimum: function Microsoft_SharePoint_Client_Search_Query_Query$set_totalRowsExactMinimum(value) {
        this.get_objectData().get_properties()['TotalRowsExactMinimum'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'TotalRowsExactMinimum', value));
        }
        return value;
    },
    
    get_trimDuplicates: function Microsoft_SharePoint_Client_Search_Query_Query$get_trimDuplicates() {
        this.checkUninitializedProperty('TrimDuplicates');
        return ((this.get_objectData().get_properties()['TrimDuplicates']));
    },
    
    set_trimDuplicates: function Microsoft_SharePoint_Client_Search_Query_Query$set_trimDuplicates(value) {
        this.get_objectData().get_properties()['TrimDuplicates'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'TrimDuplicates', value));
        }
        return value;
    },
    
    get_uiLanguage: function Microsoft_SharePoint_Client_Search_Query_Query$get_uiLanguage() {
        this.checkUninitializedProperty('UILanguage');
        return ((this.get_objectData().get_properties()['UILanguage']));
    },
    
    set_uiLanguage: function Microsoft_SharePoint_Client_Search_Query_Query$set_uiLanguage(value) {
        this.get_objectData().get_properties()['UILanguage'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'UILanguage', value));
        }
        return value;
    },
    
    initPropertiesFromJson: function Microsoft_SharePoint_Client_Search_Query_Query$initPropertiesFromJson(parentNode) {
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
        $v_0 = parentNode.PropertiesToGenerateAcronyms;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('PropertiesToGenerateAcronyms', this.get_propertiesToGenerateAcronyms(), $v_0);
            this.get_propertiesToGenerateAcronyms().fromJson($v_0);
            delete parentNode.PropertiesToGenerateAcronyms;
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
    
    getQuerySuggestionsWithResults: function Microsoft_SharePoint_Client_Search_Query_Query$getQuerySuggestionsWithResults(iNumberOfQuerySuggestions, iNumberOfResultSuggestions, fPreQuerySuggestions, fHitHighlighting, fCapitalizeFirstLetters, fPrefixMatchAllTerms) {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'GetQuerySuggestionsWithResults', [ iNumberOfQuerySuggestions, iNumberOfResultSuggestions, fPreQuerySuggestions, fHitHighlighting, fCapitalizeFirstLetters, fPrefixMatchAllTerms ]);
        $v_0.addQuery($v_2);
        $v_1 = new Microsoft.SharePoint.Client.Search.Query.QuerySuggestionResults();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    },
    
    getQuerySuggestionsWithPopularResults: function Microsoft_SharePoint_Client_Search_Query_Query$getQuerySuggestionsWithPopularResults(iNumberOfQuerySuggestions, iNumberOfResultSuggestions, iNumberOfPopularResultSuggestions, fPreQuerySuggestions, fHitHighlighting, fCapitalizeFirstLetters, fPrefixMatchAllTerms) {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'GetQuerySuggestionsWithPopularResults', [ iNumberOfQuerySuggestions, iNumberOfResultSuggestions, iNumberOfPopularResultSuggestions, fPreQuerySuggestions, fHitHighlighting, fCapitalizeFirstLetters, fPrefixMatchAllTerms ]);
        $v_0.addQuery($v_2);
        $v_1 = new Microsoft.SharePoint.Client.Search.Query.QuerySuggestionResults();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    },
    
    getZeroTermsQuerySuggestionsWithResults: function Microsoft_SharePoint_Client_Search_Query_Query$getZeroTermsQuerySuggestionsWithResults(iNumberOfQuerySuggestions, iNumberOfResultSuggestions, fCapitalizeFirstLetters) {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'GetZeroTermsQuerySuggestionsWithResults', [ iNumberOfQuerySuggestions, iNumberOfResultSuggestions, fCapitalizeFirstLetters ]);
        $v_0.addQuery($v_2);
        $v_1 = new Microsoft.SharePoint.Client.Search.Query.QuerySuggestionResults();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    },
    
    getZeroTermsQuerySuggestionsWithPopularResults: function Microsoft_SharePoint_Client_Search_Query_Query$getZeroTermsQuerySuggestionsWithPopularResults(iNumberOfQuerySuggestions, iNumberOfResultSuggestions, iNumberOfPopularResultSuggestions, fCapitalizeFirstLetters) {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'GetZeroTermsQuerySuggestionsWithPopularResults', [ iNumberOfQuerySuggestions, iNumberOfResultSuggestions, iNumberOfPopularResultSuggestions, fCapitalizeFirstLetters ]);
        $v_0.addQuery($v_2);
        $v_1 = new Microsoft.SharePoint.Client.Search.Query.QuerySuggestionResults();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    },
    
    exportQueryLogs: function Microsoft_SharePoint_Client_Search_Query_Query$exportQueryLogs(userName, startTime) {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'ExportQueryLogs', [ userName, startTime ]);
        $v_0.addQuery($v_2);
        $v_1 = new SP.StringResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    },
    
    getQueryCompletions: function Microsoft_SharePoint_Client_Search_Query_Query$getQueryCompletions(numberOfCompletions, selectedSources, cursorPosition) {
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
    $P_1: null,
    $9_1: null,
    $D_1: 0,
    $1A_1: null,
    
    get_matches: function Microsoft_SharePoint_Client_Search_Query_QueryAutoCompletion$get_matches() {
        return this.$P_1;
    },
    
    set_matches: function Microsoft_SharePoint_Client_Search_Query_QueryAutoCompletion$set_matches(value) {
        this.$P_1 = value;
        return value;
    },
    
    get_query: function Microsoft_SharePoint_Client_Search_Query_QueryAutoCompletion$get_query() {
        return this.$9_1;
    },
    
    set_query: function Microsoft_SharePoint_Client_Search_Query_QueryAutoCompletion$set_query(value) {
        this.$9_1 = value;
        return value;
    },
    
    get_score: function Microsoft_SharePoint_Client_Search_Query_QueryAutoCompletion$get_score() {
        return this.$D_1;
    },
    
    set_score: function Microsoft_SharePoint_Client_Search_Query_QueryAutoCompletion$set_score(value) {
        this.$D_1 = value;
        return value;
    },
    
    get_source: function Microsoft_SharePoint_Client_Search_Query_QueryAutoCompletion$get_source() {
        return this.$1A_1;
    },
    
    set_source: function Microsoft_SharePoint_Client_Search_Query_QueryAutoCompletion$set_source(value) {
        this.$1A_1 = value;
        return value;
    },
    
    get_typeId: function Microsoft_SharePoint_Client_Search_Query_QueryAutoCompletion$get_typeId() {
        return '{a2967d9c-4de2-4b3e-b803-dde07acede25}';
    },
    
    writeToXml: function Microsoft_SharePoint_Client_Search_Query_QueryAutoCompletion$writeToXml(writer, serializationContext) {
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
    
    initPropertiesFromJson: function Microsoft_SharePoint_Client_Search_Query_QueryAutoCompletion$initPropertiesFromJson(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.Matches;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$P_1 = (([]));
            SP.DataConvert.populateArray(null, ((this.$P_1)), ($v_0));
            delete parentNode.Matches;
        }
        $v_0 = parentNode.Query;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$9_1 = ($v_0);
            delete parentNode.Query;
        }
        $v_0 = parentNode.Score;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$D_1 = ($v_0);
            delete parentNode.Score;
        }
        $v_0 = parentNode.Source;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1A_1 = ($v_0);
            delete parentNode.Source;
        }
    }
}


Microsoft.SharePoint.Client.Search.Query.QueryAutoCompletionMatch = function Microsoft_SharePoint_Client_Search_Query_QueryAutoCompletionMatch() {
    Microsoft.SharePoint.Client.Search.Query.QueryAutoCompletionMatch.initializeBase(this);
}
Microsoft.SharePoint.Client.Search.Query.QueryAutoCompletionMatch.prototype = {
    $Y_1: false,
    $s_1: null,
    $7_1: 0,
    $8_1: null,
    $D_1: 0,
    $1B_1: null,
    $G_1: 0,
    $1I_1: null,
    
    get_alternation: function Microsoft_SharePoint_Client_Search_Query_QueryAutoCompletionMatch$get_alternation() {
        return this.$Y_1;
    },
    
    set_alternation: function Microsoft_SharePoint_Client_Search_Query_QueryAutoCompletionMatch$set_alternation(value) {
        this.$Y_1 = value;
        return value;
    },
    
    get_key: function Microsoft_SharePoint_Client_Search_Query_QueryAutoCompletionMatch$get_key() {
        return this.$s_1;
    },
    
    set_key: function Microsoft_SharePoint_Client_Search_Query_QueryAutoCompletionMatch$set_key(value) {
        this.$s_1 = value;
        return value;
    },
    
    get_length: function Microsoft_SharePoint_Client_Search_Query_QueryAutoCompletionMatch$get_length() {
        return this.$7_1;
    },
    
    set_length: function Microsoft_SharePoint_Client_Search_Query_QueryAutoCompletionMatch$set_length(value) {
        this.$7_1 = value;
        return value;
    },
    
    get_matchType: function Microsoft_SharePoint_Client_Search_Query_QueryAutoCompletionMatch$get_matchType() {
        return this.$8_1;
    },
    
    set_matchType: function Microsoft_SharePoint_Client_Search_Query_QueryAutoCompletionMatch$set_matchType(value) {
        this.$8_1 = value;
        return value;
    },
    
    get_score: function Microsoft_SharePoint_Client_Search_Query_QueryAutoCompletionMatch$get_score() {
        return this.$D_1;
    },
    
    set_score: function Microsoft_SharePoint_Client_Search_Query_QueryAutoCompletionMatch$set_score(value) {
        this.$D_1 = value;
        return value;
    },
    
    get_sourceName: function Microsoft_SharePoint_Client_Search_Query_QueryAutoCompletionMatch$get_sourceName() {
        return this.$1B_1;
    },
    
    set_sourceName: function Microsoft_SharePoint_Client_Search_Query_QueryAutoCompletionMatch$set_sourceName(value) {
        this.$1B_1 = value;
        return value;
    },
    
    get_start: function Microsoft_SharePoint_Client_Search_Query_QueryAutoCompletionMatch$get_start() {
        return this.$G_1;
    },
    
    set_start: function Microsoft_SharePoint_Client_Search_Query_QueryAutoCompletionMatch$set_start(value) {
        this.$G_1 = value;
        return value;
    },
    
    get_value: function Microsoft_SharePoint_Client_Search_Query_QueryAutoCompletionMatch$get_value() {
        return this.$1I_1;
    },
    
    set_value: function Microsoft_SharePoint_Client_Search_Query_QueryAutoCompletionMatch$set_value(value) {
        this.$1I_1 = value;
        return value;
    },
    
    get_typeId: function Microsoft_SharePoint_Client_Search_Query_QueryAutoCompletionMatch$get_typeId() {
        return '{a2d57556-71dd-447a-8b8f-00ef0ae9afd5}';
    },
    
    writeToXml: function Microsoft_SharePoint_Client_Search_Query_QueryAutoCompletionMatch$writeToXml(writer, serializationContext) {
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
    
    initPropertiesFromJson: function Microsoft_SharePoint_Client_Search_Query_QueryAutoCompletionMatch$initPropertiesFromJson(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.Alternation;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$Y_1 = ($v_0);
            delete parentNode.Alternation;
        }
        $v_0 = parentNode.Key;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$s_1 = ($v_0);
            delete parentNode.Key;
        }
        $v_0 = parentNode.Length;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$7_1 = ($v_0);
            delete parentNode.Length;
        }
        $v_0 = parentNode.MatchType;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$8_1 = ($v_0);
            delete parentNode.MatchType;
        }
        $v_0 = parentNode.Score;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$D_1 = ($v_0);
            delete parentNode.Score;
        }
        $v_0 = parentNode.SourceName;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1B_1 = ($v_0);
            delete parentNode.SourceName;
        }
        $v_0 = parentNode.Start;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$G_1 = ($v_0);
            delete parentNode.Start;
        }
        $v_0 = parentNode.Value;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1I_1 = ($v_0);
            delete parentNode.Value;
        }
    }
}


Microsoft.SharePoint.Client.Search.Query.QueryAutoCompletionResults = function Microsoft_SharePoint_Client_Search_Query_QueryAutoCompletionResults() {
    Microsoft.SharePoint.Client.Search.Query.QueryAutoCompletionResults.initializeBase(this);
}
Microsoft.SharePoint.Client.Search.Query.QueryAutoCompletionResults.prototype = {
    $c_1: 0,
    $d_1: null,
    $1_1: null,
    
    get_coreExecutionTimeMs: function Microsoft_SharePoint_Client_Search_Query_QueryAutoCompletionResults$get_coreExecutionTimeMs() {
        return this.$c_1;
    },
    
    set_coreExecutionTimeMs: function Microsoft_SharePoint_Client_Search_Query_QueryAutoCompletionResults$set_coreExecutionTimeMs(value) {
        this.$c_1 = value;
        return value;
    },
    
    get_correlationId: function Microsoft_SharePoint_Client_Search_Query_QueryAutoCompletionResults$get_correlationId() {
        return this.$d_1;
    },
    
    set_correlationId: function Microsoft_SharePoint_Client_Search_Query_QueryAutoCompletionResults$set_correlationId(value) {
        this.$d_1 = value;
        return value;
    },
    
    get_queries: function Microsoft_SharePoint_Client_Search_Query_QueryAutoCompletionResults$get_queries() {
        return this.$1_1;
    },
    
    set_queries: function Microsoft_SharePoint_Client_Search_Query_QueryAutoCompletionResults$set_queries(value) {
        this.$1_1 = value;
        return value;
    },
    
    get_typeId: function Microsoft_SharePoint_Client_Search_Query_QueryAutoCompletionResults$get_typeId() {
        return '{a18d0722-e006-476b-b783-8f64c2859507}';
    },
    
    writeToXml: function Microsoft_SharePoint_Client_Search_Query_QueryAutoCompletionResults$writeToXml(writer, serializationContext) {
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
    
    initPropertiesFromJson: function Microsoft_SharePoint_Client_Search_Query_QueryAutoCompletionResults$initPropertiesFromJson(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.CoreExecutionTimeMs;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$c_1 = ($v_0);
            delete parentNode.CoreExecutionTimeMs;
        }
        $v_0 = parentNode.CorrelationId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$d_1 = ($v_0);
            delete parentNode.CorrelationId;
        }
        $v_0 = parentNode.Queries;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1_1 = (([]));
            SP.DataConvert.populateArray(null, ((this.$1_1)), ($v_0));
            delete parentNode.Queries;
        }
    }
}


Microsoft.SharePoint.Client.Search.Query.QueryPersonalizationData = function Microsoft_SharePoint_Client_Search_Query_QueryPersonalizationData(context, guidUserIdString) {
    Microsoft.SharePoint.Client.Search.Query.QueryPersonalizationData.initializeBase(this, [ context, SP.ClientUtility.getOrCreateObjectPathForConstructor(context, '{28d79f49-820a-4d51-bb2a-3309b3f4c54d}', arguments) ]);
}
Microsoft.SharePoint.Client.Search.Query.QueryPersonalizationData.newObject = function Microsoft_SharePoint_Client_Search_Query_QueryPersonalizationData$newObject(context, guidUserIdString) {
    return new Microsoft.SharePoint.Client.Search.Query.QueryPersonalizationData(context, new SP.ObjectPathConstructor(context, '{28d79f49-820a-4d51-bb2a-3309b3f4c54d}', [ guidUserIdString ]));
}


Microsoft.SharePoint.Client.Search.Query.QueryPropertyValue = function Microsoft_SharePoint_Client_Search_Query_QueryPropertyValue() {
    Microsoft.SharePoint.Client.Search.Query.QueryPropertyValue.initializeBase(this);
}
Microsoft.SharePoint.Client.Search.Query.QueryPropertyValue.prototype = {
    $J_1: false,
    $K_1: 0,
    $2_1: 0,
    $M_1: null,
    $N_1: null,
    
    get_boolVal: function Microsoft_SharePoint_Client_Search_Query_QueryPropertyValue$get_boolVal() {
        return this.$J_1;
    },
    
    set_boolVal: function Microsoft_SharePoint_Client_Search_Query_QueryPropertyValue$set_boolVal(value) {
        this.$J_1 = value;
        return value;
    },
    
    get_intVal: function Microsoft_SharePoint_Client_Search_Query_QueryPropertyValue$get_intVal() {
        return this.$K_1;
    },
    
    set_intVal: function Microsoft_SharePoint_Client_Search_Query_QueryPropertyValue$set_intVal(value) {
        this.$K_1 = value;
        return value;
    },
    
    get_queryPropertyValueTypeIndex: function Microsoft_SharePoint_Client_Search_Query_QueryPropertyValue$get_queryPropertyValueTypeIndex() {
        return this.$2_1;
    },
    
    set_queryPropertyValueTypeIndex: function Microsoft_SharePoint_Client_Search_Query_QueryPropertyValue$set_queryPropertyValueTypeIndex(value) {
        this.$2_1 = value;
        return value;
    },
    
    get_strArray: function Microsoft_SharePoint_Client_Search_Query_QueryPropertyValue$get_strArray() {
        return this.$M_1;
    },
    
    set_strArray: function Microsoft_SharePoint_Client_Search_Query_QueryPropertyValue$set_strArray(value) {
        this.$M_1 = value;
        return value;
    },
    
    get_strVal: function Microsoft_SharePoint_Client_Search_Query_QueryPropertyValue$get_strVal() {
        return this.$N_1;
    },
    
    set_strVal: function Microsoft_SharePoint_Client_Search_Query_QueryPropertyValue$set_strVal(value) {
        this.$N_1 = value;
        return value;
    },
    
    get_typeId: function Microsoft_SharePoint_Client_Search_Query_QueryPropertyValue$get_typeId() {
        return '{b25ba502-71d7-4ae4-a701-4ca2fb1223be}';
    },
    
    writeToXml: function Microsoft_SharePoint_Client_Search_Query_QueryPropertyValue$writeToXml(writer, serializationContext) {
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
    
    initPropertiesFromJson: function Microsoft_SharePoint_Client_Search_Query_QueryPropertyValue$initPropertiesFromJson(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.BoolVal;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$J_1 = ($v_0);
            delete parentNode.BoolVal;
        }
        $v_0 = parentNode.IntVal;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$K_1 = ($v_0);
            delete parentNode.IntVal;
        }
        $v_0 = parentNode.QueryPropertyValueTypeIndex;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$2_1 = ($v_0);
            delete parentNode.QueryPropertyValueTypeIndex;
        }
        $v_0 = parentNode.StrArray;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$M_1 = ((SP.DataConvert.fixupType(null, $v_0)));
            delete parentNode.StrArray;
        }
        $v_0 = parentNode.StrVal;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$N_1 = ($v_0);
            delete parentNode.StrVal;
        }
    }
}


Microsoft.SharePoint.Client.Search.Query.QuerySuggestionQuery = function Microsoft_SharePoint_Client_Search_Query_QuerySuggestionQuery() {
    Microsoft.SharePoint.Client.Search.Query.QuerySuggestionQuery.initializeBase(this);
}
Microsoft.SharePoint.Client.Search.Query.QuerySuggestionQuery.prototype = {
    $p_1: false,
    $9_1: null,
    
    get_isPersonal: function Microsoft_SharePoint_Client_Search_Query_QuerySuggestionQuery$get_isPersonal() {
        return this.$p_1;
    },
    
    set_isPersonal: function Microsoft_SharePoint_Client_Search_Query_QuerySuggestionQuery$set_isPersonal(value) {
        this.$p_1 = value;
        return value;
    },
    
    get_query: function Microsoft_SharePoint_Client_Search_Query_QuerySuggestionQuery$get_query() {
        return this.$9_1;
    },
    
    set_query: function Microsoft_SharePoint_Client_Search_Query_QuerySuggestionQuery$set_query(value) {
        this.$9_1 = value;
        return value;
    },
    
    get_typeId: function Microsoft_SharePoint_Client_Search_Query_QuerySuggestionQuery$get_typeId() {
        return '{44908c33-c578-4342-905a-ee284b67b415}';
    },
    
    writeToXml: function Microsoft_SharePoint_Client_Search_Query_QuerySuggestionQuery$writeToXml(writer, serializationContext) {
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
    
    initPropertiesFromJson: function Microsoft_SharePoint_Client_Search_Query_QuerySuggestionQuery$initPropertiesFromJson(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.IsPersonal;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$p_1 = ($v_0);
            delete parentNode.IsPersonal;
        }
        $v_0 = parentNode.Query;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$9_1 = ($v_0);
            delete parentNode.Query;
        }
    }
}


Microsoft.SharePoint.Client.Search.Query.QuerySuggestionRange = function Microsoft_SharePoint_Client_Search_Query_QuerySuggestionRange() {
    Microsoft.SharePoint.Client.Search.Query.QuerySuggestionRange.initializeBase(this);
}
Microsoft.SharePoint.Client.Search.Query.QuerySuggestionRange.prototype = {
    $7_1: 0,
    $G_1: 0,
    
    get_length: function Microsoft_SharePoint_Client_Search_Query_QuerySuggestionRange$get_length() {
        return this.$7_1;
    },
    
    set_length: function Microsoft_SharePoint_Client_Search_Query_QuerySuggestionRange$set_length(value) {
        this.$7_1 = value;
        return value;
    },
    
    get_start: function Microsoft_SharePoint_Client_Search_Query_QuerySuggestionRange$get_start() {
        return this.$G_1;
    },
    
    set_start: function Microsoft_SharePoint_Client_Search_Query_QuerySuggestionRange$set_start(value) {
        this.$G_1 = value;
        return value;
    },
    
    get_typeId: function Microsoft_SharePoint_Client_Search_Query_QuerySuggestionRange$get_typeId() {
        return '{6b42d4ee-3341-42eb-84b8-9dae18493482}';
    },
    
    writeToXml: function Microsoft_SharePoint_Client_Search_Query_QuerySuggestionRange$writeToXml(writer, serializationContext) {
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
    
    initPropertiesFromJson: function Microsoft_SharePoint_Client_Search_Query_QuerySuggestionRange$initPropertiesFromJson(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.Length;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$7_1 = ($v_0);
            delete parentNode.Length;
        }
        $v_0 = parentNode.Start;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$G_1 = ($v_0);
            delete parentNode.Start;
        }
    }
}


Microsoft.SharePoint.Client.Search.Query.QuerySuggestionResults = function Microsoft_SharePoint_Client_Search_Query_QuerySuggestionResults() {
    Microsoft.SharePoint.Client.Search.Query.QuerySuggestionResults.initializeBase(this);
}
Microsoft.SharePoint.Client.Search.Query.QuerySuggestionResults.prototype = {
    $x_1: null,
    $R_1: null,
    $S_1: null,
    $1_1: null,
    
    get_peopleNames: function Microsoft_SharePoint_Client_Search_Query_QuerySuggestionResults$get_peopleNames() {
        return this.$x_1;
    },
    
    set_peopleNames: function Microsoft_SharePoint_Client_Search_Query_QuerySuggestionResults$set_peopleNames(value) {
        this.$x_1 = value;
        return value;
    },
    
    get_personalResults: function Microsoft_SharePoint_Client_Search_Query_QuerySuggestionResults$get_personalResults() {
        return this.$R_1;
    },
    
    set_personalResults: function Microsoft_SharePoint_Client_Search_Query_QuerySuggestionResults$set_personalResults(value) {
        this.$R_1 = value;
        return value;
    },
    
    get_popularResults: function Microsoft_SharePoint_Client_Search_Query_QuerySuggestionResults$get_popularResults() {
        return this.$S_1;
    },
    
    set_popularResults: function Microsoft_SharePoint_Client_Search_Query_QuerySuggestionResults$set_popularResults(value) {
        this.$S_1 = value;
        return value;
    },
    
    get_queries: function Microsoft_SharePoint_Client_Search_Query_QuerySuggestionResults$get_queries() {
        return this.$1_1;
    },
    
    set_queries: function Microsoft_SharePoint_Client_Search_Query_QuerySuggestionResults$set_queries(value) {
        this.$1_1 = value;
        return value;
    },
    
    get_typeId: function Microsoft_SharePoint_Client_Search_Query_QuerySuggestionResults$get_typeId() {
        return '{ef071cb4-7fab-4e8d-9480-f15d30dc696d}';
    },
    
    writeToXml: function Microsoft_SharePoint_Client_Search_Query_QuerySuggestionResults$writeToXml(writer, serializationContext) {
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = [ 'PeopleNames', 'PersonalResults', 'PopularResults', 'Queries' ];
        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    
    initPropertiesFromJson: function Microsoft_SharePoint_Client_Search_Query_QuerySuggestionResults$initPropertiesFromJson(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.PeopleNames;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$x_1 = ((SP.DataConvert.fixupType(null, $v_0)));
            delete parentNode.PeopleNames;
        }
        $v_0 = parentNode.PersonalResults;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$R_1 = (([]));
            SP.DataConvert.populateArray(null, ((this.$R_1)), ($v_0));
            delete parentNode.PersonalResults;
        }
        $v_0 = parentNode.PopularResults;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$S_1 = (([]));
            SP.DataConvert.populateArray(null, ((this.$S_1)), ($v_0));
            delete parentNode.PopularResults;
        }
        $v_0 = parentNode.Queries;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1_1 = (([]));
            SP.DataConvert.populateArray(null, ((this.$1_1)), ($v_0));
            delete parentNode.Queries;
        }
    }
}


Microsoft.SharePoint.Client.Search.Query.RankingLabeling = function Microsoft_SharePoint_Client_Search_Query_RankingLabeling(context) {
    Microsoft.SharePoint.Client.Search.Query.RankingLabeling.initializeBase(this, [ context, SP.ClientUtility.getOrCreateObjectPathForConstructor(context, '{e2533389-4387-4ebe-8df7-11af5568aed5}', arguments) ]);
}
Microsoft.SharePoint.Client.Search.Query.RankingLabeling.newObject = function Microsoft_SharePoint_Client_Search_Query_RankingLabeling$newObject(context) {
    return new Microsoft.SharePoint.Client.Search.Query.RankingLabeling(context, new SP.ObjectPathConstructor(context, '{e2533389-4387-4ebe-8df7-11af5568aed5}', null));
}
Microsoft.SharePoint.Client.Search.Query.RankingLabeling.prototype = {
    
    getJudgementsForQuery: function Microsoft_SharePoint_Client_Search_Query_RankingLabeling$getJudgementsForQuery(query) {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'GetJudgementsForQuery', [ query ]);
        $v_0.addQuery($v_2);
        $v_1 = new SP.JsonObjectResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    },
    
    addJudgment: function Microsoft_SharePoint_Client_Search_Query_RankingLabeling$addJudgment(userQuery, url, labelId) {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'AddJudgment', [ userQuery, url, labelId ]);
        $v_0.addQuery($v_1);
    },
    
    normalizeResultUrl: function Microsoft_SharePoint_Client_Search_Query_RankingLabeling$normalizeResultUrl(url) {
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
    $Z_1: 0,
    $8_1: 0,
    $w_1: null,
    
    get_boost: function Microsoft_SharePoint_Client_Search_Query_ReorderingRule$get_boost() {
        return this.$Z_1;
    },
    
    set_boost: function Microsoft_SharePoint_Client_Search_Query_ReorderingRule$set_boost(value) {
        this.$Z_1 = value;
        return value;
    },
    
    get_matchType: function Microsoft_SharePoint_Client_Search_Query_ReorderingRule$get_matchType() {
        return this.$8_1;
    },
    
    set_matchType: function Microsoft_SharePoint_Client_Search_Query_ReorderingRule$set_matchType(value) {
        this.$8_1 = value;
        return value;
    },
    
    get_matchValue: function Microsoft_SharePoint_Client_Search_Query_ReorderingRule$get_matchValue() {
        return this.$w_1;
    },
    
    set_matchValue: function Microsoft_SharePoint_Client_Search_Query_ReorderingRule$set_matchValue(value) {
        this.$w_1 = value;
        return value;
    },
    
    get_typeId: function Microsoft_SharePoint_Client_Search_Query_ReorderingRule$get_typeId() {
        return '{d8566f46-74b1-4d92-ba88-0efd23b36f71}';
    },
    
    writeToXml: function Microsoft_SharePoint_Client_Search_Query_ReorderingRule$writeToXml(writer, serializationContext) {
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
    
    initPropertiesFromJson: function Microsoft_SharePoint_Client_Search_Query_ReorderingRule$initPropertiesFromJson(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.Boost;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$Z_1 = ($v_0);
            delete parentNode.Boost;
        }
        $v_0 = parentNode.MatchType;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$8_1 = ((SP.DataConvert.fixupType(null, $v_0)));
            delete parentNode.MatchType;
        }
        $v_0 = parentNode.MatchValue;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$w_1 = ($v_0);
            delete parentNode.MatchValue;
        }
    }
}


Microsoft.SharePoint.Client.Search.Query.ReorderingRuleCollection = function Microsoft_SharePoint_Client_Search_Query_ReorderingRuleCollection(context, objectPath) {
    Microsoft.SharePoint.Client.Search.Query.ReorderingRuleCollection.initializeBase(this, [ context, objectPath ]);
}
Microsoft.SharePoint.Client.Search.Query.ReorderingRuleCollection.prototype = {
    
    itemAt: function Microsoft_SharePoint_Client_Search_Query_ReorderingRuleCollection$itemAt(index) {
        return this.getItemAtIndex(index);
    },
    
    get_item: function Microsoft_SharePoint_Client_Search_Query_ReorderingRuleCollection$get_item(index) {
        return this.getItemAtIndex(index);
    },
    
    get_childItemType: function Microsoft_SharePoint_Client_Search_Query_ReorderingRuleCollection$get_childItemType() {
        return Microsoft.SharePoint.Client.Search.Query.ReorderingRule;
    },
    
    add: function Microsoft_SharePoint_Client_Search_Query_ReorderingRuleCollection$add(matchType, matchValue, boost) {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'Add', [ matchType, matchValue, boost ]);
        $v_0.addQuery($v_1);
    },
    
    clear: function Microsoft_SharePoint_Client_Search_Query_ReorderingRuleCollection$clear() {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'Clear', null);
        $v_0.addQuery($v_1);
    }
}


Microsoft.SharePoint.Client.Search.Query.ResultTable = function Microsoft_SharePoint_Client_Search_Query_ResultTable() {
    Microsoft.SharePoint.Client.Search.Query.ResultTable.initializeBase(this);
}
Microsoft.SharePoint.Client.Search.Query.ResultTable.prototype = {
    $1N_1: null,
    $1P_1: null,
    $3_1: null,
    $L_1: null,
    $1U_1: null,
    $1V_1: null,
    $1W_1: null,
    $1X_1: null,
    $1Y_1: 0,
    $1e_1: null,
    $1f_1: 0,
    $1g_1: 0,
    
    get_groupTemplateId: function Microsoft_SharePoint_Client_Search_Query_ResultTable$get_groupTemplateId() {
        return this.$1N_1;
    },
    
    get_itemTemplateId: function Microsoft_SharePoint_Client_Search_Query_ResultTable$get_itemTemplateId() {
        return this.$1P_1;
    },
    
    get_properties: function Microsoft_SharePoint_Client_Search_Query_ResultTable$get_properties() {
        return this.$3_1;
    },
    
    get_queryId: function Microsoft_SharePoint_Client_Search_Query_ResultTable$get_queryId() {
        return this.$L_1;
    },
    
    get_queryRuleId: function Microsoft_SharePoint_Client_Search_Query_ResultTable$get_queryRuleId() {
        return this.$1U_1;
    },
    
    get_resultRows: function Microsoft_SharePoint_Client_Search_Query_ResultTable$get_resultRows() {
        return this.$1V_1;
    },
    
    get_resultTitle: function Microsoft_SharePoint_Client_Search_Query_ResultTable$get_resultTitle() {
        return this.$1W_1;
    },
    
    get_resultTitleUrl: function Microsoft_SharePoint_Client_Search_Query_ResultTable$get_resultTitleUrl() {
        return this.$1X_1;
    },
    
    get_rowCount: function Microsoft_SharePoint_Client_Search_Query_ResultTable$get_rowCount() {
        return this.$1Y_1;
    },
    
    get_tableType: function Microsoft_SharePoint_Client_Search_Query_ResultTable$get_tableType() {
        return this.$1e_1;
    },
    
    get_totalRows: function Microsoft_SharePoint_Client_Search_Query_ResultTable$get_totalRows() {
        return this.$1f_1;
    },
    
    get_totalRowsIncludingDuplicates: function Microsoft_SharePoint_Client_Search_Query_ResultTable$get_totalRowsIncludingDuplicates() {
        return this.$1g_1;
    },
    
    get_typeId: function Microsoft_SharePoint_Client_Search_Query_ResultTable$get_typeId() {
        return '{6780df59-1036-4912-829b-432354f22656}';
    },
    
    writeToXml: function Microsoft_SharePoint_Client_Search_Query_ResultTable$writeToXml(writer, serializationContext) {
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
    
    initPropertiesFromJson: function Microsoft_SharePoint_Client_Search_Query_ResultTable$initPropertiesFromJson(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.GroupTemplateId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1N_1 = ($v_0);
            delete parentNode.GroupTemplateId;
        }
        $v_0 = parentNode.ItemTemplateId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1P_1 = ($v_0);
            delete parentNode.ItemTemplateId;
        }
        $v_0 = parentNode.Properties;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$3_1 = ((SP.DataConvert.fixupType(null, $v_0)));
            delete parentNode.Properties;
        }
        $v_0 = parentNode.QueryId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$L_1 = ($v_0);
            delete parentNode.QueryId;
        }
        $v_0 = parentNode.QueryRuleId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1U_1 = ($v_0);
            delete parentNode.QueryRuleId;
        }
        $v_0 = parentNode.ResultRows;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1V_1 = ((SP.DataConvert.fixupType(null, $v_0)));
            delete parentNode.ResultRows;
        }
        $v_0 = parentNode.ResultTitle;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1W_1 = ($v_0);
            delete parentNode.ResultTitle;
        }
        $v_0 = parentNode.ResultTitleUrl;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1X_1 = ($v_0);
            delete parentNode.ResultTitleUrl;
        }
        $v_0 = parentNode.RowCount;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1Y_1 = ($v_0);
            delete parentNode.RowCount;
        }
        $v_0 = parentNode.TableType;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1e_1 = ($v_0);
            delete parentNode.TableType;
        }
        $v_0 = parentNode.TotalRows;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1f_1 = ($v_0);
            delete parentNode.TotalRows;
        }
        $v_0 = parentNode.TotalRowsIncludingDuplicates;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1g_1 = ($v_0);
            delete parentNode.TotalRowsIncludingDuplicates;
        }
    }
}


Microsoft.SharePoint.Client.Search.Query.ResultTableCollection = function Microsoft_SharePoint_Client_Search_Query_ResultTableCollection() {
    Microsoft.SharePoint.Client.Search.Query.ResultTableCollection.initializeBase(this);
}
Microsoft.SharePoint.Client.Search.Query.ResultTableCollection.prototype = {
    $i_2: 0,
    $3_2: null,
    $1T_2: null,
    $L_2: null,
    $1c_2: null,
    $1h_2: null,
    
    add: function Microsoft_SharePoint_Client_Search_Query_ResultTableCollection$add(item) {
        this.addChild(item);
    },
    
    get_item: function Microsoft_SharePoint_Client_Search_Query_ResultTableCollection$get_item(index) {
        return this.getItemAtIndex(index);
    },
    
    get_elapsedTime: function Microsoft_SharePoint_Client_Search_Query_ResultTableCollection$get_elapsedTime() {
        return this.$i_2;
    },
    
    set_elapsedTime: function Microsoft_SharePoint_Client_Search_Query_ResultTableCollection$set_elapsedTime(value) {
        this.$i_2 = value;
        return value;
    },
    
    get_properties: function Microsoft_SharePoint_Client_Search_Query_ResultTableCollection$get_properties() {
        return this.$3_2;
    },
    
    get_queryErrors: function Microsoft_SharePoint_Client_Search_Query_ResultTableCollection$get_queryErrors() {
        return this.$1T_2;
    },
    
    get_queryId: function Microsoft_SharePoint_Client_Search_Query_ResultTableCollection$get_queryId() {
        return this.$L_2;
    },
    
    get_spellingSuggestion: function Microsoft_SharePoint_Client_Search_Query_ResultTableCollection$get_spellingSuggestion() {
        return this.$1c_2;
    },
    
    get_triggeredRules: function Microsoft_SharePoint_Client_Search_Query_ResultTableCollection$get_triggeredRules() {
        return this.$1h_2;
    },
    
    get_typeId: function Microsoft_SharePoint_Client_Search_Query_ResultTableCollection$get_typeId() {
        return '{11f20d08-7f42-49c1-8c0c-8ee4c32b203e}';
    },
    
    get_childItemsName: function Microsoft_SharePoint_Client_Search_Query_ResultTableCollection$get_childItemsName() {
        return 'ResultTables';
    },
    
    writeToXml: function Microsoft_SharePoint_Client_Search_Query_ResultTableCollection$writeToXml(writer, serializationContext) {
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
    
    initPropertiesFromJson: function Microsoft_SharePoint_Client_Search_Query_ResultTableCollection$initPropertiesFromJson(parentNode) {
        SP.ClientValueObjectCollection.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.ElapsedTime;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$i_2 = ($v_0);
            delete parentNode.ElapsedTime;
        }
        $v_0 = parentNode.Properties;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$3_2 = ((SP.DataConvert.fixupType(null, $v_0)));
            delete parentNode.Properties;
        }
        $v_0 = parentNode.QueryErrors;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1T_2 = ((SP.DataConvert.fixupType(null, $v_0)));
            delete parentNode.QueryErrors;
        }
        $v_0 = parentNode.QueryId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$L_2 = ($v_0);
            delete parentNode.QueryId;
        }
        $v_0 = parentNode.SpellingSuggestion;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1c_2 = ($v_0);
            delete parentNode.SpellingSuggestion;
        }
        $v_0 = parentNode.TriggeredRules;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1h_2 = ((SP.DataConvert.fixupType(null, $v_0)));
            delete parentNode.TriggeredRules;
        }
    }
}


Microsoft.SharePoint.Client.Search.Query.SearchExecutor = function Microsoft_SharePoint_Client_Search_Query_SearchExecutor(context) {
    Microsoft.SharePoint.Client.Search.Query.SearchExecutor.initializeBase(this, [ context, SP.ClientUtility.getOrCreateObjectPathForConstructor(context, '{8d2ac302-db2f-46fe-9015-872b35f15098}', arguments) ]);
}
Microsoft.SharePoint.Client.Search.Query.SearchExecutor.newObject = function Microsoft_SharePoint_Client_Search_Query_SearchExecutor$newObject(context) {
    return new Microsoft.SharePoint.Client.Search.Query.SearchExecutor(context, new SP.ObjectPathConstructor(context, '{8d2ac302-db2f-46fe-9015-872b35f15098}', null));
}
Microsoft.SharePoint.Client.Search.Query.SearchExecutor.prototype = {
    
    executeQuery: function Microsoft_SharePoint_Client_Search_Query_SearchExecutor$executeQuery(query) {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'ExecuteQuery', [ query ]);
        $v_0.addQuery($v_2);
        $v_1 = new SP.JsonObjectResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    },
    
    executeQueries: function Microsoft_SharePoint_Client_Search_Query_SearchExecutor$executeQueries(queryIds, queries, handleExceptions) {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'ExecuteQueries', [ queryIds, queries, handleExceptions ]);
        $v_0.addQuery($v_2);
        $v_1 = new SP.JsonObjectResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    },
    
    recordPageClick: function Microsoft_SharePoint_Client_Search_Query_SearchExecutor$recordPageClick(pageInfo, clickType, blockType, clickedResultId, subResultIndex, immediacySourceId, immediacyQueryString, immediacyTitle, immediacyUrl) {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'RecordPageClick', [ pageInfo, clickType, blockType, clickedResultId, subResultIndex, immediacySourceId, immediacyQueryString, immediacyTitle, immediacyUrl ]);
        $v_0.addQuery($v_1);
    },
    
    exportPopularQueries: function Microsoft_SharePoint_Client_Search_Query_SearchExecutor$exportPopularQueries(web, sourceId) {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'ExportPopularQueries', [ web, sourceId ]);
        $v_0.addQuery($v_2);
        $v_1 = new SP.JsonObjectResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    },
    
    getPromotedResults: function Microsoft_SharePoint_Client_Search_Query_SearchExecutor$getPromotedResults(siteCollectionLevel, offset, numberOfRules) {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'GetPromotedResults', [ siteCollectionLevel, offset, numberOfRules ]);
        $v_0.addQuery($v_2);
        $v_1 = new SP.JsonObjectResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    },
    
    getScsEndPointInfo: function Microsoft_SharePoint_Client_Search_Query_SearchExecutor$getScsEndPointInfo() {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'GetScsEndPointInfo', null);
        $v_0.addQuery($v_2);
        $v_1 = new SP.JsonObjectResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    },
    
    getScsPartialUpdateEndPointInfo: function Microsoft_SharePoint_Client_Search_Query_SearchExecutor$getScsPartialUpdateEndPointInfo() {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'GetScsPartialUpdateEndPointInfo', null);
        $v_0.addQuery($v_2);
        $v_1 = new SP.JsonObjectResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    },
    
    getQueryConfiguration: function Microsoft_SharePoint_Client_Search_Query_SearchExecutor$getQueryConfiguration(callLocalSearchFarmsOnly, skipGroupObjectIds) {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'GetQueryConfiguration', [ callLocalSearchFarmsOnly, skipGroupObjectIds ]);
        $v_0.addQuery($v_2);
        $v_1 = new SP.JsonObjectResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    },
    
    getSsaId: function Microsoft_SharePoint_Client_Search_Query_SearchExecutor$getSsaId() {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'GetSsaId', null);
        $v_0.addQuery($v_2);
        $v_1 = new SP.StringResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    }
}


Microsoft.SharePoint.Client.Search.Query.Sort = function Microsoft_SharePoint_Client_Search_Query_Sort() {
    Microsoft.SharePoint.Client.Search.Query.Sort.initializeBase(this);
}
Microsoft.SharePoint.Client.Search.Query.Sort.prototype = {
    $g_1: 0,
    $z_1: null,
    
    get_direction: function Microsoft_SharePoint_Client_Search_Query_Sort$get_direction() {
        return this.$g_1;
    },
    
    set_direction: function Microsoft_SharePoint_Client_Search_Query_Sort$set_direction(value) {
        this.$g_1 = value;
        return value;
    },
    
    get_property: function Microsoft_SharePoint_Client_Search_Query_Sort$get_property() {
        return this.$z_1;
    },
    
    set_property: function Microsoft_SharePoint_Client_Search_Query_Sort$set_property(value) {
        this.$z_1 = value;
        return value;
    },
    
    get_typeId: function Microsoft_SharePoint_Client_Search_Query_Sort$get_typeId() {
        return '{2cd54ef7-c2b3-4405-bce3-ec521d35a7eb}';
    },
    
    writeToXml: function Microsoft_SharePoint_Client_Search_Query_Sort$writeToXml(writer, serializationContext) {
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
    
    initPropertiesFromJson: function Microsoft_SharePoint_Client_Search_Query_Sort$initPropertiesFromJson(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.Direction;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$g_1 = ((SP.DataConvert.fixupType(null, $v_0)));
            delete parentNode.Direction;
        }
        $v_0 = parentNode.Property;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$z_1 = ($v_0);
            delete parentNode.Property;
        }
    }
}


Microsoft.SharePoint.Client.Search.Query.SortCollection = function Microsoft_SharePoint_Client_Search_Query_SortCollection(context, objectPath) {
    Microsoft.SharePoint.Client.Search.Query.SortCollection.initializeBase(this, [ context, objectPath ]);
}
Microsoft.SharePoint.Client.Search.Query.SortCollection.prototype = {
    
    itemAt: function Microsoft_SharePoint_Client_Search_Query_SortCollection$itemAt(index) {
        return this.getItemAtIndex(index);
    },
    
    get_item: function Microsoft_SharePoint_Client_Search_Query_SortCollection$get_item(index) {
        return this.getItemAtIndex(index);
    },
    
    get_childItemType: function Microsoft_SharePoint_Client_Search_Query_SortCollection$get_childItemType() {
        return Microsoft.SharePoint.Client.Search.Query.Sort;
    },
    
    add: function Microsoft_SharePoint_Client_Search_Query_SortCollection$add(strProperty, direction) {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'Add', [ strProperty, direction ]);
        $v_0.addQuery($v_1);
    },
    
    clear: function Microsoft_SharePoint_Client_Search_Query_SortCollection$clear() {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'Clear', null);
        $v_0.addQuery($v_1);
    }
}


Microsoft.SharePoint.Client.Search.Query.StringCollection = function Microsoft_SharePoint_Client_Search_Query_StringCollection(context) {
    Microsoft.SharePoint.Client.Search.Query.StringCollection.initializeBase(this, [ context, SP.ClientUtility.getOrCreateObjectPathForConstructor(context, '{17c6c8ba-c570-4db1-993a-fbacf4e4ef07}', arguments) ]);
}
Microsoft.SharePoint.Client.Search.Query.StringCollection.newObject = function Microsoft_SharePoint_Client_Search_Query_StringCollection$newObject(context) {
    return new Microsoft.SharePoint.Client.Search.Query.StringCollection(context, new SP.ObjectPathConstructor(context, '{17c6c8ba-c570-4db1-993a-fbacf4e4ef07}', null));
}
Microsoft.SharePoint.Client.Search.Query.StringCollection.prototype = {
    
    itemAt: function Microsoft_SharePoint_Client_Search_Query_StringCollection$itemAt(index) {
        return this.getItemAtIndex(index);
    },
    
    get_item: function Microsoft_SharePoint_Client_Search_Query_StringCollection$get_item(index) {
        return this.getItemAtIndex(index);
    },
    
    get_childItemType: function Microsoft_SharePoint_Client_Search_Query_StringCollection$get_childItemType() {
        return String;
    },
    
    add: function Microsoft_SharePoint_Client_Search_Query_StringCollection$add(property) {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'Add', [ property ]);
        $v_0.addQuery($v_1);
    },
    
    clear: function Microsoft_SharePoint_Client_Search_Query_StringCollection$clear() {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'Clear', null);
        $v_0.addQuery($v_1);
    }
}


Microsoft.SharePoint.Client.Search.Query.TenantCustomQuerySuggestions = function Microsoft_SharePoint_Client_Search_Query_TenantCustomQuerySuggestions() {
    Microsoft.SharePoint.Client.Search.Query.TenantCustomQuerySuggestions.initializeBase(this);
}
Microsoft.SharePoint.Client.Search.Query.TenantCustomQuerySuggestions.prototype = {
    $4_1: null,
    $Q_1: null,
    
    get_alwaysSuggest: function Microsoft_SharePoint_Client_Search_Query_TenantCustomQuerySuggestions$get_alwaysSuggest() {
        return this.$4_1;
    },
    
    set_alwaysSuggest: function Microsoft_SharePoint_Client_Search_Query_TenantCustomQuerySuggestions$set_alwaysSuggest(value) {
        this.$4_1 = value;
        return value;
    },
    
    get_neverSuggest: function Microsoft_SharePoint_Client_Search_Query_TenantCustomQuerySuggestions$get_neverSuggest() {
        return this.$Q_1;
    },
    
    set_neverSuggest: function Microsoft_SharePoint_Client_Search_Query_TenantCustomQuerySuggestions$set_neverSuggest(value) {
        this.$Q_1 = value;
        return value;
    },
    
    get_typeId: function Microsoft_SharePoint_Client_Search_Query_TenantCustomQuerySuggestions$get_typeId() {
        return '{32ed9eff-8b6e-492e-8084-63f8dcebffe3}';
    },
    
    writeToXml: function Microsoft_SharePoint_Client_Search_Query_TenantCustomQuerySuggestions$writeToXml(writer, serializationContext) {
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = [ 'AlwaysSuggest', 'NeverSuggest' ];
        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    
    initPropertiesFromJson: function Microsoft_SharePoint_Client_Search_Query_TenantCustomQuerySuggestions$initPropertiesFromJson(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.AlwaysSuggest;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$4_1 = (([]));
            SP.DataConvert.populateArray(null, ((this.$4_1)), ($v_0));
            delete parentNode.AlwaysSuggest;
        }
        $v_0 = parentNode.NeverSuggest;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$Q_1 = (([]));
            SP.DataConvert.populateArray(null, ((this.$Q_1)), ($v_0));
            delete parentNode.NeverSuggest;
        }
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
    none: 0, 
    sharePointOnly: 1, 
    sharePointSharedOnly: 2, 
    oneDriveWeb: 4, 
    sharePointSharedLssOdbMerged: 8
}
Microsoft.Office.Server.Search.REST.QueryState.registerEnum('Microsoft.Office.Server.Search.REST.QueryState', false);


Microsoft.Office.Server.Search.REST.ContextCondition = function Microsoft_Office_Server_Search_REST_ContextCondition() {
    Microsoft.Office.Server.Search.REST.ContextCondition.initializeBase(this);
}
Microsoft.Office.Server.Search.REST.ContextCondition.prototype = {
    $b_1: null,
    $F_1: null,
    
    get_contextConditionType: function Microsoft_Office_Server_Search_REST_ContextCondition$get_contextConditionType() {
        return this.$b_1;
    },
    
    set_contextConditionType: function Microsoft_Office_Server_Search_REST_ContextCondition$set_contextConditionType(value) {
        this.$b_1 = value;
        return value;
    },
    
    get_sourceId: function Microsoft_Office_Server_Search_REST_ContextCondition$get_sourceId() {
        return this.$F_1;
    },
    
    set_sourceId: function Microsoft_Office_Server_Search_REST_ContextCondition$set_sourceId(value) {
        this.$F_1 = value;
        return value;
    },
    
    get_typeId: function Microsoft_Office_Server_Search_REST_ContextCondition$get_typeId() {
        return '{d1d5434c-02e4-4e69-81cd-3f4e1a07937d}';
    },
    
    writeToXml: function Microsoft_Office_Server_Search_REST_ContextCondition$writeToXml(writer, serializationContext) {
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
    
    initPropertiesFromJson: function Microsoft_Office_Server_Search_REST_ContextCondition$initPropertiesFromJson(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.ContextConditionType;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$b_1 = ($v_0);
            delete parentNode.ContextConditionType;
        }
        $v_0 = parentNode.SourceId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$F_1 = ($v_0);
            delete parentNode.SourceId;
        }
    }
}


Microsoft.Office.Server.Search.REST.ExpandedQueryParameters = function Microsoft_Office_Server_Search_REST_ExpandedQueryParameters() {
    Microsoft.Office.Server.Search.REST.ExpandedQueryParameters.initializeBase(this);
}
Microsoft.Office.Server.Search.REST.ExpandedQueryParameters.prototype = {
    $3_1: null,
    
    get_properties: function Microsoft_Office_Server_Search_REST_ExpandedQueryParameters$get_properties() {
        return this.$3_1;
    },
    
    set_properties: function Microsoft_Office_Server_Search_REST_ExpandedQueryParameters$set_properties(value) {
        this.$3_1 = value;
        return value;
    },
    
    get_typeId: function Microsoft_Office_Server_Search_REST_ExpandedQueryParameters$get_typeId() {
        return '{22ccde11-b3ce-403a-8c87-28ef2f5fd3e9}';
    },
    
    writeToXml: function Microsoft_Office_Server_Search_REST_ExpandedQueryParameters$writeToXml(writer, serializationContext) {
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
    
    initPropertiesFromJson: function Microsoft_Office_Server_Search_REST_ExpandedQueryParameters$initPropertiesFromJson(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.Properties;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$3_1 = ((SP.DataConvert.fixupType(null, $v_0)));
            delete parentNode.Properties;
        }
    }
}


Microsoft.Office.Server.Search.REST.PromotedResultQueryRule = function Microsoft_Office_Server_Search_REST_PromotedResultQueryRule() {
    Microsoft.Office.Server.Search.REST.PromotedResultQueryRule.initializeBase(this);
}
Microsoft.Office.Server.Search.REST.PromotedResultQueryRule.prototype = {
    $a_1: null,
    $O_1: null,
    $e_1: null,
    $h_1: null,
    $j_1: null,
    $q_1: false,
    $t_1: null,
    $T_1: null,
    $U_1: null,
    $16_1: null,
    $1E_1: null,
    
    get_contact: function Microsoft_Office_Server_Search_REST_PromotedResultQueryRule$get_contact() {
        return this.$a_1;
    },
    
    set_contact: function Microsoft_Office_Server_Search_REST_PromotedResultQueryRule$set_contact(value) {
        this.$a_1 = value;
        return value;
    },
    
    get_contextConditions: function Microsoft_Office_Server_Search_REST_PromotedResultQueryRule$get_contextConditions() {
        return this.$O_1;
    },
    
    set_contextConditions: function Microsoft_Office_Server_Search_REST_PromotedResultQueryRule$set_contextConditions(value) {
        this.$O_1 = value;
        return value;
    },
    
    get_creationDate: function Microsoft_Office_Server_Search_REST_PromotedResultQueryRule$get_creationDate() {
        return this.$e_1;
    },
    
    set_creationDate: function Microsoft_Office_Server_Search_REST_PromotedResultQueryRule$set_creationDate(value) {
        this.$e_1 = value;
        return value;
    },
    
    get_displayName: function Microsoft_Office_Server_Search_REST_PromotedResultQueryRule$get_displayName() {
        return this.$h_1;
    },
    
    set_displayName: function Microsoft_Office_Server_Search_REST_PromotedResultQueryRule$set_displayName(value) {
        this.$h_1 = value;
        return value;
    },
    
    get_endDate: function Microsoft_Office_Server_Search_REST_PromotedResultQueryRule$get_endDate() {
        return this.$j_1;
    },
    
    set_endDate: function Microsoft_Office_Server_Search_REST_PromotedResultQueryRule$set_endDate(value) {
        this.$j_1 = value;
        return value;
    },
    
    get_isPromotedResultsOnly: function Microsoft_Office_Server_Search_REST_PromotedResultQueryRule$get_isPromotedResultsOnly() {
        return this.$q_1;
    },
    
    set_isPromotedResultsOnly: function Microsoft_Office_Server_Search_REST_PromotedResultQueryRule$set_isPromotedResultsOnly(value) {
        this.$q_1 = value;
        return value;
    },
    
    get_lastModifiedDate: function Microsoft_Office_Server_Search_REST_PromotedResultQueryRule$get_lastModifiedDate() {
        return this.$t_1;
    },
    
    set_lastModifiedDate: function Microsoft_Office_Server_Search_REST_PromotedResultQueryRule$set_lastModifiedDate(value) {
        this.$t_1 = value;
        return value;
    },
    
    get_promotedResults: function Microsoft_Office_Server_Search_REST_PromotedResultQueryRule$get_promotedResults() {
        return this.$T_1;
    },
    
    set_promotedResults: function Microsoft_Office_Server_Search_REST_PromotedResultQueryRule$set_promotedResults(value) {
        this.$T_1 = value;
        return value;
    },
    
    get_queryConditions: function Microsoft_Office_Server_Search_REST_PromotedResultQueryRule$get_queryConditions() {
        return this.$U_1;
    },
    
    set_queryConditions: function Microsoft_Office_Server_Search_REST_PromotedResultQueryRule$set_queryConditions(value) {
        this.$U_1 = value;
        return value;
    },
    
    get_reviewDate: function Microsoft_Office_Server_Search_REST_PromotedResultQueryRule$get_reviewDate() {
        return this.$16_1;
    },
    
    set_reviewDate: function Microsoft_Office_Server_Search_REST_PromotedResultQueryRule$set_reviewDate(value) {
        this.$16_1 = value;
        return value;
    },
    
    get_startDate: function Microsoft_Office_Server_Search_REST_PromotedResultQueryRule$get_startDate() {
        return this.$1E_1;
    },
    
    set_startDate: function Microsoft_Office_Server_Search_REST_PromotedResultQueryRule$set_startDate(value) {
        this.$1E_1 = value;
        return value;
    },
    
    get_typeId: function Microsoft_Office_Server_Search_REST_PromotedResultQueryRule$get_typeId() {
        return '{3d66dac4-a5ad-4b67-812b-937c59223204}';
    },
    
    writeToXml: function Microsoft_Office_Server_Search_REST_PromotedResultQueryRule$writeToXml(writer, serializationContext) {
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
    
    initPropertiesFromJson: function Microsoft_Office_Server_Search_REST_PromotedResultQueryRule$initPropertiesFromJson(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.Contact;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$a_1 = ($v_0);
            delete parentNode.Contact;
        }
        $v_0 = parentNode.ContextConditions;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$O_1 = (([]));
            SP.DataConvert.populateArray(null, ((this.$O_1)), ($v_0));
            delete parentNode.ContextConditions;
        }
        $v_0 = parentNode.CreationDate;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$e_1 = ($v_0);
            delete parentNode.CreationDate;
        }
        $v_0 = parentNode.DisplayName;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$h_1 = ($v_0);
            delete parentNode.DisplayName;
        }
        $v_0 = parentNode.EndDate;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$j_1 = ($v_0);
            delete parentNode.EndDate;
        }
        $v_0 = parentNode.IsPromotedResultsOnly;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$q_1 = ($v_0);
            delete parentNode.IsPromotedResultsOnly;
        }
        $v_0 = parentNode.LastModifiedDate;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$t_1 = ($v_0);
            delete parentNode.LastModifiedDate;
        }
        $v_0 = parentNode.PromotedResults;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$T_1 = (([]));
            SP.DataConvert.populateArray(null, ((this.$T_1)), ($v_0));
            delete parentNode.PromotedResults;
        }
        $v_0 = parentNode.QueryConditions;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$U_1 = (([]));
            SP.DataConvert.populateArray(null, ((this.$U_1)), ($v_0));
            delete parentNode.QueryConditions;
        }
        $v_0 = parentNode.ReviewDate;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$16_1 = ($v_0);
            delete parentNode.ReviewDate;
        }
        $v_0 = parentNode.StartDate;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1E_1 = ($v_0);
            delete parentNode.StartDate;
        }
    }
}


Microsoft.Office.Server.Search.REST.PromotedResults = function Microsoft_Office_Server_Search_REST_PromotedResults() {
    Microsoft.Office.Server.Search.REST.PromotedResults.initializeBase(this);
}
Microsoft.Office.Server.Search.REST.PromotedResults.prototype = {
    $f_1: null,
    $r_1: false,
    $u_1: null,
    $H_1: null,
    $I_1: null,
    
    get_description: function Microsoft_Office_Server_Search_REST_PromotedResults$get_description() {
        return this.$f_1;
    },
    
    set_description: function Microsoft_Office_Server_Search_REST_PromotedResults$set_description(value) {
        this.$f_1 = value;
        return value;
    },
    
    get_isVisual: function Microsoft_Office_Server_Search_REST_PromotedResults$get_isVisual() {
        return this.$r_1;
    },
    
    set_isVisual: function Microsoft_Office_Server_Search_REST_PromotedResults$set_isVisual(value) {
        this.$r_1 = value;
        return value;
    },
    
    get_lastModifiedTime: function Microsoft_Office_Server_Search_REST_PromotedResults$get_lastModifiedTime() {
        return this.$u_1;
    },
    
    set_lastModifiedTime: function Microsoft_Office_Server_Search_REST_PromotedResults$set_lastModifiedTime(value) {
        this.$u_1 = value;
        return value;
    },
    
    get_title: function Microsoft_Office_Server_Search_REST_PromotedResults$get_title() {
        return this.$H_1;
    },
    
    set_title: function Microsoft_Office_Server_Search_REST_PromotedResults$set_title(value) {
        this.$H_1 = value;
        return value;
    },
    
    get_url: function Microsoft_Office_Server_Search_REST_PromotedResults$get_url() {
        return this.$I_1;
    },
    
    set_url: function Microsoft_Office_Server_Search_REST_PromotedResults$set_url(value) {
        this.$I_1 = value;
        return value;
    },
    
    get_typeId: function Microsoft_Office_Server_Search_REST_PromotedResults$get_typeId() {
        return '{eb8e9d33-5adf-40dc-883a-e4e862070e71}';
    },
    
    writeToXml: function Microsoft_Office_Server_Search_REST_PromotedResults$writeToXml(writer, serializationContext) {
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
    
    initPropertiesFromJson: function Microsoft_Office_Server_Search_REST_PromotedResults$initPropertiesFromJson(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.Description;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$f_1 = ($v_0);
            delete parentNode.Description;
        }
        $v_0 = parentNode.IsVisual;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$r_1 = ($v_0);
            delete parentNode.IsVisual;
        }
        $v_0 = parentNode.LastModifiedTime;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$u_1 = ($v_0);
            delete parentNode.LastModifiedTime;
        }
        $v_0 = parentNode.Title;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$H_1 = ($v_0);
            delete parentNode.Title;
        }
        $v_0 = parentNode.Url;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$I_1 = ($v_0);
            delete parentNode.Url;
        }
    }
}


Microsoft.Office.Server.Search.REST.PromotedResultsOperationsResult = function Microsoft_Office_Server_Search_REST_PromotedResultsOperationsResult() {
    Microsoft.Office.Server.Search.REST.PromotedResultsOperationsResult.initializeBase(this);
}
Microsoft.Office.Server.Search.REST.PromotedResultsOperationsResult.prototype = {
    $V_1: null,
    $18_1: null,
    
    get_result: function Microsoft_Office_Server_Search_REST_PromotedResultsOperationsResult$get_result() {
        return this.$V_1;
    },
    
    set_result: function Microsoft_Office_Server_Search_REST_PromotedResultsOperationsResult$set_result(value) {
        this.$V_1 = value;
        return value;
    },
    
    get_searchObjectOwner: function Microsoft_Office_Server_Search_REST_PromotedResultsOperationsResult$get_searchObjectOwner() {
        return this.$18_1;
    },
    
    set_searchObjectOwner: function Microsoft_Office_Server_Search_REST_PromotedResultsOperationsResult$set_searchObjectOwner(value) {
        this.$18_1 = value;
        return value;
    },
    
    get_typeId: function Microsoft_Office_Server_Search_REST_PromotedResultsOperationsResult$get_typeId() {
        return '{79c14aea-3c92-4181-932b-a4db9d0ff597}';
    },
    
    writeToXml: function Microsoft_Office_Server_Search_REST_PromotedResultsOperationsResult$writeToXml(writer, serializationContext) {
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
    
    initPropertiesFromJson: function Microsoft_Office_Server_Search_REST_PromotedResultsOperationsResult$initPropertiesFromJson(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.Result;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$V_1 = (([]));
            SP.DataConvert.populateArray(null, ((this.$V_1)), ($v_0));
            delete parentNode.Result;
        }
        $v_0 = parentNode.SearchObjectOwner;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$18_1 = ((SP.DataConvert.fixupType(null, $v_0)));
            delete parentNode.SearchObjectOwner;
        }
    }
}


Microsoft.Office.Server.Search.REST.QueryCondition = function Microsoft_Office_Server_Search_REST_QueryCondition() {
    Microsoft.Office.Server.Search.REST.QueryCondition.initializeBase(this);
}
Microsoft.Office.Server.Search.REST.QueryCondition.prototype = {
    $0_1: 0,
    $v_1: null,
    $11_1: null,
    $1F_1: null,
    $1H_1: null,
    
    get_LCID: function Microsoft_Office_Server_Search_REST_QueryCondition$get_LCID() {
        return this.$0_1;
    },
    
    set_LCID: function Microsoft_Office_Server_Search_REST_QueryCondition$set_LCID(value) {
        this.$0_1 = value;
        return value;
    },
    
    get_matchingOptions: function Microsoft_Office_Server_Search_REST_QueryCondition$get_matchingOptions() {
        return this.$v_1;
    },
    
    set_matchingOptions: function Microsoft_Office_Server_Search_REST_QueryCondition$set_matchingOptions(value) {
        this.$v_1 = value;
        return value;
    },
    
    get_queryConditionType: function Microsoft_Office_Server_Search_REST_QueryCondition$get_queryConditionType() {
        return this.$11_1;
    },
    
    set_queryConditionType: function Microsoft_Office_Server_Search_REST_QueryCondition$set_queryConditionType(value) {
        this.$11_1 = value;
        return value;
    },
    
    get_subjectTermsOrigin: function Microsoft_Office_Server_Search_REST_QueryCondition$get_subjectTermsOrigin() {
        return this.$1F_1;
    },
    
    set_subjectTermsOrigin: function Microsoft_Office_Server_Search_REST_QueryCondition$set_subjectTermsOrigin(value) {
        this.$1F_1 = value;
        return value;
    },
    
    get_terms: function Microsoft_Office_Server_Search_REST_QueryCondition$get_terms() {
        return this.$1H_1;
    },
    
    set_terms: function Microsoft_Office_Server_Search_REST_QueryCondition$set_terms(value) {
        this.$1H_1 = value;
        return value;
    },
    
    get_typeId: function Microsoft_Office_Server_Search_REST_QueryCondition$get_typeId() {
        return '{ff443aec-c8ee-49ea-8e57-4678d78000a5}';
    },
    
    writeToXml: function Microsoft_Office_Server_Search_REST_QueryCondition$writeToXml(writer, serializationContext) {
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
    
    initPropertiesFromJson: function Microsoft_Office_Server_Search_REST_QueryCondition$initPropertiesFromJson(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.LCID;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$0_1 = ($v_0);
            delete parentNode.LCID;
        }
        $v_0 = parentNode.MatchingOptions;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$v_1 = ($v_0);
            delete parentNode.MatchingOptions;
        }
        $v_0 = parentNode.QueryConditionType;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$11_1 = ($v_0);
            delete parentNode.QueryConditionType;
        }
        $v_0 = parentNode.SubjectTermsOrigin;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1F_1 = ($v_0);
            delete parentNode.SubjectTermsOrigin;
        }
        $v_0 = parentNode.Terms;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1H_1 = ((SP.DataConvert.fixupType(null, $v_0)));
            delete parentNode.Terms;
        }
    }
}


Microsoft.Office.Server.Search.REST.QueryConfiguration = function Microsoft_Office_Server_Search_REST_QueryConfiguration() {
    Microsoft.Office.Server.Search.REST.QueryConfiguration.initializeBase(this);
}
Microsoft.Office.Server.Search.REST.QueryConfiguration.prototype = {
    $A_1: null,
    $13_1: null,
    $14_1: null,
    $5_1: null,
    
    get_queryContext: function Microsoft_Office_Server_Search_REST_QueryConfiguration$get_queryContext() {
        return this.$A_1;
    },
    
    set_queryContext: function Microsoft_Office_Server_Search_REST_QueryConfiguration$set_queryContext(value) {
        this.$A_1 = value;
        return value;
    },
    
    get_queryParameters: function Microsoft_Office_Server_Search_REST_QueryConfiguration$get_queryParameters() {
        return this.$13_1;
    },
    
    set_queryParameters: function Microsoft_Office_Server_Search_REST_QueryConfiguration$set_queryParameters(value) {
        this.$13_1 = value;
        return value;
    },
    
    get_queryRoutingInfo: function Microsoft_Office_Server_Search_REST_QueryConfiguration$get_queryRoutingInfo() {
        return this.$14_1;
    },
    
    set_queryRoutingInfo: function Microsoft_Office_Server_Search_REST_QueryConfiguration$set_queryRoutingInfo(value) {
        this.$14_1 = value;
        return value;
    },
    
    get_searchEndpoints: function Microsoft_Office_Server_Search_REST_QueryConfiguration$get_searchEndpoints() {
        return this.$5_1;
    },
    
    set_searchEndpoints: function Microsoft_Office_Server_Search_REST_QueryConfiguration$set_searchEndpoints(value) {
        this.$5_1 = value;
        return value;
    },
    
    get_typeId: function Microsoft_Office_Server_Search_REST_QueryConfiguration$get_typeId() {
        return '{146af15d-376d-4e37-b8e5-0522f2b3fff8}';
    },
    
    writeToXml: function Microsoft_Office_Server_Search_REST_QueryConfiguration$writeToXml(writer, serializationContext) {
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
    
    initPropertiesFromJson: function Microsoft_Office_Server_Search_REST_QueryConfiguration$initPropertiesFromJson(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.QueryContext;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$A_1 = ((SP.DataConvert.fixupType(null, $v_0)));
            delete parentNode.QueryContext;
        }
        $v_0 = parentNode.QueryParameters;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$13_1 = ((SP.DataConvert.fixupType(null, $v_0)));
            delete parentNode.QueryParameters;
        }
        $v_0 = parentNode.QueryRoutingInfo;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$14_1 = ((SP.DataConvert.fixupType(null, $v_0)));
            delete parentNode.QueryRoutingInfo;
        }
        $v_0 = parentNode.SearchEndpoints;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$5_1 = ((SP.DataConvert.fixupType(null, $v_0)));
            delete parentNode.SearchEndpoints;
        }
    }
}


Microsoft.Office.Server.Search.REST.QueryContext = function Microsoft_Office_Server_Search_REST_QueryContext() {
    Microsoft.Office.Server.Search.REST.QueryContext.initializeBase(this);
}
Microsoft.Office.Server.Search.REST.QueryContext.prototype = {
    $m_1: null,
    $y_1: null,
    $17_1: null,
    $1C_1: null,
    $1D_1: null,
    
    get_groupObjectIds: function Microsoft_Office_Server_Search_REST_QueryContext$get_groupObjectIds() {
        return this.$m_1;
    },
    
    set_groupObjectIds: function Microsoft_Office_Server_Search_REST_QueryContext$set_groupObjectIds(value) {
        this.$m_1 = value;
        return value;
    },
    
    get_portalUrl: function Microsoft_Office_Server_Search_REST_QueryContext$get_portalUrl() {
        return this.$y_1;
    },
    
    set_portalUrl: function Microsoft_Office_Server_Search_REST_QueryContext$set_portalUrl(value) {
        this.$y_1 = value;
        return value;
    },
    
    get_roleIds: function Microsoft_Office_Server_Search_REST_QueryContext$get_roleIds() {
        return this.$17_1;
    },
    
    set_roleIds: function Microsoft_Office_Server_Search_REST_QueryContext$set_roleIds(value) {
        this.$17_1 = value;
        return value;
    },
    
    get_spSiteId: function Microsoft_Office_Server_Search_REST_QueryContext$get_spSiteId() {
        return this.$1C_1;
    },
    
    set_spSiteId: function Microsoft_Office_Server_Search_REST_QueryContext$set_spSiteId(value) {
        this.$1C_1 = value;
        return value;
    },
    
    get_spWebId: function Microsoft_Office_Server_Search_REST_QueryContext$get_spWebId() {
        return this.$1D_1;
    },
    
    set_spWebId: function Microsoft_Office_Server_Search_REST_QueryContext$set_spWebId(value) {
        this.$1D_1 = value;
        return value;
    },
    
    get_typeId: function Microsoft_Office_Server_Search_REST_QueryContext$get_typeId() {
        return '{98ab242f-d338-4d4d-9578-a4d6851873b4}';
    },
    
    writeToXml: function Microsoft_Office_Server_Search_REST_QueryContext$writeToXml(writer, serializationContext) {
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = [ 'GroupObjectIds', 'PortalUrl', 'RoleIds', 'SpSiteId', 'SpWebId' ];
        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    
    initPropertiesFromJson: function Microsoft_Office_Server_Search_REST_QueryContext$initPropertiesFromJson(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.GroupObjectIds;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$m_1 = ((SP.DataConvert.fixupType(null, $v_0)));
            delete parentNode.GroupObjectIds;
        }
        $v_0 = parentNode.PortalUrl;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$y_1 = ((SP.DataConvert.fixupType(null, $v_0)));
            delete parentNode.PortalUrl;
        }
        $v_0 = parentNode.RoleIds;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$17_1 = ((SP.DataConvert.fixupType(null, $v_0)));
            delete parentNode.RoleIds;
        }
        $v_0 = parentNode.SpSiteId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1C_1 = ($v_0);
            delete parentNode.SpSiteId;
        }
        $v_0 = parentNode.SpWebId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1D_1 = ($v_0);
            delete parentNode.SpWebId;
        }
    }
}


Microsoft.Office.Server.Search.REST.QueryRoutingInfo = function Microsoft_Office_Server_Search_REST_QueryRoutingInfo() {
    Microsoft.Office.Server.Search.REST.QueryRoutingInfo.initializeBase(this);
}
Microsoft.Office.Server.Search.REST.QueryRoutingInfo.prototype = {
    $15_1: 0,
    $5_1: null,
    
    get_queryState: function Microsoft_Office_Server_Search_REST_QueryRoutingInfo$get_queryState() {
        return this.$15_1;
    },
    
    set_queryState: function Microsoft_Office_Server_Search_REST_QueryRoutingInfo$set_queryState(value) {
        this.$15_1 = value;
        return value;
    },
    
    get_searchEndpoints: function Microsoft_Office_Server_Search_REST_QueryRoutingInfo$get_searchEndpoints() {
        return this.$5_1;
    },
    
    set_searchEndpoints: function Microsoft_Office_Server_Search_REST_QueryRoutingInfo$set_searchEndpoints(value) {
        this.$5_1 = value;
        return value;
    },
    
    get_typeId: function Microsoft_Office_Server_Search_REST_QueryRoutingInfo$get_typeId() {
        return '{113e5e32-0e6f-4298-ab9e-df268086c2fd}';
    },
    
    writeToXml: function Microsoft_Office_Server_Search_REST_QueryRoutingInfo$writeToXml(writer, serializationContext) {
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
    
    initPropertiesFromJson: function Microsoft_Office_Server_Search_REST_QueryRoutingInfo$initPropertiesFromJson(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.QueryState;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$15_1 = ((SP.DataConvert.fixupType(null, $v_0)));
            delete parentNode.QueryState;
        }
        $v_0 = parentNode.SearchEndpoints;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$5_1 = (([]));
            SP.DataConvert.populateArray(null, ((this.$5_1)), ($v_0));
            delete parentNode.SearchEndpoints;
        }
    }
}


Microsoft.Office.Server.Search.REST.ScsEndpoint = function Microsoft_Office_Server_Search_REST_ScsEndpoint() {
    Microsoft.Office.Server.Search.REST.ScsEndpoint.initializeBase(this);
}
Microsoft.Office.Server.Search.REST.ScsEndpoint.prototype = {
    $k_1: null,
    $10_1: null,
    
    get_farmLabel: function Microsoft_Office_Server_Search_REST_ScsEndpoint$get_farmLabel() {
        return this.$k_1;
    },
    
    set_farmLabel: function Microsoft_Office_Server_Search_REST_ScsEndpoint$set_farmLabel(value) {
        this.$k_1 = value;
        return value;
    },
    
    get_pushServiceLocation: function Microsoft_Office_Server_Search_REST_ScsEndpoint$get_pushServiceLocation() {
        return this.$10_1;
    },
    
    set_pushServiceLocation: function Microsoft_Office_Server_Search_REST_ScsEndpoint$set_pushServiceLocation(value) {
        this.$10_1 = value;
        return value;
    },
    
    get_typeId: function Microsoft_Office_Server_Search_REST_ScsEndpoint$get_typeId() {
        return '{a782ef2d-5f9d-410b-9191-3191d8dd67a0}';
    },
    
    writeToXml: function Microsoft_Office_Server_Search_REST_ScsEndpoint$writeToXml(writer, serializationContext) {
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = [ 'FarmLabel', 'PushServiceLocation' ];
        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    
    initPropertiesFromJson: function Microsoft_Office_Server_Search_REST_ScsEndpoint$initPropertiesFromJson(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.FarmLabel;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$k_1 = ($v_0);
            delete parentNode.FarmLabel;
        }
        $v_0 = parentNode.PushServiceLocation;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$10_1 = ($v_0);
            delete parentNode.PushServiceLocation;
        }
    }
}


Microsoft.Office.Server.Search.REST.SearchEndpoints = function Microsoft_Office_Server_Search_REST_SearchEndpoints() {
    Microsoft.Office.Server.Search.REST.SearchEndpoints.initializeBase(this);
}
Microsoft.Office.Server.Search.REST.SearchEndpoints.prototype = {
    $W_1: null,
    $X_1: null,
    $l_1: null,
    $A_1: null,
    $12_1: null,
    
    get_adminEndpoint: function Microsoft_Office_Server_Search_REST_SearchEndpoints$get_adminEndpoint() {
        return this.$W_1;
    },
    
    set_adminEndpoint: function Microsoft_Office_Server_Search_REST_SearchEndpoints$set_adminEndpoint(value) {
        this.$W_1 = value;
        return value;
    },
    
    get_afdEndpoint: function Microsoft_Office_Server_Search_REST_SearchEndpoints$get_afdEndpoint() {
        return this.$X_1;
    },
    
    set_afdEndpoint: function Microsoft_Office_Server_Search_REST_SearchEndpoints$set_afdEndpoint(value) {
        this.$X_1 = value;
        return value;
    },
    
    get_geolocation: function Microsoft_Office_Server_Search_REST_SearchEndpoints$get_geolocation() {
        return this.$l_1;
    },
    
    set_geolocation: function Microsoft_Office_Server_Search_REST_SearchEndpoints$set_geolocation(value) {
        this.$l_1 = value;
        return value;
    },
    
    get_queryContext: function Microsoft_Office_Server_Search_REST_SearchEndpoints$get_queryContext() {
        return this.$A_1;
    },
    
    set_queryContext: function Microsoft_Office_Server_Search_REST_SearchEndpoints$set_queryContext(value) {
        this.$A_1 = value;
        return value;
    },
    
    get_queryEndpoint: function Microsoft_Office_Server_Search_REST_SearchEndpoints$get_queryEndpoint() {
        return this.$12_1;
    },
    
    set_queryEndpoint: function Microsoft_Office_Server_Search_REST_SearchEndpoints$set_queryEndpoint(value) {
        this.$12_1 = value;
        return value;
    },
    
    get_typeId: function Microsoft_Office_Server_Search_REST_SearchEndpoints$get_typeId() {
        return '{06f786ef-6725-4225-9107-137c215291f0}';
    },
    
    writeToXml: function Microsoft_Office_Server_Search_REST_SearchEndpoints$writeToXml(writer, serializationContext) {
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
    
    initPropertiesFromJson: function Microsoft_Office_Server_Search_REST_SearchEndpoints$initPropertiesFromJson(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.AdminEndpoint;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$W_1 = ($v_0);
            delete parentNode.AdminEndpoint;
        }
        $v_0 = parentNode.AfdEndpoint;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$X_1 = ($v_0);
            delete parentNode.AfdEndpoint;
        }
        $v_0 = parentNode.Geolocation;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$l_1 = ($v_0);
            delete parentNode.Geolocation;
        }
        $v_0 = parentNode.QueryContext;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$A_1 = ((SP.DataConvert.fixupType(null, $v_0)));
            delete parentNode.QueryContext;
        }
        $v_0 = parentNode.QueryEndpoint;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$12_1 = ($v_0);
            delete parentNode.QueryEndpoint;
        }
    }
}


Microsoft.Office.Server.Search.REST.SearchObjectOwnerResult = function Microsoft_Office_Server_Search_REST_SearchObjectOwnerResult() {
    Microsoft.Office.Server.Search.REST.SearchObjectOwnerResult.initializeBase(this);
}
Microsoft.Office.Server.Search.REST.SearchObjectOwnerResult.prototype = {
    $19_1: null,
    $E_1: null,
    $1G_1: null,
    
    get_siteCollectionId: function Microsoft_Office_Server_Search_REST_SearchObjectOwnerResult$get_siteCollectionId() {
        return this.$19_1;
    },
    
    set_siteCollectionId: function Microsoft_Office_Server_Search_REST_SearchObjectOwnerResult$set_siteCollectionId(value) {
        this.$19_1 = value;
        return value;
    },
    
    get_siteId: function Microsoft_Office_Server_Search_REST_SearchObjectOwnerResult$get_siteId() {
        return this.$E_1;
    },
    
    set_siteId: function Microsoft_Office_Server_Search_REST_SearchObjectOwnerResult$set_siteId(value) {
        this.$E_1 = value;
        return value;
    },
    
    get_tenantId: function Microsoft_Office_Server_Search_REST_SearchObjectOwnerResult$get_tenantId() {
        return this.$1G_1;
    },
    
    set_tenantId: function Microsoft_Office_Server_Search_REST_SearchObjectOwnerResult$set_tenantId(value) {
        this.$1G_1 = value;
        return value;
    },
    
    get_typeId: function Microsoft_Office_Server_Search_REST_SearchObjectOwnerResult$get_typeId() {
        return '{7f6dc0fc-c9bf-4835-9db2-07803bfd6cb6}';
    },
    
    writeToXml: function Microsoft_Office_Server_Search_REST_SearchObjectOwnerResult$writeToXml(writer, serializationContext) {
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
    
    initPropertiesFromJson: function Microsoft_Office_Server_Search_REST_SearchObjectOwnerResult$initPropertiesFromJson(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.SiteCollectionId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$19_1 = ($v_0);
            delete parentNode.SiteCollectionId;
        }
        $v_0 = parentNode.SiteId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$E_1 = ($v_0);
            delete parentNode.SiteId;
        }
        $v_0 = parentNode.TenantId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1G_1 = ($v_0);
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
    $1K_1: 0,
    $1L_1: null,
    $1M_1: false,
    $1O_1: null,
    $1Q_1: 0,
    $1R_1: null,
    $1S_1: null,
    $1Z_1: null,
    $1a_1: false,
    $1b_1: false,
    $1d_1: null,
    $1i_1: null,
    
    get_code: function Microsoft_Office_Server_Search_WebControls_ControlMessage$get_code() {
        return this.$1K_1;
    },
    
    get_correlationID: function Microsoft_Office_Server_Search_WebControls_ControlMessage$get_correlationID() {
        return this.$1L_1;
    },
    
    get_encodeDetails: function Microsoft_Office_Server_Search_WebControls_ControlMessage$get_encodeDetails() {
        return this.$1M_1;
    },
    
    get_header: function Microsoft_Office_Server_Search_WebControls_ControlMessage$get_header() {
        return this.$1O_1;
    },
    
    get_level: function Microsoft_Office_Server_Search_WebControls_ControlMessage$get_level() {
        return this.$1Q_1;
    },
    
    get_messageDetails: function Microsoft_Office_Server_Search_WebControls_ControlMessage$get_messageDetails() {
        return this.$1R_1;
    },
    
    get_messageDetailsForViewers: function Microsoft_Office_Server_Search_WebControls_ControlMessage$get_messageDetailsForViewers() {
        return this.$1S_1;
    },
    
    get_serverTypeId: function Microsoft_Office_Server_Search_WebControls_ControlMessage$get_serverTypeId() {
        return this.$1Z_1;
    },
    
    get_showForViewerUsers: function Microsoft_Office_Server_Search_WebControls_ControlMessage$get_showForViewerUsers() {
        return this.$1a_1;
    },
    
    get_showInEditModeOnly: function Microsoft_Office_Server_Search_WebControls_ControlMessage$get_showInEditModeOnly() {
        return this.$1b_1;
    },
    
    get_stackTrace: function Microsoft_Office_Server_Search_WebControls_ControlMessage$get_stackTrace() {
        return this.$1d_1;
    },
    
    get_type: function Microsoft_Office_Server_Search_WebControls_ControlMessage$get_type() {
        return this.$1i_1;
    },
    
    get_typeId: function Microsoft_Office_Server_Search_WebControls_ControlMessage$get_typeId() {
        return '{d3dfef63-4d44-497d-b936-047135645ad7}';
    },
    
    writeToXml: function Microsoft_Office_Server_Search_WebControls_ControlMessage$writeToXml(writer, serializationContext) {
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
    
    initPropertiesFromJson: function Microsoft_Office_Server_Search_WebControls_ControlMessage$initPropertiesFromJson(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.code;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1K_1 = ($v_0);
            delete parentNode.code;
        }
        $v_0 = parentNode.correlationID;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1L_1 = ($v_0);
            delete parentNode.correlationID;
        }
        $v_0 = parentNode.encodeDetails;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1M_1 = ($v_0);
            delete parentNode.encodeDetails;
        }
        $v_0 = parentNode.header;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1O_1 = ($v_0);
            delete parentNode.header;
        }
        $v_0 = parentNode.level;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1Q_1 = ((SP.DataConvert.fixupType(null, $v_0)));
            delete parentNode.level;
        }
        $v_0 = parentNode.messageDetails;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1R_1 = ($v_0);
            delete parentNode.messageDetails;
        }
        $v_0 = parentNode.messageDetailsForViewers;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1S_1 = ($v_0);
            delete parentNode.messageDetailsForViewers;
        }
        $v_0 = parentNode.serverTypeId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1Z_1 = ($v_0);
            delete parentNode.serverTypeId;
        }
        $v_0 = parentNode.showForViewerUsers;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1a_1 = ($v_0);
            delete parentNode.showForViewerUsers;
        }
        $v_0 = parentNode.showInEditModeOnly;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1b_1 = ($v_0);
            delete parentNode.showInEditModeOnly;
        }
        $v_0 = parentNode.stackTrace;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1d_1 = ($v_0);
            delete parentNode.stackTrace;
        }
        $v_0 = parentNode.type;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1i_1 = ($v_0);
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
Microsoft.SharePoint.Client.Search.Administration.DocumentCrawlLog.newObject = function Microsoft_SharePoint_Client_Search_Administration_DocumentCrawlLog$newObject(context, site) {
    return new Microsoft.SharePoint.Client.Search.Administration.DocumentCrawlLog(context, new SP.ObjectPathConstructor(context, '{5c5cfd42-0712-4c00-ae49-23b33ba34ecc}', [ site ]));
}
Microsoft.SharePoint.Client.Search.Administration.DocumentCrawlLog.prototype = {
    
    getCrawledUrls: function Microsoft_SharePoint_Client_Search_Administration_DocumentCrawlLog$getCrawledUrls(getCountOnly, maxRows, queryString, isLike, contentSourceID, errorLevel, errorID, startDateTime, endDateTime) {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'GetCrawledUrls', [ getCountOnly, maxRows, queryString, isLike, contentSourceID, errorLevel, errorID, startDateTime, endDateTime ]);
        $v_0.addQuery($v_2);
        $v_1 = new SP.ClientResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    },
    
    getUnsuccesfulCrawledUrls: function Microsoft_SharePoint_Client_Search_Administration_DocumentCrawlLog$getUnsuccesfulCrawledUrls(displayUrl, startDateTime, endDateTime) {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'GetUnsuccesfulCrawledUrls', [ displayUrl, startDateTime, endDateTime ]);
        $v_0.addQuery($v_2);
        $v_1 = new SP.ClientResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    }
}


Microsoft.SharePoint.Client.Search.Administration.SearchObjectOwner = function Microsoft_SharePoint_Client_Search_Administration_SearchObjectOwner(context, lowestCurrentLevelToUse) {
    Microsoft.SharePoint.Client.Search.Administration.SearchObjectOwner.initializeBase(this, [ context, SP.ClientUtility.getOrCreateObjectPathForConstructor(context, '{e6834c69-54c1-4bfc-9805-4b88406c28bb}', arguments) ]);
}
Microsoft.SharePoint.Client.Search.Administration.SearchObjectOwner.newObject = function Microsoft_SharePoint_Client_Search_Administration_SearchObjectOwner$newObject(context, lowestCurrentLevelToUse) {
    return new Microsoft.SharePoint.Client.Search.Administration.SearchObjectOwner(context, new SP.ObjectPathConstructor(context, '{e6834c69-54c1-4bfc-9805-4b88406c28bb}', [ lowestCurrentLevelToUse ]));
}


Type.registerNamespace('Microsoft.SharePoint.Client.Search.ContentPush');

Microsoft.SharePoint.Client.Search.ContentPush.CertificateService = function Microsoft_SharePoint_Client_Search_ContentPush_CertificateService(context) {
    Microsoft.SharePoint.Client.Search.ContentPush.CertificateService.initializeBase(this, [ context, SP.ClientUtility.getOrCreateObjectPathForConstructor(context, '{b9e0db1d-0b4c-4010-9ea5-43e1bc7041d0}', arguments) ]);
}
Microsoft.SharePoint.Client.Search.ContentPush.CertificateService.newObject = function Microsoft_SharePoint_Client_Search_ContentPush_CertificateService$newObject(context) {
    return new Microsoft.SharePoint.Client.Search.ContentPush.CertificateService(context, new SP.ObjectPathConstructor(context, '{b9e0db1d-0b4c-4010-9ea5-43e1bc7041d0}', null));
}
Microsoft.SharePoint.Client.Search.ContentPush.CertificateService.prototype = {
    
    validContentEncryptionCertificates: function Microsoft_SharePoint_Client_Search_ContentPush_CertificateService$validContentEncryptionCertificates() {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'ValidContentEncryptionCertificates', null);
        $v_0.addQuery($v_2);
        $v_1 = (([]));
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    },
    
    certificateSettings: function Microsoft_SharePoint_Client_Search_ContentPush_CertificateService$certificateSettings() {
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
Microsoft.SharePoint.Client.Search.ContentPush.PushTenantManager.newObject = function Microsoft_SharePoint_Client_Search_ContentPush_PushTenantManager$newObject(context) {
    return new Microsoft.SharePoint.Client.Search.ContentPush.PushTenantManager(context, new SP.ObjectPathConstructor(context, '{098ad99c-6f30-478b-9ea7-f8c3ab3f0083}', null));
}
Microsoft.SharePoint.Client.Search.ContentPush.PushTenantManager.prototype = {
    
    preparePushTenant: function Microsoft_SharePoint_Client_Search_ContentPush_PushTenantManager$preparePushTenant() {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'PreparePushTenant', null);
        $v_0.addQuery($v_2);
        $v_1 = new SP.JsonObjectResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    },
    
    getPushServiceInfo: function Microsoft_SharePoint_Client_Search_ContentPush_PushTenantManager$getPushServiceInfo() {
        var $v_0 = this.get_context();
        var $v_1;
        $v_1 = new Microsoft.SharePoint.Client.Search.ContentPush.PushTenantServiceInfo($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetPushServiceInfo', null));
        return $v_1;
    },
    
    getTenantInfo: function Microsoft_SharePoint_Client_Search_ContentPush_PushTenantManager$getTenantInfo() {
        var $v_0 = this.get_context();
        var $v_1;
        $v_1 = new Microsoft.SharePoint.Client.Search.ContentPush.PushTenantServiceInfo($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetTenantInfo', null));
        return $v_1;
    },
    
    deleteAllCloudHybridSearchContent: function Microsoft_SharePoint_Client_Search_ContentPush_PushTenantManager$deleteAllCloudHybridSearchContent() {
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
    
    get_authenticationRealm: function Microsoft_SharePoint_Client_Search_ContentPush_PushTenantServiceInfo$get_authenticationRealm() {
        this.checkUninitializedProperty('AuthenticationRealm');
        return ((this.get_objectData().get_properties()['AuthenticationRealm']));
    },
    
    get_endpointAddress: function Microsoft_SharePoint_Client_Search_ContentPush_PushTenantServiceInfo$get_endpointAddress() {
        this.checkUninitializedProperty('EndpointAddress');
        return ((this.get_objectData().get_properties()['EndpointAddress']));
    },
    
    get_serviceProperties: function Microsoft_SharePoint_Client_Search_ContentPush_PushTenantServiceInfo$get_serviceProperties() {
        this.checkUninitializedProperty('ServiceProperties');
        return ((this.get_objectData().get_properties()['ServiceProperties']));
    },
    
    get_tenantId: function Microsoft_SharePoint_Client_Search_ContentPush_PushTenantServiceInfo$get_tenantId() {
        this.checkUninitializedProperty('TenantId');
        return ((this.get_objectData().get_properties()['TenantId']));
    },
    
    get_validContentEncryptionCertificates: function Microsoft_SharePoint_Client_Search_ContentPush_PushTenantServiceInfo$get_validContentEncryptionCertificates() {
        this.checkUninitializedProperty('ValidContentEncryptionCertificates');
        return ((this.get_objectData().get_properties()['ValidContentEncryptionCertificates']));
    },
    
    get_validUntil: function Microsoft_SharePoint_Client_Search_ContentPush_PushTenantServiceInfo$get_validUntil() {
        this.checkUninitializedProperty('ValidUntil');
        return ((this.get_objectData().get_properties()['ValidUntil']));
    },
    
    initPropertiesFromJson: function Microsoft_SharePoint_Client_Search_ContentPush_PushTenantServiceInfo$initPropertiesFromJson(parentNode) {
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
Microsoft.SharePoint.Client.Search.Portability.SearchConfigurationPortability.newObject = function Microsoft_SharePoint_Client_Search_Portability_SearchConfigurationPortability$newObject(context) {
    return new Microsoft.SharePoint.Client.Search.Portability.SearchConfigurationPortability(context, new SP.ObjectPathConstructor(context, '{f44b2c90-ddc4-49c8-8d4d-4fb56dcc3247}', null));
}
Microsoft.SharePoint.Client.Search.Portability.SearchConfigurationPortability.prototype = {
    
    get_importWarnings: function Microsoft_SharePoint_Client_Search_Portability_SearchConfigurationPortability$get_importWarnings() {
        this.checkUninitializedProperty('ImportWarnings');
        return ((this.get_objectData().get_properties()['ImportWarnings']));
    },
    
    initPropertiesFromJson: function Microsoft_SharePoint_Client_Search_Portability_SearchConfigurationPortability$initPropertiesFromJson(parentNode) {
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.ImportWarnings;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ImportWarnings'] = ($v_0);
            delete parentNode.ImportWarnings;
        }
    },
    
    exportSearchConfiguration: function Microsoft_SharePoint_Client_Search_Portability_SearchConfigurationPortability$exportSearchConfiguration(owningScope) {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'ExportSearchConfiguration', [ owningScope ]);
        $v_0.addQuery($v_2);
        $v_1 = new SP.StringResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    },
    
    importSearchConfiguration: function Microsoft_SharePoint_Client_Search_Portability_SearchConfigurationPortability$importSearchConfiguration(owningScope, searchConfiguration) {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'ImportSearchConfiguration', [ owningScope, searchConfiguration ]);
        $v_0.addQuery($v_1);
    },
    
    deleteSearchConfiguration: function Microsoft_SharePoint_Client_Search_Portability_SearchConfigurationPortability$deleteSearchConfiguration(owningScope, searchConfiguration) {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'DeleteSearchConfiguration', [ owningScope, searchConfiguration ]);
        $v_0.addQuery($v_1);
    }
}


Microsoft.SharePoint.Client.Search.Portability.SearchConfigurationPortabilityPropertyNames = function Microsoft_SharePoint_Client_Search_Portability_SearchConfigurationPortabilityPropertyNames() {
}


Microsoft.SharePoint.Client.Search.Query.KeywordQueryProperties.registerClass('Microsoft.SharePoint.Client.Search.Query.KeywordQueryProperties', SP.ClientObject);
Microsoft.SharePoint.Client.Search.Query.QueryUtility.registerClass('Microsoft.SharePoint.Client.Search.Query.QueryUtility');
Microsoft.SharePoint.Client.Search.Query.CustomQuerySuggestions.registerClass('Microsoft.SharePoint.Client.Search.Query.CustomQuerySuggestions', SP.ClientValueObject);
Microsoft.SharePoint.Client.Search.Query.Query.registerClass('Microsoft.SharePoint.Client.Search.Query.Query', SP.ClientObject);
Microsoft.SharePoint.Client.Search.Query.KeywordQuery.registerClass('Microsoft.SharePoint.Client.Search.Query.KeywordQuery', Microsoft.SharePoint.Client.Search.Query.Query);
Microsoft.SharePoint.Client.Search.Query.KeywordQueryPropertyNames.registerClass('Microsoft.SharePoint.Client.Search.Query.KeywordQueryPropertyNames');
Microsoft.SharePoint.Client.Search.Query.KeywordQueryObjectPropertyNames.registerClass('Microsoft.SharePoint.Client.Search.Query.KeywordQueryObjectPropertyNames');
Microsoft.SharePoint.Client.Search.Query.PersonalResultSuggestion.registerClass('Microsoft.SharePoint.Client.Search.Query.PersonalResultSuggestion', SP.ClientValueObject);
Microsoft.SharePoint.Client.Search.Query.PopularQuery.registerClass('Microsoft.SharePoint.Client.Search.Query.PopularQuery', SP.ClientValueObject);
Microsoft.SharePoint.Client.Search.Query.PopularTenantQuery.registerClass('Microsoft.SharePoint.Client.Search.Query.PopularTenantQuery', SP.ClientValueObject);
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
Microsoft.SharePoint.Client.Search.Query.TenantCustomQuerySuggestions.registerClass('Microsoft.SharePoint.Client.Search.Query.TenantCustomQuerySuggestions', SP.ClientValueObject);
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
Microsoft.Office.Server.Search.REST.ScsEndpoint.registerClass('Microsoft.Office.Server.Search.REST.ScsEndpoint', SP.ClientValueObject);
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
Microsoft.SharePoint.Client.Search.Query.QueryUtility.$1j = [ null, String, Number, Boolean, Array ];
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
Microsoft.SharePoint.Client.Search.Query.QueryObjectPropertyNames.propertiesToGenerateAcronyms = 'PropertiesToGenerateAcronyms';
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
