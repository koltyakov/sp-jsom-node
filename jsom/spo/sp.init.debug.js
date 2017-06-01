{
    if ("undefined" == typeof g_all_modules) {
        g_all_modules = {};
    }
    g_all_modules["sp.init.js"] = {
        "version": {
            "rmj": 16,
            "rmm": 0,
            "rup": 6518,
            "rpr": 1209
        }
    };
}
if (typeof spWriteProfilerMark == 'function')
    spWriteProfilerMark("perfMarkBegin_" + "sp.init.js");
Type.registerNamespace('SP');
SP.ListLevelPermissionMask = function() {
};
SP.ListLevelPermissionMask.prototype = {
    viewListItems: 1,
    insertListItems: 2,
    editListItems: 4,
    deleteListItems: 8,
    approveItems: 16,
    openItems: 32,
    viewVersions: 64,
    deleteVersions: 128,
    breakCheckout: 256,
    managePersonalViews: 512,
    manageLists: 2048
};
SP.ListLevelPermissionMask.registerEnum('SP.ListLevelPermissionMask', false);
SP.HtmlBuilder = function SP_HtmlBuilder() {
    this.$A_0 = [];
    this.$H_0 = [];
    this.$0_0 = [];
    this.$N_0 = [];
};
SP.HtmlBuilder.prototype = {
    $0_0: null,
    $H_0: null,
    $A_0: null,
    $N_0: null,
    addAttribute: function SP_HtmlBuilder$addAttribute(name, value) {
        this.$A_0[this.$A_0.length] = new SP.HtmlBuilder.Attribute(name, value);
    },
    addCssClass: function SP_HtmlBuilder$addCssClass(cssClassName) {
        Array.add(this.$H_0, cssClassName);
    },
    addCommunitiesCssClass: function SP_HtmlBuilder$addCommunitiesCssClass(cssClassName) {
        this.addCssClass('ms-comm-' + cssClassName);
    },
    renderBeginTag: function SP_HtmlBuilder$renderBeginTag(tagName) {
        this.$N_0.push(tagName);
        this.$0_0[this.$0_0.length] = '<';
        this.$0_0[this.$0_0.length] = tagName;
        if (this.$H_0.length > 0) {
            this.addAttribute('class', this.$H_0.join(' '));
            this.$H_0 = [];
        }
        for (var $v_0 = 0; $v_0 < this.$A_0.length; $v_0++) {
            var $v_1 = this.$A_0[$v_0];

            this.$0_0[this.$0_0.length] = ' ';
            this.$0_0[this.$0_0.length] = $v_1.name;
            this.$0_0[this.$0_0.length] = '=\"';
            this.$0_0[this.$0_0.length] = $v_1.value;
            this.$0_0[this.$0_0.length] = '\"';
        }
        Array.clear(this.$A_0);
        this.$0_0[this.$0_0.length] = '>';
    },
    renderEndTag: function SP_HtmlBuilder$renderEndTag() {
        if (this.$N_0.length > 0) {
            var $v_0 = this.$N_0.pop();

            this.$0_0[this.$0_0.length] = '</';
            this.$0_0[this.$0_0.length] = $v_0;
            this.$0_0[this.$0_0.length] = '>';
        }
    },
    write: function SP_HtmlBuilder$write(s) {
        this.$0_0[this.$0_0.length] = s;
    },
    writeEncoded: function SP_HtmlBuilder$writeEncoded(s) {
        this.$0_0[this.$0_0.length] = STSHtmlEncode(s);
    },
    toString: function SP_HtmlBuilder$toString() {
        return this.$0_0.join('');
    }
};
SP.HtmlBuilder.Attribute = function SP_HtmlBuilder_Attribute($p0, $p1) {
    this.name = $p0;
    this.value = $p1;
};
SP.HtmlBuilder.Attribute.prototype = {
    name: null,
    value: null
};
SP.ScriptHelpers = function SP_ScriptHelpers() {
};
SP.ScriptHelpers.disableWebpartSelection = function SP_ScriptHelpers$disableWebpartSelection(context) {
    var $v_0 = 'MSOZoneCell_WebPart' + context.wpq;
    var $v_1 = $get($v_0);

    if (!SP.ScriptHelpers.isNullOrUndefined($v_1)) {
        $v_1.setAttribute('onmouseup', '');
    }
};
SP.ScriptHelpers.getDocumentQueryPairs = function SP_ScriptHelpers$getDocumentQueryPairs() {
    var $v_0 = window.self.ajaxNavigate;
    var $v_1 = $v_0.get_search();

    return SP.ScriptHelpers.getUrlQueryPairs($v_1);
};
SP.ScriptHelpers.getFieldFromSchema = function SP_ScriptHelpers$getFieldFromSchema(schema, fieldName) {
    var $v_0 = null;

    for (var $$arr_3 = schema.Field, $$len_4 = $$arr_3.length, $$idx_5 = 0; $$idx_5 < $$len_4; ++$$idx_5) {
        var $v_1 = $$arr_3[$$idx_5];

        if ($v_1.Name === fieldName) {
            $v_0 = $v_1;
            break;
        }
    }
    return $v_0;
};
SP.ScriptHelpers.getLayoutsPageUrl = function SP_ScriptHelpers$getLayoutsPageUrl(pageName, webServerRelativeUrl) {
    return SP.Utilities.UrlBuilder.urlCombine(webServerRelativeUrl, '_layouts/' + 15 + '/' + pageName);
};
SP.ScriptHelpers.getListLevelPermissionMask = function SP_ScriptHelpers$getListLevelPermissionMask(jsonItem) {
    var $v_0 = 0;
    var $v_1 = jsonItem['PermMask'];

    if (!SP.ScriptHelpers.isNullOrUndefinedOrEmpty($v_1)) {
        var $v_2 = $v_1.substr($v_1.length - 4);

        $v_0 = parseInt($v_2, 16) | 0;
    }
    return $v_0;
};
SP.ScriptHelpers.getTextAreaElementValue = function SP_ScriptHelpers$getTextAreaElementValue(textAreaElement) {
    var $v_0 = '';
    var $v_1 = textAreaElement.value;

    if (!SP.ScriptHelpers.isNullOrUndefinedOrEmpty($v_1)) {
        $v_0 = $v_1;
    }
    return $v_0;
};
SP.ScriptHelpers.getUrlQueryPairs = function SP_ScriptHelpers$getUrlQueryPairs(docUrl) {
    var $v_0 = {};
    var $v_1 = docUrl.indexOf('?');

    if ($v_1 !== -1 && $v_1 + 1 < docUrl.length) {
        var $v_2 = docUrl.substr($v_1 + 1);
        var $v_3 = $v_2.split('&');

        for (var $$arr_5 = $v_3, $$len_6 = $$arr_5.length, $$idx_7 = 0; $$idx_7 < $$len_6; ++$$idx_7) {
            var $v_4 = $$arr_5[$$idx_7];

            if (!SP.ScriptHelpers.isNullOrUndefinedOrEmpty($v_4)) {
                var $v_5 = $v_4.indexOf('=');

                if ($v_5 === -1) {
                    $v_0[$v_4] = null;
                }
                else {
                    var $v_6 = $v_4.substr(0, $v_5);
                    var $v_7 = $v_4.substr($v_5 + 1);

                    $v_0[$v_6] = $v_7;
                }
            }
        }
    }
    return $v_0;
};
SP.ScriptHelpers.getUserFieldProperty = function SP_ScriptHelpers$getUserFieldProperty(item, fieldName, propertyName) {
    var $v_0 = null;

    if (!SP.ScriptHelpers.isNullOrUndefinedOrEmpty(item[fieldName])) {
        var $v_1 = item[fieldName];
        var $v_2 = $v_1[0];

        $v_0 = $v_2[propertyName];
    }
    return $v_0;
};
SP.ScriptHelpers.hasPermission = function SP_ScriptHelpers$hasPermission(listPermissionMask, listPermission) {
    return (listPermissionMask & listPermission) === listPermission;
};
SP.ScriptHelpers.newGuid = function SP_ScriptHelpers$newGuid() {
    return (SP.Guid.newGuid()).toString();
};
SP.ScriptHelpers.isNullOrEmptyString = function SP_ScriptHelpers$isNullOrEmptyString(str) {
    var $v_0 = null;

    return str === $v_0 || typeof str === 'undefined' || str === '';
};
SP.ScriptHelpers.isNullOrUndefined = function SP_ScriptHelpers$isNullOrUndefined(obj) {
    var $v_0 = null;

    return obj === $v_0 || typeof obj === 'undefined';
};
SP.ScriptHelpers.isNullOrUndefinedOrEmpty = function SP_ScriptHelpers$isNullOrUndefinedOrEmpty(str) {
    var $v_0 = null;
    var $v_1 = str;

    return $v_1 === $v_0 || typeof $v_1 === 'undefined' || str === '';
};
SP.ScriptHelpers.isUndefined = function SP_ScriptHelpers$isUndefined(obj) {
    return typeof obj === 'undefined';
};
SP.ScriptHelpers.replaceOrAddQueryString = function SP_ScriptHelpers$replaceOrAddQueryString(url, key, value) {
    key = escapeProperlyCore(key, false);
    value = escapeProperlyCore(value, false);
    return StURLSetVar2(url, key, value);
};
SP.ScriptHelpers.removeHtml = function SP_ScriptHelpers$removeHtml(str) {
    var $v_0 = document.createElement('div');

    $v_0.innerHTML = str;
    SP.ScriptHelpers.removeStyleChildren($v_0);
    return GetInnerText($v_0);
};
SP.ScriptHelpers.removeStyleChildren = function SP_ScriptHelpers$removeStyleChildren(element) {
    var $v_0 = element.getElementsByTagName('style');

    if (!SP.ScriptHelpers.isNullOrUndefined($v_0)) {
        for (var $v_1 = $v_0.length - 1; $v_1 >= 0; $v_1--) {
            var $v_2 = $v_0[$v_1];

            if (!SP.ScriptHelpers.isNullOrUndefined($v_2) && !SP.ScriptHelpers.isNullOrUndefined($v_2.parentNode)) {
                $v_2.parentNode.removeChild($v_2);
            }
        }
    }
};
SP.ScriptHelpers.removeHtmlAndTrimStringWithEllipsis = function SP_ScriptHelpers$removeHtmlAndTrimStringWithEllipsis(str, maxLength) {
    var $v_0 = '';

    $v_0 = SP.ScriptHelpers.removeHtml(str);
    if (maxLength >= 3 && !SP.ScriptHelpers.isNullOrUndefinedOrEmpty($v_0)) {
        if ($v_0.length > maxLength) {
            var $v_1 = Strings.STS.L_SPEllipsis;

            $v_0 = $v_0.substr(0, Math.max(maxLength - $v_1.length, 0));
            $v_0 += $v_1;
        }
    }
    return $v_0;
};
SP.ScriptHelpers.setTextAreaElementValue = function SP_ScriptHelpers$setTextAreaElementValue(textAreaElement, newValue) {
    textAreaElement.value = newValue;
};
SP.ScriptHelpers.truncateToInt = function SP_ScriptHelpers$truncateToInt(n) {
    return n > 0 ? Math.floor(n) : Math.ceil(n);
};
SP.ScriptHelpers.urlCombine = function SP_ScriptHelpers$urlCombine(path1, path2) {
    if (path1.endsWith('/')) {
        path1 = path1.substr(0, path1.length - 1);
    }
    if (path2.startsWith('/')) {
        path2 = path2.length > 1 ? path2.substr(1) : '';
    }
    return path1 + '/' + path2;
};
SP.ScriptHelpers.resizeImageToSquareLength = function SP_ScriptHelpers$resizeImageToSquareLength(imgElement, squareLength) {
    if (SP.ScriptHelpers.isNullOrUndefined(squareLength) || isNaN(squareLength) || SP.ScriptHelpers.isNullOrUndefined(imgElement) || imgElement.tagName !== 'IMG' || imgElement.style.visibility === 'hidden') {
        return;
    }
    var $v_0 = SP.ScriptHelpers.isNullOrUndefined(imgElement.naturalWidth) ? imgElement.clientWidth : imgElement.naturalWidth;
    var $v_1 = SP.ScriptHelpers.isNullOrUndefined(imgElement.naturalHeight) ? imgElement.clientHeight : imgElement.naturalHeight;

    if (isNaN($v_0) || isNaN($v_1)) {
        return;
    }
    if ($v_0 < $v_1) {
        imgElement.width = squareLength;
        SP.ScriptHelpers.$p(imgElement, $v_1, $v_0, squareLength, false);
    }
    else if ($v_0 > $v_1) {
        imgElement.height = squareLength;
        SP.ScriptHelpers.$p(imgElement, $v_0, $v_1, squareLength, true);
    }
    else {
        imgElement.width = squareLength;
    }
};
SP.ScriptHelpers.$p = function SP_ScriptHelpers$$p($p0, $p1, $p2, $p3, $p4) {
    if ($p2 !== $p3) {
        var $v_0 = 1 * $p3 / $p2;
        var $v_1 = Math.round(($v_0 * $p1 - $p3) / 2);
        var $v_2 = $v_1 + 'px';

        if ($p4) {
            var $v_3 = !SP.ScriptHelpers.isNullOrUndefined(document.body.parentNode) && document.body.parentNode.dir === 'rtl';

            if ($v_3) {
                $p0.style.left = $v_2;
            }
            else {
                $p0.style.right = $v_2;
            }
        }
        else {
            $p0.style.bottom = $v_2;
        }
        $p0.className += ' ms-positionRelative';
    }
};
function ListContext() {
    this.Templates = {};
}
ListContext.prototype = {
    BaseViewID: 0,
    clvp: null,
    ctxId: 0,
    editFormUrl: null,
    displayFormUrl: null,
    newFormUrl: null,
    ListTemplateType: 0,
    CurrentItem: null,
    CurrentItemIdx: 0,
    CurrentFieldSchema: null,
    CurrentUserId: 0,
    ListData: null,
    listName: null,
    ListTitle: null,
    ListSchema: null,
    listUrlDir: null,
    view: null,
    RecycleBinEnabled: 0,
    RenderView: null,
    RenderHeader: null,
    RenderBody: null,
    RenderFooter: null,
    RenderGroups: null,
    RenderItems: null,
    RenderFields: null,
    SiteTitle: null,
    OnPreRender: null,
    OnPostRender: null,
    HttpRoot: null,
    wpq: null,
    overrideSelectCommand: null,
    authorRenderCallbackDetail: null,
    forumViewState: null,
    imagesPath: null
};
SP.CScope = function SP_CScope(name) {
    if (!name) {
        throw Error.create('Must specify a valid name for the scope');
    }
    try {
        var $v_0 = Type.parse('CScope');

        this.$G_0 = new $v_0([name]);
    }
    catch ($$e_2) { }
};
SP.CScope.prototype = {
    start: function SP_CScope$start() {
        if (!this.$G_0) {
            return;
        }
        try {
            this.$G_0.Start();
        }
        catch ($$e_0) { }
    },
    stop: function SP_CScope$stop() {
        if (!this.$G_0) {
            return;
        }
        try {
            this.$G_0.Stop();
        }
        catch ($$e_0) { }
    },
    $G_0: null
};
SP.PageContextInfo = function SP_PageContextInfo() {
};
SP.PageContextInfo.get_$2 = function SP_PageContextInfo$get_$2() {
    if (!SP.PageContextInfo.$Z) {
        SP.PageContextInfo.$Z = window._spPageContextInfo;
    }
    return SP.PageContextInfo.$Z;
};
SP.PageContextInfo.get_siteServerRelativeUrl = function SP_PageContextInfo$get_siteServerRelativeUrl() {
    return (SP.PageContextInfo.get_$2()).siteServerRelativeUrl;
};
SP.PageContextInfo.get_webServerRelativeUrl = function SP_PageContextInfo$get_webServerRelativeUrl() {
    return (SP.PageContextInfo.get_$2()).webServerRelativeUrl;
};
SP.PageContextInfo.get_webAbsoluteUrl = function SP_PageContextInfo$get_webAbsoluteUrl() {
    return (SP.PageContextInfo.get_$2()).webAbsoluteUrl;
};
SP.PageContextInfo.get_serverRequestPath = function SP_PageContextInfo$get_serverRequestPath() {
    return (SP.PageContextInfo.get_$2()).serverRequestPath;
};
SP.PageContextInfo.get_siteAbsoluteUrl = function SP_PageContextInfo$get_siteAbsoluteUrl() {
    return (SP.PageContextInfo.get_$2()).siteAbsoluteUrl;
};
SP.PageContextInfo.get_webTitle = function SP_PageContextInfo$get_webTitle() {
    return (SP.PageContextInfo.get_$2()).webTitle;
};
SP.PageContextInfo.get_tenantAppVersion = function SP_PageContextInfo$get_tenantAppVersion() {
    return (SP.PageContextInfo.get_$2()).tenantAppVersion;
};
SP.PageContextInfo.get_isAppWeb = function SP_PageContextInfo$get_isAppWeb() {
    return (SP.PageContextInfo.get_$2()).isAppWeb;
};
SP.PageContextInfo.get_webLogoUrl = function SP_PageContextInfo$get_webLogoUrl() {
    return (SP.PageContextInfo.get_$2()).webLogoUrl;
};
SP.PageContextInfo.get_webLanguage = function SP_PageContextInfo$get_webLanguage() {
    return (SP.PageContextInfo.get_$2()).webLanguage;
};
SP.PageContextInfo.get_currentLanguage = function SP_PageContextInfo$get_currentLanguage() {
    return (SP.PageContextInfo.get_$2()).currentLanguage;
};
SP.PageContextInfo.get_pageItemId = function SP_PageContextInfo$get_pageItemId() {
    return (SP.PageContextInfo.get_$2()).pageItemId;
};
SP.PageContextInfo.get_pageListId = function SP_PageContextInfo$get_pageListId() {
    return (SP.PageContextInfo.get_$2()).pageListId;
};
SP.PageContextInfo.get_webPermMasks = function SP_PageContextInfo$get_webPermMasks() {
    if (!SP.PageContextInfo.$T) {
        var $v_0 = (SP.PageContextInfo.get_$2()).webPermMasks;

        if (!SP.ScriptUtility.isNullOrUndefined($v_0) && !SP.ContextPermissions.isInstanceOfType($v_0)) {
            SP.PageContextInfo.$T = new SP.ContextPermissions();
            SP.PageContextInfo.$T.fromJson($v_0);
        }
    }
    return SP.PageContextInfo.$T;
};
SP.PageContextInfo.get_currentCultureName = function SP_PageContextInfo$get_currentCultureName() {
    return (SP.PageContextInfo.get_$2()).currentCultureName;
};
SP.PageContextInfo.get_currentUICultureName = function SP_PageContextInfo$get_currentUICultureName() {
    return (SP.PageContextInfo.get_$2()).currentUICultureName;
};
SP.PageContextInfo.get_clientServerTimeDelta = function SP_PageContextInfo$get_clientServerTimeDelta() {
    return (SP.PageContextInfo.get_$2()).clientServerTimeDelta;
};
SP.PageContextInfo.get_userLoginName = function SP_PageContextInfo$get_userLoginName() {
    return (SP.PageContextInfo.get_$2()).userLoginName;
};
SP.PageContextInfo.get_webTemplate = function SP_PageContextInfo$get_webTemplate() {
    return (SP.PageContextInfo.get_$2()).webTemplate;
};
SP.PageContextInfo.prototype = {
    get_pagePersonalizationScope: function SP_PageContextInfo$get_pagePersonalizationScope() {
        return (SP.PageContextInfo.get_$2()).pagePersonalizationScope;
    }
};
SP.ContextPermissions = function SP_ContextPermissions() {
};
SP.ContextPermissions.prototype = {
    $P_0: 0,
    $Q_0: 0,
    fromJson: function SP_ContextPermissions$fromJson(json) {
        this.$P_0 = json.High;
        this.$Q_0 = json.Low;
    },
    has: function SP_ContextPermissions$has(perm) {
        if (!perm) {
            return true;
        }
        if (perm === 65) {
            return (this.$P_0 & 32767) === 32767 && this.$Q_0 === 65535;
        }
        var $v_0 = perm;

        $v_0 = $v_0 - 1;
        var $v_1 = 1;

        if ($v_0 >= 0 && $v_0 < 32) {
            $v_1 = $v_1 << $v_0;
            return 0 !== (this.$Q_0 & $v_1);
        }
        else if ($v_0 >= 32 && $v_0 < 64) {
            $v_1 = $v_1 << $v_0 - 32;
            return 0 !== (this.$P_0 & $v_1);
        }
        return false;
    },
    hasPermissions: function SP_ContextPermissions$hasPermissions(high, low) {
        return (this.$P_0 & high) === high && (this.$Q_0 & low) === low;
    }
};
Type.registerNamespace('SP.UI');
SP.UI.Command = function SP_UI_Command(name, displayName) {
    this.$$d_$w_0 = Function.createDelegate(this, this.$w_0);
    this.$S_0 = name;
    this.$V_0 = displayName;
    this.$O_0 = true;
    this.$b_0 = displayName;
};
SP.UI.Command.prototype = {
    $S_0: null,
    $V_0: null,
    $b_0: null,
    $O_0: false,
    $C_0: false,
    $J_0: null,
    $Y_0: null,
    $4_0: null,
    get_displayName: function SP_UI_Command$get_displayName() {
        return this.$V_0;
    },
    set_displayName: function SP_UI_Command$set_displayName(value) {
        this.$V_0 = value;
        return value;
    },
    get_tooltip: function SP_UI_Command$get_tooltip() {
        return this.$b_0;
    },
    set_tooltip: function SP_UI_Command$set_tooltip(value) {
        this.$b_0 = value;
        return value;
    },
    get_isEnabled: function SP_UI_Command$get_isEnabled() {
        return this.$O_0;
    },
    set_isEnabled: function SP_UI_Command$set_isEnabled(value) {
        if (this.$O_0 !== value) {
            this.$O_0 = value;
            if (!this.$C_0) {
                this.$18_0();
            }
        }
        return value;
    },
    get_href: function SP_UI_Command$get_href() {
        return '#';
    },
    get_name: function SP_UI_Command$get_name() {
        return this.$S_0;
    },
    get_elementIDPrefix: function SP_UI_Command$get_elementIDPrefix() {
        return this.$4_0;
    },
    set_elementIDPrefix: function SP_UI_Command$set_elementIDPrefix(value) {
        this.$4_0 = value;
        return value;
    },
    get_linkElement: function SP_UI_Command$get_linkElement() {
        if (!this.$J_0) {
            this.$J_0 = $get(this.$X_0('Link'));
        }
        return this.$J_0;
    },
    get_$17_0: function SP_UI_Command$get_$17_0() {
        if (!this.$Y_0) {
            this.$Y_0 = $get(this.$X_0('Root'));
        }
        return this.$Y_0;
    },
    get_isDropDownCommand: function SP_UI_Command$get_isDropDownCommand() {
        return this.$C_0;
    },
    set_isDropDownCommand: function SP_UI_Command$set_isDropDownCommand(value) {
        this.$C_0 = value;
        return value;
    },
    attachEvents: function SP_UI_Command$attachEvents() {
        if (this.get_isEnabled() && !SP.ScriptHelpers.isNullOrUndefined(this.get_linkElement())) {
            $addHandler(this.get_linkElement(), 'click', this.$$d_$w_0);
        }
    },
    onClick: function SP_UI_Command$onClick() {
    },
    render: function SP_UI_Command$render(builder) {
        this.$J_0 = null;
        builder.addCommunitiesCssClass('cmdSpaceListItem');
        builder.addAttribute('id', this.$X_0('Root'));
        builder.renderBeginTag('li');
        builder.write(this.$o_0());
        builder.renderEndTag();
    },
    $w_0: function SP_UI_Command$$w_0($p0) {
        $p0.preventDefault();
        $p0.stopPropagation();
        this.onClick();
    },
    $16_0: function SP_UI_Command$$16_0($p0) {
        if (!SP.ScriptHelpers.isNullOrUndefinedOrEmpty(this.get_tooltip())) {
            $p0.addAttribute('title', this.get_tooltip());
        }
        $p0.addAttribute('href', this.get_href());
        $p0.addAttribute('id', this.$X_0('Link'));
        $p0.addCssClass('ms-secondaryCommandLink');
        $p0.renderBeginTag('a');
        $p0.write(this.get_displayName());
        $p0.renderEndTag();
    },
    $o_0: function SP_UI_Command$$o_0() {
        var $v_0 = new SP.HtmlBuilder();

        this.$J_0 = null;
        this.$16_0($v_0);
        return $v_0.toString();
    },
    $18_0: function SP_UI_Command$$18_0() {
        (this.get_$17_0()).innerHTML = this.$o_0();
        this.attachEvents();
    },
    $X_0: function SP_UI_Command$$X_0($p0) {
        return this.$4_0 + '-' + this.$S_0 + '-' + $p0;
    }
};
SP.UI.CommandBar = function SP_UI_CommandBar() {
    this.$3_0 = [];
    this.$7_0 = 'commandBar' + SP.UI.CommandBar.$e;
    SP.UI.CommandBar.$d[this.$7_0] = this;
    SP.UI.CommandBar.$e++;
};
SP.UI.CommandBar.onMenuItemClick = function SP_UI_CommandBar$onMenuItemClick(controlElementID, itemIndex) {
    var $v_0 = SP.UI.CommandBar.$d[controlElementID];

    if (!SP.ScriptHelpers.isNullOrUndefined($v_0)) {
        var $v_1 = $v_0.$3_0[itemIndex];

        $v_1.onClick();
    }
};
SP.UI.CommandBar.prototype = {
    $3_0: null,
    $M_0: null,
    $9_0: 2,
    $7_0: null,
    $K_0: null,
    get_commands: function SP_UI_CommandBar$get_commands() {
        return this.$3_0;
    },
    get_dropDownThreshold: function SP_UI_CommandBar$get_dropDownThreshold() {
        return this.$9_0;
    },
    set_dropDownThreshold: function SP_UI_CommandBar$set_dropDownThreshold(value) {
        this.$9_0 = value;
        return value;
    },
    get_elementID: function SP_UI_CommandBar$get_elementID() {
        return this.$7_0;
    },
    get_overrideClass: function SP_UI_CommandBar$get_overrideClass() {
        return this.$K_0;
    },
    set_overrideClass: function SP_UI_CommandBar$set_overrideClass(value) {
        this.$K_0 = value;
        return value;
    },
    addCommand: function SP_UI_CommandBar$addCommand(action) {
        action.$4_0 = this.$7_0;
        Array.add(this.$3_0, action);
    },
    insertCommand: function SP_UI_CommandBar$insertCommand(action, position) {
        action.$4_0 = this.$7_0;
        Array.insert(this.$3_0, position, action);
    },
    render: function SP_UI_CommandBar$render(builder) {
        if (!SP.ScriptHelpers.isNullOrUndefined(this.$K_0)) {
            builder.addCssClass(this.$K_0);
        }
        builder.addAttribute('id', this.$7_0);
        builder.renderBeginTag('span');
        builder.addCssClass('ms-noWrap');
        builder.renderBeginTag('span');
        builder.addCommunitiesCssClass('forumCmdList');
        builder.renderBeginTag('ul');
        var $v_0 = this.$3_0.length;

        if ($v_0 > this.$9_0) {
            var $v_1 = new SP.UI.CommandBar.MenuCommand(this, 'menu', STSHtmlEncode(Strings.STS.L_OpenMenu_Text));

            this.insertCommand($v_1, this.$9_0);
        }
        for (var $v_2 = 0; $v_2 < $v_0 && $v_2 <= this.$9_0; $v_2++) {
            var $v_3 = this.$3_0[$v_2];

            $v_3.$C_0 = false;
            $v_3.render(builder);
        }
        builder.renderEndTag();
        builder.renderEndTag();
        builder.renderEndTag();
    },
    attachEvents: function SP_UI_CommandBar$attachEvents() {
        for (var $v_0 = 0, $v_1 = this.$3_0.length; $v_0 < $v_1 && $v_0 <= this.$9_0; $v_0++) {
            var $v_2 = this.$3_0[$v_0];

            $v_2.attachEvents();
        }
    },
    findCommandByName: function SP_UI_CommandBar$findCommandByName(name) {
        var $v_0 = null;

        for (var $v_1 = 0, $v_2 = this.$3_0.length; $v_1 < $v_2; $v_1++) {
            var $v_3 = this.$3_0[$v_1];

            if ($v_3.$S_0 === name) {
                $v_0 = $v_3;
                break;
            }
        }
        return $v_0;
    },
    $r_0: function SP_UI_CommandBar$$r_0() {
        if (!this.$M_0) {
            this.$M_0 = SP.UI.Menu.create(this.$7_0 + '-menu');
            for (var $v_0 = this.$9_0 + 1, $v_1 = this.$3_0.length; $v_0 < $v_1; $v_0++) {
                var $v_2 = this.$3_0[$v_0];

                $v_2.$C_0 = true;
                this.$M_0.addMenuItem($v_2.get_displayName(), 'SP.UI.CommandBar.onMenuItemClick(\'' + this.$7_0 + '\',' + $v_0 + ');', null, null, $v_0, null, null);
            }
        }
    }
};
SP.UI.CommandBar.MenuCommand = function SP_UI_CommandBar_MenuCommand($p0, $p1, $p2) {
    SP.UI.CommandBar.MenuCommand.initializeBase(this, [$p1, $p2]);
    this.$U_1 = $p0;
    this.$C_0 = true;
};
SP.UI.CommandBar.MenuCommand.prototype = {
    $U_1: null,
    $L_1: null,
    onClick: function SP_UI_CommandBar_MenuCommand$onClick() {
        var $$t_0 = this;

        EnsureScriptFunc('SP.js', 'SP', function() {
            $$t_0.$U_1.$r_0();
            $$t_0.$U_1.$M_0.show($$t_0.$L_1, false, false, -1);
        });
    },
    render: function SP_UI_CommandBar_MenuCommand$render($p0) {
        this.$15_1($p0);
    },
    get_linkElement: function SP_UI_CommandBar_MenuCommand$get_linkElement() {
        if (SP.ScriptHelpers.isNullOrUndefined(this.$L_1)) {
            this.$L_1 = $get(this.$4_0 + '-menuContainer');
        }
        return this.$L_1;
    },
    $15_1: function SP_UI_CommandBar_MenuCommand$$15_1($p0) {
        var $v_0 = this.$4_0 + '-menuContainer';
        var $v_1 = this.$4_0 + '-topSpan';
        var $v_2 = this.$4_0 + '-menu';
        var $v_3 = this.$4_0 + '-link';

        $p0.addCommunitiesCssClass('cmdSpaceListItem');
        $p0.addAttribute('id', this.$4_0 + '-dropDownMenu');
        $p0.renderBeginTag('li');
        $p0.addAttribute('data-sp-cancelWPSelect', 'true');
        $p0.addAttribute('id', STSHtmlEncode($v_0));
        $p0.renderBeginTag('span');
        $p0.addAttribute('id', $v_1);
        $p0.addAttribute('hoveractive', 'ms-menu-althov-active ms-core-form-heading');
        $p0.addAttribute('hoverinactive', 'ms-menu-althov');
        $p0.addAttribute('foa', 'MMU_GetMenuFromClient(\'' + STSHtmlEncode($v_3) + '\')');
        $p0.addAttribute('onmouseover', 'MMU_PopMenuIfShowing(this); MMU_EcbTableMouseOverOut(this, true)');
        $p0.addAttribute('oncontextmenu', 'ClkElmt(this); return false;');
        $p0.addCssClass('ms-menu-althov');
        $p0.renderBeginTag('span');
        $p0.addAttribute('id', $v_3);
        $p0.addAttribute('accesskey', STSHtmlEncode(Strings.STS.L_SelectBackColorKey_TEXT));
        $p0.addAttribute('href', 'javascript:;');
        $p0.addAttribute('oncontextmenu', 'ClkElmt(this); return false;');
        $p0.addAttribute('onfocus', 'MMU_EcbLinkOnFocusBlur(byid(\'' + $v_2 + '\'), this, true);');
        $p0.addAttribute('onkeydown', 'MMU_EcbLinkOnKeyDown(byid(\'' + $v_2 + '\'), MMU_GetMenuFromClientId(\'' + $v_3 + '\'), event);');
        $p0.addAttribute('menutokenvalues', 'MENUCLIENTID=' + $v_3 + ',TEMPLATECLIENTID=' + $v_2);
        $p0.addAttribute('serverclientid', $v_3);
        $p0.addCssClass('ms-menu-a');
        $p0.addCssClass('ms-pivotControl-overflowDot');
        $p0.renderBeginTag('a');
        $p0.addAttribute('src', GetThemedImageUrl('spcommon.png'));
        $p0.addAttribute('alt', this.get_tooltip());
        $p0.addAttribute('title', this.get_tooltip());
        $p0.addCssClass('ms-ellipsis-icon');
        $p0.addCommunitiesCssClass('cmdMoreIcon');
        $p0.renderBeginTag('img');
        $p0.renderEndTag();
        $p0.renderEndTag();
        $p0.renderEndTag();
        $p0.renderEndTag();
        $p0.renderEndTag();
    }
};
SP.UI.PagingControl = function SP_UI_PagingControl(id) {
    this.$$d_$12_0 = Function.createDelegate(this, this.$12_0);
    this.$$d_$u_0 = Function.createDelegate(this, this.$u_0);
    this.$$d_$13_0 = Function.createDelegate(this, this.$13_0);
    this.id = id;
    var $v_0 = document.body.parentNode.dir === 'rtl';

    this.$D_0 = new SP.UI.PagingControl.PagingButton(1, 0, 'promotedlinks_prev_' + this.id, Strings.STS.L_Prev, $v_0 ? 'right' : 'left');
    this.$F_0 = new SP.UI.PagingControl.PagingButton(1, 0, 'promotedlinks_next_' + this.id, Strings.STS.L_Next, $v_0 ? 'left' : 'right');
    this.$14_0();
};
SP.UI.PagingControl.prototype = {
    id: null,
    $g_0: 0,
    $W_0: 0,
    $D_0: null,
    $F_0: null,
    render: function SP_UI_PagingControl$render(innerContent) {
        var $v_0 = new SP.HtmlBuilder();

        this.$D_0.render($v_0);
        $v_0.addAttribute('class', this.get_innerContentClass());
        $v_0.addAttribute('id', 'promotedlinks_content_' + this.id);
        $v_0.renderBeginTag('span');
        if (!SP.ScriptHelpers.isNullOrUndefinedOrEmpty(innerContent)) {
            $v_0.write(innerContent);
        }
        $v_0.renderEndTag();
        this.$F_0.render($v_0);
        return $v_0.toString();
    },
    postRender: function SP_UI_PagingControl$postRender() {
        this.$D_0.registerHandlers(this.$$d_$13_0);
        this.$F_0.registerHandlers(this.$$d_$u_0);
        this.onWindowResized();
    },
    get_innerContent: function SP_UI_PagingControl$get_innerContent() {
        return $get('promotedlinks_content_' + this.id);
    },
    get_innerContentClass: function SP_UI_PagingControl$get_innerContentClass() {
        return 'ms-promlink-button-inner';
    },
    $13_0: function SP_UI_PagingControl$$13_0($p0) {
        $p0.preventDefault();
        if (this.$D_0.get_buttonState() === 2) {
            this.onPrev();
        }
    },
    $u_0: function SP_UI_PagingControl$$u_0($p0) {
        $p0.preventDefault();
        if (this.$F_0.get_buttonState() === 2) {
            this.onNext();
        }
    },
    setButtonState: function SP_UI_PagingControl$setButtonState(buttonId, state) {
        if (buttonId === 1) {
            this.$D_0.set_buttonState(state);
        }
        else if (buttonId === 2) {
            this.$F_0.set_buttonState(state);
        }
    },
    getButtonState: function SP_UI_PagingControl$getButtonState(buttonId) {
        var $v_0 = 0;

        if (buttonId === 1) {
            $v_0 = this.$D_0.get_buttonState();
        }
        else if (buttonId === 2) {
            $v_0 = this.$F_0.get_buttonState();
        }
        return $v_0;
    },
    $14_0: function SP_UI_PagingControl$$14_0() {
        $addHandler(window, 'resize', this.$$d_$12_0);
    },
    $12_0: function SP_UI_PagingControl$$12_0($p0) {
        this.$W_0++;
        var $v_0 = this.$W_0;
        var $$t_3 = this;

        window.setTimeout(function() {
            if ($v_0 !== $$t_3.$W_0) {
                return;
            }
            var $v_1 = document.body.clientWidth;

            if ($v_1 !== $$t_3.$g_0) {
                $$t_3.$g_0 = $v_1;
                $$t_3.onWindowResized();
            }
        }, 200);
    },
    onWindowResized: function SP_UI_PagingControl$onWindowResized() {
    }
};
SP.UI.PagingControl.ButtonIDs = function() {
};
SP.UI.PagingControl.ButtonIDs.prototype = {
    prev: 1,
    next: 2
};
SP.UI.PagingControl.ButtonIDs.registerEnum('SP.UI.PagingControl.ButtonIDs', false);
SP.UI.PagingControl.ButtonState = function() {
};
SP.UI.PagingControl.ButtonState.prototype = {
    hidden: 0,
    disabled: 1,
    enabled: 2
};
SP.UI.PagingControl.ButtonState.registerEnum('SP.UI.PagingControl.ButtonState', false);
SP.UI.PagingControl.PagingButton = function SP_UI_PagingControl_PagingButton($p0, $p1, $p2, $p3, $p4) {
    this.$$d_$v_0 = Function.createDelegate(this, this.$v_0);
    this.$$d_$x_0 = Function.createDelegate(this, this.$x_0);
    this.$$d_$11_0 = Function.createDelegate(this, this.$11_0);
    this.$$d_$y_0 = Function.createDelegate(this, this.$y_0);
    this.$$d_$z_0 = Function.createDelegate(this, this.$z_0);
    this.$$d_$10_0 = Function.createDelegate(this, this.$10_0);
    this.$6_0 = $p0;
    this.$8_0 = $p1;
    this.$B_0 = $p2;
    this.$a_0 = $p3;
    this.$c_0 = $p4;
};
SP.UI.PagingControl.PagingButton.prototype = {
    $6_0: 0,
    $8_0: 0,
    $B_0: null,
    $a_0: null,
    $c_0: null,
    render: function SP_UI_PagingControl_PagingButton$render($p0) {
        $p0.addAttribute('class', this.$h_0());
        $p0.addAttribute('id', this.$B_0);
        $p0.addAttribute('title', STSHtmlEncode(this.$a_0));
        $p0.addAttribute('href', '#');
        $p0.renderBeginTag('a');
        $p0.addAttribute('class', 'ms-promlink-button-image');
        $p0.renderBeginTag('span');
        $p0.addAttribute('class', this.$i_0());
        $p0.addAttribute('id', this.$B_0 + 'img');
        $p0.addAttribute('alt', STSHtmlEncode(this.$a_0));
        $p0.addAttribute('src', GetThemedImageUrl('spcommon.png'));
        $p0.renderBeginTag('img');
        $p0.renderEndTag();
        $p0.renderEndTag();
        $p0.renderEndTag();
    },
    registerHandlers: function SP_UI_PagingControl_PagingButton$registerHandlers($p0) {
        var $v_0 = $get(this.$B_0);

        if (!SP.ScriptHelpers.isNullOrUndefined($v_0)) {
            $addHandler($v_0, 'click', $p0);
            $addHandler($v_0, 'mouseover', this.$$d_$10_0);
            $addHandler($v_0, 'mouseout', this.$$d_$z_0);
            $addHandler($v_0, 'mousedown', this.$$d_$y_0);
            $addHandler($v_0, 'mouseup', this.$$d_$11_0);
            $addHandler($v_0, 'focus', this.$$d_$x_0);
            $addHandler($v_0, 'blur', this.$$d_$v_0);
        }
    },
    $R_0: false,
    $x_0: function SP_UI_PagingControl_PagingButton$$x_0($p0) {
        if (this.$8_0 !== 2) {
            this.$I_0($p0, 1);
        }
    },
    $v_0: function SP_UI_PagingControl_PagingButton$$v_0($p0) {
        this.$I_0($p0, 0);
    },
    $10_0: function SP_UI_PagingControl_PagingButton$$10_0($p0) {
        if (!this.$R_0) {
            this.$R_0 = true;
            this.$I_0($p0, 1);
        }
    },
    $z_0: function SP_UI_PagingControl_PagingButton$$z_0($p0) {
        this.$R_0 = false;
        this.$I_0($p0, 0);
    },
    $y_0: function SP_UI_PagingControl_PagingButton$$y_0($p0) {
        if (this.$6_0 === 2) {
            this.$I_0($p0, 2);
        }
    },
    $11_0: function SP_UI_PagingControl_PagingButton$$11_0($p0) {
        this.$I_0($p0, this.$R_0 ? 1 : 0);
    },
    $I_0: function SP_UI_PagingControl_PagingButton$$I_0($p0, $p1) {
        $p0.preventDefault();
        this.$8_0 = $p1;
        this.$q_0();
    },
    get_buttonState: function SP_UI_PagingControl_PagingButton$get_buttonState() {
        return this.$6_0;
    },
    set_buttonState: function SP_UI_PagingControl_PagingButton$set_buttonState($p0) {
        if ($p0 !== this.$6_0) {
            this.$6_0 = $p0;
            this.$q_0();
        }
        return $p0;
    },
    $q_0: function SP_UI_PagingControl_PagingButton$$q_0() {
        var $v_0 = $get(this.$B_0);

        if (null !== $v_0) {
            $v_0.className = this.$h_0();
            $v_0.setAttribute('aria-hidden', !this.$6_0 ? 'true' : 'false');
        }
        $v_0 = $get(this.$B_0 + 'img');
        if (null !== $v_0) {
            $v_0.className = this.$i_0();
        }
    },
    $h_0: function SP_UI_PagingControl_PagingButton$$h_0() {
        var $v_0 = 'ms-commandLink ms-promlink-button ms-promlink-button';

        switch (this.$6_0) {
        case 2:
            $v_0 += '-enabled';
            switch (this.$8_0) {
            case 1:
                $v_0 += '-hover';
                break;
            case 2:
                $v_0 += '-pressed';
                break;
            }
            break;
        case 1:
            $v_0 += '-disabled';
            if (this.$8_0 === 1) {
                $v_0 += '-hover';
            }
            break;
        case 0:
            $v_0 += '-hidden';
            break;
        }
        return $v_0;
    },
    $i_0: function SP_UI_PagingControl_PagingButton$$i_0() {
        var $v_0 = 'ms-promlink-button-' + this.$c_0;

        if (this.$6_0 === 1) {
            $v_0 += '-disabled';
        }
        else if (this.$8_0 === 1 || this.$8_0 === 2) {
            $v_0 += '-hover';
        }
        return $v_0;
    }
};
SP.UI.UIUtility = function SP_UI_UIUtility() {
};
SP.UI.UIUtility.generateRandomElementId = function SP_UI_UIUtility$generateRandomElementId() {
    var $v_0 = null;
    var $v_1 = null;

    do {
        var $v_2 = Math.random();

        $v_2 = $v_2 * 100000;
        $v_2 = Math.round($v_2);
        $v_0 = 'rnd' + $v_2.toString();
        $v_1 = $get($v_0);
    } while ($v_1);
    return $v_0;
};
SP.UI.UIUtility.cancelEvent = function SP_UI_UIUtility$cancelEvent(evt) {
    if (evt) {
        evt.preventDefault();
        evt.stopPropagation();
    }
};
SP.UI.UIUtility.clearChildNodes = function SP_UI_UIUtility$clearChildNodes(elem) {
    if (elem) {
        var $v_0 = [];

        for (var $v_1 = 0; $v_1 < elem.childNodes.length; $v_1++) {
            Array.add($v_0, elem.childNodes[$v_1]);
        }
        for (var $v_2 = 0; $v_2 < $v_0.length; $v_2++) {
            var $v_3 = $v_0[$v_2];

            elem.removeChild($v_3);
        }
    }
};
SP.UI.UIUtility.hideElement = function SP_UI_UIUtility$hideElement(elem) {
    if (elem) {
        elem.style.display = 'none';
    }
};
SP.UI.UIUtility.showElement = function SP_UI_UIUtility$showElement(elem) {
    if (elem) {
        elem.style.display = '';
    }
};
SP.UI.UIUtility.insertBefore = function SP_UI_UIUtility$insertBefore(newElement, referenceElement) {
    var $v_0 = referenceElement.parentNode;

    $v_0.insertBefore(newElement, referenceElement);
};
SP.UI.UIUtility.insertAfter = function SP_UI_UIUtility$insertAfter(newElement, targetElement) {
    var $v_0 = targetElement.parentNode;

    if ($v_0.lastChild === targetElement) {
        $v_0.appendChild(newElement);
    }
    else {
        $v_0.insertBefore(newElement, targetElement.nextSibling);
    }
};
SP.UI.UIUtility.removeNode = function SP_UI_UIUtility$removeNode(elem) {
    if (elem.parentNode) {
        elem.parentNode.removeChild(elem);
    }
};
SP.UI.UIUtility.calculateOffsetLeft = function SP_UI_UIUtility$calculateOffsetLeft(elem) {
    var $v_0 = 0;

    while (elem) {
        $v_0 += elem.offsetLeft;
        elem = elem.offsetParent;
    }
    return $v_0;
};
SP.UI.UIUtility.calculateOffsetTop = function SP_UI_UIUtility$calculateOffsetTop(elem) {
    var $v_0 = 0;

    while (elem) {
        $v_0 += elem.offsetTop;
        elem = elem.offsetParent;
    }
    return $v_0;
};
SP.UI.UIUtility.createHtmlInputText = function SP_UI_UIUtility$createHtmlInputText(text) {
    var $v_0 = document.createElement('input');

    $v_0.setAttribute('type', 'text');
    if (text) {
        $v_0.setAttribute('value', text);
    }
    return $v_0;
};
SP.UI.UIUtility.createHtmlInputCheckbox = function SP_UI_UIUtility$createHtmlInputCheckbox(isChecked) {
    var $v_0 = document.createElement('input');

    $v_0.setAttribute('type', 'checkbox');
    if (isChecked) {
        $v_0.setAttribute('defaultChecked', isChecked);
    }
    return $v_0;
};
SP.UI.UIUtility.setInnerText = function SP_UI_UIUtility$setInnerText(elem, text) {
    setInnerText(elem, text);
};
SP.UI.UIUtility.getInnerText = function SP_UI_UIUtility$getInnerText(elem) {
    return GetInnerText(elem);
};
SP.UI.UIUtility.isTextNode = function SP_UI_UIUtility$isTextNode(elem) {
    return elem.nodeType === 3 || elem.nodeType === 4;
};
SP.UI.UIUtility.isSvgNode = function SP_UI_UIUtility$isSvgNode(elem) {
    if (SP.UI.UIUtility.isTextNode(elem) && elem.parentNode) {
        return SP.UI.UIUtility.isSvgNode(elem.parentNode);
    }
    return elem.nodeType === 1 && !!elem.namespaceURI && elem.namespaceURI === 'http://www.w3.org/2000/svg';
};
SP.UI.UIUtility.isNodeOfType = function SP_UI_UIUtility$isNodeOfType(elem, tagNames) {
    for (var $v_0 = 0; $v_0 < tagNames.length; $v_0++) {
        if (elem.tagName === tagNames[$v_0]) {
            return true;
        }
    }
    return false;
};
SP.UI.UIUtility.$t = function SP_UI_UIUtility$$t($p0) {
    var $v_0 = $p0;

    while ($v_0) {
        var $v_1 = $v_0.className;

        if ($v_1) {
            if ($v_1.indexOf('ms-cui') !== -1 || $v_1.indexOf('ms-rtefocus-invalid') !== -1 || $v_1.indexOf('ms-dlgOverlay') !== -1 || $v_1.indexOf('ms-dlgFrame') !== -1 || $v_1.indexOf('ms-dlgTitle') !== -1 || $v_1.indexOf('ms-dlgTitleText') !== -1 || $v_1.indexOf('ms-siteactions') !== -1 || $v_1.indexOf('ms-core-deltaSuiteBarRight') !== -1) {
                return true;
            }
        }
        $v_0 = $v_0.parentNode;
    }
    if ($p0.tagName === 'HTML') {
        return true;
    }
    return false;
};
SP.UI.UIUtility.focusValidOnThisNode = function SP_UI_UIUtility$focusValidOnThisNode(node) {
    while (node && SP.UI.UIUtility.isSvgNode(node)) {
        node = node.parentNode;
    }
    if (!node || SP.UI.UIUtility.$f === node) {
        return true;
    }
    if (!SP.UI.UIUtility.$t(node)) {
        SP.UI.UIUtility.$f = node;
        return true;
    }
    else {
        return false;
    }
};
Type.registerNamespace('SP.Utilities');
SP.Utilities.LocUtility = function SP_Utilities_LocUtility() {
};
SP.Utilities.LocUtility.getLocalizedCountValue = function SP_Utilities_LocUtility$getLocalizedCountValue(locText, intervals, count) {
    var $v_0 = '';
    var $v_1 = -1;
    var $v_2 = [];

    Array.addRange($v_2, intervals.split('||'));
    for (var $v_4 = 0, $v_5 = $v_2.length; $v_4 < $v_5; $v_4++) {
        var $v_6 = $v_2[$v_4];

        if (SP.ScriptHelpers.isNullOrEmptyString($v_6)) {
            continue;
        }
        var $v_7 = [];

        Array.addRange($v_7, $v_6.split(','));
        for (var $v_8 = 0, $v_9 = $v_7.length; $v_8 < $v_9; $v_8++) {
            var $v_A = $v_7[$v_8];

            if (SP.ScriptHelpers.isNullOrEmptyString($v_A)) {
                continue;
            }
            if (isNaN(Number.parseInvariant($v_A))) {
                if ($v_A.indexOf('-') !== -1) {
                    var $v_B = $v_A.split('-');

                    if (SP.ScriptHelpers.isNullOrUndefined($v_B) || $v_B.length !== 2) {
                        continue;
                    }
                    var $v_C;
                    var $v_D;

                    if ($v_B[0] === '') {
                        $v_C = 0;
                    }
                    else {
                        if (isNaN(Number.parseInvariant($v_B[0]))) {
                            continue;
                        }
                        else {
                            $v_C = parseInt($v_B[0]);
                        }
                    }
                    if (count >= $v_C) {
                        if ($v_B[1] === '') {
                            $v_1 = $v_4;
                            break;
                        }
                        else {
                            if (isNaN(Number.parseInvariant($v_B[1]))) {
                                continue;
                            }
                            else {
                                $v_D = parseInt($v_B[1]);
                            }
                        }
                        if (count <= $v_D) {
                            $v_1 = $v_4;
                            break;
                        }
                    }
                }
                else if ($v_A.indexOf('*') !== -1) {
                    var $v_E = ($v_A.trim()).replace(new RegExp('\\*', 'g'), '[0-9]*');
                    var $v_F = new RegExp('^' + $v_E + '$');

                    if ($v_F.test(count.toString())) {
                        $v_1 = $v_4;
                        break;
                    }
                }
            }
            else {
                var $v_G = parseInt($v_A);

                if (count === $v_G) {
                    $v_1 = $v_4;
                    break;
                }
            }
        }
        if ($v_1 !== -1) {
            break;
        }
    }
    var $v_3 = locText.split('||');

    if ($v_1 !== -1) {
        $v_0 = $v_3[$v_1];
    }
    return $v_0;
};
SP.Utilities.HttpUtility = function SP_Utilities_HttpUtility() {
};
SP.Utilities.HttpUtility.htmlEncode = function SP_Utilities_HttpUtility$htmlEncode(str) {
    return STSHtmlEncode(str);
};
SP.Utilities.HttpUtility.urlPathEncode = function SP_Utilities_HttpUtility$urlPathEncode(str) {
    return escapeProperlyCore(str, true);
};
SP.Utilities.HttpUtility.urlKeyValueEncode = function SP_Utilities_HttpUtility$urlKeyValueEncode(keyOrValueToEncode) {
    return escapeProperlyCore(keyOrValueToEncode, false);
};
SP.Utilities.HttpUtility.ecmaScriptStringLiteralEncode = function SP_Utilities_HttpUtility$ecmaScriptStringLiteralEncode(scriptLiteralToEncode) {
    return STSScriptEncode(scriptLiteralToEncode);
};
SP.Utilities.HttpUtility.navigateTo = function SP_Utilities_HttpUtility$navigateTo(url) {
    STSNavigate(url);
};
SP.Utilities.HttpUtility.appendSourceAndNavigateTo = function SP_Utilities_HttpUtility$appendSourceAndNavigateTo(url) {
    GoToPage(url);
};
SP.Utilities.HttpUtility.escapeXmlText = function SP_Utilities_HttpUtility$escapeXmlText(toescape) {
    toescape = toescape.replace(SP.Utilities.HttpUtility.$j, '&amp;');
    toescape = toescape.replace(SP.Utilities.HttpUtility.$n, '&#39;');
    toescape = toescape.replace(SP.Utilities.HttpUtility.$k, '&quot;');
    toescape = toescape.replace(SP.Utilities.HttpUtility.$m, '&lt;');
    toescape = toescape.replace(SP.Utilities.HttpUtility.$l, '&gt;');
    return toescape;
};
SP.Utilities.HttpUtility.navigateHttpFolder = function SP_Utilities_HttpUtility$navigateHttpFolder(urlSrc, frameTarget) {
    EnsureScriptFunc('core.js', 'NavigateHttpFolder', function() {
        NavigateHttpFolder(urlSrc, frameTarget);
    });
};
SP.Utilities.UrlBuilder = function SP_Utilities_UrlBuilder(path) {
    this.$E_0 = path;
};
SP.Utilities.UrlBuilder.urlCombine = function SP_Utilities_UrlBuilder$urlCombine(path1, path2) {
    if (path1.endsWith('/')) {
        return path1 + path2;
    }
    else {
        return path1 + '/' + path2;
    }
};
SP.Utilities.UrlBuilder.replaceOrAddQueryString = function SP_Utilities_UrlBuilder$replaceOrAddQueryString(url, key, value) {
    key = SP.Utilities.HttpUtility.urlKeyValueEncode(key);
    value = SP.Utilities.HttpUtility.urlKeyValueEncode(value);
    return StURLSetVar2(url, key, value);
};
SP.Utilities.UrlBuilder.removeQueryString = function SP_Utilities_UrlBuilder$removeQueryString(url, key) {
    key = SP.Utilities.HttpUtility.urlKeyValueEncode(key);
    return RemoveQueryParameterFromUrl(url, key);
};
SP.Utilities.UrlBuilder.prototype = {
    $E_0: null,
    $5_0: null,
    combinePath: function SP_Utilities_UrlBuilder$combinePath(path) {
        this.$E_0 = SP.Utilities.UrlBuilder.urlCombine(this.$E_0, path);
    },
    addKeyValueQueryString: function SP_Utilities_UrlBuilder$addKeyValueQueryString(key, value) {
        if (!this.$5_0) {
            this.$5_0 = new Sys.StringBuilder();
        }
        if (!this.$5_0.isEmpty()) {
            this.$5_0.append('&');
        }
        this.$5_0.append(SP.Utilities.HttpUtility.urlKeyValueEncode(key));
        this.$5_0.append('=');
        this.$5_0.append(SP.Utilities.HttpUtility.urlKeyValueEncode(value));
    },
    get_url: function SP_Utilities_UrlBuilder$get_url() {
        if (SP.ScriptUtility.isNullOrEmptyString(this.$E_0)) {
            return '';
        }
        if (!this.$5_0 || this.$5_0.isEmpty()) {
            return this.$E_0;
        }
        return this.$E_0 + '?' + this.$5_0.toString();
    },
    toString: function SP_Utilities_UrlBuilder$toString() {
        return this.get_url();
    }
};
SP.Utilities.VersionUtility = function SP_Utilities_VersionUtility() {
};
SP.Utilities.VersionUtility.get_layoutsLatestVersionRelativeUrl = function SP_Utilities_VersionUtility$get_layoutsLatestVersionRelativeUrl() {
    return '_layouts/15/';
};
SP.Utilities.VersionUtility.get_layoutsLatestVersionUrl = function SP_Utilities_VersionUtility$get_layoutsLatestVersionUrl() {
    return '/_layouts/15/';
};
SP.Utilities.VersionUtility.getLayoutsPageUrl = function SP_Utilities_VersionUtility$getLayoutsPageUrl(pageName) {
    return SP.Utilities.UrlBuilder.urlCombine(SP.PageContextInfo.get_webServerRelativeUrl(), '_layouts/15/' + pageName);
};
SP.Utilities.VersionUtility.getImageUrl = function SP_Utilities_VersionUtility$getImageUrl(imageName) {
    return '/_layouts/15/images/' + imageName;
};
SP.HtmlBuilder.registerClass('SP.HtmlBuilder');
SP.HtmlBuilder.Attribute.registerClass('SP.HtmlBuilder.Attribute');
SP.ScriptHelpers.registerClass('SP.ScriptHelpers');
ListContext.registerClass('ListContext');
SP.CScope.registerClass('SP.CScope');
SP.PageContextInfo.registerClass('SP.PageContextInfo');
SP.ContextPermissions.registerClass('SP.ContextPermissions');
SP.UI.Command.registerClass('SP.UI.Command');
SP.UI.CommandBar.registerClass('SP.UI.CommandBar');
SP.UI.CommandBar.MenuCommand.registerClass('SP.UI.CommandBar.MenuCommand', SP.UI.Command);
SP.UI.PagingControl.registerClass('SP.UI.PagingControl');
SP.UI.PagingControl.PagingButton.registerClass('SP.UI.PagingControl.PagingButton');
SP.UI.UIUtility.registerClass('SP.UI.UIUtility');
SP.Utilities.LocUtility.registerClass('SP.Utilities.LocUtility');
SP.Utilities.HttpUtility.registerClass('SP.Utilities.HttpUtility');
SP.Utilities.UrlBuilder.registerClass('SP.Utilities.UrlBuilder');
SP.Utilities.VersionUtility.registerClass('SP.Utilities.VersionUtility');
function sp_init_initialize() {
    SP.PageContextInfo.$Z = null;
    SP.PageContextInfo.$T = null;
    SP.UI.CommandBar.$d = {};
    SP.UI.CommandBar.$e = 0;
    SP.UI.UIUtility.$f = null;
    SP.Utilities.HttpUtility.$j = new RegExp('&', 'g');
    SP.Utilities.HttpUtility.$n = new RegExp('\'', 'g');
    SP.Utilities.HttpUtility.$k = new RegExp('\"', 'g');
    SP.Utilities.HttpUtility.$m = new RegExp('<', 'g');
    SP.Utilities.HttpUtility.$l = new RegExp('>', 'g');
    SP.Utilities.VersionUtility.layoutS_LATESTVERSION_RELATIVE_URL = '_layouts/15/';
    SP.Utilities.VersionUtility.layoutS_LATESTVERSION_URL = '/_layouts/15/';
}
;
sp_init_initialize();
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
if (typeof RegisterModuleInit == "function") {
    RegisterModuleInit("sp.init.js", sp_init_initialize);
}
if (typeof Sys != "undefined" && Sys && Sys.Application) {
    Sys.Application.notifyScriptLoaded();
}
NotifyScriptLoadedAndExecuteWaitingJobs("sp.init.js");
if (typeof spWriteProfilerMark == 'function')
    spWriteProfilerMark("perfMarkEnd_" + "sp.init.js");
