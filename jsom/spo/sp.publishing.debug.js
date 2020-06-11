// JScript File


Type.registerNamespace('SP.Publishing');

SP.Publishing.ChannelPermission = function() {}
SP.Publishing.ChannelPermission.prototype = {
    contributor: 0, 
    viewer: 1, 
    owner: 2
}
SP.Publishing.ChannelPermission.registerEnum('SP.Publishing.ChannelPermission', false);


SP.Publishing.PortalPermission = function() {}
SP.Publishing.PortalPermission.prototype = {
    hubContributor: 0, 
    channelCreator: 1, 
    hubViewer: 2
}
SP.Publishing.PortalPermission.registerEnum('SP.Publishing.PortalPermission', false);


SP.Publishing.VideoPlaybackOrigin = function() {}
SP.Publishing.VideoPlaybackOrigin.prototype = {
    other: 0, 
    videoPortal: 1, 
    embeddedPlayer: 2
}
SP.Publishing.VideoPlaybackOrigin.registerEnum('SP.Publishing.VideoPlaybackOrigin', false);


SP.Publishing.VideoProcessingStatus = function() {}
SP.Publishing.VideoProcessingStatus.prototype = {
    pendingProcessing: 0, 
    processing: 1, 
    readyForPlay: 2, 
    errorOnUploading: 3, 
    errorOnProcessing: 4, 
    timeout: 5, 
    unsupportedFormat: 6, 
    corruptedFile: 7
}
SP.Publishing.VideoProcessingStatus.registerEnum('SP.Publishing.VideoProcessingStatus', false);


SP.Publishing.VideoStreamingFormat = function() {}
SP.Publishing.VideoStreamingFormat.prototype = {
    HLS: 0, 
    streaming: 1
}
SP.Publishing.VideoStreamingFormat.registerEnum('SP.Publishing.VideoStreamingFormat', false);


SP.Publishing.VideoThumbnailChoices = function() {}
SP.Publishing.VideoThumbnailChoices.prototype = {
    custom: -1, 
    first: 0, 
    second: 1, 
    third: 2, 
    fourth: 3, 
    fifth: 4
}
SP.Publishing.VideoThumbnailChoices.registerEnum('SP.Publishing.VideoThumbnailChoices', false);


SP.Publishing.ViewControlState = function() {}
SP.Publishing.ViewControlState.prototype = {
    defaultState: 0, 
    popular: 1, 
    newest: 2, 
    myVideos: 3
}
SP.Publishing.ViewControlState.registerEnum('SP.Publishing.ViewControlState', false);


SP.Publishing.AcronymInformation = function SP_Publishing_AcronymInformation() {
    SP.Publishing.AcronymInformation.initializeBase(this);
}
SP.Publishing.AcronymInformation.prototype = {
    $7_1: null,
    $F_1: null,
    $1_1: 0,
    $3_1: null,
    
    get_acronym: function SP_Publishing_AcronymInformation$get_acronym() {
        return this.$7_1;
    },
    
    set_acronym: function SP_Publishing_AcronymInformation$set_acronym(value) {
        this.$7_1 = value;
        return value;
    },
    
    get_color: function SP_Publishing_AcronymInformation$get_color() {
        return this.$F_1;
    },
    
    set_color: function SP_Publishing_AcronymInformation$set_color(value) {
        this.$F_1 = value;
        return value;
    },
    
    get_lcid: function SP_Publishing_AcronymInformation$get_lcid() {
        return this.$1_1;
    },
    
    set_lcid: function SP_Publishing_AcronymInformation$set_lcid(value) {
        this.$1_1 = value;
        return value;
    },
    
    get_text: function SP_Publishing_AcronymInformation$get_text() {
        return this.$3_1;
    },
    
    set_text: function SP_Publishing_AcronymInformation$set_text(value) {
        this.$3_1 = value;
        return value;
    },
    
    get_typeId: function SP_Publishing_AcronymInformation$get_typeId() {
        return '{df8f1d94-c876-4325-8584-95861846041c}';
    },
    
    writeToXml: function SP_Publishing_AcronymInformation$writeToXml(writer, serializationContext) {
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = [ 'Acronym', 'Color', 'Lcid', 'Text' ];
        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    
    initPropertiesFromJson: function SP_Publishing_AcronymInformation$initPropertiesFromJson(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.Acronym;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$7_1 = ($v_0);
            delete parentNode.Acronym;
        }
        $v_0 = parentNode.Color;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$F_1 = ($v_0);
            delete parentNode.Color;
        }
        $v_0 = parentNode.Lcid;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1_1 = ($v_0);
            delete parentNode.Lcid;
        }
        $v_0 = parentNode.Text;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$3_1 = ($v_0);
            delete parentNode.Text;
        }
    }
}


SP.Publishing.AddinPlugin = function SP_Publishing_AddinPlugin(context) {
    SP.Publishing.AddinPlugin.initializeBase(this, [ context, SP.ClientUtility.getOrCreateObjectPathForConstructor(context, '{698097b9-bbe7-4c07-a37b-23e2f07bc9a4}', arguments) ]);
}
SP.Publishing.AddinPlugin.newObject = function SP_Publishing_AddinPlugin$newObject(context) {
    return new SP.Publishing.AddinPlugin(context, new SP.ObjectPathConstructor(context, '{698097b9-bbe7-4c07-a37b-23e2f07bc9a4}', null));
}
SP.Publishing.AddinPlugin.prototype = {
    
    get_description: function SP_Publishing_AddinPlugin$get_description() {
        this.checkUninitializedProperty('Description');
        return ((this.get_objectData().get_properties()['Description']));
    },
    
    set_description: function SP_Publishing_AddinPlugin$set_description(value) {
        this.get_objectData().get_properties()['Description'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Description', value));
        }
        return value;
    },
    
    get_markup: function SP_Publishing_AddinPlugin$get_markup() {
        this.checkUninitializedProperty('Markup');
        return ((this.get_objectData().get_properties()['Markup']));
    },
    
    set_markup: function SP_Publishing_AddinPlugin$set_markup(value) {
        this.get_objectData().get_properties()['Markup'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Markup', value));
        }
        return value;
    },
    
    get_title: function SP_Publishing_AddinPlugin$get_title() {
        this.checkUninitializedProperty('Title');
        return ((this.get_objectData().get_properties()['Title']));
    },
    
    set_title: function SP_Publishing_AddinPlugin$set_title(value) {
        this.get_objectData().get_properties()['Title'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Title', value));
        }
        return value;
    },
    
    initPropertiesFromJson: function SP_Publishing_AddinPlugin$initPropertiesFromJson(parentNode) {
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.Description;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Description'] = ($v_0);
            delete parentNode.Description;
        }
        $v_0 = parentNode.Markup;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Markup'] = ($v_0);
            delete parentNode.Markup;
        }
        $v_0 = parentNode.Title;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Title'] = ($v_0);
            delete parentNode.Title;
        }
    }
}


SP.Publishing.AddinPluginPropertyNames = function SP_Publishing_AddinPluginPropertyNames() {
}


SP.Publishing.AddinSettings = function SP_Publishing_AddinSettings(context, id) {
    SP.Publishing.AddinSettings.initializeBase(this, [ context, SP.ClientUtility.getOrCreateObjectPathForConstructor(context, '{7bc23bc0-cb63-4523-b967-a910c8b43668}', arguments) ]);
}
SP.Publishing.AddinSettings.newObject = function SP_Publishing_AddinSettings$newObject(context, id) {
    return new SP.Publishing.AddinSettings(context, new SP.ObjectPathConstructor(context, '{7bc23bc0-cb63-4523-b967-a910c8b43668}', [ id ]));
}
SP.Publishing.AddinSettings.prototype = {
    
    get_description: function SP_Publishing_AddinSettings$get_description() {
        this.checkUninitializedProperty('Description');
        return ((this.get_objectData().get_properties()['Description']));
    },
    
    set_description: function SP_Publishing_AddinSettings$set_description(value) {
        this.get_objectData().get_properties()['Description'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Description', value));
        }
        return value;
    },
    
    get_enabled: function SP_Publishing_AddinSettings$get_enabled() {
        this.checkUninitializedProperty('Enabled');
        return ((this.get_objectData().get_properties()['Enabled']));
    },
    
    set_enabled: function SP_Publishing_AddinSettings$set_enabled(value) {
        this.get_objectData().get_properties()['Enabled'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Enabled', value));
        }
        return value;
    },
    
    get_headScript: function SP_Publishing_AddinSettings$get_headScript() {
        this.checkUninitializedProperty('HeadScript');
        return ((this.get_objectData().get_properties()['HeadScript']));
    },
    
    set_headScript: function SP_Publishing_AddinSettings$set_headScript(value) {
        this.get_objectData().get_properties()['HeadScript'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'HeadScript', value));
        }
        return value;
    },
    
    get_htmlEndBody: function SP_Publishing_AddinSettings$get_htmlEndBody() {
        this.checkUninitializedProperty('HtmlEndBody');
        return ((this.get_objectData().get_properties()['HtmlEndBody']));
    },
    
    set_htmlEndBody: function SP_Publishing_AddinSettings$set_htmlEndBody(value) {
        this.get_objectData().get_properties()['HtmlEndBody'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'HtmlEndBody', value));
        }
        return value;
    },
    
    get_htmlStartBody: function SP_Publishing_AddinSettings$get_htmlStartBody() {
        this.checkUninitializedProperty('HtmlStartBody');
        return ((this.get_objectData().get_properties()['HtmlStartBody']));
    },
    
    set_htmlStartBody: function SP_Publishing_AddinSettings$set_htmlStartBody(value) {
        this.get_objectData().get_properties()['HtmlStartBody'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'HtmlStartBody', value));
        }
        return value;
    },
    
    get_id: function SP_Publishing_AddinSettings$get_id() {
        this.checkUninitializedProperty('Id');
        return ((this.get_objectData().get_properties()['Id']));
    },
    
    get_metaTagPagePropertyMappings: function SP_Publishing_AddinSettings$get_metaTagPagePropertyMappings() {
        this.checkUninitializedProperty('MetaTagPagePropertyMappings');
        return ((this.get_objectData().get_properties()['MetaTagPagePropertyMappings']));
    },
    
    set_metaTagPagePropertyMappings: function SP_Publishing_AddinSettings$set_metaTagPagePropertyMappings(value) {
        this.get_objectData().get_properties()['MetaTagPagePropertyMappings'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'MetaTagPagePropertyMappings', value));
        }
        return value;
    },
    
    get_namespace: function SP_Publishing_AddinSettings$get_namespace() {
        this.checkUninitializedProperty('Namespace');
        return ((this.get_objectData().get_properties()['Namespace']));
    },
    
    set_namespace: function SP_Publishing_AddinSettings$set_namespace(value) {
        this.get_objectData().get_properties()['Namespace'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Namespace', value));
        }
        return value;
    },
    
    get_title: function SP_Publishing_AddinSettings$get_title() {
        this.checkUninitializedProperty('Title');
        return ((this.get_objectData().get_properties()['Title']));
    },
    
    set_title: function SP_Publishing_AddinSettings$set_title(value) {
        this.get_objectData().get_properties()['Title'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Title', value));
        }
        return value;
    },
    
    initPropertiesFromJson: function SP_Publishing_AddinSettings$initPropertiesFromJson(parentNode) {
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
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
        $v_0 = parentNode.HeadScript;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['HeadScript'] = ($v_0);
            delete parentNode.HeadScript;
        }
        $v_0 = parentNode.HtmlEndBody;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['HtmlEndBody'] = ($v_0);
            delete parentNode.HtmlEndBody;
        }
        $v_0 = parentNode.HtmlStartBody;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['HtmlStartBody'] = ($v_0);
            delete parentNode.HtmlStartBody;
        }
        $v_0 = parentNode.Id;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Id'] = ($v_0);
            delete parentNode.Id;
        }
        $v_0 = parentNode.MetaTagPagePropertyMappings;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['MetaTagPagePropertyMappings'] = ((SP.DataConvert.fixupType(this.get_context(), $v_0)));
            delete parentNode.MetaTagPagePropertyMappings;
        }
        $v_0 = parentNode.Namespace;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Namespace'] = ($v_0);
            delete parentNode.Namespace;
        }
        $v_0 = parentNode.Title;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Title'] = ($v_0);
            delete parentNode.Title;
        }
    }
}


SP.Publishing.AddinSettingsPropertyNames = function SP_Publishing_AddinSettingsPropertyNames() {
}


SP.Publishing.CustomizableString = function SP_Publishing_CustomizableString(context, objectPath) {
    SP.Publishing.CustomizableString.initializeBase(this, [ context, objectPath ]);
}
SP.Publishing.CustomizableString.prototype = {
    
    get_defaultValue: function SP_Publishing_CustomizableString$get_defaultValue() {
        this.checkUninitializedProperty('DefaultValue');
        return ((this.get_objectData().get_properties()['DefaultValue']));
    },
    
    get_usesDefaultValue: function SP_Publishing_CustomizableString$get_usesDefaultValue() {
        this.checkUninitializedProperty('UsesDefaultValue');
        return ((this.get_objectData().get_properties()['UsesDefaultValue']));
    },
    
    set_usesDefaultValue: function SP_Publishing_CustomizableString$set_usesDefaultValue(value) {
        this.get_objectData().get_properties()['UsesDefaultValue'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'UsesDefaultValue', value));
        }
        return value;
    },
    
    get_value: function SP_Publishing_CustomizableString$get_value() {
        this.checkUninitializedProperty('Value');
        return ((this.get_objectData().get_properties()['Value']));
    },
    
    set_value: function SP_Publishing_CustomizableString$set_value(value) {
        this.get_objectData().get_properties()['Value'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Value', value));
        }
        return value;
    },
    
    initPropertiesFromJson: function SP_Publishing_CustomizableString$initPropertiesFromJson(parentNode) {
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.DefaultValue;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['DefaultValue'] = ($v_0);
            delete parentNode.DefaultValue;
        }
        $v_0 = parentNode.UsesDefaultValue;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['UsesDefaultValue'] = ($v_0);
            delete parentNode.UsesDefaultValue;
        }
        $v_0 = parentNode.Value;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Value'] = ($v_0);
            delete parentNode.Value;
        }
    }
}


SP.Publishing.CustomizableStringPropertyNames = function SP_Publishing_CustomizableStringPropertyNames() {
}


SP.Publishing.DesignPackage = function SP_Publishing_DesignPackage() {
}
SP.Publishing.DesignPackage.install = function SP_Publishing_DesignPackage$install(context, site, info, path) {
    if ((!context)) {
        throw Error.argumentNull('context');
    }
    var $v_0 = new SP.ClientActionInvokeStaticMethod(context, '{d21214d9-63f5-488b-a665-2b7f9abc1604}', 'Install', [ site, info, path ]);
    context.addQuery($v_0);
}
SP.Publishing.DesignPackage.unInstall = function SP_Publishing_DesignPackage$unInstall(context, site, info) {
    if ((!context)) {
        throw Error.argumentNull('context');
    }
    var $v_0 = new SP.ClientActionInvokeStaticMethod(context, '{d21214d9-63f5-488b-a665-2b7f9abc1604}', 'UnInstall', [ site, info ]);
    context.addQuery($v_0);
}
SP.Publishing.DesignPackage.apply = function SP_Publishing_DesignPackage$apply(context, site, info) {
    if ((!context)) {
        throw Error.argumentNull('context');
    }
    var $v_0 = new SP.ClientActionInvokeStaticMethod(context, '{d21214d9-63f5-488b-a665-2b7f9abc1604}', 'Apply', [ site, info ]);
    context.addQuery($v_0);
}
SP.Publishing.DesignPackage.exportEnterprise = function SP_Publishing_DesignPackage$exportEnterprise(context, site, includeSearchConfiguration) {
    if ((!context)) {
        throw Error.argumentNull('context');
    }
    var $v_0;
    var $v_1 = new SP.ClientActionInvokeStaticMethod(context, '{d21214d9-63f5-488b-a665-2b7f9abc1604}', 'ExportEnterprise', [ site, includeSearchConfiguration ]);
    context.addQuery($v_1);
    $v_0 = new SP.Publishing.DesignPackageInfo();
    context.addQueryIdAndResultObject($v_1.get_id(), $v_0);
    return $v_0;
}
SP.Publishing.DesignPackage.exportSmallBusiness = function SP_Publishing_DesignPackage$exportSmallBusiness(context, site, packageName, includeSearchConfiguration) {
    if ((!context)) {
        throw Error.argumentNull('context');
    }
    var $v_0;
    var $v_1 = new SP.ClientActionInvokeStaticMethod(context, '{d21214d9-63f5-488b-a665-2b7f9abc1604}', 'ExportSmallBusiness', [ site, packageName, includeSearchConfiguration ]);
    context.addQuery($v_1);
    $v_0 = new SP.Publishing.DesignPackageInfo();
    context.addQueryIdAndResultObject($v_1.get_id(), $v_0);
    return $v_0;
}


SP.Publishing.DesignPackageInfo = function SP_Publishing_DesignPackageInfo() {
    SP.Publishing.DesignPackageInfo.initializeBase(this);
}
SP.Publishing.DesignPackageInfo.prototype = {
    $W_1: 0,
    $Y_1: 0,
    $f_1: null,
    $g_1: null,
    
    get_majorVersion: function SP_Publishing_DesignPackageInfo$get_majorVersion() {
        return this.$W_1;
    },
    
    set_majorVersion: function SP_Publishing_DesignPackageInfo$set_majorVersion(value) {
        this.$W_1 = value;
        return value;
    },
    
    get_minorVersion: function SP_Publishing_DesignPackageInfo$get_minorVersion() {
        return this.$Y_1;
    },
    
    set_minorVersion: function SP_Publishing_DesignPackageInfo$set_minorVersion(value) {
        this.$Y_1 = value;
        return value;
    },
    
    get_packageGuid: function SP_Publishing_DesignPackageInfo$get_packageGuid() {
        return this.$f_1;
    },
    
    set_packageGuid: function SP_Publishing_DesignPackageInfo$set_packageGuid(value) {
        this.$f_1 = value;
        return value;
    },
    
    get_packageName: function SP_Publishing_DesignPackageInfo$get_packageName() {
        return this.$g_1;
    },
    
    set_packageName: function SP_Publishing_DesignPackageInfo$set_packageName(value) {
        this.$g_1 = value;
        return value;
    },
    
    get_typeId: function SP_Publishing_DesignPackageInfo$get_typeId() {
        return '{5332b37d-a6d1-4231-83cd-d7dd274540b7}';
    },
    
    writeToXml: function SP_Publishing_DesignPackageInfo$writeToXml(writer, serializationContext) {
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = [ 'MajorVersion', 'MinorVersion', 'PackageGuid', 'PackageName' ];
        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    
    initPropertiesFromJson: function SP_Publishing_DesignPackageInfo$initPropertiesFromJson(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.MajorVersion;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$W_1 = ($v_0);
            delete parentNode.MajorVersion;
        }
        $v_0 = parentNode.MinorVersion;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$Y_1 = ($v_0);
            delete parentNode.MinorVersion;
        }
        $v_0 = parentNode.PackageGuid;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$f_1 = ($v_0);
            delete parentNode.PackageGuid;
        }
        $v_0 = parentNode.PackageName;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$g_1 = ($v_0);
            delete parentNode.PackageName;
        }
    }
}


SP.Publishing.EnumerateOnlyVideoCollection = function SP_Publishing_EnumerateOnlyVideoCollection(context, objectPath) {
    SP.Publishing.EnumerateOnlyVideoCollection.initializeBase(this, [ context, objectPath ]);
}
SP.Publishing.EnumerateOnlyVideoCollection.prototype = {
    
    itemAt: function SP_Publishing_EnumerateOnlyVideoCollection$itemAt(index) {
        return this.getItemAtIndex(index);
    },
    
    get_item: function SP_Publishing_EnumerateOnlyVideoCollection$get_item(index) {
        return this.getItemAtIndex(index);
    },
    
    get_childItemType: function SP_Publishing_EnumerateOnlyVideoCollection$get_childItemType() {
        return SP.Publishing.VideoItem;
    }
}


SP.Publishing.ImageRendition = function SP_Publishing_ImageRendition() {
    SP.Publishing.ImageRendition.initializeBase(this);
}
SP.Publishing.ImageRendition.prototype = {
    $P_1: null,
    $Q_1: 0,
    $4_1: 0,
    $y_1: 0,
    $0_1: null,
    $10_1: 0,
    $w_1: 0,
    
    get_group: function SP_Publishing_ImageRendition$get_group() {
        return this.$P_1;
    },
    
    set_group: function SP_Publishing_ImageRendition$set_group(value) {
        this.$P_1 = value;
        return value;
    },
    
    get_height: function SP_Publishing_ImageRendition$get_height() {
        return this.$Q_1;
    },
    
    set_height: function SP_Publishing_ImageRendition$set_height(value) {
        this.$Q_1 = value;
        return value;
    },
    
    get_id: function SP_Publishing_ImageRendition$get_id() {
        return this.$4_1;
    },
    
    get_name: function SP_Publishing_ImageRendition$get_name() {
        return this.$0_1;
    },
    
    set_name: function SP_Publishing_ImageRendition$set_name(value) {
        this.$0_1 = value;
        return value;
    },
    
    get_version: function SP_Publishing_ImageRendition$get_version() {
        return this.$10_1;
    },
    
    get_width: function SP_Publishing_ImageRendition$get_width() {
        return this.$w_1;
    },
    
    set_width: function SP_Publishing_ImageRendition$set_width(value) {
        this.$w_1 = value;
        return value;
    },
    
    get_typeId: function SP_Publishing_ImageRendition$get_typeId() {
        return '{cb63161f-1f15-446f-9ba9-af89ae03cd45}';
    },
    
    writeToXml: function SP_Publishing_ImageRendition$writeToXml(writer, serializationContext) {
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = [ 'Group', 'Height', 'Id', 'Name', 'Version', 'Width' ];
        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        writer.writeStartElement('Property');
        writer.writeAttributeString('Name', 'IdCsom');
        SP.DataConvert.writeValueToXmlElement(writer, this.$y_1, serializationContext);
        writer.writeEndElement();
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    
    initPropertiesFromJson: function SP_Publishing_ImageRendition$initPropertiesFromJson(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.Group;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$P_1 = ($v_0);
            delete parentNode.Group;
        }
        $v_0 = parentNode.Height;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$Q_1 = ($v_0);
            delete parentNode.Height;
        }
        $v_0 = parentNode.Id;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$4_1 = ($v_0);
            delete parentNode.Id;
        }
        $v_0 = parentNode.IdCsom;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$y_1 = ($v_0);
            delete parentNode.IdCsom;
        }
        $v_0 = parentNode.Name;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$0_1 = ($v_0);
            delete parentNode.Name;
        }
        $v_0 = parentNode.Version;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$10_1 = ($v_0);
            delete parentNode.Version;
        }
        $v_0 = parentNode.Width;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$w_1 = ($v_0);
            delete parentNode.Width;
        }
    }
}


SP.Publishing.PageLayoutCreationInformation = function SP_Publishing_PageLayoutCreationInformation() {
    SP.Publishing.PageLayoutCreationInformation.initializeBase(this);
}
SP.Publishing.PageLayoutCreationInformation.prototype = {
    $A_1: null,
    $X_1: null,
    $b_1: null,
    $c_1: null,
    $11_1: null,
    
    get_associatedContentTypeId: function SP_Publishing_PageLayoutCreationInformation$get_associatedContentTypeId() {
        return this.$A_1;
    },
    
    set_associatedContentTypeId: function SP_Publishing_PageLayoutCreationInformation$set_associatedContentTypeId(value) {
        this.$A_1 = value;
        return value;
    },
    
    get_masterPageUrl: function SP_Publishing_PageLayoutCreationInformation$get_masterPageUrl() {
        return this.$X_1;
    },
    
    set_masterPageUrl: function SP_Publishing_PageLayoutCreationInformation$set_masterPageUrl(value) {
        this.$X_1 = value;
        return value;
    },
    
    get_newPageLayoutEditablePath: function SP_Publishing_PageLayoutCreationInformation$get_newPageLayoutEditablePath() {
        return this.$b_1;
    },
    
    set_newPageLayoutEditablePath: function SP_Publishing_PageLayoutCreationInformation$set_newPageLayoutEditablePath(value) {
        this.$b_1 = value;
        return value;
    },
    
    get_newPageLayoutNameWithoutExtension: function SP_Publishing_PageLayoutCreationInformation$get_newPageLayoutNameWithoutExtension() {
        return this.$c_1;
    },
    
    set_newPageLayoutNameWithoutExtension: function SP_Publishing_PageLayoutCreationInformation$set_newPageLayoutNameWithoutExtension(value) {
        this.$c_1 = value;
        return value;
    },
    
    get_web: function SP_Publishing_PageLayoutCreationInformation$get_web() {
        return this.$11_1;
    },
    
    set_web: function SP_Publishing_PageLayoutCreationInformation$set_web(value) {
        this.$11_1 = value;
        return value;
    },
    
    get_typeId: function SP_Publishing_PageLayoutCreationInformation$get_typeId() {
        return '{d36987c1-ddf0-4e73-8b1a-e7e444ef3d3f}';
    },
    
    writeToXml: function SP_Publishing_PageLayoutCreationInformation$writeToXml(writer, serializationContext) {
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = [ 'AssociatedContentTypeId', 'MasterPageUrl', 'NewPageLayoutEditablePath', 'NewPageLayoutNameWithoutExtension', 'Web' ];
        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    
    initPropertiesFromJson: function SP_Publishing_PageLayoutCreationInformation$initPropertiesFromJson(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.AssociatedContentTypeId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$A_1 = ($v_0);
            delete parentNode.AssociatedContentTypeId;
        }
        $v_0 = parentNode.MasterPageUrl;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$X_1 = ($v_0);
            delete parentNode.MasterPageUrl;
        }
        $v_0 = parentNode.NewPageLayoutEditablePath;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$b_1 = ($v_0);
            delete parentNode.NewPageLayoutEditablePath;
        }
        $v_0 = parentNode.NewPageLayoutNameWithoutExtension;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$c_1 = ($v_0);
            delete parentNode.NewPageLayoutNameWithoutExtension;
        }
        $v_0 = parentNode.Web;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            delete parentNode.Web;
        }
    }
}


