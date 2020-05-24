import { DataTypes, Model } from 'sequelize';
import { db } from '../config/database';

export class User extends Model { }

User.init({
    Name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Email: {
        type: DataTypes.STRING
    },
    CreatedOn: {
        type: DataTypes.DATE
    }
}, {
    sequelize: db,
    modelName: 'Users',
    timestamps: false
})
