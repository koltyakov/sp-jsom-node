function ULS0Qc(){var o=new Object;o.ULSTeamName="Work Management";o.ULSFileName="SP.WorkManagement.debug.js";return o;}
// JScript File


Type.registerNamespace('SP.WorkManagement.OM');

SP.WorkManagement.OM.BooleanCompareType = function() {}
SP.WorkManagement.OM.BooleanCompareType.prototype = {
    noValue: 0, 
    isTrue: 1, 
    isFalse: 2
}
SP.WorkManagement.OM.BooleanCompareType.registerEnum('SP.WorkManagement.OM.BooleanCompareType', false);


SP.WorkManagement.OM.CriterionConcatType = function() {}
SP.WorkManagement.OM.CriterionConcatType.prototype = {
    noValue: 0, 
    all: 1, 
    any: 2
}
SP.WorkManagement.OM.CriterionConcatType.registerEnum('SP.WorkManagement.OM.CriterionConcatType', false);


SP.WorkManagement.OM.ExchangeOptInResult = function() {}
SP.WorkManagement.OM.ExchangeOptInResult.prototype = {
    noValue: 0, 
    success: 1, 
    unknownError: 2, 
    couldNotConnectToExchange: 3, 
    couldNotFindOrCreateMySite: 4, 
    userAlreadyOptedIn: 5, 
    userExchangeOperationPending: 6, 
    unsupportedExchangeVersion: 7, 
    missingEmailAddress: 8, 
    exchangeWebServiceClientMissing: 9, 
    unsupportedSharePointConfiguration: 10, 
    invalidOrUnauthorizedUser: 11, 
    couldNotActivateExchangeSyncFeatureOnSiteSubscription: 12
}
SP.WorkManagement.OM.ExchangeOptInResult.registerEnum('SP.WorkManagement.OM.ExchangeOptInResult', false);


SP.WorkManagement.OM.ExchangeSyncResult = function() {}
SP.WorkManagement.OM.ExchangeSyncResult.prototype = {
    noValue: 0, 
    success: 1, 
    unknownError: 2, 
    couldNotConnectToExchange: 3, 
    couldNotGetUserCredentials: 4, 
    couldNotKickoffJob: 5, 
    syncWithErrors: 6
}
SP.WorkManagement.OM.ExchangeSyncResult.registerEnum('SP.WorkManagement.OM.ExchangeSyncResult', false);


SP.WorkManagement.OM.PinAge = function() {}
SP.WorkManagement.OM.PinAge.prototype = {
    noValue: 0, 
    fresh: 1, 
    stale: 2
}
SP.WorkManagement.OM.PinAge.registerEnum('SP.WorkManagement.OM.PinAge', false);


SP.WorkManagement.OM.PinnedState = function() {}
SP.WorkManagement.OM.PinnedState.prototype = {
    noValue: 0, 
    pinned: 1, 
    notPinned: 2
}
SP.WorkManagement.OM.PinnedState.registerEnum('SP.WorkManagement.OM.PinnedState', false);


SP.WorkManagement.OM.PrivacyType = function() {}
SP.WorkManagement.OM.PrivacyType.prototype = {
    none: 0, 
    personal: 1, 
    public: 2
}
SP.WorkManagement.OM.PrivacyType.registerEnum('SP.WorkManagement.OM.PrivacyType', false);


SP.WorkManagement.OM.RefreshState = function() {}
SP.WorkManagement.OM.RefreshState.prototype = {
    noValue: 0, 
    pending: 1, 
    ignored: 2, 
    succeeded: 3, 
    failed: 4
}
SP.WorkManagement.OM.RefreshState.registerEnum('SP.WorkManagement.OM.RefreshState', false);


SP.WorkManagement.OM.SortableTaskField = function() {}
SP.WorkManagement.OM.SortableTaskField.prototype = {
    noValue: 0, 
    title: 21, 
    isCompleted: 13, 
    id: 1, 
    dueDate: 5, 
    description: 4, 
    pinAge: 22, 
    location: 18, 
    lastModified: 17, 
    discoveredDate: 2
}
SP.WorkManagement.OM.SortableTaskField.registerEnum('SP.WorkManagement.OM.SortableTaskField', false);


SP.WorkManagement.OM.StringCompareType = function() {}
SP.WorkManagement.OM.StringCompareType.prototype = {
    noValue: 0, 
    equals: 1, 
    contains: 2, 
    beginsWith: 3
}
SP.WorkManagement.OM.StringCompareType.registerEnum('SP.WorkManagement.OM.StringCompareType', false);


SP.WorkManagement.OM.TaskQueryErrorType = function() {}
SP.WorkManagement.OM.TaskQueryErrorType.prototype = {
    noValue: 0, 
    queryThrottled: 1
}
SP.WorkManagement.OM.TaskQueryErrorType.registerEnum('SP.WorkManagement.OM.TaskQueryErrorType', false);


SP.WorkManagement.OM.WritableTaskField = function() {}
SP.WorkManagement.OM.WritableTaskField.prototype = {
    noValue: 0, 
    editUrl: 6, 
    title: 21, 
    isCompleted: 13, 
    dueDate: 5, 
    description: 4, 
    startDate: 28
}
SP.WorkManagement.OM.WritableTaskField.registerEnum('SP.WorkManagement.OM.WritableTaskField', false);


SP.WorkManagement.OM.WriteFieldErrorType = function() {}
SP.WorkManagement.OM.WriteFieldErrorType.prototype = {
    noValue: 0, 
    taskNotFound: 1, 
    invalidInput: 2, 
    taskDeleted: 3, 
    fieldConflict: 4, 
    validation: 5, 
    locationInvalid: 6, 
    unknown: 7, 
    dueDateInvalid: 8, 
    startDateInvalid: 9, 
    descriptionInvalid: 10, 
    isCompletedInvalid: 11, 
    titleInvalid: 12, 
    editUrlInvalid: 13, 
    accessDenied: 14, 
    promoteTargetTaskNotPersonal: 15, 
    promotionFailedInProvider: 16
}
SP.WorkManagement.OM.WriteFieldErrorType.registerEnum('SP.WorkManagement.OM.WriteFieldErrorType', false);


SP.WorkManagement.OM.BaseSession = function SP_WorkManagement_OM_BaseSession(context, objectPath) {ULS0Qc:;
    SP.WorkManagement.OM.BaseSession.initializeBase(this, [ context, objectPath ]);
}
SP.WorkManagement.OM.BaseSession.prototype = {
    
    createTask: function SP_WorkManagement_OM_BaseSession$createTask(taskName, description, localizedStartDate, localizedDueDate, completed, pinned, locationKey, editUrl) {ULS0Qc:;
        var $v_0 = this.get_context();
        var $v_1;
        $v_1 = new SP.WorkManagement.OM.TaskWriteResult($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'CreateTask', [ taskName, description, localizedStartDate, localizedDueDate, completed, pinned, locationKey, editUrl ]));
        return $v_1;
    },
    
    createPersonalTaskAndPromoteToProviderTask: function SP_WorkManagement_OM_BaseSession$createPersonalTaskAndPromoteToProviderTask(taskName, description, localizedStartDate, localizedDueDate, completed, pinned, locationKey) {ULS0Qc:;
        var $v_0 = this.get_context();
        var $v_1;
        $v_1 = new SP.WorkManagement.OM.TaskWriteResult($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'CreatePersonalTaskAndPromoteToProviderTask', [ taskName, description, localizedStartDate, localizedDueDate, completed, pinned, locationKey ]));
        return $v_1;
    },
    
    deleteTask: function SP_WorkManagement_OM_BaseSession$deleteTask(taskKey) {ULS0Qc:;
        var $v_0 = this.get_context();
        var $v_1;
        $v_1 = new SP.WorkManagement.OM.TaskWriteResult($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'DeleteTask', [ taskKey ]));
        return $v_1;
    },
    
    pinTask: function SP_WorkManagement_OM_BaseSession$pinTask(taskKey) {ULS0Qc:;
        var $v_0 = this.get_context();
        var $v_1;
        $v_1 = new SP.WorkManagement.OM.TaskWriteResult($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'PinTask', [ taskKey ]));
        return $v_1;
    },
    
    promotePersonalTaskToProviderTaskInLocation: function SP_WorkManagement_OM_BaseSession$promotePersonalTaskToProviderTaskInLocation(taskKey, locationId) {ULS0Qc:;
        var $v_0 = this.get_context();
        var $v_1;
        $v_1 = new SP.WorkManagement.OM.TaskWriteResult($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'PromotePersonalTaskToProviderTaskInLocation', [ taskKey, locationId ]));
        return $v_1;
    },
    
    removePinOnTask: function SP_WorkManagement_OM_BaseSession$removePinOnTask(taskKey) {ULS0Qc:;
        var $v_0 = this.get_context();
        var $v_1;
        $v_1 = new SP.WorkManagement.OM.TaskWriteResult($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'RemovePinOnTask', [ taskKey ]));
        return $v_1;
    },
    
    readAllNonTaskData: function SP_WorkManagement_OM_BaseSession$readAllNonTaskData() {ULS0Qc:;
        var $v_0 = this.get_context();
        var $v_1;
        $v_1 = new SP.WorkManagement.OM.NonTaskDataReadResult($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'ReadAllNonTaskData', null));
        return $v_1;
    },
    
    beginCacheRefresh: function SP_WorkManagement_OM_BaseSession$beginCacheRefresh() {ULS0Qc:;
        var $v_0 = this.get_context();
        var $v_1;
        $v_1 = new SP.WorkManagement.OM.CreateRefreshJobResult($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'BeginCacheRefresh', null));
        return $v_1;
    },
    
    updateTaskWithLocalizedValue: function SP_WorkManagement_OM_BaseSession$updateTaskWithLocalizedValue(taskKey, field, value) {ULS0Qc:;
        var $v_0 = this.get_context();
        var $v_1;
        $v_1 = new SP.WorkManagement.OM.TaskWriteResult($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'UpdateTaskWithLocalizedValue', [ taskKey, field, value ]));
        return $v_1;
    },
    
    getCalloutInfo: function SP_WorkManagement_OM_BaseSession$getCalloutInfo(taskKey) {ULS0Qc:;
        var $v_0 = this.get_context();
        var $v_1;
        $v_1 = new SP.WorkManagement.OM.CalloutInfo($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetCalloutInfo', [ taskKey ]));
        return $v_1;
    },
    
    refreshSingleTask: function SP_WorkManagement_OM_BaseSession$refreshSingleTask(taskKey) {ULS0Qc:;
        var $v_0 = this.get_context();
        var $v_1;
        $v_1 = new SP.WorkManagement.OM.TaskRefreshResult($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'RefreshSingleTask', [ taskKey ]));
        return $v_1;
    },
    
    getRefreshStatus: function SP_WorkManagement_OM_BaseSession$getRefreshStatus(refreshId) {ULS0Qc:;
        var $v_0 = this.get_context();
        var $v_1;
        $v_1 = new SP.WorkManagement.OM.RefreshResult($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetRefreshStatus', [ refreshId ]));
        return $v_1;
    },
    
    addAttributeToTask: function SP_WorkManagement_OM_BaseSession$addAttributeToTask(taskKey, attribute) {ULS0Qc:;
        var $v_0 = this.get_context();
        var $v_1;
        $v_1 = new SP.WorkManagement.OM.TaskWriteResult($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'AddAttributeToTask', [ taskKey, attribute ]));
        return $v_1;
    },
    
    removeAttributeFromTask: function SP_WorkManagement_OM_BaseSession$removeAttributeFromTask(taskKey, attribute) {ULS0Qc:;
        var $v_0 = this.get_context();
        var $v_1;
        $v_1 = new SP.WorkManagement.OM.TaskWriteResult($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'RemoveAttributeFromTask', [ taskKey, attribute ]));
        return $v_1;
    },
    
    beginExchangeSync: function SP_WorkManagement_OM_BaseSession$beginExchangeSync() {ULS0Qc:;
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'BeginExchangeSync', null);
        $v_0.addQuery($v_2);
        $v_1 = new SP.BooleanResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    },
    
    isExchangeJobPending: function SP_WorkManagement_OM_BaseSession$isExchangeJobPending() {ULS0Qc:;
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'IsExchangeJobPending', null);
        $v_0.addQuery($v_2);
        $v_1 = new SP.BooleanResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    },
    
    getRefreshHealthInfo: function SP_WorkManagement_OM_BaseSession$getRefreshHealthInfo() {ULS0Qc:;
        var $v_0 = this.get_context();
        var $v_1;
        $v_1 = new SP.WorkManagement.OM.RefreshHealthInfo($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetRefreshHealthInfo', null));
        return $v_1;
    },
    
    getRefreshHistory: function SP_WorkManagement_OM_BaseSession$getRefreshHistory(since) {ULS0Qc:;
        var $v_0 = this.get_context();
        var $v_1;
        $v_1 = new SP.WorkManagement.OM.RefreshHistory($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetRefreshHistory', [ since ]));
        return $v_1;
    }
}


SP.WorkManagement.OM.BooleanCriterion = function SP_WorkManagement_OM_BooleanCriterion(context) {ULS0Qc:;
    SP.WorkManagement.OM.BooleanCriterion.initializeBase(this, [ context, SP.ClientUtility.getOrCreateObjectPathForConstructor(context, '{16d379b2-e752-405e-a05f-a8fe05aa0d07}', arguments) ]);
}
SP.WorkManagement.OM.BooleanCriterion.newObject = function SP_WorkManagement_OM_BooleanCriterion$newObject(context) {ULS0Qc:;
    return new SP.WorkManagement.OM.BooleanCriterion(context, new SP.ObjectPathConstructor(context, '{16d379b2-e752-405e-a05f-a8fe05aa0d07}', null));
}
SP.WorkManagement.OM.BooleanCriterion.prototype = {
    
    get_compareType: function SP_WorkManagement_OM_BooleanCriterion$get_compareType() {ULS0Qc:;
        this.checkUninitializedProperty('CompareType');
        return ((this.get_objectData().get_properties()['CompareType']));
    },
    set_compareType: function SP_WorkManagement_OM_BooleanCriterion$set_compareType(value) {ULS0Qc:;
        this.get_objectData().get_properties()['CompareType'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'CompareType', value));
        }
        return value;
    },
    
    initPropertiesFromJson: function SP_WorkManagement_OM_BooleanCriterion$initPropertiesFromJson(parentNode) {ULS0Qc:;
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.CompareType;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['CompareType'] = ((SP.DataConvert.fixupType(this.get_context(), $v_0)));
            delete parentNode.CompareType;
        }
    }
}


SP.WorkManagement.OM.BooleanCriterionPropertyNames = function SP_WorkManagement_OM_BooleanCriterionPropertyNames() {
}


SP.WorkManagement.OM.CalloutInfo = function SP_WorkManagement_OM_CalloutInfo(context, objectPath) {ULS0Qc:;
    SP.WorkManagement.OM.CalloutInfo.initializeBase(this, [ context, objectPath ]);
}
SP.WorkManagement.OM.CalloutInfo.prototype = {
    
    get_contacts: function SP_WorkManagement_OM_CalloutInfo$get_contacts() {ULS0Qc:;
        this.checkUninitializedProperty('Contacts');
        return ((this.get_objectData().get_properties()['Contacts']));
    },
    set_contacts: function SP_WorkManagement_OM_CalloutInfo$set_contacts(value) {ULS0Qc:;
        this.get_objectData().get_properties()['Contacts'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Contacts', value));
        }
        return value;
    },
    
    get_directLinkTitle: function SP_WorkManagement_OM_CalloutInfo$get_directLinkTitle() {ULS0Qc:;
        this.checkUninitializedProperty('DirectLinkTitle');
        return ((this.get_objectData().get_properties()['DirectLinkTitle']));
    },
    set_directLinkTitle: function SP_WorkManagement_OM_CalloutInfo$set_directLinkTitle(value) {ULS0Qc:;
        this.get_objectData().get_properties()['DirectLinkTitle'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'DirectLinkTitle', value));
        }
        return value;
    },
    
    get_directLinkUrl: function SP_WorkManagement_OM_CalloutInfo$get_directLinkUrl() {ULS0Qc:;
        this.checkUninitializedProperty('DirectLinkUrl');
        return ((this.get_objectData().get_properties()['DirectLinkUrl']));
    },
    set_directLinkUrl: function SP_WorkManagement_OM_CalloutInfo$set_directLinkUrl(value) {ULS0Qc:;
        this.get_objectData().get_properties()['DirectLinkUrl'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'DirectLinkUrl', value));
        }
        return value;
    },
    
    get_hierarchy: function SP_WorkManagement_OM_CalloutInfo$get_hierarchy() {ULS0Qc:;
        this.checkUninitializedProperty('Hierarchy');
        return ((this.get_objectData().get_properties()['Hierarchy']));
    },
    set_hierarchy: function SP_WorkManagement_OM_CalloutInfo$set_hierarchy(value) {ULS0Qc:;
        this.get_objectData().get_properties()['Hierarchy'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Hierarchy', value));
        }
        return value;
    },
    
    get_predecessors: function SP_WorkManagement_OM_CalloutInfo$get_predecessors() {ULS0Qc:;
        this.checkUninitializedProperty('Predecessors');
        return ((this.get_objectData().get_properties()['Predecessors']));
    },
    set_predecessors: function SP_WorkManagement_OM_CalloutInfo$set_predecessors(value) {ULS0Qc:;
        this.get_objectData().get_properties()['Predecessors'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Predecessors', value));
        }
        return value;
    },
    
    get_successors: function SP_WorkManagement_OM_CalloutInfo$get_successors() {ULS0Qc:;
        this.checkUninitializedProperty('Successors');
        return ((this.get_objectData().get_properties()['Successors']));
    },
    set_successors: function SP_WorkManagement_OM_CalloutInfo$set_successors(value) {ULS0Qc:;
        this.get_objectData().get_properties()['Successors'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Successors', value));
        }
        return value;
    },
    
    get_title: function SP_WorkManagement_OM_CalloutInfo$get_title() {ULS0Qc:;
        this.checkUninitializedProperty('Title');
        return ((this.get_objectData().get_properties()['Title']));
    },
    set_title: function SP_WorkManagement_OM_CalloutInfo$set_title(value) {ULS0Qc:;
        this.get_objectData().get_properties()['Title'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Title', value));
        }
        return value;
    },
    
    get_url: function SP_WorkManagement_OM_CalloutInfo$get_url() {ULS0Qc:;
        this.checkUninitializedProperty('Url');
        return ((this.get_objectData().get_properties()['Url']));
    },
    set_url: function SP_WorkManagement_OM_CalloutInfo$set_url(value) {ULS0Qc:;
        this.get_objectData().get_properties()['Url'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Url', value));
        }
        return value;
    },
    
    initPropertiesFromJson: function SP_WorkManagement_OM_CalloutInfo$initPropertiesFromJson(parentNode) {ULS0Qc:;
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.Contacts;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Contacts'] = ((SP.DataConvert.fixupType(this.get_context(), $v_0)));
            delete parentNode.Contacts;
        }
        $v_0 = parentNode.DirectLinkTitle;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['DirectLinkTitle'] = ($v_0);
            delete parentNode.DirectLinkTitle;
        }
        $v_0 = parentNode.DirectLinkUrl;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['DirectLinkUrl'] = ($v_0);
            delete parentNode.DirectLinkUrl;
        }
        $v_0 = parentNode.Hierarchy;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Hierarchy'] = ((SP.DataConvert.fixupType(this.get_context(), $v_0)));
            delete parentNode.Hierarchy;
        }
        $v_0 = parentNode.Predecessors;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Predecessors'] = ((SP.DataConvert.fixupType(this.get_context(), $v_0)));
            delete parentNode.Predecessors;
        }
        $v_0 = parentNode.Successors;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Successors'] = ((SP.DataConvert.fixupType(this.get_context(), $v_0)));
            delete parentNode.Successors;
        }
        $v_0 = parentNode.Title;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Title'] = ($v_0);
            delete parentNode.Title;
        }
        $v_0 = parentNode.Url;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Url'] = ($v_0);
            delete parentNode.Url;
        }
    }
}


SP.WorkManagement.OM.CalloutInfoPropertyNames = function SP_WorkManagement_OM_CalloutInfoPropertyNames() {
}


