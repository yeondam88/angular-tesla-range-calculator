/*
 * tesla-battery.module.ts
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// Services
import { BatteryService } from './tesla-battery.service';

// Containers
import { TeslaBatteryComponent } from './containers/tesla-battery/tesla-battery.component';

// component
import { TeslaCarComponent } from './components/tesla-car/tesla-car.component';
import { TeslaStatsComponent } from './components/tesla-stats/tesla-stats.component';

@NgModule({
  declarations: [
    // registering our container component
    TeslaBatteryComponent,
    TeslaCarComponent,
    TeslaStatsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [
    // add the service to our sub-module
    BatteryService
  ],
  exports: [
    TeslaBatteryComponent
  ]
})
export class TeslaBatteryModule { }
