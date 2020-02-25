// JScript File


Type.registerNamespace('SP.Publishing');

SP.Publishing.AcronymInformation = function SP_Publishing_AcronymInformation() {
    SP.Publishing.AcronymInformation.initializeBase(this);
}
SP.Publishing.AcronymInformation.prototype = {
    $4_1: null,
    $9_1: null,
    $0_1: 0,
    $3_1: null,
    
    get_acronym: function SP_Publishing_AcronymInformation$get_acronym$in() {
        return this.$4_1;
    },
    
    set_acronym: function SP_Publishing_AcronymInformation$set_acronym$in(value) {
        this.$4_1 = value;
        return value;
    },
    
    get_color: function SP_Publishing_AcronymInformation$get_color$in() {
        return this.$9_1;
    },
    
    set_color: function SP_Publishing_AcronymInformation$set_color$in(value) {
        this.$9_1 = value;
        return value;
    },
    
    get_lcid: function SP_Publishing_AcronymInformation$get_lcid$in() {
        return this.$0_1;
    },
    
    set_lcid: function SP_Publishing_AcronymInformation$set_lcid$in(value) {
        this.$0_1 = value;
        return value;
    },
    
    get_text: function SP_Publishing_AcronymInformation$get_text$in() {
        return this.$3_1;
    },
    
    set_text: function SP_Publishing_AcronymInformation$set_text$in(value) {
        this.$3_1 = value;
        return value;
    },
    
    get_typeId: function SP_Publishing_AcronymInformation$get_typeId$in() {
        return '{df8f1d94-c876-4325-8584-95861846041c}';
    },
    
    writeToXml: function SP_Publishing_AcronymInformation$writeToXml$in(writer, serializationContext) {
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
    
    initPropertiesFromJson: function SP_Publishing_AcronymInformation$initPropertiesFromJson$in(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.Acronym;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$4_1 = ($v_0);
            delete parentNode.Acronym;
        }
        $v_0 = parentNode.Color;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$9_1 = ($v_0);
            delete parentNode.Color;
        }
        $v_0 = parentNode.Lcid;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$0_1 = ($v_0);
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
SP.Publishing.AddinPlugin.newObject = function SP_Publishing_AddinPlugin$newObject$st(context) {
    return new SP.Publishing.AddinPlugin(context, new SP.ObjectPathConstructor(context, '{698097b9-bbe7-4c07-a37b-23e2f07bc9a4}', null));
}
SP.Publishing.AddinPlugin.prototype = {
    
    get_description: function SP_Publishing_AddinPlugin$get_description$in() {
        this.checkUninitializedProperty('Description');
        return (this.get_objectData().get_properties()['Description']);
    },
    
    set_description: function SP_Publishing_AddinPlugin$set_description$in(value) {
        this.get_objectData().get_properties()['Description'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Description', value));
        }
        return value;
    },
    
    get_markup: function SP_Publishing_AddinPlugin$get_markup$in() {
        this.checkUninitializedProperty('Markup');
        return (this.get_objectData().get_properties()['Markup']);
    },
    
    set_markup: function SP_Publishing_AddinPlugin$set_markup$in(value) {
        this.get_objectData().get_properties()['Markup'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Markup', value));
        }
        return value;
    },
    
    get_title: function SP_Publishing_AddinPlugin$get_title$in() {
        this.checkUninitializedProperty('Title');
        return (this.get_objectData().get_properties()['Title']);
    },
    
    set_title: function SP_Publishing_AddinPlugin$set_title$in(value) {
        this.get_objectData().get_properties()['Title'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Title', value));
        }
        return value;
    },
    
    initPropertiesFromJson: function SP_Publishing_AddinPlugin$initPropertiesFromJson$in(parentNode) {
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
SP.Publishing.AddinSettings.newObject = function SP_Publishing_AddinSettings$newObject$st(context, id) {
    return new SP.Publishing.AddinSettings(context, new SP.ObjectPathConstructor(context, '{7bc23bc0-cb63-4523-b967-a910c8b43668}', [ id ]));
}
SP.Publishing.AddinSettings.prototype = {
    
    get_description: function SP_Publishing_AddinSettings$get_description$in() {
        this.checkUninitializedProperty('Description');
        return (this.get_objectData().get_properties()['Description']);
    },
    
    set_description: function SP_Publishing_AddinSettings$set_description$in(value) {
        this.get_objectData().get_properties()['Description'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Description', value));
        }
        return value;
    },
    
    get_enabled: function SP_Publishing_AddinSettings$get_enabled$in() {
        this.checkUninitializedProperty('Enabled');
        return (this.get_objectData().get_properties()['Enabled']);
    },
    
    set_enabled: function SP_Publishing_AddinSettings$set_enabled$in(value) {
        this.get_objectData().get_properties()['Enabled'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Enabled', value));
        }
        return value;
    },
    
    get_headScript: function SP_Publishing_AddinSettings$get_headScript$in() {
        this.checkUninitializedProperty('HeadScript');
        return (this.get_objectData().get_properties()['HeadScript']);
    },
    
    set_headScript: function SP_Publishing_AddinSettings$set_headScript$in(value) {
        this.get_objectData().get_properties()['HeadScript'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'HeadScript', value));
        }
        return value;
    },
    
    get_htmlEndBody: function SP_Publishing_AddinSettings$get_htmlEndBody$in() {
        this.checkUninitializedProperty('HtmlEndBody');
        return (this.get_objectData().get_properties()['HtmlEndBody']);
    },
    
    set_htmlEndBody: function SP_Publishing_AddinSettings$set_htmlEndBody$in(value) {
        this.get_objectData().get_properties()['HtmlEndBody'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'HtmlEndBody', value));
        }
        return value;
    },
    
    get_htmlStartBody: function SP_Publishing_AddinSettings$get_htmlStartBody$in() {
        this.checkUninitializedProperty('HtmlStartBody');
        return (this.get_objectData().get_properties()['HtmlStartBody']);
    },
    
    set_htmlStartBody: function SP_Publishing_AddinSettings$set_htmlStartBody$in(value) {
        this.get_objectData().get_properties()['HtmlStartBody'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'HtmlStartBody', value));
        }
        return value;
    },
    
    get_id: function SP_Publishing_AddinSettings$get_id$in() {
        this.checkUninitializedProperty('Id');
        return (this.get_objectData().get_properties()['Id']);
    },
    
    get_metaTagPagePropertyMappings: function SP_Publishing_AddinSettings$get_metaTagPagePropertyMappings$in() {
        this.checkUninitializedProperty('MetaTagPagePropertyMappings');
        return (this.get_objectData().get_properties()['MetaTagPagePropertyMappings']);
    },
    
    set_metaTagPagePropertyMappings: function SP_Publishing_AddinSettings$set_metaTagPagePropertyMappings$in(value) {
        this.get_objectData().get_properties()['MetaTagPagePropertyMappings'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'MetaTagPagePropertyMappings', value));
        }
        return value;
    },
    
    get_namespace: function SP_Publishing_AddinSettings$get_namespace$in() {
        this.checkUninitializedProperty('Namespace');
        return (this.get_objectData().get_properties()['Namespace']);
    },
    
    set_namespace: function SP_Publishing_AddinSettings$set_namespace$in(value) {
        this.get_objectData().get_properties()['Namespace'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Namespace', value));
        }
        return value;
    },
    
    get_title: function SP_Publishing_AddinSettings$get_title$in() {
        this.checkUninitializedProperty('Title');
        return (this.get_objectData().get_properties()['Title']);
    },
    
    set_title: function SP_Publishing_AddinSettings$set_title$in(value) {
        this.get_objectData().get_properties()['Title'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Title', value));
        }
        return value;
    },
    
    initPropertiesFromJson: function SP_Publishing_AddinSettings$initPropertiesFromJson$in(parentNode) {
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
    
    get_defaultValue: function SP_Publishing_CustomizableString$get_defaultValue$in() {
        this.checkUninitializedProperty('DefaultValue');
        return (this.get_objectData().get_properties()['DefaultValue']);
    },
    
    get_usesDefaultValue: function SP_Publishing_CustomizableString$get_usesDefaultValue$in() {
        this.checkUninitializedProperty('UsesDefaultValue');
        return (this.get_objectData().get_properties()['UsesDefaultValue']);
    },
    
    set_usesDefaultValue: function SP_Publishing_CustomizableString$set_usesDefaultValue$in(value) {
        this.get_objectData().get_properties()['UsesDefaultValue'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'UsesDefaultValue', value));
        }
        return value;
    },
    
    get_value: function SP_Publishing_CustomizableString$get_value$in() {
        this.checkUninitializedProperty('Value');
        return (this.get_objectData().get_properties()['Value']);
    },
    
    set_value: function SP_Publishing_CustomizableString$set_value$in(value) {
        this.get_objectData().get_properties()['Value'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Value', value));
        }
        return value;
    },
    
    initPropertiesFromJson: function SP_Publishing_CustomizableString$initPropertiesFromJson$in(parentNode) {
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
SP.Publishing.DesignPackage.install = function SP_Publishing_DesignPackage$install$st(context, site, info, path) {
    if (!context) {
        throw Error.argumentNull('context');
    }
    var $v_0 = new SP.ClientActionInvokeStaticMethod(context, '{d21214d9-63f5-488b-a665-2b7f9abc1604}', 'Install', [ site, info, path ]);
    context.addQuery($v_0);
}
SP.Publishing.DesignPackage.unInstall = function SP_Publishing_DesignPackage$unInstall$st(context, site, info) {
    if (!context) {
        throw Error.argumentNull('context');
    }
    var $v_0 = new SP.ClientActionInvokeStaticMethod(context, '{d21214d9-63f5-488b-a665-2b7f9abc1604}', 'UnInstall', [ site, info ]);
    context.addQuery($v_0);
}
SP.Publishing.DesignPackage.apply = function SP_Publishing_DesignPackage$apply$st(context, site, info) {
    if (!context) {
        throw Error.argumentNull('context');
    }
    var $v_0 = new SP.ClientActionInvokeStaticMethod(context, '{d21214d9-63f5-488b-a665-2b7f9abc1604}', 'Apply', [ site, info ]);
    context.addQuery($v_0);
}
SP.Publishing.DesignPackage.exportEnterprise = function SP_Publishing_DesignPackage$exportEnterprise$st(context, site, includeSearchConfiguration) {
    if (!context) {
        throw Error.argumentNull('context');
    }
    var $v_0;
    var $v_1 = new SP.ClientActionInvokeStaticMethod(context, '{d21214d9-63f5-488b-a665-2b7f9abc1604}', 'ExportEnterprise', [ site, includeSearchConfiguration ]);
    context.addQuery($v_1);
    $v_0 = new SP.Publishing.DesignPackageInfo();
    context.addQueryIdAndResultObject($v_1.get_id(), $v_0);
    return $v_0;
}
SP.Publishing.DesignPackage.exportSmallBusiness = function SP_Publishing_DesignPackage$exportSmallBusiness$st(context, site, packageName, includeSearchConfiguration) {
    if (!context) {
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
    $I_1: 0,
    $K_1: 0,
    $O_1: null,
    $P_1: null,
    
    get_majorVersion: function SP_Publishing_DesignPackageInfo$get_majorVersion$in() {
        return this.$I_1;
    },
    
    set_majorVersion: function SP_Publishing_DesignPackageInfo$set_majorVersion$in(value) {
        this.$I_1 = value;
        return value;
    },
    
    get_minorVersion: function SP_Publishing_DesignPackageInfo$get_minorVersion$in() {
        return this.$K_1;
    },
    
    set_minorVersion: function SP_Publishing_DesignPackageInfo$set_minorVersion$in(value) {
        this.$K_1 = value;
        return value;
    },
    
    get_packageGuid: function SP_Publishing_DesignPackageInfo$get_packageGuid$in() {
        return this.$O_1;
    },
    
    set_packageGuid: function SP_Publishing_DesignPackageInfo$set_packageGuid$in(value) {
        this.$O_1 = value;
        return value;
    },
    
    get_packageName: function SP_Publishing_DesignPackageInfo$get_packageName$in() {
        return this.$P_1;
    },
    
    set_packageName: function SP_Publishing_DesignPackageInfo$set_packageName$in(value) {
        this.$P_1 = value;
        return value;
    },
    
    get_typeId: function SP_Publishing_DesignPackageInfo$get_typeId$in() {
        return '{5332b37d-a6d1-4231-83cd-d7dd274540b7}';
    },
    
    writeToXml: function SP_Publishing_DesignPackageInfo$writeToXml$in(writer, serializationContext) {
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
    
    initPropertiesFromJson: function SP_Publishing_DesignPackageInfo$initPropertiesFromJson$in(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.MajorVersion;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$I_1 = ($v_0);
            delete parentNode.MajorVersion;
        }
        $v_0 = parentNode.MinorVersion;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$K_1 = ($v_0);
            delete parentNode.MinorVersion;
        }
        $v_0 = parentNode.PackageGuid;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$O_1 = ($v_0);
            delete parentNode.PackageGuid;
        }
        $v_0 = parentNode.PackageName;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$P_1 = ($v_0);
            delete parentNode.PackageName;
        }
    }
}


