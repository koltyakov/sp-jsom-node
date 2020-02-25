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
            switch (Array.indexOf(Microsoft.SharePoint.Client.Search.Query.QueryUtility.$Q, $v_1)) {
                case 1:
                    $v_0.$4_1 = val;
                    $v_0.$0_1 = 1;
                    break;
                case 2:
                    $v_0.$2_1 = val;
                    $v_0.$0_1 = 2;
                    break;
                case 3:
                    $v_0.$1_1 = val;
                    $v_0.$0_1 = 3;
                    break;
                case 4:
                    $v_0.$3_1 = val;
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
Microsoft.SharePoint.Client.Search.Query.QueryUtility.queryPropertyValueToObject = function Microsoft_SharePoint_Client_Search_Query_QueryUtility$queryPropertyValueToObject(val) {
    if (val && val.$0_1 !== 0) {
        switch (val.$0_1) {
            case 1:
                return val.$4_1;
            case 2:
                return val.$2_1;
            case 3:
                return val.$1_1;
            case 4:
                return val.$3_1;
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
        return val.$0_1;
    }
    else {
        return 0;
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
    $D_1: null,
    $E_1: false,
    $O_1: null,
    $P_1: null,
    
    get_highlightedTitle: function Microsoft_SharePoint_Client_Search_Query_PersonalResultSuggestion$get_highlightedTitle() {
        return this.$D_1;
    },
    set_highlightedTitle: function Microsoft_SharePoint_Client_Search_Query_PersonalResultSuggestion$set_highlightedTitle(value) {
        this.$D_1 = value;
        return value;
    },
    
    get_isBestBet: function Microsoft_SharePoint_Client_Search_Query_PersonalResultSuggestion$get_isBestBet() {
        return this.$E_1;
    },
    set_isBestBet: function Microsoft_SharePoint_Client_Search_Query_PersonalResultSuggestion$set_isBestBet(value) {
        this.$E_1 = value;
        return value;
    },
    
    get_title: function Microsoft_SharePoint_Client_Search_Query_PersonalResultSuggestion$get_title() {
        return this.$O_1;
    },
    set_title: function Microsoft_SharePoint_Client_Search_Query_PersonalResultSuggestion$set_title(value) {
        this.$O_1 = value;
        return value;
    },
    
    get_url: function Microsoft_SharePoint_Client_Search_Query_PersonalResultSuggestion$get_url() {
        return this.$P_1;
    },
    set_url: function Microsoft_SharePoint_Client_Search_Query_PersonalResultSuggestion$set_url(value) {
        this.$P_1 = value;
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
            this.$D_1 = ($v_0);
            delete parentNode.HighlightedTitle;
        }
        $v_0 = parentNode.IsBestBet;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$E_1 = ($v_0);
            delete parentNode.IsBestBet;
        }
        $v_0 = parentNode.Title;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$O_1 = ($v_0);
            delete parentNode.Title;
        }
        $v_0 = parentNode.Url;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$P_1 = ($v_0);
            delete parentNode.Url;
        }
    }
}


Microsoft.SharePoint.Client.Search.Query.PopularQuery = function Microsoft_SharePoint_Client_Search_Query_PopularQuery() {
    Microsoft.SharePoint.Client.Search.Query.PopularQuery.initializeBase(this);
}
Microsoft.SharePoint.Client.Search.Query.PopularQuery.prototype = {
    $A_1: 0,
    $G_1: 0,
    $M_1: 0,
    $N_1: null,
    
    get_clickCount: function Microsoft_SharePoint_Client_Search_Query_PopularQuery$get_clickCount() {
        return this.$A_1;
    },
    set_clickCount: function Microsoft_SharePoint_Client_Search_Query_PopularQuery$set_clickCount(value) {
        this.$A_1 = value;
        return value;
    },
    
    get_LCID: function Microsoft_SharePoint_Client_Search_Query_PopularQuery$get_LCID() {
        return this.$G_1;
    },
    set_LCID: function Microsoft_SharePoint_Client_Search_Query_PopularQuery$set_LCID(value) {
        this.$G_1 = value;
        return value;
    },
    
    get_queryCount: function Microsoft_SharePoint_Client_Search_Query_PopularQuery$get_queryCount() {
        return this.$M_1;
    },
    set_queryCount: function Microsoft_SharePoint_Client_Search_Query_PopularQuery$set_queryCount(value) {
        this.$M_1 = value;
        return value;
    },
    
    get_queryText: function Microsoft_SharePoint_Client_Search_Query_PopularQuery$get_queryText() {
        return this.$N_1;
    },
    set_queryText: function Microsoft_SharePoint_Client_Search_Query_PopularQuery$set_queryText(value) {
        this.$N_1 = value;
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
            this.$A_1 = ($v_0);
            delete parentNode.ClickCount;
        }
        $v_0 = parentNode.LCID;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$G_1 = ($v_0);
            delete parentNode.LCID;
        }
        $v_0 = parentNode.QueryCount;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$M_1 = ($v_0);
            delete parentNode.QueryCount;
        }
        $v_0 = parentNode.QueryText;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$N_1 = ($v_0);
            delete parentNode.QueryText;
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
    }
}


