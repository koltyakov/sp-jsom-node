// JScript File


Type.registerNamespace('SP.DocumentManagement');

SP.DocumentManagement.MetadataDefaults = function SP_DocumentManagement_MetadataDefaults(context, list) {
    SP.DocumentManagement.MetadataDefaults.initializeBase(this, [ context, SP.ClientUtility.getOrCreateObjectPathForConstructor(context, '{9410c048-d7df-4e86-b218-be5b4f4c427f}', arguments) ]);
}
SP.DocumentManagement.MetadataDefaults.newObject = function SP_DocumentManagement_MetadataDefaults$newObject$st(context, list) {
    return new SP.DocumentManagement.MetadataDefaults(context, new SP.ObjectPathConstructor(context, '{9410c048-d7df-4e86-b218-be5b4f4c427f}', [ list ]));
}
SP.DocumentManagement.MetadataDefaults.prototype = {
    
    setFieldDefault: function SP_DocumentManagement_MetadataDefaults$setFieldDefault$in(folder, fieldName, value) {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'SetFieldDefault', [ folder, fieldName, value ]);
        $v_0.addQuery($v_2);
        $v_1 = new SP.BooleanResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    },
    
    update: function SP_DocumentManagement_MetadataDefaults$update$in() {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'Update', null);
        $v_0.addQuery($v_1);
    }
}


Type.registerNamespace('SP.DocumentSet');

SP.DocumentSet.AllowedContentTypeCollection = function SP_DocumentSet_AllowedContentTypeCollection(context, objectPath) {
    SP.DocumentSet.AllowedContentTypeCollection.initializeBase(this, [ context, objectPath ]);
}
SP.DocumentSet.AllowedContentTypeCollection.prototype = {
    
    itemAt: function SP_DocumentSet_AllowedContentTypeCollection$itemAt$in(index) {
        return this.getItemAtIndex(index);
    },
    
    get_item: function SP_DocumentSet_AllowedContentTypeCollection$get_item$in(index) {
        return this.getItemAtIndex(index);
    },
    
    get_childItemType: function SP_DocumentSet_AllowedContentTypeCollection$get_childItemType$in() {
        return SP.ContentTypeId;
    },
    
    add: function SP_DocumentSet_AllowedContentTypeCollection$add$in(ctId) {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'Add', [ ctId ]);
        $v_0.addQuery($v_1);
    },
    
    remove: function SP_DocumentSet_AllowedContentTypeCollection$remove$in(ctId) {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'Remove', [ ctId ]);
        $v_0.addQuery($v_1);
    }
}


SP.DocumentSet.DefaultDocument = function SP_DocumentSet_DefaultDocument(context, objectPath) {
    SP.DocumentSet.DefaultDocument.initializeBase(this, [ context, objectPath ]);
}
SP.DocumentSet.DefaultDocument.prototype = {
    
    get_contentTypeId: function SP_DocumentSet_DefaultDocument$get_contentTypeId$in() {
        this.checkUninitializedProperty('ContentTypeId');
        return (this.get_objectData().get_properties()['ContentTypeId']);
    },
    
    set_contentTypeId: function SP_DocumentSet_DefaultDocument$set_contentTypeId$in(value) {
        this.get_objectData().get_properties()['ContentTypeId'] = value;
        if (this.get_context()) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'ContentTypeId', value));
        }
        return value;
    },
    
    get_documentPath: function SP_DocumentSet_DefaultDocument$get_documentPath$in() {
        this.checkUninitializedProperty('DocumentPath');
        return (this.get_objectData().get_properties()['DocumentPath']);
    },
    
    get_name: function SP_DocumentSet_DefaultDocument$get_name$in() {
        this.checkUninitializedProperty('Name');
        return (this.get_objectData().get_properties()['Name']);
    },
    
    initPropertiesFromJson: function SP_DocumentSet_DefaultDocument$initPropertiesFromJson$in(parentNode) {
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.ContentTypeId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ContentTypeId'] = ((SP.DataConvert.fixupType(this.get_context(), $v_0)));
            delete parentNode.ContentTypeId;
        }
        $v_0 = parentNode.DocumentPath;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['DocumentPath'] = ((SP.DataConvert.fixupType(this.get_context(), $v_0)));
            delete parentNode.DocumentPath;
        }
        $v_0 = parentNode.Name;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Name'] = ($v_0);
            delete parentNode.Name;
        }
    }
}