SP.Publishing.ImageRendition = function SP_Publishing_ImageRendition() {
    SP.Publishing.ImageRendition.initializeBase(this);
}
SP.Publishing.ImageRendition.prototype = {
    $D_1: null,
    $E_1: 0,
    $V_1: 0,
    $W_1: 0,
    $2_1: null,
    $Y_1: 0,
    $T_1: 0,
    
    get_group: function SP_Publishing_ImageRendition$get_group$in() {
        return this.$D_1;
    },
    
    set_group: function SP_Publishing_ImageRendition$set_group$in(value) {
        this.$D_1 = value;
        return value;
    },
    
    get_height: function SP_Publishing_ImageRendition$get_height$in() {
        return this.$E_1;
    },
    
    set_height: function SP_Publishing_ImageRendition$set_height$in(value) {
        this.$E_1 = value;
        return value;
    },
    
    get_id: function SP_Publishing_ImageRendition$get_id$in() {
        return this.$V_1;
    },
    
    get_name: function SP_Publishing_ImageRendition$get_name$in() {
        return this.$2_1;
    },
    
    set_name: function SP_Publishing_ImageRendition$set_name$in(value) {
        this.$2_1 = value;
        return value;
    },
    
    get_version: function SP_Publishing_ImageRendition$get_version$in() {
        return this.$Y_1;
    },
    
    get_width: function SP_Publishing_ImageRendition$get_width$in() {
        return this.$T_1;
    },
    
    set_width: function SP_Publishing_ImageRendition$set_width$in(value) {
        this.$T_1 = value;
        return value;
    },
    
    get_typeId: function SP_Publishing_ImageRendition$get_typeId$in() {
        return '{cb63161f-1f15-446f-9ba9-af89ae03cd45}';
    },
    
    writeToXml: function SP_Publishing_ImageRendition$writeToXml$in(writer, serializationContext) {
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
        SP.DataConvert.writeValueToXmlElement(writer, this.$W_1, serializationContext);
        writer.writeEndElement();
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    
    initPropertiesFromJson: function SP_Publishing_ImageRendition$initPropertiesFromJson$in(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.Group;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$D_1 = ($v_0);
            delete parentNode.Group;
        }
        $v_0 = parentNode.Height;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$E_1 = ($v_0);
            delete parentNode.Height;
        }
        $v_0 = parentNode.Id;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$V_1 = ($v_0);
            delete parentNode.Id;
        }
        $v_0 = parentNode.IdCsom;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$W_1 = ($v_0);
            delete parentNode.IdCsom;
        }
        $v_0 = parentNode.Name;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$2_1 = ($v_0);
            delete parentNode.Name;
        }
        $v_0 = parentNode.Version;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$Y_1 = ($v_0);
            delete parentNode.Version;
        }
        $v_0 = parentNode.Width;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$T_1 = ($v_0);
            delete parentNode.Width;
        }
    }
}


SP.Publishing.PageLayoutCreationInformation = function SP_Publishing_PageLayoutCreationInformation() {
    SP.Publishing.PageLayoutCreationInformation.initializeBase(this);
}
SP.Publishing.PageLayoutCreationInformation.prototype = {
    $5_1: null,
    $J_1: null,
    $M_1: null,
    $N_1: null,
    $Z_1: null,
    
    get_associatedContentTypeId: function SP_Publishing_PageLayoutCreationInformation$get_associatedContentTypeId$in() {
        return this.$5_1;
    },
    
    set_associatedContentTypeId: function SP_Publishing_PageLayoutCreationInformation$set_associatedContentTypeId$in(value) {
        this.$5_1 = value;
        return value;
    },
    
    get_masterPageUrl: function SP_Publishing_PageLayoutCreationInformation$get_masterPageUrl$in() {
        return this.$J_1;
    },
    
    set_masterPageUrl: function SP_Publishing_PageLayoutCreationInformation$set_masterPageUrl$in(value) {
        this.$J_1 = value;
        return value;
    },
    
    get_newPageLayoutEditablePath: function SP_Publishing_PageLayoutCreationInformation$get_newPageLayoutEditablePath$in() {
        return this.$M_1;
    },
    
    set_newPageLayoutEditablePath: function SP_Publishing_PageLayoutCreationInformation$set_newPageLayoutEditablePath$in(value) {
        this.$M_1 = value;
        return value;
    },
    
    get_newPageLayoutNameWithoutExtension: function SP_Publishing_PageLayoutCreationInformation$get_newPageLayoutNameWithoutExtension$in() {
        return this.$N_1;
    },
    
    set_newPageLayoutNameWithoutExtension: function SP_Publishing_PageLayoutCreationInformation$set_newPageLayoutNameWithoutExtension$in(value) {
        this.$N_1 = value;
        return value;
    },
    
    get_web: function SP_Publishing_PageLayoutCreationInformation$get_web$in() {
        return this.$Z_1;
    },
    
    set_web: function SP_Publishing_PageLayoutCreationInformation$set_web$in(value) {
        this.$Z_1 = value;
        return value;
    },
    
    get_typeId: function SP_Publishing_PageLayoutCreationInformation$get_typeId$in() {
        return '{d36987c1-ddf0-4e73-8b1a-e7e444ef3d3f}';
    },
    
    writeToXml: function SP_Publishing_PageLayoutCreationInformation$writeToXml$in(writer, serializationContext) {
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
    
    initPropertiesFromJson: function SP_Publishing_PageLayoutCreationInformation$initPropertiesFromJson$in(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.AssociatedContentTypeId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$5_1 = ($v_0);
            delete parentNode.AssociatedContentTypeId;
        }
        $v_0 = parentNode.MasterPageUrl;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$J_1 = ($v_0);
            delete parentNode.MasterPageUrl;
        }
        $v_0 = parentNode.NewPageLayoutEditablePath;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$M_1 = ($v_0);
            delete parentNode.NewPageLayoutEditablePath;
        }
        $v_0 = parentNode.NewPageLayoutNameWithoutExtension;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$N_1 = ($v_0);
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
SP.Publishing.PublishingPage.getPublishingPage = function SP_Publishing_PublishingPage$getPublishingPage$st(context, sourceListItem) {
    if (!context) {
        throw Error.argumentNull('context');
    }
    var $v_0;
    $v_0 = new SP.Publishing.PublishingPage(context, new SP.ObjectPathStaticMethod(context, '{e361280d-01dc-431a-9823-4afacd06418b}', 'GetPublishingPage', [ sourceListItem ]));
    return $v_0;
}
SP.Publishing.PublishingPage.prototype = {
    
    addFriendlyUrl: function SP_Publishing_PublishingPage$addFriendlyUrl$in(friendlyUrlSegment, editableParent, doAddToNavigation) {
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
    $U_1: null,
    $2_1: null,
    $X_1: null,
    
    get_folder: function SP_Publishing_PublishingPageInformation$get_folder$in() {
        return this.$U_1;
    },
    
    set_folder: function SP_Publishing_PublishingPageInformation$set_folder$in(value) {
        this.$U_1 = value;
        return value;
    },
    
    get_name: function SP_Publishing_PublishingPageInformation$get_name$in() {
        return this.$2_1;
    },
    
    set_name: function SP_Publishing_PublishingPageInformation$set_name$in(value) {
        this.$2_1 = value;
        return value;
    },
    
    get_pageLayoutListItem: function SP_Publishing_PublishingPageInformation$get_pageLayoutListItem$in() {
        return this.$X_1;
    },
    
    set_pageLayoutListItem: function SP_Publishing_PublishingPageInformation$set_pageLayoutListItem$in(value) {
        this.$X_1 = value;
        return value;
    },
    
    get_typeId: function SP_Publishing_PublishingPageInformation$get_typeId$in() {
        return '{68f48886-1e99-4d5a-be5c-f0f0d53f371b}';
    },
    
    writeToXml: function SP_Publishing_PublishingPageInformation$writeToXml$in(writer, serializationContext) {
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
    
    initPropertiesFromJson: function SP_Publishing_PublishingPageInformation$initPropertiesFromJson$in(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.Folder;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            delete parentNode.Folder;
        }
        $v_0 = parentNode.Name;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$2_1 = ($v_0);
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
SP.Publishing.PublishingSite.createPageLayout = function SP_Publishing_PublishingSite$createPageLayout$st(context, parameters) {
    if (!context) {
        throw Error.argumentNull('context');
    }
    var $v_0 = new SP.ClientActionInvokeStaticMethod(context, '{8a896237-0d29-4a38-a399-c8fde4b09d80}', 'CreatePageLayout', [ parameters ]);
    context.addQuery($v_0);
}


SP.Publishing.PublishingWeb = function SP_Publishing_PublishingWeb(context, objectPath) {
    SP.Publishing.PublishingWeb.initializeBase(this, [ context, objectPath ]);
}
SP.Publishing.PublishingWeb.getPublishingWeb = function SP_Publishing_PublishingWeb$getPublishingWeb$st(context, web) {
    if (!context) {
        throw Error.argumentNull('context');
    }
    var $v_0;
    $v_0 = new SP.Publishing.PublishingWeb(context, new SP.ObjectPathStaticMethod(context, '{55927360-235b-4ace-9dcf-c574d6e517ea}', 'GetPublishingWeb', [ web ]));
    return $v_0;
}
SP.Publishing.PublishingWeb.prototype = {
    
    get_web: function SP_Publishing_PublishingWeb$get_web$in() {
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['Web']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.Web(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Web'));
            this.get_objectData().get_clientObjectProperties()['Web'] = $v_0;
        }
        return $v_0;
    },
    
    initPropertiesFromJson: function SP_Publishing_PublishingWeb$initPropertiesFromJson$in(parentNode) {
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.Web;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('Web', this.get_web(), $v_0);
            this.get_web().fromJson($v_0);
            delete parentNode.Web;
        }
    },
    
    addPublishingPage: function SP_Publishing_PublishingWeb$addPublishingPage$in(pageInformation) {
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


SP.Publishing.ScheduledItem = function SP_Publishing_ScheduledItem(context, objectPath) {
    SP.Publishing.ScheduledItem.initializeBase(this, [ context, objectPath ]);
}
SP.Publishing.ScheduledItem.prototype = {
    
    get_endDate: function SP_Publishing_ScheduledItem$get_endDate$in() {
        this.checkUninitializedProperty('EndDate');
        return (this.get_objectData().get_properties()['EndDate']);
    },
    
    set_endDate: function SP_Publishing_ScheduledItem$set_endDate$in(value) {
        this.get_objectData().get_properties()['EndDate'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'EndDate', value));
        }
        return value;
    },
    
    get_listItem: function SP_Publishing_ScheduledItem$get_listItem$in() {
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['ListItem']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.ListItem(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'ListItem'));
            this.get_objectData().get_clientObjectProperties()['ListItem'] = $v_0;
        }
        return $v_0;
    },
    
    get_startDate: function SP_Publishing_ScheduledItem$get_startDate$in() {
        this.checkUninitializedProperty('StartDate');
        return (this.get_objectData().get_properties()['StartDate']);
    },
    
    set_startDate: function SP_Publishing_ScheduledItem$set_startDate$in(value) {
        this.get_objectData().get_properties()['StartDate'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'StartDate', value));
        }
        return value;
    },
    
    initPropertiesFromJson: function SP_Publishing_ScheduledItem$initPropertiesFromJson$in(parentNode) {
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
    
    schedule: function SP_Publishing_ScheduledItem$schedule$in(approvalComment) {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'Schedule', [ approvalComment ]);
        $v_0.addQuery($v_1);
    }
}


