// JScript File


Type.registerNamespace('SP.DocumentManagement');

SP.DocumentManagement.MetadataDefaults = function SP_DocumentManagement_MetadataDefaults(context, list) {
    SP.DocumentManagement.MetadataDefaults.initializeBase(this, [ context, SP.ClientUtility.getOrCreateObjectPathForConstructor(context, '{9410c048-d7df-4e86-b218-be5b4f4c427f}', arguments) ]);
}
SP.DocumentManagement.MetadataDefaults.newObject = function SP_DocumentManagement_MetadataDefaults$newObject(context, list) {
    return new SP.DocumentManagement.MetadataDefaults(context, new SP.ObjectPathConstructor(context, '{9410c048-d7df-4e86-b218-be5b4f4c427f}', [ list ]));
}
SP.DocumentManagement.MetadataDefaults.prototype = {
    
    setFieldDefault: function SP_DocumentManagement_MetadataDefaults$setFieldDefault(folder, fieldName, value) {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'SetFieldDefault', [ folder, fieldName, value ]);
        $v_0.addQuery($v_2);
        $v_1 = new SP.BooleanResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    },
    
    update: function SP_DocumentManagement_MetadataDefaults$update() {
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
    
    itemAt: function SP_DocumentSet_AllowedContentTypeCollection$itemAt(index) {
        return this.getItemAtIndex(index);
    },
    
    get_item: function SP_DocumentSet_AllowedContentTypeCollection$get_item(index) {
        return this.getItemAtIndex(index);
    },
    
    get_childItemType: function SP_DocumentSet_AllowedContentTypeCollection$get_childItemType() {
        return SP.ContentTypeId;
    },
    
    add: function SP_DocumentSet_AllowedContentTypeCollection$add(ctId) {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'Add', [ ctId ]);
        $v_0.addQuery($v_1);
    },
    
    remove: function SP_DocumentSet_AllowedContentTypeCollection$remove(ctId) {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'Remove', [ ctId ]);
        $v_0.addQuery($v_1);
    }
}


SP.DocumentSet.DefaultDocument = function SP_DocumentSet_DefaultDocument(context, objectPath) {
    SP.DocumentSet.DefaultDocument.initializeBase(this, [ context, objectPath ]);
}
SP.DocumentSet.DefaultDocument.prototype = {
    
    get_contentTypeId: function SP_DocumentSet_DefaultDocument$get_contentTypeId() {
        this.checkUninitializedProperty('ContentTypeId');
        return ((this.get_objectData().get_properties()['ContentTypeId']));
    },
    
    set_contentTypeId: function SP_DocumentSet_DefaultDocument$set_contentTypeId(value) {
        this.get_objectData().get_properties()['ContentTypeId'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'ContentTypeId', value));
        }
        return value;
    },
    
    get_documentPath: function SP_DocumentSet_DefaultDocument$get_documentPath() {
        this.checkUninitializedProperty('DocumentPath');
        return ((this.get_objectData().get_properties()['DocumentPath']));
    },
    
    get_name: function SP_DocumentSet_DefaultDocument$get_name() {
        this.checkUninitializedProperty('Name');
        return ((this.get_objectData().get_properties()['Name']));
    },
    
    initPropertiesFromJson: function SP_DocumentSet_DefaultDocument$initPropertiesFromJson(parentNode) {
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
    
    itemAt: function SP_DocumentSet_DefaultDocumentCollection$itemAt(index) {
        return this.getItemAtIndex(index);
    },
    
    get_item: function SP_DocumentSet_DefaultDocumentCollection$get_item(index) {
        return this.getItemAtIndex(index);
    },
    
    get_childItemType: function SP_DocumentSet_DefaultDocumentCollection$get_childItemType() {
        return SP.DocumentSet.DefaultDocument;
    },
    
    add: function SP_DocumentSet_DefaultDocumentCollection$add(name, ctId, content) {
        var $v_0 = this.get_context();
        var $v_1;
        $v_1 = new SP.DocumentSet.DefaultDocument($v_0, new SP.ObjectPathMethod($v_0, this.get_path(), 'Add', [ name, ctId, content ]));
        return $v_1;
    },
    
    changeContentTypeForDocument: function SP_DocumentSet_DefaultDocumentCollection$changeContentTypeForDocument(name, contentTypeId) {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'ChangeContentTypeForDocument', [ name, contentTypeId ]);
        $v_0.addQuery($v_2);
        $v_1 = new SP.BooleanResult();
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    },
    
    remove: function SP_DocumentSet_DefaultDocumentCollection$remove(name) {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'Remove', [ name ]);
        $v_0.addQuery($v_1);
    }
}


