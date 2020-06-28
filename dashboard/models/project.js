"use strict";

const mongoose = require("mongoose");
const uuidUtils = require("../utils/uuid-utils");

const Schema = mongoose.Schema;

/**
 * Project Schema
 */
const ProjectSchema = new Schema({
    pid: { type: String, default: "", trim: true, maxlength: 50 },
    projectName: { type: String, default: "", trim: true, maxlength: 50 },
    projectDisplayName: { type: String, default: "", trim: true, maxlength: 50 },
    projectImageUrl: { type: String, default: "", trim: true, maxlength: 500 },
    sharedProjectRootPath: { type: String, default: "", trim: true, maxlength: 500 },
    createdAt: { type: Date, default: Date.now },
});

/**
 * Validations
 */

ProjectSchema.path("projectName").required(true, "Project name cannot be blank");
ProjectSchema.path("pid").required(true, "Project Id cannot be blank");

/**
 * Pre-remove hook
 */

/**
 * Methods
 */
ProjectSchema.methods = {
    create: function(projectName, projectDisplayName, projectImageUrl, sharedProjectRootPath) {
        this.projectName = projectName;
        this.projectDisplayName = projectDisplayName;
        this.projectImageUrl = projectImageUrl;
        this.sharedProjectRootPath = sharedProjectRootPath;

        this.pid = uuidUtils.projectUuid();
        return this.save();
    },

    updateProjectImageUrl: function(projectImageUrl) {
        this.projectImageUrl = projectImageUrl;
        return this.save();
    },
};

module.exports = {
    ProjectSchema,
};
