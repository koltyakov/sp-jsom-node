// JScript File


Type.registerNamespace('SP.CompliancePolicy');

SP.CompliancePolicy.DlpAccessScope = function() {}
SP.CompliancePolicy.DlpAccessScope.prototype = {
    none: 0, 
    internalUsersOnly: 1, 
    includeExternalUsers: 2
}
SP.CompliancePolicy.DlpAccessScope.registerEnum('SP.CompliancePolicy.DlpAccessScope', false);


SP.CompliancePolicy.PolicyEvaluationInfoEnums = function() {}
SP.CompliancePolicy.PolicyEvaluationInfoEnums.prototype = {
    dlpAccessScope: 1, 
    applicablePolicies: 2, 
    overriddenRules: 4, 
    matchedRules: 8
}
SP.CompliancePolicy.PolicyEvaluationInfoEnums.registerEnum('SP.CompliancePolicy.PolicyEvaluationInfoEnums', false);


SP.CompliancePolicy.PolicyScenario = function() {}
SP.CompliancePolicy.PolicyScenario.prototype = {
    retention: 0, 
    hold: 1, 
    dlp: 2, 
    deviceSettings: 3, 
    auditSettings: 4, 
    deviceConditionalAccess: 5, 
    deviceTenantConditionalAccess: 6, 
    auditAlert: 7, 
    caseHold: 8
}
SP.CompliancePolicy.PolicyScenario.registerEnum('SP.CompliancePolicy.PolicyScenario', false);


SP.CompliancePolicy.PolicyTipOverrideResult = function() {}
SP.CompliancePolicy.PolicyTipOverrideResult.prototype = {
    none: 0, 
    falsePositiveReported: 1, 
    overridden: 2, 
    falsePositiveReportedAndOverridden: 3
}
SP.CompliancePolicy.PolicyTipOverrideResult.registerEnum('SP.CompliancePolicy.PolicyTipOverrideResult', false);


SP.CompliancePolicy.PolicyTipOverrideUserAction = function() {}
SP.CompliancePolicy.PolicyTipOverrideUserAction.prototype = {
    override: 0, 
    reportFalsePositive: 1, 
    reportFalsePositiveAndOverride: 2
}
SP.CompliancePolicy.PolicyTipOverrideUserAction.registerEnum('SP.CompliancePolicy.PolicyTipOverrideUserAction', false);


SP.CompliancePolicy.SPContainerType = function() {}
SP.CompliancePolicy.SPContainerType.prototype = {
    site: 0, 
    web: 1, 
    list: 2
}
SP.CompliancePolicy.SPContainerType.registerEnum('SP.CompliancePolicy.SPContainerType', false);


SP.CompliancePolicy.ComplianceTag = function SP_CompliancePolicy_ComplianceTag() {
    SP.CompliancePolicy.ComplianceTag.initializeBase(this);
}
SP.CompliancePolicy.ComplianceTag.prototype = {
    $3_1: false,
    $4_1: null,
    $5_1: null,
    $6_1: false,
    $7_1: false,
    $8_1: false,
    $9_1: false,
    $A_1: null,
    $B_1: null,
    $C_1: false,
    $D_1: false,
    $G_1: null,
    $I_1: false,
    $J_1: null,
    $K_1: null,
    $L_1: false,
    $M_1: 0,
    $N_1: null,
    $O_1: null,
    $P_1: null,
    
    get_acceptMessagesOnlyFromSendersOrMembers: function SP_CompliancePolicy_ComplianceTag$get_acceptMessagesOnlyFromSendersOrMembers() {
        return this.$3_1;
    },
    
    get_accessType: function SP_CompliancePolicy_ComplianceTag$get_accessType() {
        return this.$4_1;
    },
    
    get_allowAccessFromUnmanagedDevice: function SP_CompliancePolicy_ComplianceTag$get_allowAccessFromUnmanagedDevice() {
        return this.$5_1;
    },
    
    get_autoDelete: function SP_CompliancePolicy_ComplianceTag$get_autoDelete() {
        return this.$6_1;
    },
    
    get_blockDelete: function SP_CompliancePolicy_ComplianceTag$get_blockDelete() {
        return this.$7_1;
    },
    
    get_blockEdit: function SP_CompliancePolicy_ComplianceTag$get_blockEdit() {
        return this.$8_1;
    },
    
    get_containsSiteLabel: function SP_CompliancePolicy_ComplianceTag$get_containsSiteLabel() {
        return this.$9_1;
    },
    
    get_displayName: function SP_CompliancePolicy_ComplianceTag$get_displayName() {
        return this.$A_1;
    },
    
    get_encryptionRMSTemplateId: function SP_CompliancePolicy_ComplianceTag$get_encryptionRMSTemplateId() {
        return this.$B_1;
    },
    
    get_hasRetentionAction: function SP_CompliancePolicy_ComplianceTag$get_hasRetentionAction() {
        return this.$C_1;
    },
    
    get_isEventTag: function SP_CompliancePolicy_ComplianceTag$get_isEventTag() {
        return this.$D_1;
    },
    
    get_notes: function SP_CompliancePolicy_ComplianceTag$get_notes() {
        return this.$G_1;
    },
    
    get_requireSenderAuthenticationEnabled: function SP_CompliancePolicy_ComplianceTag$get_requireSenderAuthenticationEnabled() {
        return this.$I_1;
    },
    
    get_reviewerEmail: function SP_CompliancePolicy_ComplianceTag$get_reviewerEmail() {
        return this.$J_1;
    },
    
    get_sharingCapabilities: function SP_CompliancePolicy_ComplianceTag$get_sharingCapabilities() {
        return this.$K_1;
    },
    
    get_superLock: function SP_CompliancePolicy_ComplianceTag$get_superLock() {
        return this.$L_1;
    },
    
    get_tagDuration: function SP_CompliancePolicy_ComplianceTag$get_tagDuration() {
        return this.$M_1;
    },
    
    get_tagId: function SP_CompliancePolicy_ComplianceTag$get_tagId() {
        return this.$N_1;
    },
    
    get_tagName: function SP_CompliancePolicy_ComplianceTag$get_tagName() {
        return this.$O_1;
    },
    
    get_tagRetentionBasedOn: function SP_CompliancePolicy_ComplianceTag$get_tagRetentionBasedOn() {
        return this.$P_1;
    },
    
    get_typeId: function SP_CompliancePolicy_ComplianceTag$get_typeId() {
        return '{b2f05a72-c139-4467-ace0-045002b41186}';
    },
    
    writeToXml: function SP_CompliancePolicy_ComplianceTag$writeToXml(writer, serializationContext) {
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = [ 'AcceptMessagesOnlyFromSendersOrMembers', 'AccessType', 'AllowAccessFromUnmanagedDevice', 'AutoDelete', 'BlockDelete', 'BlockEdit', 'ContainsSiteLabel', 'DisplayName', 'EncryptionRMSTemplateId', 'HasRetentionAction', 'IsEventTag', 'Notes', 'RequireSenderAuthenticationEnabled', 'ReviewerEmail', 'SharingCapabilities', 'SuperLock', 'TagDuration', 'TagId', 'TagName', 'TagRetentionBasedOn' ];
        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    
    initPropertiesFromJson: function SP_CompliancePolicy_ComplianceTag$initPropertiesFromJson(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.AcceptMessagesOnlyFromSendersOrMembers;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$3_1 = ($v_0);
            delete parentNode.AcceptMessagesOnlyFromSendersOrMembers;
        }
        $v_0 = parentNode.AccessType;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$4_1 = ($v_0);
            delete parentNode.AccessType;
        }
        $v_0 = parentNode.AllowAccessFromUnmanagedDevice;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$5_1 = ($v_0);
            delete parentNode.AllowAccessFromUnmanagedDevice;
        }
        $v_0 = parentNode.AutoDelete;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$6_1 = ($v_0);
            delete parentNode.AutoDelete;
        }
        $v_0 = parentNode.BlockDelete;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$7_1 = ($v_0);
            delete parentNode.BlockDelete;
        }
        $v_0 = parentNode.BlockEdit;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$8_1 = ($v_0);
            delete parentNode.BlockEdit;
        }
        $v_0 = parentNode.ContainsSiteLabel;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$9_1 = ($v_0);
            delete parentNode.ContainsSiteLabel;
        }
        $v_0 = parentNode.DisplayName;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$A_1 = ($v_0);
            delete parentNode.DisplayName;
        }
        $v_0 = parentNode.EncryptionRMSTemplateId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$B_1 = ($v_0);
            delete parentNode.EncryptionRMSTemplateId;
        }
        $v_0 = parentNode.HasRetentionAction;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$C_1 = ($v_0);
            delete parentNode.HasRetentionAction;
        }
        $v_0 = parentNode.IsEventTag;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$D_1 = ($v_0);
            delete parentNode.IsEventTag;
        }
        $v_0 = parentNode.Notes;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$G_1 = ($v_0);
            delete parentNode.Notes;
        }
        $v_0 = parentNode.RequireSenderAuthenticationEnabled;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$I_1 = ($v_0);
            delete parentNode.RequireSenderAuthenticationEnabled;
        }
        $v_0 = parentNode.ReviewerEmail;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$J_1 = ($v_0);
            delete parentNode.ReviewerEmail;
        }
        $v_0 = parentNode.SharingCapabilities;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$K_1 = ($v_0);
            delete parentNode.SharingCapabilities;
        }
        $v_0 = parentNode.SuperLock;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$L_1 = ($v_0);
            delete parentNode.SuperLock;
        }
        $v_0 = parentNode.TagDuration;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$M_1 = ($v_0);
            delete parentNode.TagDuration;
        }
        $v_0 = parentNode.TagId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$N_1 = ($v_0);
            delete parentNode.TagId;
        }
        $v_0 = parentNode.TagName;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$O_1 = ($v_0);
            delete parentNode.TagName;
        }
        $v_0 = parentNode.TagRetentionBasedOn;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$P_1 = ($v_0);
            delete parentNode.TagRetentionBasedOn;
        }
    }
}


SP.CompliancePolicy.DlpClassificationResult = function SP_CompliancePolicy_DlpClassificationResult() {
    SP.CompliancePolicy.DlpClassificationResult.initializeBase(this);
}
SP.CompliancePolicy.DlpClassificationResult.prototype = {
    $0_1: null,
    $1_1: 0,
    $2_1: 0,
    
    get_classificationId: function SP_CompliancePolicy_DlpClassificationResult$get_classificationId() {
        return this.$0_1;
    },
    
    set_classificationId: function SP_CompliancePolicy_DlpClassificationResult$set_classificationId(value) {
        this.$0_1 = value;
        return value;
    },
    
    get_confidence: function SP_CompliancePolicy_DlpClassificationResult$get_confidence() {
        return this.$1_1;
    },
    
    set_confidence: function SP_CompliancePolicy_DlpClassificationResult$set_confidence(value) {
        this.$1_1 = value;
        return value;
    },
    
    get_count: function SP_CompliancePolicy_DlpClassificationResult$get_count() {
        return this.$2_1;
    },
    
    set_count: function SP_CompliancePolicy_DlpClassificationResult$set_count(value) {
        this.$2_1 = value;
        return value;
    },
    
    get_typeId: function SP_CompliancePolicy_DlpClassificationResult$get_typeId() {
        return '{ff35427d-2450-4603-aa55-9272d3acdb33}';
    },
    
    writeToXml: function SP_CompliancePolicy_DlpClassificationResult$writeToXml(writer, serializationContext) {
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = [ 'ClassificationId', 'Confidence', 'Count' ];
        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    
    initPropertiesFromJson: function SP_CompliancePolicy_DlpClassificationResult$initPropertiesFromJson(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.ClassificationId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$0_1 = ($v_0);
            delete parentNode.ClassificationId;
        }
        $v_0 = parentNode.Confidence;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1_1 = ($v_0);
            delete parentNode.Confidence;
        }
        $v_0 = parentNode.Count;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$2_1 = ($v_0);
            delete parentNode.Count;
        }
    }
}


SP.CompliancePolicy.PendingReviewItemsStatistics = function SP_CompliancePolicy_PendingReviewItemsStatistics() {
    SP.CompliancePolicy.PendingReviewItemsStatistics.initializeBase(this);
}
SP.CompliancePolicy.PendingReviewItemsStatistics.prototype = {
    $E_1: null,
    $F_1: null,
    $H_1: 0,
    
    get_labelId: function SP_CompliancePolicy_PendingReviewItemsStatistics$get_labelId() {
        return this.$E_1;
    },
    
    get_labelName: function SP_CompliancePolicy_PendingReviewItemsStatistics$get_labelName() {
        return this.$F_1;
    },
    
    get_pendingReviewItemsCount: function SP_CompliancePolicy_PendingReviewItemsStatistics$get_pendingReviewItemsCount() {
        return this.$H_1;
    },
    
    get_typeId: function SP_CompliancePolicy_PendingReviewItemsStatistics$get_typeId() {
        return '{61aec189-a6f3-4364-91c4-26914d649e06}';
    },
    
    writeToXml: function SP_CompliancePolicy_PendingReviewItemsStatistics$writeToXml(writer, serializationContext) {
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = [ 'LabelId', 'LabelName', 'PendingReviewItemsCount' ];
        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    
    initPropertiesFromJson: function SP_CompliancePolicy_PendingReviewItemsStatistics$initPropertiesFromJson(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.LabelId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$E_1 = ($v_0);
            delete parentNode.LabelId;
        }
        $v_0 = parentNode.LabelName;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$F_1 = ($v_0);
            delete parentNode.LabelName;
        }
        $v_0 = parentNode.PendingReviewItemsCount;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$H_1 = ($v_0);
            delete parentNode.PendingReviewItemsCount;
        }
    }
}


SP.CompliancePolicy.PolicyEvaluationInfo = function SP_CompliancePolicy_PolicyEvaluationInfo(context, objectPath) {
    SP.CompliancePolicy.PolicyEvaluationInfo.initializeBase(this, [ context, objectPath ]);
}
SP.CompliancePolicy.PolicyEvaluationInfo.prototype = {
    
    get_applicablePolicies: function SP_CompliancePolicy_PolicyEvaluationInfo$get_applicablePolicies() {
        this.checkUninitializedProperty('ApplicablePolicies');
        return ((this.get_objectData().get_properties()['ApplicablePolicies']));
    },
    
    get_dlpAccessScope: function SP_CompliancePolicy_PolicyEvaluationInfo$get_dlpAccessScope() {
        this.checkUninitializedProperty('DlpAccessScope');
        return ((this.get_objectData().get_properties()['DlpAccessScope']));
    },
    
    get_matchedRules: function SP_CompliancePolicy_PolicyEvaluationInfo$get_matchedRules() {
        this.checkUninitializedProperty('MatchedRules');
        return ((this.get_objectData().get_properties()['MatchedRules']));
    },
    
    get_overriddenRules: function SP_CompliancePolicy_PolicyEvaluationInfo$get_overriddenRules() {
        this.checkUninitializedProperty('OverriddenRules');
        return ((this.get_objectData().get_properties()['OverriddenRules']));
    },
    
    initPropertiesFromJson: function SP_CompliancePolicy_PolicyEvaluationInfo$initPropertiesFromJson(parentNode) {
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.ApplicablePolicies;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ApplicablePolicies'] = ((SP.DataConvert.fixupType(this.get_context(), $v_0)));
            delete parentNode.ApplicablePolicies;
        }
        $v_0 = parentNode.DlpAccessScope;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['DlpAccessScope'] = ((SP.DataConvert.fixupType(this.get_context(), $v_0)));
            delete parentNode.DlpAccessScope;
        }
        $v_0 = parentNode.MatchedRules;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['MatchedRules'] = ((SP.DataConvert.fixupType(this.get_context(), $v_0)));
            delete parentNode.MatchedRules;
        }
        $v_0 = parentNode.OverriddenRules;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['OverriddenRules'] = ((SP.DataConvert.fixupType(this.get_context(), $v_0)));
            delete parentNode.OverriddenRules;
        }
    }
}


SP.CompliancePolicy.PolicyEvaluationInfoPropertyNames = function SP_CompliancePolicy_PolicyEvaluationInfoPropertyNames() {
}