SP.DocumentSet.DefaultDocumentPropertyNames = function SP_DocumentSet_DefaultDocumentPropertyNames() {
}


SP.DocumentSet.DefaultDocumentCollection = function SP_DocumentSet_DefaultDocumentCollection(context, objectPath) {
    SP.DocumentSet.DefaultDocumentCollection.initializeBase(this, [ context, objectPath ]);
}
SP.DocumentSet.DefaultDocumentCollection.prototype = {
    
    itemAt: function SP_DocumentSet_DefaultDocumentCollection$itemAt$in(index) {
        return this.getItemAtIndex(index);
    },
    
    get_item: function SP_DocumentSet_DefaultDocumentCollection$get_item$in(index) {
        return this.getItemAtIndex(index);
    },
    
    get_childItemType: function SP_DocumentSet_DefaultDocumentCollection$get_childItemType$in() {
        return SP.DocumentSet.DefaultDocument;
    },
    
    add: function SP_DocumentSet_DefaultDocumentCollection$add$in(name, ctId, content) {
        var $v_0 = this.get_context();
        var $v_1;
        $v_1 = new SP.DocumentSet.DefaultDocument($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'Add', [ name, ctId, content ]));
        return $v_1;
    },
    
    changeContentTypeForDocument: function SP_DocumentSet_DefaultDocumentCollection$changeContentTypeForDocument$in(name, contentTypeId) {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'ChangeContentTypeForDocument', [ name, contentTypeId ]);
        $v_0.addQuery($v_2);
        $v_1 = new SP.BooleanResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    },
    
    remove: function SP_DocumentSet_DefaultDocumentCollection$remove$in(name) {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'Remove', [ name ]);
        $v_0.addQuery($v_1);
    }
}


SP.DocumentSet.DocumentSet = function SP_DocumentSet_DocumentSet(context, objectPath) {
    SP.DocumentSet.DocumentSet.initializeBase(this, [ context, objectPath ]);
}
SP.DocumentSet.DocumentSet.getDocumentSet = function SP_DocumentSet_DocumentSet$getDocumentSet$st(context, folder) {
    if (!context) {
        throw Error.argumentNull('context');
    }
    var $v_0;
    $v_0 = new SP.DocumentSet.DocumentSet(context, new SP.ObjectPathStaticMethod(context, '{e32a87f7-b866-407d-971d-027ed940d50f}', 'GetDocumentSet', [ folder ]));
    return $v_0;
}
SP.DocumentSet.DocumentSet.create = function SP_DocumentSet_DocumentSet$create$st(context, parentFolder, name, ctid) {
    if (!context) {
        throw Error.argumentNull('context');
    }
    var $v_0;
    var $v_1 = new SP.ClientActionInvokeStaticMethod(context, '{e32a87f7-b866-407d-971d-027ed940d50f}', 'Create', [ parentFolder, name, ctid ]);
    context.addQuery($v_1);
    $v_0 = new SP.StringResult();
    context.addQueryIdAndResultObject($v_1.get_id(), $v_0);
    return $v_0;
}
SP.DocumentSet.DocumentSet.importDocumentSet = function SP_DocumentSet_DocumentSet$importDocumentSet$st(context, archiveStream, archiveName, parentFolder, docsetContentTypeId) {
    if (!context) {
        throw Error.argumentNull('context');
    }
    var $v_0;
    $v_0 = new SP.DocumentSet.DocumentSet(context, new SP.ObjectPathStaticMethod(context, '{e32a87f7-b866-407d-971d-027ed940d50f}', 'ImportDocumentSet', [ archiveStream, archiveName, parentFolder, docsetContentTypeId ]));
    return $v_0;
}
SP.DocumentSet.DocumentSet.prototype = {
    
    exportDocumentSet: function SP_DocumentSet_DocumentSet$exportDocumentSet$in() {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'ExportDocumentSet', null);
        $v_0.addQuery($v_2);
        $v_1 = (([]));
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    }
}