SP.Publishing.PublishingPage = function SP_Publishing_PublishingPage(context, objectPath) {
    SP.Publishing.PublishingPage.initializeBase(this, [ context, objectPath ]);
}
SP.Publishing.PublishingPage.getPublishingPage = function SP_Publishing_PublishingPage$getPublishingPage(context, sourceListItem) {
    if ((!context)) {
        throw Error.argumentNull('context');
    }
    var $v_0;
    $v_0 = new SP.Publishing.PublishingPage(context, new SP.ObjectPathStaticMethod(context, '{e361280d-01dc-431a-9823-4afacd06418b}', 'GetPublishingPage', [ sourceListItem ]));
    return $v_0;
}
SP.Publishing.PublishingPage.prototype = {
    
    addFriendlyUrl: function SP_Publishing_PublishingPage$addFriendlyUrl(friendlyUrlSegment, editableParent, doAddToNavigation) {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'AddFriendlyUrl', [ friendlyUrlSegment, editableParent, doAddToNavigation ]);
        $v_0.addQuery($v_2);
        $v_1 = new SP.StringResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    }
}


SP.Publishing.PublishingPageInformation = function SP_Publishing_PublishingPageInformation() {
    SP.Publishing.PublishingPageInformation.initializeBase(this);
}
SP.Publishing.PublishingPageInformation.prototype = {
    $x_1: null,
    $0_1: null,
    $z_1: null,
    
    get_folder: function SP_Publishing_PublishingPageInformation$get_folder() {
        return this.$x_1;
    },
    
    set_folder: function SP_Publishing_PublishingPageInformation$set_folder(value) {
        this.$x_1 = value;
        return value;
    },
    
    get_name: function SP_Publishing_PublishingPageInformation$get_name() {
        return this.$0_1;
    },
    
    set_name: function SP_Publishing_PublishingPageInformation$set_name(value) {
        this.$0_1 = value;
        return value;
    },
    
    get_pageLayoutListItem: function SP_Publishing_PublishingPageInformation$get_pageLayoutListItem() {
        return this.$z_1;
    },
    
    set_pageLayoutListItem: function SP_Publishing_PublishingPageInformation$set_pageLayoutListItem(value) {
        this.$z_1 = value;
        return value;
    },
    
    get_typeId: function SP_Publishing_PublishingPageInformation$get_typeId() {
        return '{68f48886-1e99-4d5a-be5c-f0f0d53f371b}';
    },
    
    writeToXml: function SP_Publishing_PublishingPageInformation$writeToXml(writer, serializationContext) {
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = [ 'Folder', 'Name', 'PageLayoutListItem' ];
        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    
    initPropertiesFromJson: function SP_Publishing_PublishingPageInformation$initPropertiesFromJson(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.Folder;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            delete parentNode.Folder;
        }
        $v_0 = parentNode.Name;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$0_1 = ($v_0);
            delete parentNode.Name;
        }
        $v_0 = parentNode.PageLayoutListItem;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            delete parentNode.PageLayoutListItem;
        }
    }
}


SP.Publishing.PublishingSite = function SP_Publishing_PublishingSite(context, objectPath) {
    SP.Publishing.PublishingSite.initializeBase(this, [ context, objectPath ]);
}
SP.Publishing.PublishingSite.createPageLayout = function SP_Publishing_PublishingSite$createPageLayout(context, parameters) {
    if ((!context)) {
        throw Error.argumentNull('context');
    }
    var $v_0 = new SP.ClientActionInvokeStaticMethod(context, '{8a896237-0d29-4a38-a399-c8fde4b09d80}', 'CreatePageLayout', [ parameters ]);
    context.addQuery($v_0);
}


SP.Publishing.PublishingWeb = function SP_Publishing_PublishingWeb(context, objectPath) {
    SP.Publishing.PublishingWeb.initializeBase(this, [ context, objectPath ]);
}
SP.Publishing.PublishingWeb.getPublishingWeb = function SP_Publishing_PublishingWeb$getPublishingWeb(context, web) {
    if ((!context)) {
        throw Error.argumentNull('context');
    }
    var $v_0;
    $v_0 = new SP.Publishing.PublishingWeb(context, new SP.ObjectPathStaticMethod(context, '{55927360-235b-4ace-9dcf-c574d6e517ea}', 'GetPublishingWeb', [ web ]));
    return $v_0;
}
SP.Publishing.PublishingWeb.prototype = {
    
    get_web: function SP_Publishing_PublishingWeb$get_web() {
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['Web']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.Web(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Web'));
            this.get_objectData().get_clientObjectProperties()['Web'] = $v_0;
        }
        return $v_0;
    },
    
    initPropertiesFromJson: function SP_Publishing_PublishingWeb$initPropertiesFromJson(parentNode) {
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.Web;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('Web', this.get_web(), $v_0);
            this.get_web().fromJson($v_0);
            delete parentNode.Web;
        }
    },
    
    addPublishingPage: function SP_Publishing_PublishingWeb$addPublishingPage(pageInformation) {
        var $v_0 = this.get_context();
        var $v_1;
        $v_1 = new SP.Publishing.PublishingPage($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'AddPublishingPage', [ pageInformation ]));
        $v_1.get_path().setPendingReplace();
        var $v_2 = new SP.ObjectIdentityQuery($v_1.get_path());
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        $v_0.addQuery($v_2);
        return $v_1;
    }
}


SP.Publishing.PublishingWebObjectPropertyNames = function SP_Publishing_PublishingWebObjectPropertyNames() {
}


SP.Publishing.RepostPageFieldsData = function SP_Publishing_RepostPageFieldsData() {
    SP.Publishing.RepostPageFieldsData.initializeBase(this);
}
SP.Publishing.RepostPageFieldsData.prototype = {
    
    get_typeId: function SP_Publishing_RepostPageFieldsData$get_typeId() {
        return '{1552a3a5-4954-417a-8568-2ca8b0495050}';
    },
    
    writeToXml: function SP_Publishing_RepostPageFieldsData$writeToXml(writer, serializationContext) {
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        SP.Publishing.SitePageFieldsData.prototype.writeToXml.call(this, writer, serializationContext);
    }
}


SP.Publishing.ScheduledItem = function SP_Publishing_ScheduledItem(context, objectPath) {
    SP.Publishing.ScheduledItem.initializeBase(this, [ context, objectPath ]);
}
SP.Publishing.ScheduledItem.prototype = {
    
    get_endDate: function SP_Publishing_ScheduledItem$get_endDate() {
        this.checkUninitializedProperty('EndDate');
        return ((this.get_objectData().get_properties()['EndDate']));
    },
    
    set_endDate: function SP_Publishing_ScheduledItem$set_endDate(value) {
        this.get_objectData().get_properties()['EndDate'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'EndDate', value));
        }
        return value;
    },
    
    get_listItem: function SP_Publishing_ScheduledItem$get_listItem() {
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['ListItem']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.ListItem(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'ListItem'));
            this.get_objectData().get_clientObjectProperties()['ListItem'] = $v_0;
        }
        return $v_0;
    },
    
    get_startDate: function SP_Publishing_ScheduledItem$get_startDate() {
        this.checkUninitializedProperty('StartDate');
        return ((this.get_objectData().get_properties()['StartDate']));
    },
    
    set_startDate: function SP_Publishing_ScheduledItem$set_startDate(value) {
        this.get_objectData().get_properties()['StartDate'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'StartDate', value));
        }
        return value;
    },
    
    initPropertiesFromJson: function SP_Publishing_ScheduledItem$initPropertiesFromJson(parentNode) {
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.EndDate;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['EndDate'] = ($v_0);
            delete parentNode.EndDate;
        }
        $v_0 = parentNode.ListItem;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('ListItem', this.get_listItem(), $v_0);
            this.get_listItem().fromJson($v_0);
            delete parentNode.ListItem;
        }
        $v_0 = parentNode.StartDate;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['StartDate'] = ($v_0);
            delete parentNode.StartDate;
        }
    },
    
    schedule: function SP_Publishing_ScheduledItem$schedule(approvalComment) {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'Schedule', [ approvalComment ]);
        $v_0.addQuery($v_1);
    }
}


SP.Publishing.ScheduledItemPropertyNames = function SP_Publishing_ScheduledItemPropertyNames() {
}


SP.Publishing.ScheduledItemObjectPropertyNames = function SP_Publishing_ScheduledItemObjectPropertyNames() {
}


SP.Publishing.Search = function SP_Publishing_Search(context, objectPath) {
    SP.Publishing.Search.initializeBase(this, [ context, objectPath ]);
}
SP.Publishing.Search.prototype = {
    
    get_queryLanguages: function SP_Publishing_Search$get_queryLanguages() {
        this.checkUninitializedProperty('QueryLanguages');
        return ((this.get_objectData().get_properties()['QueryLanguages']));
    },
    
    initPropertiesFromJson: function SP_Publishing_Search$initPropertiesFromJson(parentNode) {
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.QueryLanguages;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['QueryLanguages'] = ((SP.DataConvert.fixupType(this.get_context(), $v_0)));
            delete parentNode.QueryLanguages;
        }
    }
}


SP.Publishing.SearchPropertyNames = function SP_Publishing_SearchPropertyNames() {
}


SP.Publishing.SharePagePreviewByEmailFieldsData = function SP_Publishing_SharePagePreviewByEmailFieldsData() {
    SP.Publishing.SharePagePreviewByEmailFieldsData.initializeBase(this);
}
SP.Publishing.SharePagePreviewByEmailFieldsData.prototype = {
    $2_1: null,
    $j_1: null,
    
    get_message: function SP_Publishing_SharePagePreviewByEmailFieldsData$get_message() {
        return this.$2_1;
    },
    
    set_message: function SP_Publishing_SharePagePreviewByEmailFieldsData$set_message(value) {
        this.$2_1 = value;
        return value;
    },
    
    get_recipientEmails: function SP_Publishing_SharePagePreviewByEmailFieldsData$get_recipientEmails() {
        return this.$j_1;
    },
    
    set_recipientEmails: function SP_Publishing_SharePagePreviewByEmailFieldsData$set_recipientEmails(value) {
        this.$j_1 = value;
        return value;
    },
    
    get_typeId: function SP_Publishing_SharePagePreviewByEmailFieldsData$get_typeId() {
        return '{848bcecf-dd16-4694-86a5-ac9abb70628d}';
    },
    
    writeToXml: function SP_Publishing_SharePagePreviewByEmailFieldsData$writeToXml(writer, serializationContext) {
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = [ 'message', 'recipientEmails' ];
        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    
    initPropertiesFromJson: function SP_Publishing_SharePagePreviewByEmailFieldsData$initPropertiesFromJson(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.message;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$2_1 = ($v_0);
            delete parentNode.message;
        }
        $v_0 = parentNode.recipientEmails;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$j_1 = ((SP.DataConvert.fixupType(null, $v_0)));
            delete parentNode.recipientEmails;
        }
    }
}


SP.Publishing.SiteImageRenditions = function SP_Publishing_SiteImageRenditions() {
}
SP.Publishing.SiteImageRenditions.getRenditions = function SP_Publishing_SiteImageRenditions$getRenditions(context) {
    if ((!context)) {
        throw Error.argumentNull('context');
    }
    var $v_0;
    var $v_1 = new SP.ClientActionInvokeStaticMethod(context, '{324675a4-aa0d-47db-a937-c2e5dc53457e}', 'GetRenditions', null);
    context.addQuery($v_1);
    $v_0 = (([]));
    context.addQueryIdAndResultObject($v_1.get_id(), $v_0);
    return $v_0;
}
SP.Publishing.SiteImageRenditions.setRenditions = function SP_Publishing_SiteImageRenditions$setRenditions(context, renditions) {
    if ((!context)) {
        throw Error.argumentNull('context');
    }
    var $v_0 = new SP.ClientActionInvokeStaticMethod(context, '{324675a4-aa0d-47db-a937-c2e5dc53457e}', 'SetRenditions', [ renditions ]);
    context.addQuery($v_0);
}


SP.Publishing.SitePage3DFieldsData = function SP_Publishing_SitePage3DFieldsData() {
    SP.Publishing.SitePage3DFieldsData.initializeBase(this);
}
SP.Publishing.SitePage3DFieldsData.prototype = {
    $o_2: null,
    
    get_spaceContent: function SP_Publishing_SitePage3DFieldsData$get_spaceContent() {
        return this.$o_2;
    },
    
    set_spaceContent: function SP_Publishing_SitePage3DFieldsData$set_spaceContent(value) {
        this.$o_2 = value;
        return value;
    },
    
    get_typeId: function SP_Publishing_SitePage3DFieldsData$get_typeId() {
        return '{018b1874-645c-47f2-bb1b-3ecb4aff3e3a}';
    },
    
    writeToXml: function SP_Publishing_SitePage3DFieldsData$writeToXml(writer, serializationContext) {
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = [ 'SpaceContent' ];
        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.Publishing.SitePageFieldsData.prototype.writeToXml.call(this, writer, serializationContext);
    },
    
    initPropertiesFromJson: function SP_Publishing_SitePage3DFieldsData$initPropertiesFromJson(parentNode) {
        SP.Publishing.SitePageFieldsData.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.SpaceContent;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$o_2 = ($v_0);
            delete parentNode.SpaceContent;
        }
    }
}


SP.Publishing.SitePageFieldsData = function SP_Publishing_SitePageFieldsData() {
    SP.Publishing.SitePageFieldsData.initializeBase(this);
}
SP.Publishing.SitePageFieldsData.prototype = {
    $B_1: null,
    $C_1: null,
    $D_1: null,
    $E_1: null,
    $K_1: null,
    $V_1: null,
    $Z_1: null,
    $i_1: null,
    $r_1: null,
    $s_1: null,
    
    get_authorByline: function SP_Publishing_SitePageFieldsData$get_authorByline() {
        return this.$B_1;
    },
    
    set_authorByline: function SP_Publishing_SitePageFieldsData$set_authorByline(value) {
        this.$B_1 = value;
        return value;
    },
    
    get_bannerImageUrl: function SP_Publishing_SitePageFieldsData$get_bannerImageUrl() {
        return this.$C_1;
    },
    
    set_bannerImageUrl: function SP_Publishing_SitePageFieldsData$set_bannerImageUrl(value) {
        this.$C_1 = value;
        return value;
    },
    
    get_canvasContent1: function SP_Publishing_SitePageFieldsData$get_canvasContent1() {
        return this.$D_1;
    },
    
    set_canvasContent1: function SP_Publishing_SitePageFieldsData$set_canvasContent1(value) {
        this.$D_1 = value;
        return value;
    },
    
    get_canvasJson1: function SP_Publishing_SitePageFieldsData$get_canvasJson1() {
        return this.$E_1;
    },
    
    set_canvasJson1: function SP_Publishing_SitePageFieldsData$set_canvasJson1(value) {
        this.$E_1 = value;
        return value;
    },
    
    get_description: function SP_Publishing_SitePageFieldsData$get_description() {
        return this.$K_1;
    },
    
    set_description: function SP_Publishing_SitePageFieldsData$set_description(value) {
        this.$K_1 = value;
        return value;
    },
    
    get_layoutWebpartsContent: function SP_Publishing_SitePageFieldsData$get_layoutWebpartsContent() {
        return this.$V_1;
    },
    
    set_layoutWebpartsContent: function SP_Publishing_SitePageFieldsData$set_layoutWebpartsContent(value) {
        this.$V_1 = value;
        return value;
    },
    
    get_modified: function SP_Publishing_SitePageFieldsData$get_modified() {
        return this.$Z_1;
    },
    
    set_modified: function SP_Publishing_SitePageFieldsData$set_modified(value) {
        this.$Z_1 = value;
        return value;
    },
    
    get_publishStartDate: function SP_Publishing_SitePageFieldsData$get_publishStartDate() {
        return this.$i_1;
    },
    
    set_publishStartDate: function SP_Publishing_SitePageFieldsData$set_publishStartDate(value) {
        this.$i_1 = value;
        return value;
    },
    
    get_title: function SP_Publishing_SitePageFieldsData$get_title() {
        return this.$r_1;
    },
    
    set_title: function SP_Publishing_SitePageFieldsData$set_title(value) {
        this.$r_1 = value;
        return value;
    },
    
    get_topicHeader: function SP_Publishing_SitePageFieldsData$get_topicHeader() {
        return this.$s_1;
    },
    
    set_topicHeader: function SP_Publishing_SitePageFieldsData$set_topicHeader(value) {
        this.$s_1 = value;
        return value;
    },
    
    get_typeId: function SP_Publishing_SitePageFieldsData$get_typeId() {
        return '{1cd13100-0afe-4014-be26-fdcb2b10eba5}';
    },
    
    writeToXml: function SP_Publishing_SitePageFieldsData$writeToXml(writer, serializationContext) {
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = [ 'AuthorByline', 'BannerImageUrl', 'CanvasContent1', 'CanvasJson1', 'Description', 'LayoutWebpartsContent', 'Modified', 'PublishStartDate', 'Title', 'TopicHeader' ];
        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    
    initPropertiesFromJson: function SP_Publishing_SitePageFieldsData$initPropertiesFromJson(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.AuthorByline;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$B_1 = ((SP.DataConvert.fixupType(null, $v_0)));
            delete parentNode.AuthorByline;
        }
        $v_0 = parentNode.BannerImageUrl;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$C_1 = ($v_0);
            delete parentNode.BannerImageUrl;
        }
        $v_0 = parentNode.CanvasContent1;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$D_1 = ($v_0);
            delete parentNode.CanvasContent1;
        }
        $v_0 = parentNode.CanvasJson1;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$E_1 = ($v_0);
            delete parentNode.CanvasJson1;
        }
        $v_0 = parentNode.Description;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$K_1 = ($v_0);
            delete parentNode.Description;
        }
        $v_0 = parentNode.LayoutWebpartsContent;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$V_1 = ($v_0);
            delete parentNode.LayoutWebpartsContent;
        }
        $v_0 = parentNode.Modified;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$Z_1 = ($v_0);
            delete parentNode.Modified;
        }
        $v_0 = parentNode.PublishStartDate;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$i_1 = ($v_0);
            delete parentNode.PublishStartDate;
        }
        $v_0 = parentNode.Title;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$r_1 = ($v_0);
            delete parentNode.Title;
        }
        $v_0 = parentNode.TopicHeader;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$s_1 = ($v_0);
            delete parentNode.TopicHeader;
        }
    }
}


SP.Publishing.SitePageVersionInfo = function SP_Publishing_SitePageVersionInfo() {
    SP.Publishing.SitePageVersionInfo.initializeBase(this);
}
SP.Publishing.SitePageVersionInfo.prototype = {
    $S_1: null,
    $T_1: null,
    
    get_lastVersionCreated: function SP_Publishing_SitePageVersionInfo$get_lastVersionCreated() {
        return this.$S_1;
    },
    
    set_lastVersionCreated: function SP_Publishing_SitePageVersionInfo$set_lastVersionCreated(value) {
        this.$S_1 = value;
        return value;
    },
    
    get_lastVersionCreatedBy: function SP_Publishing_SitePageVersionInfo$get_lastVersionCreatedBy() {
        return this.$T_1;
    },
    
    set_lastVersionCreatedBy: function SP_Publishing_SitePageVersionInfo$set_lastVersionCreatedBy(value) {
        this.$T_1 = value;
        return value;
    },
    
    get_typeId: function SP_Publishing_SitePageVersionInfo$get_typeId() {
        return '{a76110e2-0be3-4472-950b-f45d7efab716}';
    },
    
    writeToXml: function SP_Publishing_SitePageVersionInfo$writeToXml(writer, serializationContext) {
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = [ 'LastVersionCreated', 'LastVersionCreatedBy' ];
        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    
    initPropertiesFromJson: function SP_Publishing_SitePageVersionInfo$initPropertiesFromJson(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.LastVersionCreated;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$S_1 = ($v_0);
            delete parentNode.LastVersionCreated;
        }
        $v_0 = parentNode.LastVersionCreatedBy;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$T_1 = ($v_0);
            delete parentNode.LastVersionCreatedBy;
        }
    }
}


SP.Publishing.SiteServicesAddins = function SP_Publishing_SiteServicesAddins() {
}
SP.Publishing.SiteServicesAddins.getSettings = function SP_Publishing_SiteServicesAddins$getSettings(context, addinId) {
    if ((!context)) {
        throw Error.argumentNull('context');
    }
    var $v_0;
    $v_0 = new SP.Publishing.AddinSettings(context, new SP.ObjectPathStaticMethod(context, '{31738358-baad-400c-9678-b5528c432ab5}', 'GetSettings', [ addinId ]));
    return $v_0;
}
SP.Publishing.SiteServicesAddins.setSettings = function SP_Publishing_SiteServicesAddins$setSettings(context, addin) {
    if ((!context)) {
        throw Error.argumentNull('context');
    }
    var $v_0 = new SP.ClientActionInvokeStaticMethod(context, '{31738358-baad-400c-9678-b5528c432ab5}', 'SetSettings', [ addin ]);
    context.addQuery($v_0);
}
SP.Publishing.SiteServicesAddins.deleteSettings = function SP_Publishing_SiteServicesAddins$deleteSettings(context, addinId) {
    if ((!context)) {
        throw Error.argumentNull('context');
    }
    var $v_0 = new SP.ClientActionInvokeStaticMethod(context, '{31738358-baad-400c-9678-b5528c432ab5}', 'DeleteSettings', [ addinId ]);
    context.addQuery($v_0);
}
SP.Publishing.SiteServicesAddins.getPlugin = function SP_Publishing_SiteServicesAddins$getPlugin(context, pluginName) {
    if ((!context)) {
        throw Error.argumentNull('context');
    }
    var $v_0;
    $v_0 = new SP.Publishing.AddinPlugin(context, new SP.ObjectPathStaticMethod(context, '{31738358-baad-400c-9678-b5528c432ab5}', 'GetPlugin', [ pluginName ]));
    return $v_0;
}
SP.Publishing.SiteServicesAddins.setPlugin = function SP_Publishing_SiteServicesAddins$setPlugin(context, plugin) {
    if ((!context)) {
        throw Error.argumentNull('context');
    }
    var $v_0 = new SP.ClientActionInvokeStaticMethod(context, '{31738358-baad-400c-9678-b5528c432ab5}', 'SetPlugin', [ plugin ]);
    context.addQuery($v_0);
}
SP.Publishing.SiteServicesAddins.deletePlugin = function SP_Publishing_SiteServicesAddins$deletePlugin(context, pluginName) {
    if ((!context)) {
        throw Error.argumentNull('context');
    }
    var $v_0 = new SP.ClientActionInvokeStaticMethod(context, '{31738358-baad-400c-9678-b5528c432ab5}', 'DeletePlugin', [ pluginName ]);
    context.addQuery($v_0);
}


SP.Publishing.SiteSharingEmailContext = function SP_Publishing_SiteSharingEmailContext() {
    SP.Publishing.SiteSharingEmailContext.initializeBase(this);
}
SP.Publishing.SiteSharingEmailContext.prototype = {
    $I_1: null,
    $J_1: null,
    $2_1: null,
    $u_1: null,
    
    get_customDescription: function SP_Publishing_SiteSharingEmailContext$get_customDescription() {
        return this.$I_1;
    },
    
    set_customDescription: function SP_Publishing_SiteSharingEmailContext$set_customDescription(value) {
        this.$I_1 = value;
        return value;
    },
    
    get_customTitle: function SP_Publishing_SiteSharingEmailContext$get_customTitle() {
        return this.$J_1;
    },
    
    set_customTitle: function SP_Publishing_SiteSharingEmailContext$set_customTitle(value) {
        this.$J_1 = value;
        return value;
    },
    
    get_message: function SP_Publishing_SiteSharingEmailContext$get_message() {
        return this.$2_1;
    },
    
    set_message: function SP_Publishing_SiteSharingEmailContext$set_message(value) {
        this.$2_1 = value;
        return value;
    },
    
    get_url: function SP_Publishing_SiteSharingEmailContext$get_url() {
        return this.$u_1;
    },
    
    set_url: function SP_Publishing_SiteSharingEmailContext$set_url(value) {
        this.$u_1 = value;
        return value;
    },
    
    get_typeId: function SP_Publishing_SiteSharingEmailContext$get_typeId() {
        return '{2d732678-a6ff-42a8-91e0-ee9ff0b3213c}';
    },
    
    writeToXml: function SP_Publishing_SiteSharingEmailContext$writeToXml(writer, serializationContext) {
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = [ 'CustomDescription', 'CustomTitle', 'Message', 'Url' ];
        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    
    initPropertiesFromJson: function SP_Publishing_SiteSharingEmailContext$initPropertiesFromJson(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.CustomDescription;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$I_1 = ($v_0);
            delete parentNode.CustomDescription;
        }
        $v_0 = parentNode.CustomTitle;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$J_1 = ($v_0);
            delete parentNode.CustomTitle;
        }
        $v_0 = parentNode.Message;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$2_1 = ($v_0);
            delete parentNode.Message;
        }
        $v_0 = parentNode.Url;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$u_1 = ($v_0);
            delete parentNode.Url;
        }
    }
}


