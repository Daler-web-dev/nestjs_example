import { ApiProperty } from "@nestjs/swagger";
import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { Role } from "src/roles/roles.model";
import { UserRoles } from "src/roles/user-roles.model";

interface UserCreationAttribute {
    email: string
    password: string
}

@Table({tableName: "users"})
export class User extends Model<User, UserCreationAttribute> {
    @ApiProperty({example: '1',description: "Unique identifier"})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'example@gmail.com',description: "Email address"})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    email: string;

    @ApiProperty({example: '12345678',description: "Password"})
    @Column({type: DataType.STRING, allowNull: false})
    password: string

    @ApiProperty({example: 'false',description: "Is user banned"})
    @Column({type: DataType.BOOLEAN, defaultValue: false})
    banned: boolean

    @ApiProperty({example: 'This user was banned, because he is gay',description: "Why user banned"})
    @Column({type: DataType.STRING, allowNull: true})
    bannReason: string

    @BelongsToMany(() => Role, () => UserRoles)
    roles: Role[]
}