import { NgModule } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCommonModule, MatNativeDateModule, MAT_DATE_LOCALE } from "@angular/material/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';

const MaterialComponents = [
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule
]

@NgModule({
    imports: [MaterialComponents],
    exports: [MaterialComponents],
    providers: [{ provide: MAT_DATE_LOCALE, useValue: 'en-GB' }]
})

export class MaterialModule {}