SP.WorkManagement.OM.CreateRefreshJobResult = function SP_WorkManagement_OM_CreateRefreshJobResult(context, objectPath) {ULS0Qc:;
    SP.WorkManagement.OM.CreateRefreshJobResult.initializeBase(this, [ context, objectPath ]);
}
SP.WorkManagement.OM.CreateRefreshJobResult.prototype = {
    
    get_createdJob: function SP_WorkManagement_OM_CreateRefreshJobResult$get_createdJob() {ULS0Qc:;
        this.checkUninitializedProperty('CreatedJob');
        return ((this.get_objectData().get_properties()['CreatedJob']));
    },
    set_createdJob: function SP_WorkManagement_OM_CreateRefreshJobResult$set_createdJob(value) {ULS0Qc:;
        this.get_objectData().get_properties()['CreatedJob'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'CreatedJob', value));
        }
        return value;
    },
    
    get_currentJobId: function SP_WorkManagement_OM_CreateRefreshJobResult$get_currentJobId() {ULS0Qc:;
        this.checkUninitializedProperty('CurrentJobId');
        return ((this.get_objectData().get_properties()['CurrentJobId']));
    },
    set_currentJobId: function SP_WorkManagement_OM_CreateRefreshJobResult$set_currentJobId(value) {ULS0Qc:;
        this.get_objectData().get_properties()['CurrentJobId'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'CurrentJobId', value));
        }
        return value;
    },
    
    get_encounteredError: function SP_WorkManagement_OM_CreateRefreshJobResult$get_encounteredError() {ULS0Qc:;
        this.checkUninitializedProperty('EncounteredError');
        return ((this.get_objectData().get_properties()['EncounteredError']));
    },
    set_encounteredError: function SP_WorkManagement_OM_CreateRefreshJobResult$set_encounteredError(value) {ULS0Qc:;
        this.get_objectData().get_properties()['EncounteredError'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'EncounteredError', value));
        }
        return value;
    },
    
    initPropertiesFromJson: function SP_WorkManagement_OM_CreateRefreshJobResult$initPropertiesFromJson(parentNode) {ULS0Qc:;
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.CreatedJob;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['CreatedJob'] = ($v_0);
            delete parentNode.CreatedJob;
        }
        $v_0 = parentNode.CurrentJobId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['CurrentJobId'] = ($v_0);
            delete parentNode.CurrentJobId;
        }
        $v_0 = parentNode.EncounteredError;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['EncounteredError'] = ($v_0);
            delete parentNode.EncounteredError;
        }
    }
}


SP.WorkManagement.OM.CreateRefreshJobResultPropertyNames = function SP_WorkManagement_OM_CreateRefreshJobResultPropertyNames() {
}


SP.WorkManagement.OM.CustomAttributeFilter = function SP_WorkManagement_OM_CustomAttributeFilter(context) {ULS0Qc:;
    SP.WorkManagement.OM.CustomAttributeFilter.initializeBase(this, [ context, SP.ClientUtility.getOrCreateObjectPathForConstructor(context, '{0e21bb74-7473-48b1-9f7b-d1185ba1ca71}', arguments) ]);
}
SP.WorkManagement.OM.CustomAttributeFilter.newObject = function SP_WorkManagement_OM_CustomAttributeFilter$newObject(context) {ULS0Qc:;
    return new SP.WorkManagement.OM.CustomAttributeFilter(context, new SP.ObjectPathConstructor(context, '{0e21bb74-7473-48b1-9f7b-d1185ba1ca71}', null));
}
SP.WorkManagement.OM.CustomAttributeFilter.prototype = {
    
    get_attributes: function SP_WorkManagement_OM_CustomAttributeFilter$get_attributes() {ULS0Qc:;
        this.checkUninitializedProperty('Attributes');
        return ((this.get_objectData().get_properties()['Attributes']));
    },
    set_attributes: function SP_WorkManagement_OM_CustomAttributeFilter$set_attributes(value) {ULS0Qc:;
        this.get_objectData().get_properties()['Attributes'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Attributes', value));
        }
        return value;
    },
    
    get_concatType: function SP_WorkManagement_OM_CustomAttributeFilter$get_concatType() {ULS0Qc:;
        this.checkUninitializedProperty('ConcatType');
        return ((this.get_objectData().get_properties()['ConcatType']));
    },
    set_concatType: function SP_WorkManagement_OM_CustomAttributeFilter$set_concatType(value) {ULS0Qc:;
        this.get_objectData().get_properties()['ConcatType'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'ConcatType', value));
        }
        return value;
    },
    
    initPropertiesFromJson: function SP_WorkManagement_OM_CustomAttributeFilter$initPropertiesFromJson(parentNode) {ULS0Qc:;
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.Attributes;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Attributes'] = ((SP.DataConvert.fixupType(this.get_context(), $v_0)));
            delete parentNode.Attributes;
        }
        $v_0 = parentNode.ConcatType;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ConcatType'] = ((SP.DataConvert.fixupType(this.get_context(), $v_0)));
            delete parentNode.ConcatType;
        }
    }
}


SP.WorkManagement.OM.CustomAttributeFilterPropertyNames = function SP_WorkManagement_OM_CustomAttributeFilterPropertyNames() {
}


SP.WorkManagement.OM.DashboardScriptExtensionInfo = function SP_WorkManagement_OM_DashboardScriptExtensionInfo(context, objectPath) {ULS0Qc:;
    SP.WorkManagement.OM.DashboardScriptExtensionInfo.initializeBase(this, [ context, objectPath ]);
}
SP.WorkManagement.OM.DashboardScriptExtensionInfo.prototype = {
    
    get_providerKey: function SP_WorkManagement_OM_DashboardScriptExtensionInfo$get_providerKey() {ULS0Qc:;
        this.checkUninitializedProperty('ProviderKey');
        return ((this.get_objectData().get_properties()['ProviderKey']));
    },
    set_providerKey: function SP_WorkManagement_OM_DashboardScriptExtensionInfo$set_providerKey(value) {ULS0Qc:;
        this.get_objectData().get_properties()['ProviderKey'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'ProviderKey', value));
        }
        return value;
    },
    
    get_scriptClass: function SP_WorkManagement_OM_DashboardScriptExtensionInfo$get_scriptClass() {ULS0Qc:;
        this.checkUninitializedProperty('ScriptClass');
        return ((this.get_objectData().get_properties()['ScriptClass']));
    },
    set_scriptClass: function SP_WorkManagement_OM_DashboardScriptExtensionInfo$set_scriptClass(value) {ULS0Qc:;
        this.get_objectData().get_properties()['ScriptClass'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'ScriptClass', value));
        }
        return value;
    },
    
    get_scriptData: function SP_WorkManagement_OM_DashboardScriptExtensionInfo$get_scriptData() {ULS0Qc:;
        this.checkUninitializedProperty('ScriptData');
        return ((this.get_objectData().get_properties()['ScriptData']));
    },
    set_scriptData: function SP_WorkManagement_OM_DashboardScriptExtensionInfo$set_scriptData(value) {ULS0Qc:;
        this.get_objectData().get_properties()['ScriptData'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'ScriptData', value));
        }
        return value;
    },
    
    get_scriptFiles: function SP_WorkManagement_OM_DashboardScriptExtensionInfo$get_scriptFiles() {ULS0Qc:;
        this.checkUninitializedProperty('ScriptFiles');
        return ((this.get_objectData().get_properties()['ScriptFiles']));
    },
    set_scriptFiles: function SP_WorkManagement_OM_DashboardScriptExtensionInfo$set_scriptFiles(value) {ULS0Qc:;
        this.get_objectData().get_properties()['ScriptFiles'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'ScriptFiles', value));
        }
        return value;
    },
    
    initPropertiesFromJson: function SP_WorkManagement_OM_DashboardScriptExtensionInfo$initPropertiesFromJson(parentNode) {ULS0Qc:;
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.ProviderKey;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ProviderKey'] = ($v_0);
            delete parentNode.ProviderKey;
        }
        $v_0 = parentNode.ScriptClass;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ScriptClass'] = ($v_0);
            delete parentNode.ScriptClass;
        }
        $v_0 = parentNode.ScriptData;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ScriptData'] = ($v_0);
            delete parentNode.ScriptData;
        }
        $v_0 = parentNode.ScriptFiles;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ScriptFiles'] = ((SP.DataConvert.fixupType(this.get_context(), $v_0)));
            delete parentNode.ScriptFiles;
        }
    }
}


SP.WorkManagement.OM.DashboardScriptExtensionInfoPropertyNames = function SP_WorkManagement_OM_DashboardScriptExtensionInfoPropertyNames() {
}


SP.WorkManagement.OM.DashboardScriptExtensionInfoClientCollection = function SP_WorkManagement_OM_DashboardScriptExtensionInfoClientCollection(context, objectPath) {ULS0Qc:;
    SP.WorkManagement.OM.DashboardScriptExtensionInfoClientCollection.initializeBase(this, [ context, objectPath ]);
}
SP.WorkManagement.OM.DashboardScriptExtensionInfoClientCollection.prototype = {
    
    itemAt: function SP_WorkManagement_OM_DashboardScriptExtensionInfoClientCollection$itemAt(index) {ULS0Qc:;
        return this.getItemAtIndex(index);
    },
    
    get_item: function SP_WorkManagement_OM_DashboardScriptExtensionInfoClientCollection$get_item(index) {ULS0Qc:;
        return this.getItemAtIndex(index);
    },
    
    get_childItemType: function SP_WorkManagement_OM_DashboardScriptExtensionInfoClientCollection$get_childItemType() {ULS0Qc:;
        return SP.WorkManagement.OM.DashboardScriptExtensionInfo;
    }
}


SP.WorkManagement.OM.DateRangeCriterion = function SP_WorkManagement_OM_DateRangeCriterion(context) {ULS0Qc:;
    SP.WorkManagement.OM.DateRangeCriterion.initializeBase(this, [ context, SP.ClientUtility.getOrCreateObjectPathForConstructor(context, '{c9c79001-8e9d-4f24-860b-55bd22c13eae}', arguments) ]);
}
SP.WorkManagement.OM.DateRangeCriterion.newObject = function SP_WorkManagement_OM_DateRangeCriterion$newObject(context) {ULS0Qc:;
    return new SP.WorkManagement.OM.DateRangeCriterion(context, new SP.ObjectPathConstructor(context, '{c9c79001-8e9d-4f24-860b-55bd22c13eae}', null));
}
SP.WorkManagement.OM.DateRangeCriterion.prototype = {
    
    get_rangeEndValue: function SP_WorkManagement_OM_DateRangeCriterion$get_rangeEndValue() {ULS0Qc:;
        this.checkUninitializedProperty('RangeEndValue');
        return ((this.get_objectData().get_properties()['RangeEndValue']));
    },
    set_rangeEndValue: function SP_WorkManagement_OM_DateRangeCriterion$set_rangeEndValue(value) {ULS0Qc:;
        this.get_objectData().get_properties()['RangeEndValue'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'RangeEndValue', value));
        }
        return value;
    },
    
    get_rangeStartValue: function SP_WorkManagement_OM_DateRangeCriterion$get_rangeStartValue() {ULS0Qc:;
        this.checkUninitializedProperty('RangeStartValue');
        return ((this.get_objectData().get_properties()['RangeStartValue']));
    },
    set_rangeStartValue: function SP_WorkManagement_OM_DateRangeCriterion$set_rangeStartValue(value) {ULS0Qc:;
        this.get_objectData().get_properties()['RangeStartValue'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'RangeStartValue', value));
        }
        return value;
    },
    
    initPropertiesFromJson: function SP_WorkManagement_OM_DateRangeCriterion$initPropertiesFromJson(parentNode) {ULS0Qc:;
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.RangeEndValue;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['RangeEndValue'] = ($v_0);
            delete parentNode.RangeEndValue;
        }
        $v_0 = parentNode.RangeStartValue;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['RangeStartValue'] = ($v_0);
            delete parentNode.RangeStartValue;
        }
    }
}


SP.WorkManagement.OM.DateRangeCriterionPropertyNames = function SP_WorkManagement_OM_DateRangeCriterionPropertyNames() {
}


SP.WorkManagement.OM.ExchangeUserSyncState = function SP_WorkManagement_OM_ExchangeUserSyncState(context, objectPath) {ULS0Qc:;
    SP.WorkManagement.OM.ExchangeUserSyncState.initializeBase(this, [ context, objectPath ]);
}
SP.WorkManagement.OM.ExchangeUserSyncState.prototype = {
    
    get_isOptedIn: function SP_WorkManagement_OM_ExchangeUserSyncState$get_isOptedIn() {ULS0Qc:;
        this.checkUninitializedProperty('IsOptedIn');
        return ((this.get_objectData().get_properties()['IsOptedIn']));
    },
    
    get_lastEndTime: function SP_WorkManagement_OM_ExchangeUserSyncState$get_lastEndTime() {ULS0Qc:;
        this.checkUninitializedProperty('LastEndTime');
        return ((this.get_objectData().get_properties()['LastEndTime']));
    },
    
    get_lastSyncResult: function SP_WorkManagement_OM_ExchangeUserSyncState$get_lastSyncResult() {ULS0Qc:;
        this.checkUninitializedProperty('LastSyncResult');
        return ((this.get_objectData().get_properties()['LastSyncResult']));
    },
    
    initPropertiesFromJson: function SP_WorkManagement_OM_ExchangeUserSyncState$initPropertiesFromJson(parentNode) {ULS0Qc:;
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.IsOptedIn;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['IsOptedIn'] = ($v_0);
            delete parentNode.IsOptedIn;
        }
        $v_0 = parentNode.LastEndTime;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['LastEndTime'] = ($v_0);
            delete parentNode.LastEndTime;
        }
        $v_0 = parentNode.LastSyncResult;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['LastSyncResult'] = ((SP.DataConvert.fixupType(this.get_context(), $v_0)));
            delete parentNode.LastSyncResult;
        }
    }
}


SP.WorkManagement.OM.ExchangeUserSyncStatePropertyNames = function SP_WorkManagement_OM_ExchangeUserSyncStatePropertyNames() {
}


SP.WorkManagement.OM.Location = function SP_WorkManagement_OM_Location(context) {ULS0Qc:;
    SP.WorkManagement.OM.Location.initializeBase(this, [ context, SP.ClientUtility.getOrCreateObjectPathForConstructor(context, '{0280ffca-96c5-4c96-bbbb-759887950afd}', arguments) ]);
}
SP.WorkManagement.OM.Location.newObject = function SP_WorkManagement_OM_Location$newObject(context) {ULS0Qc:;
    return new SP.WorkManagement.OM.Location(context, new SP.ObjectPathConstructor(context, '{0280ffca-96c5-4c96-bbbb-759887950afd}', null));
}
SP.WorkManagement.OM.Location.prototype = {
    
    get_color: function SP_WorkManagement_OM_Location$get_color() {ULS0Qc:;
        this.checkUninitializedProperty('Color');
        return ((this.get_objectData().get_properties()['Color']));
    },
    set_color: function SP_WorkManagement_OM_Location$set_color(value) {ULS0Qc:;
        this.get_objectData().get_properties()['Color'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Color', value));
        }
        return value;
    },
    
    get_id: function SP_WorkManagement_OM_Location$get_id() {ULS0Qc:;
        this.checkUninitializedProperty('Id');
        return ((this.get_objectData().get_properties()['Id']));
    },
    set_id: function SP_WorkManagement_OM_Location$set_id(value) {ULS0Qc:;
        this.get_objectData().get_properties()['Id'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Id', value));
        }
        return value;
    },
    
    get_important: function SP_WorkManagement_OM_Location$get_important() {ULS0Qc:;
        this.checkUninitializedProperty('Important');
        return ((this.get_objectData().get_properties()['Important']));
    },
    set_important: function SP_WorkManagement_OM_Location$set_important(value) {ULS0Qc:;
        this.get_objectData().get_properties()['Important'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Important', value));
        }
        return value;
    },
    
    get_name: function SP_WorkManagement_OM_Location$get_name() {ULS0Qc:;
        this.checkUninitializedProperty('Name');
        return ((this.get_objectData().get_properties()['Name']));
    },
    set_name: function SP_WorkManagement_OM_Location$set_name(value) {ULS0Qc:;
        this.get_objectData().get_properties()['Name'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Name', value));
        }
        return value;
    },
    
    get_parentId: function SP_WorkManagement_OM_Location$get_parentId() {ULS0Qc:;
        this.checkUninitializedProperty('ParentId');
        return ((this.get_objectData().get_properties()['ParentId']));
    },
    set_parentId: function SP_WorkManagement_OM_Location$set_parentId(value) {ULS0Qc:;
        this.get_objectData().get_properties()['ParentId'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'ParentId', value));
        }
        return value;
    },
    
    get_rootProviderKey: function SP_WorkManagement_OM_Location$get_rootProviderKey() {ULS0Qc:;
        this.checkUninitializedProperty('RootProviderKey');
        return ((this.get_objectData().get_properties()['RootProviderKey']));
    },
    set_rootProviderKey: function SP_WorkManagement_OM_Location$set_rootProviderKey(value) {ULS0Qc:;
        this.get_objectData().get_properties()['RootProviderKey'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'RootProviderKey', value));
        }
        return value;
    },
    
    get_url: function SP_WorkManagement_OM_Location$get_url() {ULS0Qc:;
        this.checkUninitializedProperty('Url');
        return ((this.get_objectData().get_properties()['Url']));
    },
    set_url: function SP_WorkManagement_OM_Location$set_url(value) {ULS0Qc:;
        this.get_objectData().get_properties()['Url'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Url', value));
        }
        return value;
    },
    
    initPropertiesFromJson: function SP_WorkManagement_OM_Location$initPropertiesFromJson(parentNode) {ULS0Qc:;
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.Color;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Color'] = ($v_0);
            delete parentNode.Color;
        }
        $v_0 = parentNode.Id;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Id'] = ($v_0);
            delete parentNode.Id;
        }
        $v_0 = parentNode.Important;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Important'] = ($v_0);
            delete parentNode.Important;
        }
        $v_0 = parentNode.Name;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Name'] = ($v_0);
            delete parentNode.Name;
        }
        $v_0 = parentNode.ParentId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ParentId'] = ($v_0);
            delete parentNode.ParentId;
        }
        $v_0 = parentNode.RootProviderKey;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['RootProviderKey'] = ($v_0);
            delete parentNode.RootProviderKey;
        }
        $v_0 = parentNode.Url;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Url'] = ($v_0);
            delete parentNode.Url;
        }
    }
}


SP.WorkManagement.OM.LocationPropertyNames = function SP_WorkManagement_OM_LocationPropertyNames() {
}


SP.WorkManagement.OM.LocationClientCollection = function SP_WorkManagement_OM_LocationClientCollection(context, objectPath) {ULS0Qc:;
    SP.WorkManagement.OM.LocationClientCollection.initializeBase(this, [ context, objectPath ]);
}
SP.WorkManagement.OM.LocationClientCollection.prototype = {
    
    itemAt: function SP_WorkManagement_OM_LocationClientCollection$itemAt(index) {ULS0Qc:;
        return this.getItemAtIndex(index);
    },
    
    get_item: function SP_WorkManagement_OM_LocationClientCollection$get_item(index) {ULS0Qc:;
        return this.getItemAtIndex(index);
    },
    
    get_childItemType: function SP_WorkManagement_OM_LocationClientCollection$get_childItemType() {ULS0Qc:;
        return SP.WorkManagement.OM.Location;
    }
}


SP.WorkManagement.OM.LocationDisplaySetting = function SP_WorkManagement_OM_LocationDisplaySetting(context, objectPath) {ULS0Qc:;
    SP.WorkManagement.OM.LocationDisplaySetting.initializeBase(this, [ context, objectPath ]);
}
SP.WorkManagement.OM.LocationDisplaySetting.prototype = {
    
    get_color: function SP_WorkManagement_OM_LocationDisplaySetting$get_color() {ULS0Qc:;
        this.checkUninitializedProperty('Color');
        return ((this.get_objectData().get_properties()['Color']));
    },
    set_color: function SP_WorkManagement_OM_LocationDisplaySetting$set_color(value) {ULS0Qc:;
        this.get_objectData().get_properties()['Color'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Color', value));
        }
        return value;
    },
    
    get_id: function SP_WorkManagement_OM_LocationDisplaySetting$get_id() {ULS0Qc:;
        this.checkUninitializedProperty('Id');
        return ((this.get_objectData().get_properties()['Id']));
    },
    set_id: function SP_WorkManagement_OM_LocationDisplaySetting$set_id(value) {ULS0Qc:;
        this.get_objectData().get_properties()['Id'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Id', value));
        }
        return value;
    },
    
    initPropertiesFromJson: function SP_WorkManagement_OM_LocationDisplaySetting$initPropertiesFromJson(parentNode) {ULS0Qc:;
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.Color;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Color'] = ($v_0);
            delete parentNode.Color;
        }
        $v_0 = parentNode.Id;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Id'] = ($v_0);
            delete parentNode.Id;
        }
    }
}


SP.WorkManagement.OM.LocationDisplaySettingPropertyNames = function SP_WorkManagement_OM_LocationDisplaySettingPropertyNames() {
}


SP.WorkManagement.OM.LocationFilter = function SP_WorkManagement_OM_LocationFilter(context) {ULS0Qc:;
    SP.WorkManagement.OM.LocationFilter.initializeBase(this, [ context, SP.ClientUtility.getOrCreateObjectPathForConstructor(context, '{d9ce752e-01ed-4872-b4da-fc362038fbf0}', arguments) ]);
}
SP.WorkManagement.OM.LocationFilter.newObject = function SP_WorkManagement_OM_LocationFilter$newObject(context) {ULS0Qc:;
    return new SP.WorkManagement.OM.LocationFilter(context, new SP.ObjectPathConstructor(context, '{d9ce752e-01ed-4872-b4da-fc362038fbf0}', null));
}
SP.WorkManagement.OM.LocationFilter.prototype = {
    
    get_includeUncategorizedTasks: function SP_WorkManagement_OM_LocationFilter$get_includeUncategorizedTasks() {ULS0Qc:;
        this.checkUninitializedProperty('IncludeUncategorizedTasks');
        return ((this.get_objectData().get_properties()['IncludeUncategorizedTasks']));
    },
    set_includeUncategorizedTasks: function SP_WorkManagement_OM_LocationFilter$set_includeUncategorizedTasks(value) {ULS0Qc:;
        this.get_objectData().get_properties()['IncludeUncategorizedTasks'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'IncludeUncategorizedTasks', value));
        }
        return value;
    },
    
    get_locationKeys: function SP_WorkManagement_OM_LocationFilter$get_locationKeys() {ULS0Qc:;
        this.checkUninitializedProperty('LocationKeys');
        return ((this.get_objectData().get_properties()['LocationKeys']));
    },
    set_locationKeys: function SP_WorkManagement_OM_LocationFilter$set_locationKeys(value) {ULS0Qc:;
        this.get_objectData().get_properties()['LocationKeys'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'LocationKeys', value));
        }
        return value;
    },
    
    initPropertiesFromJson: function SP_WorkManagement_OM_LocationFilter$initPropertiesFromJson(parentNode) {ULS0Qc:;
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.IncludeUncategorizedTasks;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['IncludeUncategorizedTasks'] = ($v_0);
            delete parentNode.IncludeUncategorizedTasks;
        }
        $v_0 = parentNode.LocationKeys;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['LocationKeys'] = ((SP.DataConvert.fixupType(this.get_context(), $v_0)));
            delete parentNode.LocationKeys;
        }
    }
}