SP.DocumentSet.DocumentSet = function SP_DocumentSet_DocumentSet(context, objectPath) {
    SP.DocumentSet.DocumentSet.initializeBase(this, [ context, objectPath ]);
}
SP.DocumentSet.DocumentSet.getDocumentSet = function SP_DocumentSet_DocumentSet$getDocumentSet(context, folder) {
    if ((!context)) {
        throw Error.argumentNull('context');
    }
    var $v_0;
    $v_0 = new SP.DocumentSet.DocumentSet(context, new SP.ObjectPathStaticMethod(context, '{e32a87f7-b866-407d-971d-027ed940d50f}', 'GetDocumentSet', [ folder ]));
    return $v_0;
}
SP.DocumentSet.DocumentSet.create = function SP_DocumentSet_DocumentSet$create(context, parentFolder, name, ctid) {
    if ((!context)) {
        throw Error.argumentNull('context');
    }
    var $v_0;
    var $v_1 = new SP.ClientActionInvokeStaticMethod(context, '{e32a87f7-b866-407d-971d-027ed940d50f}', 'Create', [ parentFolder, name, ctid ]);
    context.addQuery($v_1);
    $v_0 = new SP.StringResult();
    context.addQueryIdAndResultObject($v_1.get_id(), $v_0);
    return $v_0;
}
SP.DocumentSet.DocumentSet.importDocumentSet = function SP_DocumentSet_DocumentSet$importDocumentSet(context, archiveStream, archiveName, parentFolder, docsetContentTypeId) {
    if ((!context)) {
        throw Error.argumentNull('context');
    }
    var $v_0;
    $v_0 = new SP.DocumentSet.DocumentSet(context, new SP.ObjectPathStaticMethod(context, '{e32a87f7-b866-407d-971d-027ed940d50f}', 'ImportDocumentSet', [ archiveStream, archiveName, parentFolder, docsetContentTypeId ]));
    return $v_0;
}
SP.DocumentSet.DocumentSet.prototype = {
    
    get_versionCollection: function SP_DocumentSet_DocumentSet$get_versionCollection() {
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['VersionCollection']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.DocumentSet.DocumentSetVersionCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'VersionCollection'));
            this.get_objectData().get_clientObjectProperties()['VersionCollection'] = $v_0;
        }
        return $v_0;
    },
    
    initPropertiesFromJson: function SP_DocumentSet_DocumentSet$initPropertiesFromJson(parentNode) {
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.VersionCollection;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('VersionCollection', this.get_versionCollection(), $v_0);
            this.get_versionCollection().fromJson($v_0);
            delete parentNode.VersionCollection;
        }
    },
    
    exportDocumentSet: function SP_DocumentSet_DocumentSet$exportDocumentSet() {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'ExportDocumentSet', null);
        $v_0.addQuery($v_2);
        $v_1 = (([]));
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    }
}


SP.DocumentSet.DocumentSetObjectPropertyNames = function SP_DocumentSet_DocumentSetObjectPropertyNames() {
}


SP.DocumentSet.DocumentSetTemplate = function SP_DocumentSet_DocumentSetTemplate(context, objectPath) {
    SP.DocumentSet.DocumentSetTemplate.initializeBase(this, [ context, objectPath ]);
}
SP.DocumentSet.DocumentSetTemplate.getContentTypeId = function SP_DocumentSet_DocumentSetTemplate$getContentTypeId(context) {
    if ((!context)) {
        throw Error.argumentNull('context');
    }
    var $v_0;
    var $v_1 = new SP.ClientActionInvokeStaticMethod(context, '{1554af8c-7213-418c-a4a8-b06e7603c68a}', 'GetContentTypeId', null);
    context.addQuery($v_1);
    $v_0 = new SP.ContentTypeId();
    context.addQueryIdAndResultObject($v_1.get_id(), $v_0);
    return $v_0;
}
SP.DocumentSet.DocumentSetTemplate.getDocumentSetTemplate = function SP_DocumentSet_DocumentSetTemplate$getDocumentSetTemplate(context, ct) {
    if ((!context)) {
        throw Error.argumentNull('context');
    }
    var $v_0;
    $v_0 = new SP.DocumentSet.DocumentSetTemplate(context, new SP.ObjectPathStaticMethod(context, '{1554af8c-7213-418c-a4a8-b06e7603c68a}', 'GetDocumentSetTemplate', [ ct ]));
    return $v_0;
}
SP.DocumentSet.DocumentSetTemplate.isChildOfDocumentSetContentType = function SP_DocumentSet_DocumentSetTemplate$isChildOfDocumentSetContentType(context, ct) {
    if ((!context)) {
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
    
    get_allowedContentTypes: function SP_DocumentSet_DocumentSetTemplate$get_allowedContentTypes() {
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['AllowedContentTypes']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.DocumentSet.AllowedContentTypeCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'AllowedContentTypes'));
            this.get_objectData().get_clientObjectProperties()['AllowedContentTypes'] = $v_0;
        }
        return $v_0;
    },
    
    get_defaultDocuments: function SP_DocumentSet_DocumentSetTemplate$get_defaultDocuments() {
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['DefaultDocuments']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.DocumentSet.DefaultDocumentCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'DefaultDocuments'));
            this.get_objectData().get_clientObjectProperties()['DefaultDocuments'] = $v_0;
        }
        return $v_0;
    },
    
    get_sharedFields: function SP_DocumentSet_DocumentSetTemplate$get_sharedFields() {
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['SharedFields']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.DocumentSet.SharedFieldCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'SharedFields'));
            this.get_objectData().get_clientObjectProperties()['SharedFields'] = $v_0;
        }
        return $v_0;
    },
    
    get_welcomePageFields: function SP_DocumentSet_DocumentSetTemplate$get_welcomePageFields() {
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['WelcomePageFields']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.DocumentSet.WelcomePageFieldCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'WelcomePageFields'));
            this.get_objectData().get_clientObjectProperties()['WelcomePageFields'] = $v_0;
        }
        return $v_0;
    },
    
    initPropertiesFromJson: function SP_DocumentSet_DocumentSetTemplate$initPropertiesFromJson(parentNode) {
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
    
    update: function SP_DocumentSet_DocumentSetTemplate$update(bPushDown) {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'Update', [ bPushDown ]);
        $v_0.addQuery($v_1);
    }
}