SP.Publishing.SpotlightChannel = function SP_Publishing_SpotlightChannel(context, objectPath) {
    SP.Publishing.SpotlightChannel.initializeBase(this, [ context, objectPath ]);
}
SP.Publishing.SpotlightChannel.prototype = {
    
    get_channel: function SP_Publishing_SpotlightChannel$get_channel() {
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['Channel']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.Publishing.VideoChannel(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Channel'));
            this.get_objectData().get_clientObjectProperties()['Channel'] = $v_0;
        }
        return $v_0;
    },
    
    get_channelId: function SP_Publishing_SpotlightChannel$get_channelId() {
        this.checkUninitializedProperty('ChannelId');
        return ((this.get_objectData().get_properties()['ChannelId']));
    },
    
    set_channelId: function SP_Publishing_SpotlightChannel$set_channelId(value) {
        this.get_objectData().get_properties()['ChannelId'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'ChannelId', value));
        }
        return value;
    },
    
    get_id: function SP_Publishing_SpotlightChannel$get_id() {
        this.checkUninitializedProperty('Id');
        return ((this.get_objectData().get_properties()['Id']));
    },
    
    get_tileHtmlColor: function SP_Publishing_SpotlightChannel$get_tileHtmlColor() {
        this.checkUninitializedProperty('TileHtmlColor');
        return ((this.get_objectData().get_properties()['TileHtmlColor']));
    },
    
    get_title: function SP_Publishing_SpotlightChannel$get_title() {
        this.checkUninitializedProperty('Title');
        return ((this.get_objectData().get_properties()['Title']));
    },
    
    get_videoLibraryServerRelativeUrl: function SP_Publishing_SpotlightChannel$get_videoLibraryServerRelativeUrl() {
        this.checkUninitializedProperty('VideoLibraryServerRelativeUrl');
        return ((this.get_objectData().get_properties()['VideoLibraryServerRelativeUrl']));
    },
    
    initPropertiesFromJson: function SP_Publishing_SpotlightChannel$initPropertiesFromJson(parentNode) {
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.Channel;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('Channel', this.get_channel(), $v_0);
            this.get_channel().fromJson($v_0);
            delete parentNode.Channel;
        }
        $v_0 = parentNode.ChannelId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ChannelId'] = ($v_0);
            delete parentNode.ChannelId;
        }
        $v_0 = parentNode.Id;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Id'] = ($v_0);
            delete parentNode.Id;
        }
        $v_0 = parentNode.TileHtmlColor;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['TileHtmlColor'] = ($v_0);
            delete parentNode.TileHtmlColor;
        }
        $v_0 = parentNode.Title;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Title'] = ($v_0);
            delete parentNode.Title;
        }
        $v_0 = parentNode.VideoLibraryServerRelativeUrl;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['VideoLibraryServerRelativeUrl'] = ($v_0);
            delete parentNode.VideoLibraryServerRelativeUrl;
        }
    },
    
    update: function SP_Publishing_SpotlightChannel$update() {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'Update', null);
        $v_0.addQuery($v_1);
    },
    
    deleteObject: function SP_Publishing_SpotlightChannel$deleteObject() {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'DeleteObject', null);
        $v_0.addQuery($v_1);
        this.removeFromParentCollection();
    }
}


SP.Publishing.SpotlightChannelPropertyNames = function SP_Publishing_SpotlightChannelPropertyNames() {
}


SP.Publishing.SpotlightChannelObjectPropertyNames = function SP_Publishing_SpotlightChannelObjectPropertyNames() {
}


SP.Publishing.SpotlightChannelCollection = function SP_Publishing_SpotlightChannelCollection(context, objectPath) {
    SP.Publishing.SpotlightChannelCollection.initializeBase(this, [ context, objectPath ]);
}
SP.Publishing.SpotlightChannelCollection.prototype = {
    
    itemAt: function SP_Publishing_SpotlightChannelCollection$itemAt(index) {
        return this.getItemAtIndex(index);
    },
    
    get_item: function SP_Publishing_SpotlightChannelCollection$get_item(index) {
        return this.getItemAtIndex(index);
    },
    
    get_childItemType: function SP_Publishing_SpotlightChannelCollection$get_childItemType() {
        return SP.Publishing.SpotlightChannel;
    },
    
    getById: function SP_Publishing_SpotlightChannelCollection$getById(id) {
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
        $v_1 = new SP.Publishing.SpotlightChannel($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetById', [ id ]));
        if (!$v_0.get_disableReturnValueCache()) {
            $v_2[id] = $v_1;
        }
        return $v_1;
    }
}


SP.Publishing.SpotlightVideo = function SP_Publishing_SpotlightVideo(context, objectPath) {
    SP.Publishing.SpotlightVideo.initializeBase(this, [ context, objectPath ]);
}
SP.Publishing.SpotlightVideo.prototype = {
    
    get_id: function SP_Publishing_SpotlightVideo$get_id() {
        this.checkUninitializedProperty('Id');
        return ((this.get_objectData().get_properties()['Id']));
    },
    
    get_serverRelativeUrl: function SP_Publishing_SpotlightVideo$get_serverRelativeUrl() {
        this.checkUninitializedProperty('ServerRelativeUrl');
        return ((this.get_objectData().get_properties()['ServerRelativeUrl']));
    },
    
    get_url: function SP_Publishing_SpotlightVideo$get_url() {
        this.checkUninitializedProperty('Url');
        return ((this.get_objectData().get_properties()['Url']));
    },
    
    set_url: function SP_Publishing_SpotlightVideo$set_url(value) {
        this.get_objectData().get_properties()['Url'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Url', value));
        }
        return value;
    },
    
    get_video: function SP_Publishing_SpotlightVideo$get_video() {
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['Video']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.Publishing.VideoItem(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Video'));
            this.get_objectData().get_clientObjectProperties()['Video'] = $v_0;
        }
        return $v_0;
    },
    
    initPropertiesFromJson: function SP_Publishing_SpotlightVideo$initPropertiesFromJson(parentNode) {
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.Id;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Id'] = ($v_0);
            delete parentNode.Id;
        }
        $v_0 = parentNode.ServerRelativeUrl;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ServerRelativeUrl'] = ($v_0);
            delete parentNode.ServerRelativeUrl;
        }
        $v_0 = parentNode.Url;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Url'] = ($v_0);
            delete parentNode.Url;
        }
        $v_0 = parentNode.Video;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('Video', this.get_video(), $v_0);
            this.get_video().fromJson($v_0);
            delete parentNode.Video;
        }
    },
    
    update: function SP_Publishing_SpotlightVideo$update() {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'Update', null);
        $v_0.addQuery($v_1);
    },
    
    deleteObject: function SP_Publishing_SpotlightVideo$deleteObject() {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'DeleteObject', null);
        $v_0.addQuery($v_1);
        this.removeFromParentCollection();
    }
}


SP.Publishing.SpotlightVideoPropertyNames = function SP_Publishing_SpotlightVideoPropertyNames() {
}


SP.Publishing.SpotlightVideoObjectPropertyNames = function SP_Publishing_SpotlightVideoObjectPropertyNames() {
}


SP.Publishing.SpotlightVideoCollection = function SP_Publishing_SpotlightVideoCollection(context, objectPath) {
    SP.Publishing.SpotlightVideoCollection.initializeBase(this, [ context, objectPath ]);
}
SP.Publishing.SpotlightVideoCollection.prototype = {
    
    itemAt: function SP_Publishing_SpotlightVideoCollection$itemAt(index) {
        return this.getItemAtIndex(index);
    },
    
    get_item: function SP_Publishing_SpotlightVideoCollection$get_item(index) {
        return this.getItemAtIndex(index);
    },
    
    get_childItemType: function SP_Publishing_SpotlightVideoCollection$get_childItemType() {
        return SP.Publishing.SpotlightVideo;
    },
    
    getById: function SP_Publishing_SpotlightVideoCollection$getById(id) {
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
        $v_1 = new SP.Publishing.SpotlightVideo($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetById', [ id ]));
        if (!$v_0.get_disableReturnValueCache()) {
            $v_2[id] = $v_1;
        }
        return $v_1;
    }
}


SP.Publishing.SubtitleCollection = function SP_Publishing_SubtitleCollection(context, objectPath) {
    SP.Publishing.SubtitleCollection.initializeBase(this, [ context, objectPath ]);
}
SP.Publishing.SubtitleCollection.prototype = {
    
    itemAt: function SP_Publishing_SubtitleCollection$itemAt(index) {
        return this.getItemAtIndex(index);
    },
    
    get_item: function SP_Publishing_SubtitleCollection$get_item(index) {
        return this.getItemAtIndex(index);
    },
    
    get_childItemType: function SP_Publishing_SubtitleCollection$get_childItemType() {
        return SP.Publishing.SubtitleFile;
    },
    
    getSubtitleFile: function SP_Publishing_SubtitleCollection$getSubtitleFile(name) {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = ((this.get_objectData().get_methodReturnObjects()['GetSubtitleFile']));
        if (SP.ScriptUtility.isNullOrUndefined($v_2)) {
            $v_2 = {};
            this.get_objectData().get_methodReturnObjects()['GetSubtitleFile'] = $v_2;
        }
        $v_1 = (($v_2[name]));
        if (!$v_0.get_disableReturnValueCache() && !SP.ScriptUtility.isNullOrUndefined($v_1)) {
            return $v_1;
        }
        var $v_3 = new SP.ClientActionInvokeMethod(this, 'GetSubtitleFile', [ name ]);
        $v_0.addQuery($v_3);
        $v_1 = (([]));
        $v_0.addQueryIdAndResultObject($v_3.get_id(), $v_1);
        if (!$v_0.get_disableReturnValueCache()) {
            $v_2[name] = $v_1;
        }
        return $v_1;
    }
}


SP.Publishing.SubtitleFile = function SP_Publishing_SubtitleFile(context, objectPath) {
    SP.Publishing.SubtitleFile.initializeBase(this, [ context, objectPath ]);
}
SP.Publishing.SubtitleFile.prototype = {
    
    get_language: function SP_Publishing_SubtitleFile$get_language() {
        this.checkUninitializedProperty('Language');
        return ((this.get_objectData().get_properties()['Language']));
    },
    
    set_language: function SP_Publishing_SubtitleFile$set_language(value) {
        this.get_objectData().get_properties()['Language'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Language', value));
        }
        return value;
    },
    
    get_nativeLanguageName: function SP_Publishing_SubtitleFile$get_nativeLanguageName() {
        this.checkUninitializedProperty('NativeLanguageName');
        return ((this.get_objectData().get_properties()['NativeLanguageName']));
    },
    
    set_nativeLanguageName: function SP_Publishing_SubtitleFile$set_nativeLanguageName(value) {
        this.get_objectData().get_properties()['NativeLanguageName'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'NativeLanguageName', value));
        }
        return value;
    },
    
    get_url: function SP_Publishing_SubtitleFile$get_url() {
        this.checkUninitializedProperty('Url');
        return ((this.get_objectData().get_properties()['Url']));
    },
    
    set_url: function SP_Publishing_SubtitleFile$set_url(value) {
        this.get_objectData().get_properties()['Url'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Url', value));
        }
        return value;
    },
    
    initPropertiesFromJson: function SP_Publishing_SubtitleFile$initPropertiesFromJson(parentNode) {
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.Language;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Language'] = ($v_0);
            delete parentNode.Language;
        }
        $v_0 = parentNode.NativeLanguageName;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['NativeLanguageName'] = ($v_0);
            delete parentNode.NativeLanguageName;
        }
        $v_0 = parentNode.Url;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Url'] = ($v_0);
            delete parentNode.Url;
        }
    }
}


SP.Publishing.SubtitleFilePropertyNames = function SP_Publishing_SubtitleFilePropertyNames() {
}


SP.Publishing.TextValueWithLanguage = function SP_Publishing_TextValueWithLanguage() {
    SP.Publishing.TextValueWithLanguage.initializeBase(this);
}
SP.Publishing.TextValueWithLanguage.prototype = {
    $G_1: null,
    $1_1: 0,
    $3_1: null,
    
    get_colorSeed: function SP_Publishing_TextValueWithLanguage$get_colorSeed() {
        return this.$G_1;
    },
    
    set_colorSeed: function SP_Publishing_TextValueWithLanguage$set_colorSeed(value) {
        this.$G_1 = value;
        return value;
    },
    
    get_lcid: function SP_Publishing_TextValueWithLanguage$get_lcid() {
        return this.$1_1;
    },
    
    set_lcid: function SP_Publishing_TextValueWithLanguage$set_lcid(value) {
        this.$1_1 = value;
        return value;
    },
    
    get_text: function SP_Publishing_TextValueWithLanguage$get_text() {
        return this.$3_1;
    },
    
    set_text: function SP_Publishing_TextValueWithLanguage$set_text(value) {
        this.$3_1 = value;
        return value;
    },
    
    get_typeId: function SP_Publishing_TextValueWithLanguage$get_typeId() {
        return '{545721cc-4296-4516-9050-7a718496b415}';
    },
    
    writeToXml: function SP_Publishing_TextValueWithLanguage$writeToXml(writer, serializationContext) {
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = [ 'ColorSeed', 'Lcid', 'Text' ];
        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    
    initPropertiesFromJson: function SP_Publishing_TextValueWithLanguage$initPropertiesFromJson(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.ColorSeed;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$G_1 = ($v_0);
            delete parentNode.ColorSeed;
        }
        $v_0 = parentNode.Lcid;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1_1 = ($v_0);
            delete parentNode.Lcid;
        }
        $v_0 = parentNode.Text;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$3_1 = ($v_0);
            delete parentNode.Text;
        }
    }
}


SP.Publishing.TopicPageFieldsData = function SP_Publishing_TopicPageFieldsData() {
    SP.Publishing.TopicPageFieldsData.initializeBase(this);
}
SP.Publishing.TopicPageFieldsData.prototype = {
    $L_2: null,
    $M_2: null,
    $N_2: null,
    
    get_entityId: function SP_Publishing_TopicPageFieldsData$get_entityId() {
        return this.$L_2;
    },
    
    set_entityId: function SP_Publishing_TopicPageFieldsData$set_entityId(value) {
        this.$L_2 = value;
        return value;
    },
    
    get_entityRelations: function SP_Publishing_TopicPageFieldsData$get_entityRelations() {
        return this.$M_2;
    },
    
    set_entityRelations: function SP_Publishing_TopicPageFieldsData$set_entityRelations(value) {
        this.$M_2 = value;
        return value;
    },
    
    get_entityType: function SP_Publishing_TopicPageFieldsData$get_entityType() {
        return this.$N_2;
    },
    
    set_entityType: function SP_Publishing_TopicPageFieldsData$set_entityType(value) {
        this.$N_2 = value;
        return value;
    },
    
    get_typeId: function SP_Publishing_TopicPageFieldsData$get_typeId() {
        return '{2188d64b-6146-48b4-8fdc-b4fdb3ac92f0}';
    },
    
    writeToXml: function SP_Publishing_TopicPageFieldsData$writeToXml(writer, serializationContext) {
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = [ 'EntityId', 'EntityRelations', 'EntityType' ];
        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.Publishing.SitePageFieldsData.prototype.writeToXml.call(this, writer, serializationContext);
    },
    
    initPropertiesFromJson: function SP_Publishing_TopicPageFieldsData$initPropertiesFromJson(parentNode) {
        SP.Publishing.SitePageFieldsData.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.EntityId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$L_2 = ($v_0);
            delete parentNode.EntityId;
        }
        $v_0 = parentNode.EntityRelations;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$M_2 = ($v_0);
            delete parentNode.EntityRelations;
        }
        $v_0 = parentNode.EntityType;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$N_2 = ($v_0);
            delete parentNode.EntityType;
        }
    }
}


SP.Publishing.VariationLabel = function SP_Publishing_VariationLabel(context, objectPath) {
    SP.Publishing.VariationLabel.initializeBase(this, [ context, objectPath ]);
}
SP.Publishing.VariationLabel.prototype = {
    
    get_displayName: function SP_Publishing_VariationLabel$get_displayName() {
        this.checkUninitializedProperty('DisplayName');
        return ((this.get_objectData().get_properties()['DisplayName']));
    },
    
    get_isSource: function SP_Publishing_VariationLabel$get_isSource() {
        this.checkUninitializedProperty('IsSource');
        return ((this.get_objectData().get_properties()['IsSource']));
    },
    
    get_language: function SP_Publishing_VariationLabel$get_language() {
        this.checkUninitializedProperty('Language');
        return ((this.get_objectData().get_properties()['Language']));
    },
    
    get_locale: function SP_Publishing_VariationLabel$get_locale() {
        this.checkUninitializedProperty('Locale');
        return ((this.get_objectData().get_properties()['Locale']));
    },
    
    get_title: function SP_Publishing_VariationLabel$get_title() {
        this.checkUninitializedProperty('Title');
        return ((this.get_objectData().get_properties()['Title']));
    },
    
    get_topWebUrl: function SP_Publishing_VariationLabel$get_topWebUrl() {
        this.checkUninitializedProperty('TopWebUrl');
        return ((this.get_objectData().get_properties()['TopWebUrl']));
    },
    
    initPropertiesFromJson: function SP_Publishing_VariationLabel$initPropertiesFromJson(parentNode) {
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.DisplayName;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['DisplayName'] = ($v_0);
            delete parentNode.DisplayName;
        }
        $v_0 = parentNode.IsSource;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['IsSource'] = ($v_0);
            delete parentNode.IsSource;
        }
        $v_0 = parentNode.Language;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Language'] = ($v_0);
            delete parentNode.Language;
        }
        $v_0 = parentNode.Locale;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Locale'] = ($v_0);
            delete parentNode.Locale;
        }
        $v_0 = parentNode.Title;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Title'] = ($v_0);
            delete parentNode.Title;
        }
        $v_0 = parentNode.TopWebUrl;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['TopWebUrl'] = ($v_0);
            delete parentNode.TopWebUrl;
        }
    }
}


SP.Publishing.VariationLabelPropertyNames = function SP_Publishing_VariationLabelPropertyNames() {
}


SP.Publishing.Variations = function SP_Publishing_Variations(context, objectPath) {
    SP.Publishing.Variations.initializeBase(this, [ context, objectPath ]);
}
SP.Publishing.Variations.getLabels = function SP_Publishing_Variations$getLabels(context) {
    if ((!context)) {
        throw Error.argumentNull('context');
    }
    var $v_0;
    $v_0 = new SP.ClientObjectList(context, new SP.ObjectPathStaticMethod(context, '{1339cd8a-5dc8-4932-9bb3-32a5bc2c0d48}', 'GetLabels', null), SP.Publishing.VariationLabel);
    return $v_0;
}
SP.Publishing.Variations.getPeerUrl = function SP_Publishing_Variations$getPeerUrl(context, currentUrl, labelTitle) {
    if ((!context)) {
        throw Error.argumentNull('context');
    }
    var $v_0;
    var $v_1 = new SP.ClientActionInvokeStaticMethod(context, '{1339cd8a-5dc8-4932-9bb3-32a5bc2c0d48}', 'GetPeerUrl', [ currentUrl, labelTitle ]);
    context.addQuery($v_1);
    $v_0 = new SP.StringResult();
    context.addQueryIdAndResultObject($v_1.get_id(), $v_0);
    return $v_0;
}
SP.Publishing.Variations.updateListItems = function SP_Publishing_Variations$updateListItems(context, listId, itemIds) {
    if ((!context)) {
        throw Error.argumentNull('context');
    }
    var $v_0 = new SP.ClientActionInvokeStaticMethod(context, '{1339cd8a-5dc8-4932-9bb3-32a5bc2c0d48}', 'UpdateListItems', [ listId, itemIds ]);
    context.addQuery($v_0);
}