SP.WorkManagement.OM.LocationFilterPropertyNames = function SP_WorkManagement_OM_LocationFilterPropertyNames() {
}


SP.WorkManagement.OM.LocationGroupClientCollection = function SP_WorkManagement_OM_LocationGroupClientCollection(context) {ULS0Qc:;
    SP.WorkManagement.OM.LocationGroupClientCollection.initializeBase(this, [ context, SP.ClientUtility.getOrCreateObjectPathForConstructor(context, '{25acd8c5-c100-45da-b4c5-2bf698f65649}', arguments) ]);
}
SP.WorkManagement.OM.LocationGroupClientCollection.newObject = function SP_WorkManagement_OM_LocationGroupClientCollection$newObject(context) {ULS0Qc:;
    return new SP.WorkManagement.OM.LocationGroupClientCollection(context, new SP.ObjectPathConstructor(context, '{25acd8c5-c100-45da-b4c5-2bf698f65649}', null));
}
SP.WorkManagement.OM.LocationGroupClientCollection.prototype = {
    
    itemAt: function SP_WorkManagement_OM_LocationGroupClientCollection$itemAt(index) {ULS0Qc:;
        return this.getItemAtIndex(index);
    },
    
    get_item: function SP_WorkManagement_OM_LocationGroupClientCollection$get_item(index) {ULS0Qc:;
        return this.getItemAtIndex(index);
    },
    
    get_childItemType: function SP_WorkManagement_OM_LocationGroupClientCollection$get_childItemType() {ULS0Qc:;
        return SP.WorkManagement.OM.Task;
    }
}


SP.WorkManagement.OM.LocationOrientedSortableSession = function SP_WorkManagement_OM_LocationOrientedSortableSession(context, objectPath) {ULS0Qc:;
    SP.WorkManagement.OM.LocationOrientedSortableSession.initializeBase(this, [ context, objectPath ]);
}
SP.WorkManagement.OM.LocationOrientedSortableSession.prototype = {
    
    movePersonalTaskToLocation: function SP_WorkManagement_OM_LocationOrientedSortableSession$movePersonalTaskToLocation(taskKey, newLocationKey) {ULS0Qc:;
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'MovePersonalTaskToLocation', [ taskKey, newLocationKey ]);
        $v_0.addQuery($v_2);
        $v_1 = new SP.BooleanResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    },
    
    readTasks: function SP_WorkManagement_OM_LocationOrientedSortableSession$readTasks(query) {ULS0Qc:;
        var $v_0 = this.get_context();
        var $v_1;
        $v_1 = new SP.WorkManagement.OM.LocationGroupClientCollection($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'ReadTasks', [ query ]));
        return $v_1;
    }
}


SP.WorkManagement.OM.LocationOrientedUserOrderedSession = function SP_WorkManagement_OM_LocationOrientedUserOrderedSession(context, objectPath) {ULS0Qc:;
    SP.WorkManagement.OM.LocationOrientedUserOrderedSession.initializeBase(this, [ context, objectPath ]);
}
SP.WorkManagement.OM.LocationOrientedUserOrderedSession.prototype = {
    
    reorderTask: function SP_WorkManagement_OM_LocationOrientedUserOrderedSession$reorderTask(taskKey, newAfterTaskKey) {ULS0Qc:;
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'ReorderTask', [ taskKey, newAfterTaskKey ]);
        $v_0.addQuery($v_1);
    },
    
    movePersonalTaskToLocation: function SP_WorkManagement_OM_LocationOrientedUserOrderedSession$movePersonalTaskToLocation(taskKey, newLocationKey) {ULS0Qc:;
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'MovePersonalTaskToLocation', [ taskKey, newLocationKey ]);
        $v_0.addQuery($v_2);
        $v_1 = new SP.BooleanResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    },
    
    readTasks: function SP_WorkManagement_OM_LocationOrientedUserOrderedSession$readTasks(query) {ULS0Qc:;
        var $v_0 = this.get_context();
        var $v_1;
        $v_1 = new SP.WorkManagement.OM.LocationGroupClientCollection($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'ReadTasks', [ query ]));
        return $v_1;
    }
}


SP.WorkManagement.OM.LocationUpdateResult = function SP_WorkManagement_OM_LocationUpdateResult(context, objectPath) {ULS0Qc:;
    SP.WorkManagement.OM.LocationUpdateResult.initializeBase(this, [ context, objectPath ]);
}
SP.WorkManagement.OM.LocationUpdateResult.prototype = {
    
    get_activeAddedCount: function SP_WorkManagement_OM_LocationUpdateResult$get_activeAddedCount() {ULS0Qc:;
        this.checkUninitializedProperty('ActiveAddedCount');
        return ((this.get_objectData().get_properties()['ActiveAddedCount']));
    },
    set_activeAddedCount: function SP_WorkManagement_OM_LocationUpdateResult$set_activeAddedCount(value) {ULS0Qc:;
        this.get_objectData().get_properties()['ActiveAddedCount'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'ActiveAddedCount', value));
        }
        return value;
    },
    
    get_addedCount: function SP_WorkManagement_OM_LocationUpdateResult$get_addedCount() {ULS0Qc:;
        this.checkUninitializedProperty('AddedCount');
        return ((this.get_objectData().get_properties()['AddedCount']));
    },
    set_addedCount: function SP_WorkManagement_OM_LocationUpdateResult$set_addedCount(value) {ULS0Qc:;
        this.get_objectData().get_properties()['AddedCount'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'AddedCount', value));
        }
        return value;
    },
    
    get_removedCount: function SP_WorkManagement_OM_LocationUpdateResult$get_removedCount() {ULS0Qc:;
        this.checkUninitializedProperty('RemovedCount');
        return ((this.get_objectData().get_properties()['RemovedCount']));
    },
    set_removedCount: function SP_WorkManagement_OM_LocationUpdateResult$set_removedCount(value) {ULS0Qc:;
        this.get_objectData().get_properties()['RemovedCount'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'RemovedCount', value));
        }
        return value;
    },
    
    get_rootLocationId: function SP_WorkManagement_OM_LocationUpdateResult$get_rootLocationId() {ULS0Qc:;
        this.checkUninitializedProperty('RootLocationId');
        return ((this.get_objectData().get_properties()['RootLocationId']));
    },
    set_rootLocationId: function SP_WorkManagement_OM_LocationUpdateResult$set_rootLocationId(value) {ULS0Qc:;
        this.get_objectData().get_properties()['RootLocationId'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'RootLocationId', value));
        }
        return value;
    },
    
    get_updatedCount: function SP_WorkManagement_OM_LocationUpdateResult$get_updatedCount() {ULS0Qc:;
        this.checkUninitializedProperty('UpdatedCount');
        return ((this.get_objectData().get_properties()['UpdatedCount']));
    },
    set_updatedCount: function SP_WorkManagement_OM_LocationUpdateResult$set_updatedCount(value) {ULS0Qc:;
        this.get_objectData().get_properties()['UpdatedCount'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'UpdatedCount', value));
        }
        return value;
    },
    
    initPropertiesFromJson: function SP_WorkManagement_OM_LocationUpdateResult$initPropertiesFromJson(parentNode) {ULS0Qc:;
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.ActiveAddedCount;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ActiveAddedCount'] = ($v_0);
            delete parentNode.ActiveAddedCount;
        }
        $v_0 = parentNode.AddedCount;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['AddedCount'] = ($v_0);
            delete parentNode.AddedCount;
        }
        $v_0 = parentNode.RemovedCount;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['RemovedCount'] = ($v_0);
            delete parentNode.RemovedCount;
        }
        $v_0 = parentNode.RootLocationId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['RootLocationId'] = ($v_0);
            delete parentNode.RootLocationId;
        }
        $v_0 = parentNode.UpdatedCount;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['UpdatedCount'] = ($v_0);
            delete parentNode.UpdatedCount;
        }
    }
}


SP.WorkManagement.OM.LocationUpdateResultPropertyNames = function SP_WorkManagement_OM_LocationUpdateResultPropertyNames() {
}


SP.WorkManagement.OM.LocationUpdateResultClientCollection = function SP_WorkManagement_OM_LocationUpdateResultClientCollection(context, objectPath) {ULS0Qc:;
    SP.WorkManagement.OM.LocationUpdateResultClientCollection.initializeBase(this, [ context, objectPath ]);
}
SP.WorkManagement.OM.LocationUpdateResultClientCollection.prototype = {
    
    itemAt: function SP_WorkManagement_OM_LocationUpdateResultClientCollection$itemAt(index) {ULS0Qc:;
        return this.getItemAtIndex(index);
    },
    
    get_item: function SP_WorkManagement_OM_LocationUpdateResultClientCollection$get_item(index) {ULS0Qc:;
        return this.getItemAtIndex(index);
    },
    
    get_childItemType: function SP_WorkManagement_OM_LocationUpdateResultClientCollection$get_childItemType() {ULS0Qc:;
        return SP.WorkManagement.OM.LocationUpdateResult;
    }
}


SP.WorkManagement.OM.NameCriterion = function SP_WorkManagement_OM_NameCriterion(context) {ULS0Qc:;
    SP.WorkManagement.OM.NameCriterion.initializeBase(this, [ context, SP.ClientUtility.getOrCreateObjectPathForConstructor(context, '{1c2a7a53-2cdd-4c21-8dd6-1673656eca45}', arguments) ]);
}
SP.WorkManagement.OM.NameCriterion.newObject = function SP_WorkManagement_OM_NameCriterion$newObject(context) {ULS0Qc:;
    return new SP.WorkManagement.OM.NameCriterion(context, new SP.ObjectPathConstructor(context, '{1c2a7a53-2cdd-4c21-8dd6-1673656eca45}', null));
}
SP.WorkManagement.OM.NameCriterion.prototype = {
    
    get_compareType: function SP_WorkManagement_OM_NameCriterion$get_compareType() {ULS0Qc:;
        this.checkUninitializedProperty('CompareType');
        return ((this.get_objectData().get_properties()['CompareType']));
    },
    set_compareType: function SP_WorkManagement_OM_NameCriterion$set_compareType(value) {ULS0Qc:;
        this.get_objectData().get_properties()['CompareType'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'CompareType', value));
        }
        return value;
    },
    
    get_compareValue: function SP_WorkManagement_OM_NameCriterion$get_compareValue() {ULS0Qc:;
        this.checkUninitializedProperty('CompareValue');
        return ((this.get_objectData().get_properties()['CompareValue']));
    },
    set_compareValue: function SP_WorkManagement_OM_NameCriterion$set_compareValue(value) {ULS0Qc:;
        this.get_objectData().get_properties()['CompareValue'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'CompareValue', value));
        }
        return value;
    },
    
    initPropertiesFromJson: function SP_WorkManagement_OM_NameCriterion$initPropertiesFromJson(parentNode) {ULS0Qc:;
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.CompareType;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['CompareType'] = ((SP.DataConvert.fixupType(this.get_context(), $v_0)));
            delete parentNode.CompareType;
        }
        $v_0 = parentNode.CompareValue;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['CompareValue'] = ($v_0);
            delete parentNode.CompareValue;
        }
    }
}


SP.WorkManagement.OM.NameCriterionPropertyNames = function SP_WorkManagement_OM_NameCriterionPropertyNames() {
}


SP.WorkManagement.OM.NonTaskDataReadResult = function SP_WorkManagement_OM_NonTaskDataReadResult(context, objectPath) {ULS0Qc:;
    SP.WorkManagement.OM.NonTaskDataReadResult.initializeBase(this, [ context, objectPath ]);
}
SP.WorkManagement.OM.NonTaskDataReadResult.prototype = {
    
    get_allLocatons: function SP_WorkManagement_OM_NonTaskDataReadResult$get_allLocatons() {ULS0Qc:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['AllLocatons']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.WorkManagement.OM.LocationClientCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'AllLocatons'));
            this.get_objectData().get_clientObjectProperties()['AllLocatons'] = $v_0;
        }
        return $v_0;
    },
    
    get_persistedProperties: function SP_WorkManagement_OM_NonTaskDataReadResult$get_persistedProperties() {ULS0Qc:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['PersistedProperties']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.WorkManagement.OM.PersistedProperties(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'PersistedProperties'));
            this.get_objectData().get_clientObjectProperties()['PersistedProperties'] = $v_0;
        }
        return $v_0;
    },
    
    get_refreshHistory: function SP_WorkManagement_OM_NonTaskDataReadResult$get_refreshHistory() {ULS0Qc:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['RefreshHistory']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.WorkManagement.OM.RefreshHistory(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'RefreshHistory'));
            this.get_objectData().get_clientObjectProperties()['RefreshHistory'] = $v_0;
        }
        return $v_0;
    },
    
    get_scriptExtensions: function SP_WorkManagement_OM_NonTaskDataReadResult$get_scriptExtensions() {ULS0Qc:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['ScriptExtensions']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.WorkManagement.OM.DashboardScriptExtensionInfoClientCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'ScriptExtensions'));
            this.get_objectData().get_clientObjectProperties()['ScriptExtensions'] = $v_0;
        }
        return $v_0;
    },
    
    get_userSettings: function SP_WorkManagement_OM_NonTaskDataReadResult$get_userSettings() {ULS0Qc:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['UserSettings']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.WorkManagement.OM.UserSettings(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'UserSettings'));
            this.get_objectData().get_clientObjectProperties()['UserSettings'] = $v_0;
        }
        return $v_0;
    },
    
    initPropertiesFromJson: function SP_WorkManagement_OM_NonTaskDataReadResult$initPropertiesFromJson(parentNode) {ULS0Qc:;
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.AllLocatons;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('AllLocatons', this.get_allLocatons(), $v_0);
            this.get_allLocatons().fromJson($v_0);
            delete parentNode.AllLocatons;
        }
        $v_0 = parentNode.PersistedProperties;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('PersistedProperties', this.get_persistedProperties(), $v_0);
            this.get_persistedProperties().fromJson($v_0);
            delete parentNode.PersistedProperties;
        }
        $v_0 = parentNode.RefreshHistory;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('RefreshHistory', this.get_refreshHistory(), $v_0);
            this.get_refreshHistory().fromJson($v_0);
            delete parentNode.RefreshHistory;
        }
        $v_0 = parentNode.ScriptExtensions;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('ScriptExtensions', this.get_scriptExtensions(), $v_0);
            this.get_scriptExtensions().fromJson($v_0);
            delete parentNode.ScriptExtensions;
        }
        $v_0 = parentNode.UserSettings;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('UserSettings', this.get_userSettings(), $v_0);
            this.get_userSettings().fromJson($v_0);
            delete parentNode.UserSettings;
        }
    }
}


SP.WorkManagement.OM.NonTaskDataReadResultObjectPropertyNames = function SP_WorkManagement_OM_NonTaskDataReadResultObjectPropertyNames() {
}


SP.WorkManagement.OM.OrderInfo = function SP_WorkManagement_OM_OrderInfo(context) {ULS0Qc:;
    SP.WorkManagement.OM.OrderInfo.initializeBase(this, [ context, SP.ClientUtility.getOrCreateObjectPathForConstructor(context, '{8c385903-1e43-4256-8037-f7ff442154ec}', arguments) ]);
}
SP.WorkManagement.OM.OrderInfo.newObject = function SP_WorkManagement_OM_OrderInfo$newObject(context) {ULS0Qc:;
    return new SP.WorkManagement.OM.OrderInfo(context, new SP.ObjectPathConstructor(context, '{8c385903-1e43-4256-8037-f7ff442154ec}', null));
}
SP.WorkManagement.OM.OrderInfo.prototype = {
    
    get_field: function SP_WorkManagement_OM_OrderInfo$get_field() {ULS0Qc:;
        this.checkUninitializedProperty('Field');
        return ((this.get_objectData().get_properties()['Field']));
    },
    set_field: function SP_WorkManagement_OM_OrderInfo$set_field(value) {ULS0Qc:;
        this.get_objectData().get_properties()['Field'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Field', value));
        }
        return value;
    },
    
    get_isDescending: function SP_WorkManagement_OM_OrderInfo$get_isDescending() {ULS0Qc:;
        this.checkUninitializedProperty('IsDescending');
        return ((this.get_objectData().get_properties()['IsDescending']));
    },
    set_isDescending: function SP_WorkManagement_OM_OrderInfo$set_isDescending(value) {ULS0Qc:;
        this.get_objectData().get_properties()['IsDescending'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'IsDescending', value));
        }
        return value;
    },
    
    initPropertiesFromJson: function SP_WorkManagement_OM_OrderInfo$initPropertiesFromJson(parentNode) {ULS0Qc:;
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.Field;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Field'] = ((SP.DataConvert.fixupType(this.get_context(), $v_0)));
            delete parentNode.Field;
        }
        $v_0 = parentNode.IsDescending;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['IsDescending'] = ($v_0);
            delete parentNode.IsDescending;
        }
    }
}


SP.WorkManagement.OM.OrderInfoPropertyNames = function SP_WorkManagement_OM_OrderInfoPropertyNames() {
}


SP.WorkManagement.OM.PersistedProperties = function SP_WorkManagement_OM_PersistedProperties(context) {ULS0Qc:;
    SP.WorkManagement.OM.PersistedProperties.initializeBase(this, [ context, SP.ClientUtility.getOrCreateObjectPathForConstructor(context, '{c05ebf4c-f2c5-4167-9043-f21c4e1b682d}', arguments) ]);
}
SP.WorkManagement.OM.PersistedProperties.newObject = function SP_WorkManagement_OM_PersistedProperties$newObject(context) {ULS0Qc:;
    return new SP.WorkManagement.OM.PersistedProperties(context, new SP.ObjectPathConstructor(context, '{c05ebf4c-f2c5-4167-9043-f21c4e1b682d}', null));
}
SP.WorkManagement.OM.PersistedProperties.prototype = {
    
    get_filteredLocationIds: function SP_WorkManagement_OM_PersistedProperties$get_filteredLocationIds() {ULS0Qc:;
        this.checkUninitializedProperty('FilteredLocationIds');
        return ((this.get_objectData().get_properties()['FilteredLocationIds']));
    },
    set_filteredLocationIds: function SP_WorkManagement_OM_PersistedProperties$set_filteredLocationIds(value) {ULS0Qc:;
        this.get_objectData().get_properties()['FilteredLocationIds'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'FilteredLocationIds', value));
        }
        return value;
    },
    
    get_groupByProjects: function SP_WorkManagement_OM_PersistedProperties$get_groupByProjects() {ULS0Qc:;
        this.checkUninitializedProperty('GroupByProjects');
        return ((this.get_objectData().get_properties()['GroupByProjects']));
    },
    set_groupByProjects: function SP_WorkManagement_OM_PersistedProperties$set_groupByProjects(value) {ULS0Qc:;
        this.get_objectData().get_properties()['GroupByProjects'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'GroupByProjects', value));
        }
        return value;
    },
    
    get_hasShownMarkAsImportantCallout: function SP_WorkManagement_OM_PersistedProperties$get_hasShownMarkAsImportantCallout() {ULS0Qc:;
        this.checkUninitializedProperty('HasShownMarkAsImportantCallout');
        return ((this.get_objectData().get_properties()['HasShownMarkAsImportantCallout']));
    },
    set_hasShownMarkAsImportantCallout: function SP_WorkManagement_OM_PersistedProperties$set_hasShownMarkAsImportantCallout(value) {ULS0Qc:;
        this.get_objectData().get_properties()['HasShownMarkAsImportantCallout'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'HasShownMarkAsImportantCallout', value));
        }
        return value;
    },
    
    get_hasShownTaskListTooLongNotification: function SP_WorkManagement_OM_PersistedProperties$get_hasShownTaskListTooLongNotification() {ULS0Qc:;
        this.checkUninitializedProperty('HasShownTaskListTooLongNotification');
        return ((this.get_objectData().get_properties()['HasShownTaskListTooLongNotification']));
    },
    set_hasShownTaskListTooLongNotification: function SP_WorkManagement_OM_PersistedProperties$set_hasShownTaskListTooLongNotification(value) {ULS0Qc:;
        this.get_objectData().get_properties()['HasShownTaskListTooLongNotification'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'HasShownTaskListTooLongNotification', value));
        }
        return value;
    },
    
    get_quickLaunchLandingPage: function SP_WorkManagement_OM_PersistedProperties$get_quickLaunchLandingPage() {ULS0Qc:;
        this.checkUninitializedProperty('QuickLaunchLandingPage');
        return ((this.get_objectData().get_properties()['QuickLaunchLandingPage']));
    },
    set_quickLaunchLandingPage: function SP_WorkManagement_OM_PersistedProperties$set_quickLaunchLandingPage(value) {ULS0Qc:;
        this.get_objectData().get_properties()['QuickLaunchLandingPage'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'QuickLaunchLandingPage', value));
        }
        return value;
    },
    
    initPropertiesFromJson: function SP_WorkManagement_OM_PersistedProperties$initPropertiesFromJson(parentNode) {ULS0Qc:;
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.FilteredLocationIds;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['FilteredLocationIds'] = ((SP.DataConvert.fixupType(this.get_context(), $v_0)));
            delete parentNode.FilteredLocationIds;
        }
        $v_0 = parentNode.GroupByProjects;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['GroupByProjects'] = ($v_0);
            delete parentNode.GroupByProjects;
        }
        $v_0 = parentNode.HasShownMarkAsImportantCallout;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['HasShownMarkAsImportantCallout'] = ($v_0);
            delete parentNode.HasShownMarkAsImportantCallout;
        }
        $v_0 = parentNode.HasShownTaskListTooLongNotification;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['HasShownTaskListTooLongNotification'] = ($v_0);
            delete parentNode.HasShownTaskListTooLongNotification;
        }
        $v_0 = parentNode.QuickLaunchLandingPage;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['QuickLaunchLandingPage'] = ($v_0);
            delete parentNode.QuickLaunchLandingPage;
        }
    }
}