SP.Publishing.ScheduledItemPropertyNames = function SP_Publishing_ScheduledItemPropertyNames() {
}


SP.Publishing.ScheduledItemObjectPropertyNames = function SP_Publishing_ScheduledItemObjectPropertyNames() {
}


SP.Publishing.SharePagePreviewByEmailFieldsData = function SP_Publishing_SharePagePreviewByEmailFieldsData() {
    SP.Publishing.SharePagePreviewByEmailFieldsData.initializeBase(this);
}
SP.Publishing.SharePagePreviewByEmailFieldsData.prototype = {
    $1_1: null,
    $Q_1: null,
    
    get_message: function SP_Publishing_SharePagePreviewByEmailFieldsData$get_message$in() {
        return this.$1_1;
    },
    
    set_message: function SP_Publishing_SharePagePreviewByEmailFieldsData$set_message$in(value) {
        this.$1_1 = value;
        return value;
    },
    
    get_recipientEmails: function SP_Publishing_SharePagePreviewByEmailFieldsData$get_recipientEmails$in() {
        return this.$Q_1;
    },
    
    set_recipientEmails: function SP_Publishing_SharePagePreviewByEmailFieldsData$set_recipientEmails$in(value) {
        this.$Q_1 = value;
        return value;
    },
    
    get_typeId: function SP_Publishing_SharePagePreviewByEmailFieldsData$get_typeId$in() {
        return '{848bcecf-dd16-4694-86a5-ac9abb70628d}';
    },
    
    writeToXml: function SP_Publishing_SharePagePreviewByEmailFieldsData$writeToXml$in(writer, serializationContext) {
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
    
    initPropertiesFromJson: function SP_Publishing_SharePagePreviewByEmailFieldsData$initPropertiesFromJson$in(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.message;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1_1 = ($v_0);
            delete parentNode.message;
        }
        $v_0 = parentNode.recipientEmails;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$Q_1 = ((SP.DataConvert.fixupType(null, $v_0)));
            delete parentNode.recipientEmails;
        }
    }
}


SP.Publishing.SiteImageRenditions = function SP_Publishing_SiteImageRenditions() {
}
SP.Publishing.SiteImageRenditions.getRenditions = function SP_Publishing_SiteImageRenditions$getRenditions$st(context) {
    if (!context) {
        throw Error.argumentNull('context');
    }
    var $v_0;
    var $v_1 = new SP.ClientActionInvokeStaticMethod(context, '{324675a4-aa0d-47db-a937-c2e5dc53457e}', 'GetRenditions', null);
    context.addQuery($v_1);
    $v_0 = (([]));
    context.addQueryIdAndResultObject($v_1.get_id(), $v_0);
    return $v_0;
}
SP.Publishing.SiteImageRenditions.setRenditions = function SP_Publishing_SiteImageRenditions$setRenditions$st(context, renditions) {
    if (!context) {
        throw Error.argumentNull('context');
    }
    var $v_0 = new SP.ClientActionInvokeStaticMethod(context, '{324675a4-aa0d-47db-a937-c2e5dc53457e}', 'SetRenditions', [ renditions ]);
    context.addQuery($v_0);
}


SP.Publishing.SitePageFieldsData = function SP_Publishing_SitePageFieldsData() {
    SP.Publishing.SitePageFieldsData.initializeBase(this);
}
SP.Publishing.SitePageFieldsData.prototype = {
    $6_1: null,
    $7_1: null,
    $8_1: null,
    $H_1: null,
    $L_1: null,
    $R_1: null,
    
    get_bannerImageUrl: function SP_Publishing_SitePageFieldsData$get_bannerImageUrl$in() {
        return this.$6_1;
    },
    
    set_bannerImageUrl: function SP_Publishing_SitePageFieldsData$set_bannerImageUrl$in(value) {
        this.$6_1 = value;
        return value;
    },
    
    get_canvasContent1: function SP_Publishing_SitePageFieldsData$get_canvasContent1$in() {
        return this.$7_1;
    },
    
    set_canvasContent1: function SP_Publishing_SitePageFieldsData$set_canvasContent1$in(value) {
        this.$7_1 = value;
        return value;
    },
    
    get_canvasJson1: function SP_Publishing_SitePageFieldsData$get_canvasJson1$in() {
        return this.$8_1;
    },
    
    set_canvasJson1: function SP_Publishing_SitePageFieldsData$set_canvasJson1$in(value) {
        this.$8_1 = value;
        return value;
    },
    
    get_layoutWebpartsContent: function SP_Publishing_SitePageFieldsData$get_layoutWebpartsContent$in() {
        return this.$H_1;
    },
    
    set_layoutWebpartsContent: function SP_Publishing_SitePageFieldsData$set_layoutWebpartsContent$in(value) {
        this.$H_1 = value;
        return value;
    },
    
    get_modified: function SP_Publishing_SitePageFieldsData$get_modified$in() {
        return this.$L_1;
    },
    
    set_modified: function SP_Publishing_SitePageFieldsData$set_modified$in(value) {
        this.$L_1 = value;
        return value;
    },
    
    get_title: function SP_Publishing_SitePageFieldsData$get_title$in() {
        return this.$R_1;
    },
    
    set_title: function SP_Publishing_SitePageFieldsData$set_title$in(value) {
        this.$R_1 = value;
        return value;
    },
    
    get_typeId: function SP_Publishing_SitePageFieldsData$get_typeId$in() {
        return '{1cd13100-0afe-4014-be26-fdcb2b10eba5}';
    },
    
    writeToXml: function SP_Publishing_SitePageFieldsData$writeToXml$in(writer, serializationContext) {
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = [ 'BannerImageUrl', 'CanvasContent1', 'CanvasJson1', 'LayoutWebpartsContent', 'Modified', 'Title' ];
        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    
    initPropertiesFromJson: function SP_Publishing_SitePageFieldsData$initPropertiesFromJson$in(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.BannerImageUrl;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$6_1 = ($v_0);
            delete parentNode.BannerImageUrl;
        }
        $v_0 = parentNode.CanvasContent1;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$7_1 = ($v_0);
            delete parentNode.CanvasContent1;
        }
        $v_0 = parentNode.CanvasJson1;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$8_1 = ($v_0);
            delete parentNode.CanvasJson1;
        }
        $v_0 = parentNode.LayoutWebpartsContent;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$H_1 = ($v_0);
            delete parentNode.LayoutWebpartsContent;
        }
        $v_0 = parentNode.Modified;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$L_1 = ($v_0);
            delete parentNode.Modified;
        }
        $v_0 = parentNode.Title;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$R_1 = ($v_0);
            delete parentNode.Title;
        }
    }
}


