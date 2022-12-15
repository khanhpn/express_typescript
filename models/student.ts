import { Table, Column, Model, HasMany } from 'sequelize-typescript';

@Table
class Student extends Model {
  @Column
  firstName: string;

  @Column
  lastName: string;

  @Column
  email: string;
}