SP.WorkManagement.OM.PersistedPropertiesPropertyNames = function SP_WorkManagement_OM_PersistedPropertiesPropertyNames() {
}


SP.WorkManagement.OM.ProviderErrorInfo = function SP_WorkManagement_OM_ProviderErrorInfo(context, objectPath) {ULS0Qc:;
    SP.WorkManagement.OM.ProviderErrorInfo.initializeBase(this, [ context, objectPath ]);
}
SP.WorkManagement.OM.ProviderErrorInfo.prototype = {
    
    get_correlationId: function SP_WorkManagement_OM_ProviderErrorInfo$get_correlationId() {ULS0Qc:;
        this.checkUninitializedProperty('CorrelationId');
        return ((this.get_objectData().get_properties()['CorrelationId']));
    },
    set_correlationId: function SP_WorkManagement_OM_ProviderErrorInfo$set_correlationId(value) {ULS0Qc:;
        this.get_objectData().get_properties()['CorrelationId'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'CorrelationId', value));
        }
        return value;
    },
    
    get_lastSuccessfulRefresh: function SP_WorkManagement_OM_ProviderErrorInfo$get_lastSuccessfulRefresh() {ULS0Qc:;
        this.checkUninitializedProperty('LastSuccessfulRefresh');
        return ((this.get_objectData().get_properties()['LastSuccessfulRefresh']));
    },
    set_lastSuccessfulRefresh: function SP_WorkManagement_OM_ProviderErrorInfo$set_lastSuccessfulRefresh(value) {ULS0Qc:;
        this.get_objectData().get_properties()['LastSuccessfulRefresh'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'LastSuccessfulRefresh', value));
        }
        return value;
    },
    
    get_localizedName: function SP_WorkManagement_OM_ProviderErrorInfo$get_localizedName() {ULS0Qc:;
        this.checkUninitializedProperty('LocalizedName');
        return ((this.get_objectData().get_properties()['LocalizedName']));
    },
    set_localizedName: function SP_WorkManagement_OM_ProviderErrorInfo$set_localizedName(value) {ULS0Qc:;
        this.get_objectData().get_properties()['LocalizedName'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'LocalizedName', value));
        }
        return value;
    },
    
    initPropertiesFromJson: function SP_WorkManagement_OM_ProviderErrorInfo$initPropertiesFromJson(parentNode) {ULS0Qc:;
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.CorrelationId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['CorrelationId'] = ($v_0);
            delete parentNode.CorrelationId;
        }
        $v_0 = parentNode.LastSuccessfulRefresh;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['LastSuccessfulRefresh'] = ($v_0);
            delete parentNode.LastSuccessfulRefresh;
        }
        $v_0 = parentNode.LocalizedName;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['LocalizedName'] = ($v_0);
            delete parentNode.LocalizedName;
        }
    }
}


SP.WorkManagement.OM.ProviderErrorInfoPropertyNames = function SP_WorkManagement_OM_ProviderErrorInfoPropertyNames() {
}


SP.WorkManagement.OM.ProviderErrorInfoClientCollection = function SP_WorkManagement_OM_ProviderErrorInfoClientCollection(context, objectPath) {ULS0Qc:;
    SP.WorkManagement.OM.ProviderErrorInfoClientCollection.initializeBase(this, [ context, objectPath ]);
}
SP.WorkManagement.OM.ProviderErrorInfoClientCollection.prototype = {
    
    itemAt: function SP_WorkManagement_OM_ProviderErrorInfoClientCollection$itemAt(index) {ULS0Qc:;
        return this.getItemAtIndex(index);
    },
    
    get_item: function SP_WorkManagement_OM_ProviderErrorInfoClientCollection$get_item(index) {ULS0Qc:;
        return this.getItemAtIndex(index);
    },
    
    get_childItemType: function SP_WorkManagement_OM_ProviderErrorInfoClientCollection$get_childItemType() {ULS0Qc:;
        return SP.WorkManagement.OM.ProviderErrorInfo;
    }
}


SP.WorkManagement.OM.ProviderRefreshStatus = function SP_WorkManagement_OM_ProviderRefreshStatus(context, objectPath) {ULS0Qc:;
    SP.WorkManagement.OM.ProviderRefreshStatus.initializeBase(this, [ context, objectPath ]);
}
SP.WorkManagement.OM.ProviderRefreshStatus.prototype = {
    
    get_providerKey: function SP_WorkManagement_OM_ProviderRefreshStatus$get_providerKey() {ULS0Qc:;
        this.checkUninitializedProperty('ProviderKey');
        return ((this.get_objectData().get_properties()['ProviderKey']));
    },
    set_providerKey: function SP_WorkManagement_OM_ProviderRefreshStatus$set_providerKey(value) {ULS0Qc:;
        this.get_objectData().get_properties()['ProviderKey'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'ProviderKey', value));
        }
        return value;
    },
    
    get_providerLocalizedName: function SP_WorkManagement_OM_ProviderRefreshStatus$get_providerLocalizedName() {ULS0Qc:;
        this.checkUninitializedProperty('ProviderLocalizedName');
        return ((this.get_objectData().get_properties()['ProviderLocalizedName']));
    },
    set_providerLocalizedName: function SP_WorkManagement_OM_ProviderRefreshStatus$set_providerLocalizedName(value) {ULS0Qc:;
        this.get_objectData().get_properties()['ProviderLocalizedName'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'ProviderLocalizedName', value));
        }
        return value;
    },
    
    get_refreshFinished: function SP_WorkManagement_OM_ProviderRefreshStatus$get_refreshFinished() {ULS0Qc:;
        this.checkUninitializedProperty('RefreshFinished');
        return ((this.get_objectData().get_properties()['RefreshFinished']));
    },
    set_refreshFinished: function SP_WorkManagement_OM_ProviderRefreshStatus$set_refreshFinished(value) {ULS0Qc:;
        this.get_objectData().get_properties()['RefreshFinished'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'RefreshFinished', value));
        }
        return value;
    },
    
    get_refreshStarted: function SP_WorkManagement_OM_ProviderRefreshStatus$get_refreshStarted() {ULS0Qc:;
        this.checkUninitializedProperty('RefreshStarted');
        return ((this.get_objectData().get_properties()['RefreshStarted']));
    },
    set_refreshStarted: function SP_WorkManagement_OM_ProviderRefreshStatus$set_refreshStarted(value) {ULS0Qc:;
        this.get_objectData().get_properties()['RefreshStarted'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'RefreshStarted', value));
        }
        return value;
    },
    
    get_rootLocationId: function SP_WorkManagement_OM_ProviderRefreshStatus$get_rootLocationId() {ULS0Qc:;
        this.checkUninitializedProperty('RootLocationId');
        return ((this.get_objectData().get_properties()['RootLocationId']));
    },
    set_rootLocationId: function SP_WorkManagement_OM_ProviderRefreshStatus$set_rootLocationId(value) {ULS0Qc:;
        this.get_objectData().get_properties()['RootLocationId'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'RootLocationId', value));
        }
        return value;
    },
    
    initPropertiesFromJson: function SP_WorkManagement_OM_ProviderRefreshStatus$initPropertiesFromJson(parentNode) {ULS0Qc:;
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.ProviderKey;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ProviderKey'] = ($v_0);
            delete parentNode.ProviderKey;
        }
        $v_0 = parentNode.ProviderLocalizedName;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ProviderLocalizedName'] = ($v_0);
            delete parentNode.ProviderLocalizedName;
        }
        $v_0 = parentNode.RefreshFinished;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['RefreshFinished'] = ($v_0);
            delete parentNode.RefreshFinished;
        }
        $v_0 = parentNode.RefreshStarted;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['RefreshStarted'] = ($v_0);
            delete parentNode.RefreshStarted;
        }
        $v_0 = parentNode.RootLocationId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['RootLocationId'] = ($v_0);
            delete parentNode.RootLocationId;
        }
    }
}


SP.WorkManagement.OM.ProviderRefreshStatusPropertyNames = function SP_WorkManagement_OM_ProviderRefreshStatusPropertyNames() {
}


SP.WorkManagement.OM.ProviderRefreshStatusClientCollection = function SP_WorkManagement_OM_ProviderRefreshStatusClientCollection(context, objectPath) {ULS0Qc:;
    SP.WorkManagement.OM.ProviderRefreshStatusClientCollection.initializeBase(this, [ context, objectPath ]);
}
SP.WorkManagement.OM.ProviderRefreshStatusClientCollection.prototype = {
    
    itemAt: function SP_WorkManagement_OM_ProviderRefreshStatusClientCollection$itemAt(index) {ULS0Qc:;
        return this.getItemAtIndex(index);
    },
    
    get_item: function SP_WorkManagement_OM_ProviderRefreshStatusClientCollection$get_item(index) {ULS0Qc:;
        return this.getItemAtIndex(index);
    },
    
    get_childItemType: function SP_WorkManagement_OM_ProviderRefreshStatusClientCollection$get_childItemType() {ULS0Qc:;
        return SP.WorkManagement.OM.ProviderRefreshStatus;
    }
}


SP.WorkManagement.OM.RefreshEventInfoClientCollection = function SP_WorkManagement_OM_RefreshEventInfoClientCollection(context, objectPath) {ULS0Qc:;
    SP.WorkManagement.OM.RefreshEventInfoClientCollection.initializeBase(this, [ context, objectPath ]);
}
SP.WorkManagement.OM.RefreshEventInfoClientCollection.prototype = {
    
    itemAt: function SP_WorkManagement_OM_RefreshEventInfoClientCollection$itemAt(index) {ULS0Qc:;
        return this.getItemAtIndex(index);
    },
    
    get_item: function SP_WorkManagement_OM_RefreshEventInfoClientCollection$get_item(index) {ULS0Qc:;
        return this.getItemAtIndex(index);
    },
    
    get_childItemType: function SP_WorkManagement_OM_RefreshEventInfoClientCollection$get_childItemType() {ULS0Qc:;
        return SP.WorkManagement.OM.RefreshResult;
    }
}


SP.WorkManagement.OM.RefreshHealthInfo = function SP_WorkManagement_OM_RefreshHealthInfo(context, objectPath) {ULS0Qc:;
    SP.WorkManagement.OM.RefreshHealthInfo.initializeBase(this, [ context, objectPath ]);
}
SP.WorkManagement.OM.RefreshHealthInfo.prototype = {
    
    get_latestRefreshTime: function SP_WorkManagement_OM_RefreshHealthInfo$get_latestRefreshTime() {ULS0Qc:;
        this.checkUninitializedProperty('LatestRefreshTime');
        return ((this.get_objectData().get_properties()['LatestRefreshTime']));
    },
    set_latestRefreshTime: function SP_WorkManagement_OM_RefreshHealthInfo$set_latestRefreshTime(value) {ULS0Qc:;
        this.get_objectData().get_properties()['LatestRefreshTime'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'LatestRefreshTime', value));
        }
        return value;
    },
    
    get_newTasks: function SP_WorkManagement_OM_RefreshHealthInfo$get_newTasks() {ULS0Qc:;
        this.checkUninitializedProperty('NewTasks');
        return ((this.get_objectData().get_properties()['NewTasks']));
    },
    set_newTasks: function SP_WorkManagement_OM_RefreshHealthInfo$set_newTasks(value) {ULS0Qc:;
        this.get_objectData().get_properties()['NewTasks'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'NewTasks', value));
        }
        return value;
    },
    
    get_providerErrors: function SP_WorkManagement_OM_RefreshHealthInfo$get_providerErrors() {ULS0Qc:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['ProviderErrors']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.WorkManagement.OM.ProviderErrorInfoClientCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'ProviderErrors'));
            this.get_objectData().get_clientObjectProperties()['ProviderErrors'] = $v_0;
        }
        return $v_0;
    },
    set_providerErrors: function SP_WorkManagement_OM_RefreshHealthInfo$set_providerErrors(value) {ULS0Qc:;
        this.get_objectData().get_clientObjectProperties()['ProviderErrors'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'ProviderErrors', value));
        }
        return value;
    },
    
    get_succeeded: function SP_WorkManagement_OM_RefreshHealthInfo$get_succeeded() {ULS0Qc:;
        this.checkUninitializedProperty('Succeeded');
        return ((this.get_objectData().get_properties()['Succeeded']));
    },
    set_succeeded: function SP_WorkManagement_OM_RefreshHealthInfo$set_succeeded(value) {ULS0Qc:;
        this.get_objectData().get_properties()['Succeeded'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Succeeded', value));
        }
        return value;
    },
    
    initPropertiesFromJson: function SP_WorkManagement_OM_RefreshHealthInfo$initPropertiesFromJson(parentNode) {ULS0Qc:;
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.LatestRefreshTime;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['LatestRefreshTime'] = ($v_0);
            delete parentNode.LatestRefreshTime;
        }
        $v_0 = parentNode.NewTasks;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['NewTasks'] = ($v_0);
            delete parentNode.NewTasks;
        }
        $v_0 = parentNode.ProviderErrors;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('ProviderErrors', this.get_providerErrors(), $v_0);
            this.get_providerErrors().fromJson($v_0);
            delete parentNode.ProviderErrors;
        }
        $v_0 = parentNode.Succeeded;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Succeeded'] = ($v_0);
            delete parentNode.Succeeded;
        }
    }
}


SP.WorkManagement.OM.RefreshHealthInfoPropertyNames = function SP_WorkManagement_OM_RefreshHealthInfoPropertyNames() {
}


SP.WorkManagement.OM.RefreshHealthInfoObjectPropertyNames = function SP_WorkManagement_OM_RefreshHealthInfoObjectPropertyNames() {
}


SP.WorkManagement.OM.RefreshHistory = function SP_WorkManagement_OM_RefreshHistory(context, objectPath) {ULS0Qc:;
    SP.WorkManagement.OM.RefreshHistory.initializeBase(this, [ context, objectPath ]);
}
SP.WorkManagement.OM.RefreshHistory.prototype = {
    
    get_refreshes: function SP_WorkManagement_OM_RefreshHistory$get_refreshes() {ULS0Qc:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['Refreshes']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.WorkManagement.OM.RefreshEventInfoClientCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Refreshes'));
            this.get_objectData().get_clientObjectProperties()['Refreshes'] = $v_0;
        }
        return $v_0;
    },
    set_refreshes: function SP_WorkManagement_OM_RefreshHistory$set_refreshes(value) {ULS0Qc:;
        this.get_objectData().get_clientObjectProperties()['Refreshes'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Refreshes', value));
        }
        return value;
    },
    
    initPropertiesFromJson: function SP_WorkManagement_OM_RefreshHistory$initPropertiesFromJson(parentNode) {ULS0Qc:;
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.Refreshes;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('Refreshes', this.get_refreshes(), $v_0);
            this.get_refreshes().fromJson($v_0);
            delete parentNode.Refreshes;
        }
    }
}


SP.WorkManagement.OM.RefreshHistoryObjectPropertyNames = function SP_WorkManagement_OM_RefreshHistoryObjectPropertyNames() {
}


SP.WorkManagement.OM.RefreshResult = function SP_WorkManagement_OM_RefreshResult(context, objectPath) {ULS0Qc:;
    SP.WorkManagement.OM.RefreshResult.initializeBase(this, [ context, objectPath ]);
}
SP.WorkManagement.OM.RefreshResult.prototype = {
    
    get_aggregatorRefreshState: function SP_WorkManagement_OM_RefreshResult$get_aggregatorRefreshState() {ULS0Qc:;
        this.checkUninitializedProperty('AggregatorRefreshState');
        return ((this.get_objectData().get_properties()['AggregatorRefreshState']));
    },
    set_aggregatorRefreshState: function SP_WorkManagement_OM_RefreshResult$set_aggregatorRefreshState(value) {ULS0Qc:;
        this.get_objectData().get_properties()['AggregatorRefreshState'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'AggregatorRefreshState', value));
        }
        return value;
    },
    
    get_correlationId: function SP_WorkManagement_OM_RefreshResult$get_correlationId() {ULS0Qc:;
        this.checkUninitializedProperty('CorrelationId');
        return ((this.get_objectData().get_properties()['CorrelationId']));
    },
    set_correlationId: function SP_WorkManagement_OM_RefreshResult$set_correlationId(value) {ULS0Qc:;
        this.get_objectData().get_properties()['CorrelationId'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'CorrelationId', value));
        }
        return value;
    },
    
    get_providerStatuses: function SP_WorkManagement_OM_RefreshResult$get_providerStatuses() {ULS0Qc:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['ProviderStatuses']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.WorkManagement.OM.ProviderRefreshStatusClientCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'ProviderStatuses'));
            this.get_objectData().get_clientObjectProperties()['ProviderStatuses'] = $v_0;
        }
        return $v_0;
    },
    set_providerStatuses: function SP_WorkManagement_OM_RefreshResult$set_providerStatuses(value) {ULS0Qc:;
        this.get_objectData().get_clientObjectProperties()['ProviderStatuses'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'ProviderStatuses', value));
        }
        return value;
    },
    
    get_refreshFinished: function SP_WorkManagement_OM_RefreshResult$get_refreshFinished() {ULS0Qc:;
        this.checkUninitializedProperty('RefreshFinished');
        return ((this.get_objectData().get_properties()['RefreshFinished']));
    },
    set_refreshFinished: function SP_WorkManagement_OM_RefreshResult$set_refreshFinished(value) {ULS0Qc:;
        this.get_objectData().get_properties()['RefreshFinished'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'RefreshFinished', value));
        }
        return value;
    },
    
    get_refreshId: function SP_WorkManagement_OM_RefreshResult$get_refreshId() {ULS0Qc:;
        this.checkUninitializedProperty('RefreshId');
        return ((this.get_objectData().get_properties()['RefreshId']));
    },
    set_refreshId: function SP_WorkManagement_OM_RefreshResult$set_refreshId(value) {ULS0Qc:;
        this.get_objectData().get_properties()['RefreshId'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'RefreshId', value));
        }
        return value;
    },
    
    get_taskChangesByLocation: function SP_WorkManagement_OM_RefreshResult$get_taskChangesByLocation() {ULS0Qc:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['TaskChangesByLocation']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.WorkManagement.OM.LocationUpdateResultClientCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'TaskChangesByLocation'));
            this.get_objectData().get_clientObjectProperties()['TaskChangesByLocation'] = $v_0;
        }
        return $v_0;
    },
    set_taskChangesByLocation: function SP_WorkManagement_OM_RefreshResult$set_taskChangesByLocation(value) {ULS0Qc:;
        this.get_objectData().get_clientObjectProperties()['TaskChangesByLocation'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'TaskChangesByLocation', value));
        }
        return value;
    },
    
    initPropertiesFromJson: function SP_WorkManagement_OM_RefreshResult$initPropertiesFromJson(parentNode) {ULS0Qc:;
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.AggregatorRefreshState;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['AggregatorRefreshState'] = ((SP.DataConvert.fixupType(this.get_context(), $v_0)));
            delete parentNode.AggregatorRefreshState;
        }
        $v_0 = parentNode.CorrelationId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['CorrelationId'] = ($v_0);
            delete parentNode.CorrelationId;
        }
        $v_0 = parentNode.ProviderStatuses;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('ProviderStatuses', this.get_providerStatuses(), $v_0);
            this.get_providerStatuses().fromJson($v_0);
            delete parentNode.ProviderStatuses;
        }
        $v_0 = parentNode.RefreshFinished;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['RefreshFinished'] = ($v_0);
            delete parentNode.RefreshFinished;
        }
        $v_0 = parentNode.RefreshId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['RefreshId'] = ($v_0);
            delete parentNode.RefreshId;
        }
        $v_0 = parentNode.TaskChangesByLocation;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('TaskChangesByLocation', this.get_taskChangesByLocation(), $v_0);
            this.get_taskChangesByLocation().fromJson($v_0);
            delete parentNode.TaskChangesByLocation;
        }
    }
}