SP.CompliancePolicy.SPContainerId = function SP_CompliancePolicy_SPContainerId(context, objectPath) {
    SP.CompliancePolicy.SPContainerId.initializeBase(this, [ context, objectPath ]);
}
SP.CompliancePolicy.SPContainerId.createFromList = function SP_CompliancePolicy_SPContainerId$createFromList(context, list) {
    if ((!context)) {
        throw Error.argumentNull('context');
    }
    var $v_0;
    $v_0 = new SP.CompliancePolicy.SPContainerId(context, new SP.ObjectPathStaticMethod(context, '{184f5ffb-43cb-4579-95cb-3ca29091f22e}', 'CreateFromList', [ list ]));
    return $v_0;
}
SP.CompliancePolicy.SPContainerId.createFromWeb = function SP_CompliancePolicy_SPContainerId$createFromWeb(context, web) {
    if ((!context)) {
        throw Error.argumentNull('context');
    }
    var $v_0;
    $v_0 = new SP.CompliancePolicy.SPContainerId(context, new SP.ObjectPathStaticMethod(context, '{184f5ffb-43cb-4579-95cb-3ca29091f22e}', 'CreateFromWeb', [ web ]));
    return $v_0;
}
SP.CompliancePolicy.SPContainerId.createFromSite = function SP_CompliancePolicy_SPContainerId$createFromSite(context, site) {
    if ((!context)) {
        throw Error.argumentNull('context');
    }
    var $v_0;
    $v_0 = new SP.CompliancePolicy.SPContainerId(context, new SP.ObjectPathStaticMethod(context, '{184f5ffb-43cb-4579-95cb-3ca29091f22e}', 'CreateFromSite', [ site ]));
    return $v_0;
}
SP.CompliancePolicy.SPContainerId.create = function SP_CompliancePolicy_SPContainerId$create(context, containerId) {
    if ((!context)) {
        throw Error.argumentNull('context');
    }
    var $v_0;
    $v_0 = new SP.CompliancePolicy.SPContainerId(context, new SP.ObjectPathStaticMethod(context, '{184f5ffb-43cb-4579-95cb-3ca29091f22e}', 'Create', [ containerId ]));
    return $v_0;
}
SP.CompliancePolicy.SPContainerId.prototype = {
    
    get_containerType: function SP_CompliancePolicy_SPContainerId$get_containerType() {
        this.checkUninitializedProperty('ContainerType');
        return ((this.get_objectData().get_properties()['ContainerType']));
    },
    
    set_containerType: function SP_CompliancePolicy_SPContainerId$set_containerType(value) {
        this.get_objectData().get_properties()['ContainerType'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'ContainerType', value));
        }
        return value;
    },
    
    get_listId: function SP_CompliancePolicy_SPContainerId$get_listId() {
        this.checkUninitializedProperty('ListId');
        return ((this.get_objectData().get_properties()['ListId']));
    },
    
    set_listId: function SP_CompliancePolicy_SPContainerId$set_listId(value) {
        this.get_objectData().get_properties()['ListId'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'ListId', value));
        }
        return value;
    },
    
    get_siteId: function SP_CompliancePolicy_SPContainerId$get_siteId() {
        this.checkUninitializedProperty('SiteId');
        return ((this.get_objectData().get_properties()['SiteId']));
    },
    
    set_siteId: function SP_CompliancePolicy_SPContainerId$set_siteId(value) {
        this.get_objectData().get_properties()['SiteId'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'SiteId', value));
        }
        return value;
    },
    
    get_siteUrl: function SP_CompliancePolicy_SPContainerId$get_siteUrl() {
        this.checkUninitializedProperty('SiteUrl');
        return ((this.get_objectData().get_properties()['SiteUrl']));
    },
    
    set_siteUrl: function SP_CompliancePolicy_SPContainerId$set_siteUrl(value) {
        this.get_objectData().get_properties()['SiteUrl'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'SiteUrl', value));
        }
        return value;
    },
    
    get_tenantId: function SP_CompliancePolicy_SPContainerId$get_tenantId() {
        this.checkUninitializedProperty('TenantId');
        return ((this.get_objectData().get_properties()['TenantId']));
    },
    
    set_tenantId: function SP_CompliancePolicy_SPContainerId$set_tenantId(value) {
        this.get_objectData().get_properties()['TenantId'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'TenantId', value));
        }
        return value;
    },
    
    get_title: function SP_CompliancePolicy_SPContainerId$get_title() {
        this.checkUninitializedProperty('Title');
        return ((this.get_objectData().get_properties()['Title']));
    },
    
    set_title: function SP_CompliancePolicy_SPContainerId$set_title(value) {
        this.get_objectData().get_properties()['Title'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Title', value));
        }
        return value;
    },
    
    get_version: function SP_CompliancePolicy_SPContainerId$get_version() {
        this.checkUninitializedProperty('Version');
        return ((this.get_objectData().get_properties()['Version']));
    },
    
    set_version: function SP_CompliancePolicy_SPContainerId$set_version(value) {
        this.get_objectData().get_properties()['Version'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Version', value));
        }
        return value;
    },
    
    get_webId: function SP_CompliancePolicy_SPContainerId$get_webId() {
        this.checkUninitializedProperty('WebId');
        return ((this.get_objectData().get_properties()['WebId']));
    },
    
    set_webId: function SP_CompliancePolicy_SPContainerId$set_webId(value) {
        this.get_objectData().get_properties()['WebId'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'WebId', value));
        }
        return value;
    },
    
    initPropertiesFromJson: function SP_CompliancePolicy_SPContainerId$initPropertiesFromJson(parentNode) {
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.ContainerType;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ContainerType'] = ((SP.DataConvert.fixupType(this.get_context(), $v_0)));
            delete parentNode.ContainerType;
        }
        $v_0 = parentNode.ListId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ListId'] = ($v_0);
            delete parentNode.ListId;
        }
        $v_0 = parentNode.SiteId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['SiteId'] = ($v_0);
            delete parentNode.SiteId;
        }
        $v_0 = parentNode.SiteUrl;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['SiteUrl'] = ((SP.DataConvert.fixupType(this.get_context(), $v_0)));
            delete parentNode.SiteUrl;
        }
        $v_0 = parentNode.TenantId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['TenantId'] = ($v_0);
            delete parentNode.TenantId;
        }
        $v_0 = parentNode.Title;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Title'] = ($v_0);
            delete parentNode.Title;
        }
        $v_0 = parentNode.Version;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Version'] = ($v_0);
            delete parentNode.Version;
        }
        $v_0 = parentNode.WebId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['WebId'] = ($v_0);
            delete parentNode.WebId;
        }
    },
    
    serialize: function SP_CompliancePolicy_SPContainerId$serialize() {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'Serialize', null);
        $v_0.addQuery($v_2);
        $v_1 = new SP.StringResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    }
}


SP.CompliancePolicy.SPContainerIdPropertyNames = function SP_CompliancePolicy_SPContainerIdPropertyNames() {
}


SP.CompliancePolicy.SPPolicyAssociation = function SP_CompliancePolicy_SPPolicyAssociation(context, objectPath) {
    SP.CompliancePolicy.SPPolicyAssociation.initializeBase(this, [ context, objectPath ]);
}
SP.CompliancePolicy.SPPolicyAssociation.prototype = {
    
    get_allowOverride: function SP_CompliancePolicy_SPPolicyAssociation$get_allowOverride() {
        this.checkUninitializedProperty('AllowOverride');
        return ((this.get_objectData().get_properties()['AllowOverride']));
    },
    
    set_allowOverride: function SP_CompliancePolicy_SPPolicyAssociation$set_allowOverride(value) {
        this.get_objectData().get_properties()['AllowOverride'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'AllowOverride', value));
        }
        return value;
    },
    
    get_comment: function SP_CompliancePolicy_SPPolicyAssociation$get_comment() {
        this.checkUninitializedProperty('Comment');
        return ((this.get_objectData().get_properties()['Comment']));
    },
    
    set_comment: function SP_CompliancePolicy_SPPolicyAssociation$set_comment(value) {
        this.get_objectData().get_properties()['Comment'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Comment', value));
        }
        return value;
    },
    
    get_defaultPolicyDefinitionConfigId: function SP_CompliancePolicy_SPPolicyAssociation$get_defaultPolicyDefinitionConfigId() {
        this.checkUninitializedProperty('DefaultPolicyDefinitionConfigId');
        return ((this.get_objectData().get_properties()['DefaultPolicyDefinitionConfigId']));
    },
    
    set_defaultPolicyDefinitionConfigId: function SP_CompliancePolicy_SPPolicyAssociation$set_defaultPolicyDefinitionConfigId(value) {
        this.get_objectData().get_properties()['DefaultPolicyDefinitionConfigId'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'DefaultPolicyDefinitionConfigId', value));
        }
        return value;
    },
    
    get_description: function SP_CompliancePolicy_SPPolicyAssociation$get_description() {
        this.checkUninitializedProperty('Description');
        return ((this.get_objectData().get_properties()['Description']));
    },
    
    set_description: function SP_CompliancePolicy_SPPolicyAssociation$set_description(value) {
        this.get_objectData().get_properties()['Description'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Description', value));
        }
        return value;
    },
    
    get_identity: function SP_CompliancePolicy_SPPolicyAssociation$get_identity() {
        this.checkUninitializedProperty('Identity');
        return ((this.get_objectData().get_properties()['Identity']));
    },
    
    set_identity: function SP_CompliancePolicy_SPPolicyAssociation$set_identity(value) {
        this.get_objectData().get_properties()['Identity'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Identity', value));
        }
        return value;
    },
    
    get_name: function SP_CompliancePolicy_SPPolicyAssociation$get_name() {
        this.checkUninitializedProperty('Name');
        return ((this.get_objectData().get_properties()['Name']));
    },
    
    set_name: function SP_CompliancePolicy_SPPolicyAssociation$set_name(value) {
        this.get_objectData().get_properties()['Name'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Name', value));
        }
        return value;
    },
    
    get_policyApplyStatus: function SP_CompliancePolicy_SPPolicyAssociation$get_policyApplyStatus() {
        this.checkUninitializedProperty('PolicyApplyStatus');
        return ((this.get_objectData().get_properties()['PolicyApplyStatus']));
    },
    
    set_policyApplyStatus: function SP_CompliancePolicy_SPPolicyAssociation$set_policyApplyStatus(value) {
        this.get_objectData().get_properties()['PolicyApplyStatus'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'PolicyApplyStatus', value));
        }
        return value;
    },
    
    get_policyDefinitionConfigIds: function SP_CompliancePolicy_SPPolicyAssociation$get_policyDefinitionConfigIds() {
        this.checkUninitializedProperty('PolicyDefinitionConfigIds');
        return ((this.get_objectData().get_properties()['PolicyDefinitionConfigIds']));
    },
    
    set_policyDefinitionConfigIds: function SP_CompliancePolicy_SPPolicyAssociation$set_policyDefinitionConfigIds(value) {
        this.get_objectData().get_properties()['PolicyDefinitionConfigIds'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'PolicyDefinitionConfigIds', value));
        }
        return value;
    },
    
    get_scope: function SP_CompliancePolicy_SPPolicyAssociation$get_scope() {
        this.checkUninitializedProperty('Scope');
        return ((this.get_objectData().get_properties()['Scope']));
    },
    
    set_scope: function SP_CompliancePolicy_SPPolicyAssociation$set_scope(value) {
        this.get_objectData().get_properties()['Scope'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Scope', value));
        }
        return value;
    },
    
    get_source: function SP_CompliancePolicy_SPPolicyAssociation$get_source() {
        this.checkUninitializedProperty('Source');
        return ((this.get_objectData().get_properties()['Source']));
    },
    
    set_source: function SP_CompliancePolicy_SPPolicyAssociation$set_source(value) {
        this.get_objectData().get_properties()['Source'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Source', value));
        }
        return value;
    },
    
    get_version: function SP_CompliancePolicy_SPPolicyAssociation$get_version() {
        this.checkUninitializedProperty('Version');
        return ((this.get_objectData().get_properties()['Version']));
    },
    
    set_version: function SP_CompliancePolicy_SPPolicyAssociation$set_version(value) {
        this.get_objectData().get_properties()['Version'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Version', value));
        }
        return value;
    },
    
    get_whenAppliedUTC: function SP_CompliancePolicy_SPPolicyAssociation$get_whenAppliedUTC() {
        this.checkUninitializedProperty('WhenAppliedUTC');
        return ((this.get_objectData().get_properties()['WhenAppliedUTC']));
    },
    
    set_whenAppliedUTC: function SP_CompliancePolicy_SPPolicyAssociation$set_whenAppliedUTC(value) {
        this.get_objectData().get_properties()['WhenAppliedUTC'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'WhenAppliedUTC', value));
        }
        return value;
    },
    
    get_whenChangedUTC: function SP_CompliancePolicy_SPPolicyAssociation$get_whenChangedUTC() {
        this.checkUninitializedProperty('WhenChangedUTC');
        return ((this.get_objectData().get_properties()['WhenChangedUTC']));
    },
    
    set_whenChangedUTC: function SP_CompliancePolicy_SPPolicyAssociation$set_whenChangedUTC(value) {
        this.get_objectData().get_properties()['WhenChangedUTC'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'WhenChangedUTC', value));
        }
        return value;
    },
    
    get_whenCreatedUTC: function SP_CompliancePolicy_SPPolicyAssociation$get_whenCreatedUTC() {
        this.checkUninitializedProperty('WhenCreatedUTC');
        return ((this.get_objectData().get_properties()['WhenCreatedUTC']));
    },
    
    set_whenCreatedUTC: function SP_CompliancePolicy_SPPolicyAssociation$set_whenCreatedUTC(value) {
        this.get_objectData().get_properties()['WhenCreatedUTC'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'WhenCreatedUTC', value));
        }
        return value;
    },
    
    get_workload: function SP_CompliancePolicy_SPPolicyAssociation$get_workload() {
        this.checkUninitializedProperty('Workload');
        return ((this.get_objectData().get_properties()['Workload']));
    },
    
    set_workload: function SP_CompliancePolicy_SPPolicyAssociation$set_workload(value) {
        this.get_objectData().get_properties()['Workload'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Workload', value));
        }
        return value;
    },
    
    initPropertiesFromJson: function SP_CompliancePolicy_SPPolicyAssociation$initPropertiesFromJson(parentNode) {
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.AllowOverride;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['AllowOverride'] = ($v_0);
            delete parentNode.AllowOverride;
        }
        $v_0 = parentNode.Comment;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Comment'] = ($v_0);
            delete parentNode.Comment;
        }
        $v_0 = parentNode.DefaultPolicyDefinitionConfigId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['DefaultPolicyDefinitionConfigId'] = ($v_0);
            delete parentNode.DefaultPolicyDefinitionConfigId;
        }
        $v_0 = parentNode.Description;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Description'] = ($v_0);
            delete parentNode.Description;
        }
        $v_0 = parentNode.Identity;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Identity'] = ($v_0);
            delete parentNode.Identity;
        }
        $v_0 = parentNode.Name;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Name'] = ($v_0);
            delete parentNode.Name;
        }
        $v_0 = parentNode.PolicyApplyStatus;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['PolicyApplyStatus'] = ($v_0);
            delete parentNode.PolicyApplyStatus;
        }
        $v_0 = parentNode.PolicyDefinitionConfigIds;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['PolicyDefinitionConfigIds'] = ((SP.DataConvert.fixupType(this.get_context(), $v_0)));
            delete parentNode.PolicyDefinitionConfigIds;
        }
        $v_0 = parentNode.Scope;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Scope'] = ($v_0);
            delete parentNode.Scope;
        }
        $v_0 = parentNode.Source;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Source'] = ($v_0);
            delete parentNode.Source;
        }
        $v_0 = parentNode.Version;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Version'] = ($v_0);
            delete parentNode.Version;
        }
        $v_0 = parentNode.WhenAppliedUTC;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['WhenAppliedUTC'] = ($v_0);
            delete parentNode.WhenAppliedUTC;
        }
        $v_0 = parentNode.WhenChangedUTC;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['WhenChangedUTC'] = ($v_0);
            delete parentNode.WhenChangedUTC;
        }
        $v_0 = parentNode.WhenCreatedUTC;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['WhenCreatedUTC'] = ($v_0);
            delete parentNode.WhenCreatedUTC;
        }
        $v_0 = parentNode.Workload;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Workload'] = ($v_0);
            delete parentNode.Workload;
        }
    }
}


SP.CompliancePolicy.SPPolicyAssociationPropertyNames = function SP_CompliancePolicy_SPPolicyAssociationPropertyNames() {
}