SP.DocumentSet.DocumentSetTemplate = function SP_DocumentSet_DocumentSetTemplate(context, objectPath) {
    SP.DocumentSet.DocumentSetTemplate.initializeBase(this, [ context, objectPath ]);
}
SP.DocumentSet.DocumentSetTemplate.getContentTypeId = function SP_DocumentSet_DocumentSetTemplate$getContentTypeId$st(context) {
    if (!context) {
        throw Error.argumentNull('context');
    }
    var $v_0;
    var $v_1 = new SP.ClientActionInvokeStaticMethod(context, '{1554af8c-7213-418c-a4a8-b06e7603c68a}', 'GetContentTypeId', null);
    context.addQuery($v_1);
    $v_0 = new SP.ContentTypeId();
    context.addQueryIdAndResultObject($v_1.get_id(), $v_0);
    return $v_0;
}
SP.DocumentSet.DocumentSetTemplate.getDocumentSetTemplate = function SP_DocumentSet_DocumentSetTemplate$getDocumentSetTemplate$st(context, ct) {
    if (!context) {
        throw Error.argumentNull('context');
    }
    var $v_0;
    $v_0 = new SP.DocumentSet.DocumentSetTemplate(context, new SP.ObjectPathStaticMethod(context, '{1554af8c-7213-418c-a4a8-b06e7603c68a}', 'GetDocumentSetTemplate', [ ct ]));
    return $v_0;
}
SP.DocumentSet.DocumentSetTemplate.isChildOfDocumentSetContentType = function SP_DocumentSet_DocumentSetTemplate$isChildOfDocumentSetContentType$st(context, ct) {
    if (!context) {
        throw Error.argumentNull('context');
    }
    var $v_0;
    var $v_1 = new SP.ClientActionInvokeStaticMethod(context, '{1554af8c-7213-418c-a4a8-b06e7603c68a}', 'IsChildOfDocumentSetContentType', [ ct ]);
    context.addQuery($v_1);
    $v_0 = new SP.BooleanResult();
    context.addQueryIdAndResultObject($v_1.get_id(), $v_0);
    return $v_0;
}
SP.DocumentSet.DocumentSetTemplate.prototype = {
    
    get_allowedContentTypes: function SP_DocumentSet_DocumentSetTemplate$get_allowedContentTypes$in() {
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['AllowedContentTypes']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.DocumentSet.AllowedContentTypeCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'AllowedContentTypes'));
            this.get_objectData().get_clientObjectProperties()['AllowedContentTypes'] = $v_0;
        }
        return $v_0;
    },
    
    get_defaultDocuments: function SP_DocumentSet_DocumentSetTemplate$get_defaultDocuments$in() {
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['DefaultDocuments']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.DocumentSet.DefaultDocumentCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'DefaultDocuments'));
            this.get_objectData().get_clientObjectProperties()['DefaultDocuments'] = $v_0;
        }
        return $v_0;
    },
    
    get_sharedFields: function SP_DocumentSet_DocumentSetTemplate$get_sharedFields$in() {
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['SharedFields']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.DocumentSet.SharedFieldCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'SharedFields'));
            this.get_objectData().get_clientObjectProperties()['SharedFields'] = $v_0;
        }
        return $v_0;
    },
    
    get_welcomePageFields: function SP_DocumentSet_DocumentSetTemplate$get_welcomePageFields$in() {
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['WelcomePageFields']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.DocumentSet.WelcomePageFieldCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'WelcomePageFields'));
            this.get_objectData().get_clientObjectProperties()['WelcomePageFields'] = $v_0;
        }
        return $v_0;
    },
    
    initPropertiesFromJson: function SP_DocumentSet_DocumentSetTemplate$initPropertiesFromJson$in(parentNode) {
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.AllowedContentTypes;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('AllowedContentTypes', this.get_allowedContentTypes(), $v_0);
            this.get_allowedContentTypes().fromJson($v_0);
            delete parentNode.AllowedContentTypes;
        }
        $v_0 = parentNode.DefaultDocuments;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('DefaultDocuments', this.get_defaultDocuments(), $v_0);
            this.get_defaultDocuments().fromJson($v_0);
            delete parentNode.DefaultDocuments;
        }
        $v_0 = parentNode.SharedFields;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('SharedFields', this.get_sharedFields(), $v_0);
            this.get_sharedFields().fromJson($v_0);
            delete parentNode.SharedFields;
        }
        $v_0 = parentNode.WelcomePageFields;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('WelcomePageFields', this.get_welcomePageFields(), $v_0);
            this.get_welcomePageFields().fromJson($v_0);
            delete parentNode.WelcomePageFields;
        }
    },
    
    update: function SP_DocumentSet_DocumentSetTemplate$update$in(bPushDown) {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'Update', [ bPushDown ]);
        $v_0.addQuery($v_1);
    }
}