SP.WorkManagement.OM.RefreshResultPropertyNames = function SP_WorkManagement_OM_RefreshResultPropertyNames() {
}


SP.WorkManagement.OM.RefreshResultObjectPropertyNames = function SP_WorkManagement_OM_RefreshResultObjectPropertyNames() {
}


SP.WorkManagement.OM.SortableSession = function SP_WorkManagement_OM_SortableSession(context, objectPath) {ULS0Qc:;
    SP.WorkManagement.OM.SortableSession.initializeBase(this, [ context, objectPath ]);
}
SP.WorkManagement.OM.SortableSession.prototype = {
    
    readTasks: function SP_WorkManagement_OM_SortableSession$readTasks(query) {ULS0Qc:;
        var $v_0 = this.get_context();
        var $v_1;
        $v_1 = new SP.WorkManagement.OM.TaskClientCollection($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'ReadTasks', [ query ]));
        return $v_1;
    }
}


SP.WorkManagement.OM.SortableSessionManager = function SP_WorkManagement_OM_SortableSessionManager(context) {ULS0Qc:;
    SP.WorkManagement.OM.SortableSessionManager.initializeBase(this, [ context, SP.ClientUtility.getOrCreateObjectPathForConstructor(context, '{924b1779-998e-4c60-a291-78edebc3c202}', arguments) ]);
}
SP.WorkManagement.OM.SortableSessionManager.newObject = function SP_WorkManagement_OM_SortableSessionManager$newObject(context) {ULS0Qc:;
    return new SP.WorkManagement.OM.SortableSessionManager(context, new SP.ObjectPathConstructor(context, '{924b1779-998e-4c60-a291-78edebc3c202}', null));
}
SP.WorkManagement.OM.SortableSessionManager.prototype = {
    
    createLocationOrientedSession: function SP_WorkManagement_OM_SortableSessionManager$createLocationOrientedSession() {ULS0Qc:;
        var $v_0 = this.get_context();
        var $v_1;
        $v_1 = new SP.WorkManagement.OM.LocationOrientedSortableSession($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'CreateLocationOrientedSession', null));
        return $v_1;
    },
    
    createSession: function SP_WorkManagement_OM_SortableSessionManager$createSession() {ULS0Qc:;
        var $v_0 = this.get_context();
        var $v_1;
        $v_1 = new SP.WorkManagement.OM.SortableSession($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'CreateSession', null));
        return $v_1;
    }
}


SP.WorkManagement.OM.SortableTaskQuery = function SP_WorkManagement_OM_SortableTaskQuery(context) {ULS0Qc:;
    SP.WorkManagement.OM.SortableTaskQuery.initializeBase(this, [ context, SP.ClientUtility.getOrCreateObjectPathForConstructor(context, '{f43ab2f6-b0e1-46f7-8ff6-a96540f7f595}', arguments) ]);
}
SP.WorkManagement.OM.SortableTaskQuery.newObject = function SP_WorkManagement_OM_SortableTaskQuery$newObject(context) {ULS0Qc:;
    return new SP.WorkManagement.OM.SortableTaskQuery(context, new SP.ObjectPathConstructor(context, '{f43ab2f6-b0e1-46f7-8ff6-a96540f7f595}', null));
}
SP.WorkManagement.OM.SortableTaskQuery.prototype = {
    
    get_coreQuery: function SP_WorkManagement_OM_SortableTaskQuery$get_coreQuery() {ULS0Qc:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['CoreQuery']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.WorkManagement.OM.TaskQuery(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'CoreQuery'));
            this.get_objectData().get_clientObjectProperties()['CoreQuery'] = $v_0;
        }
        return $v_0;
    },
    set_coreQuery: function SP_WorkManagement_OM_SortableTaskQuery$set_coreQuery(value) {ULS0Qc:;
        this.get_objectData().get_clientObjectProperties()['CoreQuery'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'CoreQuery', value));
        }
        return value;
    },
    
    get_order: function SP_WorkManagement_OM_SortableTaskQuery$get_order() {ULS0Qc:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['Order']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.WorkManagement.OM.OrderInfo(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Order'));
            this.get_objectData().get_clientObjectProperties()['Order'] = $v_0;
        }
        return $v_0;
    },
    set_order: function SP_WorkManagement_OM_SortableTaskQuery$set_order(value) {ULS0Qc:;
        this.get_objectData().get_clientObjectProperties()['Order'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Order', value));
        }
        return value;
    },
    
    initPropertiesFromJson: function SP_WorkManagement_OM_SortableTaskQuery$initPropertiesFromJson(parentNode) {ULS0Qc:;
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.CoreQuery;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('CoreQuery', this.get_coreQuery(), $v_0);
            this.get_coreQuery().fromJson($v_0);
            delete parentNode.CoreQuery;
        }
        $v_0 = parentNode.Order;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('Order', this.get_order(), $v_0);
            this.get_order().fromJson($v_0);
            delete parentNode.Order;
        }
    }
}


SP.WorkManagement.OM.SortableTaskQueryObjectPropertyNames = function SP_WorkManagement_OM_SortableTaskQueryObjectPropertyNames() {
}


SP.WorkManagement.OM.Task = function SP_WorkManagement_OM_Task(context) {ULS0Qc:;
    SP.WorkManagement.OM.Task.initializeBase(this, [ context, SP.ClientUtility.getOrCreateObjectPathForConstructor(context, '{af0507b6-ef4f-4029-a48a-943afe14aea6}', arguments) ]);
}
SP.WorkManagement.OM.Task.newObject = function SP_WorkManagement_OM_Task$newObject(context) {ULS0Qc:;
    return new SP.WorkManagement.OM.Task(context, new SP.ObjectPathConstructor(context, '{af0507b6-ef4f-4029-a48a-943afe14aea6}', null));
}
SP.WorkManagement.OM.Task.prototype = {
    
    get_customAttributes: function SP_WorkManagement_OM_Task$get_customAttributes() {ULS0Qc:;
        this.checkUninitializedProperty('CustomAttributes');
        return ((this.get_objectData().get_properties()['CustomAttributes']));
    },
    set_customAttributes: function SP_WorkManagement_OM_Task$set_customAttributes(value) {ULS0Qc:;
        this.get_objectData().get_properties()['CustomAttributes'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'CustomAttributes', value));
        }
        return value;
    },
    
    get_description: function SP_WorkManagement_OM_Task$get_description() {ULS0Qc:;
        this.checkUninitializedProperty('Description');
        return ((this.get_objectData().get_properties()['Description']));
    },
    set_description: function SP_WorkManagement_OM_Task$set_description(value) {ULS0Qc:;
        this.get_objectData().get_properties()['Description'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Description', value));
        }
        return value;
    },
    
    get_dueDate: function SP_WorkManagement_OM_Task$get_dueDate() {ULS0Qc:;
        this.checkUninitializedProperty('DueDate');
        return ((this.get_objectData().get_properties()['DueDate']));
    },
    set_dueDate: function SP_WorkManagement_OM_Task$set_dueDate(value) {ULS0Qc:;
        this.get_objectData().get_properties()['DueDate'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'DueDate', value));
        }
        return value;
    },
    
    get_editUrl: function SP_WorkManagement_OM_Task$get_editUrl() {ULS0Qc:;
        this.checkUninitializedProperty('EditUrl');
        return ((this.get_objectData().get_properties()['EditUrl']));
    },
    set_editUrl: function SP_WorkManagement_OM_Task$set_editUrl(value) {ULS0Qc:;
        this.get_objectData().get_properties()['EditUrl'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'EditUrl', value));
        }
        return value;
    },
    
    get_id: function SP_WorkManagement_OM_Task$get_id() {ULS0Qc:;
        this.checkUninitializedProperty('Id');
        return ((this.get_objectData().get_properties()['Id']));
    },
    set_id: function SP_WorkManagement_OM_Task$set_id(value) {ULS0Qc:;
        this.get_objectData().get_properties()['Id'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Id', value));
        }
        return value;
    },
    
    get_isCompleted: function SP_WorkManagement_OM_Task$get_isCompleted() {ULS0Qc:;
        this.checkUninitializedProperty('IsCompleted');
        return ((this.get_objectData().get_properties()['IsCompleted']));
    },
    set_isCompleted: function SP_WorkManagement_OM_Task$set_isCompleted(value) {ULS0Qc:;
        this.get_objectData().get_properties()['IsCompleted'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'IsCompleted', value));
        }
        return value;
    },
    
    get_isPersonal: function SP_WorkManagement_OM_Task$get_isPersonal() {ULS0Qc:;
        this.checkUninitializedProperty('IsPersonal');
        return ((this.get_objectData().get_properties()['IsPersonal']));
    },
    set_isPersonal: function SP_WorkManagement_OM_Task$set_isPersonal(value) {ULS0Qc:;
        this.get_objectData().get_properties()['IsPersonal'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'IsPersonal', value));
        }
        return value;
    },
    
    get_isReadOnly: function SP_WorkManagement_OM_Task$get_isReadOnly() {ULS0Qc:;
        this.checkUninitializedProperty('IsReadOnly');
        return ((this.get_objectData().get_properties()['IsReadOnly']));
    },
    set_isReadOnly: function SP_WorkManagement_OM_Task$set_isReadOnly(value) {ULS0Qc:;
        this.get_objectData().get_properties()['IsReadOnly'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'IsReadOnly', value));
        }
        return value;
    },
    
    get_lastModified: function SP_WorkManagement_OM_Task$get_lastModified() {ULS0Qc:;
        this.checkUninitializedProperty('LastModified');
        return ((this.get_objectData().get_properties()['LastModified']));
    },
    set_lastModified: function SP_WorkManagement_OM_Task$set_lastModified(value) {ULS0Qc:;
        this.get_objectData().get_properties()['LastModified'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'LastModified', value));
        }
        return value;
    },
    
    get_locationId: function SP_WorkManagement_OM_Task$get_locationId() {ULS0Qc:;
        this.checkUninitializedProperty('LocationId');
        return ((this.get_objectData().get_properties()['LocationId']));
    },
    set_locationId: function SP_WorkManagement_OM_Task$set_locationId(value) {ULS0Qc:;
        this.get_objectData().get_properties()['LocationId'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'LocationId', value));
        }
        return value;
    },
    
    get_name: function SP_WorkManagement_OM_Task$get_name() {ULS0Qc:;
        this.checkUninitializedProperty('Name');
        return ((this.get_objectData().get_properties()['Name']));
    },
    set_name: function SP_WorkManagement_OM_Task$set_name(value) {ULS0Qc:;
        this.get_objectData().get_properties()['Name'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Name', value));
        }
        return value;
    },
    
    get_pinAge: function SP_WorkManagement_OM_Task$get_pinAge() {ULS0Qc:;
        this.checkUninitializedProperty('PinAge');
        return ((this.get_objectData().get_properties()['PinAge']));
    },
    set_pinAge: function SP_WorkManagement_OM_Task$set_pinAge(value) {ULS0Qc:;
        this.get_objectData().get_properties()['PinAge'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'PinAge', value));
        }
        return value;
    },
    
    get_serializedCustomDataForClient: function SP_WorkManagement_OM_Task$get_serializedCustomDataForClient() {ULS0Qc:;
        this.checkUninitializedProperty('SerializedCustomDataForClient');
        return ((this.get_objectData().get_properties()['SerializedCustomDataForClient']));
    },
    set_serializedCustomDataForClient: function SP_WorkManagement_OM_Task$set_serializedCustomDataForClient(value) {ULS0Qc:;
        this.get_objectData().get_properties()['SerializedCustomDataForClient'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'SerializedCustomDataForClient', value));
        }
        return value;
    },
    
    get_startDate: function SP_WorkManagement_OM_Task$get_startDate() {ULS0Qc:;
        this.checkUninitializedProperty('StartDate');
        return ((this.get_objectData().get_properties()['StartDate']));
    },
    set_startDate: function SP_WorkManagement_OM_Task$set_startDate(value) {ULS0Qc:;
        this.get_objectData().get_properties()['StartDate'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'StartDate', value));
        }
        return value;
    },
    
    initPropertiesFromJson: function SP_WorkManagement_OM_Task$initPropertiesFromJson(parentNode) {ULS0Qc:;
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.CustomAttributes;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['CustomAttributes'] = ((SP.DataConvert.fixupType(this.get_context(), $v_0)));
            delete parentNode.CustomAttributes;
        }
        $v_0 = parentNode.Description;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Description'] = ($v_0);
            delete parentNode.Description;
        }
        $v_0 = parentNode.DueDate;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['DueDate'] = ($v_0);
            delete parentNode.DueDate;
        }
        $v_0 = parentNode.EditUrl;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['EditUrl'] = ($v_0);
            delete parentNode.EditUrl;
        }
        $v_0 = parentNode.Id;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Id'] = ($v_0);
            delete parentNode.Id;
        }
        $v_0 = parentNode.IsCompleted;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['IsCompleted'] = ($v_0);
            delete parentNode.IsCompleted;
        }
        $v_0 = parentNode.IsPersonal;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['IsPersonal'] = ($v_0);
            delete parentNode.IsPersonal;
        }
        $v_0 = parentNode.IsReadOnly;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['IsReadOnly'] = ($v_0);
            delete parentNode.IsReadOnly;
        }
        $v_0 = parentNode.LastModified;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['LastModified'] = ($v_0);
            delete parentNode.LastModified;
        }
        $v_0 = parentNode.LocationId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['LocationId'] = ($v_0);
            delete parentNode.LocationId;
        }
        $v_0 = parentNode.Name;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Name'] = ($v_0);
            delete parentNode.Name;
        }
        $v_0 = parentNode.PinAge;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['PinAge'] = ((SP.DataConvert.fixupType(this.get_context(), $v_0)));
            delete parentNode.PinAge;
        }
        $v_0 = parentNode.SerializedCustomDataForClient;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['SerializedCustomDataForClient'] = ($v_0);
            delete parentNode.SerializedCustomDataForClient;
        }
        $v_0 = parentNode.StartDate;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['StartDate'] = ($v_0);
            delete parentNode.StartDate;
        }
    }
}


SP.WorkManagement.OM.TaskPropertyNames = function SP_WorkManagement_OM_TaskPropertyNames() {
}


SP.WorkManagement.OM.TaskClientCollection = function SP_WorkManagement_OM_TaskClientCollection(context) {ULS0Qc:;
    SP.WorkManagement.OM.TaskClientCollection.initializeBase(this, [ context, SP.ClientUtility.getOrCreateObjectPathForConstructor(context, '{1a855a95-ee52-4a94-b0ab-7020dda6972a}', arguments) ]);
}
SP.WorkManagement.OM.TaskClientCollection.newObject = function SP_WorkManagement_OM_TaskClientCollection$newObject(context) {ULS0Qc:;
    return new SP.WorkManagement.OM.TaskClientCollection(context, new SP.ObjectPathConstructor(context, '{1a855a95-ee52-4a94-b0ab-7020dda6972a}', null));
}
SP.WorkManagement.OM.TaskClientCollection.prototype = {
    
    itemAt: function SP_WorkManagement_OM_TaskClientCollection$itemAt(index) {ULS0Qc:;
        return this.getItemAtIndex(index);
    },
    
    get_item: function SP_WorkManagement_OM_TaskClientCollection$get_item(index) {ULS0Qc:;
        return this.getItemAtIndex(index);
    },
    
    get_childItemType: function SP_WorkManagement_OM_TaskClientCollection$get_childItemType() {ULS0Qc:;
        return SP.WorkManagement.OM.Task;
    }
}


SP.WorkManagement.OM.TaskFilter = function SP_WorkManagement_OM_TaskFilter(context) {ULS0Qc:;
    SP.WorkManagement.OM.TaskFilter.initializeBase(this, [ context, SP.ClientUtility.getOrCreateObjectPathForConstructor(context, '{3188516d-d569-40f8-8c01-1d48fbf5243c}', arguments) ]);
}
SP.WorkManagement.OM.TaskFilter.newObject = function SP_WorkManagement_OM_TaskFilter$newObject(context) {ULS0Qc:;
    return new SP.WorkManagement.OM.TaskFilter(context, new SP.ObjectPathConstructor(context, '{3188516d-d569-40f8-8c01-1d48fbf5243c}', null));
}
SP.WorkManagement.OM.TaskFilter.prototype = {
    
    get_completedCriterion: function SP_WorkManagement_OM_TaskFilter$get_completedCriterion() {ULS0Qc:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['CompletedCriterion']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.WorkManagement.OM.BooleanCriterion(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'CompletedCriterion'));
            this.get_objectData().get_clientObjectProperties()['CompletedCriterion'] = $v_0;
        }
        return $v_0;
    },
    set_completedCriterion: function SP_WorkManagement_OM_TaskFilter$set_completedCriterion(value) {ULS0Qc:;
        this.get_objectData().get_clientObjectProperties()['CompletedCriterion'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'CompletedCriterion', value));
        }
        return value;
    },
    
    get_criterionConcatType: function SP_WorkManagement_OM_TaskFilter$get_criterionConcatType() {ULS0Qc:;
        this.checkUninitializedProperty('CriterionConcatType');
        return ((this.get_objectData().get_properties()['CriterionConcatType']));
    },
    set_criterionConcatType: function SP_WorkManagement_OM_TaskFilter$set_criterionConcatType(value) {ULS0Qc:;
        this.get_objectData().get_properties()['CriterionConcatType'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'CriterionConcatType', value));
        }
        return value;
    },
    
    get_dueDateRangeCriterion: function SP_WorkManagement_OM_TaskFilter$get_dueDateRangeCriterion() {ULS0Qc:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['DueDateRangeCriterion']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.WorkManagement.OM.DateRangeCriterion(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'DueDateRangeCriterion'));
            this.get_objectData().get_clientObjectProperties()['DueDateRangeCriterion'] = $v_0;
        }
        return $v_0;
    },
    set_dueDateRangeCriterion: function SP_WorkManagement_OM_TaskFilter$set_dueDateRangeCriterion(value) {ULS0Qc:;
        this.get_objectData().get_clientObjectProperties()['DueDateRangeCriterion'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'DueDateRangeCriterion', value));
        }
        return value;
    },
    
    get_idsToFilterBy: function SP_WorkManagement_OM_TaskFilter$get_idsToFilterBy() {ULS0Qc:;
        this.checkUninitializedProperty('IdsToFilterBy');
        return ((this.get_objectData().get_properties()['IdsToFilterBy']));
    },
    set_idsToFilterBy: function SP_WorkManagement_OM_TaskFilter$set_idsToFilterBy(value) {ULS0Qc:;
        this.get_objectData().get_properties()['IdsToFilterBy'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'IdsToFilterBy', value));
        }
        return value;
    },
    
    get_isNewCriterion: function SP_WorkManagement_OM_TaskFilter$get_isNewCriterion() {ULS0Qc:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['IsNewCriterion']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.WorkManagement.OM.BooleanCriterion(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'IsNewCriterion'));
            this.get_objectData().get_clientObjectProperties()['IsNewCriterion'] = $v_0;
        }
        return $v_0;
    },
    set_isNewCriterion: function SP_WorkManagement_OM_TaskFilter$set_isNewCriterion(value) {ULS0Qc:;
        this.get_objectData().get_clientObjectProperties()['IsNewCriterion'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'IsNewCriterion', value));
        }
        return value;
    },
    
    get_nameCriterion: function SP_WorkManagement_OM_TaskFilter$get_nameCriterion() {ULS0Qc:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['NameCriterion']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.WorkManagement.OM.NameCriterion(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'NameCriterion'));
            this.get_objectData().get_clientObjectProperties()['NameCriterion'] = $v_0;
        }
        return $v_0;
    },
    set_nameCriterion: function SP_WorkManagement_OM_TaskFilter$set_nameCriterion(value) {ULS0Qc:;
        this.get_objectData().get_clientObjectProperties()['NameCriterion'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'NameCriterion', value));
        }
        return value;
    },
    
    get_startDateRangeCriterion: function SP_WorkManagement_OM_TaskFilter$get_startDateRangeCriterion() {ULS0Qc:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['StartDateRangeCriterion']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.WorkManagement.OM.DateRangeCriterion(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'StartDateRangeCriterion'));
            this.get_objectData().get_clientObjectProperties()['StartDateRangeCriterion'] = $v_0;
        }
        return $v_0;
    },
    set_startDateRangeCriterion: function SP_WorkManagement_OM_TaskFilter$set_startDateRangeCriterion(value) {ULS0Qc:;
        this.get_objectData().get_clientObjectProperties()['StartDateRangeCriterion'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'StartDateRangeCriterion', value));
        }
        return value;
    },
    
    initPropertiesFromJson: function SP_WorkManagement_OM_TaskFilter$initPropertiesFromJson(parentNode) {ULS0Qc:;
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.CompletedCriterion;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('CompletedCriterion', this.get_completedCriterion(), $v_0);
            this.get_completedCriterion().fromJson($v_0);
            delete parentNode.CompletedCriterion;
        }
        $v_0 = parentNode.CriterionConcatType;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['CriterionConcatType'] = ((SP.DataConvert.fixupType(this.get_context(), $v_0)));
            delete parentNode.CriterionConcatType;
        }
        $v_0 = parentNode.DueDateRangeCriterion;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('DueDateRangeCriterion', this.get_dueDateRangeCriterion(), $v_0);
            this.get_dueDateRangeCriterion().fromJson($v_0);
            delete parentNode.DueDateRangeCriterion;
        }
        $v_0 = parentNode.IdsToFilterBy;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['IdsToFilterBy'] = ((SP.DataConvert.fixupType(this.get_context(), $v_0)));
            delete parentNode.IdsToFilterBy;
        }
        $v_0 = parentNode.IsNewCriterion;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('IsNewCriterion', this.get_isNewCriterion(), $v_0);
            this.get_isNewCriterion().fromJson($v_0);
            delete parentNode.IsNewCriterion;
        }
        $v_0 = parentNode.NameCriterion;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('NameCriterion', this.get_nameCriterion(), $v_0);
            this.get_nameCriterion().fromJson($v_0);
            delete parentNode.NameCriterion;
        }
        $v_0 = parentNode.StartDateRangeCriterion;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('StartDateRangeCriterion', this.get_startDateRangeCriterion(), $v_0);
            this.get_startDateRangeCriterion().fromJson($v_0);
            delete parentNode.StartDateRangeCriterion;
        }
    }
}