SP.CompliancePolicy.SPPolicyBinding = function SP_CompliancePolicy_SPPolicyBinding(context, objectPath) {
    SP.CompliancePolicy.SPPolicyBinding.initializeBase(this, [ context, objectPath ]);
}
SP.CompliancePolicy.SPPolicyBinding.prototype = {
    
    get_bindingType: function SP_CompliancePolicy_SPPolicyBinding$get_bindingType() {
        this.checkUninitializedProperty('BindingType');
        return ((this.get_objectData().get_properties()['BindingType']));
    },
    
    set_bindingType: function SP_CompliancePolicy_SPPolicyBinding$set_bindingType(value) {
        this.get_objectData().get_properties()['BindingType'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'BindingType', value));
        }
        return value;
    },
    
    get_identity: function SP_CompliancePolicy_SPPolicyBinding$get_identity() {
        this.checkUninitializedProperty('Identity');
        return ((this.get_objectData().get_properties()['Identity']));
    },
    
    set_identity: function SP_CompliancePolicy_SPPolicyBinding$set_identity(value) {
        this.get_objectData().get_properties()['Identity'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Identity', value));
        }
        return value;
    },
    
    get_isExempt: function SP_CompliancePolicy_SPPolicyBinding$get_isExempt() {
        this.checkUninitializedProperty('IsExempt');
        return ((this.get_objectData().get_properties()['IsExempt']));
    },
    
    set_isExempt: function SP_CompliancePolicy_SPPolicyBinding$set_isExempt(value) {
        this.get_objectData().get_properties()['IsExempt'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'IsExempt', value));
        }
        return value;
    },
    
    get_mode: function SP_CompliancePolicy_SPPolicyBinding$get_mode() {
        this.checkUninitializedProperty('Mode');
        return ((this.get_objectData().get_properties()['Mode']));
    },
    
    set_mode: function SP_CompliancePolicy_SPPolicyBinding$set_mode(value) {
        this.get_objectData().get_properties()['Mode'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Mode', value));
        }
        return value;
    },
    
    get_name: function SP_CompliancePolicy_SPPolicyBinding$get_name() {
        this.checkUninitializedProperty('Name');
        return ((this.get_objectData().get_properties()['Name']));
    },
    
    set_name: function SP_CompliancePolicy_SPPolicyBinding$set_name(value) {
        this.get_objectData().get_properties()['Name'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Name', value));
        }
        return value;
    },
    
    get_policyApplyStatus: function SP_CompliancePolicy_SPPolicyBinding$get_policyApplyStatus() {
        this.checkUninitializedProperty('PolicyApplyStatus');
        return ((this.get_objectData().get_properties()['PolicyApplyStatus']));
    },
    
    set_policyApplyStatus: function SP_CompliancePolicy_SPPolicyBinding$set_policyApplyStatus(value) {
        this.get_objectData().get_properties()['PolicyApplyStatus'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'PolicyApplyStatus', value));
        }
        return value;
    },
    
    get_policyAssociationConfigId: function SP_CompliancePolicy_SPPolicyBinding$get_policyAssociationConfigId() {
        this.checkUninitializedProperty('PolicyAssociationConfigId');
        return ((this.get_objectData().get_properties()['PolicyAssociationConfigId']));
    },
    
    set_policyAssociationConfigId: function SP_CompliancePolicy_SPPolicyBinding$set_policyAssociationConfigId(value) {
        this.get_objectData().get_properties()['PolicyAssociationConfigId'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'PolicyAssociationConfigId', value));
        }
        return value;
    },
    
    get_policyDefinitionConfigId: function SP_CompliancePolicy_SPPolicyBinding$get_policyDefinitionConfigId() {
        this.checkUninitializedProperty('PolicyDefinitionConfigId');
        return ((this.get_objectData().get_properties()['PolicyDefinitionConfigId']));
    },
    
    set_policyDefinitionConfigId: function SP_CompliancePolicy_SPPolicyBinding$set_policyDefinitionConfigId(value) {
        this.get_objectData().get_properties()['PolicyDefinitionConfigId'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'PolicyDefinitionConfigId', value));
        }
        return value;
    },
    
    get_policyRuleConfigId: function SP_CompliancePolicy_SPPolicyBinding$get_policyRuleConfigId() {
        this.checkUninitializedProperty('PolicyRuleConfigId');
        return ((this.get_objectData().get_properties()['PolicyRuleConfigId']));
    },
    
    set_policyRuleConfigId: function SP_CompliancePolicy_SPPolicyBinding$set_policyRuleConfigId(value) {
        this.get_objectData().get_properties()['PolicyRuleConfigId'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'PolicyRuleConfigId', value));
        }
        return value;
    },
    
    get_scope: function SP_CompliancePolicy_SPPolicyBinding$get_scope() {
        this.checkUninitializedProperty('Scope');
        return ((this.get_objectData().get_properties()['Scope']));
    },
    
    set_scope: function SP_CompliancePolicy_SPPolicyBinding$set_scope(value) {
        this.get_objectData().get_properties()['Scope'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Scope', value));
        }
        return value;
    },
    
    get_source: function SP_CompliancePolicy_SPPolicyBinding$get_source() {
        this.checkUninitializedProperty('Source');
        return ((this.get_objectData().get_properties()['Source']));
    },
    
    set_source: function SP_CompliancePolicy_SPPolicyBinding$set_source(value) {
        this.get_objectData().get_properties()['Source'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Source', value));
        }
        return value;
    },
    
    get_version: function SP_CompliancePolicy_SPPolicyBinding$get_version() {
        this.checkUninitializedProperty('Version');
        return ((this.get_objectData().get_properties()['Version']));
    },
    
    set_version: function SP_CompliancePolicy_SPPolicyBinding$set_version(value) {
        this.get_objectData().get_properties()['Version'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Version', value));
        }
        return value;
    },
    
    get_whenAppliedUTC: function SP_CompliancePolicy_SPPolicyBinding$get_whenAppliedUTC() {
        this.checkUninitializedProperty('WhenAppliedUTC');
        return ((this.get_objectData().get_properties()['WhenAppliedUTC']));
    },
    
    set_whenAppliedUTC: function SP_CompliancePolicy_SPPolicyBinding$set_whenAppliedUTC(value) {
        this.get_objectData().get_properties()['WhenAppliedUTC'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'WhenAppliedUTC', value));
        }
        return value;
    },
    
    get_whenChangedUTC: function SP_CompliancePolicy_SPPolicyBinding$get_whenChangedUTC() {
        this.checkUninitializedProperty('WhenChangedUTC');
        return ((this.get_objectData().get_properties()['WhenChangedUTC']));
    },
    
    set_whenChangedUTC: function SP_CompliancePolicy_SPPolicyBinding$set_whenChangedUTC(value) {
        this.get_objectData().get_properties()['WhenChangedUTC'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'WhenChangedUTC', value));
        }
        return value;
    },
    
    get_whenCreatedUTC: function SP_CompliancePolicy_SPPolicyBinding$get_whenCreatedUTC() {
        this.checkUninitializedProperty('WhenCreatedUTC');
        return ((this.get_objectData().get_properties()['WhenCreatedUTC']));
    },
    
    set_whenCreatedUTC: function SP_CompliancePolicy_SPPolicyBinding$set_whenCreatedUTC(value) {
        this.get_objectData().get_properties()['WhenCreatedUTC'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'WhenCreatedUTC', value));
        }
        return value;
    },
    
    get_workload: function SP_CompliancePolicy_SPPolicyBinding$get_workload() {
        this.checkUninitializedProperty('Workload');
        return ((this.get_objectData().get_properties()['Workload']));
    },
    
    set_workload: function SP_CompliancePolicy_SPPolicyBinding$set_workload(value) {
        this.get_objectData().get_properties()['Workload'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Workload', value));
        }
        return value;
    },
    
    initPropertiesFromJson: function SP_CompliancePolicy_SPPolicyBinding$initPropertiesFromJson(parentNode) {
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.BindingType;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['BindingType'] = ($v_0);
            delete parentNode.BindingType;
        }
        $v_0 = parentNode.Identity;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Identity'] = ($v_0);
            delete parentNode.Identity;
        }
        $v_0 = parentNode.IsExempt;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['IsExempt'] = ($v_0);
            delete parentNode.IsExempt;
        }
        $v_0 = parentNode.Mode;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Mode'] = ($v_0);
            delete parentNode.Mode;
        }
        $v_0 = parentNode.Name;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Name'] = ($v_0);
            delete parentNode.Name;
        }
        $v_0 = parentNode.PolicyApplyStatus;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['PolicyApplyStatus'] = ($v_0);
            delete parentNode.PolicyApplyStatus;
        }
        $v_0 = parentNode.PolicyAssociationConfigId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['PolicyAssociationConfigId'] = ($v_0);
            delete parentNode.PolicyAssociationConfigId;
        }
        $v_0 = parentNode.PolicyDefinitionConfigId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['PolicyDefinitionConfigId'] = ($v_0);
            delete parentNode.PolicyDefinitionConfigId;
        }
        $v_0 = parentNode.PolicyRuleConfigId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['PolicyRuleConfigId'] = ($v_0);
            delete parentNode.PolicyRuleConfigId;
        }
        $v_0 = parentNode.Scope;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Scope'] = ($v_0);
            delete parentNode.Scope;
        }
        $v_0 = parentNode.Source;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Source'] = ($v_0);
            delete parentNode.Source;
        }
        $v_0 = parentNode.Version;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Version'] = ($v_0);
            delete parentNode.Version;
        }
        $v_0 = parentNode.WhenAppliedUTC;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['WhenAppliedUTC'] = ($v_0);
            delete parentNode.WhenAppliedUTC;
        }
        $v_0 = parentNode.WhenChangedUTC;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['WhenChangedUTC'] = ($v_0);
            delete parentNode.WhenChangedUTC;
        }
        $v_0 = parentNode.WhenCreatedUTC;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['WhenCreatedUTC'] = ($v_0);
            delete parentNode.WhenCreatedUTC;
        }
        $v_0 = parentNode.Workload;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Workload'] = ($v_0);
            delete parentNode.Workload;
        }
    }
}


SP.CompliancePolicy.SPPolicyBindingPropertyNames = function SP_CompliancePolicy_SPPolicyBindingPropertyNames() {
}


SP.CompliancePolicy.SPPolicyDefinition = function SP_CompliancePolicy_SPPolicyDefinition(context, objectPath) {
    SP.CompliancePolicy.SPPolicyDefinition.initializeBase(this, [ context, objectPath ]);
}
SP.CompliancePolicy.SPPolicyDefinition.prototype = {
    
    get_comment: function SP_CompliancePolicy_SPPolicyDefinition$get_comment() {
        this.checkUninitializedProperty('Comment');
        return ((this.get_objectData().get_properties()['Comment']));
    },
    
    set_comment: function SP_CompliancePolicy_SPPolicyDefinition$set_comment(value) {
        this.get_objectData().get_properties()['Comment'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Comment', value));
        }
        return value;
    },
    
    get_createdBy: function SP_CompliancePolicy_SPPolicyDefinition$get_createdBy() {
        this.checkUninitializedProperty('CreatedBy');
        return ((this.get_objectData().get_properties()['CreatedBy']));
    },
    
    set_createdBy: function SP_CompliancePolicy_SPPolicyDefinition$set_createdBy(value) {
        this.get_objectData().get_properties()['CreatedBy'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'CreatedBy', value));
        }
        return value;
    },
    
    get_defaultPolicyRuleConfigId: function SP_CompliancePolicy_SPPolicyDefinition$get_defaultPolicyRuleConfigId() {
        this.checkUninitializedProperty('DefaultPolicyRuleConfigId');
        return ((this.get_objectData().get_properties()['DefaultPolicyRuleConfigId']));
    },
    
    set_defaultPolicyRuleConfigId: function SP_CompliancePolicy_SPPolicyDefinition$set_defaultPolicyRuleConfigId(value) {
        this.get_objectData().get_properties()['DefaultPolicyRuleConfigId'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'DefaultPolicyRuleConfigId', value));
        }
        return value;
    },
    
    get_description: function SP_CompliancePolicy_SPPolicyDefinition$get_description() {
        this.checkUninitializedProperty('Description');
        return ((this.get_objectData().get_properties()['Description']));
    },
    
    set_description: function SP_CompliancePolicy_SPPolicyDefinition$set_description(value) {
        this.get_objectData().get_properties()['Description'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Description', value));
        }
        return value;
    },
    
    get_enabled: function SP_CompliancePolicy_SPPolicyDefinition$get_enabled() {
        this.checkUninitializedProperty('Enabled');
        return ((this.get_objectData().get_properties()['Enabled']));
    },
    
    set_enabled: function SP_CompliancePolicy_SPPolicyDefinition$set_enabled(value) {
        this.get_objectData().get_properties()['Enabled'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Enabled', value));
        }
        return value;
    },
    
    get_identity: function SP_CompliancePolicy_SPPolicyDefinition$get_identity() {
        this.checkUninitializedProperty('Identity');
        return ((this.get_objectData().get_properties()['Identity']));
    },
    
    set_identity: function SP_CompliancePolicy_SPPolicyDefinition$set_identity(value) {
        this.get_objectData().get_properties()['Identity'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Identity', value));
        }
        return value;
    },
    
    get_lastModifiedBy: function SP_CompliancePolicy_SPPolicyDefinition$get_lastModifiedBy() {
        this.checkUninitializedProperty('LastModifiedBy');
        return ((this.get_objectData().get_properties()['LastModifiedBy']));
    },
    
    set_lastModifiedBy: function SP_CompliancePolicy_SPPolicyDefinition$set_lastModifiedBy(value) {
        this.get_objectData().get_properties()['LastModifiedBy'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'LastModifiedBy', value));
        }
        return value;
    },
    
    get_mode: function SP_CompliancePolicy_SPPolicyDefinition$get_mode() {
        this.checkUninitializedProperty('Mode');
        return ((this.get_objectData().get_properties()['Mode']));
    },
    
    set_mode: function SP_CompliancePolicy_SPPolicyDefinition$set_mode(value) {
        this.get_objectData().get_properties()['Mode'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Mode', value));
        }
        return value;
    },
    
    get_name: function SP_CompliancePolicy_SPPolicyDefinition$get_name() {
        this.checkUninitializedProperty('Name');
        return ((this.get_objectData().get_properties()['Name']));
    },
    
    set_name: function SP_CompliancePolicy_SPPolicyDefinition$set_name(value) {
        this.get_objectData().get_properties()['Name'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Name', value));
        }
        return value;
    },
    
    get_policyBlob: function SP_CompliancePolicy_SPPolicyDefinition$get_policyBlob() {
        this.checkUninitializedProperty('PolicyBlob');
        return ((this.get_objectData().get_properties()['PolicyBlob']));
    },
    
    set_policyBlob: function SP_CompliancePolicy_SPPolicyDefinition$set_policyBlob(value) {
        this.get_objectData().get_properties()['PolicyBlob'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'PolicyBlob', value));
        }
        return value;
    },
    
    get_priority: function SP_CompliancePolicy_SPPolicyDefinition$get_priority() {
        this.checkUninitializedProperty('Priority');
        return ((this.get_objectData().get_properties()['Priority']));
    },
    
    set_priority: function SP_CompliancePolicy_SPPolicyDefinition$set_priority(value) {
        this.get_objectData().get_properties()['Priority'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Priority', value));
        }
        return value;
    },
    
    get_scenario: function SP_CompliancePolicy_SPPolicyDefinition$get_scenario() {
        this.checkUninitializedProperty('Scenario');
        return ((this.get_objectData().get_properties()['Scenario']));
    },
    
    set_scenario: function SP_CompliancePolicy_SPPolicyDefinition$set_scenario(value) {
        this.get_objectData().get_properties()['Scenario'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Scenario', value));
        }
        return value;
    },
    
    get_source: function SP_CompliancePolicy_SPPolicyDefinition$get_source() {
        this.checkUninitializedProperty('Source');
        return ((this.get_objectData().get_properties()['Source']));
    },
    
    set_source: function SP_CompliancePolicy_SPPolicyDefinition$set_source(value) {
        this.get_objectData().get_properties()['Source'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Source', value));
        }
        return value;
    },
    
    get_version: function SP_CompliancePolicy_SPPolicyDefinition$get_version() {
        this.checkUninitializedProperty('Version');
        return ((this.get_objectData().get_properties()['Version']));
    },
    
    set_version: function SP_CompliancePolicy_SPPolicyDefinition$set_version(value) {
        this.get_objectData().get_properties()['Version'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Version', value));
        }
        return value;
    },
    
    get_whenChangedUTC: function SP_CompliancePolicy_SPPolicyDefinition$get_whenChangedUTC() {
        this.checkUninitializedProperty('WhenChangedUTC');
        return ((this.get_objectData().get_properties()['WhenChangedUTC']));
    },
    
    set_whenChangedUTC: function SP_CompliancePolicy_SPPolicyDefinition$set_whenChangedUTC(value) {
        this.get_objectData().get_properties()['WhenChangedUTC'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'WhenChangedUTC', value));
        }
        return value;
    },
    
    get_whenCreatedUTC: function SP_CompliancePolicy_SPPolicyDefinition$get_whenCreatedUTC() {
        this.checkUninitializedProperty('WhenCreatedUTC');
        return ((this.get_objectData().get_properties()['WhenCreatedUTC']));
    },
    
    set_whenCreatedUTC: function SP_CompliancePolicy_SPPolicyDefinition$set_whenCreatedUTC(value) {
        this.get_objectData().get_properties()['WhenCreatedUTC'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'WhenCreatedUTC', value));
        }
        return value;
    },
    
    initPropertiesFromJson: function SP_CompliancePolicy_SPPolicyDefinition$initPropertiesFromJson(parentNode) {
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.Comment;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Comment'] = ($v_0);
            delete parentNode.Comment;
        }
        $v_0 = parentNode.CreatedBy;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['CreatedBy'] = ($v_0);
            delete parentNode.CreatedBy;
        }
        $v_0 = parentNode.DefaultPolicyRuleConfigId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['DefaultPolicyRuleConfigId'] = ($v_0);
            delete parentNode.DefaultPolicyRuleConfigId;
        }
        $v_0 = parentNode.Description;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Description'] = ($v_0);
            delete parentNode.Description;
        }
        $v_0 = parentNode.Enabled;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Enabled'] = ($v_0);
            delete parentNode.Enabled;
        }
        $v_0 = parentNode.Identity;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Identity'] = ($v_0);
            delete parentNode.Identity;
        }
        $v_0 = parentNode.LastModifiedBy;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['LastModifiedBy'] = ($v_0);
            delete parentNode.LastModifiedBy;
        }
        $v_0 = parentNode.Mode;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Mode'] = ($v_0);
            delete parentNode.Mode;
        }
        $v_0 = parentNode.Name;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Name'] = ($v_0);
            delete parentNode.Name;
        }
        $v_0 = parentNode.PolicyBlob;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['PolicyBlob'] = ($v_0);
            delete parentNode.PolicyBlob;
        }
        $v_0 = parentNode.Priority;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Priority'] = ($v_0);
            delete parentNode.Priority;
        }
        $v_0 = parentNode.Scenario;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Scenario'] = ($v_0);
            delete parentNode.Scenario;
        }
        $v_0 = parentNode.Source;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Source'] = ($v_0);
            delete parentNode.Source;
        }
        $v_0 = parentNode.Version;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Version'] = ($v_0);
            delete parentNode.Version;
        }
        $v_0 = parentNode.WhenChangedUTC;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['WhenChangedUTC'] = ($v_0);
            delete parentNode.WhenChangedUTC;
        }
        $v_0 = parentNode.WhenCreatedUTC;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['WhenCreatedUTC'] = ($v_0);
            delete parentNode.WhenCreatedUTC;
        }
    }
}