SP.DocumentSet.DocumentSetTemplateObjectPropertyNames = function SP_DocumentSet_DocumentSetTemplateObjectPropertyNames() {
}


SP.DocumentSet.SharedFieldCollection = function SP_DocumentSet_SharedFieldCollection(context, objectPath) {
    SP.DocumentSet.SharedFieldCollection.initializeBase(this, [ context, objectPath ]);
}
SP.DocumentSet.SharedFieldCollection.prototype = {
    
    itemAt: function SP_DocumentSet_SharedFieldCollection$itemAt$in(index) {
        return this.getItemAtIndex(index);
    },
    
    get_item: function SP_DocumentSet_SharedFieldCollection$get_item$in(index) {
        return this.getItemAtIndex(index);
    },
    
    get_childItemType: function SP_DocumentSet_SharedFieldCollection$get_childItemType$in() {
        return SP.Field;
    },
    
    add: function SP_DocumentSet_SharedFieldCollection$add$in(fld) {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'Add', [ fld ]);
        $v_0.addQuery($v_1);
    },
    
    remove: function SP_DocumentSet_SharedFieldCollection$remove$in(fld) {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'Remove', [ fld ]);
        $v_0.addQuery($v_1);
    }
}


SP.DocumentSet.WelcomePageFieldCollection = function SP_DocumentSet_WelcomePageFieldCollection(context, objectPath) {
    SP.DocumentSet.WelcomePageFieldCollection.initializeBase(this, [ context, objectPath ]);
}
SP.DocumentSet.WelcomePageFieldCollection.prototype = {
    
    itemAt: function SP_DocumentSet_WelcomePageFieldCollection$itemAt$in(index) {
        return this.getItemAtIndex(index);
    },
    
    get_item: function SP_DocumentSet_WelcomePageFieldCollection$get_item$in(index) {
        return this.getItemAtIndex(index);
    },
    
    get_childItemType: function SP_DocumentSet_WelcomePageFieldCollection$get_childItemType$in() {
        return SP.Field;
    },
    
    add: function SP_DocumentSet_WelcomePageFieldCollection$add$in(fld) {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'Add', [ fld ]);
        $v_0.addQuery($v_1);
    },
    
    remove: function SP_DocumentSet_WelcomePageFieldCollection$remove$in(fieldId) {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'Remove', [ fieldId ]);
        $v_0.addQuery($v_1);
    }
}


Type.registerNamespace('SP.MetadataNavigation');