Microsoft.SharePoint.Client.Search.Query.QueryPropertyNames = function Microsoft_SharePoint_Client_Search_Query_QueryPropertyNames() {
}


Microsoft.SharePoint.Client.Search.Query.QueryObjectPropertyNames = function Microsoft_SharePoint_Client_Search_Query_QueryObjectPropertyNames() {
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
    $1_1: false,
    $2_1: 0,
    $0_1: 0,
    $3_1: null,
    $4_1: null,
    
    get_boolVal: function Microsoft_SharePoint_Client_Search_Query_QueryPropertyValue$get_boolVal() {
        return this.$1_1;
    },
    set_boolVal: function Microsoft_SharePoint_Client_Search_Query_QueryPropertyValue$set_boolVal(value) {
        this.$1_1 = value;
        return value;
    },
    
    get_intVal: function Microsoft_SharePoint_Client_Search_Query_QueryPropertyValue$get_intVal() {
        return this.$2_1;
    },
    set_intVal: function Microsoft_SharePoint_Client_Search_Query_QueryPropertyValue$set_intVal(value) {
        this.$2_1 = value;
        return value;
    },
    
    get_queryPropertyValueTypeIndex: function Microsoft_SharePoint_Client_Search_Query_QueryPropertyValue$get_queryPropertyValueTypeIndex() {
        return this.$0_1;
    },
    set_queryPropertyValueTypeIndex: function Microsoft_SharePoint_Client_Search_Query_QueryPropertyValue$set_queryPropertyValueTypeIndex(value) {
        this.$0_1 = value;
        return value;
    },
    
    get_strArray: function Microsoft_SharePoint_Client_Search_Query_QueryPropertyValue$get_strArray() {
        return this.$3_1;
    },
    set_strArray: function Microsoft_SharePoint_Client_Search_Query_QueryPropertyValue$set_strArray(value) {
        this.$3_1 = value;
        return value;
    },
    
    get_strVal: function Microsoft_SharePoint_Client_Search_Query_QueryPropertyValue$get_strVal() {
        return this.$4_1;
    },
    set_strVal: function Microsoft_SharePoint_Client_Search_Query_QueryPropertyValue$set_strVal(value) {
        this.$4_1 = value;
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
            this.$1_1 = ($v_0);
            delete parentNode.BoolVal;
        }
        $v_0 = parentNode.IntVal;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$2_1 = ($v_0);
            delete parentNode.IntVal;
        }
        $v_0 = parentNode.QueryPropertyValueTypeIndex;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$0_1 = ($v_0);
            delete parentNode.QueryPropertyValueTypeIndex;
        }
        $v_0 = parentNode.StrArray;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$3_1 = ((SP.DataConvert.fixupType(null, $v_0)));
            delete parentNode.StrArray;
        }
        $v_0 = parentNode.StrVal;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$4_1 = ($v_0);
            delete parentNode.StrVal;
        }
    }
}