SP.CompliancePolicy.SPPolicyDefinitionPropertyNames = function SP_CompliancePolicy_SPPolicyDefinitionPropertyNames() {
}


SP.CompliancePolicy.SPPolicyEvent = function SP_CompliancePolicy_SPPolicyEvent(context, objectPath) {
    SP.CompliancePolicy.SPPolicyEvent.initializeBase(this, [ context, objectPath ]);
}
SP.CompliancePolicy.SPPolicyEvent.prototype = {
    
    get_eventDateTime: function SP_CompliancePolicy_SPPolicyEvent$get_eventDateTime() {
        this.checkUninitializedProperty('EventDateTime');
        return ((this.get_objectData().get_properties()['EventDateTime']));
    },
    
    set_eventDateTime: function SP_CompliancePolicy_SPPolicyEvent$set_eventDateTime(value) {
        this.get_objectData().get_properties()['EventDateTime'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'EventDateTime', value));
        }
        return value;
    },
    
    get_eventTags: function SP_CompliancePolicy_SPPolicyEvent$get_eventTags() {
        this.checkUninitializedProperty('EventTags');
        return ((this.get_objectData().get_properties()['EventTags']));
    },
    
    set_eventTags: function SP_CompliancePolicy_SPPolicyEvent$set_eventTags(value) {
        this.get_objectData().get_properties()['EventTags'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'EventTags', value));
        }
        return value;
    },
    
    get_id: function SP_CompliancePolicy_SPPolicyEvent$get_id() {
        this.checkUninitializedProperty('Id');
        return ((this.get_objectData().get_properties()['Id']));
    },
    
    set_id: function SP_CompliancePolicy_SPPolicyEvent$set_id(value) {
        this.get_objectData().get_properties()['Id'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Id', value));
        }
        return value;
    },
    
    get_name: function SP_CompliancePolicy_SPPolicyEvent$get_name() {
        this.checkUninitializedProperty('Name');
        return ((this.get_objectData().get_properties()['Name']));
    },
    
    set_name: function SP_CompliancePolicy_SPPolicyEvent$set_name(value) {
        this.get_objectData().get_properties()['Name'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Name', value));
        }
        return value;
    },
    
    get_statusData: function SP_CompliancePolicy_SPPolicyEvent$get_statusData() {
        this.checkUninitializedProperty('StatusData');
        return ((this.get_objectData().get_properties()['StatusData']));
    },
    
    set_statusData: function SP_CompliancePolicy_SPPolicyEvent$set_statusData(value) {
        this.get_objectData().get_properties()['StatusData'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'StatusData', value));
        }
        return value;
    },
    
    get_whenChangedUTC: function SP_CompliancePolicy_SPPolicyEvent$get_whenChangedUTC() {
        this.checkUninitializedProperty('WhenChangedUTC');
        return ((this.get_objectData().get_properties()['WhenChangedUTC']));
    },
    
    set_whenChangedUTC: function SP_CompliancePolicy_SPPolicyEvent$set_whenChangedUTC(value) {
        this.get_objectData().get_properties()['WhenChangedUTC'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'WhenChangedUTC', value));
        }
        return value;
    },
    
    get_whenCreatedUTC: function SP_CompliancePolicy_SPPolicyEvent$get_whenCreatedUTC() {
        this.checkUninitializedProperty('WhenCreatedUTC');
        return ((this.get_objectData().get_properties()['WhenCreatedUTC']));
    },
    
    set_whenCreatedUTC: function SP_CompliancePolicy_SPPolicyEvent$set_whenCreatedUTC(value) {
        this.get_objectData().get_properties()['WhenCreatedUTC'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'WhenCreatedUTC', value));
        }
        return value;
    },
    
    get_workload: function SP_CompliancePolicy_SPPolicyEvent$get_workload() {
        this.checkUninitializedProperty('Workload');
        return ((this.get_objectData().get_properties()['Workload']));
    },
    
    set_workload: function SP_CompliancePolicy_SPPolicyEvent$set_workload(value) {
        this.get_objectData().get_properties()['Workload'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Workload', value));
        }
        return value;
    },
    
    initPropertiesFromJson: function SP_CompliancePolicy_SPPolicyEvent$initPropertiesFromJson(parentNode) {
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.EventDateTime;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['EventDateTime'] = ($v_0);
            delete parentNode.EventDateTime;
        }
        $v_0 = parentNode.EventTags;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['EventTags'] = ((SP.DataConvert.fixupType(this.get_context(), $v_0)));
            delete parentNode.EventTags;
        }
        $v_0 = parentNode.Id;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Id'] = ($v_0);
            delete parentNode.Id;
        }
        $v_0 = parentNode.Name;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Name'] = ($v_0);
            delete parentNode.Name;
        }
        $v_0 = parentNode.StatusData;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['StatusData'] = ($v_0);
            delete parentNode.StatusData;
        }
        $v_0 = parentNode.WhenChangedUTC;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['WhenChangedUTC'] = ($v_0);
            delete parentNode.WhenChangedUTC;
        }
        $v_0 = parentNode.WhenCreatedUTC;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['WhenCreatedUTC'] = ($v_0);
            delete parentNode.WhenCreatedUTC;
        }
        $v_0 = parentNode.Workload;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Workload'] = ($v_0);
            delete parentNode.Workload;
        }
    }
}


SP.CompliancePolicy.SPPolicyEventPropertyNames = function SP_CompliancePolicy_SPPolicyEventPropertyNames() {
}


SP.CompliancePolicy.SPPolicyRule = function SP_CompliancePolicy_SPPolicyRule(context, objectPath) {
    SP.CompliancePolicy.SPPolicyRule.initializeBase(this, [ context, objectPath ]);
}
SP.CompliancePolicy.SPPolicyRule.prototype = {
    
    get_comment: function SP_CompliancePolicy_SPPolicyRule$get_comment() {
        this.checkUninitializedProperty('Comment');
        return ((this.get_objectData().get_properties()['Comment']));
    },
    
    set_comment: function SP_CompliancePolicy_SPPolicyRule$set_comment(value) {
        this.get_objectData().get_properties()['Comment'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Comment', value));
        }
        return value;
    },
    
    get_createdBy: function SP_CompliancePolicy_SPPolicyRule$get_createdBy() {
        this.checkUninitializedProperty('CreatedBy');
        return ((this.get_objectData().get_properties()['CreatedBy']));
    },
    
    set_createdBy: function SP_CompliancePolicy_SPPolicyRule$set_createdBy(value) {
        this.get_objectData().get_properties()['CreatedBy'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'CreatedBy', value));
        }
        return value;
    },
    
    get_description: function SP_CompliancePolicy_SPPolicyRule$get_description() {
        this.checkUninitializedProperty('Description');
        return ((this.get_objectData().get_properties()['Description']));
    },
    
    set_description: function SP_CompliancePolicy_SPPolicyRule$set_description(value) {
        this.get_objectData().get_properties()['Description'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Description', value));
        }
        return value;
    },
    
    get_enabled: function SP_CompliancePolicy_SPPolicyRule$get_enabled() {
        this.checkUninitializedProperty('Enabled');
        return ((this.get_objectData().get_properties()['Enabled']));
    },
    
    set_enabled: function SP_CompliancePolicy_SPPolicyRule$set_enabled(value) {
        this.get_objectData().get_properties()['Enabled'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Enabled', value));
        }
        return value;
    },
    
    get_identity: function SP_CompliancePolicy_SPPolicyRule$get_identity() {
        this.checkUninitializedProperty('Identity');
        return ((this.get_objectData().get_properties()['Identity']));
    },
    
    set_identity: function SP_CompliancePolicy_SPPolicyRule$set_identity(value) {
        this.get_objectData().get_properties()['Identity'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Identity', value));
        }
        return value;
    },
    
    get_lastModifiedBy: function SP_CompliancePolicy_SPPolicyRule$get_lastModifiedBy() {
        this.checkUninitializedProperty('LastModifiedBy');
        return ((this.get_objectData().get_properties()['LastModifiedBy']));
    },
    
    set_lastModifiedBy: function SP_CompliancePolicy_SPPolicyRule$set_lastModifiedBy(value) {
        this.get_objectData().get_properties()['LastModifiedBy'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'LastModifiedBy', value));
        }
        return value;
    },
    
    get_mode: function SP_CompliancePolicy_SPPolicyRule$get_mode() {
        this.checkUninitializedProperty('Mode');
        return ((this.get_objectData().get_properties()['Mode']));
    },
    
    set_mode: function SP_CompliancePolicy_SPPolicyRule$set_mode(value) {
        this.get_objectData().get_properties()['Mode'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Mode', value));
        }
        return value;
    },
    
    get_name: function SP_CompliancePolicy_SPPolicyRule$get_name() {
        this.checkUninitializedProperty('Name');
        return ((this.get_objectData().get_properties()['Name']));
    },
    
    set_name: function SP_CompliancePolicy_SPPolicyRule$set_name(value) {
        this.get_objectData().get_properties()['Name'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Name', value));
        }
        return value;
    },
    
    get_policyDefinitionConfigId: function SP_CompliancePolicy_SPPolicyRule$get_policyDefinitionConfigId() {
        this.checkUninitializedProperty('PolicyDefinitionConfigId');
        return ((this.get_objectData().get_properties()['PolicyDefinitionConfigId']));
    },
    
    set_policyDefinitionConfigId: function SP_CompliancePolicy_SPPolicyRule$set_policyDefinitionConfigId(value) {
        this.get_objectData().get_properties()['PolicyDefinitionConfigId'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'PolicyDefinitionConfigId', value));
        }
        return value;
    },
    
    get_priority: function SP_CompliancePolicy_SPPolicyRule$get_priority() {
        this.checkUninitializedProperty('Priority');
        return ((this.get_objectData().get_properties()['Priority']));
    },
    
    set_priority: function SP_CompliancePolicy_SPPolicyRule$set_priority(value) {
        this.get_objectData().get_properties()['Priority'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Priority', value));
        }
        return value;
    },
    
    get_ruleBlob: function SP_CompliancePolicy_SPPolicyRule$get_ruleBlob() {
        this.checkUninitializedProperty('RuleBlob');
        return ((this.get_objectData().get_properties()['RuleBlob']));
    },
    
    set_ruleBlob: function SP_CompliancePolicy_SPPolicyRule$set_ruleBlob(value) {
        this.get_objectData().get_properties()['RuleBlob'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'RuleBlob', value));
        }
        return value;
    },
    
    get_scenario: function SP_CompliancePolicy_SPPolicyRule$get_scenario() {
        this.checkUninitializedProperty('Scenario');
        return ((this.get_objectData().get_properties()['Scenario']));
    },
    
    set_scenario: function SP_CompliancePolicy_SPPolicyRule$set_scenario(value) {
        this.get_objectData().get_properties()['Scenario'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Scenario', value));
        }
        return value;
    },
    
    get_source: function SP_CompliancePolicy_SPPolicyRule$get_source() {
        this.checkUninitializedProperty('Source');
        return ((this.get_objectData().get_properties()['Source']));
    },
    
    set_source: function SP_CompliancePolicy_SPPolicyRule$set_source(value) {
        this.get_objectData().get_properties()['Source'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Source', value));
        }
        return value;
    },
    
    get_version: function SP_CompliancePolicy_SPPolicyRule$get_version() {
        this.checkUninitializedProperty('Version');
        return ((this.get_objectData().get_properties()['Version']));
    },
    
    set_version: function SP_CompliancePolicy_SPPolicyRule$set_version(value) {
        this.get_objectData().get_properties()['Version'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Version', value));
        }
        return value;
    },
    
    get_whenChangedUTC: function SP_CompliancePolicy_SPPolicyRule$get_whenChangedUTC() {
        this.checkUninitializedProperty('WhenChangedUTC');
        return ((this.get_objectData().get_properties()['WhenChangedUTC']));
    },
    
    set_whenChangedUTC: function SP_CompliancePolicy_SPPolicyRule$set_whenChangedUTC(value) {
        this.get_objectData().get_properties()['WhenChangedUTC'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'WhenChangedUTC', value));
        }
        return value;
    },
    
    get_whenCreatedUTC: function SP_CompliancePolicy_SPPolicyRule$get_whenCreatedUTC() {
        this.checkUninitializedProperty('WhenCreatedUTC');
        return ((this.get_objectData().get_properties()['WhenCreatedUTC']));
    },
    
    set_whenCreatedUTC: function SP_CompliancePolicy_SPPolicyRule$set_whenCreatedUTC(value) {
        this.get_objectData().get_properties()['WhenCreatedUTC'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'WhenCreatedUTC', value));
        }
        return value;
    },
    
    initPropertiesFromJson: function SP_CompliancePolicy_SPPolicyRule$initPropertiesFromJson(parentNode) {
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.Comment;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Comment'] = ($v_0);
            delete parentNode.Comment;
        }
        $v_0 = parentNode.CreatedBy;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['CreatedBy'] = ($v_0);
            delete parentNode.CreatedBy;
        }
        $v_0 = parentNode.Description;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Description'] = ($v_0);
            delete parentNode.Description;
        }
        $v_0 = parentNode.Enabled;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Enabled'] = ($v_0);
            delete parentNode.Enabled;
        }
        $v_0 = parentNode.Identity;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Identity'] = ($v_0);
            delete parentNode.Identity;
        }
        $v_0 = parentNode.LastModifiedBy;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['LastModifiedBy'] = ($v_0);
            delete parentNode.LastModifiedBy;
        }
        $v_0 = parentNode.Mode;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Mode'] = ($v_0);
            delete parentNode.Mode;
        }
        $v_0 = parentNode.Name;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Name'] = ($v_0);
            delete parentNode.Name;
        }
        $v_0 = parentNode.PolicyDefinitionConfigId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['PolicyDefinitionConfigId'] = ($v_0);
            delete parentNode.PolicyDefinitionConfigId;
        }
        $v_0 = parentNode.Priority;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Priority'] = ($v_0);
            delete parentNode.Priority;
        }
        $v_0 = parentNode.RuleBlob;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['RuleBlob'] = ($v_0);
            delete parentNode.RuleBlob;
        }
        $v_0 = parentNode.Scenario;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Scenario'] = ($v_0);
            delete parentNode.Scenario;
        }
        $v_0 = parentNode.Source;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Source'] = ($v_0);
            delete parentNode.Source;
        }
        $v_0 = parentNode.Version;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Version'] = ($v_0);
            delete parentNode.Version;
        }
        $v_0 = parentNode.WhenChangedUTC;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['WhenChangedUTC'] = ($v_0);
            delete parentNode.WhenChangedUTC;
        }
        $v_0 = parentNode.WhenCreatedUTC;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['WhenCreatedUTC'] = ($v_0);
            delete parentNode.WhenCreatedUTC;
        }
    }
}