SP.Publishing.SitePageVersionInfo = function SP_Publishing_SitePageVersionInfo() {
    SP.Publishing.SitePageVersionInfo.initializeBase(this);
}
SP.Publishing.SitePageVersionInfo.prototype = {
    $F_1: null,
    $G_1: null,
    
    get_lastVersionCreated: function SP_Publishing_SitePageVersionInfo$get_lastVersionCreated$in() {
        return this.$F_1;
    },
    
    set_lastVersionCreated: function SP_Publishing_SitePageVersionInfo$set_lastVersionCreated$in(value) {
        this.$F_1 = value;
        return value;
    },
    
    get_lastVersionCreatedBy: function SP_Publishing_SitePageVersionInfo$get_lastVersionCreatedBy$in() {
        return this.$G_1;
    },
    
    set_lastVersionCreatedBy: function SP_Publishing_SitePageVersionInfo$set_lastVersionCreatedBy$in(value) {
        this.$G_1 = value;
        return value;
    },
    
    get_typeId: function SP_Publishing_SitePageVersionInfo$get_typeId$in() {
        return '{a76110e2-0be3-4472-950b-f45d7efab716}';
    },
    
    writeToXml: function SP_Publishing_SitePageVersionInfo$writeToXml$in(writer, serializationContext) {
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
    
    initPropertiesFromJson: function SP_Publishing_SitePageVersionInfo$initPropertiesFromJson$in(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.LastVersionCreated;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$F_1 = ($v_0);
            delete parentNode.LastVersionCreated;
        }
        $v_0 = parentNode.LastVersionCreatedBy;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$G_1 = ($v_0);
            delete parentNode.LastVersionCreatedBy;
        }
    }
}


SP.Publishing.SiteServicesAddins = function SP_Publishing_SiteServicesAddins() {
}
SP.Publishing.SiteServicesAddins.getSettings = function SP_Publishing_SiteServicesAddins$getSettings$st(context, addinId) {
    if (!context) {
        throw Error.argumentNull('context');
    }
    var $v_0;
    $v_0 = new SP.Publishing.AddinSettings(context, new SP.ObjectPathStaticMethod(context, '{31738358-baad-400c-9678-b5528c432ab5}', 'GetSettings', [ addinId ]));
    return $v_0;
}
SP.Publishing.SiteServicesAddins.setSettings = function SP_Publishing_SiteServicesAddins$setSettings$st(context, addin) {
    if (!context) {
        throw Error.argumentNull('context');
    }
    var $v_0 = new SP.ClientActionInvokeStaticMethod(context, '{31738358-baad-400c-9678-b5528c432ab5}', 'SetSettings', [ addin ]);
    context.addQuery($v_0);
}
SP.Publishing.SiteServicesAddins.deleteSettings = function SP_Publishing_SiteServicesAddins$deleteSettings$st(context, addinId) {
    if (!context) {
        throw Error.argumentNull('context');
    }
    var $v_0 = new SP.ClientActionInvokeStaticMethod(context, '{31738358-baad-400c-9678-b5528c432ab5}', 'DeleteSettings', [ addinId ]);
    context.addQuery($v_0);
}
SP.Publishing.SiteServicesAddins.getPlugin = function SP_Publishing_SiteServicesAddins$getPlugin$st(context, pluginName) {
    if (!context) {
        throw Error.argumentNull('context');
    }
    var $v_0;
    $v_0 = new SP.Publishing.AddinPlugin(context, new SP.ObjectPathStaticMethod(context, '{31738358-baad-400c-9678-b5528c432ab5}', 'GetPlugin', [ pluginName ]));
    return $v_0;
}
SP.Publishing.SiteServicesAddins.setPlugin = function SP_Publishing_SiteServicesAddins$setPlugin$st(context, plugin) {
    if (!context) {
        throw Error.argumentNull('context');
    }
    var $v_0 = new SP.ClientActionInvokeStaticMethod(context, '{31738358-baad-400c-9678-b5528c432ab5}', 'SetPlugin', [ plugin ]);
    context.addQuery($v_0);
}
SP.Publishing.SiteServicesAddins.deletePlugin = function SP_Publishing_SiteServicesAddins$deletePlugin$st(context, pluginName) {
    if (!context) {
        throw Error.argumentNull('context');
    }
    var $v_0 = new SP.ClientActionInvokeStaticMethod(context, '{31738358-baad-400c-9678-b5528c432ab5}', 'DeletePlugin', [ pluginName ]);
    context.addQuery($v_0);
}


SP.Publishing.SiteSharingEmailContext = function SP_Publishing_SiteSharingEmailContext() {
    SP.Publishing.SiteSharingEmailContext.initializeBase(this);
}
SP.Publishing.SiteSharingEmailContext.prototype = {
    $B_1: null,
    $C_1: null,
    $1_1: null,
    $S_1: null,
    
    get_customDescription: function SP_Publishing_SiteSharingEmailContext$get_customDescription$in() {
        return this.$B_1;
    },
    
    set_customDescription: function SP_Publishing_SiteSharingEmailContext$set_customDescription$in(value) {
        this.$B_1 = value;
        return value;
    },
    
    get_customTitle: function SP_Publishing_SiteSharingEmailContext$get_customTitle$in() {
        return this.$C_1;
    },
    
    set_customTitle: function SP_Publishing_SiteSharingEmailContext$set_customTitle$in(value) {
        this.$C_1 = value;
        return value;
    },
    
    get_message: function SP_Publishing_SiteSharingEmailContext$get_message$in() {
        return this.$1_1;
    },
    
    set_message: function SP_Publishing_SiteSharingEmailContext$set_message$in(value) {
        this.$1_1 = value;
        return value;
    },
    
    get_url: function SP_Publishing_SiteSharingEmailContext$get_url$in() {
        return this.$S_1;
    },
    
    set_url: function SP_Publishing_SiteSharingEmailContext$set_url$in(value) {
        this.$S_1 = value;
        return value;
    },
    
    get_typeId: function SP_Publishing_SiteSharingEmailContext$get_typeId$in() {
        return '{2d732678-a6ff-42a8-91e0-ee9ff0b3213c}';
    },
    
    writeToXml: function SP_Publishing_SiteSharingEmailContext$writeToXml$in(writer, serializationContext) {
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
    
    initPropertiesFromJson: function SP_Publishing_SiteSharingEmailContext$initPropertiesFromJson$in(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.CustomDescription;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$B_1 = ($v_0);
            delete parentNode.CustomDescription;
        }
        $v_0 = parentNode.CustomTitle;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$C_1 = ($v_0);
            delete parentNode.CustomTitle;
        }
        $v_0 = parentNode.Message;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1_1 = ($v_0);
            delete parentNode.Message;
        }
        $v_0 = parentNode.Url;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$S_1 = ($v_0);
            delete parentNode.Url;
        }
    }
}


SP.Publishing.TextValueWithLanguage = function SP_Publishing_TextValueWithLanguage() {
    SP.Publishing.TextValueWithLanguage.initializeBase(this);
}
SP.Publishing.TextValueWithLanguage.prototype = {
    $A_1: null,
    $0_1: 0,
    $3_1: null,
    
    get_colorSeed: function SP_Publishing_TextValueWithLanguage$get_colorSeed$in() {
        return this.$A_1;
    },
    
    set_colorSeed: function SP_Publishing_TextValueWithLanguage$set_colorSeed$in(value) {
        this.$A_1 = value;
        return value;
    },
    
    get_lcid: function SP_Publishing_TextValueWithLanguage$get_lcid$in() {
        return this.$0_1;
    },
    
    set_lcid: function SP_Publishing_TextValueWithLanguage$set_lcid$in(value) {
        this.$0_1 = value;
        return value;
    },
    
    get_text: function SP_Publishing_TextValueWithLanguage$get_text$in() {
        return this.$3_1;
    },
    
    set_text: function SP_Publishing_TextValueWithLanguage$set_text$in(value) {
        this.$3_1 = value;
        return value;
    },
    
    get_typeId: function SP_Publishing_TextValueWithLanguage$get_typeId$in() {
        return '{545721cc-4296-4516-9050-7a718496b415}';
    },
    
    writeToXml: function SP_Publishing_TextValueWithLanguage$writeToXml$in(writer, serializationContext) {
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
    
    initPropertiesFromJson: function SP_Publishing_TextValueWithLanguage$initPropertiesFromJson$in(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.ColorSeed;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$A_1 = ($v_0);
            delete parentNode.ColorSeed;
        }
        $v_0 = parentNode.Lcid;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$0_1 = ($v_0);
            delete parentNode.Lcid;
        }
        $v_0 = parentNode.Text;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$3_1 = ($v_0);
            delete parentNode.Text;
        }
    }
}