SP.WorkManagement.OM.TaskFilterPropertyNames = function SP_WorkManagement_OM_TaskFilterPropertyNames() {
}


SP.WorkManagement.OM.TaskFilterObjectPropertyNames = function SP_WorkManagement_OM_TaskFilterObjectPropertyNames() {
}


SP.WorkManagement.OM.TaskQuery = function SP_WorkManagement_OM_TaskQuery(context) {ULS0Qc:;
    SP.WorkManagement.OM.TaskQuery.initializeBase(this, [ context, SP.ClientUtility.getOrCreateObjectPathForConstructor(context, '{70c9591d-9a78-404a-9fe8-b50b1e02cd93}', arguments) ]);
}
SP.WorkManagement.OM.TaskQuery.newObject = function SP_WorkManagement_OM_TaskQuery$newObject(context) {ULS0Qc:;
    return new SP.WorkManagement.OM.TaskQuery(context, new SP.ObjectPathConstructor(context, '{70c9591d-9a78-404a-9fe8-b50b1e02cd93}', null));
}
SP.WorkManagement.OM.TaskQuery.prototype = {
    
    get_customAttributeFilter: function SP_WorkManagement_OM_TaskQuery$get_customAttributeFilter() {ULS0Qc:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['CustomAttributeFilter']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.WorkManagement.OM.CustomAttributeFilter(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'CustomAttributeFilter'));
            this.get_objectData().get_clientObjectProperties()['CustomAttributeFilter'] = $v_0;
        }
        return $v_0;
    },
    set_customAttributeFilter: function SP_WorkManagement_OM_TaskQuery$set_customAttributeFilter(value) {ULS0Qc:;
        this.get_objectData().get_clientObjectProperties()['CustomAttributeFilter'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'CustomAttributeFilter', value));
        }
        return value;
    },
    
    get_fieldFilter: function SP_WorkManagement_OM_TaskQuery$get_fieldFilter() {ULS0Qc:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['FieldFilter']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.WorkManagement.OM.TaskFilter(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'FieldFilter'));
            this.get_objectData().get_clientObjectProperties()['FieldFilter'] = $v_0;
        }
        return $v_0;
    },
    set_fieldFilter: function SP_WorkManagement_OM_TaskQuery$set_fieldFilter(value) {ULS0Qc:;
        this.get_objectData().get_clientObjectProperties()['FieldFilter'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'FieldFilter', value));
        }
        return value;
    },
    
    get_keywordFilter: function SP_WorkManagement_OM_TaskQuery$get_keywordFilter() {ULS0Qc:;
        this.checkUninitializedProperty('KeywordFilter');
        return ((this.get_objectData().get_properties()['KeywordFilter']));
    },
    set_keywordFilter: function SP_WorkManagement_OM_TaskQuery$set_keywordFilter(value) {ULS0Qc:;
        this.get_objectData().get_properties()['KeywordFilter'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'KeywordFilter', value));
        }
        return value;
    },
    
    get_lastModifiedDateRangeFilter: function SP_WorkManagement_OM_TaskQuery$get_lastModifiedDateRangeFilter() {ULS0Qc:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['LastModifiedDateRangeFilter']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.WorkManagement.OM.DateRangeCriterion(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'LastModifiedDateRangeFilter'));
            this.get_objectData().get_clientObjectProperties()['LastModifiedDateRangeFilter'] = $v_0;
        }
        return $v_0;
    },
    set_lastModifiedDateRangeFilter: function SP_WorkManagement_OM_TaskQuery$set_lastModifiedDateRangeFilter(value) {ULS0Qc:;
        this.get_objectData().get_clientObjectProperties()['LastModifiedDateRangeFilter'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'LastModifiedDateRangeFilter', value));
        }
        return value;
    },
    
    get_lastQueryTime: function SP_WorkManagement_OM_TaskQuery$get_lastQueryTime() {ULS0Qc:;
        this.checkUninitializedProperty('LastQueryTime');
        return ((this.get_objectData().get_properties()['LastQueryTime']));
    },
    set_lastQueryTime: function SP_WorkManagement_OM_TaskQuery$set_lastQueryTime(value) {ULS0Qc:;
        this.get_objectData().get_properties()['LastQueryTime'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'LastQueryTime', value));
        }
        return value;
    },
    
    get_locationFilter: function SP_WorkManagement_OM_TaskQuery$get_locationFilter() {ULS0Qc:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['LocationFilter']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.WorkManagement.OM.LocationFilter(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'LocationFilter'));
            this.get_objectData().get_clientObjectProperties()['LocationFilter'] = $v_0;
        }
        return $v_0;
    },
    set_locationFilter: function SP_WorkManagement_OM_TaskQuery$set_locationFilter(value) {ULS0Qc:;
        this.get_objectData().get_clientObjectProperties()['LocationFilter'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'LocationFilter', value));
        }
        return value;
    },
    
    get_pinnedFilter: function SP_WorkManagement_OM_TaskQuery$get_pinnedFilter() {ULS0Qc:;
        this.checkUninitializedProperty('PinnedFilter');
        return ((this.get_objectData().get_properties()['PinnedFilter']));
    },
    set_pinnedFilter: function SP_WorkManagement_OM_TaskQuery$set_pinnedFilter(value) {ULS0Qc:;
        this.get_objectData().get_properties()['PinnedFilter'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'PinnedFilter', value));
        }
        return value;
    },
    
    initPropertiesFromJson: function SP_WorkManagement_OM_TaskQuery$initPropertiesFromJson(parentNode) {ULS0Qc:;
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.CustomAttributeFilter;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('CustomAttributeFilter', this.get_customAttributeFilter(), $v_0);
            this.get_customAttributeFilter().fromJson($v_0);
            delete parentNode.CustomAttributeFilter;
        }
        $v_0 = parentNode.FieldFilter;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('FieldFilter', this.get_fieldFilter(), $v_0);
            this.get_fieldFilter().fromJson($v_0);
            delete parentNode.FieldFilter;
        }
        $v_0 = parentNode.KeywordFilter;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['KeywordFilter'] = ($v_0);
            delete parentNode.KeywordFilter;
        }
        $v_0 = parentNode.LastModifiedDateRangeFilter;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('LastModifiedDateRangeFilter', this.get_lastModifiedDateRangeFilter(), $v_0);
            this.get_lastModifiedDateRangeFilter().fromJson($v_0);
            delete parentNode.LastModifiedDateRangeFilter;
        }
        $v_0 = parentNode.LastQueryTime;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['LastQueryTime'] = ($v_0);
            delete parentNode.LastQueryTime;
        }
        $v_0 = parentNode.LocationFilter;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('LocationFilter', this.get_locationFilter(), $v_0);
            this.get_locationFilter().fromJson($v_0);
            delete parentNode.LocationFilter;
        }
        $v_0 = parentNode.PinnedFilter;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['PinnedFilter'] = ((SP.DataConvert.fixupType(this.get_context(), $v_0)));
            delete parentNode.PinnedFilter;
        }
    }
}


SP.WorkManagement.OM.TaskQueryPropertyNames = function SP_WorkManagement_OM_TaskQueryPropertyNames() {
}


SP.WorkManagement.OM.TaskQueryObjectPropertyNames = function SP_WorkManagement_OM_TaskQueryObjectPropertyNames() {
}


SP.WorkManagement.OM.TaskQueryByLocationResult = function SP_WorkManagement_OM_TaskQueryByLocationResult(context, objectPath) {ULS0Qc:;
    SP.WorkManagement.OM.TaskQueryByLocationResult.initializeBase(this, [ context, objectPath ]);
}
SP.WorkManagement.OM.TaskQueryByLocationResult.prototype = {
    
    get_error: function SP_WorkManagement_OM_TaskQueryByLocationResult$get_error() {ULS0Qc:;
        this.checkUninitializedProperty('Error');
        return ((this.get_objectData().get_properties()['Error']));
    },
    set_error: function SP_WorkManagement_OM_TaskQueryByLocationResult$set_error(value) {ULS0Qc:;
        this.get_objectData().get_properties()['Error'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Error', value));
        }
        return value;
    },
    
    get_errorMessage: function SP_WorkManagement_OM_TaskQueryByLocationResult$get_errorMessage() {ULS0Qc:;
        this.checkUninitializedProperty('ErrorMessage');
        return ((this.get_objectData().get_properties()['ErrorMessage']));
    },
    set_errorMessage: function SP_WorkManagement_OM_TaskQueryByLocationResult$set_errorMessage(value) {ULS0Qc:;
        this.get_objectData().get_properties()['ErrorMessage'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'ErrorMessage', value));
        }
        return value;
    },
    
    get_results: function SP_WorkManagement_OM_TaskQueryByLocationResult$get_results() {ULS0Qc:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['Results']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.WorkManagement.OM.LocationGroupClientCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Results'));
            this.get_objectData().get_clientObjectProperties()['Results'] = $v_0;
        }
        return $v_0;
    },
    set_results: function SP_WorkManagement_OM_TaskQueryByLocationResult$set_results(value) {ULS0Qc:;
        this.get_objectData().get_clientObjectProperties()['Results'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Results', value));
        }
        return value;
    },
    
    initPropertiesFromJson: function SP_WorkManagement_OM_TaskQueryByLocationResult$initPropertiesFromJson(parentNode) {ULS0Qc:;
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.Error;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Error'] = ((SP.DataConvert.fixupType(this.get_context(), $v_0)));
            delete parentNode.Error;
        }
        $v_0 = parentNode.ErrorMessage;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ErrorMessage'] = ($v_0);
            delete parentNode.ErrorMessage;
        }
        $v_0 = parentNode.Results;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('Results', this.get_results(), $v_0);
            this.get_results().fromJson($v_0);
            delete parentNode.Results;
        }
    }
}


SP.WorkManagement.OM.TaskQueryByLocationResultPropertyNames = function SP_WorkManagement_OM_TaskQueryByLocationResultPropertyNames() {
}


SP.WorkManagement.OM.TaskQueryByLocationResultObjectPropertyNames = function SP_WorkManagement_OM_TaskQueryByLocationResultObjectPropertyNames() {
}


SP.WorkManagement.OM.TaskQueryResult = function SP_WorkManagement_OM_TaskQueryResult(context, objectPath) {ULS0Qc:;
    SP.WorkManagement.OM.TaskQueryResult.initializeBase(this, [ context, objectPath ]);
}
SP.WorkManagement.OM.TaskQueryResult.prototype = {
    
    get_error: function SP_WorkManagement_OM_TaskQueryResult$get_error() {ULS0Qc:;
        this.checkUninitializedProperty('Error');
        return ((this.get_objectData().get_properties()['Error']));
    },
    set_error: function SP_WorkManagement_OM_TaskQueryResult$set_error(value) {ULS0Qc:;
        this.get_objectData().get_properties()['Error'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Error', value));
        }
        return value;
    },
    
    get_errorMessage: function SP_WorkManagement_OM_TaskQueryResult$get_errorMessage() {ULS0Qc:;
        this.checkUninitializedProperty('ErrorMessage');
        return ((this.get_objectData().get_properties()['ErrorMessage']));
    },
    set_errorMessage: function SP_WorkManagement_OM_TaskQueryResult$set_errorMessage(value) {ULS0Qc:;
        this.get_objectData().get_properties()['ErrorMessage'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'ErrorMessage', value));
        }
        return value;
    },
    
    get_results: function SP_WorkManagement_OM_TaskQueryResult$get_results() {ULS0Qc:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['Results']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.WorkManagement.OM.TaskClientCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Results'));
            this.get_objectData().get_clientObjectProperties()['Results'] = $v_0;
        }
        return $v_0;
    },
    set_results: function SP_WorkManagement_OM_TaskQueryResult$set_results(value) {ULS0Qc:;
        this.get_objectData().get_clientObjectProperties()['Results'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Results', value));
        }
        return value;
    },
    
    initPropertiesFromJson: function SP_WorkManagement_OM_TaskQueryResult$initPropertiesFromJson(parentNode) {ULS0Qc:;
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.Error;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Error'] = ((SP.DataConvert.fixupType(this.get_context(), $v_0)));
            delete parentNode.Error;
        }
        $v_0 = parentNode.ErrorMessage;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ErrorMessage'] = ($v_0);
            delete parentNode.ErrorMessage;
        }
        $v_0 = parentNode.Results;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('Results', this.get_results(), $v_0);
            this.get_results().fromJson($v_0);
            delete parentNode.Results;
        }
    }
}


SP.WorkManagement.OM.TaskQueryResultPropertyNames = function SP_WorkManagement_OM_TaskQueryResultPropertyNames() {
}


SP.WorkManagement.OM.TaskQueryResultObjectPropertyNames = function SP_WorkManagement_OM_TaskQueryResultObjectPropertyNames() {
}


SP.WorkManagement.OM.TaskRefreshResult = function SP_WorkManagement_OM_TaskRefreshResult(context, objectPath) {ULS0Qc:;
    SP.WorkManagement.OM.TaskRefreshResult.initializeBase(this, [ context, objectPath ]);
}
SP.WorkManagement.OM.TaskRefreshResult.prototype = {
    
    get_errorCorrelationId: function SP_WorkManagement_OM_TaskRefreshResult$get_errorCorrelationId() {ULS0Qc:;
        this.checkUninitializedProperty('ErrorCorrelationId');
        return ((this.get_objectData().get_properties()['ErrorCorrelationId']));
    },
    set_errorCorrelationId: function SP_WorkManagement_OM_TaskRefreshResult$set_errorCorrelationId(value) {ULS0Qc:;
        this.get_objectData().get_properties()['ErrorCorrelationId'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'ErrorCorrelationId', value));
        }
        return value;
    },
    
    get_refreshState: function SP_WorkManagement_OM_TaskRefreshResult$get_refreshState() {ULS0Qc:;
        this.checkUninitializedProperty('RefreshState');
        return ((this.get_objectData().get_properties()['RefreshState']));
    },
    set_refreshState: function SP_WorkManagement_OM_TaskRefreshResult$set_refreshState(value) {ULS0Qc:;
        this.get_objectData().get_properties()['RefreshState'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'RefreshState', value));
        }
        return value;
    },
    
    get_result: function SP_WorkManagement_OM_TaskRefreshResult$get_result() {ULS0Qc:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['Result']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.WorkManagement.OM.Task(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Result'));
            this.get_objectData().get_clientObjectProperties()['Result'] = $v_0;
        }
        return $v_0;
    },
    set_result: function SP_WorkManagement_OM_TaskRefreshResult$set_result(value) {ULS0Qc:;
        this.get_objectData().get_clientObjectProperties()['Result'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Result', value));
        }
        return value;
    },
    
    initPropertiesFromJson: function SP_WorkManagement_OM_TaskRefreshResult$initPropertiesFromJson(parentNode) {ULS0Qc:;
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.ErrorCorrelationId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ErrorCorrelationId'] = ($v_0);
            delete parentNode.ErrorCorrelationId;
        }
        $v_0 = parentNode.RefreshState;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['RefreshState'] = ((SP.DataConvert.fixupType(this.get_context(), $v_0)));
            delete parentNode.RefreshState;
        }
        $v_0 = parentNode.Result;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('Result', this.get_result(), $v_0);
            this.get_result().fromJson($v_0);
            delete parentNode.Result;
        }
    }
}


SP.WorkManagement.OM.TaskRefreshResultPropertyNames = function SP_WorkManagement_OM_TaskRefreshResultPropertyNames() {
}


SP.WorkManagement.OM.TaskRefreshResultObjectPropertyNames = function SP_WorkManagement_OM_TaskRefreshResultObjectPropertyNames() {
}


SP.WorkManagement.OM.TaskWriteResult = function SP_WorkManagement_OM_TaskWriteResult(context, objectPath) {ULS0Qc:;
    SP.WorkManagement.OM.TaskWriteResult.initializeBase(this, [ context, objectPath ]);
}
SP.WorkManagement.OM.TaskWriteResult.prototype = {
    
    get_error: function SP_WorkManagement_OM_TaskWriteResult$get_error() {ULS0Qc:;
        this.checkUninitializedProperty('Error');
        return ((this.get_objectData().get_properties()['Error']));
    },
    set_error: function SP_WorkManagement_OM_TaskWriteResult$set_error(value) {ULS0Qc:;
        this.get_objectData().get_properties()['Error'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Error', value));
        }
        return value;
    },
    
    get_errorMessage: function SP_WorkManagement_OM_TaskWriteResult$get_errorMessage() {ULS0Qc:;
        this.checkUninitializedProperty('ErrorMessage');
        return ((this.get_objectData().get_properties()['ErrorMessage']));
    },
    set_errorMessage: function SP_WorkManagement_OM_TaskWriteResult$set_errorMessage(value) {ULS0Qc:;
        this.get_objectData().get_properties()['ErrorMessage'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'ErrorMessage', value));
        }
        return value;
    },
    
    get_result: function SP_WorkManagement_OM_TaskWriteResult$get_result() {ULS0Qc:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['Result']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.WorkManagement.OM.Task(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Result'));
            this.get_objectData().get_clientObjectProperties()['Result'] = $v_0;
        }
        return $v_0;
    },
    set_result: function SP_WorkManagement_OM_TaskWriteResult$set_result(value) {ULS0Qc:;
        this.get_objectData().get_clientObjectProperties()['Result'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Result', value));
        }
        return value;
    },
    
    initPropertiesFromJson: function SP_WorkManagement_OM_TaskWriteResult$initPropertiesFromJson(parentNode) {ULS0Qc:;
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.Error;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Error'] = ((SP.DataConvert.fixupType(this.get_context(), $v_0)));
            delete parentNode.Error;
        }
        $v_0 = parentNode.ErrorMessage;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ErrorMessage'] = ($v_0);
            delete parentNode.ErrorMessage;
        }
        $v_0 = parentNode.Result;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('Result', this.get_result(), $v_0);
            this.get_result().fromJson($v_0);
            delete parentNode.Result;
        }
    }
}


SP.WorkManagement.OM.TaskWriteResultPropertyNames = function SP_WorkManagement_OM_TaskWriteResultPropertyNames() {
}


SP.WorkManagement.OM.TaskWriteResultObjectPropertyNames = function SP_WorkManagement_OM_TaskWriteResultObjectPropertyNames() {
}


SP.WorkManagement.OM.UserOrderedSession = function SP_WorkManagement_OM_UserOrderedSession(context, objectPath) {ULS0Qc:;
    SP.WorkManagement.OM.UserOrderedSession.initializeBase(this, [ context, objectPath ]);
}
SP.WorkManagement.OM.UserOrderedSession.prototype = {
    
    reorderTask: function SP_WorkManagement_OM_UserOrderedSession$reorderTask(taskKey, newAfterTaskKey) {ULS0Qc:;
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'ReorderTask', [ taskKey, newAfterTaskKey ]);
        $v_0.addQuery($v_1);
    },
    
    readTasks: function SP_WorkManagement_OM_UserOrderedSession$readTasks(query) {ULS0Qc:;
        var $v_0 = this.get_context();
        var $v_1;
        $v_1 = new SP.WorkManagement.OM.TaskClientCollection($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'ReadTasks', [ query ]));
        return $v_1;
    }
}


SP.WorkManagement.OM.UserOrderedSessionManager = function SP_WorkManagement_OM_UserOrderedSessionManager(context) {ULS0Qc:;
    SP.WorkManagement.OM.UserOrderedSessionManager.initializeBase(this, [ context, SP.ClientUtility.getOrCreateObjectPathForConstructor(context, '{d82117fb-e4aa-4ab8-b590-cb2be4b2f078}', arguments) ]);
}
SP.WorkManagement.OM.UserOrderedSessionManager.newObject = function SP_WorkManagement_OM_UserOrderedSessionManager$newObject(context) {ULS0Qc:;
    return new SP.WorkManagement.OM.UserOrderedSessionManager(context, new SP.ObjectPathConstructor(context, '{d82117fb-e4aa-4ab8-b590-cb2be4b2f078}', null));
}
SP.WorkManagement.OM.UserOrderedSessionManager.prototype = {
    
    createLocationOrientedSession: function SP_WorkManagement_OM_UserOrderedSessionManager$createLocationOrientedSession() {ULS0Qc:;
        var $v_0 = this.get_context();
        var $v_1;
        $v_1 = new SP.WorkManagement.OM.LocationOrientedUserOrderedSession($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'CreateLocationOrientedSession', null));
        return $v_1;
    },
    
    createSession: function SP_WorkManagement_OM_UserOrderedSessionManager$createSession() {ULS0Qc:;
        var $v_0 = this.get_context();
        var $v_1;
        $v_1 = new SP.WorkManagement.OM.UserOrderedSession($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'CreateSession', null));
        return $v_1;
    }
}