SP.CompliancePolicy.SPPolicyRulePropertyNames = function SP_CompliancePolicy_SPPolicyRulePropertyNames() {
}


SP.CompliancePolicy.SPPolicyStore = function SP_CompliancePolicy_SPPolicyStore(context, web) {
    SP.CompliancePolicy.SPPolicyStore.initializeBase(this, [ context, SP.ClientUtility.getOrCreateObjectPathForConstructor(context, '{ebf00438-9914-45ac-af5b-d2d1009f55d6}', arguments) ]);
}
SP.CompliancePolicy.SPPolicyStore.newObject = function SP_CompliancePolicy_SPPolicyStore$newObject(context, web) {
    return new SP.CompliancePolicy.SPPolicyStore(context, new SP.ObjectPathConstructor(context, '{ebf00438-9914-45ac-af5b-d2d1009f55d6}', [ web ]));
}
SP.CompliancePolicy.SPPolicyStore.createPolicyAssociation = function SP_CompliancePolicy_SPPolicyStore$createPolicyAssociation(context) {
    if ((!context)) {
        throw Error.argumentNull('context');
    }
    var $v_0;
    $v_0 = new SP.CompliancePolicy.SPPolicyAssociation(context, new SP.ObjectPathStaticMethod(context, '{ebf00438-9914-45ac-af5b-d2d1009f55d6}', 'CreatePolicyAssociation', null));
    return $v_0;
}
SP.CompliancePolicy.SPPolicyStore.createPolicyEvent = function SP_CompliancePolicy_SPPolicyStore$createPolicyEvent(context) {
    if ((!context)) {
        throw Error.argumentNull('context');
    }
    var $v_0;
    $v_0 = new SP.CompliancePolicy.SPPolicyEvent(context, new SP.ObjectPathStaticMethod(context, '{ebf00438-9914-45ac-af5b-d2d1009f55d6}', 'CreatePolicyEvent', null));
    return $v_0;
}
SP.CompliancePolicy.SPPolicyStore.createPolicyRule = function SP_CompliancePolicy_SPPolicyStore$createPolicyRule(context) {
    if ((!context)) {
        throw Error.argumentNull('context');
    }
    var $v_0;
    $v_0 = new SP.CompliancePolicy.SPPolicyRule(context, new SP.ObjectPathStaticMethod(context, '{ebf00438-9914-45ac-af5b-d2d1009f55d6}', 'CreatePolicyRule', null));
    return $v_0;
}
SP.CompliancePolicy.SPPolicyStore.createPolicyDefinition = function SP_CompliancePolicy_SPPolicyStore$createPolicyDefinition(context) {
    if ((!context)) {
        throw Error.argumentNull('context');
    }
    var $v_0;
    $v_0 = new SP.CompliancePolicy.SPPolicyDefinition(context, new SP.ObjectPathStaticMethod(context, '{ebf00438-9914-45ac-af5b-d2d1009f55d6}', 'CreatePolicyDefinition', null));
    return $v_0;
}
SP.CompliancePolicy.SPPolicyStore.createPolicyBinding = function SP_CompliancePolicy_SPPolicyStore$createPolicyBinding(context) {
    if ((!context)) {
        throw Error.argumentNull('context');
    }
    var $v_0;
    $v_0 = new SP.CompliancePolicy.SPPolicyBinding(context, new SP.ObjectPathStaticMethod(context, '{ebf00438-9914-45ac-af5b-d2d1009f55d6}', 'CreatePolicyBinding', null));
    return $v_0;
}
SP.CompliancePolicy.SPPolicyStore.prototype = {
    
    notifyUnifiedPolicySyncForLogicalWorkload: function SP_CompliancePolicy_SPPolicyStore$notifyUnifiedPolicySyncForLogicalWorkload(notificationId, syncSvcUrl, changeInfos, syncNow, fullSyncForTenant, workload) {
        var $v_0 = this.get_context();
        var $v_1;
        $v_1 = new SP.CompliancePolicy.SPSyncNotificationEndpointInfo($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'NotifyUnifiedPolicySyncForLogicalWorkload', [ notificationId, syncSvcUrl, changeInfos, syncNow, fullSyncForTenant, workload ]));
        return $v_1;
    },
    
    getSPScsTenantEndPointInfo: function SP_CompliancePolicy_SPPolicyStore$getSPScsTenantEndPointInfo(eopCorrelationId) {
        var $v_0 = this.get_context();
        var $v_1;
        $v_1 = new SP.CompliancePolicy.SPScsTenantEndPointInfo($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetSPScsTenantEndPointInfo', [ eopCorrelationId ]));
        return $v_1;
    },
    
    notifyUnifiedFileSyncForSPTenant: function SP_CompliancePolicy_SPPolicyStore$notifyUnifiedFileSyncForSPTenant(syncFileType, notificationId) {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'NotifyUnifiedFileSyncForSPTenant', [ syncFileType, notificationId ]);
        $v_0.addQuery($v_2);
        $v_1 = new SP.BooleanResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    },
    
    updatePolicyAssociation: function SP_CompliancePolicy_SPPolicyStore$updatePolicyAssociation(policyAssociation) {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'UpdatePolicyAssociation', [ policyAssociation ]);
        $v_0.addQuery($v_1);
    },
    
    getPolicyAssociations: function SP_CompliancePolicy_SPPolicyStore$getPolicyAssociations(scenario, workload) {
        var $v_0 = this.get_context();
        var $v_1;
        $v_1 = new SP.ClientObjectList($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetPolicyAssociations', [ scenario, workload ]), SP.CompliancePolicy.SPPolicyAssociation);
        return $v_1;
    },
    
    getPolicyAssociation: function SP_CompliancePolicy_SPPolicyStore$getPolicyAssociation(policyAssociationId) {
        var $v_0 = this.get_context();
        var $v_1;
        $v_1 = new SP.CompliancePolicy.SPPolicyAssociation($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetPolicyAssociation', [ policyAssociationId ]));
        return $v_1;
    },
    
    getPolicyAssociationForContainer: function SP_CompliancePolicy_SPPolicyStore$getPolicyAssociationForContainer(containerId) {
        var $v_0 = this.get_context();
        var $v_1;
        $v_1 = new SP.CompliancePolicy.SPPolicyAssociation($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetPolicyAssociationForContainer', [ containerId ]));
        return $v_1;
    },
    
    deletePolicyAssociation: function SP_CompliancePolicy_SPPolicyStore$deletePolicyAssociation(policyAssociationId) {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'DeletePolicyAssociation', [ policyAssociationId ]);
        $v_0.addQuery($v_1);
    },
    
    getPolicyEventList: function SP_CompliancePolicy_SPPolicyStore$getPolicyEventList() {
        var $v_0 = this.get_context();
        var $v_1;
        $v_1 = new SP.List($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetPolicyEventList', null));
        return $v_1;
    },
    
    updatePolicyEvent: function SP_CompliancePolicy_SPPolicyStore$updatePolicyEvent(policyEvent) {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'UpdatePolicyEvent', [ policyEvent ]);
        $v_0.addQuery($v_1);
    },
    
    getPolicyEvent: function SP_CompliancePolicy_SPPolicyStore$getPolicyEvent(id) {
        var $v_0 = this.get_context();
        var $v_1;
        $v_1 = new SP.CompliancePolicy.SPPolicyEvent($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetPolicyEvent', [ id ]));
        return $v_1;
    },
    
    getPolicyEvents: function SP_CompliancePolicy_SPPolicyStore$getPolicyEvents(startDate, endDate) {
        var $v_0 = this.get_context();
        var $v_1;
        $v_1 = new SP.ClientObjectList($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetPolicyEvents', [ startDate, endDate ]), SP.CompliancePolicy.SPPolicyEvent);
        return $v_1;
    },
    
    updatePolicyRule: function SP_CompliancePolicy_SPPolicyStore$updatePolicyRule(policyRule) {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'UpdatePolicyRule', [ policyRule ]);
        $v_0.addQuery($v_1);
    },
    
    getPolicyRule: function SP_CompliancePolicy_SPPolicyStore$getPolicyRule(policyRuleId, throwIfNull) {
        var $v_0 = this.get_context();
        var $v_1;
        $v_1 = new SP.CompliancePolicy.SPPolicyRule($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetPolicyRule', [ policyRuleId, throwIfNull ]));
        return $v_1;
    },
    
    getPolicyRules: function SP_CompliancePolicy_SPPolicyStore$getPolicyRules(policyDefinitionId) {
        var $v_0 = this.get_context();
        var $v_1;
        $v_1 = new SP.ClientObjectList($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetPolicyRules', [ policyDefinitionId ]), SP.CompliancePolicy.SPPolicyRule);
        return $v_1;
    },
    
    deletePolicyRule: function SP_CompliancePolicy_SPPolicyStore$deletePolicyRule(policyRuleId) {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'DeletePolicyRule', [ policyRuleId ]);
        $v_0.addQuery($v_1);
    },
    
    updatePolicyDefinition: function SP_CompliancePolicy_SPPolicyStore$updatePolicyDefinition(policyDefinition) {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'UpdatePolicyDefinition', [ policyDefinition ]);
        $v_0.addQuery($v_1);
    },
    
    getPolicyDefinition: function SP_CompliancePolicy_SPPolicyStore$getPolicyDefinition(policyDefinitionId) {
        var $v_0 = this.get_context();
        var $v_1;
        $v_1 = new SP.CompliancePolicy.SPPolicyDefinition($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetPolicyDefinition', [ policyDefinitionId ]));
        return $v_1;
    },
    
    deletePolicyDefinition: function SP_CompliancePolicy_SPPolicyStore$deletePolicyDefinition(policyDefinitionId) {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'DeletePolicyDefinition', [ policyDefinitionId ]);
        $v_0.addQuery($v_1);
    },
    
    getPolicyBindings: function SP_CompliancePolicy_SPPolicyStore$getPolicyBindings(workload) {
        var $v_0 = this.get_context();
        var $v_1;
        $v_1 = new SP.ClientObjectList($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetPolicyBindings', [ workload ]), SP.CompliancePolicy.SPPolicyBinding);
        return $v_1;
    },
    
    getComplianceTags: function SP_CompliancePolicy_SPPolicyStore$getComplianceTags() {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'GetComplianceTags', null);
        $v_0.addQuery($v_2);
        $v_1 = (([]));
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    },
    
    getPolicyDefinitions: function SP_CompliancePolicy_SPPolicyStore$getPolicyDefinitions(scenario) {
        var $v_0 = this.get_context();
        var $v_1;
        $v_1 = new SP.ClientObjectList($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetPolicyDefinitions', [ scenario ]), SP.CompliancePolicy.SPPolicyDefinition);
        return $v_1;
    },
    
    updatePolicyBinding: function SP_CompliancePolicy_SPPolicyStore$updatePolicyBinding(policyBinding) {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'UpdatePolicyBinding', [ policyBinding ]);
        $v_0.addQuery($v_1);
    },
    
    getPolicyBinding: function SP_CompliancePolicy_SPPolicyStore$getPolicyBinding(policyBindingId) {
        var $v_0 = this.get_context();
        var $v_1;
        $v_1 = new SP.CompliancePolicy.SPPolicyBinding($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetPolicyBinding', [ policyBindingId ]));
        return $v_1;
    },
    
    deletePolicyBinding: function SP_CompliancePolicy_SPPolicyStore$deletePolicyBinding(policyBindingId) {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'DeletePolicyBinding', [ policyBindingId ]);
        $v_0.addQuery($v_1);
    }
}


SP.CompliancePolicy.SPPolicyStoreProxy = function SP_CompliancePolicy_SPPolicyStoreProxy(context, web) {
    SP.CompliancePolicy.SPPolicyStoreProxy.initializeBase(this, [ context, SP.ClientUtility.getOrCreateObjectPathForConstructor(context, '{9efa17eb-0d34-4f69-a085-5cc3f802439e}', arguments) ]);
}
SP.CompliancePolicy.SPPolicyStoreProxy.newObject = function SP_CompliancePolicy_SPPolicyStoreProxy$newObject(context, web) {
    return new SP.CompliancePolicy.SPPolicyStoreProxy(context, new SP.ObjectPathConstructor(context, '{9efa17eb-0d34-4f69-a085-5cc3f802439e}', [ web ]));
}
SP.CompliancePolicy.SPPolicyStoreProxy.overridePolicyTip = function SP_CompliancePolicy_SPPolicyStoreProxy$overridePolicyTip(context, itemUrl, userAction, justification, rules, classificationResults) {
    if ((!context)) {
        throw Error.argumentNull('context');
    }
    var $v_0;
    var $v_1 = new SP.ClientActionInvokeStaticMethod(context, '{9efa17eb-0d34-4f69-a085-5cc3f802439e}', 'OverridePolicyTip', [ itemUrl, userAction, justification, rules, classificationResults ]);
    context.addQuery($v_1);
    $v_0 = new SP.IntResult();
    context.addQueryIdAndResultObject($v_1.get_id(), $v_0);
    return $v_0;
}
SP.CompliancePolicy.SPPolicyStoreProxy.getPolicyEvaluationInfo = function SP_CompliancePolicy_SPPolicyStoreProxy$getPolicyEvaluationInfo(context, itemUrl, policyScenario, infos) {
    if ((!context)) {
        throw Error.argumentNull('context');
    }
    var $v_0;
    $v_0 = new SP.CompliancePolicy.PolicyEvaluationInfo(context, new SP.ObjectPathStaticMethod(context, '{9efa17eb-0d34-4f69-a085-5cc3f802439e}', 'GetPolicyEvaluationInfo', [ itemUrl, policyScenario, infos ]));
    return $v_0;
}
SP.CompliancePolicy.SPPolicyStoreProxy.applyDlpActions = function SP_CompliancePolicy_SPPolicyStoreProxy$applyDlpActions(context, itemUrl, actionsPayload) {
    if ((!context)) {
        throw Error.argumentNull('context');
    }
    var $v_0 = new SP.ClientActionInvokeStaticMethod(context, '{9efa17eb-0d34-4f69-a085-5cc3f802439e}', 'ApplyDlpActions', [ itemUrl, actionsPayload ]);
    context.addQuery($v_0);
}
SP.CompliancePolicy.SPPolicyStoreProxy.getAvailableTagsForSite = function SP_CompliancePolicy_SPPolicyStoreProxy$getAvailableTagsForSite(context, siteUrl) {
    if ((!context)) {
        throw Error.argumentNull('context');
    }
    var $v_0;
    var $v_1 = new SP.ClientActionInvokeStaticMethod(context, '{9efa17eb-0d34-4f69-a085-5cc3f802439e}', 'GetAvailableTagsForSite', [ siteUrl ]);
    context.addQuery($v_1);
    $v_0 = (([]));
    context.addQueryIdAndResultObject($v_1.get_id(), $v_0);
    return $v_0;
}
SP.CompliancePolicy.SPPolicyStoreProxy.getAvailableTagsForSiteLabel = function SP_CompliancePolicy_SPPolicyStoreProxy$getAvailableTagsForSiteLabel(context) {
    if ((!context)) {
        throw Error.argumentNull('context');
    }
    var $v_0;
    var $v_1 = new SP.ClientActionInvokeStaticMethod(context, '{9efa17eb-0d34-4f69-a085-5cc3f802439e}', 'GetAvailableTagsForSiteLabel', null);
    context.addQuery($v_1);
    $v_0 = (([]));
    context.addQueryIdAndResultObject($v_1.get_id(), $v_0);
    return $v_0;
}
SP.CompliancePolicy.SPPolicyStoreProxy.getListComplianceTag = function SP_CompliancePolicy_SPPolicyStoreProxy$getListComplianceTag(context, listUrl) {
    if ((!context)) {
        throw Error.argumentNull('context');
    }
    var $v_0;
    var $v_1 = new SP.ClientActionInvokeStaticMethod(context, '{9efa17eb-0d34-4f69-a085-5cc3f802439e}', 'GetListComplianceTag', [ listUrl ]);
    context.addQuery($v_1);
    $v_0 = new SP.CompliancePolicy.ComplianceTag();
    context.addQueryIdAndResultObject($v_1.get_id(), $v_0);
    return $v_0;
}
SP.CompliancePolicy.SPPolicyStoreProxy.setListComplianceTag = function SP_CompliancePolicy_SPPolicyStoreProxy$setListComplianceTag(context, listUrl, complianceTagValue, blockDelete, blockEdit, syncToItems) {
    if ((!context)) {
        throw Error.argumentNull('context');
    }
    var $v_0 = new SP.ClientActionInvokeStaticMethod(context, '{9efa17eb-0d34-4f69-a085-5cc3f802439e}', 'SetListComplianceTag', [ listUrl, complianceTagValue, blockDelete, blockEdit, syncToItems ]);
    context.addQuery($v_0);
}
SP.CompliancePolicy.SPPolicyStoreProxy.setListComplianceTagWithMetaInfo = function SP_CompliancePolicy_SPPolicyStoreProxy$setListComplianceTagWithMetaInfo(context, listUrl, complianceTagValue, blockDelete, blockEdit, complianceTagWrittenTime, userEmailAddress, syncToItems) {
    if ((!context)) {
        throw Error.argumentNull('context');
    }
    var $v_0 = new SP.ClientActionInvokeStaticMethod(context, '{9efa17eb-0d34-4f69-a085-5cc3f802439e}', 'SetListComplianceTagWithMetaInfo', [ listUrl, complianceTagValue, blockDelete, blockEdit, complianceTagWrittenTime, userEmailAddress, syncToItems ]);
    context.addQuery($v_0);
}
SP.CompliancePolicy.SPPolicyStoreProxy.getHoldGracePeriodInDays = function SP_CompliancePolicy_SPPolicyStoreProxy$getHoldGracePeriodInDays(context) {
    if ((!context)) {
        throw Error.argumentNull('context');
    }
    var $v_0;
    var $v_1 = new SP.ClientActionInvokeStaticMethod(context, '{9efa17eb-0d34-4f69-a085-5cc3f802439e}', 'GetHoldGracePeriodInDays', null);
    context.addQuery($v_1);
    $v_0 = new SP.IntResult();
    context.addQueryIdAndResultObject($v_1.get_id(), $v_0);
    return $v_0;
}
SP.CompliancePolicy.SPPolicyStoreProxy.setHoldGracePeriodInDays = function SP_CompliancePolicy_SPPolicyStoreProxy$setHoldGracePeriodInDays(context, gracePeriodInDays) {
    if ((!context)) {
        throw Error.argumentNull('context');
    }
    var $v_0 = new SP.ClientActionInvokeStaticMethod(context, '{9efa17eb-0d34-4f69-a085-5cc3f802439e}', 'SetHoldGracePeriodInDays', [ gracePeriodInDays ]);
    context.addQuery($v_0);
}
SP.CompliancePolicy.SPPolicyStoreProxy.getSiteCompliancePolicyProperty = function SP_CompliancePolicy_SPPolicyStoreProxy$getSiteCompliancePolicyProperty(context, siteUrl, siteId, propertyName) {
    if ((!context)) {
        throw Error.argumentNull('context');
    }
    var $v_0;
    var $v_1 = new SP.ClientActionInvokeStaticMethod(context, '{9efa17eb-0d34-4f69-a085-5cc3f802439e}', 'GetSiteCompliancePolicyProperty', [ siteUrl, siteId, propertyName ]);
    context.addQuery($v_1);
    $v_0 = new SP.StringResult();
    context.addQueryIdAndResultObject($v_1.get_id(), $v_0);
    return $v_0;
}
SP.CompliancePolicy.SPPolicyStoreProxy.setSiteCompliancePolicyProperty = function SP_CompliancePolicy_SPPolicyStoreProxy$setSiteCompliancePolicyProperty(context, siteUrl, siteId, propertyName, propertyValue) {
    if ((!context)) {
        throw Error.argumentNull('context');
    }
    var $v_0 = new SP.ClientActionInvokeStaticMethod(context, '{9efa17eb-0d34-4f69-a085-5cc3f802439e}', 'SetSiteCompliancePolicyProperty', [ siteUrl, siteId, propertyName, propertyValue ]);
    context.addQuery($v_0);
}
SP.CompliancePolicy.SPPolicyStoreProxy.registerSiteHoldEventReceiver = function SP_CompliancePolicy_SPPolicyStoreProxy$registerSiteHoldEventReceiver(context, siteUrl, siteId) {
    if ((!context)) {
        throw Error.argumentNull('context');
    }
    var $v_0 = new SP.ClientActionInvokeStaticMethod(context, '{9efa17eb-0d34-4f69-a085-5cc3f802439e}', 'RegisterSiteHoldEventReceiver', [ siteUrl, siteId ]);
    context.addQuery($v_0);
}
SP.CompliancePolicy.SPPolicyStoreProxy.unRegisterHoldEventReceiver = function SP_CompliancePolicy_SPPolicyStoreProxy$unRegisterHoldEventReceiver(context, siteUrl, siteId) {
    if ((!context)) {
        throw Error.argumentNull('context');
    }
    var $v_0 = new SP.ClientActionInvokeStaticMethod(context, '{9efa17eb-0d34-4f69-a085-5cc3f802439e}', 'UnRegisterHoldEventReceiver', [ siteUrl, siteId ]);
    context.addQuery($v_0);
}
SP.CompliancePolicy.SPPolicyStoreProxy.prototype = {
    
    get_policyStoreUrl: function SP_CompliancePolicy_SPPolicyStoreProxy$get_policyStoreUrl() {
        this.checkUninitializedProperty('PolicyStoreUrl');
        return ((this.get_objectData().get_properties()['PolicyStoreUrl']));
    },
    
    get_reviewCenterUrl: function SP_CompliancePolicy_SPPolicyStoreProxy$get_reviewCenterUrl() {
        this.checkUninitializedProperty('ReviewCenterUrl');
        return ((this.get_objectData().get_properties()['ReviewCenterUrl']));
    },
    
    get_supportContentTypeRetention: function SP_CompliancePolicy_SPPolicyStoreProxy$get_supportContentTypeRetention() {
        this.checkUninitializedProperty('SupportContentTypeRetention');
        return ((this.get_objectData().get_properties()['SupportContentTypeRetention']));
    },
    
    set_supportContentTypeRetention: function SP_CompliancePolicy_SPPolicyStoreProxy$set_supportContentTypeRetention(value) {
        this.get_objectData().get_properties()['SupportContentTypeRetention'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'SupportContentTypeRetention', value));
        }
        return value;
    },
    
    initPropertiesFromJson: function SP_CompliancePolicy_SPPolicyStoreProxy$initPropertiesFromJson(parentNode) {
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.PolicyStoreUrl;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['PolicyStoreUrl'] = ($v_0);
            delete parentNode.PolicyStoreUrl;
        }
        $v_0 = parentNode.ReviewCenterUrl;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ReviewCenterUrl'] = ($v_0);
            delete parentNode.ReviewCenterUrl;
        }
        $v_0 = parentNode.SupportContentTypeRetention;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['SupportContentTypeRetention'] = ($v_0);
            delete parentNode.SupportContentTypeRetention;
        }
    },
    
    markReviewItemsForDeletion: function SP_CompliancePolicy_SPPolicyStoreProxy$markReviewItemsForDeletion(itemIds) {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'MarkReviewItemsForDeletion', [ itemIds ]);
        $v_0.addQuery($v_2);
        $v_1 = (([]));
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    },
    
    retagReviewItems: function SP_CompliancePolicy_SPPolicyStoreProxy$retagReviewItems(itemIds, newTag, newTagIsRecord, newTagBlockDelete, newTagIsEventBased) {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'RetagReviewItems', [ itemIds, newTag, newTagIsRecord, newTagBlockDelete, newTagIsEventBased ]);
        $v_0.addQuery($v_2);
        $v_1 = (([]));
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    },
    
    retagReviewItemsWithMetas: function SP_CompliancePolicy_SPPolicyStoreProxy$retagReviewItemsWithMetas(itemIds, newTagName, newTagMetas) {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'RetagReviewItemsWithMetas', [ itemIds, newTagName, newTagMetas ]);
        $v_0.addQuery($v_2);
        $v_1 = (([]));
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    },
    
    extendReviewItemsRetention: function SP_CompliancePolicy_SPPolicyStoreProxy$extendReviewItemsRetention(itemIds, extensionDate) {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'ExtendReviewItemsRetention', [ itemIds, extensionDate ]);
        $v_0.addQuery($v_2);
        $v_1 = (([]));
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    },
    
    getPendingReviewItemsStatistics: function SP_CompliancePolicy_SPPolicyStoreProxy$getPendingReviewItemsStatistics() {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'GetPendingReviewItemsStatistics', null);
        $v_0.addQuery($v_2);
        $v_1 = new SP.ClientResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), new SP.ClientDictionaryResultHandler($v_1));
        return $v_1;
    },
    
    openBinaryStreamForOriginalItem: function SP_CompliancePolicy_SPPolicyStoreProxy$openBinaryStreamForOriginalItem(itemId) {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'OpenBinaryStreamForOriginalItem', [ itemId ]);
        $v_0.addQuery($v_2);
        $v_1 = (([]));
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    },
    
    addDynamicScopeBinding: function SP_CompliancePolicy_SPPolicyStoreProxy$addDynamicScopeBinding(identity, siteId) {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'AddDynamicScopeBinding', [ identity, siteId ]);
        $v_0.addQuery($v_1);
    },
    
    deleteDynamicScopeBinding: function SP_CompliancePolicy_SPPolicyStoreProxy$deleteDynamicScopeBinding(identity, siteId) {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'DeleteDynamicScopeBinding', [ identity, siteId ]);
        $v_0.addQuery($v_1);
    },
    
    getDynamicScopeBindingBySiteId: function SP_CompliancePolicy_SPPolicyStoreProxy$getDynamicScopeBindingBySiteId(siteId) {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'GetDynamicScopeBindingBySiteId', [ siteId ]);
        $v_0.addQuery($v_2);
        $v_1 = (([]));
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    },
    
    bulkUpdateDynamicScopeBindings: function SP_CompliancePolicy_SPPolicyStoreProxy$bulkUpdateDynamicScopeBindings(scopesToAdd, scopesToRemove, siteId) {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'BulkUpdateDynamicScopeBindings', [ scopesToAdd, scopesToRemove, siteId ]);
        $v_0.addQuery($v_1);
    },
    
    setContainerRetentionPolicy: function SP_CompliancePolicy_SPPolicyStoreProxy$setContainerRetentionPolicy(siteId, defaultContainerLabel) {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'SetContainerRetentionPolicy', [ siteId, defaultContainerLabel ]);
        $v_0.addQuery($v_1);
    },
    
    removeContainerRetentionPolicy: function SP_CompliancePolicy_SPPolicyStoreProxy$removeContainerRetentionPolicy(siteId) {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'RemoveContainerRetentionPolicy', [ siteId ]);
        $v_0.addQuery($v_1);
    },
    
    updateContainerSetting: function SP_CompliancePolicy_SPPolicyStoreProxy$updateContainerSetting(siteId, externalId, settingType, setting) {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'UpdateContainerSetting', [ siteId, externalId, settingType, setting ]);
        $v_0.addQuery($v_1);
    },
    
    removeContainerSettings: function SP_CompliancePolicy_SPPolicyStoreProxy$removeContainerSettings(externalId) {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'RemoveContainerSettings', [ externalId ]);
        $v_0.addQuery($v_1);
    }
}