SP.Publishing.VariationLabel = function SP_Publishing_VariationLabel(context, objectPath) {
    SP.Publishing.VariationLabel.initializeBase(this, [ context, objectPath ]);
}
SP.Publishing.VariationLabel.prototype = {
    
    get_displayName: function SP_Publishing_VariationLabel$get_displayName$in() {
        this.checkUninitializedProperty('DisplayName');
        return (this.get_objectData().get_properties()['DisplayName']);
    },
    
    get_isSource: function SP_Publishing_VariationLabel$get_isSource$in() {
        this.checkUninitializedProperty('IsSource');
        return (this.get_objectData().get_properties()['IsSource']);
    },
    
    get_language: function SP_Publishing_VariationLabel$get_language$in() {
        this.checkUninitializedProperty('Language');
        return (this.get_objectData().get_properties()['Language']);
    },
    
    get_locale: function SP_Publishing_VariationLabel$get_locale$in() {
        this.checkUninitializedProperty('Locale');
        return (this.get_objectData().get_properties()['Locale']);
    },
    
    get_title: function SP_Publishing_VariationLabel$get_title$in() {
        this.checkUninitializedProperty('Title');
        return (this.get_objectData().get_properties()['Title']);
    },
    
    get_topWebUrl: function SP_Publishing_VariationLabel$get_topWebUrl$in() {
        this.checkUninitializedProperty('TopWebUrl');
        return (this.get_objectData().get_properties()['TopWebUrl']);
    },
    
    initPropertiesFromJson: function SP_Publishing_VariationLabel$initPropertiesFromJson$in(parentNode) {
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
SP.Publishing.Variations.getLabels = function SP_Publishing_Variations$getLabels$st(context) {
    if (!context) {
        throw Error.argumentNull('context');
    }
    var $v_0;
    $v_0 = new SP.ClientObjectList(context, new SP.ObjectPathStaticMethod(context, '{1339cd8a-5dc8-4932-9bb3-32a5bc2c0d48}', 'GetLabels', null), SP.Publishing.VariationLabel);
    return $v_0;
}
SP.Publishing.Variations.getPeerUrl = function SP_Publishing_Variations$getPeerUrl$st(context, currentUrl, labelTitle) {
    if (!context) {
        throw Error.argumentNull('context');
    }
    var $v_0;
    var $v_1 = new SP.ClientActionInvokeStaticMethod(context, '{1339cd8a-5dc8-4932-9bb3-32a5bc2c0d48}', 'GetPeerUrl', [ currentUrl, labelTitle ]);
    context.addQuery($v_1);
    $v_0 = new SP.StringResult();
    context.addQueryIdAndResultObject($v_1.get_id(), $v_0);
    return $v_0;
}
SP.Publishing.Variations.updateListItems = function SP_Publishing_Variations$updateListItems$st(context, listId, itemIds) {
    if (!context) {
        throw Error.argumentNull('context');
    }
    var $v_0 = new SP.ClientActionInvokeStaticMethod(context, '{1339cd8a-5dc8-4932-9bb3-32a5bc2c0d48}', 'UpdateListItems', [ listId, itemIds ]);
    context.addQuery($v_0);
}


Type.registerNamespace('SP.Publishing.Navigation');

SP.Publishing.Navigation.NavigationLinkType = function() {}
SP.Publishing.Navigation.NavigationLinkType.prototype = {
    root: 0, 
    friendlyUrl: 1, 
    simpleLink: 2
}
SP.Publishing.Navigation.NavigationLinkType.registerEnum('SP.Publishing.Navigation.NavigationLinkType', false);


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
    
    $a_2: function SP_Publishing_Navigation_NavigationTermProviderNameCollection$$a_2$in($p0) {
        Array.add(this.get_data(), $p0);
    },
    
    $b_2: function SP_Publishing_Navigation_NavigationTermProviderNameCollection$$b_2$in() {
        var $v_0 = this.get_data();
        while ($v_0.length > 0) {
            Array.removeAt($v_0, $v_0.length - 1);
        }
    },
    
    $c_2: function SP_Publishing_Navigation_NavigationTermProviderNameCollection$$c_2$in($p0) {
        Array.remove(this.get_data(), $p0);
    },
    
    itemAt: function SP_Publishing_Navigation_NavigationTermProviderNameCollection$itemAt$in(index) {
        return this.getItemAtIndex(index);
    },
    
    get_item: function SP_Publishing_Navigation_NavigationTermProviderNameCollection$get_item$in(index) {
        return this.getItemAtIndex(index);
    },
    
    get_childItemType: function SP_Publishing_Navigation_NavigationTermProviderNameCollection$get_childItemType$in() {
        return String;
    },
    
    add: function SP_Publishing_Navigation_NavigationTermProviderNameCollection$add$in(item) {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'Add', [ item ]);
        $v_0.addQuery($v_1);
        this.$a_2(item);
    },
    
    clear: function SP_Publishing_Navigation_NavigationTermProviderNameCollection$clear$in() {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'Clear', null);
        $v_0.addQuery($v_1);
        this.$b_2();
    },
    
    remove: function SP_Publishing_Navigation_NavigationTermProviderNameCollection$remove$in(item) {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'Remove', [ item ]);
        $v_0.addQuery($v_2);
        $v_1 = new SP.BooleanResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        this.$c_2(item);
        return $v_1;
    }
}