SP.DocumentSet.DocumentSetTemplateObjectPropertyNames = function SP_DocumentSet_DocumentSetTemplateObjectPropertyNames() {
}


SP.DocumentSet.DocumentSetVersion = function SP_DocumentSet_DocumentSetVersion(context, objectPath) {
    SP.DocumentSet.DocumentSetVersion.initializeBase(this, [ context, objectPath ]);
}
SP.DocumentSet.DocumentSetVersion.prototype = {
    
    get_comments: function SP_DocumentSet_DocumentSetVersion$get_comments() {
        this.checkUninitializedProperty('Comments');
        return ((this.get_objectData().get_properties()['Comments']));
    },
    
    get_created: function SP_DocumentSet_DocumentSetVersion$get_created() {
        this.checkUninitializedProperty('Created');
        return ((this.get_objectData().get_properties()['Created']));
    },
    
    get_createdBy: function SP_DocumentSet_DocumentSetVersion$get_createdBy() {
        this.checkUninitializedProperty('CreatedBy');
        return ((this.get_objectData().get_properties()['CreatedBy']));
    },
    
    get_parentCollection: function SP_DocumentSet_DocumentSetVersion$get_parentCollection() {
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['ParentCollection']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.DocumentSet.DocumentSetVersionCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'ParentCollection'));
            this.get_objectData().get_clientObjectProperties()['ParentCollection'] = $v_0;
        }
        return $v_0;
    },
    
    get_versionLabel: function SP_DocumentSet_DocumentSetVersion$get_versionLabel() {
        this.checkUninitializedProperty('VersionLabel');
        return ((this.get_objectData().get_properties()['VersionLabel']));
    },
    
    initPropertiesFromJson: function SP_DocumentSet_DocumentSetVersion$initPropertiesFromJson(parentNode) {
        SP.ClientObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.Comments;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Comments'] = ($v_0);
            delete parentNode.Comments;
        }
        $v_0 = parentNode.Created;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Created'] = ($v_0);
            delete parentNode.Created;
        }
        $v_0 = parentNode.CreatedBy;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['CreatedBy'] = ($v_0);
            delete parentNode.CreatedBy;
        }
        $v_0 = parentNode.ParentCollection;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.updateClientObjectPropertyType('ParentCollection', this.get_parentCollection(), $v_0);
            this.get_parentCollection().fromJson($v_0);
            delete parentNode.ParentCollection;
        }
        $v_0 = parentNode.VersionLabel;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['VersionLabel'] = ($v_0);
            delete parentNode.VersionLabel;
        }
    },
    
    getDisplayFields: function SP_DocumentSet_DocumentSetVersion$getDisplayFields() {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'GetDisplayFields', null);
        $v_0.addQuery($v_2);
        $v_1 = (([]));
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    },
    
    getDisplayContents: function SP_DocumentSet_DocumentSetVersion$getDisplayContents() {
        var $v_0 = this.get_context();
        var $v_1;
        var $v_2 = new SP.ClientActionInvokeMethod(this, 'GetDisplayContents', null);
        $v_0.addQuery($v_2);
        $v_1 = (([]));
        $v_0.addQueryIdAndResultObject($v_2.get_id(), $v_1);
        return $v_1;
    }
}


SP.DocumentSet.DocumentSetVersionPropertyNames = function SP_DocumentSet_DocumentSetVersionPropertyNames() {
}


