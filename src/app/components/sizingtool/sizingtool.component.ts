import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
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

  isCollapsedCCA: any = true;
  isCollapsedCCG: any = true;
  isCollapsedCCW: any = true;
  isCollapsedCPACS: any = true;
  isCollapsedCRMA: any = true;
  isCollapsedDoseWatch: any = true;
  isCollapsedLB: any = true;
  isCollapsedMisc: any = true;
  isCollapsedOnWatch: any = true;
  isCollapsedPACS: any = true;
  isCollapsedRISI: any = true;
  isCollapsedc360: any = true;
  isCollapsedCA: any = true;
  isCollapsedRISIC: any = true;
  isCollapsedOther: any = true;

  Oses: any = [];
  possibleOS: any = [];
  numPossibleOS: any = [];

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

  addOS(name: any, qty: number) {
    for (var num = 0; num < qty; num++) {
      this.Oses.push(name);
    }
    console.log(this.Oses);
  }

  removeOS(name: string, qty: number) {
    var index: number;
    var length = this.Oses.length;
    console.log(qty);
    while (qty > 0) {
      index = this.Oses.indexOf(name);
      if (index > -1) {
        this.Oses.splice(index, 1);
        qty -= 1;
      }
      this.possibleOS.splice(this.possibleOS.indexOf(name), 1);
    }
  }

  getPossibleOS() {
    for (let opt of this.Oses) {
      if (this.possibleOS.indexOf(opt) < 0)
        this.possibleOS.push(opt);
    }
    console.log(this.possibleOS);
  }

  getNumPossibleOS() {
    this.numPossibleOS = [];
    var counter = 0;
    for (var i = 0; i < this.Oses.length; i++) {
        counter++;
        while (this.Oses[i] == this.Oses[i + 1]) {
          counter++
          i++
        }
        this.numPossibleOS.push(counter);
        counter = 0;
    }
    for (let o of this.numPossibleOS) {
      console.log(o);
    }
  }

  changeCollapse(name: string) {
    switch (name) {
      case "isCollapsedCCA": {
        this.isCollapsedCCA = !this.isCollapsedCCA;
        if (!this.isCollapsedCCG)
          this.isCollapsedCCG = !this.isCollapsedCCG;
        if (!this.isCollapsedCCW)
          this.isCollapsedCCW = !this.isCollapsedCCW;
        if (!this.isCollapsedCPACS)
          this.isCollapsedCPACS = !this.isCollapsedCPACS;
        if (!this.isCollapsedCRMA)
          this.isCollapsedCRMA = !this.isCollapsedCRMA;
        if (!this.isCollapsedDoseWatch)
          this.isCollapsedDoseWatch = !this.isCollapsedDoseWatch;
        if (!this.isCollapsedLB)
          this.isCollapsedLB = !this.isCollapsedLB;
        if (!this.isCollapsedMisc)
          this.isCollapsedMisc = !this.isCollapsedMisc;
        if (!this.isCollapsedOnWatch)
          this.isCollapsedOnWatch = !this.isCollapsedOnWatch;
        if (!this.isCollapsedPACS)
          this.isCollapsedPACS = !this.isCollapsedPACS;
        if (!this.isCollapsedRISI)
          this.isCollapsedRISI = !this.isCollapsedRISI;
        if (!this.isCollapsedc360)
          this.isCollapsedc360 = !this.isCollapsedc360;
        if (!this.isCollapsedCA)
          this.isCollapsedCA = !this.isCollapsedCA;
        if (!this.isCollapsedRISIC)
          this.isCollapsedRISIC = !this.isCollapsedRISIC;
        if (!this.isCollapsedOther)
          this.isCollapsedOther = !this.isCollapsedOther;
        break;
      }
      case "isCollapsedCCG": {
        this.isCollapsedCCG = !this.isCollapsedCCG;
        if (!this.isCollapsedCCA)
          this.isCollapsedCCA = !this.isCollapsedCCA;
        if (!this.isCollapsedCCW)
          this.isCollapsedCCW = !this.isCollapsedCCW;
        if (!this.isCollapsedCPACS)
          this.isCollapsedCPACS = !this.isCollapsedCPACS;
        if (!this.isCollapsedCRMA)
          this.isCollapsedCRMA = !this.isCollapsedCRMA;
        if (!this.isCollapsedDoseWatch)
          this.isCollapsedDoseWatch = !this.isCollapsedDoseWatch;
        if (!this.isCollapsedLB)
          this.isCollapsedLB = !this.isCollapsedLB;
        if (!this.isCollapsedMisc)
          this.isCollapsedMisc = !this.isCollapsedMisc;
        if (!this.isCollapsedOnWatch)
          this.isCollapsedOnWatch = !this.isCollapsedOnWatch;
        if (!this.isCollapsedPACS)
          this.isCollapsedPACS = !this.isCollapsedPACS;
        if (!this.isCollapsedRISI)
          this.isCollapsedRISI = !this.isCollapsedRISI;
        if (!this.isCollapsedc360)
          this.isCollapsedc360 = !this.isCollapsedc360;
        if (!this.isCollapsedCA)
          this.isCollapsedCA = !this.isCollapsedCA;
        if (!this.isCollapsedRISIC)
          this.isCollapsedRISIC = !this.isCollapsedRISIC;
        if (!this.isCollapsedOther)
          this.isCollapsedOther = !this.isCollapsedOther;
        break;
      }
      case "isCollapsedCCW": {
        this.isCollapsedCCW = !this.isCollapsedCCW;
        if (!this.isCollapsedCCA)
          this.isCollapsedCCA = !this.isCollapsedCCA;
        if (!this.isCollapsedCCG)
          this.isCollapsedCCG = !this.isCollapsedCCG;
        if (!this.isCollapsedCPACS)
          this.isCollapsedCPACS = !this.isCollapsedCPACS;
        if (!this.isCollapsedCRMA)
          this.isCollapsedCRMA = !this.isCollapsedCRMA;
        if (!this.isCollapsedDoseWatch)
          this.isCollapsedDoseWatch = !this.isCollapsedDoseWatch;
        if (!this.isCollapsedLB)
          this.isCollapsedLB = !this.isCollapsedLB;
        if (!this.isCollapsedMisc)
          this.isCollapsedMisc = !this.isCollapsedMisc;
        if (!this.isCollapsedOnWatch)
          this.isCollapsedOnWatch = !this.isCollapsedOnWatch;
        if (!this.isCollapsedPACS)
          this.isCollapsedPACS = !this.isCollapsedPACS;
        if (!this.isCollapsedRISI)
          this.isCollapsedRISI = !this.isCollapsedRISI;
        if (!this.isCollapsedc360)
          this.isCollapsedc360 = !this.isCollapsedc360;
        if (!this.isCollapsedCA)
          this.isCollapsedCA = !this.isCollapsedCA;
        if (!this.isCollapsedRISIC)
          this.isCollapsedRISIC = !this.isCollapsedRISIC;
        if (!this.isCollapsedOther)
          this.isCollapsedOther = !this.isCollapsedOther;
        break;
      }
      case "isCollapsedCPACS": {
        this.isCollapsedCPACS = !this.isCollapsedCPACS;
        if (!this.isCollapsedCCA)
          this.isCollapsedCCA = !this.isCollapsedCCA;
        if (!this.isCollapsedCCG)
          this.isCollapsedCCG = !this.isCollapsedCCG;
        if (!this.isCollapsedCCW)
          this.isCollapsedCCW = !this.isCollapsedCCW;
        if (!this.isCollapsedCRMA)
          this.isCollapsedCRMA = !this.isCollapsedCRMA;
        if (!this.isCollapsedDoseWatch)
          this.isCollapsedDoseWatch = !this.isCollapsedDoseWatch;
        if (!this.isCollapsedLB)
          this.isCollapsedLB = !this.isCollapsedLB;
        if (!this.isCollapsedMisc)
          this.isCollapsedMisc = !this.isCollapsedMisc;
        if (!this.isCollapsedOnWatch)
          this.isCollapsedOnWatch = !this.isCollapsedOnWatch;
        if (!this.isCollapsedPACS)
          this.isCollapsedPACS = !this.isCollapsedPACS;
        if (!this.isCollapsedRISI)
          this.isCollapsedRISI = !this.isCollapsedRISI;
        if (!this.isCollapsedc360)
          this.isCollapsedc360 = !this.isCollapsedc360;
        if (!this.isCollapsedCA)
          this.isCollapsedCA = !this.isCollapsedCA;
        if (!this.isCollapsedRISIC)
          this.isCollapsedRISIC = !this.isCollapsedRISIC;
        if (!this.isCollapsedOther)
          this.isCollapsedOther = !this.isCollapsedOther;
        break;
      }
      case "isCollapsedCRMA": {
        this.isCollapsedCRMA = !this.isCollapsedCRMA;
        if (!this.isCollapsedCCA)
          this.isCollapsedCCA = !this.isCollapsedCCA;
        if (!this.isCollapsedCCG)
          this.isCollapsedCCG = !this.isCollapsedCCG;
        if (!this.isCollapsedCCW)
          this.isCollapsedCCW = !this.isCollapsedCCW;
        if (!this.isCollapsedCPACS)
          this.isCollapsedCPACS = !this.isCollapsedCPACS;
        if (!this.isCollapsedDoseWatch)
          this.isCollapsedDoseWatch = !this.isCollapsedDoseWatch;
        if (!this.isCollapsedLB)
          this.isCollapsedLB = !this.isCollapsedLB;
        if (!this.isCollapsedMisc)
          this.isCollapsedMisc = !this.isCollapsedMisc;
        if (!this.isCollapsedOnWatch)
          this.isCollapsedOnWatch = !this.isCollapsedOnWatch;
        if (!this.isCollapsedPACS)
          this.isCollapsedPACS = !this.isCollapsedPACS;
        if (!this.isCollapsedRISI)
          this.isCollapsedRISI = !this.isCollapsedRISI;
        if (!this.isCollapsedc360)
          this.isCollapsedc360 = !this.isCollapsedc360;
        if (!this.isCollapsedCA)
          this.isCollapsedCA = !this.isCollapsedCA;
        if (!this.isCollapsedRISIC)
          this.isCollapsedRISIC = !this.isCollapsedRISIC;
        if (!this.isCollapsedOther)
          this.isCollapsedOther = !this.isCollapsedOther;
        break;
      }
      case "isCollapsedDoseWatch": {
        this.isCollapsedDoseWatch = !this.isCollapsedDoseWatch;
        if (!this.isCollapsedCCA)
          this.isCollapsedCCA = !this.isCollapsedCCA;
        if (!this.isCollapsedCCG)
          this.isCollapsedCCG = !this.isCollapsedCCG;
        if (!this.isCollapsedCCW)
          this.isCollapsedCCW = !this.isCollapsedCCW;
        if (!this.isCollapsedCPACS)
          this.isCollapsedCPACS = !this.isCollapsedCPACS;
        if (!this.isCollapsedCRMA)
          this.isCollapsedCRMA = !this.isCollapsedCRMA;
        if (!this.isCollapsedLB)
          this.isCollapsedLB = !this.isCollapsedLB;
        if (!this.isCollapsedMisc)
          this.isCollapsedMisc = !this.isCollapsedMisc;
        if (!this.isCollapsedOnWatch)
          this.isCollapsedOnWatch = !this.isCollapsedOnWatch;
        if (!this.isCollapsedPACS)
          this.isCollapsedPACS = !this.isCollapsedPACS;
        if (!this.isCollapsedRISI)
          this.isCollapsedRISI = !this.isCollapsedRISI;
        if (!this.isCollapsedc360)
          this.isCollapsedc360 = !this.isCollapsedc360;
        if (!this.isCollapsedCA)
          this.isCollapsedCA = !this.isCollapsedCA;
        if (!this.isCollapsedRISIC)
          this.isCollapsedRISIC = !this.isCollapsedRISIC;
        if (!this.isCollapsedOther)
          this.isCollapsedOther = !this.isCollapsedOther;
        break;
      }
      case "isCollapsedLB": {
        this.isCollapsedLB = !this.isCollapsedLB;
        if (!this.isCollapsedCCA)
          this.isCollapsedCCA = !this.isCollapsedCCA;
        if (!this.isCollapsedCCG)
          this.isCollapsedCCG = !this.isCollapsedCCG;
        if (!this.isCollapsedCCW)
          this.isCollapsedCCW = !this.isCollapsedCCW;
        if (!this.isCollapsedCPACS)
          this.isCollapsedCPACS = !this.isCollapsedCPACS;
        if (!this.isCollapsedCRMA)
          this.isCollapsedCRMA = !this.isCollapsedCRMA;
        if (!this.isCollapsedDoseWatch)
          this.isCollapsedDoseWatch = !this.isCollapsedDoseWatch;
        if (!this.isCollapsedMisc)
          this.isCollapsedMisc = !this.isCollapsedMisc;
        if (!this.isCollapsedOnWatch)
          this.isCollapsedOnWatch = !this.isCollapsedOnWatch;
        if (!this.isCollapsedPACS)
          this.isCollapsedPACS = !this.isCollapsedPACS;
        if (!this.isCollapsedRISI)
          this.isCollapsedRISI = !this.isCollapsedRISI;
        if (!this.isCollapsedc360)
          this.isCollapsedc360 = !this.isCollapsedc360;
        if (!this.isCollapsedCA)
          this.isCollapsedCA = !this.isCollapsedCA;
        if (!this.isCollapsedRISIC)
          this.isCollapsedRISIC = !this.isCollapsedRISIC;
        if (!this.isCollapsedOther)
          this.isCollapsedOther = !this.isCollapsedOther;
        break;
      }
      case "isCollapsedMisc": {
        this.isCollapsedMisc = !this.isCollapsedMisc;
        if (!this.isCollapsedCCA)
          this.isCollapsedCCA = !this.isCollapsedCCA;
        if (!this.isCollapsedCCG)
          this.isCollapsedCCG = !this.isCollapsedCCG;
        if (!this.isCollapsedCCW)
          this.isCollapsedCCW = !this.isCollapsedCCW;
        if (!this.isCollapsedCPACS)
          this.isCollapsedCPACS = !this.isCollapsedCPACS;
        if (!this.isCollapsedCRMA)
          this.isCollapsedCRMA = !this.isCollapsedCRMA;
        if (!this.isCollapsedDoseWatch)
          this.isCollapsedDoseWatch = !this.isCollapsedDoseWatch;
        if (!this.isCollapsedLB)
          this.isCollapsedLB = !this.isCollapsedLB;
        if (!this.isCollapsedOnWatch)
          this.isCollapsedOnWatch = !this.isCollapsedOnWatch;
        if (!this.isCollapsedPACS)
          this.isCollapsedPACS = !this.isCollapsedPACS;
        if (!this.isCollapsedRISI)
          this.isCollapsedRISI = !this.isCollapsedRISI;
        if (!this.isCollapsedc360)
          this.isCollapsedc360 = !this.isCollapsedc360;
        if (!this.isCollapsedCA)
          this.isCollapsedCA = !this.isCollapsedCA;
        if (!this.isCollapsedRISIC)
          this.isCollapsedRISIC = !this.isCollapsedRISIC;
        if (!this.isCollapsedOther)
          this.isCollapsedOther = !this.isCollapsedOther;
        break;
      }
      case "isCollapsedOnWatch": {
        this.isCollapsedOnWatch = !this.isCollapsedOnWatch;
        if (!this.isCollapsedCCA)
          this.isCollapsedCCA = !this.isCollapsedCCA;
        if (!this.isCollapsedCCG)
          this.isCollapsedCCG = !this.isCollapsedCCG;
        if (!this.isCollapsedCCW)
          this.isCollapsedCCW = !this.isCollapsedCCW;
        if (!this.isCollapsedCPACS)
          this.isCollapsedCPACS = !this.isCollapsedCPACS;
        if (!this.isCollapsedCRMA)
          this.isCollapsedCRMA = !this.isCollapsedCRMA;
        if (!this.isCollapsedDoseWatch)
          this.isCollapsedDoseWatch = !this.isCollapsedDoseWatch;
        if (!this.isCollapsedLB)
          this.isCollapsedLB = !this.isCollapsedLB;
        if (!this.isCollapsedMisc)
          this.isCollapsedMisc = !this.isCollapsedMisc;
        if (!this.isCollapsedPACS)
          this.isCollapsedPACS = !this.isCollapsedPACS;
        if (!this.isCollapsedRISI)
          this.isCollapsedRISI = !this.isCollapsedRISI;
        if (!this.isCollapsedc360)
          this.isCollapsedc360 = !this.isCollapsedc360;
        if (!this.isCollapsedCA)
          this.isCollapsedCA = !this.isCollapsedCA;
        if (!this.isCollapsedRISIC)
          this.isCollapsedRISIC = !this.isCollapsedRISIC;
        if (!this.isCollapsedOther)
          this.isCollapsedOther = !this.isCollapsedOther;
        break;
      }
      case "isCollapsedPACS": {
        this.isCollapsedPACS = !this.isCollapsedPACS;
        if (!this.isCollapsedCCA)
          this.isCollapsedCCA = !this.isCollapsedCCA;
        if (!this.isCollapsedCCG)
          this.isCollapsedCCG = !this.isCollapsedCCG;
        if (!this.isCollapsedCCW)
          this.isCollapsedCCW = !this.isCollapsedCCW;
        if (!this.isCollapsedCPACS)
          this.isCollapsedCPACS = !this.isCollapsedCPACS;
        if (!this.isCollapsedCRMA)
          this.isCollapsedCRMA = !this.isCollapsedCRMA;
        if (!this.isCollapsedDoseWatch)
          this.isCollapsedDoseWatch = !this.isCollapsedDoseWatch;
        if (!this.isCollapsedLB)
          this.isCollapsedLB = !this.isCollapsedLB;
        if (!this.isCollapsedMisc)
          this.isCollapsedMisc = !this.isCollapsedMisc;
        if (!this.isCollapsedOnWatch)
          this.isCollapsedOnWatch = !this.isCollapsedOnWatch;
        if (!this.isCollapsedRISI)
          this.isCollapsedRISI = !this.isCollapsedRISI;
        if (!this.isCollapsedc360)
          this.isCollapsedc360 = !this.isCollapsedc360;
        if (!this.isCollapsedCA)
          this.isCollapsedCA = !this.isCollapsedCA;
        if (!this.isCollapsedRISIC)
          this.isCollapsedRISIC = !this.isCollapsedRISIC;
        if (!this.isCollapsedOther)
          this.isCollapsedOther = !this.isCollapsedOther;
        break;
      }
      case "isCollapsedRISI": {
        this.isCollapsedRISI = !this.isCollapsedRISI;
        if (!this.isCollapsedCCA)
          this.isCollapsedCCA = !this.isCollapsedCCA;
        if (!this.isCollapsedCCG)
          this.isCollapsedCCG = !this.isCollapsedCCG;
        if (!this.isCollapsedCCW)
          this.isCollapsedCCW = !this.isCollapsedCCW;
        if (!this.isCollapsedCPACS)
          this.isCollapsedCPACS = !this.isCollapsedCPACS;
        if (!this.isCollapsedCRMA)
          this.isCollapsedCRMA = !this.isCollapsedCRMA;
        if (!this.isCollapsedDoseWatch)
          this.isCollapsedDoseWatch = !this.isCollapsedDoseWatch;
        if (!this.isCollapsedLB)
          this.isCollapsedLB = !this.isCollapsedLB;
        if (!this.isCollapsedMisc)
          this.isCollapsedMisc = !this.isCollapsedMisc;
        if (!this.isCollapsedOnWatch)
          this.isCollapsedOnWatch = !this.isCollapsedOnWatch;
        if (!this.isCollapsedPACS)
          this.isCollapsedPACS = !this.isCollapsedPACS;
        if (!this.isCollapsedc360)
          this.isCollapsedc360 = !this.isCollapsedc360;
        if (!this.isCollapsedCA)
          this.isCollapsedCA = !this.isCollapsedCA;
        if (!this.isCollapsedRISIC)
          this.isCollapsedRISIC = !this.isCollapsedRISIC;
        if (!this.isCollapsedOther)
          this.isCollapsedOther = !this.isCollapsedOther;
        break;
      }
      case "isCollapsedc360": {
        this.isCollapsedc360 = !this.isCollapsedc360;
        if (!this.isCollapsedCCA)
          this.isCollapsedCCA = !this.isCollapsedCCA;
        if (!this.isCollapsedCCG)
          this.isCollapsedCCG = !this.isCollapsedCCG;
        if (!this.isCollapsedCCW)
          this.isCollapsedCCW = !this.isCollapsedCCW;
        if (!this.isCollapsedCPACS)
          this.isCollapsedCPACS = !this.isCollapsedCPACS;
        if (!this.isCollapsedCRMA)
          this.isCollapsedCRMA = !this.isCollapsedCRMA;
        if (!this.isCollapsedDoseWatch)
          this.isCollapsedDoseWatch = !this.isCollapsedDoseWatch;
        if (!this.isCollapsedLB)
          this.isCollapsedLB = !this.isCollapsedLB;
        if (!this.isCollapsedMisc)
          this.isCollapsedMisc = !this.isCollapsedMisc;
        if (!this.isCollapsedOnWatch)
          this.isCollapsedOnWatch = !this.isCollapsedOnWatch;
        if (!this.isCollapsedPACS)
          this.isCollapsedPACS = !this.isCollapsedPACS;
        if (!this.isCollapsedRISI)
          this.isCollapsedRISI = !this.isCollapsedRISI;
        if (!this.isCollapsedCA)
          this.isCollapsedCA = !this.isCollapsedCA;
        if (!this.isCollapsedRISIC)
          this.isCollapsedRISIC = !this.isCollapsedRISIC;
        if (!this.isCollapsedOther)
          this.isCollapsedOther = !this.isCollapsedOther;
        break;
      }
      case "isCollapsedCA": {
        this.isCollapsedCA = !this.isCollapsedCA;
        if (!this.isCollapsedCCA)
          this.isCollapsedCCA = !this.isCollapsedCCA;
        if (!this.isCollapsedCCG)
          this.isCollapsedCCG = !this.isCollapsedCCG;
        if (!this.isCollapsedCCW)
          this.isCollapsedCCW = !this.isCollapsedCCW;
        if (!this.isCollapsedCPACS)
          this.isCollapsedCPACS = !this.isCollapsedCPACS;
        if (!this.isCollapsedCRMA)
          this.isCollapsedCRMA = !this.isCollapsedCRMA;
        if (!this.isCollapsedDoseWatch)
          this.isCollapsedDoseWatch = !this.isCollapsedDoseWatch;
        if (!this.isCollapsedLB)
          this.isCollapsedLB = !this.isCollapsedLB;
        if (!this.isCollapsedMisc)
          this.isCollapsedMisc = !this.isCollapsedMisc;
        if (!this.isCollapsedOnWatch)
          this.isCollapsedOnWatch = !this.isCollapsedOnWatch;
        if (!this.isCollapsedPACS)
          this.isCollapsedPACS = !this.isCollapsedPACS;
        if (!this.isCollapsedRISI)
          this.isCollapsedRISI = !this.isCollapsedRISI;
        if (!this.isCollapsedc360)
          this.isCollapsedc360 = !this.isCollapsedc360;
        if (!this.isCollapsedRISIC)
          this.isCollapsedRISIC = !this.isCollapsedRISIC;
        if (!this.isCollapsedOther)
          this.isCollapsedOther = !this.isCollapsedOther;
        break;
      }
      case "isCollapsedRISIC": {
        this.isCollapsedRISIC = !this.isCollapsedRISIC;
        if (!this.isCollapsedCCA)
          this.isCollapsedCCA = !this.isCollapsedCCA;
        if (!this.isCollapsedCCG)
          this.isCollapsedCCG = !this.isCollapsedCCG;
        if (!this.isCollapsedCCW)
          this.isCollapsedCCW = !this.isCollapsedCCW;
        if (!this.isCollapsedCPACS)
          this.isCollapsedCPACS = !this.isCollapsedCPACS;
        if (!this.isCollapsedCRMA)
          this.isCollapsedCRMA = !this.isCollapsedCRMA;
        if (!this.isCollapsedDoseWatch)
          this.isCollapsedDoseWatch = !this.isCollapsedDoseWatch;
        if (!this.isCollapsedLB)
          this.isCollapsedLB = !this.isCollapsedLB;
        if (!this.isCollapsedMisc)
          this.isCollapsedMisc = !this.isCollapsedMisc;
        if (!this.isCollapsedOnWatch)
          this.isCollapsedOnWatch = !this.isCollapsedOnWatch;
        if (!this.isCollapsedPACS)
          this.isCollapsedPACS = !this.isCollapsedPACS;
        if (!this.isCollapsedRISI)
          this.isCollapsedRISI = !this.isCollapsedRISI;
        if (!this.isCollapsedc360)
          this.isCollapsedc360 = !this.isCollapsedc360;
        if (!this.isCollapsedCA)
          this.isCollapsedCA = !this.isCollapsedCA;
        if (!this.isCollapsedOther)
          this.isCollapsedOther = !this.isCollapsedOther;
        break;
      }
      case "isCollapsedOther": {
        this.isCollapsedOther = !this.isCollapsedOther;
        if (!this.isCollapsedCCA)
          this.isCollapsedCCA = !this.isCollapsedCCA;
        if (!this.isCollapsedCCG)
          this.isCollapsedCCG = !this.isCollapsedCCG;
        if (!this.isCollapsedCCW)
          this.isCollapsedCCW = !this.isCollapsedCCW;
        if (!this.isCollapsedCPACS)
          this.isCollapsedCPACS = !this.isCollapsedCPACS;
        if (!this.isCollapsedCRMA)
          this.isCollapsedCRMA = !this.isCollapsedCRMA;
        if (!this.isCollapsedDoseWatch)
          this.isCollapsedDoseWatch = !this.isCollapsedDoseWatch;
        if (!this.isCollapsedLB)
          this.isCollapsedLB = !this.isCollapsedLB;
        if (!this.isCollapsedMisc)
          this.isCollapsedMisc = !this.isCollapsedMisc;
        if (!this.isCollapsedOnWatch)
          this.isCollapsedOnWatch = !this.isCollapsedOnWatch;
        if (!this.isCollapsedPACS)
          this.isCollapsedPACS = !this.isCollapsedPACS;
        if (!this.isCollapsedRISI)
          this.isCollapsedRISI = !this.isCollapsedRISI;
        if (!this.isCollapsedc360)
          this.isCollapsedc360 = !this.isCollapsedc360;
        if (!this.isCollapsedCA)
          this.isCollapsedCA = !this.isCollapsedCA;
        if (!this.isCollapsedRISIC)
          this.isCollapsedRISIC = !this.isCollapsedRISIC;
        break;
      }
    }
  }

  totalSum(e: any, vcpu: number, vram: number, raid1: number, raid2: number, raid3: number, raid4: number, iops: number, multiplier: number, action: any) {
    if (typeof (vcpu) == typeof (""))
      iops = 0;
    if (typeof (vram) == typeof (""))
      iops = 0;
    if (typeof (raid1) == typeof (""))
      iops = 0;
    if (typeof (raid2) == typeof (""))
      iops = 0;
    if (typeof (raid3) == typeof (""))
      iops = 0;
    if (typeof (raid4) == typeof (""))
      iops = 0;
    if (typeof (iops) == typeof (""))
      iops = 0;

    if (action == 'set') {
      this.vCPUSum += vcpu * multiplier;
      this.vRAMSum += vram * multiplier;
      this.RAIDSum += (raid1 + raid2 + raid3 + raid4) * multiplier;
      this.IOPSSum += iops * multiplier;
    }
    if (action == 'reset') {
      this.vCPUSum -= vcpu * multiplier;
      this.vRAMSum -= vram * multiplier;
      this.RAIDSum -= (raid1 + raid2 + raid3 + raid4) * multiplier;
      this.IOPSSum -= iops * multiplier;
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
          break;
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