SP.MetadataNavigation.ConfiguredMetadataNavigationItem = function SP_MetadataNavigation_ConfiguredMetadataNavigationItem() {
    SP.MetadataNavigation.ConfiguredMetadataNavigationItem.initializeBase(this);
}
SP.MetadataNavigation.ConfiguredMetadataNavigationItem.prototype = {
    $9_1: null,
    $A_1: null,
    $B_1: null,
    $C_1: false,
    $D_1: false,
    $E_1: false,
    $F_1: false,
    $G_1: false,
    
    get_fieldDisplayName: function SP_MetadataNavigation_ConfiguredMetadataNavigationItem$get_fieldDisplayName$in() {
        return this.$9_1;
    },
    
    get_fieldTitle: function SP_MetadataNavigation_ConfiguredMetadataNavigationItem$get_fieldTitle$in() {
        return this.$A_1;
    },
    
    get_fieldTypeAsString: function SP_MetadataNavigation_ConfiguredMetadataNavigationItem$get_fieldTypeAsString$in() {
        return this.$B_1;
    },
    
    get_isContentTypeField: function SP_MetadataNavigation_ConfiguredMetadataNavigationItem$get_isContentTypeField$in() {
        return this.$C_1;
    },
    
    get_isFolderHierarchy: function SP_MetadataNavigation_ConfiguredMetadataNavigationItem$get_isFolderHierarchy$in() {
        return this.$D_1;
    },
    
    get_isHierarchy: function SP_MetadataNavigation_ConfiguredMetadataNavigationItem$get_isHierarchy$in() {
        return this.$E_1;
    },
    
    get_isMultiValueLookup: function SP_MetadataNavigation_ConfiguredMetadataNavigationItem$get_isMultiValueLookup$in() {
        return this.$F_1;
    },
    
    get_isTaxonomyField: function SP_MetadataNavigation_ConfiguredMetadataNavigationItem$get_isTaxonomyField$in() {
        return this.$G_1;
    },
    
    get_typeId: function SP_MetadataNavigation_ConfiguredMetadataNavigationItem$get_typeId$in() {
        return '{e7bcb1cf-a8d0-48bc-a0b6-1fb6f84ef297}';
    },
    
    writeToXml: function SP_MetadataNavigation_ConfiguredMetadataNavigationItem$writeToXml$in(writer, serializationContext) {
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = [ 'FieldDisplayName', 'FieldTitle', 'FieldTypeAsString', 'IsContentTypeField', 'IsFolderHierarchy', 'IsHierarchy', 'IsMultiValueLookup', 'IsTaxonomyField' ];
        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    
    initPropertiesFromJson: function SP_MetadataNavigation_ConfiguredMetadataNavigationItem$initPropertiesFromJson$in(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.FieldDisplayName;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$9_1 = ($v_0);
            delete parentNode.FieldDisplayName;
        }
        $v_0 = parentNode.FieldTitle;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$A_1 = ($v_0);
            delete parentNode.FieldTitle;
        }
        $v_0 = parentNode.FieldTypeAsString;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$B_1 = ($v_0);
            delete parentNode.FieldTypeAsString;
        }
        $v_0 = parentNode.IsContentTypeField;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$C_1 = ($v_0);
            delete parentNode.IsContentTypeField;
        }
        $v_0 = parentNode.IsFolderHierarchy;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$D_1 = ($v_0);
            delete parentNode.IsFolderHierarchy;
        }
        $v_0 = parentNode.IsHierarchy;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$E_1 = ($v_0);
            delete parentNode.IsHierarchy;
        }
        $v_0 = parentNode.IsMultiValueLookup;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$F_1 = ($v_0);
            delete parentNode.IsMultiValueLookup;
        }
        $v_0 = parentNode.IsTaxonomyField;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$G_1 = ($v_0);
            delete parentNode.IsTaxonomyField;
        }
    }
}


SP.MetadataNavigation.ConfiguredMetadataNavigationItemCollection = function SP_MetadataNavigation_ConfiguredMetadataNavigationItemCollection() {
    SP.MetadataNavigation.ConfiguredMetadataNavigationItemCollection.initializeBase(this);
}
SP.MetadataNavigation.ConfiguredMetadataNavigationItemCollection.prototype = {
    
    add: function SP_MetadataNavigation_ConfiguredMetadataNavigationItemCollection$add$in(item) {
        this.addChild(item);
    },
    
    get_item: function SP_MetadataNavigation_ConfiguredMetadataNavigationItemCollection$get_item$in(index) {
        return this.getItemAtIndex(index);
    },
    
    get_typeId: function SP_MetadataNavigation_ConfiguredMetadataNavigationItemCollection$get_typeId$in() {
        return '{37d7c927-279a-4cd0-bfb8-def3dfdf4415}';
    },
    
    writeToXml: function SP_MetadataNavigation_ConfiguredMetadataNavigationItemCollection$writeToXml$in(writer, serializationContext) {
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        SP.ClientValueObjectCollection.prototype.writeToXml.call(this, writer, serializationContext);
    }
}