SP.Publishing.VideoChannel = function SP_Publishing_VideoChannel(context, objectPath) {
    SP.Publishing.VideoChannel.initializeBase(this, [ context, objectPath ]);
}
SP.Publishing.VideoChannel.prototype = {
    
    get_canAdministrateByCurrent: function SP_Publishing_VideoChannel$get_canAdministrateByCurrent() {
        this.checkUninitializedProperty('CanAdministrateByCurrent');
        return ((this.get_objectData().get_properties()['CanAdministrateByCurrent']));
    },
    
    get_canEditByCurrent: function SP_Publishing_VideoChannel$get_canEditByCurrent() {
        this.checkUninitializedProperty('CanEditByCurrent');
        return ((this.get_objectData().get_properties()['CanEditByCurrent']));
    },
    
    get_canViewByCurrent: function SP_Publishing_VideoChannel$get_canViewByCurrent() {
        this.checkUninitializedProperty('CanViewByCurrent');
        return ((this.get_objectData().get_properties()['CanViewByCurrent']));
    },
    
    get_channelPageUrl: function SP_Publishing_VideoChannel$get_channelPageUrl() {
        this.checkUninitializedProperty('ChannelPageUrl');
        return ((this.get_objectData().get_properties()['ChannelPageUrl']));
    },
    
    get_description: function SP_Publishing_VideoChannel$get_description() {
        this.checkUninitializedProperty('Description');
        return ((this.get_objectData().get_properties()['Description']));
    },
    
    set_description: function SP_Publishing_VideoChannel$set_description(value) {
        this.get_objectData().get_properties()['Description'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Description', value));
        }
        return value;
    },
    
    get_downloadUrlVisibleMinPermission: function SP_Publishing_VideoChannel$get_downloadUrlVisibleMinPermission() {
        this.checkUninitializedProperty('DownloadUrlVisibleMinPermission');
        return ((this.get_objectData().get_properties()['DownloadUrlVisibleMinPermission']));
    },
    
    set_downloadUrlVisibleMinPermission: function SP_Publishing_VideoChannel$set_downloadUrlVisibleMinPermission(value) {
        this.get_objectData().get_properties()['DownloadUrlVisibleMinPermission'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'DownloadUrlVisibleMinPermission', value));
        }
        return value;
    },
    
    get_fullUrl: function SP_Publishing_VideoChannel$get_fullUrl() {
        this.checkUninitializedProperty('FullUrl');
        return ((this.get_objectData().get_properties()['FullUrl']));
    },
    
    get_id: function SP_Publishing_VideoChannel$get_id() {
        this.checkUninitializedProperty('Id');
        return ((this.get_objectData().get_properties()['Id']));
    },
    
    get_search: function SP_Publishing_VideoChannel$get_search() {
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['Search']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.Publishing.Search(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Search'));
            this.get_objectData().get_clientObjectProperties()['Search'] = $v_0;
        }
        return $v_0;
    },
    
    get_serverRelativeUrl: function SP_Publishing_VideoChannel$get_serverRelativeUrl() {
        this.checkUninitializedProperty('ServerRelativeUrl');
        return ((this.get_objectData().get_properties()['ServerRelativeUrl']));
    },
    
    get_shareByEmailEnabled: function SP_Publishing_VideoChannel$get_shareByEmailEnabled() {
        this.checkUninitializedProperty('ShareByEmailEnabled');
        return ((this.get_objectData().get_properties()['ShareByEmailEnabled']));
    },
    
    get_spotlightVideos: function SP_Publishing_VideoChannel$get_spotlightVideos() {
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['SpotlightVideos']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.Publishing.SpotlightVideoCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'SpotlightVideos'));
            this.get_objectData().get_clientObjectProperties()['SpotlightVideos'] = $v_0;
        }
        return $v_0;
    },
    
    get_tileHtmlColor: function SP_Publishing_VideoChannel$get_tileHtmlColor() {
        this.checkUninitializedProperty('TileHtmlColor');
        return ((this.get_objectData().get_properties()['TileHtmlColor']));
    },
    
    set_tileHtmlColor: function SP_Publishing_VideoChannel$set_tileHtmlColor(value) {
        this.get_objectData().get_properties()['TileHtmlColor'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'TileHtmlColor', value));
        }
        return value;
    },
    
    get_title: function SP_Publishing_VideoChannel$get_title() {
        this.checkUninitializedProperty('Title');
        return ((this.get_objectData().get_properties()['Title']));
    },
    
    set_title: function SP_Publishing_VideoChannel$set_title(value) {
        this.get_objectData().get_properties()['Title'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Title', value));
        }
        return value;
    },
    
    get_videos: function SP_Publishing_VideoChannel$get_videos() {
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['Videos']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.Publishing.VideoCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Videos'));
            this.get_objectData().get_clientObjectProperties()['Videos'] = $v_0;
        }
        return $v_0;
    },
    
    get_yammerDefaultGroupId: function SP_Publishing_VideoChannel$get_yammerDefaultGroupId() {
        this.checkUninitializedProperty('YammerDefaultGroupId');
        return ((this.get_objectData().get_properties()['YammerDefaultGroupId']));
    },
    
    set_yammerDefaultGroupId: function SP_Publishing_VideoChannel$set_yammerDefaultGroupId(value) {
        this.get_objectData().get_properties()['YammerDefaultGroupId'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'YammerDefaultGroupId', value));
        }
        return value;
    },
    
    get_yammerEnabled: function SP_Publishing_VideoChannel$get_yammerEnabled() {
        this.checkUninitializedProperty('YammerEnabled');
        return ((this.get_objectData().get_properties()['YammerEnabled']));
    },
    
    set_yammerEnabled: function SP_Publishing_VideoChannel$set_yammerEnabled(value) {
        this.get_objectData().get_properties()['YammerEnabled'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'YammerEnabled', value));
        }
        return value;
    },
    
    initPropertiesFromJson: function SP_Publishing_VideoChannel$initPropertiesFromJson(parentNode) {
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.CanAdministrateByCurrent;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['CanAdministrateByCurrent'] = ($v_0);
            delete parentNode.CanAdministrateByCurrent;
        }
        $v_0 = parentNode.CanEditByCurrent;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['CanEditByCurrent'] = ($v_0);
            delete parentNode.CanEditByCurrent;
        }
        $v_0 = parentNode.CanViewByCurrent;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['CanViewByCurrent'] = ($v_0);
            delete parentNode.CanViewByCurrent;
        }
        $v_0 = parentNode.ChannelPageUrl;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ChannelPageUrl'] = ($v_0);
            delete parentNode.ChannelPageUrl;
        }
        $v_0 = parentNode.Description;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Description'] = ($v_0);
            delete parentNode.Description;
        }
        $v_0 = parentNode.DownloadUrlVisibleMinPermission;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['DownloadUrlVisibleMinPermission'] = ((SP.DataConvert.fixupType(this.get_context(), $v_0)));
            delete parentNode.DownloadUrlVisibleMinPermission;
        }
        $v_0 = parentNode.FullUrl;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['FullUrl'] = ($v_0);
            delete parentNode.FullUrl;
        }
        $v_0 = parentNode.Id;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Id'] = ($v_0);
            delete parentNode.Id;
        }
        $v_0 = parentNode.Search;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('Search', this.get_search(), $v_0);
            this.get_search().fromJson($v_0);
            delete parentNode.Search;
        }
        $v_0 = parentNode.ServerRelativeUrl;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ServerRelativeUrl'] = ($v_0);
            delete parentNode.ServerRelativeUrl;
        }
        $v_0 = parentNode.ShareByEmailEnabled;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ShareByEmailEnabled'] = ($v_0);
            delete parentNode.ShareByEmailEnabled;
        }
        $v_0 = parentNode.SpotlightVideos;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('SpotlightVideos', this.get_spotlightVideos(), $v_0);
            this.get_spotlightVideos().fromJson($v_0);
            delete parentNode.SpotlightVideos;
        }
        $v_0 = parentNode.TileHtmlColor;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['TileHtmlColor'] = ($v_0);
            delete parentNode.TileHtmlColor;
        }
        $v_0 = parentNode.Title;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Title'] = ($v_0);
            delete parentNode.Title;
        }
        $v_0 = parentNode.Videos;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('Videos', this.get_videos(), $v_0);
            this.get_videos().fromJson($v_0);
            delete parentNode.Videos;
        }
        $v_0 = parentNode.YammerDefaultGroupId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['YammerDefaultGroupId'] = ($v_0);
            delete parentNode.YammerDefaultGroupId;
        }
        $v_0 = parentNode.YammerEnabled;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['YammerEnabled'] = ($v_0);
            delete parentNode.YammerEnabled;
        }
    },
    
    getVideoCount: function SP_Publishing_VideoChannel$getVideoCount() {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'GetVideoCount', null);
        $v_0.addQuery($v_2);
        $v_1 = new SP.IntResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    },
    
    getChannelPageUrl: function SP_Publishing_VideoChannel$getChannelPageUrl(viewMode) {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'GetChannelPageUrl', [ viewMode ]);
        $v_0.addQuery($v_2);
        $v_1 = new SP.StringResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    },
    
    update: function SP_Publishing_VideoChannel$update() {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'Update', null);
        $v_0.addQuery($v_1);
    }
}


SP.Publishing.VideoChannelPropertyNames = function SP_Publishing_VideoChannelPropertyNames() {
}


SP.Publishing.VideoChannelObjectPropertyNames = function SP_Publishing_VideoChannelObjectPropertyNames() {
}


SP.Publishing.VideoChannelCollection = function SP_Publishing_VideoChannelCollection(context, objectPath) {
    SP.Publishing.VideoChannelCollection.initializeBase(this, [ context, objectPath ]);
}
SP.Publishing.VideoChannelCollection.prototype = {
    
    itemAt: function SP_Publishing_VideoChannelCollection$itemAt(index) {
        return this.getItemAtIndex(index);
    },
    
    get_item: function SP_Publishing_VideoChannelCollection$get_item(index) {
        return this.getItemAtIndex(index);
    },
    
    get_childItemType: function SP_Publishing_VideoChannelCollection$get_childItemType() {
        return SP.Publishing.VideoChannel;
    },
    
    getById: function SP_Publishing_VideoChannelCollection$getById(id) {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = ((this.get_objectData().get_methodReturnObjects()['GetById']));
        if (SP.ScriptUtility.isNullOrUndefined($v_2)) {
            $v_2 = {};
            this.get_objectData().get_methodReturnObjects()['GetById'] = $v_2;
        }
        $v_1 = (($v_2[id.toString()]));
        if (!$v_0.get_disableReturnValueCache() && !SP.ScriptUtility.isNullOrUndefined($v_1)) {
            return $v_1;
        }
        $v_1 = new SP.Publishing.VideoChannel($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetById', [ id ]));
        if (!$v_0.get_disableReturnValueCache()) {
            $v_2[id.toString()] = $v_1;
        }
        return $v_1;
    }
}


SP.Publishing.VideoCollection = function SP_Publishing_VideoCollection(context, objectPath) {
    SP.Publishing.VideoCollection.initializeBase(this, [ context, objectPath ]);
}
SP.Publishing.VideoCollection.prototype = {
    
    itemAt: function SP_Publishing_VideoCollection$itemAt(index) {
        return this.getItemAtIndex(index);
    },
    
    get_item: function SP_Publishing_VideoCollection$get_item(index) {
        return this.getItemAtIndex(index);
    },
    
    get_childItemType: function SP_Publishing_VideoCollection$get_childItemType() {
        return SP.Publishing.VideoItem;
    },
    
    getById: function SP_Publishing_VideoCollection$getById(id) {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = ((this.get_objectData().get_methodReturnObjects()['GetById']));
        if (SP.ScriptUtility.isNullOrUndefined($v_2)) {
            $v_2 = {};
            this.get_objectData().get_methodReturnObjects()['GetById'] = $v_2;
        }
        $v_1 = (($v_2[id.toString()]));
        if (!$v_0.get_disableReturnValueCache() && !SP.ScriptUtility.isNullOrUndefined($v_1)) {
            return $v_1;
        }
        $v_1 = new SP.Publishing.VideoItem($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetById', [ id ]));
        if (!$v_0.get_disableReturnValueCache()) {
            $v_2[id.toString()] = $v_1;
        }
        return $v_1;
    }
}


SP.Publishing.VideoItem = function SP_Publishing_VideoItem(context, objectPath) {
    SP.Publishing.VideoItem.initializeBase(this, [ context, objectPath ]);
}
SP.Publishing.VideoItem.prototype = {
    
    get_author: function SP_Publishing_VideoItem$get_author() {
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['Author']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.User(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Author'));
            this.get_objectData().get_clientObjectProperties()['Author'] = $v_0;
        }
        return $v_0;
    },
    
    get_channelID: function SP_Publishing_VideoItem$get_channelID() {
        this.checkUninitializedProperty('ChannelID');
        return ((this.get_objectData().get_properties()['ChannelID']));
    },
    
    get_createdDate: function SP_Publishing_VideoItem$get_createdDate() {
        this.checkUninitializedProperty('CreatedDate');
        return ((this.get_objectData().get_properties()['CreatedDate']));
    },
    
    get_defaultEmbedCode: function SP_Publishing_VideoItem$get_defaultEmbedCode() {
        this.checkUninitializedProperty('DefaultEmbedCode');
        return ((this.get_objectData().get_properties()['DefaultEmbedCode']));
    },
    
    get_description: function SP_Publishing_VideoItem$get_description() {
        this.checkUninitializedProperty('Description');
        return ((this.get_objectData().get_properties()['Description']));
    },
    
    set_description: function SP_Publishing_VideoItem$set_description(value) {
        this.get_objectData().get_properties()['Description'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Description', value));
        }
        return value;
    },
    
    get_displayFormUrl: function SP_Publishing_VideoItem$get_displayFormUrl() {
        this.checkUninitializedProperty('DisplayFormUrl');
        return ((this.get_objectData().get_properties()['DisplayFormUrl']));
    },
    
    get_fileName: function SP_Publishing_VideoItem$get_fileName() {
        this.checkUninitializedProperty('FileName');
        return ((this.get_objectData().get_properties()['FileName']));
    },
    
    get_owner: function SP_Publishing_VideoItem$get_owner() {
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['Owner']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.User(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Owner'));
            this.get_objectData().get_clientObjectProperties()['Owner'] = $v_0;
        }
        return $v_0;
    },
    
    get_ownerName: function SP_Publishing_VideoItem$get_ownerName() {
        this.checkUninitializedProperty('OwnerName');
        return ((this.get_objectData().get_properties()['OwnerName']));
    },
    
    get_peopleInMedia: function SP_Publishing_VideoItem$get_peopleInMedia() {
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['PeopleInMedia']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.UserCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'PeopleInMedia'));
            this.get_objectData().get_clientObjectProperties()['PeopleInMedia'] = $v_0;
        }
        return $v_0;
    },
    
    get_playerPageUrl: function SP_Publishing_VideoItem$get_playerPageUrl() {
        this.checkUninitializedProperty('PlayerPageUrl');
        return ((this.get_objectData().get_properties()['PlayerPageUrl']));
    },
    
    get_serverRelativeUrl: function SP_Publishing_VideoItem$get_serverRelativeUrl() {
        this.checkUninitializedProperty('ServerRelativeUrl');
        return ((this.get_objectData().get_properties()['ServerRelativeUrl']));
    },
    
    get_thumbnailSelection: function SP_Publishing_VideoItem$get_thumbnailSelection() {
        this.checkUninitializedProperty('ThumbnailSelection');
        return ((this.get_objectData().get_properties()['ThumbnailSelection']));
    },
    
    set_thumbnailSelection: function SP_Publishing_VideoItem$set_thumbnailSelection(value) {
        this.get_objectData().get_properties()['ThumbnailSelection'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'ThumbnailSelection', value));
        }
        return value;
    },
    
    get_thumbnailUrl: function SP_Publishing_VideoItem$get_thumbnailUrl() {
        this.checkUninitializedProperty('ThumbnailUrl');
        return ((this.get_objectData().get_properties()['ThumbnailUrl']));
    },
    
    get_title: function SP_Publishing_VideoItem$get_title() {
        this.checkUninitializedProperty('Title');
        return ((this.get_objectData().get_properties()['Title']));
    },
    
    set_title: function SP_Publishing_VideoItem$set_title(value) {
        this.get_objectData().get_properties()['Title'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Title', value));
        }
        return value;
    },
    
    get_id: function SP_Publishing_VideoItem$get_id() {
        this.checkUninitializedProperty('ID');
        return ((this.get_objectData().get_properties()['ID']));
    },
    
    get_url: function SP_Publishing_VideoItem$get_url() {
        this.checkUninitializedProperty('Url');
        return ((this.get_objectData().get_properties()['Url']));
    },
    
    get_videoDownloadUrl: function SP_Publishing_VideoItem$get_videoDownloadUrl() {
        this.checkUninitializedProperty('VideoDownloadUrl');
        return ((this.get_objectData().get_properties()['VideoDownloadUrl']));
    },
    
    get_videoDurationInSeconds: function SP_Publishing_VideoItem$get_videoDurationInSeconds() {
        this.checkUninitializedProperty('VideoDurationInSeconds');
        return ((this.get_objectData().get_properties()['VideoDurationInSeconds']));
    },
    
    set_videoDurationInSeconds: function SP_Publishing_VideoItem$set_videoDurationInSeconds(value) {
        this.get_objectData().get_properties()['VideoDurationInSeconds'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'VideoDurationInSeconds', value));
        }
        return value;
    },
    
    get_videoProcessingStatus: function SP_Publishing_VideoItem$get_videoProcessingStatus() {
        this.checkUninitializedProperty('VideoProcessingStatus');
        return ((this.get_objectData().get_properties()['VideoProcessingStatus']));
    },
    
    get_viewCount: function SP_Publishing_VideoItem$get_viewCount() {
        this.checkUninitializedProperty('ViewCount');
        return ((this.get_objectData().get_properties()['ViewCount']));
    },
    
    get_yammerObjectUrl: function SP_Publishing_VideoItem$get_yammerObjectUrl() {
        this.checkUninitializedProperty('YammerObjectUrl');
        return ((this.get_objectData().get_properties()['YammerObjectUrl']));
    },
    
    initPropertiesFromJson: function SP_Publishing_VideoItem$initPropertiesFromJson(parentNode) {
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.Author;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('Author', this.get_author(), $v_0);
            this.get_author().fromJson($v_0);
            delete parentNode.Author;
        }
        $v_0 = parentNode.ChannelID;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ChannelID'] = ($v_0);
            delete parentNode.ChannelID;
        }
        $v_0 = parentNode.CreatedDate;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['CreatedDate'] = ($v_0);
            delete parentNode.CreatedDate;
        }
        $v_0 = parentNode.DefaultEmbedCode;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['DefaultEmbedCode'] = ($v_0);
            delete parentNode.DefaultEmbedCode;
        }
        $v_0 = parentNode.Description;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Description'] = ($v_0);
            delete parentNode.Description;
        }
        $v_0 = parentNode.DisplayFormUrl;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['DisplayFormUrl'] = ($v_0);
            delete parentNode.DisplayFormUrl;
        }
        $v_0 = parentNode.FileName;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['FileName'] = ($v_0);
            delete parentNode.FileName;
        }
        $v_0 = parentNode.Owner;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('Owner', this.get_owner(), $v_0);
            this.get_owner().fromJson($v_0);
            delete parentNode.Owner;
        }
        $v_0 = parentNode.OwnerName;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['OwnerName'] = ($v_0);
            delete parentNode.OwnerName;
        }
        $v_0 = parentNode.PeopleInMedia;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('PeopleInMedia', this.get_peopleInMedia(), $v_0);
            this.get_peopleInMedia().fromJson($v_0);
            delete parentNode.PeopleInMedia;
        }
        $v_0 = parentNode.PlayerPageUrl;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['PlayerPageUrl'] = ($v_0);
            delete parentNode.PlayerPageUrl;
        }
        $v_0 = parentNode.ServerRelativeUrl;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ServerRelativeUrl'] = ($v_0);
            delete parentNode.ServerRelativeUrl;
        }
        $v_0 = parentNode.ThumbnailSelection;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ThumbnailSelection'] = ((SP.DataConvert.fixupType(this.get_context(), $v_0)));
            delete parentNode.ThumbnailSelection;
        }
        $v_0 = parentNode.ThumbnailUrl;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ThumbnailUrl'] = ($v_0);
            delete parentNode.ThumbnailUrl;
        }
        $v_0 = parentNode.Title;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Title'] = ($v_0);
            delete parentNode.Title;
        }
        $v_0 = parentNode.ID;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ID'] = ($v_0);
            delete parentNode.ID;
        }
        $v_0 = parentNode.Url;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Url'] = ($v_0);
            delete parentNode.Url;
        }
        $v_0 = parentNode.VideoDownloadUrl;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['VideoDownloadUrl'] = ($v_0);
            delete parentNode.VideoDownloadUrl;
        }
        $v_0 = parentNode.VideoDurationInSeconds;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['VideoDurationInSeconds'] = ($v_0);
            delete parentNode.VideoDurationInSeconds;
        }
        $v_0 = parentNode.VideoProcessingStatus;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['VideoProcessingStatus'] = ((SP.DataConvert.fixupType(this.get_context(), $v_0)));
            delete parentNode.VideoProcessingStatus;
        }
        $v_0 = parentNode.ViewCount;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ViewCount'] = ($v_0);
            delete parentNode.ViewCount;
        }
        $v_0 = parentNode.YammerObjectUrl;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['YammerObjectUrl'] = ($v_0);
            delete parentNode.YammerObjectUrl;
        }
    },
    
    getPlaybackUrl: function SP_Publishing_VideoItem$getPlaybackUrl(videoFormat) {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = ((this.get_objectData().get_methodReturnObjects()['GetPlaybackUrl']));
        if (SP.ScriptUtility.isNullOrUndefined($v_2)) {
            $v_2 = [];
            this.get_objectData().get_methodReturnObjects()['GetPlaybackUrl'] = $v_2;
        }
        $v_1 = (($v_2[(videoFormat)]));
        if (!$v_0.get_disableReturnValueCache() && !SP.ScriptUtility.isNullOrUndefined($v_1)) {
            return $v_1;
        }
        var $v_3 = new SP.ClientActionInvokeMethod(this, 'GetPlaybackUrl', [ videoFormat ]);
        $v_0.addQuery($v_3);
        $v_1 = new SP.StringResult();
        $v_0.addQueryIdAndResultObject($v_3.get_id(), $v_1);
        if (!$v_0.get_disableReturnValueCache()) {
            $v_2[(videoFormat)] = $v_1;
        }
        return $v_1;
    },
    
    getStreamingKeyAccessToken: function SP_Publishing_VideoItem$getStreamingKeyAccessToken() {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'GetStreamingKeyAccessToken', null);
        $v_0.addQuery($v_2);
        $v_1 = new SP.StringResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    },
    
    getPlaybackMetadata: function SP_Publishing_VideoItem$getPlaybackMetadata(sdnConfiguration) {
        var $v_0 = this.get_context();
        var $v_1;
        $v_1 = new SP.Publishing.VideoPlaybackMetadata($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetPlaybackMetadata', [ sdnConfiguration ]));
        return $v_1;
    },
    
    update: function SP_Publishing_VideoItem$update() {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'Update', null);
        $v_0.addQuery($v_1);
    },
    
    deleteObject: function SP_Publishing_VideoItem$deleteObject() {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'DeleteObject', null);
        $v_0.addQuery($v_1);
        this.removeFromParentCollection();
    }
}


SP.Publishing.VideoItemPropertyNames = function SP_Publishing_VideoItemPropertyNames() {
}


SP.Publishing.VideoItemObjectPropertyNames = function SP_Publishing_VideoItemObjectPropertyNames() {
}


SP.Publishing.VideoPermissionGroup = function SP_Publishing_VideoPermissionGroup(context, objectPath) {
    SP.Publishing.VideoPermissionGroup.initializeBase(this, [ context, objectPath ]);
}
SP.Publishing.VideoPermissionGroup.prototype = {
    
    get_id: function SP_Publishing_VideoPermissionGroup$get_id() {
        this.checkUninitializedProperty('Id');
        return ((this.get_objectData().get_properties()['Id']));
    },
    
    get_users: function SP_Publishing_VideoPermissionGroup$get_users() {
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['Users']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.UserCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Users'));
            this.get_objectData().get_clientObjectProperties()['Users'] = $v_0;
        }
        return $v_0;
    },
    
    initPropertiesFromJson: function SP_Publishing_VideoPermissionGroup$initPropertiesFromJson(parentNode) {
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.Id;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Id'] = ($v_0);
            delete parentNode.Id;
        }
        $v_0 = parentNode.Users;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('Users', this.get_users(), $v_0);
            this.get_users().fromJson($v_0);
            delete parentNode.Users;
        }
    }
}


SP.Publishing.VideoPermissionGroupPropertyNames = function SP_Publishing_VideoPermissionGroupPropertyNames() {
}


SP.Publishing.VideoPermissionGroupObjectPropertyNames = function SP_Publishing_VideoPermissionGroupObjectPropertyNames() {
}


SP.Publishing.VideoPlaybackMetadata = function SP_Publishing_VideoPlaybackMetadata(context, objectPath) {
    SP.Publishing.VideoPlaybackMetadata.initializeBase(this, [ context, objectPath ]);
}
SP.Publishing.VideoPlaybackMetadata.prototype = {
    
    get_hlsUrl: function SP_Publishing_VideoPlaybackMetadata$get_hlsUrl() {
        this.checkUninitializedProperty('HLSUrl');
        return ((this.get_objectData().get_properties()['HLSUrl']));
    },
    
    get_sdnPlaybackMetadata: function SP_Publishing_VideoPlaybackMetadata$get_sdnPlaybackMetadata() {
        this.checkUninitializedProperty('SdnPlaybackMetadata');
        return ((this.get_objectData().get_properties()['SdnPlaybackMetadata']));
    },
    
    get_streamingUrl: function SP_Publishing_VideoPlaybackMetadata$get_streamingUrl() {
        this.checkUninitializedProperty('StreamingUrl');
        return ((this.get_objectData().get_properties()['StreamingUrl']));
    },
    
    get_token: function SP_Publishing_VideoPlaybackMetadata$get_token() {
        this.checkUninitializedProperty('Token');
        return ((this.get_objectData().get_properties()['Token']));
    },
    
    initPropertiesFromJson: function SP_Publishing_VideoPlaybackMetadata$initPropertiesFromJson(parentNode) {
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.HLSUrl;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['HLSUrl'] = ($v_0);
            delete parentNode.HLSUrl;
        }
        $v_0 = parentNode.SdnPlaybackMetadata;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['SdnPlaybackMetadata'] = ($v_0);
            delete parentNode.SdnPlaybackMetadata;
        }
        $v_0 = parentNode.StreamingUrl;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['StreamingUrl'] = ($v_0);
            delete parentNode.StreamingUrl;
        }
        $v_0 = parentNode.Token;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Token'] = ($v_0);
            delete parentNode.Token;
        }
    }
}


SP.Publishing.VideoPlaybackMetadataPropertyNames = function SP_Publishing_VideoPlaybackMetadataPropertyNames() {
}


SP.Publishing.VideoThumbnail = function SP_Publishing_VideoThumbnail(context, objectPath) {
    SP.Publishing.VideoThumbnail.initializeBase(this, [ context, objectPath ]);
}
SP.Publishing.VideoThumbnail.prototype = {
    
    get_choice: function SP_Publishing_VideoThumbnail$get_choice() {
        this.checkUninitializedProperty('Choice');
        return ((this.get_objectData().get_properties()['Choice']));
    },
    
    get_isSelected: function SP_Publishing_VideoThumbnail$get_isSelected() {
        this.checkUninitializedProperty('IsSelected');
        return ((this.get_objectData().get_properties()['IsSelected']));
    },
    
    get_url: function SP_Publishing_VideoThumbnail$get_url() {
        this.checkUninitializedProperty('Url');
        return ((this.get_objectData().get_properties()['Url']));
    },
    
    initPropertiesFromJson: function SP_Publishing_VideoThumbnail$initPropertiesFromJson(parentNode) {
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.Choice;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Choice'] = ((SP.DataConvert.fixupType(this.get_context(), $v_0)));
            delete parentNode.Choice;
        }
        $v_0 = parentNode.IsSelected;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['IsSelected'] = ($v_0);
            delete parentNode.IsSelected;
        }
        $v_0 = parentNode.Url;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Url'] = ($v_0);
            delete parentNode.Url;
        }
    }
}


SP.Publishing.VideoThumbnailPropertyNames = function SP_Publishing_VideoThumbnailPropertyNames() {
}