Microsoft.SharePoint.Client.Search.Query.QuerySuggestionQuery = function Microsoft_SharePoint_Client_Search_Query_QuerySuggestionQuery() {
    Microsoft.SharePoint.Client.Search.Query.QuerySuggestionQuery.initializeBase(this);
}
Microsoft.SharePoint.Client.Search.Query.QuerySuggestionQuery.prototype = {
    $F_1: false,
    $L_1: null,
    
    get_isPersonal: function Microsoft_SharePoint_Client_Search_Query_QuerySuggestionQuery$get_isPersonal() {
        return this.$F_1;
    },
    set_isPersonal: function Microsoft_SharePoint_Client_Search_Query_QuerySuggestionQuery$set_isPersonal(value) {
        this.$F_1 = value;
        return value;
    },
    
    get_query: function Microsoft_SharePoint_Client_Search_Query_QuerySuggestionQuery$get_query() {
        return this.$L_1;
    },
    set_query: function Microsoft_SharePoint_Client_Search_Query_QuerySuggestionQuery$set_query(value) {
        this.$L_1 = value;
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
            this.$F_1 = ($v_0);
            delete parentNode.IsPersonal;
        }
        $v_0 = parentNode.Query;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$L_1 = ($v_0);
            delete parentNode.Query;
        }
    }
}