SP.CompliancePolicy.SPPolicyStoreProxyPropertyNames = function SP_CompliancePolicy_SPPolicyStoreProxyPropertyNames() {
}


SP.CompliancePolicy.SPScsTenantEndPointInfo = function SP_CompliancePolicy_SPScsTenantEndPointInfo(context, objectPath) {
    SP.CompliancePolicy.SPScsTenantEndPointInfo.initializeBase(this, [ context, objectPath ]);
}
SP.CompliancePolicy.SPScsTenantEndPointInfo.prototype = {
    
    get_farmLabel: function SP_CompliancePolicy_SPScsTenantEndPointInfo$get_farmLabel() {
        this.checkUninitializedProperty('FarmLabel');
        return ((this.get_objectData().get_properties()['FarmLabel']));
    },
    
    set_farmLabel: function SP_CompliancePolicy_SPScsTenantEndPointInfo$set_farmLabel(value) {
        this.get_objectData().get_properties()['FarmLabel'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'FarmLabel', value));
        }
        return value;
    },
    
    get_scsEndPointUrl: function SP_CompliancePolicy_SPScsTenantEndPointInfo$get_scsEndPointUrl() {
        this.checkUninitializedProperty('ScsEndPointUrl');
        return ((this.get_objectData().get_properties()['ScsEndPointUrl']));
    },
    
    set_scsEndPointUrl: function SP_CompliancePolicy_SPScsTenantEndPointInfo$set_scsEndPointUrl(value) {
        this.get_objectData().get_properties()['ScsEndPointUrl'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'ScsEndPointUrl', value));
        }
        return value;
    },
    
    get_searchFarmId: function SP_CompliancePolicy_SPScsTenantEndPointInfo$get_searchFarmId() {
        this.checkUninitializedProperty('SearchFarmId');
        return ((this.get_objectData().get_properties()['SearchFarmId']));
    },
    
    set_searchFarmId: function SP_CompliancePolicy_SPScsTenantEndPointInfo$set_searchFarmId(value) {
        this.get_objectData().get_properties()['SearchFarmId'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'SearchFarmId', value));
        }
        return value;
    },
    
    initPropertiesFromJson: function SP_CompliancePolicy_SPScsTenantEndPointInfo$initPropertiesFromJson(parentNode) {
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.FarmLabel;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['FarmLabel'] = ($v_0);
            delete parentNode.FarmLabel;
        }
        $v_0 = parentNode.ScsEndPointUrl;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ScsEndPointUrl'] = ($v_0);
            delete parentNode.ScsEndPointUrl;
        }
        $v_0 = parentNode.SearchFarmId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['SearchFarmId'] = ($v_0);
            delete parentNode.SearchFarmId;
        }
    }
}


SP.CompliancePolicy.SPScsTenantEndPointInfoPropertyNames = function SP_CompliancePolicy_SPScsTenantEndPointInfoPropertyNames() {
}


SP.CompliancePolicy.SPSitePreservationUtility = function SP_CompliancePolicy_SPSitePreservationUtility() {
}
SP.CompliancePolicy.SPSitePreservationUtility.placeOnHold = function SP_CompliancePolicy_SPSitePreservationUtility$placeOnHold(context, siteId, holdId, durationInDays, holdPeriodSource) {
    if ((!context)) {
        throw Error.argumentNull('context');
    }
    var $v_0 = new SP.ClientActionInvokeStaticMethod(context, '{51fdd9ea-5a32-4b6c-aed4-6283b187b69b}', 'PlaceOnHold', [ siteId, holdId, durationInDays, holdPeriodSource ]);
    context.addQuery($v_0);
}