SP.Publishing.Navigation.NavigationTerm = function SP_Publishing_Navigation_NavigationTerm(context, objectPath) {
    SP.Publishing.Navigation.NavigationTerm.initializeBase(this, [ context, objectPath ]);
}
SP.Publishing.Navigation.NavigationTerm.getAsResolvedByWeb = function SP_Publishing_Navigation_NavigationTerm$getAsResolvedByWeb$st(context, term, web, siteMapProviderName) {
    if (!context) {
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
SP.Publishing.Navigation.NavigationTerm.getAsResolvedByView = function SP_Publishing_Navigation_NavigationTerm$getAsResolvedByView$st(context, term, view) {
    if (!context) {
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
    
    get_associatedFolderUrl: function SP_Publishing_Navigation_NavigationTerm$get_associatedFolderUrl$in() {
        this.checkUninitializedProperty('AssociatedFolderUrl');
        return (this.get_objectData().get_properties()['AssociatedFolderUrl']);
    },
    
    set_associatedFolderUrl: function SP_Publishing_Navigation_NavigationTerm$set_associatedFolderUrl$in(value) {
        this.get_objectData().get_properties()['AssociatedFolderUrl'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'AssociatedFolderUrl', value));
        }
        return value;
    },
    
    get_catalogTargetUrl: function SP_Publishing_Navigation_NavigationTerm$get_catalogTargetUrl$in() {
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['CatalogTargetUrl']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.Publishing.CustomizableString(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'CatalogTargetUrl'));
            this.get_objectData().get_clientObjectProperties()['CatalogTargetUrl'] = $v_0;
        }
        return $v_0;
    },
    
    get_categoryImageUrl: function SP_Publishing_Navigation_NavigationTerm$get_categoryImageUrl$in() {
        this.checkUninitializedProperty('CategoryImageUrl');
        return (this.get_objectData().get_properties()['CategoryImageUrl']);
    },
    
    set_categoryImageUrl: function SP_Publishing_Navigation_NavigationTerm$set_categoryImageUrl$in(value) {
        this.get_objectData().get_properties()['CategoryImageUrl'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'CategoryImageUrl', value));
        }
        return value;
    },
    
    get_excludedProviders: function SP_Publishing_Navigation_NavigationTerm$get_excludedProviders$in() {
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['ExcludedProviders']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.Publishing.Navigation.NavigationTermProviderNameCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'ExcludedProviders'));
            this.get_objectData().get_clientObjectProperties()['ExcludedProviders'] = $v_0;
        }
        return $v_0;
    },
    
    get_excludeFromCurrentNavigation: function SP_Publishing_Navigation_NavigationTerm$get_excludeFromCurrentNavigation$in() {
        this.checkUninitializedProperty('ExcludeFromCurrentNavigation');
        return (this.get_objectData().get_properties()['ExcludeFromCurrentNavigation']);
    },
    
    set_excludeFromCurrentNavigation: function SP_Publishing_Navigation_NavigationTerm$set_excludeFromCurrentNavigation$in(value) {
        this.get_objectData().get_properties()['ExcludeFromCurrentNavigation'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'ExcludeFromCurrentNavigation', value));
        }
        return value;
    },
    
    get_excludeFromGlobalNavigation: function SP_Publishing_Navigation_NavigationTerm$get_excludeFromGlobalNavigation$in() {
        this.checkUninitializedProperty('ExcludeFromGlobalNavigation');
        return (this.get_objectData().get_properties()['ExcludeFromGlobalNavigation']);
    },
    
    set_excludeFromGlobalNavigation: function SP_Publishing_Navigation_NavigationTerm$set_excludeFromGlobalNavigation$in(value) {
        this.get_objectData().get_properties()['ExcludeFromGlobalNavigation'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'ExcludeFromGlobalNavigation', value));
        }
        return value;
    },
    
    get_friendlyUrlSegment: function SP_Publishing_Navigation_NavigationTerm$get_friendlyUrlSegment$in() {
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['FriendlyUrlSegment']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.Publishing.CustomizableString(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'FriendlyUrlSegment'));
            this.get_objectData().get_clientObjectProperties()['FriendlyUrlSegment'] = $v_0;
        }
        return $v_0;
    },
    
    get_hoverText: function SP_Publishing_Navigation_NavigationTerm$get_hoverText$in() {
        this.checkUninitializedProperty('HoverText');
        return (this.get_objectData().get_properties()['HoverText']);
    },
    
    set_hoverText: function SP_Publishing_Navigation_NavigationTerm$set_hoverText$in(value) {
        this.get_objectData().get_properties()['HoverText'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'HoverText', value));
        }
        return value;
    },
    
    get_isDeprecated: function SP_Publishing_Navigation_NavigationTerm$get_isDeprecated$in() {
        this.checkUninitializedProperty('IsDeprecated');
        return (this.get_objectData().get_properties()['IsDeprecated']);
    },
    
    get_isPinned: function SP_Publishing_Navigation_NavigationTerm$get_isPinned$in() {
        this.checkUninitializedProperty('IsPinned');
        return (this.get_objectData().get_properties()['IsPinned']);
    },
    
    get_isPinnedRoot: function SP_Publishing_Navigation_NavigationTerm$get_isPinnedRoot$in() {
        this.checkUninitializedProperty('IsPinnedRoot');
        return (this.get_objectData().get_properties()['IsPinnedRoot']);
    },
    
    get_parent: function SP_Publishing_Navigation_NavigationTerm$get_parent$in() {
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['Parent']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.Publishing.Navigation.NavigationTerm(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Parent'));
            this.get_objectData().get_clientObjectProperties()['Parent'] = $v_0;
        }
        return $v_0;
    },
    
    get_simpleLinkUrl: function SP_Publishing_Navigation_NavigationTerm$get_simpleLinkUrl$in() {
        this.checkUninitializedProperty('SimpleLinkUrl');
        return (this.get_objectData().get_properties()['SimpleLinkUrl']);
    },
    
    set_simpleLinkUrl: function SP_Publishing_Navigation_NavigationTerm$set_simpleLinkUrl$in(value) {
        this.get_objectData().get_properties()['SimpleLinkUrl'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'SimpleLinkUrl', value));
        }
        return value;
    },
    
    get_targetUrl: function SP_Publishing_Navigation_NavigationTerm$get_targetUrl$in() {
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['TargetUrl']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.Publishing.CustomizableString(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'TargetUrl'));
            this.get_objectData().get_clientObjectProperties()['TargetUrl'] = $v_0;
        }
        return $v_0;
    },
    
    get_termSet: function SP_Publishing_Navigation_NavigationTerm$get_termSet$in() {
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['TermSet']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.Publishing.Navigation.NavigationTermSet(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'TermSet'));
            this.get_objectData().get_clientObjectProperties()['TermSet'] = $v_0;
        }
        return $v_0;
    },
    
    initPropertiesFromJson: function SP_Publishing_Navigation_NavigationTerm$initPropertiesFromJson$in(parentNode) {
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
        $v_0 = parentNode.TargetUrl;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('TargetUrl', this.get_targetUrl(), $v_0);
            this.get_targetUrl().fromJson($v_0);
            delete parentNode.TargetUrl;
        }
        $v_0 = parentNode.TermSet;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('TermSet', this.get_termSet(), $v_0);
            this.get_termSet().fromJson($v_0);
            delete parentNode.TermSet;
        }
    },
    
    getAsEditable: function SP_Publishing_Navigation_NavigationTerm$getAsEditable$in(taxonomySession) {
        var $v_0 = this.get_context();
        var $v_1;
        $v_1 = new SP.Publishing.Navigation.NavigationTerm($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetAsEditable', [ taxonomySession ]));
        $v_1.get_path().setPendingReplace();
        var $v_2 = new SP.ObjectIdentityQuery($v_1.get_path());
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        $v_0.addQuery($v_2);
        return $v_1;
    },
    
    getWithNewView: function SP_Publishing_Navigation_NavigationTerm$getWithNewView$in(newView) {
        var $v_0 = this.get_context();
        var $v_1;
        $v_1 = new SP.Publishing.Navigation.NavigationTerm($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetWithNewView', [ newView ]));
        $v_1.get_path().setPendingReplace();
        var $v_2 = new SP.ObjectIdentityQuery($v_1.get_path());
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        $v_0.addQuery($v_2);
        return $v_1;
    },
    
    getResolvedTargetUrl: function SP_Publishing_Navigation_NavigationTerm$getResolvedTargetUrl$in(browserQueryString, remainingUrlSegments) {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'GetResolvedTargetUrl', [ browserQueryString, remainingUrlSegments ]);
        $v_0.addQuery($v_2);
        $v_1 = new SP.StringResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    },
    
    getResolvedTargetUrlWithoutQuery: function SP_Publishing_Navigation_NavigationTerm$getResolvedTargetUrlWithoutQuery$in() {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'GetResolvedTargetUrlWithoutQuery', null);
        $v_0.addQuery($v_2);
        $v_1 = new SP.StringResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    },
    
    getResolvedAssociatedFolderUrl: function SP_Publishing_Navigation_NavigationTerm$getResolvedAssociatedFolderUrl$in() {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'GetResolvedAssociatedFolderUrl', null);
        $v_0.addQuery($v_2);
        $v_1 = new SP.StringResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    },
    
    getWebRelativeFriendlyUrl: function SP_Publishing_Navigation_NavigationTerm$getWebRelativeFriendlyUrl$in() {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'GetWebRelativeFriendlyUrl', null);
        $v_0.addQuery($v_2);
        $v_1 = new SP.StringResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    },
    
    getAllParentTerms: function SP_Publishing_Navigation_NavigationTerm$getAllParentTerms$in() {
        var $v_0 = this.get_context();
        var $v_1;
        $v_1 = new SP.Publishing.Navigation.NavigationTermCollection($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetAllParentTerms', null));
        return $v_1;
    },
    
    getTaxonomyTerm: function SP_Publishing_Navigation_NavigationTerm$getTaxonomyTerm$in() {
        var $v_0 = this.get_context();
        var $v_1;
        $v_1 = new SP.Taxonomy.Term($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetTaxonomyTerm', null));
        $v_1.get_path().setPendingReplace();
        var $v_2 = new SP.ObjectIdentityQuery($v_1.get_path());
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        $v_0.addQuery($v_2);
        return $v_1;
    },
    
    move: function SP_Publishing_Navigation_NavigationTerm$move$in(newParent) {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'Move', [ newParent ]);
        $v_0.addQuery($v_1);
    },
    
    deleteObject: function SP_Publishing_Navigation_NavigationTerm$deleteObject$in() {
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
    
    itemAt: function SP_Publishing_Navigation_NavigationTermCollection$itemAt$in(index) {
        return this.getItemAtIndex(index);
    },
    
    get_item: function SP_Publishing_Navigation_NavigationTermCollection$get_item$in(index) {
        return this.getItemAtIndex(index);
    },
    
    get_childItemType: function SP_Publishing_Navigation_NavigationTermCollection$get_childItemType$in() {
        return SP.Publishing.Navigation.NavigationTerm;
    }
}


SP.Publishing.Navigation.NavigationTermSet = function SP_Publishing_Navigation_NavigationTermSet(context, objectPath) {
    SP.Publishing.Navigation.NavigationTermSet.initializeBase(this, [ context, objectPath ]);
}
SP.Publishing.Navigation.NavigationTermSet.getAsResolvedByWeb = function SP_Publishing_Navigation_NavigationTermSet$getAsResolvedByWeb$st(context, termSet, web, siteMapProviderName) {
    if (!context) {
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
SP.Publishing.Navigation.NavigationTermSet.getAsResolvedByView = function SP_Publishing_Navigation_NavigationTermSet$getAsResolvedByView$st(context, termSet, view) {
    if (!context) {
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
    
    get_isNavigationTermSet: function SP_Publishing_Navigation_NavigationTermSet$get_isNavigationTermSet$in() {
        this.checkUninitializedProperty('IsNavigationTermSet');
        return (this.get_objectData().get_properties()['IsNavigationTermSet']);
    },
    
    set_isNavigationTermSet: function SP_Publishing_Navigation_NavigationTermSet$set_isNavigationTermSet$in(value) {
        this.get_objectData().get_properties()['IsNavigationTermSet'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'IsNavigationTermSet', value));
        }
        return value;
    },
    
    get_lcid: function SP_Publishing_Navigation_NavigationTermSet$get_lcid$in() {
        this.checkUninitializedProperty('Lcid');
        return (this.get_objectData().get_properties()['Lcid']);
    },
    
    get_loadedFromPersistedData: function SP_Publishing_Navigation_NavigationTermSet$get_loadedFromPersistedData$in() {
        this.checkUninitializedProperty('LoadedFromPersistedData');
        return (this.get_objectData().get_properties()['LoadedFromPersistedData']);
    },
    
    get_termGroupId: function SP_Publishing_Navigation_NavigationTermSet$get_termGroupId$in() {
        this.checkUninitializedProperty('TermGroupId');
        return (this.get_objectData().get_properties()['TermGroupId']);
    },
    
    get_termStoreId: function SP_Publishing_Navigation_NavigationTermSet$get_termStoreId$in() {
        this.checkUninitializedProperty('TermStoreId');
        return (this.get_objectData().get_properties()['TermStoreId']);
    },
    
    initPropertiesFromJson: function SP_Publishing_Navigation_NavigationTermSet$initPropertiesFromJson$in(parentNode) {
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
    
    getAsEditable: function SP_Publishing_Navigation_NavigationTermSet$getAsEditable$in(taxonomySession) {
        var $v_0 = this.get_context();
        var $v_1;
        $v_1 = new SP.Publishing.Navigation.NavigationTermSet($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetAsEditable', [ taxonomySession ]));
        $v_1.get_path().setPendingReplace();
        var $v_2 = new SP.ObjectIdentityQuery($v_1.get_path());
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        $v_0.addQuery($v_2);
        return $v_1;
    },
    
    getWithNewView: function SP_Publishing_Navigation_NavigationTermSet$getWithNewView$in(newView) {
        var $v_0 = this.get_context();
        var $v_1;
        $v_1 = new SP.Publishing.Navigation.NavigationTermSet($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetWithNewView', [ newView ]));
        $v_1.get_path().setPendingReplace();
        var $v_2 = new SP.ObjectIdentityQuery($v_1.get_path());
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        $v_0.addQuery($v_2);
        return $v_1;
    },
    
    getTaxonomyTermSet: function SP_Publishing_Navigation_NavigationTermSet$getTaxonomyTermSet$in() {
        var $v_0 = this.get_context();
        var $v_1;
        $v_1 = new SP.Taxonomy.TermSet($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetTaxonomyTermSet', null));
        $v_1.get_path().setPendingReplace();
        var $v_2 = new SP.ObjectIdentityQuery($v_1.get_path());
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        $v_0.addQuery($v_2);
        return $v_1;
    },
    
    getAllTerms: function SP_Publishing_Navigation_NavigationTermSet$getAllTerms$in() {
        var $v_0 = this.get_context();
        var $v_1;
        $v_1 = new SP.Publishing.Navigation.NavigationTermCollection($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetAllTerms', null));
        return $v_1;
    },
    
    findTermForUrl: function SP_Publishing_Navigation_NavigationTermSet$findTermForUrl$in(url) {
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
    
    get_catalogTargetUrlForChildTerms: function SP_Publishing_Navigation_NavigationTermSetItem$get_catalogTargetUrlForChildTerms$in() {
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['CatalogTargetUrlForChildTerms']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.Publishing.CustomizableString(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'CatalogTargetUrlForChildTerms'));
            this.get_objectData().get_clientObjectProperties()['CatalogTargetUrlForChildTerms'] = $v_0;
        }
        return $v_0;
    },
    
    get_id: function SP_Publishing_Navigation_NavigationTermSetItem$get_id$in() {
        this.checkUninitializedProperty('Id');
        return (this.get_objectData().get_properties()['Id']);
    },
    
    get_isReadOnly: function SP_Publishing_Navigation_NavigationTermSetItem$get_isReadOnly$in() {
        this.checkUninitializedProperty('IsReadOnly');
        return (this.get_objectData().get_properties()['IsReadOnly']);
    },
    
    get_linkType: function SP_Publishing_Navigation_NavigationTermSetItem$get_linkType$in() {
        this.checkUninitializedProperty('LinkType');
        return (this.get_objectData().get_properties()['LinkType']);
    },
    
    set_linkType: function SP_Publishing_Navigation_NavigationTermSetItem$set_linkType$in(value) {
        this.get_objectData().get_properties()['LinkType'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'LinkType', value));
        }
        return value;
    },
    
    get_targetUrlForChildTerms: function SP_Publishing_Navigation_NavigationTermSetItem$get_targetUrlForChildTerms$in() {
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['TargetUrlForChildTerms']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.Publishing.CustomizableString(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'TargetUrlForChildTerms'));
            this.get_objectData().get_clientObjectProperties()['TargetUrlForChildTerms'] = $v_0;
        }
        return $v_0;
    },
    
    get_taxonomyName: function SP_Publishing_Navigation_NavigationTermSetItem$get_taxonomyName$in() {
        this.checkUninitializedProperty('TaxonomyName');
        return (this.get_objectData().get_properties()['TaxonomyName']);
    },
    
    get_terms: function SP_Publishing_Navigation_NavigationTermSetItem$get_terms$in() {
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['Terms']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.Publishing.Navigation.NavigationTermCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Terms'));
            this.get_objectData().get_clientObjectProperties()['Terms'] = $v_0;
        }
        return $v_0;
    },
    
    get_title: function SP_Publishing_Navigation_NavigationTermSetItem$get_title$in() {
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['Title']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.Publishing.CustomizableString(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Title'));
            this.get_objectData().get_clientObjectProperties()['Title'] = $v_0;
        }
        return $v_0;
    },
    
    get_view: function SP_Publishing_Navigation_NavigationTermSetItem$get_view$in() {
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['View']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.Publishing.Navigation.NavigationTermSetView(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'View'));
            this.get_objectData().get_clientObjectProperties()['View'] = $v_0;
        }
        return $v_0;
    },
    
    initPropertiesFromJson: function SP_Publishing_Navigation_NavigationTermSetItem$initPropertiesFromJson$in(parentNode) {
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
    
    getResolvedDisplayUrl: function SP_Publishing_Navigation_NavigationTermSetItem$getResolvedDisplayUrl$in(browserQueryString) {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'GetResolvedDisplayUrl', [ browserQueryString ]);
        $v_0.addQuery($v_2);
        $v_1 = new SP.StringResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    },
    
    getTaxonomyTermStore: function SP_Publishing_Navigation_NavigationTermSetItem$getTaxonomyTermStore$in() {
        var $v_0 = this.get_context();
        var $v_1;
        $v_1 = new SP.Taxonomy.TermStore($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'GetTaxonomyTermStore', null));
        $v_1.get_path().setPendingReplace();
        var $v_2 = new SP.ObjectIdentityQuery($v_1.get_path());
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        $v_0.addQuery($v_2);
        return $v_1;
    },
    
    createTerm: function SP_Publishing_Navigation_NavigationTermSetItem$createTerm$in(termName, linkType, termId) {
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
SP.Publishing.Navigation.NavigationTermSetView.newObject = function SP_Publishing_Navigation_NavigationTermSetView$newObject$st(context, web, siteMapProviderName) {
    return new SP.Publishing.Navigation.NavigationTermSetView(context, new SP.ObjectPathConstructor(context, '{097234e9-47da-431f-bd12-173c296b187b}', [ web, siteMapProviderName ]));
}
SP.Publishing.Navigation.NavigationTermSetView.createEmptyInstance = function SP_Publishing_Navigation_NavigationTermSetView$createEmptyInstance$st(context) {
    if (!context) {
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
    
    get_excludeDeprecatedTerms: function SP_Publishing_Navigation_NavigationTermSetView$get_excludeDeprecatedTerms$in() {
        this.checkUninitializedProperty('ExcludeDeprecatedTerms');
        return (this.get_objectData().get_properties()['ExcludeDeprecatedTerms']);
    },
    
    set_excludeDeprecatedTerms: function SP_Publishing_Navigation_NavigationTermSetView$set_excludeDeprecatedTerms$in(value) {
        this.get_objectData().get_properties()['ExcludeDeprecatedTerms'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'ExcludeDeprecatedTerms', value));
        }
        if (!this.get_context()) {
            var $v_0 = new SP.ObjectIdentityQuery(this.get_path());
            this.get_context().addQueryIdAndResultObject($v_0.get_id(), this);
            this.get_context().addQuery($v_0);
        }
        return value;
    },
    
    get_excludeTermsByPermissions: function SP_Publishing_Navigation_NavigationTermSetView$get_excludeTermsByPermissions$in() {
        this.checkUninitializedProperty('ExcludeTermsByPermissions');
        return (this.get_objectData().get_properties()['ExcludeTermsByPermissions']);
    },
    
    set_excludeTermsByPermissions: function SP_Publishing_Navigation_NavigationTermSetView$set_excludeTermsByPermissions$in(value) {
        this.get_objectData().get_properties()['ExcludeTermsByPermissions'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'ExcludeTermsByPermissions', value));
        }
        if (!this.get_context()) {
            var $v_0 = new SP.ObjectIdentityQuery(this.get_path());
            this.get_context().addQueryIdAndResultObject($v_0.get_id(), this);
            this.get_context().addQuery($v_0);
        }
        return value;
    },
    
    get_excludeTermsByProvider: function SP_Publishing_Navigation_NavigationTermSetView$get_excludeTermsByProvider$in() {
        this.checkUninitializedProperty('ExcludeTermsByProvider');
        return (this.get_objectData().get_properties()['ExcludeTermsByProvider']);
    },
    
    set_excludeTermsByProvider: function SP_Publishing_Navigation_NavigationTermSetView$set_excludeTermsByProvider$in(value) {
        this.get_objectData().get_properties()['ExcludeTermsByProvider'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'ExcludeTermsByProvider', value));
        }
        if (!this.get_context()) {
            var $v_0 = new SP.ObjectIdentityQuery(this.get_path());
            this.get_context().addQueryIdAndResultObject($v_0.get_id(), this);
            this.get_context().addQuery($v_0);
        }
        return value;
    },
    
    get_serverRelativeSiteUrl: function SP_Publishing_Navigation_NavigationTermSetView$get_serverRelativeSiteUrl$in() {
        this.checkUninitializedProperty('ServerRelativeSiteUrl');
        return (this.get_objectData().get_properties()['ServerRelativeSiteUrl']);
    },
    
    get_serverRelativeWebUrl: function SP_Publishing_Navigation_NavigationTermSetView$get_serverRelativeWebUrl$in() {
        this.checkUninitializedProperty('ServerRelativeWebUrl');
        return (this.get_objectData().get_properties()['ServerRelativeWebUrl']);
    },
    
    get_siteMapProviderName: function SP_Publishing_Navigation_NavigationTermSetView$get_siteMapProviderName$in() {
        this.checkUninitializedProperty('SiteMapProviderName');
        return (this.get_objectData().get_properties()['SiteMapProviderName']);
    },
    
    set_siteMapProviderName: function SP_Publishing_Navigation_NavigationTermSetView$set_siteMapProviderName$in(value) {
        this.get_objectData().get_properties()['SiteMapProviderName'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'SiteMapProviderName', value));
        }
        if (!this.get_context()) {
            var $v_0 = new SP.ObjectIdentityQuery(this.get_path());
            this.get_context().addQueryIdAndResultObject($v_0.get_id(), this);
            this.get_context().addQuery($v_0);
        }
        return value;
    },
    
    get_webId: function SP_Publishing_Navigation_NavigationTermSetView$get_webId$in() {
        this.checkUninitializedProperty('WebId');
        return (this.get_objectData().get_properties()['WebId']);
    },
    
    get_webTitle: function SP_Publishing_Navigation_NavigationTermSetView$get_webTitle$in() {
        this.checkUninitializedProperty('WebTitle');
        return (this.get_objectData().get_properties()['WebTitle']);
    },
    
    initPropertiesFromJson: function SP_Publishing_Navigation_NavigationTermSetView$initPropertiesFromJson$in(parentNode) {
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
    
    getCopy: function SP_Publishing_Navigation_NavigationTermSetView$getCopy$in() {
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
    
    get_source: function SP_Publishing_Navigation_StandardNavigationSettings$get_source$in() {
        this.checkUninitializedProperty('Source');
        return (this.get_objectData().get_properties()['Source']);
    },
    
    set_source: function SP_Publishing_Navigation_StandardNavigationSettings$set_source$in(value) {
        this.get_objectData().get_properties()['Source'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Source', value));
        }
        return value;
    },
    
    get_termSetId: function SP_Publishing_Navigation_StandardNavigationSettings$get_termSetId$in() {
        this.checkUninitializedProperty('TermSetId');
        return (this.get_objectData().get_properties()['TermSetId']);
    },
    
    set_termSetId: function SP_Publishing_Navigation_StandardNavigationSettings$set_termSetId$in(value) {
        this.get_objectData().get_properties()['TermSetId'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'TermSetId', value));
        }
        return value;
    },
    
    get_termStoreId: function SP_Publishing_Navigation_StandardNavigationSettings$get_termStoreId$in() {
        this.checkUninitializedProperty('TermStoreId');
        return (this.get_objectData().get_properties()['TermStoreId']);
    },
    
    set_termStoreId: function SP_Publishing_Navigation_StandardNavigationSettings$set_termStoreId$in(value) {
        this.get_objectData().get_properties()['TermStoreId'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'TermStoreId', value));
        }
        return value;
    },
    
    initPropertiesFromJson: function SP_Publishing_Navigation_StandardNavigationSettings$initPropertiesFromJson$in(parentNode) {
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
SP.Publishing.Navigation.TaxonomyNavigation.getWebNavigationSettings = function SP_Publishing_Navigation_TaxonomyNavigation$getWebNavigationSettings$st(context, web) {
    if (!context) {
        throw Error.argumentNull('context');
    }
    var $v_0;
    $v_0 = new SP.Publishing.Navigation.WebNavigationSettings(context, new SP.ObjectPathStaticMethod(context, '{f3724139-55ed-4c05-8576-2c3830831c10}', 'GetWebNavigationSettings', [ web ]));
    return $v_0;
}
SP.Publishing.Navigation.TaxonomyNavigation.getTermSetForWeb = function SP_Publishing_Navigation_TaxonomyNavigation$getTermSetForWeb$st(context, web, siteMapProviderName, includeInheritedSettings) {
    if (!context) {
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
SP.Publishing.Navigation.TaxonomyNavigation.setCrawlAsFriendlyUrlPage = function SP_Publishing_Navigation_TaxonomyNavigation$setCrawlAsFriendlyUrlPage$st(context, navigationTerm, crawlAsFriendlyUrlPage) {
    if (!context) {
        throw Error.argumentNull('context');
    }
    var $v_0;
    var $v_1 = new SP.ClientActionInvokeStaticMethod(context, '{f3724139-55ed-4c05-8576-2c3830831c10}', 'SetCrawlAsFriendlyUrlPage', [ navigationTerm, crawlAsFriendlyUrlPage ]);
    context.addQuery($v_1);
    $v_0 = new SP.BooleanResult();
    context.addQueryIdAndResultObject($v_1.get_id(), $v_0);
    return $v_0;
}
SP.Publishing.Navigation.TaxonomyNavigation.getNavigationLcidForWeb = function SP_Publishing_Navigation_TaxonomyNavigation$getNavigationLcidForWeb$st(context, web) {
    if (!context) {
        throw Error.argumentNull('context');
    }
    var $v_0;
    var $v_1 = new SP.ClientActionInvokeStaticMethod(context, '{f3724139-55ed-4c05-8576-2c3830831c10}', 'GetNavigationLcidForWeb', [ web ]);
    context.addQuery($v_1);
    $v_0 = new SP.IntResult();
    context.addQueryIdAndResultObject($v_1.get_id(), $v_0);
    return $v_0;
}
SP.Publishing.Navigation.TaxonomyNavigation.flushSiteFromCache = function SP_Publishing_Navigation_TaxonomyNavigation$flushSiteFromCache$st(context, site) {
    if (!context) {
        throw Error.argumentNull('context');
    }
    var $v_0 = new SP.ClientActionInvokeStaticMethod(context, '{f3724139-55ed-4c05-8576-2c3830831c10}', 'FlushSiteFromCache', [ site ]);
    context.addQuery($v_0);
}
SP.Publishing.Navigation.TaxonomyNavigation.flushWebFromCache = function SP_Publishing_Navigation_TaxonomyNavigation$flushWebFromCache$st(context, web) {
    if (!context) {
        throw Error.argumentNull('context');
    }
    var $v_0 = new SP.ClientActionInvokeStaticMethod(context, '{f3724139-55ed-4c05-8576-2c3830831c10}', 'FlushWebFromCache', [ web ]);
    context.addQuery($v_0);
}
SP.Publishing.Navigation.TaxonomyNavigation.flushTermSetFromCache = function SP_Publishing_Navigation_TaxonomyNavigation$flushTermSetFromCache$st(context, webForPermissions, termStoreId, termSetId) {
    if (!context) {
        throw Error.argumentNull('context');
    }
    var $v_0 = new SP.ClientActionInvokeStaticMethod(context, '{f3724139-55ed-4c05-8576-2c3830831c10}', 'FlushTermSetFromCache', [ webForPermissions, termStoreId, termSetId ]);
    context.addQuery($v_0);
}


SP.Publishing.Navigation.WebNavigationSettings = function SP_Publishing_Navigation_WebNavigationSettings(context, web) {
    SP.Publishing.Navigation.WebNavigationSettings.initializeBase(this, [ context, SP.ClientUtility.getOrCreateObjectPathForConstructor(context, '{00ac02aa-86e2-4d48-aa73-341ed7962374}', arguments) ]);
}
SP.Publishing.Navigation.WebNavigationSettings.newObject = function SP_Publishing_Navigation_WebNavigationSettings$newObject$st(context, web) {
    return new SP.Publishing.Navigation.WebNavigationSettings(context, new SP.ObjectPathConstructor(context, '{00ac02aa-86e2-4d48-aa73-341ed7962374}', [ web ]));
}
SP.Publishing.Navigation.WebNavigationSettings.prototype = {
    
    get_addNewPagesToNavigation: function SP_Publishing_Navigation_WebNavigationSettings$get_addNewPagesToNavigation$in() {
        this.checkUninitializedProperty('AddNewPagesToNavigation');
        return (this.get_objectData().get_properties()['AddNewPagesToNavigation']);
    },
    
    set_addNewPagesToNavigation: function SP_Publishing_Navigation_WebNavigationSettings$set_addNewPagesToNavigation$in(value) {
        this.get_objectData().get_properties()['AddNewPagesToNavigation'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'AddNewPagesToNavigation', value));
        }
        return value;
    },
    
    get_createFriendlyUrlsForNewPages: function SP_Publishing_Navigation_WebNavigationSettings$get_createFriendlyUrlsForNewPages$in() {
        this.checkUninitializedProperty('CreateFriendlyUrlsForNewPages');
        return (this.get_objectData().get_properties()['CreateFriendlyUrlsForNewPages']);
    },
    
    set_createFriendlyUrlsForNewPages: function SP_Publishing_Navigation_WebNavigationSettings$set_createFriendlyUrlsForNewPages$in(value) {
        this.get_objectData().get_properties()['CreateFriendlyUrlsForNewPages'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'CreateFriendlyUrlsForNewPages', value));
        }
        return value;
    },
    
    get_currentNavigation: function SP_Publishing_Navigation_WebNavigationSettings$get_currentNavigation$in() {
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['CurrentNavigation']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.Publishing.Navigation.StandardNavigationSettings(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'CurrentNavigation'));
            this.get_objectData().get_clientObjectProperties()['CurrentNavigation'] = $v_0;
        }
        return $v_0;
    },
    
    get_globalNavigation: function SP_Publishing_Navigation_WebNavigationSettings$get_globalNavigation$in() {
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['GlobalNavigation']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.Publishing.Navigation.StandardNavigationSettings(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'GlobalNavigation'));
            this.get_objectData().get_clientObjectProperties()['GlobalNavigation'] = $v_0;
        }
        return $v_0;
    },
    
    initPropertiesFromJson: function SP_Publishing_Navigation_WebNavigationSettings$initPropertiesFromJson$in(parentNode) {
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.AddNewPagesToNavigation;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['AddNewPagesToNavigation'] = ($v_0);
            delete parentNode.AddNewPagesToNavigation;
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
    },
    
    update: function SP_Publishing_Navigation_WebNavigationSettings$update$in(taxonomySession) {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'Update', [ taxonomySession ]);
        $v_0.addQuery($v_1);
    },
    
    resetToDefaults: function SP_Publishing_Navigation_WebNavigationSettings$resetToDefaults$in() {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'ResetToDefaults', null);
        $v_0.addQuery($v_1);
    }
}