SP.WorkManagement.OM.UserSettings = function SP_WorkManagement_OM_UserSettings(context) {ULS0Qc:;
    SP.WorkManagement.OM.UserSettings.initializeBase(this, [ context, SP.ClientUtility.getOrCreateObjectPathForConstructor(context, '{bea67fb5-fb82-4388-b0e7-174baa0eb51a}', arguments) ]);
}
SP.WorkManagement.OM.UserSettings.newObject = function SP_WorkManagement_OM_UserSettings$newObject(context) {ULS0Qc:;
    return new SP.WorkManagement.OM.UserSettings(context, new SP.ObjectPathConstructor(context, '{bea67fb5-fb82-4388-b0e7-174baa0eb51a}', null));
}
SP.WorkManagement.OM.UserSettings.prototype = {
    
    get_daysAfterCurrentDateTimelineEnds: function SP_WorkManagement_OM_UserSettings$get_daysAfterCurrentDateTimelineEnds() {ULS0Qc:;
        this.checkUninitializedProperty('DaysAfterCurrentDateTimelineEnds');
        return ((this.get_objectData().get_properties()['DaysAfterCurrentDateTimelineEnds']));
    },
    set_daysAfterCurrentDateTimelineEnds: function SP_WorkManagement_OM_UserSettings$set_daysAfterCurrentDateTimelineEnds(value) {ULS0Qc:;
        this.get_objectData().get_properties()['DaysAfterCurrentDateTimelineEnds'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'DaysAfterCurrentDateTimelineEnds', value));
        }
        return value;
    },
    
    get_daysATaskIsConsideredNewTask: function SP_WorkManagement_OM_UserSettings$get_daysATaskIsConsideredNewTask() {ULS0Qc:;
        this.checkUninitializedProperty('DaysATaskIsConsideredNewTask');
        return ((this.get_objectData().get_properties()['DaysATaskIsConsideredNewTask']));
    },
    set_daysATaskIsConsideredNewTask: function SP_WorkManagement_OM_UserSettings$set_daysATaskIsConsideredNewTask(value) {ULS0Qc:;
        this.get_objectData().get_properties()['DaysATaskIsConsideredNewTask'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'DaysATaskIsConsideredNewTask', value));
        }
        return value;
    },
    
    get_daysBeforeCurrentDateTimelineStarts: function SP_WorkManagement_OM_UserSettings$get_daysBeforeCurrentDateTimelineStarts() {ULS0Qc:;
        this.checkUninitializedProperty('DaysBeforeCurrentDateTimelineStarts');
        return ((this.get_objectData().get_properties()['DaysBeforeCurrentDateTimelineStarts']));
    },
    set_daysBeforeCurrentDateTimelineStarts: function SP_WorkManagement_OM_UserSettings$set_daysBeforeCurrentDateTimelineStarts(value) {ULS0Qc:;
        this.get_objectData().get_properties()['DaysBeforeCurrentDateTimelineStarts'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'DaysBeforeCurrentDateTimelineStarts', value));
        }
        return value;
    },
    
    get_importantLocationIds: function SP_WorkManagement_OM_UserSettings$get_importantLocationIds() {ULS0Qc:;
        this.checkUninitializedProperty('ImportantLocationIds');
        return ((this.get_objectData().get_properties()['ImportantLocationIds']));
    },
    set_importantLocationIds: function SP_WorkManagement_OM_UserSettings$set_importantLocationIds(value) {ULS0Qc:;
        this.get_objectData().get_properties()['ImportantLocationIds'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'ImportantLocationIds', value));
        }
        return value;
    },
    
    get_importantTasksLimit: function SP_WorkManagement_OM_UserSettings$get_importantTasksLimit() {ULS0Qc:;
        this.checkUninitializedProperty('ImportantTasksLimit');
        return ((this.get_objectData().get_properties()['ImportantTasksLimit']));
    },
    set_importantTasksLimit: function SP_WorkManagement_OM_UserSettings$set_importantTasksLimit(value) {ULS0Qc:;
        this.get_objectData().get_properties()['ImportantTasksLimit'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'ImportantTasksLimit', value));
        }
        return value;
    },
    
    get_inactiveMonthsBeforeLocationExpiration: function SP_WorkManagement_OM_UserSettings$get_inactiveMonthsBeforeLocationExpiration() {ULS0Qc:;
        this.checkUninitializedProperty('InactiveMonthsBeforeLocationExpiration');
        return ((this.get_objectData().get_properties()['InactiveMonthsBeforeLocationExpiration']));
    },
    set_inactiveMonthsBeforeLocationExpiration: function SP_WorkManagement_OM_UserSettings$set_inactiveMonthsBeforeLocationExpiration(value) {ULS0Qc:;
        this.get_objectData().get_properties()['InactiveMonthsBeforeLocationExpiration'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'InactiveMonthsBeforeLocationExpiration', value));
        }
        return value;
    },
    
    get_lateTasksLimit: function SP_WorkManagement_OM_UserSettings$get_lateTasksLimit() {ULS0Qc:;
        this.checkUninitializedProperty('LateTasksLimit');
        return ((this.get_objectData().get_properties()['LateTasksLimit']));
    },
    set_lateTasksLimit: function SP_WorkManagement_OM_UserSettings$set_lateTasksLimit(value) {ULS0Qc:;
        this.get_objectData().get_properties()['LateTasksLimit'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'LateTasksLimit', value));
        }
        return value;
    },
    
    get_oldTasksLimit: function SP_WorkManagement_OM_UserSettings$get_oldTasksLimit() {ULS0Qc:;
        this.checkUninitializedProperty('OldTasksLimit');
        return ((this.get_objectData().get_properties()['OldTasksLimit']));
    },
    set_oldTasksLimit: function SP_WorkManagement_OM_UserSettings$set_oldTasksLimit(value) {ULS0Qc:;
        this.get_objectData().get_properties()['OldTasksLimit'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'OldTasksLimit', value));
        }
        return value;
    },
    
    get_upcomingTasksLimit: function SP_WorkManagement_OM_UserSettings$get_upcomingTasksLimit() {ULS0Qc:;
        this.checkUninitializedProperty('UpcomingTasksLimit');
        return ((this.get_objectData().get_properties()['UpcomingTasksLimit']));
    },
    set_upcomingTasksLimit: function SP_WorkManagement_OM_UserSettings$set_upcomingTasksLimit(value) {ULS0Qc:;
        this.get_objectData().get_properties()['UpcomingTasksLimit'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'UpcomingTasksLimit', value));
        }
        return value;
    },
    
    initPropertiesFromJson: function SP_WorkManagement_OM_UserSettings$initPropertiesFromJson(parentNode) {ULS0Qc:;
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.DaysAfterCurrentDateTimelineEnds;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['DaysAfterCurrentDateTimelineEnds'] = ($v_0);
            delete parentNode.DaysAfterCurrentDateTimelineEnds;
        }
        $v_0 = parentNode.DaysATaskIsConsideredNewTask;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['DaysATaskIsConsideredNewTask'] = ($v_0);
            delete parentNode.DaysATaskIsConsideredNewTask;
        }
        $v_0 = parentNode.DaysBeforeCurrentDateTimelineStarts;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['DaysBeforeCurrentDateTimelineStarts'] = ($v_0);
            delete parentNode.DaysBeforeCurrentDateTimelineStarts;
        }
        $v_0 = parentNode.ImportantLocationIds;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ImportantLocationIds'] = ((SP.DataConvert.fixupType(this.get_context(), $v_0)));
            delete parentNode.ImportantLocationIds;
        }
        $v_0 = parentNode.ImportantTasksLimit;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ImportantTasksLimit'] = ($v_0);
            delete parentNode.ImportantTasksLimit;
        }
        $v_0 = parentNode.InactiveMonthsBeforeLocationExpiration;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['InactiveMonthsBeforeLocationExpiration'] = ($v_0);
            delete parentNode.InactiveMonthsBeforeLocationExpiration;
        }
        $v_0 = parentNode.LateTasksLimit;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['LateTasksLimit'] = ($v_0);
            delete parentNode.LateTasksLimit;
        }
        $v_0 = parentNode.OldTasksLimit;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['OldTasksLimit'] = ($v_0);
            delete parentNode.OldTasksLimit;
        }
        $v_0 = parentNode.UpcomingTasksLimit;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['UpcomingTasksLimit'] = ($v_0);
            delete parentNode.UpcomingTasksLimit;
        }
    }
}


SP.WorkManagement.OM.UserSettingsPropertyNames = function SP_WorkManagement_OM_UserSettingsPropertyNames() {
}


SP.WorkManagement.OM.UserSettingsManager = function SP_WorkManagement_OM_UserSettingsManager(context) {ULS0Qc:;
    SP.WorkManagement.OM.UserSettingsManager.initializeBase(this, [ context, SP.ClientUtility.getOrCreateObjectPathForConstructor(context, '{73b6f1d6-c69c-4787-8413-2bb14d336410}', arguments) ]);
}
SP.WorkManagement.OM.UserSettingsManager.newObject = function SP_WorkManagement_OM_UserSettingsManager$newObject(context) {ULS0Qc:;
    return new SP.WorkManagement.OM.UserSettingsManager(context, new SP.ObjectPathConstructor(context, '{73b6f1d6-c69c-4787-8413-2bb14d336410}', null));
}
SP.WorkManagement.OM.UserSettingsManager.prototype = {
    
    getImportantLocations: function SP_WorkManagement_OM_UserSettingsManager$getImportantLocations() {ULS0Qc:;
        var $v_0 = this.get_context();
        var $v_1;
        $v_1 = new SP.WorkManagement.OM.LocationClientCollection($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetImportantLocations', null));
        return $v_1;
    },
    
    getAllLocations: function SP_WorkManagement_OM_UserSettingsManager$getAllLocations() {ULS0Qc:;
        var $v_0 = this.get_context();
        var $v_1;
        $v_1 = new SP.WorkManagement.OM.LocationClientCollection($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetAllLocations', null));
        return $v_1;
    },
    
    getLocations: function SP_WorkManagement_OM_UserSettingsManager$getLocations(locationsId) {ULS0Qc:;
        var $v_0 = this.get_context();
        var $v_1;
        $v_1 = new SP.WorkManagement.OM.LocationClientCollection($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetLocations', [ locationsId ]));
        return $v_1;
    },
    
    isExchangeJobPending: function SP_WorkManagement_OM_UserSettingsManager$isExchangeJobPending() {ULS0Qc:;
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'IsExchangeJobPending', null);
        $v_0.addQuery($v_2);
        $v_1 = new SP.BooleanResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    },
    
    optIntoExchangeSync: function SP_WorkManagement_OM_UserSettingsManager$optIntoExchangeSync() {ULS0Qc:;
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'OptIntoExchangeSync', null);
        $v_0.addQuery($v_2);
        $v_1 = new SP.IntResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    },
    
    optOutOfExchangeSync: function SP_WorkManagement_OM_UserSettingsManager$optOutOfExchangeSync() {ULS0Qc:;
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'OptOutOfExchangeSync', null);
        $v_0.addQuery($v_2);
        $v_1 = new SP.BooleanResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    },
    
    getExchangeSyncInfo: function SP_WorkManagement_OM_UserSettingsManager$getExchangeSyncInfo() {ULS0Qc:;
        var $v_0 = this.get_context();
        var $v_1;
        $v_1 = new SP.WorkManagement.OM.ExchangeUserSyncState($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetExchangeSyncInfo', null));
        return $v_1;
    },
    
    getUserSettings: function SP_WorkManagement_OM_UserSettingsManager$getUserSettings() {ULS0Qc:;
        var $v_0 = this.get_context();
        var $v_1;
        $v_1 = new SP.WorkManagement.OM.UserSettings($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetUserSettings', null));
        return $v_1;
    },
    
    setUserSettings: function SP_WorkManagement_OM_UserSettingsManager$setUserSettings(settings, locationColorUpdates) {ULS0Qc:;
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'SetUserSettings', [ settings, locationColorUpdates ]);
        $v_0.addQuery($v_1);
    },
    
    getPersistedProperties: function SP_WorkManagement_OM_UserSettingsManager$getPersistedProperties() {ULS0Qc:;
        var $v_0 = this.get_context();
        var $v_1;
        $v_1 = new SP.WorkManagement.OM.PersistedProperties($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetPersistedProperties', null));
        return $v_1;
    },
    
    setPersistedProperties: function SP_WorkManagement_OM_UserSettingsManager$setPersistedProperties(persistedProperties) {ULS0Qc:;
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'SetPersistedProperties', [ persistedProperties ]);
        $v_0.addQuery($v_1);
    }
}


SP.WorkManagement.OM.ViewSelectionInfo = function SP_WorkManagement_OM_ViewSelectionInfo(context) {ULS0Qc:;
    SP.WorkManagement.OM.ViewSelectionInfo.initializeBase(this, [ context, SP.ClientUtility.getOrCreateObjectPathForConstructor(context, '{9c4b64c1-8722-45c0-9d9d-e61c2f36bb44}', arguments) ]);
}
SP.WorkManagement.OM.ViewSelectionInfo.newObject = function SP_WorkManagement_OM_ViewSelectionInfo$newObject(context) {ULS0Qc:;
    return new SP.WorkManagement.OM.ViewSelectionInfo(context, new SP.ObjectPathConstructor(context, '{9c4b64c1-8722-45c0-9d9d-e61c2f36bb44}', null));
}
SP.WorkManagement.OM.ViewSelectionInfo.prototype = {
    
    get_id: function SP_WorkManagement_OM_ViewSelectionInfo$get_id() {ULS0Qc:;
        this.checkUninitializedProperty('Id');
        return ((this.get_objectData().get_properties()['Id']));
    },
    set_id: function SP_WorkManagement_OM_ViewSelectionInfo$set_id(value) {ULS0Qc:;
        this.get_objectData().get_properties()['Id'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Id', value));
        }
        return value;
    },
    
    get_image: function SP_WorkManagement_OM_ViewSelectionInfo$get_image() {ULS0Qc:;
        this.checkUninitializedProperty('Image');
        return ((this.get_objectData().get_properties()['Image']));
    },
    set_image: function SP_WorkManagement_OM_ViewSelectionInfo$set_image(value) {ULS0Qc:;
        this.get_objectData().get_properties()['Image'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Image', value));
        }
        return value;
    },
    
    get_name: function SP_WorkManagement_OM_ViewSelectionInfo$get_name() {ULS0Qc:;
        this.checkUninitializedProperty('Name');
        return ((this.get_objectData().get_properties()['Name']));
    },
    set_name: function SP_WorkManagement_OM_ViewSelectionInfo$set_name(value) {ULS0Qc:;
        this.get_objectData().get_properties()['Name'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Name', value));
        }
        return value;
    },
    
    initPropertiesFromJson: function SP_WorkManagement_OM_ViewSelectionInfo$initPropertiesFromJson(parentNode) {ULS0Qc:;
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.Id;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Id'] = ($v_0);
            delete parentNode.Id;
        }
        $v_0 = parentNode.Image;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Image'] = ($v_0);
            delete parentNode.Image;
        }
        $v_0 = parentNode.Name;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Name'] = ($v_0);
            delete parentNode.Name;
        }
    }
}


SP.WorkManagement.OM.ViewSelectionInfoPropertyNames = function SP_WorkManagement_OM_ViewSelectionInfoPropertyNames() {
}


