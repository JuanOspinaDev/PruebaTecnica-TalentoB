const versionService = require('../core/services/VersionService');

class VersionController {
    async create(req, res) {
        try {
            const version = await versionService.createVersion(req.params.scriptId);
            res.status(201).json(version);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async getVersions(req, res) {
        try {
            const versions = await versionService.getVersions(req.params.scriptId);
            res.status(200).json(versions);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async getById(req, res) {
        try {
            const version = await versionService.getVersionById(req.params.id);
            if (!version) {
                return res.status(404).json({ error: 'Version not found' });
            }
            res.status(200).json(version);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

module.exports = new VersionController();