SP.DocumentSet.DocumentSetVersionObjectPropertyNames = function SP_DocumentSet_DocumentSetVersionObjectPropertyNames() {
}


SP.DocumentSet.DocumentSetVersionCollection = function SP_DocumentSet_DocumentSetVersionCollection(context, objectPath) {
    SP.DocumentSet.DocumentSetVersionCollection.initializeBase(this, [ context, objectPath ]);
}
SP.DocumentSet.DocumentSetVersionCollection.prototype = {
    
    itemAt: function SP_DocumentSet_DocumentSetVersionCollection$itemAt(index) {
        return this.getItemAtIndex(index);
    },
    
    get_item: function SP_DocumentSet_DocumentSetVersionCollection$get_item(index) {
        return this.getItemAtIndex(index);
    },
    
    get_childItemType: function SP_DocumentSet_DocumentSetVersionCollection$get_childItemType() {
        return SP.DocumentSet.DocumentSetVersion;
    },
    
    add: function SP_DocumentSet_DocumentSetVersionCollection$add(isLastMajor, comments) {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'Add', [ isLastMajor, comments ]);
        $v_0.addQuery($v_1);
    }
}


SP.DocumentSet.DocumentSetVersionField = function SP_DocumentSet_DocumentSetVersionField() {
    SP.DocumentSet.DocumentSetVersionField.initializeBase(this);
}
SP.DocumentSet.DocumentSetVersionField.prototype = {
    $3_1: null,
    $4_1: null,
    $6_1: false,
    $0_1: null,
    
    get_formattedValue: function SP_DocumentSet_DocumentSetVersionField$get_formattedValue() {
        return this.$3_1;
    },
    
    set_formattedValue: function SP_DocumentSet_DocumentSetVersionField$set_formattedValue(value) {
        this.$3_1 = value;
        return value;
    },
    
    get_id: function SP_DocumentSet_DocumentSetVersionField$get_id() {
        return this.$4_1;
    },
    
    set_id: function SP_DocumentSet_DocumentSetVersionField$set_id(value) {
        this.$4_1 = value;
        return value;
    },
    
    get_isFieldFound: function SP_DocumentSet_DocumentSetVersionField$get_isFieldFound() {
        return this.$6_1;
    },
    
    set_isFieldFound: function SP_DocumentSet_DocumentSetVersionField$set_isFieldFound(value) {
        this.$6_1 = value;
        return value;
    },
    
    get_title: function SP_DocumentSet_DocumentSetVersionField$get_title() {
        return this.$0_1;
    },
    
    set_title: function SP_DocumentSet_DocumentSetVersionField$set_title(value) {
        this.$0_1 = value;
        return value;
    },
    
    get_typeId: function SP_DocumentSet_DocumentSetVersionField$get_typeId() {
        return '{17195ef5-1f62-4a31-9ff7-e42eec5ff89e}';
    },
    
    writeToXml: function SP_DocumentSet_DocumentSetVersionField$writeToXml(writer, serializationContext) {
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = [ 'FormattedValue', 'Id', 'IsFieldFound', 'Title' ];
        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    
    initPropertiesFromJson: function SP_DocumentSet_DocumentSetVersionField$initPropertiesFromJson(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.FormattedValue;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$3_1 = ($v_0);
            delete parentNode.FormattedValue;
        }
        $v_0 = parentNode.Id;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$4_1 = ($v_0);
            delete parentNode.Id;
        }
        $v_0 = parentNode.IsFieldFound;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$6_1 = ($v_0);
            delete parentNode.IsFieldFound;
        }
        $v_0 = parentNode.Title;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$0_1 = ($v_0);
            delete parentNode.Title;
        }
    }
}