Microsoft.SharePoint.Client.Search.Query.QuerySuggestionResults = function Microsoft_SharePoint_Client_Search_Query_QuerySuggestionResults() {
    Microsoft.SharePoint.Client.Search.Query.QuerySuggestionResults.initializeBase(this);
}
Microsoft.SharePoint.Client.Search.Query.QuerySuggestionResults.prototype = {
    $J_1: null,
    $5_1: null,
    $7_1: null,
    
    get_peopleNames: function Microsoft_SharePoint_Client_Search_Query_QuerySuggestionResults$get_peopleNames() {
        return this.$J_1;
    },
    set_peopleNames: function Microsoft_SharePoint_Client_Search_Query_QuerySuggestionResults$set_peopleNames(value) {
        this.$J_1 = value;
        return value;
    },
    
    get_personalResults: function Microsoft_SharePoint_Client_Search_Query_QuerySuggestionResults$get_personalResults() {
        return this.$5_1;
    },
    set_personalResults: function Microsoft_SharePoint_Client_Search_Query_QuerySuggestionResults$set_personalResults(value) {
        this.$5_1 = value;
        return value;
    },
    
    get_queries: function Microsoft_SharePoint_Client_Search_Query_QuerySuggestionResults$get_queries() {
        return this.$7_1;
    },
    set_queries: function Microsoft_SharePoint_Client_Search_Query_QuerySuggestionResults$set_queries(value) {
        this.$7_1 = value;
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
        var $v_0 = [ 'PeopleNames', 'PersonalResults', 'Queries' ];
        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    
    initPropertiesFromJson: function Microsoft_SharePoint_Client_Search_Query_QuerySuggestionResults$initPropertiesFromJson(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.PeopleNames;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$J_1 = ((SP.DataConvert.fixupType(null, $v_0)));
            delete parentNode.PeopleNames;
        }
        $v_0 = parentNode.PersonalResults;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$5_1 = (([]));
            SP.DataConvert.populateArray(null, ((this.$5_1)), ($v_0));
            delete parentNode.PersonalResults;
        }
        $v_0 = parentNode.Queries;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$7_1 = (([]));
            SP.DataConvert.populateArray(null, ((this.$7_1)), ($v_0));
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
    $9_1: 0,
    $H_1: 0,
    $I_1: null,
    
    get_boost: function Microsoft_SharePoint_Client_Search_Query_ReorderingRule$get_boost() {
        return this.$9_1;
    },
    set_boost: function Microsoft_SharePoint_Client_Search_Query_ReorderingRule$set_boost(value) {
        this.$9_1 = value;
        return value;
    },
    
    get_matchType: function Microsoft_SharePoint_Client_Search_Query_ReorderingRule$get_matchType() {
        return this.$H_1;
    },
    set_matchType: function Microsoft_SharePoint_Client_Search_Query_ReorderingRule$set_matchType(value) {
        this.$H_1 = value;
        return value;
    },
    
    get_matchValue: function Microsoft_SharePoint_Client_Search_Query_ReorderingRule$get_matchValue() {
        return this.$I_1;
    },
    set_matchValue: function Microsoft_SharePoint_Client_Search_Query_ReorderingRule$set_matchValue(value) {
        this.$I_1 = value;
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
            this.$9_1 = ($v_0);
            delete parentNode.Boost;
        }
        $v_0 = parentNode.MatchType;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$H_1 = ((SP.DataConvert.fixupType(null, $v_0)));
            delete parentNode.MatchType;
        }
        $v_0 = parentNode.MatchValue;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$I_1 = ($v_0);
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
    $U_1: null,
    $W_1: null,
    $6_1: null,
    $8_1: null,
    $b_1: null,
    $c_1: null,
    $d_1: null,
    $e_1: null,
    $f_1: 0,
    $l_1: null,
    $m_1: 0,
    $n_1: 0,
    
    get_groupTemplateId: function Microsoft_SharePoint_Client_Search_Query_ResultTable$get_groupTemplateId() {
        return this.$U_1;
    },
    
    get_itemTemplateId: function Microsoft_SharePoint_Client_Search_Query_ResultTable$get_itemTemplateId() {
        return this.$W_1;
    },
    
    get_properties: function Microsoft_SharePoint_Client_Search_Query_ResultTable$get_properties() {
        return this.$6_1;
    },
    
    get_queryId: function Microsoft_SharePoint_Client_Search_Query_ResultTable$get_queryId() {
        return this.$8_1;
    },
    
    get_queryRuleId: function Microsoft_SharePoint_Client_Search_Query_ResultTable$get_queryRuleId() {
        return this.$b_1;
    },
    
    get_resultRows: function Microsoft_SharePoint_Client_Search_Query_ResultTable$get_resultRows() {
        return this.$c_1;
    },
    
    get_resultTitle: function Microsoft_SharePoint_Client_Search_Query_ResultTable$get_resultTitle() {
        return this.$d_1;
    },
    
    get_resultTitleUrl: function Microsoft_SharePoint_Client_Search_Query_ResultTable$get_resultTitleUrl() {
        return this.$e_1;
    },
    
    get_rowCount: function Microsoft_SharePoint_Client_Search_Query_ResultTable$get_rowCount() {
        return this.$f_1;
    },
    
    get_tableType: function Microsoft_SharePoint_Client_Search_Query_ResultTable$get_tableType() {
        return this.$l_1;
    },
    
    get_totalRows: function Microsoft_SharePoint_Client_Search_Query_ResultTable$get_totalRows() {
        return this.$m_1;
    },
    
    get_totalRowsIncludingDuplicates: function Microsoft_SharePoint_Client_Search_Query_ResultTable$get_totalRowsIncludingDuplicates() {
        return this.$n_1;
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
            this.$U_1 = ($v_0);
            delete parentNode.GroupTemplateId;
        }
        $v_0 = parentNode.ItemTemplateId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$W_1 = ($v_0);
            delete parentNode.ItemTemplateId;
        }
        $v_0 = parentNode.Properties;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$6_1 = ((SP.DataConvert.fixupType(null, $v_0)));
            delete parentNode.Properties;
        }
        $v_0 = parentNode.QueryId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$8_1 = ($v_0);
            delete parentNode.QueryId;
        }
        $v_0 = parentNode.QueryRuleId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$b_1 = ($v_0);
            delete parentNode.QueryRuleId;
        }
        $v_0 = parentNode.ResultRows;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$c_1 = ((SP.DataConvert.fixupType(null, $v_0)));
            delete parentNode.ResultRows;
        }
        $v_0 = parentNode.ResultTitle;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$d_1 = ($v_0);
            delete parentNode.ResultTitle;
        }
        $v_0 = parentNode.ResultTitleUrl;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$e_1 = ($v_0);
            delete parentNode.ResultTitleUrl;
        }
        $v_0 = parentNode.RowCount;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$f_1 = ($v_0);
            delete parentNode.RowCount;
        }
        $v_0 = parentNode.TableType;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$l_1 = ($v_0);
            delete parentNode.TableType;
        }
        $v_0 = parentNode.TotalRows;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$m_1 = ($v_0);
            delete parentNode.TotalRows;
        }
        $v_0 = parentNode.TotalRowsIncludingDuplicates;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$n_1 = ($v_0);
            delete parentNode.TotalRowsIncludingDuplicates;
        }
    }
}


