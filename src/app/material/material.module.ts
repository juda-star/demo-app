import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

export const materialModules = [
  MatIconModule,
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...materialModules],
  exports: [materialModules],
})
export class MaterialModule {}