SP.MetadataNavigation.MetadataNavigationSettings = function SP_MetadataNavigation_MetadataNavigationSettings(context, objectPath) {
    SP.MetadataNavigation.MetadataNavigationSettings.initializeBase(this, [ context, objectPath ]);
}
SP.MetadataNavigation.MetadataNavigationSettings.getConfiguredSettings = function SP_MetadataNavigation_MetadataNavigationSettings$getConfiguredSettings$st(context, listPath) {
    if (!context) {
        throw Error.argumentNull('context');
    }
    var $v_0;
    var $v_1 = new SP.ClientActionInvokeStaticMethod(context, '{85827e8a-d57d-445c-8ac4-1be62bf8a987}', 'GetConfiguredSettings', [ listPath ]);
    context.addQuery($v_1);
    $v_0 = new SP.MetadataNavigation.ConfiguredMetadataNavigationItemCollection();
    context.addQueryIdAndResultObject($v_1.get_id(), $v_0);
    return $v_0;
}


Type.registerNamespace('SP.Video');

SP.Video.EmbedCodeConfiguration = function SP_Video_EmbedCodeConfiguration() {
    SP.Video.EmbedCodeConfiguration.initializeBase(this);
}
SP.Video.EmbedCodeConfiguration.prototype = {
    $0_1: false,
    $1_1: false,
    $2_1: false,
    $3_1: false,
    $4_1: false,
    $5_1: 0,
    $6_1: 0,
    $7_1: null,
    $8_1: 0,
    
    get_autoPlay: function SP_Video_EmbedCodeConfiguration$get_autoPlay$in() {
        return this.$0_1;
    },
    
    set_autoPlay: function SP_Video_EmbedCodeConfiguration$set_autoPlay$in(value) {
        this.$0_1 = value;
        return value;
    },
    
    get_displayTitle: function SP_Video_EmbedCodeConfiguration$get_displayTitle$in() {
        return this.$1_1;
    },
    
    set_displayTitle: function SP_Video_EmbedCodeConfiguration$set_displayTitle$in(value) {
        this.$1_1 = value;
        return value;
    },
    
    get_linkToOwnerProfilePage: function SP_Video_EmbedCodeConfiguration$get_linkToOwnerProfilePage$in() {
        return this.$2_1;
    },
    
    set_linkToOwnerProfilePage: function SP_Video_EmbedCodeConfiguration$set_linkToOwnerProfilePage$in(value) {
        this.$2_1 = value;
        return value;
    },
    
    get_linkToVideoHomePage: function SP_Video_EmbedCodeConfiguration$get_linkToVideoHomePage$in() {
        return this.$3_1;
    },
    
    set_linkToVideoHomePage: function SP_Video_EmbedCodeConfiguration$set_linkToVideoHomePage$in(value) {
        this.$3_1 = value;
        return value;
    },
    
    get_loop: function SP_Video_EmbedCodeConfiguration$get_loop$in() {
        return this.$4_1;
    },
    
    set_loop: function SP_Video_EmbedCodeConfiguration$set_loop$in(value) {
        this.$4_1 = value;
        return value;
    },
    
    get_pixelHeight: function SP_Video_EmbedCodeConfiguration$get_pixelHeight$in() {
        return this.$5_1;
    },
    
    set_pixelHeight: function SP_Video_EmbedCodeConfiguration$set_pixelHeight$in(value) {
        this.$5_1 = value;
        return value;
    },
    
    get_pixelWidth: function SP_Video_EmbedCodeConfiguration$get_pixelWidth$in() {
        return this.$6_1;
    },
    
    set_pixelWidth: function SP_Video_EmbedCodeConfiguration$set_pixelWidth$in(value) {
        this.$6_1 = value;
        return value;
    },
    
    get_previewImagePath: function SP_Video_EmbedCodeConfiguration$get_previewImagePath$in() {
        return this.$7_1;
    },
    
    set_previewImagePath: function SP_Video_EmbedCodeConfiguration$set_previewImagePath$in(value) {
        this.$7_1 = value;
        return value;
    },
    
    get_startTime: function SP_Video_EmbedCodeConfiguration$get_startTime$in() {
        return this.$8_1;
    },
    
    set_startTime: function SP_Video_EmbedCodeConfiguration$set_startTime$in(value) {
        this.$8_1 = value;
        return value;
    },
    
    get_typeId: function SP_Video_EmbedCodeConfiguration$get_typeId$in() {
        return '{294cf1eb-cef4-49e0-b114-648abb3916af}';
    },
    
    writeToXml: function SP_Video_EmbedCodeConfiguration$writeToXml$in(writer, serializationContext) {
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = [ 'AutoPlay', 'DisplayTitle', 'LinkToOwnerProfilePage', 'LinkToVideoHomePage', 'Loop', 'PixelHeight', 'PixelWidth', 'PreviewImagePath', 'StartTime' ];
        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    
    initPropertiesFromJson: function SP_Video_EmbedCodeConfiguration$initPropertiesFromJson$in(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.AutoPlay;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$0_1 = ($v_0);
            delete parentNode.AutoPlay;
        }
        $v_0 = parentNode.DisplayTitle;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1_1 = ($v_0);
            delete parentNode.DisplayTitle;
        }
        $v_0 = parentNode.LinkToOwnerProfilePage;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$2_1 = ($v_0);
            delete parentNode.LinkToOwnerProfilePage;
        }
        $v_0 = parentNode.LinkToVideoHomePage;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$3_1 = ($v_0);
            delete parentNode.LinkToVideoHomePage;
        }
        $v_0 = parentNode.Loop;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$4_1 = ($v_0);
            delete parentNode.Loop;
        }
        $v_0 = parentNode.PixelHeight;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$5_1 = ($v_0);
            delete parentNode.PixelHeight;
        }
        $v_0 = parentNode.PixelWidth;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$6_1 = ($v_0);
            delete parentNode.PixelWidth;
        }
        $v_0 = parentNode.PreviewImagePath;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$7_1 = ($v_0);
            delete parentNode.PreviewImagePath;
        }
        $v_0 = parentNode.StartTime;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$8_1 = ($v_0);
            delete parentNode.StartTime;
        }
    }
}