Microsoft.SharePoint.Client.Search.Query.ResultTableCollection = function Microsoft_SharePoint_Client_Search_Query_ResultTableCollection() {
    Microsoft.SharePoint.Client.Search.Query.ResultTableCollection.initializeBase(this);
}
Microsoft.SharePoint.Client.Search.Query.ResultTableCollection.prototype = {
    $C_2: 0,
    $6_2: null,
    $a_2: null,
    $8_2: null,
    $j_2: null,
    $o_2: null,
    
    add: function Microsoft_SharePoint_Client_Search_Query_ResultTableCollection$add(item) {
        this.addChild(item);
    },
    
    get_item: function Microsoft_SharePoint_Client_Search_Query_ResultTableCollection$get_item(index) {
        return this.getItemAtIndex(index);
    },
    
    get_elapsedTime: function Microsoft_SharePoint_Client_Search_Query_ResultTableCollection$get_elapsedTime() {
        return this.$C_2;
    },
    set_elapsedTime: function Microsoft_SharePoint_Client_Search_Query_ResultTableCollection$set_elapsedTime(value) {
        this.$C_2 = value;
        return value;
    },
    
    get_properties: function Microsoft_SharePoint_Client_Search_Query_ResultTableCollection$get_properties() {
        return this.$6_2;
    },
    
    get_queryErrors: function Microsoft_SharePoint_Client_Search_Query_ResultTableCollection$get_queryErrors() {
        return this.$a_2;
    },
    
    get_queryId: function Microsoft_SharePoint_Client_Search_Query_ResultTableCollection$get_queryId() {
        return this.$8_2;
    },
    
    get_spellingSuggestion: function Microsoft_SharePoint_Client_Search_Query_ResultTableCollection$get_spellingSuggestion() {
        return this.$j_2;
    },
    
    get_triggeredRules: function Microsoft_SharePoint_Client_Search_Query_ResultTableCollection$get_triggeredRules() {
        return this.$o_2;
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
            this.$C_2 = ($v_0);
            delete parentNode.ElapsedTime;
        }
        $v_0 = parentNode.Properties;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$6_2 = ((SP.DataConvert.fixupType(null, $v_0)));
            delete parentNode.Properties;
        }
        $v_0 = parentNode.QueryErrors;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$a_2 = ((SP.DataConvert.fixupType(null, $v_0)));
            delete parentNode.QueryErrors;
        }
        $v_0 = parentNode.QueryId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$8_2 = ($v_0);
            delete parentNode.QueryId;
        }
        $v_0 = parentNode.SpellingSuggestion;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$j_2 = ($v_0);
            delete parentNode.SpellingSuggestion;
        }
        $v_0 = parentNode.TriggeredRules;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$o_2 = ((SP.DataConvert.fixupType(null, $v_0)));
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
    }
}


