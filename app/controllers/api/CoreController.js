const debug = require('debug')('quiz:controller:corecontroller');

class CoreController {
    static dataMapper;

    async getAll(_, response){
        const results = await this.constructor.dataMapper.findAll();
        // this.constructor.dataMapper permet de se référer à la classe qui a permis de construire l'objet du 'static dataMapper'
        response.json(results);
    }

    async getOne(request, response){
        const { id } = request.params;
        const results = await this.constructor.dataMapper.findByPk(id);
        response.json(results);
    }

    async create(request, response){
        const results = await this.constructor.dataMapper.create(request.body);
        response.json(results);
    }

    async modify(request, response){
        const { id } = request.params;
        const results = await this.constructor.dataMapper.modify(id, request.body);
        response.json(results);
    }

    async delete(request, response){
        const { id } = request.params;
        const results = await this.constructor.dataMapper.delete(id);
        response.json(results);
    }
}

module.exports = CoreController;