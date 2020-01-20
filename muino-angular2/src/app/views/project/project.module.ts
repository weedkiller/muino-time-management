import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project.component';
import { ProjectidComponent } from './projectid/projectid.component';
import { ProjectRoutingModule } from './project-routing.module';
import { ProjectnewComponent } from "./projectnew/projectnew.component";
import { TasknewComponent } from "./tasknew/tasknew.component";
import { EditprojectComponent } from './editproject/editproject.component';
import { EdittaskComponent } from "./edittask/edittask.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DataTablesModule } from 'angular-datatables';

import { MatAutocompleteModule, MatDividerModule, MatButtonModule,MatCheckboxModule, MatFormFieldModule, MatInputModule, MatRippleModule } from '@angular/material';
import {MatSelectModule } from '@angular/material/select';



@NgModule({
  bootstrap: [ 
    ProjectComponent,
    ProjectidComponent,
    ProjectnewComponent,
    TasknewComponent,
    EditprojectComponent,
    EdittaskComponent
  ],
  declarations: [
    ProjectComponent,
    ProjectidComponent,
    ProjectnewComponent,
    TasknewComponent, 
    EditprojectComponent,
    EdittaskComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProjectRoutingModule,
    DataTablesModule,
    ReactiveFormsModule,

    MatAutocompleteModule,
    MatDividerModule,
    MatButtonModule,
    MatFormFieldModule,
    MatRippleModule,
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule

  ]
})
export class ProjectModule { }