SP.Publishing.VideoThumbnailCollection = function SP_Publishing_VideoThumbnailCollection(context, objectPath) {
    SP.Publishing.VideoThumbnailCollection.initializeBase(this, [ context, objectPath ]);
}
SP.Publishing.VideoThumbnailCollection.prototype = {
    
    itemAt: function SP_Publishing_VideoThumbnailCollection$itemAt(index) {
        return this.getItemAtIndex(index);
    },
    
    get_item: function SP_Publishing_VideoThumbnailCollection$get_item(index) {
        return this.getItemAtIndex(index);
    },
    
    get_childItemType: function SP_Publishing_VideoThumbnailCollection$get_childItemType() {
        return SP.Publishing.VideoThumbnail;
    },
    
    getByIndex: function SP_Publishing_VideoThumbnailCollection$getByIndex(choice) {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = ((this.get_objectData().get_methodReturnObjects()['GetByIndex']));
        if (SP.ScriptUtility.isNullOrUndefined($v_2)) {
            $v_2 = [];
            this.get_objectData().get_methodReturnObjects()['GetByIndex'] = $v_2;
        }
        $v_1 = (($v_2[(choice)]));
        if (!$v_0.get_disableReturnValueCache() && !SP.ScriptUtility.isNullOrUndefined($v_1)) {
            return $v_1;
        }
        $v_1 = new SP.Publishing.VideoThumbnail($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetByIndex', [ choice ]));
        if (!$v_0.get_disableReturnValueCache()) {
            $v_2[(choice)] = $v_1;
        }
        return $v_1;
    }
}


Type.registerNamespace('SP.Publishing.Navigation');

SP.Publishing.Navigation.NavigationLinkType = function() {}
SP.Publishing.Navigation.NavigationLinkType.prototype = {
    root: 0, 
    friendlyUrl: 1, 
    simpleLink: 2
}
SP.Publishing.Navigation.NavigationLinkType.registerEnum('SP.Publishing.Navigation.NavigationLinkType', false);


SP.Publishing.Navigation.PortalNavigationCacheState = function() {}
SP.Publishing.Navigation.PortalNavigationCacheState.prototype = {
    enabled: 1, 
    pendingEnable: 2, 
    refreshing: 3, 
    pendingOptOut: 4, 
    optedOut: 5
}
SP.Publishing.Navigation.PortalNavigationCacheState.registerEnum('SP.Publishing.Navigation.PortalNavigationCacheState', false);


SP.Publishing.Navigation.StandardNavigationSource = function() {}
SP.Publishing.Navigation.StandardNavigationSource.prototype = {
    unknown: 0, 
    portalProvider: 1, 
    taxonomyProvider: 2, 
    inheritFromParentWeb: 3
}
SP.Publishing.Navigation.StandardNavigationSource.registerEnum('SP.Publishing.Navigation.StandardNavigationSource', false);


SP.Publishing.Navigation.NavigationTermProviderNameCollection = function SP_Publishing_Navigation_NavigationTermProviderNameCollection(context, objectPath) {
    SP.Publishing.Navigation.NavigationTermProviderNameCollection.initializeBase(this, [ context, objectPath ]);
}
SP.Publishing.Navigation.NavigationTermProviderNameCollection.prototype = {
    
    $12_2: function SP_Publishing_Navigation_NavigationTermProviderNameCollection$$12_2($p0) {
        Array.add(this.get_data(), $p0);
    },
    
    $13_2: function SP_Publishing_Navigation_NavigationTermProviderNameCollection$$13_2() {
        var $v_0 = this.get_data();
        while ($v_0.length > 0) {
            Array.removeAt($v_0, $v_0.length - 1);
        }
    },
    
    $14_2: function SP_Publishing_Navigation_NavigationTermProviderNameCollection$$14_2($p0) {
        Array.remove(this.get_data(), $p0);
    },
    
    itemAt: function SP_Publishing_Navigation_NavigationTermProviderNameCollection$itemAt(index) {
        return this.getItemAtIndex(index);
    },
    
    get_item: function SP_Publishing_Navigation_NavigationTermProviderNameCollection$get_item(index) {
        return this.getItemAtIndex(index);
    },
    
    get_childItemType: function SP_Publishing_Navigation_NavigationTermProviderNameCollection$get_childItemType() {
        return String;
    },
    
    add: function SP_Publishing_Navigation_NavigationTermProviderNameCollection$add(item) {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'Add', [ item ]);
        $v_0.addQuery($v_1);
        this.$12_2(item);
    },
    
    clear: function SP_Publishing_Navigation_NavigationTermProviderNameCollection$clear() {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'Clear', null);
        $v_0.addQuery($v_1);
        this.$13_2();
    },
    
    remove: function SP_Publishing_Navigation_NavigationTermProviderNameCollection$remove(item) {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'Remove', [ item ]);
        $v_0.addQuery($v_2);
        $v_1 = new SP.BooleanResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        this.$14_2(item);
        return $v_1;
    }
}


SP.Publishing.Navigation.NavigationTerm = function SP_Publishing_Navigation_NavigationTerm(context, objectPath) {
    SP.Publishing.Navigation.NavigationTerm.initializeBase(this, [ context, objectPath ]);
}
SP.Publishing.Navigation.NavigationTerm.getAsResolvedByWeb = function SP_Publishing_Navigation_NavigationTerm$getAsResolvedByWeb(context, term, web, siteMapProviderName) {
    if ((!context)) {
        throw Error.argumentNull('context');
    }
    var $v_0;
    $v_0 = new SP.Publishing.Navigation.NavigationTerm(context, new SP.ObjectPathStaticMethod(context, '{74b7367a-e303-43e8-891e-dac764c96e53}', 'GetAsResolvedByWeb', [ term, web, siteMapProviderName ]));
    $v_0.get_path().setPendingReplace();
    var $v_1 = new SP.ObjectIdentityQuery($v_0.get_path());
    context.addQueryIdAndResultObject($v_1.get_id(), $v_0);
    context.addQuery($v_1);
    return $v_0;
}
SP.Publishing.Navigation.NavigationTerm.getAsResolvedByView = function SP_Publishing_Navigation_NavigationTerm$getAsResolvedByView(context, term, view) {
    if ((!context)) {
        throw Error.argumentNull('context');
    }
    var $v_0;
    $v_0 = new SP.Publishing.Navigation.NavigationTerm(context, new SP.ObjectPathStaticMethod(context, '{74b7367a-e303-43e8-891e-dac764c96e53}', 'GetAsResolvedByView', [ term, view ]));
    $v_0.get_path().setPendingReplace();
    var $v_1 = new SP.ObjectIdentityQuery($v_0.get_path());
    context.addQueryIdAndResultObject($v_1.get_id(), $v_0);
    context.addQuery($v_1);
    return $v_0;
}
SP.Publishing.Navigation.NavigationTerm.prototype = {
    
    get_associatedFolderUrl: function SP_Publishing_Navigation_NavigationTerm$get_associatedFolderUrl() {
        this.checkUninitializedProperty('AssociatedFolderUrl');
        return ((this.get_objectData().get_properties()['AssociatedFolderUrl']));
    },
    
    set_associatedFolderUrl: function SP_Publishing_Navigation_NavigationTerm$set_associatedFolderUrl(value) {
        this.get_objectData().get_properties()['AssociatedFolderUrl'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'AssociatedFolderUrl', value));
        }
        return value;
    },
    
    get_catalogTargetUrl: function SP_Publishing_Navigation_NavigationTerm$get_catalogTargetUrl() {
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['CatalogTargetUrl']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.Publishing.CustomizableString(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'CatalogTargetUrl'));
            this.get_objectData().get_clientObjectProperties()['CatalogTargetUrl'] = $v_0;
        }
        return $v_0;
    },
    
    get_categoryImageUrl: function SP_Publishing_Navigation_NavigationTerm$get_categoryImageUrl() {
        this.checkUninitializedProperty('CategoryImageUrl');
        return ((this.get_objectData().get_properties()['CategoryImageUrl']));
    },
    
    set_categoryImageUrl: function SP_Publishing_Navigation_NavigationTerm$set_categoryImageUrl(value) {
        this.get_objectData().get_properties()['CategoryImageUrl'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'CategoryImageUrl', value));
        }
        return value;
    },
    
    get_excludedProviders: function SP_Publishing_Navigation_NavigationTerm$get_excludedProviders() {
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['ExcludedProviders']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.Publishing.Navigation.NavigationTermProviderNameCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'ExcludedProviders'));
            this.get_objectData().get_clientObjectProperties()['ExcludedProviders'] = $v_0;
        }
        return $v_0;
    },
    
    get_excludeFromCurrentNavigation: function SP_Publishing_Navigation_NavigationTerm$get_excludeFromCurrentNavigation() {
        this.checkUninitializedProperty('ExcludeFromCurrentNavigation');
        return ((this.get_objectData().get_properties()['ExcludeFromCurrentNavigation']));
    },
    
    set_excludeFromCurrentNavigation: function SP_Publishing_Navigation_NavigationTerm$set_excludeFromCurrentNavigation(value) {
        this.get_objectData().get_properties()['ExcludeFromCurrentNavigation'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'ExcludeFromCurrentNavigation', value));
        }
        return value;
    },
    
    get_excludeFromGlobalNavigation: function SP_Publishing_Navigation_NavigationTerm$get_excludeFromGlobalNavigation() {
        this.checkUninitializedProperty('ExcludeFromGlobalNavigation');
        return ((this.get_objectData().get_properties()['ExcludeFromGlobalNavigation']));
    },
    
    set_excludeFromGlobalNavigation: function SP_Publishing_Navigation_NavigationTerm$set_excludeFromGlobalNavigation(value) {
        this.get_objectData().get_properties()['ExcludeFromGlobalNavigation'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'ExcludeFromGlobalNavigation', value));
        }
        return value;
    },
    
    get_friendlyUrlSegment: function SP_Publishing_Navigation_NavigationTerm$get_friendlyUrlSegment() {
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['FriendlyUrlSegment']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.Publishing.CustomizableString(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'FriendlyUrlSegment'));
            this.get_objectData().get_clientObjectProperties()['FriendlyUrlSegment'] = $v_0;
        }
        return $v_0;
    },
    
    get_hoverText: function SP_Publishing_Navigation_NavigationTerm$get_hoverText() {
        this.checkUninitializedProperty('HoverText');
        return ((this.get_objectData().get_properties()['HoverText']));
    },
    
    set_hoverText: function SP_Publishing_Navigation_NavigationTerm$set_hoverText(value) {
        this.get_objectData().get_properties()['HoverText'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'HoverText', value));
        }
        return value;
    },
    
    get_isDeprecated: function SP_Publishing_Navigation_NavigationTerm$get_isDeprecated() {
        this.checkUninitializedProperty('IsDeprecated');
        return ((this.get_objectData().get_properties()['IsDeprecated']));
    },
    
    get_isPinned: function SP_Publishing_Navigation_NavigationTerm$get_isPinned() {
        this.checkUninitializedProperty('IsPinned');
        return ((this.get_objectData().get_properties()['IsPinned']));
    },
    
    get_isPinnedRoot: function SP_Publishing_Navigation_NavigationTerm$get_isPinnedRoot() {
        this.checkUninitializedProperty('IsPinnedRoot');
        return ((this.get_objectData().get_properties()['IsPinnedRoot']));
    },
    
    get_parent: function SP_Publishing_Navigation_NavigationTerm$get_parent() {
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['Parent']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.Publishing.Navigation.NavigationTerm(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Parent'));
            this.get_objectData().get_clientObjectProperties()['Parent'] = $v_0;
        }
        return $v_0;
    },
    
    get_simpleLinkUrl: function SP_Publishing_Navigation_NavigationTerm$get_simpleLinkUrl() {
        this.checkUninitializedProperty('SimpleLinkUrl');
        return ((this.get_objectData().get_properties()['SimpleLinkUrl']));
    },
    
    set_simpleLinkUrl: function SP_Publishing_Navigation_NavigationTerm$set_simpleLinkUrl(value) {
        this.get_objectData().get_properties()['SimpleLinkUrl'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'SimpleLinkUrl', value));
        }
        return value;
    },
    
    get_targetSiteId: function SP_Publishing_Navigation_NavigationTerm$get_targetSiteId() {
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['TargetSiteId']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.Publishing.CustomizableString(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'TargetSiteId'));
            this.get_objectData().get_clientObjectProperties()['TargetSiteId'] = $v_0;
        }
        return $v_0;
    },
    
    get_targetTermSetId: function SP_Publishing_Navigation_NavigationTerm$get_targetTermSetId() {
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['TargetTermSetId']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.Publishing.CustomizableString(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'TargetTermSetId'));
            this.get_objectData().get_clientObjectProperties()['TargetTermSetId'] = $v_0;
        }
        return $v_0;
    },
    
    get_targetUrl: function SP_Publishing_Navigation_NavigationTerm$get_targetUrl() {
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['TargetUrl']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.Publishing.CustomizableString(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'TargetUrl'));
            this.get_objectData().get_clientObjectProperties()['TargetUrl'] = $v_0;
        }
        return $v_0;
    },
    
    get_targetUrlListId: function SP_Publishing_Navigation_NavigationTerm$get_targetUrlListId() {
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['TargetUrlListId']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.Publishing.CustomizableString(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'TargetUrlListId'));
            this.get_objectData().get_clientObjectProperties()['TargetUrlListId'] = $v_0;
        }
        return $v_0;
    },
    
    get_targetUrlListItemId: function SP_Publishing_Navigation_NavigationTerm$get_targetUrlListItemId() {
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['TargetUrlListItemId']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.Publishing.CustomizableString(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'TargetUrlListItemId'));
            this.get_objectData().get_clientObjectProperties()['TargetUrlListItemId'] = $v_0;
        }
        return $v_0;
    },
    
    get_targetUrlWebId: function SP_Publishing_Navigation_NavigationTerm$get_targetUrlWebId() {
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['TargetUrlWebId']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.Publishing.CustomizableString(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'TargetUrlWebId'));
            this.get_objectData().get_clientObjectProperties()['TargetUrlWebId'] = $v_0;
        }
        return $v_0;
    },
    
    get_termSet: function SP_Publishing_Navigation_NavigationTerm$get_termSet() {
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['TermSet']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.Publishing.Navigation.NavigationTermSet(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'TermSet'));
            this.get_objectData().get_clientObjectProperties()['TermSet'] = $v_0;
        }
        return $v_0;
    },
    
    initPropertiesFromJson: function SP_Publishing_Navigation_NavigationTerm$initPropertiesFromJson(parentNode) {
        SP.Publishing.Navigation.NavigationTermSetItem.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.AssociatedFolderUrl;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['AssociatedFolderUrl'] = ($v_0);
            delete parentNode.AssociatedFolderUrl;
        }
        $v_0 = parentNode.CatalogTargetUrl;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('CatalogTargetUrl', this.get_catalogTargetUrl(), $v_0);
            this.get_catalogTargetUrl().fromJson($v_0);
            delete parentNode.CatalogTargetUrl;
        }
        $v_0 = parentNode.CategoryImageUrl;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['CategoryImageUrl'] = ($v_0);
            delete parentNode.CategoryImageUrl;
        }
        $v_0 = parentNode.ExcludedProviders;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('ExcludedProviders', this.get_excludedProviders(), $v_0);
            this.get_excludedProviders().fromJson($v_0);
            delete parentNode.ExcludedProviders;
        }
        $v_0 = parentNode.ExcludeFromCurrentNavigation;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ExcludeFromCurrentNavigation'] = ($v_0);
            delete parentNode.ExcludeFromCurrentNavigation;
        }
        $v_0 = parentNode.ExcludeFromGlobalNavigation;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ExcludeFromGlobalNavigation'] = ($v_0);
            delete parentNode.ExcludeFromGlobalNavigation;
        }
        $v_0 = parentNode.FriendlyUrlSegment;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('FriendlyUrlSegment', this.get_friendlyUrlSegment(), $v_0);
            this.get_friendlyUrlSegment().fromJson($v_0);
            delete parentNode.FriendlyUrlSegment;
        }
        $v_0 = parentNode.HoverText;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['HoverText'] = ($v_0);
            delete parentNode.HoverText;
        }
        $v_0 = parentNode.IsDeprecated;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['IsDeprecated'] = ($v_0);
            delete parentNode.IsDeprecated;
        }
        $v_0 = parentNode.IsPinned;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['IsPinned'] = ($v_0);
            delete parentNode.IsPinned;
        }
        $v_0 = parentNode.IsPinnedRoot;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['IsPinnedRoot'] = ($v_0);
            delete parentNode.IsPinnedRoot;
        }
        $v_0 = parentNode.Parent;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('Parent', this.get_parent(), $v_0);
            this.get_parent().fromJson($v_0);
            delete parentNode.Parent;
        }
        $v_0 = parentNode.SimpleLinkUrl;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['SimpleLinkUrl'] = ($v_0);
            delete parentNode.SimpleLinkUrl;
        }
        $v_0 = parentNode.TargetSiteId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('TargetSiteId', this.get_targetSiteId(), $v_0);
            this.get_targetSiteId().fromJson($v_0);
            delete parentNode.TargetSiteId;
        }
        $v_0 = parentNode.TargetTermSetId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('TargetTermSetId', this.get_targetTermSetId(), $v_0);
            this.get_targetTermSetId().fromJson($v_0);
            delete parentNode.TargetTermSetId;
        }
        $v_0 = parentNode.TargetUrl;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('TargetUrl', this.get_targetUrl(), $v_0);
            this.get_targetUrl().fromJson($v_0);
            delete parentNode.TargetUrl;
        }
        $v_0 = parentNode.TargetUrlListId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('TargetUrlListId', this.get_targetUrlListId(), $v_0);
            this.get_targetUrlListId().fromJson($v_0);
            delete parentNode.TargetUrlListId;
        }
        $v_0 = parentNode.TargetUrlListItemId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('TargetUrlListItemId', this.get_targetUrlListItemId(), $v_0);
            this.get_targetUrlListItemId().fromJson($v_0);
            delete parentNode.TargetUrlListItemId;
        }
        $v_0 = parentNode.TargetUrlWebId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('TargetUrlWebId', this.get_targetUrlWebId(), $v_0);
            this.get_targetUrlWebId().fromJson($v_0);
            delete parentNode.TargetUrlWebId;
        }
        $v_0 = parentNode.TermSet;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('TermSet', this.get_termSet(), $v_0);
            this.get_termSet().fromJson($v_0);
            delete parentNode.TermSet;
        }
    },
    
    getAsEditable: function SP_Publishing_Navigation_NavigationTerm$getAsEditable(taxonomySession) {
        var $v_0 = this.get_context();
        var $v_1;
        $v_1 = new SP.Publishing.Navigation.NavigationTerm($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetAsEditable', [ taxonomySession ]));
        $v_1.get_path().setPendingReplace();
        var $v_2 = new SP.ObjectIdentityQuery($v_1.get_path());
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        $v_0.addQuery($v_2);
        return $v_1;
    },
    
    getWithNewView: function SP_Publishing_Navigation_NavigationTerm$getWithNewView(newView) {
        var $v_0 = this.get_context();
        var $v_1;
        $v_1 = new SP.Publishing.Navigation.NavigationTerm($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetWithNewView', [ newView ]));
        $v_1.get_path().setPendingReplace();
        var $v_2 = new SP.ObjectIdentityQuery($v_1.get_path());
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        $v_0.addQuery($v_2);
        return $v_1;
    },
    
    getResolvedTargetUrl: function SP_Publishing_Navigation_NavigationTerm$getResolvedTargetUrl(browserQueryString, remainingUrlSegments) {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'GetResolvedTargetUrl', [ browserQueryString, remainingUrlSegments ]);
        $v_0.addQuery($v_2);
        $v_1 = new SP.StringResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    },
    
    getResolvedTargetUrlWithoutQuery: function SP_Publishing_Navigation_NavigationTerm$getResolvedTargetUrlWithoutQuery() {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'GetResolvedTargetUrlWithoutQuery', null);
        $v_0.addQuery($v_2);
        $v_1 = new SP.StringResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    },
    
    getResolvedAssociatedFolderUrl: function SP_Publishing_Navigation_NavigationTerm$getResolvedAssociatedFolderUrl() {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'GetResolvedAssociatedFolderUrl', null);
        $v_0.addQuery($v_2);
        $v_1 = new SP.StringResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    },
    
    getWebRelativeFriendlyUrl: function SP_Publishing_Navigation_NavigationTerm$getWebRelativeFriendlyUrl() {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'GetWebRelativeFriendlyUrl', null);
        $v_0.addQuery($v_2);
        $v_1 = new SP.StringResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    },
    
    getAllParentTerms: function SP_Publishing_Navigation_NavigationTerm$getAllParentTerms() {
        var $v_0 = this.get_context();
        var $v_1;
        $v_1 = new SP.Publishing.Navigation.NavigationTermCollection($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetAllParentTerms', null));
        return $v_1;
    },
    
    getTaxonomyTerm: function SP_Publishing_Navigation_NavigationTerm$getTaxonomyTerm() {
        var $v_0 = this.get_context();
        var $v_1;
        $v_1 = new SP.Taxonomy.Term($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetTaxonomyTerm', null));
        $v_1.get_path().setPendingReplace();
        var $v_2 = new SP.ObjectIdentityQuery($v_1.get_path());
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        $v_0.addQuery($v_2);
        return $v_1;
    },
    
    move: function SP_Publishing_Navigation_NavigationTerm$move(newParent) {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'Move', [ newParent ]);
        $v_0.addQuery($v_1);
    },
    
    deleteObject: function SP_Publishing_Navigation_NavigationTerm$deleteObject() {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'DeleteObject', null);
        $v_0.addQuery($v_1);
    }
}


SP.Publishing.Navigation.NavigationTermPropertyNames = function SP_Publishing_Navigation_NavigationTermPropertyNames() {
}


SP.Publishing.Navigation.NavigationTermObjectPropertyNames = function SP_Publishing_Navigation_NavigationTermObjectPropertyNames() {
}


SP.Publishing.Navigation.NavigationTermCollection = function SP_Publishing_Navigation_NavigationTermCollection(context, objectPath) {
    SP.Publishing.Navigation.NavigationTermCollection.initializeBase(this, [ context, objectPath ]);
}
SP.Publishing.Navigation.NavigationTermCollection.prototype = {
    
    itemAt: function SP_Publishing_Navigation_NavigationTermCollection$itemAt(index) {
        return this.getItemAtIndex(index);
    },
    
    get_item: function SP_Publishing_Navigation_NavigationTermCollection$get_item(index) {
        return this.getItemAtIndex(index);
    },
    
    get_childItemType: function SP_Publishing_Navigation_NavigationTermCollection$get_childItemType() {
        return SP.Publishing.Navigation.NavigationTerm;
    }
}