SP.CompliancePolicy.SPSyncNotificationEndpointInfo = function SP_CompliancePolicy_SPSyncNotificationEndpointInfo(context, objectPath) {
    SP.CompliancePolicy.SPSyncNotificationEndpointInfo.initializeBase(this, [ context, objectPath ]);
}
SP.CompliancePolicy.SPSyncNotificationEndpointInfo.prototype = {
    
    get_isNotifySuccess: function SP_CompliancePolicy_SPSyncNotificationEndpointInfo$get_isNotifySuccess() {
        this.checkUninitializedProperty('IsNotifySuccess');
        return ((this.get_objectData().get_properties()['IsNotifySuccess']));
    },
    
    set_isNotifySuccess: function SP_CompliancePolicy_SPSyncNotificationEndpointInfo$set_isNotifySuccess(value) {
        this.get_objectData().get_properties()['IsNotifySuccess'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'IsNotifySuccess', value));
        }
        return value;
    },
    
    get_masterCorrelationId: function SP_CompliancePolicy_SPSyncNotificationEndpointInfo$get_masterCorrelationId() {
        this.checkUninitializedProperty('MasterCorrelationId');
        return ((this.get_objectData().get_properties()['MasterCorrelationId']));
    },
    
    set_masterCorrelationId: function SP_CompliancePolicy_SPSyncNotificationEndpointInfo$set_masterCorrelationId(value) {
        this.get_objectData().get_properties()['MasterCorrelationId'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'MasterCorrelationId', value));
        }
        return value;
    },
    
    get_serverBuild: function SP_CompliancePolicy_SPSyncNotificationEndpointInfo$get_serverBuild() {
        this.checkUninitializedProperty('ServerBuild');
        return ((this.get_objectData().get_properties()['ServerBuild']));
    },
    
    set_serverBuild: function SP_CompliancePolicy_SPSyncNotificationEndpointInfo$set_serverBuild(value) {
        this.get_objectData().get_properties()['ServerBuild'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'ServerBuild', value));
        }
        return value;
    },
    
    get_serverName: function SP_CompliancePolicy_SPSyncNotificationEndpointInfo$get_serverName() {
        this.checkUninitializedProperty('ServerName');
        return ((this.get_objectData().get_properties()['ServerName']));
    },
    
    set_serverName: function SP_CompliancePolicy_SPSyncNotificationEndpointInfo$set_serverName(value) {
        this.get_objectData().get_properties()['ServerName'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'ServerName', value));
        }
        return value;
    },
    
    get_workloadCorrelationId: function SP_CompliancePolicy_SPSyncNotificationEndpointInfo$get_workloadCorrelationId() {
        this.checkUninitializedProperty('WorkloadCorrelationId');
        return ((this.get_objectData().get_properties()['WorkloadCorrelationId']));
    },
    
    set_workloadCorrelationId: function SP_CompliancePolicy_SPSyncNotificationEndpointInfo$set_workloadCorrelationId(value) {
        this.get_objectData().get_properties()['WorkloadCorrelationId'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'WorkloadCorrelationId', value));
        }
        return value;
    },
    
    initPropertiesFromJson: function SP_CompliancePolicy_SPSyncNotificationEndpointInfo$initPropertiesFromJson(parentNode) {
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.IsNotifySuccess;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['IsNotifySuccess'] = ($v_0);
            delete parentNode.IsNotifySuccess;
        }
        $v_0 = parentNode.MasterCorrelationId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['MasterCorrelationId'] = ($v_0);
            delete parentNode.MasterCorrelationId;
        }
        $v_0 = parentNode.ServerBuild;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ServerBuild'] = ($v_0);
            delete parentNode.ServerBuild;
        }
        $v_0 = parentNode.ServerName;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ServerName'] = ($v_0);
            delete parentNode.ServerName;
        }
        $v_0 = parentNode.WorkloadCorrelationId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['WorkloadCorrelationId'] = ($v_0);
            delete parentNode.WorkloadCorrelationId;
        }
    }
}


SP.CompliancePolicy.SPSyncNotificationEndpointInfoPropertyNames = function SP_CompliancePolicy_SPSyncNotificationEndpointInfoPropertyNames() {
}


Type.registerNamespace('SP.Discovery');

SP.Discovery.ExportStatus = function() {}
SP.Discovery.ExportStatus.prototype = {
    notStarted: 0, 
    started: 1, 
    complete: 2, 
    failed: 3
}
SP.Discovery.ExportStatus.registerEnum('SP.Discovery.ExportStatus', false);


SP.Discovery.Case = function SP_Discovery_Case(context, web) {
    SP.Discovery.Case.initializeBase(this, [ context, SP.ClientUtility.getOrCreateObjectPathForConstructor(context, '{df6ac2d8-cd50-4cf4-bc52-f61766f2e005}', arguments) ]);
}
SP.Discovery.Case.newObject = function SP_Discovery_Case$newObject(context, web) {
    return new SP.Discovery.Case(context, new SP.ObjectPathConstructor(context, '{df6ac2d8-cd50-4cf4-bc52-f61766f2e005}', [ web ]));
}
SP.Discovery.Case.prototype = {
    
    getExportContent: function SP_Discovery_Case$getExportContent(sourceIds) {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'GetExportContent', [ sourceIds ]);
        $v_0.addQuery($v_2);
        $v_1 = new SP.StringResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    }
}


SP.Discovery.Export = function SP_Discovery_Export(context, item) {
    SP.Discovery.Export.initializeBase(this, [ context, SP.ClientUtility.getOrCreateObjectPathForConstructor(context, '{a0c1ea79-9e20-4f8e-96b7-b18956a5cffb}', arguments) ]);
}
SP.Discovery.Export.newObject = function SP_Discovery_Export$newObject(context, item) {
    return new SP.Discovery.Export(context, new SP.ObjectPathConstructor(context, '{a0c1ea79-9e20-4f8e-96b7-b18956a5cffb}', [ item ]));
}
SP.Discovery.Export.prototype = {
    
    get_status: function SP_Discovery_Export$get_status() {
        this.checkUninitializedProperty('Status');
        return ((this.get_objectData().get_properties()['Status']));
    },
    
    set_status: function SP_Discovery_Export$set_status(value) {
        this.get_objectData().get_properties()['Status'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Status', value));
        }
        return value;
    },
    
    initPropertiesFromJson: function SP_Discovery_Export$initPropertiesFromJson(parentNode) {
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.Status;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Status'] = ((SP.DataConvert.fixupType(this.get_context(), $v_0)));
            delete parentNode.Status;
        }
    },
    
    update: function SP_Discovery_Export$update() {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'Update', null);
        $v_0.addQuery($v_1);
    },
    
    getExportContent: function SP_Discovery_Export$getExportContent() {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'GetExportContent', null);
        $v_0.addQuery($v_2);
        $v_1 = new SP.StringResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    }
}


SP.Discovery.ExportPropertyNames = function SP_Discovery_ExportPropertyNames() {
}


Type.registerNamespace('SP.InformationPolicy');

SP.InformationPolicy.ProjectPolicy = function SP_InformationPolicy_ProjectPolicy(context, objectPath) {
    SP.InformationPolicy.ProjectPolicy.initializeBase(this, [ context, objectPath ]);
}
SP.InformationPolicy.ProjectPolicy.getProjectPolicies = function SP_InformationPolicy_ProjectPolicy$getProjectPolicies(context, web) {
    if ((!context)) {
        throw Error.argumentNull('context');
    }
    var $v_0;
    $v_0 = new SP.ClientObjectList(context, new SP.ObjectPathStaticMethod(context, '{ec5e0a70-0cc3-408f-a4dc-1bb3495aac75}', 'GetProjectPolicies', [ web ]), SP.InformationPolicy.ProjectPolicy);
    return $v_0;
}
SP.InformationPolicy.ProjectPolicy.getCurrentlyAppliedProjectPolicyOnWeb = function SP_InformationPolicy_ProjectPolicy$getCurrentlyAppliedProjectPolicyOnWeb(context, web) {
    if ((!context)) {
        throw Error.argumentNull('context');
    }
    var $v_0;
    $v_0 = new SP.InformationPolicy.ProjectPolicy(context, new SP.ObjectPathStaticMethod(context, '{ec5e0a70-0cc3-408f-a4dc-1bb3495aac75}', 'GetCurrentlyAppliedProjectPolicyOnWeb', [ web ]));
    return $v_0;
}
SP.InformationPolicy.ProjectPolicy.applyProjectPolicy = function SP_InformationPolicy_ProjectPolicy$applyProjectPolicy(context, web, projectPolicy) {
    if ((!context)) {
        throw Error.argumentNull('context');
    }
    var $v_0 = new SP.ClientActionInvokeStaticMethod(context, '{ec5e0a70-0cc3-408f-a4dc-1bb3495aac75}', 'ApplyProjectPolicy', [ web, projectPolicy ]);
    context.addQuery($v_0);
}
SP.InformationPolicy.ProjectPolicy.openProject = function SP_InformationPolicy_ProjectPolicy$openProject(context, web) {
    if ((!context)) {
        throw Error.argumentNull('context');
    }
    var $v_0 = new SP.ClientActionInvokeStaticMethod(context, '{ec5e0a70-0cc3-408f-a4dc-1bb3495aac75}', 'OpenProject', [ web ]);
    context.addQuery($v_0);
}
SP.InformationPolicy.ProjectPolicy.closeProject = function SP_InformationPolicy_ProjectPolicy$closeProject(context, web) {
    if ((!context)) {
        throw Error.argumentNull('context');
    }
    var $v_0 = new SP.ClientActionInvokeStaticMethod(context, '{ec5e0a70-0cc3-408f-a4dc-1bb3495aac75}', 'CloseProject', [ web ]);
    context.addQuery($v_0);
}
SP.InformationPolicy.ProjectPolicy.postponeProject = function SP_InformationPolicy_ProjectPolicy$postponeProject(context, web) {
    if ((!context)) {
        throw Error.argumentNull('context');
    }
    var $v_0 = new SP.ClientActionInvokeStaticMethod(context, '{ec5e0a70-0cc3-408f-a4dc-1bb3495aac75}', 'PostponeProject', [ web ]);
    context.addQuery($v_0);
}
SP.InformationPolicy.ProjectPolicy.doesProjectHavePolicy = function SP_InformationPolicy_ProjectPolicy$doesProjectHavePolicy(context, web) {
    if ((!context)) {
        throw Error.argumentNull('context');
    }
    var $v_0;
    var $v_1 = new SP.ClientActionInvokeStaticMethod(context, '{ec5e0a70-0cc3-408f-a4dc-1bb3495aac75}', 'DoesProjectHavePolicy', [ web ]);
    context.addQuery($v_1);
    $v_0 = new SP.BooleanResult();
    context.addQueryIdAndResultObject($v_1.get_id(), $v_0);
    return $v_0;
}
SP.InformationPolicy.ProjectPolicy.isProjectClosed = function SP_InformationPolicy_ProjectPolicy$isProjectClosed(context, web) {
    if ((!context)) {
        throw Error.argumentNull('context');
    }
    var $v_0;
    var $v_1 = new SP.ClientActionInvokeStaticMethod(context, '{ec5e0a70-0cc3-408f-a4dc-1bb3495aac75}', 'IsProjectClosed', [ web ]);
    context.addQuery($v_1);
    $v_0 = new SP.BooleanResult();
    context.addQueryIdAndResultObject($v_1.get_id(), $v_0);
    return $v_0;
}
SP.InformationPolicy.ProjectPolicy.getProjectCloseDate = function SP_InformationPolicy_ProjectPolicy$getProjectCloseDate(context, web) {
    if ((!context)) {
        throw Error.argumentNull('context');
    }
    var $v_0;
    var $v_1 = new SP.ClientActionInvokeStaticMethod(context, '{ec5e0a70-0cc3-408f-a4dc-1bb3495aac75}', 'GetProjectCloseDate', [ web ]);
    context.addQuery($v_1);
    $v_0 = new SP.DateTimeResult();
    context.addQueryIdAndResultObject($v_1.get_id(), $v_0);
    return $v_0;
}
SP.InformationPolicy.ProjectPolicy.getProjectExpirationDate = function SP_InformationPolicy_ProjectPolicy$getProjectExpirationDate(context, web) {
    if ((!context)) {
        throw Error.argumentNull('context');
    }
    var $v_0;
    var $v_1 = new SP.ClientActionInvokeStaticMethod(context, '{ec5e0a70-0cc3-408f-a4dc-1bb3495aac75}', 'GetProjectExpirationDate', [ web ]);
    context.addQuery($v_1);
    $v_0 = new SP.DateTimeResult();
    context.addQueryIdAndResultObject($v_1.get_id(), $v_0);
    return $v_0;
}
SP.InformationPolicy.ProjectPolicy.prototype = {
    
    get_description: function SP_InformationPolicy_ProjectPolicy$get_description() {
        this.checkUninitializedProperty('Description');
        return ((this.get_objectData().get_properties()['Description']));
    },
    
    get_emailBody: function SP_InformationPolicy_ProjectPolicy$get_emailBody() {
        this.checkUninitializedProperty('EmailBody');
        return ((this.get_objectData().get_properties()['EmailBody']));
    },
    
    set_emailBody: function SP_InformationPolicy_ProjectPolicy$set_emailBody(value) {
        this.get_objectData().get_properties()['EmailBody'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'EmailBody', value));
        }
        return value;
    },
    
    get_emailBodyWithTeamMailbox: function SP_InformationPolicy_ProjectPolicy$get_emailBodyWithTeamMailbox() {
        this.checkUninitializedProperty('EmailBodyWithTeamMailbox');
        return ((this.get_objectData().get_properties()['EmailBodyWithTeamMailbox']));
    },
    
    set_emailBodyWithTeamMailbox: function SP_InformationPolicy_ProjectPolicy$set_emailBodyWithTeamMailbox(value) {
        this.get_objectData().get_properties()['EmailBodyWithTeamMailbox'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'EmailBodyWithTeamMailbox', value));
        }
        return value;
    },
    
    get_emailSubject: function SP_InformationPolicy_ProjectPolicy$get_emailSubject() {
        this.checkUninitializedProperty('EmailSubject');
        return ((this.get_objectData().get_properties()['EmailSubject']));
    },
    
    set_emailSubject: function SP_InformationPolicy_ProjectPolicy$set_emailSubject(value) {
        this.get_objectData().get_properties()['EmailSubject'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'EmailSubject', value));
        }
        return value;
    },
    
    get_name: function SP_InformationPolicy_ProjectPolicy$get_name() {
        this.checkUninitializedProperty('Name');
        return ((this.get_objectData().get_properties()['Name']));
    },
    
    initPropertiesFromJson: function SP_InformationPolicy_ProjectPolicy$initPropertiesFromJson(parentNode) {
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.Description;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Description'] = ($v_0);
            delete parentNode.Description;
        }
        $v_0 = parentNode.EmailBody;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['EmailBody'] = ($v_0);
            delete parentNode.EmailBody;
        }
        $v_0 = parentNode.EmailBodyWithTeamMailbox;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['EmailBodyWithTeamMailbox'] = ($v_0);
            delete parentNode.EmailBodyWithTeamMailbox;
        }
        $v_0 = parentNode.EmailSubject;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['EmailSubject'] = ($v_0);
            delete parentNode.EmailSubject;
        }
        $v_0 = parentNode.Name;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Name'] = ($v_0);
            delete parentNode.Name;
        }
    },
    
    savePolicy: function SP_InformationPolicy_ProjectPolicy$savePolicy() {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'SavePolicy', null);
        $v_0.addQuery($v_1);
    }
}


SP.InformationPolicy.ProjectPolicyPropertyNames = function SP_InformationPolicy_ProjectPolicyPropertyNames() {
}


Type.registerNamespace('SP.RecordsRepository');

SP.RecordsRepository.Records = function SP_RecordsRepository_Records() {
}
SP.RecordsRepository.Records.declareItemAsRecordWithDeclarationDate = function SP_RecordsRepository_Records$declareItemAsRecordWithDeclarationDate(context, itemToDeclare, declarationDate) {
    if ((!context)) {
        throw Error.argumentNull('context');
    }
    var $v_0 = new SP.ClientActionInvokeStaticMethod(context, '{ea8e1356-5910-4e69-bc05-d0c30ed657fc}', 'DeclareItemAsRecordWithDeclarationDate', [ itemToDeclare, declarationDate ]);
    context.addQuery($v_0);
}
SP.RecordsRepository.Records.declareItemAsRecord = function SP_RecordsRepository_Records$declareItemAsRecord(context, itemToDeclare) {
    if ((!context)) {
        throw Error.argumentNull('context');
    }
    var $v_0 = new SP.ClientActionInvokeStaticMethod(context, '{ea8e1356-5910-4e69-bc05-d0c30ed657fc}', 'DeclareItemAsRecord', [ itemToDeclare ]);
    context.addQuery($v_0);
}
SP.RecordsRepository.Records.undeclareItemAsRecord = function SP_RecordsRepository_Records$undeclareItemAsRecord(context, item) {
    if ((!context)) {
        throw Error.argumentNull('context');
    }
    var $v_0 = new SP.ClientActionInvokeStaticMethod(context, '{ea8e1356-5910-4e69-bc05-d0c30ed657fc}', 'UndeclareItemAsRecord', [ item ]);
    context.addQuery($v_0);
}
SP.RecordsRepository.Records.isRecord = function SP_RecordsRepository_Records$isRecord(context, item) {
    if ((!context)) {
        throw Error.argumentNull('context');
    }
    var $v_0;
    var $v_1 = new SP.ClientActionInvokeStaticMethod(context, '{ea8e1356-5910-4e69-bc05-d0c30ed657fc}', 'IsRecord', [ item ]);
    context.addQuery($v_1);
    $v_0 = new SP.BooleanResult();
    context.addQueryIdAndResultObject($v_1.get_id(), $v_0);
    return $v_0;
}