Microsoft.SharePoint.Client.Search.Query.Sort = function Microsoft_SharePoint_Client_Search_Query_Sort() {
    Microsoft.SharePoint.Client.Search.Query.Sort.initializeBase(this);
}
Microsoft.SharePoint.Client.Search.Query.Sort.prototype = {
    $B_1: 0,
    $K_1: null,
    
    get_direction: function Microsoft_SharePoint_Client_Search_Query_Sort$get_direction() {
        return this.$B_1;
    },
    set_direction: function Microsoft_SharePoint_Client_Search_Query_Sort$set_direction(value) {
        this.$B_1 = value;
        return value;
    },
    
    get_property: function Microsoft_SharePoint_Client_Search_Query_Sort$get_property() {
        return this.$K_1;
    },
    set_property: function Microsoft_SharePoint_Client_Search_Query_Sort$set_property(value) {
        this.$K_1 = value;
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
            this.$B_1 = ((SP.DataConvert.fixupType(null, $v_0)));
            delete parentNode.Direction;
        }
        $v_0 = parentNode.Property;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$K_1 = ($v_0);
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
    $R_1: 0,
    $S_1: null,
    $T_1: false,
    $V_1: null,
    $X_1: 0,
    $Y_1: null,
    $Z_1: null,
    $g_1: null,
    $h_1: false,
    $i_1: false,
    $k_1: null,
    $p_1: null,
    
    get_code: function Microsoft_Office_Server_Search_WebControls_ControlMessage$get_code() {
        return this.$R_1;
    },
    
    get_correlationID: function Microsoft_Office_Server_Search_WebControls_ControlMessage$get_correlationID() {
        return this.$S_1;
    },
    
    get_encodeDetails: function Microsoft_Office_Server_Search_WebControls_ControlMessage$get_encodeDetails() {
        return this.$T_1;
    },
    
    get_header: function Microsoft_Office_Server_Search_WebControls_ControlMessage$get_header() {
        return this.$V_1;
    },
    
    get_level: function Microsoft_Office_Server_Search_WebControls_ControlMessage$get_level() {
        return this.$X_1;
    },
    
    get_messageDetails: function Microsoft_Office_Server_Search_WebControls_ControlMessage$get_messageDetails() {
        return this.$Y_1;
    },
    
    get_messageDetailsForViewers: function Microsoft_Office_Server_Search_WebControls_ControlMessage$get_messageDetailsForViewers() {
        return this.$Z_1;
    },
    
    get_serverTypeId: function Microsoft_Office_Server_Search_WebControls_ControlMessage$get_serverTypeId() {
        return this.$g_1;
    },
    
    get_showForViewerUsers: function Microsoft_Office_Server_Search_WebControls_ControlMessage$get_showForViewerUsers() {
        return this.$h_1;
    },
    
    get_showInEditModeOnly: function Microsoft_Office_Server_Search_WebControls_ControlMessage$get_showInEditModeOnly() {
        return this.$i_1;
    },
    
    get_stackTrace: function Microsoft_Office_Server_Search_WebControls_ControlMessage$get_stackTrace() {
        return this.$k_1;
    },
    
    get_type: function Microsoft_Office_Server_Search_WebControls_ControlMessage$get_type() {
        return this.$p_1;
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
            this.$R_1 = ($v_0);
            delete parentNode.code;
        }
        $v_0 = parentNode.correlationID;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$S_1 = ($v_0);
            delete parentNode.correlationID;
        }
        $v_0 = parentNode.encodeDetails;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$T_1 = ($v_0);
            delete parentNode.encodeDetails;
        }
        $v_0 = parentNode.header;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$V_1 = ($v_0);
            delete parentNode.header;
        }
        $v_0 = parentNode.level;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$X_1 = ((SP.DataConvert.fixupType(null, $v_0)));
            delete parentNode.level;
        }
        $v_0 = parentNode.messageDetails;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$Y_1 = ($v_0);
            delete parentNode.messageDetails;
        }
        $v_0 = parentNode.messageDetailsForViewers;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$Z_1 = ($v_0);
            delete parentNode.messageDetailsForViewers;
        }
        $v_0 = parentNode.serverTypeId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$g_1 = ($v_0);
            delete parentNode.serverTypeId;
        }
        $v_0 = parentNode.showForViewerUsers;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$h_1 = ($v_0);
            delete parentNode.showForViewerUsers;
        }
        $v_0 = parentNode.showInEditModeOnly;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$i_1 = ($v_0);
            delete parentNode.showInEditModeOnly;
        }
        $v_0 = parentNode.stackTrace;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$k_1 = ($v_0);
            delete parentNode.stackTrace;
        }
        $v_0 = parentNode.type;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$p_1 = ($v_0);
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
    }
}


Microsoft.SharePoint.Client.Search.Administration.SearchObjectOwner = function Microsoft_SharePoint_Client_Search_Administration_SearchObjectOwner(context, lowestCurrentLevelToUse) {
    Microsoft.SharePoint.Client.Search.Administration.SearchObjectOwner.initializeBase(this, [ context, SP.ClientUtility.getOrCreateObjectPathForConstructor(context, '{e6834c69-54c1-4bfc-9805-4b88406c28bb}', arguments) ]);
}
Microsoft.SharePoint.Client.Search.Administration.SearchObjectOwner.newObject = function Microsoft_SharePoint_Client_Search_Administration_SearchObjectOwner$newObject(context, lowestCurrentLevelToUse) {
    return new Microsoft.SharePoint.Client.Search.Administration.SearchObjectOwner(context, new SP.ObjectPathConstructor(context, '{e6834c69-54c1-4bfc-9805-4b88406c28bb}', [ lowestCurrentLevelToUse ]));
}