SP.DocumentSet.DocumentSetVersionItem = function SP_DocumentSet_DocumentSetVersionItem() {
    SP.DocumentSet.DocumentSetVersionItem.initializeBase(this);
}
SP.DocumentSet.DocumentSetVersionItem.prototype = {
    $5_1: 0,
    $7_1: false,
    $8_1: null,
    $9_1: null,
    $0_1: null,
    $H_1: null,
    
    get_internalId: function SP_DocumentSet_DocumentSetVersionItem$get_internalId() {
        return this.$5_1;
    },
    
    set_internalId: function SP_DocumentSet_DocumentSetVersionItem$set_internalId(value) {
        this.$5_1 = value;
        return value;
    },
    
    get_isItemFound: function SP_DocumentSet_DocumentSetVersionItem$get_isItemFound() {
        return this.$7_1;
    },
    
    set_isItemFound: function SP_DocumentSet_DocumentSetVersionItem$set_isItemFound(value) {
        this.$7_1 = value;
        return value;
    },
    
    get_itemUrl: function SP_DocumentSet_DocumentSetVersionItem$get_itemUrl() {
        return this.$8_1;
    },
    
    set_itemUrl: function SP_DocumentSet_DocumentSetVersionItem$set_itemUrl(value) {
        this.$8_1 = value;
        return value;
    },
    
    get_linkToDocumentUrl: function SP_DocumentSet_DocumentSetVersionItem$get_linkToDocumentUrl() {
        return this.$9_1;
    },
    
    set_linkToDocumentUrl: function SP_DocumentSet_DocumentSetVersionItem$set_linkToDocumentUrl(value) {
        this.$9_1 = value;
        return value;
    },
    
    get_title: function SP_DocumentSet_DocumentSetVersionItem$get_title() {
        return this.$0_1;
    },
    
    set_title: function SP_DocumentSet_DocumentSetVersionItem$set_title(value) {
        this.$0_1 = value;
        return value;
    },
    
    get_versionLabel: function SP_DocumentSet_DocumentSetVersionItem$get_versionLabel() {
        return this.$H_1;
    },
    
    set_versionLabel: function SP_DocumentSet_DocumentSetVersionItem$set_versionLabel(value) {
        this.$H_1 = value;
        return value;
    },
    
    get_typeId: function SP_DocumentSet_DocumentSetVersionItem$get_typeId() {
        return '{d9ea6f67-67a6-4304-8fa6-8dab74cfaf0a}';
    },
    
    writeToXml: function SP_DocumentSet_DocumentSetVersionItem$writeToXml(writer, serializationContext) {
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = [ 'InternalId', 'IsItemFound', 'ItemUrl', 'LinkToDocumentUrl', 'Title', 'VersionLabel' ];
        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
        SP.ClientValueObject.prototype.writeToXml.call(this, writer, serializationContext);
    },
    
    initPropertiesFromJson: function SP_DocumentSet_DocumentSetVersionItem$initPropertiesFromJson(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.InternalId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$5_1 = ($v_0);
            delete parentNode.InternalId;
        }
        $v_0 = parentNode.IsItemFound;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$7_1 = ($v_0);
            delete parentNode.IsItemFound;
        }
        $v_0 = parentNode.ItemUrl;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$8_1 = ($v_0);
            delete parentNode.ItemUrl;
        }
        $v_0 = parentNode.LinkToDocumentUrl;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$9_1 = ($v_0);
            delete parentNode.LinkToDocumentUrl;
        }
        $v_0 = parentNode.Title;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$0_1 = ($v_0);
            delete parentNode.Title;
        }
        $v_0 = parentNode.VersionLabel;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$H_1 = ($v_0);
            delete parentNode.VersionLabel;
        }
    }
}


SP.DocumentSet.SharedFieldCollection = function SP_DocumentSet_SharedFieldCollection(context, objectPath) {
    SP.DocumentSet.SharedFieldCollection.initializeBase(this, [ context, objectPath ]);
}
SP.DocumentSet.SharedFieldCollection.prototype = {
    
    itemAt: function SP_DocumentSet_SharedFieldCollection$itemAt(index) {
        return this.getItemAtIndex(index);
    },
    
    get_item: function SP_DocumentSet_SharedFieldCollection$get_item(index) {
        return this.getItemAtIndex(index);
    },
    
    get_childItemType: function SP_DocumentSet_SharedFieldCollection$get_childItemType() {
        return SP.Field;
    },
    
    add: function SP_DocumentSet_SharedFieldCollection$add(fld) {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'Add', [ fld ]);
        $v_0.addQuery($v_1);
    },
    
    remove: function SP_DocumentSet_SharedFieldCollection$remove(fld) {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'Remove', [ fld ]);
        $v_0.addQuery($v_1);
    }
}


