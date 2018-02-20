import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sizingtool',
  templateUrl: './sizingtool.component.html',
  styleUrls: ['./sizingtool.component.css']
})
export class SizingtoolComponent implements OnInit {

  cca: any = [];
  ccg: any = [];
  ccw: any = [];
  cpacs: any = [];
  crma: any = [];
  dosewatch: any = [];
  lb: any = [];
  misc: any = [];
  onwatch: any = [];
  pacs: any = [];
  risi: any = [];
  c360: any = [];
  ca: any = [];
  risic: any = [];
  other: any = [];

  data: any = [];

  show: any = false;

  isCollapsedCCA: any = true;

  isCollapsedCCG: any = true;

  isCollapsedCCW: any = true;

  vCPUSum: any = 0;
  vRAMSum: any = 0;
  RAIDSum: any = 0;
  IOPSSum: any = 0;
  

  constructor(private dataService: DataService) {
    this.populateData();
    this.setGroups();
  }

  ngOnInit() {
  }

  populateData() {
    this.data = this.dataService.getAll();
  }

  showItems(name: any) {
    var text = document.getElementById(name);
    if (text.style.display == "none") {
      text.style.display = "block";
    }
    else {
      text.style.display = "none";
    }
  }

  vCPU(e: any, vcpu: number, vram: number, raid1: number, raid2: number, raid3: number, raid4: number, iops: number) {
    if (e.target.checked) {
      this.vCPUSum += vcpu;
      this.vRAMSum += vram;
      this.RAIDSum += raid1 + raid2 + raid3 + raid4;
      this.IOPSSum += iops;
      console.log(this.IOPSSum);
    }
    if (!(e.target.checked)) {
      this.vCPUSum -= vcpu;
      this.vRAMSum -= vram;
      this.RAIDSum -= raid1 + raid2 + raid3 + raid4;
      this.IOPSSum -= iops;
      console.log(this.IOPSSum);
    }
  }

  setGroups() {
    for (let e of this.data) {
      switch (e.Group) {
        case "CCA":
          this.cca.push(e);
          break;
        case "CCG":
          this.ccg.push(e);
          break;
        case "CCW":
          this.ccw.push(e);
          break;
        case "CPACS":
          this.cpacs.push(e);
          break;
        case "CRMA":
          this.crma.push(e);
          break;
        case "DoseWatch":
          this.dosewatch.push(e);
          break;
        case "LB":
          this.lb.push(e);
          break;
        case "Misc.":
          this.misc.push(e);
          break;
        case "OnWatch":
          this.onwatch.push(e);
          break;
        case "PACS":
          this.pacs.push(e);
          break;
        case "RIS-I":
          this.risi.push(e);
          break;
        case "C360":
          this.c360.push(e);
          break;
        case "CA":
          this.ca.push(e);
        case "RIS_IC":
          this.risic.push(e);
          break;
        case "Other":
          this.other.push(e);
          break;
      }
    }
  }

}