SP.Video.VideoSet = function SP_Video_VideoSet(context, objectPath) {
    SP.Video.VideoSet.initializeBase(this, [ context, objectPath ]);
}
SP.Video.VideoSet.createVideo = function SP_Video_VideoSet$createVideo$st(context, parentFolder, name, ctid) {
    if (!context) {
        throw Error.argumentNull('context');
    }
    var $v_0;
    var $v_1 = new SP.ClientActionInvokeStaticMethod(context, '{999f0b44-5022-4c04-a0c3-d0705e44395f}', 'CreateVideo', [ parentFolder, name, ctid ]);
    context.addQuery($v_1);
    $v_0 = new SP.StringResult();
    context.addQueryIdAndResultObject($v_1.get_id(), $v_0);
    return $v_0;
}
SP.Video.VideoSet.uploadVideo = function SP_Video_VideoSet$uploadVideo$st(context, list, fileName, file, overwriteIfExists, parentFolderPath) {
    if (!context) {
        throw Error.argumentNull('context');
    }
    var $v_0;
    var $v_1 = new SP.ClientActionInvokeStaticMethod(context, '{999f0b44-5022-4c04-a0c3-d0705e44395f}', 'UploadVideo', [ list, fileName, file, overwriteIfExists, parentFolderPath ]);
    context.addQuery($v_1);
    $v_0 = new SP.StringResult();
    context.addQueryIdAndResultObject($v_1.get_id(), $v_0);
    return $v_0;
}
SP.Video.VideoSet.getEmbedCode = function SP_Video_VideoSet$getEmbedCode$st(context, videoPath, properties) {
    if (!context) {
        throw Error.argumentNull('context');
    }
    var $v_0;
    var $v_1 = new SP.ClientActionInvokeStaticMethod(context, '{999f0b44-5022-4c04-a0c3-d0705e44395f}', 'GetEmbedCode', [ videoPath, properties ]);
    context.addQuery($v_1);
    $v_0 = new SP.StringResult();
    context.addQueryIdAndResultObject($v_1.get_id(), $v_0);
    return $v_0;
}
SP.Video.VideoSet.migrateVideo = function SP_Video_VideoSet$migrateVideo$st(context, videoFile) {
    if (!context) {
        throw Error.argumentNull('context');
    }
    var $v_0;
    $v_0 = new SP.ListItem(context, new SP.ObjectPathStaticMethod(context, '{999f0b44-5022-4c04-a0c3-d0705e44395f}', 'MigrateVideo', [ videoFile ]));
    return $v_0;
}