SP.DocumentSet.WelcomePageFieldCollection = function SP_DocumentSet_WelcomePageFieldCollection(context, objectPath) {
    SP.DocumentSet.WelcomePageFieldCollection.initializeBase(this, [ context, objectPath ]);
}
SP.DocumentSet.WelcomePageFieldCollection.prototype = {
    
    itemAt: function SP_DocumentSet_WelcomePageFieldCollection$itemAt(index) {
        return this.getItemAtIndex(index);
    },
    
    get_item: function SP_DocumentSet_WelcomePageFieldCollection$get_item(index) {
        return this.getItemAtIndex(index);
    },
    
    get_childItemType: function SP_DocumentSet_WelcomePageFieldCollection$get_childItemType() {
        return SP.Field;
    },
    
    add: function SP_DocumentSet_WelcomePageFieldCollection$add(fld) {
        var $v_0 = this.get_context();
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'Add', [ fld ]);
        $v_0.addQuery($v_1);
    },
    
    remove: function SP_DocumentSet_WelcomePageFieldCollection$remove(fieldId) {
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
    $I_1: null,
    $J_1: null,
    $K_1: null,
    $L_1: false,
    $M_1: false,
    $N_1: false,
    $O_1: false,
    $P_1: false,
    
    get_fieldDisplayName: function SP_MetadataNavigation_ConfiguredMetadataNavigationItem$get_fieldDisplayName() {
        return this.$I_1;
    },
    
    get_fieldTitle: function SP_MetadataNavigation_ConfiguredMetadataNavigationItem$get_fieldTitle() {
        return this.$J_1;
    },
    
    get_fieldTypeAsString: function SP_MetadataNavigation_ConfiguredMetadataNavigationItem$get_fieldTypeAsString() {
        return this.$K_1;
    },
    
    get_isContentTypeField: function SP_MetadataNavigation_ConfiguredMetadataNavigationItem$get_isContentTypeField() {
        return this.$L_1;
    },
    
    get_isFolderHierarchy: function SP_MetadataNavigation_ConfiguredMetadataNavigationItem$get_isFolderHierarchy() {
        return this.$M_1;
    },
    
    get_isHierarchy: function SP_MetadataNavigation_ConfiguredMetadataNavigationItem$get_isHierarchy() {
        return this.$N_1;
    },
    
    get_isMultiValueLookup: function SP_MetadataNavigation_ConfiguredMetadataNavigationItem$get_isMultiValueLookup() {
        return this.$O_1;
    },
    
    get_isTaxonomyField: function SP_MetadataNavigation_ConfiguredMetadataNavigationItem$get_isTaxonomyField() {
        return this.$P_1;
    },
    
    get_typeId: function SP_MetadataNavigation_ConfiguredMetadataNavigationItem$get_typeId() {
        return '{e7bcb1cf-a8d0-48bc-a0b6-1fb6f84ef297}';
    },
    
    writeToXml: function SP_MetadataNavigation_ConfiguredMetadataNavigationItem$writeToXml(writer, serializationContext) {
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
    
    initPropertiesFromJson: function SP_MetadataNavigation_ConfiguredMetadataNavigationItem$initPropertiesFromJson(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.FieldDisplayName;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$I_1 = ($v_0);
            delete parentNode.FieldDisplayName;
        }
        $v_0 = parentNode.FieldTitle;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$J_1 = ($v_0);
            delete parentNode.FieldTitle;
        }
        $v_0 = parentNode.FieldTypeAsString;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$K_1 = ($v_0);
            delete parentNode.FieldTypeAsString;
        }
        $v_0 = parentNode.IsContentTypeField;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$L_1 = ($v_0);
            delete parentNode.IsContentTypeField;
        }
        $v_0 = parentNode.IsFolderHierarchy;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$M_1 = ($v_0);
            delete parentNode.IsFolderHierarchy;
        }
        $v_0 = parentNode.IsHierarchy;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$N_1 = ($v_0);
            delete parentNode.IsHierarchy;
        }
        $v_0 = parentNode.IsMultiValueLookup;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$O_1 = ($v_0);
            delete parentNode.IsMultiValueLookup;
        }
        $v_0 = parentNode.IsTaxonomyField;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$P_1 = ($v_0);
            delete parentNode.IsTaxonomyField;
        }
    }
}