SP.CompliancePolicy.ComplianceTag.registerClass('SP.CompliancePolicy.ComplianceTag', SP.ClientValueObject);
SP.CompliancePolicy.DlpClassificationResult.registerClass('SP.CompliancePolicy.DlpClassificationResult', SP.ClientValueObject);
SP.CompliancePolicy.PendingReviewItemsStatistics.registerClass('SP.CompliancePolicy.PendingReviewItemsStatistics', SP.ClientValueObject);
SP.CompliancePolicy.PolicyEvaluationInfo.registerClass('SP.CompliancePolicy.PolicyEvaluationInfo', SP.ClientObject);
SP.CompliancePolicy.PolicyEvaluationInfoPropertyNames.registerClass('SP.CompliancePolicy.PolicyEvaluationInfoPropertyNames');
SP.CompliancePolicy.SPContainerId.registerClass('SP.CompliancePolicy.SPContainerId', SP.ClientObject);
SP.CompliancePolicy.SPContainerIdPropertyNames.registerClass('SP.CompliancePolicy.SPContainerIdPropertyNames');
SP.CompliancePolicy.SPPolicyAssociation.registerClass('SP.CompliancePolicy.SPPolicyAssociation', SP.ClientObject);
SP.CompliancePolicy.SPPolicyAssociationPropertyNames.registerClass('SP.CompliancePolicy.SPPolicyAssociationPropertyNames');
SP.CompliancePolicy.SPPolicyBinding.registerClass('SP.CompliancePolicy.SPPolicyBinding', SP.ClientObject);
SP.CompliancePolicy.SPPolicyBindingPropertyNames.registerClass('SP.CompliancePolicy.SPPolicyBindingPropertyNames');
SP.CompliancePolicy.SPPolicyDefinition.registerClass('SP.CompliancePolicy.SPPolicyDefinition', SP.ClientObject);
SP.CompliancePolicy.SPPolicyDefinitionPropertyNames.registerClass('SP.CompliancePolicy.SPPolicyDefinitionPropertyNames');
SP.CompliancePolicy.SPPolicyEvent.registerClass('SP.CompliancePolicy.SPPolicyEvent', SP.ClientObject);
SP.CompliancePolicy.SPPolicyEventPropertyNames.registerClass('SP.CompliancePolicy.SPPolicyEventPropertyNames');
SP.CompliancePolicy.SPPolicyRule.registerClass('SP.CompliancePolicy.SPPolicyRule', SP.ClientObject);
SP.CompliancePolicy.SPPolicyRulePropertyNames.registerClass('SP.CompliancePolicy.SPPolicyRulePropertyNames');
SP.CompliancePolicy.SPPolicyStore.registerClass('SP.CompliancePolicy.SPPolicyStore', SP.ClientObject);
SP.CompliancePolicy.SPPolicyStoreProxy.registerClass('SP.CompliancePolicy.SPPolicyStoreProxy', SP.ClientObject);
SP.CompliancePolicy.SPPolicyStoreProxyPropertyNames.registerClass('SP.CompliancePolicy.SPPolicyStoreProxyPropertyNames');
SP.CompliancePolicy.SPScsTenantEndPointInfo.registerClass('SP.CompliancePolicy.SPScsTenantEndPointInfo', SP.ClientObject);
SP.CompliancePolicy.SPScsTenantEndPointInfoPropertyNames.registerClass('SP.CompliancePolicy.SPScsTenantEndPointInfoPropertyNames');
SP.CompliancePolicy.SPSitePreservationUtility.registerClass('SP.CompliancePolicy.SPSitePreservationUtility');
SP.CompliancePolicy.SPSyncNotificationEndpointInfo.registerClass('SP.CompliancePolicy.SPSyncNotificationEndpointInfo', SP.ClientObject);
SP.CompliancePolicy.SPSyncNotificationEndpointInfoPropertyNames.registerClass('SP.CompliancePolicy.SPSyncNotificationEndpointInfoPropertyNames');
SP.Discovery.Case.registerClass('SP.Discovery.Case', SP.ClientObject);
SP.Discovery.Export.registerClass('SP.Discovery.Export', SP.ClientObject);
SP.Discovery.ExportPropertyNames.registerClass('SP.Discovery.ExportPropertyNames');
SP.InformationPolicy.ProjectPolicy.registerClass('SP.InformationPolicy.ProjectPolicy', SP.ClientObject);
SP.InformationPolicy.ProjectPolicyPropertyNames.registerClass('SP.InformationPolicy.ProjectPolicyPropertyNames');
SP.RecordsRepository.Records.registerClass('SP.RecordsRepository.Records');
function sp_policy_initialize() {
SP.CompliancePolicy.PolicyEvaluationInfoPropertyNames.applicablePolicies = 'ApplicablePolicies';
SP.CompliancePolicy.PolicyEvaluationInfoPropertyNames.dlpAccessScope = 'DlpAccessScope';
SP.CompliancePolicy.PolicyEvaluationInfoPropertyNames.matchedRules = 'MatchedRules';
SP.CompliancePolicy.PolicyEvaluationInfoPropertyNames.overriddenRules = 'OverriddenRules';
SP.CompliancePolicy.SPContainerIdPropertyNames.containerType = 'ContainerType';
SP.CompliancePolicy.SPContainerIdPropertyNames.listId = 'ListId';
SP.CompliancePolicy.SPContainerIdPropertyNames.siteId = 'SiteId';
SP.CompliancePolicy.SPContainerIdPropertyNames.siteUrl = 'SiteUrl';
SP.CompliancePolicy.SPContainerIdPropertyNames.tenantId = 'TenantId';
SP.CompliancePolicy.SPContainerIdPropertyNames.title = 'Title';
SP.CompliancePolicy.SPContainerIdPropertyNames.version = 'Version';
SP.CompliancePolicy.SPContainerIdPropertyNames.webId = 'WebId';
SP.CompliancePolicy.SPPolicyAssociationPropertyNames.allowOverride = 'AllowOverride';
SP.CompliancePolicy.SPPolicyAssociationPropertyNames.comment = 'Comment';
SP.CompliancePolicy.SPPolicyAssociationPropertyNames.defaultPolicyDefinitionConfigId = 'DefaultPolicyDefinitionConfigId';
SP.CompliancePolicy.SPPolicyAssociationPropertyNames.description = 'Description';
SP.CompliancePolicy.SPPolicyAssociationPropertyNames.identity = 'Identity';
SP.CompliancePolicy.SPPolicyAssociationPropertyNames.name = 'Name';
SP.CompliancePolicy.SPPolicyAssociationPropertyNames.policyApplyStatus = 'PolicyApplyStatus';
SP.CompliancePolicy.SPPolicyAssociationPropertyNames.policyDefinitionConfigIds = 'PolicyDefinitionConfigIds';
SP.CompliancePolicy.SPPolicyAssociationPropertyNames.scope = 'Scope';
SP.CompliancePolicy.SPPolicyAssociationPropertyNames.source = 'Source';
SP.CompliancePolicy.SPPolicyAssociationPropertyNames.version = 'Version';
SP.CompliancePolicy.SPPolicyAssociationPropertyNames.whenAppliedUTC = 'WhenAppliedUTC';
SP.CompliancePolicy.SPPolicyAssociationPropertyNames.whenChangedUTC = 'WhenChangedUTC';
SP.CompliancePolicy.SPPolicyAssociationPropertyNames.whenCreatedUTC = 'WhenCreatedUTC';
SP.CompliancePolicy.SPPolicyAssociationPropertyNames.workload = 'Workload';
SP.CompliancePolicy.SPPolicyBindingPropertyNames.bindingType = 'BindingType';
SP.CompliancePolicy.SPPolicyBindingPropertyNames.identity = 'Identity';
SP.CompliancePolicy.SPPolicyBindingPropertyNames.isExempt = 'IsExempt';
SP.CompliancePolicy.SPPolicyBindingPropertyNames.mode = 'Mode';
SP.CompliancePolicy.SPPolicyBindingPropertyNames.name = 'Name';
SP.CompliancePolicy.SPPolicyBindingPropertyNames.policyApplyStatus = 'PolicyApplyStatus';
SP.CompliancePolicy.SPPolicyBindingPropertyNames.policyAssociationConfigId = 'PolicyAssociationConfigId';
SP.CompliancePolicy.SPPolicyBindingPropertyNames.policyDefinitionConfigId = 'PolicyDefinitionConfigId';
SP.CompliancePolicy.SPPolicyBindingPropertyNames.policyRuleConfigId = 'PolicyRuleConfigId';
SP.CompliancePolicy.SPPolicyBindingPropertyNames.scope = 'Scope';
SP.CompliancePolicy.SPPolicyBindingPropertyNames.source = 'Source';
SP.CompliancePolicy.SPPolicyBindingPropertyNames.version = 'Version';
SP.CompliancePolicy.SPPolicyBindingPropertyNames.whenAppliedUTC = 'WhenAppliedUTC';
SP.CompliancePolicy.SPPolicyBindingPropertyNames.whenChangedUTC = 'WhenChangedUTC';
SP.CompliancePolicy.SPPolicyBindingPropertyNames.whenCreatedUTC = 'WhenCreatedUTC';
SP.CompliancePolicy.SPPolicyBindingPropertyNames.workload = 'Workload';
SP.CompliancePolicy.SPPolicyDefinitionPropertyNames.comment = 'Comment';
SP.CompliancePolicy.SPPolicyDefinitionPropertyNames.createdBy = 'CreatedBy';
SP.CompliancePolicy.SPPolicyDefinitionPropertyNames.defaultPolicyRuleConfigId = 'DefaultPolicyRuleConfigId';
SP.CompliancePolicy.SPPolicyDefinitionPropertyNames.description = 'Description';
SP.CompliancePolicy.SPPolicyDefinitionPropertyNames.enabled = 'Enabled';
SP.CompliancePolicy.SPPolicyDefinitionPropertyNames.identity = 'Identity';
SP.CompliancePolicy.SPPolicyDefinitionPropertyNames.lastModifiedBy = 'LastModifiedBy';
SP.CompliancePolicy.SPPolicyDefinitionPropertyNames.mode = 'Mode';
SP.CompliancePolicy.SPPolicyDefinitionPropertyNames.name = 'Name';
SP.CompliancePolicy.SPPolicyDefinitionPropertyNames.policyBlob = 'PolicyBlob';
SP.CompliancePolicy.SPPolicyDefinitionPropertyNames.priority = 'Priority';
SP.CompliancePolicy.SPPolicyDefinitionPropertyNames.scenario = 'Scenario';
SP.CompliancePolicy.SPPolicyDefinitionPropertyNames.source = 'Source';
SP.CompliancePolicy.SPPolicyDefinitionPropertyNames.version = 'Version';
SP.CompliancePolicy.SPPolicyDefinitionPropertyNames.whenChangedUTC = 'WhenChangedUTC';
SP.CompliancePolicy.SPPolicyDefinitionPropertyNames.whenCreatedUTC = 'WhenCreatedUTC';
SP.CompliancePolicy.SPPolicyEventPropertyNames.eventDateTime = 'EventDateTime';
SP.CompliancePolicy.SPPolicyEventPropertyNames.eventTags = 'EventTags';
SP.CompliancePolicy.SPPolicyEventPropertyNames.id = 'Id';
SP.CompliancePolicy.SPPolicyEventPropertyNames.name = 'Name';
SP.CompliancePolicy.SPPolicyEventPropertyNames.statusData = 'StatusData';
SP.CompliancePolicy.SPPolicyEventPropertyNames.whenChangedUTC = 'WhenChangedUTC';
SP.CompliancePolicy.SPPolicyEventPropertyNames.whenCreatedUTC = 'WhenCreatedUTC';
SP.CompliancePolicy.SPPolicyEventPropertyNames.workload = 'Workload';
SP.CompliancePolicy.SPPolicyRulePropertyNames.comment = 'Comment';
SP.CompliancePolicy.SPPolicyRulePropertyNames.createdBy = 'CreatedBy';
SP.CompliancePolicy.SPPolicyRulePropertyNames.description = 'Description';
SP.CompliancePolicy.SPPolicyRulePropertyNames.enabled = 'Enabled';
SP.CompliancePolicy.SPPolicyRulePropertyNames.identity = 'Identity';
SP.CompliancePolicy.SPPolicyRulePropertyNames.lastModifiedBy = 'LastModifiedBy';
SP.CompliancePolicy.SPPolicyRulePropertyNames.mode = 'Mode';
SP.CompliancePolicy.SPPolicyRulePropertyNames.name = 'Name';
SP.CompliancePolicy.SPPolicyRulePropertyNames.policyDefinitionConfigId = 'PolicyDefinitionConfigId';
SP.CompliancePolicy.SPPolicyRulePropertyNames.priority = 'Priority';
SP.CompliancePolicy.SPPolicyRulePropertyNames.ruleBlob = 'RuleBlob';
SP.CompliancePolicy.SPPolicyRulePropertyNames.scenario = 'Scenario';
SP.CompliancePolicy.SPPolicyRulePropertyNames.source = 'Source';
SP.CompliancePolicy.SPPolicyRulePropertyNames.version = 'Version';
SP.CompliancePolicy.SPPolicyRulePropertyNames.whenChangedUTC = 'WhenChangedUTC';
SP.CompliancePolicy.SPPolicyRulePropertyNames.whenCreatedUTC = 'WhenCreatedUTC';
SP.CompliancePolicy.SPPolicyStoreProxyPropertyNames.policyStoreUrl = 'PolicyStoreUrl';
SP.CompliancePolicy.SPPolicyStoreProxyPropertyNames.reviewCenterUrl = 'ReviewCenterUrl';
SP.CompliancePolicy.SPPolicyStoreProxyPropertyNames.supportContentTypeRetention = 'SupportContentTypeRetention';
SP.CompliancePolicy.SPScsTenantEndPointInfoPropertyNames.farmLabel = 'FarmLabel';
SP.CompliancePolicy.SPScsTenantEndPointInfoPropertyNames.scsEndPointUrl = 'ScsEndPointUrl';
SP.CompliancePolicy.SPScsTenantEndPointInfoPropertyNames.searchFarmId = 'SearchFarmId';
SP.CompliancePolicy.SPSyncNotificationEndpointInfoPropertyNames.isNotifySuccess = 'IsNotifySuccess';
SP.CompliancePolicy.SPSyncNotificationEndpointInfoPropertyNames.masterCorrelationId = 'MasterCorrelationId';
SP.CompliancePolicy.SPSyncNotificationEndpointInfoPropertyNames.serverBuild = 'ServerBuild';
SP.CompliancePolicy.SPSyncNotificationEndpointInfoPropertyNames.serverName = 'ServerName';
SP.CompliancePolicy.SPSyncNotificationEndpointInfoPropertyNames.workloadCorrelationId = 'WorkloadCorrelationId';
SP.Discovery.ExportPropertyNames.status = 'Status';
SP.InformationPolicy.ProjectPolicyPropertyNames.description = 'Description';
SP.InformationPolicy.ProjectPolicyPropertyNames.emailBody = 'EmailBody';
SP.InformationPolicy.ProjectPolicyPropertyNames.emailBodyWithTeamMailbox = 'EmailBodyWithTeamMailbox';
SP.InformationPolicy.ProjectPolicyPropertyNames.emailSubject = 'EmailSubject';
SP.InformationPolicy.ProjectPolicyPropertyNames.name = 'Name';
};
sp_policy_initialize();

RegisterModuleInit("sp.policy.js", sp_policy_initialize);

if( typeof(Sys) != "undefined" && Sys && Sys.Application ){
   Sys.Application.notifyScriptLoaded();
}
NotifyScriptLoadedAndExecuteWaitingJobs("sp.policy.js");
