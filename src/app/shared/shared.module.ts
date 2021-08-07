import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../material/material.module';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CartComponent } from './components/cart/cart.component';

import { ExponentialPipe } from './pipes/exponential/exponential.pipe';
import { HighlightDirective } from './directives/highlight/highlight.directive';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CartComponent,
    ExponentialPipe,
    HighlightDirective,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    CartComponent,
    ExponentialPipe,
    HighlightDirective,
  ],
  imports: [CommonModule, RouterModule, ReactiveFormsModule, MaterialModule],
})
export class SharedModule {}