SP.MetadataNavigation.ConfiguredMetadataNavigationItemCollection = function SP_MetadataNavigation_ConfiguredMetadataNavigationItemCollection() {
    SP.MetadataNavigation.ConfiguredMetadataNavigationItemCollection.initializeBase(this);
}
SP.MetadataNavigation.ConfiguredMetadataNavigationItemCollection.prototype = {
    
    add: function SP_MetadataNavigation_ConfiguredMetadataNavigationItemCollection$add(item) {
        this.addChild(item);
    },
    
    get_item: function SP_MetadataNavigation_ConfiguredMetadataNavigationItemCollection$get_item(index) {
        return this.getItemAtIndex(index);
    },
    
    get_typeId: function SP_MetadataNavigation_ConfiguredMetadataNavigationItemCollection$get_typeId() {
        return '{37d7c927-279a-4cd0-bfb8-def3dfdf4415}';
    },
    
    writeToXml: function SP_MetadataNavigation_ConfiguredMetadataNavigationItemCollection$writeToXml(writer, serializationContext) {
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
SP.MetadataNavigation.MetadataNavigationSettings.getConfiguredSettings = function SP_MetadataNavigation_MetadataNavigationSettings$getConfiguredSettings(context, listPath) {
    if ((!context)) {
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
    $1_1: false,
    $2_1: false,
    $A_1: false,
    $B_1: false,
    $C_1: false,
    $D_1: 0,
    $E_1: 0,
    $F_1: null,
    $G_1: 0,
    
    get_autoPlay: function SP_Video_EmbedCodeConfiguration$get_autoPlay() {
        return this.$1_1;
    },
    
    set_autoPlay: function SP_Video_EmbedCodeConfiguration$set_autoPlay(value) {
        this.$1_1 = value;
        return value;
    },
    
    get_displayTitle: function SP_Video_EmbedCodeConfiguration$get_displayTitle() {
        return this.$2_1;
    },
    
    set_displayTitle: function SP_Video_EmbedCodeConfiguration$set_displayTitle(value) {
        this.$2_1 = value;
        return value;
    },
    
    get_linkToOwnerProfilePage: function SP_Video_EmbedCodeConfiguration$get_linkToOwnerProfilePage() {
        return this.$A_1;
    },
    
    set_linkToOwnerProfilePage: function SP_Video_EmbedCodeConfiguration$set_linkToOwnerProfilePage(value) {
        this.$A_1 = value;
        return value;
    },
    
    get_linkToVideoHomePage: function SP_Video_EmbedCodeConfiguration$get_linkToVideoHomePage() {
        return this.$B_1;
    },
    
    set_linkToVideoHomePage: function SP_Video_EmbedCodeConfiguration$set_linkToVideoHomePage(value) {
        this.$B_1 = value;
        return value;
    },
    
    get_loop: function SP_Video_EmbedCodeConfiguration$get_loop() {
        return this.$C_1;
    },
    
    set_loop: function SP_Video_EmbedCodeConfiguration$set_loop(value) {
        this.$C_1 = value;
        return value;
    },
    
    get_pixelHeight: function SP_Video_EmbedCodeConfiguration$get_pixelHeight() {
        return this.$D_1;
    },
    
    set_pixelHeight: function SP_Video_EmbedCodeConfiguration$set_pixelHeight(value) {
        this.$D_1 = value;
        return value;
    },
    
    get_pixelWidth: function SP_Video_EmbedCodeConfiguration$get_pixelWidth() {
        return this.$E_1;
    },
    
    set_pixelWidth: function SP_Video_EmbedCodeConfiguration$set_pixelWidth(value) {
        this.$E_1 = value;
        return value;
    },
    
    get_previewImagePath: function SP_Video_EmbedCodeConfiguration$get_previewImagePath() {
        return this.$F_1;
    },
    
    set_previewImagePath: function SP_Video_EmbedCodeConfiguration$set_previewImagePath(value) {
        this.$F_1 = value;
        return value;
    },
    
    get_startTime: function SP_Video_EmbedCodeConfiguration$get_startTime() {
        return this.$G_1;
    },
    
    set_startTime: function SP_Video_EmbedCodeConfiguration$set_startTime(value) {
        this.$G_1 = value;
        return value;
    },
    
    get_typeId: function SP_Video_EmbedCodeConfiguration$get_typeId() {
        return '{294cf1eb-cef4-49e0-b114-648abb3916af}';
    },
    
    writeToXml: function SP_Video_EmbedCodeConfiguration$writeToXml(writer, serializationContext) {
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
    
    initPropertiesFromJson: function SP_Video_EmbedCodeConfiguration$initPropertiesFromJson(parentNode) {
        SP.ClientValueObject.prototype.initPropertiesFromJson.call(this, parentNode);
        var $v_0;
        $v_0 = parentNode.AutoPlay;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1_1 = ($v_0);
            delete parentNode.AutoPlay;
        }
        $v_0 = parentNode.DisplayTitle;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$2_1 = ($v_0);
            delete parentNode.DisplayTitle;
        }
        $v_0 = parentNode.LinkToOwnerProfilePage;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$A_1 = ($v_0);
            delete parentNode.LinkToOwnerProfilePage;
        }
        $v_0 = parentNode.LinkToVideoHomePage;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$B_1 = ($v_0);
            delete parentNode.LinkToVideoHomePage;
        }
        $v_0 = parentNode.Loop;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$C_1 = ($v_0);
            delete parentNode.Loop;
        }
        $v_0 = parentNode.PixelHeight;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$D_1 = ($v_0);
            delete parentNode.PixelHeight;
        }
        $v_0 = parentNode.PixelWidth;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$E_1 = ($v_0);
            delete parentNode.PixelWidth;
        }
        $v_0 = parentNode.PreviewImagePath;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$F_1 = ($v_0);
            delete parentNode.PreviewImagePath;
        }
        $v_0 = parentNode.StartTime;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$G_1 = ($v_0);
            delete parentNode.StartTime;
        }
    }
}


