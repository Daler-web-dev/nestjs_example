import { ApiProperty } from "@nestjs/swagger";
import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { User } from "src/users/users.model";
import { UserRoles } from "./user-roles.model";

interface RoleCreationAttribute {
    value: string
    description: string
}

@Table({tableName: "roles"})
export class Role extends Model<Role, RoleCreationAttribute> {
    @ApiProperty({example: '1',description: "Unique identifier"})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'Admin',description: "Role must be unique"})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    value: string;

    @ApiProperty({example: 'Administration',description: "Role about"})
    @Column({type: DataType.STRING, allowNull: false})
    description: string

    @BelongsToMany(() => User, () => UserRoles)
    users: User[]

}