SP.Publishing.Navigation.NavigationTermSet = function SP_Publishing_Navigation_NavigationTermSet(context, objectPath) {
    SP.Publishing.Navigation.NavigationTermSet.initializeBase(this, [ context, objectPath ]);
}
SP.Publishing.Navigation.NavigationTermSet.getAsResolvedByWeb = function SP_Publishing_Navigation_NavigationTermSet$getAsResolvedByWeb(context, termSet, web, siteMapProviderName) {
    if ((!context)) {
        throw Error.argumentNull('context');
    }
    var $v_0;
    $v_0 = new SP.Publishing.Navigation.NavigationTermSet(context, new SP.ObjectPathStaticMethod(context, '{5ed5ae4c-8e92-4e56-af6e-d349611614d8}', 'GetAsResolvedByWeb', [ termSet, web, siteMapProviderName ]));
    $v_0.get_path().setPendingReplace();
    var $v_1 = new SP.ObjectIdentityQuery($v_0.get_path());
    context.addQueryIdAndResultObject($v_1.get_id(), $v_0);
    context.addQuery($v_1);
    return $v_0;
}
SP.Publishing.Navigation.NavigationTermSet.getAsResolvedByView = function SP_Publishing_Navigation_NavigationTermSet$getAsResolvedByView(context, termSet, view) {
    if ((!context)) {
        throw Error.argumentNull('context');
    }
    var $v_0;
    $v_0 = new SP.Publishing.Navigation.NavigationTermSet(context, new SP.ObjectPathStaticMethod(context, '{5ed5ae4c-8e92-4e56-af6e-d349611614d8}', 'GetAsResolvedByView', [ termSet, view ]));
    $v_0.get_path().setPendingReplace();
    var $v_1 = new SP.ObjectIdentityQuery($v_0.get_path());
    context.addQueryIdAndResultObject($v_1.get_id(), $v_0);
    context.addQuery($v_1);
    return $v_0;
}
SP.Publishing.Navigation.NavigationTermSet.prototype = {
    
    get_isNavigationTermSet: function SP_Publishing_Navigation_NavigationTermSet$get_isNavigationTermSet() {
        this.checkUninitializedProperty('IsNavigationTermSet');
        return ((this.get_objectData().get_properties()['IsNavigationTermSet']));
    },
    
    set_isNavigationTermSet: function SP_Publishing_Navigation_NavigationTermSet$set_isNavigationTermSet(value) {
        this.get_objectData().get_properties()['IsNavigationTermSet'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'IsNavigationTermSet', value));
        }
        return value;
    },
    
    get_lcid: function SP_Publishing_Navigation_NavigationTermSet$get_lcid() {
        this.checkUninitializedProperty('Lcid');
        return ((this.get_objectData().get_properties()['Lcid']));
    },
    
    get_loadedFromPersistedData: function SP_Publishing_Navigation_NavigationTermSet$get_loadedFromPersistedData() {
        this.checkUninitializedProperty('LoadedFromPersistedData');
        return ((this.get_objectData().get_properties()['LoadedFromPersistedData']));
    },
    
    get_termGroupId: function SP_Publishing_Navigation_NavigationTermSet$get_termGroupId() {
        this.checkUninitializedProperty('TermGroupId');
        return ((this.get_objectData().get_properties()['TermGroupId']));
    },
    
    get_termStoreId: function SP_Publishing_Navigation_NavigationTermSet$get_termStoreId() {
        this.checkUninitializedProperty('TermStoreId');
        return ((this.get_objectData().get_properties()['TermStoreId']));
    },
    
    initPropertiesFromJson: function SP_Publishing_Navigation_NavigationTermSet$initPropertiesFromJson(parentNode) {
        SP.Publishing.Navigation.NavigationTermSetItem.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.IsNavigationTermSet;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['IsNavigationTermSet'] = ($v_0);
            delete parentNode.IsNavigationTermSet;
        }
        $v_0 = parentNode.Lcid;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Lcid'] = ($v_0);
            delete parentNode.Lcid;
        }
        $v_0 = parentNode.LoadedFromPersistedData;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['LoadedFromPersistedData'] = ($v_0);
            delete parentNode.LoadedFromPersistedData;
        }
        $v_0 = parentNode.TermGroupId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['TermGroupId'] = ($v_0);
            delete parentNode.TermGroupId;
        }
        $v_0 = parentNode.TermStoreId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['TermStoreId'] = ($v_0);
            delete parentNode.TermStoreId;
        }
    },
    
    getAsEditable: function SP_Publishing_Navigation_NavigationTermSet$getAsEditable(taxonomySession) {
        var $v_0 = this.get_context();
        var $v_1;
        $v_1 = new SP.Publishing.Navigation.NavigationTermSet($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetAsEditable', [ taxonomySession ]));
        $v_1.get_path().setPendingReplace();
        var $v_2 = new SP.ObjectIdentityQuery($v_1.get_path());
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        $v_0.addQuery($v_2);
        return $v_1;
    },
    
    getWithNewView: function SP_Publishing_Navigation_NavigationTermSet$getWithNewView(newView) {
        var $v_0 = this.get_context();
        var $v_1;
        $v_1 = new SP.Publishing.Navigation.NavigationTermSet($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetWithNewView', [ newView ]));
        $v_1.get_path().setPendingReplace();
        var $v_2 = new SP.ObjectIdentityQuery($v_1.get_path());
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        $v_0.addQuery($v_2);
        return $v_1;
    },
    
    getTaxonomyTermSet: function SP_Publishing_Navigation_NavigationTermSet$getTaxonomyTermSet() {
        var $v_0 = this.get_context();
        var $v_1;
        $v_1 = new SP.Taxonomy.TermSet($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetTaxonomyTermSet', null));
        $v_1.get_path().setPendingReplace();
        var $v_2 = new SP.ObjectIdentityQuery($v_1.get_path());
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        $v_0.addQuery($v_2);
        return $v_1;
    },
    
    getAllTerms: function SP_Publishing_Navigation_NavigationTermSet$getAllTerms() {
        var $v_0 = this.get_context();
        var $v_1;
        $v_1 = new SP.Publishing.Navigation.NavigationTermCollection($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetAllTerms', null));
        return $v_1;
    },
    
    findTermForUrl: function SP_Publishing_Navigation_NavigationTermSet$findTermForUrl(url) {
        var $v_0 = this.get_context();
        var $v_1;
        $v_1 = new SP.Publishing.Navigation.NavigationTerm($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'FindTermForUrl', [ url ]));
        $v_1.get_path().setPendingReplace();
        var $v_2 = new SP.ObjectIdentityQuery($v_1.get_path());
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        $v_0.addQuery($v_2);
        return $v_1;
    }
}


SP.Publishing.Navigation.NavigationTermSetPropertyNames = function SP_Publishing_Navigation_NavigationTermSetPropertyNames() {
}


SP.Publishing.Navigation.NavigationTermSetItem = function SP_Publishing_Navigation_NavigationTermSetItem(context, objectPath) {
    SP.Publishing.Navigation.NavigationTermSetItem.initializeBase(this, [ context, objectPath ]);
}
SP.Publishing.Navigation.NavigationTermSetItem.prototype = {
    
    get_catalogTargetUrlForChildTerms: function SP_Publishing_Navigation_NavigationTermSetItem$get_catalogTargetUrlForChildTerms() {
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['CatalogTargetUrlForChildTerms']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.Publishing.CustomizableString(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'CatalogTargetUrlForChildTerms'));
            this.get_objectData().get_clientObjectProperties()['CatalogTargetUrlForChildTerms'] = $v_0;
        }
        return $v_0;
    },
    
    get_id: function SP_Publishing_Navigation_NavigationTermSetItem$get_id() {
        this.checkUninitializedProperty('Id');
        return ((this.get_objectData().get_properties()['Id']));
    },
    
    get_isReadOnly: function SP_Publishing_Navigation_NavigationTermSetItem$get_isReadOnly() {
        this.checkUninitializedProperty('IsReadOnly');
        return ((this.get_objectData().get_properties()['IsReadOnly']));
    },
    
    get_linkType: function SP_Publishing_Navigation_NavigationTermSetItem$get_linkType() {
        this.checkUninitializedProperty('LinkType');
        return ((this.get_objectData().get_properties()['LinkType']));
    },
    
    set_linkType: function SP_Publishing_Navigation_NavigationTermSetItem$set_linkType(value) {
        this.get_objectData().get_properties()['LinkType'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'LinkType', value));
        }
        return value;
    },
    
    get_targetUrlForChildTerms: function SP_Publishing_Navigation_NavigationTermSetItem$get_targetUrlForChildTerms() {
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['TargetUrlForChildTerms']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.Publishing.CustomizableString(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'TargetUrlForChildTerms'));
            this.get_objectData().get_clientObjectProperties()['TargetUrlForChildTerms'] = $v_0;
        }
        return $v_0;
    },
    
    get_taxonomyName: function SP_Publishing_Navigation_NavigationTermSetItem$get_taxonomyName() {
        this.checkUninitializedProperty('TaxonomyName');
        return ((this.get_objectData().get_properties()['TaxonomyName']));
    },
    
    get_terms: function SP_Publishing_Navigation_NavigationTermSetItem$get_terms() {
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['Terms']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.Publishing.Navigation.NavigationTermCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Terms'));
            this.get_objectData().get_clientObjectProperties()['Terms'] = $v_0;
        }
        return $v_0;
    },
    
    get_title: function SP_Publishing_Navigation_NavigationTermSetItem$get_title() {
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['Title']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.Publishing.CustomizableString(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Title'));
            this.get_objectData().get_clientObjectProperties()['Title'] = $v_0;
        }
        return $v_0;
    },
    
    get_view: function SP_Publishing_Navigation_NavigationTermSetItem$get_view() {
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['View']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.Publishing.Navigation.NavigationTermSetView(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'View'));
            this.get_objectData().get_clientObjectProperties()['View'] = $v_0;
        }
        return $v_0;
    },
    
    initPropertiesFromJson: function SP_Publishing_Navigation_NavigationTermSetItem$initPropertiesFromJson(parentNode) {
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.CatalogTargetUrlForChildTerms;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('CatalogTargetUrlForChildTerms', this.get_catalogTargetUrlForChildTerms(), $v_0);
            this.get_catalogTargetUrlForChildTerms().fromJson($v_0);
            delete parentNode.CatalogTargetUrlForChildTerms;
        }
        $v_0 = parentNode.Id;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Id'] = ($v_0);
            delete parentNode.Id;
        }
        $v_0 = parentNode.IsReadOnly;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['IsReadOnly'] = ($v_0);
            delete parentNode.IsReadOnly;
        }
        $v_0 = parentNode.LinkType;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['LinkType'] = ((SP.DataConvert.fixupType(this.get_context(), $v_0)));
            delete parentNode.LinkType;
        }
        $v_0 = parentNode.TargetUrlForChildTerms;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('TargetUrlForChildTerms', this.get_targetUrlForChildTerms(), $v_0);
            this.get_targetUrlForChildTerms().fromJson($v_0);
            delete parentNode.TargetUrlForChildTerms;
        }
        $v_0 = parentNode.TaxonomyName;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['TaxonomyName'] = ($v_0);
            delete parentNode.TaxonomyName;
        }
        $v_0 = parentNode.Terms;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('Terms', this.get_terms(), $v_0);
            this.get_terms().fromJson($v_0);
            delete parentNode.Terms;
        }
        $v_0 = parentNode.Title;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('Title', this.get_title(), $v_0);
            this.get_title().fromJson($v_0);
            delete parentNode.Title;
        }
        $v_0 = parentNode.View;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('View', this.get_view(), $v_0);
            this.get_view().fromJson($v_0);
            delete parentNode.View;
        }
    },
    
    getResolvedDisplayUrl: function SP_Publishing_Navigation_NavigationTermSetItem$getResolvedDisplayUrl(browserQueryString) {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'GetResolvedDisplayUrl', [ browserQueryString ]);
        $v_0.addQuery($v_2);
        $v_1 = new SP.StringResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    },
    
    getTaxonomyTermStore: function SP_Publishing_Navigation_NavigationTermSetItem$getTaxonomyTermStore() {
        var $v_0 = this.get_context();
        var $v_1;
        $v_1 = new SP.Taxonomy.TermStore($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetTaxonomyTermStore', null));
        $v_1.get_path().setPendingReplace();
        var $v_2 = new SP.ObjectIdentityQuery($v_1.get_path());
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        $v_0.addQuery($v_2);
        return $v_1;
    },
    
    createTerm: function SP_Publishing_Navigation_NavigationTermSetItem$createTerm(termName, linkType, termId) {
        var $v_0 = this.get_context();
        var $v_1;
        $v_1 = new SP.Publishing.Navigation.NavigationTerm($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'CreateTerm', [ termName, linkType, termId ]));
        $v_1.get_path().setPendingReplace();
        var $v_2 = new SP.ObjectIdentityQuery($v_1.get_path());
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        $v_0.addQuery($v_2);
        return $v_1;
    }
}


SP.Publishing.Navigation.NavigationTermSetItemPropertyNames = function SP_Publishing_Navigation_NavigationTermSetItemPropertyNames() {
}


SP.Publishing.Navigation.NavigationTermSetItemObjectPropertyNames = function SP_Publishing_Navigation_NavigationTermSetItemObjectPropertyNames() {
}


SP.Publishing.Navigation.NavigationTermSetView = function SP_Publishing_Navigation_NavigationTermSetView(context, web, siteMapProviderName) {
    SP.Publishing.Navigation.NavigationTermSetView.initializeBase(this, [ context, SP.ClientUtility.getOrCreateObjectPathForConstructor(context, '{097234e9-47da-431f-bd12-173c296b187b}', arguments) ]);
}
SP.Publishing.Navigation.NavigationTermSetView.newObject = function SP_Publishing_Navigation_NavigationTermSetView$newObject(context, web, siteMapProviderName) {
    return new SP.Publishing.Navigation.NavigationTermSetView(context, new SP.ObjectPathConstructor(context, '{097234e9-47da-431f-bd12-173c296b187b}', [ web, siteMapProviderName ]));
}
SP.Publishing.Navigation.NavigationTermSetView.createEmptyInstance = function SP_Publishing_Navigation_NavigationTermSetView$createEmptyInstance(context) {
    if ((!context)) {
        throw Error.argumentNull('context');
    }
    var $v_0;
    $v_0 = new SP.Publishing.Navigation.NavigationTermSetView(context, new SP.ObjectPathStaticMethod(context, '{097234e9-47da-431f-bd12-173c296b187b}', 'CreateEmptyInstance', null));
    $v_0.get_path().setPendingReplace();
    var $v_1 = new SP.ObjectIdentityQuery($v_0.get_path());
    context.addQueryIdAndResultObject($v_1.get_id(), $v_0);
    context.addQuery($v_1);
    return $v_0;
}
SP.Publishing.Navigation.NavigationTermSetView.prototype = {
    
    get_excludeDeprecatedTerms: function SP_Publishing_Navigation_NavigationTermSetView$get_excludeDeprecatedTerms() {
        this.checkUninitializedProperty('ExcludeDeprecatedTerms');
        return ((this.get_objectData().get_properties()['ExcludeDeprecatedTerms']));
    },
    
    set_excludeDeprecatedTerms: function SP_Publishing_Navigation_NavigationTermSetView$set_excludeDeprecatedTerms(value) {
        this.get_objectData().get_properties()['ExcludeDeprecatedTerms'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'ExcludeDeprecatedTerms', value));
        }
        if ((!this.get_context())) {
            var $v_0 = new SP.ObjectIdentityQuery(this.get_path());
            this.get_context().addQueryIdAndResultObject($v_0.get_id(), this);
            this.get_context().addQuery($v_0);
        }
        return value;
    },
    
    get_excludeTermsByPermissions: function SP_Publishing_Navigation_NavigationTermSetView$get_excludeTermsByPermissions() {
        this.checkUninitializedProperty('ExcludeTermsByPermissions');
        return ((this.get_objectData().get_properties()['ExcludeTermsByPermissions']));
    },
    
    set_excludeTermsByPermissions: function SP_Publishing_Navigation_NavigationTermSetView$set_excludeTermsByPermissions(value) {
        this.get_objectData().get_properties()['ExcludeTermsByPermissions'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'ExcludeTermsByPermissions', value));
        }
        if ((!this.get_context())) {
            var $v_0 = new SP.ObjectIdentityQuery(this.get_path());
            this.get_context().addQueryIdAndResultObject($v_0.get_id(), this);
            this.get_context().addQuery($v_0);
        }
        return value;
    },
    
    get_excludeTermsByProvider: function SP_Publishing_Navigation_NavigationTermSetView$get_excludeTermsByProvider() {
        this.checkUninitializedProperty('ExcludeTermsByProvider');
        return ((this.get_objectData().get_properties()['ExcludeTermsByProvider']));
    },
    
    set_excludeTermsByProvider: function SP_Publishing_Navigation_NavigationTermSetView$set_excludeTermsByProvider(value) {
        this.get_objectData().get_properties()['ExcludeTermsByProvider'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'ExcludeTermsByProvider', value));
        }
        if ((!this.get_context())) {
            var $v_0 = new SP.ObjectIdentityQuery(this.get_path());
            this.get_context().addQueryIdAndResultObject($v_0.get_id(), this);
            this.get_context().addQuery($v_0);
        }
        return value;
    },
    
    get_serverRelativeSiteUrl: function SP_Publishing_Navigation_NavigationTermSetView$get_serverRelativeSiteUrl() {
        this.checkUninitializedProperty('ServerRelativeSiteUrl');
        return ((this.get_objectData().get_properties()['ServerRelativeSiteUrl']));
    },
    
    get_serverRelativeWebUrl: function SP_Publishing_Navigation_NavigationTermSetView$get_serverRelativeWebUrl() {
        this.checkUninitializedProperty('ServerRelativeWebUrl');
        return ((this.get_objectData().get_properties()['ServerRelativeWebUrl']));
    },
    
    get_siteMapProviderName: function SP_Publishing_Navigation_NavigationTermSetView$get_siteMapProviderName() {
        this.checkUninitializedProperty('SiteMapProviderName');
        return ((this.get_objectData().get_properties()['SiteMapProviderName']));
    },
    
    set_siteMapProviderName: function SP_Publishing_Navigation_NavigationTermSetView$set_siteMapProviderName(value) {
        this.get_objectData().get_properties()['SiteMapProviderName'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'SiteMapProviderName', value));
        }
        if ((!this.get_context())) {
            var $v_0 = new SP.ObjectIdentityQuery(this.get_path());
            this.get_context().addQueryIdAndResultObject($v_0.get_id(), this);
            this.get_context().addQuery($v_0);
        }
        return value;
    },
    
    get_webId: function SP_Publishing_Navigation_NavigationTermSetView$get_webId() {
        this.checkUninitializedProperty('WebId');
        return ((this.get_objectData().get_properties()['WebId']));
    },
    
    get_webTitle: function SP_Publishing_Navigation_NavigationTermSetView$get_webTitle() {
        this.checkUninitializedProperty('WebTitle');
        return ((this.get_objectData().get_properties()['WebTitle']));
    },
    
    initPropertiesFromJson: function SP_Publishing_Navigation_NavigationTermSetView$initPropertiesFromJson(parentNode) {
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.ExcludeDeprecatedTerms;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ExcludeDeprecatedTerms'] = ($v_0);
            delete parentNode.ExcludeDeprecatedTerms;
        }
        $v_0 = parentNode.ExcludeTermsByPermissions;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ExcludeTermsByPermissions'] = ($v_0);
            delete parentNode.ExcludeTermsByPermissions;
        }
        $v_0 = parentNode.ExcludeTermsByProvider;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ExcludeTermsByProvider'] = ($v_0);
            delete parentNode.ExcludeTermsByProvider;
        }
        $v_0 = parentNode.ServerRelativeSiteUrl;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ServerRelativeSiteUrl'] = ($v_0);
            delete parentNode.ServerRelativeSiteUrl;
        }
        $v_0 = parentNode.ServerRelativeWebUrl;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ServerRelativeWebUrl'] = ($v_0);
            delete parentNode.ServerRelativeWebUrl;
        }
        $v_0 = parentNode.SiteMapProviderName;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['SiteMapProviderName'] = ($v_0);
            delete parentNode.SiteMapProviderName;
        }
        $v_0 = parentNode.WebId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['WebId'] = ($v_0);
            delete parentNode.WebId;
        }
        $v_0 = parentNode.WebTitle;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['WebTitle'] = ($v_0);
            delete parentNode.WebTitle;
        }
    },
    
    getCopy: function SP_Publishing_Navigation_NavigationTermSetView$getCopy() {
        var $v_0 = this.get_context();
        var $v_1;
        $v_1 = new SP.Publishing.Navigation.NavigationTermSetView($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetCopy', null));
        return $v_1;
    }
}


SP.Publishing.Navigation.NavigationTermSetViewPropertyNames = function SP_Publishing_Navigation_NavigationTermSetViewPropertyNames() {
}


SP.Publishing.Navigation.StandardNavigationSettings = function SP_Publishing_Navigation_StandardNavigationSettings(context, objectPath) {
    SP.Publishing.Navigation.StandardNavigationSettings.initializeBase(this, [ context, objectPath ]);
}
SP.Publishing.Navigation.StandardNavigationSettings.prototype = {
    
    get_source: function SP_Publishing_Navigation_StandardNavigationSettings$get_source() {
        this.checkUninitializedProperty('Source');
        return ((this.get_objectData().get_properties()['Source']));
    },
    
    set_source: function SP_Publishing_Navigation_StandardNavigationSettings$set_source(value) {
        this.get_objectData().get_properties()['Source'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Source', value));
        }
        return value;
    },
    
    get_termSetId: function SP_Publishing_Navigation_StandardNavigationSettings$get_termSetId() {
        this.checkUninitializedProperty('TermSetId');
        return ((this.get_objectData().get_properties()['TermSetId']));
    },
    
    set_termSetId: function SP_Publishing_Navigation_StandardNavigationSettings$set_termSetId(value) {
        this.get_objectData().get_properties()['TermSetId'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'TermSetId', value));
        }
        return value;
    },
    
    get_termStoreId: function SP_Publishing_Navigation_StandardNavigationSettings$get_termStoreId() {
        this.checkUninitializedProperty('TermStoreId');
        return ((this.get_objectData().get_properties()['TermStoreId']));
    },
    
    set_termStoreId: function SP_Publishing_Navigation_StandardNavigationSettings$set_termStoreId(value) {
        this.get_objectData().get_properties()['TermStoreId'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'TermStoreId', value));
        }
        return value;
    },
    
    initPropertiesFromJson: function SP_Publishing_Navigation_StandardNavigationSettings$initPropertiesFromJson(parentNode) {
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.Source;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Source'] = ((SP.DataConvert.fixupType(this.get_context(), $v_0)));
            delete parentNode.Source;
        }
        $v_0 = parentNode.TermSetId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['TermSetId'] = ($v_0);
            delete parentNode.TermSetId;
        }
        $v_0 = parentNode.TermStoreId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['TermStoreId'] = ($v_0);
            delete parentNode.TermStoreId;
        }
    }
}


SP.Publishing.Navigation.StandardNavigationSettingsPropertyNames = function SP_Publishing_Navigation_StandardNavigationSettingsPropertyNames() {
}


SP.Publishing.Navigation.TaxonomyNavigation = function SP_Publishing_Navigation_TaxonomyNavigation() {
}
SP.Publishing.Navigation.TaxonomyNavigation.getWebNavigationSettings = function SP_Publishing_Navigation_TaxonomyNavigation$getWebNavigationSettings(context, web) {
    if ((!context)) {
        throw Error.argumentNull('context');
    }
    var $v_0;
    $v_0 = new SP.Publishing.Navigation.WebNavigationSettings(context, new SP.ObjectPathStaticMethod(context, '{f3724139-55ed-4c05-8576-2c3830831c10}', 'GetWebNavigationSettings', [ web ]));
    return $v_0;
}
SP.Publishing.Navigation.TaxonomyNavigation.getTermSetForWeb = function SP_Publishing_Navigation_TaxonomyNavigation$getTermSetForWeb(context, web, siteMapProviderName, includeInheritedSettings) {
    if ((!context)) {
        throw Error.argumentNull('context');
    }
    var $v_0;
    $v_0 = new SP.Publishing.Navigation.NavigationTermSet(context, new SP.ObjectPathStaticMethod(context, '{f3724139-55ed-4c05-8576-2c3830831c10}', 'GetTermSetForWeb', [ web, siteMapProviderName, includeInheritedSettings ]));
    $v_0.get_path().setPendingReplace();
    var $v_1 = new SP.ObjectIdentityQuery($v_0.get_path());
    context.addQueryIdAndResultObject($v_1.get_id(), $v_0);
    context.addQuery($v_1);
    return $v_0;
}
SP.Publishing.Navigation.TaxonomyNavigation.setCrawlAsFriendlyUrlPage = function SP_Publishing_Navigation_TaxonomyNavigation$setCrawlAsFriendlyUrlPage(context, navigationTerm, crawlAsFriendlyUrlPage) {
    if ((!context)) {
        throw Error.argumentNull('context');
    }
    var $v_0;
    var $v_1 = new SP.ClientActionInvokeStaticMethod(context, '{f3724139-55ed-4c05-8576-2c3830831c10}', 'SetCrawlAsFriendlyUrlPage', [ navigationTerm, crawlAsFriendlyUrlPage ]);
    context.addQuery($v_1);
    $v_0 = new SP.BooleanResult();
    context.addQueryIdAndResultObject($v_1.get_id(), $v_0);
    return $v_0;
}
SP.Publishing.Navigation.TaxonomyNavigation.getNavigationLcidForWeb = function SP_Publishing_Navigation_TaxonomyNavigation$getNavigationLcidForWeb(context, web) {
    if ((!context)) {
        throw Error.argumentNull('context');
    }
    var $v_0;
    var $v_1 = new SP.ClientActionInvokeStaticMethod(context, '{f3724139-55ed-4c05-8576-2c3830831c10}', 'GetNavigationLcidForWeb', [ web ]);
    context.addQuery($v_1);
    $v_0 = new SP.IntResult();
    context.addQueryIdAndResultObject($v_1.get_id(), $v_0);
    return $v_0;
}
SP.Publishing.Navigation.TaxonomyNavigation.flushSiteFromCache = function SP_Publishing_Navigation_TaxonomyNavigation$flushSiteFromCache(context, site) {
    if ((!context)) {
        throw Error.argumentNull('context');
    }
    var $v_0 = new SP.ClientActionInvokeStaticMethod(context, '{f3724139-55ed-4c05-8576-2c3830831c10}', 'FlushSiteFromCache', [ site ]);
    context.addQuery($v_0);
}
SP.Publishing.Navigation.TaxonomyNavigation.flushWebFromCache = function SP_Publishing_Navigation_TaxonomyNavigation$flushWebFromCache(context, web) {
    if ((!context)) {
        throw Error.argumentNull('context');
    }
    var $v_0 = new SP.ClientActionInvokeStaticMethod(context, '{f3724139-55ed-4c05-8576-2c3830831c10}', 'FlushWebFromCache', [ web ]);
    context.addQuery($v_0);
}
SP.Publishing.Navigation.TaxonomyNavigation.flushTermSetFromCache = function SP_Publishing_Navigation_TaxonomyNavigation$flushTermSetFromCache(context, webForPermissions, termStoreId, termSetId) {
    if ((!context)) {
        throw Error.argumentNull('context');
    }
    var $v_0 = new SP.ClientActionInvokeStaticMethod(context, '{f3724139-55ed-4c05-8576-2c3830831c10}', 'FlushTermSetFromCache', [ webForPermissions, termStoreId, termSetId ]);
    context.addQuery($v_0);
}


