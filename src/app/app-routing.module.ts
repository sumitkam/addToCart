import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './component/cart/cart.component';
import { ProductComponent } from './component/product/product.component';


const routes: Routes = [
  {path : '', redirectTo : 'product', pathMatch : 'full'},
  {path : 'product', component : ProductComponent},
  {path : 'cart', component : CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
