import { Sequelize } from "sequelize";

import { ModelsInterface } from "./ModelsInterface";

export interface DbConnection extends ModelsInterface {
    sequilize: Sequelize
}