Type.registerNamespace('Microsoft.SharePoint.Client.Search.ContentPush');

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
Microsoft.SharePoint.Client.Search.Query.Query.registerClass('Microsoft.SharePoint.Client.Search.Query.Query', SP.ClientObject);
Microsoft.SharePoint.Client.Search.Query.KeywordQuery.registerClass('Microsoft.SharePoint.Client.Search.Query.KeywordQuery', Microsoft.SharePoint.Client.Search.Query.Query);
Microsoft.SharePoint.Client.Search.Query.KeywordQueryPropertyNames.registerClass('Microsoft.SharePoint.Client.Search.Query.KeywordQueryPropertyNames');
Microsoft.SharePoint.Client.Search.Query.KeywordQueryObjectPropertyNames.registerClass('Microsoft.SharePoint.Client.Search.Query.KeywordQueryObjectPropertyNames');
Microsoft.SharePoint.Client.Search.Query.PersonalResultSuggestion.registerClass('Microsoft.SharePoint.Client.Search.Query.PersonalResultSuggestion', SP.ClientValueObject);
Microsoft.SharePoint.Client.Search.Query.PopularQuery.registerClass('Microsoft.SharePoint.Client.Search.Query.PopularQuery', SP.ClientValueObject);
Microsoft.SharePoint.Client.Search.Query.QueryPropertyNames.registerClass('Microsoft.SharePoint.Client.Search.Query.QueryPropertyNames');
Microsoft.SharePoint.Client.Search.Query.QueryObjectPropertyNames.registerClass('Microsoft.SharePoint.Client.Search.Query.QueryObjectPropertyNames');
Microsoft.SharePoint.Client.Search.Query.QueryPersonalizationData.registerClass('Microsoft.SharePoint.Client.Search.Query.QueryPersonalizationData', SP.ClientObject);
Microsoft.SharePoint.Client.Search.Query.QueryPropertyValue.registerClass('Microsoft.SharePoint.Client.Search.Query.QueryPropertyValue', SP.ClientValueObject);
Microsoft.SharePoint.Client.Search.Query.QuerySuggestionQuery.registerClass('Microsoft.SharePoint.Client.Search.Query.QuerySuggestionQuery', SP.ClientValueObject);
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
Microsoft.Office.Server.Search.WebControls.ControlMessage.registerClass('Microsoft.Office.Server.Search.WebControls.ControlMessage', SP.ClientValueObject);
Microsoft.SharePoint.Client.Search.Administration.DocumentCrawlLog.registerClass('Microsoft.SharePoint.Client.Search.Administration.DocumentCrawlLog', SP.ClientObject);
Microsoft.SharePoint.Client.Search.Administration.SearchObjectOwner.registerClass('Microsoft.SharePoint.Client.Search.Administration.SearchObjectOwner', SP.ClientObject);
Microsoft.SharePoint.Client.Search.ContentPush.PushTenantManager.registerClass('Microsoft.SharePoint.Client.Search.ContentPush.PushTenantManager', SP.ClientObject);
Microsoft.SharePoint.Client.Search.ContentPush.PushTenantServiceInfo.registerClass('Microsoft.SharePoint.Client.Search.ContentPush.PushTenantServiceInfo', SP.ClientObject);
Microsoft.SharePoint.Client.Search.ContentPush.PushTenantServiceInfoPropertyNames.registerClass('Microsoft.SharePoint.Client.Search.ContentPush.PushTenantServiceInfoPropertyNames');
Microsoft.SharePoint.Client.Search.Portability.SearchConfigurationPortability.registerClass('Microsoft.SharePoint.Client.Search.Portability.SearchConfigurationPortability', SP.ClientObject);
Microsoft.SharePoint.Client.Search.Portability.SearchConfigurationPortabilityPropertyNames.registerClass('Microsoft.SharePoint.Client.Search.Portability.SearchConfigurationPortabilityPropertyNames');
Microsoft.SharePoint.Client.Search.Query.QueryUtility.$Q = [ null, String, Number, Boolean, Array ];
Microsoft.SharePoint.Client.Search.Query.KeywordQueryPropertyNames.collapseSpecification = 'CollapseSpecification';
Microsoft.SharePoint.Client.Search.Query.KeywordQueryPropertyNames.enableSorting = 'EnableSorting';
Microsoft.SharePoint.Client.Search.Query.KeywordQueryPropertyNames.hiddenConstraints = 'HiddenConstraints';
Microsoft.SharePoint.Client.Search.Query.KeywordQueryPropertyNames.refiners = 'Refiners';
Microsoft.SharePoint.Client.Search.Query.KeywordQueryPropertyNames.timeZoneId = 'TimeZoneId';
Microsoft.SharePoint.Client.Search.Query.KeywordQueryPropertyNames.trimDuplicatesIncludeId = 'TrimDuplicatesIncludeId';
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
