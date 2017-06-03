// JScript File


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
SP.Discovery.Case.newObject = function SP_Discovery_Case$newObject$st(context, web) {
    return new SP.Discovery.Case(context, new SP.ObjectPathConstructor(context, '{df6ac2d8-cd50-4cf4-bc52-f61766f2e005}', [ web ]));
}
SP.Discovery.Case.prototype = {
    
    getExportContent: function SP_Discovery_Case$getExportContent$in(sourceIds) {
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
SP.Discovery.Export.newObject = function SP_Discovery_Export$newObject$st(context, item) {
    return new SP.Discovery.Export(context, new SP.ObjectPathConstructor(context, '{a0c1ea79-9e20-4f8e-96b7-b18956a5cffb}', [ item ]));
}
SP.Discovery.Export.prototype = {
    
    get_status: function SP_Discovery_Export$get_status$in() {
        this.checkUninitializedProperty('Status');
        return (this.get_objectData().get_properties()['Status']);
    },
    
    set_status: function SP_Discovery_Export$set_status$in(value) {
        this.get_objectData().get_properties()['Status'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Status', value));
        }
        return value;
    },
    
    initPropertiesFromJson: function SP_Discovery_Export$initPropertiesFromJson$in(parentNode) {
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.Status;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Status'] = ((SP.DataConvert.fixupType(this.get_context(), $v_0)));
            delete parentNode.Status;
        }
    },
    
    update: function SP_Discovery_Export$update$in() {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'Update', null);
        $v_0.addQuery($v_1);
    },
    
    getExportContent: function SP_Discovery_Export$getExportContent$in() {
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
SP.InformationPolicy.ProjectPolicy.getProjectPolicies = function SP_InformationPolicy_ProjectPolicy$getProjectPolicies$st(context, web) {
    if (!context) {
        throw Error.argumentNull('context');
    }
    var $v_0;
    $v_0 = new SP.ClientObjectList(context, new SP.ObjectPathStaticMethod(context, '{ec5e0a70-0cc3-408f-a4dc-1bb3495aac75}', 'GetProjectPolicies', [ web ]), SP.InformationPolicy.ProjectPolicy);
    return $v_0;
}
SP.InformationPolicy.ProjectPolicy.getCurrentlyAppliedProjectPolicyOnWeb = function SP_InformationPolicy_ProjectPolicy$getCurrentlyAppliedProjectPolicyOnWeb$st(context, web) {
    if (!context) {
        throw Error.argumentNull('context');
    }
    var $v_0;
    $v_0 = new SP.InformationPolicy.ProjectPolicy(context, new SP.ObjectPathStaticMethod(context, '{ec5e0a70-0cc3-408f-a4dc-1bb3495aac75}', 'GetCurrentlyAppliedProjectPolicyOnWeb', [ web ]));
    return $v_0;
}
SP.InformationPolicy.ProjectPolicy.applyProjectPolicy = function SP_InformationPolicy_ProjectPolicy$applyProjectPolicy$st(context, web, projectPolicy) {
    if (!context) {
        throw Error.argumentNull('context');
    }
    var $v_0 = new SP.ClientActionInvokeStaticMethod(context, '{ec5e0a70-0cc3-408f-a4dc-1bb3495aac75}', 'ApplyProjectPolicy', [ web, projectPolicy ]);
    context.addQuery($v_0);
}
SP.InformationPolicy.ProjectPolicy.openProject = function SP_InformationPolicy_ProjectPolicy$openProject$st(context, web) {
    if (!context) {
        throw Error.argumentNull('context');
    }
    var $v_0 = new SP.ClientActionInvokeStaticMethod(context, '{ec5e0a70-0cc3-408f-a4dc-1bb3495aac75}', 'OpenProject', [ web ]);
    context.addQuery($v_0);
}
SP.InformationPolicy.ProjectPolicy.closeProject = function SP_InformationPolicy_ProjectPolicy$closeProject$st(context, web) {
    if (!context) {
        throw Error.argumentNull('context');
    }
    var $v_0 = new SP.ClientActionInvokeStaticMethod(context, '{ec5e0a70-0cc3-408f-a4dc-1bb3495aac75}', 'CloseProject', [ web ]);
    context.addQuery($v_0);
}
SP.InformationPolicy.ProjectPolicy.postponeProject = function SP_InformationPolicy_ProjectPolicy$postponeProject$st(context, web) {
    if (!context) {
        throw Error.argumentNull('context');
    }
    var $v_0 = new SP.ClientActionInvokeStaticMethod(context, '{ec5e0a70-0cc3-408f-a4dc-1bb3495aac75}', 'PostponeProject', [ web ]);
    context.addQuery($v_0);
}
SP.InformationPolicy.ProjectPolicy.doesProjectHavePolicy = function SP_InformationPolicy_ProjectPolicy$doesProjectHavePolicy$st(context, web) {
    if (!context) {
        throw Error.argumentNull('context');
    }
    var $v_0;
    var $v_1 = new SP.ClientActionInvokeStaticMethod(context, '{ec5e0a70-0cc3-408f-a4dc-1bb3495aac75}', 'DoesProjectHavePolicy', [ web ]);
    context.addQuery($v_1);
    $v_0 = new SP.BooleanResult();
    context.addQueryIdAndResultObject($v_1.get_id(), $v_0);
    return $v_0;
}
SP.InformationPolicy.ProjectPolicy.isProjectClosed = function SP_InformationPolicy_ProjectPolicy$isProjectClosed$st(context, web) {
    if (!context) {
        throw Error.argumentNull('context');
    }
    var $v_0;
    var $v_1 = new SP.ClientActionInvokeStaticMethod(context, '{ec5e0a70-0cc3-408f-a4dc-1bb3495aac75}', 'IsProjectClosed', [ web ]);
    context.addQuery($v_1);
    $v_0 = new SP.BooleanResult();
    context.addQueryIdAndResultObject($v_1.get_id(), $v_0);
    return $v_0;
}
SP.InformationPolicy.ProjectPolicy.getProjectCloseDate = function SP_InformationPolicy_ProjectPolicy$getProjectCloseDate$st(context, web) {
    if (!context) {
        throw Error.argumentNull('context');
    }
    var $v_0;
    var $v_1 = new SP.ClientActionInvokeStaticMethod(context, '{ec5e0a70-0cc3-408f-a4dc-1bb3495aac75}', 'GetProjectCloseDate', [ web ]);
    context.addQuery($v_1);
    $v_0 = new SP.DateTimeResult();
    context.addQueryIdAndResultObject($v_1.get_id(), $v_0);
    return $v_0;
}
SP.InformationPolicy.ProjectPolicy.getProjectExpirationDate = function SP_InformationPolicy_ProjectPolicy$getProjectExpirationDate$st(context, web) {
    if (!context) {
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
    
    get_description: function SP_InformationPolicy_ProjectPolicy$get_description$in() {
        this.checkUninitializedProperty('Description');
        return (this.get_objectData().get_properties()['Description']);
    },
    
    get_emailBody: function SP_InformationPolicy_ProjectPolicy$get_emailBody$in() {
        this.checkUninitializedProperty('EmailBody');
        return (this.get_objectData().get_properties()['EmailBody']);
    },
    
    set_emailBody: function SP_InformationPolicy_ProjectPolicy$set_emailBody$in(value) {
        this.get_objectData().get_properties()['EmailBody'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'EmailBody', value));
        }
        return value;
    },
    
    get_emailBodyWithTeamMailbox: function SP_InformationPolicy_ProjectPolicy$get_emailBodyWithTeamMailbox$in() {
        this.checkUninitializedProperty('EmailBodyWithTeamMailbox');
        return (this.get_objectData().get_properties()['EmailBodyWithTeamMailbox']);
    },
    
    set_emailBodyWithTeamMailbox: function SP_InformationPolicy_ProjectPolicy$set_emailBodyWithTeamMailbox$in(value) {
        this.get_objectData().get_properties()['EmailBodyWithTeamMailbox'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'EmailBodyWithTeamMailbox', value));
        }
        return value;
    },
    
    get_emailSubject: function SP_InformationPolicy_ProjectPolicy$get_emailSubject$in() {
        this.checkUninitializedProperty('EmailSubject');
        return (this.get_objectData().get_properties()['EmailSubject']);
    },
    
    set_emailSubject: function SP_InformationPolicy_ProjectPolicy$set_emailSubject$in(value) {
        this.get_objectData().get_properties()['EmailSubject'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'EmailSubject', value));
        }
        return value;
    },
    
    get_name: function SP_InformationPolicy_ProjectPolicy$get_name$in() {
        this.checkUninitializedProperty('Name');
        return (this.get_objectData().get_properties()['Name']);
    },
    
    initPropertiesFromJson: function SP_InformationPolicy_ProjectPolicy$initPropertiesFromJson$in(parentNode) {
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
    
    savePolicy: function SP_InformationPolicy_ProjectPolicy$savePolicy$in() {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'SavePolicy', null);
        $v_0.addQuery($v_1);
    }
}


SP.InformationPolicy.ProjectPolicyPropertyNames = function SP_InformationPolicy_ProjectPolicyPropertyNames() {
}


SP.Discovery.Case.registerClass('SP.Discovery.Case', SP.ClientObject);
SP.Discovery.Export.registerClass('SP.Discovery.Export', SP.ClientObject);
SP.Discovery.ExportPropertyNames.registerClass('SP.Discovery.ExportPropertyNames');
SP.InformationPolicy.ProjectPolicy.registerClass('SP.InformationPolicy.ProjectPolicy', SP.ClientObject);
SP.InformationPolicy.ProjectPolicyPropertyNames.registerClass('SP.InformationPolicy.ProjectPolicyPropertyNames');
function sp_policy_initialize() {
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
