/*
 * tesla-battery.component.ts
 */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Stat } from '../../models/stat.interface';
import { BatteryService } from '../../tesla-battery.service';

@Component({
  selector: 'tesla-battery',
  template: `
    <form class="tesla-battery" [formGroup]="tesla">
      <h1>{{ title }}</h1>
      <tesla-car [wheelsize]="tesla.get('config.wheels').value"></tesla-car>
      <tesla-stats [stats]="stats"></tesla-stats>
      <div class="tesla-battery__notice">
        <p>
          The actual amount of range that you experience will vary based 
          on your particular use conditions. See how particular use conditions 
          may affect your range in our simulation model.
        </p>
        <p>
          Vehicle range may vary depending on the vehicle configuration, 
          battery age and condition, driving style and operating, environmental 
          and climate conditions.
        </p>
      </div>
    </form>
  `,
  styleUrls: ['./tesla-battery.component.scss']
})
export class TeslaBatteryComponent implements OnInit {
  title: string = 'Range Per Charge';
  models: any;
  stats: Stat[];
  tesla: FormGroup;

  private results: Array<String> = ['60', '60D', '75', '75D', '90D', 'P100D'];
  constructor(public fb: FormBuilder, private batteryService: BatteryService) {}

  ngOnInit() {

    this.models = this.batteryService.getModelData();

    this.tesla = this.fb.group({
      config: this.fb.group({
        speed: 55,
        temperature: 20,
        climate: true,
        wheels: 21
      })
    });

    this.stats = this.calculateStats(this.results, this.tesla.controls['config'].value);
  }

  private calculateStats(models, value): Stat[]  {
    return models.map(model => {
      const { speed, temperature, climate, wheels } = value;
      const miles = this.models[model][wheels][climate ? 'on' : 'off'].speed[speed][temperature];
      return {
        model,
        miles
      };
    });
  }

}