SP.WorkManagement.OM.BaseSession.registerClass('SP.WorkManagement.OM.BaseSession', SP.ClientObject);
SP.WorkManagement.OM.BooleanCriterion.registerClass('SP.WorkManagement.OM.BooleanCriterion', SP.ClientObject);
SP.WorkManagement.OM.BooleanCriterionPropertyNames.registerClass('SP.WorkManagement.OM.BooleanCriterionPropertyNames');
SP.WorkManagement.OM.CalloutInfo.registerClass('SP.WorkManagement.OM.CalloutInfo', SP.ClientObject);
SP.WorkManagement.OM.CalloutInfoPropertyNames.registerClass('SP.WorkManagement.OM.CalloutInfoPropertyNames');
SP.WorkManagement.OM.CreateRefreshJobResult.registerClass('SP.WorkManagement.OM.CreateRefreshJobResult', SP.ClientObject);
SP.WorkManagement.OM.CreateRefreshJobResultPropertyNames.registerClass('SP.WorkManagement.OM.CreateRefreshJobResultPropertyNames');
SP.WorkManagement.OM.CustomAttributeFilter.registerClass('SP.WorkManagement.OM.CustomAttributeFilter', SP.ClientObject);
SP.WorkManagement.OM.CustomAttributeFilterPropertyNames.registerClass('SP.WorkManagement.OM.CustomAttributeFilterPropertyNames');
SP.WorkManagement.OM.DashboardScriptExtensionInfo.registerClass('SP.WorkManagement.OM.DashboardScriptExtensionInfo', SP.ClientObject);
SP.WorkManagement.OM.DashboardScriptExtensionInfoPropertyNames.registerClass('SP.WorkManagement.OM.DashboardScriptExtensionInfoPropertyNames');
SP.WorkManagement.OM.DashboardScriptExtensionInfoClientCollection.registerClass('SP.WorkManagement.OM.DashboardScriptExtensionInfoClientCollection', SP.ClientObjectCollection);
SP.WorkManagement.OM.DateRangeCriterion.registerClass('SP.WorkManagement.OM.DateRangeCriterion', SP.ClientObject);
SP.WorkManagement.OM.DateRangeCriterionPropertyNames.registerClass('SP.WorkManagement.OM.DateRangeCriterionPropertyNames');
SP.WorkManagement.OM.ExchangeUserSyncState.registerClass('SP.WorkManagement.OM.ExchangeUserSyncState', SP.ClientObject);
SP.WorkManagement.OM.ExchangeUserSyncStatePropertyNames.registerClass('SP.WorkManagement.OM.ExchangeUserSyncStatePropertyNames');
SP.WorkManagement.OM.Location.registerClass('SP.WorkManagement.OM.Location', SP.ClientObject);
SP.WorkManagement.OM.LocationPropertyNames.registerClass('SP.WorkManagement.OM.LocationPropertyNames');
SP.WorkManagement.OM.LocationClientCollection.registerClass('SP.WorkManagement.OM.LocationClientCollection', SP.ClientObjectCollection);
SP.WorkManagement.OM.LocationDisplaySetting.registerClass('SP.WorkManagement.OM.LocationDisplaySetting', SP.ClientObject);
SP.WorkManagement.OM.LocationDisplaySettingPropertyNames.registerClass('SP.WorkManagement.OM.LocationDisplaySettingPropertyNames');
SP.WorkManagement.OM.LocationFilter.registerClass('SP.WorkManagement.OM.LocationFilter', SP.ClientObject);
SP.WorkManagement.OM.LocationFilterPropertyNames.registerClass('SP.WorkManagement.OM.LocationFilterPropertyNames');
SP.WorkManagement.OM.LocationGroupClientCollection.registerClass('SP.WorkManagement.OM.LocationGroupClientCollection', SP.ClientObjectCollection);
SP.WorkManagement.OM.LocationOrientedSortableSession.registerClass('SP.WorkManagement.OM.LocationOrientedSortableSession', SP.WorkManagement.OM.BaseSession);
SP.WorkManagement.OM.LocationOrientedUserOrderedSession.registerClass('SP.WorkManagement.OM.LocationOrientedUserOrderedSession', SP.WorkManagement.OM.BaseSession);
SP.WorkManagement.OM.LocationUpdateResult.registerClass('SP.WorkManagement.OM.LocationUpdateResult', SP.ClientObject);
SP.WorkManagement.OM.LocationUpdateResultPropertyNames.registerClass('SP.WorkManagement.OM.LocationUpdateResultPropertyNames');
SP.WorkManagement.OM.LocationUpdateResultClientCollection.registerClass('SP.WorkManagement.OM.LocationUpdateResultClientCollection', SP.ClientObjectCollection);
SP.WorkManagement.OM.NameCriterion.registerClass('SP.WorkManagement.OM.NameCriterion', SP.ClientObject);
SP.WorkManagement.OM.NameCriterionPropertyNames.registerClass('SP.WorkManagement.OM.NameCriterionPropertyNames');
SP.WorkManagement.OM.NonTaskDataReadResult.registerClass('SP.WorkManagement.OM.NonTaskDataReadResult', SP.ClientObject);
SP.WorkManagement.OM.NonTaskDataReadResultObjectPropertyNames.registerClass('SP.WorkManagement.OM.NonTaskDataReadResultObjectPropertyNames');
SP.WorkManagement.OM.OrderInfo.registerClass('SP.WorkManagement.OM.OrderInfo', SP.ClientObject);
SP.WorkManagement.OM.OrderInfoPropertyNames.registerClass('SP.WorkManagement.OM.OrderInfoPropertyNames');
SP.WorkManagement.OM.PersistedProperties.registerClass('SP.WorkManagement.OM.PersistedProperties', SP.ClientObject);
SP.WorkManagement.OM.PersistedPropertiesPropertyNames.registerClass('SP.WorkManagement.OM.PersistedPropertiesPropertyNames');
SP.WorkManagement.OM.ProviderErrorInfo.registerClass('SP.WorkManagement.OM.ProviderErrorInfo', SP.ClientObject);
SP.WorkManagement.OM.ProviderErrorInfoPropertyNames.registerClass('SP.WorkManagement.OM.ProviderErrorInfoPropertyNames');
SP.WorkManagement.OM.ProviderErrorInfoClientCollection.registerClass('SP.WorkManagement.OM.ProviderErrorInfoClientCollection', SP.ClientObjectCollection);
SP.WorkManagement.OM.ProviderRefreshStatus.registerClass('SP.WorkManagement.OM.ProviderRefreshStatus', SP.ClientObject);
SP.WorkManagement.OM.ProviderRefreshStatusPropertyNames.registerClass('SP.WorkManagement.OM.ProviderRefreshStatusPropertyNames');
SP.WorkManagement.OM.ProviderRefreshStatusClientCollection.registerClass('SP.WorkManagement.OM.ProviderRefreshStatusClientCollection', SP.ClientObjectCollection);
SP.WorkManagement.OM.RefreshEventInfoClientCollection.registerClass('SP.WorkManagement.OM.RefreshEventInfoClientCollection', SP.ClientObjectCollection);
SP.WorkManagement.OM.RefreshHealthInfo.registerClass('SP.WorkManagement.OM.RefreshHealthInfo', SP.ClientObject);
SP.WorkManagement.OM.RefreshHealthInfoPropertyNames.registerClass('SP.WorkManagement.OM.RefreshHealthInfoPropertyNames');
SP.WorkManagement.OM.RefreshHealthInfoObjectPropertyNames.registerClass('SP.WorkManagement.OM.RefreshHealthInfoObjectPropertyNames');
SP.WorkManagement.OM.RefreshHistory.registerClass('SP.WorkManagement.OM.RefreshHistory', SP.ClientObject);
SP.WorkManagement.OM.RefreshHistoryObjectPropertyNames.registerClass('SP.WorkManagement.OM.RefreshHistoryObjectPropertyNames');
SP.WorkManagement.OM.RefreshResult.registerClass('SP.WorkManagement.OM.RefreshResult', SP.ClientObject);
SP.WorkManagement.OM.RefreshResultPropertyNames.registerClass('SP.WorkManagement.OM.RefreshResultPropertyNames');
SP.WorkManagement.OM.RefreshResultObjectPropertyNames.registerClass('SP.WorkManagement.OM.RefreshResultObjectPropertyNames');
SP.WorkManagement.OM.SortableSession.registerClass('SP.WorkManagement.OM.SortableSession', SP.WorkManagement.OM.BaseSession);
SP.WorkManagement.OM.SortableSessionManager.registerClass('SP.WorkManagement.OM.SortableSessionManager', SP.ClientObject);
SP.WorkManagement.OM.SortableTaskQuery.registerClass('SP.WorkManagement.OM.SortableTaskQuery', SP.ClientObject);
SP.WorkManagement.OM.SortableTaskQueryObjectPropertyNames.registerClass('SP.WorkManagement.OM.SortableTaskQueryObjectPropertyNames');
SP.WorkManagement.OM.Task.registerClass('SP.WorkManagement.OM.Task', SP.ClientObject);
SP.WorkManagement.OM.TaskPropertyNames.registerClass('SP.WorkManagement.OM.TaskPropertyNames');
SP.WorkManagement.OM.TaskClientCollection.registerClass('SP.WorkManagement.OM.TaskClientCollection', SP.ClientObjectCollection);
SP.WorkManagement.OM.TaskFilter.registerClass('SP.WorkManagement.OM.TaskFilter', SP.ClientObject);
SP.WorkManagement.OM.TaskFilterPropertyNames.registerClass('SP.WorkManagement.OM.TaskFilterPropertyNames');
SP.WorkManagement.OM.TaskFilterObjectPropertyNames.registerClass('SP.WorkManagement.OM.TaskFilterObjectPropertyNames');
SP.WorkManagement.OM.TaskQuery.registerClass('SP.WorkManagement.OM.TaskQuery', SP.ClientObject);
SP.WorkManagement.OM.TaskQueryPropertyNames.registerClass('SP.WorkManagement.OM.TaskQueryPropertyNames');
SP.WorkManagement.OM.TaskQueryObjectPropertyNames.registerClass('SP.WorkManagement.OM.TaskQueryObjectPropertyNames');
SP.WorkManagement.OM.TaskQueryByLocationResult.registerClass('SP.WorkManagement.OM.TaskQueryByLocationResult', SP.ClientObject);
SP.WorkManagement.OM.TaskQueryByLocationResultPropertyNames.registerClass('SP.WorkManagement.OM.TaskQueryByLocationResultPropertyNames');
SP.WorkManagement.OM.TaskQueryByLocationResultObjectPropertyNames.registerClass('SP.WorkManagement.OM.TaskQueryByLocationResultObjectPropertyNames');
SP.WorkManagement.OM.TaskQueryResult.registerClass('SP.WorkManagement.OM.TaskQueryResult', SP.ClientObject);
SP.WorkManagement.OM.TaskQueryResultPropertyNames.registerClass('SP.WorkManagement.OM.TaskQueryResultPropertyNames');
SP.WorkManagement.OM.TaskQueryResultObjectPropertyNames.registerClass('SP.WorkManagement.OM.TaskQueryResultObjectPropertyNames');
SP.WorkManagement.OM.TaskRefreshResult.registerClass('SP.WorkManagement.OM.TaskRefreshResult', SP.ClientObject);
SP.WorkManagement.OM.TaskRefreshResultPropertyNames.registerClass('SP.WorkManagement.OM.TaskRefreshResultPropertyNames');
SP.WorkManagement.OM.TaskRefreshResultObjectPropertyNames.registerClass('SP.WorkManagement.OM.TaskRefreshResultObjectPropertyNames');
SP.WorkManagement.OM.TaskWriteResult.registerClass('SP.WorkManagement.OM.TaskWriteResult', SP.ClientObject);
SP.WorkManagement.OM.TaskWriteResultPropertyNames.registerClass('SP.WorkManagement.OM.TaskWriteResultPropertyNames');
SP.WorkManagement.OM.TaskWriteResultObjectPropertyNames.registerClass('SP.WorkManagement.OM.TaskWriteResultObjectPropertyNames');
SP.WorkManagement.OM.UserOrderedSession.registerClass('SP.WorkManagement.OM.UserOrderedSession', SP.WorkManagement.OM.BaseSession);
SP.WorkManagement.OM.UserOrderedSessionManager.registerClass('SP.WorkManagement.OM.UserOrderedSessionManager', SP.ClientObject);
SP.WorkManagement.OM.UserSettings.registerClass('SP.WorkManagement.OM.UserSettings', SP.ClientObject);
SP.WorkManagement.OM.UserSettingsPropertyNames.registerClass('SP.WorkManagement.OM.UserSettingsPropertyNames');
SP.WorkManagement.OM.UserSettingsManager.registerClass('SP.WorkManagement.OM.UserSettingsManager', SP.ClientObject);
SP.WorkManagement.OM.ViewSelectionInfo.registerClass('SP.WorkManagement.OM.ViewSelectionInfo', SP.ClientObject);
SP.WorkManagement.OM.ViewSelectionInfoPropertyNames.registerClass('SP.WorkManagement.OM.ViewSelectionInfoPropertyNames');
SP.WorkManagement.OM.BooleanCriterionPropertyNames.compareType = 'CompareType';
SP.WorkManagement.OM.CalloutInfoPropertyNames.contacts = 'Contacts';
SP.WorkManagement.OM.CalloutInfoPropertyNames.directLinkTitle = 'DirectLinkTitle';
SP.WorkManagement.OM.CalloutInfoPropertyNames.directLinkUrl = 'DirectLinkUrl';
SP.WorkManagement.OM.CalloutInfoPropertyNames.hierarchy = 'Hierarchy';
SP.WorkManagement.OM.CalloutInfoPropertyNames.predecessors = 'Predecessors';
SP.WorkManagement.OM.CalloutInfoPropertyNames.successors = 'Successors';
SP.WorkManagement.OM.CalloutInfoPropertyNames.title = 'Title';
SP.WorkManagement.OM.CalloutInfoPropertyNames.url = 'Url';
SP.WorkManagement.OM.CreateRefreshJobResultPropertyNames.createdJob = 'CreatedJob';
SP.WorkManagement.OM.CreateRefreshJobResultPropertyNames.currentJobId = 'CurrentJobId';
SP.WorkManagement.OM.CreateRefreshJobResultPropertyNames.encounteredError = 'EncounteredError';
SP.WorkManagement.OM.CustomAttributeFilterPropertyNames.attributes = 'Attributes';
SP.WorkManagement.OM.CustomAttributeFilterPropertyNames.concatType = 'ConcatType';
SP.WorkManagement.OM.DashboardScriptExtensionInfoPropertyNames.providerKey = 'ProviderKey';
SP.WorkManagement.OM.DashboardScriptExtensionInfoPropertyNames.scriptClass = 'ScriptClass';
SP.WorkManagement.OM.DashboardScriptExtensionInfoPropertyNames.scriptData = 'ScriptData';
SP.WorkManagement.OM.DashboardScriptExtensionInfoPropertyNames.scriptFiles = 'ScriptFiles';
SP.WorkManagement.OM.DateRangeCriterionPropertyNames.rangeEndValue = 'RangeEndValue';
SP.WorkManagement.OM.DateRangeCriterionPropertyNames.rangeStartValue = 'RangeStartValue';
SP.WorkManagement.OM.ExchangeUserSyncStatePropertyNames.isOptedIn = 'IsOptedIn';
SP.WorkManagement.OM.ExchangeUserSyncStatePropertyNames.lastEndTime = 'LastEndTime';
SP.WorkManagement.OM.ExchangeUserSyncStatePropertyNames.lastSyncResult = 'LastSyncResult';
SP.WorkManagement.OM.LocationPropertyNames.color = 'Color';
SP.WorkManagement.OM.LocationPropertyNames.id = 'Id';
SP.WorkManagement.OM.LocationPropertyNames.important = 'Important';
SP.WorkManagement.OM.LocationPropertyNames.name = 'Name';
SP.WorkManagement.OM.LocationPropertyNames.parentId = 'ParentId';
SP.WorkManagement.OM.LocationPropertyNames.rootProviderKey = 'RootProviderKey';
SP.WorkManagement.OM.LocationPropertyNames.url = 'Url';
SP.WorkManagement.OM.LocationDisplaySettingPropertyNames.color = 'Color';
SP.WorkManagement.OM.LocationDisplaySettingPropertyNames.id = 'Id';
SP.WorkManagement.OM.LocationFilterPropertyNames.includeUncategorizedTasks = 'IncludeUncategorizedTasks';
SP.WorkManagement.OM.LocationFilterPropertyNames.locationKeys = 'LocationKeys';
SP.WorkManagement.OM.LocationUpdateResultPropertyNames.activeAddedCount = 'ActiveAddedCount';
SP.WorkManagement.OM.LocationUpdateResultPropertyNames.addedCount = 'AddedCount';
SP.WorkManagement.OM.LocationUpdateResultPropertyNames.removedCount = 'RemovedCount';
SP.WorkManagement.OM.LocationUpdateResultPropertyNames.rootLocationId = 'RootLocationId';
SP.WorkManagement.OM.LocationUpdateResultPropertyNames.updatedCount = 'UpdatedCount';
SP.WorkManagement.OM.NameCriterionPropertyNames.compareType = 'CompareType';
SP.WorkManagement.OM.NameCriterionPropertyNames.compareValue = 'CompareValue';
SP.WorkManagement.OM.NonTaskDataReadResultObjectPropertyNames.allLocatons = 'AllLocatons';
SP.WorkManagement.OM.NonTaskDataReadResultObjectPropertyNames.persistedProperties = 'PersistedProperties';
SP.WorkManagement.OM.NonTaskDataReadResultObjectPropertyNames.refreshHistory = 'RefreshHistory';
SP.WorkManagement.OM.NonTaskDataReadResultObjectPropertyNames.scriptExtensions = 'ScriptExtensions';
SP.WorkManagement.OM.NonTaskDataReadResultObjectPropertyNames.userSettings = 'UserSettings';
SP.WorkManagement.OM.OrderInfoPropertyNames.field = 'Field';
SP.WorkManagement.OM.OrderInfoPropertyNames.isDescending = 'IsDescending';
SP.WorkManagement.OM.PersistedPropertiesPropertyNames.filteredLocationIds = 'FilteredLocationIds';
SP.WorkManagement.OM.PersistedPropertiesPropertyNames.groupByProjects = 'GroupByProjects';
SP.WorkManagement.OM.PersistedPropertiesPropertyNames.hasShownMarkAsImportantCallout = 'HasShownMarkAsImportantCallout';
SP.WorkManagement.OM.PersistedPropertiesPropertyNames.hasShownTaskListTooLongNotification = 'HasShownTaskListTooLongNotification';
SP.WorkManagement.OM.PersistedPropertiesPropertyNames.quickLaunchLandingPage = 'QuickLaunchLandingPage';
SP.WorkManagement.OM.ProviderErrorInfoPropertyNames.correlationId = 'CorrelationId';
SP.WorkManagement.OM.ProviderErrorInfoPropertyNames.lastSuccessfulRefresh = 'LastSuccessfulRefresh';
SP.WorkManagement.OM.ProviderErrorInfoPropertyNames.localizedName = 'LocalizedName';
SP.WorkManagement.OM.ProviderRefreshStatusPropertyNames.providerKey = 'ProviderKey';
SP.WorkManagement.OM.ProviderRefreshStatusPropertyNames.providerLocalizedName = 'ProviderLocalizedName';
SP.WorkManagement.OM.ProviderRefreshStatusPropertyNames.refreshFinished = 'RefreshFinished';
SP.WorkManagement.OM.ProviderRefreshStatusPropertyNames.refreshStarted = 'RefreshStarted';
SP.WorkManagement.OM.ProviderRefreshStatusPropertyNames.rootLocationId = 'RootLocationId';
SP.WorkManagement.OM.RefreshHealthInfoPropertyNames.latestRefreshTime = 'LatestRefreshTime';
SP.WorkManagement.OM.RefreshHealthInfoPropertyNames.newTasks = 'NewTasks';
SP.WorkManagement.OM.RefreshHealthInfoPropertyNames.succeeded = 'Succeeded';
SP.WorkManagement.OM.RefreshHealthInfoObjectPropertyNames.providerErrors = 'ProviderErrors';
SP.WorkManagement.OM.RefreshHistoryObjectPropertyNames.refreshes = 'Refreshes';
SP.WorkManagement.OM.RefreshResultPropertyNames.aggregatorRefreshState = 'AggregatorRefreshState';
SP.WorkManagement.OM.RefreshResultPropertyNames.correlationId = 'CorrelationId';
SP.WorkManagement.OM.RefreshResultPropertyNames.refreshFinished = 'RefreshFinished';
SP.WorkManagement.OM.RefreshResultPropertyNames.refreshId = 'RefreshId';
SP.WorkManagement.OM.RefreshResultObjectPropertyNames.providerStatuses = 'ProviderStatuses';
SP.WorkManagement.OM.RefreshResultObjectPropertyNames.taskChangesByLocation = 'TaskChangesByLocation';
SP.WorkManagement.OM.SortableTaskQueryObjectPropertyNames.coreQuery = 'CoreQuery';
SP.WorkManagement.OM.SortableTaskQueryObjectPropertyNames.order = 'Order';
SP.WorkManagement.OM.TaskPropertyNames.customAttributes = 'CustomAttributes';
SP.WorkManagement.OM.TaskPropertyNames.description = 'Description';
SP.WorkManagement.OM.TaskPropertyNames.dueDate = 'DueDate';
SP.WorkManagement.OM.TaskPropertyNames.editUrl = 'EditUrl';
SP.WorkManagement.OM.TaskPropertyNames.id = 'Id';
SP.WorkManagement.OM.TaskPropertyNames.isCompleted = 'IsCompleted';
SP.WorkManagement.OM.TaskPropertyNames.isPersonal = 'IsPersonal';
SP.WorkManagement.OM.TaskPropertyNames.isReadOnly = 'IsReadOnly';
SP.WorkManagement.OM.TaskPropertyNames.lastModified = 'LastModified';
SP.WorkManagement.OM.TaskPropertyNames.locationId = 'LocationId';
SP.WorkManagement.OM.TaskPropertyNames.name = 'Name';
SP.WorkManagement.OM.TaskPropertyNames.pinAge = 'PinAge';
SP.WorkManagement.OM.TaskPropertyNames.serializedCustomDataForClient = 'SerializedCustomDataForClient';
SP.WorkManagement.OM.TaskPropertyNames.startDate = 'StartDate';
SP.WorkManagement.OM.TaskFilterPropertyNames.criterionConcatType = 'CriterionConcatType';
SP.WorkManagement.OM.TaskFilterPropertyNames.idsToFilterBy = 'IdsToFilterBy';
SP.WorkManagement.OM.TaskFilterObjectPropertyNames.completedCriterion = 'CompletedCriterion';
SP.WorkManagement.OM.TaskFilterObjectPropertyNames.dueDateRangeCriterion = 'DueDateRangeCriterion';
SP.WorkManagement.OM.TaskFilterObjectPropertyNames.isNewCriterion = 'IsNewCriterion';
SP.WorkManagement.OM.TaskFilterObjectPropertyNames.nameCriterion = 'NameCriterion';
SP.WorkManagement.OM.TaskFilterObjectPropertyNames.startDateRangeCriterion = 'StartDateRangeCriterion';
SP.WorkManagement.OM.TaskQueryPropertyNames.keywordFilter = 'KeywordFilter';
SP.WorkManagement.OM.TaskQueryPropertyNames.lastQueryTime = 'LastQueryTime';
SP.WorkManagement.OM.TaskQueryPropertyNames.pinnedFilter = 'PinnedFilter';
SP.WorkManagement.OM.TaskQueryObjectPropertyNames.customAttributeFilter = 'CustomAttributeFilter';
SP.WorkManagement.OM.TaskQueryObjectPropertyNames.fieldFilter = 'FieldFilter';
SP.WorkManagement.OM.TaskQueryObjectPropertyNames.lastModifiedDateRangeFilter = 'LastModifiedDateRangeFilter';
SP.WorkManagement.OM.TaskQueryObjectPropertyNames.locationFilter = 'LocationFilter';
SP.WorkManagement.OM.TaskQueryByLocationResultPropertyNames.error = 'Error';
SP.WorkManagement.OM.TaskQueryByLocationResultPropertyNames.errorMessage = 'ErrorMessage';
SP.WorkManagement.OM.TaskQueryByLocationResultObjectPropertyNames.results = 'Results';
SP.WorkManagement.OM.TaskQueryResultPropertyNames.error = 'Error';
SP.WorkManagement.OM.TaskQueryResultPropertyNames.errorMessage = 'ErrorMessage';
SP.WorkManagement.OM.TaskQueryResultObjectPropertyNames.results = 'Results';
SP.WorkManagement.OM.TaskRefreshResultPropertyNames.errorCorrelationId = 'ErrorCorrelationId';
SP.WorkManagement.OM.TaskRefreshResultPropertyNames.refreshState = 'RefreshState';
SP.WorkManagement.OM.TaskRefreshResultObjectPropertyNames.result = 'Result';
SP.WorkManagement.OM.TaskWriteResultPropertyNames.error = 'Error';
SP.WorkManagement.OM.TaskWriteResultPropertyNames.errorMessage = 'ErrorMessage';
SP.WorkManagement.OM.TaskWriteResultObjectPropertyNames.result = 'Result';
SP.WorkManagement.OM.UserSettingsPropertyNames.daysAfterCurrentDateTimelineEnds = 'DaysAfterCurrentDateTimelineEnds';
SP.WorkManagement.OM.UserSettingsPropertyNames.daysATaskIsConsideredNewTask = 'DaysATaskIsConsideredNewTask';
SP.WorkManagement.OM.UserSettingsPropertyNames.daysBeforeCurrentDateTimelineStarts = 'DaysBeforeCurrentDateTimelineStarts';
SP.WorkManagement.OM.UserSettingsPropertyNames.importantLocationIds = 'ImportantLocationIds';
SP.WorkManagement.OM.UserSettingsPropertyNames.importantTasksLimit = 'ImportantTasksLimit';
SP.WorkManagement.OM.UserSettingsPropertyNames.inactiveMonthsBeforeLocationExpiration = 'InactiveMonthsBeforeLocationExpiration';
SP.WorkManagement.OM.UserSettingsPropertyNames.lateTasksLimit = 'LateTasksLimit';
SP.WorkManagement.OM.UserSettingsPropertyNames.oldTasksLimit = 'OldTasksLimit';
SP.WorkManagement.OM.UserSettingsPropertyNames.upcomingTasksLimit = 'UpcomingTasksLimit';
SP.WorkManagement.OM.ViewSelectionInfoPropertyNames.id = 'Id';
SP.WorkManagement.OM.ViewSelectionInfoPropertyNames.image = 'Image';
SP.WorkManagement.OM.ViewSelectionInfoPropertyNames.name = 'Name';

if (typeof(Sys) != "undefined" && Sys && Sys.Application) {
   Sys.Application.notifyScriptLoaded();
}
ExecuteOrDelayUntilScriptLoaded(function () {ULS0Qc:;
   NotifyScriptLoadedAndExecuteWaitingJobs("SP.WorkManagement.js");
}, "sp.js");
