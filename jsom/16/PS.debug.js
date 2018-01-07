function ULSyTi(){var o=new Object;o.ULSTeamName="Project Server";o.ULSFileName="PS.debug.js";return o;}
// JScript File


Type.registerNamespace('PS');

PS.AccrueAt = function() {}
PS.AccrueAt.prototype = {
    notSpecified: 0, 
    start: 1, 
    end: 2, 
    prorated: 3
}
PS.AccrueAt.registerEnum('PS.AccrueAt', false);


PS.BookingType = function() {}
PS.BookingType.prototype = {
    notSpecified: 0, 
    committed: 1, 
    proposed: 2
}
PS.BookingType.registerEnum('PS.BookingType', false);


PS.CalendarRecurrenceDays = function() {}
PS.CalendarRecurrenceDays.prototype = {
    notSpecified: 0, 
    sunday: 1, 
    monday: 2, 
    tuesday: 4, 
    wednesday: 8, 
    thursday: 16, 
    friday: 32, 
    saturday: 64
}
PS.CalendarRecurrenceDays.registerEnum('PS.CalendarRecurrenceDays', true);


PS.CalendarRecurrenceType = function() {}
PS.CalendarRecurrenceType.prototype = {
    daily: 0, 
    dailySkip: 1, 
    weekly: 2, 
    monthly: 3, 
    yearly: 4
}
PS.CalendarRecurrenceType.registerEnum('PS.CalendarRecurrenceType', false);


PS.CalendarRecurrenceWeek = function() {}
PS.CalendarRecurrenceWeek.prototype = {
    notSpecified: 0, 
    first: 1, 
    second: 2, 
    third: 3, 
    fourth: 4, 
    last: 5
}
PS.CalendarRecurrenceWeek.registerEnum('PS.CalendarRecurrenceWeek', false);


PS.CommittedDecisionResult = function() {}
PS.CommittedDecisionResult.prototype = {
    notSpecified: 0, 
    forcedIn: 1, 
    forcedOut: 2, 
    committedOut: 3, 
    committedIn: 4
}
PS.CommittedDecisionResult.registerEnum('PS.CommittedDecisionResult', false);


PS.ConstraintType = function() {}
PS.ConstraintType.prototype = {
    notSpecified: 0, 
    asSoonAsPossible: 1, 
    asLateAsPossible: 2, 
    mustStartOn: 3, 
    mustFinishOn: 4, 
    startNoEarlierThan: 5, 
    startNoLaterThan: 6, 
    finishNoEarlierThan: 7, 
    finishNoLaterThan: 8
}
PS.ConstraintType.registerEnum('PS.ConstraintType', false);


PS.CurrencySymbolPosition = function() {}
PS.CurrencySymbolPosition.prototype = {
    notSpecified: 0, 
    before: 1, 
    after: 2, 
    beforeWithSpace: 3, 
    afterWithSpace: 4
}
PS.CurrencySymbolPosition.registerEnum('PS.CurrencySymbolPosition', false);


PS.CustomFieldRollupType = function() {}
PS.CustomFieldRollupType.prototype = {
    notSpecified: 0, 
    max: 1, 
    min: 2, 
    count: 3, 
    sum: 4, 
    average: 5, 
    averageSublevel: 6, 
    countSublevel: 7, 
    countNonSummary: 8, 
    stdDev: 9, 
    formula: 10, 
    none: 11
}
PS.CustomFieldRollupType.registerEnum('PS.CustomFieldRollupType', false);


PS.CustomFieldType = function() {}
PS.CustomFieldType.prototype = {
    COST: 9, 
    DATE: 4, 
    FINISHDATE: 27, 
    DURATION: 6, 
    FLAG: 17, 
    NUMBER: 15, 
    TEXT: 21
}
PS.CustomFieldType.registerEnum('PS.CustomFieldType', false);


PS.DependencyType = function() {}
PS.DependencyType.prototype = {
    finishFinish: 0, 
    finishStart: 1, 
    startFinish: 2, 
    startStart: 3
}
PS.DependencyType.registerEnum('PS.DependencyType', false);


PS.EnterpriseResourceType = function() {}
PS.EnterpriseResourceType.prototype = {
    notSpecified: 0, 
    work: 1, 
    material: 2
}
PS.EnterpriseResourceType.registerEnum('PS.EnterpriseResourceType', false);


PS.FixedCostAccrual = function() {}
PS.FixedCostAccrual.prototype = {
    notSpecified: 0, 
    start: 1, 
    end: 2, 
    prorated: 3
}
PS.FixedCostAccrual.registerEnum('PS.FixedCostAccrual', false);


PS.JobState = function() {}
PS.JobState.prototype = {
    unknown: 0, 
    readyForProcessing: 1, 
    sendIncomplete: 2, 
    processing: 3, 
    success: 4, 
    failed: 5, 
    failedNotBlocking: 6, 
    processingDeferred: 7, 
    correlationBlocked: 8, 
    canceled: 9, 
    onHold: 10, 
    sleeping: 11, 
    readyForLaunch: 12, 
    lastState: 13
}
PS.JobState.registerEnum('PS.JobState', false);


PS.LookupTableConstants = function() {}
PS.LookupTableConstants.prototype = {
    maxSeparatorLength: 3, 
    anyLengthSequence: 0, 
    minValueLength: 1, 
    maxValueLength: 255, 
    maxDescriptionLength: 255, 
    minLevel: 1, 
    maxLevel: 255, 
    noSortOrder: 0
}
PS.LookupTableConstants.registerEnum('PS.LookupTableConstants', false);


PS.LookupTableMaskSequence = function() {}
PS.LookupTableMaskSequence.prototype = {
    numbeR_TEXT: 0, 
    UPPERCASE: 1, 
    LOWERCASE: 2, 
    CHARACTERS: 3, 
    DATE: 4, 
    COST: 5, 
    DURATION: 6, 
    numbeR_DECIMAL: 7, 
    FLAG: 8
}
PS.LookupTableMaskSequence.registerEnum('PS.LookupTableMaskSequence', false);


PS.LookupTableSortOrder = function() {}
PS.LookupTableSortOrder.prototype = {
    userDefined: 0, 
    ascending: 1, 
    descending: 2
}
PS.LookupTableSortOrder.registerEnum('PS.LookupTableSortOrder', false);


PS.OvertimeRateFormat = function() {}
PS.OvertimeRateFormat.prototype = {
    minute: 1, 
    hour: 2, 
    day: 3, 
    week: 4, 
    month: 5, 
    year: 7, 
    material: 8
}
PS.OvertimeRateFormat.registerEnum('PS.OvertimeRateFormat', false);


PS.ProjectDetailPageType = function() {}
PS.ProjectDetailPageType.prototype = {
    none: 0, 
    projectDefault: 1, 
    newProject: 2, 
    workflowStatus: 3
}
PS.ProjectDetailPageType.registerEnum('PS.ProjectDetailPageType', false);


PS.ProjectType = function() {}
PS.ProjectType.prototype = {
    minRequestValue: 0, 
    notSpecified: -1, 
    project: 0, 
    template: 1, 
    global: 2, 
    resGlobal: 3, 
    lightWeightProject: 4, 
    insertedProject: 5, 
    masterProject: 6, 
    timesheetAdminProject: 7, 
    newProject: 100, 
    newTemplate: 101, 
    newGlobal: 102, 
    newResGlobal: 103, 
    inactiveProject: 1000, 
    inactiveTemplate: 1001, 
    inactiveGlobal: 1002, 
    newOffset: 100, 
    inactiveOffset: 1000, 
    maxRequestValue: 101
}
PS.ProjectType.registerEnum('PS.ProjectType', false);


PS.ProjectUtilizationType = function() {}
PS.ProjectUtilizationType.prototype = {
    projectPlan: 0, 
    resourceEngagements: 1, 
    projectPlanUntil: 2
}
PS.ProjectUtilizationType.registerEnum('PS.ProjectUtilizationType', false);


PS.QueueMsgType = function() {}
PS.QueueMsgType.prototype = {
    unknown: 0, 
    acProjectSave: 1, 
    adSyncERP: 2, 
    adSyncGroup: 3, 
    archiveCategories: 4, 
    archiveCustomFields: 5, 
    archiveGlobalProject: 6, 
    archiveResources: 7, 
    archiveSystemSettings: 8, 
    archiveViews: 9, 
    bumpPriority: 10, 
    cbsProjRendezvous: 11, 
    cbsRequest: 12, 
    cbsTsRendezvous: 13, 
    createProposalProject: 14, 
    createWssSite: 15, 
    deleteWssSite: 16, 
    lwpUpgradeToProject: 17, 
    notificationMessage: 18, 
    projectArchive: 19, 
    projectArchiveRetentionDelete: 20, 
    projectCheckIn: 21, 
    projectCreate: 22, 
    projectDelete: 23, 
    projectPublish: 24, 
    projectRename: 25, 
    projectRestore: 26, 
    projectReversePublish: 27, 
    projectUpdate: 28, 
    projectUpdateTeam: 29, 
    publishNotifications: 30, 
    queueCleanup: 31, 
    reportingAttributeCubeSettingsSync: 32, 
    reportingBaseCalendarSync: 33, 
    reportingCustomFieldMetadataSync: 34, 
    reportingEntityUserViewRefresh: 35, 
    reportingFiscalPeriodsSync: 36, 
    reportingLookupTableSync: 37, 
    reportingProjectDelete: 38, 
    reportingProjectPublish: 39, 
    reportingResourcesCapacityRangeSync: 40, 
    reportingResourceSync: 41, 
    reportingTimesheetAdjust: 42, 
    reportingTimesheetClassSync: 43, 
    reportingTimesheetDelete: 44, 
    reportingTimesheetPeriodDelete: 45, 
    reportingTimesheetPeriodSync: 46, 
    reportingTimesheetSave: 47, 
    reportingTimesheetStatusSync: 48, 
    reportingWSSSync: 49, 
    resourcePlanCheckIn: 50, 
    resourcePlanDelete: 51, 
    resourcePlanPublish: 52, 
    resourcePlanSave: 53, 
    restoreCategories: 54, 
    restoreCustomFields: 55, 
    restoreGlobalProject: 56, 
    restoreResources: 57, 
    restoreSystemSettings: 58, 
    restoreViews: 59, 
    rulesProcessAll: 60, 
    rulesProcessAllAutoForManager: 61, 
    rulesProcessAllForManager: 62, 
    rulesProcessSingleForManager: 63, 
    statusApproval: 64, 
    timer1: 65, 
    timer10: 66, 
    timer2: 67, 
    timer3: 68, 
    timer4: 69, 
    timer5: 70, 
    timer6: 71, 
    timer7: 72, 
    timer8: 73, 
    timer9: 74, 
    timerMessage: 75, 
    timerRzNotify: 76, 
    timerRzProj: 77, 
    timerRzTS: 78, 
    timesheetMessage: 79, 
    timesheetDelete: 80, 
    timesheetRecall: 81, 
    timesheetReview: 82, 
    timesheetSubmit: 83, 
    timesheetUpdate: 84, 
    reportingSyncGlobalData: 85, 
    synchronizeMembershipForWssSite: 86, 
    synchronizeSingleUserMembershipInWss: 87, 
    reportingRefresh: 88, 
    updateScheduledProject: 89, 
    workflowStartWorkflow: 90, 
    analysisDelete: 91, 
    analysisCreate: 92, 
    analysisUpdate: 93, 
    plannerSolutionCreate: 94, 
    plannerSolutionDelete: 95, 
    optimizerSolutionCreate: 96, 
    optimizerSolutionDelete: 97, 
    timesheetLineApproval: 98, 
    periodicTasks: 99, 
    pdpUpdateProjectImpacts: 100, 
    exchangeSyncTasks: 101, 
    reportingAttributeCubeDepartmentSync: 102, 
    reportingTimesheetProjectAggregation: 103, 
    reportingTimesheetAssignmentsUpgrade: 104, 
    workflowCheckinNotify: 105, 
    workflowChangeWorkflow: 106, 
    projectPublishSummary: 107, 
    reportingOlapDatabaseSettingsSync: 108, 
    reportingWorkflowMetadataSync: 109, 
    reportWorkflowProjectDataSync: 110, 
    reportEptSync: 111, 
    reportingSummaryPublish: 112, 
    reportingSolutionCommitedDecisionSync: 113, 
    workflowCommitNotify: 114, 
    reportingTimesheetAssignmentsRefresh: 115, 
    updateProjectSitePath: 116, 
    addSingleUserMembershipInWss: 117, 
    deleteSingleUserMembershipInWss: 118, 
    timeSheetUpdateResourceNonWorkingTime: 119, 
    syncProjectEnterpriseEntities: 120, 
    lastMessage: 121, 
    exchangeCalOofSync: 122, 
    preparePSPermissionSynchronization: 123, 
    psPermissionSynchronizePWASite: 124, 
    psPermissionSynchronizeProjectSite: 125, 
    preparePSProjectPermissionSynchronization: 126, 
    scheduleWebPartSave: 127, 
    projectImportTaskList: 128, 
    timesheetUpdateSRAForResource: 129, 
    activeMonitorCheck: 130, 
    managedModeTaskSynchronization: 131, 
    resourcePlanMigrate: 132
}
PS.QueueMsgType.registerEnum('PS.QueueMsgType', false);


PS.ReadyToLeaveProjectStageValue = function() {}
PS.ReadyToLeaveProjectStageValue.prototype = {
    ready: 0, 
    requiresFieldsAndDrivers: 1, 
    requiresDrivers: 2, 
    requiresFields: 3
}
PS.ReadyToLeaveProjectStageValue.registerEnum('PS.ReadyToLeaveProjectStageValue', false);


PS.ResourceType = function() {}
PS.ResourceType.prototype = {
    winProjScratchpadResource: -1, 
    winProjUnknownResource: -2, 
    winProjUnassignedResource: -3, 
    winProjSummaryResource: -4, 
    pureUser: 1, 
    workResource: 2, 
    caN_LOG_IN_MAXIMUM: 20, 
    genericWorkResource: 20, 
    materialResource: 21, 
    genericMaterialResource: 22, 
    costResources: 25, 
    genericCostResources: 26, 
    iS_NONBUDGET_TYPE_MAXIMUM: 50, 
    budgetWorkResource: 50, 
    budgetCostResource: 51, 
    budgetMaterialResource: 52, 
    genericBudgetWorkResource: 53, 
    genericBudgetCostResource: 54, 
    genericBudgetMaterialResource: 55, 
    inactivateD_OFFSET: 100
}
PS.ResourceType.registerEnum('PS.ResourceType', false);


PS.StandardRateFormat = function() {}
PS.StandardRateFormat.prototype = {
    minute: 1, 
    hour: 2, 
    day: 3, 
    week: 4, 
    month: 5, 
    year: 7, 
    material: 8
}
PS.StandardRateFormat.registerEnum('PS.StandardRateFormat', false);


PS.StatusApprovalType = function() {}
PS.StatusApprovalType.prototype = {
    none: 0, 
    accepted: 1, 
    rejected: 2
}
PS.StatusApprovalType.registerEnum('PS.StatusApprovalType', false);


PS.StatusUpdateType = function() {}
PS.StatusUpdateType.prototype = {
    update: 0, 
    decline: 1, 
    createTask: 2, 
    delegate: 3, 
    createAssignment: 4, 
    teamDelegate: 5, 
    deleteTask: 6, 
    deleteAssignment: 7
}
PS.StatusUpdateType.registerEnum('PS.StatusUpdateType', false);


PS.StrategicImpactBehavior = function() {}
PS.StrategicImpactBehavior.prototype = {
    notSpecified: 0, 
    readOnly: 1, 
    readWrite: 2, 
    required: 3
}
PS.StrategicImpactBehavior.registerEnum('PS.StrategicImpactBehavior', false);


PS.TaskType = function() {}
PS.TaskType.prototype = {
    fixedUnits: 0, 
    fixedDuration: 1, 
    fixedWork: 2, 
    dummy: 1000
}
PS.TaskType.registerEnum('PS.TaskType', false);


PS.TimeScale = function() {}
PS.TimeScale.prototype = {
    days: 3, 
    weeks: 4, 
    months: 5, 
    quarters: 6, 
    years: 7
}
PS.TimeScale.registerEnum('PS.TimeScale', false);


PS.TimeSheetEntryMode = function() {}
PS.TimeSheetEntryMode.prototype = {
    notSpecified: 0, 
    daily: 1, 
    weekly: 2
}
PS.TimeSheetEntryMode.registerEnum('PS.TimeSheetEntryMode', false);


PS.TimeSheetLineClass = function() {}
PS.TimeSheetLineClass.prototype = {
    standardLine: 0, 
    sickTimeLine: 1, 
    vacationLine: 2, 
    administrativeLine: 3
}
PS.TimeSheetLineClass.registerEnum('PS.TimeSheetLineClass', false);


PS.TimeSheetLineStatus = function() {}
PS.TimeSheetLineStatus.prototype = {
    notSpecified: 0, 
    pending: 1, 
    approved: 2, 
    rejected: 3, 
    notApplicable: 4, 
    pendingApproval: 5
}
PS.TimeSheetLineStatus.registerEnum('PS.TimeSheetLineStatus', false);


PS.TimeSheetStatus = function() {}
PS.TimeSheetStatus.prototype = {
    notSpecified: 0, 
    inProgress: 1, 
    submitted: 2, 
    acceptable: 3, 
    approved: 4, 
    rejected: 5, 
    pendingSubmit: 6
}
PS.TimeSheetStatus.registerEnum('PS.TimeSheetStatus', false);


PS.TimeSheetValidationType = function() {}
PS.TimeSheetValidationType.prototype = {
    unverified: 0, 
    verified: 1, 
    projectLevel: 2
}
PS.TimeSheetValidationType.registerEnum('PS.TimeSheetValidationType', false);


PS.TrackingMode = function() {}
PS.TrackingMode.prototype = {
    none: 0, 
    timePhased: 1, 
    percentComplete: 2, 
    actualHours: 3
}
PS.TrackingMode.registerEnum('PS.TrackingMode', false);


PS.UpdateProjectStageStatusFieldValue = function() {}
PS.UpdateProjectStageStatusFieldValue.prototype = {
    none: 0, 
    waitingForInput: 1, 
    waitingForApproval: 2, 
    workflowProcessing: 3
}
PS.UpdateProjectStageStatusFieldValue.registerEnum('PS.UpdateProjectStageStatusFieldValue', false);


PS.UtilizationType = function() {}
PS.UtilizationType.prototype = {
    fromProjectPlan: 0, 
    fromResourcePlan: 1, 
    fromProjectPlanThenResourcePlan: 2
}
PS.UtilizationType.registerEnum('PS.UtilizationType', false);


PS.WorkContourType = function() {}
PS.WorkContourType.prototype = {
    flat: 0, 
    backLoaded: 1, 
    frontLoaded: 2, 
    doublePeak: 3, 
    earlyPeak: 4, 
    latePeak: 5, 
    bell: 6, 
    turtle: 7, 
    userDefined: 8
}
PS.WorkContourType.registerEnum('PS.WorkContourType', false);


PS.WorkFormat = function() {}
PS.WorkFormat.prototype = {
    minute: 1, 
    hour: 2, 
    day: 3, 
    week: 4, 
    month: 5
}
PS.WorkFormat.registerEnum('PS.WorkFormat', false);


PS.ProjectContext = function PS_ProjectContext(url) {ULSyTi:;
    PS.ProjectContext.initializeBase(this, [ url ]);
    this.$4_2 = PS.ProjectServer.newObject(this);
    this.$1j_2 = PS.ServiceStatus.newObject(this, this.$4_2);
}
PS.ProjectContext.get_current = function PS_ProjectContext$get_current$st() {ULSyTi:;
    if (!PS.ProjectContext.$1i) {
        if (SP.ClientContext.get_current()) {
            var $v_0 = new PS.ProjectContext(SP.ClientContext.get_current().get_url());
            $v_0.set_isPageUrl(SP.ClientContext.get_current().get_isPageUrl());
            PS.ProjectContext.$1i = $v_0;
        }
    }
    return PS.ProjectContext.$1i;
}
PS.ProjectContext.prototype = {
    $4_2: null,
    $1j_2: null,
    
    get_workflowActivities: function PS_ProjectContext$get_workflowActivities$in() {ULSyTi:;
        return this.$4_2.get_workflowActivities();
    },
    
    get_workflowDesigner: function PS_ProjectContext$get_workflowDesigner$in() {ULSyTi:;
        return this.$4_2.get_workflowDesigner();
    },
    
    get_entityTypes: function PS_ProjectContext$get_entityTypes$in() {ULSyTi:;
        return this.$4_2.get_entityTypes();
    },
    
    get_projects: function PS_ProjectContext$get_projects$in() {ULSyTi:;
        return this.$4_2.get_projects();
    },
    
    get_customFields: function PS_ProjectContext$get_customFields$in() {ULSyTi:;
        return this.$4_2.get_customFields();
    },
    
    get_lookupTables: function PS_ProjectContext$get_lookupTables$in() {ULSyTi:;
        return this.$4_2.get_lookupTables();
    },
    
    get_enterpriseProjectTypes: function PS_ProjectContext$get_enterpriseProjectTypes$in() {ULSyTi:;
        return this.$4_2.get_enterpriseProjectTypes();
    },
    
    get_phases: function PS_ProjectContext$get_phases$in() {ULSyTi:;
        return this.$4_2.get_phases();
    },
    
    get_stages: function PS_ProjectContext$get_stages$in() {ULSyTi:;
        return this.$4_2.get_stages();
    },
    
    get_projectDetailPages: function PS_ProjectContext$get_projectDetailPages$in() {ULSyTi:;
        return this.$4_2.get_projectDetailPages();
    },
    
    get_enterpriseResources: function PS_ProjectContext$get_enterpriseResources$in() {ULSyTi:;
        return this.$4_2.get_enterpriseResources();
    },
    
    get_events: function PS_ProjectContext$get_events$in() {ULSyTi:;
        return this.$4_2.get_events();
    },
    
    get_eventHandlers: function PS_ProjectContext$get_eventHandlers$in() {ULSyTi:;
        return this.$4_2.get_eventHandlers();
    },
    
    get_timeSheetPeriods: function PS_ProjectContext$get_timeSheetPeriods$in() {ULSyTi:;
        return this.$4_2.get_timeSheetPeriods();
    },
    
    get_calendars: function PS_ProjectContext$get_calendars$in() {ULSyTi:;
        return this.$4_2.get_calendars();
    },
    
    get_serviceStatus: function PS_ProjectContext$get_serviceStatus$in() {ULSyTi:;
        return this.$1j_2;
    },
    
    getDeletedPublishedAssignments: function PS_ProjectContext$getDeletedPublishedAssignments$in(deletedDate) {ULSyTi:;
        return this.$4_2.getDeletedPublishedAssignments(deletedDate);
    },
    
    waitForQueueAsync: function PS_ProjectContext$waitForQueueAsync$in(job, timeoutSeconds, callback) {ULSyTi:;
        var $v_0 = new PS.ProjectContext.QueueJobPoll(this, job, timeoutSeconds, callback);
        $v_0.run();
    }
}




PS.ProjectContext.QueueJobPoll = function PS_ProjectContext_QueueJobPoll(context, job, timeoutSeconds, callback) {ULSyTi:;
    this.$$d_$1n_0 = Function.createDelegate(this, this.$1n_0);
    this.$$d_$1o_0 = Function.createDelegate(this, this.$1o_0);
    this.$$d_$1r_0 = Function.createDelegate(this, this.$1r_0);
    this.$N_0 = context;
    this.$H_0 = job;
    this.$O_0 = timeoutSeconds;
    this.$M_0 = callback;
}
PS.ProjectContext.QueueJobPoll.prototype = {
    $N_0: null,
    $H_0: null,
    $O_0: 0,
    $M_0: null,
    
    run: function PS_ProjectContext_QueueJobPoll$run$in() {ULSyTi:;
        this.$1n_0();
    },
    
    $1p_0: function PS_ProjectContext_QueueJobPoll$$1p_0$in($p0) {
        $p0.val = 0;
        if (!this.$H_0.get_serverObjectIsNull()) {
            $p0.val = this.$H_0.get_jobState();
            switch ($p0.val) {
                case 10:
                case 3:
                case 7:
                case 12:
                case 1:
                case 2:
                case 11:
                case 0:
                    return true;
            }
        }
        $p0.val = 4;
        return false;
    },
    
    $1n_0: function PS_ProjectContext_QueueJobPoll$$1n_0$in() {ULSyTi:;
        this.$O_0 -= 2;
        this.$N_0.load(this.$H_0);
        this.$N_0.executeQueryAsync(this.$$d_$1r_0, this.$$d_$1o_0);
    },
    
    $1r_0: function PS_ProjectContext_QueueJobPoll$$1r_0$in($p0, $p1) {
        var $v_0;
        var $$t_3, $$t_4;
        if ((($$t_4 = this.$1p_0(($$t_3 = {'val': $v_0}))), $v_0 = $$t_3.val, $$t_4) && this.$O_0 > 0) {
            window.setTimeout(this.$$d_$1n_0, 2000);
        }
        else {
            this.$M_0($v_0);
        }
    },
    
    $1o_0: function PS_ProjectContext_QueueJobPoll$$1o_0$in($p0, $p1) {
        this.$M_0(0);
    }
}


PS.Assignment = function PS_Assignment(context, objectPath) {ULSyTi:;
    PS.Assignment.initializeBase(this, [ context, objectPath ]);
}
PS.Assignment.prototype = {
    
    get_actualCostWorkPerformed: function PS_Assignment$get_actualCostWorkPerformed$in() {ULSyTi:;
        this.checkUninitializedProperty('ActualCostWorkPerformed');
        return (this.get_objectData().get_properties()['ActualCostWorkPerformed']);
    },
    
    get_actualOvertimeCost: function PS_Assignment$get_actualOvertimeCost$in() {ULSyTi:;
        this.checkUninitializedProperty('ActualOvertimeCost');
        return (this.get_objectData().get_properties()['ActualOvertimeCost']);
    },
    
    get_baselineCost: function PS_Assignment$get_baselineCost$in() {ULSyTi:;
        this.checkUninitializedProperty('BaselineCost');
        return (this.get_objectData().get_properties()['BaselineCost']);
    },
    
    get_baselineCostPerUse: function PS_Assignment$get_baselineCostPerUse$in() {ULSyTi:;
        this.checkUninitializedProperty('BaselineCostPerUse');
        return (this.get_objectData().get_properties()['BaselineCostPerUse']);
    },
    
    get_baselineFinish: function PS_Assignment$get_baselineFinish$in() {ULSyTi:;
        this.checkUninitializedProperty('BaselineFinish');
        return (this.get_objectData().get_properties()['BaselineFinish']);
    },
    
    get_baselineStart: function PS_Assignment$get_baselineStart$in() {ULSyTi:;
        this.checkUninitializedProperty('BaselineStart');
        return (this.get_objectData().get_properties()['BaselineStart']);
    },
    
    get_baselineWork: function PS_Assignment$get_baselineWork$in() {ULSyTi:;
        this.checkUninitializedProperty('BaselineWork');
        return (this.get_objectData().get_properties()['BaselineWork']);
    },
    
    get_baselineWorkMilliseconds: function PS_Assignment$get_baselineWorkMilliseconds$in() {ULSyTi:;
        this.checkUninitializedProperty('BaselineWorkMilliseconds');
        return (this.get_objectData().get_properties()['BaselineWorkMilliseconds']);
    },
    
    get_budgetedCostWorkPerformed: function PS_Assignment$get_budgetedCostWorkPerformed$in() {ULSyTi:;
        this.checkUninitializedProperty('BudgetedCostWorkPerformed');
        return (this.get_objectData().get_properties()['BudgetedCostWorkPerformed']);
    },
    
    get_budgetedCostWorkScheduled: function PS_Assignment$get_budgetedCostWorkScheduled$in() {ULSyTi:;
        this.checkUninitializedProperty('BudgetedCostWorkScheduled');
        return (this.get_objectData().get_properties()['BudgetedCostWorkScheduled']);
    },
    
    get_costVariance: function PS_Assignment$get_costVariance$in() {ULSyTi:;
        this.checkUninitializedProperty('CostVariance');
        return (this.get_objectData().get_properties()['CostVariance']);
    },
    
    get_costVarianceAtCompletion: function PS_Assignment$get_costVarianceAtCompletion$in() {ULSyTi:;
        this.checkUninitializedProperty('CostVarianceAtCompletion');
        return (this.get_objectData().get_properties()['CostVarianceAtCompletion']);
    },
    
    get_created: function PS_Assignment$get_created$in() {ULSyTi:;
        this.checkUninitializedProperty('Created');
        return (this.get_objectData().get_properties()['Created']);
    },
    
    get_currentCostVariance: function PS_Assignment$get_currentCostVariance$in() {ULSyTi:;
        this.checkUninitializedProperty('CurrentCostVariance');
        return (this.get_objectData().get_properties()['CurrentCostVariance']);
    },
    
    get_customFields: function PS_Assignment$get_customFields$in() {ULSyTi:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['CustomFields']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new PS.CustomFieldCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'CustomFields'));
            this.get_objectData().get_clientObjectProperties()['CustomFields'] = $v_0;
        }
        return $v_0;
    },
    
    get_delay: function PS_Assignment$get_delay$in() {ULSyTi:;
        this.checkUninitializedProperty('Delay');
        return (this.get_objectData().get_properties()['Delay']);
    },
    
    get_delayMilliseconds: function PS_Assignment$get_delayMilliseconds$in() {ULSyTi:;
        this.checkUninitializedProperty('DelayMilliseconds');
        return (this.get_objectData().get_properties()['DelayMilliseconds']);
    },
    
    get_finish: function PS_Assignment$get_finish$in() {ULSyTi:;
        this.checkUninitializedProperty('Finish');
        return (this.get_objectData().get_properties()['Finish']);
    },
    
    get_finishVariance: function PS_Assignment$get_finishVariance$in() {ULSyTi:;
        this.checkUninitializedProperty('FinishVariance');
        return (this.get_objectData().get_properties()['FinishVariance']);
    },
    
    get_finishVarianceMilliseconds: function PS_Assignment$get_finishVarianceMilliseconds$in() {ULSyTi:;
        this.checkUninitializedProperty('FinishVarianceMilliseconds');
        return (this.get_objectData().get_properties()['FinishVarianceMilliseconds']);
    },
    
    get_id: function PS_Assignment$get_id$in() {ULSyTi:;
        this.checkUninitializedProperty('Id');
        return (this.get_objectData().get_properties()['Id']);
    },
    
    get_isConfirmed: function PS_Assignment$get_isConfirmed$in() {ULSyTi:;
        this.checkUninitializedProperty('IsConfirmed');
        return (this.get_objectData().get_properties()['IsConfirmed']);
    },
    
    get_isOverAllocated: function PS_Assignment$get_isOverAllocated$in() {ULSyTi:;
        this.checkUninitializedProperty('IsOverAllocated');
        return (this.get_objectData().get_properties()['IsOverAllocated']);
    },
    
    get_isPublished: function PS_Assignment$get_isPublished$in() {ULSyTi:;
        this.checkUninitializedProperty('IsPublished');
        return (this.get_objectData().get_properties()['IsPublished']);
    },
    
    get_isResponsePending: function PS_Assignment$get_isResponsePending$in() {ULSyTi:;
        this.checkUninitializedProperty('IsResponsePending');
        return (this.get_objectData().get_properties()['IsResponsePending']);
    },
    
    get_isUpdateNeeded: function PS_Assignment$get_isUpdateNeeded$in() {ULSyTi:;
        this.checkUninitializedProperty('IsUpdateNeeded');
        return (this.get_objectData().get_properties()['IsUpdateNeeded']);
    },
    
    get_levelingDelay: function PS_Assignment$get_levelingDelay$in() {ULSyTi:;
        this.checkUninitializedProperty('LevelingDelay');
        return (this.get_objectData().get_properties()['LevelingDelay']);
    },
    
    get_levelingDelayMilliseconds: function PS_Assignment$get_levelingDelayMilliseconds$in() {ULSyTi:;
        this.checkUninitializedProperty('LevelingDelayMilliseconds');
        return (this.get_objectData().get_properties()['LevelingDelayMilliseconds']);
    },
    
    get_modified: function PS_Assignment$get_modified$in() {ULSyTi:;
        this.checkUninitializedProperty('Modified');
        return (this.get_objectData().get_properties()['Modified']);
    },
    
    get_notes: function PS_Assignment$get_notes$in() {ULSyTi:;
        this.checkUninitializedProperty('Notes');
        return (this.get_objectData().get_properties()['Notes']);
    },
    
    get_overtimeCost: function PS_Assignment$get_overtimeCost$in() {ULSyTi:;
        this.checkUninitializedProperty('OvertimeCost');
        return (this.get_objectData().get_properties()['OvertimeCost']);
    },
    
    get_remainingCost: function PS_Assignment$get_remainingCost$in() {ULSyTi:;
        this.checkUninitializedProperty('RemainingCost');
        return (this.get_objectData().get_properties()['RemainingCost']);
    },
    
    get_remainingOvertimeCost: function PS_Assignment$get_remainingOvertimeCost$in() {ULSyTi:;
        this.checkUninitializedProperty('RemainingOvertimeCost');
        return (this.get_objectData().get_properties()['RemainingOvertimeCost']);
    },
    
    get_resume: function PS_Assignment$get_resume$in() {ULSyTi:;
        this.checkUninitializedProperty('Resume');
        return (this.get_objectData().get_properties()['Resume']);
    },
    
    get_scheduleCostVariance: function PS_Assignment$get_scheduleCostVariance$in() {ULSyTi:;
        this.checkUninitializedProperty('ScheduleCostVariance');
        return (this.get_objectData().get_properties()['ScheduleCostVariance']);
    },
    
    get_start: function PS_Assignment$get_start$in() {ULSyTi:;
        this.checkUninitializedProperty('Start');
        return (this.get_objectData().get_properties()['Start']);
    },
    
    get_startVariance: function PS_Assignment$get_startVariance$in() {ULSyTi:;
        this.checkUninitializedProperty('StartVariance');
        return (this.get_objectData().get_properties()['StartVariance']);
    },
    
    get_startVarianceMilliseconds: function PS_Assignment$get_startVarianceMilliseconds$in() {ULSyTi:;
        this.checkUninitializedProperty('StartVarianceMilliseconds');
        return (this.get_objectData().get_properties()['StartVarianceMilliseconds']);
    },
    
    get_stop: function PS_Assignment$get_stop$in() {ULSyTi:;
        this.checkUninitializedProperty('Stop');
        return (this.get_objectData().get_properties()['Stop']);
    },
    
    get_workContourType: function PS_Assignment$get_workContourType$in() {ULSyTi:;
        this.checkUninitializedProperty('WorkContourType');
        return (this.get_objectData().get_properties()['WorkContourType']);
    },
    
    get_workVariance: function PS_Assignment$get_workVariance$in() {ULSyTi:;
        this.checkUninitializedProperty('WorkVariance');
        return (this.get_objectData().get_properties()['WorkVariance']);
    },
    
    get_workVarianceMilliseconds: function PS_Assignment$get_workVarianceMilliseconds$in() {ULSyTi:;
        this.checkUninitializedProperty('WorkVarianceMilliseconds');
        return (this.get_objectData().get_properties()['WorkVarianceMilliseconds']);
    },
    
    initPropertiesFromJson: function PS_Assignment$initPropertiesFromJson$in(parentNode) {ULSyTi:;
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.ActualCostWorkPerformed;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ActualCostWorkPerformed'] = ($v_0);
            delete parentNode.ActualCostWorkPerformed;
        }
        $v_0 = parentNode.ActualOvertimeCost;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ActualOvertimeCost'] = ($v_0);
            delete parentNode.ActualOvertimeCost;
        }
        $v_0 = parentNode.BaselineCost;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['BaselineCost'] = ($v_0);
            delete parentNode.BaselineCost;
        }
        $v_0 = parentNode.BaselineCostPerUse;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['BaselineCostPerUse'] = ($v_0);
            delete parentNode.BaselineCostPerUse;
        }
        $v_0 = parentNode.BaselineFinish;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['BaselineFinish'] = ($v_0);
            delete parentNode.BaselineFinish;
        }
        $v_0 = parentNode.BaselineStart;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['BaselineStart'] = ($v_0);
            delete parentNode.BaselineStart;
        }
        $v_0 = parentNode.BaselineWork;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['BaselineWork'] = ($v_0);
            delete parentNode.BaselineWork;
        }
        $v_0 = parentNode.BaselineWorkMilliseconds;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['BaselineWorkMilliseconds'] = ($v_0);
            delete parentNode.BaselineWorkMilliseconds;
        }
        $v_0 = parentNode.BudgetedCostWorkPerformed;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['BudgetedCostWorkPerformed'] = ($v_0);
            delete parentNode.BudgetedCostWorkPerformed;
        }
        $v_0 = parentNode.BudgetedCostWorkScheduled;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['BudgetedCostWorkScheduled'] = ($v_0);
            delete parentNode.BudgetedCostWorkScheduled;
        }
        $v_0 = parentNode.CostVariance;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['CostVariance'] = ($v_0);
            delete parentNode.CostVariance;
        }
        $v_0 = parentNode.CostVarianceAtCompletion;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['CostVarianceAtCompletion'] = ($v_0);
            delete parentNode.CostVarianceAtCompletion;
        }
        $v_0 = parentNode.Created;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Created'] = ($v_0);
            delete parentNode.Created;
        }
        $v_0 = parentNode.CurrentCostVariance;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['CurrentCostVariance'] = ($v_0);
            delete parentNode.CurrentCostVariance;
        }
        $v_0 = parentNode.CustomFields;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('CustomFields', this.get_customFields(), $v_0);
            this.get_customFields().fromJson($v_0);
            delete parentNode.CustomFields;
        }
        $v_0 = parentNode.Delay;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Delay'] = ($v_0);
            delete parentNode.Delay;
        }
        $v_0 = parentNode.DelayMilliseconds;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['DelayMilliseconds'] = ($v_0);
            delete parentNode.DelayMilliseconds;
        }
        $v_0 = parentNode.Finish;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Finish'] = ($v_0);
            delete parentNode.Finish;
        }
        $v_0 = parentNode.FinishVariance;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['FinishVariance'] = ($v_0);
            delete parentNode.FinishVariance;
        }
        $v_0 = parentNode.FinishVarianceMilliseconds;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['FinishVarianceMilliseconds'] = ($v_0);
            delete parentNode.FinishVarianceMilliseconds;
        }
        $v_0 = parentNode.Id;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Id'] = ($v_0);
            delete parentNode.Id;
        }
        $v_0 = parentNode.IsConfirmed;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['IsConfirmed'] = ($v_0);
            delete parentNode.IsConfirmed;
        }
        $v_0 = parentNode.IsOverAllocated;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['IsOverAllocated'] = ($v_0);
            delete parentNode.IsOverAllocated;
        }
        $v_0 = parentNode.IsPublished;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['IsPublished'] = ($v_0);
            delete parentNode.IsPublished;
        }
        $v_0 = parentNode.IsResponsePending;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['IsResponsePending'] = ($v_0);
            delete parentNode.IsResponsePending;
        }
        $v_0 = parentNode.IsUpdateNeeded;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['IsUpdateNeeded'] = ($v_0);
            delete parentNode.IsUpdateNeeded;
        }
        $v_0 = parentNode.LevelingDelay;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['LevelingDelay'] = ($v_0);
            delete parentNode.LevelingDelay;
        }
        $v_0 = parentNode.LevelingDelayMilliseconds;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['LevelingDelayMilliseconds'] = ($v_0);
            delete parentNode.LevelingDelayMilliseconds;
        }
        $v_0 = parentNode.Modified;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Modified'] = ($v_0);
            delete parentNode.Modified;
        }
        $v_0 = parentNode.Notes;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Notes'] = ($v_0);
            delete parentNode.Notes;
        }
        $v_0 = parentNode.OvertimeCost;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['OvertimeCost'] = ($v_0);
            delete parentNode.OvertimeCost;
        }
        $v_0 = parentNode.RemainingCost;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['RemainingCost'] = ($v_0);
            delete parentNode.RemainingCost;
        }
        $v_0 = parentNode.RemainingOvertimeCost;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['RemainingOvertimeCost'] = ($v_0);
            delete parentNode.RemainingOvertimeCost;
        }
        $v_0 = parentNode.Resume;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Resume'] = ($v_0);
            delete parentNode.Resume;
        }
        $v_0 = parentNode.ScheduleCostVariance;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ScheduleCostVariance'] = ($v_0);
            delete parentNode.ScheduleCostVariance;
        }
        $v_0 = parentNode.Start;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Start'] = ($v_0);
            delete parentNode.Start;
        }
        $v_0 = parentNode.StartVariance;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['StartVariance'] = ($v_0);
            delete parentNode.StartVariance;
        }
        $v_0 = parentNode.StartVarianceMilliseconds;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['StartVarianceMilliseconds'] = ($v_0);
            delete parentNode.StartVarianceMilliseconds;
        }
        $v_0 = parentNode.Stop;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Stop'] = ($v_0);
            delete parentNode.Stop;
        }
        $v_0 = parentNode.WorkContourType;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['WorkContourType'] = ((SP.DataConvert.fixupType(this.get_context(), $v_0)));
            delete parentNode.WorkContourType;
        }
        $v_0 = parentNode.WorkVariance;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['WorkVariance'] = ($v_0);
            delete parentNode.WorkVariance;
        }
        $v_0 = parentNode.WorkVarianceMilliseconds;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['WorkVarianceMilliseconds'] = ($v_0);
            delete parentNode.WorkVarianceMilliseconds;
        }
    }
}


PS.AssignmentPropertyNames = function PS_AssignmentPropertyNames() {
}


PS.AssignmentObjectPropertyNames = function PS_AssignmentObjectPropertyNames() {
}


PS.AssignmentCreationInformation = function PS_AssignmentCreationInformation() {ULSyTi:;
    PS.AssignmentCreationInformation.initializeBase(this);
}
PS.AssignmentCreationInformation.prototype = {
    $5_1: null,
    $0_1: null,
    $8_1: null,
    $F_1: null,
    $3_1: null,
    $1Z_1: null,
    
    get_finish: function PS_AssignmentCreationInformation$get_finish$in() {ULSyTi:;
        return this.$5_1;
    },
    
    set_finish: function PS_AssignmentCreationInformation$set_finish$in(value) {ULSyTi:;
        this.$5_1 = value;
        return value;
    },
    
    get_id: function PS_AssignmentCreationInformation$get_id$in() {ULSyTi:;
        return this.$0_1;
    },
    
    set_id: function PS_AssignmentCreationInformation$set_id$in(value) {ULSyTi:;
        this.$0_1 = value;
        return value;
    },
    
    get_notes: function PS_AssignmentCreationInformation$get_notes$in() {ULSyTi:;
        return this.$8_1;
    },
    
    set_notes: function PS_AssignmentCreationInformation$set_notes$in(value) {ULSyTi:;
        this.$8_1 = value;
        return value;
    },
    
    get_resourceId: function PS_AssignmentCreationInformation$get_resourceId$in() {ULSyTi:;
        return this.$F_1;
    },
    
    set_resourceId: function PS_AssignmentCreationInformation$set_resourceId$in(value) {ULSyTi:;
        this.$F_1 = value;
        return value;
    },
    
    get_start: function PS_AssignmentCreationInformation$get_start$in() {ULSyTi:;
        return this.$3_1;
    },
    
    set_start: function PS_AssignmentCreationInformation$set_start$in(value) {ULSyTi:;
        this.$3_1 = value;
        return value;
    },
    
    get_taskId: function PS_AssignmentCreationInformation$get_taskId$in() {ULSyTi:;
        return this.$1Z_1;
    },
    
    set_taskId: function PS_AssignmentCreationInformation$set_taskId$in(value) {ULSyTi:;
        this.$1Z_1 = value;
        return value;
    },
    
    get_typeId: function PS_AssignmentCreationInformation$get_typeId$in() {ULSyTi:;
        return '{f9c5fe6f-1a1b-4134-bc78-c145400f9b58}';
    },
    
    writeToXml: function PS_AssignmentCreationInformation$writeToXml$in(writer, serializationContext) {ULSyTi:;
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = [ 'Finish', 'Id', 'Notes', 'ResourceId', 'Start', 'TaskId' ];
        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    
    initPropertiesFromJson: function PS_AssignmentCreationInformation$initPropertiesFromJson$in(parentNode) {ULSyTi:;
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.Finish;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$5_1 = ($v_0);
            delete parentNode.Finish;
        }
        $v_0 = parentNode.Id;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$0_1 = ($v_0);
            delete parentNode.Id;
        }
        $v_0 = parentNode.Notes;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$8_1 = ($v_0);
            delete parentNode.Notes;
        }
        $v_0 = parentNode.ResourceId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$F_1 = ($v_0);
            delete parentNode.ResourceId;
        }
        $v_0 = parentNode.Start;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$3_1 = ($v_0);
            delete parentNode.Start;
        }
        $v_0 = parentNode.TaskId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1Z_1 = ($v_0);
            delete parentNode.TaskId;
        }
    }
}


PS.BaseCalendarException = function PS_BaseCalendarException(context, objectPath) {ULSyTi:;
    PS.BaseCalendarException.initializeBase(this, [ context, objectPath ]);
}


PS.Calendar = function PS_Calendar(context, objectPath) {ULSyTi:;
    PS.Calendar.initializeBase(this, [ context, objectPath ]);
}
PS.Calendar.prototype = {
    
    get_baseCalendarExceptions: function PS_Calendar$get_baseCalendarExceptions$in() {ULSyTi:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['BaseCalendarExceptions']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new PS.CalendarExceptionCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'BaseCalendarExceptions'));
            this.get_objectData().get_clientObjectProperties()['BaseCalendarExceptions'] = $v_0;
        }
        return $v_0;
    },
    
    get_created: function PS_Calendar$get_created$in() {ULSyTi:;
        this.checkUninitializedProperty('Created');
        return (this.get_objectData().get_properties()['Created']);
    },
    
    get_id: function PS_Calendar$get_id$in() {ULSyTi:;
        this.checkUninitializedProperty('Id');
        return (this.get_objectData().get_properties()['Id']);
    },
    
    get_isStandardCalendar: function PS_Calendar$get_isStandardCalendar$in() {ULSyTi:;
        this.checkUninitializedProperty('IsStandardCalendar');
        return (this.get_objectData().get_properties()['IsStandardCalendar']);
    },
    
    get_modified: function PS_Calendar$get_modified$in() {ULSyTi:;
        this.checkUninitializedProperty('Modified');
        return (this.get_objectData().get_properties()['Modified']);
    },
    
    get_name: function PS_Calendar$get_name$in() {ULSyTi:;
        this.checkUninitializedProperty('Name');
        return (this.get_objectData().get_properties()['Name']);
    },
    
    initPropertiesFromJson: function PS_Calendar$initPropertiesFromJson$in(parentNode) {ULSyTi:;
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.BaseCalendarExceptions;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('BaseCalendarExceptions', this.get_baseCalendarExceptions(), $v_0);
            this.get_baseCalendarExceptions().fromJson($v_0);
            delete parentNode.BaseCalendarExceptions;
        }
        $v_0 = parentNode.Created;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Created'] = ($v_0);
            delete parentNode.Created;
        }
        $v_0 = parentNode.Id;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Id'] = ($v_0);
            delete parentNode.Id;
        }
        $v_0 = parentNode.IsStandardCalendar;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['IsStandardCalendar'] = ($v_0);
            delete parentNode.IsStandardCalendar;
        }
        $v_0 = parentNode.Modified;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Modified'] = ($v_0);
            delete parentNode.Modified;
        }
        $v_0 = parentNode.Name;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Name'] = ($v_0);
            delete parentNode.Name;
        }
    },
    
    copyTo: function PS_Calendar$copyTo$in(name) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        $v_1 = new PS.Calendar($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'CopyTo', [ name ]));
        $v_1.get_path().setPendingReplace();
        var $v_2 = new SP.ObjectIdentityQuery($v_1.get_path());
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        $v_0.addQuery($v_2);
        return $v_1;
    },
    
    deleteObject: function PS_Calendar$deleteObject$in() {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'DeleteObject', null);
        $v_0.addQuery($v_1);
        this.removeFromParentCollection();
    }
}


PS.CalendarPropertyNames = function PS_CalendarPropertyNames() {
}


PS.CalendarObjectPropertyNames = function PS_CalendarObjectPropertyNames() {
}


PS.CalendarCollection = function PS_CalendarCollection(context, objectPath) {ULSyTi:;
    PS.CalendarCollection.initializeBase(this, [ context, objectPath ]);
}
PS.CalendarCollection.prototype = {
    
    itemAt: function PS_CalendarCollection$itemAt$in(index) {ULSyTi:;
        return this.getItemAtIndex(index);
    },
    
    get_item: function PS_CalendarCollection$get_item$in(index) {ULSyTi:;
        return this.getItemAtIndex(index);
    },
    
    get_childItemType: function PS_CalendarCollection$get_childItemType$in() {ULSyTi:;
        return PS.Calendar;
    },
    
    add: function PS_CalendarCollection$add$in(parameters) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        $v_1 = new PS.Calendar($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'Add', [ parameters ]));
        $v_1.get_path().setPendingReplace();
        var $v_2 = new SP.ObjectIdentityQuery($v_1.get_path());
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        $v_0.addQuery($v_2);
        this.addChild($v_1);
        return $v_1;
    },
    
    remove: function PS_CalendarCollection$remove$in(calendar) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'Remove', [ calendar ]);
        $v_0.addQuery($v_2);
        $v_1 = new SP.BooleanResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        this.removeChild(calendar);
        return $v_1;
    },
    
    getById: function PS_CalendarCollection$getById$in(objectId) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = ((this.get_objectData().get_methodReturnObjects()['GetById']));
        if (SP.ScriptUtility.isNullOrUndefined($v_2)) {
            $v_2 = {};
            this.get_objectData().get_methodReturnObjects()['GetById'] = $v_2;
        }
        $v_1 = (($v_2[objectId]));
        if (!$v_0.get_disableReturnValueCache() && !SP.ScriptUtility.isNullOrUndefined($v_1)) {
            return $v_1;
        }
        $v_1 = new PS.Calendar($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetById', [ objectId ]));
        if (!$v_0.get_disableReturnValueCache()) {
            $v_2[objectId] = $v_1;
        }
        return $v_1;
    },
    
    getByGuid: function PS_CalendarCollection$getByGuid$in(uid) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = ((this.get_objectData().get_methodReturnObjects()['GetByGuid']));
        if (SP.ScriptUtility.isNullOrUndefined($v_2)) {
            $v_2 = {};
            this.get_objectData().get_methodReturnObjects()['GetByGuid'] = $v_2;
        }
        $v_1 = (($v_2[uid.toString()]));
        if (!$v_0.get_disableReturnValueCache() && !SP.ScriptUtility.isNullOrUndefined($v_1)) {
            return $v_1;
        }
        $v_1 = new PS.Calendar($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetByGuid', [ uid ]));
        if (!$v_0.get_disableReturnValueCache()) {
            $v_2[uid.toString()] = $v_1;
        }
        return $v_1;
    },
    
    update: function PS_CalendarCollection$update$in() {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'Update', null);
        $v_0.addQuery($v_1);
    }
}


PS.CalendarCreationInformation = function PS_CalendarCreationInformation() {ULSyTi:;
    PS.CalendarCreationInformation.initializeBase(this);
}
PS.CalendarCreationInformation.prototype = {
    $0_1: null,
    $1_1: null,
    $14_1: null,
    
    get_id: function PS_CalendarCreationInformation$get_id$in() {ULSyTi:;
        return this.$0_1;
    },
    
    set_id: function PS_CalendarCreationInformation$set_id$in(value) {ULSyTi:;
        this.$0_1 = value;
        return value;
    },
    
    get_name: function PS_CalendarCreationInformation$get_name$in() {ULSyTi:;
        return this.$1_1;
    },
    
    set_name: function PS_CalendarCreationInformation$set_name$in(value) {ULSyTi:;
        this.$1_1 = value;
        return value;
    },
    
    get_originalId: function PS_CalendarCreationInformation$get_originalId$in() {ULSyTi:;
        return this.$14_1;
    },
    
    set_originalId: function PS_CalendarCreationInformation$set_originalId$in(value) {ULSyTi:;
        this.$14_1 = value;
        return value;
    },
    
    get_typeId: function PS_CalendarCreationInformation$get_typeId$in() {ULSyTi:;
        return '{871aabf6-6ad2-481a-8f7a-0ec5ae4613d3}';
    },
    
    writeToXml: function PS_CalendarCreationInformation$writeToXml$in(writer, serializationContext) {ULSyTi:;
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = [ 'Id', 'Name', 'OriginalId' ];
        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    
    initPropertiesFromJson: function PS_CalendarCreationInformation$initPropertiesFromJson$in(parentNode) {ULSyTi:;
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.Id;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$0_1 = ($v_0);
            delete parentNode.Id;
        }
        $v_0 = parentNode.Name;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1_1 = ($v_0);
            delete parentNode.Name;
        }
        $v_0 = parentNode.OriginalId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$14_1 = ($v_0);
            delete parentNode.OriginalId;
        }
    }
}


PS.CalendarException = function PS_CalendarException(context, objectPath) {ULSyTi:;
    PS.CalendarException.initializeBase(this, [ context, objectPath ]);
}
PS.CalendarException.prototype = {
    
    get_calendar: function PS_CalendarException$get_calendar$in() {ULSyTi:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['Calendar']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new PS.Calendar(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Calendar'));
            this.get_objectData().get_clientObjectProperties()['Calendar'] = $v_0;
        }
        return $v_0;
    },
    
    get_finish: function PS_CalendarException$get_finish$in() {ULSyTi:;
        this.checkUninitializedProperty('Finish');
        return (this.get_objectData().get_properties()['Finish']);
    },
    
    get_id: function PS_CalendarException$get_id$in() {ULSyTi:;
        this.checkUninitializedProperty('Id');
        return (this.get_objectData().get_properties()['Id']);
    },
    
    set_id: function PS_CalendarException$set_id$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['Id'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Id', value));
        }
        return value;
    },
    
    get_name: function PS_CalendarException$get_name$in() {ULSyTi:;
        this.checkUninitializedProperty('Name');
        return (this.get_objectData().get_properties()['Name']);
    },
    
    get_recurrenceDays: function PS_CalendarException$get_recurrenceDays$in() {ULSyTi:;
        this.checkUninitializedProperty('RecurrenceDays');
        return (this.get_objectData().get_properties()['RecurrenceDays']);
    },
    
    get_recurrenceFrequency: function PS_CalendarException$get_recurrenceFrequency$in() {ULSyTi:;
        this.checkUninitializedProperty('RecurrenceFrequency');
        return (this.get_objectData().get_properties()['RecurrenceFrequency']);
    },
    
    get_recurrenceMonth: function PS_CalendarException$get_recurrenceMonth$in() {ULSyTi:;
        this.checkUninitializedProperty('RecurrenceMonth');
        return (this.get_objectData().get_properties()['RecurrenceMonth']);
    },
    
    get_recurrenceMonthDay: function PS_CalendarException$get_recurrenceMonthDay$in() {ULSyTi:;
        this.checkUninitializedProperty('RecurrenceMonthDay');
        return (this.get_objectData().get_properties()['RecurrenceMonthDay']);
    },
    
    get_recurrenceType: function PS_CalendarException$get_recurrenceType$in() {ULSyTi:;
        this.checkUninitializedProperty('RecurrenceType');
        return (this.get_objectData().get_properties()['RecurrenceType']);
    },
    
    get_recurrenceWeek: function PS_CalendarException$get_recurrenceWeek$in() {ULSyTi:;
        this.checkUninitializedProperty('RecurrenceWeek');
        return (this.get_objectData().get_properties()['RecurrenceWeek']);
    },
    
    get_shift1Finish: function PS_CalendarException$get_shift1Finish$in() {ULSyTi:;
        this.checkUninitializedProperty('Shift1Finish');
        return (this.get_objectData().get_properties()['Shift1Finish']);
    },
    
    get_shift1Start: function PS_CalendarException$get_shift1Start$in() {ULSyTi:;
        this.checkUninitializedProperty('Shift1Start');
        return (this.get_objectData().get_properties()['Shift1Start']);
    },
    
    get_shift2Finish: function PS_CalendarException$get_shift2Finish$in() {ULSyTi:;
        this.checkUninitializedProperty('Shift2Finish');
        return (this.get_objectData().get_properties()['Shift2Finish']);
    },
    
    get_shift2Start: function PS_CalendarException$get_shift2Start$in() {ULSyTi:;
        this.checkUninitializedProperty('Shift2Start');
        return (this.get_objectData().get_properties()['Shift2Start']);
    },
    
    get_shift3Finish: function PS_CalendarException$get_shift3Finish$in() {ULSyTi:;
        this.checkUninitializedProperty('Shift3Finish');
        return (this.get_objectData().get_properties()['Shift3Finish']);
    },
    
    get_shift3Start: function PS_CalendarException$get_shift3Start$in() {ULSyTi:;
        this.checkUninitializedProperty('Shift3Start');
        return (this.get_objectData().get_properties()['Shift3Start']);
    },
    
    get_shift4Finish: function PS_CalendarException$get_shift4Finish$in() {ULSyTi:;
        this.checkUninitializedProperty('Shift4Finish');
        return (this.get_objectData().get_properties()['Shift4Finish']);
    },
    
    get_shift4Start: function PS_CalendarException$get_shift4Start$in() {ULSyTi:;
        this.checkUninitializedProperty('Shift4Start');
        return (this.get_objectData().get_properties()['Shift4Start']);
    },
    
    get_shift5Finish: function PS_CalendarException$get_shift5Finish$in() {ULSyTi:;
        this.checkUninitializedProperty('Shift5Finish');
        return (this.get_objectData().get_properties()['Shift5Finish']);
    },
    
    get_shift5Start: function PS_CalendarException$get_shift5Start$in() {ULSyTi:;
        this.checkUninitializedProperty('Shift5Start');
        return (this.get_objectData().get_properties()['Shift5Start']);
    },
    
    get_start: function PS_CalendarException$get_start$in() {ULSyTi:;
        this.checkUninitializedProperty('Start');
        return (this.get_objectData().get_properties()['Start']);
    },
    
    initPropertiesFromJson: function PS_CalendarException$initPropertiesFromJson$in(parentNode) {ULSyTi:;
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.Calendar;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('Calendar', this.get_calendar(), $v_0);
            this.get_calendar().fromJson($v_0);
            delete parentNode.Calendar;
        }
        $v_0 = parentNode.Finish;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Finish'] = ($v_0);
            delete parentNode.Finish;
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
        $v_0 = parentNode.RecurrenceDays;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['RecurrenceDays'] = ((SP.DataConvert.fixupType(this.get_context(), $v_0)));
            delete parentNode.RecurrenceDays;
        }
        $v_0 = parentNode.RecurrenceFrequency;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['RecurrenceFrequency'] = ($v_0);
            delete parentNode.RecurrenceFrequency;
        }
        $v_0 = parentNode.RecurrenceMonth;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['RecurrenceMonth'] = ($v_0);
            delete parentNode.RecurrenceMonth;
        }
        $v_0 = parentNode.RecurrenceMonthDay;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['RecurrenceMonthDay'] = ($v_0);
            delete parentNode.RecurrenceMonthDay;
        }
        $v_0 = parentNode.RecurrenceType;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['RecurrenceType'] = ((SP.DataConvert.fixupType(this.get_context(), $v_0)));
            delete parentNode.RecurrenceType;
        }
        $v_0 = parentNode.RecurrenceWeek;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['RecurrenceWeek'] = ((SP.DataConvert.fixupType(this.get_context(), $v_0)));
            delete parentNode.RecurrenceWeek;
        }
        $v_0 = parentNode.Shift1Finish;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Shift1Finish'] = ($v_0);
            delete parentNode.Shift1Finish;
        }
        $v_0 = parentNode.Shift1Start;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Shift1Start'] = ($v_0);
            delete parentNode.Shift1Start;
        }
        $v_0 = parentNode.Shift2Finish;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Shift2Finish'] = ($v_0);
            delete parentNode.Shift2Finish;
        }
        $v_0 = parentNode.Shift2Start;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Shift2Start'] = ($v_0);
            delete parentNode.Shift2Start;
        }
        $v_0 = parentNode.Shift3Finish;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Shift3Finish'] = ($v_0);
            delete parentNode.Shift3Finish;
        }
        $v_0 = parentNode.Shift3Start;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Shift3Start'] = ($v_0);
            delete parentNode.Shift3Start;
        }
        $v_0 = parentNode.Shift4Finish;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Shift4Finish'] = ($v_0);
            delete parentNode.Shift4Finish;
        }
        $v_0 = parentNode.Shift4Start;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Shift4Start'] = ($v_0);
            delete parentNode.Shift4Start;
        }
        $v_0 = parentNode.Shift5Finish;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Shift5Finish'] = ($v_0);
            delete parentNode.Shift5Finish;
        }
        $v_0 = parentNode.Shift5Start;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Shift5Start'] = ($v_0);
            delete parentNode.Shift5Start;
        }
        $v_0 = parentNode.Start;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Start'] = ($v_0);
            delete parentNode.Start;
        }
    },
    
    deleteObject: function PS_CalendarException$deleteObject$in() {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'DeleteObject', null);
        $v_0.addQuery($v_1);
        this.removeFromParentCollection();
    }
}


PS.CalendarExceptionPropertyNames = function PS_CalendarExceptionPropertyNames() {
}


PS.CalendarExceptionObjectPropertyNames = function PS_CalendarExceptionObjectPropertyNames() {
}


PS.CalendarExceptionCollection = function PS_CalendarExceptionCollection(context, objectPath) {ULSyTi:;
    PS.CalendarExceptionCollection.initializeBase(this, [ context, objectPath ]);
}
PS.CalendarExceptionCollection.prototype = {
    
    itemAt: function PS_CalendarExceptionCollection$itemAt$in(index) {ULSyTi:;
        return this.getItemAtIndex(index);
    },
    
    get_item: function PS_CalendarExceptionCollection$get_item$in(index) {ULSyTi:;
        return this.getItemAtIndex(index);
    },
    
    get_childItemType: function PS_CalendarExceptionCollection$get_childItemType$in() {ULSyTi:;
        return PS.CalendarException;
    },
    
    getById: function PS_CalendarExceptionCollection$getById$in(id) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = ((this.get_objectData().get_methodReturnObjects()['GetById']));
        if (SP.ScriptUtility.isNullOrUndefined($v_2)) {
            $v_2 = [];
            this.get_objectData().get_methodReturnObjects()['GetById'] = $v_2;
        }
        $v_1 = (($v_2[id]));
        if (!$v_0.get_disableReturnValueCache() && !SP.ScriptUtility.isNullOrUndefined($v_1)) {
            return $v_1;
        }
        $v_1 = new PS.CalendarException($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetById', [ id ]));
        if (!$v_0.get_disableReturnValueCache()) {
            $v_2[id] = $v_1;
        }
        return $v_1;
    },
    
    add: function PS_CalendarExceptionCollection$add$in(parameters) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        $v_1 = new PS.CalendarException($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'Add', [ parameters ]));
        this.addChild($v_1);
        return $v_1;
    },
    
    remove: function PS_CalendarExceptionCollection$remove$in(exception) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'Remove', [ exception ]);
        $v_0.addQuery($v_2);
        $v_1 = new SP.BooleanResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        this.removeChild(exception);
        return $v_1;
    }
}


PS.CalendarExceptionCreationInformation = function PS_CalendarExceptionCreationInformation() {ULSyTi:;
    PS.CalendarExceptionCreationInformation.initializeBase(this);
}
PS.CalendarExceptionCreationInformation.prototype = {
    $5_1: null,
    $1_1: null,
    $1A_1: 0,
    $1B_1: 0,
    $1C_1: 0,
    $1D_1: 0,
    $1E_1: 0,
    $1F_1: 0,
    $1K_1: 0,
    $1L_1: 0,
    $1M_1: 0,
    $1N_1: 0,
    $1O_1: 0,
    $1P_1: 0,
    $1Q_1: 0,
    $1R_1: 0,
    $1S_1: 0,
    $1T_1: 0,
    $3_1: null,
    
    get_finish: function PS_CalendarExceptionCreationInformation$get_finish$in() {ULSyTi:;
        return this.$5_1;
    },
    
    set_finish: function PS_CalendarExceptionCreationInformation$set_finish$in(value) {ULSyTi:;
        this.$5_1 = value;
        return value;
    },
    
    get_name: function PS_CalendarExceptionCreationInformation$get_name$in() {ULSyTi:;
        return this.$1_1;
    },
    
    set_name: function PS_CalendarExceptionCreationInformation$set_name$in(value) {ULSyTi:;
        this.$1_1 = value;
        return value;
    },
    
    get_recurrenceDays: function PS_CalendarExceptionCreationInformation$get_recurrenceDays$in() {ULSyTi:;
        return this.$1A_1;
    },
    
    set_recurrenceDays: function PS_CalendarExceptionCreationInformation$set_recurrenceDays$in(value) {ULSyTi:;
        this.$1A_1 = value;
        return value;
    },
    
    get_recurrenceFrequency: function PS_CalendarExceptionCreationInformation$get_recurrenceFrequency$in() {ULSyTi:;
        return this.$1B_1;
    },
    
    set_recurrenceFrequency: function PS_CalendarExceptionCreationInformation$set_recurrenceFrequency$in(value) {ULSyTi:;
        this.$1B_1 = value;
        return value;
    },
    
    get_recurrenceMonth: function PS_CalendarExceptionCreationInformation$get_recurrenceMonth$in() {ULSyTi:;
        return this.$1C_1;
    },
    
    set_recurrenceMonth: function PS_CalendarExceptionCreationInformation$set_recurrenceMonth$in(value) {ULSyTi:;
        this.$1C_1 = value;
        return value;
    },
    
    get_recurrenceMonthDay: function PS_CalendarExceptionCreationInformation$get_recurrenceMonthDay$in() {ULSyTi:;
        return this.$1D_1;
    },
    
    set_recurrenceMonthDay: function PS_CalendarExceptionCreationInformation$set_recurrenceMonthDay$in(value) {ULSyTi:;
        this.$1D_1 = value;
        return value;
    },
    
    get_recurrenceType: function PS_CalendarExceptionCreationInformation$get_recurrenceType$in() {ULSyTi:;
        return this.$1E_1;
    },
    
    set_recurrenceType: function PS_CalendarExceptionCreationInformation$set_recurrenceType$in(value) {ULSyTi:;
        this.$1E_1 = value;
        return value;
    },
    
    get_recurrenceWeek: function PS_CalendarExceptionCreationInformation$get_recurrenceWeek$in() {ULSyTi:;
        return this.$1F_1;
    },
    
    set_recurrenceWeek: function PS_CalendarExceptionCreationInformation$set_recurrenceWeek$in(value) {ULSyTi:;
        this.$1F_1 = value;
        return value;
    },
    
    get_shift1Finish: function PS_CalendarExceptionCreationInformation$get_shift1Finish$in() {ULSyTi:;
        return this.$1K_1;
    },
    
    set_shift1Finish: function PS_CalendarExceptionCreationInformation$set_shift1Finish$in(value) {ULSyTi:;
        this.$1K_1 = value;
        return value;
    },
    
    get_shift1Start: function PS_CalendarExceptionCreationInformation$get_shift1Start$in() {ULSyTi:;
        return this.$1L_1;
    },
    
    set_shift1Start: function PS_CalendarExceptionCreationInformation$set_shift1Start$in(value) {ULSyTi:;
        this.$1L_1 = value;
        return value;
    },
    
    get_shift2Finish: function PS_CalendarExceptionCreationInformation$get_shift2Finish$in() {ULSyTi:;
        return this.$1M_1;
    },
    
    set_shift2Finish: function PS_CalendarExceptionCreationInformation$set_shift2Finish$in(value) {ULSyTi:;
        this.$1M_1 = value;
        return value;
    },
    
    get_shift2Start: function PS_CalendarExceptionCreationInformation$get_shift2Start$in() {ULSyTi:;
        return this.$1N_1;
    },
    
    set_shift2Start: function PS_CalendarExceptionCreationInformation$set_shift2Start$in(value) {ULSyTi:;
        this.$1N_1 = value;
        return value;
    },
    
    get_shift3Finish: function PS_CalendarExceptionCreationInformation$get_shift3Finish$in() {ULSyTi:;
        return this.$1O_1;
    },
    
    set_shift3Finish: function PS_CalendarExceptionCreationInformation$set_shift3Finish$in(value) {ULSyTi:;
        this.$1O_1 = value;
        return value;
    },
    
    get_shift3Start: function PS_CalendarExceptionCreationInformation$get_shift3Start$in() {ULSyTi:;
        return this.$1P_1;
    },
    
    set_shift3Start: function PS_CalendarExceptionCreationInformation$set_shift3Start$in(value) {ULSyTi:;
        this.$1P_1 = value;
        return value;
    },
    
    get_shift4Finish: function PS_CalendarExceptionCreationInformation$get_shift4Finish$in() {ULSyTi:;
        return this.$1Q_1;
    },
    
    set_shift4Finish: function PS_CalendarExceptionCreationInformation$set_shift4Finish$in(value) {ULSyTi:;
        this.$1Q_1 = value;
        return value;
    },
    
    get_shift4Start: function PS_CalendarExceptionCreationInformation$get_shift4Start$in() {ULSyTi:;
        return this.$1R_1;
    },
    
    set_shift4Start: function PS_CalendarExceptionCreationInformation$set_shift4Start$in(value) {ULSyTi:;
        this.$1R_1 = value;
        return value;
    },
    
    get_shift5Finish: function PS_CalendarExceptionCreationInformation$get_shift5Finish$in() {ULSyTi:;
        return this.$1S_1;
    },
    
    set_shift5Finish: function PS_CalendarExceptionCreationInformation$set_shift5Finish$in(value) {ULSyTi:;
        this.$1S_1 = value;
        return value;
    },
    
    get_shift5Start: function PS_CalendarExceptionCreationInformation$get_shift5Start$in() {ULSyTi:;
        return this.$1T_1;
    },
    
    set_shift5Start: function PS_CalendarExceptionCreationInformation$set_shift5Start$in(value) {ULSyTi:;
        this.$1T_1 = value;
        return value;
    },
    
    get_start: function PS_CalendarExceptionCreationInformation$get_start$in() {ULSyTi:;
        return this.$3_1;
    },
    
    set_start: function PS_CalendarExceptionCreationInformation$set_start$in(value) {ULSyTi:;
        this.$3_1 = value;
        return value;
    },
    
    get_typeId: function PS_CalendarExceptionCreationInformation$get_typeId$in() {ULSyTi:;
        return '{15a86477-a9f6-4e4d-9da9-1603b15d95c8}';
    },
    
    writeToXml: function PS_CalendarExceptionCreationInformation$writeToXml$in(writer, serializationContext) {ULSyTi:;
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = [ 'Finish', 'Name', 'RecurrenceDays', 'RecurrenceFrequency', 'RecurrenceMonth', 'RecurrenceMonthDay', 'RecurrenceType', 'RecurrenceWeek', 'Shift1Finish', 'Shift1Start', 'Shift2Finish', 'Shift2Start', 'Shift3Finish', 'Shift3Start', 'Shift4Finish', 'Shift4Start', 'Shift5Finish', 'Shift5Start', 'Start' ];
        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    
    initPropertiesFromJson: function PS_CalendarExceptionCreationInformation$initPropertiesFromJson$in(parentNode) {ULSyTi:;
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.Finish;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$5_1 = ($v_0);
            delete parentNode.Finish;
        }
        $v_0 = parentNode.Name;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1_1 = ($v_0);
            delete parentNode.Name;
        }
        $v_0 = parentNode.RecurrenceDays;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1A_1 = ((SP.DataConvert.fixupType(null, $v_0)));
            delete parentNode.RecurrenceDays;
        }
        $v_0 = parentNode.RecurrenceFrequency;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1B_1 = ($v_0);
            delete parentNode.RecurrenceFrequency;
        }
        $v_0 = parentNode.RecurrenceMonth;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1C_1 = ($v_0);
            delete parentNode.RecurrenceMonth;
        }
        $v_0 = parentNode.RecurrenceMonthDay;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1D_1 = ($v_0);
            delete parentNode.RecurrenceMonthDay;
        }
        $v_0 = parentNode.RecurrenceType;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1E_1 = ((SP.DataConvert.fixupType(null, $v_0)));
            delete parentNode.RecurrenceType;
        }
        $v_0 = parentNode.RecurrenceWeek;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1F_1 = ((SP.DataConvert.fixupType(null, $v_0)));
            delete parentNode.RecurrenceWeek;
        }
        $v_0 = parentNode.Shift1Finish;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1K_1 = ($v_0);
            delete parentNode.Shift1Finish;
        }
        $v_0 = parentNode.Shift1Start;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1L_1 = ($v_0);
            delete parentNode.Shift1Start;
        }
        $v_0 = parentNode.Shift2Finish;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1M_1 = ($v_0);
            delete parentNode.Shift2Finish;
        }
        $v_0 = parentNode.Shift2Start;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1N_1 = ($v_0);
            delete parentNode.Shift2Start;
        }
        $v_0 = parentNode.Shift3Finish;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1O_1 = ($v_0);
            delete parentNode.Shift3Finish;
        }
        $v_0 = parentNode.Shift3Start;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1P_1 = ($v_0);
            delete parentNode.Shift3Start;
        }
        $v_0 = parentNode.Shift4Finish;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1Q_1 = ($v_0);
            delete parentNode.Shift4Finish;
        }
        $v_0 = parentNode.Shift4Start;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1R_1 = ($v_0);
            delete parentNode.Shift4Start;
        }
        $v_0 = parentNode.Shift5Finish;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1S_1 = ($v_0);
            delete parentNode.Shift5Finish;
        }
        $v_0 = parentNode.Shift5Start;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1T_1 = ($v_0);
            delete parentNode.Shift5Start;
        }
        $v_0 = parentNode.Start;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$3_1 = ($v_0);
            delete parentNode.Start;
        }
    }
}


PS.CustomField = function PS_CustomField(context, objectPath) {ULSyTi:;
    PS.CustomField.initializeBase(this, [ context, objectPath ]);
}
PS.CustomField.prototype = {
    
    get_appAlternateId: function PS_CustomField$get_appAlternateId$in() {ULSyTi:;
        this.checkUninitializedProperty('AppAlternateId');
        return (this.get_objectData().get_properties()['AppAlternateId']);
    },
    
    get_description: function PS_CustomField$get_description$in() {ULSyTi:;
        this.checkUninitializedProperty('Description');
        return (this.get_objectData().get_properties()['Description']);
    },
    
    set_description: function PS_CustomField$set_description$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['Description'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Description', value));
        }
        return value;
    },
    
    get_entityType: function PS_CustomField$get_entityType$in() {ULSyTi:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['EntityType']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new PS.EntityType(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'EntityType'));
            this.get_objectData().get_clientObjectProperties()['EntityType'] = $v_0;
        }
        return $v_0;
    },
    
    get_fieldType: function PS_CustomField$get_fieldType$in() {ULSyTi:;
        this.checkUninitializedProperty('FieldType');
        return (this.get_objectData().get_properties()['FieldType']);
    },
    
    get_formula: function PS_CustomField$get_formula$in() {ULSyTi:;
        this.checkUninitializedProperty('Formula');
        return (this.get_objectData().get_properties()['Formula']);
    },
    
    set_formula: function PS_CustomField$set_formula$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['Formula'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Formula', value));
        }
        return value;
    },
    
    get_id: function PS_CustomField$get_id$in() {ULSyTi:;
        this.checkUninitializedProperty('Id');
        return (this.get_objectData().get_properties()['Id']);
    },
    
    get_internalName: function PS_CustomField$get_internalName$in() {ULSyTi:;
        this.checkUninitializedProperty('InternalName');
        return (this.get_objectData().get_properties()['InternalName']);
    },
    
    get_isEditableInVisibility: function PS_CustomField$get_isEditableInVisibility$in() {ULSyTi:;
        this.checkUninitializedProperty('IsEditableInVisibility');
        return (this.get_objectData().get_properties()['IsEditableInVisibility']);
    },
    
    set_isEditableInVisibility: function PS_CustomField$set_isEditableInVisibility$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['IsEditableInVisibility'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'IsEditableInVisibility', value));
        }
        return value;
    },
    
    get_isMultilineText: function PS_CustomField$get_isMultilineText$in() {ULSyTi:;
        this.checkUninitializedProperty('IsMultilineText');
        return (this.get_objectData().get_properties()['IsMultilineText']);
    },
    
    set_isMultilineText: function PS_CustomField$set_isMultilineText$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['IsMultilineText'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'IsMultilineText', value));
        }
        return value;
    },
    
    get_isRequired: function PS_CustomField$get_isRequired$in() {ULSyTi:;
        this.checkUninitializedProperty('IsRequired');
        return (this.get_objectData().get_properties()['IsRequired']);
    },
    
    set_isRequired: function PS_CustomField$set_isRequired$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['IsRequired'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'IsRequired', value));
        }
        return value;
    },
    
    get_isWorkflowControlled: function PS_CustomField$get_isWorkflowControlled$in() {ULSyTi:;
        this.checkUninitializedProperty('IsWorkflowControlled');
        return (this.get_objectData().get_properties()['IsWorkflowControlled']);
    },
    
    set_isWorkflowControlled: function PS_CustomField$set_isWorkflowControlled$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['IsWorkflowControlled'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'IsWorkflowControlled', value));
        }
        return value;
    },
    
    get_lookupAllowMultiSelect: function PS_CustomField$get_lookupAllowMultiSelect$in() {ULSyTi:;
        this.checkUninitializedProperty('LookupAllowMultiSelect');
        return (this.get_objectData().get_properties()['LookupAllowMultiSelect']);
    },
    
    get_lookupDefaultValue: function PS_CustomField$get_lookupDefaultValue$in() {ULSyTi:;
        this.checkUninitializedProperty('LookupDefaultValue');
        return (this.get_objectData().get_properties()['LookupDefaultValue']);
    },
    
    set_lookupDefaultValue: function PS_CustomField$set_lookupDefaultValue$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['LookupDefaultValue'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'LookupDefaultValue', value));
        }
        return value;
    },
    
    get_lookupEntries: function PS_CustomField$get_lookupEntries$in() {ULSyTi:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['LookupEntries']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new PS.LookupEntryCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'LookupEntries'));
            this.get_objectData().get_clientObjectProperties()['LookupEntries'] = $v_0;
        }
        return $v_0;
    },
    
    get_lookupTable: function PS_CustomField$get_lookupTable$in() {ULSyTi:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['LookupTable']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new PS.LookupTable(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'LookupTable'));
            this.get_objectData().get_clientObjectProperties()['LookupTable'] = $v_0;
        }
        return $v_0;
    },
    
    set_lookupTable: function PS_CustomField$set_lookupTable$in(value) {ULSyTi:;
        this.get_objectData().get_clientObjectProperties()['LookupTable'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'LookupTable', value));
        }
        return value;
    },
    
    get_name: function PS_CustomField$get_name$in() {ULSyTi:;
        this.checkUninitializedProperty('Name');
        return (this.get_objectData().get_properties()['Name']);
    },
    
    set_name: function PS_CustomField$set_name$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['Name'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Name', value));
        }
        return value;
    },
    
    get_rollsDownToAssignments: function PS_CustomField$get_rollsDownToAssignments$in() {ULSyTi:;
        this.checkUninitializedProperty('RollsDownToAssignments');
        return (this.get_objectData().get_properties()['RollsDownToAssignments']);
    },
    
    set_rollsDownToAssignments: function PS_CustomField$set_rollsDownToAssignments$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['RollsDownToAssignments'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'RollsDownToAssignments', value));
        }
        return value;
    },
    
    get_rollupType: function PS_CustomField$get_rollupType$in() {ULSyTi:;
        this.checkUninitializedProperty('RollupType');
        return (this.get_objectData().get_properties()['RollupType']);
    },
    
    set_rollupType: function PS_CustomField$set_rollupType$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['RollupType'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'RollupType', value));
        }
        return value;
    },
    
    initPropertiesFromJson: function PS_CustomField$initPropertiesFromJson$in(parentNode) {ULSyTi:;
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.AppAlternateId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['AppAlternateId'] = ($v_0);
            delete parentNode.AppAlternateId;
        }
        $v_0 = parentNode.Description;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Description'] = ($v_0);
            delete parentNode.Description;
        }
        $v_0 = parentNode.EntityType;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('EntityType', this.get_entityType(), $v_0);
            this.get_entityType().fromJson($v_0);
            delete parentNode.EntityType;
        }
        $v_0 = parentNode.FieldType;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['FieldType'] = ((SP.DataConvert.fixupType(this.get_context(), $v_0)));
            delete parentNode.FieldType;
        }
        $v_0 = parentNode.Formula;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Formula'] = ($v_0);
            delete parentNode.Formula;
        }
        $v_0 = parentNode.Id;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Id'] = ($v_0);
            delete parentNode.Id;
        }
        $v_0 = parentNode.InternalName;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['InternalName'] = ($v_0);
            delete parentNode.InternalName;
        }
        $v_0 = parentNode.IsEditableInVisibility;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['IsEditableInVisibility'] = ($v_0);
            delete parentNode.IsEditableInVisibility;
        }
        $v_0 = parentNode.IsMultilineText;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['IsMultilineText'] = ($v_0);
            delete parentNode.IsMultilineText;
        }
        $v_0 = parentNode.IsRequired;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['IsRequired'] = ($v_0);
            delete parentNode.IsRequired;
        }
        $v_0 = parentNode.IsWorkflowControlled;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['IsWorkflowControlled'] = ($v_0);
            delete parentNode.IsWorkflowControlled;
        }
        $v_0 = parentNode.LookupAllowMultiSelect;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['LookupAllowMultiSelect'] = ($v_0);
            delete parentNode.LookupAllowMultiSelect;
        }
        $v_0 = parentNode.LookupDefaultValue;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['LookupDefaultValue'] = ($v_0);
            delete parentNode.LookupDefaultValue;
        }
        $v_0 = parentNode.LookupEntries;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('LookupEntries', this.get_lookupEntries(), $v_0);
            this.get_lookupEntries().fromJson($v_0);
            delete parentNode.LookupEntries;
        }
        $v_0 = parentNode.LookupTable;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('LookupTable', this.get_lookupTable(), $v_0);
            this.get_lookupTable().fromJson($v_0);
            delete parentNode.LookupTable;
        }
        $v_0 = parentNode.Name;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Name'] = ($v_0);
            delete parentNode.Name;
        }
        $v_0 = parentNode.RollsDownToAssignments;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['RollsDownToAssignments'] = ($v_0);
            delete parentNode.RollsDownToAssignments;
        }
        $v_0 = parentNode.RollupType;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['RollupType'] = ((SP.DataConvert.fixupType(this.get_context(), $v_0)));
            delete parentNode.RollupType;
        }
    },
    
    deleteObject: function PS_CustomField$deleteObject$in() {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'DeleteObject', null);
        $v_0.addQuery($v_1);
        this.removeFromParentCollection();
    }
}


PS.CustomFieldPropertyNames = function PS_CustomFieldPropertyNames() {
}


PS.CustomFieldObjectPropertyNames = function PS_CustomFieldObjectPropertyNames() {
}


PS.CustomFieldCollection = function PS_CustomFieldCollection(context, objectPath) {ULSyTi:;
    PS.CustomFieldCollection.initializeBase(this, [ context, objectPath ]);
}
PS.CustomFieldCollection.prototype = {
    
    itemAt: function PS_CustomFieldCollection$itemAt$in(index) {ULSyTi:;
        return this.getItemAtIndex(index);
    },
    
    get_item: function PS_CustomFieldCollection$get_item$in(index) {ULSyTi:;
        return this.getItemAtIndex(index);
    },
    
    get_childItemType: function PS_CustomFieldCollection$get_childItemType$in() {ULSyTi:;
        return PS.CustomField;
    },
    
    add: function PS_CustomFieldCollection$add$in(parameters) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        $v_1 = new PS.CustomField($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'Add', [ parameters ]));
        $v_1.get_path().setPendingReplace();
        var $v_2 = new SP.ObjectIdentityQuery($v_1.get_path());
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        $v_0.addQuery($v_2);
        this.addChild($v_1);
        return $v_1;
    },
    
    remove: function PS_CustomFieldCollection$remove$in(field) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'Remove', [ field ]);
        $v_0.addQuery($v_2);
        $v_1 = new SP.BooleanResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        this.removeChild(field);
        return $v_1;
    },
    
    getById: function PS_CustomFieldCollection$getById$in(objectId) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = ((this.get_objectData().get_methodReturnObjects()['GetById']));
        if (SP.ScriptUtility.isNullOrUndefined($v_2)) {
            $v_2 = {};
            this.get_objectData().get_methodReturnObjects()['GetById'] = $v_2;
        }
        $v_1 = (($v_2[objectId]));
        if (!$v_0.get_disableReturnValueCache() && !SP.ScriptUtility.isNullOrUndefined($v_1)) {
            return $v_1;
        }
        $v_1 = new PS.CustomField($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetById', [ objectId ]));
        if (!$v_0.get_disableReturnValueCache()) {
            $v_2[objectId] = $v_1;
        }
        return $v_1;
    },
    
    getByGuid: function PS_CustomFieldCollection$getByGuid$in(uid) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = ((this.get_objectData().get_methodReturnObjects()['GetByGuid']));
        if (SP.ScriptUtility.isNullOrUndefined($v_2)) {
            $v_2 = {};
            this.get_objectData().get_methodReturnObjects()['GetByGuid'] = $v_2;
        }
        $v_1 = (($v_2[uid.toString()]));
        if (!$v_0.get_disableReturnValueCache() && !SP.ScriptUtility.isNullOrUndefined($v_1)) {
            return $v_1;
        }
        $v_1 = new PS.CustomField($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetByGuid', [ uid ]));
        if (!$v_0.get_disableReturnValueCache()) {
            $v_2[uid.toString()] = $v_1;
        }
        return $v_1;
    },
    
    getByAppAlternateId: function PS_CustomFieldCollection$getByAppAlternateId$in(objectId) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = ((this.get_objectData().get_methodReturnObjects()['GetByAppAlternateId']));
        if (SP.ScriptUtility.isNullOrUndefined($v_2)) {
            $v_2 = {};
            this.get_objectData().get_methodReturnObjects()['GetByAppAlternateId'] = $v_2;
        }
        $v_1 = (($v_2[objectId]));
        if (!$v_0.get_disableReturnValueCache() && !SP.ScriptUtility.isNullOrUndefined($v_1)) {
            return $v_1;
        }
        $v_1 = new PS.CustomField($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetByAppAlternateId', [ objectId ]));
        if (!$v_0.get_disableReturnValueCache()) {
            $v_2[objectId] = $v_1;
        }
        return $v_1;
    },
    
    update: function PS_CustomFieldCollection$update$in() {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'Update', null);
        $v_0.addQuery($v_1);
    }
}


PS.CustomFieldCreationInformation = function PS_CustomFieldCreationInformation() {ULSyTi:;
    PS.CustomFieldCreationInformation.initializeBase(this);
}
PS.CustomFieldCreationInformation.prototype = {
    $2_1: null,
    $1k_1: null,
    $h_1: 0,
    $i_1: null,
    $0_1: null,
    $o_1: false,
    $t_1: false,
    $u_1: false,
    $v_1: false,
    $y_1: false,
    $z_1: null,
    $1l_1: null,
    $1_1: null,
    
    get_description: function PS_CustomFieldCreationInformation$get_description$in() {ULSyTi:;
        return this.$2_1;
    },
    
    set_description: function PS_CustomFieldCreationInformation$set_description$in(value) {ULSyTi:;
        this.$2_1 = value;
        return value;
    },
    
    get_entityType: function PS_CustomFieldCreationInformation$get_entityType$in() {ULSyTi:;
        return this.$1k_1;
    },
    
    set_entityType: function PS_CustomFieldCreationInformation$set_entityType$in(value) {ULSyTi:;
        this.$1k_1 = value;
        return value;
    },
    
    get_fieldType: function PS_CustomFieldCreationInformation$get_fieldType$in() {ULSyTi:;
        return this.$h_1;
    },
    
    set_fieldType: function PS_CustomFieldCreationInformation$set_fieldType$in(value) {ULSyTi:;
        this.$h_1 = value;
        return value;
    },
    
    get_formula: function PS_CustomFieldCreationInformation$get_formula$in() {ULSyTi:;
        return this.$i_1;
    },
    
    set_formula: function PS_CustomFieldCreationInformation$set_formula$in(value) {ULSyTi:;
        this.$i_1 = value;
        return value;
    },
    
    get_id: function PS_CustomFieldCreationInformation$get_id$in() {ULSyTi:;
        return this.$0_1;
    },
    
    set_id: function PS_CustomFieldCreationInformation$set_id$in(value) {ULSyTi:;
        this.$0_1 = value;
        return value;
    },
    
    get_isEditableInVisibility: function PS_CustomFieldCreationInformation$get_isEditableInVisibility$in() {ULSyTi:;
        return this.$o_1;
    },
    
    set_isEditableInVisibility: function PS_CustomFieldCreationInformation$set_isEditableInVisibility$in(value) {ULSyTi:;
        this.$o_1 = value;
        return value;
    },
    
    get_isMultilineText: function PS_CustomFieldCreationInformation$get_isMultilineText$in() {ULSyTi:;
        return this.$t_1;
    },
    
    set_isMultilineText: function PS_CustomFieldCreationInformation$set_isMultilineText$in(value) {ULSyTi:;
        this.$t_1 = value;
        return value;
    },
    
    get_isRequired: function PS_CustomFieldCreationInformation$get_isRequired$in() {ULSyTi:;
        return this.$u_1;
    },
    
    set_isRequired: function PS_CustomFieldCreationInformation$set_isRequired$in(value) {ULSyTi:;
        this.$u_1 = value;
        return value;
    },
    
    get_isWorkflowControlled: function PS_CustomFieldCreationInformation$get_isWorkflowControlled$in() {ULSyTi:;
        return this.$v_1;
    },
    
    set_isWorkflowControlled: function PS_CustomFieldCreationInformation$set_isWorkflowControlled$in(value) {ULSyTi:;
        this.$v_1 = value;
        return value;
    },
    
    get_lookupAllowMultiSelect: function PS_CustomFieldCreationInformation$get_lookupAllowMultiSelect$in() {ULSyTi:;
        return this.$y_1;
    },
    
    set_lookupAllowMultiSelect: function PS_CustomFieldCreationInformation$set_lookupAllowMultiSelect$in(value) {ULSyTi:;
        this.$y_1 = value;
        return value;
    },
    
    get_lookupDefaultValue: function PS_CustomFieldCreationInformation$get_lookupDefaultValue$in() {ULSyTi:;
        return this.$z_1;
    },
    
    set_lookupDefaultValue: function PS_CustomFieldCreationInformation$set_lookupDefaultValue$in(value) {ULSyTi:;
        this.$z_1 = value;
        return value;
    },
    
    get_lookupTable: function PS_CustomFieldCreationInformation$get_lookupTable$in() {ULSyTi:;
        return this.$1l_1;
    },
    
    set_lookupTable: function PS_CustomFieldCreationInformation$set_lookupTable$in(value) {ULSyTi:;
        this.$1l_1 = value;
        return value;
    },
    
    get_name: function PS_CustomFieldCreationInformation$get_name$in() {ULSyTi:;
        return this.$1_1;
    },
    
    set_name: function PS_CustomFieldCreationInformation$set_name$in(value) {ULSyTi:;
        this.$1_1 = value;
        return value;
    },
    
    get_typeId: function PS_CustomFieldCreationInformation$get_typeId$in() {ULSyTi:;
        return '{e98c4be3-a6b6-4801-ba6a-9394a5c25177}';
    },
    
    writeToXml: function PS_CustomFieldCreationInformation$writeToXml$in(writer, serializationContext) {ULSyTi:;
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = [ 'Description', 'EntityType', 'FieldType', 'Formula', 'Id', 'IsEditableInVisibility', 'IsMultilineText', 'IsRequired', 'IsWorkflowControlled', 'LookupAllowMultiSelect', 'LookupDefaultValue', 'LookupTable', 'Name' ];
        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    
    initPropertiesFromJson: function PS_CustomFieldCreationInformation$initPropertiesFromJson$in(parentNode) {ULSyTi:;
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.Description;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$2_1 = ($v_0);
            delete parentNode.Description;
        }
        $v_0 = parentNode.EntityType;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            delete parentNode.EntityType;
        }
        $v_0 = parentNode.FieldType;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$h_1 = ((SP.DataConvert.fixupType(null, $v_0)));
            delete parentNode.FieldType;
        }
        $v_0 = parentNode.Formula;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$i_1 = ($v_0);
            delete parentNode.Formula;
        }
        $v_0 = parentNode.Id;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$0_1 = ($v_0);
            delete parentNode.Id;
        }
        $v_0 = parentNode.IsEditableInVisibility;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$o_1 = ($v_0);
            delete parentNode.IsEditableInVisibility;
        }
        $v_0 = parentNode.IsMultilineText;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$t_1 = ($v_0);
            delete parentNode.IsMultilineText;
        }
        $v_0 = parentNode.IsRequired;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$u_1 = ($v_0);
            delete parentNode.IsRequired;
        }
        $v_0 = parentNode.IsWorkflowControlled;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$v_1 = ($v_0);
            delete parentNode.IsWorkflowControlled;
        }
        $v_0 = parentNode.LookupAllowMultiSelect;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$y_1 = ($v_0);
            delete parentNode.LookupAllowMultiSelect;
        }
        $v_0 = parentNode.LookupDefaultValue;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$z_1 = ($v_0);
            delete parentNode.LookupDefaultValue;
        }
        $v_0 = parentNode.LookupTable;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            delete parentNode.LookupTable;
        }
        $v_0 = parentNode.Name;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1_1 = ($v_0);
            delete parentNode.Name;
        }
    }
}


PS.DeletedPublishedAssignment = function PS_DeletedPublishedAssignment(context, objectPath) {ULSyTi:;
    PS.DeletedPublishedAssignment.initializeBase(this, [ context, objectPath ]);
}
PS.DeletedPublishedAssignment.prototype = {
    
    get_deletedDate: function PS_DeletedPublishedAssignment$get_deletedDate$in() {ULSyTi:;
        this.checkUninitializedProperty('DeletedDate');
        return (this.get_objectData().get_properties()['DeletedDate']);
    },
    
    get_id: function PS_DeletedPublishedAssignment$get_id$in() {ULSyTi:;
        this.checkUninitializedProperty('Id');
        return (this.get_objectData().get_properties()['Id']);
    },
    
    get_projectId: function PS_DeletedPublishedAssignment$get_projectId$in() {ULSyTi:;
        this.checkUninitializedProperty('ProjectId');
        return (this.get_objectData().get_properties()['ProjectId']);
    },
    
    initPropertiesFromJson: function PS_DeletedPublishedAssignment$initPropertiesFromJson$in(parentNode) {ULSyTi:;
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.DeletedDate;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['DeletedDate'] = ($v_0);
            delete parentNode.DeletedDate;
        }
        $v_0 = parentNode.Id;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Id'] = ($v_0);
            delete parentNode.Id;
        }
        $v_0 = parentNode.ProjectId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ProjectId'] = ($v_0);
            delete parentNode.ProjectId;
        }
    }
}


PS.DeletedPublishedAssignmentPropertyNames = function PS_DeletedPublishedAssignmentPropertyNames() {
}


PS.DeletedPublishedAssignmentCollection = function PS_DeletedPublishedAssignmentCollection(context, objectPath) {ULSyTi:;
    PS.DeletedPublishedAssignmentCollection.initializeBase(this, [ context, objectPath ]);
}
PS.DeletedPublishedAssignmentCollection.prototype = {
    
    itemAt: function PS_DeletedPublishedAssignmentCollection$itemAt$in(index) {ULSyTi:;
        return this.getItemAtIndex(index);
    },
    
    get_item: function PS_DeletedPublishedAssignmentCollection$get_item$in(index) {ULSyTi:;
        return this.getItemAtIndex(index);
    },
    
    get_childItemType: function PS_DeletedPublishedAssignmentCollection$get_childItemType$in() {ULSyTi:;
        return PS.DeletedPublishedAssignment;
    }
}


PS.DraftAssignment = function PS_DraftAssignment(context, objectPath) {ULSyTi:;
    PS.DraftAssignment.initializeBase(this, [ context, objectPath ]);
}
PS.DraftAssignment.prototype = {
    
    get_fieldValues: function PS_DraftAssignment$get_fieldValues$in() {ULSyTi:;
        var $v_0 = this.get_objectData().get_methodReturnObjects()['$m_dict'];
        if (SP.ScriptUtility.isNullOrUndefined($v_0)) {
            $v_0 = {};
            this.get_objectData().get_methodReturnObjects()['$m_dict'] = $v_0;
        }
        return $v_0;
    },
    
    get_item: function PS_DraftAssignment$get_item$in(fieldName) {ULSyTi:;
        return this.$6_2(fieldName);
    },
    
    set_item: function PS_DraftAssignment$set_item$in(fieldName, value) {ULSyTi:;
        this.$G_2(fieldName, value);
        return value;
    },
    
    get_actualCost: function PS_DraftAssignment$get_actualCost$in() {ULSyTi:;
        this.checkUninitializedProperty('ActualCost');
        return (this.get_objectData().get_properties()['ActualCost']);
    },
    
    set_actualCost: function PS_DraftAssignment$set_actualCost$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['ActualCost'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'ActualCost', value));
        }
        return value;
    },
    
    get_actualFinish: function PS_DraftAssignment$get_actualFinish$in() {ULSyTi:;
        this.checkUninitializedProperty('ActualFinish');
        return (this.get_objectData().get_properties()['ActualFinish']);
    },
    
    set_actualFinish: function PS_DraftAssignment$set_actualFinish$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['ActualFinish'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'ActualFinish', value));
        }
        return value;
    },
    
    get_actualOvertimeWork: function PS_DraftAssignment$get_actualOvertimeWork$in() {ULSyTi:;
        this.checkUninitializedProperty('ActualOvertimeWork');
        return (this.get_objectData().get_properties()['ActualOvertimeWork']);
    },
    
    set_actualOvertimeWork: function PS_DraftAssignment$set_actualOvertimeWork$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['ActualOvertimeWork'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'ActualOvertimeWork', value));
        }
        return value;
    },
    
    get_actualOvertimeWorkMilliseconds: function PS_DraftAssignment$get_actualOvertimeWorkMilliseconds$in() {ULSyTi:;
        this.checkUninitializedProperty('ActualOvertimeWorkMilliseconds');
        return (this.get_objectData().get_properties()['ActualOvertimeWorkMilliseconds']);
    },
    
    set_actualOvertimeWorkMilliseconds: function PS_DraftAssignment$set_actualOvertimeWorkMilliseconds$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['ActualOvertimeWorkMilliseconds'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'ActualOvertimeWorkMilliseconds', value));
        }
        return value;
    },
    
    get_actualStart: function PS_DraftAssignment$get_actualStart$in() {ULSyTi:;
        this.checkUninitializedProperty('ActualStart');
        return (this.get_objectData().get_properties()['ActualStart']);
    },
    
    set_actualStart: function PS_DraftAssignment$set_actualStart$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['ActualStart'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'ActualStart', value));
        }
        return value;
    },
    
    get_actualWork: function PS_DraftAssignment$get_actualWork$in() {ULSyTi:;
        this.checkUninitializedProperty('ActualWork');
        return (this.get_objectData().get_properties()['ActualWork']);
    },
    
    set_actualWork: function PS_DraftAssignment$set_actualWork$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['ActualWork'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'ActualWork', value));
        }
        return value;
    },
    
    get_actualWorkMilliseconds: function PS_DraftAssignment$get_actualWorkMilliseconds$in() {ULSyTi:;
        this.checkUninitializedProperty('ActualWorkMilliseconds');
        return (this.get_objectData().get_properties()['ActualWorkMilliseconds']);
    },
    
    set_actualWorkMilliseconds: function PS_DraftAssignment$set_actualWorkMilliseconds$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['ActualWorkMilliseconds'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'ActualWorkMilliseconds', value));
        }
        return value;
    },
    
    get_budgetedCost: function PS_DraftAssignment$get_budgetedCost$in() {ULSyTi:;
        this.checkUninitializedProperty('BudgetedCost');
        return (this.get_objectData().get_properties()['BudgetedCost']);
    },
    
    set_budgetedCost: function PS_DraftAssignment$set_budgetedCost$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['BudgetedCost'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'BudgetedCost', value));
        }
        return value;
    },
    
    get_budgetedWork: function PS_DraftAssignment$get_budgetedWork$in() {ULSyTi:;
        this.checkUninitializedProperty('BudgetedWork');
        return (this.get_objectData().get_properties()['BudgetedWork']);
    },
    
    set_budgetedWork: function PS_DraftAssignment$set_budgetedWork$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['BudgetedWork'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'BudgetedWork', value));
        }
        return value;
    },
    
    get_budgetedWorkMilliseconds: function PS_DraftAssignment$get_budgetedWorkMilliseconds$in() {ULSyTi:;
        this.checkUninitializedProperty('BudgetedWorkMilliseconds');
        return (this.get_objectData().get_properties()['BudgetedWorkMilliseconds']);
    },
    
    set_budgetedWorkMilliseconds: function PS_DraftAssignment$set_budgetedWorkMilliseconds$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['BudgetedWorkMilliseconds'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'BudgetedWorkMilliseconds', value));
        }
        return value;
    },
    
    get_cost: function PS_DraftAssignment$get_cost$in() {ULSyTi:;
        this.checkUninitializedProperty('Cost');
        return (this.get_objectData().get_properties()['Cost']);
    },
    
    set_cost: function PS_DraftAssignment$set_cost$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['Cost'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Cost', value));
        }
        return value;
    },
    
    get_defaultBookingType: function PS_DraftAssignment$get_defaultBookingType$in() {ULSyTi:;
        this.checkUninitializedProperty('DefaultBookingType');
        return (this.get_objectData().get_properties()['DefaultBookingType']);
    },
    
    set_defaultBookingType: function PS_DraftAssignment$set_defaultBookingType$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['DefaultBookingType'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'DefaultBookingType', value));
        }
        return value;
    },
    
    get_isLockedByManager: function PS_DraftAssignment$get_isLockedByManager$in() {ULSyTi:;
        this.checkUninitializedProperty('IsLockedByManager');
        return (this.get_objectData().get_properties()['IsLockedByManager']);
    },
    
    set_isLockedByManager: function PS_DraftAssignment$set_isLockedByManager$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['IsLockedByManager'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'IsLockedByManager', value));
        }
        return value;
    },
    
    get_isWorkResource: function PS_DraftAssignment$get_isWorkResource$in() {ULSyTi:;
        this.checkUninitializedProperty('IsWorkResource');
        return (this.get_objectData().get_properties()['IsWorkResource']);
    },
    
    set_isWorkResource: function PS_DraftAssignment$set_isWorkResource$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['IsWorkResource'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'IsWorkResource', value));
        }
        return value;
    },
    
    get_overtimeWork: function PS_DraftAssignment$get_overtimeWork$in() {ULSyTi:;
        this.checkUninitializedProperty('OvertimeWork');
        return (this.get_objectData().get_properties()['OvertimeWork']);
    },
    
    set_overtimeWork: function PS_DraftAssignment$set_overtimeWork$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['OvertimeWork'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'OvertimeWork', value));
        }
        return value;
    },
    
    get_overtimeWorkMilliseconds: function PS_DraftAssignment$get_overtimeWorkMilliseconds$in() {ULSyTi:;
        this.checkUninitializedProperty('OvertimeWorkMilliseconds');
        return (this.get_objectData().get_properties()['OvertimeWorkMilliseconds']);
    },
    
    set_overtimeWorkMilliseconds: function PS_DraftAssignment$set_overtimeWorkMilliseconds$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['OvertimeWorkMilliseconds'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'OvertimeWorkMilliseconds', value));
        }
        return value;
    },
    
    get_owner: function PS_DraftAssignment$get_owner$in() {ULSyTi:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['Owner']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.User(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Owner'));
            this.get_objectData().get_clientObjectProperties()['Owner'] = $v_0;
        }
        return $v_0;
    },
    
    set_owner: function PS_DraftAssignment$set_owner$in(value) {ULSyTi:;
        this.get_objectData().get_clientObjectProperties()['Owner'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Owner', value));
        }
        return value;
    },
    
    get_parent: function PS_DraftAssignment$get_parent$in() {ULSyTi:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['Parent']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new PS.DraftAssignment(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Parent'));
            this.get_objectData().get_clientObjectProperties()['Parent'] = $v_0;
        }
        return $v_0;
    },
    
    get_percentWorkComplete: function PS_DraftAssignment$get_percentWorkComplete$in() {ULSyTi:;
        this.checkUninitializedProperty('PercentWorkComplete');
        return (this.get_objectData().get_properties()['PercentWorkComplete']);
    },
    
    set_percentWorkComplete: function PS_DraftAssignment$set_percentWorkComplete$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['PercentWorkComplete'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'PercentWorkComplete', value));
        }
        return value;
    },
    
    get_regularWork: function PS_DraftAssignment$get_regularWork$in() {ULSyTi:;
        this.checkUninitializedProperty('RegularWork');
        return (this.get_objectData().get_properties()['RegularWork']);
    },
    
    set_regularWork: function PS_DraftAssignment$set_regularWork$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['RegularWork'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'RegularWork', value));
        }
        return value;
    },
    
    get_regularWorkMilliseconds: function PS_DraftAssignment$get_regularWorkMilliseconds$in() {ULSyTi:;
        this.checkUninitializedProperty('RegularWorkMilliseconds');
        return (this.get_objectData().get_properties()['RegularWorkMilliseconds']);
    },
    
    set_regularWorkMilliseconds: function PS_DraftAssignment$set_regularWorkMilliseconds$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['RegularWorkMilliseconds'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'RegularWorkMilliseconds', value));
        }
        return value;
    },
    
    get_remainingOvertimeWork: function PS_DraftAssignment$get_remainingOvertimeWork$in() {ULSyTi:;
        this.checkUninitializedProperty('RemainingOvertimeWork');
        return (this.get_objectData().get_properties()['RemainingOvertimeWork']);
    },
    
    set_remainingOvertimeWork: function PS_DraftAssignment$set_remainingOvertimeWork$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['RemainingOvertimeWork'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'RemainingOvertimeWork', value));
        }
        return value;
    },
    
    get_remainingOvertimeWorkMilliseconds: function PS_DraftAssignment$get_remainingOvertimeWorkMilliseconds$in() {ULSyTi:;
        this.checkUninitializedProperty('RemainingOvertimeWorkMilliseconds');
        return (this.get_objectData().get_properties()['RemainingOvertimeWorkMilliseconds']);
    },
    
    set_remainingOvertimeWorkMilliseconds: function PS_DraftAssignment$set_remainingOvertimeWorkMilliseconds$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['RemainingOvertimeWorkMilliseconds'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'RemainingOvertimeWorkMilliseconds', value));
        }
        return value;
    },
    
    get_remainingWork: function PS_DraftAssignment$get_remainingWork$in() {ULSyTi:;
        this.checkUninitializedProperty('RemainingWork');
        return (this.get_objectData().get_properties()['RemainingWork']);
    },
    
    set_remainingWork: function PS_DraftAssignment$set_remainingWork$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['RemainingWork'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'RemainingWork', value));
        }
        return value;
    },
    
    get_remainingWorkMilliseconds: function PS_DraftAssignment$get_remainingWorkMilliseconds$in() {ULSyTi:;
        this.checkUninitializedProperty('RemainingWorkMilliseconds');
        return (this.get_objectData().get_properties()['RemainingWorkMilliseconds']);
    },
    
    set_remainingWorkMilliseconds: function PS_DraftAssignment$set_remainingWorkMilliseconds$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['RemainingWorkMilliseconds'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'RemainingWorkMilliseconds', value));
        }
        return value;
    },
    
    get_resource: function PS_DraftAssignment$get_resource$in() {ULSyTi:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['Resource']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new PS.DraftProjectResource(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Resource'));
            this.get_objectData().get_clientObjectProperties()['Resource'] = $v_0;
        }
        return $v_0;
    },
    
    get_resourceCapacity: function PS_DraftAssignment$get_resourceCapacity$in() {ULSyTi:;
        this.checkUninitializedProperty('ResourceCapacity');
        return (this.get_objectData().get_properties()['ResourceCapacity']);
    },
    
    set_resourceCapacity: function PS_DraftAssignment$set_resourceCapacity$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['ResourceCapacity'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'ResourceCapacity', value));
        }
        return value;
    },
    
    get_task: function PS_DraftAssignment$get_task$in() {ULSyTi:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['Task']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new PS.DraftTask(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Task'));
            this.get_objectData().get_clientObjectProperties()['Task'] = $v_0;
        }
        return $v_0;
    },
    
    get_work: function PS_DraftAssignment$get_work$in() {ULSyTi:;
        this.checkUninitializedProperty('Work');
        return (this.get_objectData().get_properties()['Work']);
    },
    
    set_work: function PS_DraftAssignment$set_work$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['Work'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Work', value));
        }
        return value;
    },
    
    get_workMilliseconds: function PS_DraftAssignment$get_workMilliseconds$in() {ULSyTi:;
        this.checkUninitializedProperty('WorkMilliseconds');
        return (this.get_objectData().get_properties()['WorkMilliseconds']);
    },
    
    set_workMilliseconds: function PS_DraftAssignment$set_workMilliseconds$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['WorkMilliseconds'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'WorkMilliseconds', value));
        }
        return value;
    },
    
    initNonPropertiesFromJson: function PS_DraftAssignment$initNonPropertiesFromJson$in(parentNode) {ULSyTi:;
        SP.DataConvert.populateDictionaryFromObject(this.get_fieldValues(), parentNode);
        SP.DataConvert.fixupTypes(this.get_context(), this.get_fieldValues());
    },
    
    initPropertiesFromJson: function PS_DraftAssignment$initPropertiesFromJson$in(parentNode) {ULSyTi:;
        PS.Assignment.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.ActualCost;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ActualCost'] = ($v_0);
            delete parentNode.ActualCost;
        }
        $v_0 = parentNode.ActualFinish;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ActualFinish'] = ($v_0);
            delete parentNode.ActualFinish;
        }
        $v_0 = parentNode.ActualOvertimeWork;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ActualOvertimeWork'] = ($v_0);
            delete parentNode.ActualOvertimeWork;
        }
        $v_0 = parentNode.ActualOvertimeWorkMilliseconds;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ActualOvertimeWorkMilliseconds'] = ($v_0);
            delete parentNode.ActualOvertimeWorkMilliseconds;
        }
        $v_0 = parentNode.ActualStart;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ActualStart'] = ($v_0);
            delete parentNode.ActualStart;
        }
        $v_0 = parentNode.ActualWork;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ActualWork'] = ($v_0);
            delete parentNode.ActualWork;
        }
        $v_0 = parentNode.ActualWorkMilliseconds;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ActualWorkMilliseconds'] = ($v_0);
            delete parentNode.ActualWorkMilliseconds;
        }
        $v_0 = parentNode.BudgetedCost;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['BudgetedCost'] = ($v_0);
            delete parentNode.BudgetedCost;
        }
        $v_0 = parentNode.BudgetedWork;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['BudgetedWork'] = ($v_0);
            delete parentNode.BudgetedWork;
        }
        $v_0 = parentNode.BudgetedWorkMilliseconds;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['BudgetedWorkMilliseconds'] = ($v_0);
            delete parentNode.BudgetedWorkMilliseconds;
        }
        $v_0 = parentNode.Cost;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Cost'] = ($v_0);
            delete parentNode.Cost;
        }
        $v_0 = parentNode.DefaultBookingType;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['DefaultBookingType'] = ((SP.DataConvert.fixupType(this.get_context(), $v_0)));
            delete parentNode.DefaultBookingType;
        }
        $v_0 = parentNode.IsLockedByManager;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['IsLockedByManager'] = ($v_0);
            delete parentNode.IsLockedByManager;
        }
        $v_0 = parentNode.IsWorkResource;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['IsWorkResource'] = ($v_0);
            delete parentNode.IsWorkResource;
        }
        $v_0 = parentNode.OvertimeWork;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['OvertimeWork'] = ($v_0);
            delete parentNode.OvertimeWork;
        }
        $v_0 = parentNode.OvertimeWorkMilliseconds;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['OvertimeWorkMilliseconds'] = ($v_0);
            delete parentNode.OvertimeWorkMilliseconds;
        }
        $v_0 = parentNode.Owner;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('Owner', this.get_owner(), $v_0);
            this.get_owner().fromJson($v_0);
            delete parentNode.Owner;
        }
        $v_0 = parentNode.Parent;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('Parent', this.get_parent(), $v_0);
            this.get_parent().fromJson($v_0);
            delete parentNode.Parent;
        }
        $v_0 = parentNode.PercentWorkComplete;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['PercentWorkComplete'] = ($v_0);
            delete parentNode.PercentWorkComplete;
        }
        $v_0 = parentNode.RegularWork;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['RegularWork'] = ($v_0);
            delete parentNode.RegularWork;
        }
        $v_0 = parentNode.RegularWorkMilliseconds;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['RegularWorkMilliseconds'] = ($v_0);
            delete parentNode.RegularWorkMilliseconds;
        }
        $v_0 = parentNode.RemainingOvertimeWork;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['RemainingOvertimeWork'] = ($v_0);
            delete parentNode.RemainingOvertimeWork;
        }
        $v_0 = parentNode.RemainingOvertimeWorkMilliseconds;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['RemainingOvertimeWorkMilliseconds'] = ($v_0);
            delete parentNode.RemainingOvertimeWorkMilliseconds;
        }
        $v_0 = parentNode.RemainingWork;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['RemainingWork'] = ($v_0);
            delete parentNode.RemainingWork;
        }
        $v_0 = parentNode.RemainingWorkMilliseconds;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['RemainingWorkMilliseconds'] = ($v_0);
            delete parentNode.RemainingWorkMilliseconds;
        }
        $v_0 = parentNode.Resource;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('Resource', this.get_resource(), $v_0);
            this.get_resource().fromJson($v_0);
            delete parentNode.Resource;
        }
        $v_0 = parentNode.ResourceCapacity;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ResourceCapacity'] = ($v_0);
            delete parentNode.ResourceCapacity;
        }
        $v_0 = parentNode.Task;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('Task', this.get_task(), $v_0);
            this.get_task().fromJson($v_0);
            delete parentNode.Task;
        }
        $v_0 = parentNode.Work;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Work'] = ($v_0);
            delete parentNode.Work;
        }
        $v_0 = parentNode.WorkMilliseconds;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['WorkMilliseconds'] = ($v_0);
            delete parentNode.WorkMilliseconds;
        }
    },
    
    $6_2: function PS_DraftAssignment$$6_2$in($p0) {
        var $v_0 = this.get_fieldValues()[$p0];
        if (SP.ScriptUtility.isUndefined($v_0)) {
            throw Error.create(SP.ResResources.getString('PropertyHasNotBeenInitialized'));
        }
        return $v_0;
    },
    
    refreshLoad: function PS_DraftAssignment$refreshLoad$in() {ULSyTi:;
        SP.ClientObject.prototype.refreshLoad.call(this);
        this.loadExpandoFields();
    },
    
    loadExpandoFields: function PS_DraftAssignment$loadExpandoFields$in() {ULSyTi:;
        var $$dict_1 = this.get_fieldValues();
        for (var $$key_2 in $$dict_1) {
            var $v_0 = { key: $$key_2, value: $$dict_1[$$key_2] };
            this.retrieve($v_0.key);
        }
    },
    
    $G_2: function PS_DraftAssignment$$G_2$in($p0, $p1) {
        var $v_0 = this.get_context();
        this.get_fieldValues()[$p0] = $p1;
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'SetCustomFieldValue', [ $p0, $p1 ]);
        if ($v_0) {
            $v_0.addQuery($v_1);
        }
    },
    
    deleteObject: function PS_DraftAssignment$deleteObject$in() {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'DeleteObject', null);
        $v_0.addQuery($v_1);
        this.removeFromParentCollection();
    }
}


PS.DraftAssignmentPropertyNames = function PS_DraftAssignmentPropertyNames() {
}


PS.DraftAssignmentObjectPropertyNames = function PS_DraftAssignmentObjectPropertyNames() {
}


PS.DraftAssignmentCollection = function PS_DraftAssignmentCollection(context, objectPath) {ULSyTi:;
    PS.DraftAssignmentCollection.initializeBase(this, [ context, objectPath ]);
}
PS.DraftAssignmentCollection.prototype = {
    
    itemAt: function PS_DraftAssignmentCollection$itemAt$in(index) {ULSyTi:;
        return this.getItemAtIndex(index);
    },
    
    get_item: function PS_DraftAssignmentCollection$get_item$in(index) {ULSyTi:;
        return this.getItemAtIndex(index);
    },
    
    get_childItemType: function PS_DraftAssignmentCollection$get_childItemType$in() {ULSyTi:;
        return PS.DraftAssignment;
    },
    
    getById: function PS_DraftAssignmentCollection$getById$in(objectId) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = ((this.get_objectData().get_methodReturnObjects()['GetById']));
        if (SP.ScriptUtility.isNullOrUndefined($v_2)) {
            $v_2 = {};
            this.get_objectData().get_methodReturnObjects()['GetById'] = $v_2;
        }
        $v_1 = (($v_2[objectId]));
        if (!$v_0.get_disableReturnValueCache() && !SP.ScriptUtility.isNullOrUndefined($v_1)) {
            return $v_1;
        }
        $v_1 = new PS.DraftAssignment($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetById', [ objectId ]));
        if (!$v_0.get_disableReturnValueCache()) {
            $v_2[objectId] = $v_1;
        }
        return $v_1;
    },
    
    getByGuid: function PS_DraftAssignmentCollection$getByGuid$in(uid) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = ((this.get_objectData().get_methodReturnObjects()['GetByGuid']));
        if (SP.ScriptUtility.isNullOrUndefined($v_2)) {
            $v_2 = {};
            this.get_objectData().get_methodReturnObjects()['GetByGuid'] = $v_2;
        }
        $v_1 = (($v_2[uid.toString()]));
        if (!$v_0.get_disableReturnValueCache() && !SP.ScriptUtility.isNullOrUndefined($v_1)) {
            return $v_1;
        }
        $v_1 = new PS.DraftAssignment($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetByGuid', [ uid ]));
        if (!$v_0.get_disableReturnValueCache()) {
            $v_2[uid.toString()] = $v_1;
        }
        return $v_1;
    },
    
    add: function PS_DraftAssignmentCollection$add$in(parameters) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        $v_1 = new PS.DraftAssignment($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'Add', [ parameters ]));
        $v_1.get_path().setPendingReplace();
        var $v_2 = new SP.ObjectIdentityQuery($v_1.get_path());
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        $v_0.addQuery($v_2);
        this.addChild($v_1);
        return $v_1;
    },
    
    remove: function PS_DraftAssignmentCollection$remove$in(assignment) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'Remove', [ assignment ]);
        $v_0.addQuery($v_2);
        $v_1 = new SP.BooleanResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        this.removeChild(assignment);
        return $v_1;
    }
}


PS.DraftProject = function PS_DraftProject(context, objectPath) {ULSyTi:;
    PS.DraftProject.initializeBase(this, [ context, objectPath ]);
}
PS.DraftProject.prototype = {
    
    get_fieldValues: function PS_DraftProject$get_fieldValues$in() {ULSyTi:;
        var $v_0 = this.get_objectData().get_methodReturnObjects()['$m_dict'];
        if (SP.ScriptUtility.isNullOrUndefined($v_0)) {
            $v_0 = {};
            this.get_objectData().get_methodReturnObjects()['$m_dict'] = $v_0;
        }
        return $v_0;
    },
    
    get_item: function PS_DraftProject$get_item$in(fieldName) {ULSyTi:;
        return this.$6_2(fieldName);
    },
    
    set_item: function PS_DraftProject$set_item$in(fieldName, value) {ULSyTi:;
        this.setCustomFieldValue(fieldName, value);
        return value;
    },
    
    get_assignments: function PS_DraftProject$get_assignments$in() {ULSyTi:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['Assignments']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new PS.DraftAssignmentCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Assignments'));
            this.get_objectData().get_clientObjectProperties()['Assignments'] = $v_0;
        }
        return $v_0;
    },
    
    get_calendar: function PS_DraftProject$get_calendar$in() {ULSyTi:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['Calendar']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new PS.Calendar(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Calendar'));
            this.get_objectData().get_clientObjectProperties()['Calendar'] = $v_0;
        }
        return $v_0;
    },
    
    set_calendar: function PS_DraftProject$set_calendar$in(value) {ULSyTi:;
        this.get_objectData().get_clientObjectProperties()['Calendar'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Calendar', value));
        }
        return value;
    },
    
    get_currencyCode: function PS_DraftProject$get_currencyCode$in() {ULSyTi:;
        this.checkUninitializedProperty('CurrencyCode');
        return (this.get_objectData().get_properties()['CurrencyCode']);
    },
    
    set_currencyCode: function PS_DraftProject$set_currencyCode$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['CurrencyCode'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'CurrencyCode', value));
        }
        return value;
    },
    
    get_currencyDigits: function PS_DraftProject$get_currencyDigits$in() {ULSyTi:;
        this.checkUninitializedProperty('CurrencyDigits');
        return (this.get_objectData().get_properties()['CurrencyDigits']);
    },
    
    set_currencyDigits: function PS_DraftProject$set_currencyDigits$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['CurrencyDigits'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'CurrencyDigits', value));
        }
        return value;
    },
    
    get_currencyPosition: function PS_DraftProject$get_currencyPosition$in() {ULSyTi:;
        this.checkUninitializedProperty('CurrencyPosition');
        return (this.get_objectData().get_properties()['CurrencyPosition']);
    },
    
    set_currencyPosition: function PS_DraftProject$set_currencyPosition$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['CurrencyPosition'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'CurrencyPosition', value));
        }
        return value;
    },
    
    get_currencySymbol: function PS_DraftProject$get_currencySymbol$in() {ULSyTi:;
        this.checkUninitializedProperty('CurrencySymbol');
        return (this.get_objectData().get_properties()['CurrencySymbol']);
    },
    
    set_currencySymbol: function PS_DraftProject$set_currencySymbol$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['CurrencySymbol'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'CurrencySymbol', value));
        }
        return value;
    },
    
    get_currentDate: function PS_DraftProject$get_currentDate$in() {ULSyTi:;
        this.checkUninitializedProperty('CurrentDate');
        return (this.get_objectData().get_properties()['CurrentDate']);
    },
    
    set_currentDate: function PS_DraftProject$set_currentDate$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['CurrentDate'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'CurrentDate', value));
        }
        return value;
    },
    
    get_daysPerMonth: function PS_DraftProject$get_daysPerMonth$in() {ULSyTi:;
        this.checkUninitializedProperty('DaysPerMonth');
        return (this.get_objectData().get_properties()['DaysPerMonth']);
    },
    
    set_daysPerMonth: function PS_DraftProject$set_daysPerMonth$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['DaysPerMonth'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'DaysPerMonth', value));
        }
        return value;
    },
    
    get_defaultEffortDriven: function PS_DraftProject$get_defaultEffortDriven$in() {ULSyTi:;
        this.checkUninitializedProperty('DefaultEffortDriven');
        return (this.get_objectData().get_properties()['DefaultEffortDriven']);
    },
    
    set_defaultEffortDriven: function PS_DraftProject$set_defaultEffortDriven$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['DefaultEffortDriven'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'DefaultEffortDriven', value));
        }
        return value;
    },
    
    get_defaultEstimatedDuration: function PS_DraftProject$get_defaultEstimatedDuration$in() {ULSyTi:;
        this.checkUninitializedProperty('DefaultEstimatedDuration');
        return (this.get_objectData().get_properties()['DefaultEstimatedDuration']);
    },
    
    set_defaultEstimatedDuration: function PS_DraftProject$set_defaultEstimatedDuration$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['DefaultEstimatedDuration'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'DefaultEstimatedDuration', value));
        }
        return value;
    },
    
    get_defaultFixedCostAccrual: function PS_DraftProject$get_defaultFixedCostAccrual$in() {ULSyTi:;
        this.checkUninitializedProperty('DefaultFixedCostAccrual');
        return (this.get_objectData().get_properties()['DefaultFixedCostAccrual']);
    },
    
    set_defaultFixedCostAccrual: function PS_DraftProject$set_defaultFixedCostAccrual$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['DefaultFixedCostAccrual'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'DefaultFixedCostAccrual', value));
        }
        return value;
    },
    
    get_defaultOvertimeRate: function PS_DraftProject$get_defaultOvertimeRate$in() {ULSyTi:;
        this.checkUninitializedProperty('DefaultOvertimeRate');
        return (this.get_objectData().get_properties()['DefaultOvertimeRate']);
    },
    
    set_defaultOvertimeRate: function PS_DraftProject$set_defaultOvertimeRate$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['DefaultOvertimeRate'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'DefaultOvertimeRate', value));
        }
        return value;
    },
    
    get_defaultStandardRate: function PS_DraftProject$get_defaultStandardRate$in() {ULSyTi:;
        this.checkUninitializedProperty('DefaultStandardRate');
        return (this.get_objectData().get_properties()['DefaultStandardRate']);
    },
    
    set_defaultStandardRate: function PS_DraftProject$set_defaultStandardRate$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['DefaultStandardRate'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'DefaultStandardRate', value));
        }
        return value;
    },
    
    get_defaultTaskType: function PS_DraftProject$get_defaultTaskType$in() {ULSyTi:;
        this.checkUninitializedProperty('DefaultTaskType');
        return (this.get_objectData().get_properties()['DefaultTaskType']);
    },
    
    set_defaultTaskType: function PS_DraftProject$set_defaultTaskType$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['DefaultTaskType'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'DefaultTaskType', value));
        }
        return value;
    },
    
    get_defaultWorkFormat: function PS_DraftProject$get_defaultWorkFormat$in() {ULSyTi:;
        this.checkUninitializedProperty('DefaultWorkFormat');
        return (this.get_objectData().get_properties()['DefaultWorkFormat']);
    },
    
    set_defaultWorkFormat: function PS_DraftProject$set_defaultWorkFormat$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['DefaultWorkFormat'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'DefaultWorkFormat', value));
        }
        return value;
    },
    
    get_description: function PS_DraftProject$get_description$in() {ULSyTi:;
        this.checkUninitializedProperty('Description');
        return (this.get_objectData().get_properties()['Description']);
    },
    
    set_description: function PS_DraftProject$set_description$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['Description'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Description', value));
        }
        return value;
    },
    
    get_finishDate: function PS_DraftProject$get_finishDate$in() {ULSyTi:;
        this.checkUninitializedProperty('FinishDate');
        return (this.get_objectData().get_properties()['FinishDate']);
    },
    
    set_finishDate: function PS_DraftProject$set_finishDate$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['FinishDate'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'FinishDate', value));
        }
        return value;
    },
    
    get_fiscalYearStartMonth: function PS_DraftProject$get_fiscalYearStartMonth$in() {ULSyTi:;
        this.checkUninitializedProperty('FiscalYearStartMonth');
        return (this.get_objectData().get_properties()['FiscalYearStartMonth']);
    },
    
    set_fiscalYearStartMonth: function PS_DraftProject$set_fiscalYearStartMonth$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['FiscalYearStartMonth'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'FiscalYearStartMonth', value));
        }
        return value;
    },
    
    get_includeCustomFields: function PS_DraftProject$get_includeCustomFields$in() {ULSyTi:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['IncludeCustomFields']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new PS.DraftProject(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'IncludeCustomFields'));
            this.get_objectData().get_clientObjectProperties()['IncludeCustomFields'] = $v_0;
        }
        return $v_0;
    },
    
    get_minutesPerDay: function PS_DraftProject$get_minutesPerDay$in() {ULSyTi:;
        this.checkUninitializedProperty('MinutesPerDay');
        return (this.get_objectData().get_properties()['MinutesPerDay']);
    },
    
    set_minutesPerDay: function PS_DraftProject$set_minutesPerDay$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['MinutesPerDay'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'MinutesPerDay', value));
        }
        return value;
    },
    
    get_minutesPerWeek: function PS_DraftProject$get_minutesPerWeek$in() {ULSyTi:;
        this.checkUninitializedProperty('MinutesPerWeek');
        return (this.get_objectData().get_properties()['MinutesPerWeek']);
    },
    
    set_minutesPerWeek: function PS_DraftProject$set_minutesPerWeek$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['MinutesPerWeek'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'MinutesPerWeek', value));
        }
        return value;
    },
    
    get_name: function PS_DraftProject$get_name$in() {ULSyTi:;
        this.checkUninitializedProperty('Name');
        return (this.get_objectData().get_properties()['Name']);
    },
    
    set_name: function PS_DraftProject$set_name$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['Name'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Name', value));
        }
        return value;
    },
    
    get_newTasksAreManual: function PS_DraftProject$get_newTasksAreManual$in() {ULSyTi:;
        this.checkUninitializedProperty('NewTasksAreManual');
        return (this.get_objectData().get_properties()['NewTasksAreManual']);
    },
    
    set_newTasksAreManual: function PS_DraftProject$set_newTasksAreManual$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['NewTasksAreManual'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'NewTasksAreManual', value));
        }
        return value;
    },
    
    get_numberFiscalYearFromStart: function PS_DraftProject$get_numberFiscalYearFromStart$in() {ULSyTi:;
        this.checkUninitializedProperty('NumberFiscalYearFromStart');
        return (this.get_objectData().get_properties()['NumberFiscalYearFromStart']);
    },
    
    set_numberFiscalYearFromStart: function PS_DraftProject$set_numberFiscalYearFromStart$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['NumberFiscalYearFromStart'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'NumberFiscalYearFromStart', value));
        }
        return value;
    },
    
    get_owner: function PS_DraftProject$get_owner$in() {ULSyTi:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['Owner']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.User(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Owner'));
            this.get_objectData().get_clientObjectProperties()['Owner'] = $v_0;
        }
        return $v_0;
    },
    
    set_owner: function PS_DraftProject$set_owner$in(value) {ULSyTi:;
        this.get_objectData().get_clientObjectProperties()['Owner'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Owner', value));
        }
        return value;
    },
    
    get_projectIdentifier: function PS_DraftProject$get_projectIdentifier$in() {ULSyTi:;
        this.checkUninitializedProperty('ProjectIdentifier');
        return (this.get_objectData().get_properties()['ProjectIdentifier']);
    },
    
    set_projectIdentifier: function PS_DraftProject$set_projectIdentifier$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['ProjectIdentifier'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'ProjectIdentifier', value));
        }
        return value;
    },
    
    get_projectResources: function PS_DraftProject$get_projectResources$in() {ULSyTi:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['ProjectResources']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new PS.DraftProjectResourceCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'ProjectResources'));
            this.get_objectData().get_clientObjectProperties()['ProjectResources'] = $v_0;
        }
        return $v_0;
    },
    
    get_protectedActualsSynch: function PS_DraftProject$get_protectedActualsSynch$in() {ULSyTi:;
        this.checkUninitializedProperty('ProtectedActualsSynch');
        return (this.get_objectData().get_properties()['ProtectedActualsSynch']);
    },
    
    set_protectedActualsSynch: function PS_DraftProject$set_protectedActualsSynch$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['ProtectedActualsSynch'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'ProtectedActualsSynch', value));
        }
        return value;
    },
    
    get_showEstimatedDurations: function PS_DraftProject$get_showEstimatedDurations$in() {ULSyTi:;
        this.checkUninitializedProperty('ShowEstimatedDurations');
        return (this.get_objectData().get_properties()['ShowEstimatedDurations']);
    },
    
    set_showEstimatedDurations: function PS_DraftProject$set_showEstimatedDurations$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['ShowEstimatedDurations'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'ShowEstimatedDurations', value));
        }
        return value;
    },
    
    get_startDate: function PS_DraftProject$get_startDate$in() {ULSyTi:;
        this.checkUninitializedProperty('StartDate');
        return (this.get_objectData().get_properties()['StartDate']);
    },
    
    set_startDate: function PS_DraftProject$set_startDate$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['StartDate'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'StartDate', value));
        }
        return value;
    },
    
    get_statusDate: function PS_DraftProject$get_statusDate$in() {ULSyTi:;
        this.checkUninitializedProperty('StatusDate');
        return (this.get_objectData().get_properties()['StatusDate']);
    },
    
    set_statusDate: function PS_DraftProject$set_statusDate$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['StatusDate'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'StatusDate', value));
        }
        return value;
    },
    
    get_taskLinks: function PS_DraftProject$get_taskLinks$in() {ULSyTi:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['TaskLinks']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new PS.DraftTaskLinkCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'TaskLinks'));
            this.get_objectData().get_clientObjectProperties()['TaskLinks'] = $v_0;
        }
        return $v_0;
    },
    
    get_tasks: function PS_DraftProject$get_tasks$in() {ULSyTi:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['Tasks']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new PS.DraftTaskCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Tasks'));
            this.get_objectData().get_clientObjectProperties()['Tasks'] = $v_0;
        }
        return $v_0;
    },
    
    get_trackingMode: function PS_DraftProject$get_trackingMode$in() {ULSyTi:;
        this.checkUninitializedProperty('TrackingMode');
        return (this.get_objectData().get_properties()['TrackingMode']);
    },
    
    set_trackingMode: function PS_DraftProject$set_trackingMode$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['TrackingMode'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'TrackingMode', value));
        }
        return value;
    },
    
    get_utilizationDate: function PS_DraftProject$get_utilizationDate$in() {ULSyTi:;
        this.checkUninitializedProperty('UtilizationDate');
        return (this.get_objectData().get_properties()['UtilizationDate']);
    },
    
    set_utilizationDate: function PS_DraftProject$set_utilizationDate$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['UtilizationDate'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'UtilizationDate', value));
        }
        return value;
    },
    
    get_utilizationType: function PS_DraftProject$get_utilizationType$in() {ULSyTi:;
        this.checkUninitializedProperty('UtilizationType');
        return (this.get_objectData().get_properties()['UtilizationType']);
    },
    
    set_utilizationType: function PS_DraftProject$set_utilizationType$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['UtilizationType'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'UtilizationType', value));
        }
        return value;
    },
    
    get_weekStartDay: function PS_DraftProject$get_weekStartDay$in() {ULSyTi:;
        this.checkUninitializedProperty('WeekStartDay');
        return (this.get_objectData().get_properties()['WeekStartDay']);
    },
    
    set_weekStartDay: function PS_DraftProject$set_weekStartDay$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['WeekStartDay'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'WeekStartDay', value));
        }
        return value;
    },
    
    get_winprojVersion: function PS_DraftProject$get_winprojVersion$in() {ULSyTi:;
        this.checkUninitializedProperty('WinprojVersion');
        return (this.get_objectData().get_properties()['WinprojVersion']);
    },
    
    set_winprojVersion: function PS_DraftProject$set_winprojVersion$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['WinprojVersion'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'WinprojVersion', value));
        }
        return value;
    },
    
    initNonPropertiesFromJson: function PS_DraftProject$initNonPropertiesFromJson$in(parentNode) {ULSyTi:;
        SP.DataConvert.populateDictionaryFromObject(this.get_fieldValues(), parentNode);
        SP.DataConvert.fixupTypes(this.get_context(), this.get_fieldValues());
    },
    
    initPropertiesFromJson: function PS_DraftProject$initPropertiesFromJson$in(parentNode) {ULSyTi:;
        PS.Project.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.Assignments;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('Assignments', this.get_assignments(), $v_0);
            this.get_assignments().fromJson($v_0);
            delete parentNode.Assignments;
        }
        $v_0 = parentNode.Calendar;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('Calendar', this.get_calendar(), $v_0);
            this.get_calendar().fromJson($v_0);
            delete parentNode.Calendar;
        }
        $v_0 = parentNode.CurrencyCode;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['CurrencyCode'] = ($v_0);
            delete parentNode.CurrencyCode;
        }
        $v_0 = parentNode.CurrencyDigits;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['CurrencyDigits'] = ($v_0);
            delete parentNode.CurrencyDigits;
        }
        $v_0 = parentNode.CurrencyPosition;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['CurrencyPosition'] = ((SP.DataConvert.fixupType(this.get_context(), $v_0)));
            delete parentNode.CurrencyPosition;
        }
        $v_0 = parentNode.CurrencySymbol;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['CurrencySymbol'] = ($v_0);
            delete parentNode.CurrencySymbol;
        }
        $v_0 = parentNode.CurrentDate;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['CurrentDate'] = ($v_0);
            delete parentNode.CurrentDate;
        }
        $v_0 = parentNode.DaysPerMonth;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['DaysPerMonth'] = ($v_0);
            delete parentNode.DaysPerMonth;
        }
        $v_0 = parentNode.DefaultEffortDriven;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['DefaultEffortDriven'] = ($v_0);
            delete parentNode.DefaultEffortDriven;
        }
        $v_0 = parentNode.DefaultEstimatedDuration;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['DefaultEstimatedDuration'] = ($v_0);
            delete parentNode.DefaultEstimatedDuration;
        }
        $v_0 = parentNode.DefaultFixedCostAccrual;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['DefaultFixedCostAccrual'] = ((SP.DataConvert.fixupType(this.get_context(), $v_0)));
            delete parentNode.DefaultFixedCostAccrual;
        }
        $v_0 = parentNode.DefaultOvertimeRate;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['DefaultOvertimeRate'] = ($v_0);
            delete parentNode.DefaultOvertimeRate;
        }
        $v_0 = parentNode.DefaultStandardRate;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['DefaultStandardRate'] = ($v_0);
            delete parentNode.DefaultStandardRate;
        }
        $v_0 = parentNode.DefaultTaskType;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['DefaultTaskType'] = ((SP.DataConvert.fixupType(this.get_context(), $v_0)));
            delete parentNode.DefaultTaskType;
        }
        $v_0 = parentNode.DefaultWorkFormat;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['DefaultWorkFormat'] = ((SP.DataConvert.fixupType(this.get_context(), $v_0)));
            delete parentNode.DefaultWorkFormat;
        }
        $v_0 = parentNode.Description;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Description'] = ($v_0);
            delete parentNode.Description;
        }
        $v_0 = parentNode.FinishDate;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['FinishDate'] = ($v_0);
            delete parentNode.FinishDate;
        }
        $v_0 = parentNode.FiscalYearStartMonth;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['FiscalYearStartMonth'] = ($v_0);
            delete parentNode.FiscalYearStartMonth;
        }
        $v_0 = parentNode.IncludeCustomFields;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('IncludeCustomFields', this.get_includeCustomFields(), $v_0);
            this.get_includeCustomFields().fromJson($v_0);
            delete parentNode.IncludeCustomFields;
        }
        $v_0 = parentNode.MinutesPerDay;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['MinutesPerDay'] = ($v_0);
            delete parentNode.MinutesPerDay;
        }
        $v_0 = parentNode.MinutesPerWeek;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['MinutesPerWeek'] = ($v_0);
            delete parentNode.MinutesPerWeek;
        }
        $v_0 = parentNode.Name;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Name'] = ($v_0);
            delete parentNode.Name;
        }
        $v_0 = parentNode.NewTasksAreManual;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['NewTasksAreManual'] = ($v_0);
            delete parentNode.NewTasksAreManual;
        }
        $v_0 = parentNode.NumberFiscalYearFromStart;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['NumberFiscalYearFromStart'] = ($v_0);
            delete parentNode.NumberFiscalYearFromStart;
        }
        $v_0 = parentNode.Owner;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('Owner', this.get_owner(), $v_0);
            this.get_owner().fromJson($v_0);
            delete parentNode.Owner;
        }
        $v_0 = parentNode.ProjectIdentifier;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ProjectIdentifier'] = ($v_0);
            delete parentNode.ProjectIdentifier;
        }
        $v_0 = parentNode.ProjectResources;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('ProjectResources', this.get_projectResources(), $v_0);
            this.get_projectResources().fromJson($v_0);
            delete parentNode.ProjectResources;
        }
        $v_0 = parentNode.ProtectedActualsSynch;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ProtectedActualsSynch'] = ($v_0);
            delete parentNode.ProtectedActualsSynch;
        }
        $v_0 = parentNode.ShowEstimatedDurations;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ShowEstimatedDurations'] = ($v_0);
            delete parentNode.ShowEstimatedDurations;
        }
        $v_0 = parentNode.StartDate;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['StartDate'] = ($v_0);
            delete parentNode.StartDate;
        }
        $v_0 = parentNode.StatusDate;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['StatusDate'] = ($v_0);
            delete parentNode.StatusDate;
        }
        $v_0 = parentNode.TaskLinks;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('TaskLinks', this.get_taskLinks(), $v_0);
            this.get_taskLinks().fromJson($v_0);
            delete parentNode.TaskLinks;
        }
        $v_0 = parentNode.Tasks;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('Tasks', this.get_tasks(), $v_0);
            this.get_tasks().fromJson($v_0);
            delete parentNode.Tasks;
        }
        $v_0 = parentNode.TrackingMode;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['TrackingMode'] = ((SP.DataConvert.fixupType(this.get_context(), $v_0)));
            delete parentNode.TrackingMode;
        }
        $v_0 = parentNode.UtilizationDate;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['UtilizationDate'] = ($v_0);
            delete parentNode.UtilizationDate;
        }
        $v_0 = parentNode.UtilizationType;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['UtilizationType'] = ((SP.DataConvert.fixupType(this.get_context(), $v_0)));
            delete parentNode.UtilizationType;
        }
        $v_0 = parentNode.WeekStartDay;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['WeekStartDay'] = ($v_0);
            delete parentNode.WeekStartDay;
        }
        $v_0 = parentNode.WinprojVersion;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['WinprojVersion'] = ($v_0);
            delete parentNode.WinprojVersion;
        }
    },
    
    $6_2: function PS_DraftProject$$6_2$in($p0) {
        var $v_0 = this.get_fieldValues()[$p0];
        if (SP.ScriptUtility.isUndefined($v_0)) {
            throw Error.create(SP.ResResources.getString('PropertyHasNotBeenInitialized'));
        }
        return $v_0;
    },
    
    refreshLoad: function PS_DraftProject$refreshLoad$in() {ULSyTi:;
        SP.ClientObject.prototype.refreshLoad.call(this);
        this.loadExpandoFields();
    },
    
    loadExpandoFields: function PS_DraftProject$loadExpandoFields$in() {ULSyTi:;
        var $$dict_1 = this.get_fieldValues();
        for (var $$key_2 in $$dict_1) {
            var $v_0 = { key: $$key_2, value: $$dict_1[$$key_2] };
            this.retrieve($v_0.key);
        }
    },
    
    validate: function PS_DraftProject$validate$in() {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'Validate', null);
        $v_0.addQuery($v_1);
    },
    
    update: function PS_DraftProject$update$in() {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        $v_1 = new PS.QueueJob($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'Update', null));
        return $v_1;
    },
    
    publish: function PS_DraftProject$publish$in(checkIn) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        $v_1 = new PS.QueueJob($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'Publish', [ checkIn ]));
        var $v_2 = new SP.ObjectIdentityQuery(this.get_path());
        this.get_context().addQueryIdAndResultObject($v_2.get_id(), this);
        this.get_context().addQuery($v_2);
        return $v_1;
    },
    
    checkIn: function PS_DraftProject$checkIn$in(force) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        $v_1 = new PS.QueueJob($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'CheckIn', [ force ]));
        var $v_2 = new SP.ObjectIdentityQuery(this.get_path());
        this.get_context().addQueryIdAndResultObject($v_2.get_id(), this);
        this.get_context().addQuery($v_2);
        return $v_1;
    }
}


PS.DraftProjectPropertyNames = function PS_DraftProjectPropertyNames() {
}


PS.DraftProjectObjectPropertyNames = function PS_DraftProjectObjectPropertyNames() {
}


PS.DraftProjectResource = function PS_DraftProjectResource(context, objectPath) {ULSyTi:;
    PS.DraftProjectResource.initializeBase(this, [ context, objectPath ]);
}
PS.DraftProjectResource.prototype = {
    
    get_fieldValues: function PS_DraftProjectResource$get_fieldValues$in() {ULSyTi:;
        var $v_0 = this.get_objectData().get_methodReturnObjects()['$m_dict'];
        if (SP.ScriptUtility.isNullOrUndefined($v_0)) {
            $v_0 = {};
            this.get_objectData().get_methodReturnObjects()['$m_dict'] = $v_0;
        }
        return $v_0;
    },
    
    get_item: function PS_DraftProjectResource$get_item$in(fieldName) {ULSyTi:;
        return this.$6_2(fieldName);
    },
    
    set_item: function PS_DraftProjectResource$set_item$in(fieldName, value) {ULSyTi:;
        this.$G_2(fieldName, value);
        return value;
    },
    
    get_assignments: function PS_DraftProjectResource$get_assignments$in() {ULSyTi:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['Assignments']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new PS.DraftAssignmentCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Assignments'));
            this.get_objectData().get_clientObjectProperties()['Assignments'] = $v_0;
        }
        return $v_0;
    },
    
    get_canLevel: function PS_DraftProjectResource$get_canLevel$in() {ULSyTi:;
        this.checkUninitializedProperty('CanLevel');
        return (this.get_objectData().get_properties()['CanLevel']);
    },
    
    set_canLevel: function PS_DraftProjectResource$set_canLevel$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['CanLevel'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'CanLevel', value));
        }
        return value;
    },
    
    get_code: function PS_DraftProjectResource$get_code$in() {ULSyTi:;
        this.checkUninitializedProperty('Code');
        return (this.get_objectData().get_properties()['Code']);
    },
    
    set_code: function PS_DraftProjectResource$set_code$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['Code'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Code', value));
        }
        return value;
    },
    
    get_costAccrual: function PS_DraftProjectResource$get_costAccrual$in() {ULSyTi:;
        this.checkUninitializedProperty('CostAccrual');
        return (this.get_objectData().get_properties()['CostAccrual']);
    },
    
    set_costAccrual: function PS_DraftProjectResource$set_costAccrual$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['CostAccrual'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'CostAccrual', value));
        }
        return value;
    },
    
    get_costCenter: function PS_DraftProjectResource$get_costCenter$in() {ULSyTi:;
        this.checkUninitializedProperty('CostCenter');
        return (this.get_objectData().get_properties()['CostCenter']);
    },
    
    set_costCenter: function PS_DraftProjectResource$set_costCenter$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['CostCenter'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'CostCenter', value));
        }
        return value;
    },
    
    get_costPerUse: function PS_DraftProjectResource$get_costPerUse$in() {ULSyTi:;
        this.checkUninitializedProperty('CostPerUse');
        return (this.get_objectData().get_properties()['CostPerUse']);
    },
    
    set_costPerUse: function PS_DraftProjectResource$set_costPerUse$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['CostPerUse'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'CostPerUse', value));
        }
        return value;
    },
    
    get_defaultAssignmentOwner: function PS_DraftProjectResource$get_defaultAssignmentOwner$in() {ULSyTi:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['DefaultAssignmentOwner']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.User(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'DefaultAssignmentOwner'));
            this.get_objectData().get_clientObjectProperties()['DefaultAssignmentOwner'] = $v_0;
        }
        return $v_0;
    },
    
    set_defaultAssignmentOwner: function PS_DraftProjectResource$set_defaultAssignmentOwner$in(value) {ULSyTi:;
        this.get_objectData().get_clientObjectProperties()['DefaultAssignmentOwner'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'DefaultAssignmentOwner', value));
        }
        return value;
    },
    
    get_defaultBookingType: function PS_DraftProjectResource$get_defaultBookingType$in() {ULSyTi:;
        this.checkUninitializedProperty('DefaultBookingType');
        return (this.get_objectData().get_properties()['DefaultBookingType']);
    },
    
    set_defaultBookingType: function PS_DraftProjectResource$set_defaultBookingType$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['DefaultBookingType'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'DefaultBookingType', value));
        }
        return value;
    },
    
    get_email: function PS_DraftProjectResource$get_email$in() {ULSyTi:;
        this.checkUninitializedProperty('Email');
        return (this.get_objectData().get_properties()['Email']);
    },
    
    set_email: function PS_DraftProjectResource$set_email$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['Email'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Email', value));
        }
        return value;
    },
    
    get_group: function PS_DraftProjectResource$get_group$in() {ULSyTi:;
        this.checkUninitializedProperty('Group');
        return (this.get_objectData().get_properties()['Group']);
    },
    
    set_group: function PS_DraftProjectResource$set_group$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['Group'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Group', value));
        }
        return value;
    },
    
    get_initials: function PS_DraftProjectResource$get_initials$in() {ULSyTi:;
        this.checkUninitializedProperty('Initials');
        return (this.get_objectData().get_properties()['Initials']);
    },
    
    set_initials: function PS_DraftProjectResource$set_initials$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['Initials'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Initials', value));
        }
        return value;
    },
    
    get_materialLabel: function PS_DraftProjectResource$get_materialLabel$in() {ULSyTi:;
        this.checkUninitializedProperty('MaterialLabel');
        return (this.get_objectData().get_properties()['MaterialLabel']);
    },
    
    set_materialLabel: function PS_DraftProjectResource$set_materialLabel$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['MaterialLabel'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'MaterialLabel', value));
        }
        return value;
    },
    
    get_maximumCapacity: function PS_DraftProjectResource$get_maximumCapacity$in() {ULSyTi:;
        this.checkUninitializedProperty('MaximumCapacity');
        return (this.get_objectData().get_properties()['MaximumCapacity']);
    },
    
    set_maximumCapacity: function PS_DraftProjectResource$set_maximumCapacity$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['MaximumCapacity'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'MaximumCapacity', value));
        }
        return value;
    },
    
    get_name: function PS_DraftProjectResource$get_name$in() {ULSyTi:;
        this.checkUninitializedProperty('Name');
        return (this.get_objectData().get_properties()['Name']);
    },
    
    set_name: function PS_DraftProjectResource$set_name$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['Name'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Name', value));
        }
        return value;
    },
    
    get_overtimeRate: function PS_DraftProjectResource$get_overtimeRate$in() {ULSyTi:;
        this.checkUninitializedProperty('OvertimeRate');
        return (this.get_objectData().get_properties()['OvertimeRate']);
    },
    
    set_overtimeRate: function PS_DraftProjectResource$set_overtimeRate$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['OvertimeRate'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'OvertimeRate', value));
        }
        return value;
    },
    
    get_overtimeRateUnits: function PS_DraftProjectResource$get_overtimeRateUnits$in() {ULSyTi:;
        this.checkUninitializedProperty('OvertimeRateUnits');
        return (this.get_objectData().get_properties()['OvertimeRateUnits']);
    },
    
    set_overtimeRateUnits: function PS_DraftProjectResource$set_overtimeRateUnits$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['OvertimeRateUnits'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'OvertimeRateUnits', value));
        }
        return value;
    },
    
    get_phonetics: function PS_DraftProjectResource$get_phonetics$in() {ULSyTi:;
        this.checkUninitializedProperty('Phonetics');
        return (this.get_objectData().get_properties()['Phonetics']);
    },
    
    set_phonetics: function PS_DraftProjectResource$set_phonetics$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['Phonetics'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Phonetics', value));
        }
        return value;
    },
    
    get_standardRate: function PS_DraftProjectResource$get_standardRate$in() {ULSyTi:;
        this.checkUninitializedProperty('StandardRate');
        return (this.get_objectData().get_properties()['StandardRate']);
    },
    
    set_standardRate: function PS_DraftProjectResource$set_standardRate$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['StandardRate'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'StandardRate', value));
        }
        return value;
    },
    
    get_standardRateUnits: function PS_DraftProjectResource$get_standardRateUnits$in() {ULSyTi:;
        this.checkUninitializedProperty('StandardRateUnits');
        return (this.get_objectData().get_properties()['StandardRateUnits']);
    },
    
    set_standardRateUnits: function PS_DraftProjectResource$set_standardRateUnits$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['StandardRateUnits'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'StandardRateUnits', value));
        }
        return value;
    },
    
    initNonPropertiesFromJson: function PS_DraftProjectResource$initNonPropertiesFromJson$in(parentNode) {ULSyTi:;
        SP.DataConvert.populateDictionaryFromObject(this.get_fieldValues(), parentNode);
        SP.DataConvert.fixupTypes(this.get_context(), this.get_fieldValues());
    },
    
    initPropertiesFromJson: function PS_DraftProjectResource$initPropertiesFromJson$in(parentNode) {ULSyTi:;
        PS.ProjectResource.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.Assignments;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('Assignments', this.get_assignments(), $v_0);
            this.get_assignments().fromJson($v_0);
            delete parentNode.Assignments;
        }
        $v_0 = parentNode.CanLevel;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['CanLevel'] = ($v_0);
            delete parentNode.CanLevel;
        }
        $v_0 = parentNode.Code;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Code'] = ($v_0);
            delete parentNode.Code;
        }
        $v_0 = parentNode.CostAccrual;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['CostAccrual'] = ((SP.DataConvert.fixupType(this.get_context(), $v_0)));
            delete parentNode.CostAccrual;
        }
        $v_0 = parentNode.CostCenter;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['CostCenter'] = ($v_0);
            delete parentNode.CostCenter;
        }
        $v_0 = parentNode.CostPerUse;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['CostPerUse'] = ($v_0);
            delete parentNode.CostPerUse;
        }
        $v_0 = parentNode.DefaultAssignmentOwner;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('DefaultAssignmentOwner', this.get_defaultAssignmentOwner(), $v_0);
            this.get_defaultAssignmentOwner().fromJson($v_0);
            delete parentNode.DefaultAssignmentOwner;
        }
        $v_0 = parentNode.DefaultBookingType;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['DefaultBookingType'] = ((SP.DataConvert.fixupType(this.get_context(), $v_0)));
            delete parentNode.DefaultBookingType;
        }
        $v_0 = parentNode.Email;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Email'] = ($v_0);
            delete parentNode.Email;
        }
        $v_0 = parentNode.Group;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Group'] = ($v_0);
            delete parentNode.Group;
        }
        $v_0 = parentNode.Initials;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Initials'] = ($v_0);
            delete parentNode.Initials;
        }
        $v_0 = parentNode.MaterialLabel;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['MaterialLabel'] = ($v_0);
            delete parentNode.MaterialLabel;
        }
        $v_0 = parentNode.MaximumCapacity;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['MaximumCapacity'] = ($v_0);
            delete parentNode.MaximumCapacity;
        }
        $v_0 = parentNode.Name;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Name'] = ($v_0);
            delete parentNode.Name;
        }
        $v_0 = parentNode.OvertimeRate;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['OvertimeRate'] = ($v_0);
            delete parentNode.OvertimeRate;
        }
        $v_0 = parentNode.OvertimeRateUnits;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['OvertimeRateUnits'] = ((SP.DataConvert.fixupType(this.get_context(), $v_0)));
            delete parentNode.OvertimeRateUnits;
        }
        $v_0 = parentNode.Phonetics;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Phonetics'] = ($v_0);
            delete parentNode.Phonetics;
        }
        $v_0 = parentNode.StandardRate;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['StandardRate'] = ($v_0);
            delete parentNode.StandardRate;
        }
        $v_0 = parentNode.StandardRateUnits;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['StandardRateUnits'] = ((SP.DataConvert.fixupType(this.get_context(), $v_0)));
            delete parentNode.StandardRateUnits;
        }
    },
    
    $6_2: function PS_DraftProjectResource$$6_2$in($p0) {
        var $v_0 = this.get_fieldValues()[$p0];
        if (SP.ScriptUtility.isUndefined($v_0)) {
            throw Error.create(SP.ResResources.getString('PropertyHasNotBeenInitialized'));
        }
        return $v_0;
    },
    
    refreshLoad: function PS_DraftProjectResource$refreshLoad$in() {ULSyTi:;
        SP.ClientObject.prototype.refreshLoad.call(this);
        this.loadExpandoFields();
    },
    
    loadExpandoFields: function PS_DraftProjectResource$loadExpandoFields$in() {ULSyTi:;
        var $$dict_1 = this.get_fieldValues();
        for (var $$key_2 in $$dict_1) {
            var $v_0 = { key: $$key_2, value: $$dict_1[$$key_2] };
            this.retrieve($v_0.key);
        }
    },
    
    $G_2: function PS_DraftProjectResource$$G_2$in($p0, $p1) {
        var $v_0 = this.get_context();
        this.get_fieldValues()[$p0] = $p1;
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'SetCustomFieldValue', [ $p0, $p1 ]);
        if ($v_0) {
            $v_0.addQuery($v_1);
        }
    },
    
    deleteObject: function PS_DraftProjectResource$deleteObject$in() {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'DeleteObject', null);
        $v_0.addQuery($v_1);
        this.removeFromParentCollection();
    }
}


PS.DraftProjectResourcePropertyNames = function PS_DraftProjectResourcePropertyNames() {
}


PS.DraftProjectResourceObjectPropertyNames = function PS_DraftProjectResourceObjectPropertyNames() {
}


PS.DraftProjectResourceCollection = function PS_DraftProjectResourceCollection(context, objectPath) {ULSyTi:;
    PS.DraftProjectResourceCollection.initializeBase(this, [ context, objectPath ]);
}
PS.DraftProjectResourceCollection.prototype = {
    
    itemAt: function PS_DraftProjectResourceCollection$itemAt$in(index) {ULSyTi:;
        return this.getItemAtIndex(index);
    },
    
    get_item: function PS_DraftProjectResourceCollection$get_item$in(index) {ULSyTi:;
        return this.getItemAtIndex(index);
    },
    
    get_childItemType: function PS_DraftProjectResourceCollection$get_childItemType$in() {ULSyTi:;
        return PS.DraftProjectResource;
    },
    
    getById: function PS_DraftProjectResourceCollection$getById$in(objectId) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = ((this.get_objectData().get_methodReturnObjects()['GetById']));
        if (SP.ScriptUtility.isNullOrUndefined($v_2)) {
            $v_2 = {};
            this.get_objectData().get_methodReturnObjects()['GetById'] = $v_2;
        }
        $v_1 = (($v_2[objectId]));
        if (!$v_0.get_disableReturnValueCache() && !SP.ScriptUtility.isNullOrUndefined($v_1)) {
            return $v_1;
        }
        $v_1 = new PS.DraftProjectResource($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetById', [ objectId ]));
        if (!$v_0.get_disableReturnValueCache()) {
            $v_2[objectId] = $v_1;
        }
        return $v_1;
    },
    
    getByGuid: function PS_DraftProjectResourceCollection$getByGuid$in(uid) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = ((this.get_objectData().get_methodReturnObjects()['GetByGuid']));
        if (SP.ScriptUtility.isNullOrUndefined($v_2)) {
            $v_2 = {};
            this.get_objectData().get_methodReturnObjects()['GetByGuid'] = $v_2;
        }
        $v_1 = (($v_2[uid.toString()]));
        if (!$v_0.get_disableReturnValueCache() && !SP.ScriptUtility.isNullOrUndefined($v_1)) {
            return $v_1;
        }
        $v_1 = new PS.DraftProjectResource($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetByGuid', [ uid ]));
        if (!$v_0.get_disableReturnValueCache()) {
            $v_2[uid.toString()] = $v_1;
        }
        return $v_1;
    },
    
    add: function PS_DraftProjectResourceCollection$add$in(parameters) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        $v_1 = new PS.DraftProjectResource($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'Add', [ parameters ]));
        $v_1.get_path().setPendingReplace();
        var $v_2 = new SP.ObjectIdentityQuery($v_1.get_path());
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        $v_0.addQuery($v_2);
        this.addChild($v_1);
        return $v_1;
    },
    
    addEnterpriseResource: function PS_DraftProjectResourceCollection$addEnterpriseResource$in(resource) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        $v_1 = new PS.DraftProjectResource($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'AddEnterpriseResource', [ resource ]));
        $v_1.get_path().setPendingReplace();
        var $v_2 = new SP.ObjectIdentityQuery($v_1.get_path());
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        $v_0.addQuery($v_2);
        this.addChild($v_1);
        return $v_1;
    },
    
    remove: function PS_DraftProjectResourceCollection$remove$in(resource) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'Remove', [ resource ]);
        $v_0.addQuery($v_2);
        $v_1 = new SP.BooleanResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        this.removeChild(resource);
        return $v_1;
    }
}


PS.DraftTask = function PS_DraftTask(context, objectPath) {ULSyTi:;
    PS.DraftTask.initializeBase(this, [ context, objectPath ]);
}
PS.DraftTask.prototype = {
    
    get_fieldValues: function PS_DraftTask$get_fieldValues$in() {ULSyTi:;
        var $v_0 = this.get_objectData().get_methodReturnObjects()['$m_dict'];
        if (SP.ScriptUtility.isNullOrUndefined($v_0)) {
            $v_0 = {};
            this.get_objectData().get_methodReturnObjects()['$m_dict'] = $v_0;
        }
        return $v_0;
    },
    
    get_item: function PS_DraftTask$get_item$in(fieldName) {ULSyTi:;
        return this.$6_2(fieldName);
    },
    
    set_item: function PS_DraftTask$set_item$in(fieldName, value) {ULSyTi:;
        this.$G_2(fieldName, value);
        return value;
    },
    
    get_actualCost: function PS_DraftTask$get_actualCost$in() {ULSyTi:;
        this.checkUninitializedProperty('ActualCost');
        return (this.get_objectData().get_properties()['ActualCost']);
    },
    
    set_actualCost: function PS_DraftTask$set_actualCost$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['ActualCost'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'ActualCost', value));
        }
        return value;
    },
    
    get_actualFinish: function PS_DraftTask$get_actualFinish$in() {ULSyTi:;
        this.checkUninitializedProperty('ActualFinish');
        return (this.get_objectData().get_properties()['ActualFinish']);
    },
    
    set_actualFinish: function PS_DraftTask$set_actualFinish$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['ActualFinish'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'ActualFinish', value));
        }
        return value;
    },
    
    get_actualStart: function PS_DraftTask$get_actualStart$in() {ULSyTi:;
        this.checkUninitializedProperty('ActualStart');
        return (this.get_objectData().get_properties()['ActualStart']);
    },
    
    set_actualStart: function PS_DraftTask$set_actualStart$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['ActualStart'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'ActualStart', value));
        }
        return value;
    },
    
    get_actualWork: function PS_DraftTask$get_actualWork$in() {ULSyTi:;
        this.checkUninitializedProperty('ActualWork');
        return (this.get_objectData().get_properties()['ActualWork']);
    },
    
    set_actualWork: function PS_DraftTask$set_actualWork$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['ActualWork'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'ActualWork', value));
        }
        return value;
    },
    
    get_actualWorkMilliseconds: function PS_DraftTask$get_actualWorkMilliseconds$in() {ULSyTi:;
        this.checkUninitializedProperty('ActualWorkMilliseconds');
        return (this.get_objectData().get_properties()['ActualWorkMilliseconds']);
    },
    
    set_actualWorkMilliseconds: function PS_DraftTask$set_actualWorkMilliseconds$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['ActualWorkMilliseconds'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'ActualWorkMilliseconds', value));
        }
        return value;
    },
    
    get_assignments: function PS_DraftTask$get_assignments$in() {ULSyTi:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['Assignments']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new PS.DraftAssignmentCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Assignments'));
            this.get_objectData().get_clientObjectProperties()['Assignments'] = $v_0;
        }
        return $v_0;
    },
    
    get_budgetWork: function PS_DraftTask$get_budgetWork$in() {ULSyTi:;
        this.checkUninitializedProperty('BudgetWork');
        return (this.get_objectData().get_properties()['BudgetWork']);
    },
    
    set_budgetWork: function PS_DraftTask$set_budgetWork$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['BudgetWork'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'BudgetWork', value));
        }
        return value;
    },
    
    get_budgetWorkMilliseconds: function PS_DraftTask$get_budgetWorkMilliseconds$in() {ULSyTi:;
        this.checkUninitializedProperty('BudgetWorkMilliseconds');
        return (this.get_objectData().get_properties()['BudgetWorkMilliseconds']);
    },
    
    set_budgetWorkMilliseconds: function PS_DraftTask$set_budgetWorkMilliseconds$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['BudgetWorkMilliseconds'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'BudgetWorkMilliseconds', value));
        }
        return value;
    },
    
    get_calendar: function PS_DraftTask$get_calendar$in() {ULSyTi:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['Calendar']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new PS.Calendar(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Calendar'));
            this.get_objectData().get_clientObjectProperties()['Calendar'] = $v_0;
        }
        return $v_0;
    },
    
    set_calendar: function PS_DraftTask$set_calendar$in(value) {ULSyTi:;
        this.get_objectData().get_clientObjectProperties()['Calendar'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Calendar', value));
        }
        return value;
    },
    
    get_completion: function PS_DraftTask$get_completion$in() {ULSyTi:;
        this.checkUninitializedProperty('Completion');
        return (this.get_objectData().get_properties()['Completion']);
    },
    
    set_completion: function PS_DraftTask$set_completion$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['Completion'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Completion', value));
        }
        return value;
    },
    
    get_constraintStartEnd: function PS_DraftTask$get_constraintStartEnd$in() {ULSyTi:;
        this.checkUninitializedProperty('ConstraintStartEnd');
        return (this.get_objectData().get_properties()['ConstraintStartEnd']);
    },
    
    set_constraintStartEnd: function PS_DraftTask$set_constraintStartEnd$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['ConstraintStartEnd'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'ConstraintStartEnd', value));
        }
        return value;
    },
    
    get_constraintType: function PS_DraftTask$get_constraintType$in() {ULSyTi:;
        this.checkUninitializedProperty('ConstraintType');
        return (this.get_objectData().get_properties()['ConstraintType']);
    },
    
    set_constraintType: function PS_DraftTask$set_constraintType$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['ConstraintType'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'ConstraintType', value));
        }
        return value;
    },
    
    get_cost: function PS_DraftTask$get_cost$in() {ULSyTi:;
        this.checkUninitializedProperty('Cost');
        return (this.get_objectData().get_properties()['Cost']);
    },
    
    set_cost: function PS_DraftTask$set_cost$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['Cost'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Cost', value));
        }
        return value;
    },
    
    get_deadline: function PS_DraftTask$get_deadline$in() {ULSyTi:;
        this.checkUninitializedProperty('Deadline');
        return (this.get_objectData().get_properties()['Deadline']);
    },
    
    set_deadline: function PS_DraftTask$set_deadline$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['Deadline'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Deadline', value));
        }
        return value;
    },
    
    get_duration: function PS_DraftTask$get_duration$in() {ULSyTi:;
        this.checkUninitializedProperty('Duration');
        return (this.get_objectData().get_properties()['Duration']);
    },
    
    set_duration: function PS_DraftTask$set_duration$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['Duration'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Duration', value));
        }
        return value;
    },
    
    get_durationMilliseconds: function PS_DraftTask$get_durationMilliseconds$in() {ULSyTi:;
        this.checkUninitializedProperty('DurationMilliseconds');
        return (this.get_objectData().get_properties()['DurationMilliseconds']);
    },
    
    set_durationMilliseconds: function PS_DraftTask$set_durationMilliseconds$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['DurationMilliseconds'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'DurationMilliseconds', value));
        }
        return value;
    },
    
    get_finish: function PS_DraftTask$get_finish$in() {ULSyTi:;
        this.checkUninitializedProperty('Finish');
        return (this.get_objectData().get_properties()['Finish']);
    },
    
    set_finish: function PS_DraftTask$set_finish$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['Finish'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Finish', value));
        }
        return value;
    },
    
    get_finishText: function PS_DraftTask$get_finishText$in() {ULSyTi:;
        this.checkUninitializedProperty('FinishText');
        return (this.get_objectData().get_properties()['FinishText']);
    },
    
    set_finishText: function PS_DraftTask$set_finishText$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['FinishText'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'FinishText', value));
        }
        return value;
    },
    
    get_fixedCost: function PS_DraftTask$get_fixedCost$in() {ULSyTi:;
        this.checkUninitializedProperty('FixedCost');
        return (this.get_objectData().get_properties()['FixedCost']);
    },
    
    set_fixedCost: function PS_DraftTask$set_fixedCost$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['FixedCost'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'FixedCost', value));
        }
        return value;
    },
    
    get_isActive: function PS_DraftTask$get_isActive$in() {ULSyTi:;
        this.checkUninitializedProperty('IsActive');
        return (this.get_objectData().get_properties()['IsActive']);
    },
    
    set_isActive: function PS_DraftTask$set_isActive$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['IsActive'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'IsActive', value));
        }
        return value;
    },
    
    get_isLockedByManager: function PS_DraftTask$get_isLockedByManager$in() {ULSyTi:;
        this.checkUninitializedProperty('IsLockedByManager');
        return (this.get_objectData().get_properties()['IsLockedByManager']);
    },
    
    set_isLockedByManager: function PS_DraftTask$set_isLockedByManager$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['IsLockedByManager'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'IsLockedByManager', value));
        }
        return value;
    },
    
    get_isManual: function PS_DraftTask$get_isManual$in() {ULSyTi:;
        this.checkUninitializedProperty('IsManual');
        return (this.get_objectData().get_properties()['IsManual']);
    },
    
    set_isManual: function PS_DraftTask$set_isManual$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['IsManual'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'IsManual', value));
        }
        return value;
    },
    
    get_isMarked: function PS_DraftTask$get_isMarked$in() {ULSyTi:;
        this.checkUninitializedProperty('IsMarked');
        return (this.get_objectData().get_properties()['IsMarked']);
    },
    
    set_isMarked: function PS_DraftTask$set_isMarked$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['IsMarked'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'IsMarked', value));
        }
        return value;
    },
    
    get_isMilestone: function PS_DraftTask$get_isMilestone$in() {ULSyTi:;
        this.checkUninitializedProperty('IsMilestone');
        return (this.get_objectData().get_properties()['IsMilestone']);
    },
    
    set_isMilestone: function PS_DraftTask$set_isMilestone$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['IsMilestone'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'IsMilestone', value));
        }
        return value;
    },
    
    get_levelingAdjustsAssignments: function PS_DraftTask$get_levelingAdjustsAssignments$in() {ULSyTi:;
        this.checkUninitializedProperty('LevelingAdjustsAssignments');
        return (this.get_objectData().get_properties()['LevelingAdjustsAssignments']);
    },
    
    set_levelingAdjustsAssignments: function PS_DraftTask$set_levelingAdjustsAssignments$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['LevelingAdjustsAssignments'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'LevelingAdjustsAssignments', value));
        }
        return value;
    },
    
    get_levelingCanSplit: function PS_DraftTask$get_levelingCanSplit$in() {ULSyTi:;
        this.checkUninitializedProperty('LevelingCanSplit');
        return (this.get_objectData().get_properties()['LevelingCanSplit']);
    },
    
    set_levelingCanSplit: function PS_DraftTask$set_levelingCanSplit$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['LevelingCanSplit'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'LevelingCanSplit', value));
        }
        return value;
    },
    
    get_name: function PS_DraftTask$get_name$in() {ULSyTi:;
        this.checkUninitializedProperty('Name');
        return (this.get_objectData().get_properties()['Name']);
    },
    
    set_name: function PS_DraftTask$set_name$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['Name'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Name', value));
        }
        return value;
    },
    
    get_outlineLevel: function PS_DraftTask$get_outlineLevel$in() {ULSyTi:;
        this.checkUninitializedProperty('OutlineLevel');
        return (this.get_objectData().get_properties()['OutlineLevel']);
    },
    
    set_outlineLevel: function PS_DraftTask$set_outlineLevel$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['OutlineLevel'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'OutlineLevel', value));
        }
        return value;
    },
    
    get_parent: function PS_DraftTask$get_parent$in() {ULSyTi:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['Parent']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new PS.DraftTask(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Parent'));
            this.get_objectData().get_clientObjectProperties()['Parent'] = $v_0;
        }
        return $v_0;
    },
    
    get_percentComplete: function PS_DraftTask$get_percentComplete$in() {ULSyTi:;
        this.checkUninitializedProperty('PercentComplete');
        return (this.get_objectData().get_properties()['PercentComplete']);
    },
    
    set_percentComplete: function PS_DraftTask$set_percentComplete$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['PercentComplete'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'PercentComplete', value));
        }
        return value;
    },
    
    get_percentPhysicalWorkComplete: function PS_DraftTask$get_percentPhysicalWorkComplete$in() {ULSyTi:;
        this.checkUninitializedProperty('PercentPhysicalWorkComplete');
        return (this.get_objectData().get_properties()['PercentPhysicalWorkComplete']);
    },
    
    set_percentPhysicalWorkComplete: function PS_DraftTask$set_percentPhysicalWorkComplete$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['PercentPhysicalWorkComplete'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'PercentPhysicalWorkComplete', value));
        }
        return value;
    },
    
    get_predecessors: function PS_DraftTask$get_predecessors$in() {ULSyTi:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['Predecessors']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new PS.DraftTaskLinkCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Predecessors'));
            this.get_objectData().get_clientObjectProperties()['Predecessors'] = $v_0;
        }
        return $v_0;
    },
    
    get_priority: function PS_DraftTask$get_priority$in() {ULSyTi:;
        this.checkUninitializedProperty('Priority');
        return (this.get_objectData().get_properties()['Priority']);
    },
    
    set_priority: function PS_DraftTask$set_priority$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['Priority'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Priority', value));
        }
        return value;
    },
    
    get_remainingDuration: function PS_DraftTask$get_remainingDuration$in() {ULSyTi:;
        this.checkUninitializedProperty('RemainingDuration');
        return (this.get_objectData().get_properties()['RemainingDuration']);
    },
    
    set_remainingDuration: function PS_DraftTask$set_remainingDuration$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['RemainingDuration'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'RemainingDuration', value));
        }
        return value;
    },
    
    get_remainingDurationMilliseconds: function PS_DraftTask$get_remainingDurationMilliseconds$in() {ULSyTi:;
        this.checkUninitializedProperty('RemainingDurationMilliseconds');
        return (this.get_objectData().get_properties()['RemainingDurationMilliseconds']);
    },
    
    set_remainingDurationMilliseconds: function PS_DraftTask$set_remainingDurationMilliseconds$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['RemainingDurationMilliseconds'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'RemainingDurationMilliseconds', value));
        }
        return value;
    },
    
    get_start: function PS_DraftTask$get_start$in() {ULSyTi:;
        this.checkUninitializedProperty('Start');
        return (this.get_objectData().get_properties()['Start']);
    },
    
    set_start: function PS_DraftTask$set_start$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['Start'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Start', value));
        }
        return value;
    },
    
    get_startText: function PS_DraftTask$get_startText$in() {ULSyTi:;
        this.checkUninitializedProperty('StartText');
        return (this.get_objectData().get_properties()['StartText']);
    },
    
    set_startText: function PS_DraftTask$set_startText$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['StartText'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'StartText', value));
        }
        return value;
    },
    
    get_successors: function PS_DraftTask$get_successors$in() {ULSyTi:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['Successors']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new PS.DraftTaskLinkCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Successors'));
            this.get_objectData().get_clientObjectProperties()['Successors'] = $v_0;
        }
        return $v_0;
    },
    
    get_usePercentPhysicalWorkComplete: function PS_DraftTask$get_usePercentPhysicalWorkComplete$in() {ULSyTi:;
        this.checkUninitializedProperty('UsePercentPhysicalWorkComplete');
        return (this.get_objectData().get_properties()['UsePercentPhysicalWorkComplete']);
    },
    
    set_usePercentPhysicalWorkComplete: function PS_DraftTask$set_usePercentPhysicalWorkComplete$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['UsePercentPhysicalWorkComplete'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'UsePercentPhysicalWorkComplete', value));
        }
        return value;
    },
    
    get_work: function PS_DraftTask$get_work$in() {ULSyTi:;
        this.checkUninitializedProperty('Work');
        return (this.get_objectData().get_properties()['Work']);
    },
    
    set_work: function PS_DraftTask$set_work$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['Work'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Work', value));
        }
        return value;
    },
    
    get_workMilliseconds: function PS_DraftTask$get_workMilliseconds$in() {ULSyTi:;
        this.checkUninitializedProperty('WorkMilliseconds');
        return (this.get_objectData().get_properties()['WorkMilliseconds']);
    },
    
    set_workMilliseconds: function PS_DraftTask$set_workMilliseconds$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['WorkMilliseconds'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'WorkMilliseconds', value));
        }
        return value;
    },
    
    initNonPropertiesFromJson: function PS_DraftTask$initNonPropertiesFromJson$in(parentNode) {ULSyTi:;
        SP.DataConvert.populateDictionaryFromObject(this.get_fieldValues(), parentNode);
        SP.DataConvert.fixupTypes(this.get_context(), this.get_fieldValues());
    },
    
    initPropertiesFromJson: function PS_DraftTask$initPropertiesFromJson$in(parentNode) {ULSyTi:;
        PS.Task.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.ActualCost;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ActualCost'] = ($v_0);
            delete parentNode.ActualCost;
        }
        $v_0 = parentNode.ActualFinish;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ActualFinish'] = ($v_0);
            delete parentNode.ActualFinish;
        }
        $v_0 = parentNode.ActualStart;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ActualStart'] = ($v_0);
            delete parentNode.ActualStart;
        }
        $v_0 = parentNode.ActualWork;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ActualWork'] = ($v_0);
            delete parentNode.ActualWork;
        }
        $v_0 = parentNode.ActualWorkMilliseconds;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ActualWorkMilliseconds'] = ($v_0);
            delete parentNode.ActualWorkMilliseconds;
        }
        $v_0 = parentNode.Assignments;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('Assignments', this.get_assignments(), $v_0);
            this.get_assignments().fromJson($v_0);
            delete parentNode.Assignments;
        }
        $v_0 = parentNode.BudgetWork;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['BudgetWork'] = ($v_0);
            delete parentNode.BudgetWork;
        }
        $v_0 = parentNode.BudgetWorkMilliseconds;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['BudgetWorkMilliseconds'] = ($v_0);
            delete parentNode.BudgetWorkMilliseconds;
        }
        $v_0 = parentNode.Calendar;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('Calendar', this.get_calendar(), $v_0);
            this.get_calendar().fromJson($v_0);
            delete parentNode.Calendar;
        }
        $v_0 = parentNode.Completion;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Completion'] = ($v_0);
            delete parentNode.Completion;
        }
        $v_0 = parentNode.ConstraintStartEnd;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ConstraintStartEnd'] = ($v_0);
            delete parentNode.ConstraintStartEnd;
        }
        $v_0 = parentNode.ConstraintType;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ConstraintType'] = ((SP.DataConvert.fixupType(this.get_context(), $v_0)));
            delete parentNode.ConstraintType;
        }
        $v_0 = parentNode.Cost;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Cost'] = ($v_0);
            delete parentNode.Cost;
        }
        $v_0 = parentNode.Deadline;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Deadline'] = ($v_0);
            delete parentNode.Deadline;
        }
        $v_0 = parentNode.Duration;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Duration'] = ($v_0);
            delete parentNode.Duration;
        }
        $v_0 = parentNode.DurationMilliseconds;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['DurationMilliseconds'] = ($v_0);
            delete parentNode.DurationMilliseconds;
        }
        $v_0 = parentNode.Finish;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Finish'] = ($v_0);
            delete parentNode.Finish;
        }
        $v_0 = parentNode.FinishText;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['FinishText'] = ($v_0);
            delete parentNode.FinishText;
        }
        $v_0 = parentNode.FixedCost;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['FixedCost'] = ($v_0);
            delete parentNode.FixedCost;
        }
        $v_0 = parentNode.IsActive;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['IsActive'] = ($v_0);
            delete parentNode.IsActive;
        }
        $v_0 = parentNode.IsLockedByManager;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['IsLockedByManager'] = ($v_0);
            delete parentNode.IsLockedByManager;
        }
        $v_0 = parentNode.IsManual;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['IsManual'] = ($v_0);
            delete parentNode.IsManual;
        }
        $v_0 = parentNode.IsMarked;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['IsMarked'] = ($v_0);
            delete parentNode.IsMarked;
        }
        $v_0 = parentNode.IsMilestone;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['IsMilestone'] = ($v_0);
            delete parentNode.IsMilestone;
        }
        $v_0 = parentNode.LevelingAdjustsAssignments;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['LevelingAdjustsAssignments'] = ($v_0);
            delete parentNode.LevelingAdjustsAssignments;
        }
        $v_0 = parentNode.LevelingCanSplit;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['LevelingCanSplit'] = ($v_0);
            delete parentNode.LevelingCanSplit;
        }
        $v_0 = parentNode.Name;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Name'] = ($v_0);
            delete parentNode.Name;
        }
        $v_0 = parentNode.OutlineLevel;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['OutlineLevel'] = ($v_0);
            delete parentNode.OutlineLevel;
        }
        $v_0 = parentNode.Parent;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('Parent', this.get_parent(), $v_0);
            this.get_parent().fromJson($v_0);
            delete parentNode.Parent;
        }
        $v_0 = parentNode.PercentComplete;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['PercentComplete'] = ($v_0);
            delete parentNode.PercentComplete;
        }
        $v_0 = parentNode.PercentPhysicalWorkComplete;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['PercentPhysicalWorkComplete'] = ($v_0);
            delete parentNode.PercentPhysicalWorkComplete;
        }
        $v_0 = parentNode.Predecessors;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('Predecessors', this.get_predecessors(), $v_0);
            this.get_predecessors().fromJson($v_0);
            delete parentNode.Predecessors;
        }
        $v_0 = parentNode.Priority;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Priority'] = ($v_0);
            delete parentNode.Priority;
        }
        $v_0 = parentNode.RemainingDuration;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['RemainingDuration'] = ($v_0);
            delete parentNode.RemainingDuration;
        }
        $v_0 = parentNode.RemainingDurationMilliseconds;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['RemainingDurationMilliseconds'] = ($v_0);
            delete parentNode.RemainingDurationMilliseconds;
        }
        $v_0 = parentNode.Start;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Start'] = ($v_0);
            delete parentNode.Start;
        }
        $v_0 = parentNode.StartText;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['StartText'] = ($v_0);
            delete parentNode.StartText;
        }
        $v_0 = parentNode.Successors;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('Successors', this.get_successors(), $v_0);
            this.get_successors().fromJson($v_0);
            delete parentNode.Successors;
        }
        $v_0 = parentNode.UsePercentPhysicalWorkComplete;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['UsePercentPhysicalWorkComplete'] = ($v_0);
            delete parentNode.UsePercentPhysicalWorkComplete;
        }
        $v_0 = parentNode.Work;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Work'] = ($v_0);
            delete parentNode.Work;
        }
        $v_0 = parentNode.WorkMilliseconds;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['WorkMilliseconds'] = ($v_0);
            delete parentNode.WorkMilliseconds;
        }
    },
    
    $6_2: function PS_DraftTask$$6_2$in($p0) {
        var $v_0 = this.get_fieldValues()[$p0];
        if (SP.ScriptUtility.isUndefined($v_0)) {
            throw Error.create(SP.ResResources.getString('PropertyHasNotBeenInitialized'));
        }
        return $v_0;
    },
    
    refreshLoad: function PS_DraftTask$refreshLoad$in() {ULSyTi:;
        SP.ClientObject.prototype.refreshLoad.call(this);
        this.loadExpandoFields();
    },
    
    loadExpandoFields: function PS_DraftTask$loadExpandoFields$in() {ULSyTi:;
        var $$dict_1 = this.get_fieldValues();
        for (var $$key_2 in $$dict_1) {
            var $v_0 = { key: $$key_2, value: $$dict_1[$$key_2] };
            this.retrieve($v_0.key);
        }
    },
    
    $G_2: function PS_DraftTask$$G_2$in($p0, $p1) {
        var $v_0 = this.get_context();
        this.get_fieldValues()[$p0] = $p1;
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'SetCustomFieldValue', [ $p0, $p1 ]);
        if ($v_0) {
            $v_0.addQuery($v_1);
        }
    },
    
    deleteObject: function PS_DraftTask$deleteObject$in() {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'DeleteObject', null);
        $v_0.addQuery($v_1);
        this.removeFromParentCollection();
    }
}


PS.DraftTaskPropertyNames = function PS_DraftTaskPropertyNames() {
}


PS.DraftTaskObjectPropertyNames = function PS_DraftTaskObjectPropertyNames() {
}


PS.DraftTaskCollection = function PS_DraftTaskCollection(context, objectPath) {ULSyTi:;
    PS.DraftTaskCollection.initializeBase(this, [ context, objectPath ]);
}
PS.DraftTaskCollection.prototype = {
    
    itemAt: function PS_DraftTaskCollection$itemAt$in(index) {ULSyTi:;
        return this.getItemAtIndex(index);
    },
    
    get_item: function PS_DraftTaskCollection$get_item$in(index) {ULSyTi:;
        return this.getItemAtIndex(index);
    },
    
    get_childItemType: function PS_DraftTaskCollection$get_childItemType$in() {ULSyTi:;
        return PS.DraftTask;
    },
    
    getById: function PS_DraftTaskCollection$getById$in(objectId) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = ((this.get_objectData().get_methodReturnObjects()['GetById']));
        if (SP.ScriptUtility.isNullOrUndefined($v_2)) {
            $v_2 = {};
            this.get_objectData().get_methodReturnObjects()['GetById'] = $v_2;
        }
        $v_1 = (($v_2[objectId]));
        if (!$v_0.get_disableReturnValueCache() && !SP.ScriptUtility.isNullOrUndefined($v_1)) {
            return $v_1;
        }
        $v_1 = new PS.DraftTask($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetById', [ objectId ]));
        if (!$v_0.get_disableReturnValueCache()) {
            $v_2[objectId] = $v_1;
        }
        return $v_1;
    },
    
    getByGuid: function PS_DraftTaskCollection$getByGuid$in(uid) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = ((this.get_objectData().get_methodReturnObjects()['GetByGuid']));
        if (SP.ScriptUtility.isNullOrUndefined($v_2)) {
            $v_2 = {};
            this.get_objectData().get_methodReturnObjects()['GetByGuid'] = $v_2;
        }
        $v_1 = (($v_2[uid.toString()]));
        if (!$v_0.get_disableReturnValueCache() && !SP.ScriptUtility.isNullOrUndefined($v_1)) {
            return $v_1;
        }
        $v_1 = new PS.DraftTask($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetByGuid', [ uid ]));
        if (!$v_0.get_disableReturnValueCache()) {
            $v_2[uid.toString()] = $v_1;
        }
        return $v_1;
    },
    
    add: function PS_DraftTaskCollection$add$in(parameters) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        $v_1 = new PS.DraftTask($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'Add', [ parameters ]));
        $v_1.get_path().setPendingReplace();
        var $v_2 = new SP.ObjectIdentityQuery($v_1.get_path());
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        $v_0.addQuery($v_2);
        this.addChild($v_1);
        return $v_1;
    },
    
    remove: function PS_DraftTaskCollection$remove$in(task) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'Remove', [ task ]);
        $v_0.addQuery($v_2);
        $v_1 = new SP.BooleanResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        this.removeChild(task);
        return $v_1;
    }
}


PS.DraftTaskLink = function PS_DraftTaskLink(context, objectPath) {ULSyTi:;
    PS.DraftTaskLink.initializeBase(this, [ context, objectPath ]);
}
PS.DraftTaskLink.prototype = {
    
    get_dependencyType: function PS_DraftTaskLink$get_dependencyType$in() {ULSyTi:;
        this.checkUninitializedProperty('DependencyType');
        return (this.get_objectData().get_properties()['DependencyType']);
    },
    
    set_dependencyType: function PS_DraftTaskLink$set_dependencyType$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['DependencyType'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'DependencyType', value));
        }
        return value;
    },
    
    get_end: function PS_DraftTaskLink$get_end$in() {ULSyTi:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['End']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new PS.DraftTask(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'End'));
            this.get_objectData().get_clientObjectProperties()['End'] = $v_0;
        }
        return $v_0;
    },
    
    get_start: function PS_DraftTaskLink$get_start$in() {ULSyTi:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['Start']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new PS.DraftTask(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Start'));
            this.get_objectData().get_clientObjectProperties()['Start'] = $v_0;
        }
        return $v_0;
    },
    
    initPropertiesFromJson: function PS_DraftTaskLink$initPropertiesFromJson$in(parentNode) {ULSyTi:;
        PS.TaskLink.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.DependencyType;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['DependencyType'] = ((SP.DataConvert.fixupType(this.get_context(), $v_0)));
            delete parentNode.DependencyType;
        }
        $v_0 = parentNode.End;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('End', this.get_end(), $v_0);
            this.get_end().fromJson($v_0);
            delete parentNode.End;
        }
        $v_0 = parentNode.Start;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('Start', this.get_start(), $v_0);
            this.get_start().fromJson($v_0);
            delete parentNode.Start;
        }
    },
    
    deleteObject: function PS_DraftTaskLink$deleteObject$in() {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'DeleteObject', null);
        $v_0.addQuery($v_1);
        this.removeFromParentCollection();
    }
}


PS.DraftTaskLinkPropertyNames = function PS_DraftTaskLinkPropertyNames() {
}


PS.DraftTaskLinkObjectPropertyNames = function PS_DraftTaskLinkObjectPropertyNames() {
}


PS.DraftTaskLinkCollection = function PS_DraftTaskLinkCollection(context, objectPath) {ULSyTi:;
    PS.DraftTaskLinkCollection.initializeBase(this, [ context, objectPath ]);
}
PS.DraftTaskLinkCollection.prototype = {
    
    itemAt: function PS_DraftTaskLinkCollection$itemAt$in(index) {ULSyTi:;
        return this.getItemAtIndex(index);
    },
    
    get_item: function PS_DraftTaskLinkCollection$get_item$in(index) {ULSyTi:;
        return this.getItemAtIndex(index);
    },
    
    get_childItemType: function PS_DraftTaskLinkCollection$get_childItemType$in() {ULSyTi:;
        return PS.DraftTaskLink;
    },
    
    getById: function PS_DraftTaskLinkCollection$getById$in(objectId) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = ((this.get_objectData().get_methodReturnObjects()['GetById']));
        if (SP.ScriptUtility.isNullOrUndefined($v_2)) {
            $v_2 = {};
            this.get_objectData().get_methodReturnObjects()['GetById'] = $v_2;
        }
        $v_1 = (($v_2[objectId]));
        if (!$v_0.get_disableReturnValueCache() && !SP.ScriptUtility.isNullOrUndefined($v_1)) {
            return $v_1;
        }
        $v_1 = new PS.DraftTaskLink($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetById', [ objectId ]));
        if (!$v_0.get_disableReturnValueCache()) {
            $v_2[objectId] = $v_1;
        }
        return $v_1;
    },
    
    getByGuid: function PS_DraftTaskLinkCollection$getByGuid$in(uid) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = ((this.get_objectData().get_methodReturnObjects()['GetByGuid']));
        if (SP.ScriptUtility.isNullOrUndefined($v_2)) {
            $v_2 = {};
            this.get_objectData().get_methodReturnObjects()['GetByGuid'] = $v_2;
        }
        $v_1 = (($v_2[uid.toString()]));
        if (!$v_0.get_disableReturnValueCache() && !SP.ScriptUtility.isNullOrUndefined($v_1)) {
            return $v_1;
        }
        $v_1 = new PS.DraftTaskLink($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetByGuid', [ uid ]));
        if (!$v_0.get_disableReturnValueCache()) {
            $v_2[uid.toString()] = $v_1;
        }
        return $v_1;
    },
    
    add: function PS_DraftTaskLinkCollection$add$in(parameters) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        $v_1 = new PS.DraftTaskLink($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'Add', [ parameters ]));
        $v_1.get_path().setPendingReplace();
        var $v_2 = new SP.ObjectIdentityQuery($v_1.get_path());
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        $v_0.addQuery($v_2);
        this.addChild($v_1);
        return $v_1;
    },
    
    remove: function PS_DraftTaskLinkCollection$remove$in(TaskLink) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'Remove', [ TaskLink ]);
        $v_0.addQuery($v_2);
        $v_1 = new SP.BooleanResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        this.removeChild(TaskLink);
        return $v_1;
    }
}


PS.EnterpriseProjectType = function PS_EnterpriseProjectType(context, objectPath) {ULSyTi:;
    PS.EnterpriseProjectType.initializeBase(this, [ context, objectPath ]);
}
PS.EnterpriseProjectType.prototype = {
    
    get_description: function PS_EnterpriseProjectType$get_description$in() {ULSyTi:;
        this.checkUninitializedProperty('Description');
        return (this.get_objectData().get_properties()['Description']);
    },
    
    set_description: function PS_EnterpriseProjectType$set_description$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['Description'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Description', value));
        }
        return value;
    },
    
    get_id: function PS_EnterpriseProjectType$get_id$in() {ULSyTi:;
        this.checkUninitializedProperty('Id');
        return (this.get_objectData().get_properties()['Id']);
    },
    
    get_imageUrl: function PS_EnterpriseProjectType$get_imageUrl$in() {ULSyTi:;
        this.checkUninitializedProperty('ImageUrl');
        return (this.get_objectData().get_properties()['ImageUrl']);
    },
    
    set_imageUrl: function PS_EnterpriseProjectType$set_imageUrl$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['ImageUrl'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'ImageUrl', value));
        }
        return value;
    },
    
    get_isDefault: function PS_EnterpriseProjectType$get_isDefault$in() {ULSyTi:;
        this.checkUninitializedProperty('IsDefault');
        return (this.get_objectData().get_properties()['IsDefault']);
    },
    
    set_isDefault: function PS_EnterpriseProjectType$set_isDefault$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['IsDefault'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'IsDefault', value));
        }
        return value;
    },
    
    get_isManaged: function PS_EnterpriseProjectType$get_isManaged$in() {ULSyTi:;
        this.checkUninitializedProperty('IsManaged');
        return (this.get_objectData().get_properties()['IsManaged']);
    },
    
    set_isManaged: function PS_EnterpriseProjectType$set_isManaged$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['IsManaged'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'IsManaged', value));
        }
        return value;
    },
    
    get_name: function PS_EnterpriseProjectType$get_name$in() {ULSyTi:;
        this.checkUninitializedProperty('Name');
        return (this.get_objectData().get_properties()['Name']);
    },
    
    set_name: function PS_EnterpriseProjectType$set_name$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['Name'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Name', value));
        }
        return value;
    },
    
    get_order: function PS_EnterpriseProjectType$get_order$in() {ULSyTi:;
        this.checkUninitializedProperty('Order');
        return (this.get_objectData().get_properties()['Order']);
    },
    
    set_order: function PS_EnterpriseProjectType$set_order$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['Order'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Order', value));
        }
        return value;
    },
    
    get_projectDetailPages: function PS_EnterpriseProjectType$get_projectDetailPages$in() {ULSyTi:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['ProjectDetailPages']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new PS.ProjectDetailPageCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'ProjectDetailPages'));
            this.get_objectData().get_clientObjectProperties()['ProjectDetailPages'] = $v_0;
        }
        return $v_0;
    },
    
    get_projectPlanTemplateId: function PS_EnterpriseProjectType$get_projectPlanTemplateId$in() {ULSyTi:;
        this.checkUninitializedProperty('ProjectPlanTemplateId');
        return (this.get_objectData().get_properties()['ProjectPlanTemplateId']);
    },
    
    set_projectPlanTemplateId: function PS_EnterpriseProjectType$set_projectPlanTemplateId$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['ProjectPlanTemplateId'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'ProjectPlanTemplateId', value));
        }
        return value;
    },
    
    get_workflowAssociationId: function PS_EnterpriseProjectType$get_workflowAssociationId$in() {ULSyTi:;
        this.checkUninitializedProperty('WorkflowAssociationId');
        return (this.get_objectData().get_properties()['WorkflowAssociationId']);
    },
    
    set_workflowAssociationId: function PS_EnterpriseProjectType$set_workflowAssociationId$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['WorkflowAssociationId'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'WorkflowAssociationId', value));
        }
        return value;
    },
    
    get_workflowAssociationName: function PS_EnterpriseProjectType$get_workflowAssociationName$in() {ULSyTi:;
        this.checkUninitializedProperty('WorkflowAssociationName');
        return (this.get_objectData().get_properties()['WorkflowAssociationName']);
    },
    
    set_workflowAssociationName: function PS_EnterpriseProjectType$set_workflowAssociationName$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['WorkflowAssociationName'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'WorkflowAssociationName', value));
        }
        return value;
    },
    
    get_workspaceTemplateName: function PS_EnterpriseProjectType$get_workspaceTemplateName$in() {ULSyTi:;
        this.checkUninitializedProperty('WorkspaceTemplateName');
        return (this.get_objectData().get_properties()['WorkspaceTemplateName']);
    },
    
    set_workspaceTemplateName: function PS_EnterpriseProjectType$set_workspaceTemplateName$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['WorkspaceTemplateName'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'WorkspaceTemplateName', value));
        }
        return value;
    },
    
    initPropertiesFromJson: function PS_EnterpriseProjectType$initPropertiesFromJson$in(parentNode) {ULSyTi:;
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.Description;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Description'] = ($v_0);
            delete parentNode.Description;
        }
        $v_0 = parentNode.Id;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Id'] = ($v_0);
            delete parentNode.Id;
        }
        $v_0 = parentNode.ImageUrl;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ImageUrl'] = ($v_0);
            delete parentNode.ImageUrl;
        }
        $v_0 = parentNode.IsDefault;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['IsDefault'] = ($v_0);
            delete parentNode.IsDefault;
        }
        $v_0 = parentNode.IsManaged;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['IsManaged'] = ($v_0);
            delete parentNode.IsManaged;
        }
        $v_0 = parentNode.Name;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Name'] = ($v_0);
            delete parentNode.Name;
        }
        $v_0 = parentNode.Order;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Order'] = ($v_0);
            delete parentNode.Order;
        }
        $v_0 = parentNode.ProjectDetailPages;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('ProjectDetailPages', this.get_projectDetailPages(), $v_0);
            this.get_projectDetailPages().fromJson($v_0);
            delete parentNode.ProjectDetailPages;
        }
        $v_0 = parentNode.ProjectPlanTemplateId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ProjectPlanTemplateId'] = ($v_0);
            delete parentNode.ProjectPlanTemplateId;
        }
        $v_0 = parentNode.WorkflowAssociationId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['WorkflowAssociationId'] = ($v_0);
            delete parentNode.WorkflowAssociationId;
        }
        $v_0 = parentNode.WorkflowAssociationName;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['WorkflowAssociationName'] = ($v_0);
            delete parentNode.WorkflowAssociationName;
        }
        $v_0 = parentNode.WorkspaceTemplateName;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['WorkspaceTemplateName'] = ($v_0);
            delete parentNode.WorkspaceTemplateName;
        }
    },
    
    deleteObject: function PS_EnterpriseProjectType$deleteObject$in() {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'DeleteObject', null);
        $v_0.addQuery($v_1);
        this.removeFromParentCollection();
    }
}


PS.EnterpriseProjectTypePropertyNames = function PS_EnterpriseProjectTypePropertyNames() {
}


PS.EnterpriseProjectTypeObjectPropertyNames = function PS_EnterpriseProjectTypeObjectPropertyNames() {
}


PS.EnterpriseProjectTypeCollection = function PS_EnterpriseProjectTypeCollection(context, objectPath) {ULSyTi:;
    PS.EnterpriseProjectTypeCollection.initializeBase(this, [ context, objectPath ]);
}
PS.EnterpriseProjectTypeCollection.prototype = {
    
    itemAt: function PS_EnterpriseProjectTypeCollection$itemAt$in(index) {ULSyTi:;
        return this.getItemAtIndex(index);
    },
    
    get_item: function PS_EnterpriseProjectTypeCollection$get_item$in(index) {ULSyTi:;
        return this.getItemAtIndex(index);
    },
    
    get_childItemType: function PS_EnterpriseProjectTypeCollection$get_childItemType$in() {ULSyTi:;
        return PS.EnterpriseProjectType;
    },
    
    getById: function PS_EnterpriseProjectTypeCollection$getById$in(objectId) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = ((this.get_objectData().get_methodReturnObjects()['GetById']));
        if (SP.ScriptUtility.isNullOrUndefined($v_2)) {
            $v_2 = {};
            this.get_objectData().get_methodReturnObjects()['GetById'] = $v_2;
        }
        $v_1 = (($v_2[objectId]));
        if (!$v_0.get_disableReturnValueCache() && !SP.ScriptUtility.isNullOrUndefined($v_1)) {
            return $v_1;
        }
        $v_1 = new PS.EnterpriseProjectType($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetById', [ objectId ]));
        if (!$v_0.get_disableReturnValueCache()) {
            $v_2[objectId] = $v_1;
        }
        return $v_1;
    },
    
    getByGuid: function PS_EnterpriseProjectTypeCollection$getByGuid$in(uid) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = ((this.get_objectData().get_methodReturnObjects()['GetByGuid']));
        if (SP.ScriptUtility.isNullOrUndefined($v_2)) {
            $v_2 = {};
            this.get_objectData().get_methodReturnObjects()['GetByGuid'] = $v_2;
        }
        $v_1 = (($v_2[uid.toString()]));
        if (!$v_0.get_disableReturnValueCache() && !SP.ScriptUtility.isNullOrUndefined($v_1)) {
            return $v_1;
        }
        $v_1 = new PS.EnterpriseProjectType($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetByGuid', [ uid ]));
        if (!$v_0.get_disableReturnValueCache()) {
            $v_2[uid.toString()] = $v_1;
        }
        return $v_1;
    },
    
    update: function PS_EnterpriseProjectTypeCollection$update$in() {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'Update', null);
        $v_0.addQuery($v_1);
    },
    
    add: function PS_EnterpriseProjectTypeCollection$add$in(parameters) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        $v_1 = new PS.EnterpriseProjectType($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'Add', [ parameters ]));
        $v_1.get_path().setPendingReplace();
        var $v_2 = new SP.ObjectIdentityQuery($v_1.get_path());
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        $v_0.addQuery($v_2);
        this.addChild($v_1);
        return $v_1;
    },
    
    remove: function PS_EnterpriseProjectTypeCollection$remove$in(ept) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'Remove', [ ept ]);
        $v_0.addQuery($v_2);
        $v_1 = new SP.BooleanResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        this.removeChild(ept);
        return $v_1;
    }
}


PS.EnterpriseProjectTypeCreationInformation = function PS_EnterpriseProjectTypeCreationInformation() {ULSyTi:;
    PS.EnterpriseProjectTypeCreationInformation.initializeBase(this);
}
PS.EnterpriseProjectTypeCreationInformation.prototype = {
    $2_1: null,
    $0_1: null,
    $j_1: null,
    $n_1: false,
    $r_1: false,
    $1_1: null,
    $C_1: 0,
    $A_1: null,
    $18_1: null,
    $1e_1: null,
    $1f_1: null,
    $1h_1: null,
    
    get_description: function PS_EnterpriseProjectTypeCreationInformation$get_description$in() {ULSyTi:;
        return this.$2_1;
    },
    
    set_description: function PS_EnterpriseProjectTypeCreationInformation$set_description$in(value) {ULSyTi:;
        this.$2_1 = value;
        return value;
    },
    
    get_id: function PS_EnterpriseProjectTypeCreationInformation$get_id$in() {ULSyTi:;
        return this.$0_1;
    },
    
    set_id: function PS_EnterpriseProjectTypeCreationInformation$set_id$in(value) {ULSyTi:;
        this.$0_1 = value;
        return value;
    },
    
    get_imageUrl: function PS_EnterpriseProjectTypeCreationInformation$get_imageUrl$in() {ULSyTi:;
        return this.$j_1;
    },
    
    set_imageUrl: function PS_EnterpriseProjectTypeCreationInformation$set_imageUrl$in(value) {ULSyTi:;
        this.$j_1 = value;
        return value;
    },
    
    get_isDefault: function PS_EnterpriseProjectTypeCreationInformation$get_isDefault$in() {ULSyTi:;
        return this.$n_1;
    },
    
    set_isDefault: function PS_EnterpriseProjectTypeCreationInformation$set_isDefault$in(value) {ULSyTi:;
        this.$n_1 = value;
        return value;
    },
    
    get_isManaged: function PS_EnterpriseProjectTypeCreationInformation$get_isManaged$in() {ULSyTi:;
        return this.$r_1;
    },
    
    set_isManaged: function PS_EnterpriseProjectTypeCreationInformation$set_isManaged$in(value) {ULSyTi:;
        this.$r_1 = value;
        return value;
    },
    
    get_name: function PS_EnterpriseProjectTypeCreationInformation$get_name$in() {ULSyTi:;
        return this.$1_1;
    },
    
    set_name: function PS_EnterpriseProjectTypeCreationInformation$set_name$in(value) {ULSyTi:;
        this.$1_1 = value;
        return value;
    },
    
    get_order: function PS_EnterpriseProjectTypeCreationInformation$get_order$in() {ULSyTi:;
        return this.$C_1;
    },
    
    set_order: function PS_EnterpriseProjectTypeCreationInformation$set_order$in(value) {ULSyTi:;
        this.$C_1 = value;
        return value;
    },
    
    get_projectDetailPages: function PS_EnterpriseProjectTypeCreationInformation$get_projectDetailPages$in() {ULSyTi:;
        return this.$A_1;
    },
    
    set_projectDetailPages: function PS_EnterpriseProjectTypeCreationInformation$set_projectDetailPages$in(value) {ULSyTi:;
        this.$A_1 = value;
        return value;
    },
    
    get_projectPlanTemplateId: function PS_EnterpriseProjectTypeCreationInformation$get_projectPlanTemplateId$in() {ULSyTi:;
        return this.$18_1;
    },
    
    set_projectPlanTemplateId: function PS_EnterpriseProjectTypeCreationInformation$set_projectPlanTemplateId$in(value) {ULSyTi:;
        this.$18_1 = value;
        return value;
    },
    
    get_workflowAssociationId: function PS_EnterpriseProjectTypeCreationInformation$get_workflowAssociationId$in() {ULSyTi:;
        return this.$1e_1;
    },
    
    set_workflowAssociationId: function PS_EnterpriseProjectTypeCreationInformation$set_workflowAssociationId$in(value) {ULSyTi:;
        this.$1e_1 = value;
        return value;
    },
    
    get_workflowAssociationName: function PS_EnterpriseProjectTypeCreationInformation$get_workflowAssociationName$in() {ULSyTi:;
        return this.$1f_1;
    },
    
    set_workflowAssociationName: function PS_EnterpriseProjectTypeCreationInformation$set_workflowAssociationName$in(value) {ULSyTi:;
        this.$1f_1 = value;
        return value;
    },
    
    get_workspaceTemplateName: function PS_EnterpriseProjectTypeCreationInformation$get_workspaceTemplateName$in() {ULSyTi:;
        return this.$1h_1;
    },
    
    set_workspaceTemplateName: function PS_EnterpriseProjectTypeCreationInformation$set_workspaceTemplateName$in(value) {ULSyTi:;
        this.$1h_1 = value;
        return value;
    },
    
    get_typeId: function PS_EnterpriseProjectTypeCreationInformation$get_typeId$in() {ULSyTi:;
        return '{a6ab19cb-851d-4daf-b22c-dcbd221860bf}';
    },
    
    writeToXml: function PS_EnterpriseProjectTypeCreationInformation$writeToXml$in(writer, serializationContext) {ULSyTi:;
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = [ 'Description', 'Id', 'ImageUrl', 'IsDefault', 'IsManaged', 'Name', 'Order', 'ProjectDetailPages', 'ProjectPlanTemplateId', 'WorkflowAssociationId', 'WorkflowAssociationName', 'WorkspaceTemplateName' ];
        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    
    initPropertiesFromJson: function PS_EnterpriseProjectTypeCreationInformation$initPropertiesFromJson$in(parentNode) {ULSyTi:;
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.Description;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$2_1 = ($v_0);
            delete parentNode.Description;
        }
        $v_0 = parentNode.Id;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$0_1 = ($v_0);
            delete parentNode.Id;
        }
        $v_0 = parentNode.ImageUrl;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$j_1 = ($v_0);
            delete parentNode.ImageUrl;
        }
        $v_0 = parentNode.IsDefault;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$n_1 = ($v_0);
            delete parentNode.IsDefault;
        }
        $v_0 = parentNode.IsManaged;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$r_1 = ($v_0);
            delete parentNode.IsManaged;
        }
        $v_0 = parentNode.Name;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1_1 = ($v_0);
            delete parentNode.Name;
        }
        $v_0 = parentNode.Order;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$C_1 = ($v_0);
            delete parentNode.Order;
        }
        $v_0 = parentNode.ProjectDetailPages;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$A_1 = (([]));
            SP.DataConvert.populateArray(null, ((this.$A_1)), ($v_0));
            delete parentNode.ProjectDetailPages;
        }
        $v_0 = parentNode.ProjectPlanTemplateId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$18_1 = ($v_0);
            delete parentNode.ProjectPlanTemplateId;
        }
        $v_0 = parentNode.WorkflowAssociationId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1e_1 = ($v_0);
            delete parentNode.WorkflowAssociationId;
        }
        $v_0 = parentNode.WorkflowAssociationName;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1f_1 = ($v_0);
            delete parentNode.WorkflowAssociationName;
        }
        $v_0 = parentNode.WorkspaceTemplateName;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1h_1 = ($v_0);
            delete parentNode.WorkspaceTemplateName;
        }
    }
}


PS.EnterpriseResource = function PS_EnterpriseResource(context, objectPath) {ULSyTi:;
    PS.EnterpriseResource.initializeBase(this, [ context, objectPath ]);
}
PS.EnterpriseResource.getSelf = function PS_EnterpriseResource$getSelf$st(Context) {ULSyTi:;
    var $v_0 = Context.get_staticObjects()['Microsoft$ProjectServer$EnterpriseResource$Self'];
    if (!$v_0) {
        $v_0 = new PS.EnterpriseResource(Context, new SP.ObjectPathStaticProperty(Context, '{f6167b82-e04e-4ce2-8631-09ce14f6277e}', 'Self'));
        Context.get_staticObjects()['Microsoft$ProjectServer$EnterpriseResource$Self'] = $v_0;
    }
    return $v_0;
}
PS.EnterpriseResource.prototype = {
    
    get_fieldValues: function PS_EnterpriseResource$get_fieldValues$in() {ULSyTi:;
        var $v_0 = this.get_objectData().get_methodReturnObjects()['$m_dict'];
        if (SP.ScriptUtility.isNullOrUndefined($v_0)) {
            $v_0 = {};
            this.get_objectData().get_methodReturnObjects()['$m_dict'] = $v_0;
        }
        return $v_0;
    },
    
    get_item: function PS_EnterpriseResource$get_item$in(fieldName) {ULSyTi:;
        return this.$6_1(fieldName);
    },
    
    set_item: function PS_EnterpriseResource$set_item$in(fieldName, value) {ULSyTi:;
        this.$G_1(fieldName, value);
        return value;
    },
    
    get_assignments: function PS_EnterpriseResource$get_assignments$in() {ULSyTi:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['Assignments']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new PS.StatusAssignmentCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Assignments'));
            this.get_objectData().get_clientObjectProperties()['Assignments'] = $v_0;
        }
        return $v_0;
    },
    
    get_baseCalendar: function PS_EnterpriseResource$get_baseCalendar$in() {ULSyTi:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['BaseCalendar']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new PS.Calendar(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'BaseCalendar'));
            this.get_objectData().get_clientObjectProperties()['BaseCalendar'] = $v_0;
        }
        return $v_0;
    },
    
    set_baseCalendar: function PS_EnterpriseResource$set_baseCalendar$in(value) {ULSyTi:;
        this.get_objectData().get_clientObjectProperties()['BaseCalendar'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'BaseCalendar', value));
        }
        return value;
    },
    
    get_canLevel: function PS_EnterpriseResource$get_canLevel$in() {ULSyTi:;
        this.checkUninitializedProperty('CanLevel');
        return (this.get_objectData().get_properties()['CanLevel']);
    },
    
    set_canLevel: function PS_EnterpriseResource$set_canLevel$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['CanLevel'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'CanLevel', value));
        }
        return value;
    },
    
    get_code: function PS_EnterpriseResource$get_code$in() {ULSyTi:;
        this.checkUninitializedProperty('Code');
        return (this.get_objectData().get_properties()['Code']);
    },
    
    set_code: function PS_EnterpriseResource$set_code$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['Code'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Code', value));
        }
        return value;
    },
    
    get_costAccrual: function PS_EnterpriseResource$get_costAccrual$in() {ULSyTi:;
        this.checkUninitializedProperty('CostAccrual');
        return (this.get_objectData().get_properties()['CostAccrual']);
    },
    
    set_costAccrual: function PS_EnterpriseResource$set_costAccrual$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['CostAccrual'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'CostAccrual', value));
        }
        return value;
    },
    
    get_costCenter: function PS_EnterpriseResource$get_costCenter$in() {ULSyTi:;
        this.checkUninitializedProperty('CostCenter');
        return (this.get_objectData().get_properties()['CostCenter']);
    },
    
    set_costCenter: function PS_EnterpriseResource$set_costCenter$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['CostCenter'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'CostCenter', value));
        }
        return value;
    },
    
    get_created: function PS_EnterpriseResource$get_created$in() {ULSyTi:;
        this.checkUninitializedProperty('Created');
        return (this.get_objectData().get_properties()['Created']);
    },
    
    get_customFields: function PS_EnterpriseResource$get_customFields$in() {ULSyTi:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['CustomFields']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new PS.CustomFieldCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'CustomFields'));
            this.get_objectData().get_clientObjectProperties()['CustomFields'] = $v_0;
        }
        return $v_0;
    },
    
    get_defaultAssignmentOwner: function PS_EnterpriseResource$get_defaultAssignmentOwner$in() {ULSyTi:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['DefaultAssignmentOwner']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.User(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'DefaultAssignmentOwner'));
            this.get_objectData().get_clientObjectProperties()['DefaultAssignmentOwner'] = $v_0;
        }
        return $v_0;
    },
    
    set_defaultAssignmentOwner: function PS_EnterpriseResource$set_defaultAssignmentOwner$in(value) {ULSyTi:;
        this.get_objectData().get_clientObjectProperties()['DefaultAssignmentOwner'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'DefaultAssignmentOwner', value));
        }
        return value;
    },
    
    get_defaultBookingType: function PS_EnterpriseResource$get_defaultBookingType$in() {ULSyTi:;
        this.checkUninitializedProperty('DefaultBookingType');
        return (this.get_objectData().get_properties()['DefaultBookingType']);
    },
    
    set_defaultBookingType: function PS_EnterpriseResource$set_defaultBookingType$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['DefaultBookingType'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'DefaultBookingType', value));
        }
        return value;
    },
    
    get_email: function PS_EnterpriseResource$get_email$in() {ULSyTi:;
        this.checkUninitializedProperty('Email');
        return (this.get_objectData().get_properties()['Email']);
    },
    
    set_email: function PS_EnterpriseResource$set_email$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['Email'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Email', value));
        }
        return value;
    },
    
    get_externalId: function PS_EnterpriseResource$get_externalId$in() {ULSyTi:;
        this.checkUninitializedProperty('ExternalId');
        return (this.get_objectData().get_properties()['ExternalId']);
    },
    
    set_externalId: function PS_EnterpriseResource$set_externalId$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['ExternalId'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'ExternalId', value));
        }
        return value;
    },
    
    get_group: function PS_EnterpriseResource$get_group$in() {ULSyTi:;
        this.checkUninitializedProperty('Group');
        return (this.get_objectData().get_properties()['Group']);
    },
    
    set_group: function PS_EnterpriseResource$set_group$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['Group'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Group', value));
        }
        return value;
    },
    
    get_hireDate: function PS_EnterpriseResource$get_hireDate$in() {ULSyTi:;
        this.checkUninitializedProperty('HireDate');
        return (this.get_objectData().get_properties()['HireDate']);
    },
    
    set_hireDate: function PS_EnterpriseResource$set_hireDate$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['HireDate'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'HireDate', value));
        }
        return value;
    },
    
    get_id: function PS_EnterpriseResource$get_id$in() {ULSyTi:;
        this.checkUninitializedProperty('Id');
        return (this.get_objectData().get_properties()['Id']);
    },
    
    get_initials: function PS_EnterpriseResource$get_initials$in() {ULSyTi:;
        this.checkUninitializedProperty('Initials');
        return (this.get_objectData().get_properties()['Initials']);
    },
    
    set_initials: function PS_EnterpriseResource$set_initials$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['Initials'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Initials', value));
        }
        return value;
    },
    
    get_isActive: function PS_EnterpriseResource$get_isActive$in() {ULSyTi:;
        this.checkUninitializedProperty('IsActive');
        return (this.get_objectData().get_properties()['IsActive']);
    },
    
    set_isActive: function PS_EnterpriseResource$set_isActive$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['IsActive'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'IsActive', value));
        }
        return value;
    },
    
    get_isBudget: function PS_EnterpriseResource$get_isBudget$in() {ULSyTi:;
        this.checkUninitializedProperty('IsBudget');
        return (this.get_objectData().get_properties()['IsBudget']);
    },
    
    get_isCheckedOut: function PS_EnterpriseResource$get_isCheckedOut$in() {ULSyTi:;
        this.checkUninitializedProperty('IsCheckedOut');
        return (this.get_objectData().get_properties()['IsCheckedOut']);
    },
    
    get_isGeneric: function PS_EnterpriseResource$get_isGeneric$in() {ULSyTi:;
        this.checkUninitializedProperty('IsGeneric');
        return (this.get_objectData().get_properties()['IsGeneric']);
    },
    
    get_isTeam: function PS_EnterpriseResource$get_isTeam$in() {ULSyTi:;
        this.checkUninitializedProperty('IsTeam');
        return (this.get_objectData().get_properties()['IsTeam']);
    },
    
    get_materialLabel: function PS_EnterpriseResource$get_materialLabel$in() {ULSyTi:;
        this.checkUninitializedProperty('MaterialLabel');
        return (this.get_objectData().get_properties()['MaterialLabel']);
    },
    
    set_materialLabel: function PS_EnterpriseResource$set_materialLabel$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['MaterialLabel'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'MaterialLabel', value));
        }
        return value;
    },
    
    get_modified: function PS_EnterpriseResource$get_modified$in() {ULSyTi:;
        this.checkUninitializedProperty('Modified');
        return (this.get_objectData().get_properties()['Modified']);
    },
    
    get_name: function PS_EnterpriseResource$get_name$in() {ULSyTi:;
        this.checkUninitializedProperty('Name');
        return (this.get_objectData().get_properties()['Name']);
    },
    
    set_name: function PS_EnterpriseResource$set_name$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['Name'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Name', value));
        }
        return value;
    },
    
    get_phonetics: function PS_EnterpriseResource$get_phonetics$in() {ULSyTi:;
        this.checkUninitializedProperty('Phonetics');
        return (this.get_objectData().get_properties()['Phonetics']);
    },
    
    set_phonetics: function PS_EnterpriseResource$set_phonetics$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['Phonetics'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Phonetics', value));
        }
        return value;
    },
    
    get_resourceCalendarExceptions: function PS_EnterpriseResource$get_resourceCalendarExceptions$in() {ULSyTi:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['ResourceCalendarExceptions']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new PS.CalendarExceptionCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'ResourceCalendarExceptions'));
            this.get_objectData().get_clientObjectProperties()['ResourceCalendarExceptions'] = $v_0;
        }
        return $v_0;
    },
    
    get_resourceType: function PS_EnterpriseResource$get_resourceType$in() {ULSyTi:;
        this.checkUninitializedProperty('ResourceType');
        return (this.get_objectData().get_properties()['ResourceType']);
    },
    
    get_terminationDate: function PS_EnterpriseResource$get_terminationDate$in() {ULSyTi:;
        this.checkUninitializedProperty('TerminationDate');
        return (this.get_objectData().get_properties()['TerminationDate']);
    },
    
    set_terminationDate: function PS_EnterpriseResource$set_terminationDate$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['TerminationDate'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'TerminationDate', value));
        }
        return value;
    },
    
    get_timesheetManager: function PS_EnterpriseResource$get_timesheetManager$in() {ULSyTi:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['TimesheetManager']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.User(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'TimesheetManager'));
            this.get_objectData().get_clientObjectProperties()['TimesheetManager'] = $v_0;
        }
        return $v_0;
    },
    
    set_timesheetManager: function PS_EnterpriseResource$set_timesheetManager$in(value) {ULSyTi:;
        this.get_objectData().get_clientObjectProperties()['TimesheetManager'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'TimesheetManager', value));
        }
        return value;
    },
    
    get_user: function PS_EnterpriseResource$get_user$in() {ULSyTi:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['User']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.User(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'User'));
            this.get_objectData().get_clientObjectProperties()['User'] = $v_0;
        }
        return $v_0;
    },
    
    set_user: function PS_EnterpriseResource$set_user$in(value) {ULSyTi:;
        this.get_objectData().get_clientObjectProperties()['User'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'User', value));
        }
        return value;
    },
    
    initNonPropertiesFromJson: function PS_EnterpriseResource$initNonPropertiesFromJson$in(parentNode) {ULSyTi:;
        SP.DataConvert.populateDictionaryFromObject(this.get_fieldValues(), parentNode);
        SP.DataConvert.fixupTypes(this.get_context(), this.get_fieldValues());
    },
    
    initPropertiesFromJson: function PS_EnterpriseResource$initPropertiesFromJson$in(parentNode) {ULSyTi:;
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.Assignments;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('Assignments', this.get_assignments(), $v_0);
            this.get_assignments().fromJson($v_0);
            delete parentNode.Assignments;
        }
        $v_0 = parentNode.BaseCalendar;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('BaseCalendar', this.get_baseCalendar(), $v_0);
            this.get_baseCalendar().fromJson($v_0);
            delete parentNode.BaseCalendar;
        }
        $v_0 = parentNode.CanLevel;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['CanLevel'] = ($v_0);
            delete parentNode.CanLevel;
        }
        $v_0 = parentNode.Code;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Code'] = ($v_0);
            delete parentNode.Code;
        }
        $v_0 = parentNode.CostAccrual;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['CostAccrual'] = ((SP.DataConvert.fixupType(this.get_context(), $v_0)));
            delete parentNode.CostAccrual;
        }
        $v_0 = parentNode.CostCenter;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['CostCenter'] = ($v_0);
            delete parentNode.CostCenter;
        }
        $v_0 = parentNode.Created;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Created'] = ($v_0);
            delete parentNode.Created;
        }
        $v_0 = parentNode.CustomFields;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('CustomFields', this.get_customFields(), $v_0);
            this.get_customFields().fromJson($v_0);
            delete parentNode.CustomFields;
        }
        $v_0 = parentNode.DefaultAssignmentOwner;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('DefaultAssignmentOwner', this.get_defaultAssignmentOwner(), $v_0);
            this.get_defaultAssignmentOwner().fromJson($v_0);
            delete parentNode.DefaultAssignmentOwner;
        }
        $v_0 = parentNode.DefaultBookingType;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['DefaultBookingType'] = ((SP.DataConvert.fixupType(this.get_context(), $v_0)));
            delete parentNode.DefaultBookingType;
        }
        $v_0 = parentNode.Email;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Email'] = ($v_0);
            delete parentNode.Email;
        }
        $v_0 = parentNode.ExternalId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ExternalId'] = ($v_0);
            delete parentNode.ExternalId;
        }
        $v_0 = parentNode.Group;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Group'] = ($v_0);
            delete parentNode.Group;
        }
        $v_0 = parentNode.HireDate;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['HireDate'] = ($v_0);
            delete parentNode.HireDate;
        }
        $v_0 = parentNode.Id;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Id'] = ($v_0);
            delete parentNode.Id;
        }
        $v_0 = parentNode.Initials;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Initials'] = ($v_0);
            delete parentNode.Initials;
        }
        $v_0 = parentNode.IsActive;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['IsActive'] = ($v_0);
            delete parentNode.IsActive;
        }
        $v_0 = parentNode.IsBudget;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['IsBudget'] = ($v_0);
            delete parentNode.IsBudget;
        }
        $v_0 = parentNode.IsCheckedOut;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['IsCheckedOut'] = ($v_0);
            delete parentNode.IsCheckedOut;
        }
        $v_0 = parentNode.IsGeneric;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['IsGeneric'] = ($v_0);
            delete parentNode.IsGeneric;
        }
        $v_0 = parentNode.IsTeam;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['IsTeam'] = ($v_0);
            delete parentNode.IsTeam;
        }
        $v_0 = parentNode.MaterialLabel;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['MaterialLabel'] = ($v_0);
            delete parentNode.MaterialLabel;
        }
        $v_0 = parentNode.Modified;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Modified'] = ($v_0);
            delete parentNode.Modified;
        }
        $v_0 = parentNode.Name;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Name'] = ($v_0);
            delete parentNode.Name;
        }
        $v_0 = parentNode.Phonetics;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Phonetics'] = ($v_0);
            delete parentNode.Phonetics;
        }
        $v_0 = parentNode.ResourceCalendarExceptions;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('ResourceCalendarExceptions', this.get_resourceCalendarExceptions(), $v_0);
            this.get_resourceCalendarExceptions().fromJson($v_0);
            delete parentNode.ResourceCalendarExceptions;
        }
        $v_0 = parentNode.ResourceType;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ResourceType'] = ((SP.DataConvert.fixupType(this.get_context(), $v_0)));
            delete parentNode.ResourceType;
        }
        $v_0 = parentNode.TerminationDate;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['TerminationDate'] = ($v_0);
            delete parentNode.TerminationDate;
        }
        $v_0 = parentNode.TimesheetManager;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('TimesheetManager', this.get_timesheetManager(), $v_0);
            this.get_timesheetManager().fromJson($v_0);
            delete parentNode.TimesheetManager;
        }
        $v_0 = parentNode.User;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('User', this.get_user(), $v_0);
            this.get_user().fromJson($v_0);
            delete parentNode.User;
        }
    },
    
    $6_1: function PS_EnterpriseResource$$6_1$in($p0) {
        var $v_0 = this.get_fieldValues()[$p0];
        if (SP.ScriptUtility.isUndefined($v_0)) {
            throw Error.create(SP.ResResources.getString('PropertyHasNotBeenInitialized'));
        }
        return $v_0;
    },
    
    refreshLoad: function PS_EnterpriseResource$refreshLoad$in() {ULSyTi:;
        SP.ClientObject.prototype.refreshLoad.call(this);
        this.loadExpandoFields();
    },
    
    loadExpandoFields: function PS_EnterpriseResource$loadExpandoFields$in() {ULSyTi:;
        var $$dict_1 = this.get_fieldValues();
        for (var $$key_2 in $$dict_1) {
            var $v_0 = { key: $$key_2, value: $$dict_1[$$key_2] };
            this.retrieve($v_0.key);
        }
    },
    
    $G_1: function PS_EnterpriseResource$$G_1$in($p0, $p1) {
        var $v_0 = this.get_context();
        this.get_fieldValues()[$p0] = $p1;
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'SetCustomFieldValue', [ $p0, $p1 ]);
        if ($v_0) {
            $v_0.addQuery($v_1);
        }
    },
    
    deleteObject: function PS_EnterpriseResource$deleteObject$in() {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'DeleteObject', null);
        $v_0.addQuery($v_1);
        this.removeFromParentCollection();
    },
    
    forceCheckIn: function PS_EnterpriseResource$forceCheckIn$in() {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'ForceCheckIn', null);
        $v_0.addQuery($v_1);
    }
}


PS.EnterpriseResourcePropertyNames = function PS_EnterpriseResourcePropertyNames() {
}


PS.EnterpriseResourceObjectPropertyNames = function PS_EnterpriseResourceObjectPropertyNames() {
}


PS.EnterpriseResourceCollection = function PS_EnterpriseResourceCollection(context, objectPath) {ULSyTi:;
    PS.EnterpriseResourceCollection.initializeBase(this, [ context, objectPath ]);
}
PS.EnterpriseResourceCollection.prototype = {
    
    itemAt: function PS_EnterpriseResourceCollection$itemAt$in(index) {ULSyTi:;
        return this.getItemAtIndex(index);
    },
    
    get_item: function PS_EnterpriseResourceCollection$get_item$in(index) {ULSyTi:;
        return this.getItemAtIndex(index);
    },
    
    get_childItemType: function PS_EnterpriseResourceCollection$get_childItemType$in() {ULSyTi:;
        return PS.EnterpriseResource;
    },
    
    getById: function PS_EnterpriseResourceCollection$getById$in(objectId) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = ((this.get_objectData().get_methodReturnObjects()['GetById']));
        if (SP.ScriptUtility.isNullOrUndefined($v_2)) {
            $v_2 = {};
            this.get_objectData().get_methodReturnObjects()['GetById'] = $v_2;
        }
        $v_1 = (($v_2[objectId]));
        if (!$v_0.get_disableReturnValueCache() && !SP.ScriptUtility.isNullOrUndefined($v_1)) {
            return $v_1;
        }
        $v_1 = new PS.EnterpriseResource($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetById', [ objectId ]));
        if (!$v_0.get_disableReturnValueCache()) {
            $v_2[objectId] = $v_1;
        }
        return $v_1;
    },
    
    getByGuid: function PS_EnterpriseResourceCollection$getByGuid$in(uid) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = ((this.get_objectData().get_methodReturnObjects()['GetByGuid']));
        if (SP.ScriptUtility.isNullOrUndefined($v_2)) {
            $v_2 = {};
            this.get_objectData().get_methodReturnObjects()['GetByGuid'] = $v_2;
        }
        $v_1 = (($v_2[uid.toString()]));
        if (!$v_0.get_disableReturnValueCache() && !SP.ScriptUtility.isNullOrUndefined($v_1)) {
            return $v_1;
        }
        $v_1 = new PS.EnterpriseResource($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetByGuid', [ uid ]));
        if (!$v_0.get_disableReturnValueCache()) {
            $v_2[uid.toString()] = $v_1;
        }
        return $v_1;
    },
    
    getByUser: function PS_EnterpriseResourceCollection$getByUser$in(user) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        $v_1 = new PS.EnterpriseResource($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetByUser', [ user ]));
        return $v_1;
    },
    
    add: function PS_EnterpriseResourceCollection$add$in(parameters) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        $v_1 = new PS.EnterpriseResource($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'Add', [ parameters ]));
        $v_1.get_path().setPendingReplace();
        var $v_2 = new SP.ObjectIdentityQuery($v_1.get_path());
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        $v_0.addQuery($v_2);
        this.addChild($v_1);
        return $v_1;
    },
    
    remove: function PS_EnterpriseResourceCollection$remove$in(resource) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'Remove', [ resource ]);
        $v_0.addQuery($v_2);
        $v_1 = new SP.BooleanResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        this.removeChild(resource);
        return $v_1;
    },
    
    update: function PS_EnterpriseResourceCollection$update$in() {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'Update', null);
        $v_0.addQuery($v_1);
    }
}


PS.EnterpriseResourceCreationInformation = function PS_EnterpriseResourceCreationInformation() {ULSyTi:;
    PS.EnterpriseResourceCreationInformation.initializeBase(this);
}
PS.EnterpriseResourceCreationInformation.prototype = {
    $0_1: null,
    $l_1: false,
    $p_1: false,
    $q_1: false,
    $1_1: null,
    $1I_1: 0,
    
    get_id: function PS_EnterpriseResourceCreationInformation$get_id$in() {ULSyTi:;
        return this.$0_1;
    },
    
    set_id: function PS_EnterpriseResourceCreationInformation$set_id$in(value) {ULSyTi:;
        this.$0_1 = value;
        return value;
    },
    
    get_isBudget: function PS_EnterpriseResourceCreationInformation$get_isBudget$in() {ULSyTi:;
        return this.$l_1;
    },
    
    set_isBudget: function PS_EnterpriseResourceCreationInformation$set_isBudget$in(value) {ULSyTi:;
        this.$l_1 = value;
        return value;
    },
    
    get_isGeneric: function PS_EnterpriseResourceCreationInformation$get_isGeneric$in() {ULSyTi:;
        return this.$p_1;
    },
    
    set_isGeneric: function PS_EnterpriseResourceCreationInformation$set_isGeneric$in(value) {ULSyTi:;
        this.$p_1 = value;
        return value;
    },
    
    get_isInactive: function PS_EnterpriseResourceCreationInformation$get_isInactive$in() {ULSyTi:;
        return this.$q_1;
    },
    
    set_isInactive: function PS_EnterpriseResourceCreationInformation$set_isInactive$in(value) {ULSyTi:;
        this.$q_1 = value;
        return value;
    },
    
    get_name: function PS_EnterpriseResourceCreationInformation$get_name$in() {ULSyTi:;
        return this.$1_1;
    },
    
    set_name: function PS_EnterpriseResourceCreationInformation$set_name$in(value) {ULSyTi:;
        this.$1_1 = value;
        return value;
    },
    
    get_resourceType: function PS_EnterpriseResourceCreationInformation$get_resourceType$in() {ULSyTi:;
        return this.$1I_1;
    },
    
    set_resourceType: function PS_EnterpriseResourceCreationInformation$set_resourceType$in(value) {ULSyTi:;
        this.$1I_1 = value;
        return value;
    },
    
    get_typeId: function PS_EnterpriseResourceCreationInformation$get_typeId$in() {ULSyTi:;
        return '{4a670666-e25a-42a5-aaf1-f517d9fdae9a}';
    },
    
    writeToXml: function PS_EnterpriseResourceCreationInformation$writeToXml$in(writer, serializationContext) {ULSyTi:;
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = [ 'Id', 'IsBudget', 'IsGeneric', 'IsInactive', 'Name', 'ResourceType' ];
        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    
    initPropertiesFromJson: function PS_EnterpriseResourceCreationInformation$initPropertiesFromJson$in(parentNode) {ULSyTi:;
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.Id;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$0_1 = ($v_0);
            delete parentNode.Id;
        }
        $v_0 = parentNode.IsBudget;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$l_1 = ($v_0);
            delete parentNode.IsBudget;
        }
        $v_0 = parentNode.IsGeneric;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$p_1 = ($v_0);
            delete parentNode.IsGeneric;
        }
        $v_0 = parentNode.IsInactive;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$q_1 = ($v_0);
            delete parentNode.IsInactive;
        }
        $v_0 = parentNode.Name;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1_1 = ($v_0);
            delete parentNode.Name;
        }
        $v_0 = parentNode.ResourceType;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1I_1 = ((SP.DataConvert.fixupType(null, $v_0)));
            delete parentNode.ResourceType;
        }
    }
}


PS.EntityType = function PS_EntityType(context, objectPath) {ULSyTi:;
    PS.EntityType.initializeBase(this, [ context, objectPath ]);
}
PS.EntityType.prototype = {
    
    get_name: function PS_EntityType$get_name$in() {ULSyTi:;
        this.checkUninitializedProperty('Name');
        return (this.get_objectData().get_properties()['Name']);
    },
    
    get_id: function PS_EntityType$get_id$in() {ULSyTi:;
        this.checkUninitializedProperty('ID');
        return (this.get_objectData().get_properties()['ID']);
    },
    
    initPropertiesFromJson: function PS_EntityType$initPropertiesFromJson$in(parentNode) {ULSyTi:;
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.Name;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Name'] = ($v_0);
            delete parentNode.Name;
        }
        $v_0 = parentNode.ID;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ID'] = ($v_0);
            delete parentNode.ID;
        }
    }
}


PS.EntityTypePropertyNames = function PS_EntityTypePropertyNames() {
}


PS.EntityTypes = function PS_EntityTypes(context, objectPath) {ULSyTi:;
    PS.EntityTypes.initializeBase(this, [ context, objectPath ]);
}
PS.EntityTypes.prototype = {
    
    get_assignmentEntity: function PS_EntityTypes$get_assignmentEntity$in() {ULSyTi:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['AssignmentEntity']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new PS.EntityType(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'AssignmentEntity'));
            this.get_objectData().get_clientObjectProperties()['AssignmentEntity'] = $v_0;
        }
        return $v_0;
    },
    
    get_projectEntity: function PS_EntityTypes$get_projectEntity$in() {ULSyTi:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['ProjectEntity']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new PS.EntityType(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'ProjectEntity'));
            this.get_objectData().get_clientObjectProperties()['ProjectEntity'] = $v_0;
        }
        return $v_0;
    },
    
    get_resourceEntity: function PS_EntityTypes$get_resourceEntity$in() {ULSyTi:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['ResourceEntity']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new PS.EntityType(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'ResourceEntity'));
            this.get_objectData().get_clientObjectProperties()['ResourceEntity'] = $v_0;
        }
        return $v_0;
    },
    
    get_taskEntity: function PS_EntityTypes$get_taskEntity$in() {ULSyTi:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['TaskEntity']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new PS.EntityType(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'TaskEntity'));
            this.get_objectData().get_clientObjectProperties()['TaskEntity'] = $v_0;
        }
        return $v_0;
    },
    
    initPropertiesFromJson: function PS_EntityTypes$initPropertiesFromJson$in(parentNode) {ULSyTi:;
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.AssignmentEntity;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('AssignmentEntity', this.get_assignmentEntity(), $v_0);
            this.get_assignmentEntity().fromJson($v_0);
            delete parentNode.AssignmentEntity;
        }
        $v_0 = parentNode.ProjectEntity;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('ProjectEntity', this.get_projectEntity(), $v_0);
            this.get_projectEntity().fromJson($v_0);
            delete parentNode.ProjectEntity;
        }
        $v_0 = parentNode.ResourceEntity;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('ResourceEntity', this.get_resourceEntity(), $v_0);
            this.get_resourceEntity().fromJson($v_0);
            delete parentNode.ResourceEntity;
        }
        $v_0 = parentNode.TaskEntity;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('TaskEntity', this.get_taskEntity(), $v_0);
            this.get_taskEntity().fromJson($v_0);
            delete parentNode.TaskEntity;
        }
    }
}


PS.EntityTypesObjectPropertyNames = function PS_EntityTypesObjectPropertyNames() {
}


PS.Event = function PS_Event(context, objectPath) {ULSyTi:;
    PS.Event.initializeBase(this, [ context, objectPath ]);
}
PS.Event.prototype = {
    
    get_eventName: function PS_Event$get_eventName$in() {ULSyTi:;
        this.checkUninitializedProperty('EventName');
        return (this.get_objectData().get_properties()['EventName']);
    },
    
    set_eventName: function PS_Event$set_eventName$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['EventName'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'EventName', value));
        }
        return value;
    },
    
    get_id: function PS_Event$get_id$in() {ULSyTi:;
        this.checkUninitializedProperty('Id');
        return (this.get_objectData().get_properties()['Id']);
    },
    
    get_sourceName: function PS_Event$get_sourceName$in() {ULSyTi:;
        this.checkUninitializedProperty('SourceName');
        return (this.get_objectData().get_properties()['SourceName']);
    },
    
    set_sourceName: function PS_Event$set_sourceName$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['SourceName'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'SourceName', value));
        }
        return value;
    },
    
    initPropertiesFromJson: function PS_Event$initPropertiesFromJson$in(parentNode) {ULSyTi:;
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.EventName;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['EventName'] = ($v_0);
            delete parentNode.EventName;
        }
        $v_0 = parentNode.Id;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Id'] = ($v_0);
            delete parentNode.Id;
        }
        $v_0 = parentNode.SourceName;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['SourceName'] = ($v_0);
            delete parentNode.SourceName;
        }
    }
}


PS.EventPropertyNames = function PS_EventPropertyNames() {
}


PS.EventCollection = function PS_EventCollection(context, objectPath) {ULSyTi:;
    PS.EventCollection.initializeBase(this, [ context, objectPath ]);
}
PS.EventCollection.prototype = {
    
    itemAt: function PS_EventCollection$itemAt$in(index) {ULSyTi:;
        return this.getItemAtIndex(index);
    },
    
    get_item: function PS_EventCollection$get_item$in(index) {ULSyTi:;
        return this.getItemAtIndex(index);
    },
    
    get_childItemType: function PS_EventCollection$get_childItemType$in() {ULSyTi:;
        return PS.Event;
    },
    
    getById: function PS_EventCollection$getById$in(objectId) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = ((this.get_objectData().get_methodReturnObjects()['GetById']));
        if (SP.ScriptUtility.isNullOrUndefined($v_2)) {
            $v_2 = {};
            this.get_objectData().get_methodReturnObjects()['GetById'] = $v_2;
        }
        $v_1 = (($v_2[objectId]));
        if (!$v_0.get_disableReturnValueCache() && !SP.ScriptUtility.isNullOrUndefined($v_1)) {
            return $v_1;
        }
        $v_1 = new PS.Event($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetById', [ objectId ]));
        if (!$v_0.get_disableReturnValueCache()) {
            $v_2[objectId] = $v_1;
        }
        return $v_1;
    },
    
    getByInt: function PS_EventCollection$getByInt$in(id) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = ((this.get_objectData().get_methodReturnObjects()['GetByInt']));
        if (SP.ScriptUtility.isNullOrUndefined($v_2)) {
            $v_2 = [];
            this.get_objectData().get_methodReturnObjects()['GetByInt'] = $v_2;
        }
        $v_1 = (($v_2[id]));
        if (!$v_0.get_disableReturnValueCache() && !SP.ScriptUtility.isNullOrUndefined($v_1)) {
            return $v_1;
        }
        $v_1 = new PS.Event($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetByInt', [ id ]));
        if (!$v_0.get_disableReturnValueCache()) {
            $v_2[id] = $v_1;
        }
        return $v_1;
    }
}


PS.EventHandler = function PS_EventHandler(context, objectPath) {ULSyTi:;
    PS.EventHandler.initializeBase(this, [ context, objectPath ]);
}
PS.EventHandler.prototype = {
    
    get_assemblyName: function PS_EventHandler$get_assemblyName$in() {ULSyTi:;
        this.checkUninitializedProperty('AssemblyName');
        return (this.get_objectData().get_properties()['AssemblyName']);
    },
    
    set_assemblyName: function PS_EventHandler$set_assemblyName$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['AssemblyName'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'AssemblyName', value));
        }
        return value;
    },
    
    get_className: function PS_EventHandler$get_className$in() {ULSyTi:;
        this.checkUninitializedProperty('ClassName');
        return (this.get_objectData().get_properties()['ClassName']);
    },
    
    set_className: function PS_EventHandler$set_className$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['ClassName'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'ClassName', value));
        }
        return value;
    },
    
    get_description: function PS_EventHandler$get_description$in() {ULSyTi:;
        this.checkUninitializedProperty('Description');
        return (this.get_objectData().get_properties()['Description']);
    },
    
    set_description: function PS_EventHandler$set_description$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['Description'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Description', value));
        }
        return value;
    },
    
    get_endpointUrl: function PS_EventHandler$get_endpointUrl$in() {ULSyTi:;
        this.checkUninitializedProperty('EndpointUrl');
        return (this.get_objectData().get_properties()['EndpointUrl']);
    },
    
    set_endpointUrl: function PS_EventHandler$set_endpointUrl$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['EndpointUrl'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'EndpointUrl', value));
        }
        return value;
    },
    
    get_event: function PS_EventHandler$get_event$in() {ULSyTi:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['Event']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new PS.Event(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Event'));
            this.get_objectData().get_clientObjectProperties()['Event'] = $v_0;
        }
        return $v_0;
    },
    
    get_id: function PS_EventHandler$get_id$in() {ULSyTi:;
        this.checkUninitializedProperty('Id');
        return (this.get_objectData().get_properties()['Id']);
    },
    
    get_name: function PS_EventHandler$get_name$in() {ULSyTi:;
        this.checkUninitializedProperty('Name');
        return (this.get_objectData().get_properties()['Name']);
    },
    
    set_name: function PS_EventHandler$set_name$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['Name'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Name', value));
        }
        return value;
    },
    
    get_order: function PS_EventHandler$get_order$in() {ULSyTi:;
        this.checkUninitializedProperty('Order');
        return (this.get_objectData().get_properties()['Order']);
    },
    
    set_order: function PS_EventHandler$set_order$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['Order'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Order', value));
        }
        return value;
    },
    
    initPropertiesFromJson: function PS_EventHandler$initPropertiesFromJson$in(parentNode) {ULSyTi:;
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.AssemblyName;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['AssemblyName'] = ($v_0);
            delete parentNode.AssemblyName;
        }
        $v_0 = parentNode.ClassName;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ClassName'] = ($v_0);
            delete parentNode.ClassName;
        }
        $v_0 = parentNode.Description;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Description'] = ($v_0);
            delete parentNode.Description;
        }
        $v_0 = parentNode.EndpointUrl;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['EndpointUrl'] = ((SP.DataConvert.fixupType(this.get_context(), $v_0)));
            delete parentNode.EndpointUrl;
        }
        $v_0 = parentNode.Event;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('Event', this.get_event(), $v_0);
            this.get_event().fromJson($v_0);
            delete parentNode.Event;
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
        $v_0 = parentNode.Order;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Order'] = ($v_0);
            delete parentNode.Order;
        }
    },
    
    deleteObject: function PS_EventHandler$deleteObject$in() {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'DeleteObject', null);
        $v_0.addQuery($v_1);
        this.removeFromParentCollection();
    }
}


PS.EventHandlerPropertyNames = function PS_EventHandlerPropertyNames() {
}


PS.EventHandlerObjectPropertyNames = function PS_EventHandlerObjectPropertyNames() {
}


PS.EventHandlerCollection = function PS_EventHandlerCollection(context, objectPath) {ULSyTi:;
    PS.EventHandlerCollection.initializeBase(this, [ context, objectPath ]);
}
PS.EventHandlerCollection.prototype = {
    
    itemAt: function PS_EventHandlerCollection$itemAt$in(index) {ULSyTi:;
        return this.getItemAtIndex(index);
    },
    
    get_item: function PS_EventHandlerCollection$get_item$in(index) {ULSyTi:;
        return this.getItemAtIndex(index);
    },
    
    get_childItemType: function PS_EventHandlerCollection$get_childItemType$in() {ULSyTi:;
        return PS.EventHandler;
    },
    
    getById: function PS_EventHandlerCollection$getById$in(objectId) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = ((this.get_objectData().get_methodReturnObjects()['GetById']));
        if (SP.ScriptUtility.isNullOrUndefined($v_2)) {
            $v_2 = {};
            this.get_objectData().get_methodReturnObjects()['GetById'] = $v_2;
        }
        $v_1 = (($v_2[objectId]));
        if (!$v_0.get_disableReturnValueCache() && !SP.ScriptUtility.isNullOrUndefined($v_1)) {
            return $v_1;
        }
        $v_1 = new PS.EventHandler($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetById', [ objectId ]));
        if (!$v_0.get_disableReturnValueCache()) {
            $v_2[objectId] = $v_1;
        }
        return $v_1;
    },
    
    getByGuid: function PS_EventHandlerCollection$getByGuid$in(uid) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = ((this.get_objectData().get_methodReturnObjects()['GetByGuid']));
        if (SP.ScriptUtility.isNullOrUndefined($v_2)) {
            $v_2 = {};
            this.get_objectData().get_methodReturnObjects()['GetByGuid'] = $v_2;
        }
        $v_1 = (($v_2[uid.toString()]));
        if (!$v_0.get_disableReturnValueCache() && !SP.ScriptUtility.isNullOrUndefined($v_1)) {
            return $v_1;
        }
        $v_1 = new PS.EventHandler($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetByGuid', [ uid ]));
        if (!$v_0.get_disableReturnValueCache()) {
            $v_2[uid.toString()] = $v_1;
        }
        return $v_1;
    },
    
    add: function PS_EventHandlerCollection$add$in(parameters) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        $v_1 = new PS.EventHandler($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'Add', [ parameters ]));
        $v_1.get_path().setPendingReplace();
        var $v_2 = new SP.ObjectIdentityQuery($v_1.get_path());
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        $v_0.addQuery($v_2);
        this.addChild($v_1);
        return $v_1;
    },
    
    remove: function PS_EventHandlerCollection$remove$in(handler) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'Remove', [ handler ]);
        $v_0.addQuery($v_2);
        $v_1 = new SP.BooleanResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        this.removeChild(handler);
        return $v_1;
    },
    
    update: function PS_EventHandlerCollection$update$in() {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'Update', null);
        $v_0.addQuery($v_1);
    }
}


PS.EventHandlerCreationInformation = function PS_EventHandlerCreationInformation() {ULSyTi:;
    PS.EventHandlerCreationInformation.initializeBase(this);
}
PS.EventHandlerCreationInformation.prototype = {
    $S_1: null,
    $X_1: null,
    $2_1: null,
    $e_1: null,
    $g_1: 0,
    $0_1: null,
    $1_1: null,
    $C_1: 0,
    
    get_assemblyName: function PS_EventHandlerCreationInformation$get_assemblyName$in() {ULSyTi:;
        return this.$S_1;
    },
    
    set_assemblyName: function PS_EventHandlerCreationInformation$set_assemblyName$in(value) {ULSyTi:;
        this.$S_1 = value;
        return value;
    },
    
    get_className: function PS_EventHandlerCreationInformation$get_className$in() {ULSyTi:;
        return this.$X_1;
    },
    
    set_className: function PS_EventHandlerCreationInformation$set_className$in(value) {ULSyTi:;
        this.$X_1 = value;
        return value;
    },
    
    get_description: function PS_EventHandlerCreationInformation$get_description$in() {ULSyTi:;
        return this.$2_1;
    },
    
    set_description: function PS_EventHandlerCreationInformation$set_description$in(value) {ULSyTi:;
        this.$2_1 = value;
        return value;
    },
    
    get_endpointUrl: function PS_EventHandlerCreationInformation$get_endpointUrl$in() {ULSyTi:;
        return this.$e_1;
    },
    
    set_endpointUrl: function PS_EventHandlerCreationInformation$set_endpointUrl$in(value) {ULSyTi:;
        this.$e_1 = value;
        return value;
    },
    
    get_eventId: function PS_EventHandlerCreationInformation$get_eventId$in() {ULSyTi:;
        return this.$g_1;
    },
    
    set_eventId: function PS_EventHandlerCreationInformation$set_eventId$in(value) {ULSyTi:;
        this.$g_1 = value;
        return value;
    },
    
    get_id: function PS_EventHandlerCreationInformation$get_id$in() {ULSyTi:;
        return this.$0_1;
    },
    
    set_id: function PS_EventHandlerCreationInformation$set_id$in(value) {ULSyTi:;
        this.$0_1 = value;
        return value;
    },
    
    get_name: function PS_EventHandlerCreationInformation$get_name$in() {ULSyTi:;
        return this.$1_1;
    },
    
    set_name: function PS_EventHandlerCreationInformation$set_name$in(value) {ULSyTi:;
        this.$1_1 = value;
        return value;
    },
    
    get_order: function PS_EventHandlerCreationInformation$get_order$in() {ULSyTi:;
        return this.$C_1;
    },
    
    set_order: function PS_EventHandlerCreationInformation$set_order$in(value) {ULSyTi:;
        this.$C_1 = value;
        return value;
    },
    
    get_typeId: function PS_EventHandlerCreationInformation$get_typeId$in() {ULSyTi:;
        return '{5e2b3370-c655-4803-acd8-b3705905e433}';
    },
    
    writeToXml: function PS_EventHandlerCreationInformation$writeToXml$in(writer, serializationContext) {ULSyTi:;
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = [ 'AssemblyName', 'ClassName', 'Description', 'EndpointUrl', 'EventId', 'Id', 'Name', 'Order' ];
        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    
    initPropertiesFromJson: function PS_EventHandlerCreationInformation$initPropertiesFromJson$in(parentNode) {ULSyTi:;
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.AssemblyName;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$S_1 = ($v_0);
            delete parentNode.AssemblyName;
        }
        $v_0 = parentNode.ClassName;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$X_1 = ($v_0);
            delete parentNode.ClassName;
        }
        $v_0 = parentNode.Description;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$2_1 = ($v_0);
            delete parentNode.Description;
        }
        $v_0 = parentNode.EndpointUrl;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$e_1 = ((SP.DataConvert.fixupType(null, $v_0)));
            delete parentNode.EndpointUrl;
        }
        $v_0 = parentNode.EventId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$g_1 = ($v_0);
            delete parentNode.EventId;
        }
        $v_0 = parentNode.Id;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$0_1 = ($v_0);
            delete parentNode.Id;
        }
        $v_0 = parentNode.Name;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1_1 = ($v_0);
            delete parentNode.Name;
        }
        $v_0 = parentNode.Order;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$C_1 = ($v_0);
            delete parentNode.Order;
        }
    }
}


PS.LookupCost = function PS_LookupCost(context, objectPath) {ULSyTi:;
    PS.LookupCost.initializeBase(this, [ context, objectPath ]);
}
PS.LookupCost.prototype = {
    
    get_value: function PS_LookupCost$get_value$in() {ULSyTi:;
        this.checkUninitializedProperty('Value');
        return (this.get_objectData().get_properties()['Value']);
    },
    
    set_value: function PS_LookupCost$set_value$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['Value'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Value', value));
        }
        return value;
    },
    
    initPropertiesFromJson: function PS_LookupCost$initPropertiesFromJson$in(parentNode) {ULSyTi:;
        PS.LookupEntry.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.Value;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Value'] = ($v_0);
            delete parentNode.Value;
        }
    }
}


PS.LookupCostPropertyNames = function PS_LookupCostPropertyNames() {
}


PS.LookupDate = function PS_LookupDate(context, objectPath) {ULSyTi:;
    PS.LookupDate.initializeBase(this, [ context, objectPath ]);
}
PS.LookupDate.prototype = {
    
    get_value: function PS_LookupDate$get_value$in() {ULSyTi:;
        this.checkUninitializedProperty('Value');
        return (this.get_objectData().get_properties()['Value']);
    },
    
    set_value: function PS_LookupDate$set_value$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['Value'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Value', value));
        }
        return value;
    },
    
    initPropertiesFromJson: function PS_LookupDate$initPropertiesFromJson$in(parentNode) {ULSyTi:;
        PS.LookupEntry.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.Value;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Value'] = ($v_0);
            delete parentNode.Value;
        }
    }
}


PS.LookupDatePropertyNames = function PS_LookupDatePropertyNames() {
}


PS.LookupDuration = function PS_LookupDuration(context, objectPath) {ULSyTi:;
    PS.LookupDuration.initializeBase(this, [ context, objectPath ]);
}
PS.LookupDuration.prototype = {
    
    get_value: function PS_LookupDuration$get_value$in() {ULSyTi:;
        this.checkUninitializedProperty('Value');
        return (this.get_objectData().get_properties()['Value']);
    },
    
    set_value: function PS_LookupDuration$set_value$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['Value'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Value', value));
        }
        return value;
    },
    
    get_valueMilliseconds: function PS_LookupDuration$get_valueMilliseconds$in() {ULSyTi:;
        this.checkUninitializedProperty('ValueMilliseconds');
        return (this.get_objectData().get_properties()['ValueMilliseconds']);
    },
    
    set_valueMilliseconds: function PS_LookupDuration$set_valueMilliseconds$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['ValueMilliseconds'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'ValueMilliseconds', value));
        }
        return value;
    },
    
    initPropertiesFromJson: function PS_LookupDuration$initPropertiesFromJson$in(parentNode) {ULSyTi:;
        PS.LookupEntry.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.Value;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Value'] = ($v_0);
            delete parentNode.Value;
        }
        $v_0 = parentNode.ValueMilliseconds;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ValueMilliseconds'] = ($v_0);
            delete parentNode.ValueMilliseconds;
        }
    }
}


PS.LookupDurationPropertyNames = function PS_LookupDurationPropertyNames() {
}


PS.LookupEntry = function PS_LookupEntry(context, objectPath) {ULSyTi:;
    PS.LookupEntry.initializeBase(this, [ context, objectPath ]);
}
PS.LookupEntry.prototype = {
    
    get_appAlternateId: function PS_LookupEntry$get_appAlternateId$in() {ULSyTi:;
        this.checkUninitializedProperty('AppAlternateId');
        return (this.get_objectData().get_properties()['AppAlternateId']);
    },
    
    get_description: function PS_LookupEntry$get_description$in() {ULSyTi:;
        this.checkUninitializedProperty('Description');
        return (this.get_objectData().get_properties()['Description']);
    },
    
    set_description: function PS_LookupEntry$set_description$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['Description'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Description', value));
        }
        return value;
    },
    
    get_fullValue: function PS_LookupEntry$get_fullValue$in() {ULSyTi:;
        this.checkUninitializedProperty('FullValue');
        return (this.get_objectData().get_properties()['FullValue']);
    },
    
    get_id: function PS_LookupEntry$get_id$in() {ULSyTi:;
        this.checkUninitializedProperty('Id');
        return (this.get_objectData().get_properties()['Id']);
    },
    
    get_internalName: function PS_LookupEntry$get_internalName$in() {ULSyTi:;
        this.checkUninitializedProperty('InternalName');
        return (this.get_objectData().get_properties()['InternalName']);
    },
    
    get_sortIndex: function PS_LookupEntry$get_sortIndex$in() {ULSyTi:;
        this.checkUninitializedProperty('SortIndex');
        return (this.get_objectData().get_properties()['SortIndex']);
    },
    
    set_sortIndex: function PS_LookupEntry$set_sortIndex$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['SortIndex'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'SortIndex', value));
        }
        return value;
    },
    
    initPropertiesFromJson: function PS_LookupEntry$initPropertiesFromJson$in(parentNode) {ULSyTi:;
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.AppAlternateId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['AppAlternateId'] = ($v_0);
            delete parentNode.AppAlternateId;
        }
        $v_0 = parentNode.Description;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Description'] = ($v_0);
            delete parentNode.Description;
        }
        $v_0 = parentNode.FullValue;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['FullValue'] = ($v_0);
            delete parentNode.FullValue;
        }
        $v_0 = parentNode.Id;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Id'] = ($v_0);
            delete parentNode.Id;
        }
        $v_0 = parentNode.InternalName;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['InternalName'] = ($v_0);
            delete parentNode.InternalName;
        }
        $v_0 = parentNode.SortIndex;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['SortIndex'] = ($v_0);
            delete parentNode.SortIndex;
        }
    },
    
    deleteObject: function PS_LookupEntry$deleteObject$in() {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'DeleteObject', null);
        $v_0.addQuery($v_1);
        this.removeFromParentCollection();
    }
}


PS.LookupEntryPropertyNames = function PS_LookupEntryPropertyNames() {
}


PS.LookupEntryCollection = function PS_LookupEntryCollection(context, objectPath) {ULSyTi:;
    PS.LookupEntryCollection.initializeBase(this, [ context, objectPath ]);
}
PS.LookupEntryCollection.prototype = {
    
    itemAt: function PS_LookupEntryCollection$itemAt$in(index) {ULSyTi:;
        return this.getItemAtIndex(index);
    },
    
    get_item: function PS_LookupEntryCollection$get_item$in(index) {ULSyTi:;
        return this.getItemAtIndex(index);
    },
    
    get_childItemType: function PS_LookupEntryCollection$get_childItemType$in() {ULSyTi:;
        return PS.LookupEntry;
    },
    
    getById: function PS_LookupEntryCollection$getById$in(objectId) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = ((this.get_objectData().get_methodReturnObjects()['GetById']));
        if (SP.ScriptUtility.isNullOrUndefined($v_2)) {
            $v_2 = {};
            this.get_objectData().get_methodReturnObjects()['GetById'] = $v_2;
        }
        $v_1 = (($v_2[objectId]));
        if (!$v_0.get_disableReturnValueCache() && !SP.ScriptUtility.isNullOrUndefined($v_1)) {
            return $v_1;
        }
        $v_1 = new PS.LookupEntry($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetById', [ objectId ]));
        if (!$v_0.get_disableReturnValueCache()) {
            $v_2[objectId] = $v_1;
        }
        return $v_1;
    },
    
    getByAppAlternateId: function PS_LookupEntryCollection$getByAppAlternateId$in(objectId) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = ((this.get_objectData().get_methodReturnObjects()['GetByAppAlternateId']));
        if (SP.ScriptUtility.isNullOrUndefined($v_2)) {
            $v_2 = {};
            this.get_objectData().get_methodReturnObjects()['GetByAppAlternateId'] = $v_2;
        }
        $v_1 = (($v_2[objectId]));
        if (!$v_0.get_disableReturnValueCache() && !SP.ScriptUtility.isNullOrUndefined($v_1)) {
            return $v_1;
        }
        $v_1 = new PS.LookupEntry($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetByAppAlternateId', [ objectId ]));
        if (!$v_0.get_disableReturnValueCache()) {
            $v_2[objectId] = $v_1;
        }
        return $v_1;
    },
    
    getByGuid: function PS_LookupEntryCollection$getByGuid$in(uid) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = ((this.get_objectData().get_methodReturnObjects()['GetByGuid']));
        if (SP.ScriptUtility.isNullOrUndefined($v_2)) {
            $v_2 = {};
            this.get_objectData().get_methodReturnObjects()['GetByGuid'] = $v_2;
        }
        $v_1 = (($v_2[uid.toString()]));
        if (!$v_0.get_disableReturnValueCache() && !SP.ScriptUtility.isNullOrUndefined($v_1)) {
            return $v_1;
        }
        $v_1 = new PS.LookupEntry($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetByGuid', [ uid ]));
        if (!$v_0.get_disableReturnValueCache()) {
            $v_2[uid.toString()] = $v_1;
        }
        return $v_1;
    },
    
    add: function PS_LookupEntryCollection$add$in(parameters) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        $v_1 = new PS.LookupEntry($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'Add', [ parameters ]));
        $v_1.get_path().setPendingReplace();
        var $v_2 = new SP.ObjectIdentityQuery($v_1.get_path());
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        $v_0.addQuery($v_2);
        this.addChild($v_1);
        return $v_1;
    },
    
    remove: function PS_LookupEntryCollection$remove$in(entry) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'Remove', [ entry ]);
        $v_0.addQuery($v_2);
        $v_1 = new SP.BooleanResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        this.removeChild(entry);
        return $v_1;
    }
}


PS.LookupEntryCreationInformation = function PS_LookupEntryCreationInformation() {ULSyTi:;
    PS.LookupEntryCreationInformation.initializeBase(this);
}
PS.LookupEntryCreationInformation.prototype = {
    $2_1: null,
    $0_1: null,
    $9_1: null,
    $1U_1: null,
    $1c_1: null,
    
    get_description: function PS_LookupEntryCreationInformation$get_description$in() {ULSyTi:;
        return this.$2_1;
    },
    
    set_description: function PS_LookupEntryCreationInformation$set_description$in(value) {ULSyTi:;
        this.$2_1 = value;
        return value;
    },
    
    get_id: function PS_LookupEntryCreationInformation$get_id$in() {ULSyTi:;
        return this.$0_1;
    },
    
    set_id: function PS_LookupEntryCreationInformation$set_id$in(value) {ULSyTi:;
        this.$0_1 = value;
        return value;
    },
    
    get_parentId: function PS_LookupEntryCreationInformation$get_parentId$in() {ULSyTi:;
        return this.$9_1;
    },
    
    set_parentId: function PS_LookupEntryCreationInformation$set_parentId$in(value) {ULSyTi:;
        this.$9_1 = value;
        return value;
    },
    
    get_sortIndex: function PS_LookupEntryCreationInformation$get_sortIndex$in() {ULSyTi:;
        return this.$1U_1;
    },
    
    set_sortIndex: function PS_LookupEntryCreationInformation$set_sortIndex$in(value) {ULSyTi:;
        this.$1U_1 = value;
        return value;
    },
    
    get_value: function PS_LookupEntryCreationInformation$get_value$in() {ULSyTi:;
        return this.$1c_1;
    },
    
    set_value: function PS_LookupEntryCreationInformation$set_value$in(value) {ULSyTi:;
        this.$1c_1 = value;
        return value;
    },
    
    get_typeId: function PS_LookupEntryCreationInformation$get_typeId$in() {ULSyTi:;
        return '{94b03b0e-e73f-42f2-907e-bfa010beb957}';
    },
    
    writeToXml: function PS_LookupEntryCreationInformation$writeToXml$in(writer, serializationContext) {ULSyTi:;
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = [ 'Description', 'Id', 'ParentId', 'SortIndex', 'Value' ];
        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    
    initPropertiesFromJson: function PS_LookupEntryCreationInformation$initPropertiesFromJson$in(parentNode) {ULSyTi:;
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.Description;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$2_1 = ($v_0);
            delete parentNode.Description;
        }
        $v_0 = parentNode.Id;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$0_1 = ($v_0);
            delete parentNode.Id;
        }
        $v_0 = parentNode.ParentId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$9_1 = ($v_0);
            delete parentNode.ParentId;
        }
        $v_0 = parentNode.SortIndex;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1U_1 = ($v_0);
            delete parentNode.SortIndex;
        }
        $v_0 = parentNode.Value;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1c_1 = ((SP.DataConvert.fixupType(null, $v_0)));
            delete parentNode.Value;
        }
    }
}


PS.LookupEntryValue = function PS_LookupEntryValue() {ULSyTi:;
    PS.LookupEntryValue.initializeBase(this);
}
PS.LookupEntryValue.prototype = {
    $Y_1: null,
    $a_1: null,
    $13_1: null,
    $1b_1: null,
    
    get_dateValue: function PS_LookupEntryValue$get_dateValue$in() {ULSyTi:;
        return this.$Y_1;
    },
    
    set_dateValue: function PS_LookupEntryValue$set_dateValue$in(value) {ULSyTi:;
        this.$Y_1 = value;
        return value;
    },
    
    get_durationValue: function PS_LookupEntryValue$get_durationValue$in() {ULSyTi:;
        return this.$a_1;
    },
    
    set_durationValue: function PS_LookupEntryValue$set_durationValue$in(value) {ULSyTi:;
        this.$a_1 = value;
        return value;
    },
    
    get_numberValue: function PS_LookupEntryValue$get_numberValue$in() {ULSyTi:;
        return this.$13_1;
    },
    
    set_numberValue: function PS_LookupEntryValue$set_numberValue$in(value) {ULSyTi:;
        this.$13_1 = value;
        return value;
    },
    
    get_textValue: function PS_LookupEntryValue$get_textValue$in() {ULSyTi:;
        return this.$1b_1;
    },
    
    set_textValue: function PS_LookupEntryValue$set_textValue$in(value) {ULSyTi:;
        this.$1b_1 = value;
        return value;
    },
    
    get_typeId: function PS_LookupEntryValue$get_typeId$in() {ULSyTi:;
        return '{25dbc933-6b0b-4efe-8e18-a64de9149266}';
    },
    
    writeToXml: function PS_LookupEntryValue$writeToXml$in(writer, serializationContext) {ULSyTi:;
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = [ 'DateValue', 'DurationValue', 'NumberValue', 'TextValue' ];
        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    
    initPropertiesFromJson: function PS_LookupEntryValue$initPropertiesFromJson$in(parentNode) {ULSyTi:;
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.DateValue;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$Y_1 = ($v_0);
            delete parentNode.DateValue;
        }
        $v_0 = parentNode.DurationValue;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$a_1 = ($v_0);
            delete parentNode.DurationValue;
        }
        $v_0 = parentNode.NumberValue;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$13_1 = ($v_0);
            delete parentNode.NumberValue;
        }
        $v_0 = parentNode.TextValue;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1b_1 = ($v_0);
            delete parentNode.TextValue;
        }
    }
}


PS.LookupMask = function PS_LookupMask() {ULSyTi:;
    PS.LookupMask.initializeBase(this);
}
PS.LookupMask.prototype = {
    $w_1: 0,
    $10_1: 0,
    $1J_1: null,
    
    get_length: function PS_LookupMask$get_length$in() {ULSyTi:;
        return this.$w_1;
    },
    
    set_length: function PS_LookupMask$set_length$in(value) {ULSyTi:;
        this.$w_1 = value;
        return value;
    },
    
    get_maskType: function PS_LookupMask$get_maskType$in() {ULSyTi:;
        return this.$10_1;
    },
    
    set_maskType: function PS_LookupMask$set_maskType$in(value) {ULSyTi:;
        this.$10_1 = value;
        return value;
    },
    
    get_separator: function PS_LookupMask$get_separator$in() {ULSyTi:;
        return this.$1J_1;
    },
    
    set_separator: function PS_LookupMask$set_separator$in(value) {ULSyTi:;
        this.$1J_1 = value;
        return value;
    },
    
    get_typeId: function PS_LookupMask$get_typeId$in() {ULSyTi:;
        return '{2aeb3d46-6e78-4035-b908-9e0a55f5c56d}';
    },
    
    writeToXml: function PS_LookupMask$writeToXml$in(writer, serializationContext) {ULSyTi:;
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = [ 'Length', 'MaskType', 'Separator' ];
        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    
    initPropertiesFromJson: function PS_LookupMask$initPropertiesFromJson$in(parentNode) {ULSyTi:;
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.Length;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$w_1 = ($v_0);
            delete parentNode.Length;
        }
        $v_0 = parentNode.MaskType;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$10_1 = ((SP.DataConvert.fixupType(null, $v_0)));
            delete parentNode.MaskType;
        }
        $v_0 = parentNode.Separator;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1J_1 = ($v_0);
            delete parentNode.Separator;
        }
    }
}


PS.LookupNumber = function PS_LookupNumber(context, objectPath) {ULSyTi:;
    PS.LookupNumber.initializeBase(this, [ context, objectPath ]);
}
PS.LookupNumber.prototype = {
    
    get_value: function PS_LookupNumber$get_value$in() {ULSyTi:;
        this.checkUninitializedProperty('Value');
        return (this.get_objectData().get_properties()['Value']);
    },
    
    set_value: function PS_LookupNumber$set_value$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['Value'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Value', value));
        }
        return value;
    },
    
    initPropertiesFromJson: function PS_LookupNumber$initPropertiesFromJson$in(parentNode) {ULSyTi:;
        PS.LookupEntry.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.Value;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Value'] = ($v_0);
            delete parentNode.Value;
        }
    }
}


PS.LookupNumberPropertyNames = function PS_LookupNumberPropertyNames() {
}


PS.LookupTable = function PS_LookupTable(context, objectPath) {ULSyTi:;
    PS.LookupTable.initializeBase(this, [ context, objectPath ]);
}
PS.LookupTable.prototype = {
    
    get_appAlternateId: function PS_LookupTable$get_appAlternateId$in() {ULSyTi:;
        this.checkUninitializedProperty('AppAlternateId');
        return (this.get_objectData().get_properties()['AppAlternateId']);
    },
    
    get_entries: function PS_LookupTable$get_entries$in() {ULSyTi:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['Entries']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new PS.LookupEntryCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Entries'));
            this.get_objectData().get_clientObjectProperties()['Entries'] = $v_0;
        }
        return $v_0;
    },
    
    get_fieldType: function PS_LookupTable$get_fieldType$in() {ULSyTi:;
        this.checkUninitializedProperty('FieldType');
        return (this.get_objectData().get_properties()['FieldType']);
    },
    
    get_id: function PS_LookupTable$get_id$in() {ULSyTi:;
        this.checkUninitializedProperty('Id');
        return (this.get_objectData().get_properties()['Id']);
    },
    
    get_masks: function PS_LookupTable$get_masks$in() {ULSyTi:;
        this.checkUninitializedProperty('Masks');
        return (this.get_objectData().get_properties()['Masks']);
    },
    
    get_name: function PS_LookupTable$get_name$in() {ULSyTi:;
        this.checkUninitializedProperty('Name');
        return (this.get_objectData().get_properties()['Name']);
    },
    
    set_name: function PS_LookupTable$set_name$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['Name'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Name', value));
        }
        return value;
    },
    
    get_sortOrder: function PS_LookupTable$get_sortOrder$in() {ULSyTi:;
        this.checkUninitializedProperty('SortOrder');
        return (this.get_objectData().get_properties()['SortOrder']);
    },
    
    set_sortOrder: function PS_LookupTable$set_sortOrder$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['SortOrder'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'SortOrder', value));
        }
        return value;
    },
    
    initPropertiesFromJson: function PS_LookupTable$initPropertiesFromJson$in(parentNode) {ULSyTi:;
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.AppAlternateId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['AppAlternateId'] = ($v_0);
            delete parentNode.AppAlternateId;
        }
        $v_0 = parentNode.Entries;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('Entries', this.get_entries(), $v_0);
            this.get_entries().fromJson($v_0);
            delete parentNode.Entries;
        }
        $v_0 = parentNode.FieldType;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['FieldType'] = ((SP.DataConvert.fixupType(this.get_context(), $v_0)));
            delete parentNode.FieldType;
        }
        $v_0 = parentNode.Id;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Id'] = ($v_0);
            delete parentNode.Id;
        }
        $v_0 = parentNode.Masks;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Masks'] = (([]));
            SP.DataConvert.populateArray(this.get_context(), (((this.get_objectData().get_properties()['Masks']))), ($v_0));
            delete parentNode.Masks;
        }
        $v_0 = parentNode.Name;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Name'] = ($v_0);
            delete parentNode.Name;
        }
        $v_0 = parentNode.SortOrder;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['SortOrder'] = ((SP.DataConvert.fixupType(this.get_context(), $v_0)));
            delete parentNode.SortOrder;
        }
    },
    
    deleteObject: function PS_LookupTable$deleteObject$in() {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'DeleteObject', null);
        $v_0.addQuery($v_1);
        this.removeFromParentCollection();
    }
}


PS.LookupTablePropertyNames = function PS_LookupTablePropertyNames() {
}


PS.LookupTableObjectPropertyNames = function PS_LookupTableObjectPropertyNames() {
}


PS.LookupTableCollection = function PS_LookupTableCollection(context, objectPath) {ULSyTi:;
    PS.LookupTableCollection.initializeBase(this, [ context, objectPath ]);
}
PS.LookupTableCollection.prototype = {
    
    itemAt: function PS_LookupTableCollection$itemAt$in(index) {ULSyTi:;
        return this.getItemAtIndex(index);
    },
    
    get_item: function PS_LookupTableCollection$get_item$in(index) {ULSyTi:;
        return this.getItemAtIndex(index);
    },
    
    get_childItemType: function PS_LookupTableCollection$get_childItemType$in() {ULSyTi:;
        return PS.LookupTable;
    },
    
    getById: function PS_LookupTableCollection$getById$in(objectId) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = ((this.get_objectData().get_methodReturnObjects()['GetById']));
        if (SP.ScriptUtility.isNullOrUndefined($v_2)) {
            $v_2 = {};
            this.get_objectData().get_methodReturnObjects()['GetById'] = $v_2;
        }
        $v_1 = (($v_2[objectId]));
        if (!$v_0.get_disableReturnValueCache() && !SP.ScriptUtility.isNullOrUndefined($v_1)) {
            return $v_1;
        }
        $v_1 = new PS.LookupTable($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetById', [ objectId ]));
        if (!$v_0.get_disableReturnValueCache()) {
            $v_2[objectId] = $v_1;
        }
        return $v_1;
    },
    
    getByGuid: function PS_LookupTableCollection$getByGuid$in(uid) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = ((this.get_objectData().get_methodReturnObjects()['GetByGuid']));
        if (SP.ScriptUtility.isNullOrUndefined($v_2)) {
            $v_2 = {};
            this.get_objectData().get_methodReturnObjects()['GetByGuid'] = $v_2;
        }
        $v_1 = (($v_2[uid.toString()]));
        if (!$v_0.get_disableReturnValueCache() && !SP.ScriptUtility.isNullOrUndefined($v_1)) {
            return $v_1;
        }
        $v_1 = new PS.LookupTable($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetByGuid', [ uid ]));
        if (!$v_0.get_disableReturnValueCache()) {
            $v_2[uid.toString()] = $v_1;
        }
        return $v_1;
    },
    
    getByAppAlternateId: function PS_LookupTableCollection$getByAppAlternateId$in(objectId) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = ((this.get_objectData().get_methodReturnObjects()['GetByAppAlternateId']));
        if (SP.ScriptUtility.isNullOrUndefined($v_2)) {
            $v_2 = {};
            this.get_objectData().get_methodReturnObjects()['GetByAppAlternateId'] = $v_2;
        }
        $v_1 = (($v_2[objectId]));
        if (!$v_0.get_disableReturnValueCache() && !SP.ScriptUtility.isNullOrUndefined($v_1)) {
            return $v_1;
        }
        $v_1 = new PS.LookupTable($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetByAppAlternateId', [ objectId ]));
        if (!$v_0.get_disableReturnValueCache()) {
            $v_2[objectId] = $v_1;
        }
        return $v_1;
    },
    
    add: function PS_LookupTableCollection$add$in(parameters) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        $v_1 = new PS.LookupTable($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'Add', [ parameters ]));
        $v_1.get_path().setPendingReplace();
        var $v_2 = new SP.ObjectIdentityQuery($v_1.get_path());
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        $v_0.addQuery($v_2);
        this.addChild($v_1);
        return $v_1;
    },
    
    remove: function PS_LookupTableCollection$remove$in(table) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'Remove', [ table ]);
        $v_0.addQuery($v_2);
        $v_1 = new SP.BooleanResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        this.removeChild(table);
        return $v_1;
    },
    
    update: function PS_LookupTableCollection$update$in() {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'Update', null);
        $v_0.addQuery($v_1);
    }
}


PS.LookupTableCreationInformation = function PS_LookupTableCreationInformation() {ULSyTi:;
    PS.LookupTableCreationInformation.initializeBase(this);
}
PS.LookupTableCreationInformation.prototype = {
    $J_1: null,
    $0_1: null,
    $L_1: null,
    $1_1: null,
    $1V_1: 0,
    
    get_entries: function PS_LookupTableCreationInformation$get_entries$in() {ULSyTi:;
        return this.$J_1;
    },
    
    set_entries: function PS_LookupTableCreationInformation$set_entries$in(value) {ULSyTi:;
        this.$J_1 = value;
        return value;
    },
    
    get_id: function PS_LookupTableCreationInformation$get_id$in() {ULSyTi:;
        return this.$0_1;
    },
    
    set_id: function PS_LookupTableCreationInformation$set_id$in(value) {ULSyTi:;
        this.$0_1 = value;
        return value;
    },
    
    get_masks: function PS_LookupTableCreationInformation$get_masks$in() {ULSyTi:;
        return this.$L_1;
    },
    
    set_masks: function PS_LookupTableCreationInformation$set_masks$in(value) {ULSyTi:;
        this.$L_1 = value;
        return value;
    },
    
    get_name: function PS_LookupTableCreationInformation$get_name$in() {ULSyTi:;
        return this.$1_1;
    },
    
    set_name: function PS_LookupTableCreationInformation$set_name$in(value) {ULSyTi:;
        this.$1_1 = value;
        return value;
    },
    
    get_sortOrder: function PS_LookupTableCreationInformation$get_sortOrder$in() {ULSyTi:;
        return this.$1V_1;
    },
    
    set_sortOrder: function PS_LookupTableCreationInformation$set_sortOrder$in(value) {ULSyTi:;
        this.$1V_1 = value;
        return value;
    },
    
    get_typeId: function PS_LookupTableCreationInformation$get_typeId$in() {ULSyTi:;
        return '{65b9287a-3a7e-4477-a18b-f116bf2716f1}';
    },
    
    writeToXml: function PS_LookupTableCreationInformation$writeToXml$in(writer, serializationContext) {ULSyTi:;
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = [ 'Entries', 'Id', 'Masks', 'Name', 'SortOrder' ];
        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    
    initPropertiesFromJson: function PS_LookupTableCreationInformation$initPropertiesFromJson$in(parentNode) {ULSyTi:;
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.Entries;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$J_1 = (([]));
            SP.DataConvert.populateArray(null, ((this.$J_1)), ($v_0));
            delete parentNode.Entries;
        }
        $v_0 = parentNode.Id;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$0_1 = ($v_0);
            delete parentNode.Id;
        }
        $v_0 = parentNode.Masks;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$L_1 = (([]));
            SP.DataConvert.populateArray(null, ((this.$L_1)), ($v_0));
            delete parentNode.Masks;
        }
        $v_0 = parentNode.Name;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1_1 = ($v_0);
            delete parentNode.Name;
        }
        $v_0 = parentNode.SortOrder;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1V_1 = ((SP.DataConvert.fixupType(null, $v_0)));
            delete parentNode.SortOrder;
        }
    }
}


PS.LookupTables = function PS_LookupTables(context, objectPath) {ULSyTi:;
    PS.LookupTables.initializeBase(this, [ context, objectPath ]);
}
PS.LookupTables.invalidNameCharacters = function PS_LookupTables$invalidNameCharacters$st(context) {ULSyTi:;
    if (!context) {
        throw Error.argumentNull('context');
    }
    var $v_0;
    var $v_1 = new SP.ClientActionInvokeStaticMethod(context, '{17d4153d-a3d7-4c5e-9282-23e76d25197d}', 'InvalidNameCharacters', null);
    context.addQuery($v_1);
    $v_0 = (([]));
    context.addQueryIdAndResultObject($v_1.get_id(), $v_0);
    return $v_0;
}


PS.LookupText = function PS_LookupText(context, objectPath) {ULSyTi:;
    PS.LookupText.initializeBase(this, [ context, objectPath ]);
}
PS.LookupText.prototype = {
    
    get_hasChildren: function PS_LookupText$get_hasChildren$in() {ULSyTi:;
        this.checkUninitializedProperty('HasChildren');
        return (this.get_objectData().get_properties()['HasChildren']);
    },
    
    get_mask: function PS_LookupText$get_mask$in() {ULSyTi:;
        this.checkUninitializedProperty('Mask');
        return (this.get_objectData().get_properties()['Mask']);
    },
    
    get_parent: function PS_LookupText$get_parent$in() {ULSyTi:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['Parent']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new PS.LookupText(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Parent'));
            this.get_objectData().get_clientObjectProperties()['Parent'] = $v_0;
        }
        return $v_0;
    },
    
    set_parent: function PS_LookupText$set_parent$in(value) {ULSyTi:;
        this.get_objectData().get_clientObjectProperties()['Parent'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Parent', value));
        }
        return value;
    },
    
    get_value: function PS_LookupText$get_value$in() {ULSyTi:;
        this.checkUninitializedProperty('Value');
        return (this.get_objectData().get_properties()['Value']);
    },
    
    set_value: function PS_LookupText$set_value$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['Value'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Value', value));
        }
        return value;
    },
    
    initPropertiesFromJson: function PS_LookupText$initPropertiesFromJson$in(parentNode) {ULSyTi:;
        PS.LookupEntry.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.HasChildren;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['HasChildren'] = ($v_0);
            delete parentNode.HasChildren;
        }
        $v_0 = parentNode.Mask;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Mask'] = ((SP.DataConvert.fixupType(this.get_context(), $v_0)));
            delete parentNode.Mask;
        }
        $v_0 = parentNode.Parent;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('Parent', this.get_parent(), $v_0);
            this.get_parent().fromJson($v_0);
            delete parentNode.Parent;
        }
        $v_0 = parentNode.Value;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Value'] = ($v_0);
            delete parentNode.Value;
        }
    }
}


PS.LookupTextPropertyNames = function PS_LookupTextPropertyNames() {
}


PS.LookupTextObjectPropertyNames = function PS_LookupTextObjectPropertyNames() {
}


PS.Phase = function PS_Phase(context, objectPath) {ULSyTi:;
    PS.Phase.initializeBase(this, [ context, objectPath ]);
}
PS.Phase.prototype = {
    
    get_description: function PS_Phase$get_description$in() {ULSyTi:;
        this.checkUninitializedProperty('Description');
        return (this.get_objectData().get_properties()['Description']);
    },
    
    set_description: function PS_Phase$set_description$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['Description'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Description', value));
        }
        return value;
    },
    
    get_id: function PS_Phase$get_id$in() {ULSyTi:;
        this.checkUninitializedProperty('Id');
        return (this.get_objectData().get_properties()['Id']);
    },
    
    get_name: function PS_Phase$get_name$in() {ULSyTi:;
        this.checkUninitializedProperty('Name');
        return (this.get_objectData().get_properties()['Name']);
    },
    
    set_name: function PS_Phase$set_name$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['Name'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Name', value));
        }
        return value;
    },
    
    get_stages: function PS_Phase$get_stages$in() {ULSyTi:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['Stages']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new PS.StageCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Stages'));
            this.get_objectData().get_clientObjectProperties()['Stages'] = $v_0;
        }
        return $v_0;
    },
    
    initPropertiesFromJson: function PS_Phase$initPropertiesFromJson$in(parentNode) {ULSyTi:;
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.Description;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Description'] = ($v_0);
            delete parentNode.Description;
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
        $v_0 = parentNode.Stages;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('Stages', this.get_stages(), $v_0);
            this.get_stages().fromJson($v_0);
            delete parentNode.Stages;
        }
    },
    
    deleteObject: function PS_Phase$deleteObject$in() {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'DeleteObject', null);
        $v_0.addQuery($v_1);
        this.removeFromParentCollection();
    }
}


PS.PhasePropertyNames = function PS_PhasePropertyNames() {
}


PS.PhaseObjectPropertyNames = function PS_PhaseObjectPropertyNames() {
}


PS.PhaseCollection = function PS_PhaseCollection(context, objectPath) {ULSyTi:;
    PS.PhaseCollection.initializeBase(this, [ context, objectPath ]);
}
PS.PhaseCollection.prototype = {
    
    itemAt: function PS_PhaseCollection$itemAt$in(index) {ULSyTi:;
        return this.getItemAtIndex(index);
    },
    
    get_item: function PS_PhaseCollection$get_item$in(index) {ULSyTi:;
        return this.getItemAtIndex(index);
    },
    
    get_childItemType: function PS_PhaseCollection$get_childItemType$in() {ULSyTi:;
        return PS.Phase;
    },
    
    getById: function PS_PhaseCollection$getById$in(objectId) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = ((this.get_objectData().get_methodReturnObjects()['GetById']));
        if (SP.ScriptUtility.isNullOrUndefined($v_2)) {
            $v_2 = {};
            this.get_objectData().get_methodReturnObjects()['GetById'] = $v_2;
        }
        $v_1 = (($v_2[objectId]));
        if (!$v_0.get_disableReturnValueCache() && !SP.ScriptUtility.isNullOrUndefined($v_1)) {
            return $v_1;
        }
        $v_1 = new PS.Phase($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetById', [ objectId ]));
        if (!$v_0.get_disableReturnValueCache()) {
            $v_2[objectId] = $v_1;
        }
        return $v_1;
    },
    
    getByGuid: function PS_PhaseCollection$getByGuid$in(uid) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = ((this.get_objectData().get_methodReturnObjects()['GetByGuid']));
        if (SP.ScriptUtility.isNullOrUndefined($v_2)) {
            $v_2 = {};
            this.get_objectData().get_methodReturnObjects()['GetByGuid'] = $v_2;
        }
        $v_1 = (($v_2[uid.toString()]));
        if (!$v_0.get_disableReturnValueCache() && !SP.ScriptUtility.isNullOrUndefined($v_1)) {
            return $v_1;
        }
        $v_1 = new PS.Phase($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetByGuid', [ uid ]));
        if (!$v_0.get_disableReturnValueCache()) {
            $v_2[uid.toString()] = $v_1;
        }
        return $v_1;
    },
    
    update: function PS_PhaseCollection$update$in() {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'Update', null);
        $v_0.addQuery($v_1);
    },
    
    add: function PS_PhaseCollection$add$in(parameters) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        $v_1 = new PS.Phase($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'Add', [ parameters ]));
        $v_1.get_path().setPendingReplace();
        var $v_2 = new SP.ObjectIdentityQuery($v_1.get_path());
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        $v_0.addQuery($v_2);
        this.addChild($v_1);
        return $v_1;
    },
    
    remove: function PS_PhaseCollection$remove$in(phase) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'Remove', [ phase ]);
        $v_0.addQuery($v_2);
        $v_1 = new SP.BooleanResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        this.removeChild(phase);
        return $v_1;
    }
}


PS.PhaseCreationInformation = function PS_PhaseCreationInformation() {ULSyTi:;
    PS.PhaseCreationInformation.initializeBase(this);
}
PS.PhaseCreationInformation.prototype = {
    $2_1: null,
    $0_1: null,
    $1_1: null,
    
    get_description: function PS_PhaseCreationInformation$get_description$in() {ULSyTi:;
        return this.$2_1;
    },
    
    set_description: function PS_PhaseCreationInformation$set_description$in(value) {ULSyTi:;
        this.$2_1 = value;
        return value;
    },
    
    get_id: function PS_PhaseCreationInformation$get_id$in() {ULSyTi:;
        return this.$0_1;
    },
    
    set_id: function PS_PhaseCreationInformation$set_id$in(value) {ULSyTi:;
        this.$0_1 = value;
        return value;
    },
    
    get_name: function PS_PhaseCreationInformation$get_name$in() {ULSyTi:;
        return this.$1_1;
    },
    
    set_name: function PS_PhaseCreationInformation$set_name$in(value) {ULSyTi:;
        this.$1_1 = value;
        return value;
    },
    
    get_typeId: function PS_PhaseCreationInformation$get_typeId$in() {ULSyTi:;
        return '{0f8b15a8-98aa-4751-ade9-9be047406427}';
    },
    
    writeToXml: function PS_PhaseCreationInformation$writeToXml$in(writer, serializationContext) {ULSyTi:;
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = [ 'Description', 'Id', 'Name' ];
        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    
    initPropertiesFromJson: function PS_PhaseCreationInformation$initPropertiesFromJson$in(parentNode) {ULSyTi:;
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.Description;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$2_1 = ($v_0);
            delete parentNode.Description;
        }
        $v_0 = parentNode.Id;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$0_1 = ($v_0);
            delete parentNode.Id;
        }
        $v_0 = parentNode.Name;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1_1 = ($v_0);
            delete parentNode.Name;
        }
    }
}


PS.PlanAssignment = function PS_PlanAssignment(context, objectPath) {ULSyTi:;
    PS.PlanAssignment.initializeBase(this, [ context, objectPath ]);
}
PS.PlanAssignment.prototype = {
    
    get_fieldValues: function PS_PlanAssignment$get_fieldValues$in() {ULSyTi:;
        var $v_0 = this.get_objectData().get_methodReturnObjects()['$m_dict'];
        if (SP.ScriptUtility.isNullOrUndefined($v_0)) {
            $v_0 = {};
            this.get_objectData().get_methodReturnObjects()['$m_dict'] = $v_0;
        }
        return $v_0;
    },
    
    get_item: function PS_PlanAssignment$get_item$in(fieldName) {ULSyTi:;
        return this.$6_1(fieldName);
    },
    
    set_item: function PS_PlanAssignment$set_item$in(fieldName, value) {ULSyTi:;
        this.$G_1(fieldName, value);
        return value;
    },
    
    get_bookingType: function PS_PlanAssignment$get_bookingType$in() {ULSyTi:;
        this.checkUninitializedProperty('BookingType');
        return (this.get_objectData().get_properties()['BookingType']);
    },
    
    set_bookingType: function PS_PlanAssignment$set_bookingType$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['BookingType'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'BookingType', value));
        }
        return value;
    },
    
    get_canLevel: function PS_PlanAssignment$get_canLevel$in() {ULSyTi:;
        this.checkUninitializedProperty('CanLevel');
        return (this.get_objectData().get_properties()['CanLevel']);
    },
    
    get_code: function PS_PlanAssignment$get_code$in() {ULSyTi:;
        this.checkUninitializedProperty('Code');
        return (this.get_objectData().get_properties()['Code']);
    },
    
    get_costCenter: function PS_PlanAssignment$get_costCenter$in() {ULSyTi:;
        this.checkUninitializedProperty('CostCenter');
        return (this.get_objectData().get_properties()['CostCenter']);
    },
    
    get_customFields: function PS_PlanAssignment$get_customFields$in() {ULSyTi:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['CustomFields']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new PS.CustomFieldCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'CustomFields'));
            this.get_objectData().get_clientObjectProperties()['CustomFields'] = $v_0;
        }
        return $v_0;
    },
    
    get_email: function PS_PlanAssignment$get_email$in() {ULSyTi:;
        this.checkUninitializedProperty('Email');
        return (this.get_objectData().get_properties()['Email']);
    },
    
    get_group: function PS_PlanAssignment$get_group$in() {ULSyTi:;
        this.checkUninitializedProperty('Group');
        return (this.get_objectData().get_properties()['Group']);
    },
    
    get_hireDate: function PS_PlanAssignment$get_hireDate$in() {ULSyTi:;
        this.checkUninitializedProperty('HireDate');
        return (this.get_objectData().get_properties()['HireDate']);
    },
    
    get_id: function PS_PlanAssignment$get_id$in() {ULSyTi:;
        this.checkUninitializedProperty('Id');
        return (this.get_objectData().get_properties()['Id']);
    },
    
    get_intervals: function PS_PlanAssignment$get_intervals$in() {ULSyTi:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['Intervals']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new PS.PlanAssignmentIntervalCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Intervals'));
            this.get_objectData().get_clientObjectProperties()['Intervals'] = $v_0;
        }
        return $v_0;
    },
    
    get_isTeam: function PS_PlanAssignment$get_isTeam$in() {ULSyTi:;
        this.checkUninitializedProperty('IsTeam');
        return (this.get_objectData().get_properties()['IsTeam']);
    },
    
    get_name: function PS_PlanAssignment$get_name$in() {ULSyTi:;
        this.checkUninitializedProperty('Name');
        return (this.get_objectData().get_properties()['Name']);
    },
    
    get_phonetics: function PS_PlanAssignment$get_phonetics$in() {ULSyTi:;
        this.checkUninitializedProperty('Phonetics');
        return (this.get_objectData().get_properties()['Phonetics']);
    },
    
    get_resource: function PS_PlanAssignment$get_resource$in() {ULSyTi:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['Resource']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new PS.EnterpriseResource(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Resource'));
            this.get_objectData().get_clientObjectProperties()['Resource'] = $v_0;
        }
        return $v_0;
    },
    
    get_resourceType: function PS_PlanAssignment$get_resourceType$in() {ULSyTi:;
        this.checkUninitializedProperty('ResourceType');
        return (this.get_objectData().get_properties()['ResourceType']);
    },
    
    get_terminationDate: function PS_PlanAssignment$get_terminationDate$in() {ULSyTi:;
        this.checkUninitializedProperty('TerminationDate');
        return (this.get_objectData().get_properties()['TerminationDate']);
    },
    
    initNonPropertiesFromJson: function PS_PlanAssignment$initNonPropertiesFromJson$in(parentNode) {ULSyTi:;
        SP.DataConvert.populateDictionaryFromObject(this.get_fieldValues(), parentNode);
        SP.DataConvert.fixupTypes(this.get_context(), this.get_fieldValues());
    },
    
    initPropertiesFromJson: function PS_PlanAssignment$initPropertiesFromJson$in(parentNode) {ULSyTi:;
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.BookingType;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['BookingType'] = ((SP.DataConvert.fixupType(this.get_context(), $v_0)));
            delete parentNode.BookingType;
        }
        $v_0 = parentNode.CanLevel;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['CanLevel'] = ($v_0);
            delete parentNode.CanLevel;
        }
        $v_0 = parentNode.Code;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Code'] = ($v_0);
            delete parentNode.Code;
        }
        $v_0 = parentNode.CostCenter;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['CostCenter'] = ($v_0);
            delete parentNode.CostCenter;
        }
        $v_0 = parentNode.CustomFields;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('CustomFields', this.get_customFields(), $v_0);
            this.get_customFields().fromJson($v_0);
            delete parentNode.CustomFields;
        }
        $v_0 = parentNode.Email;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Email'] = ($v_0);
            delete parentNode.Email;
        }
        $v_0 = parentNode.Group;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Group'] = ($v_0);
            delete parentNode.Group;
        }
        $v_0 = parentNode.HireDate;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['HireDate'] = ($v_0);
            delete parentNode.HireDate;
        }
        $v_0 = parentNode.Id;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Id'] = ($v_0);
            delete parentNode.Id;
        }
        $v_0 = parentNode.Intervals;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('Intervals', this.get_intervals(), $v_0);
            this.get_intervals().fromJson($v_0);
            delete parentNode.Intervals;
        }
        $v_0 = parentNode.IsTeam;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['IsTeam'] = ($v_0);
            delete parentNode.IsTeam;
        }
        $v_0 = parentNode.Name;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Name'] = ($v_0);
            delete parentNode.Name;
        }
        $v_0 = parentNode.Phonetics;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Phonetics'] = ($v_0);
            delete parentNode.Phonetics;
        }
        $v_0 = parentNode.Resource;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('Resource', this.get_resource(), $v_0);
            this.get_resource().fromJson($v_0);
            delete parentNode.Resource;
        }
        $v_0 = parentNode.ResourceType;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ResourceType'] = ((SP.DataConvert.fixupType(this.get_context(), $v_0)));
            delete parentNode.ResourceType;
        }
        $v_0 = parentNode.TerminationDate;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['TerminationDate'] = ($v_0);
            delete parentNode.TerminationDate;
        }
    },
    
    $6_1: function PS_PlanAssignment$$6_1$in($p0) {
        var $v_0 = this.get_fieldValues()[$p0];
        if (SP.ScriptUtility.isUndefined($v_0)) {
            throw Error.create(SP.ResResources.getString('PropertyHasNotBeenInitialized'));
        }
        return $v_0;
    },
    
    refreshLoad: function PS_PlanAssignment$refreshLoad$in() {ULSyTi:;
        SP.ClientObject.prototype.refreshLoad.call(this);
        this.loadExpandoFields();
    },
    
    loadExpandoFields: function PS_PlanAssignment$loadExpandoFields$in() {ULSyTi:;
        var $$dict_1 = this.get_fieldValues();
        for (var $$key_2 in $$dict_1) {
            var $v_0 = { key: $$key_2, value: $$dict_1[$$key_2] };
            this.retrieve($v_0.key);
        }
    },
    
    $G_1: function PS_PlanAssignment$$G_1$in($p0, $p1) {
        var $v_0 = this.get_context();
        this.get_fieldValues()[$p0] = $p1;
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'SetCustomFieldValue', [ $p0, $p1 ]);
        if ($v_0) {
            $v_0.addQuery($v_1);
        }
    },
    
    deleteObject: function PS_PlanAssignment$deleteObject$in() {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'DeleteObject', null);
        $v_0.addQuery($v_1);
        this.removeFromParentCollection();
    }
}


PS.PlanAssignmentPropertyNames = function PS_PlanAssignmentPropertyNames() {
}


PS.PlanAssignmentObjectPropertyNames = function PS_PlanAssignmentObjectPropertyNames() {
}


PS.PlanAssignmentCollection = function PS_PlanAssignmentCollection(context, objectPath) {ULSyTi:;
    PS.PlanAssignmentCollection.initializeBase(this, [ context, objectPath ]);
}
PS.PlanAssignmentCollection.prototype = {
    
    itemAt: function PS_PlanAssignmentCollection$itemAt$in(index) {ULSyTi:;
        return this.getItemAtIndex(index);
    },
    
    get_item: function PS_PlanAssignmentCollection$get_item$in(index) {ULSyTi:;
        return this.getItemAtIndex(index);
    },
    
    get_childItemType: function PS_PlanAssignmentCollection$get_childItemType$in() {ULSyTi:;
        return PS.PlanAssignment;
    },
    
    getById: function PS_PlanAssignmentCollection$getById$in(objectId) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = ((this.get_objectData().get_methodReturnObjects()['GetById']));
        if (SP.ScriptUtility.isNullOrUndefined($v_2)) {
            $v_2 = {};
            this.get_objectData().get_methodReturnObjects()['GetById'] = $v_2;
        }
        $v_1 = (($v_2[objectId]));
        if (!$v_0.get_disableReturnValueCache() && !SP.ScriptUtility.isNullOrUndefined($v_1)) {
            return $v_1;
        }
        $v_1 = new PS.PlanAssignment($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetById', [ objectId ]));
        if (!$v_0.get_disableReturnValueCache()) {
            $v_2[objectId] = $v_1;
        }
        return $v_1;
    },
    
    getByGuid: function PS_PlanAssignmentCollection$getByGuid$in(uid) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = ((this.get_objectData().get_methodReturnObjects()['GetByGuid']));
        if (SP.ScriptUtility.isNullOrUndefined($v_2)) {
            $v_2 = {};
            this.get_objectData().get_methodReturnObjects()['GetByGuid'] = $v_2;
        }
        $v_1 = (($v_2[uid.toString()]));
        if (!$v_0.get_disableReturnValueCache() && !SP.ScriptUtility.isNullOrUndefined($v_1)) {
            return $v_1;
        }
        $v_1 = new PS.PlanAssignment($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetByGuid', [ uid ]));
        if (!$v_0.get_disableReturnValueCache()) {
            $v_2[uid.toString()] = $v_1;
        }
        return $v_1;
    },
    
    add: function PS_PlanAssignmentCollection$add$in(parameters) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        $v_1 = new PS.PlanAssignment($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'Add', [ parameters ]));
        $v_1.get_path().setPendingReplace();
        var $v_2 = new SP.ObjectIdentityQuery($v_1.get_path());
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        $v_0.addQuery($v_2);
        this.addChild($v_1);
        return $v_1;
    },
    
    remove: function PS_PlanAssignmentCollection$remove$in(assignment) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'Remove', [ assignment ]);
        $v_0.addQuery($v_2);
        $v_1 = new SP.BooleanResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        this.removeChild(assignment);
        return $v_1;
    }
}


PS.PlanAssignmentCreationInformation = function PS_PlanAssignmentCreationInformation() {ULSyTi:;
    PS.PlanAssignmentCreationInformation.initializeBase(this);
}
PS.PlanAssignmentCreationInformation.prototype = {
    $V_1: 0,
    $0_1: null,
    $K_1: null,
    $F_1: null,
    
    get_bookingType: function PS_PlanAssignmentCreationInformation$get_bookingType$in() {ULSyTi:;
        return this.$V_1;
    },
    
    set_bookingType: function PS_PlanAssignmentCreationInformation$set_bookingType$in(value) {ULSyTi:;
        this.$V_1 = value;
        return value;
    },
    
    get_id: function PS_PlanAssignmentCreationInformation$get_id$in() {ULSyTi:;
        return this.$0_1;
    },
    
    set_id: function PS_PlanAssignmentCreationInformation$set_id$in(value) {ULSyTi:;
        this.$0_1 = value;
        return value;
    },
    
    get_intervals: function PS_PlanAssignmentCreationInformation$get_intervals$in() {ULSyTi:;
        return this.$K_1;
    },
    
    set_intervals: function PS_PlanAssignmentCreationInformation$set_intervals$in(value) {ULSyTi:;
        this.$K_1 = value;
        return value;
    },
    
    get_resourceId: function PS_PlanAssignmentCreationInformation$get_resourceId$in() {ULSyTi:;
        return this.$F_1;
    },
    
    set_resourceId: function PS_PlanAssignmentCreationInformation$set_resourceId$in(value) {ULSyTi:;
        this.$F_1 = value;
        return value;
    },
    
    get_typeId: function PS_PlanAssignmentCreationInformation$get_typeId$in() {ULSyTi:;
        return '{defe6814-d00e-4ebf-b8ba-61b42701fba4}';
    },
    
    writeToXml: function PS_PlanAssignmentCreationInformation$writeToXml$in(writer, serializationContext) {ULSyTi:;
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = [ 'BookingType', 'Id', 'Intervals', 'ResourceId' ];
        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    
    initPropertiesFromJson: function PS_PlanAssignmentCreationInformation$initPropertiesFromJson$in(parentNode) {ULSyTi:;
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.BookingType;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$V_1 = ((SP.DataConvert.fixupType(null, $v_0)));
            delete parentNode.BookingType;
        }
        $v_0 = parentNode.Id;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$0_1 = ($v_0);
            delete parentNode.Id;
        }
        $v_0 = parentNode.Intervals;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$K_1 = (([]));
            SP.DataConvert.populateArray(null, ((this.$K_1)), ($v_0));
            delete parentNode.Intervals;
        }
        $v_0 = parentNode.ResourceId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$F_1 = ($v_0);
            delete parentNode.ResourceId;
        }
    }
}


PS.PlanAssignmentInterval = function PS_PlanAssignmentInterval(context, objectPath) {ULSyTi:;
    PS.PlanAssignmentInterval.initializeBase(this, [ context, objectPath ]);
}
PS.PlanAssignmentInterval.prototype = {
    
    get_duration: function PS_PlanAssignmentInterval$get_duration$in() {ULSyTi:;
        this.checkUninitializedProperty('Duration');
        return (this.get_objectData().get_properties()['Duration']);
    },
    
    set_duration: function PS_PlanAssignmentInterval$set_duration$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['Duration'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Duration', value));
        }
        return value;
    },
    
    get_durationMilliseconds: function PS_PlanAssignmentInterval$get_durationMilliseconds$in() {ULSyTi:;
        this.checkUninitializedProperty('DurationMilliseconds');
        return (this.get_objectData().get_properties()['DurationMilliseconds']);
    },
    
    set_durationMilliseconds: function PS_PlanAssignmentInterval$set_durationMilliseconds$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['DurationMilliseconds'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'DurationMilliseconds', value));
        }
        return value;
    },
    
    get_end: function PS_PlanAssignmentInterval$get_end$in() {ULSyTi:;
        this.checkUninitializedProperty('End');
        return (this.get_objectData().get_properties()['End']);
    },
    
    get_name: function PS_PlanAssignmentInterval$get_name$in() {ULSyTi:;
        this.checkUninitializedProperty('Name');
        return (this.get_objectData().get_properties()['Name']);
    },
    
    get_start: function PS_PlanAssignmentInterval$get_start$in() {ULSyTi:;
        this.checkUninitializedProperty('Start');
        return (this.get_objectData().get_properties()['Start']);
    },
    
    initPropertiesFromJson: function PS_PlanAssignmentInterval$initPropertiesFromJson$in(parentNode) {ULSyTi:;
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.Duration;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Duration'] = ($v_0);
            delete parentNode.Duration;
        }
        $v_0 = parentNode.DurationMilliseconds;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['DurationMilliseconds'] = ($v_0);
            delete parentNode.DurationMilliseconds;
        }
        $v_0 = parentNode.End;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['End'] = ($v_0);
            delete parentNode.End;
        }
        $v_0 = parentNode.Name;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Name'] = ($v_0);
            delete parentNode.Name;
        }
        $v_0 = parentNode.Start;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Start'] = ($v_0);
            delete parentNode.Start;
        }
    }
}


PS.PlanAssignmentIntervalPropertyNames = function PS_PlanAssignmentIntervalPropertyNames() {
}


PS.PlanAssignmentIntervalCollection = function PS_PlanAssignmentIntervalCollection(context, objectPath) {ULSyTi:;
    PS.PlanAssignmentIntervalCollection.initializeBase(this, [ context, objectPath ]);
}
PS.PlanAssignmentIntervalCollection.prototype = {
    
    itemAt: function PS_PlanAssignmentIntervalCollection$itemAt$in(index) {ULSyTi:;
        return this.getItemAtIndex(index);
    },
    
    get_item: function PS_PlanAssignmentIntervalCollection$get_item$in(index) {ULSyTi:;
        return this.getItemAtIndex(index);
    },
    
    get_childItemType: function PS_PlanAssignmentIntervalCollection$get_childItemType$in() {ULSyTi:;
        return PS.PlanAssignmentInterval;
    },
    
    getById: function PS_PlanAssignmentIntervalCollection$getById$in(id) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = ((this.get_objectData().get_methodReturnObjects()['GetById']));
        if (SP.ScriptUtility.isNullOrUndefined($v_2)) {
            $v_2 = {};
            this.get_objectData().get_methodReturnObjects()['GetById'] = $v_2;
        }
        $v_1 = (($v_2[id]));
        if (!$v_0.get_disableReturnValueCache() && !SP.ScriptUtility.isNullOrUndefined($v_1)) {
            return $v_1;
        }
        $v_1 = new PS.PlanAssignmentInterval($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetById', [ id ]));
        if (!$v_0.get_disableReturnValueCache()) {
            $v_2[id] = $v_1;
        }
        return $v_1;
    },
    
    getByStart: function PS_PlanAssignmentIntervalCollection$getByStart$in(start) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        $v_1 = new PS.PlanAssignmentInterval($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetByStart', [ start ]));
        return $v_1;
    }
}


PS.PlanAssignmentIntervalCreationInformation = function PS_PlanAssignmentIntervalCreationInformation() {ULSyTi:;
    PS.PlanAssignmentIntervalCreationInformation.initializeBase(this);
}
PS.PlanAssignmentIntervalCreationInformation.prototype = {
    $B_1: null,
    $k_1: null,
    
    get_duration: function PS_PlanAssignmentIntervalCreationInformation$get_duration$in() {ULSyTi:;
        return this.$B_1;
    },
    
    set_duration: function PS_PlanAssignmentIntervalCreationInformation$set_duration$in(value) {ULSyTi:;
        this.$B_1 = value;
        return value;
    },
    
    get_interval: function PS_PlanAssignmentIntervalCreationInformation$get_interval$in() {ULSyTi:;
        return this.$k_1;
    },
    
    set_interval: function PS_PlanAssignmentIntervalCreationInformation$set_interval$in(value) {ULSyTi:;
        this.$k_1 = value;
        return value;
    },
    
    get_typeId: function PS_PlanAssignmentIntervalCreationInformation$get_typeId$in() {ULSyTi:;
        return '{0937cc31-9893-4f00-a3d8-d072304a785a}';
    },
    
    writeToXml: function PS_PlanAssignmentIntervalCreationInformation$writeToXml$in(writer, serializationContext) {ULSyTi:;
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = [ 'Duration', 'Interval' ];
        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    
    initPropertiesFromJson: function PS_PlanAssignmentIntervalCreationInformation$initPropertiesFromJson$in(parentNode) {ULSyTi:;
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.Duration;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$B_1 = ($v_0);
            delete parentNode.Duration;
        }
        $v_0 = parentNode.Interval;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$k_1 = ($v_0);
            delete parentNode.Interval;
        }
    }
}


PS.Project = function PS_Project(context, objectPath) {ULSyTi:;
    PS.Project.initializeBase(this, [ context, objectPath ]);
}
PS.Project.prototype = {
    
    get_approvedEnd: function PS_Project$get_approvedEnd$in() {ULSyTi:;
        this.checkUninitializedProperty('ApprovedEnd');
        return (this.get_objectData().get_properties()['ApprovedEnd']);
    },
    
    get_approvedStart: function PS_Project$get_approvedStart$in() {ULSyTi:;
        this.checkUninitializedProperty('ApprovedStart');
        return (this.get_objectData().get_properties()['ApprovedStart']);
    },
    
    get_calculateActualCosts: function PS_Project$get_calculateActualCosts$in() {ULSyTi:;
        this.checkUninitializedProperty('CalculateActualCosts');
        return (this.get_objectData().get_properties()['CalculateActualCosts']);
    },
    
    get_calculatesActualCosts: function PS_Project$get_calculatesActualCosts$in() {ULSyTi:;
        this.checkUninitializedProperty('CalculatesActualCosts');
        return (this.get_objectData().get_properties()['CalculatesActualCosts']);
    },
    
    get_checkedOutBy: function PS_Project$get_checkedOutBy$in() {ULSyTi:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['CheckedOutBy']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.User(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'CheckedOutBy'));
            this.get_objectData().get_clientObjectProperties()['CheckedOutBy'] = $v_0;
        }
        return $v_0;
    },
    
    get_checkedOutDate: function PS_Project$get_checkedOutDate$in() {ULSyTi:;
        this.checkUninitializedProperty('CheckedOutDate');
        return (this.get_objectData().get_properties()['CheckedOutDate']);
    },
    
    get_checkOutDescription: function PS_Project$get_checkOutDescription$in() {ULSyTi:;
        this.checkUninitializedProperty('CheckOutDescription');
        return (this.get_objectData().get_properties()['CheckOutDescription']);
    },
    
    get_checkOutId: function PS_Project$get_checkOutId$in() {ULSyTi:;
        this.checkUninitializedProperty('CheckOutId');
        return (this.get_objectData().get_properties()['CheckOutId']);
    },
    
    get_createdDate: function PS_Project$get_createdDate$in() {ULSyTi:;
        this.checkUninitializedProperty('CreatedDate');
        return (this.get_objectData().get_properties()['CreatedDate']);
    },
    
    get_criticalSlackLimit: function PS_Project$get_criticalSlackLimit$in() {ULSyTi:;
        this.checkUninitializedProperty('CriticalSlackLimit');
        return (this.get_objectData().get_properties()['CriticalSlackLimit']);
    },
    
    get_customFields: function PS_Project$get_customFields$in() {ULSyTi:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['CustomFields']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new PS.CustomFieldCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'CustomFields'));
            this.get_objectData().get_clientObjectProperties()['CustomFields'] = $v_0;
        }
        return $v_0;
    },
    
    get_defaultFinishTime: function PS_Project$get_defaultFinishTime$in() {ULSyTi:;
        this.checkUninitializedProperty('DefaultFinishTime');
        return (this.get_objectData().get_properties()['DefaultFinishTime']);
    },
    
    get_defaultOvertimeRateUnits: function PS_Project$get_defaultOvertimeRateUnits$in() {ULSyTi:;
        this.checkUninitializedProperty('DefaultOvertimeRateUnits');
        return (this.get_objectData().get_properties()['DefaultOvertimeRateUnits']);
    },
    
    get_defaultStandardRateUnits: function PS_Project$get_defaultStandardRateUnits$in() {ULSyTi:;
        this.checkUninitializedProperty('DefaultStandardRateUnits');
        return (this.get_objectData().get_properties()['DefaultStandardRateUnits']);
    },
    
    get_defaultStartTime: function PS_Project$get_defaultStartTime$in() {ULSyTi:;
        this.checkUninitializedProperty('DefaultStartTime');
        return (this.get_objectData().get_properties()['DefaultStartTime']);
    },
    
    get_enterpriseProjectType: function PS_Project$get_enterpriseProjectType$in() {ULSyTi:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['EnterpriseProjectType']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new PS.EnterpriseProjectType(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'EnterpriseProjectType'));
            this.get_objectData().get_clientObjectProperties()['EnterpriseProjectType'] = $v_0;
        }
        return $v_0;
    },
    
    get_hasMppPendingImport: function PS_Project$get_hasMppPendingImport$in() {ULSyTi:;
        this.checkUninitializedProperty('HasMppPendingImport');
        return (this.get_objectData().get_properties()['HasMppPendingImport']);
    },
    
    get_honorConstraints: function PS_Project$get_honorConstraints$in() {ULSyTi:;
        this.checkUninitializedProperty('HonorConstraints');
        return (this.get_objectData().get_properties()['HonorConstraints']);
    },
    
    get_id: function PS_Project$get_id$in() {ULSyTi:;
        this.checkUninitializedProperty('Id');
        return (this.get_objectData().get_properties()['Id']);
    },
    
    get_isCheckedOut: function PS_Project$get_isCheckedOut$in() {ULSyTi:;
        this.checkUninitializedProperty('IsCheckedOut');
        return (this.get_objectData().get_properties()['IsCheckedOut']);
    },
    
    get_lastPublishedDate: function PS_Project$get_lastPublishedDate$in() {ULSyTi:;
        this.checkUninitializedProperty('LastPublishedDate');
        return (this.get_objectData().get_properties()['LastPublishedDate']);
    },
    
    get_lastSavedDate: function PS_Project$get_lastSavedDate$in() {ULSyTi:;
        this.checkUninitializedProperty('LastSavedDate');
        return (this.get_objectData().get_properties()['LastSavedDate']);
    },
    
    get_moveActualIfLater: function PS_Project$get_moveActualIfLater$in() {ULSyTi:;
        this.checkUninitializedProperty('MoveActualIfLater');
        return (this.get_objectData().get_properties()['MoveActualIfLater']);
    },
    
    get_moveActualToStatus: function PS_Project$get_moveActualToStatus$in() {ULSyTi:;
        this.checkUninitializedProperty('MoveActualToStatus');
        return (this.get_objectData().get_properties()['MoveActualToStatus']);
    },
    
    get_moveRemainingIfEarlier: function PS_Project$get_moveRemainingIfEarlier$in() {ULSyTi:;
        this.checkUninitializedProperty('MoveRemainingIfEarlier');
        return (this.get_objectData().get_properties()['MoveRemainingIfEarlier']);
    },
    
    get_moveRemainingToStatus: function PS_Project$get_moveRemainingToStatus$in() {ULSyTi:;
        this.checkUninitializedProperty('MoveRemainingToStatus');
        return (this.get_objectData().get_properties()['MoveRemainingToStatus']);
    },
    
    get_multipleCriticalPaths: function PS_Project$get_multipleCriticalPaths$in() {ULSyTi:;
        this.checkUninitializedProperty('MultipleCriticalPaths');
        return (this.get_objectData().get_properties()['MultipleCriticalPaths']);
    },
    
    get_optimizerDecision: function PS_Project$get_optimizerDecision$in() {ULSyTi:;
        this.checkUninitializedProperty('OptimizerDecision');
        return (this.get_objectData().get_properties()['OptimizerDecision']);
    },
    
    get_percentComplete: function PS_Project$get_percentComplete$in() {ULSyTi:;
        this.checkUninitializedProperty('PercentComplete');
        return (this.get_objectData().get_properties()['PercentComplete']);
    },
    
    get_phase: function PS_Project$get_phase$in() {ULSyTi:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['Phase']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new PS.Phase(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Phase'));
            this.get_objectData().get_clientObjectProperties()['Phase'] = $v_0;
        }
        return $v_0;
    },
    
    get_plannerDecision: function PS_Project$get_plannerDecision$in() {ULSyTi:;
        this.checkUninitializedProperty('PlannerDecision');
        return (this.get_objectData().get_properties()['PlannerDecision']);
    },
    
    get_projectSiteUrl: function PS_Project$get_projectSiteUrl$in() {ULSyTi:;
        this.checkUninitializedProperty('ProjectSiteUrl');
        return (this.get_objectData().get_properties()['ProjectSiteUrl']);
    },
    
    get_projectSummaryTask: function PS_Project$get_projectSummaryTask$in() {ULSyTi:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['ProjectSummaryTask']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new PS.ProjectSummaryTask(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'ProjectSummaryTask'));
            this.get_objectData().get_clientObjectProperties()['ProjectSummaryTask'] = $v_0;
        }
        return $v_0;
    },
    
    get_projectType: function PS_Project$get_projectType$in() {ULSyTi:;
        this.checkUninitializedProperty('ProjectType');
        return (this.get_objectData().get_properties()['ProjectType']);
    },
    
    get_queueJobs: function PS_Project$get_queueJobs$in() {ULSyTi:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['QueueJobs']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new PS.QueueJobCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'QueueJobs'));
            this.get_objectData().get_clientObjectProperties()['QueueJobs'] = $v_0;
        }
        return $v_0;
    },
    
    get_scheduledFromStart: function PS_Project$get_scheduledFromStart$in() {ULSyTi:;
        this.checkUninitializedProperty('ScheduledFromStart');
        return (this.get_objectData().get_properties()['ScheduledFromStart']);
    },
    
    get_splitInProgress: function PS_Project$get_splitInProgress$in() {ULSyTi:;
        this.checkUninitializedProperty('SplitInProgress');
        return (this.get_objectData().get_properties()['SplitInProgress']);
    },
    
    get_spreadActualCostsToStatus: function PS_Project$get_spreadActualCostsToStatus$in() {ULSyTi:;
        this.checkUninitializedProperty('SpreadActualCostsToStatus');
        return (this.get_objectData().get_properties()['SpreadActualCostsToStatus']);
    },
    
    get_spreadPercentCompleteToStatus: function PS_Project$get_spreadPercentCompleteToStatus$in() {ULSyTi:;
        this.checkUninitializedProperty('SpreadPercentCompleteToStatus');
        return (this.get_objectData().get_properties()['SpreadPercentCompleteToStatus']);
    },
    
    get_stage: function PS_Project$get_stage$in() {ULSyTi:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['Stage']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new PS.Stage(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Stage'));
            this.get_objectData().get_clientObjectProperties()['Stage'] = $v_0;
        }
        return $v_0;
    },
    
    get_summaryTaskId: function PS_Project$get_summaryTaskId$in() {ULSyTi:;
        this.checkUninitializedProperty('SummaryTaskId');
        return (this.get_objectData().get_properties()['SummaryTaskId']);
    },
    
    get_taskListId: function PS_Project$get_taskListId$in() {ULSyTi:;
        this.checkUninitializedProperty('TaskListId');
        return (this.get_objectData().get_properties()['TaskListId']);
    },
    
    initPropertiesFromJson: function PS_Project$initPropertiesFromJson$in(parentNode) {ULSyTi:;
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.ApprovedEnd;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ApprovedEnd'] = ($v_0);
            delete parentNode.ApprovedEnd;
        }
        $v_0 = parentNode.ApprovedStart;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ApprovedStart'] = ($v_0);
            delete parentNode.ApprovedStart;
        }
        $v_0 = parentNode.CalculateActualCosts;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['CalculateActualCosts'] = ($v_0);
            delete parentNode.CalculateActualCosts;
        }
        $v_0 = parentNode.CalculatesActualCosts;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['CalculatesActualCosts'] = ($v_0);
            delete parentNode.CalculatesActualCosts;
        }
        $v_0 = parentNode.CheckedOutBy;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('CheckedOutBy', this.get_checkedOutBy(), $v_0);
            this.get_checkedOutBy().fromJson($v_0);
            delete parentNode.CheckedOutBy;
        }
        $v_0 = parentNode.CheckedOutDate;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['CheckedOutDate'] = ($v_0);
            delete parentNode.CheckedOutDate;
        }
        $v_0 = parentNode.CheckOutDescription;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['CheckOutDescription'] = ($v_0);
            delete parentNode.CheckOutDescription;
        }
        $v_0 = parentNode.CheckOutId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['CheckOutId'] = ($v_0);
            delete parentNode.CheckOutId;
        }
        $v_0 = parentNode.CreatedDate;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['CreatedDate'] = ($v_0);
            delete parentNode.CreatedDate;
        }
        $v_0 = parentNode.CriticalSlackLimit;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['CriticalSlackLimit'] = ($v_0);
            delete parentNode.CriticalSlackLimit;
        }
        $v_0 = parentNode.CustomFields;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('CustomFields', this.get_customFields(), $v_0);
            this.get_customFields().fromJson($v_0);
            delete parentNode.CustomFields;
        }
        $v_0 = parentNode.DefaultFinishTime;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['DefaultFinishTime'] = ($v_0);
            delete parentNode.DefaultFinishTime;
        }
        $v_0 = parentNode.DefaultOvertimeRateUnits;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['DefaultOvertimeRateUnits'] = ((SP.DataConvert.fixupType(this.get_context(), $v_0)));
            delete parentNode.DefaultOvertimeRateUnits;
        }
        $v_0 = parentNode.DefaultStandardRateUnits;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['DefaultStandardRateUnits'] = ((SP.DataConvert.fixupType(this.get_context(), $v_0)));
            delete parentNode.DefaultStandardRateUnits;
        }
        $v_0 = parentNode.DefaultStartTime;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['DefaultStartTime'] = ($v_0);
            delete parentNode.DefaultStartTime;
        }
        $v_0 = parentNode.EnterpriseProjectType;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('EnterpriseProjectType', this.get_enterpriseProjectType(), $v_0);
            this.get_enterpriseProjectType().fromJson($v_0);
            delete parentNode.EnterpriseProjectType;
        }
        $v_0 = parentNode.HasMppPendingImport;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['HasMppPendingImport'] = ($v_0);
            delete parentNode.HasMppPendingImport;
        }
        $v_0 = parentNode.HonorConstraints;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['HonorConstraints'] = ($v_0);
            delete parentNode.HonorConstraints;
        }
        $v_0 = parentNode.Id;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Id'] = ($v_0);
            delete parentNode.Id;
        }
        $v_0 = parentNode.IsCheckedOut;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['IsCheckedOut'] = ($v_0);
            delete parentNode.IsCheckedOut;
        }
        $v_0 = parentNode.LastPublishedDate;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['LastPublishedDate'] = ($v_0);
            delete parentNode.LastPublishedDate;
        }
        $v_0 = parentNode.LastSavedDate;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['LastSavedDate'] = ($v_0);
            delete parentNode.LastSavedDate;
        }
        $v_0 = parentNode.MoveActualIfLater;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['MoveActualIfLater'] = ($v_0);
            delete parentNode.MoveActualIfLater;
        }
        $v_0 = parentNode.MoveActualToStatus;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['MoveActualToStatus'] = ($v_0);
            delete parentNode.MoveActualToStatus;
        }
        $v_0 = parentNode.MoveRemainingIfEarlier;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['MoveRemainingIfEarlier'] = ($v_0);
            delete parentNode.MoveRemainingIfEarlier;
        }
        $v_0 = parentNode.MoveRemainingToStatus;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['MoveRemainingToStatus'] = ($v_0);
            delete parentNode.MoveRemainingToStatus;
        }
        $v_0 = parentNode.MultipleCriticalPaths;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['MultipleCriticalPaths'] = ($v_0);
            delete parentNode.MultipleCriticalPaths;
        }
        $v_0 = parentNode.OptimizerDecision;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['OptimizerDecision'] = ((SP.DataConvert.fixupType(this.get_context(), $v_0)));
            delete parentNode.OptimizerDecision;
        }
        $v_0 = parentNode.PercentComplete;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['PercentComplete'] = ($v_0);
            delete parentNode.PercentComplete;
        }
        $v_0 = parentNode.Phase;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('Phase', this.get_phase(), $v_0);
            this.get_phase().fromJson($v_0);
            delete parentNode.Phase;
        }
        $v_0 = parentNode.PlannerDecision;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['PlannerDecision'] = ((SP.DataConvert.fixupType(this.get_context(), $v_0)));
            delete parentNode.PlannerDecision;
        }
        $v_0 = parentNode.ProjectSiteUrl;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ProjectSiteUrl'] = ($v_0);
            delete parentNode.ProjectSiteUrl;
        }
        $v_0 = parentNode.ProjectSummaryTask;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('ProjectSummaryTask', this.get_projectSummaryTask(), $v_0);
            this.get_projectSummaryTask().fromJson($v_0);
            delete parentNode.ProjectSummaryTask;
        }
        $v_0 = parentNode.ProjectType;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ProjectType'] = ((SP.DataConvert.fixupType(this.get_context(), $v_0)));
            delete parentNode.ProjectType;
        }
        $v_0 = parentNode.QueueJobs;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('QueueJobs', this.get_queueJobs(), $v_0);
            this.get_queueJobs().fromJson($v_0);
            delete parentNode.QueueJobs;
        }
        $v_0 = parentNode.ScheduledFromStart;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ScheduledFromStart'] = ($v_0);
            delete parentNode.ScheduledFromStart;
        }
        $v_0 = parentNode.SplitInProgress;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['SplitInProgress'] = ($v_0);
            delete parentNode.SplitInProgress;
        }
        $v_0 = parentNode.SpreadActualCostsToStatus;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['SpreadActualCostsToStatus'] = ($v_0);
            delete parentNode.SpreadActualCostsToStatus;
        }
        $v_0 = parentNode.SpreadPercentCompleteToStatus;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['SpreadPercentCompleteToStatus'] = ($v_0);
            delete parentNode.SpreadPercentCompleteToStatus;
        }
        $v_0 = parentNode.Stage;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('Stage', this.get_stage(), $v_0);
            this.get_stage().fromJson($v_0);
            delete parentNode.Stage;
        }
        $v_0 = parentNode.SummaryTaskId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['SummaryTaskId'] = ($v_0);
            delete parentNode.SummaryTaskId;
        }
        $v_0 = parentNode.TaskListId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['TaskListId'] = ($v_0);
            delete parentNode.TaskListId;
        }
    },
    
    setCustomFieldValue: function PS_Project$setCustomFieldValue$in(fieldName, value) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'SetCustomFieldValue', [ fieldName, value ]);
        $v_0.addQuery($v_1);
    },
    
    updateIdeaListItemStatus: function PS_Project$updateIdeaListItemStatus$in(status) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'UpdateIdeaListItemStatus', [ status ]);
        $v_0.addQuery($v_1);
    },
    
    updateProjectStageStatus: function PS_Project$updateProjectStageStatus$in(stage, statusInformation, stageStatusValue, append) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'UpdateProjectStageStatus', [ stage, statusInformation, stageStatusValue, append ]);
        $v_0.addQuery($v_1);
    },
    
    enterProjectStage: function PS_Project$enterProjectStage$in(stage) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'EnterProjectStage', [ stage ]);
        $v_0.addQuery($v_1);
    },
    
    leaveProjectStage: function PS_Project$leaveProjectStage$in() {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'LeaveProjectStage', null);
        $v_0.addQuery($v_1);
    },
    
    readyToLeaveProjectStage: function PS_Project$readyToLeaveProjectStage$in() {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'ReadyToLeaveProjectStage', null);
        $v_0.addQuery($v_2);
        $v_1 = new SP.IntResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    },
    
    getResourcePlan: function PS_Project$getResourcePlan$in(start, end, timeScale) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        $v_1 = new PS.ResourcePlan($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetResourcePlan', [ start, end, timeScale ]));
        return $v_1;
    }
}


PS.ProjectPropertyNames = function PS_ProjectPropertyNames() {
}


PS.ProjectObjectPropertyNames = function PS_ProjectObjectPropertyNames() {
}


PS.ProjectCollection = function PS_ProjectCollection(context, objectPath) {ULSyTi:;
    PS.ProjectCollection.initializeBase(this, [ context, objectPath ]);
}
PS.ProjectCollection.prototype = {
    
    itemAt: function PS_ProjectCollection$itemAt$in(index) {ULSyTi:;
        return this.getItemAtIndex(index);
    },
    
    get_item: function PS_ProjectCollection$get_item$in(index) {ULSyTi:;
        return this.getItemAtIndex(index);
    },
    
    get_childItemType: function PS_ProjectCollection$get_childItemType$in() {ULSyTi:;
        return PS.PublishedProject;
    },
    
    getById: function PS_ProjectCollection$getById$in(objectId) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = ((this.get_objectData().get_methodReturnObjects()['GetById']));
        if (SP.ScriptUtility.isNullOrUndefined($v_2)) {
            $v_2 = {};
            this.get_objectData().get_methodReturnObjects()['GetById'] = $v_2;
        }
        $v_1 = (($v_2[objectId]));
        if (!$v_0.get_disableReturnValueCache() && !SP.ScriptUtility.isNullOrUndefined($v_1)) {
            return $v_1;
        }
        $v_1 = new PS.PublishedProject($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetById', [ objectId ]));
        if (!$v_0.get_disableReturnValueCache()) {
            $v_2[objectId] = $v_1;
        }
        return $v_1;
    },
    
    getByGuid: function PS_ProjectCollection$getByGuid$in(uid) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = ((this.get_objectData().get_methodReturnObjects()['GetByGuid']));
        if (SP.ScriptUtility.isNullOrUndefined($v_2)) {
            $v_2 = {};
            this.get_objectData().get_methodReturnObjects()['GetByGuid'] = $v_2;
        }
        $v_1 = (($v_2[uid.toString()]));
        if (!$v_0.get_disableReturnValueCache() && !SP.ScriptUtility.isNullOrUndefined($v_1)) {
            return $v_1;
        }
        $v_1 = new PS.PublishedProject($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetByGuid', [ uid ]));
        if (!$v_0.get_disableReturnValueCache()) {
            $v_2[uid.toString()] = $v_1;
        }
        return $v_1;
    },
    
    add: function PS_ProjectCollection$add$in(parameters) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        $v_1 = new PS.PublishedProject($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'Add', [ parameters ]));
        $v_1.get_path().setPendingReplace();
        var $v_2 = new SP.ObjectIdentityQuery($v_1.get_path());
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        $v_0.addQuery($v_2);
        this.addChild($v_1);
        return $v_1;
    },
    
    remove: function PS_ProjectCollection$remove$in(project) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'Remove', [ project ]);
        $v_0.addQuery($v_2);
        $v_1 = new SP.BooleanResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        this.removeChild(project);
        return $v_1;
    },
    
    validate: function PS_ProjectCollection$validate$in() {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'Validate', null);
        $v_0.addQuery($v_1);
    },
    
    update: function PS_ProjectCollection$update$in() {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        $v_1 = new PS.QueueJob($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'Update', null));
        return $v_1;
    }
}


PS.ProjectCreationInformation = function PS_ProjectCreationInformation() {ULSyTi:;
    PS.ProjectCreationInformation.initializeBase(this);
}
PS.ProjectCreationInformation.prototype = {
    $2_1: null,
    $f_1: null,
    $0_1: null,
    $1_1: null,
    $3_1: null,
    $1m_1: null,
    
    get_description: function PS_ProjectCreationInformation$get_description$in() {ULSyTi:;
        return this.$2_1;
    },
    
    set_description: function PS_ProjectCreationInformation$set_description$in(value) {ULSyTi:;
        this.$2_1 = value;
        return value;
    },
    
    get_enterpriseProjectTypeId: function PS_ProjectCreationInformation$get_enterpriseProjectTypeId$in() {ULSyTi:;
        return this.$f_1;
    },
    
    set_enterpriseProjectTypeId: function PS_ProjectCreationInformation$set_enterpriseProjectTypeId$in(value) {ULSyTi:;
        this.$f_1 = value;
        return value;
    },
    
    get_id: function PS_ProjectCreationInformation$get_id$in() {ULSyTi:;
        return this.$0_1;
    },
    
    set_id: function PS_ProjectCreationInformation$set_id$in(value) {ULSyTi:;
        this.$0_1 = value;
        return value;
    },
    
    get_name: function PS_ProjectCreationInformation$get_name$in() {ULSyTi:;
        return this.$1_1;
    },
    
    set_name: function PS_ProjectCreationInformation$set_name$in(value) {ULSyTi:;
        this.$1_1 = value;
        return value;
    },
    
    get_start: function PS_ProjectCreationInformation$get_start$in() {ULSyTi:;
        return this.$3_1;
    },
    
    set_start: function PS_ProjectCreationInformation$set_start$in(value) {ULSyTi:;
        this.$3_1 = value;
        return value;
    },
    
    get_taskList: function PS_ProjectCreationInformation$get_taskList$in() {ULSyTi:;
        return this.$1m_1;
    },
    
    set_taskList: function PS_ProjectCreationInformation$set_taskList$in(value) {ULSyTi:;
        this.$1m_1 = value;
        return value;
    },
    
    get_typeId: function PS_ProjectCreationInformation$get_typeId$in() {ULSyTi:;
        return '{1e88d96b-47f5-44ca-b0d2-7e8309cd03a8}';
    },
    
    writeToXml: function PS_ProjectCreationInformation$writeToXml$in(writer, serializationContext) {ULSyTi:;
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = [ 'Description', 'EnterpriseProjectTypeId', 'Id', 'Name', 'Start', 'TaskList' ];
        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    
    initPropertiesFromJson: function PS_ProjectCreationInformation$initPropertiesFromJson$in(parentNode) {ULSyTi:;
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.Description;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$2_1 = ($v_0);
            delete parentNode.Description;
        }
        $v_0 = parentNode.EnterpriseProjectTypeId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$f_1 = ($v_0);
            delete parentNode.EnterpriseProjectTypeId;
        }
        $v_0 = parentNode.Id;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$0_1 = ($v_0);
            delete parentNode.Id;
        }
        $v_0 = parentNode.Name;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1_1 = ($v_0);
            delete parentNode.Name;
        }
        $v_0 = parentNode.Start;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$3_1 = ($v_0);
            delete parentNode.Start;
        }
        $v_0 = parentNode.TaskList;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            delete parentNode.TaskList;
        }
    }
}


PS.ProjectDetailPage = function PS_ProjectDetailPage(context, objectPath) {ULSyTi:;
    PS.ProjectDetailPage.initializeBase(this, [ context, objectPath ]);
}
PS.ProjectDetailPage.prototype = {
    
    get_id: function PS_ProjectDetailPage$get_id$in() {ULSyTi:;
        this.checkUninitializedProperty('Id');
        return (this.get_objectData().get_properties()['Id']);
    },
    
    get_item: function PS_ProjectDetailPage$get_item$in() {ULSyTi:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['Item']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.ListItem(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Item'));
            this.get_objectData().get_clientObjectProperties()['Item'] = $v_0;
        }
        return $v_0;
    },
    
    get_name: function PS_ProjectDetailPage$get_name$in() {ULSyTi:;
        this.checkUninitializedProperty('Name');
        return (this.get_objectData().get_properties()['Name']);
    },
    
    get_pageType: function PS_ProjectDetailPage$get_pageType$in() {ULSyTi:;
        this.checkUninitializedProperty('PageType');
        return (this.get_objectData().get_properties()['PageType']);
    },
    
    initPropertiesFromJson: function PS_ProjectDetailPage$initPropertiesFromJson$in(parentNode) {ULSyTi:;
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.Id;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Id'] = ($v_0);
            delete parentNode.Id;
        }
        $v_0 = parentNode.Item;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('Item', this.get_item(), $v_0);
            this.get_item().fromJson($v_0);
            delete parentNode.Item;
        }
        $v_0 = parentNode.Name;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Name'] = ($v_0);
            delete parentNode.Name;
        }
        $v_0 = parentNode.PageType;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['PageType'] = ((SP.DataConvert.fixupType(this.get_context(), $v_0)));
            delete parentNode.PageType;
        }
    }
}


PS.ProjectDetailPagePropertyNames = function PS_ProjectDetailPagePropertyNames() {
}


PS.ProjectDetailPageObjectPropertyNames = function PS_ProjectDetailPageObjectPropertyNames() {
}


PS.ProjectDetailPageCollection = function PS_ProjectDetailPageCollection(context, objectPath) {ULSyTi:;
    PS.ProjectDetailPageCollection.initializeBase(this, [ context, objectPath ]);
}
PS.ProjectDetailPageCollection.prototype = {
    
    itemAt: function PS_ProjectDetailPageCollection$itemAt$in(index) {ULSyTi:;
        return this.getItemAtIndex(index);
    },
    
    get_item: function PS_ProjectDetailPageCollection$get_item$in(index) {ULSyTi:;
        return this.getItemAtIndex(index);
    },
    
    get_childItemType: function PS_ProjectDetailPageCollection$get_childItemType$in() {ULSyTi:;
        return PS.ProjectDetailPage;
    },
    
    get_list: function PS_ProjectDetailPageCollection$get_list$in() {ULSyTi:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['List']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.List(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'List'));
            this.get_objectData().get_clientObjectProperties()['List'] = $v_0;
        }
        return $v_0;
    },
    
    initPropertiesFromJson: function PS_ProjectDetailPageCollection$initPropertiesFromJson$in(parentNode) {ULSyTi:;
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.List;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('List', this.get_list(), $v_0);
            this.get_list().fromJson($v_0);
            delete parentNode.List;
        }
    },
    
    getById: function PS_ProjectDetailPageCollection$getById$in(objectId) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = ((this.get_objectData().get_methodReturnObjects()['GetById']));
        if (SP.ScriptUtility.isNullOrUndefined($v_2)) {
            $v_2 = {};
            this.get_objectData().get_methodReturnObjects()['GetById'] = $v_2;
        }
        $v_1 = (($v_2[objectId]));
        if (!$v_0.get_disableReturnValueCache() && !SP.ScriptUtility.isNullOrUndefined($v_1)) {
            return $v_1;
        }
        $v_1 = new PS.ProjectDetailPage($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetById', [ objectId ]));
        if (!$v_0.get_disableReturnValueCache()) {
            $v_2[objectId] = $v_1;
        }
        return $v_1;
    },
    
    getByGuid: function PS_ProjectDetailPageCollection$getByGuid$in(uid) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = ((this.get_objectData().get_methodReturnObjects()['GetByGuid']));
        if (SP.ScriptUtility.isNullOrUndefined($v_2)) {
            $v_2 = {};
            this.get_objectData().get_methodReturnObjects()['GetByGuid'] = $v_2;
        }
        $v_1 = (($v_2[uid.toString()]));
        if (!$v_0.get_disableReturnValueCache() && !SP.ScriptUtility.isNullOrUndefined($v_1)) {
            return $v_1;
        }
        $v_1 = new PS.ProjectDetailPage($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetByGuid', [ uid ]));
        if (!$v_0.get_disableReturnValueCache()) {
            $v_2[uid.toString()] = $v_1;
        }
        return $v_1;
    }
}


PS.ProjectDetailPageCollectionObjectPropertyNames = function PS_ProjectDetailPageCollectionObjectPropertyNames() {
}


PS.ProjectDetailPageCreationInformation = function PS_ProjectDetailPageCreationInformation() {ULSyTi:;
    PS.ProjectDetailPageCreationInformation.initializeBase(this);
}
PS.ProjectDetailPageCreationInformation.prototype = {
    $0_1: null,
    $m_1: false,
    $D_1: 0,
    
    get_id: function PS_ProjectDetailPageCreationInformation$get_id$in() {ULSyTi:;
        return this.$0_1;
    },
    
    set_id: function PS_ProjectDetailPageCreationInformation$set_id$in(value) {ULSyTi:;
        this.$0_1 = value;
        return value;
    },
    
    get_isCreate: function PS_ProjectDetailPageCreationInformation$get_isCreate$in() {ULSyTi:;
        return this.$m_1;
    },
    
    set_isCreate: function PS_ProjectDetailPageCreationInformation$set_isCreate$in(value) {ULSyTi:;
        this.$m_1 = value;
        return value;
    },
    
    get_position: function PS_ProjectDetailPageCreationInformation$get_position$in() {ULSyTi:;
        return this.$D_1;
    },
    
    set_position: function PS_ProjectDetailPageCreationInformation$set_position$in(value) {ULSyTi:;
        this.$D_1 = value;
        return value;
    },
    
    get_typeId: function PS_ProjectDetailPageCreationInformation$get_typeId$in() {ULSyTi:;
        return '{6abc7861-5ad4-4354-94fb-3dda8cd47ae4}';
    },
    
    writeToXml: function PS_ProjectDetailPageCreationInformation$writeToXml$in(writer, serializationContext) {ULSyTi:;
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = [ 'Id', 'IsCreate', 'Position' ];
        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    
    initPropertiesFromJson: function PS_ProjectDetailPageCreationInformation$initPropertiesFromJson$in(parentNode) {ULSyTi:;
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.Id;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$0_1 = ($v_0);
            delete parentNode.Id;
        }
        $v_0 = parentNode.IsCreate;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$m_1 = ($v_0);
            delete parentNode.IsCreate;
        }
        $v_0 = parentNode.Position;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$D_1 = ($v_0);
            delete parentNode.Position;
        }
    }
}


PS.ProjectResource = function PS_ProjectResource(context, objectPath) {ULSyTi:;
    PS.ProjectResource.initializeBase(this, [ context, objectPath ]);
}
PS.ProjectResource.prototype = {
    
    get_actualCost: function PS_ProjectResource$get_actualCost$in() {ULSyTi:;
        this.checkUninitializedProperty('ActualCost');
        return (this.get_objectData().get_properties()['ActualCost']);
    },
    
    get_actualCostWorkPerformed: function PS_ProjectResource$get_actualCostWorkPerformed$in() {ULSyTi:;
        this.checkUninitializedProperty('ActualCostWorkPerformed');
        return (this.get_objectData().get_properties()['ActualCostWorkPerformed']);
    },
    
    get_actualCostWorkPerformedMilliseconds: function PS_ProjectResource$get_actualCostWorkPerformedMilliseconds$in() {ULSyTi:;
        this.checkUninitializedProperty('ActualCostWorkPerformedMilliseconds');
        return (this.get_objectData().get_properties()['ActualCostWorkPerformedMilliseconds']);
    },
    
    get_actualOvertimeCost: function PS_ProjectResource$get_actualOvertimeCost$in() {ULSyTi:;
        this.checkUninitializedProperty('ActualOvertimeCost');
        return (this.get_objectData().get_properties()['ActualOvertimeCost']);
    },
    
    get_actualOvertimeWork: function PS_ProjectResource$get_actualOvertimeWork$in() {ULSyTi:;
        this.checkUninitializedProperty('ActualOvertimeWork');
        return (this.get_objectData().get_properties()['ActualOvertimeWork']);
    },
    
    get_actualOvertimeWorkMilliseconds: function PS_ProjectResource$get_actualOvertimeWorkMilliseconds$in() {ULSyTi:;
        this.checkUninitializedProperty('ActualOvertimeWorkMilliseconds');
        return (this.get_objectData().get_properties()['ActualOvertimeWorkMilliseconds']);
    },
    
    get_actualWork: function PS_ProjectResource$get_actualWork$in() {ULSyTi:;
        this.checkUninitializedProperty('ActualWork');
        return (this.get_objectData().get_properties()['ActualWork']);
    },
    
    get_actualWorkMilliseconds: function PS_ProjectResource$get_actualWorkMilliseconds$in() {ULSyTi:;
        this.checkUninitializedProperty('ActualWorkMilliseconds');
        return (this.get_objectData().get_properties()['ActualWorkMilliseconds']);
    },
    
    get_availableFrom: function PS_ProjectResource$get_availableFrom$in() {ULSyTi:;
        this.checkUninitializedProperty('AvailableFrom');
        return (this.get_objectData().get_properties()['AvailableFrom']);
    },
    
    get_availableTo: function PS_ProjectResource$get_availableTo$in() {ULSyTi:;
        this.checkUninitializedProperty('AvailableTo');
        return (this.get_objectData().get_properties()['AvailableTo']);
    },
    
    get_baselineCost: function PS_ProjectResource$get_baselineCost$in() {ULSyTi:;
        this.checkUninitializedProperty('BaselineCost');
        return (this.get_objectData().get_properties()['BaselineCost']);
    },
    
    get_baselineWork: function PS_ProjectResource$get_baselineWork$in() {ULSyTi:;
        this.checkUninitializedProperty('BaselineWork');
        return (this.get_objectData().get_properties()['BaselineWork']);
    },
    
    get_baselineWorkMilliseconds: function PS_ProjectResource$get_baselineWorkMilliseconds$in() {ULSyTi:;
        this.checkUninitializedProperty('BaselineWorkMilliseconds');
        return (this.get_objectData().get_properties()['BaselineWorkMilliseconds']);
    },
    
    get_budetCostWorkPerformed: function PS_ProjectResource$get_budetCostWorkPerformed$in() {ULSyTi:;
        this.checkUninitializedProperty('BudetCostWorkPerformed');
        return (this.get_objectData().get_properties()['BudetCostWorkPerformed']);
    },
    
    get_budgetedCost: function PS_ProjectResource$get_budgetedCost$in() {ULSyTi:;
        this.checkUninitializedProperty('BudgetedCost');
        return (this.get_objectData().get_properties()['BudgetedCost']);
    },
    
    get_budgetedCostWorkScheduled: function PS_ProjectResource$get_budgetedCostWorkScheduled$in() {ULSyTi:;
        this.checkUninitializedProperty('BudgetedCostWorkScheduled');
        return (this.get_objectData().get_properties()['BudgetedCostWorkScheduled']);
    },
    
    get_budgetedWork: function PS_ProjectResource$get_budgetedWork$in() {ULSyTi:;
        this.checkUninitializedProperty('BudgetedWork');
        return (this.get_objectData().get_properties()['BudgetedWork']);
    },
    
    get_budgetedWorkMilliseconds: function PS_ProjectResource$get_budgetedWorkMilliseconds$in() {ULSyTi:;
        this.checkUninitializedProperty('BudgetedWorkMilliseconds');
        return (this.get_objectData().get_properties()['BudgetedWorkMilliseconds']);
    },
    
    get_cost: function PS_ProjectResource$get_cost$in() {ULSyTi:;
        this.checkUninitializedProperty('Cost');
        return (this.get_objectData().get_properties()['Cost']);
    },
    
    get_costVariance: function PS_ProjectResource$get_costVariance$in() {ULSyTi:;
        this.checkUninitializedProperty('CostVariance');
        return (this.get_objectData().get_properties()['CostVariance']);
    },
    
    get_costVarianceAtCompletion: function PS_ProjectResource$get_costVarianceAtCompletion$in() {ULSyTi:;
        this.checkUninitializedProperty('CostVarianceAtCompletion');
        return (this.get_objectData().get_properties()['CostVarianceAtCompletion']);
    },
    
    get_created: function PS_ProjectResource$get_created$in() {ULSyTi:;
        this.checkUninitializedProperty('Created');
        return (this.get_objectData().get_properties()['Created']);
    },
    
    get_currentCostVariance: function PS_ProjectResource$get_currentCostVariance$in() {ULSyTi:;
        this.checkUninitializedProperty('CurrentCostVariance');
        return (this.get_objectData().get_properties()['CurrentCostVariance']);
    },
    
    get_customFields: function PS_ProjectResource$get_customFields$in() {ULSyTi:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['CustomFields']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new PS.CustomFieldCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'CustomFields'));
            this.get_objectData().get_clientObjectProperties()['CustomFields'] = $v_0;
        }
        return $v_0;
    },
    
    get_enterpriseResource: function PS_ProjectResource$get_enterpriseResource$in() {ULSyTi:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['EnterpriseResource']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new PS.EnterpriseResource(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'EnterpriseResource'));
            this.get_objectData().get_clientObjectProperties()['EnterpriseResource'] = $v_0;
        }
        return $v_0;
    },
    
    get_finish: function PS_ProjectResource$get_finish$in() {ULSyTi:;
        this.checkUninitializedProperty('Finish');
        return (this.get_objectData().get_properties()['Finish']);
    },
    
    get_id: function PS_ProjectResource$get_id$in() {ULSyTi:;
        this.checkUninitializedProperty('Id');
        return (this.get_objectData().get_properties()['Id']);
    },
    
    get_isBudgeted: function PS_ProjectResource$get_isBudgeted$in() {ULSyTi:;
        this.checkUninitializedProperty('IsBudgeted');
        return (this.get_objectData().get_properties()['IsBudgeted']);
    },
    
    get_isGenericResource: function PS_ProjectResource$get_isGenericResource$in() {ULSyTi:;
        this.checkUninitializedProperty('IsGenericResource');
        return (this.get_objectData().get_properties()['IsGenericResource']);
    },
    
    get_isOverAllocated: function PS_ProjectResource$get_isOverAllocated$in() {ULSyTi:;
        this.checkUninitializedProperty('IsOverAllocated');
        return (this.get_objectData().get_properties()['IsOverAllocated']);
    },
    
    get_modified: function PS_ProjectResource$get_modified$in() {ULSyTi:;
        this.checkUninitializedProperty('Modified');
        return (this.get_objectData().get_properties()['Modified']);
    },
    
    get_notes: function PS_ProjectResource$get_notes$in() {ULSyTi:;
        this.checkUninitializedProperty('Notes');
        return (this.get_objectData().get_properties()['Notes']);
    },
    
    get_overtimeCost: function PS_ProjectResource$get_overtimeCost$in() {ULSyTi:;
        this.checkUninitializedProperty('OvertimeCost');
        return (this.get_objectData().get_properties()['OvertimeCost']);
    },
    
    get_overtimeWork: function PS_ProjectResource$get_overtimeWork$in() {ULSyTi:;
        this.checkUninitializedProperty('OvertimeWork');
        return (this.get_objectData().get_properties()['OvertimeWork']);
    },
    
    get_overtimeWorkMilliseconds: function PS_ProjectResource$get_overtimeWorkMilliseconds$in() {ULSyTi:;
        this.checkUninitializedProperty('OvertimeWorkMilliseconds');
        return (this.get_objectData().get_properties()['OvertimeWorkMilliseconds']);
    },
    
    get_peakWork: function PS_ProjectResource$get_peakWork$in() {ULSyTi:;
        this.checkUninitializedProperty('PeakWork');
        return (this.get_objectData().get_properties()['PeakWork']);
    },
    
    get_peakWorkMilliseconds: function PS_ProjectResource$get_peakWorkMilliseconds$in() {ULSyTi:;
        this.checkUninitializedProperty('PeakWorkMilliseconds');
        return (this.get_objectData().get_properties()['PeakWorkMilliseconds']);
    },
    
    get_percentWorkComplete: function PS_ProjectResource$get_percentWorkComplete$in() {ULSyTi:;
        this.checkUninitializedProperty('PercentWorkComplete');
        return (this.get_objectData().get_properties()['PercentWorkComplete']);
    },
    
    get_regularWork: function PS_ProjectResource$get_regularWork$in() {ULSyTi:;
        this.checkUninitializedProperty('RegularWork');
        return (this.get_objectData().get_properties()['RegularWork']);
    },
    
    get_regularWorkMilliseconds: function PS_ProjectResource$get_regularWorkMilliseconds$in() {ULSyTi:;
        this.checkUninitializedProperty('RegularWorkMilliseconds');
        return (this.get_objectData().get_properties()['RegularWorkMilliseconds']);
    },
    
    get_remainingCost: function PS_ProjectResource$get_remainingCost$in() {ULSyTi:;
        this.checkUninitializedProperty('RemainingCost');
        return (this.get_objectData().get_properties()['RemainingCost']);
    },
    
    get_remainingOvertimeCost: function PS_ProjectResource$get_remainingOvertimeCost$in() {ULSyTi:;
        this.checkUninitializedProperty('RemainingOvertimeCost');
        return (this.get_objectData().get_properties()['RemainingOvertimeCost']);
    },
    
    get_remainingOvertimeWork: function PS_ProjectResource$get_remainingOvertimeWork$in() {ULSyTi:;
        this.checkUninitializedProperty('RemainingOvertimeWork');
        return (this.get_objectData().get_properties()['RemainingOvertimeWork']);
    },
    
    get_remainingOvertimeWorkMilliseconds: function PS_ProjectResource$get_remainingOvertimeWorkMilliseconds$in() {ULSyTi:;
        this.checkUninitializedProperty('RemainingOvertimeWorkMilliseconds');
        return (this.get_objectData().get_properties()['RemainingOvertimeWorkMilliseconds']);
    },
    
    get_remainingWork: function PS_ProjectResource$get_remainingWork$in() {ULSyTi:;
        this.checkUninitializedProperty('RemainingWork');
        return (this.get_objectData().get_properties()['RemainingWork']);
    },
    
    get_remainingWorkMilliseconds: function PS_ProjectResource$get_remainingWorkMilliseconds$in() {ULSyTi:;
        this.checkUninitializedProperty('RemainingWorkMilliseconds');
        return (this.get_objectData().get_properties()['RemainingWorkMilliseconds']);
    },
    
    get_scheduleCostVariance: function PS_ProjectResource$get_scheduleCostVariance$in() {ULSyTi:;
        this.checkUninitializedProperty('ScheduleCostVariance');
        return (this.get_objectData().get_properties()['ScheduleCostVariance']);
    },
    
    get_start: function PS_ProjectResource$get_start$in() {ULSyTi:;
        this.checkUninitializedProperty('Start');
        return (this.get_objectData().get_properties()['Start']);
    },
    
    get_work: function PS_ProjectResource$get_work$in() {ULSyTi:;
        this.checkUninitializedProperty('Work');
        return (this.get_objectData().get_properties()['Work']);
    },
    
    get_workMilliseconds: function PS_ProjectResource$get_workMilliseconds$in() {ULSyTi:;
        this.checkUninitializedProperty('WorkMilliseconds');
        return (this.get_objectData().get_properties()['WorkMilliseconds']);
    },
    
    get_workVariance: function PS_ProjectResource$get_workVariance$in() {ULSyTi:;
        this.checkUninitializedProperty('WorkVariance');
        return (this.get_objectData().get_properties()['WorkVariance']);
    },
    
    get_workVarianceMilliseconds: function PS_ProjectResource$get_workVarianceMilliseconds$in() {ULSyTi:;
        this.checkUninitializedProperty('WorkVarianceMilliseconds');
        return (this.get_objectData().get_properties()['WorkVarianceMilliseconds']);
    },
    
    initPropertiesFromJson: function PS_ProjectResource$initPropertiesFromJson$in(parentNode) {ULSyTi:;
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.ActualCost;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ActualCost'] = ($v_0);
            delete parentNode.ActualCost;
        }
        $v_0 = parentNode.ActualCostWorkPerformed;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ActualCostWorkPerformed'] = ($v_0);
            delete parentNode.ActualCostWorkPerformed;
        }
        $v_0 = parentNode.ActualCostWorkPerformedMilliseconds;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ActualCostWorkPerformedMilliseconds'] = ($v_0);
            delete parentNode.ActualCostWorkPerformedMilliseconds;
        }
        $v_0 = parentNode.ActualOvertimeCost;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ActualOvertimeCost'] = ($v_0);
            delete parentNode.ActualOvertimeCost;
        }
        $v_0 = parentNode.ActualOvertimeWork;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ActualOvertimeWork'] = ($v_0);
            delete parentNode.ActualOvertimeWork;
        }
        $v_0 = parentNode.ActualOvertimeWorkMilliseconds;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ActualOvertimeWorkMilliseconds'] = ($v_0);
            delete parentNode.ActualOvertimeWorkMilliseconds;
        }
        $v_0 = parentNode.ActualWork;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ActualWork'] = ($v_0);
            delete parentNode.ActualWork;
        }
        $v_0 = parentNode.ActualWorkMilliseconds;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ActualWorkMilliseconds'] = ($v_0);
            delete parentNode.ActualWorkMilliseconds;
        }
        $v_0 = parentNode.AvailableFrom;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['AvailableFrom'] = ($v_0);
            delete parentNode.AvailableFrom;
        }
        $v_0 = parentNode.AvailableTo;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['AvailableTo'] = ($v_0);
            delete parentNode.AvailableTo;
        }
        $v_0 = parentNode.BaselineCost;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['BaselineCost'] = ($v_0);
            delete parentNode.BaselineCost;
        }
        $v_0 = parentNode.BaselineWork;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['BaselineWork'] = ($v_0);
            delete parentNode.BaselineWork;
        }
        $v_0 = parentNode.BaselineWorkMilliseconds;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['BaselineWorkMilliseconds'] = ($v_0);
            delete parentNode.BaselineWorkMilliseconds;
        }
        $v_0 = parentNode.BudetCostWorkPerformed;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['BudetCostWorkPerformed'] = ($v_0);
            delete parentNode.BudetCostWorkPerformed;
        }
        $v_0 = parentNode.BudgetedCost;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['BudgetedCost'] = ($v_0);
            delete parentNode.BudgetedCost;
        }
        $v_0 = parentNode.BudgetedCostWorkScheduled;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['BudgetedCostWorkScheduled'] = ($v_0);
            delete parentNode.BudgetedCostWorkScheduled;
        }
        $v_0 = parentNode.BudgetedWork;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['BudgetedWork'] = ($v_0);
            delete parentNode.BudgetedWork;
        }
        $v_0 = parentNode.BudgetedWorkMilliseconds;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['BudgetedWorkMilliseconds'] = ($v_0);
            delete parentNode.BudgetedWorkMilliseconds;
        }
        $v_0 = parentNode.Cost;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Cost'] = ($v_0);
            delete parentNode.Cost;
        }
        $v_0 = parentNode.CostVariance;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['CostVariance'] = ($v_0);
            delete parentNode.CostVariance;
        }
        $v_0 = parentNode.CostVarianceAtCompletion;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['CostVarianceAtCompletion'] = ($v_0);
            delete parentNode.CostVarianceAtCompletion;
        }
        $v_0 = parentNode.Created;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Created'] = ($v_0);
            delete parentNode.Created;
        }
        $v_0 = parentNode.CurrentCostVariance;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['CurrentCostVariance'] = ($v_0);
            delete parentNode.CurrentCostVariance;
        }
        $v_0 = parentNode.CustomFields;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('CustomFields', this.get_customFields(), $v_0);
            this.get_customFields().fromJson($v_0);
            delete parentNode.CustomFields;
        }
        $v_0 = parentNode.EnterpriseResource;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('EnterpriseResource', this.get_enterpriseResource(), $v_0);
            this.get_enterpriseResource().fromJson($v_0);
            delete parentNode.EnterpriseResource;
        }
        $v_0 = parentNode.Finish;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Finish'] = ($v_0);
            delete parentNode.Finish;
        }
        $v_0 = parentNode.Id;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Id'] = ($v_0);
            delete parentNode.Id;
        }
        $v_0 = parentNode.IsBudgeted;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['IsBudgeted'] = ($v_0);
            delete parentNode.IsBudgeted;
        }
        $v_0 = parentNode.IsGenericResource;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['IsGenericResource'] = ($v_0);
            delete parentNode.IsGenericResource;
        }
        $v_0 = parentNode.IsOverAllocated;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['IsOverAllocated'] = ($v_0);
            delete parentNode.IsOverAllocated;
        }
        $v_0 = parentNode.Modified;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Modified'] = ($v_0);
            delete parentNode.Modified;
        }
        $v_0 = parentNode.Notes;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Notes'] = ($v_0);
            delete parentNode.Notes;
        }
        $v_0 = parentNode.OvertimeCost;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['OvertimeCost'] = ($v_0);
            delete parentNode.OvertimeCost;
        }
        $v_0 = parentNode.OvertimeWork;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['OvertimeWork'] = ($v_0);
            delete parentNode.OvertimeWork;
        }
        $v_0 = parentNode.OvertimeWorkMilliseconds;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['OvertimeWorkMilliseconds'] = ($v_0);
            delete parentNode.OvertimeWorkMilliseconds;
        }
        $v_0 = parentNode.PeakWork;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['PeakWork'] = ($v_0);
            delete parentNode.PeakWork;
        }
        $v_0 = parentNode.PeakWorkMilliseconds;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['PeakWorkMilliseconds'] = ($v_0);
            delete parentNode.PeakWorkMilliseconds;
        }
        $v_0 = parentNode.PercentWorkComplete;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['PercentWorkComplete'] = ($v_0);
            delete parentNode.PercentWorkComplete;
        }
        $v_0 = parentNode.RegularWork;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['RegularWork'] = ($v_0);
            delete parentNode.RegularWork;
        }
        $v_0 = parentNode.RegularWorkMilliseconds;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['RegularWorkMilliseconds'] = ($v_0);
            delete parentNode.RegularWorkMilliseconds;
        }
        $v_0 = parentNode.RemainingCost;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['RemainingCost'] = ($v_0);
            delete parentNode.RemainingCost;
        }
        $v_0 = parentNode.RemainingOvertimeCost;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['RemainingOvertimeCost'] = ($v_0);
            delete parentNode.RemainingOvertimeCost;
        }
        $v_0 = parentNode.RemainingOvertimeWork;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['RemainingOvertimeWork'] = ($v_0);
            delete parentNode.RemainingOvertimeWork;
        }
        $v_0 = parentNode.RemainingOvertimeWorkMilliseconds;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['RemainingOvertimeWorkMilliseconds'] = ($v_0);
            delete parentNode.RemainingOvertimeWorkMilliseconds;
        }
        $v_0 = parentNode.RemainingWork;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['RemainingWork'] = ($v_0);
            delete parentNode.RemainingWork;
        }
        $v_0 = parentNode.RemainingWorkMilliseconds;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['RemainingWorkMilliseconds'] = ($v_0);
            delete parentNode.RemainingWorkMilliseconds;
        }
        $v_0 = parentNode.ScheduleCostVariance;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ScheduleCostVariance'] = ($v_0);
            delete parentNode.ScheduleCostVariance;
        }
        $v_0 = parentNode.Start;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Start'] = ($v_0);
            delete parentNode.Start;
        }
        $v_0 = parentNode.Work;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Work'] = ($v_0);
            delete parentNode.Work;
        }
        $v_0 = parentNode.WorkMilliseconds;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['WorkMilliseconds'] = ($v_0);
            delete parentNode.WorkMilliseconds;
        }
        $v_0 = parentNode.WorkVariance;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['WorkVariance'] = ($v_0);
            delete parentNode.WorkVariance;
        }
        $v_0 = parentNode.WorkVarianceMilliseconds;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['WorkVarianceMilliseconds'] = ($v_0);
            delete parentNode.WorkVarianceMilliseconds;
        }
    }
}


PS.ProjectResourcePropertyNames = function PS_ProjectResourcePropertyNames() {
}


PS.ProjectResourceObjectPropertyNames = function PS_ProjectResourceObjectPropertyNames() {
}


PS.ProjectResourceCreationInformation = function PS_ProjectResourceCreationInformation() {ULSyTi:;
    PS.ProjectResourceCreationInformation.initializeBase(this);
}
PS.ProjectResourceCreationInformation.prototype = {
    $P_1: null,
    $b_1: null,
    $0_1: null,
    $1_1: null,
    $8_1: null,
    
    get_account: function PS_ProjectResourceCreationInformation$get_account$in() {ULSyTi:;
        return this.$P_1;
    },
    
    set_account: function PS_ProjectResourceCreationInformation$set_account$in(value) {ULSyTi:;
        this.$P_1 = value;
        return value;
    },
    
    get_email: function PS_ProjectResourceCreationInformation$get_email$in() {ULSyTi:;
        return this.$b_1;
    },
    
    set_email: function PS_ProjectResourceCreationInformation$set_email$in(value) {ULSyTi:;
        this.$b_1 = value;
        return value;
    },
    
    get_id: function PS_ProjectResourceCreationInformation$get_id$in() {ULSyTi:;
        return this.$0_1;
    },
    
    set_id: function PS_ProjectResourceCreationInformation$set_id$in(value) {ULSyTi:;
        this.$0_1 = value;
        return value;
    },
    
    get_name: function PS_ProjectResourceCreationInformation$get_name$in() {ULSyTi:;
        return this.$1_1;
    },
    
    set_name: function PS_ProjectResourceCreationInformation$set_name$in(value) {ULSyTi:;
        this.$1_1 = value;
        return value;
    },
    
    get_notes: function PS_ProjectResourceCreationInformation$get_notes$in() {ULSyTi:;
        return this.$8_1;
    },
    
    set_notes: function PS_ProjectResourceCreationInformation$set_notes$in(value) {ULSyTi:;
        this.$8_1 = value;
        return value;
    },
    
    get_typeId: function PS_ProjectResourceCreationInformation$get_typeId$in() {ULSyTi:;
        return '{69b89190-b8dc-4025-b0d1-a81e4cbd605c}';
    },
    
    writeToXml: function PS_ProjectResourceCreationInformation$writeToXml$in(writer, serializationContext) {ULSyTi:;
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = [ 'Account', 'Email', 'Id', 'Name', 'Notes' ];
        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    
    initPropertiesFromJson: function PS_ProjectResourceCreationInformation$initPropertiesFromJson$in(parentNode) {ULSyTi:;
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.Account;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$P_1 = ($v_0);
            delete parentNode.Account;
        }
        $v_0 = parentNode.Email;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$b_1 = ($v_0);
            delete parentNode.Email;
        }
        $v_0 = parentNode.Id;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$0_1 = ($v_0);
            delete parentNode.Id;
        }
        $v_0 = parentNode.Name;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1_1 = ($v_0);
            delete parentNode.Name;
        }
        $v_0 = parentNode.Notes;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$8_1 = ($v_0);
            delete parentNode.Notes;
        }
    }
}


PS.ProjectServer = function PS_ProjectServer(context) {ULSyTi:;
    PS.ProjectServer.initializeBase(this, [ context, SP.ClientUtility.getOrCreateObjectPathForConstructor(context, '{3a609e5f-e2a1-497c-87a2-e5e8a781c096}', arguments) ]);
}
PS.ProjectServer.newObject = function PS_ProjectServer$newObject$st(context) {ULSyTi:;
    return new PS.ProjectServer(context, new SP.ObjectPathConstructor(context, '{3a609e5f-e2a1-497c-87a2-e5e8a781c096}', null));
}
PS.ProjectServer.prototype = {
    
    get_calendars: function PS_ProjectServer$get_calendars$in() {ULSyTi:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['Calendars']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new PS.CalendarCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Calendars'));
            this.get_objectData().get_clientObjectProperties()['Calendars'] = $v_0;
        }
        return $v_0;
    },
    
    get_customFields: function PS_ProjectServer$get_customFields$in() {ULSyTi:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['CustomFields']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new PS.CustomFieldCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'CustomFields'));
            this.get_objectData().get_clientObjectProperties()['CustomFields'] = $v_0;
        }
        return $v_0;
    },
    
    get_enterpriseProjectTypes: function PS_ProjectServer$get_enterpriseProjectTypes$in() {ULSyTi:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['EnterpriseProjectTypes']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new PS.EnterpriseProjectTypeCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'EnterpriseProjectTypes'));
            this.get_objectData().get_clientObjectProperties()['EnterpriseProjectTypes'] = $v_0;
        }
        return $v_0;
    },
    
    get_enterpriseResources: function PS_ProjectServer$get_enterpriseResources$in() {ULSyTi:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['EnterpriseResources']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new PS.EnterpriseResourceCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'EnterpriseResources'));
            this.get_objectData().get_clientObjectProperties()['EnterpriseResources'] = $v_0;
        }
        return $v_0;
    },
    
    get_entityTypes: function PS_ProjectServer$get_entityTypes$in() {ULSyTi:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['EntityTypes']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new PS.EntityTypes(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'EntityTypes'));
            this.get_objectData().get_clientObjectProperties()['EntityTypes'] = $v_0;
        }
        return $v_0;
    },
    
    get_eventHandlers: function PS_ProjectServer$get_eventHandlers$in() {ULSyTi:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['EventHandlers']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new PS.EventHandlerCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'EventHandlers'));
            this.get_objectData().get_clientObjectProperties()['EventHandlers'] = $v_0;
        }
        return $v_0;
    },
    
    get_events: function PS_ProjectServer$get_events$in() {ULSyTi:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['Events']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new PS.EventCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Events'));
            this.get_objectData().get_clientObjectProperties()['Events'] = $v_0;
        }
        return $v_0;
    },
    
    get_isDelegate: function PS_ProjectServer$get_isDelegate$in() {ULSyTi:;
        this.checkUninitializedProperty('IsDelegate');
        return (this.get_objectData().get_properties()['IsDelegate']);
    },
    
    get_isReadOnly: function PS_ProjectServer$get_isReadOnly$in() {ULSyTi:;
        this.checkUninitializedProperty('IsReadOnly');
        return (this.get_objectData().get_properties()['IsReadOnly']);
    },
    
    get_lookupTables: function PS_ProjectServer$get_lookupTables$in() {ULSyTi:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['LookupTables']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new PS.LookupTableCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'LookupTables'));
            this.get_objectData().get_clientObjectProperties()['LookupTables'] = $v_0;
        }
        return $v_0;
    },
    
    get_phases: function PS_ProjectServer$get_phases$in() {ULSyTi:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['Phases']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new PS.PhaseCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Phases'));
            this.get_objectData().get_clientObjectProperties()['Phases'] = $v_0;
        }
        return $v_0;
    },
    
    get_projectDetailPages: function PS_ProjectServer$get_projectDetailPages$in() {ULSyTi:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['ProjectDetailPages']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new PS.ProjectDetailPageCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'ProjectDetailPages'));
            this.get_objectData().get_clientObjectProperties()['ProjectDetailPages'] = $v_0;
        }
        return $v_0;
    },
    
    get_projects: function PS_ProjectServer$get_projects$in() {ULSyTi:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['Projects']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new PS.ProjectCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Projects'));
            this.get_objectData().get_clientObjectProperties()['Projects'] = $v_0;
        }
        return $v_0;
    },
    
    get_stages: function PS_ProjectServer$get_stages$in() {ULSyTi:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['Stages']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new PS.StageCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Stages'));
            this.get_objectData().get_clientObjectProperties()['Stages'] = $v_0;
        }
        return $v_0;
    },
    
    get_timeSheetPeriods: function PS_ProjectServer$get_timeSheetPeriods$in() {ULSyTi:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['TimeSheetPeriods']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new PS.TimeSheetPeriodCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'TimeSheetPeriods'));
            this.get_objectData().get_clientObjectProperties()['TimeSheetPeriods'] = $v_0;
        }
        return $v_0;
    },
    
    get_workflowActivities: function PS_ProjectServer$get_workflowActivities$in() {ULSyTi:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['WorkflowActivities']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new PS.WorkflowActivities(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'WorkflowActivities'));
            this.get_objectData().get_clientObjectProperties()['WorkflowActivities'] = $v_0;
        }
        return $v_0;
    },
    
    get_workflowDesigner: function PS_ProjectServer$get_workflowDesigner$in() {ULSyTi:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['WorkflowDesigner']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new PS.WorkflowDesigner(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'WorkflowDesigner'));
            this.get_objectData().get_clientObjectProperties()['WorkflowDesigner'] = $v_0;
        }
        return $v_0;
    },
    
    initPropertiesFromJson: function PS_ProjectServer$initPropertiesFromJson$in(parentNode) {ULSyTi:;
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.Calendars;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('Calendars', this.get_calendars(), $v_0);
            this.get_calendars().fromJson($v_0);
            delete parentNode.Calendars;
        }
        $v_0 = parentNode.CustomFields;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('CustomFields', this.get_customFields(), $v_0);
            this.get_customFields().fromJson($v_0);
            delete parentNode.CustomFields;
        }
        $v_0 = parentNode.EnterpriseProjectTypes;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('EnterpriseProjectTypes', this.get_enterpriseProjectTypes(), $v_0);
            this.get_enterpriseProjectTypes().fromJson($v_0);
            delete parentNode.EnterpriseProjectTypes;
        }
        $v_0 = parentNode.EnterpriseResources;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('EnterpriseResources', this.get_enterpriseResources(), $v_0);
            this.get_enterpriseResources().fromJson($v_0);
            delete parentNode.EnterpriseResources;
        }
        $v_0 = parentNode.EntityTypes;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('EntityTypes', this.get_entityTypes(), $v_0);
            this.get_entityTypes().fromJson($v_0);
            delete parentNode.EntityTypes;
        }
        $v_0 = parentNode.EventHandlers;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('EventHandlers', this.get_eventHandlers(), $v_0);
            this.get_eventHandlers().fromJson($v_0);
            delete parentNode.EventHandlers;
        }
        $v_0 = parentNode.Events;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('Events', this.get_events(), $v_0);
            this.get_events().fromJson($v_0);
            delete parentNode.Events;
        }
        $v_0 = parentNode.IsDelegate;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['IsDelegate'] = ($v_0);
            delete parentNode.IsDelegate;
        }
        $v_0 = parentNode.IsReadOnly;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['IsReadOnly'] = ($v_0);
            delete parentNode.IsReadOnly;
        }
        $v_0 = parentNode.LookupTables;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('LookupTables', this.get_lookupTables(), $v_0);
            this.get_lookupTables().fromJson($v_0);
            delete parentNode.LookupTables;
        }
        $v_0 = parentNode.Phases;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('Phases', this.get_phases(), $v_0);
            this.get_phases().fromJson($v_0);
            delete parentNode.Phases;
        }
        $v_0 = parentNode.ProjectDetailPages;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('ProjectDetailPages', this.get_projectDetailPages(), $v_0);
            this.get_projectDetailPages().fromJson($v_0);
            delete parentNode.ProjectDetailPages;
        }
        $v_0 = parentNode.Projects;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('Projects', this.get_projects(), $v_0);
            this.get_projects().fromJson($v_0);
            delete parentNode.Projects;
        }
        $v_0 = parentNode.Stages;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('Stages', this.get_stages(), $v_0);
            this.get_stages().fromJson($v_0);
            delete parentNode.Stages;
        }
        $v_0 = parentNode.TimeSheetPeriods;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('TimeSheetPeriods', this.get_timeSheetPeriods(), $v_0);
            this.get_timeSheetPeriods().fromJson($v_0);
            delete parentNode.TimeSheetPeriods;
        }
        $v_0 = parentNode.WorkflowActivities;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('WorkflowActivities', this.get_workflowActivities(), $v_0);
            this.get_workflowActivities().fromJson($v_0);
            delete parentNode.WorkflowActivities;
        }
        $v_0 = parentNode.WorkflowDesigner;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('WorkflowDesigner', this.get_workflowDesigner(), $v_0);
            this.get_workflowDesigner().fromJson($v_0);
            delete parentNode.WorkflowDesigner;
        }
    },
    
    stopDelegation: function PS_ProjectServer$stopDelegation$in() {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'StopDelegation', null);
        $v_0.addQuery($v_1);
    },
    
    getDeletedPublishedAssignments: function PS_ProjectServer$getDeletedPublishedAssignments$in(deletedDate) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        $v_1 = new PS.DeletedPublishedAssignmentCollection($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetDeletedPublishedAssignments', [ deletedDate ]));
        return $v_1;
    }
}


PS.ProjectServerPropertyNames = function PS_ProjectServerPropertyNames() {
}


PS.ProjectServerObjectPropertyNames = function PS_ProjectServerObjectPropertyNames() {
}


PS.ProjectServerData = function PS_ProjectServerData(context) {ULSyTi:;
    PS.ProjectServerData.initializeBase(this, [ context, SP.ClientUtility.getOrCreateObjectPathForConstructor(context, '{377f41e2-2956-409e-a261-08e6826ac4bf}', arguments) ]);
}
PS.ProjectServerData.newObject = function PS_ProjectServerData$newObject$st(context) {ULSyTi:;
    return new PS.ProjectServerData(context, new SP.ObjectPathConstructor(context, '{377f41e2-2956-409e-a261-08e6826ac4bf}', null));
}


PS.ProjectSummaryTask = function PS_ProjectSummaryTask(context, objectPath) {ULSyTi:;
    PS.ProjectSummaryTask.initializeBase(this, [ context, objectPath ]);
}
PS.ProjectSummaryTask.prototype = {
    
    get_fieldValues: function PS_ProjectSummaryTask$get_fieldValues$in() {ULSyTi:;
        var $v_0 = this.get_objectData().get_methodReturnObjects()['$m_dict'];
        if (SP.ScriptUtility.isNullOrUndefined($v_0)) {
            $v_0 = {};
            this.get_objectData().get_methodReturnObjects()['$m_dict'] = $v_0;
        }
        return $v_0;
    },
    
    get_item: function PS_ProjectSummaryTask$get_item$in(fieldName) {ULSyTi:;
        return this.$6_2(fieldName);
    },
    
    get_actualCost: function PS_ProjectSummaryTask$get_actualCost$in() {ULSyTi:;
        this.checkUninitializedProperty('ActualCost');
        return (this.get_objectData().get_properties()['ActualCost']);
    },
    
    get_actualWork: function PS_ProjectSummaryTask$get_actualWork$in() {ULSyTi:;
        this.checkUninitializedProperty('ActualWork');
        return (this.get_objectData().get_properties()['ActualWork']);
    },
    
    get_actualWorkMilliseconds: function PS_ProjectSummaryTask$get_actualWorkMilliseconds$in() {ULSyTi:;
        this.checkUninitializedProperty('ActualWorkMilliseconds');
        return (this.get_objectData().get_properties()['ActualWorkMilliseconds']);
    },
    
    get_budgetWork: function PS_ProjectSummaryTask$get_budgetWork$in() {ULSyTi:;
        this.checkUninitializedProperty('BudgetWork');
        return (this.get_objectData().get_properties()['BudgetWork']);
    },
    
    get_budgetWorkMilliseconds: function PS_ProjectSummaryTask$get_budgetWorkMilliseconds$in() {ULSyTi:;
        this.checkUninitializedProperty('BudgetWorkMilliseconds');
        return (this.get_objectData().get_properties()['BudgetWorkMilliseconds']);
    },
    
    get_cost: function PS_ProjectSummaryTask$get_cost$in() {ULSyTi:;
        this.checkUninitializedProperty('Cost');
        return (this.get_objectData().get_properties()['Cost']);
    },
    
    get_duration: function PS_ProjectSummaryTask$get_duration$in() {ULSyTi:;
        this.checkUninitializedProperty('Duration');
        return (this.get_objectData().get_properties()['Duration']);
    },
    
    get_durationMilliseconds: function PS_ProjectSummaryTask$get_durationMilliseconds$in() {ULSyTi:;
        this.checkUninitializedProperty('DurationMilliseconds');
        return (this.get_objectData().get_properties()['DurationMilliseconds']);
    },
    
    get_finish: function PS_ProjectSummaryTask$get_finish$in() {ULSyTi:;
        this.checkUninitializedProperty('Finish');
        return (this.get_objectData().get_properties()['Finish']);
    },
    
    get_finishText: function PS_ProjectSummaryTask$get_finishText$in() {ULSyTi:;
        this.checkUninitializedProperty('FinishText');
        return (this.get_objectData().get_properties()['FinishText']);
    },
    
    get_name: function PS_ProjectSummaryTask$get_name$in() {ULSyTi:;
        this.checkUninitializedProperty('Name');
        return (this.get_objectData().get_properties()['Name']);
    },
    
    get_percentComplete: function PS_ProjectSummaryTask$get_percentComplete$in() {ULSyTi:;
        this.checkUninitializedProperty('PercentComplete');
        return (this.get_objectData().get_properties()['PercentComplete']);
    },
    
    get_priority: function PS_ProjectSummaryTask$get_priority$in() {ULSyTi:;
        this.checkUninitializedProperty('Priority');
        return (this.get_objectData().get_properties()['Priority']);
    },
    
    get_start: function PS_ProjectSummaryTask$get_start$in() {ULSyTi:;
        this.checkUninitializedProperty('Start');
        return (this.get_objectData().get_properties()['Start']);
    },
    
    get_startText: function PS_ProjectSummaryTask$get_startText$in() {ULSyTi:;
        this.checkUninitializedProperty('StartText');
        return (this.get_objectData().get_properties()['StartText']);
    },
    
    get_work: function PS_ProjectSummaryTask$get_work$in() {ULSyTi:;
        this.checkUninitializedProperty('Work');
        return (this.get_objectData().get_properties()['Work']);
    },
    
    get_workMilliseconds: function PS_ProjectSummaryTask$get_workMilliseconds$in() {ULSyTi:;
        this.checkUninitializedProperty('WorkMilliseconds');
        return (this.get_objectData().get_properties()['WorkMilliseconds']);
    },
    
    initNonPropertiesFromJson: function PS_ProjectSummaryTask$initNonPropertiesFromJson$in(parentNode) {ULSyTi:;
        SP.DataConvert.populateDictionaryFromObject(this.get_fieldValues(), parentNode);
        SP.DataConvert.fixupTypes(this.get_context(), this.get_fieldValues());
    },
    
    initPropertiesFromJson: function PS_ProjectSummaryTask$initPropertiesFromJson$in(parentNode) {ULSyTi:;
        PS.Task.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.ActualCost;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ActualCost'] = ($v_0);
            delete parentNode.ActualCost;
        }
        $v_0 = parentNode.ActualWork;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ActualWork'] = ($v_0);
            delete parentNode.ActualWork;
        }
        $v_0 = parentNode.ActualWorkMilliseconds;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ActualWorkMilliseconds'] = ($v_0);
            delete parentNode.ActualWorkMilliseconds;
        }
        $v_0 = parentNode.BudgetWork;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['BudgetWork'] = ($v_0);
            delete parentNode.BudgetWork;
        }
        $v_0 = parentNode.BudgetWorkMilliseconds;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['BudgetWorkMilliseconds'] = ($v_0);
            delete parentNode.BudgetWorkMilliseconds;
        }
        $v_0 = parentNode.Cost;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Cost'] = ($v_0);
            delete parentNode.Cost;
        }
        $v_0 = parentNode.Duration;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Duration'] = ($v_0);
            delete parentNode.Duration;
        }
        $v_0 = parentNode.DurationMilliseconds;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['DurationMilliseconds'] = ($v_0);
            delete parentNode.DurationMilliseconds;
        }
        $v_0 = parentNode.Finish;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Finish'] = ($v_0);
            delete parentNode.Finish;
        }
        $v_0 = parentNode.FinishText;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['FinishText'] = ($v_0);
            delete parentNode.FinishText;
        }
        $v_0 = parentNode.Name;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Name'] = ($v_0);
            delete parentNode.Name;
        }
        $v_0 = parentNode.PercentComplete;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['PercentComplete'] = ($v_0);
            delete parentNode.PercentComplete;
        }
        $v_0 = parentNode.Priority;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Priority'] = ($v_0);
            delete parentNode.Priority;
        }
        $v_0 = parentNode.Start;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Start'] = ($v_0);
            delete parentNode.Start;
        }
        $v_0 = parentNode.StartText;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['StartText'] = ($v_0);
            delete parentNode.StartText;
        }
        $v_0 = parentNode.Work;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Work'] = ($v_0);
            delete parentNode.Work;
        }
        $v_0 = parentNode.WorkMilliseconds;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['WorkMilliseconds'] = ($v_0);
            delete parentNode.WorkMilliseconds;
        }
    },
    
    $6_2: function PS_ProjectSummaryTask$$6_2$in($p0) {
        var $v_0 = this.get_fieldValues()[$p0];
        if (SP.ScriptUtility.isUndefined($v_0)) {
            throw Error.create(SP.ResResources.getString('PropertyHasNotBeenInitialized'));
        }
        return $v_0;
    },
    
    refreshLoad: function PS_ProjectSummaryTask$refreshLoad$in() {ULSyTi:;
        SP.ClientObject.prototype.refreshLoad.call(this);
        this.loadExpandoFields();
    },
    
    loadExpandoFields: function PS_ProjectSummaryTask$loadExpandoFields$in() {ULSyTi:;
        var $$dict_1 = this.get_fieldValues();
        for (var $$key_2 in $$dict_1) {
            var $v_0 = { key: $$key_2, value: $$dict_1[$$key_2] };
            this.retrieve($v_0.key);
        }
    }
}


PS.ProjectSummaryTaskPropertyNames = function PS_ProjectSummaryTaskPropertyNames() {
}


PS.PublishedAssignment = function PS_PublishedAssignment(context, objectPath) {ULSyTi:;
    PS.PublishedAssignment.initializeBase(this, [ context, objectPath ]);
}
PS.PublishedAssignment.prototype = {
    
    get_fieldValues: function PS_PublishedAssignment$get_fieldValues$in() {ULSyTi:;
        var $v_0 = this.get_objectData().get_methodReturnObjects()['$m_dict'];
        if (SP.ScriptUtility.isNullOrUndefined($v_0)) {
            $v_0 = {};
            this.get_objectData().get_methodReturnObjects()['$m_dict'] = $v_0;
        }
        return $v_0;
    },
    
    get_item: function PS_PublishedAssignment$get_item$in(fieldName) {ULSyTi:;
        return this.$6_2(fieldName);
    },
    
    get_actualCost: function PS_PublishedAssignment$get_actualCost$in() {ULSyTi:;
        this.checkUninitializedProperty('ActualCost');
        return (this.get_objectData().get_properties()['ActualCost']);
    },
    
    get_actualFinish: function PS_PublishedAssignment$get_actualFinish$in() {ULSyTi:;
        this.checkUninitializedProperty('ActualFinish');
        return (this.get_objectData().get_properties()['ActualFinish']);
    },
    
    get_actualOvertimeWork: function PS_PublishedAssignment$get_actualOvertimeWork$in() {ULSyTi:;
        this.checkUninitializedProperty('ActualOvertimeWork');
        return (this.get_objectData().get_properties()['ActualOvertimeWork']);
    },
    
    get_actualOvertimeWorkMilliseconds: function PS_PublishedAssignment$get_actualOvertimeWorkMilliseconds$in() {ULSyTi:;
        this.checkUninitializedProperty('ActualOvertimeWorkMilliseconds');
        return (this.get_objectData().get_properties()['ActualOvertimeWorkMilliseconds']);
    },
    
    get_actualStart: function PS_PublishedAssignment$get_actualStart$in() {ULSyTi:;
        this.checkUninitializedProperty('ActualStart');
        return (this.get_objectData().get_properties()['ActualStart']);
    },
    
    get_actualWork: function PS_PublishedAssignment$get_actualWork$in() {ULSyTi:;
        this.checkUninitializedProperty('ActualWork');
        return (this.get_objectData().get_properties()['ActualWork']);
    },
    
    get_actualWorkMilliseconds: function PS_PublishedAssignment$get_actualWorkMilliseconds$in() {ULSyTi:;
        this.checkUninitializedProperty('ActualWorkMilliseconds');
        return (this.get_objectData().get_properties()['ActualWorkMilliseconds']);
    },
    
    get_budgetedCost: function PS_PublishedAssignment$get_budgetedCost$in() {ULSyTi:;
        this.checkUninitializedProperty('BudgetedCost');
        return (this.get_objectData().get_properties()['BudgetedCost']);
    },
    
    get_budgetedWork: function PS_PublishedAssignment$get_budgetedWork$in() {ULSyTi:;
        this.checkUninitializedProperty('BudgetedWork');
        return (this.get_objectData().get_properties()['BudgetedWork']);
    },
    
    get_budgetedWorkMilliseconds: function PS_PublishedAssignment$get_budgetedWorkMilliseconds$in() {ULSyTi:;
        this.checkUninitializedProperty('BudgetedWorkMilliseconds');
        return (this.get_objectData().get_properties()['BudgetedWorkMilliseconds']);
    },
    
    get_cost: function PS_PublishedAssignment$get_cost$in() {ULSyTi:;
        this.checkUninitializedProperty('Cost');
        return (this.get_objectData().get_properties()['Cost']);
    },
    
    get_defaultBookingType: function PS_PublishedAssignment$get_defaultBookingType$in() {ULSyTi:;
        this.checkUninitializedProperty('DefaultBookingType');
        return (this.get_objectData().get_properties()['DefaultBookingType']);
    },
    
    get_isLockedByManager: function PS_PublishedAssignment$get_isLockedByManager$in() {ULSyTi:;
        this.checkUninitializedProperty('IsLockedByManager');
        return (this.get_objectData().get_properties()['IsLockedByManager']);
    },
    
    get_isWorkResource: function PS_PublishedAssignment$get_isWorkResource$in() {ULSyTi:;
        this.checkUninitializedProperty('IsWorkResource');
        return (this.get_objectData().get_properties()['IsWorkResource']);
    },
    
    get_overtimeWork: function PS_PublishedAssignment$get_overtimeWork$in() {ULSyTi:;
        this.checkUninitializedProperty('OvertimeWork');
        return (this.get_objectData().get_properties()['OvertimeWork']);
    },
    
    get_overtimeWorkMilliseconds: function PS_PublishedAssignment$get_overtimeWorkMilliseconds$in() {ULSyTi:;
        this.checkUninitializedProperty('OvertimeWorkMilliseconds');
        return (this.get_objectData().get_properties()['OvertimeWorkMilliseconds']);
    },
    
    get_owner: function PS_PublishedAssignment$get_owner$in() {ULSyTi:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['Owner']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.User(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Owner'));
            this.get_objectData().get_clientObjectProperties()['Owner'] = $v_0;
        }
        return $v_0;
    },
    
    get_parent: function PS_PublishedAssignment$get_parent$in() {ULSyTi:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['Parent']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new PS.PublishedAssignment(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Parent'));
            this.get_objectData().get_clientObjectProperties()['Parent'] = $v_0;
        }
        return $v_0;
    },
    
    get_percentWorkComplete: function PS_PublishedAssignment$get_percentWorkComplete$in() {ULSyTi:;
        this.checkUninitializedProperty('PercentWorkComplete');
        return (this.get_objectData().get_properties()['PercentWorkComplete']);
    },
    
    get_regularWork: function PS_PublishedAssignment$get_regularWork$in() {ULSyTi:;
        this.checkUninitializedProperty('RegularWork');
        return (this.get_objectData().get_properties()['RegularWork']);
    },
    
    get_regularWorkMilliseconds: function PS_PublishedAssignment$get_regularWorkMilliseconds$in() {ULSyTi:;
        this.checkUninitializedProperty('RegularWorkMilliseconds');
        return (this.get_objectData().get_properties()['RegularWorkMilliseconds']);
    },
    
    get_remainingOvertimeWork: function PS_PublishedAssignment$get_remainingOvertimeWork$in() {ULSyTi:;
        this.checkUninitializedProperty('RemainingOvertimeWork');
        return (this.get_objectData().get_properties()['RemainingOvertimeWork']);
    },
    
    get_remainingOvertimeWorkMilliseconds: function PS_PublishedAssignment$get_remainingOvertimeWorkMilliseconds$in() {ULSyTi:;
        this.checkUninitializedProperty('RemainingOvertimeWorkMilliseconds');
        return (this.get_objectData().get_properties()['RemainingOvertimeWorkMilliseconds']);
    },
    
    get_remainingWork: function PS_PublishedAssignment$get_remainingWork$in() {ULSyTi:;
        this.checkUninitializedProperty('RemainingWork');
        return (this.get_objectData().get_properties()['RemainingWork']);
    },
    
    get_remainingWorkMilliseconds: function PS_PublishedAssignment$get_remainingWorkMilliseconds$in() {ULSyTi:;
        this.checkUninitializedProperty('RemainingWorkMilliseconds');
        return (this.get_objectData().get_properties()['RemainingWorkMilliseconds']);
    },
    
    get_resource: function PS_PublishedAssignment$get_resource$in() {ULSyTi:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['Resource']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new PS.PublishedProjectResource(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Resource'));
            this.get_objectData().get_clientObjectProperties()['Resource'] = $v_0;
        }
        return $v_0;
    },
    
    get_resourceCapacity: function PS_PublishedAssignment$get_resourceCapacity$in() {ULSyTi:;
        this.checkUninitializedProperty('ResourceCapacity');
        return (this.get_objectData().get_properties()['ResourceCapacity']);
    },
    
    get_task: function PS_PublishedAssignment$get_task$in() {ULSyTi:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['Task']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new PS.PublishedTask(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Task'));
            this.get_objectData().get_clientObjectProperties()['Task'] = $v_0;
        }
        return $v_0;
    },
    
    get_work: function PS_PublishedAssignment$get_work$in() {ULSyTi:;
        this.checkUninitializedProperty('Work');
        return (this.get_objectData().get_properties()['Work']);
    },
    
    get_workMilliseconds: function PS_PublishedAssignment$get_workMilliseconds$in() {ULSyTi:;
        this.checkUninitializedProperty('WorkMilliseconds');
        return (this.get_objectData().get_properties()['WorkMilliseconds']);
    },
    
    initNonPropertiesFromJson: function PS_PublishedAssignment$initNonPropertiesFromJson$in(parentNode) {ULSyTi:;
        SP.DataConvert.populateDictionaryFromObject(this.get_fieldValues(), parentNode);
        SP.DataConvert.fixupTypes(this.get_context(), this.get_fieldValues());
    },
    
    initPropertiesFromJson: function PS_PublishedAssignment$initPropertiesFromJson$in(parentNode) {ULSyTi:;
        PS.Assignment.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.ActualCost;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ActualCost'] = ($v_0);
            delete parentNode.ActualCost;
        }
        $v_0 = parentNode.ActualFinish;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ActualFinish'] = ($v_0);
            delete parentNode.ActualFinish;
        }
        $v_0 = parentNode.ActualOvertimeWork;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ActualOvertimeWork'] = ($v_0);
            delete parentNode.ActualOvertimeWork;
        }
        $v_0 = parentNode.ActualOvertimeWorkMilliseconds;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ActualOvertimeWorkMilliseconds'] = ($v_0);
            delete parentNode.ActualOvertimeWorkMilliseconds;
        }
        $v_0 = parentNode.ActualStart;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ActualStart'] = ($v_0);
            delete parentNode.ActualStart;
        }
        $v_0 = parentNode.ActualWork;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ActualWork'] = ($v_0);
            delete parentNode.ActualWork;
        }
        $v_0 = parentNode.ActualWorkMilliseconds;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ActualWorkMilliseconds'] = ($v_0);
            delete parentNode.ActualWorkMilliseconds;
        }
        $v_0 = parentNode.BudgetedCost;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['BudgetedCost'] = ($v_0);
            delete parentNode.BudgetedCost;
        }
        $v_0 = parentNode.BudgetedWork;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['BudgetedWork'] = ($v_0);
            delete parentNode.BudgetedWork;
        }
        $v_0 = parentNode.BudgetedWorkMilliseconds;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['BudgetedWorkMilliseconds'] = ($v_0);
            delete parentNode.BudgetedWorkMilliseconds;
        }
        $v_0 = parentNode.Cost;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Cost'] = ($v_0);
            delete parentNode.Cost;
        }
        $v_0 = parentNode.DefaultBookingType;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['DefaultBookingType'] = ((SP.DataConvert.fixupType(this.get_context(), $v_0)));
            delete parentNode.DefaultBookingType;
        }
        $v_0 = parentNode.IsLockedByManager;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['IsLockedByManager'] = ($v_0);
            delete parentNode.IsLockedByManager;
        }
        $v_0 = parentNode.IsWorkResource;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['IsWorkResource'] = ($v_0);
            delete parentNode.IsWorkResource;
        }
        $v_0 = parentNode.OvertimeWork;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['OvertimeWork'] = ($v_0);
            delete parentNode.OvertimeWork;
        }
        $v_0 = parentNode.OvertimeWorkMilliseconds;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['OvertimeWorkMilliseconds'] = ($v_0);
            delete parentNode.OvertimeWorkMilliseconds;
        }
        $v_0 = parentNode.Owner;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('Owner', this.get_owner(), $v_0);
            this.get_owner().fromJson($v_0);
            delete parentNode.Owner;
        }
        $v_0 = parentNode.Parent;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('Parent', this.get_parent(), $v_0);
            this.get_parent().fromJson($v_0);
            delete parentNode.Parent;
        }
        $v_0 = parentNode.PercentWorkComplete;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['PercentWorkComplete'] = ($v_0);
            delete parentNode.PercentWorkComplete;
        }
        $v_0 = parentNode.RegularWork;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['RegularWork'] = ($v_0);
            delete parentNode.RegularWork;
        }
        $v_0 = parentNode.RegularWorkMilliseconds;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['RegularWorkMilliseconds'] = ($v_0);
            delete parentNode.RegularWorkMilliseconds;
        }
        $v_0 = parentNode.RemainingOvertimeWork;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['RemainingOvertimeWork'] = ($v_0);
            delete parentNode.RemainingOvertimeWork;
        }
        $v_0 = parentNode.RemainingOvertimeWorkMilliseconds;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['RemainingOvertimeWorkMilliseconds'] = ($v_0);
            delete parentNode.RemainingOvertimeWorkMilliseconds;
        }
        $v_0 = parentNode.RemainingWork;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['RemainingWork'] = ($v_0);
            delete parentNode.RemainingWork;
        }
        $v_0 = parentNode.RemainingWorkMilliseconds;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['RemainingWorkMilliseconds'] = ($v_0);
            delete parentNode.RemainingWorkMilliseconds;
        }
        $v_0 = parentNode.Resource;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('Resource', this.get_resource(), $v_0);
            this.get_resource().fromJson($v_0);
            delete parentNode.Resource;
        }
        $v_0 = parentNode.ResourceCapacity;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ResourceCapacity'] = ($v_0);
            delete parentNode.ResourceCapacity;
        }
        $v_0 = parentNode.Task;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('Task', this.get_task(), $v_0);
            this.get_task().fromJson($v_0);
            delete parentNode.Task;
        }
        $v_0 = parentNode.Work;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Work'] = ($v_0);
            delete parentNode.Work;
        }
        $v_0 = parentNode.WorkMilliseconds;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['WorkMilliseconds'] = ($v_0);
            delete parentNode.WorkMilliseconds;
        }
    },
    
    $6_2: function PS_PublishedAssignment$$6_2$in($p0) {
        var $v_0 = this.get_fieldValues()[$p0];
        if (SP.ScriptUtility.isUndefined($v_0)) {
            throw Error.create(SP.ResResources.getString('PropertyHasNotBeenInitialized'));
        }
        return $v_0;
    },
    
    refreshLoad: function PS_PublishedAssignment$refreshLoad$in() {ULSyTi:;
        SP.ClientObject.prototype.refreshLoad.call(this);
        this.loadExpandoFields();
    },
    
    loadExpandoFields: function PS_PublishedAssignment$loadExpandoFields$in() {ULSyTi:;
        var $$dict_1 = this.get_fieldValues();
        for (var $$key_2 in $$dict_1) {
            var $v_0 = { key: $$key_2, value: $$dict_1[$$key_2] };
            this.retrieve($v_0.key);
        }
    }
}


PS.PublishedAssignmentPropertyNames = function PS_PublishedAssignmentPropertyNames() {
}


PS.PublishedAssignmentObjectPropertyNames = function PS_PublishedAssignmentObjectPropertyNames() {
}


PS.PublishedAssignmentCollection = function PS_PublishedAssignmentCollection(context, objectPath) {ULSyTi:;
    PS.PublishedAssignmentCollection.initializeBase(this, [ context, objectPath ]);
}
PS.PublishedAssignmentCollection.prototype = {
    
    itemAt: function PS_PublishedAssignmentCollection$itemAt$in(index) {ULSyTi:;
        return this.getItemAtIndex(index);
    },
    
    get_item: function PS_PublishedAssignmentCollection$get_item$in(index) {ULSyTi:;
        return this.getItemAtIndex(index);
    },
    
    get_childItemType: function PS_PublishedAssignmentCollection$get_childItemType$in() {ULSyTi:;
        return PS.PublishedAssignment;
    },
    
    getById: function PS_PublishedAssignmentCollection$getById$in(objectId) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = ((this.get_objectData().get_methodReturnObjects()['GetById']));
        if (SP.ScriptUtility.isNullOrUndefined($v_2)) {
            $v_2 = {};
            this.get_objectData().get_methodReturnObjects()['GetById'] = $v_2;
        }
        $v_1 = (($v_2[objectId]));
        if (!$v_0.get_disableReturnValueCache() && !SP.ScriptUtility.isNullOrUndefined($v_1)) {
            return $v_1;
        }
        $v_1 = new PS.PublishedAssignment($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetById', [ objectId ]));
        if (!$v_0.get_disableReturnValueCache()) {
            $v_2[objectId] = $v_1;
        }
        return $v_1;
    },
    
    getByGuid: function PS_PublishedAssignmentCollection$getByGuid$in(uid) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = ((this.get_objectData().get_methodReturnObjects()['GetByGuid']));
        if (SP.ScriptUtility.isNullOrUndefined($v_2)) {
            $v_2 = {};
            this.get_objectData().get_methodReturnObjects()['GetByGuid'] = $v_2;
        }
        $v_1 = (($v_2[uid.toString()]));
        if (!$v_0.get_disableReturnValueCache() && !SP.ScriptUtility.isNullOrUndefined($v_1)) {
            return $v_1;
        }
        $v_1 = new PS.PublishedAssignment($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetByGuid', [ uid ]));
        if (!$v_0.get_disableReturnValueCache()) {
            $v_2[uid.toString()] = $v_1;
        }
        return $v_1;
    }
}


PS.PublishedProject = function PS_PublishedProject(context, objectPath) {ULSyTi:;
    PS.PublishedProject.initializeBase(this, [ context, objectPath ]);
}
PS.PublishedProject.prototype = {
    
    get_fieldValues: function PS_PublishedProject$get_fieldValues$in() {ULSyTi:;
        var $v_0 = this.get_objectData().get_methodReturnObjects()['$m_dict'];
        if (SP.ScriptUtility.isNullOrUndefined($v_0)) {
            $v_0 = {};
            this.get_objectData().get_methodReturnObjects()['$m_dict'] = $v_0;
        }
        return $v_0;
    },
    
    get_item: function PS_PublishedProject$get_item$in(fieldName) {ULSyTi:;
        return this.$6_2(fieldName);
    },
    
    set_item: function PS_PublishedProject$set_item$in(fieldName, value) {ULSyTi:;
        this.setCustomFieldValue(fieldName, value);
        return value;
    },
    
    get_assignments: function PS_PublishedProject$get_assignments$in() {ULSyTi:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['Assignments']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new PS.PublishedAssignmentCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Assignments'));
            this.get_objectData().get_clientObjectProperties()['Assignments'] = $v_0;
        }
        return $v_0;
    },
    
    get_calendar: function PS_PublishedProject$get_calendar$in() {ULSyTi:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['Calendar']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new PS.Calendar(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Calendar'));
            this.get_objectData().get_clientObjectProperties()['Calendar'] = $v_0;
        }
        return $v_0;
    },
    
    get_currencyCode: function PS_PublishedProject$get_currencyCode$in() {ULSyTi:;
        this.checkUninitializedProperty('CurrencyCode');
        return (this.get_objectData().get_properties()['CurrencyCode']);
    },
    
    get_currencyDigits: function PS_PublishedProject$get_currencyDigits$in() {ULSyTi:;
        this.checkUninitializedProperty('CurrencyDigits');
        return (this.get_objectData().get_properties()['CurrencyDigits']);
    },
    
    get_currencyPosition: function PS_PublishedProject$get_currencyPosition$in() {ULSyTi:;
        this.checkUninitializedProperty('CurrencyPosition');
        return (this.get_objectData().get_properties()['CurrencyPosition']);
    },
    
    get_currencySymbol: function PS_PublishedProject$get_currencySymbol$in() {ULSyTi:;
        this.checkUninitializedProperty('CurrencySymbol');
        return (this.get_objectData().get_properties()['CurrencySymbol']);
    },
    
    get_currentDate: function PS_PublishedProject$get_currentDate$in() {ULSyTi:;
        this.checkUninitializedProperty('CurrentDate');
        return (this.get_objectData().get_properties()['CurrentDate']);
    },
    
    get_daysPerMonth: function PS_PublishedProject$get_daysPerMonth$in() {ULSyTi:;
        this.checkUninitializedProperty('DaysPerMonth');
        return (this.get_objectData().get_properties()['DaysPerMonth']);
    },
    
    get_defaultEffortDriven: function PS_PublishedProject$get_defaultEffortDriven$in() {ULSyTi:;
        this.checkUninitializedProperty('DefaultEffortDriven');
        return (this.get_objectData().get_properties()['DefaultEffortDriven']);
    },
    
    get_defaultEstimatedDuration: function PS_PublishedProject$get_defaultEstimatedDuration$in() {ULSyTi:;
        this.checkUninitializedProperty('DefaultEstimatedDuration');
        return (this.get_objectData().get_properties()['DefaultEstimatedDuration']);
    },
    
    get_defaultFixedCostAccrual: function PS_PublishedProject$get_defaultFixedCostAccrual$in() {ULSyTi:;
        this.checkUninitializedProperty('DefaultFixedCostAccrual');
        return (this.get_objectData().get_properties()['DefaultFixedCostAccrual']);
    },
    
    get_defaultOvertimeRate: function PS_PublishedProject$get_defaultOvertimeRate$in() {ULSyTi:;
        this.checkUninitializedProperty('DefaultOvertimeRate');
        return (this.get_objectData().get_properties()['DefaultOvertimeRate']);
    },
    
    get_defaultStandardRate: function PS_PublishedProject$get_defaultStandardRate$in() {ULSyTi:;
        this.checkUninitializedProperty('DefaultStandardRate');
        return (this.get_objectData().get_properties()['DefaultStandardRate']);
    },
    
    get_defaultTaskType: function PS_PublishedProject$get_defaultTaskType$in() {ULSyTi:;
        this.checkUninitializedProperty('DefaultTaskType');
        return (this.get_objectData().get_properties()['DefaultTaskType']);
    },
    
    get_defaultWorkFormat: function PS_PublishedProject$get_defaultWorkFormat$in() {ULSyTi:;
        this.checkUninitializedProperty('DefaultWorkFormat');
        return (this.get_objectData().get_properties()['DefaultWorkFormat']);
    },
    
    get_description: function PS_PublishedProject$get_description$in() {ULSyTi:;
        this.checkUninitializedProperty('Description');
        return (this.get_objectData().get_properties()['Description']);
    },
    
    get_draft: function PS_PublishedProject$get_draft$in() {ULSyTi:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['Draft']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new PS.DraftProject(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Draft'));
            this.get_objectData().get_clientObjectProperties()['Draft'] = $v_0;
        }
        return $v_0;
    },
    
    get_finishDate: function PS_PublishedProject$get_finishDate$in() {ULSyTi:;
        this.checkUninitializedProperty('FinishDate');
        return (this.get_objectData().get_properties()['FinishDate']);
    },
    
    get_fiscalYearStartMonth: function PS_PublishedProject$get_fiscalYearStartMonth$in() {ULSyTi:;
        this.checkUninitializedProperty('FiscalYearStartMonth');
        return (this.get_objectData().get_properties()['FiscalYearStartMonth']);
    },
    
    get_includeCustomFields: function PS_PublishedProject$get_includeCustomFields$in() {ULSyTi:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['IncludeCustomFields']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new PS.PublishedProject(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'IncludeCustomFields'));
            this.get_objectData().get_clientObjectProperties()['IncludeCustomFields'] = $v_0;
        }
        return $v_0;
    },
    
    get_isEnterpriseProject: function PS_PublishedProject$get_isEnterpriseProject$in() {ULSyTi:;
        this.checkUninitializedProperty('IsEnterpriseProject');
        return (this.get_objectData().get_properties()['IsEnterpriseProject']);
    },
    
    set_isEnterpriseProject: function PS_PublishedProject$set_isEnterpriseProject$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['IsEnterpriseProject'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'IsEnterpriseProject', value));
        }
        return value;
    },
    
    get_minutesPerDay: function PS_PublishedProject$get_minutesPerDay$in() {ULSyTi:;
        this.checkUninitializedProperty('MinutesPerDay');
        return (this.get_objectData().get_properties()['MinutesPerDay']);
    },
    
    get_minutesPerWeek: function PS_PublishedProject$get_minutesPerWeek$in() {ULSyTi:;
        this.checkUninitializedProperty('MinutesPerWeek');
        return (this.get_objectData().get_properties()['MinutesPerWeek']);
    },
    
    get_name: function PS_PublishedProject$get_name$in() {ULSyTi:;
        this.checkUninitializedProperty('Name');
        return (this.get_objectData().get_properties()['Name']);
    },
    
    get_newTasksAreManual: function PS_PublishedProject$get_newTasksAreManual$in() {ULSyTi:;
        this.checkUninitializedProperty('NewTasksAreManual');
        return (this.get_objectData().get_properties()['NewTasksAreManual']);
    },
    
    get_numberFiscalYearFromStart: function PS_PublishedProject$get_numberFiscalYearFromStart$in() {ULSyTi:;
        this.checkUninitializedProperty('NumberFiscalYearFromStart');
        return (this.get_objectData().get_properties()['NumberFiscalYearFromStart']);
    },
    
    get_owner: function PS_PublishedProject$get_owner$in() {ULSyTi:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['Owner']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.User(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Owner'));
            this.get_objectData().get_clientObjectProperties()['Owner'] = $v_0;
        }
        return $v_0;
    },
    
    set_owner: function PS_PublishedProject$set_owner$in(value) {ULSyTi:;
        this.get_objectData().get_clientObjectProperties()['Owner'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Owner', value));
        }
        return value;
    },
    
    get_projectIdentifier: function PS_PublishedProject$get_projectIdentifier$in() {ULSyTi:;
        this.checkUninitializedProperty('ProjectIdentifier');
        return (this.get_objectData().get_properties()['ProjectIdentifier']);
    },
    
    get_projectResources: function PS_PublishedProject$get_projectResources$in() {ULSyTi:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['ProjectResources']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new PS.PublishedProjectResourceCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'ProjectResources'));
            this.get_objectData().get_clientObjectProperties()['ProjectResources'] = $v_0;
        }
        return $v_0;
    },
    
    get_protectedActualsSynch: function PS_PublishedProject$get_protectedActualsSynch$in() {ULSyTi:;
        this.checkUninitializedProperty('ProtectedActualsSynch');
        return (this.get_objectData().get_properties()['ProtectedActualsSynch']);
    },
    
    get_showEstimatedDurations: function PS_PublishedProject$get_showEstimatedDurations$in() {ULSyTi:;
        this.checkUninitializedProperty('ShowEstimatedDurations');
        return (this.get_objectData().get_properties()['ShowEstimatedDurations']);
    },
    
    get_startDate: function PS_PublishedProject$get_startDate$in() {ULSyTi:;
        this.checkUninitializedProperty('StartDate');
        return (this.get_objectData().get_properties()['StartDate']);
    },
    
    get_statusDate: function PS_PublishedProject$get_statusDate$in() {ULSyTi:;
        this.checkUninitializedProperty('StatusDate');
        return (this.get_objectData().get_properties()['StatusDate']);
    },
    
    get_taskLinks: function PS_PublishedProject$get_taskLinks$in() {ULSyTi:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['TaskLinks']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new PS.PublishedTaskLinkCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'TaskLinks'));
            this.get_objectData().get_clientObjectProperties()['TaskLinks'] = $v_0;
        }
        return $v_0;
    },
    
    get_tasks: function PS_PublishedProject$get_tasks$in() {ULSyTi:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['Tasks']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new PS.PublishedTaskCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Tasks'));
            this.get_objectData().get_clientObjectProperties()['Tasks'] = $v_0;
        }
        return $v_0;
    },
    
    get_trackingMode: function PS_PublishedProject$get_trackingMode$in() {ULSyTi:;
        this.checkUninitializedProperty('TrackingMode');
        return (this.get_objectData().get_properties()['TrackingMode']);
    },
    
    get_utilizationDate: function PS_PublishedProject$get_utilizationDate$in() {ULSyTi:;
        this.checkUninitializedProperty('UtilizationDate');
        return (this.get_objectData().get_properties()['UtilizationDate']);
    },
    
    get_utilizationType: function PS_PublishedProject$get_utilizationType$in() {ULSyTi:;
        this.checkUninitializedProperty('UtilizationType');
        return (this.get_objectData().get_properties()['UtilizationType']);
    },
    
    get_weekStartDay: function PS_PublishedProject$get_weekStartDay$in() {ULSyTi:;
        this.checkUninitializedProperty('WeekStartDay');
        return (this.get_objectData().get_properties()['WeekStartDay']);
    },
    
    get_winprojVersion: function PS_PublishedProject$get_winprojVersion$in() {ULSyTi:;
        this.checkUninitializedProperty('WinprojVersion');
        return (this.get_objectData().get_properties()['WinprojVersion']);
    },
    
    initNonPropertiesFromJson: function PS_PublishedProject$initNonPropertiesFromJson$in(parentNode) {ULSyTi:;
        SP.DataConvert.populateDictionaryFromObject(this.get_fieldValues(), parentNode);
        SP.DataConvert.fixupTypes(this.get_context(), this.get_fieldValues());
    },
    
    initPropertiesFromJson: function PS_PublishedProject$initPropertiesFromJson$in(parentNode) {ULSyTi:;
        PS.Project.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.Assignments;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('Assignments', this.get_assignments(), $v_0);
            this.get_assignments().fromJson($v_0);
            delete parentNode.Assignments;
        }
        $v_0 = parentNode.Calendar;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('Calendar', this.get_calendar(), $v_0);
            this.get_calendar().fromJson($v_0);
            delete parentNode.Calendar;
        }
        $v_0 = parentNode.CurrencyCode;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['CurrencyCode'] = ($v_0);
            delete parentNode.CurrencyCode;
        }
        $v_0 = parentNode.CurrencyDigits;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['CurrencyDigits'] = ($v_0);
            delete parentNode.CurrencyDigits;
        }
        $v_0 = parentNode.CurrencyPosition;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['CurrencyPosition'] = ((SP.DataConvert.fixupType(this.get_context(), $v_0)));
            delete parentNode.CurrencyPosition;
        }
        $v_0 = parentNode.CurrencySymbol;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['CurrencySymbol'] = ($v_0);
            delete parentNode.CurrencySymbol;
        }
        $v_0 = parentNode.CurrentDate;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['CurrentDate'] = ($v_0);
            delete parentNode.CurrentDate;
        }
        $v_0 = parentNode.DaysPerMonth;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['DaysPerMonth'] = ($v_0);
            delete parentNode.DaysPerMonth;
        }
        $v_0 = parentNode.DefaultEffortDriven;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['DefaultEffortDriven'] = ($v_0);
            delete parentNode.DefaultEffortDriven;
        }
        $v_0 = parentNode.DefaultEstimatedDuration;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['DefaultEstimatedDuration'] = ($v_0);
            delete parentNode.DefaultEstimatedDuration;
        }
        $v_0 = parentNode.DefaultFixedCostAccrual;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['DefaultFixedCostAccrual'] = ((SP.DataConvert.fixupType(this.get_context(), $v_0)));
            delete parentNode.DefaultFixedCostAccrual;
        }
        $v_0 = parentNode.DefaultOvertimeRate;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['DefaultOvertimeRate'] = ($v_0);
            delete parentNode.DefaultOvertimeRate;
        }
        $v_0 = parentNode.DefaultStandardRate;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['DefaultStandardRate'] = ($v_0);
            delete parentNode.DefaultStandardRate;
        }
        $v_0 = parentNode.DefaultTaskType;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['DefaultTaskType'] = ((SP.DataConvert.fixupType(this.get_context(), $v_0)));
            delete parentNode.DefaultTaskType;
        }
        $v_0 = parentNode.DefaultWorkFormat;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['DefaultWorkFormat'] = ((SP.DataConvert.fixupType(this.get_context(), $v_0)));
            delete parentNode.DefaultWorkFormat;
        }
        $v_0 = parentNode.Description;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Description'] = ($v_0);
            delete parentNode.Description;
        }
        $v_0 = parentNode.Draft;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('Draft', this.get_draft(), $v_0);
            this.get_draft().fromJson($v_0);
            delete parentNode.Draft;
        }
        $v_0 = parentNode.FinishDate;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['FinishDate'] = ($v_0);
            delete parentNode.FinishDate;
        }
        $v_0 = parentNode.FiscalYearStartMonth;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['FiscalYearStartMonth'] = ($v_0);
            delete parentNode.FiscalYearStartMonth;
        }
        $v_0 = parentNode.IncludeCustomFields;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('IncludeCustomFields', this.get_includeCustomFields(), $v_0);
            this.get_includeCustomFields().fromJson($v_0);
            delete parentNode.IncludeCustomFields;
        }
        $v_0 = parentNode.IsEnterpriseProject;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['IsEnterpriseProject'] = ($v_0);
            delete parentNode.IsEnterpriseProject;
        }
        $v_0 = parentNode.MinutesPerDay;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['MinutesPerDay'] = ($v_0);
            delete parentNode.MinutesPerDay;
        }
        $v_0 = parentNode.MinutesPerWeek;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['MinutesPerWeek'] = ($v_0);
            delete parentNode.MinutesPerWeek;
        }
        $v_0 = parentNode.Name;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Name'] = ($v_0);
            delete parentNode.Name;
        }
        $v_0 = parentNode.NewTasksAreManual;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['NewTasksAreManual'] = ($v_0);
            delete parentNode.NewTasksAreManual;
        }
        $v_0 = parentNode.NumberFiscalYearFromStart;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['NumberFiscalYearFromStart'] = ($v_0);
            delete parentNode.NumberFiscalYearFromStart;
        }
        $v_0 = parentNode.Owner;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('Owner', this.get_owner(), $v_0);
            this.get_owner().fromJson($v_0);
            delete parentNode.Owner;
        }
        $v_0 = parentNode.ProjectIdentifier;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ProjectIdentifier'] = ($v_0);
            delete parentNode.ProjectIdentifier;
        }
        $v_0 = parentNode.ProjectResources;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('ProjectResources', this.get_projectResources(), $v_0);
            this.get_projectResources().fromJson($v_0);
            delete parentNode.ProjectResources;
        }
        $v_0 = parentNode.ProtectedActualsSynch;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ProtectedActualsSynch'] = ($v_0);
            delete parentNode.ProtectedActualsSynch;
        }
        $v_0 = parentNode.ShowEstimatedDurations;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ShowEstimatedDurations'] = ($v_0);
            delete parentNode.ShowEstimatedDurations;
        }
        $v_0 = parentNode.StartDate;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['StartDate'] = ($v_0);
            delete parentNode.StartDate;
        }
        $v_0 = parentNode.StatusDate;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['StatusDate'] = ($v_0);
            delete parentNode.StatusDate;
        }
        $v_0 = parentNode.TaskLinks;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('TaskLinks', this.get_taskLinks(), $v_0);
            this.get_taskLinks().fromJson($v_0);
            delete parentNode.TaskLinks;
        }
        $v_0 = parentNode.Tasks;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('Tasks', this.get_tasks(), $v_0);
            this.get_tasks().fromJson($v_0);
            delete parentNode.Tasks;
        }
        $v_0 = parentNode.TrackingMode;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['TrackingMode'] = ((SP.DataConvert.fixupType(this.get_context(), $v_0)));
            delete parentNode.TrackingMode;
        }
        $v_0 = parentNode.UtilizationDate;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['UtilizationDate'] = ($v_0);
            delete parentNode.UtilizationDate;
        }
        $v_0 = parentNode.UtilizationType;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['UtilizationType'] = ((SP.DataConvert.fixupType(this.get_context(), $v_0)));
            delete parentNode.UtilizationType;
        }
        $v_0 = parentNode.WeekStartDay;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['WeekStartDay'] = ($v_0);
            delete parentNode.WeekStartDay;
        }
        $v_0 = parentNode.WinprojVersion;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['WinprojVersion'] = ($v_0);
            delete parentNode.WinprojVersion;
        }
    },
    
    $6_2: function PS_PublishedProject$$6_2$in($p0) {
        var $v_0 = this.get_fieldValues()[$p0];
        if (SP.ScriptUtility.isUndefined($v_0)) {
            throw Error.create(SP.ResResources.getString('PropertyHasNotBeenInitialized'));
        }
        return $v_0;
    },
    
    refreshLoad: function PS_PublishedProject$refreshLoad$in() {ULSyTi:;
        SP.ClientObject.prototype.refreshLoad.call(this);
        this.loadExpandoFields();
    },
    
    loadExpandoFields: function PS_PublishedProject$loadExpandoFields$in() {ULSyTi:;
        var $$dict_1 = this.get_fieldValues();
        for (var $$key_2 in $$dict_1) {
            var $v_0 = { key: $$key_2, value: $$dict_1[$$key_2] };
            this.retrieve($v_0.key);
        }
    },
    
    checkOut: function PS_PublishedProject$checkOut$in() {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        $v_1 = new PS.DraftProject($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'CheckOut', null));
        $v_1.get_path().setPendingReplace();
        var $v_2 = new SP.ObjectIdentityQuery($v_1.get_path());
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        $v_0.addQuery($v_2);
        var $v_3 = new SP.ObjectIdentityQuery(this.get_path());
        this.get_context().addQueryIdAndResultObject($v_3.get_id(), this);
        this.get_context().addQuery($v_3);
        return $v_1;
    },
    
    submitToWorkflow: function PS_PublishedProject$submitToWorkflow$in() {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'SubmitToWorkflow', null);
        $v_0.addQuery($v_1);
    },
    
    deleteObject: function PS_PublishedProject$deleteObject$in() {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        $v_1 = new PS.QueueJob($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'DeleteObject', null));
        this.removeFromParentCollection();
        return $v_1;
    },
    
    updateVisibilityCustomFields: function PS_PublishedProject$updateVisibilityCustomFields$in() {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        $v_1 = new PS.QueueJob($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'UpdateVisibilityCustomFields', null));
        return $v_1;
    },
    
    createProjectSite: function PS_PublishedProject$createProjectSite$in(siteName) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'CreateProjectSite', [ siteName ]);
        $v_0.addQuery($v_1);
    }
}


PS.PublishedProjectPropertyNames = function PS_PublishedProjectPropertyNames() {
}


PS.PublishedProjectObjectPropertyNames = function PS_PublishedProjectObjectPropertyNames() {
}


PS.PublishedProjectResource = function PS_PublishedProjectResource(context, objectPath) {ULSyTi:;
    PS.PublishedProjectResource.initializeBase(this, [ context, objectPath ]);
}
PS.PublishedProjectResource.prototype = {
    
    get_fieldValues: function PS_PublishedProjectResource$get_fieldValues$in() {ULSyTi:;
        var $v_0 = this.get_objectData().get_methodReturnObjects()['$m_dict'];
        if (SP.ScriptUtility.isNullOrUndefined($v_0)) {
            $v_0 = {};
            this.get_objectData().get_methodReturnObjects()['$m_dict'] = $v_0;
        }
        return $v_0;
    },
    
    get_item: function PS_PublishedProjectResource$get_item$in(fieldName) {ULSyTi:;
        return this.$6_2(fieldName);
    },
    
    get_assignments: function PS_PublishedProjectResource$get_assignments$in() {ULSyTi:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['Assignments']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new PS.PublishedAssignmentCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Assignments'));
            this.get_objectData().get_clientObjectProperties()['Assignments'] = $v_0;
        }
        return $v_0;
    },
    
    get_canLevel: function PS_PublishedProjectResource$get_canLevel$in() {ULSyTi:;
        this.checkUninitializedProperty('CanLevel');
        return (this.get_objectData().get_properties()['CanLevel']);
    },
    
    get_code: function PS_PublishedProjectResource$get_code$in() {ULSyTi:;
        this.checkUninitializedProperty('Code');
        return (this.get_objectData().get_properties()['Code']);
    },
    
    get_costAccrual: function PS_PublishedProjectResource$get_costAccrual$in() {ULSyTi:;
        this.checkUninitializedProperty('CostAccrual');
        return (this.get_objectData().get_properties()['CostAccrual']);
    },
    
    get_costCenter: function PS_PublishedProjectResource$get_costCenter$in() {ULSyTi:;
        this.checkUninitializedProperty('CostCenter');
        return (this.get_objectData().get_properties()['CostCenter']);
    },
    
    get_costPerUse: function PS_PublishedProjectResource$get_costPerUse$in() {ULSyTi:;
        this.checkUninitializedProperty('CostPerUse');
        return (this.get_objectData().get_properties()['CostPerUse']);
    },
    
    get_defaultAssignmentOwner: function PS_PublishedProjectResource$get_defaultAssignmentOwner$in() {ULSyTi:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['DefaultAssignmentOwner']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.User(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'DefaultAssignmentOwner'));
            this.get_objectData().get_clientObjectProperties()['DefaultAssignmentOwner'] = $v_0;
        }
        return $v_0;
    },
    
    get_defaultBookingType: function PS_PublishedProjectResource$get_defaultBookingType$in() {ULSyTi:;
        this.checkUninitializedProperty('DefaultBookingType');
        return (this.get_objectData().get_properties()['DefaultBookingType']);
    },
    
    get_email: function PS_PublishedProjectResource$get_email$in() {ULSyTi:;
        this.checkUninitializedProperty('Email');
        return (this.get_objectData().get_properties()['Email']);
    },
    
    get_group: function PS_PublishedProjectResource$get_group$in() {ULSyTi:;
        this.checkUninitializedProperty('Group');
        return (this.get_objectData().get_properties()['Group']);
    },
    
    get_initials: function PS_PublishedProjectResource$get_initials$in() {ULSyTi:;
        this.checkUninitializedProperty('Initials');
        return (this.get_objectData().get_properties()['Initials']);
    },
    
    get_materialLabel: function PS_PublishedProjectResource$get_materialLabel$in() {ULSyTi:;
        this.checkUninitializedProperty('MaterialLabel');
        return (this.get_objectData().get_properties()['MaterialLabel']);
    },
    
    get_maximumCapacity: function PS_PublishedProjectResource$get_maximumCapacity$in() {ULSyTi:;
        this.checkUninitializedProperty('MaximumCapacity');
        return (this.get_objectData().get_properties()['MaximumCapacity']);
    },
    
    get_name: function PS_PublishedProjectResource$get_name$in() {ULSyTi:;
        this.checkUninitializedProperty('Name');
        return (this.get_objectData().get_properties()['Name']);
    },
    
    get_overtimeRate: function PS_PublishedProjectResource$get_overtimeRate$in() {ULSyTi:;
        this.checkUninitializedProperty('OvertimeRate');
        return (this.get_objectData().get_properties()['OvertimeRate']);
    },
    
    get_overtimeRateUnits: function PS_PublishedProjectResource$get_overtimeRateUnits$in() {ULSyTi:;
        this.checkUninitializedProperty('OvertimeRateUnits');
        return (this.get_objectData().get_properties()['OvertimeRateUnits']);
    },
    
    get_phonetics: function PS_PublishedProjectResource$get_phonetics$in() {ULSyTi:;
        this.checkUninitializedProperty('Phonetics');
        return (this.get_objectData().get_properties()['Phonetics']);
    },
    
    get_standardRate: function PS_PublishedProjectResource$get_standardRate$in() {ULSyTi:;
        this.checkUninitializedProperty('StandardRate');
        return (this.get_objectData().get_properties()['StandardRate']);
    },
    
    get_standardRateUnits: function PS_PublishedProjectResource$get_standardRateUnits$in() {ULSyTi:;
        this.checkUninitializedProperty('StandardRateUnits');
        return (this.get_objectData().get_properties()['StandardRateUnits']);
    },
    
    initNonPropertiesFromJson: function PS_PublishedProjectResource$initNonPropertiesFromJson$in(parentNode) {ULSyTi:;
        SP.DataConvert.populateDictionaryFromObject(this.get_fieldValues(), parentNode);
        SP.DataConvert.fixupTypes(this.get_context(), this.get_fieldValues());
    },
    
    initPropertiesFromJson: function PS_PublishedProjectResource$initPropertiesFromJson$in(parentNode) {ULSyTi:;
        PS.ProjectResource.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.Assignments;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('Assignments', this.get_assignments(), $v_0);
            this.get_assignments().fromJson($v_0);
            delete parentNode.Assignments;
        }
        $v_0 = parentNode.CanLevel;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['CanLevel'] = ($v_0);
            delete parentNode.CanLevel;
        }
        $v_0 = parentNode.Code;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Code'] = ($v_0);
            delete parentNode.Code;
        }
        $v_0 = parentNode.CostAccrual;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['CostAccrual'] = ((SP.DataConvert.fixupType(this.get_context(), $v_0)));
            delete parentNode.CostAccrual;
        }
        $v_0 = parentNode.CostCenter;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['CostCenter'] = ($v_0);
            delete parentNode.CostCenter;
        }
        $v_0 = parentNode.CostPerUse;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['CostPerUse'] = ($v_0);
            delete parentNode.CostPerUse;
        }
        $v_0 = parentNode.DefaultAssignmentOwner;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('DefaultAssignmentOwner', this.get_defaultAssignmentOwner(), $v_0);
            this.get_defaultAssignmentOwner().fromJson($v_0);
            delete parentNode.DefaultAssignmentOwner;
        }
        $v_0 = parentNode.DefaultBookingType;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['DefaultBookingType'] = ((SP.DataConvert.fixupType(this.get_context(), $v_0)));
            delete parentNode.DefaultBookingType;
        }
        $v_0 = parentNode.Email;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Email'] = ($v_0);
            delete parentNode.Email;
        }
        $v_0 = parentNode.Group;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Group'] = ($v_0);
            delete parentNode.Group;
        }
        $v_0 = parentNode.Initials;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Initials'] = ($v_0);
            delete parentNode.Initials;
        }
        $v_0 = parentNode.MaterialLabel;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['MaterialLabel'] = ($v_0);
            delete parentNode.MaterialLabel;
        }
        $v_0 = parentNode.MaximumCapacity;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['MaximumCapacity'] = ($v_0);
            delete parentNode.MaximumCapacity;
        }
        $v_0 = parentNode.Name;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Name'] = ($v_0);
            delete parentNode.Name;
        }
        $v_0 = parentNode.OvertimeRate;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['OvertimeRate'] = ($v_0);
            delete parentNode.OvertimeRate;
        }
        $v_0 = parentNode.OvertimeRateUnits;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['OvertimeRateUnits'] = ((SP.DataConvert.fixupType(this.get_context(), $v_0)));
            delete parentNode.OvertimeRateUnits;
        }
        $v_0 = parentNode.Phonetics;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Phonetics'] = ($v_0);
            delete parentNode.Phonetics;
        }
        $v_0 = parentNode.StandardRate;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['StandardRate'] = ($v_0);
            delete parentNode.StandardRate;
        }
        $v_0 = parentNode.StandardRateUnits;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['StandardRateUnits'] = ((SP.DataConvert.fixupType(this.get_context(), $v_0)));
            delete parentNode.StandardRateUnits;
        }
    },
    
    $6_2: function PS_PublishedProjectResource$$6_2$in($p0) {
        var $v_0 = this.get_fieldValues()[$p0];
        if (SP.ScriptUtility.isUndefined($v_0)) {
            throw Error.create(SP.ResResources.getString('PropertyHasNotBeenInitialized'));
        }
        return $v_0;
    },
    
    refreshLoad: function PS_PublishedProjectResource$refreshLoad$in() {ULSyTi:;
        SP.ClientObject.prototype.refreshLoad.call(this);
        this.loadExpandoFields();
    },
    
    loadExpandoFields: function PS_PublishedProjectResource$loadExpandoFields$in() {ULSyTi:;
        var $$dict_1 = this.get_fieldValues();
        for (var $$key_2 in $$dict_1) {
            var $v_0 = { key: $$key_2, value: $$dict_1[$$key_2] };
            this.retrieve($v_0.key);
        }
    }
}


PS.PublishedProjectResourcePropertyNames = function PS_PublishedProjectResourcePropertyNames() {
}


PS.PublishedProjectResourceObjectPropertyNames = function PS_PublishedProjectResourceObjectPropertyNames() {
}


PS.PublishedProjectResourceCollection = function PS_PublishedProjectResourceCollection(context, objectPath) {ULSyTi:;
    PS.PublishedProjectResourceCollection.initializeBase(this, [ context, objectPath ]);
}
PS.PublishedProjectResourceCollection.prototype = {
    
    itemAt: function PS_PublishedProjectResourceCollection$itemAt$in(index) {ULSyTi:;
        return this.getItemAtIndex(index);
    },
    
    get_item: function PS_PublishedProjectResourceCollection$get_item$in(index) {ULSyTi:;
        return this.getItemAtIndex(index);
    },
    
    get_childItemType: function PS_PublishedProjectResourceCollection$get_childItemType$in() {ULSyTi:;
        return PS.PublishedProjectResource;
    },
    
    getById: function PS_PublishedProjectResourceCollection$getById$in(objectId) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = ((this.get_objectData().get_methodReturnObjects()['GetById']));
        if (SP.ScriptUtility.isNullOrUndefined($v_2)) {
            $v_2 = {};
            this.get_objectData().get_methodReturnObjects()['GetById'] = $v_2;
        }
        $v_1 = (($v_2[objectId]));
        if (!$v_0.get_disableReturnValueCache() && !SP.ScriptUtility.isNullOrUndefined($v_1)) {
            return $v_1;
        }
        $v_1 = new PS.PublishedProjectResource($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetById', [ objectId ]));
        if (!$v_0.get_disableReturnValueCache()) {
            $v_2[objectId] = $v_1;
        }
        return $v_1;
    },
    
    getByGuid: function PS_PublishedProjectResourceCollection$getByGuid$in(uid) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = ((this.get_objectData().get_methodReturnObjects()['GetByGuid']));
        if (SP.ScriptUtility.isNullOrUndefined($v_2)) {
            $v_2 = {};
            this.get_objectData().get_methodReturnObjects()['GetByGuid'] = $v_2;
        }
        $v_1 = (($v_2[uid.toString()]));
        if (!$v_0.get_disableReturnValueCache() && !SP.ScriptUtility.isNullOrUndefined($v_1)) {
            return $v_1;
        }
        $v_1 = new PS.PublishedProjectResource($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetByGuid', [ uid ]));
        if (!$v_0.get_disableReturnValueCache()) {
            $v_2[uid.toString()] = $v_1;
        }
        return $v_1;
    }
}


PS.PublishedTask = function PS_PublishedTask(context, objectPath) {ULSyTi:;
    PS.PublishedTask.initializeBase(this, [ context, objectPath ]);
}
PS.PublishedTask.prototype = {
    
    get_fieldValues: function PS_PublishedTask$get_fieldValues$in() {ULSyTi:;
        var $v_0 = this.get_objectData().get_methodReturnObjects()['$m_dict'];
        if (SP.ScriptUtility.isNullOrUndefined($v_0)) {
            $v_0 = {};
            this.get_objectData().get_methodReturnObjects()['$m_dict'] = $v_0;
        }
        return $v_0;
    },
    
    get_item: function PS_PublishedTask$get_item$in(fieldName) {ULSyTi:;
        return this.$6_2(fieldName);
    },
    
    get_actualCost: function PS_PublishedTask$get_actualCost$in() {ULSyTi:;
        this.checkUninitializedProperty('ActualCost');
        return (this.get_objectData().get_properties()['ActualCost']);
    },
    
    get_actualFinish: function PS_PublishedTask$get_actualFinish$in() {ULSyTi:;
        this.checkUninitializedProperty('ActualFinish');
        return (this.get_objectData().get_properties()['ActualFinish']);
    },
    
    get_actualStart: function PS_PublishedTask$get_actualStart$in() {ULSyTi:;
        this.checkUninitializedProperty('ActualStart');
        return (this.get_objectData().get_properties()['ActualStart']);
    },
    
    get_actualWork: function PS_PublishedTask$get_actualWork$in() {ULSyTi:;
        this.checkUninitializedProperty('ActualWork');
        return (this.get_objectData().get_properties()['ActualWork']);
    },
    
    get_actualWorkMilliseconds: function PS_PublishedTask$get_actualWorkMilliseconds$in() {ULSyTi:;
        this.checkUninitializedProperty('ActualWorkMilliseconds');
        return (this.get_objectData().get_properties()['ActualWorkMilliseconds']);
    },
    
    get_assignments: function PS_PublishedTask$get_assignments$in() {ULSyTi:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['Assignments']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new PS.PublishedAssignmentCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Assignments'));
            this.get_objectData().get_clientObjectProperties()['Assignments'] = $v_0;
        }
        return $v_0;
    },
    
    get_budgetWork: function PS_PublishedTask$get_budgetWork$in() {ULSyTi:;
        this.checkUninitializedProperty('BudgetWork');
        return (this.get_objectData().get_properties()['BudgetWork']);
    },
    
    get_budgetWorkMilliseconds: function PS_PublishedTask$get_budgetWorkMilliseconds$in() {ULSyTi:;
        this.checkUninitializedProperty('BudgetWorkMilliseconds');
        return (this.get_objectData().get_properties()['BudgetWorkMilliseconds']);
    },
    
    get_calendar: function PS_PublishedTask$get_calendar$in() {ULSyTi:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['Calendar']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new PS.Calendar(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Calendar'));
            this.get_objectData().get_clientObjectProperties()['Calendar'] = $v_0;
        }
        return $v_0;
    },
    
    get_completion: function PS_PublishedTask$get_completion$in() {ULSyTi:;
        this.checkUninitializedProperty('Completion');
        return (this.get_objectData().get_properties()['Completion']);
    },
    
    get_constraintStartEnd: function PS_PublishedTask$get_constraintStartEnd$in() {ULSyTi:;
        this.checkUninitializedProperty('ConstraintStartEnd');
        return (this.get_objectData().get_properties()['ConstraintStartEnd']);
    },
    
    get_constraintType: function PS_PublishedTask$get_constraintType$in() {ULSyTi:;
        this.checkUninitializedProperty('ConstraintType');
        return (this.get_objectData().get_properties()['ConstraintType']);
    },
    
    get_cost: function PS_PublishedTask$get_cost$in() {ULSyTi:;
        this.checkUninitializedProperty('Cost');
        return (this.get_objectData().get_properties()['Cost']);
    },
    
    get_deadline: function PS_PublishedTask$get_deadline$in() {ULSyTi:;
        this.checkUninitializedProperty('Deadline');
        return (this.get_objectData().get_properties()['Deadline']);
    },
    
    get_duration: function PS_PublishedTask$get_duration$in() {ULSyTi:;
        this.checkUninitializedProperty('Duration');
        return (this.get_objectData().get_properties()['Duration']);
    },
    
    get_durationMilliseconds: function PS_PublishedTask$get_durationMilliseconds$in() {ULSyTi:;
        this.checkUninitializedProperty('DurationMilliseconds');
        return (this.get_objectData().get_properties()['DurationMilliseconds']);
    },
    
    get_finish: function PS_PublishedTask$get_finish$in() {ULSyTi:;
        this.checkUninitializedProperty('Finish');
        return (this.get_objectData().get_properties()['Finish']);
    },
    
    get_finishText: function PS_PublishedTask$get_finishText$in() {ULSyTi:;
        this.checkUninitializedProperty('FinishText');
        return (this.get_objectData().get_properties()['FinishText']);
    },
    
    get_fixedCost: function PS_PublishedTask$get_fixedCost$in() {ULSyTi:;
        this.checkUninitializedProperty('FixedCost');
        return (this.get_objectData().get_properties()['FixedCost']);
    },
    
    get_isActive: function PS_PublishedTask$get_isActive$in() {ULSyTi:;
        this.checkUninitializedProperty('IsActive');
        return (this.get_objectData().get_properties()['IsActive']);
    },
    
    get_isLockedByManager: function PS_PublishedTask$get_isLockedByManager$in() {ULSyTi:;
        this.checkUninitializedProperty('IsLockedByManager');
        return (this.get_objectData().get_properties()['IsLockedByManager']);
    },
    
    get_isManual: function PS_PublishedTask$get_isManual$in() {ULSyTi:;
        this.checkUninitializedProperty('IsManual');
        return (this.get_objectData().get_properties()['IsManual']);
    },
    
    get_isMarked: function PS_PublishedTask$get_isMarked$in() {ULSyTi:;
        this.checkUninitializedProperty('IsMarked');
        return (this.get_objectData().get_properties()['IsMarked']);
    },
    
    get_isMilestone: function PS_PublishedTask$get_isMilestone$in() {ULSyTi:;
        this.checkUninitializedProperty('IsMilestone');
        return (this.get_objectData().get_properties()['IsMilestone']);
    },
    
    get_levelingAdjustsAssignments: function PS_PublishedTask$get_levelingAdjustsAssignments$in() {ULSyTi:;
        this.checkUninitializedProperty('LevelingAdjustsAssignments');
        return (this.get_objectData().get_properties()['LevelingAdjustsAssignments']);
    },
    
    get_levelingCanSplit: function PS_PublishedTask$get_levelingCanSplit$in() {ULSyTi:;
        this.checkUninitializedProperty('LevelingCanSplit');
        return (this.get_objectData().get_properties()['LevelingCanSplit']);
    },
    
    get_name: function PS_PublishedTask$get_name$in() {ULSyTi:;
        this.checkUninitializedProperty('Name');
        return (this.get_objectData().get_properties()['Name']);
    },
    
    get_outlineLevel: function PS_PublishedTask$get_outlineLevel$in() {ULSyTi:;
        this.checkUninitializedProperty('OutlineLevel');
        return (this.get_objectData().get_properties()['OutlineLevel']);
    },
    
    get_parent: function PS_PublishedTask$get_parent$in() {ULSyTi:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['Parent']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new PS.PublishedTask(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Parent'));
            this.get_objectData().get_clientObjectProperties()['Parent'] = $v_0;
        }
        return $v_0;
    },
    
    get_percentComplete: function PS_PublishedTask$get_percentComplete$in() {ULSyTi:;
        this.checkUninitializedProperty('PercentComplete');
        return (this.get_objectData().get_properties()['PercentComplete']);
    },
    
    get_percentPhysicalWorkComplete: function PS_PublishedTask$get_percentPhysicalWorkComplete$in() {ULSyTi:;
        this.checkUninitializedProperty('PercentPhysicalWorkComplete');
        return (this.get_objectData().get_properties()['PercentPhysicalWorkComplete']);
    },
    
    get_predecessors: function PS_PublishedTask$get_predecessors$in() {ULSyTi:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['Predecessors']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new PS.PublishedTaskLinkCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Predecessors'));
            this.get_objectData().get_clientObjectProperties()['Predecessors'] = $v_0;
        }
        return $v_0;
    },
    
    get_priority: function PS_PublishedTask$get_priority$in() {ULSyTi:;
        this.checkUninitializedProperty('Priority');
        return (this.get_objectData().get_properties()['Priority']);
    },
    
    get_remainingDuration: function PS_PublishedTask$get_remainingDuration$in() {ULSyTi:;
        this.checkUninitializedProperty('RemainingDuration');
        return (this.get_objectData().get_properties()['RemainingDuration']);
    },
    
    get_remainingDurationMilliseconds: function PS_PublishedTask$get_remainingDurationMilliseconds$in() {ULSyTi:;
        this.checkUninitializedProperty('RemainingDurationMilliseconds');
        return (this.get_objectData().get_properties()['RemainingDurationMilliseconds']);
    },
    
    get_start: function PS_PublishedTask$get_start$in() {ULSyTi:;
        this.checkUninitializedProperty('Start');
        return (this.get_objectData().get_properties()['Start']);
    },
    
    get_startText: function PS_PublishedTask$get_startText$in() {ULSyTi:;
        this.checkUninitializedProperty('StartText');
        return (this.get_objectData().get_properties()['StartText']);
    },
    
    get_successors: function PS_PublishedTask$get_successors$in() {ULSyTi:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['Successors']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new PS.PublishedTaskLinkCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Successors'));
            this.get_objectData().get_clientObjectProperties()['Successors'] = $v_0;
        }
        return $v_0;
    },
    
    get_usePercentPhysicalWorkComplete: function PS_PublishedTask$get_usePercentPhysicalWorkComplete$in() {ULSyTi:;
        this.checkUninitializedProperty('UsePercentPhysicalWorkComplete');
        return (this.get_objectData().get_properties()['UsePercentPhysicalWorkComplete']);
    },
    
    get_work: function PS_PublishedTask$get_work$in() {ULSyTi:;
        this.checkUninitializedProperty('Work');
        return (this.get_objectData().get_properties()['Work']);
    },
    
    get_workMilliseconds: function PS_PublishedTask$get_workMilliseconds$in() {ULSyTi:;
        this.checkUninitializedProperty('WorkMilliseconds');
        return (this.get_objectData().get_properties()['WorkMilliseconds']);
    },
    
    initNonPropertiesFromJson: function PS_PublishedTask$initNonPropertiesFromJson$in(parentNode) {ULSyTi:;
        SP.DataConvert.populateDictionaryFromObject(this.get_fieldValues(), parentNode);
        SP.DataConvert.fixupTypes(this.get_context(), this.get_fieldValues());
    },
    
    initPropertiesFromJson: function PS_PublishedTask$initPropertiesFromJson$in(parentNode) {ULSyTi:;
        PS.Task.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.ActualCost;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ActualCost'] = ($v_0);
            delete parentNode.ActualCost;
        }
        $v_0 = parentNode.ActualFinish;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ActualFinish'] = ($v_0);
            delete parentNode.ActualFinish;
        }
        $v_0 = parentNode.ActualStart;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ActualStart'] = ($v_0);
            delete parentNode.ActualStart;
        }
        $v_0 = parentNode.ActualWork;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ActualWork'] = ($v_0);
            delete parentNode.ActualWork;
        }
        $v_0 = parentNode.ActualWorkMilliseconds;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ActualWorkMilliseconds'] = ($v_0);
            delete parentNode.ActualWorkMilliseconds;
        }
        $v_0 = parentNode.Assignments;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('Assignments', this.get_assignments(), $v_0);
            this.get_assignments().fromJson($v_0);
            delete parentNode.Assignments;
        }
        $v_0 = parentNode.BudgetWork;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['BudgetWork'] = ($v_0);
            delete parentNode.BudgetWork;
        }
        $v_0 = parentNode.BudgetWorkMilliseconds;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['BudgetWorkMilliseconds'] = ($v_0);
            delete parentNode.BudgetWorkMilliseconds;
        }
        $v_0 = parentNode.Calendar;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('Calendar', this.get_calendar(), $v_0);
            this.get_calendar().fromJson($v_0);
            delete parentNode.Calendar;
        }
        $v_0 = parentNode.Completion;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Completion'] = ($v_0);
            delete parentNode.Completion;
        }
        $v_0 = parentNode.ConstraintStartEnd;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ConstraintStartEnd'] = ($v_0);
            delete parentNode.ConstraintStartEnd;
        }
        $v_0 = parentNode.ConstraintType;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ConstraintType'] = ((SP.DataConvert.fixupType(this.get_context(), $v_0)));
            delete parentNode.ConstraintType;
        }
        $v_0 = parentNode.Cost;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Cost'] = ($v_0);
            delete parentNode.Cost;
        }
        $v_0 = parentNode.Deadline;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Deadline'] = ($v_0);
            delete parentNode.Deadline;
        }
        $v_0 = parentNode.Duration;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Duration'] = ($v_0);
            delete parentNode.Duration;
        }
        $v_0 = parentNode.DurationMilliseconds;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['DurationMilliseconds'] = ($v_0);
            delete parentNode.DurationMilliseconds;
        }
        $v_0 = parentNode.Finish;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Finish'] = ($v_0);
            delete parentNode.Finish;
        }
        $v_0 = parentNode.FinishText;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['FinishText'] = ($v_0);
            delete parentNode.FinishText;
        }
        $v_0 = parentNode.FixedCost;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['FixedCost'] = ($v_0);
            delete parentNode.FixedCost;
        }
        $v_0 = parentNode.IsActive;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['IsActive'] = ($v_0);
            delete parentNode.IsActive;
        }
        $v_0 = parentNode.IsLockedByManager;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['IsLockedByManager'] = ($v_0);
            delete parentNode.IsLockedByManager;
        }
        $v_0 = parentNode.IsManual;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['IsManual'] = ($v_0);
            delete parentNode.IsManual;
        }
        $v_0 = parentNode.IsMarked;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['IsMarked'] = ($v_0);
            delete parentNode.IsMarked;
        }
        $v_0 = parentNode.IsMilestone;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['IsMilestone'] = ($v_0);
            delete parentNode.IsMilestone;
        }
        $v_0 = parentNode.LevelingAdjustsAssignments;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['LevelingAdjustsAssignments'] = ($v_0);
            delete parentNode.LevelingAdjustsAssignments;
        }
        $v_0 = parentNode.LevelingCanSplit;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['LevelingCanSplit'] = ($v_0);
            delete parentNode.LevelingCanSplit;
        }
        $v_0 = parentNode.Name;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Name'] = ($v_0);
            delete parentNode.Name;
        }
        $v_0 = parentNode.OutlineLevel;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['OutlineLevel'] = ($v_0);
            delete parentNode.OutlineLevel;
        }
        $v_0 = parentNode.Parent;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('Parent', this.get_parent(), $v_0);
            this.get_parent().fromJson($v_0);
            delete parentNode.Parent;
        }
        $v_0 = parentNode.PercentComplete;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['PercentComplete'] = ($v_0);
            delete parentNode.PercentComplete;
        }
        $v_0 = parentNode.PercentPhysicalWorkComplete;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['PercentPhysicalWorkComplete'] = ($v_0);
            delete parentNode.PercentPhysicalWorkComplete;
        }
        $v_0 = parentNode.Predecessors;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('Predecessors', this.get_predecessors(), $v_0);
            this.get_predecessors().fromJson($v_0);
            delete parentNode.Predecessors;
        }
        $v_0 = parentNode.Priority;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Priority'] = ($v_0);
            delete parentNode.Priority;
        }
        $v_0 = parentNode.RemainingDuration;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['RemainingDuration'] = ($v_0);
            delete parentNode.RemainingDuration;
        }
        $v_0 = parentNode.RemainingDurationMilliseconds;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['RemainingDurationMilliseconds'] = ($v_0);
            delete parentNode.RemainingDurationMilliseconds;
        }
        $v_0 = parentNode.Start;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Start'] = ($v_0);
            delete parentNode.Start;
        }
        $v_0 = parentNode.StartText;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['StartText'] = ($v_0);
            delete parentNode.StartText;
        }
        $v_0 = parentNode.Successors;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('Successors', this.get_successors(), $v_0);
            this.get_successors().fromJson($v_0);
            delete parentNode.Successors;
        }
        $v_0 = parentNode.UsePercentPhysicalWorkComplete;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['UsePercentPhysicalWorkComplete'] = ($v_0);
            delete parentNode.UsePercentPhysicalWorkComplete;
        }
        $v_0 = parentNode.Work;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Work'] = ($v_0);
            delete parentNode.Work;
        }
        $v_0 = parentNode.WorkMilliseconds;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['WorkMilliseconds'] = ($v_0);
            delete parentNode.WorkMilliseconds;
        }
    },
    
    $6_2: function PS_PublishedTask$$6_2$in($p0) {
        var $v_0 = this.get_fieldValues()[$p0];
        if (SP.ScriptUtility.isUndefined($v_0)) {
            throw Error.create(SP.ResResources.getString('PropertyHasNotBeenInitialized'));
        }
        return $v_0;
    },
    
    refreshLoad: function PS_PublishedTask$refreshLoad$in() {ULSyTi:;
        SP.ClientObject.prototype.refreshLoad.call(this);
        this.loadExpandoFields();
    },
    
    loadExpandoFields: function PS_PublishedTask$loadExpandoFields$in() {ULSyTi:;
        var $$dict_1 = this.get_fieldValues();
        for (var $$key_2 in $$dict_1) {
            var $v_0 = { key: $$key_2, value: $$dict_1[$$key_2] };
            this.retrieve($v_0.key);
        }
    }
}


PS.PublishedTaskPropertyNames = function PS_PublishedTaskPropertyNames() {
}


PS.PublishedTaskObjectPropertyNames = function PS_PublishedTaskObjectPropertyNames() {
}


PS.PublishedTaskCollection = function PS_PublishedTaskCollection(context, objectPath) {ULSyTi:;
    PS.PublishedTaskCollection.initializeBase(this, [ context, objectPath ]);
}
PS.PublishedTaskCollection.prototype = {
    
    itemAt: function PS_PublishedTaskCollection$itemAt$in(index) {ULSyTi:;
        return this.getItemAtIndex(index);
    },
    
    get_item: function PS_PublishedTaskCollection$get_item$in(index) {ULSyTi:;
        return this.getItemAtIndex(index);
    },
    
    get_childItemType: function PS_PublishedTaskCollection$get_childItemType$in() {ULSyTi:;
        return PS.PublishedTask;
    },
    
    getById: function PS_PublishedTaskCollection$getById$in(objectId) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = ((this.get_objectData().get_methodReturnObjects()['GetById']));
        if (SP.ScriptUtility.isNullOrUndefined($v_2)) {
            $v_2 = {};
            this.get_objectData().get_methodReturnObjects()['GetById'] = $v_2;
        }
        $v_1 = (($v_2[objectId]));
        if (!$v_0.get_disableReturnValueCache() && !SP.ScriptUtility.isNullOrUndefined($v_1)) {
            return $v_1;
        }
        $v_1 = new PS.PublishedTask($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetById', [ objectId ]));
        if (!$v_0.get_disableReturnValueCache()) {
            $v_2[objectId] = $v_1;
        }
        return $v_1;
    },
    
    getByGuid: function PS_PublishedTaskCollection$getByGuid$in(uid) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = ((this.get_objectData().get_methodReturnObjects()['GetByGuid']));
        if (SP.ScriptUtility.isNullOrUndefined($v_2)) {
            $v_2 = {};
            this.get_objectData().get_methodReturnObjects()['GetByGuid'] = $v_2;
        }
        $v_1 = (($v_2[uid.toString()]));
        if (!$v_0.get_disableReturnValueCache() && !SP.ScriptUtility.isNullOrUndefined($v_1)) {
            return $v_1;
        }
        $v_1 = new PS.PublishedTask($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetByGuid', [ uid ]));
        if (!$v_0.get_disableReturnValueCache()) {
            $v_2[uid.toString()] = $v_1;
        }
        return $v_1;
    }
}


PS.PublishedTaskLink = function PS_PublishedTaskLink(context, objectPath) {ULSyTi:;
    PS.PublishedTaskLink.initializeBase(this, [ context, objectPath ]);
}
PS.PublishedTaskLink.prototype = {
    
    get_dependencyType: function PS_PublishedTaskLink$get_dependencyType$in() {ULSyTi:;
        this.checkUninitializedProperty('DependencyType');
        return (this.get_objectData().get_properties()['DependencyType']);
    },
    
    get_end: function PS_PublishedTaskLink$get_end$in() {ULSyTi:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['End']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new PS.PublishedTask(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'End'));
            this.get_objectData().get_clientObjectProperties()['End'] = $v_0;
        }
        return $v_0;
    },
    
    get_start: function PS_PublishedTaskLink$get_start$in() {ULSyTi:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['Start']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new PS.PublishedTask(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Start'));
            this.get_objectData().get_clientObjectProperties()['Start'] = $v_0;
        }
        return $v_0;
    },
    
    initPropertiesFromJson: function PS_PublishedTaskLink$initPropertiesFromJson$in(parentNode) {ULSyTi:;
        PS.TaskLink.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.DependencyType;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['DependencyType'] = ((SP.DataConvert.fixupType(this.get_context(), $v_0)));
            delete parentNode.DependencyType;
        }
        $v_0 = parentNode.End;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('End', this.get_end(), $v_0);
            this.get_end().fromJson($v_0);
            delete parentNode.End;
        }
        $v_0 = parentNode.Start;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('Start', this.get_start(), $v_0);
            this.get_start().fromJson($v_0);
            delete parentNode.Start;
        }
    }
}


PS.PublishedTaskLinkPropertyNames = function PS_PublishedTaskLinkPropertyNames() {
}


PS.PublishedTaskLinkObjectPropertyNames = function PS_PublishedTaskLinkObjectPropertyNames() {
}


PS.PublishedTaskLinkCollection = function PS_PublishedTaskLinkCollection(context, objectPath) {ULSyTi:;
    PS.PublishedTaskLinkCollection.initializeBase(this, [ context, objectPath ]);
}
PS.PublishedTaskLinkCollection.prototype = {
    
    itemAt: function PS_PublishedTaskLinkCollection$itemAt$in(index) {ULSyTi:;
        return this.getItemAtIndex(index);
    },
    
    get_item: function PS_PublishedTaskLinkCollection$get_item$in(index) {ULSyTi:;
        return this.getItemAtIndex(index);
    },
    
    get_childItemType: function PS_PublishedTaskLinkCollection$get_childItemType$in() {ULSyTi:;
        return PS.PublishedTaskLink;
    },
    
    getById: function PS_PublishedTaskLinkCollection$getById$in(objectId) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = ((this.get_objectData().get_methodReturnObjects()['GetById']));
        if (SP.ScriptUtility.isNullOrUndefined($v_2)) {
            $v_2 = {};
            this.get_objectData().get_methodReturnObjects()['GetById'] = $v_2;
        }
        $v_1 = (($v_2[objectId]));
        if (!$v_0.get_disableReturnValueCache() && !SP.ScriptUtility.isNullOrUndefined($v_1)) {
            return $v_1;
        }
        $v_1 = new PS.PublishedTaskLink($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetById', [ objectId ]));
        if (!$v_0.get_disableReturnValueCache()) {
            $v_2[objectId] = $v_1;
        }
        return $v_1;
    },
    
    getByGuid: function PS_PublishedTaskLinkCollection$getByGuid$in(uid) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = ((this.get_objectData().get_methodReturnObjects()['GetByGuid']));
        if (SP.ScriptUtility.isNullOrUndefined($v_2)) {
            $v_2 = {};
            this.get_objectData().get_methodReturnObjects()['GetByGuid'] = $v_2;
        }
        $v_1 = (($v_2[uid.toString()]));
        if (!$v_0.get_disableReturnValueCache() && !SP.ScriptUtility.isNullOrUndefined($v_1)) {
            return $v_1;
        }
        $v_1 = new PS.PublishedTaskLink($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetByGuid', [ uid ]));
        if (!$v_0.get_disableReturnValueCache()) {
            $v_2[uid.toString()] = $v_1;
        }
        return $v_1;
    }
}


PS.QueueJob = function PS_QueueJob(context, objectPath) {ULSyTi:;
    PS.QueueJob.initializeBase(this, [ context, objectPath ]);
}
PS.QueueJob.prototype = {
    
    get_id: function PS_QueueJob$get_id$in() {ULSyTi:;
        this.checkUninitializedProperty('Id');
        return (this.get_objectData().get_properties()['Id']);
    },
    
    get_jobState: function PS_QueueJob$get_jobState$in() {ULSyTi:;
        this.checkUninitializedProperty('JobState');
        return (this.get_objectData().get_properties()['JobState']);
    },
    
    get_messageType: function PS_QueueJob$get_messageType$in() {ULSyTi:;
        this.checkUninitializedProperty('MessageType');
        return (this.get_objectData().get_properties()['MessageType']);
    },
    
    get_percentComplete: function PS_QueueJob$get_percentComplete$in() {ULSyTi:;
        this.checkUninitializedProperty('PercentComplete');
        return (this.get_objectData().get_properties()['PercentComplete']);
    },
    
    get_project: function PS_QueueJob$get_project$in() {ULSyTi:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['Project']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new PS.Project(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Project'));
            this.get_objectData().get_clientObjectProperties()['Project'] = $v_0;
        }
        return $v_0;
    },
    
    get_submitter: function PS_QueueJob$get_submitter$in() {ULSyTi:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['Submitter']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.User(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Submitter'));
            this.get_objectData().get_clientObjectProperties()['Submitter'] = $v_0;
        }
        return $v_0;
    },
    
    get_waitMilliseconds: function PS_QueueJob$get_waitMilliseconds$in() {ULSyTi:;
        this.checkUninitializedProperty('WaitMilliseconds');
        return (this.get_objectData().get_properties()['WaitMilliseconds']);
    },
    
    initPropertiesFromJson: function PS_QueueJob$initPropertiesFromJson$in(parentNode) {ULSyTi:;
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.Id;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Id'] = ($v_0);
            delete parentNode.Id;
        }
        $v_0 = parentNode.JobState;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['JobState'] = ((SP.DataConvert.fixupType(this.get_context(), $v_0)));
            delete parentNode.JobState;
        }
        $v_0 = parentNode.MessageType;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['MessageType'] = ((SP.DataConvert.fixupType(this.get_context(), $v_0)));
            delete parentNode.MessageType;
        }
        $v_0 = parentNode.PercentComplete;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['PercentComplete'] = ($v_0);
            delete parentNode.PercentComplete;
        }
        $v_0 = parentNode.Project;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('Project', this.get_project(), $v_0);
            this.get_project().fromJson($v_0);
            delete parentNode.Project;
        }
        $v_0 = parentNode.Submitter;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('Submitter', this.get_submitter(), $v_0);
            this.get_submitter().fromJson($v_0);
            delete parentNode.Submitter;
        }
        $v_0 = parentNode.WaitMilliseconds;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['WaitMilliseconds'] = ($v_0);
            delete parentNode.WaitMilliseconds;
        }
    },
    
    cancel: function PS_QueueJob$cancel$in() {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'Cancel', null);
        $v_0.addQuery($v_1);
    }
}


PS.QueueJobPropertyNames = function PS_QueueJobPropertyNames() {
}


PS.QueueJobObjectPropertyNames = function PS_QueueJobObjectPropertyNames() {
}


PS.QueueJobCollection = function PS_QueueJobCollection(context, objectPath) {ULSyTi:;
    PS.QueueJobCollection.initializeBase(this, [ context, objectPath ]);
}
PS.QueueJobCollection.prototype = {
    
    itemAt: function PS_QueueJobCollection$itemAt$in(index) {ULSyTi:;
        return this.getItemAtIndex(index);
    },
    
    get_item: function PS_QueueJobCollection$get_item$in(index) {ULSyTi:;
        return this.getItemAtIndex(index);
    },
    
    get_childItemType: function PS_QueueJobCollection$get_childItemType$in() {ULSyTi:;
        return PS.QueueJob;
    },
    
    getById: function PS_QueueJobCollection$getById$in(objectId) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = ((this.get_objectData().get_methodReturnObjects()['GetById']));
        if (SP.ScriptUtility.isNullOrUndefined($v_2)) {
            $v_2 = {};
            this.get_objectData().get_methodReturnObjects()['GetById'] = $v_2;
        }
        $v_1 = (($v_2[objectId]));
        if (!$v_0.get_disableReturnValueCache() && !SP.ScriptUtility.isNullOrUndefined($v_1)) {
            return $v_1;
        }
        $v_1 = new PS.QueueJob($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetById', [ objectId ]));
        if (!$v_0.get_disableReturnValueCache()) {
            $v_2[objectId] = $v_1;
        }
        return $v_1;
    },
    
    getByGuid: function PS_QueueJobCollection$getByGuid$in(uid) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = ((this.get_objectData().get_methodReturnObjects()['GetByGuid']));
        if (SP.ScriptUtility.isNullOrUndefined($v_2)) {
            $v_2 = {};
            this.get_objectData().get_methodReturnObjects()['GetByGuid'] = $v_2;
        }
        $v_1 = (($v_2[uid.toString()]));
        if (!$v_0.get_disableReturnValueCache() && !SP.ScriptUtility.isNullOrUndefined($v_1)) {
            return $v_1;
        }
        $v_1 = new PS.QueueJob($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetByGuid', [ uid ]));
        if (!$v_0.get_disableReturnValueCache()) {
            $v_2[uid.toString()] = $v_1;
        }
        return $v_1;
    }
}


PS.ResourceCalendarException = function PS_ResourceCalendarException(context, objectPath) {ULSyTi:;
    PS.ResourceCalendarException.initializeBase(this, [ context, objectPath ]);
}


PS.ResourcePlan = function PS_ResourcePlan(context, objectPath) {ULSyTi:;
    PS.ResourcePlan.initializeBase(this, [ context, objectPath ]);
}
PS.ResourcePlan.prototype = {
    
    get_assignments: function PS_ResourcePlan$get_assignments$in() {ULSyTi:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['Assignments']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new PS.PlanAssignmentCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Assignments'));
            this.get_objectData().get_clientObjectProperties()['Assignments'] = $v_0;
        }
        return $v_0;
    },
    
    get_finish: function PS_ResourcePlan$get_finish$in() {ULSyTi:;
        this.checkUninitializedProperty('Finish');
        return (this.get_objectData().get_properties()['Finish']);
    },
    
    get_id: function PS_ResourcePlan$get_id$in() {ULSyTi:;
        this.checkUninitializedProperty('Id');
        return (this.get_objectData().get_properties()['Id']);
    },
    
    get_start: function PS_ResourcePlan$get_start$in() {ULSyTi:;
        this.checkUninitializedProperty('Start');
        return (this.get_objectData().get_properties()['Start']);
    },
    
    get_utilizationDate: function PS_ResourcePlan$get_utilizationDate$in() {ULSyTi:;
        this.checkUninitializedProperty('UtilizationDate');
        return (this.get_objectData().get_properties()['UtilizationDate']);
    },
    
    set_utilizationDate: function PS_ResourcePlan$set_utilizationDate$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['UtilizationDate'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'UtilizationDate', value));
        }
        return value;
    },
    
    get_utilizationType: function PS_ResourcePlan$get_utilizationType$in() {ULSyTi:;
        this.checkUninitializedProperty('UtilizationType');
        return (this.get_objectData().get_properties()['UtilizationType']);
    },
    
    set_utilizationType: function PS_ResourcePlan$set_utilizationType$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['UtilizationType'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'UtilizationType', value));
        }
        return value;
    },
    
    initPropertiesFromJson: function PS_ResourcePlan$initPropertiesFromJson$in(parentNode) {ULSyTi:;
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.Assignments;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('Assignments', this.get_assignments(), $v_0);
            this.get_assignments().fromJson($v_0);
            delete parentNode.Assignments;
        }
        $v_0 = parentNode.Finish;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Finish'] = ($v_0);
            delete parentNode.Finish;
        }
        $v_0 = parentNode.Id;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Id'] = ($v_0);
            delete parentNode.Id;
        }
        $v_0 = parentNode.Start;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Start'] = ($v_0);
            delete parentNode.Start;
        }
        $v_0 = parentNode.UtilizationDate;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['UtilizationDate'] = ($v_0);
            delete parentNode.UtilizationDate;
        }
        $v_0 = parentNode.UtilizationType;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['UtilizationType'] = ((SP.DataConvert.fixupType(this.get_context(), $v_0)));
            delete parentNode.UtilizationType;
        }
    },
    
    update: function PS_ResourcePlan$update$in() {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        $v_1 = new PS.QueueJob($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'Update', null));
        return $v_1;
    },
    
    publish: function PS_ResourcePlan$publish$in() {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        $v_1 = new PS.QueueJob($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'Publish', null));
        return $v_1;
    },
    
    forceCheckIn: function PS_ResourcePlan$forceCheckIn$in() {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        $v_1 = new PS.QueueJob($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'ForceCheckIn', null));
        return $v_1;
    },
    
    deleteObject: function PS_ResourcePlan$deleteObject$in() {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        $v_1 = new PS.QueueJob($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'DeleteObject', null));
        return $v_1;
    }
}


PS.ResourcePlanPropertyNames = function PS_ResourcePlanPropertyNames() {
}


PS.ResourcePlanObjectPropertyNames = function PS_ResourcePlanObjectPropertyNames() {
}


PS.ServiceStatus = function PS_ServiceStatus(context, server) {ULSyTi:;
    PS.ServiceStatus.initializeBase(this, [ context, SP.ClientUtility.getOrCreateObjectPathForConstructor(context, '{f256f605-bb33-4d62-b206-72a06a765075}', arguments) ]);
}
PS.ServiceStatus.newObject = function PS_ServiceStatus$newObject$st(context, server) {ULSyTi:;
    return new PS.ServiceStatus(context, new SP.ObjectPathConstructor(context, '{f256f605-bb33-4d62-b206-72a06a765075}', [ server ]));
}
PS.ServiceStatus.prototype = {
    
    get_isDelegate: function PS_ServiceStatus$get_isDelegate$in() {ULSyTi:;
        this.checkUninitializedProperty('IsDelegate');
        return (this.get_objectData().get_properties()['IsDelegate']);
    },
    
    get_isReadOnly: function PS_ServiceStatus$get_isReadOnly$in() {ULSyTi:;
        this.checkUninitializedProperty('IsReadOnly');
        return (this.get_objectData().get_properties()['IsReadOnly']);
    },
    
    initPropertiesFromJson: function PS_ServiceStatus$initPropertiesFromJson$in(parentNode) {ULSyTi:;
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.IsDelegate;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['IsDelegate'] = ($v_0);
            delete parentNode.IsDelegate;
        }
        $v_0 = parentNode.IsReadOnly;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['IsReadOnly'] = ($v_0);
            delete parentNode.IsReadOnly;
        }
    },
    
    stopDelegation: function PS_ServiceStatus$stopDelegation$in() {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'StopDelegation', null);
        $v_0.addQuery($v_1);
    }
}


PS.ServiceStatusPropertyNames = function PS_ServiceStatusPropertyNames() {
}


PS.Stage = function PS_Stage(context, objectPath) {ULSyTi:;
    PS.Stage.initializeBase(this, [ context, objectPath ]);
}
PS.Stage.prototype = {
    
    get_behavior: function PS_Stage$get_behavior$in() {ULSyTi:;
        this.checkUninitializedProperty('Behavior');
        return (this.get_objectData().get_properties()['Behavior']);
    },
    
    set_behavior: function PS_Stage$set_behavior$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['Behavior'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Behavior', value));
        }
        return value;
    },
    
    get_checkInRequired: function PS_Stage$get_checkInRequired$in() {ULSyTi:;
        this.checkUninitializedProperty('CheckInRequired');
        return (this.get_objectData().get_properties()['CheckInRequired']);
    },
    
    set_checkInRequired: function PS_Stage$set_checkInRequired$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['CheckInRequired'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'CheckInRequired', value));
        }
        return value;
    },
    
    get_customFields: function PS_Stage$get_customFields$in() {ULSyTi:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['CustomFields']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new PS.StageCustomFieldCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'CustomFields'));
            this.get_objectData().get_clientObjectProperties()['CustomFields'] = $v_0;
        }
        return $v_0;
    },
    
    get_description: function PS_Stage$get_description$in() {ULSyTi:;
        this.checkUninitializedProperty('Description');
        return (this.get_objectData().get_properties()['Description']);
    },
    
    set_description: function PS_Stage$set_description$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['Description'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Description', value));
        }
        return value;
    },
    
    get_id: function PS_Stage$get_id$in() {ULSyTi:;
        this.checkUninitializedProperty('Id');
        return (this.get_objectData().get_properties()['Id']);
    },
    
    get_name: function PS_Stage$get_name$in() {ULSyTi:;
        this.checkUninitializedProperty('Name');
        return (this.get_objectData().get_properties()['Name']);
    },
    
    set_name: function PS_Stage$set_name$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['Name'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Name', value));
        }
        return value;
    },
    
    get_phase: function PS_Stage$get_phase$in() {ULSyTi:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['Phase']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new PS.Phase(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Phase'));
            this.get_objectData().get_clientObjectProperties()['Phase'] = $v_0;
        }
        return $v_0;
    },
    
    set_phase: function PS_Stage$set_phase$in(value) {ULSyTi:;
        this.get_objectData().get_clientObjectProperties()['Phase'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Phase', value));
        }
        return value;
    },
    
    get_projectDetailPages: function PS_Stage$get_projectDetailPages$in() {ULSyTi:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['ProjectDetailPages']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new PS.StageDetailPageCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'ProjectDetailPages'));
            this.get_objectData().get_clientObjectProperties()['ProjectDetailPages'] = $v_0;
        }
        return $v_0;
    },
    
    get_submitDescription: function PS_Stage$get_submitDescription$in() {ULSyTi:;
        this.checkUninitializedProperty('SubmitDescription');
        return (this.get_objectData().get_properties()['SubmitDescription']);
    },
    
    set_submitDescription: function PS_Stage$set_submitDescription$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['SubmitDescription'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'SubmitDescription', value));
        }
        return value;
    },
    
    get_workflowStatusPage: function PS_Stage$get_workflowStatusPage$in() {ULSyTi:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['WorkflowStatusPage']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new PS.ProjectDetailPage(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'WorkflowStatusPage'));
            this.get_objectData().get_clientObjectProperties()['WorkflowStatusPage'] = $v_0;
        }
        return $v_0;
    },
    
    set_workflowStatusPage: function PS_Stage$set_workflowStatusPage$in(value) {ULSyTi:;
        this.get_objectData().get_clientObjectProperties()['WorkflowStatusPage'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'WorkflowStatusPage', value));
        }
        return value;
    },
    
    initPropertiesFromJson: function PS_Stage$initPropertiesFromJson$in(parentNode) {ULSyTi:;
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.Behavior;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Behavior'] = ((SP.DataConvert.fixupType(this.get_context(), $v_0)));
            delete parentNode.Behavior;
        }
        $v_0 = parentNode.CheckInRequired;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['CheckInRequired'] = ($v_0);
            delete parentNode.CheckInRequired;
        }
        $v_0 = parentNode.CustomFields;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('CustomFields', this.get_customFields(), $v_0);
            this.get_customFields().fromJson($v_0);
            delete parentNode.CustomFields;
        }
        $v_0 = parentNode.Description;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Description'] = ($v_0);
            delete parentNode.Description;
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
        $v_0 = parentNode.Phase;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('Phase', this.get_phase(), $v_0);
            this.get_phase().fromJson($v_0);
            delete parentNode.Phase;
        }
        $v_0 = parentNode.ProjectDetailPages;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('ProjectDetailPages', this.get_projectDetailPages(), $v_0);
            this.get_projectDetailPages().fromJson($v_0);
            delete parentNode.ProjectDetailPages;
        }
        $v_0 = parentNode.SubmitDescription;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['SubmitDescription'] = ($v_0);
            delete parentNode.SubmitDescription;
        }
        $v_0 = parentNode.WorkflowStatusPage;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('WorkflowStatusPage', this.get_workflowStatusPage(), $v_0);
            this.get_workflowStatusPage().fromJson($v_0);
            delete parentNode.WorkflowStatusPage;
        }
    },
    
    deleteObject: function PS_Stage$deleteObject$in() {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'DeleteObject', null);
        $v_0.addQuery($v_1);
        this.removeFromParentCollection();
    }
}


PS.StagePropertyNames = function PS_StagePropertyNames() {
}


PS.StageObjectPropertyNames = function PS_StageObjectPropertyNames() {
}


PS.StageCollection = function PS_StageCollection(context, objectPath) {ULSyTi:;
    PS.StageCollection.initializeBase(this, [ context, objectPath ]);
}
PS.StageCollection.prototype = {
    
    itemAt: function PS_StageCollection$itemAt$in(index) {ULSyTi:;
        return this.getItemAtIndex(index);
    },
    
    get_item: function PS_StageCollection$get_item$in(index) {ULSyTi:;
        return this.getItemAtIndex(index);
    },
    
    get_childItemType: function PS_StageCollection$get_childItemType$in() {ULSyTi:;
        return PS.Stage;
    },
    
    getById: function PS_StageCollection$getById$in(objectId) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = ((this.get_objectData().get_methodReturnObjects()['GetById']));
        if (SP.ScriptUtility.isNullOrUndefined($v_2)) {
            $v_2 = {};
            this.get_objectData().get_methodReturnObjects()['GetById'] = $v_2;
        }
        $v_1 = (($v_2[objectId]));
        if (!$v_0.get_disableReturnValueCache() && !SP.ScriptUtility.isNullOrUndefined($v_1)) {
            return $v_1;
        }
        $v_1 = new PS.Stage($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetById', [ objectId ]));
        if (!$v_0.get_disableReturnValueCache()) {
            $v_2[objectId] = $v_1;
        }
        return $v_1;
    },
    
    getByGuid: function PS_StageCollection$getByGuid$in(uid) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = ((this.get_objectData().get_methodReturnObjects()['GetByGuid']));
        if (SP.ScriptUtility.isNullOrUndefined($v_2)) {
            $v_2 = {};
            this.get_objectData().get_methodReturnObjects()['GetByGuid'] = $v_2;
        }
        $v_1 = (($v_2[uid.toString()]));
        if (!$v_0.get_disableReturnValueCache() && !SP.ScriptUtility.isNullOrUndefined($v_1)) {
            return $v_1;
        }
        $v_1 = new PS.Stage($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetByGuid', [ uid ]));
        if (!$v_0.get_disableReturnValueCache()) {
            $v_2[uid.toString()] = $v_1;
        }
        return $v_1;
    },
    
    update: function PS_StageCollection$update$in() {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'Update', null);
        $v_0.addQuery($v_1);
    },
    
    add: function PS_StageCollection$add$in(parameters) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        $v_1 = new PS.Stage($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'Add', [ parameters ]));
        $v_1.get_path().setPendingReplace();
        var $v_2 = new SP.ObjectIdentityQuery($v_1.get_path());
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        $v_0.addQuery($v_2);
        this.addChild($v_1);
        return $v_1;
    },
    
    remove: function PS_StageCollection$remove$in(stage) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'Remove', [ stage ]);
        $v_0.addQuery($v_2);
        $v_1 = new SP.BooleanResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        this.removeChild(stage);
        return $v_1;
    }
}


PS.StageCreationInformation = function PS_StageCreationInformation() {ULSyTi:;
    PS.StageCreationInformation.initializeBase(this);
}
PS.StageCreationInformation.prototype = {
    $U_1: 0,
    $W_1: false,
    $I_1: null,
    $2_1: null,
    $0_1: null,
    $1_1: null,
    $16_1: null,
    $A_1: null,
    $1X_1: null,
    $1g_1: null,
    
    get_behavior: function PS_StageCreationInformation$get_behavior$in() {ULSyTi:;
        return this.$U_1;
    },
    
    set_behavior: function PS_StageCreationInformation$set_behavior$in(value) {ULSyTi:;
        this.$U_1 = value;
        return value;
    },
    
    get_checkInRequired: function PS_StageCreationInformation$get_checkInRequired$in() {ULSyTi:;
        return this.$W_1;
    },
    
    set_checkInRequired: function PS_StageCreationInformation$set_checkInRequired$in(value) {ULSyTi:;
        this.$W_1 = value;
        return value;
    },
    
    get_customFields: function PS_StageCreationInformation$get_customFields$in() {ULSyTi:;
        return this.$I_1;
    },
    
    set_customFields: function PS_StageCreationInformation$set_customFields$in(value) {ULSyTi:;
        this.$I_1 = value;
        return value;
    },
    
    get_description: function PS_StageCreationInformation$get_description$in() {ULSyTi:;
        return this.$2_1;
    },
    
    set_description: function PS_StageCreationInformation$set_description$in(value) {ULSyTi:;
        this.$2_1 = value;
        return value;
    },
    
    get_id: function PS_StageCreationInformation$get_id$in() {ULSyTi:;
        return this.$0_1;
    },
    
    set_id: function PS_StageCreationInformation$set_id$in(value) {ULSyTi:;
        this.$0_1 = value;
        return value;
    },
    
    get_name: function PS_StageCreationInformation$get_name$in() {ULSyTi:;
        return this.$1_1;
    },
    
    set_name: function PS_StageCreationInformation$set_name$in(value) {ULSyTi:;
        this.$1_1 = value;
        return value;
    },
    
    get_phaseId: function PS_StageCreationInformation$get_phaseId$in() {ULSyTi:;
        return this.$16_1;
    },
    
    set_phaseId: function PS_StageCreationInformation$set_phaseId$in(value) {ULSyTi:;
        this.$16_1 = value;
        return value;
    },
    
    get_projectDetailPages: function PS_StageCreationInformation$get_projectDetailPages$in() {ULSyTi:;
        return this.$A_1;
    },
    
    set_projectDetailPages: function PS_StageCreationInformation$set_projectDetailPages$in(value) {ULSyTi:;
        this.$A_1 = value;
        return value;
    },
    
    get_submitDescription: function PS_StageCreationInformation$get_submitDescription$in() {ULSyTi:;
        return this.$1X_1;
    },
    
    set_submitDescription: function PS_StageCreationInformation$set_submitDescription$in(value) {ULSyTi:;
        this.$1X_1 = value;
        return value;
    },
    
    get_workflowStatusPageId: function PS_StageCreationInformation$get_workflowStatusPageId$in() {ULSyTi:;
        return this.$1g_1;
    },
    
    set_workflowStatusPageId: function PS_StageCreationInformation$set_workflowStatusPageId$in(value) {ULSyTi:;
        this.$1g_1 = value;
        return value;
    },
    
    get_typeId: function PS_StageCreationInformation$get_typeId$in() {ULSyTi:;
        return '{9f32eaa1-0131-41fe-bf60-7063fdd7c288}';
    },
    
    writeToXml: function PS_StageCreationInformation$writeToXml$in(writer, serializationContext) {ULSyTi:;
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = [ 'Behavior', 'CheckInRequired', 'CustomFields', 'Description', 'Id', 'Name', 'PhaseId', 'ProjectDetailPages', 'SubmitDescription', 'WorkflowStatusPageId' ];
        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    
    initPropertiesFromJson: function PS_StageCreationInformation$initPropertiesFromJson$in(parentNode) {ULSyTi:;
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.Behavior;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$U_1 = ((SP.DataConvert.fixupType(null, $v_0)));
            delete parentNode.Behavior;
        }
        $v_0 = parentNode.CheckInRequired;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$W_1 = ($v_0);
            delete parentNode.CheckInRequired;
        }
        $v_0 = parentNode.CustomFields;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$I_1 = (([]));
            SP.DataConvert.populateArray(null, ((this.$I_1)), ($v_0));
            delete parentNode.CustomFields;
        }
        $v_0 = parentNode.Description;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$2_1 = ($v_0);
            delete parentNode.Description;
        }
        $v_0 = parentNode.Id;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$0_1 = ($v_0);
            delete parentNode.Id;
        }
        $v_0 = parentNode.Name;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1_1 = ($v_0);
            delete parentNode.Name;
        }
        $v_0 = parentNode.PhaseId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$16_1 = ($v_0);
            delete parentNode.PhaseId;
        }
        $v_0 = parentNode.ProjectDetailPages;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$A_1 = (([]));
            SP.DataConvert.populateArray(null, ((this.$A_1)), ($v_0));
            delete parentNode.ProjectDetailPages;
        }
        $v_0 = parentNode.SubmitDescription;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1X_1 = ($v_0);
            delete parentNode.SubmitDescription;
        }
        $v_0 = parentNode.WorkflowStatusPageId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1g_1 = ($v_0);
            delete parentNode.WorkflowStatusPageId;
        }
    }
}


PS.StageCustomField = function PS_StageCustomField(context, objectPath) {ULSyTi:;
    PS.StageCustomField.initializeBase(this, [ context, objectPath ]);
}
PS.StageCustomField.prototype = {
    
    get_id: function PS_StageCustomField$get_id$in() {ULSyTi:;
        this.checkUninitializedProperty('Id');
        return (this.get_objectData().get_properties()['Id']);
    },
    
    get_name: function PS_StageCustomField$get_name$in() {ULSyTi:;
        this.checkUninitializedProperty('Name');
        return (this.get_objectData().get_properties()['Name']);
    },
    
    get_readOnly: function PS_StageCustomField$get_readOnly$in() {ULSyTi:;
        this.checkUninitializedProperty('ReadOnly');
        return (this.get_objectData().get_properties()['ReadOnly']);
    },
    
    get_required: function PS_StageCustomField$get_required$in() {ULSyTi:;
        this.checkUninitializedProperty('Required');
        return (this.get_objectData().get_properties()['Required']);
    },
    
    get_stage: function PS_StageCustomField$get_stage$in() {ULSyTi:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['Stage']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new PS.Stage(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Stage'));
            this.get_objectData().get_clientObjectProperties()['Stage'] = $v_0;
        }
        return $v_0;
    },
    
    initPropertiesFromJson: function PS_StageCustomField$initPropertiesFromJson$in(parentNode) {ULSyTi:;
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
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
        $v_0 = parentNode.ReadOnly;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ReadOnly'] = ($v_0);
            delete parentNode.ReadOnly;
        }
        $v_0 = parentNode.Required;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Required'] = ($v_0);
            delete parentNode.Required;
        }
        $v_0 = parentNode.Stage;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('Stage', this.get_stage(), $v_0);
            this.get_stage().fromJson($v_0);
            delete parentNode.Stage;
        }
    },
    
    deleteObject: function PS_StageCustomField$deleteObject$in() {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'DeleteObject', null);
        $v_0.addQuery($v_1);
        this.removeFromParentCollection();
    }
}


PS.StageCustomFieldPropertyNames = function PS_StageCustomFieldPropertyNames() {
}


PS.StageCustomFieldObjectPropertyNames = function PS_StageCustomFieldObjectPropertyNames() {
}


PS.StageCustomFieldCollection = function PS_StageCustomFieldCollection(context, objectPath) {ULSyTi:;
    PS.StageCustomFieldCollection.initializeBase(this, [ context, objectPath ]);
}
PS.StageCustomFieldCollection.prototype = {
    
    itemAt: function PS_StageCustomFieldCollection$itemAt$in(index) {ULSyTi:;
        return this.getItemAtIndex(index);
    },
    
    get_item: function PS_StageCustomFieldCollection$get_item$in(index) {ULSyTi:;
        return this.getItemAtIndex(index);
    },
    
    get_childItemType: function PS_StageCustomFieldCollection$get_childItemType$in() {ULSyTi:;
        return PS.StageCustomField;
    },
    
    getById: function PS_StageCustomFieldCollection$getById$in(objectId) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = ((this.get_objectData().get_methodReturnObjects()['GetById']));
        if (SP.ScriptUtility.isNullOrUndefined($v_2)) {
            $v_2 = {};
            this.get_objectData().get_methodReturnObjects()['GetById'] = $v_2;
        }
        $v_1 = (($v_2[objectId]));
        if (!$v_0.get_disableReturnValueCache() && !SP.ScriptUtility.isNullOrUndefined($v_1)) {
            return $v_1;
        }
        $v_1 = new PS.StageCustomField($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetById', [ objectId ]));
        if (!$v_0.get_disableReturnValueCache()) {
            $v_2[objectId] = $v_1;
        }
        return $v_1;
    },
    
    getByGuid: function PS_StageCustomFieldCollection$getByGuid$in(uid) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = ((this.get_objectData().get_methodReturnObjects()['GetByGuid']));
        if (SP.ScriptUtility.isNullOrUndefined($v_2)) {
            $v_2 = {};
            this.get_objectData().get_methodReturnObjects()['GetByGuid'] = $v_2;
        }
        $v_1 = (($v_2[uid.toString()]));
        if (!$v_0.get_disableReturnValueCache() && !SP.ScriptUtility.isNullOrUndefined($v_1)) {
            return $v_1;
        }
        $v_1 = new PS.StageCustomField($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetByGuid', [ uid ]));
        if (!$v_0.get_disableReturnValueCache()) {
            $v_2[uid.toString()] = $v_1;
        }
        return $v_1;
    },
    
    add: function PS_StageCustomFieldCollection$add$in(creationInfo) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        $v_1 = new PS.StageCustomField($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'Add', [ creationInfo ]));
        $v_1.get_path().setPendingReplace();
        var $v_2 = new SP.ObjectIdentityQuery($v_1.get_path());
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        $v_0.addQuery($v_2);
        this.addChild($v_1);
        return $v_1;
    },
    
    remove: function PS_StageCustomFieldCollection$remove$in(field) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'Remove', [ field ]);
        $v_0.addQuery($v_2);
        $v_1 = new SP.BooleanResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        this.removeChild(field);
        return $v_1;
    }
}


PS.StageCustomFieldCreationInformation = function PS_StageCustomFieldCreationInformation() {ULSyTi:;
    PS.StageCustomFieldCreationInformation.initializeBase(this);
}
PS.StageCustomFieldCreationInformation.prototype = {
    $0_1: null,
    $19_1: false,
    $1G_1: false,
    
    get_id: function PS_StageCustomFieldCreationInformation$get_id$in() {ULSyTi:;
        return this.$0_1;
    },
    
    set_id: function PS_StageCustomFieldCreationInformation$set_id$in(value) {ULSyTi:;
        this.$0_1 = value;
        return value;
    },
    
    get_readOnly: function PS_StageCustomFieldCreationInformation$get_readOnly$in() {ULSyTi:;
        return this.$19_1;
    },
    
    set_readOnly: function PS_StageCustomFieldCreationInformation$set_readOnly$in(value) {ULSyTi:;
        this.$19_1 = value;
        return value;
    },
    
    get_required: function PS_StageCustomFieldCreationInformation$get_required$in() {ULSyTi:;
        return this.$1G_1;
    },
    
    set_required: function PS_StageCustomFieldCreationInformation$set_required$in(value) {ULSyTi:;
        this.$1G_1 = value;
        return value;
    },
    
    get_typeId: function PS_StageCustomFieldCreationInformation$get_typeId$in() {ULSyTi:;
        return '{ee2262c3-3fff-414e-98b2-44f850fef529}';
    },
    
    writeToXml: function PS_StageCustomFieldCreationInformation$writeToXml$in(writer, serializationContext) {ULSyTi:;
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = [ 'Id', 'ReadOnly', 'Required' ];
        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    
    initPropertiesFromJson: function PS_StageCustomFieldCreationInformation$initPropertiesFromJson$in(parentNode) {ULSyTi:;
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.Id;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$0_1 = ($v_0);
            delete parentNode.Id;
        }
        $v_0 = parentNode.ReadOnly;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$19_1 = ($v_0);
            delete parentNode.ReadOnly;
        }
        $v_0 = parentNode.Required;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1G_1 = ($v_0);
            delete parentNode.Required;
        }
    }
}


PS.StageDetailPage = function PS_StageDetailPage(context, objectPath) {ULSyTi:;
    PS.StageDetailPage.initializeBase(this, [ context, objectPath ]);
}
PS.StageDetailPage.prototype = {
    
    get_description: function PS_StageDetailPage$get_description$in() {ULSyTi:;
        this.checkUninitializedProperty('Description');
        return (this.get_objectData().get_properties()['Description']);
    },
    
    set_description: function PS_StageDetailPage$set_description$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['Description'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Description', value));
        }
        return value;
    },
    
    get_id: function PS_StageDetailPage$get_id$in() {ULSyTi:;
        this.checkUninitializedProperty('Id');
        return (this.get_objectData().get_properties()['Id']);
    },
    
    get_page: function PS_StageDetailPage$get_page$in() {ULSyTi:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['Page']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new PS.ProjectDetailPage(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Page'));
            this.get_objectData().get_clientObjectProperties()['Page'] = $v_0;
        }
        return $v_0;
    },
    
    set_page: function PS_StageDetailPage$set_page$in(value) {ULSyTi:;
        this.get_objectData().get_clientObjectProperties()['Page'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Page', value));
        }
        return value;
    },
    
    get_position: function PS_StageDetailPage$get_position$in() {ULSyTi:;
        this.checkUninitializedProperty('Position');
        return (this.get_objectData().get_properties()['Position']);
    },
    
    set_position: function PS_StageDetailPage$set_position$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['Position'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Position', value));
        }
        return value;
    },
    
    get_requiresAttention: function PS_StageDetailPage$get_requiresAttention$in() {ULSyTi:;
        this.checkUninitializedProperty('RequiresAttention');
        return (this.get_objectData().get_properties()['RequiresAttention']);
    },
    
    set_requiresAttention: function PS_StageDetailPage$set_requiresAttention$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['RequiresAttention'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'RequiresAttention', value));
        }
        return value;
    },
    
    get_stage: function PS_StageDetailPage$get_stage$in() {ULSyTi:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['Stage']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new PS.Stage(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Stage'));
            this.get_objectData().get_clientObjectProperties()['Stage'] = $v_0;
        }
        return $v_0;
    },
    
    initPropertiesFromJson: function PS_StageDetailPage$initPropertiesFromJson$in(parentNode) {ULSyTi:;
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.Description;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Description'] = ($v_0);
            delete parentNode.Description;
        }
        $v_0 = parentNode.Id;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Id'] = ($v_0);
            delete parentNode.Id;
        }
        $v_0 = parentNode.Page;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('Page', this.get_page(), $v_0);
            this.get_page().fromJson($v_0);
            delete parentNode.Page;
        }
        $v_0 = parentNode.Position;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Position'] = ($v_0);
            delete parentNode.Position;
        }
        $v_0 = parentNode.RequiresAttention;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['RequiresAttention'] = ($v_0);
            delete parentNode.RequiresAttention;
        }
        $v_0 = parentNode.Stage;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('Stage', this.get_stage(), $v_0);
            this.get_stage().fromJson($v_0);
            delete parentNode.Stage;
        }
    },
    
    deleteObject: function PS_StageDetailPage$deleteObject$in() {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'DeleteObject', null);
        $v_0.addQuery($v_1);
        this.removeFromParentCollection();
    }
}


PS.StageDetailPagePropertyNames = function PS_StageDetailPagePropertyNames() {
}


PS.StageDetailPageObjectPropertyNames = function PS_StageDetailPageObjectPropertyNames() {
}


PS.StageDetailPageCollection = function PS_StageDetailPageCollection(context, objectPath) {ULSyTi:;
    PS.StageDetailPageCollection.initializeBase(this, [ context, objectPath ]);
}
PS.StageDetailPageCollection.prototype = {
    
    itemAt: function PS_StageDetailPageCollection$itemAt$in(index) {ULSyTi:;
        return this.getItemAtIndex(index);
    },
    
    get_item: function PS_StageDetailPageCollection$get_item$in(index) {ULSyTi:;
        return this.getItemAtIndex(index);
    },
    
    get_childItemType: function PS_StageDetailPageCollection$get_childItemType$in() {ULSyTi:;
        return PS.StageDetailPage;
    },
    
    getById: function PS_StageDetailPageCollection$getById$in(objectId) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = ((this.get_objectData().get_methodReturnObjects()['GetById']));
        if (SP.ScriptUtility.isNullOrUndefined($v_2)) {
            $v_2 = {};
            this.get_objectData().get_methodReturnObjects()['GetById'] = $v_2;
        }
        $v_1 = (($v_2[objectId]));
        if (!$v_0.get_disableReturnValueCache() && !SP.ScriptUtility.isNullOrUndefined($v_1)) {
            return $v_1;
        }
        $v_1 = new PS.StageDetailPage($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetById', [ objectId ]));
        if (!$v_0.get_disableReturnValueCache()) {
            $v_2[objectId] = $v_1;
        }
        return $v_1;
    },
    
    getByGuid: function PS_StageDetailPageCollection$getByGuid$in(uid) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = ((this.get_objectData().get_methodReturnObjects()['GetByGuid']));
        if (SP.ScriptUtility.isNullOrUndefined($v_2)) {
            $v_2 = {};
            this.get_objectData().get_methodReturnObjects()['GetByGuid'] = $v_2;
        }
        $v_1 = (($v_2[uid.toString()]));
        if (!$v_0.get_disableReturnValueCache() && !SP.ScriptUtility.isNullOrUndefined($v_1)) {
            return $v_1;
        }
        $v_1 = new PS.StageDetailPage($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetByGuid', [ uid ]));
        if (!$v_0.get_disableReturnValueCache()) {
            $v_2[uid.toString()] = $v_1;
        }
        return $v_1;
    },
    
    add: function PS_StageDetailPageCollection$add$in(parameters) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        $v_1 = new PS.StageDetailPage($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'Add', [ parameters ]));
        $v_1.get_path().setPendingReplace();
        var $v_2 = new SP.ObjectIdentityQuery($v_1.get_path());
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        $v_0.addQuery($v_2);
        this.addChild($v_1);
        return $v_1;
    },
    
    remove: function PS_StageDetailPageCollection$remove$in(pdp) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'Remove', [ pdp ]);
        $v_0.addQuery($v_2);
        $v_1 = new SP.BooleanResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        this.removeChild(pdp);
        return $v_1;
    }
}


PS.StageDetailPageCreationInformation = function PS_StageDetailPageCreationInformation() {ULSyTi:;
    PS.StageDetailPageCreationInformation.initializeBase(this);
}
PS.StageDetailPageCreationInformation.prototype = {
    $2_1: null,
    $0_1: null,
    $D_1: 0,
    $1H_1: false,
    
    get_description: function PS_StageDetailPageCreationInformation$get_description$in() {ULSyTi:;
        return this.$2_1;
    },
    
    set_description: function PS_StageDetailPageCreationInformation$set_description$in(value) {ULSyTi:;
        this.$2_1 = value;
        return value;
    },
    
    get_id: function PS_StageDetailPageCreationInformation$get_id$in() {ULSyTi:;
        return this.$0_1;
    },
    
    set_id: function PS_StageDetailPageCreationInformation$set_id$in(value) {ULSyTi:;
        this.$0_1 = value;
        return value;
    },
    
    get_position: function PS_StageDetailPageCreationInformation$get_position$in() {ULSyTi:;
        return this.$D_1;
    },
    
    set_position: function PS_StageDetailPageCreationInformation$set_position$in(value) {ULSyTi:;
        this.$D_1 = value;
        return value;
    },
    
    get_requiresAttention: function PS_StageDetailPageCreationInformation$get_requiresAttention$in() {ULSyTi:;
        return this.$1H_1;
    },
    
    set_requiresAttention: function PS_StageDetailPageCreationInformation$set_requiresAttention$in(value) {ULSyTi:;
        this.$1H_1 = value;
        return value;
    },
    
    get_typeId: function PS_StageDetailPageCreationInformation$get_typeId$in() {ULSyTi:;
        return '{04c2bf02-2097-4e62-a46d-37b135f55a18}';
    },
    
    writeToXml: function PS_StageDetailPageCreationInformation$writeToXml$in(writer, serializationContext) {ULSyTi:;
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = [ 'Description', 'Id', 'Position', 'RequiresAttention' ];
        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    
    initPropertiesFromJson: function PS_StageDetailPageCreationInformation$initPropertiesFromJson$in(parentNode) {ULSyTi:;
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.Description;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$2_1 = ($v_0);
            delete parentNode.Description;
        }
        $v_0 = parentNode.Id;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$0_1 = ($v_0);
            delete parentNode.Id;
        }
        $v_0 = parentNode.Position;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$D_1 = ($v_0);
            delete parentNode.Position;
        }
        $v_0 = parentNode.RequiresAttention;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1H_1 = ($v_0);
            delete parentNode.RequiresAttention;
        }
    }
}


PS.StatusAssignment = function PS_StatusAssignment(context, objectPath) {ULSyTi:;
    PS.StatusAssignment.initializeBase(this, [ context, objectPath ]);
}
PS.StatusAssignment.prototype = {
    
    get_fieldValues: function PS_StatusAssignment$get_fieldValues$in() {ULSyTi:;
        var $v_0 = this.get_objectData().get_methodReturnObjects()['$m_dict'];
        if (SP.ScriptUtility.isNullOrUndefined($v_0)) {
            $v_0 = {};
            this.get_objectData().get_methodReturnObjects()['$m_dict'] = $v_0;
        }
        return $v_0;
    },
    
    get_item: function PS_StatusAssignment$get_item$in(fieldName) {ULSyTi:;
        return this.$6_1(fieldName);
    },
    
    set_item: function PS_StatusAssignment$set_item$in(fieldName, value) {ULSyTi:;
        this.$G_1(fieldName, value);
        return value;
    },
    
    get_actualFinish: function PS_StatusAssignment$get_actualFinish$in() {ULSyTi:;
        this.checkUninitializedProperty('ActualFinish');
        return (this.get_objectData().get_properties()['ActualFinish']);
    },
    
    set_actualFinish: function PS_StatusAssignment$set_actualFinish$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['ActualFinish'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'ActualFinish', value));
        }
        return value;
    },
    
    get_actualOvertime: function PS_StatusAssignment$get_actualOvertime$in() {ULSyTi:;
        this.checkUninitializedProperty('ActualOvertime');
        return (this.get_objectData().get_properties()['ActualOvertime']);
    },
    
    set_actualOvertime: function PS_StatusAssignment$set_actualOvertime$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['ActualOvertime'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'ActualOvertime', value));
        }
        return value;
    },
    
    get_actualOvertimeMilliseconds: function PS_StatusAssignment$get_actualOvertimeMilliseconds$in() {ULSyTi:;
        this.checkUninitializedProperty('ActualOvertimeMilliseconds');
        return (this.get_objectData().get_properties()['ActualOvertimeMilliseconds']);
    },
    
    set_actualOvertimeMilliseconds: function PS_StatusAssignment$set_actualOvertimeMilliseconds$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['ActualOvertimeMilliseconds'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'ActualOvertimeMilliseconds', value));
        }
        return value;
    },
    
    get_actualStart: function PS_StatusAssignment$get_actualStart$in() {ULSyTi:;
        this.checkUninitializedProperty('ActualStart');
        return (this.get_objectData().get_properties()['ActualStart']);
    },
    
    set_actualStart: function PS_StatusAssignment$set_actualStart$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['ActualStart'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'ActualStart', value));
        }
        return value;
    },
    
    get_actualWork: function PS_StatusAssignment$get_actualWork$in() {ULSyTi:;
        this.checkUninitializedProperty('ActualWork');
        return (this.get_objectData().get_properties()['ActualWork']);
    },
    
    set_actualWork: function PS_StatusAssignment$set_actualWork$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['ActualWork'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'ActualWork', value));
        }
        return value;
    },
    
    get_actualWorkMilliseconds: function PS_StatusAssignment$get_actualWorkMilliseconds$in() {ULSyTi:;
        this.checkUninitializedProperty('ActualWorkMilliseconds');
        return (this.get_objectData().get_properties()['ActualWorkMilliseconds']);
    },
    
    set_actualWorkMilliseconds: function PS_StatusAssignment$set_actualWorkMilliseconds$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['ActualWorkMilliseconds'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'ActualWorkMilliseconds', value));
        }
        return value;
    },
    
    get_approvalStatus: function PS_StatusAssignment$get_approvalStatus$in() {ULSyTi:;
        this.checkUninitializedProperty('ApprovalStatus');
        return (this.get_objectData().get_properties()['ApprovalStatus']);
    },
    
    get_comments: function PS_StatusAssignment$get_comments$in() {ULSyTi:;
        this.checkUninitializedProperty('Comments');
        return (this.get_objectData().get_properties()['Comments']);
    },
    
    set_comments: function PS_StatusAssignment$set_comments$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['Comments'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Comments', value));
        }
        return value;
    },
    
    get_customFields: function PS_StatusAssignment$get_customFields$in() {ULSyTi:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['CustomFields']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new PS.CustomFieldCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'CustomFields'));
            this.get_objectData().get_clientObjectProperties()['CustomFields'] = $v_0;
        }
        return $v_0;
    },
    
    get_finish: function PS_StatusAssignment$get_finish$in() {ULSyTi:;
        this.checkUninitializedProperty('Finish');
        return (this.get_objectData().get_properties()['Finish']);
    },
    
    set_finish: function PS_StatusAssignment$set_finish$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['Finish'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Finish', value));
        }
        return value;
    },
    
    get_history: function PS_StatusAssignment$get_history$in() {ULSyTi:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['History']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new PS.StatusAssignmentHistoryLineCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'History'));
            this.get_objectData().get_clientObjectProperties()['History'] = $v_0;
        }
        return $v_0;
    },
    
    get_id: function PS_StatusAssignment$get_id$in() {ULSyTi:;
        this.checkUninitializedProperty('Id');
        return (this.get_objectData().get_properties()['Id']);
    },
    
    get_isConfirmed: function PS_StatusAssignment$get_isConfirmed$in() {ULSyTi:;
        this.checkUninitializedProperty('IsConfirmed');
        return (this.get_objectData().get_properties()['IsConfirmed']);
    },
    
    set_isConfirmed: function PS_StatusAssignment$set_isConfirmed$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['IsConfirmed'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'IsConfirmed', value));
        }
        return value;
    },
    
    get_modified: function PS_StatusAssignment$get_modified$in() {ULSyTi:;
        this.checkUninitializedProperty('Modified');
        return (this.get_objectData().get_properties()['Modified']);
    },
    
    get_name: function PS_StatusAssignment$get_name$in() {ULSyTi:;
        this.checkUninitializedProperty('Name');
        return (this.get_objectData().get_properties()['Name']);
    },
    
    set_name: function PS_StatusAssignment$set_name$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['Name'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Name', value));
        }
        return value;
    },
    
    get_overtime: function PS_StatusAssignment$get_overtime$in() {ULSyTi:;
        this.checkUninitializedProperty('Overtime');
        return (this.get_objectData().get_properties()['Overtime']);
    },
    
    set_overtime: function PS_StatusAssignment$set_overtime$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['Overtime'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Overtime', value));
        }
        return value;
    },
    
    get_overtimeMilliseconds: function PS_StatusAssignment$get_overtimeMilliseconds$in() {ULSyTi:;
        this.checkUninitializedProperty('OvertimeMilliseconds');
        return (this.get_objectData().get_properties()['OvertimeMilliseconds']);
    },
    
    set_overtimeMilliseconds: function PS_StatusAssignment$set_overtimeMilliseconds$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['OvertimeMilliseconds'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'OvertimeMilliseconds', value));
        }
        return value;
    },
    
    get_percentComplete: function PS_StatusAssignment$get_percentComplete$in() {ULSyTi:;
        this.checkUninitializedProperty('PercentComplete');
        return (this.get_objectData().get_properties()['PercentComplete']);
    },
    
    set_percentComplete: function PS_StatusAssignment$set_percentComplete$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['PercentComplete'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'PercentComplete', value));
        }
        return value;
    },
    
    get_project: function PS_StatusAssignment$get_project$in() {ULSyTi:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['Project']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new PS.PublishedProject(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Project'));
            this.get_objectData().get_clientObjectProperties()['Project'] = $v_0;
        }
        return $v_0;
    },
    
    get_regularWork: function PS_StatusAssignment$get_regularWork$in() {ULSyTi:;
        this.checkUninitializedProperty('RegularWork');
        return (this.get_objectData().get_properties()['RegularWork']);
    },
    
    set_regularWork: function PS_StatusAssignment$set_regularWork$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['RegularWork'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'RegularWork', value));
        }
        return value;
    },
    
    get_regularWorkMilliseconds: function PS_StatusAssignment$get_regularWorkMilliseconds$in() {ULSyTi:;
        this.checkUninitializedProperty('RegularWorkMilliseconds');
        return (this.get_objectData().get_properties()['RegularWorkMilliseconds']);
    },
    
    set_regularWorkMilliseconds: function PS_StatusAssignment$set_regularWorkMilliseconds$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['RegularWorkMilliseconds'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'RegularWorkMilliseconds', value));
        }
        return value;
    },
    
    get_remainingOvertime: function PS_StatusAssignment$get_remainingOvertime$in() {ULSyTi:;
        this.checkUninitializedProperty('RemainingOvertime');
        return (this.get_objectData().get_properties()['RemainingOvertime']);
    },
    
    set_remainingOvertime: function PS_StatusAssignment$set_remainingOvertime$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['RemainingOvertime'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'RemainingOvertime', value));
        }
        return value;
    },
    
    get_remainingOvertimeMilliseconds: function PS_StatusAssignment$get_remainingOvertimeMilliseconds$in() {ULSyTi:;
        this.checkUninitializedProperty('RemainingOvertimeMilliseconds');
        return (this.get_objectData().get_properties()['RemainingOvertimeMilliseconds']);
    },
    
    set_remainingOvertimeMilliseconds: function PS_StatusAssignment$set_remainingOvertimeMilliseconds$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['RemainingOvertimeMilliseconds'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'RemainingOvertimeMilliseconds', value));
        }
        return value;
    },
    
    get_remainingWork: function PS_StatusAssignment$get_remainingWork$in() {ULSyTi:;
        this.checkUninitializedProperty('RemainingWork');
        return (this.get_objectData().get_properties()['RemainingWork']);
    },
    
    set_remainingWork: function PS_StatusAssignment$set_remainingWork$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['RemainingWork'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'RemainingWork', value));
        }
        return value;
    },
    
    get_remainingWorkMilliseconds: function PS_StatusAssignment$get_remainingWorkMilliseconds$in() {ULSyTi:;
        this.checkUninitializedProperty('RemainingWorkMilliseconds');
        return (this.get_objectData().get_properties()['RemainingWorkMilliseconds']);
    },
    
    set_remainingWorkMilliseconds: function PS_StatusAssignment$set_remainingWorkMilliseconds$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['RemainingWorkMilliseconds'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'RemainingWorkMilliseconds', value));
        }
        return value;
    },
    
    get_resource: function PS_StatusAssignment$get_resource$in() {ULSyTi:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['Resource']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new PS.EnterpriseResource(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Resource'));
            this.get_objectData().get_clientObjectProperties()['Resource'] = $v_0;
        }
        return $v_0;
    },
    
    get_start: function PS_StatusAssignment$get_start$in() {ULSyTi:;
        this.checkUninitializedProperty('Start');
        return (this.get_objectData().get_properties()['Start']);
    },
    
    set_start: function PS_StatusAssignment$set_start$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['Start'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Start', value));
        }
        return value;
    },
    
    get_task: function PS_StatusAssignment$get_task$in() {ULSyTi:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['Task']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new PS.StatusTask(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Task'));
            this.get_objectData().get_clientObjectProperties()['Task'] = $v_0;
        }
        return $v_0;
    },
    
    get_work: function PS_StatusAssignment$get_work$in() {ULSyTi:;
        this.checkUninitializedProperty('Work');
        return (this.get_objectData().get_properties()['Work']);
    },
    
    set_work: function PS_StatusAssignment$set_work$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['Work'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Work', value));
        }
        return value;
    },
    
    get_workMilliseconds: function PS_StatusAssignment$get_workMilliseconds$in() {ULSyTi:;
        this.checkUninitializedProperty('WorkMilliseconds');
        return (this.get_objectData().get_properties()['WorkMilliseconds']);
    },
    
    set_workMilliseconds: function PS_StatusAssignment$set_workMilliseconds$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['WorkMilliseconds'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'WorkMilliseconds', value));
        }
        return value;
    },
    
    initNonPropertiesFromJson: function PS_StatusAssignment$initNonPropertiesFromJson$in(parentNode) {ULSyTi:;
        SP.DataConvert.populateDictionaryFromObject(this.get_fieldValues(), parentNode);
        SP.DataConvert.fixupTypes(this.get_context(), this.get_fieldValues());
    },
    
    initPropertiesFromJson: function PS_StatusAssignment$initPropertiesFromJson$in(parentNode) {ULSyTi:;
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.ActualFinish;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ActualFinish'] = ($v_0);
            delete parentNode.ActualFinish;
        }
        $v_0 = parentNode.ActualOvertime;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ActualOvertime'] = ($v_0);
            delete parentNode.ActualOvertime;
        }
        $v_0 = parentNode.ActualOvertimeMilliseconds;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ActualOvertimeMilliseconds'] = ($v_0);
            delete parentNode.ActualOvertimeMilliseconds;
        }
        $v_0 = parentNode.ActualStart;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ActualStart'] = ($v_0);
            delete parentNode.ActualStart;
        }
        $v_0 = parentNode.ActualWork;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ActualWork'] = ($v_0);
            delete parentNode.ActualWork;
        }
        $v_0 = parentNode.ActualWorkMilliseconds;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ActualWorkMilliseconds'] = ($v_0);
            delete parentNode.ActualWorkMilliseconds;
        }
        $v_0 = parentNode.ApprovalStatus;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ApprovalStatus'] = ((SP.DataConvert.fixupType(this.get_context(), $v_0)));
            delete parentNode.ApprovalStatus;
        }
        $v_0 = parentNode.Comments;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Comments'] = ($v_0);
            delete parentNode.Comments;
        }
        $v_0 = parentNode.CustomFields;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('CustomFields', this.get_customFields(), $v_0);
            this.get_customFields().fromJson($v_0);
            delete parentNode.CustomFields;
        }
        $v_0 = parentNode.Finish;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Finish'] = ($v_0);
            delete parentNode.Finish;
        }
        $v_0 = parentNode.History;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('History', this.get_history(), $v_0);
            this.get_history().fromJson($v_0);
            delete parentNode.History;
        }
        $v_0 = parentNode.Id;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Id'] = ($v_0);
            delete parentNode.Id;
        }
        $v_0 = parentNode.IsConfirmed;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['IsConfirmed'] = ($v_0);
            delete parentNode.IsConfirmed;
        }
        $v_0 = parentNode.Modified;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Modified'] = ($v_0);
            delete parentNode.Modified;
        }
        $v_0 = parentNode.Name;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Name'] = ($v_0);
            delete parentNode.Name;
        }
        $v_0 = parentNode.Overtime;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Overtime'] = ($v_0);
            delete parentNode.Overtime;
        }
        $v_0 = parentNode.OvertimeMilliseconds;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['OvertimeMilliseconds'] = ($v_0);
            delete parentNode.OvertimeMilliseconds;
        }
        $v_0 = parentNode.PercentComplete;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['PercentComplete'] = ($v_0);
            delete parentNode.PercentComplete;
        }
        $v_0 = parentNode.Project;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('Project', this.get_project(), $v_0);
            this.get_project().fromJson($v_0);
            delete parentNode.Project;
        }
        $v_0 = parentNode.RegularWork;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['RegularWork'] = ($v_0);
            delete parentNode.RegularWork;
        }
        $v_0 = parentNode.RegularWorkMilliseconds;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['RegularWorkMilliseconds'] = ($v_0);
            delete parentNode.RegularWorkMilliseconds;
        }
        $v_0 = parentNode.RemainingOvertime;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['RemainingOvertime'] = ($v_0);
            delete parentNode.RemainingOvertime;
        }
        $v_0 = parentNode.RemainingOvertimeMilliseconds;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['RemainingOvertimeMilliseconds'] = ($v_0);
            delete parentNode.RemainingOvertimeMilliseconds;
        }
        $v_0 = parentNode.RemainingWork;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['RemainingWork'] = ($v_0);
            delete parentNode.RemainingWork;
        }
        $v_0 = parentNode.RemainingWorkMilliseconds;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['RemainingWorkMilliseconds'] = ($v_0);
            delete parentNode.RemainingWorkMilliseconds;
        }
        $v_0 = parentNode.Resource;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('Resource', this.get_resource(), $v_0);
            this.get_resource().fromJson($v_0);
            delete parentNode.Resource;
        }
        $v_0 = parentNode.Start;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Start'] = ($v_0);
            delete parentNode.Start;
        }
        $v_0 = parentNode.Task;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('Task', this.get_task(), $v_0);
            this.get_task().fromJson($v_0);
            delete parentNode.Task;
        }
        $v_0 = parentNode.Work;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Work'] = ($v_0);
            delete parentNode.Work;
        }
        $v_0 = parentNode.WorkMilliseconds;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['WorkMilliseconds'] = ($v_0);
            delete parentNode.WorkMilliseconds;
        }
    },
    
    $6_1: function PS_StatusAssignment$$6_1$in($p0) {
        var $v_0 = this.get_fieldValues()[$p0];
        if (SP.ScriptUtility.isUndefined($v_0)) {
            throw Error.create(SP.ResResources.getString('PropertyHasNotBeenInitialized'));
        }
        return $v_0;
    },
    
    refreshLoad: function PS_StatusAssignment$refreshLoad$in() {ULSyTi:;
        SP.ClientObject.prototype.refreshLoad.call(this);
        this.loadExpandoFields();
    },
    
    loadExpandoFields: function PS_StatusAssignment$loadExpandoFields$in() {ULSyTi:;
        var $$dict_1 = this.get_fieldValues();
        for (var $$key_2 in $$dict_1) {
            var $v_0 = { key: $$key_2, value: $$dict_1[$$key_2] };
            this.retrieve($v_0.key);
        }
    },
    
    $G_1: function PS_StatusAssignment$$G_1$in($p0, $p1) {
        var $v_0 = this.get_context();
        this.get_fieldValues()[$p0] = $p1;
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'SetCustomFieldValue', [ $p0, $p1 ]);
        if ($v_0) {
            $v_0.addQuery($v_1);
        }
    },
    
    submitStatusUpdates: function PS_StatusAssignment$submitStatusUpdates$in(comment) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'SubmitStatusUpdates', [ comment ]);
        $v_0.addQuery($v_1);
    },
    
    deleteObject: function PS_StatusAssignment$deleteObject$in() {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'DeleteObject', null);
        $v_0.addQuery($v_1);
        this.removeFromParentCollection();
    }
}


PS.StatusAssignmentPropertyNames = function PS_StatusAssignmentPropertyNames() {
}


PS.StatusAssignmentObjectPropertyNames = function PS_StatusAssignmentObjectPropertyNames() {
}


PS.StatusAssignmentCollection = function PS_StatusAssignmentCollection(context, objectPath) {ULSyTi:;
    PS.StatusAssignmentCollection.initializeBase(this, [ context, objectPath ]);
}
PS.StatusAssignmentCollection.prototype = {
    
    itemAt: function PS_StatusAssignmentCollection$itemAt$in(index) {ULSyTi:;
        return this.getItemAtIndex(index);
    },
    
    get_item: function PS_StatusAssignmentCollection$get_item$in(index) {ULSyTi:;
        return this.getItemAtIndex(index);
    },
    
    get_childItemType: function PS_StatusAssignmentCollection$get_childItemType$in() {ULSyTi:;
        return PS.StatusAssignment;
    },
    
    getTimePhase: function PS_StatusAssignmentCollection$getTimePhase$in(start, end) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        $v_1 = new PS.TimePhase($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetTimePhase', [ start, end ]));
        return $v_1;
    },
    
    getById: function PS_StatusAssignmentCollection$getById$in(objectId) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = ((this.get_objectData().get_methodReturnObjects()['GetById']));
        if (SP.ScriptUtility.isNullOrUndefined($v_2)) {
            $v_2 = {};
            this.get_objectData().get_methodReturnObjects()['GetById'] = $v_2;
        }
        $v_1 = (($v_2[objectId]));
        if (!$v_0.get_disableReturnValueCache() && !SP.ScriptUtility.isNullOrUndefined($v_1)) {
            return $v_1;
        }
        $v_1 = new PS.StatusAssignment($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetById', [ objectId ]));
        if (!$v_0.get_disableReturnValueCache()) {
            $v_2[objectId] = $v_1;
        }
        return $v_1;
    },
    
    getByGuid: function PS_StatusAssignmentCollection$getByGuid$in(uid) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = ((this.get_objectData().get_methodReturnObjects()['GetByGuid']));
        if (SP.ScriptUtility.isNullOrUndefined($v_2)) {
            $v_2 = {};
            this.get_objectData().get_methodReturnObjects()['GetByGuid'] = $v_2;
        }
        $v_1 = (($v_2[uid.toString()]));
        if (!$v_0.get_disableReturnValueCache() && !SP.ScriptUtility.isNullOrUndefined($v_1)) {
            return $v_1;
        }
        $v_1 = new PS.StatusAssignment($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetByGuid', [ uid ]));
        if (!$v_0.get_disableReturnValueCache()) {
            $v_2[uid.toString()] = $v_1;
        }
        return $v_1;
    },
    
    add: function PS_StatusAssignmentCollection$add$in(parameters) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        $v_1 = new PS.StatusAssignment($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'Add', [ parameters ]));
        $v_1.get_path().setPendingReplace();
        var $v_2 = new SP.ObjectIdentityQuery($v_1.get_path());
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        $v_0.addQuery($v_2);
        this.addChild($v_1);
        return $v_1;
    },
    
    remove: function PS_StatusAssignmentCollection$remove$in(assignment) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'Remove', [ assignment ]);
        $v_0.addQuery($v_2);
        $v_1 = new SP.BooleanResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        this.removeChild(assignment);
        return $v_1;
    },
    
    update: function PS_StatusAssignmentCollection$update$in() {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'Update', null);
        $v_0.addQuery($v_1);
    },
    
    submitAllStatusUpdates: function PS_StatusAssignmentCollection$submitAllStatusUpdates$in(comment) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'SubmitAllStatusUpdates', [ comment ]);
        $v_0.addQuery($v_1);
    }
}


PS.StatusAssignmentCreationInformation = function PS_StatusAssignmentCreationInformation() {ULSyTi:;
    PS.StatusAssignmentCreationInformation.initializeBase(this);
}
PS.StatusAssignmentCreationInformation.prototype = {
    $7_1: null,
    $0_1: null,
    $E_1: null,
    $1Y_1: null,
    
    get_comment: function PS_StatusAssignmentCreationInformation$get_comment$in() {ULSyTi:;
        return this.$7_1;
    },
    
    set_comment: function PS_StatusAssignmentCreationInformation$set_comment$in(value) {ULSyTi:;
        this.$7_1 = value;
        return value;
    },
    
    get_id: function PS_StatusAssignmentCreationInformation$get_id$in() {ULSyTi:;
        return this.$0_1;
    },
    
    set_id: function PS_StatusAssignmentCreationInformation$set_id$in(value) {ULSyTi:;
        this.$0_1 = value;
        return value;
    },
    
    get_projectId: function PS_StatusAssignmentCreationInformation$get_projectId$in() {ULSyTi:;
        return this.$E_1;
    },
    
    set_projectId: function PS_StatusAssignmentCreationInformation$set_projectId$in(value) {ULSyTi:;
        this.$E_1 = value;
        return value;
    },
    
    get_task: function PS_StatusAssignmentCreationInformation$get_task$in() {ULSyTi:;
        return this.$1Y_1;
    },
    
    set_task: function PS_StatusAssignmentCreationInformation$set_task$in(value) {ULSyTi:;
        this.$1Y_1 = value;
        return value;
    },
    
    get_typeId: function PS_StatusAssignmentCreationInformation$get_typeId$in() {ULSyTi:;
        return '{2b7abc77-4aea-4a63-9eec-ef34a21c8ba1}';
    },
    
    writeToXml: function PS_StatusAssignmentCreationInformation$writeToXml$in(writer, serializationContext) {ULSyTi:;
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = [ 'Comment', 'Id', 'ProjectId', 'Task' ];
        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    
    initPropertiesFromJson: function PS_StatusAssignmentCreationInformation$initPropertiesFromJson$in(parentNode) {ULSyTi:;
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.Comment;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$7_1 = ($v_0);
            delete parentNode.Comment;
        }
        $v_0 = parentNode.Id;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$0_1 = ($v_0);
            delete parentNode.Id;
        }
        $v_0 = parentNode.ProjectId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$E_1 = ($v_0);
            delete parentNode.ProjectId;
        }
        $v_0 = parentNode.Task;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1Y_1 = ((SP.DataConvert.fixupType(null, $v_0)));
            delete parentNode.Task;
        }
    }
}


PS.StatusAssignmentHistoryLine = function PS_StatusAssignmentHistoryLine(context, objectPath) {ULSyTi:;
    PS.StatusAssignmentHistoryLine.initializeBase(this, [ context, objectPath ]);
}
PS.StatusAssignmentHistoryLine.prototype = {
    
    get_author: function PS_StatusAssignmentHistoryLine$get_author$in() {ULSyTi:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['Author']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.User(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Author'));
            this.get_objectData().get_clientObjectProperties()['Author'] = $v_0;
        }
        return $v_0;
    },
    
    get_comment: function PS_StatusAssignmentHistoryLine$get_comment$in() {ULSyTi:;
        this.checkUninitializedProperty('Comment');
        return (this.get_objectData().get_properties()['Comment']);
    },
    
    get_decision: function PS_StatusAssignmentHistoryLine$get_decision$in() {ULSyTi:;
        this.checkUninitializedProperty('Decision');
        return (this.get_objectData().get_properties()['Decision']);
    },
    
    get_id: function PS_StatusAssignmentHistoryLine$get_id$in() {ULSyTi:;
        this.checkUninitializedProperty('Id');
        return (this.get_objectData().get_properties()['Id']);
    },
    
    get_submitted: function PS_StatusAssignmentHistoryLine$get_submitted$in() {ULSyTi:;
        this.checkUninitializedProperty('Submitted');
        return (this.get_objectData().get_properties()['Submitted']);
    },
    
    get_updateType: function PS_StatusAssignmentHistoryLine$get_updateType$in() {ULSyTi:;
        this.checkUninitializedProperty('UpdateType');
        return (this.get_objectData().get_properties()['UpdateType']);
    },
    
    initPropertiesFromJson: function PS_StatusAssignmentHistoryLine$initPropertiesFromJson$in(parentNode) {ULSyTi:;
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.Author;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('Author', this.get_author(), $v_0);
            this.get_author().fromJson($v_0);
            delete parentNode.Author;
        }
        $v_0 = parentNode.Comment;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Comment'] = ($v_0);
            delete parentNode.Comment;
        }
        $v_0 = parentNode.Decision;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Decision'] = ((SP.DataConvert.fixupType(this.get_context(), $v_0)));
            delete parentNode.Decision;
        }
        $v_0 = parentNode.Id;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Id'] = ($v_0);
            delete parentNode.Id;
        }
        $v_0 = parentNode.Submitted;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Submitted'] = ($v_0);
            delete parentNode.Submitted;
        }
        $v_0 = parentNode.UpdateType;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['UpdateType'] = ((SP.DataConvert.fixupType(this.get_context(), $v_0)));
            delete parentNode.UpdateType;
        }
    }
}


PS.StatusAssignmentHistoryLinePropertyNames = function PS_StatusAssignmentHistoryLinePropertyNames() {
}


PS.StatusAssignmentHistoryLineObjectPropertyNames = function PS_StatusAssignmentHistoryLineObjectPropertyNames() {
}


PS.StatusAssignmentHistoryLineCollection = function PS_StatusAssignmentHistoryLineCollection(context, objectPath) {ULSyTi:;
    PS.StatusAssignmentHistoryLineCollection.initializeBase(this, [ context, objectPath ]);
}
PS.StatusAssignmentHistoryLineCollection.prototype = {
    
    itemAt: function PS_StatusAssignmentHistoryLineCollection$itemAt$in(index) {ULSyTi:;
        return this.getItemAtIndex(index);
    },
    
    get_item: function PS_StatusAssignmentHistoryLineCollection$get_item$in(index) {ULSyTi:;
        return this.getItemAtIndex(index);
    },
    
    get_childItemType: function PS_StatusAssignmentHistoryLineCollection$get_childItemType$in() {ULSyTi:;
        return PS.StatusAssignmentHistoryLine;
    },
    
    getById: function PS_StatusAssignmentHistoryLineCollection$getById$in(objectId) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = ((this.get_objectData().get_methodReturnObjects()['GetById']));
        if (SP.ScriptUtility.isNullOrUndefined($v_2)) {
            $v_2 = {};
            this.get_objectData().get_methodReturnObjects()['GetById'] = $v_2;
        }
        $v_1 = (($v_2[objectId]));
        if (!$v_0.get_disableReturnValueCache() && !SP.ScriptUtility.isNullOrUndefined($v_1)) {
            return $v_1;
        }
        $v_1 = new PS.StatusAssignmentHistoryLine($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetById', [ objectId ]));
        if (!$v_0.get_disableReturnValueCache()) {
            $v_2[objectId] = $v_1;
        }
        return $v_1;
    }
}


PS.StatusTask = function PS_StatusTask(context, objectPath) {ULSyTi:;
    PS.StatusTask.initializeBase(this, [ context, objectPath ]);
}
PS.StatusTask.prototype = {
    
    get_actualWork: function PS_StatusTask$get_actualWork$in() {ULSyTi:;
        this.checkUninitializedProperty('ActualWork');
        return (this.get_objectData().get_properties()['ActualWork']);
    },
    
    set_actualWork: function PS_StatusTask$set_actualWork$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['ActualWork'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'ActualWork', value));
        }
        return value;
    },
    
    get_actualWorkMilliseconds: function PS_StatusTask$get_actualWorkMilliseconds$in() {ULSyTi:;
        this.checkUninitializedProperty('ActualWorkMilliseconds');
        return (this.get_objectData().get_properties()['ActualWorkMilliseconds']);
    },
    
    set_actualWorkMilliseconds: function PS_StatusTask$set_actualWorkMilliseconds$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['ActualWorkMilliseconds'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'ActualWorkMilliseconds', value));
        }
        return value;
    },
    
    get_deadline: function PS_StatusTask$get_deadline$in() {ULSyTi:;
        this.checkUninitializedProperty('Deadline');
        return (this.get_objectData().get_properties()['Deadline']);
    },
    
    set_deadline: function PS_StatusTask$set_deadline$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['Deadline'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Deadline', value));
        }
        return value;
    },
    
    get_duration: function PS_StatusTask$get_duration$in() {ULSyTi:;
        this.checkUninitializedProperty('Duration');
        return (this.get_objectData().get_properties()['Duration']);
    },
    
    set_duration: function PS_StatusTask$set_duration$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['Duration'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Duration', value));
        }
        return value;
    },
    
    get_durationMilliseconds: function PS_StatusTask$get_durationMilliseconds$in() {ULSyTi:;
        this.checkUninitializedProperty('DurationMilliseconds');
        return (this.get_objectData().get_properties()['DurationMilliseconds']);
    },
    
    set_durationMilliseconds: function PS_StatusTask$set_durationMilliseconds$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['DurationMilliseconds'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'DurationMilliseconds', value));
        }
        return value;
    },
    
    get_finish: function PS_StatusTask$get_finish$in() {ULSyTi:;
        this.checkUninitializedProperty('Finish');
        return (this.get_objectData().get_properties()['Finish']);
    },
    
    set_finish: function PS_StatusTask$set_finish$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['Finish'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Finish', value));
        }
        return value;
    },
    
    get_id: function PS_StatusTask$get_id$in() {ULSyTi:;
        this.checkUninitializedProperty('Id');
        return (this.get_objectData().get_properties()['Id']);
    },
    
    get_name: function PS_StatusTask$get_name$in() {ULSyTi:;
        this.checkUninitializedProperty('Name');
        return (this.get_objectData().get_properties()['Name']);
    },
    
    set_name: function PS_StatusTask$set_name$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['Name'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Name', value));
        }
        return value;
    },
    
    get_overtime: function PS_StatusTask$get_overtime$in() {ULSyTi:;
        this.checkUninitializedProperty('Overtime');
        return (this.get_objectData().get_properties()['Overtime']);
    },
    
    set_overtime: function PS_StatusTask$set_overtime$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['Overtime'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Overtime', value));
        }
        return value;
    },
    
    get_overtimeMilliseconds: function PS_StatusTask$get_overtimeMilliseconds$in() {ULSyTi:;
        this.checkUninitializedProperty('OvertimeMilliseconds');
        return (this.get_objectData().get_properties()['OvertimeMilliseconds']);
    },
    
    set_overtimeMilliseconds: function PS_StatusTask$set_overtimeMilliseconds$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['OvertimeMilliseconds'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'OvertimeMilliseconds', value));
        }
        return value;
    },
    
    get_percentComplete: function PS_StatusTask$get_percentComplete$in() {ULSyTi:;
        this.checkUninitializedProperty('PercentComplete');
        return (this.get_objectData().get_properties()['PercentComplete']);
    },
    
    set_percentComplete: function PS_StatusTask$set_percentComplete$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['PercentComplete'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'PercentComplete', value));
        }
        return value;
    },
    
    get_percentWorkComplete: function PS_StatusTask$get_percentWorkComplete$in() {ULSyTi:;
        this.checkUninitializedProperty('PercentWorkComplete');
        return (this.get_objectData().get_properties()['PercentWorkComplete']);
    },
    
    set_percentWorkComplete: function PS_StatusTask$set_percentWorkComplete$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['PercentWorkComplete'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'PercentWorkComplete', value));
        }
        return value;
    },
    
    get_physicalPercentComplete: function PS_StatusTask$get_physicalPercentComplete$in() {ULSyTi:;
        this.checkUninitializedProperty('PhysicalPercentComplete');
        return (this.get_objectData().get_properties()['PhysicalPercentComplete']);
    },
    
    set_physicalPercentComplete: function PS_StatusTask$set_physicalPercentComplete$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['PhysicalPercentComplete'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'PhysicalPercentComplete', value));
        }
        return value;
    },
    
    get_projectTaskId: function PS_StatusTask$get_projectTaskId$in() {ULSyTi:;
        this.checkUninitializedProperty('ProjectTaskId');
        return (this.get_objectData().get_properties()['ProjectTaskId']);
    },
    
    get_regularWork: function PS_StatusTask$get_regularWork$in() {ULSyTi:;
        this.checkUninitializedProperty('RegularWork');
        return (this.get_objectData().get_properties()['RegularWork']);
    },
    
    set_regularWork: function PS_StatusTask$set_regularWork$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['RegularWork'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'RegularWork', value));
        }
        return value;
    },
    
    get_regularWorkMilliseconds: function PS_StatusTask$get_regularWorkMilliseconds$in() {ULSyTi:;
        this.checkUninitializedProperty('RegularWorkMilliseconds');
        return (this.get_objectData().get_properties()['RegularWorkMilliseconds']);
    },
    
    set_regularWorkMilliseconds: function PS_StatusTask$set_regularWorkMilliseconds$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['RegularWorkMilliseconds'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'RegularWorkMilliseconds', value));
        }
        return value;
    },
    
    get_remainingDuration: function PS_StatusTask$get_remainingDuration$in() {ULSyTi:;
        this.checkUninitializedProperty('RemainingDuration');
        return (this.get_objectData().get_properties()['RemainingDuration']);
    },
    
    set_remainingDuration: function PS_StatusTask$set_remainingDuration$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['RemainingDuration'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'RemainingDuration', value));
        }
        return value;
    },
    
    get_remainingDurationMilliseconds: function PS_StatusTask$get_remainingDurationMilliseconds$in() {ULSyTi:;
        this.checkUninitializedProperty('RemainingDurationMilliseconds');
        return (this.get_objectData().get_properties()['RemainingDurationMilliseconds']);
    },
    
    set_remainingDurationMilliseconds: function PS_StatusTask$set_remainingDurationMilliseconds$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['RemainingDurationMilliseconds'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'RemainingDurationMilliseconds', value));
        }
        return value;
    },
    
    get_remainingOvertime: function PS_StatusTask$get_remainingOvertime$in() {ULSyTi:;
        this.checkUninitializedProperty('RemainingOvertime');
        return (this.get_objectData().get_properties()['RemainingOvertime']);
    },
    
    set_remainingOvertime: function PS_StatusTask$set_remainingOvertime$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['RemainingOvertime'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'RemainingOvertime', value));
        }
        return value;
    },
    
    get_remainingOvertimeMilliseconds: function PS_StatusTask$get_remainingOvertimeMilliseconds$in() {ULSyTi:;
        this.checkUninitializedProperty('RemainingOvertimeMilliseconds');
        return (this.get_objectData().get_properties()['RemainingOvertimeMilliseconds']);
    },
    
    set_remainingOvertimeMilliseconds: function PS_StatusTask$set_remainingOvertimeMilliseconds$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['RemainingOvertimeMilliseconds'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'RemainingOvertimeMilliseconds', value));
        }
        return value;
    },
    
    get_remainingWork: function PS_StatusTask$get_remainingWork$in() {ULSyTi:;
        this.checkUninitializedProperty('RemainingWork');
        return (this.get_objectData().get_properties()['RemainingWork']);
    },
    
    set_remainingWork: function PS_StatusTask$set_remainingWork$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['RemainingWork'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'RemainingWork', value));
        }
        return value;
    },
    
    get_remainingWorkMilliseconds: function PS_StatusTask$get_remainingWorkMilliseconds$in() {ULSyTi:;
        this.checkUninitializedProperty('RemainingWorkMilliseconds');
        return (this.get_objectData().get_properties()['RemainingWorkMilliseconds']);
    },
    
    set_remainingWorkMilliseconds: function PS_StatusTask$set_remainingWorkMilliseconds$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['RemainingWorkMilliseconds'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'RemainingWorkMilliseconds', value));
        }
        return value;
    },
    
    get_resume: function PS_StatusTask$get_resume$in() {ULSyTi:;
        this.checkUninitializedProperty('Resume');
        return (this.get_objectData().get_properties()['Resume']);
    },
    
    set_resume: function PS_StatusTask$set_resume$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['Resume'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Resume', value));
        }
        return value;
    },
    
    get_start: function PS_StatusTask$get_start$in() {ULSyTi:;
        this.checkUninitializedProperty('Start');
        return (this.get_objectData().get_properties()['Start']);
    },
    
    set_start: function PS_StatusTask$set_start$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['Start'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Start', value));
        }
        return value;
    },
    
    get_work: function PS_StatusTask$get_work$in() {ULSyTi:;
        this.checkUninitializedProperty('Work');
        return (this.get_objectData().get_properties()['Work']);
    },
    
    set_work: function PS_StatusTask$set_work$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['Work'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Work', value));
        }
        return value;
    },
    
    get_workMilliseconds: function PS_StatusTask$get_workMilliseconds$in() {ULSyTi:;
        this.checkUninitializedProperty('WorkMilliseconds');
        return (this.get_objectData().get_properties()['WorkMilliseconds']);
    },
    
    set_workMilliseconds: function PS_StatusTask$set_workMilliseconds$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['WorkMilliseconds'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'WorkMilliseconds', value));
        }
        return value;
    },
    
    initPropertiesFromJson: function PS_StatusTask$initPropertiesFromJson$in(parentNode) {ULSyTi:;
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.ActualWork;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ActualWork'] = ($v_0);
            delete parentNode.ActualWork;
        }
        $v_0 = parentNode.ActualWorkMilliseconds;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ActualWorkMilliseconds'] = ($v_0);
            delete parentNode.ActualWorkMilliseconds;
        }
        $v_0 = parentNode.Deadline;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Deadline'] = ($v_0);
            delete parentNode.Deadline;
        }
        $v_0 = parentNode.Duration;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Duration'] = ($v_0);
            delete parentNode.Duration;
        }
        $v_0 = parentNode.DurationMilliseconds;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['DurationMilliseconds'] = ($v_0);
            delete parentNode.DurationMilliseconds;
        }
        $v_0 = parentNode.Finish;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Finish'] = ($v_0);
            delete parentNode.Finish;
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
        $v_0 = parentNode.Overtime;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Overtime'] = ($v_0);
            delete parentNode.Overtime;
        }
        $v_0 = parentNode.OvertimeMilliseconds;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['OvertimeMilliseconds'] = ($v_0);
            delete parentNode.OvertimeMilliseconds;
        }
        $v_0 = parentNode.PercentComplete;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['PercentComplete'] = ($v_0);
            delete parentNode.PercentComplete;
        }
        $v_0 = parentNode.PercentWorkComplete;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['PercentWorkComplete'] = ($v_0);
            delete parentNode.PercentWorkComplete;
        }
        $v_0 = parentNode.PhysicalPercentComplete;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['PhysicalPercentComplete'] = ($v_0);
            delete parentNode.PhysicalPercentComplete;
        }
        $v_0 = parentNode.ProjectTaskId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ProjectTaskId'] = ($v_0);
            delete parentNode.ProjectTaskId;
        }
        $v_0 = parentNode.RegularWork;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['RegularWork'] = ($v_0);
            delete parentNode.RegularWork;
        }
        $v_0 = parentNode.RegularWorkMilliseconds;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['RegularWorkMilliseconds'] = ($v_0);
            delete parentNode.RegularWorkMilliseconds;
        }
        $v_0 = parentNode.RemainingDuration;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['RemainingDuration'] = ($v_0);
            delete parentNode.RemainingDuration;
        }
        $v_0 = parentNode.RemainingDurationMilliseconds;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['RemainingDurationMilliseconds'] = ($v_0);
            delete parentNode.RemainingDurationMilliseconds;
        }
        $v_0 = parentNode.RemainingOvertime;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['RemainingOvertime'] = ($v_0);
            delete parentNode.RemainingOvertime;
        }
        $v_0 = parentNode.RemainingOvertimeMilliseconds;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['RemainingOvertimeMilliseconds'] = ($v_0);
            delete parentNode.RemainingOvertimeMilliseconds;
        }
        $v_0 = parentNode.RemainingWork;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['RemainingWork'] = ($v_0);
            delete parentNode.RemainingWork;
        }
        $v_0 = parentNode.RemainingWorkMilliseconds;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['RemainingWorkMilliseconds'] = ($v_0);
            delete parentNode.RemainingWorkMilliseconds;
        }
        $v_0 = parentNode.Resume;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Resume'] = ($v_0);
            delete parentNode.Resume;
        }
        $v_0 = parentNode.Start;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Start'] = ($v_0);
            delete parentNode.Start;
        }
        $v_0 = parentNode.Work;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Work'] = ($v_0);
            delete parentNode.Work;
        }
        $v_0 = parentNode.WorkMilliseconds;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['WorkMilliseconds'] = ($v_0);
            delete parentNode.WorkMilliseconds;
        }
    }
}


PS.StatusTaskPropertyNames = function PS_StatusTaskPropertyNames() {
}


PS.StatusTaskCreationInformation = function PS_StatusTaskCreationInformation() {ULSyTi:;
    PS.StatusTaskCreationInformation.initializeBase(this);
}
PS.StatusTaskCreationInformation.prototype = {
    $5_1: null,
    $0_1: null,
    $1_1: null,
    $9_1: null,
    $3_1: null,
    $1d_1: null,
    
    get_finish: function PS_StatusTaskCreationInformation$get_finish$in() {ULSyTi:;
        return this.$5_1;
    },
    
    set_finish: function PS_StatusTaskCreationInformation$set_finish$in(value) {ULSyTi:;
        this.$5_1 = value;
        return value;
    },
    
    get_id: function PS_StatusTaskCreationInformation$get_id$in() {ULSyTi:;
        return this.$0_1;
    },
    
    set_id: function PS_StatusTaskCreationInformation$set_id$in(value) {ULSyTi:;
        this.$0_1 = value;
        return value;
    },
    
    get_name: function PS_StatusTaskCreationInformation$get_name$in() {ULSyTi:;
        return this.$1_1;
    },
    
    set_name: function PS_StatusTaskCreationInformation$set_name$in(value) {ULSyTi:;
        this.$1_1 = value;
        return value;
    },
    
    get_parentId: function PS_StatusTaskCreationInformation$get_parentId$in() {ULSyTi:;
        return this.$9_1;
    },
    
    set_parentId: function PS_StatusTaskCreationInformation$set_parentId$in(value) {ULSyTi:;
        this.$9_1 = value;
        return value;
    },
    
    get_start: function PS_StatusTaskCreationInformation$get_start$in() {ULSyTi:;
        return this.$3_1;
    },
    
    set_start: function PS_StatusTaskCreationInformation$set_start$in(value) {ULSyTi:;
        this.$3_1 = value;
        return value;
    },
    
    get_work: function PS_StatusTaskCreationInformation$get_work$in() {ULSyTi:;
        return this.$1d_1;
    },
    
    set_work: function PS_StatusTaskCreationInformation$set_work$in(value) {ULSyTi:;
        this.$1d_1 = value;
        return value;
    },
    
    get_typeId: function PS_StatusTaskCreationInformation$get_typeId$in() {ULSyTi:;
        return '{46b2e157-f944-44fc-84e9-292b0595c1de}';
    },
    
    writeToXml: function PS_StatusTaskCreationInformation$writeToXml$in(writer, serializationContext) {ULSyTi:;
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = [ 'Finish', 'Id', 'Name', 'ParentId', 'Start', 'Work' ];
        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    
    initPropertiesFromJson: function PS_StatusTaskCreationInformation$initPropertiesFromJson$in(parentNode) {ULSyTi:;
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.Finish;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$5_1 = ($v_0);
            delete parentNode.Finish;
        }
        $v_0 = parentNode.Id;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$0_1 = ($v_0);
            delete parentNode.Id;
        }
        $v_0 = parentNode.Name;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1_1 = ($v_0);
            delete parentNode.Name;
        }
        $v_0 = parentNode.ParentId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$9_1 = ($v_0);
            delete parentNode.ParentId;
        }
        $v_0 = parentNode.Start;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$3_1 = ($v_0);
            delete parentNode.Start;
        }
        $v_0 = parentNode.Work;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1d_1 = ($v_0);
            delete parentNode.Work;
        }
    }
}


PS.Task = function PS_Task(context, objectPath) {ULSyTi:;
    PS.Task.initializeBase(this, [ context, objectPath ]);
}
PS.Task.prototype = {
    
    get_actualCostWorkPerformed: function PS_Task$get_actualCostWorkPerformed$in() {ULSyTi:;
        this.checkUninitializedProperty('ActualCostWorkPerformed');
        return (this.get_objectData().get_properties()['ActualCostWorkPerformed']);
    },
    
    get_actualDuration: function PS_Task$get_actualDuration$in() {ULSyTi:;
        this.checkUninitializedProperty('ActualDuration');
        return (this.get_objectData().get_properties()['ActualDuration']);
    },
    
    get_actualDurationMilliseconds: function PS_Task$get_actualDurationMilliseconds$in() {ULSyTi:;
        this.checkUninitializedProperty('ActualDurationMilliseconds');
        return (this.get_objectData().get_properties()['ActualDurationMilliseconds']);
    },
    
    get_actualOvertimeCost: function PS_Task$get_actualOvertimeCost$in() {ULSyTi:;
        this.checkUninitializedProperty('ActualOvertimeCost');
        return (this.get_objectData().get_properties()['ActualOvertimeCost']);
    },
    
    get_actualOvertimeWork: function PS_Task$get_actualOvertimeWork$in() {ULSyTi:;
        this.checkUninitializedProperty('ActualOvertimeWork');
        return (this.get_objectData().get_properties()['ActualOvertimeWork']);
    },
    
    get_actualOvertimeWorkMilliseconds: function PS_Task$get_actualOvertimeWorkMilliseconds$in() {ULSyTi:;
        this.checkUninitializedProperty('ActualOvertimeWorkMilliseconds');
        return (this.get_objectData().get_properties()['ActualOvertimeWorkMilliseconds']);
    },
    
    get_baselineCost: function PS_Task$get_baselineCost$in() {ULSyTi:;
        this.checkUninitializedProperty('BaselineCost');
        return (this.get_objectData().get_properties()['BaselineCost']);
    },
    
    get_baselineDuration: function PS_Task$get_baselineDuration$in() {ULSyTi:;
        this.checkUninitializedProperty('BaselineDuration');
        return (this.get_objectData().get_properties()['BaselineDuration']);
    },
    
    get_baselineDurationMilliseconds: function PS_Task$get_baselineDurationMilliseconds$in() {ULSyTi:;
        this.checkUninitializedProperty('BaselineDurationMilliseconds');
        return (this.get_objectData().get_properties()['BaselineDurationMilliseconds']);
    },
    
    get_baselineFinish: function PS_Task$get_baselineFinish$in() {ULSyTi:;
        this.checkUninitializedProperty('BaselineFinish');
        return (this.get_objectData().get_properties()['BaselineFinish']);
    },
    
    get_baselineStart: function PS_Task$get_baselineStart$in() {ULSyTi:;
        this.checkUninitializedProperty('BaselineStart');
        return (this.get_objectData().get_properties()['BaselineStart']);
    },
    
    get_baselineWork: function PS_Task$get_baselineWork$in() {ULSyTi:;
        this.checkUninitializedProperty('BaselineWork');
        return (this.get_objectData().get_properties()['BaselineWork']);
    },
    
    get_baselineWorkMilliseconds: function PS_Task$get_baselineWorkMilliseconds$in() {ULSyTi:;
        this.checkUninitializedProperty('BaselineWorkMilliseconds');
        return (this.get_objectData().get_properties()['BaselineWorkMilliseconds']);
    },
    
    get_budgetCost: function PS_Task$get_budgetCost$in() {ULSyTi:;
        this.checkUninitializedProperty('BudgetCost');
        return (this.get_objectData().get_properties()['BudgetCost']);
    },
    
    get_budgetedCostWorkPerformed: function PS_Task$get_budgetedCostWorkPerformed$in() {ULSyTi:;
        this.checkUninitializedProperty('BudgetedCostWorkPerformed');
        return (this.get_objectData().get_properties()['BudgetedCostWorkPerformed']);
    },
    
    get_budgetedCostWorkScheduled: function PS_Task$get_budgetedCostWorkScheduled$in() {ULSyTi:;
        this.checkUninitializedProperty('BudgetedCostWorkScheduled');
        return (this.get_objectData().get_properties()['BudgetedCostWorkScheduled']);
    },
    
    get_contact: function PS_Task$get_contact$in() {ULSyTi:;
        this.checkUninitializedProperty('Contact');
        return (this.get_objectData().get_properties()['Contact']);
    },
    
    get_costPerformanceIndex: function PS_Task$get_costPerformanceIndex$in() {ULSyTi:;
        this.checkUninitializedProperty('CostPerformanceIndex');
        return (this.get_objectData().get_properties()['CostPerformanceIndex']);
    },
    
    get_costVariance: function PS_Task$get_costVariance$in() {ULSyTi:;
        this.checkUninitializedProperty('CostVariance');
        return (this.get_objectData().get_properties()['CostVariance']);
    },
    
    get_costVarianceAtCompletion: function PS_Task$get_costVarianceAtCompletion$in() {ULSyTi:;
        this.checkUninitializedProperty('CostVarianceAtCompletion');
        return (this.get_objectData().get_properties()['CostVarianceAtCompletion']);
    },
    
    get_costVariancePercentage: function PS_Task$get_costVariancePercentage$in() {ULSyTi:;
        this.checkUninitializedProperty('CostVariancePercentage');
        return (this.get_objectData().get_properties()['CostVariancePercentage']);
    },
    
    get_created: function PS_Task$get_created$in() {ULSyTi:;
        this.checkUninitializedProperty('Created');
        return (this.get_objectData().get_properties()['Created']);
    },
    
    get_currentCostVariance: function PS_Task$get_currentCostVariance$in() {ULSyTi:;
        this.checkUninitializedProperty('CurrentCostVariance');
        return (this.get_objectData().get_properties()['CurrentCostVariance']);
    },
    
    get_customFields: function PS_Task$get_customFields$in() {ULSyTi:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['CustomFields']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new PS.CustomFieldCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'CustomFields'));
            this.get_objectData().get_clientObjectProperties()['CustomFields'] = $v_0;
        }
        return $v_0;
    },
    
    get_durationVariance: function PS_Task$get_durationVariance$in() {ULSyTi:;
        this.checkUninitializedProperty('DurationVariance');
        return (this.get_objectData().get_properties()['DurationVariance']);
    },
    
    get_durationVarianceMilliseconds: function PS_Task$get_durationVarianceMilliseconds$in() {ULSyTi:;
        this.checkUninitializedProperty('DurationVarianceMilliseconds');
        return (this.get_objectData().get_properties()['DurationVarianceMilliseconds']);
    },
    
    get_earliestFinish: function PS_Task$get_earliestFinish$in() {ULSyTi:;
        this.checkUninitializedProperty('EarliestFinish');
        return (this.get_objectData().get_properties()['EarliestFinish']);
    },
    
    get_earliestStart: function PS_Task$get_earliestStart$in() {ULSyTi:;
        this.checkUninitializedProperty('EarliestStart');
        return (this.get_objectData().get_properties()['EarliestStart']);
    },
    
    get_estimateAtCompletion: function PS_Task$get_estimateAtCompletion$in() {ULSyTi:;
        this.checkUninitializedProperty('EstimateAtCompletion');
        return (this.get_objectData().get_properties()['EstimateAtCompletion']);
    },
    
    get_finishSlack: function PS_Task$get_finishSlack$in() {ULSyTi:;
        this.checkUninitializedProperty('FinishSlack');
        return (this.get_objectData().get_properties()['FinishSlack']);
    },
    
    get_finishSlackMilliseconds: function PS_Task$get_finishSlackMilliseconds$in() {ULSyTi:;
        this.checkUninitializedProperty('FinishSlackMilliseconds');
        return (this.get_objectData().get_properties()['FinishSlackMilliseconds']);
    },
    
    get_finishVariance: function PS_Task$get_finishVariance$in() {ULSyTi:;
        this.checkUninitializedProperty('FinishVariance');
        return (this.get_objectData().get_properties()['FinishVariance']);
    },
    
    get_finishVarianceMilliseconds: function PS_Task$get_finishVarianceMilliseconds$in() {ULSyTi:;
        this.checkUninitializedProperty('FinishVarianceMilliseconds');
        return (this.get_objectData().get_properties()['FinishVarianceMilliseconds']);
    },
    
    get_fixedCostAccrual: function PS_Task$get_fixedCostAccrual$in() {ULSyTi:;
        this.checkUninitializedProperty('FixedCostAccrual');
        return (this.get_objectData().get_properties()['FixedCostAccrual']);
    },
    
    get_freeSlack: function PS_Task$get_freeSlack$in() {ULSyTi:;
        this.checkUninitializedProperty('FreeSlack');
        return (this.get_objectData().get_properties()['FreeSlack']);
    },
    
    get_freeSlackMilliseconds: function PS_Task$get_freeSlackMilliseconds$in() {ULSyTi:;
        this.checkUninitializedProperty('FreeSlackMilliseconds');
        return (this.get_objectData().get_properties()['FreeSlackMilliseconds']);
    },
    
    get_id: function PS_Task$get_id$in() {ULSyTi:;
        this.checkUninitializedProperty('Id');
        return (this.get_objectData().get_properties()['Id']);
    },
    
    get_ignoreResourceCalendar: function PS_Task$get_ignoreResourceCalendar$in() {ULSyTi:;
        this.checkUninitializedProperty('IgnoreResourceCalendar');
        return (this.get_objectData().get_properties()['IgnoreResourceCalendar']);
    },
    
    get_isCritical: function PS_Task$get_isCritical$in() {ULSyTi:;
        this.checkUninitializedProperty('IsCritical');
        return (this.get_objectData().get_properties()['IsCritical']);
    },
    
    get_isEffortDriven: function PS_Task$get_isEffortDriven$in() {ULSyTi:;
        this.checkUninitializedProperty('IsEffortDriven');
        return (this.get_objectData().get_properties()['IsEffortDriven']);
    },
    
    get_isExternalTask: function PS_Task$get_isExternalTask$in() {ULSyTi:;
        this.checkUninitializedProperty('IsExternalTask');
        return (this.get_objectData().get_properties()['IsExternalTask']);
    },
    
    get_isOverAllocated: function PS_Task$get_isOverAllocated$in() {ULSyTi:;
        this.checkUninitializedProperty('IsOverAllocated');
        return (this.get_objectData().get_properties()['IsOverAllocated']);
    },
    
    get_isRecurring: function PS_Task$get_isRecurring$in() {ULSyTi:;
        this.checkUninitializedProperty('IsRecurring');
        return (this.get_objectData().get_properties()['IsRecurring']);
    },
    
    get_isRecurringSummary: function PS_Task$get_isRecurringSummary$in() {ULSyTi:;
        this.checkUninitializedProperty('IsRecurringSummary');
        return (this.get_objectData().get_properties()['IsRecurringSummary']);
    },
    
    get_isRolledUp: function PS_Task$get_isRolledUp$in() {ULSyTi:;
        this.checkUninitializedProperty('IsRolledUp');
        return (this.get_objectData().get_properties()['IsRolledUp']);
    },
    
    get_isSubProject: function PS_Task$get_isSubProject$in() {ULSyTi:;
        this.checkUninitializedProperty('IsSubProject');
        return (this.get_objectData().get_properties()['IsSubProject']);
    },
    
    get_isSubProjectReadOnly: function PS_Task$get_isSubProjectReadOnly$in() {ULSyTi:;
        this.checkUninitializedProperty('IsSubProjectReadOnly');
        return (this.get_objectData().get_properties()['IsSubProjectReadOnly']);
    },
    
    get_isSubProjectScheduledFromFinish: function PS_Task$get_isSubProjectScheduledFromFinish$in() {ULSyTi:;
        this.checkUninitializedProperty('IsSubProjectScheduledFromFinish');
        return (this.get_objectData().get_properties()['IsSubProjectScheduledFromFinish']);
    },
    
    get_isSummary: function PS_Task$get_isSummary$in() {ULSyTi:;
        this.checkUninitializedProperty('IsSummary');
        return (this.get_objectData().get_properties()['IsSummary']);
    },
    
    get_latestFinish: function PS_Task$get_latestFinish$in() {ULSyTi:;
        this.checkUninitializedProperty('LatestFinish');
        return (this.get_objectData().get_properties()['LatestFinish']);
    },
    
    get_latestStart: function PS_Task$get_latestStart$in() {ULSyTi:;
        this.checkUninitializedProperty('LatestStart');
        return (this.get_objectData().get_properties()['LatestStart']);
    },
    
    get_levelingDelay: function PS_Task$get_levelingDelay$in() {ULSyTi:;
        this.checkUninitializedProperty('LevelingDelay');
        return (this.get_objectData().get_properties()['LevelingDelay']);
    },
    
    get_levelingDelayMilliseconds: function PS_Task$get_levelingDelayMilliseconds$in() {ULSyTi:;
        this.checkUninitializedProperty('LevelingDelayMilliseconds');
        return (this.get_objectData().get_properties()['LevelingDelayMilliseconds']);
    },
    
    get_modified: function PS_Task$get_modified$in() {ULSyTi:;
        this.checkUninitializedProperty('Modified');
        return (this.get_objectData().get_properties()['Modified']);
    },
    
    get_notes: function PS_Task$get_notes$in() {ULSyTi:;
        this.checkUninitializedProperty('Notes');
        return (this.get_objectData().get_properties()['Notes']);
    },
    
    get_outlinePosition: function PS_Task$get_outlinePosition$in() {ULSyTi:;
        this.checkUninitializedProperty('OutlinePosition');
        return (this.get_objectData().get_properties()['OutlinePosition']);
    },
    
    get_overtimeCost: function PS_Task$get_overtimeCost$in() {ULSyTi:;
        this.checkUninitializedProperty('OvertimeCost');
        return (this.get_objectData().get_properties()['OvertimeCost']);
    },
    
    get_overtimeWork: function PS_Task$get_overtimeWork$in() {ULSyTi:;
        this.checkUninitializedProperty('OvertimeWork');
        return (this.get_objectData().get_properties()['OvertimeWork']);
    },
    
    get_overtimeWorkMilliseconds: function PS_Task$get_overtimeWorkMilliseconds$in() {ULSyTi:;
        this.checkUninitializedProperty('OvertimeWorkMilliseconds');
        return (this.get_objectData().get_properties()['OvertimeWorkMilliseconds']);
    },
    
    get_percentWorkComplete: function PS_Task$get_percentWorkComplete$in() {ULSyTi:;
        this.checkUninitializedProperty('PercentWorkComplete');
        return (this.get_objectData().get_properties()['PercentWorkComplete']);
    },
    
    get_preLevelingFinish: function PS_Task$get_preLevelingFinish$in() {ULSyTi:;
        this.checkUninitializedProperty('PreLevelingFinish');
        return (this.get_objectData().get_properties()['PreLevelingFinish']);
    },
    
    get_preLevelingStart: function PS_Task$get_preLevelingStart$in() {ULSyTi:;
        this.checkUninitializedProperty('PreLevelingStart');
        return (this.get_objectData().get_properties()['PreLevelingStart']);
    },
    
    get_regularWork: function PS_Task$get_regularWork$in() {ULSyTi:;
        this.checkUninitializedProperty('RegularWork');
        return (this.get_objectData().get_properties()['RegularWork']);
    },
    
    get_regularWorkMilliseconds: function PS_Task$get_regularWorkMilliseconds$in() {ULSyTi:;
        this.checkUninitializedProperty('RegularWorkMilliseconds');
        return (this.get_objectData().get_properties()['RegularWorkMilliseconds']);
    },
    
    get_remainingCost: function PS_Task$get_remainingCost$in() {ULSyTi:;
        this.checkUninitializedProperty('RemainingCost');
        return (this.get_objectData().get_properties()['RemainingCost']);
    },
    
    get_remainingOvertimeCost: function PS_Task$get_remainingOvertimeCost$in() {ULSyTi:;
        this.checkUninitializedProperty('RemainingOvertimeCost');
        return (this.get_objectData().get_properties()['RemainingOvertimeCost']);
    },
    
    get_remainingOvertimeWork: function PS_Task$get_remainingOvertimeWork$in() {ULSyTi:;
        this.checkUninitializedProperty('RemainingOvertimeWork');
        return (this.get_objectData().get_properties()['RemainingOvertimeWork']);
    },
    
    get_remainingOvertimeWorkMilliseconds: function PS_Task$get_remainingOvertimeWorkMilliseconds$in() {ULSyTi:;
        this.checkUninitializedProperty('RemainingOvertimeWorkMilliseconds');
        return (this.get_objectData().get_properties()['RemainingOvertimeWorkMilliseconds']);
    },
    
    get_remainingWork: function PS_Task$get_remainingWork$in() {ULSyTi:;
        this.checkUninitializedProperty('RemainingWork');
        return (this.get_objectData().get_properties()['RemainingWork']);
    },
    
    get_remainingWorkMilliseconds: function PS_Task$get_remainingWorkMilliseconds$in() {ULSyTi:;
        this.checkUninitializedProperty('RemainingWorkMilliseconds');
        return (this.get_objectData().get_properties()['RemainingWorkMilliseconds']);
    },
    
    get_resume: function PS_Task$get_resume$in() {ULSyTi:;
        this.checkUninitializedProperty('Resume');
        return (this.get_objectData().get_properties()['Resume']);
    },
    
    get_scheduleCostVariance: function PS_Task$get_scheduleCostVariance$in() {ULSyTi:;
        this.checkUninitializedProperty('ScheduleCostVariance');
        return (this.get_objectData().get_properties()['ScheduleCostVariance']);
    },
    
    get_scheduledDuration: function PS_Task$get_scheduledDuration$in() {ULSyTi:;
        this.checkUninitializedProperty('ScheduledDuration');
        return (this.get_objectData().get_properties()['ScheduledDuration']);
    },
    
    get_scheduledDurationMilliseconds: function PS_Task$get_scheduledDurationMilliseconds$in() {ULSyTi:;
        this.checkUninitializedProperty('ScheduledDurationMilliseconds');
        return (this.get_objectData().get_properties()['ScheduledDurationMilliseconds']);
    },
    
    get_scheduledFinish: function PS_Task$get_scheduledFinish$in() {ULSyTi:;
        this.checkUninitializedProperty('ScheduledFinish');
        return (this.get_objectData().get_properties()['ScheduledFinish']);
    },
    
    get_scheduledStart: function PS_Task$get_scheduledStart$in() {ULSyTi:;
        this.checkUninitializedProperty('ScheduledStart');
        return (this.get_objectData().get_properties()['ScheduledStart']);
    },
    
    get_schedulePerformanceIndex: function PS_Task$get_schedulePerformanceIndex$in() {ULSyTi:;
        this.checkUninitializedProperty('SchedulePerformanceIndex');
        return (this.get_objectData().get_properties()['SchedulePerformanceIndex']);
    },
    
    get_scheduleVariancePercentage: function PS_Task$get_scheduleVariancePercentage$in() {ULSyTi:;
        this.checkUninitializedProperty('ScheduleVariancePercentage');
        return (this.get_objectData().get_properties()['ScheduleVariancePercentage']);
    },
    
    get_startSlack: function PS_Task$get_startSlack$in() {ULSyTi:;
        this.checkUninitializedProperty('StartSlack');
        return (this.get_objectData().get_properties()['StartSlack']);
    },
    
    get_startSlackMilliseconds: function PS_Task$get_startSlackMilliseconds$in() {ULSyTi:;
        this.checkUninitializedProperty('StartSlackMilliseconds');
        return (this.get_objectData().get_properties()['StartSlackMilliseconds']);
    },
    
    get_startVariance: function PS_Task$get_startVariance$in() {ULSyTi:;
        this.checkUninitializedProperty('StartVariance');
        return (this.get_objectData().get_properties()['StartVariance']);
    },
    
    get_startVarianceMilliseconds: function PS_Task$get_startVarianceMilliseconds$in() {ULSyTi:;
        this.checkUninitializedProperty('StartVarianceMilliseconds');
        return (this.get_objectData().get_properties()['StartVarianceMilliseconds']);
    },
    
    get_stop: function PS_Task$get_stop$in() {ULSyTi:;
        this.checkUninitializedProperty('Stop');
        return (this.get_objectData().get_properties()['Stop']);
    },
    
    get_subProject: function PS_Task$get_subProject$in() {ULSyTi:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['SubProject']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new PS.PublishedProject(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'SubProject'));
            this.get_objectData().get_clientObjectProperties()['SubProject'] = $v_0;
        }
        return $v_0;
    },
    
    get_taskType: function PS_Task$get_taskType$in() {ULSyTi:;
        this.checkUninitializedProperty('TaskType');
        return (this.get_objectData().get_properties()['TaskType']);
    },
    
    get_toCompletePerformanceIndex: function PS_Task$get_toCompletePerformanceIndex$in() {ULSyTi:;
        this.checkUninitializedProperty('ToCompletePerformanceIndex');
        return (this.get_objectData().get_properties()['ToCompletePerformanceIndex']);
    },
    
    get_totalSlack: function PS_Task$get_totalSlack$in() {ULSyTi:;
        this.checkUninitializedProperty('TotalSlack');
        return (this.get_objectData().get_properties()['TotalSlack']);
    },
    
    get_totalSlackMilliseconds: function PS_Task$get_totalSlackMilliseconds$in() {ULSyTi:;
        this.checkUninitializedProperty('TotalSlackMilliseconds');
        return (this.get_objectData().get_properties()['TotalSlackMilliseconds']);
    },
    
    get_workBreakdownStructure: function PS_Task$get_workBreakdownStructure$in() {ULSyTi:;
        this.checkUninitializedProperty('WorkBreakdownStructure');
        return (this.get_objectData().get_properties()['WorkBreakdownStructure']);
    },
    
    get_workVariance: function PS_Task$get_workVariance$in() {ULSyTi:;
        this.checkUninitializedProperty('WorkVariance');
        return (this.get_objectData().get_properties()['WorkVariance']);
    },
    
    get_workVarianceMilliseconds: function PS_Task$get_workVarianceMilliseconds$in() {ULSyTi:;
        this.checkUninitializedProperty('WorkVarianceMilliseconds');
        return (this.get_objectData().get_properties()['WorkVarianceMilliseconds']);
    },
    
    initPropertiesFromJson: function PS_Task$initPropertiesFromJson$in(parentNode) {ULSyTi:;
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.ActualCostWorkPerformed;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ActualCostWorkPerformed'] = ($v_0);
            delete parentNode.ActualCostWorkPerformed;
        }
        $v_0 = parentNode.ActualDuration;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ActualDuration'] = ($v_0);
            delete parentNode.ActualDuration;
        }
        $v_0 = parentNode.ActualDurationMilliseconds;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ActualDurationMilliseconds'] = ($v_0);
            delete parentNode.ActualDurationMilliseconds;
        }
        $v_0 = parentNode.ActualOvertimeCost;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ActualOvertimeCost'] = ($v_0);
            delete parentNode.ActualOvertimeCost;
        }
        $v_0 = parentNode.ActualOvertimeWork;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ActualOvertimeWork'] = ($v_0);
            delete parentNode.ActualOvertimeWork;
        }
        $v_0 = parentNode.ActualOvertimeWorkMilliseconds;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ActualOvertimeWorkMilliseconds'] = ($v_0);
            delete parentNode.ActualOvertimeWorkMilliseconds;
        }
        $v_0 = parentNode.BaselineCost;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['BaselineCost'] = ($v_0);
            delete parentNode.BaselineCost;
        }
        $v_0 = parentNode.BaselineDuration;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['BaselineDuration'] = ($v_0);
            delete parentNode.BaselineDuration;
        }
        $v_0 = parentNode.BaselineDurationMilliseconds;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['BaselineDurationMilliseconds'] = ($v_0);
            delete parentNode.BaselineDurationMilliseconds;
        }
        $v_0 = parentNode.BaselineFinish;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['BaselineFinish'] = ($v_0);
            delete parentNode.BaselineFinish;
        }
        $v_0 = parentNode.BaselineStart;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['BaselineStart'] = ($v_0);
            delete parentNode.BaselineStart;
        }
        $v_0 = parentNode.BaselineWork;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['BaselineWork'] = ($v_0);
            delete parentNode.BaselineWork;
        }
        $v_0 = parentNode.BaselineWorkMilliseconds;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['BaselineWorkMilliseconds'] = ($v_0);
            delete parentNode.BaselineWorkMilliseconds;
        }
        $v_0 = parentNode.BudgetCost;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['BudgetCost'] = ($v_0);
            delete parentNode.BudgetCost;
        }
        $v_0 = parentNode.BudgetedCostWorkPerformed;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['BudgetedCostWorkPerformed'] = ($v_0);
            delete parentNode.BudgetedCostWorkPerformed;
        }
        $v_0 = parentNode.BudgetedCostWorkScheduled;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['BudgetedCostWorkScheduled'] = ($v_0);
            delete parentNode.BudgetedCostWorkScheduled;
        }
        $v_0 = parentNode.Contact;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Contact'] = ($v_0);
            delete parentNode.Contact;
        }
        $v_0 = parentNode.CostPerformanceIndex;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['CostPerformanceIndex'] = ($v_0);
            delete parentNode.CostPerformanceIndex;
        }
        $v_0 = parentNode.CostVariance;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['CostVariance'] = ($v_0);
            delete parentNode.CostVariance;
        }
        $v_0 = parentNode.CostVarianceAtCompletion;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['CostVarianceAtCompletion'] = ($v_0);
            delete parentNode.CostVarianceAtCompletion;
        }
        $v_0 = parentNode.CostVariancePercentage;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['CostVariancePercentage'] = ($v_0);
            delete parentNode.CostVariancePercentage;
        }
        $v_0 = parentNode.Created;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Created'] = ($v_0);
            delete parentNode.Created;
        }
        $v_0 = parentNode.CurrentCostVariance;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['CurrentCostVariance'] = ($v_0);
            delete parentNode.CurrentCostVariance;
        }
        $v_0 = parentNode.CustomFields;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('CustomFields', this.get_customFields(), $v_0);
            this.get_customFields().fromJson($v_0);
            delete parentNode.CustomFields;
        }
        $v_0 = parentNode.DurationVariance;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['DurationVariance'] = ($v_0);
            delete parentNode.DurationVariance;
        }
        $v_0 = parentNode.DurationVarianceMilliseconds;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['DurationVarianceMilliseconds'] = ($v_0);
            delete parentNode.DurationVarianceMilliseconds;
        }
        $v_0 = parentNode.EarliestFinish;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['EarliestFinish'] = ($v_0);
            delete parentNode.EarliestFinish;
        }
        $v_0 = parentNode.EarliestStart;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['EarliestStart'] = ($v_0);
            delete parentNode.EarliestStart;
        }
        $v_0 = parentNode.EstimateAtCompletion;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['EstimateAtCompletion'] = ($v_0);
            delete parentNode.EstimateAtCompletion;
        }
        $v_0 = parentNode.FinishSlack;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['FinishSlack'] = ($v_0);
            delete parentNode.FinishSlack;
        }
        $v_0 = parentNode.FinishSlackMilliseconds;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['FinishSlackMilliseconds'] = ($v_0);
            delete parentNode.FinishSlackMilliseconds;
        }
        $v_0 = parentNode.FinishVariance;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['FinishVariance'] = ($v_0);
            delete parentNode.FinishVariance;
        }
        $v_0 = parentNode.FinishVarianceMilliseconds;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['FinishVarianceMilliseconds'] = ($v_0);
            delete parentNode.FinishVarianceMilliseconds;
        }
        $v_0 = parentNode.FixedCostAccrual;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['FixedCostAccrual'] = ((SP.DataConvert.fixupType(this.get_context(), $v_0)));
            delete parentNode.FixedCostAccrual;
        }
        $v_0 = parentNode.FreeSlack;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['FreeSlack'] = ($v_0);
            delete parentNode.FreeSlack;
        }
        $v_0 = parentNode.FreeSlackMilliseconds;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['FreeSlackMilliseconds'] = ($v_0);
            delete parentNode.FreeSlackMilliseconds;
        }
        $v_0 = parentNode.Id;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Id'] = ($v_0);
            delete parentNode.Id;
        }
        $v_0 = parentNode.IgnoreResourceCalendar;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['IgnoreResourceCalendar'] = ($v_0);
            delete parentNode.IgnoreResourceCalendar;
        }
        $v_0 = parentNode.IsCritical;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['IsCritical'] = ($v_0);
            delete parentNode.IsCritical;
        }
        $v_0 = parentNode.IsEffortDriven;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['IsEffortDriven'] = ($v_0);
            delete parentNode.IsEffortDriven;
        }
        $v_0 = parentNode.IsExternalTask;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['IsExternalTask'] = ($v_0);
            delete parentNode.IsExternalTask;
        }
        $v_0 = parentNode.IsOverAllocated;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['IsOverAllocated'] = ($v_0);
            delete parentNode.IsOverAllocated;
        }
        $v_0 = parentNode.IsRecurring;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['IsRecurring'] = ($v_0);
            delete parentNode.IsRecurring;
        }
        $v_0 = parentNode.IsRecurringSummary;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['IsRecurringSummary'] = ($v_0);
            delete parentNode.IsRecurringSummary;
        }
        $v_0 = parentNode.IsRolledUp;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['IsRolledUp'] = ($v_0);
            delete parentNode.IsRolledUp;
        }
        $v_0 = parentNode.IsSubProject;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['IsSubProject'] = ($v_0);
            delete parentNode.IsSubProject;
        }
        $v_0 = parentNode.IsSubProjectReadOnly;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['IsSubProjectReadOnly'] = ($v_0);
            delete parentNode.IsSubProjectReadOnly;
        }
        $v_0 = parentNode.IsSubProjectScheduledFromFinish;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['IsSubProjectScheduledFromFinish'] = ($v_0);
            delete parentNode.IsSubProjectScheduledFromFinish;
        }
        $v_0 = parentNode.IsSummary;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['IsSummary'] = ($v_0);
            delete parentNode.IsSummary;
        }
        $v_0 = parentNode.LatestFinish;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['LatestFinish'] = ($v_0);
            delete parentNode.LatestFinish;
        }
        $v_0 = parentNode.LatestStart;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['LatestStart'] = ($v_0);
            delete parentNode.LatestStart;
        }
        $v_0 = parentNode.LevelingDelay;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['LevelingDelay'] = ($v_0);
            delete parentNode.LevelingDelay;
        }
        $v_0 = parentNode.LevelingDelayMilliseconds;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['LevelingDelayMilliseconds'] = ($v_0);
            delete parentNode.LevelingDelayMilliseconds;
        }
        $v_0 = parentNode.Modified;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Modified'] = ($v_0);
            delete parentNode.Modified;
        }
        $v_0 = parentNode.Notes;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Notes'] = ($v_0);
            delete parentNode.Notes;
        }
        $v_0 = parentNode.OutlinePosition;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['OutlinePosition'] = ($v_0);
            delete parentNode.OutlinePosition;
        }
        $v_0 = parentNode.OvertimeCost;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['OvertimeCost'] = ($v_0);
            delete parentNode.OvertimeCost;
        }
        $v_0 = parentNode.OvertimeWork;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['OvertimeWork'] = ($v_0);
            delete parentNode.OvertimeWork;
        }
        $v_0 = parentNode.OvertimeWorkMilliseconds;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['OvertimeWorkMilliseconds'] = ($v_0);
            delete parentNode.OvertimeWorkMilliseconds;
        }
        $v_0 = parentNode.PercentWorkComplete;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['PercentWorkComplete'] = ($v_0);
            delete parentNode.PercentWorkComplete;
        }
        $v_0 = parentNode.PreLevelingFinish;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['PreLevelingFinish'] = ($v_0);
            delete parentNode.PreLevelingFinish;
        }
        $v_0 = parentNode.PreLevelingStart;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['PreLevelingStart'] = ($v_0);
            delete parentNode.PreLevelingStart;
        }
        $v_0 = parentNode.RegularWork;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['RegularWork'] = ($v_0);
            delete parentNode.RegularWork;
        }
        $v_0 = parentNode.RegularWorkMilliseconds;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['RegularWorkMilliseconds'] = ($v_0);
            delete parentNode.RegularWorkMilliseconds;
        }
        $v_0 = parentNode.RemainingCost;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['RemainingCost'] = ($v_0);
            delete parentNode.RemainingCost;
        }
        $v_0 = parentNode.RemainingOvertimeCost;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['RemainingOvertimeCost'] = ($v_0);
            delete parentNode.RemainingOvertimeCost;
        }
        $v_0 = parentNode.RemainingOvertimeWork;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['RemainingOvertimeWork'] = ($v_0);
            delete parentNode.RemainingOvertimeWork;
        }
        $v_0 = parentNode.RemainingOvertimeWorkMilliseconds;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['RemainingOvertimeWorkMilliseconds'] = ($v_0);
            delete parentNode.RemainingOvertimeWorkMilliseconds;
        }
        $v_0 = parentNode.RemainingWork;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['RemainingWork'] = ($v_0);
            delete parentNode.RemainingWork;
        }
        $v_0 = parentNode.RemainingWorkMilliseconds;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['RemainingWorkMilliseconds'] = ($v_0);
            delete parentNode.RemainingWorkMilliseconds;
        }
        $v_0 = parentNode.Resume;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Resume'] = ($v_0);
            delete parentNode.Resume;
        }
        $v_0 = parentNode.ScheduleCostVariance;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ScheduleCostVariance'] = ($v_0);
            delete parentNode.ScheduleCostVariance;
        }
        $v_0 = parentNode.ScheduledDuration;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ScheduledDuration'] = ($v_0);
            delete parentNode.ScheduledDuration;
        }
        $v_0 = parentNode.ScheduledDurationMilliseconds;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ScheduledDurationMilliseconds'] = ($v_0);
            delete parentNode.ScheduledDurationMilliseconds;
        }
        $v_0 = parentNode.ScheduledFinish;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ScheduledFinish'] = ($v_0);
            delete parentNode.ScheduledFinish;
        }
        $v_0 = parentNode.ScheduledStart;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ScheduledStart'] = ($v_0);
            delete parentNode.ScheduledStart;
        }
        $v_0 = parentNode.SchedulePerformanceIndex;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['SchedulePerformanceIndex'] = ($v_0);
            delete parentNode.SchedulePerformanceIndex;
        }
        $v_0 = parentNode.ScheduleVariancePercentage;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ScheduleVariancePercentage'] = ($v_0);
            delete parentNode.ScheduleVariancePercentage;
        }
        $v_0 = parentNode.StartSlack;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['StartSlack'] = ($v_0);
            delete parentNode.StartSlack;
        }
        $v_0 = parentNode.StartSlackMilliseconds;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['StartSlackMilliseconds'] = ($v_0);
            delete parentNode.StartSlackMilliseconds;
        }
        $v_0 = parentNode.StartVariance;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['StartVariance'] = ($v_0);
            delete parentNode.StartVariance;
        }
        $v_0 = parentNode.StartVarianceMilliseconds;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['StartVarianceMilliseconds'] = ($v_0);
            delete parentNode.StartVarianceMilliseconds;
        }
        $v_0 = parentNode.Stop;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Stop'] = ($v_0);
            delete parentNode.Stop;
        }
        $v_0 = parentNode.SubProject;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('SubProject', this.get_subProject(), $v_0);
            this.get_subProject().fromJson($v_0);
            delete parentNode.SubProject;
        }
        $v_0 = parentNode.TaskType;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['TaskType'] = ((SP.DataConvert.fixupType(this.get_context(), $v_0)));
            delete parentNode.TaskType;
        }
        $v_0 = parentNode.ToCompletePerformanceIndex;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ToCompletePerformanceIndex'] = ($v_0);
            delete parentNode.ToCompletePerformanceIndex;
        }
        $v_0 = parentNode.TotalSlack;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['TotalSlack'] = ($v_0);
            delete parentNode.TotalSlack;
        }
        $v_0 = parentNode.TotalSlackMilliseconds;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['TotalSlackMilliseconds'] = ($v_0);
            delete parentNode.TotalSlackMilliseconds;
        }
        $v_0 = parentNode.WorkBreakdownStructure;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['WorkBreakdownStructure'] = ($v_0);
            delete parentNode.WorkBreakdownStructure;
        }
        $v_0 = parentNode.WorkVariance;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['WorkVariance'] = ($v_0);
            delete parentNode.WorkVariance;
        }
        $v_0 = parentNode.WorkVarianceMilliseconds;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['WorkVarianceMilliseconds'] = ($v_0);
            delete parentNode.WorkVarianceMilliseconds;
        }
    }
}


PS.TaskPropertyNames = function PS_TaskPropertyNames() {
}


PS.TaskObjectPropertyNames = function PS_TaskObjectPropertyNames() {
}


PS.TaskCreationInformation = function PS_TaskCreationInformation() {ULSyTi:;
    PS.TaskCreationInformation.initializeBase(this);
}
PS.TaskCreationInformation.prototype = {
    $R_1: null,
    $B_1: null,
    $5_1: null,
    $0_1: null,
    $s_1: false,
    $1_1: null,
    $8_1: null,
    $9_1: null,
    $3_1: null,
    
    get_addAfterId: function PS_TaskCreationInformation$get_addAfterId$in() {ULSyTi:;
        return this.$R_1;
    },
    
    set_addAfterId: function PS_TaskCreationInformation$set_addAfterId$in(value) {ULSyTi:;
        this.$R_1 = value;
        return value;
    },
    
    get_duration: function PS_TaskCreationInformation$get_duration$in() {ULSyTi:;
        return this.$B_1;
    },
    
    set_duration: function PS_TaskCreationInformation$set_duration$in(value) {ULSyTi:;
        this.$B_1 = value;
        return value;
    },
    
    get_finish: function PS_TaskCreationInformation$get_finish$in() {ULSyTi:;
        return this.$5_1;
    },
    
    set_finish: function PS_TaskCreationInformation$set_finish$in(value) {ULSyTi:;
        this.$5_1 = value;
        return value;
    },
    
    get_id: function PS_TaskCreationInformation$get_id$in() {ULSyTi:;
        return this.$0_1;
    },
    
    set_id: function PS_TaskCreationInformation$set_id$in(value) {ULSyTi:;
        this.$0_1 = value;
        return value;
    },
    
    get_isManual: function PS_TaskCreationInformation$get_isManual$in() {ULSyTi:;
        return this.$s_1;
    },
    
    set_isManual: function PS_TaskCreationInformation$set_isManual$in(value) {ULSyTi:;
        this.$s_1 = value;
        return value;
    },
    
    get_name: function PS_TaskCreationInformation$get_name$in() {ULSyTi:;
        return this.$1_1;
    },
    
    set_name: function PS_TaskCreationInformation$set_name$in(value) {ULSyTi:;
        this.$1_1 = value;
        return value;
    },
    
    get_notes: function PS_TaskCreationInformation$get_notes$in() {ULSyTi:;
        return this.$8_1;
    },
    
    set_notes: function PS_TaskCreationInformation$set_notes$in(value) {ULSyTi:;
        this.$8_1 = value;
        return value;
    },
    
    get_parentId: function PS_TaskCreationInformation$get_parentId$in() {ULSyTi:;
        return this.$9_1;
    },
    
    set_parentId: function PS_TaskCreationInformation$set_parentId$in(value) {ULSyTi:;
        this.$9_1 = value;
        return value;
    },
    
    get_start: function PS_TaskCreationInformation$get_start$in() {ULSyTi:;
        return this.$3_1;
    },
    
    set_start: function PS_TaskCreationInformation$set_start$in(value) {ULSyTi:;
        this.$3_1 = value;
        return value;
    },
    
    get_typeId: function PS_TaskCreationInformation$get_typeId$in() {ULSyTi:;
        return '{d9571758-4216-4b89-815f-68540fafd74a}';
    },
    
    writeToXml: function PS_TaskCreationInformation$writeToXml$in(writer, serializationContext) {ULSyTi:;
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = [ 'AddAfterId', 'Duration', 'Finish', 'Id', 'IsManual', 'Name', 'Notes', 'ParentId', 'Start' ];
        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    
    initPropertiesFromJson: function PS_TaskCreationInformation$initPropertiesFromJson$in(parentNode) {ULSyTi:;
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.AddAfterId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$R_1 = ($v_0);
            delete parentNode.AddAfterId;
        }
        $v_0 = parentNode.Duration;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$B_1 = ($v_0);
            delete parentNode.Duration;
        }
        $v_0 = parentNode.Finish;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$5_1 = ($v_0);
            delete parentNode.Finish;
        }
        $v_0 = parentNode.Id;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$0_1 = ($v_0);
            delete parentNode.Id;
        }
        $v_0 = parentNode.IsManual;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$s_1 = ($v_0);
            delete parentNode.IsManual;
        }
        $v_0 = parentNode.Name;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1_1 = ($v_0);
            delete parentNode.Name;
        }
        $v_0 = parentNode.Notes;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$8_1 = ($v_0);
            delete parentNode.Notes;
        }
        $v_0 = parentNode.ParentId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$9_1 = ($v_0);
            delete parentNode.ParentId;
        }
        $v_0 = parentNode.Start;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$3_1 = ($v_0);
            delete parentNode.Start;
        }
    }
}


PS.TaskLink = function PS_TaskLink(context, objectPath) {ULSyTi:;
    PS.TaskLink.initializeBase(this, [ context, objectPath ]);
}
PS.TaskLink.prototype = {
    
    get_id: function PS_TaskLink$get_id$in() {ULSyTi:;
        this.checkUninitializedProperty('Id');
        return (this.get_objectData().get_properties()['Id']);
    },
    
    initPropertiesFromJson: function PS_TaskLink$initPropertiesFromJson$in(parentNode) {ULSyTi:;
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.Id;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Id'] = ($v_0);
            delete parentNode.Id;
        }
    }
}


PS.TaskLinkPropertyNames = function PS_TaskLinkPropertyNames() {
}


PS.TaskLinkCreationInformation = function PS_TaskLinkCreationInformation() {ULSyTi:;
    PS.TaskLinkCreationInformation.initializeBase(this);
}
PS.TaskLinkCreationInformation.prototype = {
    $Z_1: 0,
    $d_1: null,
    $0_1: null,
    $1W_1: null,
    
    get_dependencyType: function PS_TaskLinkCreationInformation$get_dependencyType$in() {ULSyTi:;
        return this.$Z_1;
    },
    
    set_dependencyType: function PS_TaskLinkCreationInformation$set_dependencyType$in(value) {ULSyTi:;
        this.$Z_1 = value;
        return value;
    },
    
    get_endId: function PS_TaskLinkCreationInformation$get_endId$in() {ULSyTi:;
        return this.$d_1;
    },
    
    set_endId: function PS_TaskLinkCreationInformation$set_endId$in(value) {ULSyTi:;
        this.$d_1 = value;
        return value;
    },
    
    get_id: function PS_TaskLinkCreationInformation$get_id$in() {ULSyTi:;
        return this.$0_1;
    },
    
    set_id: function PS_TaskLinkCreationInformation$set_id$in(value) {ULSyTi:;
        this.$0_1 = value;
        return value;
    },
    
    get_startId: function PS_TaskLinkCreationInformation$get_startId$in() {ULSyTi:;
        return this.$1W_1;
    },
    
    set_startId: function PS_TaskLinkCreationInformation$set_startId$in(value) {ULSyTi:;
        this.$1W_1 = value;
        return value;
    },
    
    get_typeId: function PS_TaskLinkCreationInformation$get_typeId$in() {ULSyTi:;
        return '{735b458f-32e6-4629-a7a5-ecc8451e2fe1}';
    },
    
    writeToXml: function PS_TaskLinkCreationInformation$writeToXml$in(writer, serializationContext) {ULSyTi:;
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = [ 'DependencyType', 'EndId', 'Id', 'StartId' ];
        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    
    initPropertiesFromJson: function PS_TaskLinkCreationInformation$initPropertiesFromJson$in(parentNode) {ULSyTi:;
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.DependencyType;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$Z_1 = ((SP.DataConvert.fixupType(null, $v_0)));
            delete parentNode.DependencyType;
        }
        $v_0 = parentNode.EndId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$d_1 = ($v_0);
            delete parentNode.EndId;
        }
        $v_0 = parentNode.Id;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$0_1 = ($v_0);
            delete parentNode.Id;
        }
        $v_0 = parentNode.StartId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1W_1 = ($v_0);
            delete parentNode.StartId;
        }
    }
}


PS.TimePhase = function PS_TimePhase(context, objectPath) {ULSyTi:;
    PS.TimePhase.initializeBase(this, [ context, objectPath ]);
}
PS.TimePhase.prototype = {
    
    get_assignments: function PS_TimePhase$get_assignments$in() {ULSyTi:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['Assignments']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new PS.StatusAssignmentCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Assignments'));
            this.get_objectData().get_clientObjectProperties()['Assignments'] = $v_0;
        }
        return $v_0;
    },
    
    get_end: function PS_TimePhase$get_end$in() {ULSyTi:;
        this.checkUninitializedProperty('End');
        return (this.get_objectData().get_properties()['End']);
    },
    
    get_start: function PS_TimePhase$get_start$in() {ULSyTi:;
        this.checkUninitializedProperty('Start');
        return (this.get_objectData().get_properties()['Start']);
    },
    
    initPropertiesFromJson: function PS_TimePhase$initPropertiesFromJson$in(parentNode) {ULSyTi:;
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.Assignments;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('Assignments', this.get_assignments(), $v_0);
            this.get_assignments().fromJson($v_0);
            delete parentNode.Assignments;
        }
        $v_0 = parentNode.End;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['End'] = ($v_0);
            delete parentNode.End;
        }
        $v_0 = parentNode.Start;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Start'] = ($v_0);
            delete parentNode.Start;
        }
    }
}


PS.TimePhasePropertyNames = function PS_TimePhasePropertyNames() {
}


PS.TimePhaseObjectPropertyNames = function PS_TimePhaseObjectPropertyNames() {
}


PS.TimeSheet = function PS_TimeSheet(context, objectPath) {ULSyTi:;
    PS.TimeSheet.initializeBase(this, [ context, objectPath ]);
}
PS.TimeSheet.prototype = {
    
    get_comments: function PS_TimeSheet$get_comments$in() {ULSyTi:;
        this.checkUninitializedProperty('Comments');
        return (this.get_objectData().get_properties()['Comments']);
    },
    
    get_creator: function PS_TimeSheet$get_creator$in() {ULSyTi:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['Creator']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.User(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Creator'));
            this.get_objectData().get_clientObjectProperties()['Creator'] = $v_0;
        }
        return $v_0;
    },
    
    get_entryMode: function PS_TimeSheet$get_entryMode$in() {ULSyTi:;
        this.checkUninitializedProperty('EntryMode');
        return (this.get_objectData().get_properties()['EntryMode']);
    },
    
    set_entryMode: function PS_TimeSheet$set_entryMode$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['EntryMode'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'EntryMode', value));
        }
        return value;
    },
    
    get_id: function PS_TimeSheet$get_id$in() {ULSyTi:;
        this.checkUninitializedProperty('Id');
        return (this.get_objectData().get_properties()['Id']);
    },
    
    get_isControlledByOwner: function PS_TimeSheet$get_isControlledByOwner$in() {ULSyTi:;
        this.checkUninitializedProperty('IsControlledByOwner');
        return (this.get_objectData().get_properties()['IsControlledByOwner']);
    },
    
    set_isControlledByOwner: function PS_TimeSheet$set_isControlledByOwner$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['IsControlledByOwner'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'IsControlledByOwner', value));
        }
        return value;
    },
    
    get_isProcessed: function PS_TimeSheet$get_isProcessed$in() {ULSyTi:;
        this.checkUninitializedProperty('IsProcessed');
        return (this.get_objectData().get_properties()['IsProcessed']);
    },
    
    set_isProcessed: function PS_TimeSheet$set_isProcessed$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['IsProcessed'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'IsProcessed', value));
        }
        return value;
    },
    
    get_lines: function PS_TimeSheet$get_lines$in() {ULSyTi:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['Lines']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new PS.TimeSheetLineCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Lines'));
            this.get_objectData().get_clientObjectProperties()['Lines'] = $v_0;
        }
        return $v_0;
    },
    
    get_manager: function PS_TimeSheet$get_manager$in() {ULSyTi:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['Manager']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.User(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Manager'));
            this.get_objectData().get_clientObjectProperties()['Manager'] = $v_0;
        }
        return $v_0;
    },
    
    get_name: function PS_TimeSheet$get_name$in() {ULSyTi:;
        this.checkUninitializedProperty('Name');
        return (this.get_objectData().get_properties()['Name']);
    },
    
    set_name: function PS_TimeSheet$set_name$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['Name'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Name', value));
        }
        return value;
    },
    
    get_period: function PS_TimeSheet$get_period$in() {ULSyTi:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['Period']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new PS.TimeSheetPeriod(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Period'));
            this.get_objectData().get_clientObjectProperties()['Period'] = $v_0;
        }
        return $v_0;
    },
    
    get_status: function PS_TimeSheet$get_status$in() {ULSyTi:;
        this.checkUninitializedProperty('Status');
        return (this.get_objectData().get_properties()['Status']);
    },
    
    set_status: function PS_TimeSheet$set_status$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['Status'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Status', value));
        }
        return value;
    },
    
    get_totalActualWork: function PS_TimeSheet$get_totalActualWork$in() {ULSyTi:;
        this.checkUninitializedProperty('TotalActualWork');
        return (this.get_objectData().get_properties()['TotalActualWork']);
    },
    
    set_totalActualWork: function PS_TimeSheet$set_totalActualWork$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['TotalActualWork'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'TotalActualWork', value));
        }
        return value;
    },
    
    get_totalActualWorkMilliseconds: function PS_TimeSheet$get_totalActualWorkMilliseconds$in() {ULSyTi:;
        this.checkUninitializedProperty('TotalActualWorkMilliseconds');
        return (this.get_objectData().get_properties()['TotalActualWorkMilliseconds']);
    },
    
    set_totalActualWorkMilliseconds: function PS_TimeSheet$set_totalActualWorkMilliseconds$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['TotalActualWorkMilliseconds'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'TotalActualWorkMilliseconds', value));
        }
        return value;
    },
    
    get_totalNonBillableOvertimeWork: function PS_TimeSheet$get_totalNonBillableOvertimeWork$in() {ULSyTi:;
        this.checkUninitializedProperty('TotalNonBillableOvertimeWork');
        return (this.get_objectData().get_properties()['TotalNonBillableOvertimeWork']);
    },
    
    set_totalNonBillableOvertimeWork: function PS_TimeSheet$set_totalNonBillableOvertimeWork$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['TotalNonBillableOvertimeWork'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'TotalNonBillableOvertimeWork', value));
        }
        return value;
    },
    
    get_totalNonBillableOvertimeWorkMilliseconds: function PS_TimeSheet$get_totalNonBillableOvertimeWorkMilliseconds$in() {ULSyTi:;
        this.checkUninitializedProperty('TotalNonBillableOvertimeWorkMilliseconds');
        return (this.get_objectData().get_properties()['TotalNonBillableOvertimeWorkMilliseconds']);
    },
    
    set_totalNonBillableOvertimeWorkMilliseconds: function PS_TimeSheet$set_totalNonBillableOvertimeWorkMilliseconds$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['TotalNonBillableOvertimeWorkMilliseconds'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'TotalNonBillableOvertimeWorkMilliseconds', value));
        }
        return value;
    },
    
    get_totalNonBillableWork: function PS_TimeSheet$get_totalNonBillableWork$in() {ULSyTi:;
        this.checkUninitializedProperty('TotalNonBillableWork');
        return (this.get_objectData().get_properties()['TotalNonBillableWork']);
    },
    
    set_totalNonBillableWork: function PS_TimeSheet$set_totalNonBillableWork$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['TotalNonBillableWork'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'TotalNonBillableWork', value));
        }
        return value;
    },
    
    get_totalNonBillableWorkMilliseconds: function PS_TimeSheet$get_totalNonBillableWorkMilliseconds$in() {ULSyTi:;
        this.checkUninitializedProperty('TotalNonBillableWorkMilliseconds');
        return (this.get_objectData().get_properties()['TotalNonBillableWorkMilliseconds']);
    },
    
    set_totalNonBillableWorkMilliseconds: function PS_TimeSheet$set_totalNonBillableWorkMilliseconds$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['TotalNonBillableWorkMilliseconds'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'TotalNonBillableWorkMilliseconds', value));
        }
        return value;
    },
    
    get_totalOvertimeWork: function PS_TimeSheet$get_totalOvertimeWork$in() {ULSyTi:;
        this.checkUninitializedProperty('TotalOvertimeWork');
        return (this.get_objectData().get_properties()['TotalOvertimeWork']);
    },
    
    set_totalOvertimeWork: function PS_TimeSheet$set_totalOvertimeWork$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['TotalOvertimeWork'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'TotalOvertimeWork', value));
        }
        return value;
    },
    
    get_totalOvertimeWorkMilliseconds: function PS_TimeSheet$get_totalOvertimeWorkMilliseconds$in() {ULSyTi:;
        this.checkUninitializedProperty('TotalOvertimeWorkMilliseconds');
        return (this.get_objectData().get_properties()['TotalOvertimeWorkMilliseconds']);
    },
    
    set_totalOvertimeWorkMilliseconds: function PS_TimeSheet$set_totalOvertimeWorkMilliseconds$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['TotalOvertimeWorkMilliseconds'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'TotalOvertimeWorkMilliseconds', value));
        }
        return value;
    },
    
    get_totalWork: function PS_TimeSheet$get_totalWork$in() {ULSyTi:;
        this.checkUninitializedProperty('TotalWork');
        return (this.get_objectData().get_properties()['TotalWork']);
    },
    
    set_totalWork: function PS_TimeSheet$set_totalWork$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['TotalWork'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'TotalWork', value));
        }
        return value;
    },
    
    get_totalWorkMilliseconds: function PS_TimeSheet$get_totalWorkMilliseconds$in() {ULSyTi:;
        this.checkUninitializedProperty('TotalWorkMilliseconds');
        return (this.get_objectData().get_properties()['TotalWorkMilliseconds']);
    },
    
    set_totalWorkMilliseconds: function PS_TimeSheet$set_totalWorkMilliseconds$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['TotalWorkMilliseconds'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'TotalWorkMilliseconds', value));
        }
        return value;
    },
    
    get_weekStartsOn: function PS_TimeSheet$get_weekStartsOn$in() {ULSyTi:;
        this.checkUninitializedProperty('WeekStartsOn');
        return (this.get_objectData().get_properties()['WeekStartsOn']);
    },
    
    set_weekStartsOn: function PS_TimeSheet$set_weekStartsOn$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['WeekStartsOn'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'WeekStartsOn', value));
        }
        return value;
    },
    
    initPropertiesFromJson: function PS_TimeSheet$initPropertiesFromJson$in(parentNode) {ULSyTi:;
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.Comments;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Comments'] = ($v_0);
            delete parentNode.Comments;
        }
        $v_0 = parentNode.Creator;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('Creator', this.get_creator(), $v_0);
            this.get_creator().fromJson($v_0);
            delete parentNode.Creator;
        }
        $v_0 = parentNode.EntryMode;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['EntryMode'] = ((SP.DataConvert.fixupType(this.get_context(), $v_0)));
            delete parentNode.EntryMode;
        }
        $v_0 = parentNode.Id;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Id'] = ($v_0);
            delete parentNode.Id;
        }
        $v_0 = parentNode.IsControlledByOwner;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['IsControlledByOwner'] = ($v_0);
            delete parentNode.IsControlledByOwner;
        }
        $v_0 = parentNode.IsProcessed;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['IsProcessed'] = ($v_0);
            delete parentNode.IsProcessed;
        }
        $v_0 = parentNode.Lines;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('Lines', this.get_lines(), $v_0);
            this.get_lines().fromJson($v_0);
            delete parentNode.Lines;
        }
        $v_0 = parentNode.Manager;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('Manager', this.get_manager(), $v_0);
            this.get_manager().fromJson($v_0);
            delete parentNode.Manager;
        }
        $v_0 = parentNode.Name;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Name'] = ($v_0);
            delete parentNode.Name;
        }
        $v_0 = parentNode.Period;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('Period', this.get_period(), $v_0);
            this.get_period().fromJson($v_0);
            delete parentNode.Period;
        }
        $v_0 = parentNode.Status;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Status'] = ((SP.DataConvert.fixupType(this.get_context(), $v_0)));
            delete parentNode.Status;
        }
        $v_0 = parentNode.TotalActualWork;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['TotalActualWork'] = ($v_0);
            delete parentNode.TotalActualWork;
        }
        $v_0 = parentNode.TotalActualWorkMilliseconds;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['TotalActualWorkMilliseconds'] = ($v_0);
            delete parentNode.TotalActualWorkMilliseconds;
        }
        $v_0 = parentNode.TotalNonBillableOvertimeWork;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['TotalNonBillableOvertimeWork'] = ($v_0);
            delete parentNode.TotalNonBillableOvertimeWork;
        }
        $v_0 = parentNode.TotalNonBillableOvertimeWorkMilliseconds;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['TotalNonBillableOvertimeWorkMilliseconds'] = ($v_0);
            delete parentNode.TotalNonBillableOvertimeWorkMilliseconds;
        }
        $v_0 = parentNode.TotalNonBillableWork;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['TotalNonBillableWork'] = ($v_0);
            delete parentNode.TotalNonBillableWork;
        }
        $v_0 = parentNode.TotalNonBillableWorkMilliseconds;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['TotalNonBillableWorkMilliseconds'] = ($v_0);
            delete parentNode.TotalNonBillableWorkMilliseconds;
        }
        $v_0 = parentNode.TotalOvertimeWork;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['TotalOvertimeWork'] = ($v_0);
            delete parentNode.TotalOvertimeWork;
        }
        $v_0 = parentNode.TotalOvertimeWorkMilliseconds;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['TotalOvertimeWorkMilliseconds'] = ($v_0);
            delete parentNode.TotalOvertimeWorkMilliseconds;
        }
        $v_0 = parentNode.TotalWork;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['TotalWork'] = ($v_0);
            delete parentNode.TotalWork;
        }
        $v_0 = parentNode.TotalWorkMilliseconds;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['TotalWorkMilliseconds'] = ($v_0);
            delete parentNode.TotalWorkMilliseconds;
        }
        $v_0 = parentNode.WeekStartsOn;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['WeekStartsOn'] = ($v_0);
            delete parentNode.WeekStartsOn;
        }
    },
    
    update: function PS_TimeSheet$update$in() {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'Update', null);
        $v_0.addQuery($v_1);
        this.refreshLoad();
    },
    
    deleteObject: function PS_TimeSheet$deleteObject$in() {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'DeleteObject', null);
        $v_0.addQuery($v_1);
    },
    
    submit: function PS_TimeSheet$submit$in(comment) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'Submit', [ comment ]);
        $v_0.addQuery($v_1);
    },
    
    recall: function PS_TimeSheet$recall$in() {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'Recall', null);
        $v_0.addQuery($v_1);
    }
}


PS.TimeSheetPropertyNames = function PS_TimeSheetPropertyNames() {
}


PS.TimeSheetObjectPropertyNames = function PS_TimeSheetObjectPropertyNames() {
}


PS.TimeSheetLine = function PS_TimeSheetLine(context, objectPath) {ULSyTi:;
    PS.TimeSheetLine.initializeBase(this, [ context, objectPath ]);
}
PS.TimeSheetLine.prototype = {
    
    get_assignment: function PS_TimeSheetLine$get_assignment$in() {ULSyTi:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['Assignment']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new PS.PublishedAssignment(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Assignment'));
            this.get_objectData().get_clientObjectProperties()['Assignment'] = $v_0;
        }
        return $v_0;
    },
    
    get_comment: function PS_TimeSheetLine$get_comment$in() {ULSyTi:;
        this.checkUninitializedProperty('Comment');
        return (this.get_objectData().get_properties()['Comment']);
    },
    
    set_comment: function PS_TimeSheetLine$set_comment$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['Comment'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Comment', value));
        }
        return value;
    },
    
    get_id: function PS_TimeSheetLine$get_id$in() {ULSyTi:;
        this.checkUninitializedProperty('Id');
        return (this.get_objectData().get_properties()['Id']);
    },
    
    get_lineClass: function PS_TimeSheetLine$get_lineClass$in() {ULSyTi:;
        this.checkUninitializedProperty('LineClass');
        return (this.get_objectData().get_properties()['LineClass']);
    },
    
    set_lineClass: function PS_TimeSheetLine$set_lineClass$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['LineClass'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'LineClass', value));
        }
        return value;
    },
    
    get_projectName: function PS_TimeSheetLine$get_projectName$in() {ULSyTi:;
        this.checkUninitializedProperty('ProjectName');
        return (this.get_objectData().get_properties()['ProjectName']);
    },
    
    get_status: function PS_TimeSheetLine$get_status$in() {ULSyTi:;
        this.checkUninitializedProperty('Status');
        return (this.get_objectData().get_properties()['Status']);
    },
    
    set_status: function PS_TimeSheetLine$set_status$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['Status'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Status', value));
        }
        return value;
    },
    
    get_taskName: function PS_TimeSheetLine$get_taskName$in() {ULSyTi:;
        this.checkUninitializedProperty('TaskName');
        return (this.get_objectData().get_properties()['TaskName']);
    },
    
    get_timeSheet: function PS_TimeSheetLine$get_timeSheet$in() {ULSyTi:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['TimeSheet']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new PS.TimeSheet(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'TimeSheet'));
            this.get_objectData().get_clientObjectProperties()['TimeSheet'] = $v_0;
        }
        return $v_0;
    },
    
    get_totalWork: function PS_TimeSheetLine$get_totalWork$in() {ULSyTi:;
        this.checkUninitializedProperty('TotalWork');
        return (this.get_objectData().get_properties()['TotalWork']);
    },
    
    get_totalWorkMilliseconds: function PS_TimeSheetLine$get_totalWorkMilliseconds$in() {ULSyTi:;
        this.checkUninitializedProperty('TotalWorkMilliseconds');
        return (this.get_objectData().get_properties()['TotalWorkMilliseconds']);
    },
    
    get_validationType: function PS_TimeSheetLine$get_validationType$in() {ULSyTi:;
        this.checkUninitializedProperty('ValidationType');
        return (this.get_objectData().get_properties()['ValidationType']);
    },
    
    get_work: function PS_TimeSheetLine$get_work$in() {ULSyTi:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['Work']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new PS.TimeSheetWorkCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Work'));
            this.get_objectData().get_clientObjectProperties()['Work'] = $v_0;
        }
        return $v_0;
    },
    
    initPropertiesFromJson: function PS_TimeSheetLine$initPropertiesFromJson$in(parentNode) {ULSyTi:;
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.Assignment;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('Assignment', this.get_assignment(), $v_0);
            this.get_assignment().fromJson($v_0);
            delete parentNode.Assignment;
        }
        $v_0 = parentNode.Comment;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Comment'] = ($v_0);
            delete parentNode.Comment;
        }
        $v_0 = parentNode.Id;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Id'] = ($v_0);
            delete parentNode.Id;
        }
        $v_0 = parentNode.LineClass;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['LineClass'] = ((SP.DataConvert.fixupType(this.get_context(), $v_0)));
            delete parentNode.LineClass;
        }
        $v_0 = parentNode.ProjectName;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ProjectName'] = ($v_0);
            delete parentNode.ProjectName;
        }
        $v_0 = parentNode.Status;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Status'] = ((SP.DataConvert.fixupType(this.get_context(), $v_0)));
            delete parentNode.Status;
        }
        $v_0 = parentNode.TaskName;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['TaskName'] = ($v_0);
            delete parentNode.TaskName;
        }
        $v_0 = parentNode.TimeSheet;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('TimeSheet', this.get_timeSheet(), $v_0);
            this.get_timeSheet().fromJson($v_0);
            delete parentNode.TimeSheet;
        }
        $v_0 = parentNode.TotalWork;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['TotalWork'] = ($v_0);
            delete parentNode.TotalWork;
        }
        $v_0 = parentNode.TotalWorkMilliseconds;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['TotalWorkMilliseconds'] = ($v_0);
            delete parentNode.TotalWorkMilliseconds;
        }
        $v_0 = parentNode.ValidationType;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ValidationType'] = ((SP.DataConvert.fixupType(this.get_context(), $v_0)));
            delete parentNode.ValidationType;
        }
        $v_0 = parentNode.Work;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('Work', this.get_work(), $v_0);
            this.get_work().fromJson($v_0);
            delete parentNode.Work;
        }
    },
    
    deleteObject: function PS_TimeSheetLine$deleteObject$in() {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'DeleteObject', null);
        $v_0.addQuery($v_1);
        this.removeFromParentCollection();
    },
    
    submit: function PS_TimeSheetLine$submit$in(comment) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'Submit', [ comment ]);
        $v_0.addQuery($v_1);
    }
}


PS.TimeSheetLinePropertyNames = function PS_TimeSheetLinePropertyNames() {
}


PS.TimeSheetLineObjectPropertyNames = function PS_TimeSheetLineObjectPropertyNames() {
}


PS.TimeSheetLineCollection = function PS_TimeSheetLineCollection(context, objectPath) {ULSyTi:;
    PS.TimeSheetLineCollection.initializeBase(this, [ context, objectPath ]);
}
PS.TimeSheetLineCollection.prototype = {
    
    itemAt: function PS_TimeSheetLineCollection$itemAt$in(index) {ULSyTi:;
        return this.getItemAtIndex(index);
    },
    
    get_item: function PS_TimeSheetLineCollection$get_item$in(index) {ULSyTi:;
        return this.getItemAtIndex(index);
    },
    
    get_childItemType: function PS_TimeSheetLineCollection$get_childItemType$in() {ULSyTi:;
        return PS.TimeSheetLine;
    },
    
    getById: function PS_TimeSheetLineCollection$getById$in(objectId) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = ((this.get_objectData().get_methodReturnObjects()['GetById']));
        if (SP.ScriptUtility.isNullOrUndefined($v_2)) {
            $v_2 = {};
            this.get_objectData().get_methodReturnObjects()['GetById'] = $v_2;
        }
        $v_1 = (($v_2[objectId]));
        if (!$v_0.get_disableReturnValueCache() && !SP.ScriptUtility.isNullOrUndefined($v_1)) {
            return $v_1;
        }
        $v_1 = new PS.TimeSheetLine($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetById', [ objectId ]));
        if (!$v_0.get_disableReturnValueCache()) {
            $v_2[objectId] = $v_1;
        }
        return $v_1;
    },
    
    getByGuid: function PS_TimeSheetLineCollection$getByGuid$in(uid) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = ((this.get_objectData().get_methodReturnObjects()['GetByGuid']));
        if (SP.ScriptUtility.isNullOrUndefined($v_2)) {
            $v_2 = {};
            this.get_objectData().get_methodReturnObjects()['GetByGuid'] = $v_2;
        }
        $v_1 = (($v_2[uid.toString()]));
        if (!$v_0.get_disableReturnValueCache() && !SP.ScriptUtility.isNullOrUndefined($v_1)) {
            return $v_1;
        }
        $v_1 = new PS.TimeSheetLine($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetByGuid', [ uid ]));
        if (!$v_0.get_disableReturnValueCache()) {
            $v_2[uid.toString()] = $v_1;
        }
        return $v_1;
    },
    
    add: function PS_TimeSheetLineCollection$add$in(parameters) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        $v_1 = new PS.TimeSheetLine($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'Add', [ parameters ]));
        $v_1.get_path().setPendingReplace();
        var $v_2 = new SP.ObjectIdentityQuery($v_1.get_path());
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        $v_0.addQuery($v_2);
        this.addChild($v_1);
        return $v_1;
    },
    
    remove: function PS_TimeSheetLineCollection$remove$in(line) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'Remove', [ line ]);
        $v_0.addQuery($v_2);
        $v_1 = new SP.BooleanResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        this.removeChild(line);
        return $v_1;
    }
}


PS.TimeSheetLineCreationInformation = function PS_TimeSheetLineCreationInformation() {ULSyTi:;
    PS.TimeSheetLineCreationInformation.initializeBase(this);
}
PS.TimeSheetLineCreationInformation.prototype = {
    $T_1: null,
    $7_1: null,
    $0_1: null,
    $x_1: 0,
    $E_1: null,
    $1a_1: null,
    
    get_assignmentId: function PS_TimeSheetLineCreationInformation$get_assignmentId$in() {ULSyTi:;
        return this.$T_1;
    },
    
    set_assignmentId: function PS_TimeSheetLineCreationInformation$set_assignmentId$in(value) {ULSyTi:;
        this.$T_1 = value;
        return value;
    },
    
    get_comment: function PS_TimeSheetLineCreationInformation$get_comment$in() {ULSyTi:;
        return this.$7_1;
    },
    
    set_comment: function PS_TimeSheetLineCreationInformation$set_comment$in(value) {ULSyTi:;
        this.$7_1 = value;
        return value;
    },
    
    get_id: function PS_TimeSheetLineCreationInformation$get_id$in() {ULSyTi:;
        return this.$0_1;
    },
    
    set_id: function PS_TimeSheetLineCreationInformation$set_id$in(value) {ULSyTi:;
        this.$0_1 = value;
        return value;
    },
    
    get_lineClass: function PS_TimeSheetLineCreationInformation$get_lineClass$in() {ULSyTi:;
        return this.$x_1;
    },
    
    set_lineClass: function PS_TimeSheetLineCreationInformation$set_lineClass$in(value) {ULSyTi:;
        this.$x_1 = value;
        return value;
    },
    
    get_projectId: function PS_TimeSheetLineCreationInformation$get_projectId$in() {ULSyTi:;
        return this.$E_1;
    },
    
    set_projectId: function PS_TimeSheetLineCreationInformation$set_projectId$in(value) {ULSyTi:;
        this.$E_1 = value;
        return value;
    },
    
    get_taskName: function PS_TimeSheetLineCreationInformation$get_taskName$in() {ULSyTi:;
        return this.$1a_1;
    },
    
    set_taskName: function PS_TimeSheetLineCreationInformation$set_taskName$in(value) {ULSyTi:;
        this.$1a_1 = value;
        return value;
    },
    
    get_typeId: function PS_TimeSheetLineCreationInformation$get_typeId$in() {ULSyTi:;
        return '{dbbd87af-f81d-413f-9899-957de504618a}';
    },
    
    writeToXml: function PS_TimeSheetLineCreationInformation$writeToXml$in(writer, serializationContext) {ULSyTi:;
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = [ 'AssignmentId', 'Comment', 'Id', 'LineClass', 'ProjectId', 'TaskName' ];
        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    
    initPropertiesFromJson: function PS_TimeSheetLineCreationInformation$initPropertiesFromJson$in(parentNode) {ULSyTi:;
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.AssignmentId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$T_1 = ($v_0);
            delete parentNode.AssignmentId;
        }
        $v_0 = parentNode.Comment;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$7_1 = ($v_0);
            delete parentNode.Comment;
        }
        $v_0 = parentNode.Id;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$0_1 = ($v_0);
            delete parentNode.Id;
        }
        $v_0 = parentNode.LineClass;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$x_1 = ((SP.DataConvert.fixupType(null, $v_0)));
            delete parentNode.LineClass;
        }
        $v_0 = parentNode.ProjectId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$E_1 = ($v_0);
            delete parentNode.ProjectId;
        }
        $v_0 = parentNode.TaskName;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1a_1 = ($v_0);
            delete parentNode.TaskName;
        }
    }
}


PS.TimeSheetPeriod = function PS_TimeSheetPeriod(context, objectPath) {ULSyTi:;
    PS.TimeSheetPeriod.initializeBase(this, [ context, objectPath ]);
}
PS.TimeSheetPeriod.prototype = {
    
    get_end: function PS_TimeSheetPeriod$get_end$in() {ULSyTi:;
        this.checkUninitializedProperty('End');
        return (this.get_objectData().get_properties()['End']);
    },
    
    get_id: function PS_TimeSheetPeriod$get_id$in() {ULSyTi:;
        this.checkUninitializedProperty('Id');
        return (this.get_objectData().get_properties()['Id']);
    },
    
    get_name: function PS_TimeSheetPeriod$get_name$in() {ULSyTi:;
        this.checkUninitializedProperty('Name');
        return (this.get_objectData().get_properties()['Name']);
    },
    
    get_start: function PS_TimeSheetPeriod$get_start$in() {ULSyTi:;
        this.checkUninitializedProperty('Start');
        return (this.get_objectData().get_properties()['Start']);
    },
    
    get_timeSheet: function PS_TimeSheetPeriod$get_timeSheet$in() {ULSyTi:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['TimeSheet']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new PS.TimeSheet(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'TimeSheet'));
            this.get_objectData().get_clientObjectProperties()['TimeSheet'] = $v_0;
        }
        return $v_0;
    },
    
    initPropertiesFromJson: function PS_TimeSheetPeriod$initPropertiesFromJson$in(parentNode) {ULSyTi:;
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.End;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['End'] = ($v_0);
            delete parentNode.End;
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
        $v_0 = parentNode.Start;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Start'] = ($v_0);
            delete parentNode.Start;
        }
        $v_0 = parentNode.TimeSheet;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('TimeSheet', this.get_timeSheet(), $v_0);
            this.get_timeSheet().fromJson($v_0);
            delete parentNode.TimeSheet;
        }
    },
    
    createTimeSheet: function PS_TimeSheetPeriod$createTimeSheet$in() {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        $v_1 = new PS.TimeSheet($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'CreateTimeSheet', null));
        return $v_1;
    }
}


PS.TimeSheetPeriodPropertyNames = function PS_TimeSheetPeriodPropertyNames() {
}


PS.TimeSheetPeriodObjectPropertyNames = function PS_TimeSheetPeriodObjectPropertyNames() {
}


PS.TimeSheetPeriodCollection = function PS_TimeSheetPeriodCollection(context, objectPath) {ULSyTi:;
    PS.TimeSheetPeriodCollection.initializeBase(this, [ context, objectPath ]);
}
PS.TimeSheetPeriodCollection.prototype = {
    
    itemAt: function PS_TimeSheetPeriodCollection$itemAt$in(index) {ULSyTi:;
        return this.getItemAtIndex(index);
    },
    
    get_item: function PS_TimeSheetPeriodCollection$get_item$in(index) {ULSyTi:;
        return this.getItemAtIndex(index);
    },
    
    get_childItemType: function PS_TimeSheetPeriodCollection$get_childItemType$in() {ULSyTi:;
        return PS.TimeSheetPeriod;
    },
    
    getById: function PS_TimeSheetPeriodCollection$getById$in(objectId) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = ((this.get_objectData().get_methodReturnObjects()['GetById']));
        if (SP.ScriptUtility.isNullOrUndefined($v_2)) {
            $v_2 = {};
            this.get_objectData().get_methodReturnObjects()['GetById'] = $v_2;
        }
        $v_1 = (($v_2[objectId]));
        if (!$v_0.get_disableReturnValueCache() && !SP.ScriptUtility.isNullOrUndefined($v_1)) {
            return $v_1;
        }
        $v_1 = new PS.TimeSheetPeriod($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetById', [ objectId ]));
        if (!$v_0.get_disableReturnValueCache()) {
            $v_2[objectId] = $v_1;
        }
        return $v_1;
    },
    
    getByGuid: function PS_TimeSheetPeriodCollection$getByGuid$in(uid) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = ((this.get_objectData().get_methodReturnObjects()['GetByGuid']));
        if (SP.ScriptUtility.isNullOrUndefined($v_2)) {
            $v_2 = {};
            this.get_objectData().get_methodReturnObjects()['GetByGuid'] = $v_2;
        }
        $v_1 = (($v_2[uid.toString()]));
        if (!$v_0.get_disableReturnValueCache() && !SP.ScriptUtility.isNullOrUndefined($v_1)) {
            return $v_1;
        }
        $v_1 = new PS.TimeSheetPeriod($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetByGuid', [ uid ]));
        if (!$v_0.get_disableReturnValueCache()) {
            $v_2[uid.toString()] = $v_1;
        }
        return $v_1;
    }
}


PS.TimeSheetWork = function PS_TimeSheetWork(context, objectPath) {ULSyTi:;
    PS.TimeSheetWork.initializeBase(this, [ context, objectPath ]);
}
PS.TimeSheetWork.prototype = {
    
    get_actualWork: function PS_TimeSheetWork$get_actualWork$in() {ULSyTi:;
        this.checkUninitializedProperty('ActualWork');
        return (this.get_objectData().get_properties()['ActualWork']);
    },
    
    set_actualWork: function PS_TimeSheetWork$set_actualWork$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['ActualWork'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'ActualWork', value));
        }
        return value;
    },
    
    get_actualWorkMilliseconds: function PS_TimeSheetWork$get_actualWorkMilliseconds$in() {ULSyTi:;
        this.checkUninitializedProperty('ActualWorkMilliseconds');
        return (this.get_objectData().get_properties()['ActualWorkMilliseconds']);
    },
    
    set_actualWorkMilliseconds: function PS_TimeSheetWork$set_actualWorkMilliseconds$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['ActualWorkMilliseconds'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'ActualWorkMilliseconds', value));
        }
        return value;
    },
    
    get_comment: function PS_TimeSheetWork$get_comment$in() {ULSyTi:;
        this.checkUninitializedProperty('Comment');
        return (this.get_objectData().get_properties()['Comment']);
    },
    
    set_comment: function PS_TimeSheetWork$set_comment$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['Comment'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Comment', value));
        }
        return value;
    },
    
    get_end: function PS_TimeSheetWork$get_end$in() {ULSyTi:;
        this.checkUninitializedProperty('End');
        return (this.get_objectData().get_properties()['End']);
    },
    
    set_end: function PS_TimeSheetWork$set_end$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['End'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'End', value));
        }
        return value;
    },
    
    get_id: function PS_TimeSheetWork$get_id$in() {ULSyTi:;
        this.checkUninitializedProperty('Id');
        return (this.get_objectData().get_properties()['Id']);
    },
    
    get_nonBillableOvertimeWork: function PS_TimeSheetWork$get_nonBillableOvertimeWork$in() {ULSyTi:;
        this.checkUninitializedProperty('NonBillableOvertimeWork');
        return (this.get_objectData().get_properties()['NonBillableOvertimeWork']);
    },
    
    set_nonBillableOvertimeWork: function PS_TimeSheetWork$set_nonBillableOvertimeWork$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['NonBillableOvertimeWork'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'NonBillableOvertimeWork', value));
        }
        return value;
    },
    
    get_nonBillableOvertimeWorkMilliseconds: function PS_TimeSheetWork$get_nonBillableOvertimeWorkMilliseconds$in() {ULSyTi:;
        this.checkUninitializedProperty('NonBillableOvertimeWorkMilliseconds');
        return (this.get_objectData().get_properties()['NonBillableOvertimeWorkMilliseconds']);
    },
    
    set_nonBillableOvertimeWorkMilliseconds: function PS_TimeSheetWork$set_nonBillableOvertimeWorkMilliseconds$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['NonBillableOvertimeWorkMilliseconds'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'NonBillableOvertimeWorkMilliseconds', value));
        }
        return value;
    },
    
    get_nonBillableWork: function PS_TimeSheetWork$get_nonBillableWork$in() {ULSyTi:;
        this.checkUninitializedProperty('NonBillableWork');
        return (this.get_objectData().get_properties()['NonBillableWork']);
    },
    
    set_nonBillableWork: function PS_TimeSheetWork$set_nonBillableWork$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['NonBillableWork'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'NonBillableWork', value));
        }
        return value;
    },
    
    get_nonBillableWorkMilliseconds: function PS_TimeSheetWork$get_nonBillableWorkMilliseconds$in() {ULSyTi:;
        this.checkUninitializedProperty('NonBillableWorkMilliseconds');
        return (this.get_objectData().get_properties()['NonBillableWorkMilliseconds']);
    },
    
    set_nonBillableWorkMilliseconds: function PS_TimeSheetWork$set_nonBillableWorkMilliseconds$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['NonBillableWorkMilliseconds'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'NonBillableWorkMilliseconds', value));
        }
        return value;
    },
    
    get_overtimeWork: function PS_TimeSheetWork$get_overtimeWork$in() {ULSyTi:;
        this.checkUninitializedProperty('OvertimeWork');
        return (this.get_objectData().get_properties()['OvertimeWork']);
    },
    
    set_overtimeWork: function PS_TimeSheetWork$set_overtimeWork$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['OvertimeWork'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'OvertimeWork', value));
        }
        return value;
    },
    
    get_overtimeWorkMilliseconds: function PS_TimeSheetWork$get_overtimeWorkMilliseconds$in() {ULSyTi:;
        this.checkUninitializedProperty('OvertimeWorkMilliseconds');
        return (this.get_objectData().get_properties()['OvertimeWorkMilliseconds']);
    },
    
    set_overtimeWorkMilliseconds: function PS_TimeSheetWork$set_overtimeWorkMilliseconds$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['OvertimeWorkMilliseconds'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'OvertimeWorkMilliseconds', value));
        }
        return value;
    },
    
    get_plannedWork: function PS_TimeSheetWork$get_plannedWork$in() {ULSyTi:;
        this.checkUninitializedProperty('PlannedWork');
        return (this.get_objectData().get_properties()['PlannedWork']);
    },
    
    set_plannedWork: function PS_TimeSheetWork$set_plannedWork$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['PlannedWork'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'PlannedWork', value));
        }
        return value;
    },
    
    get_plannedWorkMilliseconds: function PS_TimeSheetWork$get_plannedWorkMilliseconds$in() {ULSyTi:;
        this.checkUninitializedProperty('PlannedWorkMilliseconds');
        return (this.get_objectData().get_properties()['PlannedWorkMilliseconds']);
    },
    
    set_plannedWorkMilliseconds: function PS_TimeSheetWork$set_plannedWorkMilliseconds$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['PlannedWorkMilliseconds'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'PlannedWorkMilliseconds', value));
        }
        return value;
    },
    
    get_start: function PS_TimeSheetWork$get_start$in() {ULSyTi:;
        this.checkUninitializedProperty('Start');
        return (this.get_objectData().get_properties()['Start']);
    },
    
    set_start: function PS_TimeSheetWork$set_start$in(value) {ULSyTi:;
        this.get_objectData().get_properties()['Start'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Start', value));
        }
        return value;
    },
    
    initPropertiesFromJson: function PS_TimeSheetWork$initPropertiesFromJson$in(parentNode) {ULSyTi:;
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.ActualWork;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ActualWork'] = ($v_0);
            delete parentNode.ActualWork;
        }
        $v_0 = parentNode.ActualWorkMilliseconds;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ActualWorkMilliseconds'] = ($v_0);
            delete parentNode.ActualWorkMilliseconds;
        }
        $v_0 = parentNode.Comment;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Comment'] = ($v_0);
            delete parentNode.Comment;
        }
        $v_0 = parentNode.End;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['End'] = ($v_0);
            delete parentNode.End;
        }
        $v_0 = parentNode.Id;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Id'] = ($v_0);
            delete parentNode.Id;
        }
        $v_0 = parentNode.NonBillableOvertimeWork;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['NonBillableOvertimeWork'] = ($v_0);
            delete parentNode.NonBillableOvertimeWork;
        }
        $v_0 = parentNode.NonBillableOvertimeWorkMilliseconds;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['NonBillableOvertimeWorkMilliseconds'] = ($v_0);
            delete parentNode.NonBillableOvertimeWorkMilliseconds;
        }
        $v_0 = parentNode.NonBillableWork;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['NonBillableWork'] = ($v_0);
            delete parentNode.NonBillableWork;
        }
        $v_0 = parentNode.NonBillableWorkMilliseconds;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['NonBillableWorkMilliseconds'] = ($v_0);
            delete parentNode.NonBillableWorkMilliseconds;
        }
        $v_0 = parentNode.OvertimeWork;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['OvertimeWork'] = ($v_0);
            delete parentNode.OvertimeWork;
        }
        $v_0 = parentNode.OvertimeWorkMilliseconds;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['OvertimeWorkMilliseconds'] = ($v_0);
            delete parentNode.OvertimeWorkMilliseconds;
        }
        $v_0 = parentNode.PlannedWork;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['PlannedWork'] = ($v_0);
            delete parentNode.PlannedWork;
        }
        $v_0 = parentNode.PlannedWorkMilliseconds;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['PlannedWorkMilliseconds'] = ($v_0);
            delete parentNode.PlannedWorkMilliseconds;
        }
        $v_0 = parentNode.Start;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Start'] = ($v_0);
            delete parentNode.Start;
        }
    },
    
    deleteObject: function PS_TimeSheetWork$deleteObject$in() {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'DeleteObject', null);
        $v_0.addQuery($v_1);
        this.removeFromParentCollection();
    }
}


PS.TimeSheetWorkPropertyNames = function PS_TimeSheetWorkPropertyNames() {
}


PS.TimeSheetWorkCollection = function PS_TimeSheetWorkCollection(context, objectPath) {ULSyTi:;
    PS.TimeSheetWorkCollection.initializeBase(this, [ context, objectPath ]);
}
PS.TimeSheetWorkCollection.prototype = {
    
    itemAt: function PS_TimeSheetWorkCollection$itemAt$in(index) {ULSyTi:;
        return this.getItemAtIndex(index);
    },
    
    get_item: function PS_TimeSheetWorkCollection$get_item$in(index) {ULSyTi:;
        return this.getItemAtIndex(index);
    },
    
    get_childItemType: function PS_TimeSheetWorkCollection$get_childItemType$in() {ULSyTi:;
        return PS.TimeSheetWork;
    },
    
    getById: function PS_TimeSheetWorkCollection$getById$in(objectId) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = ((this.get_objectData().get_methodReturnObjects()['GetById']));
        if (SP.ScriptUtility.isNullOrUndefined($v_2)) {
            $v_2 = {};
            this.get_objectData().get_methodReturnObjects()['GetById'] = $v_2;
        }
        $v_1 = (($v_2[objectId]));
        if (!$v_0.get_disableReturnValueCache() && !SP.ScriptUtility.isNullOrUndefined($v_1)) {
            return $v_1;
        }
        $v_1 = new PS.TimeSheetWork($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetById', [ objectId ]));
        if (!$v_0.get_disableReturnValueCache()) {
            $v_2[objectId] = $v_1;
        }
        return $v_1;
    },
    
    getByStartDate: function PS_TimeSheetWorkCollection$getByStartDate$in(start) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        $v_1 = new PS.TimeSheetWork($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetByStartDate', [ start ]));
        return $v_1;
    },
    
    add: function PS_TimeSheetWorkCollection$add$in(parameters) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        $v_1 = new PS.TimeSheetWork($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'Add', [ parameters ]));
        $v_1.get_path().setPendingReplace();
        var $v_2 = new SP.ObjectIdentityQuery($v_1.get_path());
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        $v_0.addQuery($v_2);
        this.addChild($v_1);
        return $v_1;
    },
    
    remove: function PS_TimeSheetWorkCollection$remove$in(work) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'Remove', [ work ]);
        $v_0.addQuery($v_2);
        $v_1 = new SP.BooleanResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        this.removeChild(work);
        return $v_1;
    }
}


PS.TimeSheetWorkCreationInformation = function PS_TimeSheetWorkCreationInformation() {ULSyTi:;
    PS.TimeSheetWorkCreationInformation.initializeBase(this);
}
PS.TimeSheetWorkCreationInformation.prototype = {
    $Q_1: null,
    $7_1: null,
    $c_1: null,
    $11_1: null,
    $12_1: null,
    $15_1: null,
    $17_1: null,
    $3_1: null,
    
    get_actualWork: function PS_TimeSheetWorkCreationInformation$get_actualWork$in() {ULSyTi:;
        return this.$Q_1;
    },
    
    set_actualWork: function PS_TimeSheetWorkCreationInformation$set_actualWork$in(value) {ULSyTi:;
        this.$Q_1 = value;
        return value;
    },
    
    get_comment: function PS_TimeSheetWorkCreationInformation$get_comment$in() {ULSyTi:;
        return this.$7_1;
    },
    
    set_comment: function PS_TimeSheetWorkCreationInformation$set_comment$in(value) {ULSyTi:;
        this.$7_1 = value;
        return value;
    },
    
    get_end: function PS_TimeSheetWorkCreationInformation$get_end$in() {ULSyTi:;
        return this.$c_1;
    },
    
    set_end: function PS_TimeSheetWorkCreationInformation$set_end$in(value) {ULSyTi:;
        this.$c_1 = value;
        return value;
    },
    
    get_nonBillableOvertimeWork: function PS_TimeSheetWorkCreationInformation$get_nonBillableOvertimeWork$in() {ULSyTi:;
        return this.$11_1;
    },
    
    set_nonBillableOvertimeWork: function PS_TimeSheetWorkCreationInformation$set_nonBillableOvertimeWork$in(value) {ULSyTi:;
        this.$11_1 = value;
        return value;
    },
    
    get_nonBillableWork: function PS_TimeSheetWorkCreationInformation$get_nonBillableWork$in() {ULSyTi:;
        return this.$12_1;
    },
    
    set_nonBillableWork: function PS_TimeSheetWorkCreationInformation$set_nonBillableWork$in(value) {ULSyTi:;
        this.$12_1 = value;
        return value;
    },
    
    get_overtimeWork: function PS_TimeSheetWorkCreationInformation$get_overtimeWork$in() {ULSyTi:;
        return this.$15_1;
    },
    
    set_overtimeWork: function PS_TimeSheetWorkCreationInformation$set_overtimeWork$in(value) {ULSyTi:;
        this.$15_1 = value;
        return value;
    },
    
    get_plannedWork: function PS_TimeSheetWorkCreationInformation$get_plannedWork$in() {ULSyTi:;
        return this.$17_1;
    },
    
    set_plannedWork: function PS_TimeSheetWorkCreationInformation$set_plannedWork$in(value) {ULSyTi:;
        this.$17_1 = value;
        return value;
    },
    
    get_start: function PS_TimeSheetWorkCreationInformation$get_start$in() {ULSyTi:;
        return this.$3_1;
    },
    
    set_start: function PS_TimeSheetWorkCreationInformation$set_start$in(value) {ULSyTi:;
        this.$3_1 = value;
        return value;
    },
    
    get_typeId: function PS_TimeSheetWorkCreationInformation$get_typeId$in() {ULSyTi:;
        return '{af30dddc-cd0d-4c2f-a6cd-9b725e6d70d2}';
    },
    
    writeToXml: function PS_TimeSheetWorkCreationInformation$writeToXml$in(writer, serializationContext) {ULSyTi:;
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = [ 'ActualWork', 'Comment', 'End', 'NonBillableOvertimeWork', 'NonBillableWork', 'OvertimeWork', 'PlannedWork', 'Start' ];
        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    
    initPropertiesFromJson: function PS_TimeSheetWorkCreationInformation$initPropertiesFromJson$in(parentNode) {ULSyTi:;
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.ActualWork;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$Q_1 = ($v_0);
            delete parentNode.ActualWork;
        }
        $v_0 = parentNode.Comment;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$7_1 = ($v_0);
            delete parentNode.Comment;
        }
        $v_0 = parentNode.End;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$c_1 = ($v_0);
            delete parentNode.End;
        }
        $v_0 = parentNode.NonBillableOvertimeWork;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$11_1 = ($v_0);
            delete parentNode.NonBillableOvertimeWork;
        }
        $v_0 = parentNode.NonBillableWork;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$12_1 = ($v_0);
            delete parentNode.NonBillableWork;
        }
        $v_0 = parentNode.OvertimeWork;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$15_1 = ($v_0);
            delete parentNode.OvertimeWork;
        }
        $v_0 = parentNode.PlannedWork;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$17_1 = ($v_0);
            delete parentNode.PlannedWork;
        }
        $v_0 = parentNode.Start;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$3_1 = ($v_0);
            delete parentNode.Start;
        }
    }
}


PS.WorkflowActivities = function PS_WorkflowActivities(context, objectPath) {ULSyTi:;
    PS.WorkflowActivities.initializeBase(this, [ context, objectPath ]);
}
PS.WorkflowActivities.prototype = {
    
    createProjectFromListItem: function PS_WorkflowActivities$createProjectFromListItem$in(webId, listId, itemId, eptId) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'CreateProjectFromListItem', [ webId, listId, itemId, eptId ]);
        $v_0.addQuery($v_2);
        $v_1 = new SP.GuidResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    },
    
    updateIdeaListItemStatus: function PS_WorkflowActivities$updateIdeaListItemStatus$in(projectId, status) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'UpdateIdeaListItemStatus', [ projectId, status ]);
        $v_0.addQuery($v_1);
    },
    
    readCurrencyProperty: function PS_WorkflowActivities$readCurrencyProperty$in(projectId, propertyId) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'ReadCurrencyProperty', [ projectId, propertyId ]);
        $v_0.addQuery($v_2);
        $v_1 = new SP.DoubleResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    },
    
    readDateTimeProperty: function PS_WorkflowActivities$readDateTimeProperty$in(projectId, propertyId) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'ReadDateTimeProperty', [ projectId, propertyId ]);
        $v_0.addQuery($v_2);
        $v_1 = new SP.DateTimeResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    },
    
    readIntegerProperty: function PS_WorkflowActivities$readIntegerProperty$in(projectId, propertyId) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'ReadIntegerProperty', [ projectId, propertyId ]);
        $v_0.addQuery($v_2);
        $v_1 = new SP.IntResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    },
    
    readBooleanProperty: function PS_WorkflowActivities$readBooleanProperty$in(projectId, propertyId) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'ReadBooleanProperty', [ projectId, propertyId ]);
        $v_0.addQuery($v_2);
        $v_1 = new SP.BooleanResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    },
    
    readNumberProperty: function PS_WorkflowActivities$readNumberProperty$in(projectId, propertyId) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'ReadNumberProperty', [ projectId, propertyId ]);
        $v_0.addQuery($v_2);
        $v_1 = new SP.DoubleResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    },
    
    readTextProperty: function PS_WorkflowActivities$readTextProperty$in(projectId, propertyId) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'ReadTextProperty', [ projectId, propertyId ]);
        $v_0.addQuery($v_2);
        $v_1 = new SP.StringResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    },
    
    readGuidProperty: function PS_WorkflowActivities$readGuidProperty$in(projectId, propertyId) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'ReadGuidProperty', [ projectId, propertyId ]);
        $v_0.addQuery($v_2);
        $v_1 = new SP.GuidResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    },
    
    readProjectProperty: function PS_WorkflowActivities$readProjectProperty$in(projectId, propertyId) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'ReadProjectProperty', [ projectId, propertyId ]);
        $v_0.addQuery($v_2);
        $v_1 = new SP.StringResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    },
    
    updateCurrencyProperty: function PS_WorkflowActivities$updateCurrencyProperty$in(projectId, propertyId, value) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'UpdateCurrencyProperty', [ projectId, propertyId, value ]);
        $v_0.addQuery($v_1);
    },
    
    updateDateTimeProperty: function PS_WorkflowActivities$updateDateTimeProperty$in(projectId, propertyId, value) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'UpdateDateTimeProperty', [ projectId, propertyId, value ]);
        $v_0.addQuery($v_1);
    },
    
    updateIntegerProperty: function PS_WorkflowActivities$updateIntegerProperty$in(projectId, propertyId, value) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'UpdateIntegerProperty', [ projectId, propertyId, value ]);
        $v_0.addQuery($v_1);
    },
    
    updateBooleanProperty: function PS_WorkflowActivities$updateBooleanProperty$in(projectId, propertyId, value) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'UpdateBooleanProperty', [ projectId, propertyId, value ]);
        $v_0.addQuery($v_1);
    },
    
    updateNumberProperty: function PS_WorkflowActivities$updateNumberProperty$in(projectId, propertyId, value) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'UpdateNumberProperty', [ projectId, propertyId, value ]);
        $v_0.addQuery($v_1);
    },
    
    updateTextProperty: function PS_WorkflowActivities$updateTextProperty$in(projectId, propertyId, value) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'UpdateTextProperty', [ projectId, propertyId, value ]);
        $v_0.addQuery($v_1);
    },
    
    updateGuidProperty: function PS_WorkflowActivities$updateGuidProperty$in(projectId, propertyId, value) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'UpdateGuidProperty', [ projectId, propertyId, value ]);
        $v_0.addQuery($v_1);
    },
    
    updateProjectStageStatus: function PS_WorkflowActivities$updateProjectStageStatus$in(projectId, stageId, statusInformation, stageStatusValue, append) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'UpdateProjectStageStatus', [ projectId, stageId, statusInformation, stageStatusValue, append ]);
        $v_0.addQuery($v_1);
    },
    
    enterProjectStage: function PS_WorkflowActivities$enterProjectStage$in(projectId, stageId) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'EnterProjectStage', [ projectId, stageId ]);
        $v_0.addQuery($v_1);
    },
    
    readyToLeaveProjectStage: function PS_WorkflowActivities$readyToLeaveProjectStage$in(projectId) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'ReadyToLeaveProjectStage', [ projectId ]);
        $v_0.addQuery($v_2);
        $v_1 = new SP.IntResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    },
    
    leaveProjectStage: function PS_WorkflowActivities$leaveProjectStage$in(projectId) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'LeaveProjectStage', [ projectId ]);
        $v_0.addQuery($v_1);
    }
}


PS.WorkflowDesigner = function PS_WorkflowDesigner(context, objectPath) {ULSyTi:;
    PS.WorkflowDesigner.initializeBase(this, [ context, objectPath ]);
}
PS.WorkflowDesigner.prototype = {
    
    get_fields: function PS_WorkflowDesigner$get_fields$in() {ULSyTi:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['Fields']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new PS.WorkflowDesignerFieldCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Fields'));
            this.get_objectData().get_clientObjectProperties()['Fields'] = $v_0;
        }
        return $v_0;
    },
    
    initPropertiesFromJson: function PS_WorkflowDesigner$initPropertiesFromJson$in(parentNode) {ULSyTi:;
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.Fields;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('Fields', this.get_fields(), $v_0);
            this.get_fields().fromJson($v_0);
            delete parentNode.Fields;
        }
    }
}


PS.WorkflowDesignerObjectPropertyNames = function PS_WorkflowDesignerObjectPropertyNames() {
}


PS.WorkflowDesignerField = function PS_WorkflowDesignerField(context, objectPath) {ULSyTi:;
    PS.WorkflowDesignerField.initializeBase(this, [ context, objectPath ]);
}
PS.WorkflowDesignerField.prototype = {
    
    get_displayName: function PS_WorkflowDesignerField$get_displayName$in() {ULSyTi:;
        this.checkUninitializedProperty('DisplayName');
        return (this.get_objectData().get_properties()['DisplayName']);
    },
    
    get_id: function PS_WorkflowDesignerField$get_id$in() {ULSyTi:;
        this.checkUninitializedProperty('Id');
        return (this.get_objectData().get_properties()['Id']);
    },
    
    get_isLookupField: function PS_WorkflowDesignerField$get_isLookupField$in() {ULSyTi:;
        this.checkUninitializedProperty('IsLookupField');
        return (this.get_objectData().get_properties()['IsLookupField']);
    },
    
    get_isReadOnly: function PS_WorkflowDesignerField$get_isReadOnly$in() {ULSyTi:;
        this.checkUninitializedProperty('IsReadOnly');
        return (this.get_objectData().get_properties()['IsReadOnly']);
    },
    
    get_lookupEntries: function PS_WorkflowDesignerField$get_lookupEntries$in() {ULSyTi:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['LookupEntries']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new PS.LookupEntryCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'LookupEntries'));
            this.get_objectData().get_clientObjectProperties()['LookupEntries'] = $v_0;
        }
        return $v_0;
    },
    
    get_spFieldType: function PS_WorkflowDesignerField$get_spFieldType$in() {ULSyTi:;
        this.checkUninitializedProperty('SPFieldType');
        return (this.get_objectData().get_properties()['SPFieldType']);
    },
    
    initPropertiesFromJson: function PS_WorkflowDesignerField$initPropertiesFromJson$in(parentNode) {ULSyTi:;
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.DisplayName;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['DisplayName'] = ($v_0);
            delete parentNode.DisplayName;
        }
        $v_0 = parentNode.Id;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Id'] = ($v_0);
            delete parentNode.Id;
        }
        $v_0 = parentNode.IsLookupField;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['IsLookupField'] = ($v_0);
            delete parentNode.IsLookupField;
        }
        $v_0 = parentNode.IsReadOnly;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['IsReadOnly'] = ($v_0);
            delete parentNode.IsReadOnly;
        }
        $v_0 = parentNode.LookupEntries;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('LookupEntries', this.get_lookupEntries(), $v_0);
            this.get_lookupEntries().fromJson($v_0);
            delete parentNode.LookupEntries;
        }
        $v_0 = parentNode.SPFieldType;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['SPFieldType'] = ((SP.DataConvert.fixupType(this.get_context(), $v_0)));
            delete parentNode.SPFieldType;
        }
    }
}


PS.WorkflowDesignerFieldPropertyNames = function PS_WorkflowDesignerFieldPropertyNames() {
}


PS.WorkflowDesignerFieldObjectPropertyNames = function PS_WorkflowDesignerFieldObjectPropertyNames() {
}


PS.WorkflowDesignerFieldCollection = function PS_WorkflowDesignerFieldCollection(context, objectPath) {ULSyTi:;
    PS.WorkflowDesignerFieldCollection.initializeBase(this, [ context, objectPath ]);
}
PS.WorkflowDesignerFieldCollection.prototype = {
    
    itemAt: function PS_WorkflowDesignerFieldCollection$itemAt$in(index) {ULSyTi:;
        return this.getItemAtIndex(index);
    },
    
    get_item: function PS_WorkflowDesignerFieldCollection$get_item$in(index) {ULSyTi:;
        return this.getItemAtIndex(index);
    },
    
    get_childItemType: function PS_WorkflowDesignerFieldCollection$get_childItemType$in() {ULSyTi:;
        return PS.WorkflowDesignerField;
    },
    
    getById: function PS_WorkflowDesignerFieldCollection$getById$in(objectId) {ULSyTi:;
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = ((this.get_objectData().get_methodReturnObjects()['GetById']));
        if (SP.ScriptUtility.isNullOrUndefined($v_2)) {
            $v_2 = {};
            this.get_objectData().get_methodReturnObjects()['GetById'] = $v_2;
        }
        $v_1 = (($v_2[objectId]));
        if (!$v_0.get_disableReturnValueCache() && !SP.ScriptUtility.isNullOrUndefined($v_1)) {
            return $v_1;
        }
        $v_1 = new PS.WorkflowDesignerField($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetById', [ objectId ]));
        if (!$v_0.get_disableReturnValueCache()) {
            $v_2[objectId] = $v_1;
        }
        return $v_1;
    }
}


PS.ProjectContext.registerClass('PS.ProjectContext', SP.ClientContext);
PS.ProjectContext.QueueJobPoll.registerClass('PS.ProjectContext.QueueJobPoll');
PS.Assignment.registerClass('PS.Assignment', SP.ClientObject);
PS.AssignmentPropertyNames.registerClass('PS.AssignmentPropertyNames');
PS.AssignmentObjectPropertyNames.registerClass('PS.AssignmentObjectPropertyNames');
PS.AssignmentCreationInformation.registerClass('PS.AssignmentCreationInformation', SP.ClientValueObject);
PS.CalendarException.registerClass('PS.CalendarException', SP.ClientObject);
PS.BaseCalendarException.registerClass('PS.BaseCalendarException', PS.CalendarException);
PS.Calendar.registerClass('PS.Calendar', SP.ClientObject);
PS.CalendarPropertyNames.registerClass('PS.CalendarPropertyNames');
PS.CalendarObjectPropertyNames.registerClass('PS.CalendarObjectPropertyNames');
PS.CalendarCollection.registerClass('PS.CalendarCollection', SP.ClientObjectCollection);
PS.CalendarCreationInformation.registerClass('PS.CalendarCreationInformation', SP.ClientValueObject);
PS.CalendarExceptionPropertyNames.registerClass('PS.CalendarExceptionPropertyNames');
PS.CalendarExceptionObjectPropertyNames.registerClass('PS.CalendarExceptionObjectPropertyNames');
PS.CalendarExceptionCollection.registerClass('PS.CalendarExceptionCollection', SP.ClientObjectCollection);
PS.CalendarExceptionCreationInformation.registerClass('PS.CalendarExceptionCreationInformation', SP.ClientValueObject);
PS.CustomField.registerClass('PS.CustomField', SP.ClientObject);
PS.CustomFieldPropertyNames.registerClass('PS.CustomFieldPropertyNames');
PS.CustomFieldObjectPropertyNames.registerClass('PS.CustomFieldObjectPropertyNames');
PS.CustomFieldCollection.registerClass('PS.CustomFieldCollection', SP.ClientObjectCollection);
PS.CustomFieldCreationInformation.registerClass('PS.CustomFieldCreationInformation', SP.ClientValueObject);
PS.DeletedPublishedAssignment.registerClass('PS.DeletedPublishedAssignment', SP.ClientObject);
PS.DeletedPublishedAssignmentPropertyNames.registerClass('PS.DeletedPublishedAssignmentPropertyNames');
PS.DeletedPublishedAssignmentCollection.registerClass('PS.DeletedPublishedAssignmentCollection', SP.ClientObjectCollection);
PS.DraftAssignment.registerClass('PS.DraftAssignment', PS.Assignment);
PS.DraftAssignmentPropertyNames.registerClass('PS.DraftAssignmentPropertyNames');
PS.DraftAssignmentObjectPropertyNames.registerClass('PS.DraftAssignmentObjectPropertyNames');
PS.DraftAssignmentCollection.registerClass('PS.DraftAssignmentCollection', SP.ClientObjectCollection);
PS.Project.registerClass('PS.Project', SP.ClientObject);
PS.DraftProject.registerClass('PS.DraftProject', PS.Project);
PS.DraftProjectPropertyNames.registerClass('PS.DraftProjectPropertyNames');
PS.DraftProjectObjectPropertyNames.registerClass('PS.DraftProjectObjectPropertyNames');
PS.ProjectResource.registerClass('PS.ProjectResource', SP.ClientObject);
PS.DraftProjectResource.registerClass('PS.DraftProjectResource', PS.ProjectResource);
PS.DraftProjectResourcePropertyNames.registerClass('PS.DraftProjectResourcePropertyNames');
PS.DraftProjectResourceObjectPropertyNames.registerClass('PS.DraftProjectResourceObjectPropertyNames');
PS.DraftProjectResourceCollection.registerClass('PS.DraftProjectResourceCollection', SP.ClientObjectCollection);
PS.Task.registerClass('PS.Task', SP.ClientObject);
PS.DraftTask.registerClass('PS.DraftTask', PS.Task);
PS.DraftTaskPropertyNames.registerClass('PS.DraftTaskPropertyNames');
PS.DraftTaskObjectPropertyNames.registerClass('PS.DraftTaskObjectPropertyNames');
PS.DraftTaskCollection.registerClass('PS.DraftTaskCollection', SP.ClientObjectCollection);
PS.TaskLink.registerClass('PS.TaskLink', SP.ClientObject);
PS.DraftTaskLink.registerClass('PS.DraftTaskLink', PS.TaskLink);
PS.DraftTaskLinkPropertyNames.registerClass('PS.DraftTaskLinkPropertyNames');
PS.DraftTaskLinkObjectPropertyNames.registerClass('PS.DraftTaskLinkObjectPropertyNames');
PS.DraftTaskLinkCollection.registerClass('PS.DraftTaskLinkCollection', SP.ClientObjectCollection);
PS.EnterpriseProjectType.registerClass('PS.EnterpriseProjectType', SP.ClientObject);
PS.EnterpriseProjectTypePropertyNames.registerClass('PS.EnterpriseProjectTypePropertyNames');
PS.EnterpriseProjectTypeObjectPropertyNames.registerClass('PS.EnterpriseProjectTypeObjectPropertyNames');
PS.EnterpriseProjectTypeCollection.registerClass('PS.EnterpriseProjectTypeCollection', SP.ClientObjectCollection);
PS.EnterpriseProjectTypeCreationInformation.registerClass('PS.EnterpriseProjectTypeCreationInformation', SP.ClientValueObject);
PS.EnterpriseResource.registerClass('PS.EnterpriseResource', SP.ClientObject);
PS.EnterpriseResourcePropertyNames.registerClass('PS.EnterpriseResourcePropertyNames');
PS.EnterpriseResourceObjectPropertyNames.registerClass('PS.EnterpriseResourceObjectPropertyNames');
PS.EnterpriseResourceCollection.registerClass('PS.EnterpriseResourceCollection', SP.ClientObjectCollection);
PS.EnterpriseResourceCreationInformation.registerClass('PS.EnterpriseResourceCreationInformation', SP.ClientValueObject);
PS.EntityType.registerClass('PS.EntityType', SP.ClientObject);
PS.EntityTypePropertyNames.registerClass('PS.EntityTypePropertyNames');
PS.EntityTypes.registerClass('PS.EntityTypes', SP.ClientObject);
PS.EntityTypesObjectPropertyNames.registerClass('PS.EntityTypesObjectPropertyNames');
PS.Event.registerClass('PS.Event', SP.ClientObject);
PS.EventPropertyNames.registerClass('PS.EventPropertyNames');
PS.EventCollection.registerClass('PS.EventCollection', SP.ClientObjectCollection);
PS.EventHandler.registerClass('PS.EventHandler', SP.ClientObject);
PS.EventHandlerPropertyNames.registerClass('PS.EventHandlerPropertyNames');
PS.EventHandlerObjectPropertyNames.registerClass('PS.EventHandlerObjectPropertyNames');
PS.EventHandlerCollection.registerClass('PS.EventHandlerCollection', SP.ClientObjectCollection);
PS.EventHandlerCreationInformation.registerClass('PS.EventHandlerCreationInformation', SP.ClientValueObject);
PS.LookupEntry.registerClass('PS.LookupEntry', SP.ClientObject);
PS.LookupCost.registerClass('PS.LookupCost', PS.LookupEntry);
PS.LookupCostPropertyNames.registerClass('PS.LookupCostPropertyNames');
PS.LookupDate.registerClass('PS.LookupDate', PS.LookupEntry);
PS.LookupDatePropertyNames.registerClass('PS.LookupDatePropertyNames');
PS.LookupDuration.registerClass('PS.LookupDuration', PS.LookupEntry);
PS.LookupDurationPropertyNames.registerClass('PS.LookupDurationPropertyNames');
PS.LookupEntryPropertyNames.registerClass('PS.LookupEntryPropertyNames');
PS.LookupEntryCollection.registerClass('PS.LookupEntryCollection', SP.ClientObjectCollection);
PS.LookupEntryCreationInformation.registerClass('PS.LookupEntryCreationInformation', SP.ClientValueObject);
PS.LookupEntryValue.registerClass('PS.LookupEntryValue', SP.ClientValueObject);
PS.LookupMask.registerClass('PS.LookupMask', SP.ClientValueObject);
PS.LookupNumber.registerClass('PS.LookupNumber', PS.LookupEntry);
PS.LookupNumberPropertyNames.registerClass('PS.LookupNumberPropertyNames');
PS.LookupTable.registerClass('PS.LookupTable', SP.ClientObject);
PS.LookupTablePropertyNames.registerClass('PS.LookupTablePropertyNames');
PS.LookupTableObjectPropertyNames.registerClass('PS.LookupTableObjectPropertyNames');
PS.LookupTableCollection.registerClass('PS.LookupTableCollection', SP.ClientObjectCollection);
PS.LookupTableCreationInformation.registerClass('PS.LookupTableCreationInformation', SP.ClientValueObject);
PS.LookupTables.registerClass('PS.LookupTables', SP.ClientObject);
PS.LookupText.registerClass('PS.LookupText', PS.LookupEntry);
PS.LookupTextPropertyNames.registerClass('PS.LookupTextPropertyNames');
PS.LookupTextObjectPropertyNames.registerClass('PS.LookupTextObjectPropertyNames');
PS.Phase.registerClass('PS.Phase', SP.ClientObject);
PS.PhasePropertyNames.registerClass('PS.PhasePropertyNames');
PS.PhaseObjectPropertyNames.registerClass('PS.PhaseObjectPropertyNames');
PS.PhaseCollection.registerClass('PS.PhaseCollection', SP.ClientObjectCollection);
PS.PhaseCreationInformation.registerClass('PS.PhaseCreationInformation', SP.ClientValueObject);
PS.PlanAssignment.registerClass('PS.PlanAssignment', SP.ClientObject);
PS.PlanAssignmentPropertyNames.registerClass('PS.PlanAssignmentPropertyNames');
PS.PlanAssignmentObjectPropertyNames.registerClass('PS.PlanAssignmentObjectPropertyNames');
PS.PlanAssignmentCollection.registerClass('PS.PlanAssignmentCollection', SP.ClientObjectCollection);
PS.PlanAssignmentCreationInformation.registerClass('PS.PlanAssignmentCreationInformation', SP.ClientValueObject);
PS.PlanAssignmentInterval.registerClass('PS.PlanAssignmentInterval', SP.ClientObject);
PS.PlanAssignmentIntervalPropertyNames.registerClass('PS.PlanAssignmentIntervalPropertyNames');
PS.PlanAssignmentIntervalCollection.registerClass('PS.PlanAssignmentIntervalCollection', SP.ClientObjectCollection);
PS.PlanAssignmentIntervalCreationInformation.registerClass('PS.PlanAssignmentIntervalCreationInformation', SP.ClientValueObject);
PS.ProjectPropertyNames.registerClass('PS.ProjectPropertyNames');
PS.ProjectObjectPropertyNames.registerClass('PS.ProjectObjectPropertyNames');
PS.ProjectCollection.registerClass('PS.ProjectCollection', SP.ClientObjectCollection);
PS.ProjectCreationInformation.registerClass('PS.ProjectCreationInformation', SP.ClientValueObject);
PS.ProjectDetailPage.registerClass('PS.ProjectDetailPage', SP.ClientObject);
PS.ProjectDetailPagePropertyNames.registerClass('PS.ProjectDetailPagePropertyNames');
PS.ProjectDetailPageObjectPropertyNames.registerClass('PS.ProjectDetailPageObjectPropertyNames');
PS.ProjectDetailPageCollection.registerClass('PS.ProjectDetailPageCollection', SP.ClientObjectCollection);
PS.ProjectDetailPageCollectionObjectPropertyNames.registerClass('PS.ProjectDetailPageCollectionObjectPropertyNames');
PS.ProjectDetailPageCreationInformation.registerClass('PS.ProjectDetailPageCreationInformation', SP.ClientValueObject);
PS.ProjectResourcePropertyNames.registerClass('PS.ProjectResourcePropertyNames');
PS.ProjectResourceObjectPropertyNames.registerClass('PS.ProjectResourceObjectPropertyNames');
PS.ProjectResourceCreationInformation.registerClass('PS.ProjectResourceCreationInformation', SP.ClientValueObject);
PS.ProjectServer.registerClass('PS.ProjectServer', SP.ClientObject);
PS.ProjectServerPropertyNames.registerClass('PS.ProjectServerPropertyNames');
PS.ProjectServerObjectPropertyNames.registerClass('PS.ProjectServerObjectPropertyNames');
PS.ProjectServerData.registerClass('PS.ProjectServerData', SP.ClientObject);
PS.ProjectSummaryTask.registerClass('PS.ProjectSummaryTask', PS.Task);
PS.ProjectSummaryTaskPropertyNames.registerClass('PS.ProjectSummaryTaskPropertyNames');
PS.PublishedAssignment.registerClass('PS.PublishedAssignment', PS.Assignment);
PS.PublishedAssignmentPropertyNames.registerClass('PS.PublishedAssignmentPropertyNames');
PS.PublishedAssignmentObjectPropertyNames.registerClass('PS.PublishedAssignmentObjectPropertyNames');
PS.PublishedAssignmentCollection.registerClass('PS.PublishedAssignmentCollection', SP.ClientObjectCollection);
PS.PublishedProject.registerClass('PS.PublishedProject', PS.Project);
PS.PublishedProjectPropertyNames.registerClass('PS.PublishedProjectPropertyNames');
PS.PublishedProjectObjectPropertyNames.registerClass('PS.PublishedProjectObjectPropertyNames');
PS.PublishedProjectResource.registerClass('PS.PublishedProjectResource', PS.ProjectResource);
PS.PublishedProjectResourcePropertyNames.registerClass('PS.PublishedProjectResourcePropertyNames');
PS.PublishedProjectResourceObjectPropertyNames.registerClass('PS.PublishedProjectResourceObjectPropertyNames');
PS.PublishedProjectResourceCollection.registerClass('PS.PublishedProjectResourceCollection', SP.ClientObjectCollection);
PS.PublishedTask.registerClass('PS.PublishedTask', PS.Task);
PS.PublishedTaskPropertyNames.registerClass('PS.PublishedTaskPropertyNames');
PS.PublishedTaskObjectPropertyNames.registerClass('PS.PublishedTaskObjectPropertyNames');
PS.PublishedTaskCollection.registerClass('PS.PublishedTaskCollection', SP.ClientObjectCollection);
PS.PublishedTaskLink.registerClass('PS.PublishedTaskLink', PS.TaskLink);
PS.PublishedTaskLinkPropertyNames.registerClass('PS.PublishedTaskLinkPropertyNames');
PS.PublishedTaskLinkObjectPropertyNames.registerClass('PS.PublishedTaskLinkObjectPropertyNames');
PS.PublishedTaskLinkCollection.registerClass('PS.PublishedTaskLinkCollection', SP.ClientObjectCollection);
PS.QueueJob.registerClass('PS.QueueJob', SP.ClientObject);
PS.QueueJobPropertyNames.registerClass('PS.QueueJobPropertyNames');
PS.QueueJobObjectPropertyNames.registerClass('PS.QueueJobObjectPropertyNames');
PS.QueueJobCollection.registerClass('PS.QueueJobCollection', SP.ClientObjectCollection);
PS.ResourceCalendarException.registerClass('PS.ResourceCalendarException', PS.CalendarException);
PS.ResourcePlan.registerClass('PS.ResourcePlan', SP.ClientObject);
PS.ResourcePlanPropertyNames.registerClass('PS.ResourcePlanPropertyNames');
PS.ResourcePlanObjectPropertyNames.registerClass('PS.ResourcePlanObjectPropertyNames');
PS.ServiceStatus.registerClass('PS.ServiceStatus', SP.ClientObject);
PS.ServiceStatusPropertyNames.registerClass('PS.ServiceStatusPropertyNames');
PS.Stage.registerClass('PS.Stage', SP.ClientObject);
PS.StagePropertyNames.registerClass('PS.StagePropertyNames');
PS.StageObjectPropertyNames.registerClass('PS.StageObjectPropertyNames');
PS.StageCollection.registerClass('PS.StageCollection', SP.ClientObjectCollection);
PS.StageCreationInformation.registerClass('PS.StageCreationInformation', SP.ClientValueObject);
PS.StageCustomField.registerClass('PS.StageCustomField', SP.ClientObject);
PS.StageCustomFieldPropertyNames.registerClass('PS.StageCustomFieldPropertyNames');
PS.StageCustomFieldObjectPropertyNames.registerClass('PS.StageCustomFieldObjectPropertyNames');
PS.StageCustomFieldCollection.registerClass('PS.StageCustomFieldCollection', SP.ClientObjectCollection);
PS.StageCustomFieldCreationInformation.registerClass('PS.StageCustomFieldCreationInformation', SP.ClientValueObject);
PS.StageDetailPage.registerClass('PS.StageDetailPage', SP.ClientObject);
PS.StageDetailPagePropertyNames.registerClass('PS.StageDetailPagePropertyNames');
PS.StageDetailPageObjectPropertyNames.registerClass('PS.StageDetailPageObjectPropertyNames');
PS.StageDetailPageCollection.registerClass('PS.StageDetailPageCollection', SP.ClientObjectCollection);
PS.StageDetailPageCreationInformation.registerClass('PS.StageDetailPageCreationInformation', SP.ClientValueObject);
PS.StatusAssignment.registerClass('PS.StatusAssignment', SP.ClientObject);
PS.StatusAssignmentPropertyNames.registerClass('PS.StatusAssignmentPropertyNames');
PS.StatusAssignmentObjectPropertyNames.registerClass('PS.StatusAssignmentObjectPropertyNames');
PS.StatusAssignmentCollection.registerClass('PS.StatusAssignmentCollection', SP.ClientObjectCollection);
PS.StatusAssignmentCreationInformation.registerClass('PS.StatusAssignmentCreationInformation', SP.ClientValueObject);
PS.StatusAssignmentHistoryLine.registerClass('PS.StatusAssignmentHistoryLine', SP.ClientObject);
PS.StatusAssignmentHistoryLinePropertyNames.registerClass('PS.StatusAssignmentHistoryLinePropertyNames');
PS.StatusAssignmentHistoryLineObjectPropertyNames.registerClass('PS.StatusAssignmentHistoryLineObjectPropertyNames');
PS.StatusAssignmentHistoryLineCollection.registerClass('PS.StatusAssignmentHistoryLineCollection', SP.ClientObjectCollection);
PS.StatusTask.registerClass('PS.StatusTask', SP.ClientObject);
PS.StatusTaskPropertyNames.registerClass('PS.StatusTaskPropertyNames');
PS.StatusTaskCreationInformation.registerClass('PS.StatusTaskCreationInformation', SP.ClientValueObject);
PS.TaskPropertyNames.registerClass('PS.TaskPropertyNames');
PS.TaskObjectPropertyNames.registerClass('PS.TaskObjectPropertyNames');
PS.TaskCreationInformation.registerClass('PS.TaskCreationInformation', SP.ClientValueObject);
PS.TaskLinkPropertyNames.registerClass('PS.TaskLinkPropertyNames');
PS.TaskLinkCreationInformation.registerClass('PS.TaskLinkCreationInformation', SP.ClientValueObject);
PS.TimePhase.registerClass('PS.TimePhase', SP.ClientObject);
PS.TimePhasePropertyNames.registerClass('PS.TimePhasePropertyNames');
PS.TimePhaseObjectPropertyNames.registerClass('PS.TimePhaseObjectPropertyNames');
PS.TimeSheet.registerClass('PS.TimeSheet', SP.ClientObject);
PS.TimeSheetPropertyNames.registerClass('PS.TimeSheetPropertyNames');
PS.TimeSheetObjectPropertyNames.registerClass('PS.TimeSheetObjectPropertyNames');
PS.TimeSheetLine.registerClass('PS.TimeSheetLine', SP.ClientObject);
PS.TimeSheetLinePropertyNames.registerClass('PS.TimeSheetLinePropertyNames');
PS.TimeSheetLineObjectPropertyNames.registerClass('PS.TimeSheetLineObjectPropertyNames');
PS.TimeSheetLineCollection.registerClass('PS.TimeSheetLineCollection', SP.ClientObjectCollection);
PS.TimeSheetLineCreationInformation.registerClass('PS.TimeSheetLineCreationInformation', SP.ClientValueObject);
PS.TimeSheetPeriod.registerClass('PS.TimeSheetPeriod', SP.ClientObject);
PS.TimeSheetPeriodPropertyNames.registerClass('PS.TimeSheetPeriodPropertyNames');
PS.TimeSheetPeriodObjectPropertyNames.registerClass('PS.TimeSheetPeriodObjectPropertyNames');
PS.TimeSheetPeriodCollection.registerClass('PS.TimeSheetPeriodCollection', SP.ClientObjectCollection);
PS.TimeSheetWork.registerClass('PS.TimeSheetWork', SP.ClientObject);
PS.TimeSheetWorkPropertyNames.registerClass('PS.TimeSheetWorkPropertyNames');
PS.TimeSheetWorkCollection.registerClass('PS.TimeSheetWorkCollection', SP.ClientObjectCollection);
PS.TimeSheetWorkCreationInformation.registerClass('PS.TimeSheetWorkCreationInformation', SP.ClientValueObject);
PS.WorkflowActivities.registerClass('PS.WorkflowActivities', SP.ClientObject);
PS.WorkflowDesigner.registerClass('PS.WorkflowDesigner', SP.ClientObject);
PS.WorkflowDesignerObjectPropertyNames.registerClass('PS.WorkflowDesignerObjectPropertyNames');
PS.WorkflowDesignerField.registerClass('PS.WorkflowDesignerField', SP.ClientObject);
PS.WorkflowDesignerFieldPropertyNames.registerClass('PS.WorkflowDesignerFieldPropertyNames');
PS.WorkflowDesignerFieldObjectPropertyNames.registerClass('PS.WorkflowDesignerFieldObjectPropertyNames');
PS.WorkflowDesignerFieldCollection.registerClass('PS.WorkflowDesignerFieldCollection', SP.ClientObjectCollection);
PS.ProjectContext.$1i = null;
PS.AssignmentPropertyNames.actualCostWorkPerformed = 'ActualCostWorkPerformed';
PS.AssignmentPropertyNames.actualOvertimeCost = 'ActualOvertimeCost';
PS.AssignmentPropertyNames.baselineCost = 'BaselineCost';
PS.AssignmentPropertyNames.baselineCostPerUse = 'BaselineCostPerUse';
PS.AssignmentPropertyNames.baselineFinish = 'BaselineFinish';
PS.AssignmentPropertyNames.baselineStart = 'BaselineStart';
PS.AssignmentPropertyNames.baselineWork = 'BaselineWork';
PS.AssignmentPropertyNames.baselineWorkMilliseconds = 'BaselineWorkMilliseconds';
PS.AssignmentPropertyNames.budgetedCostWorkPerformed = 'BudgetedCostWorkPerformed';
PS.AssignmentPropertyNames.budgetedCostWorkScheduled = 'BudgetedCostWorkScheduled';
PS.AssignmentPropertyNames.costVariance = 'CostVariance';
PS.AssignmentPropertyNames.costVarianceAtCompletion = 'CostVarianceAtCompletion';
PS.AssignmentPropertyNames.created = 'Created';
PS.AssignmentPropertyNames.currentCostVariance = 'CurrentCostVariance';
PS.AssignmentPropertyNames.delay = 'Delay';
PS.AssignmentPropertyNames.delayMilliseconds = 'DelayMilliseconds';
PS.AssignmentPropertyNames.finish = 'Finish';
PS.AssignmentPropertyNames.finishVariance = 'FinishVariance';
PS.AssignmentPropertyNames.finishVarianceMilliseconds = 'FinishVarianceMilliseconds';
PS.AssignmentPropertyNames.id = 'Id';
PS.AssignmentPropertyNames.isConfirmed = 'IsConfirmed';
PS.AssignmentPropertyNames.isOverAllocated = 'IsOverAllocated';
PS.AssignmentPropertyNames.isPublished = 'IsPublished';
PS.AssignmentPropertyNames.isResponsePending = 'IsResponsePending';
PS.AssignmentPropertyNames.isUpdateNeeded = 'IsUpdateNeeded';
PS.AssignmentPropertyNames.levelingDelay = 'LevelingDelay';
PS.AssignmentPropertyNames.levelingDelayMilliseconds = 'LevelingDelayMilliseconds';
PS.AssignmentPropertyNames.modified = 'Modified';
PS.AssignmentPropertyNames.notes = 'Notes';
PS.AssignmentPropertyNames.overtimeCost = 'OvertimeCost';
PS.AssignmentPropertyNames.remainingCost = 'RemainingCost';
PS.AssignmentPropertyNames.remainingOvertimeCost = 'RemainingOvertimeCost';
PS.AssignmentPropertyNames.resume = 'Resume';
PS.AssignmentPropertyNames.scheduleCostVariance = 'ScheduleCostVariance';
PS.AssignmentPropertyNames.start = 'Start';
PS.AssignmentPropertyNames.startVariance = 'StartVariance';
PS.AssignmentPropertyNames.startVarianceMilliseconds = 'StartVarianceMilliseconds';
PS.AssignmentPropertyNames.stop = 'Stop';
PS.AssignmentPropertyNames.workContourType = 'WorkContourType';
PS.AssignmentPropertyNames.workVariance = 'WorkVariance';
PS.AssignmentPropertyNames.workVarianceMilliseconds = 'WorkVarianceMilliseconds';
PS.AssignmentObjectPropertyNames.customFields = 'CustomFields';
PS.CalendarPropertyNames.created = 'Created';
PS.CalendarPropertyNames.id = 'Id';
PS.CalendarPropertyNames.isStandardCalendar = 'IsStandardCalendar';
PS.CalendarPropertyNames.modified = 'Modified';
PS.CalendarPropertyNames.name = 'Name';
PS.CalendarObjectPropertyNames.baseCalendarExceptions = 'BaseCalendarExceptions';
PS.CalendarExceptionPropertyNames.finish = 'Finish';
PS.CalendarExceptionPropertyNames.id = 'Id';
PS.CalendarExceptionPropertyNames.name = 'Name';
PS.CalendarExceptionPropertyNames.recurrenceDays = 'RecurrenceDays';
PS.CalendarExceptionPropertyNames.recurrenceFrequency = 'RecurrenceFrequency';
PS.CalendarExceptionPropertyNames.recurrenceMonth = 'RecurrenceMonth';
PS.CalendarExceptionPropertyNames.recurrenceMonthDay = 'RecurrenceMonthDay';
PS.CalendarExceptionPropertyNames.recurrenceType = 'RecurrenceType';
PS.CalendarExceptionPropertyNames.recurrenceWeek = 'RecurrenceWeek';
PS.CalendarExceptionPropertyNames.shift1Finish = 'Shift1Finish';
PS.CalendarExceptionPropertyNames.shift1Start = 'Shift1Start';
PS.CalendarExceptionPropertyNames.shift2Finish = 'Shift2Finish';
PS.CalendarExceptionPropertyNames.shift2Start = 'Shift2Start';
PS.CalendarExceptionPropertyNames.shift3Finish = 'Shift3Finish';
PS.CalendarExceptionPropertyNames.shift3Start = 'Shift3Start';
PS.CalendarExceptionPropertyNames.shift4Finish = 'Shift4Finish';
PS.CalendarExceptionPropertyNames.shift4Start = 'Shift4Start';
PS.CalendarExceptionPropertyNames.shift5Finish = 'Shift5Finish';
PS.CalendarExceptionPropertyNames.shift5Start = 'Shift5Start';
PS.CalendarExceptionPropertyNames.start = 'Start';
PS.CalendarExceptionObjectPropertyNames.calendar = 'Calendar';
PS.CustomFieldPropertyNames.appAlternateId = 'AppAlternateId';
PS.CustomFieldPropertyNames.description = 'Description';
PS.CustomFieldPropertyNames.fieldType = 'FieldType';
PS.CustomFieldPropertyNames.formula = 'Formula';
PS.CustomFieldPropertyNames.id = 'Id';
PS.CustomFieldPropertyNames.internalName = 'InternalName';
PS.CustomFieldPropertyNames.isEditableInVisibility = 'IsEditableInVisibility';
PS.CustomFieldPropertyNames.isMultilineText = 'IsMultilineText';
PS.CustomFieldPropertyNames.isRequired = 'IsRequired';
PS.CustomFieldPropertyNames.isWorkflowControlled = 'IsWorkflowControlled';
PS.CustomFieldPropertyNames.lookupAllowMultiSelect = 'LookupAllowMultiSelect';
PS.CustomFieldPropertyNames.lookupDefaultValue = 'LookupDefaultValue';
PS.CustomFieldPropertyNames.name = 'Name';
PS.CustomFieldPropertyNames.rollsDownToAssignments = 'RollsDownToAssignments';
PS.CustomFieldPropertyNames.rollupType = 'RollupType';
PS.CustomFieldObjectPropertyNames.entityType = 'EntityType';
PS.CustomFieldObjectPropertyNames.lookupEntries = 'LookupEntries';
PS.CustomFieldObjectPropertyNames.lookupTable = 'LookupTable';
PS.DeletedPublishedAssignmentPropertyNames.deletedDate = 'DeletedDate';
PS.DeletedPublishedAssignmentPropertyNames.id = 'Id';
PS.DeletedPublishedAssignmentPropertyNames.projectId = 'ProjectId';
PS.DraftAssignmentPropertyNames.actualCost = 'ActualCost';
PS.DraftAssignmentPropertyNames.actualFinish = 'ActualFinish';
PS.DraftAssignmentPropertyNames.actualOvertimeWork = 'ActualOvertimeWork';
PS.DraftAssignmentPropertyNames.actualOvertimeWorkMilliseconds = 'ActualOvertimeWorkMilliseconds';
PS.DraftAssignmentPropertyNames.actualStart = 'ActualStart';
PS.DraftAssignmentPropertyNames.actualWork = 'ActualWork';
PS.DraftAssignmentPropertyNames.actualWorkMilliseconds = 'ActualWorkMilliseconds';
PS.DraftAssignmentPropertyNames.budgetedCost = 'BudgetedCost';
PS.DraftAssignmentPropertyNames.budgetedWork = 'BudgetedWork';
PS.DraftAssignmentPropertyNames.budgetedWorkMilliseconds = 'BudgetedWorkMilliseconds';
PS.DraftAssignmentPropertyNames.cost = 'Cost';
PS.DraftAssignmentPropertyNames.defaultBookingType = 'DefaultBookingType';
PS.DraftAssignmentPropertyNames.isLockedByManager = 'IsLockedByManager';
PS.DraftAssignmentPropertyNames.isWorkResource = 'IsWorkResource';
PS.DraftAssignmentPropertyNames.overtimeWork = 'OvertimeWork';
PS.DraftAssignmentPropertyNames.overtimeWorkMilliseconds = 'OvertimeWorkMilliseconds';
PS.DraftAssignmentPropertyNames.percentWorkComplete = 'PercentWorkComplete';
PS.DraftAssignmentPropertyNames.regularWork = 'RegularWork';
PS.DraftAssignmentPropertyNames.regularWorkMilliseconds = 'RegularWorkMilliseconds';
PS.DraftAssignmentPropertyNames.remainingOvertimeWork = 'RemainingOvertimeWork';
PS.DraftAssignmentPropertyNames.remainingOvertimeWorkMilliseconds = 'RemainingOvertimeWorkMilliseconds';
PS.DraftAssignmentPropertyNames.remainingWork = 'RemainingWork';
PS.DraftAssignmentPropertyNames.remainingWorkMilliseconds = 'RemainingWorkMilliseconds';
PS.DraftAssignmentPropertyNames.resourceCapacity = 'ResourceCapacity';
PS.DraftAssignmentPropertyNames.work = 'Work';
PS.DraftAssignmentPropertyNames.workMilliseconds = 'WorkMilliseconds';
PS.DraftAssignmentObjectPropertyNames.owner = 'Owner';
PS.DraftAssignmentObjectPropertyNames.parent = 'Parent';
PS.DraftAssignmentObjectPropertyNames.resource = 'Resource';
PS.DraftAssignmentObjectPropertyNames.task = 'Task';
PS.DraftProjectPropertyNames.currencyCode = 'CurrencyCode';
PS.DraftProjectPropertyNames.currencyDigits = 'CurrencyDigits';
PS.DraftProjectPropertyNames.currencyPosition = 'CurrencyPosition';
PS.DraftProjectPropertyNames.currencySymbol = 'CurrencySymbol';
PS.DraftProjectPropertyNames.currentDate = 'CurrentDate';
PS.DraftProjectPropertyNames.daysPerMonth = 'DaysPerMonth';
PS.DraftProjectPropertyNames.defaultEffortDriven = 'DefaultEffortDriven';
PS.DraftProjectPropertyNames.defaultEstimatedDuration = 'DefaultEstimatedDuration';
PS.DraftProjectPropertyNames.defaultFixedCostAccrual = 'DefaultFixedCostAccrual';
PS.DraftProjectPropertyNames.defaultOvertimeRate = 'DefaultOvertimeRate';
PS.DraftProjectPropertyNames.defaultStandardRate = 'DefaultStandardRate';
PS.DraftProjectPropertyNames.defaultTaskType = 'DefaultTaskType';
PS.DraftProjectPropertyNames.defaultWorkFormat = 'DefaultWorkFormat';
PS.DraftProjectPropertyNames.description = 'Description';
PS.DraftProjectPropertyNames.finishDate = 'FinishDate';
PS.DraftProjectPropertyNames.fiscalYearStartMonth = 'FiscalYearStartMonth';
PS.DraftProjectPropertyNames.minutesPerDay = 'MinutesPerDay';
PS.DraftProjectPropertyNames.minutesPerWeek = 'MinutesPerWeek';
PS.DraftProjectPropertyNames.name = 'Name';
PS.DraftProjectPropertyNames.newTasksAreManual = 'NewTasksAreManual';
PS.DraftProjectPropertyNames.numberFiscalYearFromStart = 'NumberFiscalYearFromStart';
PS.DraftProjectPropertyNames.projectIdentifier = 'ProjectIdentifier';
PS.DraftProjectPropertyNames.protectedActualsSynch = 'ProtectedActualsSynch';
PS.DraftProjectPropertyNames.showEstimatedDurations = 'ShowEstimatedDurations';
PS.DraftProjectPropertyNames.startDate = 'StartDate';
PS.DraftProjectPropertyNames.statusDate = 'StatusDate';
PS.DraftProjectPropertyNames.trackingMode = 'TrackingMode';
PS.DraftProjectPropertyNames.utilizationDate = 'UtilizationDate';
PS.DraftProjectPropertyNames.utilizationType = 'UtilizationType';
PS.DraftProjectPropertyNames.weekStartDay = 'WeekStartDay';
PS.DraftProjectPropertyNames.winprojVersion = 'WinprojVersion';
PS.DraftProjectObjectPropertyNames.assignments = 'Assignments';
PS.DraftProjectObjectPropertyNames.calendar = 'Calendar';
PS.DraftProjectObjectPropertyNames.includeCustomFields = 'IncludeCustomFields';
PS.DraftProjectObjectPropertyNames.owner = 'Owner';
PS.DraftProjectObjectPropertyNames.projectResources = 'ProjectResources';
PS.DraftProjectObjectPropertyNames.taskLinks = 'TaskLinks';
PS.DraftProjectObjectPropertyNames.tasks = 'Tasks';
PS.DraftProjectResourcePropertyNames.canLevel = 'CanLevel';
PS.DraftProjectResourcePropertyNames.code = 'Code';
PS.DraftProjectResourcePropertyNames.costAccrual = 'CostAccrual';
PS.DraftProjectResourcePropertyNames.costCenter = 'CostCenter';
PS.DraftProjectResourcePropertyNames.costPerUse = 'CostPerUse';
PS.DraftProjectResourcePropertyNames.defaultBookingType = 'DefaultBookingType';
PS.DraftProjectResourcePropertyNames.email = 'Email';
PS.DraftProjectResourcePropertyNames.group = 'Group';
PS.DraftProjectResourcePropertyNames.initials = 'Initials';
PS.DraftProjectResourcePropertyNames.materialLabel = 'MaterialLabel';
PS.DraftProjectResourcePropertyNames.maximumCapacity = 'MaximumCapacity';
PS.DraftProjectResourcePropertyNames.name = 'Name';
PS.DraftProjectResourcePropertyNames.overtimeRate = 'OvertimeRate';
PS.DraftProjectResourcePropertyNames.overtimeRateUnits = 'OvertimeRateUnits';
PS.DraftProjectResourcePropertyNames.phonetics = 'Phonetics';
PS.DraftProjectResourcePropertyNames.standardRate = 'StandardRate';
PS.DraftProjectResourcePropertyNames.standardRateUnits = 'StandardRateUnits';
PS.DraftProjectResourceObjectPropertyNames.assignments = 'Assignments';
PS.DraftProjectResourceObjectPropertyNames.defaultAssignmentOwner = 'DefaultAssignmentOwner';
PS.DraftTaskPropertyNames.actualCost = 'ActualCost';
PS.DraftTaskPropertyNames.actualFinish = 'ActualFinish';
PS.DraftTaskPropertyNames.actualStart = 'ActualStart';
PS.DraftTaskPropertyNames.actualWork = 'ActualWork';
PS.DraftTaskPropertyNames.actualWorkMilliseconds = 'ActualWorkMilliseconds';
PS.DraftTaskPropertyNames.budgetWork = 'BudgetWork';
PS.DraftTaskPropertyNames.budgetWorkMilliseconds = 'BudgetWorkMilliseconds';
PS.DraftTaskPropertyNames.completion = 'Completion';
PS.DraftTaskPropertyNames.constraintStartEnd = 'ConstraintStartEnd';
PS.DraftTaskPropertyNames.constraintType = 'ConstraintType';
PS.DraftTaskPropertyNames.cost = 'Cost';
PS.DraftTaskPropertyNames.deadline = 'Deadline';
PS.DraftTaskPropertyNames.duration = 'Duration';
PS.DraftTaskPropertyNames.durationMilliseconds = 'DurationMilliseconds';
PS.DraftTaskPropertyNames.finish = 'Finish';
PS.DraftTaskPropertyNames.finishText = 'FinishText';
PS.DraftTaskPropertyNames.fixedCost = 'FixedCost';
PS.DraftTaskPropertyNames.isActive = 'IsActive';
PS.DraftTaskPropertyNames.isLockedByManager = 'IsLockedByManager';
PS.DraftTaskPropertyNames.isManual = 'IsManual';
PS.DraftTaskPropertyNames.isMarked = 'IsMarked';
PS.DraftTaskPropertyNames.isMilestone = 'IsMilestone';
PS.DraftTaskPropertyNames.levelingAdjustsAssignments = 'LevelingAdjustsAssignments';
PS.DraftTaskPropertyNames.levelingCanSplit = 'LevelingCanSplit';
PS.DraftTaskPropertyNames.name = 'Name';
PS.DraftTaskPropertyNames.outlineLevel = 'OutlineLevel';
PS.DraftTaskPropertyNames.percentComplete = 'PercentComplete';
PS.DraftTaskPropertyNames.percentPhysicalWorkComplete = 'PercentPhysicalWorkComplete';
PS.DraftTaskPropertyNames.priority = 'Priority';
PS.DraftTaskPropertyNames.remainingDuration = 'RemainingDuration';
PS.DraftTaskPropertyNames.remainingDurationMilliseconds = 'RemainingDurationMilliseconds';
PS.DraftTaskPropertyNames.start = 'Start';
PS.DraftTaskPropertyNames.startText = 'StartText';
PS.DraftTaskPropertyNames.usePercentPhysicalWorkComplete = 'UsePercentPhysicalWorkComplete';
PS.DraftTaskPropertyNames.work = 'Work';
PS.DraftTaskPropertyNames.workMilliseconds = 'WorkMilliseconds';
PS.DraftTaskObjectPropertyNames.assignments = 'Assignments';
PS.DraftTaskObjectPropertyNames.calendar = 'Calendar';
PS.DraftTaskObjectPropertyNames.parent = 'Parent';
PS.DraftTaskObjectPropertyNames.predecessors = 'Predecessors';
PS.DraftTaskObjectPropertyNames.successors = 'Successors';
PS.DraftTaskLinkPropertyNames.dependencyType = 'DependencyType';
PS.DraftTaskLinkObjectPropertyNames.end = 'End';
PS.DraftTaskLinkObjectPropertyNames.start = 'Start';
PS.EnterpriseProjectTypePropertyNames.description = 'Description';
PS.EnterpriseProjectTypePropertyNames.id = 'Id';
PS.EnterpriseProjectTypePropertyNames.imageUrl = 'ImageUrl';
PS.EnterpriseProjectTypePropertyNames.isDefault = 'IsDefault';
PS.EnterpriseProjectTypePropertyNames.isManaged = 'IsManaged';
PS.EnterpriseProjectTypePropertyNames.name = 'Name';
PS.EnterpriseProjectTypePropertyNames.order = 'Order';
PS.EnterpriseProjectTypePropertyNames.projectPlanTemplateId = 'ProjectPlanTemplateId';
PS.EnterpriseProjectTypePropertyNames.workflowAssociationId = 'WorkflowAssociationId';
PS.EnterpriseProjectTypePropertyNames.workflowAssociationName = 'WorkflowAssociationName';
PS.EnterpriseProjectTypePropertyNames.workspaceTemplateName = 'WorkspaceTemplateName';
PS.EnterpriseProjectTypeObjectPropertyNames.projectDetailPages = 'ProjectDetailPages';
PS.EnterpriseResourcePropertyNames.canLevel = 'CanLevel';
PS.EnterpriseResourcePropertyNames.code = 'Code';
PS.EnterpriseResourcePropertyNames.costAccrual = 'CostAccrual';
PS.EnterpriseResourcePropertyNames.costCenter = 'CostCenter';
PS.EnterpriseResourcePropertyNames.created = 'Created';
PS.EnterpriseResourcePropertyNames.defaultBookingType = 'DefaultBookingType';
PS.EnterpriseResourcePropertyNames.email = 'Email';
PS.EnterpriseResourcePropertyNames.externalId = 'ExternalId';
PS.EnterpriseResourcePropertyNames.group = 'Group';
PS.EnterpriseResourcePropertyNames.hireDate = 'HireDate';
PS.EnterpriseResourcePropertyNames.id = 'Id';
PS.EnterpriseResourcePropertyNames.initials = 'Initials';
PS.EnterpriseResourcePropertyNames.isActive = 'IsActive';
PS.EnterpriseResourcePropertyNames.isBudget = 'IsBudget';
PS.EnterpriseResourcePropertyNames.isCheckedOut = 'IsCheckedOut';
PS.EnterpriseResourcePropertyNames.isGeneric = 'IsGeneric';
PS.EnterpriseResourcePropertyNames.isTeam = 'IsTeam';
PS.EnterpriseResourcePropertyNames.materialLabel = 'MaterialLabel';
PS.EnterpriseResourcePropertyNames.modified = 'Modified';
PS.EnterpriseResourcePropertyNames.name = 'Name';
PS.EnterpriseResourcePropertyNames.phonetics = 'Phonetics';
PS.EnterpriseResourcePropertyNames.resourceType = 'ResourceType';
PS.EnterpriseResourcePropertyNames.terminationDate = 'TerminationDate';
PS.EnterpriseResourceObjectPropertyNames.assignments = 'Assignments';
PS.EnterpriseResourceObjectPropertyNames.baseCalendar = 'BaseCalendar';
PS.EnterpriseResourceObjectPropertyNames.customFields = 'CustomFields';
PS.EnterpriseResourceObjectPropertyNames.defaultAssignmentOwner = 'DefaultAssignmentOwner';
PS.EnterpriseResourceObjectPropertyNames.resourceCalendarExceptions = 'ResourceCalendarExceptions';
PS.EnterpriseResourceObjectPropertyNames.timesheetManager = 'TimesheetManager';
PS.EnterpriseResourceObjectPropertyNames.user = 'User';
PS.EntityTypePropertyNames.name = 'Name';
PS.EntityTypePropertyNames.id = 'ID';
PS.EntityTypesObjectPropertyNames.assignmentEntity = 'AssignmentEntity';
PS.EntityTypesObjectPropertyNames.projectEntity = 'ProjectEntity';
PS.EntityTypesObjectPropertyNames.resourceEntity = 'ResourceEntity';
PS.EntityTypesObjectPropertyNames.taskEntity = 'TaskEntity';
PS.EventPropertyNames.eventName = 'EventName';
PS.EventPropertyNames.id = 'Id';
PS.EventPropertyNames.sourceName = 'SourceName';
PS.EventHandlerPropertyNames.assemblyName = 'AssemblyName';
PS.EventHandlerPropertyNames.className = 'ClassName';
PS.EventHandlerPropertyNames.description = 'Description';
PS.EventHandlerPropertyNames.endpointUrl = 'EndpointUrl';
PS.EventHandlerPropertyNames.id = 'Id';
PS.EventHandlerPropertyNames.name = 'Name';
PS.EventHandlerPropertyNames.order = 'Order';
PS.EventHandlerObjectPropertyNames.event = 'Event';
PS.LookupCostPropertyNames.value = 'Value';
PS.LookupDatePropertyNames.value = 'Value';
PS.LookupDurationPropertyNames.value = 'Value';
PS.LookupDurationPropertyNames.valueMilliseconds = 'ValueMilliseconds';
PS.LookupEntryPropertyNames.appAlternateId = 'AppAlternateId';
PS.LookupEntryPropertyNames.description = 'Description';
PS.LookupEntryPropertyNames.fullValue = 'FullValue';
PS.LookupEntryPropertyNames.id = 'Id';
PS.LookupEntryPropertyNames.internalName = 'InternalName';
PS.LookupEntryPropertyNames.sortIndex = 'SortIndex';
PS.LookupNumberPropertyNames.value = 'Value';
PS.LookupTablePropertyNames.appAlternateId = 'AppAlternateId';
PS.LookupTablePropertyNames.fieldType = 'FieldType';
PS.LookupTablePropertyNames.id = 'Id';
PS.LookupTablePropertyNames.masks = 'Masks';
PS.LookupTablePropertyNames.name = 'Name';
PS.LookupTablePropertyNames.sortOrder = 'SortOrder';
PS.LookupTableObjectPropertyNames.entries = 'Entries';
PS.LookupTextPropertyNames.hasChildren = 'HasChildren';
PS.LookupTextPropertyNames.mask = 'Mask';
PS.LookupTextPropertyNames.value = 'Value';
PS.LookupTextObjectPropertyNames.parent = 'Parent';
PS.PhasePropertyNames.description = 'Description';
PS.PhasePropertyNames.id = 'Id';
PS.PhasePropertyNames.name = 'Name';
PS.PhaseObjectPropertyNames.stages = 'Stages';
PS.PlanAssignmentPropertyNames.bookingType = 'BookingType';
PS.PlanAssignmentPropertyNames.canLevel = 'CanLevel';
PS.PlanAssignmentPropertyNames.code = 'Code';
PS.PlanAssignmentPropertyNames.costCenter = 'CostCenter';
PS.PlanAssignmentPropertyNames.email = 'Email';
PS.PlanAssignmentPropertyNames.group = 'Group';
PS.PlanAssignmentPropertyNames.hireDate = 'HireDate';
PS.PlanAssignmentPropertyNames.id = 'Id';
PS.PlanAssignmentPropertyNames.isTeam = 'IsTeam';
PS.PlanAssignmentPropertyNames.name = 'Name';
PS.PlanAssignmentPropertyNames.phonetics = 'Phonetics';
PS.PlanAssignmentPropertyNames.resourceType = 'ResourceType';
PS.PlanAssignmentPropertyNames.terminationDate = 'TerminationDate';
PS.PlanAssignmentObjectPropertyNames.customFields = 'CustomFields';
PS.PlanAssignmentObjectPropertyNames.intervals = 'Intervals';
PS.PlanAssignmentObjectPropertyNames.resource = 'Resource';
PS.PlanAssignmentIntervalPropertyNames.duration = 'Duration';
PS.PlanAssignmentIntervalPropertyNames.durationMilliseconds = 'DurationMilliseconds';
PS.PlanAssignmentIntervalPropertyNames.end = 'End';
PS.PlanAssignmentIntervalPropertyNames.name = 'Name';
PS.PlanAssignmentIntervalPropertyNames.start = 'Start';
PS.ProjectPropertyNames.approvedEnd = 'ApprovedEnd';
PS.ProjectPropertyNames.approvedStart = 'ApprovedStart';
PS.ProjectPropertyNames.calculateActualCosts = 'CalculateActualCosts';
PS.ProjectPropertyNames.calculatesActualCosts = 'CalculatesActualCosts';
PS.ProjectPropertyNames.checkedOutDate = 'CheckedOutDate';
PS.ProjectPropertyNames.checkOutDescription = 'CheckOutDescription';
PS.ProjectPropertyNames.checkOutId = 'CheckOutId';
PS.ProjectPropertyNames.createdDate = 'CreatedDate';
PS.ProjectPropertyNames.criticalSlackLimit = 'CriticalSlackLimit';
PS.ProjectPropertyNames.defaultFinishTime = 'DefaultFinishTime';
PS.ProjectPropertyNames.defaultOvertimeRateUnits = 'DefaultOvertimeRateUnits';
PS.ProjectPropertyNames.defaultStandardRateUnits = 'DefaultStandardRateUnits';
PS.ProjectPropertyNames.defaultStartTime = 'DefaultStartTime';
PS.ProjectPropertyNames.hasMppPendingImport = 'HasMppPendingImport';
PS.ProjectPropertyNames.honorConstraints = 'HonorConstraints';
PS.ProjectPropertyNames.id = 'Id';
PS.ProjectPropertyNames.isCheckedOut = 'IsCheckedOut';
PS.ProjectPropertyNames.lastPublishedDate = 'LastPublishedDate';
PS.ProjectPropertyNames.lastSavedDate = 'LastSavedDate';
PS.ProjectPropertyNames.moveActualIfLater = 'MoveActualIfLater';
PS.ProjectPropertyNames.moveActualToStatus = 'MoveActualToStatus';
PS.ProjectPropertyNames.moveRemainingIfEarlier = 'MoveRemainingIfEarlier';
PS.ProjectPropertyNames.moveRemainingToStatus = 'MoveRemainingToStatus';
PS.ProjectPropertyNames.multipleCriticalPaths = 'MultipleCriticalPaths';
PS.ProjectPropertyNames.optimizerDecision = 'OptimizerDecision';
PS.ProjectPropertyNames.percentComplete = 'PercentComplete';
PS.ProjectPropertyNames.plannerDecision = 'PlannerDecision';
PS.ProjectPropertyNames.projectSiteUrl = 'ProjectSiteUrl';
PS.ProjectPropertyNames.projectType = 'ProjectType';
PS.ProjectPropertyNames.scheduledFromStart = 'ScheduledFromStart';
PS.ProjectPropertyNames.splitInProgress = 'SplitInProgress';
PS.ProjectPropertyNames.spreadActualCostsToStatus = 'SpreadActualCostsToStatus';
PS.ProjectPropertyNames.spreadPercentCompleteToStatus = 'SpreadPercentCompleteToStatus';
PS.ProjectPropertyNames.summaryTaskId = 'SummaryTaskId';
PS.ProjectPropertyNames.taskListId = 'TaskListId';
PS.ProjectObjectPropertyNames.checkedOutBy = 'CheckedOutBy';
PS.ProjectObjectPropertyNames.customFields = 'CustomFields';
PS.ProjectObjectPropertyNames.enterpriseProjectType = 'EnterpriseProjectType';
PS.ProjectObjectPropertyNames.phase = 'Phase';
PS.ProjectObjectPropertyNames.projectSummaryTask = 'ProjectSummaryTask';
PS.ProjectObjectPropertyNames.queueJobs = 'QueueJobs';
PS.ProjectObjectPropertyNames.stage = 'Stage';
PS.ProjectDetailPagePropertyNames.id = 'Id';
PS.ProjectDetailPagePropertyNames.name = 'Name';
PS.ProjectDetailPagePropertyNames.pageType = 'PageType';
PS.ProjectDetailPageObjectPropertyNames.item = 'Item';
PS.ProjectDetailPageCollectionObjectPropertyNames.list = 'List';
PS.ProjectResourcePropertyNames.actualCost = 'ActualCost';
PS.ProjectResourcePropertyNames.actualCostWorkPerformed = 'ActualCostWorkPerformed';
PS.ProjectResourcePropertyNames.actualCostWorkPerformedMilliseconds = 'ActualCostWorkPerformedMilliseconds';
PS.ProjectResourcePropertyNames.actualOvertimeCost = 'ActualOvertimeCost';
PS.ProjectResourcePropertyNames.actualOvertimeWork = 'ActualOvertimeWork';
PS.ProjectResourcePropertyNames.actualOvertimeWorkMilliseconds = 'ActualOvertimeWorkMilliseconds';
PS.ProjectResourcePropertyNames.actualWork = 'ActualWork';
PS.ProjectResourcePropertyNames.actualWorkMilliseconds = 'ActualWorkMilliseconds';
PS.ProjectResourcePropertyNames.availableFrom = 'AvailableFrom';
PS.ProjectResourcePropertyNames.availableTo = 'AvailableTo';
PS.ProjectResourcePropertyNames.baselineCost = 'BaselineCost';
PS.ProjectResourcePropertyNames.baselineWork = 'BaselineWork';
PS.ProjectResourcePropertyNames.baselineWorkMilliseconds = 'BaselineWorkMilliseconds';
PS.ProjectResourcePropertyNames.budetCostWorkPerformed = 'BudetCostWorkPerformed';
PS.ProjectResourcePropertyNames.budgetedCost = 'BudgetedCost';
PS.ProjectResourcePropertyNames.budgetedCostWorkScheduled = 'BudgetedCostWorkScheduled';
PS.ProjectResourcePropertyNames.budgetedWork = 'BudgetedWork';
PS.ProjectResourcePropertyNames.budgetedWorkMilliseconds = 'BudgetedWorkMilliseconds';
PS.ProjectResourcePropertyNames.cost = 'Cost';
PS.ProjectResourcePropertyNames.costVariance = 'CostVariance';
PS.ProjectResourcePropertyNames.costVarianceAtCompletion = 'CostVarianceAtCompletion';
PS.ProjectResourcePropertyNames.created = 'Created';
PS.ProjectResourcePropertyNames.currentCostVariance = 'CurrentCostVariance';
PS.ProjectResourcePropertyNames.finish = 'Finish';
PS.ProjectResourcePropertyNames.id = 'Id';
PS.ProjectResourcePropertyNames.isBudgeted = 'IsBudgeted';
PS.ProjectResourcePropertyNames.isGenericResource = 'IsGenericResource';
PS.ProjectResourcePropertyNames.isOverAllocated = 'IsOverAllocated';
PS.ProjectResourcePropertyNames.modified = 'Modified';
PS.ProjectResourcePropertyNames.notes = 'Notes';
PS.ProjectResourcePropertyNames.overtimeCost = 'OvertimeCost';
PS.ProjectResourcePropertyNames.overtimeWork = 'OvertimeWork';
PS.ProjectResourcePropertyNames.overtimeWorkMilliseconds = 'OvertimeWorkMilliseconds';
PS.ProjectResourcePropertyNames.peakWork = 'PeakWork';
PS.ProjectResourcePropertyNames.peakWorkMilliseconds = 'PeakWorkMilliseconds';
PS.ProjectResourcePropertyNames.percentWorkComplete = 'PercentWorkComplete';
PS.ProjectResourcePropertyNames.regularWork = 'RegularWork';
PS.ProjectResourcePropertyNames.regularWorkMilliseconds = 'RegularWorkMilliseconds';
PS.ProjectResourcePropertyNames.remainingCost = 'RemainingCost';
PS.ProjectResourcePropertyNames.remainingOvertimeCost = 'RemainingOvertimeCost';
PS.ProjectResourcePropertyNames.remainingOvertimeWork = 'RemainingOvertimeWork';
PS.ProjectResourcePropertyNames.remainingOvertimeWorkMilliseconds = 'RemainingOvertimeWorkMilliseconds';
PS.ProjectResourcePropertyNames.remainingWork = 'RemainingWork';
PS.ProjectResourcePropertyNames.remainingWorkMilliseconds = 'RemainingWorkMilliseconds';
PS.ProjectResourcePropertyNames.scheduleCostVariance = 'ScheduleCostVariance';
PS.ProjectResourcePropertyNames.start = 'Start';
PS.ProjectResourcePropertyNames.work = 'Work';
PS.ProjectResourcePropertyNames.workMilliseconds = 'WorkMilliseconds';
PS.ProjectResourcePropertyNames.workVariance = 'WorkVariance';
PS.ProjectResourcePropertyNames.workVarianceMilliseconds = 'WorkVarianceMilliseconds';
PS.ProjectResourceObjectPropertyNames.customFields = 'CustomFields';
PS.ProjectResourceObjectPropertyNames.enterpriseResource = 'EnterpriseResource';
PS.ProjectServerPropertyNames.isDelegate = 'IsDelegate';
PS.ProjectServerPropertyNames.isReadOnly = 'IsReadOnly';
PS.ProjectServerObjectPropertyNames.calendars = 'Calendars';
PS.ProjectServerObjectPropertyNames.customFields = 'CustomFields';
PS.ProjectServerObjectPropertyNames.enterpriseProjectTypes = 'EnterpriseProjectTypes';
PS.ProjectServerObjectPropertyNames.enterpriseResources = 'EnterpriseResources';
PS.ProjectServerObjectPropertyNames.entityTypes = 'EntityTypes';
PS.ProjectServerObjectPropertyNames.eventHandlers = 'EventHandlers';
PS.ProjectServerObjectPropertyNames.events = 'Events';
PS.ProjectServerObjectPropertyNames.lookupTables = 'LookupTables';
PS.ProjectServerObjectPropertyNames.phases = 'Phases';
PS.ProjectServerObjectPropertyNames.projectDetailPages = 'ProjectDetailPages';
PS.ProjectServerObjectPropertyNames.projects = 'Projects';
PS.ProjectServerObjectPropertyNames.stages = 'Stages';
PS.ProjectServerObjectPropertyNames.timeSheetPeriods = 'TimeSheetPeriods';
PS.ProjectServerObjectPropertyNames.workflowActivities = 'WorkflowActivities';
PS.ProjectServerObjectPropertyNames.workflowDesigner = 'WorkflowDesigner';
PS.ProjectSummaryTaskPropertyNames.actualCost = 'ActualCost';
PS.ProjectSummaryTaskPropertyNames.actualWork = 'ActualWork';
PS.ProjectSummaryTaskPropertyNames.actualWorkMilliseconds = 'ActualWorkMilliseconds';
PS.ProjectSummaryTaskPropertyNames.budgetWork = 'BudgetWork';
PS.ProjectSummaryTaskPropertyNames.budgetWorkMilliseconds = 'BudgetWorkMilliseconds';
PS.ProjectSummaryTaskPropertyNames.cost = 'Cost';
PS.ProjectSummaryTaskPropertyNames.duration = 'Duration';
PS.ProjectSummaryTaskPropertyNames.durationMilliseconds = 'DurationMilliseconds';
PS.ProjectSummaryTaskPropertyNames.finish = 'Finish';
PS.ProjectSummaryTaskPropertyNames.finishText = 'FinishText';
PS.ProjectSummaryTaskPropertyNames.name = 'Name';
PS.ProjectSummaryTaskPropertyNames.percentComplete = 'PercentComplete';
PS.ProjectSummaryTaskPropertyNames.priority = 'Priority';
PS.ProjectSummaryTaskPropertyNames.start = 'Start';
PS.ProjectSummaryTaskPropertyNames.startText = 'StartText';
PS.ProjectSummaryTaskPropertyNames.work = 'Work';
PS.ProjectSummaryTaskPropertyNames.workMilliseconds = 'WorkMilliseconds';
PS.PublishedAssignmentPropertyNames.actualCost = 'ActualCost';
PS.PublishedAssignmentPropertyNames.actualFinish = 'ActualFinish';
PS.PublishedAssignmentPropertyNames.actualOvertimeWork = 'ActualOvertimeWork';
PS.PublishedAssignmentPropertyNames.actualOvertimeWorkMilliseconds = 'ActualOvertimeWorkMilliseconds';
PS.PublishedAssignmentPropertyNames.actualStart = 'ActualStart';
PS.PublishedAssignmentPropertyNames.actualWork = 'ActualWork';
PS.PublishedAssignmentPropertyNames.actualWorkMilliseconds = 'ActualWorkMilliseconds';
PS.PublishedAssignmentPropertyNames.budgetedCost = 'BudgetedCost';
PS.PublishedAssignmentPropertyNames.budgetedWork = 'BudgetedWork';
PS.PublishedAssignmentPropertyNames.budgetedWorkMilliseconds = 'BudgetedWorkMilliseconds';
PS.PublishedAssignmentPropertyNames.cost = 'Cost';
PS.PublishedAssignmentPropertyNames.defaultBookingType = 'DefaultBookingType';
PS.PublishedAssignmentPropertyNames.isLockedByManager = 'IsLockedByManager';
PS.PublishedAssignmentPropertyNames.isWorkResource = 'IsWorkResource';
PS.PublishedAssignmentPropertyNames.overtimeWork = 'OvertimeWork';
PS.PublishedAssignmentPropertyNames.overtimeWorkMilliseconds = 'OvertimeWorkMilliseconds';
PS.PublishedAssignmentPropertyNames.percentWorkComplete = 'PercentWorkComplete';
PS.PublishedAssignmentPropertyNames.regularWork = 'RegularWork';
PS.PublishedAssignmentPropertyNames.regularWorkMilliseconds = 'RegularWorkMilliseconds';
PS.PublishedAssignmentPropertyNames.remainingOvertimeWork = 'RemainingOvertimeWork';
PS.PublishedAssignmentPropertyNames.remainingOvertimeWorkMilliseconds = 'RemainingOvertimeWorkMilliseconds';
PS.PublishedAssignmentPropertyNames.remainingWork = 'RemainingWork';
PS.PublishedAssignmentPropertyNames.remainingWorkMilliseconds = 'RemainingWorkMilliseconds';
PS.PublishedAssignmentPropertyNames.resourceCapacity = 'ResourceCapacity';
PS.PublishedAssignmentPropertyNames.work = 'Work';
PS.PublishedAssignmentPropertyNames.workMilliseconds = 'WorkMilliseconds';
PS.PublishedAssignmentObjectPropertyNames.owner = 'Owner';
PS.PublishedAssignmentObjectPropertyNames.parent = 'Parent';
PS.PublishedAssignmentObjectPropertyNames.resource = 'Resource';
PS.PublishedAssignmentObjectPropertyNames.task = 'Task';
PS.PublishedProjectPropertyNames.currencyCode = 'CurrencyCode';
PS.PublishedProjectPropertyNames.currencyDigits = 'CurrencyDigits';
PS.PublishedProjectPropertyNames.currencyPosition = 'CurrencyPosition';
PS.PublishedProjectPropertyNames.currencySymbol = 'CurrencySymbol';
PS.PublishedProjectPropertyNames.currentDate = 'CurrentDate';
PS.PublishedProjectPropertyNames.daysPerMonth = 'DaysPerMonth';
PS.PublishedProjectPropertyNames.defaultEffortDriven = 'DefaultEffortDriven';
PS.PublishedProjectPropertyNames.defaultEstimatedDuration = 'DefaultEstimatedDuration';
PS.PublishedProjectPropertyNames.defaultFixedCostAccrual = 'DefaultFixedCostAccrual';
PS.PublishedProjectPropertyNames.defaultOvertimeRate = 'DefaultOvertimeRate';
PS.PublishedProjectPropertyNames.defaultStandardRate = 'DefaultStandardRate';
PS.PublishedProjectPropertyNames.defaultTaskType = 'DefaultTaskType';
PS.PublishedProjectPropertyNames.defaultWorkFormat = 'DefaultWorkFormat';
PS.PublishedProjectPropertyNames.description = 'Description';
PS.PublishedProjectPropertyNames.finishDate = 'FinishDate';
PS.PublishedProjectPropertyNames.fiscalYearStartMonth = 'FiscalYearStartMonth';
PS.PublishedProjectPropertyNames.isEnterpriseProject = 'IsEnterpriseProject';
PS.PublishedProjectPropertyNames.minutesPerDay = 'MinutesPerDay';
PS.PublishedProjectPropertyNames.minutesPerWeek = 'MinutesPerWeek';
PS.PublishedProjectPropertyNames.name = 'Name';
PS.PublishedProjectPropertyNames.newTasksAreManual = 'NewTasksAreManual';
PS.PublishedProjectPropertyNames.numberFiscalYearFromStart = 'NumberFiscalYearFromStart';
PS.PublishedProjectPropertyNames.projectIdentifier = 'ProjectIdentifier';
PS.PublishedProjectPropertyNames.protectedActualsSynch = 'ProtectedActualsSynch';
PS.PublishedProjectPropertyNames.showEstimatedDurations = 'ShowEstimatedDurations';
PS.PublishedProjectPropertyNames.startDate = 'StartDate';
PS.PublishedProjectPropertyNames.statusDate = 'StatusDate';
PS.PublishedProjectPropertyNames.trackingMode = 'TrackingMode';
PS.PublishedProjectPropertyNames.utilizationDate = 'UtilizationDate';
PS.PublishedProjectPropertyNames.utilizationType = 'UtilizationType';
PS.PublishedProjectPropertyNames.weekStartDay = 'WeekStartDay';
PS.PublishedProjectPropertyNames.winprojVersion = 'WinprojVersion';
PS.PublishedProjectObjectPropertyNames.assignments = 'Assignments';
PS.PublishedProjectObjectPropertyNames.calendar = 'Calendar';
PS.PublishedProjectObjectPropertyNames.draft = 'Draft';
PS.PublishedProjectObjectPropertyNames.includeCustomFields = 'IncludeCustomFields';
PS.PublishedProjectObjectPropertyNames.owner = 'Owner';
PS.PublishedProjectObjectPropertyNames.projectResources = 'ProjectResources';
PS.PublishedProjectObjectPropertyNames.taskLinks = 'TaskLinks';
PS.PublishedProjectObjectPropertyNames.tasks = 'Tasks';
PS.PublishedProjectResourcePropertyNames.canLevel = 'CanLevel';
PS.PublishedProjectResourcePropertyNames.code = 'Code';
PS.PublishedProjectResourcePropertyNames.costAccrual = 'CostAccrual';
PS.PublishedProjectResourcePropertyNames.costCenter = 'CostCenter';
PS.PublishedProjectResourcePropertyNames.costPerUse = 'CostPerUse';
PS.PublishedProjectResourcePropertyNames.defaultBookingType = 'DefaultBookingType';
PS.PublishedProjectResourcePropertyNames.email = 'Email';
PS.PublishedProjectResourcePropertyNames.group = 'Group';
PS.PublishedProjectResourcePropertyNames.initials = 'Initials';
PS.PublishedProjectResourcePropertyNames.materialLabel = 'MaterialLabel';
PS.PublishedProjectResourcePropertyNames.maximumCapacity = 'MaximumCapacity';
PS.PublishedProjectResourcePropertyNames.name = 'Name';
PS.PublishedProjectResourcePropertyNames.overtimeRate = 'OvertimeRate';
PS.PublishedProjectResourcePropertyNames.overtimeRateUnits = 'OvertimeRateUnits';
PS.PublishedProjectResourcePropertyNames.phonetics = 'Phonetics';
PS.PublishedProjectResourcePropertyNames.standardRate = 'StandardRate';
PS.PublishedProjectResourcePropertyNames.standardRateUnits = 'StandardRateUnits';
PS.PublishedProjectResourceObjectPropertyNames.assignments = 'Assignments';
PS.PublishedProjectResourceObjectPropertyNames.defaultAssignmentOwner = 'DefaultAssignmentOwner';
PS.PublishedTaskPropertyNames.actualCost = 'ActualCost';
PS.PublishedTaskPropertyNames.actualFinish = 'ActualFinish';
PS.PublishedTaskPropertyNames.actualStart = 'ActualStart';
PS.PublishedTaskPropertyNames.actualWork = 'ActualWork';
PS.PublishedTaskPropertyNames.actualWorkMilliseconds = 'ActualWorkMilliseconds';
PS.PublishedTaskPropertyNames.budgetWork = 'BudgetWork';
PS.PublishedTaskPropertyNames.budgetWorkMilliseconds = 'BudgetWorkMilliseconds';
PS.PublishedTaskPropertyNames.completion = 'Completion';
PS.PublishedTaskPropertyNames.constraintStartEnd = 'ConstraintStartEnd';
PS.PublishedTaskPropertyNames.constraintType = 'ConstraintType';
PS.PublishedTaskPropertyNames.cost = 'Cost';
PS.PublishedTaskPropertyNames.deadline = 'Deadline';
PS.PublishedTaskPropertyNames.duration = 'Duration';
PS.PublishedTaskPropertyNames.durationMilliseconds = 'DurationMilliseconds';
PS.PublishedTaskPropertyNames.finish = 'Finish';
PS.PublishedTaskPropertyNames.finishText = 'FinishText';
PS.PublishedTaskPropertyNames.fixedCost = 'FixedCost';
PS.PublishedTaskPropertyNames.isActive = 'IsActive';
PS.PublishedTaskPropertyNames.isLockedByManager = 'IsLockedByManager';
PS.PublishedTaskPropertyNames.isManual = 'IsManual';
PS.PublishedTaskPropertyNames.isMarked = 'IsMarked';
PS.PublishedTaskPropertyNames.isMilestone = 'IsMilestone';
PS.PublishedTaskPropertyNames.levelingAdjustsAssignments = 'LevelingAdjustsAssignments';
PS.PublishedTaskPropertyNames.levelingCanSplit = 'LevelingCanSplit';
PS.PublishedTaskPropertyNames.name = 'Name';
PS.PublishedTaskPropertyNames.outlineLevel = 'OutlineLevel';
PS.PublishedTaskPropertyNames.percentComplete = 'PercentComplete';
PS.PublishedTaskPropertyNames.percentPhysicalWorkComplete = 'PercentPhysicalWorkComplete';
PS.PublishedTaskPropertyNames.priority = 'Priority';
PS.PublishedTaskPropertyNames.remainingDuration = 'RemainingDuration';
PS.PublishedTaskPropertyNames.remainingDurationMilliseconds = 'RemainingDurationMilliseconds';
PS.PublishedTaskPropertyNames.start = 'Start';
PS.PublishedTaskPropertyNames.startText = 'StartText';
PS.PublishedTaskPropertyNames.usePercentPhysicalWorkComplete = 'UsePercentPhysicalWorkComplete';
PS.PublishedTaskPropertyNames.work = 'Work';
PS.PublishedTaskPropertyNames.workMilliseconds = 'WorkMilliseconds';
PS.PublishedTaskObjectPropertyNames.assignments = 'Assignments';
PS.PublishedTaskObjectPropertyNames.calendar = 'Calendar';
PS.PublishedTaskObjectPropertyNames.parent = 'Parent';
PS.PublishedTaskObjectPropertyNames.predecessors = 'Predecessors';
PS.PublishedTaskObjectPropertyNames.successors = 'Successors';
PS.PublishedTaskLinkPropertyNames.dependencyType = 'DependencyType';
PS.PublishedTaskLinkObjectPropertyNames.end = 'End';
PS.PublishedTaskLinkObjectPropertyNames.start = 'Start';
PS.QueueJobPropertyNames.id = 'Id';
PS.QueueJobPropertyNames.jobState = 'JobState';
PS.QueueJobPropertyNames.messageType = 'MessageType';
PS.QueueJobPropertyNames.percentComplete = 'PercentComplete';
PS.QueueJobPropertyNames.waitMilliseconds = 'WaitMilliseconds';
PS.QueueJobObjectPropertyNames.project = 'Project';
PS.QueueJobObjectPropertyNames.submitter = 'Submitter';
PS.ResourcePlanPropertyNames.finish = 'Finish';
PS.ResourcePlanPropertyNames.id = 'Id';
PS.ResourcePlanPropertyNames.start = 'Start';
PS.ResourcePlanPropertyNames.utilizationDate = 'UtilizationDate';
PS.ResourcePlanPropertyNames.utilizationType = 'UtilizationType';
PS.ResourcePlanObjectPropertyNames.assignments = 'Assignments';
PS.ServiceStatusPropertyNames.isDelegate = 'IsDelegate';
PS.ServiceStatusPropertyNames.isReadOnly = 'IsReadOnly';
PS.StagePropertyNames.behavior = 'Behavior';
PS.StagePropertyNames.checkInRequired = 'CheckInRequired';
PS.StagePropertyNames.description = 'Description';
PS.StagePropertyNames.id = 'Id';
PS.StagePropertyNames.name = 'Name';
PS.StagePropertyNames.submitDescription = 'SubmitDescription';
PS.StageObjectPropertyNames.customFields = 'CustomFields';
PS.StageObjectPropertyNames.phase = 'Phase';
PS.StageObjectPropertyNames.projectDetailPages = 'ProjectDetailPages';
PS.StageObjectPropertyNames.workflowStatusPage = 'WorkflowStatusPage';
PS.StageCustomFieldPropertyNames.id = 'Id';
PS.StageCustomFieldPropertyNames.name = 'Name';
PS.StageCustomFieldPropertyNames.readOnly = 'ReadOnly';
PS.StageCustomFieldPropertyNames.required = 'Required';
PS.StageCustomFieldObjectPropertyNames.stage = 'Stage';
PS.StageDetailPagePropertyNames.description = 'Description';
PS.StageDetailPagePropertyNames.id = 'Id';
PS.StageDetailPagePropertyNames.position = 'Position';
PS.StageDetailPagePropertyNames.requiresAttention = 'RequiresAttention';
PS.StageDetailPageObjectPropertyNames.page = 'Page';
PS.StageDetailPageObjectPropertyNames.stage = 'Stage';
PS.StatusAssignmentPropertyNames.actualFinish = 'ActualFinish';
PS.StatusAssignmentPropertyNames.actualOvertime = 'ActualOvertime';
PS.StatusAssignmentPropertyNames.actualOvertimeMilliseconds = 'ActualOvertimeMilliseconds';
PS.StatusAssignmentPropertyNames.actualStart = 'ActualStart';
PS.StatusAssignmentPropertyNames.actualWork = 'ActualWork';
PS.StatusAssignmentPropertyNames.actualWorkMilliseconds = 'ActualWorkMilliseconds';
PS.StatusAssignmentPropertyNames.approvalStatus = 'ApprovalStatus';
PS.StatusAssignmentPropertyNames.comments = 'Comments';
PS.StatusAssignmentPropertyNames.finish = 'Finish';
PS.StatusAssignmentPropertyNames.id = 'Id';
PS.StatusAssignmentPropertyNames.isConfirmed = 'IsConfirmed';
PS.StatusAssignmentPropertyNames.modified = 'Modified';
PS.StatusAssignmentPropertyNames.name = 'Name';
PS.StatusAssignmentPropertyNames.overtime = 'Overtime';
PS.StatusAssignmentPropertyNames.overtimeMilliseconds = 'OvertimeMilliseconds';
PS.StatusAssignmentPropertyNames.percentComplete = 'PercentComplete';
PS.StatusAssignmentPropertyNames.regularWork = 'RegularWork';
PS.StatusAssignmentPropertyNames.regularWorkMilliseconds = 'RegularWorkMilliseconds';
PS.StatusAssignmentPropertyNames.remainingOvertime = 'RemainingOvertime';
PS.StatusAssignmentPropertyNames.remainingOvertimeMilliseconds = 'RemainingOvertimeMilliseconds';
PS.StatusAssignmentPropertyNames.remainingWork = 'RemainingWork';
PS.StatusAssignmentPropertyNames.remainingWorkMilliseconds = 'RemainingWorkMilliseconds';
PS.StatusAssignmentPropertyNames.start = 'Start';
PS.StatusAssignmentPropertyNames.work = 'Work';
PS.StatusAssignmentPropertyNames.workMilliseconds = 'WorkMilliseconds';
PS.StatusAssignmentObjectPropertyNames.customFields = 'CustomFields';
PS.StatusAssignmentObjectPropertyNames.history = 'History';
PS.StatusAssignmentObjectPropertyNames.project = 'Project';
PS.StatusAssignmentObjectPropertyNames.resource = 'Resource';
PS.StatusAssignmentObjectPropertyNames.task = 'Task';
PS.StatusAssignmentHistoryLinePropertyNames.comment = 'Comment';
PS.StatusAssignmentHistoryLinePropertyNames.decision = 'Decision';
PS.StatusAssignmentHistoryLinePropertyNames.id = 'Id';
PS.StatusAssignmentHistoryLinePropertyNames.submitted = 'Submitted';
PS.StatusAssignmentHistoryLinePropertyNames.updateType = 'UpdateType';
PS.StatusAssignmentHistoryLineObjectPropertyNames.author = 'Author';
PS.StatusTaskPropertyNames.actualWork = 'ActualWork';
PS.StatusTaskPropertyNames.actualWorkMilliseconds = 'ActualWorkMilliseconds';
PS.StatusTaskPropertyNames.deadline = 'Deadline';
PS.StatusTaskPropertyNames.duration = 'Duration';
PS.StatusTaskPropertyNames.durationMilliseconds = 'DurationMilliseconds';
PS.StatusTaskPropertyNames.finish = 'Finish';
PS.StatusTaskPropertyNames.id = 'Id';
PS.StatusTaskPropertyNames.name = 'Name';
PS.StatusTaskPropertyNames.overtime = 'Overtime';
PS.StatusTaskPropertyNames.overtimeMilliseconds = 'OvertimeMilliseconds';
PS.StatusTaskPropertyNames.percentComplete = 'PercentComplete';
PS.StatusTaskPropertyNames.percentWorkComplete = 'PercentWorkComplete';
PS.StatusTaskPropertyNames.physicalPercentComplete = 'PhysicalPercentComplete';
PS.StatusTaskPropertyNames.projectTaskId = 'ProjectTaskId';
PS.StatusTaskPropertyNames.regularWork = 'RegularWork';
PS.StatusTaskPropertyNames.regularWorkMilliseconds = 'RegularWorkMilliseconds';
PS.StatusTaskPropertyNames.remainingDuration = 'RemainingDuration';
PS.StatusTaskPropertyNames.remainingDurationMilliseconds = 'RemainingDurationMilliseconds';
PS.StatusTaskPropertyNames.remainingOvertime = 'RemainingOvertime';
PS.StatusTaskPropertyNames.remainingOvertimeMilliseconds = 'RemainingOvertimeMilliseconds';
PS.StatusTaskPropertyNames.remainingWork = 'RemainingWork';
PS.StatusTaskPropertyNames.remainingWorkMilliseconds = 'RemainingWorkMilliseconds';
PS.StatusTaskPropertyNames.resume = 'Resume';
PS.StatusTaskPropertyNames.start = 'Start';
PS.StatusTaskPropertyNames.work = 'Work';
PS.StatusTaskPropertyNames.workMilliseconds = 'WorkMilliseconds';
PS.TaskPropertyNames.actualCostWorkPerformed = 'ActualCostWorkPerformed';
PS.TaskPropertyNames.actualDuration = 'ActualDuration';
PS.TaskPropertyNames.actualDurationMilliseconds = 'ActualDurationMilliseconds';
PS.TaskPropertyNames.actualOvertimeCost = 'ActualOvertimeCost';
PS.TaskPropertyNames.actualOvertimeWork = 'ActualOvertimeWork';
PS.TaskPropertyNames.actualOvertimeWorkMilliseconds = 'ActualOvertimeWorkMilliseconds';
PS.TaskPropertyNames.baselineCost = 'BaselineCost';
PS.TaskPropertyNames.baselineDuration = 'BaselineDuration';
PS.TaskPropertyNames.baselineDurationMilliseconds = 'BaselineDurationMilliseconds';
PS.TaskPropertyNames.baselineFinish = 'BaselineFinish';
PS.TaskPropertyNames.baselineStart = 'BaselineStart';
PS.TaskPropertyNames.baselineWork = 'BaselineWork';
PS.TaskPropertyNames.baselineWorkMilliseconds = 'BaselineWorkMilliseconds';
PS.TaskPropertyNames.budgetCost = 'BudgetCost';
PS.TaskPropertyNames.budgetedCostWorkPerformed = 'BudgetedCostWorkPerformed';
PS.TaskPropertyNames.budgetedCostWorkScheduled = 'BudgetedCostWorkScheduled';
PS.TaskPropertyNames.contact = 'Contact';
PS.TaskPropertyNames.costPerformanceIndex = 'CostPerformanceIndex';
PS.TaskPropertyNames.costVariance = 'CostVariance';
PS.TaskPropertyNames.costVarianceAtCompletion = 'CostVarianceAtCompletion';
PS.TaskPropertyNames.costVariancePercentage = 'CostVariancePercentage';
PS.TaskPropertyNames.created = 'Created';
PS.TaskPropertyNames.currentCostVariance = 'CurrentCostVariance';
PS.TaskPropertyNames.durationVariance = 'DurationVariance';
PS.TaskPropertyNames.durationVarianceMilliseconds = 'DurationVarianceMilliseconds';
PS.TaskPropertyNames.earliestFinish = 'EarliestFinish';
PS.TaskPropertyNames.earliestStart = 'EarliestStart';
PS.TaskPropertyNames.estimateAtCompletion = 'EstimateAtCompletion';
PS.TaskPropertyNames.finishSlack = 'FinishSlack';
PS.TaskPropertyNames.finishSlackMilliseconds = 'FinishSlackMilliseconds';
PS.TaskPropertyNames.finishVariance = 'FinishVariance';
PS.TaskPropertyNames.finishVarianceMilliseconds = 'FinishVarianceMilliseconds';
PS.TaskPropertyNames.fixedCostAccrual = 'FixedCostAccrual';
PS.TaskPropertyNames.freeSlack = 'FreeSlack';
PS.TaskPropertyNames.freeSlackMilliseconds = 'FreeSlackMilliseconds';
PS.TaskPropertyNames.id = 'Id';
PS.TaskPropertyNames.ignoreResourceCalendar = 'IgnoreResourceCalendar';
PS.TaskPropertyNames.isCritical = 'IsCritical';
PS.TaskPropertyNames.isEffortDriven = 'IsEffortDriven';
PS.TaskPropertyNames.isExternalTask = 'IsExternalTask';
PS.TaskPropertyNames.isOverAllocated = 'IsOverAllocated';
PS.TaskPropertyNames.isRecurring = 'IsRecurring';
PS.TaskPropertyNames.isRecurringSummary = 'IsRecurringSummary';
PS.TaskPropertyNames.isRolledUp = 'IsRolledUp';
PS.TaskPropertyNames.isSubProject = 'IsSubProject';
PS.TaskPropertyNames.isSubProjectReadOnly = 'IsSubProjectReadOnly';
PS.TaskPropertyNames.isSubProjectScheduledFromFinish = 'IsSubProjectScheduledFromFinish';
PS.TaskPropertyNames.isSummary = 'IsSummary';
PS.TaskPropertyNames.latestFinish = 'LatestFinish';
PS.TaskPropertyNames.latestStart = 'LatestStart';
PS.TaskPropertyNames.levelingDelay = 'LevelingDelay';
PS.TaskPropertyNames.levelingDelayMilliseconds = 'LevelingDelayMilliseconds';
PS.TaskPropertyNames.modified = 'Modified';
PS.TaskPropertyNames.notes = 'Notes';
PS.TaskPropertyNames.outlinePosition = 'OutlinePosition';
PS.TaskPropertyNames.overtimeCost = 'OvertimeCost';
PS.TaskPropertyNames.overtimeWork = 'OvertimeWork';
PS.TaskPropertyNames.overtimeWorkMilliseconds = 'OvertimeWorkMilliseconds';
PS.TaskPropertyNames.percentWorkComplete = 'PercentWorkComplete';
PS.TaskPropertyNames.preLevelingFinish = 'PreLevelingFinish';
PS.TaskPropertyNames.preLevelingStart = 'PreLevelingStart';
PS.TaskPropertyNames.regularWork = 'RegularWork';
PS.TaskPropertyNames.regularWorkMilliseconds = 'RegularWorkMilliseconds';
PS.TaskPropertyNames.remainingCost = 'RemainingCost';
PS.TaskPropertyNames.remainingOvertimeCost = 'RemainingOvertimeCost';
PS.TaskPropertyNames.remainingOvertimeWork = 'RemainingOvertimeWork';
PS.TaskPropertyNames.remainingOvertimeWorkMilliseconds = 'RemainingOvertimeWorkMilliseconds';
PS.TaskPropertyNames.remainingWork = 'RemainingWork';
PS.TaskPropertyNames.remainingWorkMilliseconds = 'RemainingWorkMilliseconds';
PS.TaskPropertyNames.resume = 'Resume';
PS.TaskPropertyNames.scheduleCostVariance = 'ScheduleCostVariance';
PS.TaskPropertyNames.scheduledDuration = 'ScheduledDuration';
PS.TaskPropertyNames.scheduledDurationMilliseconds = 'ScheduledDurationMilliseconds';
PS.TaskPropertyNames.scheduledFinish = 'ScheduledFinish';
PS.TaskPropertyNames.scheduledStart = 'ScheduledStart';
PS.TaskPropertyNames.schedulePerformanceIndex = 'SchedulePerformanceIndex';
PS.TaskPropertyNames.scheduleVariancePercentage = 'ScheduleVariancePercentage';
PS.TaskPropertyNames.startSlack = 'StartSlack';
PS.TaskPropertyNames.startSlackMilliseconds = 'StartSlackMilliseconds';
PS.TaskPropertyNames.startVariance = 'StartVariance';
PS.TaskPropertyNames.startVarianceMilliseconds = 'StartVarianceMilliseconds';
PS.TaskPropertyNames.stop = 'Stop';
PS.TaskPropertyNames.taskType = 'TaskType';
PS.TaskPropertyNames.toCompletePerformanceIndex = 'ToCompletePerformanceIndex';
PS.TaskPropertyNames.totalSlack = 'TotalSlack';
PS.TaskPropertyNames.totalSlackMilliseconds = 'TotalSlackMilliseconds';
PS.TaskPropertyNames.workBreakdownStructure = 'WorkBreakdownStructure';
PS.TaskPropertyNames.workVariance = 'WorkVariance';
PS.TaskPropertyNames.workVarianceMilliseconds = 'WorkVarianceMilliseconds';
PS.TaskObjectPropertyNames.customFields = 'CustomFields';
PS.TaskObjectPropertyNames.subProject = 'SubProject';
PS.TaskLinkPropertyNames.id = 'Id';
PS.TimePhasePropertyNames.end = 'End';
PS.TimePhasePropertyNames.start = 'Start';
PS.TimePhaseObjectPropertyNames.assignments = 'Assignments';
PS.TimeSheetPropertyNames.comments = 'Comments';
PS.TimeSheetPropertyNames.entryMode = 'EntryMode';
PS.TimeSheetPropertyNames.id = 'Id';
PS.TimeSheetPropertyNames.isControlledByOwner = 'IsControlledByOwner';
PS.TimeSheetPropertyNames.isProcessed = 'IsProcessed';
PS.TimeSheetPropertyNames.name = 'Name';
PS.TimeSheetPropertyNames.status = 'Status';
PS.TimeSheetPropertyNames.totalActualWork = 'TotalActualWork';
PS.TimeSheetPropertyNames.totalActualWorkMilliseconds = 'TotalActualWorkMilliseconds';
PS.TimeSheetPropertyNames.totalNonBillableOvertimeWork = 'TotalNonBillableOvertimeWork';
PS.TimeSheetPropertyNames.totalNonBillableOvertimeWorkMilliseconds = 'TotalNonBillableOvertimeWorkMilliseconds';
PS.TimeSheetPropertyNames.totalNonBillableWork = 'TotalNonBillableWork';
PS.TimeSheetPropertyNames.totalNonBillableWorkMilliseconds = 'TotalNonBillableWorkMilliseconds';
PS.TimeSheetPropertyNames.totalOvertimeWork = 'TotalOvertimeWork';
PS.TimeSheetPropertyNames.totalOvertimeWorkMilliseconds = 'TotalOvertimeWorkMilliseconds';
PS.TimeSheetPropertyNames.totalWork = 'TotalWork';
PS.TimeSheetPropertyNames.totalWorkMilliseconds = 'TotalWorkMilliseconds';
PS.TimeSheetPropertyNames.weekStartsOn = 'WeekStartsOn';
PS.TimeSheetObjectPropertyNames.creator = 'Creator';
PS.TimeSheetObjectPropertyNames.lines = 'Lines';
PS.TimeSheetObjectPropertyNames.manager = 'Manager';
PS.TimeSheetObjectPropertyNames.period = 'Period';
PS.TimeSheetLinePropertyNames.comment = 'Comment';
PS.TimeSheetLinePropertyNames.id = 'Id';
PS.TimeSheetLinePropertyNames.lineClass = 'LineClass';
PS.TimeSheetLinePropertyNames.projectName = 'ProjectName';
PS.TimeSheetLinePropertyNames.status = 'Status';
PS.TimeSheetLinePropertyNames.taskName = 'TaskName';
PS.TimeSheetLinePropertyNames.totalWork = 'TotalWork';
PS.TimeSheetLinePropertyNames.totalWorkMilliseconds = 'TotalWorkMilliseconds';
PS.TimeSheetLinePropertyNames.validationType = 'ValidationType';
PS.TimeSheetLineObjectPropertyNames.assignment = 'Assignment';
PS.TimeSheetLineObjectPropertyNames.timeSheet = 'TimeSheet';
PS.TimeSheetLineObjectPropertyNames.work = 'Work';
PS.TimeSheetPeriodPropertyNames.end = 'End';
PS.TimeSheetPeriodPropertyNames.id = 'Id';
PS.TimeSheetPeriodPropertyNames.name = 'Name';
PS.TimeSheetPeriodPropertyNames.start = 'Start';
PS.TimeSheetPeriodObjectPropertyNames.timeSheet = 'TimeSheet';
PS.TimeSheetWorkPropertyNames.actualWork = 'ActualWork';
PS.TimeSheetWorkPropertyNames.actualWorkMilliseconds = 'ActualWorkMilliseconds';
PS.TimeSheetWorkPropertyNames.comment = 'Comment';
PS.TimeSheetWorkPropertyNames.end = 'End';
PS.TimeSheetWorkPropertyNames.id = 'Id';
PS.TimeSheetWorkPropertyNames.nonBillableOvertimeWork = 'NonBillableOvertimeWork';
PS.TimeSheetWorkPropertyNames.nonBillableOvertimeWorkMilliseconds = 'NonBillableOvertimeWorkMilliseconds';
PS.TimeSheetWorkPropertyNames.nonBillableWork = 'NonBillableWork';
PS.TimeSheetWorkPropertyNames.nonBillableWorkMilliseconds = 'NonBillableWorkMilliseconds';
PS.TimeSheetWorkPropertyNames.overtimeWork = 'OvertimeWork';
PS.TimeSheetWorkPropertyNames.overtimeWorkMilliseconds = 'OvertimeWorkMilliseconds';
PS.TimeSheetWorkPropertyNames.plannedWork = 'PlannedWork';
PS.TimeSheetWorkPropertyNames.plannedWorkMilliseconds = 'PlannedWorkMilliseconds';
PS.TimeSheetWorkPropertyNames.start = 'Start';
PS.WorkflowDesignerObjectPropertyNames.fields = 'Fields';
PS.WorkflowDesignerFieldPropertyNames.displayName = 'DisplayName';
PS.WorkflowDesignerFieldPropertyNames.id = 'Id';
PS.WorkflowDesignerFieldPropertyNames.isLookupField = 'IsLookupField';
PS.WorkflowDesignerFieldPropertyNames.isReadOnly = 'IsReadOnly';
PS.WorkflowDesignerFieldPropertyNames.spFieldType = 'SPFieldType';
PS.WorkflowDesignerFieldObjectPropertyNames.lookupEntries = 'LookupEntries';

if (typeof(Sys) != "undefined" && Sys && Sys.Application) {
   Sys.Application.notifyScriptLoaded();
}
ExecuteOrDelayUntilScriptLoaded(function () {ULSyTi:;
   NotifyScriptLoadedAndExecuteWaitingJobs("ps.js");
}, "sp.js");
