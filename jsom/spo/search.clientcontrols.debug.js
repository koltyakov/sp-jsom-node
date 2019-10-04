//***********IMPORTANT!!!! READ THIS!!!!!!***********************************
//Don't add script in this file! Only function alias is allowed in this file!
//***************************************************************************


Type.registerNamespace('Srch');

Srch.EventType = function() {}
Srch.EventType.prototype = {
    none: 0, 
    queryReady: 1, 
    queryIssuing: 2, 
    batchQueryIssuing: 3, 
    resultReady: 4, 
    batchResultReady: 5, 
    queryStateChanged: 6, 
    resultRendered: 7, 
    preLoad: 8, 
    load: 9, 
    postLoad: 10
}
Srch.EventType.registerEnum('Srch.EventType', false);


Srch.MessageLevel = function() {}
Srch.MessageLevel.prototype = {
    information: 0, 
    warning: 1, 
    error: 2
}
Srch.MessageLevel.registerEnum('Srch.MessageLevel', false);


Srch.UserActionType = function() {}
Srch.UserActionType.prototype = {
    search: 0, 
    pageNext: 1, 
    pagePrev: 2, 
    refine: 3, 
    sort: 4, 
    filterLanguage: 5
}
Srch.UserActionType.registerEnum('Srch.UserActionType', false);


Srch.DateTimeKind = function() {}
Srch.DateTimeKind.prototype = {
    unspecified: 0, 
    utc: 1, 
    local: 2
}
Srch.DateTimeKind.registerEnum('Srch.DateTimeKind', false);


Srch.ClientControl = function Srch_ClientControl(elem) {
    this.$$d_serverTemplateScriptsCallback = Function.createDelegate(this, this.serverTemplateScriptsCallback);
    this.$$d_clickHandler = Function.createDelegate(this, this.clickHandler);
    this.$$d_scriptApplication_PostLoad = Function.createDelegate(this, this.scriptApplication_PostLoad);
    this.$$d_scriptApplication_Load = Function.createDelegate(this, this.scriptApplication_Load);
    this.$$d_scriptApplication_PreLoad = Function.createDelegate(this, this.scriptApplication_PreLoad);
    this.listenedEvents = [];
    this.serverTemplateScriptsToLoad = [];
    this.$c_2 = [];
    this.$1L_2 = [];
    Srch.ClientControl.initializeBase(this, [ elem ]);
}
Srch.ClientControl.get_isLoadingSearchCenterUrl = function Srch_ClientControl$get_isLoadingSearchCenterUrl() {
    return Srch.ClientControl.$q;
}
Srch.ClientControl.set_isLoadingSearchCenterUrl = function Srch_ClientControl$set_isLoadingSearchCenterUrl(value) {
    Srch.ClientControl.$q = value;
    return value;
}
Srch.ClientControl.toggleMessageDetails = function Srch_ClientControl$toggleMessageDetails(messageContainer) {
    var $v_0 = messageContainer.children;
    if (Srch.U.n($v_0)) {
        return false;
    }
    for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
        var $v_2 = $v_0[$v_1];
        if ($v_2.style.display === 'none') {
            $v_2.style.display = '';
        }
        else {
            $v_2.style.display = 'none';
        }
    }
    return false;
}
Srch.ClientControl.$3U = function Srch_ClientControl$$3U($p0) {
    return $p0.showForViewerUsers;
}
Srch.ClientControl.prototype = {
    alternateRenderer: null,
    alternateRenderContext: null,
    $1H_2: null,
    $17_2: null,
    $1G_2: null,
    loaded: false,
    
    get_nextUniqueId: function Srch_ClientControl$get_nextUniqueId() {
        this.$3W_2++;
        return this.get_id() + this.$3W_2;
    },
    
    $3W_2: 0,
    
    get_renderTemplateId: function Srch_ClientControl$get_renderTemplateId() {
        return this.$24_2;
    },
    
    set_renderTemplateId: function Srch_ClientControl$set_renderTemplateId(value) {
        this.$24_2 = value;
        return value;
    },
    
    $24_2: '',
    
    get_delayLoadTemplateScripts: function Srch_ClientControl$get_delayLoadTemplateScripts() {
        return this.$10_2;
    },
    
    set_delayLoadTemplateScripts: function Srch_ClientControl$set_delayLoadTemplateScripts(value) {
        this.$10_2 = value;
        return value;
    },
    
    $10_2: true,
    
    get_states: function Srch_ClientControl$get_states() {
        if (!this.$2C_2) {
            this.$2C_2 = {};
        }
        return this.$2C_2;
    },
    
    set_states: function Srch_ClientControl$set_states(value) {
        this.$2C_2 = value;
        return value;
    },
    
    $2C_2: null,
    
    get_messages: function Srch_ClientControl$get_messages() {
        return this.$1A_2;
    },
    
    set_messages: function Srch_ClientControl$set_messages(value) {
        if (!Srch.U.n(value) && value.length > 0) {
            this.$1A_2 = [];
            for (var $v_0 = 0; $v_0 < value.length; $v_0++) {
                var $v_1 = value[$v_0];
                if (!Srch.U.n($v_1)) {
                    Srch.U.appendArray(this.$1A_2, Srch.ControlMessage.getIfControlMessage($v_1));
                }
            }
        }
        else {
            this.$1A_2 = value;
        }
        return value;
    },
    
    $1A_2: null,
    
    get_showDataErrors: function Srch_ClientControl$get_showDataErrors() {
        return this.$31_2;
    },
    
    set_showDataErrors: function Srch_ClientControl$set_showDataErrors(value) {
        this.$31_2 = value;
        return value;
    },
    
    $31_2: false,
    
    get_alternateErrorMessage: function Srch_ClientControl$get_alternateErrorMessage() {
        return this.$t_2;
    },
    
    set_alternateErrorMessage: function Srch_ClientControl$set_alternateErrorMessage(value) {
        this.$t_2 = value;
        return value;
    },
    
    $t_2: null,
    
    get_isInitialLoad: function Srch_ClientControl$get_isInitialLoad() {
        return !this.loaded;
    },
    
    $3y_2: false,
    $2J_2: null,
    
    get_resultsPageAddress: function Srch_ClientControl$get_resultsPageAddress() {
        return this.$2J_2;
    },
    
    set_resultsPageAddress: function Srch_ClientControl$set_resultsPageAddress(value) {
        this.$2J_2 = value;
        return value;
    },
    
    initialize: function Srch_ClientControl$initialize() {
        this.$1_2('Initialize', '');
        Srch.ScriptApplicationManager.get_current().registerClientControl(this);
        this.$1H_2 = this.$$d_scriptApplication_PreLoad;
        Srch.ScriptApplicationManager.get_current().add_preLoad(this.$1H_2);
        this.$17_2 = this.$$d_scriptApplication_Load;
        Srch.ScriptApplicationManager.get_current().add_load(this.$17_2);
        this.$1G_2 = this.$$d_scriptApplication_PostLoad;
        Srch.ScriptApplicationManager.get_current().add_postLoad(this.$1G_2);
        if (!Srch.U.n(this.get_element())) {
            $addHandler(this.get_element(), 'click', this.$$d_clickHandler);
        }
        if (!Srch.ClientControl.$q) {
            Srch.ClientControl.$q = true;
            Srch.U.getSearchCenterUrl(true);
        }
        if (this.$3y_2) {
            this.$5R_2();
        }
        Sys.Component.prototype.initialize.call(this);
    },
    
    $5R_2: function Srch_ClientControl$$5R_2() {
        var $v_0 = SP.PageContextInfo.get_siteServerRelativeUrl();
        var $v_1 = '/_api/search/resultspageaddress';
        var $v_2 = ($v_0 && $v_0 !== '/') ? $v_0 + $v_1 : $v_1;
        var $v_3 = new XMLHttpRequest();
        $v_3.open('GET', $v_2, true);
        $v_3.setRequestHeader('Accept', 'application/json;odata=verbose');
        var $$t_7 = this;
        $v_3.onreadystatechange = function() {
            if ($v_3.readyState === 4) {
                if ($v_3.status === 200) {
                    var $v_4 = Sys.Serialization.JavaScriptSerializer.deserialize($v_3.responseText);
                    var $v_5 = $v_4['d'];
                    if (Srch.U.n($v_5)) {
                        Srch.U.trace(null, 'GetResultsPageAddress', 'No data recieved from _api/search/resultspageaddress');
                    }
                    var $v_6 = $v_5['resultspageaddress'];
                    if (!Srch.U.w($v_6)) {
                        $$t_7.$2J_2 = $v_6;
                    }
                }
            }
        };
        $v_3.send(null);
    },
    
    dispose: function Srch_ClientControl$dispose() {
        var $v_0 = new SP.CScope('ClientControl.Dispose');
        $v_0.start();
        this.$1_2('Dispose', '');
        try {
            if (!Srch.U.n(this.get_element())) {
                $clearHandlers(this.get_element());
            }
            if (!Srch.U.n(this.listenedEvents)) {
                for (var $v_1 = 0; $v_1 < this.listenedEvents.length; $v_1++) {
                    var $v_2 = this.listenedEvents[$v_1];
                    if (!Srch.U.n($v_2)) {
                        $v_2.dispose();
                    }
                }
                this.listenedEvents = null;
            }
            if (!Srch.U.n(this.$1H_2)) {
                Srch.ScriptApplicationManager.get_current().remove_preLoad(this.$1H_2);
                this.$1H_2 = null;
            }
            if (!Srch.U.n(this.$17_2)) {
                Srch.ScriptApplicationManager.get_current().remove_load(this.$17_2);
                this.$17_2 = null;
            }
            if (!Srch.U.n(this.$1G_2)) {
                Srch.ScriptApplicationManager.get_current().remove_postLoad(this.$1G_2);
                this.$1G_2 = null;
            }
        }
        finally {
            Sys.Component.prototype.dispose.call(this);
        }
        $v_0.stop();
    },
    
    renderControl: function Srch_ClientControl$renderControl(listData, dp) {
        this.$1_2('RenderControl', '');
        var $v_0 = new SP.CScope('ClientControl.RenderControl');
        $v_0.start();
        Srch.U.ensureNotNullOrUndefined(this.get_element(), this, 'RenderControl', 'this.Element');
        if (Srch.U.n(this.alternateRenderContext)) {
            this.alternateRenderContext = {};
        }
        var $v_1 = {};
        if (!Srch.U.n(this.alternateRenderer)) {
            $v_1 = this.alternateRenderContext;
            this.alternateRenderContext['ListData'] = listData;
            this.alternateRenderContext['ClientControl'] = this;
            this.alternateRenderContext['DataProvider'] = dp;
            this.alternateRenderContext['ScriptApplicationManager'] = Srch.ScriptApplicationManager.get_current();
            this.invokeAlternateRender(this.alternateRenderer, this.get_element(), this.alternateRenderContext);
        }
        else {
            $v_1['ResolveTemplate'] = Srch.U.resolveRenderTemplate;
            $v_1['ListData'] = listData;
            $v_1['ClientControl'] = this;
            $v_1['DataProvider'] = dp;
            $v_1['ScriptApplicationManager'] = Srch.ScriptApplicationManager.get_current();
            this.invokeClientRenderer(this.get_element(), $v_1);
        }
        this.processDataProviderErrors(dp);
        this.processRenderingErrorMessages($v_1);
        this.displayControlMessages();
        $v_0.stop();
    },
    
    processDataProviderErrors: function Srch_ClientControl$processDataProviderErrors(dataProviderToProcess) {
        if (!Srch.U.n(dataProviderToProcess) && !Srch.U.n(dataProviderToProcess.get_messages()) && dataProviderToProcess.get_messages().length > 0) {
            this.processDataErrorMessages(dataProviderToProcess.get_messages());
        }
    },
    
    scriptApplication_PreLoad: function Srch_ClientControl$scriptApplication_PreLoad(sender, e) {
        this.$1_2('ScriptApplication_PreLoad', 'ClientControl');
        if (this.$10_2) {
            Srch.U.appendScriptsToLoad(this.serverTemplateScriptsToLoad, this.$24_2);
        }
    },
    
    scriptApplication_Load: function Srch_ClientControl$scriptApplication_Load(sender, e) {
        this.$1_2('ScriptApplication_Load', 'ClientControl');
    },
    
    scriptApplication_PostLoad: function Srch_ClientControl$scriptApplication_PostLoad(sender, e) {
        this.$1_2('ScriptApplication_PostLoad', 'ClientControl');
        this.loaded = true;
    },
    
    loadServerTemplateScripts: function Srch_ClientControl$loadServerTemplateScripts() {
        this.$1_2('LoadServerTemplateScripts', 'Trying to load server template scripts...');
        return this.loadRenderTemplateScripts(this.serverTemplateScriptsToLoad, this.$$d_serverTemplateScriptsCallback, this.$$d_serverTemplateScriptsCallback, -1, false);
    },
    
    serverTemplateScriptsCallback: function Srch_ClientControl$serverTemplateScriptsCallback() {
        this.$1_2('ServerTemplateScriptsCallback', 'ServerTemplateScriptsCallback');
        this.serverTemplateScriptsToLoad = [];
    },
    
    loadRenderTemplateScripts: function Srch_ClientControl$loadRenderTemplateScripts(scriptReferences, success, failure, timeout, loadStandAloneCustomScripts) {
        this.$1_2('LoadRenderTemplateScripts', 'Loading render template scripts...');
        var $$t_7 = this, $$t_8 = this;
        if (Srch.U.loadScripts(scriptReferences, function($p1_0) {
            $$t_7.$5u_2($p1_0, success, failure, timeout);
        }, function($p1_0) {
            $$t_8.$5t_2($p1_0, failure);
        }, timeout)) {
            return true;
        }
        this.$1_2('LoadRenderTemplateScripts', 'Did not discover new render template script to load.');
        if (loadStandAloneCustomScripts) {
            return this.$4Q_2(success, failure, timeout);
        }
        else {
            this.$1_2('LoadRenderTemplateScripts', 'Skip loading custom scripts.');
            return false;
        }
    },
    
    $5u_2: function Srch_ClientControl$$5u_2($p0, $p1, $p2, $p3) {
        this.$1_2('RenderTemplateScriptsLoaded', 'All render template scripts loaded.');
        Srch.U.registerLoadedScripts($p0);
        if (this.$4Q_2($p1, $p2, $p3)) {
            return;
        }
        $p1();
    },
    
    $5t_2: function Srch_ClientControl$$5t_2($p0, $p1) {
        this.$1_2('RenderTemplateScriptsFailed', 'Loading render template scripts faild.');
        this.$4Y_2($p0);
        $p1();
    },
    
    $4Q_2: function Srch_ClientControl$$4Q_2($p0, $p1, $p2) {
        this.$1_2('LoadCustomScripts', 'Loading custom scripts...');
        if (!Srch.U.n(Srch.ScriptApplicationManager.get_current().$1Z_1)) {
            var $v_0 = [];
            var $$dict_4 = Srch.ScriptApplicationManager.get_current().$1Z_1;
            for (var $$key_5 in $$dict_4) {
                var $v_1 = { key: $$key_5, value: $$dict_4[$$key_5] };
                var $v_2 = $v_1.key;
                if (!Srch.U.e($v_2)) {
                    var $v_3 = $v_2.trim().toLowerCase();
                    if ($v_3.endsWith('.css')) {
                        $v_3 = Srch.U.urlTokenExpansion($v_3);
                        Srch.U.traceFormatted(null, 'LoadCustomScripts', 'Found custom css:\'{0}\'', $v_3);
                        if (Srch.U.n(Srch.ScriptApplicationManager.get_current().$18_1[$v_3])) {
                            registerCssLink($v_3);
                            Srch.U.traceFormatted(null, 'LoadCustomScripts', 'Registering css \'{0}\' as loaded', $v_3);
                            Srch.ScriptApplicationManager.get_current().$18_1[$v_3] = false;
                        }
                    }
                    else {
                        Srch.U.appendScriptsToLoad($v_0, $v_2);
                    }
                }
            }
            var $$t_B = this, $$t_C = this;
            if (Srch.U.loadScripts($v_0, function($p1_0) {
                $$t_B.$5E_2($p1_0, $p0);
            }, function($p1_0) {
                $$t_C.$5D_2($p1_0, $p1);
            }, $p2)) {
                return true;
            }
        }
        this.$1_2('LoadCustomScripts', 'Did not discover new custom script to load.');
        return false;
    },
    
    $5E_2: function Srch_ClientControl$$5E_2($p0, $p1) {
        this.$1_2('CustomScriptsLoaded', 'All custom scripts loaded.');
        Srch.U.registerLoadedScripts($p0);
        $p1();
    },
    
    $5D_2: function Srch_ClientControl$$5D_2($p0, $p1) {
        this.$1_2('CustomScriptsFailed', 'Loading custom scripts failed.');
        var $v_0 = this.$4Y_2($p0);
        var $v_1 = String.format(SP.Utilities.HttpUtility.htmlEncode(Srch.Res.u_ScriptLoadFail), $v_0);
        var $v_2 = SP.Utilities.HttpUtility.htmlEncode(Srch.Res.u_ScriptLoadFailForViewer);
        var $v_3 = new Srch.ControlMessage(null, 2, 0, 'ResourceLoadException', $v_1, $v_2, null, null, false, true, false);
        Srch.U.appendArray(this.get_messages(), $v_3);
        $p1();
    },
    
    $4Y_2: function Srch_ClientControl$$4Y_2($p0) {
        var $v_0 = '<ul>';
        if (!Srch.U.n($p0)) {
            for (var $v_1 = 0; $v_1 < $p0.length; $v_1++) {
                var $v_2 = $p0[$v_1];
                if (!Srch.U.w($v_2)) {
                    this.$3_2('ProcessLoadFailedScripts', 'Loading script \'{0}\' failed.', $v_2);
                    $v_0 += '<li>' + SP.Utilities.HttpUtility.htmlEncode($v_2) + '</li>';
                }
            }
        }
        $v_0 += '</ul>';
        return $v_0;
    },
    
    invokeAlternateRender: function Srch_ClientControl$invokeAlternateRender(callback, container, ctx) {
        var $v_0 = new SP.CScope('ClientControl.InvokeAlternateRender');
        $v_0.start();
        if (!Srch.U.n(callback)) {
            callback(container, ctx);
        }
        $v_0.stop();
    },
    
    invokeClientRenderer: function Srch_ClientControl$invokeClientRenderer(node, ctx) {
        var $v_0 = new SP.CScope('ClientControl.InvokeClientRenderer');
        $v_0.start();
        SPClientRenderer.Render(node, ctx);
        $v_0.stop();
    },
    
    $K_2: null,
    
    $5I_2: function Srch_ClientControl$$5I_2() {
        if (Srch.U.n(this.$K_2) && !Srch.U.n(this.get_element())) {
            this.$K_2 = document.createElement('div');
            this.$K_2.style.display = 'none';
            var $v_0 = this.get_element().parentNode;
            $v_0.insertBefore(this.$K_2, this.get_element());
        }
    },
    
    processDataErrorMessages: function Srch_ClientControl$processDataErrorMessages(dataErrorsList) {
        if (!Srch.U.n(dataErrorsList) && Srch.U.isArray(dataErrorsList)) {
            for (var $$arr_1 = dataErrorsList, $$len_2 = $$arr_1.length, $$idx_3 = 0; $$idx_3 < $$len_2; ++$$idx_3) {
                var $v_0 = $$arr_1[$$idx_3];
                Srch.U.appendArray(this.$c_2, $v_0);
            }
        }
    },
    
    processRenderingErrorMessages: function Srch_ClientControl$processRenderingErrorMessages(ctx) {
        var $v_0 = ctx['Errors'];
        if (!Srch.U.n($v_0) && Srch.U.isArray($v_0)) {
            for (var $$arr_2 = $v_0, $$len_3 = $$arr_2.length, $$idx_4 = 0; $$idx_4 < $$len_3; ++$$idx_4) {
                var $v_1 = $$arr_2[$$idx_4];
                Srch.U.appendArray(this.$1L_2, Srch.ControlMessage.getFromException($v_1));
            }
            ctx['Errors'] = null;
        }
    },
    
    hasMessages: function Srch_ClientControl$hasMessages() {
        var $v_0 = Srch.U.$3N();
        return (!!this.get_messages() && this.get_messages().length > 0) || (!!this.$c_2 && this.$c_2.length > 0) || (!!this.$1L_2 && this.$1L_2.length > 0) || (!!$v_0 && $v_0.length > 0);
    },
    
    updateDisplayControlWithNewMessages: function Srch_ClientControl$updateDisplayControlWithNewMessages() {
        this.$47_2(true);
    },
    
    displayControlMessages: function Srch_ClientControl$displayControlMessages() {
        this.$47_2(false);
    },
    
    $47_2: function Srch_ClientControl$$47_2($p0) {
        var $v_0 = this.$5K_2(this.get_messages(), this.$c_2, this.$1L_2, Srch.U.$3N(), $p0);
        if (!Srch.U.w($v_0) || !$p0) {
            var $v_1 = this.$V_2.length > 0 || this.$Z_2.length > 0 || this.$c_2.length > 0;
            this.$5I_2();
            if (!Srch.U.w($v_0)) {
                this.$K_2.innerHTML = $v_0;
                this.$K_2.style.display = '';
            }
            else {
                this.$K_2.innerHTML = '';
                this.$K_2.style.display = 'none';
            }
            this.setControlElementVisibility(!$v_1);
        }
        this.$c_2 = [];
        this.$1L_2 = [];
        Srch.U.$5w();
    },
    
    setControlElementVisibility: function Srch_ClientControl$setControlElementVisibility(showElement) {
        if (!Srch.U.n(this.get_element())) {
            this.get_element().style.display = (showElement) ? '' : 'none';
        }
    },
    
    clickHandler: function Srch_ClientControl$clickHandler(evt) {
        if (!Srch.U.n(evt) && !Srch.U.n(evt.target)) {
            var $v_0 = Srch.U.getParentAttributeByName(evt.target, 'clicktype');
            if (!Srch.U.e($v_0)) {
                Srch.U.logClick(evt.target, $v_0);
            }
            var $v_1 = Srch.U.getParentElementByName(evt.target, 'A');
            if (!Srch.U.n($v_1)) {
                var $v_2 = $v_1.href;
                if (!Srch.U.n($v_2)) {
                    var $v_3 = $v_1.protocol;
                    var $v_4 = $v_1.hostname;
                    if ((!Srch.U.n($v_2)) && (!Srch.U.n($v_3)) && (!Srch.U.n($v_4)) && (!Srch.U.n(window.self.location)) && ($v_3 === window.self.location.protocol) && ($v_4.toLowerCase() === window.self.location.hostname.toLowerCase())) {
                        var $v_5 = ajaxNavigate.get_href();
                        var $v_6 = $v_5.indexOf('#');
                        if ($v_6 !== -1) {
                            $v_5 = $v_5.substring(0, $v_6);
                        }
                        Srch.U.setCookie('WOPISessionContext', $v_5, null, null, '/');
                        var $v_7 = $v_1.getAttribute('openApp');
                        if (!Srch.U.e($v_7)) {
                            if (TypeofFullName('navigator.msLaunchUri') === 'function') {
                                var $v_9 = $v_7 + ':ofv|u|' + $v_2.trim();
                                var $$t_E = this;
                                navigator.msLaunchUri($v_9, null, function() {
                                    window.self.location.href = $v_2;
                                });
                                Srch.U.cancelEventEx(evt, true, false);
                                return;
                            }
                        }
                        var $v_8 = $v_1.getAttribute('openControl');
                        if (!Srch.U.e($v_8)) {
                            try {
                                if (window.self.ActiveXObject) {
                                    var $v_A = null;
                                    try {
                                        $v_A = new ActiveXObject('AcroPDF.PDF');
                                    }
                                    catch ($v_B) {
                                    }
                                    if (Srch.U.n($v_A)) {
                                        $v_A = new ActiveXObject($v_8);
                                    }
                                    if (!Srch.U.n($v_A)) {
                                        if ($v_8 === 'PdfFile.OpenDocuments') {
                                            $v_2 = $v_2.split('#')[0];
                                        }
                                        if ($v_A.ViewDocument2(window.self, $v_2)) {
                                            Srch.U.cancelEventEx(evt, true, false);
                                            return;
                                        }
                                    }
                                }
                            }
                            catch ($v_C) {
                            }
                        }
                    }
                }
            }
        }
    },
    
    $5g_2: function Srch_ClientControl$$5g_2($p0) {
        return this.$3T_2($p0) || Srch.ClientControl.$3U($p0);
    },
    
    $3T_2: function Srch_ClientControl$$3T_2($p0) {
        return Srch.U.isPageInEditMode() || (!$p0.showInEditModeOnly && this.$5y_2());
    },
    
    $5y_2: function Srch_ClientControl$$5y_2() {
        var $v_0 = Srch.ScriptApplicationManager.get_current().states['showAdminDetails'];
        if (Srch.U.n($v_0)) {
            return true;
        }
        return $v_0;
    },
    
    $5f_2: function Srch_ClientControl$$5f_2($p0) {
        return (Srch.ClientControl.$3U($p0) && !Srch.U.w($p0.messageDetailsForViewers)) || (this.$3T_2($p0) && !Srch.U.w($p0.messageDetails));
    },
    
    $V_2: null,
    $Z_2: null,
    $15_2: null,
    $1v_2: 0,
    $W_2: '',
    $14_2: false,
    
    $2m_2: function Srch_ClientControl$$2m_2($p0, $p1) {
        if (Srch.U.n(this.$1A_2)) {
            return false;
        }
        var $v_0 = false;
        for (var $$arr_3 = $p0, $$len_4 = $$arr_3.length, $$idx_5 = 0; $$idx_5 < $$len_4; ++$$idx_5) {
            var $v_1 = $$arr_3[$$idx_5];
            if (this.$5g_2($v_1)) {
                if (this.$1v_2 < $v_1.level) {
                    this.$1v_2 = $v_1.level;
                    if (Srch.U.n($v_1.header)) {
                        if (!Srch.U.n(this.$t_2) && !Srch.U.w(Srch.U.trimExtraSpaces(this.$t_2))) {
                            this.$W_2 = this.$t_2;
                        }
                        else {
                            this.$W_2 = Srch.U.loadResource('cc_err_WebPartErrorMessageDisplayHeader');
                            if (Srch.U.w(this.$W_2)) {
                                this.$W_2 = 'Sorry, search isn\'t working right now. Try back a bit later';
                            }
                        }
                    }
                    else {
                        this.$W_2 = $v_1.header;
                    }
                }
                if ($v_1.level === 2 || $v_1.level === 1) {
                    $p1.push($v_1);
                    this.$1_2('ProcessCategoryMessages', $v_1.toString());
                }
                else if (!$v_1.level) {
                    this.$15_2.push($v_1);
                }
                if (!$v_0 && this.$5f_2($v_1)) {
                    this.$14_2 = true;
                    $v_0 = true;
                }
                else if (!this.$14_2 && !Srch.U.w($v_1.correlationID)) {
                    this.$14_2 = true;
                }
            }
        }
        return $v_0;
    },
    
    $36_2: null,
    
    $5K_2: function Srch_ClientControl$$5K_2($p0, $p1, $p2, $p3, $p4) {
        this.$36_2 = {};
        if (!$p4) {
            this.$V_2 = [];
            this.$Z_2 = [];
            this.$15_2 = [];
            this.$14_2 = false;
            this.$1v_2 = 0;
            this.$W_2 = '';
            this.$2m_2($p0, this.$V_2);
        }
        if (this.$31_2) {
            this.$2m_2($p1, this.$V_2);
        }
        var $v_0 = this.$2m_2($p2, this.$Z_2);
        $v_0 = !!($v_0 | this.$2m_2($p3, this.$Z_2));
        var $v_1 = new Sys.StringBuilder();
        if (!Srch.U.n(this.$15_2) && this.$15_2.length > 0) {
            $v_1.append('<div class=\"ms-status-msg ms-status-blue\">');
            this.$1o_2 = true;
            this.$3J_2($v_1, this.$15_2);
            $v_1.append('</div>');
        }
        if ((!Srch.U.n(this.$V_2) && this.$V_2.length > 0) || (!Srch.U.n(this.$Z_2) && this.$Z_2.length > 0)) {
            $v_1.append('<h2 class=\"ms-search-header, ms-srch-error-header\">' + SP.Utilities.HttpUtility.htmlEncode(this.$W_2) + '</h2>');
            if (this.$14_2) {
                var $v_2 = Srch.U.$B('cc_err_ShowMessageDetails', false);
                if (Srch.U.w($v_2)) {
                    $v_2 = 'SHOW DETAILS';
                }
                var $v_3 = Srch.U.$B('cc_err_HideMessageDetails', false);
                if (Srch.U.w($v_3)) {
                    $v_3 = 'HIDE DETAILS';
                }
                var $v_4 = 'ms-status-red';
                if (this.$1v_2 === 1) {
                    $v_4 = 'ms-status-yellow';
                }
                $v_1.append(String.format(Srch.ClientControl.$4V, SP.Utilities.HttpUtility.htmlEncode($v_2), SP.Utilities.HttpUtility.htmlEncode($v_3), $v_4));
                this.$1o_2 = true;
                this.$3J_2($v_1, this.$V_2);
                if ($v_0) {
                    this.$5L_2($v_1);
                    this.$3J_2($v_1, this.$Z_2);
                }
                $v_1.append('</div></div>');
            }
        }
        return $v_1.toString();
    },
    
    $5L_2: function Srch_ClientControl$$5L_2($p0) {
        this.$3I_2($p0);
        var $v_0 = Srch.U.$B('cc_err_RenderingErrorMessageDisplayHeader', false);
        if (Srch.U.w($v_0)) {
            $v_0 = '<strong>Display Error:</strong> The display template had an error.  You can correct it by fixing the template or by changing the display template used in either the Web Part properties or Result Types.';
        }
        $p0.append(String.format(Srch.ClientControl.$1w, $v_0));
    },
    
    $3J_2: function Srch_ClientControl$$3J_2($p0, $p1) {
        for (var $$arr_2 = $p1, $$len_3 = $$arr_2.length, $$idx_4 = 0; $$idx_4 < $$len_3; ++$$idx_4) {
            var $v_0 = $$arr_2[$$idx_4];
            if (this.$3T_2($v_0) && !Srch.U.w($v_0.messageDetails)) {
                var $v_1 = ($v_0.encodeDetails) ? SP.Utilities.HttpUtility.htmlEncode($v_0.messageDetails) : $v_0.messageDetails;
                this.$41_2($p0, String.format(Srch.ClientControl.$1w, $v_1));
            }
            else if (Srch.ClientControl.$3U($v_0) && !Srch.U.w($v_0.messageDetailsForViewers)) {
                var $v_2 = ($v_0.encodeDetails) ? SP.Utilities.HttpUtility.htmlEncode($v_0.messageDetailsForViewers) : $v_0.messageDetailsForViewers;
                this.$41_2($p0, String.format(Srch.ClientControl.$1w, $v_2));
            }
            this.$5J_2($p0, $v_0.correlationID);
        }
    },
    
    $5J_2: function Srch_ClientControl$$5J_2($p0, $p1) {
        if (!Srch.U.w($p1)) {
            this.$3I_2($p0);
            var $v_0 = Srch.U.$B('cc_err_CorrelationIdMessage', false);
            if (Srch.U.w($v_0)) {
                $v_0 = '<strong>Correlation ID:</strong> {0}';
            }
            $p0.append(String.format(Srch.ClientControl.$1w, String.format($v_0, $p1)));
        }
    },
    
    $41_2: function Srch_ClientControl$$41_2($p0, $p1) {
        if (!this.$36_2[$p1]) {
            this.$36_2[$p1] = true;
            this.$3I_2($p0);
            $p0.append($p1);
            return true;
        }
        return false;
    },
    
    $1o_2: false,
    
    $3I_2: function Srch_ClientControl$$3I_2($p0) {
        if (this.$1o_2) {
            this.$1o_2 = false;
        }
        else {
            $p0.append('<br />');
        }
    },
    
    $1_2: function Srch_ClientControl$$1_2($p0, $p1) {
        Srch.U.trace(this, $p0, $p1);
    },
    
    $3_2: function Srch_ClientControl$$3_2($p0, $p1) {
        var $p2 = [];
        for (var $$pai_3 = 2; $$pai_3 < arguments.length; ++$$pai_3) {
            $p2[$$pai_3 - 2] = arguments[$$pai_3];
        }
        Srch.U.traceFormatted.apply(null, [ this, $p0, $p1 ].concat($p2));
    }
}


Srch.DataProvider = function Srch_DataProvider(elem) {
    this.$$d_$5X_3 = Function.createDelegate(this, this.$5X_3);
    this.$$d_$61_3 = Function.createDelegate(this, this.$61_3);
    this.$$d_searchBox_BatchResultReady = Function.createDelegate(this, this.searchBox_BatchResultReady);
    this.$$d_searchBox_BatchQueryIssuing = Function.createDelegate(this, this.searchBox_BatchQueryIssuing);
    this.$$d_searchBox_QueryReady = Function.createDelegate(this, this.searchBox_QueryReady);
    this.$$d_displayControl_QueryReady = Function.createDelegate(this, this.displayControl_QueryReady);
    this.$$d_$4y_3 = Function.createDelegate(this, this.$4y_3);
    this.$2E_3 = [];
    this.$3f_3 = SP.Guid.get_empty();
    this.$2_3 = Srch.QueryState.$5N();
    this.$2e_3 = new Srch.QueryState();
    this.$1l_3 = -1;
    this.$1s_3 = -1;
    this.$2G_3 = -1;
    Srch.DataProvider.initializeBase(this, [ elem ]);
}
Srch.DataProvider.$4I = function Srch_DataProvider$$4I($p0, $p1) {
    if (!Srch.U.n($p0) && !Srch.U.n($p0.queryStateUpdateOption) && $p0.queryStateUpdateOption !== -1) {
        return $p0.queryStateUpdateOption;
    }
    return $p1;
}
Srch.DataProvider.prototype = {
    $26_3: false,
    $20_3: 0,
    $s_3: null,
    $3S_3: false,
    $3R_3: false,
    
    get_$25_3: function Srch_DataProvider$get_$25_3() {
        return this.$3f_3.toString() + this.$5_3;
    },
    
    get_$4W_3: function Srch_DataProvider$get_$4W_3() {
        this.$3f_3 = SP.Guid.newGuid();
        return this.get_$25_3();
    },
    
    get_currentQueryState: function Srch_DataProvider$get_currentQueryState() {
        return this.$2_3;
    },
    
    get_sourceID: function Srch_DataProvider$get_sourceID() {
        return this.$1Q_3;
    },
    
    set_sourceID: function Srch_DataProvider$set_sourceID(value) {
        this.$1Q_3 = value;
        return value;
    },
    
    $1Q_3: '',
    
    get_sourceName: function Srch_DataProvider$get_sourceName() {
        return this.$1S_3;
    },
    
    set_sourceName: function Srch_DataProvider$set_sourceName(value) {
        this.$1S_3 = value;
        return value;
    },
    
    $1S_3: '',
    
    get_sourceLevel: function Srch_DataProvider$get_sourceLevel() {
        return this.$1R_3;
    },
    
    set_sourceLevel: function Srch_DataProvider$set_sourceLevel(value) {
        this.$1R_3 = value;
        return value;
    },
    
    $1R_3: '',
    
    get_collapseSpecification: function Srch_DataProvider$get_collapseSpecification() {
        return this.$1U_3;
    },
    
    set_collapseSpecification: function Srch_DataProvider$set_collapseSpecification(value) {
        this.$1U_3 = value;
        return value;
    },
    
    $1U_3: '',
    
    get_queryGroupName: function Srch_DataProvider$get_queryGroupName() {
        return this.$5_3;
    },
    
    set_queryGroupName: function Srch_DataProvider$set_queryGroupName(value) {
        this.$5_3 = value;
        return value;
    },
    
    $5_3: '',
    
    get_queryPropertiesTemplateUrl: function Srch_DataProvider$get_queryPropertiesTemplateUrl() {
        return this.$22_3;
    },
    
    set_queryPropertiesTemplateUrl: function Srch_DataProvider$set_queryPropertiesTemplateUrl(value) {
        this.$22_3 = value;
        return value;
    },
    
    $22_3: '',
    
    get_queryTemplate: function Srch_DataProvider$get_queryTemplate() {
        return this.$l_3;
    },
    
    set_queryTemplate: function Srch_DataProvider$set_queryTemplate(value) {
        this.$l_3 = value;
        return value;
    },
    
    $l_3: '{searchboxquery}',
    
    get_fallbackSort: function Srch_DataProvider$get_fallbackSort() {
        return this.$1n_3;
    },
    
    set_fallbackSort: function Srch_DataProvider$set_fallbackSort(value) {
        this.$1n_3 = value;
        return value;
    },
    
    $1n_3: null,
    
    get_rankRules: function Srch_DataProvider$get_rankRules() {
        return this.$m_3;
    },
    
    set_rankRules: function Srch_DataProvider$set_rankRules(value) {
        this.$m_3 = value;
        return value;
    },
    
    $m_3: null,
    
    get_initialQueryState: function Srch_DataProvider$get_initialQueryState() {
        return this.$2e_3;
    },
    
    set_initialQueryState: function Srch_DataProvider$set_initialQueryState(value) {
        this.$2e_3.copyFrom(value, 0);
        if (value.l <= 0) {
            this.$2e_3.l = this.get_effectiveQueryLanguage();
        }
        return value;
    },
    
    get_initialResult: function Srch_DataProvider$get_initialResult() {
        return this.$f_3;
    },
    
    set_initialResult: function Srch_DataProvider$set_initialResult(value) {
        this.$f_3 = value;
        return value;
    },
    
    $f_3: '',
    
    get_initialResultRef: function Srch_DataProvider$get_initialResultRef() {
        return this.$g_3;
    },
    
    set_initialResultRef: function Srch_DataProvider$set_initialResultRef(value) {
        this.$g_3 = value;
        return value;
    },
    
    $g_3: null,
    
    get_initialResultObject: function Srch_DataProvider$get_initialResultObject() {
        var $v_0 = null;
        var $v_1 = new SP.CScope('DataProvider.InitialResultObject');
        $v_1.start();
        if (!Srch.U.e(this.$f_3)) {
            this.$1_2('InitialResultObject', 'Deserializing InitialResult json string');
            try {
                $v_0 = Srch.ParseJSONUtil.parseObjectFromJsonString(this.$f_3);
                $v_1.stop();
                return $v_0;
            }
            catch ($v_2) {
                this.$3_2('InitialResultObject', 'Could not deserialize json string: {0} error: {1}', this.$f_3, $v_2.message);
            }
        }
        else if (Srch.U.e(this.$f_3) && !Srch.U.e(this.$g_3) && typeof(this.$g_3) !== 'undefined') {
            this.$3_2('InitialResultObject', 'Processing server generated JSON obect literal for InitialResultRef: {0}', this.$g_3);
            $v_0 = eval(this.$g_3);
            Srch.ParseJSONUtil.evaluateTokensInJsonObject($v_0);
            return $v_0;
        }
        $v_1.stop();
        return null;
    },
    
    get_batched: function Srch_DataProvider$get_batched() {
        return this.$u_3;
    },
    
    set_batched: function Srch_DataProvider$set_batched(value) {
        this.$u_3 = value;
        return value;
    },
    
    $u_3: true,
    
    get_active: function Srch_DataProvider$get_active() {
        return this.$R_3;
    },
    
    set_active: function Srch_DataProvider$set_active(value) {
        this.$R_3 = value;
        return value;
    },
    
    $R_3: true,
    
    get_bypassResultTypes: function Srch_DataProvider$get_bypassResultTypes() {
        return this.bypassResultTypes;
    },
    
    set_bypassResultTypes: function Srch_DataProvider$set_bypassResultTypes(value) {
        this.bypassResultTypes = value;
        return value;
    },
    
    bypassResultTypes: false,
    
    get_processBestBets: function Srch_DataProvider$get_processBestBets() {
        return this.processBestBets;
    },
    
    set_processBestBets: function Srch_DataProvider$set_processBestBets(value) {
        this.processBestBets = value;
        return value;
    },
    
    processBestBets: true,
    
    get_processPersonalFavorites: function Srch_DataProvider$get_processPersonalFavorites() {
        return this.$27_3;
    },
    
    set_processPersonalFavorites: function Srch_DataProvider$set_processPersonalFavorites(value) {
        this.$27_3 = value;
        return value;
    },
    
    $27_3: true,
    
    get_resultsPerPage: function Srch_DataProvider$get_resultsPerPage() {
        return this.$p_3;
    },
    
    set_resultsPerPage: function Srch_DataProvider$set_resultsPerPage(value) {
        this.$p_3 = value;
        return value;
    },
    
    $p_3: 10,
    
    get_selectedRefiners: function Srch_DataProvider$get_selectedRefiners() {
        return this.$O_3;
    },
    
    set_selectedRefiners: function Srch_DataProvider$set_selectedRefiners(value) {
        this.$O_3 = value;
        return value;
    },
    
    $O_3: null,
    
    get_selectedProperties: function Srch_DataProvider$get_selectedProperties() {
        return this.$b_3;
    },
    
    set_selectedProperties: function Srch_DataProvider$set_selectedProperties(value) {
        this.$b_3 = value;
        return value;
    },
    
    $b_3: null,
    
    get_hitHighlightedProperties: function Srch_DataProvider$get_hitHighlightedProperties() {
        return this.$X_3;
    },
    
    set_hitHighlightedProperties: function Srch_DataProvider$set_hitHighlightedProperties(value) {
        this.$X_3 = value;
        return value;
    },
    
    $X_3: null,
    
    get_fallbackLanguage: function Srch_DataProvider$get_fallbackLanguage() {
        return this.$1l_3;
    },
    
    set_fallbackLanguage: function Srch_DataProvider$set_fallbackLanguage(value) {
        this.$1l_3 = value;
        return value;
    },
    
    get_fallbackRankingModelID: function Srch_DataProvider$get_fallbackRankingModelID() {
        return this.$1m_3;
    },
    
    set_fallbackRankingModelID: function Srch_DataProvider$set_fallbackRankingModelID(value) {
        this.$1m_3 = value;
        return value;
    },
    
    $1m_3: '',
    
    get_fallbackRefinementFilters: function Srch_DataProvider$get_fallbackRefinementFilters() {
        return this.$3H_3;
    },
    
    set_fallbackRefinementFilters: function Srch_DataProvider$set_fallbackRefinementFilters(value) {
        this.$3H_3 = Srch.U.$2R(value, Srch.RefinementCategory);
        return value;
    },
    
    $3H_3: null,
    
    get_availableSorts: function Srch_DataProvider$get_availableSorts() {
        return this.$S_3;
    },
    
    set_availableSorts: function Srch_DataProvider$set_availableSorts(value) {
        this.$S_3 = value;
        return value;
    },
    
    $S_3: null,
    
    get_contextualScopeUrl: function Srch_DataProvider$get_contextualScopeUrl() {
        return this.$1V_3;
    },
    
    set_contextualScopeUrl: function Srch_DataProvider$set_contextualScopeUrl(value) {
        this.$1V_3 = value;
        return value;
    },
    
    $1V_3: '',
    
    get_totalRows: function Srch_DataProvider$get_totalRows() {
        return this.$8_3;
    },
    
    $8_3: 0,
    
    get_rowCount: function Srch_DataProvider$get_rowCount() {
        return this.$M_3;
    },
    
    $M_3: 0,
    
    get_refinementInfo: function Srch_DataProvider$get_refinementInfo() {
        return this.$n_3;
    },
    
    $n_3: null,
    
    get_entityInfo: function Srch_DataProvider$get_entityInfo() {
        return this.$U_3;
    },
    
    $U_3: null,
    
    get_enableStemming: function Srch_DataProvider$get_enableStemming() {
        return this.$1j_3;
    },
    
    set_enableStemming: function Srch_DataProvider$set_enableStemming(value) {
        this.$1j_3 = value;
        return value;
    },
    
    $1j_3: true,
    
    get_enablePhonetic: function Srch_DataProvider$get_enablePhonetic() {
        return this.$1h_3;
    },
    
    set_enablePhonetic: function Srch_DataProvider$set_enablePhonetic(value) {
        this.$1h_3 = value;
        return value;
    },
    
    $1h_3: false,
    
    get_enableNicknames: function Srch_DataProvider$get_enableNicknames() {
        return this.$1f_3;
    },
    
    set_enableNicknames: function Srch_DataProvider$set_enableNicknames(value) {
        this.$1f_3 = value;
        return value;
    },
    
    $1f_3: false,
    
    get_trimDuplicates: function Srch_DataProvider$get_trimDuplicates() {
        return this.$2H_3;
    },
    
    set_trimDuplicates: function Srch_DataProvider$set_trimDuplicates(value) {
        this.$2H_3 = value;
        return value;
    },
    
    $2H_3: true,
    
    get_enableInterleaving: function Srch_DataProvider$get_enableInterleaving() {
        return this.$1e_3;
    },
    
    set_enableInterleaving: function Srch_DataProvider$set_enableInterleaving(value) {
        this.$1e_3 = value;
        return value;
    },
    
    $1e_3: true,
    
    get_enableQueryRules: function Srch_DataProvider$get_enableQueryRules() {
        return this.$1i_3;
    },
    
    set_enableQueryRules: function Srch_DataProvider$set_enableQueryRules(value) {
        this.$1i_3 = value;
        return value;
    },
    
    $1i_3: true,
    
    get_enableOrderingHitHighlightedProperty: function Srch_DataProvider$get_enableOrderingHitHighlightedProperty() {
        return this.$1g_3;
    },
    
    set_enableOrderingHitHighlightedProperty: function Srch_DataProvider$set_enableOrderingHitHighlightedProperty(value) {
        this.$1g_3 = value;
        return value;
    },
    
    $1g_3: false,
    
    get_hitHighlightedMultivaluePropertyLimit: function Srch_DataProvider$get_hitHighlightedMultivaluePropertyLimit() {
        return this.$1s_3;
    },
    
    set_hitHighlightedMultivaluePropertyLimit: function Srch_DataProvider$set_hitHighlightedMultivaluePropertyLimit(value) {
        this.$1s_3 = value;
        return value;
    },
    
    get_properties: function Srch_DataProvider$get_properties() {
        if (!this.$1u_3) {
            this.$1u_3 = {};
        }
        return this.$1u_3;
    },
    
    set_properties: function Srch_DataProvider$set_properties(value) {
        this.$1u_3 = value;
        return value;
    },
    
    $1u_3: null,
    
    get_clientType: function Srch_DataProvider$get_clientType() {
        return this.$2M_3;
    },
    
    set_clientType: function Srch_DataProvider$set_clientType(value) {
        this.$2M_3 = value;
        return value;
    },
    
    $2M_3: '',
    
    get_clientFunction: function Srch_DataProvider$get_clientFunction() {
        return this.$2L_3;
    },
    
    set_clientFunction: function Srch_DataProvider$set_clientFunction(value) {
        this.$2L_3 = value;
        return value;
    },
    
    $2L_3: '',
    
    get_clientFunctionDetails: function Srch_DataProvider$get_clientFunctionDetails() {
        return this.$3A_3;
    },
    
    set_clientFunctionDetails: function Srch_DataProvider$set_clientFunctionDetails(value) {
        this.$3A_3 = value;
        return value;
    },
    
    $3A_3: '',
    
    get_maxPagesAfterCurrent: function Srch_DataProvider$get_maxPagesAfterCurrent() {
        return this.$Y_3;
    },
    
    set_maxPagesAfterCurrent: function Srch_DataProvider$set_maxPagesAfterCurrent(value) {
        this.$Y_3 = value;
        return value;
    },
    
    $Y_3: 0,
    
    get_userAction: function Srch_DataProvider$get_userAction() {
        return this.$Q_3;
    },
    
    set_userAction: function Srch_DataProvider$set_userAction(value) {
        this.$Q_3 = value;
        return value;
    },
    
    $Q_3: 0,
    
    get_queryCount: function Srch_DataProvider$get_queryCount() {
        return this.$21_3;
    },
    
    set_queryCount: function Srch_DataProvider$set_queryCount(value) {
        this.$21_3 = value;
        return value;
    },
    
    $21_3: 0,
    
    get_resultsUrl: function Srch_DataProvider$get_resultsUrl() {
        if (!this.$2w_3) {
            return ajaxNavigate.get_href();
        }
        return this.$2w_3;
    },
    
    set_resultsUrl: function Srch_DataProvider$set_resultsUrl(value) {
        this.$2w_3 = value;
        return value;
    },
    
    $2w_3: null,
    
    get_upScopeUrl: function Srch_DataProvider$get_upScopeUrl() {
        var $v_0 = Srch.ScriptApplicationManager.get_current().states['searchCenterUrl'];
        if (!Srch.U.e($v_0)) {
            $v_0 = Srch.U.concatUrl(Srch.U.replaceUrlTokens($v_0), String.format('results.aspx?k={0}', SP.Utilities.HttpUtility.urlKeyValueEncode(this.$2_3.k)));
        }
        return $v_0;
    },
    
    get_effectiveQueryLanguage: function Srch_DataProvider$get_effectiveQueryLanguage() {
        var $v_0 = -1;
        var $v_1 = '';
        if ($v_0 < 1 && this.$1l_3 > 0) {
            $v_0 = this.$1l_3;
            $v_1 = ' from fallback language...';
        }
        if ($v_0 < 1 && this.$2_3.l > 0) {
            $v_0 = this.$2_3.l;
            $v_1 = ' from query state...';
        }
        if ($v_0 < 1) {
            var $v_2 = this.get_queryDateTimeCulture();
            if ($v_2 > 0) {
                $v_0 = $v_2;
                $v_1 = ' from querytimeculture language...';
            }
        }
        if ($v_0 < 1) {
            var $v_3 = Srch.ScriptApplicationManager.get_current().states['languages'];
            if (!Srch.U.n($v_3) && $v_3.length > 0) {
                var $v_4 = $v_3[0];
                if (!Srch.U.n($v_4)) {
                    $v_0 = $v_4.id;
                    $v_1 = ' from default user preference language...';
                }
            }
        }
        if ($v_0 < 1) {
            var $v_5 = Srch.ScriptApplicationManager.get_current().states['browserLanguage'];
            if ($v_5 > 0) {
                $v_0 = $v_5;
                $v_1 = ' from browser language...';
            }
        }
        this.$3_2('GetLanguage', 'Setting query language to \'{0}\'' + $v_1, $v_0);
        return $v_0;
    },
    
    get_queryDateTimeCulture: function Srch_DataProvider$get_queryDateTimeCulture() {
        return Srch.ScriptApplicationManager.get_current().states['QueryDateTimeCulture'];
    },
    
    get_effectiveLanguageDisplayName: function Srch_DataProvider$get_effectiveLanguageDisplayName() {
        return Srch.ScriptApplicationManager.get_current().getDisplayNameByLanguageID(this.get_effectiveQueryLanguage());
    },
    
    get_$5G_3: function Srch_DataProvider$get_$5G_3() {
        var $v_0 = null;
        var $v_1 = 'Not using explicit sort...';
        if (!Srch.U.n(this.$2_3.o)) {
            $v_0 = this.$2_3.o;
            $v_1 = 'Using query state sorts...';
        }
        var $v_2 = this.$S_3;
        if (Srch.U.n($v_0) && !Srch.U.n($v_2) && $v_2.length > 0) {
            var $v_3 = $v_2[0].sorts;
            if (!Srch.U.n($v_3)) {
                $v_0 = $v_3;
                $v_1 = 'Using default available sorts...';
            }
        }
        if (Srch.U.n($v_0) && !Srch.U.n(this.$1n_3)) {
            $v_0 = this.$1n_3;
            $v_1 = 'Using fall back sorts...';
        }
        this.$1_2('GetSorts', $v_1);
        return $v_0;
    },
    
    get_parentImpressionID: function Srch_DataProvider$get_parentImpressionID() {
        return this.$1F_3;
    },
    
    set_parentImpressionID: function Srch_DataProvider$set_parentImpressionID(value) {
        this.$1F_3 = value;
        return value;
    },
    
    $1F_3: null,
    
    get_updateAjaxNavigate: function Srch_DataProvider$get_updateAjaxNavigate() {
        return this.$2I_3;
    },
    
    set_updateAjaxNavigate: function Srch_DataProvider$set_updateAjaxNavigate(value) {
        this.$2I_3 = value;
        return value;
    },
    
    $2I_3: true,
    
    get_summaryLength: function Srch_DataProvider$get_summaryLength() {
        return this.$2D_3;
    },
    
    set_summaryLength: function Srch_DataProvider$set_summaryLength(value) {
        this.$2D_3 = value;
        return value;
    },
    
    $2D_3: 180,
    
    get_desiredSnippetLength: function Srch_DataProvider$get_desiredSnippetLength() {
        return this.$1c_3;
    },
    
    set_desiredSnippetLength: function Srch_DataProvider$set_desiredSnippetLength(value) {
        this.$1c_3 = value;
        return value;
    },
    
    $1c_3: 90,
    
    get_personalizedQuery: function Srch_DataProvider$get_personalizedQuery() {
        return this.$2j_3;
    },
    
    set_personalizedQuery: function Srch_DataProvider$set_personalizedQuery(value) {
        this.$2j_3 = value;
        return value;
    },
    
    $2j_3: false,
    
    get_timeZoneId: function Srch_DataProvider$get_timeZoneId() {
        return this.$2G_3;
    },
    
    set_timeZoneId: function Srch_DataProvider$set_timeZoneId(value) {
        this.$2G_3 = value;
        return value;
    },
    
    initialize: function Srch_DataProvider$initialize() {
        if (this.$R_3) {
            this.$s_3 = this.$$d_$4y_3;
            ajaxNavigate.add_navigate(this.$s_3);
        }
        Srch.ClientControl.prototype.initialize.call(this);
    },
    
    dispose: function Srch_DataProvider$dispose() {
        try {
            if (!Srch.U.n(this.$s_3)) {
                ajaxNavigate.remove_navigate(this.$s_3);
                this.$s_3 = null;
            }
        }
        finally {
            Srch.ClientControl.prototype.dispose.call(this);
        }
    },
    
    scriptApplication_PreLoad: function Srch_DataProvider$scriptApplication_PreLoad(sender, e) {
        this.$1_2('ScriptApplication_PreLoad', 'DataProvider');
        if (this.$R_3) {
            var $v_0 = Srch.ScriptApplicationManager.get_current().queryGroups[this.$5_3];
            if (!Srch.U.n($v_0)) {
                var $v_1 = null;
                for (var $v_2 = 0; $v_2 < $v_0.displays.length; $v_2++) {
                    var $v_3 = $v_0.displays[$v_2];
                    if (!Srch.U.n($v_3)) {
                        $v_1 = this.$$d_displayControl_QueryReady;
                        $v_3.add_queryReady($v_1);
                        Srch.U.appendArray(this.listenedEvents, new Srch.ListenedEvent($v_3, 1, $v_1));
                        if (Srch.Result.isInstanceOfType($v_3)) {
                            var $v_4 = $v_3;
                            if (Srch.U.e($v_4.$h_4)) {
                                this.$3S_3 = true;
                            }
                            if (Srch.U.e($v_4.$e_4)) {
                                this.$3R_3 = true;
                            }
                        }
                    }
                }
                for (var $v_5 = 0; $v_5 < $v_0.searchBoxes.length; $v_5++) {
                    var $v_6 = $v_0.searchBoxes[$v_5];
                    if (!Srch.U.n($v_6)) {
                        $v_1 = this.$$d_searchBox_QueryReady;
                        $v_6.add_queryReady($v_1);
                        Srch.U.appendArray(this.listenedEvents, new Srch.ListenedEvent($v_6, 1, $v_1));
                        $v_1 = this.$$d_searchBox_BatchQueryIssuing;
                        $v_6.add_batchQueryIssuing($v_1);
                        Srch.U.appendArray(this.listenedEvents, new Srch.ListenedEvent($v_6, 3, $v_1));
                        $v_1 = this.$$d_searchBox_BatchResultReady;
                        $v_6.add_batchResultReady($v_1);
                        Srch.U.appendArray(this.listenedEvents, new Srch.ListenedEvent($v_6, 5, $v_1));
                    }
                }
            }
        }
        Srch.ClientControl.prototype.scriptApplication_PreLoad.call(this, sender, e);
    },
    
    scriptApplication_Load: function Srch_DataProvider$scriptApplication_Load(sender, e) {
        this.$1_2('ScriptApplication_Load', 'DataProvider');
        if (this.$R_3) {
            this.$4y_3(null, null);
        }
        Srch.ClientControl.prototype.scriptApplication_Load.call(this, sender, e);
    },
    
    scriptApplication_PostLoad: function Srch_DataProvider$scriptApplication_PostLoad(sender, e) {
        this.$1_2('ScriptApplication_PostPreLoad', 'DataProvider');
        if (!this.loadServerTemplateScripts()) {
            this.$1_2('ScriptApplication_PostLoad', 'Inline control render');
            this.renderControl(null, this);
        }
        Srch.ClientControl.prototype.scriptApplication_PostLoad.call(this, sender, e);
    },
    
    serverTemplateScriptsCallback: function Srch_DataProvider$serverTemplateScriptsCallback() {
        Srch.ClientControl.prototype.serverTemplateScriptsCallback.call(this);
        this.$1_2('ServerTemplateScriptsCallback', 'Delay load control render');
        this.renderControl(null, this);
    },
    
    add_queryIssuing: function Srch_DataProvider$add_queryIssuing(value) {
        this.get_events().addHandler(Srch.EventType.toString(2), value);
    },
    
    remove_queryIssuing: function Srch_DataProvider$remove_queryIssuing(value) {
        this.get_events().removeHandler(Srch.EventType.toString(2), value);
    },
    
    raiseQueryIssuingEvent: function Srch_DataProvider$raiseQueryIssuingEvent(arg) {
        this.$1_2('RaiseQueryIssuingEvent', '');
        this.$20_3++;
        LogRUMExtendedAction('SearchDataProviderIssueQuery', this.$20_3, null, new Date().getTime(), 0);
        this.$26_3 = false;
        this.set_messages([]);
        var $v_0 = this.get_events().getHandler(Srch.EventType.toString(2));
        if (!Srch.U.n($v_0)) {
            $v_0(this, arg);
        }
    },
    
    add_resultReady: function Srch_DataProvider$add_resultReady(value) {
        this.get_events().addHandler(Srch.EventType.toString(4), value);
    },
    
    remove_resultReady: function Srch_DataProvider$remove_resultReady(value) {
        this.get_events().removeHandler(Srch.EventType.toString(4), value);
    },
    
    raiseResultReadyEvent: function Srch_DataProvider$raiseResultReadyEvent(arg) {
        var $v_0 = (!Srch.U.n(arg) && !Srch.U.n(arg.result)) ? arg.result['QueryId'] : null;
        var $v_1 = new SP.CScope('DataProvider.RaiseResultReadyEvent');
        $v_1.start();
        this.$1_2('RaiseResultReadyEvent', 'Result is ready');
        LogRUMExtendedAction('SearchDataProviderRaiseResultReady', this.$20_3, $v_0, new Date().getTime(), 0);
        this.$2u_3 = arg;
        if (!Srch.U.n(arg)) {
            this.$4Z_3(arg.result);
        }
        if (this.$5c_3()) {
            $v_1.stop();
            return;
        }
        this.$4a_3(this.$2u_3);
        $v_1.stop();
        LogRUMExtendedAction('SearchDataProviderDoneRaisingResultReady', this.$20_3, $v_0, new Date().getTime(), 0);
    },
    
    $4a_3: function Srch_DataProvider$$4a_3($p0) {
        var $v_0 = this.get_events().getHandler(Srch.EventType.toString(4));
        if (!Srch.U.n($v_0)) {
            $v_0(this, $p0);
        }
        this.$Q_3 = 0;
    },
    
    $2u_3: null,
    
    add_queryStateChanged: function Srch_DataProvider$add_queryStateChanged(value) {
        this.get_events().addHandler(Srch.EventType.toString(6), value);
    },
    
    remove_queryStateChanged: function Srch_DataProvider$remove_queryStateChanged(value) {
        this.get_events().removeHandler(Srch.EventType.toString(6), value);
    },
    
    raiseQueryStateChangedEvent: function Srch_DataProvider$raiseQueryStateChangedEvent(arg) {
        this.$1_2('RaiseQueryStateChangedEvent', '');
        var $v_0 = this.get_events().getHandler(Srch.EventType.toString(6));
        if (!Srch.U.n($v_0)) {
            $v_0(this, arg);
        }
    },
    
    $5c_3: function Srch_DataProvider$$5c_3() {
        this.$1_2('LoadTemplateScripts', 'Trying to load template scripts...');
        return this.loadRenderTemplateScripts(this.$2E_3, this.$$d_$61_3, this.$$d_$61_3, -1, true);
    },
    
    $61_3: function Srch_DataProvider$$61_3() {
        this.$1_2('TemplateScriptsCallback', 'TemplateScriptsCallback');
        this.$2E_3 = [];
        this.$4a_3(this.$2u_3);
    },
    
    $4Z_3: function Srch_DataProvider$$4Z_3($p0) {
        var $v_0 = new SP.CScope('DataProvider.ProcessResult');
        $v_0.start();
        this.$8_3 = 0;
        this.$M_3 = 0;
        this.$n_3 = null;
        this.$U_3 = null;
        this.$21_3++;
        if (Srch.U.n($p0)) {
            $v_0.stop();
            return;
        }
        if (!this.$Q_3) {
            this.$1F_3 = Srch.U.getTableProperty($p0, 'piPageImpression');
        }
        var $v_1 = 0;
        var $v_2 = $p0['ResultTables'];
        if (!Srch.U.n($v_2) && $v_2.length > 0) {
            for (var $v_3 = 0; $v_3 < $v_2.length; $v_3++) {
                var $v_4 = $v_2[$v_3];
                if (!Srch.U.n($v_4)) {
                    if (Srch.U.isTableTypeof($v_4, Microsoft.SharePoint.Client.Search.Query.KnownTableTypes.refinementResults)) {
                        this.$5o_3($v_4);
                    }
                    else {
                        var $v_5 = 0;
                        if (Srch.U.isSubstrateTable($v_4)) {
                            if (this.$8_3 < 1) {
                                $v_5 = $v_4['TotalRows'];
                                if (!Srch.U.n($v_5)) {
                                    this.$8_3 = $v_5;
                                }
                            }
                            $v_5 = $v_4['RowCount'];
                            if (!Srch.U.n($v_5)) {
                                $v_1 += $v_5;
                            }
                        }
                        if (this.$3R_3) {
                            var $v_6 = Srch.U.getTableProperty($v_4, 'RenderTemplateId');
                            Srch.U.appendScriptsToLoad(this.$2E_3, $v_6);
                        }
                        if (this.$3S_3) {
                            var $v_7 = $v_4['ResultRows'];
                            if (!Srch.U.n($v_7) && $v_7.length > 0) {
                                for (var $v_8 = 0; $v_8 < $v_7.length; $v_8++) {
                                    var $v_9 = $v_7[$v_8];
                                    if (!Srch.U.n($v_9)) {
                                        var $v_A = $v_9['RenderTemplateId'];
                                        Srch.U.appendScriptsToLoad(this.$2E_3, $v_A);
                                        $v_9['ParentTableReference'] = $v_4;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        this.$M_3 = $v_1;
        if (this.$8_3 < 1 || this.$M_3 < 0) {
            this.$3_2('ProcessResult', 'No result. totalRows: {0}, relevantRowCount: {1}', this.$8_3, $v_1);
            $v_0.stop();
            return;
        }
        $v_0.stop();
    },
    
    $5o_3: function Srch_DataProvider$$5o_3($p0) {
        if (!Srch.U.n($p0)) {
            var $v_0 = $p0['ResultRows'];
            if (!Srch.U.n($v_0) && $v_0.length > 0) {
                var $v_1 = null;
                var $v_2 = null;
                var $v_3 = null;
                this.$U_3 = {};
                this.$n_3 = {};
                for (var $v_4 = 0; $v_4 < $v_0.length; $v_4++) {
                    var $v_5 = $v_0[$v_4];
                    if (!Srch.U.n($v_5)) {
                        var $v_6 = $v_5['RefinerName'];
                        if (!Srch.U.e($v_6)) {
                            if ($v_1 !== $v_6) {
                                $v_1 = $v_6;
                                $v_2 = Srch.ValueInfo.getIntervalLabelsDictionary($v_1, $v_5['Type']);
                                $v_3 = [];
                                this.$U_3[$v_6] = {};
                                this.$n_3[$v_6] = $v_3;
                            }
                            if (Srch.ValueInfo.isKnownEntityPropertyName($v_6)) {
                                this.$5e_3($v_5, $v_6, $v_3);
                            }
                            else {
                                var $v_7 = this.$5m_3($v_5, $v_6, $v_2);
                                Srch.U.appendArray($v_3, $v_7);
                            }
                        }
                    }
                }
            }
        }
    },
    
    $5q_3: function Srch_DataProvider$$5q_3($p0) {
        if (!Srch.U.w($p0) && !Srch.U.n(this.$O_3)) {
            for (var $v_0 = 0; $v_0 < this.$O_3.length; $v_0++) {
                var $v_1 = this.$O_3[$v_0];
                if (!Srch.U.w($v_1) && $v_1.startsWith($p0)) {
                    return $v_1;
                }
            }
        }
        return '';
    },
    
    $5m_3: function Srch_DataProvider$$5m_3($p0, $p1, $p2) {
        var $v_0 = Srch.ValueInfo.ValueTypeHandler.$13($p1, Srch.U.getStringFieldOnObject($p0, 'Type'), 'baseHandlerId');
        var $v_1 = Srch.ValueInfo.$d($p1);
        if ($v_0 === 'Boolean' || 'OWSBOOL' === $v_1) {
            var $v_2 = new Srch.ValueInfo(Srch.U.getStringFieldOnObject($p0, 'RefinementName'), $p1, false);
            if (!Srch.U.n($v_2) && !Srch.U.w($v_2.toString())) {
                Srch.U.setFieldOnObject($p0, 'OriginalRefinmentName', Srch.U.getStringFieldOnObject($p0, 'RefinementName'));
                Srch.U.setFieldOnObject($p0, 'RefinementName', $v_2.toString());
            }
            return $p0;
        }
        else {
            return this.$5n_3($p0, $p1, $p2);
        }
    },
    
    $5n_3: function Srch_DataProvider$$5n_3($p0, $p1, $p2) {
        var $v_0 = $p0;
        var $v_1 = false;
        try {
            var $v_2 = $p0['RefinementToken'];
            if (Srch.U.w($v_2)) {
                $v_2 = '';
            }
            var $v_3 = Srch.U.parseTypedRangeToken($v_2, $p0);
            var $v_4 = '';
            var $v_5 = Srch.U.getOrCreateFieldOnObject($p2, 'IntervalBoundaryCount', -1);
            if (!Srch.U.n($v_3) && $v_3.length > 2) {
                var $v_6 = $v_3[1];
                var $v_7 = $v_3[2];
                var $v_8 = $v_6.startsWith('min');
                var $v_9 = $v_7.startsWith('max');
                var $v_A = this.$5q_3($p1);
                if (!Srch.U.w($v_A) && ($v_A.indexOf('discretize') > -1)) {
                    var $v_E = new RegExp('/', 'g');
                    var $v_F = $v_A.match($v_E);
                    var $v_G = 0;
                    if (!Srch.U.n($v_F)) {
                        $v_G = $v_F.length;
                    }
                    $v_5++;
                    var $v_H = '-1';
                    var $v_I = '-1';
                    if ($v_8) {
                        $v_I = '0';
                    }
                    else if ($v_9) {
                        $v_H = ($v_5 - 1).toString();
                    }
                    else {
                        $v_H = ($v_5 - 1).toString();
                        $v_I = $v_5.toString();
                    }
                    var $v_J = $p2[$v_H];
                    var $v_K = $p2[$v_I];
                    if (!Srch.U.w($v_J)) {
                        $v_6 = $v_J;
                    }
                    if (!Srch.U.w($v_K)) {
                        $v_7 = $v_K;
                    }
                    Srch.U.setFieldOnObject($p2, 'IntervalBoundaryCount', $v_5);
                }
                var $v_B = new Srch.ValueInfo($v_6, $p1, false);
                var $v_C = new Srch.ValueInfo($v_7, $p1, false);
                var $$t_P, $$t_Q;
                var $v_D = (($$t_Q = Srch.ValueInfo.$5O($v_B, $v_C, $p1, $p2, ($$t_P = {'val': $v_4}))), $v_4 = $$t_P.val, $$t_Q);
                if (!Srch.U.w($v_D)) {
                    $v_1 = true;
                    this.$3_2('ProcessFilterRowForRangeLocalization', 'Adjusting discrete range[{1}] refiner row changing text from \'{0}\' to \'{2}\'', $v_0['RefinementName'], $v_0['RefinementToken'], $v_D);
                    $v_0 = Srch.U.copyDictionary($p0);
                    $v_0['RefinementRangeOriginalRow'] = $p0;
                    $v_0['RefinementName'] = $v_D;
                    $v_0['RefinementRangeValue1'] = $v_B;
                    $v_0['RefinementRangeValue2'] = $v_C;
                    $v_0['RefinementRangeRawValue1'] = $v_3[1];
                    $v_0['RefinementRangeRawValue2'] = $v_3[2];
                    $v_0['RefinementRangeBoundaryIndex'] = $v_5;
                    $v_0['RefinementRangeIntervalLabels'] = $p2;
                    $v_0['RefinementRangeIntervalLabelFormat'] = $v_4;
                    if ($v_8 && $v_9) {
                        $v_0['RefinementRangeAnyValue'] = true;
                    }
                }
            }
        }
        catch ($v_L) {
            this.$3_2('ProcessFilterRowForRangeLocalization', 'Error adjusting discrete range[{1}] refiner label \'{0}\': \'{2}\'', $v_0['RefinementName'], $v_0['RefinementToken'], $v_L.toString());
        }
        if (!$v_1) {
            $v_0 = $p0;
        }
        return $v_0;
    },
    
    $5e_3: function Srch_DataProvider$$5e_3($p0, $p1, $p2) {
        if (Srch.U.n(this.$U_3) || Srch.U.n(this.$U_3[$p1])) {
            return;
        }
        var $v_0 = this.$U_3[$p1];
        var $v_1 = Srch.ValueInfo.getValueOrValuesArray($p0['RefinementValue'], $p1, false);
        var $v_2 = null;
        if ($v_1.isValuesArray) {
            $v_2 = $v_1.value;
        }
        else {
            $v_2 = [];
            Srch.U.appendArray($v_2, $v_1);
        }
        var $v_3 = {};
        for (var $$arr_7 = $v_2, $$len_8 = $$arr_7.length, $$idx_9 = 0; $$idx_9 < $$len_8; ++$$idx_9) {
            var $v_4 = $$arr_7[$$idx_9];
            if ($v_4.isEmpty) {
                continue;
            }
            var $v_5 = $v_0[$v_4.entityId];
            if ($v_4.isEntity && !Srch.U.n($v_5)) {
                var $v_6 = ($v_5);
                var $v_7 = ($v_6['RefinementCount']);
                var $v_8 = ($p0['RefinementCount']);
                var $v_9 = $v_7 + $v_8;
                if (!(($v_4.entityId) in $v_3)) {
                    $v_3[$v_4.entityId] = $v_6;
                    $v_6['RefinementCount'] = $v_9;
                    this.$3_2('MergeEntityRefinementRows', 'Merging refiner row for {0} and combining result counts: {1} + {2} = {3}', $v_4.getFilterToken(), $v_7, $v_8, $v_9);
                }
                Srch.U.appendArray(($v_6['MergedRows']), $p0);
            }
            else {
                var $v_A = $p0;
                if ($v_4.isEntity && !Srch.U.w($v_4.entityLabel)) {
                    $v_A = Srch.U.copyDictionary($p0);
                    $v_3[$v_4.entityId] = $v_A;
                    var $v_B = [];
                    Srch.U.appendArray($v_B, $p0);
                    $v_A['MergedRows'] = $v_B;
                    $v_A['RefinementName'] = $v_4.entityLabel;
                    $v_A['RefinementEntityId'] = $v_4.entityId;
                    $v_A['RefinementEntityType'] = $v_4.entityType;
                    $v_A['RefinementValueInfo'] = $v_4;
                    if (Srch.U.n($v_A['RefinementToken'])) {
                        $v_A['RefinementToken'] = $v_4.getFilterToken();
                    }
                    $v_0[$v_4.entityId] = $v_A;
                }
                Srch.U.appendArray($p2, $v_A);
            }
        }
    },
    
    displayControl_QueryReady: function Srch_DataProvider$displayControl_QueryReady(sender, e) {
        this.$1_2('DisplayControl_QueryReady', '');
        var $v_0 = e;
        if (!Srch.U.n($v_0)) {
            this.$Q_3 = $v_0.userAction;
            var $v_1 = $v_0.queryState;
            if (!Srch.U.n($v_1)) {
                this.$37_3($v_1, Srch.DataProvider.$4I($v_0, 2));
                this.$3_2('DisplayControl_QueryReady', 'Query is \'{0}\'', this.$2_3.k);
                this.issueQuery();
            }
        }
    },
    
    searchBox_QueryReady: function Srch_DataProvider$searchBox_QueryReady(sender, e) {
        this.$1_2('SearchBox_QueryReady', '');
        var $v_0 = e;
        if (!Srch.U.n($v_0)) {
            this.$Q_3 = $v_0.userAction;
            var $v_1 = $v_0.queryState;
            if (!Srch.U.n($v_1)) {
                this.$37_3($v_1, Srch.DataProvider.$4I($v_0, 1));
                this.$3_2('SearchBox_QueryReady', 'Query is \'{0}\'', this.$2_3.k);
                if (this.$u_3) {
                    this.$1_2('SearchBox_QueryReady', 'Batching mode');
                    Srch.U.appendArray($v_0.batchDataProviders, this);
                }
                else {
                    this.$1_2('SearchBox_QueryReady', 'Non batching mode');
                    this.issueQuery();
                }
            }
        }
    },
    
    clearResults: function Srch_DataProvider$clearResults() {
        var $v_0 = new Srch.QueryEventArgs(this.$2_3);
        $v_0.result = {};
        $v_0.skipSearch = true;
        this.$2o_3('ClearResults', $v_0);
    },
    
    searchBox_BatchQueryIssuing: function Srch_DataProvider$searchBox_BatchQueryIssuing(sender, e) {
        this.$1_2('SearchBox_BatchQueryIssuing', '');
        if (this.$u_3) {
            this.$3_2('SearchBox_BatchQueryIssuing', 'Passing batched event along for query group \'{0}\'', this.$5_3);
            var $v_0 = new Srch.QueryEventArgs(this.$2_3);
            this.raiseQueryIssuingEvent($v_0);
            var $v_1 = $v_0.result;
            if (!Srch.U.n($v_1) || $v_0.skipSearch) {
                var $v_2 = e;
                Srch.U.removeArray($v_2.batchDataProviders, this);
                this.$2o_3('SearchBox_BatchQueryIssuing', $v_0);
            }
        }
    },
    
    searchBox_BatchResultReady: function Srch_DataProvider$searchBox_BatchResultReady(sender, e) {
        this.$1_2('SearchBox_BatchResultReady', '');
        if (this.$u_3 && !this.$26_3) {
            var $v_0 = e;
            if (!Srch.U.n($v_0)) {
                this.$3_2('SearchBox_BatchResultReady', 'Passing batched event along for query group \'{0}\'', this.$5_3);
                this.$4b_3($v_0.results);
            }
        }
    },
    
    $5P_3: function Srch_DataProvider$$5P_3() {
        var $v_0 = null;
        this.$3_2('GetNavigateQueryState', 'Getting hash value with key \'{0}\'...', this.$5_3);
        var $v_1 = ajaxNavigate.getParam(this.$5_3);
        if (Srch.U.e($v_1)) {
            this.$3_2('GetNavigateQueryState', 'Getting hash value with key \'{0}\'...', '__');
            $v_1 = ajaxNavigate.getParam('__');
        }
        if (Srch.U.e($v_1)) {
            this.$1_2('GetNavigateQueryState', 'Did not find query group hash value');
            $v_0 = Srch.QueryState.$5C();
        }
        else {
            this.$3_2('GetNavigateQueryState', 'Found hash value with key \'{0}\'...', this.$5_3);
            $v_0 = new Srch.QueryState();
            $v_0.copyFrom(this.$2_3, 0);
            var $v_2 = null;
            try {
                $v_2 = Srch.ParseJSONUtil.parseObjectFromJsonString($v_1);
            }
            catch ($v_3) {
                this.$3_2('GetNavigateQueryState', 'Could not deserialize json string: {0} error: {1}', $v_1, $v_3.message);
                return $v_0;
            }
            if (Srch.U.n($v_2)) {
                this.$1_2('GetNavigateQueryState', 'Did not find valid navigation state.');
                return $v_0;
            }
            else {
                this.$1_2('GetNavigateQueryState', 'Found valid navigation state.');
                $v_0.copyFrom($v_2, 0);
            }
        }
        return $v_0;
    },
    
    $4y_3: function Srch_DataProvider$$4y_3($p0, $p1) {
        if (Srch.U.n($p0)) {
            this.$1_2('Update', 'load');
        }
        else {
            this.$1_2('Update', 'ajaxNav');
            if (!this.$2I_3) {
                this.$1_2('Update', 'Ajax navigate ignored');
                return;
            }
        }
        var $v_0 = this.$5P_3();
        if (!Srch.U.n($v_0)) {
            if (!Srch.U.isPageInMdsMode()) {
                var $v_1 = Srch.U.getParentElementByName(this.get_element(), 'FORM');
                if (!Srch.U.n($v_1)) {
                    this.$3_2('Update', 'Changing form action from \'{0}\' to \'{1}\'...', $v_1.action, window.location.href);
                    $v_1.action = window.location.href;
                }
            }
            if (!this.$2_3.equalsTo($v_0)) {
                this.$1_2('Update', 'Change current state to navigate state');
                this.$37_3($v_0, 0);
                this.issueQuery();
                return;
            }
            else {
                this.$1_2('Update', 'State did not change');
            }
        }
        else {
            this.$1_2('Update', 'Display initial result');
            this.processInitial();
        }
    },
    
    processInitial: function Srch_DataProvider$processInitial() {
        this.$1_2('ProcessInitial', 'ProcessInitial');
        if (this.$2_3.equalsTo(this.get_initialQueryState())) {
            this.$1_2('ProcessInitial', 'Already at initial state.');
            return;
        }
        this.$37_3(this.get_initialQueryState(), 0);
        var $v_0 = this.get_initialResultObject();
        if (!Srch.U.n($v_0)) {
            var $v_1 = new Srch.QueryEventArgs(this.$2_3);
            this.raiseQueryIssuingEvent($v_1);
            var $v_2 = $v_1.result;
            if (!Srch.U.n($v_2) || $v_1.skipSearch) {
                this.$2o_3('ProcessInitial', $v_1);
                return;
            }
            var $v_3 = Srch.ControlMessage.getIfControlMessage($v_0);
            if ($v_3) {
                this.$3_2('ProcessInitial', 'Server query failed: {0}', $v_3.toString());
                this.$2n_3($v_3);
            }
            else {
                var $v_4 = $v_0['QueryErrors'];
                if (!Srch.U.n($v_4)) {
                    this.$3_2('ProcessInitial', 'Looking for query error with key \'{0}\'', this.$5_3);
                    var $v_6 = Srch.ControlMessage.getIfControlMessage($v_4[this.$5_3]);
                    if (!Srch.U.n($v_6)) {
                        this.$3_2('ProcessInitial', 'Server query failed: {0}', $v_6.toString());
                        this.$2n_3($v_6);
                        return;
                    }
                }
                this.$1_2('ProcessInitial', 'Show initial result');
                var $v_5 = new Srch.ResultEventArgs($v_0);
                this.raiseResultReadyEvent($v_5);
            }
        }
        else {
            this.$1_2('ProcessInitial', 'Execute initial query');
            this.issueQuery();
        }
    },
    
    $37_3: function Srch_DataProvider$$37_3($p0, $p1) {
        this.$2_3.copyFrom($p0, $p1);
        var $v_0 = new Srch.QueryEventArgs(this.$2_3);
        this.raiseQueryStateChangedEvent($v_0);
    },
    
    issueQuery: function Srch_DataProvider$issueQuery() {
        var $v_0 = new SP.CScope('DataProvider.IssueQuery');
        $v_0.start();
        Srch.U.ensureNotNullOrUndefined(this.$2_3, this, 'IssueQuery', 'this.CurrentQueryState');
        this.$1_2('IssueQuery', null);
        var $v_1 = new Srch.QueryEventArgs(this.$2_3);
        this.raiseQueryIssuingEvent($v_1);
        var $v_2 = $v_1.result;
        if (!Srch.U.n($v_2) || $v_1.skipSearch) {
            this.$2o_3('IssueQuery', $v_1);
            return;
        }
        EnsureScript('sp.search.js', TypeofFullName('Microsoft.SharePoint.Client.Search.Query.KeywordQuery'), this.$$d_$5X_3);
        $v_0.stop();
    },
    
    $5X_3: function Srch_DataProvider$$5X_3() {
        var $v_0 = Srch.ScriptApplicationManager.get_clientRuntimeContext();
        var $v_1 = [];
        var $v_2 = [];
        var $v_3 = Microsoft.SharePoint.Client.Search.Query.KeywordQuery.newObject($v_0);
        this.$1_2('IssueQueryHelper', '*****Building query*****');
        Srch.U.fillKeywordQuery($v_3, this);
        Srch.U.appendArray($v_1, $v_3);
        Srch.U.appendArray($v_2, this.get_$4W_3());
        $v_0.set_requestTimeout(600000);
        var $v_4 = Microsoft.SharePoint.Client.Search.Query.SearchExecutor.newObject($v_0);
        var $v_5 = new SP.ExceptionHandlingScope($v_0);
        var $v_6 = null;
        var $v_7 = null;
        var $v_8 = null;
        var $v_9 = null;
        try {
            $v_6 = $v_5.startScope();
            try {
                $v_7 = $v_5.startTry();
                $v_9 = $v_4.executeQueries($v_2, $v_1, true);
            }
            finally {
                if (!Srch.U.n($v_7)) {
                    $v_7.dispose();
                }
            }
            try {
                $v_8 = $v_5.startCatch();
            }
            finally {
                if (!Srch.U.n($v_8)) {
                    $v_8.dispose();
                }
            }
        }
        finally {
            if (!Srch.U.n($v_6)) {
                $v_6.dispose();
            }
        }
        this.$1_2('IssueQueryHelper', '*****Connecting to server*****');
        var $$t_G = this, $$t_H = this;
        $v_0.executeQueryAsync(function($p1_0, $p1_1) {
            if ($v_5.get_hasException()) {
                $$t_G.$1_2('IssueQueryHelper', '*****failure*****');
                var $v_A = Srch.ControlMessage.getFromExceptionHandlingScope($v_5);
                $$t_G.$4v_3($v_3, $v_A);
            }
            else {
                $$t_G.$1_2('IssueQueryHelper', '*****Success*****');
                if (!Srch.U.n($v_9)) {
                    $$t_G.$4b_3($v_9.get_value());
                }
            }
        }, function($p1_0, $p1_1) {
            $$t_H.$1_2('IssueQueryHelper', '*****failure*****');
            if (!Srch.U.n($p1_1)) {
                var $v_B = Srch.ControlMessage.getFromClientRequestFailedEventArgs($p1_1);
                $$t_H.$4v_3($v_3, $v_B);
            }
        });
    },
    
    $2o_3: function Srch_DataProvider$$2o_3($p0, $p1) {
        if ($p1.skipSearch) {
            if (Srch.U.n($p1.result)) {
                $p1.result = {};
            }
            this.$1_2($p0, 'Handler requested to skip the search.');
        }
        else {
            this.$1_2($p0, 'Result provided by handler.');
        }
        this.$26_3 = true;
        var $v_0 = new Srch.ResultEventArgs($p1.result);
        $v_0.searchSkipped = $p1.skipSearch;
        this.raiseResultReadyEvent($v_0);
    },
    
    $4v_3: function Srch_DataProvider$$4v_3($p0, $p1) {
        if (!Srch.U.n($p0) && !Srch.U.n($p1)) {
            var $v_0 = '';
            try {
                $v_0 = $p0.get_queryText();
            }
            catch ($v_1) {
                this.$3_2('TraceIssueQueryFailureAndProcessErrorResult', 'Could not retrieve query text for logging the error due to \'{0}\'', $v_1.toString());
            }
            this.$3_2('TraceIssueQueryFailureAndProcessErrorResult', 'Executing query \'{0}\' failed: {1}', $v_0, $p1.toString());
            this.$2n_3($p1);
        }
    },
    
    $4b_3: function Srch_DataProvider$$4b_3($p0) {
        this.$3_2('RaiseResultReadyEventIfNeeded', 'Looking for result with request ID \'{0}\' for query group \'{1}\'', this.get_$25_3(), this.$5_3);
        if (!Srch.U.n($p0)) {
            var $v_0 = SP.Guid.get_empty().toString().length;
            var $$dict_2 = $p0;
            for (var $$key_3 in $$dict_2) {
                var $v_1 = { key: $$key_3, value: $$dict_2[$$key_3] };
                if (!Srch.U.w($v_1.key)) {
                    this.$3_2('RaiseResultReadyEventIfNeeded', 'examining result with request ID \'{0}\'', $v_1.key);
                    if ($v_1.key === '__' || $v_1.key === this.get_$25_3()) {
                        var $v_2 = $v_1.value;
                        if (!Srch.U.n($v_2)) {
                            var $v_3 = $v_2['QueryErrors'];
                            if (!Srch.U.n($v_3)) {
                                this.$3_2('RaiseResultReadyEventIfNeeded', 'Looking for query error with key \'{0}\'', this.get_$25_3());
                                var $v_5 = Srch.ControlMessage.getIfControlMessage($v_3[this.get_$25_3()]);
                                if (Srch.U.n($v_5)) {
                                    this.$3_2('RaiseResultReadyEventIfNeeded', 'Looking for query error with key \'{0}\'', '__');
                                    $v_5 = Srch.ControlMessage.getIfControlMessage($v_3['__']);
                                }
                                if (!Srch.U.n($v_5)) {
                                    this.$1_2('RaiseResultReadyEventIfNeeded', 'Found query error');
                                    this.$2n_3($v_5);
                                    return;
                                }
                            }
                            this.$1_2('RaiseResultReadyEventIfNeeded', 'Found result');
                            var $v_4 = new Srch.ResultEventArgs($v_1.value);
                            this.raiseResultReadyEvent($v_4);
                            return;
                        }
                    }
                    else if ($v_1.key.length >= $v_0) {
                        var $v_6 = $v_1.key.substr($v_0);
                        if ($v_6 === this.$5_3) {
                            this.$1_2('RaiseResultReadyEventIfNeeded', 'Found stale result');
                            return;
                        }
                    }
                }
            }
        }
        this.$1_2('RaiseResultReadyEventIfNeeded', 'No result found');
        this.raiseEmptyResultReadyEvent();
    },
    
    $2n_3: function Srch_DataProvider$$2n_3($p0) {
        if (!this.$26_3) {
            Srch.U.appendArray(this.get_messages(), $p0);
            this.raiseEmptyResultReadyEvent();
        }
    },
    
    displayControlMessages: function Srch_DataProvider$displayControlMessages() {
    },
    
    raiseEmptyResultReadyEvent: function Srch_DataProvider$raiseEmptyResultReadyEvent() {
        this.$1_2('RaiseEmptyResultReadyEvent', 'Empty result is ready');
        var $v_0 = new Srch.ResultEventArgs({});
        this.raiseResultReadyEvent($v_0);
    },
    
    getSortRankName: function Srch_DataProvider$getSortRankName() {
        if (!Srch.U.n(this.$2_3.m) && Srch.U.n(this.$2_3.o)) {
            if (this.$2_3.m === Srch.DataProvider.$1x || this.$2_3.m === Srch.DataProvider.$1k || this.$2_3.m === Srch.DataProvider.$2f) {
                return Srch.Res.rs_SocialDistanceSort;
            }
        }
        return this.getSortName();
    },
    
    getSortName: function Srch_DataProvider$getSortName() {
        if (!Srch.U.n(this.$2_3.o) && !Srch.U.n(this.$S_3)) {
            for (var $v_0 = 0; $v_0 < this.$S_3.length; $v_0++) {
                var $v_1 = this.$S_3[$v_0];
                if (!Srch.U.n($v_1) && !Srch.U.n($v_1.sorts)) {
                    if (this.$2_3.o.length === $v_1.sorts.length) {
                        var $v_2 = true;
                        for (var $v_3 = 0; $v_3 < $v_1.sorts.length; $v_3++) {
                            var $v_4 = this.$2_3.o[$v_3];
                            var $v_5 = $v_1.sorts[$v_3];
                            if (!$v_4 && !$v_5) {
                                $v_2 = true;
                            }
                            else if (!$v_4 || !$v_5) {
                                $v_2 = false;
                                break;
                            }
                            else if ($v_4.p !== $v_5.p || $v_4.d !== $v_5.d) {
                                $v_2 = false;
                                break;
                            }
                        }
                        if ($v_2) {
                            return $v_1.name;
                        }
                    }
                }
            }
        }
        return null;
    }
}


Srch.DisplayControl = function Srch_DisplayControl(elem) {
    this.$$d_dataProvider_ResultReady = Function.createDelegate(this, this.dataProvider_ResultReady);
    this.$$d_dataProvider_QueryIssuing = Function.createDelegate(this, this.dataProvider_QueryIssuing);
    this.$1D_3 = [];
    Srch.DisplayControl.initializeBase(this, [ elem ]);
}
Srch.DisplayControl.prototype = {
    
    get_queryGroupName: function Srch_DisplayControl$get_queryGroupName() {
        return this.$5_3;
    },
    
    set_queryGroupName: function Srch_DisplayControl$set_queryGroupName(value) {
        this.$5_3 = value;
        return value;
    },
    
    $5_3: '',
    
    get_dataProvider: function Srch_DisplayControl$get_dataProvider() {
        if (Srch.U.n(this.$2P_3)) {
            var $v_0 = Srch.ScriptApplicationManager.get_current().queryGroups[this.$5_3];
            if (!Srch.U.n($v_0)) {
                this.$2P_3 = $v_0.dataProvider;
            }
        }
        return this.$2P_3;
    },
    
    $2P_3: null,
    
    get_renderedResult: function Srch_DisplayControl$get_renderedResult() {
        return this.$G_3;
    },
    
    set_renderedResult: function Srch_DisplayControl$set_renderedResult(value) {
        this.$G_3 = value;
        return value;
    },
    
    $G_3: false,
    
    get_shouldShowNoResultMessage: function Srch_DisplayControl$get_shouldShowNoResultMessage() {
        return !this.$G_3;
    },
    
    get_currentResultTableCollection: function Srch_DisplayControl$get_currentResultTableCollection() {
        return this.$A_3;
    },
    
    set_currentResultTableCollection: function Srch_DisplayControl$set_currentResultTableCollection(value) {
        this.$A_3 = value;
        return value;
    },
    
    $A_3: null,
    
    get_emptyMessage: function Srch_DisplayControl$get_emptyMessage() {
        return this.$3E_3;
    },
    
    set_emptyMessage: function Srch_DisplayControl$set_emptyMessage(value) {
        this.$3E_3 = value;
        return value;
    },
    
    $3E_3: '',
    
    get_searchSkipped: function Srch_DisplayControl$get_searchSkipped() {
        return this.$3i_3;
    },
    
    $3i_3: false,
    
    scriptApplication_PreLoad: function Srch_DisplayControl$scriptApplication_PreLoad(sender, e) {
        this.$1_2('ScriptApplication_PreLoad', 'DisplayControl');
        var $v_0 = this.get_dataProvider();
        if (!Srch.U.n($v_0)) {
            var $v_1 = this.$$d_dataProvider_QueryIssuing;
            $v_0.add_queryIssuing($v_1);
            Srch.U.appendArray(this.listenedEvents, new Srch.ListenedEvent($v_0, 2, $v_1));
            $v_1 = this.$$d_dataProvider_ResultReady;
            $v_0.add_resultReady($v_1);
            Srch.U.appendArray(this.listenedEvents, new Srch.ListenedEvent($v_0, 4, $v_1));
        }
        else if (!Srch.U.n(this.get_messages()) && this.get_messages().length > 0) {
            this.displayControlMessages();
        }
        Srch.ClientControl.prototype.scriptApplication_PreLoad.call(this, sender, e);
    },
    
    scriptApplication_PostLoad: function Srch_DisplayControl$scriptApplication_PostLoad(sender, e) {
        this.$1_2('ScriptApplication_PostLoad', 'DisplayControl');
        this.loadServerTemplateScripts();
        Srch.ClientControl.prototype.scriptApplication_PostLoad.call(this, sender, e);
    },
    
    serverTemplateScriptsCallback: function Srch_DisplayControl$serverTemplateScriptsCallback() {
        Srch.ClientControl.prototype.serverTemplateScriptsCallback.call(this);
        if (!Srch.U.n(this.$A_3)) {
            this.$1_2('ServerTemplateScriptsCallback', 'Delay load control render');
            this.render();
        }
    },
    
    add_queryReady: function Srch_DisplayControl$add_queryReady(value) {
        this.get_events().addHandler(Srch.EventType.toString(1), value);
    },
    
    remove_queryReady: function Srch_DisplayControl$remove_queryReady(value) {
        this.get_events().removeHandler(Srch.EventType.toString(1), value);
    },
    
    raiseQueryReadyEvent: function Srch_DisplayControl$raiseQueryReadyEvent(arg) {
        this.$1_2('RaiseQueryReadyEvent', '');
        var $v_0 = this.get_events().getHandler(Srch.EventType.toString(1));
        if (!Srch.U.n($v_0)) {
            $v_0(this, arg);
        }
        Srch.ScriptApplicationManager.get_current().$3z_1();
    },
    
    add_resultRendered: function Srch_DisplayControl$add_resultRendered(value) {
        this.get_events().addHandler(Srch.EventType.toString(7), value);
    },
    
    remove_resultRendered: function Srch_DisplayControl$remove_resultRendered(value) {
        this.get_events().removeHandler(Srch.EventType.toString(7), value);
    },
    
    raiseResultRenderedEvent: function Srch_DisplayControl$raiseResultRenderedEvent(arg) {
        this.$1_2('RaiseResultRenderedEvent', '');
        var $v_0 = this.get_events().getHandler(Srch.EventType.toString(7));
        if (!SP.ScriptUtility.isNullOrUndefined($v_0)) {
            $v_0(this, arg);
        }
        this.raiseOneTimeResultRenderedEvent(arg);
    },
    
    add_oneTimeResultRendered: function Srch_DisplayControl$add_oneTimeResultRendered(value) {
        this.get_events().addHandler('OneTimeResultRendered', value);
        Srch.U.appendArray(this.$1D_3, value);
    },
    
    remove_oneTimeResultRendered: function Srch_DisplayControl$remove_oneTimeResultRendered(value) {
        this.get_events().removeHandler(Srch.EventType.toString(7), value);
    },
    
    raiseOneTimeResultRenderedEvent: function Srch_DisplayControl$raiseOneTimeResultRenderedEvent(arg) {
        this.$1_2('RaiseOneTimeResultRendered', '');
        var $v_0 = this.get_events().getHandler('OneTimeResultRendered');
        if (!SP.ScriptUtility.isNullOrUndefined($v_0)) {
            $v_0(this, arg);
        }
        if (!Srch.U.n(this.$1D_3)) {
            for (var $v_1 = 0; $v_1 < this.$1D_3.length; $v_1++) {
                var $v_2 = this.$1D_3[$v_1];
                this.get_events().removeHandler('OneTimeResultRendered', $v_2);
            }
        }
        this.$1D_3 = [];
    },
    
    clearAllRefiners: function Srch_DisplayControl$clearAllRefiners() {
        var $v_0 = new Srch.QueryState();
        $v_0.r = new Array(0);
        $v_0.s = 1;
        var $v_1 = new Srch.QueryEventArgs($v_0);
        $v_1.userAction = 3;
        this.raiseQueryReadyEvent($v_1);
    },
    
    refresh: function Srch_DisplayControl$refresh(qs) {
        if (!Srch.U.n(qs)) {
            var $v_0 = new Srch.QueryEventArgs(qs);
            $v_0.userAction = 0;
            this.raiseQueryReadyEvent($v_0);
        }
    },
    
    dataProvider_QueryIssuing: function Srch_DisplayControl$dataProvider_QueryIssuing(sender, e) {
        this.$1_2('DataProvider_QueryIssuing', '');
        var $v_0 = e;
        if (!Srch.U.n($v_0)) {
            this.processQueryIssuing($v_0.queryState);
        }
    },
    
    dataProvider_ResultReady: function Srch_DisplayControl$dataProvider_ResultReady(sender, e) {
        this.$1_2('DataProvider_ResultReady', '');
        var $v_0 = e;
        this.$3i_3 = $v_0.searchSkipped;
        if (!Srch.U.n($v_0)) {
            this.processResultReady($v_0.result);
        }
    },
    
    processQueryIssuing: function Srch_DisplayControl$processQueryIssuing(qs) {
        this.$A_3 = null;
    },
    
    processResultReady: function Srch_DisplayControl$processResultReady(resultTableCollection) {
        this.$A_3 = resultTableCollection;
        if (Srch.U.n(this.serverTemplateScriptsToLoad) || this.serverTemplateScriptsToLoad.length < 1) {
            this.$1_2('ProcessResultReady', 'Inline control render');
            this.render();
        }
    },
    
    render: function Srch_DisplayControl$render() {
        this.$G_3 = false;
        this.renderControl(this.$A_3, this.get_dataProvider());
    }
}


Srch.Refinement = function Srch_Refinement(elem) {
    this.$$d_$52_4 = Function.createDelegate(this, this.$52_4);
    this.$3Y_4 = {};
    Srch.Refinement.initializeBase(this, [ elem ]);
}
Srch.Refinement.$1q = function Srch_Refinement$$1q($p0, $p1) {
    if (!Srch.U.n($p0)) {
        if (!Srch.U.n($p1) && $p1.length > 0) {
            for (var $v_0 = 0; $v_0 < $p1.length; $v_0++) {
                var $v_1 = $p1[$v_0];
                if (!Srch.U.n($v_1) && $p0 === $v_1.n) {
                    return $v_1;
                }
            }
        }
    }
    return null;
}
Srch.Refinement.createRefinementTextbox = function Srch_Refinement$createRefinementTextbox(name) {
    var $v_0 = document.createElement('div');
    var $v_1 = document.createElement('input');
    $v_1.type = 'text';
    $v_1.name = name + '_txtGroup';
    $v_1.className = 'ms-ref-refineritem';
    $v_0.appendChild($v_1);
    var $v_2 = $get(name + '_SpecifiedValue');
    var $v_3 = $v_2.parentNode;
    $v_3.insertBefore($v_0, $v_2);
    return $v_1;
}
Srch.Refinement.submitMultiRefinement = function Srch_Refinement$submitMultiRefinement(name, control, useContains, useKQL) {
    var $v_0 = control;
    var $v_1;
    var $$t_7, $$t_8;
    var $v_2 = (($$t_8 = Srch.Refinement.$4G(name, $v_0, useContains, ($$t_7 = {'val': $v_1}))), $v_1 = $$t_7.val, $$t_8);
    $v_0.updateRefinementFilters(name, $v_2, 'OR', useKQL, $v_1);
}
Srch.Refinement.$4G = function Srch_Refinement$$4G($p0, $p1, $p2, $p3) {
    Srch.U.ensureNotNullOrUndefined($p1, null, 'SubmitMultiRefinement', 'control');
    var $v_0 = document.getElementsByName($p0 + '_ChkGroup');
    var $v_1 = document.getElementsByName($p0 + '_txtGroup');
    var $v_2 = [];
    $p3.val = {};
    var $v_3 = null;
    var $v_4 = $p1.getCurrentRefinementCategory($p0);
    if (!Srch.U.n($v_4)) {
        $v_3 = $v_4.m;
    }
    for (var $v_5 = 0; $v_5 < $v_0.length; $v_5++) {
        if (($v_0[$v_5]).checked) {
            var $v_6 = ($v_0[$v_5]).value;
            var $v_7 = (($v_0[$v_5]).getAttribute('data-displayValue'));
            Srch.U.appendArray($v_2, $v_6);
            var $v_8 = !Srch.U.n($v_3) && !Srch.U.e($v_3[$v_6]);
            $p3.val[$v_6] = $v_7;
        }
    }
    for (var $v_9 = 0; $v_9 < $v_1.length; $v_9++) {
        var $v_A = ($v_1[$v_9]).value;
        if (!Srch.U.w($v_A)) {
            var $v_B = (!Srch.U.n($p2) && $p2) ? Srch.Refinement.ensureUserSpecifiedRefinerValueHasWhiteSpaceQuotes($v_A) : Srch.RefinementUtil.stringValueToEqualsToken($v_A);
            Srch.U.appendArray($v_2, $v_B);
            $p3.val[$v_B] = (!Srch.U.n($p2) && $p2) ? Srch.Refinement.ensureUserSpecifiedRefinerValueHasWhiteSpaceQuotes($v_A) : $v_A;
        }
    }
    return $v_2;
}
Srch.Refinement.ensureUserSpecifiedRefinerValueHasWhiteSpaceQuotes = function Srch_Refinement$ensureUserSpecifiedRefinerValueHasWhiteSpaceQuotes(inputText) {
    if (!Srch.U.w(inputText)) {
        var $v_0 = inputText.match(Srch.Refinement.$50);
        var $v_1 = Srch.U.isArray($v_0) && $v_0.length > 0 && $v_0[0] === inputText;
        if (!$v_1) {
            return String.format('\"{0}\"', Srch.RefinementUtil.escapeTokenStringValue(inputText));
        }
    }
    return inputText;
}
Srch.Refinement.getRefinementLocalizedTitle = function Srch_Refinement$getRefinementLocalizedTitle(propertyName) {
    return Srch.U.$B('rf_RefinementTitle_' + propertyName, false);
}
Srch.Refinement.getRefinementTitle = function Srch_Refinement$getRefinementTitle(currentRefinemntControl) {
    var $v_0 = '';
    if (!Srch.U.n(currentRefinemntControl) && !Srch.U.e(currentRefinemntControl.propertyName)) {
        var $v_1 = currentRefinemntControl.propertyName;
        $v_0 = currentRefinemntControl.overrideDisplayName;
        if (Srch.U.e($v_0)) {
            $v_0 = Srch.Refinement.getRefinementLocalizedTitle($v_1);
        }
        if (Srch.U.e($v_0)) {
            $v_0 = $v_1;
        }
    }
    return $v_0;
}
Srch.Refinement.getExpanded = function Srch_Refinement$getExpanded(filterName) {
    var $v_0 = 'refinementExpandCookieName_' + filterName;
    var $v_1 = document.cookie;
    if (!Srch.U.e($v_1)) {
        var $v_2 = $v_1.indexOf($v_0 + '=');
        if ($v_2 !== -1) {
            $v_2 = $v_2 + $v_0.length + 1;
            var $v_3 = $v_1.indexOf(';', $v_2);
            if ($v_3 === -1) {
                $v_3 = $v_1.length;
            }
            var $v_4 = $v_1.substring($v_2, $v_3);
            if (!Srch.U.n($v_4)) {
                $v_4 = unescape($v_4);
            }
            return $v_4;
        }
    }
    return 'true';
}
Srch.Refinement.setExpanded = function Srch_Refinement$setExpanded(filterName, value) {
    if (!Srch.U.n(value)) {
        var $v_0 = 'refinementExpandCookieName_' + filterName;
        var $v_1 = new Date();
        $v_1.setDate($v_1.getDate() + 30);
        document.cookie = $v_0 + '=' + escape(value) + ';expires=' + $v_1.toUTCString();
    }
}
Srch.Refinement.multiRefinerSpecifyOtherFilterValue = function Srch_Refinement$multiRefinerSpecifyOtherFilterValue(refinerName, clientControl, useContains, useKQL) {
    var $v_0 = Srch.Refinement.createRefinementTextbox(refinerName);
    Srch.U.addHandler($v_0, 'keypress', function($p1_0) {
        if (Srch.U.isEnterKey(String.fromCharCode($p1_0.charCode))) {
            Srch.Refinement.submitMultiRefinement(refinerName, clientControl, useContains, useKQL);
        }
    });
    $v_0.focus();
}
Srch.Refinement.prototype = {
    
    get_selectedRefinementControls: function Srch_Refinement$get_selectedRefinementControls() {
        return this.$7_4;
    },
    
    set_selectedRefinementControls: function Srch_Refinement$set_selectedRefinementControls(value) {
        this.$7_4 = value;
        return value;
    },
    
    $7_4: null,
    
    get_hideApplyForMultiValueFilter: function Srch_Refinement$get_hideApplyForMultiValueFilter() {
        return this.$2c_4;
    },
    
    set_hideApplyForMultiValueFilter: function Srch_Refinement$set_hideApplyForMultiValueFilter(value) {
        this.$2c_4 = value;
        return value;
    },
    
    $2c_4: false,
    
    get_useManagedNavigationRefiners: function Srch_Refinement$get_useManagedNavigationRefiners() {
        return this.$3u_4;
    },
    
    set_useManagedNavigationRefiners: function Srch_Refinement$set_useManagedNavigationRefiners(value) {
        this.$3u_4 = value;
        return value;
    },
    
    $3u_4: false,
    
    get_emptyRefinementMessageId: function Srch_Refinement$get_emptyRefinementMessageId() {
        if (Srch.U.e(this.$1d_4)) {
            this.$1d_4 = this.get_nextUniqueId() + 'EmptyRefinement';
        }
        return this.$1d_4;
    },
    
    set_emptyRefinementMessageId: function Srch_Refinement$set_emptyRefinementMessageId(value) {
        this.$1d_4 = value;
        return value;
    },
    
    $1d_4: '',
    
    addRefinementProperty: function Srch_Refinement$addRefinementProperty(name, useKql, useContains, op) {
        var $v_0 = new Srch.Refinement.RefinerOptions();
        $v_0.useKql = useKql;
        $v_0.useContains = useContains;
        $v_0.op = op;
        this.$3Y_4[name] = $v_0;
    },
    
    $52_4: function Srch_Refinement$$52_4($p0, $p1) {
    },
    
    $5H_4: function Srch_Refinement$$5H_4() {
        if (Srch.U.n(this.alternateRenderer)) {
            var $v_0 = false;
            if (!Srch.U.n(this.$7_4)) {
                for (var $v_1 = 0; $v_1 < this.$7_4.length; $v_1++) {
                    if (!Srch.U.n(this.$7_4[$v_1]) && !Srch.U.n(this.$7_4[$v_1].alternateRenderer)) {
                        $v_0 = true;
                        break;
                    }
                }
            }
            if ($v_0) {
                this.alternateRenderer = this.$$d_$52_4;
            }
        }
    },
    
    scriptApplication_PreLoad: function Srch_Refinement$scriptApplication_PreLoad(sender, e) {
        this.$1_2('ScriptApplication_PreLoad', 'Refinement');
        if (!Srch.U.n(this.$7_4) && this.$7_4.length > 0) {
            for (var $v_0 = 0; $v_0 < this.$7_4.length; $v_0++) {
                var $v_1 = this.$7_4[$v_0];
                if (!Srch.U.n($v_1)) {
                    var $v_2 = Srch.ValueInfo.ValueTypeHandler.$4A($v_1.propertyName);
                    $v_2 = (Srch.U.w($v_2)) ? $v_1.renderTemplateId : $v_2;
                    if (this.$10_2 || ($v_2 !== $v_1.renderTemplateId)) {
                        Srch.U.appendScriptsToLoad(this.serverTemplateScriptsToLoad, $v_2);
                    }
                }
            }
        }
        Srch.DisplayControl.prototype.scriptApplication_PreLoad.call(this, sender, e);
    },
    
    render: function Srch_Refinement$render() {
        this.$5H_4();
        Srch.DisplayControl.prototype.render.call(this);
        if (!Srch.U.n(this.$7_4)) {
            for (var $v_1 = 0; $v_1 < this.$7_4.length; $v_1++) {
                this.$5s_4(this.$7_4[$v_1]);
            }
        }
        var $v_0 = $get(this.get_emptyRefinementMessageId());
        if (!Srch.U.n($v_0)) {
            if (this.get_shouldShowNoResultMessage()) {
                Srch.U.ensureCSSClassNameNotExist($v_0, 'ms-hide');
            }
            else {
                Srch.U.ensureCSSClassNameExist($v_0, 'ms-hide');
            }
        }
        this.updateDisplayControlWithNewMessages();
        this.raiseResultRenderedEvent(new Srch.ResultEventArgs(this.$A_3));
    },
    
    $5s_4: function Srch_Refinement$$5s_4($p0) {
        var $v_0 = new SP.CScope('Refinement.RenderRefinementControl');
        $v_0.start();
        if (!Srch.U.n($p0)) {
            var $v_1 = null;
            var $v_2 = $p0.containerId;
            if (Srch.U.n($v_2) || Srch.U.w($v_2)) {
                this.$3_2('RenderRefinementControl', 'Missing refinement container ID for: ({0})', $p0.propertyName);
                $v_0.stop();
                return;
            }
            var $v_3 = $get($p0.containerId);
            if (Srch.U.n($v_3)) {
                this.$3_2('RenderRefinementControl', 'Missing refinement container DOM element for: {0}({1})', $v_2, $p0.propertyName);
                $v_0.stop();
                return;
            }
            if (Srch.U.n($p0.alternateRenderContext)) {
                $p0.alternateRenderContext = {};
            }
            if (!Srch.U.n(this.get_dataProvider().$n_3)) {
                $v_1 = this.get_dataProvider().$n_3[$p0.propertyName];
            }
            if ((!Srch.U.n($v_1) && $v_1.length > 0) || this.hasRefinementCategory($p0.propertyName)) {
                this.$G_3 = true;
            }
            var $v_4 = {};
            if (!Srch.U.n($p0.alternateRenderer)) {
                $v_4 = $p0.alternateRenderContext;
                $p0.alternateRenderContext['ListData'] = $v_1;
                $p0.alternateRenderContext['ClientControl'] = this;
                $p0.alternateRenderContext['RefinementControl'] = $p0;
                $p0.alternateRenderContext['DataProvider'] = this.get_dataProvider();
                $p0.alternateRenderContext['ScriptApplicationManager'] = Srch.ScriptApplicationManager.get_current();
                this.invokeAlternateRender($p0.alternateRenderer, $v_3, $p0.alternateRenderContext);
            }
            else {
                $v_4['ResolveTemplate'] = Srch.U.resolveRenderTemplate;
                $v_4['ListData'] = $v_1;
                $v_4['ClientControl'] = this;
                $v_4['RefinementControl'] = $p0;
                $v_4['DataProvider'] = this.get_dataProvider();
                $v_4['ScriptApplicationManager'] = Srch.ScriptApplicationManager.get_current();
                this.invokeClientRenderer($v_3, $v_4);
            }
            this.processRenderingErrorMessages($v_4);
        }
        $v_0.stop();
    },
    
    addRefinementFilter: function Srch_Refinement$addRefinementFilter(filterName, filterToken) {
        var $v_0 = {};
        var $v_1 = [];
        Srch.U.appendArray($v_1, filterToken);
        $v_0[filterName] = $v_1;
        this.addRefinementFilters($v_0);
    },
    
    addRefinementFiltersJSON: function Srch_Refinement$addRefinementFiltersJSON(refinersJSON) {
        this.addRefinementFilters((Srch.ParseJSONUtil.parseObjectFromJsonString(refinersJSON)));
    },
    
    addRefinementFiltersJSONWithOr: function Srch_Refinement$addRefinementFiltersJSONWithOr(refinersJSON) {
        this.addRefinementFiltersWithOp((Srch.ParseJSONUtil.parseObjectFromJsonString(refinersJSON)), 'or');
    },
    
    addRefinementFilters: function Srch_Refinement$addRefinementFilters(refiners) {
        this.addRefinementFiltersWithOp(refiners, null);
    },
    
    addRefinementFiltersWithOp: function Srch_Refinement$addRefinementFiltersWithOp(refiners, op) {
        if (Srch.U.n(refiners) || Srch.U.n(this.get_dataProvider())) {
            return;
        }
        var $v_0 = new Srch.QueryState();
        $v_0.r = this.$3M_4(null);
        var $$dict_3 = refiners;
        for (var $$key_4 in $$dict_3) {
            var $v_2 = { key: $$key_4, value: $$dict_3[$$key_4] };
            var $v_3 = $v_2.key;
            var $v_4 = $v_2.value;
            if (Srch.U.e($v_3)) {
                continue;
            }
            var $v_5 = Srch.Refinement.$1q($v_3, $v_0.r);
            if (!Srch.U.n($v_5)) {
                if (!Srch.U.n($v_4)) {
                    for (var $v_6 = 0; $v_6 < $v_4.length; $v_6++) {
                        $v_5.addToken($v_4[$v_6]);
                    }
                }
            }
            else {
                var $v_7 = new Srch.RefinementCategory($v_3);
                $v_7.t = $v_4;
                if (!Srch.U.e(op)) {
                    $v_7.o = op;
                }
                Srch.U.appendArray($v_0.r, $v_7);
            }
        }
        $v_0.s = 1;
        var $v_1 = new Srch.QueryEventArgs($v_0);
        $v_1.userAction = 3;
        this.raiseQueryReadyEvent($v_1);
    },
    
    removeRefinementFilter: function Srch_Refinement$removeRefinementFilter(filterName, filterToken) {
        var $v_0 = {};
        var $v_1 = [];
        Srch.U.appendArray($v_1, filterToken);
        $v_0[filterName] = $v_1;
        this.removeRefinementFilters($v_0);
    },
    
    removeRefinementFiltersJSON: function Srch_Refinement$removeRefinementFiltersJSON(refinersJSON) {
        this.removeRefinementFilters((Srch.ParseJSONUtil.parseObjectFromJsonString(refinersJSON)));
    },
    
    removeRefinementFilters: function Srch_Refinement$removeRefinementFilters(refiners) {
        if (Srch.U.n(refiners) || Srch.U.n(this.get_dataProvider())) {
            return;
        }
        var $v_0 = new Srch.QueryState();
        $v_0.r = this.$3M_4(null);
        var $$dict_2 = refiners;
        for (var $$key_3 in $$dict_2) {
            var $v_2 = { key: $$key_3, value: $$dict_2[$$key_3] };
            var $v_3 = $v_2.key;
            var $v_4 = $v_2.value;
            if (Srch.U.e($v_3)) {
                continue;
            }
            var $v_5 = Srch.Refinement.$1q($v_3, $v_0.r);
            if (!Srch.U.n($v_5) && !Srch.U.n($v_4)) {
                for (var $v_6 = 0; $v_6 < $v_4.length; $v_6++) {
                    $v_5.removeToken($v_4[$v_6]);
                    if (!$v_5.get_tokenCount()) {
                        $v_0.r = this.removeRefinementCategory($v_0.r, $v_3);
                        break;
                    }
                }
            }
        }
        $v_0.s = 1;
        var $v_1 = new Srch.QueryEventArgs($v_0);
        $v_1.userAction = 3;
        this.raiseQueryReadyEvent($v_1);
    },
    
    updateRefinementFilters: function Srch_Refinement$updateRefinementFilters(filterName, filterTokens, op, useKQL, tokenToDisplayValueMap) {
        var $v_0 = {};
        $v_0[filterName] = filterTokens;
        this.updateRefiners($v_0, op, useKQL, tokenToDisplayValueMap);
    },
    
    updateRefinersJSON: function Srch_Refinement$updateRefinersJSON(refinersJSON) {
        this.updateRefiners((Srch.ParseJSONUtil.parseObjectFromJsonString(refinersJSON)), null, false, null);
    },
    
    updateRefiners: function Srch_Refinement$updateRefiners(refiners, op, useKQL, tokenToDisplayValueMap) {
        if (Srch.U.n(refiners) || Srch.U.n(this.get_dataProvider())) {
            return;
        }
        var $v_0 = new Srch.QueryState();
        $v_0.r = this.$3M_4(null);
        this.$4z_4($v_0, refiners, op, useKQL, tokenToDisplayValueMap);
        $v_0.s = 1;
        var $v_1 = new Srch.QueryEventArgs($v_0);
        $v_1.userAction = 3;
        this.raiseQueryReadyEvent($v_1);
    },
    
    $4z_4: function Srch_Refinement$$4z_4($p0, $p1, $p2, $p3, $p4) {
        var $$dict_5 = $p1;
        for (var $$key_6 in $$dict_5) {
            var $v_0 = { key: $$key_6, value: $$dict_5[$$key_6] };
            var $v_1 = $v_0.key;
            var $v_2 = $v_0.value;
            if (Srch.U.e($v_1)) {
                continue;
            }
            $p0.r = this.removeRefinementCategory($p0.r, $v_1);
            if (!Srch.U.n($v_2) && $v_2.length > 0) {
                var $v_3 = new Srch.RefinementCategory($v_1);
                $v_3.t = $v_2;
                if (!Srch.U.e($p2)) {
                    $v_3.o = $p2;
                }
                if (!Srch.U.n($p3)) {
                    $v_3.k = $p3;
                }
                if (!Srch.U.n($p4)) {
                    $v_3.m = $p4;
                }
                Srch.U.appendArray($p0.r, $v_3);
            }
        }
    },
    
    removeRefinementCategory: function Srch_Refinement$removeRefinementCategory(rcs, filterName) {
        var $v_0 = new Array(0);
        if (!Srch.U.n(rcs)) {
            for (var $v_1 = 0; $v_1 < rcs.length; $v_1++) {
                if (rcs[$v_1].n !== filterName) {
                    $v_0[$v_0.length] = rcs[$v_1];
                }
            }
        }
        return $v_0;
    },
    
    replaceRefinementFilter: function Srch_Refinement$replaceRefinementFilter(oldRefinementFilter, newRefinementFilter) {
    },
    
    hasRefinementFilter: function Srch_Refinement$hasRefinementFilter(filterName, filterToken) {
        if (!Srch.U.e(filterName) && !Srch.U.e(filterToken) && !Srch.U.n(this.get_dataProvider())) {
            var $v_0 = Srch.Refinement.$1q(filterName, this.get_dataProvider().$2_3.r);
            if (!Srch.U.n($v_0)) {
                return $v_0.hasToken(filterToken);
            }
            else {
                return false;
            }
        }
        return false;
    },
    
    hasAllRefinementFilters: function Srch_Refinement$hasAllRefinementFilters(filterName, filterTokens) {
        if (Srch.U.n(filterTokens)) {
            return false;
        }
        for (var $v_0 = 0; $v_0 < filterTokens.length; $v_0++) {
            if (!this.hasRefinementFilter(filterName, filterTokens[$v_0])) {
                return false;
            }
        }
        return true;
    },
    
    hasRefinementCategory: function Srch_Refinement$hasRefinementCategory(refinementName) {
        if (!Srch.U.e(refinementName) && !Srch.U.n(this.get_dataProvider())) {
            var $v_0 = Srch.Refinement.$1q(refinementName, this.get_dataProvider().$2_3.r);
            if (!Srch.U.n($v_0)) {
                return true;
            }
            else {
                return false;
            }
        }
        return false;
    },
    
    getCurrentRefinementCategory: function Srch_Refinement$getCurrentRefinementCategory(refinementName) {
        if (!Srch.U.e(refinementName) && !Srch.U.n(this.get_dataProvider())) {
            var $v_0 = Srch.Refinement.$1q(refinementName, this.get_dataProvider().$2_3.r);
            if (!Srch.U.n($v_0)) {
                return $v_0;
            }
            else {
                return null;
            }
        }
        return null;
    },
    
    $3M_4: function Srch_Refinement$$3M_4($p0) {
        var $v_0 = [];
        if (!Srch.U.n(this.get_dataProvider())) {
            var $v_1 = this.get_dataProvider().$2_3.r;
            if (!Srch.U.n($v_1) && $v_1.length > 0) {
                for (var $v_2 = 0; $v_2 < $v_1.length; $v_2++) {
                    var $v_3 = $v_1[$v_2];
                    if (!Srch.U.n($v_3) && $p0 !== $v_3.n) {
                        Srch.U.appendArray($v_0, $v_3);
                    }
                }
            }
        }
        return $v_0;
    },
    
    getRefinementControl: function Srch_Refinement$getRefinementControl(refinerName) {
        if (!Srch.U.n(this.$7_4) && this.$7_4.length > 0 && !Srch.U.e(refinerName)) {
            for (var $v_0 = 0; $v_0 < this.$7_4.length; $v_0++) {
                var $v_1 = this.$7_4[$v_0];
                if (!Srch.U.n($v_1) && $v_1.propertyName === refinerName) {
                    return $v_1;
                }
            }
        }
        return null;
    },
    
    hasRefiner: function Srch_Refinement$hasRefiner(refinerName) {
        return !Srch.U.n(this.getRefinementControl(refinerName));
    },
    
    processQueryIssuing: function Srch_Refinement$processQueryIssuing(qs) {
        Srch.DisplayControl.prototype.processQueryIssuing.call(this, qs);
        if (!this.$2c_4 || this.get_dataProvider().$Q_3 === 3) {
            return;
        }
        var $$dict_1 = this.$3Y_4;
        for (var $$key_2 in $$dict_1) {
            var $v_0 = { key: $$key_2, value: $$dict_1[$$key_2] };
            var $v_1 = $v_0.key;
            var $v_2 = $v_0.value;
            var $v_3;
            var $$t_9, $$t_A;
            var $v_4 = (($$t_A = Srch.Refinement.$4G($v_1, this, $v_2.useContains, ($$t_9 = {'val': $v_3}))), $v_3 = $$t_9.val, $$t_A);
            var $v_5 = {};
            $v_5[$v_1] = $v_4;
            this.$4z_4(this.get_dataProvider().$2_3, $v_5, $v_2.op, $v_2.useKql, $v_3);
        }
    },
    
    updateRefinementControls: function Srch_Refinement$updateRefinementControls(newControls) {
        this.$7_4 = newControls;
        var $v_0 = new Srch.QueryState();
        var $v_1 = new Srch.QueryEventArgs($v_0);
        $v_1.userAction = 3;
        this.raiseQueryReadyEvent($v_1);
    }
}


Srch.Refinement.RefinerOptions = function Srch_Refinement_RefinerOptions() {
}
Srch.Refinement.RefinerOptions.prototype = {
    useKql: false,
    useContains: false,
    op: null
}


Srch.Result = function Srch_Result(elem) {
    this.$$d_$5l_4 = Function.createDelegate(this, this.$5l_4);
    this.$$d_$5Z_4 = Function.createDelegate(this, this.$5Z_4);
    this.$2l_4 = [];
    Srch.Result.initializeBase(this, [ elem ]);
}
Srch.Result.parsePropertyMappingWithSlotDisplayNames = function Srch_Result$parsePropertyMappingWithSlotDisplayNames(mappings) {
    if (!Srch.U.e(mappings)) {
        return Srch.Result.$4X(mappings);
    }
    else {
        return {};
    }
}
Srch.Result.parsePropertyMappingsString = function Srch_Result$parsePropertyMappingsString(mappings) {
    if (!Srch.U.e(mappings)) {
        var $v_0 = new RegExp('{[^}]+}', 'g');
        mappings = mappings.replace($v_0, '');
        return Srch.Result.$4X(mappings);
    }
    else {
        return {};
    }
}
Srch.Result.$4X = function Srch_Result$$4X($p0) {
    var $v_0 = {};
    if (!Srch.U.e($p0)) {
        var $v_1 = new RegExp('&quot;', 'g');
        var $v_2 = new RegExp('\"', 'g');
        var $v_3 = new RegExp('\'', 'g');
        $p0 = $p0.replace($v_1, '');
        $p0 = $p0.replace($v_2, '');
        $p0 = $p0.replace($v_3, '');
        var $v_4 = $p0.split(',');
        var $v_5 = $v_4.length;
        for (var $v_6 = 0; $v_6 < $v_5; $v_6++) {
            var $v_7 = $v_4[$v_6];
            var $v_8 = $v_7.split(':');
            if ($v_8.length === 2 || $v_8.length === 3) {
                var $v_9 = $v_8[0];
                if ($v_8.length === 3) {
                    $v_9 += ':' + $v_8[1];
                }
                var $v_A = $v_8[$v_8.length - 1].split(';');
                var $v_B = new Array(0);
                for (var $$arr_D = $v_A, $$len_E = $$arr_D.length, $$idx_F = 0; $$idx_F < $$len_E; ++$$idx_F) {
                    var $v_C = $$arr_D[$$idx_F];
                    if (!Srch.U.w($v_C)) {
                        Srch.U.appendArray($v_B, $v_C);
                    }
                }
                $v_0[$v_9] = $v_B;
            }
            else if ($v_8.length === 1 && !Srch.U.w($v_8[0])) {
                $v_0[$v_8[0]] = null;
            }
        }
    }
    return $v_0;
}
Srch.Result.getSelectedPropertiesFromMappingDictionary = function Srch_Result$getSelectedPropertiesFromMappingDictionary(propMappings) {
    var $v_0 = new Array(0);
    var $$dict_2 = propMappings;
    for (var $$key_3 in $$dict_2) {
        var $v_1 = { key: $$key_3, value: $$dict_2[$$key_3] };
        if (null === $v_1.value) {
            Srch.U.appendArray($v_0, $v_1.key);
        }
        else {
            var $v_2 = $v_1.value;
            for (var $$arr_6 = $v_2, $$len_7 = $$arr_6.length, $$idx_8 = 0; $$idx_8 < $$len_7; ++$$idx_8) {
                var $v_3 = $$arr_6[$$idx_8];
                if (!Srch.U.w($v_3)) {
                    Srch.U.appendArray($v_0, $v_3);
                }
            }
        }
    }
    return $v_0;
}
Srch.Result.prototype = {
    
    get_itemTemplateId: function Srch_Result$get_itemTemplateId() {
        return this.$h_4;
    },
    
    set_itemTemplateId: function Srch_Result$set_itemTemplateId(value) {
        this.$h_4 = value;
        return value;
    },
    
    $h_4: '',
    
    get_groupTemplateId: function Srch_Result$get_groupTemplateId() {
        return this.$e_4;
    },
    
    set_groupTemplateId: function Srch_Result$set_groupTemplateId(value) {
        this.$e_4 = value;
        return value;
    },
    
    $e_4: '',
    
    get_itemBodyTemplateId: function Srch_Result$get_itemBodyTemplateId() {
        return this.$1t_4;
    },
    
    set_itemBodyTemplateId: function Srch_Result$set_itemBodyTemplateId(value) {
        this.$1t_4 = value;
        return value;
    },
    
    $1t_4: '',
    
    get_maxPagesBeforeCurrent: function Srch_Result$get_maxPagesBeforeCurrent() {
        return this.$19_4;
    },
    
    set_maxPagesBeforeCurrent: function Srch_Result$set_maxPagesBeforeCurrent(value) {
        this.$19_4 = value;
        return value;
    },
    
    $19_4: 4,
    
    get_maxPagesAfterCurrent: function Srch_Result$get_maxPagesAfterCurrent() {
        return this.$Y_4;
    },
    
    set_maxPagesAfterCurrent: function Srch_Result$set_maxPagesAfterCurrent(value) {
        this.$Y_4 = value;
        return value;
    },
    
    $Y_4: 1,
    
    get_currentPageNumber: function Srch_Result$get_currentPageNumber() {
        return this.$y_4;
    },
    
    set_currentPageNumber: function Srch_Result$set_currentPageNumber(value) {
        this.$y_4 = value;
        return value;
    },
    
    $y_4: 0,
    
    get_showSortOptions: function Srch_Result$get_showSortOptions() {
        return this.$3p_4;
    },
    
    set_showSortOptions: function Srch_Result$set_showSortOptions(value) {
        this.$3p_4 = value;
        return value;
    },
    
    $3p_4: false,
    
    get_showLanguageOptions: function Srch_Result$get_showLanguageOptions() {
        return this.$3l_4;
    },
    
    set_showLanguageOptions: function Srch_Result$set_showLanguageOptions(value) {
        this.$3l_4 = value;
        return value;
    },
    
    $3l_4: true,
    
    get_showXGeoOptions: function Srch_Result$get_showXGeoOptions() {
        return this.$3s_4;
    },
    
    set_showXGeoOptions: function Srch_Result$set_showXGeoOptions(value) {
        this.$3s_4 = value;
        return value;
    },
    
    $3s_4: false,
    
    get_isXGeoFlighted: function Srch_Result$get_isXGeoFlighted() {
        return this.$3Q_4;
    },
    
    set_isXGeoFlighted: function Srch_Result$set_isXGeoFlighted(value) {
        this.$3Q_4 = value;
        return value;
    },
    
    $3Q_4: false,
    
    get_searchCenterXGeoLocations: function Srch_Result$get_searchCenterXGeoLocations() {
        return this.$3h_4;
    },
    
    set_searchCenterXGeoLocations: function Srch_Result$set_searchCenterXGeoLocations(value) {
        this.$3h_4 = value;
        return value;
    },
    
    $3h_4: '',
    
    get_xGeoTenantsInfo: function Srch_Result$get_xGeoTenantsInfo() {
        return this.$3x_4;
    },
    
    set_xGeoTenantsInfo: function Srch_Result$set_xGeoTenantsInfo(value) {
        this.$3x_4 = value;
        return value;
    },
    
    $3x_4: '',
    
    get_repositionLanguageDropDown: function Srch_Result$get_repositionLanguageDropDown() {
        return this.$3e_4;
    },
    
    set_repositionLanguageDropDown: function Srch_Result$set_repositionLanguageDropDown(value) {
        this.$3e_4 = value;
        return value;
    },
    
    $3e_4: false,
    
    get_showPaging: function Srch_Result$get_showPaging() {
        return this.$3n_4;
    },
    
    set_showPaging: function Srch_Result$set_showPaging(value) {
        this.$3n_4 = value;
        return value;
    },
    
    $3n_4: true,
    
    get_showResults: function Srch_Result$get_showResults() {
        return this.$2B_4;
    },
    
    set_showResults: function Srch_Result$set_showResults(value) {
        this.$2B_4 = value;
        return value;
    },
    
    $2B_4: true,
    
    get_showBestBets: function Srch_Result$get_showBestBets() {
        return this.$28_4;
    },
    
    set_showBestBets: function Srch_Result$set_showBestBets(value) {
        this.$28_4 = value;
        return value;
    },
    
    $28_4: true,
    
    get_showPersonalFavorites: function Srch_Result$get_showPersonalFavorites() {
        return this.$2A_4;
    },
    
    set_showPersonalFavorites: function Srch_Result$set_showPersonalFavorites(value) {
        this.$2A_4 = value;
        return value;
    },
    
    $2A_4: true,
    
    get_showDefinitions: function Srch_Result$get_showDefinitions() {
        return this.$29_4;
    },
    
    set_showDefinitions: function Srch_Result$set_showDefinitions(value) {
        this.$29_4 = value;
        return value;
    },
    
    $29_4: true,
    
    get_showDidYouMean: function Srch_Result$get_showDidYouMean() {
        return this.$3k_4;
    },
    
    set_showDidYouMean: function Srch_Result$set_showDidYouMean(value) {
        this.$3k_4 = value;
        return value;
    },
    
    $3k_4: true,
    
    get_showAdvancedLink: function Srch_Result$get_showAdvancedLink() {
        return this.$1O_4;
    },
    
    set_showAdvancedLink: function Srch_Result$set_showAdvancedLink(value) {
        this.$1O_4 = value;
        return value;
    },
    
    $1O_4: true,
    
    get_showPreferencesLink: function Srch_Result$get_showPreferencesLink() {
        return this.$1P_4;
    },
    
    set_showPreferencesLink: function Srch_Result$set_showPreferencesLink(value) {
        this.$1P_4 = value;
        return value;
    },
    
    $1P_4: true,
    
    get_showResultCount: function Srch_Result$get_showResultCount() {
        return this.$3o_4;
    },
    
    set_showResultCount: function Srch_Result$set_showResultCount(value) {
        this.$3o_4 = value;
        return value;
    },
    
    $3o_4: true,
    
    get_showAlertMe: function Srch_Result$get_showAlertMe() {
        return this.$3j_4;
    },
    
    set_showAlertMe: function Srch_Result$set_showAlertMe(value) {
        this.$3j_4 = value;
        return value;
    },
    
    $3j_4: true,
    
    get_showViewDuplicates: function Srch_Result$get_showViewDuplicates() {
        return this.$3r_4;
    },
    
    set_showViewDuplicates: function Srch_Result$set_showViewDuplicates(value) {
        this.$3r_4 = value;
        return value;
    },
    
    $3r_4: false,
    
    get_pagingInfo: function Srch_Result$get_pagingInfo() {
        return this.$F_4;
    },
    
    $F_4: null,
    
    get_shouldShowNoResultMessage: function Srch_Result$get_shouldShowNoResultMessage() {
        if (!this.$28_4 && !this.$29_4 && !this.$2B_4 && !this.$2A_4) {
            return false;
        }
        return Srch.DisplayControl.prototype.get_shouldShowNoResultMessage.call(this);
    },
    
    get_advancedUrl: function Srch_Result$get_advancedUrl() {
        return this.$r_4;
    },
    
    set_advancedUrl: function Srch_Result$set_advancedUrl(value) {
        this.$r_4 = value;
        return value;
    },
    
    $r_4: 'advanced.aspx',
    
    get_showUpScopeMessage: function Srch_Result$get_showUpScopeMessage() {
        return this.$3q_4;
    },
    
    set_showUpScopeMessage: function Srch_Result$set_showUpScopeMessage(value) {
        this.$3q_4 = value;
        return value;
    },
    
    $3q_4: false,
    
    get_scrollToTopOnRedraw: function Srch_Result$get_scrollToTopOnRedraw() {
        return this.$2x_4;
    },
    
    set_scrollToTopOnRedraw: function Srch_Result$set_scrollToTopOnRedraw(value) {
        this.$2x_4 = value;
        return value;
    },
    
    $2x_4: false,
    
    get_useSimplifiedQueryBuilder: function Srch_Result$get_useSimplifiedQueryBuilder() {
        return this.$3v_4;
    },
    
    set_useSimplifiedQueryBuilder: function Srch_Result$set_useSimplifiedQueryBuilder(value) {
        this.$3v_4 = value;
        return value;
    },
    
    $3v_4: false,
    
    get_preloadedItemTemplateIds: function Srch_Result$get_preloadedItemTemplateIds() {
        return this.$j_4;
    },
    
    set_preloadedItemTemplateIds: function Srch_Result$set_preloadedItemTemplateIds(value) {
        this.$j_4 = value;
        return value;
    },
    
    $j_4: null,
    
    processResultReady: function Srch_Result$processResultReady(resultTableCollection) {
        this.$4Z_4(resultTableCollection);
        Srch.DisplayControl.prototype.processResultReady.call(this, resultTableCollection);
    },
    
    render: function Srch_Result$render() {
        Srch.DisplayControl.prototype.render.call(this);
        this.raiseResultRenderedEvent(new Srch.ResultEventArgs(this.$A_3));
    },
    
    scriptApplication_PreLoad: function Srch_Result$scriptApplication_PreLoad(sender, e) {
        this.$1_2('ScriptApplication_PreLoad', 'Result');
        if (this.$10_2) {
            if (!Srch.U.n(this.$j_4) && this.$j_4.length > 0) {
                for (var $v_0 = 0; $v_0 < this.$j_4.length; $v_0++) {
                    var $v_1 = this.$j_4[$v_0];
                    Srch.U.appendScriptsToLoad(this.$2l_4, $v_1);
                }
            }
            this.$1_2('ScriptApplication_PreLoad', 'Yield loading preloaded item templates.');
            window.setTimeout(this.$$d_$5Z_4, 0);
            Srch.U.appendScriptsToLoad(this.serverTemplateScriptsToLoad, this.$1t_4);
            Srch.U.appendScriptsToLoad(this.serverTemplateScriptsToLoad, this.$h_4);
            Srch.U.appendScriptsToLoad(this.serverTemplateScriptsToLoad, this.$e_4);
        }
        Srch.DisplayControl.prototype.scriptApplication_PreLoad.call(this, sender, e);
    },
    
    $5Z_4: function Srch_Result$$5Z_4() {
        this.$1_2('LoadPreloadedItemTemplateScripts', 'Trying to load preloaded item template scripts...');
        this.loadRenderTemplateScripts(this.$2l_4, this.$$d_$5l_4, this.$$d_$5l_4, -1, true);
    },
    
    $5l_4: function Srch_Result$$5l_4() {
        this.$1_2('PreloadedItemTemplateScriptsLoaded', 'All preloaded item template scripts loaded');
        this.$2l_4 = [];
    },
    
    sortOrRank: function Srch_Result$sortOrRank(sortRankName) {
        if (Srch.U.e(sortRankName)) {
            return;
        }
        var $v_0 = this.get_dataProvider();
        if (sortRankName === Srch.Res.rs_SocialDistanceSort) {
            if (Srch.U.n($v_0)) {
                return;
            }
            var $v_1 = new Srch.QueryState();
            if ($v_0.$2_3.m === Srch.DataProvider.$3V || $v_0.$2_3.m === Srch.DataProvider.$1x) {
                $v_1.m = Srch.DataProvider.$1x;
            }
            else if ($v_0.$2_3.m === Srch.DataProvider.$3G || $v_0.$2_3.m === Srch.DataProvider.$1k) {
                $v_1.m = Srch.DataProvider.$1k;
            }
            else {
                $v_1.m = Srch.DataProvider.$2f;
            }
            $v_0.$2_3.o = null;
            $v_1.s = 1;
            var $v_2 = new Srch.QueryEventArgs($v_1);
            $v_2.userAction = 4;
            this.raiseQueryReadyEvent($v_2);
        }
        else {
            this.$4s_4(sortRankName, true);
        }
        return;
    },
    
    sort: function Srch_Result$sort(sortName) {
        this.$4s_4(sortName, false);
    },
    
    $4s_4: function Srch_Result$$4s_4($p0, $p1) {
        if (Srch.U.e($p0)) {
            return;
        }
        var $v_0 = this.get_dataProvider();
        if (Srch.U.n($v_0)) {
            return;
        }
        var $v_1 = $v_0.$S_3;
        if (!Srch.U.n($v_1) && $v_1.length > 0) {
            for (var $v_2 = 0; $v_2 < $v_1.length; $v_2++) {
                var $v_3 = $v_1[$v_2];
                if (!Srch.U.n($v_3) && $v_3.name === $p0) {
                    var $v_4 = new Srch.QueryState();
                    $v_4.o = $v_3.sorts;
                    if ($p1) {
                        if ($v_0.$2_3.m === Srch.DataProvider.$1x) {
                            $v_4.m = Srch.DataProvider.$3V;
                        }
                        else if ($v_0.$2_3.m === Srch.DataProvider.$1k) {
                            $v_4.m = Srch.DataProvider.$3G;
                        }
                        else if ($v_0.$2_3.m === Srch.DataProvider.$2f) {
                            $v_4.m = Srch.DataProvider.$4U;
                        }
                    }
                    $v_4.s = 1;
                    var $v_5 = new Srch.QueryEventArgs($v_4);
                    $v_5.userAction = 4;
                    this.raiseQueryReadyEvent($v_5);
                    return;
                }
            }
        }
    },
    
    changeQueryLanguage: function Srch_Result$changeQueryLanguage(queryLanguage) {
        if (queryLanguage > 0) {
            var $v_0 = new Srch.QueryState();
            $v_0.l = queryLanguage;
            $v_0.s = 1;
            var $v_1 = new Srch.QueryEventArgs($v_0);
            $v_1.userAction = 5;
            this.raiseQueryReadyEvent($v_1);
        }
    },
    
    page: function Srch_Result$page(startAt) {
        if (startAt > 0) {
            var $v_0 = new Srch.QueryState();
            $v_0.s = startAt;
            var $v_1 = new Srch.QueryEventArgs($v_0);
            var $v_2 = this.get_dataProvider();
            if (!Srch.U.n($v_2) && !Srch.U.n($v_2.$2_3)) {
                $v_1.userAction = (startAt > $v_2.$2_3.s) ? 1 : 2;
            }
            this.raiseQueryReadyEvent($v_1);
        }
    },
    
    changeQueryTerm: function Srch_Result$changeQueryTerm(queryTerm) {
        if (!Srch.U.e(queryTerm)) {
            var $v_0 = new Srch.QueryState();
            $v_0.k = queryTerm;
            $v_0.s = 1;
            var $v_1 = new Srch.QueryEventArgs($v_0);
            $v_1.userAction = 0;
            this.raiseQueryReadyEvent($v_1);
        }
    },
    
    viewDuplicates: function Srch_Result$viewDuplicates(docId) {
        if (docId !== -1) {
            var $v_0 = new Srch.QueryState();
            $v_0.d = docId;
            $v_0.s = 1;
            var $v_1 = new Srch.QueryEventArgs($v_0);
            $v_1.userAction = 0;
            this.raiseQueryReadyEvent($v_1);
        }
    },
    
    shouldShowTable: function Srch_Result$shouldShowTable(resultTable) {
        if (!Srch.U.n(resultTable)) {
            var $v_0 = resultTable['RowCount'];
            if (!Srch.U.n($v_0) && $v_0 > 0) {
                if (this.$2B_4 && Srch.U.isTableTypeof(resultTable, Microsoft.SharePoint.Client.Search.Query.KnownTableTypes.relevantResults)) {
                    this.$G_3 = true;
                    return true;
                }
                else if (this.$28_4 && Srch.U.isTableTypeof(resultTable, Microsoft.SharePoint.Client.Search.Query.KnownTableTypes.specialTermResults)) {
                    this.$G_3 = true;
                    return true;
                }
                else if (this.$29_4 && Srch.U.isTableTypeof(resultTable, Microsoft.SharePoint.Client.Search.Query.KnownTableTypes.definitionResults)) {
                    this.$G_3 = true;
                    return true;
                }
                else if (this.$2A_4 && Srch.U.isTableTypeof(resultTable, Microsoft.SharePoint.Client.Search.Query.KnownTableTypes.personalFavoriteResults)) {
                    this.$G_3 = true;
                    return true;
                }
            }
        }
        return false;
    },
    
    $4Z_4: function Srch_Result$$4Z_4($p0) {
        this.$F_4 = null;
        if (Srch.U.n($p0)) {
            return;
        }
        var $v_0 = this.get_dataProvider();
        if (Srch.U.n($v_0)) {
            return;
        }
        if ($v_0.$8_3 < 1 || $v_0.$M_3 < 0) {
            this.$3_2('ProcessResult', 'No result. totalRows: {0}, rowCount: {1}', $v_0.$8_3, $v_0.$M_3);
            return;
        }
        var $v_1 = $v_0.$p_3;
        var $v_2 = $v_0.$2_3.s;
        if ($v_2 < 1) {
            $v_2 = 1;
        }
        var $v_3 = 0;
        this.$y_4 = (Math.ceil($v_2 / $v_1));
        var $v_4 = (this.$y_4 > this.$19_4) ? this.$y_4 - this.$19_4 : 1;
        var $v_5 = Srch.Res.rs_MoveToPage;
        this.$F_4 = [];
        if ($v_2 > 1) {
            var $v_7 = ($v_2 > $v_1) ? $v_2 - $v_1 : 1;
            Srch.U.appendArray(this.$F_4, new Srch.PagingLink(Srch.Res.rs_MoveToPrevPage, 'ms-srch-pagingPrev', $v_7, -1));
            $v_7 = ($v_4 - 1) * $v_1 + 1;
            while ($v_3 < this.$19_4 && $v_7 < $v_2) {
                $v_3++;
                Srch.U.appendArray(this.$F_4, new Srch.PagingLink(String.format($v_5, $v_4), '', $v_7, $v_4));
                $v_7 = $v_7 + $v_1;
                $v_4++;
            }
        }
        if ($v_3 > 0) {
            $v_3++;
            Srch.U.appendArray(this.$F_4, new Srch.PagingLink('', '', -1, $v_4));
            $v_4++;
        }
        var $v_6 = ($v_0.$M_3 > $v_1) ? $v_1 : $v_0.$M_3;
        if ($v_0.$8_3 > $v_2 + $v_6 - 1) {
            if (!$v_3 && $v_0.$8_3 > $v_1) {
                $v_3++;
                Srch.U.appendArray(this.$F_4, new Srch.PagingLink('', '', -1, $v_4));
                $v_4++;
            }
            var $v_8 = ($v_4 - 1) * $v_1 + 1;
            var $v_9 = 0;
            while ($v_9 < this.$Y_4 && $v_8 <= $v_0.$8_3) {
                $v_9++;
                Srch.U.appendArray(this.$F_4, new Srch.PagingLink(String.format($v_5, $v_4), '', $v_8, $v_4));
                $v_8 = $v_8 + $v_1;
                $v_4++;
            }
            $v_8 = $v_2 + $v_1;
            if ($v_8 <= $v_0.$8_3) {
                Srch.U.appendArray(this.$F_4, new Srch.PagingLink(Srch.Res.rs_MoveToNextPage, 'ms-srch-pagingNext', $v_8, -2));
            }
        }
    }
}


Srch.SearchBox = function Srch_SearchBox(elem) {
    this.$$d_$5B_3 = Function.createDelegate(this, this.$5B_3);
    this.$$d_$5A_3 = Function.createDelegate(this, this.$5A_3);
    this.$$d_$5x_3 = Function.createDelegate(this, this.$5x_3);
    this.$$d_$5z_3 = Function.createDelegate(this, this.$5z_3);
    this.$$d_dataProvider_ResultReady = Function.createDelegate(this, this.dataProvider_ResultReady);
    this.$$d_dataProvider_QueryIssuing = Function.createDelegate(this, this.dataProvider_QueryIssuing);
    this.$$d_dataProvider_QueryStateChanged = Function.createDelegate(this, this.dataProvider_QueryStateChanged);
    this.$2p_3 = -1;
    this.$v_3 = {};
    Srch.SearchBox.initializeBase(this, [ elem ]);
}
Srch.SearchBox.prototype = {
    
    get_$z_3: function Srch_SearchBox$get_$z_3() {
        if (Srch.U.n(this.$1a_3)) {
            this.$1a_3 = [];
            if (!Srch.U.n(this.$L_3)) {
                for (var $v_0 = 0; $v_0 < this.$L_3.length; $v_0++) {
                    var $v_1 = Srch.ScriptApplicationManager.get_current().queryGroups[this.$L_3[$v_0]];
                    if (!Srch.U.n($v_1)) {
                        var $v_2 = $v_1.dataProvider;
                        if (!Srch.U.n($v_2)) {
                            Srch.U.appendArray(this.$1a_3, $v_2);
                        }
                    }
                }
            }
        }
        return this.$1a_3;
    },
    
    $1a_3: null,
    
    get_currentTerm: function Srch_SearchBox$get_currentTerm() {
        return this.$T_3;
    },
    
    set_currentTerm: function Srch_SearchBox$set_currentTerm(value) {
        this.$T_3 = value;
        return value;
    },
    
    $T_3: null,
    
    get_queryGroupNames: function Srch_SearchBox$get_queryGroupNames() {
        return this.$L_3;
    },
    
    set_queryGroupNames: function Srch_SearchBox$set_queryGroupNames(value) {
        this.$L_3 = value;
        return value;
    },
    
    $L_3: null,
    
    get_resultsPageAddress: function Srch_SearchBox$get_resultsPageAddress() {
        return this.$2v_3;
    },
    
    set_resultsPageAddress: function Srch_SearchBox$set_resultsPageAddress(value) {
        this.$2v_3 = value;
        return value;
    },
    
    $2v_3: '',
    
    get_showAdvancedLink: function Srch_SearchBox$get_showAdvancedLink() {
        return this.$1O_3;
    },
    
    set_showAdvancedLink: function Srch_SearchBox$set_showAdvancedLink(value) {
        this.$1O_3 = value;
        return value;
    },
    
    $1O_3: false,
    
    get_showQuerySuggestions: function Srch_SearchBox$get_showQuerySuggestions() {
        return this.$33_3;
    },
    
    set_showQuerySuggestions: function Srch_SearchBox$set_showQuerySuggestions(value) {
        this.$33_3 = value;
        return value;
    },
    
    $33_3: true,
    
    get_showNavigation: function Srch_SearchBox$get_showNavigation() {
        return this.$3m_3 && !Srch.U.n(this.$1C_3) && this.$1C_3.length > 1;
    },
    
    set_showNavigation: function Srch_SearchBox$set_showNavigation(value) {
        this.$3m_3 = value;
        return value;
    },
    
    $3m_3: false,
    
    get_showPeopleNameSuggestions: function Srch_SearchBox$get_showPeopleNameSuggestions() {
        return this.$32_3;
    },
    
    set_showPeopleNameSuggestions: function Srch_SearchBox$set_showPeopleNameSuggestions(value) {
        this.$32_3 = value;
        return value;
    },
    
    $32_3: false,
    
    get_querySuggestionCompletionInterval: function Srch_SearchBox$get_querySuggestionCompletionInterval() {
        return this.$2q_3;
    },
    
    set_querySuggestionCompletionInterval: function Srch_SearchBox$set_querySuggestionCompletionInterval(value) {
        this.$2q_3 = value;
        return value;
    },
    
    $2q_3: 250,
    
    get_querySuggestionMinimumPrefixLength: function Srch_SearchBox$get_querySuggestionMinimumPrefixLength() {
        return this.$2s_3;
    },
    
    set_querySuggestionMinimumPrefixLength: function Srch_SearchBox$set_querySuggestionMinimumPrefixLength(value) {
        this.$2s_3 = value;
        return value;
    },
    
    $2s_3: 2,
    
    get_querySuggestionCount: function Srch_SearchBox$get_querySuggestionCount() {
        return this.$2r_3;
    },
    
    set_querySuggestionCount: function Srch_SearchBox$set_querySuggestionCount(value) {
        this.$2r_3 = value;
        return value;
    },
    
    $2r_3: 5,
    
    get_personalResultCount: function Srch_SearchBox$get_personalResultCount() {
        return this.$2k_3;
    },
    
    set_personalResultCount: function Srch_SearchBox$set_personalResultCount(value) {
        this.$2k_3 = value;
        return value;
    },
    
    $2k_3: 3,
    
    get_advancedSearchPageAddress: function Srch_SearchBox$get_advancedSearchPageAddress() {
        return this.$r_3;
    },
    
    set_advancedSearchPageAddress: function Srch_SearchBox$set_advancedSearchPageAddress(value) {
        this.$r_3 = value;
        return value;
    },
    
    $r_3: 'advanced.aspx',
    
    get_showPreferencesLink: function Srch_SearchBox$get_showPreferencesLink() {
        return this.$1P_3;
    },
    
    set_showPreferencesLink: function Srch_SearchBox$set_showPreferencesLink(value) {
        this.$1P_3 = value;
        return value;
    },
    
    $1P_3: false,
    
    get_serverInitialRender: function Srch_SearchBox$get_serverInitialRender() {
        return this.$2z_3;
    },
    
    set_serverInitialRender: function Srch_SearchBox$set_serverInitialRender(value) {
        this.$2z_3 = value;
        return value;
    },
    
    $2z_3: false,
    
    get_setFocusOnPageLoad: function Srch_SearchBox$get_setFocusOnPageLoad() {
        return this.$30_3;
    },
    
    set_setFocusOnPageLoad: function Srch_SearchBox$set_setFocusOnPageLoad(value) {
        this.$30_3 = value;
        return value;
    },
    
    $30_3: false,
    
    get_allowEmptySearch: function Srch_SearchBox$get_allowEmptySearch() {
        return this.$2K_3;
    },
    
    set_allowEmptySearch: function Srch_SearchBox$set_allowEmptySearch(value) {
        this.$2K_3 = value;
        return value;
    },
    
    $2K_3: false,
    
    get_updatePageTitle: function Srch_SearchBox$get_updatePageTitle() {
        return this.$38_3;
    },
    
    set_updatePageTitle: function Srch_SearchBox$set_updatePageTitle(value) {
        this.$38_3 = value;
        return value;
    },
    
    $38_3: true,
    
    get_pageTitlePrefix: function Srch_SearchBox$get_pageTitlePrefix() {
        return this.$1z_3;
    },
    
    set_pageTitlePrefix: function Srch_SearchBox$set_pageTitlePrefix(value) {
        this.$1z_3 = value;
        return value;
    },
    
    $1z_3: '',
    
    get_currentPrompt: function Srch_SearchBox$get_currentPrompt() {
        return this.$2O_3;
    },
    
    set_currentPrompt: function Srch_SearchBox$set_currentPrompt(value) {
        var $v_0 = this.get_searchBoxInputElement();
        if (Srch.U.n($v_0)) {
            return value;
        }
        if ($v_0.value === this.$2O_3) {
            $v_0.value = value;
        }
        this.$2O_3 = value;
        return value;
    },
    
    $2O_3: null,
    
    get_initialPrompt: function Srch_SearchBox$get_initialPrompt() {
        return this.$3O_3;
    },
    
    set_initialPrompt: function Srch_SearchBox$set_initialPrompt(value) {
        this.$3O_3 = value;
        return value;
    },
    
    $3O_3: null,
    
    get_promptCssClass: function Srch_SearchBox$get_promptCssClass() {
        return this.$1J_3;
    },
    
    set_promptCssClass: function Srch_SearchBox$set_promptCssClass(value) {
        this.$1J_3 = value;
        return value;
    },
    
    $1J_3: 'ms-srch-sb-prompt ms-helperText',
    
    get_tryInplaceQuery: function Srch_SearchBox$get_tryInplaceQuery() {
        return this.$34_3;
    },
    
    set_tryInplaceQuery: function Srch_SearchBox$set_tryInplaceQuery(value) {
        this.$34_3 = value;
        return value;
    },
    
    $34_3: true,
    
    get_searchBoxInputId: function Srch_SearchBox$get_searchBoxInputId() {
        return this.$N_3;
    },
    
    set_searchBoxInputId: function Srch_SearchBox$set_searchBoxInputId(value) {
        this.$N_3 = value;
        return value;
    },
    
    $N_3: null,
    
    get_searchBoxContainerId: function Srch_SearchBox$get_searchBoxContainerId() {
        return this.$a_3;
    },
    
    set_searchBoxContainerId: function Srch_SearchBox$set_searchBoxContainerId(value) {
        this.$a_3 = value;
        return value;
    },
    
    $a_3: null,
    
    get_navigationButtonId: function Srch_SearchBox$get_navigationButtonId() {
        return this.$1y_3;
    },
    
    set_navigationButtonId: function Srch_SearchBox$set_navigationButtonId(value) {
        this.$1y_3 = value;
        return value;
    },
    
    $1y_3: null,
    
    get_suggestionsListId: function Srch_SearchBox$get_suggestionsListId() {
        return this.$H_3;
    },
    
    set_suggestionsListId: function Srch_SearchBox$set_suggestionsListId(value) {
        this.$H_3 = value;
        return value;
    },
    
    $H_3: null,
    
    get_navigationListId: function Srch_SearchBox$get_navigationListId() {
        return this.$E_3;
    },
    
    set_navigationListId: function Srch_SearchBox$set_navigationListId(value) {
        this.$E_3 = value;
        return value;
    },
    
    $E_3: null,
    
    get_searchBoxInputElement: function Srch_SearchBox$get_searchBoxInputElement() {
        if (Srch.U.w(this.$N_3)) {
            return null;
        }
        return $get(this.$N_3);
    },
    
    get_searchBoxProgressClass: function Srch_SearchBox$get_searchBoxProgressClass() {
        return this.$1N_3;
    },
    
    set_searchBoxProgressClass: function Srch_SearchBox$set_searchBoxProgressClass(value) {
        this.$1N_3 = value;
        return value;
    },
    
    $1N_3: 'ms-srch-sbprogressLarge',
    
    get_searchBoxContainerElement: function Srch_SearchBox$get_searchBoxContainerElement() {
        if (Srch.U.w(this.$a_3)) {
            return null;
        }
        return $get(this.$a_3);
    },
    
    get_searchBoxLinkId: function Srch_SearchBox$get_searchBoxLinkId() {
        return this.$1M_3;
    },
    
    set_searchBoxLinkId: function Srch_SearchBox$set_searchBoxLinkId(value) {
        this.$1M_3 = value;
        return value;
    },
    
    $1M_3: null,
    
    get_searchBoxLinkElement: function Srch_SearchBox$get_searchBoxLinkElement() {
        if (Srch.U.n(this.$1M_3)) {
            return null;
        }
        return $get(this.$1M_3);
    },
    
    get_navigationNodes: function Srch_SearchBox$get_navigationNodes() {
        return this.$1C_3;
    },
    
    set_navigationNodes: function Srch_SearchBox$set_navigationNodes(value) {
        this.$1C_3 = value;
        return value;
    },
    
    $1C_3: null,
    
    get_msBeforeShowingProgress: function Srch_SearchBox$get_msBeforeShowingProgress() {
        return this.$2h_3;
    },
    
    set_msBeforeShowingProgress: function Srch_SearchBox$set_msBeforeShowingProgress(value) {
        this.$2h_3 = value;
        return value;
    },
    
    $2h_3: 500,
    
    get_maintainQueryState: function Srch_SearchBox$get_maintainQueryState() {
        return this.$2g_3;
    },
    
    set_maintainQueryState: function Srch_SearchBox$set_maintainQueryState(value) {
        this.$2g_3 = value;
        return value;
    },
    
    $2g_3: false,
    
    get_querySuggestionsSourceID: function Srch_SearchBox$get_querySuggestionsSourceID() {
        if (!Srch.U.e(this.$2t_3)) {
            return this.$2t_3;
        }
        else if (!Srch.U.n(this.get_$z_3()) && !Srch.U.n(this.get_$z_3()[0])) {
            return this.get_$z_3()[0].$1Q_3;
        }
        else {
            return null;
        }
    },
    
    set_querySuggestionsSourceID: function Srch_SearchBox$set_querySuggestionsSourceID(value) {
        this.$2t_3 = value;
        return value;
    },
    
    $2t_3: null,
    
    scriptApplication_PreLoad: function Srch_SearchBox$scriptApplication_PreLoad(sender, e) {
        this.$1_2('ScriptApplication_PreLoad', 'SearchBox');
        if (!Srch.U.n(this.get_$z_3())) {
            var $v_0 = null;
            for (var $v_1 = 0; $v_1 < this.get_$z_3().length; $v_1++) {
                var $v_2 = this.get_$z_3()[$v_1];
                if (!Srch.U.n($v_2)) {
                    $v_0 = this.$$d_dataProvider_QueryStateChanged;
                    $v_2.add_queryStateChanged($v_0);
                    Srch.U.appendArray(this.listenedEvents, new Srch.ListenedEvent($v_2, 6, $v_0));
                    $v_0 = this.$$d_dataProvider_QueryIssuing;
                    $v_2.add_queryIssuing($v_0);
                    Srch.U.appendArray(this.listenedEvents, new Srch.ListenedEvent($v_2, 2, $v_0));
                    $v_0 = this.$$d_dataProvider_ResultReady;
                    $v_2.add_resultReady($v_0);
                    Srch.U.appendArray(this.listenedEvents, new Srch.ListenedEvent($v_2, 4, $v_0));
                }
            }
        }
        Srch.ClientControl.prototype.scriptApplication_PreLoad.call(this, sender, e);
    },
    
    scriptApplication_PostLoad: function Srch_SearchBox$scriptApplication_PostLoad(sender, e) {
        this.$1_2('ScriptApplication_PostLoad', 'SearchBox');
        if (this.$2z_3) {
            this.$1_2('ScriptApplication_PostLoad', 'Skipping render control during load.');
        }
        else {
            if (!this.loadServerTemplateScripts()) {
                this.$1_2('ScriptApplication_PostLoad', 'Inline control render during PostLoad');
                this.$3d_3();
            }
        }
        Srch.ClientControl.prototype.scriptApplication_PostLoad.call(this, sender, e);
    },
    
    serverTemplateScriptsCallback: function Srch_SearchBox$serverTemplateScriptsCallback() {
        Srch.ClientControl.prototype.serverTemplateScriptsCallback.call(this);
        this.$1_2('ServerTemplateScriptsCallback', 'Delay load control render');
        this.$3d_3();
    },
    
    add_queryReady: function Srch_SearchBox$add_queryReady(value) {
        this.get_events().addHandler(Srch.EventType.toString(1), value);
    },
    
    remove_queryReady: function Srch_SearchBox$remove_queryReady(value) {
        this.get_events().removeHandler(Srch.EventType.toString(1), value);
    },
    
    raiseQueryReadyEvent: function Srch_SearchBox$raiseQueryReadyEvent(arg) {
        this.$1_2('RaiseQueryReadyEvent', '');
        var $v_0 = this.get_events().getHandler(Srch.EventType.toString(1));
        if (!Srch.U.n($v_0)) {
            $v_0(this, arg);
        }
    },
    
    add_batchQueryIssuing: function Srch_SearchBox$add_batchQueryIssuing(value) {
        this.get_events().addHandler(Srch.EventType.toString(3), value);
    },
    
    remove_batchQueryIssuing: function Srch_SearchBox$remove_batchQueryIssuing(value) {
        this.get_events().removeHandler(Srch.EventType.toString(3), value);
    },
    
    raiseBatchQueryIssuingEvent: function Srch_SearchBox$raiseBatchQueryIssuingEvent(arg) {
        this.$1_2('RaiseBatchQueryIssuingEvent', '');
        var $v_0 = this.get_events().getHandler(Srch.EventType.toString(3));
        if (!Srch.U.n($v_0)) {
            $v_0(this, arg);
        }
    },
    
    add_batchResultReady: function Srch_SearchBox$add_batchResultReady(value) {
        this.get_events().addHandler(Srch.EventType.toString(5), value);
    },
    
    remove_batchResultReady: function Srch_SearchBox$remove_batchResultReady(value) {
        this.get_events().removeHandler(Srch.EventType.toString(5), value);
    },
    
    raiseBatchResultReadyEvent: function Srch_SearchBox$raiseBatchResultReadyEvent(arg) {
        this.$1_2('RaiseBatchResultReadyEvent', 'Batch result is ready');
        var $v_0 = this.get_events().getHandler(Srch.EventType.toString(5));
        if (!Srch.U.n($v_0)) {
            $v_0(this, arg);
        }
    },
    
    dataProvider_QueryStateChanged: function Srch_SearchBox$dataProvider_QueryStateChanged(sender, e) {
        this.$1_2('DataProvider_QueryStateChanged', '');
        var $v_0 = e;
        if (!Srch.U.n($v_0)) {
            var $v_1 = $v_0.queryState;
            if (!Srch.U.n($v_1)) {
                this.$3_2('DataProvider_QueryStateChanged', 'Query is \'{0}\'', $v_1.k);
                this.$3_2('DataProvider_QueryStateChanged', 'CurrentTerm is \'{0}\'', this.$T_3);
                if (this.$T_3 !== $v_1.k) {
                    this.$1_2('DataProvider_QueryStateChanged', 'Rerender control with new term');
                    this.$T_3 = $v_1.k;
                    if (!this.loaded) {
                        this.$1_2('DataProvider_QueryStateChanged', 'Rely on load to render control.');
                        return;
                    }
                    if (!this.loadServerTemplateScripts()) {
                        this.$1_2('DataProvider_QueryStateChanged', 'Inline control render during QueryStateChanged');
                        this.$3d_3();
                    }
                }
                else {
                    this.$1_2('DataProvider_QueryStateChanged', 'Term did not change');
                }
                if (this.$38_3) {
                    var $v_2 = (Srch.U.e(this.$1z_3)) ? Srch.Res.sb_ResultsPageTitle : this.$1z_3;
                    document.title = String.format($v_2, $v_1.k);
                }
            }
        }
    },
    
    setBorder: function Srch_SearchBox$setBorder(focused) {
        var $v_0 = this.get_searchBoxContainerElement();
        var $v_1 = this.get_searchBoxInputElement();
        if (!Srch.U.n($v_0) && !Srch.U.n($v_1)) {
            focused = !!(focused | (!Srch.U.e($v_1.value) && $v_1.value !== this.get_currentPrompt()));
            var $v_2 = (focused) ? Srch.SearchBox.searchBoxFocusedBorderClassName : Srch.SearchBox.searchBoxBorderClassName;
            var $v_3 = (focused) ? Srch.SearchBox.searchBoxBorderClassName : Srch.SearchBox.searchBoxFocusedBorderClassName;
            Srch.U.ensureCSSClassNameNotExist($v_0, $v_3);
            Srch.U.ensureCSSClassNameExist($v_0, $v_2);
        }
    },
    
    dataProvider_QueryIssuing: function Srch_SearchBox$dataProvider_QueryIssuing(sender, e) {
        this.$1_2('DataProvider_QueryIssuing', '');
        this.$4M_3();
        this.$2p_3 = window.setTimeout(this.$$d_$5z_3, this.$2h_3);
        this.$1I_3 = true;
    },
    
    dataProvider_ResultReady: function Srch_SearchBox$dataProvider_ResultReady(sender, e) {
        this.$1_2('DataProvider_ResultsReady', '');
        this.$4M_3();
    },
    
    $1I_3: false,
    $1E_3: null,
    
    $5z_3: function Srch_SearchBox$$5z_3() {
        if (!this.$1I_3) {
            return;
        }
        window.clearTimeout(this.$2p_3);
        this.$1I_3 = false;
        var $v_0 = this.get_searchBoxLinkElement();
        if (!Srch.U.n($v_0)) {
            var $v_1 = ' ' + this.$1N_3;
            $v_0.className = $v_0.className.replace(new RegExp($v_1, 'gi'), '');
            $v_0.className += $v_1;
            if (Srch.U.n(this.$1E_3)) {
                this.$1E_3 = $v_0.title;
            }
            var $v_2 = $get('searchImg');
            if (!Srch.U.n($v_2)) {
                Srch.U.ensureCSSClassNameExist($v_2, 'ms-hide');
            }
            $v_0.title = Srch.Res.sb_SearchInProgress;
        }
    },
    
    $4M_3: function Srch_SearchBox$$4M_3() {
        if (this.$1I_3) {
            window.clearTimeout(this.$2p_3);
            this.$1I_3 = false;
        }
        var $v_0 = this.get_searchBoxLinkElement();
        if (!Srch.U.n($v_0)) {
            $v_0.className = $v_0.className.replace(new RegExp(' ' + this.$1N_3, 'gi'), '');
            if (!Srch.U.n(this.$1E_3)) {
                $v_0.title = this.$1E_3;
                this.$1E_3 = null;
            }
            var $v_1 = $get('searchImg');
            if (!Srch.U.n($v_1)) {
                Srch.U.ensureCSSClassNameNotExist($v_1, 'ms-hide');
            }
        }
    },
    
    search: function Srch_SearchBox$search(term) {
        var $v_0 = new SP.CScope('SearchBox.Search');
        $v_0.start();
        if (Srch.U.n(term)) {
            term = '';
        }
        else {
            term = term.trim();
        }
        if (term === this.get_currentPrompt()) {
            term = '';
        }
        if (Srch.U.e(term) && !this.$2K_3) {
            $v_0.stop();
            return;
        }
        
                            SP.SOD.executeFunc('sp.core.js', 'GetSimpleLogger', function(){
                                var logger = GetSimpleLogger();
                                if (logger) 
                                {
                                    var log = {'PageUrl' : '<PII String(document.URL)>'};
                                    logger.WriteLog('QueryBoxUsage', log);
                                }
                            });;
        var $v_1 = window._spPageContextInfo;
        var $v_2 = $v_1.webTemplate;
        if ('21' === $v_2) {
            SP.QoS.WriteUserEngagement('OneDriveSearchEverything');
        }
        
                            var lastSegment = (new URI(_spPageContextInfo.serverRequestPath)).getLastPathSegment();
                            if (Boolean(lastSegment) && lastSegment.toLowerCase() == 'sites.aspx')
                            {
                                if (typeof MyRecs !== 'undefined' && typeof MyRecs.DisposeMonitors === 'function')
                                {
                                    MyRecs.DisposeMonitors();
                                }
        
                                SP.QoS.WriteUserEngagement('SitesPageSearch', {'Filter': '<PII this.get_resultsPageAddress()>'});
                                SP.DebugLogger.Write('SitesPage_Navigation', SP.DebugLogger.LoggingLevel.Interesting, '');
                            }
                        ;
        var $v_3 = this.get_events().getHandler(Srch.EventType.toString(1));
        if (!this.$34_3 || Srch.U.n($v_3)) {
            var $v_4 = Srch.U.getResultsPageUrl(this.$2v_3, term);
            if (!Srch.U.e($v_4)) {
                this.$3_2('Search', 'Redirecting to url \'{0}\'...', $v_4);
                SP.Utilities.HttpUtility.navigateTo($v_4);
                $v_0.stop();
                return;
            }
        }
        this.$T_3 = term;
        EnsureScript('sp.search.js', TypeofFullName('Microsoft.SharePoint.Client.Search.Query.KeywordQuery'), this.$$d_$5x_3);
        Srch.ScriptApplicationManager.get_current().$3z_1();
    },
    
    $5x_3: function Srch_SearchBox$$5x_3() {
        var $v_0 = new SP.CScope('SearchBox.SearchHelper');
        $v_0.start();
        var $v_1 = new Srch.QueryState();
        $v_1.k = this.$T_3;
        var $v_2 = new Srch.QueryEventArgs($v_1);
        if (this.$2g_3) {
            $v_2.queryStateUpdateOption = 2;
            if (!Srch.U.n($v_2.queryState) && Srch.U.e($v_2.queryState.k)) {
                $v_2.queryState.k = null;
            }
        }
        $v_2.userAction = 0;
        this.raiseQueryReadyEvent($v_2);
        if ($v_2.batchDataProviders.length > 0) {
            this.raiseBatchQueryIssuingEvent($v_2);
            var $v_3 = Srch.ScriptApplicationManager.get_clientRuntimeContext();
            var $v_4 = [];
            var $v_5 = [];
            for (var $v_C = 0; $v_C < $v_2.batchDataProviders.length; $v_C++) {
                var $v_D = $v_2.batchDataProviders[$v_C];
                if (!Srch.U.n($v_D)) {
                    this.$3_2('Search', '*****Building query for query group \'{0}\'*****', $v_D.$5_3);
                    var $v_E = Microsoft.SharePoint.Client.Search.Query.KeywordQuery.newObject($v_3);
                    Srch.U.fillKeywordQuery($v_E, $v_D);
                    Srch.U.appendArray($v_4, $v_E);
                    Srch.U.appendArray($v_5, $v_D.get_$4W_3());
                }
            }
            var $v_6 = Microsoft.SharePoint.Client.Search.Query.SearchExecutor.newObject($v_3);
            var $v_7 = new SP.ExceptionHandlingScope($v_3);
            var $v_8 = null;
            var $v_9 = null;
            var $v_A = null;
            var $v_B = null;
            try {
                $v_8 = $v_7.startScope();
                try {
                    $v_9 = $v_7.startTry();
                    $v_B = $v_6.executeQueries($v_5, $v_4, true);
                }
                finally {
                    if (!Srch.U.n($v_9)) {
                        $v_9.dispose();
                    }
                }
                try {
                    $v_A = $v_7.startCatch();
                }
                finally {
                    if (!Srch.U.n($v_A)) {
                        $v_A.dispose();
                    }
                }
            }
            finally {
                if (!Srch.U.n($v_8)) {
                    $v_8.dispose();
                }
            }
            this.$1_2('Search', '*****Batch connecting to server*****');
            var $$t_P = this, $$t_Q = this;
            $v_3.executeQueryAsync(function($p1_0, $p1_1) {
                $v_0.stop();
                if ($v_7.get_hasException()) {
                    $$t_P.$1_2('Search', '*****failure*****');
                    var $v_F = Srch.ControlMessage.getFromExceptionHandlingScope($v_7);
                    var $v_G = new Srch.BatchResultEventArgs($$t_P.$44_3($v_F));
                    $$t_P.raiseBatchResultReadyEvent($v_G);
                }
                else {
                    $$t_P.$1_2('Search', '*****Success*****');
                    if (!Srch.U.n($v_B)) {
                        var $v_H = $v_B.get_value();
                        if (!Srch.U.n($v_H)) {
                            var $v_I = new Srch.BatchResultEventArgs($v_H);
                            $$t_P.raiseBatchResultReadyEvent($v_I);
                        }
                    }
                }
            }, function($p1_0, $p1_1) {
                $$t_Q.$1_2('Search', '*****Failure*****');
                $v_0.stop();
                if (!Srch.U.n($p1_1)) {
                    var $v_J = Srch.ControlMessage.getFromClientRequestFailedEventArgs($p1_1);
                    var $v_K = new Srch.BatchResultEventArgs($$t_Q.$44_3($v_J));
                    $$t_Q.raiseBatchResultReadyEvent($v_K);
                }
            });
        }
        else {
            $v_0.stop();
        }
    },
    
    hidePrompt: function Srch_SearchBox$hidePrompt() {
        var $v_0 = this.get_searchBoxInputElement();
        if (Srch.U.n($v_0) || Srch.U.e(this.get_currentPrompt())) {
            return;
        }
        if ($v_0.value === this.get_currentPrompt()) {
            $v_0.value = '';
            Srch.U.ensureCSSClassNameNotExist($v_0, this.$1J_3);
        }
    },
    
    showPrompt: function Srch_SearchBox$showPrompt() {
        var $v_0 = this.get_searchBoxInputElement();
        if (Srch.U.n($v_0) || Srch.U.e(this.get_currentPrompt())) {
            return;
        }
        if ($v_0.value === '') {
            $v_0.value = this.get_currentPrompt();
            Srch.U.ensureCSSClassNameExist($v_0, this.$1J_3);
        }
    },
    
    focus: function Srch_SearchBox$focus() {
        this.$1_2('Focus', '');
        if (!Srch.U.n(this.get_searchBoxInputElement())) {
            this.$1_2('Focus', 'Setting focus...');
            this.get_searchBoxInputElement().focus();
        }
    },
    
    activate: function Srch_SearchBox$activate(prompt, searchBoxInputId, searchBoxContainerId, navigationButtonId, suggestionsListId, navigationListId, searchBoxLinkId, searchBoxProgressClass, searchBoxPromptClass) {
        this.$N_3 = searchBoxInputId;
        this.$a_3 = searchBoxContainerId;
        this.$1y_3 = navigationButtonId;
        this.$H_3 = suggestionsListId;
        this.$E_3 = navigationListId;
        this.$1M_3 = searchBoxLinkId;
        this.$1N_3 = searchBoxProgressClass;
        this.set_currentPrompt(prompt);
        this.$1J_3 = searchBoxPromptClass;
        this.showPrompt();
    },
    
    activateDefaultNavigationBehavior: function Srch_SearchBox$activateDefaultNavigationBehavior() {
        if (this.get_showNavigation()) {
            EnsureScriptFunc('ajaxtoolkit.js', 'AjaxControlToolkit.DropdownListBehavior', this.$$d_$5A_3);
        }
    },
    
    activateDefaultQuerySuggestionBehavior: function Srch_SearchBox$activateDefaultQuerySuggestionBehavior() {
        if (this.$33_3) {
            EnsureScriptFunc('ajaxtoolkit.js', 'AjaxControlToolkit.AutoCompleteBehavior', this.$$d_$5B_3);
        }
    },
    
    $5A_3: function Srch_SearchBox$$5A_3() {
        if (Srch.U.n(this.$v_3[this.$E_3])) {
            var $v_0 = {};
            $v_0['id'] = this.$E_3;
            $v_0['listElementID'] = this.$E_3;
            $v_0['parentElementID'] = this.$a_3;
            $v_0['listCssClass'] = 'ms-qSuggest-list';
            $v_0['listItemCssClass'] = 'ms-qSuggest-listItem';
            $v_0['highlightedItemCssClass'] = 'ms-qSuggest-hListItem';
            $v_0['hrCSSClass'] = 'ms-qSuggest-listSeparator';
            $v_0['offsetWidth'] = -2;
            $v_0['overlappingElementID'] = this.$H_3;
            $v_0['listItems'] = this.$1C_3;
            $v_0['textBoxControl'] = this;
            $v_0['dropdownInitVisible'] = true;
            $v_0['buttonOpenCssClass'] = 'ms-srch-sb-navLink-menuOpen';
            $v_0['containerOpenCssClass'] = 'ms-srch-sb-borderFocused';
            Srch.U.createBehavior(this.$E_3, AjaxControlToolkit.DropdownListBehavior, $v_0, this.$1y_3);
            this.$v_3[this.$E_3] = true;
        }
    },
    
    $5B_3: function Srch_SearchBox$$5B_3() {
        if (Srch.U.n(this.$v_3[this.$H_3])) {
            var $v_0 = {};
            $v_0['id'] = this.$H_3;
            $v_0['completionInterval'] = this.$2q_3;
            $v_0['completionListElementID'] = this.$H_3;
            $v_0['parentElementID'] = this.$a_3;
            $v_0['completionListCssClass'] = 'ms-qSuggest-list';
            $v_0['completionListItemCssClass'] = 'ms-qSuggest-listItem';
            $v_0['personalResultTitleCssClass'] = 'ms-qSuggest-personalResultTitle';
            $v_0['hrCSSClass'] = 'ms-qSuggest-listSeparator';
            $v_0['enterKeyDownScript'] = '$find(\'' + SP.Utilities.HttpUtility.ecmaScriptStringLiteralEncode(this.get_id()) + '\').search($get(\'' + SP.Utilities.HttpUtility.ecmaScriptStringLiteralEncode(this.$N_3) + '\').value)';
            $v_0['highlightedItemCssClass'] = 'ms-qSuggest-hListItem';
            $v_0['minimumPrefixLength'] = this.$2s_3;
            $v_0['offsetWidth'] = -2;
            $v_0['queryCount'] = this.$2r_3;
            $v_0['personalResultCount'] = this.$2k_3;
            $v_0['showPeopleNameSuggestions'] = this.$32_3;
            $v_0['personalResultTitleSingular'] = Srch.Res.qs_PersonalResultTitleSingular;
            $v_0['personalResultTitlePlural'] = Srch.Res.qs_PersonalResultTitlePlural;
            $v_0['overlappingElementID'] = this.$E_3;
            $v_0['sourceId'] = this.get_querySuggestionsSourceID();
            $v_0['searchBoxElementID'] = this.$N_3;
            Srch.U.createBehavior(this.$H_3, AjaxControlToolkit.AutoCompleteBehavior, $v_0, this.$N_3);
            this.$v_3[this.$H_3] = true;
        }
    },
    
    $44_3: function Srch_SearchBox$$44_3($p0) {
        var $v_0 = {};
        $v_0['__'] = $p0;
        var $v_1 = {};
        $v_1['QueryErrors'] = $v_0;
        var $v_2 = {};
        $v_2['__'] = $v_1;
        return $v_2;
    },
    
    $3d_3: function Srch_SearchBox$$3d_3() {
        this.$v_3 = {};
        var $v_0 = SP.PageContextInfo.get_siteAbsoluteUrl();
        var $v_1 = window._spPageContextInfo;
        var $v_2 = $v_1.webTemplate;
        var $v_3 = '1';
        var $v_4 = '50';
        if (Flighting.VariantConfiguration.IsExpFeatureClientEnabled(39) && ($v_2 === $v_4) && ajaxNavigate.get_href().indexOf('results.aspx') < 0) {
            queryBoxControl = new MS.QueryBox.QueryBoxControl(this.get_element());
                                            queryBoxControl.registerPlugins([
                                                new MS.QueryBox.MyPropertiesPlugin(),
                                                new MS.QueryBox.AccessibilityPlugin(),
                                                new MS.QueryBox.ProgressPlugin(),
                                                new MS.QueryBox.AutocompletePlugin(),
                                                new MS.QueryBox.PeopleSearchPlugin(),
                                                new MS.QueryBox.DocumentPlugin(),
                                                new MS.QueryBox.NoResultPlugin(),
                                                new MS.QueryBox.FeedbackPlugin()
                                            ]);
                                        var self = this;
                                        queryBoxControl.search().subscribe(function (e){
                                            var term = e.currentTarget.querySelector('.ms-querybox-input').value;
                                            var fragments = MS.QueryBox.Utils.getFragmentParams();
                                            fragments['ms-querybox-query'] = term;
                                            MS.QueryBox.Utils.setFragmentParams(fragments);
                                            self.search(term);
                                            return Srch.U.cancelEvent(e);
                                        });
            ;
        }
        else {
            this.renderControl(null, null);
        }
        if (this.$30_3) {
            this.focus();
        }
    }
}


Srch.U = function Srch_U() {
}
Srch.U.e = function Srch_U$e(str) {
    return SP.ScriptUtility.isNullOrEmptyString(str);
}
Srch.U.w = function Srch_U$w(str) {
    if (SP.ScriptUtility.isNullOrUndefined(str)) {
        return true;
    }
    else {
        return SP.ScriptUtility.isNullOrEmptyString(str.trim());
    }
}
Srch.U.n = function Srch_U$n(obj) {
    return SP.ScriptUtility.isNullOrUndefined(obj);
}
Srch.U.isPageInEditMode = function Srch_U$isPageInEditMode() {
    if (Srch.U.e(Srch.U.$1X)) {
        var $v_0 = $get('MSOSPWebPartManager_DisplayModeName');
        if (!Srch.U.n($v_0)) {
            Srch.U.$1X = $v_0.value;
        }
    }
    if (Srch.U.$1X === 'Edit' || Srch.U.$1X === 'Design') {
        return true;
    }
    else {
        return false;
    }
}
Srch.U.isPageInMdsMode = function Srch_U$isPageInMdsMode() {
    return window.location.pathname.toLowerCase().endsWith('/_layouts/15/start.aspx');
}
Srch.U.isPagePartialLoad = function Srch_U$isPagePartialLoad(e) {
    if (Srch.U.isPageInMdsMode()) {
        return false;
    }
    else {
        return e.get_isPartialLoad();
    }
}
Srch.U.isRTL = function Srch_U$isRTL() {
    return document.documentElement.dir === 'rtl';
}
Srch.U.ensureNotNullOrUndefined = function Srch_U$ensureNotNullOrUndefined(value, context, methodName, paraName) {
    var $v_0 = '';
    if (!Srch.U.n(context)) {
        $v_0 = Object.getType(context).getName() + '.';
    }
    if (!value) {
        Srch.U.$2F(Error.argumentNull($v_0 + methodName + '.' + paraName));
    }
    else if (typeof(value) === 'undefined') {
        Srch.U.$2F(Error.argumentUndefined($v_0 + methodName + '.' + paraName));
    }
}
Srch.U.ensureNotNullOrEmptyString = function Srch_U$ensureNotNullOrEmptyString(value, context, methodName, paraName) {
    var $v_0 = '';
    if (!Srch.U.n(context)) {
        $v_0 = Object.getType(context).getName() + '.';
    }
    if (!value) {
        Srch.U.$2F(Error.argumentNull($v_0 + methodName + '.' + paraName));
    }
    else if (typeof(value) === 'undefined') {
        Srch.U.$2F(Error.argumentUndefined($v_0 + methodName + '.' + paraName));
    }
    else if (value.length < 1) {
        Srch.U.$2F(Error.argumentOutOfRange($v_0 + methodName + '.' + paraName));
    }
}
Srch.U.encodeUrlForHtmlAttributes = function Srch_U$encodeUrlForHtmlAttributes(url) {
    if (Srch.U.e(url)) {
        return '';
    }
    var $v_0 = [ new RegExp('&', 'g'), new RegExp('<', 'g'), new RegExp('>', 'g'), new RegExp('\"', 'g'), new RegExp('\'', 'g') ];
    url = url.replace($v_0[0], '&amp;');
    url = url.replace($v_0[1], '&lt;');
    url = url.replace($v_0[2], '&gt;');
    url = url.replace($v_0[3], '&quot;');
    return url.replace($v_0[4], '&#39;');
}
Srch.U.htmlEncodeNonBase64ImageUrl = function Srch_U$htmlEncodeNonBase64ImageUrl(imageurl) {
    if (!Srch.U.n(imageurl)) {
        var $v_0 = imageurl;
        var $v_1 = imageurl.toLowerCase().indexOf('data:');
        if ($v_1 === -1) {
            $v_0 = Srch.U.encodeUrlForHtmlAttributes(Srch.U.ensureAllowedProtocol(imageurl));
        }
        return $v_0;
    }
    return imageurl;
}
Srch.U.$2F = function Srch_U$$2F($p0) {
    alert($p0.message);
    throw $p0;
}
Srch.U.$59 = function Srch_U$$59($p0, $p1) {
    if (Srch.U.isPrimitive($p0)) {
        return $p0;
    }
    var $v_0 = $p0;
    var $v_1 = new ($p1)(null);
    var $$dict_4 = $v_0;
    for (var $$key_5 in $$dict_4) {
        var $v_2 = { key: $$key_5, value: $$dict_4[$$key_5] };
        if ('function' !== typeof($v_2.value)) {
            $v_1[$v_2.key] = $v_2.value;
        }
    }
    return $v_1;
}
Srch.U.$5Y = function Srch_U$$5Y($p0, $p1) {
    if (Srch.U.isPrimitive($p0) || Srch.U.n($p0) || Srch.U.n($p1)) {
        return;
    }
    var $v_0 = $p0;
    if (Srch.U.n($v_0)) {
        return;
    }
    var $$dict_3 = $v_0;
    for (var $$key_4 in $$dict_3) {
        var $v_1 = { key: $$key_4, value: $$dict_3[$$key_4] };
        if ('function' !== typeof($v_1.value)) {
            $p1($p0, $v_1.key, $v_1.value);
        }
    }
    return;
}
Srch.U.$45 = function Srch_U$$45($p0, $p1) {
    Srch.U.$5Y($p0, function($p1_0, $p1_1, $p1_2) {
        $p1($p1_0, $p1_1, $p1_2);
        if (!Srch.U.n($p1_2) && 'object' === typeof($p1_2)) {
            Srch.U.$45($p1_2, $p1);
        }
    });
}
Srch.U.$2R = function Srch_U$$2R($p0, $p1) {
    if (!Srch.U.n($p0)) {
        var $v_0 = [];
        for (var $v_1 = 0; $v_1 < $p0.length; $v_1++) {
            Srch.U.appendArray($v_0, Srch.U.$59($p0[$v_1], $p1));
        }
        return $v_0;
    }
    return $p0;
}
Srch.U.copyDictionary = function Srch_U$copyDictionary(source) {
    var $v_0 = {};
    var $$dict_2 = source;
    for (var $$key_3 in $$dict_2) {
        var $v_1 = { key: $$key_3, value: $$dict_2[$$key_3] };
        $v_0[$v_1.key] = $v_1.value;
    }
    return $v_0;
}
Srch.U.isPrimitive = function Srch_U$isPrimitive(obj) {
    return Srch.U.n(obj) || ('function' !== typeof(obj) && 'object' !== typeof(obj));
}
Srch.U.isArray = function Srch_U$isArray(obj) {
    return IsArray(obj);
}
Srch.U.appendArray = function Srch_U$appendArray(a, item) {
    if (!Srch.U.n(a)) {
        a.push(item);
    }
}
Srch.U.setFieldOnObject = function Srch_U$setFieldOnObject(targetObject, fieldName, fieldValue) {
    if (!Srch.U.n(targetObject) && !Srch.U.n(fieldValue) && !Srch.U.w(fieldName)) {
        targetObject[fieldName] = fieldValue;
        return true;
    }
    return false;
}
Srch.U.getFieldOnObject = function Srch_U$getFieldOnObject(targetObject, fieldName) {
    return (Srch.U.n(targetObject) || Srch.U.w(fieldName)) ? null : targetObject[fieldName];
}
Srch.U.getOrCreateFieldOnObject = function Srch_U$getOrCreateFieldOnObject(targetObject, fieldName, defaultValue) {
    var $v_0 = Srch.U.getFieldOnObject(targetObject, fieldName);
    if (Srch.U.n($v_0)) {
        Srch.U.setFieldOnObject(targetObject, fieldName, defaultValue);
        $v_0 = defaultValue;
    }
    return $v_0;
}
Srch.U.getStringFieldOnObject = function Srch_U$getStringFieldOnObject(targetObject, fieldName) {
    return (Srch.U.n(Srch.U.getFieldOnObject(targetObject, fieldName))) ? '' : targetObject[fieldName];
}
Srch.U.isInArray = function Srch_U$isInArray(a, item) {
    if (Srch.U.n(a)) {
        return false;
    }
    for (var $v_0 = 0; $v_0 < a.length; $v_0++) {
        if (item === a[$v_0]) {
            return true;
        }
    }
    return false;
}
Srch.U.removeArray = function Srch_U$removeArray(a, item) {
    if (!Srch.U.n(a)) {
        for (var $v_0 = 0; $v_0 < a.length; $v_0++) {
            if (item === a[$v_0]) {
                return a.splice($v_0, 1);
            }
        }
    }
    return null;
}
Srch.U.trimExtraSpaces = function Srch_U$trimExtraSpaces(text) {
    if (!Srch.U.n(text)) {
        text = text.replace(new RegExp('\\s+', 'gi'), ' ');
        text = text.trim();
        if (Srch.U.w(text)) {
            text = '';
        }
    }
    return text;
}
Srch.U.ensureCSSClassNameExist = function Srch_U$ensureCSSClassNameExist(e, className) {
    if (!Srch.U.n(e) && !Srch.U.n(className)) {
        Sys.UI.DomElement.addCssClass(e, Srch.U.trimExtraSpaces(className));
    }
}
Srch.U.ensureCSSClassNameNotExist = function Srch_U$ensureCSSClassNameNotExist(e, className) {
    if (!Srch.U.n(e) && !Srch.U.n(className)) {
        Sys.UI.DomElement.removeCssClass(e, Srch.U.trimExtraSpaces(className));
    }
}
Srch.U.setCookie = function Srch_U$setCookie(name, value, expires, domain, path) {
    if (!Srch.U.w(name) && !Srch.U.n(value)) {
        var $v_0 = Srch.U.encodeCookieString(name) + '=' + Srch.U.encodeCookieString(value);
        if (!Srch.U.n(expires)) {
            $v_0 += '; expires=' + expires.toUTCString();
        }
        if (!Srch.U.n(domain)) {
            $v_0 += '; domain=' + Srch.U.encodeCookieString(domain);
        }
        if (!Srch.U.n(path)) {
            $v_0 += '; path=' + Srch.U.encodeCookieString(path);
        }
        document.cookie = $v_0;
    }
}
Srch.U.getCookie = function Srch_U$getCookie(name) {
    if (!Srch.U.w(name)) {
        var $v_0 = document.cookie;
        if (!Srch.U.w($v_0)) {
            var $v_1 = $v_0.trim().split(';');
            if (!Srch.U.n($v_1) && $v_1.length > 0) {
                for (var $v_2 = 0; $v_2 < $v_1.length; $v_2++) {
                    var $v_3 = $v_1[$v_2];
                    if (!Srch.U.w($v_3)) {
                        var $v_4 = $v_3.trim().split('=');
                        if (!Srch.U.n($v_4) && $v_4.length === 2) {
                            var $v_5 = $v_4[0];
                            var $v_6 = $v_4[1];
                            if (!Srch.U.n($v_5) && !Srch.U.n($v_6)) {
                                $v_5 = Srch.U.decodeCookieString($v_5);
                                if ($v_5 === name) {
                                    return Srch.U.decodeCookieString($v_6);
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    return null;
}
Srch.U.encodeCookieString = function Srch_U$encodeCookieString(cookie) {
    return encodeURIComponent(cookie.trim());
}
Srch.U.decodeCookieString = function Srch_U$decodeCookieString(cookie) {
    return decodeURIComponent(cookie.trim());
}
Srch.U.isSameHost = function Srch_U$isSameHost(url, hostName) {
    if (Srch.U.w(url) || Srch.U.w(hostName)) {
        return false;
    }
    var $v_0 = document.createElement('a');
    $v_0.href = url;
    var $v_1 = $v_0.hostname;
    return $v_1.toLowerCase() === hostName.toLowerCase();
}
Srch.U.getHostName = function Srch_U$getHostName() {
    var $v_0 = '';
    if (!Srch.U.n(window.self.location)) {
        $v_0 = window.self.location.hostname;
    }
    return $v_0;
}
Srch.U.trace = function Srch_U$trace(c, method, message) {
    if (Srch.U.get_$4r()) {
        Srch.U.$2a++;
        if (Srch.U.n(c)) {
            message = '[' + Srch.U.$2a + '][' + method + '][' + message + ']';
        }
        else {
            var $v_0 = c.get_id();
            if (Srch.U.e($v_0)) {
                $v_0 = 'No_ID';
            }
            message = '[' + Srch.U.$2a + '][' + $v_0 + ':' + Object.getType(c).getName() + '][' + method + '][' + message + ']';
        }
        Srch.U.$56(message);
    }
}
Srch.U.traceFormatted = function Srch_U$traceFormatted(c, method, format) {
    var values = [];
    for (var $$pai_4 = 3; $$pai_4 < arguments.length; ++$$pai_4) {
        values[$$pai_4 - 3] = arguments[$$pai_4];
    }
    if (Srch.U.get_$4r()) {
        Srch.U.trace(c, method, String.format.apply(null, [ format ].concat(values)));
    }
}
Srch.U.get_$4r = function Srch_U$get_$4r() {
    return (Srch.U.isPageInEditMode() || Srch.ScriptApplicationManager.get_current().states['shipTrace']);
}
Srch.U.$56 = function Srch_U$$56($p0) {
    Sys.Debug.trace($p0);
}
Srch.U.addHandler = function Srch_U$addHandler(element, eventName, handler) {
    if (!Srch.U.n(element) && !Srch.U.e(eventName) && !Srch.U.n(handler)) {
        $addHandler(element, eventName, handler);
    }
}
Srch.U.removeHandler = function Srch_U$removeHandler(element, eventName, handler) {
    if (!Srch.U.n(element) && !Srch.U.e(eventName) && !Srch.U.n(handler)) {
        $removeHandler(element, eventName, handler);
    }
}
Srch.U.isDescendant = function Srch_U$isDescendant(element, container) {
    if (Srch.U.n(container) || Srch.U.n(element)) {
        return false;
    }
    while (!Srch.U.n(element) && element !== container) {
        element = element.parentNode;
    }
    return element === container;
}
Srch.U.getParentElementByName = function Srch_U$getParentElementByName(startingElement, tagName) {
    if (Srch.U.n(startingElement) || startingElement.nodeType !== 1 || Srch.U.w(tagName)) {
        return null;
    }
    if (startingElement.tagName === tagName) {
        return startingElement;
    }
    return Srch.U.getParentElementByName(startingElement.parentNode, tagName);
}
Srch.U.getWorkspace = function Srch_U$getWorkspace(fallback) {
    var $v_0 = $get('s4-workspace');
    if (Srch.U.n($v_0)) {
        return fallback;
    }
    return $v_0;
}
Srch.U.getResultsPageUrl = function Srch_U$getResultsPageUrl(resultPageAddress, term) {
    var $v_0 = Srch.U.replaceUrlTokens(resultPageAddress);
    if (!Srch.U.e($v_0) && Srch.U.isProtocolAllowed($v_0, true)) {
        $v_0 = Srch.U.appendUrlParameter($v_0, 'k=' + SP.Utilities.HttpUtility.urlKeyValueEncode(term));
        var $v_1 = ajaxNavigate.get_href();
        if (!Srch.U.w($v_1) && ($v_1.indexOf('?st=1') !== -1 || $v_1.indexOf('&st=1') !== -1)) {
            $v_0 = Srch.U.appendUrlParameter($v_0, 'st=1');
        }
        var $v_2 = Srch.ScriptApplicationManager.get_current().states['QueryDateTimeCulture'];
        var $v_3 = Srch.ScriptApplicationManager.get_current().states['browserLanguage'];
        if (!Srch.U.n($v_2) && !Srch.U.n($v_3)) {
            var $v_4 = $v_2;
            var $v_5 = $v_3;
            if ($v_4 > 0 && $v_5 !== $v_4) {
                $v_0 = Srch.U.appendUrlParameter($v_0, 'ql=' + $v_4);
            }
        }
        return $v_0;
    }
    else {
        Srch.U.traceFormatted(null, 'GetResultsPageUrl', 'Url \'{0}\' is not valid.', $v_0);
        return null;
    }
}
Srch.U.getParentAttributeByName = function Srch_U$getParentAttributeByName(startingElement, attributeName) {
    if (Srch.U.n(startingElement) || startingElement.nodeType !== 1 || Srch.U.w(attributeName)) {
        return null;
    }
    var $v_0 = startingElement.getAttribute(attributeName);
    if (!Srch.U.n($v_0)) {
        return $v_0;
    }
    return Srch.U.getParentAttributeByName(startingElement.parentNode, attributeName);
}
Srch.U.getClientComponent = function Srch_U$getClientComponent(e) {
    var $v_0 = null;
    if (!Srch.U.n(e)) {
        $v_0 = e.component;
        if (Srch.U.n($v_0)) {
            var $v_1 = Srch.U.getParentAttributeByName(e, 'componentid');
            if (!Srch.U.e($v_1)) {
                $v_0 = $find($v_1);
            }
            if (!Srch.U.n($v_0)) {
                e.component = $v_0;
            }
        }
    }
    return $v_0;
}
Srch.U.getResultObject = function Srch_U$getResultObject(id) {
    return Srch.ScriptApplicationManager.get_current().$3g_1[id];
}
Srch.U.setResultObject = function Srch_U$setResultObject(id, resultObject) {
    Srch.ScriptApplicationManager.get_current().$3g_1[id] = resultObject;
    resultObject['csr_id'] = id;
}
Srch.U.findResultObjectFromDOM = function Srch_U$findResultObjectFromDOM(e, type) {
    var $v_0 = null;
    if (!Srch.U.n(e)) {
        var $v_1 = (e.nodeType === 1) ? e.getAttribute('name') : null;
        if (type === $v_1) {
            $v_0 = Srch.U.getResultObject(e.id);
        }
        else {
            $v_0 = Srch.U.findResultObjectFromDOM(e.parentNode, type);
        }
    }
    return $v_0;
}
Srch.U.appendUrlParameter = function Srch_U$appendUrlParameter(url, keyAndValue) {
    if (!Srch.U.w(url) && !Srch.U.w(keyAndValue)) {
        var $v_0 = '&';
        if (url.indexOf('?') === -1) {
            $v_0 = '?';
        }
        url += $v_0 + keyAndValue;
    }
    return url;
}
Srch.U.removeQueryParameters = function Srch_U$removeQueryParameters(url) {
    if (!Srch.U.w(url)) {
        var $v_0 = url.indexOf('?');
        url = ($v_0 === -1) ? url : url.substring(0, $v_0);
    }
    return url;
}
Srch.U.removeCachingParameters = function Srch_U$removeCachingParameters(url) {
    if (!Srch.U.w(url)) {
        return RemoveQueryParameterFromUrl(RemoveQueryParameterFromUrl(url, 'rev'), 'ctag');
    }
    return url;
}
Srch.U.ensureAllowedProtocol = function Srch_U$ensureAllowedProtocol(value) {
    if (Srch.U.isProtocolAllowed(value, true)) {
        return value;
    }
    return '';
}
Srch.U.isProtocolAllowed = function Srch_U$isProtocolAllowed(value, allowRelativeUrl) {
    return Srch.U.$4O(value, allowRelativeUrl, Srch.U.$42);
}
Srch.U.$4O = function Srch_U$$4O($p0, $p1, $p2) {
    if (Srch.U.e($p0)) {
        if ($p1) {
            return true;
        }
        else {
            return false;
        }
    }
    if (Srch.U.isUrlRelative($p0)) {
        if ($p1) {
            return true;
        }
        else {
            return false;
        }
    }
    $p0 = $p0.toLowerCase().trimStart();
    for (var $v_0 = 0; $v_0 < $p2.length; $v_0++) {
        if ($p0.startsWith($p2[$v_0])) {
            return true;
        }
    }
    return false;
}
Srch.U.isUrlRelative = function Srch_U$isUrlRelative(url) {
    if (!Srch.U.e(url)) {
        url = url.split('?')[0];
        var $v_0 = url.indexOf(':');
        return $v_0 === -1;
    }
    return true;
}
Srch.U.isUrlServerRelative = function Srch_U$isUrlServerRelative(url) {
    if (!Srch.U.e(url)) {
        url = url.trimStart();
        return url.startsWith('/');
    }
    return false;
}
Srch.U.isUrlPagelRelative = function Srch_U$isUrlPagelRelative(url) {
    return Srch.U.isUrlRelative(url) && !Srch.U.isUrlServerRelative(url);
}
Srch.U.isCloudVideoContentId = function Srch_U$isCloudVideoContentId(contentTypeId) {
    if (SP.ScriptUtility.isNullOrEmptyString(contentTypeId)) {
        return false;
    }
    return contentTypeId.startsWith(Srch.U.cloudVideoContentTypeId);
}
Srch.U.getVideoServiceUrl = function Srch_U$getVideoServiceUrl() {
    var $v_0 = new URI(SP.PageContextInfo.get_webAbsoluteUrl());
    $v_0.setFragment('');
    $v_0.setQuery('');
    $v_0.setPath('/portals/hub/_api/VideoService');
    return $v_0.getString();
}
Srch.U.getCloudVideoPlayerPageUrl = function Srch_U$getCloudVideoPlayerPageUrl(videoFileUrl) {
    if (SP.ScriptUtility.isNullOrEmptyString(videoFileUrl)) {
        return '';
    }
    var $v_0 = window._spPageContextInfo;
    var $v_1 = $v_0.layoutsUrl;
    var $v_2 = SP.Utilities.HttpUtility.urlKeyValueEncode(videoFileUrl.replace(new RegExp('\\+', 'g'), '%2B'));
    var $v_3 = SP.PageContextInfo.get_webAbsoluteUrl();
    var $v_4 = videoFileUrl.toLowerCase().indexOf('/portals/');
    if ($v_4 > 0) {
        $v_3 = videoFileUrl.substring(0, $v_4);
    }
    var $v_5 = new URI($v_3);
    $v_5.setFragment('');
    $v_5.setPath('/portals/hub/' + $v_1 + '/videoplayer.aspx');
    $v_5.setQuery('v=' + $v_2);
    return $v_5.getString();
}
Srch.U.logClick = function Srch_U$logClick(e, clickType) {
    var $v_0 = Srch.U.getClientComponent(e);
    if (!Srch.U.n($v_0) && Srch.DisplayControl.isInstanceOfType($v_0)) {
        var $v_1 = $v_0;
        var $v_2 = $v_1.get_dataProvider();
        if (!Srch.U.n($v_2)) {
            var $v_3 = {};
            var $v_4 = Srch.U.getTableProperty($v_1.$A_3, 'piPageImpression');
            if (!Srch.U.e($v_4)) {
                $v_3['piPageImpression'] = $v_4;
            }
            var $v_5 = Srch.U.getTableProperty($v_1.$A_3, 'SourceId');
            if (!Srch.U.n($v_5)) {
                $v_3['SourceId'] = $v_5;
            }
            $v_3['piClickType'] = clickType;
            var $v_6 = Srch.U.findResultObjectFromDOM(e, 'Group');
            if (!Srch.U.n($v_6)) {
                var $v_7 = Srch.U.getTableProperty($v_6, 'piPageImpressionBlockType');
                if (!Srch.U.n($v_7)) {
                    $v_3['piPageImpressionBlockType'] = $v_7;
                }
            }
            if ((clickType === 'Result') || (clickType === 'DeepLink') || (clickType === 'Hover') || (clickType === 'HoverWithWAC') || (clickType === 'HoverSection') || (clickType === 'ActionFollow') || (clickType === 'ActionViewLibrary') || (clickType === 'ActionEdit') || (clickType === 'ActionSend') || (clickType === 'ActionViewDupes')) {
                var $v_8 = Srch.U.findResultObjectFromDOM(e, 'Item');
                if (!Srch.U.n($v_8)) {
                    $v_3['piSearchResult'] = $v_8;
                    if (clickType === 'DeepLink') {
                        if (!Srch.U.n(e) && (e.nodeType === 1)) {
                            var $v_9 = e.getAttribute('linkIndex');
                            if (!Srch.U.n($v_9)) {
                                $v_3['piSearchSubResultIndex'] = parseInt($v_9) + 1;
                            }
                        }
                    }
                }
            }
            $v_3['piUserQuery'] = $v_2.$2_3.k;
            Srch.ClickRecorder.recordPageClick($v_3);
        }
    }
}
Srch.U.fillKeywordQuery = function Srch_U$fillKeywordQuery(query, dp) {
    Srch.U.ensureNotNullOrUndefined(query, null, 'FillKeywordQuery', 'query');
    Srch.U.ensureNotNullOrUndefined(dp, null, 'FillKeywordQuery', 'dp');
    var $v_0 = Srch.ScriptApplicationManager.get_current().states['defaultQueryProperties'];
    Srch.U.ensureNotNullOrUndefined($v_0, null, 'FillKeywordQuery', 'defaultQueryProperties');
    if ((dp.$Q_3) && (!Srch.U.e(dp.$1F_3))) {
        query.set_impressionID(dp.$1F_3);
        Srch.U.traceFormatted(null, 'FillKeywordQuery', 'ImpressionID is \'{0}\'', query.get_impressionID());
    }
    if (!Srch.U.n(dp.$2G_3)) {
        query.set_timeZoneId(dp.$2G_3);
        Srch.U.traceFormatted(null, 'FillKeywordQuery', 'TimeZoneId is \'{0}\'', query.get_timeZoneId());
    }
    if (!Srch.U.e(dp.$2_3.k)) {
        query.set_queryText(dp.$2_3.k);
        Srch.U.traceFormatted(null, 'FillKeywordQuery', 'QueryText is \'{0}\'', query.get_queryText());
    }
    if (!Srch.U.e(dp.$l_3)) {
        query.set_queryTemplate(dp.$l_3);
        Srch.U.traceFormatted(null, 'FillKeywordQuery', 'QueryTemplate is \'{0}\'', query.get_queryTemplate());
    }
    var $v_1 = dp.get_$5G_3();
    if (!Srch.U.n($v_1) && $v_1.length > 0) {
        for (var $v_5 = 0; $v_5 < $v_1.length; $v_5++) {
            var $v_6 = $v_1[$v_5];
            if (!Srch.U.n($v_6)) {
                Srch.U.traceFormatted(null, 'FillKeywordQuery', 'Adding Sort \'{0}\' {1}', $v_6.p, $v_6.d);
                query.get_sortList().add($v_6.p, $v_6.d);
            }
        }
    }
    var $v_2 = 0;
    if (dp.$2_3.s > 0) {
        $v_2 = dp.$2_3.s - 1;
        query.set_startRow($v_2);
        Srch.U.traceFormatted(null, 'FillKeywordQuery', 'StartRow is \'{0}\'', query.get_startRow());
    }
    if (!Srch.U.n(dp.$2_3.r) && dp.$2_3.r.length > 0) {
        for (var $v_7 = 0; $v_7 < dp.$2_3.r.length; $v_7++) {
            var $v_8 = dp.$2_3.r[$v_7];
            if (!Srch.U.n($v_8)) {
                Srch.U.traceFormatted(null, 'FillKeywordQuery', 'Adding RefinementFilter \'{0}\'', $v_8.toString());
                query.get_refinementFilters().add($v_8.toString());
            }
        }
    }
    else if (!Srch.U.n(dp.get_fallbackRefinementFilters()) && dp.get_fallbackRefinementFilters().length > 0) {
        for (var $v_9 = 0; $v_9 < dp.get_fallbackRefinementFilters().length; $v_9++) {
            var $v_A = dp.get_fallbackRefinementFilters()[$v_9];
            if (!Srch.U.n($v_A)) {
                Srch.U.traceFormatted(null, 'FillKeywordQuery', 'Adding RefinementFilter \'{0}\'', $v_A.toString());
                query.get_refinementFilters().add($v_A.toString());
            }
        }
    }
    if (!Srch.U.e(dp.$1V_3)) {
        var $v_B = '';
        $v_B += ' site:\"' + dp.$1V_3 + '\"';
        query.set_hiddenConstraints($v_B);
        Srch.U.traceFormatted(null, 'FillKeywordQuery', 'HiddenConstraints is \'{0}\'', query.get_hiddenConstraints());
    }
    query.set_culture(dp.get_effectiveQueryLanguage());
    Srch.U.traceFormatted(null, 'FillKeywordQuery', 'Culture is \'{0}\'', query.get_culture());
    if (dp.$p_3 > 0) {
        query.set_rowsPerPage(dp.$p_3);
        query.set_rowLimit(dp.$p_3);
        query.set_totalRowsExactMinimum($v_2 + 1 + query.get_rowsPerPage() * dp.$Y_3);
        Srch.U.traceFormatted(null, 'FillKeywordQuery', 'RowsPerPage is \'{0}\'', query.get_rowsPerPage());
        Srch.U.traceFormatted(null, 'FillKeywordQuery', 'RowLimit is \'{0}\'', query.get_rowLimit());
        Srch.U.traceFormatted(null, 'FillKeywordQuery', 'TotalRowsExactMinimum is \'{0}\'', query.get_totalRowsExactMinimum());
    }
    if (!Srch.U.w(dp.$1Q_3)) {
        query.set_sourceId(new SP.Guid(dp.$1Q_3));
        Srch.U.traceFormatted(null, 'FillKeywordQuery', 'SourceId is \'{0}\'', query.get_sourceId());
    }
    else {
        Srch.U.traceFormatted(null, 'FillKeywordQuery', 'SourceId is null');
    }
    if (!Srch.U.w(dp.$1S_3) && !Srch.U.w(dp.$1R_3)) {
        query.get_properties().set_item('SourceName', dp.$1S_3);
        query.get_properties().set_item('SourceLevel', dp.$1R_3);
        Srch.U.traceFormatted(null, 'FillKeywordQuery', 'SourceName is \'{0}\' and SourceLevel is \'{1}\'', dp.$1S_3, dp.$1R_3);
    }
    else {
        Srch.U.trace(null, 'FillKeywordQuery', 'SourceName or SourceLevel is null or empty');
    }
    if (!Srch.U.n(dp.$O_3) && dp.$O_3.length > 0) {
        query.set_refiners(dp.$O_3.join(','));
        Srch.U.traceFormatted(null, 'FillKeywordQuery', 'Refiners is \'{0}\'', query.get_refiners());
    }
    if (!Srch.U.n(dp.$b_3) && dp.$b_3.length > 0) {
        for (var $v_C = 0; $v_C < dp.$b_3.length; $v_C++) {
            Srch.U.traceFormatted(null, 'FillKeywordQuery', 'Adding SelectProperty \'{0}\'', dp.$b_3[$v_C]);
            query.get_selectProperties().add(dp.$b_3[$v_C]);
        }
    }
    if (!Srch.U.n(dp.$X_3) && dp.$X_3.length > 0) {
        for (var $v_D = 0; $v_D < dp.$X_3.length; $v_D++) {
            Srch.U.traceFormatted(null, 'FillKeywordQuery', 'Adding HitHighlightedProperty \'{0}\'', dp.$X_3[$v_D]);
            query.get_hitHighlightedProperties().add(dp.$X_3[$v_D]);
        }
    }
    if (!Srch.U.e(dp.$2_3.m)) {
        query.set_rankingModelId(dp.$2_3.m);
        Srch.U.traceFormatted(null, 'FillKeywordQuery', 'RankingModelId is \'{0}\'', query.get_rankingModelId());
    }
    else if (!Srch.U.e(dp.$1m_3)) {
        query.set_rankingModelId(dp.$1m_3);
        Srch.U.traceFormatted(null, 'FillKeywordQuery', 'RankingModelId is \'{0}\'', query.get_rankingModelId());
    }
    if ($v_0.enableStemming !== dp.$1j_3) {
        query.set_enableStemming(dp.$1j_3);
        Srch.U.traceFormatted(null, 'FillKeywordQuery', 'EnableStemming is \'{0}\'', query.get_enableStemming());
    }
    if ($v_0.enablePhonetic !== dp.$1h_3) {
        query.set_enablePhonetic(dp.$1h_3);
        Srch.U.traceFormatted(null, 'FillKeywordQuery', 'EnablePhonetic is \'{0}\'', query.get_enablePhonetic());
    }
    if ($v_0.enableNicknames !== dp.$1f_3) {
        query.set_enableNicknames(dp.$1f_3);
        Srch.U.traceFormatted(null, 'Refiners', 'EnableNicknames is \'{0}\'', query.get_enableNicknames());
    }
    if ($v_0.trimDuplicates !== dp.$2H_3) {
        query.set_trimDuplicates(dp.$2H_3);
        Srch.U.traceFormatted(null, 'FillKeywordQuery', 'TrimDuplicates is \'{0}\'', query.get_trimDuplicates());
    }
    var $$dict_E = dp.get_properties();
    for (var $$key_F in $$dict_E) {
        var $v_E = { key: $$key_F, value: $$dict_E[$$key_F] };
        Srch.U.traceFormatted(null, 'FillKeywordQuery', 'Adding Property \'{0}\':\'{1}\'', $v_E.key, $v_E.value);
        query.get_properties().set_item($v_E.key, $v_E.value);
    }
    if (dp.$2j_3 && !Srch.U.n(Srch.ScriptApplicationManager.get_current().states['currentUserProfileId'])) {
        var $v_F = Srch.ScriptApplicationManager.get_current().states['currentUserProfileId'];
        query.set_personalizationData(Microsoft.SharePoint.Client.Search.Query.QueryPersonalizationData.newObject(Srch.ScriptApplicationManager.get_clientRuntimeContext(), $v_F));
        Srch.U.traceFormatted(null, 'FillKeywordQuery', 'PrifleID is \'{0}\'', $v_F);
    }
    query.set_resultsUrl(dp.get_resultsUrl());
    Srch.U.traceFormatted(null, 'FillKeywordQuery', 'ResultsUrl is \'{0}\'', query.get_resultsUrl());
    if ($v_0.bypassResultTypes !== dp.bypassResultTypes) {
        query.set_bypassResultTypes(dp.bypassResultTypes);
        Srch.U.traceFormatted(null, 'FillKeywordQuery', 'BypassResultTypes is \'{0}\'', query.get_bypassResultTypes());
    }
    if (dp.$2_3.d > 0) {
        query.set_trimDuplicatesIncludeId(dp.$2_3.d);
        Srch.U.traceFormatted(null, 'FillKeywordQuery', 'TrimDuplicatesIncludeId is \'{0}\'', query.get_trimDuplicatesIncludeId());
    }
    var $v_3 = dp.$2M_3;
    if (Srch.U.w($v_3)) {
        if (!Srch.U.e(dp.$l_3) && !Srch.U.n(dp.$l_3.match(new RegExp('\\{searchboxquery\\}|\\[searchboxquery\\]', 'gi')))) {
            $v_3 = 'UI';
        }
    }
    query.set_clientType($v_3);
    Srch.U.traceFormatted(null, 'FillKeywordQuery', 'ClientType is \'{0}\'', query.get_clientType());
    var $v_4 = dp.$2L_3;
    if (!Srch.U.w($v_4)) {
        query.get_properties().set_item('ClientFunction', $v_4);
        Srch.U.traceFormatted(null, 'FillKeywordQuery', 'ClientFunction is \'{0}\'', $v_4);
    }
    if (!Srch.U.n(dp.$m_3) && dp.$m_3.length > 0) {
        for (var $v_G = 0; $v_G < dp.$m_3.length; $v_G++) {
            var $v_H = dp.$m_3[$v_G];
            if (!Srch.U.n($v_H)) {
                Srch.U.traceFormatted(null, 'FillKeywordQuery', 'Adding rank rule \'{0}\' \'{1}\' {2}', $v_H.matchType, $v_H.matchValue, $v_H.boost);
                query.get_reorderingRules().add($v_H.matchType, $v_H.matchValue, $v_H.boost);
            }
        }
    }
    if ($v_0.enableInterleaving !== dp.$1e_3) {
        query.set_enableInterleaving(dp.$1e_3);
        Srch.U.traceFormatted(null, 'FillKeywordQuery', 'EnableInterleaving is \'{0}\'', query.get_enableInterleaving());
    }
    if (dp.$2_3.e > 0) {
        query.set_enableQueryRules(false);
        Srch.U.traceFormatted(null, 'FillKeywordQuery', 'EnableQueryRules is \'{0}\'', query.get_enableQueryRules());
    }
    else {
        if ($v_0.enableQueryRules !== dp.$1i_3) {
            query.set_enableQueryRules(dp.$1i_3);
            Srch.U.traceFormatted(null, 'FillKeywordQuery', 'EnableQueryRules is \'{0}\'', query.get_enableQueryRules());
        }
    }
    if ($v_0.processBestBets !== dp.processBestBets) {
        query.set_processBestBets(dp.processBestBets);
        Srch.U.traceFormatted(null, 'FillKeywordQuery', 'ProcessBestBets is \'{0}\'', query.get_processBestBets());
    }
    if ($v_0.uiLanguage !== SP.PageContextInfo.get_currentLanguage()) {
        query.set_uiLanguage(SP.PageContextInfo.get_currentLanguage());
        Srch.U.traceFormatted(null, 'FillKeywordQuery', 'UILanguage is \'{0}\'', query.get_uiLanguage());
    }
    if ($v_0.summaryLength !== dp.$2D_3) {
        query.set_summaryLength(dp.$2D_3);
        Srch.U.traceFormatted(null, 'FillKeywordQuery', 'SummaryLength is \'{0}\'', query.get_summaryLength());
    }
    if ($v_0.desiredSnippetLength !== dp.$1c_3) {
        query.set_desiredSnippetLength(dp.$1c_3);
        Srch.U.traceFormatted(null, 'FillKeywordQuery', 'DesiredSnippetLength is \'{0}\'', query.get_desiredSnippetLength());
    }
    query.get_properties().set_item('QuerySession', Srch.ScriptApplicationManager.get_current().get_searchSessionID());
    Srch.U.traceFormatted(null, 'FillKeywordQuery', 'QuerySession is \'{0}\'', query.get_properties().get_item('QuerySession'));
    if (!Srch.U.e(dp.$1U_3)) {
        query.set_collapseSpecification(dp.$1U_3);
        Srch.U.traceFormatted(null, 'FillKeywordQuery', 'CollapseSpecification is \'{0}\'', query.get_collapseSpecification());
    }
    if ($v_0.processPersonalFavorites !== dp.$27_3) {
        query.set_processPersonalFavorites(dp.$27_3);
        Srch.U.traceFormatted(null, 'FillKeywordQuery', 'ProcessPersonalFavorites is \'{0}\'', query.get_processPersonalFavorites());
    }
    if ($v_0.enableOrderingHitHighlightedProperty !== dp.$1g_3) {
        query.set_enableOrderingHitHighlightedProperty(dp.$1g_3);
        Srch.U.traceFormatted(null, 'FillKeywordQuery', 'EnableOrderingHitHighlightedProperty is \'{0}\'', query.get_enableOrderingHitHighlightedProperty());
    }
    if ($v_0.hitHighlightedMultivaluePropertyLimit !== dp.$1s_3) {
        query.set_hitHighlightedMultivaluePropertyLimit(dp.$1s_3);
        Srch.U.traceFormatted(null, 'FillKeywordQuery', 'HitHighlightedMultivaluePropertyLimit is \'{0}\'', query.get_hitHighlightedMultivaluePropertyLimit());
    }
    if (!SP.ScriptUtility.isNullOrEmptyString(dp.$22_3)) {
        query.set_safeQueryPropertiesTemplateUrl(dp.$22_3);
        query.set_ignoreSafeQueryPropertiesTemplateUrl(false);
        Srch.U.traceFormatted(null, 'FillKeywordQuery', 'QueryPropertiesTemplateUrl is \'{0}\'', query.get_safeQueryPropertiesTemplateUrl());
    }
    if (Srch.ScriptApplicationManager.get_current().states['shipTrace']) {
        query.get_properties().set_item('DebugMode', true);
        Srch.U.traceFormatted(null, 'FillKeywordQuery', 'DebugMode is \'true\'');
    }
    query.get_properties().set_item('QueryDateTimeCulture', dp.get_queryDateTimeCulture());
}
Srch.U.getUsernameFromAuthorField = function Srch_U$getUsernameFromAuthorField(authorField) {
    var $v_0 = Srch.U.$4F(authorField, 2).trim();
    if ($v_0.indexOf(' ') >= 0) {
        $v_0 = $v_0.substring($v_0.indexOf(' ') + 1, $v_0.length);
    }
    return $v_0.trim();
}
Srch.U.getDisplayNameFromAuthorField = function Srch_U$getDisplayNameFromAuthorField(authorField) {
    return Srch.U.$4F(authorField, 1).trim();
}
Srch.U.$4F = function Srch_U$$4F($p0, $p1) {
    if (Srch.U.w($p0) || $p1 < 0 || $p1 > 2) {
        return '';
    }
    var $v_0 = $p0.split(' | ');
    if (Srch.U.n($v_0) || $v_0.length !== 3 || Srch.U.w($v_0[$p1])) {
        return '';
    }
    return $v_0[$p1];
}
Srch.U.getArray = function Srch_U$getArray(property) {
    if (Srch.U.e(property)) {
        return property;
    }
    if (property.indexOf(',#') >= 0) {
        return property.split(',#');
    }
    else if (property.indexOf(' | ') >= 0) {
        return Srch.ValueInfo.Renderers.parseUserFieldValue(property).split(',');
    }
    return property.split(';');
}
Srch.U.getFriendlyNameForFileExtension = function Srch_U$getFriendlyNameForFileExtension(fileExtension) {
    if (!Srch.U.w(fileExtension)) {
        fileExtension = fileExtension.toLowerCase();
        if (fileExtension === 'css') {
            return 'file_CSS';
        }
        else if (fileExtension === 'hlp') {
            return 'file_Help';
        }
        else if (fileExtension === 'msi' || fileExtension === 'msp') {
            return 'file_Installer';
        }
        else if (fileExtension === 'js' || fileExtension === 'jse') {
            return 'file_JavaScript';
        }
        else if (fileExtension === 'log') {
            return 'file_Log';
        }
        else if (fileExtension === 'eml' || fileExtension === 'msg') {
            return 'file_Mail';
        }
        else if (fileExtension === 'accdb' || fileExtension === 'accdt' || fileExtension === 'accdc' || fileExtension === 'accde' || fileExtension === 'accdr') {
            return 'file_Access';
        }
        else if (fileExtension === 'odc' || fileExtension === 'xls' || fileExtension === 'xlsb' || fileExtension === 'xlsm' || fileExtension === 'xlsx' || fileExtension === 'xlt' || fileExtension === 'xltb' || fileExtension === 'xltm' || fileExtension === 'xltx') {
            return 'file_Excel';
        }
        else if (fileExtension === 'xsn') {
            return 'file_InfoPath';
        }
        else if (fileExtension === 'one' || fileExtension === 'onepkg' || fileExtension === 'onetoc2') {
            return 'file_OneNote';
        }
        else if (fileExtension === 'pot' || fileExtension === 'potm' || fileExtension === 'potx' || fileExtension === 'pps' || fileExtension === 'ppsm' || fileExtension === 'ppsx' || fileExtension === 'ppt' || fileExtension === 'pptm' || fileExtension === 'pptx') {
            return 'file_PowerPoint';
        }
        else if (fileExtension === 'mpp' || fileExtension === 'mpt') {
            return 'file_Project';
        }
        else if (fileExtension === 'pub') {
            return 'file_Publisher';
        }
        else if (fileExtension === 'ascx' || fileExtension === 'master') {
            return 'file_SPDesigner';
        }
        else if (fileExtension === 'vdw' || fileExtension === 'vdx' || fileExtension === 'vsd' || fileExtension === 'vsl' || fileExtension === 'vss' || fileExtension === 'vst' || fileExtension === 'vsu' || fileExtension === 'vsw' || fileExtension === 'vsx' || fileExtension === 'vtx') {
            return 'file_Visio';
        }
        else if (fileExtension === 'doc' || fileExtension === 'docm' || fileExtension === 'docx' || fileExtension === 'dot' || fileExtension === 'dotm' || fileExtension === 'dotx' || fileExtension === 'mht' || fileExtension === 'mhtml') {
            return 'file_Word';
        }
        else if (fileExtension === 'xps') {
            return 'file_XPS';
        }
        else if (fileExtension === 'wm' || fileExtension === 'wma' || fileExtension === 'wmd' || fileExtension === 'wmp' || fileExtension === 'wms' || fileExtension === 'wmv' || fileExtension === 'wmx' || fileExtension === 'wmz') {
            return 'file_Audio';
        }
        else if (fileExtension === 'rtf') {
            return 'file_RTF';
        }
        else if (fileExtension === 'txt') {
            return 'file_Text';
        }
        else if (Srch.U.isWebPage(fileExtension)) {
            return 'file_WebPage';
        }
        else if (fileExtension === 'xml') {
            return 'file_XML';
        }
        else if (fileExtension === 'xsl' || fileExtension === 'xslt') {
            return 'file_XSL';
        }
        else if (fileExtension === 'zip') {
            return 'file_Zip';
        }
        else if (fileExtension === 'pdf') {
            return 'file_PDF';
        }
    }
    return 'file_Document';
}
Srch.U.isWebPage = function Srch_U$isWebPage(fileExtension) {
    if (Srch.U.w(fileExtension)) {
        return false;
    }
    fileExtension = fileExtension.toLowerCase();
    return fileExtension === 'ascx' || fileExtension === 'asp' || fileExtension === 'aspx' || fileExtension === 'htm' || fileExtension === 'html' || fileExtension === 'jhtml' || fileExtension === 'js' || fileExtension === 'mht' || fileExtension === 'mhtml' || fileExtension === 'mspx' || fileExtension === 'php';
}
Srch.U.truncateEnd = function Srch_U$truncateEnd(original, maxChars) {
    return Srch.U.getTrimmedString(original, maxChars);
}
Srch.U.isDefaultSiteLogo = function Srch_U$isDefaultSiteLogo(logoUrl) {
    var $v_0 = false;
    if (logoUrl.indexOf('/_layouts/images/titlegraphic.gif') !== -1) {
        $v_0 = true;
    }
    else if (logoUrl.indexOf('/_layouts/images/siteicon.png') !== -1) {
        $v_0 = true;
    }
    else if (logoUrl.indexOf('/_layouts/15/images/siteIcon.png') !== -1) {
        $v_0 = true;
    }
    return $v_0;
}
Srch.U.toFormattedDate = function Srch_U$toFormattedDate(dateValue, dateTimeFormatId) {
    if (Srch.U.n(dateValue) || !(Date.isInstanceOfType(dateValue))) {
        return '';
    }
    if (Srch.U.w(dateTimeFormatId)) {
        dateTimeFormatId = 'LongDatePattern';
    }
    return (dateValue).localeFormat(Sys.CultureInfo.CurrentCulture.dateTimeFormat[dateTimeFormatId]);
}
Srch.U.toFormattedNumber = function Srch_U$toFormattedNumber(num, defaultDecimalPlacesIfNotInt) {
    if (Srch.U.n(num)) {
        return '';
    }
    else if (!(Number.isInstanceOfType(num))) {
        num = parseFloat(num.toString());
        if (Srch.U.n(num) || isNaN(num)) {
            return '';
        }
    }
    if (Srch.U.n(defaultDecimalPlacesIfNotInt)) {
        defaultDecimalPlacesIfNotInt = 2;
    }
    var $v_0 = Math.floor(num);
    var $v_1 = num;
    var $v_2 = $v_0.localeFormat('N0');
    if ($v_0 !== $v_1) {
        $v_2 = $v_1.localeFormat('N' + defaultDecimalPlacesIfNotInt);
    }
    return $v_2;
}
Srch.U.toFriendlyNumber = function Srch_U$toFriendlyNumber(num) {
    if (num < 1000) {
        return num.toString();
    }
    if (num < 100000) {
        var $v_0 = Math.floor(num / 1000);
        return $v_0.toString() + ',000+';
    }
    else {
        return '100,000+';
    }
}
Srch.U.toFileSizeDisplay = function Srch_U$toFileSizeDisplay(numberOfBytes, showDecimalPart) {
    if (Srch.U.n(showDecimalPart)) {
        showDecimalPart = true;
    }
    var $v_0 = '';
    var $v_1 = numberOfBytes;
    var $v_2 = 1073741824;
    var $v_3 = 1048576;
    var $v_4 = 1024;
    if (numberOfBytes > $v_2) {
        $v_0 = Srch.U.loadResource('cc_ValueRenderer_FileSizeGigabyte');
        $v_1 = numberOfBytes / $v_2;
    }
    else if (numberOfBytes > $v_3) {
        $v_0 = Srch.U.loadResource('cc_ValueRenderer_FileSizeMegabyte');
        $v_1 = numberOfBytes / $v_3;
    }
    else if (numberOfBytes > $v_4) {
        $v_0 = Srch.U.loadResource('cc_ValueRenderer_FileSizeKilobyte');
        $v_1 = numberOfBytes / $v_4;
    }
    else {
    }
    var $v_5 = Srch.U.toFormattedNumber($v_1, 0);
    var $v_6 = Math.round($v_1);
    var $v_7 = Math.round(($v_1 * 10) - ($v_6 * 10));
    if (showDecimalPart && $v_7 > 0) {
        $v_5 = Srch.U.toFormattedNumber($v_1, 1);
    }
    if (!Srch.U.w($v_0)) {
        $v_5 += ' ' + $v_0;
    }
    return $v_5;
}
Srch.U.getVideoImageWithFallbackSource = function Srch_U$getVideoImageWithFallbackSource(valueObject, width, height) {
    var $v_0 = Srch.U.getImageSourceWithRendition(valueObject, width, height);
    return String.format('<img class=\"ms-srch-video-results-centered ms-hide\" src=\"{0}\" onload=\"(event.srcElement ? event.srcElement : event.target).style.display = \'\';\" onerror=\"(event.srcElement ? event.srcElement : event.target).src = \'{1}\'\"/>', SP.Utilities.HttpUtility.urlPathEncode((Srch.U.e($v_0)) ? 'none' : decodeURIComponent($v_0)), SP.Utilities.HttpUtility.ecmaScriptStringLiteralEncode(SP.Utilities.VersionUtility.getImageUrl('256_icvidset.gif')));
}
Srch.U.getImageSourceWithRendition = function Srch_U$getImageSourceWithRendition(imageInfo, width, height) {
    var $v_0 = '';
    if (!Srch.U.n(imageInfo) && !imageInfo.isEmpty) {
        $v_0 = STSHtmlDecode(Srch.ValueInfo.Renderers.imageSourceRendering(imageInfo));
        var $v_1 = !Srch.U.n(width) && !isNaN(width);
        if ($v_1) {
            $v_0 = SP.Utilities.UrlBuilder.replaceOrAddQueryString($v_0, 'width', width.toString());
        }
        var $v_2 = !Srch.U.n(height) && !isNaN(height);
        if ($v_2) {
            $v_0 = SP.Utilities.UrlBuilder.replaceOrAddQueryString($v_0, 'height', height.toString());
        }
    }
    return SP.Utilities.HttpUtility.htmlEncode(Srch.U.ensureAllowedProtocol($v_0));
}
Srch.U.parseTypedRangeToken = function Srch_U$parseTypedRangeToken(rangeFilterToken, objToStoreFilterTokenType) {
    var $v_0 = new RegExp('range\\([ ]*([^ ,]*)[^,]*,[ ]*([^ ,)]*[)]*)[^)]*\\)', 'g');
    if (Srch.U.w(rangeFilterToken)) {
        rangeFilterToken = '';
    }
    var $v_1 = $v_0.exec(rangeFilterToken);
    if (!Srch.U.n($v_1) && $v_1.length > 2) {
        $v_1[1] = Srch.U.$2i($v_1[1], objToStoreFilterTokenType);
        $v_1[2] = Srch.U.$2i($v_1[2], objToStoreFilterTokenType);
    }
    return $v_1;
}
Srch.U.$2i = function Srch_U$$2i($p0, $p1) {
    var $v_0 = new RegExp('([^(]*)\\(([^)]*)\\)');
    var $v_1 = $v_0.exec($p0);
    if (!Srch.U.n($v_1) && $v_1.length === 3) {
        Srch.U.setFieldOnObject($p1, 'filterTokenType', $v_1[1]);
        return $v_1[2];
    }
    else {
        return $p0;
    }
}
Srch.U.modifyMediaDurationRefinementName = function Srch_U$modifyMediaDurationRefinementName(resultRow) {
    if (Srch.U.n(resultRow)) {
        return;
    }
    var $v_0 = resultRow['RefinementToken'];
    if (Srch.U.e($v_0)) {
        return;
    }
    if ($v_0.indexOf('range(') === -1) {
        return;
    }
    var $v_1 = $v_0.indexOf('(');
    var $v_2 = $v_0.indexOf(',');
    var $v_3 = $v_0.lastIndexOf(',');
    if ($v_3 <= $v_2) {
        $v_3 = $v_0.lastIndexOf(')');
    }
    var $v_4 = $v_1 !== -1 && $v_2 !== -1 && $v_3 !== -1 && $v_1 < $v_2 && $v_2 < $v_3;
    if (!$v_4) {
        return;
    }
    var $v_5 = $v_0.substring($v_1 + 1, $v_2).trim();
    $v_5 = Srch.U.$2i($v_5, null);
    var $v_6 = $v_0.substring($v_2 + 1, $v_3).trim();
    $v_6 = Srch.U.$2i($v_6, null);
    var $v_7 = parseInt($v_5);
    var $v_8 = parseInt($v_6);
    var $v_9 = (isNaN($v_7) && isNaN($v_8)) || (!isNaN($v_7) && $v_7 < 0) || (!isNaN($v_8) && $v_8 < 0) || (!isNaN($v_7) && !isNaN($v_8) && $v_8 < $v_7);
    if ($v_9) {
        return;
    }
    var $v_A = '';
    if (isNaN($v_7)) {
        $v_A = String.format(Srch.U.loadResource('rf_DefaultMinutesLabels_min'), Srch.U.$2X($v_8));
    }
    else if (isNaN($v_8)) {
        $v_A = String.format(Srch.U.loadResource('rf_DefaultMinutesLabels_max'), Srch.U.$2X($v_7));
    }
    else {
        $v_A = String.format(Srch.U.loadResource('rf_DefaultMinutesLabels_range'), Srch.U.$2X($v_7), Srch.U.$2X($v_8));
    }
    if (!Srch.U.e($v_A)) {
        resultRow['RefinementName'] = $v_A;
    }
}
Srch.U.$2X = function Srch_U$$2X($p0) {
    if (!isNaN($p0) && $p0 >= 0) {
        return Math.floor($p0 / 60);
    }
    return 0;
}
Srch.U.getDeepLinks = function Srch_U$getDeepLinks(deeplinks, maxRows) {
    var $v_0 = 2;
    var $v_1 = 2;
    var $v_2 = '%20';
    var $v_3 = ' ';
    if (!maxRows) {
        return '';
    }
    var $v_4 = '';
    var $v_5 = deeplinks.split(' ');
    if ($v_5.length >= ($v_1 * 2)) {
        var $v_6 = 0;
        var $v_7 = 0;
        var $v_8 = true;
        for (var $v_9 = 0; $v_9 < $v_5.length - 1; $v_9 = $v_9 + 2) {
            $v_7++;
            if ($v_8) {
                $v_6++;
                $v_4 += '<ul>';
                $v_8 = false;
            }
            var $v_A = SP.Utilities.HttpUtility.htmlEncode($v_5[$v_9 + 1].replace(new RegExp($v_2, 'g'), $v_3));
            var $v_B = '<li class=\'ms-srch-ellipsis\'><a clicktype=\'DeepLink\' linkIndex=\'' + ($v_7 - 1).toString() + '\' href=\'' + SP.Utilities.HttpUtility.htmlEncode(Srch.U.ensureAllowedProtocol($v_5[$v_9])) + '\' title=\'' + $v_A + '\'>' + $v_A + '</a></li>';
            $v_4 += $v_B;
            if (!($v_7 % $v_0)) {
                $v_4 += '</ul>';
                $v_8 = true;
                if ($v_6 >= maxRows) {
                    break;
                }
            }
        }
        if (!$v_8) {
            $v_4 += '</ul>';
        }
    }
    return $v_4;
}
Srch.U.truncateUrl = function Srch_U$truncateUrl(url, maxChars) {
    if (!url || !url.length) {
        return url;
    }
    var $v_0 = url.indexOf('//');
    var $v_1 = '/';
    var $v_2 = '\ufffd';
    if ($v_0 !== -1) {
        url = url.substr($v_0 + 2);
    }
    if (url.substring(url.length - 1, 1) === $v_1) {
        url = url.substring(0, url.length - 1);
    }
    var $v_3 = url.length;
    if ($v_3 <= maxChars) {
        return url;
    }
    var $v_4 = url.split('/');
    var $v_5 = 0;
    var $v_6 = $v_4[$v_5];
    var $v_7 = $v_2 + $v_1;
    var $v_8 = $v_2;
    if ($v_4.length === 2) {
        $v_7 = '';
    }
    else if ($v_4.length === 1) {
        return Srch.U.truncateEnd($v_6, maxChars);
    }
    $v_6 = Srch.U.truncateEnd($v_6, maxChars - ($v_1.length + $v_7.length + $v_8.length)) + $v_1;
    var $v_9 = $v_4.length - 1;
    var $v_A = $v_4[$v_9];
    var $v_B = maxChars - $v_6.length;
    $v_A = Srch.U.truncateEnd($v_A, $v_B - $v_7.length);
    $v_5++;
    $v_9--;
    $v_B = $v_B - $v_A.length;
    while ($v_9 >= $v_5) {
        var $v_D = false;
        var $v_E = $v_4[$v_5];
        if ($v_E.length <= $v_B - $v_7.length) {
            $v_6 = $v_6 + $v_E + $v_1;
            $v_B = $v_B - ($v_E.length + $v_1.length);
            $v_5++;
            $v_D = true;
        }
        if ($v_5 === $v_9) {
            return $v_6 + $v_A;
        }
        var $v_F = $v_4[$v_9];
        if ($v_F.length <= $v_B - $v_7.length) {
            $v_A = $v_F + $v_1 + $v_A;
            $v_B = $v_B - ($v_F.length + $v_1.length);
            $v_9--;
            $v_D = true;
        }
        if (!$v_D) {
            break;
        }
    }
    var $v_C = $v_6 + $v_7 + $v_A;
    return $v_C.replace(new RegExp($v_2, 'g'), '...');
}
Srch.U.truncateHighlightedUrl = function Srch_U$truncateHighlightedUrl(url, maxChars) {
    if (!url || !url.length) {
        return url;
    }
    var $v_0 = url.indexOf('//');
    var $v_1 = '/';
    var $v_2 = '\ufffd';
    if ($v_0 !== -1) {
        url = url.substr($v_0 + 2);
    }
    if (url.substring(url.length - 1, 1) === $v_1) {
        url = url.substring(0, url.length - 1);
    }
    var $v_3 = url.length;
    if ($v_3 <= maxChars) {
        return url;
    }
    var $v_4 = Srch.U.hitHighlightingOpenTag;
    var $v_5 = Srch.U.hitHighlightingCloseTag;
    url = url.replace(new RegExp($v_5, 'g'), '<~strong>');
    var $v_6 = url.split('/');
    var $v_7 = new Array($v_6.length);
    for (var $v_I = 0; $v_I < $v_6.length; $v_I++) {
        $v_6[$v_I] = $v_6[$v_I].replace(new RegExp('<~strong>', 'g'), $v_5);
        $v_7[$v_I] = 0;
        var $v_J = $v_6[$v_I].split($v_4);
        if ($v_J.length > 1) {
            $v_7[$v_I] += ($v_J.length - 1) * $v_4.length;
        }
        var $v_K = $v_6[$v_I].split($v_5);
        if ($v_K.length > 1) {
            $v_7[$v_I] += ($v_K.length - 1) * $v_5.length;
        }
    }
    var $v_8 = 0;
    var $v_9 = $v_6[$v_8];
    var $v_A = $v_2 + $v_1;
    var $v_B = $v_2;
    if ($v_6.length === 2) {
        $v_A = '';
    }
    else if ($v_6.length === 1) {
        return Srch.U.getTrimmedProcessedHHXMLString($v_9, maxChars);
    }
    var $v_C = $v_9.length;
    $v_9 = Srch.U.getTrimmedProcessedHHXMLString($v_9, maxChars - ($v_1.length + $v_A.length + $v_B.length)) + $v_1;
    if ($v_9.length < $v_C) {
        $v_7[$v_8] = 0;
        var $v_L = $v_9.split($v_4);
        if ($v_L.length > 1) {
            $v_7[$v_8] += ($v_L.length - 1) * $v_4.length;
        }
        var $v_M = $v_9.split($v_5);
        if ($v_M.length > 1) {
            $v_7[$v_8] += ($v_M.length - 1) * $v_5.length;
        }
    }
    var $v_D = $v_6.length - 1;
    var $v_E = $v_6[$v_D];
    var $v_F = maxChars - ($v_9.length - $v_7[$v_8]);
    var $v_G = $v_E.length;
    $v_E = Srch.U.getTrimmedProcessedHHXMLString($v_E, $v_F - $v_A.length);
    if ($v_E.length < $v_G) {
        $v_7[$v_D] = 0;
        var $v_N = $v_E.split($v_4);
        if ($v_N.length > 1) {
            $v_7[$v_D] += ($v_N.length - 1) * $v_4.length;
        }
        var $v_O = $v_E.split($v_5);
        if ($v_O.length > 1) {
            $v_7[$v_D] += ($v_O.length - 1) * $v_5.length;
        }
    }
    $v_F = $v_F - ($v_E.length - $v_7[$v_D]);
    $v_8++;
    $v_D--;
    while ($v_D >= $v_8) {
        var $v_P = false;
        var $v_Q = $v_6[$v_8];
        if ($v_Q.length - $v_7[$v_8] <= $v_F - $v_A.length) {
            $v_9 = $v_9 + $v_Q + $v_1;
            $v_F = $v_F - ($v_Q.length + $v_1.length - $v_7[$v_8]);
            $v_8++;
            $v_P = true;
        }
        if ($v_8 > $v_D) {
            return $v_9 + $v_E;
        }
        var $v_R = $v_6[$v_D];
        if ($v_R.length - $v_7[$v_D] <= $v_F - $v_A.length) {
            $v_E = $v_R + $v_1 + $v_E;
            $v_F = $v_F - ($v_R.length + $v_1.length - $v_7[$v_D]);
            $v_D--;
            $v_P = true;
        }
        if (!$v_P) {
            break;
        }
        if ($v_8 > $v_D) {
            return $v_9 + $v_E;
        }
    }
    if ($v_9.lastIndexOf($v_4) > $v_9.lastIndexOf($v_5)) {
        if ($v_E.indexOf($v_5) >= $v_E.indexOf($v_4)) {
            $v_9 += $v_5;
        }
    }
    if ($v_E.lastIndexOf($v_4) > $v_E.lastIndexOf($v_5)) {
        $v_E += $v_5;
    }
    var $v_H = $v_9 + $v_A + $v_E;
    return $v_H.replace(new RegExp($v_2, 'g'), '...');
}
Srch.U.copyLink = function Srch_U$copyLink(link) {
    if (window.clipboardData) {
        window.clipboardData.setData('Text', link);
    }
}
Srch.U.registerRenderTemplateByName = function Srch_U$registerRenderTemplateByName(name, template) {
    if (Srch.U.e(name) || Srch.U.n(template)) {
        Srch.U.traceFormatted(null, 'RegisterRenderTemplateByName', 'Failed to register template due to missing template or name: {0}.', name);
    }
    else {
        Srch.U.traceFormatted(null, 'RegisterRenderTemplateByName', 'Registered template for name: {0}.', name);
        Srch.ScriptApplicationManager.get_current().$1K_1[name.toLowerCase()] = template;
    }
}
Srch.U.getRenderTemplateCollection = function Srch_U$getRenderTemplateCollection() {
    return Srch.ScriptApplicationManager.get_current().$1K_1;
}
Srch.U.getRenderTemplateByName = function Srch_U$getRenderTemplateByName(name, renderCtx) {
    if (Srch.U.w(name)) {
        return '';
    }
    if (name.toLowerCase().startsWith(SP.PageContextInfo.get_siteServerRelativeUrl().toLowerCase())) {
        name = name.toLowerCase().replace(SP.PageContextInfo.get_siteServerRelativeUrl().toLowerCase(), '~sitecollection' + ((SP.PageContextInfo.get_siteServerRelativeUrl() === '/') ? '/' : ''));
    }
    var $v_0 = Srch.ScriptApplicationManager.get_current().$1K_1[name.toLowerCase()];
    if (!Srch.U.e($v_0)) {
        return $v_0;
    }
    var $v_1 = GetUrlKeyValue('templateshortname', false, name.toLowerCase());
    if (!Srch.U.e($v_1)) {
        Srch.U.traceFormatted(null, 'GetRenderTemplateByName', 'Looking up render template using short name \'{0}\'...', $v_1);
        $v_0 = Srch.ScriptApplicationManager.get_current().$1K_1[$v_1];
        if (!Srch.U.e($v_0)) {
            return $v_0;
        }
    }
    if (name === 'DefaultDataProvider') {
        return '<div class=\'ms-srch-dataProvider\' id=\'DataProvider\' name=\'Control\'></div>';
    }
    if (!OffSwitch.IsActive('BDFB227C-6B80-42DB-92FD-E1463B8DE52A')) {
        var $v_3 = Srch.ScriptApplicationManager.get_current().$1K_1['~sitecollection/_catalogs/masterpage/Display Templates/Search/Item_Default.js'.toLowerCase()];
        if (!Srch.U.e($v_3)) {
            return $v_3;
        }
    }
    var $v_2 = String.format(Srch.Res.cc_err_TemplateNotFoundMessage, SP.Utilities.HttpUtility.htmlEncode(name));
    Srch.U.trace(null, 'GetRenderTemplateByName', $v_2);
    Srch.U.logRenderingErrorMessageToContext(renderCtx, $v_2, Srch.U.$4S);
    return $v_2;
}
Srch.U.addRenderContextCallback = function Srch_U$addRenderContextCallback(renderCtx, callbackType, callbackFunction, enforceUnique, templateFunction) {
    if (!Srch.U.n(renderCtx) && !Srch.U.w(callbackType) && !Srch.U.n(callbackFunction)) {
        Srch.U.$40(callbackFunction, templateFunction);
        AddRenderCallback(renderCtx, callbackType, callbackFunction, ((Srch.U.n(enforceUnique)) ? false : enforceUnique));
    }
}
Srch.U.setItemRenderWrapper = function Srch_U$setItemRenderWrapper(renderCtx, itemRenderWrapperFunction, templateFunction) {
    if (!Srch.U.n(renderCtx) && !Srch.U.n(itemRenderWrapperFunction)) {
        Srch.U.$40(itemRenderWrapperFunction, templateFunction);
        renderCtx[Srch.U.$4P] = itemRenderWrapperFunction;
    }
}
Srch.U.logRenderingErrorMessageToContext = function Srch_U$logRenderingErrorMessageToContext(renderCtx, messageText, operationName) {
    if (Srch.U.n(renderCtx)) {
        return;
    }
    var $v_0 = Srch.U.createErrorObjectWithExecContext(messageText, operationName, renderCtx);
    var $v_1 = renderCtx['Errors'];
    if (Srch.U.n($v_1)) {
        $v_1 = [];
        renderCtx['Errors'] = $v_1;
    }
    Srch.U.appendArray($v_1, $v_0);
}
Srch.U.$40 = function Srch_U$$40($p0, $p1) {
    return Srch.U.setFieldOnObject($p0, Srch.U.$1T, $p1);
}
Srch.U.$51 = function Srch_U$$51($p0, $p1, $p2) {
    var $v_0 = {};
    $v_0[Srch.U.$3C] = $p1;
    $v_0[Srch.U.$1T] = $p2;
    return Srch.U.setFieldOnObject($p0, Srch.U.$3B, $v_0);
}
Srch.U.getTemplateUrlFromFunctionOrRenderCtx = function Srch_U$getTemplateUrlFromFunctionOrRenderCtx(templateFunctionOrRenderCtx) {
    var $v_0 = Srch.U.getFieldOnObject(templateFunctionOrRenderCtx, Srch.U.$2S);
    return Srch.U.getStringFieldOnObject($v_0, Srch.U.$48);
}
Srch.U.createErrorObjectWithExecContext = function Srch_U$createErrorObjectWithExecContext(messageText, operationName, templateFuncOrRenderCtx) {
    var $v_0 = {};
    $v_0['message'] = messageText;
    var $v_1 = templateFuncOrRenderCtx;
    if (typeof($v_1) !== 'function') {
        var $v_2 = {};
        $v_2[Srch.U.$2S] = Srch.U.getFieldOnObject(templateFuncOrRenderCtx, Srch.U.$2S);
        $v_1 = $v_2;
    }
    Srch.U.$51($v_0, operationName, $v_1);
    return $v_0;
}
Srch.U.getFormattedTimeFromSeconds = function Srch_U$getFormattedTimeFromSeconds(secondsStr) {
    var $v_0 = parseInt(secondsStr);
    if (!isNaN($v_0)) {
        var $v_1 = Math.floor($v_0 / 3600);
        var $v_2 = Math.floor(($v_0 - $v_1 * 3600) / 60);
        var $v_3 = $v_0 - ($v_1 * 3600 + $v_2 * 60);
        return String.format('{0}{1}{2}:{3}{4}', ($v_1 < 1) ? '' : String.format('{0}:', $v_1.toString()), ($v_2 < 10 && $v_1 > 0) ? '0' : '', $v_2.toString(), ($v_3 < 10) ? '0' : '', $v_3.toString());
    }
    return secondsStr;
}
Srch.U.resolveRenderTemplate = function Srch_U$resolveRenderTemplate(renderCtx, component, level) {
    if (Srch.U.n(renderCtx) || Srch.U.e(level)) {
        Srch.U.traceFormatted(null, 'ResolveRenderTemplate', 'Empty template returned for level \'{0}\' because render context or level is empty.', level);
        return '';
    }
    var $v_0 = renderCtx['ClientControl'];
    if (Srch.U.n($v_0)) {
        Srch.U.traceFormatted(null, 'ResolveRenderTemplate', 'Empty template returned for level \'{0}\' because client control is empty.', level);
        return '';
    }
    if (level === 'Item') {
        if (Srch.Result.isInstanceOfType($v_0) && !Srch.U.e(($v_0).$h_4)) {
            return Srch.U.getRenderTemplateByName(($v_0).$h_4, renderCtx);
        }
        else {
            if (!Srch.U.n(component)) {
                return Srch.U.getRenderTemplateByName(component['RenderTemplateId'], renderCtx);
            }
        }
    }
    else if (level === 'Group') {
        if (Srch.Result.isInstanceOfType($v_0) && !Srch.U.e(($v_0).$e_4)) {
            return Srch.U.getRenderTemplateByName(($v_0).$e_4, renderCtx);
        }
        else if (!Srch.U.n(component)) {
            return Srch.U.getRenderTemplateByName(Srch.U.getTableProperty(component, 'RenderTemplateId'), renderCtx);
        }
    }
    else if (level === 'View') {
        if (Srch.Refinement.isInstanceOfType($v_0)) {
            var $v_1 = renderCtx['RefinementControl'];
            if (!Srch.U.n($v_1)) {
                var $v_2 = Srch.ValueInfo.ValueTypeHandler.$4A($v_1.propertyName);
                $v_2 = (Srch.U.w($v_2)) ? $v_1.renderTemplateId : $v_2;
                return Srch.U.getRenderTemplateByName($v_2, renderCtx);
            }
        }
        return Srch.U.getRenderTemplateByName($v_0.$24_2, renderCtx);
    }
    else if (level === 'Body') {
        var $v_3 = (renderCtx['DisplayTemplateData'])['BodyTemplateId'];
        if (Srch.U.e($v_3)) {
            if (Srch.Result.isInstanceOfType($v_0)) {
                $v_3 = ($v_0).$1t_4;
            }
        }
        return Srch.U.getRenderTemplateByName($v_3, renderCtx);
    }
    Srch.U.traceFormatted(null, 'ResolveRenderTemplate', 'Empty template returned for level \'{0}\'', level);
    return '';
}
Srch.U.isEnterKey = function Srch_U$isEnterKey(keyCode) {
    return (!Srch.U.e(keyCode) && (keyCode === '\r' || keyCode === '\n'));
}
Srch.U.cancelEvent = function Srch_U$cancelEvent(e) {
    return Srch.U.cancelEventEx(e, true, true);
}
Srch.U.cancelEventEx = function Srch_U$cancelEventEx(e, preventDefault, stopPropagation) {
    if (!Srch.U.n(e)) {
        if (preventDefault) {
            if (e.preventDefault) {
                e.preventDefault();
            }
            else {
                e.returnValue = false;
            }
        }
        if (stopPropagation) {
            if (e.stopPropagation) {
                e.stopPropagation();
            }
            else {
                e.cancelBubble = true;
            }
        }
    }
    return false;
}
Srch.U.getTableProperty = function Srch_U$getTableProperty(parent, propName) {
    if (!Srch.U.n(parent)) {
        var $v_0 = parent['Properties'];
        if (!Srch.U.n($v_0)) {
            return $v_0[propName];
        }
    }
    return null;
}
Srch.U.concatUrl = function Srch_U$concatUrl(firstPart, secondPart) {
    if (Srch.U.e(firstPart)) {
        firstPart = '';
    }
    if (Srch.U.e(secondPart)) {
        secondPart = '';
    }
    if (firstPart.endsWith('/')) {
        if (secondPart.startsWith('/')) {
            secondPart = secondPart.substr(1);
        }
        return firstPart + secondPart;
    }
    else {
        if (secondPart.startsWith('/')) {
            return firstPart + secondPart;
        }
        else {
            return firstPart + '/' + secondPart;
        }
    }
}
Srch.U.getIconUrl = function Srch_U$getIconUrl(item) {
    return SP.Utilities.VersionUtility.getImageUrl('html16.png');
}
Srch.U.getFolderIconUrl = function Srch_U$getFolderIconUrl() {
    return SP.Utilities.VersionUtility.getImageUrl('folder.gif');
}
Srch.U.getIconUrlByFileExtension = function Srch_U$getIconUrlByFileExtension(item, defaultIconPath) {
    if (item && !Srch.U.n(item['FileExtension'])) {
        var $v_0 = Srch.U.getFriendlyNameForFileExtension(item['FileExtension'].toString());
        if ($v_0 === 'file_Word') {
            return SP.Utilities.VersionUtility.getImageUrl('icdocx.png');
        }
        else if ($v_0 === 'file_PowerPoint') {
            return SP.Utilities.VersionUtility.getImageUrl('icpptx.png');
        }
        else if ($v_0 === 'file_Excel') {
            return SP.Utilities.VersionUtility.getImageUrl('icxlsx.png');
        }
        else if ($v_0 === 'file_OneNote') {
            return SP.Utilities.VersionUtility.getImageUrl('icone.png');
        }
        else if ($v_0 === 'file_Visio') {
            return SP.Utilities.VersionUtility.getImageUrl('icvisiogeneric.png');
        }
        else if ($v_0 === 'file_InfoPath') {
            return SP.Utilities.VersionUtility.getImageUrl('icinfopathgeneric.png');
        }
        else if ($v_0 === 'file_Access') {
            return SP.Utilities.VersionUtility.getImageUrl('icaccdb.png');
        }
        else if ($v_0 === 'file_Publisher') {
            return SP.Utilities.VersionUtility.getImageUrl('icpub.png');
        }
        else if ($v_0 === 'file_PDF') {
            return SP.Utilities.VersionUtility.getImageUrl('icpdf.png');
        }
    }
    if (!Srch.U.e(defaultIconPath)) {
        return defaultIconPath;
    }
    return SP.Utilities.VersionUtility.getImageUrl('html16.png');
}
Srch.U.getShowHoverPanelCallbackWide = function Srch_U$getShowHoverPanelCallbackWide(itemId, hpContainerId, templateUrl) {
    return 'EnsureScriptParams(\'SearchUI.js\', \'HP.Show\', \'' + SP.Utilities.HttpUtility.ecmaScriptStringLiteralEncode(itemId) + '\', \'' + SP.Utilities.HttpUtility.ecmaScriptStringLiteralEncode(hpContainerId) + '\', \'' + SP.Utilities.HttpUtility.ecmaScriptStringLiteralEncode(templateUrl) + '\', true);';
}
Srch.U.getShowHoverPanelCallback = function Srch_U$getShowHoverPanelCallback(itemId, hpContainerId, templateUrl) {
    return 'EnsureScriptParams(\'SearchUI.js\', \'HP.Show\', \'' + SP.Utilities.HttpUtility.ecmaScriptStringLiteralEncode(itemId) + '\', \'' + SP.Utilities.HttpUtility.ecmaScriptStringLiteralEncode(hpContainerId) + '\', \'' + SP.Utilities.HttpUtility.ecmaScriptStringLiteralEncode(templateUrl) + '\', false);';
}
Srch.U.getHideHoverPanelCallback = function Srch_U$getHideHoverPanelCallback() {
    return 'EnsureScriptParams(\'SearchUI.js\', \'HP.Hide\');';
}
Srch.U.getHighlightedProperty = function Srch_U$getHighlightedProperty(key, result, property) {
    var $v_0 = null;
    if (!Srch.U.e(key)) {
        if (!((key) in Srch.ScriptApplicationManager.get_current().$2d_1)) {
            Srch.ScriptApplicationManager.get_current().$2d_1[key] = Srch.U.$5k(result['HitHighlightedProperties']);
        }
        var $v_1 = Srch.ScriptApplicationManager.get_current().$2d_1[key];
        if (!Srch.U.n($v_1)) {
            if (property === 'Title') {
                property = 'HHTitle';
            }
            else if (property === 'Path') {
                property = 'HHUrl';
            }
            else {
                property = property.toLowerCase();
            }
            $v_0 = $v_1[property];
        }
    }
    return $v_0;
}
Srch.U.$5k = function Srch_U$$5k($p0) {
    var $v_0 = null;
    if (!Srch.U.e($p0)) {
        $p0 = '<' + Srch.U.$2b + '>' + $p0 + '</' + Srch.U.$2b + '>';
        var $v_1 = Srch.U.createXMLDocument($p0);
        if (!Srch.U.n($v_1)) {
            var $v_2 = $v_1.getElementsByTagName(Srch.U.$2b);
            if (!Srch.U.n($v_2) && !Srch.U.n($v_2[0]) && !Srch.U.n($v_2[0].childNodes)) {
                $v_0 = {};
                var $v_3 = $v_2[0].childNodes;
                for (var $v_4 = 0; $v_4 < $v_3.length; $v_4++) {
                    var $v_5 = $v_3[$v_4];
                    var $v_6 = Srch.U.$3X($v_5);
                    if ((($v_5.nodeName) in $v_0)) {
                        if (Srch.U.isArray($v_0[$v_5.nodeName])) {
                            Srch.U.appendArray($v_0[$v_5.nodeName], $v_6);
                        }
                        else {
                            var $v_7 = [];
                            Srch.U.appendArray($v_7, $v_0[$v_5.nodeName]);
                            Srch.U.appendArray($v_7, $v_6);
                            $v_0[$v_5.nodeName] = $v_7;
                        }
                    }
                    else {
                        $v_0[$v_5.nodeName] = $v_6;
                    }
                }
            }
        }
    }
    return $v_0;
}
Srch.U.processHHXML = function Srch_U$processHHXML(pre) {
    var $v_0 = '';
    if (!Srch.U.e(pre)) {
        $v_0 = pre.replace(new RegExp('<ddd/>', 'g'), '&#8230;');
        $v_0 = $v_0.replace(new RegExp('<c0>', 'g'), Srch.U.hitHighlightingOpenTag);
        $v_0 = $v_0.replace(new RegExp('</c0>', 'g'), Srch.U.hitHighlightingCloseTag);
    }
    return $v_0;
}
Srch.U.createXMLDocument = function Srch_U$createXMLDocument(xml) {
    var $v_0 = window.self.ActiveXObject;
    var $v_1 = window.self.DOMParser;
    if (!Srch.U.n($v_1)) {
        try {
            if (Srch.U.n(Srch.U.$2T)) {
                Srch.U.$2T = new DOMParser();
            }
            Srch.U.trace(null, 'CreateXMLDocument', 'Loading XML using DOMParser...');
            return Srch.U.$2T.parseFromString(xml, 'text/xml');
        }
        catch ($v_2) {
            Srch.U.traceFormatted(null, 'CreateXMLDocument', 'Loading XML using DOMParser failed: {0}', $v_2.message);
        }
    }
    if (!Srch.U.n($v_0)) {
        try {
            if (Srch.U.n(Srch.U.$1B)) {
                Srch.U.$1B = new ActiveXObject('MSXML.DomDocument');
            }
            Srch.U.$1B.preserveWhiteSpace = true;
            Srch.U.$1B.loadXML(xml);
            Srch.U.trace(null, 'CreateXMLDocument', 'Loading XML using MSXML.DomDocument...');
            return Srch.U.$1B;
        }
        catch ($v_3) {
            Srch.U.traceFormatted(null, 'CreateXMLDocument', 'Loading XML using MSXML.DomDocument failed: {0}', $v_3.message);
        }
    }
    return null;
}
Srch.U.getUnEncodedMultiValuedResults = function Srch_U$getUnEncodedMultiValuedResults(multiValue, maxItems, rawDelimiter) {
    if (Srch.U.e(multiValue)) {
        return multiValue;
    }
    if (Srch.U.e(rawDelimiter)) {
        rawDelimiter = '  |  ';
    }
    var $v_0 = ' ';
    var $v_1 = multiValue.split(';');
    if ($v_1 && $v_1.length > 0) {
        var $v_2 = ($v_1.length > maxItems) ? maxItems : $v_1.length;
        if (Srch.U.e($v_1[$v_2 - 1])) {
            $v_2 = $v_2 - 1;
        }
        for (var $v_3 = 0; $v_3 < $v_2; $v_3++) {
            if (!Srch.U.e($v_1[$v_3])) {
                $v_0 += $v_1[$v_3];
                if ($v_3 < $v_2 - 1) {
                    $v_0 += rawDelimiter;
                }
            }
        }
    }
    return $v_0.trim();
}
Srch.U.getTrimmedString = function Srch_U$getTrimmedString(value, cutOff) {
    if (Srch.U.e(value)) {
        return value;
    }
    var $v_0 = '...';
    var $v_1 = value;
    var $v_2 = $v_1.length;
    if ($v_2 > cutOff) {
        $v_1 = $v_1.substring(0, cutOff);
        $v_1 += $v_0;
    }
    return $v_1;
}
Srch.U.trimTitle = function Srch_U$trimTitle(title, maximumLengthInChars, numberOfTermsToUse) {
    var $v_0 = false;
    var $v_1 = '&#8230;';
    var $v_2 = title;
    if (!Srch.U.e(title)) {
        var $v_5 = title.split('<t0/>');
        if (!Srch.U.n($v_5)) {
            $v_2 = '';
            var $v_6 = 0;
            var $v_7;
            for ($v_7 = 0; $v_7 < $v_5.length && $v_6 < numberOfTermsToUse; $v_7++) {
                if (!Srch.U.e($v_5[$v_7])) {
                    $v_6++;
                    $v_2 += $v_5[$v_7];
                }
            }
            if ($v_7 < $v_5.length) {
                $v_0 = true;
                maximumLengthInChars -= 3;
                $v_1 = '';
            }
        }
    }
    var $v_3 = $v_2.lastIndexOf(Srch.U.hitHighlightingOpenTag);
    var $v_4 = $v_2.lastIndexOf(Srch.U.hitHighlightingCloseTag);
    if ($v_4 < $v_3) {
        $v_2 += Srch.U.hitHighlightingCloseTag;
    }
    $v_2 = Srch.U.$4w($v_2, Srch.U.hitHighlightingOpenTag, Srch.U.hitHighlightingCloseTag, $v_1, maximumLengthInChars);
    if ($v_0) {
        $v_2 += '&#8230;';
    }
    return $v_2;
}
Srch.U.extractReplyTitleFromSummary = function Srch_U$extractReplyTitleFromSummary(hitHighlightedSummary, titleLength) {
    hitHighlightedSummary = Srch.U.processHHXML(hitHighlightedSummary);
    var $v_0 = hitHighlightedSummary.split(Srch.U.hitHighlightedDelimiterHtml);
    if (!$v_0 || $v_0.length < 1 || Srch.U.e($v_0[0])) {
        return '';
    }
    var $v_1 = $v_0[0];
    return Srch.U.getTrimmedProcessedHHXMLString($v_1, titleLength);
}
Srch.U.getTrimmedProcessedHHXMLString = function Srch_U$getTrimmedProcessedHHXMLString(value, cutOff) {
    return Srch.U.$4w(value, Srch.U.hitHighlightingOpenTag, Srch.U.hitHighlightingCloseTag, '&#8230;', cutOff);
}
Srch.U.$5Q = function Srch_U$$5Q($p0, $p1, $p2) {
    var $v_0 = 0;
    if (!Srch.U.e($p0)) {
        $v_0 = $p0.length;
        if (!Srch.U.e($p1)) {
            var $v_1 = $p0.split($p1);
            if (!Srch.U.n($v_1)) {
                $v_0 -= ($p1.length * ($v_1.length - 1));
            }
        }
        if (!Srch.U.e($p2)) {
            var $v_2 = $p0.split($p2);
            if (!Srch.U.n($v_2)) {
                $v_0 -= ($p2.length * ($v_2.length - 1));
            }
        }
    }
    return $v_0;
}
Srch.U.$4w = function Srch_U$$4w($p0, $p1, $p2, $p3, $p4) {
    var $v_0 = Srch.U.$5Q($p0, $p1, $p2);
    if (Srch.U.e($p0) || $v_0 <= $p4) {
        return $p0;
    }
    var $v_1 = '';
    var $v_2 = 0;
    var $v_3 = 0;
    var $v_4 = 0;
    while ($v_2 < $p4 && $v_3 < $p0.length) {
        $v_4 = $p0.indexOf($p1, $v_3);
        var $v_5 = ($v_4 !== -1);
        if (($v_4 - $v_3) + $v_2 > $p4 || !$v_5) {
            $v_4 = Math.min($v_3 + ($p4 - $v_2), $p0.length);
        }
        $v_1 += $p0.substring($v_3, $v_4);
        $v_2 += ($v_4 - $v_3);
        if ($v_2 >= $p4) {
            break;
        }
        if ($v_5) {
            $v_1 += $p1;
            $v_3 = $v_4 + $p1.length;
            $v_4 = $p0.indexOf($p2, $v_3);
            var $v_6 = ($v_4 !== -1);
            if (($v_4 - $v_3) + $v_2 > $p4 || !$v_6) {
                $v_4 = Math.min($v_3 + ($p4 - $v_2), $p0.length);
            }
            $v_1 += $p0.substring($v_3, $v_4) + $p2;
            $v_2 += ($v_4 - $v_3);
            $v_3 = $v_4 + $p2.length;
        }
        else {
            $v_3 = $v_4;
        }
    }
    if (!$v_1.endsWith($p3)) {
        $v_1 += $p3;
    }
    return $v_1;
}
Srch.U.getMultipleHHXMLNodeValues = function Srch_U$getMultipleHHXMLNodeValues(xmlDoc, nodeName, numItems, rawDelimiter) {
    var $v_0 = '';
    if (Srch.U.e(rawDelimiter)) {
        rawDelimiter = '  |  ';
    }
    if (!Srch.U.n(xmlDoc) && !Srch.U.e(nodeName)) {
        var $v_1 = xmlDoc.getElementsByTagName(nodeName);
        if (!Srch.U.n($v_1) && $v_1.length > 0) {
            var $v_2 = ($v_1.length > numItems) ? numItems : $v_1.length;
            for (var $v_3 = 0; $v_3 < $v_2; $v_3++) {
                var $v_4 = Srch.U.$3X($v_1[$v_3]);
                if (!Srch.U.e($v_4)) {
                    $v_0 += $v_4;
                    if ($v_3 < $v_2 - 1) {
                        $v_0 += rawDelimiter;
                    }
                }
            }
        }
    }
    return $v_0;
}
Srch.U.getSingleHHXMLNodeValue = function Srch_U$getSingleHHXMLNodeValue(xmlDoc, nodeName) {
    var $v_0 = '';
    if (!Srch.U.n(xmlDoc) && !Srch.U.e(nodeName)) {
        var $v_1 = xmlDoc.getElementsByTagName(nodeName);
        if (!Srch.U.n($v_1) && $v_1.length > 0) {
            $v_0 = Srch.U.$3X($v_1[0]);
        }
    }
    return $v_0;
}
Srch.U.$3X = function Srch_U$$3X($p0) {
    var $v_0 = '';
    if (!Srch.U.n($p0)) {
        var $v_1 = $p0.childNodes;
        if (!Srch.U.n($v_1) && $v_1.length > 0) {
            for (var $v_2 = 0; $v_2 < $v_1.length; $v_2++) {
                var $v_3 = $v_1[$v_2];
                if (!Srch.U.n($v_3)) {
                    if ($v_3.nodeType === 3) {
                        $v_0 += Srch.U.$4K($v_3);
                    }
                    else if ($v_3.nodeType === 1) {
                        if ($v_3.nodeName === 'c0') {
                            $v_0 += Srch.U.hitHighlightingOpenTag + Srch.U.$4K($v_3) + Srch.U.hitHighlightingCloseTag;
                        }
                        else if ($v_3.nodeName === 't0') {
                            $v_0 += '<t0/>';
                        }
                        else if ($v_3.nodeName === 'ddd') {
                            $v_0 += '&#8230;';
                        }
                    }
                }
            }
        }
    }
    return $v_0;
}
Srch.U.$4K = function Srch_U$$4K($p0) {
    var $v_0 = '';
    if (!Srch.U.n($p0)) {
        $v_0 = $p0.nodeValue;
        if (Srch.U.e($v_0)) {
            $v_0 = $p0.text;
        }
        if (Srch.U.e($v_0)) {
            $v_0 = $p0.textContent;
        }
    }
    return SP.Utilities.HttpUtility.htmlEncode($v_0);
}
Srch.U.isTableTypeof = function Srch_U$isTableTypeof(resultTable, tableTypeName) {
    if (!Srch.U.n(resultTable)) {
        var $v_0 = resultTable['TableType'];
        if (!Srch.U.e($v_0) && !Srch.U.e(tableTypeName)) {
            if (tableTypeName === $v_0) {
                return true;
            }
        }
    }
    return false;
}
Srch.U.isSubstrateTable = function Srch_U$isSubstrateTable(resultTable) {
    if (!Srch.U.n(resultTable)) {
        if (Srch.U.isTableTypeof(resultTable, Microsoft.SharePoint.Client.Search.Query.KnownTableTypes.relevantResults)) {
            var $v_0 = resultTable['QueryRuleId'];
            if (Srch.U.n($v_0) || $v_0 === '00000000-0000-0000-0000-000000000000') {
                return true;
            }
        }
    }
    return false;
}
Srch.U.getTableOfType = function Srch_U$getTableOfType(tableCollection, tableTypeName) {
    if (!Srch.U.n(tableCollection) && !Srch.U.e(tableTypeName)) {
        var $v_0 = tableCollection['ResultTables'];
        if (!Srch.U.n($v_0) && $v_0.length > 0) {
            for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
                var $v_2 = $v_0[$v_1];
                if (!Srch.U.n($v_2)) {
                    var $v_3 = $v_2['TableType'];
                    if (!Srch.U.e($v_3)) {
                        if (tableTypeName === $v_3) {
                            return $v_2;
                        }
                    }
                }
            }
        }
    }
    return null;
}
Srch.U.isFirstPromotedBlock = function Srch_U$isFirstPromotedBlock(resultTable) {
    var $v_0 = false;
    if (!Srch.U.n(resultTable)) {
        var $v_1 = Srch.U.getTableProperty(resultTable, 'IsFirstPinnedResultBlock');
        if (!Srch.U.n($v_1)) {
            $v_0 = $v_1;
        }
    }
    return $v_0;
}
Srch.U.isFirstRankedBlock = function Srch_U$isFirstRankedBlock(resultTable) {
    var $v_0 = false;
    if (!Srch.U.n(resultTable)) {
        var $v_1 = Srch.U.getTableProperty(resultTable, 'IsFirstRankedResultBlock');
        if (!Srch.U.n($v_1)) {
            $v_0 = $v_1;
        }
    }
    return $v_0;
}
Srch.U.isIntentTable = function Srch_U$isIntentTable(resultTable) {
    if (!Srch.U.n(resultTable)) {
        if (Srch.U.isTableTypeof(resultTable, Microsoft.SharePoint.Client.Search.Query.KnownTableTypes.relevantResults)) {
            var $v_0 = resultTable['QueryRuleId'];
            if (!Srch.U.n($v_0) && $v_0 !== '00000000-0000-0000-0000-000000000000') {
                return true;
            }
        }
    }
    return false;
}
Srch.U.createBehavior = function Srch_U$createBehavior(id, type, properties, targetElementId) {
    if (!Srch.U.w(id)) {
        var $v_0 = $find(id);
        if (!Srch.U.n($v_0)) {
            $v_0.dispose();
        }
    }
    if (!Srch.U.w(targetElementId)) {
        Srch.U.traceFormatted(null, 'CreateBehavior', 'Creating behavior \'{0}\'', id);
        return $create(type, properties, null, null, $get(targetElementId));
    }
    return null;
}
Srch.U.animate = function Srch_U$animate(element, animationID, finishFunc) {
    Srch.U.ensureNotNullOrUndefined(element, null, 'Animate', 'element');
    EnsureScript('core.js', TypeofFullName('SPAnimation'), function() {
        var $v_0 = new SPAnimation.State();
        if (animationID === 2) {
            $v_0.SetAttribute(5, 0.5);
        }
        else if (!animationID) {
            $v_0.SetAttribute(5, 1);
        }
        else if (animationID === 15) {
            if (!SPAnimation.Settings.IsAnimationEnabled()) {
                Srch.U.showElement(element);
                return;
            }
            SetOpacity(element, 0);
            element.style.visibility = '';
            $v_0.SetAttribute(5, 1);
        }
        else if (animationID === 6) {
            if (!SPAnimation.Settings.IsAnimationEnabled()) {
                Srch.U.showElement(element);
                return;
            }
            SetOpacity(element, 0);
            Srch.U.positionElement(element, '-100px');
            $v_0.SetAttribute(5, 1);
            finishFunc = function() {
                Srch.U.resetElement(element);
            };
        }
        else if (animationID === 9) {
            if (!SPAnimation.Settings.IsAnimationEnabled()) {
                Srch.U.showElement(element);
                return;
            }
            SetOpacity(element, 0);
            Srch.U.positionElement(element, '100px');
            $v_0.SetAttribute(5, 1);
            finishFunc = function() {
                Srch.U.resetElement(element);
            };
        }
        var $v_1 = new SPAnimation.Object(animationID, 0, element, $v_0, finishFunc, null);
        $v_1.RunAnimation();
    });
}
Srch.U.hideElement = function Srch_U$hideElement(element) {
    if (element) {
        element.style.visibility = 'hidden';
    }
}
Srch.U.showElement = function Srch_U$showElement(element) {
    if (element) {
        element.style.visibility = '';
    }
}
Srch.U.positionElement = function Srch_U$positionElement(element, offset) {
    var $v_0 = element.parentNode;
    $v_0.style.width = $v_0.clientWidth + 'px';
    $v_0.style.overflow = 'hidden';
    element.style.position = 'relative';
    if (Srch.U.isRTL()) {
        element.style.right = offset;
    }
    else {
        element.style.left = offset;
    }
    element.style.visibility = '';
}
Srch.U.resetElement = function Srch_U$resetElement(element) {
    var $v_0 = element.parentNode;
    element.style.position = '';
    element.style.right = element.style.left = '';
    $v_0.style.overflow = '';
    $v_0.style.width = '';
}
Srch.U.shouldAnimate = function Srch_U$shouldAnimate(dp) {
    return (dp.$21_3 > 1);
}
Srch.U.animateResults = function Srch_U$animateResults(result, userAction) {
    Srch.U.ensureNotNullOrUndefined(result, null, 'AnimateResults', 'result');
    EnsureScript('core.js', TypeofFullName('SPAnimation'), function() {
        Srch.U.animate(result.get_element(), 15, null);
    });
    if (result.$2x_4) {
        var $v_0 = Srch.U.getWorkspace(window.document.body);
        if (!Srch.U.n($v_0)) {
            $v_0.scrollTop = 0;
        }
    }
}
Srch.U.loadScripts = function Srch_U$loadScripts(scriptReferences, success, failure, timeout) {
    if (!Srch.U.n(scriptReferences)) {
        var $v_0 = [];
        for (var $v_1 = 0; $v_1 < scriptReferences.length; $v_1++) {
            var $v_2 = scriptReferences[$v_1];
            if (!Srch.U.w($v_2)) {
                $v_2 = Srch.U.removeCachingParameters($v_2.toLowerCase());
                Srch.U.traceFormatted(null, 'LoadScripts', 'Adding url \'{0}\' to SOD...', $v_2, $v_2);
                RegisterSod($v_2, $v_2);
                Srch.U.appendArray($v_0, $v_2);
            }
        }
        if ($v_0.length > 0) {
            var $v_3 = new Srch.U.LoadScriptsState();
            $v_3.scriptsToLoad = $v_0;
            if (timeout < 0) {
                timeout = Srch.ScriptApplicationManager.scriptLoadTimeout;
            }
            if (timeout > 0) {
                $v_3.timeoutHandle = window.setTimeout(function() {
                    Srch.U.$5a(failure, $v_3);
                }, timeout);
                Srch.U.traceFormatted(null, 'LoadScripts', 'Created timeout handle \'{0}\'.', $v_3.timeoutHandle);
            }
            Srch.U.trace(null, 'LoadScripts', 'Loading SOD scripts...');
            LoadMultipleSods($v_0, function() {
                Srch.U.$5b(success, $v_3);
            }, false);
            return true;
        }
    }
    Srch.U.trace(null, 'LoadScripts', 'No script to load, skipping...');
    return false;
}
Srch.U.$5b = function Srch_U$$5b($p0, $p1) {
    Srch.U.ensureNotNullOrUndefined($p1, null, 'LoadScriptsSuccess', 'state');
    if (!$p1.progress) {
        Srch.U.trace(null, 'LoadScriptsSuccess', 'Marking load as success...');
        $p1.progress = 1;
        if ($p1.timeoutHandle > 0) {
            window.clearTimeout($p1.timeoutHandle);
            Srch.U.traceFormatted(null, 'LoadScriptsSuccess', 'Cleared timeout handle \'{0}\'.', $p1.timeoutHandle);
        }
        Srch.U.trace(null, 'LoadScriptsSuccess', 'Calling success handler...');
        $p0($p1.scriptsToLoad);
    }
    else {
        Srch.U.traceFormatted(null, 'LoadScriptsSuccess', 'LoadScriptsProgress is \'{0}\', skipping...', Srch.U.LoadScriptsProgress.toString($p1.progress));
    }
}
Srch.U.$5a = function Srch_U$$5a($p0, $p1) {
    Srch.U.ensureNotNullOrUndefined($p1, null, 'LoadScriptsFailure', 'state');
    if (!$p1.progress) {
        Srch.U.trace(null, 'LoadScriptsFailure', 'Marking load as failure...');
        $p1.progress = 2;
        Srch.U.trace(null, 'LoadScriptsFailure', 'Calling failure handler...');
        var $v_0 = [];
        if (!Srch.U.n($p1.scriptsToLoad)) {
            for (var $v_1 = 0; $v_1 < $p1.scriptsToLoad.length; $v_1++) {
                var $v_2 = $p1.scriptsToLoad[$v_1];
                if (!Srch.U.w($v_2) && Srch.U.n(Srch.ScriptApplicationManager.get_current().$18_1[$v_2])) {
                    Srch.U.appendArray($v_0, $v_2);
                }
            }
        }
        $p0($v_0);
    }
    else {
        Srch.U.traceFormatted(null, 'LoadScriptsFailure', 'LoadScriptsProgress is \'{0}\', skipping...', Srch.U.LoadScriptsProgress.toString($p1.progress));
    }
}
Srch.U.appendScriptsToLoad = function Srch_U$appendScriptsToLoad(scripts, script) {
    if (!Srch.U.w(script)) {
        script = Srch.U.removeQueryParameters(script.trim().toLowerCase());
        if (!Srch.U.w(script) && script.endsWith('.js')) {
            script = Srch.U.urlTokenExpansion(script).toLowerCase();
            if (Srch.U.isInArray(scripts, script)) {
                Srch.U.traceFormatted(null, 'AppendScriptsToLoad', 'Script \'{0}\' is already added.', script);
            }
            else if (!Srch.U.n(Srch.ScriptApplicationManager.get_current().$18_1[script])) {
                Srch.U.traceFormatted(null, 'AppendScriptsToLoad', 'Script \'{0}\' is already loaded.', script);
            }
            else {
                Srch.U.traceFormatted(null, 'AppendScriptsToLoad', 'Script \'{0}\' added.', script);
                Srch.U.appendArray(scripts, script);
            }
        }
    }
}
Srch.U.registerLoadedScripts = function Srch_U$registerLoadedScripts(scripts) {
    if (!Srch.U.n(scripts)) {
        for (var $v_0 = 0; $v_0 < scripts.length; $v_0++) {
            var $v_1 = scripts[$v_0];
            if (!Srch.U.w($v_1)) {
                Srch.U.traceFormatted(null, 'RegisterLoadedScripts', 'Registering script \'{0}\' as loaded', $v_1);
                Srch.ScriptApplicationManager.get_current().$18_1[$v_1] = true;
            }
        }
    }
}
Srch.U.collapsibleRefinerTitle = function Srch_U$collapsibleRefinerTitle(propertyName, idPrefix, title, iconClass, customOnClick, expanded) {
    var $v_0 = (!Srch.U.e(customOnClick)) ? customOnClick : String.format('EnsureScriptParams(\'SearchUI.js\', \'Srch.SU.toggleRefCategory\', this.parentNode, \'{0}\')', SP.Utilities.HttpUtility.ecmaScriptStringLiteralEncode(propertyName));
    var $v_1 = '';
    if (!Srch.U.e(expanded)) {
        var $v_2 = ' aria-expanded=\"{0}\"';
        if (expanded === 'true') {
            $v_1 = String.format($v_2, 'true');
        }
        else if (expanded === 'false') {
            $v_1 = String.format($v_2, 'false');
        }
    }
    return String.format('<a class=\"ms-ref-refinername\" href=\"javascript: {{}}\" onclick=\"{0}\" onmouseup=\"this.blur();\" role=\"button\"{4}>\r\n                    <div class=\"ms-displayInlineBlock\" id=\"{1}\">{2}</div>\r\n                    <div class=\"{3}\" id=\"refinerExpandCollapseArrow\"></div>\r\n                  </a>', $v_0, SP.Utilities.HttpUtility.htmlEncode((idPrefix || '') + '_RefinerHeading_' + propertyName), SP.Utilities.HttpUtility.htmlEncode(title), SP.Utilities.HttpUtility.htmlEncode(iconClass), $v_1);
}
Srch.U.$3L = function Srch_U$$3L($p0, $p1) {
    if (Srch.U.e($p1)) {
        return '';
    }
    var $v_0 = $p1;
    var $v_1 = [ 'http', 'https' ];
    if (Srch.U.$4O($p1, false, $v_1) || $p1.toLowerCase().startsWith('~site')) {
    }
    else if (!Srch.U.e($p0)) {
        var $v_2 = $p0.lastIndexOf('/');
        if ($v_2 !== -1) {
            var $v_3 = $p0.substring(0, $v_2);
            var $v_4 = $p1;
            var $v_5 = 3;
            while ($v_4.startsWith('../')) {
                $v_4 = $v_4.substring($v_5, $v_4.length);
                var $v_6 = $v_3.lastIndexOf('/');
                if ($v_6 !== -1) {
                    $v_3 = $v_3.substring(0, $v_6);
                }
            }
            if ($v_4.startsWith('/')) {
                $v_0 = $v_3 + $v_4;
            }
            else {
                $v_0 = $v_3 + '/' + $v_4;
            }
        }
    }
    return $v_0;
}
Srch.U.isDefaultSiteSearchPage = function Srch_U$isDefaultSiteSearchPage() {
    var $v_0 = Srch.ScriptApplicationManager.get_current().get_pagePath();
    if (!Srch.U.w($v_0) && $v_0.toLowerCase().trim().endsWith('osssearchresults.aspx')) {
        return true;
    }
    return false;
}
Srch.U.replaceUrlTokens = function Srch_U$replaceUrlTokens(url) {
    if (Srch.U.w(url)) {
        return url;
    }
    if (url.toLowerCase().indexOf('{searchcenterurl}') !== -1) {
        var $v_4 = Srch.ScriptApplicationManager.get_current().states['searchCenterUrl'];
        if (Srch.U.w($v_4)) {
            Srch.U.getSearchCenterUrl(false);
            $v_4 = Srch.ScriptApplicationManager.get_current().states['searchCenterUrl'];
            if (Srch.U.w($v_4)) {
                return Srch.U.replaceUrlTokens(SP.Utilities.VersionUtility.getLayoutsPageUrl('osssearchresults.aspx?u={contexturl}'));
            }
        }
        url = url.replace(new RegExp('\\{searchcenterurl\\}', 'gi'), $v_4);
    }
    var $v_0 = Srch.ScriptApplicationManager.get_current().states['contextUrl'];
    if (!Srch.U.w($v_0)) {
        url = url.replace(new RegExp('\\{contexturl\\}', 'gi'), SP.Utilities.HttpUtility.urlKeyValueEncode($v_0));
    }
    var $v_1 = Srch.ScriptApplicationManager.get_current().get_pagePath();
    if (!Srch.U.w($v_1)) {
        url = url.replace(new RegExp('\\{resultsurl\\}', 'gi'), $v_1);
    }
    var $v_2 = Srch.ScriptApplicationManager.get_current().states['defaultPagesListName'];
    if (!Srch.U.w($v_2)) {
        url = url.replace(new RegExp('\\{defaultpageslistname\\}', 'gi'), $v_2);
    }
    var $v_3 = Srch.U.$2Z();
    if (!Srch.U.w($v_3)) {
        var $v_5 = Srch.U.$4J();
        if (!Srch.U.w($v_5) && $v_3 !== $v_5) {
            $v_3 = $v_5;
        }
        url = url.replace(new RegExp('\\{Locale\\}', 'gi'), $v_3);
    }
    url = SPClientRenderer.ReplaceUrlTokens(url);
    if (!Srch.U.w(url) && Srch.U.isUrlPagelRelative(url)) {
        var $v_6 = SP.PageContextInfo.get_serverRequestPath();
        if (!Srch.U.w($v_6)) {
            var $v_7 = $v_6.lastIndexOf('/');
            if ($v_7 !== -1) {
                var $v_8 = $v_6.substring(0, $v_7);
                url = Srch.U.concatUrl($v_8, url);
            }
        }
    }
    return url;
}
Srch.U.getSearchCenterUrl = function Srch_U$getSearchCenterUrl(async) {
    var $v_0 = SP.PageContextInfo.get_webServerRelativeUrl();
    var $v_1 = '/_api/search/searchcenterurl';
    var $v_2 = ($v_0 && $v_0 !== '/') ? $v_0 + $v_1 : $v_1;
    var $v_3 = new XMLHttpRequest();
    $v_3.open('GET', $v_2, async);
    $v_3.setRequestHeader('Accept', 'application/json;odata=verbose');
    if (async) {
        $v_3.onreadystatechange = function() {
            Srch.U.$4q($v_3);
        };
        $v_3.send(null);
    }
    else {
        $v_3.send(null);
        Srch.U.$4q($v_3);
    }
}
Srch.U.$4q = function Srch_U$$4q($p0) {
    if ($p0.readyState === 4) {
        if ($p0.status === 200) {
            var $v_0 = Sys.Serialization.JavaScriptSerializer.deserialize($p0.responseText);
            var $v_1 = $v_0['d'];
            if (Srch.U.n($v_1)) {
                Srch.U.trace(null, 'GetSearchCenterUrl', 'No data recieved from _api/search/searchcenterurl');
            }
            var $v_2 = $v_1['searchcenterurl'];
            Srch.ScriptApplicationManager.get_current().states['searchCenterUrl'] = $v_2;
        }
        Srch.ClientControl.$q = false;
    }
}
Srch.U.urlTokenExpansion = function Srch_U$urlTokenExpansion(jsLink) {
    if (Srch.U.w(jsLink)) {
        return jsLink;
    }
    var $v_0 = jsLink;
    $v_0 = Srch.U.appendUrlParameter($v_0, 'ctag={SiteClientTag}');
    $v_0 = Srch.U.replaceUrlTokens($v_0);
    return $v_0;
}
Srch.U.includeCSS = function Srch_U$includeCSS(templateLink, relativeLink) {
    var $v_0 = Srch.U.$3L(templateLink, relativeLink);
    Srch.U.$3a($v_0, false);
}
Srch.U.includeScript = function Srch_U$includeScript(templateLink, scriptLink) {
    var $v_0 = Srch.U.$3L(templateLink, scriptLink);
    Srch.U.$3a($v_0, false);
}
Srch.U.includeLanguageScript = function Srch_U$includeLanguageScript(templateLink, scriptLink) {
    var $v_0 = Srch.U.$3L(templateLink, scriptLink);
    Srch.U.$3a($v_0, true);
}
Srch.U.$3a = function Srch_U$$3a($p0, $p1) {
    Srch.U.traceFormatted(null, 'RegisterCustomScript', 'scriptLink:\'{0}\' languageScript:\'{1}\'', $p0, $p1);
    Srch.ScriptApplicationManager.get_current().$1Z_1[$p0] = $p1;
    if ($p1) {
        var $v_0 = Srch.U.$2Z();
        var $v_1 = Srch.U.$2Y();
        if ($v_0 !== $v_1) {
            var $v_2 = Srch.U.$5S($p0);
            Srch.ScriptApplicationManager.get_current().$1Z_1[$v_2] = $p1;
        }
    }
}
Srch.U.isSPFSKU = function Srch_U$isSPFSKU() {
    var $v_0 = Srch.ScriptApplicationManager.get_current().states['isSPFSKU'];
    if (!Srch.U.n($v_0)) {
        return $v_0;
    }
    return false;
}
Srch.U.loadResource = function Srch_U$loadResource(id) {
    return Srch.U.$B(id, true);
}
Srch.U.loadResourceForTemplate = function Srch_U$loadResourceForTemplate(id, templateFunc) {
    return Srch.U.$4R(id, true, templateFunc);
}
Srch.U.$4N = function Srch_U$$4N() {
    var $v_0 = Srch.Res;
    return ((Srch.U.n($v_0)) ? null : $v_0);
}
Srch.U.$B = function Srch_U$$B($p0, $p1) {
    return Srch.U.$4R($p0, $p1, null);
}
Srch.U.$4R = function Srch_U$$4R($p0, $p1, $p2) {
    var $v_0 = '';
    var $v_1 = false;
    var $v_2 = Srch.U.$4N();
    var $v_3 = Srch.U.$2Z();
    if (!Srch.U.w($v_3)) {
        $v_3 = $v_3.toLowerCase();
    }
    var $v_4 = Srch.U.$2Y();
    if (!Srch.U.w($v_4)) {
        $v_4 = $v_4.toLowerCase();
    }
    var $v_5 = Srch.ScriptApplicationManager.get_current();
    if (Srch.U.n($v_5.$C_1)) {
        Srch.U.trace(null, 'LoadResource', 'language resource custom dictionaries not found in ScriptApplicationManager.Current');
        $v_5.$C_1 = {};
    }
    else {
        var $v_6 = $v_5.$C_1[$v_3];
        var $v_7 = $v_5.$C_1[$v_4];
        $v_0 = Srch.U.$1r($p0, $v_6);
        if (Srch.U.e($v_0)) {
            $v_0 = Srch.U.$1r($p0, $v_7);
        }
        $v_1 = (!Srch.U.n($v_6) || !Srch.U.n($v_7));
    }
    if (Srch.U.e($v_0)) {
        $v_0 = Srch.U.$1r($p0, $v_2);
    }
    if (!Srch.U.e($v_0)) {
        return $v_0;
    }
    if ($p1) {
        var $v_8 = String.format('Could not find StringID[{0}] FoundCustomDicts[{1}] UiLang[{2}] DefaultWebLang[{3}]', $p0, $v_1, $v_3, $v_4);
        Srch.U.trace(null, 'LoadResourceInternal', $v_8);
        Srch.U.$5d($p0, $v_1, $p2);
    }
    return '';
}
Srch.U.$5w = function Srch_U$$5w() {
    Srch.ScriptApplicationManager.get_current().$C_1['Warnings'] = [];
}
Srch.U.$3N = function Srch_U$$3N() {
    var $v_0 = Srch.ScriptApplicationManager.get_current().$C_1['Warnings'];
    if (Srch.U.n($v_0)) {
        $v_0 = [];
        Srch.ScriptApplicationManager.get_current().$C_1['Warnings'] = $v_0;
    }
    return $v_0;
}
Srch.U.$2Z = function Srch_U$$2Z() {
    return Srch.ScriptApplicationManager.get_current().states['webUILanguageName'];
}
Srch.U.$4J = function Srch_U$$4J() {
    return Srch.ScriptApplicationManager.get_current().states['webUILanguageDirectory'];
}
Srch.U.$2Y = function Srch_U$$2Y() {
    return Srch.ScriptApplicationManager.get_current().states['webDefaultLanguageName'];
}
Srch.U.$5d = function Srch_U$$5d($p0, $p1, $p2) {
    var $v_0 = Srch.U.$4N();
    var $v_1 = Srch.U.$2Z();
    if (!Srch.U.w($v_1)) {
        $v_1 = $v_1.toLowerCase();
    }
    var $v_2 = Srch.U.$2Y();
    if (!Srch.U.w($v_2)) {
        $v_2 = $v_2.toLowerCase();
    }
    var $v_3 = 'Could not locate core string resources from [Srch.Resources.resx]';
    var $v_4 = Srch.U.$3N();
    var $v_5 = '';
    if ($p1) {
        $v_5 = Srch.U.$1r('cc_err_CustomLocStringWarningDisplayHeaderFormat', $v_0);
    }
    else {
        $v_5 = Srch.U.$1r('cc_err_NoCustomLoadedLocStringWarningDisplayHeaderFormat', $v_0);
    }
    if (!Srch.U.e($v_5)) {
        $v_3 = String.format($v_5, $v_1, $v_2, $p0);
    }
    var $v_6 = Srch.ControlMessage.getForStringLoadFailure($v_3, $p2);
    Srch.U.appendArray($v_4, $v_6);
}
Srch.U.$1r = function Srch_U$$1r($p0, $p1) {
    if (!Srch.U.n($p1)) {
        if (!Srch.U.n($p1[$p0])) {
            return $p1[$p0];
        }
    }
    return '';
}
Srch.U.registerResourceDictionary = function Srch_U$registerResourceDictionary(locale, dict) {
    if (!Srch.U.e(locale)) {
        var $v_0 = locale.toLowerCase();
        if (Srch.U.n(Srch.ScriptApplicationManager.get_current().$C_1[$v_0])) {
            Srch.ScriptApplicationManager.get_current().$C_1[$v_0] = dict;
        }
        else if (!Srch.U.n(dict)) {
            var $$dict_3 = dict;
            for (var $$key_4 in $$dict_3) {
                var $v_1 = { key: $$key_4, value: $$dict_3[$$key_4] };
                (Srch.ScriptApplicationManager.get_current().$C_1[$v_0])[$v_1.key] = $v_1.value;
            }
        }
    }
}
Srch.U.$5S = function Srch_U$$5S($p0) {
    if (!Srch.U.n($p0) && !Srch.U.w(Srch.U.$2Y())) {
        return $p0.replace(new RegExp('\\{Locale\\}', 'gi'), Srch.U.$4J());
    }
    else {
        return $p0;
    }
}
Srch.U.restorePath = function Srch_U$restorePath(el, originalText, selectText) {
    if (Srch.U.restoreText(el, originalText, selectText)) {
        Srch.U.ensureCSSClassNameNotExist(el, 'ms-srch-item-path-selected');
    }
}
Srch.U.selectPath = function Srch_U$selectPath(text, el) {
    if (!Srch.U.n(el)) {
        el.innerHTML = '';
        Srch.U.ensureCSSClassNameExist(el, 'ms-srch-item-path-selected');
        Srch.U.selectText(text, el);
        el.focus();
    }
}
Srch.U.setPath = function Srch_U$setPath(e, el, text, originalText) {
    if (!Srch.U.n(el) && !Srch.U.n(e)) {
        var $v_0 = (!Srch.U.n(e.keyCode)) ? e.keyCode : e.which;
        if ($v_0 === 13) {
            Srch.U.selectPath(text, el);
        }
        else if ($v_0 === 9) {
            Srch.U.restorePath(el, originalText, '');
        }
    }
}
Srch.U.restoreText = function Srch_U$restoreText(el, originalText, selectText) {
    if (Srch.U.n(el)) {
        return false;
    }
    var $v_0 = null;
    var $v_1 = window.self.getSelection;
    if (!Srch.U.n($v_1)) {
        $v_0 = window.self.getSelection();
    }
    if (Srch.U.n($v_0)) {
        var $v_3 = document.selection;
        if (!Srch.U.n($v_3)) {
            var $v_4 = $v_3.createRange();
            if (!Srch.U.n($v_4)) {
                $v_0 = $v_4.text;
            }
        }
    }
    if (Srch.U.n($v_0)) {
        return false;
    }
    var $v_2 = $v_0.toString();
    if ($v_2 !== selectText) {
        el.innerHTML = originalText;
        return true;
    }
    return false;
}
Srch.U.selectText = function Srch_U$selectText(text, el) {
    if (Srch.U.n(el)) {
        return;
    }
    el.innerHTML = SP.Utilities.HttpUtility.htmlEncode(text).replace(new RegExp(' ', 'g'), '&nbsp;');
    var $v_0 = window.document.createRange;
    var $v_1 = window.self.getSelection;
    if (!Srch.U.n($v_1) && !Srch.U.n($v_0)) {
        var $v_2 = window.document.createRange();
        $v_2.selectNodeContents(el);
        var $v_3 = window.self.getSelection();
        $v_3.removeAllRanges();
        $v_3.addRange($v_2);
    }
    else {
        var $v_4 = document.body.createTextRange;
        if (!Srch.U.n($v_4)) {
            var $v_5 = document.body.createTextRange();
            $v_5.moveToElementText(el);
            $v_5.select();
        }
    }
}
Srch.U.renderFriendlyTimeIntervalString = function Srch_U$renderFriendlyTimeIntervalString(dateTimeSinceUTC, targetElementID, calendarType) {
    EnsureScriptFunc('sp.datetimeutil.js', 'SP.DateTimeUtil.SPRelativeDateTime', function() {
        var $v_0 = $get(targetElementID);
        if (Srch.U.n($v_0)) {
            Srch.U.trace(null, 'RenderFriendlyTimeIntervalString', String.format('Document.GetElementById returned null for id \'{0}\'.', targetElementID));
            return;
        }
        if (Srch.U.n(calendarType)) {
            calendarType = Srch.U.getCalendarType();
        }
        $v_0.innerHTML = SP.Utilities.HttpUtility.htmlEncode(Srch.U.getFriendlyTimeInterval(dateTimeSinceUTC, calendarType));
    });
}
Srch.U.getFriendlyTimeInterval = function Srch_U$getFriendlyTimeInterval(dateTimeSince, calendarType) {
    var $v_0 = new Date();
    if (dateTimeSince > $v_0) {
        dateTimeSince = $v_0;
    }
    if (dateTimeSince.getFullYear() === $v_0.getFullYear()) {
        return SP.DateTimeUtil.SPRelativeDateTime.getRelativeDateTimeString(dateTimeSince, true, calendarType, true);
    }
    else {
        var $v_1 = SP.DateTimeUtil.IntlDate.createFromJsLocalDate(dateTimeSince, calendarType);
        return $v_1.format('D', Sys.CultureInfo.CurrentCulture.name);
    }
}
Srch.U.getCalendarType = function Srch_U$getCalendarType() {
    var $v_0 = 0;
    if (!Srch.U.n(_spRegionalSettings.calendarType)) {
        $v_0 = _spRegionalSettings.calendarType;
    }
    return $v_0;
}
Srch.U.createFileIconAltText = function Srch_U$createFileIconAltText(isFolder, fileType) {
    var $v_0 = (isFolder) ? Srch.Res.ct_Folder : fileType;
    return String.format(Srch.Res.item_Alt_Icon, $v_0);
}


Srch.U.PropNames = function Srch_U_PropNames() {
}


Srch.U.Ids = function Srch_U_Ids() {
}


Srch.U.LoadScriptsState = function Srch_U_LoadScriptsState() {
    this.timeoutHandle = -1;
}
Srch.U.LoadScriptsState.prototype = {
    progress: 0,
    scriptsToLoad: null
}


Srch.U.LoadScriptsProgress = function() {}
Srch.U.LoadScriptsProgress.prototype = {
    loading: 0, 
    success: 1, 
    failure: 2
}
Srch.U.LoadScriptsProgress.registerEnum('Srch.U.LoadScriptsProgress', false);


Srch.ListenedEvent = function Srch_ListenedEvent(cc, type, handler) {
    this.$I_0 = cc;
    this.$P_0 = type;
    this.$D_0 = handler;
}
Srch.ListenedEvent.prototype = {
    $I_0: null,
    $P_0: 0,
    $D_0: null,
    
    dispose: function Srch_ListenedEvent$dispose() {
        if (!Srch.U.n(this.$I_0) && !Srch.U.n(this.$D_0)) {
            if (Srch.DisplayControl.isInstanceOfType(this.$I_0)) {
                var $v_0 = this.$I_0;
                if (this.$P_0 === 1) {
                    $v_0.remove_queryReady(this.$D_0);
                }
            }
            else if (Srch.DataProvider.isInstanceOfType(this.$I_0)) {
                var $v_1 = this.$I_0;
                if (this.$P_0 === 2) {
                    $v_1.remove_queryIssuing(this.$D_0);
                }
                else if (this.$P_0 === 4) {
                    $v_1.remove_resultReady(this.$D_0);
                }
                else if (this.$P_0 === 6) {
                    $v_1.remove_queryStateChanged(this.$D_0);
                }
            }
            else if (Srch.SearchBox.isInstanceOfType(this.$I_0)) {
                var $v_2 = this.$I_0;
                if (this.$P_0 === 1) {
                    $v_2.remove_queryReady(this.$D_0);
                }
                else if (this.$P_0 === 3) {
                    $v_2.remove_batchQueryIssuing(this.$D_0);
                }
                else if (this.$P_0 === 5) {
                    $v_2.remove_batchResultReady(this.$D_0);
                }
            }
        }
    }
}


Srch.ScriptApplicationManager = function Srch_ScriptApplicationManager() {
    this.$$d_$53_1 = Function.createDelegate(this, this.$53_1);
    this.states = {};
    this.queryGroups = {};
    this.$3g_1 = {};
    this.$1K_1 = {};
    this.$18_1 = {};
    this.$1Z_1 = {};
    this.$C_1 = {};
    this.$2d_1 = {};
    Srch.ScriptApplicationManager.initializeBase(this);
}
Srch.ScriptApplicationManager.get_current = function Srch_ScriptApplicationManager$get_current() {
    if (Srch.U.n(Srch.ScriptApplicationManager.$1W)) {
        Srch.ScriptApplicationManager.$1W = $create(Srch.ScriptApplicationManager);
    }
    Srch.U.ensureNotNullOrUndefined(Srch.ScriptApplicationManager.$1W, null, 'Current', 'ScriptApplicationManager.current');
    return Srch.ScriptApplicationManager.$1W;
}
Srch.ScriptApplicationManager.get_clientRuntimeContext = function Srch_ScriptApplicationManager$get_clientRuntimeContext() {
    if (Srch.U.n(Srch.ScriptApplicationManager.$w)) {
        Srch.ScriptApplicationManager.$w = new SP.ClientRuntimeContext(SP.PageContextInfo.get_webServerRelativeUrl());
        Srch.ScriptApplicationManager.$w.set_formDigestHandlingEnabled(true);
    }
    Srch.U.ensureNotNullOrUndefined(Srch.ScriptApplicationManager.$w, null, 'ClientRuntimeContext', 'ScriptApplicationManager.clientRuntimeContext');
    return Srch.ScriptApplicationManager.$w;
}
Srch.ScriptApplicationManager.prototype = {
    $3w_1: null,
    $16_1: null,
    $x_1: null,
    
    get_preferencesUrl: function Srch_ScriptApplicationManager$get_preferencesUrl() {
        return SP.Utilities.VersionUtility.getLayoutsPageUrl('EditUserPref.aspx?Source=' + SP.Utilities.HttpUtility.urlKeyValueEncode(ajaxNavigate.get_href()));
    },
    
    get_resultTypesUrl: function Srch_ScriptApplicationManager$get_resultTypesUrl() {
        return SP.Utilities.VersionUtility.getLayoutsPageUrl('manageresulttypes.aspx?level=site');
    },
    
    get_displayTemplatesUrl: function Srch_ScriptApplicationManager$get_displayTemplatesUrl() {
        return SP.Utilities.UrlBuilder.urlCombine(SP.PageContextInfo.get_siteServerRelativeUrl(), SP.Utilities.VersionUtility.get_layoutsLatestVersionRelativeUrl() + 'DesignDisplayTemplates.aspx');
    },
    
    get_queryRulesUrl: function Srch_ScriptApplicationManager$get_queryRulesUrl() {
        return SP.Utilities.VersionUtility.getLayoutsPageUrl('listqueryrules.aspx?level=site');
    },
    
    get_resultSourcesUrl: function Srch_ScriptApplicationManager$get_resultSourcesUrl() {
        return SP.Utilities.VersionUtility.getLayoutsPageUrl('manageresultsources.aspx?level=site');
    },
    
    get_userAdvancedLanguageSettingsUrl: function Srch_ScriptApplicationManager$get_userAdvancedLanguageSettingsUrl() {
        return this.states['userAdvancedLanguageSettingsUrl'];
    },
    
    get_pagePath: function Srch_ScriptApplicationManager$get_pagePath() {
        if (Srch.U.n(this.$i_1)) {
            var $v_0 = ajaxNavigate.get_href();
            if (!Srch.U.w($v_0)) {
                var $v_1 = $v_0.split('?');
                if (!Srch.U.n($v_1) && $v_1.length > 0) {
                    this.$i_1 = $v_1[0];
                    if (!Srch.U.w(this.$i_1)) {
                        $v_1 = this.$i_1.split('#');
                        if (!Srch.U.n($v_1) && $v_1.length > 0) {
                            this.$i_1 = $v_1[0];
                        }
                    }
                }
            }
        }
        return this.$i_1;
    },
    
    $i_1: null,
    
    add_preLoad: function Srch_ScriptApplicationManager$add_preLoad(value) {
        this.get_events().addHandler(Srch.EventType.toString(8), value);
    },
    
    remove_preLoad: function Srch_ScriptApplicationManager$remove_preLoad(value) {
        this.get_events().removeHandler(Srch.EventType.toString(8), value);
    },
    
    raisePreLoadEvent: function Srch_ScriptApplicationManager$raisePreLoadEvent() {
        Srch.U.trace(this, '-----RaisePreLoadEvent-----', '');
        var $v_0 = this.get_events().getHandler(Srch.EventType.toString(8));
        if (!Srch.U.n($v_0)) {
            $v_0(this, null);
        }
    },
    
    add_load: function Srch_ScriptApplicationManager$add_load(value) {
        this.get_events().addHandler(Srch.EventType.toString(9), value);
    },
    
    remove_load: function Srch_ScriptApplicationManager$remove_load(value) {
        this.get_events().removeHandler(Srch.EventType.toString(9), value);
    },
    
    raiseLoadEvent: function Srch_ScriptApplicationManager$raiseLoadEvent() {
        Srch.U.trace(this, '-----RaiseLoadEvent-----', '');
        var $v_0 = this.get_events().getHandler(Srch.EventType.toString(9));
        if (!Srch.U.n($v_0)) {
            $v_0(this, null);
        }
    },
    
    add_postLoad: function Srch_ScriptApplicationManager$add_postLoad(value) {
        this.get_events().addHandler(Srch.EventType.toString(10), value);
    },
    
    remove_postLoad: function Srch_ScriptApplicationManager$remove_postLoad(value) {
        this.get_events().removeHandler(Srch.EventType.toString(10), value);
    },
    
    raisePostLoadEvent: function Srch_ScriptApplicationManager$raisePostLoadEvent() {
        Srch.U.trace(this, '-----RaisePostLoadEvent-----', '');
        var $v_0 = this.get_events().getHandler(Srch.EventType.toString(10));
        if (!Srch.U.n($v_0)) {
            $v_0(this, null);
        }
    },
    
    initialize: function Srch_ScriptApplicationManager$initialize() {
        this.$x_1 = this.$$d_$53_1;
        Sys.Application.add_load(this.$x_1);
        Sys.Component.prototype.initialize.call(this);
    },
    
    dispose: function Srch_ScriptApplicationManager$dispose() {
        Srch.U.trace(this, 'Dispose', '');
        if (!Srch.U.n(this.$x_1)) {
            Sys.Application.remove_load(this.$x_1);
            this.$x_1 = null;
        }
        Sys.Component.prototype.dispose.call(this);
    },
    
    getUserPreferenceLanguages: function Srch_ScriptApplicationManager$getUserPreferenceLanguages() {
        return this.states['languages'];
    },
    
    getAllSupportedLanguages: function Srch_ScriptApplicationManager$getAllSupportedLanguages() {
        return this.states['supportedLanguages'];
    },
    
    getNavigationNodes: function Srch_ScriptApplicationManager$getNavigationNodes() {
        return this.states['navigationNodes'];
    },
    
    getDisplayNameByLanguageID: function Srch_ScriptApplicationManager$getDisplayNameByLanguageID(lcid) {
        var $v_0 = null;
        if (!this.$16_1) {
            $v_0 = this.getAllSupportedLanguages();
            this.$16_1 = {};
            for (var $v_2 = 0; $v_2 < $v_0.length; $v_2++) {
                var $v_3 = $v_0[$v_2];
                this.$16_1[$v_3.id.toString()] = $v_3;
            }
        }
        var $v_1 = this.$16_1[lcid.toString()];
        if (!Srch.U.n($v_1)) {
            return $v_1.label;
        }
        lcid = lcid & 1023;
        if (Srch.U.n($v_0)) {
            $v_0 = this.getAllSupportedLanguages();
        }
        for (var $v_4 = 0; $v_4 < $v_0.length; $v_4++) {
            $v_1 = $v_0[$v_4];
            if (($v_1.id & 1023) === lcid) {
                this.$16_1[lcid.toString()] = $v_1;
                return $v_1.label;
            }
        }
        return null;
    },
    
    $53_1: function Srch_ScriptApplicationManager$$53_1($p0, $p1) {
        Srch.U.trace(this, 'Application_Load', '');
        if (Srch.U.isPagePartialLoad($p1)) {
            Srch.U.trace(this, 'Application_Load', 'Skipping load events for partial page load...');
            return;
        }
        else {
            Srch.U.trace(this, 'Application_Load', '-----Triggering all load events-----');
            this.raisePreLoadEvent();
            this.raiseLoadEvent();
            this.raisePostLoadEvent();
            Srch.U.trace(this, 'Application_Load', '-----All load events triggered-----');
        }
    },
    
    registerClientControl: function Srch_ScriptApplicationManager$registerClientControl(cc) {
        if (Srch.U.n(cc)) {
            return;
        }
        if (Srch.DisplayControl.isInstanceOfType(cc)) {
            var $v_0 = cc;
            var $v_1 = this.$3F_1($v_0.$5_3);
            Srch.U.appendArray($v_1.displays, $v_0);
            Srch.U.traceFormatted(this, 'RegisterClientControl', 'Adding Display \'{0}\' to query group \'{1}\'', $v_0.get_id(), $v_0.$5_3);
        }
        else if (Srch.DataProvider.isInstanceOfType(cc)) {
            var $v_2 = cc;
            var $v_3 = this.$3F_1($v_2.$5_3);
            if ($v_2.$R_3 && Srch.U.n($v_3.dataProvider)) {
                $v_3.dataProvider = $v_2;
                Srch.U.traceFormatted(this, 'RegisterClientControl', 'Adding DataProvider \'{0}\' to query group \'{1}\'', $v_2.get_id(), $v_2.$5_3);
            }
            else {
                $v_2.$R_3 = false;
                Srch.U.traceFormatted(this, 'RegisterClientControl', 'DataProvider \'{0}\' not added to to query group \'{1}\'', $v_2.get_id(), $v_2.$5_3);
            }
        }
        else if (Srch.SearchBox.isInstanceOfType(cc)) {
            var $v_4 = cc;
            if (!Srch.U.n($v_4.$L_3)) {
                for (var $v_5 = 0; $v_5 < $v_4.$L_3.length; $v_5++) {
                    var $v_6 = $v_4.$L_3[$v_5];
                    var $v_7 = this.$3F_1($v_6);
                    Srch.U.appendArray($v_7.searchBoxes, $v_4);
                    Srch.U.traceFormatted(this, 'RegisterClientControl', 'Adding SearchBox \'{0}\' to query group \'{1}\'', $v_4.get_id(), $v_6);
                }
            }
        }
    },
    
    navigateTo: function Srch_ScriptApplicationManager$navigateTo(url, fullNavigate) {
        var $v_0 = 0;
        var $v_1 = null;
        var $v_2 = null;
        var $v_3 = {};
        var $$dict_6 = this.queryGroups;
        for (var $$key_7 in $$dict_6) {
            var $v_4 = { key: $$key_7, value: $$dict_6[$$key_7] };
            var $v_5 = $v_4.value;
            if (!Srch.U.n($v_5) && !Srch.U.n($v_5.dataProvider) && $v_5.dataProvider.$2I_3) {
                $v_0++;
                var $v_6 = $v_5.dataProvider.$2_3.$5r_0();
                if ($v_0 === 1 && Srch.QueryState.$5V($v_6)) {
                    $v_1 = $v_5.name;
                    $v_2 = $v_6;
                }
                else {
                    $v_1 = null;
                    $v_2 = null;
                }
                $v_3[$v_5.name] = Sys.Serialization.JavaScriptSerializer.serialize($v_6);
            }
        }
        if ($v_0 < 1) {
            Srch.U.trace(null, 'AddNavigatePoint', 'Nothing to add.');
            return;
        }
        if (!Srch.U.n($v_1) && !Srch.U.n($v_2)) {
            $v_3 = $v_2;
            Srch.QueryState.$43($v_3, false);
            $v_3[$v_1] = null;
        }
        else {
            Srch.QueryState.$43($v_3, true);
        }
        $v_3['__'] = null;
        Srch.U.trace(null, 'AddNavigatePoint', Sys.Serialization.JavaScriptSerializer.serialize($v_3));
        ajaxNavigate.update(url, $v_3, fullNavigate);
    },
    
    $3z_1: function Srch_ScriptApplicationManager$$3z_1() {
        this.navigateTo(null, false);
    },
    
    $3F_1: function Srch_ScriptApplicationManager$$3F_1($p0) {
        Srch.U.ensureNotNullOrEmptyString($p0, this, 'EnsureQueryGroup', 'queryGroupName');
        var $v_0 = this.queryGroups[$p0];
        if (Srch.U.n($v_0)) {
            $v_0 = new Srch.QueryGroup($p0);
            this.queryGroups[$p0] = $v_0;
        }
        Srch.U.ensureNotNullOrUndefined($v_0, this, 'EnsureQueryGroup', 'qg');
        return $v_0;
    },
    
    get_searchSessionID: function Srch_ScriptApplicationManager$get_searchSessionID() {
        var $v_0 = 'SearchSession';
        var $v_1 = Srch.U.getCookie($v_0);
        if (Srch.U.n($v_1)) {
            Srch.U.trace(null, 'SearchSessionID', 'Creating new search session cookie...');
            $v_1 = SP.Guid.newGuid().toString();
            Srch.U.setCookie($v_0, $v_1, null, null, null);
        }
        Srch.U.traceFormatted(null, 'SearchSessionID', 'Search session cookie value is \'{0}\'', $v_1);
        return $v_1;
    }
}


Srch.QueryGroup = function Srch_QueryGroup(name) {
    this.searchBoxes = [];
    this.displays = [];
    this.name = name;
}
Srch.QueryGroup.prototype = {
    name: '',
    dataProvider: null
}


Srch.LanguagePreference = function Srch_LanguagePreference(id, label) {
    this.id = -1;
    this.id = id;
    this.label = label;
}
Srch.LanguagePreference.prototype = {
    label: ''
}


Srch.QueryState = function Srch_QueryState() {
    this.e = -1;
}
Srch.QueryState.$5V = function Srch_QueryState$$5V($p0) {
    if (Srch.U.n($p0)) {
        return false;
    }
    var $$dict_1 = $p0;
    for (var $$key_2 in $$dict_1) {
        var $v_0 = { key: $$key_2, value: $$dict_1[$$key_2] };
        if ('string' !== typeof($v_0.value) && 'number' !== typeof($v_0.value)) {
            return false;
        }
    }
    return true;
}
Srch.QueryState.$43 = function Srch_QueryState$$43($p0, $p1) {
    if (!Srch.U.n($p0)) {
        var $v_0 = Srch.QueryState.$4;
        var $$dict_3 = $v_0;
        for (var $$key_4 in $$dict_3) {
            var $v_1 = { key: $$key_4, value: $$dict_3[$$key_4] };
            if ('function' !== typeof($v_1.value)) {
                if ($p1 || Srch.U.n($p0[$v_1.key])) {
                    $p0[$v_1.key] = null;
                }
            }
        }
    }
}
Srch.QueryState.$5C = function Srch_QueryState$$5C() {
    var $v_0 = false;
    var $v_1 = new Srch.QueryState();
    var $v_2 = $v_1;
    var $v_3 = Srch.QueryState.$4;
    var $$dict_4 = $v_3;
    for (var $$key_5 in $$dict_4) {
        var $v_4 = { key: $$key_5, value: $$dict_4[$$key_5] };
        var $v_5 = ajaxNavigate.getParam($v_4.key);
        if ($v_4.key === 'k' && Srch.U.n($v_5)) {
            $v_5 = ajaxNavigate.getParam('/' + $v_4.key);
        }
        if (!Srch.U.n($v_5)) {
            if ('string' === typeof($v_4.value)) {
                $v_2[$v_4.key] = $v_5;
                $v_0 = true;
            }
            else if ('number' === typeof($v_4.value)) {
                try {
                    var $v_6 = parseInt($v_5);
                    if (!isNaN($v_6)) {
                        $v_2[$v_4.key] = $v_6;
                        $v_0 = true;
                    }
                }
                catch ($v_7) {
                    Srch.U.traceFormatted(null, 'CreateFromStringNumberOnlyValues', 'Formatting number from string \'{0}\' failed: {1}', $v_5, $v_7.message);
                }
            }
        }
    }
    if ($v_0) {
        Srch.U.trace(null, 'CreateFromStringNumberOnlyValues', 'Found');
        return $v_1;
    }
    else {
        Srch.U.trace(null, 'CreateFromStringNumberOnlyValues', 'Not found');
        return null;
    }
}
Srch.QueryState.$5N = function Srch_QueryState$$5N() {
    var $v_0 = new Srch.QueryState();
    $v_0.k = null;
    return $v_0;
}
Srch.QueryState.prototype = {
    k: '',
    o: null,
    s: 0,
    r: null,
    l: 0,
    m: '',
    d: 0,
    x: null,
    
    copyFrom: function Srch_QueryState$copyFrom(qs, option) {
        if (Srch.U.n(qs)) {
            return;
        }
        if (!option || option === 1 || qs.k !== Srch.QueryState.$4.k) {
            if (!Srch.U.n(qs.k)) {
                this.k = qs.k;
            }
            else {
                this.k = Srch.QueryState.$4.k;
            }
        }
        if (Srch.U.n(this.k)) {
            this.k = Srch.QueryState.$4.k;
        }
        if (!option || qs.o !== Srch.QueryState.$4.o) {
            if (!Srch.U.n(qs.o)) {
                this.o = Srch.U.$2R(qs.o, Srch.ResultSort);
            }
            else {
                this.o = Srch.QueryState.$4.o;
            }
        }
        if (!Srch.U.n(this.o) && this.o.length < 1) {
            this.o = Srch.QueryState.$4.o;
        }
        if (!option || qs.x !== Srch.QueryState.$4.x) {
            if (!Srch.U.n(qs.x)) {
                this.x = Srch.U.$2R(qs.x, Srch.RankRule);
            }
            else {
                this.x = Srch.QueryState.$4.x;
            }
        }
        if (!Srch.U.n(this.x) && this.x.length < 1) {
            this.x = Srch.QueryState.$4.x;
        }
        if (!option || option === 1 || qs.s !== Srch.QueryState.$4.s) {
            if (!Srch.U.n(qs.s)) {
                this.s = qs.s;
            }
            else {
                this.s = Srch.QueryState.$4.s;
            }
        }
        if (this.s <= 1) {
            this.s = Srch.QueryState.$4.s;
        }
        if (!option || option === 1 || qs.r !== Srch.QueryState.$4.r) {
            if (!Srch.U.n(qs.r)) {
                this.r = Srch.U.$2R(qs.r, Srch.RefinementCategory);
            }
            else {
                this.r = Srch.QueryState.$4.r;
            }
        }
        if (!Srch.U.n(this.r) && this.r.length < 1) {
            this.r = Srch.QueryState.$4.r;
        }
        if (!option || qs.l !== Srch.QueryState.$4.l) {
            if (!Srch.U.n(qs.l)) {
                this.l = qs.l;
            }
            else {
                this.l = Srch.QueryState.$4.l;
            }
        }
        if (this.l < 0) {
            this.l = Srch.QueryState.$4.l;
        }
        if (!option || option === 1 || qs.m !== Srch.QueryState.$4.m) {
            if (!Srch.U.n(qs.m)) {
                this.m = qs.m;
            }
            else {
                this.m = Srch.QueryState.$4.m;
            }
        }
        if (Srch.U.n(this.m)) {
            this.m = Srch.QueryState.$4.m;
        }
        if (!option || option === 1 || qs.d !== Srch.QueryState.$4.d) {
            if (!Srch.U.n(qs.d)) {
                this.d = qs.d;
            }
            else {
                this.d = Srch.QueryState.$4.d;
            }
        }
        if (this.d < 0) {
            this.d = Srch.QueryState.$4.d;
        }
        if (!option || option === 1 || qs.e !== Srch.QueryState.$4.e) {
            if (!Srch.U.n(qs.e)) {
                this.e = qs.e;
            }
            else {
                this.e = Srch.QueryState.$4.e;
            }
        }
        if (this.e < 0) {
            this.e = Srch.QueryState.$4.e;
        }
    },
    
    $39_0: function Srch_QueryState$$39_0($p0, $p1) {
        if (Srch.U.n($p0) && Srch.U.n($p1)) {
            return true;
        }
        if (Srch.U.n($p0) || Srch.U.n($p1)) {
            return false;
        }
        if ($p0.length !== $p1.length) {
            return false;
        }
        for (var $v_0 = 0; $v_0 < $p0.length; $v_0++) {
            var $v_1 = $p0[$v_0];
            var $v_2 = $p1[$v_0];
            if (Srch.U.n($v_1) !== Srch.U.n($v_2)) {
                return false;
            }
            if (!Srch.U.n($v_1)) {
                if (!$v_1.equalsTo($v_2)) {
                    return false;
                }
            }
        }
        return true;
    },
    
    equalsTo: function Srch_QueryState$equalsTo(qs) {
        if (Srch.U.n(qs)) {
            return false;
        }
        if (this.d !== qs.d || this.m !== qs.m || this.l !== qs.l || this.s !== qs.s || this.k !== qs.k || this.e !== qs.e) {
            return false;
        }
        if (!this.$39_0(this.r, qs.r) || !this.$39_0(this.x, qs.x) || !this.$39_0(this.o, qs.o)) {
            return false;
        }
        return true;
    },
    
    $5r_0: function Srch_QueryState$$5r_0() {
        var $v_0 = Srch.QueryState.$4;
        var $v_1 = this;
        var $v_2 = {};
        var $$dict_3 = $v_0;
        for (var $$key_4 in $$dict_3) {
            var $v_3 = { key: $$key_4, value: $$dict_3[$$key_4] };
            if ('function' !== typeof($v_3.value) && ($v_3.key === 'k' || $v_0[$v_3.key] !== $v_1[$v_3.key])) {
                $v_2[$v_3.key] = $v_1[$v_3.key];
            }
        }
        return $v_2;
    }
}


Srch.QueryState.CopyOption = function() {}
Srch.QueryState.CopyOption.prototype = {
    undefined: -1, 
    fullOverride: 0, 
    partialOverride: 1, 
    merge: 2
}
Srch.QueryState.CopyOption.registerEnum('Srch.QueryState.CopyOption', false);


Srch.RefinementControl = function Srch_RefinementControl(propertyName, spec, renderTemplateId) {
    this.propertyName = propertyName;
    this.spec = spec;
    this.renderTemplateId = renderTemplateId;
}
Srch.RefinementControl.prototype = {
    propertyName: null,
    spec: null,
    renderTemplateId: '4',
    overrideDisplayName: null,
    useDefaultDateIntervals: false,
    containerId: null,
    alternateRenderer: null,
    alternateRenderContext: null,
    countDisplay: 'Both'
}


Srch.RefinementCategory = function Srch_RefinementCategory(refinementName) {
    this.n = refinementName;
    this.t = [];
    this.o = 'and';
}
Srch.RefinementCategory.prototype = {
    n: null,
    t: null,
    o: 'and',
    k: false,
    m: null,
    
    get_tokenCount: function Srch_RefinementCategory$get_tokenCount() {
        return (Srch.U.n(this.t)) ? 0 : this.t.length;
    },
    
    addToken: function Srch_RefinementCategory$addToken(refinementToken) {
        if (!this.hasToken(refinementToken)) {
            Srch.U.appendArray(this.t, refinementToken);
        }
    },
    
    removeToken: function Srch_RefinementCategory$removeToken(refinementToken) {
        if (Srch.U.n(this.t)) {
            return;
        }
        var $v_0 = [];
        for (var $v_1 = 0; $v_1 < this.t.length; $v_1++) {
            var $v_2 = this.t[$v_1];
            if ($v_2 !== refinementToken) {
                Srch.U.appendArray($v_0, $v_2);
            }
        }
        this.t = $v_0;
    },
    
    hasToken: function Srch_RefinementCategory$hasToken(refinementToken) {
        return Srch.U.isInArray(this.t, refinementToken);
    },
    
    toString: function Srch_RefinementCategory$toString() {
        var $v_0 = '';
        if (Srch.U.n(this.t) || !this.t.length) {
            return $v_0;
        }
        if (this.t.length > 0) {
            if (this.t.length === 1) {
                $v_0 = this.n + ':' + this.t[0];
            }
            else {
                var $v_1 = (Srch.U.e(this.o)) ? 'and' : this.o;
                var $v_2 = !Srch.U.n(this.k) && this.k;
                if ($v_2) {
                    $v_0 += '(';
                    for (var $v_3 = 0; $v_3 < this.t.length; $v_3++) {
                        $v_0 += this.n + ':' + this.t[$v_3];
                        if ($v_3 < this.t.length - 1) {
                            $v_0 += ' ' + $v_1 + ' ';
                        }
                    }
                    $v_0 += ')';
                }
                else {
                    $v_0 = $v_1 + '(';
                    for (var $v_4 = 0; $v_4 < this.t.length; $v_4++) {
                        $v_0 += this.n + ':' + this.t[$v_4];
                        if ($v_4 < this.t.length - 1) {
                            $v_0 += ',';
                        }
                    }
                    $v_0 += ')';
                }
            }
        }
        return $v_0;
    },
    
    equalsTo: function Srch_RefinementCategory$equalsTo(rc) {
        if (Srch.U.n(rc)) {
            return false;
        }
        if (this.n !== rc.n || this.o !== rc.o) {
            return false;
        }
        if (Srch.U.n(this.t) !== Srch.U.n(rc.t)) {
            return false;
        }
        if (Srch.U.n(this.k) !== Srch.U.n(rc.k) || this.k !== rc.k) {
            return false;
        }
        if (!Srch.U.n(this.t)) {
            if (this.t.length !== rc.t.length) {
                return false;
            }
            for (var $v_0 = 0; $v_0 < this.t.length; $v_0++) {
                var $v_1 = this.t[$v_0];
                var $v_2 = rc.t[$v_0];
                if ($v_1 !== $v_2) {
                    return false;
                }
            }
        }
        return true;
    }
}


Srch.DefaultQueryProperties = function Srch_DefaultQueryProperties() {
}
Srch.DefaultQueryProperties.prototype = {
    culture: 0,
    uiLanguage: 0,
    summaryLength: 0,
    desiredSnippetLength: 0,
    enableStemming: false,
    enablePhonetic: false,
    enableNicknames: false,
    trimDuplicates: false,
    bypassResultTypes: false,
    enableInterleaving: false,
    enableQueryRules: false,
    processBestBets: false,
    enableOrderingHitHighlightedProperty: false,
    hitHighlightedMultivaluePropertyLimit: 0,
    processPersonalFavorites: false
}


Srch.ResultSort = function Srch_ResultSort(propertyName, direction) {
    this.p = propertyName;
    this.d = direction;
}
Srch.ResultSort.prototype = {
    p: null,
    d: 0,
    
    equalsTo: function Srch_ResultSort$equalsTo(rs) {
        if (Srch.U.n(rs)) {
            return false;
        }
        return this.p === rs.p && this.d === rs.d;
    }
}


Srch.RankRule = function Srch_RankRule(matchType, customMatchValue, customBoost) {
    this.matchType = matchType;
    this.matchValue = customMatchValue;
    this.boost = customBoost;
}
Srch.RankRule.prototype = {
    matchType: 0,
    matchValue: null,
    boost: 0,
    
    equalsTo: function Srch_RankRule$equalsTo(rr) {
        if (Srch.U.n(rr)) {
            return false;
        }
        return this.matchType === rr.matchType && this.boost === rr.boost && this.matchValue === rr.matchValue;
    }
}


Srch.ComplexResultSort = function Srch_ComplexResultSort(name, sorts) {
    this.name = name;
    this.sorts = sorts;
}
Srch.ComplexResultSort.prototype = {
    name: null,
    sorts: null
}


Srch.ControlMessage = function Srch_ControlMessage(header, level, code, type, messageDetails, messageDetailsForViewers, stackTrace, correlationID, showInEditModeOnly, showForViewerUsers, encodeDetails) {
    this.header = header;
    this.level = level;
    this.code = code;
    this.type = type;
    this.messageDetails = messageDetails;
    this.messageDetailsForViewers = messageDetailsForViewers;
    this.stackTrace = stackTrace;
    this.correlationID = correlationID;
    this.showInEditModeOnly = showInEditModeOnly;
    this.showForViewerUsers = showForViewerUsers;
    this.encodeDetails = encodeDetails;
    if (type) {
        if (type.indexOf('QueryMalformedException') !== -1) {
            this.header = String.format(Srch.U.loadResource('cc_err_MalformedHeader'), '<a href=\"javascript:HelpWindowKey(\'WSSEndUser_SearchTips\');\">', '</a>');
            if (Srch.U.w(this.header)) {
                this.header = 'We didn\'t understand your search terms. Make sure they\'re using proper syntax.';
            }
            this.messageDetails = '';
            this.messageDetailsForViewers = '';
        }
        else if (type.indexOf('QueryThrottledException') !== -1) {
            var $v_0 = Srch.U.loadResource('cc_err_QueryThrottledDetailsHeader');
            if (Srch.U.w($v_0)) {
                $v_0 = '<strong>Query Throttled:</strong> Your query was throttled by the search service.  Throttling occurs when search service has high load and cannot execute the query.  If it\'s important that your Web Part not be throttled, you can adjust the priority of the query in the Web Part properties.';
            }
            this.messageDetailsForViewers = '';
            this.messageDetails = $v_0 + '<br /><br />' + SP.Utilities.HttpUtility.htmlEncode(this.messageDetails);
            this.encodeDetails = false;
        }
    }
}
Srch.ControlMessage.getIfControlMessage = function Srch_ControlMessage$getIfControlMessage(obj) {
    var $v_0 = obj;
    if (!Srch.U.n($v_0)) {
        if (!Srch.U.w($v_0.serverTypeId) && $v_0.serverTypeId === '{D3DFEF63-4D44-497D-B936-047135645AD7}') {
            return new Srch.ControlMessage($v_0.header, $v_0.level, $v_0.code, $v_0.type, $v_0.messageDetails, $v_0.messageDetailsForViewers, $v_0.stackTrace, $v_0.correlationID, $v_0.showInEditModeOnly, $v_0.showForViewerUsers, $v_0.encodeDetails);
        }
    }
    return null;
}
Srch.ControlMessage.getFromClientRequestFailedEventArgs = function Srch_ControlMessage$getFromClientRequestFailedEventArgs(e) {
    if (!Srch.U.n(e)) {
        return new Srch.ControlMessage(null, 2, e.get_errorCode(), e.get_errorTypeName(), e.get_message(), '', e.get_stackTrace(), e.get_errorTraceCorrelationId(), false, true, true);
    }
    return null;
}
Srch.ControlMessage.getFromExceptionHandlingScope = function Srch_ControlMessage$getFromExceptionHandlingScope(scope) {
    if (!Srch.U.n(scope)) {
        var $v_0 = Srch.ScriptApplicationManager.get_clientRuntimeContext();
        return new Srch.ControlMessage(null, 2, scope.get_serverErrorCode(), scope.get_serverErrorTypeName(), scope.get_errorMessage(), '', scope.get_serverStackTrace(), $v_0.get_traceCorrelationId(), false, true, true);
    }
    return null;
}
Srch.ControlMessage.getFromException = function Srch_ControlMessage$getFromException(scriptException) {
    if (!Srch.U.n(scriptException)) {
        var $v_0 = Srch.ControlMessage.$4H(scriptException);
        return new Srch.ControlMessage(null, 2, -1, Srch.ControlMessage.$4d, $v_0, '', '', null, false, true, true);
    }
    return null;
}
Srch.ControlMessage.getForStringLoadFailure = function Srch_ControlMessage$getForStringLoadFailure(messageHeader, templateFunc) {
    var $v_0 = Srch.U.createErrorObjectWithExecContext(messageHeader, Srch.ControlMessage.$4t, templateFunc);
    var $v_1 = Srch.ControlMessage.$4H($v_0);
    return new Srch.ControlMessage(null, 2, -1, Srch.ControlMessage.$4T, $v_1, '', '', null, false, true, true);
}
Srch.ControlMessage.$4H = function Srch_ControlMessage$$4H($p0) {
    var $v_0 = '';
    if (!Srch.U.n($p0)) {
        $v_0 = Srch.U.getStringFieldOnObject($p0, 'message');
        try {
            if (Srch.U.w($v_0)) {
                $v_0 = $p0.toString();
            }
            var $v_1 = Srch.U.getFieldOnObject($p0, Srch.U.$3B);
            var $v_2 = Srch.ControlMessage.$5U($v_1);
            var $v_3 = Srch.U.getStringFieldOnObject($v_1, Srch.U.$3C);
            var $v_4 = Srch.U.$B('cc_err_ExecContextExtraInfoFormat', false);
            if (Srch.U.w($v_4)) {
                $v_4 = Srch.ControlMessage.$49;
            }
            if (!Srch.U.w($v_2) || !Srch.U.w($v_3)) {
                $v_0 = String.format($v_4, $v_0, $v_3, $v_2);
            }
        }
        catch ($$e_6) {
        }
    }
    return $v_0;
}
Srch.ControlMessage.$5U = function Srch_ControlMessage$$5U($p0) {
    var $v_0 = Srch.U.getFieldOnObject($p0, Srch.U.$1T);
    var $v_1 = Srch.U.getTemplateUrlFromFunctionOrRenderCtx($v_0);
    var $v_2 = Srch.U.getFieldOnObject($v_0, Srch.U.$1T);
    var $v_3 = Srch.U.getTemplateUrlFromFunctionOrRenderCtx($v_2);
    if (!Srch.U.w($v_3)) {
        if (!Srch.U.w($v_1)) {
            $v_1 += Srch.ControlMessage.$4u;
        }
        $v_1 += $v_3;
    }
    return $v_1;
}
Srch.ControlMessage.prototype = {
    serverTypeId: '{D3DFEF63-4D44-497D-B936-047135645AD7}',
    header: null,
    level: 0,
    code: 0,
    type: null,
    messageDetails: null,
    messageDetailsForViewers: null,
    stackTrace: null,
    correlationID: null,
    showInEditModeOnly: false,
    showForViewerUsers: false,
    encodeDetails: false,
    
    toString: function Srch_ControlMessage$toString() {
        return String.format('\nMessage:{0} \nLevel: {1} \nCode: {2} \nType: {3} \nDetails: {4} \nCorrelation ID: {5} \nStack Trace: {6}', this.header, this.level, this.code, this.type, this.messageDetails, this.correlationID, this.stackTrace);
    }
}


Srch.PagingLink = function Srch_PagingLink(title, imageStyleClass, startItem, pageNumber) {
    this.startItem = -1;
    this.pageNumber = -1;
    this.title = title;
    this.imageStyleClass = imageStyleClass;
    this.startItem = startItem;
    this.pageNumber = pageNumber;
}
Srch.PagingLink.prototype = {
    title: '',
    imageStyleClass: ''
}


Srch.ResultEventArgs = function Srch_ResultEventArgs(result) {
    Srch.ResultEventArgs.initializeBase(this);
    this.result = result;
}
Srch.ResultEventArgs.prototype = {
    result: null,
    searchSkipped: false
}


Srch.BatchResultEventArgs = function Srch_BatchResultEventArgs(results) {
    Srch.BatchResultEventArgs.initializeBase(this);
    this.results = results;
}
Srch.BatchResultEventArgs.prototype = {
    results: null
}


Srch.QueryEventArgs = function Srch_QueryEventArgs(qs) {
    this.batchDataProviders = [];
    Srch.QueryEventArgs.initializeBase(this);
    this.queryState = qs;
}
Srch.QueryEventArgs.prototype = {
    queryState: null,
    result: null,
    userAction: 0,
    queryStateUpdateOption: -1,
    skipSearch: false
}


Srch.NavigationNode = function Srch_NavigationNode(name, url, promptString) {
    this.name = name;
    this.url = url;
    this.promptString = promptString;
}
Srch.NavigationNode.prototype = {
    name: null,
    url: null,
    promptString: null
}


Srch.ClickRecorder = function Srch_ClickRecorder() {
}
Srch.ClickRecorder.recordPageClick = function Srch_ClickRecorder$recordPageClick(clickInformation) {
    Srch.ClickRecorder.$J = clickInformation;
    EnsureScript('sp.search.js', TypeofFullName('Microsoft.SharePoint.Client.Search.Query.SearchExecutor'), Srch.ClickRecorder.$5p);
}
Srch.ClickRecorder.$5p = function Srch_ClickRecorder$$5p() {
    Srch.U.trace(null, 'ClickRecorder.RecordPageClick', '*****Connecting to server*****');
    var $v_0 = Srch.ScriptApplicationManager.get_clientRuntimeContext();
    var $v_1 = Srch.ClickRecorder.$J['piPageImpression'];
    if (Srch.U.e($v_1)) {
        return;
    }
    var $v_2 = Srch.ClickRecorder.$J['piClickType'];
    if (Srch.U.e($v_2)) {
        return;
    }
    var $v_3 = Srch.ClickRecorder.$J['piPageImpressionBlockType'];
    var $v_4 = '';
    var $v_5 = '';
    var $v_6 = '';
    var $v_7 = '';
    var $v_8 = '';
    var $v_9 = 0;
    var $v_A = Srch.ClickRecorder.$J['piSearchResult'];
    if (!Srch.U.n($v_A)) {
        $v_4 = $v_A['piSearchResultId'];
        if (!Srch.U.e($v_4)) {
            var $v_C = $v_4.split('_');
            var $v_D = $v_C.length;
            if (($v_D >= 2) && ($v_C[1] === '1')) {
                $v_6 = Srch.ClickRecorder.$J['piUserQuery'];
                $v_5 = Srch.ClickRecorder.$J['SourceId'];
                $v_7 = $v_A['Title'];
                $v_8 = $v_A['Path'];
                if (Srch.U.e($v_8)) {
                    $v_8 = $v_A['Url'];
                }
                var $v_E = Srch.ClickRecorder.$J['piSearchSubResultIndex'];
                if (!Srch.U.n($v_E)) {
                    $v_9 = $v_E;
                }
            }
        }
    }
    var $v_B = Microsoft.SharePoint.Client.Search.Query.SearchExecutor.newObject($v_0);
    $v_B.recordPageClick($v_1, $v_2, $v_3, $v_4, $v_9, $v_5, $v_6, $v_7, $v_8);
    $v_0.executeQueryAsync(function($p1_0, $p1_1) {
        Srch.U.trace(null, 'RecordPageClick', 'Success');
    }, function($p1_0, $p1_1) {
        Srch.U.trace(null, 'RecordPageClick', 'failure');
        if (!Srch.U.n($p1_1)) {
            var $v_F = Srch.ControlMessage.getFromClientRequestFailedEventArgs($p1_1);
            if ($v_F) {
                Srch.U.traceFormatted(null, 'RecordPageClick', 'Failed to record click for {0}, click type {1}, result {2}. Error: {3}.', $v_1, $v_2, $v_4, $v_F.toString());
            }
        }
    });
}


Srch.RefinementUtil = function Srch_RefinementUtil() {
}
Srch.RefinementUtil.peoplePickerApplyIdPrefix = function Srch_RefinementUtil$peoplePickerApplyIdPrefix(ctrl) {
    return ctrl.containerId + '_' + ctrl.propertyName;
}
Srch.RefinementUtil.peoplePickerPrep = function Srch_RefinementUtil$peoplePickerPrep(pickerId, ctrl, cliCtrl) {
    pickerId += '_TopSpan';
    Srch.RefinementUtil.searchRefinementControls[pickerId] = ctrl;
    Srch.RefinementUtil.searchRefinementClientControls[ctrl.propertyName] = cliCtrl;
}
Srch.RefinementUtil.refineByAuthor = function Srch_RefinementUtil$refineByAuthor(pickerId, filterToken) {
    var $v_0 = Srch.RefinementUtil.searchRefinementControls[pickerId];
    if (Srch.U.n($v_0) || !$v_0.propertyName) {
        return;
    }
    var $v_1 = Srch.RefinementUtil.searchRefinementClientControls[$v_0.propertyName];
    if (Srch.U.n($v_1)) {
        return;
    }
    $v_1.addRefinementFilter($v_0.propertyName, Srch.RefinementUtil.stringValueToEqualsToken(filterToken));
}
Srch.RefinementUtil.authorRefinerResolved = function Srch_RefinementUtil$authorRefinerResolved(controlID, pickerValue) {
    if (Srch.U.n(pickerValue) || pickerValue.length <= 0) {
        return;
    }
    var $v_0 = pickerValue[0];
    var $v_1 = $v_0.DisplayText;
    if (Srch.U.n($v_0) || !$v_0.IsResolved || Srch.U.w($v_1)) {
        return;
    }
    Srch.RefinementUtil.refineByAuthor(controlID, $v_1);
}
Srch.RefinementUtil.escapeTokenStringValue = function Srch_RefinementUtil$escapeTokenStringValue(tokenValue) {
    var $v_0 = tokenValue;
    if (!Srch.U.n($v_0)) {
        var $v_1 = new RegExp('\"', 'g');
        var $v_2 = new RegExp('\\\\', 'g');
        $v_0 = $v_0.replace($v_2, '\\\\');
        $v_0 = $v_0.replace($v_1, '\\\"');
    }
    return $v_0;
}
Srch.RefinementUtil.stringValueToToken = function Srch_RefinementUtil$stringValueToToken(tokenOperator, tokenValue) {
    return String.format('{0}(\"{1}\")', tokenOperator, Srch.RefinementUtil.escapeTokenStringValue(tokenValue));
}
Srch.RefinementUtil.stringValueToEqualsToken = function Srch_RefinementUtil$stringValueToEqualsToken(tokenValue) {
    return Srch.RefinementUtil.stringValueToToken('equals', tokenValue);
}


Srch.ValueInfo = function Srch_ValueInfo(originalInputValue, managedProperty, isAllDayEvent) {
    this.inputValue = originalInputValue;
    this.value = originalInputValue;
    this.managedPropertyName = managedProperty;
    this.isNull = Srch.U.n(originalInputValue);
    this.isEmpty = this.isNull || Srch.U.w(originalInputValue.toString());
    this.isAllDayEvent = isAllDayEvent;
    this.$62_0();
}
Srch.ValueInfo.$$cctor = function Srch_ValueInfo$$$cctor() {
    Srch.ValueInfo.$3Z = new RegExp('\\\\', 'g');
}
Srch.ValueInfo.$d = function Srch_ValueInfo$$d($p0) {
    var $v_0 = '';
    if (!Srch.U.w($p0)) {
        if ($p0.toUpperCase().startsWith('OWSTAXID')) {
            $v_0 = 'OWSTAXID';
        }
        else if ($p0.length > 7 && 'OWS' === $p0.substr($p0.length - 7, 3).toUpperCase()) {
            $v_0 = $p0.substr($p0.length - 7, 7).toUpperCase();
        }
    }
    return $v_0;
}
Srch.ValueInfo.isKnownEntityPropertyName = function Srch_ValueInfo$isKnownEntityPropertyName(managedProperty) {
    if (Srch.U.e(managedProperty)) {
        return false;
    }
    else {
        var $v_0 = Srch.ValueInfo.ValueTypeHandler.$13(managedProperty, null, 'baseHandlerId');
        var $v_1 = Srch.ValueInfo.$d(managedProperty);
        return ($v_0 === 'ManagedMetadata' || 'OWSTAXID' === $v_1 || $v_0 === 'LinkHrefUrl' || 'OWSURLH' === $v_1 || $v_0 === 'User' || 'OWSUSER' === $v_1);
    }
}
Srch.ValueInfo.isHtmlPropertyName = function Srch_ValueInfo$isHtmlPropertyName(managedProperty) {
    if (!Srch.U.w(managedProperty)) {
        var $v_0 = Srch.ValueInfo.ValueTypeHandler.$13(managedProperty, null, 'baseHandlerId');
        var $v_1 = Srch.ValueInfo.$d(managedProperty);
        return ($v_0 === 'RichHtml' || 'OWSHTML' === $v_1);
    }
    return false;
}
Srch.ValueInfo.isAutoCreatedPropertyName = function Srch_ValueInfo$isAutoCreatedPropertyName(managedPropertyName) {
    if (Srch.U.w(managedPropertyName)) {
        return false;
    }
    if (managedPropertyName.startsWith('owstaxId')) {
        return true;
    }
    else if (managedPropertyName.length > 7) {
        var $v_0 = managedPropertyName.length - 7;
        var $v_1 = managedPropertyName.length - 4;
        return managedPropertyName.substring($v_0, $v_1).toUpperCase() === 'OWS';
    }
    return false;
}
Srch.ValueInfo.isUserProperty = function Srch_ValueInfo$isUserProperty(managedProperty) {
    if (!Srch.U.w(managedProperty)) {
        var $v_0 = Srch.ValueInfo.ValueTypeHandler.$13(managedProperty, null, 'baseHandlerId');
        var $v_1 = Srch.ValueInfo.$d(managedProperty);
        return ($v_0 === 'User' || 'OWSUSER' === $v_1);
    }
    return false;
}
Srch.ValueInfo.isManagedMetadataProperty = function Srch_ValueInfo$isManagedMetadataProperty(managedProperty) {
    if (!Srch.U.w(managedProperty)) {
        var $v_0 = Srch.ValueInfo.ValueTypeHandler.$13(managedProperty, null, 'baseHandlerId');
        var $v_1 = Srch.ValueInfo.$d(managedProperty);
        return ($v_0 === 'ManagedMetadata' || 'OWSTAXID' === $v_1);
    }
    return false;
}
Srch.ValueInfo.getIntervalLabelsDictionary = function Srch_ValueInfo$getIntervalLabelsDictionary(managedPropertyName, searchType) {
    var $v_0 = Srch.ValueInfo.ValueTypeHandler.$13(managedPropertyName, searchType, 'intervalLabels');
    if (Srch.U.n($v_0)) {
        $v_0 = Srch.ValueInfo.ValueTypeHandler.get_$3D();
    }
    var $v_1 = {};
    var $$dict_4 = $v_0;
    for (var $$key_5 in $$dict_4) {
        var $v_3 = { key: $$key_5, value: $$dict_4[$$key_5] };
        $v_1[$v_3.key] = Srch.U.loadResource($v_3.value);
    }
    var $v_2 = false;
    for (var $v_4 = 0; $v_4 < Srch.ValueInfo.$3P.length; $v_4++) {
        var $v_5 = Srch.ValueInfo.$3P[$v_4];
        var $v_6 = String.format('rf_IntervalLabels{0}_{1}', managedPropertyName, $v_5);
        var $v_7 = Srch.U.$B($v_6, false);
        if (!Srch.U.w($v_7)) {
            $v_2 = true;
            $v_1[$v_5] = $v_7;
        }
    }
    return $v_1;
}
Srch.ValueInfo.$5O = function Srch_ValueInfo$$5O($p0, $p1, $p2, $p3, $p4) {
    var $v_0 = '';
    $p4.val = '';
    if (Srch.U.n($p0) && Srch.U.n($p1)) {
        return '';
    }
    var $v_1 = (Srch.U.n($p0.inputValue)) ? '' : $p0.inputValue;
    var $v_2 = (Srch.U.n($p1.inputValue)) ? '' : $p1.inputValue;
    var $v_3 = $v_1.startsWith('min');
    var $v_4 = $v_2.startsWith('max');
    if ($v_3 && $v_4) {
        $p4.val = Srch.U.$B('rf_RangeBoundariesAnyValue', false);
    }
    else if ($v_3) {
        $p4.val = $p3['min'];
        $p0 = $p1;
    }
    else if ($v_4) {
        $p4.val = $p3['max'];
    }
    else {
        $p4.val = $p3['range'];
    }
    if (!Srch.U.w($p4.val)) {
        $v_0 = String.format($p4.val, $p0.toString(), $p1.toString());
    }
    return $v_0;
}
Srch.ValueInfo.getValueOrValuesArray = function Srch_ValueInfo$getValueOrValuesArray(inputValue, managedProperty, isAllDayEvent) {
    if (Srch.U.isArray(inputValue) || Srch.ValueInfo.isKnownEntityPropertyName(managedProperty)) {
        var $v_0 = inputValue;
        var $v_1 = inputValue;
        if (!Srch.U.n(inputValue) && !Srch.U.isArray(inputValue) && !Srch.U.w($v_0)) {
            if ('owsmetadatafacetinfo' === managedProperty) {
                $v_1 = $v_0.split(';#');
            }
            else {
                if ('owstaxidmetadataalltagsinfo' === managedProperty || 'Tags' === managedProperty || (!Srch.U.w(managedProperty) && managedProperty.startsWith('owstaxId'))) {
                    $v_1 = $v_0.split(';');
                    if (Srch.U.isArray($v_1) && ($v_1).length === 1) {
                        $v_1 = inputValue;
                    }
                }
            }
        }
        var $v_2 = new Srch.ValueInfo(inputValue, '', isAllDayEvent);
        $v_2.managedPropertyName = managedProperty;
        $v_2.isEntity = false;
        $v_2.entityLabel = '';
        $v_2.entityType = '';
        $v_2.isValuesArray = true;
        var $v_3 = Srch.ValueInfo.getValuesCollection($v_1, managedProperty, isAllDayEvent);
        $v_2.value = $v_3;
        $v_2.isEmpty = (0 === $v_3.length);
        return $v_2;
    }
    else {
        return new Srch.ValueInfo(inputValue, managedProperty, isAllDayEvent);
    }
}
Srch.ValueInfo.getValuesCollection = function Srch_ValueInfo$getValuesCollection(inputMultiValueEntityStrings, managedProperty, isAllDayEvent) {
    var $v_0 = [];
    if (Srch.U.n(inputMultiValueEntityStrings) || Srch.U.w(inputMultiValueEntityStrings.toString())) {
        return $v_0;
    }
    var $v_1 = inputMultiValueEntityStrings;
    if (!Srch.U.isArray(inputMultiValueEntityStrings)) {
        $v_1 = inputMultiValueEntityStrings.toString().split('   ');
    }
    for (var $$arr_5 = $v_1, $$len_6 = $$arr_5.length, $$idx_7 = 0; $$idx_7 < $$len_6; ++$$idx_7) {
        var $v_2 = $$arr_5[$$idx_7];
        if (Srch.U.w($v_2)) {
            continue;
        }
        var $v_3 = new Srch.ValueInfo($v_2.trim(), managedProperty, isAllDayEvent);
        Srch.U.appendArray($v_0, $v_3);
    }
    return $v_0;
}
Srch.ValueInfo.getCachedCtxItemValue = function Srch_ValueInfo$getCachedCtxItemValue(ctx, nameToLookup) {
    var $v_0 = null;
    if (!Srch.U.n(ctx)) {
        var $v_1 = Srch.U.getOrCreateFieldOnObject(ctx, 'ItemValues', {});
        $v_0 = $v_1[nameToLookup + '.ValueObject'];
        if (Srch.U.n($v_0)) {
            $v_0 = Srch.ValueInfo.getCtxItemValue(ctx, nameToLookup);
            $v_1[nameToLookup + '.ValueObject'] = $v_0;
            $v_1[$v_0.managedPropertyName + '.ValueObject'] = $v_0;
        }
    }
    if (Srch.U.n($v_0)) {
        $v_0 = Srch.ValueInfo.getCtxItemValue(ctx, nameToLookup);
    }
    return $v_0;
}
Srch.ValueInfo.getCtxItemValue = function Srch_ValueInfo$getCtxItemValue(ctx, nameToLookup) {
    if (Srch.U.n(ctx) || Srch.U.w(nameToLookup)) {
        return new Srch.ValueInfo(null, nameToLookup, false);
    }
    var $v_0 = null;
    var $v_1 = null;
    var $v_2 = ctx['DisplayTemplateData'];
    if (!Srch.U.n($v_2) && !Srch.U.n($v_2['ManagedPropertyMapping'])) {
        $v_0 = ($v_2['ManagedPropertyMapping']);
    }
    var $v_3 = ctx['ClientControl'];
    if (!Srch.U.n($v_3)) {
        if (!Srch.U.n($v_3.get_propertyMappings)) {
            var $v_4 = $v_3.get_propertyMappings();
            if (!Srch.U.n($v_4) && !Srch.U.w($v_4)) {
                $v_0 = Srch.Result.parsePropertyMappingsString($v_4);
            }
        }
    }
    if (!Srch.U.n($v_0)) {
        var $v_5 = $v_0[nameToLookup];
        if (!Srch.U.n($v_5) && Srch.U.isArray($v_5)) {
            $v_1 = $v_5;
        }
    }
    return Srch.ValueInfo.getCtxItemValueWithMappings(ctx, nameToLookup, $v_1);
}
Srch.ValueInfo.getCtxItemValueWithMappings = function Srch_ValueInfo$getCtxItemValueWithMappings(ctx, nameToLookup, activeMappedProps) {
    var $v_0 = null;
    var $v_1 = nameToLookup;
    var $v_2 = ctx['CurrentItem'];
    if (Srch.U.n($v_2)) {
        return $v_0;
    }
    var $v_3 = false;
    if ((('IsAllDayEvent') in $v_2)) {
        $v_3 = $v_2['IsAllDayEvent'];
    }
    if (!Srch.U.n(activeMappedProps)) {
        for (var $$arr_7 = activeMappedProps, $$len_8 = $$arr_7.length, $$idx_9 = 0; $$idx_9 < $$len_8; ++$$idx_9) {
            var $v_4 = $$arr_7[$$idx_9];
            $v_1 = $v_4;
            if ((($v_4) in $v_2)) {
                if (!Srch.U.n($v_2[$v_4])) {
                    $v_0 = Srch.ValueInfo.getValueOrValuesArray($v_2[$v_4], $v_4, $v_3);
                    break;
                }
            }
            else {
                var $v_5 = false;
                var $$dict_C = $v_2;
                for (var $$key_D in $$dict_C) {
                    var $v_6 = { key: $$key_D, value: $$dict_C[$$key_D] };
                    if ($v_6.key.toLowerCase() === $v_4.toLowerCase()) {
                        if (!Srch.U.n($v_6.value)) {
                            $v_0 = Srch.ValueInfo.getValueOrValuesArray($v_6.value, $v_6.key, $v_3);
                            $v_5 = true;
                            break;
                        }
                    }
                }
                if ($v_5) {
                    break;
                }
            }
        }
    }
    else {
        activeMappedProps = [];
        $v_0 = Srch.ValueInfo.getValueOrValuesArray($v_2[nameToLookup], nameToLookup, $v_3);
    }
    if (Srch.U.n($v_0)) {
        $v_0 = new Srch.ValueInfo(null, $v_1, false);
    }
    $v_0.propertyMappings = activeMappedProps;
    $v_0.propertyLookupName = nameToLookup;
    return $v_0;
}
Srch.ValueInfo.overrideRenderingForProperty = function Srch_ValueInfo$overrideRenderingForProperty(propertyNameToOverride, propertyNameForBaseRendering) {
    var $v_0 = propertyNameToOverride + '_OverrideMatchRendering_' + propertyNameForBaseRendering;
    Srch.ValueInfo.ValueTypeHandler.$3b($v_0, propertyNameToOverride, propertyNameForBaseRendering);
}
Srch.ValueInfo.overrideRefinementTemplateForProperty = function Srch_ValueInfo$overrideRefinementTemplateForProperty(propertyNameToOverride, propertyNameForBaseRendering, overrideRenderTemplateId) {
    var $v_0 = propertyNameToOverride + '_OverrideMatchRendering_' + propertyNameForBaseRendering + '_OverrideMatchRendering_';
    var $v_1 = Srch.ValueInfo.ValueTypeHandler.$3b($v_0, propertyNameToOverride, propertyNameForBaseRendering);
    $v_1.refinementOverrideTemplateId = overrideRenderTemplateId;
}
Srch.ValueInfo.prototype = {
    inputValue: null,
    value: null,
    managedPropertyName: '',
    isEntity: false,
    entityLabel: '',
    entityId: '',
    entityType: '',
    propertyLookupName: '',
    propertyMappings: null,
    isValuesArray: false,
    isNull: true,
    isEmpty: true,
    isAllDayEvent: false,
    $1Y_0: null,
    defaultValueRenderer: null,
    $2N_0: null,
    
    $62_0: function Srch_ValueInfo$$62_0() {
        if (Srch.U.isArray(this.inputValue)) {
            return;
        }
        try {
            var $v_0 = Srch.ValueInfo.ValueTypeHandler.$2V(this.managedPropertyName, null);
            var $v_1 = Srch.U.getFieldOnObject($v_0, 'valueParser');
            this.defaultValueRenderer = Srch.U.getFieldOnObject($v_0, 'valueRenderer');
            if (Srch.U.n(this.defaultValueRenderer)) {
                this.defaultValueRenderer = Srch.ValueInfo.Renderers.defaultRenderedValueHtmlEncoded;
            }
            if (!Srch.U.n($v_1)) {
                $v_1(this);
                if (this.inputValue !== this.value) {
                    Srch.U.traceFormatted(null, 'tryParseValue', 'Value parser converted value for Prop[{0}]: InputValue[{1}]:ParsedValue[{2}]', this.managedPropertyName, this.inputValue, this.value);
                }
                else if (!this.isEntity) {
                    Srch.U.traceFormatted(null, 'tryParseValue', 'Value parser did not change value for Prop[{0}]: InputValue[{1}]', this.managedPropertyName, this.inputValue);
                }
                if (this.isEntity) {
                    Srch.U.traceFormatted(null, 'tryParseValue', 'Value parser extracted entity values for Prop[{0}]: InputValue[{1}]:Label[{2}]:Id[{3}]:Type[{4}]', this.managedPropertyName, this.inputValue, this.entityLabel, this.entityId, this.entityType);
                }
            }
        }
        catch ($v_2) {
            Srch.U.traceFormatted(null, 'tryParseValue', 'Error executing value parser for Prop[{0}]:InputValue[{1}]: {2}', this.managedPropertyName, this.inputValue, $v_2.toString());
        }
    },
    
    getRenderedValue: function Srch_ValueInfo$getRenderedValue() {
        this.$11_0 = true;
        var $v_0 = '';
        var $v_1 = Srch.ValueInfo.Renderers.defaultRenderedValueHtmlEncoded;
        if (!Srch.U.n(this.defaultValueRenderer)) {
            $v_1 = this.defaultValueRenderer;
        }
        if (!Srch.U.n(this.$1Y_0)) {
            $v_1 = this.$1Y_0;
        }
        var $v_2 = ((!Srch.U.n(this.$1Y_0)) ? 'OverrideValueRenderer' : (!Srch.U.n(this.defaultValueRenderer)) ? 'Default renderer for type' : 'Core DefaultRenderedValueHtmlEncoded');
        Srch.U.traceFormatted(null, 'ValueInfo.GetRenderedValue', 'Rendering value for property[{0}] using renderer [{1}]', this.managedPropertyName, $v_2);
        $v_0 = $v_1(this);
        this.$11_0 = false;
        return $v_0;
    },
    
    getFilterToken: function Srch_ValueInfo$getFilterToken() {
        if (!Srch.U.n(this.$2N_0)) {
            this.$11_0 = true;
            var $v_0 = this.$2N_0(this);
            this.$11_0 = false;
            return $v_0;
        }
        else {
            return Srch.ValueInfo.Renderers.defaultFilterToken(this);
        }
    },
    
    $11_0: false,
    
    toString: function Srch_ValueInfo$toString() {
        if (this.$11_0) {
            return (Srch.U.n(this.value)) ? '' : this.value.toString();
        }
        else {
            return this.getRenderedValue();
        }
    },
    
    overrideValueRenderer: function Srch_ValueInfo$overrideValueRenderer(overrideRenderingFunction) {
        this.$1Y_0 = overrideRenderingFunction;
    },
    
    overrideFilterTokenGenerator: function Srch_ValueInfo$overrideFilterTokenGenerator(overrideRenderingFunction) {
        this.$2N_0 = overrideRenderingFunction;
    }
}


Srch.ValueInfo.Parsers = function Srch_ValueInfo_Parsers() {
}
Srch.ValueInfo.Parsers.$60 = function Srch_ValueInfo_Parsers$$60($p0) {
    if (Srch.U.n($p0) || Srch.U.n($p0.inputValue) || Srch.U.w($p0.inputValue.toString())) {
        return;
    }
    if ($p0.managedPropertyName === 'owsmetadatafacetinfo' || $p0.managedPropertyName === 'ows_MetadataFacetInfo') {
        var $v_0 = $p0.inputValue.toString().split('|');
        if ($v_0.length >= 2) {
            $p0.isEntity = true;
            $p0.entityId = $v_0[$v_0.length - 2];
            $p0.entityLabel = $v_0[$v_0.length - 1];
            $p0.entityType = 'owsmetadatafacetinfo';
        }
    }
    else {
        var $v_1 = $p0.inputValue.toString().split('|');
        if ($v_1.length >= 2) {
            $p0.isEntity = true;
            $p0.entityLabel = $v_1[$v_1.length - 1];
            $p0.entityId = $p0.inputValue.toString();
            $p0.entityId = $p0.entityId.replace(Srch.ValueInfo.$3Z, '\\\\');
            $p0.entityType = $v_1[0];
        }
    }
}
Srch.ValueInfo.Parsers.$64 = function Srch_ValueInfo_Parsers$$64($p0) {
    if (Srch.U.n($p0) || Srch.U.n($p0.inputValue) || Srch.U.w($p0.inputValue.toString())) {
        return;
    }
    var $v_0 = Srch.ValueInfo.Renderers.parseUserFieldValue($p0.inputValue.toString());
    if (!Srch.U.w($v_0)) {
        $p0.isEntity = true;
        $p0.entityLabel = $v_0;
        $p0.entityId = $v_0;
        $p0.entityType = 'People';
    }
}
Srch.ValueInfo.Parsers.$5h = function Srch_ValueInfo_Parsers$$5h($p0) {
    if (Srch.U.n($p0) || Srch.U.n($p0.inputValue) || (Number.isInstanceOfType($p0.inputValue)) || Srch.U.w($p0.inputValue.toString())) {
        return;
    }
    var $v_0 = parseFloat($p0.inputValue.toString());
    if (!Srch.U.n($v_0) && !isNaN($v_0)) {
        $p0.value = $v_0;
    }
}
Srch.ValueInfo.Parsers.$5i = function Srch_ValueInfo_Parsers$$5i($p0) {
    if (Srch.U.n($p0) || Srch.U.n($p0.inputValue) || (Number.isInstanceOfType($p0.inputValue)) || Srch.U.w($p0.inputValue.toString())) {
        return;
    }
    var $v_0 = parseInt($p0.inputValue.toString());
    if (!Srch.U.n($v_0) && !isNaN($v_0)) {
        $p0.value = $v_0;
    }
}
Srch.ValueInfo.Parsers.$2Q = function Srch_ValueInfo_Parsers$$2Q($p0) {
    if (Srch.U.n($p0) || Srch.U.n($p0.inputValue) || (Date.isInstanceOfType($p0.inputValue)) || Srch.U.w($p0.inputValue.toString())) {
        return;
    }
    var $v_0 = $p0.inputValue.toString();
    var $v_1 = Date.parseInvariant($v_0);
    if (Srch.U.n($v_1)) {
        var $v_2 = new RegExp('(:[0-9][0-9])\\.?[0-9]*Z', 'g');
        if (!OffSwitch.IsActive(Srch.ValueInfo.$3t)) {
            $v_0 = $v_0.replace($v_2, '$1Z');
            $v_1 = new Date($v_0);
            $v_0 = $v_0.replace('T', ' ');
            if (Srch.U.n($v_1) || (Date.isInstanceOfType($v_1) && isNaN($v_1.getTime()))) {
                $v_1 = Date.parseInvariant($v_0);
            }
        }
        else {
            $v_0 = $v_0.replace($v_2, '$1Z').replace('T', ' ');
            $v_1 = Date.parseInvariant($v_0);
        }
        if (Srch.U.n($v_1)) {
            var $v_3 = $v_0.indexOf(';');
            if ($v_3 > 0) {
                $v_0 = $v_0.substr(0, $v_3);
                $v_1 = new Date($v_0);
            }
        }
    }
    if (!Srch.U.n($v_1)) {
        $p0.value = $v_1;
    }
}
Srch.ValueInfo.Parsers.$55 = function Srch_ValueInfo_Parsers$$55($p0) {
    if (Srch.U.n($p0) || Srch.U.n($p0.inputValue) || (Boolean.isInstanceOfType($p0.inputValue)) || Srch.U.w($p0.inputValue.toString())) {
        return;
    }
    $p0.value = ('Yes' === $p0.inputValue || '1' === $p0.inputValue || 'true' === $p0.inputValue);
}
Srch.ValueInfo.Parsers.$63 = function Srch_ValueInfo_Parsers$$63($p0) {
    if (Srch.U.n($p0) || Srch.U.n($p0.inputValue) || (Boolean.isInstanceOfType($p0.inputValue)) || Srch.U.w($p0.inputValue.toString())) {
        return;
    }
    if (Srch.ValueInfo.$d($p0.managedPropertyName) === 'OWSURLH') {
        var $v_0 = ', ';
        var $v_1 = ',,';
        var $v_2 = $p0.inputValue.toString();
        var $v_3 = $v_2.indexOf($v_0);
        if ($v_3 > -1 && $v_3 < $v_2.length) {
            $p0.entityId = $v_2.substr(0, $v_3).replace($v_1, ',');
            $p0.entityLabel = $v_2.substr($v_3 + $v_0.length).replace($v_1, ',');
            $p0.value = $p0.entityId;
            $p0.value = $p0.entityId;
        }
    }
}


Srch.ValueInfo.Renderers = function Srch_ValueInfo_Renderers() {
}
Srch.ValueInfo.Renderers.defaultRenderedValueHtmlEncoded = function Srch_ValueInfo_Renderers$defaultRenderedValueHtmlEncoded(valueObject) {
    return SP.Utilities.HttpUtility.htmlEncode(Srch.ValueInfo.Renderers.defaultRenderedValueNoHtmlEncoding(valueObject));
}
Srch.ValueInfo.Renderers.defaultRenderedValueNoHtmlEncoding = function Srch_ValueInfo_Renderers$defaultRenderedValueNoHtmlEncoding(valueObject) {
    if (Srch.U.n(valueObject) || valueObject.isEmpty) {
        return '';
    }
    else if (valueObject.isValuesArray && Srch.U.isArray(valueObject.value) && !Srch.U.w(valueObject.managedPropertyName) && valueObject.managedPropertyName.startsWith('owstaxId')) {
        var $v_0 = valueObject.value;
        var $v_1 = [];
        for (var $$arr_3 = $v_0, $$len_4 = $$arr_3.length, $$idx_5 = 0; $$idx_5 < $$len_4; ++$$idx_5) {
            var $v_2 = $$arr_3[$$idx_5];
            if (!Srch.U.w($v_2.entityLabel) && !Srch.U.w($v_2.entityType) && !$v_2.entityType.startsWith('G')) {
                Srch.U.appendArray($v_1, $v_2);
            }
        }
        return $v_1.toString();
    }
    else {
        return (valueObject.isEntity && !Srch.U.w(valueObject.entityLabel)) ? valueObject.entityLabel : valueObject.value.toString();
    }
}
Srch.ValueInfo.Renderers.defaultFilterToken = function Srch_ValueInfo_Renderers$defaultFilterToken(valueObject) {
    if (Srch.U.n(valueObject) || valueObject.isEmpty) {
        return '';
    }
    if (valueObject.isEntity && !Srch.U.e(valueObject.entityId)) {
        return 'string(\"' + valueObject.entityId + '\")';
    }
    else if (valueObject.isValuesArray && Srch.U.isArray(valueObject.value)) {
        var $v_0 = valueObject.value;
        var $v_1 = [];
        for (var $$arr_3 = $v_0, $$len_4 = $$arr_3.length, $$idx_5 = 0; $$idx_5 < $$len_4; ++$$idx_5) {
            var $v_2 = $$arr_3[$$idx_5];
            var $v_3 = $v_2.getFilterToken();
            if (!Srch.U.w($v_3)) {
                Srch.U.appendArray($v_1, $v_3);
            }
        }
        return (!$v_1.length) ? '' : 'or(' + $v_1.join(', ') + ')';
    }
    else {
        return 'equals(\"' + valueObject.inputValue.toString() + '\")';
    }
}
Srch.ValueInfo.Renderers.numberFriendlyRendering = function Srch_ValueInfo_Renderers$numberFriendlyRendering(valueObject) {
    if (!Srch.U.n(valueObject) && !valueObject.isEmpty && (Number.isInstanceOfType(valueObject.value))) {
        return Srch.U.toFriendlyNumber(Math.floor(valueObject.value));
    }
    else {
        return Srch.ValueInfo.Renderers.defaultRenderedValueHtmlEncoded(valueObject);
    }
}
Srch.ValueInfo.Renderers.numberFileSizeRendering = function Srch_ValueInfo_Renderers$numberFileSizeRendering(valueObject) {
    if (!Srch.U.n(valueObject) && !valueObject.isEmpty && (Number.isInstanceOfType(valueObject.value))) {
        return SP.Utilities.HttpUtility.htmlEncode(Srch.U.toFileSizeDisplay(Math.floor(valueObject.value), true));
    }
    else {
        return Srch.ValueInfo.Renderers.defaultRenderedValueHtmlEncoded(valueObject);
    }
}
Srch.ValueInfo.Renderers.numberFormattedTimeFromSeconds = function Srch_ValueInfo_Renderers$numberFormattedTimeFromSeconds(valueObject) {
    var $v_0 = Srch.ValueInfo.Renderers.defaultRenderedValueNoHtmlEncoding(valueObject);
    return SP.Utilities.HttpUtility.htmlEncode(Srch.U.getFormattedTimeFromSeconds($v_0));
}
Srch.ValueInfo.Renderers.textTruncateEnd = function Srch_ValueInfo_Renderers$textTruncateEnd(valueObject, maxChars) {
    if (Srch.U.n(maxChars)) {
        maxChars = Srch.U.titleTruncationLength;
    }
    var $v_0 = Srch.ValueInfo.Renderers.defaultRenderedValueNoHtmlEncoding(valueObject);
    return SP.Utilities.HttpUtility.htmlEncode(Srch.U.truncateEnd($v_0, maxChars));
}
Srch.ValueInfo.Renderers.contentLineText = function Srch_ValueInfo_Renderers$contentLineText(valueObject, maxChars) {
    if (Srch.U.n(maxChars)) {
        maxChars = 90;
    }
    var $v_0 = (valueObject.defaultValueRenderer) ? valueObject.defaultValueRenderer(valueObject) : Srch.ValueInfo.Renderers.defaultRenderedValueHtmlEncoded(valueObject);
    var $v_1 = !Srch.U.w($v_0) && $v_0.length > maxChars && !Srch.ValueInfo.isHtmlPropertyName(valueObject.managedPropertyName) && (Sys.Browser.agent === Sys.Browser.InternetExplorer && Sys.Browser.version <= 8);
    return ($v_1) ? Srch.ValueInfo.Renderers.textTruncateEnd(valueObject, maxChars) : $v_0;
}
Srch.ValueInfo.Renderers.textTruncateUrl = function Srch_ValueInfo_Renderers$textTruncateUrl(valueObject, maxChars) {
    if (Srch.U.n(maxChars)) {
        maxChars = Srch.U.pathTruncationLength;
    }
    var $v_0 = Srch.ValueInfo.Renderers.defaultRenderedValueNoHtmlEncoding(valueObject);
    return SP.Utilities.HttpUtility.htmlEncode(Srch.U.truncateUrl($v_0, maxChars));
}
Srch.ValueInfo.Renderers.parseUserFieldValue = function Srch_ValueInfo_Renderers$parseUserFieldValue(managedPropertyValue) {
    var $v_0 = ' | ';
    if (!Srch.U.w(managedPropertyValue)) {
        var $v_1 = '';
        var $v_2 = managedPropertyValue.split(';');
        for (var $$arr_4 = $v_2, $$len_5 = $$arr_4.length, $$idx_6 = 0; $$idx_6 < $$len_5; ++$$idx_6) {
            var $v_3 = $$arr_4[$$idx_6];
            var $v_4 = (' ' + $v_3 + ' ').split($v_0);
            if ($v_4.length % 3) {
                $v_1 += $v_3;
                continue;
            }
            for (var $v_5 = 0; $v_5 < $v_4.length / 3; $v_5++) {
                if ($v_1.length > 0) {
                    $v_1 += ',';
                }
                $v_1 += $v_4[$v_5 * 3 + 1].trim();
            }
        }
        return $v_1;
    }
    return managedPropertyValue;
}
Srch.ValueInfo.Renderers.imageSourceRendering = function Srch_ValueInfo_Renderers$imageSourceRendering(valueObject) {
    var $v_0 = '';
    if (!Srch.U.n(valueObject) && (Srch.ValueInfo.isInstanceOfType(valueObject)) && !valueObject.isNull && !valueObject.isEmpty) {
        var $v_1 = valueObject.value.toString().toUpperCase().indexOf('<IMG');
        if ($v_1 !== -1) {
            if ((valueObject.value.toString().indexOf('_eat_') !== -1) && (valueObject.value.toString().indexOf('_oat_') !== -1)) {
                var $v_2 = valueObject.value.toString().match(new RegExp('<IMG [^\\>]*SRC\\s*=\\s*([\"\'])(.*?)\\1', 'i'));
                if (Srch.U.isArray($v_2) && $v_2.length > 2) {
                    $v_0 = $v_2[2];
                }
            }
            else {
                var $v_3 = valueObject.value.toString().toUpperCase().match(new RegExp('<IMG [^\\>]*SRC\\s*=\\s*([\"\'])(.*?)\\1'));
                if (Srch.U.isArray($v_3) && $v_3.length > 2) {
                    $v_0 = $v_3[2];
                }
            }
        }
        else {
            $v_0 = SP.Utilities.HttpUtility.htmlEncode(Srch.U.ensureAllowedProtocol(Srch.ValueInfo.Renderers.defaultRenderedValueNoHtmlEncoding(valueObject)));
        }
    }
    return $v_0;
}
Srch.ValueInfo.Renderers.defaultNumberRenderer = function Srch_ValueInfo_Renderers$defaultNumberRenderer(valueObject) {
    if (!Srch.U.n(valueObject) && !valueObject.isEmpty && (Number.isInstanceOfType(valueObject.value))) {
        return SP.Utilities.HttpUtility.htmlEncode(Srch.U.toFormattedNumber(valueObject.value, 2));
    }
    else {
        return Srch.ValueInfo.Renderers.defaultRenderedValueHtmlEncoded(valueObject);
    }
}
Srch.ValueInfo.Renderers.defaultDateRenderer = function Srch_ValueInfo_Renderers$defaultDateRenderer(valueObject) {
    if (!Srch.U.n(valueObject) && !valueObject.isEmpty && (Date.isInstanceOfType(valueObject.value))) {
        var $v_0 = Srch.U.$B(String.format('cc_ValueRendererDateFormat_{0}', valueObject.managedPropertyName), false);
        if (Srch.U.w($v_0)) {
            $v_0 = 'LongDatePattern';
        }
        var $v_1 = valueObject.value;
        if ($v_1) {
            var $v_2 = new Date($v_1.getTime());
            var $v_3 = new Date($v_2.getUTCFullYear(), $v_2.getUTCMonth(), $v_2.getUTCDate(), $v_2.getUTCHours(), $v_2.getUTCMinutes(), $v_2.getUTCSeconds());
            var $v_4 = Srch.ScriptApplicationManager.get_current().states['timeZoneOffsetInHours'];
            $v_4 = $v_4 + Srch.ValueInfo.Renderers.$5j($v_1);
            $v_3 = new Date($v_3.getTime() + Math.floor($v_4 * 60 * 60 * 1000));
            return SP.Utilities.HttpUtility.htmlEncode(Srch.U.toFormattedDate($v_3, $v_0));
        }
    }
    return Srch.ValueInfo.Renderers.defaultRenderedValueHtmlEncoded(valueObject);
}
Srch.ValueInfo.Renderers.defaultDateInvariantRenderer = function Srch_ValueInfo_Renderers$defaultDateInvariantRenderer(valueObject) {
    if (!Srch.U.n(valueObject) && !valueObject.isEmpty && (Date.isInstanceOfType(valueObject.value))) {
        var $v_0 = Srch.U.$B(String.format('cc_ValueRendererDateFormat_{0}', valueObject.managedPropertyName), false);
        if (Srch.U.w($v_0)) {
            $v_0 = 'LongDatePattern';
        }
        var $v_1 = valueObject.value;
        if ($v_1) {
            var $v_2 = new Date($v_1.getTime());
            $v_1 = new Date($v_2.getUTCFullYear(), $v_2.getUTCMonth(), $v_2.getUTCDate(), $v_2.getUTCHours(), $v_2.getUTCMinutes(), $v_2.getUTCSeconds());
            return SP.Utilities.HttpUtility.htmlEncode(Srch.U.toFormattedDate($v_1, $v_0));
        }
    }
    return Srch.ValueInfo.Renderers.defaultRenderedValueHtmlEncoded(valueObject);
}
Srch.ValueInfo.Renderers.defaultLinkHrefUrlRendering = function Srch_ValueInfo_Renderers$defaultLinkHrefUrlRendering(valueObject) {
    return SP.Utilities.HttpUtility.htmlEncode(Srch.U.ensureAllowedProtocol(Srch.ValueInfo.Renderers.defaultRenderedValueNoHtmlEncoding(valueObject)));
}
Srch.ValueInfo.Renderers.defaultBooleanRendering = function Srch_ValueInfo_Renderers$defaultBooleanRendering(valueObject) {
    if (!Srch.U.n(valueObject) && !valueObject.isEmpty && (Boolean.isInstanceOfType(valueObject.value))) {
        return (valueObject.value) ? Srch.U.loadResource('cc_ValueRenderer_BooleanYes') : Srch.U.loadResource('cc_ValueRenderer_BooleanNo');
    }
    else {
        return Srch.ValueInfo.Renderers.defaultRenderedValueHtmlEncoded(valueObject);
    }
}
Srch.ValueInfo.Renderers.$5j = function Srch_ValueInfo_Renderers$$5j($p0) {
    var $v_0 = new Date($p0.getFullYear(), 0, 1);
    var $v_1 = new Date($p0.getFullYear(), 6, 1);
    var $v_2 = Math.max($v_0.getTimezoneOffset(), $v_1.getTimezoneOffset());
    if ($p0.getTimezoneOffset() < $v_2) {
        return 1;
    }
    return 0;
}


Srch.ValueInfo.ValueTypeHandler = function Srch_ValueInfo_ValueTypeHandler() {
    this.matching = {};
    this.valueRenderer = Srch.ValueInfo.Renderers.defaultRenderedValueHtmlEncoded;
    this.filterTokenGenerator = Srch.ValueInfo.Renderers.defaultFilterToken;
}
Srch.ValueInfo.ValueTypeHandler.$4E = function Srch_ValueInfo_ValueTypeHandler$$4E() {
    if (Srch.U.n(Srch.ScriptApplicationManager.get_current())) {
        return {};
    }
    var $v_0 = Srch.ScriptApplicationManager.get_current().$3w_1;
    if (Srch.U.n($v_0)) {
        $v_0 = {};
        Srch.ScriptApplicationManager.get_current().$3w_1 = $v_0;
        Srch.ValueInfo.ValueTypeHandler.$5W();
    }
    return $v_0;
}
Srch.ValueInfo.ValueTypeHandler.$3c = function Srch_ValueInfo_ValueTypeHandler$$3c($p0) {
    if (Srch.U.n($p0)) {
        return;
    }
    var $v_0 = Srch.ValueInfo.ValueTypeHandler.$4E();
    for (var $$arr_2 = Srch.ValueInfo.ValueTypeHandler.$4L, $$len_3 = $$arr_2.length, $$idx_4 = 0; $$idx_4 < $$len_3; ++$$idx_4) {
        var $v_1 = $$arr_2[$$idx_4];
        var $v_2 = Srch.U.getOrCreateFieldOnObject($v_0, $v_1, {});
        var $v_3 = $p0.matching[$v_1];
        if (!Srch.U.n($v_3) && !Srch.U.n($v_3.length) && $v_3.length > 0) {
            for (var $$arr_8 = $v_3, $$len_9 = $$arr_8.length, $$idx_A = 0; $$idx_A < $$len_9; ++$$idx_A) {
                var $v_4 = $$arr_8[$$idx_A];
                $v_2[$v_4.toUpperCase()] = $p0;
            }
        }
    }
}
Srch.ValueInfo.ValueTypeHandler.$13 = function Srch_ValueInfo_ValueTypeHandler$$13($p0, $p1, $p2) {
    var $v_0 = Srch.ValueInfo.ValueTypeHandler.$2V($p0, $p1);
    return Srch.U.getFieldOnObject($v_0, $p2);
}
Srch.ValueInfo.ValueTypeHandler.$2V = function Srch_ValueInfo_ValueTypeHandler$$2V($p0, $p1) {
    var $v_0 = Srch.ValueInfo.ValueTypeHandler.$4E();
    var $v_1 = Srch.ValueInfo.ValueTypeHandler.$2U(Srch.ValueInfo.ValueTypeHandler.$1b, $v_0, Srch.ValueInfo.ValueTypeHandler.$k);
    if (Srch.U.n($v_1)) {
        $v_1 = Srch.ValueInfo.ValueTypeHandler.get_$46();
    }
    if (Srch.U.w($p0) && Srch.U.w($p1)) {
        return $v_1;
    }
    var $v_2 = null;
    if (!Srch.U.w($p0)) {
        $v_2 = Srch.ValueInfo.ValueTypeHandler.$2U($p0, $v_0, Srch.ValueInfo.ValueTypeHandler.$k);
        if (Srch.U.n($v_2)) {
            var $v_3 = Srch.ValueInfo.$d($p0);
            $v_2 = Srch.ValueInfo.ValueTypeHandler.$2U($v_3, $v_0, Srch.ValueInfo.ValueTypeHandler.$35);
        }
    }
    if (Srch.U.w($p1)) {
        $p1 = Srch.ValueInfo.ValueTypeHandler.$5T($p0);
    }
    if (Srch.U.n($v_2) && !Srch.U.w($p1)) {
        $v_2 = Srch.ValueInfo.ValueTypeHandler.$2U($p1, $v_0, Srch.ValueInfo.ValueTypeHandler.$2y);
    }
    return (Srch.U.n($v_2)) ? $v_1 : $v_2;
}
Srch.ValueInfo.ValueTypeHandler.$4A = function Srch_ValueInfo_ValueTypeHandler$$4A($p0) {
    var $v_0 = Srch.ValueInfo.ValueTypeHandler.$2V($p0, null);
    return (!Srch.U.n($v_0) && !Srch.U.w($v_0.refinementOverrideTemplateId)) ? $v_0.refinementOverrideTemplateId : '';
}
Srch.ValueInfo.ValueTypeHandler.$2U = function Srch_ValueInfo_ValueTypeHandler$$2U($p0, $p1, $p2) {
    var $v_0 = Srch.U.getOrCreateFieldOnObject($p1, $p2, {});
    var $v_1 = $p0.toUpperCase();
    if (!Srch.U.n($v_0[$v_1])) {
        return $v_0[$v_1];
    }
    else {
        return null;
    }
}
Srch.ValueInfo.ValueTypeHandler.$58 = function Srch_ValueInfo_ValueTypeHandler$$58($p0, $p1, $p2) {
    var $v_0 = Srch.ValueInfo.ValueTypeHandler.$2V($p1, $p2);
    var $v_1 = Srch.ValueInfo.ValueTypeHandler.$57($p0, $v_0);
    return $v_1;
}
Srch.ValueInfo.ValueTypeHandler.$57 = function Srch_ValueInfo_ValueTypeHandler$$57($p0, $p1) {
    var $v_0 = new Srch.ValueInfo.ValueTypeHandler();
    $v_0.id = $p0;
    $v_0.baseHandlerId = (Srch.U.w($p1.baseHandlerId)) ? $p1.id : $p1.baseHandlerId;
    $v_0.matching = {};
    $v_0.valueRenderer = $p1.valueRenderer;
    $v_0.valueParser = $p1.valueParser;
    $v_0.filterTokenGenerator = $p1.filterTokenGenerator;
    $v_0.refinementSpecFilterDefault = $p1.refinementSpecFilterDefault;
    $v_0.refinementOverrideTemplateId = $p1.refinementOverrideTemplateId;
    if (!Srch.U.n($p1.intervalLabels)) {
        $v_0.intervalLabels = Srch.U.copyDictionary($p1.intervalLabels);
    }
    return $v_0;
}
Srch.ValueInfo.ValueTypeHandler.$3b = function Srch_ValueInfo_ValueTypeHandler$$3b($p0, $p1, $p2) {
    var $v_0 = Srch.ValueInfo.ValueTypeHandler.$58($p0, $p2, null);
    $v_0.matching = {};
    $v_0.matching[Srch.ValueInfo.ValueTypeHandler.$k] = [ $p1 ];
    Srch.ValueInfo.ValueTypeHandler.$3c($v_0);
    return $v_0;
}
Srch.ValueInfo.ValueTypeHandler.$23 = function Srch_ValueInfo_ValueTypeHandler$$23($p0, $p1, $p2, $p3) {
    return Srch.ValueInfo.ValueTypeHandler.$4c($p0, $p1, $p2, null, $p3);
}
Srch.ValueInfo.ValueTypeHandler.$5T = function Srch_ValueInfo_ValueTypeHandler$$5T($p0) {
    if (Srch.U.w($p0)) {
        return '';
    }
    var $v_0 = {};
    $v_0['String'] = 'Text';
    $v_0['Date'] = 'EcmaDate';
    $v_0['Int'] = 'Integer';
    $v_0['Double'] = 'Double';
    $v_0['Decimal'] = 'Decimal';
    $v_0['YesNo'] = 'YesNo';
    var $v_1 = new RegExp(Srch.ValueInfo.ValueTypeHandler.$4x, 'g');
    var $v_2 = $v_1.exec($p0);
    if (!Srch.U.n($v_2) && $v_2.length > 1 && !Srch.U.w($v_0[$v_2[$v_2.length - 1]])) {
        return $v_0[$v_2[$v_2.length - 1]];
    }
    else {
        return '';
    }
}
Srch.ValueInfo.ValueTypeHandler.$o = function Srch_ValueInfo_ValueTypeHandler$$o($p0, $p1, $p2, $p3, $p4) {
    var $v_0 = [];
    return Srch.ValueInfo.ValueTypeHandler.$4c($p0, $p1, $p2, $p3, $p4);
}
Srch.ValueInfo.ValueTypeHandler.$4c = function Srch_ValueInfo_ValueTypeHandler$$4c($p0, $p1, $p2, $p3, $p4) {
    var $v_0 = new Srch.ValueInfo.ValueTypeHandler();
    $v_0.id = $p0;
    $v_0.baseHandlerId = $p0;
    $v_0.matching[Srch.ValueInfo.ValueTypeHandler.$k] = $p1;
    $v_0.matching[Srch.ValueInfo.ValueTypeHandler.$35] = $p2;
    $v_0.matching[Srch.ValueInfo.ValueTypeHandler.$2y] = $p3;
    $v_0.valueRenderer = $p4;
    Srch.ValueInfo.ValueTypeHandler.$3c($v_0);
    return $v_0;
}
Srch.ValueInfo.ValueTypeHandler.get_$46 = function Srch_ValueInfo_ValueTypeHandler$get_$46() {
    var $v_0 = new Srch.ValueInfo.ValueTypeHandler();
    $v_0.id = Srch.ValueInfo.ValueTypeHandler.$1b;
    $v_0.baseHandlerId = Srch.ValueInfo.ValueTypeHandler.$1b;
    $v_0.matching[Srch.ValueInfo.ValueTypeHandler.$k] = [ Srch.ValueInfo.ValueTypeHandler.$1b ];
    return $v_0;
}
Srch.ValueInfo.ValueTypeHandler.get_$3D = function Srch_ValueInfo_ValueTypeHandler$get_$3D() {
    var $v_0 = {};
    $v_0['min'] = 'rf_DefaultNumberLabels_min';
    $v_0['max'] = 'rf_DefaultNumberLabels_max';
    $v_0['range'] = 'rf_DefaultNumberLabels_range';
    $v_0['value'] = 'rf_DefaultNumberLabels_value';
    return $v_0;
}
Srch.ValueInfo.ValueTypeHandler.$2W = function Srch_ValueInfo_ValueTypeHandler$$2W() {
    var $v_0 = {};
    $v_0['0'] = 'rf_DefaultDateBoundaryLabels_0';
    $v_0['1'] = 'rf_DefaultDateBoundaryLabels_1';
    $v_0['2'] = 'rf_DefaultDateBoundaryLabels_2';
    $v_0['3'] = 'rf_DefaultDateBoundaryLabels_3';
    $v_0['min'] = 'rf_DefaultDateRangeLabels_min';
    $v_0['max'] = 'rf_DefaultDateRangeLabels_max';
    $v_0['range'] = 'rf_DefaultDateRangeLabels_range';
    $v_0['value'] = 'rf_DefaultDateRangeLabels_value';
    return $v_0;
}
Srch.ValueInfo.ValueTypeHandler.$5W = function Srch_ValueInfo_ValueTypeHandler$$5W() {
    Srch.ValueInfo.ValueTypeHandler.$3c(Srch.ValueInfo.ValueTypeHandler.get_$46());
    var $v_0 = Srch.ValueInfo.ValueTypeHandler.$o('NumericInt', [ 'UrlDepth', 'DocumentSummarySize', 'PictureHeight', 'PictureWidth', 'Rank', 'RecsClickedLifeTime', 'RecsClickedRecent', 'ReplyCount', 'siterank', 'SocialDistance', 'ViewsLifeTime', 'ViewsLifeTimeUniqueUsers', 'ViewsRecent', 'ViewsRecentUniqueUsers' ], [ 'OWSINTG', 'OWSRCNT' ], [ 'Integer' ], Srch.ValueInfo.Renderers.defaultNumberRenderer);
    $v_0.valueParser = Srch.ValueInfo.Parsers.$5i;
    $v_0.intervalLabels = Srch.ValueInfo.ValueTypeHandler.get_$3D();
    var $v_1 = Srch.ValueInfo.ValueTypeHandler.$o('NumericFloat', [ 'Price', 'AAPrice' ], [ 'OWSNMBR', 'OWSCURR', 'OWSRAVG' ], [ 'Double', 'Decimal' ], Srch.ValueInfo.Renderers.defaultNumberRenderer);
    $v_1.valueParser = Srch.ValueInfo.Parsers.$5h;
    $v_1.intervalLabels = Srch.ValueInfo.ValueTypeHandler.get_$3D();
    var $v_2 = Srch.ValueInfo.ValueTypeHandler.$o('EcmaDate', [ 'LastModifiedTime', 'Created', 'DiscoveredTime', 'DisplayDate', 'EndDate', 'ExpirationTimes', 'ExtractedDate', 'ImageDateCreated', 'processingtime', 'StartDate', 'StartDateInvariant', 'EndDateInvariant' ], [ 'OWSDATE' ], [ 'EcmaDate' ], Srch.ValueInfo.Renderers.defaultDateRenderer);
    $v_2.valueParser = Srch.ValueInfo.Parsers.$2Q;
    $v_2.intervalLabels = Srch.ValueInfo.ValueTypeHandler.$2W();
    var $v_3 = Srch.ValueInfo.ValueTypeHandler.$o('EcmaDateRefinersSingle', [ 'RefinableDateSingle00', 'RefinableDateSingle01', 'RefinableDateSingle02', 'RefinableDateSingle03', 'RefinableDateSingle04' ], [ 'OWSDATE' ], [ 'EcmaDate' ], Srch.ValueInfo.Renderers.defaultDateRenderer);
    $v_3.valueParser = Srch.ValueInfo.Parsers.$2Q;
    $v_3.intervalLabels = Srch.ValueInfo.ValueTypeHandler.$2W();
    if (!OffSwitch.IsActive(Srch.ValueInfo.$3t)) {
        var $v_B = Srch.ValueInfo.ValueTypeHandler.$o('EcmaDateRefinersInvariant', [ 'RefinableDateInvariant00', 'RefinableDateInvariant01' ], [], [], Srch.ValueInfo.Renderers.defaultDateInvariantRenderer);
        $v_B.valueParser = Srch.ValueInfo.Parsers.$2Q;
        $v_B.intervalLabels = Srch.ValueInfo.ValueTypeHandler.$2W();
    }
    else {
        var $v_C = Srch.ValueInfo.ValueTypeHandler.$o('EcmaDateRefinersInvariant', [ 'RefinableDateInvariant00', 'RefinableDateInvariant01' ], [ 'OWSDATE' ], [ 'EcmaDate' ], Srch.ValueInfo.Renderers.defaultDateInvariantRenderer);
        $v_C.valueParser = Srch.ValueInfo.Parsers.$2Q;
        $v_C.intervalLabels = Srch.ValueInfo.ValueTypeHandler.$2W();
    }
    var $v_4 = Srch.ValueInfo.ValueTypeHandler.$23('ManagedMetadata', [ 'owstaxidmetadataalltagsinfo', 'owsmetadatafacetinfo', 'ows_MetadataFacetInfo', 'Tags' ], [ 'OWSTAXID' ], Srch.ValueInfo.Renderers.defaultRenderedValueHtmlEncoded);
    $v_4.valueParser = Srch.ValueInfo.Parsers.$60;
    $v_4.refinementSpecFilterDefault = 'L*';
    var $v_5 = Srch.ValueInfo.ValueTypeHandler.$23('User', [], [ 'OWSUSER' ], Srch.ValueInfo.Renderers.defaultRenderedValueHtmlEncoded);
    $v_5.valueParser = Srch.ValueInfo.Parsers.$64;
    var $v_6 = Srch.ValueInfo.ValueTypeHandler.$23('RichHtml', null, [ 'OWSLINK', 'OWSHTML' ], Srch.ValueInfo.Renderers.defaultRenderedValueNoHtmlEncoding);
    var $v_7 = Srch.ValueInfo.ValueTypeHandler.$23('ImageSrcUrl', [ 'PublishingImage' ], [ 'OWSIMGE' ], Srch.ValueInfo.Renderers.imageSourceRendering);
    var $v_8 = Srch.ValueInfo.ValueTypeHandler.$23('LinkHrefUrl', null, [ 'OWSURLH' ], Srch.ValueInfo.Renderers.defaultLinkHrefUrlRendering);
    $v_8.valueParser = Srch.ValueInfo.Parsers.$63;
    var $v_9 = Srch.ValueInfo.ValueTypeHandler.$o('Boolean', [ 'IsDocument', 'IsContainer', 'IsData', 'IsDefaultView', 'IsEmptyList', 'IsListItem', 'IsMyDocuments', 'IsPartiallyProcessed', 'IsReport', 'IsSharedWithGroup', 'NonDocument', 'RobotsNoIndex', 'SiteClosed', 'SiteContainer' ], [ 'OWSBOOL' ], [ 'YesNo' ], Srch.ValueInfo.Renderers.defaultBooleanRendering);
    $v_9.valueParser = Srch.ValueInfo.Parsers.$55;
    var $v_A = Srch.ValueInfo.ValueTypeHandler.$3b('FileSize', 'Size', 'NumericPropOWSINTG');
    $v_A.valueRenderer = Srch.ValueInfo.Renderers.numberFileSizeRendering;
}
Srch.ValueInfo.ValueTypeHandler.prototype = {
    id: '',
    baseHandlerId: '',
    valueParser: null,
    refinementSpecFilterDefault: '',
    intervalLabels: null,
    refinementOverrideTemplateId: ''
}


Srch.ParseJSONUtil = function Srch_ParseJSONUtil() {
}
Srch.ParseJSONUtil.$5v = function Srch_ParseJSONUtil$$5v($p0) {
    $p0 = $p0.replace(Srch.ParseJSONUtil.$4k, '$1new SP.Guid(\"$2\")');
    $p0 = $p0.replace(Srch.ParseJSONUtil.$4i, '$1Srch.DataConvertUtil.createUtcDateTime($2)');
    $p0 = $p0.replace(Srch.ParseJSONUtil.$4e, '$1Srch.DataConvertUtil.createLocalDateTime($2)');
    $p0 = $p0.replace(Srch.ParseJSONUtil.$4g, '$1Srch.DataConvertUtil.createUnspecifiedDateTime($2)');
    return $p0;
}
Srch.ParseJSONUtil.evaluateJsonValueToken = function Srch_ParseJSONUtil$evaluateJsonValueToken(valueString) {
    if (SP.ScriptUtility.isNullOrEmptyString(valueString)) {
        return valueString;
    }
    var $v_0 = valueString;
    $v_0 = $v_0.replace(Srch.ParseJSONUtil.$4l, 'new SP.Guid(\"$1\")');
    $v_0 = $v_0.replace(Srch.ParseJSONUtil.$4j, 'Srch.DataConvertUtil.createUtcDateTime($1)');
    $v_0 = $v_0.replace(Srch.ParseJSONUtil.$4f, 'Srch.DataConvertUtil.createLocalDateTime($1)');
    $v_0 = $v_0.replace(Srch.ParseJSONUtil.$4h, 'Srch.DataConvertUtil.createUnspecifiedDateTime($1)');
    if ($v_0 === valueString) {
        return valueString;
    }
    else {
        var $v_1 = eval('(' + $v_0 + ')');
        return $v_1;
    }
}
Srch.ParseJSONUtil.evaluateTokensInJsonObject = function Srch_ParseJSONUtil$evaluateTokensInJsonObject(jsonObject) {
    var $v_0 = Srch.U.getFieldOnObject(jsonObject, 'EvaluatedTokensInJsonObject');
    if (!Srch.U.n($v_0) && $v_0) {
        return;
    }
    Srch.U.$45(jsonObject, function($p1_0, $p1_1, $p1_2) {
        if ('string' === typeof($p1_2)) {
            var $v_1 = Srch.ParseJSONUtil.evaluateJsonValueToken($p1_2);
            if ('string' !== typeof($v_1)) {
                Srch.U.setFieldOnObject($p1_0, $p1_1, $v_1);
            }
        }
    });
    Srch.U.setFieldOnObject(jsonObject, 'EvaluatedTokensInJsonObject', true);
}
Srch.ParseJSONUtil.parseObjectFromJsonString = function Srch_ParseJSONUtil$parseObjectFromJsonString(json) {
    if (SP.ScriptUtility.isNullOrEmptyString(json)) {
        return null;
    }
    var $v_0 = Srch.ParseJSONUtil.validateJson(json);
    if (!$v_0) {
        throw Error.argument('json');
    }
    json = Srch.ParseJSONUtil.$5v(json);
    var $v_1 = eval('(' + json + ')');
    return $v_1;
}
Srch.ParseJSONUtil.validateJson = function Srch_ParseJSONUtil$validateJson(text) {
    return Srch.ParseJSONUtil.$4n.test(text.replace(Srch.ParseJSONUtil.$4o, '@').replace(Srch.ParseJSONUtil.$4p, ']').replace(Srch.ParseJSONUtil.$4m, ''));
}


Srch.DataConvertUtil = function Srch_DataConvertUtil() {
}
Srch.DataConvertUtil.specifyDateTimeKind = function Srch_DataConvertUtil$specifyDateTimeKind(datetime, kind) {
    datetime.kind = kind;
}
Srch.DataConvertUtil.getDateTimeKind = function Srch_DataConvertUtil$getDateTimeKind(datetime) {
    var $v_0 = datetime.kind;
    if (SP.ScriptUtility.isNullOrUndefined($v_0)) {
        return 2;
    }
    return $v_0;
}
Srch.DataConvertUtil.createUnspecifiedDateTime = function Srch_DataConvertUtil$createUnspecifiedDateTime(year, month, day, hour, minute, second, milliseconds) {
    var $v_0 = new Date(year, month, day, hour, minute, second, milliseconds);
    Srch.DataConvertUtil.specifyDateTimeKind($v_0, 0);
    return $v_0;
}
Srch.DataConvertUtil.createUtcDateTime = function Srch_DataConvertUtil$createUtcDateTime(milliseconds) {
    var $v_0 = new Date(milliseconds);
    Srch.DataConvertUtil.specifyDateTimeKind($v_0, 1);
    return $v_0;
}
Srch.DataConvertUtil.createLocalDateTime = function Srch_DataConvertUtil$createLocalDateTime(milliseconds) {
    var $v_0 = new Date(milliseconds);
    Srch.DataConvertUtil.specifyDateTimeKind($v_0, 2);
    return $v_0;
}


Type.registerNamespace('Microsoft.SharePoint.Client.Search.Query');

Microsoft.SharePoint.Client.Search.Query.KnownTableTypes = function Microsoft_SharePoint_Client_Search_Query_KnownTableTypes() {
}
Microsoft.SharePoint.Client.Search.Query.KnownTableTypes.isKnownTableType = function Microsoft_SharePoint_Client_Search_Query_KnownTableTypes$isKnownTableType(tableType) {
    return tableType === Microsoft.SharePoint.Client.Search.Query.KnownTableTypes.relevantResults || tableType === Microsoft.SharePoint.Client.Search.Query.KnownTableTypes.specialTermResults || tableType === Microsoft.SharePoint.Client.Search.Query.KnownTableTypes.definitionResults || tableType === Microsoft.SharePoint.Client.Search.Query.KnownTableTypes.refinementResults || tableType === Microsoft.SharePoint.Client.Search.Query.KnownTableTypes.interleavingInformation || tableType === Microsoft.SharePoint.Client.Search.Query.KnownTableTypes.personalFavoriteResults;
}


Srch.ClientControl.registerClass('Srch.ClientControl', Sys.UI.Control);
Srch.DataProvider.registerClass('Srch.DataProvider', Srch.ClientControl);
Srch.DisplayControl.registerClass('Srch.DisplayControl', Srch.ClientControl);
Srch.Refinement.registerClass('Srch.Refinement', Srch.DisplayControl);
Srch.Refinement.RefinerOptions.registerClass('Srch.Refinement.RefinerOptions');
Srch.Result.registerClass('Srch.Result', Srch.DisplayControl);
Srch.SearchBox.registerClass('Srch.SearchBox', Srch.ClientControl);
Srch.U.registerClass('Srch.U');
Srch.U.PropNames.registerClass('Srch.U.PropNames');
Srch.U.Ids.registerClass('Srch.U.Ids');
Srch.U.LoadScriptsState.registerClass('Srch.U.LoadScriptsState');
Srch.ListenedEvent.registerClass('Srch.ListenedEvent');
Srch.ScriptApplicationManager.registerClass('Srch.ScriptApplicationManager', Sys.Component);
Srch.QueryGroup.registerClass('Srch.QueryGroup');
Srch.LanguagePreference.registerClass('Srch.LanguagePreference');
Srch.QueryState.registerClass('Srch.QueryState');
Srch.RefinementControl.registerClass('Srch.RefinementControl');
Srch.RefinementCategory.registerClass('Srch.RefinementCategory');
Srch.DefaultQueryProperties.registerClass('Srch.DefaultQueryProperties');
Srch.ResultSort.registerClass('Srch.ResultSort');
Srch.RankRule.registerClass('Srch.RankRule');
Srch.ComplexResultSort.registerClass('Srch.ComplexResultSort');
Srch.ControlMessage.registerClass('Srch.ControlMessage');
Srch.PagingLink.registerClass('Srch.PagingLink');
Srch.ResultEventArgs.registerClass('Srch.ResultEventArgs', Sys.EventArgs);
Srch.BatchResultEventArgs.registerClass('Srch.BatchResultEventArgs', Sys.EventArgs);
Srch.QueryEventArgs.registerClass('Srch.QueryEventArgs', Sys.EventArgs);
Srch.NavigationNode.registerClass('Srch.NavigationNode');
Srch.ClickRecorder.registerClass('Srch.ClickRecorder');
Srch.RefinementUtil.registerClass('Srch.RefinementUtil');
Srch.ValueInfo.registerClass('Srch.ValueInfo');
Srch.ValueInfo.Parsers.registerClass('Srch.ValueInfo.Parsers');
Srch.ValueInfo.Renderers.registerClass('Srch.ValueInfo.Renderers');
Srch.ValueInfo.ValueTypeHandler.registerClass('Srch.ValueInfo.ValueTypeHandler');
Srch.ParseJSONUtil.registerClass('Srch.ParseJSONUtil');
Srch.DataConvertUtil.registerClass('Srch.DataConvertUtil');
Microsoft.SharePoint.Client.Search.Query.KnownTableTypes.registerClass('Microsoft.SharePoint.Client.Search.Query.KnownTableTypes');
function search_clientcontrols_initialize() {
this.$q = false;
Srch.ClientControl.$4V = '<div><a href=\"#\" style=\"cursor:pointer; \" class=\"ms-calloutLink ms-clientcontrol-showdetails\" onclick=\"Srch.ClientControl.toggleMessageDetails(this.parentNode);;return false;\">{0}</a><a href=\"#\" style=\"display: none; cursor:pointer; \" class=\"ms-calloutLink ms-clientcontrol-hidedetails\" onclick=\"Srch.ClientControl.toggleMessageDetails(this.parentNode);;return false;\">{1}</a><br style=\"display: none;\"/><br style=\"display: none;\"/><div style=\"display: none;\" id=\"ms-search-errors\" class=\"ms-status-msg {2} ms-clientcontrol-errors\" style=\"word-wrap:break-word\">';
Srch.ClientControl.$1w = '<div class=\"ms-search-error\">{0}</div>';
Srch.DataProvider.$4U = 'D9BFB1A1-9036-4627-83B2-BBD9983AC8A1';
Srch.DataProvider.$2f = '4790B250-E2AF-4E4A-8136-600739EE3163';
Srch.DataProvider.$3V = '0BBA4D7D-4F2C-4086-975A-8F9D2B6C6D53';
Srch.DataProvider.$1x = '5DF7BA10-55D6-4da1-B55F-896F7BCB486B';
Srch.DataProvider.$3G = 'C8BDD081-7379-4c71-AAC8-61B6AA6E25A6';
Srch.DataProvider.$1k = '02B657FE-924F-4b2b-BB91-4A12BAF9929A';
Srch.Refinement.$50 = new RegExp('[^\\s\"]+|\"[^\"]*\"');
Srch.Refinement.refinemenT_TITLE_PREFIX = 'rf_RefinementTitle_';
Srch.SearchBox.searchBoxBorderClassName = 'ms-srch-sb-border';
Srch.SearchBox.searchBoxFocusedBorderClassName = 'ms-srch-sb-borderFocused';
Srch.U.$42 = [ 'http://', 'https://', 'file://', 'file:\\\\', 'ftp://', 'mailto:', 'news:', 'nntp:', 'rtsp://', 'tel:', 'pnm://', 'mms://', 'data:' ];
Srch.U.hitHighlightingOpenTag = '<strong class=\"ms-srch-item-highlightedText\">';
Srch.U.hitHighlightingCloseTag = '</strong>';
Srch.U.$1X = '';
Srch.U.$2a = 0;
Srch.U.cloudVideoContentTypeId = '0x010100F3754F12A9B6490D9622A01FE9D8F012';
Srch.U.titleTruncationLength = 60;
Srch.U.titleTruncationLengthWithMetadata = 28;
Srch.U.titleTruncationLengthWithPreview = 50;
Srch.U.summaryTruncationLength = 145;
Srch.U.summaryTruncationLengthWithPreview = 120;
Srch.U.pathTruncationLength = 65;
Srch.U.pathTruncationLengthWithPreview = 55;
Srch.U.pathTruncationLengthWithMetadata = 41;
Srch.U.personaControlRenderedThreshold = 60;
Srch.U.maximumSocialMetadataValue = 1000;
Srch.U.contentFixedWidthLength = 90;
Srch.U.$4S = 'LoadTemplate';
Srch.U.$4P = 'ItemRenderWrapper';
Srch.U.$3B = 'ExecutionContext';
Srch.U.$1T = 'TemplateFunction';
Srch.U.$3C = 'Operation';
Srch.U.$2S = 'DisplayTemplateData';
Srch.U.$48 = 'TemplateUrl';
Srch.U.$2b = 'root';
Srch.U.hitHighlightedDelimiterXml = '<ddd/>';
Srch.U.hitHighlightedDelimiterHtml = '&#8230;';
Srch.U.$1B = null;
Srch.U.$2T = null;
Srch.U.PropNames.renderTemplates = 'RenderTemplates';
Srch.U.PropNames.renderTemplateId = 'RenderTemplateId';
Srch.U.PropNames.tableType = 'TableType';
Srch.U.PropNames.queryErrors = 'QueryErrors';
Srch.U.PropNames.resultTables = 'ResultTables';
Srch.U.PropNames.resultRows = 'ResultRows';
Srch.U.PropNames.queryId = 'QueryId';
Srch.U.PropNames.properties = 'Properties';
Srch.U.PropNames.rowCount = 'RowCount';
Srch.U.PropNames.totalRows = 'TotalRows';
Srch.U.PropNames.totalRowsIncludingDuplicates = 'TotalRowsIncludingDuplicates';
Srch.U.PropNames.queryRuleId = 'QueryRuleId';
Srch.U.PropNames.parentTableReference = 'ParentTableReference';
Srch.U.PropNames.isFirstPinnedBlock = 'IsFirstPinnedResultBlock';
Srch.U.PropNames.isFirstRankedBlock = 'IsFirstRankedResultBlock';
Srch.U.Ids.group = '_group';
Srch.U.Ids.groupTitle = '_groupTitle';
Srch.U.Ids.groupLink = '_groupLink';
Srch.U.Ids.groupContent = '_groupContent';
Srch.U.Ids.item = '_item';
Srch.U.Ids.body = '_itemBody';
Srch.U.Ids.title = '_itemTitle';
Srch.U.Ids.icon = '_itemIcon';
Srch.U.Ids.titleLink = '_itemTitleLink';
Srch.U.Ids.summary = '_itemSummary';
Srch.U.Ids.path = '_itemPath';
Srch.U.Ids.hover = '_hover';
Srch.U.Ids.visualBestBet = '_visualBestBet';
Srch.U.Ids.preview = '_itemPreview';
Srch.U.Ids.deepLinks = '_deepLinks';
Srch.U.Ids.members = '_members';
Srch.U.Ids.replies = '_replies';
Srch.U.Ids.discussions = '_discussions';
Srch.U.Ids.likes = '_likes';
Srch.U.Ids.postInfo = '_postInfo';
Srch.ScriptApplicationManager.scriptLoadTimeout = 7500;
Srch.ScriptApplicationManager.$1W = null;
Srch.ScriptApplicationManager.$w = null;
Srch.QueryGroup.broadcastName = '__';
Srch.QueryState.$4 = new Srch.QueryState();
Srch.ControlMessage.$4d = 'RuntimeException';
Srch.ControlMessage.$4T = 'LocStringIdNotFoundWarning';
Srch.ControlMessage.$4t = 'LoadResource';
Srch.ControlMessage.$49 = '{0} ({1}: {2})';
Srch.ControlMessage.$4u = ';';
Srch.ClickRecorder.pageImpressionInPropertyBag = 'piPageImpression';
Srch.ClickRecorder.pageImpressionSearchResult = 'piSearchResult';
Srch.ClickRecorder.pageClickType = 'piClickType';
Srch.ClickRecorder.userQuery = 'piUserQuery';
Srch.ClickRecorder.sourceId = 'SourceId';
Srch.ClickRecorder.pageImpressionBlockInPropertyBag = 'piPageImpressionBlockType';
Srch.ClickRecorder.pageImpressionSubResultIndex = 'piSearchSubResultIndex';
Srch.ClickRecorder.$J = null;
Srch.RefinementUtil.searchRefinementClientControls = {};
Srch.RefinementUtil.searchRefinementControls = {};
Srch.ValueInfo.$3Z = null;
Srch.ValueInfo.$3t = 'CAC101F7-CF4D-45B3-90A7-C883FAF3E210';
Srch.ValueInfo.taxFacetInfoPropertyName = 'owsmetadatafacetinfo';
Srch.ValueInfo.taxAllTagsPropertyName = 'owstaxidmetadataalltagsinfo';
Srch.ValueInfo.hashTagsPropertyName = 'Tags';
Srch.ValueInfo.taxFieldPropertyNamePrefix = 'owstaxId';
Srch.ValueInfo.peopleFieldPropertyName = 'People';
Srch.ValueInfo.peopleInMediaFieldPropertyName = 'PeopleInMedia';
Srch.ValueInfo.sizeFieldPropertyName = 'Size';
Srch.ValueInfo.richHtmlFieldPropertyNameSuffix = 'OWSHTML';
Srch.ValueInfo.richImageFieldPropertyNameSuffix = 'OWSIMGE';
Srch.ValueInfo.authorFieldPropertyName = 'Author';
Srch.ValueInfo.displayAuthorFieldPropertyName = 'DisplayAuthor';
Srch.ValueInfo.$3P = [ 'min', 'max', 'range', 'value', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' ];
Srch.ValueInfo.$$cctor();
Srch.ValueInfo.ValueTypeHandler.$k = 'PropNameExact';
Srch.ValueInfo.ValueTypeHandler.$35 = 'TypeCode';
Srch.ValueInfo.ValueTypeHandler.$2y = 'SearchType';
Srch.ValueInfo.ValueTypeHandler.$1b = '*';
Srch.ValueInfo.ValueTypeHandler.$4L = [ Srch.ValueInfo.ValueTypeHandler.$k, Srch.ValueInfo.ValueTypeHandler.$35, Srch.ValueInfo.ValueTypeHandler.$2y ];
Srch.ValueInfo.ValueTypeHandler.$4x = '(Refinable)?(String|Date|Int|Double|Decimal|YesNo)[0-9][0-9]';
Srch.ParseJSONUtil.$4g = new RegExp('(^|[^\\\\])\\\"\\\\/Date\\(([0-9]+(?:,[0-9]+){2,6})\\)\\\\/\\\"', 'g');
Srch.ParseJSONUtil.$4e = new RegExp('(^|[^\\\\])\\\"\\\\/Date\\((-?[0-9]+)(?:[a-zA-Z]|(?:\\+|-)[0-9]{4})\\)\\\\/\\\"', 'g');
Srch.ParseJSONUtil.$4i = new RegExp('(^|[^\\\\])\\\"\\\\/Date\\((-?[0-9]+)\\)\\\\/\\\"', 'g');
Srch.ParseJSONUtil.$4k = new RegExp('(^|[^\\\\])\\\"\\\\/Guid\\(([0-9a-fA-F\\-]+)\\)\\\\/\\\"', 'g');
Srch.ParseJSONUtil.$4n = new RegExp('^[\\],:{}\\s]*$');
Srch.ParseJSONUtil.$4o = new RegExp('\\\\(?:[\"\\\\\\/bfnrt]|u[0-9a-fA-F]{4})', 'g');
Srch.ParseJSONUtil.$4p = new RegExp('\"[^\"\\\\\\n\\r]*\"|true|false|null|-?\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d+)?', 'g');
Srch.ParseJSONUtil.$4m = new RegExp('(?:^|:|,)(?:\\s*\\[)+', 'g');
Srch.ParseJSONUtil.$4h = new RegExp('^/Date\\(([0-9]+(?:,[0-9]+){2,6})\\)/$', 'g');
Srch.ParseJSONUtil.$4f = new RegExp('^/Date\\((-?[0-9]+)(?:[a-zA-Z]|(?:\\+|-)[0-9]{4})\\)/$', 'g');
Srch.ParseJSONUtil.$4j = new RegExp('^/Date\\((-?[0-9]+)\\)/$', 'g');
Srch.ParseJSONUtil.$4l = new RegExp('^/Guid\\(([0-9a-fA-F\\-]+)\\)/$', 'g');
Microsoft.SharePoint.Client.Search.Query.KnownTableTypes.relevantResults = 'RelevantResults';
Microsoft.SharePoint.Client.Search.Query.KnownTableTypes.specialTermResults = 'SpecialTermResults';
Microsoft.SharePoint.Client.Search.Query.KnownTableTypes.definitionResults = 'DefinitionResults';
Microsoft.SharePoint.Client.Search.Query.KnownTableTypes.refinementResults = 'RefinementResults';
Microsoft.SharePoint.Client.Search.Query.KnownTableTypes.interleavingInformation = 'InterleavingInformation';
Microsoft.SharePoint.Client.Search.Query.KnownTableTypes.personalFavoriteResults = 'PersonalFavoriteResults';
};
search_clientcontrols_initialize();

var $isNull = Srch.U.n;
var $isEmptyString = Srch.U.e;
var $isInArray = Srch.U.isInArray;
function $isEmptyArray(ar) {
    return Srch.U.n(ar) || ar.length < 1;
}
var $htmlAttUrlEncode = Srch.U.encodeUrlForHtmlAttributes;
var $htmlEncode = SP.Utilities.HttpUtility.htmlEncode;
var $scriptEncode = SP.Utilities.HttpUtility.ecmaScriptStringLiteralEncode;
var $urlKeyValueEncode = SP.Utilities.HttpUtility.urlKeyValueEncode;
var $urlPathEncode = SP.Utilities.HttpUtility.urlPathEncode;
// for backwards compatibility 
function $urlHtmlEncode(str) {
	return $htmlEncode(Srch.U.ensureAllowedProtocol(str)); 
}
// use this to encode url string in html attributes
function $urlHtmlEncodeString(str) { 
	return $htmlAttUrlEncode(Srch.U.ensureAllowedProtocol(str)); 
}
// this is used for ValueObject, for overriderenderer method to encode url placed in html attributes
function $urlHtmlEncodeValueObject(obj) {
	return $htmlAttUrlEncode(Srch.U.ensureAllowedProtocol(obj.value)); 
}
var $imgSrcUrl = Srch.ValueInfo.Renderers.imageSourceRendering;
var $contentLineText = Srch.ValueInfo.Renderers.contentLineText;
var $getClientControl = Srch.U.getClientComponent;
var $getResultItem = Srch.U.getResultObject;
var $setResultItem = Srch.U.setResultObject;
var $getResultObject = Srch.U.getResultObject;
var $setResultObject = Srch.U.setResultObject;
var $findResultObjectFromDOM = Srch.U.findResultObjectFromDOM;

var $getItemValue = Srch.ValueInfo.getCtxItemValue;
var $getCachedItemValue = Srch.ValueInfo.getCachedCtxItemValue;

var $includeScript = Srch.U.includeScript;
var $includeCSS = Srch.U.includeCSS;
var $includeLanguageScript = Srch.U.includeLanguageScript;
var $registerResourceDictionary = Srch.U.registerResourceDictionary;

function $resource(id) {
    // Save the caller as the template function for better error handling
    return Srch.U.loadResourceForTemplate(id, $resource.caller);
}

function $setItemWrapperCallback(renderCtx, itemWrapperFunction) {
    // Save the caller as the template function for better error handling
    Srch.U.setItemRenderWrapper(renderCtx, itemWrapperFunction, $setItemWrapperCallback.caller);
}

function $addRenderContextCallback(renderCtx, callbackType, callbackFunction, enforceUnique) {
    // Save the caller as the template function for better error handling
    Srch.U.addRenderContextCallback(renderCtx, callbackType, callbackFunction, enforceUnique, $addRenderContextCallback.caller);
}

RegisterModuleInit("search.clientcontrols.js", search_clientcontrols_initialize);

if( typeof(Sys) != "undefined" && Sys && Sys.Application ){
   Sys.Application.notifyScriptLoaded();
}
NotifyScriptLoadedAndExecuteWaitingJobs("Search.ClientControls.js");
