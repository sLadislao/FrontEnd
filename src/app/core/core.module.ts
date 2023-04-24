import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './shared/components/table/table.component';
import { NavComponent } from './shared/components/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import { ConfirmDialogComponent } from './shared/components/confirm-dialog/confirm-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import { FooterComponent } from './shared/components/footer/footer.component';

@NgModule({
  declarations: [
    TableComponent,
    NavComponent,
    ConfirmDialogComponent,
    FooterComponent
  ],
  exports: [
    NavComponent,
    TableComponent,
  ],
	imports: [
		CommonModule,
		LayoutModule,
		MatToolbarModule,
		MatButtonModule,
		MatSidenavModule,
		MatIconModule,
		MatListModule,
		RouterModule,
		MatTableModule,
		MatPaginatorModule,
		MatDialogModule
	]
})
export class CoreModule { }