SP.DocumentManagement.MetadataDefaults.registerClass('SP.DocumentManagement.MetadataDefaults', SP.ClientObject);
SP.DocumentSet.AllowedContentTypeCollection.registerClass('SP.DocumentSet.AllowedContentTypeCollection', SP.ClientObjectCollection);
SP.DocumentSet.DefaultDocument.registerClass('SP.DocumentSet.DefaultDocument', SP.ClientObject);
SP.DocumentSet.DefaultDocumentPropertyNames.registerClass('SP.DocumentSet.DefaultDocumentPropertyNames');
SP.DocumentSet.DefaultDocumentCollection.registerClass('SP.DocumentSet.DefaultDocumentCollection', SP.ClientObjectCollection);
SP.DocumentSet.DocumentSet.registerClass('SP.DocumentSet.DocumentSet', SP.ClientObject);
SP.DocumentSet.DocumentSetTemplate.registerClass('SP.DocumentSet.DocumentSetTemplate', SP.ClientObject);
SP.DocumentSet.DocumentSetTemplateObjectPropertyNames.registerClass('SP.DocumentSet.DocumentSetTemplateObjectPropertyNames');
SP.DocumentSet.SharedFieldCollection.registerClass('SP.DocumentSet.SharedFieldCollection', SP.ClientObjectCollection);
SP.DocumentSet.WelcomePageFieldCollection.registerClass('SP.DocumentSet.WelcomePageFieldCollection', SP.ClientObjectCollection);
SP.MetadataNavigation.ConfiguredMetadataNavigationItem.registerClass('SP.MetadataNavigation.ConfiguredMetadataNavigationItem', SP.ClientValueObject);
SP.MetadataNavigation.ConfiguredMetadataNavigationItemCollection.registerClass('SP.MetadataNavigation.ConfiguredMetadataNavigationItemCollection', SP.ClientValueObjectCollection);
SP.MetadataNavigation.MetadataNavigationSettings.registerClass('SP.MetadataNavigation.MetadataNavigationSettings', SP.ClientObject);
SP.Video.EmbedCodeConfiguration.registerClass('SP.Video.EmbedCodeConfiguration', SP.ClientValueObject);
SP.Video.VideoSet.registerClass('SP.Video.VideoSet', SP.DocumentSet.DocumentSet);
function sp_documentmanagement_initialize() {
SP.DocumentSet.DefaultDocumentPropertyNames.contentTypeId = 'ContentTypeId';
SP.DocumentSet.DefaultDocumentPropertyNames.documentPath = 'DocumentPath';
SP.DocumentSet.DefaultDocumentPropertyNames.name = 'Name';
SP.DocumentSet.DocumentSetTemplateObjectPropertyNames.allowedContentTypes = 'AllowedContentTypes';
SP.DocumentSet.DocumentSetTemplateObjectPropertyNames.defaultDocuments = 'DefaultDocuments';
SP.DocumentSet.DocumentSetTemplateObjectPropertyNames.sharedFields = 'SharedFields';
SP.DocumentSet.DocumentSetTemplateObjectPropertyNames.welcomePageFields = 'WelcomePageFields';
};
sp_documentmanagement_initialize();

RegisterModuleInit("sp.documentmanagement.js", sp_documentmanagement_initialize);

if( typeof(Sys) != "undefined" && Sys && Sys.Application ){
   Sys.Application.notifyScriptLoaded();
}
NotifyScriptLoadedAndExecuteWaitingJobs("SP.DocumentManagement.js");