SP.Video.VideoSet = function SP_Video_VideoSet(context, objectPath) {
    SP.Video.VideoSet.initializeBase(this, [ context, objectPath ]);
}
SP.Video.VideoSet.createVideo = function SP_Video_VideoSet$createVideo(context, parentFolder, name, ctid) {
    if ((!context)) {
        throw Error.argumentNull('context');
    }
    var $v_0;
    var $v_1 = new SP.ClientActionInvokeStaticMethod(context, '{999f0b44-5022-4c04-a0c3-d0705e44395f}', 'CreateVideo', [ parentFolder, name, ctid ]);
    context.addQuery($v_1);
    $v_0 = new SP.StringResult();
    context.addQueryIdAndResultObject($v_1.get_id(), $v_0);
    return $v_0;
}
SP.Video.VideoSet.uploadVideo = function SP_Video_VideoSet$uploadVideo(context, list, fileName, file, overwriteIfExists, parentFolderPath) {
    if ((!context)) {
        throw Error.argumentNull('context');
    }
    var $v_0;
    var $v_1 = new SP.ClientActionInvokeStaticMethod(context, '{999f0b44-5022-4c04-a0c3-d0705e44395f}', 'UploadVideo', [ list, fileName, file, overwriteIfExists, parentFolderPath ]);
    context.addQuery($v_1);
    $v_0 = new SP.StringResult();
    context.addQueryIdAndResultObject($v_1.get_id(), $v_0);
    return $v_0;
}
SP.Video.VideoSet.getEmbedCode = function SP_Video_VideoSet$getEmbedCode(context, videoPath, properties) {
    if ((!context)) {
        throw Error.argumentNull('context');
    }
    var $v_0;
    var $v_1 = new SP.ClientActionInvokeStaticMethod(context, '{999f0b44-5022-4c04-a0c3-d0705e44395f}', 'GetEmbedCode', [ videoPath, properties ]);
    context.addQuery($v_1);
    $v_0 = new SP.StringResult();
    context.addQueryIdAndResultObject($v_1.get_id(), $v_0);
    return $v_0;
}
SP.Video.VideoSet.migrateVideo = function SP_Video_VideoSet$migrateVideo(context, videoFile) {
    if ((!context)) {
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
SP.DocumentSet.DocumentSetObjectPropertyNames.registerClass('SP.DocumentSet.DocumentSetObjectPropertyNames');
SP.DocumentSet.DocumentSetTemplate.registerClass('SP.DocumentSet.DocumentSetTemplate', SP.ClientObject);
SP.DocumentSet.DocumentSetTemplateObjectPropertyNames.registerClass('SP.DocumentSet.DocumentSetTemplateObjectPropertyNames');
SP.DocumentSet.DocumentSetVersion.registerClass('SP.DocumentSet.DocumentSetVersion', SP.ClientObject);
SP.DocumentSet.DocumentSetVersionPropertyNames.registerClass('SP.DocumentSet.DocumentSetVersionPropertyNames');
SP.DocumentSet.DocumentSetVersionObjectPropertyNames.registerClass('SP.DocumentSet.DocumentSetVersionObjectPropertyNames');
SP.DocumentSet.DocumentSetVersionCollection.registerClass('SP.DocumentSet.DocumentSetVersionCollection', SP.ClientObjectCollection);
SP.DocumentSet.DocumentSetVersionField.registerClass('SP.DocumentSet.DocumentSetVersionField', SP.ClientValueObject);
SP.DocumentSet.DocumentSetVersionItem.registerClass('SP.DocumentSet.DocumentSetVersionItem', SP.ClientValueObject);
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
SP.DocumentSet.DocumentSetObjectPropertyNames.versionCollection = 'VersionCollection';
SP.DocumentSet.DocumentSetTemplateObjectPropertyNames.allowedContentTypes = 'AllowedContentTypes';
SP.DocumentSet.DocumentSetTemplateObjectPropertyNames.defaultDocuments = 'DefaultDocuments';
SP.DocumentSet.DocumentSetTemplateObjectPropertyNames.sharedFields = 'SharedFields';
SP.DocumentSet.DocumentSetTemplateObjectPropertyNames.welcomePageFields = 'WelcomePageFields';
SP.DocumentSet.DocumentSetVersionPropertyNames.comments = 'Comments';
SP.DocumentSet.DocumentSetVersionPropertyNames.created = 'Created';
SP.DocumentSet.DocumentSetVersionPropertyNames.createdBy = 'CreatedBy';
SP.DocumentSet.DocumentSetVersionPropertyNames.versionLabel = 'VersionLabel';
SP.DocumentSet.DocumentSetVersionObjectPropertyNames.parentCollection = 'ParentCollection';
};
sp_documentmanagement_initialize();

RegisterModuleInit("sp.documentmanagement.js", sp_documentmanagement_initialize);

if( typeof(Sys) != "undefined" && Sys && Sys.Application ){
   Sys.Application.notifyScriptLoaded();
}
NotifyScriptLoadedAndExecuteWaitingJobs("SP.DocumentManagement.js");