SP.Publishing.Navigation.WebNavigationSettingsPropertyNames = function SP_Publishing_Navigation_WebNavigationSettingsPropertyNames() {
}


SP.Publishing.Navigation.WebNavigationSettingsObjectPropertyNames = function SP_Publishing_Navigation_WebNavigationSettingsObjectPropertyNames() {
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
SP.Publishing.ImageRendition.registerClass('SP.Publishing.ImageRendition', SP.ClientValueObject);
SP.Publishing.PageLayoutCreationInformation.registerClass('SP.Publishing.PageLayoutCreationInformation', SP.ClientValueObject);
SP.Publishing.ScheduledItem.registerClass('SP.Publishing.ScheduledItem', SP.ClientObject);
SP.Publishing.PublishingPage.registerClass('SP.Publishing.PublishingPage', SP.Publishing.ScheduledItem);
SP.Publishing.PublishingPageInformation.registerClass('SP.Publishing.PublishingPageInformation', SP.ClientValueObject);
SP.Publishing.PublishingSite.registerClass('SP.Publishing.PublishingSite', SP.ClientObject);
SP.Publishing.PublishingWeb.registerClass('SP.Publishing.PublishingWeb', SP.ClientObject);
SP.Publishing.PublishingWebObjectPropertyNames.registerClass('SP.Publishing.PublishingWebObjectPropertyNames');
SP.Publishing.ScheduledItemPropertyNames.registerClass('SP.Publishing.ScheduledItemPropertyNames');
SP.Publishing.ScheduledItemObjectPropertyNames.registerClass('SP.Publishing.ScheduledItemObjectPropertyNames');
SP.Publishing.SharePagePreviewByEmailFieldsData.registerClass('SP.Publishing.SharePagePreviewByEmailFieldsData', SP.ClientValueObject);
SP.Publishing.SiteImageRenditions.registerClass('SP.Publishing.SiteImageRenditions');
SP.Publishing.SitePageFieldsData.registerClass('SP.Publishing.SitePageFieldsData', SP.ClientValueObject);
SP.Publishing.SitePageVersionInfo.registerClass('SP.Publishing.SitePageVersionInfo', SP.ClientValueObject);
SP.Publishing.SiteServicesAddins.registerClass('SP.Publishing.SiteServicesAddins');
SP.Publishing.SiteSharingEmailContext.registerClass('SP.Publishing.SiteSharingEmailContext', SP.ClientValueObject);
SP.Publishing.TextValueWithLanguage.registerClass('SP.Publishing.TextValueWithLanguage', SP.ClientValueObject);
SP.Publishing.VariationLabel.registerClass('SP.Publishing.VariationLabel', SP.ClientObject);
SP.Publishing.VariationLabelPropertyNames.registerClass('SP.Publishing.VariationLabelPropertyNames');
SP.Publishing.Variations.registerClass('SP.Publishing.Variations', SP.ClientObject);
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
SP.Publishing.VariationLabelPropertyNames.displayName = 'DisplayName';
SP.Publishing.VariationLabelPropertyNames.isSource = 'IsSource';
SP.Publishing.VariationLabelPropertyNames.language = 'Language';
SP.Publishing.VariationLabelPropertyNames.locale = 'Locale';
SP.Publishing.VariationLabelPropertyNames.title = 'Title';
SP.Publishing.VariationLabelPropertyNames.topWebUrl = 'TopWebUrl';
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
SP.Publishing.Navigation.NavigationTermObjectPropertyNames.targetUrl = 'TargetUrl';
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
SP.Publishing.Navigation.WebNavigationSettingsPropertyNames.createFriendlyUrlsForNewPages = 'CreateFriendlyUrlsForNewPages';
SP.Publishing.Navigation.WebNavigationSettingsObjectPropertyNames.currentNavigation = 'CurrentNavigation';
SP.Publishing.Navigation.WebNavigationSettingsObjectPropertyNames.globalNavigation = 'GlobalNavigation';

if( typeof(Sys) != "undefined" && Sys && Sys.Application ){
   Sys.Application.notifyScriptLoaded();
}
NotifyScriptLoadedAndExecuteWaitingJobs("SP.Publishing.js");