SP.Publishing.Navigation.WebNavigationSettings = function SP_Publishing_Navigation_WebNavigationSettings(context, web) {
    SP.Publishing.Navigation.WebNavigationSettings.initializeBase(this, [ context, SP.ClientUtility.getOrCreateObjectPathForConstructor(context, '{00ac02aa-86e2-4d48-aa73-341ed7962374}', arguments) ]);
}
SP.Publishing.Navigation.WebNavigationSettings.newObject = function SP_Publishing_Navigation_WebNavigationSettings$newObject(context, web) {
    return new SP.Publishing.Navigation.WebNavigationSettings(context, new SP.ObjectPathConstructor(context, '{00ac02aa-86e2-4d48-aa73-341ed7962374}', [ web ]));
}
SP.Publishing.Navigation.WebNavigationSettings.prototype = {
    
    get_addNewPagesToNavigation: function SP_Publishing_Navigation_WebNavigationSettings$get_addNewPagesToNavigation() {
        this.checkUninitializedProperty('AddNewPagesToNavigation');
        return ((this.get_objectData().get_properties()['AddNewPagesToNavigation']));
    },
    
    set_addNewPagesToNavigation: function SP_Publishing_Navigation_WebNavigationSettings$set_addNewPagesToNavigation(value) {
        this.get_objectData().get_properties()['AddNewPagesToNavigation'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'AddNewPagesToNavigation', value));
        }
        return value;
    },
    
    get_cachedHierarchyDepth: function SP_Publishing_Navigation_WebNavigationSettings$get_cachedHierarchyDepth() {
        this.checkUninitializedProperty('CachedHierarchyDepth');
        return ((this.get_objectData().get_properties()['CachedHierarchyDepth']));
    },
    
    set_cachedHierarchyDepth: function SP_Publishing_Navigation_WebNavigationSettings$set_cachedHierarchyDepth(value) {
        this.get_objectData().get_properties()['CachedHierarchyDepth'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'CachedHierarchyDepth', value));
        }
        return value;
    },
    
    get_cacheSchemaVersion: function SP_Publishing_Navigation_WebNavigationSettings$get_cacheSchemaVersion() {
        this.checkUninitializedProperty('CacheSchemaVersion');
        return ((this.get_objectData().get_properties()['CacheSchemaVersion']));
    },
    
    set_cacheSchemaVersion: function SP_Publishing_Navigation_WebNavigationSettings$set_cacheSchemaVersion(value) {
        this.get_objectData().get_properties()['CacheSchemaVersion'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'CacheSchemaVersion', value));
        }
        return value;
    },
    
    get_cachingRetryAttemptLeft: function SP_Publishing_Navigation_WebNavigationSettings$get_cachingRetryAttemptLeft() {
        this.checkUninitializedProperty('CachingRetryAttemptLeft');
        return ((this.get_objectData().get_properties()['CachingRetryAttemptLeft']));
    },
    
    set_cachingRetryAttemptLeft: function SP_Publishing_Navigation_WebNavigationSettings$set_cachingRetryAttemptLeft(value) {
        this.get_objectData().get_properties()['CachingRetryAttemptLeft'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'CachingRetryAttemptLeft', value));
        }
        return value;
    },
    
    get_cachingState: function SP_Publishing_Navigation_WebNavigationSettings$get_cachingState() {
        this.checkUninitializedProperty('CachingState');
        return ((this.get_objectData().get_properties()['CachingState']));
    },
    
    set_cachingState: function SP_Publishing_Navigation_WebNavigationSettings$set_cachingState(value) {
        this.get_objectData().get_properties()['CachingState'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'CachingState', value));
        }
        return value;
    },
    
    get_createFriendlyUrlsForNewPages: function SP_Publishing_Navigation_WebNavigationSettings$get_createFriendlyUrlsForNewPages() {
        this.checkUninitializedProperty('CreateFriendlyUrlsForNewPages');
        return ((this.get_objectData().get_properties()['CreateFriendlyUrlsForNewPages']));
    },
    
    set_createFriendlyUrlsForNewPages: function SP_Publishing_Navigation_WebNavigationSettings$set_createFriendlyUrlsForNewPages(value) {
        this.get_objectData().get_properties()['CreateFriendlyUrlsForNewPages'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'CreateFriendlyUrlsForNewPages', value));
        }
        return value;
    },
    
    get_currentNavigation: function SP_Publishing_Navigation_WebNavigationSettings$get_currentNavigation() {
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['CurrentNavigation']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.Publishing.Navigation.StandardNavigationSettings(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'CurrentNavigation'));
            this.get_objectData().get_clientObjectProperties()['CurrentNavigation'] = $v_0;
        }
        return $v_0;
    },
    
    get_globalNavigation: function SP_Publishing_Navigation_WebNavigationSettings$get_globalNavigation() {
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['GlobalNavigation']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.Publishing.Navigation.StandardNavigationSettings(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'GlobalNavigation'));
            this.get_objectData().get_clientObjectProperties()['GlobalNavigation'] = $v_0;
        }
        return $v_0;
    },
    
    get_lastCachingRefreshAttempted: function SP_Publishing_Navigation_WebNavigationSettings$get_lastCachingRefreshAttempted() {
        this.checkUninitializedProperty('LastCachingRefreshAttempted');
        return ((this.get_objectData().get_properties()['LastCachingRefreshAttempted']));
    },
    
    set_lastCachingRefreshAttempted: function SP_Publishing_Navigation_WebNavigationSettings$set_lastCachingRefreshAttempted(value) {
        this.get_objectData().get_properties()['LastCachingRefreshAttempted'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'LastCachingRefreshAttempted', value));
        }
        return value;
    },
    
    initPropertiesFromJson: function SP_Publishing_Navigation_WebNavigationSettings$initPropertiesFromJson(parentNode) {
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.AddNewPagesToNavigation;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['AddNewPagesToNavigation'] = ($v_0);
            delete parentNode.AddNewPagesToNavigation;
        }
        $v_0 = parentNode.CachedHierarchyDepth;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['CachedHierarchyDepth'] = ($v_0);
            delete parentNode.CachedHierarchyDepth;
        }
        $v_0 = parentNode.CacheSchemaVersion;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['CacheSchemaVersion'] = ($v_0);
            delete parentNode.CacheSchemaVersion;
        }
        $v_0 = parentNode.CachingRetryAttemptLeft;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['CachingRetryAttemptLeft'] = ($v_0);
            delete parentNode.CachingRetryAttemptLeft;
        }
        $v_0 = parentNode.CachingState;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['CachingState'] = ((SP.DataConvert.fixupType(this.get_context(), $v_0)));
            delete parentNode.CachingState;
        }
        $v_0 = parentNode.CreateFriendlyUrlsForNewPages;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['CreateFriendlyUrlsForNewPages'] = ($v_0);
            delete parentNode.CreateFriendlyUrlsForNewPages;
        }
        $v_0 = parentNode.CurrentNavigation;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('CurrentNavigation', this.get_currentNavigation(), $v_0);
            this.get_currentNavigation().fromJson($v_0);
            delete parentNode.CurrentNavigation;
        }
        $v_0 = parentNode.GlobalNavigation;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('GlobalNavigation', this.get_globalNavigation(), $v_0);
            this.get_globalNavigation().fromJson($v_0);
            delete parentNode.GlobalNavigation;
        }
        $v_0 = parentNode.LastCachingRefreshAttempted;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['LastCachingRefreshAttempted'] = ($v_0);
            delete parentNode.LastCachingRefreshAttempted;
        }
    },
    
    update: function SP_Publishing_Navigation_WebNavigationSettings$update(taxonomySession) {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'Update', [ taxonomySession ]);
        $v_0.addQuery($v_1);
    },
    
    resetToDefaults: function SP_Publishing_Navigation_WebNavigationSettings$resetToDefaults() {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'ResetToDefaults', null);
        $v_0.addQuery($v_1);
    }
}


SP.Publishing.Navigation.WebNavigationSettingsPropertyNames = function SP_Publishing_Navigation_WebNavigationSettingsPropertyNames() {
}


SP.Publishing.Navigation.WebNavigationSettingsObjectPropertyNames = function SP_Publishing_Navigation_WebNavigationSettingsObjectPropertyNames() {
}


Type.registerNamespace('SP.Publishing.PortalLaunch');

SP.Publishing.PortalLaunch.PortalLaunchRedirectionType = function() {}
SP.Publishing.PortalLaunch.PortalLaunchRedirectionType.prototype = {
    bidirectional: 0, 
    toTemporaryPage: 1, 
    siteBased: 2
}
SP.Publishing.PortalLaunch.PortalLaunchRedirectionType.registerEnum('SP.Publishing.PortalLaunch.PortalLaunchRedirectionType', false);


SP.Publishing.PortalLaunch.PortalLaunchStatus = function() {}
SP.Publishing.PortalLaunch.PortalLaunchStatus.prototype = {
    created: 0, 
    started: 1, 
    paused: 2, 
    canceled: 3, 
    completed: 4, 
    deleted: 5
}
SP.Publishing.PortalLaunch.PortalLaunchStatus.registerEnum('SP.Publishing.PortalLaunch.PortalLaunchStatus', false);


SP.Publishing.PortalLaunch.PortalLaunchUsersSizeType = function() {}
SP.Publishing.PortalLaunch.PortalLaunchUsersSizeType.prototype = {
    lessThan10kUsers: 0, 
    from10kTo30kUsers: 1, 
    from30kTo100KUsers: 2, 
    moreThan100kUsers: 3
}
SP.Publishing.PortalLaunch.PortalLaunchUsersSizeType.registerEnum('SP.Publishing.PortalLaunch.PortalLaunchUsersSizeType', false);


SP.Publishing.PortalLaunch.PortalLaunchSetupWrapper = function SP_Publishing_PortalLaunch_PortalLaunchSetupWrapper() {
    SP.Publishing.PortalLaunch.PortalLaunchSetupWrapper.initializeBase(this);
}
SP.Publishing.PortalLaunch.PortalLaunchSetupWrapper.prototype = {
    $p_1: null,
    
    get_spPortalLaunchWaveSetups: function SP_Publishing_PortalLaunch_PortalLaunchSetupWrapper$get_spPortalLaunchWaveSetups() {
        return this.$p_1;
    },
    
    set_spPortalLaunchWaveSetups: function SP_Publishing_PortalLaunch_PortalLaunchSetupWrapper$set_spPortalLaunchWaveSetups(value) {
        this.$p_1 = value;
        return value;
    },
    
    get_typeId: function SP_Publishing_PortalLaunch_PortalLaunchSetupWrapper$get_typeId() {
        return '{bb7bd34a-511a-4572-b130-95c20bb621ce}';
    },
    
    writeToXml: function SP_Publishing_PortalLaunch_PortalLaunchSetupWrapper$writeToXml(writer, serializationContext) {
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = [ 'SPPortalLaunchWaveSetups' ];
        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    
    initPropertiesFromJson: function SP_Publishing_PortalLaunch_PortalLaunchSetupWrapper$initPropertiesFromJson(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.SPPortalLaunchWaveSetups;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$p_1 = ((SP.DataConvert.fixupType(null, $v_0)));
            delete parentNode.SPPortalLaunchWaveSetups;
        }
    }
}


SP.Publishing.PortalLaunch.PortalLaunchWave = function SP_Publishing_PortalLaunch_PortalLaunchWave() {
    SP.Publishing.PortalLaunch.PortalLaunchWave.initializeBase(this);
}
SP.Publishing.PortalLaunch.PortalLaunchWave.prototype = {
    $5_1: null,
    $U_1: null,
    $0_1: null,
    $e_1: 0,
    
    get_groups: function SP_Publishing_PortalLaunch_PortalLaunchWave$get_groups() {
        return this.$5_1;
    },
    
    set_groups: function SP_Publishing_PortalLaunch_PortalLaunchWave$set_groups(value) {
        this.$5_1 = value;
        return value;
    },
    
    get_launchDateUtc: function SP_Publishing_PortalLaunch_PortalLaunchWave$get_launchDateUtc() {
        return this.$U_1;
    },
    
    set_launchDateUtc: function SP_Publishing_PortalLaunch_PortalLaunchWave$set_launchDateUtc(value) {
        this.$U_1 = value;
        return value;
    },
    
    get_name: function SP_Publishing_PortalLaunch_PortalLaunchWave$get_name() {
        return this.$0_1;
    },
    
    set_name: function SP_Publishing_PortalLaunch_PortalLaunchWave$set_name(value) {
        this.$0_1 = value;
        return value;
    },
    
    get_order: function SP_Publishing_PortalLaunch_PortalLaunchWave$get_order() {
        return this.$e_1;
    },
    
    set_order: function SP_Publishing_PortalLaunch_PortalLaunchWave$set_order(value) {
        this.$e_1 = value;
        return value;
    },
    
    get_typeId: function SP_Publishing_PortalLaunch_PortalLaunchWave$get_typeId() {
        return '{8071cbfa-7fa4-4d7c-9887-7bbb23c8bbbb}';
    },
    
    writeToXml: function SP_Publishing_PortalLaunch_PortalLaunchWave$writeToXml(writer, serializationContext) {
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = [ 'Groups', 'LaunchDateUtc', 'Name', 'Order' ];
        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    
    initPropertiesFromJson: function SP_Publishing_PortalLaunch_PortalLaunchWave$initPropertiesFromJson(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.Groups;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$5_1 = (([]));
            SP.DataConvert.populateArray(null, ((this.$5_1)), ($v_0));
            delete parentNode.Groups;
        }
        $v_0 = parentNode.LaunchDateUtc;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$U_1 = ($v_0);
            delete parentNode.LaunchDateUtc;
        }
        $v_0 = parentNode.Name;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$0_1 = ($v_0);
            delete parentNode.Name;
        }
        $v_0 = parentNode.Order;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$e_1 = ($v_0);
            delete parentNode.Order;
        }
    }
}


SP.Publishing.PortalLaunch.PortalLaunchWaveGroup = function SP_Publishing_PortalLaunch_PortalLaunchWaveGroup() {
    SP.Publishing.PortalLaunch.PortalLaunchWaveGroup.initializeBase(this);
}
SP.Publishing.PortalLaunch.PortalLaunchWaveGroup.prototype = {
    $4_1: null,
    $n_1: null,
    $v_1: null,
    
    get_id: function SP_Publishing_PortalLaunch_PortalLaunchWaveGroup$get_id() {
        return this.$4_1;
    },
    
    set_id: function SP_Publishing_PortalLaunch_PortalLaunchWaveGroup$set_id(value) {
        this.$4_1 = value;
        return value;
    },
    
    get_siteUrl: function SP_Publishing_PortalLaunch_PortalLaunchWaveGroup$get_siteUrl() {
        return this.$n_1;
    },
    
    set_siteUrl: function SP_Publishing_PortalLaunch_PortalLaunchWaveGroup$set_siteUrl(value) {
        this.$n_1 = value;
        return value;
    },
    
    get_userGroupName: function SP_Publishing_PortalLaunch_PortalLaunchWaveGroup$get_userGroupName() {
        return this.$v_1;
    },
    
    set_userGroupName: function SP_Publishing_PortalLaunch_PortalLaunchWaveGroup$set_userGroupName(value) {
        this.$v_1 = value;
        return value;
    },
    
    get_typeId: function SP_Publishing_PortalLaunch_PortalLaunchWaveGroup$get_typeId() {
        return '{f7c86b80-56c0-45e4-bcd0-5e3fa4935343}';
    },
    
    writeToXml: function SP_Publishing_PortalLaunch_PortalLaunchWaveGroup$writeToXml(writer, serializationContext) {
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = [ 'Id', 'SiteUrl', 'UserGroupName' ];
        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    
    initPropertiesFromJson: function SP_Publishing_PortalLaunch_PortalLaunchWaveGroup$initPropertiesFromJson(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.Id;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$4_1 = ($v_0);
            delete parentNode.Id;
        }
        $v_0 = parentNode.SiteUrl;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$n_1 = ($v_0);
            delete parentNode.SiteUrl;
        }
        $v_0 = parentNode.UserGroupName;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$v_1 = ($v_0);
            delete parentNode.UserGroupName;
        }
    }
}


SP.Publishing.PortalLaunch.PortalLaunchWaveSetup = function SP_Publishing_PortalLaunch_PortalLaunchWaveSetup() {
    SP.Publishing.PortalLaunch.PortalLaunchWaveSetup.initializeBase(this);
}
SP.Publishing.PortalLaunch.PortalLaunchWaveSetup.prototype = {
    $8_1: null,
    $9_1: null,
    $H_1: null,
    $O_1: 0,
    $R_1: false,
    $a_1: null,
    $d_1: null,
    $h_1: 0,
    $k_1: 0,
    $l_1: null,
    $m_1: null,
    $q_1: 0,
    $t_1: null,
    $6_1: null,
    
    get_alternativeUrlsOfNewSite: function SP_Publishing_PortalLaunch_PortalLaunchWaveSetup$get_alternativeUrlsOfNewSite() {
        return this.$8_1;
    },
    
    set_alternativeUrlsOfNewSite: function SP_Publishing_PortalLaunch_PortalLaunchWaveSetup$set_alternativeUrlsOfNewSite(value) {
        this.$8_1 = value;
        return value;
    },
    
    get_alternativeUrlsOfOldSite: function SP_Publishing_PortalLaunch_PortalLaunchWaveSetup$get_alternativeUrlsOfOldSite() {
        return this.$9_1;
    },
    
    set_alternativeUrlsOfOldSite: function SP_Publishing_PortalLaunch_PortalLaunchWaveSetup$set_alternativeUrlsOfOldSite(value) {
        this.$9_1 = value;
        return value;
    },
    
    get_createdOn: function SP_Publishing_PortalLaunch_PortalLaunchWaveSetup$get_createdOn() {
        return this.$H_1;
    },
    
    set_createdOn: function SP_Publishing_PortalLaunch_PortalLaunchWaveSetup$set_createdOn(value) {
        this.$H_1 = value;
        return value;
    },
    
    get_expectedUsersSize: function SP_Publishing_PortalLaunch_PortalLaunchWaveSetup$get_expectedUsersSize() {
        return this.$O_1;
    },
    
    set_expectedUsersSize: function SP_Publishing_PortalLaunch_PortalLaunchWaveSetup$set_expectedUsersSize(value) {
        this.$O_1 = value;
        return value;
    },
    
    get_isPaused: function SP_Publishing_PortalLaunch_PortalLaunchWaveSetup$get_isPaused() {
        return this.$R_1;
    },
    
    set_isPaused: function SP_Publishing_PortalLaunch_PortalLaunchWaveSetup$set_isPaused(value) {
        this.$R_1 = value;
        return value;
    },
    
    get_modifiedOn: function SP_Publishing_PortalLaunch_PortalLaunchWaveSetup$get_modifiedOn() {
        return this.$a_1;
    },
    
    set_modifiedOn: function SP_Publishing_PortalLaunch_PortalLaunchWaveSetup$set_modifiedOn(value) {
        this.$a_1 = value;
        return value;
    },
    
    get_newSiteUrl: function SP_Publishing_PortalLaunch_PortalLaunchWaveSetup$get_newSiteUrl() {
        return this.$d_1;
    },
    
    set_newSiteUrl: function SP_Publishing_PortalLaunch_PortalLaunchWaveSetup$set_newSiteUrl(value) {
        this.$d_1 = value;
        return value;
    },
    
    get_pauseAtWave: function SP_Publishing_PortalLaunch_PortalLaunchWaveSetup$get_pauseAtWave() {
        return this.$h_1;
    },
    
    set_pauseAtWave: function SP_Publishing_PortalLaunch_PortalLaunchWaveSetup$set_pauseAtWave(value) {
        this.$h_1 = value;
        return value;
    },
    
    get_redirectionType: function SP_Publishing_PortalLaunch_PortalLaunchWaveSetup$get_redirectionType() {
        return this.$k_1;
    },
    
    set_redirectionType: function SP_Publishing_PortalLaunch_PortalLaunchWaveSetup$set_redirectionType(value) {
        this.$k_1 = value;
        return value;
    },
    
    get_redirectUrl: function SP_Publishing_PortalLaunch_PortalLaunchWaveSetup$get_redirectUrl() {
        return this.$l_1;
    },
    
    set_redirectUrl: function SP_Publishing_PortalLaunch_PortalLaunchWaveSetup$set_redirectUrl(value) {
        this.$l_1 = value;
        return value;
    },
    
    get_siteId: function SP_Publishing_PortalLaunch_PortalLaunchWaveSetup$get_siteId() {
        return this.$m_1;
    },
    
    set_siteId: function SP_Publishing_PortalLaunch_PortalLaunchWaveSetup$set_siteId(value) {
        this.$m_1 = value;
        return value;
    },
    
    get_status: function SP_Publishing_PortalLaunch_PortalLaunchWaveSetup$get_status() {
        return this.$q_1;
    },
    
    set_status: function SP_Publishing_PortalLaunch_PortalLaunchWaveSetup$set_status(value) {
        this.$q_1 = value;
        return value;
    },
    
    get_triggerUrls: function SP_Publishing_PortalLaunch_PortalLaunchWaveSetup$get_triggerUrls() {
        return this.$t_1;
    },
    
    set_triggerUrls: function SP_Publishing_PortalLaunch_PortalLaunchWaveSetup$set_triggerUrls(value) {
        this.$t_1 = value;
        return value;
    },
    
    get_waves: function SP_Publishing_PortalLaunch_PortalLaunchWaveSetup$get_waves() {
        return this.$6_1;
    },
    
    set_waves: function SP_Publishing_PortalLaunch_PortalLaunchWaveSetup$set_waves(value) {
        this.$6_1 = value;
        return value;
    },
    
    get_typeId: function SP_Publishing_PortalLaunch_PortalLaunchWaveSetup$get_typeId() {
        return '{ddde7f26-26b7-4ac0-af78-738f4f58e49e}';
    },
    
    writeToXml: function SP_Publishing_PortalLaunch_PortalLaunchWaveSetup$writeToXml(writer, serializationContext) {
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = [ 'AlternativeUrlsOfNewSite', 'AlternativeUrlsOfOldSite', 'CreatedOn', 'ExpectedUsersSize', 'IsPaused', 'ModifiedOn', 'NewSiteUrl', 'PauseAtWave', 'RedirectionType', 'RedirectUrl', 'SiteId', 'Status', 'TriggerUrls', 'Waves' ];
        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    
    initPropertiesFromJson: function SP_Publishing_PortalLaunch_PortalLaunchWaveSetup$initPropertiesFromJson(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.AlternativeUrlsOfNewSite;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$8_1 = ($v_0);
            delete parentNode.AlternativeUrlsOfNewSite;
        }
        $v_0 = parentNode.AlternativeUrlsOfOldSite;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$9_1 = ($v_0);
            delete parentNode.AlternativeUrlsOfOldSite;
        }
        $v_0 = parentNode.CreatedOn;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$H_1 = ($v_0);
            delete parentNode.CreatedOn;
        }
        $v_0 = parentNode.ExpectedUsersSize;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$O_1 = ((SP.DataConvert.fixupType(null, $v_0)));
            delete parentNode.ExpectedUsersSize;
        }
        $v_0 = parentNode.IsPaused;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$R_1 = ($v_0);
            delete parentNode.IsPaused;
        }
        $v_0 = parentNode.ModifiedOn;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$a_1 = ($v_0);
            delete parentNode.ModifiedOn;
        }
        $v_0 = parentNode.NewSiteUrl;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$d_1 = ($v_0);
            delete parentNode.NewSiteUrl;
        }
        $v_0 = parentNode.PauseAtWave;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$h_1 = ($v_0);
            delete parentNode.PauseAtWave;
        }
        $v_0 = parentNode.RedirectionType;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$k_1 = ((SP.DataConvert.fixupType(null, $v_0)));
            delete parentNode.RedirectionType;
        }
        $v_0 = parentNode.RedirectUrl;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$l_1 = ($v_0);
            delete parentNode.RedirectUrl;
        }
        $v_0 = parentNode.SiteId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$m_1 = ($v_0);
            delete parentNode.SiteId;
        }
        $v_0 = parentNode.Status;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$q_1 = ((SP.DataConvert.fixupType(null, $v_0)));
            delete parentNode.Status;
        }
        $v_0 = parentNode.TriggerUrls;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$t_1 = ((SP.DataConvert.fixupType(null, $v_0)));
            delete parentNode.TriggerUrls;
        }
        $v_0 = parentNode.Waves;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$6_1 = (([]));
            SP.DataConvert.populateArray(null, ((this.$6_1)), ($v_0));
            delete parentNode.Waves;
        }
    }
}


SP.Publishing.AcronymInformation.registerClass('SP.Publishing.AcronymInformation', SP.ClientValueObject);
SP.Publishing.AddinPlugin.registerClass('SP.Publishing.AddinPlugin', SP.ClientObject);
SP.Publishing.AddinPluginPropertyNames.registerClass('SP.Publishing.AddinPluginPropertyNames');
SP.Publishing.AddinSettings.registerClass('SP.Publishing.AddinSettings', SP.ClientObject);
SP.Publishing.AddinSettingsPropertyNames.registerClass('SP.Publishing.AddinSettingsPropertyNames');
SP.Publishing.CustomizableString.registerClass('SP.Publishing.CustomizableString', SP.ClientObject);
SP.Publishing.CustomizableStringPropertyNames.registerClass('SP.Publishing.CustomizableStringPropertyNames');
SP.Publishing.DesignPackage.registerClass('SP.Publishing.DesignPackage');
SP.Publishing.DesignPackageInfo.registerClass('SP.Publishing.DesignPackageInfo', SP.ClientValueObject);
SP.Publishing.EnumerateOnlyVideoCollection.registerClass('SP.Publishing.EnumerateOnlyVideoCollection', SP.ClientObjectCollection);
SP.Publishing.ImageRendition.registerClass('SP.Publishing.ImageRendition', SP.ClientValueObject);
SP.Publishing.PageLayoutCreationInformation.registerClass('SP.Publishing.PageLayoutCreationInformation', SP.ClientValueObject);
SP.Publishing.ScheduledItem.registerClass('SP.Publishing.ScheduledItem', SP.ClientObject);
SP.Publishing.PublishingPage.registerClass('SP.Publishing.PublishingPage', SP.Publishing.ScheduledItem);
SP.Publishing.PublishingPageInformation.registerClass('SP.Publishing.PublishingPageInformation', SP.ClientValueObject);
SP.Publishing.PublishingSite.registerClass('SP.Publishing.PublishingSite', SP.ClientObject);
SP.Publishing.PublishingWeb.registerClass('SP.Publishing.PublishingWeb', SP.ClientObject);
SP.Publishing.PublishingWebObjectPropertyNames.registerClass('SP.Publishing.PublishingWebObjectPropertyNames');
SP.Publishing.SitePageFieldsData.registerClass('SP.Publishing.SitePageFieldsData', SP.ClientValueObject);
SP.Publishing.RepostPageFieldsData.registerClass('SP.Publishing.RepostPageFieldsData', SP.Publishing.SitePageFieldsData);
SP.Publishing.ScheduledItemPropertyNames.registerClass('SP.Publishing.ScheduledItemPropertyNames');
SP.Publishing.ScheduledItemObjectPropertyNames.registerClass('SP.Publishing.ScheduledItemObjectPropertyNames');
SP.Publishing.Search.registerClass('SP.Publishing.Search', SP.ClientObject);
SP.Publishing.SearchPropertyNames.registerClass('SP.Publishing.SearchPropertyNames');
SP.Publishing.SharePagePreviewByEmailFieldsData.registerClass('SP.Publishing.SharePagePreviewByEmailFieldsData', SP.ClientValueObject);
SP.Publishing.SiteImageRenditions.registerClass('SP.Publishing.SiteImageRenditions');
SP.Publishing.SitePage3DFieldsData.registerClass('SP.Publishing.SitePage3DFieldsData', SP.Publishing.SitePageFieldsData);
SP.Publishing.SitePageVersionInfo.registerClass('SP.Publishing.SitePageVersionInfo', SP.ClientValueObject);
SP.Publishing.SiteServicesAddins.registerClass('SP.Publishing.SiteServicesAddins');
SP.Publishing.SiteSharingEmailContext.registerClass('SP.Publishing.SiteSharingEmailContext', SP.ClientValueObject);
SP.Publishing.SpotlightChannel.registerClass('SP.Publishing.SpotlightChannel', SP.ClientObject);
SP.Publishing.SpotlightChannelPropertyNames.registerClass('SP.Publishing.SpotlightChannelPropertyNames');
SP.Publishing.SpotlightChannelObjectPropertyNames.registerClass('SP.Publishing.SpotlightChannelObjectPropertyNames');
SP.Publishing.SpotlightChannelCollection.registerClass('SP.Publishing.SpotlightChannelCollection', SP.ClientObjectCollection);
SP.Publishing.SpotlightVideo.registerClass('SP.Publishing.SpotlightVideo', SP.ClientObject);
SP.Publishing.SpotlightVideoPropertyNames.registerClass('SP.Publishing.SpotlightVideoPropertyNames');
SP.Publishing.SpotlightVideoObjectPropertyNames.registerClass('SP.Publishing.SpotlightVideoObjectPropertyNames');
SP.Publishing.SpotlightVideoCollection.registerClass('SP.Publishing.SpotlightVideoCollection', SP.ClientObjectCollection);
SP.Publishing.SubtitleCollection.registerClass('SP.Publishing.SubtitleCollection', SP.ClientObjectCollection);
SP.Publishing.SubtitleFile.registerClass('SP.Publishing.SubtitleFile', SP.ClientObject);
SP.Publishing.SubtitleFilePropertyNames.registerClass('SP.Publishing.SubtitleFilePropertyNames');
SP.Publishing.TextValueWithLanguage.registerClass('SP.Publishing.TextValueWithLanguage', SP.ClientValueObject);
SP.Publishing.TopicPageFieldsData.registerClass('SP.Publishing.TopicPageFieldsData', SP.Publishing.SitePageFieldsData);
SP.Publishing.VariationLabel.registerClass('SP.Publishing.VariationLabel', SP.ClientObject);
SP.Publishing.VariationLabelPropertyNames.registerClass('SP.Publishing.VariationLabelPropertyNames');
SP.Publishing.Variations.registerClass('SP.Publishing.Variations', SP.ClientObject);
SP.Publishing.VideoChannel.registerClass('SP.Publishing.VideoChannel', SP.ClientObject);
SP.Publishing.VideoChannelPropertyNames.registerClass('SP.Publishing.VideoChannelPropertyNames');
SP.Publishing.VideoChannelObjectPropertyNames.registerClass('SP.Publishing.VideoChannelObjectPropertyNames');
SP.Publishing.VideoChannelCollection.registerClass('SP.Publishing.VideoChannelCollection', SP.ClientObjectCollection);
SP.Publishing.VideoCollection.registerClass('SP.Publishing.VideoCollection', SP.ClientObjectCollection);
SP.Publishing.VideoItem.registerClass('SP.Publishing.VideoItem', SP.ClientObject);
SP.Publishing.VideoItemPropertyNames.registerClass('SP.Publishing.VideoItemPropertyNames');
SP.Publishing.VideoItemObjectPropertyNames.registerClass('SP.Publishing.VideoItemObjectPropertyNames');
SP.Publishing.VideoPermissionGroup.registerClass('SP.Publishing.VideoPermissionGroup', SP.ClientObject);
SP.Publishing.VideoPermissionGroupPropertyNames.registerClass('SP.Publishing.VideoPermissionGroupPropertyNames');
SP.Publishing.VideoPermissionGroupObjectPropertyNames.registerClass('SP.Publishing.VideoPermissionGroupObjectPropertyNames');
SP.Publishing.VideoPlaybackMetadata.registerClass('SP.Publishing.VideoPlaybackMetadata', SP.ClientObject);
SP.Publishing.VideoPlaybackMetadataPropertyNames.registerClass('SP.Publishing.VideoPlaybackMetadataPropertyNames');
SP.Publishing.VideoThumbnail.registerClass('SP.Publishing.VideoThumbnail', SP.ClientObject);
SP.Publishing.VideoThumbnailPropertyNames.registerClass('SP.Publishing.VideoThumbnailPropertyNames');
SP.Publishing.VideoThumbnailCollection.registerClass('SP.Publishing.VideoThumbnailCollection', SP.ClientObjectCollection);
SP.Publishing.Navigation.NavigationTermProviderNameCollection.registerClass('SP.Publishing.Navigation.NavigationTermProviderNameCollection', SP.ClientObjectCollection);
SP.Publishing.Navigation.NavigationTermSetItem.registerClass('SP.Publishing.Navigation.NavigationTermSetItem', SP.ClientObject);
SP.Publishing.Navigation.NavigationTerm.registerClass('SP.Publishing.Navigation.NavigationTerm', SP.Publishing.Navigation.NavigationTermSetItem);
SP.Publishing.Navigation.NavigationTermPropertyNames.registerClass('SP.Publishing.Navigation.NavigationTermPropertyNames');
SP.Publishing.Navigation.NavigationTermObjectPropertyNames.registerClass('SP.Publishing.Navigation.NavigationTermObjectPropertyNames');
SP.Publishing.Navigation.NavigationTermCollection.registerClass('SP.Publishing.Navigation.NavigationTermCollection', SP.ClientObjectCollection);
SP.Publishing.Navigation.NavigationTermSet.registerClass('SP.Publishing.Navigation.NavigationTermSet', SP.Publishing.Navigation.NavigationTermSetItem);
SP.Publishing.Navigation.NavigationTermSetPropertyNames.registerClass('SP.Publishing.Navigation.NavigationTermSetPropertyNames');
SP.Publishing.Navigation.NavigationTermSetItemPropertyNames.registerClass('SP.Publishing.Navigation.NavigationTermSetItemPropertyNames');
SP.Publishing.Navigation.NavigationTermSetItemObjectPropertyNames.registerClass('SP.Publishing.Navigation.NavigationTermSetItemObjectPropertyNames');
SP.Publishing.Navigation.NavigationTermSetView.registerClass('SP.Publishing.Navigation.NavigationTermSetView', SP.ClientObject);
SP.Publishing.Navigation.NavigationTermSetViewPropertyNames.registerClass('SP.Publishing.Navigation.NavigationTermSetViewPropertyNames');
SP.Publishing.Navigation.StandardNavigationSettings.registerClass('SP.Publishing.Navigation.StandardNavigationSettings', SP.ClientObject);
SP.Publishing.Navigation.StandardNavigationSettingsPropertyNames.registerClass('SP.Publishing.Navigation.StandardNavigationSettingsPropertyNames');
SP.Publishing.Navigation.TaxonomyNavigation.registerClass('SP.Publishing.Navigation.TaxonomyNavigation');
SP.Publishing.Navigation.WebNavigationSettings.registerClass('SP.Publishing.Navigation.WebNavigationSettings', SP.ClientObject);
SP.Publishing.Navigation.WebNavigationSettingsPropertyNames.registerClass('SP.Publishing.Navigation.WebNavigationSettingsPropertyNames');
SP.Publishing.Navigation.WebNavigationSettingsObjectPropertyNames.registerClass('SP.Publishing.Navigation.WebNavigationSettingsObjectPropertyNames');
SP.Publishing.PortalLaunch.PortalLaunchSetupWrapper.registerClass('SP.Publishing.PortalLaunch.PortalLaunchSetupWrapper', SP.ClientValueObject);
SP.Publishing.PortalLaunch.PortalLaunchWave.registerClass('SP.Publishing.PortalLaunch.PortalLaunchWave', SP.ClientValueObject);
SP.Publishing.PortalLaunch.PortalLaunchWaveGroup.registerClass('SP.Publishing.PortalLaunch.PortalLaunchWaveGroup', SP.ClientValueObject);
SP.Publishing.PortalLaunch.PortalLaunchWaveSetup.registerClass('SP.Publishing.PortalLaunch.PortalLaunchWaveSetup', SP.ClientValueObject);
SP.Publishing.AddinPluginPropertyNames.description = 'Description';
SP.Publishing.AddinPluginPropertyNames.markup = 'Markup';
SP.Publishing.AddinPluginPropertyNames.title = 'Title';
SP.Publishing.AddinSettingsPropertyNames.description = 'Description';
SP.Publishing.AddinSettingsPropertyNames.enabled = 'Enabled';
SP.Publishing.AddinSettingsPropertyNames.headScript = 'HeadScript';
SP.Publishing.AddinSettingsPropertyNames.htmlEndBody = 'HtmlEndBody';
SP.Publishing.AddinSettingsPropertyNames.htmlStartBody = 'HtmlStartBody';
SP.Publishing.AddinSettingsPropertyNames.id = 'Id';
SP.Publishing.AddinSettingsPropertyNames.metaTagPagePropertyMappings = 'MetaTagPagePropertyMappings';
SP.Publishing.AddinSettingsPropertyNames.namespace = 'Namespace';
SP.Publishing.AddinSettingsPropertyNames.title = 'Title';
SP.Publishing.CustomizableStringPropertyNames.defaultValue = 'DefaultValue';
SP.Publishing.CustomizableStringPropertyNames.usesDefaultValue = 'UsesDefaultValue';
SP.Publishing.CustomizableStringPropertyNames.value = 'Value';
SP.Publishing.PublishingWebObjectPropertyNames.web = 'Web';
SP.Publishing.ScheduledItemPropertyNames.endDate = 'EndDate';
SP.Publishing.ScheduledItemPropertyNames.startDate = 'StartDate';
SP.Publishing.ScheduledItemObjectPropertyNames.listItem = 'ListItem';
SP.Publishing.SearchPropertyNames.queryLanguages = 'QueryLanguages';
SP.Publishing.SpotlightChannelPropertyNames.channelId = 'ChannelId';
SP.Publishing.SpotlightChannelPropertyNames.id = 'Id';
SP.Publishing.SpotlightChannelPropertyNames.tileHtmlColor = 'TileHtmlColor';
SP.Publishing.SpotlightChannelPropertyNames.title = 'Title';
SP.Publishing.SpotlightChannelPropertyNames.videoLibraryServerRelativeUrl = 'VideoLibraryServerRelativeUrl';
SP.Publishing.SpotlightChannelObjectPropertyNames.channel = 'Channel';
SP.Publishing.SpotlightVideoPropertyNames.id = 'Id';
SP.Publishing.SpotlightVideoPropertyNames.serverRelativeUrl = 'ServerRelativeUrl';
SP.Publishing.SpotlightVideoPropertyNames.url = 'Url';
SP.Publishing.SpotlightVideoObjectPropertyNames.video = 'Video';
SP.Publishing.SubtitleFilePropertyNames.language = 'Language';
SP.Publishing.SubtitleFilePropertyNames.nativeLanguageName = 'NativeLanguageName';
SP.Publishing.SubtitleFilePropertyNames.url = 'Url';
SP.Publishing.VariationLabelPropertyNames.displayName = 'DisplayName';
SP.Publishing.VariationLabelPropertyNames.isSource = 'IsSource';
SP.Publishing.VariationLabelPropertyNames.language = 'Language';
SP.Publishing.VariationLabelPropertyNames.locale = 'Locale';
SP.Publishing.VariationLabelPropertyNames.title = 'Title';
SP.Publishing.VariationLabelPropertyNames.topWebUrl = 'TopWebUrl';
SP.Publishing.VideoChannelPropertyNames.canAdministrateByCurrent = 'CanAdministrateByCurrent';
SP.Publishing.VideoChannelPropertyNames.canEditByCurrent = 'CanEditByCurrent';
SP.Publishing.VideoChannelPropertyNames.canViewByCurrent = 'CanViewByCurrent';
SP.Publishing.VideoChannelPropertyNames.channelPageUrl = 'ChannelPageUrl';
SP.Publishing.VideoChannelPropertyNames.description = 'Description';
SP.Publishing.VideoChannelPropertyNames.downloadUrlVisibleMinPermission = 'DownloadUrlVisibleMinPermission';
SP.Publishing.VideoChannelPropertyNames.fullUrl = 'FullUrl';
SP.Publishing.VideoChannelPropertyNames.id = 'Id';
SP.Publishing.VideoChannelPropertyNames.serverRelativeUrl = 'ServerRelativeUrl';
SP.Publishing.VideoChannelPropertyNames.shareByEmailEnabled = 'ShareByEmailEnabled';
SP.Publishing.VideoChannelPropertyNames.tileHtmlColor = 'TileHtmlColor';
SP.Publishing.VideoChannelPropertyNames.title = 'Title';
SP.Publishing.VideoChannelPropertyNames.yammerDefaultGroupId = 'YammerDefaultGroupId';
SP.Publishing.VideoChannelPropertyNames.yammerEnabled = 'YammerEnabled';
SP.Publishing.VideoChannelObjectPropertyNames.search = 'Search';
SP.Publishing.VideoChannelObjectPropertyNames.spotlightVideos = 'SpotlightVideos';
SP.Publishing.VideoChannelObjectPropertyNames.videos = 'Videos';
SP.Publishing.VideoItemPropertyNames.channelID = 'ChannelID';
SP.Publishing.VideoItemPropertyNames.createdDate = 'CreatedDate';
SP.Publishing.VideoItemPropertyNames.defaultEmbedCode = 'DefaultEmbedCode';
SP.Publishing.VideoItemPropertyNames.description = 'Description';
SP.Publishing.VideoItemPropertyNames.displayFormUrl = 'DisplayFormUrl';
SP.Publishing.VideoItemPropertyNames.fileName = 'FileName';
SP.Publishing.VideoItemPropertyNames.ownerName = 'OwnerName';
SP.Publishing.VideoItemPropertyNames.playerPageUrl = 'PlayerPageUrl';
SP.Publishing.VideoItemPropertyNames.serverRelativeUrl = 'ServerRelativeUrl';
SP.Publishing.VideoItemPropertyNames.thumbnailSelection = 'ThumbnailSelection';
SP.Publishing.VideoItemPropertyNames.thumbnailUrl = 'ThumbnailUrl';
SP.Publishing.VideoItemPropertyNames.title = 'Title';
SP.Publishing.VideoItemPropertyNames.id = 'ID';
SP.Publishing.VideoItemPropertyNames.url = 'Url';
SP.Publishing.VideoItemPropertyNames.videoDownloadUrl = 'VideoDownloadUrl';
SP.Publishing.VideoItemPropertyNames.videoDurationInSeconds = 'VideoDurationInSeconds';
SP.Publishing.VideoItemPropertyNames.videoProcessingStatus = 'VideoProcessingStatus';
SP.Publishing.VideoItemPropertyNames.viewCount = 'ViewCount';
SP.Publishing.VideoItemPropertyNames.yammerObjectUrl = 'YammerObjectUrl';
SP.Publishing.VideoItemObjectPropertyNames.author = 'Author';
SP.Publishing.VideoItemObjectPropertyNames.owner = 'Owner';
SP.Publishing.VideoItemObjectPropertyNames.peopleInMedia = 'PeopleInMedia';
SP.Publishing.VideoPermissionGroupPropertyNames.id = 'Id';
SP.Publishing.VideoPermissionGroupObjectPropertyNames.users = 'Users';
SP.Publishing.VideoPlaybackMetadataPropertyNames.hlsUrl = 'HLSUrl';
SP.Publishing.VideoPlaybackMetadataPropertyNames.sdnPlaybackMetadata = 'SdnPlaybackMetadata';
SP.Publishing.VideoPlaybackMetadataPropertyNames.streamingUrl = 'StreamingUrl';
SP.Publishing.VideoPlaybackMetadataPropertyNames.token = 'Token';
SP.Publishing.VideoThumbnailPropertyNames.choice = 'Choice';
SP.Publishing.VideoThumbnailPropertyNames.isSelected = 'IsSelected';
SP.Publishing.VideoThumbnailPropertyNames.url = 'Url';
SP.Publishing.Navigation.NavigationTermPropertyNames.associatedFolderUrl = 'AssociatedFolderUrl';
SP.Publishing.Navigation.NavigationTermPropertyNames.categoryImageUrl = 'CategoryImageUrl';
SP.Publishing.Navigation.NavigationTermPropertyNames.excludeFromCurrentNavigation = 'ExcludeFromCurrentNavigation';
SP.Publishing.Navigation.NavigationTermPropertyNames.excludeFromGlobalNavigation = 'ExcludeFromGlobalNavigation';
SP.Publishing.Navigation.NavigationTermPropertyNames.hoverText = 'HoverText';
SP.Publishing.Navigation.NavigationTermPropertyNames.isDeprecated = 'IsDeprecated';
SP.Publishing.Navigation.NavigationTermPropertyNames.isPinned = 'IsPinned';
SP.Publishing.Navigation.NavigationTermPropertyNames.isPinnedRoot = 'IsPinnedRoot';
SP.Publishing.Navigation.NavigationTermPropertyNames.simpleLinkUrl = 'SimpleLinkUrl';
SP.Publishing.Navigation.NavigationTermObjectPropertyNames.catalogTargetUrl = 'CatalogTargetUrl';
SP.Publishing.Navigation.NavigationTermObjectPropertyNames.excludedProviders = 'ExcludedProviders';
SP.Publishing.Navigation.NavigationTermObjectPropertyNames.friendlyUrlSegment = 'FriendlyUrlSegment';
SP.Publishing.Navigation.NavigationTermObjectPropertyNames.parent = 'Parent';
SP.Publishing.Navigation.NavigationTermObjectPropertyNames.targetSiteId = 'TargetSiteId';
SP.Publishing.Navigation.NavigationTermObjectPropertyNames.targetTermSetId = 'TargetTermSetId';
SP.Publishing.Navigation.NavigationTermObjectPropertyNames.targetUrl = 'TargetUrl';
SP.Publishing.Navigation.NavigationTermObjectPropertyNames.targetUrlListId = 'TargetUrlListId';
SP.Publishing.Navigation.NavigationTermObjectPropertyNames.targetUrlListItemId = 'TargetUrlListItemId';
SP.Publishing.Navigation.NavigationTermObjectPropertyNames.targetUrlWebId = 'TargetUrlWebId';
SP.Publishing.Navigation.NavigationTermObjectPropertyNames.termSet = 'TermSet';
SP.Publishing.Navigation.NavigationTermSetPropertyNames.isNavigationTermSet = 'IsNavigationTermSet';
SP.Publishing.Navigation.NavigationTermSetPropertyNames.lcid = 'Lcid';
SP.Publishing.Navigation.NavigationTermSetPropertyNames.loadedFromPersistedData = 'LoadedFromPersistedData';
SP.Publishing.Navigation.NavigationTermSetPropertyNames.termGroupId = 'TermGroupId';
SP.Publishing.Navigation.NavigationTermSetPropertyNames.termStoreId = 'TermStoreId';
SP.Publishing.Navigation.NavigationTermSetItemPropertyNames.id = 'Id';
SP.Publishing.Navigation.NavigationTermSetItemPropertyNames.isReadOnly = 'IsReadOnly';
SP.Publishing.Navigation.NavigationTermSetItemPropertyNames.linkType = 'LinkType';
SP.Publishing.Navigation.NavigationTermSetItemPropertyNames.taxonomyName = 'TaxonomyName';
SP.Publishing.Navigation.NavigationTermSetItemObjectPropertyNames.catalogTargetUrlForChildTerms = 'CatalogTargetUrlForChildTerms';
SP.Publishing.Navigation.NavigationTermSetItemObjectPropertyNames.targetUrlForChildTerms = 'TargetUrlForChildTerms';
SP.Publishing.Navigation.NavigationTermSetItemObjectPropertyNames.terms = 'Terms';
SP.Publishing.Navigation.NavigationTermSetItemObjectPropertyNames.title = 'Title';
SP.Publishing.Navigation.NavigationTermSetItemObjectPropertyNames.view = 'View';
SP.Publishing.Navigation.NavigationTermSetViewPropertyNames.excludeDeprecatedTerms = 'ExcludeDeprecatedTerms';
SP.Publishing.Navigation.NavigationTermSetViewPropertyNames.excludeTermsByPermissions = 'ExcludeTermsByPermissions';
SP.Publishing.Navigation.NavigationTermSetViewPropertyNames.excludeTermsByProvider = 'ExcludeTermsByProvider';
SP.Publishing.Navigation.NavigationTermSetViewPropertyNames.serverRelativeSiteUrl = 'ServerRelativeSiteUrl';
SP.Publishing.Navigation.NavigationTermSetViewPropertyNames.serverRelativeWebUrl = 'ServerRelativeWebUrl';
SP.Publishing.Navigation.NavigationTermSetViewPropertyNames.siteMapProviderName = 'SiteMapProviderName';
SP.Publishing.Navigation.NavigationTermSetViewPropertyNames.webId = 'WebId';
SP.Publishing.Navigation.NavigationTermSetViewPropertyNames.webTitle = 'WebTitle';
SP.Publishing.Navigation.StandardNavigationSettingsPropertyNames.source = 'Source';
SP.Publishing.Navigation.StandardNavigationSettingsPropertyNames.termSetId = 'TermSetId';
SP.Publishing.Navigation.StandardNavigationSettingsPropertyNames.termStoreId = 'TermStoreId';
SP.Publishing.Navigation.WebNavigationSettingsPropertyNames.addNewPagesToNavigation = 'AddNewPagesToNavigation';
SP.Publishing.Navigation.WebNavigationSettingsPropertyNames.cachedHierarchyDepth = 'CachedHierarchyDepth';
SP.Publishing.Navigation.WebNavigationSettingsPropertyNames.cacheSchemaVersion = 'CacheSchemaVersion';
SP.Publishing.Navigation.WebNavigationSettingsPropertyNames.cachingRetryAttemptLeft = 'CachingRetryAttemptLeft';
SP.Publishing.Navigation.WebNavigationSettingsPropertyNames.cachingState = 'CachingState';
SP.Publishing.Navigation.WebNavigationSettingsPropertyNames.createFriendlyUrlsForNewPages = 'CreateFriendlyUrlsForNewPages';
SP.Publishing.Navigation.WebNavigationSettingsPropertyNames.lastCachingRefreshAttempted = 'LastCachingRefreshAttempted';
SP.Publishing.Navigation.WebNavigationSettingsObjectPropertyNames.currentNavigation = 'CurrentNavigation';
SP.Publishing.Navigation.WebNavigationSettingsObjectPropertyNames.globalNavigation = 'GlobalNavigation';

if( typeof(Sys) != "undefined" && Sys && Sys.Application ){
   Sys.Application.notifyScriptLoaded();
}
NotifyScriptLoadedAndExecuteWaitingJobs("SP.Publishing.js");
